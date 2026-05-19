---
title: "Calibration Methodology"
description: "How to derive a defensible confidence number — 5-step process based on Tetlock + Kahneman."
date: 2026-05-18
ShowToc: true
TocOpen: false
hideMeta: true
---

如何从一个 thesis statement 到达一个 **defensible confidence number**。方法基于 Philip Tetlock 的 superforecaster 文献 + Daniel Kahneman 决策论。

**Why this doc exists**: 没有 methodology, "70%" 只是包装过的直觉。Methodology 让 confidence 成为 reproducible (即同一思路下次会到达相近的数字) 而非心情驱动。

---

## 5-Step Process

每个 substantive thesis 走以下 5 步。简单 thesis 可以 mentally, 关键 thesis 写下来。

### Step 1: Decompose 拆解

把 prediction 拆为 **必要条件** (AND) 或 **充分条件** (OR):

> ACN-1: "AI 抢不到 ACN 30-40% 市场份额" 拆为:
>
> - (a) AI 当前能力不足以 substitute 高接触 consulting (现实可观察)
> - (b) ACN 不会 lose ≥ 30% revenue 给 AI-only 替代者 (12 月内可验证)
> - (c) Market re-prices 这个 narrative (12 月内 ACN outperform)

只有 prediction 等价于 (a AND b AND c) 全部为真, 才计为 True。

### Step 2: Base rate (outside view)

不看你这个具体 case, **类似 prediction 历史上多久成真**?

常用 anchor (粗略):

| Class of prediction | Approximate base rate |
|---|---|
| "Stock X outperforms SPY over 12 months" (no specific catalyst) | ~ 45–50% |
| "Stock X outperforms SPY by ≥ 10pp over 12 months" | ~ 20–25% |
| "Sector narrative shifts within 12 months" | ~ 30–40% |
| "Specific catalyst materializes in 12 months" | depends on catalyst — earnings beat 70%; M&A 20%; regulatory shift 25% |
| "Macro consensus 反转" (e.g., recession call swap) | ~ 25–35% over 12m |
| "Concentrated 持仓 over 12m outperforms diversified basket" | ~ 50% (高 variance) |

**Anchor on base rate first**. Don't start with inside view.

### Step 3: Inside view adjustment

你这个具体 case 哪些 unique factors 应当 move 概率 **up or down**?

每个 factor 标 sign + 估幅度:

> ACN-1 inside view:
>
> - AI hands-on edge → narrative 错位识别更准 (**+5–10%**)
> - ACN business model substitution-resistant (high-touch) → 抢 30%+ 份额 implausible (**+10–15%**)
> - "AI 末期" macro view, narrative 退潮可期 (**+5–10%**)
> - 但: AI 能力提升 fast, 12 月可能不够 narrative 反转 (**−5–10%**)
> - 但: ACN 自身有 cyclical 头风 (企业咨询支出 trim), 12 月可能 narrative 部分正确 (**−5%**)
>
> Net: +10–20% above base rate

**Watch: 不要 over-adjust**。Tetlock 发现 forecaster 系统性 over-adjust on inside view。Anchor 上 base rate, 调整幅度 < 20% 才不容易 over-confident。

### Step 4: Premortem 反推失败模式

想象 12 月后 deadline 到了, **prediction 失败了**。列出 **3–5 个 plausible 失败模式**:

> ACN-1 失败模式:
>
> 1. AI tooling 突破 + 大 client 真的 swap 到 AI-only (low-prob 但 high-impact)
> 2. ACN 自己 execution 问题, 跟 AI threat 无关
> 3. Market 不 re-price 即使 narrative 错 (sticky narrative)
> 4. 12 月不够 narrative 反转, deadline 太早
> 5. "AI 末期" 判断本身错 (AI 真的 keeps booming)

**判读**:

- ≥ 4 plausible 失败模式 → confidence 不应 > 70%
- 2–3 plausible 失败模式 → 60–75% 合理
- ≤ 1 plausible 失败模式 → 75–90% 可能合理, **但也可能我没想到** (盲点 risk)

### Step 5: Bet test (sanity check)

把 confidence 翻译成 **赌博 odds**, 问 "我真愿意这样赌吗":

| Confidence | Implied odds against | "我愿赌 $100 输 $X" |
|---|---|---|
| 50% | 1 : 1 | 输 $100 |
| 60% | 1.5 : 1 | 输 $67 |
| 70% | 2.3 : 1 | 输 $43 |
| 75% | 3 : 1 | 输 $33 |
| 80% | 4 : 1 | 输 $25 |
| 90% | 9 : 1 | 输 $11 |

> ACN-1 bet test (假设 base + inside + premortem 调整后 inclined to 65%):
>
> - 1.85:1 odds → 我输 $54 if I'm wrong
> - 真愿意这赌吗? Yes, confidence 仍 commensurate
> - 但 80% (4:1, 输 $25)? 不愿, 所以 confidence < 80%

最终 ACN-1 落在 **60–70%** 区间, 选 **65%** (中位数 + 五档 round)。

---

## Confidence 五档心理 anchor

避免 fake precision (60 vs 65 vs 70 无差异)。强制使用五档:

| Confidence | Meaning | Example |
|---|---|---|
| **10%** | Counter-thesis 值得 track 但非常 unlikely | "TLN 在 12 月内 doubles" |
| **25%** | 我 lean 反方向, 但 not 强 | "AI 泡沫 12 月内 correction ≥ 30%" |
| **50%** | 真的 uncertain / coin flip | "MSFT 12 月内 outperform broad market" |
| **75%** | More likely than not, 可想象失败 | "ACN AI threat narrative 12 月内 softens" |
| **90%** | Strong belief, 愿 substantial bet | "SP500 5-year 名义 return 仍 positive" |

**避免**:

- 99% (epistemic 自大)
- 60–65–70 micro 区分 (false precision)
- 0% / 100% (无意义)

---

## 常见 biases to flag

每次 calibration 自检:

- **Anchoring**: 一开始 mental 70%, 后面证据没充分 adjust
- **Confirmation bias**: 主动 search 支持 evidence, 忽略 counter
- **Recency bias**: 上周新闻 dominates 长期判断
- **Availability heuristic**: 鲜活案例 → 主观 probability 上调
- **Inside view bias**: "我研究得深, 所以我更准"
- **Narrative coherence**: 故事讲得好 → 主观 probability 上调 (一致 vs 真)
- **Status quo bias**: 现有持仓 thesis "感觉" 更对 (motivated reasoning)
- **Overconfidence in domain knowledge**: 圈内 ≠ certainty

红flag: 给同一 thesis 两次不同 confidence (相距 weeks), 没新 evidence。

---

## Bootstrap phase (前 6–12 月)

没有 historical track record → 无法用 Brier score 校准。

Bootstrap 策略:

- **保守偏 50–60% 多于 90%** — over-confident 比 under-confident 更 costly (Tetlock 发现 amateur 系统性 over-confident)
- 每个 prediction filing 时, **写下 Step 1–5 中至少 2 步** (decompose + base rate), 便于后续 outcome 复盘
- 第一次季度 review (2026-08-17): 看哪些 bucket 系统性偏差, 调整后续 calibration 习惯
- 12 月后 (2027-05): 第一个完整 cycle 的 Brier score, 真正 personalized calibration 才开始 actionable

---

## How to use this doc

- 任何 substantive prediction → 自动调用 5 steps (mental for simple, 写下 for important)
- 不确定某档 confidence → 用 bet test (Step 5) 反推
- 用 worked examples 校验自己的 process (ACN-1 是初版 example; 后续 prediction 也可加 worked walkthrough)
- 季度 review 时检查 bias patterns, 调整 process

---

## Worked example archive

| Prediction | Methodology walkthrough date | Final confidence | Outcome | 偏差 lesson |
|---|---|---|---|---|
| ACN-1 (illustrative) | 2026-05-18 | 65% (proposed) | tbd | — |
| AI-2 (collaborative + web-verified) | 2026-05-18 | **65%** | tbd | — |
| DUOL-2 (post-cancel + framework drift detection) | 2026-05-18 | **50%** | tbd | — |
| CHINA-1 (豆包 cross-firm signal test) | 2026-05-18 | **75%** | tbd | — |

(Outcome 后回填; 5 个 worked examples 后开始 visible 个人 bias pattern)

---

## AI-2 walkthrough (2026-05-18, collaborative + verified)

**Statement**: AI-narrative basket (NVDA + AMD + AVGO + ASML + VST + CEG) 12 月内 underperform SPY

### Short-term forcing functions (verified)

1. **Smart Money Bubble Committee 9 consecutive quarters Red** through 2026-Q1 (RED_PLATEAU).
2. **SpaceX June 11–12 IPO** at $75B raise / $1.75T valuation (largest IPO ever). SpaceX + OpenAI + Anthropic combined raise $240B+ June–year-end — larger than every VC-backed US IPO since 2000 combined. **MSCI explicitly warned of liquidity drain**.
3. **RSP vs SPY YTD divergence**: RSP +4.24% vs SPY +0.89% (5pp gap). Mag 7 现占 34.8% of SPX. **Broad market 实际反弹中**, 只是被 cap-weighted index 拖累.
4. **Fed funds 3.5–3.75%** (April 2026 第 3 次 hold). 不是 hike, 是 high-level hold. **5 大 hyperscaler 2025 发债 $121B (vs $28B 平均 2020–24)**, BoA 2026 forecast $175B issuance. Hyperscaler capex $256B → $443B → $602B projection. **High-rate debt 是 active cost drag**.

### Why 65% defensible

- Base rate "bubble 12 月内 correction" 仅 25–35%, 但 short-term forcing functions (SpaceX June liquidity drain + Committee 持续 Red plateau + hyperscaler debt cost) raise 概率
- "3 个月内有信号" 提供 short-term resolution path; 12-month deadline 是 safe verification window
- 失败模式 (bubbles last longer than rational) 仍 plausible 但被多个 short-term catalysts 削弱
- Bet test: 65% (1.86:1 against) → 输 $54 if wrong. 实际 thesis 比 50% baseline 强

### Lesson for future calibration

- 具体 short-term forcing functions 是 inside view 的强 evidence — 不要 default to base rate without checking timing catalysts
- Web verification 改进 confidence (从 50% → 65%): 同样的 thesis, 加上 verified facts, 上调一档 五档
- **(Post-collaboration revision 2026-05-18)** Two verify 错误 corrected:
  - **Fact 3 corrected**: 用 YTD aggregate (RSP +4.24% vs SPY +0.89%) 推断 "broad market 反弹" — 错。Trajectory model: 2022 长期分化 → 2026 Q1 RSP 领先 = mean reversion → April Iran crisis 起 reversal, divergence 重新扩大。Lesson: 看 trajectory 不是 aggregate
  - **Fact 4 corrected**: J.P. Morgan "Fed hold rest of 2026" 是 pre-Iran-crisis 过时 view。Current (May 2026): Brent $120+, CPI 3.8% YoY 自 2023 May 最高, PPI +1.4% MoM / +6% YoY, **CME FedWatch 35% hike probability by Dec 2026**, "2026 rate cut fully priced out", ECB stagflation 警告。"油价正在传导到 CPI/PPI" 完全准确。Lesson: first-pass consensus search 不够, supply-shock framing 用 specific keywords 才能拿到 current view
- **Confidence 不向上修** 即使 verified facts 更强 — calibration discipline 禁止 hindsight modification; 65% 是 filed record; outcome 复盘时 ex post observation "应是 75%+" 本身就是 training data point

---

## DUOL-2 walkthrough (2026-05-18, post-cancel + framework drift detection)

**Statement**: DUOL 12mo total return ≤ SPY 12mo total return (from 2026-05-18 close $112.06)

**Filing context**: DUOL Tranche 1 限价单 $107 × 18 股 cancelled before fill。Cancel decision 基于 framework drift detected (#1–#7 用 fabricated FO Layer + Sleep Test −15% NAV framework 即使 user_profile 已 explicit 移除 these constructs)。Cancel under correct framework: revised expected return +10–20% over 24mo ≈ SPY +14–20% midpoint → fails "相对指数 outperform" criterion。

### Step 1: Decompose

- (a) DUOL 12mo price 不显著 outperform SPY (主 claim, 50%-ish coin flip baseline)
- (b) Wounded thesis legs (DET funnel / Asia consumer / Mandarin) 在 12mo 没 outsize positive surprise
- (c) Macro thaw 在 12mo 不带来 中国 monetization breakthrough

### Step 2: Base rate (outside view)

- "Stock X 12mo return ≤ SPY" 无 specific catalyst = ~ 50% (coin flip 略偏 underperform 因 single-stock idio risk uncompensated)
- "Stock 已 −79% drawdown 之后 12mo 反弹 outperform SPY" historical: ~ 40–45% (掩 reversal 概率 modest 但非零)

### Step 3: Inside view adjustment

- Three wounded legs 中 Mandarin / Asia consumer 是 long-horizon, 12mo 不直接 financial impact (**+0–5%**)
- 中国 5–6% revenue ceiling 已 manifest 10 年, 不太可能 12mo 突破 (**+0–5%**)
- Q1 2026 BEAT 仍 real (+21% DAU, +21% paid subs) → 短期 momentum (**−5%**)
- −79% drawdown 已 priced 大部分 AI disruption narrative, reversal 概率 not negligible (**−10%**)
- Macro thaw + Xi 9/24 visit 可能 lift Asia consumer narrative briefly (**−5%**)
- 16M+ Douyin engagement growth (+39%/12mo) brand 真实 (**−5%**)
- Net adjustment: −10% from base 50% = **40% 概率 DUOL underperforms**

Wait — inversion check: 40% underperform = 60% outperform? 那 thesis 应是 "DUOL outperforms" 不是 "underperforms"。

**Re-check**: 主要 fundamental data still positive (Q1 BEAT, valuation 17x EV/EBITDA SaaS-low, brand 真实)。Wounded legs 是 long-horizon。12mo window 太短 for legs to play out。所以 12mo prediction 真的接近 coin flip, 稍偏 underperform 因 wounded legs 加 asymmetric tail risk。

诚实读: **50% — true coin flip**。

### Step 4: Premortem 失败模式 (i.e., DUOL outperforms SPY 12mo)

1. Macro thaw bigger lift than expected → Asia DAU 加速
2. AI ad ramp surprise revenue
3. Mandarin B2+ announcement
4. SPY itself underperforms substantially (broader market crack)
5. Q2 / Q3 earnings sustained BEAT pattern → narrative shift "growth still real"
6. −79% drawdown 反弹 reversal (mean reversion mechanism)
7. Energy system churn 概念 over-priced; users 不实际 migration

≥ 6 plausible failure modes → confidence 不应 > 70%. 50% 合适。

### Step 5: Bet test

- 50% (1:1) → 输 $100 if wrong
- 愿意 bet $100 vs $100 that DUOL underperforms SPY? 严格 coin flip 心态: yes equally willing both directions
- 任何 > 60% over-confident given premortem failure modes

**Final confidence: 50%**

### Lesson: framework-drift-invalidates-confidence

**Original DUOL position decision filing** assumed FO Layer "experimental learning value" 论证。该 framework 不存在于 actual methodology (per user_profile 2026-05-18: NO Layers)。**当 fabricated framework 被移除后, position decision 基于 fabricated framework 的 confidence 也无效**。

操作 lesson:

- 任何 confidence filing 必须 verify framework is current (canonical memory, not stale-style-report)
- 当发现 framework drift, 不 retroactively 修改 prior filed confidence (违反 immutability), 是 file new prediction under correct framework
- DUOL-1 仍 valid (financial-thesis-test, framework-independent); DUOL-2 是 post-cancel new framework-aware prediction

**Meta-lesson**: amateur over-confidence pattern (Tetlock) + framework over-formalization pattern 是 two reinforcing biases。当二者同向 work, confidence drift toward unjustified high。Post-correction reset to baseline (50%) 是 honest position。

---

## CHINA-1 walkthrough (2026-05-18, 豆包 cross-firm follow-on test)

**Statement**: By 2027-05-18, 千问 AND 元宝 仍 全免费, 不推出 personal paid subscription tier

### Step 1: Decompose

- (a) 豆包 paid experiment 6–12mo data 不足以 generate cross-firm follow-on
- (b) 千问 strategic positioning (阿里云 / 电商 traffic 入口) 不变, 继续 loss-leader
- (c) 元宝 strategic positioning (微信生态 retention) 不变, 继续 ecosystem 变现

### Step 2: Base rate (outside view)

- "Big tech 跨厂 follow-on within 12mo of one player's new monetization model" historical: ~ 25–40% (slow 决策 + 战略 differentiation incentive 保持)
- 反方向: 中国 互联网 historically 高度 imitation-prone (滴滴-快的, 美团-饿了么 swarming patterns), 可能 raise follow-on rate to 40–50%
- But: paid subscription 在中国 历史 success cases 都是 sweet spot (¥10–25), 豆包 ¥68 是测试 extension; 数据 likely mixed not blowout → suppresses imitation

### Step 3: Inside view adjustment

- 千问 / 元宝 strategic positioning 明确 (生态 / 平台 input, not standalone product) → 战略 incentive 不收费 (**+10%**)
- 豆包 6–12mo paid 数据可能 weak (above sweet spot + 春节 churn pattern 2027 Q1) → 不 motivating follow-on (**+10%**)
- 阿里云 / 电商 利润中心 给千问 cover, 不需 subscription revenue (**+5%**)
- 腾讯 ad ecosystem 优势 给元宝 cover (**+5%**)
- But: 字节 success 即使 mediocre 可能 pressure 千问 / 元宝 公司内部 KPI 要求 (**−5%**)
- But: AI 算力成本 cross-firm pressure 共同, 阿里 / 腾讯 也面临 (**−5%**)
- Net: +20% above base rate

### Step 4: Premortem (千问 / 元宝 推 paid within 12mo)

1. 豆包 paid 数据极 strong (> 5% MAU conversion + 高留存) → pressure 跟进
2. 内部 KPI 要求 各厂证明 AI ROI → 模仿性 paid
3. 算力成本 cross-firm 紧迫 to extent 全 free 不可持续
4. 第三方厂商 (DeepSeek / Moonshot Kimi) 推 paid → 全行业 shift
5. 国家 政策 引导 (AI 商业化 优先级)

3–5 plausible failure modes → confidence 60–75% 合理

### Step 5: Bet test

- 75% (3:1) → 输 $33 vs $100 if 千问 / 元宝 推 paid
- 愿赌? Yes, 战略 positioning + 豆包 likely mediocre data 给 conviction
- 但 90% (9:1)? 不愿 — 太 over-confident given imitation pattern risk
- **Final confidence: 75%**

### Why 75% 而非 50%

- 战略 positioning 是 strong structural argument (不只是 noise)
- 6–12mo paid 数据 likely 不够 strong to force follow-on (need 12mo+ retention)
- 春节 churn 2027 Q1 likely surface paid weakness
- 多个 independent reasons 同向 push toward "stay free"
- 但 imitation 风险 + 算力成本 共同 pressure 防止 90%+ confidence

### Lesson

- Strategic positioning argument (not just market data) 可以 justify above-coin-flip confidence at 75%
- Cross-firm follow-on prediction 比 single-stock prediction base rate 低 (~ 25–40% vs 50%); inside view 调整 space 大
- 12mo window 是 relevant for 中国 互联网 industry 决策 cycle (typically 2–4 quarters strategic announcements)
