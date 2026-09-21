{
  "title": "计数过程与 Poisson 基准",
  "description": "从全部微秒时间记录复算计数和等待，建立有信息条件的 Poisson 基准。",
  "layout": "entry",
  "notebookid": "zh-qt14",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt14"
}

<a id="qt14-records"></a>
## 先数真实记录，再谈模型

我们取 Binance 的 ETHBTC 现货逐笔成交档案，观察 2025 年 1 月 2 日 UTC 的第一个小时：$[00{:}00,01{:}00)$。这是预先指定的一段描述性窗口，不是挑一段像 Poisson 的图。每条记录有 trade ID、价格、数量、报价资产数量、时间戳及两个布尔字段。价格单位是 BTC/ETH，数量单位是 ETH；此日期的现货时间戳用 Unix 微秒，而不是毫秒。不同 ID 即使时间戳相同，也不能删成一条。[^binance]

本篇的任务是从这些字段建立计数、等待时间与时间单位，然后用一个条件明确的 Poisson 模型作比较。只需基本概率、条件期望以及过滤表示信息的含义。

| trade ID | 价格（BTC/ETH） | 数量（ETH） | Unix 微秒 |
| --- | --- | --- | --- |
| 482524746 | 0.03553000 | 0.00560000 | 1735776004130016 |
| 482524747 | 0.03552000 | 1.00000000 | 1735776015196046 |

第一条记录在窗口开始后约 4.130016 秒。这个“4.13 秒”不是我们观测到一个无删失的新等待：窗口开始前的上一笔成交没有包含进来。相同地，窗口结束后的下一笔也未知。数据附件保留这一小时全部 3,291 条记录的 trade ID 与微秒时间字段，并附固定窗口规则、逐秒/逐分钟计数和内部相邻间隔。价格与数量只在上面的实际原行节选中展示；计数和等待实验不需要这些列，也没有给它们补造数值。下列汇总均可从完整时间投影复算，不来自一分钟计数的反推。

<a id="qt14-counts"></a>
## 两种时间区间约定不要混写

对严格递增的模型到达时刻 $0<T_1<T_2<\cdots\to\infty$，定义

$$
N_t=\sum_{j\ge1}\mathbf1_{\{T_j\le t\}},
\qquad N(a,b]=N_b-N_a.
$$

这是理论右连续计数过程的约定。本数据的截窗和分箱则固定为左闭右开 $[a,b)$：时间戳恰在下一分钟开始处，就归入下一箱。真实记录时间精度有限；模型的严格递增到达时刻与数据库里的重复时间戳不是同一个对象。记录相同只能说明无法用这一字段区分次序，不能证明潜在连续事件真的同时发生。

以窗口起点为 $u_0$，对每条微秒时间戳 $u_i$，计算秒偏移 $t_i=(u_i-u_0)/10^6$。宽度为 $\Delta$ 秒时，箱号是 $\lfloor t_i/\Delta\rfloor$，仅保留 $0\le t_i<3600$。于是

$$
\widehat\lambda=\frac{3291}{3600}
=0.914166667\quad\text{笔/秒}.
$$

这是窗口总数除以时长的描述量。改用分钟，数值为 $54.85$ 笔/分钟；改变的是单位，不是交易强度突然变了六十倍。

<a id="qt14-poisson"></a>
## Poisson 模型究竟多要求了什么

令 $N_0=0$，$N$ 为右连续计数过程。齐次 Poisson 过程的强度为 $\lambda>0$，是指不相交时间区间的增量独立，而且对 $s<t$，

$$
P(N_t-N_s=k)
=e^{-\lambda(t-s)}\frac{[\lambda(t-s)]^k}{k!},
\qquad k=0,1,\ldots.
$$

我们采用自然过滤 $\mathcal F_s=\sigma(N_u:u\le s)$。若扩大过滤，必须仍要求未来增量独立于 $\mathcal F_s$。例如一开始就告诉观察者 $N_T$，即使过程无条件的计数分布没变，下面的条件均值结论也可能被破坏。[^poisson]

由独立增量，

$$
E[N_t-N_s\mid\mathcal F_s]=\lambda(t-s).
$$

因此 $M_t=N_t-\lambda t$ 适应、可积，且

$$
E[M_t\mid\mathcal F_s]
=N_s+\lambda(t-s)-\lambda t=M_s.
$$

这完整证明了补偿过程为鞅。我们减去的是已指定模型的期望到达量，不是从同一窗口拟合一个均值以后就让真实残差自动变成鞅。

首等待 $T_1$ 的尾概率也立即可算：

$$
P(T_1>t)=P(N_t=0)=e^{-\lambda t}.
$$

故 $T_1\sim\operatorname{Exp}(\lambda)$，其均值 $1/\lambda$。关键依据是零计数的完整概率，不是单凭 $E[N_t]=\lambda t$。

<a id="qt14-arrivals-proof"></a>
## 从指数间隔反过来构造：还要证明联合增量

取独立同分布的 $E_j\sim\operatorname{Exp}(\lambda)$，令 $T_n=E_1+\cdots+E_n$。先排除有限时点发生无穷多次到达。对任何 $\theta>0$，

$$
\begin{aligned}
P(T_n\le T)
&\le e^{\theta T}E[e^{-\theta T_n}]\\
&=e^{\theta T}
\left(\frac{\lambda}{\lambda+\theta}\right)^n\longrightarrow0.
\end{aligned}
$$

由于 $\{T_n\le T\}$ 递减，所有 $T_n$ 都落在固定 $[0,T]$ 内的概率为零。再对正整数 $T$ 取可数并，得到无爆炸。

现在固定 $0=t_0<\cdots<t_m=T$，要求第 $j$ 段恰好有 $n_j$ 次到达，令 $n=\sum n_j$。对有序到达位置 $0<s_1<\cdots<s_n<T$，前 $n$ 个指数密度相乘，再乘下一次等待超过 $T-s_n$ 的概率，得到

$$
\lambda^n e^{-\lambda s_n}
 e^{-\lambda(T-s_n)}=\lambda^n e^{-\lambda T}.
$$

在每段各自的有序单纯形上积分，体积为 $\prod_j(\Delta t_j)^{n_j}/n_j!$，所以联合概率是

$$
\prod_{j=1}^m
 e^{-\lambda\Delta t_j}
 \frac{(\lambda\Delta t_j)^{n_j}}{n_j!}.
$$

它同时给出各段的 Poisson 分布和独立性，而不只是终点 $N_T$ 的边际。反过来，计数的所有有限维分布决定到达时刻的联合分布，因为 $\{T_j>t\}=\{N_t<j\}$。因此这个构造也说明 Poisson 过程的间隔具有上述独立指数律。这里不需要调用未证明的 strong Markov 定理。

<a id="qt14-observed"></a>
## 把基准放回这一小时

| 描述对象 | 箱数/间隔数 | 平均数 | 样本方差/零间隔 |
| --- | --- | --- | --- |
| 每秒计数 | 3600 | 0.914166667 | 51.166012087 |
| 每分钟计数 | 60 | 54.85 | 6364.977118644 |
| 内部等待时间 | 3290 | 1.092549621 秒 | 1880 个零间隔 |

方差使用“箱数减一”的样本分母。齐次 Poisson 的理论均值与方差相等；这里分钟样本方差远大于均值。1 秒箱中有 $2901/3600\approx80.58\%$ 没有成交，而用全窗估计的强度代入 Poisson，零计数概率约为 $40.09\%$。均值相同绝不等于分布相同。

内部相邻记录共有 3290 个间隔，其中 1880 个为零，平均约 1.09255 秒。不要把这个内部平均数直接当作无删失的 $1/\lambda$ 估计，也不要删除零间隔后悄悄改变研究对象。计数的过度离散可能来自时变强度、共同订单的记录批次、依赖、精度或多个因素；仅凭一个 Fano 比不能识别唯一机制。

<div data-experiment-slot="EXP-QT14-ARRIVAL-01"></div>

先看分钟时间线的峰值，再比较“窗口总数/时长”和逐箱计数。界面中的 Poisson 参照始终是模型预测；真实秒级、分钟级柱子和内部等待分布都从同一份完整时间投影计算。零间隔单列，不用连续密度图把它抹掉。

这个数据档案是后续下载的历史记录。官方说明日档次日可用且可能修订；这里没有重建当日某一交易者收到消息的精确时钟，也不把记录时间戳当作我们的 received time。[^binance]

<a id="qt14-exercise"></a>
## 迁移题与解析

**题目。** 用每秒强度预测十秒内零成交的概率，然后解释为什么不能把这个概率叫作本窗口已验证的未来预测。再假定 $\mathcal F_0$ 额外包含 $N_{60}$，说明补偿鞅证明哪一步失效。

**解析。** 齐次模型给 $e^{-10\widehat\lambda}\approx0.0001071$。这个数是把拟合强度代回强假设后的计算；窗口分箱已经显示该基准与记录的明显差异，参数拟合和模型检验又用同一数据，尚无独立未来验证。

在扩大后的过滤中，$N_{60}$ 已知，故 $E[N_{60}\mid\mathcal F_0]=N_{60}$，通常不等于固定的 $60\lambda$。独立于过去计数不等于独立于任意额外信息。失效的是条件均值步骤，后面减去 $\lambda t$ 的代数没有错。

[^poisson]: Hao Wu，MIT 18.445，[Lecture 20: Poisson process](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf)，2015-04-29，7 张教学 slides。指数间隔的联合密度证明在本篇完整给出；讲义的 strong Markov 陈述不是这里采用的证明。
[^binance]: Binance，[Public Data README](https://github.com/binance/binance-public-data)，Spot/Trades、availability、Updates；[2025-01-02 ETHBTC 原日档](https://data.binance.vision/data/spot/daily/trades/ETHBTC/ETHBTC-trades-2025-01-02.zip)。固定窗口统计与分钟计数来自 2026-09-21 冻结档，不能据此保证未来档案永不修订。

