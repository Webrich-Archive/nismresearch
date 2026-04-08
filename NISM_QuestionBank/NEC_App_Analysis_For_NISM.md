# NEC App Analysis for NISM Exam Prep App

**Date:** April 7, 2026
**Purpose:** Determine how to adapt the NEC iOS app codebase to build a NISM certification exam prep app.

---

## Verdict: This Will Work — Reuse Everything, Change Only Data

The NEC app architecture is a near-perfect fit for NISM. We do **not** need to create new model files or a new quiz provider. The existing `NECModels`, `NECQuizProvider`, and syllabus selection UI are all exam-agnostic — they operate on generic strings (exam names, chapter titles, weightage integers). The adaptation is purely a **data swap**: replace NEC plist content with NISM exam/topic data, update `AppSettingsImpl`, and modify the exam selection UI for 31 NISM exams.

---

## Why Existing Code Works As-Is

### NECModels.swift — No changes needed
The models are string-based and exam-agnostic:
- `NECExamSyllabus.examName` — just a `String`. Works for "Journeyman Electrician" or "Series VIII - Equity Derivatives".
- `NECChapter.title` — just a `String`. Works for "Chapter 2 - Wiring and Protection" or "Introduction to Options".
- `NECChapterWeightageAndArticles.weightage` — just an `Int`. 34% for NEC or 25% for NISM, same field.
- `NECChapterWeightageAndArticles.selectedArticles` — stays in the model. Since we skip sub-topic filtering for NISM, we simply leave it empty (which means "include all questions for this topic" — already the default behavior).

The `NEC` prefix in type names is cosmetic. It doesn't affect functionality. We can rename later if desired, but it's not required.

### NECQuizProvider.swift — No changes needed
- `setup()` — loads `ExamWeightages.plist` and `ChapterArticles.plist` by filename. We put NISM data in these same files.
- `loadNECExamSyllabi()` — reads exam names and chapter weightages from the plist. Works identically for NISM data.
- `filterQuestionIdsForTopic()` — when `selectedArticles` is empty, it returns all questions for the topic. This is exactly what we want for NISM (no sub-topic filtering).
- `prepareWeightedMockTestQuiz()` — pure math: `allocation = round(weightage / 100 * totalQuestions)`. Doesn't care what the exam is.
- `postProcessMockTestQuestions()` — section number sorting. We disable it via `AppSettingsImpl.allowSortQuestionsBySection() → false`.
- `getArticles()` — returns articles for a chapter from `ChapterArticles.plist`. For NISM, this plist can be empty or contain minimal entries since we don't use sub-topic filtering.

### Syllabus Selection UI — Minimal changes
- `NECSyllabusSelectionView` — shows chapters with weightages and article toggles. For NISM, it shows topics with weightages. The article expansion section simply won't show if there are no articles — or we can pre-select all articles so the toggle isn't needed.
- `NECExamSelectionView` — needs UI update to show 31 NISM exams grouped by category instead of 14 NEC exams. This is the **only view that needs meaningful modification**.

---

## Architecture Mapping: NEC to NISM

| NEC Concept | NISM Equivalent | Code Change |
|-------------|-----------------|:-----------:|
| **Exam** (e.g., "Journeyman Electrician") | **NISM Certification** (e.g., "Series VIII - Equity Derivatives") | Data only |
| **Chapter** (e.g., "Chapter 2 - Wiring and Protection") | **Topic/Unit** (e.g., "Introduction to Options") | Data only |
| **Article** (e.g., "Article 210 - Branch Circuits") | Not used (skip sub-topic filtering) | No change |
| **Chapter Weightage** (e.g., 34%) | **Topic Weightage** (e.g., "Options 25%") | Data only |
| **ExamWeightages.plist** | Same file, NISM data inside | Data only |
| **ChapterArticles.plist** | Same file, minimal/empty entries | Data only |
| **Topics.plist** | Same file, NISM questions organized by topic | Data only |
| **NECQuizProvider** | Reuse as-is | None |
| **NECModels** | Reuse as-is | None |
| **NECExamSyllabus** | Reuse as-is | None |

---

## What We Reuse As-Is (Zero Changes)

### From BaseSwift (101 files)
- **DataManager** — Question loading, topic management, quiz preparation
- **QuizProvider protocol** — Interface for weighted mock tests
- **Question / Answer / Topic models** — Core quiz data structures
- **UserTestStatisticsManager** — Progress tracking, correct/incorrect counts
- **UserPreferencesManager** — Syllabus/exam preference storage
- **Quiz UI** — Question display, answer selection, explanation view, results screen
- **Mock Test UI** — Timer, progress bar, review screen
- **Topic List UI** — Chapter-based practice with progress indicators
- **Settings UI** — General app settings framework
- **In-App Purchase** — Subscription management
- **CloudKit sync** — Progress sync across devices
- **PDF Export** — Test results export
- **Voice Over** — Accessibility

### From NEC App (reuse directly)
- **NECModels.swift** — All data structures work for NISM data
- **NECQuizProvider.swift** — Weighted mock test algorithm is exam-agnostic
- **NECSyllabusSelectionView.swift** — Topic/weightage selection UI (minor cosmetic tweaks at most)
- **Question XML format** — Same structure for NISM questions
- **Mandatory preference validation** — Same first-launch exam selection flow

---

## What Actually Changes

### 1. Data Files (Replace Content, Same Filenames)

**ExamWeightages.plist** — Replace NEC exam data with 31 NISM exams:
```xml
<key>Series VIII - Equity Derivatives</key>
<dict>
    <key>examCode</key><string>VIII</string>
    <key>topics</key>
    <dict>
        <key>Basics of Derivatives</key><integer>8</integer>
        <key>Understanding Index</key><integer>2</integer>
        <key>Introduction to Forwards and Futures</key><integer>25</integer>
        <key>Introduction to Options</key><integer>25</integer>
        <key>Option Trading Strategies</key><integer>3</integer>
        <key>Introduction to Trading Systems</key><integer>4</integer>
        <key>Clearing and Settlement System</key><integer>13</integer>
        <key>Legal and Regulatory Environment</key><integer>15</integer>
        <key>Accounting and Taxation</key><integer>3</integer>
        <key>Sales Practices and Investor Protection</key><integer>2</integer>
    </dict>
</dict>
```

**ChapterArticles.plist** — Minimal entries (since we skip sub-topic filtering). Can be empty dicts per topic, or omitted if the provider handles missing entries gracefully.

**Topics.plist** — All NISM questions organized by topic. Same format as NEC.

**Question XML files** — New NISM question content:
```xml
<QF id="Basics of Derivatives_1" sectionNumber="" articleNumber="0" articleName="">
    <question>
        <text><![CDATA[Which of the following is NOT a type of derivative?]]></text>
        <answers>
            <answer correct="no"><text>Futures</text></answer>
            <answer correct="no"><text>Options</text></answer>
            <answer correct="yes"><text>Debentures</text></answer>
            <answer correct="no"><text>Swaps</text></answer>
        </answers>
        <explanation><text><![CDATA[Debentures are debt instruments, not derivatives...]]></text></explanation>
    </question>
</QF>
```

**Question ID format:** `{TopicTitle}_{QuestionNumber}` — same as NEC's `{ChapterTitle}_{QuestionNumber}`. DataManager uses the prefix before `_` to group questions by topic.

### 2. AppSettingsImpl.swift (Modify)

| Setting | NEC Value | NISM Value |
|---------|-----------|------------|
| `getAppKey()` | "NEC" | "NISM" |
| `getAppName()` | "NEC Mastery" | "NISM Mastery" (or similar) |
| `getAppID()` | "6720711044" | New App Store ID |
| `getMockTestQuizQuestionCount()` | 100 | 100 (same, adjustable per exam) |
| `allowSortQuestionsBySection()` | true | **false** (NISM has no section numbers) |
| `getCustomMainScreenItems()` | Exam Prep, Hour Log, Calculators, Quick Reference | **Exam Prep only** (or + Study Material) |
| `getAppType()` | APP_WITH_MAIN_SCREEN_ITEMS_FROM_CUSTOM_LIST_AND_TOPIC_SCREEN | Could simplify to just topics screen |
| `getInAppProductIds()` | NEC subscription IDs | New NISM subscription IDs |
| `configureQuickReference()` | NECQuickReferenceSetup.configure() | **Remove** |
| `getCustomViews()` | calculators, hourLog | **Remove** or empty |
| `getQuizProvider()` | NECQuizProvider.shared | NECQuizProvider.shared (same!) |

### 3. Exam Selection UI (Modify)

`NECExamSelectionView.swift` — Update to display 31 NISM exams grouped by category:
- **Derivatives:** Series I, IV, VIII, XIII, XVI
- **Mutual Funds:** Series V-A, V-B
- **Compliance:** Series III-A, III-C
- **Investment Advisory:** Series X-A, X-B, X-C
- **AIF:** Series XIX-A, XIX-B, XIX-C, XIX-D, XIX-E
- **Portfolio Management:** Series XXI-A, XXI-B
- **Operations:** Series II-A, II-B, VI, VII
- **Specialized:** Series IX, XII, XV, XVII, XXIII, XXIV, XXV-A, IFSCA-01

This is the only view needing meaningful UI work.

### 4. Files to Delete (NEC-Specific Features)

| Feature | Files | Count |
|---------|-------|:-----:|
| Calculators | `App/Calculators/` | ~22 files |
| Quick Reference | `App/QuickReference/` | ~17 files |
| Hour Log | `App/HourLog/` | ~5 files |
| NEC Providers (QR, Calculator, Symbol) | `NECProviders.swift` | 1 file |
| **Total deletions** | | **~45 files** |

---

## Summary of Changes

| Category | Action | Effort |
|----------|--------|:------:|
| **BaseSwift** (101 files) | No changes | None |
| **NECModels.swift** | Reuse as-is | None |
| **NECQuizProvider.swift** | Reuse as-is | None |
| **NECSyllabusSelectionView.swift** | Reuse as-is (minor cosmetic tweaks optional) | None-Low |
| **AppSettingsImpl.swift** | Update app config, remove NEC features | Low |
| **NECExamSelectionView.swift** | Redesign for 31 grouped NISM exams | Medium |
| **ExamWeightages.plist** | Replace data with 31 NISM exams | Medium |
| **Topics.plist** | Replace with NISM topic structure | Medium |
| **ChapterArticles.plist** | Minimal/empty (no sub-topic filtering) | Low |
| **Question XMLs** | Create ~3,000-5,000 NISM questions | **High (content work)** |
| **Delete NEC features** | Remove ~45 calculator/QR/hourlog files | Low |

**The only actual code work is updating AppSettingsImpl and the exam selection view. Everything else is data.**

---

## Handling Topic Overlap Across Exams

Since many NISM exams share topics (e.g., "SEBI Act & Regulations" appears in 24 exams), we have two strategies:

### Strategy A: Shared Question Pool (Recommended)
- Questions for shared topics (e.g., "SEBI Act & Regulations") are stored once
- Multiple exams reference the same question pool via Topics.plist
- **Pro:** Less content to create, consistent quality
- **Con:** Slightly more complex plist structure

### Strategy B: Duplicate Per Exam
- Each exam has its own complete question set
- Shared topic questions are duplicated
- **Pro:** Simpler plist, exam-specific nuances possible
- **Con:** More content to maintain

**Recommendation:** Strategy A for shared topics, with exam-specific questions for unique topics.

---

## Data Volume Estimate

| Category | Count | Notes |
|----------|-------|-------|
| Exams | 31 | All active NISM certifications |
| Unique topics across all exams | ~55 | From TopicOverlapMetrics |
| Questions per topic | 30-100 | Varies by topic importance |
| Total questions needed | ~3,000-5,000 | NEC has 8,160 for comparison |
| Question XML files | ~3,000-5,000 | One per question |
| Mock test size | 50-150 per exam | Matches actual exam length |

---

## Implementation Phases

### Phase 1: Core App (MVP)
1. Copy NEC project, strip NEC-specific features (calculators, QR, hour log)
2. Update `AppSettingsImpl.swift` (app name, IDs, disable section sorting, remove custom views)
3. Update `NECExamSelectionView.swift` for 31 NISM exams grouped by category
4. Replace `ExamWeightages.plist` content with all 31 NISM exams and topic weightages (from BasicResearch.md)
5. Replace `Topics.plist` with NISM topic structure
6. Create question content for 2-3 pilot exams (e.g., V-A, VIII, XXIV)
7. Test weighted mock test generation end-to-end

### Phase 2: Content
8. Generate questions for all 31 exams (AI generation + manual review)
9. Implement shared question pool for overlapping topics
10. Encrypt questions for production

### Phase 3: Polish
11. App Store assets, icons, screenshots
12. In-app purchase setup
13. CloudKit sync configuration
14. Beta testing

---

## Key Architectural Decision: Single App vs Multi-App

### Option A: Single App (All 31 Exams) — Recommended
- User selects exam on first launch (same as NEC pattern)
- All question data bundled (or downloaded per exam)
- Matches NEC's approach (14 exams in one app)

### Option B: Separate Apps Per Exam Family
- Not recommended — more maintenance, same BaseSwift underneath

---

## Risk Areas

| Risk | Mitigation |
|------|------------|
| 31 exams is 2x NEC's 14 — exam selection UI may be cluttered | Group exams by category with collapsible sections |
| Question content volume (~5,000 Qs) | AI generation + manual review. Start with high-demand exams |
| Some exams have caselets (X-A, X-B, XV, etc.) | BaseSwift Question model already has `caseStudy: CaseStudy` field |
| App bundle size with all questions | Accept ~50MB bundle or add on-demand download |
| NEC prefix in type names | Cosmetic only — rename later if desired, not blocking |
| `ChapterArticles.plist` expected by provider | Provide minimal/empty entries per topic to satisfy the loader |

---

## Bottom Line

| What | Effort |
|------|:------:|
| Code changes | **Very Low** (AppSettingsImpl + 1 view) |
| Data preparation | **Medium** (plists for 31 exams) |
| Content creation | **High** (3,000-5,000 questions) |
| BaseSwift changes | **Zero** |
| Model/Provider changes | **Zero** |

The NEC codebase provides **~95% of what we need**. No new models, no new provider, no new quiz algorithm. The main work is content creation (questions), not code.

---

*Analysis compiled on April 7, 2026 based on thorough review of /Users/shivam/workspace/NEC and /Users/shivam/workspace/BaseSwift.*
