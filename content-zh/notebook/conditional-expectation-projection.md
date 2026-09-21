{
  "title": "条件期望、投影与预测目标",
  "description": "由局部积分定义证明唯一性和塔式性质，再用截断建立 $L^2$ 投影与均方误差分解.",
  "layout": "entry",
  "notebookid": "zh-qt11",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt11"
}

固定信息集后，条件期望把未知结果表示为当前信息可辨认的量：它保留每个可辨认事件上的积分；当随机变量平方可积时，同一个量还是 $L^2$ 中的最小均方误差预测. 可测性与可积性的记号沿用 <a class="inline-ref" href="/zh/notebook/measurable-information/" data-reference="zh-qt09">可测空间与信息<span aria-hidden="true"> ↗</span></a>、<a class="inline-ref" href="/zh/notebook/integration-expectation/" data-reference="zh-qt10">积分与可积性<span aria-hidden="true"> ↗</span></a>.

<a id="qt11-definition"></a>
## 局部积分定义

固定概率空间 $(\Omega,\mathcal F,P)$、子 $\sigma$-代数 $\mathcal G\subseteq\mathcal F$，以及实值随机变量 $X\in L^1(P)$，即 $\mathbb{E}|X|<\infty$. $\mathcal G$ 表示当前允许使用的信息；$L^1(\mathcal G)$ 中的变量还须 $\mathcal G$-可测.

**定义（条件期望）.** 令上述对象固定，则 **$X$ 关于 $\mathcal G$ 的条件期望**是指满足下列条件的随机变量 $M$：

$$
M\in L^1(\mathcal G),\qquad
\int_A M\,dP=\int_A X\,dP\quad\text{对所有 }A\in\mathcal G.
$$

记作 $M=\mathbb{E}[X\mid\mathcal G]$. 这个记号代表一个几乎处处等价类；选取其中一个具体可测函数，称为一个**版本**. [^ce]

可测性使 $M$ 由现有信息确定，积分身份保留每个可辨认事件上的加权总量. 单独取 $X$ 可保留积分，但未必 $\mathcal G$-可测；常数 $\mathbb{E}X$ 可测，却未必保留局部积分.

用四状态教学模型检验定义. 采用标准 SPX 看涨期权的支付形式：$Z$ 为**合约规定的结算值**，$K=6000$ 点，一张合约的金额为 $X=100(Z-K)^+$ 美元. SPX 的每点 100 美元、欧式行权和现金结算来自产品条款；表中结算情景、概率和提前揭晓的信号均为教学设定.[^spx]

| 状态 | 模型概率 | 时点 $t_1$ 已收到的信号 | $t_2$ 结算值（点） | 支付 $X$（美元） |
|---|---:|---|---:|---:|
| $\omega_1$ | 0.1 | L | 5900 | 0 |
| $\omega_2$ | 0.3 | L | 6000 | 0 |
| $\omega_3$ | 0.4 | H | 6100 | 10000 |
| $\omega_4$ | 0.2 | H | 6200 | 20000 |

令 $L=\{\omega_1,\omega_2\}$、$H=\{\omega_3,\omega_4\}$、$\mathcal G=\{\varnothing,L,H,\Omega\}$. 在 $t_1$，模型只允许知道 L/H；$t_2$ 才知道结算值.

我们有

$$
\mathbb{E}X=0.10(0)+0.30(0)+0.40(10000)+0.20(20000)=8000.
$$

候选量

$$
M=0\,1_L+\frac{40000}{3}\,1_H
$$

在每组内恒定，所以 $\mathcal G$-可测. 在 $L$ 上，两边积分都是零；在 $H$ 上，

$$
\mathbb{E}[M1_H]=\frac{40000}{3}(0.60)=8000=\mathbb{E}[X1_H].
$$

空集和全空间的等式随之成立，因而它满足完整定义. 反过来，常数 8000 在 $L$ 上的积分是 $8000(0.40)=3200$.

<a id="qt11-uniqueness"></a>
## 几乎处处唯一性

**命题（唯一性）.** 若 $M,N\in L^1(\mathcal G)$ 都满足上述积分恒等式，则 $M=N$，$P$-几乎处处. [^ce]

**证明.** 对每个正整数 $n$，令 $A_n=\{M-N>1/n\}$. 因为 $M,N$ 都 $\mathcal G$-可测，$A_n\in\mathcal G$，所以可以把它代入定义：

$$
0=\int_{A_n}(M-N)\,dP\ge\frac1nP(A_n).
$$

故 $P(A_n)=0$. 而 $\{M>N\}=\bigcup_{n\ge1}A_n$，可列个零概率事件之并仍为零概率，得到 $P(M>N)=0$. 交换 $M,N$，再得 $P(N>M)=0$，证明完成.

在完整信息空间 $\Omega=\{a,b,c\}$ 上，取 $P(a)=P(b)=1/2$、$P(c)=0$，$X=(2,4,9)$. $(2,4,0)$ 和 $(2,4,100)$ 都满足定义，显示唯一性仅到a.s.等价. 对较小事件域，零概率集上的修改仍须保留 $\mathcal G$-可测性.

<a class="inline-ref" href="/zh/notebook/conditional-expectation-existence/" data-reference="zh-qt11p1">条件期望存在性<span aria-hidden="true"> ↗</span></a>以Radon–Nikodym定理构造满足定义的变量.

<a id="qt11-tower"></a>
## 塔式性质

**命题（塔式性质）.** 若 $X\in L^1(P)$，且 $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$，则

$$
\mathbb{E}[\mathbb{E}[X\mid\mathcal G]\mid\mathcal H]=\mathbb{E}[X\mid\mathcal H]\quad\text{a.s.}
$$

[^tower]

**证明.** 令 $M=\mathbb{E}[X\mid\mathcal G]$、$N=\mathbb{E}[M\mid\mathcal H]$. $N$ 可积且 $\mathcal H$-可测. 对每个 $A\in\mathcal H$，也有 $A\in\mathcal G$，故

$$
\int_A N\,dP=\int_A M\,dP=\int_A X\,dP.
$$

$N$ 因而满足 $\mathbb{E}[X\mid\mathcal H]$ 的定义，再用唯一性即可.

特别地，取平凡信息 $\mathcal H=\{\varnothing,\Omega\}$，便得到 $\mathbb{E}[M]=\mathbb{E}X$. 在四状态表中，这就是

$$
0.40(0)+0.60\left(\frac{40000}{3}\right)=8000.
$$

组均值按组概率加权.

划分 $\{\omega_1,\omega_3\}/\{\omega_2,\omega_4\}$ 与L/H交叉，对应事件域互不包含，不满足嵌套条件.

<a id="qt11-projection"></a>
## 正交投影与均方误差

现在加强为 $X\in L^2(P)$，并令 $M=\mathbb{E}[X\mid\mathcal G]$. 我们要证明，对任意 $Y\in L^2(\mathcal G)$，

$$
\mathbb{E}[(X-Y)^2]=\mathbb{E}[(X-M)^2]+\mathbb{E}[(M-Y)^2]. \tag{1}
$$

第二项非负，所以 $M$ 最小化均方误差；达到相同最小值的 $Y$ 必须与 $M$ 几乎处处相同. 下面先证明 $M\in L^2$，再由条件期望的定义推导等式.[^projection]

**第一步：从事件推广到有界检验函数.** 定义已给出 $\mathbb{E}[(X-M)1_A]=0$. 有限线性组合说明，对每个 $\mathcal G$-可测简单函数 $V$，有 $\mathbb{E}[(X-M)V]=0$. 若 $V$ 有界，选 $\mathcal G$-可测简单函数 $V_j\to V$，并使 $|V_j|\le \|V\|_\infty+1$. 乘积由 $(\|V\|_\infty+1)|X-M|$ 支配，后者可积. 由支配收敛，

$$
\mathbb{E}[(X-M)V]=0. \tag{2}
$$

这一步只用到了 $X,M\in L^1$. [^bounded]

**第二步：$L^2$收缩.** 取有界检验函数 $V_n=M1_{\{|M|\le n\}}$. 记

$$
a_n=\mathbb{E}[M^2 1_{\{|M|\le n\}}].
$$

由式 (2) 及 Cauchy–Schwarz，

$$
a_n=\mathbb{E}[XV_n]\le \|X\|_2\|V_n\|_2=\|X\|_2\sqrt{a_n}.
$$

$a_n$ 有限；若 $a_n=0$，结论直接成立，否则两边除以 $\sqrt{a_n}$，得 $a_n\le \mathbb{E}[X^2]$. 因为 $M$ 可取处处有限的实值版本，$M^2 1_{\{|M|\le n\}}\uparrow M^2$，单调收敛给出

$$
\mathbb{E}[M^2]=\lim_n a_n\le \mathbb{E}[X^2]<\infty. \tag{3}
$$

**第三步：推广到所有 $L^2$ 检验函数.** 对 $V\in L^2(\mathcal G)$，取 $V_n=V1_{\{|V|\le n\}}$. 因为

$$
\mathbb{E}[|V-V_n|^2]=\mathbb{E}[V^2 1_{\{|V|>n\}}]\longrightarrow0,
$$

所以由式 (2)、式 (3) 与 Cauchy–Schwarz，

$$
\left|\mathbb{E}[(X-M)(V-V_n)]\right|
\le \|X-M\|_2\|V-V_n\|_2\longrightarrow0.
$$

于是 $\mathbb{E}[(X-M)V]=0$.

**第四步：完成平方展开.** 写成 $X-Y=(X-M)+(M-Y)$. $M-Y\in L^2(\mathcal G)$，上一步使交叉项为零，于是得到式 (1). 若两个预测达到同一最小值，则 $\mathbb{E}[(M-Y)^2]=0$，从而 $M=Y$ a.s.

按a.s.等价类识别后，$L^2(\mathcal G)$ 完备，其到 $L^2(\mathcal F)$ 的包含映射等距，故像为闭子空间. 上述正交关系将条件期望识别为投影.[^closed]

<a id="qt11-experiment"></a>
## 四状态误差分解

取 $Y=0\,1_L+10000\,1_H$，按表中概率计算误差：

| 量 | $\omega_1$ | $\omega_2$ | $\omega_3$ | $\omega_4$ |
|---|---:|---:|---:|---:|
| $X$（美元） | 0 | 0 | 10000 | 20000 |
| $M$（美元） | 0 | 0 | $40000/3$ | $40000/3$ |
| $Y$（美元） | 0 | 0 | 10000 | 10000 |
| $X-M$（美元） | 0 | 0 | $-10000/3$ | $20000/3$ |

因此

$$
\mathbb{E}[(X-M)^2]
=0.4(10000/3)^2+0.2(20000/3)^2
=\frac{40000000}{3}\ {\rm USD}^2,
$$

$$
\mathbb{E}[(M-Y)^2]
=0.6(10000/3)^2
=\frac{20000000}{3}\ {\rm USD}^2.
$$

两项相加等于 $20000000\ {\rm USD}^2=\mathbb{E}[(X-Y)^2]$. 误差单位为USD².

<div data-experiment-slot="EXP-QTB-PROJECTION-01"></div>

固定 L 组预测为零，只改变 H 组预测值 $y_H$，此时

$$
\mathbb{E}[(X-Y)^2]=\frac{40000000}{3}
+0.6\left(y_H-\frac{40000}{3}\right)^2.
$$

所以 $y_H=0,10000,40000/3,20000$ 时，误差依次为 $120000000,20000000,40000000/3,40000000$ 美元平方.

若取 $Y=X$，误差为零；但它在 H 组内取两个不同值，因此不是 $\mathcal G$-可测变量，不属于比较集合 $L^2(\mathcal G)$. 信息细化到完整状态后，$X$ 才进入该比较集合，此时零误差成立.

改变损失函数会改变优化目标. 平方损失选择条件均值；绝对损失则由条件中位数最小化.

<a id="qt11-exercises"></a>
## 练习与解析

**题一：只有总平均够不够？** 仍用表中信息 $\mathcal G$，验证常数 8000 与候选 $M$ 都有平均 8000，为什么只有后者是条件期望？

**解析.** 两者总均值均为8000，但常数8000在 $L$ 上积分为3200，原支付积分为0. $M$ 在L/H两个原子上保留积分，可加性将等式扩至整个事件域.

**题二：去掉平方可积会怎样？** 令 $X$ 的密度为 $\frac32 x^{-5/2}1_{\{x\ge1\}}$，信息为平凡信息. 条件期望还存在吗？是否仍能用有限均方误差选出唯一常数预测？

**解析.** $\mathbb{E}X=3$、$\mathbb{E}X^2=\infty$，故 $X\in L^1\setminus L^2$，条件期望为3. 对任意有限 $c$，足够大的 $x$ 满足 $(x-c)^2\ge x^2/4$，因此 $\mathbb{E}[(X-c)^2]=\infty$. 所有常数的均方误差均无限，失去唯一最小值的比较.

**题三：非嵌套信息的塔式等式.** 令 $\mathcal K$ 由 $\{\omega_1,\omega_3\}$ 和 $\{\omega_2,\omega_4\}$ 生成. 分别计算 $\mathbb{E}[X\mid\mathcal K]$ 与 $\mathbb{E}[M\mid\mathcal K]$.

**解析.** 两组概率都是 0.5，原支付在两组上的加权总量都为 4000，所以 $\mathbb{E}[X\mid\mathcal K]=8000$. 对 $M$，两组的条件平均分别为

$$
\frac{0.4(40000/3)}{0.5}=\frac{32000}{3},
\qquad
\frac{0.2(40000/3)}{0.5}=\frac{16000}{3}.
$$

它们不同于 8000；这里 $\mathcal K\not\subseteq\mathcal G$，不能套用塔式性质.

[^ce]: Amir Dembo, *Probability Theory: STAT310/MATH230*, 2021-04-15，§4.1.1，Theorem 4.1.2 及证明，印刷页 153–156. [开放原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=153).
[^tower]: 同书，Proposition 4.2.8（Tower property），印刷页 160. [原页](https://adembo.su.domains/stat-310b/lnotes.pdf#page=160).
[^projection]: 同书，§4.3，Proposition 4.3.1 及证明，印刷页 166–167. [原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=166).
[^bounded]: 同书，Proposition 4.2.1，pp.160–161；支配收敛见 Theorem 1.3.34，pp.42–43.
[^closed]: 同书，Proposition 4.3.7 及证明，pp.168–169；一般 Hilbert 投影定理见 Theorem 4.3.1，pp.169–170.
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，访问于 2026-09-21，p.2 “Contract Multiplier / Final Settlement Value”. 标准 SPX 的结算值采用到期日成分股开盘成交价计算；SPXW 的口径不同. [产品原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf#page=2).
