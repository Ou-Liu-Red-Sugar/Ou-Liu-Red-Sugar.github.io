# 无形资源、研发与商誉

沿研发、初步购买价分摊和集团无形资产滚动识别资源及会计来源；进阶再构建条件明确的资本存量.

Entry: zh-bf14 | Node: BF-14 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 你正在教BF-14《无形资源、研发与商誉》，材料版本2026-09-22. 学习任务：恢复9,636=4,379+5,257，解释3,818、294/36及1,687/1,569的各自身份. Salesforce与JEP为核心必读；EPW仅在读者启用进阶测量分支后读取. 讲解前先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题、版本、位置、范围与当前用途；runtime_reading_log从空数组开始，不以文献目录、工具标题或先前已读记录代替本次读取. 读取失败先找同版本正式等价原文；仍缺则明确该单元缺口，不以摘要补讲. 诊断：恢复9,636=4,379+5,257，解释3,818、294/36及1,687/1,569的各自身份；先从完整PPA恢复非商誉净资产. 沿本包正文、实际输入、静态实验与题解推进，先让读者解释或计算再反馈；已会步骤跳过. 默认迁移为更换资源类别或调整明确的资本化/折损参数并解释身份；研究分支启用后再读EPW. 通过尺度：不重复加研发SBC，不把累计摊销净变动当期间费用；模型初始存量、流量、形成比例、折损与时序全部可重算. 保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据；资料不足处保留缺口.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "default_branch": "core",
  "branch_options": [
    "core"
  ],
  "branch_tasks": {
    "core": "恢复9,636=4,379+5,257，解释3,818、294/36及1,687/1,569的各自身份."
  },
  "selection_rules": {
    "common": "始终必读",
    "selected": "只读所选主分支",
    "all": "读所有主分支",
    "optional": "读者启用后再读；cat/epw/cross不同入口"
  },
  "required_readings": [
    {
      "source_id": "BFDE-JEP",
      "title": "The Economics of Intangible Capital",
      "authors": [
        "Nicolas Crouzet",
        "Janice C. Eberly",
        "Andrea L. Eisfeldt",
        "Dimitris Papanikolaou"
      ],
      "version": "JEP 36(3), Summer2022, pp29–52; DOI10.1257/jep.36.3.29",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf"
      },
      "required_unit": {
        "locator": "pp29–34 / PDF1–6",
        "scope": "Introduction及Characteristics单元至下一节标题",
        "purpose": "区分经营无形资源与账面确认"
      },
      "supports": "无形资源的承载、非竞争性使用、有限排他性与过时；本篇未复现后续模型或把Figure1研究量当公司数据.",
      "branch": "common"
    },
    {
      "source_id": "BBC-C01",
      "title": "Salesforce, Inc. — FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31; comparison 2025-01-31; filed 2026-03-02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Statement p58 and notes1–2; Note1 pp67–68; Note7 pp77–79; Note8 pp80–81",
        "scope": "研发含SBC、初步Informatica PPA、奖励分配、无形资产/商誉滚动完整采用表注",
        "purpose": "重建PPA和实际摊销"
      },
      "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
      "branch": "common"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BFDE-EPW",
      "title": "Measuring Intangible Capital with Market Prices",
      "authors": [
        "Michael Ewens",
        "Ryan H. Peters",
        "Sean Wang"
      ],
      "version": "Management Science, Articles in Advance, April5 2024, pp1–21; DOI10.1287/mnsc.2021.02058",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://profsean.wang/papers/ewens-peters-wang-2025-ms.pdf"
      },
      "required_unit": {
        "locator": "Introduction, §§2–4.2, pp1–7",
        "scope": "完整积累/退出数据/识别/价格约束单元",
        "purpose": "进入测量分支前区分假设和估计"
      },
      "supports": "退出价格连接历史研发/SG&A与资本存量；资本化比例与折损识别限制、选择/协同/溢付及价格约束. 只用设置与局限，不采用摘要效果量或公司参数.",
      "branch": "research",
      "activated_by": "epw"
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "input_id": "BFDE-SHARED-20260921-v1",
    "historical": {
      "scope": [
        "BF-12",
        "BF-13",
        "BF-14",
        "BF-18",
        "BF-17",
        "BF-16"
      ],
      "retrieved_on": "2026-09-21",
      "identity": "Historical financial-statement observations; teaching cases are separately labelled. Values are not stock valuation inputs.",
      "costco": {
        "source_id": "BF-S-COST-FY2025-PDF",
        "unit": "USD M",
        "periods": [
          "2025-08-31",
          "2024-09-01"
        ],
        "fiscal_weeks": [
          52,
          52
        ],
        "ppe": {
          "locator": "FY2025 annual-report PDF printed pp42–43; PDF pp48–49",
          "land": [
            10323,
            9447
          ],
          "buildings_improvements": [
            25508,
            23727
          ],
          "equipment_fixtures": [
            13127,
            12387
          ],
          "construction_in_progress": [
            1882,
            1389
          ],
          "gross": [
            50840,
            46950
          ],
          "accumulated_depreciation_amortization_positive": [
            18931,
            17918
          ],
          "net": [
            31909,
            29032
          ]
        },
        "flows": {
          "locator": "Printed pp35,39; PDF pp41,45",
          "net_sales": [
            269912,
            249625
          ],
          "merchandise_costs": [
            239886,
            222358
          ],
          "cash_ppe_additions_outflow_positive": [
            5498,
            4710
          ],
          "consolidated_depreciation_amortization": [
            2426,
            2237
          ],
          "capex_included_in_liabilities_supplemental_noncash": [
            193,
            203
          ],
          "cashflow_inventory_adjustment": [
            559,
            -2068
          ],
          "cashflow_accounts_payable_adjustment": [
            404,
            1938
          ],
          "cfo": [
            13335,
            11339
          ]
        },
        "working_capital": {
          "locator": "Printed p37 balance sheet; pp41–42 Receivables, Net; p39 cash flow",
          "inventory": [
            18116,
            18647
          ],
          "accounts_payable": [
            19783,
            19421
          ],
          "receivables_net": [
            3203,
            2721
          ],
          "deferred_membership_fees": [
            2854,
            2501
          ],
          "receivables_identity": "Includes vendor, credit-card, reinsurance and tax receivables; do not use total as customer credit-sale receivables.",
          "payable_days_denominator": "Merchandise costs proxy, not independently observed credit purchases."
        },
        "leases_2025": {
          "locator": "Note5 printed pp50–51; PDF pp56–57; policy printed p43",
          "operating_rou_asset": 2725,
          "finance_lease_asset_net": 1488,
          "finance_asset_balance_sheet_location": "Other long-term assets",
          "operating_liability_current": 208,
          "operating_liability_noncurrent": 2460,
          "finance_liability_current": 78,
          "finance_liability_noncurrent": 1401,
          "operating_cost": 271,
          "finance_asset_amortization": 102,
          "finance_interest_expense": 63,
          "variable_cost": 182,
          "total_cost_reported": 618,
          "cash_operating_leases": 255,
          "cash_finance_interest": 58,
          "cash_finance_principal": 147,
          "cash_scope": "Cash paid for amounts included in measurement of lease liabilities; not total lease cash payments including variable payments.",
          "new_modified_operating_rou": 294,
          "new_modified_finance_rou": 131,
          "remaining_term_years_operating_finance": [
            20,
            25
          ],
          "payment_buckets": [
            "FY2026",
            "FY2027",
            "FY2028",
            "FY2029",
            "FY2030",
            "Thereafter"
          ],
          "operating_payments": [
            267,
            250,
            235,
            204,
            184,
            2451
          ],
          "operating_payments_total": 3591,
          "operating_interest_deduction": 923,
          "operating_liability": 2668,
          "finance_payments": [
            133,
            132,
            135,
            122,
            109,
            1780
          ],
          "finance_payments_total": 2411,
          "finance_interest_deduction": 932,
          "finance_liability": 1479,
          "signed_not_commenced_payments_excluded": 1094,
          "future_operating_sublease_income_not_netted": 92
        }
      },
      "salesforce": {
        "source_id": "BBC-C01",
        "unit": "USD M",
        "periods": [
          "2026-01-31",
          "2025-01-31"
        ],
        "income": {
          "locator": "Consolidated Statements of Operations p58 including notes1–2; MD&A Research and Development",
          "total_revenue": [
            41525,
            37895
          ],
          "rd_expense": [
            5993,
            5493
          ],
          "rd_sbc_included": [
            1162,
            1091
          ],
          "acquired_intangibles_amortization_cost_of_revenue": [
            692,
            750
          ],
          "acquired_intangibles_amortization_sales_marketing": [
            995,
            901
          ]
        },
        "working_capital": {
          "locator": "Balance sheet p57; Note2 Unearned Revenue p71; MD&A seasonal nature pp39–40",
          "accounts_receivable_net": [
            14339,
            11945
          ],
          "unearned_revenue": [
            24317,
            20743
          ],
          "unearned_opening_2026": 20743,
          "billings_and_other_2026": 45099,
          "revenue_over_time_2026": 39041,
          "revenue_point_in_time_2026": 2484,
          "unearned_acquired_informatica": 651,
          "identity": "Billings and other includes FX, contract assets and business combinations; neither cash receipts nor organic billings."
        },
        "leases_2026": {
          "locator": "Note6 Leases and Other Commitments pp75–77; Note1 Leases pp67–68",
          "operating_rou_asset": 2003,
          "finance_lease_asset_gross": 1427,
          "finance_accumulated_amortization_positive": 813,
          "finance_lease_asset_net": 614,
          "finance_asset_balance_sheet_location": "Property and equipment",
          "operating_liability_current": 548,
          "operating_liability_noncurrent": 2189,
          "finance_liability_current": 275,
          "finance_liability_noncurrent": 260,
          "operating_cost": 614,
          "finance_asset_amortization": 375,
          "finance_interest_expense": 25,
          "cash_operating_leases": 695,
          "cash_finance_interest": 25,
          "cash_finance_principal": 367,
          "remaining_term_years_operating_finance": [
            7,
            3
          ],
          "payment_buckets": [
            "FY2027",
            "FY2028",
            "FY2029",
            "FY2030",
            "FY2031",
            "Thereafter"
          ],
          "operating_payments": [
            615,
            571,
            493,
            338,
            268,
            790
          ],
          "operating_payments_total": 3075,
          "operating_interest_deduction": 338,
          "operating_liability": 2737,
          "finance_payments": [
            289,
            120,
            76,
            58,
            26,
            0
          ],
          "finance_payments_total": 569,
          "finance_interest_deduction": 34,
          "finance_liability": 535
        },
        "informatica_2025_ppa": {
          "locator": "Note7 Informatica, Inc., pp77–79",
          "acquisition_period": "November 2025",
          "status": "Preliminary purchase-price allocation at FY2026 filing; measurement period not complete",
          "consideration_components": {
            "cash": 9538,
            "preexisting_relationship": 62,
            "assumed_equity_purchase_component": 36
          },
          "consideration_total": 9636,
          "assets": {
            "cash": 1405,
            "receivables": 233,
            "ppe": 128,
            "operating_rou": 27,
            "other_assets": 149,
            "goodwill": 5257,
            "identifiable_intangibles": 3818
          },
          "liabilities_positive": {
            "payables_accruals_current": 221,
            "unearned_revenue": 651,
            "operating_lease_liabilities": 30,
            "other_noncurrent": 36,
            "deferred_tax_liability": 443
          },
          "intangibles": [
            {
              "name": "Cloud developed technology",
              "amount": 1350,
              "life_years": 7
            },
            {
              "name": "Other developed technology",
              "amount": 270,
              "life_years": 3
            },
            {
              "name": "Customer relationships",
              "amount": 1840,
              "life_years": 10
            },
            {
              "name": "Trade names",
              "amount": 79,
              "life_years": 4
            },
            {
              "name": "Backlog",
              "amount": 279,
              "life_years": 2
            }
          ],
          "assumed_equity_fair_value": 330,
          "assumed_equity_future_service_component": 294
        },
        "intangible_roll": {
          "locator": "Note8 pp80–81; addition/retirement columns are net movements, not gross acquisition or amortization flows",
          "gross_opening": 10183,
          "additions_and_retirements_net": 3956,
          "gross_closing": 14139,
          "accum_amortization_opening_positive": 5755,
          "expense_and_retirements_net_positive": 1569,
          "accum_amortization_closing_positive": 7324,
          "net_opening": 4428,
          "net_closing": 6815,
          "goodwill_opening": 51283,
          "regrello": 704,
          "informatica": 5257,
          "other_acquisitions_adjustments": 697,
          "goodwill_closing": 57941
        },
        "segment_identity": "One operating segment; Note1 p63 CODM assesses consolidated net income. Product offering revenue categories are not separately reported operating segments."
      },
      "caterpillar": {
        "source_id": "BBC-C04",
        "unit": "USD M",
        "periods": [
          "2025-12-31",
          "2024-12-31"
        ],
        "comparative_identity": "2024 figures as retrospectively adjusted in FY2025 filing after July 1, 2025 segment changes",
        "ppe": {
          "locator": "Note9 p89; Note1D pp64–65",
          "land": [
            616,
            612
          ],
          "buildings": [
            7761,
            7281
          ],
          "machinery_equipment": [
            13737,
            12523
          ],
          "capitalized_software": [
            1696,
            1609
          ],
          "equipment_leased_to_others": [
            6004,
            5701
          ],
          "construction_in_progress": [
            2092,
            1751
          ],
          "gross": [
            31906,
            29477
          ],
          "accumulated_depreciation_positive": [
            16766,
            16116
          ],
          "net": [
            15140,
            13361
          ],
          "consolidated_depreciation": [
            2093,
            1983
          ],
          "cat_financial_leased_to_others_depreciation": [
            699,
            722
          ]
        },
        "operating_profit_bridge": {
          "locator": "MD&A p33 Consolidated Operating Profit Comparison, original chart cat-20251231_g4.jpg; Definitions pp36–38",
          "opening_2024": 13072,
          "drivers": {
            "sales_volume_including_product_mix": 1218,
            "price_realization": -817,
            "manufacturing_costs": -2148,
            "sga_rd": -336,
            "currency": -32,
            "financial_products": 49,
            "restructuring": -85,
            "other": 230
          },
          "closing_2025": 11151,
          "bridge_identity": "Company historical attribution, not structural marginal profit coefficients."
        },
        "revenue_bridge": {
          "locator": "MD&A p31 Sales and Revenues Comparison",
          "opening_2024": 64809,
          "drivers": {
            "sales_volume": 3389,
            "price_realization": -817,
            "currency": 45,
            "financial_products": 163
          },
          "closing_2025": 67589
        },
        "segments_2025": {
          "locator": "Note23 pp115–121; external-column Financial Products footnote is integral",
          "rows": [
            {
              "name": "Construction Industries",
              "external_column": 24800,
              "intersegment_column": 260,
              "total_sales": 25060,
              "profit": 4675
            },
            {
              "name": "Resource Industries",
              "external_column": 12185,
              "intersegment_column": 289,
              "total_sales": 12474,
              "profit": 1988
            },
            {
              "name": "Power & Energy",
              "external_column": 27143,
              "intersegment_column": 5058,
              "total_sales": 32201,
              "profit": 6418
            },
            {
              "name": "Financial Products",
              "external_column": 4220,
              "intersegment_column": 0,
              "total_sales": 4220,
              "profit": 966
            }
          ],
          "financial_products_external_column_includes_group_revenue": 712,
          "reportable_sales_total": 73955,
          "all_other_sales": 327,
          "corporate_eliminations_sales": -6693,
          "consolidated_sales": 67589,
          "all_other_external_column": 46,
          "all_other_intersegment_column": 281,
          "corporate_external_column": -805,
          "corporate_intersegment_column": -5888,
          "reportable_profit_total": 14047,
          "profit_reconciling_items": {
            "all_other": -8,
            "cost_centers": -11,
            "corporate_costs": -1006,
            "timing": -175,
            "restructuring": -445,
            "inventory_method": 49,
            "postretirement_benefit": 185,
            "sbc": -230,
            "financing_costs": -180,
            "currency": -81,
            "goodwill_impairment": 0,
            "other_income_expense_method": -470,
            "other_method": -134
          },
          "consolidated_pretax_profit": 11541,
          "interest_expense_excluding_financial_products": 502,
          "other_income": 892,
          "consolidated_operating_profit": 11151
        }
      },
      "teaching_cvp": {
        "source_id": "BFDE-CVP",
        "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
        "unit": "USD",
        "assumptions": "Constant prices and unit variable costs, fixed product mix, unchanged fixed costs within the relevant range; reported income here is model operating income.",
        "companies": [
          {
            "name": "A",
            "sales": 250000,
            "variable_costs": 102000,
            "fixed_costs": 63000,
            "income": 85000
          },
          {
            "name": "B",
            "sales": 315000,
            "variable_costs": 105000,
            "fixed_costs": 125000,
            "income": 85000
          }
        ],
        "sales_changes": [
          0.1,
          -0.2
        ]
      }
    },
    "supplemental": {
      "costco_ppe_original_labels": [
        [
          "land",
          "Land",
          "土地",
          "N/A"
        ],
        [
          "buildings_improvements",
          "Buildings and improvements",
          "建筑及改良",
          "5–50 years"
        ],
        [
          "equipment_fixtures",
          "Equipment and fixtures",
          "设备及装置",
          "3–20 years"
        ],
        [
          "construction_in_progress",
          "Construction in progress",
          "在建工程",
          "N/A"
        ],
        [
          "gross",
          null,
          "原值合计（原表该行无行名）",
          null
        ],
        [
          "accumulated_depreciation_amortization_positive",
          "Accumulated depreciation and amortization",
          "累计折旧摊销（减项）",
          null
        ],
        [
          "net",
          "Property and equipment, net",
          "物业及设备净额",
          null
        ]
      ],
      "cat_ppe_original_labels": [
        [
          "land",
          "Land",
          "土地",
          "—"
        ],
        [
          "buildings",
          "Buildings and land improvements",
          "建筑及土地改良",
          "20–45 years"
        ],
        [
          "machinery_equipment",
          "Machinery, equipment and other",
          "机器、设备及其他",
          "2–10 years"
        ],
        [
          "capitalized_software",
          "Software",
          "软件",
          "3–7 years"
        ],
        [
          "equipment_leased_to_others",
          "Equipment leased to others",
          "出租给他人的设备",
          "1–7 years"
        ],
        [
          "construction_in_progress",
          "Construction-in-process",
          "在建工程",
          "—"
        ],
        [
          "gross",
          "Total property, plant and equipment, at cost",
          "物业厂房设备成本合计",
          null
        ],
        [
          "accumulated_depreciation_positive",
          "Less: Accumulated depreciation",
          "减：累计折旧",
          null
        ],
        [
          "net",
          "Property, plant and equipment–net",
          "物业厂房设备净额",
          null
        ]
      ],
      "costco_receivables_exact_scope": {
        "source_id": "BF-S-COST-FY2025-PDF",
        "locator": "IR PDF printed pp41–42; SEC pp43–44, Receivables, Net",
        "original_categories": [
          "vendor",
          "credit card incentive",
          "reinsurance",
          "third-party pharmacy",
          "other receivables"
        ],
        "explanation_zh": "其他应收主要为对政府的应收，多与税款有关. 信用卡奖励应收不是顾客刷卡货款；结算期不超过四天的顾客刷卡货款另依现金政策列示."
      },
      "costco_lease_2024": {
        "operating_rou_asset": 2617,
        "finance_lease_asset_net": 1433,
        "operating_liability_current": 179,
        "operating_liability_noncurrent": 2375,
        "finance_liability_current": 147,
        "finance_liability_noncurrent": 1351,
        "total_assets": 4050,
        "total_liabilities": 4052,
        "operating_cost": 284,
        "finance_asset_amortization": 97,
        "finance_interest_expense": 58,
        "variable_cost": 163,
        "total_cost_reported": 602,
        "cash_operating_leases": 274,
        "cash_finance_interest": 58,
        "cash_finance_principal": 136,
        "remaining_term": [
          19,
          23
        ],
        "discount_rate_percent": [
          2.67,
          4.59
        ]
      },
      "salesforce_lease_2025": {
        "operating_rou_asset": 2157,
        "operating_liability_current": 579,
        "operating_liability_noncurrent": 2380,
        "finance_lease_asset_gross": 1520,
        "finance_accumulated_amortization_positive": 708,
        "finance_lease_asset_net": 812,
        "finance_liability_current": 337,
        "finance_liability_noncurrent": 341,
        "operating_cost": 684,
        "finance_asset_amortization": 303,
        "finance_interest_expense": 28,
        "cash_operating_leases": 628,
        "cash_finance_interest": 27,
        "cash_finance_principal": 380,
        "remaining_term": [
          7,
          3
        ]
      },
      "intangible_rows": [
        {
          "label_original": "Acquired developed technology",
          "label_zh": "购入已开发技术",
          "gross_open": 2958,
          "gross_change_net": 1838,
          "gross_close": 4796,
          "accum_open": 1753,
          "accum_change_net": 654,
          "accum_close": 2407,
          "net_open": 1205,
          "net_close": 2389,
          "remaining_years": 4.4
        },
        {
          "label_original": "Customer relationships",
          "label_zh": "客户关系",
          "gross_open": 6894,
          "gross_change_net": 1765,
          "gross_close": 8659,
          "accum_open": 3820,
          "accum_change_net": 820,
          "accum_close": 4640,
          "net_open": 3074,
          "net_close": 4019,
          "remaining_years": 6.3
        },
        {
          "label_original": "Other (1)",
          "label_zh": "其他（商号、未开票订单、区域权利）",
          "gross_open": 331,
          "gross_change_net": 353,
          "gross_close": 684,
          "accum_open": 182,
          "accum_change_net": 95,
          "accum_close": 277,
          "net_open": 149,
          "net_close": 407,
          "remaining_years": 2.1
        }
      ],
      "future_amortization": {
        "buckets": [
          "FY2027",
          "FY2028",
          "FY2029",
          "FY2030",
          "FY2031",
          "Thereafter"
        ],
        "amounts": [
          1842,
          1412,
          1104,
          710,
          448,
          1299
        ]
      },
      "cat_profit_rows_original": [
        [
          "all_other",
          "Profit from All Other Segment",
          "其他分部利润"
        ],
        [
          "cost_centers",
          "Cost centers",
          "成本中心"
        ],
        [
          "corporate_costs",
          "Corporate costs",
          "公司共同成本"
        ],
        [
          "timing",
          "Timing",
          "确认时点差异"
        ],
        [
          "restructuring",
          "Restructuring costs",
          "重组成本"
        ],
        [
          "inventory_method",
          "Inventory/cost of sales",
          "存货／销售成本计量"
        ],
        [
          "postretirement_benefit",
          "Postretirement benefit income (expense)",
          "退休后福利收益（费用）"
        ],
        [
          "sbc",
          "Stock-based compensation expense",
          "股权薪酬费用"
        ],
        [
          "financing_costs",
          "Financing costs",
          "融资成本"
        ],
        [
          "currency",
          "Currency",
          "汇率"
        ],
        [
          "goodwill_impairment",
          "Goodwill impairment charge",
          "商誉减值"
        ],
        [
          "other_income_expense_method",
          "Other income/expense methodology differences",
          "其他损益计量方法差异"
        ],
        [
          "other_method",
          "Other methodology differences",
          "其他方法差异"
        ]
      ],
      "cat_segment_costs_2025": {
        "cost_of_goods_sold": [
          18393,
          9018,
          22474,
          0
        ],
        "sga_rd": [
          1902,
          1513,
          3330,
          829
        ],
        "other_segment_items": [
          90,
          -45,
          -21,
          2425
        ]
      },
      "cat_segments_2024": {
        "rows": [
          [
            "Construction Industries",
            25344,
            111,
            25455,
            6165
          ],
          [
            "Resource Industries",
            12100,
            371,
            12471,
            2538
          ],
          [
            "Power & Energy",
            24088,
            4766,
            28854,
            5736
          ],
          [
            "Financial Products Segment",
            4053,
            0,
            4053,
            932
          ]
        ],
        "total_profit": 15371,
        "reconciling": [
          43,
          -1,
          -889,
          133,
          -359,
          33,
          67,
          -223,
          -126,
          145,
          0,
          -740,
          -81
        ],
        "pretax": 13373,
        "revenue": 64809,
        "reportable_revenue": 70833,
        "all_other_revenue": 344,
        "corporate_revenue": -6368
      },
      "cat_segment_name_overrides": {
        "Financial Products": "Financial Products Segment"
      },
      "origins": {
        "costco_lease_2024": "BF-S-COST-FY2025-PDF Note5 printed pp50–51 / PDF pp56–57, reopened 2026-09-21",
        "salesforce_lease_2025": "BBC-C01 Note6 pp75–77, same-session full reading",
        "intangible_rows": "BBC-C01 Note8 pp80–81, same-session full reading",
        "cat_segment_costs_2025": "BBC-C04 Note23 p120, same-session full reading",
        "cat_segments_2024": "BBC-C04 Note23 pp118,120–121; comparatives as recast in FY2025 filing"
      }
    },
    "teaching": {
      "asset": {
        "identity": "Author synthetic example, not company transactions",
        "unit": "teaching currency units",
        "cost": 100,
        "residual": 0,
        "life_months": 60,
        "initial_cash": 150,
        "payment": "2026-01",
        "acquisition": "2026-02",
        "ready": "2026-04",
        "start": "2026-01",
        "months": 12,
        "convention": "Events at month start; same-day acquisition then ready then payment; depreciation at month end starting ready month, full months, no tax/interest/disposal, depreciation expensed in this example."
      },
      "intangible": {
        "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
        "unit": "teaching currency units",
        "rd": [
          100,
          120,
          80
        ],
        "sga_excluding_rd": [
          60,
          60,
          60
        ],
        "alpha": 1,
        "gamma": 0.3,
        "delta_r": 0.2,
        "delta_s": 0.2,
        "initial_r": 0,
        "initial_s": 0,
        "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
      },
      "cvp_extension": {
        "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
        "sales_change": 0.1,
        "step_enabled": false,
        "threshold": 0.15,
        "step_fixed_cost": 10000
      },
      "retail_cycle": {
        "identity": "Author synthetic inventory/cash-timing example, not Costco days",
        "unit": "teaching currency units and relative days",
        "cost": 100,
        "price": 150,
        "acquire_day": 0,
        "sale_day": 20,
        "collect_day": 23,
        "pay_day": 30,
        "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
      },
      "subscription_cycle": {
        "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
        "unit": "teaching currency units and relative 30-day months",
        "amount": 120,
        "invoice_day": 0,
        "collection_day": 30,
        "term_months": 12,
        "monthly_cost": 6,
        "month_days": 30,
        "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
      }
    },
    "provenance": {
      "lead_input_sha256": "5300ec0d05b830f8d6aa2ce72fd367beb3dc6bbfe044ff6cd28146e8beb7c68b",
      "lead_input_lines": 209,
      "transcription": "All supplied keys and amounts reproduced semantically; original byte hash identifies connector source, not this JSON serialization. Labels clarified in supplemental, raw observations unchanged.",
      "reference_plan_sha256": "d6a351ea333643dc50af7704a7984a43fb623f24a058db74726b12c418a1494b"
    },
    "canonical_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/inputs.json"
  },
  "default_outputs": {
    "intangible_facts": {
      "period": "FY2026 / 2026-01-31",
      "unit": "USD M",
      "preliminary": true,
      "consideration": 9636,
      "assets": 11017,
      "liabilities": 1381,
      "identifiable_net_assets": 4379,
      "goodwill": 5257,
      "identifiable_intangibles": 3818,
      "goodwill_share": 0.5455583229555833,
      "award_total": 330,
      "award_purchase": 36,
      "award_future_service": 294,
      "amortization_expense": 1687,
      "accumulated_amortization_net_change": 1569,
      "net_open": 4428,
      "gross_net_change": 3956,
      "net_close": 6815,
      "rd": 5993,
      "included_rd_sbc": 1162,
      "goodwill_roll": [
        51283,
        704,
        5257,
        697,
        57941
      ]
    },
    "intangible": {
      "parameters": {
        "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
        "unit": "teaching currency units",
        "rd": [
          100,
          120,
          80
        ],
        "sga_excluding_rd": [
          60,
          60,
          60
        ],
        "alpha": 1,
        "gamma": 0.3,
        "delta_r": 0.2,
        "delta_s": 0.2,
        "initial_r": 0,
        "initial_s": 0,
        "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
      },
      "rows": [
        {
          "period": "T1",
          "rd": 100,
          "sga_excluding_rd": 60,
          "opening_g": 0,
          "opening_s": 0,
          "depreciation_g": 0,
          "depreciation_s": 0,
          "investment_g": 100,
          "investment_s": 18,
          "g": 100,
          "s": 18,
          "total": 118
        },
        {
          "period": "T2",
          "rd": 120,
          "sga_excluding_rd": 60,
          "opening_g": 100,
          "opening_s": 18,
          "depreciation_g": 20,
          "depreciation_s": 3.6,
          "investment_g": 120,
          "investment_s": 18,
          "g": 200,
          "s": 32.4,
          "total": 232.4
        },
        {
          "period": "T3",
          "rd": 80,
          "sga_excluding_rd": 60,
          "opening_g": 200,
          "opening_s": 32.4,
          "depreciation_g": 40,
          "depreciation_s": 6.48,
          "investment_g": 80,
          "investment_s": 18,
          "g": 240,
          "s": 43.92,
          "total": 283.92
        }
      ],
      "ending": {
        "period": "T3",
        "rd": 80,
        "sga_excluding_rd": 60,
        "opening_g": 200,
        "opening_s": 32.4,
        "depreciation_g": 40,
        "depreciation_s": 6.48,
        "investment_g": 80,
        "investment_s": 18,
        "g": 240,
        "s": 43.92,
        "total": 283.92
      }
    },
    "intangible_gamma_half": {
      "parameters": {
        "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
        "unit": "teaching currency units",
        "rd": [
          100,
          120,
          80
        ],
        "sga_excluding_rd": [
          60,
          60,
          60
        ],
        "alpha": 1,
        "gamma": 0.5,
        "delta_r": 0.2,
        "delta_s": 0.2,
        "initial_r": 0,
        "initial_s": 0,
        "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
      },
      "rows": [
        {
          "period": "T1",
          "rd": 100,
          "sga_excluding_rd": 60,
          "opening_g": 0,
          "opening_s": 0,
          "depreciation_g": 0,
          "depreciation_s": 0,
          "investment_g": 100,
          "investment_s": 30,
          "g": 100,
          "s": 30,
          "total": 130
        },
        {
          "period": "T2",
          "rd": 120,
          "sga_excluding_rd": 60,
          "opening_g": 100,
          "opening_s": 30,
          "depreciation_g": 20,
          "depreciation_s": 6,
          "investment_g": 120,
          "investment_s": 30,
          "g": 200,
          "s": 54,
          "total": 254
        },
        {
          "period": "T3",
          "rd": 80,
          "sga_excluding_rd": 60,
          "opening_g": 200,
          "opening_s": 54,
          "depreciation_g": 40,
          "depreciation_s": 10.8,
          "investment_g": 80,
          "investment_s": 30,
          "g": 240,
          "s": 73.2,
          "total": 313.2
        }
      ],
      "ending": {
        "period": "T3",
        "rd": 80,
        "sga_excluding_rd": 60,
        "opening_g": 200,
        "opening_s": 54,
        "depreciation_g": 40,
        "depreciation_s": 10.8,
        "investment_g": 80,
        "investment_s": 30,
        "g": 240,
        "s": 73.2,
        "total": 313.2
      }
    }
  },
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 你正在教BF-14《无形资源、研发与商誉》，材料版本2026-09-22. 学习任务：恢复9,636=4,379+5,257，解释3,818、294/36及1,687/1,569的各自身份. Salesforce与JEP为核心必读；EPW仅在读者启用进阶测量分支后读取. 讲解前先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题、版本、位置、范围与当前用途；runtime_reading_log从空数组开始，不以文献目录、工具标题或先前已读记录代替本次读取. 读取失败先找同版本正式等价原文；仍缺则明确该单元缺口，不以摘要补讲. 诊断：恢复9,636=4,379+5,257，解释3,818、294/36及1,687/1,569的各自身份；先从完整PPA恢复非商誉净资产. 沿本包正文、实际输入、静态实验与题解推进，先让读者解释或计算再反馈；已会步骤跳过. 默认迁移为更换资源类别或调整明确的资本化/折损参数并解释身份；研究分支启用后再读EPW. 通过尺度：不重复加研发SBC，不把累计摊销净变动当期间费用；模型初始存量、流量、形成比例、折损与时序全部可重算. 保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据；资料不足处保留缺口.",
  "selected_branch": "core",
  "required_readings_by_branch": {
    "core": [
      {
        "source_id": "BFDE-JEP",
        "title": "The Economics of Intangible Capital",
        "authors": [
          "Nicolas Crouzet",
          "Janice C. Eberly",
          "Andrea L. Eisfeldt",
          "Dimitris Papanikolaou"
        ],
        "version": "JEP 36(3), Summer2022, pp29–52; DOI10.1257/jep.36.3.29",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf"
        },
        "required_unit": {
          "locator": "pp29–34 / PDF1–6",
          "scope": "Introduction及Characteristics单元至下一节标题",
          "purpose": "区分经营无形资源与账面确认"
        },
        "supports": "无形资源的承载、非竞争性使用、有限排他性与过时；本篇未复现后续模型或把Figure1研究量当公司数据.",
        "branch": "common"
      },
      {
        "source_id": "BBC-C01",
        "title": "Salesforce, Inc. — FY2026 Form 10-K",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "FY ended 2026-01-31; comparison 2025-01-31; filed 2026-03-02",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
        },
        "required_unit": {
          "locator": "Statement p58 and notes1–2; Note1 pp67–68; Note7 pp77–79; Note8 pp80–81",
          "scope": "研发含SBC、初步Informatica PPA、奖励分配、无形资产/商誉滚动完整采用表注",
          "purpose": "重建PPA和实际摊销"
        },
        "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
        "branch": "common"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BFDE-JEP",
      "title": "The Economics of Intangible Capital",
      "authors": [
        "Nicolas Crouzet",
        "Janice C. Eberly",
        "Andrea L. Eisfeldt",
        "Dimitris Papanikolaou"
      ],
      "version": "JEP 36(3), Summer2022, pp29–52; DOI10.1257/jep.36.3.29",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf"
      },
      "required_unit": {
        "locator": "pp29–34 / PDF1–6",
        "scope": "Introduction及Characteristics单元至下一节标题",
        "purpose": "区分经营无形资源与账面确认"
      },
      "supports": "无形资源的承载、非竞争性使用、有限排他性与过时；本篇未复现后续模型或把Figure1研究量当公司数据.",
      "branch": "common"
    },
    {
      "source_id": "BBC-C01",
      "title": "Salesforce, Inc. — FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31; comparison 2025-01-31; filed 2026-03-02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Statement p58 and notes1–2; Note1 pp67–68; Note7 pp77–79; Note8 pp80–81",
        "scope": "研发含SBC、初步Informatica PPA、奖励分配、无形资产/商誉滚动完整采用表注",
        "purpose": "重建PPA和实际摊销"
      },
      "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
      "branch": "common"
    }
  ],
  "branch_selection_protocol": "网页已选分支和展开的选读优先；切换后以相应 required_readings_by_branch 的完整数组替换必读，cross/all才读取所有主分支. 运行日志从空开始.",
  "experiment_ids": [
    "EXP-BF14-INTANGIBLE-LAYERS"
  ]
}
```

## Supplied entry
内部研发、收购买入的无形资产和商誉进入报表的路径不同. Salesforce的研发费用、Informatica收购及集团无形资产滚动表展示这些差别；进阶分支再用研发与组织资本模型估计报表之外的经济资源.

<a id="bf14-economic-resource"></a>
## 1. 无形资源的使用与收益归属

一套软件可以在多个地方重复部署，一种管理流程也可能被不同团队同时使用；但它们需要代码、设备、文档或人员来承载. 可复制不等于收益能被企业完全占有：人员流动、模仿、更新不足和制度安排都会改变收益归属与资源寿命. JEP 2022 对无形资本的讨论，用“非竞争性使用”和“有限排他性”把这两面分开. [^bf14-jep]

经营分析识别资源、承载方式、用途和收益归属；会计确认再依据适用规则记录资产或费用，研究模型则通过投入、形成比例和耗损估计资本存量.

<a id="bf14-rd"></a>
## 2. 内部研发与费用

Salesforce FY2026 截至 2026-01-31，研发费用为 5,993 M 美元，其中股权薪酬 1,162 已经包含在内；FY2025 两项分别为 5,493 与 1,091. 研发活动涉及员工与分摊成本，这些金额能够支持“本期投入了什么”的分析. 若想进一步判断形成了多少可持续能力，还需要项目产出、更新需求、留存人员、客户采用和收益证据. [^bf14-crm-fs]

分析上将研发资本化，需要确定投入形成长期资源的比例、耗损速度，以及各期重新计入成本的金额.

<a id="CASE-BFDE-CRM-BF14-20260921"></a>
<a id="bf14-ppa"></a>
## 3. Informatica：从购买对价到可辨认净资产与商誉

Salesforce于2025年11月收购Informatica. 以下采用FY2026披露的初步购买价分摊，单位：M 美元. 对价由三项组成.[^bf14-ppa]

| 对价原行 | 金额 |
|---|---:|
| Cash／现金 | 9,538 |
| Fair value of pre-existing relationship／先前关系公允价值 | 62 |
| Fair value of equity plan assumed／承接股权计划中计入对价部分 | 36 |
| Total／总对价 | 9,636 |

取得资产和承接负债如下.

| 初步购买价分摊原行 | 金额 |
|---|---|
| Cash and cash equivalents／现金及等价物 | 1,405 |
| Accounts receivable／应收 | 233 |
| Property and equipment, net／物业设备净额 | 128 |
| Operating lease right-of-use assets／使用权资产 | 27 |
| Other assets／其他资产 | 149 |
| Goodwill／商誉 | 5,257 |
| Intangible assets／可辨认无形资产 | 3,818 |
| Accounts payable, accrued expenses and other current liabilities／应付、应计及其他流动负债 | (221) |
| Unearned revenue／未实现收入 | (651) |
| Operating lease liabilities／经营租赁负债 | (30) |
| Other noncurrent liabilities／其他非流动负债 | (36) |
| Deferred tax liability／递延所得税负债 | (443) |
| Net assets acquired／含商誉的取得净资产 | 9,636 |

原表含商誉的净资产总额为 9,636. 将商誉单独取出，其他已确认资产减负债为 4,379，于是 $4,379+5,257=9,636$. 这里 4,379 是<strong>除商誉外的可辨认净资产</strong>，包括其他资产和负债；3,818 才是其中可辨认无形资产的总额.

| 可辨认无形资产原行 | 初步金额 | 估计寿命 |
|---|---:|---:|
| Developed technology—Cloud／云技术 | 1,350 | 7年 |
| Developed technology—Other／其他技术 | 270 | 3年 |
| Customer relationships／客户关系 | 1,840 | 10年 |
| Trade names／商号 | 79 | 4年 |
| Backlog／订单相关无形资产 | 279 | 2年 |
| Total intangible assets subject to amortization | 3,818 | — |

这些类别对应不同的持续投入与服务期：技术需要更新，客户关系需要维持，订单相关无形资产对应现有服务期. 寿命是会计分摊估计. 商誉占对价约54.6%，该比例描述本次初步购买价分摊的结构.

承接股权奖励的公允价值330中，36初步计入购买对价，294对应未来服务，按剩余服务期费用化.[^bf14-ppa]

<a id="bf14-intangible-roll"></a>
## 4. 无形资产滚动与摊销费用

集团Note 8把购入无形资产分为技术、客户关系及其他. 以下为FY2026全部分项重排，金额 M 美元. 原值变动列是 `Additions and retirements, net`；累计摊销变动列是 `Expense and retirements, net`，两列均为净额口径. [^bf14-roll]

| 原分类 | 期初原值 | 增加及退除净额 | 期末原值 | 期初累计摊销正额 | 费用及退除净额正额 | 期末累计摊销正额 | 期初净额 | 期末净额 |
|---|---|---|---|---|---|---|---|---|
| Acquired developed technology／购入已开发技术 | 2,958 | 1,838 | 4,796 | 1,753 | 654 | 2,407 | 1,205 | 2,389 |
| Customer relationships／客户关系 | 6,894 | 1,765 | 8,659 | 3,820 | 820 | 4,640 | 3,074 | 4,019 |
| Other (1)／其他（商号、未开票订单、区域权利） | 331 | 353 | 684 | 182 | 95 | 277 | 149 | 407 |
| Total／合计 | 10,183 | 3,956 | 14,139 | 5,755 | 1,569 | 7,324 | 4,428 | 6,815 |

先做净额核对：原值 $10,183+3,956=14,139$；累计摊销正额 $5,755+1,569=7,324$；期末净额 $14,139-7,324=6,815$. 等价地，期初净额 4,428 加原值净变动 3,956，再减累计摊销净变动 1,569，得到 6,815.

本年购入无形资产摊销费用为收入成本内692加销售营销费用内995，共1,687；Note 8概述为约1.7 B 美元. 累计摊销净变动1,569还扣除了资产退除等影响. [^bf14-crm-fs][^bf14-roll]

未来摊销在FY2027至FY2031及之后分别为1,842、1,412、1,104、710、448、1,299，合计报告日净额6,815. 商誉滚动为 $51,283+704+5,257+697=57,941$：704来自Regrello，5,257来自Informatica，697为其他收购与调整，含汇率及前期计量调整. 商誉不按有限寿命无形资产的方式系统摊销.

<a id="bf14-experiment"></a>
## 5. 研发、收购与资本存量

<div data-experiment-slot="EXP-BF14-INTANGIBLE-LAYERS"></div>

<a id="bf14-research"></a>
<details data-agent-option="epw">
<summary>进阶：无形资本的形成与耗损</summary>

Ewens、Peters、Wang的研究用1996–2017年退出事件价格连接历史研发和SG&A流量，并处理商誉中的协同、溢付与样本选择. `4.1的设定无法同时独立识别组织资本形成比例与折损率，因此固定后者估计前者；`4.2约束价格与存量的关系. 参数识别决定历史费用能被转换成怎样的资本估计.[^bf14-epw]

教学模型：知识资本记为 $G$，组织资本记为 $S$，期初存量均为0；每期先折损期初存量，再把本期期末形成的投入加入：

$$G_t=(1-\delta_G)G_{t-1}+\alpha R_t$$
$$S_t=(1-\delta_S)S_{t-1}+\gamma M_t$$

$R_t$ 是研发流量，$M_t$ 是明确排除研发、避免重叠的 SG&A 流量. 默认研发为 100、120、80，SG&A 每期为 60；研发形成比例 $\alpha=1$，SG&A 形成比例 $\gamma=0.3$，两种折损率都为 20%. 当前投入在期末加入，因此不在本期先被折损一次.

| 教学期 | 研发流量 | SG&A流量（不含研发） | 期末G | 期末S | 合计 |
|---|---:|---:|---:|---:|---:|
| T1 | 100 | 60 | 100 | 18 | 118 |
| T2 | 120 | 60 | 200 | 32.4 | 232.4 |
| T3 | 80 | 60 | 240 | 43.92 | 283.92 |

T2知识资本为 $100\times0.8+120=200$. 将形成比例 $\gamma$ 从0.3改为0.5，T3组织资本增至73.2，总资本增至313.2，差额29.28来自该参数变化.

将模型用于真实研究时，需用经营能力、历史投入及退出价格证据校准形成比例、折损率和价格约束.

</details>

<a id="bf14-exercise"></a>
## 6. 无形资源分析练习

<strong>任务. </strong>写出 Informatica 对价、可辨认无形资产、除商誉外净资产和商誉四个金额，并说明各自如何核对. 再写出集团本期无形摊销费用与累计摊销净变动.

<strong>解析. </strong>对价 9,636；无形资产五项合计 3,818；除商誉外净资产 4,379；商誉 5,257，后两者合计对价. 不能用 $3,818+5,257$ 代替总对价，因为还少了其他净资产. 集团实际摊销为 $692+995=1,687$，累计摊销净变动为 1,569；它们分别属于期间费用与含退除影响的存量滚动.

<strong>迁移. </strong>某公司内部研发费用很高，但账面无形资产少. 为研究其经营能力，你下一步做什么？

<strong>解析. </strong>列出研发项目、承载资源、持续更新、控制与收益归属的证据，检验费用如何形成可持续经营能力. 建立资本存量估计时，再说明起始存量、形成比例、折损及验证依据.

[^bf14-jep]: Crouzet, Eberly, Eisfeldt, Papanikolaou (2022), *The Economics of Intangible Capital*, JEP 36(3), pp29–34，完整 “Characteristics of Intangibles as Assets”. [已发表版](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf).
[^bf14-crm-fs]: Salesforce FY2026 10-K，Consolidated Statements of Operations p58 及脚注1–2，MD&A Research and Development／Sales and Marketing；Note 1 无形资产及业务合并政策 pp67–68. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日 2026-09-21；金额 M 美元.
[^bf14-ppa]: 同一原件 Note 7，Informatica, Inc.，pp77–79；对价、初步购买价分摊、寿命和承接奖励分配.
[^bf14-roll]: 同一原件 Note 8，pp80–81；含全部原值、累计摊销、净额、未来摊销和商誉滚动及脚注.
[^bf14-epw]: Ewens, Peters, Wang, *Measuring Intangible Capital with Market Prices*, Management Science，Articles in Advance，2024-04-05，Introduction、§§2–4.2（pp1–7）. [作者版本](https://profsean.wang/papers/ewens-peters-wang-2025-ms.pdf). 1996–2017退出样本.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>

## Additional teaching material
<a id="EXP-BF14-INTANGIBLE-LAYERS"></a>
## BF-14｜无形资源、研发与商誉：静态实验

输入身份 `BFDE-SHARED-20260921-v1`. 公司金额单位为 USD M；教学资本模型为教学金额.

### 固定历史数

| 身份 | 金额 |
|---|---|
| 初步PPA对价 | 9,636 |
| 非商誉净资产 | 4,379 |
| 其中可辨认无形资产 | 3,818 |
| 商誉 | 5,257 |
| 承接奖励全部公允价值 | 330 |
| 奖励计入对价 | 36 |
| 奖励对应未来服务 | 294 |
| 实际本年摊销费用 | 1,687 |
| 累计摊销净滚动 | 1,569 |
| 研发费用 | 5,993 |
| 研发内已含SBC | 1,162 |

### 条件明确的存量模型

先折损期初存量，再加期末资本化流量. G、S初始均0；研发100/120/80，剔除研发的SG&A60/60/60；alpha=1，gamma=.3；deltaG=deltaS=.2. 输入为教学设定.

#### 默认

| 期 | 期初G | 期初S | 研发投入 | SG&A投入 | 知识折损 | 组织折损 | G | S | 合计 |
|---|---|---|---|---|---|---|---|---|---|
| T1 | 0 | 0 | 100 | 18 | 0 | 0 | 100 | 18 | 118 |
| T2 | 100 | 18 | 120 | 18 | 20 | 3.6 | 200 | 32.4 | 232.4 |
| T3 | 200 | 32.4 | 80 | 18 | 40 | 6.48 | 240 | 43.92 | 283.92 |

#### 仅改gamma=.5

| 期 | 期初G | 期初S | 研发投入 | SG&A投入 | 知识折损 | 组织折损 | G | S | 合计 |
|---|---|---|---|---|---|---|---|---|---|
| T1 | 0 | 0 | 100 | 30 | 0 | 0 | 100 | 30 | 130 |
| T2 | 100 | 30 | 120 | 30 | 20 | 6 | 200 | 54 | 254 |
| T3 | 200 | 54 | 80 | 30 | 40 | 10.8 | 240 | 73.2 | 313.2 |

两条流量长度须一致，比例和折损须在[0,1]，初始存量及流量非负且有限. 参数变化只影响教学模型.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF14-INTANGIBLE-LAYERS",
    "title": "无形资源、研发与商誉：同源实验",
    "anchor": "bf14-experiment",
    "description": "真实PPA/滚动只作有符号加总. 教学G_t=(1-delta_r)G_(t-1)+alpha*RD_t，S_t=(1-delta_s)S_(t-1)+gamma*SGA_t；SGA剔除RD，先折损期初再加期末流.",
    "inputs": {
      "input_id": "BFDE-SHARED-20260921-v1",
      "source": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/inputs.json",
      "identity": "历史观察与教学设定分别标识",
      "values": {
        "schema_version": "BFDE-1.0",
        "input_id": "BFDE-SHARED-20260921-v1",
        "revised": "2026-09-21",
        "historical": {
          "scope": [
            "BF-12",
            "BF-13",
            "BF-14",
            "BF-18",
            "BF-17",
            "BF-16"
          ],
          "retrieved_on": "2026-09-21",
          "identity": "Historical financial-statement observations; teaching cases are separately labelled. Values are not stock valuation inputs.",
          "costco": {
            "source_id": "BF-S-COST-FY2025-PDF",
            "unit": "USD M",
            "periods": [
              "2025-08-31",
              "2024-09-01"
            ],
            "fiscal_weeks": [
              52,
              52
            ],
            "ppe": {
              "locator": "FY2025 annual-report PDF printed pp42–43; PDF pp48–49",
              "land": [
                10323,
                9447
              ],
              "buildings_improvements": [
                25508,
                23727
              ],
              "equipment_fixtures": [
                13127,
                12387
              ],
              "construction_in_progress": [
                1882,
                1389
              ],
              "gross": [
                50840,
                46950
              ],
              "accumulated_depreciation_amortization_positive": [
                18931,
                17918
              ],
              "net": [
                31909,
                29032
              ]
            },
            "flows": {
              "locator": "Printed pp35,39; PDF pp41,45",
              "net_sales": [
                269912,
                249625
              ],
              "merchandise_costs": [
                239886,
                222358
              ],
              "cash_ppe_additions_outflow_positive": [
                5498,
                4710
              ],
              "consolidated_depreciation_amortization": [
                2426,
                2237
              ],
              "capex_included_in_liabilities_supplemental_noncash": [
                193,
                203
              ],
              "cashflow_inventory_adjustment": [
                559,
                -2068
              ],
              "cashflow_accounts_payable_adjustment": [
                404,
                1938
              ],
              "cfo": [
                13335,
                11339
              ]
            },
            "working_capital": {
              "locator": "Printed p37 balance sheet; pp41–42 Receivables, Net; p39 cash flow",
              "inventory": [
                18116,
                18647
              ],
              "accounts_payable": [
                19783,
                19421
              ],
              "receivables_net": [
                3203,
                2721
              ],
              "deferred_membership_fees": [
                2854,
                2501
              ],
              "receivables_identity": "Includes vendor, credit-card, reinsurance and tax receivables; do not use total as customer credit-sale receivables.",
              "payable_days_denominator": "Merchandise costs proxy, not independently observed credit purchases."
            },
            "leases_2025": {
              "locator": "Note5 printed pp50–51; PDF pp56–57; policy printed p43",
              "operating_rou_asset": 2725,
              "finance_lease_asset_net": 1488,
              "finance_asset_balance_sheet_location": "Other long-term assets",
              "operating_liability_current": 208,
              "operating_liability_noncurrent": 2460,
              "finance_liability_current": 78,
              "finance_liability_noncurrent": 1401,
              "operating_cost": 271,
              "finance_asset_amortization": 102,
              "finance_interest_expense": 63,
              "variable_cost": 182,
              "total_cost_reported": 618,
              "cash_operating_leases": 255,
              "cash_finance_interest": 58,
              "cash_finance_principal": 147,
              "cash_scope": "Cash paid for amounts included in measurement of lease liabilities; not total lease cash payments including variable payments.",
              "new_modified_operating_rou": 294,
              "new_modified_finance_rou": 131,
              "remaining_term_years_operating_finance": [
                20,
                25
              ],
              "payment_buckets": [
                "FY2026",
                "FY2027",
                "FY2028",
                "FY2029",
                "FY2030",
                "Thereafter"
              ],
              "operating_payments": [
                267,
                250,
                235,
                204,
                184,
                2451
              ],
              "operating_payments_total": 3591,
              "operating_interest_deduction": 923,
              "operating_liability": 2668,
              "finance_payments": [
                133,
                132,
                135,
                122,
                109,
                1780
              ],
              "finance_payments_total": 2411,
              "finance_interest_deduction": 932,
              "finance_liability": 1479,
              "signed_not_commenced_payments_excluded": 1094,
              "future_operating_sublease_income_not_netted": 92
            }
          },
          "salesforce": {
            "source_id": "BBC-C01",
            "unit": "USD M",
            "periods": [
              "2026-01-31",
              "2025-01-31"
            ],
            "income": {
              "locator": "Consolidated Statements of Operations p58 including notes1–2; MD&A Research and Development",
              "total_revenue": [
                41525,
                37895
              ],
              "rd_expense": [
                5993,
                5493
              ],
              "rd_sbc_included": [
                1162,
                1091
              ],
              "acquired_intangibles_amortization_cost_of_revenue": [
                692,
                750
              ],
              "acquired_intangibles_amortization_sales_marketing": [
                995,
                901
              ]
            },
            "working_capital": {
              "locator": "Balance sheet p57; Note2 Unearned Revenue p71; MD&A seasonal nature pp39–40",
              "accounts_receivable_net": [
                14339,
                11945
              ],
              "unearned_revenue": [
                24317,
                20743
              ],
              "unearned_opening_2026": 20743,
              "billings_and_other_2026": 45099,
              "revenue_over_time_2026": 39041,
              "revenue_point_in_time_2026": 2484,
              "unearned_acquired_informatica": 651,
              "identity": "Billings and other includes FX, contract assets and business combinations; neither cash receipts nor organic billings."
            },
            "leases_2026": {
              "locator": "Note6 Leases and Other Commitments pp75–77; Note1 Leases pp67–68",
              "operating_rou_asset": 2003,
              "finance_lease_asset_gross": 1427,
              "finance_accumulated_amortization_positive": 813,
              "finance_lease_asset_net": 614,
              "finance_asset_balance_sheet_location": "Property and equipment",
              "operating_liability_current": 548,
              "operating_liability_noncurrent": 2189,
              "finance_liability_current": 275,
              "finance_liability_noncurrent": 260,
              "operating_cost": 614,
              "finance_asset_amortization": 375,
              "finance_interest_expense": 25,
              "cash_operating_leases": 695,
              "cash_finance_interest": 25,
              "cash_finance_principal": 367,
              "remaining_term_years_operating_finance": [
                7,
                3
              ],
              "payment_buckets": [
                "FY2027",
                "FY2028",
                "FY2029",
                "FY2030",
                "FY2031",
                "Thereafter"
              ],
              "operating_payments": [
                615,
                571,
                493,
                338,
                268,
                790
              ],
              "operating_payments_total": 3075,
              "operating_interest_deduction": 338,
              "operating_liability": 2737,
              "finance_payments": [
                289,
                120,
                76,
                58,
                26,
                0
              ],
              "finance_payments_total": 569,
              "finance_interest_deduction": 34,
              "finance_liability": 535
            },
            "informatica_2025_ppa": {
              "locator": "Note7 Informatica, Inc., pp77–79",
              "acquisition_period": "November 2025",
              "status": "Preliminary purchase-price allocation at FY2026 filing; measurement period not complete",
              "consideration_components": {
                "cash": 9538,
                "preexisting_relationship": 62,
                "assumed_equity_purchase_component": 36
              },
              "consideration_total": 9636,
              "assets": {
                "cash": 1405,
                "receivables": 233,
                "ppe": 128,
                "operating_rou": 27,
                "other_assets": 149,
                "goodwill": 5257,
                "identifiable_intangibles": 3818
              },
              "liabilities_positive": {
                "payables_accruals_current": 221,
                "unearned_revenue": 651,
                "operating_lease_liabilities": 30,
                "other_noncurrent": 36,
                "deferred_tax_liability": 443
              },
              "intangibles": [
                {
                  "name": "Cloud developed technology",
                  "amount": 1350,
                  "life_years": 7
                },
                {
                  "name": "Other developed technology",
                  "amount": 270,
                  "life_years": 3
                },
                {
                  "name": "Customer relationships",
                  "amount": 1840,
                  "life_years": 10
                },
                {
                  "name": "Trade names",
                  "amount": 79,
                  "life_years": 4
                },
                {
                  "name": "Backlog",
                  "amount": 279,
                  "life_years": 2
                }
              ],
              "assumed_equity_fair_value": 330,
              "assumed_equity_future_service_component": 294
            },
            "intangible_roll": {
              "locator": "Note8 pp80–81; addition/retirement columns are net movements, not gross acquisition or amortization flows",
              "gross_opening": 10183,
              "additions_and_retirements_net": 3956,
              "gross_closing": 14139,
              "accum_amortization_opening_positive": 5755,
              "expense_and_retirements_net_positive": 1569,
              "accum_amortization_closing_positive": 7324,
              "net_opening": 4428,
              "net_closing": 6815,
              "goodwill_opening": 51283,
              "regrello": 704,
              "informatica": 5257,
              "other_acquisitions_adjustments": 697,
              "goodwill_closing": 57941
            },
            "segment_identity": "One operating segment; Note1 p63 CODM assesses consolidated net income. Product offering revenue categories are not separately reported operating segments."
          },
          "caterpillar": {
            "source_id": "BBC-C04",
            "unit": "USD M",
            "periods": [
              "2025-12-31",
              "2024-12-31"
            ],
            "comparative_identity": "2024 figures as retrospectively adjusted in FY2025 filing after July 1, 2025 segment changes",
            "ppe": {
              "locator": "Note9 p89; Note1D pp64–65",
              "land": [
                616,
                612
              ],
              "buildings": [
                7761,
                7281
              ],
              "machinery_equipment": [
                13737,
                12523
              ],
              "capitalized_software": [
                1696,
                1609
              ],
              "equipment_leased_to_others": [
                6004,
                5701
              ],
              "construction_in_progress": [
                2092,
                1751
              ],
              "gross": [
                31906,
                29477
              ],
              "accumulated_depreciation_positive": [
                16766,
                16116
              ],
              "net": [
                15140,
                13361
              ],
              "consolidated_depreciation": [
                2093,
                1983
              ],
              "cat_financial_leased_to_others_depreciation": [
                699,
                722
              ]
            },
            "operating_profit_bridge": {
              "locator": "MD&A p33 Consolidated Operating Profit Comparison, original chart cat-20251231_g4.jpg; Definitions pp36–38",
              "opening_2024": 13072,
              "drivers": {
                "sales_volume_including_product_mix": 1218,
                "price_realization": -817,
                "manufacturing_costs": -2148,
                "sga_rd": -336,
                "currency": -32,
                "financial_products": 49,
                "restructuring": -85,
                "other": 230
              },
              "closing_2025": 11151,
              "bridge_identity": "Company historical attribution, not structural marginal profit coefficients."
            },
            "revenue_bridge": {
              "locator": "MD&A p31 Sales and Revenues Comparison",
              "opening_2024": 64809,
              "drivers": {
                "sales_volume": 3389,
                "price_realization": -817,
                "currency": 45,
                "financial_products": 163
              },
              "closing_2025": 67589
            },
            "segments_2025": {
              "locator": "Note23 pp115–121; external-column Financial Products footnote is integral",
              "rows": [
                {
                  "name": "Construction Industries",
                  "external_column": 24800,
                  "intersegment_column": 260,
                  "total_sales": 25060,
                  "profit": 4675
                },
                {
                  "name": "Resource Industries",
                  "external_column": 12185,
                  "intersegment_column": 289,
                  "total_sales": 12474,
                  "profit": 1988
                },
                {
                  "name": "Power & Energy",
                  "external_column": 27143,
                  "intersegment_column": 5058,
                  "total_sales": 32201,
                  "profit": 6418
                },
                {
                  "name": "Financial Products",
                  "external_column": 4220,
                  "intersegment_column": 0,
                  "total_sales": 4220,
                  "profit": 966
                }
              ],
              "financial_products_external_column_includes_group_revenue": 712,
              "reportable_sales_total": 73955,
              "all_other_sales": 327,
              "corporate_eliminations_sales": -6693,
              "consolidated_sales": 67589,
              "all_other_external_column": 46,
              "all_other_intersegment_column": 281,
              "corporate_external_column": -805,
              "corporate_intersegment_column": -5888,
              "reportable_profit_total": 14047,
              "profit_reconciling_items": {
                "all_other": -8,
                "cost_centers": -11,
                "corporate_costs": -1006,
                "timing": -175,
                "restructuring": -445,
                "inventory_method": 49,
                "postretirement_benefit": 185,
                "sbc": -230,
                "financing_costs": -180,
                "currency": -81,
                "goodwill_impairment": 0,
                "other_income_expense_method": -470,
                "other_method": -134
              },
              "consolidated_pretax_profit": 11541,
              "interest_expense_excluding_financial_products": 502,
              "other_income": 892,
              "consolidated_operating_profit": 11151
            }
          },
          "teaching_cvp": {
            "source_id": "BFDE-CVP",
            "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
            "unit": "USD",
            "assumptions": "Constant prices and unit variable costs, fixed product mix, unchanged fixed costs within the relevant range; reported income here is model operating income.",
            "companies": [
              {
                "name": "A",
                "sales": 250000,
                "variable_costs": 102000,
                "fixed_costs": 63000,
                "income": 85000
              },
              {
                "name": "B",
                "sales": 315000,
                "variable_costs": 105000,
                "fixed_costs": 125000,
                "income": 85000
              }
            ],
            "sales_changes": [
              0.1,
              -0.2
            ]
          }
        },
        "supplemental": {
          "costco_ppe_original_labels": [
            [
              "land",
              "Land",
              "土地",
              "N/A"
            ],
            [
              "buildings_improvements",
              "Buildings and improvements",
              "建筑及改良",
              "5–50 years"
            ],
            [
              "equipment_fixtures",
              "Equipment and fixtures",
              "设备及装置",
              "3–20 years"
            ],
            [
              "construction_in_progress",
              "Construction in progress",
              "在建工程",
              "N/A"
            ],
            [
              "gross",
              null,
              "原值合计（原表该行无行名）",
              null
            ],
            [
              "accumulated_depreciation_amortization_positive",
              "Accumulated depreciation and amortization",
              "累计折旧摊销（减项）",
              null
            ],
            [
              "net",
              "Property and equipment, net",
              "物业及设备净额",
              null
            ]
          ],
          "cat_ppe_original_labels": [
            [
              "land",
              "Land",
              "土地",
              "—"
            ],
            [
              "buildings",
              "Buildings and land improvements",
              "建筑及土地改良",
              "20–45 years"
            ],
            [
              "machinery_equipment",
              "Machinery, equipment and other",
              "机器、设备及其他",
              "2–10 years"
            ],
            [
              "capitalized_software",
              "Software",
              "软件",
              "3–7 years"
            ],
            [
              "equipment_leased_to_others",
              "Equipment leased to others",
              "出租给他人的设备",
              "1–7 years"
            ],
            [
              "construction_in_progress",
              "Construction-in-process",
              "在建工程",
              "—"
            ],
            [
              "gross",
              "Total property, plant and equipment, at cost",
              "物业厂房设备成本合计",
              null
            ],
            [
              "accumulated_depreciation_positive",
              "Less: Accumulated depreciation",
              "减：累计折旧",
              null
            ],
            [
              "net",
              "Property, plant and equipment–net",
              "物业厂房设备净额",
              null
            ]
          ],
          "costco_receivables_exact_scope": {
            "source_id": "BF-S-COST-FY2025-PDF",
            "locator": "IR PDF printed pp41–42; SEC pp43–44, Receivables, Net",
            "original_categories": [
              "vendor",
              "credit card incentive",
              "reinsurance",
              "third-party pharmacy",
              "other receivables"
            ],
            "explanation_zh": "其他应收主要为对政府的应收，多与税款有关. 信用卡奖励应收不是顾客刷卡货款；结算期不超过四天的顾客刷卡货款另依现金政策列示."
          },
          "costco_lease_2024": {
            "operating_rou_asset": 2617,
            "finance_lease_asset_net": 1433,
            "operating_liability_current": 179,
            "operating_liability_noncurrent": 2375,
            "finance_liability_current": 147,
            "finance_liability_noncurrent": 1351,
            "total_assets": 4050,
            "total_liabilities": 4052,
            "operating_cost": 284,
            "finance_asset_amortization": 97,
            "finance_interest_expense": 58,
            "variable_cost": 163,
            "total_cost_reported": 602,
            "cash_operating_leases": 274,
            "cash_finance_interest": 58,
            "cash_finance_principal": 136,
            "remaining_term": [
              19,
              23
            ],
            "discount_rate_percent": [
              2.67,
              4.59
            ]
          },
          "salesforce_lease_2025": {
            "operating_rou_asset": 2157,
            "operating_liability_current": 579,
            "operating_liability_noncurrent": 2380,
            "finance_lease_asset_gross": 1520,
            "finance_accumulated_amortization_positive": 708,
            "finance_lease_asset_net": 812,
            "finance_liability_current": 337,
            "finance_liability_noncurrent": 341,
            "operating_cost": 684,
            "finance_asset_amortization": 303,
            "finance_interest_expense": 28,
            "cash_operating_leases": 628,
            "cash_finance_interest": 27,
            "cash_finance_principal": 380,
            "remaining_term": [
              7,
              3
            ]
          },
          "intangible_rows": [
            {
              "label_original": "Acquired developed technology",
              "label_zh": "购入已开发技术",
              "gross_open": 2958,
              "gross_change_net": 1838,
              "gross_close": 4796,
              "accum_open": 1753,
              "accum_change_net": 654,
              "accum_close": 2407,
              "net_open": 1205,
              "net_close": 2389,
              "remaining_years": 4.4
            },
            {
              "label_original": "Customer relationships",
              "label_zh": "客户关系",
              "gross_open": 6894,
              "gross_change_net": 1765,
              "gross_close": 8659,
              "accum_open": 3820,
              "accum_change_net": 820,
              "accum_close": 4640,
              "net_open": 3074,
              "net_close": 4019,
              "remaining_years": 6.3
            },
            {
              "label_original": "Other (1)",
              "label_zh": "其他（商号、未开票订单、区域权利）",
              "gross_open": 331,
              "gross_change_net": 353,
              "gross_close": 684,
              "accum_open": 182,
              "accum_change_net": 95,
              "accum_close": 277,
              "net_open": 149,
              "net_close": 407,
              "remaining_years": 2.1
            }
          ],
          "future_amortization": {
            "buckets": [
              "FY2027",
              "FY2028",
              "FY2029",
              "FY2030",
              "FY2031",
              "Thereafter"
            ],
            "amounts": [
              1842,
              1412,
              1104,
              710,
              448,
              1299
            ]
          },
          "cat_profit_rows_original": [
            [
              "all_other",
              "Profit from All Other Segment",
              "其他分部利润"
            ],
            [
              "cost_centers",
              "Cost centers",
              "成本中心"
            ],
            [
              "corporate_costs",
              "Corporate costs",
              "公司共同成本"
            ],
            [
              "timing",
              "Timing",
              "确认时点差异"
            ],
            [
              "restructuring",
              "Restructuring costs",
              "重组成本"
            ],
            [
              "inventory_method",
              "Inventory/cost of sales",
              "存货／销售成本计量"
            ],
            [
              "postretirement_benefit",
              "Postretirement benefit income (expense)",
              "退休后福利收益（费用）"
            ],
            [
              "sbc",
              "Stock-based compensation expense",
              "股权薪酬费用"
            ],
            [
              "financing_costs",
              "Financing costs",
              "融资成本"
            ],
            [
              "currency",
              "Currency",
              "汇率"
            ],
            [
              "goodwill_impairment",
              "Goodwill impairment charge",
              "商誉减值"
            ],
            [
              "other_income_expense_method",
              "Other income/expense methodology differences",
              "其他损益计量方法差异"
            ],
            [
              "other_method",
              "Other methodology differences",
              "其他方法差异"
            ]
          ],
          "cat_segment_costs_2025": {
            "cost_of_goods_sold": [
              18393,
              9018,
              22474,
              0
            ],
            "sga_rd": [
              1902,
              1513,
              3330,
              829
            ],
            "other_segment_items": [
              90,
              -45,
              -21,
              2425
            ]
          },
          "cat_segments_2024": {
            "rows": [
              [
                "Construction Industries",
                25344,
                111,
                25455,
                6165
              ],
              [
                "Resource Industries",
                12100,
                371,
                12471,
                2538
              ],
              [
                "Power & Energy",
                24088,
                4766,
                28854,
                5736
              ],
              [
                "Financial Products Segment",
                4053,
                0,
                4053,
                932
              ]
            ],
            "total_profit": 15371,
            "reconciling": [
              43,
              -1,
              -889,
              133,
              -359,
              33,
              67,
              -223,
              -126,
              145,
              0,
              -740,
              -81
            ],
            "pretax": 13373,
            "revenue": 64809,
            "reportable_revenue": 70833,
            "all_other_revenue": 344,
            "corporate_revenue": -6368
          },
          "cat_segment_name_overrides": {
            "Financial Products": "Financial Products Segment"
          },
          "origins": {
            "costco_lease_2024": "BF-S-COST-FY2025-PDF Note5 printed pp50–51 / PDF pp56–57, reopened 2026-09-21",
            "salesforce_lease_2025": "BBC-C01 Note6 pp75–77, same-session full reading",
            "intangible_rows": "BBC-C01 Note8 pp80–81, same-session full reading",
            "cat_segment_costs_2025": "BBC-C04 Note23 p120, same-session full reading",
            "cat_segments_2024": "BBC-C04 Note23 pp118,120–121; comparatives as recast in FY2025 filing"
          }
        },
        "teaching": {
          "asset": {
            "identity": "Author synthetic example, not company transactions",
            "unit": "teaching currency units",
            "cost": 100,
            "residual": 0,
            "life_months": 60,
            "initial_cash": 150,
            "payment": "2026-01",
            "acquisition": "2026-02",
            "ready": "2026-04",
            "start": "2026-01",
            "months": 12,
            "convention": "Events at month start; same-day acquisition then ready then payment; depreciation at month end starting ready month, full months, no tax/interest/disposal, depreciation expensed in this example."
          },
          "intangible": {
            "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
            "unit": "teaching currency units",
            "rd": [
              100,
              120,
              80
            ],
            "sga_excluding_rd": [
              60,
              60,
              60
            ],
            "alpha": 1,
            "gamma": 0.3,
            "delta_r": 0.2,
            "delta_s": 0.2,
            "initial_r": 0,
            "initial_s": 0,
            "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
          },
          "cvp_extension": {
            "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
            "sales_change": 0.1,
            "step_enabled": false,
            "threshold": 0.15,
            "step_fixed_cost": 10000
          },
          "retail_cycle": {
            "identity": "Author synthetic inventory/cash-timing example, not Costco days",
            "unit": "teaching currency units and relative days",
            "cost": 100,
            "price": 150,
            "acquire_day": 0,
            "sale_day": 20,
            "collect_day": 23,
            "pay_day": 30,
            "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
          },
          "subscription_cycle": {
            "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
            "unit": "teaching currency units and relative 30-day months",
            "amount": 120,
            "invoice_day": 0,
            "collection_day": 30,
            "term_months": 12,
            "monthly_cost": 6,
            "month_days": 30,
            "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
          }
        },
        "provenance": {
          "lead_input_sha256": "5300ec0d05b830f8d6aa2ce72fd367beb3dc6bbfe044ff6cd28146e8beb7c68b",
          "lead_input_lines": 209,
          "transcription": "All supplied keys and amounts reproduced semantically; original byte hash identifies connector source, not this JSON serialization. Labels clarified in supplemental, raw observations unchanged.",
          "reference_plan_sha256": "d6a351ea333643dc50af7704a7984a43fb623f24a058db74726b12c418a1494b"
        }
      }
    },
    "outputs": {
      "default": {
        "intangible_facts": {
          "period": "FY2026 / 2026-01-31",
          "unit": "USD M",
          "preliminary": true,
          "consideration": 9636,
          "assets": 11017,
          "liabilities": 1381,
          "identifiable_net_assets": 4379,
          "goodwill": 5257,
          "identifiable_intangibles": 3818,
          "goodwill_share": 0.5455583229555833,
          "award_total": 330,
          "award_purchase": 36,
          "award_future_service": 294,
          "amortization_expense": 1687,
          "accumulated_amortization_net_change": 1569,
          "net_open": 4428,
          "gross_net_change": 3956,
          "net_close": 6815,
          "rd": 5993,
          "included_rd_sbc": 1162,
          "goodwill_roll": [
            51283,
            704,
            5257,
            697,
            57941
          ]
        },
        "intangible": {
          "parameters": {
            "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
            "unit": "teaching currency units",
            "rd": [
              100,
              120,
              80
            ],
            "sga_excluding_rd": [
              60,
              60,
              60
            ],
            "alpha": 1,
            "gamma": 0.3,
            "delta_r": 0.2,
            "delta_s": 0.2,
            "initial_r": 0,
            "initial_s": 0,
            "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
          },
          "rows": [
            {
              "period": "T1",
              "rd": 100,
              "sga_excluding_rd": 60,
              "opening_g": 0,
              "opening_s": 0,
              "depreciation_g": 0,
              "depreciation_s": 0,
              "investment_g": 100,
              "investment_s": 18,
              "g": 100,
              "s": 18,
              "total": 118
            },
            {
              "period": "T2",
              "rd": 120,
              "sga_excluding_rd": 60,
              "opening_g": 100,
              "opening_s": 18,
              "depreciation_g": 20,
              "depreciation_s": 3.6,
              "investment_g": 120,
              "investment_s": 18,
              "g": 200,
              "s": 32.4,
              "total": 232.4
            },
            {
              "period": "T3",
              "rd": 80,
              "sga_excluding_rd": 60,
              "opening_g": 200,
              "opening_s": 32.4,
              "depreciation_g": 40,
              "depreciation_s": 6.48,
              "investment_g": 80,
              "investment_s": 18,
              "g": 240,
              "s": 43.92,
              "total": 283.92
            }
          ],
          "ending": {
            "period": "T3",
            "rd": 80,
            "sga_excluding_rd": 60,
            "opening_g": 200,
            "opening_s": 32.4,
            "depreciation_g": 40,
            "depreciation_s": 6.48,
            "investment_g": 80,
            "investment_s": 18,
            "g": 240,
            "s": 43.92,
            "total": 283.92
          }
        },
        "intangible_gamma_half": {
          "parameters": {
            "identity": "Author synthetic accumulation model, not EPW estimates or Salesforce valuation",
            "unit": "teaching currency units",
            "rd": [
              100,
              120,
              80
            ],
            "sga_excluding_rd": [
              60,
              60,
              60
            ],
            "alpha": 1,
            "gamma": 0.5,
            "delta_r": 0.2,
            "delta_s": 0.2,
            "initial_r": 0,
            "initial_s": 0,
            "order": "Opening stock depreciates first; eligible current investment added at each period end. R&D and SG&A inputs do not overlap."
          },
          "rows": [
            {
              "period": "T1",
              "rd": 100,
              "sga_excluding_rd": 60,
              "opening_g": 0,
              "opening_s": 0,
              "depreciation_g": 0,
              "depreciation_s": 0,
              "investment_g": 100,
              "investment_s": 30,
              "g": 100,
              "s": 30,
              "total": 130
            },
            {
              "period": "T2",
              "rd": 120,
              "sga_excluding_rd": 60,
              "opening_g": 100,
              "opening_s": 30,
              "depreciation_g": 20,
              "depreciation_s": 6,
              "investment_g": 120,
              "investment_s": 30,
              "g": 200,
              "s": 54,
              "total": 254
            },
            {
              "period": "T3",
              "rd": 80,
              "sga_excluding_rd": 60,
              "opening_g": 200,
              "opening_s": 54,
              "depreciation_g": 40,
              "depreciation_s": 10.8,
              "investment_g": 80,
              "investment_s": 30,
              "g": 240,
              "s": 73.2,
              "total": 313.2
            }
          ],
          "ending": {
            "period": "T3",
            "rd": 80,
            "sga_excluding_rd": 60,
            "opening_g": 200,
            "opening_s": 54,
            "depreciation_g": 40,
            "depreciation_s": 10.8,
            "investment_g": 80,
            "investment_s": 30,
            "g": 240,
            "s": 73.2,
            "total": 313.2
          }
        }
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/default-results.json"
    },
    "algorithm": "真实PPA/滚动只作有符号加总. 教学G_t=(1-delta_r)G_(t-1)+alpha*RD_t，S_t=(1-delta_s)S_(t-1)+gamma*SGA_t；SGA剔除RD，先折损期初再加期末流.",
    "boundaries": "不重复加研发SBC，不把累计净变动当费用；模型初始存量/流量/比例/折损/时序全部可重算.",
    "local_url": "/notebook/labs/bf-de/interactions.html#EXP-BF14-INTANGIBLE-LAYERS",
    "static_equivalent": {
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static.html#EXP-BF14-INTANGIBLE-LAYERS",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static-equivalents.md"
    }
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): Salesforce FY2026的订阅收入政策、合同余额、现金流、股东权益、EPS、收入关键审计事项及所得税附注. 年报分别披露债务账面金额与本金、并购对价、回购及股数变化和汇兑项目.
- [Measuring Intangible Capital with Market Prices](https://profsean.wang/papers/ewens-peters-wang-2025-ms.pdf): 以企业退出价格连接历史研发、SG&A与资本存量，分析资本化比例及折损的识别条件，并讨论选择、协同和溢付对估计的影响.
- [The Economics of Intangible Capital](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/EconIntan_published.pdf): 无形资本的信息存储、使用中的非竞争性、有限排他性与过时，以及这些性质怎样影响企业经营范围和投入.

## Content relations
```json
[
  {
    "from": "zh-bf14",
    "relation": "part_of",
    "to": "business-capital",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf14",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "MD&A Seasonal Nature pp39–40; Research and Development / Sales and Marketing",
      "Statements p57–58 and notes1–2",
      "Note1 consolidation/Segments p63; PPE/Leases/intangibles/business combinations pp67–68",
      "Note2 Unearned Revenue p71 and footnotes",
      "Note5 p75; Note6 pp75–77",
      "Note7 pp77–80 (main Informatica pp77–79)",
      "Note8 pp80–81"
    ],
    "scope": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示."
  },
  {
    "from": "zh-bf14",
    "relation": "supported_by",
    "to": "BFDE-JEP",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "Introduction and Characteristics of Intangibles as Assets, printed pp29–34, PDF pp1–6"
    ],
    "scope": "无形资源的承载、非竞争性使用、有限排他性与过时；本篇未复现后续模型或把Figure1研究量当公司数据."
  },
  {
    "from": "zh-bf14",
    "relation": "supported_by",
    "to": "BFDE-EPW",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "Introduction; §§2,3,3.1,4.1,4.2, printed pp1–7"
    ],
    "scope": "退出价格连接历史研发/SG&A与资本存量；资本化比例与折损识别限制、选择/协同/溢付及价格约束. 只用设置与局限，不采用摘要效果量或公司参数."
  },
  {
    "from": "zh-bf14",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-CRM-BF14-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf14",
    "relation": "uses_method",
    "to": "zh-bf12",
    "reason": "局部调用资源/计量/边界关系，可在本文补齐；不是整篇硬先修"
  },
  {
    "from": "bf14-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF14-INTANGIBLE-LAYERS",
    "reason": "真实PPA/滚动只作有符号加总. 教学G_t=(1-delta_r)G_(t-1)+alpha*RD_t，S_t=(1-delta_s)S_(t-1)+gamma*SGA_t；SGA剔除RD，先折损期初再加期末流.",
    "at_section": "bf14-experiment",
    "conditions": "不重复加研发SBC，不把累计净变动当费用；模型初始存量/流量/比例/折损/时序全部可重算."
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 7/14
区分研发、可辨认无形资产、商誉和经济资本模型.
业务可以使用共同平台；接着看报告分部如何汇回集团.
Next: [分部、合并范围与共同资源](https://ou-liu-red-sugar.github.io/zh/notebook/segments-consolidation-and-shared-resources/)
