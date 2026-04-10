# Session 3 Prompt for Phase 11a — Series X-A: Investment Adviser (Level 1)

**Date created:** April 10, 2026
**Pre-requisite:** Read HANDOFF.md first. Sessions 1-2 are complete (335/500 Qs done).

---

## Phase 11a — Session 3: Modules 5-6 (Topics 5-6)

### What's Already Done (Sessions 1-2)

| # | Topic Name (exact plist key) | Chapters | Pool Qs | Standalone MCQs | Caselets | Caselet Qs | Session |
|---|------------------------------|----------|:-------:|:---------------:|:--------:|:----------:|:-------:|
| 1 | XA Personal Financial Planning | Ch 1-4 | 125 | 95 | 6 (C1-C6) | 30 | 1 |
| 2 | XA Indian Financial Markets | Ch 5-6 | 35 | 35 | 0 | 0 | 1 |
| 3 | XA Investment Products | Ch 7-10 | 100 | 80 | 4 (C1-C4) | 20 | 2 |
| 4 | XA Managed Portfolios | Ch 11-13 | 75 | 60 | 3 (C1-C3) | 15 | 2 |
| | **Total done** | | **335** | **270** | **13** | **65** | |

### What This Session Must Produce

| # | Topic Name (exact plist key) | Chapters | Pool Qs | Standalone MCQs | Caselets | Caselet Qs |
|---|------------------------------|----------|:-------:|:---------------:|:--------:|:----------:|
| 5 | XA Portfolio Construction and Evaluation | Ch 14-16 | 65 | 40 | 5 | 25 |
| 6 | XA Operations Regulation and Ethics | Ch 17-20 | 100 | 90 | 2 | 10 |
| | **Session 3 Total** | | **165** | **130** | **7** | **35** |

**After this session: 500 total questions, 20 caselets, Phase 11a COMPLETE.**

---

### Exam Overview (Unchanged)

| Parameter | Value |
|-----------|-------|
| **Exam** | NISM Series X-A: Investment Adviser (Level 1) |
| **Total Questions** | 99 (90 MCQs × 1 mark + 9 caselets) |
| **Caselet Structure** | 6 caselets × 5 Qs × 1 mark = 30 marks + 3 caselets × 5 Qs × 2 marks = 30 marks |
| **Total Marks** | 150 |
| **Duration** | 3 hours |
| **Pass %** | 60% (90 marks) |
| **Negative Marking** | 25% |
| **Pool Target** | 500 questions |
| **Difficulty** | Hard |
| **PDF** | `/Users/nisarga/aiworkspace/nismresearch/study material/NISM-Series-X-A Investment Adviser (Level 1) - June 2025.pdf` |

### ExamWeightages.plist — Already Updated (Session 1)

Do NOT modify the plist. Use these exact topic names as file prefixes:

```
XA Personal Financial Planning: 25%   ← DONE (125 Qs)
XA Indian Financial Markets: 7%       ← DONE (35 Qs)
XA Investment Products: 20%           ← DONE (100 Qs)
XA Managed Portfolios: 15%            ← DONE (75 Qs)
XA Portfolio Construction and Evaluation: 13%  ← THIS SESSION
XA Operations Regulation and Ethics: 20%       ← THIS SESSION
```

---

### Chapter-by-Chapter Content Guide (This Session)

**Module 5: Portfolio Construction, Performance Monitoring and Evaluation (20 marks — 13% weight)**

- **Ch 14 (pp 243-250):** Modern Portfolio Theory — Markowitz, efficient frontier, assumptions of MPT, risk-averse/seeking/neutral investors, calculation of risk and return for individual securities, portfolio risk/return for 2-asset portfolio, efficient frontier, portfolio optimization, estimation issues.
  - Key formulas: Expected return = Σ(probability × return), Variance = Σ(probability × (return - mean)²), Standard deviation = √Variance
  - Portfolio return = w₁R₁ + w₂R₂
  - Portfolio variance (2-asset) = w₁²σ₁² + w₂²σ₂² + 2w₁w₂σ₁σ₂ρ₁₂
  - Correlation coefficient (ρ) ranges from -1 to +1; lower ρ = better diversification
  - Efficient frontier: set of portfolios offering maximum return for given risk level
  
- **Ch 15 (pp 251-265):** Portfolio Construction Process — importance of asset allocation, correlation across asset classes, strategic vs tactical asset allocation, risk profiling (willingness + ability to take risk), life cycle-based investing, rebalancing (calendar vs threshold), benchmarking.
  - Strategic allocation: long-term target weights based on goals/risk profile
  - Tactical allocation: short-term deviations to exploit market opportunities
  - Risk profiling: questionnaire-based assessment of risk tolerance
  - Life cycle: aggressive (young) → balanced (mid-life) → conservative (near retirement)
  - Rebalancing: periodic adjustment to maintain target allocation
  
- **Ch 16 (pp 266-290):** Portfolio Performance Measurement and Evaluation — **CALCULATION HEAVY**
  - Holding Period Return (HPR) = (Income + End Value - Begin Value) / Begin Value
  - Time-Weighted Rate of Return (TWRR): geometric linking of sub-period returns, eliminates cash flow timing effect
  - Money-Weighted Rate of Return (MWRR): IRR of all cash flows, sensitive to cash flow timing
  - **Sharpe Ratio** = (Rp - Rf) / σp (excess return per unit of total risk)
  - **Treynor Ratio** = (Rp - Rf) / βp (excess return per unit of systematic risk)
  - **Jensen's Alpha** = Rp - [Rf + βp(Rm - Rf)] (excess return above CAPM expected return)
  - **Information Ratio** = (Rp - Rb) / Tracking Error (active return per unit of active risk)
  - **Tracking Error** = Std Dev of (Rp - Rb) (consistency of outperformance)
  - Benchmarking: choosing appropriate benchmark, benchmark properties
  - Attribution analysis: decomposing returns into asset allocation vs security selection

**Module 6: Operations, Regulatory Environment, Compliance and Ethics (30 marks — 20% weight)**

- **Ch 17 (pp 291-333):** Operational Aspects — **LONGEST CHAPTER (42 pages)**
  - Investor categories: Resident Indian, NRI, PIO/OCI, FPI, HUF, Minor, Trust, Corporate
  - KYC: CKYC, Video KYC, Re-KYC requirements, KRA, PAN-Aadhaar linking
  - Demat account: opening, operation, nomination, transmission
  - Power of Attorney: scope, limitations, revocation
  - Payment instruments: cheque, RTGS, NEFT, UPI, third-party payments
  - NRI account types: NRE (repatriable), NRO (non-repatriable), FCNR
  - Folio consolidation, change of details, nomination
  - Direct equity investment process, IPO application (ASBA)
  
- **Ch 18 (pp 334-366):** Key Regulations — **MOST IMPORTANT REGULATORY CHAPTER (32 pages)**
  - Securities Contracts (Regulation) Act (SCRA), 1956: definition of securities
  - SEBI Act, 1992: establishment, powers, functions of SEBI
  - SEBI (Prohibition of Fraudulent and Unfair Trade Practices - PFUTP) Regulations
  - SEBI (Prohibition of Insider Trading - PIT) Regulations, 2015
  - SEBI (Intermediaries) Regulations
  - **SEBI (Investment Advisers) Regulations, 2013** — THE CORE REGULATION for this exam:
    - Registration requirements (individual vs non-individual)
    - Qualification: post-graduate + NISM certification
    - Net worth: Rs. 5 lakh (individual), Rs. 50 lakh (non-individual)
    - Fee structure: fixed fee or AUM-based (max 2.5% of AUM per annum per client), fee-only model
    - Client agreement mandatory requirements
    - Risk profiling and suitability obligations
    - Disclosure requirements (conflict of interest, compensation)
    - Code of conduct: fiduciary duty, duty of care
    - Prohibition on accepting commissions (advisory vs distribution separation)
    - Client-level segregation of advisory and distribution activities
  
- **Ch 19 (pp 367-376):** Ethical Issues — fiduciary duty, conflicts of interest, churning, front-running, mis-selling, suitability obligations, information barriers (Chinese walls), personal trading policies.

- **Ch 20 (pp 377-386):** Grievance Redress Mechanism — Consumer Protection Act 2019, SEBI SCORES portal, banking ombudsman, insurance ombudsman, PFRDA grievance mechanism, Securities Appellate Tribunal (SAT), arbitration through exchanges.

---

### Question Type Targets for This Session

**Topic 5: XA Portfolio Construction and Evaluation (65 questions)**

| Type | Count | Notes |
|------|:-----:|-------|
| Calculation | 20 | Sharpe ratio, Treynor ratio, Jensen's alpha, portfolio return/risk (2-asset), TWRR, MWRR, HPR, tracking error, information ratio |
| Conceptual | 15 | MPT assumptions, efficient frontier, strategic vs tactical allocation, risk profiling, rebalancing, benchmarking |
| Caselet | 25 | 5 caselets × 5 Qs each |
| Regulatory | 5 | Benchmark selection norms, performance reporting standards |

**Topic 6: XA Operations Regulation and Ethics (100 questions)**

| Type | Count | Notes |
|------|:-----:|-------|
| Calculation | 5 | IA net worth calculation, fee calculation (2.5% of AUM), tax computation scenarios |
| Conceptual | 30 | KYC process, demat operations, PoA, NRI account types, ethical principles, fiduciary duty |
| Caselet | 10 | 2 caselets × 5 Qs each |
| Regulatory | 55 | SEBI IA Regulations 2013 (registration, qualification, net worth, fees, suitability, conflict of interest), SCRA, SEBI Act, PFUTP, PIT, grievance mechanisms, SCORES, SAT, ombudsman |

---

### Caselet Generation for This Session

**Topic 5 Caselet Themes (5 caselets × 5 Qs = 25 Qs):**

| # | Theme | Chapters | Question Mix |
|---|-------|----------|--------------|
| C1 | 2-Asset Portfolio Construction — Investor choosing between equity and bond allocation, computing portfolio return and risk | Ch 14 | 3 calc (portfolio return, variance, std dev) + 1 conceptual (efficient frontier) + 1 application |
| C2 | Risk Profiling and Asset Allocation — Young professional vs retiree with different risk profiles; recommending appropriate allocation | Ch 15 | 1 calc + 2 conceptual (risk profiling, life cycle) + 2 application |
| C3 | Performance Evaluation — Comparing 3 mutual funds using Sharpe, Treynor, Jensen's alpha, given fund returns, beta, std dev | Ch 16 | 3 calc (Sharpe, Treynor, Alpha) + 1 conceptual (which metric when) + 1 application |
| C4 | TWRR vs MWRR — Investor with interim cash flows; computing both return measures and explaining why they differ | Ch 16 | 3 calc (TWRR, MWRR, HPR) + 1 conceptual (when to use which) + 1 application |
| C5 | Portfolio Rebalancing — Client portfolio drifted from target allocation; deciding whether/how to rebalance, tracking error analysis | Ch 15-16 | 2 calc (tracking error, rebalancing amounts) + 2 conceptual + 1 application |

**Topic 6 Caselet Themes (2 caselets × 5 Qs = 10 Qs):**

| # | Theme | Chapters | Question Mix |
|---|-------|----------|--------------|
| C1 | IA Regulatory Compliance — Investment Adviser setting up practice: registration, qualification, net worth, fee structure, client agreement, disclosure | Ch 18 | 0 calc + 2 conceptual + 3 regulatory |
| C2 | Ethical Dilemma and Grievance — Adviser facing conflict of interest, churning allegation, client complaint resolution through SCORES/SAT | Ch 19-20 | 0 calc + 2 conceptual + 2 regulatory + 1 application |

---

### Caselet Format (APPROVED — from HANDOFF.md)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="XA Portfolio Construction and Evaluation_C1_1" sectionNumber="" articleNumber="0" articleName="">
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

**Key Rules:**
1. Scenario text must be **IDENTICAL** across all 5 linked questions — copy-paste verbatim
2. Each question is a **separate XML file**
3. Use `<b>` tags for "Scenario:" and "Question X of Y:" labels
4. All data needed to answer must be in the scenario text
5. Use Indian names, INR amounts, Indian regulatory context

---

### Regular MCQ XML Format

```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="XA Portfolio Construction and Evaluation_1" sectionNumber="" articleNumber="0" articleName="">
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

### File Numbering Convention

**Topic 5: XA Portfolio Construction and Evaluation**
- Standalone MCQs: `XA Portfolio Construction and Evaluation_1.xml` through `_40.xml`
- Caselet Qs: `XA Portfolio Construction and Evaluation_C1_1.xml` through `_C5_5.xml`

**Topic 6: XA Operations Regulation and Ethics**
- Standalone MCQs: `XA Operations Regulation and Ethics_1.xml` through `_90.xml`
- Caselet Qs: `XA Operations Regulation and Ethics_C1_1.xml` through `_C2_5.xml`

---

### Execution Plan for This Session

1. **Read Ch 14 from PDF** (pp 243-250). Generate ~15 standalone MCQs for MPT, efficient frontier, portfolio risk/return.
2. **Read Ch 15 from PDF** (pp 251-265). Generate ~10 standalone MCQs for asset allocation, risk profiling, rebalancing.
3. **Read Ch 16 from PDF** (pp 266-290). Generate ~15 standalone MCQs for Sharpe, Treynor, Alpha, TWRR, MWRR, tracking error.
4. **Generate 5 caselets for Topic 5** (C1-C5, 25 caselet Qs). Validate Topic 5 — should be 65 total.
5. **Read Ch 17 from PDF** (pp 291-333). Generate ~30 standalone MCQs for KYC, demat, NRI, PoA, payment instruments.
6. **Read Ch 18 from PDF** (pp 334-366). Generate ~40 standalone MCQs for SEBI IA Regulations, SCRA, PFUTP, PIT, SEBI Act.
7. **Read Ch 19 from PDF** (pp 367-376). Generate ~10 standalone MCQs for ethics, fiduciary duty, conflicts.
8. **Read Ch 20 from PDF** (pp 377-386). Generate ~10 standalone MCQs for grievance redress, SCORES, SAT, ombudsman.
9. **Generate 2 caselets for Topic 6** (C1-C2, 10 caselet Qs). Validate Topic 6 — should be 100 total.
10. **Regenerate all 5 plists** using the standard Python pipeline (Topics.plist, TopicsLite.plist, ChapterArticles.plist, QuestionToArticleNumber.plist — ExamWeightages.plist already done).
11. **Run full validation**: plutil, XML validity, ID-filename match, duplicate check, plist alignment, TopicsLite ratios.
12. **Update HANDOFF.md** with Phase 11a completion.
13. **Git commit.**

---

### Key Calculation Areas to Cover (This Session)

1. **Portfolio Math (Ch 14):**
   - Expected return = Σ(pᵢ × Rᵢ)
   - Portfolio return (2-asset) = w₁R₁ + w₂R₂
   - Portfolio variance (2-asset) = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρ₁₂σ₁σ₂
   - Std dev = √variance
   - When ρ = -1: perfect negative correlation, risk can be eliminated
   - When ρ = +1: no diversification benefit

2. **Performance Ratios (Ch 16):**
   - Sharpe = (Rp - Rf) / σp
   - Treynor = (Rp - Rf) / βp
   - Jensen's Alpha = Rp - [Rf + β(Rm - Rf)]
   - Information Ratio = (Rp - Rb) / Tracking Error
   - Tracking Error = σ(Rp - Rb)
   - HPR = (Income + End Value - Begin Value) / Begin Value
   - TWRR: geometric linking of sub-period returns = [(1+r₁)(1+r₂)...(1+rn)]^(1/n) - 1

3. **IA Fee Calculations (Ch 18):**
   - Maximum AUM-based fee: 2.5% of AUM per annum per client
   - Individual IA net worth: Rs. 5 lakh minimum
   - Non-individual IA net worth: Rs. 50 lakh minimum

---

### Tax Rates Reference (FY 2025-26)

Use rates from `/Users/nisarga/aiworkspace/nismresearch/NISM_QuestionBank/TaxRatesReference_FY2025-26.md`:
- Equity MF STCG (≤12 months): 20%
- Equity MF LTCG (>12 months): 12.5% above Rs. 1.25 lakh
- Debt MF (purchased on/after 1 Apr 2023): Slab rate (always STCG, no indexation)
- Dividend (IDCW): Taxed at slab rate, TDS 10% if >Rs. 5,000/year

---

### Quality Rules (from BEST_PRACTICES.md)

1. **ALWAYS read PDF chapter before generating questions** — never generate from memory
2. **Use exact plist topic names** as file prefixes: `XA Portfolio Construction and Evaluation`, `XA Operations Regulation and Ethics`
3. **Validate after every batch** — don't batch all validation to the end
4. **STOP when context gets full** — tell the user, update HANDOFF.md, hand off
5. **Caselet scenarios must be self-contained** — all data in the scenario text
6. **Caselet scenario text must be IDENTICAL** across all 5 linked questions
7. **Use `<b>` tags** for Scenario: and Question X of Y: labels
8. **Tax rates:** Use FY 2025-26 rates from TaxRatesReference_FY2025-26.md
9. **Explanation format:** Always include The Logic, The Trap, Cross-Exam Context, Distributor's Pro-Tip
10. **4 answer options** per question, exactly 1 correct

---

### SEBI Investment Advisers Regulations 2013 — Key Points to Test (Ch 18)

This is the **most important regulation** for the X-A exam. Ensure heavy coverage:

- **Registration:** Individual IA vs Non-individual IA (body corporate, partnership, LLP)
- **Qualification:** Postgraduate in specified fields OR CFA/CA/CS/ICWA + NISM X-A/X-B certification
- **Experience:** 5 years in financial services (relaxed if postgraduate + NISM)
- **Net worth:** Individual: Rs. 5 lakh. Non-individual: Rs. 50 lakh
- **Fee structure:** Fee-only model. Fixed fee OR AUM-based (max 2.5% of AUM p.a. per client, across all products). Flat fee or hourly fee or combination. No commission from product manufacturers.
- **Client agreement:** Mandatory, covering terms of engagement, fee, risk profiling, suitability
- **Risk profiling:** Mandatory before advice. Assess willingness + ability. Communicate to client. Review annually.
- **Suitability:** Advice must be suitable to client's risk profile. Documented reasoning.
- **Disclosure:** All conflicts of interest. All compensation from any source. Material interest in recommended products.
- **Advisory vs Distribution:** Cannot simultaneously act as adviser and distributor for the same client. Must choose one role. If IA firm also distributes, client-level segregation required.
- **Fiduciary duty:** Act in client's best interest. Duty of care, loyalty, and full disclosure.
- **Record keeping:** 5 years minimum. All advice, rationale, client communications.
- **Compliance officer:** Mandatory for non-individual IAs.
- **Audit:** Annual compliance audit by practicing CA.

---

### After This Session Completes — Final Cleanup

1. **Regenerate all 5 plists** using the standard Python pipeline:
   - `Topics.plist`: Add all 6 XA topics with question counts
   - `TopicsLite.plist`: ~30% of each topic's questions (minimum)
   - `ChapterArticles.plist`: 6 chapters, each with "All Topics" article
   - `QuestionToArticleNumber.plist`: All 500 XA questions mapped to article "1"
   - `ExamWeightages.plist`: Already done — just verify

2. **Run full validation:**
   - `plutil -lint` on all 5 plists
   - XML validity for all 500 XA files
   - ID-filename match
   - Cross-topic duplicate check
   - Plist topic alignment (6 ExamWeightages topics ↔ 6 file prefixes)
   - TopicsLite ratios ≥ 30%

3. **Update HANDOFF.md** with:
   - X-A marked as complete (500 Qs, 20 caselets, 6 topics)
   - Total question count updated (6,643 + 500 = 7,143 or actual count)
   - Move X-A from "In-Progress" to "Completed Exams" table
   - Note any issues for future sessions

4. **Update manifest.json** with X-A exam details

5. **Git commit** with message: "Phase 11a complete: NISM Series X-A Investment Adviser Level 1 — 500 questions across 6 topics including 20 caselets"

---

### What Comes After Phase 11a

After X-A is complete, the next exams to generate (Phase 11b+) would be:
- Series X-B: Investment Adviser (Level 2)
- Series II-A: RTA Corporate
- Series II-B: RTA Mutual Fund
- Series XV: Research Analyst
- And remaining exams from the 31-exam list in HANDOFF.md
