{
  "title": "离散动态对冲：从现金账到误差分布",
  "description": "从期权delta建立股票与现金账户，逐步计算借款和复制误差，再比较调仓频率、交易费用与资金约束.",
  "layout": "entry",
  "notebookid": "zh-qt24",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt24"
}

卖出看涨期权后，收到的权利金与到期支付之间存在价格风险. 卖方可以持有股票来对冲，并随股价和剩余期限调整持股数；每次买卖同时改变现金余额，产生交易费用. 把初始权利金、股票买卖、现金利息和到期支付记入同一账户，就能计算对冲需要多少借款，以及最后还剩多少盈亏.

<a id="qt24-contract"></a>
## 对冲合同与实验变量

实验 `EXP-HEDGE-01` 设可交易资产 $S$ 在 $Q$ 下满足 $dS_t=rS_tdt+\sigma S_tdW_t$，$S_0=100,r=0.03,\sigma=0.2$. 卖出的欧式看涨期权取 $K=100$、乘数100、期限30/365年. 模型允许分数股、对称连续复利借贷，无分红及借款上限；各网格点以中价加减半价差立即足量成交，此后不注资，负现金按同一利率计息.

用 $V(t,s)$ 表示每单位期权价格，delta 定义为 $\Delta=\partial V/\partial s$. 在固定时刻，股价小幅变化 $\mathrm{d}s$ 时，每单位期权价格的一阶变化约为 $\Delta\,\mathrm{d}s$. 卖出乘数为 $m$ 的一份期权，敞口为 $-m\Delta$；持有 $m\Delta$ 股可抵消这一局部价格变化. 股价和剩余期限改变后，delta 也随之改变，因此持仓需要再平衡.

初始模型价格为每单位约2.41美元，对应权利金240.958美元. 设 $\tau=T-t$，Black–Scholes 模型给出的 delta 为 $\Phi(d_1)$，推导见 [定价与连续复制](#qt24-pricing). 调仓目标为

$$
\begin{gathered}
d_1(t,s)=\frac{\log(s/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt\tau},\\
q_t=m\Phi(d_1(t,s)),\quad t<T.
\end{gathered}
$$

$\Phi$ 为标准正态分布函数，$m=100$. 初始每单位 delta 约0.529，因此要持有52.857股；到期直接清仓，置 $q_n=0$.[^bs] 默认期限等分16个区间，半价差5bp，即 $c=5\times10^{-4}$，完整价差10bp.

后文的8,192条价格路径也由这个 $Q$ 模型生成. 用同一批路径比较再平衡区间数4、16、64、256和半价差0、5、20 bps的十二种组合，其余合同和路径生成规则保持一致.

<a id="qt24-ledger"></a>
## 单路径现金账

用 $C_k$ 表示在 $t_k$ 完成本次股票交易后的现金，$q_k$ 表示随后持有的股数，$\Delta t_k=t_k-t_{k-1}$. 初始建仓前，现金为收到的权利金 $C_0^-=mV(0,S_0)$，股票为 $q_{-1}=0$. 在 $t_0$ 按 $q_0=m\Phi(d_1(0,S_0))$ 建仓：

$$
\begin{aligned}
\mathrm{fee}_0&=cS_0|q_0|,\\
C_0&=mV(0,S_0)-S_0q_0-\mathrm{fee}_0.
\end{aligned}
$$

随后对 $k=1,\ldots,n$，旧现金先计息，再按当前价格更新持仓. 实际成交量为 $\Delta q_k=q_k-q_{k-1}$；到期取 $q_n=0$ 以清仓. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
\mathrm{fee}_k&=cS_k|\Delta q_k|,\\
C_k&=C_k^- -S_k\Delta q_k-\mathrm{fee}_k.
\end{aligned}
$$

买入价 $S_k(1+c)$、卖出价 $S_k(1-c)$，与按中价成交再单列半价差费用等价. 同一时点按中间价标记资产时，

$$
C_k+q_kS_k=(C_k^-+q_{k-1}S_k)-\mathrm{fee}_k.
$$

因此换仓本身只通过价差减少中价净资产，现金账户在两次交易之间按 $r$ 计息. 起点收权利金后建仓，终点先把股票清零，再扣除期权支付；终点误差定义为

$$
\varepsilon=C_n-m(S_T-K)^+.
$$

正误差表示清算后还有现金，负误差表示复制资金不足.

<a id="qt24-hand"></a>
把这套递推用于指定路径 $100\to102\to101\to104$. 三个区间各为 $10/365$ 年，半价差仍为5 bps；这条手算路径独立指定，与后文8,192条模拟路径的索引无关. 起点买入52.857股，中间价交易额约5285.688美元，费用约2.643美元，所以

$$
\begin{aligned}
C_0&\approx240.958-5285.688\\
&\quad-2.643\\
&\approx-5047.373.
\end{aligned}
$$

第10天先给原现金计息，价格102时目标持仓变为68.492股，因此增持15.635股. 后面的每一行都按同一顺序更新：旧现金计息、观察价格、计算目标股数、成交并支付价差费用. 下表使用未舍入输入计算后统一展示：

| 步 | 模型中价 | 成交股数 | 利息 | 半价差成本 | 成交后股数 | 成交后现金 | 本步支付 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 100 | 52.857 | 0 | 2.643 | 52.857 | -5047.373 | 0 |
| 1 | 102 | 15.635 | -4.15 | 0.797 | 68.492 | -6647.114 | 0 |
| 2 | 101 | -5.111 | -5.466 | 0.258 | 63.381 | -6136.595 | 0 |
| 3 | 104 | -63.381 | -5.046 | 3.296 | 0 | 446.666 | 400 |

只看每次成交后的余额，最大借款出现在第10天：

$$
\mathrm{Borrow}^{\mathrm{after\ trade}}_{\max}
\approx6647.114\text{ 美元}.
$$

现金约束还要检查交易之间的计息事件. 第20天卖股以前，上一步的负现金先变为

$$
-6647.114\,e^{0.03(10/365)}
\approx-6652.58.
$$

因此全部现金事件中的最大借款为

$$
\mathrm{Borrow}^{\mathrm{cash\ events}}_{\max}
\approx6652.58\text{ 美元},
$$

峰值发生在第20天计息后、卖股前. 最后一行同样先计息，再以含价差的价格卖清63.381股，得到现金446.666美元；期权到期支付 $100(104-100)=400$ 美元，于是这条路径的终点误差是

$$
\varepsilon\approx446.666-400=46.666\text{ 美元}.
$$

<a id="qt24-comparison"></a>
## 频率与费用

单路径账本给出了每条路径的 $\varepsilon$. 现在把同一递推应用到共同随机路径，改变再平衡频率与半价差，比较这些误差整体离零有多远. PCG64 固定种子15161724一次生成 $8192\times256$ 个标准正态数；先在归一化时间 $u\in[0,1]$ 上形成最细 Brownian 网格，再用 $t=Tu$、$\sqrt T W_u$ 生成模型价格. 4、16、64、256个区间都从同一条最细路径抽取，因此同一行路径索引在十二个设计中始终对应同一段价格历史.

对每种设计计算

$$
\sqrt{N^{-1}\sum_{i=1}^N\varepsilon_i^2},
$$

得到相对于零复制误差的 RMSE，单位为美元. RMSE 同时受到误差均值和误差散布影响，因此它与样本标准差含义不同.

| 等距模型区间数 | 0 bps RMSE（美元） | 5 bps RMSE（美元） | 20 bps RMSE（美元） |
| --- | --- | --- | --- |
| 4 | 93.74 | 94.553 | 100.945 |
| 16 | 47.916 | 49.774 | 68.512 |
| 64 | 24.91 | 31.54 | 79.354 |
| 256 | 12.779 | 34.914 | 129.882 |

0 bps 时，网格细化使这次实验的 RMSE 持续下降. 加入费用后，更多调仓一方面减少离散化误差，另一方面增加成交成本；5 bps 时256区间的 RMSE 已高于64区间，20 bps 时这一反转更明显.

这个费用效应可以直接从前面的现金递推推出. 若两套方案使用预定的同一个 delta 目标，费用没有反过来改变持仓，令 $D_k=C_k^{(0)}-C_k^{(c)}$. 两套账逐项相减得到

$$
\begin{gathered}
D_0=\mathrm{fee}_0,\qquad
D_k=e^{r\Delta t_k}D_{k-1}+\mathrm{fee}_k\quad(k\ge1),\\
\varepsilon^{(0)}-\varepsilon^{(c)}
=\sum_{k=0}^n e^{r(T-t_k)}\mathrm{fee}_k.
\end{gathered}
$$

每次价差费用都会以现金账户的计息方式传到终点，初始建仓和终点清仓的费用也包含在内. 这个恒等式依赖两套方案采用相同的目标持仓；若资金约束迫使 $q_k$ 改变，持仓差本身也会进入损益差额.

<a id="qt24-distribution"></a>
## 误差分布

RMSE 把全部 $\varepsilon_i$ 压缩成一个数；同一组误差还可以分开看均值、散布和尾部. 默认16区间、5 bps设计下，误差均值约−11.025美元，样本标准差48.54美元，5%和95%分位数约−92.698、67.19美元，均值的 Monte Carlo 标准误约0.536美元. 负均值表示这组模拟中的清算余额平均低于零；标准差和分位数则显示单条路径的误差范围远大于这个均值偏移.

十二个设计各有8,192个误差，使用共同分箱边界；左闭右开，末箱含右端点，箱外计数0. 附件保留完整同索引数组.

| 误差箱（美元） | 默认 16 区间 / 5 bps 路径数 |
| --- | --- |
| [-325, -300) | 1 |
| [-275, -250) | 2 |
| [-250, -225) | 4 |
| [-225, -200) | 9 |
| [-200, -175) | 17 |
| [-175, -150) | 38 |
| [-150, -125) | 91 |
| [-125, -100) | 172 |
| [-100, -75) | 371 |
| [-75, -50) | 736 |
| [-50, -25) | 1475 |
| [-25, 0) | 2000 |
| [0, 25) | 1574 |
| [25, 50) | 948 |
| [50, 75) | 464 |
| [75, 100) | 192 |
| [100, 125) | 78 |
| [125, 150) | 19 |
| [150, 175) | 1 |

共同路径还允许直接比较两个设计在同一条价格历史上的平方误差. 定义

$$
L_i=\varepsilon_{i,256,5}^2-\varepsilon_{i,64,5}^2.
$$

其样本均值约224.19美元²，MCSE约18.953美元². 每个 $L_i$ 都在同一条价格历史上比较两个设计；这组模拟中，256区间、5 bps设计的平均平方误差高于64区间、5 bps设计. 样本标准差分母为 $N-1$，MSE 分母为 $N$，分位数使用线性插值.

<div data-experiment-slot="EXP-HEDGE-01"></div>

<a id="qt24-real-rules"></a>
## 资金约束与真实合约

前面的基准实验允许无限对称借贷. 加入借款额度后，用每个现金事件后的余额核对约束，计息、股票成交和到期支付都要计入；执行一笔交易前，据预计成交后的余额判断能否足额成交. 手算路径的借款峰值为6,652.58美元. 若额度迫使实际持仓偏离目标 $q_k$，股票敞口也随之改变，需要从新的持仓继续计算现金和终点误差.

真实合约还要求把模型中的“可交易资产 $S$”落实为实际可以买卖的对冲工具. Cboe 的 XSP 规则规定，XSP 是 SPX 的十分之一，乘数为100美元，欧式行权，行权结算产生现金交付，现金在到期后的下一个营业日交付.[^xsp] XSP 本身是指数，因此模型里的 $q_k$ 不能直接解释成可以买入的“XSP 股数”. 若把这套账本用于 XSP 对冲，还要指定实际证券或期货，并给出转换比例、基差、分红或展期、实际成交成本及结算时钟，之后才能把这些项目接入同一个现金递推.[^cost]

<a id="qt24-exercise"></a>
### 练习与解析

在 $t_1=10/365$ 的第一次再平衡额外扣1美元，保持目标股数不变，终点误差减少多少？无额外初始现金时，借款上限5,000美元和6,700美元分别能否支持手算路径？

额外1美元费用会在剩余20/365年按现金账户利率传到终点，因此终点误差减少

$$
e^{0.03(20/365)}\text{ 美元}.
$$

5,000美元额度在初始开仓时即不足，所需借款约5,047.373美元. 6,700美元高于全部现金事件峰值6,652.58美元，可以支持这条路径.

<section data-reading-branch="pricing">

<a id="qt24-pricing"></a>

## 定价与连续复制

连续自融资复制使股票与现金组合在到期时恰好支付 $(S_T-K)^+$. 下面先计算期权价格 $V(t,s)$，再用 <a class="inline-ref" href="/zh/notebook/qt-ito-formula-gbm/" data-reference="zh-qt17">Itô公式<span aria-hidden="true"> ↗</span></a> 证明持有 $V_s$ 股以及相应现金即可完成复制，从而得到前文使用的 delta 规则.

在 $Q$ 模型中，给定 $S_t=s$，有

$$
S_T=s\exp\left((r-\sigma^2/2)\tau+\sigma\sqrt\tau Z\right),
\qquad Z\sim N(0,1).
$$

定义每单位期权价格

$$
V(t,s)=e^{-r\tau}\mathbb{E}_Q[(S_T-K)^+\mid S_t=s].
$$

支付非零的条件是 $Z>-d_2$，其中
$d_2=(\log(s/K)+(r-\sigma^2/2)\tau)/(\sigma\sqrt\tau)$，且 $d_1=d_2+\sigma\sqrt\tau$. 记标准正态密度为 $\phi$. 利用完成平方恒等式 $e^{az-a^2/2}\phi(z)=\phi(z-a)$，支付中的股票项为

$$
e^{-r\tau}\mathbb{E}_Q[S_T\mathbf1_{Z>-d_2}]
=s\int_{-d_2}^{\infty}\phi(z-\sigma\sqrt\tau)dz
=s\Phi(d_1).
$$

执行价项为

$$
Ke^{-r\tau}P(Z>-d_2)
=Ke^{-r\tau}\Phi(d_2).
$$

因此

$$
V(t,s)=s\Phi(d_1)-Ke^{-r\tau}\Phi(d_2).
$$

接着构造价值为 $V$ 的自融资持仓. 由 $d_1-d_2=\sigma\sqrt\tau$ 可验证

$$
s\phi(d_1)=Ke^{-r\tau}\phi(d_2).
$$

代入导数后，正态密度产生的附加项抵消，得到

$$
V_s=\Phi(d_1),\qquad
V_{ss}=\frac{\phi(d_1)}{s\sigma\sqrt\tau},
$$

以及

$$
V_t=-\frac{s\sigma\phi(d_1)}{2\sqrt\tau}
-rKe^{-r\tau}\Phi(d_2).
$$

逐项代回可得

$$
V_t+rsV_s+\frac12\sigma^2s^2V_{ss}-rV=0.
$$

若股价仍服从波动率为同一常数 $\sigma$ 的 GBM，其漂移可取任意常数 $\mu$. 应用 Itô 公式并代入上面的 PDE，得到

$$
\begin{aligned}
dV
&=V_s\,dS+\left(V_t+\tfrac12\sigma^2S^2V_{ss}\right)dt\\
&=\Delta\,dS+r(V-\Delta S)dt.
\end{aligned}
$$

取 $B_t=e^{rt}$、$\Delta_t=V_s(t,S_t)$、$\beta_t=(V-\Delta_tS_t)/B_t$. 持仓价值满足

$$
\Delta_tS_t+\beta_tB_t=V,
$$

而增益满足

$$
dV=\Delta_t\,dS_t+\beta_t\,dB_t,
$$

所以这是一套连续自融资复制. 其中现金余额 $V-\Delta S$ 本来就按无风险利率增长，现金利息属于复制机制本身.

对 $t<T$，函数光滑且 $0\le\Delta\le1$. 常数参数 GBM 有 $\mathbb{E}\int_0^TS_t^2dt<\infty$，因此股票增益积分可以合法取到端点；$V(t,S_t)$ 在 $t\uparrow T$ 时连续趋于 $(S_T-K)^+$. 现金漂移项也可积，例如

$$
V-\Delta S=-Ke^{-r\tau}\Phi(d_2)
$$

有界. 这把复制从每个到期前时点延伸到支付端点.

离散实验在每个网格点重新计算这个连续复制策略的目标股数，随后持仓保持到下一个网格点. 这段时间内 delta 的变化无法立即抵消，交易时还要支付价差；两项变化共同形成前文计算的终点误差.[^pricing]
</section>

[^bs]: Vasily Strela，MIT 18.S096，Lecture 19，Fall 2013，slides 13–22（尤其 slide19 call/delta 公式）；[公开讲义](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf).
[^xsp]: Cboe，*XSP Options Product Specification*，Underlying、Multiplier、Exercise Style、Settlement of Option Exercise；[官方规则](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications)，2026-09-21 核对.
[^cost]: Stephen Boyd、Kasper Johansson、Ronald Kahn、Philipp Schiele、Thomas Schmelzer，*Markowitz Portfolio Construction at Seventy*，2024-01-05 公开稿，§2.2–2.4、§3.4–3.5、§4.1–4.3；[原文](https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf).
[^pricing]: <a class="inline-ref" href="/zh/notebook/qt-ito-formula-proof/" data-reference="zh-qt17p1">Itô公式及其条件<span aria-hidden="true"> ↗</span></a>.
