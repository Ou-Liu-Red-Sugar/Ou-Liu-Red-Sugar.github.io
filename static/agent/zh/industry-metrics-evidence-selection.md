# 行业指标、比较与证据选择

从经营机制选择最少但足够的指标，在电力、制造、零售、银行中完成一支带读.

Entry: zh-ei15 | Node: EI-15 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 先选行业，画出经营过程，找职责不同的原始观察. 重建电力单位换算、制造新订单构造、零售同年重述或银行NIM，提出两个竞争解释及可区分的新材料. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验.",
  "required_readings": [
    {
      "source_id": "EIDEF-S19A",
      "title": "Table 5.1 Sales of Electricity to Ultimate Customers",
      "authors": [
        "EIA"
      ],
      "version": "Electric Power Monthly；data June2026；release2026-08-26",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2024/2025年度all sectors行与适用表注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签."
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
      "branch": "electricity",
      "id": "EI-15-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S19B",
      "title": "Table 5.2 Revenue from Sales of Electricity to Ultimate Customers",
      "authors": [
        "EIA"
      ],
      "version": "Electric Power Monthly；data June2026；release2026-08-26",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2025年度all sectors行与适用表注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签."
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
      "branch": "electricity",
      "id": "EI-15-READ-2",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIBC-S05B",
      "title": "Preliminary Monthly Electric Generator Inventory (EIA-860M)",
      "authors": [
        "EIA"
      ],
      "version": "方法页访问2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "工作簿列表前：preliminary、existing/proposed、revision及not capacity commitments说明",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互."
      },
      "supports": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互.",
      "branch": "electricity",
      "id": "EI-15-READ-3",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIBC-S07M",
      "title": "Manufacturers’ Shipments, Inventories, and Orders: Methodology",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "采用单元未显示发表/修订日；2026-09-21访问",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Estimation pp.2–3；Seasonal Adjustment pp.3–4；Reliability p.4",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改. 381是定义性桥，不是3项独立观察."
      },
      "supports": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改. 381是定义性桥，不是3项独立观察.",
      "branch": "manufacturing",
      "id": "EI-15-READ-4",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EI-S06-M3-202605",
      "title": "M3 Full Report — May2026",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "2026-07-02 release; CB26-104 M3-2(26)-05",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "PDFp1身份；pp6–9 Tables1–4 Construction machinery row及脚注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "April revised / May preliminary；SA M 美元；381定义性订单桥、存货+66分开."
      },
      "supports": "April revised / May preliminary；SA M 美元；381定义性订单桥、存货+66分开.",
      "branch": "manufacturing",
      "id": "EI-15-READ-5",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S13",
      "title": "2017 NAICS Restatement — Summary of Changes",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Annual Revision released 2025-04-25",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "PDF pp.1–2说明；p.3 Restated Annual Retail Sales / End-of-Year Inventories，NAICS44–45总行",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降."
      },
      "supports": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降.",
      "branch": "retail",
      "id": "EI-15-READ-6",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S17",
      "title": "Quarterly Banking Profile — First Quarter 2026",
      "authors": [
        "FDIC"
      ],
      "version": "Q1 2026; official release 2026-05-27",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q1 2026官方发布：Net Income、Net Interest Margin、earning-asset yield与cost of funds具名段；QBP Q1 2026对应全行业指标",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp."
      },
      "supports": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp.",
      "branch": "banking",
      "id": "EI-15-READ-7",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S22",
      "title": "Do Net Interest Margins and Interest Rates Move Together?",
      "authors": [
        "Huberto M. Ennis",
        "Helen Fessenden",
        "John R. Walter"
      ],
      "version": "Richmond Fed Economic Brief No16-05, May2016",
      "access": {
        "kind": "site_body",
        "uri": "https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "The Importance of Maturity Mismatch：NIM definition、profits comparison及期限结构段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值."
      },
      "supports": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值.",
      "branch": "banking",
      "id": "EI-15-READ-8",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "electricity_branch": {
        "source_release": "EIA Electric Power Monthly, data for June 2026, released 2026-08-26",
        "Table_5_1_sales_thousand_MWh": {
          "2024": 3975382,
          "2025": 4058007,
          "2024_status": "final",
          "2025_status": "preliminary_cutoff_model_sample"
        },
        "Table_5_2_revenue_million_USD": {
          "2025": 553285,
          "2025_status": "preliminary_cutoff_model_sample"
        },
        "derived": {
          "sales_growth_2024_to_2025_pct": 2.0784166150573657,
          "revenue_divided_by_sales_cents_per_kWh": 13.634402306353833
        },
        "note": "Revenue/sales is an average billed revenue rate, not a marginal retail price."
      },
      "bank_branch": {
        "source": "FDIC Quarterly Banking Profile Q1 2026 / May 27 2026 release",
        "population": "4,278 FDIC-insured commercial banks and savings institutions in the release",
        "net_income_billion_USD": 80.5,
        "ROA_pct": 1.26,
        "NIM_pct": 3.31,
        "NIM_qoq_change_bp": -8,
        "NIM_definition": "interest/dividends earned on interest-bearing assets minus interest paid to depositors and other creditors, expressed relative to average earning assets",
        "current_driver": "earning-asset yield fell 21 bp while cost of funds fell 13 bp"
      },
      "retail_branch": {
        "restatement_release": "2025-04-25 Annual Revision",
        "identity": "series restated to 2017 NAICS and employer-only firms; affected industries restated back through their series rather than a one-month April 2025 break",
        "2022_sales_million_USD": {
          "original_employer_plus_nonemployer": 7040995,
          "restated_employer_only": 6916099,
          "difference_pct_source": -1.8
        },
        "2022_end_of_year_inventory_million_USD": {
          "original_employer_plus_nonemployer": 733168,
          "restated_employer_only": 717180,
          "difference_pct_source": -2.2
        }
      },
      "manufacturing_branch": {
        "M3_new_orders_identity": "published new orders are constructed from shipments plus the change in unfilled orders; not an independent third demand observation",
        "reuse": "EI-B review-v2 M3 methodology correction"
      }
    },
    "experiments": [
      {
        "id": "exp-ei15-metric-contract",
        "node_id": "EI-15",
        "title": "指标的对象与证据职责",
        "anchor": "ei15-selection",
        "method": "metrics",
        "controls": [
          {
            "key": "branch",
            "label": "行业",
            "default": "electricity",
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "select",
            "options": [
              [
                "electricity",
                "电力"
              ],
              [
                "manufacturing",
                "制造"
              ],
              [
                "retail",
                "零售"
              ],
              [
                "banking",
                "银行"
              ]
            ]
          }
        ],
        "inputs": {
          "branch": "electricity"
        },
        "algorithm": "真实数值只读. 电力按 M USD/ K MWh换算；制造N=S+ΔB是统计构造，ΔI另列；零售同年重述差=(new/old−1)；银行前季NIM=本季−bp变化/100. 不同统计产品不互证.",
        "static_equivalent": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp.",
        "source_ids": [
          "EIDEF-S19A",
          "EIDEF-S19B",
          "EIDEF-S13",
          "EIBC-S07M",
          "EI-S06-M3-202605",
          "EIDEF-S17",
          "EIDEF-S22"
        ],
        "identity": "observed_and_derived",
        "description": "指标的对象与证据职责",
        "outputs": {
          "branch": "electricity",
          "qty2024": 3975382,
          "qty2025": 4058007,
          "revenue": 553285,
          "growth": 2.0784166150573657,
          "averageCents": 13.634402306353833,
          "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei15-metric-contract",
      "text": "EPM 2026-08-26版的2024／2025售电量分别3,975,382／4,058,007 K MWh，增约2.078%；2025收入553,285 USD M，平均约13.634 cents/kWh. 2024 final、2025 preliminary. 制造新订单按4498＋381＝4879构造，存货另增66. 零售2022同年重述差：销售约−1.774%、库存约−2.181%. 银行NIM从3.39%降到3.31%，变化−8 bp.",
      "outputs": {
        "branch": "electricity",
        "qty2024": 3975382,
        "qty2025": 4058007,
        "revenue": 553285,
        "growth": 2.0784166150573657,
        "averageCents": 13.634402306353833,
        "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
      }
    }
  ],
  "source_id_aliases": {
    "EIDEF-S10": "BFDE-JEP",
    "EIDEF-S14": "EIBC-S07M",
    "EIDEF-S16A": "EIBC-S05A",
    "EIDEF-S16B": "EIBC-S05B",
    "EIDEF-S21": "EI-S06-M3-202605"
  }
}
```

## Supplied entry
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

## Additional teaching material
## 静态计算

EPM 2026-08-26版的2024／2025售电量分别3,975,382／4,058,007 K MWh，增约2.078%；2025收入553,285 USD M，平均约13.634 cents/kWh. 2024 final、2025 preliminary. 制造新订单按4498＋381＝4879构造，存货另增66. 零售2022同年重述差：销售约−1.774%、库存约−2.181%. 银行NIM从3.39%降到3.31%，变化−8 bp.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei15-metric-contract",
    "node_id": "EI-15",
    "title": "指标的对象与证据职责",
    "anchor": "ei15-selection",
    "method": "metrics",
    "controls": [
      {
        "key": "branch",
        "label": "行业",
        "default": "electricity",
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "select",
        "options": [
          [
            "electricity",
            "电力"
          ],
          [
            "manufacturing",
            "制造"
          ],
          [
            "retail",
            "零售"
          ],
          [
            "banking",
            "银行"
          ]
        ]
      }
    ],
    "inputs": {
      "branch": "electricity"
    },
    "algorithm": "真实数值只读. 电力按 M USD/ K MWh换算；制造N=S+ΔB是统计构造，ΔI另列；零售同年重述差=(new/old−1)；银行前季NIM=本季−bp变化/100. 不同统计产品不互证.",
    "static_equivalent": "EPM 2026-08-26版的2024／2025售电量分别3,975,382／4,058,007 K MWh，增约2.078%；2025收入553,285 USD M，平均约13.634 cents/kWh. 2024 final、2025 preliminary. 制造新订单按4498＋381＝4879构造，存货另增66. 零售2022同年重述差：销售约−1.774%、库存约−2.181%. 银行NIM从3.39%降到3.31%，变化−8 bp.",
    "source_ids": [
      "EIDEF-S19A",
      "EIDEF-S19B",
      "EIDEF-S13",
      "EIBC-S07M",
      "EI-S06-M3-202605",
      "EIDEF-S17",
      "EIDEF-S22"
    ],
    "identity": "observed_and_derived",
    "description": "指标的对象与证据职责",
    "outputs": {
      "branch": "electricity",
      "qty2024": 3975382,
      "qty2025": 4058007,
      "revenue": 553285,
      "growth": 2.0784166150573657,
      "averageCents": 13.634402306353833,
      "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei15-metric-contract",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告分别列出出货、新订单、未交订单和存货. 本站使用 2026 年 5 月报告及其中 4 月修订列，单位 USD M，数据经过季节调整，未作价格调整. 新订单含取消和修改影响，按出货加未交订单变动构造；这一关系属于统计定义.
- [Preliminary Monthly Electric Generator Inventory](https://www.eia.gov/electricity/data/eia860m/index.php): 月度发电设备资料包含现有与拟建项目，估计可能修订. 计划容量表示项目计划，实际投产需要继续跟踪.
- [Methodology for Manufacturers’ Shipments, Inventories, and Orders](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf): 新订单由出货加未完成订单的月度变化构造，包含既有订单的取消和修改；季节调整后的序列也沿用这一方法. 本站例中 381 是按该定义计算的数值.
- [2017 NAICS Restatement — Summary of Changes](https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf): 2022 年数据的原雇主加非雇主口径，以及后续重述的雇主口径；比较两个版本前需统一企业覆盖范围.
- [Quarterly Banking Profile — First Quarter 2026](https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf): Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp.
- [Table 5.1 Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.
- [Table 5.2 Revenue from Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.
- [Do Net Interest Margins and Interest Rates Move Together?](https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05): 补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值.

## Content relations
```json
[
  {
    "from": "zh-ei15",
    "relation": "part_of",
    "to": "industry-evidence",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei15",
    "relation": "requires",
    "to": "zh-ei02",
    "reason": "辨认口径、统计总体和数据版本",
    "required_competence": "辨认口径、统计总体和数据版本"
  },
  {
    "from": "zh-ei15",
    "relation": "uses_method",
    "to": "zh-ei03",
    "reason": "需求指标"
  },
  {
    "from": "zh-ei15",
    "relation": "uses_method",
    "to": "zh-ei04",
    "reason": "供给与容量指标"
  },
  {
    "from": "zh-ei15",
    "relation": "uses_method",
    "to": "zh-ei05",
    "reason": "投入与过程位置"
  },
  {
    "from": "zh-ei15",
    "relation": "informs",
    "to": "zh-ei16",
    "reason": "为综合分析挑选独立证据"
  },
  {
    "from": "ei15-electricity",
    "relation": "supported_by",
    "to": "EIDEF-S19A",
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
    "locator": "2024/2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-electricity",
    "relation": "supported_by",
    "to": "EIDEF-S19B",
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
    "locator": "2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-electricity",
    "relation": "supported_by",
    "to": "EIBC-S05B",
    "reason": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互.",
    "locator": "工作簿列表前：preliminary、existing/proposed、revision及not capacity commitments说明",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-manufacturing",
    "relation": "supported_by",
    "to": "EIBC-S07M",
    "reason": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改. 381是定义性桥，不是3项独立观察.",
    "locator": "Estimation pp.2–3；Seasonal Adjustment pp.3–4；Reliability p.4",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-manufacturing"
  },
  {
    "from": "ei15-manufacturing",
    "relation": "supported_by",
    "to": "EI-S06-M3-202605",
    "reason": "April revised / May preliminary；SA M 美元；381定义性订单桥、存货+66分开.",
    "locator": "PDFp1身份；pp6–9 Tables1–4 Construction machinery row及脚注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-manufacturing"
  },
  {
    "from": "ei15-retail",
    "relation": "supported_by",
    "to": "EIDEF-S13",
    "reason": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降.",
    "locator": "PDF pp.1–2说明；p.3 Restated Annual Retail Sales / End-of-Year Inventories，NAICS44–45总行",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-retail"
  },
  {
    "from": "ei15-banking",
    "relation": "supported_by",
    "to": "EIDEF-S17",
    "reason": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp.",
    "locator": "Q1 2026官方发布：Net Income、Net Interest Margin、earning-asset yield与cost of funds具名段；QBP Q1 2026对应全行业指标",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-banking"
  },
  {
    "from": "ei15-banking",
    "relation": "supported_by",
    "to": "EIDEF-S22",
    "reason": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值.",
    "locator": "The Importance of Maturity Mismatch：NIM definition、profits comparison及期限结构段",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-banking"
  },
  {
    "from": "ei15-selection",
    "relation": "illustrated_by",
    "to": "exp-ei15-metric-contract",
    "reason": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp.",
    "at_section": "ei15-selection"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 9/10
从一个行业分支的原表计算出发，判断信息是否独立、口径是否一致.
将边界、需求、供给、资本和交易安排收束成行业路径.
Next: [行业分析：从结构到经营路径](https://ou-liu-red-sugar.github.io/zh/notebook/industry-analysis-integrated-reading/)
