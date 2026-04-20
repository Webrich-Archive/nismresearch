# Session Prompt for Phase 15 — Series XXIII: Social Impact Assessors

**Date created:** April 20, 2026
**Pre-requisite:** Read `HANDOFF.md` first. **30 exams complete (12,893 questions across 313 topics).** Phase 14D-3 (XIX-E Cat III AIF Managers, 500 Qs, 15 "AIFM CIII " topics) done. **This is the FINAL exam** — after Phase 15, the NISM Question Bank will have complete coverage of all 31 NISM certification examinations.

Series XXIII (Social Impact Assessors — SACE) is entirely new content with no prior art in the bank. It covers the Social Stock Exchange (SSE) ecosystem, Social Impact Assessment (SIA) frameworks, Logical Framework Analysis (LFA), SAS-100 through SAS-1600 assessment standards, SEBI ICDR Regulations Chapter X-A (SSE), disclosure norms, penalties, and taxation of NPOs/FPEs.

---

## Exam Overview

| Parameter | Value |
|-----------|-------|
| **Exam name** | NISM-Series-XXIII: Social Impact Assessors Certification Examination (SACE) |
| **Exam code** | XXIII |
| **Questions to generate** | **500** |
| **Topics** | **11** (one per PDF chapter) |
| **PDF** | `Social Impact Assessors Certification Examination Workbook - January 2026.pdf` (225 pages) |
| **PDF location** | `/Users/shivam/aiworkspace/nismresearch/study material/` |
| **Actual exam** | 85 MCQs + 3 caselets × 5 sub-questions = 100 questions / 100 marks, 2 hours, 60% pass |
| **Negative marking** | **25%** (assumed — PDF does not explicitly state; standard for NISM assessor exams. Verify the official SEBI circular if available. If confirmed zero/10%, adjust in HANDOFF.) |
| **Caselets** | **YES (official exam format, 3 caselets × 5 = 15 Qs).** Recommend 6-8 caselets (30-40 caselet Qs) drawn from Chapter 8 (SAS case-study chapter) + Chapters 4-7. Caselet stems should be 4-6 sentence social-enterprise scenarios (e.g., "Grameen Vikas NPO implements a rural health program in Jharkhand funded via a Zero Coupon Zero Principal bond on BSE SSE; outputs include 1,200 ANC check-ups…"). OR skip caselets entirely if desired — prior phases XIX-C/D/E also skipped them without issue. **Recommendation: skip caselets** for consistency with recent phases; noted in HANDOFF. |
| **Question bank dir** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` |
| **PDF reader** | Use `python3` with `import fitz` (PyMuPDF) |
| **Difficulty** | **Moderate to Hard** — Mix of factual (SDGs, SSE stakeholders, SAS numbers) and applied (SIA lifecycle, LFA matrix construction, standard-specific indicators). Calc is minimal (mostly Ch 10 Taxation and a few SSE valuation questions). |

---

## PDF Chapter Map (verified from TOC pages 6-9 and Syllabus page 10)

| Ch | Chapter Name | PDF start page | Marks (chapter-wise weightage, page 10) |
|:--:|--------------|:--:|:--:|
| 1 | Introduction to Social Sector Ecosystem | 11 | 10 |
| 2 | Social Stock Exchange: Introduction, Funding Structures and Instruments | 51 | 10 |
| 3 | Registration and Listing on Social Stock Exchanges | 75 | 6 |
| 4 | Understanding Logic Model in Social Programs for Social Impact Assessment | 89 | 10 |
| 5 | Social Impact Assessment and Social Impact Assessors | 104 | 10 |
| 6 | Social Impact Assessment Frameworks, Techniques and Standards | ~130 | 10 |
| 7 | Social Impact Assessment Reporting | ~145 | 11 |
| 8 | Social Impact Assessment — Case Studies (SAS 100/200/400/500/1100/1300) | 164 | 15 |
| 9 | Disclosure Norms, Reporting Requirements by Social Impact Assessors and Penalties | 205 | 10 |
| 10 | Taxation | ~218 | 3 |
| 11 | Key Regulations | ~221 | 5 |
| | **Total** | | **100** |

**Weightage verification:** The PDF page 10 table shows these values clearly, and they sum to exactly 100. Unlike XIX-E (107-mark arithmetic error), the XXIII weightage table is internally consistent — use verbatim.

**Re-extract chapter boundaries** before generation: the starting pages of Ch 6, 7, 10, 11 are inferred from TOC context but not visible in initial extraction. Use `python3 -c 'import fitz; doc = fitz.open("..."); [print(i+1, doc[i].get_text()[:100]) for i in range(130, 225)]'` to locate exact chapter starts.

PDF sections (per TOC):
- **Section I of Ch 1:** Social Sector in India
- **Section II of Ch 1:** Indian Financial Markets
- Chapters 2-3: SSE ecosystem
- Chapters 4-7: SIA process (LFA → SIA → Standards → Reporting)
- Chapter 8: Case studies applying SAS standards
- Chapters 9-11: Disclosure/Taxation/Regulations

---

## Existing Placeholder in ExamWeightages.plist

**Check `ExamWeightages.plist` for the XXIII key before starting.** The existing placeholder is `Series XXIII - Social Impact Assessors` with 7 merged topics:

| Placeholder key | Weight | Notes |
|-----------------|:---:|:------|
| `Social Stock Exchange Framework` | 17 | merged Ch 2+3 |
| `SEBI ICDR Regulations and LODR Regulations for SSE` | 15 | merged Ch 3+9 |
| `Social Impact Assessment and Social Impact Assessors` | 15 | Ch 5 — match |
| `Social Impact Assessment Frameworks, Techniques and Standards` | 18 | Ch 6 — merged with Ch 4? |
| `Disclosure Norms and Reporting Requirements` | 15 | merged Ch 7+9 |
| `Taxation Aspects` | 8 | Ch 10 |
| `Key Regulations` | 12 | Ch 11 |

**Total of placeholder: 100.** But this doesn't match the 11-chapter PDF structure. **Replace with 11 PDF-aligned topics** (see below).

**Learning from Phase 14D-1, 14D-2, 14D-3:** Do NOT bash-delete files whose topic-base matches an XXIII placeholder. `Taxation` (raw) is V-A's key — V-A's 30 `Taxation_*.xml` files must remain intact. None of the XXIII placeholder keys are currently populated on disk (they are all orphaned placeholders), but double-check before any delete operation.

1. **Do not touch any existing files on disk.**
2. **Pick a fresh namespace prefix for XXIII.**
3. **Replace the 7 placeholder topic keys in `ExamWeightages.plist` with 11 new prefixed keys.**

### Recommended namespace prefix: `SIA ` (Social Impact Assessor)

This distinguishes XXIII from:
- `AIF ` — XIX-A (Cat I/II Distributor)
- `Cat III AIF ` — XIX-B (Cat III Distributor)
- `AIFM ` — XIX-C (All-Cat Manager)
- `AIFM CII ` — XIX-D (Cat I/II Manager)
- `AIFM CIII ` — XIX-E (Cat III Manager)
- `PMS ` — XXI-A (PMS Distributor)
- `PM ` — XXI-B (Portfolio Manager)
- `Taxation` — V-A (Mutual Fund Distributor; raw key)
- `XC ` — X-C (Investment Adviser Renewal)
- `XXVA ` — XXV-A (Research Services Sales)

Alternative prefixes considered and rejected:
- `SACE ` — acronym is not as recognisable, mixes "certification exam" into topic name
- `SSE ` — too narrow (would mislead Ch 1 Social Sector Ecosystem, Ch 4-8 which are SIA-focused, not SSE-focused)
- `XXIII ` — opaque; user-facing plist keys benefit from mnemonic names

**Stick with `SIA ` unless you have a strong reason to change.** The prefix is embedded in every filename and every XML `<QF id="...">` attribute. Ensure the space after `SIA` is included in every topic key.

---

## Recommended Topic Plan — 11 Topics, 500 Questions

| # | Topic Name (exact plist key) | Marks | Qs | Source Chapter | Rationale |
|---|------------------------------|:----:|:--:|:--:|-----------|
| 1 | SIA Social Sector Ecosystem | 10 | 50 | Ch 1 | Social Sector in India + Indian Financial Markets; SDGs 1-17; Social Enterprise definition & eligibility; taxonomy; 16 eligible activities; NPO/FPE/Trust/Society/Sec 8 legal structures |
| 2 | SIA Social Stock Exchange Introduction and Instruments | 10 | 50 | Ch 2 | Concept of SSE; NSE-SSE and BSE-SSE (Sept 2022 launch); stakeholders (SE, investor, SSE, SEBI, ICAI, SIA, depository); Zero Coupon Zero Principal bonds (ZCZP), Development Impact Bonds (DIB), SVF, MF-for-SSE; donation-based vs investment-based funding |
| 3 | SIA SSE Registration and Listing | 6 | 30 | Ch 3 | Registration process (NSE/BSE forms); Rights, Obligations and Disclosures Document (RODD); key listing guidelines; ICDR Reg 292A-L; public issue of ZCZP bonds |
| 4 | SIA Logic Model for Social Programs | 10 | 50 | Ch 4 | Logical Framework Analysis (LFA); components — Inputs, Activities, Outputs, Outcomes, Impact; Theory of Change (ToC); Logical Framework Matrix (LFM); assumptions/risks; SMART indicators; OVIs and MOVs |
| 5 | SIA Social Impact Assessment and Assessors | 10 | 50 | Ch 5 | Evolution of SIA; Principles of Impact Assessment (relevance, materiality, additionality, proportionality); Social Impact Assessor role — registration, empanelment with Self-Regulatory Organisation (SRO), educational qualification, CoE (Certificate of Eligibility), SAS-200 code of conduct; SAS Framework overview; SAS standards 100-1600 list |
| 6 | SIA Assessment Frameworks Techniques and Standards | 10 | 50 | Ch 6 | Framework comparison — IRIS+, GIIN, B Impact Assessment, SROI; Techniques — contribution analysis, attribution, counterfactual, control groups, quasi-experimental, RCT; SAS-100 SIA Standard on conducting SIAs; Unique Reference Number; assurance vs review; sample size; materiality |
| 7 | SIA Reporting | 11 | 55 | Ch 7 | Social Impact Report (SIR) structure; Annual Impact Report (AIR) Form RODD-A; Financial Year reporting cycle; assurance scope; SEBI LODR Reg 33 Part VII for SSE-listed; certification by Impact Assessor (Form XXX); monetary/non-monetary metrics; beneficiary attestation |
| 8 | SIA Case Studies on SAS Standards | 15 | 75 | Ch 8 | **SAS 100** (General SIA conduct), **SAS 200** (Healthcare, sanitation, safe drinking water — Ch 8.2), **SAS 400** (Gender equality, women and LGBTQIA+ — Ch 8.3), **SAS 500** (Environmental sustainability, climate, forest, wildlife — Ch 8.1), **SAS 1100** (Slum development, affordable housing — Ch 8.5), **SAS 1300** (Financial inclusion — Ch 8.4). Applied questions on indicator selection, data sources, assumption testing, beneficiary identification, materiality thresholds per standard |
| 9 | SIA Disclosure Reporting and Penalties | 10 | 50 | Ch 9 | SEBI ICDR Chapter X-A disclosures; RODD content; Annual Impact Report; ongoing reporting timelines (quarterly/half-yearly/annual); penalty framework — SEBI (Intermediaries) Regs 2008 action, suspension, cancellation, debarment; SAS Standards Board; disciplinary committee process |
| 10 | SIA Taxation | 3 | 15 | Ch 10 | Section 10(23C), Section 11 exemption (85% application), Section 12A/12AB registration, Section 80G deduction (50%/100%), Section 115BBI (anonymous donation 30% tax), CSR under Section 135 Companies Act, GST on social services, FCRA implications; tax status of Section 8 companies, trusts, societies |
| 11 | SIA Key Regulations | 5 | 25 | Ch 11 | SEBI (ICDR) Regs 2018 — Chapter X-A (SSE), Reg 292A-L; SEBI (LODR) Regs 2015 — Chapter IXA/IXB for SSE-listed SEs; SEBI (Intermediaries) Regs 2008 — SIA registration; Companies Act 2013 Section 8 and Section 135 (CSR); Income Tax Act NPO sections; FCRA 2010; FEMA implications for foreign CSR |
| | **Total** | **100** | **500** | | |

**Why 11 topics, not 7 (placeholder) or fewer:** The PDF is chapter-based. Each chapter has distinct testable content. Merging Ch 1 (Social Sector + Financial Markets) with Ch 2 (SSE) would create an unwieldy 100-question topic. Keeping the 11-chapter split aligns with the official syllabus and gives candidates cleaner topic-wise practice.

**Question-count distribution check:** 50+50+30+50+50+50+55+75+50+15+25 = 500 ✓

---

## Content-Area Emphasis by Topic

### Topic 1: SIA Social Sector Ecosystem (50 Qs) — Ch 1
- **Section I (pages 11-40):** Social Sector in India — history (Societies Registration Act 1860, Indian Trusts Act 1882), NGO/NPO/FPE definitions, third-sector framing, Companies Act 2013 CSR mandate, SDG 2030 Agenda (17 goals — ALL testable)
- **Social Enterprise definition:** SEBI ICDR criteria — 16 eligible activities (eradicating poverty, healthcare, education, gender equality, environmental sustainability, heritage, sports, incubators, livelihood, rural development, welfare of vulnerable groups, education for differently-abled, promotion of bio-diversity, slum development, disaster management, promotion of culture)
- **FPE 67% threshold:** 3-year average of revenue / expenditure / beneficiary count ≥ 67% to target population
- **Ineligible:** corporate foundations, political/religious orgs, trade associations, infra/housing (except affordable housing)
- **Section II (pages 32-38):** Indian Financial Markets basics — equity, debt, mutual funds, derivatives, stock exchanges (NSE, BSE), SEBI role, regulatory pyramid
- **Annexure 1:** List of areas/sub-areas for taxonomic classification (16 areas × many sub-areas)
- **Annexure 2:** Developmental Initiatives — government schemes (Swachh Bharat, Ayushman Bharat, PMAY, etc.)
- **Mix:** 0% calc, 75% conceptual, 20% regulatory, 5% application

### Topic 2: SIA Social Stock Exchange Introduction and Instruments (50 Qs) — Ch 2
- **Concept of SSE** — platform for listing NPOs and For-Profit Social Enterprises; India launched Sept 2022 (NSE-SSE, BSE-SSE); separate segment of recognised stock exchanges
- **Stakeholders:** Social Enterprise (NPO/FPE), investor (retail/institutional/HNI), Social Stock Exchange (NSE/BSE), SEBI, Impact Assessor (SIA), Self-Regulatory Organisation (SRO — ICAI is notified SRO), Depository (NSDL/CDSL), ICAI-Social Impact Assessment Standards Board
- **Funding structures / instruments:**
  - **Zero Coupon Zero Principal (ZCZP) bond** — NPO-specific, donation-based, no return, no redemption, 3-year minimum tenure
  - **Development Impact Bond (DIB)** — outcome-linked, pay-for-success
  - **Social Venture Fund (SVF) Cat I AIF** — risk capital for SEs
  - **Mutual Fund schemes for SSE** — retail donation channel
  - **Equity** for For-Profit SEs only
- **Minimum issue size, min application size**, investor eligibility — retail allowed for ZCZP post-2022 amendments
- **Mix:** 5% calc (min issue size, min application size, tenure), 70% conceptual, 20% regulatory, 5% application

### Topic 3: SIA SSE Registration and Listing (30 Qs) — Ch 3
- Registration process on NSE-SSE / BSE-SSE — Form requirements, Board resolution, IT returns (3 years), audited financials, Section 12A / 80G / FCRA certificates
- Rights, Obligations and Disclosures Document (RODD)
- Key Listing Guidelines — ICDR Reg 292A-L, offer document, disclosure content, lock-in (if any), minimum subscription
- Public issue process for ZCZP — draft prospectus, merchant banker, basis of allotment
- Continuous disclosure obligations
- **Annexure 3 & 4:** Application form for NSE registration, Undertaking from NPO
- **Mix:** 0% calc, 35% conceptual, 60% regulatory, 5% application

### Topic 4: SIA Logic Model for Social Programs (50 Qs) — Ch 4
- Logical Framework Analysis (LFA) — history, OECD DAC origin, USAID adaptation
- **Components:**
  - **Inputs** (resources — funds, staff, infrastructure)
  - **Activities** (programs delivered)
  - **Outputs** (immediate deliverables — e.g., number of children enrolled)
  - **Outcomes** (short to medium-term changes — e.g., literacy rates improved)
  - **Impact** (long-term systemic change — e.g., generational poverty reduction)
- **Theory of Change (ToC)** — causal chain, assumption mapping, reverse logic
- **Logical Framework Matrix (LFM)** — 4x4 matrix (Objectives hierarchy × Indicators × Means of Verification × Assumptions)
- **SMART indicators** — Specific, Measurable, Achievable, Relevant, Time-bound
- **OVI** (Objectively Verifiable Indicator), **MOV** (Means of Verification), **Assumptions** vs **Risks**
- Flow of project/program design under Logic Model
- **Mix:** 5% calc (target setting, % achievement), 75% conceptual, 10% regulatory, 10% application (≥5 application questions constructing LFMs)

### Topic 5: SIA Social Impact Assessment and Assessors (50 Qs) — Ch 5
- Evolution of SIA — 1970s environmental impact assessment → 1990s social extension → 2000s impact investing → 2022 SSE launch
- **Principles of Impact Assessment:**
  - Relevance, materiality, additionality (what would have happened without the intervention — counterfactual)
  - Proportionality, attribution, contribution
  - Do no harm, unintended consequences
- **Social Impact Assessor (SIA):**
  - Empanelment with SRO (ICAI is notified SRO for SIA; ICMAI for cost auditors)
  - Eligibility: Graduate, 3+ years experience, pass Series XXIII
  - Certificate of Eligibility (CoE) — validity, renewal
  - Independence from the SE being assessed
  - SAS-200 Code of Conduct (integrity, objectivity, confidentiality, professional behaviour, due care)
- **SAS Framework** — issued by ICAI SIAB (Social Impact Assessment Standards Board)
- **List of SAS standards 100-1600** (by activity; see Topic 8 for detailed content)
- **SIA Process:** planning, data collection, analysis, reporting; peer review
- **Mix:** 0% calc, 65% conceptual, 30% regulatory, 5% application

### Topic 6: SIA Assessment Frameworks Techniques and Standards (50 Qs) — Ch 6
- **Global frameworks:**
  - **IRIS+** (GIIN) — Impact Reporting and Investment Standards
  - **GIIRS** — Global Impact Investing Rating System
  - **B Impact Assessment** — B Corp certification
  - **SROI** (Social Return on Investment) — monetisation of outcomes; impact value / investment ratio
  - **UN SDG indicators**, **GRI** (Global Reporting Initiative), **SASB** (Sustainability Accounting Standards Board)
  - **IRIS metric catalogue**, **OECD DAC evaluation criteria** (relevance, effectiveness, efficiency, impact, sustainability)
- **Techniques:**
  - Contribution analysis, attribution analysis, counterfactual (what-if)
  - Control groups, difference-in-difference (DiD), propensity score matching
  - Randomised Controlled Trials (RCT), quasi-experimental
  - Quantitative vs qualitative; mixed methods
  - Sample size, confidence interval, materiality, deadweight, drop-off, displacement
- **SAS-100 SIA Standard on conducting SIAs** — planning engagement, risk assessment, evidence collection, documentation, review
- **Unique Reference Number (URN)** issued per SIA engagement
- **Assurance vs Review** — levels of confidence; positive vs limited assurance
- **Mix:** 10% calc (SROI ratio, sample size, CI, deadweight %), 65% conceptual, 20% regulatory, 5% application

### Topic 7: SIA Reporting (55 Qs) — Ch 7
- **Social Impact Report (SIR) structure:**
  - Executive summary, objectives, methodology, findings, indicators, impact narrative
  - Beneficiary attestation, assurance statement, limitations
- **Annual Impact Report (AIR)** — Form RODD-A under SEBI ICDR Reg 292L
- Financial Year reporting cycle — within 90 days of FY-end
- SEBI LODR Reg 33 Part VII for SSE-listed SEs
- Certification by Impact Assessor — scope, form, sign-off
- **Monetary vs non-monetary metrics** — INR value, SROI, avoided DALYs, literacy gain %
- **Beneficiary attestation** — sample size, geo coverage, photographic evidence
- Common errors and red flags (exaggeration, double counting, omitted deadweight)
- Disclosure to stakeholders — investors, SSE, SEBI, SRO
- **Mix:** 5% calc, 50% conceptual, 40% regulatory, 5% application

### Topic 8: SIA Case Studies on SAS Standards (75 Qs) — Ch 8
**Each of the 6 SAS standards below gets ~12 questions. Plus 3 integrated cross-standard cases.**

- **SAS 100** — General SIA Standard (conducting SIAs across all activities)
- **SAS 200** (Ch 8.2) — Promoting healthcare including mental healthcare, sanitation, safe drinking water
  - Indicators: beneficiaries treated, disease prevented, access-km reduced, mortality reduction, DALYs averted
  - Data sources: hospital registers, village health records, ANC register, JJM data
- **SAS 400** (Ch 8.3) — Gender equality, women empowerment, LGBTQIA+ communities
  - Indicators: female employment %, wage gap reduction, domestic violence cases resolved, SHG formed, micro-enterprises by women, LGBTQIA+ inclusivity
- **SAS 500** (Ch 8.1) — Environmental sustainability, climate change mitigation/adaptation, forest and wildlife conservation
  - Indicators: CO2e avoided, trees planted (survival %), hectares of forest restored, species reintroduced, waste-to-landfill reduction
- **SAS 1100** (Ch 8.5) — Slum area development, affordable housing, sustainable cities
  - Indicators: housing units built, slum-free area certified, WASH compliance, average income uplift in resettled areas
- **SAS 1300** (Ch 8.4) — Promotion of Financial Inclusion
  - Indicators: bank account opened, first-time borrowers, women-owned accounts, insurance penetration, digital payment adoption
- Applied questions on:
  - Indicator selection (which metric fits SAS-X?)
  - Data sources and triangulation
  - Assumption testing (e.g., attribution of mortality reduction to the program vs government scheme)
  - Beneficiary identification and materiality thresholds per standard
  - Case-specific ethical dilemmas and disclosure choices
- **Mix:** 10% calc (SROI, DALYs averted, CO2e tons, etc.), 50% conceptual, 30% application (≥22 case-application questions — this is the case-study chapter), 10% regulatory

### Topic 9: SIA Disclosure Reporting and Penalties (50 Qs) — Ch 9
- SEBI ICDR Chapter X-A disclosures — offer document content, risk factors, use of proceeds
- RODD content requirements
- Annual Impact Report filing — Form, deadline (90 days post-FY), signatures
- Ongoing reporting — quarterly financials (if applicable), half-yearly disclosures, material event disclosure (3 days)
- **Penalty framework:**
  - SEBI (Intermediaries) Regulations 2008 — Chapter V action against SIA
  - Suspension, cancellation, debarment
  - Warning, fine, censure
- **SAS Standards Board disciplinary process:**
  - Complaint → preliminary enquiry → show-cause → hearing → decision → appeal
  - Panel composition; aggrieved party rights
- Whistleblower provisions
- **Mix:** 0% calc, 25% conceptual, 70% regulatory, 5% application

### Topic 10: SIA Taxation (15 Qs) — Ch 10
- **Section 10(23C)** — specified institutions exempt from tax (educational, medical)
- **Section 11** — income of charitable trust exempt if 85% applied within year
- **Section 12A / 12AB** — registration requirement for claiming exemption (5-year renewable)
- **Section 80G** — donor deduction (50% or 100%, with/without limit)
- **Section 115BBI** — anonymous donations above INR 1 lakh / 5% of donation taxed at 30%
- **CSR under Companies Act 2013 Section 135** — 2% of 3-yr avg net profit for companies with net worth ≥ INR 500 cr / turnover ≥ INR 1,000 cr / net profit ≥ INR 5 cr
- **GST on social services** — exempt under certain notifications (educational, charitable healthcare); GST on fee-for-service activities
- **FCRA implications** — foreign contribution requires FCRA registration; quarterly online reporting; misuse leads to cancellation
- Tax status of Section 8 companies vs trusts vs societies
- **Mix:** 30% calc (80G deduction, 85% application, CSR 2% computation, 115BBI tax on anonymous donation), 55% conceptual, 10% regulatory, 5% application. **At least 4 calc questions.**

### Topic 11: SIA Key Regulations (25 Qs) — Ch 11
- **SEBI (ICDR) Regulations 2018 — Chapter X-A (SSE):**
  - Reg 292A — Applicability
  - Reg 292B — Eligibility of Social Enterprise
  - Reg 292C — Registration with SSE
  - Reg 292D — Public issue of ZCZP
  - Reg 292E — Listing conditions
  - Reg 292F — Rights of holders
  - Reg 292G — Corporate governance
  - Reg 292H — Disclosure obligations
  - Reg 292I — Impact assessment
  - Reg 292J — SRO oversight
  - Reg 292K — SIA empanelment
  - Reg 292L — Annual Impact Report
- **SEBI (LODR) Regulations 2015** — Chapter IXA/IXB for SSE-listed NPOs and FPEs
- **SEBI (Intermediaries) Regulations 2008** — SIA registration, fit-and-proper, cancellation
- **Companies Act 2013:**
  - Section 8 (non-profit company); no distribution of profit; licence by ROC
  - Section 135 (CSR — applicability, committee, policy, 2% spend, carry forward, impact assessment for projects ≥ INR 1 cr)
- **Income Tax Act sections:** 10(23C), 11, 12AB, 80G, 115BBI
- **FCRA 2010** — foreign contribution regulation; registration, prior permission, renewal, bank account designation at SBI New Delhi main branch
- **FEMA implications** for foreign CSR — inbound FDI in charitable entities
- **Indian Trusts Act 1882** — private trusts vs public charitable trusts
- **Societies Registration Act 1860** — state-level variations (Bombay Public Trusts Act 1950 for Maharashtra, Gujarat)
- **Mix:** 5% calc, 20% conceptual, 70% regulatory, 5% application. **At least 1-2 calc questions.**

---

## Execution Rules (same as Phase 14D-1, 14D-2, 14D-3)

1. **ALWAYS read the PDF chapter before generating questions** via `import fitz` (PyMuPDF). Extract chapter text to `/tmp/xxiii_gen/pdf_text/chNN_*.txt`.
2. **Use the proven helper pattern** — copy `/tmp/xixe_gen/helper.py` to `/tmp/xxiii_gen/helper.py` and import from Python scripts at `/tmp/xxiii_gen/topicNN.py`. Helper signature unchanged:
   ```python
   build_xml(topic_key, idx, question_text, options_list_of_4, correct_idx_0_to_3, logic, trap, cross_exam, pro_tip)
   ```
   Helper validates each XML via `xml.etree.ElementTree` before writing.

3. **CRITICAL — change the Pro-Tip label for this exam.** The existing helper hardcodes `"Manager's Pro-Tip:"`. For Series XXIII (Social Impact Assessor), change to **`"Assessor's Pro-Tip:"`** — this is the buy-side/auditor-side framing for an SIA, not a fund manager. Edit `/tmp/xxiii_gen/helper.py` line in `build_xml()`:
   ```python
   explanation = f"""**The Logic:** {logic}
   **The Trap:** {trap}
   **Cross-Exam Context:** {cross_exam}
   **Assessor's Pro-Tip:** {pro_tip}"""
   ```

4. **XML format** (helper output):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="SIA <Topic>_<N>" sectionNumber="" articleNumber="0" articleName="">
     <question>
       <text><![CDATA[...]]></text>
       <answers>
         <answer correct="no"><text><![CDATA[A]]></text></answer>
         <answer correct="yes"><text><![CDATA[B]]></text></answer>
         <answer correct="no"><text><![CDATA[C]]></text></answer>
         <answer correct="no"><text><![CDATA[D]]></text></answer>
       </answers>
       <explanation><text><![CDATA[**The Logic:** ...
**The Trap:** ...
**Cross-Exam Context:** ...
**Assessor's Pro-Tip:** ...]]></text></explanation>
     </question>
   </QF>
   ```

5. **Parallel generation via subagents** — launch 11 agents (one per topic) in parallel. Phase 14D-3 wall-time with 15 agents: ~10 minutes. Expect similar or slightly faster (~8 minutes) for 11 agents.

6. **Shared `AGENT_INSTRUCTIONS.md`** — write a topic-agnostic contract file at `/tmp/xxiii_gen/AGENT_INSTRUCTIONS.md` using Phase 14D-3's `/tmp/xixe_gen/AGENT_INSTRUCTIONS.md` as template. **Changes required:**
   - Exam name (XXIII — Social Impact Assessors)
   - Topic-key prefix (`SIA `)
   - Tone: **SIA / auditor perspective** (not fund manager, not distributor)
   - Pro-Tip label: **`Assessor's Pro-Tip:`**
   - Remove Cat III-exclusion language (irrelevant here)
   - Add cross-exam references: V-B (MF Foundation, donor-side knowledge), XII (Securities Markets Foundation for Ch 1 Section II), X-A/X-B (Investment Adviser for CSR, Section 80G, donor advice), XV (Research Analyst for valuation of SSE-listed FPEs), III-A/C (Compliance for SSE-listed disclosure)
   - Do NOT recycle scenarios from any prior exam (XXIII is new content — write fresh scenarios)

7. **Tone constraint:** **SOCIAL IMPACT ASSESSOR perspective** (independent auditor / impact consultant certifying the SE's outputs/outcomes/impact). Explanation sign-off is literally **"Assessor's Pro-Tip:"** — never "Manager's Pro-Tip:" or "Distributor's Pro-Tip:".

8. **Indian names + INR amounts** in all scenario-based questions. Suggested SE / NPO / FPE names:
   - NPOs: `Pragati Foundation` (education), `Asha Deep Trust` (women empowerment), `Vatsalya Charitable Society` (child welfare), `Hariyali Foundation` (environment), `Swasth Bharat Trust` (healthcare), `Antyodaya Seva Sangh` (rural development)
   - FPEs (Section 8 Companies): `Grameen Urja Pvt Ltd` (rural solar), `Saksham Skills Pvt Ltd` (skills training), `Navya Agritech` (smallholder farmer), `Svasti Microfinance` (financial inclusion for women)
   - SSE-listed donors/investors: `Shubham Family Trust`, `Bharat Asset Management MF-for-SSE scheme`

9. **4 options, exactly 1 correct** per question. **Randomize correct-answer position across each topic's batch** — target ~25% per option, hard limit 40%.

10. **Cross-exam relevance:**
    - **V-B (MF Foundation)** — overlaps on basic investor education; XXIII is SIA-side, V-B is MF distributor-side.
    - **XII (Securities Markets Foundation)** — Ch 1 Section II overlap (Indian Financial Markets basics). Reframe for SIA use (how an SE raises funds via SSE).
    - **X-A / X-B (Investment Adviser L1/L2)** — CSR disclosure, Section 80G advice.
    - **XV (Research Analyst)** — no direct overlap, but SSE-listed FPE valuation may be referenced.
    - **III-A / III-C (Compliance)** — SSE-listed disclosure obligations for fund-based intermediaries.
    - Use `Cross-Exam Context` field to flag overlaps.

---

## Cross-Exam Overlap Matrix

| Other exam | Overlapping topics | How XXIII differentiates |
|-----------|-------------------|--------------------------|
| V-A (MF Distributor) | Topic 10 (Taxation — Section 80G, 115BBI) | V-A is MF distributor-side; XXIII is donor-to-SE flow. |
| V-B (MF Foundation) | Topic 1 (investor education), Topic 2 (MF-for-SSE schemes) | V-B is MF basics; XXIII uses MF as one funding channel. |
| X-A / X-B (Investment Adviser) | Topic 10 (CSR under Section 135), Topic 11 (FCRA) | X-A/B advises retail clients; XXIII assesses SE impact. |
| XII (Securities Markets Foundation) | Topic 1 Section II (Indian Financial Markets) | XII is general foundation; XXIII uses it as prerequisite. |
| XV (Research Analyst) | Topic 2 (SSE-listed FPE valuation) | XV is sell-side equity analyst; XXIII is buy-side impact assessor. |
| III-A / III-C (Compliance) | Topic 3 (listing), Topic 9 (disclosures) | III-A/C is intermediary compliance; XXIII is SIA-specific. |
| XXIV / IFSCA-01 (AML) | Topic 11 (FCRA, anti-money laundering for NPOs) | XXIV is broad AML; XXIII is FCRA-specific NPO angle. |
| XIX-A/B/C/D/E (AIF) | Topic 2 (SVF as Cat I AIF) | AIF exams are AIF ecosystem; XXIII references SVF as one SSE funding instrument. |

**All prior exam prefixes remain untouched.** XXIII uses a distinct `SIA ` prefix.

---

## After-Completion Checklist

1. Verify file count per topic matches targets (total = 500):
   ```bash
   for key in "SIA Social Sector Ecosystem" "SIA Social Stock Exchange Introduction and Instruments" "SIA SSE Registration and Listing" "SIA Logic Model for Social Programs" "SIA Social Impact Assessment and Assessors" "SIA Assessment Frameworks Techniques and Standards" "SIA Reporting" "SIA Case Studies on SAS Standards" "SIA Disclosure Reporting and Penalties" "SIA Taxation" "SIA Key Regulations"; do
     echo -n "$key: "
     ls "OriginalQuestions/${key}_"*.xml 2>/dev/null | wc -l
   done
   ```

2. Run XML validation (4 answers, 1 correct, 4-section explanation with CDATA wrapping, "Assessor's Pro-Tip:" label — **NOT** "Manager's Pro-Tip:").

3. Spot-check 2-3 questions per topic for factual accuracy against the PDF. Special attention:
   - SEBI ICDR Regulation numbers (292A-L)
   - 16 eligible social-enterprise activities (must match PDF verbatim)
   - SAS standard numbers (100, 200, 400, 500, 1100, 1300 — check for 300, 600, 700, 800, 900, 1000, 1200, 1400, 1500, 1600 if mentioned in list)
   - Section 135 CSR thresholds (net worth INR 500 cr / turnover INR 1,000 cr / net profit INR 5 cr)
   - Section 115BBI anonymous donation threshold (INR 1 lakh / 5% of total donations)
   - Section 11 85% application requirement
   - 67% FPE threshold for eligible activities

4. Update plists:
   - **ExamWeightages.plist** — REPLACE the 7 existing XXIII placeholder topics with the 11 "SIA …" keys. Marks from PDF page 10 (sum to exactly 100).
   - **Topics.plist** — add 11 topics with full question-ID arrays.
   - **TopicsLite.plist** — mirror Topics.plist for new keys.
   - **ChapterArticles.plist** — add 11 entries each with `{"All Topics": "1"}`.
   - **QuestionToArticleNumber.plist** — add all 500 question IDs mapped to `"1"`.

5. Validate plists: `plutil -lint ExamWeightages.plist Topics.plist TopicsLite.plist ChapterArticles.plist QuestionToArticleNumber.plist` — all must return `OK`.

6. Sanity check: `sum(len(v) for v in Topics.plist.values())` should equal total XML files in `OriginalQuestions/` (should be 13,393 after XXIII adds 500).

7. **Do NOT delete any existing files on disk.** All prior exam files must remain intact.

8. Update `HANDOFF.md`:
   - Bump date and status: "**31 of 31 exams complete. 13,393 questions, 324 topics.** Bank coverage is now COMPLETE for all NISM certification examinations."
   - Add row to the "Completed Exams" table for XXIII.
   - Add a "Series XXIII Breakdown (Phase 15)" section with the 11-topic table.
   - Update "What's Next" section — note that the bank is complete and future work shifts to audits, gap-filling, and maintenance.

9. Git commit: `"Add Phase 15 — Series XXIII Social Impact Assessors exam (500 questions)"`.

10. **Celebration note:** This closes out the NISM Question Bank — 31 of 31 exams complete, 13,393 questions across 324 topics. Add a brief note in HANDOFF.md acknowledging full-bank completion.

---

## Helper Module Pattern (adapted for SIA)

```python
# /tmp/xxiii_gen/helper.py — starts from /tmp/xixe_gen/helper.py with TWO changes
#   1) Change the Pro-Tip label from "Manager's" to "Assessor's"
#   2) Output dir unchanged

import os, xml.etree.ElementTree as ET

OUT_DIR = "/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions"

def safe_cdata(text):
    return f"<![CDATA[{text}]]>"

def build_xml(topic_key, idx, question_text, options, correct_idx, logic, trap, cross_exam, pro_tip):
    assert len(options) == 4
    assert 0 <= correct_idx <= 3
    qf_id = f"{topic_key}_{idx}"
    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        f'<QF id="{qf_id}" sectionNumber="" articleNumber="0" articleName="">',
        '    <question>',
        f'        <text>{safe_cdata(question_text)}</text>',
        '        <answers>',
    ]
    for i, opt in enumerate(options):
        c = "yes" if i == correct_idx else "no"
        parts.append(f'            <answer correct="{c}"><text>{safe_cdata(opt)}</text></answer>')
    explanation = f"""**The Logic:** {logic}
**The Trap:** {trap}
**Cross-Exam Context:** {cross_exam}
**Assessor's Pro-Tip:** {pro_tip}"""
    parts.extend([
        '        </answers>',
        f'        <explanation><text>{safe_cdata(explanation)}</text></explanation>',
        '    </question>',
        '</QF>',
    ])
    xml_content = "\n".join(parts)
    filepath = os.path.join(OUT_DIR, f"{qf_id}.xml")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(xml_content)
    ET.fromstring(xml_content)  # raises on invalid
    return filepath
```

---

## Parallel Agent Dispatch Plan

Launch 11 agents in parallel, one per topic. Expected wall-time ~8-12 minutes.

**Agent launch order (largest first — but all in a single parallel batch):**
1. Topic 8 — Case Studies on SAS Standards (75 Qs, Ch 8) — LARGEST
2. Topic 7 — Reporting (55 Qs, Ch 7)
3. Topic 1 — Social Sector Ecosystem (50 Qs, Ch 1)
4. Topic 2 — SSE Introduction and Instruments (50 Qs, Ch 2)
5. Topic 4 — Logic Model (50 Qs, Ch 4)
6. Topic 5 — SIA and Assessors (50 Qs, Ch 5)
7. Topic 6 — Frameworks Techniques and Standards (50 Qs, Ch 6)
8. Topic 9 — Disclosure Reporting and Penalties (50 Qs, Ch 9)
9. Topic 3 — SSE Registration and Listing (30 Qs, Ch 3)
10. Topic 11 — Key Regulations (25 Qs, Ch 11)
11. Topic 10 — Taxation (15 Qs, Ch 10) — SMALLEST

Each agent prompt must include: (a) topic key, (b) question count, (c) chapter text file path, (d) difficulty mix percentages, (e) helper import path, (f) **Assessor's Pro-Tip label reminder**, (g) output verification command, (h) reminder to NOT recycle prior exam scenarios.

Expected wall-time: ~10 minutes.

---

## Grand Total After Phase 15

| Metric | Before | After |
|--------|:------:|:-----:|
| Exams | 30 | **31 (ALL NISM exams)** |
| Questions | 12,893 | **13,393** |
| Topics | 313 | **324** |

**This is the final exam.** After Phase 15 completes, the NISM Question Bank will have full coverage of all 31 NISM certification exams. Future sessions shift to:
- **Audits** (like Phase 13A/B for V-A, V-B) — sample each exam, fix factual errors, rebalance mix, add/remove questions for balance.
- **Gap-filling** — topics with <30% ratio in TopicsLite need additional easier questions.
- **Type-rebalancing** — some exams (like XII) may need additional calc/regulatory depth.
- **Maintenance** — as SEBI regulations change, specific questions need refreshing (e.g., Budget 2026 tax changes, new SEBI circulars).

---

## Namespace Summary (after Phase 15 completes)

| Exam | Code | Prefix | Topics |
|------|:----:|:------:|:------:|
| Mutual Fund Distributor | V-A | (none, raw topic names incl. "Taxation") | 12 |
| Mutual Fund Foundation | V-B | (raw — Ch 1-N) | 10 |
| AIF Distributor Cat I/II | XIX-A | `AIF ` | 10 |
| AIF Distributor Cat III | XIX-B | `Cat III AIF ` | 10 |
| AIF Manager All Cat | XIX-C | `AIFM ` | 15 |
| AIF Manager Cat I/II | XIX-D | `AIFM CII ` | 13 |
| AIF Manager Cat III | XIX-E | `AIFM CIII ` | 15 |
| PMS Distributor | XXI-A | `PMS ` | 12 |
| Portfolio Manager | XXI-B | `PM ` | 21 |
| IA Renewal | X-C | `XC ` | 5 |
| Research Services Sales | XXV-A | `XXVA ` | 5 |
| **Social Impact Assessor** | **XXIII** | **`SIA `** | **11** |
| (remaining 19 exams use raw or per-exam prefixes) | various | various | rest |

---

## Key Differences from Phase 14D-3 (XIX-E)

| Dimension | XIX-E (Phase 14D-3 — done) | XXIII (Phase 15 — this session) |
|-----------|-----------------------------|-------------------------------------|
| Chapters | 15 | 11 |
| Total Qs | 500 | 500 |
| Prefix | `AIFM CIII ` | `SIA ` |
| Pro-Tip label | `Manager's Pro-Tip:` | **`Assessor's Pro-Tip:`** |
| Scope focus | Cat III hedge-fund strategies, HWM, daily NAV, 2x leverage, fund-level MMR | Social Stock Exchange, SIA process, SAS standards, impact measurement, NPO/FPE taxation |
| Domain type | Financial (private funds) | Social sector + financial markets intersection |
| Typical scenario | Himalaya Arbitrage Fund running merger-arb under 2x leverage cap | Pragati Foundation running rural education program funded via ZCZP, SIA certifies outputs/outcomes |
| Calc emphasis | High (HWM, VaR, Sharpe, leverage math) | Low (SROI, 80G deduction, CSR 2%, 85% application) |
| Regulatory density | SEBI AIF Regs + FEMA + PMLA + PIT + PFUTP + ICDR + FPI + FATCA | SEBI ICDR Ch X-A + LODR Ch IXA/B + Intermediaries Regs + Cos Act Sec 8/135 + IT Act Sec 10(23C)/11/12AB/80G + FCRA 2010 + Indian Trusts + Societies Registration |
| Caselets | None in bank | Optional (3 in actual exam); recommendation: none (consistent with 14D-1/2/3) |
| Excluded as primary | Cat I/II content | None — XXIII is new content, no exclusion rules |

---

## Phase 14D Lessons to Carry Forward

1. **Don't bulk-delete placeholder files** based on topic-key match. `Taxation` is V-A's key; `Taxation_*.xml` belongs to V-A and must never be touched.
2. **Parallel subagents are fast.** 500 questions across 11-15 topics typically take ~8-12 minutes wall time. Expect similar throughput.
3. **Extract PDF chapters to `/tmp/xxiii_gen/pdf_text/*.txt` upfront** — lets each agent read only its chapter without re-loading the PDF.
4. **Shared `AGENT_INSTRUCTIONS.md` file** — reduces per-agent prompt length and ensures every agent applies the same rules (tone, helper usage, CDATA, 4-section explanation, Pro-Tip label).
5. **Randomize correct-answer position** — ask each agent to report A/B/C/D distribution in its final summary. Rebalance if any >40% (swap correct position with another letter, remap "Option X" references in trap text).
6. **Validate plists with `plutil -lint`** after every bulk update, not just at the end.
7. **Commit with file glob `"SIA "*` (the chosen prefix + space)** to avoid accidentally picking up files from other exams.
8. **The PDF is authoritative.** If a regulation number seems inconsistent, re-extract from the PDF (`python3 -c 'import fitz; doc = fitz.open("..."); [print(doc[i].get_text()) for i in range(Ch_start, Ch_end)]'`) rather than relying on memory.
9. **If a chapter text seems to mix sub-sections (like Ch 1's Section I + Section II), split into sub-files** at `/tmp/xxiii_gen/pdf_text/ch01a_SocialSector.txt` and `/tmp/xxiii_gen/pdf_text/ch01b_FinancialMarkets.txt` for cleaner agent consumption.
10. **This is the final exam.** After Phase 15 commits, update `manifest.json` version to 6.0 (or latest) and add a completion entry. Consider writing a brief `COMPLETION.md` summarising the 31-exam journey with exam-by-exam question counts for posterity.

---

## Special Notes for Series XXIII

**(a) Negative marking ambiguity.** The workbook's page 5-6 does not explicitly state negative marking. Standard NISM practice for assessor-type exams is 25%. **Before writing to HANDOFF.md, either check the NISM website's XXIII exam information page or default to 25% and note "verify before exam".**

**(b) Reading the SAS standards catalogue.** The PDF references SAS-100 through SAS-1600, but Chapter 8 only provides case studies for SAS 100, 200, 400, 500, 1100, 1300. For Topic 5 (SIA and Assessors) and Topic 8 (Case Studies), the agent should extract the FULL SAS list from Ch 5 section 5.5 ("List of Social Impact Assessment (Audit) Standards") — each standard maps to one of the 16 SEBI ICDR eligible activities.

**(c) Cross-referencing 16 eligible activities to SAS standards.** The PDF likely provides a matrix mapping each of the 16 SEBI ICDR activities (eradicating poverty, healthcare, education, gender equality, etc.) to its corresponding SAS standard (SAS 100 for general, SAS 200 for healthcare, etc.). Questions should test this mapping directly.

**(d) ICAI SIAB.** The Social Impact Assessment Standards Board of ICAI is the notified SRO for SIAs. Candidates should know: ICAI is the SRO; ICMAI is NOT the SIA SRO (ICMAI is for cost auditors). This is a common distractor.

**(e) Budget 2024 / 2025 updates.** Verify whether Section 115BBI's anonymous donation threshold (INR 1 lakh / 5%) or Section 80G rates have changed in recent budgets. Cross-check against `TaxRatesReference_FY2025-26.md` if it exists in the bank.

**(f) If you find audit material in the bank** (e.g., 15 audit report files mentioned in HANDOFF), the audit framework for other exams (V-A, V-B, XXIV, IFSCA-01, XII) applies to XXIII too — but deferred to a later audit session.

**(g) Final wrap-up:** On successful completion, the NISM Question Bank achieves full 31-exam coverage. Optionally commit a `COMPLETION.md` at repo root noting the journey.
