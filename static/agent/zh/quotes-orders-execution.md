# 报价、订单与实际成交

从 2015 年 8 月 24 日开盘几分钟里 IVV 的成交价出发，读懂报价、盘口与流动性，再看市价、限价和触发订单怎样决定成交，以及成交对手、交易成本和 T+1 交收。

Entry: zh-quotes-orders-execution | Node: NB-B02 | Language: zh | Editorial revision: 2026-11-28

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
[《指数、基金与 ETF》](/zh/notebook/indices-funds-etfs/#nb-v01-trading)里默认那 10,000 美元按一个价格买到了 VOO；真到下单那一刻，实际成交价取决于市场上此刻有谁愿意接手、愿意出什么价。2015 年 8 月 24 日美股开盘后几分钟里，同样跟踪 S&P 500 的 iShares Core S&P 500 ETF（IVV）成交价一度跌穿前日收盘 20% 以上，而按成分股实时价估算的 SPDR S&P 500 ETF Trust（SPY）净值最多只跌约 8%，9:43 左右 IVV 便恢复到与其他 S&P 500 产品一致的价位。[^aug24]

<figure class="flow-figure" id="nb-b02-aug24">
<div class="ff-head"><p class="ff-title">同一组股票，开盘几分钟里的最低点</p><span class="ff-sub">2015 年 8 月 24 日 · 相对前一交易日收盘</span></div>
<div class="ff-bars business-exchange" aria-label="2015 年 8 月 24 日开盘后几分钟，相对 8 月 21 日收盘：按成分股实时成交价计算的 SPY 净值最多下跌约 8%；SPY 在 9:30 开盘时低 5.2%，9:35 最低低 7.8%；IVV 最低时低 20% 以上，9:43 左右回到与其他 S&P 500 产品一致的价格。">
<span class="fb-name">SPY 净值<small>成分股实时价值</small></span><span class="fb-bar"><i style="--w:40%"></i></span><span class="fb-val">约 −8%</span>
<span class="fb-name">SPY<small>9:35 最低</small></span><span class="fb-bar"><i style="--w:39%"></i></span><span class="fb-val">−7.8%</span>
<span class="fb-name">IVV<small>9:43 左右恢复</small></span><span class="fb-bar"><i class="fb-cash" style="--w:100%"></i></span><span class="fb-val">−20% 以下</span>
</div>
<figcaption>三者都对应 S&P 500 的成分股。IVV 的数值按研究说明的“超过 20%”以 20% 绘出；SPY 净值按成分股的实时成交价计算。</figcaption>
</figure>

成分股没有跌掉五分之一，卖出 IVV 的人却可能按这个低价成交。<span data-text-versions id="nb-b02-text-7">SEC 工作人员的研究说明记录了当时并存的两个条件：开盘后大量对前日价格不敏感的卖单涌入，与此同时，ETP 最优报价附近的可见挂单比平时少了九成以上<span data-text-detail>（挂单数量按最优报价及其 19 美分以内的报价深度，与 7 月 27 日至 8 月 21 日对照期比较；ETP 指 ETF 等交易所交易产品。研究说明仅提供数据，不对当天波动原因下结论）</span>。[^aug24]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span> 卖盘汹涌而买方报价稀薄时，成交价就可能顺着挂单一路往下滑。

## 报价、盘口与流动性 {#nb-b02-quotes}

打开行情软件，屏幕上除了走势线，还有三个核心字段：Last 是最近一笔已完成的成交价；Bid 是当前买方报出的最高买价，Ask 是卖方报出的最低卖价。想立刻成交，买入得看 Ask，卖出得看 Bid。[^quotes]

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

Last 只记录过去，定不了下一笔买卖的价格；8 月 24 日开盘前 IVV 的昨收价，同样说明不了几分钟后卖出能拿到多少。把最优档往外展开，还能看到各价位挂着的数量，合起来叫**订单簿**（盘口）。能否很快按接近眼前报价完成一定数量的买卖，衡量的是**流动性**；实际成交价偏离下单参照价的那截差距叫**滑点**——盘口越薄、下单越大，就越可能一路吃到更远档位。

<span data-text-versions id="nb-b02-text-1">读盘口时要把价格、数量和时点一起看：成交量记录的是已经成交的股数，市场深度反映的是此刻各档可见挂单；即使某价位正挂着大额买单，下一秒也可能成交、修改或撤回，不能据此断定价格一定守得住<span data-text-detail>（可见盘口覆盖范围取决于行情源；单一场所深度不等于全市场总量，隐藏或储备单也未必显示，行情延迟时页面档位可能已变化）</span>。[^quotes]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 常见订单与挂单结构 {#nb-b02-orders}

下单时，**市价单**按当前可执行报价立刻寻求成交，**限价单**则先划定最高买价或最低卖价。[^orders] 下面把买卖两侧各展开三档，先点击上方预设比较 300 股、600 股、薄盘口与限价 100.05 的逐档结果：

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

<span data-text-versions id="nb-b02-text-2">切到“限价 100.05 买 600 股”可以看到两层细节：限价只规定最高可付价格，前两档仍按 100.02 和 100.05 逐档成交（这一半直接吃掉卖盘，属于<strong>消耗流动性</strong>）；超出上限的余下 300 股则挂进盘口排队等待（这一半是在<strong>提供流动性</strong>）<span data-text-detail>（图中按价格优先逐档撮合，不计费用及期间新增或撤单；厚盘口市价买 300 股均价 100.04、总额 30,012 美元，买 600 股均价升至 100.07、总额 60,042 美元；超过三档的市价单余量结果取决于更远档位报价，不能据此推定整笔成交）</span>。[^liquidity]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

把下单最常用的两套开关——**价格条件**和**有效时长**——摆在同一屏里，取舍立刻清楚：[^aug24]<sup>，</sup>[^time]

<figure class="flow-figure" id="nb-b02-order-matrix">
<div class="ff-head"><p class="ff-title">下单前先定两件事：价格条件 × 有效时长</p><span class="ff-sub">成交确定性、价格控制与挂单寿命</span></div>
<div class="business-exchange" aria-label="下单的两套开关：价格条件分为市价单（只求成交、不设价格底线，2015 年 8 月 24 日 NYSE Arca 暂停后重开竞价中卖方未匹配量 94% 来自市价单）与限价单（守住最高买价或最低卖价，可拆成 99、98、97 美元分层挂单，代价是市场未到价则不成交）；有效时长分为 Day 当日有效、GTC 跨日保留，以及 IOC 立即成交可执行部分并撤剩余、FOK 立即全部成交否则取消。">
<svg viewBox="0 0 720 198" role="img" aria-label="价格条件与有效时长对照图" style="width:100%;height:auto;display:block">
  <rect x="8" y="8" width="386" height="182" rx="8" fill="#ffffff" stroke="#c8d6ce" stroke-width="1.2"/>
  <rect x="8" y="8" width="386" height="30" rx="8" fill="#eaf2ef"/>
  <rect x="8" y="30" width="386" height="8" fill="#eaf2ef"/>
  <text x="22" y="28" font-size="12" font-weight="700" fill="#145343">① 价格条件：要确定成交，还是要价格底线？</text>
  <rect x="20" y="48" width="362" height="60" rx="6" fill="#fdf6f3" stroke="#e4cbc3"/>
  <text x="32" y="68" font-size="12" font-weight="700" fill="#b83b24">市价单（Market）</text>
  <text x="150" y="68" font-size="11" fill="#8f4a39">不设价格底线 · 优先换取成交</text>
  <text x="32" y="88" font-size="11" fill="#46544c">盘口薄时一路滑档；2015-08-24 NYSE Arca 重开竞价中，</text>
  <text x="32" y="102" font-size="11" fill="#46544c">卖方未匹配数量有 94% 来自市价单。</text>
  <rect x="20" y="118" width="362" height="62" rx="6" fill="#f3f7f5" stroke="#c3d5cb"/>
  <text x="32" y="138" font-size="12" font-weight="700" fill="#145343">限价单（Limit）</text>
  <text x="142" y="138" font-size="11" fill="#145343">守住价格上限 / 下限 · 允许分层挂单</text>
  <text x="32" y="158" font-size="11" fill="#46544c">可拆成 99 / 98 / 97 美元分批买 300 股；代价是价格</text>
  <text x="32" y="172" font-size="11" fill="#46544c">回不到限价位就买不到或卖不出，持仓停在已成交部分。</text>
  <rect x="408" y="8" width="304" height="182" rx="8" fill="#ffffff" stroke="#d5c9b8" stroke-width="1.2"/>
  <rect x="408" y="8" width="304" height="30" rx="8" fill="#f5ebdf"/>
  <rect x="408" y="30" width="304" height="8" fill="#f5ebdf"/>
  <text x="422" y="28" font-size="12" font-weight="700" fill="#8f6033">② 有效时长：没成交的余量等多久？</text>
  <text x="422" y="62" font-size="12" font-weight="700" fill="#18241e">Day</text>
  <text x="468" y="62" font-size="11.5" fill="#46544c">当日有效，收盘后未成交自动失效</text>
  <line x1="422" y1="74" x2="698" y2="74" stroke="#ece6dc"/>
  <text x="422" y="96" font-size="12" font-weight="700" fill="#18241e">GTC</text>
  <text x="468" y="96" font-size="11.5" fill="#46544c">跨交易日保留，直至成交 / 撤销 / 到期</text>
  <line x1="422" y1="108" x2="698" y2="108" stroke="#ece6dc"/>
  <text x="422" y="130" font-size="12" font-weight="700" fill="#18241e">IOC</text>
  <text x="468" y="130" font-size="11.5" fill="#46544c">立刻成交可执行部分，余量马上取消</text>
  <line x1="422" y1="142" x2="698" y2="142" stroke="#ece6dc"/>
  <text x="422" y="164" font-size="12" font-weight="700" fill="#18241e">FOK</text>
  <text x="468" y="164" font-size="11.5" fill="#46544c">必须立刻全部成交，否则整笔取消</text>
</svg>
</div>
</figure>

<span data-text-versions id="nb-b02-text-3">有效期只改变未成交部分的等待方式，不改变限价方向；是否覆盖盘前、盘后交易则需另看时段设置<span data-text-detail>（部分券商对 GTC 设有最长保留天数；分层挂单如在 99、98、97 美元各挂 100 股，若价格只触及 99 美元便转涨，实际持仓停在已成交的 100 股）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

持仓之后，还可以预设条件触发卖出：**止损市价单**触发后转为市价单，**止损限价单**则转为限价单。哪怕触发价同样设在 95 美元，遇上跳价时两者的命运也会立刻分叉：[^stop]

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

<span data-text-versions id="nb-b02-text-4">95 美元只决定何时启动，不保证按 95 美元成交；在 8 月 24 日那样的大幅跳空行情里，止损市价单触发后同样只能按当时盘口能接住的买价卖出<span data-text-detail>（图中假定 94 美元买量足以承接示意订单；实际触发基准、有效时段和平台处理规则依券商设定）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

若让止损线跟着股价新高同步上移、回落时锁住不降，就是**移动止损**（可按固定金额或百分比设置）：[^linked]

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

想在开仓时一并排好止盈与止损，可以用**括号单（Bracket）**绑定父子顺序，并用 **OCO（One Cancels the Other）** 关联两张退出单（例如 Schwab 的 thinkorswim 提供这类组合订单）：[^linked]

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

<span data-text-versions id="nb-b02-text-5">无论用哪种订单，提交后都要以成交回报为准：同价位前面可能排着其他挂单，撤单确认前原单仍可能成交，需逐项核对已成交股数、均价和剩余挂单状态<span data-text-detail>（括号单示意按全部成交处理；部分成交后的数量调整、撤单传播和成交保护依券商规则确定，单独提交两张卖单不会自动形成 OCO）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 成交对手、交易成本与交收 {#nb-b02-settlement}

订单经券商送出后，对手方未必是另一位同时按键的散户：除了进交易所撮合，也可能交给持续双边报价的**做市商**（例如 Citadel Securities）在场外承接，买卖价差用来覆盖做市商的库存波动与运营成本。[^makers]

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

因此，一笔交易的真实成本由两部分组成：藏在成交价里的**隐含成本**（买卖价差 + 逐档滑点），以及按账户另收的**显性成本**（佣金与规费）。回到前面市价买入 300 股的例子，拆开来看非常直观：

<figure class="flow-figure" id="nb-b02-cost-split">
<div class="ff-head"><p class="ff-title">真实成交成本 = 隐含价差与滑点 + 显性佣金规费</p><span class="ff-sub">沿用市价买入 300 股例 · 报价中点 100.00 美元</span></div>
<div class="business-exchange" aria-label="以报价中点 100.00 美元为参照，市价买入 300 股成交均价为 100.04 美元，每股隐含价差与吃档成本 0.04 美元，合计 12 美元；另加按账户条款计算的佣金与交易规费，构成完整成交成本。">
<svg viewBox="0 0 720 116" role="img" aria-label="显性与隐含交易成本拆解链" style="width:100%;height:auto;display:block">
  <rect x="8" y="10" width="166" height="94" rx="7" fill="#ffffff" stroke="#c8d6ce"/>
  <text x="20" y="33" font-size="11" fill="#58605c">参照基准（报价中点）</text>
  <text x="20" y="61" font-size="18" font-weight="700" fill="#18241e">100.00 美元</text>
  <text x="20" y="84" font-size="10.5" fill="#7a8780">Bid 99.98 / Ask 100.02 中点</text>
  <text x="190" y="62" text-anchor="middle" font-size="16" font-weight="700" fill="#8f6033">+</text>
  <rect x="204" y="10" width="250" height="94" rx="7" fill="#fdf6f3" stroke="#e2c2b7"/>
  <text x="216" y="33" font-size="11" font-weight="650" fill="#b83b24">隐含成本（藏在成交价里）</text>
  <text x="216" y="61" font-size="17" font-weight="700" fill="#b83b24">0.04 × 300 = 12 美元</text>
  <text x="216" y="84" font-size="10.5" fill="#6b524a">半价差 0.02 + 吃档滑点 0.02（均价 100.04）</text>
  <text x="469" y="62" text-anchor="middle" font-size="16" font-weight="700" fill="#58605c">+</text>
  <rect x="484" y="10" width="228" height="94" rx="7" fill="#f3f7f5" stroke="#b9d0c2"/>
  <text x="496" y="33" font-size="11" font-weight="650" fill="#145343">显性费用（账单单独列示）</text>
  <text x="496" y="61" font-size="16" font-weight="700" fill="#145343">佣金 + 交易规费</text>
  <text x="496" y="84" font-size="10.5" fill="#46544c">按账户条款另计；极端行情隐含成本远大</text>
</svg>
</div>
<figcaption>拆单或限价单可收紧隐含成本，代价是可能漏单；2015-08-24 低位卖出 IVV 的人承担的巨大偏离，即便几分钟后价格恢复也无法追回。</figcaption>
</figure>

订单成交后，证券与资金的正式交付还要经过**交收**。美国多数证券采用 T+1 交收周期（交易日后下一个营业日），卖款记账、交收可用与转出银行是三个不同的时间节点：[^settlement]

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

<span data-text-versions id="nb-b02-text-6">T+1 管的是交收日，与美股当日买卖的回转交易互不冲突；至于能否立刻动用未交收卖款买别的股票或提现，取决于账户类型与券商规则<span data-text-detail>（现金账户用已交收资金当日买卖，与用未交收卖款买入新股并在付款交收前卖出，受不同付款限制；可交易余额与可提款余额也分别核算。本节仅指美国通常证券交易，其他市场按当地规则执行）</span>。[^settlement]<sup>，</sup>[^cash-account]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

有了实际成交价、交易成本与资金交收起点，回报计算才算脚踏实地。下一篇[《复利、通胀与机会成本》](/zh/notebook/compounding-inflation-opportunity-cost/)接着看回报怎样跨年滚动，又要扣掉哪些购买力折损。

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
