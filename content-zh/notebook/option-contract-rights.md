{
  "title": "期权合约：谁拥有选择，谁承担义务",
  "description": "从真实股票、ETF与SPXW规格辨认选择权、写出义务和交易单位；解释权利金的价格约束，并分开行权货款.",
  "layout": "entry",
  "notebookid": "zh-m15",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m15"
}

<a id="m15-purpose"></a>
## 一、把“将来要交易”与“将来可以选择交易”分开

我们先接着远期来看. 假设一家企业三个月后可能需要采购一批资产. 签一份远期，可以现在约定将来按什么条件交换；但如果采购计划取消，远期义务并不会随企业的心情取消. 企业真正需要的也许不是锁住交易，而是保留一种选择：需要时可以买，不需要时可以放弃. 期权就是把这种不对称的决策权写进合约的一类安排. [^MEFG-MIT-OPTIONS]

这里的“选择”不是说交易双方都能随时反悔. **持有人取得合约规定的选择权；建立卖出头寸的一方承担被指派后按约履行的义务.** 谁能决定是否行权，正是它与双向承诺的重要区别. 我们仍沿金融权利的读法，先找对象、数量、条件和时间，不急着给它贴上“高风险”或“保险”的标签.

令标的价格为 $S$、行权价为 $K$. 实物交付的看涨期权（call）给持有人按 $K$ 买入规定标的数量的权利；看跌期权（put）给持有人按 $K$ 卖出规定数量的权利. 这两类权利各自可以被买入，也可以被卖出建立义务，所以有四个方向，而不是“call是买、put是卖”两个方向. 现金结算产品则按规定的结算值与 $K$ 的关系支付现金，不交付标的本身. [^MEFG-ODD]

| 建立的头寸 | 持有的权利或义务 | 实物交付时的主要现金／标的方向 |
|---|---|---|
| 买入call | 有权按 $K$ 买入标的 | 行权时支付货款，取得标的 |
| 卖出call | 被指派时按 $K$ 卖出标的 | 交付标的，收到货款 |
| 买入put | 有权按 $K$ 卖出标的 | 行权时交付标的，收到货款 |
| 卖出put | 被指派时按 $K$ 买入标的 | 支付货款，接收标的 |

“卖出call”也可能只是卖掉已经持有的call来平仓. 这时卖出的是已有权利，不一定形成新的裸卖方义务. 判断账户变化，要连同开仓／平仓标记与原持仓一起看. [^MEFG-ODD]

<a id="m15-price"></a>
## 二、权利金是选择权的价格，不是一张风险罚单

现在问一个更根本的问题：为什么取得这项选择通常要付钱？以call为例，到期时若标的低于 $K$，持有人可以不用较高的合约价格买；高于 $K$ 时则可以取得价差. 与必须双向履行的远期相比，持有人保留了有利方向、可以放弃不利交换. 这种支付结构本身就是被交易的资产.

但“卖方有风险，所以随便收一笔风险费”仍然没有解释价格为什么是这个数. 考虑一个简化市场：股票今天100，一期后只有120或90两种可能，现金一期增长到原来的1.02倍. 行权价105的call到期支付为15或0. 买半股需要50，同时借入 $750/17\approx44.12$；到期还45. 两个状态下，半股减去还款恰好是 $60-45=15$ 和 $45-45=0$. 因此复制这个支付只需今天净投入 $100/17\approx5.88$. 在允许这种融资和交易的无摩擦模型内，同样支付的call价格就受这个复制成本约束. 完整的交易和定价权重在后面的复制一篇展开. [^MEFG-MIT-OPTIONS][^MEFG-STATE]

这个小例子也说明，选择权有价格并不等于卖方稳赚. 未对冲卖方的未来支出随状态而变；对冲卖方要把收到的资金投入复制组合，不能把全部权利金立刻当作可消费的利润. 若一个支付在所有可能状态都为零，名称再像期权，也不会单凭“选择权”三个字在这个模型里产生正价值.

实际上市期权的条款由合约规范确定，权利金则通过报价和交易形成. 相同series在不同场所的报价也可能暂时不同. 合约规范告诉你买了什么，交易市场告诉你当时愿意以多少钱交换它；模型给出在特定条件下的价格约束. 三者不能互相替代. [^MEFG-ODD]

<a id="case-mefg-spx-rules-2026"></a>
<a id="m15-contract"></a>
## 三、读两种真实规格，而不是把“100”背成万能乘数

OCC的普通股票期权规格说明，标准合约通常对应100股，行权后发生股票交付；公司行动可能使调整后的合约不再等于100股. Cboe的SPX规格则给出每报价点100美元、欧式行权、现金结算的结构. 两个“100”的单位不一样. [^MEFG-OCC-EQUITY][^MEFG-SPX]

| 原件对象 | 每份合约的单位 | 行权方式 | 履约对象 |
|---|---|---|---|
| 标准美国股票期权 | 通常100股，调整合约需另核 | 美式 | 股票与行权货款 |
| ETF份额期权的本篇对照 | 通常100份ETF份额，具体系列需核 | 采用OCC所列美式规格 | ETF份额与行权货款 |
| SPX／SPXW | 每指数点100美元 | 欧式 | 按指定结算值计算的现金 |

ETF本身持有证券，并不意味着ETF期权必然现金结算. 这里交付的对象是ETF份额. 反过来，SPX是指数，不存在“行权后自动收到100股指数股票”的安排. [^MEFG-OCC-ETF][^MEFG-SPX]

美式表示合约允许在到期前的规定营业日行权，欧式把行权限制在指定到期安排；这不是交易所在地，也不是现金／实物结算的另一种叫法. 同样叫SPX的产品还须区分传统AM结算与SPXW的PM结算. 对于前者，结算值采用到期日成份股开盘价格；本篇采用的SPXW对照按规定的收盘价格形成结算值. 不能拿一个屏幕上的收盘指数读数替代所有系列的最终结算规则. [^MEFG-SPX]

<a id="m15-cash"></a>
## 四、一份权利对应的三笔钱

用一个明确的教学报价：股票call，$K=100$，每份100股，买入价每股4美元. 买一份的权利金为 $4\times100=400$ 美元. 这400是期权权利的购买价，不是股票的4%首付. 日后行权仍要支付 $100\times100=10,000$ 美元，取得100股；若选择卖出平仓，则是出售期权本身，不发生这笔行权买股. [^MEFG-ODD]

我们再把同样的“50”放到SPXW. 假设权利金报价50点，一份成本为 $50\times100=5,000$ 美元；若到期结算值比 $K$ 高25点，现金支付是2,500美元. 指数点、期权报价点与美元需要通过乘数连接，不能直接相加.

| 现金对象 | 本教学例中的数 | 它回答的问题 |
|---|---:|---|
| 股票call权利金 | 400美元 | 买入权利花了多少 |
| 股票call行权货款 | 10,000美元 | 真正交换100股需要付多少 |
| 卖方所需抵押 | 本节不填统一数值 | 卖方履约要提供什么支持 |

第三栏没有从400或10,000自动推出来. 抵押规则取决于产品、头寸和账户；它也不是卖方可能亏损的上限. 下一篇先比较到期所得与投资损益，再在行权一篇进入账户账本.

<a id="m15-explore"></a>
## 五、沿图读合约

<div data-experiment-slot="EXP-MEFG-M15-CONTRACT"></div>

实验把两件事放在同一个面板里. 上方权利卡随产品、call／put与多空方向变化，显示谁拥有选择、谁承担条件义务；下方两条曲线则只针对**当前选中的这一头寸**，分别画到期合约支付与扣除初始权利金后的名义交易损益. 两条曲线之间的垂直差额来自权利金现金，不是“多头与空头互为相反数”的两条支付线. 若切换同一合约的long／short，在其他教学输入不变时，对应支付和名义损益才分别反号. 先把标的价格移到 $K$ 的两侧，再问权利是否有价值，以及权利金怎样把支付变成交易损益.

无交互时，按 $K=100$、乘数100，直接检查下表即可. 所有金额都是到期经济支付；实物交收另按相应合约流程处理.

| 到期标的价格 | 买入call支付 | 买入put支付 | 卖出call支付 | 卖出put支付 |
|---:|---:|---:|---:|---:|
| 90 | 0 | 1,000 | 0 | −1,000 |
| 100 | 0 | 0 | 0 | 0 |
| 110 | 1,000 | 0 | −1,000 | 0 |

<a id="m15-exercises"></a>
## 六、把权利卡自己填完

**题一.** 某股票call每份100股，$K=100$，你以4买入一份. 标的升至105，准备行权. 是否只需再付9,600美元？

**解析.** 不对. 400购买的是期权，行权交换仍是100股乘100美元，即10,000. 以标的105做经济价值比较时，取得股票值10,500，交换本身产生500差额，再扣原权利金400才是忽略其他成本的100损益. 把400从行权货款再扣一次，就把权利金误当首付.

**题二.** 一份put的买方后来行权，谁买入标的？“put是卖，所以所有参与者都卖股票”有什么问题？

**解析.** put持有人有权交出标的并收取行权货款；被指派的put卖方负有接收标的、支付货款的义务. 相同合约的两边方向相反. 还须区分卖出已有put平仓与卖出开仓承担义务.

**题三.** 买入一份SPXW call后到期价内，为什么不能预期账户出现100股？

**解析.** 规格中的100是美元／指数点乘数，不是股票数. 最终现金额依据该系列指定结算值与 $K$ 的差形成；交易之前需要读到期与结算条款，而不是只看“call”名称.

**题四.** 在上面的120／90两状态模型中，卖方收到约5.88，能否立刻说这就是他的收益？

**解析.** 若不对冲，他仍可能支付15；若按复制方式对冲，他需要把5.88与借入的44.12一起买半股，并承担到期45的还款. 5.88是负债对应的市场价格，不是无条件净利润. 改变对未来状态的判断会改变未对冲持仓的期望结果，却不会在交易条件不变时自动改掉复制成本.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-OCC-EQUITY]: OCC，*Equity Options Product Specifications*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications). 本篇定位：Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin.

[^MEFG-OCC-ETF]: OCC，*ETF Options*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/etf-options). 本篇定位：Full displayed product body.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

