{
  "title": "Itô 积分：按已知信息累计变化",
  "description": "从左端点持仓和式证明简单等距与鞅，并计算积分 W dW.",
  "layout": "entry",
  "notebookid": "zh-qt16",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt16"
}

<a id="qt16-question"></a>
## 简单可预测积分

Itô 积分先在简单可预测过程上定义：每个区间的系数在区间左端已经可知. 一般过程的密度、连续版本与停止规则见 <a class="inline-ref" href="/zh/notebook/qt-ito-integral-proof/" data-reference="zh-qt16p1">Itô 积分的完整构造<span aria-hidden="true"> ↗</span></a>.

固定有限 $T$，滤过满足通常条件：右连续，且 $\mathcal F_0$ 包含 $\mathcal F$ 中所有零测集及其子集. $W$ 相对于该滤过为Brownian运动.

<a id="qt16-simple"></a>
## 分段定义

令 $0=t_0<\cdots<t_n=T$ 为确定性分割. 一个简单可预测过程写作

$$
H_t=\sum_{j=0}^{n-1}\xi_j\mathbf1_{(t_j,t_{j+1}]}(t),
\qquad \xi_j\in L^2(\mathcal F_{t_j}).
$$

这里 $\xi_j$ 服务于 $(t_j,t_{j+1}]$，在 $t_j$ 已知. 定义

$$
I_t(H)=\sum_j\xi_j
\bigl(W_{t\wedge t_{j+1}}-W_{t\wedge t_j}\bigr).
$$

它对分割的细分不变：把一个区间分成两半但保持相同系数，两个增量会加回原增量. 因此不同的分段表示不会改变积分. 它也立即是线性的、适应的，并具有连续路径. [^ito-simple]

<a id="qt16-isometry"></a>
## Itô等距

记 $A_j=\xi_j\Delta W_j$. 因为未来增量独立于 $\mathcal F_{t_j}$，有

$$
\mathbb{E}[A_j\mid\mathcal F_{t_j}]=0,
\qquad
\mathbb{E}[A_j^2]=\mathbb{E}[\xi_j^2]\Delta t_j.
$$

对 $j<k$，$A_j$ 已是 $\mathcal F_{t_k}$ 可测，故

$$
\mathbb{E}[A_jA_k]
=\mathbb{E}\{A_j\xi_k \mathbb{E}[\Delta W_k\mid\mathcal F_{t_k}]\}=0.
$$

这里各项可积：$A_j\in L^2$，$\xi_k\in L^2$，所以 $A_j\xi_k\in L^1$；再利用其与未来增量的独立性，乘积仍可积. 也可以先截断系数再用 $L^2$ 极限得到同一结论.

展开有限和的平方便得

$$
\mathbb{E}[I_T(H)]=0,
\qquad
\mathbb{E}|I_T(H)|^2
=\sum_j \mathbb{E}[\xi_j^2]\Delta t_j
=\mathbb{E}\int_0^T H_t^2\,dt.
$$

这就是简单过程的 Itô 等距：被积过程的时空均方范数等于积分终点的均方范数，并据此确定向一般过程延拓时采用的 $\mathcal H_T^2$ 距离.

<a id="qt16-martingale"></a>
## 鞅性质

固定 $s<t$，把分割加上 $s,t$. 处在同一原区间内时，系数在较早的左端点已知，因此在新左端点仍已知. 对新分段中的每个未来增量，条件均值为零. 逐段用塔式性质，得到

$$
\mathbb{E}[I_t(H)-I_s(H)\mid\mathcal F_s]=0.
$$

因此 $I(H)$ 是连续平方可积鞅. 各未来段先在自身左端条件化，再通过塔式性质回到 $\mathcal F_s$.

<a id="qt16-extension"></a>
## 渐进可测与均方空间

渐进可测指每个 $u\le T$ 下，$(t,\omega)\mapsto H_t(\omega)$ 在 $[0,u]\times\Omega$ 上对 $\mathcal B([0,u])\otimes\mathcal F_u$ 可测，同时规定时间与样本的联合可测性.

采用空间

$$
\mathcal H_T^2
=\{H\text{ 渐进可测}:\mathbb{E}\int_0^T H_t^2dt<\infty\},
$$

按 $dt\otimes P$ a.e.相等取商. 简单左阶梯在该空间稠密，等距使逼近序列的终点积分在 $L^2(P)$ 中收敛. <a class="inline-ref" href="/zh/notebook/qt-ito-integral-proof/" data-reference="zh-qt16p1">完整构造<span aria-hidden="true"> ↗</span></a>进一步通过Doob最大不等式获得连续过程极限及停止规则.[^ito-extension]

最终的连续积分过程按不可分辨性（indistinguishability）识别：存在一个共同满测度集合，其上所有时点都相等. 这比逐个固定时点的几乎必然相等，量词更强.

若仅有 $\int_0^T H_t^2dt<\infty$ a.s.，则局部化得到连续局部鞅；全局零均值与有限二阶矩需另有可积性条件.

<a id="qt16-wdw"></a>
## Brownian自积分

$W$ 本身属于 $\mathcal H_T^2$，因为 $\mathbb{E}\int_0^T W_t^2dt=T^2/2$. 用左端点阶梯 $H_t^\pi=W_{t_j}$ 逼近它，则

$$
\begin{aligned}
\mathbb{E}\int_0^T|W_t-H_t^\pi|^2dt
&=\sum_j\int_{t_j}^{t_{j+1}}(t-t_j)dt\\
&=\frac12\sum_j(\Delta t_j)^2\longrightarrow0.
\end{aligned}
$$

另一方面，每条路径上都有精确望远镜恒等式

$$
2\sum_jW_{t_j}\Delta W_j=W_T^2-Q_\pi.
$$

左边由等距趋于 $2\int_0^T W_t\,dW_t$，右边由二次变差趋于 $W_T^2-T$，于是

$$
\int_0^T W_t\,dW_t=\frac{W_T^2-T}{2}.
$$

若换用右端点，两个有限和之差恰好是

$$
\sum_j W_{t_{j+1}}\Delta W_j
-\sum_jW_{t_j}\Delta W_j=Q_\pi.
$$

右端点和趋于 $(W_T^2+T)/2$，与左端点和相差 $T$. 右端点系数通常在区间开始时尚不可知，不满足简单可预测积分的定义.

<a id="qt16-numeric"></a>
## 左端与右端和

实验复用上一单元 $8192\times256$ 正态数组，$T=1$，粗网格由相邻细增量聚合.

| 网格区间数 | 首路径左和 | 首路径右和 | 模拟 MSE | 理论 MSE |
| --- | --- | --- | --- | --- |
| 4 | -0.197 | 0.597 | 0.127 | 0.125 |
| 16 | -0.34 | 0.74 | 0.031 | 0.031 |
| 64 | -0.31 | 0.71 | 0.008 | 0.008 |
| 256 | -0.283 | 0.683 | 0.002 | 0.002 |

<div data-experiment-slot="VIEW-QT16-INTEGRAL"></div>

理论MSE为 $1/(2n)$，由被积过程逼近误差和Itô等距得到. 表中模拟MSE按8,192条路径平均.

<a id="qt16-exercise"></a>
## 练习与解析

**题目.** 对实常数 $a,b$，计算 $J=\int_0^T(a+bW_t)dW_t$ 的期望与方差，并说明 $W_T$ 与 $W_T^2-T$ 不相关是否意味着它们独立.

**解析.** 线性性给

$$
J=aW_T+\frac b2(W_T^2-T).
$$

两个加项期望都为零. 高斯分布对称性给 $\mathbb{E}[W_T^3]=0$，所以交叉项为零；$\operatorname{Var}(W_T^2)=2T^2$，因此

$$
\operatorname{Var}(J)=a^2T+\frac{b^2T^2}{2}.
$$

等距也给出同一结果 $\int_0^T\mathbb{E}[(a+bW_t)^2]dt$. 对 $T>0$，$W_T^2-T$ 是 $W_T$ 的非退化函数，故两者虽不相关，却不独立.

[^ito-simple]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§3.1，pp.7–8. 原 p.8 的一步过程下标混用；本文按 $\xi\in\mathcal F_s$、$\xi(W_t-W_s)$ 的正确区间表达推导.
[^ito-extension]: 同讲义 §1.1–1.2、§3.2–3.5，pp.1–4、9–13；连续过程构造与停止传递见 <a class="inline-ref" href="/zh/notebook/qt-ito-integral-proof/" data-reference="zh-qt16p1">Itô 积分的完整构造<span aria-hidden="true"> ↗</span></a>.
