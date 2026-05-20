---
title: "Calibration"
description: "Tetlock-style prediction tracking — every substantive thesis gets confidence + deadline + verification source."
date: 2026-05-18
ShowToc: true
TocOpen: false
hideMeta: true
---

Tetlock-style habit: every substantive thesis / prediction gets attached confidence + a verifiable deadline. Score them six months later → see one's own forecasting distribution, identify systematic over/under-confidence.

**Trigger mechanism**: when a substantive prediction / thesis statement surfaces in conversation, auto-prompt:

- Confidence (10 / 25 / 50 / 75 / 90 — five tiers)?
- Deadline (YYYY-MM-DD, specifically verifiable)?
- Verification source?

Don't log every micro-claim, only deployable claims with stakes (theses that drive position / action / a major judgment).

**How to fill in confidence**: see [Calibration Methodology](/invest/calibration-methodology/) — 5-step process (decompose → base rate → inside view → premortem → bet test) + five-tier mental anchors + common biases. **Don't fill numbers from intuition** — intuition is random noise.

---

## Format

Every prediction:

- **Statement**: claim content (specific, falsifiable)
- **Confidence**: 10 / 25 / 50 / 75 / 90 % five tiers (avoid calibration noise)
- **Deadline**: YYYY-MM-DD (specific)
- **Verification source**: how to verify (e.g., earnings release, industry data, price level)
- **Date filed**: filing date
- **Outcome**: tbd → after the deadline, fill True / False / Partial + a short retrospective

---

## Open predictions

### Position-backed theses (active)

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| ACN-1 | 2026-05-18 | AI fails to capture 30–40% of ACN's consulting/IT services share | **TBD** | 2027-Q1 | Gartner / IDC consulting-AI reports + ACN revenue trend | Open |
| DUOL-1 | 2026-05-18 | DUOL FY2026 reported revenue within 2% of mgmt guidance midpoint ($1.205B → $1.18-1.23B range); tests whether the thesis wound shows 12-month financial-statement impact (vs longer-horizon legs) | **75%** | 2027-02 FY26 10-K release | DUOL 10-K | Open (filed even though position cancelled — thesis-test independent of position) |
| DUOL-2 | 2026-05-18 | DUOL 12mo total return ≤ SPY 12mo total return (from 2026-05-18 close $112.06) — post-cancel framework prediction: revised expected return ≈ index midpoint, wounded legs add asymmetric downside | **50%** | 2027-05-18 | DUOL vs SPY total return | Open (cancel decision is endogenous to the prediction) |
| CHINA-1 | 2026-05-18 | By 2027-05-18, BOTH Qwen AND Yuanbao remain fully free, no personal paid subscription tier — Doubao's 2026-05-04 paid experiment outcome insufficient to force cross-firm follow-on within 12mo | **75%** | 2027-05-18 | Alibaba IR / Tencent IR / third-party internet & tech media verify | Open |
| TLN-1 | 2026-05-13 | TLN underperforms SPY over 12 months (compound thesis: AI-bubble late stage + rising rates, high leverage amplifies) | **TBD** | 2027-05-13 | TLN total return vs SPY total return | Open |
| MSFT-1 | 2026-05-18 | "Within Mag 7, MSFT carries the lowest AI risk" thesis holds (relative outperform AMZN + GOOG) | **TBD** | 2026-12-31 | Total return MSFT vs (AMZN, GOOG) average | Open |
| SPGI-1 | 2026-05 | SPGI's AI-threat narrative is mispriced; outperforms broad market over 12 months | **TBD** | 2027-05-18 | SPGI vs SPY return | Open |
| LDOS-1 | 2026-05-17 | LDOS defer decision was correct: within 12 months LDOS does not materially outperform the ITA basket | **TBD** | 2027-05-17 | LDOS vs ITA return | Open |

### Sector / macro theses (active)

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| GOLD-1 | 2026-05 | GLDM fiat-debasement thesis: outperforms USD cash by ≥ 3% over 12 months | **TBD** | 2027-05-18 | GLDM return − cash yield | Open |
| AI-1 | 2026-05-18 | The "AI capturing 30%+ of SP500 company workflow" narrative will not be validated by aggregate SP500 productivity data within 12 months | TBD | 2027-05-18 | BLS productivity data + SP500 SG&A trends | Open |
| AI-2 | 2026-05-18 | AI-narrative basket (NVDA + AMD + AVGO + ASML + VST + CEG) underperforms SPY over 12 months (short-term bearish; verified forcing functions: SpaceX June IPO liquidity drain $240B+ combined June-yr-end + Committee 9Q Red + Iran supply-shock CPI/PPI still transmitting + CME FedWatch 35% Dec hike priced; RSP-SPX trajectory April reversal restarts divergence; hyperscaler $175B debt issuance at stagflation rates) | **65%** | 2027-05-18 | Custom basket return vs SPY | Open |
| AI-3 | 2026-05-18 | SP500 GDP-per-capita / aggregate productivity growth will not accelerate materially within 12 months (AI still converting existing demand, not creating new incremental demand) | TBD | 2027-05-18 | BLS productivity + GDP per capita data | Open |

### Cable MVNO / telecom

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| TEL-1 | 2026-05-18 | Cable MVNO 2026 net-add share remains ≥ 40% of the industry | **TBD** | 2027-Q1 industry summary | Lightreading / Fierce Network industry net adds | Open |

---

## Closed predictions (scored)

(empty — once an outcome is in, move from Open to here with Final Outcome + retrospective)

---

## Quarterly review

**Next review**: 2026-08-17

Process:

1. For every prediction past its deadline → resolve True / False / Partial
2. Move to Closed
3. Compute hit rates by confidence bucket:
   - 90% predictions should hit ~ 90%
   - 75% predictions should hit ~ 75%
   - 50% predictions should hit ~ 50%
   - and so on
4. Bias identification: systematically over-confident (e.g., 90% only actually right 70% of the time)? Under-confident? Break down by domain (single-stock vs sector vs macro)?
5. Adjust calibration habits (e.g., if 75% on single-stock is actually 50% → proactively derate confidence)

---

## Anti-patterns to avoid

- Vague predictions ("XX will go up") — must be specific, falsifiable, with deadline
- Retroactively explaining after the deadline why the outcome doesn't count — outcome is outcome
- Hindsight modification of the originally filed confidence — once filed, confidence is an immutable record
- Selective logging (only log the ones I'm confident about) → biases the calibration sample
- Logging every comment → noise; only log substantive deployable theses
- **Process / behavioral patterns ≠ predictions** — framework drift (construct drift), Section 5 mis-application, and similar process learnings do not get filed in calibration; track them via feedback notes. Calibration is restricted to falsifiable forecast claims.
- **2026-05-18 noted methodology meta-pattern**: framework drift can invalidate prior confidence. When a fabricated framework is removed, any confidence derived under that framework must be re-derived under the correct framework — NOT by retroactively modifying filed confidence, but by filing a new prediction under the new framework if the decision changes.
