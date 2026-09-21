{
  "title": "有限市场中的状态价格、等价鞅测度与完备性",
  "description": "在二状态与三状态市场中求复制组合、定价权重和无套利价格区间.",
  "layout": "entry",
  "notebookid": "zh-qt18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt18"
}

<a id="qt18-model"></a>

## 市场与持仓

取有限状态空间 $\Omega$，$\mathcal F_0=\{\varnothing,\Omega\}$，$\mathcal F_1=2^\Omega$，研究概率 $P$ 对每个状态严格为正. 现金账户每单位的价格为确定的 $B_0,B_1>0$；本例 $B_0=1$、$B_1=\frac{51}{50}$，所以现金一期增长因子为 $R=B_1/B_0=\frac{51}{50}$. 这是一段抽象期间，不年化.

允许在时点 0 选择任意有限、有符号的实数持仓，借贷都使用同一现金账户；没有价差、费用、分红或额外持仓限制. 持仓必须在结果揭晓前确定. [^w-model]

令 $\beta$ 为现金账户单位数、$\Delta$ 为股票单位数. 初始成本与终端价值是

$$
V_0=\beta B_0+\Delta S_0,
\qquad V_1=\beta B_1+\Delta S_1.
$$

$\beta$ 为现金账户单位数，$\beta B_t$ 为现金金额，负值表示借款.

EXP-STATE-01以美元计价，每个支付对应一份模型资产.

<a id="qt18-replication"></a>

## 二状态复制

状态顺序为上涨、下跌. 给定股票初价 $S_0=100$，终值与现金账户如下；看涨式支付的行权价为 $105$.

| 时点或状态 | 现金账户每单位 | 股票每单位 | 看涨式支付 |
|---|---|---|---|
| 初始 | $1$ | $100$ | 待由复制确定价格 |
| 上涨 | $\frac{51}{50}$ | $120$ | $15$ |
| 下跌 | $\frac{51}{50}$ | $90$ | $0$ |

令 $\theta=(\beta,\Delta)^T$. 把状态放在行、资产放在列：

$$
A=\begin{pmatrix}\frac{51}{50}&120\\\frac{51}{50}&90\end{pmatrix},
\qquad A\theta=\begin{pmatrix}15\\0\end{pmatrix}.
$$

两行相减消去现金，得到 $\Delta=\frac{1}{2}$；再代回下跌状态，得终端现金金额 $\beta B_1=-45$，因而 $\beta=-\frac{750}{17}$. 初始成本为 $V_0=\frac{100}{17}\approx5.882$. [^w-replicate]

| 项目 | 时点0 | 上涨终值 | 下跌终值 |
|---|---|---|---|
| 现金金额 | $-\frac{750}{17}$ | $-45$ | $-45$ |
| 股票金额 | $50$ | $60$ | $45$ |
| 合计 | $\frac{100}{17}$ | $15$ | $0$ |

这套持仓在两种状态都支付 $H$. 若同一支付可以买卖，报价 $c$ 高于复制成本，就卖出支付、买入复制组合，并把差额存入现金账户；报价更低时反向操作. 因此可复制支付的无套利价格由逐状态复制成本确定，不依赖研究概率 $P$.

<a id="qt18-measures"></a>

## 状态价格与定价核

称满足

$$
A^T\pi=s_0,\qquad \pi_i>0
$$

$s_0$ 为已交易资产初价向量，$\pi_i$ 给状态 $i$ 的一美元支付赋予价格. 不完备市场中该支付可能不可复制，正状态价格也可能不唯一.

若这样的 $\pi$ 存在，对任意零成本持仓 $\theta$ 都有 $\pi^TA\theta=s_0^T\theta=0$；而一个逐状态非负、至少一处严格正的终值，其严格正加权和不可能为零. 这已经证明了该一期市场没有套利. 反方向由有限期第一基本定理给出. [^w-ftap]

现金账户那一列满足 $B_1\sum_i\pi_i=B_0$，所以 $\sum_i\pi_i=1/R$. 将它归一化，定义 $Q_i=R\pi_i$，得到

$$
\sum_i Q_i=1,
\qquad \mathbb{E}_Q[S_1]=RS_0.
$$

这等价于 $\mathbb{E}_Q[S_1/B_1]=S_0/B_0$；贴现价格在 $Q$ 下为鞅. 因为 $Q_i>0$，它与全支持的 $P$ 有相同的零概率事件，故称等价鞅测度. [^w-ftap]

二状态中联立概率总和与股票定价约束，算得 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$，$\pi=\left(\frac{20}{51},\frac{10}{17}\right)$. 再取教学概率 $P=\left(\frac{3}{5},\frac{2}{5}\right)$，就能把这些对象放在同一张表里：

| 对象 | 上涨 | 下跌 | 归一化检查 |
|---|---|---|---|
| 研究概率 $P$ | $\frac{3}{5}$ | $\frac{2}{5}$ | 分量和为1 |
| 定价概率 $Q$ | $\frac{2}{5}$ | $\frac{3}{5}$ | 分量和为1 |
| 状态价格 $\pi$ | $\frac{20}{51}$ | $\frac{10}{17}$ | 分量和为 $\frac{50}{51}$ |
| 密度 $z=Q/P$ | $\frac{2}{3}$ | $\frac{3}{2}$ | $\mathbb{E}_Pz=1$ |
| 定价核 $m=\pi/P$ | $\frac{100}{153}$ | $\frac{25}{17}$ | $\mathbb{E}_Pm=1/R$ |

其中密度 $z_i=Q_i/P_i$ 满足 $\mathbb{E}_Pz=1$；定价核 $m_i=\pi_i/P_i=z_i/R$ 满足 $\mathbb{E}_Pm=1/R$. 对可复制支付，三个价格写法完全一致：

$$
\begin{aligned}
\operatorname{price}(H)
&=\sum_i\pi_iH_i\\
&=R^{-1}\mathbb{E}_Q[H]\;=\;\mathbb{E}_P[mH].
\end{aligned}
$$

本例 $\mathbb{E}_PH=9$，$\mathbb{E}_QH=6$. 直接算 $R^{-1}\mathbb{E}_PH=\frac{150}{17}$，并不会得到复制成本 $\frac{100}{17}$. 研究概率在回答支付平均有多大；定价核则按资产价格约束改变了状态权重.

<div data-experiment-slot="EXP-STATE-01"></div>

若只把 $P$ 改为 $\left(\frac{9}{10},\frac{1}{10}\right)$，而支付矩阵与已交易资产价格保持不变，则 $Q$、$\pi$ 和复制成本不变，密度 $dQ/dP$ 与定价核 $m$ 改变.

<a id="qt18-incomplete"></a>

## 三状态不完备市场

三状态分支取股票终值80、100、120，保持现金账户与股票初价，行权价改为100，研究概率全支持.

| 状态 | 现金账户终值 | 股票终值 | 新增支付终值 |
|---|---|---|---|
| 下跌 | $\frac{51}{50}$ | $80$ | $0$ |
| 中间 | $\frac{51}{50}$ | $100$ | $0$ |
| 上涨 | $\frac{51}{50}$ | $120$ | $20$ |

现金和股票只有两列，其支付矩阵秩为 2. 可复制支付一定形如 $H_i=\beta B_1+\Delta S_{1i}$，即三个点落在同一直线上. 给定 $H=\left(0,0,20\right)$ 并非如此：前两个状态支付都为零迫使 $\Delta=0,\beta=0$，便不可能在第三个状态支付 $20$.

从 $q_d+q_m+q_u=1$ 与 $\mathbb{E}_QS_1=RS_0$ 出发，令 $t=q_d$，解得

$$
Q(t)=\bigl(t,\ \frac{9}{10}-2t,\ \frac{1}{10}+t\bigr).
$$

三个分量都必须严格正，所以 $0<t<\frac{9}{20}$. 原市场因此存在一族 EMM，不能单凭它给每个非复制支付一个唯一价格. [^w-complete]

现在明确改变的是交易集合：允许将支付 $H$ 以初价 $c$ 自由买卖，同时保留原现金和股票价格. 该新增资产要求

$$
c(t)=\frac{ 2+20t }{ \frac{51}{50} },
\qquad c\in(\frac{100}{51},\frac{550}{51}).
$$

| $t$ | $Q(t)$ | 新增支付的相容初价 |
|---|---|---|
| $\frac{1}{10}$ | $\left(\frac{1}{10},\frac{7}{10},\frac{1}{5}\right)$ | $\frac{200}{51}$ |
| $\frac{1}{5}$ | $\left(\frac{1}{5},\frac{1}{2},\frac{3}{10}\right)$ | $\frac{100}{17}$ |
| $\frac{2}{5}$ | $\left(\frac{2}{5},\frac{1}{10},\frac{1}{2}\right)$ | $\frac{500}{51}$ |

区间内的 $c$ 对应严格正状态价格；两个端点分别有如下零成本持仓：

| 新增支付初价 | 持仓 $(\beta,\Delta,\gamma)$ | 初始成本 | 三状态终值 |
|---|---|---|---|
| $\frac{100}{51}$ | $\left(\frac{5000}{51},-1,1\right)$ | $0$ | $\left(20,0,0\right)$ |
| $\frac{550}{51}$ | $\left(-\frac{2000}{51},\frac{1}{2},-1\right)$ | $0$ | $\left(0,10,0\right)$ |

两组持仓终值非负且有一处严格正，构成套利. 下端以外第一组、高端以外第二组的初始成本更低，将所收差额存入现金账户即可得到零成本套利.

<a id="qt18-complete"></a>

## 新增资产与完备性

让新增支付的成交初价固定为 $c=6$. 增广矩阵为

$$
A_+=\begin{pmatrix}
\frac{51}{50}&80&0\\
\frac{51}{50}&100&0\\
\frac{51}{50}&120&20
\end{pmatrix}.
$$

它的行列式为 $408$，秩为 3. 因此每个三状态支付都能解出持仓. 新资产价格同时把自由参数固定，得到

$$
Q=\left(\frac{103}{500},\frac{61}{125},\frac{153}{500}\right),\qquad \pi=\left(\frac{103}{510},\frac{122}{255},\frac{3}{10}\right).
$$

此时支付矩阵满行秩，任意终端可测支付都可复制，市场因而完备；完备性刻画复制空间，不识别研究概率 $P$. 一般有限期下的第一基本定理见 <a class="inline-ref" href="/zh/notebook/qt-finite-market-ftap-proof/#qt18p1-ftap" data-reference="qt18p1-ftap">第一基本定理证明<span aria-hidden="true"> ↗</span></a>，完备性与 EMM 唯一性的关系见 <a class="inline-ref" href="/zh/notebook/qt-completeness-unique-measure-proof/#qt18p2-theorem" data-reference="qt18p2-theorem">第二基本定理证明<span aria-hidden="true"> ↗</span></a>. [^w-complete]

<a id="qt18-exercises"></a>

## 练习与解析

问题一. 只把二状态研究概率改为 $P=\left(\frac{9}{10},\frac{1}{10}\right)$，支付和初价全部不动. 重新计算 $dQ/dP$、定价核以及支付价格. 为什么 $\mathbb{E}_PH$ 会变，但复制价格不变？

解析. 市场方程没有变化，所以 $Q=\left(\frac{2}{5},\frac{3}{5}\right)$、$\pi=\left(\frac{20}{51},\frac{10}{17}\right)$ 不变. 逐分量相除得到

$$
\frac{dQ}{dP}=\left(\frac{4}{9},6\right),\qquad m=\left(\frac{200}{459},\frac{100}{17}\right).
$$

此时 $\mathbb{E}_PH=27/2$，$\mathbb{E}_P[mH]=100/17$. $P$ 与相应定价核改变，固定资产的复制关系保持不变.

问题二. 只交易三状态市场中的现金和股票，能否复制中间状态的一美元数字支付 $(0,1,0)$？

**解析.** 前两行给 $\Delta=1/20$、$\beta B_1=-4$，第三行支付为2，异于目标0，因此不能复制. 加入第三项资产后的完整持仓见 <a class="inline-ref" href="/zh/notebook/qt-completeness-unique-measure-proof/" data-reference="zh-qt18p2">完备性与唯一EMM<span aria-hidden="true"> ↗</span></a>.

[^w-model]: Ruth J. Williams, [Finite Market Model, Chapter 3](https://mathweb.ucsd.edu/~williams/courses/m294notes/chap3.pdf#page=2)，§3.1，印刷 pp.40–43 / PDF pp.2–3；章节 PDF 未标可靠修订日期. EXP-STATE-01 为 2026-09-21-v1 教学构造.
[^w-replicate]: 同章 §3.3，Theorem 3.3.1，印刷 p.51 / PDF p.7，复制价值的条件期望表示. 本文一期持仓由显示的矩阵直接求解.
[^w-ftap]: 同章 Definitions 3.2.1–3.2.2、Lemma 3.2.3、Theorem 3.2.4，印刷 pp.44–50 / PDF pp.4–7；正状态价格的一期充分性由本文内积直接证明，一般必要性在 QT18-P1.
[^w-complete]: 同章 §3.3，Theorems 3.3.2–3.3.3，印刷 pp.52–55 / PDF pp.8–9；本文三状态开放区间及端点套利由显示的资产和持仓直接重建.
