{
  "title": "估计误差与预测不确定性",
  "description": "锁定均值估计目标，对照iid与非循环MBB的条件分布，推导边缘加权中心，再以稳态AR(1)真SE辨认推断边界.",
  "layout": "entry",
  "notebookid": "zh-qt19",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt19"
}

432个月BusEq记录的均值为1.389%. 该估计量的抽样分布取决于数据生成过程；逐点重抽与区块重抽对时间依赖作出不同处理. 下文对比两种算法，并在真值已知的AR(1)模型中检查差异. 先修见 <a class="inline-ref" href="/zh/notebook/convergence-monte-carlo/" data-reference="zh-qt12">标准误与Monte Carlo误差<span aria-hidden="true"> ↗</span></a>.

<a id="qt19-estimand"></a>
## 估计目标与分布

若月收益过程具有恒定有限均值，可取目标 $\mu=\mathbb{E}[R_t]$、估计量 $\bar R_n$，观察值记为 $\bar r_n$. 均值随时间变化时，36年平均与下一月条件均值对应不同目标.

本例继续用 <a class="inline-ref" href="/zh/notebook/return-distributions-tail-risk/" data-reference="zh-qt04">BusEq 的 432 月快照<span aria-hidden="true"> ↗</span></a>：202607 数据库版本、当前 CIZ 方式重建的 1990-01 至 2025-12 历史；无缺失、无删除，内部按小数收益运算、展示为百分数.该文件是单一当前重建快照，不提供逐月历史 vintage. [^data]

经验分布给432个观测各赋权 $1/432$；条件重抽分布固定观测、随机生成索引，记其概率和期望为 $P^*$、$\mathbb{E}^*$；抽样分布由数据生成过程重新产生整段记录. Bootstrap以条件重抽分布近似抽样分布，其有效性依赖过程、统计量和重抽规则.[^bootstrap]

第四个对象是下一月 $R_{n+1}$. 它本身的波动与 $\bar R_n$ 的估计波动也不同. 为了先看清尺度，在一个 iid、有限方差 $\sigma^2$ 的模型里，未来观测独立于历史，因此
\[
\operatorname{Var}(R_{n+1}-\bar R_n)
=\sigma^2+\frac{\sigma^2}{n}.
\]
估计均值的不确定性随 $n$ 增加而缩小，未来单次结果的噪声却不会一起消失. 相关过程的方差另含协方差项.

<a id="qt19-iid"></a>
## 独立索引重抽

iid bootstrap从 $\{0,\ldots,n-1\}$ 独立均匀有放回抽取 $n$ 个索引，计算均值，重复 $B=5000$ 次得到 $\bar r^{*(1)},\ldots,\bar r^{*(B)}$. iid指给定数据后的索引抽取规则.[^bootstrap]

实验seed1901. 重抽均值按分母B−1计算的标准差为0.353个百分点/月，原收益样本标准差为7.288%.[^results]

由于重抽索引独立均匀，可直接求出条件均值与方差：
\[
\mathbb{E}^*[\bar r^*]=\bar r,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{\widehat\sigma_{\rm emp}^2}{n},\qquad
\widehat\sigma_{\rm emp}^2=\frac1n\sum_t(r_t-\bar r)^2.
\]
本例精确条件 SE 是 **0.35 个百分点/月**. 与模拟值 0.353 的差异属于有限 $B$ 的 Monte Carlo 误差.

Percentile区间取重抽均值的2.5%和97.5%分位数. NumPy的`linear`约定将排序值记为 $y_0,\ldots,y_{B-1}$，令 $h=(B-1)u$、$j=\lfloor h\rfloor$，按 $(1-h+j)y_j+(h-j)y_{j+1}$ 插值. 95%是条件重抽分布的中央概率质量；总体覆盖率另依赖bootstrap有效性条件.

<a id="qt19-block"></a>
## 移动区块与边缘权重

移动区块bootstrap（MBB）抽取连续片段并拼接，保留块内时间次序.[^block] 本节对原收益使用非循环MBB.

固定块长 $\ell$，从 $0,\ldots,n-\ell$ 均匀有放回抽取 $k=\lceil n/\ell\rceil$ 个起点，各取连续 $\ell$ 项，拼接后截至 $n$ 项. 块内保持原邻接关系，块间连接由抽样决定，候选块不绕回序列开头.

本例 $n=432$，$\ell=3,6,12$ 都整除 $n$. 各设计重新初始化 seed 1902；真实收益与 AR(1) 分支复用相同索引. 下面是默认 $\ell=6$ 第一条重抽序列的前两个块，索引从零计数：

| 重抽位置（从 0 开始） | 原序列索引 | 原月份 | 月收益 |
|---:|---:|---|---:|
| 0 | 363 | 2020-04 | 13.97% |
| 1 | 364 | 2020-05 | 8.02% |
| 2 | 365 | 2020-06 | 6.63% |
| 3 | 366 | 2020-07 | 9.52% |
| 4 | 367 | 2020-08 | 11.76% |
| 5 | 368 | 2020-09 | -5.14% |
| 6 | 208 | 2007-05 | 4.1% |
| 7 | 209 | 2007-06 | 2.05% |
| 8 | 210 | 2007-07 | -0.08% |
| 9 | 211 | 2007-08 | 3.67% |
| 10 | 212 | 2007-09 | 3.73% |
| 11 | 213 | 2007-10 | 3.97% |

首块末尾2020-09接到第二块开头2007-05. 图中标出块边界，附件保留全部432个索引与重抽值.

比“保留顺序”更容易被忽略的是边缘权重. 令 $N=n-\ell+1$，候选块和为
$S_j=\sum_{h=0}^{\ell-1}r_{j+h}$（$j=0,\ldots,N-1$）. 对本例整块情形 $k=n/\ell$，抽到的块和独立同分布，因此
\[
\mathbb{E}^*[\bar r^*]=\frac{k}{n}\overline S,\qquad
\operatorname{Var}^*(\bar r^*)=
\frac{k}{n^2}\frac1N\sum_{j=0}^{N-1}(S_j-\overline S)^2.
\]

用从1开始的原位置 $t$，令 $a_t$ 为包含该位置的候选块数，则
\[
a_t=\min(t,N)-\max(1,t-\ell+1)+1,\qquad
\mathbb{E}^*[\bar r^*]=\sum_{t=1}^n\frac{a_t}{\ell N}r_t.
\]
首尾位置通常只出现一次，中间位置最多出现 $\ell$ 次. 只有这些权重与数据恰好抵消，中心才等于普通样本均值.

对 BusEq、$\ell=6$，原均值是 **1.389%/月**，精确重抽中心是 **1.38%/月**，差 **−0.008 个百分点/月**. 有限 5000 次所得均值的平均又是约 1.387%/月. 后两者的差属于模拟误差，前两者的差却由非循环边缘加权产生；增加 $B$ 不会让精确重抽中心自动回到原均值. [^results]

<a id="qt19-results"></a>
## 条件重抽结果

| 重抽设计 | 模拟 SE（百分点/月） | 精确条件重抽 SE（百分点/月） | percentile 95% 均值区间（%/月） |
|---|---:|---:|---|
| iid | 0.353 | 0.35 | [0.698, 2.069] |
| 非循环 MBB，$\ell=3$ | 0.357 | 0.355 | [0.683, 2.074] |
| 非循环 MBB，$\ell=6$ | 0.37 | 0.361 | [0.665, 2.091] |
| 非循环 MBB，$\ell=12$ | 0.38 | 0.375 | [0.592, 2.101] |

<div data-experiment-slot="EXP-BOOT-01"></div>

块长3、6、12为预设敏感性网格. 下文比较有限样本的条件重抽分布；将区间用于总体推断，需另有过程依赖及块长增长条件.

<a id="qt19-ar"></a>
## AR(1)对照

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
$n=432$ 时，真 SE 为 **0.096**；把相同边缘方差误当 iid 会得到 $1/\sqrt{432}=0.048$.

这一次冻结路径的 $X_0=1.468\ldots$、样本均值为 $-0.056$，得到：

| 重抽设计 | 这次样本上的模拟 SE | 精确条件重抽 SE |
|---|---:|---:|
| iid | 0.046 | 0.047 |
| MBB，$\ell=3$ | 0.065 | 0.065 |
| MBB，$\ell=6$ | 0.076 | 0.075 |
| MBB，$\ell=12$ | 0.084 | 0.083 |

这条样本中，较长块的条件SE更接近真实抽样SE. 判断区间覆盖率需反复生成整份样本，再分别重抽；一次样本的条件SE不能提供该频率.

<a id="qt19-boundaries"></a>
## 均值区间与预测区间

均值区间估计总体均值，预测区间还包含新结果波动. 评价预测能力时，训练与未来目标按实际可得时点切分.[^cv]

<details>
<summary>选读：风险预测本身也经过估计</summary>

Barendse、Kole、van Dijk给出参数估计误差进入VaR/ES检验统计量渐近协方差的附加项；这些项依赖估计窗口方案及样本外与样本内长度之比.[^research]

</details>

**题一：手算边缘加权.** 一个无量纲教学样本是 $[0,0,0,0,0,6]$，用非循环 $\ell=3$ 的 MBB，抽两个块. 原均值、精确重抽中心和精确条件 SE 各是多少？

**解析.** 原均值为 1；四个候选块和为 $[0,0,0,6]$，均值 1.5、总体方差 6.75. 故重抽中心为 $2\times1.5/6=.5$，条件方差为 $2\times6.75/6^2=.375$，SE 为 $\sqrt{.375}\approx.612$. 最后一个较大值的边缘权重低，产生了中心偏移.

**题二：增加的是 $n$ 还是 $B$？** 保留 432 月数据和 $\ell=6$ 算法，只把重抽次数从 5000 提高到 500000，哪些对象会改变？

**解析.** 样本、候选块与精确条件分布保持不变，中心1.38%/月、精确SE0.361个百分点/月. 增加B减少重抽分布数值近似的Monte Carlo误差.

**题三：换掉相关系数.** 在同样稳态边缘方差为 1 的构造中，改成 $\rho=0$，样本均值真 SE 应如何变化？能否由此证明历史 BusEq 应使用 iid bootstrap？

**解析.** $\rho=0$ 时所有正滞后协方差为0，均值方差为 $1/n$，SE为 $1/\sqrt n$. BusEq是否满足独立性仍需针对其联合分布取证.

[^data]: `QT-C-inputs-20260921-v1`，[432 月原值与来源行号](/notebook/labs/qt-c/data/BusEq-value-weighted-monthly-199001-202512.csv)；[参数合同](/notebook/labs/qt-c/data/experiment-config.json) 的 dataset. 数据生产与版本说明见 [French Data Library](https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html)；本例绑定冻结的 202607 重建历史.
[^bootstrap]: Sergio Bacallado、Jonathan Taylor，Stanford STATS 202，*Bootstrap*（following ISLR 2e），[正文](https://web.stanford.edu/class/stats202/notes/Resampling/Bootstrap.html)，尤其 “Cross-validation vs. the Bootstrap”“Resampling the data from the true distribution”“Computing the standard error”“In reality, we only have n samples”. 本节的有限重抽均值与方差由已定义的索引规则直接推导.
[^block]: Rob J. Hyndman、George Athanasopoulos，*Forecasting: Principles and Practice* 3e，[§12.5 Bootstrapping and bagging](https://otexts.com/fpp3/bootstrap.html)，尤其 Bootstrapping time series. 这里采用连续块保留局部次序的动机；非循环原收益 MBB、边缘权重与有限条件分布算法由正文明确给出.
[^results]: [完整结果](/notebook/labs/qt-c/data/results.json) 的 `bootstrap.AR1` 与 `bootstrap.series`；每个设计保存 5000 个均值、第一条完整索引、重抽值和块边界.[复算源](/notebook/labs/qt-c/compute/reproduce.py) 读取唯一配置；不同数据分支复用索引，并保持真实收益百分数与 AR 无量纲值的单位区别.
[^cv]: Hyndman、Athanasopoulos，[FPP3 §5.1 Time series cross-validation](https://otexts.com/fpp3/tscv.html)，rolling forecasting origin 及多步预测例.
[^research]: Sander Barendse、Erik Kole、Dick van Dijk，*Backtesting Value-at-Risk and Expected Shortfall in the Presence of Estimation Error*，[Tinbergen 2019-058/III 开放稿](https://papers.tinbergen.nl/19058.pdf)，§1 Introduction（印刷 pp.2–5；PDF pp.4–7）. 相关正式发表版本为 *Journal of Financial Econometrics* 21(2), 2023（[作者出版列表](https://sites.google.com/view/dickvandijk/publications)）；两版页码分开使用.
