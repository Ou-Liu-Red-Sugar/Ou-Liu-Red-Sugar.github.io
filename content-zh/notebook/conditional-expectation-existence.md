{
  "title": "条件期望的存在性：从 Radon–Nikodym 定理到可用信息",
  "description": "在较小事件域上构造有限绝对连续测度，以两项 RN 密度建立一般 $L^1$ 条件期望.",
  "layout": "entry",
  "notebookid": "zh-qt11p1",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt11p1"
}

一般概率空间未必由正概率原子构成. 连续变量的精确取值事件常为零概率，有限分组中的比值公式无法直接延用.

Radon–Nikodym定理将 $A\mapsto\int_A X\,dP$ 表示为当前事件域上的可测密度，由此构造条件期望.

<a id="qt11p1-target"></a>
## 条件期望存在性

**定理（条件期望存在性）.** 令 $(\Omega,\mathcal F,P)$ 为概率空间，$\mathcal G\subseteq\mathcal F$ 为子 $\sigma$-代数，$X$ 为实值随机变量且 $\mathbb{E}|X|<\infty$. 则存在实值、$\mathcal G$-可测的 $M$，满足

$$
\mathbb{E}|M|<\infty,\qquad
\int_A M\,dP=\int_A X\,dP\quad(A\in\mathcal G).
$$

因而 $M$ 是 $\mathbb{E}[X\mid\mathcal G]$ 的一个版本.[^ce]

**调用定理（Radon–Nikodym）.** 令 $(S,\mathcal A)$ 为可测空间，$\mu,\nu$ 为其上的两个非负、$\sigma$-有限测度. 若 $\nu\ll\mu$，即

$$
\mu(A)=0\Longrightarrow\nu(A)=0\quad(A\in\mathcal A),
$$

则存在非负 $\mathcal A$-可测函数 $h$，满足

$$
\nu(A)=\int_Ah\,d\mu\quad(A\in\mathcal A).
$$

$h$ 在 $\mu$-几乎处处意义下唯一，称为 $\frac{d\nu}{d\mu}$. 在上述 $\sigma$-有限假设下可选取有限值版本；若 $\nu(S)<\infty$，则 $h\in L^1(\mu)$. $\sigma$-有限表示空间能由可数个有限测度集合覆盖. [^rn]

本次构造使用有限测度，自动满足 $\sigma$-有限. RN定理的Lebesgue分解证明及Hahn分解依赖见所引单元.[^rn]

<a id="qt11p1-nonnegative"></a>
## 非负可积构造

先设 $X\ge0$ 且 $\mathbb{E}X<\infty$. 我们把测度都定义在 **$(\Omega,\mathcal G)$** 上：

$$
\mu=P|_{\mathcal G},\qquad
\nu(A)=\int_A X\,dP\quad(A\in\mathcal G).
$$

$X$ 本身不必 $\mathcal G$-可测，这不妨碍右侧的积分：它在原空间 $(\Omega,\mathcal F,P)$ 上计算，而 $A\in\mathcal G\subseteq\mathcal F$.

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

所以 $M=h$ 就是所求变量. RN 密度把事件测度 $\nu$ 表示为相对于 $\mu$ 的 $\mathcal G$-可测函数.

<a id="qt11p1-signed"></a>
## 有符号构造

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

这里用 $U,V$ 表示 $X^+,X^-$ 的两项条件平均；**一般而言**

$$
\mathbb{E}[X^+\mid\mathcal G]\ne \big(\mathbb{E}[X\mid\mathcal G]\big)^+.
$$

$X^+$ 和 $X^-$ 在每个状态不能同时为正；平均以后，两个条件平均却可以在同一个信息组里都为正. 它们在相减前已经把组内不同状态混合了.[^parts]

<a id="qt11p1-experiment"></a>
## 四状态密度

仍设 $P=(0.1,0.3,0.4,0.2)$，信息只分 L/H，其中 $L=\{1,2\}$、$H=\{3,4\}$. 看涨支付为 $X=(0,0,10000,20000)$ 美元；金额按 SPX 每指数点 100 美元的产品约定换算，四状态和概率为教学设定.[^spx]

对非负支付，$\mu(L)=0.4$、$\mu(H)=0.6$，$\nu(L)=0$、$\nu(H)=8000$. 组内常数 $h_A$ 满足 $h_A\mu(A)=\nu(A)$：

| 信息组 | $\mu(A)$ | $\nu(A)$（美元） | 密度 $h_A$（美元） |
|---|---:|---:|---:|
| L | 0.4 | 0 | 0 |
| H | 0.6 | 8000 | $40000/3$ |

$\nu(\Omega)=8000$，$\nu$ 是有限测度，密度的单位随 $X$ 为美元.

为了比较正负部分，令 $W=X-15000$ 美元，其中 15000 是教学参考金额. 此时

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

对 L 组，$U_L=0,V_L=15000,M_L=-15000$；改变参考金额时可按同一组内积分关系重算 $U,V$ 与 $M^+,M^-$.

<a id="qt11p1-exercises"></a>
## 练习与解析

**题一.** 对非负可积 $X$，在 $(\Omega,\mathcal F)$ 上定义 $\nu(A)=\int_AX\,dP$. 求相对于 $P$ 的RN密度，并说明将事件域限制到 $\mathcal G$ 会改变什么.

**解析.** 原空间的密度为 $X$，未必对 $\mathcal G$ 可测. 把测度限制到 $(\Omega,\mathcal G)$，RN定理输出 $\mathcal G$-可测密度.

**题二：测度必须归一化吗？** 在上表中，把 $\nu$ 除以 8000 使其总量为一，再求相对于 $\mu$ 的密度，最后得到的是 $\mathbb{E}[X\mid\mathcal G]$ 吗？

**解析.** 归一化测度的密度为 $\mathbb{E}[X\mid\mathcal G]/8000$. 恢复原积分与单位需乘回8000.

**题三：RN 的绝对连续条件不能省.** 在 $([0,1],\mathcal B([0,1]))$ 上，令 $\mu$ 是 Lebesgue 概率、$\nu=\delta_0$. 能否存在 $h\ge0$ 使所有 Borel 集 $A$ 都满足 $\nu(A)=\int_Ah\,d\mu$？

**解析.** 取 $A=\{0\}$，左侧为1，右侧对零测集积分为0，矛盾. 此例违反 $\nu\ll\mu$.

**题四：零概率组上能否直接做除法？** 若一组 $A\in\mathcal G$ 的概率是零，应怎样给条件期望选版本？

**解析.** $\mu(A)=\nu_+(A)=\nu_-(A)=0$，比值 $0/0$ 未定义. 组内可统一取任意有限常数，保持 $\mathcal G$-可测性且不改变积分.

[^ce]: Amir Dembo, *Probability Theory: STAT310/MATH230*, 2021-04-15，Theorem 4.1.2，pp.154–156. [原文](https://adembo.su.domains/stat-310b/lnotes.pdf#page=154).
[^rn]: 同书，Definition 4.1.4、Theorem 4.1.5，p.155；§4.1.2 “Proof of the Radon–Nikodym theorem”，pp.156–158；Hahn 分解见 Theorem 4.1.12.[定理与证明入口](https://adembo.su.domains/stat-310b/lnotes.pdf#page=155).
[^integral]: 同书，Definition 1.3.1、Theorem 1.3.4 及证明，pp.31–33、41；非负积分与单调收敛用于上述测度的定义和可列可加性.
[^parts]: 同书，p.156，存在性证明后的 Remark. [原页](https://adembo.su.domains/stat-310b/lnotes.pdf#page=156).
[^spx]: Cboe, *SPX Index Options Fact Sheet*，©2026，p.2，乘数与结算值规格；访问于 2026-09-21. [原件](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf#page=2).
