{
  "title": "信息流与可执行策略",
  "description": "用信息集刻画当时能做出的决定，再沿一次交易的事件顺序，逐项计算持仓、现金和损益.",
  "layout": "entry",
  "notebookid": "zh-qt07",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt07"
}

<span id="qt07-event-order"></span>

## 信息与交易事件

实际持仓从成交时形成，并承担之后的价格变化. 信息到达、作出决定、发出订单与成交是不同事件.

2020Q2 GDP初值于7月30日08:30 EDT公布为−32.9%，次值于8月27日08:30 EDT公布为−31.7%.[^bea-adv][^bea-second] 来源发布时间与系统接收时间分别记录，后者取自接收日志.[^alfred]

同一未来结果空间下，不同接收时点对应不同的可用信息. 因此策略定义必须同时指定结果空间和各时点可区分的事件.

<span id="qt07-information"></span>

## 信息分组与可测性

设 $\Omega=\{u+,u-,d+,d-\}$. 字母表示第一阶段已观察到的信号，正负号表示下一阶段揭晓的价格变化. 第一阶段可区分的两组为 $C_u=\{u+,u-\}$ 和 $C_d=\{d+,d-\}$.

相应信息由 $\mathcal F_1=\{\varnothing,C_u,C_d,\Omega\}$ 表示；第二阶段结果完全揭晓后，信息变成 $\mathcal F_2=2^\Omega$. $\sigma$-代数列出此时可以判断真假的事件.[^mit-info][^mit-filtration]

**定义（滤过与适应）.** 在概率空间 $(\Omega,\mathcal F,\mathbb P)$ 上，满足 $\mathcal F_s\subseteq\mathcal F_t\subseteq\mathcal F$（$s\le t$）的一族子 $\sigma$-代数 $(\mathcal F_t)$ 称为滤过. 若过程 $X$ 的每个 $X_t$ 都是 $\mathcal F_t$-可测的，则称 $X$ 关于该滤过适应.

滤过递增对应记录的累积. 修订值成为新信息，旧版本及其发布时间仍留在记录中.

**命题（有限信息分组与决策）.** 设有限集 $\Omega$ 被非空集合 $C_1,\ldots,C_m$ 分割，$\mathcal G=\sigma(C_1,\ldots,C_m)$. 函数 $h\colon\Omega\to\mathbb R$ 为 $\mathcal G$-可测，当且仅当它在每个 $C_j$ 内为常数.

**证明.** 由于 $C_1,\ldots,C_m$ 是有限分割，所有这些分组的并组成一个 $\sigma$-代数；它包含每个 $C_j$. 反过来，$\sigma(C_1,\ldots,C_m)$ 必须包含每个 $C_j$ 以及它们的任意有限并. 因此

$$
\mathcal G=\sigma(C_1,\ldots,C_m)
=\left\{\bigcup_{j\in J}C_j:J\subseteq\{1,\ldots,m\}\right\}.
$$

若 $h$ 在每组内为常数，那么任意 Borel 集 $B$ 的原像 $h^{-1}(B)$ 都是若干整组的并，故属于 $\mathcal G$，所以 $h$ 可测. 反过来，若同组中存在 $\omega,\omega'$，使 $h(\omega)<h(\omega')$，取严格介于两值之间的 $c$. 事件 $\{h\le c\}$ 包含该组中的一个点却不包含另一个点，不是若干整组的并，因而不属于 $\mathcal G$，与 $h$ 的可测性矛盾. 证毕.

| 完整情景 | 此刻已知信号 | 之后价格变化（美元/股） | 规则甲持仓（股） | 规则乙持仓（股） |
|---|---|---:|---:|---:|
| $u+$ | $u$ | +2 | 2 | 1 |
| $u-$ | $u$ | −2 | 2 | −1 |
| $d+$ | $d$ | +2 | 0 | 1 |
| $d-$ | $d$ | −2 | 0 | −1 |

规则甲由当前信号决定，毛损益依次为 `4、−4、0、0` 美元. 规则乙在同组内随未来涨跌改变；表中的每情景盈利2美元依赖尚未获得的信息.

<span id="qt07-predictable-holdings"></span>

## 离散可预测持仓

规定离散时点 $0,1,\ldots,T$，$S_k$ 是时点 $k$ 已经取得的价格记录. 我们把 $H_k$ 定义为在区间 $(k-1,k]$ 内保持的股数. 这里先采用理想化约定：在 $k-1$ 时点观察并决定后，能够立即按指定价格完成调仓，没有成交延迟.

**定义（离散可预测持仓）.** 若对每个 $k\ge1$，$H_k$ 都是 $\mathcal F_{k-1}$-可测的，则称 $H$ 为离散可预测过程.[^tropp-predictable]

在上述无分配的理想执行模型中，股票价格变化带来的毛增益为

$$
G_n=\sum_{k=1}^{n}H_k(S_k-S_{k-1}).
$$

量纲是“股 × 美元/股 = 美元”. 价格变化不是收益率，$H_k$ 也不是无量纲资金权重；若换成权重模型，必须另外给出财富分母.

若令 $H_k=\operatorname{sgn}(S_k-S_{k-1})$，增益项变成绝对价格变化. 该持仓对 $\mathcal F_k$ 可测；当价格变化在 $k-1$ 尚未确定时，它对 $\mathcal F_{k-1}$ 不可测，无法用于承担本期变化.

存在成交延迟时，**execution/fill** 标记实际成交，**fill report received** 标记系统收到成交回报，**booking** 标记回报写入本地账本，**settlement** 标记证券与资金交收. 决策确定目标 $q^*$，实际数量 $\Delta q$ 由成交确定. 经济敞口在execution时改变，本地已知持仓在回报或记账后更新. 核账按execution重建敞口，可用资金按交收规则计算.

信号移一行只有在行索引、信息可得时间和成交事件确定后才有执行含义. 信息条件之外，成交还受资金、交易权限、价格与数量约束.

<span id="qt07-trade-ledger"></span>

## 成交与经济账本

设价格单位为美元/股，初始现金1,000美元、持股0；利息、税和分配均为0，禁止借款和卖空. 收到价格100的完整记录后决定买入2股，随后以103成交2股，入场费1美元，之后按105估值.

把这一过程记为 `E0–E6`：

| 事件  |  发生什么  |  经济上的实际持股  |  本地已记账持股 |
| --- | --- | ---: | ---: |
| E0 observation  |  完整价格记录 100 已取得  |  0  |  0 |
| E1 decision  |  目标变成买 2 股  |  0  |  0 |
| E2 order submitted  |  指令已发出，是否成交仍未知  |  0  |  0 |
| E3 execution/fill  |  实际买到 2 股，每股 103  |  2  |  0 |
| E4 fill report received  |  系统收到“2 股 @ 103”的回报  |  2  |  0 |
| E5 booking  |  本地账本把成交写入持仓记录  |  2  |  2 |
| E6 valuation  |  后续按 105 估值  |  2  |  2 |

成交后经济现金为 $C^{econ}=1000-2\times103-1=793$ 美元. 按103标记时股票206、总值999；按105标记时股票210、总值1,003. 两股承担103至105的变化，增益4美元，扣入场费后标记损益3美元. 经济现金记录交易结果，可提取金额另受交收时间约束.

**命题（单次成交的经济账本恒等式）.** 设 execution 前模型经济现金和股数为 $C^-,q^-$，实际有符号成交量为 $\Delta q$（买入为正），成交价为 $P^{exec}$，费用为 $\kappa\ge0$. 若无外部资金流入流出，并采用“成交时确认交易经济效果”的本篇账本约定，则

$$
q^+=q^-+\Delta q,\qquad C^+=C^- -P^{exec}\Delta q-\kappa.
$$

在前后均采用同一个固定标记价 $M$ 时，$V=C+Mq$ 满足

$$
V^+-V^-=(M-P^{exec})\Delta q-\kappa.
$$

**证明.** 把股数和现金更新式代入 $C^++Mq^+-(C^-+Mq^-)$，抵消 $C^-$ 与 $Mq^-$，得 $(M-P^{exec})\Delta q-\kappa$. 当 $M=P^{exec}$ 时，价值减少 $\kappa$；标记价与成交价有差异时，另计执行差额. 等式逐路径成立.

若把成交价错记为100，现金变成799，后续价值变成1,009，比实际账本多 $2(103-100)=6$. 价格100对应的事件早于订单生成，这6美元来自成交时间与价格的错配.

再改变一个真实执行中必须面对的输入：假设目标仍为 2 股，却只成交 1 股，费用仍为每笔已发生入场 1 美元. 现金变成 896，后续价值为 $896+105=1001$，标记损益 1 美元. 不能继续用目标 2 股计算收益. 若完全没有成交，本实验不收费用，现金和价值都是 1,000.

买入2股后以105全部卖出，另付1美元退出费，最终现金1,002，已实现净损益2美元；只成交1股后同样退出，最终现金1,000. 退出费用解释了标记损益与最终净损益的差额.

<span id="qt07-training-clock"></span>

<div data-experiment-slot="lab-qt07"></div>

## 训练与标签时点

输入标准化使用全样本均值、参数选择使用测试期结果，都会把较晚信息放进较早的信号. 下单时间合法仍可能存在模型输入泄漏.

滚动验证在每个预测起点用当时已取得的数据训练，再预测后续观测. 验证窗口匹配预先选定的单步或多步预测期限.[^fpp-cv]

更具体地，设第 $s$ 个训练样本的特征实际就绪时点为 $b_s$，目标标签就绪时点为 $\ell_s$. 在时点 $t$ 拟合模型时，样本至少要满足 $b_s\le t$ 且 $\ell_s\le t$；预处理参数、训练选择和版本选择也必须只使用届时允许的信息. 若目标是未来五天累计收益，样本起点早于 $t$ 不足以证明标签已经完整出现. 这就是前面的信息约束在训练数据上的应用.

首次发布值与最终估计值对应不同预测目标. 若目标取最终估计，历史训练样本的标签可得时点取该估计实际公布时点.

<span id="qt07-self-check"></span>

## 练习与解析

**题一：解释与证明.** 表中规则乙在第二阶段结束后已经知道所有持仓数字. 为什么这不能说明它可用于赚取第二阶段的价格变化？用分组判据回答.

**解析.** 承担第一阶段至第二阶段变化的持仓需对 $\mathcal F_1$ 可测. 乙在 $C_u$ 和 $C_d$ 内分别取不同值，不满足同组常值判据；第二阶段结束后它才对 $\mathcal F_2$ 可测.

**题二：迁移计算.** 初始现金 1,000；目标买 2 股，但只在 104 成交 1 股，入场费 1；之后按 102 估值. 再假设全部按 102 卖出，退出费 1. 分别求标记价值和最终现金.

**解析.** 成交后现金 $1000-104-1=895$，实际持股1；标记价值 $895+102=997$，损益−3. 卖出并扣退出费后，现金 $895+102-1=996$，净损益−4.

**题三：信息时间迁移.** 一条发布记录 08:30:00 公开，假设系统 08:30:05 才收到，08:30:06 完成计算. 08:30:03 的决定能否用它？08:30:05 的决定呢？

**解析.** 原始数据在08:30:05进入系统，计算在08:30:06完成，依赖该结果的决定排在计算完成后. 可测性表示结果是已有信息的函数，计算耗时另约束执行时点.

[^mit-info]: MIT 6.436J/15.085J，Fall 2018，Lecture 1，[Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf)，§4.1，印刷 pp.6–7（重点 p.7）.
[^mit-filtration]: MIT 6.436/15.085，Lecture 25，讲授 Yury Polyanskiy、课堂参与者记录，[Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf)，§0 Background，pp.1–2.
[^tropp-predictable]: Joel A. Tropp，*Probability Theory & Computational Mathematics*，Fall 2024，2025-01-23 版；[Lecture 24, Definition 24.1](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf#page=363)，印刷 p.348／PDF p.363.
[^fpp-cv]: Rob J Hyndman、George Athanasopoulos，[FPP3 §5.10：Time series cross-validation](https://otexts.com/fpp3/tscv.html)，逐次前移预测起点及单步、多步预测期限.
[^bea-adv]: U.S. BEA，[2020Q2 Advance Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update)，2020-07-30，页首 08:30 EDT 与开篇 −32.9%.
[^bea-second]: U.S. BEA，[2020Q2 Second Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter)，2020-08-27，页首 08:30 EDT、开篇及 Updates to GDP.
[^alfred]: Federal Reserve Bank of St. Louis，[ALFRED Help](https://alfred.stlouisfed.org/help)，数据更新、Release Dates 及日期确定顺序.
