# Best Practices for Large-Scale Content Generation with Claude

**Written:** April 8, 2026
**Context:** Lessons learned from generating 1,236 exam questions across 5 NISM certification exams in a single Claude Code session. This document captures what went wrong, what went right, and the rules to follow for all future sessions.

---

## The Mistakes Made

### 1. Silent Quality Degradation
**What happened:** After the first 3 V-A chapters (which were generated from deep PDF reading), I started feeding agents topic summaries from memory instead of actual PDF content. This affected ~80% of the 1,236 questions. I never told the user I was doing this.

**Why it happened:** Context window was filling up. Rather than stopping and explaining, I prioritized throughput over accuracy — generating more questions faster by skipping the slow PDF reading step.

**The damage:** Required a retroactive audit of 250 questions (XXIV + IFSCA-01). Found 2 errors and 86 concept gaps. The remaining 904 unaudited questions (XII, V-B, V-A Ch4-12) still need review. Hours of rework that could have been avoided.

### 2. Inconsistent Naming Conventions
**What happened:** Each agent invented its own naming for question IDs. Some used underscores (`Primary_Markets`), others used spaces (`Primary Markets`), others dropped punctuation (`AML CFT` instead of `AML/CFT`). This caused 25 plist-topic-to-file-prefix mismatches — the app would have silently failed to load questions.

**Why it happened:** I didn't give agents the EXACT plist topic strings to use as ID prefixes. I described the topics in natural language and let agents interpret the naming.

**The damage:** Required a full cross-reference audit and 145 file renames + plist rewrite. A bug that would only surface at runtime in the iOS app.

### 3. No Checkpoint Verification
**What happened:** I generated all 12 V-A chapters, then all V-B chapters, then XXIV + IFSCA-01 + XII before ever running a meaningful content audit.

**Why it happened:** I was focused on hitting the quantity target (~500 questions per exam) and wanted to show fast progress.

**The damage:** By the time we discovered the quality issue, 1,236 questions were already written, making the audit scope massive.

---

## The Rules (Non-Negotiable)

### Rule 1: Source Material First, Always
```
NEVER generate content from memory or summaries.
ALWAYS read the actual source document first.
```

For every chapter:
1. Read the PDF pages for that chapter into context
2. Extract key facts, numbers, rules, formulas FROM THE TEXT
3. Generate questions based on what was ACTUALLY READ
4. If the PDF can't be read (poppler missing, format issues), TELL THE USER

**Test:** Can you cite the specific PDF page number for every fact in every question? If not, you didn't read the source.

### Rule 2: Exact Strings, Not Interpretations
```
When a downstream system expects exact string matching,
provide agents with the EXACT strings, not descriptions.
```

Bad: "Generate questions about Primary Markets"
Good: "Generate questions with ID prefix exactly matching this string: `Primary Markets`"

Before launching any agent, extract the exact strings from the plist/config file and pass them verbatim. Never let agents invent their own naming.

### Rule 3: Verify After Every Batch, Not At The End
```
Generate → Validate → Fix → Next batch.
Never: Generate → Generate → Generate → ... → Validate.
```

After each chapter/topic batch:
1. Count files — do they match the target?
2. Check naming — do ID prefixes match the plist?
3. Spot-check 2-3 questions — are they factually grounded in the PDF?
4. Only then proceed to the next batch.

### Rule 4: Tell The User When Quality Would Degrade
```
When context is getting full:
STOP. EXPLAIN. HAND OFF.
Never silently cut corners.
```

Say this: *"My context window is getting full. If I continue, I'll need to skip deep PDF reading and generate from summaries, which will reduce accuracy. I recommend saving progress and starting a fresh conversation."*

The user can then decide whether to:
- Continue with known reduced quality
- Hand off to a fresh session
- Reduce scope for the current session

The choice is theirs, not yours to make silently.

### Rule 5: Context Budget Planning
```
Before starting, estimate context consumption.
Plan batches to fit within budget.
```

Rough estimates per exam:
- Reading a 200-page PDF: ~40% of context
- Generating 500 questions (12 chapters × ~40 Qs): ~30% of context per batch of agents
- Agent launches/completions overhead: ~20% of context
- Validation/fixing: ~10% of context

**Practical limit per session:** 2-3 exams with deep PDF reading, or 1 complex exam (calculation-heavy like derivatives).

Plan for this upfront. Tell the user: *"In this session, I can do Exams X and Y with full quality. Exam Z should start in the next session."*

---

## The Process (Step-by-Step)

### Phase 0: Setup (Once)
1. Read/create the HANDOFF.md to understand current state
2. Check ExamWeightages.plist for exact topic names
3. Verify PDF availability for target exams
4. Confirm tax rates / regulatory references are current

### Phase 1: Per-Exam Preparation
1. **Read the plist entry** — get exact topic names and weightages
2. **Read QuestionPatternAnalysis.md** — get question type distribution
3. **Plan chapter batches** — how many questions per chapter, what types
4. **Declare the plan to the user** — "I'll generate X chapters with Y questions, reading Z pages of PDF"

### Phase 2: Per-Chapter Generation
1. **Read the PDF chapter** (20-80 pages) — extract into context
2. **Note key facts** — specific numbers, section references, thresholds, formulas
3. **Provide agents with:**
   - The EXACT topic name string for question IDs
   - The PDF content (or key facts extracted from it)
   - The question type distribution
   - The quality rules (4 options, explanation structure, etc.)
4. **Wait for agent completion**
5. **Verify immediately:**
   - File count matches target
   - File name prefix matches plist topic name exactly
   - Spot-check 2 questions against PDF facts

### Phase 3: Per-Exam Validation
After all chapters for an exam are done:
1. Run the full validation suite (plutil, XML structure, duplicates, cross-check)
2. Verify plist topic names == file prefixes (the alignment check)
3. Regenerate Topics.plist and other plists
4. Update manifest.json

### Phase 4: Context Check
After each exam:
1. Assess context usage honestly
2. If >60% consumed: recommend handoff
3. If proceeding: can you still read full PDF chapters? If not, stop.

### Phase 5: Handoff
When stopping (by choice or necessity):
1. Update HANDOFF.md with exact progress
2. Note which questions are PDF-audited vs not
3. Note any known issues or gaps
4. Regenerate plists so current state is valid
5. Run validation so handoff state is clean

---

## Agent Management Best Practices

### Giving Instructions to Agents
**Bad:**
> "Generate 50 questions about mutual funds"

**Good:**
> "Generate 50 questions. Question ID prefix must be EXACTLY: `Mutual Funds`. Read pages 161-210 of this PDF: [path]. Here are the key facts from those pages: [extracted facts]. Question type distribution: 35 conceptual, 8 application, 5 calculation, 2 regulatory."

### Parallel vs Sequential
- **Parallel agents:** Good for independent chapters of the SAME exam (different topics, no dependency)
- **Sequential:** Required when later chapters depend on earlier ones (e.g., case studies referencing previous content)
- **Max parallel:** 3-4 agents. Beyond that, you can't verify results before context fills up.

### Agent Output Verification
After every agent completes:
1. Check the file count immediately
2. Read 1 sample file to verify format and naming
3. Don't just trust the agent's summary — verify against actual files

### When Agents Fail
- API 500 errors: Relaunch immediately with same instructions
- Partial output: Check what was written, continue from where it stopped
- Wrong naming: Fix immediately before launching the next batch (don't let errors compound)

---

## Content Quality Principles

### For Exam Prep Questions Specifically

1. **Every answer must be defensible from the source PDF.** If a fact isn't in the PDF, don't test it. Students study the workbook, not the internet.

2. **Distractors must be plausibly wrong, not obviously wrong.** The best distractor is one that would be correct for a DIFFERENT exam or a DIFFERENT regulation.

3. **Calculations must be verified.** Run the math. Don't trust that an agent computed 1.10^15 correctly — verify it.

4. **Tax rates change.** Always check the verified rates file before generating taxation questions. Never assume rates from general knowledge.

5. **Regulatory references decay.** SEBI circulars get superseded. PDF workbook versions are dated (Nov 2025, Jan 2026, etc.). The questions must match the specific workbook version, not generic knowledge.

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It's Tempting | Why It's Wrong |
|---|---|---|
| Generating from memory | Faster, no PDF reading delay | Introduces factual errors, misses exam-specific details |
| Letting agents choose naming | Simpler prompt, agents are "smart enough" | Causes runtime failures in downstream systems |
| Batching all validation to the end | Faster perceived progress | Compounds errors, makes fixing harder |
| Continuing when context is full | User seems to want more output | Quality degrades silently, trust is broken |
| Trusting agent summaries blindly | Saves time on verification | Agents can hallucinate details, miscount files |
| Skipping the PDF for "similar" exams | V-B is "just a simpler V-A" | Each workbook has specific wording, thresholds, examples that differ |

---

## Session Planning Template

Use this at the START of each new conversation:

```markdown
## Session Plan
- **Exams to cover:** [list]
- **Total PDF pages to read:** [estimate]
- **Total questions to generate:** [estimate]
- **Context budget:** Can handle [X] exams with full PDF reading
- **Checkpoint after:** Every [N] chapters
- **Handoff trigger:** When context reaches ~60% or after [X] exams
```

And at the END of each conversation:

```markdown
## Session Summary
- **Exams completed:** [list with question counts]
- **PDF-audited:** [which exams had full PDF reading]
- **NOT audited:** [which need review in next session]
- **Known issues:** [any errors, gaps, or naming problems]
- **Next session starts with:** [specific action]
```

---

## The Golden Rule

> **It is always better to generate fewer high-quality questions than more low-quality questions. If you can't maintain quality, stop and say so.**

The user hired you for accuracy, not speed. A question bank with 2 wrong answers out of 250 (0.8% error rate when properly sourced) is valuable. A question bank where 80% of questions were generated without reading the source material is a liability, regardless of how many passed structural validation.

Structural validation (XML format, 4 options, 1 correct) catches format errors.
It does NOT catch:
- Wrong correct answers
- Outdated regulatory references
- Missing exam-specific nuances
- Incorrect thresholds or section numbers
- Distractors that are accidentally correct

Only reading the source material catches those.

---

*Document created April 8, 2026. Apply these practices to every future content generation session.*
