{
  "title": "期权价格、内在价值与隐含波动率",
  "description": "解释价格因素与欧式put的迟收货款反例；在明确BSM假设下将报价区间反解为IV区间。",
  "layout": "entry",
  "notebookid": "zh-m18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m18"
}

<a id="m18-price"></a>
## 一、当前价格买到的不是“今天就行权”

一张期权的到期支付由合约给出，当前交易价却买到一段尚未结束的选择。看涨与看跌、行权价、剩余期限、行权方式和分配条款都属于这项选择的一部分。权利金因市场交易而形成，模型则回答：在一组明确假设下，哪些因素通过什么关系约束这个价格。[^MEFG-ODD]

先定义一个常用比较量。给定当前标的价 $S$，call的现时立即行权差额为 $(S-K)^+$，put为 $(K-S)^+$。它常被称作spot intrinsic value。但只有合约此刻允许行权，持有人才有权立即取得相应交换差额。欧式期权此刻没有这个动作，不能把“看起来已经价内”直接当成可以立即兑现的现金。

因此，权利金减去这个现时差额，可用来讨论价格中超出立即交换价值的部分；不能先把差值命名为“时间价值”，再从名称推出它永远非负。我们先把一个完整反例走完，再看价格模型。[^MEFG-ODD]

<a id="m18-tree"></a>
## 二、一个越晚到期反而越便宜的欧式put

下面是独立的教学树，不是SPX行情，也不是后面复制一篇的冻结市场。初始 $S_0=50$，$K=100$；每个抽象期间，股票乘以 $u=1.2$ 或 $d=0.9$，现金增长因子 $R=1.02$，无股息，允许按相同条件借贷。这里一期不是默认一年。

一期股票为60或45；两期为72、54或40.5，均低于100。定价权重由股票／现金关系得到
$$
q_{\rm tree}=\frac{R-d}{u-d}=\frac{1.02-0.9}{1.2-0.9}=0.4.
$$
因为每个终端状态的put支付都等于 $K-S_T$，只需持有到期付 $K$ 的现金、同时空一股就能复制。所以 $n$ 期欧式价格为
$$
P_E(n)=\frac{K}{R^n}-S_0.
$$

| 到期期间数 | 欧式put价格 | 当前 $K-S_0$ | 价格减当前立即行权差额 |
|---:|---:|---:|---:|
| 1 | $2450/51\approx48.039216$ | 50 | −1.960784 |
| 2 | $119950/2601\approx46.116878$ | 50 | −3.883122 |

这不是凭空“违反常识”。欧式持有人要等到到期才能取得 $K$；在此树中所有到期状态仍深度价内，选择权没有额外打开“价格高于 $K$ 就放弃卖出”的终端分支，推迟收到100的资金影响直接显现。复制关系与现金时间价值给出了价格下降，而不是一个“所有put都随期限便宜”的定理。[^MEFG-MIT-OPTIONS]

现在让同一树上的put变为每个节点都能行权的美式版本。两期末支付依次为28、46、59.5。回到第一期节点，继续持有值必须和立即行权值比较：

| 美式树节点 | 股票价 | 继续持有价值 | 立即行权价值 | 节点选择 |
|---|---:|---:|---:|---:|
| 第一期上涨 | 60 | $(0.4\times28+0.6\times46)/1.02=38.039216$ | 40 | 40 |
| 第一期下跌 | 45 | $(0.4\times46+0.6\times59.5)/1.02=53.039216$ | 55 | 55 |
| 初始节点 | 50 | $(0.4\times40+0.6\times55)/1.02=48.039216$ | 50 | 50 |

一期美式初值同样为50。美式之所以不低于立即行权差额，是因为立即行权属于它的可行决策集，而非因为所有期权都天然附带一个非负“时间价值”。这也为提前行权与分红、融资之间的比较提供了正确起点。[^MEFG-OIC-EXERCISE]

<a id="m18-factors"></a>
## 三、价格因素各自改变哪一件事

接下来固定一种合约与模型，一次只动一个变量。提高 $S$ 让按固定 $K$ 买入更有利，call价值上升，put方向相反；提高 $K$ 则让call不利、put有利。剩余时间会同时改变可等待多久和未来货款的折现，刚才的欧式put反例说明不能只看前者。

利率和股息也不是公式里的装饰。持有股票可能收分红，持有call并不会自动获得同一现金；支付行权货款的时间不同，融资成本也不同。提前行权是否值得考虑时，这两类现金差异也会进入比较。[^MEFG-OIC-EXERCISE]

本批真正拿来算数的 Kogan 单元采用**无股息**的常参数欧式模型。在这个已经读到公式的模型里，较高利率降低到期 $K$ 的现值，对call和put的作用相反。若以后要把连续股息率作为非零模型输入，应另采用明确包含该扩展的公式来源，而不是把一般现金直觉静默塞进当前公式。[^MEFG-MIT-KOGAN]

波动率的作用要多说一句。看涨与看跌的支付是凸函数。在合适的“保持均值而增加分散”的比较下，更多尾部变化可以增加这种选择的价值；仅说“某分布方差更大”，并不能在任意两个分布间无条件得出所有凸支付价格更高。BSM模型给出了一个具体可算的比较：其余参数固定，vanilla期权对波动率的vega为正。它说明这个模型中的变化方向，不是所有市场与产品的万能因果命题。[^MEFG-OIC-VEGA]

<a id="m18-model"></a>
## 四、把一个报价放进一个有条件的模型

本批使用一个完全合成的SPX尺度网格：$S=5,000$，连续复利年利率4%，**股息设为0**，期限用天数／365。零股息是教学假设，不是对S&P 500实际分红的估计。真实规格只提供每点100美元乘数与报价增量；没有取得对应某日期的历史期权链。[^MEFG-SPX]

为与实际采用的 Kogan 单元和共享输入保持完全一致，这里只写本批使用的**无股息 BSM 欧式公式**。模型进一步假定标的在连续时间服从常参数几何布朗运动
$$
dS_t=\mu S_t\,dt+\sigma S_t\,dW_t,
$$
并假定连续可交易、无摩擦、可按同一常数利率融资和对冲。复制定价消去了物理漂移 $\mu$；在风险中性表示下，标的漂移相应由 $r$ 进入价格公式。本批股息率固定为0，因此不在下面的数值公式里额外放连续股息项。[^MEFG-MIT-KOGAN]

在这些条件下：
$$
\begin{aligned}
d_1&=\frac{\log(S/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt{\tau}},\\
d_2&=d_1-\sigma\sqrt{\tau},\\
C&=S N(d_1)-Ke^{-r\tau}N(d_2),\\
P&=Ke^{-r\tau}N(-d_2)-S N(-d_1).
\end{aligned}
$$
$N$ 是标准正态分布函数。这里把公式作为明确模型的计算入口；连续时间复制的完整证明不在本篇里偷压成几句话。[^MEFG-MIT-KOGAN]

对90天、$K=5,000$、$\sigma=23.5\%$，模型call价格为256.855895点。为形成教学bid／ask，先按相应增量把中价取成256.9，再给两边各0.2点价差：

| 报价身份 | 期权点数 | 一份对应美元 | 同模型反解的IV |
|---|---:|---:|---:|
| bid | 256.7 | 25,670 | 23.4841% |
| mid | 256.9 | 25,690 | 23.5045% |
| ask | 257.1 | 25,710 | 23.5249% |

模型输入23.5%与中价反解23.5045%的细微差异来自报价取整，不是推断出另一条“真实波动率”。这一点正好提醒我们：IV是由一个价格和其他约定反解出的参数，不是额外独立观察。

<a id="m18-inversion"></a>
## 五、IV是价格的一种坐标，不是未来的保证

给定合约及本批无股息模型的 $S,K,\tau,r$，隐含波动率解决的是方程 $C_{\rm model}(\sigma)=C_{\rm quote}$。可以从较小和较大的 $\sigma$ 起步，反复二分，直到模型价格接近给定报价。买入通常面对ask，卖出面对bid；相应IV区间比只报一个中价IV更贴近交易对象。

反解前还要检查价格界。在本例无股息模型中，call的正有限波动率价格位于 $\max(S-Ke^{-r\tau},0)$ 与 $S$ 之间。若30天、$K=4,500$ 的call被输入1点，远低于模型下界，算法应拒绝给出IV，而不是挤出一个接近零的数字来掩盖不相容。

<div data-experiment-slot="EXP-MEFG-M18-IV"></div>

实验提供价格随 $\sigma$ 变化的曲线和提前行权树两个视角。选择网格中的bid、mid、ask可以看反解位置；切到put反例时，节点比较使用上面的完整 $u,d,R$，不会把它改成SPX的连续时间模型。

市场报价还会受库存、供求、成交条件和资金限制影响。把报价反解为IV有助于跨行权价、跨期限比较，但不等于证明它就是未来真实波动率或真实上涨概率；后面会把这种报价表达与研究中的风险补偿分开。

<a id="m18-exercises"></a>
## 六、从反例回到自己的判断

**题一。** 为什么一期欧式put的48.039216低于当前差额50，不构成这里的套利？

**解析。** 持有人现在没有立即以100卖出股票的权利，不能买put后今天就取得50。合约只承诺期末支付，复制需要今天存入 $100/1.02$ 并空一股，成本48.039216。将美式的立即行权操作擅自加给欧式，才制造了虚假的套利。

**题二。** 两期美式put为什么不是46.116878？请在上涨节点核一次。

**解析。** 上涨后股票60，继续持有两期末支付的折现价值38.039216，而立即行权值40；美式可取较大者40。下跌节点取55，初始继续值48.039216仍低于立即行权50，故初值50。46.116878只属于必须等待两期末的欧式版本。

**题三。** 为什么表中ask IV高于bid IV？它们是否是对未来的两个独立预测？

**解析。** 在其他BSM输入相同且vega为正时，更高期权价格需要更大的 $\sigma$ 来重现。因此两边反解出区间；它们首先表达同一交易价差，不是从两个独立样本估出的未来波动预测。

**题四。** 30天、$K=4,500$ 的call报价1点，能否输出“市场几乎确定不会波动”？

**解析。** 不能。先检查模型价格下界；该输入已与无股息、给定现价／利率的价格界不相容。可能是单位、合约、时点或输入错误，也可能模型条件不适用。在识别原因前，不应强行输出IV。

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024。[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)。本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）。

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008。[原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)。本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation。

[^MEFG-OIC-EXERCISE]: Options Industry Council，*Options Exercise FAQ*，Undated; retrieved 2026-09-21。[原文](https://www.optionseducation.org/referencelibrary/faq/options-exercise)。本篇定位：Full FAQ main body through exercise/closing distinction。

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010。[原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)。本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application。

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21。[原文](https://www.optionseducation.org/advancedconcepts/vega)。本篇定位：Full main concept body。

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown。[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)。本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes。

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

