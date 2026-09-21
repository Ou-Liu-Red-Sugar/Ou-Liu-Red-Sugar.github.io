{
  "title": "动态对冲：离散交易、成本与借款事件",
  "description": "用同一条价格路径复算delta调仓、现金与借款，比较离散对冲误差、交易成本和资金需求.",
  "layout": "entry",
  "notebookid": "zh-p26",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-p26"
}

短看涨期权的支付随标的价格变化. Delta对冲用股票的一阶敏感度抵消期权的一阶价格敏感度，但delta会变、交易只能离散进行，每次调整还会产生交易成本与融资现金流. 下面把离散误差、交易成本和借款事件放在同一时间轴上.

EXP-HEDGE-01采用假想可交易股票和模型欧式看涨期权. 默认30/365年、16个区间、单边5bps价差；另设100、102、101、104的四价格路径，分别用于分布比较和逐事件账本复算.

<a id="p26-contract"></a>
## Delta与一阶敏感度

模型中 $S_0=K=100$，年波动率20%，连续复利借贷利率同为3%，无分红，乘数100. 卖出一张模型call收到约240.958美元；每单位delta约0.529，因此最初买约52.857股.

光滑期权价值 $C(t,S)$ 满足 $dC\approx C_SdS+\text{时间及二阶项}$. 短100单位call配 $q=100C_S$ 股抵消当前一阶价格项. $C_S$ 随价格和期限变化，离散调仓留下区间内误差；连续复制依赖连续交易、无交易成本和相应模型条件.[^bs26]

最初约52.857股值约5,285.688美元；价差成本约为 $0.05\%\times100\times52.857\approx2.643$. 账户现金约为

$$
C_0=240.958-5,285.688-2.643\approx-5,047.373.
$$

本例允许借款，负现金记为融资负债. 股票加现金价值约238.315，比权利金少初始交易成本；股票敞口约5,285.688，由权利金和借款共同融资.

<a id="p26-ledger"></a>
## 自融资现金递推

在 $t_k$ 到来时，先让旧现金按 $e^{r\Delta t_k}$ 计息；负现金意味着借款利息继续增加. 然后观察 $S_k$，用当时的信息计算新目标 $q_k$，成交 $\Delta q_k=q_k-q_{k-1}$，并扣价差成本. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
C_k&=C_k^- -S_k\Delta q_k-cS_k|\Delta q_k|.
\end{aligned}
$$

买股 $\Delta q>0$ 时减少现金，卖股时增加现金，两侧均扣成本. 该递推为自融资关系，目标持股由当前可得信息决定.

手算路径为 $100\to102\to101\to104$，每步10/365年，仍是5bps. 每一行均包含新持仓、计息与现金：

| 时点 | 股票价 | 旧现金计息后 | 成交股数 | 价差成本 | 成交后股票 | 成交后现金 |
|---|---:|---:|---:|---:|---:|---:|
| 0 | 100 | 240.958 | +52.857 | 2.643 | 52.857 | −5,047.373 |
| 第10天 | 102 | −5,051.523 | +15.635 | 0.797 | 68.492 | −6,647.114 |
| 第20天 | 101 | −6,652.58 | −5.111 | 0.258 | 63.381 | −6,136.595 |
| 第30天 | 104 | −6,141.641 | −63.381 | 3.296 | 0 | 446.666 |

到期平掉股票并计平仓价差，再支付 $100\max(104-100,0)=400$，留下约46.666美元对冲误差. 利息已进入递推；计算回报率时另指定资本分母.

<a id="p26-borrowing"></a>
## 借款峰值

成交后现金的最大借款约6,647.114美元，发生在第10天；到下一次卖股前，负现金继续计息：

$$
6,647.114\,e^{0.03\times10/365}
\approx6,652.580.
$$

成交后最大借款约6,647.114，计息后、成交前峰值约6,652.58. 正利率下负现金的绝对值在两次交易间增加，授信检查采用后者.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P26-a.svg" alt="四价格手算路径的借款事件：第20天卖股前的利息峰值不能被成交后余额遮住. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">手算路径的借款峰值</p><p class="pfh-figure-note">独立100→102→101→104路径；四价格手算</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>成交后借款</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>计息后、成交前</span></li></ul><p class="pfh-axis-label">美元；横轴为模型日数</p><div class="pfh-plot" style="--pfh-y-label-ch:9"><div class="pfh-y-ticks"><span style="top:100.0%">-798.31</span><span style="top:75.0%">1,263.99</span><span style="top:50.0%">3,326.29</span><span style="top:25.0%">5,388.59</span><span style="top:0.0%">7,450.89</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,174.93 318.33,128.38 541.67,143.24 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,321.77 318.33,174.81 541.67,128.23 765.00,143.09" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="174.9272649766499" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="128.3848219599289" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="143.2377201945158" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="174.80651925624304" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="143.09091756606665" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">0</span><span class="" style="left:33.333333333333336%">10</span><span class="" style="left:66.66666666666667%">20</span><span class="last" style="left:100.0%">30</span></div></div></div></figure>

若额度为5,000，初始交易所需借款约5,047.373美元，路径在 $t=0$ 即不可执行；新增自有现金则形成另一资金分支. 若额度为6,650，第20天计息后、卖股前仍超出约2.580美元.

默认模拟允许无限对称借贷. 引入授信上限后，超限路径失去可执行性；继续计算终值需另定强平、减仓或追加资本规则.

<a id="p26-frequency"></a>
## 调仓频率与成本

共同实验使用同一组8,192条冻结模型路径，比较4、16、64、256个区间及0、5、20bps价差；因此区间数变化的比较不混入重新抽样差异. 以5bps为例：

| 区间数 | 平均误差（美元） | 样本标准差 | 对零均方误差（美元²） | 平均名义交易成本 |
|---:|---:|---:|---:|---:|
| 4 | −7.116 | 94.29 | 8,940.22 | 7.815 |
| 16 | −11.025 | 48.54 | 2,477.443 | 11.383 |
| 64 | −17.926 | 25.952 | 994.765 | 17.907 |
| 256 | −30.822 | 16.401 | 1,218.955 | 30.701 |

标准差随频率上升而降低，但64至256区间的MSE增加：更频繁交易增加成本，平均误差变得更负. MSE同时衡量方差与均值偏离；在这组设计中，64区间的5bps MSE最低.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P26-b.svg" alt="误差与成本分别观察：更低的标准差不必对应更低的含成本均方误差. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">交易频率与含成本MSE</p><p class="pfh-figure-note">同组8,192条模拟路径的频率与成本比较</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>含成本MSE</span></li></ul><p class="pfh-axis-label">美元²；横轴为区间数（按类别等距展示）</p><div class="pfh-plot" style="--pfh-y-label-ch:9"><div class="pfh-y-ticks"><span style="top:100.0%">41.31</span><span style="top:75.0%">2,504.4</span><span style="top:50.0%">4,967.49</span><span style="top:25.0%">7,430.58</span><span style="top:0.0%">9,893.68</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 318.33,285.66 541.67,321.77 765.00,316.31" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="318.33333333333337" cy="285.65668303895325" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="541.6666666666667" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="316.3130079101545" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">4</span><span class="" style="left:33.333333333333336%">16</span><span class="" style="left:66.66666666666667%">64</span><span class="last" style="left:100.0%">256</span></div></div></div></figure>

默认16区间、5bps的首条模型路径包含17行，股价由100至约96.518，期权支付为零，对冲资产终值约−8.526. CSV记录逐路径的 `gross_error`、`cost`、`net_error`及十二设计汇总，可作配对比较.

<div data-experiment-slot="EXP-P26-DYNAMIC"></div>

实验改变区间数或价差，比较均值、MSE和成本；四价格路径另用于第20天事件账与该路径的授信检查.

<a id="p26-limit"></a>
## 执行条件与替代

跳跃扩大两次观察间的价格变化，波动率错估改变目标delta，流动性不足改变成交价格，授信限制约束持股数量. 各自对应不同的压力变量和处置动作.

降低短期权数量会减少义务规模，购入另一张期权可改变尾部支付，退出短期权则终止对应义务. 这些替代改变了对冲对象，可与提高调仓频率分别比较.[^cf26]

<a id="p26-exercises"></a>
## 练习与解析

**解释题.** 第20天卖出约5.111股，为什么此前现金还先变得更负？

第10天借款约6,647.114，到第20天先增加利息约5.466，再计卖股收入及约0.258成本，借款降至约6,136.595.

**迁移题.** 四价格路径的借款上限设为5,000，其他不变. 哪个事件首先违反限制？

初始交易需借约5,047.373，因此 $t=0$ 建仓即不可执行. 减少数量或增加自有资金后，按新持仓重建账本.

[^bs26]: Vasily Strela，MIT 18.S096，[Lecture 19: Risk Neutral Pricing / Black–Scholes Formula](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf)，slides13–22.
[^cf26]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，WP2025-17、2025-09-04，§2.3.1与§3.1. 共同实验本身的完整输入与账本见随附EXP-HEDGE-01数据说明.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>
