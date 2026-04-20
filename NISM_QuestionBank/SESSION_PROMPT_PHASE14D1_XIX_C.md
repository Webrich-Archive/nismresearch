# Session Prompt for Phase 14D-1 — Series XIX-C: AIF Managers (All Categories)

**Date created:** April 19, 2026
**Pre-requisite:** Read HANDOFF.md first. **27 exams complete (11,393 questions)**. Phase 14C-2 (XXI-B Portfolio Managers) done. This session tackles XIX-C only — the **AIF Managers (All Categories)** exam, the FOUNDATION exam for the AIF Manager track.

---

## Exam Overview

| Parameter | Value |
|-----------|-------|
| **Exam name** | NISM-Series-XIX-C: Alternative Investment Fund Managers Certification Examination |
| **Exam code** | XIX-C |
| **Questions to generate** | 500 |
| **Topics** | 15 (mapped to syllabus chapters) |
| **PDF** | `FINAL_Series-XIX-C_AIF Managers_Ver-Dec-2025.pdf` (573 pages — the LARGEST AIF workbook) |
| **PDF location** | `/Users/shivam/aiworkspace/nismresearch/study material/` |
| **Actual exam** | 100 questions, 2 hours, 60% pass |
| **Negative marking** | **25%** (standard — unlike 10% carve-out for Distributor exams XIX-A/B/XXI-A) |
| **Caselets** | None |
| **Question bank dir** | `/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` |
| **PDF reader** | Use `python3` with `import fitz` (PyMuPDF) |
| **Difficulty** | **Hard** — manager-side AIF exam covering both Cat I/II (PE/VC/Debt) AND Cat III (Hedge/Long-Short) |

---

## Existing Placeholder in ExamWeightages.plist

The following XIX-C placeholder ALREADY EXISTS — REPLACE the topic keys with the recommended schema below (use SAME marks/weights, just rename keys to match new "AIFM " prefix for clarity):

```
"Series XIX-C - AIF Managers (All Categories)": {
    "examCode": "XIX-C",
    "topics": {
        "AIFs in India and Suitability": 3,
        "Investment Landscape and Types": 5,
        "AIF Ecosystem": 5,
        "Regulatory Framework": 7,
        "Fund Structuring": 10,
        "Investment Strategies and Governance": 13,
        "Fee Structure and Fund Performance": 15,
        "Indices and Benchmarking": 3,
        "Modern Portfolio Theory and Capital Market Theory": 4,
        "Informational Efficiency": 3,
        "Valuation": 7,
        "Taxation": 6,
        "Legal Documents and Negotiations": 7,
        "Due Diligence (Investor Perspective)": 7,
        "Fund Monitoring, Reporting, and Exit": 5
    }
}
```

Total marks = 100. Note: Topic-counts in this prompt (Qs per topic) are scaled to 500 questions, NOT marks.

**CRITICAL — Topic Naming:** Use the **"AIFM "** prefix (AIF Manager) for ALL topic keys to keep them distinct from XIX-A "AIF " (Distributor Cat I/II) and XIX-B "Cat III AIF " (Distributor Cat III) topics in the plist. Example: "AIFM Regulatory Framework" not "Regulatory Framework". This is critical — SHARED topic keys will cause questions to flow into the wrong exams.

---

## Recommended Topic Plan — 15 Topics, 500 Questions

| # | Topic Name (exact plist key) | Marks | Qs | Source Chapter / Pages | Rationale |
|---|------------------------------|:----:|:--:|:----------------------:|-----------|
| 1 | AIFM Investment Landscape and Types | 5 | 25 | Ch 1-2 | Asset classes, investor categories, AIF types |
| 2 | AIFM AIFs in India and Suitability | 3 | 15 | Ch 3 | Indian AIF history, growth, investor suitability |
| 3 | AIFM Ecosystem | 5 | 25 | Ch 4 | Sponsor, Trustee, Manager, Custodian roles |
| 4 | AIFM Regulatory Framework | 7 | 35 | Ch 5 | SEBI AIF Regs 2012, recent amendments |
| 5 | AIFM Fund Structuring | 10 | 50 | Ch 6 | Trust/LLP/Company, contributions, drawdowns |
| 6 | AIFM Investment Strategies and Governance | 13 | 65 | Ch 7 | PE/VC/Debt/Hedge strategies, IC governance |
| 7 | AIFM Fee Structure and Fund Performance | 15 | 75 | Ch 8 | Mgmt fee, carry, hurdle, HWM, IRR/MOIC/TVPI |
| 8 | AIFM Indices and Benchmarking | 3 | 15 | Ch 9 | PME, vintage benchmarking, public market equivalents |
| 9 | AIFM Modern Portfolio Theory and CMT | 4 | 20 | Ch 10 | MPT, CAPM, efficient frontier basics for AIFs |
| 10 | AIFM Informational Efficiency | 3 | 15 | Ch 11 | EMH forms, active vs passive, alpha sources |
| 11 | AIFM Valuation | 7 | 35 | Ch 12 | DCF, comps, NAV, IPEV guidelines, mark-to-market |
| 12 | AIFM Taxation | 6 | 30 | Ch 13 | Section 9A, pass-through (Cat I/II), fund-level (Cat III), CG, surcharge |
| 13 | AIFM Legal Documents and Negotiations | 7 | 35 | Ch 14 | PPM, Contribution Agreement, side letters, negotiation points |
| 14 | AIFM Due Diligence (Investor Perspective) | 7 | 35 | Ch 15 | DDQ, manager track record, ops/legal/risk DD |
| 15 | AIFM Fund Monitoring, Reporting, and Exit | 5 | 25 | Ch 16 | Quarterly reports, distributions, exits, wind-down |
| | **Total** | **100** | **500** | | |

---

## Existing Placeholder XML Files (CLEANUP REQUIRED)

There are **30 existing XML files** under different (non-"AIFM ") topic names from an earlier partial-fill. Decision needed at session start:

**Option A (RECOMMENDED):** Delete the 30 placeholder files and start fresh with "AIFM " prefix — clean namespace.
```bash
ls OriginalQuestions/ | python3 -c "
import sys, plistlib
with open('ExamWeightages.plist','rb') as f: e = plistlib.load(f)
xixc_topics = e['Series XIX-C - AIF Managers (All Categories)']['topics'].keys()
for line in sys.stdin:
    f = line.strip()
    base = f.rsplit('_',1)[0]
    if base in xixc_topics:
        print(f'rm \"OriginalQuestions/{f}\"')
" | sh
```

**Option B:** Re-use the 30 files by renaming to "AIFM " prefix and generating 470 more. Slightly more work; saves no quality.

Pick Option A for cleanliness.

---

## Key Content Areas (from PDF chapter scan)

### Topic 1: AIFM Investment Landscape and Types (25 Qs) — Ch 1-2
- Asset class spectrum: equity, debt, hybrid, alternative
- Investor categories: retail, HNI, institutional, sovereign
- AIF as alternative to MF/PMS — when, why, who
- AIF Categories I (VC, SME, infra), II (PE, debt), III (hedge, long-short)
- **Mix:** 5% calc, 60% conceptual, 20% regulatory, 15% application

### Topic 2: AIFM AIFs in India and Suitability (15 Qs) — Ch 3
- Indian AIF growth trajectory, market size, top managers
- Suitability framework: investor profile + AIF mandate match
- **Mix:** 5% calc, 65% conceptual, 20% regulatory, 10% application

### Topic 3: AIFM Ecosystem (25 Qs) — Ch 4
- Sponsor (sets up AIF, contributes "skin in the game"; min 2.5% Cat I/II, 5% Cat III)
- Trustee/Trustee Company (oversight; protects investors)
- Investment Manager (separate SEBI-registered entity)
- Custodian (asset safekeeping; mandatory if corpus > Rs. 500 cr or Cat III)
- RTA, Auditor, Valuer roles
- **Mix:** 0% calc, 60% conceptual, 30% regulatory, 10% application

### Topic 4: AIFM Regulatory Framework (35 Qs) — Ch 5
- **SEBI (AIF) Regulations 2012** — registration, eligibility (Reg 4-7)
- Continuing obligations: net worth (Rs. 10 cr Manager), reporting, fit-and-proper
- Recent amendments: ESG-AIF, Accredited Investor regime, Migration to AIF
- **PMLA compliance** for AIFs (CTR, STR, KYC)
- **PIT applicability** to designated persons in AIF Manager
- **Investment restrictions** by Category (e.g., Cat I/II 25% single-investee cap; Cat III 10%)
- **Tenure limits**: Cat I/II min 3-year close-ended; Cat III open or close-ended
- **Mix:** 5% calc, 30% conceptual, 60% regulatory, 5% application

### Topic 5: AIFM Fund Structuring (50 Qs) — Ch 6
- Legal vehicles: Trust (most common), LLP, Company
- **Capital commitment** vs **drawdown** (capital call) mechanics
- **Recyling provisions**, **Re-investment**, **Defaulting LP** treatment
- **GP-LP economics**: GP commitment, GP catch-up, GP carried interest
- **Side pockets**, **Co-investment vehicles**, **Parallel funds**
- **Open-ended vs Close-ended**: Cat I/II close-ended; Cat III flexibility
- Min corpus Rs. 20 crore; min investment Rs. 1 crore (Rs. 25 lakh AI/employees)
- **Mix:** 15% calc (drawdown math), 45% conceptual, 30% regulatory, 10% application

### Topic 6: AIFM Investment Strategies and Governance (65 Qs) — Ch 7
- **PE strategies**: buyout, growth, distressed, secondaries
- **VC strategies**: seed, Series A-E, late-stage
- **Debt AIF strategies**: senior secured, mezzanine, structured credit
- **Hedge strategies (Cat III)**: long-short equity, market neutral, event-driven, global macro, multi-strategy
- **Investment Committee** governance, conflicts, advisory committees
- **Co-investment policy**, **side letters** (MFN clause)
- ESG integration, impact investing in Cat I AIFs (SVF, Angel)
- **Mix:** 10% calc, 50% conceptual, 25% regulatory, 15% application

### Topic 7: AIFM Fee Structure and Fund Performance (75 Qs — LARGEST) — Ch 8
This is the heart of AIF economics. Cover deeply:
- **Management fee**: 1.5-2% on commitments (PE/VC) or NAV (Hedge)
- **Carried interest** (carry): 20% standard, 30% top-tier
- **Hurdle rate**: 8% IRR typical for PE/VC; soft vs hard hurdle
- **Catch-up**: 100% catch-up (GP catches up to 20% of total profit), partial catch-up
- **High Water Mark (HWM)** for Cat III hedge funds
- **Performance metrics**:
  - **IRR** (Internal Rate of Return) — Cat I/II PE
  - **MOIC** (Multiple on Invested Capital) — gross multiple
  - **TVPI** (Total Value to Paid-In) = Distributions + NAV / Paid-In
  - **DPI** (Distributions to Paid-In) = realised returns
  - **RVPI** (Residual Value to Paid-In) = unrealised returns
  - **Vintage IRR**, **Cash-on-Cash multiple**
  - **Sharpe, Sortino, Information Ratio** for Cat III
- **Include at least 18 calc questions** (carry waterfall, IRR, MOIC, TVPI, DPI, hurdle, HWM)
- **Mix:** 25% calc, 40% conceptual, 25% regulatory, 10% application

### Topic 8: AIFM Indices and Benchmarking (15 Qs) — Ch 9
- **PME (Public Market Equivalent)**: Long-Nickels, Kaplan-Schoar, Direct Alpha
- **Vintage-year benchmarking** (Cambridge Associates, Preqin)
- Hedge fund indices (HFRI, HFRX, EurekaHedge)
- Benchmarking traps (survivorship bias, backfill bias, self-selection)
- **Mix:** 25% calc (PME), 50% conceptual, 15% regulatory, 10% application

### Topic 9: AIFM Modern Portfolio Theory and CMT (20 Qs) — Ch 10
- MPT recap (efficient frontier, covariance, diversification)
- CAPM, beta, alpha for AIF strategies
- AIF role in institutional asset allocation (J-curve, illiquidity premium)
- **Mix:** 35% calc, 50% conceptual, 5% regulatory, 10% application

### Topic 10: AIFM Informational Efficiency (15 Qs) — Ch 11
- EMH forms applied to PE/VC (private markets less efficient — alpha opportunity)
- Cat III hedge funds and market efficiency
- Limits to arbitrage in private markets
- **Mix:** 0% calc, 70% conceptual, 15% regulatory, 15% application

### Topic 11: AIFM Valuation (35 Qs) — Ch 12
- **IPEV (International Private Equity & Venture) Valuation Guidelines**
- DCF for unlisted companies
- Comparable transactions, comparable companies, recent funding round prices
- NAV calculation for AIFs (mark-to-market at fair value)
- Liquidity discounts, control premiums
- **Cat III valuation**: daily NAV using fair-value methodology
- **APMI-empanelled valuers** for Indian AIFs
- **Include at least 8 calc questions** on DCF, comps
- **Mix:** 25% calc, 50% conceptual, 20% regulatory, 5% application

### Topic 12: AIFM Taxation (30 Qs) — Ch 13
- **Pass-through tax status** for Cat I and II AIFs (Section 115UB)
- **Fund-level taxation** for Cat III (no pass-through; fund pays at MMR)
- **Section 9A** ITA — safe harbour for offshore fund managers operating from India
- Capital gains: STCG/LTCG by holding period and asset type
- **Surcharge** on AIF income (significant for HNI investors)
- TDS on AIF distributions (Section 194LBB at 10%)
- GST on management fees
- **Include at least 6 calc questions** on tax computation
- **Mix:** 25% calc, 35% conceptual, 30% regulatory, 10% application

### Topic 13: AIFM Legal Documents and Negotiations (35 Qs) — Ch 14
- **PPM (Private Placement Memorandum)** — disclosure of strategy, fees, risks, conflicts
- **Contribution Agreement** — terms binding LP to fund
- **Side Letters** — bilateral terms; MFN (Most Favoured Nation) clause
- **LPA (Limited Partnership Agreement)** for LLP-structured funds
- **Investment Management Agreement (IMA)** between fund and Manager
- **Subscription documents** — investor declarations, KYC
- **Negotiation points**: fees, key-man clauses, ECF (excuse clause), defaulting LP, removal of GP
- **Mix:** 0% calc, 50% conceptual, 45% regulatory, 5% application

### Topic 14: AIFM Due Diligence (Investor Perspective) (35 Qs) — Ch 15
- **Manager DD**: track record, team stability, key-person risk
- **Operational DD**: middle/back office, compliance, custodian, valuation policy
- **Legal DD**: PPM review, side letter terms, fund documents
- **Risk DD**: portfolio concentration, leverage, liquidity, counterparty
- **Reference checks** with prior LPs, portfolio companies
- DDQ (Due Diligence Questionnaire) standard format
- **Mix:** 0% calc, 60% conceptual, 25% regulatory, 15% application

### Topic 15: AIFM Fund Monitoring, Reporting, and Exit (25 Qs) — Ch 16
- **Quarterly reports** to LPs: financials, NAV, capital activity
- **Annual report** with audited financials
- **K-1 equivalent** in Indian context (Form 64C/D for AIF distributions)
- **Distributions waterfall**: return of capital → preferred return (hurdle) → catch-up → carry split
- **Exit modes**: trade sale, IPO, secondary sale, recapitalisation
- **Wind-down** procedures: liquidation, in-kind distributions, residual value
- Continuation funds, GP-led secondaries
- **Mix:** 10% calc, 50% conceptual, 30% regulatory, 10% application

---

## Execution Rules (same as all previous phases)

1. **ALWAYS read PDF chapter before generating questions** — use `import fitz` (PyMuPDF)
2. **Use Bash tool with Python scripts** (referencing helper module pattern from Phase 14C-2) to generate XML files (NOT the Write tool for XMLs — Write only for Python scripts)
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
**Cross-Exam Context:** How this appears in other NISM exams (especially XIX-A, XIX-B, XXI-B).
**Manager's Pro-Tip:** Practical insight for AIF managers (NOT distributors — this is the manager exam).]]></text></explanation>
    </question>
</QF>
```
4. **Validate after every batch** using `xml.etree.ElementTree`
5. **Indian names, INR amounts** in all scenario-based questions
6. **4 options, exactly 1 correct** per question
7. **Randomize correct answer position** across questions (don't cluster correct at option B)
8. **Tone:** This is the AIF MANAGER exam, NOT Distributor — framing should speak to a fund manager's desk (deal sourcing, IC governance, LP relations, fund operations), not a sales/commission frame.

---

## CRITICAL: Overlap Management with Other Exams

XIX-C overlaps significantly with prior AIF exams:

1. **XIX-A (Cat I/II AIF Distributors)**: Topics 1-7 overlap heavily. For XIX-C, **reframe** from a Manager's perspective:
   - Not "How does a distributor pitch this AIF?" but "How does a Manager construct/operate this AIF?"
   - Deeper governance content (IC, advisory committee, conflicts, GP-LP terms)
   - Use different scenarios/names/numbers

2. **XIX-B (Cat III AIF Distributors)**: Topics on Cat III strategies, fees, valuation overlap. XIX-C unifies BOTH Cat I/II AND Cat III (broader scope).

3. **XXI-B (Portfolio Managers)**: Topic 9 (MPT/CMT), Topic 10 (Efficiency), Topic 7 (Fee math), Topic 11 (Valuation) overlap conceptually. XIX-C focuses on AIF-specific framing.

4. **X-A (IA L1)**: Topic 12 (Taxation) overlaps. XIX-C adds AIF-specific provisions (Section 115UB, 9A, 194LBB).

5. **XXIV (AML)**: Topic 4 (Regulatory Framework) covers PMLA basics. XIX-C focuses on AIF-specific AML.

**Other cross-exam overlaps:**
   - XV (Research Analyst): valuation methods (Topic 11)
   - VIII (Equity Derivatives): Cat III hedge fund derivatives (Topic 6)
   - III-A/C (Compliance): regulatory framework (Topic 4)

Use NEW scenarios/names/numbers; reference these other exams in Cross-Exam Context field.

**XXI-B "PM …" topics MUST NOT be reused** — XIX-C uses "AIFM …" prefix exclusively.

---

## After Completion Checklist

1. Count files per topic — must match targets (total = 500)
2. Run XML validation (4 answers, 1 correct, explanation with 4 sections, CDATA wrapping)
3. Spot-check 2-3 questions per topic for factual accuracy against PDF
4. Update plists:
   - **ExamWeightages.plist** — REPLACE existing XIX-C placeholder topics with the 15 "AIFM …" topic names from this prompt. Use marks (3, 5, 7, …) as weightages (total 100).
   - **Topics.plist** — add all 15 topics with question ID arrays
   - **TopicsLite.plist** — same as Topics.plist
   - **ChapterArticles.plist** — add all 15 topics with "All Topics": "1"
   - **QuestionToArticleNumber.plist** — add all 500 question IDs mapped to "1"
5. Validate all plists with `plutil -lint`
6. **Cleanup**: Delete the 30 existing placeholder XIX-C XML files (Option A) and remove their references from the plists
7. Update HANDOFF.md:
   - Mark XIX-C complete
   - Update running totals to **28 exams, 11,893 questions, 285 topics**
   - Add XIX-C topic breakdown table
8. Git commit: "Add Phase 14D-1 — Series XIX-C AIF Managers (All Categories) exam (500 questions)"

---

## Key Calculations Students Will See on XIX-C

| Formula | Topics | Example |
|---------|--------|---------|
| IRR (cash-flow IRR) | 7, 8 | PE fund 10-year cash flows |
| MOIC = Total Value / Paid-In Capital | 7 | Gross multiple |
| TVPI = (Distributions + NAV) / Paid-In | 7 | Total Value to Paid-In |
| DPI = Distributions / Paid-In | 7 | Realised multiple |
| RVPI = NAV / Paid-In | 7 | Unrealised multiple |
| Carry waterfall: Return of Capital → 8% Pref → 100% catch-up → 80/20 split | 7, 15 | Distribution allocation |
| HWM crystallisation (Cat III) | 7 | Performance fee accrual |
| Fair-value DCF | 11 | Unlisted equity NAV |
| PME (Long-Nickels): replicate fund cash flows in S&P 500 | 8 | Public Market Equivalent |
| Section 115UB pass-through (Cat I/II) | 12 | Income flow-through to investors |
| Surcharge calc on AIF distribution | 12 | Effective tax rate |
| Drawdown / Capital Call schedule math | 5 | LP commitment management |
| Cat I/II 25% single-investee limit | 4, 5 | Investment restriction |

---

## Recommended Execution Order

**Phase 1 — Largest & Most Unique (heaviest PDF reading):**
1. Topic 7 (Fee Structure and Performance, 75 Qs) — LARGEST, calc-heavy
2. Topic 6 (Investment Strategies and Governance, 65 Qs) — broad, Cat I/II + Cat III
3. Topic 5 (Fund Structuring, 50 Qs) — drawdown/recycling math
4. Topic 4 (Regulatory Framework, 35 Qs) — SEBI AIF Regs 2012 + amendments
5. Topic 11 (Valuation, 35 Qs) — IPEV + APMI

**Phase 2 — Medium-weight (moderate uniqueness):**
6. Topic 13 (Legal Documents, 35 Qs) — PPM, side letters, MFN
7. Topic 14 (Due Diligence, 35 Qs) — investor-perspective DD
8. Topic 12 (Taxation, 30 Qs) — Section 115UB, 9A, surcharge

**Phase 3 — Smaller / Conceptual:**
9. Topic 1 (Investment Landscape, 25 Qs) — overlap with X-A
10. Topic 3 (Ecosystem, 25 Qs) — overlap with XIX-A/B
11. Topic 15 (Monitoring, Reporting, Exit, 25 Qs) — distribution waterfalls
12. Topic 9 (MPT and CMT, 20 Qs) — overlap with XXI-B
13. Topic 2 (AIFs in India and Suitability, 15 Qs) — overlap with XIX-A
14. Topic 8 (Indices and Benchmarking, 15 Qs) — PME math
15. Topic 10 (Informational Efficiency, 15 Qs) — overlap with XXI-B

**Context management tip:** If running out of context after Phase 2, prioritize Topics 7, 6, 5, 4, 11, 13 completion. The lighter topics (1, 2, 3, 9, 10) can reuse XIX-A/B and XXI-B patterns with new scenarios.

---

## Helper Module Pattern (from Phase 14C-2)

Reuse the helper pattern from `/tmp/xxib_gen/helper.py`:

```python
import os, xml.etree.ElementTree as ET
OUT_DIR = "/Users/shivam/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions"

def build_xml(topic_key, idx, q, opts, correct_idx, logic, trap, ce, tip):
    # 4-section CDATA explanation
    qf_id = f"{topic_key}_{idx}"
    explanation = f"""**The Logic:** {logic}
**The Trap:** {trap}
**Cross-Exam Context:** {ce}
**Manager's Pro-Tip:** {tip}"""
    # ... (assemble XML with answers/correct/etc)
    # Validate via ET.fromstring before writing
    
def write_batch(topic_key, questions):
    for q in questions:
        build_xml(topic_key, q['idx'], q['q'], q['opts'], q['correct'],
                  q['logic'], q['trap'], q['ce'], q['tip'])
```

---

## Grand Total After Phase 14D-1

| Metric | Before | After |
|--------|:------:|:-----:|
| Exams | 27 | 28 |
| Questions | 11,393 | 11,893 |
| Topics | 270 | 285 |

**Next after XIX-C:**
- **Phase 14D-2:** Series XIX-D (AIF Managers Cat I/II only, 500 Qs, 13 topics) — narrower scope vs XIX-C, focus on PE/VC/Debt
- **Phase 14D-3:** Series XIX-E (AIF Managers Cat III only, 500 Qs, 13 topics) — focus on Hedge/Long-Short
- **Phase 15:** Series XXIII (Social Impact Assessors, 500 Qs, 7 topics) — entirely new content, SSE framework

After Phase 14D-3, only XXIII remains for full coverage of all currently-unfilled NISM exam slots.
