{
  "title": "行业分析：从结构到经营路径",
  "description": "把真实售电、发电构成、市场组织和资本计划连成有条件的行业分析.",
  "layout": "entry",
  "notebookid": "zh-ei16",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-ei16"
}

<a id="ei16-boundary"></a>

## 全国统计与地区市场

美国电力统计分别记录最终客户售电、各类机组发电、网络及新增项目. 地区制度、时段供需和公司合同决定全国变化如何进入具体收入.

采用EIA Electric Power Monthly 2026-08-26版，数据至2026年6月. 年度2024行为final，2025行为preliminary；使用Tables 5.1、5.2、1.1. 项目计划另取2026-02-20文章，其依据为2025年12月月度库存. [^sales][^generation][^plan]

<div class="flow">
<div>最终客户用电与账单</div><span>形成各时段负荷要求</span>
<div>电网与可用发电资源</div><span>按地区制度、合同和调度供给</span>
<div>实际发电与购售电</div><span>经过账单和成本结算</span>
<div>不同参与者的收入／费用</div>
</div>

项目沿开发、建设、接入与投运形成容量，投资决定可因未来需求预期而提前启动.

<a id="ei16-demand"></a>

## 售电与收入

Table 5.1的全行业售电量，2024为3,975,382 K MWh，2025为4,058,007 K MWh. 由此得到

$$
\Delta Q=82{,}625\ \mathrm{K\,MWh},
\qquad g_Q\approx2.078\%.
$$

2025售电收入553,285 USD M，除对应电量并换算单位，平均账单收入率约13.634美分/kWh. [^sales]

售电增长可由天气、客户结构、产业负荷和价格反应共同产生.

持续运行的新负荷和短期天气负荷对资源可用时间有不同要求；需求集中于网络受限地区时，还需当地可交付容量. 分客户、地区及小时的数据可以区分这些机制.

<a id="ei16-supply"></a>

## 发电结构变化

Table 1.1的 Generation at Utility Scale Facilities列组记录公用事业规模发电，small-scale solar另列. 下表取煤、气、核、常规水电、太阳能，将总量减五项所得列为“其余净额”. 单位K MWh，增速舍入展示. [^generation]

| 净发电来源 | 2024 final | 2025 preliminary | 同比 |
|---|---:|---:|---:|
| 煤炭 | 652,156 | 737,151 | +13.033% |
| 天然气 | 1,869,902 | 1,807,338 | −3.346% |
| 核能 | 781,865 | 784,781 | +0.373% |
| 常规水电 | 242,896 | 247,023 | +1.699% |
| 公用事业规模太阳能 | 219,834 | 295,671 | +34.497% |
| 其余净额：总量减上述五项 | 541,981 | 557,538 | 由总量约束重建 |
| 公用事业规模总量 | 4,308,634 | 4,429,502 | +2.805% |

**总量增长与来源替代同时发生**：天然气减少62,564 K MWh，煤炭增加84,995 K MWh，公用事业规模太阳能增加75,837 K MWh. 其他来源也在变化，因此解释总量时必须保留反向贡献.

燃料成本、资源可用性、天气、水文、投运退役及网络约束均可改变发电结构. 检验燃料调度机制需匹配地区及期间的燃料交付成本、机组效率和运行记录；检验新增太阳能影响需投运日期与实际出力.

售电增约2.078%，公用事业规模发电增约2.805%. 两者覆盖范围、跨境与购电关系、自然月和账单期间不同，能量平衡需先对齐这些口径.

<a id="ei16-contract"></a>

## 交易结构与公司收入

FERC区分传统垂直一体化区域与ISO／RTO批发市场. PJM协调市场和调度，东南部传统区域更多依赖公用事业及双边交易安排. [^ferc]

对同一份全国需求增长，可以建立三条不同的企业映射：

| 参与者／合同情形 | 行业变化首先影响什么 | 公司分析前还需的资料 |
|---|---|---|
| 有现货敞口的发电业务 | 可发时段、出清价格与燃料成本 | 地区、机组可用率、对冲和售电合同 |
| 费率／成本回收安排下的公用事业 | 购电、燃料费用与获准回收时间 | 具体费率机制、监管资产及负荷结构 |
| 发电设备或建设供应商 | 项目下单、生产、交付和验收 | 中标份额、产品、交期、付款与取消条件 |

不同交易安排决定可采取的行动、计价方式和结算时点. 即使在同一个RTO内，长期合同与现货敞口的公司也可能面对不同收入响应，因此公司映射需要具体合同而不只地区标签.

<a id="ei16-capital"></a>

## 项目计划与有效容量

EIA 2026-02-20文章报告2025年新增约53 GW，2026年当时计划新增86 GW. 月度项目估计会随进度修订. [^plan]

计划容量经投运时点、可用率、资源和运行小时转换为发电；储能另受持续电量约束. 计划兑现率需同一批项目的计划与实际投运.

许可、采购、接网及投运决定项目何时增加当地可用供给. 设备供应商的收入沿交付和验收确认，发电企业沿实际运行和售电确认，需要分别匹配合同及日期.

<div data-experiment-slot="exp-ei16-industry-path"></div>

<a id="ei16-exercises"></a>

## 路径重建与迁移

<strong>重建任务：</strong>用本篇材料完成需求、结构和资本三条路径，每条都写一个已观察事实、一项条件和一项下一步资料.

**解析.** 售电量增约2.078%，进一步按地区负荷及小时曲线分析需求. 发电增约2.805%而天然气降约3.346%，进一步核燃料成本和可用机组. 86 GW为计划，需按项目进度估计投运时间.

<strong>计算任务：</strong>仅凭煤、气、核、水、太阳能五项能否算出总增长？怎样修复？

<strong>解析.</strong> 以总量减五项，得到其余净额541,981和557,538，再合计全部项目. 该净额包含其余技术及表值舍入影响.

<strong>迁移到公司：</strong>某设备供应商说全国新增计划增加，所以自己明年收入也按同比增加. 请给出四个需要补足的连接.

<strong>解析.</strong> 需匹配设备产品范围、中标份额、生产与交付日期、收入确认和付款条件，并检查取消、替代及供应约束.

<strong>迁移到工程机械：</strong>Census M3 2026年5月工程机械出货4,498、未完成订单由11,214增至11,595、新订单4,879、存货由10,593增至10,659，单位均为季调 M 美元. 重建一条证据链. [^m3]

<strong>解析.</strong> 未交订单增381，季调新订单按 $4498+381=4879$ 构造，存货另增66. 交期与产能资料可检验交付瓶颈，客户采购与库存结构可检验需求增长带来的备货.

[^sales]: EIDEF-S19A/B. EIA，*Electric Power Monthly*，2026-08-26发布、data June 2026；定位：Tables [5.1](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1)及[5.2](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2)的2024/2025年度行与表注.
[^generation]: EIDEF-S19C. 同版EPM Table 1.1 “Net Generation by Energy Source: Total (All Sectors)”；定位：2024/2025年度行，口径为 **Generation at Utility Scale Facilities** 列组下的煤、天然气、核能、常规水电、太阳能及其总量；右侧 estimated small-scale solar 不并入该总量，2025为preliminary.[原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_1_1).
[^ferc]: EIDEF-S18. FERC，*Electric Power Markets*，页面标2025-03-27更新；定位：National Overview、PJM、Southeast.[原文](https://www.ferc.gov/electric-power-markets).
[^plan]: EIBC-S05A/B. EIA，2026-02-20，*New U.S. electric generating capacity expected to reach a record high in 2026*，及EIA-860M方法页；定位：2025年12月月度库存资料.[固定文章](https://www.eia.gov/todayinenergy/detail.php?id=67205)；[EIA-860M方法](https://www.eia.gov/electricity/data/eia860m/index.php).
[^m3]: EI-S06-M3-202605与S14. U.S. Census Bureau，*Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report*及*Methodology*；定位：[May 2026四表](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf)，以及[Methodology](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf)的Estimation／Seasonal Adjustment与新订单构造.

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>
