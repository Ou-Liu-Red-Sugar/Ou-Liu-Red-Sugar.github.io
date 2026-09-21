# 库存周期、产能周期与结构变化

重建订单存量流量与库存调整，区分经营交期和资本建设期，并按需比较CAT独立经销渠道.

Entry: zh-ei09 | Node: EI-09 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先按所选分支实际读取本包 required_readings 完整指定单元，记录题名、版本、范围及支持内容. 必读齐全后教学；缺失时先补齐原文. 诊断：区分四项记录对象，按M3统计构造重建381及存货增量66. 推导几何库存调整和严格阈值，用原值判等号. 经销渠道分支保持Q2／H1、全体／Construction Industries及机器发动机范围. 研究分支区分投入生产交付时间与厂房建设期，读取完整冲击及经验单元. 用订单降、出货平、渠道库存高而仍建厂的情景提出两条机制及判别证据. 已掌握步骤直接跳过，先让读者作答，再按正文完整解析反馈条件、计算和机制. runtime_reading_log 记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "EI-S06-M3-202605",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p.3; pp.6–9 Tables1–4",
        "scope": "定义、工程机械行、表头、期间标签和脚注",
        "purpose": "重建同版金额存量流量"
      },
      "supports": "工程机械固定4月修订/5月初值四表；USD M、季调、未作价格调整. CAT 公司渠道属于独立口径，不与 M3 行业口径合并.",
      "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
      "id": "EI09-READ-01",
      "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
      "authors": [
        "U.S. Census Bureau"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S07M",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
        "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
        "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
      },
      "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
      "id": "EI09-READ-02",
      "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
      "branch": "common",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
        },
        "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
        "requires_actual_read": true,
        "not_a_private_workspace_path": true
      }
    }
  ],
  "optional_readings": [
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2 Consolidated Sales and Revenues; saved text 6628–6642",
        "scope": "该标题下完整叙述及经销商段",
        "purpose": "区分厂家报告、终端设备销售与渠道库存"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-03",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2 Construction Industries; 7268–7280",
        "scope": "至下一Resource Industries标题前的完整叙述",
        "purpose": "CI的终端设备销售与库存因素"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-04",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "H1 Consolidated Sales and Revenues; 7346–7357",
        "scope": "半年比较完整叙述",
        "purpose": "不把季度与半年相加"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-05",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "MD&A Glossary; 8046–8123 selected definitions",
        "scope": "Dealer Inventories、Sales Volume、Construction Industries各完整定义",
        "purpose": "排除售后零件；销售量不是利用率"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-06",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S09",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§2.1–2.2,3.1–3.2.1,4.1,4.3",
        "scope": "March2025对应完整模型和经验单元，含相关图表、变量、信息条件",
        "purpose": "条件化动态网络机制而非无条件bullwhip"
      },
      "supports": "完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.",
      "version": "Cowles Foundation Discussion Paper 2436, March 2025",
      "branch": "research",
      "required_when": "selected_branch includes research",
      "id": "EI09-READ-07",
      "title": "The Bullwhip: Time-to-Build and Sectoral Fluctuations",
      "authors": [
        "Yan Leng",
        "Ernest Liu",
        "Yifei Ren",
        "Aleh Tsyvinski"
      ]
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "input_version": "2026-09-21-review-v2",
    "facts": {
      "m3": {
        "unit": "USD M",
        "adjustment": "seasonally adjusted; not price adjusted",
        "industry": "Construction machinery",
        "rows": [
          {
            "period": "2026-04",
            "vintage_status": "revised",
            "shipments": 4424,
            "orders": 4734,
            "backlog": 11214,
            "inventories": 10593
          },
          {
            "period": "2026-05",
            "vintage_status": "preliminary",
            "shipments": 4498,
            "orders": 4879,
            "backlog": 11595,
            "inventories": 10659
          }
        ],
        "source_ids": [
          "EIBC-S07",
          "EIBC-S07M"
        ],
        "new_orders_method": "Published universe and seasonally adjusted new orders are constructed from shipments plus period change in unfilled orders; cancellations/modifications are included in the new-orders estimate."
      },
      "cat": {
        "source_id": "EIBC-S08",
        "unit": "USD billion",
        "measure": "period change in dealer machine/engine inventories excluding aftermarket parts",
        "rows": [
          {
            "window": "Q2",
            "scope": "total",
            "2025": 0.1,
            "2026": 0.6
          },
          {
            "window": "Q2",
            "scope": "Construction Industries",
            "2025": -0.3,
            "2026": 0.4
          },
          {
            "window": "H1",
            "scope": "total",
            "2025": 0.2,
            "2026": 2.6
          },
          {
            "window": "H1",
            "scope": "Construction Industries",
            "2025": -0.4,
            "2026": 1.9
          }
        ],
        "scope_rules": [
          "H1 includes Q2",
          "CI subset of total",
          "changes, not ending balances",
          "end-user equipment sales != equipment utilization"
        ]
      }
    },
    "models": {
      "inventory": {
        "identity": "teaching_assumption",
        "defaults": {
          "E0": 100,
          "lambda_steps": 10,
          "lambda_denominator": 200,
          "h": 70
        },
        "ranges": {
          "lambda_steps": [
            0,
            100,
            1
          ],
          "h": [
            1,
            100,
            1
          ]
        },
        "conditions": [
          "fixed target; no fresh shocks",
          "lambda=lambda_steps/200",
          "strict E_n<h; n nonnegative integer",
          "exact integer comparison of 100*(200-m)^n < h*200^n after logarithmic candidate",
          "lambda=0 never crosses legal threshold",
          "not delivery delay, not plant construction time"
        ]
      }
    },
    "default_outputs": {
      "inventory": {
        "E0": 100,
        "lambda_steps": 10,
        "lambda": 0.05,
        "h": 70,
        "crossing": 7,
        "status": "crossed",
        "previous": 73.50918906249998,
        "current": 69.83372960937497,
        "equality_previous": false,
        "verified_current": true,
        "verified_previous": true,
        "points": [
          {
            "n": 0,
            "E": 100
          },
          {
            "n": 1,
            "E": 95
          },
          {
            "n": 2,
            "E": 90.25
          },
          {
            "n": 3,
            "E": 85.73749999999998
          },
          {
            "n": 4,
            "E": 81.45062499999999
          },
          {
            "n": 5,
            "E": 77.37809374999998
          },
          {
            "n": 6,
            "E": 73.50918906249998
          },
          {
            "n": 7,
            "E": 69.83372960937497
          },
          {
            "n": 8,
            "E": 66.34204312890623
          },
          {
            "n": 9,
            "E": 63.02494097246091
          },
          {
            "n": 10,
            "E": 59.873693923837855
          },
          {
            "n": 11,
            "E": 56.880009227645964
          },
          {
            "n": 12,
            "E": 54.03600876626366
          },
          {
            "n": 13,
            "E": 51.33420832795048
          },
          {
            "n": 14,
            "E": 48.76749791155295
          },
          {
            "n": 15,
            "E": 46.329123015975306
          },
          {
            "n": 16,
            "E": 44.012666865176534
          },
          {
            "n": 17,
            "E": 41.812033521917705
          },
          {
            "n": 18,
            "E": 39.72143184582182
          },
          {
            "n": 19,
            "E": 37.73536025353073
          },
          {
            "n": 20,
            "E": 35.848592240854195
          }
        ],
        "comparison": "strict <"
      },
      "m3": {
        "net_flow": 381,
        "backlog_change": 381,
        "adjustment_residual": 0,
        "inventory_change": 66,
        "inventory_shipments": 2.3697198755002225,
        "growth_pct": {
          "orders": 3.0629488804393645,
          "shipments": 1.672694394213381,
          "backlog": 3.3975387907972276,
          "inventories": 0.6230529595015577
        }
      }
    }
  },
  "branch_policy": {
    "default": "common",
    "available": [
      "dealer-channel",
      "research"
    ],
    "required_on_selection": true
  },
  "entry_id": "zh-ei09",
  "node_id": "EI-09",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "common",
  "default_branch": "common",
  "required_readings_all_branches": [
    {
      "source_id": "EI-S06-M3-202605",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p.3; pp.6–9 Tables1–4",
        "scope": "定义、工程机械行、表头、期间标签和脚注",
        "purpose": "重建同版金额存量流量"
      },
      "supports": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
      "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
      "id": "EI09-READ-01",
      "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
      "authors": [
        "U.S. Census Bureau"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S07M",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
        "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
        "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
      },
      "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
      "id": "EI09-READ-02",
      "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
      "branch": "common",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
        },
        "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
        "requires_actual_read": true,
        "not_a_private_workspace_path": true
      }
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2 Consolidated Sales and Revenues; saved text 6628–6642",
        "scope": "该标题下完整叙述及经销商段",
        "purpose": "区分厂家报告、终端设备销售与渠道库存"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-03",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2 Construction Industries; 7268–7280",
        "scope": "至下一Resource Industries标题前的完整叙述",
        "purpose": "CI的终端设备销售与库存因素"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-04",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "H1 Consolidated Sales and Revenues; 7346–7357",
        "scope": "半年比较完整叙述",
        "purpose": "不把季度与半年相加"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-05",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S08",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "MD&A Glossary; 8046–8123 selected definitions",
        "scope": "Dealer Inventories、Sales Volume、Construction Industries各完整定义",
        "purpose": "排除售后零件；销售量不是利用率"
      },
      "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "branch": "dealer-channel",
      "required_when": "selected_branch includes dealer-channel",
      "fallback_supplied_unit": {
        "kind": "attached_same_source_excerpt",
        "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
        "not_a_private_workspace_path": true,
        "requires_actual_read": true,
        "access": {
          "kind": "site_body",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
        }
      },
      "id": "EI09-READ-06",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ]
    },
    {
      "source_id": "EIBC-S09",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§2.1–2.2,3.1–3.2.1,4.1,4.3",
        "scope": "March2025对应完整模型和经验单元，含相关图表、变量、信息条件",
        "purpose": "条件化动态网络机制而非无条件bullwhip"
      },
      "supports": "完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.",
      "version": "Cowles Foundation Discussion Paper 2436, March 2025",
      "branch": "research",
      "required_when": "selected_branch includes research",
      "id": "EI09-READ-07",
      "title": "The Bullwhip: Time-to-Build and Sectoral Fluctuations",
      "authors": [
        "Yan Leng",
        "Ernest Liu",
        "Yifei Ren",
        "Aleh Tsyvinski"
      ]
    }
  ],
  "required_readings_by_branch": {
    "common": [
      {
        "source_id": "EI-S06-M3-202605",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p.3; pp.6–9 Tables1–4",
          "scope": "定义、工程机械行、表头、期间标签和脚注",
          "purpose": "重建同版金额存量流量"
        },
        "supports": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
        "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
        "id": "EI09-READ-01",
        "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
        "authors": [
          "U.S. Census Bureau"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S07M",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
          "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
          "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
        },
        "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
        "id": "EI09-READ-02",
        "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
        "authors": [
          "U.S. Census Bureau"
        ],
        "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
        "branch": "common",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
          },
          "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
          "requires_actual_read": true,
          "not_a_private_workspace_path": true
        }
      }
    ],
    "dealer-channel": [
      {
        "source_id": "EI-S06-M3-202605",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p.3; pp.6–9 Tables1–4",
          "scope": "定义、工程机械行、表头、期间标签和脚注",
          "purpose": "重建同版金额存量流量"
        },
        "supports": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
        "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
        "id": "EI09-READ-01",
        "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
        "authors": [
          "U.S. Census Bureau"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S07M",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
          "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
          "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
        },
        "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
        "id": "EI09-READ-02",
        "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
        "authors": [
          "U.S. Census Bureau"
        ],
        "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
        "branch": "common",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
          },
          "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
          "requires_actual_read": true,
          "not_a_private_workspace_path": true
        }
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Q2 Consolidated Sales and Revenues; saved text 6628–6642",
          "scope": "该标题下完整叙述及经销商段",
          "purpose": "区分厂家报告、终端设备销售与渠道库存"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-03",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Q2 Construction Industries; 7268–7280",
          "scope": "至下一Resource Industries标题前的完整叙述",
          "purpose": "CI的终端设备销售与库存因素"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-04",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "H1 Consolidated Sales and Revenues; 7346–7357",
          "scope": "半年比较完整叙述",
          "purpose": "不把季度与半年相加"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-05",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "MD&A Glossary; 8046–8123 selected definitions",
          "scope": "Dealer Inventories、Sales Volume、Construction Industries各完整定义",
          "purpose": "排除售后零件；销售量不是利用率"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-06",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      }
    ],
    "research": [
      {
        "source_id": "EI-S06-M3-202605",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p.3; pp.6–9 Tables1–4",
          "scope": "定义、工程机械行、表头、期间标签和脚注",
          "purpose": "重建同版金额存量流量"
        },
        "supports": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
        "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
        "id": "EI09-READ-01",
        "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
        "authors": [
          "U.S. Census Bureau"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S07M",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
          "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
          "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
        },
        "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
        "id": "EI09-READ-02",
        "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
        "authors": [
          "U.S. Census Bureau"
        ],
        "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
        "branch": "common",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
          },
          "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
          "requires_actual_read": true,
          "not_a_private_workspace_path": true
        }
      },
      {
        "source_id": "EIBC-S09",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§§2.1–2.2,3.1–3.2.1,4.1,4.3",
          "scope": "March2025对应完整模型和经验单元，含相关图表、变量、信息条件",
          "purpose": "条件化动态网络机制而非无条件bullwhip"
        },
        "supports": "完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.",
        "version": "Cowles Foundation Discussion Paper 2436, March 2025",
        "branch": "research",
        "required_when": "selected_branch includes research",
        "id": "EI09-READ-07",
        "title": "The Bullwhip: Time-to-Build and Sectoral Fluctuations",
        "authors": [
          "Yan Leng",
          "Ernest Liu",
          "Yifei Ren",
          "Aleh Tsyvinski"
        ]
      }
    ],
    "all": [
      {
        "source_id": "EI-S06-M3-202605",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p.3; pp.6–9 Tables1–4",
          "scope": "定义、工程机械行、表头、期间标签和脚注",
          "purpose": "重建同版金额存量流量"
        },
        "supports": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
        "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
        "id": "EI09-READ-01",
        "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
        "authors": [
          "U.S. Census Bureau"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S07M",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, pp.3–4",
          "scope": "新订单总体估计与季调新订单的构造关系；取消/修改影响的定义.",
          "purpose": "解释工程机械表中381桥为何是统计定义重建，而不是三个独立观测的外部验证."
        },
        "supports": "M3 new-orders construction and seasonal-adjustment identity only.",
        "id": "EI09-READ-02",
        "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
        "authors": [
          "U.S. Census Bureau"
        ],
        "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
        "branch": "common",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md",
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/census-M3-methodology-adopted-excerpt.md"
          },
          "scope": "Estimation, intervening Benchmarking, Seasonal Adjustment Methodology, Reliability of the Data; actual previously saved official returned text.",
          "requires_actual_read": true,
          "not_a_private_workspace_path": true
        }
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Q2 Consolidated Sales and Revenues; saved text 6628–6642",
          "scope": "该标题下完整叙述及经销商段",
          "purpose": "区分厂家报告、终端设备销售与渠道库存"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-03",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Q2 Construction Industries; 7268–7280",
          "scope": "至下一Resource Industries标题前的完整叙述",
          "purpose": "CI的终端设备销售与库存因素"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-04",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "H1 Consolidated Sales and Revenues; 7346–7357",
          "scope": "半年比较完整叙述",
          "purpose": "不把季度与半年相加"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-05",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S08",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "MD&A Glossary; 8046–8123 selected definitions",
          "scope": "Dealer Inventories、Sales Volume、Construction Industries各完整定义",
          "purpose": "排除售后零件；销售量不是利用率"
        },
        "supports": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
        "version": "Period ended 2026-06-30; filed 2026-08-05",
        "branch": "dealer-channel",
        "required_when": "selected_branch includes dealer-channel",
        "fallback_supplied_unit": {
          "kind": "attached_same_source_excerpt",
          "file": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md",
          "not_a_private_workspace_path": true,
          "requires_actual_read": true,
          "access": {
            "kind": "site_body",
            "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/references/cat-q2-2026-adopted-prose.md"
          }
        },
        "id": "EI09-READ-06",
        "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
        "authors": [
          "Caterpillar Inc."
        ]
      },
      {
        "source_id": "EIBC-S09",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§§2.1–2.2,3.1–3.2.1,4.1,4.3",
          "scope": "March2025对应完整模型和经验单元，含相关图表、变量、信息条件",
          "purpose": "条件化动态网络机制而非无条件bullwhip"
        },
        "supports": "完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.",
        "version": "Cowles Foundation Discussion Paper 2436, March 2025",
        "branch": "research",
        "required_when": "selected_branch includes research",
        "id": "EI09-READ-07",
        "title": "The Bullwhip: Time-to-Build and Sectoral Fluctuations",
        "authors": [
          "Yan Leng",
          "Ernest Liu",
          "Yifei Ren",
          "Aleh Tsyvinski"
        ]
      }
    ]
  },
  "branch_tasks": {
    "common": "按固定 M3 定义重建季调 N=S+ΔB 的381桥，将制造商存货+66另列；推严格库存阈值，并用两条时间轴提出可区分的经营路径.",
    "dealer-channel": "完成共同主线后，按 CAT 同源四个完整单元分开 Q2/H1、2025/2026、全体/CI 的经销商库存变动；解释向最终用户销售设备和库存可同时增加，不虚构终端销售金额.",
    "research": "完成共同主线后，读 March 2025 Cowles 的指定完整模型与经验单元，说明投入生产/交付延迟、冲击形状和网络位置的条件；不转成工厂建设期或伪复现IRF."
  },
  "learning_task": "按固定 M3 定义重建季调 N=S+ΔB 的381桥，将制造商存货+66另列；推严格库存阈值，并用两条时间轴提出可区分的经营路径.",
  "source_id_aliases": {
    "EIBC-S03": "BF-S-COST-FY2025-SEC",
    "EIBC-S07": "EI-S06-M3-202605"
  },
  "shared_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/inputs.json",
  "experiment_ids": [
    "exp-ei09-clocks"
  ],
  "bibliography": [
    {
      "id": "EI-S06-M3-202605",
      "title": "Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Released 2026-07-02 10:00 AM EDT; CB 26-104 M3-2 (26)-05",
      "url": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
      "locators": [
        "PDF p.3 definitions",
        "PDF pp.6–9 Tables 1–4; Construction machinery; headers and footnotes"
      ]
    },
    {
      "id": "EIBC-S07M",
      "title": "Methodology for Manufacturers’ Shipments, Inventories, and Orders",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "Publication/revision date not displayed in adopted unit; accessed 2026-09-21",
      "url": "https://www.census.gov/manufacturing/m3/Web_Methodology.pdf",
      "locators": [
        "Estimation, PDF pp.2–3",
        "Seasonal Adjustment Methodology, PDF pp.3–4",
        "Reliability of the Data, PDF p.4"
      ]
    },
    {
      "id": "EIBC-S08",
      "title": "Caterpillar Q2 2026 Form 10-Q — adopted MD&A units",
      "authors": [
        "Caterpillar Inc."
      ],
      "version": "Period ended 2026-06-30; filed 2026-08-05",
      "url": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm",
      "locators": [
        "Q2 Consolidated Sales and Revenues (saved text 6628–6642)",
        "Q2 Construction Industries (7268–7280)",
        "H1 Consolidated Sales and Revenues (7346–7357)",
        "MD&A Glossary: Dealer Inventories / Sales Volume / Construction Industries (8046–8123)"
      ]
    },
    {
      "id": "EIBC-S09",
      "title": "The Bullwhip: Time-to-Build and Sectoral Fluctuations",
      "authors": [
        "Yan Leng",
        "Ernest Liu",
        "Yifei Ren",
        "Aleh Tsyvinski"
      ],
      "version": "Cowles Foundation Discussion Paper 2436, March 2025",
      "url": "https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf",
      "locators": [
        "§§2.1–2.2",
        "§§3.1–3.2.1",
        "§4.1",
        "§4.3"
      ]
    }
  ],
  "statistical_identity": "Census季调新订单按N＝S＋ΔB构造，取消及修改影响纳入净额. 5月4879＝4498＋381，制造商存货另增66.",
  "output_field_interpretation": {
    "m3.adjustment_residual": "沿原引擎保留的代数字段；本版为0反映统计构造核对，不估计经济调整为零."
  }
}
```

## Supplied entry
<div data-reading-branch-controls aria-label="选择阅读分支">
<button type="button" data-select-reading-branch="common">共同主线</button>
<button type="button" data-select-reading-branch="dealer-channel">渠道比较</button>
<button type="button" data-select-reading-branch="research">研究选读</button>
<button type="button" data-select-reading-branch="all">全部展开</button>
</div>

<a id="ei09-clocks"></a>

## 订单、交付与资本形成

订单、生产、厂家出货、渠道库存与终端销售构成经营链条；投资决定、建设与投运构成资本形成过程. 两者可并行发生，所需时间也不同.

```text
经营与供应链过程：
需求信号 → 下单、采购 → 投入生产或交付 → 厂家出货 → 渠道库存 → 向最终用户销售
                         每个箭头都有自己的交期或处理时间

资本形成过程：
预期需求与回报 → 投资决定 → 资金、场址、设备安排 → 建设、调试 → 投入运行
       └──────── 可在当期销售尚未完成时提前启动 ────────────────┘
```

投入生产与运输决定经营交期，设备建设与调试决定新容量投入使用的时间.

<a id="ei09-m3"></a>
<a id="CASE-EI09-M3-CONSTRUCTION-MACHINERY-202605"></a>

## 制造业订单与存货

Census M3 记录出货、新订单、未交订单与存货. 本例采用2026年7月2日发布的5月完整版，5月为初值、4月为该版修订值. 下表摘录工程机械行，单位 USD M，已季调，未作价格调整. [^m3]

| 原表与记录对象 | 2026年4月，修订值 | 2026年5月，初值 | 读数时必须保留的身份 |
|---|---:|---:|---|
| Table1，出货 | 4,424 | 4,498 | 月内流量 |
| Table2，新订单 | 4,734 | 4,879 | 月内流量，净取消口径 |
| Table3，未完成订单 | 11,214 | 11,595 | 月末待交付订单余额 |
| Table4，存货 | 10,593 | 10,659 | 月末制造商存货金额 |

这四张表先提供生产过程的不同观察点. 订单显示新增加的待履约需求，出货显示本月离开厂家交付环节的金额，未完成订单是剩余任务的余额；存货则是生产与销售过程中仍由相关主体持有的资源金额，它并不只包含已完成、可立即出售的设备.

令 $B_t$ 为未完成订单，$N_t$ 为新订单净额，$S_t$ 为出货，$A_t$ 汇集范围、计量和修订调整，则一般的金额桥为：

$$
B_t=B_{t-1}+N_t-S_t+A_t.
$$

但**这份 Census M3 发布表还有一个统计构造关系**. 官方 Methodology 的 Estimation 单元说明，总体新订单估计由“当月出货 + 本月与上月未完成订单之差”构造；Seasonal Adjustment Methodology 又规定，季调新订单由季调出货和季调未完成订单的期差构造. 新订单估计本身也已经包含先前订单取消和修改的影响. [^m3method]

Census 按 $N_t=S_t+(B_t-B_{t-1})$ 构造新订单，并纳入既有订单取消和修改的影响. 本例 $4879-4498=381=11595-11214$，与该统计定义一致. [^m3method]

新订单环比约3.063%，出货约1.673%，未交订单约3.398%，存货约0.623%. 前三者由上述统计恒等式连接. 存货另增66，由10,593增至10,659；解释该变化需进一步分解原材料、在制品、成品及估价因素.

公布存货／出货比约为 $10659/4498\approx2.370$，即存货相对于当月出货的金额倍数. 将其用于交期估计，还需匹配物量、生产阶段与流转方式.

<a id="ei09-path"></a>

## 可检验的机制路径

假设订单突然上升而厂家交付调整较慢. 原有出货暂时跟不上，未完成订单先增加；企业可能增加排产和采购，原材料或在制品随后增加. 这是一条“需求先变、交付后跟”的路径. 它预期我们会看到交期延长、产出响应或资源投入增加.

另一条路径是特定投入交付受阻. 厂家可能继续接单，出货受限，未完成订单也会上升；部分不能配齐的在制品积累，甚至在总存货增加时仍缺少关键零件. 这条解释更需要投入到货、缺件和生产瓶颈资料. 两条路径可以产生相似的四表方向，却要求不同的新证据.

“库存高”也要相对于目标来解释. 我们用一个明示的教学假设隔离调整速度：目标库存 $I^*$ 固定，超额库存为 $E_t=I_t-I^*\ge0$；每期净消化超额库存的比例为 $\lambda$，没有新的需求冲击、估值变化或目标变化. 于是

$$
E_{t+1}=E_t-\lambda E_t=(1-\lambda)E_t,
\qquad
E_t=E_0(1-\lambda)^t.
$$

取 $E_0=100,\lambda=0.05$，第6期剩余约73.509，第7期约69.834，首次低于70发生于第7期.

一般地，对 $0<\lambda<1$、$0<h\le E_0$，严格条件 $E_t<h$ 给出
$t>\log(h/E_0)/\log(1-\lambda)$. 因此第一个满足条件的整数期为

$$
n=\left\lfloor\frac{\log(h/E_0)}{\log(1-\lambda)}\right\rfloor+1.
$$

若 $\lambda=0.5$、阈值为25，序列100、50、25、12.5首次严格低于阈值在第3期；$\lambda=0$ 时正缺口保持不变. 对 $0<\lambda<1$，该模型沿同一方向逐期收敛.

| 教学设置 | 临界前一期 | 下一期 | 首次严格低于阈值 |
|---|---|---|---|
| $\lambda=.05,h=70$ | $E_6=73.509$ | $E_7=69.834$ | 第7期 |
| $\lambda=.5,h=25$ | $E_2=25$，恰好相等 | $E_3=12.5$ | 第3期 |
| $\lambda=0,h=70$ | 始终为100 | 始终为100 | 不发生 |

<a id="ei09-experiment"></a>

## 库存调整实验

<div data-experiment-slot="exp-ei09-clocks"></div>

<section data-reading-branch="dealer-channel">
<a id="ei09-dealer"></a>
<a id="CASE-EI09-CAT-Q2H1-2026"></a>
<details>
<summary>比较分支：Caterpillar 独立经销渠道</summary>

Caterpillar Q2 2026 10-Q 披露独立经销商的库存变动. Dealer Inventories 指经销商的机器与发动机库存，排除售后零件. [^cat]

| Dealer Inventories期间变动， B 美元 | 2025年同期 | 2026年当期 | 覆盖 |
|---|---:|---:|---|
| 第二季度 | +0.1 | +0.6 | 全体 |
| 第二季度 | −0.3 | +0.4 | Construction Industries |
| 上半年 | +0.2 | +2.6 | 全体 |
| 上半年 | −0.4 | +1.9 | Construction Industries |

上半年包含第二季度，Construction Industries 属于全体业务的子集. 各窗口分别比较同一范围的变化.

同一Q2单元说，销售量增长主要由**向最终用户销售设备增加**驱动，CI北美叙述还同时提到经销商库存变化的影响. 这里的 end-user equipment sales 是售出设备，不是设备使用小时、开工率或作业量. 公司对 Sales Volume 的术语定义还包含新品引入的销售影响，不能只看中文“量”字就把所有桥项都当设备台数. [^cat]

```text
厂家与配送中心
   │ 向渠道供货／销售
   ▼
独立经销商 ──持有机器与发动机库存，排除售后零件
   │ 向最终用户销售设备
   ▼
最终用户
```

同单位、估价与范围下，经销渠道满足 $I_t^d=I_{t-1}^d+X_t-R_t+J_t$，其中 $X_t$ 为流入、$R_t$ 为流出、$J_t$ 为调整. 流入增幅超过流出时，终端销售和库存可同时增加. 复算这条桥需取得各项可比金额，当前 MD&A 尚缺完整输入.

管理层将经销商库存选择与需求预期、季节性、机器租赁及交货时间联系起来；交货时间又取决于工厂和配送中心的产品可得性. [^cat]

**练习.** 比较 Construction Industries 第二季度增0.4 B、上半年增1.9 B的范围，解释终端销售增加时渠道库存仍可增加的条件.

</details>
</section>

<section data-reading-branch="research">
<a id="ei09-research"></a>
<details>
<summary>研究分支：为什么有些冲击会向上游放大？</summary>

Leng、Liu、Ren、Tsyvinski 的2025年3月版本研究投入品生产和交付的 time-to-build，以及这种时滞如何沿部门网络传播冲击. [^bullwhip]

一种信号出现后立即逐步消退，另一种则先上升再回落；即使当前幅度相似，对未来交付时点的需求也不同. 企业在同一信息条件下会作出不同投入安排. 论文完整信息单元分别处理单调型与驼峰型冲击，并分析网络位置与投入滞后如何共同作用. 因此，“越上游必然放大”不是无条件定律.

经验分析结合工业生产、投入产出联系与M3订单积压代理. 在流量和订单范围匹配等指定条件下，订单积压／出货帮助近似从下单到收货的时间；模型再用冲击形状及部门联系解释动态响应. [^bullwhip]

</details>
</section>

<a id="ei09-exercises"></a>

## 数据与动态练习

**任务一：按统计定义重建订单桥.** 用原表和 M3 Methodology 解释为什么5月会有 $4879-4498=11595-11214=381$，并指出“制造商存货也多66”应放在哪里.

**解析.** $4879=4498+(11595-11214)$ 是该版新订单统计构造的复算. 存货增加 $10659-10593=66$，需用库存阶段及估价资料继续分解.

**任务二：阈值为何必须严格？** 保持 $E_0=100$，令 $\lambda=0.5$. 当阈值是25时，给出最早满足“低于”与“不高于”的时期.

**解析.** 序列为100、50、25、12.5. 不高于25在第2期成立，严格低于25在第3期成立；阈值判断按原始计算值进行.

**迁移题.** 同一口径材料显示：新订单下降，出货暂时持平，经销商库存偏高，新厂仍在建设. 请提出“去库调整”和“长期需求转弱”两条路径，并分别选择下一项最有区分力的证据.

**解析.** 去库路径可以是渠道主动减少向厂商订货，但仍利用现有库存满足较稳定的终端设备销售；厂家暂时交付原有积压订单，所以出货滞后于新订单. 应检查同批终端销售、渠道补货与库存消化是否随后恢复. 长期需求转弱则预期终端购买、客户投资计划或订单取消持续恶化，原有积压耗尽后厂家出货也承压；应检查这些更接近客户用途的资料. 新厂建设是早先投资决定的延续，不能用“仍在建设”替代当前需求证据. 两条路径还可能叠加，后续判断要允许修正.

[^m3]: EI-S06-M3-202605，Census《Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report》，2026-07-02 10:00 AM EDT，CB 26-104 M3-2 (26)-05. PDF p.3定义、pp.6–9 Tables1–4工程机械行、表头及表注；May preliminary / April revised. [固定原件](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf).
[^m3method]: EIBC-S07M，U.S. Census Bureau，《Methodology for Manufacturers’ Shipments, Inventories, and Orders》. 采用 Estimation（PDF pp.2–3）中“new orders = shipments + change in unfilled orders”的估计定义，以及 Seasonal Adjustment Methodology（pp.3–4）中季调新订单的同样构造；原文还说明新订单包含既有订单取消和修改的影响. [官方方法 PDF](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf).
[^cat]: EIBC-S08，Caterpillar Q2 2026 10-Q，period 2026-06-30；完整采用单元为 Q2 Consolidated Sales and Revenues、Q2 Construction Industries、H1 Consolidated Sales and Revenues，以及MD&A Glossary的Dealer Inventories、Sales Volume、Construction Industries. [SEC原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm).
[^bullwhip]: EIBC-S09，Leng、Liu、Ren、Tsyvinski，《The Bullwhip: Time-to-Build and Sectoral Fluctuations》，Cowles DP2436，March 2025. 采用§§2.1–2.2、3.1–3.2.1、4.1、4.3. [所用版本](https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf).

<script src="/notebook/labs/ei-b/reader-adapter.js" defer></script>

## Additional teaching material
## 订单与库存的静态计算

Census May 2026工程机械数据以USD M计，已季调、未作价格调整. 4月修订值与5月初值分别为：新订单4734／4879，出货4424／4498，未交订单11214／11595，存货10593／10659. 新订单按 $N=S+\Delta B$ 构造，5月 $4879-4498=381=11595-11214$；存货另增66，存货／当月出货约2.37.

教学库存偏差为 $E_t=100(1-\lambda)^t$，$\lambda=m/200$，$m$ 为0至100整数，阈值 $h$ 为1至100整数. 默认 $\lambda=0.05,h=70$，第6期约73.509，第7期约69.834，首次低于阈值在第7期. $\lambda=0.5,h=25$ 时第2期等于25，第3期12.5；$\lambda=0$ 时维持100. 整数判别可用 $100(200-m)^n<h200^n$，避免舍入改变等号结果.

CAT经销商机器与发动机库存排除售后零件. 2025与2026同期变动（USD B）依次为：Q2全体0.1／0.6、Q2 Construction Industries −0.3／0.4、H1全体0.2／2.6、H1 Construction Industries −0.4／1.9. 上半年包含第二季度，Construction Industries为全体子集.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei09-clocks",
    "title": "库存周期、产能周期与结构变化：机制实验",
    "anchor": "ei09-experiment",
    "description": "M3 observed table is read with Census methodology: published seasonally adjusted new orders are constructed from seasonally adjusted shipments plus the change in seasonally adjusted unfilled orders. Inventory-adjustment path is a separate teaching model.",
    "inputs": {
      "input_version": "2026-09-21-review-v2",
      "facts": {
        "m3": {
          "unit": "USD M",
          "adjustment": "seasonally adjusted; not price adjusted",
          "industry": "Construction machinery",
          "rows": [
            {
              "period": "2026-04",
              "vintage_status": "revised",
              "shipments": 4424,
              "orders": 4734,
              "backlog": 11214,
              "inventories": 10593
            },
            {
              "period": "2026-05",
              "vintage_status": "preliminary",
              "shipments": 4498,
              "orders": 4879,
              "backlog": 11595,
              "inventories": 10659
            }
          ],
          "source_ids": [
            "EIBC-S07",
            "EIBC-S07M"
          ],
          "new_orders_method": "Published universe and seasonally adjusted new orders are constructed from shipments plus period change in unfilled orders; cancellations/modifications are included in the new-orders estimate."
        },
        "cat": {
          "source_id": "EIBC-S08",
          "unit": "USD billion",
          "measure": "period change in dealer machine/engine inventories excluding aftermarket parts",
          "rows": [
            {
              "window": "Q2",
              "scope": "total",
              "2025": 0.1,
              "2026": 0.6
            },
            {
              "window": "Q2",
              "scope": "Construction Industries",
              "2025": -0.3,
              "2026": 0.4
            },
            {
              "window": "H1",
              "scope": "total",
              "2025": 0.2,
              "2026": 2.6
            },
            {
              "window": "H1",
              "scope": "Construction Industries",
              "2025": -0.4,
              "2026": 1.9
            }
          ],
          "scope_rules": [
            "H1 includes Q2",
            "CI subset of total",
            "changes, not ending balances",
            "end-user equipment sales != equipment utilization"
          ]
        }
      },
      "models": {
        "inventory": {
          "identity": "teaching_assumption",
          "defaults": {
            "E0": 100,
            "lambda_steps": 10,
            "lambda_denominator": 200,
            "h": 70
          },
          "ranges": {
            "lambda_steps": [
              0,
              100,
              1
            ],
            "h": [
              1,
              100,
              1
            ]
          },
          "conditions": [
            "fixed target; no fresh shocks",
            "lambda=lambda_steps/200",
            "strict E_n<h; n nonnegative integer",
            "exact integer comparison of 100*(200-m)^n < h*200^n after logarithmic candidate",
            "lambda=0 never crosses legal threshold",
            "not delivery delay, not plant construction time"
          ]
        }
      },
      "default_outputs": {
        "inventory": {
          "E0": 100,
          "lambda_steps": 10,
          "lambda": 0.05,
          "h": 70,
          "crossing": 7,
          "status": "crossed",
          "previous": 73.50918906249998,
          "current": 69.83372960937497,
          "equality_previous": false,
          "verified_current": true,
          "verified_previous": true,
          "points": [
            {
              "n": 0,
              "E": 100
            },
            {
              "n": 1,
              "E": 95
            },
            {
              "n": 2,
              "E": 90.25
            },
            {
              "n": 3,
              "E": 85.73749999999998
            },
            {
              "n": 4,
              "E": 81.45062499999999
            },
            {
              "n": 5,
              "E": 77.37809374999998
            },
            {
              "n": 6,
              "E": 73.50918906249998
            },
            {
              "n": 7,
              "E": 69.83372960937497
            },
            {
              "n": 8,
              "E": 66.34204312890623
            },
            {
              "n": 9,
              "E": 63.02494097246091
            },
            {
              "n": 10,
              "E": 59.873693923837855
            },
            {
              "n": 11,
              "E": 56.880009227645964
            },
            {
              "n": 12,
              "E": 54.03600876626366
            },
            {
              "n": 13,
              "E": 51.33420832795048
            },
            {
              "n": 14,
              "E": 48.76749791155295
            },
            {
              "n": 15,
              "E": 46.329123015975306
            },
            {
              "n": 16,
              "E": 44.012666865176534
            },
            {
              "n": 17,
              "E": 41.812033521917705
            },
            {
              "n": 18,
              "E": 39.72143184582182
            },
            {
              "n": 19,
              "E": 37.73536025353073
            },
            {
              "n": 20,
              "E": 35.848592240854195
            }
          ],
          "comparison": "strict <"
        },
        "m3": {
          "net_flow": 381,
          "backlog_change": 381,
          "adjustment_residual": 0,
          "inventory_change": 66,
          "inventory_shipments": 2.3697198755002225,
          "growth_pct": {
            "orders": 3.0629488804393645,
            "shipments": 1.672694394213381,
            "backlog": 3.3975387907972276,
            "inventories": 0.6230529595015577
          }
        }
      }
    },
    "outputs": {
      "inventory": {
        "E0": 100,
        "lambda_steps": 10,
        "lambda": 0.05,
        "h": 70,
        "crossing": 7,
        "status": "crossed",
        "previous": 73.50918906249998,
        "current": 69.83372960937497,
        "equality_previous": false,
        "verified_current": true,
        "verified_previous": true,
        "points": [
          {
            "n": 0,
            "E": 100
          },
          {
            "n": 1,
            "E": 95
          },
          {
            "n": 2,
            "E": 90.25
          },
          {
            "n": 3,
            "E": 85.73749999999998
          },
          {
            "n": 4,
            "E": 81.45062499999999
          },
          {
            "n": 5,
            "E": 77.37809374999998
          },
          {
            "n": 6,
            "E": 73.50918906249998
          },
          {
            "n": 7,
            "E": 69.83372960937497
          },
          {
            "n": 8,
            "E": 66.34204312890623
          },
          {
            "n": 9,
            "E": 63.02494097246091
          },
          {
            "n": 10,
            "E": 59.873693923837855
          },
          {
            "n": 11,
            "E": 56.880009227645964
          },
          {
            "n": 12,
            "E": 54.03600876626366
          },
          {
            "n": 13,
            "E": 51.33420832795048
          },
          {
            "n": 14,
            "E": 48.76749791155295
          },
          {
            "n": 15,
            "E": 46.329123015975306
          },
          {
            "n": 16,
            "E": 44.012666865176534
          },
          {
            "n": 17,
            "E": 41.812033521917705
          },
          {
            "n": 18,
            "E": 39.72143184582182
          },
          {
            "n": 19,
            "E": 37.73536025353073
          },
          {
            "n": 20,
            "E": 35.848592240854195
          }
        ],
        "comparison": "strict <"
      },
      "m3": {
        "net_flow": 381,
        "backlog_change": 381,
        "adjustment_residual": 0,
        "inventory_change": 66,
        "inventory_shipments": 2.3697198755002225,
        "growth_pct": {
          "orders": 3.0629488804393645,
          "shipments": 1.672694394213381,
          "backlog": 3.3975387907972276,
          "inventories": 0.6230529595015577
        }
      }
    },
    "algorithm": {
      "formula": "E_n=100*(1-m/200)^n; strict E_n<h. M3 B_t=B_(t-1)+N_t-S_t+A_t.",
      "algorithm": "engine.inventory; logarithmic candidate then exact BigInt comparison 100*(200-m)^n<h*200^n; m=0 never. engine.m3 on immutable observed table.",
      "boundary_tests": [
        "all 10000 positive-lambda legal slider pairs",
        "m0",
        "h100",
        "m100,h25 equality",
        "invalid threshold/step"
      ],
      "static": "readers/EI-09.reader.md#ei09-path; static/static-equivalents.md third unit"
    },
    "static_equivalent": {
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/static-equivalents.md",
      "in_entry": "ei09-experiment",
      "text": "M3 4月/5月固定表 + 381定义性构造桥 + 制造商存货+66；另列严格阈值库存调整表."
    },
    "implementation_files": [
      "/notebook/labs/ei-b/inputs.json",
      "/notebook/labs/ei-b/inputs.js",
      "/notebook/labs/ei-b/engine.js",
      "/notebook/labs/ei-b/ui.js",
      "/notebook/labs/ei-b/interactions.html"
    ],
    "state": "staging_only_awaiting_Lead_UI",
    "local_url": "/notebook/labs/ei-b/interactions.html?experiment=exp-ei09-clocks",
    "statistical_identity": "季调新订单 N 由季调出货 S 与季调未完成订单期差 ΔB 构造：N=S+ΔB. 因此 4,498+(11,595−11,214)=4,879 是同一发布版本的统计定义重建，不是三项独立需求观测互证；不能据此推断经济调整为零. 取消和修改影响已包含在新订单估计中. 制造商存货增加 66 另列.",
    "output_field_interpretation": {
      "m3.adjustment_residual": "原始引擎字段名；代数差为0不能解释为经济取消/修改/调整为0."
    }
  }
]
```

## Sources
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告分别列出出货、新订单、未交订单和存货. 本站使用 2026 年 5 月报告及其中 4 月修订列，单位 USD M，数据经过季节调整，未作价格调整. 新订单含取消和修改影响，按出货加未交订单变动构造；这一关系属于统计定义.
- [Methodology for Manufacturers’ Shipments, Inventories, and Orders](https://www.census.gov/manufacturing/m3/Web_Methodology.pdf): 新订单由出货加未完成订单的月度变化构造，包含既有订单的取消和修改；季节调整后的序列也沿用这一方法. 本站例中 381 是按该定义计算的数值.
- [Caterpillar Q2 2026 Form 10-Q — adopted MD&A units](https://www.sec.gov/Archives/edgar/data/18230/000001823026000046/cat-20260630.htm): 完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.
- [The Bullwhip: Time-to-Build and Sectoral Fluctuations](https://cowles.yale.edu/sites/default/files/2025-04/d2436.pdf): 完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.

## Content relations
```json
[
  {
    "from": "zh-ei09",
    "relation": "part_of",
    "to": "industry-dynamics",
    "reason": "主要 topic 归属"
  },
  {
    "from": "ei09-m3",
    "relation": "illustrated_by",
    "to": "CASE-EI09-M3-CONSTRUCTION-MACHINERY-202605",
    "reason": "固定期间的真实材料，保留单位与统计对象",
    "at_section": "ei09-m3"
  },
  {
    "from": "ei09-dealer",
    "relation": "illustrated_by",
    "to": "CASE-EI09-CAT-Q2H1-2026",
    "reason": "固定期间的真实材料，保留单位与统计对象",
    "at_section": "ei09-dealer"
  },
  {
    "from": "ei09-m3",
    "relation": "supported_by",
    "to": "EI-S06-M3-202605",
    "reason": "工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账.",
    "locator": "PDF p.3 definitions; PDF pp.6–9 Tables 1–4; Construction machinery; headers and footnotes",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei09-m3"
  },
  {
    "from": "ei09-dealer",
    "relation": "supported_by",
    "to": "EIBC-S08",
    "reason": "完整具名MD&A叙述中的Q2/H1全体与CI经销商库存变动；经销商独立，库存排除售后零件. end-user equipment sales译为向最终用户销售设备，而非设备使用量.",
    "locator": "Q2 Consolidated Sales and Revenues (saved text 6628–6642); Q2 Construction Industries (7268–7280); H1 Consolidated Sales and Revenues (7346–7357); MD&A Glossary: Dealer Inventories / Sales Volume / Construction Industries (8046–8123)",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei09-dealer"
  },
  {
    "from": "ei09-research",
    "relation": "supported_by",
    "to": "EIBC-S09",
    "reason": "完整信息下投入生产/交付延迟、网络位置与冲击时间形状的条件化机制；数据代理和经验检验分开. 非新厂建设期，未复现IRF或不完全信息命题.",
    "locator": "§§2.1–2.2; §§3.1–3.2.1; §4.1; §4.3",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei09-research"
  },
  {
    "from": "ei09-clocks",
    "relation": "uses_method",
    "to": "zh-ei08",
    "reason": "只调用资本形成过程，不共用交付迟滞参数",
    "at_section": "ei09-clocks"
  },
  {
    "from": "ei09-m3",
    "relation": "uses_method",
    "to": "zh-ei02",
    "reason": "流量/存量、季调、版本、单位",
    "at_section": "ei09-m3"
  },
  {
    "from": "ei09-m3",
    "relation": "supported_by",
    "to": "EIBC-S07M",
    "at_section": "ei09-m3",
    "reason": "季调新订单 N 由季调出货 S 与季调未完成订单期差 ΔB 构造：N=S+ΔB. 因此 4,498+(11,595−11,214)=4,879 是同一发布版本的统计定义重建，不是三项独立需求观测互证；不能据此推断经济调整为零. 取消和修改影响已包含在新订单估计中. 制造商存货增加 66 另列.",
    "locator": "Estimation, PDF pp.2–3; Seasonal Adjustment Methodology, PDF pp.3–4; Reliability of the Data, PDF p.4",
    "scope": "统计构造与取消/修改身份；不证明需求因果."
  },
  {
    "from": "ei09-experiment",
    "relation": "illustrated_by",
    "to": "exp-ei09-clocks",
    "at_section": "ei09-experiment",
    "reason": "M3 observed table is read with Census methodology: published seasonally adjusted new orders are constructed from seasonally adjusted shipments plus the change in seasonally adjusted unfilled orders. Inventory-adjustment path is a separate teaching model."
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 7/10
从固定M3四表和统计定义出发，区分订单桥、库存调整与资本形成.
从库存与交付动态继续看技术采用、指标选择和完整行业路径.
Next: [技术、创新与产业结构演变](https://ou-liu-red-sugar.github.io/zh/notebook/technology-adoption-value-capture/)
