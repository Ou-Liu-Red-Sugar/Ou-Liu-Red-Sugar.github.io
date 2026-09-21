{
  "title": "清算、结算与抵押品",
  "description": "区分成交、清算义务与最终交收，并识别担保安排带来的资金约束.",
  "layout": "entry",
  "notebookid": "zh-m04",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m04"
}

成交确定价格、数量和交易关系；清算处理待履行义务；交收完成证券与资金的转移. 客户账户、会员清算和存管参与人分别维护对应层次的记录.

<span id="m04-post-trade-states"></span>
## 一、成交、清算与交收状态

设投资者买入100股，每股100美元，未计费用，作为本节教学交易. 成交回报告确定的是买方支付10,000美元、取得100股的交易约定；证券与资金的最终交收还要经过后续流程.

**清算**是确定、核对和处理待履行义务的过程，可包括净额和中央对手方安排；**结算或交收**是按相应制度完成资金和证券的履行. 零售客户收到的成交回报报告交易结果，机构流程中的分配（allocation）、确认（confirmation）和affirmation则处理具体账户分配及交易细节核对.[^SEC-AFFIRM][^SEC-FAQ]

| 事件/层次 | 这一层确定什么 | 还需后续哪一层确认 |
|---|---|---|
| 成交 | 数量100股、价格100、交易约定 | 证券与资金的最终交付 |
| allocation / confirmation / affirmation（**仅在适用流程中**） | 账户、数量、交收资料按适用流程核对 | 适用流程完成后仍进入清算与交收 |
| NSCC/CNS会员层清算（若交易合资格进入该服务） | 按Rule 11形成会员层净头寸、义务承接及相关处理 | 客户账户权益仍由客户记录层维护 |
| DTC参与人层交收 | 参与人记录中的证券交付、款项等按规程处理 | 券商继续维护客户明细 |
| 客户账户/受益持有记录 | 券商按账户关系记录客户权益与交易 | 机构层履约状态仍须由相应记录确认 |

本表表示层次关系；具体市场中流程可以并行或自动传递. 成交约定、义务处理与最终履行应分别核查.

<span id="m04-tplus-one"></span>
<span id="CASE-MA-T1-CUTOVER-202405"></span>
## 二、T+1的营业日口径与适用范围

eCFR §240.15c6-1(a)对适用的经纪交易商证券交易规定下一营业日的标准付款及交付周期，并保留交易时明示另约等条件. 政府证券属于(a)的排除范围，特定承销发行在(c)、(d)另有规定.[^SEC-CYCLE]

T+1只作用于相应规则覆盖的证券交易；国库券发行等其他事件按各自规则和已公布日期处理. M01 的国库券因此使用其独立发行日期.

SEC最终规则的**生效日是2023年5月5日**；市场合规切换到T+1的日期是**2024年5月28日**.[^SEC-FINAL][^SEC-FAQ]

| 交易日 | 当时常规周期 | 营业日计数 | 标准交收日 |
|---|---|---|---|
| 2024-05-24，星期五 | T+2 | 5月28日为第1个、29日为第2个营业日 | 2024-05-29 |
| 2024-05-28，星期二 | T+1 | 5月29日为下一个营业日 | 2024-05-29 |

5月25、26日是周末，27日是Memorial Day. 两笔不同交易日、适用不同标准周期的交易，因而落在同一交收日.

更短的周期要求适用机构交易的资料更早备妥. 对于经纪交易商与其他方为一笔受§240.15c6-1(a)约束的证券交易进行allocation、confirmation或affirmation的情形，§240.15c6-2要求通过符合条文的书面协议，或建立、维护并执行合理设计的书面政策与程序，使相应处理尽快且不晚于交易日结束完成.[^SEC-AFFIRM][^SEC-FAQ]

<div data-experiment-slot="INT-M04-SETTLEMENT"></div>

<span id="m04-netting-layers"></span>
## 三、会员净额与客户持有记录

假设在同一证券、同一交收日、满足本例净额条件的安排下，一家机构有两笔交易：买100股、每股100美元；卖70股、每股101美元. 分别计算，需付10,000、收7,070；需收100股、交70股.

按两笔约定分别计量后相抵，机构净收30股、净付2,930美元，其中$10,000-7,070=2,930$. 两笔交易价格不同，因此现金净额由逐笔金额相抵得到.

NSCC的CNS制度处理合资格交易的**会员层**头寸. Rule 11 §1(a)按会员、证券形成净头寸并带入既有未交收头寸；§1(b)–(c)规定NSCC承接义务及担保生效的处理阶段；§§2–3将会员头寸与合格存管机构指令连接，§6允许特定情形下追加盯市款.[^NSCC]

在本例中，会员层可把买100股与卖70股的合资格义务处理为净变动，从而减少对外交付数量；履约风险、失败后的义务和客户明细仍分别存在.

设甲原持有0股并买入100股，乙原持有70股并全部卖出. 完成交收后，客户明细分别记录甲100股、乙0股，合计持有量从70增至100. 机构对外净增30股，客户期末合计持有100股，两者分别记录变动量与存量.

我们把三层明确画开：

| 层次 | 记录或处理什么 | 本例如何理解 |
|---|---|---|
| NSCC清算会员层 | CNS合资格义务、净额和相关风险安排 | 处理对外净变动，不替代客户明细 |
| DTC参与人层 | 证券记账移转及结算相关指令 | 与净收/净交证券等机构指令连接 |
| 券商客户层 | 哪位客户有什么权益、交易和余额 | 仍须区分甲100股、乙0股 |

SEC/FINRA区分名义登记和客户受益持有；客户保护规则还对全额付清及超额保证金证券的占有或控制规定了相应要求.[^HOLD][^CUSTOMER]

<span id="m04-settlement-collateral"></span>
## 四、DTC记账移转与抵押约束

DTC交收规程分别规定参与人之间的证券记账交付（book-entry delivery）、付款指令（Payment Order）和抵押贷款（Collateral Loan）处理，证券交付可以附款或不附款.[^DTC] 这些指令处理参与人层的记录与义务，券商另在客户明细中记录客户权益.

DTC的Collateral Monitor（CM，抵押余量）在参与人层核对可计入抵押价值与结算净借记，约束待处理交收指令.

规程p.70给出一个很合适的官方教学例：证券市值10,000美元，抵押折扣10%，计入抵押的价值为9,000美元；若结算净借记为8,000美元，则CM为1,000美元. [^DTC]

我们用这一例作局部计算：

$$
V_{\text{抵押}}=10{,}000(1-h),\qquad
CM=V_{\text{抵押}}-D,
$$

其中$h$为折扣，$D$为本例结算净借记. 这个简单公式是所选例子的压缩表示，不代替DTC全部抵押来源和操作规则.

| 场景 | 市值 | 折扣 | 抵押计值 | 净借记 | CM |
|---|---:|---:|---:|---:|---:|
| 官方例 | 10,000 | 10% | 9,000 | 8,000 | +1,000 |
| 教学变式 | 10,000 | 25% | 7,500 | 8,000 | −500 |

证券市场价值保持10,000美元，抵押折扣提高使认可价值降至7,500美元；相对8,000美元净借记，CM为−500，表示抵押价值不足500美元. 指令还需满足证券可得性、净借记上限等条件；不满足条件的指令可进入等待和再处理流程.[^DTC]

NSCC的清算基金保障会员履约并提供相应结算流动性；DTC的抵押余量控制参与人交收风险.[^NSCC] 两种安排分别作用于会员清算义务与参与人交收指令.

<div data-experiment-slot="INT-M04-COLLATERAL"></div>

<span id="m04-futures-contrast"></span>
## 五、期货路径中的中途现金约束

MES合约乘数为每指数点5美元；下例价格路径、保证金金额及补足规则为教学设定.[^MES][^CME-MARGIN]

设做多2份MES，价格按结算路径6000→5960→6010移动；每份初始保证金1,500美元、维持要求1,350美元. 在本例中，若余额低于维持要求，就须补回初始要求. 最初保证金共3,000美元，另有可用现金250美元.

本例分开记录四个量：2份MES在6000点的合约名义量为$6000\times5\times2=60,000$美元；初始保证金为3,000美元；保证金外可用现金为250美元；每日损益按$2\times5\times\Delta S$计算. 名义量是合约尺度，不代表建仓现金或最大可能亏损.

| 阶段 | 当日价格变化 | 条件结算损益 | 资金意义 |
|---|---:|---:|---|
| 建仓基准 | 6000 | — | 名义量60,000；保证金3,000；保证金外可用现金250 |
| 第1日 | −40点 | $2\times5\times(-40)=-400$ | 余额2,600，低于维持要求2,700 |
| 补足阶段 | — | 存入保证金不是新增交易损益 | 补回3,000需400，现有250，缺150 |
| 第2日（仅在补足后继续持有） | +50点 | $2\times5\times50=+500$ | 若未解决前日缺口，不能自动进入这条持有路径 |

从起点到终点的合约损益是+100美元，但默认资金不足以按所设规则一路持有. 若另外投入150美元补足，第一日补回3,000后，第二日余额变为3,500；最初3,250加新增150共投入3,400，差额仍是100美元. 新增入金不是收益.

本例中，继续持有要求中途满足资金条件. FSB将保证金和抵押品调用与流动性准备作为政策研究对象.[^FSB]

<div data-experiment-slot="INT-M04-MES"></div>

<span id="m04-exercises"></span>
## 六、练习与解析

### 练习一·营业日日历

分别推算2024年5月24日和28日的常规美国股票交易交收日. 能否据此认定两个账户都在29日上午有同样可提款额？

**解析.** 24日按当时T+2，跳过周末和27日假日，28日计第1、29日计第2个营业日；28日按切换后的T+1，也落在29日. 两者的标准交收日相同. 可提款额却还取决于实际完成、账户余额及券商安排；标准日期不提供这些数据，因此后半句不能推出.

### 练习二·存量与净变动

甲买100股，乙卖70股；乙原来持有70股，甲原来没有. 机构对外净增30股后，客户层应保留哪些持有量？

**解析.** 交收后甲持有100股、乙为0股，合计100股；此前合计70股，因此机构净增30股. 客户明细保存各自持有量，机构净额记录对外变动.

### 练习三·抵押计值

在DTC局部例中，把折扣改为25%，市值仍10,000、净借记仍8,000. 计算CM，并解释能否从中得出“客户亏500美元并强平”.

**解析.** 抵押计值7,500美元，CM为−500，表示这一项参与人层抵押约束未满足. 本例证券市场价值保持不变，负CM来自抵押折扣调整. 将折扣调回10%可恢复正CM，交收仍需满足证券可得性及净借记上限等条件.

### 练习四·保证金现金流

先给这五个数贴上正确标签，再假设按MES设定补入额外150美元并继续到第二日. 最终保证金余额3,500，是否代表相对最初保证金3,000赚了500？

**解析.** 60,000是指数水平乘合约乘数和数量所得的名义金额；3,000是初始保证金；−400是首日结算损益；250是保证金外可用现金；150是补足要求尚缺的资金. 补足后，总投入为$3,000+250+150=3,400$，第二日余额3,500，净损益100，与两日损益$-400+500=100$一致. 若150缺口未解决，原持仓无法按本例补足规则继续到第二日.

[^SEC-AFFIRM]: **eCFR / Office of the Federal Register，17 CFR §240.15c6-2 — Same-day allocation, confirmation, and affirmation**.2026-09-21访问.[原文](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-2). 定位：(a)、(b)(1)–(5)；适用于相应经纪交易商与其他方的allocation、confirmation或affirmation流程.

[^SEC-FAQ]: **SEC staff，Shortening the Securities Transaction Settlement Cycle — T+1 FAQ**. 2024-03-27.[原文](https://www.sec.gov/exams/educationhelpguidesfaqs/t1-faq). 定位：Q1–Q7及对应脚注，尤其Q1、Q3–Q6；用于2024-05-28合规切换与适用交易说明.

[^SEC-CYCLE]: **eCFR / Office of the Federal Register，17 CFR §240.15c6-1 — Settlement cycle**.2026-09-21访问；页面Title 17更新至2026-09-17，来源注88 FR 13952.[原文](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-1). 定位：(a)–(d)；涵盖适用范围、下一营业日标准、明示另约及排除/发行例外.

[^SEC-FINAL]: **SEC，Shortening the Securities Transaction Settlement Cycle — Release 34-96930 / IA-6239**. 2023-02-15；正文生效日2023-05-05.[原文](https://www.sec.gov/files/rules/final/2023/34-96930.pdf). 定位：PDF pp.1–2及印刷pp.308–311；合规切换日另见SEC T+1 FAQ.

[^CALENDAR]: **DTCC，Accelerating to T+1: A Global Custodian’s Perspective**.2023-03-06.[原文](https://www.dtcc.com/insights/2023/accelerating-to-t-1-a-global-custodians-perspective). 定位：Key Dates and Rules、Preparing for Changes；用于美国2024-05-24/28/29及Memorial Day切换日历.

[^NSCC]: **National Securities Clearing Corporation / DTCC，NSCC Rules & Procedures**. As of July 14, 2026.[原文](https://files.dtcc.com/download/assets/nscc_rules.pdf/85bda02a369211f0a3ae820bd5ac0897). 定位：Rule 11 §§1–6，印刷pp.112–114/PDF物理119–121；Rule 4 §§1–2，印刷pp.83–84/PDF物理90–91.

[^HOLD]: **SEC OIEA / FINRA，Investor Bulletin: Holding Your Securities**. 2023-07-12.[原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97). 定位：开头两种持有方式、Street Name Registration及Direct Registration.

[^CUSTOMER]: **FINRA收录SEC客户保护规则及解释，SEA Rule 15c3-3 and Related Interpretations**.2026-09-21访问.[原文](https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-15c3-3-and-related-interpretations). 定位：(b)(1)–(2)正文及邻近解释；用于全额付清及超额保证金证券的占有/控制条件.

[^DTC]: **The Depository Trust Company / DTCC，DTC Settlement Service Guide**. As of June 10, 2026.[原文](https://files.dtcc.com/download/assets/Settlement.pdf/c83a99be369a11f093d0c204a2f8334f). 定位：印刷pp.9–10；pp.68–71；Recycle Processing / Reasons for Recycling，PDF物理pp.59–60；p.70算例.

[^MES]: **CME Group，Micro E-mini Equity Index Futures: Frequently Asked Questions**. 2026-09-21访问；网页部分表例标2023-02-01.[原文](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html). 定位：Q2、Q5、Q6、Q9、Q10、Q14；用于MES每指数点5美元及结算/保证金基本安排.

[^CME-MARGIN]: **CME Group，FAQ — Performance Bonds/Margins**.2026-09-21访问.[原文](https://www.cmegroup.com/solutions/risk-management/performance-bonds-margins/faq-performance-bonds-margins.html). 定位：Q1–Q4；用于履约保障、资金要求与风险管理的区分.

[^FSB]: **Financial Stability Board，Liquidity Preparedness for Margin and Collateral Calls — Final Report**. 2024-12-10.[原文](https://www.fsb.org/uploads/P101224-1.pdf). 定位：执行摘要印刷pp.1–2；§1.1–§1.2，印刷pp.3–8；该来源是政策研究而非约束性交易规则.
