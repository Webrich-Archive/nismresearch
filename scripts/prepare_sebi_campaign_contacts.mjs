import fs from "node:fs/promises";
import path from "node:path";

const OUTPUT_DIR = path.resolve("outputs/sebi_marketing_contacts/campaign_ready");

const SOURCES = [
  {
    path: path.resolve("outputs/sebi_investment_advisers/sebi_investment_advisers_contacts.csv"),
    fallbackCategory: "Investment Adviser",
    fallbackSourceUrl:
      "https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=13",
  },
  {
    path: path.resolve("outputs/sebi_marketing_contacts/sebi_marketing_contacts_raw_combined.csv"),
  },
];

const CAMPAIGN_COLUMNS = [
  "serial_no",
  "email",
  "domain",
  "priority",
  "recommended_segment",
  "email_type",
  "primary_category",
  "categories",
  "name",
  "trade_name",
  "contact_person",
  "registration_no",
  "city",
  "state",
  "telephone",
  "website",
  "address",
  "source_urls",
  "notes",
];

const CATEGORY_ORDER = [
  "Investment Adviser",
  "Research Analyst",
  "Registered Portfolio Managers",
  "Registered Stock Brokers in equity segment",
];

const FREE_EMAIL_DOMAINS = new Set([
  "aol.com",
  "gmail.com",
  "googlemail.com",
  "hotmail.com",
  "icloud.com",
  "live.com",
  "mail.com",
  "me.com",
  "msn.com",
  "outlook.com",
  "proton.me",
  "protonmail.com",
  "rediff.com",
  "rediffmail.com",
  "rocketmail.com",
  "yahoo.co.in",
  "yahoo.com",
  "ymail.com",
  "zoho.com",
]);

const ROLE_PATTERNS = {
  role_compliance: [
    "compliance",
    "regcompliance",
    "regulatory",
    "regulation",
    "legal",
    "secretarial",
    "secretary",
    "grievance",
    "investorgrievance",
    "risk",
    "audit",
    "kyc",
    "aml",
  ],
  role_generic: [
    "admin",
    "backoffice",
    "care",
    "contact",
    "customercare",
    "customer",
    "enquiry",
    "help",
    "helpdesk",
    "info",
    "mail",
    "office",
    "operations",
    "ops",
    "query",
    "service",
    "services",
    "support",
  ],
  role_sales: ["bd", "business", "marketing", "partnership", "sales"],
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char !== "\r") {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  const [headers, ...dataRows] = rows.filter((entry) => entry.length > 1 || entry[0]);
  return dataRows.map((dataRow) =>
    Object.fromEntries(headers.map((header, index) => [header, dataRow[index] ?? ""]))
  );
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

async function writeCsv(filePath, rows) {
  const csv = [
    CAMPAIGN_COLUMNS.map(csvCell).join(","),
    ...rows.map((row) => CAMPAIGN_COLUMNS.map((column) => csvCell(row[column])).join(",")),
  ].join("\n");
  await fs.writeFile(filePath, `${csv}\n`, "utf8");
}

function normalizeEmail(email) {
  return email
    .trim()
    .replace(/\s*@\s*/g, "@")
    .replace(/\s+/g, "")
    .toLowerCase();
}

function validEmailsFrom(...values) {
  const emails = [];
  for (const value of values) {
    const parts = String(value || "").split(/[;,\s]+/);
    for (const part of parts) {
      const email = normalizeEmail(part);
      if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        emails.push(email);
      }
    }
  }
  return Array.from(new Set(emails));
}

function joinUnique(...values) {
  const seen = new Set();
  const output = [];

  for (const value of values.flat()) {
    const cleaned = String(value || "").trim();
    if (!cleaned || seen.has(cleaned.toLowerCase())) continue;
    seen.add(cleaned.toLowerCase());
    output.push(cleaned);
  }

  return output.join("; ");
}

function classifyEmail(email) {
  const [local, domain] = email.split("@");
  const localTokens = local.split(/[^a-z0-9]+/).filter(Boolean);
  const tokenSet = new Set(localTokens);

  for (const [type, patterns] of Object.entries(ROLE_PATTERNS)) {
    if (
      patterns.some(
        (pattern) =>
          local === pattern ||
          tokenSet.has(pattern) ||
          local.startsWith(`${pattern}.`) ||
          local.startsWith(`${pattern}_`) ||
          local.startsWith(`${pattern}-`) ||
          local.includes(pattern)
      )
    ) {
      return type;
    }
  }

  return FREE_EMAIL_DOMAINS.has(domain)
    ? "personal_free_domain"
    : "person_or_team_business_domain";
}

function extractLocation(address) {
  const primaryAddress = String(address || "").split(";")[0];
  const parts = primaryAddress
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 3) {
    return { city: "", state: "" };
  }

  const last = parts.at(-1);
  const hasPin = /^\d{6}$/.test(last);
  if (hasPin && parts.length >= 3) {
    return {
      city: parts.at(-3) || "",
      state: parts.at(-2) || "",
    };
  }

  return {
    city: parts.at(-2) || "",
    state: parts.at(-1) || "",
  };
}

function primaryCategory(categories) {
  const categorySet = new Set(categories);
  return CATEGORY_ORDER.find((category) => categorySet.has(category)) || categories[0] || "";
}

function priorityFor(categories, emailType) {
  const categorySet = new Set(categories);
  const isIaOrRa = categorySet.has("Investment Adviser") || categorySet.has("Research Analyst");
  const isPm = categorySet.has("Registered Portfolio Managers");
  const isBroker = categorySet.has("Registered Stock Brokers in equity segment");

  if (emailType === "role_compliance") {
    return isIaOrRa || isPm ? "P2" : "P3";
  }

  if (isIaOrRa) return "P1";
  if (isPm) return "P1";
  if (isBroker && emailType === "person_or_team_business_domain") return "P2";
  if (isBroker && emailType === "role_sales") return "P2";
  return "P3";
}

function recommendedSegment(priority, emailType) {
  if (emailType === "role_compliance") return "compliance_role_inbox";
  if (priority === "P1") return "recommended_first_wave";
  if (priority === "P2") return "recommended_second_wave";
  return "lower_priority";
}

function buildCampaignRows(sourceRows) {
  const byEmail = new Map();

  for (const row of sourceRows) {
    const category = row.category || row.fallbackCategory;
    const sourceUrl = row.source_url || row.fallbackSourceUrl;
    const emails = validEmailsFrom(row.emails_all, row.email, row.correspondence_email);

    for (const email of emails) {
      const existing =
        byEmail.get(email) ||
        {
          email,
          categories: [],
          names: [],
          tradeNames: [],
          contactPeople: [],
          registrationNumbers: [],
          telephones: [],
          websites: [],
          addresses: [],
          sourceUrls: [],
        };

      existing.categories = joinUnique(existing.categories, category).split("; ").filter(Boolean);
      existing.names = joinUnique(existing.names, row.name).split("; ").filter(Boolean);
      existing.tradeNames = joinUnique(existing.tradeNames, row.trade_name).split("; ").filter(Boolean);
      existing.contactPeople = joinUnique(existing.contactPeople, row.contact_person)
        .split("; ")
        .filter(Boolean);
      existing.registrationNumbers = joinUnique(existing.registrationNumbers, row.registration_no)
        .split("; ")
        .filter(Boolean);
      existing.telephones = joinUnique(existing.telephones, row.telephone, row.correspondence_telephone)
        .split("; ")
        .filter(Boolean);
      existing.websites = joinUnique(existing.websites, row.website).split("; ").filter(Boolean);
      existing.addresses = joinUnique(existing.addresses, row.address, row.correspondence_address)
        .split("; ")
        .filter(Boolean);
      existing.sourceUrls = joinUnique(existing.sourceUrls, sourceUrl).split("; ").filter(Boolean);

      byEmail.set(email, existing);
    }
  }

  return Array.from(byEmail.values())
    .map((entry) => {
      const emailType = classifyEmail(entry.email);
      const priority = priorityFor(entry.categories, emailType);
      const address = entry.addresses[0] || "";
      const location = extractLocation(address);

      return {
        serial_no: "",
        email: entry.email,
        domain: entry.email.split("@")[1] || "",
        priority,
        recommended_segment: recommendedSegment(priority, emailType),
        email_type: emailType,
        primary_category: primaryCategory(entry.categories),
        categories: entry.categories.join("; "),
        name: entry.names[0] || "",
        trade_name: entry.tradeNames[0] || "",
        contact_person: entry.contactPeople[0] || "",
        registration_no: entry.registrationNumbers.join("; "),
        city: location.city,
        state: location.state,
        telephone: entry.telephones.join("; "),
        website: entry.websites[0] || "",
        address: address,
        source_urls: entry.sourceUrls.join("; "),
        notes: "",
      };
    })
    .sort((a, b) => {
      const priorityCompare = a.priority.localeCompare(b.priority);
      if (priorityCompare) return priorityCompare;
      const categoryCompare = a.primary_category.localeCompare(b.primary_category);
      if (categoryCompare) return categoryCompare;
      return a.email.localeCompare(b.email);
    })
    .map((row, index) => ({ ...row, serial_no: String(index + 1) }));
}

async function main() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const sourceRows = [];
  for (const source of SOURCES) {
    const rows = parseCsv(await fs.readFile(source.path, "utf8"));
    for (const row of rows) {
      sourceRows.push({
        ...row,
        fallbackCategory: source.fallbackCategory,
        fallbackSourceUrl: source.fallbackSourceUrl,
      });
    }
  }

  const campaignRows = buildCampaignRows(sourceRows);
  const recommendedRows = campaignRows.filter((row) =>
    ["recommended_first_wave", "recommended_second_wave"].includes(row.recommended_segment)
  );

  const segments = {
    "campaign_contacts_all_cleaned.csv": campaignRows,
    "campaign_contacts_recommended.csv": recommendedRows,
    "segment_investment_advisers.csv": campaignRows.filter((row) =>
      row.categories.includes("Investment Adviser")
    ),
    "segment_research_analysts.csv": campaignRows.filter((row) =>
      row.categories.includes("Research Analyst")
    ),
    "segment_portfolio_managers.csv": campaignRows.filter((row) =>
      row.categories.includes("Registered Portfolio Managers")
    ),
    "segment_stock_brokers_equity.csv": campaignRows.filter((row) =>
      row.categories.includes("Registered Stock Brokers in equity segment")
    ),
    "segment_compliance_role_inboxes.csv": campaignRows.filter(
      (row) => row.email_type === "role_compliance"
    ),
    "segment_personal_free_domain.csv": campaignRows.filter(
      (row) => row.email_type === "personal_free_domain"
    ),
    "segment_business_domain_contacts.csv": campaignRows.filter((row) =>
      ["person_or_team_business_domain", "role_sales"].includes(row.email_type)
    ),
  };

  for (const [fileName, rows] of Object.entries(segments)) {
    await writeCsv(path.join(OUTPUT_DIR, fileName), rows);
  }

  const summary = {
    generated_at: new Date().toISOString(),
    source_rows: sourceRows.length,
    all_cleaned_contacts: campaignRows.length,
    recommended_contacts: recommendedRows.length,
    by_priority: Object.fromEntries(
      ["P1", "P2", "P3"].map((priority) => [
        priority,
        campaignRows.filter((row) => row.priority === priority).length,
      ])
    ),
    by_email_type: Object.fromEntries(
      Array.from(new Set(campaignRows.map((row) => row.email_type)))
        .sort()
        .map((emailType) => [
          emailType,
          campaignRows.filter((row) => row.email_type === emailType).length,
        ])
    ),
    files: Object.fromEntries(
      Object.entries(segments).map(([fileName, rows]) => [
        fileName,
        {
          rows: rows.length,
          path: path.join(OUTPUT_DIR, fileName),
        },
      ])
    ),
  };

  await fs.writeFile(
    path.join(OUTPUT_DIR, "campaign_contacts_summary.json"),
    `${JSON.stringify(summary, null, 2)}\n`,
    "utf8"
  );

  console.log(JSON.stringify(summary, null, 2));
}

await main();
