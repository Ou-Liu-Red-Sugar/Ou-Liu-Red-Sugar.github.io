{
  "title": "Itô 公式与几何 Brownian 模型",
  "description": "用Itô公式验证GBM，证明线性SDE的路径唯一性，区分价格均值与对数漂移.",
  "layout": "entry",
  "notebookid": "zh-qt17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt17"
}

<a id="qt17-motivation"></a>
## 二次变差修正

Brownian 增量的平方和留下非零极限，因此二阶 Taylor 项在连续时间极限中保留；完整证明见 <a class="inline-ref" href="/zh/notebook/qt-ito-formula-proof/" data-reference="zh-qt17p1">一维 Itô 公式的证明<span aria-hidden="true"> ↗</span></a>.

<a id="qt17-theorem"></a>
## 一维Itô公式

固定 $T<\infty$，通常条件（滤过右连续，且 $\mathcal F_0$ 包含 $\mathcal F$ 中所有 $P$ 零集及其子集）的滤过概率空间，$W$ 相对于该滤过为 Brownian. 令 $X_0$ 是有限的 $\mathcal F_0$ 可测随机变量；$a,b$ 渐进可测，满足

$$
\int_0^T|a_s|ds+\int_0^Tb_s^2ds<\infty\quad\text{几乎必然}.
$$

定义连续 Itô 过程

$$
X_t=X_0+\int_0^ta_sds+\int_0^tb_sdW_s.
$$

随机积分必要时按局部平方可积版本解释. 若 $f\in C^{1,2}([0,T]\times\mathbb R)$，即 $f,f_t,f_x,f_{xx}$ 联合连续，时间端点取单侧导数，则在一个共同满测度集合上，对所有 $t\le T$，

$$
\begin{aligned}
f(t,X_t)-f(0,X_0)
={}&\int_0^t f_t(s,X_s)ds\\
&+\int_0^t a_sf_x(s,X_s)ds\\
&+\frac12\int_0^t b_s^2f_{xx}(s,X_s)ds\\
&+\int_0^t b_sf_x(s,X_s)dW_s.
\end{aligned}
$$

连续路径在有限区间内有界，所需导数沿路径也有界，因而普通积分与局部随机积分存在. 最后一项为局部鞅，取期望消去它需额外全局可积性.[^ito]

对 $f(x)=x^2$，公式给 $d(X_t^2)=2X_t\,dX_t+b_t^2dt$. 当 $X=W$，就回到 $\int WdW=(W_t^2-t)/2$. 记号 $(dW)^2=dt$ 概括的是二次变差项在这一极限中的作用.

<a id="qt17-gbm"></a>
## GBM显式解

取常数 $\mu,\sigma$ 和确定 $S_0>0$，令

$$
S_t=S_0\exp\{(\mu-\sigma^2/2)t+\sigma W_t\}.
$$

设 $g(t,x)=S_0e^{(\mu-\sigma^2/2)t+\sigma x}$. 则

$$
g_t=(\mu-\sigma^2/2)g,
\quad g_x=\sigma g,
\quad g_{xx}=\sigma^2g.
$$

对 Brownian 特例应用公式，两项 $\sigma^2/2$ 抵消，得到

$$
dS_t=\mu S_tdt+\sigma S_tdW_t.
$$

显式函数连续、正值，有限区间上路径有界，故相关局部积分确实存在. 反过来，对任一正解应用 $\log$，在远离零和无穷的停止区间上有

$$
d\log S_t=(\mu-\sigma^2/2)dt+\sigma dW_t.
$$

<a id="qt17-unique"></a>
## 路径唯一性

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

利用 $(x+y)^2\le2x^2+2y^2$、Cauchy–Schwarz 与 Itô 等距，若 $y(t)=\mathbb{E}|D_{t\wedge\tau_m}|^2$，则

$$
y(t)\le2(\mu^2T+\sigma^2)\int_0^t y(s)ds.
$$

令 $F(t)=\int_0^t y(s)ds$. 它绝对连续、$F(0)=0$，且 $F'\le CF$，所以 $(e^{-Ct}F(t))'\le0$；非负性迫使 $F=y=0$. 这就是本例需要的 Gronwall 步骤. 随 $m$ 增大，连续路径在有限区间有界，停时最终等于 $T$. 先对有理时点、再用连续性，就得两个解不可分辨. [^sde]

<a id="qt17-moments"></a>
## 漂移与均值

高斯矩母函数给

$$
\mathbb{E}[S_T]=S_0e^{\mu T},
\qquad
\mathbb{E}\log(S_T/S_0)=(\mu-\sigma^2/2)T.
$$

取 $S_0=100$、$\mu_P=0.08$、$\sigma=0.2$、$T=1$. 一年均值约108.329，对数漂移0.06，预期简单收益 $e^{0.08}-1\approx8.329\%$. 固定 $\mu$、提高 $\sigma$ 时，价格均值不变，预期对数增长下降.

| 网格区间数 | Euler 与精确终点的 RMSE | 样本中非正 Euler 终点数 |
| --- | --- | --- |
| 4 | 1.622 | 0 |
| 16 | 0.788 | 0 |
| 64 | 0.391 | 0 |
| 256 | 0.196 | 0 |

<div data-experiment-slot="VIEW-QT17-GBM"></div>

Euler式为 $S_{j+1}^{E}=S_j^E(1+\mu\Delta t+\sigma\Delta W_j)$，与显式解使用相同增量. 表中RMSE比较同路径终点；非正终点数为0. 由于高斯增量无下界，Euler乘数仍有取非正值的概率.

<a id="qt17-exercise"></a>
## 练习与解析

**题目.** 在上述一年模型下，比较均值、中位数和预期对数收益. 有人忽略二阶修正，写成 $\widetilde S_T=100e^{.08+.20W_T}$，求它实际对应的价格漂移，并解释为什么它不再是原模型.

**解析.** 中位数 $100e^{0.06}\approx106.184$，均值 $100e^{0.08}\approx108.329$，预期对数收益0.06. 右尾使均值高于中位数.

对 $\widetilde S$ 应用Itô公式，价格漂移为 $0.08+0.5(0.2)^2=0.1$，均值 $100e^{0.1}\approx110.517$. 省去二阶修正改变了SDE的漂移系数.

[^ito]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§4.1–4.2、§4.5. 一般 $L^1/L^2$ 系数的传递见本包 QT17-P1.
[^sde]: Lalley，[Stochastic Differential Equations](https://galton.uchicago.edu/~lalley/Courses/385/SDE.pdf)，2016-12-02，§2.2 的 Gronwall 与 §2.5 的停止唯一性，pp.3、6–7.
