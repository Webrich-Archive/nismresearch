# Session Prompts for Phase 7 — Series XIII (Common Derivatives)

Run both machines simultaneously. They write to different topic prefixes so there are NO file conflicts.

**IMPORTANT:** Neither session regenerates plists or updates HANDOFF.md. After both complete, run the cleanup step.

---

## Machine 1: Phase 7a — Derivative Concepts & Instruments (Topics 1-5, ~260 Qs)

```
Read the file nismresearch/NISM_QuestionBank/HANDOFF.md carefully — it contains the full project context, rules, and action plan. Pay special attention to the "Phase 7 Parallel Execution Plan" section.

Then read nismresearch/NISM_QuestionBank/BEST_PRACTICES.md — it contains mandatory quality rules.

Your task is Phase 7a: Generate Series XIII (Common Derivatives) — Topics 1-5 (~260 questions).

BACKGROUND:
Series XIII is a composite exam covering Currency (I), Interest Rate (IV), and Equity (VIII) derivatives. There is NO separate PDF — use the I, IV, and VIII workbooks as source material. Questions must be REWORDED (not copy-pasted) from existing exam content, with ~30% being XIII-unique cross-asset comparison questions.

TOPICS TO GENERATE (all use "XIII " prefix):

1. "XIII Introduction to the Underlying Markets" — 80 Qs (16%)
   Source: I Ch1-2 (currency/forex markets, FBIL, BIS), IV Ch1 (bond markets, yield curve, G-Sec), VIII Ch1-2 (equity markets, index concepts, NIFTY/SENSEX)
   Focus: Cross-asset comparison of underlying markets. What makes currency/bond/equity markets different? Market structure, participants, instruments.

2. "XIII Basics of Derivatives" — 20 Qs (4%)
   Source: VIII Ch1 (derivative definition, forward/futures/options/swaps, history), I Ch2 (FX derivatives overview), IV Ch2 (IR derivatives overview)
   Focus: Universal derivative concepts that span all asset classes. OTC vs exchange-traded. Novation, CCP, netting.

3. "XIII Introduction to Forwards and Futures" — 65 Qs (13%)
   Source: I Ch3 (currency futures, IRP pricing F=S*(1+RQC*t)/(1+RBC*t)), IV Ch3 (IR futures, bond futures, cheapest-to-deliver), VIII Ch3 (equity/index futures, cost-of-carry F=S*e^(r-q)*t)
   Focus: Compare pricing models across asset classes. Convergence, basis, contango/backwardation. Contract specifications comparison. ~35% calculation questions.

4. "XIII Introduction to Options" — 75 Qs (15%)
   Source: I Ch4 (currency options, Greeks for FX), IV Ch4 (IR options, caps/floors/swaptions), VIII Ch4 (equity options, Black-Scholes, put-call parity)
   Focus: Compare option pricing, Greeks behavior, moneyness across asset classes. How delta/gamma/theta/vega differ for currency vs equity options. ~30% calculation questions.

5. "XIII Option Trading Strategies" — 20 Qs (3%)
   Source: I Ch5 (currency hedging with options, spreads), VIII Ch5 (equity option strategies — bull/bear spreads, straddles, strangles, butterfly)
   Focus: Cross-asset strategy comparison. When to use which strategy for which asset class. P&L calculations.

QUESTION MIX TARGET: 30% calculation, 40% conceptual, 20% regulatory, 10% application

HOW TO GENERATE:
1. For each topic, read the relevant chapters from ALL THREE PDFs (I, IV, VIII) using pymupdf:
   import fitz; doc = fitz.open(path); text = doc[page].get_text()
   
   PDF paths:
   - "nismresearch/study material/1 NISM-Series-I Currency Derivatives Certification Examination_ December 2025.pdf"
   - "nismresearch/study material/NISM-Series-IV Interest Rates Derivatives Certification Examination_December 2025.pdf"
   - "nismresearch/study material/NISM-Series-VIII Equity Derivatives Certification Examination_December 2025_v1.pdf"

2. Generate questions that COMPARE across asset classes where possible:
   - "Which pricing model uses interest rate parity?" (Currency futures — comparing with cost-of-carry for equity)
   - "In which derivative market does the underlying have a fixed maturity?" (Interest rate — comparing with perpetual equity/currency)
   - Calculation Qs should use real formulas from the PDFs with worked numbers

3. Write XML files to nismresearch/NISM_QuestionBank/OriginalQuestions/
   File naming: "XIII {Topic Name}_{N}.xml" (e.g., "XIII Introduction to the Underlying Markets_1.xml")
   ID inside XML must match filename without .xml

4. XML FORMAT:
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="XIII Introduction to the Underlying Markets_1" sectionNumber="" articleNumber="0" articleName="">
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

DO NOT:
- Copy questions verbatim from Series I, IV, or VIII question files
- Regenerate plists (the cleanup session will do this)
- Update HANDOFF.md (the cleanup session will do this)
- Generate questions from memory without reading the PDF first

DO:
- Read PDF chapters before generating each topic
- Verify all calculations by running the math
- Use CDATA wrapping for ALL text fields
- Report at the end: total questions per topic, question type breakdown, any issues encountered

CRITICAL: If your context window is getting full and you can't read more PDF pages, STOP. Write all generated questions so far, report exactly which topics are complete and which are pending, and tell me to start a fresh session.
```

---

## Machine 2: Phase 7b — Strategies, Operations & Regulation (Topics 6-10, ~240 Qs)

```
Read the file nismresearch/NISM_QuestionBank/HANDOFF.md carefully — it contains the full project context, rules, and action plan. Pay special attention to the "Phase 7 Parallel Execution Plan" section.

Then read nismresearch/NISM_QuestionBank/BEST_PRACTICES.md — it contains mandatory quality rules.

Your task is Phase 7b: Generate Series XIII (Common Derivatives) — Topics 6-10 (~240 questions).

BACKGROUND:
Series XIII is a composite exam covering Currency (I), Interest Rate (IV), and Equity (VIII) derivatives. There is NO separate PDF — use the I, IV, and VIII workbooks as source material. Questions must be REWORDED (not copy-pasted) from existing exam content, with ~30% being XIII-unique cross-asset comparison questions.

TOPICS TO GENERATE (all use "XIII " prefix):

6. "XIII Strategies Using Futures" — 80 Qs (16%)
   Source: I Ch5 (currency hedging for exporters/importers, speculation, arbitrage), IV Ch5 (duration-based hedging, immunization, IRF hedging), VIII Ch3 (equity hedging with beta adjustment, index arbitrage, calendar spreads)
   Focus: Compare hedging approaches across asset classes. When does a company hedge with currency vs IR vs equity futures? Basis risk. Hedge ratio calculations. ~35% calculation.

7. "XIII Trading, Clearing, Settlement and Risk Management" — 85 Qs (17%)
   Source: I Ch6-7 (currency trading: TM/CM types, SPAN, ELM 1%/0.50%, position limits USD 20M), IV Ch6-7 (IR trading/clearing, bond delivery), VIII Ch6-7 (equity trading, margins, position limits, MWPL)
   Focus: Compare trading mechanisms, margin systems, settlement cycles, position limits across derivative types. SPAN methodology. Risk management frameworks. ~25% calculation.

8. "XIII Legal and Regulatory Environment" — 45 Qs (9%)
   Source: I Ch8 (SEBI-RBI dual regulation, FEMA, bank TM criteria Rs 500Cr/CRAR 10%/NPA 3%), IV Ch8 (RBI guidelines for IR derivatives), VIII Ch8 (SEBI derivative regs, L.C. Gupta Committee, J.R. Verma Committee, net worth requirements)
   Focus: Unified regulatory framework. Which regulator governs which derivative? SCRA provisions. Committee recommendations. Exchange recognition criteria. ~80% regulatory.

9. "XIII Accounting and Taxation" — 20 Qs (4%)
   Source: I Ch9 (ICAI 2021 guidance, Ind AS 109, forex P&L as business income), IV Ch9 (IR derivative accounting, hedge accounting for bonds), VIII Ch9 (F&O non-speculative income, STT rates 0.02%/0.10%, presumptive taxation)
   Focus: Compare tax treatment: which derivatives are speculative vs non-speculative? STT/CTT differences. Hedge accounting requirements across asset classes. ~40% calculation.

10. "XIII Sales Practices, Code of Conduct and Investor Protection" — 10 Qs (3%)
    Source: I Ch10 (KYC, SCORES, grievance path, arbitration), IV Ch10 (code of conduct), VIII Ch10 (investor protection, running accounts, IRRA)
    Focus: Universal investor protection principles. KYC requirements. Grievance redressal. Code of conduct for derivative intermediaries. ~90% regulatory/conceptual.

QUESTION MIX TARGET: 30% calculation, 40% conceptual, 20% regulatory, 10% application
(Note: Topics 8 and 10 will skew more regulatory; Topics 6-7 will have more calculations — that's expected)

HOW TO GENERATE:
1. For each topic, read the relevant chapters from ALL THREE PDFs (I, IV, VIII) using pymupdf:
   import fitz; doc = fitz.open(path); text = doc[page].get_text()
   
   PDF paths:
   - "nismresearch/study material/1 NISM-Series-I Currency Derivatives Certification Examination_ December 2025.pdf"
   - "nismresearch/study material/NISM-Series-IV Interest Rates Derivatives Certification Examination_December 2025.pdf"
   - "nismresearch/study material/NISM-Series-VIII Equity Derivatives Certification Examination_December 2025_v1.pdf"

2. Generate questions that COMPARE across asset classes where possible:
   - "Which derivative type uses duration-based hedge ratio?" (IR futures — vs beta for equity, notional for currency)
   - "Which regulatory body must approve currency derivative products in India?" (Both SEBI and RBI — vs SEBI alone for equity)
   - "In which derivative segment are gains always treated as non-speculative business income?" (Exchange-traded — comparing treatment across F&O, currency, commodity)

3. Write XML files to nismresearch/NISM_QuestionBank/OriginalQuestions/
   File naming: "XIII {Topic Name}_{N}.xml" (e.g., "XIII Strategies Using Futures_1.xml")
   ID inside XML must match filename without .xml

4. XML FORMAT:
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="XIII Strategies Using Futures_1" sectionNumber="" articleNumber="0" articleName="">
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

DO NOT:
- Copy questions verbatim from Series I, IV, or VIII question files
- Regenerate plists (the cleanup session will do this)
- Update HANDOFF.md (the cleanup session will do this)
- Generate questions from memory without reading the PDF first

DO:
- Read PDF chapters before generating each topic
- Verify all calculations by running the math
- Use CDATA wrapping for ALL text fields
- Report at the end: total questions per topic, question type breakdown, any issues encountered

CRITICAL: If your context window is getting full and you can't read more PDF pages, STOP. Write all generated questions so far, report exactly which topics are complete and which are pending, and tell me to start a fresh session.
```

---

## After Both Machines Complete — Cleanup Step

Run this in a fresh session after both 7a and 7b are done:

```
Read nismresearch/NISM_QuestionBank/HANDOFF.md — pay attention to the Phase 7 parallel plan.

Both Phase 7a (Topics 1-5) and Phase 7b (Topics 6-10) for Series XIII have been completed by parallel sessions. Your task is the cleanup step:

1. COUNT all "XIII " prefixed XML files in nismresearch/NISM_QuestionBank/OriginalQuestions/ and report per-topic counts
2. VALIDATE all XIII XML files (valid XML, correct structure, CDATA wrapping, ID matches filename)
3. CHECK for duplicates — both within XIII questions AND between XIII and I/IV/VIII questions (compare question text)
4. REGENERATE all 5 plists using the Python script in HANDOFF.md Step 5
5. RUN plutil on all plists
6. VERIFY plist topic alignment: all "XIII " prefixed topics in ExamWeightages == file prefixes
7. VERIFY TopicsLite ratios >= 30% for all topics
8. UPDATE HANDOFF.md:
   - Mark Phase 7a and 7b as DONE
   - Update total question count
   - Update completed exams table (add Series XIII)
   - Add Session 14 log entry with details
   - Set next action to Phase 10 (Series IX Merchant Banking)
9. Commit: "Phase 7: Generate Series XIII (Common Derivatives) — 500 questions from I+IV+VIII composite"
10. Push to remote
```
