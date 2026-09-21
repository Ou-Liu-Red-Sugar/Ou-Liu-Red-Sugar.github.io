{
  "title": "货币、回购与汇率工具",
  "description": "从短票、repo和汇率原件重建单位、抵押、资金与双币种账本.",
  "layout": "entry",
  "notebookid": "zh-m09",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m09"
}

银行存款是对银行的请求权；短期国库券按到期日偿还面值；repo把出售证券与约定购回组成融资；外币头寸另有计价币种. 它们的现金流取决于义务主体、到期与交收日期、抵押安排及报价口径.

<a id="m09-tool-card"></a>
## 一、短期工具的权利、期限、币种与报价

| 对象 | 期限／时点 | 币种和权利 | 抵押或履约安排 | 先看哪种报价 |
|---|---|---|---|---|
| 国库券bill | 本例91天，定日到期 | 美元面值债权 | 到期按约付面值 | 每100面值价格、年化贴现率 |
| repo | 本例设施为隔夜 | 先交换现金与证券，约定反向交易 | 证券、对手方与三方服务安排 | repo利率与抵押比例，二者分开 |
| 外币现货换算 | 观察时点与交收时点分开 | 一种货币换另一种 | 两条货币腿如何最终交收 | 每单位哪种币值多少另一种币 |

存款只作为入口对照；保险、提前支取和破产安排取决于具体银行产品与辖区. 下面比较三种对象的合同、计价和现金路径.

<a id="case-mbc-tbill-912797ty3"></a>
<a id="m09-bill"></a>
## 二、91天国库券的收益口径

2026-05-26的财政部拍卖结果列出91天bill **912797TY3**：2026-05-28发行、2026-08-27到期，High Rate为3.595%，价格99.091，Investment Rate为3.678%.[^MBC-19]

bill在本例中没有期间票息：取得时支付低于面值的金额，到期按约收到面值. [^MBC-17] 对教学面值10,000美元，

$$
P=10000\left(1-3.595\%\times\frac{91}{360}\right)\approx9909.126,\qquad
F-P\approx90.874.
$$

假设按约到期、没有费用，91天的持有回报以**实际投入**为分母：

$$
HPR=\frac{F-P}{P}\approx\frac{90.874}{9909.126}\approx0.917\%.
$$

High Rate却使用**面值分母和360天年化**. 把它按财政部说明换回价格：

$$
P=F\left(1-d\frac{n}{360}\right),\quad
100\left(1-3.595\%\frac{91}{360}\right)
\approx99.091,
$$

与原件价格在显示精度一致.[^MBC-18] 3.595%是按面值和360天年化的贴现报价；91天利息金额为$F-P$.

| 名称 | 本例结果 | 分母与期间 |
|---|---:|---|
| 到期面值差额 | 90.87美元 | 金额，不是率 |
| 91天HPR | 0.917% | 购买成本，91天 |
| High Rate | 3.595% | 面值分母，360天贴现报价 |
| 本篇365天简单年化 | 3.678% | 购买成本，$HPR×365/91$ |
| 官方Investment Rate | 3.678% | 官方等价票息收益率报价 |

本例365天简单年化与官方Investment Rate在显示精度接近；该换算只适用于这里的91天比较. 连续滚动或复合结果还需给出每次再投资的价格与期限.

<div data-experiment-slot="EXP-MC-M09-BILL"></div>

实验只调面值，固定本次公告的期限、价格和利率. 面值改成20,000，金额翻倍而各收益率不变.

<a id="case-mbc-srp-20260916"></a>
<a id="m09-repo"></a>
## 三、Repo利息、证券腿与抵押比例

纽约联储2026-09-16的Standing Repo FAQ规定：联储向合格对手方买入证券并约定次日反向出售，差价对应利息；该版设施利率为<strong>4.00%</strong>，当日交收，使用BNY三方安排，合格证券包括美国国债、机构债和机构MBS.[^MBC-20]

Repo由出售证券和约定购回两笔交易组成. 在SRP中，BNY三方平台负责托管、证券估值、应用相应margin并在账上交收. 下文将现金融资额的2%设为教学抵押加成，该参数另按所引研究的口径定义.

**教学交易设定**：本金 $L=10{,}000{,}000$，利率4%，期限一天，按ACT/360计息，费用为零.

$$
I=Lr\frac{1}{360}\approx1{,}111.111,\qquad
L+I\approx10{,}001{,}111.111.
$$

放款人开始支付10M，到期取得本金加利息；融资人收到10M，到期支付本金加利息. 证券腿用于给现金融资提供履约保障，收益按现金融资的回购差价计量.

研究文章《Proportionate margining for repo transactions》用“每1美元现金对应 $(1+h)$ 美元证券”的口径说明抵押比例. 按它的**现金分母**定义，教学设 $h=2\%$，应交证券价值为10M×1.02＝**10.2M**. [^MBC-21] 注意另一种常见表示把证券价值放在分母：

$$
h=\frac{V_{\rm sec}-L}{L},\qquad
k=\frac{V_{\rm sec}-L}{V_{\rm sec}}
=\frac{h}{1+h}.
$$

因此 $h=2\%$对应 $k\approx1.961\%$. 若给的是 $k=2\%$，所需证券为 $L/(1-0.02)\approx10.204M$，而非10.2M. 两种“haircut”口径必须同时记录分母.

抵押比率改变风险保护和可取得的融资量；利息由repo利率决定，抵押风险还取决于证券价格、对手方履约和处置时点.

<a id="m09-repo-ledger"></a>
### 融资人的到期资金缺口

为看清整条路径，假设放款人可用现金10M、融资人有可交付证券10.2M，以及借款前自有现金缓冲2,000. 先假设融资人收到本金后暂未动用；证券价格不变、抵押要求不变.

| 时点 | 放款人的现金 | 融资人的现金 | 证券腿／义务 |
|---|---:|---:|---|
| 开始前 | 10,000,000.00 | 自有2,000.00 | 融资人可交付证券10.2M |
| 开始交易后 | 减10M，剩0 | 加10M，合计10,002,000.00 | 证券交付，形成约定回购义务 |
| 到期需履行 | 应收10,001,111.11 | 应付10,001,111.11 | 按约反向移转证券 |
| 全部依约完成后 | 10,001,111.11 | 888.89 | 证券返还；该笔现金及证券义务结束 |

融资人若已花掉收到本金中的1M，且没有其他现金流，到期只有9,002,000，距应付金额仍缺**999,111.11**美元. 初始抵押条件已满足，但到期偿还仍需要相应现金.

<div data-experiment-slot="EXP-MC-M09-REPO"></div>

切换抵押比例的分母并保持经济抵押额不变；再把融资人可交证券改成10.1M，检查初始抵押条件；最后恢复证券并设收到本金后花掉1M，比较交易成立与到期偿还两项约束.

<a id="case-mbc-h10-20260914"></a>
<a id="m09-fx"></a>
## 四、汇率单位与双币种账本

联储H.10固定发布页2026-09-14列的是9月7日至11日的参考汇率. 一般单位为“每美元对应多少外币”，带星号的货币例外为“每单位外币对应多少美元”. 欧元带星号，日元不带. [^MBC-22]

| 观察日 | 欧元，USD / 10K EUR | 日元，JPY/USD |
|---|---:|---:|
| 2026-09-07 | ND | ND |
| 2026-09-08 | 11,627 | 154.24 |
| 2026-09-11 | 11,604 | 153.71 |

ND表示该日观察缺失. 9月11日按参考数换算，

$$
10{,}000\ {\rm EUR}\times\frac{11604}{10000}\ {\rm USD/EUR}
=11{,}604\ {\rm USD},
$$

$$
1{,}000\ {\rm USD}\times153.71\ {\rm JPY/USD}
=153{,}710\ {\rm JPY}.
$$

反向把日元换成美元就除以153.71. H.10参考汇率用于本例估值；实际兑换按成交报价和费用计算.

始终持有10K欧元时，美元参考价值从9月8日的11,627变为9月11日的11,604，减少23美元、约0.198%；欧元现金仍为10K. 汇总不同币种余额时，先选定报告币和换算汇率.

| 事情 | EUR现金变化 | USD现金变化 | 解释 |
|---|---:|---:|---|
| 只重估持有的10,000EUR | 0 | 0 | 美元报告价值变了，没有兑换现金流 |
| 假设按9月11日参考数完成兑换 | −10,000 | +11,604 | 卖出欧元并收到美元的现金变动 |
| 仅达成兑换约定、尚未交收 | 待付10,000 | 待收11,604 | 约定付款与收款，等待实际交收 |

<div data-experiment-slot="EXP-MC-M09-FX"></div>

实验先选日期和方向，再输入原币数量，显示单位抵消、参考换算数以及假设兑换完成时的双币种变动. 9月7日显示数据缺失；固定10,000 EUR持仓的两日重估表用于区分报告币价值变化与原币现金变化.

<a id="m09-fx-settlement"></a>
## 五、选读：外汇PvP与交收风险

两币种支付往往涉及不同支付安排. **付款对付款（PvP）**使一条货币腿的最终交付以另一条的最终交付为条件，针对已经交付卖出货币却未收到买入货币的本金交收风险. PvP与CCP是不同安排；等待资金和替换未完成交易等风险仍需另行管理. [^MBC-24]

BIS在2026年6月公布的分析使用49辖区、**2025年4月实际交收**的新问卷口径：36%经PvP，54%使用缓释但未消除本金交收风险的方式，10%经双边全额方式. 这些比例按2025年4月实际交收方式分类；与2019/2022旧统计比较前需先对齐样本与问卷方法.[^MBC-24]

<a id="m09-exercises"></a>
## 六、练习与解析

### 题一·收益口径

bill的3.595%、0.917%、3.678%哪一个是“这91天的回报”？

**解析.** 按约到期且无费用时，以成本9,909.126美元为分母的91天HPR约0.917%. 3.595%按面值作分母、按360天年化贴现；HPR按365/91简单年化约3.678%. 三者分别采用不同分母或期间.

### 题二·抵押分母

10m本金、2% haircut，抵押物到底是10.2m还是10.204M？

**解析.** 若2%是$h=(V-L)/L$，则$V=10M\times1.02=10.2M$；若2%是$k=(V-L)/V$，则$V=10M/0.98\approx10.204M$. 前一种额外0.2M表示证券抵押缓冲，利息另按repo利率计算.

### 题三·到期现金缺口

资金开始够用，到期为什么还差999,111.11？

**解析.** 收到本金后花掉1M，剩余可用现金为$2,000+10M-1M=9,002,000$美元；到期应付10M加1,111.111美元，缺口约999,111.111美元. 已交付证券的抵押价值与融资人的可用现金分别记账.

### 题四·币种与报告价值

10,000EUR美元价值减少23，是否需要在欧元账户扣23？

**解析.** 欧元现金保持10K；−23美元是按两日参考汇率换算的报告价值差. 实际兑换时，分别记录卖出币减少、买入币增加，并计入成交报价、费用和交收.

### 题五·PvP与CCP

PvP和CCP能否互换使用？

**解析.** PvP描述两条货币腿相互约束的最终支付条件，CCP描述中央对手方承接义务的机构安排. PvP处理本金交收风险，等待付款所需的流动性及替换未完成交易的成本仍需安排.

[^MBC-19]: U.S. Treasury，*Auction Results: 91-Day Bill 912797TY3*，2026-05-26. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2026/R_20260526_2.pdf). 定位：PDF物理p1全文及Investment Rate脚注.

[^MBC-17]: U.S. Treasury, Bureau of the Fiscal Service，*Treasury Bills*，网页；取得2026-09-21. [原文](https://www.treasurydirect.gov/marketable-securities/treasury-bills/). 定位：主体与Bills at a Glance.

[^MBC-18]: U.S. Treasury，*Understanding Pricing and Interest Rates*，网页；取得2026-09-21. [原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/). 定位：Bills全节；Notes and Bonds全节.

[^MBC-20]: Federal Reserve Bank of New York，*FAQs: Standing Repo Operations*，2026-09-16. [原文](https://www.newyorkfed.org/markets/repo-agreement-ops-faq). 定位：定义、参数、执行、利率决定、合格参与者/抵押品、三方交收FAQ.

[^MBC-21]: R. Jay Kahn, Matthew McCormick，*Proportionate margining for repo transactions*，FEDS Notes,2025-02-14. [原文](https://www.federalreserve.gov/econres/notes/feds-notes/proportionate-margining-for-repo-transactions-20250214.html). 定位：Introduction；Margining practices in U.S. repo markets及Figure1文字说明；Proportionate margins与Individual transactions对应单元.

[^MBC-22]: Board of Governors of the Federal Reserve System，*Foreign Exchange Rates H.10*，固定发布2026-09-14. [原文](https://www.federalreserve.gov/releases/h10/20260914/). 定位：周表2026-09-07至09-11的EUR/JPY；一般单位说明及星号脚注.

[^MBC-24]: Bank for International Settlements，*Uncovering FX settlement risk: new measures from the 2025 BIS Triennial Survey*，BIS Quarterly Review, June2026. [原文](https://www.bis.org/publications/qr-202606/uncovering-fx-settlement-risk-new-measures-2025-bis-triennial-survey). 定位：正文研究设定、实际交收分类/比例、方法改变；尾注3、9及相邻方法尾注.
