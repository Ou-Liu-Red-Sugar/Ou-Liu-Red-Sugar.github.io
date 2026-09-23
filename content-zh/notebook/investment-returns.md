{
  "title": "Agent 时代的基本面投资",
  "description": "从资金用途出发，以一项业务看清企业经营、事件计价与 Agent 辅助研究。",
  "layout": "entry",
  "notebookid": "zh-investment-returns",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-investment-returns"
}

<link rel="stylesheet" href="/notebook/intro-interactions.css">

## 投资目标与方法 {#nb-a01-goals}

我们希望投资带来的回报能够支持未来的生活，但每个人需要这笔钱的时间和方式并不相同。用投资所得补充日常收入时，我们会关心现金何时到账；为多年后的支出积累资金时，则要考虑较长时间里的财富增长。投资之前，先要弄清楚资金承担什么任务，再决定怎样安排它。

选择投资方式，还要考虑资金规模、可投入的时间和能够使用的资源。大额资金需要考虑市场能否容纳自己的买卖，频繁交易需要投入相应的时间和研究资源。常见做法各有侧重：短线交易关注较短时间里的交易机会，量化投资借助数据和规则组织判断与执行，价值投资则重视企业价值与买入价格的关系。这些侧重可以交叉，投资者需要结合自己的条件选择和运用。

这套笔记以股票的基本面研究为主线。我们从企业的经营出发，研究它靠什么赚钱、未来可能怎样变化，再把这些认识与买入价格放在一起，比较潜在回报和损失。Agent 可以协助查找资料、追踪上下游和整理新事件；要把这些材料用于投资判断，我们需要理解业务，辨认依据。本篇从一项具体业务开始，展示这种研究怎样展开，以及我们需要为此学习什么。

## 企业与业务 {#nb-a01-business}

买入股票，就持有了企业的一部分股份。一家公司可能同时经营多项业务，它们面对的客户、竞争者和资金需要各不相同。研究时，我们先把公司拆成一项项业务，弄清它们分别为谁提供什么、怎样获得收入，再把各项业务放回整个公司，判断股东可能得到什么。[^stocks]

以 GE Vernova（股票代码 GEV）的燃气发电设备业务为例。2023年，该业务宣布接获德国能源公司 EnBW 的订单，为替换燃煤机组的项目提供燃气轮机、配套发电机等设备；项目还包括工程建设和后续维护服务，GEV 与工程合作方共同参与。沿着这笔设备订单，我们可以看清一项业务怎样连接客户与上游。[^gev-order]

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

采购订单与付款发生在相应的交易双方之间：客户向设备供应方采购，GEV 也需要向自己的供应商采购。图中省略了工程建设伙伴和具体电力交易环节。[^gev-suppliers]

先看客户为什么购买设备。电厂可能需要增加供电能力，也可能需要替换原有机组；建设计划、资金安排和设备要求共同影响采购与交付。在这笔业务中，电厂运营商负责发电和供电，GEV 提供设备与服务。研究设备需求时，我们就需要把视线从 GEV 延伸到客户正在建设什么、为什么建设，以及项目能否按计划推进。

一笔订单首先约定双方未来要做什么。GEV 要组织采购、制造和交付，并按合同履约情况确认收入，也就是把相应金额记入财务报表。客户实际付款的进度可能与收入确认不同，供应商也有自己的收款安排。我们既要比较收入与采购、生产、服务等成本，判断业务能赚多少钱，也要看收付款的时间，判断这段过程需要投入多少资金。[^gev-annual]

设备投入使用后，GEV 还可能继续为客户提供服务。前述 EnBW 项目就包含后续维护安排。已经安装的设备需要保养、检修和零部件，这使服务业务能够在设备交付之后继续取得收入。因此研究这项业务既要看新设备需求，也要看已有设备的运行与维护需求。[^gev-order][^gev-annual]

我们还要把这项业务放回整个公司。其他业务的盈亏、公司共同费用、债务和再投资安排，都会影响最终留给股东的结果。结合股份数量，我们才能把公司的经营成果放到每股的尺度上理解，进一步讨论一股股票所代表的未来所得，以及自己愿意为它支付什么价格。

## 事件、预期与市场计价 {#nb-a01-events}

经营前景会随着需求、竞争和供给条件变化，市场也不断围绕订单、财报、技术进展和政策等事件更新预期与价格。基本面研究为判断这些变化提供依据：一条消息有多大分量，要看它改变了哪些经营条件。

再看一条新增设备订单的消息。它是否说明客户的需求正在扩大？GEV 能否利用现有产能完成交付，还是需要追加投资？上游供货、人工与服务成本会不会随之改变？这些问题决定新增订单能够带来怎样的利润和现金。订单金额本身还没有回答它们，研究者需要沿着前面的业务图继续查证。

即使经营上的影响已经看清，也还要与市场原先的预期比较。如果市场早已期待这笔订单，公告可能只是兑现预期；如果订单显示出此前未被充分认识的需求，投资者便有新的依据调整对未来经营的判断。财报也有类似情况：公布好业绩，并不自动意味着股价上涨，市场还会比较此前预期和公司对未来的展望。[^earnings]

基本面研究因此既要了解已经发生的经营结果，也要判断未来的需求、竞争、盈利和资金安排。我们跟踪事件，是为了据新信息修正这些认识，并比较当前价格与自己判断的经营前景。这些判断随着经营和信息变化而更新，研究也就需要持续进行。

## Agent 辅助的持续研究 {#nb-a01-agents}

这些判断的依据分散在公司披露、客户的项目安排、供应商资料和竞争者的信息里。沿着业务关系取得材料，再核对它们能否相互支持，需要持续投入时间。Agent 可以参与这项工作，帮助我们从一家公司查到它的客户和供应商，再按问题继续追查相关项目与需求。

研究 GEV 的设备订单时，我们可以让 Agent 查找客户的建设计划，了解采购的用途和时间；查找上游供货与产能信息，核对交付需要哪些条件；比较其他设备供应商的产品与服务，理解客户有哪些选择。我们先找到与 GEV 直接相关的公司，再沿着实际问题继续查它们的业务联系。每一步都应当回答一个问题，并将所得材料带回 GEV 的这项业务。

取得资料后，我们还要比较其中的依据，分清已经发生的事实、管理层的预期和研究中的假设。Agent 可以保留来源、整理前后变化，并在后续出现新信息时帮助更新；我们需要理解为什么调整判断，以及哪些问题还没有得到回答。后面的笔记会逐步把金融常识、业务研究与这些资料工作结合起来，再将公司判断用于资产配置。

## 主要资产与投资工具 {#nb-a01-assets}

股票研究只是资金安排中的一部分。我们还需要保留可用现金，比较不同资产，并在适当的时候调整已有的风险。这套笔记也会介绍其他主要资产，以及基金和合约工具怎样参与投资。

下面的互动表提供一个初步概览。选择名称，可以查看它是什么、回报从哪里来，以及后续的相关词条。相关词条链接指向笔记目录中对应主题的写作计划，便于查看后续学习安排。主要资产与基金、合约分组显示，外币另说明计价与换算关系。[^asset-overview]

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
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-U" data-planned-entry="NB-U01">存款、货币基金与短债</a>；<a href="/zh/notebook/#topic-U" data-planned-entry="NB-U02">现金的可用时间与配置用途</a></td></tr>
</tbody></table></section>
<section data-asset-panel="debt"><h3>债券</h3><table><tbody>
<tr><th scope="row">是什么</th><td>债券代表一笔按约定付息或偿还的债务，政府和企业都可以发行债券融资。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>回报包括收到的利息，以及卖出所得或到期偿还本金相对买入价的差额，还要扣除费用。收回的本金要与收益分开辨认。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-R" data-planned-entry="NB-R01">债券的现金流与收益</a>；<a href="/zh/notebook/#topic-R" data-planned-entry="NB-R03">信用、违约与偿债能力</a></td></tr>
</tbody></table></section>
<section data-asset-panel="equity"><h3>股票与非上市股权</h3><table><tbody>
<tr><th scope="row">是什么</th><td>持有股权，就是拥有企业的一部分股份。上市股票可以在交易所买卖，非上市股权有不同的交易与退出安排。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>公司分配与股权价格变化共同影响持有结果；企业赚到的利润还可能留在公司继续经营。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-S" data-planned-entry="NB-S01">股票、公司与股价</a>；<a href="/zh/notebook/#topic-S" data-planned-entry="NB-S02">股东回报与分红</a></td></tr>
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
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-L" data-planned-entry="NB-L01">永续合约与价格锚定</a>；<a href="/zh/notebook/#topic-L" data-planned-entry="NB-L04">合约计价与完整持有结果</a>（相关工具）</td></tr>
</tbody></table></section>
<section data-asset-panel="currency"><h3>外币</h3><table><tbody>
<tr><th scope="row">是什么</th><td>外币是相对于生活所用币种的另一种货币，也可以用于持有存款、债券等资产。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>换回生活所用货币时，汇率变化影响结果；能否取得利息等收入，取决于具体持有方式。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-U" data-planned-entry="NB-U01">存款、货币基金与短债</a>；<a href="/zh/notebook/#topic-A" data-planned-entry="NB-A04">复利、通胀与机会成本</a></td></tr>
</tbody></table></section>
<section data-asset-panel="funds"><h3>基金与 ETF</h3><table><tbody>
<tr><th scope="row">是什么</th><td>基金汇集资金投资资产或执行策略；ETF 是可以在交易所交易的一类基金。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>底层资产、投资策略和费用共同影响结果。判断投资风险，要看基金实际持有什么以及怎样运作。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-V" data-planned-entry="NB-V01">基金、ETF 与实际持仓</a>；<a href="/zh/notebook/#topic-V" data-planned-entry="NB-V03">费用、跟踪结果与折溢价</a></td></tr>
</tbody></table></section>
<section data-asset-panel="reits"><h3>REITs</h3><table><tbody>
<tr><th scope="row">是什么</th><td>REITs（房地产投资信托）提供参与经营性房地产或房地产融资的证券投资途径。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>房地产经营或相关融资的所得支持分配，证券价格也会变化；费用和融资成本影响持有人结果。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-X" data-planned-entry="NB-X02">房地产、租金与持有成本</a>；<a href="/zh/notebook/#topic-V" data-planned-entry="NB-V01">基金、ETF 与实际持仓</a></td></tr>
</tbody></table></section>
<section data-asset-panel="options"><h3>期权</h3><table><tbody>
<tr><th scope="row">是什么</th><td>买方支付权利金，取得在约定期限和价格条件下买入或卖出标的的权利；卖方承担相应义务。标的是合约约定的交易对象。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>盈亏取决于期权的买卖或结算结果、权利金与费用。买卖双方可以用它调整已有资产的风险，也可以表达对价格变化的判断。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-G" data-planned-entry="NB-G01">期权交易与权利金的流向</a>；<a href="/zh/notebook/#topic-G" data-planned-entry="NB-G02">期权支付、盈亏与退出</a></td></tr>
</tbody></table></section>
<section data-asset-panel="futures"><h3>期货</h3><table><tbody>
<tr><th scope="row">是什么</th><td>期货约定在未来按合约规则交付或结算，可涉及商品、股指、利率等对象。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>合约价格变化形成持仓盈亏，并通过结算影响账户资金；保证金用于履约，投入的保证金不代表最大可能损失。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-K" data-planned-entry="NB-K01">期货合约与价格暴露</a>；<a href="/zh/notebook/#topic-K" data-planned-entry="NB-K02">保证金、逐日结算与资金</a></td></tr>
</tbody></table></section>
<section data-asset-panel="perpetuals"><h3>永续合约</h3><table><tbody>
<tr><th scope="row">是什么</th><td>永续合约通常没有固定到期日，常见设计通过资金费等安排使价格与现货保持联系。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>价格变化、资金费收付与交易费用共同影响结果；持仓需要满足保证金要求，保证金不足可能触发强制平仓。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-L" data-planned-entry="NB-L01">永续合约与价格锚定</a>；<a href="/zh/notebook/#topic-L" data-planned-entry="NB-L02">资金费与持有成本</a></td></tr>
</tbody></table></section>
<section data-asset-panel="prediction"><h3>预测市场</h3><table><tbody>
<tr><th scope="row">是什么</th><td>参与者交易按具名事件及约定条件结算的合约。</td></tr>
<tr><th scope="row">回报从哪里来</th><td>买卖或结算所得减去投入与费用，形成持有盈亏；结果取决于合约规定的事件与判定方式。</td></tr>
<tr><th scope="row">相关词条</th><td><a href="/zh/notebook/#topic-H" data-planned-entry="NB-H01">事件合约与预测市场</a>；<a href="/zh/notebook/#topic-H" data-planned-entry="NB-H02">合约价格与概率</a></td></tr>
</tbody></table></section>
</div></div>

回到前面买入股票的情形，我们需要把期间收到的现金、仍持有股份的价值与最初投入一起考虑，并扣除相应费用，才能看完整笔投资的结果。后面的词条会分别解释各类资产的收付关系，再讨论怎样让它们共同服务自己的资金目标。[^returns]

## 从基础认识到投资体系 {#nb-a01-path}

前面的业务例子已经显出了需要学习的内容：看懂订单和客户，需要业务知识；分清收入、利润与现金，需要财务知识；判断经营前景是否值得当前价格，还需要学习怎样比较回报与损失。我们会先补足资金安排和市场工具的常识，再逐步把这些判断连接起来。

在此基础上，Agent 可以参与资料核实、事件跟踪和持续更新，公司研究也能逐步进入持仓比较与资产配置。这条学习路径仍从自己的资金用途开始。下一篇先讨论投资期限与现金需要，弄清一笔钱能够投入多久，以及什么时候需要将它取出来。

[^stocks]: [FINRA：Stocks](https://www.finra.org/investors/investing/investment-products/stocks)。
[^gev-order]: [GE Vernova：2023年 EnBW 发电项目订单公告](https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability)。
[^gev-suppliers]: [GE Vernova：Gas Power Suppliers](https://www.gevernova.com/gas-power/about/suppliers)。
[^gev-annual]: [GE Vernova：2025年报](https://www.gevernova.com/sites/default/files/gevernova_2025_annual_report.pdf#page=56)，Note 2，报告内页44–45（PDF 第56–57页）：设备与服务的收入确认、开票及收款安排。
[^earnings]: [FINRA：What Is Earnings Season?](https://syndication.finra.org/content/what-earnings-season)，“How Does Earnings Season Impact Stocks?”。
[^asset-overview]: 现金与存款：[FINRA—Bank Products](https://www.finra.org/investors/investing/investment-products/bank-products)；债券：[FINRA—Bonds](https://www.finra.org/investors/investing/investment-products/bonds)，尤其是 Total Return 与 Zero-Coupon Bond 词条；股权：[FINRA—Stocks](https://www.finra.org/investors/investing/investment-products/stocks)；房地产：[ASIC Moneysmart—Buying an investment property](https://moneysmart.gov.au/property-investment/buying-an-investment-property)；商品：[FINRA—Futures and Commodities](https://www.finra.org/investors/investing/investment-products/futures-and-commodities)；黄金：[World Gold Council—Gold Demand Sectors](https://www.gold.org/about-gold/gold-demand/by-sector)、[The challenge](https://www.gold.org/goldhub/research/golds-long-term-expected-returns/the-challenge)开篇关于实物黄金现金流的说明，以及[FINRA/CFTC 实物贵金属说明](https://syndication.finra.org/content/investor-bulletin-10-things-ask-buying-physical-gold-silver-or-other-metals)第5–8项；数字资产：[FINRA—Crypto Assets](https://www.finra.org/investors/investing/investment-products/crypto-assets)、[Ethereum.org—Staking](https://ethereum.org/staking/)中的“What is staking?”及[Investor.gov—Crypto Asset Interest-bearing Accounts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/investor-bulletin-crypto-asset-interest-bearing-accounts)；外币：[Investor.gov—International Investing](https://www.investor.gov/introduction-investing/investing-basics/investment-products/international-investing)中的汇率变化说明；基金与 ETF：[FINRA—Exchange-Traded Funds and Products](https://www.finra.org/investors/investing/investment-products/exchange-traded-funds-and-products)；REITs：[Investor.gov—Real Estate Investment Trusts](https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits)；期权：[FINRA—Options](https://www.finra.org/investors/investing/investment-products/options)；期货：[CFTC—Basics of Futures Trading](https://www.cftc.gov/LearnAndProtect/AdvisoriesAndArticles/FuturesMarketBasics/index.htm)及[CME—Margin: Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)；永续合约：[Coinbase—Understand perpetuals trading](https://www.coinbase.com/advanced-perpetuals)及[Funding rates](https://help.coinbase.com/en/coinbase/derivatives/funding-rate)；预测市场：[CFTC—Understanding Prediction Markets and Event Contracts](https://www.cftc.gov/LearnandProtect/PredictionMarkets)。
[^returns]: [FINRA：Return and Rate of Return](https://syndication.finra.org/content/key-concepts-return-and-rate-return)。

<script type="module" src="/notebook/intro-interactions.js"></script>
