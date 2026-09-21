# 行业指标、比较与证据选择

从经营机制选择最少但足够的指标，在电力、制造、零售、银行中完成一支带读。

Entry: zh-ei15 | Node: EI-15 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-15《行业指标、比较与证据选择》，采用内容版本2026-09-21-review-v3，当前范围：共同内容 + all行业分支。
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围。来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功。网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元。读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解。
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算。诊断任务：先选一个行业；要求学习者画出要解释的经营过程，再从该支原表挑出三项有不同职责的信息，检查是否重复计数。
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈。真实观察、作者估计、本站教学参数必须保持各自身份。通过标准：用原表完成该支计算，区分新增信息和构造信息，保留版本与总体，提出能区分两解释的新数据。
使用随包实验的相同输入、算法和静态结果。你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线。解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数。
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正。只适用当前篇相关项。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei15",
  "node_id": "EI-15",
  "content_version": "2026-09-21-review-v3",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "为具体问题选择有不同职责的指标，核版本、统计构造和总体，再设计下一项检验。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。"
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。"
      },
      "supports": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。"
      },
      "supports": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。"
      },
      "supports": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。"
      },
      "supports": "April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。"
      },
      "supports": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。"
      },
      "supports": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。",
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
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节。",
        "purpose": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。"
      },
      "supports": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。",
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
        "algorithm": "真实数值只读。电力按百万USD/千MWh换算；制造N=S+ΔB是统计构造，ΔI另列；零售同年重述差=(new/old−1)；银行前季NIM=本季−bp变化/100。不同统计产品不互证。",
        "static_equivalent": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp。",
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
      "text": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp。",
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
<strong>本篇任务：</strong>从一个要解释的经营问题出发，选择最少但足够的指标，说明每项指标测到哪个环节、与其他指标是否提供独立信息。共同部分加一个行业分支约18–20分钟；四个分支不必一次全读。

<a id="ei15-structure"></a>

## 一、指标必须在经营过程中有一个位置

仪表盘可以同时放收入、订单、库存、价格、产能、信用和就业，但观察量多，并不意味着已经有解释。我们先固定研究问题：到底要判断客户需求、生产瓶颈、渠道调整、资金成本，还是数据统计范围改变？

随后给每个指标分配一个职责。订单靠近购买承诺，出货靠近生产交付，库存是跨期余额，价格可能同时受供需影响；净息差记录银行利息经营，不替代贷款质量。它们的价值来自能排除哪条竞争解释，而不只是相关系数高不高。

一个完整的指标说明至少包含：**计量对象、总体、单位、期间、存量或流量、发布日期、数据版本，以及它要检验的机制**。这些字段不需要都挤进图例，但必须能够就地打开。资料晚发布、后来修订或由其他字段构造，都会影响我们对证据强度的判断。

例如“订单、出货、积压都支持需求增加”看上去有三项证据；若订单本来就按出货加积压变化构造，第三项并没有增加一份独立观察。反过来，一个原本不起眼的调查范围说明，可能足以解释整张图的水平变化。

<a id="ei15-branches"></a>

## 二、选择一个行业完成实际带读

<div data-reading-branch-controls>
<button data-select-reading-branch="electricity">电力</button>
<button data-select-reading-branch="manufacturing">制造</button>
<button data-select-reading-branch="retail">零售</button>
<button data-select-reading-branch="banking">银行</button>
<button data-select-reading-branch="all">全部展开</button>
</div>

<section data-reading-branch="electricity">

<a id="ei15-electricity"></a>

### 电力：把装机、发电和售电分别放回流程

我们研究的具体问题是“售电活动与供给规模发生了什么变化”。这里至少涉及三类对象：设备的MW容量、某期间的MWh发电量，以及向最终客户售出的MWh。容量要经过资源、可用状态和利用时间才能变成发电；发电到售电还经过网络、跨区交易、损耗和账单期间。

本例固定 EIA *Electric Power Monthly*，2026-08-26发布、数据至2026年6月。Table 5.1和5.2的全行业年度行为：

| 指标 | 2024 | 2025 | 单位／状态 |
|---|---:|---:|---|
| 向最终客户售电量 | 3,975,382 | 4,058,007 | 千MWh；2024 final，2025 preliminary |
| 2025售电收入 | — | 553,285 | 百万美元；preliminary |

资料中的2025和2026值基于cutoff model sample的初步估计。即使另一份EIA-923年度发电数据后来已经final，也不能把那个版本标签移给这两个售电系列。原表还说明，售电与收入按约28–35天账单期间累积，不能强求每个自然月与净发电一致。[^epmsales][^epmrevenue]

现在正向重建两个量：
$$
g_Q=\frac{4{,}058{,}007}{3{,}975{,}382}-1
=2.0784166\%.
$$
收入除电量需要把单位展开：
$$
\begin{aligned}
\bar p&=\frac{553285\times10^6\ \mathrm{USD}}
{4058007\times10^6\ \mathrm{kWh}}\times100\\
&=13.6344023\ \mathrm{cents/kWh}.
\end{aligned}
$$
两个 $10^3$ 分别来自“千MWh”和“一MWh等于千kWh”。$\bar p$ 是加权平均账单收入率，包含客户、地区、费率和用量构成；它不是每位客户的边际电价。

这一分支保留售电量、收入及平均收入率，供给问题再接发电量和可用容量。若只是研究账单收入，不必同时堆上所有燃料价格；若要解释调度，就必须另取时间和地区材料。

<strong>本分支检验：</strong>有人用新增装机10%预测全年售电10%。解析应指出容量到电量需要发电时间与可用率，售电还需要客户需求和统计覆盖；应该先找发电量、负荷与投运时点，而不是再补一个同类装机指标。

</section>

<section data-reading-branch="manufacturing">

<a id="ei15-manufacturing"></a>

### 制造：四张表不等于四份独立需求证据

本例沿用Census M3的2026年5月固定发布版，2026-07-02公开。先看表的组成：Table 1是当月出货，Table 2是当月新订单，Table 3是月末未完成订单，Table 4是月末存货。前两者是期间流量，后两者是余额。工程机械行如下，均为季调百万美元，未作价格调整。[^m3table]

| 工程机械 | 4月，本版修订值 | 5月，初值 |
|---|---:|---:|
| 出货S | 4,424 | 4,498 |
| 新订单N | 4,734 | 4,879 |
| 月末未完成订单B | 11,214 | 11,595 |
| 月末存货I | 10,593 | 10,659 |

一般企业订单台账可以写 $B_t=B_{t-1}+N_t-S_t+A_t$，把取消、范围或计量调整按各自定义归位。<strong>但对本次Census统计产品，需要先读其估计方法。</strong>官方方法的Estimation与Seasonal Adjustment说明：总体新订单由出货与未完成订单变化构造；季调新订单同样由季调出货加季调未完成订单的月差得到，包含取消和修改的影响。[^m3method]

所以
$$
N^{SA}_t=S^{SA}_t+B^{SA}_t-B^{SA}_{t-1}
=4498+(11595-11214)=4879.
$$
381的相等首先是定义性桥。重建它能检查同版列、单位与抄录，却不能证明真实世界中没有取消和经济调整，也不能把三个量当成相互独立的需求验证。

存货变化另算 $10659-10593=66$。存货是物品的会计金额余额，不是未完成客户订单；把66加到381会混合两个台账。真正要解释瓶颈，应再找产量、交期、缺料或产能利用；要解释需求，则找客户订单质量与取消等另外证据。

<strong>本分支检验：</strong>新订单、出货、积压全部上升，可以写“三个独立信号确认需求旺盛”吗？解析必须指出订单构造关系，再提出一项统计上或经济对象上不同的新证据，例如客户侧采购计划或具名交期资料。

</section>

<section data-reading-branch="retail">

<a id="ei15-retail"></a>

### 零售：先确认比较的是经济变化，还是统计总体变化

零售销售是期间流量，库存是期末余额。研究销售与补库时，两者应对齐期间，但还要确认有没有换统计总体。

Census的 *2017 NAICS Restatement Summary* 说明，2025-04-25发布的年度修订采用2017 NAICS，并把相关月度零售统计重述为有雇员企业口径；受定义变化影响的行业追溯重述至序列开始。这不是只在2025年4月新增一条断点。文件第3页直接比较同一个2022年份的原口径和重述口径。[^retail]

| 2022年同一材料期 | 原公布：雇主＋无雇员企业 | 重述：雇主企业 | 单位 |
|---|---:|---:|---|
| 零售销售总额，NAICS 44–45 | 7,040,995 | 6,916,099 | 百万美元 |
| 年末零售库存总额 | 733,168 | 717,180 | 百万美元 |

销售差额为−124,896，约−1.7738%；库存差额为−15,988，约−2.1807%，对应原表舍入后的−1.8%与−2.2%。这些比较回答的是“同一历史期换统计范围后，发布值怎样变化”，不是2022需求突然下降的幅度。

现在才进入经营判断。若在**同一版本**中销售增长而库存增长更快，可能是备货，也可能是滞销、价格或产品结构变化。下一项资料应根据路径选择：同店交易与客单价可以帮助拆销售，库存年龄或折扣促销帮助判断积压。先把基准版本选对，再讨论经营原因。

<strong>本分支检验：</strong>分析师把旧版2022值与新版2023值拼成同比。解析应先要求同一发布版本的可比序列；即使两格都抄对，也不能把口径改变部分当真实需求增速。

</section>

<section data-reading-branch="banking">

<a id="ei15-banking"></a>

### 银行：净息差有明确分母，也不是全部盈利

银行的经营过程是吸收和配置资金、承担信用与期限风险，并提供金融服务。若问题是“为什么利息经营变薄”，我们需要净利息收入、平均生息资产和资金成本，而不应只看当期净利润。

FDIC Q1 2026报告与2026-05-27发布材料的总体为4,278家FDIC投保商业银行及储蓄机构。采用值为净利润805亿美元、ROA 1.26%、NIM 3.31%，NIM较前季下降8基点。发布材料将息差变化与生息资产收益率下降21基点、资金成本下降13基点联系起来。它们是这个历史季度的总体资料，不是任意一家银行的结果。[^fdic]

| 指标 | 记录什么 | 分析职责 |
|---|---|---|
| 净利润805亿美元 | 一个季度的综合利润流量 | 需要再拆利息、非息、拨备和税费 |
| ROA 1.26% | 年化利润相对平均总资产 | 衡量资产规模上的综合盈利 |
| NIM 3.31% | 年化净利息相对平均生息资产 | 研究利息经营及重定价 |
| NIM环比−8bp | 息差水平的差 | 不是利润下降8% |

用同一期间的净利息收入 $NII_q$ 和平均生息资产 $\bar E$ 表示，季度年化的概念式是 $\mathrm{NIM}\approx4NII_q/\bar E$；精确复算须沿报告年化与平均余额规则。净息差的分母不是存款额，也不是全部资产；净息差与综合利润的概念区分还可对照Richmond Fed的具名定义单元。[^nimdef]由3.31%及−8bp，可回推前季公布水平约3.39%；这是百分点相减，不是乘 $1-8\%$。

“21减13等于8”在这里可以帮助读懂报告的方向叙述，但利息资产收益率与资金成本的分母和规模权重并不必然相同，因此它不能替代所有时期的精确NIM恒等式。若要下沉到一家银行，应另外查生息资产／付息负债结构、存款重定价和贷款收益，再查拨备为何改变净利润。

<strong>本分支检验：</strong>总体NIM下降、净利润仍可能上升吗？可以：资产规模、非息收入、费用、拨备和税收都可能变化。应查利润桥，而不是用一项息差率覆盖整个利润表。

</section>

<a id="ei15-selection"></a>

## 三、把指标从清单变成可区分的证据

完成一个分支后，我们回到共同任务。先写两条可能路径，再为每条找一项能够改变判断的观察。若某指标只是其他字段的运算结果，保留它作为便于阅读的摘要，但不要当作新增独立证据；若一项指标来自不同总体或不同日期，先处理口径，再做比较。

<div data-experiment-slot="exp-ei15-metric-contract"></div>

实验只提供一个行业分支选择器：选择行业后，展开该分支对应的判断、解析、业务位置、时期、单位、版本与核查任务。真实数值不能拖动；这里的交互不是预测器，而是让读者检查“这个量能回答我现在的问题吗”。制造分支显示定义性381和独立列示的存货66；零售分支显示同年重述差；电力显示单位换算；银行显示百分点变化和分母。

一套最小证据组合通常比一个没有职责的大面板更有效。比如判断制造瓶颈，出货、积压、交期和产能状态可以分别覆盖结果、承诺、时间和物理约束；再加入一条由前三者算出的指标，可能便于展示，却未增加新的机制信息。

<a id="ei15-exercises"></a>

## 四、共同迁移题与完整反馈

<strong>正向重建：</strong>任选一个分支，写出一项完整计算和它真正测量的对象。

<strong>答案标准：</strong>应从所选原表写出单位、时期、运算与解释。真正完成的是把这个比率或差额对应到售电收入、订单构造、统计重述或利息经营的一种对象；各分支已给出完整重算。只报数而没有说明分子、分母或版本，尚未完成。

<strong>迁移任务：</strong>某公司的收入、订单与一项“热度指数”同时上升。你准备研究未来交付是否受限。只能再取两份材料，会选择什么？

<strong>解析：</strong>优先选择当前可用产能／关键投入约束和具名交期／积压结构。收入与订单上升还不足以区分真实数量、价格、产品组合和交付时点；热度若不能映射到购买承诺，对这个任务可能暂时没有职责。若新材料显示产能充足、交期未延长，则应弱化“供给卡住”解释，转查价格、产品和渠道。若交期延长且关键投入缺口明确，才形成更完整的约束路径。

<strong>再迁移：</strong>新统计版本减少了样本总体，同时你看到发布值下调。怎样避免把修订当衰退？

<strong>解析：</strong>保留旧版和新版标识，寻找同一材料期的并行重述表，分开“版本之间的差”和“同版时间变化”。零售分支给出了这种对照方法；其他行业也应先找对应方法说明，而不是用图形连续性掩盖范围变化。

[^epmsales]: EIDEF-S19A，EIA *Electric Power Monthly*，data June 2026、release 2026-08-26，Table 5.1年度2024/2025行及全部适用表注。[原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1)。
[^epmrevenue]: EIDEF-S19B，同版EPM Table 5.2，2025 all sectors收入行及preliminary、账单期间表注。[原表](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2)。
[^m3table]: EI-S06-M3-202605，Census M3 May 2026，2026-07-02发布，Tables 1–4 PDF pp.6–9，Construction machinery行；4月r、5月p、百万美元、SA。[固定原件](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf)。
[^m3method]: EIBC-S07M，Census *M3 Methodology*，Estimation pp.2–3、Seasonal Adjustment pp.3–4、Reliability p.4。采用单元未标明修订日，访问日为2026-09-21。[方法原文](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf)。
[^retail]: EIDEF-S13，Census *2017 NAICS Restatement Summary*，pp.1–2变更说明，p.3“Restated Annual Retail Sales Data”与“Restated Annual End-of-Year Inventories Data”。[官方说明](https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf)。
[^fdic]: EIDEF-S17，FDIC *Quarterly Banking Profile, First Quarter 2026*及2026-05-27官方发布中的全行业盈利、净息差、收益率与资金成本单元。采用冻结的Q1 2026统计总体；NIM以净利息相对平均生息资产定义。[官方发布](https://www.fdic.gov/news/press-releases/2026/fdic-insured-institutions-reported-return-assets-126-percent-and-net)，[完整报告入口](https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf)。

[^nimdef]: EIDEF-S22，Ennis、Fessenden、Walter，Richmond Fed Economic Brief 16-05，2016-05，“The Importance of Maturity Mismatch”首段NIM／利润定义；仅作概念补充，不提供2026数据。[原文](https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05)。

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp。

```json
{
  "branch": "electricity",
  "qty2024": 3975382,
  "qty2025": 4058007,
  "revenue": 553285,
  "growth": 2.0784166150573657,
  "averageCents": 13.634402306353833,
  "status": "2024 final / 2025 preliminary；EPM 2026-08-26"
}
```

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
    "algorithm": "真实数值只读。电力按百万USD/千MWh换算；制造N=S+ΔB是统计构造，ΔI另列；零售同年重述差=(new/old−1)；银行前季NIM=本季−bp变化/100。不同统计产品不互证。",
    "static_equivalent": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp。",
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
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告把出货、新订单、未交订单和存货分开，分别描述已交付活动、期间订单流和期末余额。本文使用固定的2026年5月报告及其中4月比较列。

新订单按净额口径使用；不能再次机械扣除取消量。未交订单与月出货之比也不是每位客户实际等待时间。

EI-B 本批采用：工程机械固定4月修订/5月初值四表；美元百万、季调、未作价格调整。与CAT公司渠道范围不对账。 季调新订单 N=S+ΔB 为数据产品定义，详见 EIBC-S07M；381不是三个独立需求观测的互证。

本批采用：April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。
- [Preliminary Monthly Electric Generator Inventory](https://www.eia.gov/electricity/data/eia860m/index.php): 月度存量/计划资料可修订，容量不等于设施承诺。仅用方法正文，不采用未读状态码或当前工作簿字段。

本批采用：月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。
- [Methodology for Manufacturers’ Shipments, Inventories, and Orders](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf): Estimation和Seasonal Adjustment Methodology规定：总体/季调新订单由出货加未完成订单期差构造；新订单估计包含既有订单取消和修改影响。

本批采用：新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。
- [2017 NAICS Restatement — Summary of Changes](https://www.census.gov/retail/mrts/www/NAICS_Restatement_Summary.pdf): 同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。
- [Quarterly Banking Profile — First Quarter 2026](https://www.fdic.gov/quarterly-banking-profile/quarterly-banking-profile-first-quarter-2026.pdf): Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。
- [Table 5.1 Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。
- [Table 5.2 Revenue from Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。
- [Do Net Interest Margins and Interest Rates Move Together?](https://www.richmondfed.org/publications/research/economic_brief/2016/eb_16-05): 补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。

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
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
    "locator": "2024/2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-electricity",
    "relation": "supported_by",
    "to": "EIDEF-S19B",
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同。冻结行数值保留，不借用另一个923 final标签。",
    "locator": "2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-electricity",
    "relation": "supported_by",
    "to": "EIBC-S05B",
    "reason": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互。",
    "locator": "工作簿列表前：preliminary、existing/proposed、revision及not capacity commitments说明",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-electricity"
  },
  {
    "from": "ei15-manufacturing",
    "relation": "supported_by",
    "to": "EIBC-S07M",
    "reason": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改。381是定义性桥，不是3项独立观察。",
    "locator": "Estimation pp.2–3；Seasonal Adjustment pp.3–4；Reliability p.4",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-manufacturing"
  },
  {
    "from": "ei15-manufacturing",
    "relation": "supported_by",
    "to": "EI-S06-M3-202605",
    "reason": "April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。",
    "locator": "PDFp1身份；pp6–9 Tables1–4 Construction machinery row及脚注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-manufacturing"
  },
  {
    "from": "ei15-retail",
    "relation": "supported_by",
    "to": "EIDEF-S13",
    "reason": "同一2022期原雇主+非雇主与重述雇主口径不同；不是从2025April观测才发生的需求下降。",
    "locator": "PDF pp.1–2说明；p.3 Restated Annual Retail Sales / End-of-Year Inventories，NAICS44–45总行",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-retail"
  },
  {
    "from": "ei15-banking",
    "relation": "supported_by",
    "to": "EIDEF-S17",
    "reason": "Q1 2026官方资料：4,278家FDIC-insured commercial banks and savings institutions，净收入80.5bn、ROA1.26%、NIM3.31%（环比-8bp）；报告解释earning-asset yield下降21bp而funding cost下降13bp。",
    "locator": "Q1 2026官方发布：Net Income、Net Interest Margin、earning-asset yield与cost of funds具名段；QBP Q1 2026对应全行业指标",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-banking"
  },
  {
    "from": "ei15-banking",
    "relation": "supported_by",
    "to": "EIDEF-S22",
    "reason": "补充净利息/生息资产与综合利润的定义区别；只支持稳定概念，不支持2026 FDIC统计值。",
    "locator": "The Importance of Maturity Mismatch：NIM definition、profits comparison及期限结构段",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei15-banking"
  },
  {
    "from": "ei15-selection",
    "relation": "illustrated_by",
    "to": "exp-ei15-metric-contract",
    "reason": "电力13.6344023cents/kWh；制造4498+381=4879、库存+66；零售同2022销售−1.7738%、库存−2.1807%；银行3.39%→3.31%为−8bp。",
    "at_section": "ei15-selection"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 9/10
从一个行业分支的原表计算出发，判断信息是否独立、口径是否一致。
将边界、需求、供给、资本和交易安排收束成行业路径。
Next: [行业分析综合带读：从结构到经营路径](https://ou-liu-red-sugar.github.io/zh/notebook/industry-analysis-integrated-reading/)
