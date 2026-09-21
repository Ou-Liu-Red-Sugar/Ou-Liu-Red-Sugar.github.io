{
  "title": "动态对冲：离散交易、成本与借款事件",
  "description": "沿同一组动态对冲输入，用完整事件账比较离散误差、交易费用与借款峰值.",
  "layout": "entry",
  "notebookid": "zh-p26",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p26"
}

持有一张短看涨期权，卖方欠的是未来随价格变化的支付，而不是一个固定数. delta对冲尝试用股票的一阶敏感度去抵消期权的一阶敏感度. 困难在于delta不断变化，而股票只能在离散时点交易，交易要付钱，也可能要借钱. 本篇要把这三个问题——误差、成本与资金——放在同一条时间轴上.

我们沿用“离散动态对冲”词条的同一组输入（**EXP-HEDGE-01**）：假想可交易股票、模型欧式看涨期权，不是XSP指数“股票”或实盘期权回测. 默认比较为30/365年、16个区间、单边5bps价差；另给四个价格的独立手算路径用于解释账户. 这两个视图不互相冒充.

<a id="p26-contract"></a>
## 1. 一阶中性不意味着已经复制完毕

模型中 $S_0=K=100$，年波动率20%，连续复利借贷利率同为3%，无分红，乘数100. 卖出一张模型call收到240.9581446美元；每单位delta为0.5285688375，因此最初买52.85688375股.

对于光滑期权价值 $C(t,S)$，一小步可写 $dC\approx C_SdS+\text{时间及二阶项}$. 短100单位call配 $q=100C_S$ 股，抵消的是当前的 $dS$ 项. 之后 $C_S$ 会随价格与剩余期限改变，必须再调整；剩余二阶和离散误差不会因为第一次买到了正确股数就消失. 连续复制的理论还依赖模型、连续交易、融资和成本假设，不能把其理想关系直接当成实际执行保证. [^bs26]

最初这52.8569股值5,285.6884美元，收到的权利金远远不够. 价差成本另为 $0.0005\times100\times52.85688375=2.6428442$. 账户现金于是成为

$$
C_0=240.9581446-5,285.6883755-2.6428442
=-5,047.3730750.
$$

本实验明确允许借款，因此现金为负不是缺漏输入. 股票加现金的对冲资产价值为238.3153004，比收到的权利金少了初始交易成本. 若把短call负债也列入净值，成本已经使整体净值略为负数；买到股票的5,285.69对应的是融资后的资产敞口，不是凭空增加的资本.

<a id="p26-ledger"></a>
## 2. 现金先计息，再交易：完整递推

在 $t_k$ 到来时，先让旧现金按 $e^{r\Delta t_k}$ 计息；负现金意味着借款利息继续增加. 然后观察 $S_k$，用当时的信息计算新目标 $q_k$，成交 $\Delta q_k=q_k-q_{k-1}$，并扣价差成本. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
C_k&=C_k^- -S_k\Delta q_k-cS_k|\Delta q_k|.
\end{aligned}
$$

买股时 $\Delta q>0$，现金减少；卖股时 $\Delta q<0$，现金增加；成本在两个方向都扣. 这个公式是逐笔自融资关系：没有在中途从账户外免费加钱. 用下一时点价格决定当前成交，会把未来信息偷渡进交易；使用今天价但忽略当天价差，也会把真实成本删掉.

手算路径为 $100\to102\to101\to104$，每步10/365年，仍是5bps. 每一行均包含新持仓、计息与现金：

| 时点 | 股票价 | 旧现金计息后 | 成交股数 | 价差成本 | 成交后股票 | 成交后现金 |
|---|---:|---:|---:|---:|---:|---:|
| 0 | 100 | 240.958145 | +52.856884 | 2.642844 | 52.856884 | −5,047.373075 |
| 第10天 | 102 | −5,051.523306 | +15.635231 | 0.797397 | 68.492114 | −6,647.114221 |
| 第20天 | 101 | −6,652.579848 | −5.111312 | 0.258121 | 63.380802 | −6,136.595415 |
| 第30天 | 104 | −6,141.641265 | −63.380802 | 3.295802 | 0 | 446.666331 |

最后一行不是按到期delta继续买股，而是把股票全部平掉，包括平仓价差. 然后付 $100\max(104-100,0)=400$，留下46.6663306美元对冲误差. 这个误差是金额；比较策略回报时，还需要明确资本分母，并计入融资成本.

<a id="p26-borrowing"></a>
## 3. 两个借款峰值，对应两个不同的问题

只扫描成交后现金，会得到最大借款6,647.1142206，发生在第10天. 可是在下一次卖股之前，旧负现金继续计息：

$$
6,647.1142206\,e^{0.03\times10/365}
=6,652.5798479.
$$

所以，**成交后最大借款**是6,647.11，而**包含计息与交易前后事件的最大借款**是6,652.58. 用来问授信是否足够时，必须使用后者. 正利率下，负余额在这段连续计息期间绝对值增加，恰好在交易前达到该段峰值.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P26-a.svg" alt="四价格手算路径的借款事件：第20天卖股前的利息峰值不能被成交后余额遮住. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">手算路径：成交后与计息后不是同一点</p><p class="pfh-figure-note">独立100→102→101→104路径；不是默认16区间模拟</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>成交后借款</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>计息后、成交前</span></li></ul><p class="pfh-axis-label">美元；横轴为模型日数</p><div class="pfh-plot" style="--pfh-y-label-ch:9"><div class="pfh-y-ticks"><span style="top:100.0%">-798.31</span><span style="top:75.0%">1,263.99</span><span style="top:50.0%">3,326.29</span><span style="top:25.0%">5,388.59</span><span style="top:0.0%">7,450.89</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,174.93 318.33,128.38 541.67,143.24 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,321.77 318.33,174.81 541.67,128.23 765.00,143.09" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="174.9272649766499" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="128.3848219599289" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="143.2377201945158" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="174.80651925624304" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="143.09091756606665" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">0</span><span class="" style="left:33.333333333333336%">10</span><span class="" style="left:66.66666666666667%">20</span><span class="last" style="left:100.0%">30</span></div></div></div></figure>

若额度只有5,000，甚至不用走到第10天：初始交易已需5,047.373075，应该在 $t=0$ 拒绝建仓. 若另有自有现金，可以改变这个决定，但那是新分支，不能从旧账本里偷偷补出来. 若额度为6,650，则在第20天计息后、卖股前仍超过2.58；“再等一下卖股就好了”不能当作截止前已合规.

这里的授信检查只是叠加于已给路径的可行性检查，不会捏造资金失败后的强平价或终点盈亏. 真实受限策略还要定义减仓、对冲不足和处置规则，而本默认模拟允许无限对称借贷，没有这些限制.

<a id="p26-frequency"></a>
## 4. 更频繁交易，究竟改善哪一个指标？

共同实验采用同一组8,192条模型路径，比较4、16、64、256个区间及0、5、20bps价差. 这里直接读取所有者给出的结果，没有用浏览器重抽路径. 以5bps为例：

| 区间数 | 平均误差（美元） | 样本标准差 | 对零均方误差（美元²） | 平均名义交易成本 |
|---:|---:|---:|---:|---:|
| 4 | −7.116285 | 94.290319 | 8,940.220415 | 7.814989 |
| 16 | −11.025473 | 48.540395 | 2,477.443356 | 11.382855 |
| 64 | −17.925753 | 25.952152 | 994.764586 | 17.907440 |
| 256 | −30.821827 | 16.401293 | 1,218.954567 | 30.701484 |

标准差持续减小，但含成本的均方误差在64到256之间反而增加，因为更频繁交易积累了更负的平均误差. 均方误差同时包含离散误差和偏移；它不是“只看分散程度”的指标. 不同指标得出的最合适频率可能不同，而且这个样本上的最低值也不能升级为任何市场的普适最优频率.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P26-b.svg" alt="误差与成本分别观察：更低的标准差不必对应更低的含成本均方误差. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">更高频率不保证含成本MSE单调改善</p><p class="pfh-figure-note">同组8,192条模拟路径的频率与成本比较</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>含成本MSE</span></li></ul><p class="pfh-axis-label">美元²；横轴为区间数（按类别等距展示）</p><div class="pfh-plot" style="--pfh-y-label-ch:9"><div class="pfh-y-ticks"><span style="top:100.0%">41.31</span><span style="top:75.0%">2,504.40</span><span style="top:50.0%">4,967.49</span><span style="top:25.0%">7,430.58</span><span style="top:0.0%">9,893.68</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 318.33,285.66 541.67,321.77 765.00,316.31" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="285.65668303895325" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="316.3130079101545" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">4</span><span class="" style="left:33.333333333333336%">16</span><span class="" style="left:66.66666666666667%">64</span><span class="last" style="left:100.0%">256</span></div></div></div></figure>

默认16区间/5bps的第一条模型路径有17行，从100走到96.51833317，期权支付0，对冲资产终值−8.52644998. 它和上面的四价格手算路径是两条不同路径：一条适合逐笔核算，一条是共同模拟的具体样本. 随附两个完整CSV及十二设计的原有汇总；没有从汇总量伪造完整误差密度或新路径.

<div data-experiment-slot="EXP-P26-DYNAMIC"></div>

先看默认16/5摘要，再只改变区间数或价差，比较均值、均方误差和成本. 切换到“手算路径”后逐行核第20天；额度检查只对显示的这条路径作判断，不能把单条路径最大借款当8,192条路径的总体最大值.

<a id="p26-limit"></a>
## 5. 什么时候应该停止照搬模型？

跳跃会使观察间隔内价格跨过很大距离；波动率错估会使目标delta偏离；流动性不足会使给定价成交不能实现；授信限制会让原定持股无法买入. 这些不是同一个“参数误差”，要分别定义压力及处置.

对冲频率之外，直接降低短期权数量、用另一张期权覆盖尾部、或干脆不建立该义务，都是可考虑的替代. 它们改变的是义务规模或形状，而不是让原来的离散delta算法自动变成精确复制. Chicago Fed研究也明确把合成收益的理论解释与投资者能否实际复制分开；理解一种理论解释不等于取得了可交易利润. [^cf26]

<a id="p26-exercises"></a>
## 6. 自测与解析

**解释题.** 第20天卖出5.111312股，为什么此前现金还先变得更负？

从第10天至第20天，旧借款6,647.114221仍在计息，先增加5.465627美元；再卖股获得现金、扣0.258121成本，余额才降到借款6,136.595415. 交易缓解未来资金压力，不会倒着取消过去已经发生的利息.

**迁移题.** 对手算路径设置5,000借款上限，其他不变. 应在哪个事件停止？还可以给出最终46.67误差吗？

初始买入及价差后需要5,047.373075借款，所以 $t=0$ 就拒绝该建仓. 不能报告“受限方案仍留下46.67”，因为那是原无限融资路径的结果. 若要另算受限方案，必须明确从一开始如何改变数量或增加资本，不能继续沿用旧交易.

**完成标准.** 能区分模型复制、已给路径的实际现金检查，以及还未定义的受限策略；能复算一次借款峰值，同时拒绝用终点误差掩盖过程资金.

[^bs26]: Vasily Strela，MIT 18.S096，[Lecture 19: Risk Neutral Pricing / Black–Scholes Formula](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf)，slides13–22. slide16的现金函数启发不代替本文的逐步自融资账.
[^cf26]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，WP2025-17、2025-09-04，§2.3.1与§3.1. 共同实验本身的完整输入与账本见随附EXP-HEDGE-01数据说明.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

