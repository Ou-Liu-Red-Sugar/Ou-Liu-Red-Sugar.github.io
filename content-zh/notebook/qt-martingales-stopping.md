{
  "title": "鞅与有限时点停止",
  "description": "用完整条件有界停止证明区分可实施停时、事后规则与无限停止的尾部问题。",
  "layout": "entry",
  "notebookid": "zh-qt08",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt08"
}

我们已经会在一个时点按已有信息取条件平均。现在让信息随时间增加：每次重新预测，得到一串条件平均。鞅描述的正是这串数之间的一致性；停时则描述什么时候能够根据已经到来的信息作出“到这里为止”的决定。两者合在一起，才能精确回答“改一个退出规则，条件平均会不会改变”。

这一单元的目标是重建两个有界停时之间的条件等式，并找出无限停止反例失去的条件。先修只用条件期望、可积性和事件的可测性，不需要连续时间随机积分。

<a id="qt08-definition"></a>

## 1. 鞅比较的是条件平均，不是每条路径的走势

令 $(\Omega,\mathcal F,P)$ 为概率空间，$(\mathcal F_k)_{k\ge0}$ 为滤过，即随时间增加的子 $\sigma$-代数。实值过程 $M=(M_k)$ 是相对于这个滤过和概率 $P$ 的鞅，是指每个 $M_k$ 都是 $\mathcal F_k$ 可测、$E_P|M_k|<\infty$，并且

$$
E_P[M_k\mid\mathcal F_{k-1}]=M_{k-1},\qquad k\ge1.
$$

可测性要求当前值已经可知；可积性让条件平均有定义；最后一项说，在昨日的信息下，今天数值的条件平均恰好等于昨日值。这不要求路径平坦，也不要求相邻增量独立。下文未加下标的期望都在 $P$ 下取。定义与以下 Doob 构造可对照 MIT Lecture 25 §1。[^mit-definition]

例如固定一个 $X\in L^1$，令 $M_k=E[X\mid\mathcal F_k]$。条件期望本身可测，而且 $E|M_k|\le E|X|$。对嵌套信息再用塔式性质：

$$
E[M_k\mid\mathcal F_{k-1}]
=E[E[X\mid\mathcal F_k]\mid\mathcal F_{k-1}]
=M_{k-1}.
$$

于是它确实是鞅。这个例子也说明为什么一定要注明滤过：提前告诉你未来结果后，原来“条件均值为零”的增量可能已能确定正负。无条件等式 $E[M_k]=E[M_0]$ 只是鞅的推论，单凭它反过来不能识别鞅。

金融连接也在这里：一项价格过程在研究概率 $P$ 下是否为鞅，需要模型或证据；有限无套利市场中出现的是另一概率 $Q$ 下的贴现价格鞅。不能把两句互换。这里先把数学结论在指定概率下讲清。

<a id="qt08-stopping"></a>

## 2. 停时与停止后的信息

随机时间 $\tau:\Omega\to\{0,1,\ldots\}\cup\{\infty\}$ 是停时，是指 $\{\tau\le k\}\in\mathcal F_k$ 对每个 $k$ 成立。换句话说，到了 $k$，可以判断是否已经停止；它不要求在起点就知道最后会在哪天停。离散时间中，这等价于每个 $\{\tau=k\}\in\mathcal F_k$。[^mit-stopping]

首次达到某个已知阈值就是例子。相反，“在整条路径的最高点第一次出现时退出”通常不是停时：要确认眼前是否为全路径最高点，还需要知道以后会不会更高。

停下时知道的事件组成

$$
\mathcal F_\tau
=\{A\in\mathcal F:A\cap\{\tau\le k\}\in\mathcal F_k
\text{ 对每个 }k\text{ 成立}\}.
$$

这确实是 $\sigma$-代数：与 $\{\tau\le k\}$ 相交后，补集变成相对于该事件的差集，可数并仍是可数并。对有界 $\tau\le N$，若 $D\subseteq\mathbb R$ 为 Borel 集，则

$$
\{M_\tau\in D\}\cap\{\tau\le n\}
=\bigcup_{j=0}^{\min(n,N)}
\bigl(\{\tau=j\}\cap\{M_j\in D\}\bigr).
$$

每一项属于 $\mathcal F_n$，所以 $M_\tau$ 是 $\mathcal F_\tau$ 可测。这个小推导很重要：后面要把 $M_\sigma$ 认作一个条件期望，不能只验证它“看上去是到时可知的”。

先看停止过程 $Y_k=M_{k\wedge\tau}$。它适应，而且 $|Y_k|\le\sum_{j=0}^k|M_j|$，所以可积。它的增量为

$$
Y_k-Y_{k-1}
=\mathbf1_{\{\tau\ge k\}}(M_k-M_{k-1}).
$$

由于 $\{\tau\ge k\}=\{\tau\le k-1\}^{c}\in\mathcal F_{k-1}$，对昨日信息取条件期望得到零。因此 $Y$ 仍为鞅。这只证明每个有限 $k$ 的性质；还没有允许把 $k$ 直接换成无穷大。

<a id="qt08-bounded-theorem"></a>

## 3. 条件有界停止：把证明做完

命题（条件有界可选抽样）。设 $M_0,\ldots,M_N$ 是可积鞅，$\sigma,\tau$ 是取值于 $\{0,\ldots,N\}$ 的停时，且 $\sigma\le\tau$。则

$$
E[M_\tau\mid\mathcal F_\sigma]=M_\sigma.
$$

特别地，$E[M_\tau]=E[M_\sigma]=E[M_0]$。这里 $N$ 是确定的共同上界，概率空间本身不必有限。以下直接用增量和条件期望的积分刻画证明；MIT §3 提供停止定理及有界特例的背景。[^mit-stopping]

证明。首先，$|M_\sigma|,|M_\tau|\le\sum_{j=0}^N|M_j|$，两者可积；上一节已证明 $M_\sigma$ 对 $\mathcal F_\sigma$ 可测。剩下的任务是对每个 $A\in\mathcal F_\sigma$ 验证积分相同。

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

第一部分 $A\cap\{\sigma\le k-1\}$ 由 $\mathcal F_\sigma$ 的定义属于 $\mathcal F_{k-1}$；第二部分也属于 $\mathcal F_{k-1}$。因此 $D_k\in\mathcal F_{k-1}$，并有

$$
\begin{gathered}
E[\mathbf1_{D_k}(M_k-M_{k-1})]\\
=E[\mathbf1_{D_k}E[M_k-M_{k-1}\mid\mathcal F_{k-1}]]\\
=0.
\end{gathered}
$$

有限项可以逐项求期望，于是 $E[\mathbf1_A(M_\tau-M_\sigma)]=0$。可测性、可积性和每个信息事件上的积分相同都已成立，条件期望的定义遂给出结论。证毕。

回看证明：停时条件让增量前的系数可测，确定上界让求和有限，可积性让每个期望合法。结论并不声称停止前后的风险相同；它保留的是条件一阶平均。

<a id="qt08-experiment"></a>

## 4. 在信息分组内复算，而不只看总均值

取八次独立公平的 $\pm1$ 增量，$M_0=0$，每条完整路径概率为 $1/256$。取由前 $k$ 次增量生成的自然滤过 $\mathcal F_k$。以 U 表示 $+1$，D 表示 $-1$。令 $\sigma$ 为首次到达 $+1$、最晚在 3 停止；令 $\tau$ 为首次到达 $+2$、最晚在 8 停止。若达到 $+2$，此前必已经过 $+1$；否则截断规则也保证 $\sigma\le\tau$。

停止后当前信息不是 256 个完整结果，而是下列五个前缀。对每组只平均仍可能发生的未来路径：

| 停止时已知前缀 | $\sigma$ | 完整路径数 | $M_\sigma$ | 组内 $M_\tau$ 平均 |
|---|---|---|---|---|
| U | 1 | 128 | 1 | $1$ |
| DDD | 3 | 32 | -3 | $-3$ |
| DDU | 3 | 32 | -1 | $-1$ |
| DUD | 3 | 32 | -1 | $-1$ |
| DUU | 3 | 32 | 1 | $1$ |

例如观察到 DDD 时，已经知道 $M_\sigma=-3$。继续按 $\tau$ 的规则运行，这个组内 $M_\tau$ 的平均仍是 $-3$，不是总体平均零。条件定理比“256 条路径总平均为零”多保留了这一层信息。

<div data-experiment-slot="EXP-QT08-STOP-01"></div>

实验可以选择一条完整路径，再回到它在 $\sigma$ 时所属的分组。随后切换“事后最高点”作对照：八步路径最大值的平均为 $\frac{467}{256}\approx1.82421875$。不是停止定理被打破，而是规则不再只使用当时信息。

<a id="qt08-infinite"></a>

## 5. 真的最终会停止，也未必能交换极限与期望

现在另开一个无限公平抛币空间，不再使用刚才的 256 条路径。令

$$
Z_n=2^n\mathbf1_{\{\text{前 }n\text{ 次全为正面}\}},\qquad Z_0=1,
$$

并令 $\tau$ 为首次反面出现的次数。在尚未出现反面时，下一步以各 $1/2$ 的概率加倍或归零；已归零后保持零。因此 $Z$ 是非负可积鞅，且 $E[Z_n]=1$。

这里 $P(\tau=n)=2^{-n}$，所以 $P(\tau<\infty)=1$，而

$$
E[\tau]=\sum_{n=0}^{\infty}P(\tau>n)
=\sum_{n=0}^{\infty}2^{-n}=2.
$$

但一旦反面出现，$Z_\tau=0$。对于每个确定 $N$，却有

$$
Z_{\tau\wedge N}=2^N\mathbf1_{\{\tau>N\}},
\qquad E[Z_{\tau\wedge N}]=1.
$$

有限截断一直符合定理；逐路径极限也确实为零。失效的是从逐路径极限跳到期望极限。

一族可积变量 $(Y_n)$ 一致可积，是指

$$
\lim_{K\to\infty}\sup_n
E[|Y_n|\mathbf1_{\{|Y_n|>K\}}]=0.
$$

对这里的停止族，任给 $K$，选 $2^N>K$，尾部期望仍等于 $2^N2^{-N}=1$。少数幸存路径的数值越来越大，恰好抵消其概率越来越小；尾部没有一致消失。MIT 给出一致可积鞅的无限停时延伸，我们在这里只用该定义精确诊断反例，不把 $E\tau<\infty$ 单独当作延伸定理。[^mit-ui]

<a id="qt08-exercises"></a>

## 6. 迁移：判断规则，检查条件，区分平均与风险

问题一。比较两条路径 UUDDDDDD 和 UDDDDDDD。它们在时点 1 的信息相同。若 $\rho$ 为全路径最大值第一次出现的时间，$\{\rho\le1\}$ 能在时点 1 判定吗？

解析。第一条的最大值 2 在时点 2 首次达到；第二条的最大值 1 在时点 1 首次达到。因此同一时点 1 的信息组内，事件 $\{\rho\le1\}$ 一真一假，不属于 $\mathcal F_1$，$\rho$ 不是停时。这个反证不依赖计算最大值的总体平均。

问题二。额外假设 $M_0,\ldots,M_N\in L^2$。是否还能说 $E[M_\tau^2]=E[M_\sigma^2]$？请由本篇定理推导正确关系。

解析。先由有限上界得到 $M_\sigma,M_\tau\in L^2$。条件等式给 $E[M_\tau-M_\sigma\mid\mathcal F_\sigma]=0$，从而交叉项期望为零。展开平方得

$$
E[M_\tau^2]
=E[M_\sigma^2]+E[(M_\tau-M_\sigma)^2]
\ge E[M_\sigma^2].
$$

乘 $M_\sigma$ 的操作可先对它截断，再用 Cauchy–Schwarz 过极限；不是无条件提出一个任意不可积系数。八步例中

$$
E[M_\tau^2]=\frac{187}{32},\qquad
E[M_\sigma^2]=2,\qquad
E[(M_\tau-M_\sigma)^2]=\frac{123}{32},
$$

也正好满足这个分解。平均不变并不等于继续等待不增加风险。

问题三。无限首次反面反例同时有 $E\tau=2$。为什么 MIT 的“有限期望停时”判据仍未适用？

解析。那个充分条件还要求 $E[|Z_n-Z_{n-1}|\mid\mathcal F_{n-1}]$ 被同一个常数控制。这里该条件期望等于 $Z_{n-1}$；在连续正面的路径上，它随 $n$ 增大，没有统一常数界。遗漏的条件和不一致可积的尾部现象是相容的。

[^mit-definition]: Yury Polyanskiy / MIT Class Participants, [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf#page=2), Fall 2018，§1，PDF pp.2–4。采用定义和 Doob 构造；一般首次越界会自动有界的旁述不作为命题。
[^mit-stopping]: 同讲义 §3，PDF pp.6–9。本文给出两停时条件版本的完整增量证明；不沿用 pp.6–7 停止和式中旧值下标的排印错误。
[^mit-ui]: 同讲义 Proposition 1，p.7；Theorem 3 及证明，pp.8–9。无限空间反例与八步有限实验分别建模。

