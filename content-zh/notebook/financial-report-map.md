{
  "title": "财务报告的组成与阅读地图",
  "description": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处。",
  "layout": "entry",
  "notebookid": "zh-bf02",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf02"
}

打开年报，不必从第一页一路读到最后，但也不能只搜索一个数字。我们需要一张地图：先知道自己要回答的是“企业在做什么”“某日有什么”，还是“一段时间里发生了什么”，再去相应位置取材料。此页供 [BF-01](/zh/notebook/business-activities/) 和 [BF-05](/zh/notebook/balance-sheet/) 随时调用，不是一套新的必修课。

<span id="bf02-statement-map"></span>

## 1　主表各自回答什么

**资产负债表记录某一时点已确认的资产、负债与权益；利润表记录一段期间的收入、费用与利润；现金流量表记录一段期间现金的来源与使用；权益变动表把期初权益连接到期末权益。综合收益还包括按相应会计处理未进入当期净利润的其他综合收益项目。** 一家公司可以将相关信息合并或分开呈现，所以不应只凭“有几张表”判断报告是否完整。[OPENSTAX-21]、[SEC-GUIDE]

这些表不是对同一笔金额的重复展示。利润影响权益，但权益也会因出资、分配和其他综合收益改变；利润与现金的时间和范围不相同，需要现金流量表解释；现金流的期末金额又要回到资产负债表及现金定义核对。更完整的联动在 BF-04、BF-07、BF-08 展开；此处先保留“时点表”与“期间表”的区别。[OPENSTAX-21]

下面使用 **Costco FY2025 SEC HTML 10-K 的印刷页码**。同一公司另一个排版版本可能有不同页码，文档名称和表名都属于定位的一部分。[COST-MAP]

| 原件位置 | 看什么 | 能回答的具体问题 |
|---|---|---|
| Item 1，Business，p.3起 | 企业、产品、服务、交易过程 | 某个收入或资产来自什么活动？ |
| Item 1A，Risk Factors | 具名风险披露 | 哪些条件可能影响经营？不能由风险清单推成发生概率 |
| Item 7，MD&A，p.23起 | 管理层对结果、财务状况与资金的讨论 | 管理层怎样解释变化？这些解释对应哪些可核数字？ |
| Item 8，目录p.33；审计报告pp.34–36 | 报表审计、关键审计事项及内控审计意见 | 审计对象、期间、适用框架和意见是什么？ |
| Consolidated Statements of Income，p.37 | 合并利润表 | 本期收入和利润怎样形成？ |
| Consolidated Statements of Comprehensive Income，p.38 | 合并综合收益表 | 净利润以外还有哪些综合收益变化？ |
| Consolidated Balance Sheets，p.39 | 合并资产负债表 | 两个期末的资源、义务和权益怎样分布？ |
| Consolidated Statements of Equity，p.40 | 合并权益变动表 | 利润、分配、出资和其他事项怎样改变权益？ |
| Consolidated Statements of Cash Flows，p.41 | 合并现金流量表 | 本期实际资金来源与使用如何连接期初、期末？ |
| Notes，p.42起 | 政策、明细、估计、期限和承诺 | 主表这一行具体包括什么、怎样计量？ |

附注不是主表之外的可有可无说明，而是解释这些金额所必需的材料。MD&A 则保留管理层自己的解释身份，不能代替原表。Costco 的审计报告对合并财报发表意见，并明确是对重大错报取得合理保证；它没有替读者承诺未来盈利或股票价值。[COST-AUDIT]

<span id="bf02-cash-bridge"></span>

## 2　沿同一个数字走一遍

假设我们在 Costco 2025-08-31 的资产负债表找到 **Cash and cash equivalents，14,161**。先不要写“公司一年赚了141.61亿美元”，而是把三处材料接起来。[COST-BS]

第一处是 **p.39 主表**：这是某日余额，单位为百万美元，范围为集团合并报表。第二处是 **p.41 现金流量表**：期初现金9,906，本期经营、投资、筹资和汇率影响依次为13,335、−5,311、−3,775、6，于是 `9906 + 13335 - 5311 - 3775 + 6 = 14161`。这一步解释余额怎么变，却没有把所有变化都称为利润。[COST-CF]

第三处是 **Note 1，p.42，Cash and Cash Equivalents**。公司定义还包含结算期不超过四天的信用卡和借记卡交易待收款。因此，这一行也不宜被改写成“期末银行账户里已经到账的现金”。同一个数字，从主表到现金流再到附注，分别解决了时点、变化和定义三个问题。[COST-CASH]

这就形成了一条可复用的阅读路径：**报表行定位对象，另一张表解释变化，附注限定含义。** 需要解释原因时，再去找对应的管理层讨论和经营材料；数字之间算得上，不等于经营原因已经证明。

换到银行，这张地图仍然有用，但要沿它自己的表头走。JPMorgan 2025年报的资产负债表在印刷p.167／PDF物理p.199；现金流量表在印刷p.169／物理p.201。现金流末端343,338对应资产端的现金及应收银行款21,742与存放银行款321,596之和，而不是负债端的客户存款。我们迁移的是查找和核对的方法，不是零售公司的科目定义。[JPM-BS]、[JPM-CF]

<span id="bf02-exercises"></span>

## 3　练习：不是找到相同单词就结束

**定位题。** 同一份 Costco 年报里，`Merchandise inventories` 有18,116和559两个数。请分别写出表名、时间性质、单位和用途，并判断能否将559加到18,116上当作“更完整的期末存货”。

**解析。** 18,116在p.39资产负债表，是2025-08-31的存货余额；559在p.41现金流量表的经营活动调整中，属于截至该日52周的期间调整。两者单位同为百万美元，时间和含义却不同，不能相加成新的期末余额。若要了解存货计量，应去Note 1的 `Merchandise Inventories` 小节，而不是因现金流行同名就认定完成了全部解释。[COST-BS]、[COST-CF]、[COST-INVENTORY]

**迁移题。** 有人拿 JPM 的PDF物理第167页，找不到预期的资产负债表，就改从搜索摘要抄一个总资产数。应该怎样修正这一步？

**解析。** 先区分印刷页与PDF物理页：本例的印刷p.167对应物理p.199。到该页核对公司集团名称、表名、两个时点和百万美元单位，再读取行与脚注。即便搜索摘要的数恰好正确，也缺少表头、范围与附注，不能替代这条定位。银行与零售的完整原表及带读都见 [BF-05](/zh/notebook/balance-sheet/)。[JPM-BS]

<span id="bf02-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [OPENSTAX-21] | BI-S01；OpenStax Principles of Accounting Vol.1，2019，§2.1完整单元；四张报表及其联系 |
| [SEC-GUIDE] | BF-S-SEC-GUIDE；SEC公开指南，2014发布、2017复核；Financial Statements、Footnotes、MD&A等相关单元 |
| [COST-MAP] | BI-S05；Costco FY2025 SEC 10-K，总目录及Item 8目录p.33；Business p.3起、MD&A p.23起 |
| [COST-AUDIT] | BI-S05；Reports of Independent Registered Public Accounting Firm pp.34–36；财报Opinion与Basis p.34，内控Opinion p.36 |
| [COST-BS] | BI-S05；完整合并资产负债表印刷p.39；百万美元，2025-08-31及2024-09-01 |
| [COST-CF] | BI-S05；完整合并现金流量表印刷p.41；现金总桥及Merchandise inventories调整行 |
| [COST-CASH] | BI-S05；Note 1 Cash and Cash Equivalents，印刷p.42；包括结算期不超过4天的卡交易待收款 |
| [COST-INVENTORY] | BI-S05；Note 1 Merchandise Inventories，印刷p.44；存货计量、损失及供应商折扣相关政策 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整合并资产负债表及脚注 |
| [JPM-CF] | BI-S07；JPMorgan 2025 Annual Report，印刷p.169／物理p.201；期末现金343,338的两行构成 |

[OPENSTAX-21]: https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate "BI-S01；OpenStax Principles of Accounting Vol.1，2019，§2.1完整单元；四张报表及其联系"
[SEC-GUIDE]: https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements "BF-S-SEC-GUIDE；SEC公开指南，2014发布、2017复核；Financial Statements、Footnotes、MD&A等相关单元"
[COST-MAP]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K，总目录及Item 8目录p.33；Business p.3起、MD&A p.23起"
[COST-AUDIT]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Reports of Independent Registered Public Accounting Firm pp.34–36；财报Opinion与Basis p.34，内控Opinion p.36"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并资产负债表印刷p.39；百万美元，2025-08-31及2024-09-01"
[COST-CF]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并现金流量表印刷p.41；现金总桥及Merchandise inventories调整行"
[COST-CASH]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Cash and Cash Equivalents，印刷p.42；包括结算期不超过4天的卡交易待收款"
[COST-INVENTORY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Merchandise Inventories，印刷p.44；存货计量、损失及供应商折扣相关政策"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整合并资产负债表及脚注"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；JPMorgan 2025 Annual Report，印刷p.169／物理p.201；期末现金343,338的两行构成"

