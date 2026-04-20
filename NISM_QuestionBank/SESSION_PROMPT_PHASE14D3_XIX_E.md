# Session Prompt for Phase 14D-3 — Series XIX-E: AIF Managers (Category III)

**Date created:** April 20, 2026
**Pre-requisite:** Read `HANDOFF.md` first. **29 exams complete (12,393 questions)**. Phase 14D-2 (XIX-D AIF Managers Category I and II, 500 Qs, 13 "AIFM CII " topics) done. This session tackles XIX-E only — **AIF Managers (Category III)** — the hedge-fund-manager sibling of XIX-D focused on long-short / market-neutral / multi-strategy / arbitrage / global-macro, HWM crystallisation, daily NAV, 2x leverage, and fund-level MMR taxation.

---

## Exam Overview

| Parameter | Value |
|-----------|-------|
| **Exam name** | NISM-Series-XIX-E: Category III Alternative Investment Fund Managers Certification Examination |
| **Exam code** | XIX-E |
| **Questions to generate** | **500** |
| **Topics** | **15** (mapped to PDF chapters 1–15) |
| **PDF** | `FINAL_Series-XIX-E_Category III AIF Managers.pdf` (453 pages) |
| **PDF location** | `/Users/shivam/aiworkspace/nismresearch/study material/` |
| **Actual exam** | 60 MCQs + 4 caselets × 5 sub-questions = 64 questions / 100 marks, 2 hours, 60% pass |
| **Negative marking** | **25%** (standard — this is a Manager exam, not a Distributor exam) |
| **Caselets** | **YES (official exam format).** Recommend generating 10-12 caselets (50-60 caselet Qs) across topics 7, 10, 12, 13. Caselet stems should be 4-6 sentence Cat III scenarios (e.g., "Himalaya Arbitrage Fund runs a merger-arb strategy with 1.8x gross leverage and reports quarterly HWM crystallisation…"). If skipping caselets, stick to pure MCQs and note in HANDOFF.md. |
| **Question bank dir** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` |
| **PDF reader** | Use `python3` with `import fitz` (PyMuPDF) |
| **Difficulty** | **Hard** — Manager-side depth on hedge strategies, HWM mechanics, daily NAV, leverage math; all Cat I/II private-market content appears only for contrast |

---

## PDF Chapter Map (verified from TOC, page 10–13)

| Ch | Chapter Name | PDF start page | Marks (chapter-wise weightage, page 15) |
|:--:|--------------|:--:|:--:|
| 1 | Investments Landscape | 16 | 3 |
| 2 | Types of Investments | 29 | 3 |
| 3 | Introduction to Modern Portfolio Theory and Capital Market Theory | 49 | 4 |
| 4 | AIFs in India and Suitability | 67 | 3 |
| 5 | AIF Ecosystem | 89 | 5 |
| 6 | AIF Structuring | 117 | 10 |
| 7 | Fee Structure and Fund Performance | 133 | 10 |
| 8 | Indices and Benchmarking | 197 | 4 |
| 9 | Legal Documentations and Negotiations | 226 | 8 |
| 10 | Investment Strategies (Category III) | 251 | 12 |
| 11 | Governance of Funds and Due Diligence | 270 | 7 |
| 12 | Valuation | 292 | 10 |
| 13 | Fund Monitoring, Reporting and Exit | 341 | 10 |
| 14 | Taxation (Category III) | 361 | 5 |
| 15 | Regulatory Framework (SEBI AIF + FEMA + PMLA + PIT + PFUTP + ICDR + FPI + FATCA) | 382 | 6 |
| | **Total** | | **100** |

**CRITICAL weightage verification:** Re-extract the chapter weightage table from PDF page 15 before finalising `ExamWeightages.plist`. The PDF text extraction in this prompt session produced ambiguous totals (Ch 14 shown as 8 in one parse, 5 in another). Use `python3 -c 'import fitz; doc=fitz.open("..."); print(doc[14].get_text())'` and trust the official table. The table above is the best inference and sums to 100; verify before using.

PDF sections:
- Section A: Basics of Investments (Ch 1–3)
- Section B: Understanding the AIF Ecosystem (Ch 4–9)
- Section C: Managing AIF Investments — Category III AIFs (Ch 10–13)
- Section D: Taxation and Regulatory Framework (Ch 14–15)

**CRITICAL: XIX-E excludes all Cat I/II primary content.** No PE/VC deep-dive (Ch 9 XIX-D), no Cat I/II fee specifics (management-fee-on-committed-capital in commitment phase is less relevant for Cat III which runs open-ended), no Cat I/II-only strategies (buyout, growth equity, VC seed, distressed, secondaries, mezzanine, venture debt, infra, SVF, SSF, angel). Cat I/II concepts appear only as cross-reference comparisons in the `Cross-Exam Context` field — NOT as primary testable content.

---

## Existing Placeholder in ExamWeightages.plist

**Check `ExamWeightages.plist` for the XIX-E key before starting.** The key is likely `Series XIX-E - AIF Managers (Category III)` with placeholder topics that may share keys with V-A / XIX-C / XIX-D / XXI-A / XXI-B. As of Phase 14D-2:

| Placeholder key (if present) | Files on disk | Belongs to |
|------------------------------|:--:|:--|
| `Taxation` | 30 | **V-A** Mutual Fund Distributors (do NOT delete) |
| `Valuation` | 0 | nobody |
| `Regulatory Framework` | 0 | nobody |
| `AIF Ecosystem` | 0 | nobody |
| `AIFs in India and Suitability` | 0 | nobody |
| others | 0 | nobody |

**Learning from Phase 14D-1 and 14D-2:** Do NOT bash-delete files whose topic-base matches an XIX-E placeholder. V-A's Taxation_1..30.xml files must remain intact.

1. **Do not touch any existing files on disk.**
2. **Pick a fresh namespace prefix for XIX-E.**
3. **Replace the XIX-E placeholder topic keys in `ExamWeightages.plist` with 15 new prefixed keys.**

### Recommended namespace prefix: `AIFM CIII ` (AIF Manager Category III)

This distinguishes XIX-E from:
- `AIF ` — XIX-A (Cat I/II Distributor)
- `Cat III AIF ` — XIX-B (Cat III Distributor)
- `AIFM ` — XIX-C (All-Cat Manager, completed 14D-1)
- `AIFM CII ` — XIX-D (Cat I/II Manager, completed 14D-2)
- `PMS ` — XXI-A (PMS Distributor)
- `PM ` — XXI-B (Portfolio Manager)
- `Taxation` — V-A (Mutual Fund Distributor)

The `AIFM CIII ` prefix was pre-announced in the Phase 14D-2 prompt and HANDOFF.md as the reservation for this phase. Alternative prefixes considered and rejected in earlier phases:
- `AIFM3 ` — ambiguous
- `CIII AIFM ` — breaks prefix-first pattern
- `AIFM-CIII ` — hyphen is unusual

**Stick with `AIFM CIII ` unless you have a strong reason to change.** The prefix is embedded in every filename and every XML `<QF id="...">` attribute.

---

## Recommended Topic Plan — 15 Topics, 500 Questions

| # | Topic Name (exact plist key) | Marks | Qs | Source Chapter | Rationale |
|---|------------------------------|:----:|:--:|:--:|-----------|
| 1 | AIFM CIII Investment Landscape | 3 | 15 | Ch 1 | Fisher rate of return, investment vs speculation, asset classes, alternatives vs traditional |
| 2 | AIFM CIII Types of Investments | 3 | 15 | Ch 2 | PE, VC, hedge (deep), real assets, commodities, channels (MF/PMS/AIF/ULIP/SIF) |
| 3 | AIFM CIII Modern Portfolio Theory and Capital Market Theory | 4 | 20 | Ch 3 | Efficient frontier, CAPM, CML, SML, alpha/beta, Sharpe, systematic vs unsystematic risk |
| 4 | AIFM CIII AIFs in India and Suitability | 3 | 15 | Ch 4 | Indian AIF market size (Cat III slice), hedge-fund suitability for HNI/family office, Cat III comparison vs Cat I/II |
| 5 | AIFM CIII Ecosystem | 5 | 25 | Ch 5 | Sponsor, Trustee, Manager, Custodian, RTA, Auditor, Valuer, Merchant Banker, **Prime Broker (CRITICAL Cat III)**, IC, LPAC |
| 6 | AIFM CIII Fund Structuring | 10 | 50 | Ch 6 | Trust/LLP/Company pooling, open-ended permitted for Cat III, feeder/parallel funds, co-investment, master-feeder, GIFT-IFSC |
| 7 | AIFM CIII Fee Structure and Fund Performance | 10 | 50 | Ch 7 | Management fee on NAV (1-2%), carry 15-20%, **HWM crystallisation (deep)**, soft/hard hurdle, catch-up, risks (liquidity, market, credit, **leverage, counterparty**), risk measures (VaR, CVaR, drawdown, volatility, **Sharpe/Sortino/Calmar**), return measures (Time-Weighted, Money-Weighted, **annualised return for open-ended Cat III**) |
| 8 | AIFM CIII Indices and Benchmarking | 4 | 20 | Ch 8 | Nifty/Sensex vs hedge-fund indices (HFRI, Credit Suisse Hedge, Eurekahedge), Cat III benchmarking, tracking error, information ratio, peer-group benchmarking, APMI standards |
| 9 | AIFM CIII Legal Documents and Negotiations | 8 | 40 | Ch 9 | Trust Deed/LLP Deed, IMA, Subscription Agreement, PPM template (SEBI 2020), side letters, MFN, Excuse/Exclude clauses, wrapper, support services agreements (Prime Broker, Custodian, Valuer, Fund Admin, Auditor) |
| 10 | AIFM CIII Investment Strategies | 12 | 60 | Ch 10 | **Long-only, long-short equity, market-neutral, global macro, multi-strategy, managed futures (CTA), arbitrage (merger, convertible, statistical, fixed-income), event-driven, distressed, relative value.** Asset allocation for Cat III |
| 11 | AIFM CIII Governance and Due Diligence | 7 | 35 | Ch 11 | IC composition (75% external consent, INR 70 cr waiver), resident-Indian rule, investor DD (from Manager side), definitive agreements (ISDA, PB agreement), KMPs, Chinese walls, personal-trading policy, co-investments, Code of Conduct |
| 12 | AIFM CIII Valuation | 10 | 50 | Ch 12 | Fixed-income valuation (YTM, clean/dirty, accrued), equity (intrinsic/relative/asset-based), DCF, multiples, **daily NAV computation (series-of-units / equalisation / side pockets)**, SEBI Reg 23, Sep-2024 valuer eligibility amendment, APMI-empanelled |
| 13 | AIFM CIII Fund Monitoring Reporting and Exit | 10 | 50 | Ch 13 | Portfolio monitoring (VaR, stress tests, leverage), SEBI quarterly T+10 reporting, monthly investor NAV statements, Form AIF-1/AIF-2, **Cat III CTR framework (Common Terminology Rules)**, 25% material change trigger, exit options (redemption in open-ended, secondary sale, winding-up 75% threshold, Liquidation Period Reg 29(9A), Dissolution Period) |
| 14 | AIFM CIII Taxation | 5 | 25 | Ch 14 | **Fund-level taxation at MMR for Cat III (Section 115UB NOT applicable)** — AOP classification, pass-through DENIED, **AMT vs MAT** implications, capital gains at fund level (12.5% LTCG post-Budget 2024, 20% STCG), surcharge cap, Section 9A safe harbour, 194LBB NOT applicable, GST 18% on mgmt fees, **IFSC-GIFT 100% tax holiday 80LA** for Cat III in IFSC, GAAR, MLI-PPT |
| 15 | AIFM CIII Regulatory Framework | 6 | 30 | Ch 15 | SEBI (AIF) Regs 2012 — Reg 3/4 registration, **Reg 10 sponsor commit Cat III: 5% of corpus or INR 10 cr whichever lower**, Reg 13 open-ended permitted for Cat III, Reg 15 investment conditions (10% single-investee for Cat III open-ended, 25% close-ended; **2x leverage cap**), Reg 20A Code of Conduct, Reg 23 valuation (daily NAV), Reg 29 wind-up, AI framework, LVF relaxations, FEMA (FDI, overseas by AIFs USD 1,500 mn, FPI), PMLA, SEBI (PIT) Regs 2015, SEBI (PFUTP) 2003, ICDR 2018, FPI Regs 2019, FATCA/CRS Rule 114F-H, CSCRF 2024, DPDPA 2023, Fifth Amendment 2024 (pro-rata/pari-passu + AIF Migration) |
| | **Total** | **100** | **500** | | |

**Why 15 topics, not fewer:** XIX-E has dedicated chapters for MPT/CMT (Ch 3) and Indices/Benchmarking (Ch 8) that XIX-D did not — Cat III Managers need the quantitative portfolio theory toolkit. Also Fee Structure and Fund Performance are merged into Chapter 7 in the PDF (unlike XIX-D which split them) — following the PDF structure, treat Topic 7 as a unified 50-question topic.

**Question-count distribution check:** 15 + 15 + 20 + 15 + 25 + 50 + 50 + 20 + 40 + 60 + 35 + 50 + 50 + 25 + 30 = 500 ✓

---

## Content-Area Emphasis by Topic (from PDF)

### Topic 1: AIFM CIII Investment Landscape (15 Qs) — Ch 1
- Investment vs speculation vs gambling; saving vs investment
- Investment objectives (capital preservation, current income, capital appreciation, total return)
- Required rate of return components (real risk-free + inflation + risk premium) — Fisher
- **Mix:** 5% calc, 65% conceptual, 20% regulatory, 10% application

### Topic 2: AIFM CIII Types of Investments (15 Qs) — Ch 2
- Traditional (equity, debt, cash, real estate) vs alternatives
- **Types of alternative investments — PE, VC, HEDGE (deep for Cat III), real assets, commodities, structured products**
- Channels — MF, PMS, AIF, ULIP, SIF; why AIF; why Cat III specifically
- Role of alternatives in portfolio management (diversification, uncorrelated returns, absolute return focus for Cat III)
- Antecedents and growth of alternatives globally + India
- **Mix:** 5% calc, 60% conceptual, 25% regulatory, 10% application

### Topic 3: AIFM CIII Modern Portfolio Theory and Capital Market Theory (20 Qs) — Ch 3
- Framework for constructing portfolios (MPT)
- Assumptions of MPT, expected return, variance, covariance
- Efficient frontier, portfolio optimization, estimation issues
- CMT — CML, SML, CAPM, alpha/beta, systematic vs unsystematic risk
- Assumptions of CMT and implications of relaxing
- **Mix:** 35% calc (Markowitz variance, CAPM required return, beta, Sharpe), 45% conceptual, 15% regulatory, 5% application
- **At least 7 calc questions** (portfolio variance with covariance, CAPM required return, beta from regression)

### Topic 4: AIFM CIII AIFs in India and Suitability (15 Qs) — Ch 4
- AIF evolution + growth in India (post-2012 SEBI AIF Regs)
- Types of AIFs — Cat I/II (cross-ref only), Cat III (hedge) — DEEP for Cat III
- Comparison of categories (registration, concessions, restrictions)
- **Cat III specific suitability — HNI INR 1 cr+, family office, pension for absolute return; NOT retail**
- Current AIF market (Cat III slice of total commitments)
- Cat III comparison with Traditional Investments (liquidity, correlation, fee drag)
- AIF role in portfolio diversification + risk management
- **Mix:** 5% calc, 65% conceptual, 25% regulatory, 5% application

### Topic 5: AIFM CIII Ecosystem (25 Qs) — Ch 5
- Sponsor (skin-in-game — **Cat III: 5% of corpus or INR 10 cr whichever lower**; 3-year lock-in); eligibility (5-yr track record)
- Trustee / Trustee Company — fiduciary role
- Investment Manager — SEBI registration, net worth INR 10 cr, fit-and-proper, CIO + Compliance Officer
- Custodian — mandatory for ALL AIFs post-2024 amendment (phased)
- **Prime Broker — CRITICAL Cat III role:** settlement, margin financing, securities lending, OTC clearing. Registered in India or recognised offshore. Cat III-only party.
- RTA, Fund Administrator, Auditor, Valuer (APMI-empanelled), Merchant Banker (for PPM filing)
- IC composition (75% external-member consent, INR 70 cr waiver)
- LPAC (Advisory Committee)
- Operating Manager
- **Mix:** 0% calc, 60% conceptual, 30% regulatory, 10% application

### Topic 6: AIFM CIII Fund Structuring (50 Qs) — Ch 6
- Principle of pooling; pooling considerations (tax, regulatory, operational)
- Anatomy of AIF constitution (Trust Deed → IMA → PPM → Subscription hierarchy)
- Fund structures — Trust (most common), LLP, Company
- GP-LP economics for Cat III (no "commitment period" as in PE — rolling NAV subscriptions)
- **Open-ended (permitted for Cat III — unique to Cat III) vs close-ended**
- Master-feeder structures (common for Cat III with onshore feeder + offshore master or vice versa)
- Parallel funds, side pockets (common in Cat III), equalisation mechanics
- Min corpus INR 20 crore; min investor contribution INR 1 crore (INR 25 lakh AI/employees); max 1,000 investors per scheme
- **Include at least 7 calc questions** (equalisation math, side-pocket NAV adjustment, feeder-to-master allocation, subscription/redemption NAV timing)
- **Mix:** 15% calc, 45% conceptual, 30% regulatory, 10% application

### Topic 7: AIFM CIII Fee Structure and Fund Performance (50 Qs) — Ch 7
- Management fee on NAV (typically 1-2% — Cat III doesn't use "committed capital" like PE)
- Incentive fee / carried interest — typically 15-20%
- Hurdle rate — 0-8% (often no hurdle for long-short)
- Soft vs hard hurdle; partial/full catch-up (rare in Cat III)
- **HWM (High Water Mark) — Cat III-critical:** monthly/quarterly/annual crystallisation, series-of-units or equalisation credits/debits, reset on redemption
- Clawback (rare in Cat III)
- Set-up costs, operating expenses, transaction costs, GST 18%
- **Risks:** liquidity, market, credit, concentration, regulatory, key-person, **leverage (Cat III 2x cap), counterparty (prime broker default), model risk, liquidity mismatch (redemption vs portfolio illiquidity)**
- **Risk measures:** VaR (parametric, historical, Monte Carlo), CVaR/Expected Shortfall, maximum drawdown, volatility (daily/annualised), downside deviation, beta, tracking error
- **Return measures (Cat III-focus):** Time-Weighted Return (TWR), Money-Weighted Return (MWR), annualised return, geometric vs arithmetic mean, **MOIC/TVPI/DPI less relevant for open-ended Cat III — flag when they appear**
- Pre- and post-tax returns (Cat III fund-level MMR tax drag)
- **Risk-adjusted metrics:** Sharpe, Sortino, **Calmar (return / max drawdown — Cat III-specific),** Treynor, Jensen's alpha, Information Ratio
- **Include at least 15 calc questions** (HWM crystallisation with carry computation, VaR from volatility + z-score, Sharpe from mean/stdev, Calmar from MDD, TWR from subperiod returns, equalisation credit/debit)
- **Mix:** 30% calc, 45% conceptual, 15% regulatory, 10% application

### Topic 8: AIFM CIII Indices and Benchmarking (20 Qs) — Ch 8
- Index construction — price-weighted vs value-weighted vs equal-weighted
- Nifty 50, Sensex, Nifty Midcap, Nifty Next 50
- **Hedge-fund indices:** HFRI (Hedge Fund Research), Credit Suisse/Tremont, Eurekahedge, Barclay Hedge
- **Cat III benchmarking challenges:** survivorship bias, self-reporting bias, small sample, strategy heterogeneity
- Peer-group benchmarking for Cat III strategies
- Tracking error, information ratio, benchmark drift
- APMI standards for Indian Cat III benchmarking (when available)
- **Include at least 3 calc questions** (tracking error, information ratio, relative return vs benchmark)
- **Mix:** 20% calc, 50% conceptual, 25% regulatory, 5% application

### Topic 9: AIFM CIII Legal Documents and Negotiations (40 Qs) — Ch 9
- Trust Deed / LLP Deed / MoA-AoA
- Investment Management Agreement (IMA) — scope, fees, termination, indemnity
- Subscription (Investor Contribution) Agreement — rep/warranty, redemption rights, transfer restrictions
- Private Placement Memorandum (PPM) — SEBI template (since 2020), annual audit, merchant banker filing, material change 75% consent
- Wrapper structure, master-feeder legal docs
- Side letters, MFN clause, ECF (Excuse Clause Fund), redemption gates, lock-up clauses, soft/hard locks
- Support Services Agreements — **Prime Broker (PB Agreement), ISDA Master Agreement (for OTC derivatives), Custodian, Fund Administrator, RTA, Valuer, Auditor**
- Key-person clauses, removal of Manager (for-cause, no-fault divorce)
- Negotiation: fee step-down, carry split, HWM reset, redemption notice periods
- **Mix:** 0% calc, 50% conceptual, 45% regulatory, 5% application

### Topic 10: AIFM CIII Investment Strategies (60 Qs) — Ch 10
- **Long-only equity** (limited in Cat III — usually with leverage or derivatives overlay)
- **Long-short equity** (130/30, market-neutral, pair trades)
- **Market-neutral** (dollar-neutral, beta-neutral, sector-neutral)
- **Global macro** (discretionary, systematic; directional bets on rates/FX/commodities)
- **Multi-strategy** (multiple sleeves under one fund; risk-budget allocation)
- **Managed futures / CTA** (trend-following, momentum, mean-reversion)
- **Arbitrage strategies:** merger arbitrage, convertible arbitrage, statistical arbitrage (stat arb), fixed-income arbitrage, capital structure arbitrage, pairs trading
- **Event-driven** (distressed debt in Cat III context, special situations, spin-offs, activists)
- **Relative value** (credit RV, rates RV, vol RV)
- Leverage in Cat III — max 2x (SEBI cap), use of derivatives, margin, securities lending
- Asset allocation / sleeve construction for Cat III
- **Exclude Cat I/II PE/VC strategies (buyout, growth equity, distressed PE, secondaries, seed/Series-A VC, mezzanine, venture debt, infra, SME, SVF, SSF)** — these are XIX-D territory; mention only in Cross-Exam Context
- **Mix:** 15% calc (beta-neutral hedging math, arb spread P&L, leverage-adjusted return, margin call threshold), 55% conceptual, 20% regulatory, 10% application
- **At least 9 calc questions** (merger-arb spread, stat-arb z-score threshold, 130/30 leverage, margin call with 2x cap, vol arb payoff)

### Topic 11: AIFM CIII Governance and Due Diligence (35 Qs) — Ch 11
- **Investor Due Diligence from Manager side** — operational DD, investment DD, tax/legal DD
- Definitive agreements — **ISDA Master Agreement (CSA), PB Agreement, subscription/redemption docs**
- Regulation on Governance Structure (IC composition, resident-Indian member, 75% external-member consent, recusal)
- Role of Human Capital in Avoiding Conflicts (KMPs, Chinese walls, personal-trading policies, front-running controls)
- Co-investments (less common in Cat III than Cat I/II, but emerging for large single-name trades)
- Code of Conduct of Investment Managers + IC (SEBI Fourth Schedule)
- Industry best practices (AIMA for hedge funds, SEBI Stewardship Code)
- **Mix:** 5% calc, 55% conceptual, 35% regulatory, 5% application

### Topic 12: AIFM CIII Valuation (50 Qs) — Ch 12
- Valuation basics — fixed income (YTM, clean/dirty, accrued interest)
- Equity valuation approaches — intrinsic, relative, asset-based
- Business valuation approaches
- Asset-based valuation (NAV method)
- DCF — FCFF/FCFE, WACC, terminal value (Gordon growth, exit multiple) — less central to Cat III daily NAV but tested
- Relative / multiple-based (P/E, P/B, EV/EBITDA, EV/Revenue)
- **Daily NAV computation for Cat III — CRITICAL:** subscription/redemption valuation, cut-off times, **series-of-units methodology, equalisation credit/debit, side-pocket accounting**
- **Valuation of derivatives (options, futures, swaps) — mark-to-market from exchange; OTC from broker quotes or model pricing**
- Valuation of illiquid positions (side pockets) within Cat III
- Valuation Regulations — SEBI requirement, **Reg 23 two-valuer rotation, Sep-2024 amendment to eligibility criteria (APMI-empanelled, Registered Valuer under IBBI/Companies Act 2013 Sec 247)**
- Role of third-party Registered Valuers
- **Include at least 12 calc questions** (equalisation credit with HWM, series-of-units NAV per class, mark-to-model OTC derivative, side-pocket residual NAV, DCF with WACC, EV → Equity bridge)
- **Mix:** 25% calc, 50% conceptual, 20% regulatory, 5% application

### Topic 13: AIFM CIII Fund Monitoring Reporting and Exit (50 Qs) — Ch 13
- Context and scope of fund monitoring for Cat III (daily P&L attribution, **real-time leverage monitoring, VaR limits, stress tests**)
- Regulatory framework for fund monitoring + reporting (SEBI quarterly T+10, annual audited, Form AIF-1 / AIF-2, material PPM change 75% investor consent, Cat III reports higher frequency)
- Fund reporting to LPs (monthly NAV statements, quarterly letters, annual audited — Cat III is higher frequency than Cat I/II)
- **Cat III CTR (Common Terminology Rules) framework** — standardised risk/performance metrics
- Exit options: **redemption in open-ended Cat III (with lock-up, notice period, gates, side-pocketing of illiquid residuals)**, secondary sale, winding-up 75% threshold
- Winding up of AIF — tenure expiry (for close-ended Cat III), unanimous LP decision, regulatory direction; 75% threshold (by value)
- Liquidation Period (Reg 29(9A)) — up to 1 year, with up to 1-year extension
- Dissolution Period — further extension with 2/3 by value consent
- In-specie distributions (rare in Cat III), side pocket crystallisation
- **Include at least 7 calc questions** (redemption NAV with soft/hard lock, gating pro-rata, side-pocket NAV split, high-watermark refresh on redemption)
- **Mix:** 15% calc, 50% conceptual, 30% regulatory, 5% application

### Topic 14: AIFM CIII Taxation (25 Qs) — Ch 14
- **Cat III taxation at FUND LEVEL — CRITICAL difference from Cat I/II:**
  - **Section 115UB NOT applicable to Cat III** — no pass-through
  - **Cat III fund taxed as AOP (Association of Persons) at MMR (Maximum Marginal Rate — ~42.7% with surcharge + cess for individuals-MMR base)**
  - Alternatively taxed as Determinate Trust at beneficiary level (rare)
- **Capital gains post-Budget 2024 at fund level:** equity-oriented LTCG 12.5% over INR 1.25 lakh; unlisted LTCG 12.5% (>24m); STCG 20% listed, slab for unlisted
- **Section 194LBB TDS NOT applicable for Cat III** (no pass-through)
- **Section 9A safe harbour** (may apply to offshore Cat III fund managers in India)
- Surcharge: 15% cap on LTCG/STCG surcharge
- **AMT vs MAT for Cat III fund** — depending on vehicle (trust vs LLP vs company)
- Set-off and carry forward of losses (within fund, not at LP level)
- GAAR, MLI (PPT, LOB)
- GST 18% on management fees (borne by fund/LPs)
- **IFSC-GIFT tax benefits for Cat III in IFSC** — 100% tax holiday under Section 80LA, no GST on mgmt fees from NR; this makes IFSC a material structuring choice
- **Compare with Cat I/II Section 115UB pass-through** — use only in Cross-Exam Context for contrast
- **Include at least 6 calc questions** (fund-level MMR tax computation, STCG 20% with surcharge, LTCG 12.5% with exemption, IFSC 80LA benefit vs domestic Cat III AMT)
- **Mix:** 25% calc, 40% conceptual, 30% regulatory, 5% application

### Topic 15: AIFM CIII Regulatory Framework (30 Qs) — Ch 15
- **SEBI (AIF) Regulations 2012:**
  - Reg 3 registration, Reg 4 eligibility
  - **Reg 10 sponsor commit for Cat III: 5% of corpus or INR 10 cr whichever lower (note: higher than Cat I/II's 2.5% / INR 5 cr)**
  - **Reg 13 open-ended OR close-ended permitted for Cat III (Cat I/II must be close-ended)**
  - **Reg 15 investment conditions: 10% single-investee for Cat III open-ended; 25% for close-ended; 2x leverage cap (Cat I/II zero leverage)**
  - Reg 18 general obligations, Reg 20A Code of Conduct, Reg 23 valuation (daily NAV for Cat III open-ended), Reg 29 wind-up
- Accredited Investor framework (2023) — individual ≥ INR 2 cr income / ≥ INR 1 cr NW, body-corporate ≥ INR 50 cr NW; LVF (Large Value Fund for AI) relaxations
- First Close, Final Close, tenure (Cat III can be open-ended; close-ended ≥3 yrs with 2-yr extension on 2/3 LP consent)
- Investors' subscription rules, raising corpus capital
- General obligations — reporting, disclosures, periodic filings
- **FEMA 1999** — FDI routes, overseas investments by AIFs (USD 1,500 mn cumulative cap), foreign investment in AIFs (residency requirement, Oct 2024 land-border amendment), FPI regime interaction — especially relevant for Cat III which may run global strategies
- **PMLA 2002** — CTR (annual, INR 10 lakh), STR, UBO thresholds, KYC, PEP, record retention (5 yrs)
- **SEBI (PIT) Regulations 2015** — insider trading, UPSI, structured digital database — especially relevant for Cat III equity long-short managers
- **SEBI (PFUTP) Regulations 2003** — market manipulation, front-running, prohibition on fraudulent/unfair trade practices
- **SEBI (ICDR) 2018** — lock-ins for pre-IPO sellers
- **SEBI (FPI) Regulations 2019** — FPI categorisation, Cat III AIF may register as FPI for overseas investment
- **FATCA + CRS** — reporting under Rule 114F-H
- **CSCRF 2024** — Cyber Security & Cyber Resilience Framework — 6-hour CERT-In incident reporting
- **DPDPA 2023** — Digital Personal Data Protection Act
- Fifth Amendment (2024) — pro-rata/pari-passu + AIF Migration framework
- **Include at least 3 calc questions** (sponsor commitment Cat III against corpus, 10%/25% single-investee concentration, 2x leverage limit)
- **Mix:** 5% calc, 25% conceptual, 65% regulatory, 5% application

---

## Execution Rules (same as Phase 14D-1 and 14D-2)

1. **ALWAYS read the PDF chapter before generating questions** via `import fitz` (PyMuPDF). Extract chapter text to `/tmp/xixe_gen/pdf_text/chNN_*.txt`.
2. **Use the proven helper pattern** — copy `/tmp/xixd_gen/helper.py` to `/tmp/xixe_gen/helper.py` and import from Python scripts at `/tmp/xixe_gen/topicNN.py`. Helper signature unchanged:
   ```python
   build_xml(topic_key, idx, question_text, options_list_of_4, correct_idx_0_to_3, logic, trap, cross_exam, pro_tip)
   ```
   Helper validates each XML via `xml.etree.ElementTree` before writing.
3. **XML format** (helper output):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="AIFM CIII <Topic>_<N>" sectionNumber="" articleNumber="0" articleName="">
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
4. **Parallel generation via subagents** — launch 15 agents (one per topic) in parallel. Phase 14D-2 wall-time with 13 agents: ~10 minutes.
5. **Shared `AGENT_INSTRUCTIONS.md`** — write a topic-agnostic contract file at `/tmp/xixe_gen/AGENT_INSTRUCTIONS.md` using Phase 14D-2's `/tmp/xixd_gen/AGENT_INSTRUCTIONS.md` as template, changing: exam name (XIX-E), topic-key prefix (`AIFM CIII `), **Cat I/II exclusion reminder (INVERSE of XIX-D's Cat III exclusion)**.
6. **Tone constraint:** AIF MANAGER perspective (Cat III hedge-fund desk). Explanation sign-off is literally **"Manager's Pro-Tip:"** — never "Distributor's Pro-Tip:".
7. **Cat I/II exclusion:** All 15 topics must be framed from a Cat III Manager desk. Cat I/II PE/VC/Debt/Infra content may appear only in the `Cross-Exam Context` field for comparison. If a calc question involves drawdown/capital-call mechanics or PE waterfall with 100% catch-up, **move it to XIX-D territory** — replace with Cat III-native calc (HWM crystallisation, VaR, equalisation, leverage math, merger-arb spread).
8. **Indian names + INR amounts** in all scenario-based questions. Suggested Cat III fund names: `Himalaya Arbitrage Fund`, `Aravalli Long-Short Fund`, `Satpura Market-Neutral Fund`, `Nilgiri Multi-Strategy Fund`, `Kaveri Macro Fund`, `Vindhya Event-Driven Fund`, `Sahyadri Stat-Arb Fund`.
9. **4 options, exactly 1 correct** per question. **Randomize correct-answer position across each topic's batch** — target ~25% per option, hard limit 40%.
10. **Overlap with XIX-B, XIX-C, XIX-D:**
    - XIX-B (Cat III Distributor) — sells Cat III; XIX-E builds/runs the Cat III fund. Reframe from Manager desk.
    - XIX-C (All-Cat Manager) — covers both tracks; XIX-E is narrower Cat III-only.
    - XIX-D (Cat I/II Manager) — Cat I/II only; XIX-E is the Cat III-only counterpart. Different scenarios, different strategies.
    - Use `Cross-Exam Context` field to flag "Same concept tested broader in XIX-C" or "Inverse tested for Cat I/II in XIX-D".

---

## Cross-Exam Overlap Matrix

| Other exam | Overlapping topics | How XIX-E differentiates |
|-----------|-------------------|--------------------------|
| XIX-B (Cat III Distributor) | All topics except 14, 15 | Distributor sells; XIX-E builds/runs the fund. Reframe from Manager desk. |
| XIX-C (All-Cat Manager) | All topics | XIX-C unifies Cat I/II+Cat III; XIX-E is Cat III-only. Different scenarios. |
| XIX-D (Cat I/II Manager, Phase 14D-2) | Topics 1-9, 11-13, 15 | XIX-E flips the Cat-focus — Cat I/II content only for cross-ref. |
| XXI-B (Portfolio Manager) | Topics 3 (MPT/CMT), 7 (Performance), 8 (Indices), 11 (Governance) | XXI-B is listed-securities PM; XIX-E is Cat III hedge fund. |
| XXIV (AML) | Topic 15 (Regulatory — PMLA portion) | XIX-E covers AIF-specific AML for Cat III. |
| III-A / III-C (Compliance) | Topic 15 | XIX-E focuses on Cat III AIF compliance. |
| VIII (Equity Derivatives) | Topic 10 (Investment Strategies — derivatives overlay) | XIX-E frames derivatives as Cat III portfolio tools, not as tradeable instruments. |
| XV (Research Analyst) | Topic 3 (MPT/CMT), Topic 12 (Valuation) | XV is sell-side; XIX-E is buy-side Cat III. |
| X-A / X-B (Investment Adviser) | Topic 14 (Taxation) | XIX-E tests Cat III fund-level MMR specifically (Cat III doesn't get Section 115UB pass-through). |

**All XIX-C "AIFM …" and XIX-D "AIFM CII …" keys remain untouched.** XIX-E uses a distinct `AIFM CIII ` prefix.

---

## After-Completion Checklist

1. Verify file count per topic matches targets (total = 500) — `ls "OriginalQuestions/{TOPIC_KEY}_"*.xml | wc -l` for each.
2. Run XML validation (4 answers, 1 correct, 4-section explanation with CDATA wrapping, "Manager's Pro-Tip:" label).
3. Spot-check 2-3 questions per topic for factual accuracy against the PDF.
4. Update plists:
   - **ExamWeightages.plist** — REPLACE existing XIX-E placeholder topics with the 15 "AIFM CIII …" keys. Use marks from PDF page 15 summing to 100. Verify the extraction — the Ch 1/2 boundary is ambiguous in extraction.
   - **Topics.plist** — add 15 topics with full question-ID arrays.
   - **TopicsLite.plist** — mirror Topics.plist for new keys.
   - **ChapterArticles.plist** — add 15 entries each with `{"All Topics": "1"}`.
   - **QuestionToArticleNumber.plist** — add all 500 question IDs mapped to `1`.
5. Validate plists: `plutil -lint ExamWeightages.plist Topics.plist TopicsLite.plist ChapterArticles.plist QuestionToArticleNumber.plist` — all must return `OK`.
6. Sanity check: `sum(len(v) for v in Topics.plist.values())` should equal total XML files in `OriginalQuestions/`.
7. **Do NOT delete any existing files on disk.** V-A's 30 `Taxation_*.xml` files must remain intact. AIFM and AIFM CII files from earlier phases must remain intact.
8. Update `HANDOFF.md`:
   - Bump date and status: "30 of 31 exams complete. 12,893 questions, 313 topics."
   - Add row to the "Completed Exams" table for XIX-E.
   - Add a "Series XIX-E Breakdown (Phase 14D-3)" section with the 15-topic table.
9. Git commit: `"Add Phase 14D-3 — Series XIX-E AIF Managers (Category III) exam (500 questions)"`.

---

## Helper Module Pattern (proven in Phase 14D-1 and 14D-2)

```python
# /tmp/xixe_gen/helper.py (identical to /tmp/xixd_gen/helper.py)
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

## Parallel Agent Dispatch Plan

Launch 15 agents in parallel, one per topic. Phase 14D-2 precedent: 13 agents completed in one batch in ~12 minutes wall time.

**Agent launch order (largest first — but all in a single parallel batch):**
1. Topic 10 — Investment Strategies (60 Qs, Ch 10) — LARGEST
2. Topic 7 — Fee Structure and Fund Performance (50 Qs, Ch 7) — LARGEST CHAPTER (64 pages)
3. Topic 6 — Fund Structuring (50 Qs, Ch 6)
4. Topic 9 — Legal Documents (40 Qs, Ch 9)
5. Topic 12 — Valuation (50 Qs, Ch 12)
6. Topic 13 — Fund Monitoring Reporting Exit (50 Qs, Ch 13)
7. Topic 11 — Governance and Due Diligence (35 Qs, Ch 11)
8. Topic 15 — Regulatory Framework (30 Qs, Ch 15) — LARGEST CHAPTER
9. Topic 5 — Ecosystem (25 Qs, Ch 5)
10. Topic 14 — Taxation (25 Qs, Ch 14)
11. Topic 8 — Indices and Benchmarking (20 Qs, Ch 8)
12. Topic 3 — MPT/CMT (20 Qs, Ch 3)
13. Topic 1 — Investment Landscape (15 Qs, Ch 1)
14. Topic 2 — Types of Investments (15 Qs, Ch 2)
15. Topic 4 — AIFs in India and Suitability (15 Qs, Ch 4)

Each agent prompt must include: (a) topic key, (b) question count, (c) chapter text file path, (d) difficulty mix percentages, (e) **Cat I/II exclusion reminder** (inverse of XIX-D's Cat III exclusion), (f) helper import path, (g) output verification command.

Expected wall-time: ~10-15 minutes.

---

## Grand Total After Phase 14D-3

| Metric | Before | After |
|--------|:------:|:-----:|
| Exams | 29 | 30 |
| Questions | 12,393 | 12,893 |
| Topics | 298 | 313 |

**Only 1 exam remains after Phase 14D-3:**
- **Phase 15:** Series XXIII — Social Impact Assessors Certification Examination (500 Qs, ~7 topics). PDF: look under `study material/` for XXIII. Entirely new content (SSE framework, SROI, theory of change, impact measurement). No prior art to reuse.

After Phase 15 completes, the NISM Question Bank will have full coverage of all 31 NISM certification exams.

---

## Namespace Summary (after Phase 14D-3 completes)

| Exam | Code | Prefix | Topics |
|------|:----:|:------:|:------:|
| Mutual Fund Distributor | V-A | (none, uses raw topic names incl. "Taxation") | 12 |
| AIF Distributor Cat I/II | XIX-A | `AIF ` | 10 |
| AIF Distributor Cat III | XIX-B | `Cat III AIF ` | 10 |
| AIF Manager All Cat | XIX-C | `AIFM ` | 15 |
| AIF Manager Cat I/II | XIX-D | `AIFM CII ` | 13 |
| **AIF Manager Cat III** | **XIX-E** | **`AIFM CIII `** | **15** |
| PMS Distributor | XXI-A | `PMS ` | 12 |
| Portfolio Manager | XXI-B | `PM ` | 21 |

---

## Key Differences from Phase 14D-2 (XIX-D)

| Dimension | XIX-D (Phase 14D-2 — done) | XIX-E (Phase 14D-3 — this session) |
|-----------|-----------------------------|-------------------------------------|
| Chapters | 13 (Ch 1+2 combined) | 15 (all chapters separate) |
| Additional topics vs XIX-D | — | MPT/CMT (Ch 3), Indices and Benchmarking (Ch 8) |
| Prefix | `AIFM CII ` | `AIFM CIII ` |
| Scope focus | PE, VC, Debt, Infra, SME, SVF, SSF | Long-short, market-neutral, global macro, multi-strategy, arbitrage, event-driven, CTA |
| Sponsor commit | 2.5% / INR 5 cr whichever lower | **5% / INR 10 cr whichever lower** |
| Open/close-ended | **Must be close-ended ≥ 3 yrs** | **Open-ended PERMITTED** |
| Leverage | Zero | **Up to 2x** |
| Fee base | Committed → Invested capital | **NAV (daily valuation)** |
| Fund performance emphasis | IRR, MOIC, TVPI, DPI, RVPI, KS-PME | **TWR, MWR, annualised, HWM, VaR, CVaR, Sharpe, Sortino, Calmar, drawdown** |
| HWM | NOT applicable (Cross-Exam Context only) | **CRITICAL primary topic** |
| Valuation frequency | Quarterly/semi-annual | **Daily NAV + series-of-units + equalisation + side pockets** |
| Taxation | **Section 115UB pass-through** | **Fund-level MMR (AOP); 115UB NOT applicable** |
| Concentration limit | 25% single-investee (LVF 50%) | **10% open-ended, 25% close-ended** |
| 194LBB TDS | Applies (10% / DTAA) | **NOT applicable** (fund-level tax) |
| Prime Broker | Not in ecosystem (Cross-Exam Context only) | **Central ecosystem role** |
| Caselets | None in bank | **Recommended: 10-12 caselets** (50-60 Qs) since actual exam has 4 caselets |
| Excluded as primary | Cat III content | Cat I/II PE/VC/Debt/Infra content |

---

## Phase 14D-1/14D-2 Lessons to Carry Forward

1. **Don't bulk-delete placeholder files** based on topic-key match. Check which exam actually owns each file first. V-A's 30 Taxation_*.xml files must remain untouched.
2. **Parallel subagents are fast.** 500 questions across 13-15 topics took ~10-12 minutes wall time. Expect similar throughput here.
3. **Extract PDF chapters to `/tmp/xixe_gen/pdf_text/*.txt` upfront** — lets each agent read only its chapter without re-loading the PDF.
4. **Shared `AGENT_INSTRUCTIONS.md` file** — reduces per-agent prompt length and ensures every agent applies the same rules (tone, helper usage, CDATA, 4-section explanation).
5. **Randomize correct-answer position** — ask each agent to report A/B/C/D distribution in its final summary. Phase 14D-2 achieved ~25% per option across all 13 topics.
6. **Validate plists with `plutil -lint`** after every bulk update, not just at the end.
7. **Commit with file glob that starts with `"AIFM CIII"`** (the chosen prefix) to avoid accidentally picking up files from other exams.
8. **If an agent reports clustering (>40% on one option), the agent can self-rebalance** via a letter-swap — Phase 14D-2 agents 5, 8, 10, 11 did this successfully. Ensure agents also remap "Option X" letter references in trap text after swapping.
9. **Verify PDF chapter weightage table before writing ExamWeightages.plist** — for XIX-E, the page-15 table had ambiguous extraction (Ch 2 marks blurred). Re-extract and confirm marks sum to exactly 100.
10. **Cat III content depth:** This is a Manager exam — questions should test execution-level knowledge (how a merger-arb Manager sizes a position with 2x leverage cap, how HWM crystallises when a fund takes a 3% drawdown then recovers, how equalisation credits protect new investors, how daily NAV is computed during a suspension event). NOT retail-level Cat III definitions.
