{
  "title": "三张财报与经营活动",
  "description": "区分时点快照与期间录像，借一家简化制造厂的六笔交易联动看懂利润表、资产负债表与现金流量表怎样同步改写；再以 Microsoft（MSFT）FY26 与 Coca-Cola（KO）FY25 真实财报拆解“利润不等于现金”的两种方向，并厘清财年、自然年与报告时滞。",
  "layout": "entry",
  "notebookid": "zh-three-financial-statements",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-three-financial-statements"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

[《Agent 时代的基本面投资》](/zh/notebook/investment-returns/)里的 GE Vernova（GEV）燃气轮机订单留下了一个会计问题：签单、交付确认收入、收到货款往往不在同一天；[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)里也提到，Microsoft（MSFT）在 2026 年 7 月 29 日公布的是 **FY26 Q4** 财报，为什么刚过七月就结束了“2026 财年”？

要读懂一家上市公司的全部财务数字，得把**利润表**（Income Statement）、**资产负债表**（Balance Sheet）和**现金流量表**（Cash Flow Statement）合在一起看。它们分别从权责成果、存量家底和现金流转三个机位，记录同一段经营活动。

## 三张报表的分工：时点快照与期间录像 {#nb-e01-three-statements}

按照美国证监会（SEC）《Beginners’ Guide to Financial Statements》的划分，三张报表先按时间属性分成两类：[^sec-guide]

- **资产负债表**（时点快照）：拍下某一天收盘那一刻（例如 2026 年 6 月 30 日）公司手里有多少**资产**（现金、应收账款、存货、厂房设备、商誉等），欠了别人多少**负债**（应付账款、预收客户款、银行借款与债券等），剩余归股东所有的净值就是**股东权益**。任意一个时点都满足会计恒等式：

\[
\text{总资产}=\text{总负债}+\text{股东权益}.
\]

- **利润表**（期间录像：权责发生制）：记录两个时点之间（一个季度或一个财年）企业交付了多少商品和服务（**收入**），为此消耗了多少对应成本与费用（**营业成本、研发、销售、管理、折旧、利息与税费**），最后得出**净利润**与**每股收益**（EPS）。权责发生制盯的是“有没有完成交付、有没有发生经济消耗”，不管现金当天有没有进出银行账户。
- **现金流量表**（期间录像：收付实现制）：记录同一期间里银行账户真金白银的流入和流出，并按性质拆成三栏——主营业务收付的**经营现金流**（CFO）、买厂房设备或买卖投资的**投资现金流**（CFI），以及借还债、增发、回购和派息的**融资现金流**（CFF）。

三张表靠两条硬勾稽紧紧锁在一起：利润表的净利润减去现金分红后，滚入资产负债表的**留存收益**（股东权益）；现金流量表三栏净额加上期初现金，正好等于期末资产负债表上的**现金余额**。

<figure class="flow-figure e01-link-map" id="nb-e01-link-map">
<div class="ff-head"><p class="ff-title">三张报表的勾稽总图：从期初时点到期末时点</p><span class="ff-sub">资产负债表管存量时点 · 利润表与现金流量表解释两个时点之间的变化</span></div>
<div class="e01-lgrid business-exchange" aria-label="三张报表勾稽总图：左侧为期初资产负债表（t0 时点），包含期初现金、应收存货与设备，对应负债与期初股东权益，满足总资产等于总负债加股东权益。中间分为两张期间表：上方利润表按权责发生制计算收入减成本费用得净利润，扣除现金分红后并入期末留存收益；下方现金流量表按经营、投资、融资三栏汇总现金净变动，加上期初现金等于期末现金。右侧为期末资产负债表（t1 时点），更新全部存量并再次满足会计恒等式。">
<div class="e01-snap">
<div><span class="e01-badge">时点快照 t₀</span><strong>期初资产负债表</strong>
<ul><li>资产：现金、应收、存货、设备</li><li>负债：应付、预收、借款</li><li>权益：实收资本、期初留存收益</li></ul></div>
<div class="e01-eq">总资产 ＝ 总负债 ＋ 股东权益</div>
</div>
<div class="e01-flows">
<div class="e01-flow"><span class="e01-badge e01-bperiod">期间录像 · 权责发生</span><strong>利润表（t₀ → t₁）</strong>
<p>按交付确认收入，配比当期成本、折旧、利息与税费，算出净利润与 EPS。</p>
<span class="e01-bridge">净利润 − 现金分红 → 并入期末留存收益</span></div>
<div class="e01-flow"><span class="e01-badge e01-bperiod">期间录像 · 现金收付</span><strong>现金流量表（t₀ → t₁）</strong>
<p>按经营（CFO）、投资（CFI）、融资（CFF）三栏统计真金白银的进出。</p>
<span class="e01-bridge">期初现金 ＋ 三栏净现金流 ＝ 期末现金</span></div>
</div>
<div class="e01-snap e01-snap-end">
<div><span class="e01-badge">时点快照 t₁</span><strong>期末资产负债表</strong>
<ul><li>资产：更新后的现金与经营资产</li><li>负债：更新后的账期与债务</li><li>权益：实收资本 ＋ 更新留存收益</li></ul></div>
<div class="e01-eq">总资产 ＝ 总负债 ＋ 股东权益</div>
</div>
</div>
<figcaption>除三张主表外，上市年报通常附带股东权益变动表与详细附注，用来追溯回购、股权激励与未实现综合收益等权益细项。</figcaption>
</figure>

## 跟随一家简化制造厂：六笔交易同步改写三张表 {#nb-e01-walkthrough}

抽象看定义容易犯晕，我们直接跟着一家简化的零件装配小厂走完第一个季度。六笔真实生意里最常见的交易依次发生：股东出资加银行借款、现金买机器、赊购原材料、交付产品并部分赊销、支付工资利息税并计提折旧、最后向股东派发现金分红。

默认页面展示第 ⑥ 步的期末全貌；点击上方步骤 ① 至 ⑥，逐笔看每一件事怎样同步改写三张表（橙底高亮行即该步发生变动的科目）：

<figure class="flow-figure e01-ledger" id="nb-e01-ledger" data-e01-ledger>
<div class="ff-head"><p class="ff-title">一家简化制造厂的一季度账本：六笔交易联动三张表</p><span class="ff-sub">单位：美元 · 教学简化设定 · 每一步均严格满足三表勾稽</span></div>
<div class="e01-steps" hidden><button type="button" data-e01-step="1">① 筹资起步</button><button type="button" data-e01-step="2">② 现金买设备</button><button type="button" data-e01-step="3">③ 赊购原料</button><button type="button" data-e01-step="4">④ 交付并赊销</button><button type="button" data-e01-step="5">⑤ 费用与折旧</button><button type="button" data-e01-step="6" aria-pressed="true">⑥ 派息期末</button></div>
<div class="e01-panels business-exchange" aria-label="简化制造厂第一季度六步交易联动结果（单位：美元）：第 1 步股东出资 100,000 加银行借款 50,000，利润为 0、融资现金流 +150,000、资产与负债权益均为 150,000。第 2 步现金 60,000 买设备，利润仍为 0、投资现金流 −60,000、现金 90,000 加设备 60,000。第 3 步赊购原料 40,000，存货与应付账款同增 40,000，总资产 190,000。第 4 步消耗 30,000 存货交付售出 75,000（现收 45,000、赊销应收 30,000），毛利 +45,000、经营现金流 +45,000。第 5 步付现工资房租 20,000 与利息税 5,000，另计提非现金折旧 3,000，净利润落为 +17,000，经营现金流为 +20,000（高于净利润 3,000）。第 6 步派发现金股息 5,000，净利润不变仍为 +17,000，融资现金流降为 +145,000，期末现金 105,000、应收 30,000、存货 10,000、设备净值 57,000、总资产 202,000，等于应付 40,000 加借款 50,000 加实收资本 100,000 加留存收益 12,000。">
<div class="e01-card">
<div class="e01-chead"><strong>利润表</strong><span>本季累计</span></div>
<div class="e01-rows">
<div class="e01-row" data-e01-row="is-rev"><span>营业收入</span><strong data-e01-v="is-rev">75,000</strong></div>
<div class="e01-row" data-e01-row="is-cogs"><span>营业成本</span><strong data-e01-v="is-cogs">−30,000</strong></div>
<div class="e01-row" data-e01-row="is-opex"><span>工资与房租</span><strong data-e01-v="is-opex">−20,000</strong></div>
<div class="e01-row" data-e01-row="is-dep"><span>设备折旧（非现金）</span><strong data-e01-v="is-dep">−3,000</strong></div>
<div class="e01-row" data-e01-row="is-inttax"><span>利息与所得税</span><strong data-e01-v="is-inttax">−5,000</strong></div>
<div class="e01-row e01-tot" data-e01-row="is-ni"><span>净利润</span><strong data-e01-v="is-ni">+17,000</strong></div>
</div>
</div>
<div class="e01-card">
<div class="e01-chead"><strong>现金流量表</strong><span>本季累计</span></div>
<div class="e01-rows">
<div class="e01-row" data-e01-row="cf-cfo"><span>经营现金流 CFO</span><strong data-e01-v="cf-cfo">+20,000</strong></div>
<div class="e01-row" data-e01-row="cf-cfi"><span>投资现金流 CFI</span><strong data-e01-v="cf-cfi">−60,000</strong></div>
<div class="e01-row" data-e01-row="cf-cff"><span>融资现金流 CFF</span><strong data-e01-v="cf-cff">+145,000</strong></div>
<div class="e01-row e01-tot" data-e01-row="cf-cash"><span>期末现金余额</span><strong data-e01-v="cf-cash">105,000</strong></div>
</div>
</div>
<div class="e01-card">
<div class="e01-chead"><strong>资产负债表</strong><span>当前时点</span></div>
<div class="e01-bs-cols">
<div>
<div class="e01-bs-sub">资产（钱花在哪）</div>
<div class="e01-rows">
<div class="e01-row" data-e01-row="bs-cash"><span>现金</span><strong data-e01-v="bs-cash">105,000</strong></div>
<div class="e01-row" data-e01-row="bs-ar"><span>应收账款</span><strong data-e01-v="bs-ar">30,000</strong></div>
<div class="e01-row" data-e01-row="bs-inv"><span>存货</span><strong data-e01-v="bs-inv">10,000</strong></div>
<div class="e01-row" data-e01-row="bs-ppe"><span>设备净值</span><strong data-e01-v="bs-ppe">57,000</strong></div>
<div class="e01-row e01-tot"><span>总资产</span><strong data-e01-v="bs-ta">202,000</strong></div>
</div>
</div>
<div>
<div class="e01-bs-sub">负债与权益（钱从哪来）</div>
<div class="e01-rows">
<div class="e01-row" data-e01-row="bs-ap"><span>应付账款</span><strong data-e01-v="bs-ap">40,000</strong></div>
<div class="e01-row" data-e01-row="bs-debt"><span>银行借款</span><strong data-e01-v="bs-debt">50,000</strong></div>
<div class="e01-row" data-e01-row="bs-pic"><span>实收资本</span><strong data-e01-v="bs-pic">100,000</strong></div>
<div class="e01-row" data-e01-row="bs-re"><span>留存收益</span><strong data-e01-v="bs-re">12,000</strong></div>
<div class="e01-row e01-tot"><span>负债＋权益</span><strong data-e01-v="bs-tle">202,000</strong></div>
</div>
</div>
</div>
</div>
</div>
<p class="e01-note" data-e01-note>⑥ 派发现金股息 5,000（期末全貌）：分红属于利润分配，不改变利润表净利润（仍为 17,000）；现金从融资活动流出 5,000，期末留存收益落在 12,000，三表严丝合缝。</p>
<figcaption>间接法核对经营现金流：净利润 17,000 ＋ 非现金折旧 3,000 − 应收增加 30,000 − 存货增加 10,000 ＋ 应付增加 40,000 ＝ +20,000 美元。</figcaption>
</figure>

沿着这六步走一遍，初学者最容易踩的四个会计误区迎刃而解：

1. **融到钱不等于赚到钱**（步骤 ①）：股东投进来 100,000 美元、银行贷进来 50,000 美元，账户现金立刻鼓起来，但利润表纹丝不动；资产负债表同时记下实收资本与银行借款。
2. **买机器当天不算费用**（步骤 ② 与 ⑤）：花 60,000 美元买一台用五年的设备，现金立刻在投资活动流出，利润表当天不扣费用，改按使用年限每季计提 3,000 美元**折旧**慢慢摊进成本，同时把资产负债表里的设备净值压低到 57,000 美元。
3. **确认收入不等于收到现金**（步骤 ③ 与 ④）：产品交付客户就记 75,000 美元收入和 30,000 美元存货成本，可现金只收回 45,000 美元，其余 30,000 美元挂在应收账款上；同时欠着供应商 40,000 美元原料款还没付，这两头错期正是营运资本调节的来源。
4. **现金分红不是利润表费用**（步骤 ⑥）：派发 5,000 美元股息后，净利润仍是 17,000 美元，真正减少的是银行现金和期末留存收益（由 17,000 降至 12,000）。

## 经营、投资与融资现金流：真实财报里的两种背离 {#nb-e01-cash-flows}

把这套框架放进真实上市公司的 SEC 正式披露，就能看到“净利润不等于现金变动”会在两个相反方向同时出现。这里取前文反复读过的两家公司——正在全力扩建 AI 数据中心的 **Microsoft**（MSFT，2026 财年截至 2026 年 6 月 30 日），以及轻资产浓缩液模式的 **The Coca-Cola Company**（KO，2025 财年截至 2025 年 12 月 31 日）：

<figure class="flow-figure e01-real-cf" id="nb-e01-real-cf">
<div class="ff-head"><p class="ff-title">真实财报里的三表对照：MSFT FY26 vs KO FY25</p><span class="ff-sub">单位：百万美元 · 数据来自两家公司 SEC 官方披露</span></div>
<div class="e01-rgrid business-exchange" aria-label="两家真实上市公司三表主干对照（百万美元）：一、Microsoft（MSFT）FY2026（截至 2026-06-30）：利润表总收入 331,839、营业利润 155,237、净利润 133,749（稀释 EPS 17.95 美元）；现金流量表经营现金流 +182,935（高于净利润 492 亿美元）、投资现金流 −139,500（其中固定资产资本开支 −115,948）、融资现金流 −52,546（分红 −26,445、回购 −22,271）；期末现金及等价物反由 30,242 降至 20,935，固定资产净值由 204,966 增至 313,076，总资产 758,376 等于总负债 315,989 加股东权益 442,387。二、Coca-Cola（KO）FY2025（截至 2025-12-31）：利润表净营业收入 47,941、营业利润 13,762、合并净利润 13,137（归属股东 13,107、稀释 EPS 3.04 美元）；现金流量表经营现金流 +7,408（因支付 6,069 百万美元 fairlife 或有对价尾款而低于净利润）、投资现金流 −67（固定资产资本开支仅 −2,112）、融资现金流 −8,140（现金分红 −8,779）；期末总资产 104,816 等于总负债 70,541 加总权益 34,275。">
<div class="e01-rcard" style="--e01-c:#23695a">
<div class="e01-rhead"><strong>Microsoft（MSFT）· FY2026</strong><small>12 个月截至 2026-06-30 · 重资本扩张期</small></div>
<div class="e01-rsec"><div class="e01-rsec-t">利润表（期间）</div><div class="e01-ritems">
<div class="e01-ri"><span>总收入 / 营业利润</span><b>331,839 / 155,237</b></div>
<div class="e01-ri"><span>GAAP 净利润（稀释 EPS 17.95）</span><b class="e01-pos">133,749</b></div>
</div></div>
<div class="e01-rsec"><div class="e01-rsec-t">现金流量表（期间）</div><div class="e01-ritems">
<div class="e01-ri"><span>经营现金流 CFO</span><b class="e01-pos">+182,935</b></div>
<div class="e01-ri"><span>投资现金流 CFI（含 CapEx −115,948）</span><b class="e01-neg">−139,500</b></div>
<div class="e01-ri"><span>融资现金流 CFF（派息＋回购 −48,716）</span><b class="e01-neg">−52,546</b></div>
</div></div>
<div class="e01-rsec"><div class="e01-rsec-t">资产负债表（2026-06-30 时点）</div><div class="e01-ritems">
<div class="e01-ri"><span>总资产 ＝ 负债 ＋ 权益</span><b>758,376 ＝ 315,989 ＋ 442,387</b></div>
<div class="e01-ri"><span>现金及等价物 / 固定资产净值</span><b>20,935（↓9,307） / 313,076（↑108,110）</b></div>
</div></div>
<p class="e01-rnote">CFO 高出净利润 492 亿美元，但 1,159 亿美元服务器与数据中心资本开支＋股东回报令期末现金反降、固定资产激增。</p>
</div>
<div class="e01-rcard" style="--e01-c:#a8743f">
<div class="e01-rhead"><strong>Coca-Cola（KO）· FY2025</strong><small>12 个月截至 2025-12-31 · 轻资产浓缩液模式</small></div>
<div class="e01-rsec"><div class="e01-rsec-t">利润表（期间）</div><div class="e01-ritems">
<div class="e01-ri"><span>净营业收入 / 营业利润</span><b>47,941 / 13,762</b></div>
<div class="e01-ri"><span>合并净利润（归属股东 13,107）</span><b class="e01-pos">13,137</b></div>
</div></div>
<div class="e01-rsec"><div class="e01-rsec-t">现金流量表（期间）</div><div class="e01-ritems">
<div class="e01-ri"><span>经营现金流 CFO（含 fairlife 尾款）</span><b class="e01-pos">+7,408</b></div>
<div class="e01-ri"><span>投资现金流 CFI（CapEx 仅 −2,112）</span><b class="e01-neg">−67</b></div>
<div class="e01-ri"><span>融资现金流 CFF（现金分红 −8,779）</span><b class="e01-neg">−8,140</b></div>
</div></div>
<div class="e01-rsec"><div class="e01-rsec-t">资产负债表（2025-12-31 时点）</div><div class="e01-ritems">
<div class="e01-ri"><span>总资产 ＝ 负债 ＋ 权益</span><b>104,816 ＝ 70,541 ＋ 34,275</b></div>
<div class="e01-ri"><span>现金及等价物 / 应付及应计费用</span><b>10,270 / 14,813（↓6,899）</b></div>
</div></div>
<p class="e01-rnote">GAAP 经营现金流比净利润低 57 亿美元，主因是在 2025 年用现金结清了前期已计提的 60.69 亿美元 fairlife 并购或有对价。</p>
</div>
</div>
<figcaption>两家公司期末现金变动另含少量汇率折算与受限现金口径差；数字均取自 SEC 官方披露原件。</figcaption>
</figure>

<span data-text-versions id="nb-e01-text-real">看 MSFT 时，只盯利润表会看到净利润 1,337 亿美元、经营现金流更高达 1,829 亿美元；跳到投资现金流与资产负债表，才发现公司一年砸下 **1,159 亿美元**建设服务器与数据中心，把账面固定资产净值从 2,050 亿推升至 3,131 亿美元，外加 487 亿美元派息和回购，结果账面现金及等价物反而减少了 93 亿美元。[^msft-fy26] 反过来读 KO 时，如果只看 GAAP 经营现金流（74.08 亿美元）远低于净利润（131.37 亿美元），很容易误以为 KO 生意突然收不回钱；对照资产负债表里“应付及应计费用”锐减近 69 亿美元以及现金流附注才会明白，这只是公司在 2025 年一次性付清了 **60.69 亿美元**的 fairlife 收购或有对价尾款，剔除该笔历史负债清偿后，全年自由现金流（经营现金流减资本开支）达 **113.65 亿美元**，资本开支仅 21.12 亿美元<span data-text-detail>（Microsoft FY2026 经营现金流高出净利润 491.86 亿美元，主要加回项包括非现金折旧与摊销 385.34 亿、股权激励费用 124.05 亿、递延所得税 141.89 亿以及客户预付未实现收入净增 93.61 亿，同时扣减应收账款净增 127.37 亿与投资重估收益 110.47 亿；资产负债表上现金及等价物为 209.35 亿，另持短期投资 559.08 亿。Coca-Cola FY2025 资产负债表总负债 70,541 百万美元为流动负债 21,281 加长期债务 42,119、其他非流动负债 4,735 与递延税负债 2,406 之和，总权益 34,275 含少数股东权益 2,106）</span>。[^ko-fy25]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

应收账款、存货、应付账款怎样吞吐短期资金，留到下一篇[《收入、回款与营运资本》](/zh/notebook/revenue-collections-working-capital/)专门展开；资本开支与折旧的时间差怎样改写利润和自由现金流，则由[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)承接。

## 财年、自然年、季度编号与报告时滞 {#nb-e01-fiscal-calendar}

读懂单家公司的三张表之后，跨公司对比前还要过一道时间口径关：**上市公司的财年未必等于自然年**（1 月 1 日至 12 月 31 日）。

美股公司可以按自身业务淡旺季选定财年（Fiscal Year，简称 FY）截止日，惯例往往按**财年结束那一天的自然年份**来给整个财年命名。把本系列反复出现的三家公司摆在同一条时间轴上，就能解开[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)里“MSFT 为何在 2026 年 7 月发 FY26 Q4 财报”的疑问：

<figure class="flow-figure e01-calendar" id="nb-e01-calendar-fig">
<div class="ff-head"><p class="ff-title">财年与自然年错位对照：KO、MSFT 与 NVDA 的“Q4”各在几月</p><span class="ff-sub">同一条自然时间轴（2025-01 → 2026-09）· 虚线亮框标出各家 Q4 季度</span></div>
<div class="business-exchange" aria-label="对照三家公司官方财年与自然年的错位：一、Coca-Cola（KO）：财年截至 12 月 31 日，FY2025 覆盖 2025 年 1 月至 12 月，Q4 为 2025 年 10 至 12 月，与自然年几乎重合，2026 年 2 月 20 日提交 10-K。二、Microsoft（MSFT）：财年截至 6 月 30 日，FY2026 覆盖 2025 年 7 月至 2026 年 6 月，FY26 Q4 为 2026 年 4 至 6 月，2026 年 7 月 29 日盘后发布业绩并提交 10-K。三、NVIDIA（NVDA）：财年截至每年一月最后一个周日，FY2026 覆盖 2025 年 1 月底至 2026 年 1 月 25 日（十一个月落在自然年 2025 年），FY26 Q4 为 2025 年 11 月至 2026 年 1 月 25 日，2026 年 2 月 25 日提交 10-K。">
<div class="e01-taxis"><span>公司 / 财年</span><span>25Q1</span><span>25Q2</span><span>25Q3</span><span>25Q4</span><span>26Q1</span><span>26Q2</span><span>26Q3</span></div>
<div class="e01-trows">
<div class="e01-trow">
<div class="e01-tname"><strong>KO · FY25</strong><small>截至 12 月 31 日</small></div>
<div class="e01-ttrack"><div class="e01-tbar" style="--l:0%;--w:57.1%;--c:#a8743f">FY2025（2025-01 → 2025-12）</div><div class="e01-tbar-q4" style="--ql:42.8%;--qw:14.3%"></div></div>
<div class="e01-tmeta">FY25 Q4 ＝ 自然 2025 年 10—12 月 · 2026-02-20 提交 Form 10-K（与自然年对齐）</div>
</div>
<div class="e01-trow">
<div class="e01-tname"><strong>NVDA · FY26</strong><small>截至 1 月末周日</small></div>
<div class="e01-ttrack"><div class="e01-tbar" style="--l:4.7%;--w:57.1%;--c:#5986a1">FY2026（2025-02 → 2026-01-25）</div><div class="e01-tbar-q4" style="--ql:47.5%;--qw:14.3%"></div></div>
<div class="e01-tmeta">FY26 Q4 ＝ 2025 年 11 月—2026 年 1 月 25 日 · 2026-02-25 提交 10-K（约 11 个月落在自然年 2025）</div>
</div>
<div class="e01-trow">
<div class="e01-tname"><strong>MSFT · FY26</strong><small>截至 6 月 30 日</small></div>
<div class="e01-ttrack"><div class="e01-tbar" style="--l:28.6%;--w:57.1%;--c:#23695a">FY2026（2025-07 → 2026-06-30）</div><div class="e01-tbar-q4" style="--ql:71.4%;--qw:14.3%"></div></div>
<div class="e01-tmeta">FY26 Q4 ＝ 自然 2026 年 4—6 月 · 2026-07-29 发布业绩并提交 10-K（呼应 NB-A03）</div>
</div>
</div>
</div>
<figcaption>三家公司 12 个月完整财年各占 4 个自然季宽度；跨公司横向对比收入增速或估值倍数时，需对齐至相同自然时段或采用 TTM（滚动十二个月）。</figcaption>
</figure>

<span data-text-versions id="nb-e01-text-filing">除此之外，还要区分**报告截止日**与**实际披露日**之间的时滞。根据 SEC 定期报告期限规则，像 MSFT、KO、NVDA 这类大型加速申报人（Large Accelerated Filer），经审计的年度报告 **Form 10-K** 须在财年结束后 **60 个自然日内**提交，未经完整审计的季度报告 **Form 10-Q** 须在季度结束后 **40 个自然日内**提交（通常会先通过 8-K 业绩新闻稿公布主要数字，再在数日内或同日提交 10-K／10-Q 附注全文）。[^sec-deadlines]<sup>，</sup>[^nvda-fy26] 比较两家财年不同的公司——比如拿 1 月底结账的 NVDA 对照 6 月底结账的 MSFT——不能直接拿各自的“FY26”硬比，需要先将最近四个季度加总成同一截止窗口附近的 **TTM**（Trailing Twelve Months，滚动十二个月）<span data-text-detail>（SEC Rule 12b-2 另规定：加速申报人 Accelerated Filer 的 10-K / 10-Q 期限为 75 / 40 个自然日，非加速申报人 Non-Accelerated Filer 为 90 / 45 个自然日；外国私人发行人如 TSMC、ASML 则通常提交 Form 20-F 年报。部分零售与消费公司采用 52/53 周财年，如 KO 前三季截至周五、第四季截至 12 月 31 日，遇到 53 周财年时还需留意同比多出一周的日历效应）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

读财报时养成固定顺序——先核对报告期间与截止时点、再看利润表权责结果、对照现金流量表经营与投资净额、最后回到资产负债表检验现金、应收、存货、固定资产与债务的存量变化——三张报表就能拼出企业完整的资金循环。

<script src="/notebook/three-statements/ui.js?v=20261126" defer></script>

[^sec-guide]: U.S. Securities and Exchange Commission，[Beginners’ Guide to Financial Statements](https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements)，三张主表与股东权益变动表分工及会计恒等式说明，2026-11-26 查阅。
[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1，同日提交 FY2026 Form 10-K）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的利润表、资产负债表与现金流量表原件。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)与 [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)（2026-02-20 提交），截至 2025-12-31 的三张主表与 fairlife 6,069 百万美元或有对价自由现金流调节表。
[^sec-deadlines]: U.S. Securities and Exchange Commission，[Final Rule 33-8644: Revisions to Accelerated Filer Definition and Accelerated Deadlines for Filing Periodic Reports](https://www.sec.gov/files/rules/final/33-8644.pdf)，大型加速申报人 10-K（60 日）与 10-Q（40 日）提交期限规则。
[^nvda-fy26]: NVIDIA Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)，2026-02-25 提交，财年截至每年一月最后一个周日（FY2026 截至 2026-01-25）。
