{
  "title": "积分与可积性",
  "description": "核对非负与有符号期望、可积性及极限交换条件，用封顶重尾和尖峰反例划清边界.",
  "layout": "entry",
  "notebookid": "zh-qt10",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt10"
}

期望可以是有限实数，也可以是扩展实数中的 $\pm\infty$；若正负部分都为无穷，则有符号期望未定义. 极限与期望能否交换取决于相应收敛定理的条件. 可测性记号见 <a class="inline-ref" href="/zh/notebook/measurable-information/" data-reference="zh-qt09">可测空间与概率测度<span aria-hidden="true"> ↗</span></a>.

<a id="qt10-integral"></a>
## 非负积分

固定测度空间 $(\Omega,\mathcal F,\mu)$. 令 $s=\sum_{i=1}^m a_i1_{A_i}$ 为非负简单函数，其中 $a_i\ge0$、$A_i\in\mathcal F$，则定义

$$
\int s\,d\mu=\sum_i a_i\mu(A_i),
$$

并约定 $0\cdot\infty=0$. 表示中的集合可以重叠；把两种表示的集合共同细分为不交小块，两种写法在每块的总函数值相同，故积分相同. 积分不依赖这项表示选择. [^integral]

对非负可测函数 $f$，定义

$$
\int f\,d\mu
=\sup\left\{\int s\,d\mu:\ 0\le s\le f,\ s\text{ 为简单函数}\right\}.
$$

结果允许为 $+\infty$. 逐步提高截断值、细化二进网格可构造简单函数 $s_n\uparrow f$；由单调收敛定理，其积分趋于该上确界.

概率空间中取 $\mu=P$，积分即为期望，有限状态加权平均是其特例.

<a id="qt10-signed"></a>
## 有符号期望与可积性

令 $X$ 为实值可测随机变量，记 $X^+=\max(X,0)$、$X^-=\max(-X,0)$. 先分别定义两个非负期望，再讨论相减：

| $\mathbb{E}[X^+]$ | $\mathbb{E}[X^-]$ | $\mathbb{E}[X]$ 的状态 |
|---|---|---|
| 有限 | 有限 | 有限实数；称 $X\in L^1$ |
| $+\infty$ | 有限 | 扩展期望为 $+\infty$，但不在 $L^1$ |
| 有限 | $+\infty$ | 扩展期望为 $-\infty$，但不在 $L^1$ |
| $+\infty$ | $+\infty$ | 未定义；不能作 $\infty-\infty$ |

**可积**指 $\mathbb{E}|X|<\infty$，等价于正、负部分期望均有限.[^signed]

例如令 $Z\ge1$ 满足 $P(Z>x)=x^{-0.8}$（$x\ge1$），再独立选择等概率正负号 $\varepsilon$. 虽然 $\varepsilon Z$ 的分布对称，但其正负部分期望都无穷，不能凭对称性写 $\mathbb{E}[\varepsilon Z]=0$.

一般条件期望 [[QT11|$\mathbb{E}[X\mid\mathcal G]$ 的定义与投影]] 在主篇中使用 $X\in L^1$；谈有限均方误差时还需更强的 $\mathbb{E}[X^2]<\infty$.

<a id="qt10-limits"></a>
## 极限交换

**单调收敛定理.** 在任意测度空间上，若可测函数满足 $0\le f_n\uparrow f$，则 $\int f_n\,d\mu\uparrow\int f\,d\mu$，允许极限为无穷. a.e. 版本可先在共同可测零测集上修正. 非负性和单调性都是这里的条件. [^mct]

**控制收敛定理（DCT）.** 若 $f,f_1,f_2,\ldots$ 为实值可测函数，$f_n\to f$ a.e.，存在非负可积函数 $g$ 使所有 $n$ 均满足 $|f_n|\le g$ a.e.，则 $f$ 与各 $f_n$ 可积，且

$$
\int |f_n-f|\,d\mu\longrightarrow0,\qquad
\int f_n\,d\mu\longrightarrow\int f\,d\mu.
$$

**证明.** 由 a.e. 收敛得 $|f|\le g$ a.e. 对非负函数 $2g-|f_n-f|$ 用Fatou引理，得

$$
2\int g\,d\mu\le 2\int g\,d\mu-\limsup_n\int|f_n-f|\,d\mu.
$$

于是 $\int|f_n-f|\,d\mu\to0$，再由 $|\int f_n\,d\mu-\int f\,d\mu|\le\int|f_n-f|\,d\mu$ 得期望收敛.[^dct]

最容易误用的反例是在 $(0,1)$ 的 Lebesgue 概率空间上取

$$
f_n(x)=n\,1_{(0,1/n)}(x).
$$

每个固定 $x>0$ 最终都会在支撑外，因此 $f_n(x)\to0$；但每项积分都是 $n(1/n)=1$. 这里不能交换极限与积分.

| $n$ | 高度 | 支撑长度 | 积分 | $f_n(0.02)$ |
|---:|---:|---:|---:|---:|
| $2$ | $2$ | $1/2$ | $1$ | $2$ |
| $10$ | $10$ | $1/10$ | $1$ | $10$ |
| $100$ | $100$ | $1/100$ | $1$ | $0$ |

该序列不递增，故不满足MCT条件；若有统一可积支配，DCT将推出积分趋于0，与积分恒为1矛盾.

<a id="qt10-tail"></a>
## 重尾封顶平均

取无量纲的 Pareto 教学模型：$Z\ge1$，$P(Z>x)=x^{-\alpha}$，$x\ge1$、$\alpha>0$. 直接积分密度 $\alpha x^{-\alpha-1}$ 得到

$$
\mathbb{E}[Z^q]=\alpha\int_1^\infty x^{q-\alpha-1}\,dx
=\frac{\alpha}{\alpha-q}\quad(0<q<\alpha);
$$

$q\ge\alpha$ 时该积分发散.

| $\alpha$ | $\mathbb{E}[Z]$ | $\mathbb{E}[Z^2]$ |
|---:|---:|---:|
| $0.8$ | $+\infty$ | $+\infty$ |
| $1.5$ | $3$ | $+\infty$ |
| $3$ | $3/2$ | $3$ |

若显示的是封顶变量 $\min(Z,b)$，其中 $b\ge1$，则计算结果为

$$
\mathbb{E}[\min(Z,b)]
=1+\int_1^b x^{-\alpha}\,dx
=\begin{cases}
1+\dfrac{b^{1-\alpha}-1}{1-\alpha},&\alpha\ne1,\\[2mm]
1+\log b,&\alpha=1.
\end{cases}
$$

积分式也可直接从封顶分布的密度部分与 $b$ 处的点质量相加得到.

默认 $\alpha=1.5,b=100$ 时，封顶平均为 $2.8$，低于完整均值 $3$. 它不等于“超出 $b$ 的值全部删为零”后的平均：后者是

$$
\mathbb{E}[Z1_{\{Z\le b\}}]=\mathbb{E}[\min(Z,b)]-bP(Z>b)=2.8-0.1=2.7.
$$

<div data-experiment-slot="EXP-QTB-INTEGRAL-01"></div>

$\alpha=1.5$、$b=10,100,1000$ 时，封顶平均依次约为2.368、2.8、2.937. $\alpha=0.8$ 时，有限封顶平均随 $b\to\infty$ 增至 $+\infty$.

另取 $U\sim\mathrm{Unif}[0,1)$，令 $s_n=2^{-n}\lfloor2^nU\rfloor\uparrow U$，其平均为 $(1-2^{-n})/2$. $n=1,2,4,8$ 时平均值约为 $0.250,0.375,0.469,0.498$. 这是从下方逼近一个固定可积函数，和不断挤向零点的尖峰序列不同.

<a id="qt10-tests"></a>
## 练习与解析

**题 1.** $\alpha=1.5$ 时，$Z$ 可积吗？$Z-3$ 的平方可积吗？有限样本中没有观察到极端值，能否改变答案？

**解析.** $\mathbb{E}[Z]=3<\infty$，所以 $Z\in L^1$. 但 $\mathbb{E}[(Z-3)^2]=\infty$：在 $Z>6$ 时，$(Z-3)^2\ge Z^2/4$，而这部分二阶矩发散. 矩是否存在是给定模型的性质，有限样本没有出现极端值不能证明总体二阶矩有限.

**题 2.** 有人说“$f_n(x)\to0$ 且每个 $\int|f_n|=1$，所以可由 DCT 推出 $\int f_n\to0$”. 错误在哪一步？

**解析.** 尖峰序列的 $L^1$ 范数恒为1，但不存在统一可积支配；一致有界的积分值不足以满足DCT.

**题 3.** 某函数的正部期望无穷、负部期望为 $2$. 可以说它“没有任何期望”吗？能否使用本篇所指的 $L^1$ 条件期望定理？

**解析.** 扩展期望为 $+\infty$，该变量不属于 $L^1$，不满足定理的可积性条件.

[^integral]: Amir Dembo, *Probability Theory: STAT310/MATH230*，2021-04-15 版，Definition 1.3.1 Step 1–3（p.31）定义指示函数、简单函数与非负积分；Lemma 1.3.3（p.32）说明简单函数积分与表示无关并给出线性、单调性. [作者公开讲义](https://adembo.su.domains/stat-310b/lnotes.pdf).
[^signed]: 同版，Definition 1.3.1 Step 4（p.31）用正负部分定义有符号积分，并规定至少一侧有限时才能作差；Definition 1.3.2（p.32）把 $\mathbb{E}|X|<\infty$ 定义为可积/有限期望.
[^mct]: 同版，Theorem 1.3.4，p.33；完整证明 p.41.
[^dct]: 同版，Fatou Lemma 1.3.33 与 Dominated Convergence Theorem 1.3.34，pp.42–43，包含完整证明.
