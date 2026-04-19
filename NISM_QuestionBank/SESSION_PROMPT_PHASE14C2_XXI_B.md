# Session Prompt for Phase 14C-2 — Series XXI-B: Portfolio Managers

**Date created:** April 19, 2026
**Pre-requisite:** Read HANDOFF.md first. 26 exams complete (10,893 questions). Phase 14C-1 (XXI-A PMS Distributors) done. This session tackles XXI-B only — the **Portfolio Managers** (manager-side, not distributor) exam.

---

## Exam Overview

| Parameter | Value |
|-----------|-------|
| **Exam name** | NISM-Series-XXI-B: Portfolio Managers Certification Examination |
| **Exam code** | XXI-B |
| **Questions to generate** | 500 |
| **Topics** | 21 (one per syllabus unit / chapter) |
| **PDF** | `NISM-Series-XXI-B Portfolio Managers Certification Examination -Sep 2025.pdf` (404 pages) |
| **PDF location** | `/Users/shivam/aiworkspace/nismresearch/study material/` |
| **Actual exam** | 150 marks across 21 units (NISM standard scoring); typically 100 questions, 2 hours, 60% pass |
| **Negative marking** | **25%** (standard — unlike the 10% carve-out for PMS Distributors / AIF Distributors) |
| **Caselets** | None |
| **Question bank dir** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` |
| **PDF reader** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages — poppler not installed |
| **Difficulty** | **Hard** — this is a Portfolio Manager (not Distributor) exam with deep strategy, MPT, CMT, risk, and performance content |

---

## Syllabus Units and Weightages (from PDF page 14)

| Unit # | Unit Name | Marks | Approx Page Range |
|:-----:|-----------|:----:|:-----------------:|
| 1 | Investment Landscape | 3 | 16-35 |
| 2 | Introduction to Securities Markets | 2 | 36-46 |
| 3 | Investing in Stocks | 5 | 47-65 |
| 4 | Investing in Fixed Income Securities | 5 | 66-85 |
| 5 | Derivatives | 5 | 86-109 |
| 6 | Mutual Funds | 5 | 110-123 |
| 7 | Role of Portfolio Managers | 10 | 124-132 |
| 8 | Operational Aspects of Portfolio Managers | 10 | 133-152 |
| 9 | Portfolio Management Process | 10 | 153-177 |
| 10 | Taxation | 5 | 178-192 |
| 11 | Regulatory, Governance and Ethical Aspects | 10 | 193-212 |
| 12 | Introduction to Indices | 5 | 213-230 |
| 13 | Concept of Informational Efficiency | 5 | 231-240 |
| 14 | Behavioural Finance | 5 | 241-249 |
| 15 | Introduction to Modern Portfolio Theory (MPT) | 5 | 250-263 |
| 16 | Introduction to Capital Market Theory (CMT) | 5 | 264-280 |
| 17 | Risk | 10 | 281-305 |
| 18 | Equity Portfolio Management Strategies | 15 | 306-333 |
| 19 | Fixed Income Portfolio Management Strategies | 15 | 334-354 |
| 20 | Performance Measurement and Evaluation | 10 | 355-390 |
| 21 | Portfolio Rebalancing | 5 | 391-398 |
| | **Total** | **150** | |

---

## Topic Plan — 21 Topics, 500 Questions

Map each syllabus unit directly to one plist topic. Use the naming prefix **"PM XXI-B"** (or reuse existing XXI-A "PMS" keys ONLY where content IS identical — see below). Recommended fresh keys to avoid mixing with XXI-A:

| # | Topic Name (exact plist key) | Unit | Qs | Rationale |
|---|------------------------------|:----:|:--:|-----------|
| 1 | PM Investment Landscape | 1 | 10 | Savings vs investment, objectives, risks, channels (3 marks) |
| 2 | PM Securities Markets | 2 | 10 | Primary/secondary market, intermediaries (2 marks) |
| 3 | PM Equity Investing | 3 | 20 | Equity risk, diversification, EIC, intrinsic value, TA (5 marks) |
| 4 | PM Fixed Income Investing | 4 | 20 | Bond features, ratings, duration, convexity, valuation (5 marks) |
| 5 | PM Derivatives | 5 | 20 | Futures, options, margin; PM-specific derivative use (5 marks) |
| 6 | PM Mutual Funds | 6 | 20 | MF structure, NAV, TER, performance measures (5 marks) |
| 7 | PM Role of Portfolio Managers | 7 | 30 | PMS types, org structure, registration, responsibilities (10 marks) |
| 8 | PM Operational Aspects | 8 | 30 | Disclosure Doc, onboarding, MITC, fees, HWM, hurdle, reporting (10 marks) |
| 9 | PM Portfolio Management Process | 9 | 30 | IPS, risk profiling, asset allocation, SAA/TAA, factor investing, rebalancing (10 marks) |
| 10 | PM Taxation | 10 | 15 | Taxation of investors, streams of income, Section 9A ITA (5 marks) |
| 11 | PM Regulatory and Governance | 11 | 30 | PMLA, PIT 2015, PFUTP 2003, SEBI PM Regs 2020, Best Practices, Investor Charter (10 marks) |
| 12 | PM Introduction to Indices | 12 | 15 | Index definition, uses, construction, free-float vs full-MCap (5 marks) |
| 13 | PM Informational Efficiency | 13 | 15 | EMH forms — weak/semi-strong/strong; implications for active mgmt (5 marks) |
| 14 | PM Behavioural Finance | 14 | 15 | Biases (anchoring, herding, loss aversion, overconfidence), market anomalies (5 marks) |
| 15 | PM Modern Portfolio Theory | 15 | 20 | Efficient frontier, risk-return, covariance, portfolio variance, optimization (5 marks) |
| 16 | PM Capital Market Theory | 16 | 20 | CML, market portfolio, SML, CAPM, beta, systematic/unsystematic (5 marks) |
| 17 | PM Risk | 17 | 30 | VaR, CVaR, drawdown, stress testing, scenario analysis, liquidity risk (10 marks) |
| 18 | PM Equity Portfolio Strategies | 18 | 50 | Passive/active, momentum, style mgmt, SRI, core-satellite, alpha-beta separation, derivatives overlay, global active (15 marks — LARGEST) |
| 19 | PM Fixed Income Portfolio Strategies | 19 | 50 | Passive (indexing, immunization, cash-flow matching), active (rate anticipation, yield curve), global FI, FI derivatives, protection (15 marks — LARGEST) |
| 20 | PM Performance Measurement | 20 | 30 | Return measures, risk-adjusted (Sharpe/Treynor/Jensen/Sortino/IR), attribution, benchmarking, valuation, manager DD (10 marks) |
| 21 | PM Portfolio Rebalancing | 21 | 20 | Time-based vs threshold-based, costs, tax efficiency, re-optimization triggers (5 marks) |
| | **Total** | | **500** | |

---

## Key Content Areas to Cover per Topic

### Topic 1: PM Investment Landscape (10 Qs) — Unit 1
- Investment vs savings vs speculation; risk-return trade-off
- Investment objectives (capital appreciation, income, preservation, liquidity, tax efficiency)
- Types of risks (market, credit, liquidity, currency, inflation, interest rate, reinvestment, business)
- Channels: direct, MFs, PMS, AIFs
- **Mix:** 10% calc, 60% conceptual, 10% regulatory, 20% application

### Topic 2: PM Securities Markets (10 Qs) — Unit 2
- Primary vs secondary market; IPO/FPO/OFS/rights/private placement
- Participants (investors, issuers, intermediaries, regulators)
- Roles (broker, RTA, depository, custodian, MB, exchange, CC)
- **Mix:** 0% calc, 60% conceptual, 30% regulatory, 10% application

### Topic 3: PM Equity Investing (20 Qs) — Unit 3
- Equity as asset class, risks, diversification
- EIC framework, Porter's Five Forces, top-down vs bottom-up
- Valuation: DCF (DDM/FCFF/FCFE), relative (P/E, P/B, PEG, EV/EBITDA, P/S)
- Technical analysis basics
- **Include at least 5 calc questions** on DDM, P/E, CAPM
- **Mix:** 25% calc, 45% conceptual, 10% regulatory, 20% application

### Topic 4: PM Fixed Income Investing (20 Qs) — Unit 4
- Bond features (coupon, YTM, callable, putable, convertible)
- Credit ratings, credit spread
- Valuation (PV of cash flows), duration, modified duration, convexity
- Price-yield relationship
- **Include at least 5 calc questions** on bond pricing, duration, YTM
- **Mix:** 30% calc, 45% conceptual, 10% regulatory, 15% application

### Topic 5: PM Derivatives (20 Qs) — Unit 5
- Futures, options, swaps
- Greeks (delta, gamma, theta, vega)
- PMS use of derivatives (hedging-focused; SEBI regulatory constraints)
- **Include at least 5 calc questions** on option payoffs, hedge ratios
- **Mix:** 30% calc, 50% conceptual, 10% regulatory, 10% application

### Topic 6: PM Mutual Funds (20 Qs) — Unit 6
- MF structure, legal form, Trustee/AMC/sponsor
- Types (equity, debt, hybrid, ELSS), open vs close-ended, active vs passive
- NAV, TER, pricing
- MF performance measures (Sharpe, Information Ratio, beta)
- **Mix:** 10% calc, 60% conceptual, 20% regulatory, 10% application

### Topic 7: PM Role of Portfolio Managers (30 Qs) — Unit 7
- Overview of PMS in India, regulatory body, net worth requirements
- Discretionary vs Non-discretionary vs Advisory
- Organizational structure (Principal Officer, Compliance Officer, Fund Managers, Dealers)
- **Registration requirements** (Reg 7-11 of PM Regs 2020 — deeper than XXI-A)
- General responsibilities (fiduciary, segregation, audit trail)
- **Mix:** 0% calc, 55% conceptual, 35% regulatory, 10% application

### Topic 8: PM Operational Aspects (30 Qs) — Unit 8
- Eligible investors, Accredited Investor carve-out
- Simplified Disclosure Document (Sep 09, 2025 circular)
- On-boarding, KYC, PAN, MITC (Oct 1, 2024)
- Direct on-boarding; Dealing-room controls; AUM >= Rs. 1,000 cr automated OMS rule
- Fees (no upfront, 0.50% op-exp cap, exit-load schedule 3/2/1)
- HWM, Hurdle rate, Performance reporting (TWRR + XIRR)
- Grievance redressal (21 calendar days), ODR / SMART ODR
- **Include at least 5 calc questions** on fee math, HWM, exit load
- **Mix:** 15% calc, 30% conceptual, 45% regulatory, 10% application

### Topic 9: PM Portfolio Management Process (30 Qs) — Unit 9
- IPS components, risk profiling, investment objectives
- Constraints (liquidity, tax, regulatory, unique needs, exposure limits)
- Goal-based planning; near-term/long-term/low-priority
- Benchmarking (Performance Benchmarking framework, IA -> Strategy/Benchmark tagging)
- Asset allocation: SAA vs TAA, factor-based investing, smart beta
- Rebalancing (touched here; deeper in Topic 21)
- **Include at least 5 calc questions** on portfolio return, rebalance math
- **Mix:** 20% calc, 50% conceptual, 15% regulatory, 15% application

### Topic 10: PM Taxation (15 Qs) — Unit 10
- Investor categories (individuals, HUF, NRI, firm, company, trust)
- Taxation streams: capital gains (STCG 20% / LTCG 12.5% above Rs. 1.25L post Jul 2024), interest (slab), dividend (slab), rental
- **Section 9A of ITA** (special rule for offshore fund managers — unique to XXI-B)
- Section 14A and PMS fee non-deductibility
- PIS for NRIs
- **Include at least 4 calc questions** on tax computation
- **Mix:** 25% calc, 35% conceptual, 30% regulatory, 10% application

### Topic 11: PM Regulatory and Governance (30 Qs) — Unit 11
- **PMLA 2002** — CTR thresholds (Rs. 10 lakh), STR (7 working days), record retention (5 yrs + 5 yrs post-relationship), Section 3 offence, Section 12 and 12AA
- **SEBI (PIT) Regulations 2015** — Schedule C, designated persons, pre-clearance, contra-trade (6 mo listed / 2 mo MF), material financial relationship (25%)
- **SEBI (PFUTP) Regulations 2003** — fraud definition, manipulative practices
- **SEBI (PM) Regulations 2020** — registration, investment approach, benchmarks, disclosures, related-party consent (Reg 22(1A), Aug 26, 2022)
- **Best Practices for Portfolio Managers** (NEW to XXI-B vs XXI-A Distributor Code)
- **Investor Charter for PMS**
- **Mix:** 5% calc, 35% conceptual, 55% regulatory, 5% application

### Topic 12: PM Introduction to Indices (15 Qs) — Unit 12
- Index definition, uses (benchmarking, product, economic indicator)
- Construction methods: price-weighted, market-cap weighted, equal-weighted
- Free-float vs full market cap; total return vs price return
- Index rebalancing rules
- Indian indices: NIFTY 50, Sensex, NIFTY Mid Cap, Bank NIFTY
- **Mix:** 10% calc, 60% conceptual, 20% regulatory, 10% application

### Topic 13: PM Informational Efficiency (15 Qs) — Unit 13
- Efficient Market Hypothesis (EMH): weak, semi-strong, strong forms
- Tests of efficiency (event studies, random walk, runs test)
- Implications for active vs passive management
- Market anomalies that challenge EMH (momentum, value, small-cap)
- **Mix:** 0% calc, 70% conceptual, 15% regulatory, 15% application

### Topic 14: PM Behavioural Finance (15 Qs) — Unit 14
- Key biases: anchoring, herding, loss aversion, overconfidence, confirmation, availability, framing, mental accounting, disposition effect
- Prospect theory (Kahneman-Tversky)
- Market anomalies explained by biases
- Implications for PM strategy and client advice
- **Mix:** 0% calc, 70% conceptual, 10% regulatory, 20% application

### Topic 15: PM Modern Portfolio Theory (20 Qs) — Unit 15
- Assumptions (risk averse, rational, utility maximization)
- Risk-averse vs risk-seeking vs risk-neutral investors
- Expected return and variance (ex-ante) for individual security and portfolio
- Covariance and correlation effect on portfolio variance
- Efficient frontier construction; portfolio optimization
- Estimation issues (input sensitivity)
- **Include at least 6 calc questions** on portfolio variance, covariance
- **Mix:** 35% calc, 50% conceptual, 5% regulatory, 10% application

### Topic 16: PM Capital Market Theory (20 Qs) — Unit 16
- Assumptions of CMT and impact of relaxing them
- Capital Market Line (CML)
- Market portfolio concept
- Extending CML; Security Market Line (SML)
- CAPM: re = Rf + beta*(Rm - Rf)
- Diversification of systematic vs unsystematic risk
- **Include at least 6 calc questions** on CAPM, CML, beta
- **Mix:** 35% calc, 50% conceptual, 5% regulatory, 10% application

### Topic 17: PM Risk (30 Qs) — Unit 17
- Total risk vs downside risk; semi-variance
- **Value-at-Risk (VaR)** — historical, parametric, Monte Carlo
- **Conditional VaR (CVaR) / Expected Shortfall**
- Drawdown, maximum drawdown
- Stress testing and scenario analysis
- Liquidity risk, operational risk, counterparty risk, currency risk
- Credit risk for debt portfolios
- **Include at least 8 calc questions** on VaR, drawdown, sigma
- **Mix:** 30% calc, 50% conceptual, 10% regulatory, 10% application

### Topic 18: PM Equity Portfolio Strategies (50 Qs) — Unit 18 (LARGEST)
Read Unit 18 carefully (pages 306-333):
- Passive strategies: indexing, ETF replication, sampling
- Active strategies: top-down, bottom-up, GARP
- Style management: growth, value, blend; small-cap vs large-cap
- **Momentum investing** (Sec 18.7)
- Investment management styles
- **Socially Responsible Investing (SRI) / ESG investing** (Sec 18.9)
- **Core-Satellite approach** (Sec 18.10) — core passive + satellite active/thematic
- **Alpha-Beta separation** (Sec 18.11)
- **Constructing equity portfolios with derivatives** (Sec 18.12)
- **Protecting portfolios with put options** (Sec 18.13)
- **Global Active Strategy** (Sec 18.14)
- **Include at least 12 calc questions** on portfolio construction, hedge ratios, alpha
- **Mix:** 25% calc, 45% conceptual, 10% regulatory, 20% application

### Topic 19: PM Fixed Income Portfolio Strategies (50 Qs) — Unit 19 (LARGEST)
Read Unit 19 carefully (pages 334-354):
- **Passive management** (Sec 19.2): pure bond indexing, enhanced indexing, **immunization**, **cash-flow matching**
- **Active management** (Sec 19.3): rate anticipation (duration timing), yield curve strategies (bullet/barbell/ladder), sector rotation, credit spreads, individual bond selection
- **Global fixed-income strategy** (Sec 19.4)
- **Constructing bond portfolio with derivatives** (Sec 19.5): futures, swaps, swaptions
- **Protecting portfolios with derivatives** (Sec 19.6): duration hedging with futures, credit default swaps
- **Include at least 12 calc questions** on duration, immunization, yield curve math, portfolio duration
- **Mix:** 30% calc, 45% conceptual, 10% regulatory, 15% application

### Topic 20: PM Performance Measurement (30 Qs) — Unit 20
- Return metrics: HPR, TWRR (geometric linking), XIRR, arithmetic vs geometric mean
- Gross vs net return; pre-tax vs post-tax
- Risk measures: sigma, downside deviation, beta
- **Risk-adjusted:** Sharpe, Treynor, Jensen's Alpha, Sortino, Information Ratio, M-Squared
- Benchmarking; customised benchmarks
- Performance attribution (Brinson-Hood-Beebower: allocation, selection, interaction)
- Valuation of securities by PM (APMI-empanelled agencies for debt/MM)
- Manager due diligence and selection
- **Include at least 10 calc questions** on Sharpe, Treynor, Jensen, attribution
- **Mix:** 35% calc, 40% conceptual, 10% regulatory, 15% application

### Topic 21: PM Portfolio Rebalancing (20 Qs) — Unit 21
- Need for rebalancing (drift, risk management, discipline)
- Time-based vs threshold-based vs mixed rebalancing
- Costs: transaction, tax, bid-ask spread, timing
- Tax-efficient rebalancing (use inflows, harvest losses)
- Rebalancing in volatile vs stable markets
- **Include at least 4 calc questions** on drift and rebalancing math
- **Mix:** 25% calc, 50% conceptual, 15% regulatory, 10% application

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
**Cross-Exam Context:** How this appears in other NISM exams (especially XXI-A for overlap).
**Manager's Pro-Tip:** Practical insight for portfolio managers (NOT distributors — this is the manager exam).]]></text></explanation>
    </question>
</QF>
```
4. **Validate after every batch** using `xml.etree.ElementTree`
5. **Indian names, INR amounts** in all scenario-based questions
6. **4 options, exactly 1 correct** per question
7. **Randomize correct answer position** across questions (don't cluster correct at option B)
8. **Tone:** This is the MANAGER exam, not Distributor — framing should speak to a PM's desk (risk management, portfolio construction, fiduciary duty), not a sales/commission frame

---

## CRITICAL: Overlap Management with XXI-A and Prior Exams

XXI-B overlaps significantly with XXI-A (Distributors) on Units 1-12, but XXI-B is the **manager-side** exam with deeper strategy content (Units 13-21 are largely unique). Strategies:

1. **Units 1-6 (Investment Landscape, Securities Markets, Stocks, FI, Derivatives, MFs):** Substantial overlap with XXI-A. For XXI-B, **reframe** questions from the Portfolio Manager's perspective:
   - Not "How does a distributor position this?" but "How does a PM implement/evaluate this in a client portfolio?"
   - Deeper quantitative content (e.g., DCF calcs, CAPM, bond math) for XXI-B vs conceptual-only for XXI-A
   - Use different specific scenarios, names, and numbers to avoid verbatim repetition

2. **Unit 7 (Role of PMs):** Overlap with XXI-A Topic 7. For XXI-B, add:
   - Registration requirements (Reg 7-11), net worth Rs. 5 crore
   - Detailed org chart requirements
   - PM's fiduciary responsibilities (deeper than Distributor)

3. **Unit 8 (Operational Aspects):** Overlap with XXI-A Topic 8. Both cover DD, MITC, fees, HWM. For XXI-B, emphasize PM-side implementation (OMS, audit trail, segregation ops) vs Distributor-side disclosure/MITC sharing.

4. **Unit 9 (Portfolio Management Process):** Overlap with XXI-A Topic 9. For XXI-B, deepen quantitative content and include more sophisticated allocation frameworks.

5. **Unit 10 (Taxation):** Overlap with XXI-A Topic 11. **NEW for XXI-B: Section 9A of ITA** (offshore fund manager safe harbour).

6. **Unit 11 (Regulatory):** Overlap with XXI-A Topic 12 (PMLA, PIT, PFUTP, PM Regs, Investor Charter). **NEW for XXI-B: Best Practices for Portfolio Managers** (distinct from Distributor Code of Conduct).

7. **Units 12-21 are LARGELY UNIQUE to XXI-B (no significant XXI-A overlap):**
   - Indices construction (price/MCap/equal weighted; free float)
   - Informational Efficiency (EMH forms)
   - Behavioural Finance (biases, prospect theory)
   - MPT (efficient frontier, portfolio variance)
   - CMT (CML, SML, CAPM derivation)
   - Risk (VaR, CVaR, stress testing)
   - Equity Strategies (core-satellite, alpha-beta, derivative overlays)
   - FI Strategies (immunization, cash-flow matching, rate anticipation)
   - Performance (deeper attribution, M-Squared, Info Ratio)
   - Rebalancing (mechanics, cost-benefit)

   **These units require ORIGINAL, unique questions — no overlap material exists.**

8. **Other cross-exam overlaps to manage:**
   - XV (Research Analyst): Ch 3 stock valuation, Ch 17 risk
   - VIII (Equity Derivatives): Ch 5 derivatives, Ch 18 equity strategies
   - IV (IRD): Ch 4 FI, Ch 19 FI strategies
   - V-A (MF Distributors): Ch 6 MFs
   - XXIV (AML): Ch 11 PMLA
   - III-A/C (Compliance): Ch 11 regulatory

   Use NEW scenarios/names/numbers; reference these other exams in Cross-Exam Context field.

---

## After Completion Checklist

1. Count files per topic — must match targets (total = 500)
2. Run XML validation (4 answers, 1 correct, explanation with 4 sections, CDATA wrapping)
3. Spot-check 2-3 questions per topic for factual accuracy against PDF
4. Update plists:
   - **ExamWeightages.plist** — check if "Series XXI-B - Portfolio Managers" already exists as placeholder (it does, per XXI-A session). **REPLACE** placeholder topics with correct XXI-B topic names matching this prompt. Use marks (3, 2, 5, …) as weightages.
   - **Topics.plist** — add all 21 topics with question ID arrays
   - **TopicsLite.plist** — same as Topics.plist
   - **ChapterArticles.plist** — add all 21 topics with "All Topics": "1"
   - **QuestionToArticleNumber.plist** — add all 500 question IDs mapped to "1"
5. Validate all plists with `plutil -lint`
6. Update HANDOFF.md:
   - Mark XXI-B complete
   - Update running totals to **27 exams, 11,393 questions, 270 topics**
   - Add XXI-B topic breakdown table
7. Git commit with descriptive message: "Add Phase 14C-2 — Series XXI-B Portfolio Managers exam (500 questions)"

---

## ExamWeightages Values for XXI-B

Use these exact topic names and marks (representing syllabus weightages from the PDF — total 150 marks):

```
"Series XXI-B - Portfolio Managers": {
    "examCode": "XXI-B",
    "topics": {
        "PM Investment Landscape": 3,
        "PM Securities Markets": 2,
        "PM Equity Investing": 5,
        "PM Fixed Income Investing": 5,
        "PM Derivatives": 5,
        "PM Mutual Funds": 5,
        "PM Role of Portfolio Managers": 10,
        "PM Operational Aspects": 10,
        "PM Portfolio Management Process": 10,
        "PM Taxation": 5,
        "PM Regulatory and Governance": 10,
        "PM Introduction to Indices": 5,
        "PM Informational Efficiency": 5,
        "PM Behavioural Finance": 5,
        "PM Modern Portfolio Theory": 5,
        "PM Capital Market Theory": 5,
        "PM Risk": 10,
        "PM Equity Portfolio Strategies": 15,
        "PM Fixed Income Portfolio Strategies": 15,
        "PM Performance Measurement": 10,
        "PM Portfolio Rebalancing": 5
    }
}
```

**Note on distinct topic names:** Using the "PM " prefix (not "PMS ") keeps XXI-B topics distinct from XXI-A topics in the plist, even though some content overlaps. This is critical — **DO NOT reuse XXI-A "PMS …" plist keys**, or the distributor exam questions will flow into the manager exam.

---

## Recommended Execution Order

Generate topics in this order (heaviest/most unique first, to maximize context efficiency):

**Phase 1 — Largest & Most Unique (heaviest PDF reading):**
1. **Read Unit 18 → Topic 18** (Equity Portfolio Strategies, 50 Qs) — largest, mostly unique
2. **Read Unit 19 → Topic 19** (FI Portfolio Strategies, 50 Qs) — largest, mostly unique
3. **Read Unit 17 → Topic 17** (Risk, 30 Qs) — unique, VaR-heavy
4. **Read Unit 20 → Topic 20** (Performance Measurement, 30 Qs) — calc-heavy
5. **Read Unit 11 → Topic 11** (Regulatory, 30 Qs) — includes new Best Practices

**Phase 2 — Medium-weight (moderate uniqueness):**
6. **Read Unit 15 → Topic 15** (MPT, 20 Qs) — unique, calc
7. **Read Unit 16 → Topic 16** (CMT, 20 Qs) — unique, calc
8. **Read Unit 9 → Topic 9** (PM Process, 30 Qs) — overlap with XXI-A but reframed
9. **Read Unit 8 → Topic 8** (Operational, 30 Qs) — overlap, reframe for manager
10. **Read Unit 7 → Topic 7** (Role of PMs, 30 Qs) — overlap, deeper reg content

**Phase 3 — Smaller / Unique / Conceptual:**
11. **Read Unit 13 → Topic 13** (Informational Efficiency, 15 Qs) — unique
12. **Read Unit 14 → Topic 14** (Behavioural Finance, 15 Qs) — unique
13. **Read Unit 12 → Topic 12** (Indices, 15 Qs) — partly unique
14. **Read Unit 21 → Topic 21** (Rebalancing, 20 Qs) — partly unique
15. **Read Unit 10 → Topic 10** (Taxation, 15 Qs) — Section 9A new

**Phase 4 — Lightest / Overlap-heavy (can use lighter PDF reading):**
16. **Topic 3** (Equity Investing, 20 Qs) — reuse XXI-A content, add calc
17. **Topic 4** (FI Investing, 20 Qs) — reuse XXI-A content, add calc
18. **Topic 5** (Derivatives, 20 Qs) — reuse XXI-A + deeper
19. **Topic 6** (MFs, 20 Qs) — reuse V-A content
20. **Topic 1** (Investment Landscape, 10 Qs) — reuse XXI-A
21. **Topic 2** (Securities Markets, 10 Qs) — reuse XXI-A

**Context management tip:** If running out of context after Phase 3, prioritize Topics 18, 19, 17, 20, 11 completion. The lighter topics (1, 2, 3, 4, 5, 6) can reuse XXI-A patterns with new scenarios.

---

## Key Calculations Students Will See on XXI-B

These should appear naturally in the calc questions across topics:

| Formula | Topics | Example |
|---------|--------|---------|
| Portfolio return = Σ(w_i * r_i) | 9, 15, 18, 20 | 3-asset portfolio weighted return |
| Portfolio variance = Σw_i²σ_i² + 2ΣΣw_iw_jσ_iσ_jρ_ij | 15, 17 | 2-asset portfolio variance |
| CAPM: re = Rf + β(Rm - Rf) | 3, 16, 20 | Cost of equity |
| DDM (GGM): P = D1 / (r - g) | 3 | Stock intrinsic value |
| Bond price = Σ CF/(1+YTM)^t | 4, 19 | Bond pricing |
| Modified Duration | 4, 19 | Price sensitivity |
| Sharpe = (Rp - Rf)/σp | 20 | Risk-adjusted return |
| Treynor = (Rp - Rf)/βp | 20 | Market-risk-adjusted return |
| Jensen's Alpha = Rp - [Rf + βp(Rm - Rf)] | 20 | CAPM-based alpha |
| Information Ratio = (Rp - Rb)/TE | 20 | Active-management consistency |
| Sortino = (Rp - Rf)/Downside Dev | 20 | Downside-risk-adjusted |
| VaR (parametric) = μ - z * σ * √t | 17 | Loss at confidence level |
| TWRR = Π(1+Ri) - 1 | 8, 20 | Time-weighted manager return |
| Attribution: Alloc = Σ(Wp-Wb)*Rb; Select = ΣWb*(Rp-Rb); Interact = Σ(Wp-Wb)*(Rp-Rb) | 20 | Brinson decomposition |
| Immunization: portfolio duration = liability duration | 19 | FI passive strategy |
| Hedge ratio for futures = (Portfolio * β) / (Contract size) | 5, 18, 19 | Index-futures hedge |

---

## Grand Total After Phase 14C-2

| Metric | Before | After |
|--------|:------:|:-----:|
| Exams | 26 | 27 |
| Questions | 10,893 | 11,393 |
| Topics | 249 | 270 |

**Next after XXI-B:** Phase 14D or 15 — determined by remaining roadmap (Series XXV-B, XXVI, or audit/gap-fill passes on XXI-A/B).
