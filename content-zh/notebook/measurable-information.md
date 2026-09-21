{
  "title": "可测空间与概率测度",
  "description": "从有限分组列出事件域，检验函数可测性，并区分几乎处处相等与合法版本.",
  "layout": "entry",
  "notebookid": "zh-qt09",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt09"
}

可测空间指定可以区分的事件，概率测度为这些事件赋予权重. 同一事件域可配不同测度，同一概率模型也可选取较小事件域描述部分信息.

<a id="qt09-definitions"></a>
## 可测空间与测度

令 $\Omega$ 为集合，则 $\Omega$ 上的 **$\sigma$-代数**是指集合族 $\mathcal F\subseteq\mathcal P(\Omega)$，满足 $\Omega\in\mathcal F$、对补集封闭、对可数并封闭. 由 De Morgan 律，它也对可数交封闭. 二元组 $(\Omega,\mathcal F)$ 称为**可测空间**；$\mathcal F$ 中的集合称为可测集，在概率语境中称为事件. [^sigma]

令 $(\Omega,\mathcal F)$ 为可测空间，则其上的**概率测度**是函数 $P:\mathcal F\to[0,1]$，满足 $P(\Omega)=1$、$P(\varnothing)=0$，并对两两不交的事件 $A_n$ 满足

$$
P\!\left(\bigcup_{n\ge1}A_n\right)=\sum_{n\ge1}P(A_n).
$$

对一般测度可允许总质量不是 $1$，甚至为无穷. 是否可测由集合族决定；概率是多少由测度决定. [^measure]

实线的 Borel $\sigma$-代数 $\mathcal B(\mathbb R)$ 由开集生成. 实值函数 $Y$ **对 $\mathcal G$ 可测**，是指对每个 $B\in\mathcal B(\mathbb R)$，都有 $Y^{-1}(B)\in\mathcal G$. 检验时可只看半直线原像 $\{Y\le a\}$，因为这些半直线生成 Borel $\sigma$-代数，原像运算又保留补集与可数并. [^measurable]

<a id="qt09-partition"></a>
## 有限信息事件域

取 $\Omega=\{\omega_1,\omega_2,\omega_3,\omega_4\}$，只知道信号

$$
L=\{\omega_1,\omega_2\},\qquad H=\{\omega_3,\omega_4\}.
$$

则可以判断 $L$ 或 $H$ 是否发生，也能判断空集与全空间，但不能区分 $H$ 内的两个结果. 相应信息就是

$$
\mathcal G=\{\varnothing,L,H,\Omega\}.
$$

用更一般的记号说，它是包含 $L,H$ 的最小 $\sigma$-代数 $\sigma(L,H)$. [^information]

**有限分区命题.** 若非空集合 $A_1,\ldots,A_m$ 两两不交并覆盖 $\Omega$，则 $\sigma(A_1,\ldots,A_m)$ 恰是这些组的所有并集.

**证明.** 所有组的并集组成的集合族包含各 $A_i$，对补集、可数并均封闭，所以是一个 $\sigma$-代数；由最小性，生成的 $\sigma$-代数包含在它里面. 反过来，任何包含各 $A_i$ 的 $\sigma$-代数也包含它们的所有并集. 因此两者相等.

在有限分区下，每个原子是当前信息无法继续区分的最小非空事件；可辨认事件恰由这些原子的并组成.

**可测性判据.** 对上述有限分区，实值 $Y$ 可测，当且仅当它在每个原子上为常数.

**证明.** 若同组中两个函数值不同，选一个夹在它们之间的阈值 $a$，则 $\{Y\le a\}$ 会把这个原子拆开，不能是原子的并，故不可测. 反过来，若每组取常数，则任意 Borel 集的原像都是某些组的并，因而可测.

$Y=(0,1,2,2)$ 在 $L$ 组内取不同值，因而对 $L/H$ 信息不可测. 保持函数不变，把事件域扩大为 $\mathcal P(\Omega)$ 后，$Y$ 可测.

<div data-experiment-slot="EXP-QTB-MEASURABLE-01"></div>

| 信息分组 | 全部可辨认事件个数 | $Y=(0,1,2,2)$ 是否可测 |
|---|---:|---|
| $\{\Omega\}$ | $2$ | 否 |
| $\{L,H\}$ | $4$ | 否 |
| 四个单点 | $16$ | 是 |

<a class="inline-ref" href="/zh/notebook/conditional-expectation/" data-reference="zh-conditional-expectation">有限条件期望<span aria-hidden="true"> ↗</span></a>在每个信息组内取同一个条件平均，由此满足对该信息域的可测性.

<a id="qt09-null"></a>
## 零概率与版本

若 $N\in\mathcal F$ 且 $P(N)=0$，称 $N$ 为零概率事件. 性质在某个可测零概率事件以外都成立，就称**几乎处处成立**，在概率空间也称几乎必然成立，记作 a.s.. 零概率事件不必是空集；例如给四状态中的某个状态赋零权重，并没有把这个状态从集合里删除. [^measure]

零概率集上的修改可能破坏可测性. 设

$$
\Omega=\{a,b,c\},\quad
\mathcal G=\{\varnothing,\{a,b\},\{c\},\Omega\},\quad
P(\{a,b\})=0,\quad P(\{c\})=1.
$$

$f=(0,0,1)$ 对 $\mathcal G$ 可测；$g=(0,1,1)$ 只在零概率组内改变值，却将 $\{a,b\}$ 拆开，因而不可测.

若事件域包含每个可测零测集的所有子集，测度空间称为完备. 完备化加入这些子集，允许零测集上的任意修改. 较大事件域 $\mathcal F$ 完备不推出子事件域 $\mathcal G$ 完备；条件期望的各版本仍需满足 $\mathcal G$-可测性.[^completion]

<a id="qt09-tests"></a>
## 练习与解析

**题 1.** 在四状态 $L/H$ 信息下，$Y=(3,3,7,7)$ 是否可测？$\{Y>5\}$ 是哪个事件？若四状态概率改为 $(0.25,0.75,0,0)$，答案是否改变？

**解析.** 它在每组取常数，故可测；$\{Y>5\}=H$. 概率改动不改变这个结论，因为可测性只看函数和事件域. 但新的概率会改变期望以及“哪些差异可以忽略至 a.s.”.

**题 2.** $\mathcal G_1$ 由 $\{1,2\},\{3,4\}$ 生成，$\mathcal G_2$ 由 $\{1,3\},\{2,4\}$ 生成. 是否可以说 $\mathcal G_2$ 比 $\mathcal G_1$ 信息更多？

**解析.** 不能. $\{1,2\}$ 属于 $\mathcal G_1$ 而不属于 $\mathcal G_2$，$\{1,3\}$ 反过来；二者互不包含. 这也是使用 <a class="inline-ref" href="/zh/notebook/conditional-expectation-projection/" data-reference="zh-qt11">塔式性质<span aria-hidden="true"> ↗</span></a> 前必须检查嵌套条件的原因.

[^sigma]: MIT, *Lecture 1: Probabilistic Models and Probability Measures*，Fall 2018，§4、pp.4–6：$\sigma$-代数、生成和 Borel 例. [公开讲义](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf).
[^measure]: 同讲义 §5、pp.7–8：测度、概率测度和 a.s. 与处处的区别.
[^information]: 同讲义 §4.1、p.7：较小 $\sigma$-代数与部分观测.
[^measurable]: Amir Dembo, *Probability Theory: STAT310/MATH230*，2021-04-15 版，§1.2.1 的 Definition 1.2.1–1.2.2（p.18）给出可测映射/随机变量定义；Theorem 1.2.9 与 Definition 1.2.12（p.20）给出在生成族上检查原像以及实值随机变量的半直线判据. [作者公开讲义](https://adembo.su.domains/stat-310b/lnotes.pdf).
[^completion]: Dembo，同版，§4.1.1、pp.153–156 对版本和 $\mathcal G$-可测性的要求.
