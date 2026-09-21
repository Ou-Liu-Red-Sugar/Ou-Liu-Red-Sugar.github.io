{
  "title": "大数定律、中心极限定理与 Monte Carlo 误差",
  "description": "证明有限方差下的Chebyshev弱律，并以同一PCG64样本前缀计算均值、标准误和区间覆盖.",
  "layout": "entry",
  "notebookid": "zh-qt12",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt12"
}

Monte Carlo 平均涉及两个不同问题：有限次抽样的均值离当前模型期望有多远，以及当前模型是否适合目标对象. 增加模拟路径只直接作用于前一个问题. 以下用一个期望可精确计算的离散支付分布比较理论误差、冻结路径和重复覆盖实验.

<a id="qt12-target"></a>
## 模拟目标与基准

沿用看涨期权式支付表. SPX 产品采用每指数点 100 美元的乘数和现金结算，支付按合约规定的行权结算值计算.[^spx] 以下行权价 6,000、四个结算情景和概率均为**教学设定**.

令 $Z$ 表示结算值，$X=100(Z-6000)^+$ 表示一张合约对应的到期支付金额：

| 状态 | $Z$（指数点） | $X$（美元） | 基准概率 $p$ | 压力概率 $p'$ |
|---|---:|---:|---:|---:|
| 1 | 5,900 | 0 | 0.1 | 0.1 |
| 2 | 6,000 | 0 | 0.3 | 0.4 |
| 3 | 6,100 | 10,000 | 0.4 | 0.3 |
| 4 | 6,200 | 20,000 | 0.2 | 0.2 |

$X$ 表示按结算值计算的一张合约到期支付. Cboe 规定标准 SPX 的结算值按到期日成分股开盘价计算，行权现金在到期后的下一营业日交付. 本节估计的是教学分布下的期望支付 $\mathbb{E}_pX$.

基准模型的精确计算是
\[
\mu=\mathbb{E}_pX=.4(10000)+.2(20000)=8000\ {\rm USD},
\]
\[
\mathbb{E}_pX^2=.4(10000)^2+.2(20000)^2=120000000\ {\rm USD}^2,
\]
\[
\sigma^2=\mathbb{E}_pX^2-\mu^2=56000000\ {\rm USD}^2,
\qquad \sigma\approx7483.31\ {\rm USD}.
\]
这两个解析值给出冻结模拟的误差基准. 这里的 $n$ 表示在同一指定分布下的 iid 模拟抽样次数.[^inputs]

<a id="qt12-lln"></a>
## 弱大数定律与Chebyshev界

令 $X_i$ 独立同分布，$\bar X_n=n^{-1}\sum_{i=1}^nX_i$. **弱大数定律：** 若 $\mathbb{E}|X_1|<\infty$，则 $\bar X_n\to\mathbb{E}X_1$ 依概率，即每个 $\varepsilon>0$ 均满足 $P(|\bar X_n-\mathbb{E}X_1|>\varepsilon)\to0$.[^lln]

**命题.** 若 $X_i$ iid，$\mathbb{E}[X_i]=\mu$、$\operatorname{Var}(X_i)=\sigma^2<\infty$，则
\[
\mathbb{E}[(\bar X_n-\mu)^2]=\frac{\sigma^2}{n},\qquad
P(|\bar X_n-\mu|\ge\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}\quad(\varepsilon>0).
\]

**证明.** 期望的线性性给出 $\mathbb{E}\bar X_n=\mu$. 展开中心化和的平方，不同项因独立且均值为零，交叉期望为零，所以
\[
\mathbb{E}[(\bar X_n-\mu)^2]
=\frac1{n^2}\sum_{i=1}^n\mathbb{E}[(X_i-\mu)^2]
=\frac{\sigma^2}{n}.
\]
又因为
$\varepsilon^2\mathbf1_{\{|\bar X_n-\mu|\ge\varepsilon\}}
\le(\bar X_n-\mu)^2$，
两边取期望，再除以 $\varepsilon^2$，即得不等式；右边随 $n$ 趋于零，因而得到依概率收敛.

独立性使交叉协方差为0；相关样本的方差需保留这些项. 上述证明使用有限二阶矩，仅有有限一阶绝对矩的弱律另需截断论证.

<a id="qt12-clt"></a>
## CLT与标准误

上面的平方误差计算给出平均值的标准差
$\operatorname{SE}(\bar X_n)=\sigma/\sqrt n$. 标准误是估计量 $\bar X_n$ 的抽样标准差；本例 $n=1000$ 时，单次支付标准差为 7,483.31 美元，平均值的理论标准误约为 236.64 美元.

采用的经典 iid **中心极限定理**进一步要求 $0<\sigma^2<\infty$，结论是
\[
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\ \Rightarrow\ N(0,1).
\]
收敛对象是标准化均值误差的分布. [^lln]

模拟时通常以
$s_n^2=(n-1)^{-1}\sum_i(X_i-\bar X_n)^2$ 估计方差. 有限二阶矩使 $X_i$ 与 $X_i^2$ 都可积，分别应用大数定律，再用
\[
s_n^2=\frac n{n-1}\left(\frac1n\sum_iX_i^2-\bar X_n^2\right)
\]
可得 $s_n^2\to\sigma^2$ 依概率. 由于 $\sigma>0$，Slutsky 定理允许用 $s_n$ 替代标准化分母； [^slutsky]

于是我们使用近似 95% 区间
\[
I_n=\left[\bar X_n-1.96\,\frac{s_n}{\sqrt n},
          \bar X_n+1.96\,\frac{s_n}{\sqrt n}\right].
\]
频率解释是：按同一模型反复生成整份样本，这一构造覆盖固定 $\mu$ 的比例在适用极限下趋近 95%.  若某次离散样本恰好全相同而 $s_n=0$，公式会给零宽区间，此时学生化近似可能失灵.

<a id="qt12-experiment"></a>
## 路径与覆盖率

冻结实验使用 NumPy `Generator(PCG64(1201))` 一次生成 10,000 个 $[0,1)$ 均匀数，再按累计概率映射四个状态. $n=100,1000,10000$ 都取同一路径的前缀；基准与压力模型也使用同一组均匀数，只有映射阈值改变. [^inputs] 各样本量共享前缀.

| 模型 | $n$ | 样本均值（美元） | 对本模型的数值误差 | 估计 SE | 理论 SE |
|---|---:|---:|---:|---:|---:|
| 基准 | 100 | 7,300.00 | -700.00 | 722.72 | 748.33 |
| 基准 | 1,000 | 7,950.00 | -50.00 | 238.65 | 236.64 |
| 基准 | 10,000 | 7,995.00 | -5.00 | 75.03 | 74.83 |
| 压力 | 100 | 6,100.00 | -900.00 | 750.69 | 781.02 |
| 压力 | 1,000 | 6,920.00 | -80.00 | 248.95 | 246.98 |
| 压力 | 10,000 | 6,997.00 | -3.00 | 78.28 | 78.1 |

以默认基准 $n=1000$ 为例，四状态次数为 $[95,313,389,203]$，所以
\[
\bar X_{1000}=\frac{389(10000)+203(20000)}{1000}=7950.
\]
将这组计数代入样本方差公式，得到估计 SE 为 238.65 美元，而模型给出的理论 SE 为 236.64 美元. 估计SE随样本变化. 此次近似区间为 **[7,482.24，8,417.76] 美元**，包含模型均值 8,000.

<div data-experiment-slot="EXP-MC-01"></div>

累计平均随新增样本上下波动，图中区间对应当前固定样本量 $n$.

为了检验区间构造，另用 seed 1202 生成 5,000 行独立重复，每行长度 10,000，再各取三个前缀. 每个 $n$ 的 5,000 次重复彼此独立，但**不同 $n$ 的覆盖率结果互相关联**，因为它们共享每行前缀.

| $n$ | 覆盖模型均值的次数 / 5,000 | 覆盖率 | 覆盖率的 MCSE（百分点） |
|---:|---:|---:|---:|
| 100 | 4,750 | 95.00% | 0.308 |
| 1,000 | 4,792 | 95.84% | 0.282 |
| 10,000 | 4,723 | 94.46% | 0.324 |

覆盖指示为0/1，覆盖率估计 $\widehat c$ 的Monte Carlo标准误为 $\sqrt{\widehat c(1-\widehat c)/5000}$. 95.84%是这批重复样本的覆盖比例，变化包含重复实验误差和区间的有限样本近似误差.

<a id="qt12-model-error"></a>
## 模拟误差与模型差

压力模型的期望为 7,000 美元、方差为 61,000,000 美元². 默认 $n=1000$ 得到 6,920 美元. 现在有两种误差：
\[
6920-8000
=\underbrace{(6920-7000)}_{\text{对所模拟模型的数值误差 }-80}
+\underbrace{(7000-8000)}_{\text{两模型均值差 }-1000}.
\]
增加 $n$，第一项会向零收敛，第二项保持为两模型均值之差.

Pareto分布 $P(Y>y)=y^{-1.5}$（$y\ge1$）满足均值3、二阶矩无限. 普通均值弱律成立，有限方差CLT的条件不成立.

<details>
<summary>选读：弱矩条件下的均值估计</summary>

Cherapanamjeri 等研究更弱矩条件下的均值估计，使用不同的矩条件和估计方法.[^weak]

</details>

<a id="qt12-exercises"></a>
## 练习与解析

**题一：要多少次？** 本例基准模型的理论 SE 要不超过 100 美元，最少需要多少次 iid 抽样？这是保证实际误差不超过 100 美元吗？

**解析.** $\sqrt{56000000/n}\le100$ 给出 $n\ge5600$，约束抽样标准差. 若要求实际误差的概率界，可用Chebyshev界或满足条件时的CLT近似.

**题二：两个不同的“误差”.** 压力模型 $n=10000$ 的估计是 6,997 美元. 分别计算相对本模型和相对基准模型的差异，并解释再加一百倍路径可能改变什么.

**解析.** 数值误差为 $6997-7000=-3$；相对基准的差异为 $6997-8000=-1003$. 理论 SE 在路径数增大一百倍后缩为原来的十分之一，模型均值差仍为 $-1000$. 一次路径的实际误差不必恰按十分之一缩放.

**题三：区间到底覆盖什么？** 把 [7,482.24，8,417.76] 美元解释为“下一次支付大概率在这里”是否合理？

**解析.** 单次支付仅取0、10,000、20,000，均在该区间外. 区间估计的对象是均值8,000.

[^spx]: Cboe，*SPX Index Options Fact Sheet*，©2026，pp.1–2：欧式现金结算、$100 乘数、标准 SPX 结算值及到期后下一营业日现金交付，[原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，访问于 2026-09-21.
[^lln]: MIT 6.436J/15.085J，Fall 2018，*Lecture 17: Laws of Large Numbers and Central Limit Theorem*，§1 Markov/Chebyshev 不等式（p.1）、§3 WLLN（pp.5–6）与 §4 CLT（p.7），[完整讲义](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/f44fa78f05ac31a4ba2bd82f599dcf60_MIT6_436JF18_lec17.pdf). 讲义 p.5 强律旁述中的 $X_n$ 应读作样本均值.
[^inputs]: `QT-C-inputs-20260921-v1`，[参数合同](/notebook/labs/qt-c/data/experiment-config.json) 的 `monte_carlo`，[结果](/notebook/labs/qt-c/data/results.json) 的 `Monte_Carlo`. 共同均匀数、全长状态序列、前缀均值/SE 与每次覆盖指示均保留；复算程序见 [compute/reproduce.py](/notebook/labs/qt-c/compute/reproduce.py). 图与表绑定这些冻结路径.
[^weak]: Y. Cherapanamjeri、N. Tripuraneni、P. L. Bartlett、M. I. Jordan，*Optimal Mean Estimation without a Variance*：[COLT 2022/PMLR 178 扩展摘要](https://proceedings.mlr.press/v178/cherapanamjeri22a.html)；[开放完整预印本 2011.12433v2](https://arxiv.org/html/2011.12433v2) 的 §1（Problem 1.1、主要定理）及 §3 算法概述. 完整预印本版本为 2020 年，与 2022 扩展摘要分开引用.

[^slutsky]: Amir Dembo，*Probability Theory: STAT310/MATH230*，2021-04-15 版，Exercise 3.2.8 (a)–(c)，p.106，[公开原文](https://adembo.su.domains/stat-310b/lnotes.pdf). 原文给出趋于常数时的和与积版本；这里对 $\sigma/s_n\to1$ 使用积版本，$\sigma>0$ 是倒数变换所需条件.
