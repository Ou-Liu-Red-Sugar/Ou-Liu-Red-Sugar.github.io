{
  "title": "条件概率、独立性与信息更新",
  "description": "从同一联合表选对条件分母，重建 Bayes 更新，并分清独立、不相关与因果.",
  "layout": "entry",
  "notebookid": "zh-qt05",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt05"
}

给定一份联合分布后，条件概率把计算范围限制到条件事件，并用该事件的概率重新归一化. 本例的概率是模型输入.

<a id="qt05-definition"></a>
## 条件概率

令 $(\Omega,\mathcal F,P)$ 为概率空间，$A,B\in\mathcal F$ 且 $P(B)>0$，则**给定 $B$ 的条件概率**是指

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

条件概率在B内重新归一化，全空间质量1，交集分解保留可列可加性. $P(B)=0$ 时该比值未定义.[^conditional]

若 $B_1,\ldots,B_m$ 两两不交并覆盖 $\Omega$，则 $A$ 是各个 $A\cap B_i$ 的不交并，故

$$
P(A)=\sum_{i:P(B_i)>0}P(A\mid B_i)P(B_i).
$$

零概率项直接对交集取零，不在那里计算条件比值. 进一步，若 $P(A)>0$ 且 $P(B_i)>0$，由 $P(A\cap B_i)=P(A\mid B_i)P(B_i)$ 得到 **Bayes 公式**

$$
P(B_i\mid A)
=\frac{P(A\mid B_i)P(B_i)}
{\sum_{j:P(B_j)>0}P(A\mid B_j)P(B_j)}.
$$

Bayes公式用同一交集交换条件方向，分母为所观测事件的概率.

<a id="qt05-example"></a>
## 条件方向与联合表

四个模型状态中先收到L/H信号，T表示尾部状态：

| 状态 | 模型概率 | 信号 | 是否属于 $T$ |
|---|---:|---|---|
| $\omega_1$ | $0.1$ | $L$ | 否 |
| $\omega_2$ | $0.3$ | $L$ | 否 |
| $\omega_3$ | $0.4$ | $H$ | 否 |
| $\omega_4$ | $0.2$ | $H$ | 是 |

这里 $H=\{\omega_3,\omega_4\}$，$T=\{\omega_4\}$. 不附加信息时 $P(T)=0.2$；得知 $H$ 以后，只在总质量为 $0.6$ 的后两行中比较：

$$
P(T\mid H)=\frac{0.2}{0.6}=\frac13.
$$

反过来，得知 $T$ 以后只剩最后一行，而这一行一定属于 $H$：

$$
P(H\mid T)=\frac{0.2}{0.2}=1.
$$

Bayes给 $P(T\mid H)=1\times0.2/0.6=1/3$；$P(H\mid T)=1$ 则来自T包含于H.

<div data-experiment-slot="EXP-QTB-EVENTS-01"></div>

计算顺序是“筛出条件行—算交集质量—除以条件质量”. 默认模型结果如下：

| 对象 | $P(T)$ | $P(H)$ | $P(T\cap H)$ | $P(T\mid H)$ | $P(H\mid T)$ |
|---|---:|---:|---:|---:|---:|
| 默认模型 | $0.2$ | $0.6$ | $0.2$ | $1/3$ | $1$ |

<a id="qt05-independence"></a>
## 独立与不相关

令 $A,B$ 为事件，则二者**独立**是指 $P(A\cap B)=P(A)P(B)$. 这个乘法定义不需要除法，也适用于零概率事件. 只有当 $P(B)>0$ 时，才可等价改写为 $P(A\mid B)=P(A)$. 上述例中 $0.2\ne0.2\times0.6$，因此 $T$ 与 $H$ 不独立. [^independence]

随机变量独立要求其取值事件满足同样的乘法规则，不能只检查协方差. 例如令 $U$ 等概率取 $-1,0,1$，$V=U^2$. 对称性给出 $\mathbb{E}[U]=\mathbb{E}[U^3]=0$，所以 $\operatorname{Cov}(U,V)=0$；但事件 $\{U=0\}$ 和 $\{V=0\}$ 完全相同，交集概率为 $1/3$，并非 $(1/3)^2$. 不相关仍可以保留明显的非线性关系.

同样，独立性要连同条件一起看. 两枚独立公平硬币原本独立；给定“两次结果相同”后，只剩 $HH,TT$ 两个等概率结果. 此时已知第一枚正面，就确定第二枚也是正面. 原分布独立，不代表条件分布仍独立.

这些更新只改变既定联合分布下的条件集合；若要讨论干预 $H$ 对 $T$ 的因果效应，还需要额外的因果结构.

<a id="qt05-tests"></a>
## 练习与解析

**题 1.** 默认表中，得知 $L$ 后 $T$ 的概率是多少？若把 $H$ 两行的概率都改为零，还能计算 $P(T\mid H)$ 吗？

**解析.** $P(L)=0.4$、$T\cap L=\varnothing$，所以 $P(T\mid L)=0$. $P(H)=0$ 时条件比值未定义.

**题 2.** 另一模型有 $P(T)=0.1$、$P(H\mid T)=0.8$、$P(H\mid T^c)=0.2$. 收到 $H$ 后 $T$ 的概率是多少？

**解析.** $P(H)=0.8(0.1)+0.2(0.9)=0.26$，故 $P(T\mid H)=0.08/0.26=4/13$.

[^conditional]: MIT 6.436J/15.085J, *Lecture 3: Conditioning and Independence*，Fall 2018，§1、pp.1–3：条件概率、全概率与 Bayes 公式. [公开讲义](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/5ba99e3803701c145f1d06c26dcf61b8_MIT6_436JF18_lec03.pdf).
[^independence]: 同讲义 §2 开头、pp.3–4 的独立性定义.
