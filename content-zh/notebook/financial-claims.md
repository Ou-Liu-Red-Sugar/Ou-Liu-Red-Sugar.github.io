{
  "title": "金融资产、权利与经济事项",
  "description": "从国库券的原始条款计算持有现金流，再比较股份的治理与分配权、期权的或有支付.",
  "layout": "entry",
  "notebookid": "zh-financial-claims",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-financial-claims"
}

金融资产的条款规定持有人可以向谁提出什么要求、在什么条件下提出，以及数量和时间怎样确定. 价格是取得这些权利的对价；投资者的现金收付还取决于持有期间和转让安排. 债券、股份和期权的差别，可以从各自赋予持有人的权利读出来.[^OS17]

<span id="m01-rights-structure"></span>
## 一、权利条款

<span id="m01-bill-case"></span>
<span id="CASE-MA-TBILL-912797RD1"></span>

美国财政部2025年9月18日公布了以下28天国库券的拍卖结果.[^TB-AUC]

| 原始字段 | 公告内容 |
|---|---|
| Security Term | 28-Day Bill |
| CUSIP | 912797RD1 |
| Issue Date | 2025-09-23 |
| Maturity Date | 2025-10-21 |
| Price | 每USD 100面值约USD 99.686 |
| High Rate | 4.04% |

这项证券的义务主体是美国财政部. 持有USD 100面值，就取得到期收取USD 100的权利；国库券期间没有另付票息. CUSIP识别具体证券，发行日与到期日确定这次发行的28天期限. 表中的Price按每USD 100面值报价，所以面值既是到期付款的计量单位，也是读懂报价的基数.[^TB-PRICE]

购买人交付资金，财政部承担未来支付义务，这构成债权融资. 面值说明这笔债权有多大；买入价格说明取得它要付多少钱. 本次发行价格低于面值，两者的差额在持有到期时构成利息收入.

<span id="m01-three-levels"></span>
## 二、价格与持有现金流

设购买USD 10 K面值并持有到期，暂不计费用. 公告的High Rate采用国库券贴现报价惯例：以面值为基数，按360天计算年化贴现额. 令面值为$F$、年化贴现率为$d$、期限天数为$n$，取得成本为[^TB-PRICE]

$$
\begin{aligned}
C&=F\left(1-d\frac{n}{360}\right)\\
 &=10{,}000\left(1-\frac{4.04}{100}\frac{28}{360}\right)\\
 &\approx9{,}968.578\text{ 美元}.
\end{aligned}
$$

到期收到USD 10 K，与取得成本相差USD 31.422. 这28天的持有期回报率以实际投入资金为分母：

$$
R=\frac{F-C}{C}\approx0.315\%.
$$

4.04%和0.315%分别使用面值与投入资金作分母，分别覆盖年化报价期间与28天持有期间. 比较收益率时，分母和期间都要一致. 页面数值最多显示三位小数，计算使用未舍入输入.

再设这笔USD 10 K面值的债权提前按每USD 100面值USD 99.80转让. 新买方支付USD 9,980，随后持有到期可取得USD 10 K，两者相差USD 20. 转让改变了持有人和取得价格，财政部在2025年10月21日按面值付款的条款仍然相同. 原买方的现金路径以转让收款结束，新买方的现金路径从支付转让价开始；两人的收益要分别从各自的买入和退出金额计算.

<span id="m01-rights-comparison"></span>
## 三、股权与或有权利

国库券的到期日期和付款金额已经写入条款. 普通股把投资者的所得与企业的分配和剩余资产联系起来，同时赋予相应的治理权利；阅读股份时，证券类别也成为权利识别的一部分.

<span id="CASE-MA-ALPHABET-RIGHTS-2025"></span>

Alphabet的2025年报将Class A和Class C的交易代码分别列为GOOGL和GOOG. A类通常每股一票，C类除法律要求外通常没有投票权.[^GOOG-10K] 两类股份的股息都取决于董事会宣派及相关优先权；清算时，证券说明规定C类先转换为A类，再按相应顺位参与剩余资产分配.[^GOOG-RIGHTS] 因此，投票权回答股东如何参与公司治理，股息和清算条款回答股东在什么条件下取得分配. 普通股没有国库券式的到期还本安排，买入价格也不能直接给出未来分配金额.

<span id="CASE-MA-SPX-SPEC-2026"></span>

期权把支付与约定条件联系起来. SPX看涨期权以标普500指数为结算参照，采用欧式行权和现金结算，乘数为USD 100/指数点. 令$K$为执行价、$I_T$为该系列规定的到期结算值，一份看涨期权对应的现金支付为

$$
X_T=100\max(I_T-K,0)\text{ 美元}.
$$

当$I_T\le K$时，买方可让期权到期而不行权；当$I_T>K$时，买方取得差额支付. 这项选择使买方取得上行支付而不承担对称的下行支付，卖方则承担相应履约义务，买方为取得这项权利支付权利金.[^OCC] 具体系列还决定结算值的取法：标准SPX使用成分股开盘价格计算，SPXW使用相应收盘价格计算；行权现金在到期后的下一个营业日交付.[^SPX]

若一份合约的教学权利金报价为4点，取得成本就是$4\times100=400$美元，未计费用. 这笔支出在买入时发生，$X_T$则由到期结算值决定. 忽略资金时间成本且持有到期，买方盈亏为$X_T-400$；支付为正仍可能不足以覆盖买入成本. 指数在这里决定支付数额，指数的成分公司不因此向期权持有人支付这笔结算款.

| 对象 | 持有人权利 | 付款条件与时间 | 数量与报价单位 |
|---|---|---|---|
| 912797RD1国库券 | 对美国财政部的面值债权 | 2025-10-21到期付款 | 美元面值；每USD 100面值报价 |
| Alphabet A/C股份 | 相应类别的治理、股息及清算分配权 | 股息宣派、清算及相关顺位条件 | 股，并保留股份类别 |
| SPX看涨期权 | 按结算值与执行价之差取得或有支付 | 具体系列规定结算值和行权现金交付日 | 份；USD 100/指数点 |

<span id="m01-guided-use"></span>

<div data-experiment-slot="INT-M01-RIGHTS"></div>

在交互中改变国库券价格、Alphabet股份类别或SPX合约数量，分别观察取得成本、治理权利和权利金金额怎样变化.

<span id="m01-exercises"></span>
## 四、练习与解析

**取得价格与转让.** 甲按上述拍卖价格取得USD 10 K面值的912797RD1，后来按99.80转给乙，暂不计费用. 甲的转让价差是多少？乙持有到期所得的价差是多少？两笔价差相加后，与原发行价至面值的差额有什么关系？

**解析.** 甲取得USD 9,980的转让款，减去成本USD 9,968.578，价差约USD 11.422；乙的价差为USD 20. 两者合计约USD 31.422，恰好等于面值减原取得成本. 转让价决定这段总差额在两名持有人之间如何分配，债务人的到期付款仍为USD 10 K.

**表决与分配.** 从GOOGL换成相同股数的GOOG，哪些权利需要重新核对？没有投票权能否推出没有股息和清算分配权？

**解析.** 应核对股份类别的Voting Rights、Dividends和Liquidation Rights. A/C的通常投票安排不同；C类仍按证券说明参加股息和清算分配. 治理权利与经济权利由各自条款规定.[^GOOG-RIGHTS]

**或有支付与盈亏.** 买入一份权利金4点的SPX看涨期权. 教学情景中，到期结算值高于执行价3点. 未计费用和资金时间成本，结算收入与盈亏各是多少？

**解析.** 结算收入为$3\times100=300$美元，盈亏为$300-400=-100$美元. 期权取得了正的结算支付，但支付低于取得成本. 两个数分别来自合约支付规则和买入价格.

[^OS17]: **Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax，Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital**. 第3版，2022-12-14.[原文](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital). 定位：§17.1，尤其 Borrowing: Banks and Bonds、Corporate Stock and Public Firms、How Firms Choose between Financial Capital Sources.

[^TB-AUC]: **U.S. Department of the Treasury，Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1**. 2025-09-18公告；发行2025-09-23；到期2025-10-21. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf). 定位：单页表格中的 Security Term、CUSIP、Issue Date、Maturity Date、High Rate、Price.

[^TB-PRICE]: **TreasuryDirect / Bureau of the Fiscal Service，Understanding Pricing and Interest Rates**. 现行网页，2026-09-21访问.[原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/). 定位：Bills 小节及贴现公式.

[^GOOG-10K]: **Alphabet Inc.，Alphabet Inc. 2025 Form 10-K**. 报告期截至2025-12-31；2026年提交. [原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm). 定位：Item 5，印刷p.25；Note 11 Stockholders’ Equity，印刷pp.78–79.

[^GOOG-RIGHTS]: **Alphabet Inc.，Description of Securities — Exhibit 4.20**.2023年提交的证券说明，由2025年报引用.[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm). 定位：Voting Rights、Dividends、Liquidation Rights、Conversion、Equal Status.

[^SPX]: **Cboe，SPX Options Fact Sheet**. 两页事实表，页脚©2026.[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 定位：PDF pp.1–2，尤其第2页 SPX / SPXW 规格表.

[^OCC]: **The Options Clearing Corporation，Characteristics and Risks of Standardized Options**. June 2024.[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 定位：Ch.I印刷pp.3–5；Ch.II印刷pp.6–8、11–12；Ch.IX印刷pp.58–59.
