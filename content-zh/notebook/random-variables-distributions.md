{
  "title": "随机变量与分布",
  "description": "在同一情景空间上分别定义结算值、合约支付与净损益的随机变量，并由原像构造各自分布.",
  "layout": "entry",
  "notebookid": "zh-qt03",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt03"
}

<span id="qt03-mapping"></span>

## 随机变量与前推分布

同一结算情景可经不同映射得到结算指数、合约支付和净损益，各自具有对应分布.

**定义.** 令 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，则实值随机变量是指可测函数 $X\colon\Omega\to\mathbb R$；其中 $\mathcal B(\mathbb R)$ 是由实数轴开区间生成的 $\sigma$-代数；即对每个 Borel 集 $B$，都有 $X^{-1}(B)\in\mathcal F$. 其分布为 $\mu_X(B)=\mathbb P(X\in B)$，分布函数为 $F_X(x)=\mathbb P(X\le x)$. 随机变量是映射，分布是这项映射把概率质量放到数值轴上后的结果. [^rv]

**命题.** $\mu_X$ 是 $(\mathbb R,\mathcal B(\mathbb R))$ 上的概率测度.

**证明.** 可测性保证原像属于 $\mathcal F$，非负性及 $\mu_X(\mathbb R)=1$ 随之成立. 两两不交Borel集 $B_n$ 的原像也不交，且原像保持并集，因此 $\mu_X(\bigcup_nB_n)=\mathbb P(\bigcup_nX^{-1}(B_n))=\sum_n\mu_X(B_n)$.

<span id="qt03-payoff-map"></span>

## 有限情景支付

Cboe SPX指数期权采用欧式行权、现金结算，每点100美元. 传统SPX的AM结算值按到期日成分证券各自主市场开盘价计算，SPXW的PM结算值按相应收盘成交价计算.[^spx]

采用 $K=6000$、未来结算 $T$、三种结算情景及模型概率作为算例输入. 令 $Z$ 为 Cboe 规则指定的结算值，则一份看涨期权的行权结算金额为 $Y=100(Z-K)^+$，其中 $a^+=\max(a,0)$.

| 情景 | 模型概率 | $Z$（指数点） | $Y$（美元/份） | 假设支付 30 点权利金后的净损益（美元/份） |
|---|---:|---:|---:|---:|
| $\omega_1$ | 0.2 | 5,900 | 0 | −3,000 |
| $\omega_2$ | 0.5 | 6,000 | 0 | −3,000 |
| $\omega_3$ | 0.3 | 6,100 | 10,000 | 7,000 |

设权利金30点，即3,000美元，未计费用、税和利息. 净损益为结算金额Y减权利金. Cboe规定行权现金在到期后下一营业日交付，结算值确定与现金到账有时间间隔.[^spx]

表中损益单位为美元/份. 转为回报率时另指定资本分母，如权利金、初始财富或受约束资本.

前两种结算情景均映射为零支付，故 $P(Y=0)=0.7$、$P(Y=10000)=0.3$. CDF在 $y<0$ 为0，$0\le y<10000$ 为0.7，$y\ge10000$ 为1；零点跳跃0.7.

<span id="qt03-mixed-distribution"></span>

## 连续输入与原子质量

离散分布的全部质量集中在某个有限或可数集合上；绝对连续分布具有相对于长度测度的密度. 两者不能穷尽所有分布，“分布函数连续”也不等于“具有密度”. 这里把讲义所称具有 PDF 的 continuous 明确称为绝对连续. [^rv]

另设 $Z$ 在 $[5900,6100]$ 均匀分布，仍令 $Y=100(Z-6000)^+$，则

$$
F_Y(y)=\begin{cases}
0,&y<0,\\
\frac12+\frac{y}{20000},&0\le y<10000,\\
1,&y\ge10000.
\end{cases}
$$

$Y=0$ 的原像为 $Z\le6000$，占半区间. 对 $0\le y<10000$，$Y\le y$ 等价于 $Z\le6000+y/100$. 因而零点质量1/2，加上正区间密度1/20000的积分1/2构成完整分布；密度单位为每美元，原子质量无量纲.

<span id="qt03-self-check"></span>

<div data-experiment-slot="lab-qt03"></div>

## 练习与解析

**解释题.** 三情景模型的零支付概率为什么是 0.7，而不是零结算值的概率？

**解析.** 原像 $\{Z\le K\}$ 包含两个状态，其概率相加为0.7.

**迁移题.** 在原三情景模型中改成看跌支付 $100(K-Z)^+$，保持 $K=6000$. 求支付分布.

**解析.** 三情景支付为 `10,000、0、0` 美元，所以零支付概率为 0.8，10,000 美元支付的概率为 0.2. 权重没有变化，改变的是映射. 另一项检查是将看涨行权价改为 6,050：支付变成 `0、0、5,000`，其分布为零点质量 0.7 与 5,000 美元处质量 0.3.

[^rv]: MIT 6.436J/15.085J，Fall 2018，[Lecture 4: Random Variables](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf). 必读 §§1.1–1.2，pp.2–4 至 §1.3 前；§2 的 CDF 定义及 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前. 可列可加性的证明在 pp.3–4. 混合分布例子用于区分类别；本文支付分布由原像独立推导.
[^spx]: Cboe，[SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，两页；访问于 2026-09-21，页脚 ©2026，未见单独修订日. 定位 p.1 的 SPX/SPXW AM/PM settlement 比较表；p.2 “Contract Multiplier”“Exercise Style/Cash Settlement”“Final Settlement Value”. p.2 说明每点 100 美元、欧式现金结算、行权现金于到期后的下一个营业日交付，以及传统 SPX/SPXW 的结算值来源.
