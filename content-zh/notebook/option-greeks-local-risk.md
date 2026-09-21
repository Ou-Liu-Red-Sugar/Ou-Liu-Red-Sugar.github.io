{
  "title": "Greeks：把局部导数变成带单位的风险",
  "description": "把delta、gamma、vega、theta写成带单位的局部导数，用50点和500点完整重定价量化误差.",
  "layout": "entry",
  "notebookid": "zh-m19",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m19"
}

<a id="m19-variables"></a>
## 一、先问“对哪个变量求导”

上一篇用价格模型把报价变成IV. 本篇暂时固定模型，问一个更局部的问题：如果一个输入稍微改变，当前价格大约怎样改变？Greeks就是把这个问题按不同变量拆开. 它们不是关于下一步涨跌的独立预测，也不是在任何变动幅度下都精确的赔付规则.

令期权价格为 $V(S,\sigma,\tau,r,q_{\rm div})$，其中 $\tau$ 是剩余年数. 固定其他变量，
$$
\Delta=\frac{\partial V}{\partial S},\qquad
\Gamma=\frac{\partial^2V}{\partial S^2},\qquad
\text{Vega}_{\rm abs}=\frac{\partial V}{\partial\sigma}.
$$
若用日历时间前进一日来定义theta，固定到期日时剩余年数减少 $1/365$，本篇的日theta是 $-\frac1{365}\frac{\partial V}{\partial\tau}$. 有些资料按年、交易日或其他单位报告，数值不能不经换算就拼在一张表上. [^MEFG-OIC-DELTA][^MEFG-OIC-GAMMA][^MEFG-OIC-VEGA][^MEFG-OIC-THETA]

<a id="m19-default"></a>
## 二、固定同一张合成call，给每个数标单位

使用与价格一篇完全相同的合成切片：$S=K=5,000$，$\tau=90/365$，$r=4\%$，$q_{\rm div}=0$，$\sigma=23.5\%$，欧式call，乘数100美元／期权点. 下面的Greeks均由同一BSM函数计算，是模型输出而非历史期权链观测值.[^MEFG-MIT-KOGAN]

| 对象 | 默认值 | 单位及解释 |
|---|---:|---|
| 价格 | 256.855895 | 期权报价点 |
| delta | 0.556803 | 每变动1指数点，期权点数的局部变化 |
| gamma | 0.000676807 | 每变动1指数点，delta的局部变化 |
| vega | 9.804437 | 波动率提高**1个百分点**时，期权点数的局部变化 |
| theta | −1.556972 | 日历前进1日时，固定其余输入的局部变化 |
| 合约乘数 | 100 | 每期权报价点对应美元 |

一份合约的delta金额敏感度约为55.68美元／指数点；vega约为980.44美元／波动率百分点. 将 $\sigma$ 从0.235变成0.245是提高1个百分点，而不是把 $\sigma$ 加1. 若使用数学导数 $\partial V/\partial\sigma$，其数值应比每百分点vega大100倍.

SPX指数也不是可直接买入的“一股股票”. 0.556803可以是模型对冲比率的起点，但实际用何种ETF、期货或组合实施，需要再做单位、基差和可成交性转换；这张表只给模型对指数水平的导数. [^MEFG-SPX]

<a id="m19-curvature"></a>
## 三、一次移动50点与500点，近似误差会发生什么

只改变 $S$ 时，泰勒展开给出
$$
\Delta V\approx\Delta\,\Delta S
+\frac12\Gamma(\Delta S)^2.
$$
保留第一项是delta近似，加入第二项是delta加gamma近似. 这里的 $\Delta,\Gamma$ 都在**起点**计算，不是在看到终点以后重新选择.

| 标的变动 | delta一阶变化 | delta＋gamma二阶变化 | 完整BSM重算变化 |
|---:|---:|---:|---:|
| ＋50指数点 | 27.840133 | 28.686142 | 28.679412 |
| ＋500指数点 | 278.401326 | 363.002261 | 353.164687 |

对50点变动，一阶少算约0.839279点；二阶误差仅约0.006730点. 对500点变动，二阶仍然比一阶更近，却高出约9.837574点. 现金误差还要乘100. **加入gamma不是给近似加一个“精确保证”，而是多保留一阶曲率信息.**

曲率为正也可以从图上读出来：call价格随 $S$ 上升时斜率逐渐变大，起点切线会低于完整凸曲线. 但移动大时，gamma自身也变；沿全区间使用起点gamma，仍是近似. OIC的局部解释和MIT的价格模型在这里各承担一层：一个教你导数意义，一个提供可重新计算的函数. [^MEFG-OIC-GAMMA][^MEFG-MIT-KOGAN]

<a id="m19-vol-time"></a>
## 四、波动率和时间的单位同样会放大错误

把 $S$ 固定，改 $\sigma$. 本例的每百分点vega给出的比较为：

| 波动率变化 | vega局部预测 | 完整重算 |
|---:|---:|---:|
| 23.5% → 24.5% | ＋9.804437点 | ＋9.805146点 |
| 23.5% → 33.5% | ＋98.044371点 | ＋98.067826点 |

这一次大幅变化下误差仍小，是本切片的具体结果，不是vega在所有行权价、期限上都线性的证据. 换到临近到期或远离平值的合约，敏感度形状会不同.

日theta为−1.556972，意思是保持现价、模型波动率、利率和股息输入不变，日历时间前进一日的局部效应. 真实市场到明天会同时改变许多输入，所以不能把theta直接当作明天必然少掉的价格. 欧式put还可能因收取 $K$ 的时点接近而出现正的日历时间效应；上一篇的深度价内反例正说明“持有期权每天必亏时间价值”不是无条件定理. [^MEFG-OIC-THETA]

若同时改变 $S,\sigma$ 和日历时间，可以先加起点delta、gamma、vega、theta项作局部估算，但跨变量项以及各导数的变化并不会消失. 本实验同时展示完整重算，避免把这类估算结果误当成真实账户路径.

<a id="m19-probability"></a>
## 五、delta不是“上涨概率”

在本无股息BSM call中，delta等于 $N(d_1)$；同模型定价概率下的到期价内概率为 $N(d_2)$. 本例两者分别为
$$
N(d_1)=0.556803,\qquad N(d_2)=0.510441.
$$
即使在这个非常规则的模型里，它们已经不同；更不能把任意产品的delta直接解释成现实概率 $P$ 下的胜率. [^MEFG-MIT-KOGAN]

把一项价格导数叫成概率，常常是因为0到1之间的数看起来很像概率. 但是它们的定义不同：delta问“当前价格对输入怎样变”，价内概率问“在某个概率模型下哪些终值状态发生”；还要再区分定价权重 $Q$ 和现实／研究概率 $P$. 后面复制一篇会从交易资产价格解释这种权重区别.

<div data-experiment-slot="EXP-MEFG-M19-GREEKS"></div>

实验第一视角画完整价格曲线、起点切线和起点二阶曲线；第二视角比较两种近似相对于完整重算的误差. 默认可直接选50点和500点，或者改波动率百分点、时间天数. 切到美元显示时只做100倍单位换算，不改变模型.

<a id="m19-exercises"></a>
## 六、把“近似”写进答案

**题一.** 一份本例call，指数上升50点，delta近似的美元变化是多少？二阶与完整重算分别是多少？

**解析.** 期权点变化依次为27.840133、28.686142和28.679412，乘100得到约2,784.01、2,868.61和2,867.94美元. 不要再乘一次5,000，也不要把delta当作要买入0.556803股“指数股票”的实盘指令.

**题二.** 某人把每百分点vega 9.804437乘以0.01，计算波动率从23.5%变24.5%的变化. 错在哪里？

**解析.** 9.804437本来已经是每一个百分点的报价量，应乘1. 若要乘0.01，应使用按一整个绝对 $\sigma$ 单位报告的导数980.443707. 两种单位正确换算后结果相同.

**题三.** 本例500点移动中二阶近似高于完整重算，是否否定gamma为正？

**解析.** 没有. gamma为正是价格函数在起点的曲率信息；大区间移动时曲率本身改变，还存在更高阶项. 二阶多项式不是整条价格函数.

**题四.** delta为0.556803，能否宣称“我有55.68%的真实概率盈利”？

**解析.** 不能. 首先delta是导数，本例连 $Q$ 下的价内概率都只有0.510441；其次价内不等于覆盖权利金后盈利；最后 $Q$ 不等于现实 $P$. 这三个区别要依次保留.

[^MEFG-OIC-DELTA]: Options Industry Council，*Delta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/delta). 本篇定位：Full main concept body.

[^MEFG-OIC-GAMMA]: Options Industry Council，*Gamma*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/gamma). 本篇定位：Full main concept body.

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/vega). 本篇定位：Full main concept body.

[^MEFG-OIC-THETA]: Options Industry Council，*Theta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/theta). 本篇定位：Full main concept body.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

