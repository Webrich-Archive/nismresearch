import fs from "node:fs/promises";
import path from "node:path";

const ENDPOINT = "https://www.sebi.gov.in/sebiweb/ajax/other/getintmfpiinfo.jsp";
const OUTPUT_DIR = path.resolve("outputs/sebi_marketing_contacts");

const CATEGORIES = [
  {
    slug: "research_analysts",
    name: "Research Analyst",
    intmId: "14",
  },
  {
    slug: "portfolio_managers",
    name: "Registered Portfolio Managers",
    intmId: "33",
  },
  {
    slug: "stock_brokers_equity",
    name: "Registered Stock Brokers in equity segment",
    intmId: "30",
  },
];

const RAW_COLUMNS = [
  "serial_no",
  "category",
  "intm_id",
  "page",
  "name",
  "trade_name",
  "registration_no",
  "email",
  "telephone",
  "fax_no",
  "address",
  "contact_person",
  "correspondence_address",
  "correspondence_email",
  "correspondence_telephone",
  "correspondence_fax",
  "website",
  "exchange_name",
  "emails_all",
  "phone_numbers_all",
  "validity",
  "source_url",
];

const DEDUPED_COLUMNS = [
  "serial_no",
  "email",
  "name",
  "trade_name",
  "registration_no",
  "categories",
  "contact_person",
  "telephone",
  "address",
  "website",
  "source_urls",
];

const LABEL_TO_COLUMN = new Map([
  ["Name", "name"],
  ["Trade Name", "trade_name"],
  ["Registration No.", "registration_no"],
  ["E-mail", "email"],
  ["Telephone", "telephone"],
  ["Fax No.", "fax_no"],
  ["Address", "address"],
  ["Contact Person", "contact_person"],
  ["Correspondence Address", "correspondence_address"],
  ["Correspondence E-mail", "correspondence_email"],
  ["Correspondence Telephone", "correspondence_telephone"],
  ["Correspondence Fax", "correspondence_fax"],
  ["Website", "website"],
  ["Exchange Name", "exchange_name"],
  ["Validity", "validity"],
]);

function sourceUrl(category) {
  return `https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=${category.intmId}`;
}

function decodeEntities(input) {
  const named = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
  };

  return input.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (match, entity) => {
    if (entity[0] === "#") {
      const isHex = entity[1]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }
    return named[entity.toLowerCase()] ?? match;
  });
}

function cleanHtmlText(input) {
  return decodeEntities(
    input
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeEmailField(value) {
  return value
    .replace(/\s*@\s*/g, "@")
    .replace(/(?<=\S)\s+\.(?=\S)/g, ".")
    .replace(/(?<=\S)\.\s+(?=\S)/g, ".")
    .trim();
}

function emailsFrom(...values) {
  const text = values.map((value) => normalizeEmailField(value || "")).join(" ");
  return Array.from(
    new Set(text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [])
  );
}

function splitEmails(value) {
  return value
    .split(";")
    .map((email) => email.trim())
    .filter(Boolean);
}

function joinUnique(...values) {
  const seen = new Set();
  const joined = [];
  for (const value of values.flat()) {
    const cleaned = String(value || "").trim();
    if (!cleaned || seen.has(cleaned.toLowerCase())) continue;
    seen.add(cleaned.toLowerCase());
    joined.push(cleaned);
  }
  return joined.join("; ");
}

function toCsvCell(value) {
  const stringValue = value == null ? "" : String(value);
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function parseRecords(html, category, pageIndex) {
  const records = [];
  const chunks = html.split(/<div\s+class=['"]fixed-table-body card-table['"][^>]*>/i).slice(1);
  const cardViewRegex =
    /<div\s+class=['"]card-view['"][^>]*>\s*<div\s+class=['"]title['"][^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/div>\s*<div\s+class=['"]value[^'"]*['"][^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/div>\s*<\/div>/gi;

  for (const chunk of chunks) {
    const record = Object.fromEntries(RAW_COLUMNS.map((column) => [column, ""]));
    record.category = category.name;
    record.intm_id = category.intmId;
    record.page = String(pageIndex + 1);
    record.source_url = sourceUrl(category);

    for (const match of chunk.matchAll(cardViewRegex)) {
      const label = cleanHtmlText(match[1]);
      let value = cleanHtmlText(match[2]);
      const column = LABEL_TO_COLUMN.get(label);

      if (!column) continue;
      if (column === "email" || column === "correspondence_email") {
        value = normalizeEmailField(value);
      }
      record[column] = value;
    }

    const emails = emailsFrom(record.email, record.correspondence_email);
    record.emails_all = emails.join("; ");
    record.phone_numbers_all = joinUnique(record.telephone, record.correspondence_telephone);

    if (record.name || record.registration_no || record.email || record.address) {
      records.push(record);
    }
  }

  return records;
}

async function fetchPage(category, pageIndex, attempt = 1) {
  const body = new URLSearchParams({
    nextValue: "1",
    next: "n",
    intmId: category.intmId,
    contPer: "",
    name: "",
    regNo: "",
    email: "",
    location: "",
    exchange: "",
    affiliate: "",
    alp: "",
    language: "2",
    model: "",
    esgCategory: "",
    doDirect: String(pageIndex),
    intmIds: "",
  });

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: sourceUrl(category),
      "User-Agent":
        "Mozilla/5.0 (compatible; sebi-marketing-contact-export/1.0; +https://www.sebi.gov.in/)",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`${category.name} page ${pageIndex + 1}: HTTP ${response.status}`);
  }

  const html = await response.text();
  if (/Unauthorized Request Blocked/i.test(html)) {
    if (attempt < 4) {
      await new Promise((resolve) => setTimeout(resolve, 700 * attempt));
      return fetchPage(category, pageIndex, attempt + 1);
    }
    throw new Error(`${category.name} page ${pageIndex + 1}: unauthorized response from SEBI`);
  }

  return html;
}

async function scrapeCategory(category) {
  const firstPageHtml = await fetchPage(category, 0);
  const totalPages = Number(firstPageHtml.match(/name='totalpage'\s+value=(\d+)/)?.[1] ?? 1);
  const expectedRecords = Number(firstPageHtml.match(/of\s+(\d+)\s+records/i)?.[1] ?? 0);
  const records = [];

  for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
    const html = pageIndex === 0 ? firstPageHtml : await fetchPage(category, pageIndex);
    const pageRecords = parseRecords(html, category, pageIndex);
    records.push(...pageRecords);

    if ((pageIndex + 1) % 10 === 0 || pageIndex + 1 === totalPages) {
      console.log(
        `${category.name}: page ${pageIndex + 1}/${totalPages}, ${records.length} records so far`
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  records.forEach((record, index) => {
    record.serial_no = String(index + 1);
  });

  if (expectedRecords && records.length !== expectedRecords) {
    throw new Error(`${category.name}: expected ${expectedRecords} records, scraped ${records.length}`);
  }

  return { records, expectedRecords, totalPages };
}

async function writeCsv(filePath, columns, records) {
  const csv = [
    columns.map(toCsvCell).join(","),
    ...records.map((record) => columns.map((column) => toCsvCell(record[column])).join(",")),
  ].join("\n");
  await fs.writeFile(filePath, `${csv}\n`, "utf8");
}

function dedupeToEmailContacts(records) {
  const byEmail = new Map();

  for (const record of records) {
    for (const email of splitEmails(record.emails_all)) {
      const key = email.toLowerCase();
      const existing = byEmail.get(key);
      if (!existing) {
        byEmail.set(key, {
          serial_no: "",
          email,
          name: record.name,
          trade_name: record.trade_name,
          registration_no: record.registration_no,
          categories: record.category,
          contact_person: record.contact_person,
          telephone: record.phone_numbers_all,
          address: joinUnique(record.address, record.correspondence_address),
          website: record.website,
          source_urls: record.source_url,
        });
        continue;
      }

      existing.name = joinUnique(existing.name, record.name);
      existing.trade_name = joinUnique(existing.trade_name, record.trade_name);
      existing.registration_no = joinUnique(existing.registration_no, record.registration_no);
      existing.categories = joinUnique(existing.categories, record.category);
      existing.contact_person = joinUnique(existing.contact_person, record.contact_person);
      existing.telephone = joinUnique(existing.telephone, record.phone_numbers_all);
      existing.address = joinUnique(existing.address, record.address, record.correspondence_address);
      existing.website = joinUnique(existing.website, record.website);
      existing.source_urls = joinUnique(existing.source_urls, record.source_url);
    }
  }

  return Array.from(byEmail.values())
    .sort((a, b) => a.email.localeCompare(b.email))
    .map((record, index) => ({ ...record, serial_no: String(index + 1) }));
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const allRecords = [];
  const summary = [];

  for (const category of CATEGORIES) {
    const { records, expectedRecords, totalPages } = await scrapeCategory(category);
    allRecords.push(...records);

    const categoryPath = path.join(OUTPUT_DIR, `${category.slug}_contacts.csv`);
    await writeCsv(categoryPath, RAW_COLUMNS, records);

    const withEmail = records.filter((record) => record.emails_all).length;
    const uniqueEmails = new Set(records.flatMap((record) => splitEmails(record.emails_all))).size;
    summary.push({
      category: category.name,
      intm_id: category.intmId,
      pages: totalPages,
      expected_records: expectedRecords,
      scraped_records: records.length,
      records_with_email: withEmail,
      unique_emails: uniqueEmails,
      csv: categoryPath,
    });
  }

  allRecords.forEach((record, index) => {
    record.serial_no = String(index + 1);
  });

  const combinedPath = path.join(OUTPUT_DIR, "sebi_marketing_contacts_raw_combined.csv");
  const dedupedPath = path.join(OUTPUT_DIR, "sebi_marketing_contacts_email_deduped.csv");
  const summaryPath = path.join(OUTPUT_DIR, "sebi_marketing_contacts_summary.json");
  const dedupedRecords = dedupeToEmailContacts(allRecords);

  await writeCsv(combinedPath, RAW_COLUMNS, allRecords);
  await writeCsv(dedupedPath, DEDUPED_COLUMNS, dedupedRecords);
  await fs.writeFile(
    summaryPath,
    `${JSON.stringify(
      {
        generated_at: new Date().toISOString(),
        categories: summary,
        combined_raw_records: allRecords.length,
        deduped_email_contacts: dedupedRecords.length,
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(`Combined raw records: ${allRecords.length}`);
  console.log(`Deduped email contacts: ${dedupedRecords.length}`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
}

await main();
