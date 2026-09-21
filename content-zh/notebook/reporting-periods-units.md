{
  "title": "财报的期间、范围、币种与可比口径",
  "description": "为真实财务数字保留口径，在不丢失原值的前提下做期间和单位比较，并指出仍不可比较的部分。",
  "layout": "entry",
  "notebookid": "zh-bf03",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf03"
}

两个数字都写着“2025”和“美元”，还不足以直接比较。一个可能是8月末的余额，另一个是截至12月的全年流量；一个可能是集团合并值，另一个只是子公司。先把口径写完整，不是计算前额外增加的手续，而是在确定我们究竟算什么。

<span id="bf03-observation-scope"></span>

## 1　随数字保存的最小口径

**一个用于比较的财务观测，至少要连同对象与合并范围、项目定义、币种与金额单位、时点或期间、计量及列报口径、原始出处一起保存。** 这是本笔记的数据约定，不是声称所有报告使用同一个数据格式。时点与期间的基本区别见 [BF-02](/zh/notebook/financial-report-map/)。[OPENSTAX-21]

| 字段 | 本例应保存什么 | 最容易发生的错位 |
|---|---|---|
| 对象／范围 | Costco及其全资子公司的合并报表；或JPMorgan Chase & Co.集团合并表 | 把集团与银行子公司、报告分部混在一起 |
| 时间 | `as_of=2025-08-31`，或截至该日52周 | 把期末余额当作全年发生额 |
| 单位 | USD，金额以million计；股数另用shares | 只改“百万／十亿”标签，不改数值 |
| 定义／计量 | 原行名称、净额所扣项目、相关政策 | “贷款”与“扣准备后的贷款”互相替代 |
| 比较版本 | 使用2025年报中列示的2024比较数 | 把旧版与本期重分类后的比较列拼接 |
| 来源与可得时间 | 文档、原表行、页码及该版本何时可取得 | 把财年末当成年报发布日或研究读取日 |

前两家公司的合并范围分别由Costco Note 1和JPM集团报告限定。Costco还明确说明将2024资产负债表作了重分类以配合本期列报。因此，本批两期表采用同一份2025报告中的比较列；该披露本身没有给出我们想象中的全部调整明细。[COST-POLICY]、[JPM-BS]

<span id="bf03-reporting-periods"></span>

## 2　先比较同样长的一段时间，但别把它当作全部解释

Costco FY2025、FY2024各52周，FY2023为53周，年末是最接近8月31日的星期日。它的前三季度各12周，第四季度通常16周，53周财年则为17周；不能把年报机械平均成四个等长季度。[COST-CALENDAR]

下表保留原始数字，全部来自**同一份2025年报的合并利润表**，单位百万美元。它不是同店销售表。[COST-IS]

| 财年 | 期间截至日 | 周数 | Net sales／净销售额 |
|---|---|---:|---:|
| FY2023 | 2023-09-03 | 53 | 237,710 |
| FY2024 | 2024-09-01 | 52 | 249,625 |
| FY2025 | 2025-08-31 | 52 | 269,912 |

2024相对2023的原始增长为 `249625 / 237710 - 1 = 5.0124%`。若只想去掉“多了一周”的机械差异，可以另外计算每周平均净销售额：`249625 / 52 = 4800.4808`，`237710 / 53 = 4485.0943`，其增长为 `((249625 / 52) / (237710 / 53) - 1) = 7.032%`，约7.03%。原始5.01%与按周7.03%都保留，并分别命名。[COST-IS]（本文计算）

这还不是“经营真实增长”的最终答案：平均数没有控制季节性、开店、关闭、商品组合或汇率等影响，也没有把公司全部门店改成可比门店样本。调整只解决它明确处理的问题，不能因为做过一次调整，就替指标换上更强的名称。

反过来，2024-09-01的存货18,647与2025-08-31的存货18,116都是时点余额。**给余额除以52或53，不会得到有意义的同口径期末存货。** 要研究周转，应另选期间成本与适当平均存货，这是BF-16的任务，不是把任何数都除以周数。[COST-BS]

<span id="bf03-units-and-shares"></span>

## 3　单位可以换，原值与含义不能丢

JPM证券附注写出的44.1 **billion**，换到主表的 **million** 单位是44,100，不是44.1。单位换算关系是 `x_million = 1000 * x_billion`。本例金额指证券由AFS转为HTM的类别转移，并不是同额的新购证券现金支出；数值换对以后，事项性质仍要从附注读。[JPM-SEC]

每股口径还多了一层分母。JPM 2025年末普通股权益为342,393百万美元，期末普通股流通股数为2,696,272,576股，所以每股账面值为 `342393 * 1000000 / 2696272576 = 126.9875` 美元/股，约126.99。这里乘一百万是在把百万美元换成美元；分母是期末股数，不是算全年每股收益所用的加权平均股数，结果也不是市场价格。[JPM-BS]（本文计算）

同理，不能只因为两个行名都含 `cash` 就自动认定现金范围相同。Costco Note 1 的现金及现金等价物包含一定结算期内的卡交易待收款；JPM现金流末端有它自己的两行构成。先核定义，再决定能否比较；本页不制造一个未经资料支持的“统一现金”调整数。[COST-CASH]、[JPM-CF]

<span id="bf03-exercises"></span>

## 4　练习：修好一张比较表

**解释题。** 一张表写道：“Costco 2024销售真实增长7.03%，因此2024期末存货也应先除以52再和2023比。”请保留有用的计算，改写错误的结论。

**解析。** 保留“2024相对2023的每周平均净销售额增长约7.03%”，并同时列出原始净销售增长约5.01%。删除“真实增长”，因为周数调整未控制其他因素；删除对期末存货的周数标准化，因为余额不是在52周内累计产生的销售流量。要比较库存，保留相应时点、计量和范围，并另行查找周转需要的分母。[COST-IS]、[COST-CALENDAR]、[COST-BS]

**迁移题。** 下面是明确虚构的另一家公司：第一季度收入100，上半年累计收入230，币种和合并范围相同，且无重述。有人说第二季度收入230、比一季度增长130%。应怎样修正？若上半年发生了合并范围变化，答案又应如何限定？

**解析。** 在题设可比条件下，第二季度单季收入为 `230 - 100 = 130`，相对第一季度增长 `130 / 100 - 1 = 30%`。230是上半年累计，不是第二季度单季。若范围变化，上半年累计减一季度累计仍可能得到报告口径的第二季度流量，但30%不能直接解释为同范围经营增长；必须说明新增合并业务的影响，无法拆分就标记不可比部分。这是期间减法的应用，不是该虚构企业的实际经营资料。

还有一个时间边界：本例中的报告期末描述业务和报表对应的时间，而信息截止日描述本次材料集合允许使用到哪一天。若要还原某个过去交易日的判断，须另外核验当时已经发布了哪些版本，不能把后来才发布的年报写回过去的信息集。

<span id="bf03-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [OPENSTAX-21] | BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系 |
| [COST-POLICY] | BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列 |
| [COST-CALENDAR] | BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日 |
| [COST-IS] | BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales，百万美元 |
| [COST-BS] | BI-S05；合并资产负债表p.39；两期商品存货为时点余额 |
| [COST-CASH] | BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数 |
| [JPM-SEC] | BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228 |
| [JPM-CF] | BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成 |

[OPENSTAX-21]: https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate "BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系"
[COST-POLICY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列"
[COST-CALENDAR]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日"
[COST-IS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales，百万美元"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并资产负债表p.39；两期商品存货为时点余额"
[COST-CASH]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数"
[JPM-SEC]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=260 "BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成"

