{
  "title": "Itô 积分：按已知信息累计变化",
  "description": "从左端点持仓和式证明简单等距与鞅，并计算积分 W dW。",
  "layout": "entry",
  "notebookid": "zh-qt16",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt16"
}

<a id="qt16-question"></a>
## 先决定系数，再接受下一段变化

离散交易中的累计变化写成“前一时点决定的持仓，乘以后一区间的价格增量”。这一先后顺序到了连续时间不会消失。本篇先在有限个区间上定义积分，完整证明等距与鞅性质，再亲手重建 $\int W\,dW$。一般积分的密度、连续版本与停止规则在独立单元 <a class="inline-ref" href="/zh/notebook/qt-ito-integral-proof/" data-reference="zh-qt16p1">Itô 积分的完整构造<span aria-hidden="true"> ↗</span></a> 中证明。

固定有限 $T$ 和通常条件下的过滤概率空间；通常条件是过滤右连续，并且 $\mathcal F_0$ 包含概率空间中的全部零测子集。$W$ 相对于这个过滤为 Brownian 运动。先修为条件期望、$L^2$ 范数及上一单元的二次变差。

<a id="qt16-simple"></a>
## 可以直接算的积分

令 $0=t_0<\cdots<t_n=T$ 为确定性分割。一个简单可预测过程写作

$$
H_t=\sum_{j=0}^{n-1}\xi_j\mathbf1_{(t_j,t_{j+1}]}(t),
\qquad \xi_j\in L^2(\mathcal F_{t_j}).
$$

这里 $\xi_j$ 服务于 $(t_j,t_{j+1}]$，在 $t_j$ 已知。定义

$$
I_t(H)=\sum_j\xi_j
\bigl(W_{t\wedge t_{j+1}}-W_{t\wedge t_j}\bigr).
$$

它对分割的细分不变：把一个区间分成两半但保持相同系数，两个增量会加回原增量。因此不同的分段表示不会改变积分。它也立即是线性的、适应的，并具有连续路径。[^ito-simple]

系数可以随机，不必是常数；关键是不能偷用下一时点的值。我们并不说每个随机持仓的收益相互独立，接下来只需要条件期望。

<a id="qt16-isometry"></a>
## 等距：交叉项为什么为零

记 $A_j=\xi_j\Delta W_j$。因为未来增量独立于 $\mathcal F_{t_j}$，有

$$
E[A_j\mid\mathcal F_{t_j}]=0,
\qquad
E[A_j^2]=E[\xi_j^2]\Delta t_j.
$$

对 $j<k$，$A_j$ 已是 $\mathcal F_{t_k}$ 可测，故

$$
E[A_jA_k]
=E\{A_j\xi_k E[\Delta W_k\mid\mathcal F_{t_k}]\}=0.
$$

这里各项可积：$A_j\in L^2$，$\xi_k\in L^2$，所以 $A_j\xi_k\in L^1$；再利用其与未来增量的独立性，乘积仍可积。也可以先截断系数再用 $L^2$ 极限得到同一结论。

展开有限和的平方便得

$$
E[I_T(H)]=0,
\qquad
E|I_T(H)|^2
=\sum_j E[\xi_j^2]\Delta t_j
=E\int_0^T H_t^2\,dt.
$$

这就是简单过程的 Itô 等距：被积过程的时空均方范数，变成积分终点的均方范数。它不只是一个方便算方差的技巧；它告诉我们应该用什么距离延拓积分。

<a id="qt16-martingale"></a>
## 从终点均值到整个过程的鞅性质

固定 $s<t$，把分割加上 $s,t$。处在同一原区间内时，系数在较早的左端点已知，因此在新左端点仍已知。对新分段中的每个未来增量，条件均值为零。逐段用塔式性质，得到

$$
E[I_t(H)-I_s(H)\mid\mathcal F_s]=0.
$$

适应性和可积性已经核过，故 $I(H)$ 是连续平方可积鞅。未来区间的系数未必在 $s$ 已知；我们是在各个区间自己的左端点条件化，再退回 $\mathcal F_s$，不是把全部未来系数一口气提出。

<a id="qt16-extension"></a>
## 一般过程需要哪一种可测性

渐进可测（progressive）的意思是：对每个 $u\le T$，$(t,\omega)\mapsto H_t(\omega)$ 在 $[0,u]\times\Omega$ 上相对于 $\mathcal B([0,u])\otimes\mathcal F_u$ 可测。这同时提供时间和样本的联合可测性；单说每个 $H_t$ 适应并不够。

采用空间

$$
\mathcal H_T^2
=\{H\text{ 渐进可测}:E\int_0^T H_t^2dt<\infty\},
$$

并把 $dt\otimes P$ 几乎处处相等的过程视为同一元素。简单左阶梯在这个空间稠密。若 $H^m\to H$ 于此范数，等距使 $I_T(H^m)$ 在 $L^2(P)$ 中收敛；但终点收敛还没有自动构造一条连续路径。QT16-P1 进一步用 Doob 最大不等式建立连续过程的极限，证明逼近无关、鞅性质与停止规则。[^ito-extension]

最终的连续积分过程按不可分辨性（indistinguishability）识别：存在一个共同满测度集合，其上所有时点都相等。这比逐个固定时点的几乎必然相等，量词更强。

若只有 $\int_0^T H_t^2dt<\infty$ 几乎必然，却没有期望有限，则须局部化，自动得到的是连续局部鞅，不可直接声称全局零均值或有限二阶矩。

<a id="qt16-wdw"></a>
## 从定义算一次：为什么不是 $W_T^2/2$

$W$ 本身属于 $\mathcal H_T^2$，因为 $E\int_0^T W_t^2dt=T^2/2$。用左端点阶梯 $H_t^\pi=W_{t_j}$ 逼近它，则

$$
\begin{aligned}
E\int_0^T|W_t-H_t^\pi|^2dt
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

故右端点和趋于 $(W_T^2+T)/2$。这是不同信息约定造成的实质差别，不是数值显示误差。右端点系数一般不在区间开始时可知，所以它不属于我们刚定义的简单可预测积分。

<a id="qt16-numeric"></a>
## 同一路径上的左、右和式

实验仍使用上一单元同一个 $8192\times256$ 正态数组，$T=1$。对每条路径从最细网格聚合，不另抽随机数。

| 网格区间数 | 首路径左和 | 首路径右和 | 模拟 MSE | 理论 MSE |
| --- | --- | --- | --- | --- |
| 4 | -0.197281995 | 0.597177420 | 0.126738290 | 0.125000000 |
| 16 | -0.339659852 | 0.739555278 | 0.031220589 | 0.031250000 |
| 64 | -0.310339703 | 0.710235128 | 0.007818851 | 0.007812500 |
| 256 | -0.282960276 | 0.682855701 | 0.001981947 | 0.001953125 |

<div data-experiment-slot="VIEW-QT16-INTEGRAL"></div>

表中的理论均方误差为 $1/(2n)$，它可直接由刚才的逼近误差和等距得到；不是对模拟结果拟合出来的收敛率。单条路径误差可以来回变化，而多路径均方量回答的是另一个问题。

<a id="qt16-exercise"></a>
## 迁移：线性被积过程

**题目。** 对实常数 $a,b$，计算 $J=\int_0^T(a+bW_t)dW_t$ 的期望与方差，并说明 $W_T$ 与 $W_T^2-T$ 不相关是否意味着它们独立。

**解析。** 线性性给

$$
J=aW_T+\frac b2(W_T^2-T).
$$

两个加项期望都为零。高斯分布对称性给 $E[W_T^3]=0$，所以交叉项为零；$\operatorname{Var}(W_T^2)=2T^2$，因此

$$
\operatorname{Var}(J)=a^2T+\frac{b^2T^2}{2}.
$$

从等距也得到 $\int_0^T E[(a+bW_t)^2]dt$，结果相同。不过第二个变量是第一个变量的函数；一般并不独立。不相关足以完成这次二阶矩计算，却不能代替更强的独立性断言。

[^ito-simple]: Lalley，[Notes on the Itô Calculus](https://www.stat.uchicago.edu/~lalley/Courses/385/Old/ItoIntegral-2012.pdf)，2012-05-15，§3.1，pp.7–8。原 p.8 的一步过程下标混用；本文按 $\xi\in\mathcal F_s$、$\xi(W_t-W_s)$ 的正确区间表达推导。
[^ito-extension]: 同讲义 §1.1–1.2、§3.2–3.5，pp.1–4、9–13；完整过程构造与停止传递见本包 QT16-P1，而非只引用终点 $L^2$ 极限。

