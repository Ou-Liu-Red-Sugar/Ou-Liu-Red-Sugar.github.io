{
  "title": "估计误差与预测不确定性",
  "description": "锁定均值估计目标，对照iid与非循环MBB的条件分布，推导边缘加权中心，再以稳态AR(1)真SE辨认推断边界.",
  "layout": "entry",
  "notebookid": "zh-qt19",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt19"
}

432 个月的平均收益是 1.3886%：只要数据固定，这个数就固定了. 我们说“平均收益的估计不确定性”时，却是在问另一件事——在某个假定的数据生成过程中，再观察一段同长度记录，估计出来的平均值可能怎样变化？

这一节先锁定这个目标，再比较逐点重抽与非循环移动区块重抽. 你将实际读一组抽样索引，推导重抽分布的中心，最后用一个真值已知的 AR(1) 模型区分**样本分布、条件重抽分布和真实过程中的抽样分布**. 先修是均值、方差以及 <a class="inline-ref" href="/zh/notebook/convergence-monte-carlo/" data-reference="zh-qt12">标准误与 Monte Carlo 误差<span aria-hidden="true"> ↗</span></a>.

<a id="qt19-estimand"></a>
## 1. “不确定”必须有一个对象

如果假设月收益过程具有不随时间改变的、有限的无条件均值，可以把估计目标写为 $\mu=\mathbb{E}[R_t]$，估计量写为 $\bar R_n$. 观察一份记录后得到实现值 $\bar r_n$. 这里有一个重要条件：若过程的均值随时期改变，一个覆盖 36 年的平均并不天然等于“下一月期望收益”. 先选模型中的目标，再解释估计量，不能反过来因为我们算了一个平均就宣称目标已经明确.

本例继续用 <a class="inline-ref" href="/zh/notebook/return-distributions-tail-risk/" data-reference="zh-qt04">BusEq 的 432 月快照<span aria-hidden="true"> ↗</span></a>：202607 数据库版本、当前 CIZ 方式重建的 1990-01 至 2025-12 历史；无缺失、无删除，内部小数收益，展示时按百分数. 它不是一套逐月当时可见的 vintage. [^data]

我们需要区分三个分布.**经验分布**把这 432 个已观察月份各赋权 $1/432$. **条件重抽分布**固定这些数值，再按照某个算法抽取索引；不同算法产生不同分布，记其概率与期望为 $P^*$、$\mathbb{E}^*$. **真实过程中的抽样分布**则来自未知过程重新生成整段记录. Bootstrap 希望用第二个去近似第三个，但只有在相应的过程、统计量和重抽条件下才可能有效，三者不能直接画等号. [^bootstrap]

第四个对象是下一月 $R_{n+1}$. 它本身的波动与 $\bar R_n$ 的估计波动也不同. 为了先看清尺度，在一个 iid、有限方差 $\sigma^2$ 的模型里，未来观测独立于历史，因此
\[
\operatorname{Var}(R_{n+1}-\bar R_n)
=\sigma^2+\frac{\sigma^2}{n}.
\]
估计均值的不确定性随 $n$ 增加而缩小，未来单次结果的噪声却不会一起消失. 这个等式只说明 iid 对照，不能不加协方差地套到下面的相关过程.

<a id="qt19-iid"></a>
## 2. 逐点重抽：固定数据，再让索引随机

iid bootstrap 每次独立地从 $\{0,\ldots,n-1\}$ 有放回抽 $n$ 个索引，按索引取数据并计算一个均值；重复 $B=5000$ 次，得到
$\bar r^{*(1)},\ldots,\bar r^{*(B)}$. 这里“iid”说的是**条件于当前数据后的重抽规则**，不等于我们已经证明历史月份 iid. [^bootstrap]

本实验 seed 1901. 对这些重抽均值求分母 $B-1$ 的标准差，得到模拟 bootstrap SE；它不是原始收益的标准差. 默认 BusEq 原始样本标准差为 7.2883%，重抽均值的 SE 则为 **0.3529 个百分点/月**. [^results]

由于重抽索引独立均匀，我们甚至可以在不做 5000 次模拟时精确计算这个条件分布：
\[
\mathbb{E}^*[\bar r^*]=\bar r,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{\widehat\sigma_{\rm emp}^2}{n},\qquad
\widehat\sigma_{\rm emp}^2=\frac1n\sum_t(r_t-\bar r)^2.
\]
本例精确条件 SE 是 **0.3503 个百分点/月**. 与模拟值 0.3529 的差异属于有限 $B$ 的 Monte Carlo 误差；它不是“市场真实 SE 与估计 SE 的差”，因为两个数仍都在固定样本的同一重抽模型内部.

我们另外报告重抽均值分布的 2.5% 与 97.5% **percentile 区间**. 端点采用 NumPy `linear`：将 $B$ 个均值升序记为 $y_0,\ldots,y_{B-1}$，对水平 $u$ 取 $h=(B-1)u$、$j=\lfloor h\rfloor$，用 $(1-h+j)y_j+(h-j)y_{j+1}$ 插值. 它不同于 QT04 计算损失 VaR 时使用的 `inverted_cdf`；对象和约定必须分别写明. 区间能否近似某个总体均值的置信区间，还需要 bootstrap 的有效性条件；“取了两个百分位”本身不保证 95% 覆盖.

<a id="qt19-block"></a>
## 3. 区块重抽保留局部顺序，也改变边缘权重

逐点打乱会破坏原序列的局部时间结构. 移动区块 bootstrap（MBB）改为抽取连续片段，再拼接起来. FPP3 用这一想法处理可能有自相关的余项；此处选用的是对原收益序列直接重抽的**非循环** MBB，不是复现其 STL 分解与 bagging 实验. [^block]

固定块长 $\ell$. 候选起点是 $0,\ldots,n-\ell$；均匀、有放回抽 $k=\lceil n/\ell\rceil$ 个起点，各取连续 $\ell$ 项，拼接后截到 $n$ 项. 不循环绕回意味着最后一个月份不会和第一个月份被强行接成一个候选块. 块内顺序保留，**块与块连接处不保留原有邻接关系**.

本例 $n=432$，$\ell=3,6,12$ 都整除 $n$. 各设计重新初始化 seed 1902；真实收益与 AR(1) 分支复用相同索引. 下面是默认 $\ell=6$ 第一条重抽序列的前两个块，索引从零计数：

| 重抽位置（从 0 开始） | 原序列索引 | 原月份 | 月收益 |
|---:|---:|---|---:|
| 0 | 363 | 2020-04 | 13.97% |
| 1 | 364 | 2020-05 | 8.02% |
| 2 | 365 | 2020-06 | 6.63% |
| 3 | 366 | 2020-07 | 9.52% |
| 4 | 367 | 2020-08 | 11.76% |
| 5 | 368 | 2020-09 | -5.14% |
| 6 | 208 | 2007-05 | 4.10% |
| 7 | 209 | 2007-06 | 2.05% |
| 8 | 210 | 2007-07 | -0.08% |
| 9 | 211 | 2007-08 | 3.67% |
| 10 | 212 | 2007-09 | 3.73% |
| 11 | 213 | 2007-10 | 3.97% |

第一个块的 2020-09 之后跳到第二个块的 2007-05，这个连接是重抽算法产生的，不是原历史的下一月. 图中会显示块边界；完整 432 个索引及重抽数值均可查看.

比“保留顺序”更容易被忽略的是边缘权重. 令 $N=n-\ell+1$，候选块和为
$S_j=\sum_{h=0}^{\ell-1}r_{j+h}$（$j=0,\ldots,N-1$）. 对本例整块情形 $k=n/\ell$，抽到的块和独立同分布，因此
\[
\mathbb{E}^*[\bar r^*]=\frac{k}{n}\overline S,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{k}{n^2}\frac1N\sum_{j=0}^{N-1}(S_j-\overline S)^2.
\]
这是固定有限候选块的精确计算，不是一般 bootstrap 一致性定理.

为什么中心不一定是 $\bar r$？用从 1 开始的原位置 $t$，令 $a_t$ 为包含该位置的候选块数，则
\[
a_t=\min(t,N)-\max(1,t-\ell+1)+1,\qquad
\mathbb{E}^*[\bar r^*]=\sum_{t=1}^n\frac{a_t}{\ell N}r_t.
\]
首尾位置通常只出现一次，中间位置最多出现 $\ell$ 次. 只有这些权重与数据恰好抵消，中心才等于普通样本均值.

对 BusEq、$\ell=6$，原均值是 **1.3886%/月**，精确重抽中心是 **1.3804%/月**，差 **−0.0083 个百分点/月**. 有限 5000 次所得均值的平均又是约 1.3874%/月. 后两者的差属于模拟误差，前两者的差却由非循环边缘加权产生；增加 $B$ 不会让精确重抽中心自动回到原均值. [^results]

<a id="qt19-results"></a>
## 4. 同一数据，不同重抽分布

| 重抽设计 | 模拟 SE（百分点/月） | 精确条件重抽 SE（百分点/月） | percentile 95% 均值区间（%/月） |
|---|---:|---:|---|
| iid | 0.3529 | 0.3503 | [0.6979, 2.0693] |
| 非循环 MBB，$\ell=3$ | 0.3565 | 0.3548 | [0.6828, 2.0742] |
| 非循环 MBB，$\ell=6$ | 0.3699 | 0.3611 | [0.6649, 2.0906] |
| 非循环 MBB，$\ell=12$ | 0.3796 | 0.3750 | [0.5922, 2.1008] |

<div data-experiment-slot="EXP-BOOT-01"></div>

界面先显示原序列和一条完整重抽序列，再显示 5000 个均值的分布. 两条中心标记分别是原样本均值和精确条件重抽中心；它们即使很接近，也不是同一个对象. 更改块长时，要同时重读索引、边界、中心、SE 与区间，而不是只看区间宽窄.

这些数值不宣布哪种方法对真实市场“更正确”. 将 MBB 用于推断还需要针对所研究过程、统计量与块长方案建立相应理论条件；FPP3 的教学单元只支持“连续块保留局部次序”这一动机，本节也没有重证一般 block-bootstrap 一致性. 本节的 3、6、12 只是预先固定的敏感性网格，没有通过更宽的区间证明某组条件成立.

<a id="qt19-ar"></a>
## 5. 用真值已知的过程检查解释是否越界

现在换一个完全指定的合成模型：
\[
X_t=.6X_{t-1}+\varepsilon_t,\qquad
X_0\sim N(0,1),\qquad \varepsilon_t\overset{\rm iid}{\sim}N(0,.64),
\]
并要求 $X_0$ 与后续创新独立. seed 1910 先抽 $X_0$，再抽 432 个创新，保存 $X_1,\ldots,X_{432}$；这是从稳态分布开始，不使用 burn-in. 变量无量纲，与真实月收益分支不同.

由递推，均值始终为零，方差为 $.6^2\times1+.64=1$. 对 $h\ge1$，将 $X_{t+h}$ 展成 $.6^hX_t$ 加未来创新，后者与 $X_t$ 独立，因此
$\operatorname{Cov}(X_t,X_{t+h})=.6^h$. 展开样本均值的方差，按相隔 $h$ 的协方差配对，得到
\[
\operatorname{Var}(\bar X_n)=
\frac{n+2\sum_{h=1}^{n-1}(n-h).6^h}{n^2}.
\]
$n=432$ 时，真 SE 为 **0.096016**；把相同边缘方差误当 iid 会得到 $1/\sqrt{432}=0.048113$. 相关性在这里不是抽象提醒，它直接出现在双重和中.

这一次冻结路径的 $X_0=1.467808\ldots$、样本均值为 $-0.055620$，得到：

| 重抽设计 | 这次样本上的模拟 SE | 精确条件重抽 SE |
|---|---:|---:|
| iid | 0.04624 | 0.04683 |
| MBB，$\ell=3$ | 0.06510 | 0.06520 |
| MBB，$\ell=6$ | 0.07577 | 0.07519 |
| MBB，$\ell=12$ | 0.08368 | 0.08280 |

这些条件重抽 SE 均不是 0.096016. 较长块在这次结果里向真值靠近，不等于“block-12 已恢复真值”，更不能用一次样本证明方法覆盖率或替金融市场选择最佳块长. 真过程反复生成样本的分布、对一次样本重抽的条件分布，以及仅 5000 次模拟得到的近似，仍然是三层对象.

<a id="qt19-boundaries"></a>
## 6. 带回实际估计：不要把区间换一个名字

真实收益的均值区间不是下一月收益预测区间. 前者试图描述估计某个 $\mu$ 的误差，后者必须同时处理新结果的过程波动；若还要判断预测能力，则需要按实际可得时间组织训练与未来评价. 时间序列交叉验证的训练集只能包含预测起点以前可用的信息，不由 bootstrap 重抽替代. [^cv]

<details>
<summary>选读：风险预测本身也经过估计</summary>

估计误差也会进入更复杂的风险检验. Barendse、Kole、van Dijk 专门研究了估计参数所产生的 VaR/ES 预测如何影响后续检验；此处只采用“估计步骤不能被当作已知真值”这一机制，不把其具体模型比较移植成 BusEq 的结论. 可读选读稿是 2019 开放版本，和后来发表的版本分别记录. [^research]

</details>

**题一：手算边缘加权.** 一个无量纲教学样本是 $[0,0,0,0,0,6]$，用非循环 $\ell=3$ 的 MBB，抽两个块. 原均值、精确重抽中心和精确条件 SE 各是多少？

**解析.** 原均值为 1；四个候选块和为 $[0,0,0,6]$，均值 1.5、总体方差 6.75. 故重抽中心为 $2\times1.5/6=.5$，条件方差为 $2\times6.75/6^2=.375$，SE 为 $\sqrt{.375}\approx.61237$. 最后一个较大值的边缘权重低，产生了中心偏移；不需要诉诸“随机运行不够多”.

**题二：增加的是 $n$ 还是 $B$？** 保留 432 月数据和 $\ell=6$ 算法，只把重抽次数从 5000 提高到 500000，哪些对象会改变？

**解析.** 原样本均值、候选块及精确条件分布不变，所以其中心 1.3804%/月和精确 SE 0.3611 个百分点/月不变. 模拟均值分布、模拟 SE 与 percentile 端点会更精确地近似这一个条件分布；真实市场假设没有因此被验证，也没有增加 495000 个月的信息.

**题三：换掉相关系数.** 在同样稳态边缘方差为 1 的构造中，改成 $\rho=0$，样本均值真 SE 应如何变化？能否由此证明历史 BusEq 应使用 iid bootstrap？

**解析.** 正滞后协方差全部为零，上式变为 $1/n$，真 SE 是 $1/\sqrt n$. 这是这个特定独立创新模型的结果，并不证明 BusEq 的联合分布满足相同假设. 模型机制例帮助检查推理，不能代替真实过程的证据.

[^data]: `QT-C-inputs-20260921-v1`，[432 月原值与来源行号](/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv)；[参数合同](/notebook/labs/qt-c/data/experiment-config.json) 的 dataset. 数据生产与版本说明见 [French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)；本例绑定冻结的 202607 重建历史.
[^bootstrap]: Sergio Bacallado、Jonathan Taylor，Stanford STATS 202，*Bootstrap*（following ISLR 2e），[正文](https://web.stanford.edu/class/stats202/notes/Resampling/Bootstrap.html)，尤其 “Cross-validation vs. the Bootstrap”“Resampling the data from the true distribution”“Computing the standard error”“In reality, we only have n samples”. 本节的有限重抽均值与方差由已定义的索引规则直接推导.
[^block]: Rob J. Hyndman、George Athanasopoulos，*Forecasting: Principles and Practice* 3e，[§12.5 Bootstrapping and bagging](https://otexts.com/fpp3/bootstrap.html)，尤其 Bootstrapping time series. 这里采用连续块保留局部次序的动机；非循环原收益 MBB、边缘权重与有限条件分布算法由正文明确给出.
[^results]: [完整结果](/notebook/labs/qt-c/data/results.json) 的 `bootstrap.AR1` 与 `bootstrap.series`；每个设计保存 5000 个均值、第一条完整索引、重抽值和块边界.[复算源](/notebook/labs/qt-c/compute/reproduce.py) 读取唯一配置；不同数据分支复用索引，并保持真实收益百分数与 AR 无量纲值的单位区别.
[^cv]: Hyndman、Athanasopoulos，[FPP3 §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html)，rolling forecasting origin 及多步预测例.
[^research]: Sander Barendse、Erik Kole、Dick van Dijk，*Backtesting Value-at-Risk and Expected Shortfall in the Presence of Estimation Error*，[Tinbergen 2019-058/III 开放稿](https://papers.tinbergen.nl/19058.pdf)，§1 Introduction（印刷 pp.2–5；PDF pp.4–7）. 相关正式发表版本为 *Journal of Financial Econometrics* 21(2), 2023（[作者出版列表](https://sites.google.com/view/dickvandijk/publications)）；两版页码分开使用. 该文作为估计误差扩展阅读，不承担本节 MBB 一致性证明.

