{
  "title": "复制定价、状态价格与 Q：交易组合与价格区间",
  "description": "先解现金与股票复制，再构造状态价格、Q和定价核；以共享三状态实例说明开放区间与端点套利.",
  "layout": "entry",
  "notebookid": "zh-m21",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m21"
}

<a id="m21-market"></a>
## 一、可交易资产与复制约束

在允许买入和卖空的市场中，两个组合若在每个可能状态支付相同金额，其当前价格受一价定律约束. 用股票与现金逐状态复制期权，就能从可交易资产的价格求出期权价值. [^MEFG-MIT-OPTIONS]

采用共同的 **EXP-STATE-01** 一期教学市场. 交易在时点0决定，终点才知道状态；可持有正负和分数数量，无费用、无股息、无借券或保证金限制，现金借入与存入用同一增长因子. 每个终端状态在实际概率下均为正概率.[^MEFG-STATE]

| 可交易资产 | 时点0单价 | 上涨状态终值 | 下跌状态终值 |
|---|---:|---:|---:|
| 一单位现金账户 $B$ | 1 | 1.02 | 1.02 |
| 一股股票 $S$ | 100 | 120 | 90 |

现金账户的**单位数**记为 $\beta$，其时点 $t$ 的现金金额是 $\beta B_t$. 负单位数表示借款. $R=B_1/B_0=51/50$ 是一期总增长因子，不是“年利率1.02%”. 本分支的call行权价是 **105**，终端支付 $H=(15,0)$.

<a id="m21-replicate"></a>
## 二、两状态复制组合

令 $\Delta$ 为股票数. 若组合要复制call，就须同时满足
$$
\begin{aligned}
1.02\beta+120\Delta&=15,\\
1.02\beta+90\Delta&=0.
\end{aligned}
$$
两式相减，得 $30\Delta=15$，所以 $\Delta=1/2$. 再代回下跌状态，
$$
1.02\beta=-45,
\qquad
\beta=-\frac{750}{17}\approx-44.118.
$$
因此今天买半股花50，借入约44.118，自己需要投入
$$
C_0=\beta B_0+\Delta S_0
=-\frac{750}{17}+50
=\frac{100}{17}\approx5.882.
$$

| 检查位置 | 股票部分 | 现金账户部分 | 合计 |
|---|---:|---:|---:|
| 时点0 | 50 | −44.118 | 5.882 |
| 上涨终点 | 60 | −45 | 15 |
| 下跌终点 | 45 | −45 | 0 |

头寸在状态揭晓前确定：今天借入$750/17$，到期偿还45，并在两个终端状态持有半股股票. 若call可自由买卖，其价格偏离复制成本时，买入便宜一侧、卖出昂贵一侧即可抵销终端支付. [^MEFG-MIT-OPTIONS]

put支付$(0,15)$，复制头寸为股票$-1/2$股、现金账户$1000/17$单位，初始成本$150/17$. 两次复制给出前篇平价$C-P=-50/17$.

<a id="m21-weights"></a>
## 三、状态价格、Q 与实际概率

现在反过来问：今天购买“只在某一个状态支付1美元”的权利应花多少钱？把两个状态的当前单价记为 $\pi_u,\pi_d$. 一单位现金账户到期在两状态都给1.02，而一股股票给120或90，因此
$$
\begin{aligned}
1.02(\pi_u+\pi_d)&=1,\\
120\pi_u+90\pi_d&=100.
\end{aligned}
$$
解得
$$
\pi=\left(\frac{20}{51},\frac{10}{17}\right),
\qquad
\pi_u+\pi_d=\frac{50}{51}.
$$
状态价格的和不是1，因为它们是**未来状态现金的当前价格**，已经包含资金时间. 于是call价格直接为 $15\pi_u=100/17$.

把贴现取出去，定义 $Q_i=R\pi_i$，得到
$$
Q=(2/5,3/5),\qquad
\mathbb{E}_Q[S_1]=102=RS_0.
$$
$Q$ 是将当前可交易资产价格写成贴现期望的权重：
$$
C_0=\sum_i\pi_i H_i=\frac{\mathbb{E}_Q[H]}{R}.
$$
$Q$称为风险中性定价概率，其权重由本市场的资产价格约束确定. [^MEFG-MIT-KOGAN]

另设教学实际概率 $P=(3/5,2/5)$. 则 $\mathbb{E}_P[S_1]=108$、$\mathbb{E}_P[H]=9$，而 $\mathbb{E}_Q[S_1]=102$、$\mathbb{E}_Q[H]=6$. $\mathbb{E}_P[H]/R=150/17$ 是按这组 $P$ 折算的期望支付，**不是**call的复制成本.

还可把两个权重体系联系起来：
$$
\frac{dQ}{dP}=\left(\frac23,\frac32\right),
\qquad
m_i=\frac{\pi_i}{P_i}
=\left(\frac{100}{153},\frac{25}{17}\right).
$$
这里 $m$ 是定价核；它给不同状态的实际概率加上不同价格权重. 三种写法一致：
$$
C_0=\mathbb{E}_P[mH]=\sum_i\pi_iH_i=\frac{\mathbb{E}_Q[H]}R.
$$
$\mathbb{E}_P[dQ/dP]=1$，而 $\mathbb{E}_P[m]=1/R$；一个是概率密度，一个含贴现，不能互换.

<a id="m21-belief"></a>
## 四、主观概率与无套利价格

保持两资产价格和终端支付不变，只把教学 $P(u)$ 改为0.2、0.6、0.8，复制头寸和 $Q$ 都不变. 变化的是实际期望结果：

| $P(u)$ | $\mathbb{E}_P[H]$ | 初始成本一期增长 $RC_0$ | 长call的期望净额 |
|---:|---:|---:|---:|
| 0.2 | 3 | 6 | −3 |
| 0.6 | 9 | 6 | 3 |
| 0.8 | 12 | 6 | 6 |

买方融资后期望净额随$P$变化，未对冲卖方的期望净额方向相反. 改变$P$还会改变$dQ/dP$和$m$；在资产价格与支付固定的比较中，复制头寸和$Q$保持不变. [^MEFG-STATE]

<a id="m21-incomplete"></a>
## 五、不完备市场的价格区间

接下来切换到共同实验的**另一个分支**. 状态顺序改为下／中／上，股票终值为80、100、120；现金仍为1到1.02. 这次call行权价是 **100**，支付为 $(0,0,20)$.

只有股票和现金时，任何终端组合都是 $\beta R+\Delta S_1$. 如果它要在80和100两状态都为0，两式相减就迫使 $\Delta=0$，继而 $\beta=0$；这样在120状态也只能为0，无法支付20. 支付$(0,0,20)$不在股票与现金的线性张成空间中. [^MEFG-STATE]

满足原两资产价格的概率有一族：
$$
Q(t)=\left(t,\frac9{10}-2t,\frac1{10}+t\right),
\qquad 0<t<\frac9{20}.
$$
严格正性使三个实际可能状态都得到正定价权重. 若把上述call以价格 $c$ 加成一项可自由正负交易的资产，无套利的候选价格为
$$
c(t)=\frac{20(1/10+t)}{51/50},
\qquad
c\in\left(\frac{100}{51},\frac{550}{51}\right).
$$
这个开区间约为 $(1.961,10.784)$. 在保持股票和现金价格不变、允许自由正负交易时，区间内的新增支付价格都与无套利相容；它给出该不完备市场的无套利价格集合.

为什么端点不包括？看两组真实写出的教学持仓：

| 新支付价格 | 现金账户单位 $\beta$ | 股票 $\Delta$ | 新支付单位 $\gamma$ | 初始成本 | 下／中／上终值 |
|---|---:|---:|---:|---:|---|
| $100/51$ | $5000/51$ | −1 | 1 | 0 | (20,0,0) |
| $550/51$ | $-2000/51$ | 1/2 | −1 | 0 | (0,10,0) |

两组头寸均为零成本，终端支付非负，并在一个正概率状态严格为正，因此端点价格存在套利.

若新增支付确实以 **6** 交易，新增约束使
$$
Q=\left(\frac{103}{500},\frac{61}{125},\frac{153}{500}\right)
$$
唯一；三列终端支付矩阵的秩变成3. 还可以真的合成只在中间状态给1的支付：取 $(\beta,\Delta,\gamma)=(-200/51,1/20,-1/10)$，终值为 $(0,1,0)$，初始成本 $122/255$.

<a id="m21-explore"></a>
## 六、市场结构与主观看法的区分

<div data-experiment-slot="VIEW-MEFG-M21-STATE-01"></div>

交互的两状态分支固定资产价格和终端支付，只改变$P$；三状态分支则用$t$选择相容的$Q$，并在价格区间端点显示相应套利头寸.

<a class="inline-ref" href="/zh/notebook/qt-state-prices-martingale-measures/" data-reference="zh-qt18">有限市场的基本定理<span aria-hidden="true"> ↗</span></a>给出无套利、严格正定价权重与完备性之间的一般证明.

<a id="m21-exercises"></a>
## 七、复制与价格区间检验

**题一：$-750/17$ 和 $-45$ 为什么都出现在同一笔借款里？**

**解析.** 前者是现金账户持有单位；因为 $B_0=1$，也恰等于时点0借款金额. 终点现金账户单价为1.02，所以 $\beta B_1=-45$. 不是复制组合借了两次钱，也不是终点再次扣初始投入.

**题二：$P(u)$ 从0.6改到0.9，call价格为什么仍为 $100/17$？**

**解析.** 股票、现金价格和状态支付均未变，原复制策略还在每个状态给 $(15,0)$. 因此 $Q$ 和状态价格不变；$dQ/dP$ 则变为 $(4/9,6)$，定价核变为 $(200/459,100/17)$. 真实期望支付变成13.5，不能因此把复制价格改成 $13.5/1.02$.

**题三：三状态下端组合的终值，请不要只背表.**

**解析.** 现金账户 $5000/51$ 到期为100；空一股给 $(-80,-100,-120)$；买一份支付给 $(0,0,20)$. 加总为 $(20,0,0)$. 初始为 $5000/51-100+100/51=0$，所以确有套利.

**题四：两状态call约5.882，三状态某个候选也可能约5.882，是同一合约吗？**

**解析.** 不是. 前者 $K=105$，状态120/90；后者 $K=100$，状态80/100/120，且是在 $t=0.2$ 这一候选权重下得出的价格. 相同数字不能消除市场和合同的差异.

**题五：禁止卖空后，哪些结论或证明步骤需要调整？**

**解析.** 复制与端点套利使用了负持仓. 禁止卖空会改变可行策略集合，需要重新定义价格约束，而不只是改变一个概率. 它应是有独立条件的模型变式，不能静默修改这份无摩擦冻结市场.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
