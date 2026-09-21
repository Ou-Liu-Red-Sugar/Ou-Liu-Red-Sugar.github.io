{
  "title": "情景、事件与概率",
  "description": "固定观察期限、基本结果与模型权重，再由结果集合定义事件及其交并概率.",
  "layout": "entry",
  "notebookid": "zh-qt02",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt02"
}

<span id="qt02-definitions"></span>

## 定义与约定

概率模型先固定观察期限、基本结果与权重，再由结果集合定义事件；不同期限不能共用一张未注明期限的情景表.

**定义.** 令 $\Omega$ 为非空集合，$\mathcal F$ 为其上的 $\sigma$-代数，即包含空集、对补集和可数并封闭的一族子集，则 $\Omega$ 称为样本空间，$\omega\in\Omega$ 是一个基本结果，$A\in\mathcal F$ 称为事件. 给定概率测度 $\mathbb P\colon\mathcal F\to[0,1]$，要求 $\mathbb P(\Omega)=1$，且对两两不交的可数事件族满足可列可加性. [^mit]

有限模型可取 $\mathcal F=2^\Omega$. 给定 $p_i\ge0$、$\sum_i p_i=1$，有 $\mathbb P(A)=\sum_{\omega_i\in A}p_i$. 零概率结果可保留在样本空间中.

<span id="qt02-event-example"></span>

## 有限情景与事件边界

约定期限为一次期末结算 $T$. 三个基本结果的结算值分别为 5,900、6,000、6,100 点，模型权重为 0.2、0.5、0.3；这些权重是本例输入.

| 结果 | 结算情景标签（点） | $p_i$ | $A$：不超过 6,000 | $B$：不低于 6,000 |
|---|---:|---:|---|---|
| $\omega_1$ | 5,900 | 0.2 | 是 | 否 |
| $\omega_2$ | 6,000 | 0.5 | 是 | 是 |
| $\omega_3$ | 6,100 | 0.3 | 否 | 是 |

$P(A)=0.7$、$P(B)=0.8$，交集为 $\{\omega_2\}$、概率0.5，并集覆盖全空间. 这对事件穷尽且重叠.

**命题（二事件容斥）.** 对事件 $A,B$，有 $\mathbb P(A\cup B)=\mathbb P(A)+\mathbb P(B)-\mathbb P(A\cap B)$.

**证明.** 将并集分为两两不交的 $A\setminus B$、$A\cap B$、$B\setminus A$，按可加性求和. $P(A)+P(B)$ 把交集计两遍，减一次即得结论.

本例结果为 $0.7+0.8-0.5=1$；补事件 $A^c=\{\omega_3\}$ 的概率为 0.3. 事件属于哪些结果，与采用什么权重，是两层输入；改权重不必改变事件集合.

<span id="qt02-self-check"></span>

<div data-experiment-slot="lab-qt02"></div>

## 边界变更

**解释题.** 刚才 $A$、$B$ 的概率和超过 1，是否说明模型权重不合法？

**解析.** 基本结果权重合法，0.7与0.8重复计入交集，应按容斥计算.

**迁移题.** 把 $B$ 改为“严格大于 6,000”. 哪些概率改变？

**解析.** $B=\{\omega_3\}$ 的概率为0.3，与A交集为空，并集仍为全空间. 概率改变来自移出边界状态.

[事件实验](/notebook/labs/qt-a/interactions.html#qt02)分别改变集合成员和概率权重，展示交集、并集与补集. 权重要求非负且和为1.

[^mit]: MIT 6.436J/15.085J，Fall 2018，[Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf). 指定范围：§3 Definition 1（p.3），§4 Definition 2（pp.4–5），§5 Definition 3（pp.7–8）、Proposition 2 及两事件公式（pp.9–10，上半页至 Finite Additivity 之前）.
