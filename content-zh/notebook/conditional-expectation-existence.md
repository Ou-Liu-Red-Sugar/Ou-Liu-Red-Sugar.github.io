{
  "title": "条件期望的存在性：从 Radon–Nikodym 定理到可用信息",
  "description": "在较小事件域上构造有限绝对连续测度，以两项 RN 密度建立一般 L1 条件期望.",
  "layout": "entry",
  "notebookid": "zh-qt11p1",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt11p1"
}

有限状态下，只要把每组的加权总量除以该组概率，就得到条件平均. 一般空间却未必能列出一组组正概率原子. 例如观察一个连续变量时，每个精确取值事件往往概率为零，逐项写“分子除以分母”便走不通.

我们仍想保留同一个要求：所得变量必须可由信息 $\mathcal G$ 辨认，并在每个 $\mathcal G$-事件上保留原来的积分. 本篇证明这样的变量在 $X\in L^1$ 时确实存在. 所调用的基础结果是 Radon–Nikodym 定理；它的条件与公开证明入口会明确给出，不把整个测度论的构造再压进这个存在性证明.

<a id="qt11p1-target"></a>
## 一、先把目标和依赖写清

**定理（条件期望存在性）.** 令 $(\Omega,\mathcal F,P)$ 为概率空间，$\mathcal G\subseteq\mathcal F$ 为子 $\sigma$-代数，$X$ 为实值随机变量且 $\mathbb{E}|X|<\infty$. 则存在实值、$\mathcal G$-可测的 $M$，满足
$$
\mathbb{E}|M|<\infty,\qquad
\int_A M\,dP=\int_A X\,dP\quad(A\in\mathcal G).
$$
因而 $M$ 是 $\mathbb{E}[X\mid\mathcal G]$ 的一个版本.[^ce]

这里不要求 $\mathcal G$ 由有限或可数个原子生成，不要求 $X$ 的分布有 Lebesgue 密度，也不要求 $X\in L^2$. 我们需要的是 <a class="inline-ref" href="/zh/notebook/integration-expectation/" data-reference="zh-qt10">可积性<span aria-hidden="true"> ↗</span></a> 以及下面这项测度表示定理.

**调用定理（Radon–Nikodym）.** 令 $(S,\mathcal A)$ 为可测空间，$\mu,\nu$ 为其上的两个非负、$\sigma$-有限测度. 若 $\nu\ll\mu$，即
$$
\mu(A)=0\Longrightarrow\nu(A)=0\quad(A\in\mathcal A),
$$
则存在非负 $\mathcal A$-可测函数 $h$，满足
$$
\nu(A)=\int_Ah\,d\mu\quad(A\in\mathcal A).
$$
$h$ 在 $\mu$-几乎处处意义下唯一，称为 $\frac{d\nu}{d\mu}$. 在上述 $\sigma$-有限假设下可选取有限值版本；若 $\nu(S)<\infty$，则 $h\in L^1(\mu)$. $\sigma$-有限表示空间能由可数个有限测度集合覆盖. [^rn]

我们实际使用的 $\mu,\nu$ 都是**有限测度**，故自然满足 $\sigma$-有限. RN 定理的完整证明单元见 Dembo §4.1.2，pp.156–158，包含 Lebesgue 分解、辅助引理和 $\sigma$-有限拼接；其中 Hahn 分解被列为具名依赖并另引证明. 读这篇存在性证明不需要先重证这些基础定理. [^rn]

<a id="qt11p1-nonnegative"></a>
## 二、非负情形：在正确的可测空间上造测度

先设 $X\ge0$ 且 $\mathbb{E}X<\infty$. 我们把测度都定义在 **$(\Omega,\mathcal G)$** 上：
$$
\mu=P|_{\mathcal G},\qquad
\nu(A)=\int_A X\,dP\quad(A\in\mathcal G).
$$
$X$ 本身不必 $\mathcal G$-可测，这不妨碍右侧的积分：它在原空间 $(\Omega,\mathcal F,P)$ 上计算，而 $A\in\mathcal G\subseteq\mathcal F$.

接下来逐项验证，不能只把 $\nu$ 叫作测度就跳过去.

首先，$\nu(\varnothing)=0$、$\nu(A)\ge0$. 若 $A_1,A_2,\ldots\in\mathcal G$ 两两不交，则非负函数
$$
X\sum_{k=1}^n1_{A_k}\uparrow X1_{\bigcup_{k\ge1}A_k}.
$$
有限积分的线性性及单调收敛给出
$$
\nu\left(\bigcup_{k\ge1}A_k\right)
=\lim_{n\to\infty}\sum_{k=1}^n\int_{A_k}X\,dP
=\sum_{k\ge1}\nu(A_k).
$$
所以 $\nu$ 可列可加. 其次，$\nu(\Omega)=\mathbb{E}X<\infty$，而 $\mu(\Omega)=1$，两者都有限. 最后，若 $\mu(A)=P(A)=0$，对零概率集合的非负积分为零，故 $\nu(A)=0$，也就是 $\nu\ll\mu$. [^integral]

现在所有 RN 条件都已满足. 取 $h=d\nu/d\mu$，则 $h$ 是 **$\mathcal G$-可测**的，而且
$$
\int_\Omega h\,d\mu=\nu(\Omega)=\mathbb{E}X<\infty.
$$
因此 $h$ 几乎处处有限. 将 $\{h=\infty\}\in\mathcal G$ 上的值统一改为零，可得到处处有限而仍可测的版本. 对 $\mathcal G$-可测函数，按 $\mu=P|_{\mathcal G}$ 积分与按 $P$ 积分相同：先检查指示函数，再用简单函数和非负逼近即可. 于是对每个 $A\in\mathcal G$，
$$
\int_Ah\,dP=\int_Ah\,d\mu=\nu(A)=\int_AX\,dP.
$$
所以 $M=h$ 就是所求变量. 这也解释了 RN 导数的角色：它不是按现实时间求导，而是把“每个事件有多少加权总量”重新表示为一个可测函数.

<a id="qt11p1-signed"></a>
## 三、有正有负：两项密度之差，不是先给结果分正负

一般 $X\in L^1$ 时，写成 $X=X^+-X^-$，其中 $X^+=\max(X,0)$、$X^-=\max(-X,0)$. $\mathbb{E}X^+$ 与 $\mathbb{E}X^-$ 都有限.

在 $(\Omega,\mathcal G)$ 上分别定义
$$
\nu_+(A)=\mathbb{E}[X^+1_A],\qquad \nu_-(A)=\mathbb{E}[X^-1_A].
$$
上节已经证明这两项是相对于 $\mu$ 绝对连续的有限非负测度. 因此可以分别取 RN 密度
$$
U=\frac{d\nu_+}{d\mu},\qquad V=\frac{d\nu_-}{d\mu}.
$$
在共同的 $\mathcal G$-可测例外零测集上把两者都改为零，令 $M=U-V$. 此时 $M$ 处处有定义，且
$$
\mathbb{E}|M|\le \mathbb{E}[U+V]=\mathbb{E}X^++\mathbb{E}X^-=\mathbb{E}|X|<\infty.
$$
对每个 $A\in\mathcal G$，我们只在两个**有限积分**之间作减法：
$$
\int_AM\,dP
=\int_AU\,dP-\int_AV\,dP
=\int_AX^+\,dP-\int_AX^-\,dP
=\int_AX\,dP.
$$
可测性、可积性和积分身份都已验证，存在性证明完成. 再结合 <a class="inline-ref" href="/zh/notebook/conditional-expectation-projection/" data-reference="zh-qt11">条件期望的唯一性证明<span aria-hidden="true"> ↗</span></a>，便得到完整的存在唯一结论.

这里刻意使用 $U,V$ 而不写 $M^+,M^-$.**一般而言**
$$
\mathbb{E}[X^+\mid\mathcal G]\ne \big(\mathbb{E}[X\mid\mathcal G]\big)^+.
$$
$X^+$ 和 $X^-$ 在每个状态不能同时为正；平均以后，两个条件平均却可以在同一个信息组里都为正. 它们在相减前已经把组内不同状态混合了.[^parts]

<a id="qt11p1-experiment"></a>
## 四、把构造落回四状态表

仍设 $P=(0.1,0.3,0.4,0.2)$，信息只分 L/H，其中 $L=\{1,2\}$、$H=\{3,4\}$. 看涨支付为 $X=(0,0,10000,20000)$ 美元；这一金额形式使用每指数点 100 美元的 SPX 产品约定，四状态和概率仍是教学设定. [^spx]

对非负支付，$\mu(L)=0.4$、$\mu(H)=0.6$，而 $\nu(L)=0$、$\nu(H)=8000$ 美元. RN 密度就是让 $h(A)\mu(A)=\nu(A)$ 成立的组内常数：

| 信息组 | $\mu(A)$ | $\nu(A)$（美元） | 密度 $h$（美元） |
|---|---:|---:|---:|
| L | 0.4 | 0 | 0 |
| H | 0.6 | 8000 | $40000/3$ |
| 全体 | 1 | 8000 | 不是再新增一个组内值 |

特别注意，$\nu(\Omega)=8000$，不是 1. $\nu$ 是一个有限测度，但不是概率测度；没有把概率换成所谓“定价概率”.

为了看见正负部分的差别，改研究平移后的变量 $W=X-15000$ 美元. 15000 是人为设定的参考金额，不代表这份期权的市场价格或已付权利金. 此时
$$
W=(-15000,-15000,-5000,5000).
$$
在 H 组，正部分来自第四个状态，负部分来自第三个状态. 因此
$$
U_H=\frac{0.2(5000)}{0.6}=\frac{5000}{3},\qquad
V_H=\frac{0.4(5000)}{0.6}=\frac{10000}{3}.
$$
两项都严格为正，但
$$
M_H=U_H-V_H=-\frac{5000}{3},\qquad
(M_H)^+=0,\quad(M_H)^-=\frac{5000}{3}.
$$
$U_H$ 不是 $(M_H)^+$，$V_H$ 也不是 $(M_H)^-$. 全体平均仍然一致：
$$
\mathbb{E}M=0.4(-15000)+0.6(-5000/3)=-7000=\mathbb{E}X-15000.
$$

<div data-experiment-slot="EXP-QTB-RN-01"></div>

交互中改变参考金额，观察 $U,V$ 与 $M^+,M^-$. 不使用交互时，上述 H 组计算就是一个完整反例；对 L 组，$U_L=0,V_L=15000,M_L=-15000$，可自行补完表.

<a id="qt11p1-exercises"></a>
## 五、检验构造，而不是只记定理名称

**题一：为什么不在原来的 $\mathcal F$ 上直接求密度？** 对非负可积 $X$，若在 $(\Omega,\mathcal F)$ 上定义 $\nu(A)=\int_AX\,dP$，相对于 $P$ 的 RN 密度是什么？它解决了本篇的哪个问题，又没有解决哪个问题？

**解析.** $X$ 自身已经是密度，因为该积分身份就是定义. 它表示了各事件的加权总量，却没有强迫所得函数只依赖 $\mathcal G$. 把两个测度都限制到 $(\Omega,\mathcal G)$，才会使 RN 定理输出 $\mathcal G$-可测函数.

**题二：测度必须归一化吗？** 在上表中，把 $\nu$ 除以 8000 使其总量为一，再求相对于 $\mu$ 的密度，最后得到的是 $\mathbb{E}[X\mid\mathcal G]$ 吗？

**解析.** 新密度是 $\mathbb{E}[X\mid\mathcal G]/8000$，不是原量. 归一化改变了所表示的测度；除非最后乘回 8000，否则连单位和每个事件上的积分都变了. 存在性证明只要求有限非负测度，不需要把 $\nu$ 变为概率测度.

**题三：RN 的绝对连续条件不能省.** 在 $([0,1],\mathcal B([0,1]))$ 上，令 $\mu$ 是 Lebesgue 概率、$\nu=\delta_0$. 能否存在 $h\ge0$ 使所有 Borel 集 $A$ 都满足 $\nu(A)=\int_Ah\,d\mu$？

**解析.** 不能. 取 $A=\{0\}$，左边为 1，右边对 $\mu$-零测集积分必为零. 这正是 $\nu\not\ll\mu$. 条件期望构造之所以可用 RN，不是因为“所有测度都有密度”，而是已经逐项证明了绝对连续.

**题四：零概率组上能否直接做除法？** 若一组 $A\in\mathcal G$ 的概率是零，应怎样给条件期望选版本？

**解析.** $\mu(A)=\nu_+(A)=\nu_-(A)=0$，比例 $0/0$ 没有定义. 可把该组上的版本统一取零，也可选其他保持 $\mathcal G$-可测的有限常数；积分身份不受影响. 这不是对零概率事件定义唯一的条件平均.

完成这些检查，就能辨认存在性证明真正依赖的三件事：正确的小可测空间、有限可积总量、相对于原概率限制的绝对连续性.

[^ce]: Amir Dembo, *Probability Theory: STAT310/MATH230*, 2021-04-15，Theorem 4.1.2，pp.154–156. [原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=154).
[^rn]: 同书，Definition 4.1.4、Theorem 4.1.5，p.155；§4.1.2 “Proof of the Radon–Nikodym theorem”，pp.156–158；Hahn 分解见 Theorem 4.1.12.[定理与证明入口](https://adembo.su.domains/stat-310b/lnotes.pdf#page=155).
[^integral]: 同书，Definition 1.3.1、Theorem 1.3.4 及证明，pp.31–33、41；非负积分与单调收敛用于上述测度的定义和可列可加性.
[^parts]: 同书，p.156，存在性证明后的 Remark. [原页](https://adembo.su.domains/stat-310b/lnotes.pdf#page=156).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2，乘数与结算值规格；访问于 2026-09-21. [原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf#page=2). 本例只使用支付金额的单位约定；风险中性价格不由该来源给出.

