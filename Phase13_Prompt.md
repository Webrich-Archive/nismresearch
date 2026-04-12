# Session Prompt for Phase 13 — Series XV (Research Analyst) & Series XVII (Retirement Adviser)

**Date created:** April 12, 2026
**Pre-requisite:** Read HANDOFF.md first. 19 exams complete (8,143 questions). This session covers two unrelated exams with available PDFs.

---

## Phase 13: Series XV & XVII — Research Analyst + Retirement Adviser (2 Exams, 19 Topics, ~1000 Questions)

### Context

| Parameter | Value |
|-----------|-------|
| **Exams** | NISM Series XV: Research Analyst + Series XVII: Retirement Adviser |
| **PDF (XV)** | `/Users/shivam/aiworkspace/nismresearch/study material/NISM-Series-XV-ResearchAnalyst-Workbook - February 2026.pdf` (342 pages) |
| **PDF (XVII)** | `/Users/shivam/aiworkspace/nismresearch/study material/NISM Series XVII Retirement Adviser Certification Examination -June 2025 version_02.pdf` (283 pages) |
| **Target** | XV: 500 Qs across 10 topics (20% caselets). XVII: 500 Qs across 9 topics. Total: ~1000 Qs. |
| **Difficulty** | XV: Hard — valuation-heavy (25% calc, 35% conceptual, 20% caselet, 15% regulatory). XVII: Moderate — NPS-heavy (15% calc, 50% conceptual, 20% regulatory). |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |
| **Total bank after this phase** | ~9,143 questions across 207 topics, 21 exams |

### Why XV & XVII Together?

These two exams have no content overlap, making them ideal for parallel generation without duplication concerns. XV is calculation/analysis-heavy (valuation, DCF, P/E ratios, technical analysis) while XVII is product/planning-heavy (NPS, retirement corpus, annuity). Different skill sets, clean separation. With 342 + 283 = 625 pages total, this may need to be split across 2-3 sub-sessions depending on context window capacity.

---

## Part A: Series XV — Research Analyst

### Exam Parameters

| Parameter | Value |
|-----------|-------|
| Actual exam questions | 100 |
| Duration | 2 hours |
| Pass % | 60% |
| Negative marking | 25% |
| Pool target | 500 |
| **Caselet %** | **20% (significant!)** |
| Question mix | 25% calc / 35% conceptual / 20% caselet / 15% regulatory |
| Mock test count | 100 |

### PDF Chapter-to-Topic Mapping (342 pages)

Read the PDF table of contents first to map chapters to topics. Expected structure:

| # | Topic Name (EXACT plist key) | Expected Chapters | Standalone MCQs | Caselets | Caselet Qs | Total |
|---|------------------------------|-------------------|:---------------:|:--------:|:----------:|:-----:|
| 1 | Introduction to Research Analyst Profession | Ch 1 | 30 | 0 | 0 | 30 |
| 2 | Introduction to Securities Market | Ch 2 | 30 | 0 | 0 | 30 |
| 3 | Fundamentals of Research | Ch 3 | 35 | 2 | 10 | 45 |
| 4 | Terminology in Equity and Debt Markets | Ch 4 | 35 | 2 | 10 | 45 |
| 5 | Economic Analysis | Ch 5 | 35 | 2 | 10 | 45 |
| 6 | Industry Analysis | Ch 6 | 35 | 2 | 10 | 45 |
| 7 | Company Analysis | Ch 7 | 40 | 2 | 10 | 50 |
| 8 | Fundamental Analysis and Valuation Techniques | Ch 8 | 40 | 4 | 20 | 60 |
| 9 | Technical Analysis | Ch 9 | 40 | 2 | 10 | 50 |
| 10 | Regulatory Requirements for Research Analysts | Ch 10 | 80 | 2 | 20 | 100 |
| | **XV Total** | | **400** | **18** | **100** | **500** |

**Note:** Adjust chapter mapping after reading the actual PDF TOC. The caselet allocation is approximate — topics with calculation content (valuation, technical analysis) should get more caselets.

### Content Focus Areas for XV

**Topic 1: Introduction to Research Analyst Profession (30 MCQs)**
- Definition and role of research analyst
- Types of research: sell-side vs buy-side
- Research reports: initiation, updates, sector reports
- Independence and objectivity requirements
- Career path and professional development
- Mix: 20 conceptual, 5 regulatory, 5 application

**Topic 2: Introduction to Securities Market (30 MCQs)**
- Primary and secondary markets
- Market participants: exchanges, clearing corps, depositories, brokers
- Types of securities: equity, debt, derivatives, MF, ETF
- Market indices: construction, types (broad, sectoral, thematic)
- Market microstructure: order types, circuit breakers, T+1 settlement
- Mix: 20 conceptual, 5 regulatory, 5 application

**Topic 3: Fundamentals of Research (45 Qs = 35 MCQs + 2 caselets)**
- Research methodology: top-down vs bottom-up
- Qualitative vs quantitative analysis
- Sources of information: company filings, databases, management commentary
- Research process: hypothesis formation, data collection, analysis, conclusion
- Report writing: structure, disclaimers, recommendations (buy/sell/hold)
- Caselets: research process scenarios

**Topic 4: Terminology in Equity and Debt Markets (45 Qs = 35 MCQs + 2 caselets)**
- Equity: EPS, P/E, P/B, dividend yield, market cap, free float, beta
- Debt: yield, YTM, duration, modified duration, credit spread, coupon, accrued interest
- Calculations: EPS, P/E, dividend yield, current yield, YTM approximation
- Caselets: financial ratio calculation scenarios
- Mix: 15 calculation, 10 conceptual, 10 application + 10 caselet Qs

**Topic 5: Economic Analysis (45 Qs = 35 MCQs + 2 caselets)**
- Macro indicators: GDP, inflation (CPI, WPI), interest rates, fiscal deficit, current account
- Business cycles: expansion, peak, recession, trough
- Monetary policy: repo rate, reverse repo, CRR, SLR, LAF
- Fiscal policy: government spending, taxation, budget analysis
- Impact on markets: interest rate changes, currency movements
- Caselets: economic data interpretation scenarios

**Topic 6: Industry Analysis (45 Qs = 35 MCQs + 2 caselets)**
- Porter's Five Forces
- Industry life cycle: introduction, growth, maturity, decline
- PEST/PESTEL analysis
- Industry structure: concentrated vs fragmented, barriers to entry
- Competitive positioning
- Caselets: industry analysis framework application

**Topic 7: Company Analysis (50 Qs = 40 MCQs + 2 caselets)**
- Financial statements: income statement, balance sheet, cash flow
- Ratio analysis: profitability (ROE, ROA, margins), liquidity (current, quick), leverage (D/E, interest coverage), efficiency (asset turnover, inventory days)
- DuPont analysis
- Cash flow analysis: operating, investing, financing
- Quality of earnings analysis
- Caselets: financial statement analysis with ratio calculations

**Topic 8: Fundamental Analysis and Valuation Techniques (60 Qs = 40 MCQs + 4 caselets)**
- DCF valuation: free cash flow, WACC, terminal value, enterprise value to equity value
- Relative valuation: P/E, EV/EBITDA, P/B, PEG ratio
- Dividend Discount Model: Gordon growth model
- Sum-of-parts valuation
- NAV-based valuation (for holding companies, real estate)
- Equity research report components
- Caselets: detailed valuation scenarios with calculations
- Mix: 15 calculation, 10 conceptual, 15 application + 20 caselet Qs (4 caselets)

**Topic 9: Technical Analysis (50 Qs = 40 MCQs + 2 caselets)**
- Chart types: line, bar, candlestick
- Trends: uptrend, downtrend, sideways, support, resistance
- Chart patterns: head & shoulders, double top/bottom, triangles, flags
- Moving averages: SMA, EMA, crossovers (golden cross, death cross)
- Indicators: RSI, MACD, Bollinger Bands, stochastic oscillator
- Volume analysis
- Dow Theory basics
- Caselets: chart reading and indicator interpretation scenarios

**Topic 10: Regulatory Requirements for Research Analysts (100 Qs = 80 MCQs + 2 caselets)**
- SEBI (Research Analysts) Regulations 2014
- Registration requirements: qualifications (NISM XV certification), net worth, infrastructure
- Independence and conflict of interest management
- Disclosure requirements: ownership, compensation, client relationship
- Research report standards: fair presentation, basis, disclaimers
- Distribution of research: public vs private, selective dissemination rules
- Record keeping requirements
- Compliance officer role
- SEBI enforcement and penalties
- Code of conduct for research analysts
- Caselets: compliance scenario with multiple regulatory requirements

---

## Part B: Series XVII — Retirement Adviser

### Exam Parameters

| Parameter | Value |
|-----------|-------|
| Actual exam questions | 100 |
| Duration | 2 hours |
| Pass % | 60% |
| Negative marking | 25% |
| Pool target | 500 |
| Caselet % | 0% |
| Question mix | 15% calc / 50% conceptual / 0% caselet / 20% regulatory |
| Mock test count | 100 |

### PDF Chapter-to-Topic Mapping (283 pages)

| # | Topic Name (EXACT plist key) | Expected Chapters | Standalone MCQs | Total |
|---|------------------------------|-------------------|:---------------:|:-----:|
| 1 | Fundamental Concepts in Retirement Planning | Ch 1 | 25 | 25 |
| 2 | Retirement Planning Process | Ch 2 | 75 | 75 |
| 3 | Retirement Planning Products: National Pension System (NPS) | Ch 3 | 100 | 100 |
| 4 | Retirement Planning Products: Other Investment Products | Ch 4 | 40 | 40 |
| 5 | Retirement Planning Strategies | Ch 5 | 60 | 60 |
| 6 | Financial Markets and Investment Products | Ch 6 | 50 | 50 |
| 7 | Evaluating Fund Performance and Fund Selection | Ch 7 | 50 | 50 |
| 8 | Special Considerations in Retirement | Ch 8 | 50 | 50 |
| 9 | Regulations and Regulators | Ch 9 | 50 | 50 |
| | **XVII Total** | | **500** | **500** |

### Content Focus Areas for XVII

**Topic 1: Fundamental Concepts in Retirement Planning (25 MCQs)**
- Need for retirement planning
- Retirement planning landscape in India
- Life expectancy, inflation impact on retirement corpus
- Time value of money concepts for retirement
- Retirement readiness assessment
- Mix: 15 conceptual, 5 calculation (corpus needs), 5 application

**Topic 2: Retirement Planning Process (75 MCQs)**
- Goal setting: retirement age, desired lifestyle, income replacement ratio
- Data gathering: current savings, expenses, insurance, debts
- Estimating retirement corpus: inflation-adjusted needs, present value
- Gap analysis: shortfall calculation
- Asset allocation for retirement: glide path, risk capacity vs tolerance
- Regular review and rebalancing
- Mix: 30 conceptual, 20 calculation, 15 application, 10 regulatory

**Topic 3: NPS — National Pension System (100 MCQs — largest topic, 20% weightage)**
- NPS architecture: PFRDA, NPS Trust, CRAs (CAMS, KFintech, Protean), PFMs, Custodian, Trustee Bank
- Account types: Tier I (mandatory, restricted withdrawal), Tier II (voluntary, flexible)
- Investment choices: Active Choice (E/C/G/A asset classes), Auto Choice (Aggressive/Moderate/Conservative life cycle funds)
- Asset class limits: Equity max 75% (reducing with age), Govt Securities, Corporate Bonds, Alternative Assets max 5%
- Subscriber categories: Government, Corporate, All Citizens, NRI
- Contribution: minimum Rs.500/contribution, Rs.1,000/year for Tier I; Rs.250/year for Tier II
- Tax benefits: Section 80CCD(1) — up to 10% of salary (employees) / 20% of gross income (self-employed) within 80C limit of Rs.1.5 lakh; 80CCD(1B) — additional Rs.50,000; 80CCD(2) — employer contribution up to 14% (govt)/10% (others) beyond 80C limit
- Exit rules: at 60 — minimum 40% annuity purchase, up to 60% lump sum tax-free; before 60 — minimum 80% annuity; superannuation
- Atal Pension Yojana (APY): for unorganized sector, guaranteed pension Rs.1,000-5,000/month, age 18-40, govt co-contribution
- eNPS: online enrollment, Aadhaar-based
- Partial withdrawal: after 3 years in Tier I, max 25% of own contribution, max 3 times, specified reasons (children education/marriage, house purchase, critical illness, skill development, own treatment)
- Mix: 40 conceptual, 25 regulatory, 20 calculation, 15 application

**Topic 4: Other Investment Products (40 MCQs)**
- EPF/PPF: features, limits, tax treatment, withdrawal rules
- Gratuity: eligibility (5 years), calculation (15 days salary × years of service / 26), maximum limit
- Employee Pension Scheme (EPS)
- Superannuation funds
- Senior Citizens Savings Scheme (SCSS)
- Pradhan Mantri Vaya Vandana Yojana (PMVVY)
- Mutual fund retirement solutions: ELSS, target-date funds
- Insurance: term, endowment, ULIPs, annuities (immediate/deferred, fixed/variable)
- Reverse mortgage
- Mix: 25 conceptual, 5 calculation, 5 regulatory, 5 application

**Topic 5: Retirement Planning Strategies (60 MCQs)**
- Accumulation phase strategies
- Distribution phase strategies: systematic withdrawal, bucket strategy
- Annuity options: life annuity, joint life, with/without return of purchase price
- Inflation protection strategies
- Healthcare cost planning
- Tax-efficient withdrawal sequencing
- Estate planning integration
- Mix: 30 conceptual, 10 calculation, 10 application, 10 regulatory

**Topic 6: Financial Markets and Investment Products (50 MCQs)**
- Equity markets: stocks, indices, IPO, FPO
- Debt markets: government securities, corporate bonds, money market
- Mutual funds: types, NAV, TER, entry/exit loads
- Derivatives: futures, options basics
- Real estate, gold as asset classes
- Risk-return characteristics of each asset class
- Mix: 30 conceptual, 10 calculation, 5 regulatory, 5 application

**Topic 7: Evaluating Fund Performance and Fund Selection (50 MCQs)**
- Returns: absolute, annualized, CAGR, XIRR
- Risk measures: standard deviation, beta, Sharpe ratio, Sortino ratio, Treynor ratio, alpha (Jensen's)
- Benchmarking and tracking error
- Style analysis: value vs growth, large vs mid vs small
- Fund selection criteria: past performance, expense ratio, fund manager track record, AUM, consistency
- Mix: 20 calculation, 15 conceptual, 10 application, 5 regulatory

**Topic 8: Special Considerations in Retirement (50 MCQs)**
- Healthcare in retirement: health insurance, critical illness, long-term care
- Taxation in retirement: pension income, capital gains, TDS on deposits
- Estate planning: will, nomination, succession, trusts
- Behavioral aspects: spending shocks, longevity risk, sequence-of-returns risk
- Social security: government schemes, senior citizen benefits
- Mix: 30 conceptual, 10 application, 5 calculation, 5 regulatory

**Topic 9: Regulations and Regulators (50 MCQs)**
- PFRDA Act 2013: establishment, functions, powers
- SEBI regulations for retirement-related products
- IRDAI regulations for annuity and pension products
- Income Tax Act provisions for retirement savings (80C, 80CCC, 80CCD)
- RBI regulations relevant to retirement products
- EPFO regulations
- Grievance redressal: IGMS, Ombudsman, SCORES
- Mix: 35 regulatory, 10 conceptual, 5 application

---

## Execution Strategy

Since the two exams total ~1000 questions across 19 topics and 625 PDF pages, this MUST be split across 2-3 sub-sessions.

### Recommended Sub-Session Split

**Sub-Session 1: Read XV PDF + Generate XV Topics 1-5 (~195 Qs)**
1. Read XV PDF TOC and all relevant chapters
2. Generate Topics 1-5 (30+30+45+45+45 = 195 Qs)
3. Validate, update plists
4. Commit XV Part 1

**Sub-Session 2: Generate XV Topics 6-10 (~305 Qs)**
1. Continue reading XV PDF chapters 6-10
2. Generate Topics 6-10 (45+50+60+50+100 = 305 Qs)
3. Validate, update plists
4. Commit XV complete

**Sub-Session 3: Read XVII PDF + Generate all XVII Topics (500 Qs)**
1. Read XVII PDF all chapters
2. Generate all 9 topics (may need 2-3 parallel batches of agents)
3. Validate, update plists, update HANDOFF.md
4. Commit XVII complete

### If Context Gets Full

If context fills up during any sub-session, STOP and:
1. Validate what's generated so far
2. Update HANDOFF.md with partial progress
3. Commit with descriptive message
4. The next session picks up from HANDOFF.md

---

## File Naming Convention

Use the **EXACT plist topic name** as prefix:

**XV files:**
```
Introduction to Research Analyst Profession_1.xml through _30.xml
Introduction to Securities Market_1.xml through _30.xml
Fundamentals of Research_1.xml through _35.xml
Fundamentals of Research_C1_1.xml through _C2_5.xml
Terminology in Equity and Debt Markets_1.xml through _35.xml
Terminology in Equity and Debt Markets_C1_1.xml through _C2_5.xml
Economic Analysis_1.xml through _35.xml
Economic Analysis_C1_1.xml through _C2_5.xml
Industry Analysis_1.xml through _35.xml
Industry Analysis_C1_1.xml through _C2_5.xml
Company Analysis_1.xml through _40.xml
Company Analysis_C1_1.xml through _C2_5.xml
Fundamental Analysis and Valuation Techniques_1.xml through _40.xml
Fundamental Analysis and Valuation Techniques_C1_1.xml through _C4_5.xml
Technical Analysis_1.xml through _40.xml
Technical Analysis_C1_1.xml through _C2_5.xml
Regulatory Requirements for Research Analysts_1.xml through _80.xml
Regulatory Requirements for Research Analysts_C1_1.xml through _C2_5.xml
```

**XVII files:**
```
Fundamental Concepts in Retirement Planning_1.xml through _25.xml
Retirement Planning Process_1.xml through _75.xml
Retirement Planning Products: National Pension System (NPS)_1.xml through _100.xml
Retirement Planning Products: Other Investment Products_1.xml through _40.xml
Retirement Planning Strategies_1.xml through _60.xml
Financial Markets and Investment Products_1.xml through _50.xml
Evaluating Fund Performance and Fund Selection_1.xml through _50.xml
Special Considerations in Retirement_1.xml through _50.xml
Regulations and Regulators_1.xml through _50.xml
```

---

## XML Formats

Same as Phase 12. See Phase 12 prompt for regular MCQ and caselet XML templates.

**Key reminders:**
- `<![CDATA[...]]>` around all text content
- Exactly 4 answers, exactly 1 correct
- Explanation: The Logic, The Trap, Cross-Exam Context, Distributor's Pro-Tip
- Caselet: `<b>Scenario:</b>` + `<b>Question N of 5:</b>`, scenario IDENTICAL across all 5 files
- Indian names, INR amounts

---

## Quality Rules (from BEST_PRACTICES.md)

1. **ALWAYS read PDF chapter before generating questions**
2. **Use exact plist topic names** as file prefixes
3. **Validate after every batch**
4. **STOP when context gets full**
5. **Caselet scenarios self-contained**
6. **Calculations must be verified** — XV has heavy valuation math (DCF, P/E, WACC, DDM)
7. **Tax rates:** Use FY 2025-26 rates from TaxRatesReference file
8. **NPS specifics for XVII:** Verify all contribution limits, asset allocation caps, tax sections against PDF — these change frequently
9. **XV caselets:** Should involve multi-step analysis (ratio calculation → valuation → recommendation)
10. **XVII calculation questions:** Retirement corpus estimation, annuity calculations, NPS asset allocation

---

## After Phase 13 — Checklist

1. Count files per topic — match targets (500 + 500 = 1000 total)
2. Run XML validation
3. Spot-check 3-5 questions per topic for factual accuracy
4. Update HANDOFF.md
5. Update plists (Topics, TopicsLite, ChapterArticles, QuestionToArticleNumber)
6. Verify ExamWeightages alignment
7. Git commit

### After Phase 13 — Grand Total

| Completed | Exams | Questions | Topics |
|-----------|:-----:|:---------:|:------:|
| Before Phase 13 | 19 | 8,143 | 188 |
| Phase 13 (XV + XVII) | +2 | +1,000 | +19 |
| **After Phase 13** | **21** | **~9,143** | **207** |

**Remaining after Phase 13:** 10 exams (X-C, XIX-A/B/C/D/E, XXI-A/B, XXIII, XXV-A)
