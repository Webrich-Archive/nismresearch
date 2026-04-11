# Session Prompt for Phase 11b Session 3 — Series X-B: Modules 10-12

**Date created:** April 10, 2026
**Pre-requisite:** Read HANDOFF.md first. Sessions 1-2 are complete (360 Qs across 13 topics). This is the final session for X-B.

---

## Phase 11b Session 3: Modules 10-12 — Estate Planning, Behavioral Finance, Comprehensive (5 Topics, ~140 Questions)

### Context

| Parameter | Value |
|-----------|-------|
| **Exam** | NISM Series X-B: Investment Adviser (Level 2) |
| **PDF** | `/Users/nisarga/aiworkspace/nismresearch/study material/NISM Series-X-B_Investment Adviser Level 2.pdf` (453 pages) |
| **Sessions 1-2 Done** | 360 Qs across 13 topics (Modules 7-9). Total bank: 7,503 files. |
| **This Session Target** | ~140 Qs across 5 topics + 8 caselets (40 caselet Qs) |
| **Difficulty** | Hard — mix of conceptual, application, and calculation |
| **poppler not installed** | Use `python3` with `import fitz` (PyMuPDF) to read PDF pages |

### PDF Chapter Mapping for Session 3

| Chapter | Title | Pages | Plist Topic(s) |
|---------|-------|-------|----------------|
| Ch 14 | Basics of Estate Planning | pp 329-345 | Regulatory and Ethical Aspects |
| Ch 15 | Tools for Estate Planning | pp 346-392 | Regulatory and Ethical Aspects |
| Ch 16 | Basics of Behavioural Finance | pp 394-403 | Behavioral Finance |
| Ch 17 | Behavioural Finance in Practice | pp 404-409 | Behavioral Finance |
| Ch 18 | Risk Profiling for Investors | pp 411-419 | Risk Profiling |
| Ch 19 | Comparison of Products Across Categories | pp 420-431 | Product Comparison |
| Ch 20 | Case Studies | pp 432-453 | Case Studies |

**IMPORTANT:** Ch 14-15 together form Module 10 (Estate Planning) and map to the plist topic "Regulatory and Ethical Aspects". Ch 15 is the largest chapter (~47 pages) covering wills, trusts, POA, succession laws, HUF, nomination, joint holdings — read carefully.

---

### Question Distribution Plan

| # | Topic Name (EXACT plist key) | PDF Chapters | Pool Qs | Standalone MCQs | Caselets | Caselet Qs |
|---|------------------------------|-------------|:-------:|:---------------:|:--------:|:----------:|
| 14 | Regulatory and Ethical Aspects | Ch 14-15 | 25 | 25 | 0 | 0 |
| 15 | Behavioral Finance | Ch 16-17 | 25 | 25 | 0 | 0 |
| 16 | Risk Profiling | Ch 18 | 35 | 25 | 2 | 10 |
| 17 | Product Comparison | Ch 19 | 25 | 15 | 2 | 10 |
| 18 | Case Studies | Ch 20 | 30 | 10 | 4 | 20 |
| | **Session 3 Total** | | **140** | **100** | **8** | **40** |

---

### Execution Steps

**Step 1: Read Ch 14-15 (pp 329-392) — Estate Planning**
```python
import fitz
doc = fitz.open('/Users/nisarga/aiworkspace/nismresearch/study material/NISM Series-X-B_Investment Adviser Level 2.pdf')
for i in range(328, 392):
    text = doc[i].get_text()
    print(f'=== PAGE {i+1} ===')
    print(text)
```

Key content for **Regulatory and Ethical Aspects**:
- Estate planning definition, objectives, importance
- Will: types (privileged, unprivileged, joint, mutual, conditional), essential elements (testator, executor, beneficiary, witness), registration (optional but recommended), revocation, probate
- Testamentary vs intestate succession
- Hindu Succession Act 1956 (amended 2005): Class I heirs, simultaneous death, coparcenary rights for daughters
- Indian Succession Act 1925: applicable to Christians, Parsis, Jews
- Muslim personal law: Sunni vs Shia, 1/3 limit on bequests
- Trust: private vs public, revocable vs irrevocable, Indian Trusts Act 1882 (private), Indian Trust Act applies only to trusts of movable/immovable property
- Power of Attorney: general vs specific, registered vs unregistered, revocation
- HUF: formation, karta, coparcener vs member, partition
- Nomination: effect (custodial, not ownership), various statutes (Companies Act, Insurance Act, NPS, MF, bank accounts)
- Joint holdings: joint tenancy vs tenancy in common, survivorship
- Guardianship: natural guardian, testamentary guardian, Hindu Minority and Guardianship Act

**Step 2: Read Ch 16-17 (pp 394-409) — Behavioral Finance**
```python
for i in range(393, 409):
    text = doc[i].get_text()
    ...
```

Key content for **Behavioral Finance**:
- Traditional vs behavioral finance
- Heuristics and biases: representativeness, availability, anchoring and adjustment
- Prospect theory (Kahneman & Tversky): loss aversion, diminishing sensitivity, reference point
- Mental accounting (Thaler)
- Overconfidence bias, confirmation bias, hindsight bias
- Herding behavior, disposition effect (selling winners too early, holding losers too long)
- Framing effect, status quo bias, endowment effect
- Regret aversion, self-attribution bias
- Emotional vs cognitive biases
- Adviser's role: debiasing techniques, structured decision-making, systematic investment plans

**Step 3: Read Ch 18 (pp 411-419) — Risk Profiling**
```python
for i in range(410, 419):
    text = doc[i].get_text()
    ...
```

Key content for **Risk Profiling**:
- Risk tolerance, risk capacity, risk perception
- Risk profiling questionnaires: design, scoring, interpretation
- Factors affecting risk tolerance: age, income, wealth, time horizon, financial goals, knowledge, past experience
- Risk profiling in practice: conservative, moderate, aggressive profiles
- Asset allocation based on risk profile
- Rebalancing frequency and triggers
- Suitability assessment: matching products to risk profile
- SEBI guidelines on risk profiling for investment advisers
- Psychometric testing approaches

**Step 4: Read Ch 19 (pp 420-431) — Product Comparison**
```python
for i in range(419, 431):
    text = doc[i].get_text()
    ...
```

Key content for **Product Comparison**:
- Comparison across: returns, risk, liquidity, taxation, lock-in, minimum investment
- Products: equity, debt, MFs, insurance, NPS, PPF, SCSS, FDs, gold, real estate, REIT/InvIT
- Risk-return trade-off across product categories
- Liquidity comparison (lock-in periods, exit loads, settlement cycles)
- Tax efficiency comparison (EEE, EET, ETE regimes)
- Suitability for different life stages and goals
- Comparison tables and frameworks

**Step 5: Read Ch 20 (pp 432-453) — Case Studies**
```python
for i in range(431, 453):
    text = doc[i].get_text()
    ...
```

Key content for **Case Studies**:
- Comprehensive financial planning case studies
- Goal-based investment planning
- Retirement corpus calculation
- Insurance need analysis
- Tax planning across life stages
- Estate planning integration
- Portfolio construction for various client profiles
- Multi-objective optimization (retirement + child education + house purchase)

**Step 6: Generate questions for all 5 topics**
Launch agents in parallel (max 3-4 at a time). For each agent:
- Provide the EXACT plist topic name for file prefixes
- Provide extracted key facts from the PDF
- Specify file count (MCQs + caselets)

**Step 7: Validate all files**
After each batch:
1. Count files per topic
2. XML validation (parse, 4 answers, 1 correct, ID-filename match)
3. Spot-check 2-3 questions per topic
4. Verify caselet scenario consistency

**Step 8: Update HANDOFF.md, update plists, and commit**

---

### File Naming Convention

Use the **EXACT plist topic name** as prefix:

```
Regulatory and Ethical Aspects_1.xml through _25.xml

Behavioral Finance_1.xml through _25.xml

Risk Profiling_1.xml through _25.xml
Risk Profiling_C1_1.xml through _C2_5.xml

Product Comparison_1.xml through _15.xml
Product Comparison_C1_1.xml through _C2_5.xml

Case Studies_1.xml through _10.xml
Case Studies_C1_1.xml through _C4_5.xml
```

---

### XML Formats

**Regular MCQ:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<QF id="Regulatory and Ethical Aspects_1" sectionNumber="" articleNumber="0" articleName="">
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
<QF id="Risk Profiling_C1_1" sectionNumber="" articleNumber="0" articleName="">
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

### Content Focus Areas by Topic

**Topic 14: Regulatory and Ethical Aspects (25 MCQs)**
- Estate planning: definition, objectives, when needed (marriage, birth, retirement, business succession)
- Wills: types (privileged vs unprivileged), essentials, registration, revocation, probate, codicil
- Succession laws: Hindu Succession Act (Class I heirs, coparcenary, daughter's rights post-2005 amendment), Indian Succession Act, Muslim personal law
- Testamentary vs intestate succession
- Trusts: private vs public, revocable vs irrevocable, trustee duties, Indian Trusts Act 1882
- Power of Attorney: general vs special, registered POA, revocation on death/insanity
- HUF: formation, karta powers, coparcener rights, partition (total vs partial)
- Nomination: custodial role (not ownership transfer), nominee vs legal heir distinction
- Joint holdings: survivorship, joint tenancy vs tenancy in common
- Guardianship: natural guardian (Hindu Minority and Guardianship Act)
- Question mix: 5 conceptual, 15 regulatory/legal, 5 application

**Topic 15: Behavioral Finance (25 MCQs)**
- Traditional finance assumptions vs behavioral finance critique
- Cognitive biases: anchoring, representativeness, availability, confirmation, overconfidence, hindsight
- Emotional biases: loss aversion, regret aversion, endowment effect, status quo bias
- Prospect theory: reference point, loss aversion (losses hurt ~2x gains), diminishing sensitivity, S-shaped value function
- Mental accounting: segregation of money into mental "buckets"
- Herding: following crowd, information cascades
- Disposition effect: selling winners too early, holding losers
- Framing: how presentation affects decisions (gain vs loss frame)
- Self-attribution: attributing success to skill, failure to luck
- Adviser's role: identifying biases, using debiasing techniques, structured processes
- Question mix: 20 conceptual, 5 application (identify bias from scenario)

**Topic 16: Risk Profiling (35 Qs = 25 MCQs + 2 caselets)**
- Risk tolerance vs risk capacity vs risk perception (required risk)
- Factors: age, income stability, net worth, time horizon, financial goals, dependents, knowledge/experience
- Risk profiling tools: questionnaires, psychometric tests, scoring methodologies
- Risk categories: conservative, moderately conservative, moderate, moderately aggressive, aggressive
- Asset allocation models based on risk profile
- Suitability: matching products/allocation to profile, SEBI IA Regulations requirements
- Rebalancing: calendar-based vs threshold-based, tax implications of rebalancing
- Behavioral aspects of risk: recency bias in risk assessment, overconfidence
- **Caselet 1:** Client risk profiling scenario — determine profile from answers, recommend allocation
- **Caselet 2:** Life event changes (retirement, inheritance) requiring risk profile reassessment
- Question mix: 8 calculation (asset allocation %), 10 conceptual, 5 regulatory, 2 application

**Topic 17: Product Comparison (25 Qs = 15 MCQs + 2 caselets)**
- Returns comparison: historical returns across equity, debt, gold, real estate, FDs
- Risk comparison: standard deviation, beta, credit risk, interest rate risk, liquidity risk by product
- Liquidity: settlement cycles (T+1 equity, T+2 MF, FD premature penalty, insurance surrender, NPS lock-in)
- Taxation: comparative tax treatment (EEE/EET/ETE), capital gains rates across products
- Lock-in periods: ELSS 3yr, tax FD 5yr, NPS till 60, PPF 15yr, insurance varies, SCSS 5yr
- Minimum investment: SIP Rs.500, NPS Rs.1,000, SCSS Rs.1,000, PPF Rs.500
- Suitability mapping: which products for which goals/time horizons/risk profiles
- **Caselet 1:** Young professional with multiple goals — recommend product mix
- **Caselet 2:** Retiree needing regular income — compare products for income generation
- Question mix: 5 calculation, 8 conceptual, 2 application

**Topic 18: Case Studies (30 Qs = 10 MCQs + 4 caselets)**
- Comprehensive financial planning: income analysis, goal identification, gap analysis
- Retirement planning: corpus computation, inflation adjustment, annuity vs SWP
- Child's education/marriage funding: future value computation, investment selection
- Insurance need analysis: HLV method, income replacement, expense method
- Tax-efficient portfolio construction
- Estate planning integration with financial plan
- **Caselet 1:** Young couple (age 30) — retirement + child education + house purchase planning
- **Caselet 2:** Mid-career professional (age 45) — retirement gap analysis and catch-up strategy
- **Caselet 3:** Pre-retiree (age 55) — decumulation strategy, NPS annuity vs MF SWP
- **Caselet 4:** HNI (age 50) — multi-objective with estate planning, trust, tax optimization
- Question mix: 10 calculation-heavy MCQs (FV/PV, corpus, insurance need, SWP)

---

### Quality Rules (from BEST_PRACTICES.md)

1. **ALWAYS read PDF chapter before generating questions** — never generate from memory
2. **Use exact plist topic names** as file prefixes
3. **Validate after every batch** — don't batch all validation to the end
4. **STOP when context gets full** — tell the user, update HANDOFF.md, hand off
5. **Caselet scenarios must be self-contained** — all data in the scenario text
6. **Caselet scenario text must be IDENTICAL** across all 5 linked questions
7. **Use `<b>` tags** for Scenario: and Question X of Y: labels
8. **Explanation format:** Always include The Logic, The Trap, Cross-Exam Context, Distributor's Pro-Tip
9. **4 answer options** per question, exactly 1 correct
10. **Indian names, INR amounts, Indian regulatory context**
11. **Calculations must be verified** — run the math, don't trust agent computations blindly
12. **Case Studies caselets are comprehensive** — integrate taxation, insurance, investment, estate planning concepts from earlier modules

---

### After Session 3 — Checklist

1. Count files per topic — match targets (140 total)
2. Run XML validation (parse, structure, ID-filename match)
3. Spot-check 3-5 questions per topic for factual accuracy against PDF
4. Update HANDOFF.md with Session 3 progress
5. **Update plists:** Add 5 new topics to Topics.plist, TopicsLite.plist, ChapterArticles.plist, QuestionToArticleNumber.plist
6. **Verify ExamWeightages.plist:** 18 topics should match, weightages sum to 100%
7. Run comprehensive validation across all 500 X-B questions
8. Git commit with descriptive message

---

### After Session 3 — Grand Total for X-B

| Session | Module(s) | Topics | MCQs | Caselets | Caselet Qs | Total |
|---------|-----------|:------:|:----:|:--------:|:----------:|:-----:|
| 1 | 7-8 (Insurance + Retirement) | 6 | 140 | 6 | 30 | 170 |
| 2 | 9 (Taxation) | 7 | 160 | 6 | 30 | 190 |
| 3 | 10-12 (Estate + Behavioral + Comprehensive) | 5 | 100 | 8 | 40 | 140 |
| **Total** | **7-12** | **18** | **400** | **20** | **100** | **500** |

Grand total question bank after Session 3: 7,143 (completed exams) + 500 (X-B) = **7,643 questions**.

---

### Plist Update Instructions (Session 3 Final Step)

After all 500 X-B questions are generated, update the following plists:

1. **Topics.plist:** Add 18 topic entries for X-B (topic name, question count)
2. **TopicsLite.plist:** Add 18 entries with ≥30% ratio for free tier
3. **ChapterArticles.plist:** Add 18 chapters with single "All Topics" article each
4. **QuestionToArticleNumber.plist:** Add 500 entries mapping each question ID to article "1"
5. **ExamWeightages.plist:** Already has 18 topics — verify file prefixes match exactly

Run validation:
```bash
plutil -lint *.plist
python3 validate_all.py  # comprehensive XML + plist validation
```
