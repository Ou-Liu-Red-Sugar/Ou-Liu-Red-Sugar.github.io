# 报价、订单与实际成交

从 2015 年 8 月 24 日开盘几分钟里 IVV 的成交价出发，读懂报价、盘口与流动性，再看市价、限价和触发订单怎样决定成交，以及成交对手、交易成本和 T+1 交收。

Entry: zh-quotes-orders-execution | Node: NB-B02 | Language: zh | Editorial revision: 2026-11-26

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
以2015-08-24开盘IVV为开篇实例（SEC工作人员研究说明，2015-12）：IVV一度低于前日收盘20%以上，SPY NAV按实时成交价最多约−8%，SPY最低−7.8%，IVV约9:43恢复；同期ETP最优报价19美分内深度较对照期降九成以上，NYSE Arca重新开盘竞价卖方未匹配量94%来自市价单。研究说明不对原因作结论，正文只按盘口机制说明“可能”。再沿报价盘口、常见订单、成交对手与交易成本、交收四部分讲解。真实证券报价与简化订单簿保持各自身份；简化盘口美元/股，买价99.98/99.95/99.90，卖价100.02/100.05/100.10，厚数量100/200/500，薄数量10/20/50。厚盘口买入300股市价成交均价100.04、总额30012；600股市价均价100.07、总额60042；限价100.05买600股仅300股成交，余300等待。报价不足不假设市价订单被取消。Stop与Stop-limit触发和执行分开，Bracket父子关系与OCO撤单关系分开。以中点100.00为参照，300股买入的隐含成本为12美元，佣金和规费另计。T+1指交付时间，与当日回转交易可以同时存在；现金账户能否使用未交收卖款依账户规则。保证金、期货对冲与期间现金属于按需专题《保证金、对冲与期间现金》。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-b02-aug24-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/marketstructure/research/equity_market_volatility.pdf"
      },
      "required_unit": {
        "locator": "SEC Division of Trading and Markets 分析与研究办公室工作人员，Research Note: Equity Market Volatility on August 24, 2015，2015 年 12 月，PDF 第 1、3–5 页摘要（SPY 开盘与最低价、SPY 净值、开盘成交量与报价深度、市价单在 NYSE Arca 重新开盘竞价中的占比）与第 16 页（IVV 最低价及 9:43 前后恢复）。",
        "scope": "SEC Division of Trading and Markets 分析与研究办公室工作人员，Research Note: Equity Market Volatility on August 24, 2015，2015 年 12 月，PDF 第 1、3–5 页摘要（SPY 开盘与最低价、SPY 净值、开盘成交量与报价深度、市价单在 NYSE Arca 重新开盘竞价中的占比）与第 16 页（IVV 最低价及 9:43 前后恢复）。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Research Note: Equity Market Volatility on August 24, 2015",
      "authors": [
        "SEC Division of Trading and Markets"
      ],
      "version": "2015 年 12 月；2026-10-12 读取"
    },
    {
      "source_id": "nb-b02-quotes-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.nasdaq.com/articles/why-real-time-data-matters-when-trading-stocks"
      },
      "required_unit": {
        "locator": "Nasdaq：Why Real-Time Data Matters When Trading Stocks，2024-03-25，Last、Bid、Ask、Size 和 Trading Volume。正文数值盘口为独立构造的简化模型。",
        "scope": "Nasdaq：Why Real-Time Data Matters When Trading Stocks，2024-03-25，Last、Bid、Ask、Size 和 Trading Volume。正文数值盘口为独立构造的简化模型。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Nasdaq：Why Real-Time Data Matters When Trading Stocks",
      "authors": [
        "Nasdaq"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-orders-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders"
      },
      "required_unit": {
        "locator": "SEC Investor.gov：Types of Orders，市价、限价和买卖方向的定义。",
        "scope": "SEC Investor.gov：Types of Orders，市价、限价和买卖方向的定义。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "SEC Investor.gov：Types of Orders",
      "authors": [
        "SEC Investor.gov"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-liquidity-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investors.interactivebrokers.com/en/index.php?f=936"
      },
      "required_unit": {
        "locator": "IBKR：NASDAQ/Island Exchange Fees，Notes 1–2 关于添加和消耗流动性的说明；本文不采用该页费率。",
        "scope": "IBKR：NASDAQ/Island Exchange Fees，Notes 1–2 关于添加和消耗流动性的说明；本文不采用该页费率。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "IBKR：NASDAQ/Island Exchange Fees",
      "authors": [
        "IBKR"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-time-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.finra.org/investors/insights/time-parameters-qualifiers-stock-orders"
      },
      "required_unit": {
        "locator": "FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders，2024-07-17 更新，Day、GTC、IOC 与 FOK，以及订单路由。",
        "scope": "FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders，2024-07-17 更新，Day、GTC、IOC 与 FOK，以及订单路由。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders",
      "authors": [
        "FINRA"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-stop-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/files/trading101basics.pdf"
      },
      "required_unit": {
        "locator": "SEC：Trading Basics，2011-03，第 2 页，Stop 和 Stop-limit 的触发与成交区别；正文跳价路径为简化示意。",
        "scope": "SEC：Trading Basics，2011-03，第 2 页，Stop 和 Stop-limit 的触发与成交区别；正文跳价路径为简化示意。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "SEC：Trading Basics",
      "authors": [
        "SEC"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-linked-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.schwab.com/learn/story/how-to-use-advanced-stock-order-types"
      },
      "required_unit": {
        "locator": "Charles Schwab：How to Use Advanced Stock Order Types，2025-05-21，OCO、Bracket 与 Trailing stop。",
        "scope": "Charles Schwab：How to Use Advanced Stock Order Types，2025-05-21，OCO、Bracket 与 Trailing stop。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Charles Schwab：How to Use Advanced Stock Order Types",
      "authors": [
        "Charles Schwab"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-makers-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.citadelsecurities.com/what-we-do/equities/"
      },
      "required_unit": {
        "locator": "Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。",
        "scope": "Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Citadel Securities：Equities",
      "authors": [
        "Citadel Securities"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-b02-makers-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/answers/market.htm"
      },
      "required_unit": {
        "locator": "Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。",
        "scope": "Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "SEC：Market Centers — Buying and Selling Stock",
      "authors": [
        "SEC"
      ],
      "version": "本篇核对日期：2026-09-26；资料时点见正文脚注"
    },
    {
      "source_id": "nb-a02-source-settlement",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      },
      "required_unit": {
        "locator": "SEC：New “T+1” Settlement Cycle – What Investors Need To Know，2024-03-27，What is Settlement?",
        "scope": "SEC：New “T+1” Settlement Cycle – What Investors Need To Know，2024-03-27，What is Settlement?",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "SEC：New T+1 Settlement Cycle – What Investors Need To Know",
      "authors": [
        "SEC Office of Investor Education and Advocacy"
      ],
      "version": "本篇实际阅读日期：2026-09-24"
    },
    {
      "source_id": "nb-b03-cash-account-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/trading/faqs-about-account"
      },
      "required_unit": {
        "locator": "Fidelity：About Your Account，现金账户已交收资金与可提款余额。",
        "scope": "Fidelity：About Your Account，现金账户已交收资金与可提款余额。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Fidelity：About Your Account",
      "authors": [
        "Fidelity"
      ],
      "version": "本篇核对日期：2026-09-26；各输入时点及采用范围见正文"
    },
    {
      "source_id": "nb-b03-cash-account-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/trading/faqs-trading-restrictions"
      },
      "required_unit": {
        "locator": "Fidelity：Trading Restrictions，现金账户用未交收卖款交易的限制。",
        "scope": "Fidelity：Trading Restrictions，现金账户用未交收卖款交易的限制。",
        "purpose": "核对本篇报价、订单、交易成本及交收的实际采用内容。"
      },
      "title": "Trading Restrictions",
      "authors": [
        "Trading Restrictions"
      ],
      "version": "本篇核对日期：2026-09-26；各输入时点及采用范围见正文"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
[《指数、基金与 ETF》](/zh/notebook/indices-funds-etfs/)里默认那 10,000 美元按一个价格买到了 VOO；真到下单那一刻，实际成交价还要看市场上有谁愿意交易、愿意出什么价。2015 年 8 月 24 日美股开盘后的几分钟里，和 VOO 跟踪同一个指数的 iShares Core S&P 500 ETF（IVV）一度比前一个交易日的收盘价低了 20% 以上；同一时段，按成分股实时成交价计算，SPDR S&P 500 ETF Trust（SPY）的净值最多只跌了约 8%，SPY 本身的最低价也只比前一日收盘低 7.8%。到了 9:43 左右，IVV 便回到了与其他 S&P 500 产品一致的价格。[^aug24]

<figure class="flow-figure" id="nb-b02-aug24">
<div class="ff-head"><p class="ff-title">同一组股票，开盘几分钟里的最低点</p><span class="ff-sub">2015 年 8 月 24 日 · 相对前一交易日收盘</span></div>
<div class="ff-bars business-exchange" aria-label="2015 年 8 月 24 日开盘后几分钟，相对 8 月 21 日收盘：按成分股实时成交价计算的 SPY 净值最多下跌约 8%；SPY 在 9:30 开盘时低 5.2%，9:35 最低低 7.8%；IVV 最低时低 20% 以上，9:43 左右回到与其他 S&P 500 产品一致的价格。">
<span class="fb-name">SPY 净值<small>成分股实时价值</small></span><span class="fb-bar"><i style="--w:40%"></i></span><span class="fb-val">约 −8%</span>
<span class="fb-name">SPY<small>9:35 最低</small></span><span class="fb-bar"><i style="--w:39%"></i></span><span class="fb-val">−7.8%</span>
<span class="fb-name">IVV<small>9:43 左右恢复</small></span><span class="fb-bar"><i class="fb-cash" style="--w:100%"></i></span><span class="fb-val">−20% 以下</span>
</div>
<figcaption>三者都对应 S&P 500 的成分股。IVV 的数值按研究说明的“超过 20%”以 20% 绘出；SPY 净值按成分股的实时成交价计算。</figcaption>
</figure>

IVV 持有的股票并没有跌掉五分之一，可这几分钟里卖出 IVV 的投资者，成交价却可能低到这个水平。<span data-text-versions id="nb-b02-text-7">SEC 工作人员的研究说明记录了当时同时出现的两个条件：开盘后成交量远高于平时，涌入的大量卖单对前一日的价格并不敏感；与此同时，ETP 在最优报价附近可见的挂单数量，比平时少了九成以上<span data-text-detail>（挂单数量按最优报价及其 19 美分以内的报价深度，与 7 月 27 日至 8 月 21 日的对照期比较；ETP 指 ETF 等交易所交易产品。研究说明只提供数据，不对当天波动的原因作出结论）</span>。[^aug24]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 当想卖的数量很大、愿意接手的报价又稀少时，成交价就可能顺着买方报价一路往下走。

## 报价、盘口与流动性 {#nb-b02-quotes}

在交易软件里打开 VOO 或 IVV 的行情，除了走势曲线，还会看到 Last、Bid 和 Ask 这几个字段。Last 是最近一笔已经完成的成交价；Bid 是当前买方报出的最高买价，Ask 则是卖方报出的最低卖价。准备立即买入时，先要看卖方愿意以什么价格卖出；准备立即卖出时，就得看买方最高愿意出到多少。[^quotes]

下面换一只假设股票，把这几个字段放到同一条价格轴上：

<figure class="flow-figure quote-line g2-quote-line" id="nb-b02-quote-line">
<div class="ff-head"><p class="ff-title">Last、Bid 与 Ask 的位置（示意）</p><span class="ff-sub">价格：美元／股</span></div>
<div class="ql-axis business-exchange" aria-label="假设股票的最新成交价 Last 为 100.00；最优买价 Bid 为 99.98，买方在这一档愿意买入 100 股；最优卖价 Ask 为 100.02，卖方在这一档愿意卖出 100 股。买卖价差为 0.04。">
<span class="ql-spread"><span>买卖价差 0.04</span></span>
<div class="ql-mark ql-bid" style="--x:25%"><div class="ql-top"><span class="ql-key">Bid 最优买价</span><strong>99.98</strong></div><div class="ql-bottom"><small>买方愿意买入 100 股</small></div></div>
<div class="ql-mark ql-last" style="--x:50%"><div class="ql-top"><span class="ql-key">Last 最新成交</span><strong>100.00</strong></div></div>
<div class="ql-mark ql-ask" style="--x:75%"><div class="ql-top"><span class="ql-key">Ask 最优卖价</span><strong>100.02</strong></div><div class="ql-bottom"><small>卖方愿意卖出 100 股</small></div></div>
</div>
<p class="ql-uses"><span><strong>立即卖出</strong>：先看 Bid，买方最多出到 99.98</span><span><strong>立即买入</strong>：先看 Ask，卖方最少要 100.02</span></p>
</figure>

这里的买卖价差是 0.04 美元。虽然上一笔交易发生在 100 美元，接下来愿意卖出的那 100 股却挂在 100.02 美元，所以最新成交价替我们定不了下一笔买入的价格。8 月 24 日开盘时，IVV 前一日的收盘价同样说明不了几分钟后卖出能拿到多少。

把报价继续展开，还能看到其他价位上的挂单，合起来称为**订单簿**，交易界面里也常把这部分叫作盘口。100.02 美元处有 100 股可卖，100.05 美元处还有 200 股，再往上往往还挂着更多卖量。这么一来，买 50 股和买 300 股面对的就已经是不同的成交过程：前者在最优一档就能全部买齐，后者还得继续吃掉后面几档的卖量。

想买或想卖一定数量的证券时，能不能很快按接近眼前的报价成交，衡量的就是市场的**流动性**。一般而言，买卖价差窄、盘口附近挂着的数量厚，稍大一点的订单也容易顺畅成交；可要是碰上很薄的盘口，为了凑够数量，就得一路去吃更远档位的报价。实际成交价偏离下单时参照价格的那截差距，平时就叫**滑点**——买得比预想贵、卖得比预想便宜，都是碰上了不利的滑点。8 月 24 日开盘时 ETP 的可见挂单少了九成以上，大量卖单撞上远比平时薄的盘口，按这个机制，成交价便可能偏离到开头看到的程度。

<span data-text-versions id="nb-b02-text-1">盘口本身也在不断变化。新的限价单送进来，或者原有挂单被成交、撤回，都会立刻改变眼下可交易的数量。因此读盘口时，要把价格、数量和时点放在一起看：成交量记录的是一段时间内已经成交了多少，市场深度则描述不同价位上当前可见的挂单量<span data-text-detail>（可见盘口的覆盖范围取决于行情来源；单一交易场所的深度不等于所有场所的总量，隐藏或储备数量也未必全部显示。行情延迟时，页面上的那一档还可能已经发生变化）</span>。哪怕一笔较大的限价买单正挂在簿中，增加了当时的可见买量，它之后仍可能被成交、修改或撤回，不能单凭这一档数量就断定价格一定会守在这里。[^quotes]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 常见订单与挂单结构 {#nb-b02-orders}

下单时，我们要给出自己的条件：买多少，愿意付到什么价格，以及愿意等多久。**市价单**直接按当前可执行的报价寻求成交；**限价单**则先划定价格范围，买入限价规定最高愿意支付的价格，卖出限价规定最低愿意接受的价格。[^orders]

下面把买卖两侧各展开三档，并用同一标尺的深度条画出各档挂单的厚薄与本次吃掉的比例。先在厚盘口里比较市价买入 50、300、600 股的成交均价，再拿同样的 50 股对比厚盘口与薄盘口；切到限价单以后，还可以看价格上限会留下多少未成交数量。每次比较都从同一组原始挂单重新开始。

<figure class="trade-figure" id="nb-b02-order-book" data-trade-demo>
<div class="trade-heading"><h3>盘口深度与逐档成交</h3><span class="trade-kicker">价格：美元 / 股 · 数量：股 · 深度条满格 = 500 股</span></div>
<div class="trade-presets" data-trade-presets hidden><span class="trade-presets-label">常用对比：</span><button type="button" data-trade-preset="thick-300" aria-pressed="true">厚盘口买 300 股</button><button type="button" data-trade-preset="thick-600" aria-pressed="false">厚盘口买 600 股</button><button type="button" data-trade-preset="thin-50" aria-pressed="false">薄盘口买 50 股</button><button type="button" data-trade-preset="limit-600" aria-pressed="false">限价 100.05 买 600 股</button></div>
<form class="trade-form" data-trade-form hidden>
<div class="trade-fields">
<label>方向<select name="direction"><option value="buy" selected>买入</option><option value="sell">卖出</option></select></label>
<label>数量（股）<input name="quantity" type="number" min="1" max="1000000" step="1" value="300" required inputmode="numeric"></label>
<label>订单类型<select name="type"><option value="market" selected>市价单</option><option value="limit">限价单</option></select></label>
<label>限价（美元）<input name="limit" type="number" min="0.01" max="1000000" step="0.01" value="100.05" required inputmode="decimal" disabled></label>
<label>盘口深度<select name="depth"><option value="thick" selected>厚盘口</option><option value="thin">薄盘口</option></select></label>
<div class="trade-actions"><button type="submit">执行</button><button type="button" data-trade-reset>重置</button></div>
</div>
<p class="trade-form-hint" data-trade-hint role="status">每次执行都从原始盘口开始比较。</p>
</form>
<div class="trade-book-head"><strong data-trade-order-label>厚盘口 · 市价买入 300 股</strong><div class="trade-depth-legend"><span><i class="tdl-orig"></i>原有挂单</span><span><i class="tdl-fill-bid"></i>买盘成交</span><span><i class="tdl-fill-ask"></i>卖盘成交</span></div></div>
<div class="trade-books business-exchange" aria-label="默认情形：厚盘口下市价买入 300 股。买方挂单 99.98、99.95、99.90 分别有 100、200、500 股，均未成交。卖方挂单 100.02 的 100 股与 100.05 的 200 股全部成交，100.10 的 500 股剩余。成交总额 30,012.00 美元，成交均价 100.04 美元，比最优卖价 100.02 美元每股高出 0.02 美元，共多付 6.00 美元。">
<div class="trade-book" data-trade-side="bid"><h4>买方报价 · 卖出时依次成交</h4><table aria-label="买方报价、深度条与本次成交"><thead><tr><th scope="col">报价</th><th scope="col">挂单深度</th><th scope="col">原有</th><th scope="col">成交</th><th scope="col">剩余</th></tr></thead><tbody><tr><td>99.98</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:20.0%"></i><i class="trade-depth-fill is-zero" style="--fill:0.0%"></i></span></td><td>100</td><td>0</td><td>100</td></tr><tr><td>99.95</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:40.0%"></i><i class="trade-depth-fill is-zero" style="--fill:0.0%"></i></span></td><td>200</td><td>0</td><td>200</td></tr><tr><td>99.90</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:100.0%"></i><i class="trade-depth-fill is-zero" style="--fill:0.0%"></i></span></td><td>500</td><td>0</td><td>500</td></tr></tbody></table></div>
<div class="trade-book" data-trade-side="ask"><h4>卖方报价 · 买入时依次成交</h4><table aria-label="卖方报价、深度条与本次成交"><thead><tr><th scope="col">报价</th><th scope="col">挂单深度</th><th scope="col">原有</th><th scope="col">成交</th><th scope="col">剩余</th></tr></thead><tbody><tr class="is-filled"><td>100.02</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:20.0%"></i><i class="trade-depth-fill" style="--fill:20.0%"></i></span></td><td>100</td><td>100</td><td>0</td></tr><tr class="is-filled"><td>100.05</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:40.0%"></i><i class="trade-depth-fill" style="--fill:40.0%"></i></span></td><td>200</td><td>200</td><td>0</td></tr><tr><td>100.10</td><td><span class="trade-depth-track" aria-hidden="true"><i class="trade-depth-orig" style="--orig:100.0%"></i><i class="trade-depth-fill is-zero" style="--fill:0.0%"></i></span></td><td>500</td><td>0</td><td>500</td></tr></tbody></table></div>
</div>
<dl class="trade-results"><div><dt>成交数量</dt><dd data-trade-filled>300 股</dd></div><div><dt>成交总额</dt><dd data-trade-amount>30,012.00</dd></div><div><dt>成交均价</dt><dd data-trade-average>100.04</dd></div><div><dt>未成交</dt><dd data-trade-unfilled>0 股</dd></div></dl>
<div class="trade-slippage" data-trade-slippage><span class="trade-slippage-main" data-trade-slippage-main>最优卖价 100.02 → 逐档均价 100.04（每股滑点 +0.02 美元）</span><span class="trade-slippage-cost" data-trade-slippage-cost>比最优档多付 6.00 美元</span></div>
<div class="trade-foot-row"><p class="trade-status" data-trade-status role="status">已在显示的报价中成交全部 300 股。</p><p class="trade-calculation" data-trade-calculation>100 × 100.02 + 200 × 100.05 = 30,012.00 美元</p></div>
<figcaption>厚盘口各档为 100、200、500 股，薄盘口缩为 10、20、50 股，深度条均以 500 股为满格直观对照厚薄；按价格优先撮合，忽略费用及期间新增、撤回的报价。限价单未成交部分等待后续报价。</figcaption>
</figure>
<!-- /B02:book -->

市价买入 300 股时，订单先吃掉 100.02 美元处的 100 股，再吃掉 100.05 美元处的 200 股，总金额 30,012 美元，平均成交价落在 100.04 美元，比最优卖价高出 0.02 美元。把数量加大到 600 股，还得继续吃到 100.10 美元处的 300 股，平均成交价随之升至 100.07 美元。两笔订单下单前看到的是同一个最优卖价，最终付出的均价却不同。

<span data-text-versions id="nb-b02-text-2">现在仍买 600 股，但把买入限价设在 100.05 美元。前两档共 300 股满足条件，可以立刻成交；100.10 美元超过了我们的价格上限，剩余 300 股便留在盘口里继续等待。这里的限价 100.05 美元是我们愿意接受的最高价，已成交的部分仍分别按 100.02 和 100.05 美元结算<span data-text-detail>（图中按价格从优到次逐档撮合，处理过程中没有新订单或撤单，也不计费用。平均成交价等于各档成交金额之和除以已成交股数；超过所显示档位的市价订单余量，其后续结果留待更多报价，不能据这三档推定整笔成交结果）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

在这个例子里，限价单刚送进去就立刻成交了一半。当买入限价已经够得着眼前的卖价，订单会直接吃掉盘口上现成的卖单，这叫消耗流动性；而价格还没谈拢、挂进盘口等别人来成交的那一半，则是在给市场提供流动性。同一笔限价单拆出来的两截，先后起到了两种相反的作用。[^liquidity]

市价单只要求成交、不设价格底线，盘口变薄时便会一档接一档地向更差的价格滑过去。8 月 24 日，不少证券因价格波动过大被暂停交易；NYSE Arca 在暂停后重新开盘的集合竞价里，卖方未能匹配的数量有 94% 来自市价单。[^aug24] 换成限价卖单，成交价至少不会低于设定的价格，代价则是市场价格回不到那个位置就卖不出去。

<span data-text-versions id="nb-b02-text-3">剩下的数量还可以等多久，取决于订单的有效期。Day 通常表示当日有效，当天收盘后未成交部分自动失效；GTC 则允许订单跨交易日继续保留，直到成交、撤销或达到券商规定的期限<span data-text-detail>（是否覆盖盘前、盘后交易需要另看时段设置。IOC 要求立即成交可执行部分，并取消剩余数量；FOK 则要求立即全部成交，否则不成交。它们改变的是执行条件，不改变买入限价或卖出限价的方向）</span>。[^time]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

如果愿意等价格回落后分批买入，也可以把总数量拆成几笔不同价位的限价单。例如计划买入 300 股，分别在 99、98 和 97 美元各挂 100 股买单，就形成了常见的分层挂单结构。价格先回到 99 美元、只成交第一笔时，手里持有的是 100 股，另外 200 股仍在等待；要是市场随后转头上涨，剩下的买单没能成交，最终持仓也就停在实际买到的 100 股。

已经持有股票以后，还可以预先约定条件：当价格跌到某个位置，就启动卖出订单。**止损市价单**在达到触发条件后转为市价单，**止损限价单**则转为限价单。前者触发后直接寻求按市价卖出，后者还要求卖价满足限价下限，所以哪怕两笔单子设了同一个止损触发价，接下来的成交结果也可能截然不同。[^stop]

<figure class="trade-figure" id="nb-b02-stop-orders">
<div class="trade-heading"><h3>触发价与成交价</h3><span class="trade-kicker">持仓卖出 · 价格单位：美元 / 股</span></div>
<svg class="trade-path business-exchange" viewBox="0 0 560 212" role="img" aria-labelledby="nb-b02-stop-title nb-b02-stop-desc" aria-label="价格从 100 跌到 96，再直接跳到 94，越过 95 的止损触发位。触发后，止损市价单可在 94 美元的买单成交；止损限价单因设了 94.50 美元的卖出下限，高于眼前的 94 美元买价，继续等待后续报价。"><title id="nb-b02-stop-title">价格从 100 跌到 96，再跳到 94，跨过 95 的触发价。</title><desc id="nb-b02-stop-desc">前两笔价格未触发止损；下一笔跳价到 94，直接跳过 95 并触发止损。右侧标出止损限价单的 94.50 下限高于眼前 94.00 买价。</desc><rect class="trade-zone-trigger" x="16" y="140" width="528" height="44" rx="4"></rect><line class="trade-grid-line" x1="16" y1="40" x2="544" y2="40"></line><line class="trade-grid-line" x1="16" y1="120" x2="544" y2="120"></line><line class="trade-trigger" x1="16" y1="140" x2="544" y2="140"></line><text class="trade-trigger-label" x="20" y="132">95.00 止损触发线</text><path class="trade-path-line" d="M 76 40 L 224 120"></path><path class="trade-path-gap" d="M 224 120 L 370 160"></path><circle class="trade-path-skip" cx="297" cy="140" r="4.5"></circle><text class="trade-skip-label" x="308" y="129">跳价越过 95（无成交）</text><line class="trade-limit-line" x1="384" y1="150" x2="438" y2="150"></line><text class="trade-limit-label" x="444" y="154">限价下限 94.50</text><line class="trade-bid-line" x1="378" y1="160" x2="438" y2="171"></line><text class="trade-skip-label" x="444" y="175">眼前买价 94.00</text><circle class="trade-path-dot" cx="76" cy="40" r="5.5"></circle><circle class="trade-path-dot" cx="224" cy="120" r="5.5"></circle><circle class="trade-path-last" cx="370" cy="160" r="6.5"></circle><text class="trade-price-label" x="76" y="26" text-anchor="middle">100</text><text class="trade-price-label" x="224" y="106" text-anchor="middle">96</text><text class="trade-price-last" x="362" y="181" text-anchor="middle">94</text><text class="trade-stage-label" x="76" y="203" text-anchor="middle">第 1 笔 · 起点</text><text class="trade-stage-label" x="224" y="203" text-anchor="middle">第 2 笔 · 未触发</text><text class="trade-stage-label" x="370" y="203" text-anchor="middle">第 3 笔 · 跳价后触发</text></svg>
<div class="trade-pair">
<div class="trade-card trade-execution"><span class="trade-card-label">卖出止损市价单 · Stop-market</span><strong>触发后，按市价卖出</strong><p>若此时 94 美元的买单数量足够，就可以在 94 美元成交。</p></div>
<div class="trade-card trade-waiting"><span class="trade-card-label">卖出止损限价单 · Stop-limit</span><strong>触发后，限价 94.50</strong><p>若最高买价只有 94 美元，便不满足卖价下限，订单继续等待后续报价。</p></div>
</div>
<figcaption>两单的触发价都为 95 美元。本例用依次出现的成交价触发，100、96、94 是三笔价格；95 美元未必有过成交。</figcaption>
</figure>
<!-- /B02:stop -->

<span data-text-versions id="nb-b02-text-4">假设持仓价格从 100 美元回落，止损触发价定在 95 美元。当价格从 96 美元直接跳到 94 美元时，止损条件已经触发：市价单会按届时可执行的买价卖出；若止损限价单同时设有 94.50 美元的卖出下限，而眼下买方最高只出到 94 美元，这笔单子就暂时无法成交<span data-text-detail>（图中用成交价触发，触发后的买价设为 94 美元，并假定该价位的数量足以承接示意订单。实际触发基准、有效时段和平台处理方式随订单规则而定）</span>。95 美元在这里只决定何时启动，最终成交仍要看启动以后盘口上能接受哪些报价。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 在 8 月 24 日那样的开盘行情里，价格跳过触发价的幅度可能远大于这里的 1 美元，止损市价单触发以后，同样按当时能找到的买价卖出。

刚才的止损价固定在 95 美元。如果让止损线跟着有利方向的价格一起走，就成了**移动止损**。对多头持仓，若采用距价格高点 5 美元的移动止损，股价从 100 美元涨到 110 美元时，触发线便从 95 美元上移到 105 美元；随后价格回落，触发线会锁在 105 美元不再下调，等价格跌破这一位置再执行卖出订单。移动距离可以用固定金额或百分比表示；触发后按市价还是限价执行，仍要看采用的移动止损类型和平台规则。[^linked]

<figure class="flow-figure path-chart g2-trailing" id="nb-b02-trailing">
<div class="ff-head"><p class="ff-title">移动止损：触发线只随高点上移（示意）</p><p class="ff-legend"><span>价格</span><span class="ff-key-cash">止损触发线（高点 − 5）</span></p></div>
<div class="pc-plot business-exchange" aria-label="示意：多头持仓采用距价格高点 5 美元的移动止损。价格从 100 美元涨到 110 美元，触发线从 95 美元随高点上移到 105 美元；价格随后回落，触发线留在 105 美元，价格跌到 105 美元以下时触发。">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="pc-grid" points="0,89.47 100,89.47"/><polyline class="pc-grid" points="0,63.16 100,63.16"/><polyline class="pc-grid" points="0,36.84 100,36.84"/><polyline class="pc-grid" points="0,10.53 100,10.53"/><polyline class="pc-fixed" points="0,89.47 100,89.47"/><polyline class="pc-stop" points="0,89.47 10,89.47 10,78.95 20,78.95 30,78.95 30,63.16 40,63.16 40,52.63 50,52.63 60,52.63 60,36.84 70,36.84 80,36.84 90,36.84 100,36.84"/><polyline class="pc-price" points="0,63.16 10,52.63 20,55.26 30,36.84 40,26.32 50,31.58 60,10.53 70,18.42 80,26.32 90,34.21 100,38.95"/></svg>
<span class="pc-y" style="top:89.47%">95</span><span class="pc-y" style="top:63.16%">100</span><span class="pc-y" style="top:36.84%">105</span><span class="pc-y" style="top:10.53%">110</span>
<span class="pc-dot" style="left:60%;top:10.53%"></span>
<span class="pc-note" style="left:calc(60% - 34px);top:calc(10.53% - 26px)"><strong>高点 110</strong></span>
<span class="pc-note pc-warm" style="left:calc(60% + 8px);top:calc(36.84% + 4px)">触发线停在 105</span>
<span class="pc-dot" style="left:100%;top:38.95%;--c:var(--ff-cash)"></span>
<span class="pc-note pc-warm" style="right:2px;top:calc(38.95% + 26px)">跌破 105：触发</span>
<span class="pc-note" style="left:4px;top:calc(89.47% + 6px)">起初的固定止损 95</span>
<span class="pc-x" style="left:0%">买入</span><span class="pc-x" style="left:100%;transform:translateX(-100%)">时间 →</span>
</div>
<figcaption>价格单位为美元／股。触发以后怎样成交，要看采用的订单类型和平台规则。</figcaption>
</figure>

买入、止盈和止损也能在下单时一并排好。<strong>括号单（Bracket）</strong>把开仓单与后续的止盈、止损安排绑在一起：只有开仓成交以后，系统才启用相应数量的退出订单。两张退出单通常采用 **OCO（One Cancels the Other）** 关联，其中一笔成交，另一笔便按规则自动取消。Schwab 的 thinkorswim 就提供这类组合订单。[^linked]

<figure class="flow-figure order-tree" id="nb-b02-bracket">
<div class="ff-head"><p class="ff-title">开仓与退出的先后</p><span class="ff-sub">括号单 · 两张退出单以 OCO 关联</span></div>
<div class="ot-tree business-exchange" aria-label="括号单示意：开仓单为 100 美元限价买入。开仓单未成交时，两张退出单不会送出。开仓单全部成交后，持有仓位，同时启用两张以 OCO 关联的退出单：若价格先涨到 110 美元，110 美元的止盈限价卖单成交，每股至少盈利 10 美元，止损单随之取消；若价格先跌到 95 美元，止损单触发后按市价卖出，每股约亏损 5 美元，跳价时亏得更多，止盈单随之取消。">
<div class="ot-top">
<div class="ot-node ot-root"><span class="ot-tag">开仓单</span><strong>100 美元限价买入</strong></div>
<div class="ot-side"><span class="ot-side-link">未成交</span><div class="ot-node ot-muted"><strong>退出单不送出</strong><small>尚无持仓</small></div></div>
</div>
<div class="ot-stem"><span>全部成交</span></div>
<div class="ot-node ot-hold"><span class="ot-tag">持仓</span><strong>同时启用两张退出单</strong><small>两张以 OCO 关联</small></div>
<div class="ot-fork"></div>
<div class="ot-branches">
<div class="ot-branch"><div class="ot-cond">价格先涨到 110</div><div class="ot-node"><span class="ot-tag">止盈</span><strong>110 美元限价卖出</strong></div><div class="ot-result ot-gain"><strong>每股至少 +10 美元</strong><small>止损单随之取消</small></div></div>
<div class="ot-branch"><div class="ot-cond ot-cash">价格先跌到 95</div><div class="ot-node"><span class="ot-tag ot-cash">止损</span><strong>触发后按市价卖出</strong></div><div class="ot-result ot-loss"><strong>每股约 −5 美元</strong><small>跳价时亏得更多；止盈单随之取消</small></div></div>
</div>
</div>
<figcaption>按开仓单和先成交的退出单都全部成交示意，不计费用。</figcaption>
</figure>

<span data-text-versions id="nb-b02-text-5">这棵树的主干表达括号单安排的先后：开仓成交，退出单才启用；两条分支之间是 OCO 的相互取消：一张成交，另一张随之取消<span data-text-detail>（示意按开仓全部成交后启用退出单、一笔退出单全部成交后取消另一笔处理。部分成交后的数量调整、撤单传播和平台是否提供成交保护，需要依所用券商规则确认；独立提交两张卖单并不会自动形成 OCO）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

无论采用哪种订单，提交以后都还要核对它执行到了哪一步。价格触及限价时，同价位前面可能已经排着别人的挂单，也可能只成交了一小部分；发出撤单请求后，在撤单得到确认之前，原订单依然可能成交。因此，我们要通过成交回报确认买卖了多少、分别以什么价格成交，再查看剩余数量是继续挂在盘口里，还是已经取消。

## 成交对手、交易成本与交收 {#nb-b02-settlement}

我们买到证券的那一刻，另一方也同时卖出了证券。盘口里既有其他投资者的挂单，也有专门持续提供买卖报价的**做市商**。像 Citadel Securities 这样的机构，就会在股票和 ETF 市场承接交易。订单从券商送出去以后，既可能进交易所撮合，也可能交给做市商在场外承接；换句话说，接下我们这笔单子的，未必是另一个刚好同时按键的散户。做市商一边按较低的买价接下卖单，一边按较高的卖价卖给买方，中间这截买卖价差，正是用来覆盖它手里囤着股票时承担的价格波动和运营成本的。[^makers]

<figure class="flow-figure route" id="nb-b02-routing">
<div class="ff-head"><p class="ff-title">一笔订单可能经过的路径</p></div>
<div class="rt-grid business-exchange" aria-label="我们的订单先交给券商；券商可以把订单送进交易所，与其他投资者的挂单成交，也可能交给做市商在场外执行，由做市商承接这笔交易。">
<div class="ff-party"><strong>我们</strong><small>提交订单</small></div>
<div class="rt-arrow"><span>订单</span></div>
<div class="ff-party"><strong>券商</strong><small>选择执行场所</small></div>
<div class="rt-fork"><em></em><i></i><i></i></div>
<div class="rt-venues">
<div class="ff-party"><strong>交易所</strong><small>与其他投资者或做市商的挂单成交</small></div>
<div class="ff-party ff-party-focus"><strong>做市商</strong><small>例如 Citadel Securities，在场外承接</small></div>
</div>
</div>
</figure>

这样算下来，一笔交易的成本并不只有券商收取的费用。前面市价买入 300 股，成交均价是 100.04 美元；若以当时买卖报价的中点 100.00 美元作参照，这笔买入已经多付了 0.04 × 300 = 12 美元。这部分隐含在成交价里的成本来自买卖价差和逐档吃单，而佣金与交易规费则按账户条款另外计算。比较不同的交易安排时，两类成本要合在一起看。一般而言，价差窄、盘口厚的证券，成交价更接近参照价格；拆单或使用限价单有助于控制价格，代价则是部分数量可能无法及时成交。到了极端行情里，这种隐含成本会大得多：8 月 24 日开盘那几分钟，IVV 的成交价一度大幅低于成分股的实时价值，当时卖出的人承担了这段差额，哪怕几分钟后价格恢复，也拿不回来。

订单全部成交，并不意味着整笔交易已经落袋完结。成交确定了价格和数量，证券与款项的正式交付还要经过**交收**。美国多数证券交易的标准交收周期是 T+1，也就是在交易日之后的下一个营业日完成交付。比如周五卖出这 300 股，只要下周一不是假日，交收就在周一完成。卖款记入交易记录、成为已交收资金、再转入银行，是三个可以分别确认的时点。[^settlement]

<figure class="flow-figure stage-lanes rs-4" id="nb-b02-settlement-days">
<div class="ff-head"><p class="ff-title">周五卖出 300 股，T+1 交收</p></div>
<div class="rs-grid business-exchange" aria-label="周五成交卖出 300 股，卖款记入交易记录但尚未交收；周六、周日不是营业日；下一个营业日周一完成交收，证券交付给买方，卖款成为已交收资金；之后可以申请把已交收资金转入银行，可交易余额与可提款余额按券商规则分别计算。">
<div class="rs-stage" style="--c:2"><strong>周五 · T</strong>成交日</div>
<div class="rs-stage" style="--c:3"><strong>周六、周日</strong>非营业日</div>
<div class="rs-stage" style="--c:4"><strong>周一 · T+1</strong>交收日</div>
<div class="rs-stage" style="--c:5"><strong>之后</strong></div>
<div class="rs-lane" style="--lane:2">证券</div>
<div class="rs-lane" style="--lane:3">卖款</div>
<div class="rs-cell rs-step" style="--c:2;--lane:2">卖出成交<small>价格、数量确定</small></div>
<div class="rs-cell rs-wait" style="--c:3;--lane:2 / 4">不计入交收周期</div>
<div class="rs-cell rs-step" style="--c:4;--lane:2">交付给买方</div>
<div class="rs-cell rs-lock" style="--c:2;--lane:3">记入交易记录<small>尚未交收</small></div>
<div class="rs-cell rs-free" style="--c:4;--lane:3">已交收资金</div>
<div class="rs-cell" style="--c:5;--lane:3">申请转入银行<small>按券商规则</small></div>
</div>
</figure>

<span data-text-versions id="nb-b02-text-6">这里的 T+1 说的是交付时间，和能否当天买卖是两回事。当天买入、当天卖出的回转交易在美股市场可以进行，交收仍按 T+1 发生，两者互不冲突。至于能否马上用卖款买入别的证券，或者把钱转出账户，则要看账户类型和券商规则<span data-text-detail>（例如现金账户用已交收资金买入后当日卖出，与用尚未交收的卖款买入另一只证券、并在付款资金交收前卖出，付款条件不同；可交易余额与可提款余额也分别计算。这里只说明美国通常证券交易的交收周期，其他市场按各自规则处理）</span>。[^settlement]<sup>，</sup>[^cash-account]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

有了实际成交的价格、成本和资金到账时间，讨论回报才有了可靠的起点。下一篇[《复利、通胀与机会成本》](/zh/notebook/compounding-inflation-opportunity-cost/)接着看回报怎样随时间累积，又要扣掉哪些购买力的折损。

<link rel="stylesheet" href="/notebook/trading.css?v=20261126">
<script src="/notebook/trading.js?v=20261126" defer></script>
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

[^aug24]: SEC Division of Trading and Markets 分析与研究办公室工作人员，[Research Note: Equity Market Volatility on August 24, 2015](https://www.sec.gov/marketstructure/research/equity_market_volatility.pdf)，2015 年 12 月，PDF 第 1、3–5 页摘要（SPY 开盘与最低价、SPY 净值、开盘成交量与报价深度、市价单在 NYSE Arca 重新开盘竞价中的占比）与第 16 页（IVV 最低价及 9:43 前后恢复）。研究说明只提供数据，不对当天波动的原因作出结论。
[^quotes]: [Nasdaq：Why Real-Time Data Matters When Trading Stocks](https://www.nasdaq.com/articles/why-real-time-data-matters-when-trading-stocks)，2024-03-25，Last、Bid、Ask、Size 和 Trading Volume。正文数值盘口为独立构造的简化模型。
[^orders]: [SEC Investor.gov：Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders)，市价、限价和买卖方向的定义。
[^liquidity]: [IBKR：NASDAQ/Island Exchange Fees](https://investors.interactivebrokers.com/en/index.php?f=936)，Notes 1–2 关于添加和消耗流动性的说明；本文不采用该页费率。
[^time]: [FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders](https://www.finra.org/investors/insights/time-parameters-qualifiers-stock-orders)，2024-07-17 更新，Day、GTC、IOC 与 FOK，以及订单路由。
[^stop]: [SEC：Trading Basics](https://www.sec.gov/files/trading101basics.pdf)，2011-03，第 2 页，Stop 和 Stop-limit 的触发与成交区别；正文跳价路径为简化示意。
[^linked]: [Charles Schwab：How to Use Advanced Stock Order Types](https://www.schwab.com/learn/story/how-to-use-advanced-stock-order-types)，2025-05-21，OCO、Bracket 与 Trailing stop。
[^makers]: [Citadel Securities：Equities](https://www.citadelsecurities.com/what-we-do/equities/)，股票、ETF 与做市业务；[SEC：Market Centers — Buying and Selling Stock](https://www.sec.gov/answers/market.htm)，订单经券商送往交易所或做市商执行的说明。
[^settlement]: [SEC：New “T+1” Settlement Cycle – What Investors Need To Know](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin)，2024-03-27，What is Settlement?。这里采用美国通常证券交易的交收周期，不推广到所有市场。
[^cash-account]: [Fidelity：About Your Account](https://www.fidelity.com/trading/faqs-about-account) 与 [Trading Restrictions](https://www.fidelity.com/trading/faqs-trading-restrictions)，现金账户已交收资金、可交易与可提款余额的不同用途。


## Sources
- [SEC：New T+1 Settlement Cycle – What Investors Need To Know](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin): 成交与证券、款项正式交付的区别；本文不推广美国特定周期。
- [Research Note: Equity Market Volatility on August 24, 2015](https://www.sec.gov/marketstructure/research/equity_market_volatility.pdf): SEC Division of Trading and Markets 分析与研究办公室工作人员，2015 年 12 月：8 月 24 日开盘 SPY 低 5.2%、9:35 最低低 7.8%，SPY 净值约低 8%；IVV 最低低于前日收盘 20% 以上，约 9:43 恢复；ETP 开盘报价深度较对照期降九成以上；NYSE Arca 重新开盘竞价的卖方未匹配量 94% 来自市价单。研究说明不对原因作结论。
- [Charles Schwab：How to Use Advanced Stock Order Types](https://www.schwab.com/learn/story/how-to-use-advanced-stock-order-types): Charles Schwab：How to Use Advanced Stock Order Types，2025-05-21，OCO、Bracket 与 Trailing stop。
- [IBKR：NASDAQ/Island Exchange Fees](https://investors.interactivebrokers.com/en/index.php?f=936): IBKR：NASDAQ/Island Exchange Fees，Notes 1–2 关于添加和消耗流动性的说明；本文不采用该页费率。
- [Citadel Securities：Equities](https://www.citadelsecurities.com/what-we-do/equities/): Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。
- [SEC：Market Centers — Buying and Selling Stock](https://www.sec.gov/answers/market.htm): Citadel Securities：Equities，股票、ETF 与做市业务；SEC：Market Centers — Buying and Selling Stock，订单经券商送往交易所或做市商执行的说明。
- [SEC Investor.gov：Types of Orders](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders): SEC Investor.gov：Types of Orders，市价、限价和买卖方向的定义。
- [Nasdaq：Why Real-Time Data Matters When Trading Stocks](https://www.nasdaq.com/articles/why-real-time-data-matters-when-trading-stocks): Nasdaq：Why Real-Time Data Matters When Trading Stocks，2024-03-25，Last、Bid、Ask、Size 和 Trading Volume。正文数值盘口为独立构造的简化模型。
- [SEC：Trading Basics](https://www.sec.gov/files/trading101basics.pdf): SEC：Trading Basics，2011-03，第 2 页，Stop 和 Stop-limit 的触发与成交区别；正文跳价路径为简化示意。
- [FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders](https://www.finra.org/investors/insights/time-parameters-qualifiers-stock-orders): FINRA：Trading Terms — Time Parameters and Qualifiers on Stock Orders，2024-07-17 更新，Day、GTC、IOC 与 FOK，以及订单路由。
- [Fidelity：About Your Account](https://www.fidelity.com/trading/faqs-about-account): Fidelity：About Your Account 与 Trading Restrictions，现金账户的可交易、已交收、可提款金额与付款关系。
- [Trading Restrictions](https://www.fidelity.com/trading/faqs-trading-restrictions): Fidelity：About Your Account 与 Trading Restrictions，现金账户的可交易、已交收、可提款金额与付款关系。

## Content relations
```json
[
  {
    "from": "zh-quotes-orders-execution",
    "relation": "part_of",
    "to": "topic-B",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [指数、基金与 ETF](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/)
- [复利、通胀与机会成本](https://ou-liu-red-sugar.github.io/zh/notebook/compounding-inflation-opportunity-cost/)
- [投资期限与现金需要](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)
