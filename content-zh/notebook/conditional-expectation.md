{
  "title": "条件期望：按已有信息分组平均",
  "description": "用有限分区计算条件平均，验证每个可辨认事件上的积分身份和全期望公式.",
  "layout": "entry",
  "notebookid": "zh-conditional-expectation",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-conditional-expectation"
}

当信息只辨认出结果属于某一分组时，条件期望用 <a class="inline-ref" href="/zh/notebook/conditional-probability/" data-reference="zh-qt05">条件概率<span aria-hidden="true"> ↗</span></a> 在组内重新加权，并在同组取同一值；组内尚未揭晓的状态不能被提前区分.

<a id="qt06-definition"></a>
## 有限分组定义

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

在零概率组上可选择任一有限常数作为 $m_i$；以下统一取 $0$. 该约定在零概率组保持可测且不改变积分. [^finite]

M将每个状态映射到其所在组的平均值，观察第i组后得到数值 $m_i$.

<a id="qt06-case"></a>
## 信号与条件支付

采用 $K=6000$、四个结算值、$L/H$ 信号与模型概率作为算例输入. 支付规则按标准 SPX 欧式现金结算看涨期权，每指数点对应 $100$ 美元；$S_T$ 表示合约规则指定的结算值，$X=100(S_T-6000)^+$ 为一份合约的美元结算金额. [^spx]

| 状态 | 模型概率 | 先收到的信号 | $S_T$（点） | $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | $0.1$ | $L$ | $5900$ | $0$ |
| $\omega_2$ | $0.3$ | $L$ | $6000$ | $0$ |
| $\omega_3$ | $0.4$ | $H$ | $6100$ | $10000$ |
| $\omega_4$ | $0.2$ | $H$ | $6200$ | $20000$ |

模型中先观察 $L/H$，随后才揭晓结算值. 这里的 $X$ 是到期结算金额，未扣权利金也未贴现，因此条件平均针对支付金额而非净损益或期权价格.

收到 $L$ 后，两行支付都为零，所以 $m_L=0$. 收到 $H$ 后，条件概率为

$$
P(\omega_3\mid H)=\frac{0.4}{0.6}=\frac23,\qquad
P(\omega_4\mid H)=\frac13.
$$

因此

$$
m_H=\frac23(10000)+\frac13(20000)=\frac{40000}{3}.
$$

M在L组取0、H组取 $40000/3$，与当前能辨认的分组一致.

<div data-experiment-slot="EXP-QTB-CONDITIONAL-01"></div>

保持概率和支付不变，只改变可用信息，得到下面的静态对照：

| 状态 | 尚无信号：$\mathbb{E}[X]$ | 只知 $L/H$：$\mathbb{E}[X\mid\mathcal G]$ | 完整状态已知：$X$ |
|---|---:|---:|---:|
| $\omega_1$ | $8000$ | $0$ | $0$ |
| $\omega_2$ | $8000$ | $0$ | $0$ |
| $\omega_3$ | $8000$ | $40000/3$ | $10000$ |
| $\omega_4$ | $8000$ | $40000/3$ | $20000$ |

信息细化可使条件期望上升或下降：从L/H列到完整状态列，第三行下降、第四行上升.

<a id="qt06-identity"></a>
## 事件上的积分身份

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

仅保留总体平均仍不够. 例如常数 $8000$ 的确与 $X$ 有相同期望，但它在 $L$ 上的积分是 $8000(0.4)=3200$，而 $X$ 在 $L$ 上的积分为零. 已经知道的 $L$ 消息被它忽略了.

<a id="qt06-tests"></a>
## 练习与解析

**题 1.** 改为三个可辨认组 $\{\omega_1\}$、$\{\omega_2,\omega_3\}$、$\{\omega_4\}$，重新计算条件期望及其总体平均.

**解析.** 三组概率为 $0.1,0.7,0.2$，组内平均依次为 $0$、$4000/0.7=40000/7$、$20000$. 因此条件期望向量为 $(0,40000/7,40000/7,20000)$，其期望是 $0.7(40000/7)+0.2(20000)=8000$. 第二组必须把零支付状态 $\omega_2$ 的概率放进分母.

**题 2.** 保持原来的 $L/H$ 信息，但另设概率为 $(0.25,0.75,0,0)$. 在 $H$ 上取 $M=0$ 和取 $M=100$，哪一个是条件期望？能否在 $\omega_3,\omega_4$ 上分别取 $0,100$？

**解析.** 整个零概率H组分别取常数0或100，均为可测版本且保持积分. 在同组两点取不同值破坏对当前事件域的可测性，因此后一函数不符合定义.

[^finite]: MIT, *Recitation 3: Conditional Expectations*，Fall 2018，§1.1，pp.1–4（离散条件平均与全期望）；§1.2，pp.4–6（条件期望作为随机变量及一般定义）.[公开全文](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c1ab69cb198badcebee42d5880784439_MIT6_436JF18_rec3.pdf).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2：乘数、欧式行权、现金结算，以及 SPX Traditional 与 SPXW 不同的结算值口径. [产品规格](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf).
