{
  "title": "情景、事件与概率",
  "description": "我们先固定观察期限，再说明期末可能发生哪些结果。",
  "layout": "entry",
  "notebookid": "zh-qt02",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt02"
}

<span id="qt02-definitions"></span>

## 定义与约定

我们先固定观察期限，再说明期末可能发生哪些结果。讨论“未来某次合约结算”与“明天收盘”是不同的问题，不能共用一张未注明期限的情景表。

**定义。** 令 $\Omega$ 为非空集合，$\mathcal F$ 为其上的 $\sigma$-代数，即包含空集、对补集和可数并封闭的一族子集，则 $\Omega$ 称为样本空间，$\omega\in\Omega$ 是一个基本结果，$A\in\mathcal F$ 称为事件。给定概率测度 $\mathbb P\colon\mathcal F\to[0,1]$，要求 $\mathbb P(\Omega)=1$，且对两两不交的可数事件族满足可列可加性。[^mit]

有限模型中可取 $\mathcal F=2^\Omega$。设 $\Omega=\{\omega_1,\ldots,\omega_n\}$，给定 $p_i\ge0$ 且 $\sum_i p_i=1$，则 $\mathbb P(A)=\sum_{\omega_i\in A}p_i$。权重 0 允许出现，不因此删除该结果；“概率为零”与“事件为空”不是同一句话。

<span id="qt02-event-example"></span>

## 一个足以分清边界的例子

约定期限为**教学模型中的一次期末结算 $T$**，不是某个已核挂牌到期日。三个基本结果分别标记为结算值 5,900、6,000、6,100 点，权重为 0.2、0.5、0.3。数值和权重都由教学模型给定，不是观测频率或市场隐含概率。

| 结果 | 结算情景标签（点） | $p_i$ | $A$：不超过 6,000 | $B$：不低于 6,000 |
|---|---:|---:|---|---|
| $\omega_1$ | 5,900 | 0.2 | 是 | 否 |
| $\omega_2$ | 6,000 | 0.5 | 是 | 是 |
| $\omega_3$ | 6,100 | 0.3 | 否 | 是 |

于是 $\mathbb P(A)=0.7$、$\mathbb P(B)=0.8$，但并集概率不是 1.5。两者覆盖全部模型结果，却在 $\omega_2$ 处重叠。**穷尽不等于互斥。** 三个基本结果在本模型内穷尽，也不等于它们已覆盖现实市场的所有结算可能性。

**命题（二事件容斥）。** 对事件 $A,B$，有 $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$。

**证明。** 把并集分成两两不交的 $A\setminus B$、$A\cap B$、$B\setminus A$，用可加性求和。分别展开 $\mathbb P(A)$ 与 $\mathbb P(B)$，会把中间一块数两遍，减去一次便得到结论。这个证明不要求 $A,B$ 独立。

本例结果为 $0.7+0.8-0.5=1$；补事件 $A^c=\{\omega_3\}$ 的概率为 0.3。事件属于哪些结果，与采用什么权重，是两层输入；改权重不必改变事件集合。

<span id="qt02-self-check"></span>

<div data-experiment-slot="lab-qt02"></div>

## 检查与使用位置

**解释题。** 刚才 $A$、$B$ 的概率和超过 1，是否说明模型权重不合法？

**解析。** 不是。基本结果权重仍非负且和为 1；超过 1 来自重复计入交集。应检查集合重叠，而不是强行把 $0.7,0.8$ 归一化。

**迁移题。** 把 $B$ 改为“严格大于 6,000”。哪些概率改变？

**解析。** $B=\{\omega_3\}$，概率降为 0.3；它与 $A$ 不交，交集概率变成 0；并集仍为全部模型结果，概率仍为 1。变化来自把边界情景 $\omega_2$ 移出 $B$，不是重新估计了市场概率。

[交互页](/notebook/labs/qt-a/interactions.html#qt02) 可以点选结果组成 $A,B$ 并修改三项权重。权重非法时应停算，不能自动归一化掩盖问题。没有脚本时，上表与两道题的结果就是静态替代。

本页用于 QT03 的映射、QT05 的条件概率，以及 QT07 的信息分组。不要求先读 QT01；只有需要处理真实历史数据时，才按任务调用数据版本方法。概率权重的数学自洽并不证明其经验合理性，市场报价也不在这里自动变成现实发生率。

[^mit]: MIT 6.436J/15.085J，Fall 2018，[Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf)。指定范围：§3 Definition 1（p.3），§4 Definition 2（pp.4–5），§5 Definition 3（pp.7–8）、Proposition 2 及两事件公式（pp.9–10，上半页至 Finite Additivity 之前）。本页不需要后续单调类定理。

