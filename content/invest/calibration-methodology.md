---
title: "Calibration Methodology"
description: "How to derive a defensible confidence number — 5-step process based on Tetlock + Kahneman."
date: 2026-05-18
ShowToc: true
TocOpen: false
hideMeta: true
---

How to get from a thesis statement to a **defensible confidence number**. Method based on Philip Tetlock's superforecaster literature + Daniel Kahneman's decision theory.

**Why this doc exists**: without a methodology, "70%" is just intuition with packaging. A methodology makes confidence *reproducible* (the same line of reasoning lands on a similar number next time) rather than mood-driven.

---

## 5-Step Process

Every substantive thesis goes through the 5 steps below. Simple theses can be done mentally; key theses are written down.

### Step 1: Decompose

Break the prediction into **necessary conditions** (AND) or **sufficient conditions** (OR):

> ACN-1: "AI cannot capture 30–40% of ACN's share" decomposes into:
>
> - (a) AI's current capability is insufficient to substitute high-touch consulting (observable in reality)
> - (b) ACN will not lose ≥ 30% revenue to AI-only substitutes (verifiable within 12 months)
> - (c) The market re-prices this narrative (ACN outperforms within 12 months)

Only when the prediction is equivalent to (a AND b AND c) all being true does it count as True.

### Step 2: Base rate (outside view)

Ignoring your specific case for a moment, **how often have similar predictions come true historically**?

Common anchors (rough):

| Class of prediction | Approximate base rate |
|---|---|
| "Stock X outperforms SPY over 12 months" (no specific catalyst) | ~ 45–50% |
| "Stock X outperforms SPY by ≥ 10pp over 12 months" | ~ 20–25% |
| "Sector narrative shifts within 12 months" | ~ 30–40% |
| "Specific catalyst materializes in 12 months" | depends on catalyst — earnings beat 70%; M&A 20%; regulatory shift 25% |
| "Macro consensus reverses" (e.g., recession call swap) | ~ 25–35% over 12m |
| "Concentrated holdings outperform a diversified basket over 12m" | ~ 50% (high variance) |

**Anchor on base rate first**. Don't start with inside view.

### Step 3: Inside view adjustment

Which unique factors in your specific case should move the probability **up or down**?

Tag each factor with a sign + estimated magnitude:

> ACN-1 inside view:
>
> - AI hands-on edge → I read the narrative mispricing more accurately (**+5–10%**)
> - ACN business model substitution-resistant (high-touch) → capturing 30%+ share is implausible (**+10–15%**)
> - "AI late-stage" macro view, narrative may roll back (**+5–10%**)
> - But: AI capability improves fast, 12 months may not be enough for narrative reversal (**−5–10%**)
> - But: ACN has its own cyclical headwinds (corporate consulting spend trim), 12 months may make the narrative partly correct (**−5%**)
>
> Net: +10–20% above base rate

**Watch out: don't over-adjust**. Tetlock found that forecasters systematically over-adjust on inside view. Anchor on base rate; adjustment magnitude < 20% is the zone where you're not easily over-confident.

### Step 4: Premortem (failure modes)

Imagine the 12-month deadline has arrived, and **the prediction failed**. List **3–5 plausible failure modes**:

> ACN-1 failure modes:
>
> 1. AI tooling breakthrough + big clients actually swap to AI-only (low-prob but high-impact)
> 2. ACN's own execution problems, unrelated to the AI threat
> 3. Market doesn't re-price even if narrative is wrong (sticky narrative)
> 4. 12 months too short for narrative reversal, deadline too early
> 5. The "AI late-stage" judgment itself is wrong (AI really does keep booming)

**Reading**:

- ≥ 4 plausible failure modes → confidence should not exceed 70%
- 2–3 plausible failure modes → 60–75% is reasonable
- ≤ 1 plausible failure mode → 75–90% may be reasonable, **but I might also have missed something** (blind-spot risk)

### Step 5: Bet test (sanity check)

Translate confidence into **betting odds** and ask "would I actually bet this way":

| Confidence | Implied odds against | "I'd bet $100 to lose $X" |
|---|---|---|
| 50% | 1 : 1 | lose $100 |
| 60% | 1.5 : 1 | lose $67 |
| 70% | 2.3 : 1 | lose $43 |
| 75% | 3 : 1 | lose $33 |
| 80% | 4 : 1 | lose $25 |
| 90% | 9 : 1 | lose $11 |

> ACN-1 bet test (suppose base + inside + premortem inclines to 65%):
>
> - 1.85:1 odds → I lose $54 if I'm wrong
> - Would I actually take that bet? Yes, the confidence still feels commensurate
> - But at 80% (4:1, lose $25)? Not willing — so confidence < 80%

Final: ACN-1 lands in the **60–70%** range, choose **65%** (median + five-tier rounding).

---

## Five-tier mental anchors for confidence

Avoid fake precision (60 vs 65 vs 70 are indistinguishable). Force the use of five tiers:

| Confidence | Meaning | Example |
|---|---|---|
| **10%** | Counter-thesis worth tracking but very unlikely | "TLN doubles within 12 months" |
| **25%** | I lean the other way, but not strongly | "AI bubble corrects ≥ 30% within 12 months" |
| **50%** | Genuinely uncertain / coin flip | "MSFT outperforms broad market within 12 months" |
| **75%** | More likely than not, can imagine failure | "ACN AI-threat narrative softens within 12 months" |
| **90%** | Strong belief, willing to make a substantial bet | "SP500 5-year nominal return still positive" |

**Avoid**:

- 99% (epistemic hubris)
- 60–65–70 micro distinctions (false precision)
- 0% / 100% (meaningless)

---

## Common biases to flag

Self-check on every calibration:

- **Anchoring**: started mentally at 70%, then failed to adjust enough as evidence came in
- **Confirmation bias**: actively searching for supporting evidence, ignoring counter-evidence
- **Recency bias**: last week's news dominating a long-term judgment
- **Availability heuristic**: vivid examples → subjective probability revised up
- **Inside view bias**: "I researched it deeply, so I'm more accurate"
- **Narrative coherence**: the story sounds good → subjective probability revised up (coherence vs truth)
- **Status quo bias**: existing-holding thesis "feels" more correct (motivated reasoning)
- **Overconfidence in domain knowledge**: in-circle ≠ certainty

Red flag: giving the same thesis two different confidence numbers weeks apart with no new evidence.

---

## Bootstrap phase (first 6–12 months)

No historical track record → cannot calibrate via Brier score yet.

Bootstrap strategy:

- **Skew conservatively toward 50–60% rather than 90%** — over-confidence is costlier than under-confidence (Tetlock found amateurs are systematically over-confident)
- For every prediction filing, **write down at least 2 of Steps 1–5** (decompose + base rate is a good default), to enable retrospective on the outcome later
- First quarterly review (2026-08-17): look at which buckets show systematic bias, adjust subsequent calibration habits
- After 12 months (2027-05): the first complete cycle's Brier score — that's when truly personalized calibration becomes actionable

---

## How to use this doc

- Any substantive prediction → auto-invoke the 5 steps (mental for simple, written for important)
- Uncertain which confidence tier → use bet test (Step 5) to back into it
- Use worked examples to check your process (ACN-1 is the seed example; later predictions may also get a worked walkthrough)
- At quarterly review, check bias patterns and adjust the process

---

## Worked example archive

| Prediction | Methodology walkthrough date | Final confidence | Outcome | Bias lesson |
|---|---|---|---|---|
| ACN-1 (illustrative) | 2026-05-18 | 65% (proposed) | tbd | — |
| AI-2 (collaborative + web-verified) | 2026-05-18 | **65%** | tbd | — |
| DUOL-2 (post-cancel + framework drift detection) | 2026-05-18 | **50%** | tbd | — |
| CHINA-1 (Doubao cross-firm signal test) | 2026-05-18 | **75%** | tbd | — |

(Backfill after outcomes arrive; visible personal bias patterns start to appear after 5 worked examples.)

---

## AI-2 walkthrough (2026-05-18, collaborative + verified)

**Statement**: AI-narrative basket (NVDA + AMD + AVGO + ASML + VST + CEG) underperforms SPY over 12 months

### Short-term forcing functions (verified)

1. **Smart Money Bubble Committee 9 consecutive quarters Red** through 2026-Q1 (RED_PLATEAU).
2. **SpaceX June 11–12 IPO** at $75B raise / $1.75T valuation (largest IPO ever). SpaceX + OpenAI + Anthropic combined raise $240B+ June–year-end — larger than every VC-backed US IPO since 2000 combined. **MSCI explicitly warned of liquidity drain**.
3. **RSP vs SPY YTD divergence**: RSP +4.24% vs SPY +0.89% (5pp gap). Mag 7 now 34.8% of SPX. **Broad market actually rallying**, just dragged by cap-weighted index.
4. **Fed funds 3.5–3.75%** (April 2026 third hold). Not a hike — a high-level hold. **Top 5 hyperscalers issued $121B debt in 2025 (vs $28B average 2020–24)**, BoA 2026 forecast $175B issuance. Hyperscaler capex $256B → $443B → $602B projection. **High-rate debt is an active cost drag**.

### Why 65% is defensible

- Base rate "bubble corrects within 12 months" is only 25–35%, but short-term forcing functions (SpaceX June liquidity drain + Committee sustained Red plateau + hyperscaler debt cost) raise the probability
- "Signal within 3 months" provides a short-term resolution path; the 12-month deadline is a safe verification window
- Failure modes (bubbles last longer than rational) are still plausible but weakened by multiple short-term catalysts
- Bet test: 65% (1.86:1 against) → lose $54 if wrong. The thesis is genuinely stronger than 50% baseline

### Lesson for future calibration

- Specific short-term forcing functions are strong inside-view evidence — don't default to base rate without checking timing catalysts
- Web verification improves confidence (from 50% → 65%): same thesis plus verified facts, bumped up one five-tier step
- **(Post-collaboration revision 2026-05-18)** Two verification errors corrected:
  - **Fact 3 corrected**: Using YTD aggregate (RSP +4.24% vs SPY +0.89%) to conclude "broad market rallying" — wrong. Trajectory model: long-term divergence through 2022 → 2026 Q1 RSP led = mean reversion → April Iran crisis triggers reversal, divergence widens again. Lesson: look at trajectory, not aggregate.
  - **Fact 4 corrected**: J.P. Morgan "Fed hold rest of 2026" was a pre-Iran-crisis stale view. Current (May 2026): Brent $120+, CPI 3.8% YoY (highest since May 2023), PPI +1.4% MoM / +6% YoY, **CME FedWatch 35% hike probability by Dec 2026**, "2026 rate cut fully priced out", ECB stagflation warning. "Oil prices transmitting into CPI/PPI" is exactly accurate. Lesson: first-pass consensus search is not enough; the supply-shock framing requires specific keywords to retrieve the current view.
- **Confidence is NOT revised up** even though verified facts are stronger — calibration discipline forbids hindsight modification; 65% is the filed record; the ex-post observation at retrospective time that "it should have been 75%+" is itself a training data point.

---

## DUOL-2 walkthrough (2026-05-18, post-cancel + framework drift detection)

**Statement**: DUOL 12mo total return ≤ SPY 12mo total return (from 2026-05-18 close $112.06)

**Filing context**: DUOL Tranche 1 limit order $107 × 18 shares cancelled before fill. Cancel decision based on detected framework drift (#1–#7 used a fabricated FO Layer + Sleep Test −15% NAV framework, even though user_profile had explicitly removed these constructs). Cancel under correct framework: revised expected return +10–20% over 24mo ≈ SPY +14–20% midpoint → fails the "outperforms index" criterion.

### Step 1: Decompose

- (a) DUOL 12mo price does not materially outperform SPY (main claim, 50%-ish coin flip baseline)
- (b) Wounded thesis legs (DET funnel / Asia consumer / Mandarin) deliver no outsize positive surprise within 12mo
- (c) Macro thaw does not bring a China monetization breakthrough within 12mo

### Step 2: Base rate (outside view)

- "Stock X 12mo return ≤ SPY" with no specific catalyst ≈ 50% (coin flip, slightly tilted toward underperform because single-stock idio risk is uncompensated)
- "Stock at −79% drawdown rebounds to outperform SPY over 12mo" historical: ~ 40–45% (modest but non-trivial reversal probability)

### Step 3: Inside view adjustment

- Of the three wounded legs, Mandarin / Asia consumer are long-horizon, no direct 12mo financial impact (**+0–5%**)
- China 5–6% revenue ceiling has persisted for 10 years; unlikely to break within 12mo (**+0–5%**)
- Q1 2026 BEAT is still real (+21% DAU, +21% paid subs) → short-term momentum (**−5%**)
- The −79% drawdown has priced in most of the AI disruption narrative; reversal probability not negligible (**−10%**)
- Macro thaw + Xi 9/24 visit could lift the Asia consumer narrative briefly (**−5%**)
- 16M+ Douyin engagement growth (+39%/12mo); brand is real (**−5%**)
- Net adjustment: −10% from base 50% = **40% probability that DUOL underperforms**

Wait — inversion check: 40% underperform = 60% outperform? Then the thesis should be "DUOL outperforms" rather than "underperforms".

**Re-check**: Main fundamental data still positive (Q1 BEAT, valuation 17x EV/EBITDA SaaS-low, brand real). Wounded legs are long-horizon. 12mo window is too short for legs to play out. So the 12mo prediction is genuinely close to coin flip, slightly tilted toward underperform because wounded legs add asymmetric tail risk.

Honest read: **50% — true coin flip**.

### Step 4: Premortem failure modes (i.e., DUOL outperforms SPY 12mo)

1. Macro thaw produces a bigger lift than expected → Asia DAU accelerates
2. AI ad ramp surprise revenue
3. Mandarin B2+ announcement
4. SPY itself underperforms substantially (broader market crack)
5. Q2 / Q3 earnings sustain BEAT pattern → narrative shifts to "growth still real"
6. −79% drawdown rebound reversal (mean reversion mechanism)
7. Energy system churn concept is over-priced; users don't actually migrate

≥ 6 plausible failure modes → confidence should not exceed 70%. 50% is appropriate.

### Step 5: Bet test

- 50% (1:1) → lose $100 if wrong
- Willing to bet $100 vs $100 that DUOL underperforms SPY? Strict coin-flip mindset: yes, equally willing in both directions
- Anything > 60% is over-confident given the premortem failure modes

**Final confidence: 50%**

### Lesson: framework-drift-invalidates-confidence

**Original DUOL position decision filing** assumed an FO Layer "experimental learning value" argument. That framework does not exist in the actual methodology (per user_profile 2026-05-18: NO Layers). **Once the fabricated framework is removed, confidence derived under the fabricated framework is also invalid.**

Operational lessons:

- Any confidence filing must verify that the framework is current (canonical memory, not stale-style-report)
- When framework drift is discovered, do NOT retroactively modify prior filed confidence (violates immutability); instead, file a new prediction under the correct framework
- DUOL-1 remains valid (financial-thesis-test, framework-independent); DUOL-2 is a post-cancel new framework-aware prediction

**Meta-lesson**: amateur over-confidence pattern (Tetlock) + framework over-formalization pattern are two reinforcing biases. When both work in the same direction, confidence drifts toward unjustified highs. Post-correction reset to baseline (50%) is the honest position.

---

## CHINA-1 walkthrough (2026-05-18, Doubao cross-firm follow-on test)

**Statement**: By 2027-05-18, BOTH Qwen AND Yuanbao remain fully free, no personal paid subscription tier

### Step 1: Decompose

- (a) Doubao paid experiment 6–12mo data insufficient to generate cross-firm follow-on
- (b) Qwen strategic positioning (Alibaba Cloud / e-commerce traffic entry point) unchanged, continues as loss-leader
- (c) Yuanbao strategic positioning (WeChat ecosystem retention) unchanged, continues to monetize through the ecosystem

### Step 2: Base rate (outside view)

- "Big-tech cross-firm follow-on within 12mo of one player's new monetization model" historical: ~ 25–40% (slow decision-making + strategic-differentiation incentive to preserve)
- Other direction: China internet historically highly imitation-prone (Didi-Kuaidi, Meituan-Ele.me swarming patterns), which could raise follow-on rate to 40–50%
- But: paid-subscription success cases in China cluster in a sweet spot (¥10–25); Doubao at ¥68 is testing an extension; data likely mixed rather than blowout → suppresses imitation

### Step 3: Inside view adjustment

- Qwen / Yuanbao strategic positioning is clear (ecosystem / platform input, not standalone product) → strategic incentive is to stay free (**+10%**)
- Doubao 6–12mo paid data likely weak (above sweet spot + Chinese-New-Year churn pattern 2027 Q1) → unmotivating for follow-on (**+10%**)
- Alibaba Cloud / e-commerce profit center covers Qwen, no need for subscription revenue (**+5%**)
- Tencent ad ecosystem advantage covers Yuanbao (**+5%**)
- But: ByteDance success even if mediocre could pressure Qwen / Yuanbao internal KPI requirements (**−5%**)
- But: AI compute-cost cross-firm pressure is shared — Alibaba / Tencent face it too (**−5%**)
- Net: +20% above base rate

### Step 4: Premortem (Qwen / Yuanbao roll out paid within 12mo)

1. Doubao paid data extremely strong (> 5% MAU conversion + high retention) → pressure to follow
2. Internal KPIs demand each firm demonstrate AI ROI → imitative paid rollout
3. Compute cost cross-firm urgency to the extent that fully-free is unsustainable
4. Third-party vendors (DeepSeek / Moonshot Kimi) roll out paid → industry-wide shift
5. State policy guidance (AI commercialization priority)

3–5 plausible failure modes → confidence 60–75% is reasonable

### Step 5: Bet test

- 75% (3:1) → lose $33 vs $100 if Qwen / Yuanbao roll out paid
- Willing to bet? Yes, strategic positioning + Doubao likely mediocre data give conviction
- But 90% (9:1)? Not willing — too over-confident given imitation-pattern risk
- **Final confidence: 75%**

### Why 75% rather than 50%

- Strategic positioning is a strong structural argument (not just noise)
- 6–12mo paid data likely not strong enough to force follow-on (need 12mo+ retention)
- Chinese New Year churn in 2027 Q1 will likely surface paid-tier weakness
- Multiple independent reasons all push toward "stay free"
- But imitation risk + compute-cost pressure together prevent 90%+ confidence

### Lesson

- Strategic-positioning argument (not just market data) can justify above-coin-flip confidence at 75%
- Cross-firm follow-on prediction has a lower base rate than single-stock prediction (~ 25–40% vs 50%); inside-view adjustment space is larger
- 12mo window is relevant for the China internet industry decision cycle (typically 2–4 quarters between strategic announcements)
