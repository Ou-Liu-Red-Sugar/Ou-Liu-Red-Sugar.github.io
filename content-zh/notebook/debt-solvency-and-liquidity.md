{
  "title": "债务结构、偿付能力与流动性",
  "description": "把长期偿付、到期付款与可动用流动性分开；以Costco和JPM原件完成两种资金分析，再检验收付款日期的缺口.",
  "layout": "entry",
  "notebookid": "zh-bf19",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf19"
}

盈利能力、债务到期和付款日流动性是三个相连但不同的问题：先识别债务由什么经营活动支持，再把义务放到付款日期上，最后核资金在该时点是否可动用. 本篇金额未特别说明时均为 USD M，并固定在各自材料的报告期间.

<a id="bf19-structure"></a>
## 1. 偿付能力、到期需求与流动性

<strong>偿付能力</strong>衡量企业以资产和未来经营成果承受义务的能力. 借款提前提供资金，同时形成利息、本金和担保条件. 建设项目、季节性备货和稳定收款业务有不同的现金生成时间，适合的债务期限与规模也随之改变.

<strong>到期需求</strong>包括带日期的本金、利息、租金、员工、供应商和建设付款. <strong>流动性</strong>取决于这些日期的可用资金：现金所在主体、证券变现与结算速度、授信提款条件、抵押物准备及法人间转移限制. [^framework]

义务表记录金额、币种、付款日期与主体；来源表还记录变现或融资所需动作. 证券出售涉及价格与结算时间，授信涉及有效期、条件和未使用额度.

| 要回答的问题 | 首先取哪些材料 | 本次分析的产物 |
|---|---|---|
| 长期能否承受 | 经营与资产结构、利润及现金形成、债务与利息 | 债务由什么支持，以及支持条件 |
| 何时必须付款 | 本金到期表、利息安排、租赁与经营承诺 | 按时间排序的需求表 |
| 届时从哪里付款 | 现金、可变现证券、授信、抵押安排、主体限制 | 带条件的可动用来源表 |

偿付能力下降会限制续借，付款时间错配会迫使企业提前出售资产；出售折价又可能削弱偿付能力.

<div data-reading-branch-controls><button data-select-reading-branch="retail">零售：Costco</button><button data-select-reading-branch="bank">银行：JPMorgan Chase</button><button data-select-reading-branch="all">两支展开</button></div>

<section data-reading-branch="retail">

<a id="bf19-retail"></a>
## 2. Costco 债务与资金期限

Costco 商品采购、门店经营和会员服务形成持续收付，长期债务另有本金到期安排. 下表为 FY2025 Note 4 的完整长期债务行. [^costdebt]

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

单位：USD M. 原表流动部分扣除相关未摊销折价及发行费用，列入其他流动负债.

2025年本金5,805扣除未摊销折价及发行费用17，得账面债务5,788；再扣流动部分75，得非流动账面债务5,713.

<a id="bf19-maturity"></a>
### 本金到期分布

| 原到期列 | 本金 | 从FY2026起累计 |
|---|---:|---:|
| 2026 | 75 | 75 |
| 2027 | 2,250 | 2,325 |
| 2028 | — | 2,325 |
| 2029 | 148 | 2,473 |
| 2030 | 1,750 | 4,223 |
| Thereafter | 1,582 | 5,805 |
| Total | 5,805 | 5,805 |

该表列示2025-08-31的未来本金安排，年度按 Costco 财年划分. FY2027的2,250对应两笔2027年高级票据1,000与1,250；“其后”为剩余年度合计. 利息及经营付款须另列日期. [^costdebt]

### 期末资金与未来到期的时间缺口

同期现金及现金等价物14,161，加短期投资1,123，共15,284. 银行设施借款容量1,220属于有条件来源：多数设施一年内到期，可借金额受未结信用证影响，覆盖FY2027付款需核续期及届时额度. [^costfacility]

期末现金与短投15,284，减截至FY2027的已列本金2,325，差额为12,959. 该比较仅包含所选资产和本金；完整现金路径还需未来经营收付、资本支出及其他付款. FY2025经营现金流13,335已形成期末余额. [^costcash]

扩展资金表时，逐笔加入票据利息、已承诺建设、供应商及租赁付款，标记已包含在经营现金流预测内的金额；同时加入证券出售结算日、授信有效期和提款条件.

### 到期结构练习

先遮住答案：只使用上表，算出FY2027当年本金、截至该年的累计本金，以及非流动账面额5,713为什么不同于总本金. 再把1,220设施写成一句带条件的说明.

<details><summary>展开完整解析</summary>

当年本金2,250，累计本金75＋2,250＝2,325. 非流动账面额5,713＝本金5,805−计量扣项17−流动部分75. 银行设施截至2025-08-31容量1,220，多数一年内到期，可动用金额受信用证及设施条件影响；覆盖FY2027付款前需核续期和届时额度.

</details>

</section>

<section data-reading-branch="bank">

<a id="bf19-bank"></a>
## 3. JPM 资金来源与流动性

银行客户存款为贷款、证券和支付服务提供资金，同时形成提款义务. 资金来源、账户行为与资产变现速度共同决定现金路径.

JPMorgan Chase年报的 Liquidity Risk Management 同时披露内部压力测试、融资安排、法人限制及监管指标. 下表分别列集团与银行法人的季度平均口径. [^jpmliq]

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

单位：USD M. 两个季度平均金额之比与逐日监管比率平均采用不同计算顺序.

<strong>高质量流动性资产（HQLA）</strong>为满足监管条件的资产；<strong>流动性覆盖率（LCR）</strong>将其与未来30个日历日规定压力情景下的净现金流出比较. 证券采用监管公允价值及 haircut；集团排除银行超出独立最低要求且无法转给非银行关联方的 HQLA. [^jpmliq]

集团季度平均口径为281,117＋680,862＝961,979；减868,500得到93,479. 两个平均金额相除约110.763%，与披露111%相容；监管披露比率仍以原表111%为准. JPMorgan Chase Bank, N.A. 的115%属于另一法人主体.

<a id="bf19-bank-layers"></a>
### 期末资产与融资能力的时点边界

2025-12-31，未扣监管 haircut 的期末 HQLA 约915 B美元，其他无抵押可交易证券约548 B美元，两项约1,463 B美元，年报概述为约1,500 B美元可用现金和证券. [^jpmsources]

| 视图 | 材料中的金额 | 它回答什么 |
|---|---:|---|
| 集团季度平均监管视图 | HQLA 961,979 M 美元 | 规定压力框架下的平均监管覆盖 |
| 期末资产视图 | 约915＋548＝1,463 B 美元 | 期末披露的现金与证券资源 |
| 抵押融资能力视图 | 约449 B 美元 | 在抵押、渠道、主体与操作条件下可能取得的融资 |

另列抵押融资能力449 B美元，原文已排除由上述 HQLA 或其他无抵押证券产生的相关借款能力. 取得这项资金仍需合格抵押物、融资渠道、法人主体及操作条件，并在付款日前完成提款. [^jpmsources]

期末客户存款2,559,320 M 美元，其中估计未保险存款1,558,600 M 美元，占约60.899%. 该比例描述期末资金结构；稳定性还需客户类型、账户用途、集中度与实际资金行为证据. [^jpmdeposits]

### 银行资金练习

先算集团表内比率及超额，再指出以下三项分别属于什么时间或主体：111%、115%、约915 B 美元. 最后写出要使用449 B 美元融资能力前应查的一项具体条件.

<details><summary>展开完整解析</summary>

961,979÷868,500≈110.763%，超额93,479. 111%为集团季度平均披露，115%为银行法人同期平均；915 B美元为期末未扣监管折扣的 HQLA 近似值. 动用抵押融资前需核合格抵押物交付、可用额度和结算时间.

</details>

<details data-agent-option="svb"><summary>历史迁移：SVB 2023流动性</summary>
<a id="bf19-svb"></a>

美联储复盘记载，SVB于2023-03-08宣布证券出售和拟增资安排，3月9日实际流出存款超过40 B美元，管理层预计次日再流出100 B美元. 银行于3月10日关闭. 复盘还记录了未保险存款集中、风险治理、内部压力测试与应急融资缺陷. [^svb]

信用质量有助于判断最终回收；集中提款时还要核资产出售价格、结算速度及抵押融资可操作性. 应急渠道未准备好时，账面资源可能无法在付款日转成可用现金.

</details>

<details data-agent-option="research-bank"><summary>研究选读：利率重估与负债结构</summary>
<a id="bf19-research"></a>

Jiang、Matvos、Piskorski与Seru的2023-09-28公开稿分析2022–2023美国银行在加息中的资产重估与未保险存款融资. 资产重估方式、存款退出范围及损失承担顺序共同决定模型中的资本与提款激励. [^jiang]

</details>

</section>

<a id="bf19-calendar"></a>
## 4. 收付日期与资金缺口

下面的三日现金合同为独立教学设定：期初现金1,000；第1天付供应商900，第2天还本金500；已有无条件收款权600，默认第1天到账. 观察3天，同日先收后付，没有其他流量.

| 时点 | 默认收款在第1天：现金 | 只将收款延至第3天：融资前现金 |
|---|---:|---:|
| 期初 | 1,000 | 1,000 |
| 第1天结束 | 700 | 100 |
| 第2天结束 | 200 | (400) |
| 第3天结束 | 200 | 200 |

两种方案期末均余200，延迟收款使第2天出现400缺口. 可行安排需在第2天前取得400过桥资金，或协商生效的付款延期；融资另形成后续还款，延期另受供应合同约束. 两种情景的差异来自收付顺序.

<div data-experiment-slot="EXP-BF19-MATURITY-AND-LIQUIDITY"></div>

图中负数为融资安排前的现金缺口.

<a id="bf19-exercise"></a>
## 5. 综合练习

用所选公司写出主要资金来源、债务用途、一项带期间的本金或流动性指标，以及待核的现金条件. 再计算教学收款延至第3天所需的最低过桥金额.

<details><summary>展开解析</summary>

零售可写：“Costco以商品及会员经营持续形成资金，并有门店等长期资源投入；FY2027披露本金到期2,250，和截至FY2027累计2,325不同；银行容量1,220多数一年内到期，覆盖该付款期前应核续期和当时可提款条件. ”银行可写：“JPM以客户存款等支持贷款、证券及服务；截至2025-12-31三个月集团平均LCR披露111%，并非期末现金/全部存款的比例；下一步核抵押融资可操作性及法人间资金转移. ”

最低过桥额400，使第2天现金从−400恢复到0；第3天收款后，偿还这笔本金仍余200.

</details>

[^framework]: OpenStax，Dahlquist与Knight，Principles of Finance（2022），[§6.3 Liquidity Ratios](https://openstax.org/books/principles-finance/pages/6-3-liquidity-ratios)、[§6.4 Solvency Ratios](https://openstax.org/books/principles-finance/pages/6-4-solvency-ratios).
[^costdebt]: [Costco FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Note 4—Debt，Long-Term Debt完整表、流动部分脚注及Maturities表；期间2025-08-31/2024-09-01， M 美元. SEC HTML与IR PDF页码不同，以具名表定位.
[^costfacility]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，MD&A“Bank Credit Facilities and Commercial Paper Programs”；资产负债表现金及短投行. 容量、未结信用证影响和一年内到期说明一并采用.
[^costcash]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Consolidated Statements of Cash Flows，FY2025 52周列.
[^jpmliq]: [JPMorgan Chase 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，Liquidity Risk Management，印刷pp100–103／364页PDF一基物理pp132–135；LCR完整表及脚注在印刷p101.
[^jpmsources]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p102“Other unencumbered securities / Borrowing capacity”等资金来源说明，采用期末而非季度平均量.
[^jpmdeposits]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p103存款结构及未保险存款说明，期末2025-12-31.
[^svb]: 美联储，2023-04-28报告[Key Takeaways](https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm)及[Critical Risk Areas的Liquidity Supervision单元（Overview至Conclusions，止于下一节Interest Rate Risk and Investment Portfolio Supervision之前）](https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm).
[^jiang]: Jiang、Matvos、Piskorski、Seru，[2023-09-28公开稿](https://www.clevelandfed.org/-/media/project/clevelandfedtenant/clevelandfedsite/events/financial-stability-conferences/2023-papers/matvos-bank-fragility.pdf)，引言、§2、§3.1–3.2；后发表于Journal of Financial Economics 159（2024），103899.

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>
