{
  "title": "有限期第一资产定价基本定理：无套利与等价鞅测度",
  "description": "从现金补足、有限维最近点和指标持仓建立NA与EMM的双向证明.",
  "layout": "entry",
  "notebookid": "zh-qt18p1",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt18p1"
}

一期矩阵给了我们一个直观图景：所有零成本持仓的终端增益不能落进非负象限的非零部分，于是存在一组严格正的权重把它们的平均压到零. 多期市场的难点是：哪些终端向量真的能由当时可知的持仓产生？即使找到了权重，为什么它会让每一期贴现价格都成为条件均值不变的过程？

这一证明单元把这两步接起来. 我们先完成现金持仓的构造，再从一个有限维最近点得到严格正权重，最后用只在一个信息事件上交易的持仓恢复条件鞅性质. 只需有限维线性代数、条件期望、紧性与连续函数取最小值.

<a id="qt18p1-model"></a>

## 1. 定理中的有限性与交易规则

固定 $\Omega=\{\omega_1,\ldots,\omega_m\}$，$\mathcal F=2^\Omega$，且 $P(\{\omega_i\})>0$. 时点为 $0,\ldots,T$，$T<\infty$；取

$$
\mathcal F_0=\{\varnothing,\Omega\},\qquad
\mathcal F_0\subseteq\cdots\subseteq\mathcal F_T=\mathcal F.
$$

若原始样本空间更细，这里直接以终端信息的正概率原子为状态；完备性和测度唯一性都针对这些可区分状态.

现金账户 $B_k$ 为确定、严格正的有限数值；借款与存款沿同一账户增长. 风险资产向量 $S_k=(S_k^1,\ldots,S_k^d)$ 取有限实值且适应滤过. 允许有限、有符号的实数持仓，没有手续费、买卖价差、分红或额外借贷、卖空与流动性限制. $h_k\in\mathbb R^d$ 是在 $(k-1,k]$ 持有的风险资产单位数，必须 $\mathcal F_{k-1}$ 可测；现金账户单位数 $\beta_k$ 也一样. [^w-model]

这些条件让可实施的零成本增益构成线性空间：两套策略可以相加，也可以乘任意实数. 若只允许买不能卖，这个线性结构就不能照用.

令 $\widetilde S_k=S_k/B_k$，$\widetilde V_k=V_k/B_k$. 套利是初值 $V_0=0$、终值每个状态非负、至少一个状态严格正的自融资策略. 由于 $P$ 全支持，这等价于 $V_T\ge0$ 且 $P(V_T>0)>0$.

<a id="qt18p1-cash"></a>

## 2. 任意可预测风险持仓，都要先补上现金

对 $k=1,\ldots,T-1$，自融资要求换仓前后在同一时点计价的财富相等，没有外部注资或提款：

$$
\beta_kB_k+h_k\cdot S_k
=\beta_{k+1}B_k+h_{k+1}\cdot S_k.
$$

命题（现金补足）. 给定初始财富 $V_0\in\mathbb R$ 和所有可预测风险持仓 $h_1,\ldots,h_T$，唯一的自融资现金持仓由以下递推确定：

$$
\begin{aligned}
\beta_1&=\frac{V_0-h_1\cdot S_0}{B_0},\\
\beta_{k+1}&=\frac{\beta_kB_k+h_k\cdot S_k-h_{k+1}\cdot S_k}{B_k},\qquad 1\le k\le T-1.
\end{aligned}
$$

证明. 第一式是初始预算的唯一解，因为 $B_0>0$；它是 $\mathcal F_0$ 可测. 若 $\beta_k$ 已构造，第二式正是上述换仓等值式对 $\beta_{k+1}$ 的唯一解. 右端每项都在 $\mathcal F_k$ 可知，因此 $\beta_{k+1}$ 可用于下一期. 归纳完成存在、可预测性和唯一性. [^w-cash]

现在把同一期持仓放在两个端点计价：

$$
\begin{aligned}
V_k&=\beta_kB_k+h_k\cdot S_k,\\
V_{k-1}&=\beta_kB_{k-1}+h_k\cdot S_{k-1}.
\end{aligned}
$$

各自除以对应的 $B$ 后相减，现金单位数消去，得到

$$
\widetilde V_k-\widetilde V_{k-1}
=h_k\cdot(\widetilde S_k-\widetilde S_{k-1}).
$$

逐期求和就是贴现财富恒等式：

$$
\widetilde V_k=V_0/B_0+
\sum_{j=1}^k h_j\cdot\Delta\widetilde S_j.
$$

这一步不是记号游戏. 后面用到的每个“只在事件 $A$ 上持有一单位股票”的测试策略，都必须经这条递推补成完整资金策略，才真属于无套利条件所约束的对象.

<a id="qt18p1-ftap"></a>

## 3. 定理陈述与较直接的一边

定理（有限期第一资产定价基本定理）. 在第 1 节全部模型条件下，市场无套利，当且仅当存在概率 $Q\sim P$，使每个贴现风险价格 $\widetilde S^i$ 相对于 $(\mathcal F_k)$ 是 $Q$ 鞅. 有限状态中的 $Q\sim P$ 等价于每个 $q_i=Q(\{\omega_i\})$ 严格正. [^w-ftap]

先证明存在这样的 $Q$ 就没有套利. 可预测性让 $h_k$ 在 $\mathcal F_{k-1}$ 下可提出，而贴现价格增量的条件均值为零. 因此自融资财富满足

$$
\mathbb{E}_Q[\widetilde V_k\mid\mathcal F_{k-1}]
=\widetilde V_{k-1}.
$$

这里所有变量都取有限多个有限值，可积性自动成立. 零初值给 $\mathbb{E}_Q\widetilde V_T=0$. 若存在套利，则 $B_T>0$ 保持终值符号；某个严格正终值所在的状态也有严格正 $q_i$，使 $\mathbb{E}_Q\widetilde V_T>0$，矛盾.

注意严格正性在这一句里真正用到了：如果 $Q$ 可以给盈利状态零权重，“均值为零”就可能看不见那个套利.

<a id="qt18p1-separation"></a>

## 4. 从无套利构造严格正权重

把终端随机变量看成 $\mathbb R^m$ 中的向量，定义零初值贴现增益空间

$$
L=\left\{\sum_{k=1}^T h_k\cdot\Delta\widetilde S_k:
 h_k\text{ 是可预测风险持仓}\right\}.
$$

现金补足保证这里每个向量都能由零初值自融资策略实现. 它是线性子空间，因而在有限维空间中闭. 无套利说 $L$ 不含非零非负向量. 把这样的向量除以分量之和，可知这等价于 $L$ 与单纯形

$$
\mathcal D=\{f\in\mathbb R^m:f_i\ge0,\ \sum_i f_i=1\}
$$

不相交. 下面把分离论证完整展开，而不只调用一个定理名称. [^w-separation]

先令 $G=\mathcal D-L$. 它凸、非空，且不含零. 它也闭：若 $x_n=f_n-\ell_n\to x$，单纯形的紧性让一个子列满足 $f_{n_j}\to f\in\mathcal D$；于是 $\ell_{n_j}=f_{n_j}-x_{n_j}\to f-x$. $L$ 闭，所以 $f-x\in L$，即 $x\in G$.

取以原点为中心、半径为 $r$ 且与 $G$ 相交的闭球 $\overline B(0,r)$. 交集非空且紧，欧氏范数在其中达到最小值，记最小点为 $z$. 球外所有点范数大于 $r\ge\|z\|$，故 $z$ 也是整个 $G$ 的最小范数点. 由于 $0\notin G$，$z\ne0$.

对 $x\in G$ 和 $0<\lambda<1$，凸性给 $z+\lambda(x-z)\in G$. 最小性于是给

$$
\begin{aligned}
\|z+\lambda(x-z)\|^2&\ge\|z\|^2,\\
2z\cdot(x-z)+\lambda\|x-z\|^2&\ge0.
\end{aligned}
$$

令 $\lambda\downarrow0$，得 $z\cdot x\ge\|z\|^2$. 代入 $x=f-\ell$：

$$
z\cdot f-z\cdot\ell\ge\|z\|^2
\quad(f\in\mathcal D,\ \ell\in L).
$$

固定 $f$，把 $\ell$ 替换成任意实数倍 $a\ell$. 若 $z\cdot\ell\ne0$，选适当符号、足够大的 $a$ 就使不等式失败. 因此 $z\perp L$. 再逐个取单纯形顶点 $f=e_i$，得到

$$
z_i\ge\|z\|^2>0\quad\text{对每个 }i.
$$

所以分离所得不是仅仅“非负”的权重. 归一化

$$
q_i=\frac{z_i}{\sum_jz_j}
$$

给出全支持概率 $Q$；而 $z\perp L$ 说明 $\mathbb{E}_Q\ell=0$ 对每个 $\ell\in L$ 成立.

<a id="qt18p1-indicator"></a>

## 5. 终端增益均值为零，怎样恢复每一期的条件等式

还不能直接说“因此贴现价格是鞅”. 目前只知道所有零初始终端增益的 $Q$ 平均为零. 我们需要把这条结论落实到每个资产、每一期、每个当时可知的事件.

固定资产 $i$、时点 $k$ 和 $A\in\mathcal F_{k-1}$，令风险持仓只在第 $k$ 期的该资产取 $\mathbf1_A$，其他期、其他资产均为零. 这是可预测持仓. 用第 2 节递推补足现金，初值取零，它的终端贴现增益正好为

$$
\ell=\mathbf1_A(\widetilde S_k^i-\widetilde S_{k-1}^i)\in L.
$$

因而 $\mathbb{E}_Q[\mathbf1_A\Delta\widetilde S_k^i]=0$. 这对所有 $A\in\mathcal F_{k-1}$ 都成立；再加上适应性、可积性，条件期望的积分刻画给

$$
\mathbb{E}_Q[\widetilde S_k^i\mid\mathcal F_{k-1}]
=\widetilde S_{k-1}^i.
$$

每个资产和每一期均如此，故 $Q$ 为 EMM. 至此两方向都完成. 这里采用的是 Williams Lemma 3.2.6 的指标持仓思路，但已经把测试策略的现金与合法性写出. [^w-indicator]

<a id="qt18p1-example"></a>

## 6. 在冻结一期市场里看见证明中的空间

回到同一 EXP-STATE-01 二状态市场. 持有一单位股票并用现金账户借款，使初值为零；贴现增益的基向量为

$$
g=\left(\frac{300}{17},-\frac{200}{17}\right),\qquad L=\operatorname{span}\{g\}.
$$

可选常数风险持仓 $h$，增益就是 $hg$. 每个非零 $h$ 都让两个分量一正一负，所以 $L$ 不会进入非零非负象限. 上面构造出的定价权重在此就是 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$，它满足 $Q\cdot g=0$.

| 量 | 精确结果 |
|---|---|
| 风险持仓 $h$ | $1$ |
| 现金账户单位 $\beta$ | $-100$ |
| 初始财富 | $0$ |
| 终端现金金额 | $-102$ |
| 两状态财富 | $\left(18,-12\right)$ |
| 两状态贴现增益 | $\left(\frac{300}{17},-\frac{200}{17}\right)$ |
| $Q$ 下增益均值 | $0$ |

<div data-experiment-slot="EXP-STATE-01--na-proof"></div>

这个视图允许改变持仓和初始财富，而不改变市场价格或状态. 先看现金账户单位怎样随持仓改变，再看贴现增益恒等式. 改变候选 $q_u$ 也会显示：概率总和为 1 并不够，还必须使 $Q\cdot g=0$.

<a id="qt18p1-exercises"></a>

## 7. 迁移：未来持仓与零权重状态

问题一. 仍在同一二状态市场中，设某人只在上涨结果出现时持有股票，下跌时不持有，并声称能在起点借入恰好需要的现金，使初值处处为零、终值非负. 这与本定理矛盾吗？

解析. 这个风险持仓是 $h_1=\mathbf1_{\{\mathrm{up}\}}$，不是平凡 $\mathcal F_0$ 可测；相应现金单位 $\beta_1=-S_0h_1/B_0$ 也需要预知结果. 它确实形式上产生 $( 18,0)$ 的终值，但不是本模型允许的策略. 失败的是交易信息条件，不是分离证明. 现金补足只把已经可预测的风险持仓补成自融资策略，并不会替未来信息“洗白”.

问题二. 三状态新增支付在价格下端 $c=\frac{100}{51}$ 时，可以找到使全部资产正确加权的 $Q=(0,\frac{9}{10},\frac{1}{10})$. 为什么这不能排除套利？请核对持仓与被忽略的状态.

解析. 下端套利持仓为 $(\beta,\Delta,\gamma)=\left(\frac{5000}{51},-1,1\right)$，其初始成本零、终值 $\left(20,0,0\right)$. $Q$ 恰好给唯一盈利的下跌状态零权重，所以期望仍为零. 它只对 $P$ 绝对连续，不与全支持 $P$ 等价. 定理必须构造每个分量严格正的权重；第 4 节逐顶点证明的正是这一点.

[^w-model]: Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3. 章节无可靠修订日期；本文保持其有限状态、平凡初始信息和确定正现金模型. 初始财富统一使用从第 1 期开始的持仓，不沿用 Lemma 3.2.3 初值行的 $\phi_0$ 排印错误.
[^w-cash]: 同章 Lemma 3.2.5 及完整证明，印刷 pp.48–49 / PDF p.6；贴现增益公式见 §3.1，印刷 pp.42–43 / PDF p.3.
[^w-ftap]: 同章 Theorem 3.2.4，印刷 pp.45–48 / PDF pp.4–6；贴现财富鞅性质见 Lemma 3.2.3，pp.44–45 / PDF p.4.
[^w-separation]: 同章 Theorem 3.6.1 及完整证明，印刷 pp.66–67 / PDF p.15. 此处将其紧凸集取为单纯形，并完整给出闭性、最近点与逐分量严格正性.
[^w-indicator]: 同章 Lemma 3.2.6，印刷 pp.49–50 / PDF pp.6–7. 零成本收益空间与可实施测试持仓由本文现金递推连接.

