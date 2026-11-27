# 利润、资本开支与现金

拆解资本化与费用化的会计分叉、折旧摊销的投产时滞，系统界定 EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）的计算桥、适用场景与失真陷阱；借互动推演器与 KO、T、MSFT、TSMC 四家公司真实 SEC 披露，把账面利润与可分配现金的落差讲透。

Entry: zh-profit-capex-cash | Node: NB-E03 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E03《利润、资本开支与现金》，承接 NB-E01 的三表勾稽与 NB-E02 的营运资本错期，专门讲透资本开支（CapEx）、折旧摊销（D&A）、EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）。全篇分四节：一、资本化与费用化分叉及投产时滞：解释买设备建厂房为何当天从投资现金流全额流出、再经 D&A 分多年进入利润表，引用 Warren Buffett 2003 年股东大会将折旧比作 reverse float 的原话，区分扩张期（CapEx >> D&A）、稳态期（CapEx ≈ D&A）与收缩期，并用 MSFT FY24–FY26（CapEx 445 → 646 → 1,159 亿美元 vs 固定资产折旧 152 → 220 → 343 亿美元，另余 267 亿未付采购与 346 亿建设承诺）和 TSMC FY25 20-F（CapEx 12,724 亿新台币、期末在建及安装中设备 15,190 亿新台币占自用固定资产净值 41.2%、投用前不提折旧、投用后机台 5 年直线折旧）实证投产时滞。二、EBIT、EBITDA、Owner Earnings 与 FCF 的精确定义、计算桥、适用场景与失真陷阱：用四把尺子总图对照各自用途，详述 Warren Buffett 2000 年股东信“tooth fairy”原话与 FlightSafety 2.72 亿美元模拟器案例、Charlie Munger 2003 年股东大会“bullshit earnings”原话，以及 Warren Buffett 1986 年股东信附录 Owner Earnings 定义；在详细版补充 Operating Income vs 广义 EBIT、US GAAP vs IFRS 利息归类差异与 FCFF/FCFE 区别。三、维持性投入 vs 扩张性投入与互动推演器（nb-e03-capex-lab）：先用维持性与扩张性 CapEx 分流关系图（nb-e03-capex-split-fig）对照两者经济后果，提供估算维持性 CapEx 的四条实操线索，并通过单屏互动推演器（3 预设：轻资产 KO 型、重资产 AI 扩产 MSFT/TSM 型、高折旧存量更新电信/航空型 + 折旧占比 / CapEx/D&A / 扩张占比滑块）动态呈现 EBITDA = 100 之下四把尺子的背离乃至 FCF 转负。四、真实 SEC 财报对照：并排对照 KO FY25（轻资产，正常化 FCF/EBITDA 76.7%）、AT&T（T）FY25（高折旧存量更新，EBITDA 利润率 35.9% 高于 KO 但 CapEx/D&A = 1.00×、FCF/EBITDA 仅 43.2%，另付 11.81 亿供应商融资）与 MSFT FY26（AI 扩产期，CapEx/D&A = 3.01×、FCF/EBITDA 仅 34.6%），再结合 TSMC FY25（EBITDA 利润率 68.9%、FCF/EBITDA 38.2%）揭示同一低 FCF/EBITDA 比值背后“存量维护消耗”与“前瞻扩产投入”的经济含义差异，并衔接 NB-E04、NB-E05 与 NB-E06。
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
        "scope": "核对 MSFT 收入 331,839、营业利润 155,237、折旧摊销及其他 38,534、CFO 182,935、CapEx 115,948 及 FCF 66,987（M 美元）。",
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
        "scope": "核对 KO 收入 47,941、营业利润 13,762、D&A 1,050、EBITDA 14,812、CapEx 2,112、GAAP FCF 5,296 与剔除 fairlife 后 FCF 11,365（M 美元）。",
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
        "scope": "核对 AT&T 收入 125,648、营业利润 24,162、D&A 20,886、EBITDA 45,048、利息费用 6,804、CFO 40,284、CapEx 20,842、标准 FCF 19,442 与供应商融资付款 1,181（M 美元）。",
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
        "scope": "核对 TSMC 2025 财年净营收 3,809,054、营业利润 1,936,092、D&A 688,096、CFO 2,274,976、CapEx 1,272,411 与期末在建工程及安装中设备 1,518,996（M 新台币，占自用固定资产净值 41.2%）。",
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
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127b">

前两篇[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)与[《收入、回款与营运资本》](/zh/notebook/revenue-collections-working-capital/)留下一道悬念：Microsoft（MSFT）在 FY2026 的营业利润比上年多赚 267 亿美元，可全年自由现金流反而从 716.11 亿美元跌至 669.87 亿美元。[^msft-fy26]

应收与存货只能解释短期周转错期，把利润与现金拉开上千亿美元鸿沟的，是长期资产的**资本开支**（Capital Expenditures，简称 CapEx）及其**折旧与摊销**（Depreciation & Amortization，简称 D&A）。同一份财报换用 **EBIT**、**EBITDA**、**所有者盈余**（Owner Earnings）和**自由现金流**（Free Cash Flow，简称 FCF）去量，会得出截然不同的盈利印象。

## 利润、折旧摊销与真实现金支出 {#nb-e03-capex-da}

企业花出去的钱，在会计上先过一道**费用化**与**资本化**的分岔口。薪酬、房租这类当期耗尽的支出，直接全额扣减利润并流出经营现金流；买厂房、光刻机或 AI 服务器，现金在付款当天全额从投资现金流流出，账面先记为**固定资产**（PP&E），再按预计年限分年计提**折旧**（外购专利与软件等有限寿命无形资产则计提**摊销**）。

正是这种“花钱在前、记账在后”的错位，让不少人误把折旧当成不用掏钱的纸面扣除。Warren Buffett 在 2003 年 Berkshire Hathaway 股东大会上直言，折旧其实是“反向浮存金”（reverse float）：企业先垫出真金白银，利润表里每年的折旧不过是那笔前置支出的延迟入账。[^munger-2003]

当企业处在不同资本周期时，**CapEx / D&A**（资本开支与折旧摊销之比）直接决定了账面利润和自由现金流谁高谁低：

- **扩张期**（CapEx 远高于 D&A）：提前为未来三到五年买设备建厂，当期现金流出远超存量折旧，利润与 CFO 明显高于 FCF。
- **稳态期**（CapEx 约等于 D&A）：设备价格与技术代际平稳时，年度更新支出贴近折旧；若营运资本平稳，利润会逐步向 FCF 收敛。
- **收缩或透支期**（CapEx 持续低于 D&A）：账面 FCF 会显得高于利润；除少数并购摊销虚高的优质资产外，常常是在推迟必要更新、透支未来竞争力。

<span data-text-versions id="nb-e03-text-accounting">除了金额错位，长期投资还有两到三年的**投产时滞**。按 US GAAP 与 IFRS 准则，建厂装机阶段的投入先挂在**在建工程**（CIP / EUI）科目，完工投用前不提折旧；一旦转固，折旧立刻按年限全额压向毛利率，哪怕新产能还在爬坡<span data-text-detail>（以 MSFT FY2026 Form 10-K Note 1 与 Note 6 为例：服务器与网络设备按 2—6 年直线法折旧，期末原值达 2,158.74 亿美元，建筑与改良按 5—15 年、内部使用软件按 3 年折旧，另有 346 亿美元数据中心在建合同承诺。TSMC 在 FY2025 Form 20-F Note 5 与 Note 15 中披露：机台按 5 年、无尘室与机电系统 10 年、主厂房 20 年直线折旧，建设期符合条件的借款利息亦资本化。此外，部分重资产企业通过融资租赁或供应商分期融资采购设备，现金流出可能落在融资现金流而非投资活动 CapEx 行，例如 AT&T FY2025 除 208.42 亿美元现金 CapEx 外，还在融资活动支付了 11.81 亿美元供应商融资款）</span>。[^msft-10k]<sup>，</sup>[^tsmc-20f]<sup>，</sup>[^att-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

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
<div class="e03-phead"><strong>TSMC（TSM）在建工程蓄水池</strong><span>FY25 20-F · M 新台币</span></div>
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

弄清折旧与资本开支的时间差后，就能把投资里最常混用的四把盈利尺子依次排开，看清各自切在资金流转的哪一刀。

### 1. EBIT（息税前利润）

\[
\text{EBIT} \approx \text{营业利润} = \text{营业收入} - \text{营业成本} - \text{研发、销售与管理等经营费用（含 D\&A）}.
\]

**EBIT**（Earnings Before Interest and Taxes）剥离了债息与所得税，保留折旧与摊销，量的是扣除资产损耗后的主业赚钱能力。它不受杠杆与税率干扰，适合横向比较同业经营效率，也是估算 NOPAT 与 ROIC 的起点；只是若把设备折旧年限从 4 年拉长到 6 年，账面 EBIT 会凭空变厚，硬件淘汰速度其实并未放慢。

### 2. EBITDA（息税折旧摊销前利润）

\[
\text{EBITDA} = \text{EBIT} + \text{折旧与摊销（D\&A）}.
\]

**EBITDA**（Earnings Before Interest, Taxes, Depreciation and Amortization）在 EBIT 基础上加回全部折旧与摊销，量的是付息、交税与资本开支前的毛现金规模。当需要撇开跨国折旧政策差异、加回轻资产并购遗留的历史摊销，或作短期偿债杠杆参照（见[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)）时，它有实用价值。

EBITDA 的陷阱是把年年重置的设备磨损当成不算成本。Warren Buffett 在 2000 年股东信里举了 FlightSafety 的例子——当年投入 2.72 亿美元添置飞行模拟器，几乎每年都要花掉等同折旧的现金才能原地不退步——随后反问：“难道管理层以为资本开支是牙仙付钱吗？”（“does management think the tooth fairy pays for capital expenditures?”）[^buffett-2000]

三年后的股东大会上，Warren Buffett 再次点名电信业曾借 EBITDA 掩盖巨额资本吞噬，Charlie Munger 随即补刀：在演示材料里看到 EBITDA，直接替换成“bullshit earnings”就能看懂真相。[^munger-2003] 至于管理层再加回股权激励与重组费造出的 **Adjusted EBITDA**，留到[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)拆解。

### 3. FCF（自由现金流）

\[
\text{FCF} = \text{经营现金流（CFO）} - \text{资本开支（CapEx）}.
\]

**FCF** 从现金流量表出发，扣完营运资本、实付税息与全部资本开支，量的是企业真正可自由用于分红、回购、还债或留存的现金；拿三到五年累计 FCF 对照累计净利润，是检验盈利成色的硬尺子。不过单年 FCF 有双向盲区：高回报扩产会把当年数字压低甚至压负，衰退公司刻意推迟设备检修也能把单年现金挤得好看。

### 4. Owner Earnings（所有者盈余）

\[
\text{Owner Earnings} = \text{净利润} + \text{D\&A 及其他非现金费用} - \text{维持性 CapEx} - \Delta\text{维持性营运资本}.
\]

为同时避开 EBITDA 忽略设备重置、单年 FCF 又误伤主动扩张这两处盲区，Warren Buffett 在 1986 年 Berkshire Hathaway 股东信附录中提出**所有者盈余**。[^buffett-1986] 它只扣保住现有地位所需的维持投入，但财报并不分列维持与扩张两行，只能结合行业寿命与产能估算——正如他借 John Maynard Keynes 所言，宁要“模糊的正确，不要精确的错误”。

<figure class="flow-figure e03-rulers" id="nb-e03-rulers-fig">
<div class="ff-head"><p class="ff-title">从营业收入到四把盈利尺子：计算勾稽、适用场景与失真陷阱</p><span class="ff-sub">以 Microsoft（MSFT）FY2026 真实 SEC 披露为例（单位：M 美元）· 看清利润表与现金流量表在哪里分叉</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="以 Microsoft（MSFT）FY2026（单位 M 美元）演示四把盈利尺子的跨表勾稽与适用边界：左侧利润表自营业收入 331,839 减营业成本 106,374 得毛利 225,465，再减研发与三费 70,228 得营业利润 EBIT 155,237，加回现金流折旧摊销及其他 38,534 得 EBITDA 193,771。绿色曲线箭头经税费、营运资本与非现金股权激励调节，连至中间经营现金流 CFO 182,935；琥珀曲线箭头从 CFO 扣除来自投资现金流的总资本开支 CapEx 115,948，拆出先扣维持性 CapEx 的所有者盈余 Owner Earnings，以及再扣扩张性 CapEx 后的账面自由现金流 FCF 66,987（仅占 EBITDA 的 34.6%）。底部四栏对比四把尺子的核心适用场景与误用陷阱。">
<svg viewBox="0 0 860 462" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e03-arr-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e03-arr-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="462" rx="8" fill="#fafaf6"/>
  <!-- Left Card: Income Statement (MSFT FY26) -->
  <rect x="14" y="14" width="266" height="270" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <text x="147" y="39" text-anchor="middle" font-size="14" font-weight="700" fill="#1d2a25">利润表路径（权责口径）</text>
  <text x="147" y="57" text-anchor="middle" font-size="11" fill="#66736c">MSFT FY26 · 单位：M 美元</text>
  <line x1="26" y1="67" x2="268" y2="67" stroke="#eaede5"/>
  <text x="30" y="88" font-size="12.5" fill="#2e3c36">营业收入</text><text x="264" y="88" text-anchor="end" font-size="12.5" fill="#2e3c36">331,839</text>
  <text x="30" y="109" font-size="12.5" fill="#5d6b64">减：营业成本（含部分折旧）</text><text x="264" y="109" text-anchor="end" font-size="12.5" fill="#5d6b64">−106,374</text>
  <text x="30" y="130" font-size="12.5" font-weight="700" fill="#1d2a25">毛利</text><text x="264" y="130" text-anchor="end" font-size="12.5" font-weight="700" fill="#1d2a25">225,465</text>
  <text x="30" y="151" font-size="12.5" fill="#5d6b64">减：研发、销售与管理费</text><text x="264" y="151" text-anchor="end" font-size="12.5" fill="#5d6b64">−70,228</text>
  <rect x="24" y="162" width="246" height="26" rx="5" fill="#e2ede7"/>
  <text x="32" y="179" font-size="12.5" font-weight="700" fill="#1f5c4e">① 营业利润 EBIT（46.8%）</text><text x="262" y="179" text-anchor="end" font-size="12.5" font-weight="700" fill="#1f5c4e">155,237</text>
  <text x="30" y="207" font-size="12.5" fill="#5d6b64">加回：折旧摊销及其他 D&amp;A</text><text x="264" y="207" text-anchor="end" font-size="12.5" fill="#5d6b64">+38,534</text>
  <rect x="24" y="217" width="246" height="26" rx="5" fill="#eaedf0"/>
  <text x="32" y="234" font-size="12.5" font-weight="700" fill="#2c4459">② EBITDA（58.4%）</text><text x="262" y="234" text-anchor="end" font-size="12.5" font-weight="700" fill="#2c4459">193,771</text>
  <text x="147" y="266" text-anchor="middle" font-size="10.5" fill="#66736c">EBITDA 未扣除真实资本开支与所得税</text>
  <!-- Middle Card: Operating Cash Flow -->
  <rect x="352" y="34" width="206" height="122" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.2"/>
  <text x="455" y="58" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">经营现金流</text>
  <text x="455" y="75" text-anchor="middle" font-size="11" fill="#66736c">现金流量表第一栏</text>
  <line x1="364" y1="84" x2="546" y2="84" stroke="#eaede5"/>
  <rect x="364" y="94" width="182" height="28" rx="5" fill="#e2ede7"/>
  <text x="372" y="112" font-size="12.5" font-weight="700" fill="#1f5c4e">CFO</text><text x="538" y="112" text-anchor="end" font-size="13" font-weight="700" fill="#1f5c4e">182,935</text>
  <text x="455" y="142" text-anchor="middle" font-size="10.5" fill="#5d6b64">已扣现金税、加回 SBC 与预收</text>
  <!-- Middle-Bottom Card: Investing CapEx Split -->
  <rect x="352" y="172" width="206" height="112" rx="10" fill="#fdf8f0" stroke="#e4c59e" stroke-width="1.2"/>
  <text x="455" y="195" text-anchor="middle" font-size="13" font-weight="700" fill="#8d5520">投资现金流：总 CapEx</text>
  <text x="455" y="216" text-anchor="middle" font-size="14" font-weight="700" fill="#8d5520">−115,948（＝ 3.01× D&amp;A）</text>
  <line x1="364" y1="226" x2="546" y2="226" stroke="#ebd7bc"/>
  <text x="366" y="246" font-size="11" fill="#5d6b64">• 维持性 CapEx（补旧资产损耗）</text>
  <text x="366" y="266" font-size="11" fill="#5d6b64">• 扩张性 CapEx（新建 AI 算力）</text>
  <!-- Right Top Card: Owner Earnings -->
  <rect x="614" y="20" width="232" height="112" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.2"/>
  <rect x="626" y="32" width="208" height="24" rx="5" fill="#e2ede7"/>
  <text x="730" y="48" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1f5c4e">③ Owner Earnings（所有者盈余）</text>
  <text x="730" y="75" text-anchor="middle" font-size="12" font-weight="700" fill="#1d2a25">CFO − 维持性 CapEx</text>
  <text x="730" y="96" text-anchor="middle" font-size="10.5" fill="#5d6b64">不惩罚高回报扩张投入，反映企业</text>
  <text x="730" y="113" text-anchor="middle" font-size="10.5" fill="#5d6b64">稳态下真正可分给股东的现金盈余</text>
  <!-- Right Bottom Card: Reported FCF -->
  <rect x="614" y="152" width="232" height="132" rx="10" fill="#ffffff" stroke="#dfb98d" stroke-width="1.3"/>
  <rect x="626" y="164" width="208" height="26" rx="5" fill="#f4e5d2"/>
  <text x="634" y="181" font-size="12.5" font-weight="700" fill="#8d5520">④ 账面 FCF</text><text x="826" y="181" text-anchor="end" font-size="13" font-weight="700" fill="#8d5520">66,987</text>
  <text x="730" y="210" text-anchor="middle" font-size="11" font-weight="700" fill="#1d2a25">CFO − 总 CapEx（占 EBITDA 34.6%）</text>
  <line x1="628" y1="220" x2="832" y2="220" stroke="#eaede5"/>
  <text x="730" y="240" text-anchor="middle" font-size="10.5" fill="#5d6b64">扩产高峰期账面 FCF 低于盈利，</text>
  <text x="730" y="257" text-anchor="middle" font-size="10.5" fill="#5d6b64">须结合扩张回报率（ROIIC）判断</text>
  <text x="730" y="274" text-anchor="middle" font-size="10" fill="#8d5520">对比：KO 剔除后 FCF 占 EBITDA 76.7%</text>
  <!-- Curved Bezier Connectors -->
  <path d="M280,230 C316,230 314,108 348,108" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#e03-arr-sage)"/>
  <rect x="285" y="148" width="60" height="30" rx="4" fill="#fafaf6"/>
  <text x="315" y="161" text-anchor="middle" font-size="10" font-weight="600" fill="#23695a">税／营运</text>
  <text x="315" y="174" text-anchor="middle" font-size="10" font-weight="600" fill="#23695a">资本调节</text>
  <path d="M558,92 C586,92 586,74 610,74" fill="none" stroke="#23695a" stroke-width="1.9" marker-end="url(#e03-arr-sage)"/>
  <path d="M558,124 C586,124 586,178 610,178" fill="none" stroke="#a8743f" stroke-width="1.9" marker-end="url(#e03-arr-amber)"/>
  <path d="M558,224 C586,224 586,196 610,196" fill="none" stroke="#a8743f" stroke-width="1.9" stroke-dasharray="4,3" marker-end="url(#e03-arr-amber)"/>
  <!-- Bottom 4-Ruler Application Strip -->
  <rect x="14" y="300" width="201" height="148" rx="8" fill="#ffffff" stroke="#b3d3c4" stroke-width="1"/>
  <text x="26" y="321" font-size="12" font-weight="700" fill="#1f5c4e">① EBIT · 经营核心尺</text>
  <text x="26" y="341" font-size="10.5" fill="#2e3c36">适用：比较同业经营效率，</text>
  <text x="26" y="357" font-size="10.5" fill="#2e3c36">并作为计算 NOPAT 与 ROIC</text>
  <text x="26" y="373" font-size="10.5" fill="#2e3c36">的直接起点。</text>
  <line x1="26" y1="386" x2="203" y2="386" stroke="#eaede5"/>
  <text x="26" y="405" font-size="10.5" font-weight="600" fill="#8d5520">警惕：不同公司折旧年限与</text>
  <text x="26" y="421" font-size="10.5" fill="#5d6b64">并购无形资产摊销政策差异。</text>
  <rect x="225" y="300" width="201" height="148" rx="8" fill="#ffffff" stroke="#cbd4dc" stroke-width="1"/>
  <text x="237" y="321" font-size="12" font-weight="700" fill="#2c4459">② EBITDA · 资本支出前尺</text>
  <text x="237" y="341" font-size="10.5" fill="#2e3c36">适用：轻资产并购横向对比，</text>
  <text x="237" y="357" font-size="10.5" fill="#2e3c36">或剥离折旧年限差异看毛</text>
  <text x="237" y="373" font-size="10.5" fill="#2e3c36">现金生成规模与短期付息。</text>
  <line x1="237" y1="386" x2="414" y2="386" stroke="#eaede5"/>
  <text x="237" y="405" font-size="10.5" font-weight="600" fill="#8d5520">陷阱：重资产行业绝不能把</text>
  <text x="237" y="421" font-size="10.5" fill="#5d6b64">持续更新设备当成“无成本”。</text>
  <rect x="436" y="300" width="201" height="148" rx="8" fill="#ffffff" stroke="#b3d3c4" stroke-width="1"/>
  <text x="448" y="321" font-size="12" font-weight="700" fill="#1f5c4e">③ Owner Earnings · 估值尺</text>
  <text x="448" y="341" font-size="10.5" fill="#2e3c36">适用：长期股权价值评估，</text>
  <text x="448" y="357" font-size="10.5" fill="#2e3c36">扣除维持竞争力的必要开支</text>
  <text x="448" y="373" font-size="10.5" fill="#2e3c36">而不误伤高回报扩张项目。</text>
  <line x1="448" y1="386" x2="625" y2="386" stroke="#eaede5"/>
  <text x="448" y="405" font-size="10.5" font-weight="600" fill="#8d5520">难点：财报不直接拆分维持</text>
  <text x="448" y="421" font-size="10.5" fill="#5d6b64">与扩张 CapEx，须结合行业估。</text>
  <rect x="647" y="300" width="199" height="148" rx="8" fill="#ffffff" stroke="#e4c59e" stroke-width="1"/>
  <text x="659" y="321" font-size="12" font-weight="700" fill="#8d5520">④ FCF · 现金造血尺</text>
  <text x="659" y="341" font-size="10.5" fill="#2e3c36">适用：跨三至五年检验利润</text>
  <text x="659" y="357" font-size="10.5" fill="#2e3c36">含金量、分红回购与还债</text>
  <text x="659" y="373" font-size="10.5" fill="#2e3c36">的真实资金底气。</text>
  <line x1="659" y1="386" x2="834" y2="386" stroke="#eaede5"/>
  <text x="659" y="405" font-size="10.5" font-weight="600" fill="#8d5520">局限：单年扩产高峰期会被</text>
  <text x="659" y="421" font-size="10.5" fill="#5d6b64">人为压低，需拉长周期观察。</text>
</svg>
</div>
<figcaption>四把尺子各有侧重，从“利润表经营效率”一路过渡到“扣除全部资本投入后的剩余现金”；同一家公司四数落差越大，越要追查资本开支属性。</figcaption>
</figure>

<span data-text-versions id="nb-e03-text-rulers">跨国比较 FCF 时，还要留意会计准则对利息归类的差别：US GAAP 把实付利息计入经营现金流，美股常见的 CFO − CapEx 属于扣完债息的股权口径；采用 IFRS 的公司（如 TSMC）常将已付利息列在融资活动、已收利息列在投资活动，套用同一公式前应先核对现金流附表<span data-text-detail>（实务中另须区分两组口径：第一，严格定义下的 EBIT 为税前利润加回利息费用，当公司存在大额联营收益或公允价值重估损益时——如 KO FY2025 录得 20.31 亿美元联营收益，MSFT FY2026 录得 106.97 亿美元其他净收益——该口径会明显偏离 Operating Income，比较主业通常以 Operating Income 近似 EBIT。第二，无杠杆企业自由现金流 FCFF ＝ EBIT × (1 − 税率) ＋ D&A − CapEx − ΔNWC，供债权人与股东共享；而 CFO − CapEx 属于扣息后的股权口径。TSMC FY2025 现金流量表将已付利息 19,129 M 新台币列在融资活动、已收利息 98,955 M 新台币列在投资活动，与美股比对 FCF 须先对齐利息口径）</span>。[^tsmc-20f]<sup>，</sup>[^ko-fy25]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 维持性投入与扩张性投入：四把尺子怎样背离 {#nb-e03-capex-split}

现金流量表只报一行合并后的资本开支，可流出去的每一美元背后，经济含义可能截然相反。拆不开**维持性 CapEx** 与**扩张性 CapEx**，就很容易把同一份低 FCF 看反：

<figure class="flow-figure e03-capex-split" id="nb-e03-capex-split-fig">
<div class="ff-head"><p class="ff-title">同一笔资本开支的两条经济去向：维持性 CapEx 与扩张性 CapEx</p><span class="ff-sub">财报只合报一行现金流出 · 经济属性与估值后果截然相反</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="同一笔现金流出的资本开支（CapEx）拆向两条不同经济去向的流向图：左侧起点卡显示投资活动中的同一笔资本开支，现金当天全额离开账面，但会计准则只合并披露一行，不区分保旧还是建新。上方琥珀色路径为维持性 CapEx（补磨损、不增收入），仅替换老化设备、基站与厂房以守住现有销量与竞争力，典型如 AT&T（T）FY2025 CapEx / D&A 为 1.00 倍且多用于存量网络更新；右侧后果卡指出它等价于真实刚性成本，必须从 Owner Earnings 中扣除，推迟投入会导致产能老化与份额流失，拿 EBITDA 估值会系统性高估，结果表现为 Owner Earnings 与 FCF 双低。下方松绿色路径为扩张性 CapEx（建增量、争未来回报），用于新建增量产能、AI 机房与先进产线，典型如 MSFT FY2026 CapEx / D&A 达 3.01 倍与 TSMC FY2025 达 1.85 倍；右侧后果卡指出它在建设期压低账面 FCF，投产后若 ROIIC 高于资本成本则放大未来 EBIT 与现金流，但若回报不及成本，转固后折旧会反噬利润，扩产高峰期表现为 Owner Earnings 高于账面 FCF。">
<svg viewBox="0 0 860 320" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e03-sp-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
    <marker id="e03-sp-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="320" rx="8" fill="#fafaf6"/>
  <!-- Left Card: Single CapEx Outflow -->
  <rect x="14" y="58" width="216" height="204" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <rect x="26" y="72" width="192" height="26" rx="5" fill="#eaedf0"/>
  <text x="122" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="#2c4459">现金流量表 · 投资活动</text>
  <text x="122" y="122" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">同一笔现金流出的</text>
  <text x="122" y="143" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">资本开支（CapEx）</text>
  <line x1="28" y1="158" x2="216" y2="158" stroke="#eaede5"/>
  <text x="122" y="180" text-anchor="middle" font-size="11" fill="#5d6b64">财报只合并披露一行，</text>
  <text x="122" y="198" text-anchor="middle" font-size="11" fill="#5d6b64">不区分“保旧”还是“建新”。</text>
  <text x="122" y="224" text-anchor="middle" font-size="10.5" font-weight="600" fill="#8d5520">付款当天现金全额流出</text>
  <text x="122" y="242" text-anchor="middle" font-size="10.5" fill="#66736c">却拆向两种相反经济结果</text>
  <!-- Split Bezier Arrows -->
  <path d="M230,124 C258,124 256,83 278,83" fill="none" stroke="#a8743f" stroke-width="2.1" marker-end="url(#e03-sp-amber)"/>
  <path d="M230,196 C258,196 256,237 278,237" fill="none" stroke="#23695a" stroke-width="2.1" marker-end="url(#e03-sp-sage)"/>
  <!-- Top Amber Lane: Maintenance CapEx -->
  <rect x="282" y="14" width="266" height="138" rx="10" fill="#ffffff" stroke="#dfb98d" stroke-width="1.3"/>
  <rect x="294" y="25" width="242" height="25" rx="5" fill="#f4e5d2"/>
  <text x="303" y="42" font-size="12.5" font-weight="700" fill="#8d5520">维持性 CapEx</text>
  <text x="527" y="42" text-anchor="end" font-size="10.5" font-weight="600" fill="#8d5520">补磨损 · 不增收入</text>
  <text x="296" y="71" font-size="11.5" fill="#2e3c36">仅补旧产能磨损，替换老化设备与</text>
  <text x="296" y="89" font-size="11.5" fill="#2e3c36">基站，原地守住现有销量与份额。</text>
  <line x1="296" y1="101" x2="534" y2="101" stroke="#f0e4d4"/>
  <text x="296" y="120" font-size="11" font-weight="700" fill="#8d5520">典型：AT&amp;T（T）FY25</text>
  <text x="296" y="138" font-size="11" fill="#5d6b64">CapEx / D&amp;A ＝ 1.00×，多用于网络更新</text>
  <path d="M548,83 L588,83" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#e03-sp-amber)"/>
  <rect x="592" y="14" width="254" height="138" rx="10" fill="#fdf8f0" stroke="#e4c59e" stroke-width="1.2"/>
  <rect x="604" y="25" width="230" height="25" rx="5" fill="#f4e5d2"/>
  <text x="719" y="42" text-anchor="middle" font-size="12" font-weight="700" fill="#8d5520">等价于真实刚性成本</text>
  <text x="606" y="71" font-size="11.5" font-weight="600" fill="#1d2a25">• 必须从 Owner Earnings 扣除</text>
  <text x="606" y="91" font-size="11" fill="#5d6b64">• 推迟投入会导致产能老化、丢份额</text>
  <text x="606" y="110" font-size="11" fill="#5d6b64">• 直接拿 EBITDA 估值会系统性高估</text>
  <text x="606" y="135" font-size="10.5" font-weight="600" fill="#8d5520">结果：Owner Earnings 与 FCF 双低</text>
  <!-- Bottom Sage Lane: Growth CapEx -->
  <rect x="282" y="168" width="266" height="138" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.3"/>
  <rect x="294" y="179" width="242" height="25" rx="5" fill="#e2ede7"/>
  <text x="303" y="196" font-size="12.5" font-weight="700" fill="#1f5c4e">扩张性 CapEx</text>
  <text x="527" y="196" text-anchor="end" font-size="10.5" font-weight="600" fill="#1f5c4e">建增量 · 争未来回报</text>
  <text x="296" y="225" font-size="11.5" fill="#2e3c36">新建增量产能、AI 机房与先进产线，</text>
  <text x="296" y="243" font-size="11.5" fill="#2e3c36">为未来数年的需求提前锁定供给。</text>
  <line x1="296" y1="255" x2="534" y2="255" stroke="#e4eee8"/>
  <text x="296" y="274" font-size="11" font-weight="700" fill="#1f5c4e">典型：MSFT FY26 · TSMC FY25</text>
  <text x="296" y="292" font-size="11" fill="#5d6b64">CapEx / D&amp;A 分别达 3.01× 与 1.85×</text>
  <path d="M548,237 L588,237" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#e03-sp-sage)"/>
  <rect x="592" y="168" width="254" height="138" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.2"/>
  <rect x="604" y="179" width="230" height="25" rx="5" fill="#e2ede7"/>
  <text x="719" y="196" text-anchor="middle" font-size="12" font-weight="700" fill="#1f5c4e">短期压低 FCF · 检验 ROIIC</text>
  <text x="606" y="225" font-size="11.5" font-weight="600" fill="#1d2a25">• 建设期压低账面 FCF（非维持成本）</text>
  <text x="606" y="245" font-size="11" fill="#5d6b64">• 若 ROIIC ＞ WACC：放大 EBIT 与现金流</text>
  <text x="606" y="264" font-size="11" fill="#5d6b64">• 若回报不及成本：转固后折旧反噬利润</text>
  <text x="606" y="289" font-size="10.5" font-weight="600" fill="#1f5c4e">结果：Owner Earnings 高于账面 FCF</text>
</svg>
</div>
<figcaption>同一笔资本开支按用途分叉：维持性支出是刚性重置成本，扩张性支出是前置投资，最终成败取决于新产能的增量回报率（ROIIC）。</figcaption>
</figure>

既然财报不帮我们拆分，日常研究常常交叉核对四条线索来估算维持性支出：

1. **看低增长年份的下限**：找过去五到十年收入几乎停滞的年份，那时 CapEx 占收入与 D&A 的比例往往接近维持底线。
2. **核对真实产能是否增加**：若航空公司座位数或运营商用户数没怎么涨，CapEx 高于折旧多半来自通胀涨价，或是 4G 升 5G 这类不得不花的防御更新。
3. **拆读 10-K 与业绩会预算**：晶圆厂、云厂商与油气公司常在管理层讨论里说明，多少预算建新厂新算力、多少用于老厂运维。
4. **防备通胀拉大重置缺口**：会计折旧只按当年的历史采购价算；若十年来厂房与机台涨价三成，原地维持产能所需现金也会系统性高于折旧。

把所有公司统一归到 **EBITDA ＝ 100 M 美元**（暂设无债、税率 20%、营运资本净变动为 0），切换下方预设或拖动滑块，就能看清折旧占比、CapEx 倍率与扩张占比怎样拉开四把尺子——扩张够大时，账面 FCF 会直接跌破零轴：

<figure class="flow-figure e03-capex-lab" id="nb-e03-capex-lab" data-e03-capex>
<div class="ff-head"><p class="ff-title">互动推演器：同样 100 M 美元 EBITDA，四把盈利尺子为何天壤之别</p><span class="ff-sub">统一设定 EBITDA ＝ 100 · 无债（利息 0）· 税率 20% · Δ营运资本 ＝ 0</span></div>
<div class="e03-controls" hidden>
<div class="e03-presets"><button type="button" data-e03-preset="light" aria-pressed="false">轻资产成熟品牌（KO 型）</button><button type="button" data-e03-preset="expand" aria-pressed="true">重资产 AI 扩产期（MSFT·TSM 型）</button><button type="button" data-e03-preset="mature" aria-pressed="false">高折旧存量更新（电信·航空型）</button></div>
<div class="e03-sliders">
<div class="e03-srow"><label for="e03-in-da"><span>折旧占比 D&amp;A / EBITDA</span><output data-e03-out="da">20%</output></label><input id="e03-in-da" type="range" min="5" max="55" step="1" value="20" data-e03-in="da"></div>
<div class="e03-srow"><label for="e03-in-mult"><span>资本开支强度 CapEx / D&amp;A</span><output data-e03-out="mult">3.0×</output></label><input id="e03-in-mult" type="range" min="0.5" max="3.5" step="0.1" value="3.0" data-e03-in="mult"></div>
<div class="e03-srow"><label for="e03-in-growth"><span>扩张性 CapEx 占比</span><output data-e03-out="growth">70%</output></label><input id="e03-in-growth" type="range" min="0" max="85" step="5" value="70" data-e03-in="growth"></div>
</div>
</div>
<div class="e03-board business-exchange" aria-label="资本开支与四指标互动对照（假设 EBITDA 为 100 M 美元、无债、税率 20%、营运资本净变动 0）：一、轻资产成熟品牌（KO 型，D&A 占 8%、CapEx 为 D&A 的 1.8 倍、扩张占比 40%）：EBIT 为 92.0、CFO 为 81.6、维持性 CapEx 为 8.6、扩张性 CapEx 为 5.8，Owner Earnings 为 73.0、账面 FCF 为 67.2，四把尺子接近。二、默认展示的重资产 AI 扩产期（MSFT 或 TSMC 型，D&A 占 20%、CapEx 为 D&A 的 3.0 倍、扩张占比 70%）：EBIT 为 80.0、CFO 为 84.0、总 CapEx 为 60.0（维持 18.0 加扩张 42.0），Owner Earnings 仍达 66.0，但账面 FCF 被压低至 24.0（仅占 EBITDA 24%）。三、高折旧存量更新（电信或航空型，D&A 占 46%、CapEx 为 D&A 的 1.0 倍、扩张占比 15%）：EBIT 仅 54.0、CFO 为 89.2、维持性 CapEx 高达 39.1、扩张性仅 6.9，Owner Earnings 落至 50.1、账面 FCF 落至 43.2（尚未扣除高债务利息），EBITDA 严重高估可分配现金。">
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

切换三组预设会发现，同样的 100 M 美元 EBITDA 背后藏着截然不同的现金命运：轻资产企业里四把尺子彼此贴近；高折旧存量行业还没算债息，近半数 EBITDA 就被刚性维护吞掉；而重资本扩产期里，拉开 Owner Earnings 与账面 FCF 的，是提前砸向未来的扩张投入。

## 真实 SEC 财报对照：轻资产、存量更新与重资本扩产 {#nb-e03-sec-contrast}

回到 SEC 正式年报，把 **The Coca-Cola Company**（KO）、**AT&T Inc.**（T）与 **MSFT** 并排放到统一刻度下，前文的三种背离立刻在现实账本里现形：

<figure class="flow-figure e03-sec" id="nb-e03-sec-fig">
<div class="ff-head"><p class="ff-title">真实 SEC 10-K 对照：KO FY25 vs T FY25 vs MSFT FY26</p><span class="ff-sub">单位：M 美元 · 各公司柱长均以自身 EBITDA ＝ 100% 归一化</span></div>
<div class="e03-sgrid business-exchange" aria-label="三家美股真实 SEC 10-K 的 EBIT、EBITDA、CapEx 与 FCF 对照（M 美元）：一、Coca-Cola（KO，FY2025，轻资产成熟品牌）：收入 47,941、营业利润 13,762（利润率 28.7%）、D&A 1,050、EBITDA 14,812（30.9%）；CapEx 仅 2,112（占收入 4.4%、为 D&A 的 2.01 倍）；剔除一次性 6,069 fairlife 或有对价支付后 FCF 为 11,365（账面 GAAP FCF 5,296），正常化 FCF 占 EBITDA 高达 76.7%。二、AT&T（T，FY2025，高折旧存量更新）：收入 125,648、营业利润 24,162（19.2%）、D&A 高达 20,886、EBITDA 45,048（35.9%，表面利润率高于 KO）；CFO 40,284、CapEx 20,842（CapEx/D&A 恰为 1.00 倍）、利息费用 6,804，标准 FCF 19,442（仅占 EBITDA 43.2%），另在融资现金流支付 1,181 供应商融资款。三、Microsoft（MSFT，FY2026，重资本 AI 扩产）：收入 331,839、营业利润 155,237（46.8%）、折旧摊销及其他 38,534、EBITDA 193,771（58.4%）；CFO 182,935、CapEx 飙升至 115,948（占收入 34.9%、为 D&A 的 3.01 倍），账面 FCF 落至 66,987（仅占 EBITDA 34.6%）。">
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

<span data-text-versions id="nb-e03-text-sec-kot">先对照 **KO** 与 **T**，EBITDA 的错觉一目了然。只看 EBITDA 利润率，电信巨头（35.9%）甚至高于浓缩液品牌（30.9%）；可一旦扣除刚性网络更新与高额债息，T 的现金转化率被拦腰截断，轻资产的 KO 剔除一次性尾款后仍能留下近八成自由现金流<span data-text-detail>（FY2025 年报显示，KO 收入 47,941 M 美元、D&A 仅 10.50 亿美元、CapEx 21.12 亿美元，剔除 60.69 亿美元 fairlife 或有对价尾款后，每 1 美元 EBITDA 留下 0.77 美元 FCF，2026 财年 FCF 指引进一步看至 122 亿美元。T 收入 125,648 M 美元，当年 208.42 亿美元 CapEx 几乎与 208.86 亿美元 D&A 等额，外加 68.04 亿美元利息；若将记入融资现金流的 11.81 亿美元供应商融资付款算回设备支出，真实现金结余进一步降至 182.61 亿美元）</span>。[^ko-fy25]<sup>，</sup>[^att-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e03-text-sec-tsm">再把 **MSFT** 和晶圆代工龙头 **Taiwan Semiconductor Manufacturing Company Limited**（TSMC，NYSE：TSM）放进同一视野，就会发现另一个误区：MSFT 与 TSM 的 FCF / EBITDA 转化率都在三成多，表面上甚至低于 T，单凭这一条比率极易把三家公司混为一谈<span data-text-detail>（MSFT FY2026 的 FCF / EBITDA 为 34.6%，低于 T 的 43.2%。TSM FY2025 Form 20-F 录得净营收 38,091 亿新台币、营业利润 19,361 亿新台币、D&A 6,881 亿新台币、EBITDA 26,242 亿新台币，利润率 68.9%；在 12,724 亿新台币、即 1.85 倍于 D&A 的晶圆厂扩产支出后，标准 FCF 为 10,026 亿新台币，约合 319.6 亿美元，占 EBITDA 的 38.2%）</span>。[^msft-fy26]<sup>，</sup>[^tsmc-20f]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

三者的分水岭，在于资本开支到底流向哪里。T 收入仅增 2.7%，巨额投入大多用于守住存量网络，Owner Earnings 贴着偏低的 FCF 走；而 MSFT（全年收入增 18%）与 TSM（毛利率 59.9%）的高额支出重在新建算力与先进晶圆厂。这些产能两三年后陆续转固，会带来成倍放大的折旧账单，最终回报取决于投产后的利用率与定价权。

大型上市公司往往同时经营轻资产软件与重资产基建，分部资本开支与共同费用如何归集并表，由下一篇[《分部、共同成本与合并》](/zh/notebook/segments-shared-costs-consolidation/)接手；重资本扩张叠加大额举债时的现金低谷防线见[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)，Non-GAAP 口径下的 Adjusted EBITDA 修饰则留在[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)拆解。

<script src="/notebook/profit-capex/ui.js?v=20261127b" defer></script>

[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的利润表、现金流量表与分部业绩原件。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Note 1 固定资产折旧年限政策、FY24—FY26 三年现金流量表与 Note 6 Property and Equipment 附注。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)与 [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)（2026-02-20 提交），截至 2025-12-31 的三张主表与 Free Cash Flow 调节表。
[^att-10k]: AT&T Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm)，2026-02-09 提交 SEC，Consolidated Statements of Income、Cash Flows 与 Note 22 Supplier and Vendor Financing Programs。
[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company Limited，[FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)，2026-04-16 提交 SEC，Item 4 资本开支披露、合并利润表与现金流量表、Note 5 会计政策及 Note 15 Property, Plant and Equipment。
[^buffett-1986]: Warren Buffett，[1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html)，1987-02-27，Owner Earnings 原始公式与“现金流”谬误批驳。
[^buffett-2000]: Warren Buffett，[2000 年 Berkshire Hathaway 股东信](https://www.berkshirehathaway.com/2000ar/2000letter.html)，2001-02-28，FlightSafety 2.72 亿美元模拟器资本开支与 Full and Fair Reporting 一节“tooth fairy”原话。
[^munger-2003]: Warren Buffett & Charlie Munger，[2003 年 Berkshire Hathaway 股东大会下午场实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html)，2003-05-03，CNBC Berkshire Hathaway Archive 第 17 问。


## Sources
- [The Coca-Cola Company：FY2025 全年业绩与 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm): Coca-Cola 2025 财年（截至 2025 年 12 月 31 日，Form 10-K 于 2026 年 2 月 20 日提交）三张主表：净营业收入 47,941 M 美元、营业利润 13,762 M 美元、合并净利润 13,137 M 美元（归属股东 13,107）；因支付 6,069 M 美元 fairlife 或有对价尾款，GAAP 经营现金流为 7,408 M 美元，资本开支 −2,112 M 美元，现金股息 −8,779 M 美元；期末总资产 104,816、总负债 70,541、总权益 34,275。
- [Microsoft Corporation：FY2026 Q4 及全财年业绩公告与 Form 10-K（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm): Microsoft 2026 年 7 月 29 日披露之 2026 财年（截至 2026 年 6 月 30 日）三张主表：总收入 331,839 M 美元、营业利润 155,237 M 美元、净利润 133,749 M 美元；经营现金流 182,935 M 美元、固定资产资本开支 −115,948 M 美元、投资现金流 −139,500 M 美元、融资现金流 −52,546 M 美元；期末总资产 758,376 M 美元（固定资产净值 313,076、现金及等价物 20,935）、总负债 315,989、股东权益 442,387。
- [AT&T Inc.：FY2025 Form 10-K（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm): AT&T 2025 财年年报（2026 年 2 月 9 日提交 SEC）主表与 Note 22 附注：营业收入 125,648 M 美元、营业利润 24,162 M 美元、折旧与摊销 20,886 M 美元（EBITDA 45,048 M 美元，利润率 35.9%）、利息费用 6,804 M 美元、净利润 23,386 M 美元；经营现金流 40,284 M 美元、资本开支 20,842 M 美元（CapEx / D&A 约 1.00 倍），标准 FCF 为 19,442 M 美元；Note 22 另披露全年在融资现金流项下支付 1,181 M 美元供应商融资款（Vendor Financing）。
- [Warren Buffett：1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html): 1987 年 2 月 27 日发表。以收购 Scott Fetzer 的会计重估差异引出“所有者盈余”（Owner Earnings）定义：报告净利润加上折旧、折耗、摊销及其他非现金费用，减去企业为充分维持长期竞争地位与销量所需的年均资本开支及必要增量营运资本；并批驳只加回折旧摊销、不扣维持性资本开支的所谓“现金流”误区。
- [Warren Buffett：2000 年 Berkshire Hathaway 股东信《Full and Fair Reporting》](https://www.berkshirehathaway.com/2000ar/2000letter.html): 2001 年 2 月 28 日发表。以 FlightSafety 每年须投入与折旧相当的 2.72 亿美元更新飞行模拟器才能维持竞争地位为例说明折旧属于真实成本，并在“充分与公平披露”一节指出“References to EBITDA make us shudder — does management think the tooth fairy pays for capital expenditures?”。
- [Microsoft Corporation：FY2026 Form 10-K 附注与三年现金流表（截至 2026-06-30）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm): Microsoft FY2026 Form 10-K（2026 年 7 月 29 日提交 SEC）Note 1 会计政策、三年现金流量表与 Note 6 固定资产附注：FY2024 至 FY2026 固定资产资本开支依次为 44,477、64,551、115,948 M 美元，同期固定资产折旧费用为 152 亿、220 亿、343 亿美元（现金流量表折旧摊销及其他项为 20,958、29,433、38,534 M 美元）；服务器与网络设备折旧年限 2—6 年（期末原值 215,874 M 美元）、建筑与改良 5—15 年、内部使用软件 3 年；期末计入应付账款的未付固定资产采购达 267 亿美元，新数据中心建设资本承诺 346 亿美元。
- [Warren Buffett & Charlie Munger：2003 年 Berkshire Hathaway 股东大会下午场问答实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html): 2003 年 5 月 3 日 CNBC Berkshire Hathaway Archive 实录。Warren Buffett 指出折旧是最糟糕的一类真实成本（“reverse float”，现金在收入到来前就已先付出去，只是延迟记账），并点名电信业曾借 EBITDA 掩盖持续资本消耗；Charlie Munger 补充每当在演示材料中看到 EBITDA 时，都应直接替换为“bullshit earnings”。
- [Taiwan Semiconductor Manufacturing Company Limited：FY2025 Form 20-F（截至 2025-12-31）](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm): TSMC 2025 财年 Form 20-F（2026 年 4 月 16 日提交 SEC，IFRS 口径）：净营收 3,809,054 M 新台币（约 121,423 M 美元，毛利率 59.9%）、营业利润 1,936,092 M 新台币（61,718 M 美元）、折旧与摊销 688,096 M 新台币（折旧 679,684 加摊销 8,412）、经营现金流 2,274,976 M 新台币、资本开支 1,272,411 M 新台币（期末折算 40,561 M 美元，Item 4 按加权平均汇率折算 40,895 M 美元；2026 年指引 520—560 亿美元）；期末在建工程与安装中设备（EUI/CIP）达 1,518,996 M 新台币，占自用固定资产净值 41.2%，达预定可使用状态前不计提折旧，投用后机器设备按 5 年直线法折旧。

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
