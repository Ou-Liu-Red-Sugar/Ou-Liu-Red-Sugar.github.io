{
  "title": "有限期完备性与唯一等价鞅测度",
  "description": "可复制空间、严格正概率扰动与数字支付复制给出有限期完备性定理.",
  "layout": "entry",
  "notebookid": "zh-qt18p2",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt18p2"
}

<a id="qt18p2-model"></a>

## 终端支付与完备性

仍取有限状态 $\Omega=\{\omega_1,\ldots,\omega_m\}$，$\mathcal F=2^\Omega$，$P$ 对所有状态严格正，$\mathcal F_0$ 平凡、$\mathcal F_T=\mathcal F$，有限交易时点为 $0,\ldots,T$. 现金账户 $B_k$ 确定且严格正，借贷同率；风险价格适应，持有于 $(k-1,k]$ 的仓位在 $\mathcal F_{k-1}$ 可知. 允许任意有限有符号实数仓位，交易无摩擦、无分红、无外部资金流、无额外持仓限制，并假设市场无套利. [^w-model]

终端支付 $X$ 为实值 $\mathcal F_T$-可测变量. 自融资策略逐状态满足 $V_T=X$ 时称 $X$ 可复制；所有终端支付均可复制时称市场完备.[^w-completeness]

<a id="qt18p2-space"></a>

## 可复制贴现终值

令 $L$ 为全部零初始贴现终端增益组成的线性空间. 允许任意初始财富后，全部可复制贴现终值组成

$$
\begin{aligned}
K&=\operatorname{span}\{\mathbf1\}+L\\
 &=\{a\mathbf1+\ell:a\in\mathbb R,\ \ell\in L\}.
\end{aligned}
$$

$\operatorname{span}\{\mathbf1\}$ 为全部实常数向量，系数对应初始贴现财富.

由贴现财富恒等式，

$$
V_T/B_T=V_0/B_0+\sum_{k=1}^T h_k\cdot\Delta\widetilde S_k,
$$

所以贴现终值在 $K$ 中. 反过来，若 $X/B_T=a\mathbf1+\ell\in K$，取产生 $\ell$ 的可预测风险持仓，初始财富取 $aB_0$，由现金补足递推构造现金仓位，得到 $V_T/B_T=X/B_T$，即确实复制 $X$. 因此

$$
\text{市场完备}\quad\Longleftrightarrow\quad K=\mathbb R^m.
$$

[^w-space]

<a id="qt18p2-theorem"></a>

## 第二基本定理

定理（有限期第二资产定价基本定理）. 在第 1 节全部条件下，市场完备，当且仅当等价鞅测度唯一. 无套利假设由第一基本定理保证 EMM 集合非空. [^w-completeness]

先作一个准备. 若策略复制 $X$，则在任何 EMM $Q$ 下，贴现财富为鞅，故

$$
V_k/B_k=\mathbb{E}_Q[X/B_T\mid\mathcal F_k].
$$

同一持仓沿给定资产价格计值，因此所有EMM给可复制支付相同价值，所有复制策略也有相同财富过程. 存在冗余资产时，复制持仓仍可不唯一.[^w-value]

证明“完备 $\Rightarrow$ 唯一”. 设 $Q,Q'$ 都是 EMM. 对任意终端事件 $A$，完备性给出复制 $\mathbf1_A$ 的策略，其初始贴现财富满足

$$
\mathbb{E}_Q[\mathbf1_A/B_T]
=V_0/B_0
=\mathbb{E}_{Q'}[\mathbf1_A/B_T].
$$

$B_T$ 是确定的正数，乘回它得到 $Q(A)=Q'(A)$. 因为 $A$ 遍历 $\mathcal F_T=2^\Omega$，故 $Q=Q'$. 这里从贴现事件支付的价格相等恢复事件概率相等，使用了 $B_T$ 的确定性.

<a id="qt18p2-perturbation"></a>

## 概率扰动

另一方向用逆否命题. 若市场不完备，第 2 节给 $K\subsetneq\mathbb R^m$. 有限维线性代数因此提供非零向量 $z\in K^\perp$. 由于 $\mathbf1\in K$ 且 $L\subseteq K$，

$$
\sum_i z_i=0,\qquad z\cdot\ell=0\quad(\ell\in L).
$$

第一基本定理给出一个全支持 EMM $q=(q_i)$. 选

$$
0<|\varepsilon|\le
\frac12\min_{z_i\ne0}\frac{q_i}{|z_i|},
\qquad q'_i=q_i+\varepsilon z_i.
$$

右侧最小值严格正，因为只有有限多个状态且所有 $q_i>0$. 对 $z_i\ne0$，有 $q'_i\ge q_i/2>0$；对 $z_i=0$，$q'_i=q_i>0$. 而 $\sum z_i=0$ 保证 $\sum q'_i=1$. 因此 $q'$ 是另一全支持概率，且因 $\varepsilon\ne0,z\ne0$ 确实不同于 $q$.

还必须检查它仍是 EMM. 对每个零成本增益 $\ell\in L$，

$$
\mathbb{E}_{Q'}\ell
=\mathbb{E}_Q\ell+\varepsilon z\cdot\ell=0.
$$

固定一期、一个资产和一个当期之前可知的事件，采用 QT18-P1 已构造的指标风险持仓并补足现金，就得到

$$
\mathbb{E}_{Q'}[\mathbf1_A\Delta\widetilde S_k^i]=0
\quad\text{对所有 }A\in\mathcal F_{k-1}.
$$

故各贴现价格在 $Q'$ 下仍是鞅. 于是市场不完备便存在至少两个 EMM，逆否命题完成. [^w-space]

$z$ 与全部可复制贴现支付正交，沿此方向扰动概率保持这些支付的价格；不可复制支付的加权值则可改变.

在同一个三状态市场、未加入新资产时，可以取

$$
q=\left(\frac{1}{5},\frac{1}{2},\frac{3}{10}\right),\qquad z=\left(1,-2,1\right).
$$

取 $\varepsilon=1/10$，得 $q^\prime=(3/10,3/10,2/5)$. 两组权重均满足现金与股票价格约束，对看涨式支付给出不同价格.

<a id="qt18p2-replication"></a>

## 一期复制矩阵

在一期市场，把各资产终端支付组成矩阵 $A$，状态为行、资产为列. 若 $\operatorname{rank}(A)=m$，任意支付向量 $x$ 都能求解 $A\theta=x$；初始成本为 $s_0^T\theta$，终值逐行相等. 反过来，若每个状态数字支付 $e_i$ 都可复制，所有 $e_i$ 都在列空间内，矩阵必为满行秩.

三状态分支加入初价6的看涨式支付后，矩阵行列式408. 各数字支付的复制持仓为：

| 数字支付 | 持仓 $(\beta,\Delta,\gamma)$ | 初始成本 |
|---|---|---|
| $\left(1,0,0\right)$ | $\left(\frac{250}{51},-\frac{1}{20},\frac{1}{20}\right)$ | $\frac{103}{510}$ |
| $\left(0,1,0\right)$ | $\left(-\frac{200}{51},\frac{1}{20},-\frac{1}{10}\right)$ | $\frac{122}{255}$ |
| $\left(0,0,1\right)$ | $\left(0,0,\frac{1}{20}\right)$ | $\frac{3}{10}$ |

以中间状态的一美元为例，持仓在每个终端状态的三项贡献如下：

| 状态 | 现金终值 | 股票终值 | 新增资产支付 | 合计 |
|---|---|---|---|---|
| 下跌 | $-4$ | $4$ | $0$ | $0$ |
| 中间 | $-4$ | $5$ | $0$ | $1$ |
| 上涨 | $-4$ | $6$ | $-2$ | $0$ |

每行合计达到目标，初始成本 $122/255$，现金终值为 $\beta B_1$.

对任意支付 $x=(x_d,x_m,x_u)$，线性组合三种数字支付即可复制. 把矩阵相邻行相减，也能直接得到

$$
\begin{aligned}
\Delta&=\frac{x_m-x_d}{ 20 },\\
\beta&=\frac{ 5x_d-4x_m }{ \frac{51}{50} },\\
\gamma&=\frac{x_u-2x_m+x_d}{ 20 }.
\end{aligned}
$$

其中 $\gamma$ 是新增看涨式资产的单位数. 初始价格为

$$
\beta B_0+\Delta S_0+\gamma c
=\pi_dx_d+\pi_mx_m+\pi_ux_u.
$$

<div data-experiment-slot="EXP-STATE-01--complete-proof"></div>

<a id="qt18p2-multiperiod"></a>

## 多期动态复制

多期不能继续用一组从头持有到尾的常数 $\theta$ 表示全部策略. 对每个时点 $k$、每个风险资产 $i$ 和 $\mathcal F_{k-1}$ 的每个原子 $A$，定义向量

$$
b_{k,i,A}(\omega)
=\mathbf1_A(\omega)\Delta\widetilde S_k^i(\omega).
$$

任意可预测持仓在一个信息原子上必为常数，因此这些向量张成 $L$. 把常数向量与全部 $b_{k,i,A}$ 排成一个有限矩阵，求解

$$
X/B_T=a\mathbf1+\sum_{k,i,A}\alpha_{k,i,A}b_{k,i,A}.
$$

找到系数后，在事件 $A$ 上、第 $k$ 期持有资产 $i$ 的数量就是 $\alpha_{k,i,A}$，即 $h_k^i=\sum_A\alpha_{k,i,A}\mathbf1_A$. 初始财富为 $aB_0$，然后逐期补足现金. 贴现财富恒等式保证终值等于 $X$. 完备性保证该有限系统对所有 $X$ 可解；冗余列可能让持仓解不唯一. [^w-representation]

<a id="qt18p2-exercises"></a>

## 练习与解析

问题一. 在已加入初价 $6$ 看涨式资产的三状态市场中，复制 $x=\left(2,-1,3\right)$. 计算持仓、三个终值与初始成本.

解析. 代入上面的差分公式，得 $(\beta,\Delta,\gamma)=\left(\frac{700}{51},-\frac{3}{20},\frac{7}{20}\right)$. 逐状态的结果是：

| 状态 | 现金终值 | 股票终值 | 新增资产支付 | 合计 |
|---|---|---|---|---|
| 下跌 | $14$ | $-12$ | $0$ | $2$ |
| 中间 | $14$ | $-15$ | $0$ | $-1$ |
| 上涨 | $14$ | $-18$ | $7$ | $3$ |

初始成本为 $421/510\approx0.825$，等于 $\pi\cdot x$. 负支付分量表示该状态下需付出资金.

问题二. 有人把可复制空间写成 $K=R\mathbf1+L$，这里 $R=\frac{51}{50}$ 是现金增长因子，并继续使用 $K^\perp$. 哪里出了问题？

解析. 固定一个 $R$ 只给出 $L$ 的仿射平移，并非全部实数初始财富. 最简单取 $L=\{0\}$，该集合只有一个向量 $R\mathbf1$，不含零，不是线性子空间. 正确写法是 $K=\operatorname{span}\{\mathbf1\}+L$. 这才允许由“$\mathbf1\in K$”推出 $\sum z_i=0$，进而保持扰动后的概率总和为 1.

问题三. 若加入一列与原现金账户完全相同的资产，复制仓位不唯一，是否意味着 EMM 不唯一？

**解析.** 重复列不改变列空间，保留完备性与EMM唯一性；两列之间可任意转移持仓，使复制持仓不唯一.

[^w-model]: Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3. 章节无可靠修订日期.
[^w-completeness]: 同章 §3.3，完备性定义及 Theorem 3.3.2，印刷 pp.50–54 / PDF pp.7–9.
[^w-value]: 同章 Theorem 3.3.1，印刷 p.51 / PDF p.7.
[^w-space]: 同章 Theorem 3.3.2 的反向证明，尤其 (3.37)–(3.45)，印刷 pp.52–54 / PDF pp.8–9.
[^w-representation]: 同章 Lemma 3.2.5，印刷 pp.48–49 / PDF p.6，以及 Theorem 3.3.3 及完整证明，印刷 pp.54–55 / PDF p.9.
