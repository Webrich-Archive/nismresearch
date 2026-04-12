# Session Prompt for Phase 14 — Remaining 10 Exams (AIF, PMS, Social Impact, IA Renewal, Research Services)

**Date created:** April 12, 2026
**Pre-requisite:** Read HANDOFF.md first. 21 exams complete (9,143 questions). Phase 13 done. This phase tackles the final 10 exams.

---

## Phase 14 Overview

| Parameter | Value |
|-----------|-------|
| **Exams remaining** | 10 (X-C, XIX-A/B/C/D/E, XXI-A/B, XXIII, XXV-A) |
| **Total new questions** | ~4,375 |
| **Total new topics** | ~80-90 (estimated) |
| **PDFs available** | 8 of 10 (X-C and XXV-A have no dedicated PDFs) |
| **Exams with caselets** | 4 (XIX-C, XIX-D, XIX-E, XXI-B) — all at 40% caselet ratio |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |
| **Grand total after Phase 14** | ~13,518 questions across ~290 topics, 31 exams |

---

## Recommended Sub-Phase Breakdown

Phase 14 is too large for one session. Split into **6 sub-phases** ordered by difficulty and dependency:

### Sub-Phase 14A: Easy Exams — X-C and XXV-A (2 exams, 250 Qs)

| Exam | Code | Qs | Topics | Difficulty | Caselets | Neg Marking | PDF |
|------|:----:|:--:|:------:|:----------:|:--------:|:-----------:|-----|
| Series X-C — Investment Adviser (Renewal) | X-C | 125 | ~3 | Easy | None | None | **No dedicated PDF — subset of X-A** |
| Series XXV-A — Research Services | XXV-A | 125 | ~3 | Easy | None | None | **No dedicated PDF — subset of XV** |

**Strategy for X-C:** X-C is a renewal exam for investment advisers. It tests updated regulations, code of conduct, and recent changes. Use the X-A PDF (`NISM-Series-X-A Investment Adviser (Level 1) - June 2025.pdf`, 394 pages) — focus on regulatory chapters, ethics, and recent SEBI amendments. The exam is 50 questions, 1 hour, 50% pass. Generate 125 questions across ~3 topics.

**Strategy for XXV-A:** XXV-A tests research services personnel. Use the XV PDF (`NISM-Series-XV-ResearchAnalyst-Workbook - February 2026.pdf`) — focus on regulatory framework, compliance, and sales practices chapters. The exam is 50 questions, 1 hour, 50% pass. Generate 125 questions across ~3 topics.

**Question mix:**
- X-C: 10% calc, 60% conceptual, 0% caselet, 20% regulatory
- XXV-A: 0% calc, 55% conceptual, 0% caselet, 40% regulatory

**Estimated effort:** 1 session

---

### Sub-Phase 14B: AIF Distributors — XIX-A and XIX-B (2 exams, 1,000 Qs)

| Exam | Code | Qs | Topics | Difficulty | Caselets | Neg Marking | PDF | Pages |
|------|:----:|:--:|:------:|:----------:|:--------:|:-----------:|-----|:-----:|
| Series XIX-A — AIF Distributors (Cat I & II) | XIX-A | 500 | ~10 | Moderate | None | **10%** | `Series XIX-A_AIF (Category I and II) Distributors_Dec-version PDF.pdf` | 280 |
| Series XIX-B — AIF Distributors (Cat III) | XIX-B | 500 | ~10 | Moderate | None | **10%** | `Series-XIX-B_AIF (Category III) Distributors-December version word.pdf` | 352 |

**Key content areas:**
- XIX-A: SEBI AIF Regulations 2012, Category I & II fund structures (venture capital, social venture, infrastructure, SME, debt funds), fund operations, compliance, investor eligibility, investment restrictions, valuation, taxation, distribution practices
- XIX-B: Category III fund structures (hedge funds, PIPE funds), long-short strategies, leverage, derivatives usage, risk management, performance attribution, taxation of Cat III AIFs

**Overlap between XIX-A and XIX-B:** Significant (~30-40%) in regulatory framework, AIF registration, general compliance, and investor protection chapters. Generate unique questions — don't duplicate.

**Question mix (both):** 15% calc, 55% conceptual, 0% caselet, 20% regulatory, 10% application

**Note:** These exams have **10% negative marking** (not 25%) — mention this in ExamWeightages. Actual exam: 100 Qs, 2 hrs, 60% pass.

**Estimated effort:** 2 sessions (1 per exam)

---

### Sub-Phase 14C: PMS Exams — XXI-A and XXI-B (2 exams, 1,000 Qs)

| Exam | Code | Qs | Topics | Difficulty | Caselets | Neg Marking | PDF | Pages |
|------|:----:|:--:|:------:|:----------:|:--------:|:-----------:|-----|:-----:|
| Series XXI-A — PMS Distributors | XXI-A | 500 | ~10 | Moderate | None | **10%** | `NISM-Series-XXI-A...September 2025.pdf` | 185 |
| Series XXI-B — Portfolio Managers | XXI-B | 500 | ~10 | Hard | **40% caselets** | 25% | `NISM-Series-XXI-B...Sep 2025.pdf` | 404 |

**Key content areas:**
- XXI-A: PMS regulatory framework, SEBI PMS Regulations 2020, types of PMS (discretionary/non-discretionary/advisory), fee structures, investor eligibility (Rs.50 lakh minimum), distribution practices, performance reporting (TWRR), risk disclosures
- XXI-B: Portfolio construction theory (MPT, CAPM, APT), security analysis (fundamental/technical), asset allocation models, performance attribution (Brinson model), risk management (VaR, stress testing), derivatives in PMS, global portfolio management, ethical standards, GIPS compliance

**XXI-B Caselet Format:** 40% of the actual exam is caselets. Generate ~100 caselet questions (20 caselets × 5 questions each) alongside 400 standalone MCQs. Caselets should involve portfolio scenarios, client suitability assessments, performance measurement problems, and asset allocation decisions.

**Question mix:**
- XXI-A: 15% calc, 50% conceptual, 0% caselet, 25% regulatory
- XXI-B: 25% calc, 15% conceptual, 40% caselet, 10% regulatory, 10% application

**Estimated effort:** 2-3 sessions (XXI-A: 1 session, XXI-B: 1-2 sessions due to caselets and 404-page PDF)

---

### Sub-Phase 14D: AIF Managers — XIX-C, XIX-D, XIX-E (3 exams, 1,500 Qs)

| Exam | Code | Qs | Topics | Difficulty | Caselets | Neg Marking | PDF | Pages |
|------|:----:|:--:|:------:|:----------:|:--------:|:-----------:|-----|:-----:|
| Series XIX-C — AIF Managers (All Categories) | XIX-C | 500 | ~12 | Hard | **40% caselets** | 25% | `FINAL_Series-XIX-C_AIF Managers_Ver-Dec-2025.pdf` | 573 |
| Series XIX-D — AIF Managers (Cat I & II) | XIX-D | 500 | ~10 | Hard | **40% caselets** | **10%** | `24 NISM-Series-XIX-D...January 2026.pdf` | 400 |
| Series XIX-E — AIF Managers (Cat III) | XIX-E | 500 | ~10 | Hard | **40% caselets** | **10%** | `FINAL_Series-XIX-E_Category III AIF Managers.pdf` | 453 |

**Key content areas:**
- XIX-C (All Categories, 573 pages!): Comprehensive AIF regulation, fund structuring, legal documentation (PPM, contribution agreement), fund governance, investment management across all categories, valuation (NAV computation for different asset types), risk management frameworks, taxation across categories, compliance and reporting, ethics
- XIX-D (Cat I & II Managers): Deep dive into VC/PE fund management, social venture fund operations, infrastructure fund strategies, SME fund management, debt fund management, due diligence frameworks, deal structuring, exit strategies, carried interest calculations
- XIX-E (Cat III Managers): Hedge fund strategies (long-short equity, event-driven, relative value, macro), leverage management, derivatives strategies, algorithmic trading, risk metrics (Sharpe, Sortino, maximum drawdown, Calmar ratio), prime brokerage, performance fee calculations (high-water mark, hurdle rate)

**Overlap strategy:** XIX-C covers all categories broadly. XIX-D and XIX-E go deep into specific categories. Avoid duplicating regulatory/compliance questions across the three — split regulatory content so each exam tests different aspects.

**Caselet Format (all 3 exams):** Each needs ~100 caselet questions (20 caselets × 5 Qs). Caselets should cover:
- Fund structuring scenarios (choosing between Cat I/II/III)
- Investment decision caselets (deal evaluation, due diligence)
- Valuation caselets (NAV computation with illiquid assets)
- Risk management scenarios (leverage limits, drawdown analysis)
- Compliance caselets (regulatory breach identification)
- Performance fee calculation caselets (high-water mark, hurdle rate)

**Question mix:**
- XIX-C: 25% calc, 25% conceptual, 40% caselet, 10% regulatory
- XIX-D: 20% calc, 30% conceptual, 40% caselet, 10% regulatory
- XIX-E: 20% calc, 30% conceptual, 40% caselet, 10% regulatory

**Estimated effort:** 4-5 sessions (XIX-C: 2 sessions due to 573-page PDF; XIX-D: 1-2 sessions; XIX-E: 1-2 sessions)

---

### Sub-Phase 14E: Social Impact — XXIII (1 exam, 500 Qs)

| Exam | Code | Qs | Topics | Difficulty | Caselets | Neg Marking | PDF | Pages |
|------|:----:|:--:|:------:|:----------:|:--------:|:-----------:|-----|:-----:|
| Series XXIII — Social Impact Assessors | XXIII | 500 | ~8 | Moderate | **15% caselets** | 25% | `Social Impact Assessors...January 2026.pdf` | 225 |

**Key content areas:**
- Social stock exchange (SSE) framework, SEBI SSE regulations
- Social enterprises: definition, registration, eligibility criteria
- Social impact assessment methodology, theory of change, logical framework
- Zero Coupon Zero Principal (ZCZP) instruments
- Development Impact Bonds (DIBs)
- Social audit, impact measurement and reporting
- Social venture funds under AIF regulations
- Ethical considerations in social impact investing

**Caselet Format:** 15% caselets (~75 caselet Qs from ~15 caselets × 5 Qs). Caselets should involve social enterprise evaluation, impact measurement scenarios, SSE listing decisions, and ZCZP structuring.

**Question mix:** 5% calc, 55% conceptual, 15% caselet, 20% regulatory, 5% application

**This is a unique domain** — unlike all other NISM exams which focus on traditional capital markets. The content requires careful reading as terminology and concepts are specific to impact investing.

**Estimated effort:** 1-2 sessions

---

## PDF Locations

```
/Users/shivam/aiworkspace/nismresearch/study material/

X-A (for X-C):    NISM-Series-X-A Investment Adviser (Level 1) - June 2025.pdf (394 pages)
XV (for XXV-A):   NISM-Series-XV-ResearchAnalyst-Workbook - February 2026.pdf
XIX-A:            Series XIX-A_AIF (Category I and II) Distributors_Dec-version PDF.pdf (280 pages)
XIX-B:            Series-XIX-B_AIF (Category III) Distributors-December version word.pdf (352 pages)
XIX-C:            FINAL_Series-XIX-C_AIF Managers_Ver-Dec-2025.pdf (573 pages)
XIX-D:            24 NISM-Series-XIX-D Category I and II Alternative Investment Fund Managers Certification Examination_January 2026.pdf (400 pages)
XIX-E:            FINAL_Series-XIX-E_Category III AIF Managers.pdf (453 pages)
XXI-A:            NISM-Series-XXI-A Portfolio Management Services (PMS) Distributors Certification Examination-September 2025.pdf (185 pages)
XXI-B:            NISM-Series-XXI-B Portfolio Managers Certification Examination -Sep 2025.pdf (404 pages)
XXIII:            Social Impact Assessors Certification Examination Workbook - January 2026.pdf (225 pages)
```

---

## Question Bank Location

```
/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/
```

---

## Execution Rules (same as all previous phases)

1. **ALWAYS read PDF chapter before generating questions** — use `import fitz` (PyMuPDF)
2. **Use Bash tool with Python scripts** to generate XML files (NOT the Write tool)
3. **XML Format:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="TOPIC NAME_N" sectionNumber="" articleNumber="0" articleName="">
    <question>
        <text><![CDATA[Question text]]></text>
        <answers>
            <answer correct="no"><text><![CDATA[Option A]]></text></answer>
            <answer correct="yes"><text><![CDATA[Option B]]></text></answer>
            <answer correct="no"><text><![CDATA[Option C]]></text></answer>
            <answer correct="no"><text><![CDATA[Option D]]></text></answer>
        </answers>
        <explanation><text><![CDATA[**The Logic:** Why the correct answer is right.
**The Trap:** Why wrong answers are tempting.
**Cross-Exam Context:** How this appears in other NISM exams.
**Distributor's Pro-Tip:** Practical insight for professionals.]]></text></explanation>
    </question>
</QF>
```

4. **Caselet Format** (for XIX-C, XIX-D, XIX-E, XXI-B, XXIII):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="TOPIC NAME_C1_1" sectionNumber="" articleNumber="0" articleName="">
    <caselet><text><![CDATA[Caselet scenario text (200-400 words)...]]></text></caselet>
    <question>
        <text><![CDATA[Question based on the caselet]]></text>
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
Caselet naming: `TOPIC_C1_1` through `TOPIC_C1_5` (5 questions per caselet), then `TOPIC_C2_1` through `TOPIC_C2_5`, etc.

5. **Validate after every batch** using `xml.etree.ElementTree`
6. **Indian names, INR amounts** in all scenario-based questions
7. **4 options, exactly 1 correct** per question
8. **Randomize correct answer position** across questions

---

## After Each Sub-Phase Completion Checklist

1. Count files per topic — must match targets
2. Run XML validation (4 answers, 1 correct, explanation with 4 sections, CDATA wrapping)
3. Spot-check 2-3 questions per topic for factual accuracy against PDF
4. Update plists: Topics.plist, TopicsLite.plist, ExamWeightages.plist, ChapterArticles.plist, QuestionToArticleNumber.plist
5. Validate all plists with `plutil -lint`
6. Update HANDOFF.md — mark exam(s) complete, update running totals
7. Git commit with descriptive message

---

## Recommended Session Order

| Session | Sub-Phase | Exams | New Qs | Running Total |
|:-------:|:---------:|-------|:------:|:-------------:|
| 1 | **14A** | X-C + XXV-A | 250 | 9,393 |
| 2 | **14B-1** | XIX-A (AIF Dist Cat I&II) | 500 | 9,893 |
| 3 | **14B-2** | XIX-B (AIF Dist Cat III) | 500 | 10,393 |
| 4 | **14C-1** | XXI-A (PMS Distributors) | 500 | 10,893 |
| 5 | **14C-2** | XXI-B (Portfolio Managers) — Part 1 | 300 | 11,193 |
| 6 | **14C-3** | XXI-B (Portfolio Managers) — Part 2 | 200 | 11,393 |
| 7 | **14D-1** | XIX-C (AIF Mgrs All) — Part 1 | 250 | 11,643 |
| 8 | **14D-2** | XIX-C (AIF Mgrs All) — Part 2 | 250 | 11,893 |
| 9 | **14D-3** | XIX-D (AIF Mgrs Cat I&II) | 500 | 12,393 |
| 10 | **14D-4** | XIX-E (AIF Mgrs Cat III) | 500 | 12,893 |
| 11 | **14E** | XXIII (Social Impact) | 500 | 13,393 |
| | **TOTAL** | **10 exams** | **4,250** | **13,393** |

**Start with Sub-Phase 14A** — it is the easiest (no dedicated PDFs, smaller question counts) and builds momentum.

---

## Grand Total After Phase 14

| Metric | Before Phase 14 | After Phase 14 |
|--------|:--------------:|:--------------:|
| Exams | 21 | 31 |
| Questions | 9,143 | ~13,393 |
| Topics | 207 | ~290 |

**The NISM Question Bank will be COMPLETE after Phase 14.**
