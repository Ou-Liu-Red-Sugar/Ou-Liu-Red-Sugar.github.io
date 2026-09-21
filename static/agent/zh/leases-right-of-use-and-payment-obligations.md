# 租赁、使用权与付款义务

按所选公司恢复使用权、负债、未来付款、费用与特定范围现金；两类租赁完整表和同公司比较期练习.

Entry: zh-bf13 | Node: BF-13 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教 BF-13《租赁、使用权与付款义务》，材料版本2026-09-21. 学习任务：选Costco或Salesforce，恢复两类负债并与到期表对接，辨认费用和现金的不同范围.
先确认读者所选主分支（默认retail）；required_readings只读common及该分支. all才读取全部主分支. optional只有读者启用后才变为必读. 先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途. 文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始. 读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲.
诊断任务：{"retail": "恢复Costco2024负债2,554/1,498与2025到期表；解释618与460范围.", "software": "恢复Salesforce 2025融资资产812与负债678；核2026的569−34=535，并说明p77转租与约4.4bn更广承诺为何不进入这条负债闭合."}. 补充任务：先由所选公司到期表恢复两类负债，再找到使用权在合并表中的位置.
随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过. 默认先用所选公司同一原件的比较期完成迁移；跨公司对照只有读者启用后才补读另一公司完整单元. 通过尺度：Costco618和460不做无调节桥；选Salesforce时不得强制用Costco迁移，默认用2025比较列.
保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据. 资料不足处不要补造差额或估值. 最后明确：读者已经能独立重建什么，换一份材料时还需先核哪些条件？

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "default_branch": "retail",
  "branch_options": [
    "retail",
    "software"
  ],
  "branch_tasks": {
    "retail": "恢复Costco2024负债2,554/1,498与2025到期表；解释618与460范围.",
    "software": "恢复Salesforce 2025融资资产812与负债678；核2026的569−34=535，并说明p77转租与约4.4bn更广承诺为何不进入这条负债闭合."
  },
  "selection_rules": {
    "common": "始终必读",
    "selected": "只读所选主分支",
    "all": "读所有主分支",
    "optional": "读者启用后再读；cat/epw/cross不同入口"
  },
  "required_readings": [
    {
      "source_id": "BFDE-FASB",
      "title": "FASB ASU 2016-02 — Leases (Topic 842), Section A",
      "authors": [
        "Financial Accounting Standards Board"
      ],
      "version": "February 2016, amendment communication",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202016-02_Section%20A.pdf"
      },
      "required_unit": {
        "locator": "Summary pp1–5 / PDF7–11",
        "scope": "完整承租人说明及定义",
        "purpose": "五视图与费用现金分类"
      },
      "supports": "承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification.",
      "branch": "common"
    },
    {
      "source_id": "BF-S-COST-FY2025-PDF",
      "title": "Costco Wholesale Corporation — FY2025 Annual Report",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY ended 2025-08-31; comparative 2024-09-01; 52 weeks each",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf"
      },
      "required_unit": {
        "locator": "IR policy p43, Note5 pp50–51 / PDF49,56–57",
        "scope": "完整资产、负债、费用、现金、到期及脚注",
        "purpose": "Costco分支及2024迁移"
      },
      "supports": "完整PP&E结构、租赁五视图与经营周转部件. PP&E现金/存量和租赁费用/特定现金的边界保留，混合应收不作为客户DSO.",
      "branch": "retail"
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
    "lease_costco": {
      "company": "costco",
      "period": "2025-08-31",
      "unit": "USD M",
      "source_id": "BF-S-COST-FY2025-PDF",
      "locator": "Note5 printed pp50–51; PDF pp56–57; policy printed p43",
      "balances": [
        [
          "Operating lease right-of-use assets",
          2725
        ],
        [
          "Finance lease assets, net",
          1488
        ],
        [
          "Operating lease liabilities, current",
          208
        ],
        [
          "Operating lease liabilities, noncurrent",
          2460
        ],
        [
          "Finance lease liabilities, current",
          78
        ],
        [
          "Finance lease liabilities, noncurrent",
          1401
        ]
      ],
      "operating_liability": 2668,
      "finance_liability": 1479,
      "maturity": [
        {
          "bucket": "FY2026",
          "operating": 267,
          "finance": 133
        },
        {
          "bucket": "FY2027",
          "operating": 250,
          "finance": 132
        },
        {
          "bucket": "FY2028",
          "operating": 235,
          "finance": 135
        },
        {
          "bucket": "FY2029",
          "operating": 204,
          "finance": 122
        },
        {
          "bucket": "FY2030",
          "operating": 184,
          "finance": 109
        },
        {
          "bucket": "Thereafter",
          "operating": 2451,
          "finance": 1780
        }
      ],
      "undiscounted": [
        3591,
        2411
      ],
      "interest_deduction": [
        923,
        932
      ],
      "expense_rows": [
        [
          "Operating lease costs",
          271
        ],
        [
          "Amortization of lease assets",
          102
        ],
        [
          "Interest on lease liabilities",
          63
        ],
        [
          "Variable lease costs",
          182
        ]
      ],
      "listed_expense_total": 618,
      "expense_scope": "费用表不含不重大的短期费用和转租收入；含可变费用",
      "cash_rows": [
        [
          "Operating cash flows — operating leases",
          255
        ],
        [
          "Operating cash flows — finance leases",
          58
        ],
        [
          "Financing cash flows — finance leases",
          147
        ]
      ],
      "liability_measurement_cash": 460,
      "cash_scope": "Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金",
      "finance_asset_location": "Other long-term assets",
      "remaining_term": [
        20,
        25
      ],
      "exclusions": {
        "signed_not_commenced": 1094,
        "sublease_income_not_netted": 92
      }
    },
    "lease_salesforce": {
      "company": "salesforce",
      "period": "2026-01-31",
      "unit": "USD M",
      "source_id": "BBC-C01",
      "locator": "Note6 Leases and Other Commitments pp75–77; Note1 Leases pp67–68",
      "balances": [
        [
          "Operating lease right-of-use assets",
          2003
        ],
        [
          "Finance lease assets, net",
          614
        ],
        [
          "Operating lease liabilities, current",
          548
        ],
        [
          "Operating lease liabilities, noncurrent",
          2189
        ],
        [
          "Finance lease liabilities, current",
          275
        ],
        [
          "Finance lease liabilities, noncurrent",
          260
        ]
      ],
      "operating_liability": 2737,
      "finance_liability": 535,
      "maturity": [
        {
          "bucket": "FY2027",
          "operating": 615,
          "finance": 289
        },
        {
          "bucket": "FY2028",
          "operating": 571,
          "finance": 120
        },
        {
          "bucket": "FY2029",
          "operating": 493,
          "finance": 76
        },
        {
          "bucket": "FY2030",
          "operating": 338,
          "finance": 58
        },
        {
          "bucket": "FY2031",
          "operating": 268,
          "finance": 26
        },
        {
          "bucket": "Thereafter",
          "operating": 790,
          "finance": 0
        }
      ],
      "undiscounted": [
        3075,
        569
      ],
      "interest_deduction": [
        338,
        34
      ],
      "expense_rows": [
        [
          "Operating lease cost",
          614
        ],
        [
          "Amortization of right-of-use assets",
          375
        ],
        [
          "Interest on lease liabilities",
          25
        ]
      ],
      "listed_expense_total": 1014,
      "expense_scope": "本表列示经营费用、融资摊销及利息，不另推未列示现金范围",
      "cash_rows": [
        [
          "Operating cash flows — operating leases",
          695
        ],
        [
          "Operating cash flows — finance leases",
          25
        ],
        [
          "Financing cash flows — finance leases",
          367
        ]
      ],
      "liability_measurement_cash": 1087,
      "cash_scope": "Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金",
      "finance_asset_location": "Property and equipment",
      "remaining_term": [
        7,
        3
      ],
      "exclusions": null
    }
  },
  "prompt": "你正在教 BF-13《租赁、使用权与付款义务》，材料版本2026-09-21. 学习任务：选Costco或Salesforce，恢复两类负债并与到期表对接，辨认费用和现金的不同范围.\n先确认读者所选主分支（默认retail）；required_readings只读common及该分支. all才读取全部主分支. optional只有读者启用后才变为必读. 先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途. 文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始. 读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲.\n诊断任务：{\"retail\": \"恢复Costco2024负债2,554/1,498与2025到期表；解释618与460范围.\", \"software\": \"恢复Salesforce 2025融资资产812与负债678；核2026的569−34=535，并说明p77转租与约4.4bn更广承诺为何不进入这条负债闭合.\"}. 补充任务：先由所选公司到期表恢复两类负债，再找到使用权在合并表中的位置.\n随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过. 默认先用所选公司同一原件的比较期完成迁移；跨公司对照只有读者启用后才补读另一公司完整单元. 通过尺度：Costco618和460不做无调节桥；选Salesforce时不得强制用Costco迁移，默认用2025比较列.\n保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据. 资料不足处不要补造差额或估值. 最后明确：读者已经能独立重建什么，换一份材料时还需先核哪些条件？",
  "selected_branch": "retail",
  "required_readings_by_branch": {
    "retail": [
      {
        "source_id": "BFDE-FASB",
        "title": "FASB ASU 2016-02 — Leases (Topic 842), Section A",
        "authors": [
          "Financial Accounting Standards Board"
        ],
        "version": "February 2016, amendment communication",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://storage.fasb.org/ASU%202016-02_Section%20A.pdf"
        },
        "required_unit": {
          "locator": "Summary pp1–5 / PDF7–11",
          "scope": "完整承租人说明及定义",
          "purpose": "五视图与费用现金分类"
        },
        "supports": "承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification.",
        "branch": "common"
      },
      {
        "source_id": "BF-S-COST-FY2025-PDF",
        "title": "Costco Wholesale Corporation — FY2025 Annual Report",
        "authors": [
          "Costco Wholesale Corporation"
        ],
        "version": "FY ended 2025-08-31; comparative 2024-09-01; 52 weeks each",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf"
        },
        "required_unit": {
          "locator": "IR policy p43, Note5 pp50–51 / PDF49,56–57",
          "scope": "完整资产、负债、费用、现金、到期及脚注",
          "purpose": "Costco分支及2024迁移"
        },
        "supports": "完整PP&E结构、租赁五视图与经营周转部件. PP&E现金/存量和租赁费用/特定现金的边界保留，混合应收不作为客户DSO.",
        "branch": "retail"
      }
    ],
    "software": [
      {
        "source_id": "BFDE-FASB",
        "title": "FASB ASU 2016-02 — Leases (Topic 842), Section A",
        "authors": [
          "Financial Accounting Standards Board"
        ],
        "version": "February 2016, amendment communication",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://storage.fasb.org/ASU%202016-02_Section%20A.pdf"
        },
        "required_unit": {
          "locator": "Summary pp1–5 / PDF7–11",
          "scope": "完整承租人说明及定义",
          "purpose": "五视图与费用现金分类"
        },
        "supports": "承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification.",
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
          "locator": "Note1 Leases pp67–68, Note6 pp75–77",
          "scope": "完整政策/费用/现金/资产负债/到期及脚注",
          "purpose": "Salesforce分支及2025迁移"
        },
        "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
        "branch": "software"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BFDE-FASB",
      "title": "FASB ASU 2016-02 — Leases (Topic 842), Section A",
      "authors": [
        "Financial Accounting Standards Board"
      ],
      "version": "February 2016, amendment communication",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202016-02_Section%20A.pdf"
      },
      "required_unit": {
        "locator": "Summary pp1–5 / PDF7–11",
        "scope": "完整承租人说明及定义",
        "purpose": "五视图与费用现金分类"
      },
      "supports": "承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification.",
      "branch": "common"
    },
    {
      "source_id": "BF-S-COST-FY2025-PDF",
      "title": "Costco Wholesale Corporation — FY2025 Annual Report",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY ended 2025-08-31; comparative 2024-09-01; 52 weeks each",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf"
      },
      "required_unit": {
        "locator": "IR policy p43, Note5 pp50–51 / PDF49,56–57",
        "scope": "完整资产、负债、费用、现金、到期及脚注",
        "purpose": "Costco分支及2024迁移"
      },
      "supports": "完整PP&E结构、租赁五视图与经营周转部件. PP&E现金/存量和租赁费用/特定现金的边界保留，混合应收不作为客户DSO.",
      "branch": "retail"
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
        "locator": "Note1 Leases pp67–68, Note6 pp75–77",
        "scope": "完整政策/费用/现金/资产负债/到期及脚注",
        "purpose": "Salesforce分支及2025迁移"
      },
      "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
      "branch": "software"
    }
  ],
  "branch_selection_protocol": "网页已选分支和展开的选读优先；切换后以相应 required_readings_by_branch 的完整数组替换必读，cross/all才读取所有主分支. 运行日志从空开始.",
  "experiment_ids": [
    "EXP-BF13-LEASE-VIEWS"
  ]
}
```

## Supplied entry
租赁让企业不必先买下底层资产，也能在约定期间取得使用能力. 与此同时，它约束了未来付款. 因此读租赁附注，我们要把“能使用什么”与“必须付什么”一起看，再分别跟到期间费用、现金和剩余承诺. 本篇的产出是一张五栏阅读地图，而不是把几个名字相似的金额加在一起.

共同部分加所选公司约需 15–20 分钟. 默认读 Costco 的零售设施分支；也可只读 Salesforce 的办公、数据中心与设备分支. 迁移题首先使用所选公司另一期间；跨公司比较放在最后，需要时再展开.

<a id="bf13-lease-structure"></a>
## 1. 五种数字，五个问题

<strong>使用权资产</strong>表示租期内使用底层资产的权利；<strong>租赁负债</strong>表示按规则纳入计量的付款义务. <strong>未来未折付款表</strong>按到期时间展示这些付款；<strong>期间费用</strong>记录本期服务消耗和相关融资成本；<strong>现金表</strong>记录本期实际付出的资金. 前两者是时点存量，后两者是期间量，而未来付款表跨越了多个尚未发生的期间. [^bf13-fasb]

这里还要先确认对象本身是不是租赁. 按 Topic 842 的定义边界，合同要在一段期间内以对价换取对<strong>已识别资产</strong>使用的控制权，才进入下面这组租赁视图；所谓控制，至少要求客户能够取得该资产使用产生的几乎全部经济利益，并有权决定资产如何使用. 普通云服务或外包合同即使按月付款，只要客户并不控制一项已识别资产，就不会因为付款形式相似而自动变成租赁. 这个对象边界决定我们什么时候才应该继续计算使用权资产和租赁负债. [^bf13-fasb]

美国租赁准则将使用权和义务带入资产负债表，同时保留经营租赁与融资租赁的区分. 融资租赁把使用权摊销与利息费用分开，现金偿还本金通常列筹资活动、利息列经营活动；经营租赁则一般按直线方式形成单一租赁费用，相关现金列经营活动. 短期政策选择和某些可变付款影响入表范围，所以“所有租金”并不自动等于“用于计量租赁负债的付款”. [^bf13-fasb]

可以把它记成两个并行过程：使用权随服务消耗、减值等变化；负债随利息计量、付款和合同变化而变化. 在起点，预付租金、初始直接成本及租金优惠等还会调整使用权资产. 这就是为什么后来两侧余额不必相等. 下面不替整组租赁重造一个统一利率，而是利用原附注已给出的付款与负债连接.

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="retail">零售：Costco</button>
<button type="button" data-select-reading-branch="software">软件：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="retail">

<a id="CASE-BFDE-COST-BF13-20260921"></a>
<a id="bf13-costco"></a>
## 2. Costco：先恢复资源和义务，再读承诺的时间形状

Costco FY2025 年末为 2025-08-31. 以下按 Note 5 的资产负债表重排，保留两期与小计，单位为 M 美元. 括号中的编号对应原表列报说明. [^bf13-cost]

| 原行及中文 | 2025 | 2024 |
|---|---:|---:|
| <strong>Assets／资产</strong> | | |
| Operating lease right-of-use assets／经营租赁使用权资产 | 2,725 | 2,617 |
| Finance lease assets (1)／融资租赁资产 | 1,488 | 1,433 |
| Total lease assets／租赁资产合计 | 4,213 | 4,050 |
| <strong>Liabilities—Current／流动负债</strong> | | |
| Operating lease liabilities (2)／经营租赁负债 | 208 | 179 |
| Finance lease liabilities (2)／融资租赁负债 | 78 | 147 |
| <strong>Long-term／长期负债</strong> | | |
| Operating lease liabilities／经营租赁负债 | 2,460 | 2,375 |
| Finance lease liabilities (3)／融资租赁负债 | 1,401 | 1,351 |
| Total lease liabilities／租赁负债合计 | 4,147 | 4,052 |

(1) 融资租赁资产在合并表的 `Other long-term assets`；(2) 两类流动负债在 `Other current liabilities`；(3) 长期融资租赁负债在 `Other long-term liabilities`. 这些都是主表内已有金额的拆分，不是要再加进总资产或总负债的新项目.

现在可以恢复两种租赁义务：经营租赁为 $208+2,460=2,668$，融资租赁为 $78+1,401=1,479$. 把它们放回业务，门店、土地、设施或设备的使用权构成长期经营能力，而流动部分提醒我们下一年度要安排的付款. 期末使用权与负债分别为 4,213、4,147，差 66 本身不是应付给股东的收益.

<a id="bf13-costco-maturity"></a>
### 未来付款表怎样回到负债

下表保留 2025 年末之后五个财年和 thereafter，单位仍为 M 美元. 原表 `Less amount representing interest` 在下面显示为减项，以便复算. [^bf13-cost]

| 未来付款所属财年 | Operating leases／经营租赁 | Finance leases／融资租赁 |
|---|---|---|
| FY2026 | 267 | 133 |
| FY2027 | 250 | 132 |
| FY2028 | 235 | 135 |
| FY2029 | 204 | 122 |
| FY2030 | 184 | 109 |
| Thereafter | 2,451 | 1,780 |
| Total／未折现付款合计 | 3,591 | 2,411 |
| Less amount representing interest／减：利息 | (923) | (932) |
| Present value of lease liabilities／租赁负债 | 2,668 | 1,479 |


经营租赁未来未折付款 3,591，减去所含利息 923，得到负债 2,668；融资租赁则是 $2,411-932=1,479$. 合计未折付款 6,002 跨越多年，不是“明年必须支付的租金”. `Thereafter` 是多年合并桶，不能把它画成第六年一个确定付款日.

原表还保留两个很重要的范围说明：经营租赁付款没有扣预期未来转租收入 92；已签署但尚未开始的租赁付款 1,094 没有纳入这张到期表. 前者是另一条预计收款关系，后者是尚未进入这一已开始租赁计量范围的承诺. 读者可以先把这两条标在图外，不要擅自从负债减掉 92、再给负债加上 1,094.

### 费用与现金：先看原行，再看交集

| 费用原行 | FY2025 | FY2024 |
|---|---:|---:|
| Operating lease costs／经营租赁费用 | 271 | 284 |
| Amortization of lease assets／融资租赁资产摊销 | 102 | 97 |
| Interest on lease liabilities／融资租赁利息 | 63 | 58 |
| Variable lease costs／可变租赁费用 | 182 | 163 |
| Total lease costs／列示租赁费用合计 | 618 | 602 |

费用表不含金额不重大的短期租赁费用及转租收入. 经营租赁费用、资产摊销和可变费用进入 SG&A 与 merchandise costs；利息进入 interest expense 与 merchandise costs，具体经营用途影响费用位置. [^bf13-cost]

| Cash paid for amounts included in the measurement of lease liabilities／纳入负债计量金额的现金 | FY2025 | FY2024 |
|---|---:|---:|
| Operating cash flows—operating leases | 255 | 274 |
| Operating cash flows—finance leases | 58 | 58 |
| Financing cash flows—finance leases | 147 | 136 |
| 三行合计（计算） | 460 | 468 |

现在我们能明确安排本例的现金阅读：255 是经营租赁对应的经营现金；融资租赁的 58 与 147 分别显示经营和筹资现金. 费用为 618，特定范围现金为 460，但二者范围不同——费用中有可变部分，而这张现金表只覆盖纳入负债计量的付款. 它们之间的 158 不能直接命名成“应计增加”.

非现金取得也要单看：本年以新租赁或修改租赁换得的经营、融资租赁资产分别为 294、131. 取得使用权可以不在当时支付等额现金；这与买入设备时的“取得日和付款日”是相通的关系.

### 零售分支练习

<strong>任务. </strong>恢复 2024 年的经营与融资租赁负债，并核对负债总额；再说明 2025 年付款到期表的哪个量可以直接和 2025 年负债对接.

<strong>解析. </strong>2024 经营负债 $179+2,375=2,554$；融资负债 $147+1,351=1,498$；合计 4,052. 2025 的未折现付款减去表列利息后为 2,668 和 1,479，分别对接该年的两类负债. 跨年度的未折付款合计不能直接当期末资产，更不能当本年费用.

</section>

<section data-reading-branch="software">

<a id="CASE-BFDE-CRM-BF13-20260921"></a>
<a id="bf13-salesforce"></a>
## 3. Salesforce：同样的使用安排，列报位置与期限不同

Salesforce FY2026 截至 2026-01-31，比较日为 2025-01-31. 公司披露租赁涉及办公室、数据中心和设备. Note 1 说明融资租赁资产列入 PP&E，而不是另设同名主表行；流动及非流动融资负债则进入相应其他负债. 先把附注恢复出来，才看得到完整使用能力. [^bf13-crm]

| 原行及中文 | 2026-01-31 | 2025-01-31 |
|---|---:|---:|
| <strong>Operating leases／经营租赁</strong> | | |
| Operating lease right-of-use assets／使用权资产 | 2,003 | 2,157 |
| Operating lease liabilities, current／流动负债 | 548 | 579 |
| Noncurrent operating lease liabilities／非流动负债 | 2,189 | 2,380 |
| Total operating lease liabilities／负债合计 | 2,737 | 2,959 |
| <strong>Finance leases／融资租赁</strong> | | |
| Computers, equipment and software／资产原值 | 1,427 | 1,520 |
| Accumulated depreciation／累计折旧 | (813) | (708) |
| Property and equipment, net／净额 | 614 | 812 |
| Accrued expenses and other liabilities／流动负债 | 275 | 337 |
| Other noncurrent liabilities／非流动负债 | 260 | 341 |
| Total finance lease liabilities／负债合计 | 535 | 678 |

这些金额是 M 美元. 融资租赁资源的 $1,427-813=614$ 和义务的 $275+260=535$ 各有自己的余额路径；它们不因为服务同一组租赁就必须相等.

未来到期付款为：

| 未来付款所属财年 | Operating leases／经营租赁 | Finance leases／融资租赁 |
|---|---|---|
| FY2027 | 615 | 289 |
| FY2028 | 571 | 120 |
| FY2029 | 493 | 76 |
| FY2030 | 338 | 58 |
| FY2031 | 268 | 26 |
| Thereafter | 790 | 0 |
| Total minimum lease payments／未折现付款合计 | 3,075 | 569 |
| Less: Imputed interest／减：利息 | (338) | (34) |
| Total／租赁负债 | 2,737 | 535 |


经营租赁 $3,075-338=2,737$，融资租赁 $569-34=535$，回到原表负债. 这给出一条可复核的义务关系，不要求拿加权平均利率去重新折现一个包含许多合同的池子.

Note 6 还给了这张到期表的范围说明：经营租赁付款没有扣掉预计转租收入——未来五年约 258、之后约 35；另外，公司披露包括尚未开始租赁在内的租赁承诺总额约 4.4 billion，其中约 3.8 billion 与办公室和数据中心设施有关. 4.4 billion 是一个更广、且以 B 美元四舍五入列示的承诺口径，不能拿它减去表中 3,075 就反推出一个精确的“未开始租赁金额”；预计转租收入也不能直接从 2,737 的租赁负债中扣掉. [^bf13-crm]

FY2026 经营租赁费用 614，融资使用权摊销 375、利息 25；对应纳入租赁负债计量的现金为经营租赁 695、融资租赁利息 25、本金 367，合计 1,087. 第一组是费用组成，第二组是特定范围付现. 融资租赁的本金付款减少义务，而使用权摊销分配服务成本，这正是现金与利润表不能只按“租赁”二字合并的原因. [^bf13-crm]

### 软件分支练习

<strong>任务. </strong>用 2025-01-31 比较列恢复融资租赁资产净额和负债，写出它们在合并表中的位置；再用 2026 到期表核回融资租赁负债.

<strong>解析. </strong>资产为 $1,520-708=812$，在 PP&E 内；负债为 $337+341=678$，分别在应计及其他流动负债、其他非流动负债内. 2026 的 $569-34=535$ 与 $275+260=535$ 相等. 没有独立主表行，不代表没有资源或义务.

</section>

<a id="bf13-experiment"></a>
## 4. 在五个视图之间切换

<div data-experiment-slot="EXP-BF13-LEASE-VIEWS"></div>

选择你正在读的公司，依次查看资产／负债、付款到期、费用、特定范围现金. 到期图把付款按原表桶排列；旁边始终保留减利息后回到负债的算式. 它不是现金预测器，也不改变公司的历史金额. 静态阅读时，上面的表已经给出全部默认结果.

<details data-agent-option="cross">
<summary>跨公司迁移：比较资金承诺的形状，而不是比较谁“租得更好”</summary>

Costco 的加权剩余租期，经营／融资分别为 20／25 年；Salesforce 为 7／3 年. 它们记录不同报告日、不同合同组合. 这个差异值得带回业务去问：资源用途是什么、续约与替换怎样安排、较远的付款集中在哪个桶？只凭较短年限不能判定融资更优. 比较前分别读取两家公司租赁政策和完整 Note 5／Note 6，使用权位置与费用现金范围也要一起带过来. [^bf13-cost][^bf13-crm]

</details>

<a id="bf13-exercise"></a>
## 5. 最后把五栏重新连起来

<strong>综合任务. </strong>用所选公司的数字写一段四句分析：先给两类负债及其到期表连接，再说明使用权列报位置，再区分费用与现金，最后指出一项仍需原合同或额外明细才能判断的事项.

<strong>参考解析. </strong>以 Costco 为例：经营与融资负债为 2,668、1,479，分别由 3,591、2,411 未折付款减表列利息得到. 融资资产 1,488 在其他长期资产内. 费用 618 与特定范围现金 460 不属于同一个完整调整桥. 要判断某个设施退出后的剩余义务、转租回收和减值，需要该合同及对应资产组信息，而不是只看整个租赁池的加权租期. 软件分支可写：经营与融资负债为 2,737、535，分别与 3,075−338、569−34 对接；融资使用权净额 614 在 PP&E 内；列示费用 614+375+25=1,014 与特定范围现金 1,087 分开；特定数据中心提前退出的现金与减值影响，仍需相应合同和资产组资料. 完成所选一段，你就把资源、承诺、使用成本与资金安排放回了同一项经营活动.

[^bf13-fasb]: FASB ASU 2016-02, Section A，Summary 印刷 pp1–5／PDF pp7–11：承租人确认、两类租赁、可选期间、短期与可变付款及定义. [官方原件](https://storage.fasb.org/ASU%202016-02_Section%20A.pdf#page=7). 该修订说明用于理解制度及案例，不替代全部现行 Codification.
[^bf13-cost]: Costco FY2025 Annual Report，租赁政策印刷 p43／PDF p49；Note 5 印刷 pp50–51／PDF pp56–57，含两期表和全部采用脚注. [公司 PDF](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf#page=56). 同年度 [SEC 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm) 对应政策 p45、Note 5 pp52–53. 取得日 2026-09-21.
[^bf13-crm]: Salesforce FY2026 Form 10-K，Note 1 Leases pp67–68、Note 6 pp75–77，完整费用、现金、资产负债与到期表. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日 2026-09-21；金额 M 美元.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>


## Additional teaching material
<a id="EXP-BF13-LEASE-VIEWS"></a>
## BF-13｜租赁、使用权与付款义务：静态实验

输入身份 `BFDE-SHARED-20260921-v1`. 公司金额单位为 USD M；教学设备、现金例和资本模型为教学金额；CVP 为美元.

### Costco FY2025

| 附注项目（本视图简名，原行见正文） | 余额 |
|---|---|
| Operating lease right-of-use assets | 2,725 |
| Finance lease assets, net | 1,488 |
| Operating lease liabilities, current | 208 |
| Operating lease liabilities, noncurrent | 2,460 |
| Finance lease liabilities, current | 78 |
| Finance lease liabilities, noncurrent | 1,401 |

| 未来财年桶 | Operating | Finance |
|---|---|---|
| FY2026 | 267 | 133 |
| FY2027 | 250 | 132 |
| FY2028 | 235 | 135 |
| FY2029 | 204 | 122 |
| FY2030 | 184 | 109 |
| Thereafter | 2,451 | 1,780 |
| Total | 3,591 | 2,411 |
| Less amount representing interest | -923 | -932 |
| Present value of lease liabilities | 2,668 | 1,479 |

| 费用原行 | 金额 |
|---|---|
| Operating lease costs | 271 |
| Amortization of lease assets | 102 |
| Interest on lease liabilities | 63 |
| Variable lease costs | 182 |
| 列示费用合计 | 618 |

费用表不含不重大的短期费用和转租收入；含可变费用.

| 现金分类（简名） | 金额 |
|---|---|
| Operating cash flows — operating leases | 255 |
| Operating cash flows — finance leases | 58 |
| Financing cash flows — finance leases | 147 |
| 特定范围合计 | 460 |

Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金. 五种视图不是一条加减桥.

### Salesforce FY2026

| 附注项目（本视图简名，原行见正文） | 余额 |
|---|---|
| Operating lease right-of-use assets | 2,003 |
| Finance lease assets, net | 614 |
| Operating lease liabilities, current | 548 |
| Operating lease liabilities, noncurrent | 2,189 |
| Finance lease liabilities, current | 275 |
| Finance lease liabilities, noncurrent | 260 |

| 未来财年桶 | Operating | Finance |
|---|---|---|
| FY2027 | 615 | 289 |
| FY2028 | 571 | 120 |
| FY2029 | 493 | 76 |
| FY2030 | 338 | 58 |
| FY2031 | 268 | 26 |
| Thereafter | 790 | 0 |
| Total minimum lease payments | 3,075 | 569 |
| Less: Imputed interest | -338 | -34 |
| Total | 2,737 | 535 |

| 费用原行 | 金额 |
|---|---|
| Operating lease cost | 614 |
| Amortization of right-of-use assets | 375 |
| Interest on lease liabilities | 25 |
| 列示费用合计 | 1,014 |

本表列示经营费用、融资摊销及利息，不另推未列示现金范围.

| 现金分类（简名） | 金额 |
|---|---|
| Operating cash flows — operating leases | 695 |
| Operating cash flows — finance leases | 25 |
| Financing cash flows — finance leases | 367 |
| 特定范围合计 | 1,087 |

Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金. 五种视图不是一条加减桥.

Costco已签未开始付款1,094不在到期表内，转租收入92未抵销. 剩余经营/融资年限Costco20/25年、Salesforce7/3年；不同日期/池子不可直接排名.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF13-LEASE-VIEWS",
    "title": "租赁、使用权与付款义务：同源实验",
    "anchor": "bf13-experiment",
    "description": "按公司选择固定资产、负债、付款桶、费用与特定现金；合计未折付款减原表利息=负债. 资产与义务并列，不构造618到460的调节桥.",
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
        "lease_costco": {
          "company": "costco",
          "period": "2025-08-31",
          "unit": "USD M",
          "source_id": "BF-S-COST-FY2025-PDF",
          "locator": "Note5 printed pp50–51; PDF pp56–57; policy printed p43",
          "balances": [
            [
              "Operating lease right-of-use assets",
              2725
            ],
            [
              "Finance lease assets, net",
              1488
            ],
            [
              "Operating lease liabilities, current",
              208
            ],
            [
              "Operating lease liabilities, noncurrent",
              2460
            ],
            [
              "Finance lease liabilities, current",
              78
            ],
            [
              "Finance lease liabilities, noncurrent",
              1401
            ]
          ],
          "operating_liability": 2668,
          "finance_liability": 1479,
          "maturity": [
            {
              "bucket": "FY2026",
              "operating": 267,
              "finance": 133
            },
            {
              "bucket": "FY2027",
              "operating": 250,
              "finance": 132
            },
            {
              "bucket": "FY2028",
              "operating": 235,
              "finance": 135
            },
            {
              "bucket": "FY2029",
              "operating": 204,
              "finance": 122
            },
            {
              "bucket": "FY2030",
              "operating": 184,
              "finance": 109
            },
            {
              "bucket": "Thereafter",
              "operating": 2451,
              "finance": 1780
            }
          ],
          "undiscounted": [
            3591,
            2411
          ],
          "interest_deduction": [
            923,
            932
          ],
          "expense_rows": [
            [
              "Operating lease costs",
              271
            ],
            [
              "Amortization of lease assets",
              102
            ],
            [
              "Interest on lease liabilities",
              63
            ],
            [
              "Variable lease costs",
              182
            ]
          ],
          "listed_expense_total": 618,
          "expense_scope": "费用表不含不重大的短期费用和转租收入；含可变费用",
          "cash_rows": [
            [
              "Operating cash flows — operating leases",
              255
            ],
            [
              "Operating cash flows — finance leases",
              58
            ],
            [
              "Financing cash flows — finance leases",
              147
            ]
          ],
          "liability_measurement_cash": 460,
          "cash_scope": "Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金",
          "finance_asset_location": "Other long-term assets",
          "remaining_term": [
            20,
            25
          ],
          "exclusions": {
            "signed_not_commenced": 1094,
            "sublease_income_not_netted": 92
          }
        },
        "lease_salesforce": {
          "company": "salesforce",
          "period": "2026-01-31",
          "unit": "USD M",
          "source_id": "BBC-C01",
          "locator": "Note6 Leases and Other Commitments pp75–77; Note1 Leases pp67–68",
          "balances": [
            [
              "Operating lease right-of-use assets",
              2003
            ],
            [
              "Finance lease assets, net",
              614
            ],
            [
              "Operating lease liabilities, current",
              548
            ],
            [
              "Operating lease liabilities, noncurrent",
              2189
            ],
            [
              "Finance lease liabilities, current",
              275
            ],
            [
              "Finance lease liabilities, noncurrent",
              260
            ]
          ],
          "operating_liability": 2737,
          "finance_liability": 535,
          "maturity": [
            {
              "bucket": "FY2027",
              "operating": 615,
              "finance": 289
            },
            {
              "bucket": "FY2028",
              "operating": 571,
              "finance": 120
            },
            {
              "bucket": "FY2029",
              "operating": 493,
              "finance": 76
            },
            {
              "bucket": "FY2030",
              "operating": 338,
              "finance": 58
            },
            {
              "bucket": "FY2031",
              "operating": 268,
              "finance": 26
            },
            {
              "bucket": "Thereafter",
              "operating": 790,
              "finance": 0
            }
          ],
          "undiscounted": [
            3075,
            569
          ],
          "interest_deduction": [
            338,
            34
          ],
          "expense_rows": [
            [
              "Operating lease cost",
              614
            ],
            [
              "Amortization of right-of-use assets",
              375
            ],
            [
              "Interest on lease liabilities",
              25
            ]
          ],
          "listed_expense_total": 1014,
          "expense_scope": "本表列示经营费用、融资摊销及利息，不另推未列示现金范围",
          "cash_rows": [
            [
              "Operating cash flows — operating leases",
              695
            ],
            [
              "Operating cash flows — finance leases",
              25
            ],
            [
              "Financing cash flows — finance leases",
              367
            ]
          ],
          "liability_measurement_cash": 1087,
          "cash_scope": "Cash paid for amounts included in the measurement of lease liabilities；不是所有租赁现金",
          "finance_asset_location": "Property and equipment",
          "remaining_term": [
            7,
            3
          ],
          "exclusions": null
        }
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/default-results.json"
    },
    "algorithm": "按公司选择固定资产、负债、付款桶、费用与特定现金；合计未折付款减原表利息=负债. 资产与义务并列，不构造618到460的调节桥.",
    "boundaries": "Costco618和460不做无调节桥；选Salesforce时不得强制用Costco迁移，默认用2025比较列.",
    "local_url": "/notebook/labs/bf-de/interactions.html#EXP-BF13-LEASE-VIEWS",
    "static_equivalent": {
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static.html#EXP-BF13-LEASE-VIEWS",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static-equivalents.md"
    }
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.
- [Costco Wholesale Corporation · 2025 Annual Report（股东年报 PDF）](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf): Costco 2025 股东年报中的完整合并报表及附注. 与 SEC HTML 版使用同一组财务披露，但排版页码不同：资产负债表为印刷第37页、PDF第43页.
- [FASB ASU 2016-02 — Leases (Topic 842), Section A](https://storage.fasb.org/ASU%202016-02_Section%20A.pdf): 承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification.

## Content relations
```json
[
  {
    "from": "zh-bf13",
    "relation": "part_of",
    "to": "business-capital",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf13",
    "relation": "supported_by",
    "to": "BFDE-FASB",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "Summary printed pp1–5 / PDF physical pp7–11"
    ],
    "scope": "承租人ROU和负债确认的制度理由；两类费用/现金、短期政策选择及可变付款/租期；定义要求控制已识别资产的使用. 修订说明非全部现行Codification."
  },
  {
    "from": "zh-bf13",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-PDF",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "IR PDF printed pp35,37,39 / physical pp41,43,45; SEC pp37,39,41",
      "IR Note1 Receivables pp41–42, PPE pp42–43, leases p43, costs/vendor p46; SEC corresponding +2 printed pages",
      "IR Note5 pp50–51 / physical pp56–57; SEC Note5 pp52–53"
    ],
    "scope": "完整PP&E结构、租赁五视图与经营周转部件. PP&E现金/存量和租赁费用/特定现金的边界保留，混合应收不作为客户DSO."
  },
  {
    "from": "zh-bf13",
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
    "from": "zh-bf13",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-COST-BF13-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf13",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-CRM-BF13-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf13",
    "relation": "uses_method",
    "to": "zh-bf12",
    "reason": "局部调用资源/计量/边界关系，可在本文补齐；不是整篇硬先修"
  },
  {
    "from": "bf13-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF13-LEASE-VIEWS",
    "reason": "按公司选择固定资产、负债、付款桶、费用与特定现金；合计未折付款减原表利息=负债. 资产与义务并列，不构造618到460的调节桥.",
    "at_section": "bf13-experiment",
    "conditions": "Costco618和460不做无调节桥；选Salesforce时不得强制用Costco迁移，默认用2025比较列."
  }
]
```

## Related entries
