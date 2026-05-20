---
title: "Playbook"
description: "World-view, methodology, decision standard, and execution rules for long-term investing."
date: 2026-05-18
ShowToc: true
TocOpen: false
hideMeta: true
---

> **Disclaimer:** This is my personal learning log and decision framework. Nothing here is financial advice.
> **Style:** long-term (months to years), no leverage, low-frequency execution, collaborative research with AI.

---

## 1. Scope & Objectives

**Time horizon:** months to years
**Primary objective:** sustainable long-term compounding with explainable decisions
**Secondary objective:** keep investing in the background (study/life first)

---

## 2. Non-Negotiables

- **No leverage** (no margin trading; leveraged ETFs avoided in current risk environment, conditionally revisitable if vectors change)
- **No high-frequency trading**
- **No mechanical trend following for thesis formation** — technical analysis is allowed only at execution stage for entry-point fine-tuning
- Do not change long-term structure due to short-term volatility
- Default to **low action** when expected return vs near-riskless is unfavorable or unclear
- Limit orders by default; market orders only in emergency exit
- Avoid complexity for the sake of being "smart"

---

## 3. World-view, Methodology & Decision Standard

### 3.1 World-view — Risk as Vectors

Risk does not exist as a single one-dimensional "regime level." It decomposes into **vectors**, each hitting different sectors with different direction and magnitude:

- **Interest-rate vector** — affects highly leveraged + non-yielding assets
- **Geopolitical vector** — directionally opposite across sectors (defense may benefit; gold's marginal-holder forced-selling may make it short-term negative)
- **AI bubble vector** — *short-term bearish* (best-case priced + story concentration; funding-leverage exposure compounds rate-vector hits); *long-term bullish* with a ceiling at the 2nd Industrial Revolution analogue; current state: AI is converting existing demand, not creating new
- **Regulatory / political faction vector** — government-customer dependency and faction alignment (e.g., defense vendors)
- **Macro fiscal vector** — sovereign debasement pressure (long-term gold thesis)

Any position judgment must land **sector-specifically**. There is no universal "should I be in stocks right now?" answer.

### 3.2 Methodology — Interconnections Framework

First-order (company financials) alone is **insufficient**. Must combine with **second-order** sector-specific ecosystem / dependency analysis to separate driver from symptom.

> *"When evaluating an industry, judgment must follow the industry's own characteristics together with its linkages to certain other fields."*

Each sector has different second-order dimensions — no universal checklist. Build a library over time. Examples accumulated so far:

| Sector | Second-order dimensions |
|---|---|
| AI / NVDA | Adoption rate (SP500 deep-AI users vs abandoners); experience-vs-priced-in gap; not just NVDA financials |
| Defense / LDOS | Political faction backing; ultimate beneficiary; government-customer dependency |
| Telecom / VZ | Cable MVNO threat (Comcast/Charter capturing 45% net adds); FWA convergence; capex cycle |
| Education / DUOL | Demand-side metrics (test takers) > supply-side (accepting institutions); geographic decomposition; segment strategic function (DET = brand investment, not standalone revenue) |

### 3.3 Decision Standard — vs Near-Riskless

For any potential position:

1. Apply world-view + methodology → derive risk-adjusted potential return
2. Compare with **near-riskless yield** (T-bill / money market / short-duration bonds / high-grade CDs — "T-bill" is shorthand for this category)
3. If **< near-riskless** → skip (opportunity cost insufficient)
4. If **> near-riskless** → proceed to sizing (Section 5)

**Cash level is the cumulative downstream result of these decisions, not a policy target.** A high cash share reflects that few opportunities currently pass the EV test, not a deliberate "elevated regime, hold cash" stance.

Monthly inflow provides an organic buffer — there is no fixed cash floor in absolute dollars.

---

## 4. AI Collaboration Protocol

The research flow is **collaborative**, not AI-led or solo:

1. **User** forms a rough understanding of the company (business, product, competitive position)
2. **AI** researches financials + Interconnections second-order analysis
3. **User** raises probing questions to confirm thesis (no yes-man acceptance)
4. **Decision**: deploy / don't deploy / add to watchlist

**AI is a tool, not a leader of risk decisions.** If I cannot state my cushion (price + sizing + falsification + role) in one sentence, default to smaller size or no action.

### 4.1 KB Auto-Triggers

When financial discussion activates (any ticker / valuation / position / sector / buy-sell question), the AI side additionally consults the local KB:

- **Ticker mentioned** → silent grep the [Watchlist](/invest/watchlist/); surface matching thesis stub + trigger conditions
- **Sector discussed** → check [Circle of Competence](/invest/circle-of-competence/) (in-circle / edge / outside):
  - In-circle → full thesis analysis
  - Edge of circle → flag learning area + open questions
  - Out-of-circle → fast-skip, suggest stay out
- **Substantive thesis stated** → prompt for *Confidence (10/25/50/75/90)* + *Deadline (YYYY-MM-DD)* + *Verification source* → log to [Calibration](/invest/calibration/) open predictions
- **Build-up / trim / entry / exit decision** → check against §5 sizing ladder + verify trigger criteria

**Override**: say "skip the check" to disable for the current turn.
**Conflict resolution**: if KB says X and current discussion says Y → surface the conflict for explicit reconciliation, don't silently overwrite.

---

## 5. Sizing — Dynamic Conviction Ladder

Not static categories. Every position has both **upward and downward** mobility; the tier reflects current conviction, not a permanent label.

### 5.1 Test-tier (entry)

- Used when thesis is generally bullish but **not yet verified**
- Entry conditions: low valuation + healthy financials + thesis directionally positive
- **Typical size: ~2% NAV** (reference: DUOL Tranche 1)
- Purpose: small position to observe and validate

### 5.2 Build-up

- Triggered when the thesis's achievability has been verified by subsequent evidence
- Mechanism: **staged adds with continued validation**, not one-shot to target
- Requires an explicit deployment plan (price milestones / event triggers / time pacing)
- Minimum 5 trading days between steps (discipline, not a hard rule)
- Same-day or next-day adds count as the same step

### 5.3 Reduce / Exit

Multiple triggers, all valid:

- **Same-sector swap to lower-risk peer** — e.g., AMZN → MSFT inside Mag 7
- **Thesis weakening + risk vector deterioration** — e.g., TLN exit driven by interest-rate vector + leverage exposure
- **Position too large + grinding lower + emotional drain** — e.g., PGR at ~20% NAV in persistent decline
- **Fundamental judgment of "no recovery"** — e.g., PYPL post-FY2025 earnings + CEO change

### 5.4 Position assessment ruler

- Evaluate positions by **relative-to-index performance** (outperform / underperform the benchmark by X percentage points)
- NOT absolute % NAV loss threshold — in extreme regimes the broad market also drops, so absolute loss is uninformative

### 5.5 Cooling-off after large deposits

- Write the deployment plan first, then act
- All entries staged; no all-in deployment on freshly arrived capital
- Default to the gentlest options (near-riskless cash equivalents or staged adds to highest-conviction names)

---

## 6. Position Role Configuration

Holdings carry **functional roles**, not abstract category labels. Configuration considerations:

- **Sector exposure needs** (e.g., conscious decision to maintain some technology exposure)
- **Sector-internal lowest-risk pick** (e.g., among Mag 7, MSFT carries the cleanest AI exposure)
- **Upstream/downstream pairing** (e.g., V payment network + AXP card issuer)
- **Macro hedge** (e.g., GLDM for fiat debasement)

**Dual gate for entry:** prior preference (quality / defensiveness / low valuation / sector-exposure need / upstream-downstream pairing) **+** current pass of world-view & methodology test. Both must apply.

Current position roles snapshot:

| Position | Role |
|---|---|
| MSFT | Necessary tech exposure + lowest AI risk inside Mag 7 |
| SPGI | Low valuation + AI-threat overpricing correction |
| BRK.B | Defensive + low valuation; passes standard test |
| V | Defensive global "fixed-income-like" payment network |
| AXP | Financial sector exposure + V upstream/downstream pair |
| IBKR | Gift stock (exogenous, **not** a framework example) |
| GLDM | Fiat debasement hedge (long-term); short-term emotion-driven |

---

## 7. Exception Clause

I may break a default rule only if:

- the action is **small** (does not alter overall structure)
- the reason is written in **1–2 sentences**:
  - *What hypothesis am I betting on?*
  - *If I'm wrong, how do I exit (time / price / size)?*
- the exception is reviewed in the next monthly review

---

## 8. Review Cadence (and attention budget)

- **Log:** short entries close to the decision (3–10 minutes)
- **Monthly review:** structure, thesis changes, attention budget consumption
- **Sector library review:** quarterly (90 days) or trigger-based
- **Lessons:** mistake repeats twice → promote to explicit rule

**Attention budget (hard constraint):**

- Daily: **15–25 minutes max** (check + log + orders)
- Weekly: **one deep block** (60–90 minutes) for reading + thesis maintenance
- If math / study suffers → reduce investing frequency, not "try harder"

**Snapshots live in [/invest/log/](/invest/log/), not the Playbook.**

---

## 9. Reference Materials

**Operational files (working tools, frequently consulted)**:

- [Watchlist](/invest/watchlist/) — candidate pool + trigger conditions
- [Circle of Competence](/invest/circle-of-competence/) — in-circle / edge / outside map
- [Calibration](/invest/calibration/) — Prediction tracking + Tetlock-style calibration
- [Calibration Methodology](/invest/calibration-methodology/) — How to derive a defensible confidence number

**Historical record** (retained, not currently-binding rules where they conflict with v2.0):

- [Lessons](/invest/lessons/) — v1.x rules from the learning journey
- [Log](/invest/log/) — Time-stamped notes close to each decision
- [Monthly Reviews](/invest/reviews/) — Structure-drift and attention-cost checks

---

## 10. Change Log

- **2026-01-30 v1.0:** initial version; defined Core ETFs as market tracking, stocks as defense/opportunities; established allocation bands and rebalancing rules.
- **2026-01-30 v1.1:** removed baseline snapshots from Playbook (moved to Log); added deposit cooling-off rule, AI tool constraint, and attention budget.
- **2026-02-28 v1.2:** Added valuation-based rotation clause, time-staged minimum gap, sector concentration cap, and band-violation protocol. Driven by February valuation rotation and SPGI entry speed.
- **2026-05-18 v2.0:** major rewrite. Key changes:
  - **Removed** Core-ETF sleeve as a required structural component (concentrated quality compounders + dynamic cash position is the chosen configuration, not a deviation).
  - **Removed** fixed allocation bands (Core 35–60%, Stocks 20–50%, Gold 8–15%, Cash 5–30%) — replaced by EV-driven dynamic sizing and downstream cash level.
  - **Removed** sector 25% hard cap — consciously seek specific sector exposure (e.g., tech via MSFT, financial via AXP+V upstream/downstream pairing).
  - **Removed** rigid 5-day step gap as a hard rule — preserved as a discipline guideline within build-up sizing.
  - **Removed** "Sleep Test" absolute-loss framing — replaced by relative-to-index performance ruler.
  - **Added** §3 World-view (risk vectors) + Methodology (Interconnections framework) + Decision standard (vs near-riskless).
  - **Added** §5 Dynamic conviction ladder (test-tier → build-up → reduce/exit) replacing static sleeve allocation.
  - **Added** §6 Functional position-role configuration.
  - **Added** §4 Collaborative research protocol replacing "independent research" framing.

  Earlier (v1.x) lessons in [/invest/lessons/](/invest/lessons/) are retained as **historical record** of the learning journey, not as currently-binding rules. Where they conflict with v2.0 (e.g., Core-ETF margin-of-safety mechanics), v2.0 supersedes.

- **2026-05-18 v2.1:** Added operational tooling layer — [Watchlist](/invest/watchlist/), [Circle of Competence](/invest/circle-of-competence/), [Calibration](/invest/calibration/), and [Calibration Methodology](/invest/calibration-methodology/) — described in §4.1 and §9.
