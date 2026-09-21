{
  "title": "行业指标、比较与证据选择",
  "description": "从经营机制选择最少但足够的指标，在电力、制造、零售、银行中完成一支带读.",
  "layout": "entry",
  "notebookid": "zh-ei15",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-ei15"
}

<a id="ei15-structure"></a>

## 指标与经营过程

需求、生产瓶颈、渠道调整、融资成本和统计范围变化，可能产生相似的指标走势. 选择资料取决于需要区分哪几种机制.

订单记录购买承诺，出货记录交付，库存记录跨期余额，价格反映供需共同作用，净息差计量银行的利息经营.

指标说明包括计量对象、总体、单位、期间、存量或流量、发布日期、版本及对应机制. 发布滞后、修订及统计构造会改变其解释.

若新订单按出货与未交订单变化构造，三个字段只包含两项独立观察. 若统计总体发生变化，同一时期的重述表可分离范围影响.

<a id="ei15-branches"></a>

## 行业分支

<div data-reading-branch-controls>
<button data-select-reading-branch="electricity">电力</button>
<button data-select-reading-branch="manufacturing">制造</button>
<button data-select-reading-branch="retail">零售</button>
<button data-select-reading-branch="banking">银行</button>
<button data-select-reading-branch="all">全部展开</button>
</div>

<section data-reading-branch="electricity">

<a id="ei15-electricity"></a>

### 电力容量、发电与售电

容量以MW记录，期间发电和售电以MWh记录. 容量经资源可用性与运行时间形成发电，售电还经网络、跨区交易、损耗和账单周期.

本例固定 EIA *Electric Power Monthly*，2026-08-26发布、数据至2026年6月. Table 5.1和5.2的全行业年度行为：

| 指标 | 2024 | 2025 | 单位／状态 |
|---|---:|---:|---|
| 向最终客户售电量 | 3,975,382 | 4,058,007 |  K MWh；2024 final，2025 preliminary |
| 2025售电收入 | — | 553,285 | M 美元；preliminary |

该版2025、2026售电及收入采用cutoff model sample的初步估计，按约28–35天账单周期累计. [^epmsales][^epmrevenue]

售电增长率为
$$
g_Q=\frac{4{,}058{,}007}{3{,}975{,}382}-1
\approx2.078\%.
$$
由 $1\ \mathrm{K\,MWh}=10^6\ \mathrm{kWh}$，平均账单收入率为
$$
\begin{aligned}
\bar p&=\frac{553285\times10^6\ \mathrm{USD}}
{4058007\times10^6\ \mathrm{kWh}}\times100\\
&\approx13.634\ \mathrm{cents/kWh}.
\end{aligned}
$$
该平均值包含客户、地区、费率及用量构成.

新增容量对售电的影响取决于投运时点、可用率、客户需求及覆盖范围，需结合发电、负荷与项目日期分析.

</section>

<section data-reading-branch="manufacturing">

<a id="ei15-manufacturing"></a>

### 制造业订单的统计构造

本例沿用Census M3的2026年5月固定发布版，2026-07-02公开. 先看表的组成：Table 1是当月出货，Table 2是当月新订单，Table 3是月末未完成订单，Table 4是月末存货. 前两者是期间流量，后两者是余额. 工程机械行如下，均为季调 M 美元，未作价格调整. [^m3table]

| 工程机械 | 4月，本版修订值 | 5月，初值 |
|---|---:|---:|
| 出货S | 4,424 | 4,498 |
| 新订单N | 4,734 | 4,879 |
| 月末未完成订单B | 11,214 | 11,595 |
| 月末存货I | 10,593 | 10,659 |

Census方法按出货与未交订单月差构造总体新订单，季调数据亦如此，取消及修改影响计入新订单. 一般企业台账可按自身定义另列调整项. [^m3method]

本例
$$
\begin{aligned}
N_t^{SA}&=S_t^{SA}+B_t^{SA}-B_{t-1}^{SA}\\
&=4498+(11595-11214)=4879.
\end{aligned}
$$
381连接同版统计字段，可用于检查抄录、单位及版本.

存货另增 $10659-10593=66$，记录物品的会计金额余额. 研究生产瓶颈需再取产量、交期、缺料与利用率，研究客户需求需采购计划和取消订单等资料.

</section>

<section data-reading-branch="retail">

<a id="ei15-retail"></a>

### 零售统计的总体变更

零售销售是期间流量，库存是期末余额. 研究销售与补库时，两者应对齐期间，但还要确认有没有换统计总体.

Census于2025-04-25发布采用2017 NAICS的年度修订，将相关月度零售统计改为有雇员企业口径，并将受影响行业追溯至序列起点. 文件第3页比较同一2022年的原值与重述值. [^retail]

| 2022年同一材料期 | 原公布：雇主＋无雇员企业 | 重述：雇主企业 | 单位 |
|---|---:|---:|---|
| 零售销售总额，NAICS 44–45 | 7,040,995 | 6,916,099 | M 美元 |
| 年末零售库存总额 | 733,168 | 717,180 | M 美元 |

同一2022年销售重述差额−124,896，约−1.774%；库存差额−15,988，约−2.181%，与原表一位小数结果对应. 这些差额计量统计范围调整.

同版销售增长、库存增长更快，可由备货、滞销、价格或产品结构解释. 同店交易和客单价帮助分解销售，库存年龄及折扣帮助识别积压.

同比应采用同一发布版本的可比历史序列，将版本差异另行记录.

</section>

<section data-reading-branch="banking">

<a id="ei15-banking"></a>

### 银行净息差与综合利润

净息差分析需要净利息收入、平均生息资产及资金成本. 综合利润还包含非息业务、运营费用、拨备和税费.

FDIC Q1 2026覆盖4,278家投保商业银行及储蓄机构，净利润80.5 USD B，ROA 1.26%，NIM 3.31%. NIM较前季降8 bp，报告归因于生息资产收益率降21 bp、资金成本降13 bp的差异. [^fdic]

| 指标 | 记录什么 | 分析职责 |
|---|---|---|
| 净利润80.5 B 美元 | 一个季度的综合利润流量 | 需要再拆利息、非息、拨备和税费 |
| ROA 1.26% | 年化利润相对平均总资产 | 衡量资产规模上的综合盈利 |
| NIM 3.31% | 年化净利息相对平均生息资产 | 研究利息经营及重定价 |
| NIM环比−8bp | 息差水平的差 | 8个基点的水平下降 |

同一季度净利息收入为 $NII_q$、平均生息资产为 $\bar E$，概念式为 $\mathrm{NIM}\approx4NII_q/\bar E$；精算沿报告的年化和平均余额规则. [^nimdef] 本季3.31%较前季低8 bp，对应前季约3.39%.

21 bp与13 bp描述该期两端重定价方向. 分析其他银行或时期，需核收益率与成本的分母及余额权重，结合生息资产、付息负债、存款结构和贷款定价重建净利息.

本季NIM下降，净利润却较前季增2.8 USD B；非息收入增加5.0 USD B，部分被非息费用增加2.5 USD B和净利息下降1.6 USD B抵消. [^fdic]

</section>

<a id="ei15-selection"></a>

## 竞争解释与证据选择

先提出能产生当前观察的两条机制，再选择能区分它们的新数据. 派生指标可方便比较，独立证据则来自额外观察.

<div data-experiment-slot="exp-ei15-metric-contract"></div>

<a id="ei15-exercises"></a>

## 重建与迁移

<strong>正向重建：</strong>任选一个分支，写出一项完整计算和它真正测量的对象.

<strong>解析.</strong> 电力重建售电增速及单位收入，制造重建新订单构造，零售计算同年统计范围调整，银行区分NIM分母与百分点变化. 各计算均需标注原表对象、单位、期间及版本.

<strong>迁移任务：</strong>某公司的收入、订单与一项“热度指数”同时上升. 你准备研究未来交付是否受限. 只能再取两份材料，会选择什么？

<strong>解析：</strong>优先选择当前可用产能／关键投入约束和具名交期／积压结构. 收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责. 若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道. 若交期延长且关键投入缺口明确，才形成更完整的约束路径.

<strong>再迁移：</strong>新统计版本减少了样本总体，同时你看到发布值下调. 怎样避免把修订当衰退？

<strong>解析.</strong> 对照同一时期的旧版与新版重述表，计算范围调整；随后使用同一版本比较不同时期的变化.

[^epmsales]: EIDEF-S19A，EIA *Electric Power Monthly*，data June 2026、release 2026-08-26，Table 5.1年度2024/2025行及全部适用表注. [原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1).
[^epmrevenue]: EIDEF-S19B，同版EPM Table 5.2，2025 all sectors收入行及preliminary、账单期间表注. [原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2).
[^m3table]: EI-S06-M3-202605，Census M3 May 2026，2026-07-02发布，Tables 1–4 PDF pp.6–9，Construction machinery行；4月r、5月p、 M 美元、SA. [固定原件](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf).
[^m3method]: EIBC-S07M，Census *M3 Methodology*，Estimation pp.2–3、Seasonal Adjustment pp.3–4、Reliability p.4. 采用单元未标明修订日，访问日为2026-09-21. [方法原文](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf).
[^retail]: EIDEF-S13，Census *2017 NAICS Restatement Summary*，pp.1–2变更说明，p.3“Restated Annual Retail Sales Data”与“Restated Annual End-of-Year Inventories Data”. [官方说明](https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf).
[^fdic]: EIDEF-S17，FDIC *Quarterly Banking Profile, First Quarter 2026*及2026-05-27官方发布中的全行业盈利、净息差、收益率与资金成本单元. 采用冻结的Q1 2026统计总体；NIM以净利息相对平均生息资产定义. [官方发布](https://www.fdic.gov/news/press-releases/2026/fdic-insured-institutions-reported-return-assets-126-percent-and-net)，[完整报告入口](https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf).

[^nimdef]: EIDEF-S22，Ennis、Fessenden、Walter，Richmond Fed Economic Brief 16-05，2016-05，“The Importance of Maturity Mismatch”首段NIM／利润定义. [原文](https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05).

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>
