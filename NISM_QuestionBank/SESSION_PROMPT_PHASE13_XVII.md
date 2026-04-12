# Session Prompt for Phase 13 (continued) — Series XVII (Retirement Adviser)

**Date created:** April 12, 2026
**Pre-requisite:** Read HANDOFF.md first. 20 exams complete (8,643 questions). Series XV done. This session completes Phase 13 with Series XVII.

---

## Phase 13 (continued): Series XVII — Retirement Adviser (1 Exam, 9 Topics, 500 Questions)

### Context

| Parameter | Value |
|-----------|-------|
| **Exam** | NISM Series XVII: Retirement Adviser Certification Examination |
| **PDF** | `/Users/shivam/aiworkspace/nismresearch/study material/NISM Series XVII Retirement Adviser Certification Examination -June 2025 version_02.pdf` (283 pages) |
| **Question Bank** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/` |
| **Target** | 500 Qs across 9 topics. NO caselets. |
| **Difficulty** | Moderate — NPS-heavy (15% calc, 50% conceptual, 20% regulatory, 15% application) |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |
| **Total bank after this session** | ~9,143 questions across 207 topics, 21 exams |

### Exam Parameters

| Parameter | Value |
|-----------|-------|
| Actual exam questions | 100 |
| Duration | 2 hours |
| Pass % | 60% |
| Negative marking | 25% |
| Pool target | 500 |
| Caselet % | **0% (none)** |
| Question mix | 15% calc / 50% conceptual / 20% regulatory / 15% application |
| Mock test count | 100 |

---

## CRITICAL: Actual PDF Chapter-to-Topic Mapping (verified from PDF TOC)

The PDF has 9 chapters but they do NOT map 1:1 to the 9 topics in the order you might expect. Here is the **verified mapping**:

| # | Topic Name (EXACT plist key) | Actual PDF Chapter | PDF Pages | Qs |
|---|------------------------------|-------------------|-----------|:--:|
| 1 | Fundamental Concepts in Retirement Planning | Ch 1: Fundamental Concepts in Retirement Planning | 13-30 | 25 |
| 2 | Retirement Planning Process | Ch 3: Retirement Planning | 64-93 | 75 |
| 3 | Retirement Planning Products: National Pension System (NPS) | Ch 4: Retirement Planning Products: National Pension System | 94-191 | 100 |
| 4 | Retirement Planning Products: Other Investment Products | Ch 6: Other Investment Products | 157-182 | 40 |
| 5 | Retirement Planning Strategies | Ch 7: Retirement Planning Strategies | 183-200 | 60 |
| 6 | Financial Markets and Investment Products | Ch 2: Financial Markets and Investment Products | 31-63 | 50 |
| 7 | Evaluating Fund Performance and Fund Selection | Ch 5: Evaluating Fund Performance and Fund Selection | 192-? | 50 |
| 8 | Special Considerations in Retirement | Ch 8: Special Situations in Retirement | 201-214 | 50 |
| 9 | Regulations and Regulators | Ch 9: Regulations and Regulators | 215-283 | 50 |
| | **XVII Total** | | | **500** |

**Note:** Ch 4 (NPS) is ~98 pages — by far the largest chapter. Topic 3 (NPS) gets 100 questions accordingly (20% of pool).

---

## Execution Strategy

Generate all 500 questions using Python scripts via Bash tool (NOT the Write tool — it was denied for background agents last session). Use this pattern:

```python
python3 << 'ENDSCRIPT'
import os
base_dir = "/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions"
topic = "EXACT TOPIC NAME HERE"

def w(t, idx, q, opts, ci, logic, trap, cross, tip):
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += f'<QF id="{t}_{idx}" sectionNumber="" articleNumber="0" articleName="">\n    <question>\n'
    xml += f'        <text><![CDATA[{q}]]></text>\n        <answers>\n'
    for i, o in enumerate(opts):
        xml += f'            <answer correct="{"yes" if i==ci else "no"}"><text><![CDATA[{o}]]></text></answer>\n'
    xml += f'        </answers>\n        <explanation><text><![CDATA[**The Logic:** {logic}\n**The Trap:** {trap}\n**Cross-Exam Context:** {cross}\n**Distributor\'s Pro-Tip:** {tip}]]></text></explanation>\n    </question>\n</QF>'
    with open(os.path.join(base_dir, f"{t}_{idx}.xml"), 'w') as f: f.write(xml)

data = [
(1, "Question?", ["A","B","C","D"], 0, "logic", "trap", "cross", "tip"),
# ... more questions
]

for d in data:
    w(topic, d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7])
print(f"Written {len(data)} files for {topic}")
ENDSCRIPT
```

### Recommended Sub-Session Flow

**Step 1: Read all PDF chapters** (extract text for each chapter using fitz)

**Step 2: Generate by topic in batches** (read chapter -> generate questions -> write files)
- Batch 1: Topics 1, 6, 7 (smaller topics: 25+50+50 = 125 Qs) — Ch 1, Ch 2, Ch 5
- Batch 2: Topic 2 (75 Qs) — Ch 3
- Batch 3: Topic 3 (100 Qs — largest) — Ch 4 (NPS, 98 pages!)
- Batch 4: Topics 4, 5 (40+60 = 100 Qs) — Ch 6, Ch 7
- Batch 5: Topics 8, 9 (50+50 = 100 Qs) — Ch 8, Ch 9

**Step 3: Validate** all 500 XMLs

**Step 4: Update plists** (Topics, TopicsLite, ExamWeightages, ChapterArticles, QuestionToArticleNumber)

**Step 5: Update HANDOFF.md**, commit

---

## Content Focus Areas by Topic

### Topic 1: Fundamental Concepts in Retirement Planning (25 MCQs) — Ch 1 (pages 13-30)
- Need for retirement planning, life expectancy, inflation impact
- Basic financial concepts: time value of money, compounding, present value, future value
- Features of the retirement goal: long-term, inflation-adjusted, uncertain duration
- Advantages of starting early (power of compounding)
- Risk of underestimating retirement goals
- Emotional aspects of retirement
- **Mix:** 15 conceptual, 5 calculation (corpus needs, inflation adjustment), 5 application

### Topic 2: Retirement Planning Process (75 MCQs) — Ch 3 (pages 64-93)
- Evaluate client's current situation: income, expenses, assets, liabilities, insurance
- Setting the retirement goal: retirement age, desired lifestyle, income replacement ratio
- Estimating retirement corpus: inflation-adjusted needs, present value calculation
- Investing for accumulation: asset allocation, glide path, risk capacity vs tolerance
- Distribution stage planning: systematic withdrawal, annuity, bucket strategy
- Risks in distribution stage: longevity risk, inflation risk, sequence-of-returns risk
- Behavioral biases in retirement decisions
- Monitor and update the retirement plan
- **Mix:** 30 conceptual, 20 calculation (corpus estimation, SWP, gap analysis), 15 application, 10 regulatory

### Topic 3: NPS — National Pension System (100 MCQs) — Ch 4 (pages 94-191) — LARGEST
**This chapter is 98 pages. Read thoroughly. NPS details change frequently — use ONLY what's in the PDF.**
- NPS architecture: PFRDA, NPS Trust, CRAs (CAMS, KFintech, Protean), PFMs, Custodian, Trustee Bank
- Account types: Tier I (mandatory, restricted withdrawal), Tier II (voluntary, flexible)
- Investment choices: Active Choice (E/C/G/A asset classes), Auto Choice (Aggressive/Moderate/Conservative LC funds)
- Asset class limits: Equity max 75% (reducing with age), G-Sec, Corporate Bonds, Alternative max 5%
- Subscriber categories: Government, Corporate (Model 1/2), All Citizens, NRI
- Contribution limits: min Rs.500/contribution, Rs.1,000/year Tier I; Rs.250/year Tier II
- Tax benefits: Section 80CCD(1) up to 10% salary / 20% gross (within 80C Rs.1.5L limit); 80CCD(1B) additional Rs.50,000; 80CCD(2) employer up to 14% govt / 10% others (beyond 80C)
- Exit rules: at 60 — min 40% annuity, up to 60% lump sum tax-free; before 60 — min 80% annuity
- APY: unorganized sector, Rs.1,000-5,000/month pension, age 18-40
- eNPS: online enrollment, Aadhaar-based
- Partial withdrawal: after 3 years Tier I, max 25% own contribution, max 3 times, specified reasons
- Systematic Lump Sum Withdrawal (SLW) option at exit
- NPS Vatsalya (minor account)
- **Mix:** 40 conceptual, 25 regulatory, 20 calculation (asset allocation, tax benefit, corpus), 15 application

### Topic 4: Other Investment Products (40 MCQs) — Ch 6 (pages 157-182)
- Mandatory: EPF/EPS, Gratuity (15 days salary x years / 26, max limit)
- Voluntary: PPF, SCSS, PMVVY, Mutual Funds (ELSS, target-date), Insurance (term, endowment, ULIP), Annuities (immediate/deferred, fixed/variable, with/without return of purchase price)
- Reverse mortgage
- **Mix:** 25 conceptual, 5 calculation (gratuity, EPF), 5 regulatory, 5 application

### Topic 5: Retirement Planning Strategies (60 MCQs) — Ch 7 (pages 183-200)
- Bridging shortfall in retirement corpus
- Periodic investments: SIP, STP, top-up SIP
- Retirement income from multiple sources
- Bucket strategy (short/medium/long-term buckets)
- Tax advantages in different stages: accumulation vs distribution
- Automating investments
- **Mix:** 30 conceptual, 10 calculation, 10 application, 10 regulatory

### Topic 6: Financial Markets and Investment Products (50 MCQs) — Ch 2 (pages 31-63)
- Savings vs investment distinction
- Asset classes: equity, debt, gold, real estate — features and risks
- Risk types: market, credit, liquidity, inflation, interest rate, reinvestment
- Asset allocation for retirement: strategic vs tactical
- Financial system: banks, NBFCs, MFs, insurance, NPS
- Investment products: FD, RD, bonds, G-Secs, MF schemes, ETFs, REITs
- **Mix:** 30 conceptual, 10 calculation, 5 regulatory, 5 application

### Topic 7: Evaluating Fund Performance and Fund Selection (50 MCQs) — Ch 5 (pages 192-?)
- Returns: absolute, annualized, CAGR, XIRR
- Risk measures: standard deviation, beta, Sharpe, Sortino, Treynor, Jensen's alpha
- Benchmarking and tracking error
- Fund selection: past performance, expense ratio (TER), fund manager track record, AUM, consistency
- Matching investor needs to products
- **Mix:** 20 calculation (Sharpe, CAGR, alpha), 15 conceptual, 10 application, 5 regulatory

### Topic 8: Special Considerations in Retirement (50 MCQs) — Ch 8 (pages 201-214)
- Debt obligations in retirement: managing EMIs, loan restructuring
- Documents for retirement planning: will, nomination, POA, advance medical directive
- Healthcare planning: health insurance, critical illness, long-term care
- Estate planning basics
- **Mix:** 30 conceptual, 10 application, 5 calculation, 5 regulatory

### Topic 9: Regulations and Regulators (50 MCQs) — Ch 9 (pages 215-283) — SECOND LARGEST (~68 pages)
- PFRDA Act 2013: establishment, functions, powers
- Role of regulators: SEBI, IRDAI, RBI, EPFO, PFRDA
- Regulations for Retirement Advisers (this is extensive — new RA regulations)
- Code of conduct for retirement advisers
- Qualification requirements: NISM XVII certification
- Ethics beyond regulations
- Subscriber grievance redressal: IGMS, Ombudsman, SCORES
- **Mix:** 35 regulatory, 10 conceptual, 5 application

---

## Quality Rules

1. **ALWAYS read PDF chapter before generating questions** — NPS details in particular change frequently
2. **Use EXACT plist topic names** as file prefixes (copy-paste from the table above)
3. **Validate after every batch** using xml.etree.ElementTree
4. **NPS specifics:** Verify ALL contribution limits, asset allocation caps, tax sections, exit rules AGAINST the PDF — do not rely on memory
5. **Tax rates:** Use FY 2025-26 rates from the PDF itself
6. **Calculation questions:** Retirement corpus estimation, annuity calculations, NPS asset allocation math, gratuity computation — ALL must be verified
7. **No caselets** for XVII (unlike XV which had 18)
8. **Indian names, INR amounts** in all scenario-based questions

---

## File Naming Convention

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

## XML Format (same as XV — NO caselets needed)

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

---

## After Completion Checklist

1. Count files per topic — must match targets (total 500)
2. Run XML validation (4 answers, 1 correct, explanation with 4 sections)
3. Spot-check 2-3 questions per topic for factual accuracy against PDF
4. Update plists: Topics.plist, TopicsLite.plist, ExamWeightages.plist, ChapterArticles.plist, QuestionToArticleNumber.plist
5. Update HANDOFF.md — mark XVII complete, update totals to 9,143 Qs / 207 topics / 21 exams
6. Validate all plists with `plutil -lint`
7. Git commit with descriptive message

### After Phase 13 — Grand Total

| Completed | Exams | Questions | Topics |
|-----------|:-----:|:---------:|:------:|
| Before Phase 13 | 19 | 8,143 | 188 |
| Phase 13 (XV) | +1 | +500 | +10 |
| Phase 13 (XVII) | +1 | +500 | +9 |
| **After Phase 13** | **21** | **9,143** | **207** |

**Remaining after Phase 13:** 10 exams (X-C, XIX-A/B/C/D/E, XXI-A/B, XXIII, XXV-A)
