# Session Prompts for Phase 5

Use these prompts to kick off Phase 5 on two machines. **Run Machine 1 first, push, then start Machine 2 after pulling.**

---

## Machine 1: Phase 5a — Audit Series VIII (Equity Derivatives)

```
Read the file nismresearch/NISM_QuestionBank/HANDOFF.md carefully — it contains the full project context, rules, and action plan.

Then read nismresearch/NISM_QuestionBank/BEST_PRACTICES.md — it contains mandatory quality rules.

Your task is Phase 5a: Audit Series VIII (Equity Derivatives).

WHAT TO DO:

1. READ THE PDF: The workbook is at nismresearch/study material/NISM-Series-VIII Equity Derivatives Certification Examination_December 2025_v1.pdf
   - Use pymupdf (fitz) to read it: import fitz; doc = fitz.open(path); text = doc[page].get_text()
   - Read chapter by chapter (there are 10 chapters)

2. FOR EACH CHAPTER: Read the PDF pages, then read the corresponding existing questions in nismresearch/NISM_QuestionBank/OriginalQuestions/ (files prefixed with "VIII "). Verify:
   - Is the correct answer actually correct per the PDF?
   - Are distractors plausibly wrong (not accidentally correct)?
   - Are specific numbers, thresholds, section references accurate?
   - Are there concept gaps (important PDF content not covered by any question)?
   - Fix any errors directly in the XML files

3. ADD ~55 REGULATORY QUESTIONS: The audit found Series VIII is low on regulatory questions (9% actual vs 20% target). After auditing each chapter, add regulatory questions covering:
   - SEBI derivative regulations and circulars
   - Position limits (client-level, TM-level, market-wide)
   - Margin rules (SPAN, exposure margin, calendar spread margin)
   - LODR provisions relevant to derivatives
   - Penalty provisions
   - Trading member eligibility criteria
   Distribute across the 10 topics proportionally. Use EXACT topic prefixes from HANDOFF.md (they all start with "VIII "). Continue numbering from the highest existing number per topic.

4. QUESTION XML FORMAT:
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="{TopicName}_{number}" sectionNumber="" articleNumber="0" articleName="">
       <question>
           <text><![CDATA[Question text]]></text>
           <answers>
               <answer correct="yes"><text><![CDATA[Correct answer]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 1]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 2]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 3]]></text></answer>
           </answers>
           <explanation><text><![CDATA[**The Logic:** Why correct.
   **The Trap:** Why a distractor was tempting.
   **Cross-Exam Context:** Which other NISM exams test this.
   **Distributor's Pro-Tip:** Real-world tip.]]></text></explanation>
       </question>
   </QF>

5. AFTER ALL CHAPTERS ARE DONE:
   a. Regenerate all 4 plists using the Python script in HANDOFF.md (Step 5 of the pipeline)
   b. Run validation: plutil on all plists, XML parsing on all files, duplicate check, prefix alignment check
   c. Update HANDOFF.md:
      - Change Series VIII audit status from "Generated from PDF, needs audit + type rebalancing" to "AUDITED + Type-rebalanced"
      - Update question count
      - Mark "Series I: +63 calc, +75 regulatory questions" as still PENDING
      - Mark "Series VIII: +55 regulatory questions" as DONE
      - Add a Session 6 entry to the session log with: chapters audited, errors found/fixed, questions added, validation results
      - Update the "For:" line at the top to say next action is Phase 5b (Audit Series I)
   d. Commit with message: "Phase 5a: Audit Series VIII — PDF verification + regulatory questions"
   e. Push to remote

CRITICAL RULES:
- NEVER generate questions from memory. Always read the PDF chapter first.
- If your context window is getting full and you can't read more PDF pages, STOP. Update HANDOFF.md with exactly where you stopped (which chapters done, which pending), regenerate plists, validate, commit, and tell me to start a fresh session.
- Quality > quantity. It's better to audit 5 chapters thoroughly than 10 chapters superficially.
- Verify calculations in existing questions — run the math, don't trust it blindly.
- Use the verified tax rates from TaxRatesReference_FY2025-26.md for any tax questions.
```

---

## Machine 2: Phase 5b — Audit Series I (Currency Derivatives)

**IMPORTANT: Only start this AFTER Machine 1 has pushed. Run `git pull` first.**

```
First run: git pull

Then read the file nismresearch/NISM_QuestionBank/HANDOFF.md carefully — it contains the full project context, rules, and action plan.

Then read nismresearch/NISM_QuestionBank/BEST_PRACTICES.md — it contains mandatory quality rules.

Your task is Phase 5b: Audit Series I (Currency Derivatives).

WHAT TO DO:

1. READ THE PDF: The workbook is at nismresearch/study material/1 NISM-Series-I Currency Derivatives Certification Examination_ December 2025.pdf
   - Use pymupdf (fitz) to read it: import fitz; doc = fitz.open(path); text = doc[page].get_text()
   - Read chapter by chapter (there are 10 chapters, ~245 pages total)

2. FOR EACH CHAPTER: Read the PDF pages, then read the corresponding existing questions in nismresearch/NISM_QuestionBank/OriginalQuestions/ (files prefixed with "I "). Verify:
   - Is the correct answer actually correct per the PDF?
   - Are distractors plausibly wrong (not accidentally correct)?
   - Are specific numbers, thresholds, formulas, section references accurate?
   - Are there concept gaps (important PDF content not covered by any question)?
   - Fix any errors directly in the XML files
   - PAY SPECIAL ATTENTION to calculation questions — verify the math step by step

3. ADD ~63 CALCULATION QUESTIONS: The audit found Series I is very low on calculation questions (12% actual vs 25% target). After auditing each chapter, add calculation questions covering:
   - Cross-rate calculations (Chapter 1)
   - Forward rate premium/discount calculations (Chapter 3)
   - Interest rate parity: F = S × (1 + RQC × t) / (1 + RBC × t) (Chapter 3)
   - Futures P&L calculations (Chapter 3)
   - Options payoff calculations: max(S-K, 0) for calls, max(K-S, 0) for puts (Chapter 4)
   - Greeks calculations with numerical examples (Chapter 4)
   - Strategy P&L: bull/bear spreads, straddles, strangles with worked numbers (Chapter 5)
   - Margin calculations: SPAN scenarios, ELM rates (1% USDINR, 0.50% cross) (Chapter 7)
   Every calculation question must have a verifiable numerical answer — run the math yourself.

4. ADD ~75 REGULATORY QUESTIONS: Series I is also low on regulatory (5% actual vs 20% target). Add questions covering:
   - SEBI-RBI dual regulation framework (Chapter 8)
   - FEMA 1999 provisions (Chapter 8)
   - SCRA Section 18A (Chapter 8)
   - Bank TM eligibility: Rs 500Cr net worth, CRAR 10%, NPA 3% (Chapter 8)
   - FEDAI role (Chapter 8)
   - Position limits for various participant categories (Chapter 7)
   - KYC and Risk Disclosure Document requirements (Chapter 10)
   - SCORES portal and grievance escalation (Chapter 10)
   - Code of conduct provisions (Chapter 10)
   Distribute across the 10 topics proportionally. Use EXACT topic prefixes from HANDOFF.md (they all start with "I "). Continue numbering from the highest existing number per topic.

5. QUESTION XML FORMAT:
   <?xml version="1.0" encoding="UTF-8"?>
   <QF id="{TopicName}_{number}" sectionNumber="" articleNumber="0" articleName="">
       <question>
           <text><![CDATA[Question text]]></text>
           <answers>
               <answer correct="yes"><text><![CDATA[Correct answer]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 1]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 2]]></text></answer>
               <answer correct="no"><text><![CDATA[Distractor 3]]></text></answer>
           </answers>
           <explanation><text><![CDATA[**The Logic:** Why correct.
   **The Trap:** Why a distractor was tempting.
   **Cross-Exam Context:** Which other NISM exams test this.
   **Distributor's Pro-Tip:** Real-world tip.]]></text></explanation>
       </question>
   </QF>

6. AFTER ALL CHAPTERS ARE DONE:
   a. Regenerate all 4 plists using the Python script in HANDOFF.md (Step 5 of the pipeline)
   b. Run validation: plutil on all plists, XML parsing on all files, duplicate check, prefix alignment check
   c. Update HANDOFF.md:
      - Change Series I audit status from "Generated from PDF, needs audit + type rebalancing" to "AUDITED + Type-rebalanced"
      - Update question count (total should be previous total + new questions added)
      - Mark "Series I: +63 calc, +75 regulatory questions" as DONE
      - Add a Session 7 entry to the session log with: chapters audited, errors found/fixed, questions added, validation results
      - Update the "For:" line at the top to say next action is Phase 6 (Generate Series IV and XVI)
   d. Commit with message: "Phase 5b: Audit Series I — PDF verification + calculation and regulatory questions"
   e. Push to remote

CRITICAL RULES:
- NEVER generate questions from memory. Always read the PDF chapter first.
- If your context window is getting full and you can't read more PDF pages, STOP. Update HANDOFF.md with exactly where you stopped (which chapters done, which pending), regenerate plists, validate, commit, and tell me to start a fresh session.
- Quality > quantity. It's better to audit 5 chapters thoroughly than 10 chapters superficially.
- VERIFY ALL CALCULATIONS — for existing calculation questions and new ones. Run the math step by step. Currency derivative math is error-prone (interest rate parity, cross rates, premium/discount).
- Use the verified tax rates from TaxRatesReference_FY2025-26.md for any tax questions.
```

---

## After Both Machines Complete

Once both Phase 5a and 5b are done, the next session prompt is:

```
Read the file nismresearch/NISM_QuestionBank/HANDOFF.md carefully.

Your task is Phase 6: Generate questions for Series IV (Interest Rate Derivatives) and Series XVI (Commodity Derivatives).

Start with Series IV. Follow the Question Generation Pipeline in HANDOFF.md exactly:
1. Check ExamWeightages.plist for topic names
2. Read the PDF chapter by chapter
3. Generate 500 questions following the question type distribution (35% calc, 35% conceptual, 20% regulatory, 10% application)
4. Validate and regenerate plists
5. Update HANDOFF.md

If context runs low after Series IV, stop and hand off. Series XVI can be a separate session.
```
