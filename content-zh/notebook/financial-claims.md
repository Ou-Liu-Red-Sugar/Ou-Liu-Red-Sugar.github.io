{
  "title": "金融资产、权利与经济事项",
  "description": "从真实材料写出权利卡，区分契约约定、交易价格与实际所得.",
  "layout": "entry",
  "notebookid": "zh-financial-claims",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-financial-claims"
}

金融资产是持有人取得的一项金融权利：债权约定支付，股权参与公司剩余分配，衍生合约按约定条件产生权利与义务. 价格是取得这些权利的对价.

<span id="m01-rights-structure"></span>
## 一、经营活动与金融权利

企业购买设备、雇用人员、生产和销售，构成经营活动. 资金提供者通过债权或股权参与融资，取得相应支付、分配及决策权利. 同一业务采用不同融资方式，会改变支付条件、损失承担顺位和控制权.[^OS17]

**本篇所说的金融资产，是从持有人一侧观察的一项可识别的金融权利.** 这里重点研究债权、股权和衍生合约中的权利.

金融权利可以包含现金分配、投票和行权等内容. 公司持有经营资源，股东持有公司的股份；两者通过经营结果及分配安排联系. 研究业务解释资源怎样产生收入与现金，研究证券则解释持有人在何种条件下取得哪些结果.

识别一项金融权利需要以下字段.

| 权利卡字段 | 要回答的问题 |
|---|---|
| 证券与主体 | 哪一证券、哪一类别或系列？发行人是谁？谁承担相关义务？ |
| 持有人与记录 | 谁享有权利？通过什么持有记录识别？ |
| 经济事项 | 还本、分红、清算分配、投票，还是按价格条件结算？ |
| 条件与时间 | 什么条件触发？什么时候可以要求履约？ |
| 数量与币种 | 一份到底是多少？报价单位和现金单位是否相同？ |
| 顺位与限制 | 哪些其他权利优先？是否有期限、转换或转让限制？ |

预计回报另需交易价格、未来状态和持有方式等输入；权利卡只记录契约与持有层面的权利条件.

<span id="m01-bill-case"></span>
<span id="CASE-MA-TBILL-912797RD1"></span>
## 二、国库券权利与付款

美国财政部2025年9月18日的国库券拍卖结果如下.[^TB-AUC]

| 原始字段 | 公告数值（金额显示至三位小数） |
|---|---|
| Security Term | 28-Day Bill |
| CUSIP | 912797RD1 |
| Issue Date | 2025-09-23 |
| Maturity Date | 2025-10-21 |
| Price | 每100美元面值99.686美元 |
| High Rate | 4.040% |

该国库券到期支付面值. 设持有量为面值USD 10 K，按公告单价计算，发行付款为

$$
C=10{,}000\left(1-4.04\%\times\frac{28}{360}\right)
  \approx9{,}968.578\text{ 美元}.
$$

按约持有至到期可收到USD 10 K，比发行付款多USD 31.422. 国库券以面值与发行价格之差支付利息，不另付票息.[^TB-PRICE]

这份国库券的发行人为美国财政部，权利按美元面值计量，到期日为2025年10月21日. 取得成本USD 9,968.578与到期面值USD 10 K分别对应买入付款和到期收款.

### 4.040%的贴现报价与28天持有回报

公告中的 High Rate 使用国库券贴现报价惯例. 令面值为$F$、年化贴现率为$d$、期限天数为$n$，其价格关系为$C=F(1-dn/360)$. 代入$d=4.04\%$和$n=28$，每100面值的价格约99.686美元. [^TB-PRICE]

而我们这次持有的回报率，分母是付出的资金：

$$
R=\frac{F-C}{C}
 \approx\frac{31.422}{9{,}968.578}
 \approx0.315\%.
$$

贴现率以面值为分母，并按360天年化；本例持有期回报率以买入资金为分母，覆盖28天.

<span id="m01-three-levels"></span>
## 三、约定、价格与实际所得

契约规定支付条件，成交价格确定取得成本，持有过程决定实际现金流. 三者在不同环节形成.

| 信息 | 国库券中的对应内容 | 决定因素 |
|---|---|---|
| 契约 | 面值、到期日与支付义务 | 发行条款 |
| 价格 | 取得同一面值权利的付款 | 买入时的交易价格 |
| 所得 | 持有期间收取的现金与转让价款 | 持有期间、卖出价格、费用及履约 |

再作一个有区分力的变式：假设同一笔10,000面值权利，在到期前以每100面值99.80的价格转让. 新买方付出9,980美元；如果仍按原条款持有到期，其面值差是20美元. **到期面值没有变，改变的是取得同一权利所付的价格，以及剩余持有期间.** 99.80是教学价格；转售日未设，因此这里不年化新买方的回报.

<span id="m01-rights-comparison"></span>
<span id="CASE-MA-SPX-SPEC-2026"></span>
<span id="CASE-MA-ALPHABET-RIGHTS-2025"></span>
## 四、股权与期权的权利结构

### 股权的经济权利与分配条件

Alphabet 的2025年报区分了 Class A（GOOGL）与 Class C（GOOG）；类别及证券代码是证券身份的一部分. 年报和所引用证券说明显示，A类通常每股一票，C类除法律要求外没有投票权. [^GOOG-10K]

两类股份均有经济权利. 证券说明的Dividends小节规定股息依董事会宣派及相关优先权分配；Liquidation Rights规定清算前C类转为A类，并按顺位参与剩余资产分配.[^GOOG-RIGHTS]

股份没有国库券式的固定到期还本安排. 公司取得利润、董事会决定分配和股东收到现金，是不同事件.

### 期权的指数参照与现金结算

SPX指数期权采用欧式行权和现金结算，每指数点的合约乘数为USD 100. 标准SPX与SPXW的到期结算时点不同，具体系列决定何时取结算值.[^SPX] 持有人取得按合约结算的权利，指数提供参照值.

设一份看涨期权的权利金为4点，未计费对价为$4\times100=400$美元. 买方支付权利金取得选择权，卖方承担相应履约义务；券商、清算会员和清算安排连接持有人与履约过程.[^OCC]

### 三张权利卡的静态对照

| 对象 | 持有人权利 | 付款或分配条件 | 计量单位 |
|---|---|---|---|
| 912797RD1国库券 | 到期收取面值 | 2025-10-21到期支付 | 美元面值；每100面值报价 |
| Alphabet A/C股份 | 类别对应的经济及治理权利 | 股息宣派、清算及相关顺位 | 股，保留类别 |
| SPX期权 | 选择权及现金结算权利 | 系列行权与结算规则 | 份；USD 100/指数点 |

<span id="m01-guided-use"></span>
## 五、权利与资金变式

权利图分别连接参照对象与履约关系：国库券连接财政部的支付义务，Alphabet股份连接对应类别的股东权利；SPX连接指数作为参照，连接合约及清算安排作为履约关系.

把国库券的取得价格从99.686切换到99.80，每USD 10 K面值的付款从USD 9,968.578变为USD 9,980，到期面值差从USD 31.422变为USD 20. 到期日与面值保持不变. 切换Alphabet A/C类别，则改变治理权利.

<div data-experiment-slot="INT-M01-RIGHTS"></div>

<span id="m01-exercises"></span>
## 六、练习与解析

### 练习一·取得价格与转让

甲按公告单价取得10,000面值国库券，后来按教学价格99.80转给乙. 暂不计费用. 请分别写出甲的付款、乙的付款、甲的价差，以及转让后财政部的到期面值义务.

**解析.** 甲付款USD 9,968.578，乙付款USD 9,980，甲取得价差USD 11.422. 转让后，乙持有USD 10 K面值的债权，取得到期收款权. 转让改变持有人及其买入成本，面值保持不变.

### 练习二·表决与经济权利

有人读到GOOG通常不附投票权，认为它只是一张价格凭证，不具有股东经济权利. 请指出这个判断漏读了证券说明的哪些部分.

**解析.** 该判断遗漏了Dividends和Liquidation Rights. 投票权属于治理权利，分红及清算分配属于经济权利；C类通常没有投票权，仍按相应条件参与经济分配.

### 练习三·报价与合约单位

一张材料只写“SPX，看涨，报价4”. 能否据此说购买成本是4美元，或者可以算出到期现金？

**解析.** 不能. 已知SPX乘数后，若4确为每点权利金报价、数量为一份，则未计费对价是400美元. 但还缺具体系列的执行价、期限和结算安排；计算到期现金还需该系列的结算值.

[^OS17]: **Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax，Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital**. 第3版，2022-12-14.[原文](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital). 定位：§17.1，尤其 Borrowing: Banks and Bonds、Corporate Stock and Public Firms、How Firms Choose between Financial Capital Sources.

[^TB-AUC]: **U.S. Department of the Treasury，Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1**. 2025-09-18公告；发行2025-09-23；到期2025-10-21. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf). 定位：单页表格中的 Security Term、CUSIP、Issue Date、Maturity Date、High Rate、Price.

[^TB-PRICE]: **TreasuryDirect / Bureau of the Fiscal Service，Understanding Pricing and Interest Rates**. 现行网页，2026-09-21访问.[原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/). 定位：Bills 小节及贴现公式；其中贴现率口径与持有期回报率需区分.

[^GOOG-10K]: **Alphabet Inc.，Alphabet Inc. 2025 Form 10-K**. 报告期截至2025-12-31；2026年提交. [原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm). 定位：Item 5，印刷p.25；Note 11 Stockholders’ Equity，印刷pp.78–79.

[^GOOG-RIGHTS]: **Alphabet Inc.，Description of Securities — Exhibit 4.20**.2023年提交的证券说明，由2025年报引用.[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm). 定位：Voting Rights、Dividends、Liquidation Rights、Conversion、Equal Status.

[^SPX]: **Cboe，SPX Options Fact Sheet**. 两页事实表，页脚©2026.[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 定位：PDF pp.1–2，尤其第2页 SPX / SPXW 规格表.

[^OCC]: **The Options Clearing Corporation，Characteristics and Risks of Standardized Options**. June 2024.[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 定位：Ch.I印刷pp.3–5；Ch.II印刷pp.6–8、11–12；Ch.IX印刷pp.58–59.
