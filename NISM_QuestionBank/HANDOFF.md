# NISM Question Bank — Handoff Document

**Date:** April 8, 2026 (Updated after Session 4)
**Status:** 7 of 31 exams complete, 2,356 questions generated.
**For:** Fresh conversation to continue with remaining 24 exams, starting with Series IV (Interest Rate Derivatives)

---

## What's Done

### Completed Exams

| Exam | Code | Questions | Topics | Difficulty | Audit Status |
|------|:----:|:---------:|:------:|:----------:|:------------:|
| Series V-A - Mutual Fund Distributors | V-A | 511 | 12 | Easy | AUDITED + Gap-filled |
| Series V-B - Mutual Fund Foundation | V-B | 270 | 10 | Easy | AUDITED + Gap-filled |
| Series XXIV - AML and CFT Provisions | XXIV | 155 | 8 | Easy | AUDITED + Gap-filled |
| IFSCA-01 - AML and CFT in the IFSC | IFSCA-01 | 140 | 8 | Easy | AUDITED + Gap-filled |
| Series XII - Securities Markets Foundation | XII | 280 | 6 | Easy | AUDITED + Gap-filled |
| Series VIII - Equity Derivatives | VIII | 500 | 10 | Hard | Generated from PDF, needs audit |
| Series I - Currency Derivatives | I | 500 | 10 | Moderate | Generated from PDF, needs audit |
| **Total** | | **2,356** | **64** | | |

### Generated Files

```
/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/
├── ExamWeightages.plist          (31 exams, topic names aligned with file prefixes for 7 completed exams)
├── Topics.plist                  (64 topics, 2,356 questions)
├── TopicsLite.plist              (64 topics, 794 free-tier questions)
├── ChapterArticles.plist         (64 chapters, each with single "All Topics" article)
├── QuestionToArticleNumber.plist (2,356 entries, all mapping to article "1")
├── OriginalQuestions/            (2,356 XML files)
├── manifest.json                 (progress tracking — version 4.0)
├── TaxRatesReference_FY2025-26.md (verified tax rates)
├── 15 audit report files         (detailed per-chapter audit results for first 5 exams)
└── HANDOFF.md                    (this file)
```

### Validation Status (All Pass — verified Session 4)
- 5/5 plists: OK (plutil)
- 2,356/2,356 XML files: valid (xml.etree.ElementTree)
- 0 duplicates, 2,356 unique IDs
- 64 plist topics == 64 file prefixes: PERFECT MATCH

---

## What Needs to Happen Next (Session 5+)

### Priority 1: Generate New Exams (Derivatives Cluster)

| Phase | Exams | Pool Size | Notes |
|-------|-------|:---------:|-------|
| 6 | IV (Interest Rate Derivatives) | 500 | Reuse structure from VIII and I. Adds bond futures, interest rate swaps, FRA-specific content. |
| 6 | XVI (Commodity Derivatives) | 500 | Reuse derivatives framework from VIII. Adds commodity-specific (MCX, agri/non-agri, warehousing). |
| 7 | XIII (Common Derivatives) | 500 | Composite of I+IV+VIII. ~70% reuse expected. |

### Priority 2: Operations and Compliance Cluster

| Phase | Exams | Pool Size | Notes |
|-------|-------|:---------:|-------|
| 8 | VI (Depository Ops), VII (Securities Ops) | 500, 500 | Operations cluster. |
| 9 | III-A (Compliance Non-Fund), III-C (Compliance Fund) | 500, 500 | Heavy regulatory. Share SEBI/PIT/FUTP. |

### Priority 3: Remaining Exams

| Phase | Exams | Pool Size | Notes |
|-------|-------|:---------:|-------|
| 10 | IX (Merchant Banking) | 500 | Unique IPO/M&A content. |
| 11 | X-A (IA Level 1), X-B (IA Level 2), X-C (IA Renewal) | 500, 500, 125 | Advisory cluster. X-A/X-B have caselets (40%). |
| 12 | XV (Research Analyst), XXV-A (Research Sales) | 500, 125 | Research cluster. XV has caselets (20%). |
| 13 | XVII (Retirement Adviser) | 500 | Shares advisory content + NPS unique. |
| 14 | XIX-A, XIX-B (AIF Distributors) | 500, 500 | AIF distributor cluster. |
| 15 | XIX-C, XIX-D, XIX-E (AIF Managers) | 500, 500, 500 | AIF manager cluster. Have caselets (40%). |
| 16 | XXI-A, XXI-B (PMS) | 500, 500 | PMS cluster. XXI-B has caselets (40%). |
| 17 | XXIII (Social Impact) | 500 | Fully unique. Has caselets (15%). |
| 18 | II-A (RTA Corporate), II-B (RTA MF) | 500, 250 | RTA cluster. II-B shares with V-A. |

### Optional: Audit Series I and VIII

Series I (500 Qs) and Series VIII (500 Qs) were generated from full PDF reading but have NOT been audited page-by-page like the first 5 exams were in Session 2. An audit session would:
1. Read each PDF chapter alongside generated questions
2. Verify factual accuracy of every answer
3. Fix any incorrect answers or misleading distractors
4. Identify concept gaps for gap-fill questions

---

## MANDATORY: Quality Rules for New Question Generation

### The No-Shortcut Rule

**NEVER generate questions from memory or topic summaries. ALWAYS read the actual PDF chapter first.**

If context window is running low:
1. **STOP generating new content**
2. **Tell the user:** "My context is getting full. I should close this conversation and start fresh to maintain quality."
3. **Create/update HANDOFF.md** with exact progress state
4. **Do NOT silently degrade quality** by skipping PDF reading or using summaries

### Per-Chapter Pipeline (Mandatory)
1. Read PDF chapter (20-80 pages) — extract into context
2. Identify key concepts, rules, numbers, formulas from the PDF text
3. Generate questions based on what was ACTUALLY READ, not assumed
4. Write XML files
5. If context is too full to read more PDF pages → STOP and hand off

### Quality > Quantity
It's better to generate 200 fully-accurate questions per session than 500 partially-accurate ones that need auditing later.

---

## Critical Rule: Question ID ↔ Plist Topic Alignment

The iOS app's `DataManager.organizeQuestionsByTopicForWeightedMockTest()` groups questions by extracting the prefix before `_` in the question ID and matching it to the topic title in `ExamWeightages.plist`.

**The question ID prefix MUST exactly match the plist topic name.**

Example:
- Plist topic: `"Primary Markets"`
- Question IDs: `Primary Markets_1`, `Primary Markets_2`, ... `Primary Markets_50`
- File names: `Primary Markets_1.xml`, `Primary Markets_2.xml`, ...

**Filesystem constraints:**
- No `/` (slash) in filenames — macOS path separator
- No `:` (colon) in filenames — macOS reserved
- Commas and spaces are OK in filenames

**For future exams sharing topic names with existing exams:** Use an exam-code prefix (e.g., "VIII ", "I ", "IV ") to keep topics unique. DataManager groups by exact string match.

---

## Question XML Format

```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="Topic Name_1" sectionNumber="" articleNumber="0" articleName="">
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

---

## Question Generation Pipeline (For New Exams)

### Step 1: Check ExamWeightages.plist
Get the exact topic names for the exam. These strings become the question ID prefixes.
**Important:** The plist has pre-populated topic names for all 31 exams, but they may not match the actual PDF chapter structure. Update them to match the PDF when generating each exam (as was done for Series I — changed from 5 to 10 topics).

### Step 2: Read PDF Chapter-by-Chapter
Source PDFs are in `/Users/shivam/aiworkspace/nismresearch/study material/`
Read one chapter at a time to manage context. Extract key concepts, rules, formulas.

### Step 3: Generate Questions
Follow QuestionPatternAnalysis.md for each exam's question type distribution:
- Conceptual %, Calculation %, Caselet %, Regulatory %
- Use verified tax rates from TaxRatesReference_FY2025-26.md

### Step 4: Write XML Files
One file per question. File name = `{TopicName}_{number}.xml`
ID attribute inside XML must match filename (without .xml).

### Step 5: Regenerate Plists
Use this Python pattern to regenerate all plists from OriginalQuestions/:

```python
import os, plistlib, collections, xml.etree.ElementTree as ET

qdir = "NISM_QuestionBank/OriginalQuestions"
topic_questions = collections.defaultdict(list)
for f in sorted(os.listdir(qdir)):
    if not f.endswith('.xml'): continue
    tree = ET.parse(os.path.join(qdir, f))
    qid = tree.getroot().attrib['id']
    prefix = qid.rsplit('_', 1)[0]
    topic_questions[prefix].append(qid)

# Topics.plist (all questions)
topics = {p: sorted(qs, key=lambda x: int(x.rsplit('_',1)[1])) for p, qs in sorted(topic_questions.items())}
with open("NISM_QuestionBank/Topics.plist", 'wb') as f:
    plistlib.dump(topics, f)

# TopicsLite.plist (~35% per topic)
topics_lite = {p: qs[:max(1, len(qs)*35//100)] for p, qs in sorted(topics.items())}
with open("NISM_QuestionBank/TopicsLite.plist", 'wb') as f:
    plistlib.dump(topics_lite, f)

# ChapterArticles.plist
articles = {p: [{"articleName": "All Topics", "articleNumber": 1}] for p in sorted(topics.keys())}
with open("NISM_QuestionBank/ChapterArticles.plist", 'wb') as f:
    plistlib.dump(articles, f)

# QuestionToArticleNumber.plist
q2a = {qid: 1 for qs in topics.values() for qid in qs}
with open("NISM_QuestionBank/QuestionToArticleNumber.plist", 'wb') as f:
    plistlib.dump(q2a, f)
```

### Step 6: Validate
- `plutil` on all plists
- XML structure validation
- Duplicate check
- Cross-check plist IDs vs files
- Verify weightage sums = 100%
- **Verify plist topic names == file prefixes (the critical alignment check)**

---

## Topic Name → File Prefix Mapping (All 64 Topics)

### V-A (12 topics, 511 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| Investment Landscape | Investment Landscape | 34 |
| Concept and Role of Mutual Fund | Concept and Role of Mutual Fund | 28 |
| Legal Structure of Mutual Funds | Legal Structure of Mutual Funds | 20 |
| Legal and Regulatory Framework | Legal and Regulatory Framework | 55 |
| Scheme Related Information | Scheme Related Information | 34 |
| Fund Distribution and Channel Management | Fund Distribution and Channel Management | 40 |
| NAV TER and Pricing | NAV TER and Pricing | 50 |
| Taxation | Taxation | 30 |
| Investor Services | Investor Services | 60 |
| Risk Return and Performance | Risk Return and Performance | 50 |
| Scheme Performance | Scheme Performance | 35 |
| Scheme Selection | Scheme Selection | 50 |

### V-B (10 topics, 270 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| VB Investment Landscape | VB Investment Landscape | 15 |
| VB Concept and Role of Mutual Fund | VB Concept and Role of Mutual Fund | 30 |
| VB Legal Structure of Mutual Funds | VB Legal Structure of Mutual Funds | 20 |
| MF Products for New Cadre | MF Products for New Cadre | 15 |
| VB Scheme Related Information | VB Scheme Related Information | 30 |
| VB Fund Distribution and Channel Management | VB Fund Distribution and Channel Management | 25 |
| VB Performance of Mutual Funds | VB Performance of Mutual Funds | 30 |
| VB Taxation | VB Taxation | 15 |
| VB Investor Services | VB Investor Services | 50 |
| VB Legal and Regulatory Environment | VB Legal and Regulatory Environment | 20 |

### XXIV (8 topics, 155 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| Introduction to AML, CFT and Proliferation Financing | Introduction to AML, CFT and Proliferation Financing | 15 |
| Prevention of Money Laundering Act, 2002 | Prevention of Money Laundering Act, 2002 | 18 |
| AML_CFT_Guidelines | AML_CFT_Guidelines | 12 |
| Scheduled Offences under PMLA | Scheduled Offences under PMLA | 12 |
| AML, CFT and PF Guidelines | AML, CFT and PF Guidelines | 15 |
| SEBI Guidelines for AML Standards, CFT and PF with KYC Norms | SEBI Guidelines for AML Standards, CFT and PF with KYC Norms | 20 |
| KYC Guidelines | KYC Guidelines | 18 |
| Discussion on PMLA-related Cases | Discussion on PMLA-related Cases | 15 |

### IFSCA-01 (8 topics, 140 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| IFSCA Introduction to AML CFT and PF | IFSCA Introduction to AML CFT and PF | 12 |
| IFSCA PMLA 2002 | IFSCA PMLA 2002 | 18 |
| IFSCA Maintenance of Records Rules | IFSCA Maintenance of Records Rules | 18 |
| IFSCA Scheduled Offences | IFSCA Scheduled Offences | 8 |
| IFSCA AML CFT KYC Guidelines | IFSCA AML CFT KYC Guidelines | 20 |
| IFSCA KYC Norms | IFSCA KYC Norms | 25 |
| IFSCA PMLA Related Cases | IFSCA PMLA Related Cases | 10 |
| IFSCA FATF Recommendations | IFSCA FATF Recommendations | 14 |

### XII (6 topics, 280 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| Understanding Securities Markets and Performance | Understanding Securities Markets and Performance | 25 |
| Securities Types Features and Asset Allocation Concepts | Securities Types Features and Asset Allocation Concepts | 50 |
| Primary Markets | Primary Markets | 50 |
| Secondary Markets | Secondary Markets | 50 |
| Mutual Funds | Mutual Funds | 50 |
| Derivative Markets | Derivative Markets | 25 |

### VIII (10 topics, 500 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| VIII Basics of Derivatives | VIII Basics of Derivatives | 40 |
| VIII Understanding Index | VIII Understanding Index | 15 |
| VIII Forwards and Futures | VIII Forwards and Futures | 125 |
| VIII Options | VIII Options | 125 |
| VIII Option Trading Strategies | VIII Option Trading Strategies | 20 |
| VIII Trading Systems | VIII Trading Systems | 20 |
| VIII Clearing and Settlement | VIII Clearing and Settlement | 65 |
| VIII Legal and Regulatory | VIII Legal and Regulatory | 65 |
| VIII Accounting and Taxation | VIII Accounting and Taxation | 15 |
| VIII Sales Practices | VIII Sales Practices | 10 |

### I (10 topics, 500 Qs)
| Plist Topic Name | File Prefix | Qs |
|---|---|:-:|
| I Introduction to Currency Markets | I Introduction to Currency Markets | 50 |
| I Foreign Exchange Derivatives | I Foreign Exchange Derivatives | 25 |
| I Exchange Traded Currency Futures | I Exchange Traded Currency Futures | 100 |
| I Exchange Traded Currency Options | I Exchange Traded Currency Options | 100 |
| I Strategies Using Currency Derivatives | I Strategies Using Currency Derivatives | 50 |
| I Trading Mechanism | I Trading Mechanism | 50 |
| I Clearing Settlement and Risk Management | I Clearing Settlement and Risk Management | 50 |
| I Regulatory Framework | I Regulatory Framework | 25 |
| I Accounting and Taxation | I Accounting and Taxation | 25 |
| I Codes of Conduct and Investor Protection | I Codes of Conduct and Investor Protection | 25 |

---

## Verified Tax Rates (FY 2025-26)

| Type | Rate | Notes |
|------|------|-------|
| Equity MF STCG (<=12 months) | 20% | Section 111A |
| Equity MF LTCG (>12 months) | 12.5% | Section 112A, exempt up to Rs. 1.25 lakh/year |
| Debt MF (post April 2023) | Slab rate | Always STCG, no indexation |
| Gold/International/FOF STCG | Slab rate | <=24 months |
| Gold/International/FOF LTCG | 12.5% | >24 months, no indexation |
| Dividend (IDCW) | Slab rate | TDS 10% if >Rs. 5,000/year |
| MF scheme income | Exempt | Section 10(23D) |
| STT on equity MF | 0.001% | On redemption |
| ELSS 80C deduction | Up to Rs. 1.5 lakh | 3-year lock-in |

---

## Reference Files

| File | Path | Purpose |
|------|------|---------|
| BasicResearch.md | `/Users/shivam/aiworkspace/nismresearch/BasicResearch.md` | All 31 exam syllabi, topics, weightages |
| TopicOverlapMetrics.md | `/Users/shivam/aiworkspace/nismresearch/TopicOverlapMetrics.md` | Topic overlap clusters |
| QuestionPatternAnalysis.md | `/Users/shivam/aiworkspace/nismresearch/QuestionPatternAnalysis.md` | Question type distribution per exam |
| NEC_App_Analysis_For_NISM.md | `/Users/shivam/aiworkspace/nismresearch/NEC_App_Analysis_For_NISM.md` | iOS app data structure reference |
| Study Material PDFs | `/Users/shivam/aiworkspace/nismresearch/study material/` | 30+ PDF workbooks |
| ExamWeightages.plist | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/ExamWeightages.plist` | 31 exams with topic weightages |

---

## Known Caveats

1. **Filesystem naming:** Avoid `/` and `:` in question ID prefixes. Use underscores or omit. Example: `AML_CFT_Guidelines` not `AML/CFT Guidelines`.

2. **Exam-code prefix convention:** V-B uses "VB ", IFSCA-01 uses "IFSCA ", VIII uses "VIII ", I uses "I ". Future exams sharing topic names with existing exams MUST use a prefix (e.g., "IV ", "XVI ", "XIII "). DataManager groups by exact string match.

3. **Transaction charges withdrawn:** SEBI withdrew the MF transaction charge framework in August 2025. V-A questions reflect this.

4. **Nominee limit increased:** SEBI January 2025 circular increased MF nominee limit from 3 to 10. V-A questions updated.

5. **ExamWeightages.plist contains ALL 31 exams** but only 7 have questions. The remaining 24 exam entries have topic names that may not match future question file prefixes — update them as each exam is generated (as was done for Series I — changed from 5 pre-populated topics to 10 actual PDF-aligned topics).

6. **pymupdf (fitz) is available** for PDF reading. poppler/pdftotext is NOT installed. Use: `import fitz; doc = fitz.open('path'); text = doc[page].get_text()`

7. **Series I and VIII need audit.** Both were generated from PDF reading but have NOT been audited page-by-page like the first 5 exams were in Session 2.

---

## CRITICAL: Context Window Management Rule

**This rule must be followed in ALL future conversations generating NISM questions.**

When generating exam questions, every question MUST be based on content actually read from the PDF workbook in the current context. If the context window is running low and you cannot fit more PDF pages:

1. **STOP immediately** — do not generate questions from memory or summaries
2. **Inform the user:** "My context window is getting full. I need to save progress and start a fresh conversation to continue with full PDF reading."
3. **Update this HANDOFF.md** with:
   - Exactly which chapters/topics are complete (with question counts)
   - Which chapters are still pending
   - Any partial work in progress
4. **Regenerate plists** so the current state is valid
5. **Run validation** to ensure everything passes
6. Let the user close and start a fresh conversation

---

## Session Log

### Session 1 (April 8, 2026)
- Generated 1,236 questions across 5 exams (V-A, V-B, XXIV, IFSCA-01, XII)
- Fixed topic name ↔ file prefix mismatches
- Launched partial audits for XXIV and IFSCA-01

### Session 2 (April 8, 2026)
- Completed full PDF audit of ALL 5 exams (1,236 questions)
- Applied 28 corrections across all exams
- Key regulatory updates: transaction charges withdrawn, nominees to 10, FY 2025-26 tax rates verified
- Generated 15 detailed audit reports with concept gap analysis
- **All 5 exams are now production-ready**

### Session 3 (April 8, 2026)
- **Part A: Gap-Fill Questions for 5 audited exams (+120 new questions)**
  - XXIV: +30 Qs (125→155), IFSCA-01: +15 Qs (125→140), XII: +30 Qs (250→280)
  - V-B: +20 Qs (250→270), V-A: +25 Qs (486→511)
  - Fixed 22 AML_CFT_Guidelines XML ID mismatches (/ vs _ in IDs)
- **Part B: Series VIII Equity Derivatives (500 new questions from PDF)**
  - 10 chapters, 10 topics with "VIII " prefix
  - Heavy calculation focus (50% in Ch3-Ch4: futures pricing, MTM, options payoffs, Greeks)
- **Total after Session 3: 1,856 questions, 54 topics**

### Session 4 (April 8, 2026)
- **Series I Currency Derivatives (500 new questions from PDF — 245 pages, 10 chapters)**
  - Ch1 Introduction to Currency Markets: 50 Qs (history, forex regimes, BIS data, cross rates, FBIL reference rate, two-way quotes, economic indicators)
  - Ch2 Foreign Exchange Derivatives: 25 Qs (derivative definition per IAS 39/AS 30, forward/futures/options/swaps, OTC vs ETD, novation, CCP, NDDC)
  - Ch3 Exchange Traded Currency Futures: 100 Qs (~35% calculation — interest rate parity, futures pricing F=S*(1+RQC*t)/(1+RBC*t), P&L, contract specs for all 7 pairs, premium/discount)
  - Ch4 Exchange Traded Currency Options: 100 Qs (~30% calculation — all 5 Greeks with examples, Black-Scholes model, payoff charts for long/short call/put, premium decomposition, moneyness, put-call parity, contract specs)
  - Ch5 Strategies Using Currency Derivatives: 50 Qs (hedging for exporters/importers/investors, bull/bear call/put spreads with calculations, straddles/strangles, arbitrage with worked examples, speculative trading)
  - Ch6 Trading Mechanism: 50 Qs (TM/CM/AP/PCM types, order types: market/limit/stop/IOC/DQ, price-time priority, DMA, IRRA, co-location, surveillance, brokerage rules, stamp duty)
  - Ch7 Clearing Settlement and Risk Management: 50 Qs (SPAN with 16 scenarios, ELM rates: 1% USDINR / 0.50% cross-currency, calendar spread margin, settlement T+1 daily / T+2 final, 50% cash collateral rule, haircuts, position limits, SGF, pledge/re-pledge)
  - Ch8 Regulatory Framework: 25 Qs (SEBI-RBI dual regulation, FEMA 1999, SCRA Section 18A, bank TM criteria: Rs 500Cr net worth / CRAR 10% / NPA 3%, FEDAI, RBI-SEBI Standing Technical Committee)
  - Ch9 Accounting and Taxation: 25 Qs (ICAI 2021 guidance notes, 3 types of hedge accounting, Ind AS 109, business income treatment, 8-year carry forward, FPI capital gains treatment, presumptive taxation Rs 3Cr limit)
  - Ch10 Codes of Conduct and Investor Protection: 25 Qs (KYC, Risk Disclosure Document, SCORES portal, grievance escalation path, arbitration, market manipulation, churning, insider trading, code of conduct, client asset segregation)
  - All I topics use "I " prefix to avoid collision with future exams
  - ExamWeightages.plist updated with 10 "I " prefixed topic names (weightages match PDF syllabus: 10+5+20+20+10+10+10+5+5+5 = 100%)
- **Validation: ALL 2,356 XML files valid, 0 errors, 0 duplicates, 64 topics**
- **All 5 plists regenerated and valid (plutil OK)**
- **Next session should start with: Series IV (Interest Rate Derivatives) or Series XVI (Commodity Derivatives)**

---

*Handoff document updated April 8, 2026 after Session 4 completion.*
