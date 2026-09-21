{
  "title": "Brownian 运动与二次变差",
  "description": "证明确定性网格 QV 的 L2 收敛和 dyadic 几乎处处收敛，再排除有限总变差.",
  "layout": "entry",
  "notebookid": "zh-qt15",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt15"
}

<a id="qt15-object"></a>
## Brownian运动与滤过

令 $(\Omega,\mathcal F,(\mathcal F_t),P)$ 为滤过概率空间. 相对于该滤过的标准Brownian运动 $W$ 适应、路径连续、$W_0=0$，且对 $s<t$，$W_t-W_s$ 独立于 $\mathcal F_s$，服从 $N(0,t-s)$.[^bm]

若将 $W_T$ 加入 $\mathcal F_0$，未来增量不再独立于初始信息，即使路径和无条件分布保持不变.

<a id="qt15-moments"></a>
## 高斯矩与平方增量

设 $Z\sim N(0,1)$，密度为 $\varphi$，有 $\varphi'(z)=-z\varphi(z)$. 分部积分的边界项由高斯尾部消失，得到

$$
\begin{gathered}
\mathbb{E}[Z^2]=-\int z\varphi'(z)\,dz=1,\\
\mathbb{E}[Z^4]=-\int z^3\varphi'(z)\,dz=3.
\end{gathered}
$$

所以若 $\Delta W\sim N(0,\Delta t)$，

$$
\mathbb{E}[(\Delta W)^2]=\Delta t,
\qquad
\operatorname{Var}((\Delta W)^2)=2(\Delta t)^2.
$$

现在固定 $T>0$ 和一个确定性分割 $\pi:0=t_0<\cdots<t_n=T$，记

$$
Q_\pi=\sum_{j=0}^{n-1}(W_{t_{j+1}}-W_{t_j})^2,
\qquad |\pi|=\max_j(t_{j+1}-t_j).
$$

不交区间增量独立，所以平方也独立，故

$$
\mathbb{E}[Q_\pi]=T,
\qquad
\mathbb{E}[(Q_\pi-T)^2]
=2\sum_j(\Delta t_j)^2
\le2T|\pi|.
$$

因此任意满足 $|\pi|\to0$ 的确定性分割序列均有 $Q_\pi\to T$ 于 $L^2$，从而依概率收敛.[^ito-qv]

<a id="qt15-as"></a>
## Dyadic路径收敛

若采用 dyadic 网格，$\Delta t=T/2^m$，则对任意 $\varepsilon>0$，Chebyshev 给

$$
P(|Q_m-T|>\varepsilon)
\le\frac{2T^2}{\varepsilon^2 2^m}.
$$

该上界对 $m$ 可求和，Borel–Cantelli第一引理给出固定 $\varepsilon$ 的偏差事件仅发生有限次. 对 $\varepsilon=1,1/2,\ldots$ 取共同满测度事件，得 $Q_m\to T$ a.s.

上述a.s.收敛针对固定dyadic分割序列；一般确定性分割序列的结论为 $L^2$ 收敛.

<a id="qt15-variation"></a>
## 无限总变差

对连续函数 $w$，总变差是

$$
\operatorname{TV}_{[0,T]}(w)
=\sup_\pi\sum_j|w(t_{j+1})-w(t_j)|.
$$

若它有限，则每个分割都有

$$
\sum_j(\Delta w_j)^2
\le\max_j|\Delta w_j|\,
\operatorname{TV}_{[0,T]}(w).
$$

连续函数在紧区间上一致连续，故网格趋细时右边趋于零. 然而 Brownian 路径在刚才的共同满测度集合上，dyadic 平方和趋于 $T>0$，矛盾. 因此在任意预先固定的非退化区间上，Brownian 路径几乎必然不是有限总变差路径.

因此 Brownian 运动不能作为普通有限总变差积分的积分器.

<a id="qt15-experiment"></a>
## 嵌套网格实验

实验固定PCG64(15161724)，生成 $8192\times256$ 个标准正态数. 最细增量为 $Z_j/\sqrt{256}$，4、16、64步网格由相邻细增量相加. 时间单位为年，Brownian平方量纲对应时间.

| 网格区间数 | 同一首路径 QV | 8,192 条路径 QV 均值 | 理论方差 $2/n$ |
| --- | --- | --- | --- |
| 4 | 0.794 | 0.991 | 0.5 |
| 16 | 1.079 | 0.997 | 0.125 |
| 64 | 1.021 | 0.998 | 0.031 |
| 256 | 0.966 | 1.001 | 0.008 |

<div data-experiment-slot="EXP-QT15-17-DIFFUSION-01"></div>

首路径QV在16步时高于1，256步时低于1，细化后的误差并不单调. 多路径均值与理论目标1接近.

真实日线的 $\sum(\Delta\log P)^2$ 取决于频率、复权与缺失处理；该统计量本身不足以识别连续时间模型.

<a id="qt15-exercise"></a>
## 练习与解析

**题目.** 对常数 $a,b$，令 $X_t=at+bW_t$. 沿同一组 dyadic 分割，证明平方增量和趋于 $b^2T$，并指出为什么只观察平方和不能恢复漂移 $a$. 再解释：改看 $W_{2t}$，其 $[0,1]$ 平方和目标为什么不是 1.

**解析.** 展开平方：

$$
\sum(\Delta X)^2
=a^2\sum(\Delta t)^2
+2ab\sum\Delta t\,\Delta W
+b^2Q_\pi.
$$

第一项不超过 $a^2T|\pi|$. 混合项的绝对值不超过

$$
2|ab|\left(\sum(\Delta t)^2\right)^{1/2}
Q_\pi^{1/2},
$$

在 dyadic 的满测度收敛集合上趋于零，第三项趋于 $b^2T$. 故漂移不进入该极限，并不能由这个量识别 $a$. 对 $W_{2t}$，每个时长 $\Delta t$ 的增量方差为 $2\Delta t$，相当于系数 $b=\sqrt2$ 的 Brownian 运动，因此目标为 2.

[^bm]: Steven P. Lalley，[Brownian Motion](https://galton.uchicago.edu/~lalley/Courses/385/BrownianMotion.pdf)，未标修订日期，§1.1，物理 pp.1–3 的定义与存在性陈述.
[^ito-qv]: Steven P. Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§3.3，pp.10–12.
