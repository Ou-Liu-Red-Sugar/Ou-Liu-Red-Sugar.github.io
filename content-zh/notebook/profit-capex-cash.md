{
  "title": "利润、资本开支与现金",
  "description": "拆解资本化与费用化的会计分叉、折旧摊销的投产时滞，系统界定 EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）的计算桥、适用场景与失真陷阱；借互动推演器与 KO、T、MSFT、TSMC 四家公司真实 SEC 披露，把账面利润与可分配现金的落差讲透。",
  "layout": "entry",
  "notebookid": "zh-profit-capex-cash",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-profit-capex-cash"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127b">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

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

<figure class="flow-figure e03-lag" id="nb-e03-lag-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">从资本开支到折旧的四阶段时滞：机理与实证</p><div class="ff-switch" role="group" aria-label="切换视图" hidden><button type="button" data-ff-view-choice="stages" aria-pressed="true">四阶段时滞</button><button type="button" data-ff-view-choice="msft" aria-pressed="false">MSFT 三年爬坡</button><button type="button" data-ff-view-choice="tsm" aria-pressed="false">TSM 在建池</button></div></div>
<div data-ff-only="stages" class="business-exchange" aria-label="资本开支到折旧的四阶段路径：建设安装期现金大额流出、在建工程折旧为零；完工转固期起提折旧但产能爬坡；满产期摊薄固定折旧；存量稳态期利润与 FCF 收敛。">
<div class="e03-stages">
<div class="e03-stage" style="--e03-c:#a8743f"><em>阶段 1 · 建厂装机</em><strong>在建工程（CIP）</strong><p>现金按进度流出，达可使用状态前折旧为 0。</p></div>
<div class="e03-stage" style="--e03-c:#c06c3e"><em>阶段 2 · 完工转固</em><strong>投产起提折旧</strong><p>转固计提折旧，初期良率爬坡、利润率承压。</p></div>
<div class="e03-stage" style="--e03-c:#23695a"><em>阶段 3 · 产能释放</em><strong>满产与回流</strong><p>高利用率摊薄折旧，检验前置投入回报率。</p></div>
<div class="e03-stage" style="--e03-c:#5986a1"><em>阶段 4 · 存量周期</em><strong>更新替代稳态</strong><p>CapEx 向维持所需收敛，利润与 FCF 靠拢。</p></div>
</div>
</div>
<div data-ff-only="msft" hidden class="business-exchange" aria-label="MSFT FY2024 至 FY2026 固定资产 CapEx 与折旧爬坡（亿美元）：CapEx 分别为 445、646、1,159；折旧费用分别为 152、220、343，滞后明显。">
<div class="e03-pbox">
<div class="e03-phead"><strong>Microsoft（MSFT）三年 CapEx vs 折旧爬坡</strong><span>亿美元 · FY26 10-K</span></div>
<div class="e03-yr-rows">
<div class="e03-yr"><b>FY24</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:38.4%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:13.1%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>445</strong> / 折旧 152</div></div>
<div class="e03-yr"><b>FY25</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:55.7%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:19.0%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>646</strong> / 折旧 220</div></div>
<div class="e03-yr"><b>FY26</b><div class="e03-dual"><div class="e03-dbar"><i style="--w:100%;--c:#a8743f"></i></div><div class="e03-dbar"><i style="--w:29.6%;--c:#23695a"></i></div></div><div class="e03-yval"><strong>1,159</strong> / 折旧 343</div></div>
</div>
<div class="e03-leg">上条为固定资产 CapEx，下条为 Note 6 固定资产折旧；FY26 期末另有 267 亿美元已购设备尚挂在应付账款。</div>
</div>
</div>
<div data-ff-only="tsm" hidden class="business-exchange" aria-label="TSMC FY2025 在建工程蓄水池（M 新台币）：全年 CapEx 1,272,411（约 409 亿美元）、D&amp;A 688,096，期末在建及安装中设备高达 1,518,996，占自用固定资产净值 41.2%。">
<div class="e03-pbox">
<div class="e03-phead"><strong>TSMC（TSM）在建工程蓄水池</strong><span>FY25 20-F · M 新台币</span></div>
<div class="e03-tsm-stats">
<div class="e03-tsm-row"><span>全年 CapEx（约 409 亿美元）</span><b class="e03-neg">1,272,411</b></div>
<div class="e03-tsm-row"><span>全年折旧与摊销（D&amp;A）</span><b>688,096</b></div>
<div class="e03-tsm-row"><span>期末在建及安装中设备（EUI/CIP）</span><b class="e03-neg">1,518,996</b></div>
<div class="e03-tsm-row"><span>EUI/CIP 占自用固定资产净值</span><b class="e03-pos">41.2%</b></div>
</div>
<div class="e03-leg">逾四成固定资产净值尚在安装建设、未起提折旧；投用后晶圆机台按 5 年直线折旧，2026 年 CapEx 指引 520—560 亿美元。</div>
</div>
</div>
<figcaption>点击切换四阶段路径与 MSFT、TSM 实证。数据来自 MSFT FY2026 10-K 与 TSM FY2025 20-F。</figcaption>
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

<figure class="flow-figure e03-rulers" id="nb-e03-rulers-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">四把盈利尺子：MSFT FY2026 勾稽落差与适用边界</p><div class="ff-switch" role="group" aria-label="切换视角" hidden><button type="button" data-ff-view-choice="bridge" aria-pressed="true">MSFT 尺子落差</button><button type="button" data-ff-view-choice="guide" aria-pressed="false">四把尺子边界</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="bridge" aria-label="Microsoft（MSFT）FY2026 四把盈利尺子对照（亿美元）：EBITDA 1,938 亿（58.4%）、营业利润 EBIT 1,552 亿（46.8%）、经营现金流 CFO 1,829 亿，扣除 1,159 亿总资本开支后，账面自由现金流 FCF 落至 670 亿，仅占 EBITDA 的 34.6%。">
<svg viewBox="0 0 720 215" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="30" font-size="14" font-weight="700" fill="#22392f">MSFT FY2026：EBITDA 到 FCF 缩水三分之二</text>
  <text x="24" y="68" font-size="13.5" font-weight="700" fill="#3b5a70">EBITDA</text>
  <rect x="132" y="50" width="388" height="22" rx="4" fill="#6b8ea6"/>
  <text x="534" y="67" font-size="13.5" font-weight="700" fill="#3b5a70">1,938 亿（58.4%）</text>
  <text x="24" y="106" font-size="13.5" font-weight="700" fill="#23695a">EBIT</text>
  <rect x="132" y="88" width="310" height="22" rx="4" fill="#23695a"/>
  <text x="456" y="105" font-size="13.5" font-weight="700" fill="#23695a">1,552 亿（扣 D&amp;A 385）</text>
  <text x="24" y="144" font-size="13.5" font-weight="700" fill="#23695a">CFO</text>
  <rect x="132" y="126" width="366" height="22" rx="4" fill="#4f8b77"/>
  <text x="512" y="143" font-size="13.5" font-weight="700" fill="#23695a">1,829 亿（含预收与 SBC）</text>
  <text x="24" y="182" font-size="13.5" font-weight="700" fill="#8f6033">账面 FCF</text>
  <rect x="132" y="164" width="134" height="22" rx="4" fill="#a8743f"/>
  <text x="280" y="181" font-size="13.5" font-weight="700" fill="#8f6033">670 亿（扣 CapEx 1,159 · 仅占 34.6%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="guide" hidden aria-label="四把盈利尺子的核心定位与误用红线：EBIT 比较同业经营效率，须警惕折旧年限差异；EBITDA 剥离折旧看短期偿息，重资产切忌当现金流；Owner Earnings 扣维持性 CapEx 做估值，难点在于拆分口径；FCF 检验长期造血，扩产高峰期会被压低。">
<svg viewBox="0 0 720 205" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="28" font-size="12.5" font-weight="700" fill="#5e6d65">盈利尺子</text>
  <text x="196" y="28" font-size="12.5" font-weight="700" fill="#23695a">核心用途</text>
  <text x="456" y="28" font-size="12.5" font-weight="700" fill="#b5483a">失真陷阱</text>
  <line x1="24" y1="38" x2="696" y2="38" stroke="#dfe5dc"/>
  <text x="24" y="68" font-size="13.5" font-weight="700" fill="#23695a">① EBIT</text>
  <text x="196" y="68" font-size="13" fill="#22392f">比同业经营效率与 ROIC</text>
  <text x="456" y="68" font-size="13" fill="#8f6033">受折旧年限政策影响</text>
  <line x1="24" y1="84" x2="696" y2="84" stroke="#eef1ec"/>
  <text x="24" y="110" font-size="13.5" font-weight="700" fill="#3b5a70">② EBITDA</text>
  <text x="196" y="110" font-size="13" fill="#22392f">跨折旧政策看短期付息</text>
  <text x="456" y="110" font-size="13" fill="#b5483a">忽略重资产刚性 CapEx</text>
  <line x1="24" y1="126" x2="696" y2="126" stroke="#eef1ec"/>
  <text x="24" y="152" font-size="13.5" font-weight="700" fill="#23695a">③ Owner Earnings</text>
  <text x="196" y="152" font-size="13" fill="#22392f">扣维持 CapEx 做股权估值</text>
  <text x="456" y="152" font-size="13" fill="#8f6033">财报不直接拆分维持额</text>
  <line x1="24" y1="168" x2="696" y2="168" stroke="#eef1ec"/>
  <text x="24" y="194" font-size="13.5" font-weight="700" fill="#8f6033">④ 账面 FCF</text>
  <text x="196" y="194" font-size="13" fill="#22392f">3–5 年检验真金白银造血</text>
  <text x="456" y="194" font-size="13" fill="#8f6033">扩产单年易被人为压低</text>
</svg>
</div>
<figcaption>点击切换 MSFT FY2026 尺子落差与四把尺子边界。对比轻资产 KO，剔除一次性尾款后 FCF 占 EBITDA 高达 76.7%。</figcaption>
</figure>

<span data-text-versions id="nb-e03-text-rulers">跨国比较 FCF 时，还要留意会计准则对利息归类的差别：US GAAP 把实付利息计入经营现金流，美股常见的 CFO − CapEx 属于扣完债息的股权口径；采用 IFRS 的公司（如 TSMC）常将已付利息列在融资活动、已收利息列在投资活动，套用同一公式前应先核对现金流附表<span data-text-detail>（实务中另须区分两组口径：第一，严格定义下的 EBIT 为税前利润加回利息费用，当公司存在大额联营收益或公允价值重估损益时——如 KO FY2025 录得 20.31 亿美元联营收益，MSFT FY2026 录得 106.97 亿美元其他净收益——该口径会明显偏离 Operating Income，比较主业通常以 Operating Income 近似 EBIT。第二，无杠杆企业自由现金流 FCFF ＝ EBIT × (1 − 税率) ＋ D&A − CapEx − ΔNWC，供债权人与股东共享；而 CFO − CapEx 属于扣息后的股权口径。TSMC FY2025 现金流量表将已付利息 19,129 M 新台币列在融资活动、已收利息 98,955 M 新台币列在投资活动，与美股比对 FCF 须先对齐利息口径）</span>。[^tsmc-20f]<sup>，</sup>[^ko-fy25]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 维持性投入与扩张性投入：四把尺子怎样背离 {#nb-e03-capex-split}

现金流量表只报一行合并后的资本开支，可流出去的每一美元背后，经济含义可能截然相反。拆不开**维持性 CapEx** 与**扩张性 CapEx**，就很容易把同一份低 FCF 看反：

<figure class="flow-figure e03-capex-split" id="nb-e03-capex-split-fig">
<div class="ff-head"><p class="ff-title">同一笔资本开支的两条去向：维持性 vs 扩张性 CapEx</p><span class="ff-sub">财报只合报一行现金流出，经济属性与估值后果截然相反</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="资本开支分叉图：财报中同一行投资现金流出按经济属性分为维持性 CapEx（补磨损守份额，等价于刚性成本，如 T CapEx/D&amp;A 为 1.00 倍）与扩张性 CapEx（建增量产能争未来回报，建设期压低 FCF，成败看 ROIIC，如 MSFT 3.01 倍与 TSMC 1.85 倍）。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e03-c-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
    <marker id="e03-c-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
  </defs>
  <rect x="16" y="48" width="166" height="94" rx="10" fill="#fbfbf6" stroke="#cfd6ce" stroke-width="1.4"/>
  <text x="99" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#22392f">投资活动 CapEx</text>
  <text x="99" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">财报仅合报一行流出</text>
  <path d="M182 78 C216 78 218 52 248 52" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#e03-c-a)"/>
  <path d="M182 112 C216 112 218 138 248 138" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#e03-c-s)"/>
  <rect x="254" y="16" width="218" height="72" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.4"/>
  <text x="363" y="44" text-anchor="middle" font-size="13.5" font-weight="700" fill="#8f6033">维持性 CapEx（补磨损）</text>
  <text x="363" y="68" text-anchor="middle" font-size="12" fill="#5e6d65">如 T：CapEx/D&amp;A ＝ 1.00×</text>
  <rect x="254" y="102" width="218" height="72" rx="10" fill="#f3f8f4" stroke="#23695a" stroke-width="1.4"/>
  <text x="363" y="130" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">扩张性 CapEx（建增量）</text>
  <text x="363" y="154" text-anchor="middle" font-size="12" fill="#3c4c44">如 MSFT 3.01× · TSM 1.85×</text>
  <line x1="472" y1="52" x2="508" y2="52" stroke="#a8743f" stroke-width="2" marker-end="url(#e03-c-a)"/>
  <line x1="472" y1="138" x2="508" y2="138" stroke="#23695a" stroke-width="2" marker-end="url(#e03-c-s)"/>
  <rect x="514" y="16" width="190" height="72" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="609" y="44" text-anchor="middle" font-size="13" font-weight="700" fill="#b5483a">刚性重置成本</text>
  <text x="609" y="68" text-anchor="middle" font-size="12" fill="#5e6d65">必从 Owner Earnings 扣除</text>
  <rect x="514" y="102" width="190" height="72" rx="10" fill="#23695a"/>
  <text x="609" y="130" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">短期压低 FCF</text>
  <text x="609" y="154" text-anchor="middle" font-size="12" fill="#d7e8df">成败取决于未来 ROIIC</text>
</svg>
</div>
<figcaption>维持性支出推迟会导致产能老化、份额流失；扩张性支出在建设期压低 FCF，若投产回报低于资本成本则折旧反噬利润。</figcaption>
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

<figure class="flow-figure e03-sec" id="nb-e03-sec-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">真实 SEC 10-K 对照：EBITDA 到 FCF 的三种转化率</p><div class="ff-switch" role="group" aria-label="切换公司" hidden><button type="button" data-ff-view-choice="ko" aria-pressed="true">KO · 轻资产</button><button type="button" data-ff-view-choice="t" aria-pressed="false">AT&amp;T · 存量更新</button><button type="button" data-ff-view-choice="msft" aria-pressed="false">MSFT · AI 扩产</button></div></div>
<div data-ff-only="ko" class="business-exchange" aria-label="KO FY2025（M 美元）：EBITDA 14,812、EBIT 13,762、正常化 FCF 11,365，CapEx 仅占收入 4.4%（2,112），正常 FCF / EBITDA 高达 76.7%。">
<div class="e03-scard" style="--e03-c:#23695a">
<div class="e03-shead"><strong>KO · FY2025（单位：M 美元）</strong><span>轻资产成熟</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>14,812</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:92.9%;--c:#5986a1"></div></div><b>13,762</b></div>
<div class="e03-sbar-row"><span>正常 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:76.7%;--c:#23695a"></div></div><b>11,365</b></div>
</div>
<div class="e03-smeta"><div class="e03-smi"><span>CapEx / 收入</span><b class="e03-pos">4.4%（2,112）</b></div><div class="e03-smi"><span>正常 FCF / EBITDA</span><b class="e03-pos">76.7%</b></div></div>
<p class="e03-snote">D&amp;A 仅 1,050；因一次性支付 6,069 fairlife 尾款，当年 GAAP FCF 为 5,296，剔除后转化率仍近八成。</p>
</div>
</div>
<div data-ff-only="t" hidden class="business-exchange" aria-label="AT&amp;T（T）FY2025（M 美元）：EBITDA 45,048、EBIT 24,162、标准 FCF 19,442，CapEx/D&amp;A 恰为 1.00 倍（20,842），FCF / EBITDA 仅 43.2%。">
<div class="e03-scard" style="--e03-c:#a8743f">
<div class="e03-shead"><strong>T（AT&amp;T）· FY2025（单位：M 美元）</strong><span>重资产存量更新</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>45,048</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:53.6%;--c:#5986a1"></div></div><b>24,162</b></div>
<div class="e03-sbar-row"><span>标准 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:43.2%;--c:#22392f"></div></div><b>19,442</b></div>
</div>
<div class="e03-smeta"><div class="e03-smi"><span>CapEx / D&amp;A</span><b class="e03-neg">1.00×（20,842）</b></div><div class="e03-smi"><span>FCF / EBITDA</span><b class="e03-neg">43.2%</b></div></div>
<p class="e03-snote">EBITDA 利润率 35.9% 高于 KO，但 D&amp;A 占 20,886、利息占 6,804，且几乎全额重投网络维护（另付供应商融资 1,181）。</p>
</div>
</div>
<div data-ff-only="msft" hidden class="business-exchange" aria-label="MSFT FY2026（M 美元）：EBITDA 193,771、EBIT 155,237、账面 FCF 66,987，CapEx 115,948 为 D&amp;A 的 3.01 倍，FCF / EBITDA 落至 34.6%。">
<div class="e03-scard" style="--e03-c:#3c6e8c">
<div class="e03-shead"><strong>MSFT · FY2026（单位：M 美元）</strong><span>重资本 AI 扩产</span></div>
<div class="e03-sbars">
<div class="e03-sbar-row"><span>EBITDA</span><div class="e03-strack"><div class="e03-sfill" style="--w:100%;--c:#a8743f"></div></div><b>193,771</b></div>
<div class="e03-sbar-row"><span>EBIT</span><div class="e03-strack"><div class="e03-sfill" style="--w:80.1%;--c:#5986a1"></div></div><b>155,237</b></div>
<div class="e03-sbar-row"><span>账面 FCF</span><div class="e03-strack"><div class="e03-sfill" style="--w:34.6%;--c:#22392f"></div></div><b>66,987</b></div>
</div>
<div class="e03-smeta"><div class="e03-smi"><span>CapEx / D&amp;A</span><b class="e03-neg">3.01×（115,948）</b></div><div class="e03-smi"><span>FCF / EBITDA</span><b class="e03-neg">34.6%</b></div></div>
<p class="e03-snote">CapEx 占收入 34.9%，压低当年 FCF 甚至低于 FY25（71,611）；落差源于前瞻性算力扩产，营业利润同比仍增 21%。</p>
</div>
</div>
<figcaption>点击切换三家公司。EBITDA 按 GAAP Operating Income ＋ 现金流 D&amp;A 计算，标准 FCF ＝ CFO − 固定资产 CapEx。</figcaption>
</figure>

<span data-text-versions id="nb-e03-text-sec-kot">先对照 **KO** 与 **T**，EBITDA 的错觉一目了然。只看 EBITDA 利润率，电信巨头（35.9%）甚至高于浓缩液品牌（30.9%）；可一旦扣除刚性网络更新与高额债息，T 的现金转化率被拦腰截断，轻资产的 KO 剔除一次性尾款后仍能留下近八成自由现金流<span data-text-detail>（FY2025 年报显示，KO 收入 47,941 M 美元、D&A 仅 10.50 亿美元、CapEx 21.12 亿美元，剔除 60.69 亿美元 fairlife 或有对价尾款后，每 1 美元 EBITDA 留下 0.77 美元 FCF，2026 财年 FCF 指引进一步看至 122 亿美元。T 收入 125,648 M 美元，当年 208.42 亿美元 CapEx 几乎与 208.86 亿美元 D&A 等额，外加 68.04 亿美元利息；若将记入融资现金流的 11.81 亿美元供应商融资付款算回设备支出，真实现金结余进一步降至 182.61 亿美元）</span>。[^ko-fy25]<sup>，</sup>[^att-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e03-text-sec-tsm">再把 **MSFT** 和晶圆代工龙头 **Taiwan Semiconductor Manufacturing Company Limited**（TSMC，NYSE：TSM）放进同一视野，就会发现另一个误区：MSFT 与 TSM 的 FCF / EBITDA 转化率都在三成多，表面上甚至低于 T，单凭这一条比率极易把三家公司混为一谈<span data-text-detail>（MSFT FY2026 的 FCF / EBITDA 为 34.6%，低于 T 的 43.2%。TSM FY2025 Form 20-F 录得净营收 38,091 亿新台币、营业利润 19,361 亿新台币、D&A 6,881 亿新台币、EBITDA 26,242 亿新台币，利润率 68.9%；在 12,724 亿新台币、即 1.85 倍于 D&A 的晶圆厂扩产支出后，标准 FCF 为 10,026 亿新台币，约合 319.6 亿美元，占 EBITDA 的 38.2%）</span>。[^msft-fy26]<sup>，</sup>[^tsmc-20f]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

三者的分水岭，在于资本开支到底流向哪里。T 收入仅增 2.7%，巨额投入大多用于守住存量网络，Owner Earnings 贴着偏低的 FCF 走；而 MSFT（全年收入增 18%）与 TSM（毛利率 59.9%）的高额支出重在新建算力与先进晶圆厂。这些产能两三年后陆续转固，会带来成倍放大的折旧账单，最终回报取决于投产后的利用率与定价权。

走通三张报表、营运资本与资本开支自由现金流后，从收入到现金的财务底座已经合拢。下一篇[《成本结构与经营杠杆》](/zh/notebook/cost-structure-operating-leverage/)带着刚建立的折旧与利润表视角回到经营内部，拆解收入变动怎样经变动成本、固定成本与产能利用折出迥异的利润振幅；多业务分部合并、债务低谷与盈利质量清洗，则待产业与业务结构拆清后在第四卷[《分部、共同成本与合并》](/zh/notebook/segments-shared-costs-consolidation/)至[《盈利质量与可比口径》](/zh/notebook/earnings-quality-comparability/)接续展开。

<script src="/notebook/profit-capex/ui.js?v=20261127b" defer></script>

[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的利润表、现金流量表与分部业绩原件。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Note 1 固定资产折旧年限政策、FY24—FY26 三年现金流量表与 Note 6 Property and Equipment 附注。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)与 [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)（2026-02-20 提交），截至 2025-12-31 的三张主表与 Free Cash Flow 调节表。
[^att-10k]: AT&T Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm)，2026-02-09 提交 SEC，Consolidated Statements of Income、Cash Flows 与 Note 22 Supplier and Vendor Financing Programs。
[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company Limited，[FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)，2026-04-16 提交 SEC，Item 4 资本开支披露、合并利润表与现金流量表、Note 5 会计政策及 Note 15 Property, Plant and Equipment。
[^buffett-1986]: Warren Buffett，[1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html)，1987-02-27，Owner Earnings 原始公式与“现金流”谬误批驳。
[^buffett-2000]: Warren Buffett，[2000 年 Berkshire Hathaway 股东信](https://www.berkshirehathaway.com/2000ar/2000letter.html)，2001-02-28，FlightSafety 2.72 亿美元模拟器资本开支与 Full and Fair Reporting 一节“tooth fairy”原话。
[^munger-2003]: Warren Buffett & Charlie Munger，[2003 年 Berkshire Hathaway 股东大会下午场实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html)，2003-05-03，CNBC Berkshire Hathaway Archive 第 17 问。
