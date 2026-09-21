{
  "title": "标记价格、抵押品与强平：触发规则与余额传播",
  "description": "先选择保证金模式和触发价格，再读逐仓阈值、分档需求、抵押折扣及保险基金和ADL.",
  "layout": "entry",
  "notebookid": "zh-m26",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m26"
}

<a id="m26-purpose"></a>
## 一、指数价、标记价与成交价

最新成交价记录市场成交，指数价提供外部市场参考，标记价用于估值与风险触发. Bybit逐仓清算采用标记价，按最新成交价触发的止损则使用另一价格；两者可能先后触发. [^M26-mark][^M26-liquidation]

强平价负责触发处置，实际减仓仍经市场执行；破产价服务于客户结算与损失承接. 三者对应不同对象和时点，不能合并为同一成交价格.

<a id="m26-modes"></a>
## 二、保证金模式与风险边界

下文数值主例采用线性USDT逐仓模式. 2026-08-04规则页中的三种模式分别按以下范围计算风险. [^M26-modes]

| 模式 | 风险触发 | 单仓强平价显示 | 抵押资产范围 |
|---|---|---|---|
| 逐仓 isolated | 标记价达到该头寸强平价 | 该头寸实际触发价 | 对应合约的结算资产 |
| 全仓 cross | 账户维持保证金率达到100% | 仅估算／参考 | 符合资格的多资产折算 |
| 组合 portfolio | 账户维持保证金率达到100% | 不适用 | 多资产及组合风险模型 |

“账户维持保证金率”是平台定义的账户风险比率；下一节的0.5%则是单仓档位要求. 全仓与组合计算依赖完整账户状态，组合模式不显示单仓参考强平价. 下文的单仓数值例采用逐仓公式.

<a id="m26-linear"></a>
## 三、逐仓 USDT 强平阈值

原例做多1 BTC，入场40,000 USDT，杠杆50倍，随后另加3,000 USDT保证金；假定该档维持保证金率 $m=0.005$、taker费率 $c=0.055\%$、维持保证金扣减 $D=0$. 这些是规则页的**官方示例参数**. [^M26-liquidation]

先拆金额. 入场名义量40,000 USDT并非初始支付的保证金. 按原例预计平仓费为

$$
\mathrm{FeeClose}=40{,}000(1-1/50)\times0.055\%=21.56.
$$

于是另加保证金之前，示例初始保证金为 $40{,}000/50+21.56=821.56$ USDT；入场参照下的维持额为 $40{,}000\times0.005+21.56=221.56$ USDT. 21.56是预估费用预留，不保证最终就支付这一笔费用.

令 $q$ 为BTC数量、$E$ 为入场价、$\ell$ 为杠杆、$A$ 为额外保证金. 原页多头阈值公式是

$$
P_{\rm liq}
=\frac{Eq-Eq/\ell-A/(1-c)-D}{q(1-m)}.
$$

代入 $q=1,E=40{,}000,\ell=50,A=3{,}000$：

$$
P_{\rm liq}
=\frac{40{,}000-800-3{,}000/(1-0.055\%)}{1-0.005}
\approx36{,}380.25.
$$

强平阈值取决于数量、杠杆、保证金、维持档位与预计关闭费. 这些输入变化时须重新计算；平台显示值还会受关闭费估算差异影响. [^M26-liquidation]

<a id="m26-mark"></a>
## 四、标记价触发与最新成交价止损

按2026-09-04规则页的正常永续分支，标记价取Price 1、Price 2和最新成交价的中位数. Price 2使用盘口中价与指数之差的短窗移动平均；异常数据另按回退规则处理. [^M26-mark]

现在给定**合成输入**：指数36,350，上一资金费率0.01%，距资金费时点4小时，公式所用分母8小时，平均基差30，最新成交36,500. 则

$$
\begin{aligned}
P_1&=36{,}350[1+0.01\%(4/8)]\approx36{,}351.818,\\
P_2&=36{,}350+30=36{,}380,\\
P_{\rm mark}&=\operatorname{median}(36{,}351.818,36{,}380,36{,}500)\\
&=36{,}380.
\end{aligned}
$$

与上一节清算阈值比较：$36{,}380\le36{,}380.25$，逐仓多头已触发清算. 若另设一张**按最新成交价触发**的教学止损，触发线36,400，那么最新成交36,500尚未到线. 两者没有矛盾，因为它们读的价格不同.

36,380在此例中只承担标记价与清算触发的比较；实际减仓价格由市场执行决定. Mark Price 与资金费事件各自按对应规则参数计算，某次资金费频率变化不自动改写标记价公式.

<div data-experiment-slot="EXP-MHIJ-M26-LIQUIDATION-01"></div>

模式切换会改变判断范围：逐仓用单仓阈值，全仓与组合用账户MMR与100%比较. 后两种模式需完整账户输入才能给出触发判断.

<a id="m26-collateral"></a>
## 五、维持保证金与抵押品认可值

维持保证金分档通常意在让新增风险对应新增要求，而非在跨档时把以前整段名义额突然重算成完全不同金额. 已读示例对前五个1,000额度分别用2%、2.5%、3%、3.5%、4%. 对3,500 USDT名义额，前三档各1,000，第四档只有500：[^M26-maintenance]

$$
MM=1{,}000(0.02+0.025+0.03)+500(0.035)=92.5.
$$

等价写法为 $3{,}500\times3.5\%-30$，其中30是使分段累计结果一致的维持保证金扣减. 教学资金350减92.5得257.5，表示该快照下初始保证金与维持保证金的差额；关闭费与后续价格变化尚未计入.

另设无头寸、订单或借款的多抵押钱包：0.1 BTC按50K USD/BTC计值5K USD，采用教学认可比例90%时，合资格值为4.5K USD；指数跌至40K后，合资格值降至3.6K USD. 市场价格决定美元市值，认可比例决定其中可计入的抵押值. [^M26-collateral][^M26-modes]

<div data-experiment-slot="EXP-MHIJ-M26-COLLATERAL-01"></div>

分档USDT头寸与BTC钱包属于两个独立教学状态. 在逐仓USDT模式下，BTC不能作为该头寸的额外抵押品，但其市场价值仍单独存在.

<a id="m26-loss"></a>
## 六、清算、保险基金与 ADL

Bybit逐仓流程先取消会扩大仓位的活动订单；高于最低档时，还可以通过部分IOC减仓向低档移动；仍不能满足要求，才进入相应接管和平仓. [^M26-liquidation]

保险基金的原文又区分客户按破产价结算和市场上的实际平仓. 用它的价格例，加上教学数量1 BTC：强平触发65,000、破产价64,000；若市场实际退出64,980，较破产价好的980 USDT进入保险基金；若只能63,950退出，差50 USDT由基金承接. [^M26-insurance]

ADL则是特定条件下对相反方向头寸自动减仓的安排. 已读2026-04-13文档列了两类触发／停止：其一与过去八小时保险基金的回撤触发线和停止线有关，未必等到余额为零；其二与多个独立保险池合并余额不大于零及恢复为正有关. 处置会按相应规则匹配相反方向头寸，并按定义的破产价结算. 盈利的反向持仓也可能被匹配减仓.[^M26-adl]

保险基金和ADL决定违约缺口如何分配给系统资本与其他持仓方，因而影响压力情况下头寸能否继续持有及最终结算路径.

<a id="m26-inverse"></a>
<details class="reading-optional" data-reading-branch="inverse">
<summary>完整选读：反向空头官方例，BTC保证金账</summary>

反向例为空30,000 USD合约数量，入场60,000 USD/BTC，10倍杠杆，没有额外保证金；$m=0.5\%,c=0.055\%$. 先算币数量：$30{,}000/60{,}000=0.5$ BTC. 按原例的估费口径，平仓费预留为 $0.5(1-1/10)c$ BTC，即247.5µBTC. 初始额为50mBTC加247.5µBTC，共50,247.5µBTC；入场维持额为2.5mBTC加247.5µBTC，共2,747.5µBTC. [^M26-liquidation]

反向空头的公式和线性多头不能互换. 若 $Q$ 用USD，$A,D$ 都用BTC，原页给出

$$
P_{\rm liq,short}
=\frac{Q(1-m)}{Q/E-Q/(E\ell)-A/(1-c)-D}.
$$

分母是BTC，分子是USD，因此结果是USD/BTC. 代入本例为

$$
\frac{30{,}000(1-0.005)}{0.5-0.05}
\approx66{,}333.333\ \text{USD/BTC}.
$$

反向空头在价格向上触及阈值时进入清算，线性多头则向下触及. 两条公式分别使用各自的头寸方向、结算币和保证金单位.

</details>

<a id="m26-exercises"></a>
## 七、触发规则与余额检验

**题一：本例最新成交36,500高于止损36,400，为什么仍可先进入逐仓清算？**

解析：止损读取最新成交，清算读取标记价. 正常median得到36,380，已不高于逐仓多头阈值36,380.25. 它只确定触发，不确定实际执行价.

**题二：把同一头寸改称组合保证金，就能把36,380.25作为“参考强平价”吗？**

解析：不能. 组合模式的单仓强平价显示不适用，触发看账户MMR. 全仓在原表中保留估算参考价；计算账户触发状态需完整账户输入.

**题三：3,500名义额若直接乘3.5%，比92.5多多少？这是否是另外一笔费用？**

解析：$122.5-92.5=30$. 它是分档累计与单率写法间的扣减，不是交易费或现金返还. 350−92.5的差额同样不是锁定最大亏损.

**题四：保险基金仍有余额，为什么不能排除ADL？**

解析：第一类触发使用八小时回撤条件，不等价于基金余额归零；另一类才涉及多个池合并余额. 必须分别核币对当时的触发和停止参数，不能只用一个总余额推出结论.

**题五（反向分支）：50,247.5µBTC若直接减一笔50 USDT费用会怎样？**

解析：两项以不同币种计量，应按规定的换算率和时点转换后再计算. µBTC为百万分之一BTC，50,247.5µBTC约为0.05BTC.

[^M26-mark]: <strong>Bybit，Mark Price (Perpetual and Expiry Contracts)</strong>，updated 2026-09-04 10:32:20. [原文](https://www.bybit.com/en/help-center/article/Mark-Price-Calculation-Perpetual-Expiry-Contracts). 定位：Perpetual Contracts常规median构造、price1/price2/last及异常回退边界；本例仅常规分支. 采用范围：常规标记价的风险估值身份及median组成.

[^M26-liquidation]: <strong>Bybit，Trading Rules: Liquidation Process (Unified Trading Account)</strong>，updated 2026-08-07 02:22:50. [原文](https://www.bybit.com/en/help-center/article/UTA-Trading-Rules-Liquidation-Process). 定位：Isolated Margin页签的Overview、阶梯清算过程、USDT long与Inverse short公式/例；用于逐仓条件公式与官方教学例，触发、接管和实际成交是不同阶段.

[^M26-modes]: **Bybit，Differences Between the Margin Modes Under the Unified Trading Account**，updated 2026-08-04 13:44:59. [原文](https://www.bybit.com/en/help-center/article/Differences-Between-the-Margin-Modes-Under-the-Unified-Trading-Account). 定位：完整Comparison of Margin Modes表，特别Asset Mode、Liquidation Trigger Criteria、Liquidation Price Display；切换条件. 采用范围：逐仓/全仓/组合触发和资产模式；组合没有单仓显示强平价.

[^M26-maintenance]: **Bybit，Maintenance Margin**，updated 2026-04-16. [原文](https://www.bybit.com/en/help-center/article/Maintenance-Margin-USDT-Contract). 定位：分档边际维持率、MM deduction及3,500名义额例；关闭费说明. 采用范围：边际档位与扣减，92.5是当前示例需求不是最大亏损.

[^M26-collateral]: **Bybit，Understanding Collateral Value Ratios in Unified Trading Account**，updated 2026-03-30. [原文](https://www.bybit.com/en/help-center/article/Assets-Collateral-Value-Ratio-List-UTA). 定位：无头寸/订单/借款余额公式；amount×USD index×eligible ratio；分档与限制说明. 采用范围：市场换币与认可比例分开；90%属于本项目教学参数.

[^M26-insurance]: **Bybit，Insurance Fund**，updated 2026-03-24 02:50:27. [原文](https://www.bybit.com/en/help-center/article/Insurance-Fund). 定位：全文，特别How Do Insurance Funds Work及65,000/64,000/64,980/63,950例. 采用范围：客户破产价结算与实际清算价之差由保险基金增减承接.

[^M26-adl]: **Bybit，Auto-Deleveraging (ADL) Mechanism**，updated 2026-04-13 03:29:06. [原文](https://www.bybit.com/en/help-center/article/Auto-Deleveraging-ADL). 定位：What is ADL；Trigger & Stop Condition 1及2；How does ADL work. 采用范围：两类触发停止与相反方向减仓.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>
