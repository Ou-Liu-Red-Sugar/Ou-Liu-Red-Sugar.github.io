{
  "title": "行权、指派与账户现金流",
  "description": "按平仓、实物行权、指数现金结算和空头抵押四条路径列账，区分现金、负债、权益和新投入.",
  "layout": "entry",
  "notebookid": "zh-m17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m17"
}

<a id="m17-actions"></a>
## 一、平仓、行权与指派

期权持有人可以卖出已有期权平仓，也可在合约允许时行权. **平仓是期权交易，行权是使用合约权利，指派是将履约义务分配给相应卖方持仓.** 卖出平仓取得期权交易价，行权则产生合约规定的证券或现金交收. [^MEFG-ODD][^MEFG-OIC-EXERCISE]

美式期权允许在规定营业日提前行权；欧式期权限于相应到期安排. 选择何时行权时，不只看当前价内程度，还要比较卖出期权能收多少钱、提前支付行权货款的资金代价、标的分配以及失去的剩余选择权. 合约允许某个动作，不代表那个动作在当前报价下最合算.

从账户看，期权卖方也不是始终对最初那个买方履约. OCC体系在清算会员层承接和分配相应义务，客户层再按适用程序处理. 这就是为什么实际行权通知、指派通知、交易回报和交收可能在不同时间出现. [^MEFG-ODD]

<a id="m17-physical"></a>
## 二、股票call的平仓与实物行权

取一份标准股票call作教学账：每份100股，$K=100$，最初以每股4买入，权利金400. 后来观察到股票可卖报价105，call的bid／ask为6／6.2.

先假设各腿都可按给定价格执行，忽略费用. 卖出期权平仓，使用call的bid 6，收到600，原交易损益 $600-400=200$. 若提前行权，再卖掉取得的股票，则按合约付10,000、收100股，再按股票bid收10,500，扣原400后损益100. [^MEFG-OCC-EQUITY][^MEFG-OIC-EXERCISE]

| 路径 | 期权现金 | 行权股票／货款 | 后续卖股 | 原交易名义损益 |
|---|---:|---|---:|---:|
| 卖出call平仓 | 初始−400，后来＋600 | 无 | 无 | ＋200 |
| 行权后卖股 | 初始−400 | −10,000，＋100股 | ＋10,500，−100股 | ＋100 |

这里call的可卖价6，高于立即交换差额5；按这组可执行报价，直接行权会放弃每股1美元、全份100美元的剩余可卖价值. 其他报价、分红、融资与可执行条件改变时，应重新比较两条现金路径.

10,000是行权买股的货款毛额. 若先付款、后取得股票再出售，需要先筹到这笔钱；同步卖出、交收净额或券商授信可以改变峰值新增现金需求.

我们用相对事件日记时间：期权成交日为 $T$，其权利金现金交收与头寸记录不是同一事件；行权日在另一个营业日 $E$，OCC普通股票规格列示股票于随后第一个营业日交付. 它可能是 $E+1$，却不必是买入期权后的 $T+1$. [^MEFG-OIC-T1][^MEFG-OCC-EQUITY]

<a id="m17-index"></a>
## 三、SPXW的现金结算

Cboe所列SPX与SPXW都是欧式现金结算、每点100美元，但结算值形成方式不同：传统SPX采用AM安排，SPXW采用其规定的PM安排. 本例只取SPXW的现金分支. [^MEFG-SPX]

设 $K=5,000$，最初权利金50点，即5,000美元；最终结算值5,025. 到期支付为
$$
100(5,025-5,000)=2,500\text{ 美元},
$$
扣原权利金后名义损益为−2,500美元. 没有股票流入，也不发生 $K\times100$ 的买入指数“货款”. 价内只说明支付为正，不说明初始投资已被覆盖. 合约的结算现金于规则规定的营业日到达清算流程，个人账户显示还要服从相应处理.

最终结算金额使用该系列指定的exercise settlement value. AM与PM采用不同采价时点，相同的普通收盘指数不能同时替代两套结算值.

<a id="m17-margin"></a>
## 四、空头期权的抵押资产、负债与权益

现在换到一份普通股票裸call卖方. 教学输入为 $S=100$、$K=105$、权利金4、乘数100；后来 $S=120$，期权按17标记. OCC网页给出的这一类最低客户规则，可在本例写成
$$
\begin{aligned}
A_{\rm req}
 &=100\left[V+\max\left(0.20S-\max(K-S,0),\,0.10S\right)\right],\\
E_{\rm req}&=A_{\rm req}-100V.
\end{aligned}
$$
$A_{\rm req}$ 是包含期权价值部分的总抵押资产要求，$E_{\rm req}$ 是扣除空头负债后的权益要求. 维持时用当前期权价值代替最初收到的权利金. 这组公式对应OCC网页列示的普通股票裸call最低客户保证金；券商附加要求、组合抵扣和其他产品规则需要另行输入. [^MEFG-OCC-EQUITY]

开仓时要求总资产 $100[4+\max(20-5,10)]=1,900$；其中400来自卖出权利金，自有投入1,500. 价格变化后要求变成 $100[17+\max(24,12)]=4,100$. 注意，期权涨价先增加的是空头负债，不像期货每日变动现金那样自动把差额从本例现金栏扣走.

| 时点 | 现金／抵押资产 | 空头期权负债 | 净权益 | 本步客户新增现金 |
|---|---:|---:|---:|---:|
| 开仓后 | 1,900 | 400 | 1,500 | 1,500 |
| 价格变化，未补款 | 1,900 | 1,700 | 200 | 0 |
| 补足要求后 | 4,100 | 1,700 | 2,400 | 2,200 |
| 按17买回平仓后 | 2,400 | 0 | 2,400 | 0 |

累计自有投入 $1,500+2,200=3,700$；最终剩2,400，损失1,300. 也可从期权本身核对：收到400、买回付1,700，同样−1,300.

4,100为总抵押资产要求，2,400为扣除空头负债后的权益，2,200为本次需追加现金，1,300为交易损失. 外部现金少于2,200时，这条补款路径出现缺口，后续结果取决于追加融资或平仓的实际条件. 标的继续上涨仍可增加卖方义务. [^MEFG-ODD]

<a id="m17-timing"></a>
## 五、到期流程与多腿持仓的操作条件

到期附近，清算会员层的exercise-by-exception程序与客户对券商发出的指令不是一回事. 阈值处理、反向指令、客户截止以及资金能力都有各自规则. 只知道某腿价内，不能保证客户一定会按自己想象的路径取得股票；也不能保证被指派的短腿与另一条保护长腿自动同一时刻处理. [^MEFG-OIC-EXERCISE]

美式call提前行权需要比较取得股票的分红、期权剩余可卖价值及提前支付$K$的资金代价. 卖方被指派后，已持有现货者交付现货，无现货者需取得交付证券；两者面临的资金与执行条件不同.

<div data-experiment-slot="EXP-MEFG-M17-LIFECYCLE"></div>

<a id="m17-exercises"></a>
## 六、账户路径练习

**题一.** 教学股票call的可卖bid为6，而股票bid为105、$K=100$. 忽略费用，为什么提前行权后卖股少100美元？

**解析.** 平仓把整张期权以600卖掉；立即行权交换只取得500差额. 原始400成本在两条路径中都扣一次，所以两者最终损益相差100.

**题二.** 上表价格变化、尚未补款时，净权益为什么是200而不是1,900？随后“补到4,100”是否表示又亏了2,200？

**解析.** 账户有1,900现金，同时欠一份价值1,700的期权，净权益为200. 转入2,200只增加资产与投入资本，并不再产生2,200交易损失；已有损失仍为权利金负债从400升到1,700的1,300. 补后权益2,400与累计投入3,700相差同样1,300.

**题三.** 到期SPXW价内25点，是否意味着至少赚2,500？

**解析.** 2,500是该例现金支付. 最初支付5,000权利金，所以名义损益−2,500；计入资金时间和费用还需进一步调整. 支付正、损益正是两个命题.

**题四.** 你的短call已被指派，账户还有另一份长call. 为什么不能仅据此跳过资金检查？

**解析.** 两腿可能有不同期限、行权方式和客户处理时点. 即使最终支付能形成保护，短腿要求的股票／现金与长腿是否、何时行权仍要逐项核.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-OIC-EXERCISE]: Options Industry Council，*Options Exercise FAQ*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/referencelibrary/faq/options-exercise). 本篇定位：Full FAQ main body through exercise/closing distinction.

[^MEFG-OCC-EQUITY]: OCC，*Equity Options Product Specifications*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications). 本篇定位：Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin.

[^MEFG-OIC-T1]: Options Industry Council，*The Impact of T+1 on Options / Understanding T+1 Conversion*，July 2024. [原文](https://www.optionseducation.org/news/understanding-t-1-conversion). 本篇定位：Article body, full.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
