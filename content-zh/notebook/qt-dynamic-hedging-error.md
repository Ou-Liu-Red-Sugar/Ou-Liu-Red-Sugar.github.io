{
  "title": "离散动态对冲：从现金账到误差分布",
  "description": "沿指定价格路径复算自融资现金账，再用十二组实验比较再平衡频率、费用和对冲误差.",
  "layout": "entry",
  "notebookid": "zh-qt24",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-qt24"
}

卖出欧式看涨式负债后，delta 调仓同时改变股票与现金账户；借款利息、价差、终点清仓和合约支付都进入同一自融资账本.以下先逐行复算冻结路径，再在共同随机路径上比较再平衡频率与费用；Black–Scholes 定价与连续复制另列为独立分支.

<a id="qt24-contract"></a>
## 模型合同

实验 `EXP-HEDGE-01`设可交易资产 $S$ 在 $Q$ 下满足 $dS_t=rS_tdt+\sigma S_tdW_t$，$S_0=100,r=0.03,\sigma=0.2$. 卖出欧式看涨式合约，$K=100$、乘数100、期限30/365年，支付 $100(S_T-K)^+$. 同一模型用于定价与路径生成.

模型允许分数股、对称连续复利借贷，无分红及借款上限；各网格点以中价加减半价差立即足量成交，此后不注资，负现金计息.

模型权利金约240.958美元，每单位支付价格约2.41. 默认期限等分16个区间，半价差5bp，即 $c=5\times10^{-4}$，完整价差10bp.

设 $\tau=T-t$. 调仓所用公式是

$$
\begin{gathered}
d_1(t,s)=\frac{\log(s/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt\tau},\\
q_t=m\Phi(d_1(t,s)),\quad t<T.
\end{gathered}
$$

$\Phi$ 为标准正态分布函数. 初始每单位delta约0.529，对应52.857股. 到期直接清仓，置 $q_n=0$.[^bs]

<a id="qt24-ledger"></a>
## 自融资现金递推

用 $C_k$ 表示在 $t_k$ 完成本次交易后的现金，$q_k$ 表示随后持有的股数，服务于 $(t_k,t_{k+1}]$. 从上一行到当前行，先让旧现金增长为 $C_{k-1}e^{r\Delta t_k}$，再按当前信息决定目标股数；实际成交变化是 $\Delta q_k=q_k-q_{k-1}$. 于是

$$
\begin{aligned}
C_k^-&=C_{k-1}e^{r\Delta t_k},\\
\mathrm{fee}_k&=cS_k|\Delta q_k|,\\
C_k&=C_k^- -S_k\Delta q_k-\mathrm{fee}_k.
\end{aligned}
$$

买入价 $S_k(1+c)$、卖出价 $S_k(1-c)$，等价于中价成交额另计半价差费用.

同一时点按中间价标记资产，就有

$$
C_k+q_kS_k=(C_k^-+q_{k-1}S_k)-\mathrm{fee}_k.
$$

换仓时中价净资产减少费用，现金利息单独入账. 起点收权利金后开仓，终点清仓后扣合约支付，误差为

$$
\varepsilon=C_n-m(S_T-K)^+.
$$

正误差为清算余额，负误差为不足金额. 权利金已计入初始现金，期间借款另影响资金需求.

<a id="qt24-hand"></a>
## 四价格路径

先取独立指定的手算路径 $100\to102\to101\to104$，分为三个相等区间，每段 $10/365$ 年，半价差仍为 5 bps.该路径与后文 8192 条模拟路径的索引无关.

起点买入 $52.857$ 股，中间价交易额约 $5285.688$，费用约 $2.643$. 所以

$$
\begin{aligned}
C_0&\approx240.958-5285.688\\
&\quad-2.643\\
&\approx-5047.373.
\end{aligned}
$$

下一时点借款利息约4.15美元，价格102，目标68.492股，增持15.635股. 下表使用未舍入输入计算后统一展示：

| 步 | 模型中价 | 成交股数 | 利息 | 半价差成本 | 成交后股数 | 成交后现金 | 本步支付 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 100 | 52.857 | 0 | 2.643 | 52.857 | -5047.373 | 0.00 |
| 1 | 102 | 15.635 | -4.15 | 0.797 | 68.492 | -6647.114 | 0.00 |
| 2 | 101 | -5.111 | -5.466 | 0.258 | 63.381 | -6136.595 | 0.00 |
| 3 | 104 | -63.381 | -5.046 | 3.296 | 0 | 446.666 | 400.00 |

成交后现金的最大借款出现在第10天：

$$
\mathrm{Borrow}^{\mathrm{after\ trade}}_{\max}
\approx6647.114\text{ 美元}.
$$

但第 20 天要先让上一步的负现金计息，再卖出股票. 卖出发生以前，现金已经变成

$$
-6647.114\,e^{0.03(10/365)}
\approx-6652.58.
$$

全部现金事件中的最大借款为

$$
\mathrm{Borrow}^{\mathrm{cash\ events}}_{\max}
\approx6652.58\text{ 美元},
$$

峰值发生于第20天计息后、卖股前，授信额度据此检查.

第三行到最后一行，先计旧现金利息，再以模型买卖价差卖清 $63.381$ 股. 清仓后现金 $446.666$；到期支付 $100(104-100)=400$，所以剩余

$$
\varepsilon\approx446.666-400=46.666\text{ 美元}.
$$

<a id="qt24-comparison"></a>
## 频率与费用

这里用 PCG64 的固定种子 15161724 一次生成 $8192\times256$ 个标准正态数. 先在归一化时间 $u\in[0,1]$ 上形成最细 Brownian 网格，再用 $t=Tu$、$\sqrt T W_u$ 生成 $Q$ 模型价格. 4、16、64、256 个区间都从同一条最细路径抽取；同一行路径索引在十二个设计中始终对应同一段价格历史.

下表是 $\sqrt{N^{-1}\sum_{i=1}^N\varepsilon_i^2}$，即相对于完全复制目标零误差的 RMSE，单位美元. 它既包含均值偏离，也包含离散程度，不等同于样本标准差.

| 等距模型区间数 | 0 bps RMSE（美元） | 5 bps RMSE（美元） | 20 bps RMSE（美元） |
| --- | --- | --- | --- |
| 4 | 93.74 | 94.553 | 100.945 |
| 16 | 47.916 | 49.774 | 68.512 |
| 64 | 24.91 | 31.54 | 79.354 |
| 256 | 12.779 | 34.914 | 129.882 |

无费用时RMSE随网格细化下降；半价差5bp时，256区间RMSE高于64区间；20bp时频繁调仓的费用增加更明显.

对于预定的同一个 delta 目标，如果费用没有反过来改变持仓，令 $D_k=C_k^{(0)}-C_k^{(c)}$. 两套账相减给

$$
\begin{gathered}
D_k=e^{r\Delta t_k}D_{k-1}+\mathrm{fee}_k,\\
\varepsilon^{(0)}-\varepsilon^{(c)}
=\sum_{k=0}^n e^{r(T-t_k)}\mathrm{fee}_k.
\end{gathered}
$$

差额式逐路径包含初始与终点费用. 资金约束若改变目标持仓，两方案的持仓差也进入损益差额.

<a id="qt24-distribution"></a>
## 误差分布

16区间、5bp下，误差均值约−11.026美元、样本标准差48.54美元，5%和95%分位数约−92.698、67.19美元，均值的Monte Carlo标准误约0.536美元.

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

按共同路径计算 $L_i=\varepsilon_{i,256,5}^2-\varepsilon_{i,64,5}^2$，均值约224.19美元²，MCSE约18.953美元². 样本标准差分母为N−1，MSE分母为N，分位数使用线性插值.

<div data-experiment-slot="EXP-HEDGE-01"></div>

<a id="qt24-real-rules"></a>
## XSP规则

Cboe 的 XSP 规则规定，XSP 是 SPX 的十分之一，乘数为100美元，欧式行权，行权结算产生现金交付，现金在到期后的下一个营业日交付. XSP 本身是指数，不是可以按上述 $q_k$ 买入的“XSP 股票”. [^xsp]

将账本用于XSP对冲时，需指定可交易证券或期货，再加入转换比例、基差、分红或展期、实际成交成本及结算时钟.[^cost]

<a id="qt24-exercise"></a>
## 练习与解析

在 $t_1=10/365$ 的第一次再平衡额外扣1美元，保持目标股数不变，终点误差减少多少？无额外初始现金时，借款上限5,000美元和6,700美元分别能否支持手算路径？

### 解析

额外费用在剩余20/365年计息，终点误差减少 $e^{0.03(20/365)}$ 美元.

5,000美元上限在初始开仓时即失效，所需借款约5,047.373美元.

6,700美元高于全部现金事件峰值6,652.58美元，支持该路径. 若额度不足，需改变目标持仓或补充资金后重算.

<section data-reading-branch="pricing">
<a id="qt24-pricing"></a>
## 定价与连续复制

用 <a class="inline-ref" href="/zh/notebook/qt-ito-formula-gbm/" data-reference="zh-qt17">Itô公式<span aria-hidden="true"> ↗</span></a>构造该call的连续自融资复制.

在 $Q$ 模型中，给定 $S_t=s$，有

$$
S_T=s\exp\left((r-\sigma^2/2)\tau+\sigma\sqrt\tau Z\right),
\qquad Z\sim N(0,1).
$$

先定义折现支付均值 $C(t,s)=e^{-r\tau}\mathbb{E}_Q[(S_T-K)^+\mid S_t=s]$. 支付非零的条件是 $Z>-d_2$，其中 $d_2=(\log(s/K)+(r-\sigma^2/2)\tau)/(\sigma\sqrt\tau)$，$d_1=d_2+\sigma\sqrt\tau$.

记正态密度为 $\phi$，用完成平方恒等式 $e^{az-a^2/2}\phi(z)=\phi(z-a)$，第一项积分成为

$$
e^{-r\tau}\mathbb{E}_Q[S_T\mathbf1_{Z>-d_2}]
=s\int_{-d_2}^{\infty}\phi(z-\sigma\sqrt\tau)dz
=s\Phi(d_1).
$$

第二项是 $Ke^{-r\tau}P(Z>-d_2)=Ke^{-r\tau}\Phi(d_2)$. 相减得到

$$
C(t,s)=s\Phi(d_1)-Ke^{-r\tau}\Phi(d_2).
$$

以下构造价值为C的自融资持仓.

直接由 $d_1-d_2=\sigma\sqrt\tau$ 可验证 $s\phi(d_1)=Ke^{-r\tau}\phi(d_2)$；代入导数后，正态密度产生的附加项抵消，得

$$
C_s=\Phi(d_1),\qquad
C_{ss}=\frac{\phi(d_1)}{s\sigma\sqrt\tau},
$$

$$
C_t=-\frac{s\sigma\phi(d_1)}{2\sqrt\tau}
-rKe^{-r\tau}\Phi(d_2).
$$

把它们代回即可逐项核对

$$
C_t+rsC_s+\frac12\sigma^2s^2C_{ss}-rC=0.
$$

现在即使在漂移为 $\mu$ 的另一个 GBM 模型中应用 Itô 公式，仍有

$$
\begin{aligned}
dC
&=C_s\,dS+\left(C_t+\tfrac12\sigma^2S^2C_{ss}\right)dt\\
&=\Delta\,dS+r(C-\Delta S)dt.
\end{aligned}
$$

取 $B_t=e^{rt}$、$\Delta_t=C_s(t,S_t)$、$\beta_t=(C-\Delta_tS_t)/B_t$. 价值满足 $\Delta_tS_t+\beta_tB_t=C$，增益满足 $dC=\Delta_t\,dS_t+\beta_t\,dB_t$，故策略自融资. 现金余额 $C-\Delta S$ 同时反映利息和调仓.

对 $t<T$ 函数光滑，$0\le\Delta\le1$，常数参数 GBM 有 $\mathbb{E}\int_0^TS_t^2dt<\infty$，所以股票增益积分可以合法取到端点；$C(t,S_t)$ 在 $t\uparrow T$ 时连续趋于 $(S_T-K)^+$. 现金漂移项也可积，例如 $C-\Delta S=-Ke^{-r\tau}\Phi(d_2)$ 有界. 这把复制从每个到期前时点延伸到支付端点.

离散再平衡和价差破坏无摩擦连续复制条件，因此终点误差由调仓离散化、现金利息和交易费用共同决定；主线账本逐项记录这些来源. [^pricing]
</section>

[^bs]: Vasily Strela，MIT 18.S096，Lecture 19，Fall 2013，slides 13–22（尤其 slide19 call/delta 公式）；[公开讲义](https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/d19208c017ada04f9261cfb41ab8d702_MIT18_S096F13_lecnote19.pdf). 数值参数来自本文具名教学模型.
[^xsp]: Cboe，*XSP Options Product Specification*，Underlying、Multiplier、Exercise Style、Settlement of Option Exercise；[官方规则](https://www.cboe.com/tradable_products/sp_500/mini_spx_options/specifications)，2026-09-21 核对.
[^cost]: Stephen Boyd、Kasper Johansson、Ronald Kahn、Philipp Schiele、Thomas Schmelzer，*Markowitz Portfolio Construction at Seventy*，2024-01-05 公开稿，§2.2–2.4、§3.4–3.5、§4.1–4.3；[原文](https://web.stanford.edu/~boyd/papers/pdf/markowitz.pdf).
[^pricing]: 正文的 Gaussian 积分与 PDE 推导用于这份 call 的复制；一般 Itô 公式及其条件见 <a class="inline-ref" href="/zh/notebook/qt-ito-formula-proof/" data-reference="zh-qt17p1">完整证明单元<span aria-hidden="true"> ↗</span></a>.
