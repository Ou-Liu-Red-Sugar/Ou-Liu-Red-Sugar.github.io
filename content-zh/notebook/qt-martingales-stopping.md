{
  "title": "鞅与有限时点停止",
  "description": "用完整条件有界停止证明区分可实施停时、事后规则与无限停止的尾部问题.",
  "layout": "entry",
  "notebookid": "zh-qt08",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt08"
}

当信息集随时间增长时，鞅要求下一时点的条件平均等于当前值；停时只允许用截至当前已经到达的信息决定是否停止. 有界可选抽样把这两项约束连接为停止时点之间的条件期望等式.

<a id="qt08-definition"></a>

## 鞅与条件期望

令 $(\Omega,\mathcal F,P)$ 为概率空间，$(\mathcal F_k)_{k\ge0}$ 为滤过，即随时间增加的子 $\sigma$-代数. 实值过程 $M=(M_k)$ 是相对于这个滤过和概率 $P$ 的鞅，是指每个 $M_k$ 都是 $\mathcal F_k$ 可测、$\mathbb{E}_P|M_k|<\infty$，并且

$$
\mathbb{E}_P[M_k\mid\mathcal F_{k-1}]=M_{k-1},\qquad k\ge1.
$$

可测性要求当前值已知，可积性保证条件期望有定义；最后一项固定给定昨日信息的条件平均. 下文期望均在 $P$ 下取.[^mit-definition]

例如固定一个 $X\in L^1$，令 $M_k=\mathbb{E}[X\mid\mathcal F_k]$. 条件期望本身可测，而且 $\mathbb{E}|M_k|\le \mathbb{E}|X|$. 对嵌套信息再用塔式性质：

$$
\mathbb{E}[M_k\mid\mathcal F_{k-1}]
=\mathbb{E}[\mathbb{E}[X\mid\mathcal F_k]\mid\mathcal F_{k-1}]
=M_{k-1}.
$$

鞅性质依赖滤过：加入未来信息后，原本条件均值为零的增量可能已确定正负. 无条件均值恒定只是鞅的推论，不能反推条件期望等式.

金融模型还需指定测度. 研究概率 $P$ 下的价格鞅与有限无套利模型中等价测度 $Q$ 下的贴现价格鞅，是对不同测度与过程的命题.

<a id="qt08-stopping"></a>

## 停时与停止信息

随机时间 $\tau:\Omega\to\{0,1,\ldots\}\cup\{\infty\}$ 称为停时，若 $\{\tau\le k\}\in\mathcal F_k$ 对每个 $k$ 成立，即在 $k$ 时可判断是否已停止. 离散时间中等价于 $\{\tau=k\}\in\mathcal F_k$.[^mit-stopping]

首次达到某个已知阈值就是例子. 相反，“在整条路径的最高点第一次出现时退出”通常不是停时：要确认眼前是否为全路径最高点，还需要知道以后会不会更高.

停下时知道的事件组成

$$
\mathcal F_\tau
=\{A\in\mathcal F:A\cap\{\tau\le k\}\in\mathcal F_k
\text{ 对每个 }k\text{ 成立}\}.
$$

这确实是 $\sigma$-代数：与 $\{\tau\le k\}$ 相交后，补集变成相对于该事件的差集，可数并仍是可数并. 对有界 $\tau\le N$，若 $D\subseteq\mathbb R$ 为 Borel 集，则

$$
\{M_\tau\in D\}\cap\{\tau\le n\}
=\bigcup_{j=0}^{\min(n,N)}
\bigl(\{\tau=j\}\cap\{M_j\in D\}\bigr).
$$

每一项属于 $\mathcal F_n$，因此 $M_\tau$ 是 $\mathcal F_\tau$ 可测；这与可积性一起构成把 $M_\sigma$ 识别为条件期望所需的条件.

先看停止过程 $Y_k=M_{k\wedge\tau}$. 它适应，而且 $|Y_k|\le\sum_{j=0}^k|M_j|$，所以可积. 它的增量为

$$
Y_k-Y_{k-1}
=\mathbf1_{\{\tau\ge k\}}(M_k-M_{k-1}).
$$

由于 $\{\tau\ge k\}=\{\tau\le k-1\}^{c}\in\mathcal F_{k-1}$，对昨日信息取条件期望得到零. 因此 $Y$ 仍为鞅. 这只证明每个有限 $k$ 的性质；还没有允许把 $k$ 直接换成无穷大.

<a id="qt08-bounded-theorem"></a>

## 有界可选抽样

命题（条件有界可选抽样）. 设 $M_0,\ldots,M_N$ 是可积鞅，$\sigma,\tau$ 是取值于 $\{0,\ldots,N\}$ 的停时，且 $\sigma\le\tau$. 则

$$
\mathbb{E}[M_\tau\mid\mathcal F_\sigma]=M_\sigma.
$$

特别地，$\mathbb{E}[M_\tau]=\mathbb{E}[M_\sigma]=\mathbb{E}[M_0]$. $N$ 是确定上界，概率空间可为无限空间.[^mit-stopping]

证明. 首先，$|M_\sigma|,|M_\tau|\le\sum_{j=0}^N|M_j|$，两者可积；上一节已证明 $M_\sigma$ 对 $\mathcal F_\sigma$ 可测. 剩下的任务是对每个 $A\in\mathcal F_\sigma$ 验证积分相同.

对每条路径，区间 $(\sigma,\tau]$ 上的增量恰好拼出

$$
M_\tau-M_\sigma
=\sum_{k=1}^N
\mathbf1_{\{\sigma<k\le\tau\}}(M_k-M_{k-1}).
$$

固定 $A\in\mathcal F_\sigma$，令

$$
D_k=A\cap\{\sigma\le k-1\}\cap\{\tau\ge k\}.
$$

第一部分 $A\cap\{\sigma\le k-1\}$ 由 $\mathcal F_\sigma$ 的定义属于 $\mathcal F_{k-1}$；第二部分也属于 $\mathcal F_{k-1}$. 因此 $D_k\in\mathcal F_{k-1}$，并有

$$
\begin{gathered}
\mathbb{E}[\mathbf1_{D_k}(M_k-M_{k-1})]\\
=\mathbb{E}[\mathbf1_{D_k}\mathbb{E}[M_k-M_{k-1}\mid\mathcal F_{k-1}]]\\
=0.
\end{gathered}
$$

有限项可以逐项求期望，于是 $\mathbb{E}[\mathbf1_A(M_\tau-M_\sigma)]=0$. 可测性、可积性和每个信息事件上的积分相同都已成立，条件期望的定义遂给出结论. 证毕.

停时条件保证增量前系数对前一期信息可测，确定上界使求和有限，可积性保证各项期望存在.

<a id="qt08-experiment"></a>

## 条件均值复算

取八次独立公平的 $\pm1$ 增量，$M_0=0$，每条完整路径概率为 $1/256$. 取由前 $k$ 次增量生成的自然滤过 $\mathcal F_k$. 以 U 表示 $+1$，D 表示 $-1$. 令 $\sigma$ 为首次到达 $+1$、最晚在 3 停止；令 $\tau$ 为首次到达 $+2$、最晚在 8 停止. 若达到 $+2$，此前必已经过 $+1$；否则截断规则也保证 $\sigma\le\tau$.

在停止时刻已观察到以下五个前缀. 对每组平均后续可能路径：

| 停止时已知前缀 | $\sigma$ | 完整路径数 | $M_\sigma$ | 组内 $M_\tau$ 平均 |
|---|---|---|---|---|
| U | 1 | 128 | 1 | $1$ |
| DDD | 3 | 32 | -3 | $-3$ |
| DDU | 3 | 32 | -1 | $-1$ |
| DUD | 3 | 32 | -1 | $-1$ |
| DUU | 3 | 32 | 1 | $1$ |

DDD组的 $M_\sigma=-3$，继续到 $\tau$ 的组内均值也为−3；条件等式逐组成立，比总体均值为0更强.

<div data-experiment-slot="EXP-QT08-STOP-01"></div>

以“事后最高点”作对照，八步路径最大值的平均为 $\frac{467}{256}\approx1.824$. 该退出规则依赖未来路径，不是停时，因此不适用上述可选抽样结论.

<a id="qt08-infinite"></a>

## 无限停时与一致可积性

在无限公平抛币空间上，令

$$
Z_n=2^n\mathbf1_{\{\text{前 }n\text{ 次全为正面}\}},\qquad Z_0=1,
$$

并令 $\tau$ 为首次反面出现的次数. 在尚未出现反面时，下一步以各 $1/2$ 的概率加倍或归零；已归零后保持零. 因此 $Z$ 是非负可积鞅，且 $\mathbb{E}[Z_n]=1$.

这里 $P(\tau=n)=2^{-n}$，所以 $P(\tau<\infty)=1$，而

$$
\mathbb{E}[\tau]=\sum_{n=0}^{\infty}P(\tau>n)
=\sum_{n=0}^{\infty}2^{-n}=2.
$$

但一旦反面出现，$Z_\tau=0$. 对于每个确定 $N$，却有

$$
Z_{\tau\wedge N}=2^N\mathbf1_{\{\tau>N\}},
\qquad \mathbb{E}[Z_{\tau\wedge N}]=1.
$$

停止变量逐路径趋于0，期望却始终为1；期望与极限在此不能交换.

一族可积变量 $(Y_n)$ 一致可积，是指

$$
\lim_{K\to\infty}\sup_n
\mathbb{E}[|Y_n|\mathbf1_{\{|Y_n|>K\}}]=0.
$$

任给 $K$，选 $2^N>K$，尾部期望为 $2^N2^{-N}=1$. 幸存路径的数值增长抵消其概率下降，停止族不一致可积. 这给出 $\mathbb{E}\tau<\infty$ 单独不足以延伸鞅等式的反例.[^mit-ui]

<a id="qt08-exercises"></a>

## 练习与解析

问题一. 比较两条路径 UUDDDDDD 和 UDDDDDDD. 它们在时点 1 的信息相同. 若 $\rho$ 为全路径最大值第一次出现的时间，$\{\rho\le1\}$ 能在时点 1 判定吗？

**解析.** 第一条路径的最大值2首次出现于时点2，第二条的最大值1首次出现于时点1. 同一时点1的信息组内，$\{\rho\le1\}$ 一真一假，故不属于 $\mathcal F_1$，$\rho$ 不是停时.

问题二. 额外假设 $M_0,\ldots,M_N\in L^2$. 是否还能说 $\mathbb{E}[M_\tau^2]=\mathbb{E}[M_\sigma^2]$？请由本篇定理推导正确关系.

解析. 先由有限上界得到 $M_\sigma,M_\tau\in L^2$. 条件等式给 $\mathbb{E}[M_\tau-M_\sigma\mid\mathcal F_\sigma]=0$，从而交叉项期望为零. 展开平方得

$$
\mathbb{E}[M_\tau^2]
=\mathbb{E}[M_\sigma^2]+\mathbb{E}[(M_\tau-M_\sigma)^2]
\ge \mathbb{E}[M_\sigma^2].
$$

先截断 $M_\sigma$，再用Cauchy–Schwarz过极限，可将它乘入条件期望等式. 八步例中

$$
\mathbb{E}[M_\tau^2]=\frac{187}{32},\qquad
\mathbb{E}[M_\sigma^2]=2,\qquad
\mathbb{E}[(M_\tau-M_\sigma)^2]=\frac{123}{32},
$$

问题三. 无限首次反面反例同时有 $\mathbb{E}\tau=2$. 为什么 MIT 的“有限期望停时”判据仍未适用？

**解析.** 该充分条件另要求 $\mathbb{E}[|Z_n-Z_{n-1}|\mid\mathcal F_{n-1}]$ 有统一常数上界. 此处该量等于 $Z_{n-1}$，在连续正面的路径上随 $n$ 无界增长.

[^mit-definition]: Yury Polyanskiy / MIT Class Participants, [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf#page=2), Fall 2018，§1，PDF pp.2–4：鞅定义与 Doob 构造.
[^mit-stopping]: 同讲义 §3，PDF pp.6–9：停时、停止过程与可选停止定理.
[^mit-ui]: 同讲义 Proposition 1，p.7；Theorem 3 及证明，pp.8–9：一致可积条件与无穷停时结论.
