{
  "title": "期权价格、内在价值与隐含波动率",
  "description": "解释价格因素与欧式put的迟收货款反例；在明确BSM假设下将报价区间反解为IV区间.",
  "layout": "entry",
  "notebookid": "zh-m18",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m18"
}

<a id="m18-price"></a>
## 一、现时行权差额与期权权利

期权当前价格对应剩余期限内的合约权利. 看涨或看跌、行权价、剩余期限、行权方式和分配条款共同决定这些权利；交易形成权利金，定价模型则刻画指定假设下的价格约束. [^MEFG-ODD]

给定当前标的价 $S$，call的现时行权差额为 $(S-K)^+$，put为 $(K-S)^+$，常称为spot intrinsic value. 取得这一差额还要求合约允许立即行权；欧式期权的行权日由到期条款规定.

权利金减去现时立即行权差额，通常称为时间价值. 该差值的符号依赖行权方式与资金时间，下面的欧式put给出负值的例子. [^MEFG-ODD]

<a id="m18-tree"></a>
## 二、欧式 put 的延期收款反例

下面采用独立教学树：初始 $S_0=50$，$K=100$；每个抽象期间，股票乘以 $u=1.2$ 或 $d=0.9$，现金增长因子 $R=1.02$，无股息，并允许按相同条件借贷. 每期长度仅为该树的抽象时间单位.

一期股票为60或45；两期为72、54或40.5，均低于100. 定价权重由股票／现金关系得到
$$
q_{\rm tree}=\frac{R-d}{u-d}=\frac{1.02-0.9}{1.2-0.9}=0.4.
$$
因为每个终端状态的put支付都等于 $K-S_T$，只需持有到期付 $K$ 的现金、同时空一股就能复制. 所以 $n$ 期欧式价格为
$$
P_E(n)=\frac{K}{R^n}-S_0.
$$

| 到期期间数 | 欧式put价格 | 当前 $K-S_0$ | 价格减当前立即行权差额 |
|---:|---:|---:|---:|
| 1 | $2450/51\approx48.039$ | 50 | −1.961 |
| 2 | $119950/2601\approx46.117$ | 50 | −3.883 |

这棵树的所有终端状态均低于$K$，put始终执行卖出，支付退化为$K-S_T$. 延长到期日推迟了收到$K$的时间，减少其现值，因而降低put价格. [^MEFG-MIT-OPTIONS]

现在让同一树上的put变为每个节点都能行权的美式版本. 两期末支付依次为28、46、59.5. 回到第一期节点，继续持有值必须和立即行权值比较：

| 美式树节点 | 股票价 | 继续持有价值 | 立即行权价值 | 节点选择 |
|---|---:|---:|---:|---:|
| 第一期上涨 | 60 | $(0.4\times28+0.6\times46)/1.02\approx38.039$ | 40 | 40 |
| 第一期下跌 | 45 | $(0.4\times46+0.6\times59.5)/1.02\approx53.039$ | 55 | 55 |
| 初始节点 | 50 | $(0.4\times40+0.6\times55)/1.02\approx48.039$ | 50 | 50 |

一期美式初值同样为50. 立即行权属于美式持有人的可行决策，因此美式价格不低于立即行权差额. [^MEFG-OIC-EXERCISE]

<a id="m18-factors"></a>
## 三、价格变量与现金机制

接下来固定一种合约与模型，一次只动一个变量. 提高 $S$ 让按固定 $K$ 买入更有利，call价值上升，put方向相反；提高 $K$ 则让call不利、put有利. 剩余时间会同时改变可等待多久和未来货款的折现，刚才的欧式put反例说明不能只看前者.

持有股票可收取分红，call持有人在行权前没有同一分红权；提前支付行权货款还会增加资金占用. 这两项现金差异进入提前行权的比较. [^MEFG-OIC-EXERCISE]

下文采用无股息的常参数欧式BSM模型. 在该模型中，提高利率降低到期$K$的现值，增加call价值并降低put价值. [^MEFG-MIT-KOGAN]

看涨与看跌的支付是凸函数. 在保持均值的凸序比较下，分散程度增加会提高凸支付的期望；单独比较方差不足以建立这一结论. 在BSM中，固定其余参数、增加$\sigma$给出具体的比较，vanilla期权的vega为正. [^MEFG-OIC-VEGA]

<a id="m18-model"></a>
## 四、无股息 BSM 的模型条件

下面使用SPX尺度的合成网格：$S=5,000$，连续复利年利率4%，**股息设为0**，期限按天数／365计. 这里的零股息属于模型输入；SPX规格仅用于每点100美元乘数与报价增量.[^MEFG-SPX]

这里采用共享输入对应的**无股息 BSM 欧式公式**. 模型假定标的在连续时间服从常参数几何布朗运动
$$
dS_t=\mu S_t\,dt+\sigma S_t\,dW_t,
$$
并假定连续可交易、无摩擦、可按同一常数利率融资和对冲. 复制定价消去了物理漂移 $\mu$；在风险中性表示下，标的漂移相应由 $r$ 进入价格公式. 股息率固定为0，因此下面的数值公式不再加入连续股息项.[^MEFG-MIT-KOGAN]

在这些条件下：
$$
\begin{aligned}
d_1&=\frac{\log(S/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt{\tau}},\\
d_2&=d_1-\sigma\sqrt{\tau},\\
C&=S N(d_1)-Ke^{-r\tau}N(d_2),\\
P&=Ke^{-r\tau}N(-d_2)-S N(-d_1).
\end{aligned}
$$
$N$ 是标准正态分布函数. [^MEFG-MIT-KOGAN]

对90天、$K=5,000$、$\sigma=23.5\%$，模型call价格为256.856点. 为形成教学bid／ask，先按相应增量把中价取成256.9，再给两边各0.2点价差：

| 报价身份 | 期权点数 | 一份对应美元 | 同模型反解的IV |
|---|---:|---:|---:|
| bid | 256.7 | 25,670 | 23.484% |
| mid | 256.9 | 25,690 | 23.505% |
| ask | 257.1 | 25,710 | 23.525% |

中价由模型价格取整得到，因此反解IV约23.504%，与生成价格时的23.5%略有差异.

<a id="m18-inversion"></a>
## 五、隐含波动率的反解

给定合约及无股息模型的 $S,K,\tau,r$，隐含波动率解决的是方程 $C_{\rm model}(\sigma)=C_{\rm quote}$. 可以从较小和较大的 $\sigma$ 起步，反复二分，直到模型价格接近给定报价. 买入通常面对ask，卖出面对bid；相应IV区间比只报一个中价IV更贴近交易对象.

反解前还要检查价格界. 在本例无股息模型中，call的正有限波动率价格位于 $\max(S-Ke^{-r\tau},0)$ 与 $S$ 之间. 若30天、$K=4,500$ 的call被输入1点，远低于模型下界，该输入不存在相容的IV.

<div data-experiment-slot="EXP-MEFG-M18-IV"></div>

实验分别显示价格随$\sigma$变化的曲线，以及欧式和美式put的行权树. 在价格曲线上切换bid、mid、ask，可比较同一模型中的反解位置；行权树采用前述$u,d,R$参数.

市场报价还反映库存、供求、成交条件和资金限制；由报价反解的IV因此同时包含这些因素，预测实现波动需要另建统计关系.

<a id="m18-exercises"></a>
## 六、价格界、行权与 IV 的检验

**题一.** 为什么一期欧式put的48.039低于当前差额50，不构成这里的套利？

**解析.** 持有人现在没有立即以100卖出股票的权利，不能买put后今天就取得50. 合约只承诺期末支付，复制需要今天存入 $100/1.02$ 并空一股，成本48.039. 将美式的立即行权操作擅自加给欧式，才制造了虚假的套利.

**题二.** 两期美式put为什么不是46.117？请在上涨节点核一次.

**解析.** 上涨后股票60，继续持有两期末支付的折现价值38.039，而立即行权值40；美式可取较大者40. 下跌节点取55，初始继续值48.039仍低于立即行权50，故初值50. 46.117只属于必须等待两期末的欧式版本.

**题三.** 为什么表中ask IV高于bid IV？它们是否是对未来的两个独立预测？

**解析.** 在其他BSM输入相同且vega为正时，更高期权价格需要更大的 $\sigma$ 来重现. 因此bid与ask分别反解出同一报价价差对应的模型IV区间；未来实现波动仍是另一项估计.

**题四.** 30天、$K=4,500$ 的call报价1点，能否输出“市场几乎确定不会波动”？

**解析.** 不能. 先检查模型价格下界；该输入已与无股息、给定现价／利率的价格界不相容. 可能是单位、合约、时点或输入错误，也可能模型条件不适用. 在识别原因前，不应强行输出IV.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-OIC-EXERCISE]: Options Industry Council，*Options Exercise FAQ*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/referencelibrary/faq/options-exercise). 本篇定位：Full FAQ main body through exercise/closing distinction.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/vega). 本篇定位：Full main concept body.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
