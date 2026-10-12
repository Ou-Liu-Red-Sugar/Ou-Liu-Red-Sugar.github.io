{
  "title": "Agent 时代的基本面投资",
  "description": "从一则订单公告出发，看清业务、现金与每股所得、事件计价和 Agent 辅助研究，再回到资金安排与学习路线。",
  "layout": "entry",
  "notebookid": "zh-investment-returns",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-investment-returns"
}

<link rel="stylesheet" href="/notebook/intro-interactions.css">
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261012-5">

## 从一则订单公告读起 {#nb-a01-order}

2023 年 11 月，GE Vernova（GEV）宣布取得德国能源公司 EnBW（EBK，德国）的两项燃气发电设备订单。两个项目都要替换燃煤机组，同时供电和供热；GEV 与工程合作方一起提供燃气轮机、配套发电机等设备，以及工程建设和此后十年的维护服务。[^gev-order]<sup>，</sup>[^enbw-share]

假如我们正在考虑买入 GEV 的股票，这条消息意味着什么？公告写清了设备和服务的范围，却没有回答持股人更关心的问题：这笔生意要先垫入多少钱，什么时候变成利润，最后有多少能落到每一股上；市场在公告之前是否已经料到，股价里又计入了多少。基本面研究要做的，就是把一条消息放回企业的经营里去理解，再拿来和眼前的价格比较。[^stocks]

下面就沿着这笔订单，依次看业务怎样运转、钱和利润怎样流向股东、消息怎样进入价格，以及 Agent 能怎样帮我们把研究持续做下去。最后再回到自己的资金，看看股票以外还有哪些选择，以及这套笔记接下来的路线。

## 企业与业务 {#nb-a01-business}

买入股票，就持有了企业的一部分股份。一家公司常常同时经营多项业务，各项业务的客户、竞争者和资金需要并不相同，所以研究时可以先拆出一项业务，弄清它为谁提供什么、怎样收费，再放回公司整体。把 GEV 燃气发电设备业务中的几方放在一起，就能看到下面的联系：

<figure class="business-chain" aria-labelledby="gev-business-caption">
  <figcaption id="gev-business-caption">业务生态图</figcaption>
  <div class="business-network">
    <div class="business-node" data-business-node="suppliers">
      <span class="business-role">上游</span>
      <strong>材料与零部件<br>供应商</strong>
    </div>
    <div class="business-exchange" aria-label="供应商向 GEV 供货；GEV 向供应商下单并付款">
      <div class="business-flow"><span>供货</span><span class="business-arrow" aria-hidden="true"></span></div>
      <div class="business-flow business-flow-return"><span>订单 · 付款</span><span class="business-arrow" aria-hidden="true"></span></div>
    </div>
    <div class="business-node business-node-focus" data-business-node="gev">
      <span class="business-role">设备业务</span>
      <strong>GEV</strong>
      <span class="business-node-description">燃气发电设备<br>与后续服务</span>
    </div>
    <div class="business-exchange" aria-label="GEV 向电厂项目与运营商提供设备和服务；客户依约下单并付款">
      <div class="business-flow"><span>设备与服务</span><span class="business-arrow" aria-hidden="true"></span></div>
      <div class="business-flow business-flow-return"><span>订单 · 付款</span><span class="business-arrow" aria-hidden="true"></span></div>
    </div>
    <div class="business-node" data-business-node="customers">
      <span class="business-role">客户</span>
      <strong>电厂项目<br>与运营商</strong>
    </div>
    <div class="business-exchange" aria-label="电厂通过电网等环节向终端用电方供电">
      <div class="business-flow"><span>供电</span><span class="business-arrow" aria-hidden="true"></span><span class="business-flow-context">经电网等环节</span></div>
    </div>
    <div class="business-node" data-business-node="demand">
      <span class="business-role">用电需求</span>
      <strong>居民、企业<br>等用电方</strong>
    </div>
  </div>
  <p class="business-chain-return">订单与付款沿相应交易关系反向发生。</p>
</figure>

图中，客户向 GEV 采购设备和服务，GEV 也要向自己的供应商采购材料和零部件，订单和付款分别发生在相应的交易双方之间。为了看清这些联系，图里省去了工程合作方和具体的电力交易环节。[^gev-suppliers]

GEV 的设备需求来自客户的建设计划。一般来说，电厂采购新机组，要么是为了增加供电能力，要么是为了替换原有机组，EBK 的这两个项目属于后者；建设计划、资金安排和技术要求，又决定了客户采购哪些设备、要求什么时候交货。所以判断这项业务的前景时，我们还得接着看客户在建设什么、为什么建设，以及这些项目能否按计划推进。

设备投入使用以后，GEV 还会继续提供服务。EBK 订单就包含十年的维护和服务；已经装好的设备需要保养、检修和更换零部件，也会持续带来服务收入。新设备的销售跟着客户的建设周期起落，服务收入则主要取决于已有设备的数量和运行时间，两部分收入的稳定程度并不一样。[^gev-order]<sup>，</sup>[^gev-annual]

## 收入、现金与每股所得 {#nb-a01-money}

拿到订单以后，GEV 要组织采购、制造和交付，并按合同履约情况确认收入，也就是把相应的金额记入财务报表。但客户付款、GEV 向供应商付款与确认收入，常常发生在不同的时间。[^gev-annual]下图用一笔假设的订单比较两种收款安排：

<figure class="flow-figure cash-timeline" id="nb-a01-cash-timeline" data-ff-views>
<div class="ff-head"><p class="ff-title">一笔订单的利润与现金（示意）</p><div class="ff-switch" role="group" aria-label="选择客户付款安排" hidden><button type="button" data-ff-view-choice="advance" aria-pressed="true">预收进度款</button><button type="button" data-ff-view-choice="after" aria-pressed="false">交付后收款</button></div></div>
<div class="ct-grid">
<div class="ct-label">客户付款</div>
<div class="ct-row business-exchange" data-ff-only="advance" aria-label="预收进度款：客户在签约时付 20，第 6 个月付 30，第 12 个月交付时付 40，第 15 个月付清余下的 10。"><span class="ct-at ct-chip" style="--m:0">+20</span><span class="ct-at ct-chip" style="--m:6">+30</span><span class="ct-at ct-chip" style="--m:12">+40</span><span class="ct-at ct-chip" style="--m:15">+10</span></div>
<div class="ct-row business-exchange" data-ff-only="after" aria-label="交付后收款：客户在交付两个月后的第 14 个月一次付清 100。" hidden><span class="ct-at ct-chip" style="--m:14">+100</span></div>
<div class="ct-label">采购与制造</div>
<div class="ct-row business-exchange" aria-label="两种安排下，GEV 都在第 2 至第 11 个月向供应商付款并组织制造，每月付出 8，共 80。"><span class="ct-span" style="--from:2;--to:11">每月 −8，共 −80</span></div>
<div class="ct-label">利润表</div>
<div class="ct-row business-exchange" aria-label="两种安排下，GEV 都在第 12 个月交付设备，确认收入 100、成本 80，利润 20。"><span class="ct-at ct-mark" style="--m:12">交付：收入 100，利润 20</span></div>
<div class="ct-label">累计现金 <small>虚框为另一种安排</small></div>
<div class="ct-row ct-chart business-exchange" aria-label="预收进度款下，这笔订单带来的累计现金：第 0–1 个月 20，第 2 个月 12，第 3 个月 4，第 4 个月 −4，第 5 个月 −12，第 6 个月 10，第 7 个月 2，第 8 个月 −6，第 9 个月 −14，第 10 个月 −22，第 11 个月 −30，第 12–14 个月 10，第 15 个月 20。交付后收款下，这笔订单带来的累计现金：第 0–1 个月 0，第 2 个月 −8，第 3 个月 −16，第 4 个月 −24，第 5 个月 −32，第 6 个月 −40，第 7 个月 −48，第 8 个月 −56，第 9 个月 −64，第 10 个月 −72，第 11–13 个月 −80，第 14–15 个月 20。"><div class="ct-plot"><span class="ct-zero">0</span><i data-ff-series="after" class="is-ghost ct-neg" style="--m:2;--h:8"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:3;--h:16"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:4;--h:24"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:5;--h:32"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:6;--h:40"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:7;--h:48"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:8;--h:56"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:9;--h:64"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:10;--h:72"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:11;--h:80"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:12;--h:80"></i><i data-ff-series="after" class="is-ghost ct-neg" style="--m:13;--h:80"></i><i data-ff-series="after" class="is-ghost ct-pos" style="--m:14;--h:20"></i><i data-ff-series="after" class="is-ghost ct-pos" style="--m:15;--h:20"></i><b data-ff-series="after" class="is-ghost ct-neg" style="--m:11;--h:80">−80</b><b data-ff-series="after" class="is-ghost ct-pos" style="--m:15;--h:20">+20</b><i data-ff-series="advance" class="ct-pos" style="--m:0;--h:20"></i><i data-ff-series="advance" class="ct-pos" style="--m:1;--h:20"></i><i data-ff-series="advance" class="ct-pos" style="--m:2;--h:12"></i><i data-ff-series="advance" class="ct-pos" style="--m:3;--h:4"></i><i data-ff-series="advance" class="ct-neg" style="--m:4;--h:4"></i><i data-ff-series="advance" class="ct-neg" style="--m:5;--h:12"></i><i data-ff-series="advance" class="ct-pos" style="--m:6;--h:10"></i><i data-ff-series="advance" class="ct-pos" style="--m:7;--h:2"></i><i data-ff-series="advance" class="ct-neg" style="--m:8;--h:6"></i><i data-ff-series="advance" class="ct-neg" style="--m:9;--h:14"></i><i data-ff-series="advance" class="ct-neg" style="--m:10;--h:22"></i><i data-ff-series="advance" class="ct-neg" style="--m:11;--h:30"></i><i data-ff-series="advance" class="ct-pos" style="--m:12;--h:10"></i><i data-ff-series="advance" class="ct-pos" style="--m:13;--h:10"></i><i data-ff-series="advance" class="ct-pos" style="--m:14;--h:10"></i><i data-ff-series="advance" class="ct-pos" style="--m:15;--h:20"></i><b data-ff-series="advance" class="ct-neg" style="--m:11;--h:30">−30</b><b data-ff-series="advance" class="ct-pos" style="--m:15;--h:20">+20</b></div></div>
<div class="ct-label">月份</div>
<div class="ct-row ct-axis business-exchange" aria-label="横轴是签约后的月份，从第 0 个月到第 15 个月。"><span class="ct-at" style="--m:0">0</span><span class="ct-at" style="--m:3">3</span><span class="ct-at" style="--m:6">6</span><span class="ct-at" style="--m:9">9</span><span class="ct-at" style="--m:12">12</span><span class="ct-at" style="--m:15">15</span></div>
<span class="ct-delivery" aria-hidden="true"></span>
</div>
<p class="ct-result" data-ff-only="advance">预收进度款：最多先垫入 <strong>30</strong>，累计现金为负的月份共 6 个。</p>
<p class="ct-result" data-ff-only="after" hidden>交付后收款：最多先垫入 <strong>80</strong>，从第 2 个月一直持续到第 13 个月。</p>
<figcaption>合同额 100、成本 80 和各期付款都是假设数字，不代表 GEV 的实际合同条款。虚线标出交付并确认收入的月份。</figcaption>
</figure>

两种安排下，利润表都在交付时记下同样的收入和利润，订单带来的现金却走出了不同的路径。客户分期预付时，GEV 最多先垫入 30；客户在交付以后才付款，GEV 就要先垫入 80，并且垫上一年左右。所以看一项业务，既要比较收入与成本，判断它能赚多少钱，也要沿着收付款的时间，判断要先垫入多少资金、占用多久。

这项业务最终能给股东留下多少，还要放回公司整体来看。其他业务的盈亏、公司的共同费用和税费，都会改变整体盈利；留下的钱，一部分用于偿还债务和再投资，一部分通过分红、回购交给股东。把这些合在一起再按股份数量折算，才得到每股所得，也才能与自己愿意付出的价格放在一起比较：[^stocks]

<figure class="flow-figure step-chain" id="nb-a01-per-share">
<div class="ff-head"><p class="ff-title">从一项业务到每股所得</p></div>
<div class="sc-track">
<div class="sc-node"><strong>设备业务的利润</strong><small>收入减去采购、生产与服务成本</small></div>
<div class="sc-link business-exchange" aria-label="设备业务的利润，加上其他业务的盈亏，再减去公司的共同费用和税费，成为公司整体的盈利。"><span>＋其他业务盈亏</span><span>−共同费用</span><span>−税费</span></div>
<div class="sc-node"><strong>公司整体盈利</strong></div>
<div class="sc-link business-exchange" aria-label="公司按分配决定安排这部分盈利。"><span>分配决定</span></div>
<div class="sc-node sc-split"><div><strong>留在公司</strong><small>偿还债务、再投资</small></div><div><strong>分给股东</strong><small>分红、回购</small></div></div>
<div class="sc-link business-exchange" aria-label="一部分留在公司偿还债务或再投资，一部分通过分红、回购分给股东；两部分都按股份数量折算到每股。"><span>÷ 股份数量</span></div>
<div class="sc-node sc-focus"><strong>每股所得</strong><small>与愿意付出的价格比较</small></div>
</div>
</figure>

## 事件、预期与市场计价 {#nb-a01-events}

回到开头的问题：一笔新订单会让 GEV 的股票更值钱吗？我们先要看它怎样改变经营。这笔订单是否说明客户的需求正在扩大？GEV 能否用现有产能交付，还是需要追加投入？上游供货、人工和服务成本会不会随之变化？订单金额只说明了交易的规模，能带来多少利润、要占用多少资金，还要结合这些经营条件来判断。

即使订单确实改善了经营，股价也未必上涨，因为还要看市场原本怎样预期。投资者按照对未来的判断买卖股票，消息公布之前，一部分预期就已经反映在价格里了。市场早已料到这笔订单的话，公告可能只是兑现预期；订单带来了关于需求、价格或交付条件的新信息，投资者才有新的依据调整价格。财报也是这样：公司公布了好业绩，市场还会把它与此前的预期以及公司对未来的展望放在一起比较。[^earnings]

<figure class="flow-figure expect-path" id="nb-a01-expectation">
<div class="ff-head"><p class="ff-title">订单公告前后的股价（示意）</p></div>
<div class="ep-plot business-exchange" aria-label="示意图：市场预期 GEV 会取得这笔订单，公告前股价已经逐步上涨，这部分预期已经计入价格。公告时，如果订单内容高于原有预期，价格继续上调；与预期相符，价格变化有限；低于预期，价格下调。">
<div class="ep-chart">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="ep-start" points="0,84 60,84"/><polyline class="ep-before" points="0,84 6,82 12,83 18,78 24,75 30,72 36,73.6 42,64 48,59 54,54 60,48"/><polyline class="ep-up" points="60,48 64,28 100,22"/><polyline class="ep-flat" points="60,48 64,46.8 100,49.2"/><polyline class="ep-down" points="60,48 64,70 100,74"/></svg>
<span class="ep-event"><span>订单公告</span></span>
<span class="ep-priced"></span>
<span class="ep-priced-label">预期已计入价格</span>
<span class="ep-end ep-end-up" style="top:22%"><strong>高于预期</strong>价格继续上调</span>
<span class="ep-end ep-end-flat" style="top:49%"><strong>与预期相符</strong>变化有限</span>
<span class="ep-end ep-end-down" style="top:74%"><strong>低于预期</strong>价格下调</span>
<span class="ep-time" style="left:0">公告前几周</span>
<span class="ep-time" style="left:calc(60% + 6px)">公告后</span>
</div>
</div>
<figcaption>示意图，不对应某家公司的实际股价。公告以后的价格还会受到同期其他消息的影响。</figcaption>
</figure>

所以我们会一边了解已经发生的经营结果，一边根据新材料修正对需求、竞争、盈利和资金安排的认识，再判断当前价格下的潜在回报与损失。新的经营结果和消息还会不断出现，这份判断也就需要随之更新。

## Agent 辅助的持续研究 {#nb-a01-agents}

要把这样的判断持续做下去，就需要不断取得和核对材料。相关依据分散在公司披露、客户的项目安排、供应商资料和竞争者的信息里，沿着业务关系查下去，又常常会冒出新的问题。Agent 适合参与这部分工作：围绕具体问题查找、对照和更新材料，并把来源和当时的判断记录下来。

仍以 GEV 的订单为例，我们可以请 Agent 查找 EBK 的建设计划，了解这次采购的用途和时间；查找上游供货和产能信息，核对按期交付需要哪些条件；再比较其他设备供应商的产品与服务，看看客户还有哪些选择。资料拿回来以后，判断仍要由我们结合这项业务来做：客户的项目安排是否支持原先估计的设备需求，供货和产能又会怎样影响交付与成本。

整理材料时，还要分清哪些是已经发生的事实，哪些是公司的预期，哪些是研究中作出的假设，并比较不同来源的依据能否相互支持。等新的财报或项目消息出现，再对照当初的依据，看看哪些认识得到了支持、哪些需要调整。这样积累下来，我们既能看清判断为什么发生变化，也知道下一步还要研究什么：

<figure class="flow-figure research-loop" id="nb-a01-research-loop">
<div class="ff-head"><p class="ff-title">Agent 参与的研究循环</p></div>
<ol class="rl-steps">
<li><span class="rl-who">我们</span><strong>提出经营问题</strong><small>例如客户的项目安排是否支持设备需求</small></li>
<li><span class="rl-who rl-who-agent">Agent</span><strong>查找与对照材料</strong><small>公司披露、客户项目、供应商与竞争者</small></li>
<li><span class="rl-who rl-who-both">一起</span><strong>区分依据</strong><small>已发生的事实、公司的预期、研究假设</small></li>
<li><span class="rl-who rl-who-agent">Agent</span><strong>保留来源与判断</strong><small>记下当时的依据和结论</small></li>
</ol>
<div class="rl-return"><span>新的财报或项目消息出现：对照原先依据，调整判断，提出下一步问题</span></div>
</figure>

## 投资目标与资金安排 {#nb-a01-goals}

把研究落到自己的钱上，还要先想清楚这笔钱准备用来做什么、什么时候要用。希望用投资所得补充日常收入时，我们会关心现金什么时候到账；为多年以后的支出积累资金，则更在意较长时间里的财富增长。几个月后要付的学费和十年后才用的养老钱，适合的安排并不相同，[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)会专门讨论。

资金量、愿意投入的时间和手头的资源，也会影响方法的选择。资金量较大时，要考虑能否按预期的价格买入或卖出；准备频繁交易，就要为研究和交易留出相应的时间。常见的投资方法各有侧重：短线交易关注较短时间里的买卖机会，量化投资借助数据和规则组织判断与执行，价值投资则重视企业价值与买入价格的关系，这些做法也可以结合使用。这套笔记以股票的基本面研究为主线，走的就是前面 GEV 例子里的思路。

## 主要资产与投资工具 {#nb-a01-assets}

安排资金时，我们还会遇到股票以外的选择：有些钱要为近期支出留作现金，有些钱可以长期投资，基金和合约工具则会改变所承担的风险。在下面的互动表中选择一个名称，就能查看它怎样运作、回报从哪里来，以及对应的学习安排。[^asset-overview]

<div class="asset-overview" data-asset-overview>
<nav aria-label="主要资产与币种"><span class="asset-group-label">主要资产与币种</span>
<button type="button" data-asset-choice="cash" aria-pressed="false">现金与存款</button>
<button type="button" data-asset-choice="debt" aria-pressed="false">债券</button>
<button type="button" data-asset-choice="equity" aria-pressed="false">股票与非上市股权</button>
<button type="button" data-asset-choice="property" aria-pressed="false">房地产</button>
<button type="button" data-asset-choice="commodity" aria-pressed="false">商品与黄金</button>
<button type="button" data-asset-choice="digital" aria-pressed="false">数字资产</button>
<button type="button" data-asset-choice="currency" aria-pressed="false">外币</button>
</nav>
<nav aria-label="基金与合约"><span class="asset-group-label">基金与合约</span>
<button type="button" data-asset-choice="funds" aria-pressed="false">基金与 ETF</button>
<button type="button" data-asset-choice="reits" aria-pressed="false">REITs</button>
<button type="button" data-asset-choice="options" aria-pressed="false">期权</button>
<button type="button" data-asset-choice="futures" aria-pressed="false">期货</button>
<button type="button" data-asset-choice="perpetuals" aria-pressed="false">永续合约</button>
<button type="button" data-asset-choice="prediction" aria-pressed="false">预测市场</button>
</nav>
<div aria-live="polite">
<section data-asset-panel="cash"><h3>现金与存款</h3><table><tbody>
<tr><th scope="row">是什么</th><td>现金用于支付和保留可用资金；银行存款则按账户约定存放、支取或计息。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>现金本身不计息，计息存款取得利息。比较实际结果时，还要考虑费用与购买力变化。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-U" data-planned-entry="NB-U01">存款、货币基金与短债</a></td></tr>
</tbody></table></section>
<section data-asset-panel="debt"><h3>债券</h3><table><tbody>
<tr><th scope="row">是什么</th><td>债券代表一笔按约定付息或偿还的债务，政府和企业都可以发行债券融资。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>回报包括收到的利息，以及卖出所得或到期偿还本金相对买入价的差额，还要扣除费用。收回的本金要与收益分开辨认。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-R" data-planned-entry="NB-R01">债券的现金流与收益</a>；<a href="/zh/notebook/#topic-R" data-planned-entry="NB-R03">信用、违约与偿债能力</a></td></tr>
</tbody></table></section>
<section data-asset-panel="equity"><h3>股票与非上市股权</h3><table><tbody>
<tr><th scope="row">是什么</th><td>持有股权，就是拥有企业的一部分股份。上市股票可以在交易所买卖，非上市股权有不同的交易与退出安排。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>公司分配与股权价格变化共同影响持有结果；企业赚到的利润还可能留在公司继续经营。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/stocks-company-price/">股票、公司与股价</a>；<a href="/zh/notebook/shareholder-returns-buybacks-issuance/">股东回报：分红、回购与增发</a></td></tr>
</tbody></table></section>
<section data-asset-panel="property"><h3>房地产</h3><table><tbody>
<tr><th scope="row">是什么</th><td>投资者可以直接持有房产，取得出租或出售的所得。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>租金和买卖价差构成主要所得，维护、空置、税费和融资等因素影响最终结果。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-X" data-planned-entry="NB-X02">房地产、租金与持有成本</a></td></tr>
</tbody></table></section>
<section data-asset-panel="commodity"><h3>商品与黄金</h3><table><tbody>
<tr><th scope="row">是什么</th><td>原油、农产品等商品有生产和消费用途，黄金也用于首饰、工业和投资。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>直接持有现货主要承受价格变化，并承担相应持有成本；黄金本身不支付利息或股息。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-X" data-planned-entry="NB-X01">商品、黄金与回报来源</a>；<a href="/zh/notebook/#topic-X" data-planned-entry="NB-X03">实物资产、基金与期货的持有差别</a></td></tr>
</tbody></table></section>
<section data-asset-panel="digital"><h3>数字资产</h3><table><tbody>
<tr><th scope="row">是什么</th><td>比特币等原生代币与稳定币具有不同的设计。稳定币通常尝试维持与某种货币或资产的价值联系。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>现货价格变化影响持有结果；质押、借贷等额外收益需要另看具体机制。稳定币的实际价格也可能偏离它所跟踪的价值。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-L" data-planned-entry="NB-L01">永续合约的价格锚定与资金费</a>；<a href="/zh/notebook/#topic-L" data-planned-entry="NB-L04">合约计价与完整持有结果</a>（相关工具）</td></tr>
</tbody></table></section>
<section data-asset-panel="currency"><h3>外币</h3><table><tbody>
<tr><th scope="row">是什么</th><td>外币是相对于生活所用币种的另一种货币，也可以用于持有存款、债券等资产。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>换回生活所用货币时，汇率变化影响结果；能否取得利息等收入，取决于具体持有方式。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-U" data-planned-entry="NB-U01">存款、货币基金与短债</a>；<a href="/zh/notebook/compounding-inflation-opportunity-cost/">复利、通胀与机会成本</a></td></tr>
</tbody></table></section>
<section data-asset-panel="funds"><h3>基金与 ETF</h3><table><tbody>
<tr><th scope="row">是什么</th><td>基金汇集资金投资资产或执行策略；ETF 是可以在交易所交易的一类基金。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>底层资产、投资策略和费用共同影响结果。判断投资风险，要看基金实际持有什么以及怎样运作。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/indices-funds-etfs/">指数、基金与 ETF</a>；<a href="/zh/notebook/#topic-V" data-planned-entry="NB-V03">基金跟踪与投资者回报</a></td></tr>
</tbody></table></section>
<section data-asset-panel="reits"><h3>REITs</h3><table><tbody>
<tr><th scope="row">是什么</th><td>REITs（房地产投资信托）提供参与经营性房地产或房地产融资的证券投资途径。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>房地产经营或相关融资的所得支持分配，证券价格也会变化；费用和融资成本影响持有人结果。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-X" data-planned-entry="NB-X02">房地产、租金与持有成本</a>；<a href="/zh/notebook/indices-funds-etfs/">指数、基金与 ETF</a></td></tr>
</tbody></table></section>
<section data-asset-panel="options"><h3>期权</h3><table><tbody>
<tr><th scope="row">是什么</th><td><span data-text-versions id="nb-a01-options-text">买方付费，取得按约定条件<span data-text-detail>（包括期限和价格）</span>买入或卖出特定对象<span data-text-detail>（称为标的）</span>的权利；卖方承担相应义务。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span></td></tr>
<tr><th scope="row">回报从哪里来</th><td>买方支付、卖方收取权利金；各自的盈亏还要结合后续买卖、行权或到期结算的结果，以及相关费用来计算。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-G" data-planned-entry="NB-G01">期权权利、盈亏与退出</a></td></tr>
</tbody></table></section>
<section data-asset-panel="futures"><h3>期货</h3><table><tbody>
<tr><th scope="row">是什么</th><td>期货约定在未来按合约规则交付或结算，可涉及商品、股指、利率等对象。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>合约价格变化形成持仓盈亏，并通过结算影响账户资金；保证金用于履约，投入的保证金不代表最大可能损失。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-K" data-planned-entry="NB-K05">个股期货、股票永续与代币化股票</a>；<a href="/zh/notebook/settlement-margin-cash/">保证金、对冲与期间现金</a></td></tr>
</tbody></table></section>
<section data-asset-panel="perpetuals"><h3>永续合约</h3><table><tbody>
<tr><th scope="row">是什么</th><td>永续合约通常没有固定到期日，常见设计通过资金费等安排使价格与现货保持联系。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>价格变化、资金费收付与交易费用共同影响结果；持仓需要满足保证金要求，保证金不足可能触发强制平仓。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-L" data-planned-entry="NB-L01">永续合约的价格锚定与资金费</a></td></tr>
</tbody></table></section>
<section data-asset-panel="prediction"><h3>预测市场</h3><table><tbody>
<tr><th scope="row">是什么</th><td>参与者交易按具名事件及约定条件结算的合约。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>买卖或结算所得减去投入与费用，形成持有盈亏；结果取决于合约规定的事件与判定方式。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-H" data-planned-entry="NB-H01">事件合约与概率报价</a></td></tr>
</tbody></table></section>
</div></div>

这些资产和工具的收付款方式各不相同。无论持有哪一种，计算一笔投资的结果，都要把期间收到的现金、仍持有资产的价值和最初的投入放在一起，并扣除相应的费用。[^returns]

## 这套笔记的路线 {#nb-a01-path}

沿着 GEV 的例子，我们也能看出接下来要学什么：看懂订单，要了解客户为什么采购、企业怎样满足这些需要；分清收入、利润和现金，要学习它们怎样进入财务报表；判断一只股票是否值得以当前价格买入，还要学会比较可能的回报与损失。整套笔记按下面的顺序展开：

<figure class="flow-figure research-loop route-strip" id="nb-a01-route">
<div class="ff-head"><p class="ff-title">这套笔记的主线</p><span class="ff-sub">共 73 篇，主线 43 篇</span></div>
<ol class="rl-steps">
<li class="rs-here"><span class="rl-who rl-who-agent">10 篇</span><strong>认识股票、市场与组合</strong><small>本篇所在的起点</small></li>
<li><span class="rl-who">15 篇</span><strong>理解企业与财务</strong><small>客户、收入、竞争、利润与投入</small></li>
<li><span class="rl-who">6 篇</span><strong>形成证据与投资判断</strong><small>概率、定价与 Risk-Reward</small></li>
<li><span class="rl-who">9 篇</span><strong>Agent 研究、判断与持续培养</strong><small>读材料、校准业务、前向记录</small></li>
<li><span class="rl-who">3 篇</span><strong>Agent 资本取舍与持续配置</strong><small>研究整合与持续配置</small></li>
</ol>
<p class="rs-optional"><strong>按需专题 30 篇</strong><span>金融条件与替代资产</span><span>基金跟踪与业绩比较</span><span>趋势规则与量化检验</span><span>保证金、对冲与股票合约</span><span>实物资产与期货</span><span>期权价格与策略</span><span>永续机制与持有结果</span><span>预测市场与经营判断</span></p>
<figcaption>主线按顺序读；按需专题在实际用到时再读。完整篇目见<a href="/zh/notebook/reading-route/">阅读路线</a>。</figcaption>
</figure>

研究企业之前，基础部分先弄清我们买到的是什么、持有时会遇到什么：一股代表公司的哪一部分，股份怎样发行和流通，公司又怎样通过分红、回购和增发改变每股所得；随后认识指数与基金、报价与成交，再看回报怎样随时间累积、资金什么时候要动用、亏损和波动怎样考验持有能力，最后把几项持仓放进同一个组合。保证金、对冲以及期权、期货等合约工具放在按需专题里，实际用到时再读。下一篇[《股票、公司与股价》](/zh/notebook/stocks-company-price/)从买入一股股票讲起，看持有人实际拥有什么，股价和市值又怎样与公司经营相连。

<script type="module" src="/notebook/intro-interactions.js"></script>
<script src="/notebook/flow-figures.js?v=20261012-5" defer></script>

[^stocks]: [FINRA：Stocks](https://www.finra.org/investors/investing/investment-products/stocks)。
[^gev-order]: [GE Vernova：2023年 EnBW 发电项目订单公告](https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability)。
[^gev-suppliers]: [GE Vernova：Gas Power Suppliers](https://www.gevernova.com/gas-power/about/suppliers)。
[^gev-annual]: [GE Vernova：2025年报](https://www.gevernova.com/sites/default/files/gevernova_2025_annual_report.pdf#page=56)，Note 2，报告内页44–45（PDF 第56–57页）：设备与服务的收入确认、开票及收款安排。
[^earnings]: [FINRA：What Is Earnings Season?](https://syndication.finra.org/content/what-earnings-season)，“How Does Earnings Season Impact Stocks?”。
[^asset-overview]: 现金与存款：[FINRA—Bank Products](https://www.finra.org/investors/investing/investment-products/bank-products)；债券：[FINRA—Bonds](https://www.finra.org/investors/investing/investment-products/bonds)，尤其是 Total Return 与 Zero-Coupon Bond 词条；股权：[FINRA—Stocks](https://www.finra.org/investors/investing/investment-products/stocks)；房地产：[ASIC Moneysmart—Buying an investment property](https://moneysmart.gov.au/property-investment/buying-an-investment-property)；商品：[FINRA—Futures and Commodities](https://www.finra.org/investors/investing/investment-products/futures-and-commodities)；黄金：[World Gold Council—Gold Demand Sectors](https://www.gold.org/about-gold/gold-demand/by-sector)、[The challenge](https://www.gold.org/goldhub/research/golds-long-term-expected-returns/the-challenge) 开篇关于实物黄金现金流的说明，以及 [FINRA/CFTC 实物贵金属说明](https://syndication.finra.org/content/investor-bulletin-10-things-ask-buying-physical-gold-silver-or-other-metals)第5–8项；数字资产：[FINRA—Crypto Assets](https://www.finra.org/investors/investing/investment-products/crypto-assets)、[Ethereum.org—Staking](https://ethereum.org/staking/) 中的“What is staking?”及 [Investor.gov—Crypto Asset Interest-bearing Accounts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/investor-bulletin-crypto-asset-interest-bearing-accounts)；外币：[Investor.gov—International Investing](https://www.investor.gov/introduction-investing/investing-basics/investment-products/international-investing) 中的汇率变化说明；基金与 ETF：[FINRA—Exchange-Traded Funds and Products](https://www.finra.org/investors/investing/investment-products/exchange-traded-funds-and-products)；REITs：[Investor.gov—Real Estate Investment Trusts](https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits)；期权：[FINRA—Options](https://www.finra.org/investors/investing/investment-products/options)；期货：[CFTC—Basics of Futures Trading](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/FuturesMarketBasics/index.htm) 及 [CME—Margin: Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)；永续合约：[Coinbase—Understand perpetuals trading](https://www.coinbase.com/advanced-perpetuals) 及 [Funding rates](https://help.coinbase.com/en/coinbase/derivatives/funding-rate)；预测市场：[CFTC—Understanding Prediction Markets and Event Contracts](https://www.cftc.gov/LearnandProtect/PredictionMarkets)。
[^returns]: [FINRA：Return and Rate of Return](https://syndication.finra.org/content/key-concepts-return-and-rate-return)。


[^enbw-share]: [EnBW：Share](https://www.enbw.com/investors/share/)，Key figures of the EnBW share，德国市场代码 EBK。
