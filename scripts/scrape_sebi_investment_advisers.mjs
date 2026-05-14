import fs from "node:fs/promises";
import path from "node:path";

const ENDPOINT = "https://www.sebi.gov.in/sebiweb/ajax/other/getintmfpiinfo.jsp";
const SOURCE_URL =
  "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13";
const OUTPUT_DIR = path.resolve("outputs/sebi_investment_advisers");
const OUTPUT_CSV = path.join(OUTPUT_DIR, "sebi_investment_advisers_contacts.csv");

const COLUMNS = [
  "serial_no",
  "page",
  "name",
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
  "emails_all",
  "phone_numbers_all",
  "validity",
  "source_url",
];

const LABEL_TO_COLUMN = new Map([
  ["Name", "name"],
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
  ["Validity", "validity"],
]);

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
  const text = values.map(normalizeEmailField).join(" ");
  return Array.from(
    new Set(text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [])
  ).join("; ");
}

function joinPresent(...values) {
  return values.filter((value) => value && value.trim()).join("; ");
}

function toCsvCell(value) {
  const stringValue = value == null ? "" : String(value);
  return `"${stringValue.replace(/"/g, '""')}"`;
}

function parseRecords(html, pageIndex) {
  const records = [];
  const chunks = html.split(/<div\s+class=['"]fixed-table-body card-table['"][^>]*>/i).slice(1);
  const cardViewRegex =
    /<div\s+class=['"]card-view['"][^>]*>\s*<div\s+class=['"]title['"][^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/div>\s*<div\s+class=['"]value[^'"]*['"][^>]*>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/div>\s*<\/div>/gi;

  for (const chunk of chunks) {
    const record = Object.fromEntries(COLUMNS.map((column) => [column, ""]));
    record.page = String(pageIndex + 1);
    record.source_url = SOURCE_URL;

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

    record.emails_all = emailsFrom(record.email, record.correspondence_email);
    record.phone_numbers_all = joinPresent(record.telephone, record.correspondence_telephone);

    if (record.name || record.registration_no || record.email || record.address) {
      records.push(record);
    }
  }

  return records;
}

async function fetchPage(pageIndex, attempt = 1) {
  const body = new URLSearchParams({
    nextValue: "1",
    next: "n",
    intmId: "13",
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
      Referer: SOURCE_URL,
      "User-Agent":
        "Mozilla/5.0 (compatible; contact-export/1.0; +https://www.sebi.gov.in/)",
    },
    body,
  });

  if (!response.ok) {
    throw new Error(`Page ${pageIndex + 1}: HTTP ${response.status}`);
  }

  const html = await response.text();
  if (/Unauthorized Request Blocked/i.test(html)) {
    if (attempt < 3) {
      await new Promise((resolve) => setTimeout(resolve, 500 * attempt));
      return fetchPage(pageIndex, attempt + 1);
    }
    throw new Error(`Page ${pageIndex + 1}: unauthorized response from SEBI`);
  }

  return html;
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const firstPageHtml = await fetchPage(0);
  const totalPages = Number(firstPageHtml.match(/name='totalpage'\s+value=(\d+)/)?.[1] ?? 1);
  const expectedRecords = Number(
    firstPageHtml.match(/of\s+(\d+)\s+records/i)?.[1] ?? 0
  );

  const allRecords = [];
  for (let pageIndex = 0; pageIndex < totalPages; pageIndex += 1) {
    const html = pageIndex === 0 ? firstPageHtml : await fetchPage(pageIndex);
    const pageRecords = parseRecords(html, pageIndex);
    allRecords.push(...pageRecords);
    console.log(
      `Page ${String(pageIndex + 1).padStart(2, "0")}/${totalPages}: ${pageRecords.length} records`
    );
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  allRecords.forEach((record, index) => {
    record.serial_no = String(index + 1);
  });

  const csv = [
    COLUMNS.map(toCsvCell).join(","),
    ...allRecords.map((record) => COLUMNS.map((column) => toCsvCell(record[column])).join(",")),
  ].join("\n");

  await fs.writeFile(OUTPUT_CSV, `${csv}\n`, "utf8");

  const uniqueRegistrationNumbers = new Set(
    allRecords.map((record) => record.registration_no).filter(Boolean)
  );

  console.log(`Wrote ${allRecords.length} records to ${OUTPUT_CSV}`);
  console.log(`Expected records from page: ${expectedRecords || "unknown"}`);
  console.log(`Unique registration numbers: ${uniqueRegistrationNumbers.size}`);

  if (expectedRecords && allRecords.length !== expectedRecords) {
    throw new Error(`Expected ${expectedRecords} records, scraped ${allRecords.length}`);
  }
}

await main();
