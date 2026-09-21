{
  "title": "计数过程与 Poisson 基准",
  "description": "从完整微秒成交记录复算计数与内部等待，并在给定过滤下建立 Poisson 基准.",
  "layout": "entry",
  "notebookid": "zh-qt14",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt14"
}

<a id="qt14-records"></a>
## ETHBTC成交记录

取 Binance 的 ETHBTC 现货逐笔成交档案，固定观察 2025 年 1 月 2 日 UTC 的第一个小时 $[00{:}00,01{:}00)$. 每条记录有 trade ID、价格、数量、报价资产数量、时间戳及两个布尔字段. 价格单位为 BTC/ETH，数量单位为 ETH；该日期的现货时间戳使用 Unix 微秒. 时间戳相同而 trade ID 不同的记录仍分别计数.[^binance]

| trade ID | 价格（mBTC/ETH） | 数量（mETH） | Unix微秒 |
|---|---:|---:|---|
| 482524746 | 35.53 | 5.6 | 1735776004130016 |
| 482524747 | 35.52 | 1,000 | 1735776015196046 |

第一笔在窗口开始后约4.13秒. 窗口外相邻成交未纳入，因此边界等待被截断. 附件保留一小时3,291笔的trade ID、微秒时间及分箱统计；上表价格与数量分别换算为mBTC和mETH，1m单位等于0.001原单位.

<a id="qt14-counts"></a>
## 计数与分箱

对严格递增的模型到达时刻 $0<T_1<T_2<\cdots\to\infty$，定义

$$
N_t=\sum_{j\ge1}\mathbf1_{\{T_j\le t\}},
\qquad N(a,b]=N_b-N_a.
$$

理论计数采用 $(a,b]$，数据截窗与分箱采用 $[a,b)$，恰落在下一分钟起点的记录进入下一箱. 重复时间戳表示当前精度无法区分到达先后，逐笔记录仍分别计数.

以窗口起点为 $u_0$，对每条微秒时间戳 $u_i$，计算秒偏移 $t_i=(u_i-u_0)/10^6$. 宽度为 $\Delta$ 秒时，箱号是 $\lfloor t_i/\Delta\rfloor$，仅保留 $0\le t_i<3600$. 于是

$$
\widehat\lambda=\frac{3291}{3600}
\approx0.914\quad\text{笔/秒}.
$$

同一窗口强度换算为54.85笔/分钟.

<a id="qt14-poisson"></a>
## Poisson过程与补偿鞅

令 $N_0=0$，$N$ 为右连续计数过程. 齐次 Poisson 过程的强度为 $\lambda>0$，是指不相交时间区间的增量独立，而且对 $s<t$，

$$
P(N_t-N_s=k)
=e^{-\lambda(t-s)}\frac{[\lambda(t-s)]^k}{k!},
\qquad k=0,1,\ldots.
$$

取自然滤过 $\mathcal F_s=\sigma(N_u:u\le s)$. 扩大滤过后若仍要使用独立增量的条件期望，需要未来增量独立于新增信息.[^poisson]

由独立增量，

$$
\mathbb{E}[N_t-N_s\mid\mathcal F_s]=\lambda(t-s).
$$

因此 $M_t=N_t-\lambda t$ 适应、可积，且

$$
\mathbb{E}[M_t\mid\mathcal F_s]
=N_s+\lambda(t-s)-\lambda t=M_s.
$$

这证明模型中的补偿过程是鞅. 经验残差 $N_t-\widehat\lambda t$ 使用同窗估计参数，其条件均值需另行检验.

首等待 $T_1$ 的尾概率也立即可算：

$$
P(T_1>t)=P(N_t=0)=e^{-\lambda t}.
$$

故 $T_1\sim\operatorname{Exp}(\lambda)$，均值为 $1/\lambda$.

<a id="qt14-arrivals-proof"></a>
## 指数间隔构造

取独立同分布的 $E_j\sim\operatorname{Exp}(\lambda)$，令 $T_n=E_1+\cdots+E_n$. 先排除有限时点发生无穷多次到达. 对任何 $\theta>0$，

$$
\begin{aligned}
P(T_n\le T)
&\le e^{\theta T}\mathbb{E}[e^{-\theta T_n}]\\
&=e^{\theta T}
\left(\frac{\lambda}{\lambda+\theta}\right)^n\longrightarrow0.
\end{aligned}
$$

由于 $\{T_n\le T\}$ 递减，所有 $T_n$ 都落在固定 $[0,T]$ 内的概率为零. 再对正整数 $T$ 取可数并，得到无爆炸.

现在固定 $0=t_0<\cdots<t_m=T$，要求第 $j$ 段恰好有 $n_j$ 次到达，令 $n=\sum n_j$. 对有序到达位置 $0<s_1<\cdots<s_n<T$，前 $n$ 个指数密度相乘，再乘下一次等待超过 $T-s_n$ 的概率，得到

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

联合概率分解给出各段Poisson分布及独立性. 反向地，$\{T_j>t\}=\{N_t<j\}$ 使计数的有限维分布确定到达时刻的联合分布，故Poisson过程的间隔为iid指数变量.

<a id="qt14-observed"></a>
## 观察记录与模型基准

| 描述对象 | 箱数/间隔数 | 平均数 | 样本方差/零间隔 |
| --- | --- | --- | --- |
| 每秒计数 | 3600 | 0.914 | 51.166 |
| 每分钟计数 | 60 | 54.85 | 6364.977 |
| 内部等待时间 | 3290 | 1.093 秒 | 1880 个零间隔 |

样本方差分母取箱数减1. 齐次Poisson的均值等于方差，而分钟记录的方差远大于均值. 每秒空箱占 $2901/3600\approx80.583\%$；代入全窗强度的Poisson空箱概率约40.085%.

3,290个内部间隔中有1,880个为零，均值约1.093秒；边界截断和时间精度改变了等待样本. 时变强度、共同订单的记录批次与到达依赖均可造成过度离散，区分这些机制需更细事件记录或分时检验.

<div data-experiment-slot="EXP-QT14-ARRIVAL-01"></div>

<a id="qt14-exercise"></a>
## 练习与解析

**题目.** 用每秒强度计算齐次Poisson模型十秒零成交概率，并与样本分箱特征比较. 若 $\mathcal F_0$ 额外包含 $N_{60}$，补偿鞅证明的哪一步改变？

**解析.** $e^{-10\widehat\lambda}\approx1.07\times10^{-4}$. 该拟合基准的每秒零计数概率远低于观测空箱比例，单一恒定强度无法解释现有分箱特征.

加入 $N_{60}$ 后，$\mathbb{E}[N_{60}\mid\mathcal F_0]=N_{60}$，通常异于 $60\lambda$；未来增量已不独立于初始信息，补偿鞅的条件期望等式失效.

[^poisson]: Hao Wu，MIT 18.445，[Lecture 20: Poisson process](https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/06c09371501eb1d7dd4c7c72c74cef5b_MIT18_445S15_lecture20.pdf)，2015-04-29，7 张教学 slides.
[^binance]: Binance，[Public Data README](https://github.com/binance/binance-public-data)，Spot/Trades、availability、Updates；[2025-01-02 ETHBTC 原日档](https://data.binance.vision/data/spot/daily/trades/ETHBTC/ETHBTC-trades-2025-01-02.zip). 固定窗口统计与分钟计数绑定 2026-09-21 冻结档；官方档案仍可能后续修订.
