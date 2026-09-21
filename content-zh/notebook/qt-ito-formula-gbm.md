{
  "title": "Itô 公式与几何 Brownian 模型",
  "description": "按准确 C1,2 条件验证 GBM，证明线性专例唯一性，区分均值与对数漂移。",
  "layout": "entry",
  "notebookid": "zh-qt17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt17"
}

<a id="qt17-motivation"></a>
## 二阶项不是对普通链式法则的小修饰

普通链式法则把一阶增量累加，较高阶项消失；Brownian 增量的平方和却留下非零极限。这就是 Itô 修正项的来源。本篇先给条件完整的一维公式，再把几何 Brownian 运动的显式解、均值、对数漂移和唯一性走通。完整公式证明另在 <a class="inline-ref" href="/zh/notebook/qt-ito-formula-proof/" data-reference="zh-qt17p1">一维 Itô 公式的证明<span aria-hidden="true"> ↗</span></a>，不隐藏在“二阶项自然留下”这句话里。

先修是连续积分的含义、二次变差，以及对确定函数求偏导。数值实验中的概率 $P$ 是人为指定的生成模型，不是从真实收益拟合出来的规律。

<a id="qt17-theorem"></a>
## 采用的公式及全部条件

固定 $T<\infty$，通常条件（过滤右连续，且 $\mathcal F_0$ 包含 $\mathcal F$ 中所有 $P$ 零集及其子集）的过滤概率空间，$W$ 相对于该过滤为 Brownian。令 $X_0$ 是有限的 $\mathcal F_0$ 可测随机变量；$a,b$ 渐进可测，满足

$$
\int_0^T|a_s|ds+\int_0^Tb_s^2ds<\infty\quad\text{几乎必然}.
$$

定义连续 Itô 过程

$$
X_t=X_0+\int_0^ta_sds+\int_0^tb_sdW_s.
$$

随机积分必要时按局部平方可积版本解释。若 $f\in C^{1,2}([0,T]\times\mathbb R)$，即 $f,f_t,f_x,f_{xx}$ 联合连续，时间端点取单侧导数，则在一个共同满测度集合上，对所有 $t\le T$，

$$
\begin{aligned}
f(t,X_t)-f(0,X_0)
={}&\int_0^t f_t(s,X_s)ds\\
&+\int_0^t a_sf_x(s,X_s)ds\\
&+\frac12\int_0^t b_s^2f_{xx}(s,X_s)ds\\
&+\int_0^t b_sf_x(s,X_s)dW_s.
\end{aligned}
$$

不要求 $f_{tt}$ 或 $f_{tx}$ 存在，也不要求 $E|X_0|^2<\infty$。连续路径在有限时间内有界；在其经过的紧区域上，所需导数有界。因此普通积分和局部随机积分合法。这个结论本身不会让最后一项自动成为全局零均值的真鞅。[^ito]

对 $f(x)=x^2$，公式给 $d(X_t^2)=2X_t\,dX_t+b_t^2dt$。当 $X=W$，就回到 $\int WdW=(W_t^2-t)/2$。这既检验系数 $1/2$，也说明简写 $(dW)^2=dt$ 只能是已证公式的记忆方式。

<a id="qt17-gbm"></a>
## 从显式函数验证 GBM

取常数 $\mu,\sigma$ 和确定 $S_0>0$，令

$$
S_t=S_0\exp\{(\mu-\sigma^2/2)t+\sigma W_t\}.
$$

设 $g(t,x)=S_0e^{(\mu-\sigma^2/2)t+\sigma x}$。则

$$
g_t=(\mu-\sigma^2/2)g,
\quad g_x=\sigma g,
\quad g_{xx}=\sigma^2g.
$$

对 Brownian 特例应用公式，两项 $\sigma^2/2$ 抵消，得到

$$
dS_t=\mu S_tdt+\sigma S_tdW_t.
$$

显式函数连续、正值，有限区间上路径有界，故相关局部积分确实存在。反过来，对任一正解应用 $\log$，在远离零和无穷的停止区间上有

$$
d\log S_t=(\mu-\sigma^2/2)dt+\sigma dW_t.
$$

这里 $\log$ 只在正半轴定义，不能对一个可能穿零的过程不加停止直接应用。

<a id="qt17-unique"></a>
## 还要说明：这是同一驱动下的唯一解

若 $S,\widehat S$ 是同一个 $W$、同一起点的两个连续解，令 $D=S-\widehat S$，并停在

$$
\tau_m=\inf\{t:S_t^2+\widehat S_t^2\ge m\}\wedge T.
$$

停止后各二阶矩有限，停止规则与差方程给

$$
D_{t\wedge\tau_m}
=\mu\int_0^t\mathbf1_{\{s\le\tau_m\}}D_sds
+\sigma\int_0^t\mathbf1_{\{s\le\tau_m\}}D_sdW_s.
$$

利用 $(x+y)^2\le2x^2+2y^2$、Cauchy–Schwarz 与 Itô 等距，若 $y(t)=E|D_{t\wedge\tau_m}|^2$，则

$$
y(t)\le2(\mu^2T+\sigma^2)\int_0^t y(s)ds.
$$

令 $F(t)=\int_0^t y(s)ds$。它绝对连续、$F(0)=0$，且 $F'\le CF$，所以 $(e^{-Ct}F(t))'\le0$；非负性迫使 $F=y=0$。这就是本例需要的 Gronwall 步骤。随 $m$ 增大，连续路径在有限区间有界，停时最终等于 $T$。先对有理时点、再用连续性，就得两个解不可分辨。[^sde]

如果不先停止，直接写有限的二阶矩不等式，就可能把待证的可积性偷放进证明。显式解的验证与唯一性是不同责任。

<a id="qt17-moments"></a>
## $\mu$、对数漂移和均值增长不是一个量

高斯矩母函数给

$$
E[S_T]=S_0e^{\mu T},
\qquad
E\log(S_T/S_0)=(\mu-\sigma^2/2)T.
$$

冻结教学模型是 $S_0=100$、$\mu_P=.08$、$\sigma=.20$、$T=1$。理论一年均值为 108.32870677，对数漂移为 .06；预期简单收益则为 $e^{.08}-1$，不是恰好 .08。波动率越高，保持相同 $\mu$ 时典型的对数增长越低，但价格均值增长率仍由 $\mu$ 决定。

| 网格区间数 | Euler 与精确终点的 RMSE | 样本中非正 Euler 终点数 |
| --- | --- | --- |
| 4 | 1.621890529 | 0 |
| 16 | 0.787997031 | 0 |
| 64 | 0.390661657 | 0 |
| 256 | 0.196192820 | 0 |

<div data-experiment-slot="VIEW-QT17-GBM"></div>

Euler 离散式是 $S_{j+1}^{E}=S_j^E(1+\mu\Delta t+\sigma\Delta W_j)$。表中它与显式解使用同一组增量，比较的是同路径终点误差，不是两套独立模拟的差。Euler 理论上可能产生非正值；这次有限样本未出现，也不能将其当作正值保证。四个步长上的下降趋势不是一份收敛阶证明。

定价实验后来会在一个另述的 $Q$ 模型中用 $r$ 作为漂移。共用随机数只是数值耦合，不是证明 $P$ 与 $Q$ 的换测度关系，更不能把这里的 .08 随手替换成真实投资的必要回报率。

<a id="qt17-exercise"></a>
## 迁移题：谁增长得更快？

**题目。** 在上述一年模型下，比较均值、中位数和预期对数收益。有人忽略二阶修正，写成 $\widetilde S_T=100e^{.08+.20W_T}$，求它实际对应的价格漂移，并解释为什么它不再是原模型。

**解析。** 中位数为 $100e^{.06}\approx106.1837$，均值为 $100e^{.08}\approx108.3287$，预期对数收益为 .06。均值被较大的右尾拉高，不能用均值代表“半数路径以上”。

对错误式用 Itô 公式，它的价格漂移是 $.08+.5(.20)^2=.10$，均值变为 $100e^{.10}\approx110.5171$。少掉 $-\sigma^2/2$ 不是一个记号偏好，而是换了模型。纠正方式应回到导数与二阶项，而不是事后把模拟均值强行校到 108.33。

[^ito]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§4.1–4.2、§4.5。一般 $L^1/L^2$ 系数的完整传递在本包 QT17-P1 给出，不以原文的简略逼近说明代替。
[^sde]: Lalley，[Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf)，2016-12-02，§2.2 的 Gronwall 与 §2.5 的停止唯一性，pp.3、6–7。本文只证明 GBM 的线性专例，不要求先掌握一般 Picard 理论。

