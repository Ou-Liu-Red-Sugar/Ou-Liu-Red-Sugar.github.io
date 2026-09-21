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
## 一、Greeks 的变量与单位

Greeks是期权价格对各输入的局部导数. 它们给出小幅变动的近似；变动扩大时，需要比较导数近似与完整价格函数的重算结果.

令期权价格为 $V(S,\sigma,\tau,r,q_{\rm div})$，其中 $\tau$ 是剩余年数. 固定其他变量，
$$
\Delta=\frac{\partial V}{\partial S},\qquad
\Gamma=\frac{\partial^2V}{\partial S^2},\qquad
\text{Vega}_{\rm abs}=\frac{\partial V}{\partial\sigma}.
$$
若用日历时间前进一日来定义theta，固定到期日时剩余年数减少 $1/365$，本篇的日theta是 $-\frac1{365}\frac{\partial V}{\partial\tau}$. 有些资料按年、交易日或其他单位报告，数值不能不经换算就拼在一张表上. [^MEFG-OIC-DELTA][^MEFG-OIC-GAMMA][^MEFG-OIC-VEGA][^MEFG-OIC-THETA]

<a id="m19-default"></a>
## 二、同一模型切片下的 Greeks

使用与价格一篇完全相同的合成切片：$S=K=5,000$，$\tau=90/365$，$r=4\%$，$q_{\rm div}=0$，$\sigma=23.5\%$，欧式call，乘数100美元／期权点. 下面的Greeks均由同一BSM函数计算.[^MEFG-MIT-KOGAN]

| 对象 | 默认值 | 单位及解释 |
|---|---:|---|
| 价格 | 256.856 | 期权报价点 |
| delta | 0.557 | 每变动1指数点，期权点数的局部变化 |
| gamma | $6.768\times10^{-4}$ | 每变动1指数点，delta的局部变化 |
| vega | 9.804 | 波动率提高**1个百分点**时，期权点数的局部变化 |
| theta | −1.557 | 日历前进1日时，固定其余输入的局部变化 |
| 合约乘数 | 100 | 每期权报价点对应美元 |

一份合约的delta金额敏感度约为55.68美元／指数点；vega约为980.44美元／波动率百分点. 将 $\sigma$ 从0.235变成0.245是提高1个百分点，而不是把 $\sigma$ 加1. 若使用数学导数 $\partial V/\partial\sigma$，其数值应比每百分点vega大100倍.

0.557是模型对SPX指数水平的局部导数. 若以ETF、期货或其他组合实施对冲，还需转换单位并处理基差与可成交性.[^MEFG-SPX]

<a id="m19-curvature"></a>
## 三、Delta–Gamma 近似误差

只改变 $S$ 时，泰勒展开给出
$$
\Delta V\approx\Delta\,\Delta S
+\frac12\Gamma(\Delta S)^2.
$$
保留第一项是delta近似，加入第二项是delta加gamma近似. 这里的 $\Delta,\Gamma$ 均在起点计算.

| 标的变动 | delta一阶变化 | delta＋gamma二阶变化 | 完整BSM重算变化 |
|---:|---:|---:|---:|
| ＋50指数点 | 27.84 | 28.686 | 28.679 |
| ＋500指数点 | 278.401 | 363.002 | 353.165 |

对50点变动，一阶少算约0.839点；二阶误差仅约0.007点. 对500点变动，二阶仍然比一阶更近，却高出约9.838点. 现金误差还要乘100. gamma项保留了起点的二阶曲率.

call价格曲线的斜率随$S$增大，起点切线因而低于完整凸曲线. 起点gamma只能描述当地曲率；移动较大时，曲率变化会产生更高阶误差. [^MEFG-OIC-GAMMA][^MEFG-MIT-KOGAN]

<a id="m19-vol-time"></a>
## 四、Vega、Theta 与尺度

把 $S$ 固定，改 $\sigma$. 本例的每百分点vega给出的比较为：

| 波动率变化 | vega局部预测 | 完整重算 |
|---:|---:|---:|
| 23.5% → 24.5% | ＋9.804点 | ＋9.805点 |
| 23.5% → 33.5% | ＋98.044点 | ＋98.068点 |

本切片的vega近似误差较小；临近到期或远离平值时，vega随输入的变化形状不同，需重新比较误差.

日theta约−1.557，表示固定现价、模型波动率、利率与股息输入后，日历时间前进一日的局部价格变化. 次日市场价格还受其他输入变化影响. 对深度价内欧式put，时间流逝使收到$K$的时点接近，日theta可以为正. [^MEFG-OIC-THETA]

同时改变$S,\sigma$和日历时间时，起点delta、gamma、vega、theta之和仍遗漏交叉导数和其他高阶项. 实验显示完整重算结果及其与近似的差值.

<a id="m19-probability"></a>
## 五、Delta 与概率的区分

在本无股息BSM call中，delta等于 $N(d_1)$；同模型定价概率下的到期价内概率为 $N(d_2)$. 本例两者分别为
$$
N(d_1)\approx0.557,\qquad N(d_2)\approx0.510.
$$
两个数分别衡量局部价格敏感度和指定测度下的事件概率. [^MEFG-MIT-KOGAN]

其中$Q$由定价关系确定；研究现实发生频率时另需概率$P$. 改变现实概率判断可以改变期望损益，同时保留当前市场给出的定价权重.

<div data-experiment-slot="EXP-MEFG-M19-GREEKS"></div>

实验第一视角画完整价格曲线、起点切线和起点二阶曲线；第二视角比较两种近似相对于完整重算的误差. 默认可直接选50点和500点，或者改波动率百分点、时间天数. 切到美元显示时只做100倍单位换算，不改变模型.

<a id="m19-exercises"></a>
## 六、局部近似的适用范围

**题一.** 一份本例call，指数上升50点，delta近似的美元变化是多少？二阶与完整重算分别是多少？

**解析.** 期权点变化依次为27.84、28.686和28.679，乘100得到约2,784.01、2,868.61和2,867.94美元.

**题二.** 某人把每百分点vega 9.804乘以0.01，计算波动率从23.5%变24.5%的变化. 错在哪里？

**解析.** 9.804本来已经是每一个百分点的报价量，应乘1. 若要乘0.01，应使用按一整个绝对 $\sigma$ 单位报告的导数980.444. 两种单位正确换算后结果相同.

**题三.** 本例500点移动中二阶近似高于完整重算，是否否定gamma为正？

**解析.** 没有. gamma为正是价格函数在起点的曲率信息；大区间移动时曲率本身改变，还存在更高阶项. 二阶多项式不是整条价格函数.

**题四.** delta为0.557，能否宣称“我有55.68%的真实概率盈利”？

**解析.** 不能. 首先delta是导数，本例连 $Q$ 下的价内概率都只有0.51；其次价内不等于覆盖权利金后盈利；最后 $Q$ 不等于现实 $P$. 这三个区别要依次保留.

[^MEFG-OIC-DELTA]: Options Industry Council，*Delta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/delta). 本篇定位：Full main concept body.

[^MEFG-OIC-GAMMA]: Options Industry Council，*Gamma*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/gamma). 本篇定位：Full main concept body.

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/vega). 本篇定位：Full main concept body.

[^MEFG-OIC-THETA]: Options Industry Council，*Theta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/theta). 本篇定位：Full main concept body.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
