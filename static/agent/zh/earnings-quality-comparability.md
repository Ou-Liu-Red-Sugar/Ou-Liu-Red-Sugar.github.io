# 盈利质量与可比口径

厘清 GAAP 与 Non-GAAP 利润的 SEC 监管护栏及 Adjusted EBITDA、Adjusted Operating Income、Adjusted EPS 的适用边界；对照 MSFT、KO、SNOW 与 HPQ 真实调节表辨别合理剔除项与股权激励 SBC、连续重组等伪一次性项，并以现金印证、META 与 GOOGL 服务器折旧延寿及股数稀释完成盈利质量体检。

Entry: zh-earnings-quality-comparability | Node: NB-E06 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E06《盈利质量与可比口径》，承接 NB-E01/E03/E05 的三表、资本开支与资金循环以及 NB-A03 的 GAAP/非 GAAP 预期对照，向 NB-E07《资本配置、激励与每股结果》过渡。全篇分四节：一、GAAP 与 Non-GAAP 的监管护栏及常见调整口径：依 SEC Regulation G、Regulation S-K Item 10(e) 与 Non-GAAP C&DI（Question 100.01–100.04、102.03、102.05/102.07、102.10–102.11、103.01–103.02）明确同等突出度、从 GAAP 出发的定量调节表、禁止剔除正常经常性现金费用、双向对称与两年红线；用流向图拆解 EBITDA / Adjusted EBITDA、Adjusted Operating Income 与 Adjusted EPS 各自的计算桥、适用场景与失效边界，并引 Warren Buffett 2015 年股东信提醒重资产不可将 EBITDA 视作自由现金流。二、逐项拆解 Non-GAAP 调整项：分三类对照真实 SEC 原件——（1）合理剔除且双向对称的噪声：MSFT FY26 对称扣回 OpenAI 权益法投资净收益（ASC 323）−4,963 M（GAAP 133,749 M → Non-GAAP 128,786 M，且未剔除 12,405 M SBC）、KO FY25 对称调整（GAAP 13,107 M → Comparable 12,958 M）及 SNOW FY26 办公退租减值 +108.6 M；（2）视研究用途而定的灰色项：并购无形资产摊销（引 Warren Buffett 区分客户关系摊销与软件摊销，同时提示连续并购的资本代价）；（3）绝不能盲目剔除的伪一次性项：SNOW FY26 靠加回 +1,710.7 M SBC（占收入 36.5%）把 GAAP 亏损 −1,331.6 M 翻成 Non-GAAP +465.9 M，配双路径图揭示 SBC 不回购摊薄每股现金流、回购对冲则于融资端流出 1,546.4 M 现金；HPQ FY23—FY25 连续三年剔除重组费 527 / 301 / 405 M 且同日再宣 FY26—FY28 约 650 M 新计划。三、单屏互动 GAAP → Non-GAAP 调节审查器（SNOW FY26 / HPQ FY25 / MSFT FY26 三预设）：逐项勾选是否认可剔除，联动所得税与反稀释股数切换，实时重算独立可比利润、稀释 EPS 与市盈率落差。四、GAAP 内部盈利质量三道体检：（1）CFO / 净利润与应计项比例（引 Richard G. Sloan 1996 实证，对照 MSFT 1.37x、KO 0.56x→1.03x 与 SNOW SBC 撑高 CFO 的假象）；（2）服务器折旧延寿会计估计变动（配双路径图对照利润表与现金流量表：META FY25 延至 5.5 年减少折旧 2.92 B、增净利 2.59 B / EPS +1.00 美元；GOOGL FY23 由 4 年延至 6 年减少折旧 3.9 B、增净利 3.0 B / EPS +0.24 美元，CFO 与 FCF 变动均为 0）；（3）基本与稀释股数（SNOW 亏损期反稀释 337.5 M 转盈后跳升至 372.3 M 对比 MSFT 7,429 M vs 7,453 M）。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-e06-sec-nongaap-cdi",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures"
      },
      "required_unit": {
        "locator": "Section 100（Question 100.01–100.04）、Section 102（Question 102.03、102.05、102.07、102.10、102.11）与 Section 103（Question 103.01–103.02）。",
        "scope": "核对 SEC 对 Non-GAAP 反误导、同等突出度、禁止剔除正常经常性现金费用、双向对称、EBITDA 起点及禁止每股流动性指标的规定。",
        "purpose": "核对本篇 GAAP 与 Non-GAAP 监管规则与 EBITDA 定义边界。"
      },
      "title": "SEC：Non-GAAP Financial Measures — Compliance & Disclosure Interpretations（C&DI）",
      "authors": [
        "U.S. Securities and Exchange Commission"
      ],
      "version": "2026-11-27 核对 SEC.gov"
    },
    {
      "source_id": "nb-e06-snow-fy26",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm"
      },
      "required_unit": {
        "locator": "FY2026（截至 2026-01-31）Condensed Consolidated Statements of Operations、Cash Flows 及 GAAP to Non-GAAP Reconciliations。",
        "scope": "核对 SNOW 总收入 4,683.9 M、GAAP 归属净亏损 −1,331.6 M（337.5 M 股，EPS −3.95）、SBC 相关加回 +1,710.7 M、无形资产摊销 +110.1 M、退租减值 +108.6 M、税项调节 −138.2 M、Non-GAAP 归属净利润 +465.9 M（372.3 M 稀释股，EPS 1.25）、CFO +1,221.9 M 及融资回购+归属税流出 −1,546.4 M。",
        "purpose": "核对高 SBC 公司借调节表扭亏、反稀释股数跃升及现金流回购对冲实证。"
      },
      "title": "Snowflake Inc.：FY2026 Q4 及全财年业绩公告（EX-99.1）与 Form 10-K（截至 2026-01-31）",
      "authors": [
        "Snowflake Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e01-msft-fy26",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm"
      },
      "required_unit": {
        "locator": "FY2026（截至 2026-06-30）Non-GAAP Reconciliation（Impact from OpenAI）、Income Statements 与 Cash Flows Statements。",
        "scope": "核对 MSFT GAAP 净利润 133,749 M（稀释 EPS 17.95）对称扣回 OpenAI 权益法投资净收益 −4,963 M 得 Non-GAAP 净利润 128,786 M（稀释 EPS 17.28），以及未加回 12,405 M SBC、CFO 182,935 M 与基本/稀释股数 7,429 M / 7,453 M。",
        "purpose": "核对双向克制型 Non-GAAP 与健康现金转换对照。"
      },
      "title": "Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）",
      "authors": [
        "Microsoft Corporation"
      ],
      "version": "2026-11-26 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e06-hpq-fy25",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/47217/000004721725000068/hp103125exhibit991q425.htm"
      },
      "required_unit": {
        "locator": "FY2025（截至 2025-10-31）Adjustments to GAAP Net Earnings 与 Fiscal 2026 Plan 重组公告。",
        "scope": "核对 HPQ FY25 GAAP 净利润 2,529 M（EPS 2.65）至 Non-GAAP 2,972 M（EPS 3.12）的调节项（含重组 +405 M、无形摊销 +345 M、税项 −427 M），以及 FY23 527 M、FY24 301 M、FY25 405 M 连续重组与 FY26—FY28 预计 650 M 新计划。",
        "purpose": "核对年年发生的重组费如何扭曲 Non-GAAP 盈利与市盈率。"
      },
      "title": "HP Inc.：FY2025 与 FY2024 全财年业绩公告（EX-99.1，截至 2025-10-31）",
      "authors": [
        "HP Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e06-meta-10k-25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm"
      },
      "required_unit": {
        "locator": "Note 1（Summary of Significant Accounting Policies — Use of Estimates）与合并利润表、现金流量表。",
        "scope": "核对 META 自 2025-01-01 将大多数服务器与网络资产折旧年限延至 5.5 年，令 2025 年折旧减少 2.92 B 美元、GAAP 净利润增加 2.59 B 美元（稀释 EPS +1.00 美元）。",
        "purpose": "核对会计估计变动抬升 GAAP 利润而不增加现金流的实证。"
      },
      "title": "Meta Platforms, Inc.：FY2025 Form 10-K（截至 2025-12-31）",
      "authors": [
        "Meta Platforms, Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e06-googl-10k-23",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204424000022/goog-20231231.htm"
      },
      "required_unit": {
        "locator": "Note 1（Use of Estimates — Change in Accounting Estimate）与 FY2023 主表。",
        "scope": "核对 GOOGL 自 2023 财年起将服务器折旧由 4 年延至 6 年，令 2023 年折旧减少 3.9 B 美元、GAAP 净利润增加 3.0 B 美元（每股 +0.24 美元）。",
        "purpose": "核对另一大型云厂商服务器折旧延寿对 GAAP 利润的影响。"
      },
      "title": "Alphabet Inc.：FY2023 Form 10-K（截至 2023-12-31）",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127b">

2026 年 2 月 25 日，**Snowflake**（SNOW）发布 2026 财年业绩，同一份公告摆出两份相反成绩单：按美国公认会计准则（GAAP），全年净亏损 **13.32 亿美元**（每股 −3.95 美元）；按**非 GAAP**（Non-GAAP）口径，公司反而盈利 **4.66 亿美元**（每股 1.25 美元，按次日收盘 173.06 美元算约 138.3 倍市盈率）。[^snow-fy26]<sup>，</sup>[^market-closes]

同一家公司、同一段十二个月的经营，为什么既能写成“巨亏 13.3 亿”，又能写成“盈利 4.7 亿”？承接[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)与[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)建立的财务底盘，真要拿利润去比较两家公司或算市盈率，还得把管理层的调整口径拆开，再用现金流、折旧估计和稀释股数做一轮体检。

## GAAP 与 Non-GAAP：监管护栏与常见调整指标 {#nb-e06-gaap-nongaap}

同一家公司同时报出两套利润，源于财报要兼顾两种用途。**GAAP**（美国公认会计准则）是经独立审计的统一底线，保证跨公司、跨年份按同一把尺子记账；但当非主业投资大起大落、或碰上罕见诉讼与退租减值时，GAAP 净利润常会被偶发噪声掩盖。**Non-GAAP** 则是管理层在此基础上做加减后的补充口径，用来展示其眼中的经常性盈利。

管理层既有帮读者去噪的善意，也有把利润改好看的冲动。为此，美国证监会（SEC）给 Non-GAAP 划了四条硬护栏：[^sec-nongaap-cdi]<sup>，</sup>[^sec-frm-nongaap]

1. **GAAP 同等突出**：只要出现 Non-GAAP 数字，最直接可比的 GAAP 指标必须放在同等或更醒目的位置，不能拿一整张“Non-GAAP 利润表”冒充正式主表。
2. **逐项定量调节表**（Reconciliation）：每项历史 Non-GAAP 指标都须从最接近的 GAAP 起点出发，逐笔列清加减金额与原因。
3. **禁剔常态现金费用**：维持生意正常运转的现金经营开支，即便隔一两年才冒头一次，也不能当成“异常项”抹掉。
4. **双向对称与两年红线**：不能只剔亏损却留下同期一次性收益；过去两年发生过、或未来两年合理可能再发生的项目，均不得贴上“非经常”标签。

<span data-text-versions id="nb-e06-text-sec">一般而言，SEC 护栏只管“不误导、有披露、可回溯”，并不替投资者裁定每一项加回值不值得认可——例如股权激励属于非现金薪酬，监管并不一刀切禁止加回，最终取舍只能由读者自己完成<span data-text-detail>（上述护栏源自 SEC Regulation G、Regulation S-K Item 10(e) 及 Non-GAAP Financial Measures C&DI：同等突出度对应 Item 10(e)(1)(i)(A) 与 Question 102.10(a)；定量调节表对应 Regulation G 与 Item 10(e)(1)(i)(B)；禁止剔除常态现金费用对应 Rule 100(b) 与 Question 100.01；双向对称与两年红线对应 Question 100.03 与 Item 10(e)(1)(ii)(B)。此外，Question 100.02 要求跨期口径一致，变更须说明并视重要性重述；Question 100.04 禁止改写 GAAP 确认计量原则，如将分期确认的订阅收入改为按开票确认；Question 102.11 规定调整项不可直接以税后净额打包，所得税影响须单独列行并说明依据；Question 102.05 与 102.07 明确自由现金流无统一定义，禁止列报“每股自由现金流”或“每股 EBITDA”）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

看懂监管底线后，财报和电话会里最常碰到的三类调整口径——**Adjusted EBITDA**、**Adjusted Operating Income** 与 **Adjusted EPS**——各自站在利润表的不同台阶，用途和踩坑边界一目了然：

<figure class="flow-figure e06-metrics-map" id="nb-e06-metrics-map">
<div class="ff-head"><p class="ff-title">常用盈利与调整口径流向图：从 GAAP 主干到三类 Non-GAAP 指标</p><span class="ff-sub">同一张利润表自上而下分叉 · 各指标分别对应不同比较对象与失效边界</span></div>
<div class="e06-mflow business-exchange" aria-label="常用盈利与调整口径流向图：左侧为经审计 GAAP 主干，从营业收入依次扣除营业成本与研发销售管理费用（含折旧、摊销、股权激励 SBC 及重组等）得到 GAAP 营业利润，再扣除利息、非经营损益与所得税得到 GAAP 净利润，除以加权平均稀释股数得到 GAAP 稀释 EPS；底部注明 SEC Regulation G 与 Item 10(e) 要求从最接近的 GAAP 指标出发逐项调节且同等突出列示。右侧分出三类常见调整口径：一、EBITDA 与 Adjusted EBITDA，依据 SEC C&DI Section 103 须从 GAAP 净利润加回利息、税项、折旧与摊销（再加 SBC 或重组等须改称 Adjusted EBITDA），适合高杠杆企业短期偿息倍数与不同折旧年限的粗略横向对照，但忽略资本开支、税负与现金占用，不可替代自由现金流且禁止报每股数；二、Adjusted Operating Income（调整后营业利润），从 GAAP 营业利润剔除偶发减值、并购交割费等项目，适合剥离资本结构与税率差异横向对比主业盈利能力，但须核查是否踢除了常态 SBC 或连续重组；三、Adjusted EPS（调整后每股收益），从 GAAP 归属净利润与稀释股数出发剔除非经常或非主业项目并单列税项调节，适合普通股 P/E 估值比较与跟踪业绩指引，但同时受分子调整项与分母股数口径变动影响。">
<div class="e06-spine">
<span class="e06-badge">经审计 GAAP 主干</span>
<div class="e06-steps">
<div class="e06-step"><strong>营业收入（Revenue）</strong><small>减：营业成本、研发、销售、管理（含折旧摊销与 SBC）</small></div>
<div class="e06-step"><strong>GAAP 营业利润（Operating Income）</strong><small>加减：利息收支、投资公允变动与所得税</small></div>
<div class="e06-step"><strong>GAAP 净利润 → 稀释 EPS</strong><small>归属普通股股东净利润 ÷ 稀释加权平均股数</small></div>
</div>
<div class="e06-rule-box">SEC 护栏：Non-GAAP 须与最接近 GAAP 同等突出，并从 GAAP 起点逐项调节。</div>
</div>
<div class="e06-branches">
<div class="e06-bcard e06-warn" style="--e06-c:#a8743f">
<div class="e06-bhead"><strong>EBITDA / Adjusted EBITDA</strong><span>偏偿债粗测 · 严防滥用</span></div>
<p class="e06-bformula">GAAP 净利润 ＋ 利息 ＋ 税项 ＋ 折旧摊销（若另加 SBC、重组或减值，须标为 Adjusted EBITDA）</p>
<div class="e06-bmeta"><div><b>适用场景：</b>债市契约（净债务 / EBITDA）与跨折旧政策粗看经营息税前现金缓冲。</div><div><b>失效边界：</b>无视维持性 CapEx、利息与税款；不可当自由现金流，SEC 禁止列报每股数。</div></div>
</div>
<div class="e06-bcard" style="--e06-c:#23695a">
<div class="e06-bhead"><strong>Adjusted Operating Income</strong><span>主业盈利横向对比</span></div>
<p class="e06-bformula">GAAP 营业利润 ± 偶发资产减值、并购交割费等（须逐项核查是否剔除了 SBC 与重组）</p>
<div class="e06-bmeta"><div><b>适用场景：</b>剥离资本结构与税率差异，比较同业公司核心业务经营利润率。</div><div><b>失效边界：</b>若把经常性人力成本或年年重组一并剔除，营业利润率会系统性失真。</div></div>
</div>
<div class="e06-bcard" style="--e06-c:#4a738c">
<div class="e06-bhead"><strong>Adjusted EPS（Comparable EPS）</strong><span>股权估值与 P/E 参照</span></div>
<p class="e06-bformula">（GAAP 归属净利润 ± 各项税前调节 ± 配套所得税调节）÷ 同口径稀释股数</p>
<div class="e06-bmeta"><div><b>适用场景：</b>股权估值倍数比较、跨年追踪剔除一次性波动后的每股经常性盈利。</div><div><b>失效边界：</b>分子调整尺度与分母反稀释切换可令 P/E 出现数倍落差甚至盈亏倒转。</div></div>
</div>
</div>
</div>
<figcaption>依据 SEC C&amp;DI Section 103（Question 103.01–103.02），标准 EBITDA 的起点是 GAAP 净利润而非营业利润；额外剔除其他项目的指标不得继续简称 EBITDA。</figcaption>
</figure>

三类口径里，**EBITDA** 在股权估值中尤其容易误导。债市契约拿它粗看短期偿债缓冲尚可理解，可厂房、基站和服务器都是提前掏现金买的，用旧后还得掏钱换新。Warren Buffett 在 2015 年股东信中提醒，折旧几乎总是真实现金成本，重资产行业的维持性资本开支常高于折旧，拿 EBITDA 估值只会把公司看便宜。[^buffett-2015]

## 逐项拆解 Non-GAAP 调整项：哪些该剔除，哪些不能剔除 {#nb-e06-adjustments}

面对五花八门的调节表，不必全盘照收，也没必要一概拒斥。按经济性质把常见调整项分成三类，就能迅速分清哪些在去噪、哪些在粉饰。

<span data-text-versions id="nb-e06-text-sym">**第一类**是与主业无关的偶发噪声，前提是双向对称。非主业**权益法投资净收益**（ASC 323）大起大落，或遇偶发税项与退租减值，涨跌都剔除反而看清主业。**Microsoft**（MSFT）FY26 扣回 OpenAI 权益法投资净收益，令 Non-GAAP 利润反低近 50 亿美元；[^msft-fy26] **The Coca-Cola Company**（KO）FY25 双向扣回后，可比增速也从 23% 回到 4%<span data-text-detail>（明细核对：MSFT FY26 GAAP 净利润 133,749 M 美元同比增 31%，因 OpenAI 权益法投资税后影响由 FY25 的 −3,620 M 转为 FY26 的 +4,963 M 而被垫高 9 个百分点，对称扣回后 Non-GAAP 净利润 128,786 M 美元同比增 22%，且 12,405 M 美元 SBC 全部保留在成本内。KO FY25 归属 GAAP 净利润 13,107 M 美元、稀释 EPS 3.04 美元，加回 867 M 减值与 73 M 重组的同时，对称扣回 878 M 一次性税务利好、66 M 处置净利得与 163 M 其他净收益，得可比净利润 12,958 M 美元、稀释 EPS 3.00 美元，正是《收入增长与市场预期》采用的同口径基数；SNOW FY26 退出 San Mateo 办公楼计提的 108.6 M 美元减值也属偶发项）</span>。[^ko-fy25]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

**第二类**是看用途决定的灰色项——**并购无形资产摊销**。公司溢价收购同行后，多付对价会分摊到客户关系、商标或专利上逐年摊销。Warren Buffett 给过一条实用分界：外购软件会过时重买，摊销算真成本；记账分摊的“客户关系”不会按年蒸发，看现有业务盈利能力时可暂分开看。[^buffett-2015] 但若公司靠年年并购撑增长，长期忽略摊销等于免掉了收购本钱。

**第三类**是绝不能盲目剔除的“伪一次性”项，常见雷区是**股权激励费用**（SBC）与**连续重组**。不少科技公司把 SBC 整笔加回，理由是发股票不花当期现金。可 Warren Buffett 反问：“既然叫薪酬，薪酬如果不是费用，它还能是什么？”[^buffett-2015] 用股票代发工资，只是把人力开支转嫁给老股东；看 SNOW FY26，两条路都躲不开真实代价：[^snow-fy26]

<figure class="flow-figure e06-sbc-loop" id="nb-e06-sbc-loop-fig">
<div class="ff-head"><p class="ff-title">为什么“SBC 是非现金费用”只是错觉：两条路径都躲不开真实代价</p><span class="ff-sub">以 Snowflake（SNOW）FY2026 真实 SEC 披露为例 · 单位：亿美元</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="以 Snowflake（SNOW）FY2026 为例拆解股权激励 SBC 为何不是免费的非现金项目：左侧起点为公司发给员工 16.0 亿美元股票报酬（含薪资税在 Non-GAAP 中共加回 17.1 亿美元，占总收入 36.5%）。右侧分叉为两条琥珀色路径：路径一不回购，虽未动用当期银行现金，但总股本持续扩张，SNOW 转盈口径稀释股数跳升 +10.3%（由 337.5 M 增至 372.3 M 股），最终令老股东的每股自由现金流被持续摊薄；路径二花真金白银回购对冲，SNOW 当年融资现金流流出 15.5 亿美元（含回购普通股 8.74 亿美元加员工归属税净额结算 6.73 亿美元，已超过全年 11.2 亿美元自由现金流），说明这笔支出仍是真实人力现金代价，只是从经营现金流挪到了融资现金流。">
<svg viewBox="0 0 860 280" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e06-sbc-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="280" rx="8" fill="#fafaf6"/>
  <rect x="16" y="44" width="218" height="192" rx="10" fill="#ffffff" stroke="#dfb98d" stroke-width="1.4"/>
  <rect x="30" y="58" width="190" height="24" rx="5" fill="#fdf0de"/>
  <text x="125" y="74" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8d5520">起点：所谓“非现金”薪酬</text>
  <text x="125" y="106" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d2a25">公司发给员工股票报酬</text>
  <rect x="30" y="118" width="190" height="36" rx="6" fill="#f4e5d2"/>
  <text x="125" y="142" text-anchor="middle" font-size="17" font-weight="700" fill="#8d5520">16.0 亿美元</text>
  <text x="125" y="174" text-anchor="middle" font-size="11" font-weight="600" fill="#2e3c36">SNOW FY26 股票报酬</text>
  <line x1="34" y1="186" x2="216" y2="186" stroke="#ebd7bc"/>
  <text x="125" y="205" text-anchor="middle" font-size="10.5" fill="#5d6b64">连同薪资税加回 17.1 亿美元</text>
  <text x="125" y="222" text-anchor="middle" font-size="10.5" fill="#5d6b64">占全年总收入 36.5%</text>
  <path d="M234,114 C268,114 266,74 300,74" fill="none" stroke="#a8743f" stroke-width="2.2" marker-end="url(#e06-sbc-amber)"/>
  <path d="M234,166 C268,166 266,206 300,206" fill="none" stroke="#a8743f" stroke-width="2.2" marker-end="url(#e06-sbc-amber)"/>
  <rect x="304" y="18" width="276" height="112" rx="10" fill="#ffffff" stroke="#e4c59e" stroke-width="1.3"/>
  <rect x="316" y="28" width="108" height="22" rx="5" fill="#fdf0de"/>
  <text x="370" y="43" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">路径一：不回购</text>
  <text x="568" y="43" text-anchor="end" font-size="10.5" fill="#66736c">账面看似未花现金</text>
  <text x="318" y="73" font-size="13" font-weight="700" fill="#1d2a25">总股本扩张</text>
  <text x="318" y="95" font-size="12" font-weight="700" fill="#8d5520">稀释股数跳升 +10.3%</text>
  <text x="318" y="115" font-size="10.5" fill="#5d6b64">SNOW 转盈口径：337.5 M → 372.3 M 股</text>
  <rect x="304" y="150" width="276" height="112" rx="10" fill="#fdf8f0" stroke="#dfb98d" stroke-width="1.4"/>
  <rect x="316" y="160" width="166" height="22" rx="5" fill="#f4e5d2"/>
  <text x="399" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">路径二：花真金白银回购对冲</text>
  <text x="318" y="205" font-size="13" font-weight="700" fill="#1d2a25">融资现金流流出 15.5 亿美元</text>
  <text x="318" y="227" font-size="11" font-weight="700" fill="#8d5520">回购 8.74 亿 ＋ 归属税净额结算 6.73 亿</text>
  <text x="318" y="247" font-size="10.5" fill="#5d6b64">现金流出已超过全年 11.2 亿账面 FCF</text>
  <path d="M580,74 C602,74 602,74 622,74" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#e06-sbc-amber)"/>
  <path d="M580,206 C602,206 602,206 622,206" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#e06-sbc-amber)"/>
  <rect x="626" y="18" width="218" height="112" rx="10" fill="#ffffff" stroke="#e4c59e" stroke-width="1.3"/>
  <rect x="638" y="28" width="194" height="22" rx="5" fill="#fdf0de"/>
  <text x="735" y="43" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">结果：股权份额稀释</text>
  <text x="735" y="77" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">每股自由现金流被摊薄</text>
  <text x="735" y="99" text-anchor="middle" font-size="10.5" fill="#5d6b64">利润与现金被迫分给更多新股</text>
  <text x="735" y="116" text-anchor="middle" font-size="10.5" fill="#5d6b64">老股东持股比例持续下移</text>
  <rect x="626" y="150" width="218" height="112" rx="10" fill="#ffffff" stroke="#c88d55" stroke-width="1.4"/>
  <rect x="638" y="160" width="194" height="22" rx="5" fill="#f4e5d2"/>
  <text x="735" y="175" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">结果：挪到融资端的工资</text>
  <text x="735" y="209" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">仍是真实人力现金代价</text>
  <text x="735" y="231" text-anchor="middle" font-size="10.5" fill="#5d6b64">只是从经营现金流挪到融资端</text>
  <text x="735" y="248" text-anchor="middle" font-size="10.5" fill="#5d6b64">并未替股东省下一分钱</text>
</svg>
</div>
<figcaption>SBC 不会凭空消失：不回购就摊薄每股现金流，回购对冲就把薪酬成本搬到融资现金流里支付。</figcaption>
</figure>

正因如此，核对[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)里的回购时，得先扣掉对冲 SBC 摊薄的部分。另一大雷区是**连续重组**（Restructuring）：十几年关厂一次可以单列，可 **HP Inc.**（HPQ）连剔三年重组费，年报当天又推未来三年新计划，[^hpq-fy25]<sup>，</sup>[^hpq-fy24] 说明它已是常态经营开支。把 MSFT、SNOW 与 HPQ 并排看，同一规则下的正反走向清清楚楚：

<figure class="flow-figure e06-bridge-contrast" id="nb-e06-bridge-contrast">
<div class="ff-head"><p class="ff-title">同套 Non-GAAP 规则下的两种相反走向：MSFT FY26 vs SNOW FY26</p><span class="ff-sub">单位：M 美元 · 数据来自两家公司 SEC 业绩公告与 HPQ 连续重组记录</span></div>
<div class="business-exchange" aria-label="两家公司真实 GAAP 至 Non-GAAP 调节走向对比（单位：M 美元）：左侧 Microsoft（MSFT）FY2026（截至 2026-06-30）为双向克制型样本：GAAP 净利润 133,749 M，对称向下扣回 OpenAI 权益法投资净收益 −4,963 M，得到 Non-GAAP 净利润 128,786 M（反比 GAAP 低 3.7%，稀释 EPS 由 17.95 降至 17.28 美元），且 12,405 M 股权激励费用全程保留在成本中未被剔除。右侧 Snowflake（SNOW）FY2026（截至 2026-01-31）为高 SBC 激进加回样本：归属股东 GAAP 净亏损 −1,331.6 M，加回办公退租减值 +108.6 M、并购无形资产摊销 +110.1 M、其他并购重组及少数股东净项 +6.3 M，再加回高达 +1,710.7 M 的股权激励及相关薪资税（占收入 36.5%），扣减配套所得税 −138.2 M 后翻转为 Non-GAAP 归属净利润 +465.9 M（稀释 EPS 由 −3.95 翻至 +1.25 美元）；但同年融资端回购普通股 −873.5 M 加股权归属净额结算税 −672.9 M 合计流出 1,546.4 M 现金。底部附 HP Inc.（HPQ）连续重组警示条：FY23 剔除 527 M、FY24 剔除 301 M、FY25 剔除 405 M，且新宣布 FY26—FY28 预计再发生约 650 M 重组费用。">
<div class="e06-cgrid">
<div class="e06-ccard" style="--e06-c:#23695a">
<div>
<div class="e06-chead"><strong>Microsoft（MSFT）· FY2026</strong><span class="e06-tag">双向克制 · 向下扣回</span></div>
<div class="e06-brows">
<div class="e06-brow"><span>GAAP 净利润（稀释 EPS 17.95）</span><b>133,749</b></div>
<div class="e06-brow e06-bneg"><span>扣回：OpenAI 权益法投资净收益（税后）</span><b>−4,963</b></div>
<div class="e06-brow"><span>股权激励费用 SBC（保留为费用，不剔除）</span><b>未加回（12,405）</b></div>
<div class="e06-brow e06-btot"><span>Non-GAAP 净利润（稀释 EPS 17.28）</span><b>128,786</b></div>
</div>
</div>
<p class="e06-cnote">FY25 亏损时加回 +3,620 M、FY26 盈利时对称扣回 −4,963 M；Non-GAAP 利润反比 GAAP 低 3.7%，帮投资者剥离非主业投资波动。</p>
</div>
<div class="e06-ccard" style="--e06-c:#a8743f">
<div>
<div class="e06-chead"><strong>Snowflake（SNOW）· FY2026</strong><span class="e06-tag e06-twarn">高 SBC 加回 · 扭亏为盈</span></div>
<div class="e06-brows">
<div class="e06-brow e06-bneg"><span>GAAP 归属净亏损（EPS −3.95）</span><b>−1,331.6</b></div>
<div class="e06-brow"><span>加回：办公退租减值 ＋ 无形摊销 ＋ 其他净项</span><b>+225.0</b></div>
<div class="e06-brow e06-bhi"><span>加回：股权激励及相关薪资税（占收入 36.5%）</span><b>+1,710.7</b></div>
<div class="e06-brow e06-bneg"><span>扣减：上述调节项对应所得税效应</span><b>−138.2</b></div>
<div class="e06-brow e06-btot"><span>Non-GAAP 归属净利润（EPS +1.25）</span><b>+465.9</b></div>
</div>
</div>
<p class="e06-cnote">仅靠剔除 SBC 便将巨亏洗成盈利；同年融资端回购普通股 −873.5 M ＋ 员工股权归属税 −672.9 M，已流出 1,546.4 M 现金。</p>
</div>
</div>
<div class="e06-serial">
<strong>HPQ 连续重组警示（伪一次性）</strong>
<div class="e06-spills"><span>FY23：527 M</span><span>FY24：301 M</span><span>FY25：405 M</span><span class="e06-sfuture">FY26—FY28 计划：约 650 M</span></div>
</div>
</div>
<figcaption>左侧 MSFT 展示 Non-GAAP 提升可比性的正面用法；右侧 SNOW 与底部 HPQ 分别展示 SBC 加回与连续重组如何人为抬高盈利。</figcaption>
</figure>

## 互动调节审查：亲手重算独立可比利润与市盈率落差 {#nb-e06-auditor}

读财报时养成一个习惯：把管理层的调节表当成**原材料清单**，逐行勾选自己认可的剔除项，算出**独立可比利润**再重算市盈率。下面内置了 **SNOW**、**HPQ** 与 **MSFT** 三组真实财报，你可以切换公司并逐项勾选，实时观察利润、稀释股数和市盈率的落差：

<figure class="flow-figure e06-nongaap-lab" id="nb-e06-nongaap-lab" data-e06-nongaap>
<div class="ff-head"><p class="ff-title">GAAP → Non-GAAP 互动调节审查器：逐项重算独立可比利润与 P/E</p><span class="ff-sub" data-e06-sub>Snowflake FY2026（截至 2026-01-31）· 参考价 173.06 美元（2026-02-26 收盘）</span></div>
<div class="e06-presets" hidden><button type="button" data-e06-preset="snow" aria-pressed="true">SNOW FY26 · 高 SBC 科技</button><button type="button" data-e06-preset="hpq" aria-pressed="false">HPQ FY25 · 连续重组</button><button type="button" data-e06-preset="msft" aria-pressed="false">MSFT FY26 · 双向剔除</button></div>
<div class="e06-lab-grid business-exchange" aria-label="互动 GAAP 至 Non-GAAP 调节审查器（三组真实公司预设）：一、Snowflake（SNOW）FY2026（参考价 173.06 美元）：GAAP 归属净亏损 −1,331.6 M（337.5 M 股，EPS −3.95 美元，P/E 亏损）；管理层 Non-GAAP 归属净利润 +465.9 M（372.3 M 稀释股，EPS 1.25 美元，P/E 138.3 倍）。调节项含办公退租减值 +108.6 M、并购债务重组净项 +6.3 M、并购无形资产摊销 +110.1 M 与股权激励 SBC +1,710.7 M（全选配套所得税 −138.2 M）。默认仅认可前两项偶发项、拒绝 SBC 与无形摊销时，独立可比利润仍为 −1,224.7 M（EPS −3.63 美元，深度亏损），比管理层口径低 1,690.6 M。二、HP Inc.（HPQ）FY2025（参考价 23.98 美元）：GAAP 净利润 2,529 M（953 M 股，EPS 2.65 美元，P/E 9.0 倍），管理层 Non-GAAP 2,972 M（EPS 3.12 美元，P/E 7.7 倍）；若认可偶发并购诉讼与一次性税项正常化及无形摊销、但拒绝连续三年发生的 405 M 重组费，独立可比利润降至 2,631.8 M（EPS 2.76 美元），P/E 由 7.7 倍升至 8.7 倍。三、Microsoft（MSFT）FY2026（参考价 451.10 美元）：GAAP 净利润 133,749 M（7,453 M 股，EPS 17.95 美元，P/E 25.1 倍），对称扣回 OpenAI 权益法投资净收益 −4,963 M 得 Non-GAAP 128,786 M（EPS 17.28 美元，P/E 26.1 倍）；另有反向模拟项演示若效仿同行加回 12,405 M 股权激励（税后约 +9,999 M），P/E 会被人为压低至 24.2 倍。">
<div class="e06-checklist">
<div class="e06-clhead"><strong>逐项审查：勾选你认可剔除的项目</strong><span>单位：M 美元</span></div>
<div class="e06-items" data-e06-items>
<label class="e06-item e06-checked"><input type="checkbox" checked disabled><span><span class="e06-iname">办公场所退租资产减值<span class="e06-ibadge">一次性</span></span><span class="e06-idesc">San Mateo 办公楼退租一次性减值净额</span></span><span class="e06-ival">+108.6 M</span></label>
<label class="e06-item e06-checked"><input type="checkbox" checked disabled><span><span class="e06-iname">并购费、债务发行摊销及重组冲回净额<span class="e06-ibadge">偶发净项</span></span><span class="e06-idesc">并购与债务摊销 +16.5、子公司重组冲回 −12.7、少数股东 +2.5</span></span><span class="e06-ival">+6.3 M</span></label>
<label class="e06-item"><input type="checkbox" disabled><span><span class="e06-iname">并购无形资产摊销<span class="e06-ibadge e06-bmid">视用途</span></span><span class="e06-idesc">收购记账形成的可辨认无形资产摊销</span></span><span class="e06-ival">+110.1 M</span></label>
<label class="e06-item e06-item-warn"><input type="checkbox" disabled><span><span class="e06-iname">股权激励及相关薪资税（SBC）<span class="e06-ibadge e06-bwarn">警惕 · 常态薪酬</span></span><span class="e06-idesc">含 1,599.5 M 股权激励费与 69.6 M 雇主薪资税，占收入 36.5%</span></span><span class="e06-ival">+1,710.7 M</span></label>
</div>
<div class="e06-taxline"><span data-e06-tax-label>配套所得税调节（按公司综合税负比例 7.15% 随已勾选税前项联动）</span><b data-e06-tax-val>−8.0 M</b></div>
</div>
<div class="e06-kpis">
<div class="e06-kpi">
<div class="e06-kpi-top"><span>GAAP 报表口径</span><span class="e06-kpi-pe" data-e06-v="gaap-pe">P/E 亏损（不适用）</span></div>
<div class="e06-kpi-main"><strong data-e06-v="gaap-profit">−1,331.6 M</strong><small data-e06-v="gaap-eps">EPS −3.95 美元 · 337.5 M 股</small></div>
</div>
<div class="e06-kpi">
<div class="e06-kpi-top"><span>管理层 Non-GAAP</span><span class="e06-kpi-pe" data-e06-v="mgmt-pe">P/E 138.3 倍</span></div>
<div class="e06-kpi-main"><strong data-e06-v="mgmt-profit">+465.9 M</strong><small data-e06-v="mgmt-eps">EPS 1.25 美元 · 372.3 M 股</small></div>
</div>
<div class="e06-kpi e06-kpi-user e06-kpi-loss" data-e06-user-card>
<div class="e06-kpi-top"><span>你的独立可比利润</span><span class="e06-kpi-pe" data-e06-v="user-pe">P/E 亏损（不适用）</span></div>
<div class="e06-kpi-main"><strong data-e06-v="user-profit">−1,224.7 M</strong><small data-e06-v="user-eps">EPS −3.63 美元 · 337.5 M 股</small></div>
</div>
<div class="e06-gapbar" data-e06-gap>口径落差：独立利润比管理层低 1,690.6 M，由 138.3 倍 P/E 直接转为亏损。</div>
</div>
</div>
<p class="e06-note" data-e06-note>拒绝剔除 1,710.7 M 股权激励后，SNOW 独立可比利润仍为 −1,224.7 M 美元（深度亏损），与管理层 Non-GAAP 的 +465.9 M（138.3 倍 P/E）形成根本反差。</p>
<figcaption>三家公司参考价均取各自财报发布后次一交易日收盘价；全部勾选实际调节项时精确还原至管理层披露的 Non-GAAP 归属净利润与稀释 EPS。</figcaption>
</figure>

在三组预设之间切一遍，结论就很直观：跨公司比较市盈率前，必须先把各家的盈利口径拉回同一条起跑线。拿 MSFT 不剔除 SBC 的 26.1 倍 P/E，去和一家踢掉三成以上收入占比 SBC 的软件公司比倍数，等于拿两把刻度不同的秤称体重。

## 会计估计、现金印证与股数口径：盈利质量的三道体检 {#nb-e06-quality}

就算绕开所有 Non-GAAP 包装、只看经过审计的 **GAAP 利润**，两家净利润完全相同的公司，盈利含金量仍可能差很远。筛出账面水分，通常要做三道体检。

**第一道体检**看**经营现金流／净利润**与**应计项比例**。权责发生制下的利润由“已落袋的现金”和“靠赊销、备货或账面估计撑起的应计项”组成，常用两把尺子交叉印证：

\[
\text{现金含金量}=\frac{\text{经营现金流（CFO）}}{\text{净利润}},\qquad
\text{应计项比例}=\frac{\text{净利润}-\text{经营现金流（CFO）}}{\text{期初期末平均总资产}}.
\]

**Richard G. Sloan** 在 1996 年检验了三十年间四万余个美股公司年度样本后发现，靠应收账款激增、存货积压或费用资本化撑起的“高应计盈利”，次年持续性明显弱于有现金流托底的盈利；市场常常只盯利润数字，导致高应计公司随后一年普遍跑输。[^sloan-1996]

不过，这一比值切忌机械照套，双向背离都得顺着现金流量表查明原因。CFO 远低于净利，有时只因偶发大额付款，例如 KO FY25 付清一次性 fairlife 尾款，还原后便回到 1 倍以上；[^ko-fy25] CFO 远高于净利，则要分清是 MSFT 式折旧与预收款支撑（仍须对照[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)查资本开支），还是 SNOW 式被巨额 SBC 加回撑胖的假象。[^msft-fy26]<sup>，</sup>[^snow-fy26]

**第二道体检**查**会计估计变动**。一台数据中心服务器到底能用 4 年、5.5 年还是 6 年，并没有固定物理标准，全凭管理层估计。近年来算力开支大增，**Meta Platforms**（META）与 **Alphabet**（GOOGL）等云巨头陆续拉长了服务器折旧年限：[^meta-10k-25]<sup>，</sup>[^googl-10k-23] 账面折旧一降，当期 GAAP 利润立刻变厚，可公司银行账户并没有多进一分钱。

<figure class="flow-figure e06-dep-illusion" id="nb-e06-dep-illusion-fig">
<div class="ff-head"><p class="ff-title">延长服务器折旧年限：账面利润瞬间增厚，真实现金一分未变</p><span class="ff-sub">以 Meta Platforms（META）FY25 与 Alphabet（GOOGL）FY23 Form 10-K 附注为例</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="服务器折旧年限延长对利润表与现金流量表的双向效应对比：左侧为会计估计变更（ASC 250），云厂商将服务器折旧年限从 4 年拉长至 5.5 年或 6 年，按未来适用法仅把剩余账面净值摊到更长年份、不重述上年数字。上方琥珀色路径指向利润表：折旧费用下降令 GAAP 净利润上升约 4.1% 至 4.3%，其中 META FY25 将大多数服务器和网络资产延至 5.5 年，当年折旧减少 29.2 亿美元、GAAP 净利润增加 25.9 亿美元（占全年净利 4.3%，稀释 EPS 增加 1.00 美元）；GOOGL FY23 将服务器由 4 年延至 6 年，当年折旧减少 39.0 亿美元、GAAP 净利润增加 30.0 亿美元（占全年净利 4.1%，稀释 EPS 增加 0.24 美元）。下方青绿色路径指向现金流量表：CFO 与 FCF 变动均为 0，一分钱真现金也没多出来，因为折旧在经营现金流里被完整加回，买设备的资本开支早已付出，且税务折旧按税法独立申报。">
<svg viewBox="0 0 860 265" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e06-dep-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
    <marker id="e06-dep-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="265" rx="8" fill="#fafaf6"/>
  <rect x="16" y="42" width="214" height="181" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.3"/>
  <rect x="30" y="55" width="186" height="23" rx="5" fill="#f2f2e8"/>
  <text x="123" y="71" text-anchor="middle" font-size="11" font-weight="700" fill="#2e3c36">会计估计变更（ASC 250）</text>
  <text x="123" y="104" text-anchor="middle" font-size="15" font-weight="700" fill="#1d2a25">改折旧年限</text>
  <rect x="36" y="116" width="174" height="32" rx="6" fill="#fdf0de"/>
  <text x="123" y="137" text-anchor="middle" font-size="13" font-weight="700" fill="#8d5520">服务器 4 年 → 6 年</text>
  <text x="123" y="170" text-anchor="middle" font-size="10.5" fill="#5d6b64">未来适用法：剩余账面净值</text>
  <text x="123" y="187" text-anchor="middle" font-size="10.5" fill="#5d6b64">分摊拉长，不重述上年数字</text>
  <text x="123" y="208" text-anchor="middle" font-size="10.5" font-weight="600" fill="#8d5520">硬件真实损耗速度并未变慢</text>
  <path d="M230,108 C268,108 266,77 304,77" fill="none" stroke="#a8743f" stroke-width="2.2" marker-end="url(#e06-dep-amber)"/>
  <rect x="240" y="82" width="54" height="20" rx="4" fill="#fafaf6"/>
  <text x="267" y="96" text-anchor="middle" font-size="10" font-weight="700" fill="#8d5520">账面效应</text>
  <path d="M230,156 C268,156 266,199 304,199" fill="none" stroke="#23695a" stroke-width="2.2" marker-end="url(#e06-dep-sage)"/>
  <rect x="240" y="167" width="54" height="20" rx="4" fill="#fafaf6"/>
  <text x="267" y="181" text-anchor="middle" font-size="10" font-weight="700" fill="#1f5c4e">现金效应</text>
  <rect x="308" y="16" width="536" height="122" rx="10" fill="#fdf8f0" stroke="#dfb98d" stroke-width="1.4"/>
  <rect x="320" y="26" width="512" height="28" rx="6" fill="#f4e5d2"/>
  <text x="332" y="45" font-size="13" font-weight="700" fill="#8d5520">利润表：折旧 ↓ → GAAP 净利润 ↑（+4.1%–4.3%）</text>
  <text x="820" y="45" text-anchor="end" font-size="11" font-weight="700" fill="#8d5520">首年同比增速被垫高</text>
  <rect x="320" y="62" width="250" height="64" rx="7" fill="#ffffff" stroke="#e4c59e" stroke-width="1"/>
  <text x="331" y="81" font-size="11.5" font-weight="700" fill="#1d2a25">META FY25（延至 5.5 年）</text>
  <text x="331" y="100" font-size="12" font-weight="700" fill="#8d5520">增厚 GAAP 净利 +25.9 亿美元</text>
  <text x="331" y="117" font-size="10" fill="#5d6b64">折旧 −29.2 亿 · 占净利 4.3% · EPS +1.00</text>
  <rect x="582" y="62" width="250" height="64" rx="7" fill="#ffffff" stroke="#e4c59e" stroke-width="1"/>
  <text x="593" y="81" font-size="11.5" font-weight="700" fill="#1d2a25">GOOGL FY23（4 年 → 6 年）</text>
  <text x="593" y="100" font-size="12" font-weight="700" fill="#8d5520">增厚 GAAP 净利 +30.0 亿美元</text>
  <text x="593" y="117" font-size="10" fill="#5d6b64">折旧 −39.0 亿 · 占净利 4.1% · EPS +0.24</text>
  <rect x="308" y="150" width="536" height="99" rx="10" fill="#f2f8f4" stroke="#b3d3c4" stroke-width="1.4"/>
  <rect x="320" y="160" width="512" height="28" rx="6" fill="#e2ede7"/>
  <text x="332" y="179" font-size="13" font-weight="700" fill="#1f5c4e">现金流量表：CFO 与 FCF 变动 ＝ 0</text>
  <text x="820" y="179" text-anchor="end" font-size="11.5" font-weight="700" fill="#1f5c4e">一分钱真现金也没多出来</text>
  <text x="324" y="209" font-size="11.5" fill="#2e3c36">• 经营现金流把折旧完整加回：折旧变少、净利变多，一加一减完全抵消</text>
  <text x="324" y="232" font-size="11.5" fill="#5d6b64">• 买设备的 CapEx 早已付出，税务折旧按税法独立申报，实付税款与 FCF 均不变</text>
</svg>
</div>
<figcaption>延长折旧年限只改变利润表的费用分摊节奏，不会增加一美元真实经营现金流或自由现金流。</figcaption>
</figure>

读到这类附注时，要穿透首年被垫高的同比增速，追问背后的经营现实：机房里的通用服务器与 AI 芯片在软件调度优化后，经济寿命到底真的拉长到了 5.5 至 6 年，还是随着芯片换代提速，几年后反而会集中爆发提前报废与减值？

**第三道体检**核对**基本股数与稀释股数**（Basic vs Diluted）。盈利质量不只看分子，分母变动同样决定每一股能分到多少利润。基本股数只算已发行普通股，稀释股数还会计入尚未归属的 RSU、价内期权和可转债等潜在新股。

<span data-text-versions id="nb-e06-text-estimate">常被忽略的陷阱叫**反稀释规则**（Anti-dilution）：公司在 GAAP 亏损时，把潜在新股放进分母反而会把每股亏损除小，因此准则规定亏损期一律跳过潜在稀释股份。结果一朝转盈，这些潜伏股份会瞬间涌进分母——SNOW FY26 的股数就在转盈口径下猛跳 **10.3%**，而成熟巨头 MSFT 的基本与稀释股数几乎重合<span data-text-detail>（实务中还有三项会计细则直接影响可比性：一、依 ASC 250，折旧年限调整属于“会计估计变更”，只用未来适用法把剩余账面净值摊到拉长后的剩余年限，不追溯重述上年，因此变更首年的同比增速会被垫高；二、税务折旧按税法加速折旧表独立申报，账面延寿不改变当期实付现金税，只改变递延所得税负债；三、稀释股数计算中，期权与 RSU 通常按库存股法 Treasury Stock Method 扣减行权款可购回股数，可转债采用假设转换法 If-Converted Method，同时在分子加回税后债息并在分母加上全部可转股份。股数实证：SNOW FY26 亏损期反稀释锁在 337.5 M 股，转入 Non-GAAP 盈利后计入 23.7 M 股员工股权激励与 14.6 M 股可转债潜在转股、扣减 3.5 M 股看涨期权上限对冲 Capped Calls，跳升至 372.3 M 股，将 EPS 从 1.38 美元压低至 1.25 美元；MSFT FY26 基本股数 7,429 M 对稀释股数 7,453 M，差幅仅 0.3%）</span>。[^snow-fy26]<sup>，</sup>[^msft-fy26]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure e06-quality-panel" id="nb-e06-quality-panel">
<div class="ff-head"><p class="ff-title">GAAP 盈利质量的三道体检：现金印证、折旧估计与分母稀释</p><span class="ff-sub">均取自 SEC 官方 10-K / 业绩原件 · 同为审计后数字仍须拆解来源</span></div>
<div class="e06-qgrid business-exchange" aria-label="GAAP 盈利质量三道体检对照图：第一栏现金印证（CFO 除以净利润）：MSFT FY26 为 1.37 倍（应计项比例 −7.1%，主由折旧与预收款支撑，再核 1,159 亿美元 CapEx）；KO FY25 报表口径为 0.56 倍，还原 6,069 M 一次性 fairlife 尾款后回升至 1.03 倍；SNOW FY26 账面净亏损 −1,329.0 M 但 CFO 达 +1,221.9 M，因加回了 1,599.5 M 非现金 SBC，且同期融资端回购与股权税流出 1,546.4 M。第二栏服务器折旧延寿（利润变厚、现金不变）：META FY25 将大多数服务器与网络资产延至 5.5 年，当年折旧减少 29.2 亿美元、净利润增加 25.9 亿美元（稀释 EPS +1.00 美元），经营现金流增加 0；GOOGL FY23 将服务器由 4 年延至 6 年，当年折旧减少 39.0 亿美元、净利润增加 30.0 亿美元（稀释 EPS +0.24 美元），经营现金流增加 0。第三栏基本与稀释股数（分母陷阱）：MSFT FY26 基本 7,429 M 与稀释 7,453 M 仅差 +0.3%（EPS 18.00 对 17.95）；SNOW FY26 亏损时反稀释锁在 337.5 M，Non-GAAP 转盈后稀释股数跳升至 372.3 M（+10.3%），令 EPS 由 1.38 压低至 1.25 美元。">
<div class="e06-qcard" style="--e06-c:#23695a">
<div>
<div class="e06-qhead"><strong>① 现金印证（CFO / 净利润）</strong><small>核对账面盈利有无现金流支撑</small></div>
<div class="e06-qlist">
<div class="e06-qitem"><div class="e06-qtop"><strong>MSFT FY26</strong><b>1.37 倍</b></div>应计项比例 −7.1%；仍须对照 1,159 亿美元 CapEx。</div>
<div class="e06-qitem"><div class="e06-qtop"><strong>KO FY25</strong><b>0.56 → 1.03 倍</b></div>报表低值因付清 60.69 亿 fairlife 尾款，还原后正常。</div>
<div class="e06-qitem"><div class="e06-qtop"><strong>SNOW FY26</strong><b class="e06-qwarn">亏 13.3 亿 / CFO +12.2 亿</b></div>靠 +16.0 亿 SBC 加回撑高，融资端回购与税流出 15.5 亿。</div>
</div>
</div>
<p class="e06-qfoot">既查“CFO 远低于净利”的回款隐忧，也查“SBC 加回虚胖 CFO”的假象。</p>
</div>
<div class="e06-qcard" style="--e06-c:#a8743f">
<div>
<div class="e06-qhead"><strong>② 服务器折旧延寿（估计变动）</strong><small>账面利润瞬间增厚 · 现金流 +0</small></div>
<div class="e06-qlist">
<div class="e06-qitem"><div class="e06-qtop"><strong>META FY25（延至 5.5 年）</strong><b class="e06-qwarn">净利 +25.9 亿</b></div>折旧减少 29.2 亿美元，占全年净利 4.3%（EPS +1.00 美元）。</div>
<div class="e06-qitem"><div class="e06-qtop"><strong>GOOGL FY23（4 → 6 年）</strong><b class="e06-qwarn">净利 +30.0 亿</b></div>折旧减少 39.0 亿美元，占全年净利 4.1%（EPS +0.24 美元）。</div>
</div>
</div>
<p class="e06-qfoot">采用未来适用法不重述历史期，延寿首年同比利润增速会被自然垫高。</p>
</div>
<div class="e06-qcard" style="--e06-c:#4a738c">
<div>
<div class="e06-qhead"><strong>③ 基本股数 vs 稀释股数</strong><small>提防亏损期反稀释遮蔽真实分母</small></div>
<div class="e06-qlist">
<div class="e06-qitem"><div class="e06-qtop"><strong>MSFT FY26</strong><b>7,429 → 7,453 M</b></div>稀释增幅仅 +0.3%，Basic EPS 18.00 与 Diluted 17.95 几乎重合。</div>
<div class="e06-qitem"><div class="e06-qtop"><strong>SNOW FY26</strong><b class="e06-qwarn">337.5 → 372.3 M</b></div>转盈触发 34.8 M 净稀释股（+10.3%），Non-GAAP EPS 1.38 → 1.25。</div>
</div>
</div>
<p class="e06-qfoot">估值与跨年比较时统一看稀释口径，并核对期权、RSU 与可转债余额。</p>
</div>
</div>
<figcaption>三道体检把分子（调节项与折旧估计）、现金流（CFO 与回购对冲）和分母（潜在稀释股数）合在一起验证。</figcaption>
</figure>

把利润分子、现金印证、折旧估计和股数分母校准到同一把尺子后，财报里的盈利才真正可比。接下来要追问的是：公司赚回来的真现金流向了再投资、并购、还债还是回购，管理层激励又怎样塑造这些取舍——下一篇[《资本配置、激励与每股结果》](/zh/notebook/capital-allocation-incentives-per-share/)继续展开。

<script src="/notebook/earnings-quality/ui.js?v=20261127b" defer></script>

[^snow-fy26]: Snowflake Inc.，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm)（2026-02-25）与 [FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm)，截至 2026-01-31 的利润表、现金流量表、GAAP—Non-GAAP 调节表及稀释股数明细。
[^market-closes]: 财报后次一交易日收盘参考价：SNOW 2026-02-26 收盘 173.06 美元、HPQ 2025-11-26 收盘 23.98 美元，以及 MSFT 2026-07-30 收盘 451.10 美元（与《亏损、波动与持有能力》一致），见 [Yahoo Finance 历史行情](https://finance.yahoo.com/quote/SNOW/history/)。
[^sec-nongaap-cdi]: U.S. Securities and Exchange Commission，[Non-GAAP Financial Measures — Compliance and Disclosure Interpretations（C&DI）](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，最近更新 2022-12-13，涵盖 Question 100.01–100.04、102.03、102.05、102.07、102.10–102.11 与 103.01–103.02。
[^sec-frm-nongaap]: U.S. Securities and Exchange Commission，[Financial Reporting Manual Topic 8（Section 8130：Regulation G 与 Regulation S-K Item 10(e)）](https://www.sec.gov/about/divisions-offices/division-corporation-finance/financial-reporting-manual/frm-topic-8)，2026-11-27 查阅。
[^buffett-2015]: Warren Buffett，[Berkshire Hathaway Inc. 2015 Shareholder Letter](https://www.berkshirehathaway.com/letters/2015ltr.pdf)，2016-02-27，关于收购无形资产摊销、股权激励费用（Stock-based compensation）与折旧／EBITDA 的原文论述。
[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的 OpenAI 权益法投资影响 Non-GAAP 调节表、SBC 费用、CFO 及基本／稀释股数原件。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)，2026-02-10，截至 2025-12-31 的 GAAP 与 Comparable（Non-GAAP）利润及 EPS 调节表与 fairlife 尾款说明。
[^hpq-fy25]: HP Inc.，[FY2025 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/47217/000004721725000068/hp103125exhibit991q425.htm)，2025-11-25，截至 2025-10-31 的 GAAP—Non-GAAP 调节表与 Fiscal 2026 Plan（预计 650 M 美元重组费）披露。
[^hpq-fy24]: HP Inc.，[FY2024 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/47217/000004721724000075/hp103124exhibit991q424.htm)，2024-11-26，核对 FY2023 重组及其他费用 527 M 与 FY2024 301 M 美元。
[^sloan-1996]: Richard G. Sloan，[Do Stock Prices Fully Reflect Information in Accruals and Cash Flows About Future Earnings?](https://publications.aaahq.org/accounting-review/issue/71/3)，*The Accounting Review*，Vol. 71, No. 3（1996 年 7 月），pp. 289–315。
[^meta-10k-25]: Meta Platforms, Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm)，截至 2025-12-31，Note 1（Use of Estimates）关于服务器与网络资产延至 5.5 年减少折旧 2.92 B、增加净利润 2.59 B 美元（稀释 EPS +1.00 美元）的披露。
[^googl-10k-23]: Alphabet Inc.，[FY2023 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204424000022/goog-20231231.htm)，2024-01-31 提交，Note 1（Use of Estimates）关于服务器折旧由 4 年延至 6 年减少折旧 3.9 B、增加净利润 3.0 B 美元（每股 +0.24 美元）的披露。


## Sources
- [The Coca-Cola Company：FY2025 全年业绩与 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm): Coca-Cola 2025 财年（截至 2025 年 12 月 31 日，Form 10-K 于 2026 年 2 月 20 日提交）三张主表：净营业收入 47,941 M 美元、营业利润 13,762 M 美元、合并净利润 13,137 M 美元（归属股东 13,107）；因支付 6,069 M 美元 fairlife 或有对价尾款，GAAP 经营现金流为 7,408 M 美元，资本开支 −2,112 M 美元，现金股息 −8,779 M 美元；期末总资产 104,816、总负债 70,541、总权益 34,275。
- [Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm): Microsoft 2026 年 7 月 29 日披露之 2026 财年（截至 2026 年 6 月 30 日）三张主表：总收入 331,839 M 美元、营业利润 155,237 M 美元、净利润 133,749 M 美元；经营现金流 182,935 M 美元、固定资产资本开支 −115,948 M 美元、投资现金流 −139,500 M 美元、融资现金流 −52,546 M 美元；期末总资产 758,376 M 美元（固定资产净值 313,076、现金及等价物 20,935）、总负债 315,989、股东权益 442,387。
- [Warren Buffett：Berkshire Hathaway 2015 Shareholder Letter](https://www.berkshirehathaway.com/letters/2015ltr.pdf): Warren Buffett 2015 年致股东信（2016-02-27 发布）关于无形资产摊销、股权激励费用与折旧 / EBITDA 的讨论：区分收购记账形成的客户关系摊销与软件等真实耗损摊销，反驳将股权激励（Stock-based compensation）剔除出盈利的做法，并警示折旧通常是真实经济成本、不可用 EBITDA 作为重资产估值替代。
- [Alphabet Inc.：FY2023 Form 10-K（截至 2023-12-31）](https://www.sec.gov/Archives/edgar/data/1652044/000165204424000022/goog-20231231.htm): Alphabet 2023 财年年报（2024-01-31 提交）Note 1（Use of Estimates）与主表：自 2023 财年起将服务器预计使用年限由 4 年延至 6 年、部分网络设备由 5 年延至 6 年，2023 全年因此减少 GAAP 折旧费用 3.9 B 美元，增加 GAAP 净利润 3.0 B 美元或每股基本及稀释收益 0.24 美元；全年营业利润 84,293 M、净利润 73,795 M、经营现金流 101,746 M 美元。
- [HP Inc.：FY2025 与 FY2024 全财年业绩公告（EX-99.1，截至 2025-10-31）](https://www.sec.gov/Archives/edgar/data/47217/000004721725000068/hp103125exhibit991q425.htm): HP Inc. 2025 年 11 月 25 日披露 FY2025 业绩公告（并对照 2024-11-26 披露之 FY2024 业绩公告）：FY25 GAAP 净利润 2,529 M 美元（稀释 EPS 2.65 美元，稀释股数 953 M），Non-GAAP 净利润 2,972 M 美元（稀释 EPS 3.12 美元）；调节项含重组及其他费用 +405 M、并购无形资产摊销 +345 M、特定专利诉讼 +88 M、并购处置费 +45 M、非经营退休金贷项 −13 M 及税务调节 −427 M（Non-GAAP 有效税率 16.0%）。FY23、FY24、FY25 连续三年剔除重组及其他费用分别为 527 M、301 M、405 M 美元，且同日宣布 FY26—FY28 新转型计划，预计再发生约 650 M 美元重组费用（FY26 约 250 M）。
- [SNOW、HPQ 与 MSFT 财报次日收盘参考价（2025—2026）](https://finance.yahoo.com/quote/SNOW/history/): 用于交互调节表市盈率落差对照的真实财报后次交易日收盘价：SNOW 2026-02-26 收盘 173.06 美元（FY26 年报 2026-02-25 盘后发布）；HPQ 2025-11-26 收盘 23.98 美元（FY25 年报 2025-11-25 盘后发布）；MSFT 2026-07-30 收盘 451.10 美元（FY26 年报 2026-07-29 盘后发布，沿用 NB-A03 核对收盘价）。
- [Meta Platforms, Inc.：FY2025 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm): Meta Platforms 2025 财年年报 Note 1（Summary of Significant Accounting Policies — Use of Estimates）与主表：自 2025 年 1 月 1 日起将大多数服务器与网络资产预计使用年限延长至 5.5 年，2025 全年因此减少 GAAP 折旧费用 2.92 B 美元，增加 GAAP 净利润 2.59 B 美元或每股稀释收益 1.00 美元；全年收入 200,966 M、营业利润 83,276 M、净利润 60,458 M（稀释 EPS 23.49 美元）、经营现金流 115,800 M 美元。
- [SEC Financial Reporting Manual Topic 8：Regulation G 与 Regulation S-K Item 10(e)](https://www.sec.gov/about/divisions-offices/division-corporation-finance/financial-reporting-manual/frm-topic-8): SEC 财务报告手册第 8 章（依据 Final Rule 33-8176）：对照列出 Regulation G（适用于全部公开披露，要求最接近 GAAP 对照、定量调节表与反误导条款 Rule 100(b)）与 Regulation S-K Item 10(e)（适用于 10-K / 10-Q / 8-K 等申报材料，要求 GAAP 同等或更高突出度、禁止将过去或未来两年可能重复发生的项目标为非经常性、禁止在 GAAP 主表或附注表内混列 Non-GAAP 指标）。
- [SEC：Non-GAAP Financial Measures — Compliance & Disclosure Interpretations（C&DI）](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures): 美国证监会公司金融部非 GAAP 财务指标官方合规与披露解释（最近更新 2022-12-13）：涵盖 Question 100.01（禁止剔除维持业务必需的正常、经常性现金经营费用，不规律间隔发生仍视作经常性）、100.02（跨期一致）、100.03（禁止只剔除费用不剔除收益）、100.04（禁止量身定制的确认与计量口径）、102.03（两年红线）、102.05 / 102.07（禁止每股流动性与每股自由现金流指标）、102.10(a)–(c)（同等或更高突出度与禁止完整 Non-GAAP 利润表）、102.11（税项须单列）及 103.01 / 103.02（EBIT / EBITDA 定义与须调节至 GAAP 净利润）。
- [Richard G. Sloan（1996）：Do Stock Prices Fully Reflect Information in Accruals and Cash Flows About Future Earnings?](https://publications.aaahq.org/accounting-review/issue/71/3): 发表于 The Accounting Review（Vol. 71, No. 3, pp. 289–315）：以 1962—1991 年 40,679 个美股公司年度样本检验盈利拆解后的现金流成分与应计项成分，发现应计项驱动的盈利持续性显著低于现金流驱动的盈利，而股票市场常过度锚定账面盈利导致高应计公司次年回报落后。
- [Snowflake Inc.：FY2026 Q4 及全财年业绩公告（EX-99.1）与 Form 10-K（截至 2026-01-31）](https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm): Snowflake 2026 财年（截至 2026-01-31，2026-02-25 披露 EX-99.1，同期提交 Form 10-K）报表与 GAAP—Non-GAAP 调节表：总收入 4,683.9 M 美元，GAAP 营业亏损 −1,435.2 M、归属股东 GAAP 净亏损 −1,331.6 M（稀释 EPS −3.95 美元，反稀释加权股数 337.5 M）；加回股权激励及相关薪资税 +1,710.7 M（含 1,599.5 M SBC 与约 69.6 M 雇主薪资税）、并购无形资产摊销 +110.1 M、San Mateo 办公退租减值 +108.6 M、并购与债务发行成本等净额 +6.3 M 及扣除所得税效应 −138.2 M 后，Non-GAAP 营业利润 +489.7 M、归属股东 Non-GAAP 净利润 +465.9 M（稀释股数升至 372.3 M，稀释 EPS 1.25 美元）；经营现金流 +1,221.9 M、非 GAAP 自由现金流 +1,120.3 M，但融资现金流项下回购普通股 −873.5 M 与员工股权归属代缴净额结算税 −672.9 M 合计流出 1,546.4 M 美元。

## Content relations
```json
[
  {
    "from": "zh-earnings-quality-comparability",
    "relation": "part_of",
    "to": "topic-E",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [三张财报与经营活动](https://ou-liu-red-sugar.github.io/zh/notebook/three-financial-statements/)
- [利润、资本开支与现金](https://ou-liu-red-sugar.github.io/zh/notebook/profit-capex-cash/)
- [债务、融资与现金低谷](https://ou-liu-red-sugar.github.io/zh/notebook/debt-financing-cash-troughs/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
- [资本配置、激励与每股结果](https://ou-liu-red-sugar.github.io/zh/notebook/capital-allocation-incentives-per-share/)
