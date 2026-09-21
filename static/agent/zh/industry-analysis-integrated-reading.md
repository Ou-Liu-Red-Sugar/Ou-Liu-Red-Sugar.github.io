# 行业分析：从结构到经营路径

把真实售电、发电构成、市场组织和资本计划连成有条件的行业分析.

Entry: zh-ei16 | Node: EI-16 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 重建售电和发电增速，解释天然气下降与总量上升. 保留EPM版本及初步状态，将86 GW计划按项目进度连接到供给，再比较现货发电、公用事业回收及设备供应合同. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei16",
  "node_id": "EI-16",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "从2024/2025电力原表构造三条路径，并迁移到设备商和制造业证据.",
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
      "id": "EI-16-READ-1",
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
      "id": "EI-16-READ-2",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S19C",
      "title": "Table 1.1 Net Generation by Energy Source: Total (All Sectors)",
      "authors": [
        "EIA"
      ],
      "version": "Electric Power Monthly；data June2026；release2026-08-26",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_1_1",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2024/2025年度煤/气/核/水/utility solar/utility total列与表注",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "2024 final、2025 preliminary. 本篇取Table1.1的Generation at Utility Scale Facilities列组；所列utility-scale solar与utility-scale total不包含右侧estimated small-scale solar列. 零售售电与发电覆盖不同，不能强求总量相等."
      },
      "supports": "2024 final、2025 preliminary. 本篇取Table1.1的Generation at Utility Scale Facilities列组；所列utility-scale solar与utility-scale total不包含右侧estimated small-scale solar列. 零售售电与发电覆盖不同，不能强求总量相等.",
      "id": "EI-16-READ-3",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIBC-S05A",
      "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "2026-02-20; December2025 inventory",
      "access": {
        "kind": "site_body",
        "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "86GW planned/if realized，2025已新增53GW段及来源标签",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "计划容量并非实际投运或MWh发电，不计算两年度的项目兑现率."
      },
      "supports": "计划容量并非实际投运或MWh发电，不计算两年度的项目兑现率.",
      "id": "EI-16-READ-4",
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
      "id": "EI-16-READ-5",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S18",
      "title": "Electric Power Markets",
      "authors": [
        "FERC"
      ],
      "version": "页面更新2025-03-27，访问2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://www.ferc.gov/electric-power-markets",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "National Overview、PJM、Southeast完整具名段",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "传统垂直一体化、双边交易和ISO/RTO组织的批发交易不同；不据此计算统一电价弹性."
      },
      "supports": "传统垂直一体化、双边交易和ISO/RTO组织的批发交易不同；不据此计算统一电价弹性.",
      "id": "EI-16-READ-6",
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
      "id": "EI-16-READ-7",
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
      "id": "EI-16-READ-8",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei16-industry-path",
      "source_release": "EIA Electric Power Monthly, data for June 2026, released 2026-08-26",
      "retail_sales": {
        "2024_thousand_MWh_final": 3975382,
        "2025_thousand_MWh_preliminary": 4058007,
        "growth_pct": 2.0784166150573657
      },
      "generation_Table_1_1_thousand_MWh": {
        "2024_status": "final",
        "2025_status": "preliminary",
        "2024": {
          "coal": 652156,
          "natural_gas": 1869902,
          "nuclear": 781865,
          "hydro": 242896,
          "utility_scale_solar": 219834,
          "utility_scale_total": 4308634
        },
        "2025": {
          "coal": 737151,
          "natural_gas": 1807338,
          "nuclear": 784781,
          "hydro": 247023,
          "utility_scale_solar": 295671,
          "utility_scale_total": 4429502
        },
        "derived_growth_pct": {
          "coal": 13.03292463766339,
          "natural_gas": -3.345843792883263,
          "nuclear": 0.37295441028821763,
          "hydro": 1.6990810882023588,
          "utility_scale_solar": 34.49739348781353,
          "utility_scale_total": 2.8052510377999162
        }
      },
      "teaching_use": {
        "actual_supply_evidence": "EPM Table 1.1 exact annual rows by energy source",
        "comparison": "2025 retail-sales growth and utility-scale generation growth are different series with different coverage/timing; do not force equality",
        "alternative_explanation_example": "utility-scale generation rose while natural-gas generation fell and coal/solar generation rose, so system mix can change even when total demand rises"
      },
      "planned_capacity_2026_GW": 86,
      "planned_capacity_status": "planned_if_realized_not_commitment",
      "form_923_final_note": "A later 2025 Form 923 annual final release exists, but its final status is not transferred to EPM retail-sales/revenue or to this 2026-08-26 EPM Table 1.1 vintage."
    },
    "experiments": [
      {
        "id": "exp-ei16-industry-path",
        "node_id": "EI-16",
        "title": "售电、发电结构与经营路径",
        "anchor": "ei16-capital",
        "method": "industry",
        "controls": [
          {
            "key": "region",
            "label": "假定交易情形",
            "default": "rto",
            "min": 0,
            "max": 100,
            "step": 1,
            "kind": "select",
            "options": [
              [
                "rto",
                "RTO内现货/合同敞口"
              ],
              [
                "integrated",
                "费率/成本回收情形"
              ],
              [
                "supplier",
                "设备供应商"
              ]
            ]
          }
        ],
        "inputs": {
          "region": "rto"
        },
        "algorithm": "EPM1.1五项能源与总量只读；其余净额=总量−五项，逐项同比=(2025/2024−1). 地区按钮只改变定性条件路径，不生造价格弹性. 86GW另列planned.",
        "static_equivalent": "发电总量4,308,634→4,429,502 K MWh，+2.8052510%；售电+2.0784166%；天然气下降、煤/太阳能上升. 其余净额541981/557538.",
        "source_ids": [
          "EIDEF-S19A",
          "EIDEF-S19B",
          "EIDEF-S19C",
          "EIBC-S05A",
          "EIBC-S05B",
          "EIDEF-S18",
          "EIBC-S07M",
          "EI-S06-M3-202605"
        ],
        "identity": "observed_and_derived",
        "description": "售电、发电结构与经营路径",
        "outputs": {
          "region": "rto",
          "rows": [
            {
              "key": "coal",
              "label": "煤炭",
              "y2024": 652156,
              "y2025": 737151,
              "growth": 13.03292463766339
            },
            {
              "key": "natural_gas",
              "label": "天然气",
              "y2024": 1869902,
              "y2025": 1807338,
              "growth": -3.345843792883263
            },
            {
              "key": "nuclear",
              "label": "核能",
              "y2024": 781865,
              "y2025": 784781,
              "growth": 0.37295441028821763
            },
            {
              "key": "hydro",
              "label": "常规水电",
              "y2024": 242896,
              "y2025": 247023,
              "growth": 1.6990810882023588
            },
            {
              "key": "utility_scale_solar",
              "label": "公用事业规模太阳能",
              "y2024": 219834,
              "y2025": 295671,
              "growth": 34.49739348781353
            },
            {
              "key": "residual",
              "label": "其余净额（重排）",
              "y2024": 541981,
              "y2025": 557538,
              "growth": 2.8703958256839357
            }
          ],
          "totals": [
            4308634,
            4429502
          ],
          "growth": 2.8052510377999162,
          "salesGrowth": 2.0784166150573657,
          "plannedGW": 86,
          "plannedIdentity": "2026计划，if realized；不是发电量",
          "path": "分时可用出力 → 现货/长期合同 → 燃料与对冲 → 净收入"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei16-industry-path",
      "text": "2024／2025公用事业规模发电4,308,634／4,429,502 K MWh，增约2.805%，售电增约2.078%. 煤炭增约13.033%、天然气降约3.346%、核能增约0.373%、常规水电增约1.699%、太阳能增约34.497%；总量扣五项后的其余净额为541,981／557,538 K MWh. EIA 2026-02-20公布2026计划容量86 GW. 地区交易制度及公司合同分别决定收入响应.",
      "outputs": {
        "region": "rto",
        "rows": [
          {
            "key": "coal",
            "label": "煤炭",
            "y2024": 652156,
            "y2025": 737151,
            "growth": 13.03292463766339
          },
          {
            "key": "natural_gas",
            "label": "天然气",
            "y2024": 1869902,
            "y2025": 1807338,
            "growth": -3.345843792883263
          },
          {
            "key": "nuclear",
            "label": "核能",
            "y2024": 781865,
            "y2025": 784781,
            "growth": 0.37295441028821763
          },
          {
            "key": "hydro",
            "label": "常规水电",
            "y2024": 242896,
            "y2025": 247023,
            "growth": 1.6990810882023588
          },
          {
            "key": "utility_scale_solar",
            "label": "公用事业规模太阳能",
            "y2024": 219834,
            "y2025": 295671,
            "growth": 34.49739348781353
          },
          {
            "key": "residual",
            "label": "其余净额（重排）",
            "y2024": 541981,
            "y2025": 557538,
            "growth": 2.8703958256839357
          }
        ],
        "totals": [
          4308634,
          4429502
        ],
        "growth": 2.8052510377999162,
        "salesGrowth": 2.0784166150573657,
        "plannedGW": 86,
        "plannedIdentity": "2026计划，if realized；不是发电量",
        "path": "分时可用出力 → 现货/长期合同 → 燃料与对冲 → 净收入"
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

## Additional teaching material
## 静态计算

2024／2025公用事业规模发电4,308,634／4,429,502 K MWh，增约2.805%，售电增约2.078%. 煤炭增约13.033%、天然气降约3.346%、核能增约0.373%、常规水电增约1.699%、太阳能增约34.497%；总量扣五项后的其余净额为541,981／557,538 K MWh. EIA 2026-02-20公布2026计划容量86 GW. 地区交易制度及公司合同分别决定收入响应.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei16-industry-path",
    "node_id": "EI-16",
    "title": "售电、发电结构与经营路径",
    "anchor": "ei16-capital",
    "method": "industry",
    "controls": [
      {
        "key": "region",
        "label": "假定交易情形",
        "default": "rto",
        "min": 0,
        "max": 100,
        "step": 1,
        "kind": "select",
        "options": [
          [
            "rto",
            "RTO内现货/合同敞口"
          ],
          [
            "integrated",
            "费率/成本回收情形"
          ],
          [
            "supplier",
            "设备供应商"
          ]
        ]
      }
    ],
    "inputs": {
      "region": "rto"
    },
    "algorithm": "EPM1.1五项能源与总量只读；其余净额=总量−五项，逐项同比=(2025/2024−1). 地区按钮只改变定性条件路径，不生造价格弹性. 86GW另列planned.",
    "static_equivalent": "2024／2025公用事业规模发电4,308,634／4,429,502 K MWh，增约2.805%，售电增约2.078%. 煤炭增约13.033%、天然气降约3.346%、核能增约0.373%、常规水电增约1.699%、太阳能增约34.497%；总量扣五项后的其余净额为541,981／557,538 K MWh. EIA 2026-02-20公布2026计划容量86 GW. 地区交易制度及公司合同分别决定收入响应.",
    "source_ids": [
      "EIDEF-S19A",
      "EIDEF-S19B",
      "EIDEF-S19C",
      "EIBC-S05A",
      "EIBC-S05B",
      "EIDEF-S18",
      "EIBC-S07M",
      "EI-S06-M3-202605"
    ],
    "identity": "observed_and_derived",
    "description": "售电、发电结构与经营路径",
    "outputs": {
      "region": "rto",
      "rows": [
        {
          "key": "coal",
          "label": "煤炭",
          "y2024": 652156,
          "y2025": 737151,
          "growth": 13.03292463766339
        },
        {
          "key": "natural_gas",
          "label": "天然气",
          "y2024": 1869902,
          "y2025": 1807338,
          "growth": -3.345843792883263
        },
        {
          "key": "nuclear",
          "label": "核能",
          "y2024": 781865,
          "y2025": 784781,
          "growth": 0.37295441028821763
        },
        {
          "key": "hydro",
          "label": "常规水电",
          "y2024": 242896,
          "y2025": 247023,
          "growth": 1.6990810882023588
        },
        {
          "key": "utility_scale_solar",
          "label": "公用事业规模太阳能",
          "y2024": 219834,
          "y2025": 295671,
          "growth": 34.49739348781353
        },
        {
          "key": "residual",
          "label": "其余净额（重排）",
          "y2024": 541981,
          "y2025": 557538,
          "growth": 2.8703958256839357
        }
      ],
      "totals": [
        4308634,
        4429502
      ],
      "growth": 2.8052510377999162,
      "salesGrowth": 2.0784166150573657,
      "plannedGW": 86,
      "plannedIdentity": "2026计划，if realized；不是发电量",
      "path": "分时可用出力 → 现货/长期合同 → 燃料与对冲 → 净收入"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei16-industry-path",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告分别列出出货、新订单、未交订单和存货. 本站使用 2026 年 5 月报告及其中 4 月修订列，单位 USD M，数据经过季节调整，未作价格调整. 新订单含取消和修改影响，按出货加未交订单变动构造；这一关系属于统计定义.
- [New U.S. electric generating capacity expected to reach a record high in 2026](https://www.eia.gov/todayinenergy/detail.php?id=67205): 2026 年计划新增发电容量 86 GW；2025 年实际新增容量 53 GW. 两项分别描述不同年度的计划和实际容量.
- [Preliminary Monthly Electric Generator Inventory](https://www.eia.gov/electricity/data/eia860m/index.php): 月度发电设备资料包含现有与拟建项目，估计可能修订. 计划容量表示项目计划，实际投产需要继续跟踪.
- [Methodology for Manufacturers’ Shipments, Inventories, and Orders](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf): 新订单由出货加未完成订单的月度变化构造，包含既有订单的取消和修改；季节调整后的序列也沿用这一方法. 本站例中 381 是按该定义计算的数值.
- [Electric Power Markets](https://www.ferc.gov/electric-power-markets): 传统垂直一体化、双边交易和ISO/RTO组织的批发交易不同；不据此计算统一电价弹性.
- [Table 5.1 Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_1): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.
- [Table 5.2 Revenue from Sales of Electricity to Ultimate Customers](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_2): 2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.
- [Table 1.1 Net Generation by Energy Source: Total (All Sectors)](https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_1_1): 2024 年最终值和 2025 年初值. 本站取 Table 1.1 的 Generation at Utility Scale Facilities 列组，utility-scale solar 与 total 均按公用事业级发电设施范围计量. 另列的小规模太阳能估计值和零售售电采用各自统计范围.

## Content relations
```json
[
  {
    "from": "zh-ei16",
    "relation": "part_of",
    "to": "industry-evidence",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei16",
    "relation": "requires",
    "to": "zh-ei15",
    "reason": "能为经营问题挑选有职责的指标",
    "required_competence": "能为经营问题挑选有职责的指标"
  },
  {
    "from": "zh-ei16",
    "relation": "uses_method",
    "to": "zh-ei06",
    "reason": "市场边界"
  },
  {
    "from": "zh-ei16",
    "relation": "uses_method",
    "to": "zh-ei04",
    "reason": "有效供给"
  },
  {
    "from": "zh-ei16",
    "relation": "uses_method",
    "to": "zh-ei08",
    "reason": "计划到投运"
  },
  {
    "from": "zh-ei16",
    "relation": "uses_method",
    "to": "zh-ei09",
    "reason": "制造业指标迁移"
  },
  {
    "from": "zh-ei16",
    "relation": "informs",
    "to": "zh-p04",
    "reason": "向有条件公司业务模型提供行业输入"
  },
  {
    "from": "ei16-demand",
    "relation": "supported_by",
    "to": "EIDEF-S19A",
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
    "locator": "2024/2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-demand"
  },
  {
    "from": "ei16-demand",
    "relation": "supported_by",
    "to": "EIDEF-S19B",
    "reason": "2024 final、2025 preliminary；销售账单期间与发电自然月/覆盖不同. 冻结行数值保留，不借用另一个923 final标签.",
    "locator": "2025年度all sectors行与适用表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-demand"
  },
  {
    "from": "ei16-supply",
    "relation": "supported_by",
    "to": "EIDEF-S19C",
    "reason": "2024 final、2025 preliminary. 本篇取Table1.1的Generation at Utility Scale Facilities列组；所列utility-scale solar与utility-scale total不包含右侧estimated small-scale solar列. 零售售电与发电覆盖不同，不能强求总量相等.",
    "locator": "2024/2025年度煤/气/核/水/utility solar/utility total列与表注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-supply"
  },
  {
    "from": "ei16-contract",
    "relation": "supported_by",
    "to": "EIDEF-S18",
    "reason": "传统垂直一体化、双边交易和ISO/RTO组织的批发交易不同；不据此计算统一电价弹性.",
    "locator": "National Overview、PJM、Southeast完整具名段",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-contract"
  },
  {
    "from": "ei16-capital",
    "relation": "supported_by",
    "to": "EIBC-S05A",
    "reason": "计划容量并非实际投运或MWh发电，不计算两年度的项目兑现率.",
    "locator": "86GW planned/if realized，2025已新增53GW段及来源标签",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-capital"
  },
  {
    "from": "ei16-capital",
    "relation": "supported_by",
    "to": "EIBC-S05B",
    "reason": "月度库存含现有与拟建项目，估计可修订；没有读取状态码就不造状态码交互.",
    "locator": "工作簿列表前：preliminary、existing/proposed、revision及not capacity commitments说明",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-capital"
  },
  {
    "from": "ei16-exercises",
    "relation": "supported_by",
    "to": "EIBC-S07M",
    "reason": "新订单由出货与未完成订单月差构造；季调亦然，含取消/修改. 381是定义性桥，不是3项独立观察.",
    "locator": "Estimation pp.2–3；Seasonal Adjustment pp.3–4；Reliability p.4",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-exercises"
  },
  {
    "from": "ei16-exercises",
    "relation": "supported_by",
    "to": "EI-S06-M3-202605",
    "reason": "April revised / May preliminary；SA M 美元；381定义性订单桥、存货+66分开.",
    "locator": "PDFp1身份；pp6–9 Tables1–4 Construction machinery row及脚注",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei16-exercises"
  },
  {
    "from": "ei16-capital",
    "relation": "illustrated_by",
    "to": "exp-ei16-industry-path",
    "reason": "发电总量4,308,634→4,429,502 K MWh，+2.8052510%；售电+2.0784166%；天然气下降、煤/太阳能上升. 其余净额541981/557538.",
    "at_section": "ei16-capital"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 10/10
构建三条可检验路径，并明确转入公司分析还缺什么资料.
