# Session Prompt for Phase 11b Session 2 — Series X-B: Taxation (Module 9)

**Date created:** April 10, 2026
**Pre-requisite:** Read HANDOFF.md first. Session 1 is complete (170 Qs across 6 topics). This continues the X-B exam.

---

## Phase 11b Session 2: Module 9 — Taxation (7 Topics, ~190 Questions)

### Context

| Parameter | Value |
|-----------|-------|
| **Exam** | NISM Series X-B: Investment Adviser (Level 2) |
| **PDF** | `/Users/nisarga/aiworkspace/nismresearch/study material/NISM Series-X-B_Investment Adviser Level 2.pdf` (453 pages) |
| **Tax Rates** | `/Users/nisarga/aiworkspace/nismresearch/NISM_QuestionBank/TaxRatesReference_FY2025-26.md` |
| **Module 9 Weightage** | 20 marks out of 150 |
| **Session 1 Done** | 170 Qs across 6 topics (Modules 7-8). Total bank: 7,313 files. |
| **This Session Target** | ~190 Qs across 7 topics + 6 caselets (30 caselet Qs) |
| **Difficulty** | Hard — CALCULATION HEAVY |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |

### PDF Chapter Mapping for Session 2

| Chapter | Title | Pages | Plist Topic(s) |
|---------|-------|-------|----------------|
| Ch 7 | Concepts of Taxation | pp 135-171 | Tax Framework and Key Concepts; Income, Residential Status, Five Heads of Income; Exempt Incomes, Deductions, Rebates; Clubbing, Set-Off and Carry Forward of Losses; DTAA Provisions |
| Ch 8 | Capital Gains | pp 173-195 | Analysis of Equity and Debt Instruments |
| Ch 9 | Income from Other Sources | pp 196-202 | Analysis of Equity and Debt Instruments |
| Ch 10 | Taxation of Debt Products | pp 203-222 | Taxation of Debt and Equity Products |
| Ch 11 | Taxation of Equity Products | pp 223-258 | Taxation of Debt and Equity Products |
| Ch 12 | Taxation of Other Products | pp 259-291 | Analysis of Equity and Debt Instruments (ESOPs, SGBs, NPS tax, derivatives) |
| Ch 13 | Tax Provisions for Special Cases | pp 292-326 | Analysis of Equity and Debt Instruments (bonus shares, buyback, rights, M&A, stock lending) |

**IMPORTANT:** Ch 7 is the largest chapter (~37 pages) and maps to FIVE different plist topics. Read it carefully and split content accurately across topics.

---

### Question Distribution Plan

| # | Topic Name (EXACT plist key) | PDF Chapters | Pool Qs | Standalone MCQs | Caselets | Caselet Qs |
|---|------------------------------|-------------|:-------:|:---------------:|:--------:|:----------:|
| 7 | Tax Framework and Key Concepts | Ch 7 (§7.1-7.6 partial, §7.12-7.18) | 35 | 25 | 2 | 10 |
| 8 | Income, Residential Status, Five Heads of Income | Ch 7 (§7.3-7.6) | 25 | 25 | 0 | 0 |
| 9 | Exempt Incomes, Deductions, Rebates | Ch 7 (§7.9-7.11) | 25 | 25 | 0 | 0 |
| 10 | Clubbing, Set-Off and Carry Forward of Losses | Ch 7 (§7.7-7.8) | 25 | 25 | 0 | 0 |
| 11 | Taxation of Debt and Equity Products | Ch 10-11 | 25 | 15 | 2 | 10 |
| 12 | DTAA Provisions | Ch 7 (§7.15) | 15 | 15 | 0 | 0 |
| 13 | Analysis of Equity and Debt Instruments | Ch 8-9, 12-13 | 40 | 30 | 2 | 10 |
| | **Session 2 Total** | | **190** | **160** | **6** | **30** |

---

### Execution Steps

**Step 1: Read Ch 7 (pp 135-171) — Concepts of Taxation**
This is the largest and most important chapter. Read it fully using PyMuPDF:
```python
import fitz
doc = fitz.open('/Users/nisarga/aiworkspace/nismresearch/study material/NISM Series-X-B_Investment Adviser Level 2.pdf')
for i in range(134, 171):
    text = doc[i].get_text()
    print(f'=== PAGE {i+1} ===')
    print(text)
```

Extract key facts for these 5 topics from Ch 7:
- **Tax Framework and Key Concepts** (§7.1-7.2, §7.12-7.18): Framework, key concepts, gross total income, total income, computation of tax payable, taxation regime (old vs new), maximum marginal rate, effective rate of tax
- **Income, Residential Status, Five Heads of Income** (§7.3-7.6): Definition of income, residential status (ROR, RNOR, NR — 182-day rule, 60+365 day rule, India income test), scope of income for each status, five heads (salary, house property, PGBP, capital gains, other sources)
- **Exempt Incomes, Deductions, Rebates** (§7.9-7.11): Exempt incomes list, deductions under Chapter VI-A (80C, 80CCC, 80CCD, 80D, 80E, 80G, 80TTA, 80TTB), rebate under 87A
- **Clubbing, Set-Off and Carry Forward of Losses** (§7.7-7.8): Clubbing of spouse income (gift to spouse, minor child income), set-off rules (intra-head, inter-head), carry forward (business loss 8 years, capital loss 8 years, house property loss unlimited carry forward but set-off limited to Rs. 2 lakh)
- **DTAA Provisions** (§7.15): Double Tax Avoidance Agreement, residence tie-breaker, tax credit methods (exemption vs credit), POEM (Place of Effective Management)

**Step 2: Read Ch 8-9 (pp 173-202) — Capital Gains + Income from Other Sources**
```python
for i in range(172, 202):
    text = doc[i].get_text()
    ...
```
Key content: Capital asset definition, types (short-term vs long-term), holding periods, transfer definition, computation (full value of consideration, cost of acquisition, cost of improvement, indexation with CII), exemptions. Income from other sources: dividend, interest on securities, gifts.

**Step 3: Read Ch 10-11 (pp 203-258) — Taxation of Debt and Equity Products**
```python
for i in range(202, 258):
    text = doc[i].get_text()
    ...
```
Key content: Debt products (bank deposits, bonds, debentures, MFs post-Apr 2023), equity products (listed/unlisted shares, preference shares, warrants, MFs, derivatives, bonus stripping). Use TaxRatesReference_FY2025-26.md for verified rates.

**Step 4: Read Ch 12-13 (pp 259-326) — Taxation of Other Products + Special Cases**
```python
for i in range(258, 326):
    text = doc[i].get_text()
    ...
```
Key content: ESOPs, SGBs, NPS, REIT, InvIT, AIF, ETFs, life insurance tax, reverse mortgage tax, derivatives tax, bonus shares, share split/consolidation, buyback, rights issues, M&A, stock lending, preference share conversion, segregated portfolios, MF scheme consolidation/winding up. Annexures: Tax rate tables, exemptions list, CII table.

**Step 5: Generate questions for all 7 topics**
Launch agents in parallel (max 3-4 at a time to avoid context issues). For each agent:
- Provide the EXACT plist topic name for file prefixes
- Provide extracted key facts from the PDF
- Specify file count (MCQs + caselets)
- Include tax rates from TaxRatesReference

**Step 6: Validate all files**
After each batch:
1. Count files per topic
2. XML validation (parse, 4 answers, 1 correct, ID-filename match)
3. Spot-check 2-3 questions per topic
4. Verify caselet scenario consistency

**Step 7: Update HANDOFF.md and commit**

---

### File Naming Convention

Use the **EXACT plist topic name** as prefix:

```
Tax Framework and Key Concepts_1.xml through _25.xml
Tax Framework and Key Concepts_C1_1.xml through _C2_5.xml

Income, Residential Status, Five Heads of Income_1.xml through _25.xml

Exempt Incomes, Deductions, Rebates_1.xml through _25.xml

Clubbing, Set-Off and Carry Forward of Losses_1.xml through _25.xml

Taxation of Debt and Equity Products_1.xml through _15.xml
Taxation of Debt and Equity Products_C1_1.xml through _C2_5.xml

DTAA Provisions_1.xml through _15.xml

Analysis of Equity and Debt Instruments_1.xml through _30.xml
Analysis of Equity and Debt Instruments_C1_1.xml through _C2_5.xml
```

---

### XML Formats

**Regular MCQ:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="Tax Framework and Key Concepts_1" sectionNumber="" articleNumber="0" articleName="">
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
<QF id="Tax Framework and Key Concepts_C1_1" sectionNumber="" articleNumber="0" articleName="">
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

### Key Tax Rates Reference (FY 2025-26)

**ALWAYS cross-check with** `/Users/nisarga/aiworkspace/nismresearch/NISM_QuestionBank/TaxRatesReference_FY2025-26.md`

| Category | Holding Period | Rate |
|----------|---------------|------|
| Equity MF STCG | ≤12 months | 20% (u/s 111A) |
| Equity MF LTCG | >12 months | 12.5% (u/s 112A) above Rs. 1.25 lakh |
| Debt MF (post Apr 2023) | Any | Slab rate (always STCG, no indexation) |
| Debt MF (pre Apr 2023) LTCG | >24 months | 12.5% without indexation |
| Gold/International/FOF STCG | ≤24 months | Slab rate |
| Gold/International/FOF LTCG | >24 months | 12.5% without indexation |
| Listed equity shares STCG | ≤12 months | 20% (with STT) |
| Listed equity shares LTCG | >12 months | 12.5% above Rs. 1.25 lakh (with STT) |
| Unlisted equity shares STCG | ≤24 months | Slab rate |
| Unlisted equity shares LTCG | >24 months | 12.5% (u/s 112) |
| Listed REIT/InvIT STCG | ≤12 months | 20% (with STT) |
| Listed REIT/InvIT LTCG | >12 months | 12.5% above Rs. 1.25 lakh |
| SGBs at maturity | Any | EXEMPT |
| SGB sold before maturity (listed) | >12 months | 12.5% without indexation |
| Dividend (all) | N/A | Slab rate, TDS 10% if >Rs. 5,000 |
| NPS lump sum at exit (60%) | N/A | EXEMPT |
| NPS annuity income | N/A | Slab rate |

**Additional rates from PDF (verify from Ch 7 Annexure 1, pp 313-316):**
- New tax regime slabs (default from FY 2024-25):
  - Up to Rs. 4 lakh: Nil
  - Rs. 4-8 lakh: 5%
  - Rs. 8-12 lakh: 10%
  - Rs. 12-16 lakh: 15%
  - Rs. 16-20 lakh: 20%
  - Rs. 20-24 lakh: 25%
  - Above Rs. 24 lakh: 30%
- Standard deduction: Rs. 75,000 (new regime), Rs. 50,000 (old regime)
- Section 80C limit: Rs. 1.5 lakh
- Section 80D (health insurance): Rs. 25,000 (self), Rs. 50,000 (senior citizen)
- Section 87A rebate: Income up to Rs. 7 lakh → nil tax (new regime)
- House property loss set-off: limited to Rs. 2 lakh per year
- Business loss carry forward: 8 assessment years
- Capital loss carry forward: 8 assessment years
- Speculation loss: can only be set off against speculation income, carry forward 4 years
- Cost Inflation Index base year: 2001-02

---

### Content Focus Areas by Topic

**Topic 7: Tax Framework and Key Concepts (35 Qs = 25 MCQs + 2 caselets)**
- Old vs New tax regime comparison (slabs, deductions allowed/disallowed)
- Computation of total income (steps: gross total income → deductions → total income → tax)
- Maximum marginal rate of tax
- Effective rate of tax vs nominal rate
- Assessment year vs Previous year
- PAN requirements
- Advance tax, TDS, self-assessment tax
- **Caselet 1:** Individual computing tax liability under both regimes
- **Caselet 2:** Investment adviser comparing old vs new regime for a client with multiple income sources

**Topic 8: Income, Residential Status, Five Heads of Income (25 MCQs)**
- Residential status determination (182 days, 60+365 days, exceptions for Indian citizens/PIO leaving India)
- ROR vs RNOR vs NR — scope of taxable income for each
- Salary income: basic, HRA exemption calculation, standard deduction
- House property: gross annual value, municipal taxes, 30% standard deduction, interest on borrowed capital (Rs. 2 lakh limit for self-occupied)
- PGBP: business income, professional income, presumptive taxation (44AD, 44ADA)
- Capital gains: covered in detail under Topic 13
- Other sources: covered in detail under Topic 13

**Topic 9: Exempt Incomes, Deductions, Rebates (25 MCQs)**
- Exempt incomes: agricultural income (partial integration), HUF income, dividends from Indian companies (now taxable), EPF withdrawal after 5 years, PPF interest/maturity
- Section 80C investments (PPF, ELSS, EPF, life insurance premium, NSC, tuition fees, housing loan principal)
- Section 80CCC (pension fund contribution)
- Section 80CCD (NPS — covered in Session 1 but test tax angles here)
- Section 80D (health insurance premium)
- Section 80E (education loan interest — no limit, 8 years)
- Section 80G (donations — 100% or 50% deduction, with/without limit)
- Section 80TTA (savings account interest: Rs. 10,000 for non-seniors)
- Section 80TTB (deposits interest: Rs. 50,000 for senior citizens)
- Section 87A rebate

**Topic 10: Clubbing, Set-Off and Carry Forward of Losses (25 MCQs)**
- Clubbing: income of spouse from concern where other spouse has substantial interest
- Clubbing: income from assets transferred to spouse without adequate consideration
- Clubbing: minor child income (Rs. 1,500 exemption per child)
- Set-off: intra-head (within same head) and inter-head (between heads)
- Rules: capital loss only against capital gain, STCL against STCG and LTCG, LTCL only against LTCG
- House property loss: max Rs. 2 lakh set-off against other income
- Carry forward: business loss 8 years, capital loss 8 years (only if return filed on time), speculation 4 years
- Unabsorbed depreciation: unlimited carry forward

**Topic 11: Taxation of Debt and Equity Products (25 Qs = 15 MCQs + 2 caselets)**
- Debt products: bank FD, RBI bonds, corporate bonds/NCDs, debentures, MFs
- Post-Apr 2023 debt MF rule: always STCG at slab rate, no indexation
- Market Linked Debentures (MLDs): Section 50AA treatment
- Equity products: listed vs unlisted shares, STCG/LTCG rates, STT implications
- Preference shares: treated same as shares for holding period
- Share warrants: treated as options
- Mutual fund taxation: equity vs debt vs hybrid
- Derivatives: speculative vs non-speculative business income
- Bonus stripping: Section 94(8)
- **Caselet 1:** Investor with portfolio of equity MFs, debt MFs, and FDs — compute tax on each
- **Caselet 2:** Comparison of pre-tax vs post-tax returns across debt/equity/hybrid products

**Topic 12: DTAA Provisions (15 MCQs)**
- Purpose of DTAA (avoid double taxation)
- Methods: exemption method vs credit method
- Residence tie-breaker tests
- POEM (Place of Effective Management) — determines residence of company
- Tax Information Exchange Agreements (TIEA)
- Section 90 (countries with DTAA) vs Section 91 (countries without DTAA)
- Most Favoured Nation (MFN) clause
- Tax Residency Certificate (TRC) requirement

**Topic 13: Analysis of Equity and Debt Instruments (40 Qs = 30 MCQs + 2 caselets)**
- Capital asset definition and exclusions (personal effects, agricultural land)
- Short-term vs long-term holding periods (12m for listed equity/MF/REIT/InvIT, 24m for unlisted/others)
- Cost of acquisition: actual cost, fair market value, cost to previous owner
- Indexation: Cost Inflation Index, indexed cost = cost × (CII of transfer year / CII of acquisition year)
- Transfer: sale, exchange, relinquishment, compulsory acquisition
- ESOPs: perquisite value + capital gains (two-stage taxation)
- SGBs: interest taxable, maturity exempt, transfer before maturity rules
- NPS: EET regime, 60% lump sum exempt, annuity taxable
- AIF: Category I/II pass-through, Category III max marginal rate
- Bonus shares: cost of acquisition nil, holding period from allotment
- Share split/consolidation: cost apportioned, original date counts
- Buyback: Section 115QA (company pays buyback tax), shareholder exempt
- Rights issues: cost = amount paid, holding from allotment date. Renouncement: STCG for original holder
- M&A: Section 47 exemptions (no transfer if shareholders get shares in resulting company)
- Stock lending: return of shares not a transfer
- Segregated portfolios: cost apportioned by NAV ratio
- MF scheme consolidation: not a transfer if within same MF
- **Caselet 1:** Investor selling various securities (shares, MFs, bonds) — compute capital gains for each
- **Caselet 2:** ESOP lifecycle — grant → vesting → exercise → sale, computing perquisite + capital gains

---

### Quality Rules (from BEST_PRACTICES.md)

1. **ALWAYS read PDF chapter before generating questions** — never generate from memory
2. **Use exact plist topic names** as file prefixes
3. **Validate after every batch** — don't batch all validation to the end
4. **STOP when context gets full** — tell the user, update HANDOFF.md, hand off
5. **Caselet scenarios must be self-contained** — all data in the scenario text
6. **Caselet scenario text must be IDENTICAL** across all 5 linked questions
7. **Use `<b>` tags** for Scenario: and Question X of Y: labels
8. **Tax rates:** Use FY 2025-26 rates from TaxRatesReference_FY2025-26.md AND verify against PDF Annexure 1
9. **Explanation format:** Always include The Logic, The Trap, Cross-Exam Context, Distributor's Pro-Tip
10. **4 answer options** per question, exactly 1 correct
11. **Indian names, INR amounts, Indian regulatory context**
12. **Calculations must be verified** — run the math, don't trust agent computations blindly

---

### After Session 2 — Checklist

1. Count files per topic — match targets (190 total)
2. Run XML validation (parse, structure, ID-filename match)
3. Spot-check 3-5 questions per topic for factual accuracy against PDF
4. Verify all tax rates used match TaxRatesReference and PDF Annexure
5. Update HANDOFF.md with Session 2 progress
6. Git commit with descriptive message
7. **DO NOT regenerate plists** — wait for Session 3

---

### After Session 2 — What Remains (Session 3)

Session 3 covers Modules 10-12 (Estate Planning + Behavioral Finance + Comprehensive):

| # | Topic | Chapters | Target Qs |
|---|-------|----------|:---------:|
| 14 | Regulatory and Ethical Aspects | Ch 14-15 | 25 |
| 15 | Behavioral Finance | Ch 16-17 | 25 |
| 16 | Risk Profiling | Ch 18 | 35 (25 MCQ + 2 caselets) |
| 17 | Product Comparison | Ch 19 | 25 (15 MCQ + 2 caselets) |
| 18 | Case Studies | Ch 20 | 30 (10 MCQ + 4 caselets) |
| | **Session 3 Total** | | **140** |

Grand total after all 3 sessions: 170 + 190 + 140 = **500 questions** with **20 caselets (100 caselet Qs)**.
