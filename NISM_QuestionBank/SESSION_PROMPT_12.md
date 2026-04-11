# Session Prompt for Phase 12 — Series II-A (RTA Corporate) & Series II-B (RTA Mutual Fund)

**Date created:** April 12, 2026
**Pre-requisite:** Read HANDOFF.md first. 17 exams complete (7,643 questions). This session covers two related RTA exams.

---

## Phase 12: Series II-A & II-B — Registrars and Transfer Agents (2 Exams, 14 Topics, ~500 Questions)

### Context

| Parameter | Value |
|-----------|-------|
| **Exams** | NISM Series II-A: RTA (Corporate) + Series II-B: RTA (Mutual Fund) |
| **PDF (II-A)** | `/Users/shivam/aiworkspace/nismresearch/study material/NISM-Series-II-A Registrars and Transfer Agents (Corporate) Certification Examination_October-2025.pdf` (206 pages) |
| **PDF (II-B)** | `/Users/shivam/aiworkspace/nismresearch/study material/3 NISM-Series II-B_Registrars and Transfer Agents (Mutual Fund) Certification Examination_December-2025.pdf` (220 pages) |
| **Target** | II-A: ~250 Qs across 8 topics. II-B: ~250 Qs across 6 topics. Total: ~500 Qs. |
| **Difficulty** | Moderate — mix of conceptual (50%), regulatory (35%), application (10%), calculation (5%) |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |
| **Total bank after this phase** | ~8,143 questions across 188 topics, 19 exams |

### Why II-A & II-B Together?

These two exams share significant overlap in their foundation chapters (securities basics, equity, debt, other securities, regulatory framework) but diverge on operational content — II-A focuses on corporate actions, IPO processes, LODR, while II-B focuses on mutual fund operations, NAV, KYC, and MF transaction processing. Doing them together avoids reading duplicate foundational chapters twice.

---

## Part A: Series II-A — RTA (Corporate)

### PDF Chapter Structure (206 pages)

| Chapter | Title | Pages | Plist Topic(s) |
|---------|-------|-------|----------------|
| Ch 1 | Introduction to Securities | pp 14-19 | Basics of Securities and Types |
| Ch 2 | Characteristics of Equity Shares | pp 20-31 | Basics of Securities and Types |
| Ch 3 | Characteristics of Debt Securities | pp 32-42 | Basics of Securities and Types |
| Ch 4 | Characteristics of Other Securities | pp 43-46 | Basics of Securities and Types |
| Ch 5 | Regulatory Bodies and Market Structure | pp 47-56 | SEBI LODR Regulations |
| Ch 6 | Regulatory Framework | pp 57-79 | SEBI LODR Regulations |
| Ch 7 | Public Offer of Securities | pp 80-90 | Public Offerings and IPO Processes |
| Ch 8 | Modes of Allotment Other Than Public Offers | pp 91-96 | Public Offerings and IPO Processes |
| Ch 9 | Processes Related to Public Offering | pp 97-108 | Public Offerings and IPO Processes |
| Ch 10 | Concepts in Corporate Actions | pp 109-118 | Corporate Actions |
| Ch 11 | Effect of Corporate Actions | pp 119-127 | Corporate Actions |
| Ch 12 | Role of RTA in Corporate Actions | pp 128-146 | Depository Services and Dematerialisation |
| Ch 13 | Investor Interface with R&T Agent | pp 147-177 | Duplicate Share Certificates and Transmission of Securities, E-Voting and Proxy Services |
| Ch 14 | Secondary Market Transactions | pp 178-194 | SEBI LODR Regulations |
| Ch 15 | Client Servicing | pp 195-206 | Investor Grievance Handling and Redressal |

### Question Distribution for II-A (8 Topics, ~250 Questions)

| # | Topic Name (EXACT plist key) | PDF Chapters | Standalone MCQs | Caselets | Caselet Qs | Total |
|---|------------------------------|-------------|:---------------:|:--------:|:----------:|:-----:|
| 1 | Basics of Securities and Types | Ch 1-4 | 30 | 0 | 0 | 30 |
| 2 | Corporate Actions | Ch 10-11 | 30 | 2 | 10 | 40 |
| 3 | Depository Services and Dematerialisation | Ch 12 | 25 | 0 | 0 | 25 |
| 4 | Duplicate Share Certificates and Transmission of Securities | Ch 13 (§13.3-13.6) | 25 | 0 | 0 | 25 |
| 5 | E-Voting and Proxy Services | Ch 13 (§13.8-13.10) | 20 | 0 | 0 | 20 |
| 6 | Investor Grievance Handling and Redressal | Ch 15 | 25 | 0 | 0 | 25 |
| 7 | Public Offerings and IPO Processes | Ch 7-9 | 30 | 2 | 10 | 40 |
| 8 | SEBI LODR Regulations | Ch 5-6, 14 | 35 | 2 | 10 | 45 |
| | **II-A Total** | | **220** | **6** | **30** | **250** |

### Content Focus Areas for II-A

**Topic 1: Basics of Securities and Types (30 MCQs)**
- Equity: features, types (ordinary, preference), rights of shareholders, risks, terminology (face value, book value, market value, EPS, P/E)
- Corporate actions: dividend, bonus, stock split, rights issue, buyback, reduction of capital
- Debt: features, market value, yield, types (government securities, corporate bonds, debentures, CPs, CDs), credit rating
- Other securities: warrants, convertible instruments, REITs, InvITs, ETFs
- Mix: 20 conceptual, 5 calculation (yield, P/E, EPS), 5 application

**Topic 2: Corporate Actions (40 Qs = 30 MCQs + 2 caselets)**
- Dividend: interim, final, stock dividend, record date, ex-date
- Bonus issue: eligibility, ratio, accounting, impact on share price
- Stock split and consolidation: ratio, impact on face value
- Rights issue: entitlement ratio, ex-rights price, record date
- Buyback: methods (tender offer, open market, book building), SEBI regulations, limits (25% in a year, 25% of paid-up + free reserves)
- Delisting: voluntary vs compulsory, reverse book building
- RTA role in processing corporate actions, record date management, dividend/interest payment
- Caselets: corporate action processing scenarios

**Topic 3: Depository Services and Dematerialisation (25 MCQs)**
- Dematerialisation process, rematerialisation
- Depository participants, ISIN, beneficial owner
- Corporate actions through depository (bonus credit, dividend payment)
- Reconciliation: RTA-Depository reconciliation process
- Crediting shares to IEPF account
- Beneficial owner reporting

**Topic 4: Duplicate Share Certificates and Transmission (25 MCQs)**
- Issue of duplicate certificates: process, indemnity bond, advertisement, fee
- Stop transfers
- Transmission: death of holder, insolvency, by operation of law
- Difference between transfer and transmission
- SOP for change of address, PAN/KYC update
- Timelines for investor services by RTA

**Topic 5: E-Voting and Proxy Services (20 MCQs)**
- AGM requirements, EGM
- E-voting: process, platform, cut-off date, scrutinizer role
- Proxy: rights, limitations, revocation
- RTA responsibilities during AGM
- Postal ballot process

**Topic 6: Investor Grievance Handling and Redressal (25 MCQs)**
- Investor types and their needs
- Complaint handling process, turnaround times
- SCORES platform (SEBI Complaints Redress System)
- IEPF: unclaimed dividends, shares transferred to IEPF, refund process
- Client servicing best practices for RTAs

**Topic 7: Public Offerings and IPO Processes (40 Qs = 30 MCQs + 2 caselets)**
- IPO: eligibility, pricing (fixed price vs book building), DRHP, RHP
- FPO, OFS, Rights Issue
- Private placement, QIP, preferential allotment
- ESOPs, conversion of convertible instruments
- RTA role: pre-issue work (printing, dispatch), post-issue work (allotment, refund, listing)
- Application process: ASBA, UPI, lot size, oversubscription
- Caselets: IPO processing scenarios with allotment calculations

**Topic 8: SEBI LODR Regulations (45 Qs = 35 MCQs + 2 caselets)**
- SEBI regulatory framework overview
- SEBI (PFUTP) Regulations 2003
- SEBI (RTA) Regulations 1993: registration, obligations, code of conduct
- SEBI (Intermediaries) Regulations 2008
- SEBI (Depositories and Participants) Regulations 2018
- SEBI LODR 2015: continuous disclosure, corporate governance, related party transactions, material events
- Listing of securities: conditions, requirements
- Stock market participants: exchanges, clearing corporations, depositories, brokers
- Caselets: LODR compliance scenarios

---

## Part B: Series II-B — RTA (Mutual Fund)

### PDF Chapter Structure (220 pages)

| Chapter | Title | Pages | Plist Topic(s) |
|---------|-------|-------|----------------|
| Ch 1-4 | Introduction to Securities, Equity, Debt, Other Securities | pp 13-45 | (shared with II-A, skip if already read) |
| Ch 5 | Regulatory Framework | pp 46-57 | SEBI Regulations for RTAs |
| Ch 6 | Basics of RTAs | pp 58-66 | Role of RTAs in Mutual Fund Transactions |
| Ch 7 | RTA Regulations | pp 67-80 | SEBI Regulations for RTAs |
| Ch 8 | Basics of Mutual Funds | pp 81-95 | Role of RTAs in Mutual Fund Transactions |
| Ch 9 | Mutual Fund Regulation | pp 96-109 | SEBI Regulations for RTAs |
| Ch 10 | Types and Classification of Mutual Funds | pp 110-134 | Role of RTAs in Mutual Fund Transactions |
| Ch 11 | Operational Concepts of Mutual Funds | pp 135-153 | NAV Calculations and Fund Valuation, Processing of Mutual Fund Transactions |
| Ch 12 | Investors in Mutual Funds | pp 154-175 | KYC and Compliance Requirements, Investor Services and Transaction Processing |
| Ch 13 | Mutual Fund Transactions | pp 176-181 | Processing of Mutual Fund Transactions |
| Ch 14 | Processing of Transactions | pp 182-200 | Processing of Mutual Fund Transactions, Investor Services and Transaction Processing |
| Ch 15 | Investor Services and Grievance | pp 201-220 | Investor Services and Transaction Processing |

### Question Distribution for II-B (6 Topics, ~250 Questions)

| # | Topic Name (EXACT plist key) | PDF Chapters | Standalone MCQs | Caselets | Caselet Qs | Total |
|---|------------------------------|-------------|:---------------:|:--------:|:----------:|:-----:|
| 1 | Role of RTAs in Mutual Fund Transactions | Ch 6, 8, 10 | 40 | 2 | 10 | 50 |
| 2 | SEBI Regulations for RTAs | Ch 5, 7, 9 | 40 | 0 | 0 | 40 |
| 3 | NAV Calculations and Fund Valuation | Ch 11 (§11.3-11.7) | 30 | 2 | 10 | 40 |
| 4 | Processing of Mutual Fund Transactions | Ch 11 (§11.1-11.2, 11.8-11.11), 13, 14 | 35 | 2 | 10 | 45 |
| 5 | KYC and Compliance Requirements | Ch 12 (§12.3-12.6) | 35 | 0 | 0 | 35 |
| 6 | Investor Services and Transaction Processing | Ch 12 (§12.1-12.2), 14, 15 | 30 | 2 | 10 | 40 |
| | **II-B Total** | | **210** | **8** | **40** | **250** |

### Content Focus Areas for II-B

**Topic 1: Role of RTAs in Mutual Fund Transactions (50 Qs = 40 MCQs + 2 caselets)**
- RTA functions: record keeping, transaction processing, statement generation, dividend processing
- ISC and OPA: Investor Service Centre, Official Point of Acceptance
- QRTAs: Qualified RTAs, enhanced monitoring requirements
- RTA-Depository interface, FIP to Account Aggregator
- Mutual fund basics: structure (sponsor, AMC, trustee, custodian), types (open/closed, equity/debt/hybrid)
- Fund classification: SEBI categorization (large cap, mid cap, small cap, flexi cap, etc.)
- Product labelling, strategy-based classification
- Caselets: RTA operational scenarios

**Topic 2: SEBI Regulations for RTAs (40 MCQs)**
- SEBI (RTA) Regulations 1993: registration, obligations, inspection
- SEBI LODR guidelines relevant to RTAs
- Enhanced monitoring for QRTAs
- Cyber security and cyber resilience framework for QRTAs
- Systems audit framework
- UBO (Ultimate Beneficial Owner) requirements
- RTA inter-operable platform
- SEBI MF Regulations relevant to RTA operations
- Mix: 30 regulatory, 10 conceptual

**Topic 3: NAV Calculations and Fund Valuation (40 Qs = 30 MCQs + 2 caselets)**
- NAV computation: (Total Assets - Total Liabilities) / Units Outstanding
- Applicable NAV rules, cut-off times
- Time stamping and risk control
- Segregated portfolios (side-pocketing)
- Mark-to-market valuation, amortization
- RTA role in tax computation, CBDT reporting
- Caselets: NAV calculation scenarios with numbers
- Mix: 15 calculation, 10 conceptual, 5 regulatory

**Topic 4: Processing of Mutual Fund Transactions (45 Qs = 35 MCQs + 2 caselets)**
- NFO processing
- Ongoing/continuous offer processing
- Purchase: application form vs transaction slip, ASBA
- Redemption: process, payment timelines, exit loads
- IDCW (dividend) payouts: record date, NAV
- SIP, STP, SWP processing
- Exchange-based MF transactions
- Holding in demat form
- Caselets: transaction processing with cut-off times and applicable NAV

**Topic 5: KYC and Compliance Requirements (35 MCQs)**
- KYC norms: documents, CKYC, e-KYC
- Investor categories: individual, institutional, NRI, minor, HUF, POA
- Nomination rules for MF
- FATCA/CRS compliance
- PAN requirements, Aadhaar linking
- Anti-money laundering requirements for RTAs

**Topic 6: Investor Services and Transaction Processing (40 Qs = 30 MCQs + 2 caselets)**
- Account statements: CAS (Consolidated Account Statement), individual statements
- Change of details: address, bank account, nominee, contact
- Complaint handling, escalation matrix
- SEBI SCORES for MF complaints
- Unclaimed redemption/dividend amounts
- Investor rights and obligations
- Caselets: investor service request processing

---

## Execution Strategy

Since the two exams total ~500 questions across 14 topics, this session may need to be split across 2-3 sub-sessions depending on context window capacity.

### Recommended Sub-Session Split

**Sub-Session 1: Read all chapters + Generate II-A (8 topics, ~250 Qs)**
1. Read II-A PDF Ch 1-15 (206 pages) — extract key facts
2. Generate all 8 II-A topics in parallel (3-4 agents at a time)
3. Validate II-A files
4. Update plists for II-A topics
5. Commit II-A

**Sub-Session 2: Generate II-B (6 topics, ~250 Qs)**
1. Read II-B PDF Ch 5-15 (skip Ch 1-4 which overlap with II-A)
2. Generate all 6 II-B topics in parallel
3. Validate II-B files
4. Update plists for II-B topics
5. Commit II-B
6. Update HANDOFF.md with both exams complete

### If Context Gets Full

If context fills up during Sub-Session 1, STOP and:
1. Validate what's generated so far
2. Update HANDOFF.md with partial progress
3. Commit with descriptive message
4. The next session picks up from HANDOFF.md

---

## File Naming Convention

Use the **EXACT plist topic name** as prefix:

**II-A files:**
```
Basics of Securities and Types_1.xml through _30.xml
Corporate Actions_1.xml through _30.xml
Corporate Actions_C1_1.xml through _C2_5.xml
Depository Services and Dematerialisation_1.xml through _25.xml
Duplicate Share Certificates and Transmission of Securities_1.xml through _25.xml
E-Voting and Proxy Services_1.xml through _20.xml
Investor Grievance Handling and Redressal_1.xml through _25.xml
Public Offerings and IPO Processes_1.xml through _30.xml
Public Offerings and IPO Processes_C1_1.xml through _C2_5.xml
SEBI LODR Regulations_1.xml through _35.xml
SEBI LODR Regulations_C1_1.xml through _C2_5.xml
```

**II-B files:**
```
Role of RTAs in Mutual Fund Transactions_1.xml through _40.xml
Role of RTAs in Mutual Fund Transactions_C1_1.xml through _C2_5.xml
SEBI Regulations for RTAs_1.xml through _40.xml
NAV Calculations and Fund Valuation_1.xml through _30.xml
NAV Calculations and Fund Valuation_C1_1.xml through _C2_5.xml
Processing of Mutual Fund Transactions_1.xml through _35.xml
Processing of Mutual Fund Transactions_C1_1.xml through _C2_5.xml
KYC and Compliance Requirements_1.xml through _35.xml
Investor Services and Transaction Processing_1.xml through _30.xml
Investor Services and Transaction Processing_C1_1.xml through _C2_5.xml
```

---

## XML Formats

**Regular MCQ:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="Basics of Securities and Types_1" sectionNumber="" articleNumber="0" articleName="">
    <question>
        <text><![CDATA[Question text here]]></text>
        <answers>
            <answer correct="yes"><text><![CDATA[Correct answer]]></text></answer>
            <answer correct="no"><text><![CDATA[Distractor 1]]></text></answer>
            <answer correct="no"><text><![CDATA[Distractor 2]]></text></answer>
            <answer correct="no"><text><![CDATA[Distractor 3]]></text></answer>
        </answers>
        <explanation><text><![CDATA[**The Logic:** Why the answer is correct.
**The Trap:** Why a specific distractor was tempting.
**Cross-Exam Context:** Which other NISM exams test this topic.
**Distributor's Pro-Tip:** Real-world golden rule.]]></text></explanation>
    </question>
</QF>
```

**Caselet (each Q is a separate file, scenario IDENTICAL across all 5):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="Corporate Actions_C1_1" sectionNumber="" articleNumber="0" articleName="">
    <question>
        <text><![CDATA[<b>Scenario:</b> [Full scenario 150-300 words with all data needed]

<b>Question 1 of 5:</b> [Actual question]]]></text>
        <answers>
            <answer correct="no"><text><![CDATA[Option A]]></text></answer>
            <answer correct="yes"><text><![CDATA[Option B]]></text></answer>
            <answer correct="no"><text><![CDATA[Option C]]></text></answer>
            <answer correct="no"><text><![CDATA[Option D]]></text></answer>
        </answers>
        <explanation><text><![CDATA[**The Logic:** ...
**The Trap:** ...
**Cross-Exam Context:** ...
**Distributor's Pro-Tip:** ...]]></text></explanation>
    </question>
</QF>
```

---

## Quality Rules (from BEST_PRACTICES.md)

1. **ALWAYS read PDF chapter before generating questions** — never generate from memory
2. **Use exact plist topic names** as file prefixes
3. **Validate after every batch** — don't batch all validation to the end
4. **STOP when context gets full** — tell the user, update HANDOFF.md, hand off
5. **Caselet scenarios must be self-contained** — all data in the scenario text
6. **Caselet scenario text must be IDENTICAL** across all 5 linked questions
7. **Use `<b>` tags** for Scenario: and Question X of Y: labels
8. **Explanation format:** Always include The Logic, The Trap, Cross-Exam Context, Distributor's Pro-Tip
9. **4 answer options** per question, exactly 1 correct
10. **Indian names, INR amounts, Indian regulatory context**
11. **Calculations must be verified** — run the math, don't trust agent computations blindly
12. **RTA-specific:** Focus on procedural/operational details, timelines, SOP references, SEBI circular requirements

---

## After Phase 12 — Checklist

1. Count files per topic — match targets (250 + 250 = 500 total)
2. Run XML validation (parse, structure, ID-filename match)
3. Spot-check 3-5 questions per topic for factual accuracy against PDF
4. Update HANDOFF.md with Phase 12 progress
5. **Update plists:** Add 14 new topics to Topics.plist, TopicsLite.plist, ChapterArticles.plist, QuestionToArticleNumber.plist
6. **Verify ExamWeightages.plist:** Both exams should have topic names matching file prefixes, weightages summing to 100%
7. Git commit with descriptive message

### After Phase 12 — Grand Total

| Completed | Exams | Questions | Topics |
|-----------|:-----:|:---------:|:------:|
| Before Phase 12 | 17 | 7,643 | 174 |
| Phase 12 (II-A + II-B) | +2 | +500 | +14 |
| **After Phase 12** | **19** | **~8,143** | **188** |

**Remaining after Phase 12:** 12 exams (X-C, XV, XVII, XIX-A/B/C/D/E, XXI-A/B, XXIII, XXV-A)
