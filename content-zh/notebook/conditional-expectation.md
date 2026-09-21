{
  "title": "条件期望：按已有信息分组平均",
  "description": "用有限分区计算条件平均，验证每个可辨认事件上的积分身份和全期望公式.",
  "layout": "entry",
  "notebookid": "zh-conditional-expectation",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-conditional-expectation"
}

我们有时不知道最终落在哪个状态，却已知道它属于哪一组. 此时要计算的平均既不能忽略已知信息，也不能偷偷使用组内尚未揭晓的结果. 本页只需要有限概率、<a class="inline-ref" href="/zh/notebook/conditional-probability/" data-reference="zh-qt05">条件概率<span aria-hidden="true"> ↗</span></a>和加权平均，不需要先学尾部风险.

<a id="qt06-definition"></a>
## 有限分组的定义

令有限样本空间 $\Omega$ 上的状态概率为 $p_\omega$，$X$ 为有限实值随机变量. 取非空集合 $A_1,\ldots,A_m$ 两两不交并覆盖 $\Omega$，并假设目前能辨认的恰是这些组及其并集，记为 $\mathcal G=\sigma(A_1,\ldots,A_m)$. 这个记号的含义可在 <a class="inline-ref" href="/zh/notebook/measurable-information/" data-reference="zh-qt09">可测信息<span aria-hidden="true"> ↗</span></a> 中查询.

若 $P(A_i)>0$，则在第 $i$ 组中的条件平均为
$$
m_i=\frac{\sum_{\omega\in A_i}p_\omega X(\omega)}
{\sum_{\omega\in A_i}p_\omega}.
$$
**给定这份信息的条件期望**是随机变量
$$
M=\mathbb{E}[X\mid\mathcal G]=\sum_i m_i\,1_{A_i}.
$$
在零概率组上可选择任一有限常数作为 $m_i$；以下统一取 $0$. 这是一个版本约定，不是给 $0/0$ 定义了数值. [^finite]

$M$ 是一个函数：收到第 $i$ 组的消息时，我们使用数 $m_i$. 所以“给定某个已经发生的组后的平均数”和“在消息到达前定义的条件期望随机变量”有关，但不是同一种对象.

<a id="qt06-case"></a>
## 看见信号后，支付怎样平均

下面使用一份**教学情景表**. 支付约定参考标准 SPX 欧式现金结算看涨期权：每指数点对应 $100$ 美元. 这里的行权价 $6000$、四个结算值、信号和概率均为人为设定，不是实际挂牌报价或估出的市场概率. $S_T$ 表示合约规则指定的结算值，而不是随便选的一笔最后成交价. 支付 $X=100(S_T-6000)^+$ 是一份合约的美元金额. [^spx]

| 状态 | 模型概率 | 先收到的信号 | $S_T$（点） | $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | $0.1$ | $L$ | $5900$ | $0$ |
| $\omega_2$ | $0.3$ | $L$ | $6000$ | $0$ |
| $\omega_3$ | $0.4$ | $H$ | $6100$ | $10000$ |
| $\omega_4$ | $0.2$ | $H$ | $6200$ | $20000$ |

模型约定先收到 $L/H$，以后才知道结算值. 金额被确定，不等于经纪账户已收到现金；本例没有另建账户入账和交收账本. 这里计算的是模型支付的条件平均，也没有扣权利金或贴现，**不是期权利润或价格**.

收到 $L$ 后，两行支付都为零，所以 $m_L=0$. 收到 $H$ 后，组内概率不是各一半，而是
$$
P(\omega_3\mid H)=\frac{0.4}{0.6}=\frac23,\qquad
P(\omega_4\mid H)=\frac13.
$$
因此
$$
m_H=\frac23(10000)+\frac13(20000)=\frac{40000}{3}.
$$

换句话说，$M$ 在前两行取 $0$，在后两行取 $40000/3$ 美元. 不能在后两行分别填 $10000,20000$：那需要已经知道完整状态，而当前只知道同一个 $H$ 信号.

<div data-experiment-slot="EXP-QTB-CONDITIONAL-01"></div>

保持概率和支付不变，只改变可用信息，得到下面的静态对照：

| 状态 | 尚无信号：$\mathbb{E}[X]$ | 只知 $L/H$：$\mathbb{E}[X\mid\mathcal G]$ | 完整状态已知：$X$ |
|---|---:|---:|---:|
| $\omega_1$ | $8000$ | $0$ | $0$ |
| $\omega_2$ | $8000$ | $0$ | $0$ |
| $\omega_3$ | $8000$ | $40000/3$ | $10000$ |
| $\omega_4$ | $8000$ | $40000/3$ | $20000$ |

信息变细并不使条件期望在每条状态上都上升：从中间列走到最后一列，第三行下降，第四行上升. 变多的是可区分的结果，而不是每个结果中的平均数.

<a id="qt06-identity"></a>
## 为什么这个平均保留了正确的信息

对每个正概率组，定义直接给出
$$
\sum_{\omega\in A_i}p_\omega M(\omega)
=m_iP(A_i)
=\sum_{\omega\in A_i}p_\omega X(\omega).
$$
零概率组的两边均为零. 任意 $B\in\mathcal G$ 都是若干组的并，把这些组的等式相加，便有
$$
\mathbb{E}[M1_B]=\mathbb{E}[X1_B].
$$
此外，$M$ 在每组中为常数，因此由当前信息便能确定它的值，即 $M$ 是 $\mathcal G$-可测的. 这两点正好成为 <a class="inline-ref" href="/zh/notebook/conditional-expectation-projection/" data-reference="zh-qt11">一般条件期望<span aria-hidden="true"> ↗</span></a> 的定义.

特别地，取 $B=\Omega$ 得到全期望公式. 本例中
$$
\mathbb{E}[M]=0.4(0)+0.6\left(\frac{40000}{3}\right)=8000
=0.4(10000)+0.2(20000)=\mathbb{E}[X].
$$
这里必须按组的概率加权，不能把 $0$ 和 $40000/3$ 直接各乘一半.

仅保留总体平均仍不够. 例如常数 $8000$ 的确与 $X$ 有相同期望，但它在 $L$ 上的积分是 $8000(0.4)=3200$，而 $X$ 在 $L$ 上的积分为零. 已经知道的 $L$ 消息被它忽略了.

<a id="qt06-tests"></a>
## 自检与解析

**题 1.** 改为三个可辨认组 $\{\omega_1\}$、$\{\omega_2,\omega_3\}$、$\{\omega_4\}$，重新计算条件期望及其总体平均.

**解析.** 三组概率为 $0.1,0.7,0.2$，组内平均依次为 $0$、$4000/0.7=40000/7$、$20000$. 因此条件期望向量为 $(0,40000/7,40000/7,20000)$，其期望是 $0.7(40000/7)+0.2(20000)=8000$. 第二组必须把零支付状态 $\omega_2$ 的概率放进分母.

**题 2.** 保持原来的 $L/H$ 信息，但另设概率为 $(0.25,0.75,0,0)$. 在 $H$ 上取 $M=0$ 和取 $M=100$，哪一个是条件期望？能否在 $\omega_3,\omega_4$ 上分别取 $0,100$？

**解析.** 前两种都是版本：它们在 $H$ 这整个零概率组上取常数，因而仍可测，且不改变任何积分. 后一种在同一组中取不同值，不再对 $L/H$ 信息可测；“只差在零概率集合上”不能自动免除可测性要求. 应在选定事件域下讨论版本.

[^finite]: MIT, *Recitation 3: Conditional Expectations*，Fall 2018，§1.1，pp.1–4（离散条件平均与全期望）；§1.2，pp.4–6（条件期望作为随机变量及一般定义）.[公开全文](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2：乘数、欧式行权、现金结算，以及 SPX Traditional 与 SPXW 不同的结算值口径. [产品规格](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本例仅采用其中支付规则；数值情景、信号及概率均为教学设定.

