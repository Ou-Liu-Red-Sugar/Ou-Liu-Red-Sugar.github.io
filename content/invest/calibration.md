---
title: "Calibration"
description: "Tetlock-style prediction tracking — every substantive thesis gets confidence + deadline + verification source."
date: 2026-05-18
ShowToc: true
TocOpen: false
hideMeta: true
---

Tetlock-style 习惯: 每个 substantive thesis / prediction 都附 confidence + verifiable deadline。半年后 score → 看到自己的 forecasting 分布,识别系统性 over/under-confidence。

**Trigger mechanism**: 当对话中产生 substantive prediction / thesis statement 时, 自动 prompt:

- Confidence (10 / 25 / 50 / 75 / 90 五档)?
- Deadline (YYYY-MM-DD 具体可验证)?
- Verification source?

不记录每个 micro-claim, 仅 deployable claim with stakes (导致仓位 / 行动 / 大判断的 thesis)。

**Confidence 怎么填**: see [Calibration Methodology](/invest/calibration-methodology/) — 5-step process (decompose → base rate → inside view → premortem → bet test) + 五档心理 anchor + 常见 biases。**不用直觉填数字**, 直觉是 random noise。

---

## Format

每个 prediction:

- **Statement**: claim 内容 (具体, 可证伪)
- **Confidence**: 10 / 25 / 50 / 75 / 90 % 五档 (避免 calibration noise)
- **Deadline**: YYYY-MM-DD (具体)
- **Verification source**: 如何验证 (e.g., earnings release, industry data, price level)
- **Date filed**: filing date
- **Outcome**: tbd → 在 deadline 后填 True / False / Partial + 简短复盘

---

## Open predictions

### Position-backed theses (active)

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| ACN-1 | 2026-05-18 | AI 抢不到 ACN 30-40% consulting/IT services 市场份额 | **待定** | 2027-Q1 | Gartner / IDC consulting AI 报告 + ACN revenue trend | Open |
| DUOL-1 | 2026-05-18 | DUOL FY2026 reported revenue within 2% of mgmt guidance midpoint ($1.205B → $1.18-1.23B range); 验证 thesis wound 是否在 12 月 financial-statement-impact (vs 远期 long-horizon legs) | **75%** | 2027-02 FY26 10-K release | DUOL 10-K | Open (filed even though position cancelled — thesis-test 独立 of position) |
| DUOL-2 | 2026-05-18 | DUOL 12mo total return ≤ SPY 12mo total return (from 2026-05-18 close $112.06) — post-cancel framework prediction: revised expected return ≈ index midpoint, wounded legs 加 asymmetric downside | **50%** | 2027-05-18 | DUOL vs SPY total return | Open (cancel decision 内生 prediction) |
| CHINA-1 | 2026-05-18 | By 2027-05-18, 千问 AND 元宝 仍 全免费, 不推出 personal paid subscription tier — 豆包 5/4/2026 paid experiment outcome 未足够强 to force cross-firm follow-on within 12mo | **75%** | 2027-05-18 | 阿里 IR / 腾讯 IR / 第三方互联网科技媒体 verify | Open |
| TLN-1 | 2026-05-13 | TLN 12 月内 underperform SPY (compound thesis: AI 泡沫末期 + 利率上升, 高杠杆放大) | **待定** | 2027-05-13 | TLN total return vs SPY total return | Open |
| MSFT-1 | 2026-05-18 | Mag 7 内 MSFT AI 风险最低 thesis 持续 (relative outperform AMZN + GOOG) | **待定** | 2026-12-31 | Total return MSFT vs (AMZN, GOOG) average | Open |
| SPGI-1 | 2026-05 | SPGI AI 威胁论错杀, 12 月内 outperform broad market | **待定** | 2027-05-18 | SPGI vs SPY return | Open |
| LDOS-1 | 2026-05-17 | LDOS defer 决策正确: 12 月内 LDOS 不会 materially outperform ITA basket | **待定** | 2027-05-17 | LDOS vs ITA return | Open |

### Sector / macro theses (active)

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| GOLD-1 | 2026-05 | GLDM 法币贬值 thesis: 12 月内 outperform USD cash by ≥ 3% | **待定** | 2027-05-18 | GLDM return - cash yield | Open |
| AI-1 | 2026-05-18 | "AI 抢 SP500 公司 30%+ 工作流" narrative 在 12 月内不会被 SP500 整体 productivity data 验证 | 待定 | 2027-05-18 | BLS productivity data + SP500 SG&A trends | Open |
| AI-2 | 2026-05-18 | AI-narrative basket (NVDA + AMD + AVGO + ASML + VST + CEG) 12 月内 underperform SPY (short-term bearish; verified forcing functions: SpaceX June IPO liquidity drain $240B+ combined June-yr-end + Committee 9Q Red + Iran supply-shock CPI/PPI 仍在传导 + CME FedWatch 35% Dec hike priced; RSP-SPX trajectory April reversal 重启 divergence; hyperscaler $175B debt issuance at stagflation rates) | **65%** | 2027-05-18 | Custom basket return vs SPY | Open |
| AI-3 | 2026-05-18 | 12 月内 SP500 GDP per-capita / aggregate productivity growth 不会显著加速 (AI 仍在转化存量, 未引出新增量) | 待定 | 2027-05-18 | BLS productivity + GDP per capita data | Open |

### Cable MVNO / telecom

| ID | Date filed | Statement | Conf | Deadline | Verify | Status |
|---|---|---|---|---|---|---|
| TEL-1 | 2026-05-18 | Cable MVNO 在 2026 净增 share 仍 ≥ 40% of industry | **待定** | 2027-Q1 industry summary | Lightreading / Fierce Network 行业 net adds | Open |

---

## Closed predictions (scored)

(空 — outcome 出来后从 Open 移至此, 附 Final Outcome + 复盘)

---

## Quarterly review

**Next review**: 2026-08-17

Process:

1. 对所有 deadline 已过的 prediction → resolve True / False / Partial
2. 移至 Closed
3. 按 confidence bucket 计算命中率:
   - 90% predictions 应命中 ~ 90%
   - 75% predictions 应命中 ~ 75%
   - 50% predictions 应命中 ~ 50%
   - 等等
4. 偏差识别: 系统性 over-confident (e.g., 90% 实际只对 70%)? Under-confident? 按 domain 拆 (single-stock vs sector vs macro)?
5. 调整 calibration 习惯 (e.g., 单股 75% 实际是 50% → 主动 derate confidence)

---

## Anti-patterns to avoid

- Vague predictions ("XX 将上涨") — must be specific, falsifiable, with deadline
- Deadline 之后 retroactively explain why outcome doesn't count — outcome 就是 outcome
- Hindsight 修改原 confidence — confidence 一旦 filed 就是 immutable record
- 选择性 log (只 log 自己自信的) → bias the calibration sample
- 把 every comment 都 log → noise, 只 log substantive deployable theses
- **Process / behavioral patterns ≠ predictions** — 框架漂移 (construct drift), Section 5 mis-application 等 process learnings 不 file 在 calibration, 用 feedback 记录跟踪。Calibration 仅限 falsifiable forecast claims。
- **2026-05-18 noted methodology meta-pattern**: framework drift can invalidate prior confidence。当 fabricated framework 被移除, 任何基于该 framework 推导的 confidence 必须用 correct framework re-derive — 不是 retroactive 修改 filed confidence, 是 file 新 prediction with new framework if decision changes.
