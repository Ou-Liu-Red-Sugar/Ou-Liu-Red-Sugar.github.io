# 利润、资本开支与现金

拆解资本化与费用化的会计分叉、折旧摊销的投产时滞，系统界定 EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）的计算桥、适用场景与失真陷阱；借互动推演器与 KO、T、MSFT、TSMC 四家公司真实 SEC 披露，把账面利润与可分配现金的落差讲透。

Entry: zh-profit-capex-cash | Node: NB-E03 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E03《利润、资本开支与现金》，承接 NB-E01 的三表勾稽与 NB-E02 的营运资本错期，专门讲透资本开支（CapEx）、折旧摊销（D&A）、EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）。全篇分四节：一、资本化与费用化分叉及投产时滞：解释买设备建厂房为何当天从投资现金流全额流出、再经 D&A 分多年进入利润表，引用 Warren Buffett 2003 年股东大会将折旧比作 reverse float 的原话，区分扩张期（CapEx >> D&A）、稳态期（CapEx ≈ D&A）与收缩期，并用 MSFT FY24–FY26（CapEx 445 → 646 → 1,159 亿美元 vs 固定资产折旧 152 → 220 → 343 亿美元，另余 267 亿未付采购与 346 亿建设承诺）和 TSMC FY25 20-F（CapEx 12,724 亿新台币、期末在建及安装中设备 15,190 亿新台币占自用固定资产净值 41.2%、投用前不提折旧、投用后机台 5 年直线折旧）实证投产时滞。二、EBIT、EBITDA、Owner Earnings 与 FCF 的精确定义、计算桥、适用场景与失真陷阱：用四把尺子总图对照各自用途，详述 Warren Buffett 2000 年股东信“tooth fairy”原话与 FlightSafety 2.72 亿美元模拟器案例、Charlie Munger 2003 年股东大会“bullshit earnings”原话，以及 Warren Buffett 1986 年股东信附录 Owner Earnings 定义；在详细版补充 Operating Income vs 广义 EBIT、US GAAP vs IFRS 利息归类差异与 FCFF/FCFE 区别。三、维持性投入 vs 扩张性投入与互动推演器（nb-e03-capex-lab）：提供估算维持性 CapEx 的四条实操线索，并通过单屏互动推演器（3 预设：轻资产 KO 型、重资产 AI 扩产 MSFT/TSM 型、高折旧存量更新电信/航空型 + 折旧占比 / CapEx/D&A / 扩张占比滑块）动态呈现 EBITDA = 100 之下四把尺子的背离乃至 FCF 转负。四、真实 SEC 财报对照：并排对照 KO FY25（轻资产，正常化 FCF/EBITDA 76.7%）、AT&T（T）FY25（高折旧存量更新，EBITDA 利润率 35.9% 高于 KO 但 CapEx/D&A = 1.00×、FCF/EBITDA 仅 43.2%，另付 11.81 亿供应商融资）与 MSFT FY26（AI 扩产期，CapEx/D&A = 3.01×、FCF/EBITDA 仅 34.6%），再结合 TSMC FY25（EBITDA 利润率 68.9%、FCF/EBITDA 38.2%）揭示同一低 FCF/EBITDA 比值背后“存量维护消耗”与“前瞻扩产投入”的经济含义差异，并衔接 NB-E04、NB-E05 与 NB-E06。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-e03-buffett-1986",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.berkshirehathaway.com/letters/1986.html"
      },
      "required_unit": {
        "locator": "Appendix《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》。",
        "scope": "核对 Owner Earnings 的原始三项公式及只加回 D&A 不扣维持性资本开支的谬误分析。",
        "purpose": "核对本篇所有者盈余定义与适用边界。"
      },
      "title": "Warren Buffett：1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》",
      "authors": [
        "Warren Buffett"
      ],
      "version": "2026-11-27 核对官网原文"
    },
    {
      "source_id": "nb-e03-buffett-2000",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.berkshirehathaway.com/2000ar/2000letter.html"
      },
      "required_unit": {
        "locator": "FlightSafety 模拟器资本开支段落及 Full and Fair Reporting 一节。",
        "scope": "核对 2.72 亿美元模拟器支出与“does management think the tooth fairy pays for capital expenditures?”原文。",
        "purpose": "核对本篇关于重资产折旧真实性与 EBITDA 陷阱的原件引文。"
      },
      "title": "Warren Buffett：2000 年 Berkshire Hathaway 股东信《Full and Fair Reporting》",
      "authors": [
        "Warren Buffett"
      ],
      "version": "2026-11-27 核对官网原文"
    },
    {
      "source_id": "nb-e03-munger-2003",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html"
      },
      "required_unit": {
        "locator": "2003 年 5 月 3 日下午场第 17 问：Munger on recognizing “bullshit earnings”。",
        "scope": "核对 Warren Buffett 关于折旧属于 reverse float 及电信业教训的论述，以及 Charlie Munger 对 EBITDA 的原话。",
        "purpose": "核对本篇对滥用 EBITDA 的经典批评。"
      },
      "title": "Warren Buffett & Charlie Munger：2003 年 Berkshire Hathaway 股东大会下午场问答实录",
      "authors": [
        "Warren Buffett",
        "Charlie Munger"
      ],
      "version": "2026-11-27 核对 CNBC 实录"
    },
    {
      "source_id": "nb-e01-msft-fy26",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm"
      },
      "required_unit": {
        "locator": "FY2026（截至 2026-06-30）Income Statements 与 Cash Flows Statements。",
        "scope": "核对 MSFT 收入 331,839、营业利润 155,237、折旧摊销及其他 38,534、CFO 182,935、CapEx 115,948 及 FCF 66,987（百万美元）。",
        "purpose": "核对重资本 AI 扩产期 EBITDA、EBIT 与 FCF 的巨大背离。"
      },
      "title": "Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）",
      "authors": [
        "Microsoft Corporation"
      ],
      "version": "2026-11-26 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e03-msft-10k-fy26",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm"
      },
      "required_unit": {
        "locator": "Cash Flows Statements（FY24—FY26）、Note 1 折旧年限政策与 Note 6 Property and Equipment。",
        "scope": "核对 MSFT 三年 CapEx（44,477 → 64,551 → 115,948）与固定资产折旧（152 → 220 → 343 亿美元）的滞后爬坡，及服务器 2—6 年折旧年限、267 亿美元未付采购与 346 亿美元建设承诺。",
        "purpose": "核对本篇资本开支领先折旧的实证数据。"
      },
      "title": "Microsoft Corporation：FY2026 Form 10-K 附注与三年现金流表（截至 2026-06-30）",
      "authors": [
        "Microsoft Corporation"
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e01-ko-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm"
      },
      "required_unit": {
        "locator": "FY2025（截至 2025-12-31）利润表、现金流量表与 Free Cash Flow 调节表。",
        "scope": "核对 KO 收入 47,941、营业利润 13,762、D&A 1,050、EBITDA 14,812、CapEx 2,112、GAAP FCF 5,296 与剔除 fairlife 后 FCF 11,365（百万美元）。",
        "purpose": "核对轻资产成熟品牌中四把尺子相互靠近的参照样本。"
      },
      "title": "The Coca-Cola Company：FY2025 全年业绩与 Form 10-K（截至 2025-12-31）",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2026-11-26 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e03-att-10k-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm"
      },
      "required_unit": {
        "locator": "FY2025 Consolidated Statements of Income、Cash Flows 与 Note 22 Supplier and Vendor Financing Programs。",
        "scope": "核对 AT&T 收入 125,648、营业利润 24,162、D&A 20,886、EBITDA 45,048、利息费用 6,804、CFO 40,284、CapEx 20,842、标准 FCF 19,442 与供应商融资付款 1,181（百万美元）。",
        "purpose": "核对高折旧存量更新行业中 EBITDA 显著高估真实可分配现金的案例。"
      },
      "title": "AT&T Inc.：FY2025 Form 10-K（截至 2025-12-31）",
      "authors": [
        "AT&T Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e03-tsmc-20f-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm"
      },
      "required_unit": {
        "locator": "Item 4 资本开支披露、Item 5 经营回顾、合并利润表与现金流量表、Note 5 会计政策及 Note 15 Property, Plant and Equipment。",
        "scope": "核对 TSMC 2025 财年净营收 3,809,054、营业利润 1,936,092、D&A 688,096、CFO 2,274,976、CapEx 1,272,411 与期末在建工程及安装中设备 1,518,996（百万新台币，占自用固定资产净值 41.2%）。",
        "purpose": "核对先进晶圆制造的资本开支、投产起提折旧时滞与自由现金流落差。"
      },
      "title": "Taiwan Semiconductor Manufacturing Company Limited：FY2025 Form 20-F（截至 2025-12-31）",
      "authors": [
        "Taiwan Semiconductor Manufacturing Company Limited"
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
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127">

[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)和[《收入、回款与营运资本》](/zh/notebook/revenue-collections-working-capital/)留下一道更大幅度的数字落差：Microsoft（MSFT）在 FY2026 录得 1,552.37 亿美元营业利润和 1,829.35 亿美元经营现金流，可全年自由现金流反而从 FY2025 的 716.11 亿美元滑落至 669.87 亿美元——营业利润多赚了 267 亿美元，落袋现金却少了 46 亿美元。[^msft-fy26]

应收、存货和应付账款只能解释短期资金的周转错期，真正把利润与现金拉出上千亿美元鸿沟的，是长期资产的**资本开支**（Capital Expenditures，简称 CapEx）以及对应的**折旧与摊销**（Depreciation & Amortization，简称 D&A）。面对同一份财报，分别拿 **EBIT**、**EBITDA**、**所有者盈余**（Owner Earnings）和**自由现金流**（Free Cash Flow，简称 FCF）去量，得出的盈利印象会截然不同。

## 利润、折旧摊销与真实现金支出 {#nb-e03-capex-da}

企业花出去的每一块钱，在会计上先要过一道**费用化**与**资本化**的分岔口。支付员工薪酬、水电房租或当期推广费，受益期止步于当下，支出全额进入当期利润表，同时流出经营现金流；购买厂房、光刻机或 AI 服务器集群，资产能在未来数年持续产出收入，现金在付款当天全额从投资现金流（CapEx）流出，账面上先转为资产负债表的**固定资产**（PP&E），再按预计使用年限逐年计提**折旧**（Depreciation）扣除利润。对于外购专利、客户关系或可资本化软件等有限寿命无形资产，对应的分期扣除则叫**摊销**（Amortization）。

正是这一笔“花钱在前、记账在后”的时间差，让许多人把折旧误当成一笔不用掏钱的“账面扣除”。Warren Buffett 在 2003 年 Berkshire Hathaway 股东大会上直接挑明：折旧不仅真实，还是最糟糕的一类现金费用——它像“反向浮存金”（reverse float），企业得在收入进账之前先把现金砸出去，利润表里每年的折旧不过是那笔前置现金支出的延迟记账。[^munger-2003]

当企业处在不同资本周期时，**CapEx / D&A**（资本开支与折旧摊销之比）直接决定了账面利润与自由现金流的相对高低：

- **扩张期**（CapEx 远高于 D&A）：公司为未来三到五年的需求提前建厂买设备，当下流出的真金白银远超历史存量资产计提的折旧，账面利润与经营现金流会显著高于自由现金流。
- **成熟稳态期**（CapEx 约等于 D&A）：在设备价格与技术代际相对稳定时，每年替换老旧产能的资本开支大致贴近当年折旧，若营运资本不发生剧烈波动，净利润会逐步向自由现金流收敛。
- **收缩或透支期**（CapEx 持续低于 D&A）：当年自由现金流会显得高于账面利润。这种情况偶尔出现在并购后无形资产摊销虚高、真实维护需求很低的优质资产上，但更多时候意味着企业在推迟必要的设备更新，用牺牲未来竞争力换取短期现金数字好看。

<span data-text-versions id="nb-e03-text-accounting">除了金额差，长期投资还存在明显的**投产时滞**。按照 US GAAP 与 IFRS 准则，厂房施工与机台安装阶段的投入先归集在**在建工程与安装中设备**（CIP / EUI）科目，在达到预定可使用状态前不计提折旧；一旦完工转固，设备立刻开始按既定年限逐季折旧，即便初期产能利用率尚未爬坡，固定折旧费用也会全额压向毛利率。[^tsmc-20f] 这就形成两段错位：建设期里现金已经大幅流出，利润表毛利率却尚未承受折旧压力；转固初期则相反，资本开支峰值已过，折旧浪潮才刚抵达利润表<span data-text-detail>（以 MSFT FY2026 Form 10-K Note 1 与 Note 6 为例：服务器与网络设备按 2—6 年直线法折旧，期末原值达 2,158.74 亿美元，建筑与改良按 5—15 年、内部使用软件按 3 年折旧；同时期末已有 267 亿美元已收货但尚未付款的设备挂在应付账款中，另有 346 亿美元数据中心在建合同承诺。TSMC 在 FY2025 Form 20-F Note 5 与 Note 15 中则披露：晶圆制造机器设备按 5 年直线法折旧，无尘室与机电系统 10 年，主厂房 20 年，建设期符合条件的借款利息亦资本化计入资产原值。此外，部分重资产企业通过融资租赁或供应商分期融资采购设备，现金流出可能落在融资现金流而非投资现金流的 CapEx 行中，例如 AT&T FY2025 除 208.42 亿美元现金 CapEx 外，还在融资活动支付了 11.81 亿美元供应商融资款）</span>。[^msft-10k]<sup>，</sup>[^att-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

把这套时滞放到真实财报里对照，就能看到现金支出如何领先利润表两到三年抵达：

<figure class="flow-figure e03-lag" id="nb-e03-lag-fig">
<div class="ff-head"><p class="ff-title">从资本开支到折旧的四阶段时滞：MSFT 与 TSMC 实证</p><span class="ff-sub">现金在建设期先行流出 · 折旧在资产达预定可使用状态后才进入利润表</span></div>
<div class="business-exchange" aria-label="资本开支到折旧的四阶段路径与两家公司实证：四阶段依次为建设安装期（现金大额流出、在建工程不提折旧）、投产转固期（开始计提折旧但产能爬坡中、毛利率承压）、满产收获期（产能利用率高、折旧与收入匹配、现金回流）及存量更新稳态（CapEx 贴近维持所需、利润与现金收敛）。左侧 MSFT FY2024 至 FY2026 实证显示：固定资产 CapEx 由 445 亿增至 646 亿再增至 1,159 亿美元，而同期固定资产折旧费用仅由 152 亿升至 220 亿再升至 343 亿美元，另余 267 亿美元未付设备款挂在应付账款。右侧 TSMC FY2025 Form 20-F 实证显示：全年 CapEx 12,724 亿新台币（约 409 亿美元，2026 年指引 520—560 亿美元），全年 D&A 6,881 亿新台币；期末在建工程与安装中设备高达 15,190 亿新台币，占自用固定资产净值 41.2%，完工投用前不提折旧，投用后机台按 5 年直线法折旧。">
<div class="e03-stages">
<div class="e03-stage" style="--e03-c:#a8743f"><em>阶段 1 · 建厂装机</em><strong>在建工程（CIP）</strong><p>现金按工程进度大额流出（CapEx 飙升）；尚未达可使用状态，利润表折旧为 0。</p></div>
<div class="e03-stage" style="--e03-c:#c06c3e"><em>阶段 2 · 完工转固</em><strong>投产起提折旧</strong><p>资产转入固定资产并开始直线折旧；初期良率与利用率爬坡，利润率往往承压。</p></div>
<div class="e03-stage" style="--e03-c:#23695a"><em>阶段 3 · 产能释放</em><strong>满产与现金回流</strong><p>高利用率摊薄单位固定折旧，经营现金流大幅放量，检验前置投入回报率。</p></div>
<div class="e03-stage" style="--e03-c:#5986a1"><em>阶段 4 · 存量周期</em><strong>更新替代稳态</strong><p>设备到期陆续替换，CapEx 向维持所需收敛，账面利润与 FCF 趋于接近。</p></div>
</div>
<div class="e03-proof">
<div class="e03-pbox">
<div class="e03-phead"><strong>Microsoft（MSFT）三年 CapEx vs 折旧爬坡</strong><span>亿美元 · FY26 10-K</span></div>
<div class="e03-yr-rows">
<div class="e03-yr"><b>FY24</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:38.4%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:13.1%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>445</strong> / 折旧 152</div></div>
<div class="e03-yr"><b>FY25</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:55.7%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:19.0%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>646</strong> / 折旧 220</div></div>
<div class="e03-yr"><b>FY26</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:100%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:29.6%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>1,159</strong> / 折旧 343</div></div>
</div>
<div class="e03-leg">上条为固定资产 CapEx，下条为 Note 6 固定资产折旧；FY26 期末另有 267 亿美元已购设备尚在应付账款，服务器按 2—6 年折旧。</div>
</div>
<div class="e03-pbox">
<div class="e03-phead"><strong>TSMC（TSM）在建工程蓄水池</strong><span>FY25 20-F · 百万新台币</span></div>
<div class="e03-tsm-stats">
<div class="e03-tsm-row"><span>全年 CapEx（约 409 亿美元）</span><b class="e03-neg">1,272,411</b></div>
<div class="e03-tsm-row"><span>全年折旧与摊销（D&amp;A）</span><b>688,096</b></div>
<div class="e03-tsm-row"><span>期末在建及安装中设备（EUI/CIP）</span><b class="e03-neg">1,518,996</b></div>
<div class="e03-tsm-row"><span>EUI/CIP 占自用固定资产净值</span><b class="e03-pos">41.2%</b></div>
</div>
<div class="e03-leg">逾四成固定资产净值尚在安装建设、未开始折旧；投用后晶圆机台按 5 年直线折旧，2026 年 CapEx 指引续增至 520—560 亿美元。</div>
</div>
</div>
</div>
<figcaption>数据来源：Microsoft FY2026 Form 10-K Note 1 与 Note 6；TSMC FY2025 Form 20-F Item 4、现金流量表及 Note 15。</figcaption>
</figure>

## EBIT、EBITDA、Owner Earnings 与 FCF：定义、桥接与适用边界 {#nb-e03-four-rulers}

弄清折旧与资本开支的时间差之后，就能把投资实务中最常混用的四把盈利尺子依次排开，看清它们各自切在资金流转的哪一刀、适合回答什么问题、又在哪些场景下会误导判断。

### 1. EBIT（息税前利润）

\[
\text{EBIT} \approx \text{营业利润} = \text{营业收入} - \text{营业成本} - \text{研发、销售与管理等经营费用（含 D\&A）}.
\]

**EBIT**（Earnings Before Interest and Taxes）把债务利息和所得税剥离在外，但保留了折旧与摊销。它量的是企业扣除资产正常损耗之后的核心经营赚钱能力，不因两家公司借债多寡或注册地税率不同而失真。因此，EBIT 适合横向比较同一行业内经营效率相近的公司，也是后续估算税后净营业利润（NOPAT）与投入资本回报率（ROIC）的起点。它的局限在于仍受会计折旧年限设定与并购摊销影响——若管理层把服务器折旧年限从 4 年拉长到 6 年，账面 EBIT 会凭空增厚，而实际硬件淘汰速度并没有变慢。

### 2. EBITDA（息税折旧摊销前利润）

\[
\text{EBITDA} = \text{EBIT} + \text{折旧与摊销（D\&A）}.
\]

**EBITDA**（Earnings Before Interest, Taxes, Depreciation and Amortization）在 EBIT 基础上再把非现金的折旧与摊销全部加回，衡量企业在付息、交税与资本开支之前粗略的经营毛现金规模。它在三类场景中有实际用处：第一，剥离跨国或跨公司之间不同的会计折旧年限政策，先看主营业务的毛现金创造规模；第二，在并购频繁的轻资产软件或媒体业务中，收购价溢价分摊形成的历史无形资产摊销并不需要未来重复掏钱重置，加回摊销能还原经营现况；第三，在信用与债务分析里作为短期付息能力和杠杆倍数（如净债务 / EBITDA，详见[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)）的起点参照，但重资产行业里必须紧接着核对扣除资本开支后的余额。

EBITDA 的致命陷阱，是把需要年年重置的设备消耗当成“不算成本”。Warren Buffett 在 2000 年 Berkshire Hathaway 股东信里先举了旗下 FlightSafety 的例子——公司 2000 年在飞行模拟器上投入 2.72 亿美元，每年几乎都要花掉与折旧相当的现金才能保住原地不退步——随后在“充分与公平披露”一节写下那句名言：一看到财报里提 EBITDA 就令人发怵，“难道管理层以为资本开支是牙仙付钱吗？”（“References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?”）[^buffett-2000] 三年后的 2003 年股东大会上，Warren Buffett 再次点名电信行业曾借 EBITDA 掩盖持续的巨额资本吞噬，Charlie Munger 随即接话：每当在任何演示材料里看到 EBITDA，直接把它替换成“bullshit earnings”就能看懂真相。[^munger-2003] 更进一步，不少公司还会在财报摘要里把股权激励、重组费等一并加回，造出 Non-GAAP 口径的 **Adjusted EBITDA**，这类口径的拆解留到[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)专门展开。

### 3. FCF（自由现金流）

\[
\text{FCF} = \text{经营现金流（CFO）} - \text{资本开支（CapEx）}.
\]

**FCF**（Free Cash Flow）直接从现金流量表出发，扣除营运资本占用、实付税息与全部资本开支，量的是企业在一整个经营与投资周期后，真正可以自由用于分红、回购、还债、并购或留存账上的现金。拿连续三到五年的累计 FCF 去对照累计净利润，是检验盈利真伪最硬的一把尺子。不过单一年份的 FCF 同样存在双向盲区：高速扩产的优质企业（例如大建 AI 算力中心的 MSFT）当年 FCF 会被主动扩张支出压低甚至转负；反过来，一家走向衰退的企业若刻意推迟必要设备检修或拉长供应商账期，短期内也能把单年 FCF 挤得很好看，代价是几年后设备老化与市场份额流失。

### 4. Owner Earnings（所有者盈余）

\[
\text{Owner Earnings} = \text{净利润} + \text{D\&A 及其他非现金费用} - \text{维持性 CapEx} - \Delta\text{维持性营运资本}.
\]

正是为了同时避开 EBITDA 忽略维持性投入、以及单年 FCF 惩罚扩张性投入这两处盲区，Warren Buffett 在 1986 年 Berkshire Hathaway 股东信附录中提出了**所有者盈余**（Owner Earnings）。[^buffett-1986] 它既像 FCF 一样扣除为保住现有销量与长期竞争地位所必需的年均资本开支和营运资本增量，又不把面向未来增长的主动扩张资本开支误算成当期亏损。由于现行会计准则从不要求上市公司把 CapEx 拆成“维持性”与“扩张性”两行，所有者盈余无法直接抄自财报，只能由研究者结合行业资产寿命与产能变化估算——正如 Warren Buffett 在同一附录中借 John Maynard Keynes 的话说，宁要“模糊的正确，不要精确的错误”。[^buffett-1986]

<figure class="flow-figure e03-rulers" id="nb-e03-rulers-fig">
<div class="ff-head"><p class="ff-title">从营业收入到四把盈利尺子：计算桥、适用场景与失真陷阱</p><span class="ff-sub">同一家公司的同一份财报，切在不同位置回答不同问题</span></div>
<div class="business-exchange" aria-label="四把盈利尺子的计算路径与适用边界：利润表路径由营业收入扣除成本与含折旧摊销的经营费用得到 EBIT，再加回非现金折旧与摊销得到 EBITDA；现金流路径由经营现金流 CFO 扣除维持性资本开支近似得到 Owner Earnings，再扣除扩张性资本开支得到账面 FCF。四张卡片对比：EBIT 剔除资本结构与税率差异、保留资产损耗，适合同业经营效率与 ROIC 分析，陷阱是受折旧年限与并购摊销干扰；EBITDA 剥离折旧年限差异与杠杆，适合轻资产并购对比及信用付息起点参照，致命陷阱是把重资产持续更新当成无成本；Owner Earnings 扣维持性投入而不惩罚高回报扩张，适合长期股权估值，难点是维持性 CapEx 须由研究者估算；FCF 等于 CFO 减全部 CapEx，最适合跨多期检验盈利含金量与分红回购底气，陷阱是单年值易受扩张高峰或推迟维护扭曲。">
<div class="e03-ladder">
<div class="e03-lane"><strong>利润表阶梯：</strong>营业收入 − 成本与经营费用（含 D&amp;A）→ <span>EBIT</span> ＋ D&amp;A → <span>EBITDA</span></div>
<div class="e03-lane e03-lane-cf"><strong>现金流阶梯：</strong>经营现金流 CFO − 维持性 CapEx → <span>Owner Earnings</span> − 扩张性 CapEx → <span>账面 FCF</span></div>
</div>
<div class="e03-chain">
<div class="e03-rcard" style="--e03-c:#23695a">
<div><span class="e03-tag">经营盈利尺</span><strong>EBIT（息税前利润）</strong>
<div class="e03-formula">≈ 营业利润（含 D&amp;A 扣除）</div></div>
<dl><dt>适用场景</dt><dd>跨杠杆、跨税率比较核心经营效率；计算 NOPAT 与 ROIC 的起点。</dd><dt>失真陷阱</dt><dd>拉长折旧年限可虚增 EBIT；并购无形资产摊销与表下联营收益会干扰可比性。</dd></dl>
</div>
<div class="e03-rcard e03-warn" style="--e03-c:#a8743f">
<div><span class="e03-tag">慎用 · 现金前尺</span><strong>EBITDA</strong>
<div class="e03-formula">＝ EBIT ＋ 折旧与摊销（D&amp;A）</div></div>
<dl><dt>适用场景</dt><dd>轻资产／并购型同业初筛；信用分析短期付息参照（须联动 CapEx）。</dd><dt>失真陷阱</dt><dd>把重资产必然发生的重置支出抹掉，重资本行业里严重高估真实可分配现金。</dd></dl>
</div>
<div class="e03-rcard" style="--e03-c:#3c6e8c">
<div><span class="e03-tag">长期估值尺</span><strong>Owner Earnings</strong>
<div class="e03-formula">净利 ＋ D&amp;A − 维持性 CapEx − Δ维持营运资本</div></div>
<dl><dt>适用场景</dt><dd>评估成熟与扩产期企业稳态造血力，避免误伤高回报扩张项目。</dd><dt>失真陷阱</dt><dd>财报不单独披露维持性占比，若把刚性更新误判成扩张支出仍会高估盈利。</dd></dl>
</div>
<div class="e03-rcard" style="--e03-c:#22392f">
<div><span class="e03-tag">真金白银尺</span><strong>FCF（自由现金流）</strong>
<div class="e03-formula">＝ CFO − 全部资本开支（CapEx）</div></div>
<dl><dt>适用场景</dt><dd>跨 3—5 年审计利润含金量，检验分红、回购与减债的现金底气。</dd><dt>失真陷阱</dt><dd>单年值易被扩产高峰压低甚至转负，也可能因推迟维护或拉长账期而虚高。</dd></dl>
</div>
</div>
</div>
<figcaption>跨公司比较 EBIT 或 EBITDA 时，须确认所有对象采用相同口径（GAAP 营业利润 vs 含表下非经营项的广义 EBIT），并核对是否隐藏股权激励或租赁转移。</figcaption>
</figure>

<span data-text-versions id="nb-e03-text-rulers">读跨国公司年报时，还要留心不同会计准则对现金流归类的细微差别：US GAAP 要求将实付利息记入经营现金流，因此美股常见的 CFO − CapEx 属于扣完债息后归属股东的杠杆后自由现金流；而采用 IFRS 的公司（例如 TSMC）可以把已付利息归入融资现金流、把已收利息归入投资现金流，直接套用同一公式前需先核对现金流附表<span data-text-detail>（实务中另须区分两组术语：第一，严格定义下的 EBIT 可由税前利润加回利息费用算得，当公司存在巨额联营企业投资收益或公允价值重估损益时——如 KO FY2025 录得 20.31 亿美元联营收益，MSFT FY2026 录得 106.97 亿美元其他净收益——该口径与主营业务的 Operating Income 会明显分化，比较核心主业时通常以 Operating Income 作为 EBIT 近似。第二，估值课本中的无杠杆企业自由现金流 FCFF ＝ EBIT × (1 − 税率) ＋ D&A − CapEx − ΔNWC，供债权人与股东共同分配；而报表速算的 CFO − CapEx 则是扣过税息后的股权口径，且在 IFRS 下需留意利息收付归属，例如 TSMC FY2025 现金流量表将已付利息 19,129 百万新台币列在融资活动、将已收利息 98,955 百万新台币列在投资活动，若与美股公司直接比对 FCF 须先对齐利息口径）</span>。[^tsmc-20f]<sup>，</sup>[^ko-fy25]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 维持性投入与扩张性投入：四把尺子怎样背离 {#nb-e03-capex-split}

既然财报现金流量表只报一行合并后的资本开支，投资者在日常研究里怎样估算其中多少属于**维持性 CapEx**、多少属于**扩张性 CapEx**？实践中通常会交叉核对四条线索：

1. **对照低增长年份的历史基线**：观察公司过去五到十年在收入与销量几乎零增长的年份里，CapEx 占收入及占 D&A 的下限水平，这往往接近维持现有规模所需的底线支出。
2. **核对产量与装机量是否真的在增加**：若一家航空公司机队座位数或一家运营商用户总数并无明显扩张，即便当年 CapEx 高于折旧，大概率也只是通胀推高了新飞机与新基站的重置价格，或是为应对技术升级（例如 4G 换代到 5G）而不得不花掉的防御性维持支出。
3. **拆读 10-K 与业绩会里的资本预算说明**：半导体制造、云厂商与油气企业常在管理层讨论中说明当年预算里多少投向先进制程新厂或新增算力，多少用于现有工厂设备更新、掩模与日常运维。
4. **警觉通胀导致的重置成本缺口**：会计折旧永远按多年前的**历史采购价**计提；如果过去十年建筑、电网和机台价格上涨了三成，哪怕企业只是原地维持同等产能，每年所需维持性 CapEx 也会系统性高于账面折旧。

为了把“折旧强度”“资本开支倍率”和“扩张占比”这三个变量怎样撕裂四把尺子看得一清二楚，下面把所有企业统一归一化为 **EBITDA ＝ 100 百万美元**（为聚焦资本开支差异，暂设债务利息为 0、有效税率 20%、稳态营运资本净变动为 0）。页面默认展示**重资产 AI 扩产期**情形；点击上方预设或拖动滑块，可以同步观察四条柱子怎样背离——当扩张性投入足够大时，账面 FCF 甚至会直接跨过零轴转为负值：

<figure class="flow-figure e03-capex-lab" id="nb-e03-capex-lab" data-e03-capex>
<div class="ff-head"><p class="ff-title">互动推演器：同样 100 百万美元 EBITDA，四把盈利尺子为何天壤之别</p><span class="ff-sub">统一设定 EBITDA ＝ 100 · 无债（利息 0）· 税率 20% · Δ营运资本 ＝ 0</span></div>
<div class="e03-controls" hidden>
<div class="e03-presets"><button type="button" data-e03-preset="light" aria-pressed="false">轻资产成熟品牌（KO 型）</button><button type="button" data-e03-preset="expand" aria-pressed="true">重资产 AI 扩产期（MSFT·TSM 型）</button><button type="button" data-e03-preset="mature" aria-pressed="false">高折旧存量更新（电信·航空型）</button></div>
<div class="e03-sliders">
<div class="e03-srow"><label for="e03-in-da"><span>折旧占比 D&amp;A / EBITDA</span><output data-e03-out="da">20%</output></label><input id="e03-in-da" type="range" min="5" max="55" step="1" value="20" data-e03-in="da"></div>
<div class="e03-srow"><label for="e03-in-mult"><span>资本开支强度 CapEx / D&amp;A</span><output data-e03-out="mult">3.0×</output></label><input id="e03-in-mult" type="range" min="0.5" max="3.5" step="0.1" value="3.0" data-e03-in="mult"></div>
<div class="e03-srow"><label for="e03-in-growth"><span>扩张性 CapEx 占比</span><output data-e03-out="growth">70%</output></label><input id="e03-in-growth" type="range" min="0" max="85" step="5" value="70" data-e03-in="growth"></div>
</div>
</div>
<div class="e03-board business-exchange" aria-label="资本开支与四指标互动对照（假设 EBITDA 为 100 百万美元、无债、税率 20%、营运资本净变动 0）：一、轻资产成熟品牌（KO 型，D&A 占 8%、CapEx 为 D&A 的 1.8 倍、扩张占比 40%）：EBIT 为 92.0、CFO 为 81.6、维持性 CapEx 为 8.6、扩张性 CapEx 为 5.8，Owner Earnings 为 73.0、账面 FCF 为 67.2，四把尺子接近。二、默认展示的重资产 AI 扩产期（MSFT 或 TSMC 型，D&A 占 20%、CapEx 为 D&A 的 3.0 倍、扩张占比 70%）：EBIT 为 80.0、CFO 为 84.0、总 CapEx 为 60.0（维持 18.0 加扩张 42.0），Owner Earnings 仍达 66.0，但账面 FCF 被压低至 24.0（仅占 EBITDA 24%）。三、高折旧存量更新（电信或航空型，D&A 占 46%、CapEx 为 D&A 的 1.0 倍、扩张占比 15%）：EBIT 仅 54.0、CFO 为 89.2、维持性 CapEx 高达 39.1、扩张性仅 6.9，Owner Earnings 落至 50.1、账面 FCF 落至 43.2（尚未扣除高债务利息），EBITDA 严重高估可分配现金。">
<div class="e03-wf">
<div class="e03-wrow"><span>EBITDA</span><div class="e03-wtrack"><span class="e03-zero" style="--z:0%"></span><div class="e03-wbar" data-e03-bar="ebitda" style="--l:0%;--w:100%;--c:#a8743f"></div></div><strong data-e03-val="ebitda">100.0</strong></div>
<div class="e03-wrow"><span>EBIT</span><div class="e03-wtrack"><span class="e03-zero" style="--z:0%"></span><div class="e03-wbar" data-e03-bar="ebit" style="--l:0%;--w:80%;--c:#5986a1"></div></div><strong class="e03-pos" data-e03-val="ebit">80.0</strong></div>
<div class="e03-wrow"><span>Owner Earnings</span><div class="e03-wtrack"><span class="e03-zero" style="--z:0%"></span><div class="e03-wbar" data-e03-bar="oe" style="--l:0%;--w:66%;--c:#23695a"></div></div><strong class="e03-pos" data-e03-val="oe">66.0</strong></div>
<div class="e03-wrow"><span>账面 FCF</span><div class="e03-wtrack"><span class="e03-zero" style="--z:0%"></span><div class="e03-wbar" data-e03-bar="fcf" style="--l:0%;--w:24%;--c:#22392f"></div></div><strong class="e03-warn-t" data-e03-val="fcf">24.0</strong></div>
</div>
<div class="e03-kpi">
<div class="e03-kbox"><span>维持 / 扩张 CapEx</span><strong data-e03-k="capex-split">18.0 / 42.0</strong><small data-e03-ks="capex-tot">总 CapEx 60.0（CFO 84.0）</small></div>
<div class="e03-kbox e03-kwarn"><span>FCF / EBITDA 转化率</span><strong data-e03-k="fcf-ratio">24%</strong><small data-e03-ks="oe-ratio">Owner Earnings 占 EBITDA 66%</small></div>
</div>
</div>
<p class="e03-note" data-e03-note>重资本扩产型背离：Owner Earnings（66.0）显著高于账面 FCF（24.0），差额 42.0 是提前支付的扩张投入；用 EBITDA 会高估，单看当年 FCF 又会低估。</p>
<figcaption>教学模型按 CFO ＝ EBITDA − 20% × EBIT、Owner Earnings ＝ CFO − 维持性 CapEx、FCF ＝ CFO − 总 CapEx 严格勾稽；现实中重资产企业往往还背负较高债务利息，会进一步压低可供股东分配的现金。</figcaption>
</figure>

沿着三种预设切换一遍，同一份“100 百万美元 EBITDA”背后的三种完全不同的生意就显露出来：在**轻资产成熟品牌**（D&A 仅占 8%）里，维持性支出微薄，EBIT（92.0）、Owner Earnings（73.0）与 FCF（67.2）步调一致；进入**重资产扩产期**（D&A 占 20%、CapEx / D&A 达 3.0 倍、七成为扩张投入），账面 FCF 被 42.0 的前瞻投入压低到 24.0，可真正衡量现有业务造血能力的 Owner Earnings 仍有 66.0——此时若把 CapEx / D&A 拖到 3.5 倍以上且折旧占比略高，账面 FCF 会直接跌破零轴；最后切到**高折旧存量更新**（D&A 占 46%、CapEx / D&A 约 1.0 倍、八成五为维持更新），哪怕还没扣债务利息，EBITDA 中也已有近半数被迫留在厂房与网络更新里，Owner Earnings（50.1）和 FCF（43.2）双双腰斩，这正是把 EBITDA 当成现金流时最容易踩中的估值陷阱。

## 真实 SEC 财报对照：轻资产、存量更新与重资本扩产 {#nb-e03-sec-contrast}

回到真实上市公司的 SEC 正式年报，把三种完全不同的资本开支剖面并排摆在统一美元刻度下——**The Coca-Cola Company**（KO，FY2025）、**AT&T Inc.**（T，FY2025）以及 **Microsoft**（MSFT，FY2026）——就能看到前文推演的每一种背离都在现实账本里精准上演：

<figure class="flow-figure e03-sec" id="nb-e03-sec-fig">
<div class="ff-head"><p class="ff-title">真实 SEC 10-K 对照：KO FY25 vs T FY25 vs MSFT FY26</p><span class="ff-sub">单位：百万美元 · 各公司柱长均以自身 EBITDA ＝ 100% 归一化</span></div>
<div class="e03-sgrid business-exchange" aria-label="三家美股真实 SEC 10-K 的 EBIT、EBITDA、CapEx 与 FCF 对照（百万美元）：一、Coca-Cola（KO，FY2025，轻资产成熟品牌）：收入 47,941、营业利润 13,762（利润率 28.7%）、D&A 1,050、EBITDA 14,812（30.9%）；CapEx 仅 2,112（占收入 4.4%、为 D&A 的 2.01 倍）；剔除一次性 6,069 fairlife 或有对价支付后 FCF 为 11,365（账面 GAAP FCF 5,296），正常化 FCF 占 EBITDA 高达 76.7%。二、AT&T（T，FY2025，高折旧存量更新）：收入 125,648、营业利润 24,162（19.2%）、D&A 高达 20,886、EBITDA 45,048（35.9%，表面利润率高于 KO）；CFO 40,284、CapEx 20,842（CapEx/D&A 恰为 1.00 倍）、利息费用 6,804，标准 FCF 19,442（仅占 EBITDA 43.2%），另在融资现金流支付 1,181 供应商融资款。三、Microsoft（MSFT，FY2026，重资本 AI 扩产）：收入 331,839、营业利润 155,237（46.8%）、折旧摊销及其他 38,534、EBITDA 193,771（58.4%）；CFO 182,935、CapEx 飙升至 115,948（占收入 34.9%、为 D&A 的 3.01 倍），账面 FCF 落至 66,987（仅占 EBITDA 34.6%）。">
<div class="e03-scard" style="--e03-c:#23695a">
<div class="e03-shead"><strong>KO · FY2025</strong><span>轻资产成熟</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>14,812</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:92.9%;--c:#5986a1"></div></div><b>13,762</b></div>
<div class="e03-sbar-row"><span>正常 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:76.7%;--c:#23695a"></div></div><b>11,365</b></div>
</div>
<div class="e03-smeta">
<div class="e03-smi"><span>CapEx / 收入</span><b class="e03-pos">4.4%（2,112）</b></div>
<div class="e03-smi"><span>正常 FCF / EBITDA</span><b class="e03-pos">76.7%</b></div>
</div>
<p class="e03-snote">D&amp;A 仅 1,050；因一次性支付 6,069 fairlife 尾款，当年 GAAP FCF 为 5,296，剔除后转化率仍近八成。</p>
</div>
<div class="e03-scard" style="--e03-c:#a8743f">
<div class="e03-shead"><strong>T（AT&amp;T）· FY2025</strong><span>重资产存量更新</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>45,048</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:53.6%;--c:#5986a1"></div></div><b>24,162</b></div>
<div class="e03-sbar-row"><span>标准 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:43.2%;--c:#22392f"></div></div><b>19,442</b></div>
</div>
<div class="e03-smeta">
<div class="e03-smi"><span>CapEx / D&amp;A</span><b class="e03-neg">1.00×（20,842）</b></div>
<div class="e03-smi"><span>FCF / EBITDA</span><b class="e03-neg">43.2%</b></div>
</div>
<p class="e03-snote">EBITDA 利润率 35.9% 高于 KO，但 D&amp;A 占 20,886、利息占 6,804，且几乎全额重投网络维护（另付供应商融资 1,181）。</p>
</div>
<div class="e03-scard" style="--e03-c:#3c6e8c">
<div class="e03-shead"><strong>MSFT · FY2026</strong><span>重资本 AI 扩产</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>193,771</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:80.1%;--c:#5986a1"></div></div><b>155,237</b></div>
<div class="e03-sbar-row"><span>账面 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:34.6%;--c:#22392f"></div></div><b>66,987</b></div>
</div>
<div class="e03-smeta">
<div class="e03-smi"><span>CapEx / D&amp;A</span><b class="e03-neg">3.01×（115,948）</b></div>
<div class="e03-smi"><span>FCF / EBITDA</span><b class="e03-neg">34.6%</b></div>
</div>
<p class="e03-snote">CapEx 占收入 34.9%，压低当年 FCF 甚至低于 FY25（71,611）；落差源于前瞻性算力扩产，营业利润同比仍增 21%。</p>
</div>
</div>
<figcaption>口径说明：三家公司 EBITDA 统一按 GAAP Operating Income ＋ 现金流量表 D&amp;A 项计算（MSFT 为 155,237 ＋ 38,534）；标准 FCF ＝ CFO − 固定资产资本开支。</figcaption>
</figure>

先拿 **KO** 与 **T** 并排看，EBITDA 陷阱立刻现形。FY2025 里，KO 的 EBITDA 利润率只有 **30.9%**（14,812 / 47,941 百万美元），T 的 EBITDA 利润率反而高达 **35.9%**（45,048 / 125,648 百万美元）；[^ko-fy25]<sup>，</sup>[^att-10k] 若粗略按 EBITDA 利润率挑公司，电信巨头似乎比饮料品牌更赚钱。可往下走两步，局面彻底翻转：KO 靠浓缩液轻资产运作，全年 D&A 仅 10.50 亿美元、CapEx 仅 21.12 亿美元（占收入 4.4%），剔除一次性 fairlife 或有对价尾款后，每赚 1 美元 EBITDA 能留下 **0.77 美元**自由现金流（2026 财年指引 FCF 进一步看至 122 亿美元）。T 则背着庞大的移动基站与光纤网络，全年 D&A 高达 208.86 亿美元，CapEx 为 208.42 亿美元（CapEx / D&A 恰为 1.00 倍），外加 68.04 亿美元债务利息与税费，标准 FCF 落回 194.42 亿美元——不到 EBITDA 的四成半；如果把记入融资现金流的 11.81 亿美元供应商融资付款也算回设备支出，真实现金结余只剩 182.61 亿美元。[^att-10k]

再把 **MSFT** 和先进晶圆代工龙头 **Taiwan Semiconductor Manufacturing Company Limited**（TSMC，NYSE：TSM）拉进来，就能看清另一类同样“FCF 远低于 EBITDA”、经济含义却迥然不同的景象。MSFT FY2026 的 FCF / EBITDA 只有 **34.6%**，甚至低于 T 的 43.2%；[^msft-fy26] TSM 在 FY2025 Form 20-F 中录得净营收 38,091 亿新台币（约 1,214.2 亿美元，同比增长 31.6%）、营业利润 19,361 亿新台币（50.8% 利润率）、D&A 6,881 亿新台币、EBITDA 26,242 亿新台币（68.9% 利润率），可在 12,724 亿新台币（约 408.95 亿美元，CapEx / D&A 为 1.85 倍）的晶圆厂扩产支出之后，标准 FCF 也落到 10,026 亿新台币（期末折算约 319.6 亿美元），仅占 EBITDA 的 **38.2%**。[^tsmc-20f]

单纯盯着“FCF / EBITDA 转化率偏低”，会把 T、MSFT 与 TSM 混为一谈。把问题拆回到资本开支的用途与投产回报，三者的分水岭就清晰得多：T FY2025 收入仅增长 2.7%，每年两百多亿美元的 CapEx 大多用于维持成熟网络竞争力，Owner Earnings 基本贴着偏低的 FCF 走；而 MSFT（全年收入增 18%、Q4 Azure 云服务增 43%）与 TSM（毛利率高达 59.9%、全球先进制程满载）的高额 CapEx 包含大比例扩张性投入，当期 FCF 被压低的同时，未来两到三年陆续转固的服务器和 2 纳米晶圆厂也会带来成倍放大的折旧账单。它们最终能为股东创造多少长期价值，取决于这些重金建成的产能投用后能否守住利用率与定价权。

看到这里，一家单一业务公司从利润、资本开支到现金的脉络已经贯通。现实中大型上市公司往往同时经营轻资产软件与重资产云基建等多条业务线，资本开支与共同费用如何在分部间归属、合并时怎样消除重复计算，由下一篇[《分部、共同成本与合并》](/zh/notebook/segments-shared-costs-consolidation/)接手；当重资本扩张叠加大额举债并在投产前遭遇现金低谷时，偿债底线与净债务 / EBITDA 约束见[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)；而管理层在 Non-GAAP 口径下对 Adjusted EBITDA 与股权激励的各类修饰，则留在[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)逐项拆解。

<script src="/notebook/profit-capex/ui.js?v=20261127" defer></script>

[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的利润表、现金流量表与分部业绩原件。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Note 1 固定资产折旧年限政策、FY24—FY26 三年现金流量表与 Note 6 Property and Equipment 附注。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)与 [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)（2026-02-20 提交），截至 2025-12-31 的三张主表与 Free Cash Flow 调节表。
[^att-10k]: AT&T Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm)，2026-02-09 提交 SEC，Consolidated Statements of Income、Cash Flows 与 Note 22 Supplier and Vendor Financing Programs。
[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company Limited，[FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)，2026-04-16 提交 SEC，Item 4 资本开支披露、合并利润表与现金流量表、Note 5 会计政策及 Note 15 Property, Plant and Equipment。
[^buffett-1986]: Warren Buffett，[1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html)，1987-02-27，Owner Earnings 原始公式与“现金流”谬误批驳。
[^buffett-2000]: Warren Buffett，[2000 年 Berkshire Hathaway 股东信](https://www.berkshirehathaway.com/2000ar/2000letter.html)，2001-02-28，FlightSafety 2.72 亿美元模拟器资本开支与 Full and Fair Reporting 一节“tooth fairy”原话。
[^munger-2003]: Warren Buffett & Charlie Munger，[2003 年 Berkshire Hathaway 股东大会下午场实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html)，2003-05-03，CNBC Berkshire Hathaway Archive 第 17 问。


## Sources
- [The Coca-Cola Company：FY2025 全年业绩与 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm): Coca-Cola 2025 财年（截至 2025 年 12 月 31 日，Form 10-K 于 2026 年 2 月 20 日提交）三张主表：净营业收入 47,941 百万美元、营业利润 13,762 百万美元、合并净利润 13,137 百万美元（归属股东 13,107）；因支付 6,069 百万美元 fairlife 或有对价尾款，GAAP 经营现金流为 7,408 百万美元，资本开支 −2,112 百万美元，现金股息 −8,779 百万美元；期末总资产 104,816、总负债 70,541、总权益 34,275。
- [Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm): Microsoft 2026 年 7 月 29 日披露之 2026 财年（截至 2026 年 6 月 30 日）三张主表：总收入 331,839 百万美元、营业利润 155,237 百万美元、净利润 133,749 百万美元；经营现金流 182,935 百万美元、固定资产资本开支 −115,948 百万美元、投资现金流 −139,500 百万美元、融资现金流 −52,546 百万美元；期末总资产 758,376 百万美元（固定资产净值 313,076、现金及等价物 20,935）、总负债 315,989、股东权益 442,387。
- [AT&T Inc.：FY2025 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm): AT&T 2025 财年年报（2026 年 2 月 9 日提交 SEC）主表与 Note 22 附注：营业收入 125,648 百万美元、营业利润 24,162 百万美元、折旧与摊销 20,886 百万美元（EBITDA 45,048 百万美元，利润率 35.9%）、利息费用 6,804 百万美元、净利润 23,386 百万美元；经营现金流 40,284 百万美元、资本开支 20,842 百万美元（CapEx / D&A 约 1.00 倍），标准 FCF 为 19,442 百万美元；Note 22 另披露全年在融资现金流项下支付 1,181 百万美元供应商融资款（Vendor Financing）。
- [Warren Buffett：1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html): 1987 年 2 月 27 日发表。以收购 Scott Fetzer 的会计重估差异引出“所有者盈余”（Owner Earnings）定义：报告净利润加上折旧、折耗、摊销及其他非现金费用，减去企业为充分维持长期竞争地位与销量所需的年均资本开支及必要增量营运资本；并批驳只加回折旧摊销、不扣维持性资本开支的所谓“现金流”误区。
- [Warren Buffett：2000 年 Berkshire Hathaway 股东信《Full and Fair Reporting》](https://www.berkshirehathaway.com/2000ar/2000letter.html): 2001 年 2 月 28 日发表。以 FlightSafety 每年须投入与折旧相当的 2.72 亿美元更新飞行模拟器才能维持竞争地位为例说明折旧属于真实成本，并在“充分与公平披露”一节指出“References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?”。
- [Microsoft Corporation：FY2026 Form 10-K 附注与三年现金流表（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm): Microsoft FY2026 Form 10-K（2026 年 7 月 29 日提交 SEC）Note 1 会计政策、三年现金流量表与 Note 6 固定资产附注：FY2024 至 FY2026 固定资产资本开支依次为 44,477、64,551、115,948 百万美元，同期固定资产折旧费用为 152 亿、220 亿、343 亿美元（现金流量表折旧摊销及其他项为 20,958、29,433、38,534 百万美元）；服务器与网络设备折旧年限 2—6 年（期末原值 215,874 百万美元）、建筑与改良 5—15 年、内部使用软件 3 年；期末计入应付账款的未付固定资产采购达 267 亿美元，新数据中心建设资本承诺 346 亿美元。
- [Warren Buffett & Charlie Munger：2003 年 Berkshire Hathaway 股东大会下午场问答实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html): 2003 年 5 月 3 日 CNBC Berkshire Hathaway Archive 实录。Warren Buffett 指出折旧是最糟糕的一类真实成本（“reverse float”，现金在收入到来前就已先付出去，只是延迟记账），并点名电信业曾借 EBITDA 掩盖持续资本消耗；Charlie Munger 补充每当在演示材料中看到 EBITDA 时，都应直接替换为“bullshit earnings”。
- [Taiwan Semiconductor Manufacturing Company Limited：FY2025 Form 20-F（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm): TSMC 2025 财年 Form 20-F（2026 年 4 月 16 日提交 SEC，IFRS 口径）：净营收 3,809,054 百万新台币（约 121,423 百万美元，毛利率 59.9%）、营业利润 1,936,092 百万新台币（61,718 百万美元）、折旧与摊销 688,096 百万新台币（折旧 679,684 加摊销 8,412）、经营现金流 2,274,976 百万新台币、资本开支 1,272,411 百万新台币（期末折算 40,561 百万美元，Item 4 按加权平均汇率折算 40,895 百万美元；2026 年指引 520—560 亿美元）；期末在建工程与安装中设备（EUI/CIP）达 1,518,996 百万新台币，占自用固定资产净值 41.2%，达预定可使用状态前不计提折旧，投用后机器设备按 5 年直线法折旧。

## Content relations
```json
[
  {
    "from": "zh-profit-capex-cash",
    "relation": "part_of",
    "to": "topic-E",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [三张财报与经营活动](https://ou-liu-red-sugar.github.io/zh/notebook/three-financial-statements/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
- [收入增长与市场预期](https://ou-liu-red-sugar.github.io/zh/notebook/revenue-growth-expectations/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
