# Session Prompt for Phase 14D-2 — Series XIX-D: AIF Managers (Category I and II)

**Date created:** April 20, 2026
**Pre-requisite:** Read `HANDOFF.md` first. **28 exams complete (11,893 questions)**. Phase 14D-1 (XIX-C AIF Managers All Categories, 500 Qs, 15 "AIFM " topics) done. This session tackles XIX-D only — **AIF Managers (Category I and II)** — the narrower sibling of XIX-C focused on PE/VC/Debt/Infra (no Cat III hedge content).

---

## Exam Overview

| Parameter | Value |
|-----------|-------|
| **Exam name** | NISM-Series-XIX-D: Category I and II Alternative Investment Fund Managers Certification Examination |
| **Exam code** | XIX-D |
| **Questions to generate** | 500 |
| **Topics** | 13 (mapped to PDF chapters 1–14, with Ch 1+2 combined) |
| **PDF** | `24 NISM-Series-XIX-D Category I and II Alternative Investment Fund Managers Certification Examination_January 2026.pdf` (400 pages) |
| **PDF location** | `/Users/shivam/aiworkspace/nismresearch/study material/` |
| **Actual exam** | 100 questions, 2 hours, 60% pass |
| **Negative marking** | **25%** (standard — this is a Manager exam, not a Distributor exam) |
| **Caselets** | None (PDF has sample case studies page but they are illustrative) |
| **Question bank dir** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` |
| **PDF reader** | Use `python3` with `import fitz` (PyMuPDF) |
| **Difficulty** | **Hard** — Manager-side depth on PE/VC/Debt/Infra; all Cat III content excluded |

---

## PDF Chapter Map (verified from TOC, page 10–13)

| Ch | Chapter Name | PDF start page | Marks (chapter-wise weightage, page 14) |
|:--:|--------------|:--:|:--:|
| 1 | Investments Landscape | 15 | 2 |
| 2 | Types of Investments | 28 | (combined into Ch 1 by weightage; treat as part of Topic 1) |
| 3 | AIFs in India and Suitability | 48 | 2 |
| 4 | AIF Ecosystem | 67 | 5 |
| 5 | AIF Structuring | 95 | 10 |
| 6 | Fee Structure of AIFs | 111 | 10 |
| 7 | Fund Performance and Benchmarking | 132 | 10 |
| 8 | Legal Documentation and Negotiations | 178 | 6 |
| 9 | Investment Strategies (Cat I and II) | 202 | 10 |
| 10 | Investment Process and Governance of Funds | 218 | 10 |
| 11 | Valuation | 252 | 10 |
| 12 | Fund Monitoring, Reporting and Exit | 278 | 10 |
| 13 | Taxation (Cat I/II only) | 300 | 5 |
| 14 | Regulatory Framework (SEBI AIF + FEMA + PMLA + Cyber + DPDPA + ICDR + FATCA) | 324 | 10 |
| | **Total** | | **100** |

PDF sections:
- Section A: Basics of Investments (Ch 1–2)
- Section B: Understanding the AIF Ecosystem (Ch 3–8)
- Section C: Managing AIF Investments — Category I and II AIFs (Ch 9–12)
- Section D: Taxation and Regulatory Framework (Ch 13–14)

**CRITICAL: XIX-D excludes all Cat III content.** No hedge strategies (long-short, market neutral, global macro, etc.), no Cat III fee/leverage/HWM specifics, no Cat III taxation (no Section 115UB fund-level MMR deep-dive), no Cat III concentration/leverage limits. Cat III concepts appear only as cross-reference comparisons — NOT as primary testable content.

---

## Existing Placeholder in ExamWeightages.plist

The `Series XIX-D - AIF Managers (Category I and II)` key already exists with placeholder topics that SHARE several keys with XIX-C's old placeholder (e.g., "Taxation", "Valuation", "Regulatory Framework", "Ecosystem", "AIFs in India and Suitability"). As of Phase 14D-1, these old placeholder keys have the following file populations:

| Placeholder key | Files currently on disk | Belongs to |
|------------------|:--:|:--|
| `Taxation` | 30 | **V-A** Mutual Fund Distributors (do NOT delete) |
| `Valuation` | 0 | nobody |
| `AIF Ecosystem` | 0 | nobody |
| `Regulatory Framework` | 0 | nobody |
| `AIFs in India and Suitability` | 0 | nobody |
| others | 0 | nobody |

**Learning from Phase 14D-1:** The original prompt recommended bash-deleting all files whose topic-base matched an XIX-D placeholder. That would have destroyed V-A's legitimate Taxation_1..30.xml files. Do NOT run that command. Instead:

1. **Do not touch any existing files on disk.**
2. **Pick a fresh namespace prefix for XIX-D so no key collides with V-A / XIX-A / XIX-B / XIX-C / XXI-A / XXI-B.**
3. **Replace the XIX-D placeholder topic keys in `ExamWeightages.plist` with 13 new prefixed keys.**

### Recommended namespace prefix: `AIFM CII ` (AIF Manager Category I/II)

This distinguishes XIX-D from:
- `AIF ` — XIX-A (Cat I/II Distributor)
- `Cat III AIF ` — XIX-B (Cat III Distributor)
- `AIFM ` — XIX-C (All-Cat Manager, completed 14D-1)
- `PMS ` — XXI-A (PMS Distributor)
- `PM ` — XXI-B (Portfolio Manager)
- `Taxation` — V-A (Mutual Fund Distributor)

And leaves room for:
- `AIFM CIII ` — XIX-E (Cat III Manager, future Phase 14D-3)

Alternative prefixes considered and rejected:
- `AIFM2 ` — ambiguous ("Cat II" vs "version 2")
- `CII AIFM ` — works but breaks the pattern of prefix-first
- `AIFM-CII ` — hyphen is unusual in existing keys

**If you prefer a different prefix, decide BEFORE generating any XMLs.** The prefix is embedded in every filename and every XML `<QF id="...">` attribute, so changing it later means rewriting all 500 files.

---

## Recommended Topic Plan — 13 Topics, 500 Questions

| # | Topic Name (exact plist key) | Marks | Qs | Source Chapter | Rationale |
|---|------------------------------|:----:|:--:|:--:|-----------|
| 1 | AIFM CII Investment Landscape and Types | 4 | 20 | Ch 1+2 | Asset classes, alternatives vs traditional, channels, J-curve, PMS/MF/AIF comparison |
| 2 | AIFM CII AIFs in India and Suitability | 2 | 10 | Ch 3 | Indian AIF market size, Cat I/II suitability, institutional vs family-office LPs |
| 3 | AIFM CII Ecosystem | 5 | 25 | Ch 4 | Sponsor, Trustee, Manager, Custodian, RTA, Auditor, Valuer, Merchant Banker, Placement Agent — Cat I/II flavour |
| 4 | AIFM CII Fund Structuring | 10 | 50 | Ch 5 | Trust/LLP/Company, pooling, drawdown/capital call, defaulting LP, recycling, parallel/feeder funds, GP commitment |
| 5 | AIFM CII Fee Structure | 10 | 50 | Ch 6 | Management fee (on committed / invested capital), carry, hurdle (soft/hard), 100% catch-up, HWM (limited Cat III cross-ref), clawback |
| 6 | AIFM CII Fund Performance and Benchmarking | 10 | 50 | Ch 7 | IRR (gross/net), MOIC, TVPI, DPI, RVPI, KS-PME, Direct Alpha, vintage benchmarking, Cambridge Associates/Preqin |
| 7 | AIFM CII Legal Documents and Negotiations | 6 | 30 | Ch 8 | Trust Deed/LLP Deed/MoA-AoA, IMA, Subscription Agreement, PPM template, side letters, MFN, Support Services Agreements |
| 8 | AIFM CII Investment Strategies | 10 | 50 | Ch 9 | PE (buyout, growth, distressed, secondaries), VC (seed → late-stage), Debt (senior secured, mezzanine, venture debt), Infra, SME, Angel, SVF, SSF |
| 9 | AIFM CII Investment Process and Governance | 10 | 50 | Ch 10 | Deal sourcing, investor DD, definitive agreements, LP protection rights (tag/drag, anti-dilution, liquidation pref), IC governance, co-investments, Code of Conduct |
| 10 | AIFM CII Valuation | 10 | 50 | Ch 11 | DCF, comps, asset-based, IPEV 2022, NAV, APMI-empanelled valuer, Reg 23 valuer rotation, Sep-2024 eligibility amendment |
| 11 | AIFM CII Fund Monitoring, Reporting, and Exit | 10 | 50 | Ch 12 | Quarterly/annual reporting to SEBI and LPs, Form AIF-1, distribution waterfall (ROC → pref → catch-up → 80/20), exits (trade sale/IPO/secondary), GP-led CV, wind-up, liquidation period, dissolution period |
| 12 | AIFM CII Taxation | 5 | 25 | Ch 13 | Section 115UB pass-through, Section 9A safe harbour, 194LBB TDS (10% resident, rate-in-force or DTAA for NR), STCG/LTCG per Budget 2024, surcharge cap, set-off/carry-forward, GAAR, MLI-PPT, IFSC-GIFT |
| 13 | AIFM CII Regulatory Framework | 10 | 40 | Ch 14 | SEBI (AIF) Regs 2012 (registration Reg 3/4, sponsor commit Reg 10 Cat I/II variant, AI framework, 25% single-investee, LVF, tenure, First/Final Close), Cyber Security & Resilience Framework 2024, DPDPA 2023, FEMA (FDI, overseas by AIFs, FPI), PMLA, ICDR, FATCA/CRS |
| | **Total** | **102** | **500** | | |

**Marks column note:** chapter marks sum to 100 per the PDF; the prompt reports 102 because Topic 1 combines Ch 1 (2 marks) + Ch 2 (unstated in weightage table — treat as 2 marks for PPR purposes). Use **100 total** when writing ExamWeightages.plist; rescale if needed (e.g., Topic 1 = 4 stays, or drop to 2 with Regulatory taking 10).

**Why 13 topics, not 14:** Ch 1 (Investments Landscape) and Ch 2 (Types of Investments) are small and overlap heavily with XIX-C Topic 1. Combining keeps per-topic question counts ≥ 10 for meaningful testing.

---

## Content-Area Emphasis by Topic (from PDF)

### Topic 1: AIFM CII Investment Landscape and Types (20 Qs) — Ch 1+2
- Investment vs speculation vs gambling; saving vs investment
- Investment objectives (capital preservation, current income, capital appreciation, total return)
- Required rate of return components (real risk-free + inflation + risk premium) — Fisher
- Traditional investments (equity, debt, cash, real estate) vs alternatives
- Types of alternative investments — PE, VC, hedge (cross-ref only), real assets, commodities
- Channels — MF, PMS, AIF, ULIP, SIF; why AIF
- Role of alternatives in portfolio management (diversification, illiquidity premium)
- Antecedents and growth of alternatives globally + India
- **Mix:** 5% calc, 65% conceptual, 20% regulatory, 10% application

### Topic 2: AIFM CII AIFs in India and Suitability (10 Qs) — Ch 3
- AIF evolution + growth in India (post-2012 SEBI AIF Regs)
- Types of AIFs — Cat I (VC, SME, Infra, SVF, Angel), Cat II (PE, private credit, debt) — **deep**; Cat III (hedge) — touched only for comparison
- Comparison of categories (registration, concessions, restrictions)
- Suitability of AIF products to Cat I/II investors (HNI, institutional, family office, pension)
- Current AIF market (commitments raised, fund count)
- AIF role in portfolio diversification + risk management
- **Mix:** 5% calc, 65% conceptual, 20% regulatory, 10% application

### Topic 3: AIFM CII Ecosystem (25 Qs) — Ch 4
- Sponsor (skin-in-game — Cat I/II 2.5% of corpus or INR 5 cr whichever lower; 3-year lock-in); eligibility (5-yr track record)
- Trustee / Trustee Company — fiduciary role, protection of investors
- Investment Manager — SEBI registration, net worth INR 10 cr, fit-and-proper, CIO + Compliance Officer
- Custodian — mandatory if corpus > INR 500 cr (post-2024 amendment: mandatory for ALL AIFs, phased)
- RTA, Fund Administrator, Auditor, Valuer (APMI-empanelled), Merchant Banker (for PPM filing)
- Placement Agent, Consultants/Gatekeepers (institutional LP advisors)
- Investment Committee (IC) — composition, voting, 75% consent for external members, INR 70 cr waiver
- Advisory Committee (LPAC)
- Operating Manager, Prime Broker (Cat III only — cross-ref)
- **Mix:** 0% calc, 60% conceptual, 30% regulatory, 10% application

### Topic 4: AIFM CII Fund Structuring (50 Qs) — Ch 5
- Principle of pooling; pooling considerations (tax, regulatory, operational)
- Anatomy of AIF constitution (Trust Deed → IMA → PPM → Subscription / Contribution Agreement hierarchy)
- Fund structures — Trust (most common; Indian Trusts Act 1882), LLP (LLP Act 2008), Company (Sec 8 Co. rare)
- GP-LP economics: sponsor commitment, GP catch-up, GP carry
- Capital Commitment vs Drawdown / Capital Call mechanics
- Recycling, re-investment, defaulting LP treatment (interest, forfeiture, expulsion)
- Side pockets (NOT typical for Cat I/II, more Cat III — cross-ref)
- Co-investment vehicles, parallel funds, feeder funds
- Open-ended vs close-ended — **Cat I/II must be close-ended ≥ 3 years**
- Min corpus INR 20 crore; min investor contribution INR 1 crore (INR 25 lakh AI/employees); max 1,000 investors per scheme (Angel = 200)
- Drawdown schedule math; capital account bookkeeping
- **Include at least 8 calc questions** (drawdown math, capital call pro-ration, defaulting-LP recalc)
- **Mix:** 15% calc, 45% conceptual, 30% regulatory, 10% application

### Topic 5: AIFM CII Fee Structure (50 Qs) — Ch 6
- Management fee (1-2.5%) — **on Committed Capital during commitment period; transitions to Invested Capital / NAV thereafter for Cat I/II**
- Incentive fee / carried interest — typically 20%
- Hurdle rate — 8% IRR typical PE/VC; soft (with catch-up) vs hard (no catch-up)
- Catch-up — 100% catch-up (to 20% of total profit) vs partial (e.g., 50/50, 80/20 catch-up)
- High Water Mark — **explicitly Cat III concept — briefly introduced for contrast only**
- Clawback provisions (end-of-fund true-up)
- Set-up costs (≤ 1.5-2.5% of commitments)
- Operating expenses (10-50 bps), trusteeship fees, transaction expenses
- GST 18% on management fees
- **Include at least 15 calc questions** (waterfall: ROC → pref → catch-up → 80/20, IRR, MOIC, TVPI, DPI, management fee base switch mid-life)
- **Mix:** 25% calc, 45% conceptual, 20% regulatory, 10% application

### Topic 6: AIFM CII Fund Performance and Benchmarking (50 Qs) — Ch 7
- Risks in AIF (investor-level + fund-level)
- Types of risks — liquidity, market, credit, concentration, regulatory, key-person, leverage (Cat III cross-ref)
- **Return measures (Cat I/II PE/VC focus)**: Gross IRR, Net IRR, J-curve, MOIC, TVPI, DPI, RVPI, KS-PME, Direct Alpha, ICM
- Pre and post-tax returns
- Benchmarking — vintage-year (quartile) by Cambridge Associates, Preqin, PitchBook; peer-group
- Benchmarking agencies (Indian — APMI; Global — Preqin, Cambridge, PitchBook, eVestment)
- Worked-out case (Annexure 7.1)
- Risk-adjusted metrics — Sharpe, Sortino (limited Cat I/II — mention)
- **Include at least 12 calc questions** (IRR from cash flows, MOIC, TVPI decomposition, J-curve stages)
- **Mix:** 25% calc, 45% conceptual, 20% regulatory, 10% application

### Topic 7: AIFM CII Legal Documents and Negotiations (30 Qs) — Ch 8
- Trust Deed / LLP Deed / MoA-AoA
- Investment Management Agreement (IMA) — scope, fees, termination, indemnity
- Subscription (Investor Contribution) Agreement — rep/warranty, defaulting, transfer restrictions
- Private Placement Memorandum (PPM) — SEBI template (since 2020), compulsory annual audit, merchant banker filing
- Wrapper structure
- Side letters, MFN clause, ECF (Excuse Clause Fund)
- Support Services Agreements — Fund Administrator, RTA, Custodian, Valuer, Auditor
- Key-person clauses, removal of GP (for-cause, no-fault divorce)
- Negotiation: fee step-down, carry split, GP commitment size, clawback triggers
- **Mix:** 0% calc, 50% conceptual, 45% regulatory, 5% application

### Topic 8: AIFM CII Investment Strategies (50 Qs) — Ch 9
- **PE strategies (deep):** buyout (LBO — EBITDA multiple thresholds), growth equity, distressed, secondaries
- **VC strategies (deep):** seed, Series A-E, late-stage, angel / pre-seed
- **Debt AIF strategies:** senior secured, mezzanine, structured credit, venture debt, distressed debt, special situations
- **Infrastructure:** operating assets, greenfield, brownfield
- **SME funds, Social Venture Funds (SVF), Special Situation Funds (SSF)** — SEBI treatment, ARC SRs
- Asset allocation / sleeve construction for Cat I/II
- **Exclude Cat III strategies** (long-short, market neutral, global macro, multi-strategy, arbitrage, managed futures) — these are XIX-E territory; mention only in Cross-Exam Context
- **Mix:** 10% calc (anti-dilution, LBO leverage, waterfall in scenarios), 55% conceptual, 25% regulatory, 10% application

### Topic 9: AIFM CII Investment Process and Governance (50 Qs) — Ch 10
- Deal sourcing — proprietary, intermediated, auctioned, co-investment
- Investor Due Diligence (from Manager side — what LPs ask, how Manager responds)
- Definitive agreements — SSA (Share Subscription Agreement), SHA (Shareholders Agreement), Debenture Trust Deed
- **Investor Protection Rights in Cat I/II AIFs:** tag-along, drag-along, ROFR/ROFO, anti-dilution (full ratchet, weighted-average), liquidation preference, affirmative/veto rights, board seats, pre-emptive rights, option pool, milestone valuation, ROFR/ROFO on exits
- Regulation on Governance Structure (IC composition, resident-Indian member, 75% external-member consent, recusal rules)
- Role of Human Capital in Avoiding Conflicts (KMPs, Chinese walls, personal-trading policies)
- Co-investments — allocation policy, MFN, pro-rata offering
- Code of Conduct of Investment Managers + IC (SEBI Fourth Schedule)
- Industry best practices
- **Mix:** 10% calc, 50% conceptual, 30% regulatory, 10% application

### Topic 10: AIFM CII Valuation (50 Qs) — Ch 11
- Valuation basics — fixed income (YTM, clean/dirty, accrued interest)
- Equity valuation approaches — intrinsic, relative, asset-based
- Business valuation approaches
- Asset-based valuation (NAV method)
- **DCF** — FCFF/FCFE, WACC, terminal value (Gordon growth, exit multiple)
- Relative / multiple-based (P/E, P/B, EV/EBITDA, EV/Revenue)
- Valuation of AIF portfolio investments (investee companies) — unlisted equity
- General approach to fund valuation; NAV computation (Cat I/II quarterly/semi-annual, not daily)
- Valuation Regulations — SEBI requirement, Reg 23 two-valuer rotation, Sep-2024 amendment to eligibility criteria (APMI-empanelled, Registered Valuer)
- Role of third-party Registered Valuers (IBBI, Companies Act 2013 Sec 247)
- **Exclude Cat III daily NAV / series-of-units methodology** (XIX-E territory)
- **Include at least 12 calc questions** (DCF with WACC + terminal value, multiples with DLOM, NAV computation, EV → Equity bridge, IRR on LBO)
- **Mix:** 25% calc, 50% conceptual, 20% regulatory, 5% application

### Topic 11: AIFM CII Fund Monitoring, Reporting, and Exit (50 Qs) — Ch 12
- Context and scope of effective fund monitoring (portfolio company quarterly reviews, covenant tracking, board reporting)
- Regulatory framework for fund monitoring + reporting (SEBI quarterly T+10, annual audited, Form AIF-1 / AIF-2, material PPM change 75% investor consent)
- Fund reporting to LPs (ILPA template — capital account, portfolio, fees, realisation)
- Form 64C / 64D (tax pass-through filing under 194LBB)
- **Exit options (Cat I/II focus):** trade sale, IPO, secondary sale (LP-led), GP-led continuation vehicle, dividend recap, buy-back, strategic acquirer
- Secondary exits — 6 Stewardship principles (SEBI), 25% bid rule, discount negotiation
- Winding up of AIF — tenure expiry, unanimous LP decision, regulatory direction; 75% threshold (by value)
- Liquidation Period (Reg 29(9A)) — up to 1 year, with up to 1-year extension
- Dissolution Period — further extension with 2/3 by value consent
- In-specie distributions, residual-value handling
- **Include at least 5 calc questions** (distribution waterfall, secondary sale NAV-discount effective price, TVPI at exit)
- **Mix:** 10% calc, 50% conceptual, 30% regulatory, 10% application

### Topic 12: AIFM CII Taxation (25 Qs) — Ch 13
- **Section 115UB ITA** — pass-through for Cat I/II (income retains character in LP hands EXCEPT business income taxed at fund level at MMR)
- **Section 9A ITA** — safe harbour for offshore Cat I/II fund managers in India
- **Section 161(1A)** — determinate vs indeterminate trust
- Capital Gains post-Budget 2024: equity-oriented LTCG 12.5% over INR 1.25 lakh (holding >12m); unlisted equity LTCG 12.5% (holding >24m); STCG 20% for listed, slab for unlisted
- **Section 194LBB TDS:** 10% flat for resident investors; rate-in-force or DTAA (whichever beneficial) for NR
- Surcharge: 15% cap on LTCG/STCG surcharge (post-Budget 2022)
- Set-off and carry forward of losses
- GAAR, MLI (PPT — Principal Purpose Test, LOB)
- **Angel tax abolition** (FA 2024 — Sec 56(2)(viib) repealed wef 1 Apr 2025)
- GST 18% on management fees; stamp duty on instruments; STT (for listed exits)
- **IFSC-GIFT tax benefits** for Cat I/II set up in IFSC (100% tax holiday, no GST on mgmt fees from NR)
- **Exclude Cat III fund-level taxation** (MMR, AOP classification — XIX-E territory); mention only in Cross-Exam Context
- **Include at least 6 calc questions** (pass-through allocation to LP, 194LBB TDS computation, surcharge cap, LTCG post-exemption)
- **Mix:** 25% calc, 35% conceptual, 30% regulatory, 10% application

### Topic 13: AIFM CII Regulatory Framework (40 Qs) — Ch 14
- **SEBI (AIF) Regulations 2012** — Reg 3 registration, Reg 4 eligibility, Reg 10 sponsor commit (Cat I/II: 2.5% or INR 5 cr whichever lower), Reg 13 open/close-ended (**Cat I/II must be close-ended**), Reg 15 investment conditions (25% single-investee), Reg 18 general obligations, Reg 20A Code of Conduct, Reg 23 valuation, Reg 29 wind-up
- **Accredited Investor framework** (2023) — individual ≥ INR 2 cr income / ≥ INR 1 cr NW, body-corporate ≥ INR 50 cr NW; LVF (Large Value Fund for AI) relaxations
- First Close, Final Close, tenure (min 3 yrs close-ended Cat I/II; extension up to 2 years with 2/3 LP consent)
- Investors' subscription rules, raising corpus capital
- Investment conditions: 25% single-investee Cat I/II; LVF can go to 50%; leverage limited (Cat III only at 2x — cross-ref)
- General obligations — reporting, disclosures, periodic filings
- **Cyber Security and Cyber Resilience Framework 2024** (SEBI) — 6-hour CERT-In incident reporting
- **Digital Personal Data Protection Act 2023 (DPDPA)** — data fiduciary, consent, notice
- **FEMA 1999** — FDI routes, overseas investments by AIFs (USD 1,500 mn cumulative cap), foreign investment in AIFs (Sponsor Manager residency requirement — Oct 2024 land-border amendment), FPI regime interaction
- **PMLA 2002** — CTR (annual), STR, UBO, KYC, PEP, record retention (5 yrs)
- **SEBI (ICDR) 2018** — lock-ins for AIF pre-IPO sellers
- **FATCA + CRS** — reporting under Rule 114F-H
- Fifth Amendment (2024) — pro-rata/pari-passu + AIF Migration framework
- **Include at least 3 calc questions** (sponsor commitment against corpus, AI NW threshold, 25% concentration)
- **Mix:** 5% calc, 30% conceptual, 60% regulatory, 5% application

---

## Execution Rules (same as Phase 14D-1)

1. **ALWAYS read the PDF chapter before generating questions** via `import fitz` (PyMuPDF). The chapter-text extraction pattern used in Phase 14D-1 (saving to `/tmp/xixd_gen/pdf_text/chNN_*.txt`) is recommended.
2. **Use the Phase 14D-1 helper pattern** — copy `/tmp/xixc_gen/helper.py` to `/tmp/xixd_gen/helper.py` and import from Python scripts at `/tmp/xixd_gen/topicNN.py`. Helper signature unchanged:
   ```python
   build_xml(topic_key, idx, question_text, options_list_of_4, correct_idx_0_to_3, logic, trap, cross_exam, pro_tip)
   ```
   Helper validates each XML via `xml.etree.ElementTree` before writing.
3. **XML format** (helper output):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="AIFM CII <Topic>_<N>" sectionNumber="" articleNumber="0" articleName="">
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
**Manager's Pro-Tip:** ...]]></text></explanation>
     </question>
   </QF>
   ```
4. **Parallel generation via subagents** — Phase 14D-1 launched 15 general-purpose agents in parallel (one per topic) which completed in ~10 minutes wall time. Use the same pattern: 13 agents here.
5. **Shared `AGENT_INSTRUCTIONS.md`** — write a topic-agnostic contract file at `/tmp/xixd_gen/AGENT_INSTRUCTIONS.md` and reference it from every per-topic agent prompt. Use Phase 14D-1's `/tmp/xixc_gen/AGENT_INSTRUCTIONS.md` as a starting template, changing only: exam name, topic-key prefix, Cat III exclusion reminder.
6. **Tone constraint:** AIF MANAGER perspective. Explanation sign-off is literally **"Manager's Pro-Tip:"** — never "Distributor's Pro-Tip:".
7. **Cat III exclusion:** All 13 topics must be framed from a Cat I/II Manager desk. Cat III may appear only in the `Cross-Exam Context` field for comparison. If a calc question involves HWM or Cat III daily-NAV, move it to the future XIX-E phase and choose a different Cat I/II calc.
8. **Indian names + INR amounts** in all scenario-based questions.
9. **4 options, exactly 1 correct** per question. **Randomize correct-answer position across each topic's batch** — target ~25% per option, hard limit 40% (≤ 0.4 × N) for any single option.
10. **Overlap with XIX-C (14D-1):** XIX-C covers All Categories. XIX-D is the Cat I/II subset. Do NOT recycle XIX-C scenarios verbatim — reframe with new names, different numbers, and Cat I/II-specific context (e.g., growth-equity round pricing, mezzanine IRR, infra brownfield cash flows). Use `Cross-Exam Context` field to flag "Same concept tested broader in XIX-C".

---

## Cross-Exam Overlap Matrix

| Other exam | Overlapping topics | How XIX-D differentiates |
|-----------|-------------------|--------------------------|
| XIX-A (Cat I/II Distributor) | Topics 1-5, 7-11 | Distributor sells; XIX-D builds/runs the fund. Reframe from Manager desk. |
| XIX-B (Cat III Distributor) | Topics 5, 6, 10 (fee/perf/valuation for Cat III) | XIX-D excludes Cat III — reference only for contrast. |
| XIX-C (All-Cat Manager, 14D-1) | All topics | XIX-C unifies both Cat tracks; XIX-D is the narrower Cat I/II-only version. Different scenarios. |
| XXI-B (Portfolio Manager) | Topic 10 (Valuation), Topic 6 (Performance), Topic 9 (Governance) | XXI-B is listed-securities PM; XIX-D is illiquid AIF PE/VC/Debt. |
| X-A / X-B (Investment Adviser) | Topic 12 (Taxation) | XIX-D adds AIF-specific provisions (115UB, 9A, 194LBB). |
| XXIV (AML) | Topic 13 (Regulatory — PMLA portion) | XIX-D covers AIF-specific AML. |
| III-A / III-C (Compliance) | Topic 13 (Regulatory) | XIX-D focuses on AIF compliance specifically. |
| VIII (Equity Derivatives) | none (derivatives restricted for Cat I/II) | Only cross-ref in Cat III context. |

**All XIX-C "AIFM …" keys remain untouched.** XIX-D uses a distinct prefix.

---

## After-Completion Checklist

1. Verify file count per topic matches targets (total = 500) — `ls "OriginalQuestions/{TOPIC_KEY}_"*.xml | wc -l` for each.
2. Run XML validation (4 answers, 1 correct, 4-section explanation with CDATA wrapping, "Manager's Pro-Tip:" label).
3. Spot-check 2-3 questions per topic for factual accuracy against the PDF.
4. Update plists:
   - **ExamWeightages.plist** — REPLACE existing XIX-D placeholder topics with the 13 "AIFM CII …" keys. Use marks (2, 5, 10, …) summing to 100.
   - **Topics.plist** — add 13 topics with full question-ID arrays.
   - **TopicsLite.plist** — mirror Topics.plist for new keys.
   - **ChapterArticles.plist** — add 13 entries each with `{"All Topics": "1"}`.
   - **QuestionToArticleNumber.plist** — add all 500 question IDs mapped to `"1"`.
5. Validate plists: `plutil -lint ExamWeightages.plist Topics.plist TopicsLite.plist ChapterArticles.plist QuestionToArticleNumber.plist` — all must return `OK`.
6. Sanity check: `sum(len(v) for v in Topics.plist.values())` should equal total XML files in `OriginalQuestions/`.
7. **Do NOT delete any existing files on disk.** V-A's 30 `Taxation_*.xml` files must remain intact. (Phase 14D-1 learnings.)
8. Update `HANDOFF.md`:
   - Bump date and status: "29 of 31 exams complete. 12,393 questions, 298 topics."
   - Add row to the "Completed Exams" table for XIX-D.
   - Add a "Series XIX-D Breakdown (Phase 14D-2)" section with the 13-topic table.
9. Git commit: `"Add Phase 14D-2 — Series XIX-D AIF Managers (Category I and II) exam (500 questions)"`.

---

## Helper Module Pattern (proven in Phase 14D-1)

```python
# /tmp/xixd_gen/helper.py (identical to /tmp/xixc_gen/helper.py)
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
**Manager's Pro-Tip:** {pro_tip}"""
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

## Parallel Agent Dispatch Plan (from Phase 14D-1 learnings)

Launch 13 agents in parallel, one per topic, in two waves:

**Wave 1 — largest / most unique (dispatch first):**
1. Topic 8 — Investment Strategies (50 Qs, Ch 9)
2. Topic 5 — Fee Structure (50 Qs, Ch 6)
3. Topic 11 — Monitoring/Reporting/Exit (50 Qs, Ch 12)
4. Topic 13 — Regulatory Framework (40 Qs, Ch 14) ← large chapter text
5. Topic 10 — Valuation (50 Qs, Ch 11)
6. Topic 4 — Fund Structuring (50 Qs, Ch 5)

**Wave 2 — medium / smaller:**
7. Topic 6 — Fund Performance and Benchmarking (50 Qs, Ch 7)
8. Topic 9 — Investment Process and Governance (50 Qs, Ch 10)
9. Topic 7 — Legal Documents and Negotiations (30 Qs, Ch 8)
10. Topic 12 — Taxation (25 Qs, Ch 13)
11. Topic 3 — Ecosystem (25 Qs, Ch 4)
12. Topic 1 — Investment Landscape and Types (20 Qs, Ch 1+2)
13. Topic 2 — AIFs in India and Suitability (10 Qs, Ch 3)

Each agent prompt must include: (a) topic key, (b) question count, (c) chapter text file path, (d) difficulty mix percentages, (e) Cat III exclusion reminder, (f) helper import path, (g) output verification command.

Phase 14D-1 wall-time with 15 parallel agents: ~10 minutes. Expect ~8-10 minutes here with 13.

---

## Grand Total After Phase 14D-2

| Metric | Before | After |
|--------|:------:|:-----:|
| Exams | 28 | 29 |
| Questions | 11,893 | 12,393 |
| Topics | 285 | 298 |

**Next after XIX-D:**
- **Phase 14D-3:** Series XIX-E (AIF Managers Category III only, 500 Qs, 13 topics). PDF: `FINAL_Series-XIX-E_Category III AIF Managers.pdf`. Recommended prefix: `AIFM CIII ` to mirror this phase. Focus on Cat III hedge strategies (long-short, market neutral, global macro, multi-strategy, arbitrage), HWM crystallisation, daily NAV, 2x leverage cap, fund-level MMR taxation.
- **Phase 15:** Series XXIII (Social Impact Assessors, 500 Qs, 7 topics). Entirely new content (SSE framework, SROI, theory of change).

After Phase 14D-3, only XXIII remains for full NISM exam coverage.

---

## Namespace Summary (after Phase 14D-2 completes)

| Exam | Code | Prefix | Topics |
|------|:----:|:------:|:------:|
| Mutual Fund Distributor | V-A | (none, uses raw topic names incl. "Taxation") | 12 |
| AIF Distributor Cat I/II | XIX-A | `AIF ` | 10 |
| AIF Distributor Cat III | XIX-B | `Cat III AIF ` | 10 |
| AIF Manager All Cat | XIX-C | `AIFM ` | 15 |
| **AIF Manager Cat I/II** | **XIX-D** | **`AIFM CII `** | **13** |
| AIF Manager Cat III (future) | XIX-E | `AIFM CIII ` (proposed) | 13 |
| PMS Distributor | XXI-A | `PMS ` | 12 |
| Portfolio Manager | XXI-B | `PM ` | 21 |

---

## Phase 14D-1 Lessons to Carry Forward

1. **Don't bulk-delete placeholder files** based on topic-key match. Check which exam actually owns each file first. (Phase 14D-1 avoided destroying V-A's Taxation files.)
2. **Parallel subagents are fast.** 500 questions across 15 topics took ~10 minutes wall time with 15 parallel agents. Expect similar throughput here.
3. **Extract PDF chapters to `/tmp/xixd_gen/pdf_text/*.txt` upfront** — lets each agent read only its chapter without re-loading the PDF.
4. **Shared `AGENT_INSTRUCTIONS.md` file** — reduces per-agent prompt length and ensures every agent applies the same rules (tone, helper usage, CDATA, 4-section explanation).
5. **Randomize correct-answer position** — ask each agent to report A/B/C/D distribution in its final summary and set a hard cap (e.g., no option > 40%). Phase 14D-1 achieved ~25% per option across all 15 topics.
6. **Validate plists with `plutil -lint`** after every bulk update, not just at the end.
7. **Commit with file list that starts with `"AIFM CII"`** (or your chosen prefix) to avoid accidentally picking up files from other exams.
