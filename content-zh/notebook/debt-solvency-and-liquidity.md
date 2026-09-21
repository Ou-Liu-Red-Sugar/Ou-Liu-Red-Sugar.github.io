{
  "title": "债务结构、偿付能力与流动性",
  "description": "把长期偿付、到期付款与可动用流动性分开；以Costco和JPM原件完成两种资金分析，再检验收付款日期的缺口。",
  "layout": "entry",
  "notebookid": "zh-bf19",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf19"
}

一家公司今年盈利，和它下周能按时付款，是两个问题。这篇笔记把两者接起来：先看债务为什么存在、由什么经营活动支持，再把义务放到付款日期上，最后查资金在那一天是否真的能动用。读完后，我们要能写出一张有时间、有条件的资金表，而不是只报一个负债率。

共同部分加零售或银行中的一条分支，约需15–20分钟。另一分支和历史案例可随后展开。金额没有特别说明时均为百万美元；材料期次固定，不代表今天的账户余额。

<a id="bf19-structure"></a>
## 1. 三个问题，三套相连的证据

<strong>偿付能力</strong>关心企业能否以资产和未来经营成果承受已有义务。债务提供了提前使用资金的能力，却把利息、本金和可能的担保条件带入未来。判断它是否合适，需要把债务用途与产生现金的经营活动放在一起：建设尚未投用、季节性备货和已稳定收款的业务，不能只凭同一个债务总额比较。

<strong>到期需求</strong>则是带日期的付款安排。票据本金在某年到期，并不说明当年只须付这一笔钱；利息、租金、员工、供应商和已承诺建设还在继续。<strong>流动性</strong>关心支付时点的资金路径：现金在哪里，证券能否及时变现，授信能否提款，抵押物是否已经准备好，资金能否在法人之间转移。这里的关键词是“在需要的时点”。[^framework]

把一项义务放进表时，至少保留金额、币种、日期和主体；把一项来源放进表时，还要写取得它所需的动作。现金通常不需要新借款动作；证券出售可能受结算时间和价格影响；授信还要核有效期、条件和当时未使用额度。账面上的“有”与付款账户里“可用”因此有了距离。

| 要回答的问题 | 首先取哪些材料 | 本次分析的产物 |
|---|---|---|
| 长期能否承受 | 经营与资产结构、利润及现金形成、债务与利息 | 债务由什么支持，以及支持条件 |
| 何时必须付款 | 本金到期表、利息安排、租赁与经营承诺 | 按时间排序的需求表 |
| 届时从哪里付款 | 现金、可变现证券、授信、抵押安排、主体限制 | 带条件的可动用来源表 |

这些不是互不相干的检查。缺少长期承受力可能使续借变难；即使资产最终能回收，一次付款时间错配也会迫使企业提前出售资产。下面两种行业正好展示这种联系的不同形状。

<div data-reading-branch-controls><button data-select-reading-branch="retail">零售：Costco</button><button data-select-reading-branch="bank">银行：JPMorgan Chase</button><button data-select-reading-branch="all">两支展开</button></div>

<section data-reading-branch="retail">

<a id="bf19-retail"></a>
## 2. 零售：先把债务放到日历上

Costco的商品采购、门店经营和会员服务持续产生收付，债务却有自己的本金到期安排。我们先读FY2025年报的Note 4，而不是先用现金减债务。以下保留两期全部长期债务行；同一张表的本金、发行费用和流动部分要分开读。[^costdebt]

| 原行名称 | 中文读法 | 2025-08-31 | 2024-09-01 |
|---|---|---:|---:|
| 3.000% Senior Notes due May 2027 | 2027年5月到期3.000%高级票据 | 1,000 | 1,000 |
| 1.375% Senior Notes due June 2027 | 2027年6月到期1.375%高级票据 | 1,250 | 1,250 |
| 1.600% Senior Notes due April 2030 | 2030年4月到期1.600%高级票据 | 1,750 | 1,750 |
| 1.750% Senior Notes due April 2032 | 2032年4月到期1.750%高级票据 | 1,000 | 1,000 |
| Other long-term debt | 其他长期债务 | 805 | 919 |
| <strong>Total long-term debt</strong> | <strong>本金合计</strong> | <strong>5,805</strong> | <strong>5,919</strong> |
| Less unamortized debt discounts and issuance costs | 减：未摊销折价和发行费用 | (17) | (22) |
| Less current portion | 减：流动部分（原脚注净额口径） | (75) | (103) |
| <strong>Long-term debt, excluding current portion</strong> | <strong>非流动账面债务</strong> | <strong>5,713</strong> | <strong>5,794</strong> |

单位：USD million。原脚注：流动部分扣除相关未摊销折价及发行费用，列入其他流动负债；不可泛化为流动账面额永远等于未折现本金。

以2025年为例，本金5,805扣除未摊销折价及发行费用17，得到账面合计5,788；再减列入流动负债的75，得到非流动账面债务5,713。于是，问“以后要归还多少本金”取5,805，问“非流动负债这一行是多少”取5,713。两个答案针对的对象不同，没有必要选一个把另一个改掉。

<a id="bf19-maturity"></a>
### 把本金拆到付款年度

| 原到期列 | 本金 | 从FY2026起累计 |
|---|---:|---:|
| 2026 | 75 | 75 |
| 2027 | 2,250 | 2,325 |
| 2028 | — | 2,325 |
| 2029 | 148 | 2,473 |
| 2030 | 1,750 | 4,223 |
| Thereafter | 1,582 | 5,805 |
| Total | 5,805 | 5,805 |

这里是截至2025-08-31披露的未来本金，年度为Costco财年。“其后”不是某一个明确日期。FY2027的2,250可以回到上表两笔2027年高级票据：1,000加1,250。这样读，较集中的到期需求已有了具体来源；零到期年度也不等于没有利息或经营付款。[^costdebt]

### 期末资金与以后到期之间，还缺什么

同一期末现金及现金等价物14,161、短期投资1,123，合计15,284。年报另披露银行设施借款容量1,220，但多数设施在一年内到期，可借金额受未结信用证影响，续期是公司的意图，不是跨到FY2027的既定事实。我们把1,220放在“有条件来源”，不和现金使用同一种标签，信用证如何影响额度要按同口径披露核对，不把另列金额再次扣除而造一套未披露净额度。[^costfacility]

先做一个范围很窄、却能完全重算的比较：选期末现金和短投，减去截至FY2027的已列本金，得到15,284−2,325＝12,959。这个结果的正确名称是<strong>所选期末资产与所选本金的差额</strong>。它帮助我们定位本金集中程度，却还没有把未来经营现金、资本支出和其他付款接进来。FY2025的经营现金流13,335是已经发生的期间流量；把它再当成今天余额相加，会把“过去怎样形成现金”和“现在有多少现金”混在一起。[^costcash]

接下来真正该做的是补需求：票据利息按合约什么时候付，门店建设是否已有承诺，供应商和租赁付款能否改变，哪些金额已包含在经营现金流预测里。来源也须同步补日期：证券出售何时结算，设施是否仍有效。这样得到的才是资金安排，而不是由一个很大的正差额替未来作保证。

### 自己完成一个到期阅读任务

先遮住答案：只使用上表，算出FY2027当年本金、截至该年的累计本金，以及非流动账面额5,713为什么不同于总本金。再把1,220设施写成一句带条件的说明。

<details><summary>展开完整解析</summary>

当年2,250；累计75＋2,250＝2,325。5,713＝5,805−17−75，其中17是账面计量扣项，75是流动部分的分类，不是少还了相应本金。设施可以写成：“2025-08-31披露容量1,220，多数一年内到期，可动用金额受信用证及设施条件影响；若要覆盖FY2027付款，需先核续期与当时额度。”这比写“备用现金1,220”多保留了真正会改变结论的条件。

</details>

</section>

<section data-reading-branch="bank">

<a id="bf19-bank"></a>
## 3. 银行：资金来源本身就是业务的一部分

对银行，客户存款一方面支持贷款、证券和支付服务，另一方面代表客户的提款权利。分析的次序因此改变：先看谁提供资金、这些资金怎样流动，再看资产在哪些条件下能变成现金。把存款全部当普通企业的借款、把贷款当商品库存，都会失去业务含义。

JPMorgan Chase年报的Liquidity Risk Management把内部压力测试、融资安排、法人限制和监管指标放在同一章。下表是<strong>集团季度平均</strong>口径，并另保留银行法人行；它不是2025年12月31日的单日现金余额。[^jpmliq]

| 原行名称 | 中文读法 | 3m ended 2025-12-31 | 3m ended 2025-09-30 | 3m ended 2024-12-31 |
|---|---|---:|---:|---:|
| Eligible cash | 符合条件的现金 | 281,117 | 308,298 | 396,123 |
| Eligible securities | 符合条件的证券 | 680,862 | 638,020 | 464,877 |
| <strong>Total eligible HQLA</strong> | <strong>集团HQLA合计</strong> | <strong>961,979</strong> | <strong>946,318</strong> | <strong>861,000</strong> |
| Total net cash outflows | 净现金流出压力量 | 868,500 | 858,157 | 763,648 |
| LCR | 集团LCR（%） | 111 | 110 | 113 |
| Net excess eligible HQLA | 集团超额HQLA | 93,479 | 88,161 | 97,352 |
| JPMorgan Chase Bank, N.A. LCR | 银行法人LCR（%） | 115 | 117 | 124 |
| JPMorgan Chase Bank, N.A. net excess eligible HQLA | 银行法人超额HQLA | 138,052 | 152,886 | 193,682 |

单位：USD million。季度平均；银行法人行与集团行身份不同。证券使用监管公允价值及haircut口径。 集团排除银行超过独立最低要求且无法转移给非银行关联方的HQLA；金额比值不是逐日监管比率平均的重新计算。

<strong>高质量流动性资产（HQLA）</strong>是在该监管框架下满足条件的资产集合；<strong>流动性覆盖率（LCR）</strong>把它与未来30个日历日规定压力下的净现金流出相比较。这里的证券以监管公允价值和折扣口径处理，集团还排除了银行超过其独立最低要求、却不能转给非银行关联方的部分。规定压力并不是“所有存款同时提款”。[^jpmliq]

先走完集团一列：281,117＋680,862＝961,979；减868,500得到93,479。用两个平均金额相除得到110.7633%，与披露取整111%相容。这是表内金额核对，而不是声称已经用每天的数据重算监管平均比率。银行法人JPMorgan Chase Bank, N.A.的115%是另一主体的结果；它不能代替集团111%。

<a id="bf19-bank-layers"></a>
### 再看期末资产和融资能力，但不要换错时点

年报另有一个期末视图：2025-12-31，未扣监管haircut的期末HQLA约915十亿美元，加其他无抵押可交易证券约548十亿美元，约为1,463十亿美元，对应披露的约1.5万亿美元可用现金和证券。这里没有使用刚才的季度平均961.979十亿美元。[^jpmsources]

| 视图 | 材料中的金额 | 它回答什么 |
|---|---:|---|
| 集团季度平均监管视图 | HQLA 961,979百万美元 | 规定压力框架下的平均监管覆盖 |
| 期末资产视图 | 约915＋548＝1,463十亿美元 | 期末披露的现金与证券资源 |
| 抵押融资能力视图 | 约449十亿美元 | 在抵押、渠道、主体与操作条件下可能取得的融资 |

449十亿美元的原文说明明确排除了已经列在HQLA或其他无抵押证券中的资产所提供的相关借款能力，不能简单说它必然重复。另一方面，排除了重复也不会让<strong>融资能力</strong>自动变成<strong>已经在账户中的现金</strong>。正确的做法是保留它的渠道与可动用条件，问抵押物能否按时动员，而不是把三行加成一个没有条件的“总现金”。[^jpmsources]

期末客户存款2,559,320百万美元，其中估计未保险存款1,558,600百万美元，占60.8990%。这个比例提醒我们继续读客户类型、账户用途和资金集中程度；它不是未来挤兑概率。稳定性需要由存款行为和业务关系解释，不由“未保险”三个字单独决定。[^jpmdeposits]

### 自己完成一个银行资金任务

先算集团表内比率及超额，再指出以下三项分别属于什么时间或主体：111%、115%、约915十亿美元。最后写出要使用449十亿美元融资能力前应查的一项具体条件。

<details><summary>展开完整解析</summary>

961,979÷868,500＝110.7633%，超额93,479。111%为集团季度平均披露，115%为银行法人同期平均，915十亿美元为期末未扣监管折扣的HQLA近似值。可查的条件例如：相应法人是否已向融资渠道交付合格抵押物、额度是否可提用、操作和结算能否赶上现金需求。不能用“能借”代替“付款账户已到账”。

</details>

<details data-agent-option="svb"><summary>历史迁移：SVB 2023，资产可回收与当日可支付之间的距离</summary>
<a id="bf19-svb"></a>

美联储复盘记载，SVB在2023-03-08宣布包括证券出售和拟增资的资产负债调整；3月9日存款流出超过400亿美元，管理层预计次日再流出1,000亿美元，银行于3月10日关闭。后一个数是当时的预期，不是已经实现的另一笔流出。复盘同时记录了未保险存款集中、风险治理、内部压力测试及应急融资缺陷。[^svb]

请把“证券主要信用质量较高”改写为真正有用的一句风险分析。一个可行答案是：“信用质量有助于判断最终回收，但要支付集中提款，还需知道资产出售价格、结算速度及抵押融资是否可操作；应急渠道没有准备好时，账面资源不会自动在付款日变成现金。”这正是从资产质量走到流动性分析的新增步骤，而不是以SVB替JPM作预测。

</details>

<details data-agent-option="research-bank"><summary>研究选读：利率重估为什么还要联读负债结构</summary>
<a id="bf19-research"></a>

Jiang、Matvos、Piskorski与Seru研究2022–2023美国银行在加息中的资产重估与未保险存款融资。这里采用的是2023-09-28公开稿的资产计量和融资机制单元；2024年JFE发表版本是另一版本信息。它把资产损失、资本和负债端提款激励放在一起，但模型及历史样本并不提供本例JPM在2026年的倒闭概率。读研究时要先核资产如何重估、假定哪些存款退出，以及损失由谁承担。[^jiang]

</details>

</section>

<a id="bf19-calendar"></a>
## 4. 给资金表加上日期：一个可操作的压力变式

下面是<strong>独立教学合同，不是任何公司预测</strong>。期初现金1,000；第1天须付供应商900，第2天须还本金500；已有无条件收款权600，默认第1天到账。观察3天，同日约定先收后付，没有其他流量。

| 时点 | 默认收款在第1天：现金 | 只将收款延至第3天：融资前现金 |
|---|---:|---:|
| 期初 | 1,000 | 1,000 |
| 第1天结束 | 700 | 100 |
| 第2天结束 | 200 | (400) |
| 第3天结束 | 200 | 200 |

两种方案期末都余200，但延迟情景第2天缺400。它需要的不是把期末200重新解释一遍，而是在第2天前取得400，或获得一项真正生效的付款调整。若用短期融资跨过缺口，后续收款还要承担还款；若延后供应商付款，须查合同许可与供应关系。收入确认、债务本金和最终净流量都没变，变的是现金到达顺序。

<div data-experiment-slot="EXP-BF19-MATURITY-AND-LIQUIDITY"></div>

在实验中先选行业查看原表含义，再只改教学收款日。图中出现负数表示<strong>安排融资之前</strong>的现金缺口，不是允许企业实际透支而不作安排。重置保留所选行业。

<a id="bf19-exercise"></a>
## 5. 最后写一份可供别人接手的结论

请交三句话：第一句指出所选公司的主要资金来源和债务用途；第二句写一个有明确期间的本金或流动性指标；第三句写下一项必须核实的现金条件。再解答：教学收款延至第3天，最低过桥金额是多少，为什么不是零？

<details><summary>展开收束解析</summary>

零售可写：“Costco以商品及会员经营持续形成资金，并有门店等长期资源投入；FY2027披露本金到期2,250，和截至FY2027累计2,325不同；银行容量1,220多数一年内到期，覆盖该付款期前应核续期和当时可提款条件。”银行可写：“JPM以客户存款等支持贷款、证券及服务；截至2025-12-31三个月集团平均LCR披露111%，并非期末现金/全部存款的比例；下一步核抵押融资可操作性及法人间资金转移。”

教学过桥最低额为400：没有它，第2天累计现金为−400；有它则最低恰好为0，随后收款可补回。即使第3天净余200，提前一天仍存在付款约束。我们已经从“公司有多少钱”走到了“谁在何时用哪笔资金付款”。

</details>

[^framework]: OpenStax，Dahlquist与Knight，Principles of Finance（2022），[§6.3 Liquidity Ratios](https://openstax.org/books/principles-finance/pages/6-3-liquidity-ratios)、[§6.4 Solvency Ratios](https://openstax.org/books/principles-finance/pages/6-4-solvency-ratios)。本篇按行业将比率入口接到日期和资金条件。
[^costdebt]: [Costco FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Note 4—Debt，Long-Term Debt完整表、流动部分脚注及Maturities表；期间2025-08-31/2024-09-01，百万美元。SEC HTML与IR PDF页码不同，以具名表定位。
[^costfacility]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，MD&A“Bank Credit Facilities and Commercial Paper Programs”；资产负债表现金及短投行。容量、未结信用证影响和一年内到期说明一并采用。
[^costcash]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Consolidated Statements of Cash Flows，FY2025 52周列；不把经营期间流量重加到期末现金。
[^jpmliq]: [JPMorgan Chase 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，Liquidity Risk Management，印刷pp100–103／364页PDF一基物理pp132–135；LCR完整表及脚注在印刷p101。
[^jpmsources]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p102“Other unencumbered securities / Borrowing capacity”等资金来源说明，采用期末而非季度平均量。
[^jpmdeposits]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p103存款结构及未保险存款说明，期末2025-12-31。
[^svb]: 美联储，2023-04-28报告[Key Takeaways](https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm)及[Critical Risk Areas的Liquidity Supervision单元（Overview至Conclusions，止于下一节Interest Rate Risk and Investment Portfolio Supervision之前）](https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm)。预计次日提款与已实现单日提款分开。
[^jiang]: Jiang、Matvos、Piskorski、Seru，[2023-09-28公开稿](https://www.clevelandfed.org/-/media/project/clevelandfedtenant/clevelandfedsite/events/financial-stability-conferences/2023-papers/matvos-bank-fragility.pdf)，引言、§2、§3.1–3.2；后发表于Journal of Financial Economics 159（2024），103899。此处不复现总体损失估计。

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>

