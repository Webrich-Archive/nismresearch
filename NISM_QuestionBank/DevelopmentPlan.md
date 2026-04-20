# NISM Prep — Development Plan

**Date:** April 20, 2026
**Supersedes:** `NEC_App_Analysis_For_NISM.md` (April 7, 2026) — retain that doc as the architectural rationale; this one is the execution plan.

---

## What's changed since the April 7 analysis

The April-7 analysis correctly concluded the NEC codebase gives us ~95% of the iOS app for free. Two big things have moved since:

| Dimension | April 7 | Now (April 20) |
|---|---|---|
| Content availability | "Need to create 3,000–5,000 NISM questions (High effort)" | **13,393 questions across all 31 exams — shipped.** 324 topic-tagged chapters, 4-section expert explanations. |
| Plist alignment with NEC schema | Hypothesis | **Verified.** `ExamWeightages.plist`, `Topics.plist`, `TopicsLite.plist`, `ChapterArticles.plist`, `QuestionToArticleNumber.plist`, and all 13,393 `*.xml` files match NEC's `Data/` layout byte-for-byte. Full audit passed. |
| Business model clarity | Open | Set: freemium + subscription (₹249/mo all-access, ₹399/exam), B2B as a later layer. |
| Multi-platform requirement | iOS primary | **iOS + Android + web, unified login.** Matches existing infra: BaseSwift + BaseAndroid + Astro marketing template + Firebase. |

**Net effect:** the biggest Phase (content creation) is done. What remains is a straightforward factory run through the existing NEC/BaseSwift rails, plus Android port, plus web surface.

---

## Status summary

### ✅ Done
- **Content:** 13,393 questions, 324 topics, 31 exams — production-ready in NEC-compatible plist + XML schema
- **4-section explanations** (Logic / Trap / Cross-Exam Context / Pro-Tip) — competitive moat
- **iOS architecture** proven in NEC (exam-agnostic models, exam-agnostic quiz provider)
- **Android architecture** proven in NEC-ANDROID + BaseAndroid (migration plan written)
- **Web template** proven across 7 existing Astro marketing sites
- **Question encryption pipeline** (skill `encrypt-questions`) — proven
- **Data integrity validator** (skill `test-01-data-integrity-validator`) — proven
- **Business plan + investor deck** (BusinessPlan.md + BusinessPlan.html)

### 🟡 In flight / ready to start
- iOS reskin (fork NEC → NISM Prep)
- Android reskin (fork NEC-ANDROID → NISM Prep Android)
- Astro marketing site (fork nec-site → nism-prep-site)

### ✅ Decisions now locked
1. **App identity:** "NISM Prep" · Bundle `com.webrich.nsim` (inherited typo) · App Store ID `6504492275` (reuse — update existing PMS Distributors listing into the flagship)
2. **Existing `/workspace/NISM/` stub:** renamed by user to `/workspace/PMS_NISM/`. Untouched. Path `/workspace/NISM/` free for the new flagship.
3. **Existing paid PMS users:** grandfather via `PMS_FULL_VERSION` SKU (keep legacy IAP alive; auto-restore-purchase grants lifetime XXI-A access).
4. **OriginalQuestions:** stays in `/aiworkspace/nismresearch/` — never copied into the project. Project Data/ holds only 5 plists + encrypted `Questions/`.
5. **Git:** fresh `git init` in `/workspace/NISM` (no NEC history inherited).

### ⬜ Still-open decisions
1. **Pilot launch exams** — 5 biggest for marketing push (V-A, VIII, XV, X-A, XXI-A recommended)
2. **Firebase project** — new one for NISM Prep, or reuse existing PMS Distributors Firebase project (if one exists)
3. **Web dashboard scope** — Astro marketing only (Phase 6a) vs Astro marketing + Next.js app dashboard (Phase 6b)
4. **Subscription SKU structure** — tiers (monthly/quarterly/half-yearly/yearly) and per-exam unlocks — pricing finalised in Business Plan; final SKU IDs locked in Week 2

---

## Architecture (no change from April 7 analysis)

See `NEC_App_Analysis_For_NISM.md` for the detailed mapping. Summary:

- **BaseSwift** (101 files): zero changes
- **NEC** reusable modules: `NECModels.swift`, `NECQuizProvider.swift`, `NECSyllabusSelectionView.swift` — copy and rename
- **What we actually touch:** `AppSettingsImpl.swift`, `NECExamSelectionView.swift` (now `NISMExamSelectionView.swift`), and drop NEC-specific calculators/QR/hour-log
- **Question ID format:** `{TopicKey}_{N}` — already used in our question bank

---

## Tracks

### Track A — iOS app (NISM Prep iOS)
### Track B — Android app (NISM Prep Android)
### Track C — Marketing site (Astro + SEO)
### Track D — (Optional) Web app dashboard (Next.js)
### Track E — Business ops (App Store listings, subs, payments, analytics)

Tracks A and B are parallelizable once Track A Phase 1 completes. Tracks C and E run in parallel with A/B.

---

## Track A — iOS app: 4-week sprint plan

Assumes solo dev on BaseSwift fluency; double for unfamiliar contributor.

### Week 1 — Fork, purge, content drop

**Folder:** `/workspace/NISM` (the earlier stub at this path was renamed by the user to `/workspace/PMS_NISM/`; left untouched).
**Bundle ID:** `com.webrich.nsim` (**Option A — inherit the existing PMS app's bundle ID, typo and all**). Reason: we're updating the existing App Store listing (App ID `6504492275`, currently "NISM PMS Distributors Exam") into the flagship "NISM Prep". Existing paid PMS users auto-receive the all-31-exams upgrade on app update. The `nsim` typo is cosmetic but permanent — shows up in analytics, backend keys, TestFlight. Acceptable tradeoff for reusing the existing App Store presence and paid-user base.
**App Store ID:** `6504492275` (reuse).
**StoreKit:** existing IAP `PMS_FULL_VERSION` preserved as a legacy grandfather unlock; new subscription SKUs added alongside.
**Git:** fresh `git init` in `/workspace/NISM` (not inheriting NEC history).
**OriginalQuestions stays in `/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/`** — never copied into the project. The project's `Data/` folder contains only the 5 plists + encrypted `Questions/`.

| Day | Work |
|---|---|
| Mon | Fork: `cp -r /workspace/NEC /workspace/NISM` (excluding `.git`). Fresh `git init`. Rename: scheme/target → `NISM`. `NEC.xcodeproj` → `NISM.xcodeproj`. `NEC-Info.plist` → `NISM-Info.plist`. `NEC.entitlements` → `NISM.entitlements`. `NECStoreConfig.storekit` → `NISMStoreConfig.storekit`, `ENC-Test-Subs.storekit` → `NISM-Test-Subs.storekit`. Update `PRODUCT_BUNDLE_IDENTIFIER` to `com.webrich.nsim`. Display name → "NISM Prep". Initial sanity build. |
| Tue | Purge NEC content + NEC-specific features inside the fork: delete NEC's `Data/OriginalQuestions/`, `Data/Questions/`, `Data/MathMLs/`, and all 5 NEC data plists (`Topics.plist`, `TopicsLite.plist`, `ExamWeightages.plist`, `ChapterArticles.plist`, `QuestionToArticleNumber.plist`). Delete `App/Calculators/` (~22 files), `App/QuickReference/` (~17 files), `App/HourLog/` (~5 files), `NECProviders.swift`. Strip Quick Reference + Calculator + Hour Log configuration from `AppSettingsImpl.swift`. Verify the project still compiles (it should — BaseSwift engine is exam-agnostic). |
| Wed | Content drop (NISM): copy the 5 plists from `/aiworkspace/nismresearch/NISM_QuestionBank/` → `/workspace/NISM/Data/`. Run `encrypt-questions` skill with source `/aiworkspace/nismresearch/NISM_QuestionBank/OriginalQuestions/` and destination `/workspace/NISM/Data/Questions/` (encrypted). **OriginalQuestions stays in the research repo — never copied into the project.** Run `test-01-data-integrity-validator` pointed at project plists vs encrypted Questions/ (skill may need tweaking since source OriginalQuestions is external — flagged). |
| Thu | Tune `AppSettingsImpl.swift`: `getAppKey → "NISM"`, `getAppName → "NISM Prep"`, `getAppID → "6504492275"` (reuse), `allowSortQuestionsBySection → false`, remove Quick Reference / Calculator / Hour Log config. Preserve `isDataEncrypted(true)`, `getRandomizeAnswers(true)`. IAP product IDs: keep `PMS_FULL_VERSION` as a legacy grandfather SKU, add the new subscription SKUs (final configured in Week 2). |
| Fri | Color palette: update `ColorAssets.xcassets` to finance navy/emerald. Placeholder app icon (final designer handoff in Week 3 — but since we're updating an existing App Store listing, the current PMS app icon stays live until Week 4 submission). Initial git commit to the fresh `/workspace/NISM` repo. |

**Deliverable:** project at `/workspace/NISM` builds, launches, loads NISM content in the NEC-inherited generic quiz engine. Bundle = `com.webrich.nsim`, App ID = `6504492275`. Data folder contains only 5 plists + encrypted `Questions/` (no OriginalQuestions). Exam selector still shows NEC's 14 exams (next week fixes).

### Week 2 — NISM exam selection + settings
| Day | Work |
|---|---|
| Mon | Clone `NECExamSelectionView.swift` → `NISMExamSelectionView.swift`. Replace NEC 14-exam list with 31 NISM exams grouped by category (Derivatives / Mutual Funds / Compliance / IA / AIF / PMS / Operations / Specialized). Use collapsible sections (`DisclosureGroup`) to avoid clutter. |
| Tue | Tune `AppSettingsImpl.swift`: `getAppKey("NISM")`, `getAppName("NISM Prep")`, `allowSortQuestionsBySection(false)`, strip custom-views, remove Quick Reference setup. Keep `isDataEncrypted(true)`, `getRandomizeAnswers(true)`. |
| Wed | Subscription SKU config in `NISMStoreConfig.storekit`: monthly (₹249), quarterly (₹649), half-yearly (₹1,199), yearly (₹1,999). Per-exam unlock SKUs: `NISM_XIX_A_FULL`, `NISM_VIII_FULL`, etc. Follow NEC's StoreKit pattern. |
| Thu | Verify weighted mock test generation end-to-end for 5 pilot exams (V-A, VIII, XV, X-A, XXI-A). Validate that chapter weightages drive correct question distribution. |
| Fri | Bug-bash: verify Topics view, mock-test flow, history, settings, subscription paywall all work with NISM data. Screenshot every screen. |

**Deliverable:** fully functional NISM Prep app on simulator. All 31 exams selectable. Mock tests generate correctly. Subscription paywall triggers.

### Week 3 — Polish, Firebase, assets
| Day | Work |
|---|---|
| Mon | Firebase project setup (new `nism-prep` Firebase project — or reuse existing PMS Distributors Firebase project if one exists). Download new `GoogleService-Info.plist`. Verify Firestore sync + AppCheck. Test cross-device sync (simulator + physical device) with same Firebase user. |
| Tue | App Store Connect: **update the existing "NISM PMS Distributors" listing** (App ID `6504492275`) — no new app registration needed since we're reusing the bundle ID. Add the new subscription SKUs to the existing app. Keep `PMS_FULL_VERSION` active as a legacy SKU so existing paid users don't lose access. Draft the version update notes: "What's New — now covers all 31 NISM certification exams…". |
| Wed–Thu | App icon redesign (the current PMS icon needs a rebrand since the app is becoming the flagship). All required sizes via `app-icon-generator` skill. Launch screen. 6.7"/6.5"/5.5" screenshots showcasing the 31-exam catalogue + mock engine. Use Remotion/simulator for screenshot automation (skill `appstore-video` if needed for preview videos). |
| Fri | App Store listing copy: rename "NISM PMS Distributors Exam" → "NISM Prep — All Exams" (or similar). New subtitle, description, keywords (SEO for 31 exam keywords, not just XXI-A). Use `appstore-metadata` skill. |

**Deliverable:** App Store-ready binary with metadata update targeting the existing App ID `6504492275`. Screenshots uploaded. Existing paid users (with `PMS_FULL_VERSION`) grandfathered on the updated listing.

### Week 4 — TestFlight, beta, submit
| Day | Work |
|---|---|
| Mon | Internal TestFlight build. Dogfood 2-3 hours covering every feature. |
| Tue | Recruit 10 external beta testers (LinkedIn finance cohort). Send TestFlight invites. |
| Wed–Thu | Bug-fix on real-user feedback. Update screenshots/metadata if needed. |
| Fri | Submit for App Store review. |

**Milestone:** **iOS MVP (no calculators yet) live in App Store end of week 5 or 6** (accounting for 1–2 week review).

### Weeks 5–8 — Calculators + Quick References (v1.1 release)

Matches NEC's pattern (25+ calculators, 7 Quick Reference screens). Calculators are the biggest post-certification retention hook: candidates keep the subscription because the tools are useful daily in their job. NEC figured this out — we do the same.

Follow skills `code-03-calculator-setup` and `code-04-quick-reference-setup`. Each calculator is ~1 SwiftUI view + input validation + formula + explanation panel = roughly 0.5–1 day per calc.

See **"Track A.2 — Calculator catalogue"** section below for full list. Ship in two v1.x releases:
- **v1.1 (Week 6–7):** Tier 1 + Tier 2 calcs (17 high-frequency calculators — TVM/tax/planning + all derivatives)
- **v1.2 (Week 8–9):** Tier 3 + Tier 4 + Tier 5 + Tier 6 + Tier 7 + all QR screens (13 remaining calcs + 8 QR cards)

---

## Track A.2 — Calculator catalogue (NISM-specific, 30 calculators)

NEC ships 25+ domain calculators (Wire Size, Voltage Drop, Conduit Fill, etc.) because electricians use them daily after passing. NISM certified professionals — MF distributors, derivatives traders, research analysts, advisers, fund managers, compliance officers — need the same kind of daily-utility tools. This is where the app stops being just an exam bank and becomes the tool they keep in their pocket for their career.

Each calculator has:
- SwiftUI form with labeled inputs + India-locale number formatting (lakhs/crores toggle)
- Formula card explaining the math (doubles as exam revision)
- Relevant NISM exam tags (so candidates practising V-A can jump to the SIP calculator from the exam screen)
- Save/share result (screenshot or PDF export via existing BaseSwift PDF pipeline)

### Tier 1 — Universal TVM, Tax & Planning (11 calcs) — covers V-A, V-B, X-A, X-B, XV, XVII, XIX, XXI, XXIII

| # | Calculator | Inputs | Output | Exam relevance |
|---|---|---|---|---|
| 1 | **SIP Future Value** | Monthly SIP, rate, years | FV, total invested, wealth gained | V-A, V-B, X-A, X-B, XVII |
| 2 | **Lumpsum / Compound Growth** | PV, rate, years, compounding freq | FV, total growth | Universal |
| 3 | **XIRR Calculator** | Multiple dated cashflows | Annualised return | V-A, XV, XXI, XIX |
| 4 | **SWP Withdrawal Planner** | Corpus, rate, monthly withdrawal, inflation | Months sustained, end corpus | X-A, XVII |
| 5 | **Goal-based SIP Planner** | Target amount, horizon, expected return | Monthly SIP required | V-A, X-A, XVII |
| 6 | **Retirement Corpus Calculator** | Current age, retire age, monthly need, inflation, post-retire rate; NPS/PPF/EPF presets | Corpus needed at retirement + monthly SIP today | X-A, X-B, XVII |
| 7 | **Rule of 72 / Time to Double** | Rate ↔ years | The other value | V-A, V-B, X-A |
| 8 | **LTCG / STCG Calculator** | Asset class (equity/debt/real estate), buy date + price, sell date + price | Tax liability with indexation for debt | V-A, X-A, X-B, XV |
| 9 | **Capital Gains Exemption (54 / 54F / 54EC)** | Gain amount, exemption section, new investment details | Taxable gain after exemption + eligibility check | X-A, X-B, XVII |
| 10 | **Old vs New Tax Regime** | Income, 80C/80D/HRA/home loan interest | Tax in both regimes + recommendation | X-A, X-B, XVII |
| 11 | **HLV / Life Insurance Need** | Age, income, dependents, existing cover, liabilities, income replacement horizon | Insurance cover gap (HLV method + Income Replacement method) | X-A, X-B, XVII |

### Tier 2 — Derivatives (6 calcs) — covers VIII, I, IV, XIII, XVI, XIX-E

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 12 | **Futures Margin Calculator** | Segment, underlying, lot size, price | SPAN + Exposure margin estimate |
| 13 | **Option Payoff Diagrammer** | Strike, premium, option type, spot range | Payoff chart + breakeven |
| 14 | **Black-Scholes / Option Greeks** | Spot, strike, time, vol, rate | Premium + Δ, Γ, θ, ν, ρ |
| 15 | **Implied Volatility Solver** | Market option price, spot, strike, time, rate | IV via Newton-Raphson |
| 16 | **Beta Hedge Calculator** | Portfolio value, portfolio beta, index spot | Number of index futures to hedge |
| 17 | **Brokerage & STT Calculator** | Segment (CASH/FNO/COMM/CUR), buy/sell value | All charges (STT, exchange, GST, SEBI, stamp) + net |

### Tier 3 — Fixed Income (3 calcs) — covers IV, XV, XIX

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 18 | **Bond YTM / Duration** | Coupon, FV, price, years to maturity, coupon frequency | YTM, Modified Duration, Macaulay Duration, Convexity |
| 19 | **PV01 / DV01** | Bond duration, yield, FV | PV01 per ₹100 / per ₹1 crore notional |
| 20 | **Clean vs Dirty Price** | Coupon, last coupon date, settlement date | Accrued interest, dirty price |

### Tier 4 — Fund/PE/Hedge Fund performance (5 calcs) — covers XIX, XXI, XV

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 21 | **Sharpe / Sortino / Treynor / Jensen's Alpha** | Portfolio returns series, risk-free rate, benchmark (optional) | All 4 ratios + Information Ratio |
| 22 | **HWM / Hurdle / Waterfall** | Fund return, hurdle, catch-up %, carry %, beginning HWM | LP/GP distribution, new HWM |
| 23 | **IRR / MOIC / TVPI / DPI** | Dated PE cashflows | All 4 metrics + KS-PME if benchmark supplied |
| 24 | **Management Fee Calculator** | Committed capital, invested capital, fee %, structure (committed/invested/step-down) | Annual + cumulative fee |
| 25 | **TWR vs MWR** | Cashflows + NAV series | Both returns + variance |

### Tier 5 — Equity Research / Valuation (3 calcs) — covers XV, XXI-B

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 26 | **DCF Valuation** | 5-yr FCF, terminal growth, WACC, net debt | Fair value per share |
| 27 | **Dividend Discount Model** | Current dividend, growth (stable/2-stage), discount rate | Intrinsic value |
| 28 | **CAPM / WACC** | Risk-free rate, beta, market premium, debt cost, tax, debt-equity ratio | Cost of equity + WACC |

### Tier 6 — Social Impact (1 calc) — covers XXIII

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 29 | **SROI Calculator** | Impact value, investment, deadweight %, drop-off %, attribution %, displacement % | SROI ratio with full adjustment chain |

### Tier 7 — Compliance & AML (1 calc) — covers XXIV, IFSCA-01, III-A, III-C

| # | Calculator | Inputs | Output |
|---|---|---|---|
| 30 | **CTR / STR Threshold Checker** | Transaction type (cash/wire/combined), amount, frequency, account tenure, PEP flag | Cash Transaction Report / Suspicious Transaction Report triggers + reporting deadlines + regulatory section reference |

**Total: 30 calculators** (NEC ships 25+; we go meaningfully deeper). All formulas are already in our question bank's "Logic" explanations — reuse the math, ship the UI.

**Build effort:** ~21 person-days (many calcs share form patterns; Tier 1 calcs are 0.5 day each, Tiers 4–5 are closer to 1 day each).

### Quick Reference screens (8 cards) — matches NEC's 7 QR pattern

Static reference cards for things candidates look up mid-practice or mid-job.

| # | QR Screen | Content | Exam |
|---|---|---|---|
| 1 | **SEBI Regulations Cheat-Sheet** | 1-line summary of each key reg (ICDR, LODR, Intermediaries, AIF, PIT, PFUTP, ICDR Ch X-A, etc.) with regulation numbers | All |
| 2 | **Tax Rates Reference** | LTCG/STCG slabs by asset, income tax slabs old vs new, 80G categories, indexation table (recent CIIs) | V-A, X-A, X-B, XVII, XXIII |
| 3 | **Derivatives Lot Sizes & Margins** | Current NSE F&O lot sizes, SPAN factors, circuit limits | VIII, XIII, XVI |
| 4 | **AIF Category Comparison** | Cat I/II/III side-by-side: sponsor commit, concentration, leverage, fee structure, taxation | XIX-A/B/C/D/E |
| 5 | **NISM Exam Quick Info** | All 31 exams: code, duration, marks, pass mark, negative marking, validity, fees | All |
| 6 | **SAS Standards Map** | SAS-100 through SAS-1600 mapped to the 16 SEBI ICDR eligible activities + indicator examples | XXIII |
| 7 | **Mutual Fund Categorisation** | SEBI 36-category scheme classification with min/max allocation rules | V-A, V-B, X-A |
| 8 | **Ratio & Formula Card** | All financial ratios (P/E, P/B, ROE, ROCE, DuPont, EV/EBITDA) + derivatives Greeks + bond duration formulas | XV, XXI-B, VIII, IV |

**Build effort:** ~5 person-days. These are static SwiftUI views with Tailwind-like grouped cards. Content comes from our question bank (already have the regulations, rates, standards documented).

### Why this matters strategically

1. **Post-exam retention.** A candidate who passes V-A has no reason to stay subscribed — unless SIP + LTCG + SWP + HLV calculators live in the same app. Same for VIII (Futures Margin, Option Greeks, IV Solver), XV (DCF, WACC), XIX (HWM + Waterfall), XXIV (CTR/STR Checker).

2. **Differentiation.** PrepCore, nismexams.in, Pass4sure — none have calculators. This is a clean moat, same as NEC's calculator catalogue against generic quiz apps.

3. **Revenue extension.** Calculators can be paywalled — free users get 5 calcs; paid users get all 30. Another justification for the ₹249/mo subscription.

4. **Marketing surface.** Each calculator = 1 landing page for long-tail SEO ("SIP calculator India", "F&O margin calculator", "HLV calculator", "CTR threshold checker", "SROI calculator"). 30 calculators × 1 page each = 30 more SEO surfaces on top of the 31 exam pages. **61 total SEO surfaces.**

5. **B2B hook.** AMCs + banks will evaluate us by the calculator suite, not just the question bank. "Budget 2026-ready Old vs New Tax Regime Calculator + CTR/STR threshold flagger aligned with latest RBI master circulars" — that sells to an AMC's L&D head *and* to a bank's compliance team simultaneously.

### Skills mapping
- `code-03-calculator-setup` — Add calculator hub + individual calc views
- `code-04-quick-reference-setup` — Add QR module
- `code-12-consistency` — PDF export pattern (calculators export to PDF with watermark for free users)

---

## Track B — Android app: 3–4 weeks

Starts when Track A Week 1–2 is stable (shared Firebase project, validated subscription SKUs).

### Week 1 — Fork + content
- `cp -r NEC-ANDROID → NISM-Prep-Android`
- Rename package `com.webrich.necexamprep → com.webrich.nismprep`
- Drop content (same plists + XMLs, Android uses identical format)
- Follow `BaseAndroid/migrationplan.md`

### Week 2 — NISM code adaptations
- Port NISMExamSelectionView equivalent to Android (Jetpack Compose)
- Android `AppSettings` overrides mirror iOS
- Google Play Billing setup (subscriptions + per-exam unlocks)
- Add Android app to same Firebase project

### Week 3 — Polish + Play Store
- App icon (already designed in Track A — export for Android)
- Screenshots (same layouts, Android aspect ratios)
- Play Store listing copy (reuse iOS copy with Play Store adjustments)
- Internal testing track

### Week 4 — Closed beta + submit
- 10-20 closed-beta testers
- Bug-fix
- Submit for Play Store review (usually faster than App Store)

**Milestone:** **Android live in Play Store by end of week 9–10 of overall project.**

---

## Track C — Marketing site (Astro + Tailwind)

Runs in parallel, 1 week of focused work.

### Scope (clone of nec-site pattern)
- `cp -r /workspace/nec-site → /workspace/nism-prep-site`
- 1 homepage + 31 exam-specific landing pages
- 1 pricing page
- 1 about / team page
- Blog scaffold (10 starter articles derived from our 4-section explanations — "What is SROI?", "How SAS 200 applies to rural healthcare", etc.)
- App Store + Play Store download badges
- Firebase Auth login button (so marketing site can preview content behind sign-in)
- Razorpay checkout (for web purchases → unlock synced via Firebase to mobile apps)
- SEO schema markup (skill `searchfit-seo:schema-markup`)
- Existing blog automation pipeline (skill `youtube-blogger` — we already have automation for 7 sites, migrate for 8th)

**Domain:** register once final brand is picked (`nismprep.in`, `nismmastery.in`, `prepnism.com` TBD).

**Deploy:** Vercel (same pattern as existing Astro sites).

**Milestone:** **Marketing site live + indexed within 2 weeks of domain registration.**

---

## Track D — (Optional) Web app dashboard

**Decision point:** ship after iOS + Android are in-market. Reason: Astro marketing site already captures SEO + top-of-funnel; a full web dashboard is additive, not a dependency.

### If built (~4 weeks)
- Next.js 16 App Router on Vercel
- Firebase Web SDK (same Firebase project as iOS + Android → automatic cross-device login)
- Firestore client reads (user has existing subscription + attempt history)
- Same 4-section question UI + mock mode + results
- Razorpay web checkout (live already from Track C)
- Reads encrypted question XML from Firestore Storage (or falls back to unencrypted for web since browser can't protect keys anyway — confirm with existing encryption design before shipping)

**Timing:** month 4 or later, after B2B enterprise conversations surface (enterprise clients often want a web-admin dashboard).

---

## Track E — Business ops (runs throughout)

### Week 1-2
- Brand name + domain registration
- Webrich company brand tagging (App Store developer account already in place)
- Razorpay merchant onboarding (5–7 day approval)
- Trademark search on shortlisted name (quick check, full filing later)

### Week 3-4
- App Store Connect listings (iOS + Android)
- StoreKit subscription config
- Privacy policy + terms (copy from NEC templates, adjust for India jurisdiction)
- GDPR/DPDP compliance review (given India DPDP Act 2023)

### Month 2+
- SEO content production (5-10 articles/week on blog)
- YouTube channel setup + first 10 short explainers from our Pro-Tips
- LinkedIn company page + organic content calendar
- Early B2B outreach to 5 AMCs/brokerages (pilot offers)

---

## Consolidated timeline

```
Week 1  │ iOS: fork + content drop         │ Ops: brand + domain + Razorpay
Week 2  │ iOS: exam selection + settings   │ Ops: App Store Connect setup
Week 3  │ iOS: Firebase + assets           │ Android: fork (start)
Week 4  │ iOS: TestFlight + submit         │ Android: content drop
Week 5  │ iOS: App Store review            │ Android: code adaptations + Web: marketing site start
Week 6  │ iOS LIVE ✓                       │ Android: Play Store submit   + Web: marketing site deploy
Week 7  │ Marketing, feedback, iterate     │ Android: Play Store review
Week 8  │ Month 2                          │ Android LIVE ✓
Week 9-12  │ First B2B outreach, SEO content ramp, optimize conversion
Month 4+   │ Web dashboard (Track D) if B2B demand surfaces
```

**Aggressive solo target:** iOS shipped week 6, Android shipped week 8, marketing site live week 6 — all three in market by end of month 2.

---

## Subscription + pricing (final)

Matches business plan:

| Tier | Price | Duration | SKU |
|---|---|---|---|
| Monthly | ₹249 | 30 days | `NISM_SUB_MONTHLY` |
| Quarterly | ₹649 | 90 days | `NISM_SUB_QUARTERLY` |
| Half-yearly | ₹1,199 | 180 days | `NISM_SUB_HALF_YEARLY` |
| Yearly | ₹1,999 | 365 days | `NISM_SUB_YEARLY` |
| Single exam (per-exam) | ₹399 | 30 days | `NISM_{CODE}_30D` |
| Career bundle (V-A + V-B + X-A) | ₹699 | 30 days | `NISM_BUNDLE_ADVISOR` |

Free tier enforced in-app: 50 questions/day across any exam + 1 free full mock per exam.

---

## Risks & mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|:-:|:-:|---|
| 31-exam selector feels cluttered | Medium | Medium | Collapsible category groups (8 categories); recent-exams shortcut; search-by-code pattern |
| App Store rejects first submission | Medium | Low | Use NEC's proven Info.plist + permissions + privacy strings verbatim. Subscription copy follows Apple guidelines. |
| Firebase cost scales unexpectedly | Low | Low | Free tier = 50K MAU. First bill only after Year-1 growth. Monitor monthly. |
| Bundle size with 13K encrypted XMLs | Medium | Low | NEC has 8,160 Qs and ships at ~50 MB. We'll land ~75–80 MB. Above 100 MB Apple asks user for Wi-Fi download. Below that, ship bundled. |
| Subscription refunds / chargebacks | Low | Medium | Apple/Google handle refunds; for web via Razorpay set clear refund policy (7-day). |
| Content refresh when SEBI updates syllabus | Ongoing | Medium | Existing GitHub Actions pipeline (auto-memory notes 7 sites already have this pattern) — extend to NISM content auto-update cadence. |
| Brand trademark collision | Low | Medium | Do USPTO/India TM search on shortlisted names before registering |
| Firebase Auth cross-device login on web | Low | Low | Firebase Web SDK is mature. Established pattern with Swift/Kotlin SDKs. Test during Track D. |
| Existing PMS paid users (bought `PMS_FULL_VERSION` one-time) lose access after update to flagship | Medium | **High** (bad reviews, refund requests) | Keep `PMS_FULL_VERSION` active as a legacy grandfather SKU forever. On first launch after update, auto-restore purchase and grant lifetime access to XXI-A content (all other exams still require subscription). Communicate the upgrade clearly in the version-update notes. |
| Bundle ID typo (`com.webrich.nsim`) surfaces in analytics + TestFlight + backend keys forever | Low | Low | Documented tradeoff for reusing App Store ID `6504492275`. No mitigation — accept it. Custom-label in Firebase/Mixpanel dashboards to show "NISM Prep" instead of the raw bundle. |
| App Store review rejects the major pivot from "PMS Distributors" to "NISM Prep — 31 exams" | Low | Medium | Apple allows category/scope expansions. Submit with clear version notes. Include screenshots showing the upgrade preserves XXI-A access. If rejected, pivot to new bundle ID + new App Store listing in 48 hrs. |

---

## Team & effort

### Solo dev (you)
- **iOS:** 4 weeks full-time (fast given BaseSwift fluency)
- **Android:** 3–4 weeks full-time
- **Web (marketing):** 1 week
- **Web (app) — Phase 2 optional:** 3–4 weeks

### If hiring
- **1 iOS dev (mid-level Swift):** 6–8 weeks (unfamiliar with BaseSwift)
- **1 Android dev (Kotlin/Compose):** 6–8 weeks
- **1 contract designer:** ~1 week for brand + icons + screenshots

### Content maintenance (ongoing)
- You (domain expert) + part-time editor reviewing questions as SEBI publishes syllabus updates
- Automated via GitHub Actions; cadence monthly

---

## Launch marketing (weeks 5–8)

### Week 5 (iOS live)
- Soft launch: LinkedIn post from founder, 20 DM-to-finance-friends for downloads + reviews
- ProductHunt India launch
- r/IndianInvestments, r/NISM subreddit post (after App Store approval)

### Week 6 (Marketing site live)
- Submit sitemap to Google Search Console
- Create 10 Quora answers linking to exam-specific landing pages
- LinkedIn article: "We built a NISM question bank with 4-section expert explanations. Here's what we learned about the exam."

### Week 7 (Android live)
- Cross-platform launch push
- First Google Ads campaign: target "nism series v-a mock test" + 10 long-tails (₹50/day budget)
- Referral program live

### Week 8+
- Weekly YouTube shorts (1 Pro-Tip per week per exam = content backlog for 31 weeks)
- First B2B outreach emails to AMC L&D heads (5-10 contacts)
- Monitor conversion funnel: landing → signup → paid

---

## Metrics & targets

### 30-day post-launch targets
- iOS + Android downloads: **3,000 combined**
- Free sign-ups: **1,500**
- Paid conversions: **50** (3.3% of sign-ups)
- MRR: **₹12,000**
- Organic search clicks: **200/day** (low baseline, building)

### 90-day post-launch targets
- Downloads: **12,000 combined**
- Paid users: **500**
- MRR: **₹1.2 L**
- B2B pilots: **1 signed**
- Organic search clicks: **1,500/day**

### 12-month targets (per business plan Year-1)
- Free users: **50,000**
- Paid users: **1,500**
- B2B contracts: **3**
- Total revenue: **₹17 L** on ~₹5–7 L infra/tools spend

---

## Immediate next actions (this week)

1. **Pick brand name + register domain** — need this locked before Xcode rename. Shortlist:
   - `nismprep.in` / `.com`
   - `nismmastery.in`
   - `passnism.in`
   - `nismpro.in`
   - Check availability + social handles (Twitter, IG, LinkedIn company page)

2. **Fork NEC → NISM-Prep-iOS** (Day 1 of Week 1)

3. **Decide on existing `/workspace/NISM/` project** — delete/archive or repurpose as NISM-XXIA-PMS standalone (legacy revenue stream in addition to flagship)

4. **Razorpay merchant signup** (starts 5-7 day approval clock — begin now so it's done by Week 5)

5. **Register new Firebase project** for NISM Prep

6. **Brief designer** (contractor or DIY) for app icon + brand assets — icon is blocker for App Store submission

---

## Appendix — file mapping reference

The April-7 analysis (`NEC_App_Analysis_For_NISM.md`) documents the exact file-by-file plan including:
- What to reuse from BaseSwift (101 files, zero changes)
- What to reuse from NEC (NECModels, NECQuizProvider, NECSyllabusSelectionView — zero changes)
- What to modify (AppSettingsImpl, NECExamSelectionView → NISMExamSelectionView)
- What to delete (~45 NEC-specific files in Calculators/, QuickReference/, HourLog/)
- Data-file drop-in plan (ExamWeightages.plist, Topics.plist, ChapterArticles.plist, Question XMLs)

Refer to it for any low-level file question during execution.

---

*Plan drafted April 20, 2026 after completion of Phase 15 (Series XXIII) — the final exam in the NISM Question Bank, bringing the catalogue to 13,393 questions across all 31 NISM certification examinations.*
