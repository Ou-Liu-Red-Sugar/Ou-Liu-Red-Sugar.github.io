# 单位经济、成本结构与经营杠杆

用CAT历史桥解释变化，再用独立教材模型推导经营杠杆的精确有限变化；产能台阶显式改变条件。

Entry: zh-bf17 | Node: BF-17 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教 BF-17《单位经济、成本结构与经营杠杆》，材料版本2026-09-21。学习任务：核八项历史OI桥与A/B直接重算，证明线性条件下百分比恒等式。
本篇没有行业分支；Caterpillar历史桥与OpenStax A/B教学模型均为核心必读，二者身份必须分开。 optional只有读者启用后才变为必读。先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途。文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始。读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲。
诊断任务：{"core": "核八项历史OI桥与A/B直接重算，证明线性条件下百分比恒等式。"}。补充任务：A销量下降20%，先用贡献利润算55,400，再从基点DOL得到同一结果。
随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过。默认迁移是在同一虚构A/B模型改变销量并核恒等式，再回到Caterpillar判断缺失结构输入；没有额外行业分支。通过尺度：有限变化固定参数时两结果完全一致；跨台阶另算新增成本，基点利润0不返回可用比率。
保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据。资料不足处不要补造差额或估值。最后明确：读者已经能独立重建什么，换一份材料时还需先核哪些条件？

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "default_branch": "core",
  "branch_options": [
    "core"
  ],
  "branch_tasks": {
    "core": "核八项历史OI桥与A/B直接重算，证明线性条件下百分比恒等式。"
  },
  "selection_rules": {
    "common": "始终必读",
    "selected": "只读所选主分支",
    "all": "读所有主分支",
    "optional": "读者启用后再读；cat/epw/cross不同入口"
  },
  "required_readings": [
    {
      "source_id": "BBC-C04",
      "title": "Caterpillar Inc. — FY2025 Form 10-K",
      "authors": [
        "Caterpillar Inc."
      ],
      "version": "FY ended 2025-12-31; comparatives recast in this filing after July 1, 2025 organization changes",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm"
      },
      "required_unit": {
        "locator": "MD&A pp31–35 and Definitions pp36–38",
        "scope": "完整历史收入/利润说明、p33经营利润图全部八项、四个具名Definitions",
        "purpose": "历史归因与模型输入区别",
        "figure_uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg"
      },
      "supports": "制造与出租资产用途、公司历史驱动定义、报告分部到收入/税前利润的完整桥。不得把volume包含的组合效果当结构性贡献率。",
      "branch": "common"
    },
    {
      "source_id": "BFDE-CVP",
      "title": "Principles of Accounting Vol2 §3.5 — Margin of Safety and Operating Leverage",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper",
        "OpenStax"
      ],
      "version": "2019",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage"
      },
      "required_unit": {
        "locator": "§3.5 Operating Leverage and Company A/B",
        "scope": "完整相关设置、表、变化与相关范围段",
        "purpose": "正向CVP重算与有限变化恒等式"
      },
      "supports": "Company A/B虚构输入与经营杠杆；按原始表复算，不采用网页不一致的1.71、31.9%/46.9%。有限变化精确式由本篇条件推导。",
      "branch": "common"
    }
  ],
  "optional_readings": [],
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
        "unit": "USD million",
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
        "unit": "USD million",
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
        "unit": "USD million",
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
        "explanation_zh": "其他应收主要为对政府的应收，多与税款有关。信用卡奖励应收不是顾客刷卡货款；结算期不超过四天的顾客刷卡货款另依现金政策列示。"
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
    "drivers": {
      "identity": "Company historical attribution, not structural coefficients",
      "unit": "USD million",
      "revenue": {
        "opening": 64809,
        "rows": [
          {
            "label": "Sales Volume（含新产品）",
            "value": 3389,
            "before": 64809,
            "after": 68198
          },
          {
            "label": "Price Realization",
            "value": -817,
            "before": 68198,
            "after": 67381
          },
          {
            "label": "Currency",
            "value": 45,
            "before": 67381,
            "after": 67426
          },
          {
            "label": "Financial Products",
            "value": 163,
            "before": 67426,
            "after": 67589
          }
        ],
        "computed": 67589,
        "reported": 67589,
        "residual": 0
      },
      "profit": {
        "opening": 13072,
        "rows": [
          {
            "label": "Sales Volume（含产品组合）",
            "value": 1218,
            "before": 13072,
            "after": 14290
          },
          {
            "label": "Price Realization",
            "value": -817,
            "before": 14290,
            "after": 13473
          },
          {
            "label": "Manufacturing Costs",
            "value": -2148,
            "before": 13473,
            "after": 11325
          },
          {
            "label": "SG&A / R&D",
            "value": -336,
            "before": 11325,
            "after": 10989
          },
          {
            "label": "Currency",
            "value": -32,
            "before": 10989,
            "after": 10957
          },
          {
            "label": "Financial Products",
            "value": 49,
            "before": 10957,
            "after": 11006
          },
          {
            "label": "Restructuring",
            "value": -85,
            "before": 11006,
            "after": 10921
          },
          {
            "label": "Other",
            "value": 230,
            "before": 10921,
            "after": 11151
          }
        ],
        "computed": 11151,
        "reported": 11151,
        "residual": 0
      }
    },
    "cvp": [
      {
        "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
        "unit": "USD",
        "company": "A",
        "parameters": {
          "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
          "sales_change": 0.1,
          "step_enabled": false,
          "threshold": 0.15,
          "step_fixed_cost": 10000
        },
        "base_sales": 250000,
        "base_variable_costs": 102000,
        "fixed_costs": 63000,
        "contribution": 148000,
        "base_oi": 85000,
        "dol": 1.7411764705882353,
        "sales_change": 0.1,
        "new_sales": 275000,
        "new_variable_costs": 112200.00000000001,
        "added_fixed_cost": 0,
        "linear_oi": 99800,
        "new_oi": 99800,
        "relative_oi_change": 0.17411764705882352,
        "constant_parameter_identity": 0.17411764705882354,
        "exact_linear_identity_applies": true
      },
      {
        "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
        "unit": "USD",
        "company": "A",
        "parameters": {
          "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
          "sales_change": -0.2,
          "step_enabled": false,
          "threshold": 0.15,
          "step_fixed_cost": 10000
        },
        "base_sales": 250000,
        "base_variable_costs": 102000,
        "fixed_costs": 63000,
        "contribution": 148000,
        "base_oi": 85000,
        "dol": 1.7411764705882353,
        "sales_change": -0.2,
        "new_sales": 200000,
        "new_variable_costs": 81600,
        "added_fixed_cost": 0,
        "linear_oi": 55400,
        "new_oi": 55400,
        "relative_oi_change": -0.34823529411764703,
        "constant_parameter_identity": -0.3482352941176471,
        "exact_linear_identity_applies": true
      },
      {
        "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
        "unit": "USD",
        "company": "B",
        "parameters": {
          "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
          "sales_change": 0.1,
          "step_enabled": false,
          "threshold": 0.15,
          "step_fixed_cost": 10000
        },
        "base_sales": 315000,
        "base_variable_costs": 105000,
        "fixed_costs": 125000,
        "contribution": 210000,
        "base_oi": 85000,
        "dol": 2.4705882352941178,
        "sales_change": 0.1,
        "new_sales": 346500,
        "new_variable_costs": 115500.00000000001,
        "added_fixed_cost": 0,
        "linear_oi": 106000.00000000003,
        "new_oi": 106000.00000000003,
        "relative_oi_change": 0.2470588235294121,
        "constant_parameter_identity": 0.24705882352941178,
        "exact_linear_identity_applies": true
      },
      {
        "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
        "unit": "USD",
        "company": "B",
        "parameters": {
          "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
          "sales_change": -0.2,
          "step_enabled": false,
          "threshold": 0.15,
          "step_fixed_cost": 10000
        },
        "base_sales": 315000,
        "base_variable_costs": 105000,
        "fixed_costs": 125000,
        "contribution": 210000,
        "base_oi": 85000,
        "dol": 2.4705882352941178,
        "sales_change": -0.2,
        "new_sales": 252000,
        "new_variable_costs": 84000,
        "added_fixed_cost": 0,
        "linear_oi": 43000,
        "new_oi": 43000,
        "relative_oi_change": -0.49411764705882355,
        "constant_parameter_identity": -0.49411764705882355,
        "exact_linear_identity_applies": true
      }
    ],
    "cvp_step": {
      "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
      "unit": "USD",
      "company": "A",
      "parameters": {
        "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
        "sales_change": 0.2,
        "step_enabled": true,
        "threshold": 0.15,
        "step_fixed_cost": 10000
      },
      "base_sales": 250000,
      "base_variable_costs": 102000,
      "fixed_costs": 63000,
      "contribution": 148000,
      "base_oi": 85000,
      "dol": 1.7411764705882353,
      "sales_change": 0.2,
      "new_sales": 300000,
      "new_variable_costs": 122400,
      "added_fixed_cost": 10000,
      "linear_oi": 114600,
      "new_oi": 104600,
      "relative_oi_change": 0.23058823529411765,
      "constant_parameter_identity": 0.3482352941176471,
      "exact_linear_identity_applies": false
    }
  },
  "prompt": "你正在教 BF-17《单位经济、成本结构与经营杠杆》，材料版本2026-09-21。学习任务：核八项历史OI桥与A/B直接重算，证明线性条件下百分比恒等式。\n本篇没有行业分支；Caterpillar历史桥与OpenStax A/B教学模型均为核心必读，二者身份必须分开。 optional只有读者启用后才变为必读。先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途。文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始。读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲。\n诊断任务：{\"core\": \"核八项历史OI桥与A/B直接重算，证明线性条件下百分比恒等式。\"}。补充任务：A销量下降20%，先用贡献利润算55,400，再从基点DOL得到同一结果。\n随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过。默认迁移是在同一虚构A/B模型改变销量并核恒等式，再回到Caterpillar判断缺失结构输入；没有额外行业分支。通过尺度：有限变化固定参数时两结果完全一致；跨台阶另算新增成本，基点利润0不返回可用比率。\n保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据。资料不足处不要补造差额或估值。最后明确：读者已经能独立重建什么，换一份材料时还需先核哪些条件？",
  "selected_branch": "core",
  "required_readings_by_branch": {
    "core": [
      {
        "source_id": "BBC-C04",
        "title": "Caterpillar Inc. — FY2025 Form 10-K",
        "authors": [
          "Caterpillar Inc."
        ],
        "version": "FY ended 2025-12-31; comparatives recast in this filing after July 1, 2025 organization changes",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm"
        },
        "required_unit": {
          "locator": "MD&A pp31–35 and Definitions pp36–38",
          "scope": "完整历史收入/利润说明、p33经营利润图全部八项、四个具名Definitions",
          "purpose": "历史归因与模型输入区别",
          "figure_uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg"
        },
        "supports": "制造与出租资产用途、公司历史驱动定义、报告分部到收入/税前利润的完整桥。不得把volume包含的组合效果当结构性贡献率。",
        "branch": "common"
      },
      {
        "source_id": "BFDE-CVP",
        "title": "Principles of Accounting Vol2 §3.5 — Margin of Safety and Operating Leverage",
        "authors": [
          "Mitchell Franklin",
          "Patty Graybeal",
          "Dixon Cooper",
          "OpenStax"
        ],
        "version": "2019",
        "access": {
          "kind": "html_full_text",
          "uri": "https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage"
        },
        "required_unit": {
          "locator": "§3.5 Operating Leverage and Company A/B",
          "scope": "完整相关设置、表、变化与相关范围段",
          "purpose": "正向CVP重算与有限变化恒等式"
        },
        "supports": "Company A/B虚构输入与经营杠杆；按原始表复算，不采用网页不一致的1.71、31.9%/46.9%。有限变化精确式由本篇条件推导。",
        "branch": "common"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BBC-C04",
      "title": "Caterpillar Inc. — FY2025 Form 10-K",
      "authors": [
        "Caterpillar Inc."
      ],
      "version": "FY ended 2025-12-31; comparatives recast in this filing after July 1, 2025 organization changes",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm"
      },
      "required_unit": {
        "locator": "MD&A pp31–35 and Definitions pp36–38",
        "scope": "完整历史收入/利润说明、p33经营利润图全部八项、四个具名Definitions",
        "purpose": "历史归因与模型输入区别",
        "figure_uri": "https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg"
      },
      "supports": "制造与出租资产用途、公司历史驱动定义、报告分部到收入/税前利润的完整桥。不得把volume包含的组合效果当结构性贡献率。",
      "branch": "common"
    },
    {
      "source_id": "BFDE-CVP",
      "title": "Principles of Accounting Vol2 §3.5 — Margin of Safety and Operating Leverage",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper",
        "OpenStax"
      ],
      "version": "2019",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage"
      },
      "required_unit": {
        "locator": "§3.5 Operating Leverage and Company A/B",
        "scope": "完整相关设置、表、变化与相关范围段",
        "purpose": "正向CVP重算与有限变化恒等式"
      },
      "supports": "Company A/B虚构输入与经营杠杆；按原始表复算，不采用网页不一致的1.71、31.9%/46.9%。有限变化精确式由本篇条件推导。",
      "branch": "common"
    }
  ],
  "branch_selection_protocol": "网页已选分支和展开的选读优先；切换后以相应 required_readings_by_branch 的完整数组替换必读，cross/all才读取所有主分支。运行日志从空开始。",
  "experiment_ids": [
    "EXP-BF17-HISTORICAL-VS-STRUCTURAL"
  ]
}
```

## Supplied entry
收入和利润把许多经营变化压成几个总额。要解释变化，我们需要重新展开销量、价格、组合、投入成本和共同费用；要预测一个条件变化的后果，还需要更明确的模型。本篇把这两项工作分开：先走完 Caterpillar 的真实历史驱动桥，再用参数透明的线性模型理解经营杠杆。完成以后，你应能判断一项数字究竟是历史归因，还是可以用于变式计算的模型参数。

主线约 15–20 分钟。历史公司图和教学模型使用不同单位与身份，实验也将它们分在两个视图。我们不把某家教材虚构公司改名成 Caterpillar。

<a id="CASE-BFDE-CAT-BF17-20260921"></a>
<a id="bf17-historical-bridge"></a>
## 1. 从历史总额回到变化来源

Caterpillar FY2025 将 2024 年收入 64,809 百万美元接到 2025 年 67,589。按其披露类别，完整桥为：[^bf17-cat]

| Sales and Revenues Comparison／收入桥原类别 | 影响，百万美元 |
|---|---:|
| 2024 Sales and revenues／期初年度收入 | 64,809 |
| Sales Volume／销售量相关影响 | +3,389 |
| Price Realization／价格实现 | −817 |
| Currency／汇率 | +45 |
| Financial Products／金融产品 | +163 |
| 2025 Sales and revenues／期末年度收入 | 67,589 |

收入增长了 2,780，但经营利润反而由 13,072 降至 11,151。公司原始经营利润比较图给出八个因素，全部列出才能核回终点：

| Consolidated Operating Profit Comparison／经营利润桥原类别 | 影响，百万美元 |
|---|---:|
| 2024 Operating profit | 13,072 |
| Sales Volume | +1,218 |
| Price Realization | −817 |
| Manufacturing Costs | −2,148 |
| SG&A / R&D | −336 |
| Currency | −32 |
| Financial Products | +49 |
| Restructuring | −85 |
| Other | +230 |
| 2025 Operating profit | 11,151 |

正向关系已经很清楚：本次披露中销量相关影响为正，但制造成本、价格及其他费用的不利影响更大，最终利润净减少 1,921。这是公司对历史变化的分类与解释。下一步要读定义，才能知道这些名字究竟捕捉了什么，而不是把每一行直接当教科书里的独立变量。

<a id="bf17-driver-definitions"></a>
## 2. “Volume”不总是纯数量

Caterpillar 的 Definitions 说明：收入桥中的 Sales Volume 包含数量与新产品推出的影响；经营利润桥里的同名项目还包含产品组合。Price Realization 包含地域价格组合；Manufacturing Costs 包含按产量调整后的变动成本变化，以及期间制造成本的绝对变化。Financial Products 的汇率等影响又留在其自身类别中。[^bf17-def]

这意味着，$1,218/3,389\approx35.94\%$ 可以叫“这次两项披露效果之比”，却不是已经识别出的每台设备边际贡献率。你甚至还没有一个纯数量单位和对应单位变动成本。真实驱动桥依然有用：它指向要继续核验的成本、组合和定价证据；只是它所回答的是“公司怎样解释这一年”，不是“下一年每增加一台设备必然赚多少”。

现在我们主动换一种对象：建立一个条件足够清楚的小模型，让后一个问题可以被严格回答。

<a id="bf17-cvp"></a>
## 3. 线性模型里，经营杠杆为什么出现

假定只有一种产品，或固定产品组合；单位价格为 $p$，单位变动成本为 $v$，销量为 $q$，相关产量范围内固定成本为 $F$。那么销售额为 $S=pq$，贡献利润为 $C=(p-v)q$，经营利润为 $OI=C-F$。贡献利润先承担固定成本，余下部分才是模型经营利润。这里的“固定”是针对决策期间和产量范围而言，并非永远不能调整。

<strong>经营杠杆系数</strong>在基点利润非零时为 $DOL=C/OI$。把价格、单位变动成本、组合及固定成本保持不变，只让销量变化比例 $x$，新的贡献利润就是 $C(1+x)$，所以利润增量为 $Cx$。因此：

$$\frac{\Delta OI}{OI}=\frac{C}{OI}x=DOL\frac{\Delta S}{S}$$

在上述线性且参数不变的模型里，这对该次<strong>有限变化是精确恒等式</strong>，不是只能在极小变化下成立的近似。它也有局部弹性的含义；两种表述并不矛盾。直接重算与右式应给出相同结果。[^bf17-cvp]

OpenStax 的虚构 Company A／B 给出一个有区分力的基准，单位是普通美元，不是上面的百万美元：

| 模型项目 | Company A | Company B |
|---|---:|---:|
| Sales／销售额 | 250,000 | 315,000 |
| Variable costs／变动成本 | 102,000 | 105,000 |
| Contribution margin／贡献利润 | 148,000 | 210,000 |
| Fixed costs／固定成本 | 63,000 | 125,000 |
| Operating income／经营利润 | 85,000 | 85,000 |
| 由上述原始输入计算的DOL | 1.741176 | 2.470588 |

两者利润相同，但 B 有更大的贡献利润和固定成本。销售上升时，有更多新增贡献利润越过已覆盖的固定成本；下降时，同一固定成本又会使利润降得更快。

| 在固定参数内的销量／销售变化 | A新利润 | A利润变化 | B新利润 | B利润变化 |
|---|---:|---:|---:|---:|
| +10% | 99,800 | +17.4118% | 106,000 | +24.7059% |
| −20% | 55,400 | −34.8235% | 43,000 | −49.4118% |

例如 A 的 −20% 情景，直接算 $148,000\times0.8-63,000=55,400$；同样由 $1.741176\times(-20\%)$ 得利润下降约 34.8235%。两条路径相等。表格全部由原始输入复算，正文中的系数与百分比不采用教材网页中和这些输入不一致的数值。

<a id="bf17-boundaries"></a>
## 4. 模型边界要用另一个计算展示

接近盈亏平衡时，基点利润小，DOL 会很大；这不代表企业获得了免费的高回报能力。当 $OI=0$ 时该比率无定义，程序应显示“基点利润为零”，而不是给一个能继续乘的无穷大。

再给 Company A 加一个明确的教学条件：销量比基准高出 15% 以后，必须新增 10,000 固定成本。若销量增加 20%，旧线性式先给 $148,000\times1.2-63,000=114,600$；跨产能台阶后实际模型利润为 104,600。此时参数已改变，旧 DOL 预测的 34.8235% 与新模型利润增长约 23.0588% 不再相等，差异来自新增固定成本，而非 DOL 公式突然不准确。

真实企业还可能改变售价、折扣、产品组合和投入方式。与其把这些全部塞进一个“调整后杠杆”，不如先说明是哪项条件变化，再建立新的成本桥。这样模型的差异能被经营资料核验。

<a id="bf17-experiment"></a>
## 5. 固定历史桥，与可变教学模型并排看

<div data-experiment-slot="EXP-BF17-HISTORICAL-VS-STRUCTURAL"></div>

历史视图完整保留 Caterpillar 的两条桥，不用滑块把历史变成预测。模型视图允许选择 A／B、改变销量比例，并开启上面定义的产能台阶。图同时显示直接重算与恒定参数恒等式结果；在线性模式两条线重合，台阶模式才发生有解释的分离。每次图的变化都附有数值表，不依赖颜色猜结论。

<a id="bf17-exercise"></a>
## 6. 从推演回到资料

<strong>计算任务。</strong>Company B 在固定参数下销量下降 20%，请同时用贡献利润直接重算和 DOL 等式求结果。然后说明要把同样的模型用于 Caterpillar，还缺哪些输入。

<strong>解析。</strong>直接算 $210,000\times0.8-125,000=43,000$；利润下降 42,000，占原85,000的49.4118%。DOL为 $210,000/85,000=2.470588$，乘 −20% 得相同变化。迁移到 Caterpillar，仍需定义销量单位、纯价格、单位变动成本、产品组合、相关范围及固定成本，并处理报告桥里已混合的组合与新产品影响。

<strong>解释任务。</strong>Caterpillar 收入上升而利润下降，与 DOL 模型矛盾吗？

<strong>解析。</strong>不矛盾。固定参数模型没有允许售价、单位成本与固定成本同时变化，而公司历史桥恰恰披露了价格、制造成本等多项变化。正确的工作次序是先用真实定义解释历史，再判断是否具备建立某个条件模型的证据；不是拿一个模型系数覆盖全部经营过程。

[^bf17-cat]: Caterpillar FY2025 10-K，MD&A pp31–35，Sales and Revenues Comparison 与 Consolidated Operating Profit Comparison；[SEC 原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm)，[经营利润原图](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg)。两期为2024→2025，单位百万美元，取得日2026-09-21。
[^bf17-def]: 同一原件 Definitions pp36–38：Manufacturing Costs、Price Realization、Sales Volume、Financial Products。披露归因不等于独立因果识别或可外推结构参数。
[^bf17-cvp]: OpenStax, *Principles of Accounting, Volume 2: Managerial Accounting* (2019)，§3.5 的 Operating Leverage 与虚构 Company A/B 输入。[公开全节](https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage)。有限变化恒等式由本篇列明的线性假设推导；产能台阶为另设教学变式。

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>


## Additional teaching material
<a id="EXP-BF17-HISTORICAL-VS-STRUCTURAL"></a>
## BF-17｜单位经济、成本结构与经营杠杆：静态实验

输入身份 `BFDE-SHARED-20260921-v1`。公司金额为百万美元；教学设备、现金例和资本模型为教学金额；CVP 为美元。

### 固定的CAT历史归因

| 原行／关系 | 影响金额 | 累计值 |
|---|---|---|
| 期初 | 64,809 | 64,809 |
| Sales Volume（含新产品） | 3,389 | 68,198 |
| Price Realization | -817 | 67,381 |
| Currency | 45 | 67,426 |
| Financial Products | 163 | 67,589 |
| 原表终点 | 67,589 | 67,589 |

| 原行／关系 | 影响金额 | 累计值 |
|---|---|---|
| 期初 | 13,072 | 13,072 |
| Sales Volume（含产品组合） | 1,218 | 14,290 |
| Price Realization | -817 | 13,473 |
| Manufacturing Costs | -2,148 | 11,325 |
| SG&A / R&D | -336 | 10,989 |
| Currency | -32 | 10,957 |
| Financial Products | 49 | 11,006 |
| Restructuring | -85 | 10,921 |
| Other | 230 | 11,151 |
| 原表终点 | 11,151 | 11,151 |

Volume含新产品，利润volume还含组合；price realization含地域组合。1218/3389不是结构性边际贡献率。

### 独立线性CVP

| 公司 | 收入 | 变动成本 | 固定成本 | OI |
|---|---|---|---|---|
| A | 250,000 | 102,000 | 63,000 | 85,000 |
| B | 315,000 | 105,000 | 125,000 | 85,000 |

| 公司 | sales变化% | 初始DOL | 新OI | 实际OI变化% | DOL×sales变化% |
|---|---|---|---|---|---|
| A | 10 | 1.741176 | 99,800 | 17.411765 | 17.411765 |
| A | -20 | 1.741176 | 55,400 | -34.823529 | -34.823529 |
| B | 10 | 2.470588 | 106,000 | 24.705882 | 24.705882 |
| B | -20 | 2.470588 | 43,000 | -49.411765 | -49.411765 |

固定价格、单位变动成本、组合与固定成本，且基点利润非零时，有限变化等式精确成立。局部弹性解释与此不矛盾。

| 台阶变式：A增加20% | 金额 |
|---|---|
| 恒定参数利润 | 114,600 |
| 超过15%新增固定成本 | 10,000 |
| 台阶后利润 | 104,600 |

新增固定成本是作者教学设定。基点OI=0时DOL及相对变化返回null，不显示无穷百分比为可用结果。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF17-HISTORICAL-VS-STRUCTURAL",
    "title": "单位经济、成本结构与经营杠杆：同源实验",
    "anchor": "bf17-experiment",
    "description": "真实桥固定历史输入。教学CM=sales-variable_costs；OI=CM-fixed_costs；DOL=CM/OI。固定参数时newOI=(1+x)CM-F，有限百分比关系精确；台阶另加10,000，基点OI零拒绝百分比。",
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
            "unit": "USD million",
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
            "unit": "USD million",
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
            "unit": "USD million",
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
            "explanation_zh": "其他应收主要为对政府的应收，多与税款有关。信用卡奖励应收不是顾客刷卡货款；结算期不超过四天的顾客刷卡货款另依现金政策列示。"
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
        "drivers": {
          "identity": "Company historical attribution, not structural coefficients",
          "unit": "USD million",
          "revenue": {
            "opening": 64809,
            "rows": [
              {
                "label": "Sales Volume（含新产品）",
                "value": 3389,
                "before": 64809,
                "after": 68198
              },
              {
                "label": "Price Realization",
                "value": -817,
                "before": 68198,
                "after": 67381
              },
              {
                "label": "Currency",
                "value": 45,
                "before": 67381,
                "after": 67426
              },
              {
                "label": "Financial Products",
                "value": 163,
                "before": 67426,
                "after": 67589
              }
            ],
            "computed": 67589,
            "reported": 67589,
            "residual": 0
          },
          "profit": {
            "opening": 13072,
            "rows": [
              {
                "label": "Sales Volume（含产品组合）",
                "value": 1218,
                "before": 13072,
                "after": 14290
              },
              {
                "label": "Price Realization",
                "value": -817,
                "before": 14290,
                "after": 13473
              },
              {
                "label": "Manufacturing Costs",
                "value": -2148,
                "before": 13473,
                "after": 11325
              },
              {
                "label": "SG&A / R&D",
                "value": -336,
                "before": 11325,
                "after": 10989
              },
              {
                "label": "Currency",
                "value": -32,
                "before": 10989,
                "after": 10957
              },
              {
                "label": "Financial Products",
                "value": 49,
                "before": 10957,
                "after": 11006
              },
              {
                "label": "Restructuring",
                "value": -85,
                "before": 11006,
                "after": 10921
              },
              {
                "label": "Other",
                "value": 230,
                "before": 10921,
                "after": 11151
              }
            ],
            "computed": 11151,
            "reported": 11151,
            "residual": 0
          }
        },
        "cvp": [
          {
            "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
            "unit": "USD",
            "company": "A",
            "parameters": {
              "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
              "sales_change": 0.1,
              "step_enabled": false,
              "threshold": 0.15,
              "step_fixed_cost": 10000
            },
            "base_sales": 250000,
            "base_variable_costs": 102000,
            "fixed_costs": 63000,
            "contribution": 148000,
            "base_oi": 85000,
            "dol": 1.7411764705882353,
            "sales_change": 0.1,
            "new_sales": 275000,
            "new_variable_costs": 112200.00000000001,
            "added_fixed_cost": 0,
            "linear_oi": 99800,
            "new_oi": 99800,
            "relative_oi_change": 0.17411764705882352,
            "constant_parameter_identity": 0.17411764705882354,
            "exact_linear_identity_applies": true
          },
          {
            "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
            "unit": "USD",
            "company": "A",
            "parameters": {
              "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
              "sales_change": -0.2,
              "step_enabled": false,
              "threshold": 0.15,
              "step_fixed_cost": 10000
            },
            "base_sales": 250000,
            "base_variable_costs": 102000,
            "fixed_costs": 63000,
            "contribution": 148000,
            "base_oi": 85000,
            "dol": 1.7411764705882353,
            "sales_change": -0.2,
            "new_sales": 200000,
            "new_variable_costs": 81600,
            "added_fixed_cost": 0,
            "linear_oi": 55400,
            "new_oi": 55400,
            "relative_oi_change": -0.34823529411764703,
            "constant_parameter_identity": -0.3482352941176471,
            "exact_linear_identity_applies": true
          },
          {
            "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
            "unit": "USD",
            "company": "B",
            "parameters": {
              "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
              "sales_change": 0.1,
              "step_enabled": false,
              "threshold": 0.15,
              "step_fixed_cost": 10000
            },
            "base_sales": 315000,
            "base_variable_costs": 105000,
            "fixed_costs": 125000,
            "contribution": 210000,
            "base_oi": 85000,
            "dol": 2.4705882352941178,
            "sales_change": 0.1,
            "new_sales": 346500,
            "new_variable_costs": 115500.00000000001,
            "added_fixed_cost": 0,
            "linear_oi": 106000.00000000003,
            "new_oi": 106000.00000000003,
            "relative_oi_change": 0.2470588235294121,
            "constant_parameter_identity": 0.24705882352941178,
            "exact_linear_identity_applies": true
          },
          {
            "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
            "unit": "USD",
            "company": "B",
            "parameters": {
              "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
              "sales_change": -0.2,
              "step_enabled": false,
              "threshold": 0.15,
              "step_fixed_cost": 10000
            },
            "base_sales": 315000,
            "base_variable_costs": 105000,
            "fixed_costs": 125000,
            "contribution": 210000,
            "base_oi": 85000,
            "dol": 2.4705882352941178,
            "sales_change": -0.2,
            "new_sales": 252000,
            "new_variable_costs": 84000,
            "added_fixed_cost": 0,
            "linear_oi": 43000,
            "new_oi": 43000,
            "relative_oi_change": -0.49411764705882355,
            "constant_parameter_identity": -0.49411764705882355,
            "exact_linear_identity_applies": true
          }
        ],
        "cvp_step": {
          "identity": "OpenStax §3.5 fictional Company A/B example; not actual company observations",
          "unit": "USD",
          "company": "A",
          "parameters": {
            "identity": "Author optional capacity-step variation; not OpenStax original inputs or CAT facts",
            "sales_change": 0.2,
            "step_enabled": true,
            "threshold": 0.15,
            "step_fixed_cost": 10000
          },
          "base_sales": 250000,
          "base_variable_costs": 102000,
          "fixed_costs": 63000,
          "contribution": 148000,
          "base_oi": 85000,
          "dol": 1.7411764705882353,
          "sales_change": 0.2,
          "new_sales": 300000,
          "new_variable_costs": 122400,
          "added_fixed_cost": 10000,
          "linear_oi": 114600,
          "new_oi": 104600,
          "relative_oi_change": 0.23058823529411765,
          "constant_parameter_identity": 0.3482352941176471,
          "exact_linear_identity_applies": false
        }
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/default-results.json"
    },
    "algorithm": "真实桥固定历史输入。教学CM=sales-variable_costs；OI=CM-fixed_costs；DOL=CM/OI。固定参数时newOI=(1+x)CM-F，有限百分比关系精确；台阶另加10,000，基点OI零拒绝百分比。",
    "boundaries": "有限变化固定参数时两结果完全一致；跨台阶另算新增成本，基点利润0不返回可用比率。",
    "local_url": "/notebook/labs/bf-de/interactions.html#EXP-BF17-HISTORICAL-VS-STRUCTURAL",
    "static_equivalent": {
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static.html#EXP-BF17-HISTORICAL-VS-STRUCTURAL",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static-equivalents.md"
    }
  }
]
```

## Sources
- [Caterpillar Inc. FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm): 制造库存四阶段、部分LIFO与FIFO可比调整，以及NCI利润/权益归属；公司同时包含Financial Products。
- [Caterpillar FY2025 Consolidated Operating Profit Comparison](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg): 期初13,072、八项归因及期末11,151；这是公司历史解释，不是独立因果估计。
- [Principles of Accounting Vol2 §3.5 — Margin of Safety and Operating Leverage](https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage): Company A/B虚构输入与经营杠杆；按原始表复算，不采用网页不一致的1.71、31.9%/46.9%。有限变化精确式由本篇条件推导。

## Content relations
```json
[
  {
    "from": "zh-bf17",
    "relation": "part_of",
    "to": "business-capital",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf17",
    "relation": "supported_by",
    "to": "BBC-C04",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "Note1D pp64–65; Note9 p89",
      "MD&A pp31–35; Definitions pp36–38",
      "Note23 A/B/C pp115–118; profit p120; pretax reconciliation p121"
    ],
    "scope": "制造与出租资产用途、公司历史驱动定义、报告分部到收入/税前利润的完整桥。不得把volume包含的组合效果当结构性贡献率。"
  },
  {
    "from": "zh-bf17",
    "relation": "supported_by",
    "to": "BFDE-CAT-CHART",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "MD&A p33 original chart"
    ],
    "scope": "期初13,072、八项归因及期末11,151；这是公司历史解释，不是独立因果估计。"
  },
  {
    "from": "zh-bf17",
    "relation": "supported_by",
    "to": "BFDE-CVP",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "§3.5 full section; Operating Leverage; Company A/B tables and relevant-range discussion"
    ],
    "scope": "Company A/B虚构输入与经营杠杆；按原始表复算，不采用网页不一致的1.71、31.9%/46.9%。有限变化精确式由本篇条件推导。"
  },
  {
    "from": "zh-bf17",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-CAT-BF17-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf17",
    "relation": "uses_method",
    "to": "zh-bf18",
    "reason": "局部调用资源/计量/边界关系，可在本文补齐；不是整篇硬先修"
  },
  {
    "from": "bf17-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF17-HISTORICAL-VS-STRUCTURAL",
    "reason": "真实桥固定历史输入。教学CM=sales-variable_costs；OI=CM-fixed_costs；DOL=CM/OI。固定参数时newOI=(1+x)CM-F，有限百分比关系精确；台阶另加10,000，基点OI零拒绝百分比。",
    "at_section": "bf17-experiment",
    "conditions": "有限变化固定参数时两结果完全一致；跨台阶另算新增成本，基点利润0不返回可用比率。"
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 9/14
把公司历史利润桥与明确条件的经营杠杆模型分开。
同样的经营利润，也会因收付款时间形成不同的资金需要。
Next: [营运资本与现金周转](https://ou-liu-red-sugar.github.io/zh/notebook/working-capital-and-cash-cycle/)
