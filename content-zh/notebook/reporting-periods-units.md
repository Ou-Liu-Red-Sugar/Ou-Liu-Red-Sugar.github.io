{
  "title": "财报的期间、范围、币种与可比口径",
  "description": "比较财务数字的报告期间、合并范围与币种，按原始口径换算，并识别可比性限制.",
  "layout": "entry",
  "notebookid": "zh-bf03",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf03"
}

财务数字的比较依赖项目、范围、期间和计量口径. 同为美元金额，期末余额与全年流量、集团合并值与子公司值分别对应不同对象.

<span id="bf03-observation-scope"></span>

## 1　随数字保存的最小口径

**一个用于比较的财务观测，至少要连同对象与合并范围、项目定义、币种与金额单位、时点或期间、计量及列报口径、原始出处一起保存.** 这是本笔记用于保持比较口径的数据约定；时点与期间的基本区别见 [BF-02](/zh/notebook/financial-report-map/). [OPENSTAX-21]

| 字段 | 本例应保存什么 | 最容易发生的错位 |
|---|---|---|
| 对象／范围 | Costco及其全资子公司的合并报表；或JPMorgan Chase & Co.集团合并表 | 把集团与银行子公司、报告分部混在一起 |
| 时间 | `as_of=2025-08-31`，或截至该日52周 | 把期末余额当作全年发生额 |
| 单位 | USD，金额以 M 计；股数另用shares | 只改“ M ／ B ”标签，不改数值 |
| 定义／计量 | 原行名称、净额所扣项目、相关政策 | “贷款”与“扣准备后的贷款”互相替代 |
| 比较版本 | 使用2025年报中列示的2024比较数 | 把旧版与本期重分类后的比较列拼接 |
| 来源与可得时间 | 文档、原表行、页码及该版本何时可取得 | 把财年末当成年报发布日或研究读取日 |

前两家公司的合并范围分别由Costco Note 1和JPM集团报告限定. Costco还明确说明将2024资产负债表作了重分类以配合本期列报. 因此，本批两期表采用同一份2025报告中的比较列. [COST-POLICY]、[JPM-BS]

<span id="bf03-reporting-periods"></span>

## 2　52/53周期间的可比调整

Costco FY2025、FY2024各52周，FY2023为53周，年末是最接近8月31日的星期日. 它的前三季度各12周，第四季度通常16周，53周财年则为17周；不能把年报机械平均成四个等长季度. [COST-CALENDAR]

下表保留原始数字，全部来自**同一份2025年报的合并利润表**，单位 M 美元. [COST-IS]

| 财年 | 期间截至日 | 周数 | Net sales／净销售额 |
|---|---|---:|---:|
| FY2023 | 2023-09-03 | 53 | 237,710 |
| FY2024 | 2024-09-01 | 52 | 249,625 |
| FY2025 | 2025-08-31 | 52 | 269,912 |

2024相对2023的净销售额增长为 `249625 / 237710 − 1 ≈ 5.012%`. 两年的每周平均净销售额分别为 `249625 / 52 ≈ 4800.481`、`237710 / 53 ≈ 4485.094`，因此每周平均增长为 `((249625 / 52) / (237710 / 53) − 1) ≈ 7.032%`. [COST-IS]（本文计算）

每周平均增长只调整了52/53周的长度差异. 季节性、开店、关闭、商品组合和汇率仍可能影响结果；同店增长另需按公司定义选取可比门店.

2024-09-01的存货18,647与2025-08-31的存货18,116均为时点余额，应直接保留对应时点. 周转分析则需将期间成本与适当的平均存货匹配，见BF-16. [COST-BS]

<span id="bf03-units-and-shares"></span>

## 3　单位换算与每股分母

JPM证券附注中的44.1 B美元等于主表单位下的44,100 M美元. 该金额是证券由AFS转入HTM的类别转移，现金流仍需按证券实际买卖另行识别. [JPM-SEC]

JPM 2025年末普通股权益为342,393 M美元，期末普通股流通股数为2,696,272,576股，每股账面值为 `342393 × 1000000 / 2696272576 ≈ 126.988` 美元/股. 分子先换成美元，分母采用期末股数；期间每股收益则使用相应的期间加权平均股数. [JPM-BS]（本文计算）

现金范围按各公司附注界定. Costco的现金及现金等价物包含一定结算期内的卡交易待收款；JPM现金流末端对应现金及应收银行款、存放银行款两行. 比较时需保留这些范围差异. [COST-CASH]、[JPM-CF]

<span id="bf03-exercises"></span>

## 4　比较表修正练习

**解释题.** 一张表写道：“Costco 2024销售真实增长7.03%，因此2024期末存货也应先除以52再和2023比. ”请保留有用的计算，改写错误的结论.

**解析.** 保留“2024相对2023的每周平均净销售额增长约7.03%”，并同时列出原始净销售增长约5.01%. 删除“真实增长”，因为周数调整未控制其他因素；删除对期末存货的周数标准化，因为余额不是在52周内累计产生的销售流量. 要比较库存，保留相应时点、计量和范围，并另行查找周转需要的分母. [COST-IS]、[COST-CALENDAR]、[COST-BS]

**迁移题.** 教学设定：一家公司的第一季度收入100，上半年累计收入230，币种和合并范围相同，且无重述. 有人说第二季度收入230、比一季度增长130%. 应怎样修正？若上半年发生了合并范围变化，答案又应如何限定？

**解析.** 在题设可比条件下，第二季度单季收入为 `230 - 100 = 130`，相对第一季度增长 `130 / 100 - 1 = 30%`. 230是上半年累计，不是第二季度单季. 若范围变化，上半年累计减一季度累计仍可能得到报告口径的第二季度流量，但30%不能直接解释为同范围经营增长；必须说明新增合并业务的影响，无法拆分就标记不可比部分.

报告期末是报表描述的业务时点，信息截止日限定可以使用的已发布材料. 还原过去交易日的判断时，采用当时已发布的版本.

<span id="bf03-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [OPENSTAX-21] | BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系 |
| [COST-POLICY] | BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列 |
| [COST-CALENDAR] | BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日 |
| [COST-IS] | BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales， M 美元 |
| [COST-BS] | BI-S05；合并资产负债表p.39；两期商品存货为时点余额 |
| [COST-CASH] | BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数 |
| [JPM-SEC] | BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228 |
| [JPM-CF] | BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成 |

[OPENSTAX-21]: https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate "BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系"
[COST-POLICY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列"
[COST-CALENDAR]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日"
[COST-IS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales， M 美元"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并资产负债表p.39；两期商品存货为时点余额"
[COST-CASH]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数"
[JPM-SEC]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=260 "BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成"
