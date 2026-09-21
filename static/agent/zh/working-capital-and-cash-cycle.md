# 营运资本与现金周转

按业务选择平均余额和流量，取得零售周转代理或订阅资金时钟；让收付款改变资金缺口而不改造历史事实.

Entry: zh-bf16 | Node: BF-16 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教 BF-16《营运资本与现金周转》，材料版本2026-09-21. 学习任务：零售算两个364天代理和融资缺口；订阅恢复未实现收入滚动并重算延后收款的缺口.
先确认读者所选主分支（默认retail）；required_readings只读common及该分支. all才读取全部主分支. optional只有读者启用后才变为必读. 先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途. 文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始. 读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲.
诊断任务：{"retail": "核364天DIO/DPO部件；付款提前为教学交易安排100资金.", "subscription": "核Salesforce未实现收入滚动；90日收款的教学缺口12、利润48."}. 补充任务：所选教学合同改变收款日，先画履约与付款，再算融资前现金低点.
随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过. 默认先用所选公司同一原件的比较期完成迁移；跨公司对照只有读者启用后才补读另一公司完整单元. 通过尺度：Costco混合应收不生成客户DSO或CCC；订阅default30/90/120日对应0/12/18缺口，原年末余额不变.
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
    "subscription"
  ],
  "branch_tasks": {
    "retail": "核364天DIO/DPO部件；付款提前为教学交易安排100资金.",
    "subscription": "核Salesforce未实现收入滚动；90日收款的教学缺口12、利润48."
  },
  "selection_rules": {
    "common": "始终必读",
    "selected": "只读所选主分支",
    "all": "读所有主分支",
    "optional": "读者启用后再读；cat/epw/cross不同入口"
  },
  "required_readings": [
    {
      "source_id": "BFDE-FINANCE",
      "title": "Principles of Finance §19.1 — What Is Working Capital?",
      "authors": [
        "Julie Dahlquist",
        "Rainford Knight",
        "OpenStax"
      ],
      "version": "2022, first-edition URL",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital"
      },
      "required_unit": {
        "locator": "§19.1 The Cash Cycle and Working Capital Needs by Industry",
        "scope": "完整所用概念/公式及范围",
        "purpose": "先匹配科目和流量"
      },
      "supports": "平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据.",
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
        "locator": "IR FS pp35,37,39; policies pp41–42,46",
        "scope": "原表与应收构成、库存、成本、供应商考虑及CFO",
        "purpose": "零售代理及同材料资金任务"
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
    "working_capital": {
      "unit": "USD M / days",
      "period": "FY2025 (52 weeks)",
      "days": 364,
      "average_inventory": 18381.5,
      "average_payables": 19602,
      "denominator": 239886,
      "denominator_identity": "Merchandise costs proxy, not independently observed credit purchases",
      "dio_proxy": 27.891856965391895,
      "dpo_proxy": 29.743828318451264,
      "two_proxy_difference": -1.85197135305937,
      "dso": null,
      "ccc": null,
      "unidentified_reason": "混合应收不是可匹配的客户赊销应收；缺客户DSO，不能补0或构造完整CCC",
      "two_row_balance_current": -1667,
      "two_row_balance_previous": -774,
      "reverse_balance_change": 893,
      "cfo_two_rows": 963,
      "unallocated_difference": 70
    },
    "retail": {
      "parameters": {
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
      "rows": [
        {
          "day": 0,
          "priority": 0,
          "event": "取得存货／应付",
          "amount": 0,
          "cumulative_net_cash": 0,
          "inventory": 100,
          "receivable": 0,
          "payable": 100,
          "profit": 0
        },
        {
          "day": 20,
          "priority": 1,
          "event": "赊销并结转成本",
          "amount": 0,
          "cumulative_net_cash": 0,
          "inventory": 0,
          "receivable": 150,
          "payable": 100,
          "profit": 50
        },
        {
          "day": 23,
          "priority": 2,
          "event": "收客户款",
          "amount": 150,
          "cumulative_net_cash": 150,
          "inventory": 0,
          "receivable": 0,
          "payable": 100,
          "profit": 50
        },
        {
          "day": 30,
          "priority": 3,
          "event": "支付供应商",
          "amount": -100,
          "cumulative_net_cash": 50,
          "inventory": 0,
          "receivable": 0,
          "payable": 0,
          "profit": 50
        }
      ],
      "maximum_funding_gap": 0,
      "ending_net_cash": 50,
      "profit": 50
    },
    "retail_early_payment": {
      "parameters": {
        "identity": "Author synthetic inventory/cash-timing example, not Costco days",
        "unit": "teaching currency units and relative days",
        "cost": 100,
        "price": 150,
        "acquire_day": 0,
        "sale_day": 20,
        "collect_day": 23,
        "pay_day": 10,
        "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
      },
      "rows": [
        {
          "day": 0,
          "priority": 0,
          "event": "取得存货／应付",
          "amount": 0,
          "cumulative_net_cash": 0,
          "inventory": 100,
          "receivable": 0,
          "payable": 100,
          "profit": 0
        },
        {
          "day": 10,
          "priority": 3,
          "event": "支付供应商",
          "amount": -100,
          "cumulative_net_cash": -100,
          "inventory": 100,
          "receivable": 0,
          "payable": 0,
          "profit": 0
        },
        {
          "day": 20,
          "priority": 1,
          "event": "赊销并结转成本",
          "amount": 0,
          "cumulative_net_cash": -100,
          "inventory": 0,
          "receivable": 150,
          "payable": 0,
          "profit": 50
        },
        {
          "day": 23,
          "priority": 2,
          "event": "收客户款",
          "amount": 150,
          "cumulative_net_cash": 50,
          "inventory": 0,
          "receivable": 0,
          "payable": 0,
          "profit": 50
        }
      ],
      "maximum_funding_gap": 100,
      "ending_net_cash": 50,
      "profit": 50
    },
    "retail_late_collection": {
      "parameters": {
        "identity": "Author synthetic inventory/cash-timing example, not Costco days",
        "unit": "teaching currency units and relative days",
        "cost": 100,
        "price": 150,
        "acquire_day": 0,
        "sale_day": 20,
        "collect_day": 35,
        "pay_day": 30,
        "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
      },
      "rows": [
        {
          "day": 0,
          "priority": 0,
          "event": "取得存货／应付",
          "amount": 0,
          "cumulative_net_cash": 0,
          "inventory": 100,
          "receivable": 0,
          "payable": 100,
          "profit": 0
        },
        {
          "day": 20,
          "priority": 1,
          "event": "赊销并结转成本",
          "amount": 0,
          "cumulative_net_cash": 0,
          "inventory": 0,
          "receivable": 150,
          "payable": 100,
          "profit": 50
        },
        {
          "day": 30,
          "priority": 3,
          "event": "支付供应商",
          "amount": -100,
          "cumulative_net_cash": -100,
          "inventory": 0,
          "receivable": 150,
          "payable": 0,
          "profit": 50
        },
        {
          "day": 35,
          "priority": 2,
          "event": "收客户款",
          "amount": 150,
          "cumulative_net_cash": 50,
          "inventory": 0,
          "receivable": 0,
          "payable": 0,
          "profit": 50
        }
      ],
      "maximum_funding_gap": 100,
      "ending_net_cash": 50,
      "profit": 50
    },
    "subscription": {
      "parameters": {
        "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
        "unit": "teaching currency units and relative 30-day months",
        "amount": 120,
        "invoice_day": 0,
        "collection_day": 30,
        "term_months": 12,
        "monthly_cost": 6,
        "month_days": 30,
        "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
      },
      "rows": [
        {
          "day": 0,
          "event": "开票／无条件应收权",
          "revenue": 0,
          "receivable": 120,
          "unearned": 120,
          "cumulative_service_cost": 0,
          "profit": 0,
          "cumulative_net_cash": 0
        },
        {
          "day": 30,
          "event": "收款；完成服务月并支付成本",
          "revenue": 10,
          "receivable": 0,
          "unearned": 110,
          "cumulative_service_cost": 6,
          "profit": 4,
          "cumulative_net_cash": 114
        },
        {
          "day": 60,
          "event": "完成服务月并支付成本",
          "revenue": 20,
          "receivable": 0,
          "unearned": 100,
          "cumulative_service_cost": 12,
          "profit": 8,
          "cumulative_net_cash": 108
        },
        {
          "day": 90,
          "event": "完成服务月并支付成本",
          "revenue": 30,
          "receivable": 0,
          "unearned": 90,
          "cumulative_service_cost": 18,
          "profit": 12,
          "cumulative_net_cash": 102
        },
        {
          "day": 120,
          "event": "完成服务月并支付成本",
          "revenue": 40,
          "receivable": 0,
          "unearned": 80,
          "cumulative_service_cost": 24,
          "profit": 16,
          "cumulative_net_cash": 96
        },
        {
          "day": 150,
          "event": "完成服务月并支付成本",
          "revenue": 50,
          "receivable": 0,
          "unearned": 70,
          "cumulative_service_cost": 30,
          "profit": 20,
          "cumulative_net_cash": 90
        },
        {
          "day": 180,
          "event": "完成服务月并支付成本",
          "revenue": 60,
          "receivable": 0,
          "unearned": 60,
          "cumulative_service_cost": 36,
          "profit": 24,
          "cumulative_net_cash": 84
        },
        {
          "day": 210,
          "event": "完成服务月并支付成本",
          "revenue": 70,
          "receivable": 0,
          "unearned": 50,
          "cumulative_service_cost": 42,
          "profit": 28,
          "cumulative_net_cash": 78
        },
        {
          "day": 240,
          "event": "完成服务月并支付成本",
          "revenue": 80,
          "receivable": 0,
          "unearned": 40,
          "cumulative_service_cost": 48,
          "profit": 32,
          "cumulative_net_cash": 72
        },
        {
          "day": 270,
          "event": "完成服务月并支付成本",
          "revenue": 90,
          "receivable": 0,
          "unearned": 30,
          "cumulative_service_cost": 54,
          "profit": 36,
          "cumulative_net_cash": 66
        },
        {
          "day": 300,
          "event": "完成服务月并支付成本",
          "revenue": 100,
          "receivable": 0,
          "unearned": 20,
          "cumulative_service_cost": 60,
          "profit": 40,
          "cumulative_net_cash": 60
        },
        {
          "day": 330,
          "event": "完成服务月并支付成本",
          "revenue": 110,
          "receivable": 0,
          "unearned": 10,
          "cumulative_service_cost": 66,
          "profit": 44,
          "cumulative_net_cash": 54
        },
        {
          "day": 360,
          "event": "完成服务月并支付成本",
          "revenue": 120,
          "receivable": 0,
          "unearned": 0,
          "cumulative_service_cost": 72,
          "profit": 48,
          "cumulative_net_cash": 48
        }
      ],
      "maximum_funding_gap": 0,
      "ending_net_cash": 48,
      "profit": 48
    },
    "subscription_late": {
      "parameters": {
        "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
        "unit": "teaching currency units and relative 30-day months",
        "amount": 120,
        "invoice_day": 0,
        "collection_day": 90,
        "term_months": 12,
        "monthly_cost": 6,
        "month_days": 30,
        "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
      },
      "rows": [
        {
          "day": 0,
          "event": "开票／无条件应收权",
          "revenue": 0,
          "receivable": 120,
          "unearned": 120,
          "cumulative_service_cost": 0,
          "profit": 0,
          "cumulative_net_cash": 0
        },
        {
          "day": 30,
          "event": "完成服务月并支付成本",
          "revenue": 10,
          "receivable": 120,
          "unearned": 110,
          "cumulative_service_cost": 6,
          "profit": 4,
          "cumulative_net_cash": -6
        },
        {
          "day": 60,
          "event": "完成服务月并支付成本",
          "revenue": 20,
          "receivable": 120,
          "unearned": 100,
          "cumulative_service_cost": 12,
          "profit": 8,
          "cumulative_net_cash": -12
        },
        {
          "day": 90,
          "event": "收款；完成服务月并支付成本",
          "revenue": 30,
          "receivable": 0,
          "unearned": 90,
          "cumulative_service_cost": 18,
          "profit": 12,
          "cumulative_net_cash": 102
        },
        {
          "day": 120,
          "event": "完成服务月并支付成本",
          "revenue": 40,
          "receivable": 0,
          "unearned": 80,
          "cumulative_service_cost": 24,
          "profit": 16,
          "cumulative_net_cash": 96
        },
        {
          "day": 150,
          "event": "完成服务月并支付成本",
          "revenue": 50,
          "receivable": 0,
          "unearned": 70,
          "cumulative_service_cost": 30,
          "profit": 20,
          "cumulative_net_cash": 90
        },
        {
          "day": 180,
          "event": "完成服务月并支付成本",
          "revenue": 60,
          "receivable": 0,
          "unearned": 60,
          "cumulative_service_cost": 36,
          "profit": 24,
          "cumulative_net_cash": 84
        },
        {
          "day": 210,
          "event": "完成服务月并支付成本",
          "revenue": 70,
          "receivable": 0,
          "unearned": 50,
          "cumulative_service_cost": 42,
          "profit": 28,
          "cumulative_net_cash": 78
        },
        {
          "day": 240,
          "event": "完成服务月并支付成本",
          "revenue": 80,
          "receivable": 0,
          "unearned": 40,
          "cumulative_service_cost": 48,
          "profit": 32,
          "cumulative_net_cash": 72
        },
        {
          "day": 270,
          "event": "完成服务月并支付成本",
          "revenue": 90,
          "receivable": 0,
          "unearned": 30,
          "cumulative_service_cost": 54,
          "profit": 36,
          "cumulative_net_cash": 66
        },
        {
          "day": 300,
          "event": "完成服务月并支付成本",
          "revenue": 100,
          "receivable": 0,
          "unearned": 20,
          "cumulative_service_cost": 60,
          "profit": 40,
          "cumulative_net_cash": 60
        },
        {
          "day": 330,
          "event": "完成服务月并支付成本",
          "revenue": 110,
          "receivable": 0,
          "unearned": 10,
          "cumulative_service_cost": 66,
          "profit": 44,
          "cumulative_net_cash": 54
        },
        {
          "day": 360,
          "event": "完成服务月并支付成本",
          "revenue": 120,
          "receivable": 0,
          "unearned": 0,
          "cumulative_service_cost": 72,
          "profit": 48,
          "cumulative_net_cash": 48
        }
      ],
      "maximum_funding_gap": 12,
      "ending_net_cash": 48,
      "profit": 48
    },
    "subscription_120": {
      "parameters": {
        "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
        "unit": "teaching currency units and relative 30-day months",
        "amount": 120,
        "invoice_day": 0,
        "collection_day": 120,
        "term_months": 12,
        "monthly_cost": 6,
        "month_days": 30,
        "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
      },
      "rows": [
        {
          "day": 0,
          "event": "开票／无条件应收权",
          "revenue": 0,
          "receivable": 120,
          "unearned": 120,
          "cumulative_service_cost": 0,
          "profit": 0,
          "cumulative_net_cash": 0
        },
        {
          "day": 30,
          "event": "完成服务月并支付成本",
          "revenue": 10,
          "receivable": 120,
          "unearned": 110,
          "cumulative_service_cost": 6,
          "profit": 4,
          "cumulative_net_cash": -6
        },
        {
          "day": 60,
          "event": "完成服务月并支付成本",
          "revenue": 20,
          "receivable": 120,
          "unearned": 100,
          "cumulative_service_cost": 12,
          "profit": 8,
          "cumulative_net_cash": -12
        },
        {
          "day": 90,
          "event": "完成服务月并支付成本",
          "revenue": 30,
          "receivable": 120,
          "unearned": 90,
          "cumulative_service_cost": 18,
          "profit": 12,
          "cumulative_net_cash": -18
        },
        {
          "day": 120,
          "event": "收款；完成服务月并支付成本",
          "revenue": 40,
          "receivable": 0,
          "unearned": 80,
          "cumulative_service_cost": 24,
          "profit": 16,
          "cumulative_net_cash": 96
        },
        {
          "day": 150,
          "event": "完成服务月并支付成本",
          "revenue": 50,
          "receivable": 0,
          "unearned": 70,
          "cumulative_service_cost": 30,
          "profit": 20,
          "cumulative_net_cash": 90
        },
        {
          "day": 180,
          "event": "完成服务月并支付成本",
          "revenue": 60,
          "receivable": 0,
          "unearned": 60,
          "cumulative_service_cost": 36,
          "profit": 24,
          "cumulative_net_cash": 84
        },
        {
          "day": 210,
          "event": "完成服务月并支付成本",
          "revenue": 70,
          "receivable": 0,
          "unearned": 50,
          "cumulative_service_cost": 42,
          "profit": 28,
          "cumulative_net_cash": 78
        },
        {
          "day": 240,
          "event": "完成服务月并支付成本",
          "revenue": 80,
          "receivable": 0,
          "unearned": 40,
          "cumulative_service_cost": 48,
          "profit": 32,
          "cumulative_net_cash": 72
        },
        {
          "day": 270,
          "event": "完成服务月并支付成本",
          "revenue": 90,
          "receivable": 0,
          "unearned": 30,
          "cumulative_service_cost": 54,
          "profit": 36,
          "cumulative_net_cash": 66
        },
        {
          "day": 300,
          "event": "完成服务月并支付成本",
          "revenue": 100,
          "receivable": 0,
          "unearned": 20,
          "cumulative_service_cost": 60,
          "profit": 40,
          "cumulative_net_cash": 60
        },
        {
          "day": 330,
          "event": "完成服务月并支付成本",
          "revenue": 110,
          "receivable": 0,
          "unearned": 10,
          "cumulative_service_cost": 66,
          "profit": 44,
          "cumulative_net_cash": 54
        },
        {
          "day": 360,
          "event": "完成服务月并支付成本",
          "revenue": 120,
          "receivable": 0,
          "unearned": 0,
          "cumulative_service_cost": 72,
          "profit": 48,
          "cumulative_net_cash": 48
        }
      ],
      "maximum_funding_gap": 18,
      "ending_net_cash": 48,
      "profit": 48
    }
  },
  "prompt": "你正在教 BF-16《营运资本与现金周转》，材料版本2026-09-21. 学习任务：零售算两个364天代理和融资缺口；订阅恢复未实现收入滚动并重算延后收款的缺口.\n先确认读者所选主分支（默认retail）；required_readings只读common及该分支. all才读取全部主分支. optional只有读者启用后才变为必读. 先实际打开指定公开原文单元，分页读到单元结束，必要表图核原页，记录标题/版本/位置/范围与当前用途. 文献目录、工具返回标题或作者先前已读记录都不能代替本次读取；runtime_reading_log从空数组开始. 读取失败先找同版本正式等价原文，仍缺则说明该单元缺口，不凭摘要补讲.\n诊断任务：{\"retail\": \"核364天DIO/DPO部件；付款提前为教学交易安排100资金.\", \"subscription\": \"核Salesforce未实现收入滚动；90日收款的教学缺口12、利润48.\"}. 补充任务：所选教学合同改变收款日，先画履约与付款，再算融资前现金低点.\n随后沿本包完整正文、实际输入、静态实验与题解推进一个完整任务，先让读者解释或计算再反馈；已会的基础跳过. 默认先用所选公司同一原件的比较期完成迁移；跨公司对照只有读者启用后才补读另一公司完整单元. 通过尺度：Costco混合应收不生成客户DSO或CCC；订阅default30/90/120日对应0/12/18缺口，原年末余额不变.\n保持真实披露、分析计算、教学模型三种身份，参数只改变模型，不反写真实公司数据. 资料不足处不要补造差额或估值. 最后明确：读者已经能独立重建什么，换一份材料时还需先核哪些条件？",
  "selected_branch": "retail",
  "required_readings_by_branch": {
    "retail": [
      {
        "source_id": "BFDE-FINANCE",
        "title": "Principles of Finance §19.1 — What Is Working Capital?",
        "authors": [
          "Julie Dahlquist",
          "Rainford Knight",
          "OpenStax"
        ],
        "version": "2022, first-edition URL",
        "access": {
          "kind": "html_full_text",
          "uri": "https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital"
        },
        "required_unit": {
          "locator": "§19.1 The Cash Cycle and Working Capital Needs by Industry",
          "scope": "完整所用概念/公式及范围",
          "purpose": "先匹配科目和流量"
        },
        "supports": "平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据.",
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
          "locator": "IR FS pp35,37,39; policies pp41–42,46",
          "scope": "原表与应收构成、库存、成本、供应商考虑及CFO",
          "purpose": "零售代理及同材料资金任务"
        },
        "supports": "完整PP&E结构、租赁五视图与经营周转部件. PP&E现金/存量和租赁费用/特定现金的边界保留，混合应收不作为客户DSO.",
        "branch": "retail"
      }
    ],
    "subscription": [
      {
        "source_id": "BFDE-FINANCE",
        "title": "Principles of Finance §19.1 — What Is Working Capital?",
        "authors": [
          "Julie Dahlquist",
          "Rainford Knight",
          "OpenStax"
        ],
        "version": "2022, first-edition URL",
        "access": {
          "kind": "html_full_text",
          "uri": "https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital"
        },
        "required_unit": {
          "locator": "§19.1 The Cash Cycle and Working Capital Needs by Industry",
          "scope": "完整所用概念/公式及范围",
          "purpose": "先匹配科目和流量"
        },
        "supports": "平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据.",
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
          "locator": "MD&A Seasonal Nature pp39–40; BS p57; Note2 p71; Note7 Informatica acquired unearned",
          "scope": "完整季节性、余额及rollforward脚注、651来源",
          "purpose": "订阅资金时钟"
        },
        "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
        "branch": "subscription"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BFDE-FINANCE",
      "title": "Principles of Finance §19.1 — What Is Working Capital?",
      "authors": [
        "Julie Dahlquist",
        "Rainford Knight",
        "OpenStax"
      ],
      "version": "2022, first-edition URL",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital"
      },
      "required_unit": {
        "locator": "§19.1 The Cash Cycle and Working Capital Needs by Industry",
        "scope": "完整所用概念/公式及范围",
        "purpose": "先匹配科目和流量"
      },
      "supports": "平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据.",
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
        "locator": "IR FS pp35,37,39; policies pp41–42,46",
        "scope": "原表与应收构成、库存、成本、供应商考虑及CFO",
        "purpose": "零售代理及同材料资金任务"
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
        "locator": "MD&A Seasonal Nature pp39–40; BS p57; Note2 p71; Note7 Informatica acquired unearned",
        "scope": "完整季节性、余额及rollforward脚注、651来源",
        "purpose": "订阅资金时钟"
      },
      "supports": "研发含SBC、初步Informatica PPA、无形资产与商誉、租赁、单经营分部、开票收款季节性. 1,569累计摊销净变化与1,687费用分别列示.",
      "branch": "subscription"
    }
  ],
  "branch_selection_protocol": "网页已选分支和展开的选读优先；切换后以相应 required_readings_by_branch 的完整数组替换必读，cross/all才读取所有主分支. 运行日志从空开始.",
  "experiment_ids": [
    "EXP-BF16-CASH-CYCLES"
  ]
}
```

## Supplied entry
增长不只改变收入. 企业要在采购、生产、交付和收款之间安排资金，也可能先收到客户款项，再持续履约. 本篇把这些时间差放回业务过程：先明确我们选了哪些余额，再用相匹配的期间流量计算周转代理，最后观察改变付款或收款时间怎样改变资金需求.

共同部分加所选分支约需 15–20 分钟. 零售分支用 Costco 的库存与供应商应付；订阅分支用 Salesforce 的开票、收款与履约. 它们完成不同的业务资金周期，不用一套库存公式强行统一.

<a id="bf16-framework"></a>
## 1. 三个相关、但不同的对象

<strong>会计净营运资本</strong>通常指流动资产减流动负债；它提供整组短期资源与义务的视角. <strong>经营性营运资本</strong>是为一个经营问题选定的科目集合，必须说清是否包含应收、存货、预付、应付、客户预收以及其他项目. <strong>周转天数</strong>再把匹配的平均余额与期间流量相除，乘该期间天数，用来观察资金停留的速度. [^bf16-finance]

例如，库存的平均余额与销售成本有关；应付的平均余额应尽量对应赊购额. 若只能使用销售成本做代理，就要保留代理身份. 客户应收的天数则需要与客户赊销相匹配的应收和流量. 先核分子和分母，是为了让“天数”仍然有经营含义，而不是只做一个量纲恰好正确的除法.

在适用的库存销售业务中，现金转换周期可以写成存货天数加客户应收天数减应付天数. 但这个表达并不免除数据匹配、季节性和平均余额选择的问题. 两个年末余额的平均只是一个简化观察，不等于全年逐日平均，更不等于合同写明的付款期限.

<div data-reading-branch-controls>
<button type="button" data-select-reading-branch="retail">零售：Costco</button>
<button type="button" data-select-reading-branch="subscription">订阅：Salesforce</button>
<button type="button" data-select-reading-branch="all">两支对照</button>
</div>

<section data-reading-branch="retail">

<a id="CASE-BFDE-COST-BF16-20260921"></a>
<a id="bf16-retail"></a>
## 2. Costco：先跟货物和供应商款项走

Costco FY2025、FY2024 都是52周. 下面保留本次计算所需的原表行，金额单位为 USD M. 存货和应付是两个时点余额；merchandise costs 是 FY2025 的期间成本. [^bf16-cost]

| 原行及中文 | 2025-08-31 | 2024-09-01 |
|---|---:|---:|
| Merchandise inventories／商品存货 | 18,116 | 18,647 |
| Accounts payable／应付账款 | 19,783 | 19,421 |
| Receivables, net／应收净额 | 3,203 | 2,721 |
| Deferred membership fees／递延会员费 | 2,854 | 2,501 |

FY2025 `Merchandise costs` 为 239,886；两期天数基准均为 $52\times7=364$. 先仅选存货与应付，得到 $18,116-19,783=-1,667$，前期为 $18,647-19,421=-774$. 这是一组经营资金部件的净余额，不是整家公司的营运资本或流动性结论. 它把“货还在这里、部分款尚未给供应商”的关系放到一起.

### 用匹配的平均余额计算两个代理

存货平均余额为 $(18,116+18,647)/2=18,381.5$；应付平均余额为 $(19,783+19,421)/2=19,602$. 使用同一期间、同一天数基准：

| 本篇计算 | 公式 | 天数 |
|---|---|---:|
| 存货天数代理 | 18,381.5 ÷ 239,886 × 364 | 27.8919 |
| 应付天数代理 | 19,602 ÷ 239,886 × 364 | 29.7438 |
| 两项之差 | 27.8919 − 29.7438 | −1.8520 |

应付天数的分母是 <strong>merchandise costs 代理</strong>，并不是已取得的赊购额；该成本行也包含公司披露的运输、制造和有关作业成本. 27.89 与 29.74 帮助我们比较两个资金部件的规模及周转，但不是某一张供应商发票的实际账期. [^bf16-cost-policy]

为什么这里没有补一个客户 DSO？原件的应收净额包含供应商、信用卡奖励、再保险、第三方药房和其他应收；其他应收又主要与政府及税项有关. 信用卡奖励应收也不同于顾客刷卡货款. 直接把整行3,203除以总销售，会把不同权利混成客户欠款. 供应商应收通常又与应付分列，只有特定约定下才净结算，分析者不能先自行抵销. [^bf16-cost-policy]

因此，本篇的完整结果是：我们取得了两个明确口径的天数代理，<strong>没有取得可匹配的客户 DSO，故没有把 −1.8520 叫作完整现金转换周期</strong>. 发现某个指标目前不可识别，本身也是完成业务分析的一部分.

### 再回现金流核一层

存货减应付的余额变化是 −893，反向数为893；现金流量表的存货与应付调整却分别为559、404，合计963，比893多70. 这里保留原表数与未分解差额70，不把余额差直接宣称为实际现金释放. [^bf16-cost-cf]

### 零售分支的正向任务：改变付款时点

下面另设一笔教学交易，单位为教学金额，不是 M 美元，也不是 Costco 的真实账期. 第0天取得成本100的商品并形成应付；第20天以150赊销并结转100成本；第23天收款，第30天付供应商. 没有税费、其他现金或期初投入. 我们记录的是<strong>融资前累计净现金</strong>，若为负，其绝对低点表示最低外部资金需要，而非未经说明的负银行余额.

| 事件日 | 货物流转 | 现金动作 | 累计净现金 | 仍在账上的相关关系 |
|---|---|---:|---:|---|
| 0 | 存货+100 | 0 | 0 | 应付100 |
| 20 | 存货−100，确认销售与成本 | 0 | 0 | 客户应收150、应付100 |
| 23 | 无新增货物流转 | +150 | 150 | 应收结清，应付100 |
| 30 | 无新增货物流转 | −100 | 50 | 应付结清 |

默认路径所需外部资金为0，交易利润为50. 如果只把付款改为第10天，利润仍是50，但第10至23天累计净现金最低为−100，需要至少100资金承接. <strong>同一收入与利润，可以对应不同的资金路径.</strong>

### 零售练习与解析

把教学收款日从23改为35，付款仍在30. 先写最大资金缺口，再写交易结束的累计净现金. 解析：付款30日后为−100，35日收款后为50；最大缺口100. 再回真实数据，解释为何应付天数代理不能证明所有到期债务安全：代理概括的是所选余额与成本流，既没有每笔合同日历，也没有公司的完整付款安排.

</section>

<section data-reading-branch="subscription">

<a id="CASE-BFDE-CRM-BF16-20260921"></a>
<a id="bf16-subscription"></a>
## 3. Salesforce：资金先后顺序不沿库存周期

Salesforce FY2026 的 MD&A 描述其通常预先按年开票，典型付款期限为开票后30天；第四财季年度开票较集中，第一财季历史上通常是收款和经营现金流最强的季度. 这是公司的历史经营规律，并非每份合同必须遵守的条款. [^bf16-season]

同一期末，Accounts receivable, net 为14,339，Unearned revenue 为24,317；前期分别为11,945和20,743，单位 M 美元. 开票可能同时形成应收与尚待履约的合同负债；客户后来支付，才把应收换成现金；服务在约定期间完成，才逐步减少相应义务. 先把三件事画在不同轨道，才不会把未实现收入全部当成已收款.

Note 2 的完整采用滚动关系为：[^bf16-unearned]

| 原行 | FY2026， M 美元 |
|---|---:|
| Beginning unearned revenue／期初余额 | 20,743 |
| Billings and other／开票及其他 | +45,099 |
| Revenue recognized over time／随时间确认收入 | −39,041 |
| Revenue recognized at a point in time／时点确认收入 | −2,484 |
| Ending unearned revenue／期末余额 | 24,317 |

$20,743+45,099-39,041-2,484=24,317$. `other` 包含汇率、合同资产及企业合并影响；Informatica 取得余额中的651也进入相关范围. 因此45,099不能重命名为客户现金收款或纯有机开票. 期末未实现收入减应收为9,978，前期为8,798，但这两个差额也不是银行里可用的“预收现金”.

### 订阅分支的正向任务：把履约投入加进资金图

另设一份教学合同：第0天开票120，收款权已无条件；12个教学月均匀履约，每月30天、月末确认收入10，并支付员工服务成本6. 默认第30天收齐120. 同日约定先收款、再支付月末成本；没有退款、税费和其他业务. 以上均为教学演示条款，与 Salesforce 真实合同分开.

| 时点 | 累计收入 | 应收 | 尚待履约余额 | 融资前累计净现金 |
|---|---:|---:|---:|---:|
| 第0天开票 | 0 | 120 | 120 | 0 |
| 第30天完成首月并收款、支付成本 | 10 | 0 | 110 | 114 |
| 第60天 | 20 | 0 | 100 | 108 |
| 第360天服务完成 | 120 | 0 | 0 | 48 |

如果收款推迟到第90天，前两个月仍需各付6，融资前最低净现金为−12；第90天先收120再付第三个月成本，变为102；最终仍为48. 收入确认及总成本没有改变，资金缺口却出现了. 这比给订阅公司套一个库存 DIO 更直接地回答“增长期间由谁先垫钱”.

### 订阅练习与解析

保持所有履约与成本条款，把收款改为第120天. 前3个月累计支付18，所以最大缺口18；第四个月收款并支付成本后为96，全年仍为48. 若要用真实 Salesforce 数据分析季度缺口，应再取得季度开票、收款与支出材料，不能仅凭年末应收和未实现收入生成一条“真实季度现金曲线”.

</section>

<a id="bf16-experiment"></a>
## 4. 观察余额指标与事件路径的区别

<div data-experiment-slot="EXP-BF16-CASH-CYCLES"></div>

在零售视图，历史计算固定使用364天和真实平均余额，客户DSO位置明确显示“当前混合应收无法识别”；旁边的教学时间线才允许改付款和收款日. 在订阅视图，真实年末余额与滚动表保持不变，只改变明确标识的教学合同收款日. 每条图线旁都列出累计净现金和资金缺口，所以离开交互仍可用上面的静态表重算.

<a id="bf16-exercise"></a>
## 5. 完成自己的资金周期说明

<strong>综合任务. </strong>围绕所选业务，先列资金部件与时间线，再写一个可算指标和一个仍需材料的问题. 解释改变某个付款时点后，利润和资金缺口各怎样变化.

<strong>参考解析. </strong>零售路线可以交出27.8919天库存代理、29.7438天应付代理，明确客户DSO未识别，并用100成本／150销售的交易证明付款提前可产生100缺口. 订阅路线可以交出未实现收入24,317的原始滚动关系，明确它不是现金，并用120合同证明收款第90天时有12的缺口、全年利润仍为48. 两者都先让经营过程决定分析口径，再让公式服务这个过程.

[^bf16-finance]: Dahlquist & Knight, OpenStax *Principles of Finance* (2022)，§19.1 “What Is Working Capital?”，The Cash Cycle 与 Working Capital Needs by Industry. [公开全节](https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital). 本篇用案例财年364天并明确成本代理，不沿用教材历史公司数据.
[^bf16-cost]: Costco FY2025 公司年报，利润表／资产负债表／现金流表：PDF印刷pp35、37、39／物理pp41、43、45；[公司 PDF](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf). 同年[SEC 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)分别pp37、39、41. 取得日2026-09-21.
[^bf16-cost-policy]: 同一公司 PDF，Receivables, Net／Merchandise Inventories印刷pp41–42，Merchandise Costs／Vendor Consideration p46；SEC对应pp43–44、48. 包括credit card incentive、third-party pharmacy及其他应收，不能简写成全部客户货款.
[^bf16-cost-cf]: 同一 Costco 现金流量表，FY2025 inventory adjustment559、accounts payable404；70为本文两种口径的未分解核对差额.
[^bf16-season]: Salesforce FY2026 10-K，MD&A “Seasonal Nature of Unearned Revenue, Accounts Receivable and Operating Cash Flow”，pp39–40. [SEC 原件](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm). 取得日2026-09-21.
[^bf16-unearned]: 同一 Salesforce 原件，资产负债表p57；Note 2 Unearned Revenue p71的完整滚动与脚注、Note 7 Informatica取得未实现收入651. 年度截至2026-01-31；真实余额与教学合同分别标识.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>


## Additional teaching material
<a id="EXP-BF16-CASH-CYCLES"></a>
## BF-16｜营运资本与现金周转：静态实验

输入身份 `BFDE-SHARED-20260921-v1`. 公司金额单位为 USD M；教学设备、现金例和资本模型为教学金额；CVP 为美元.

### 固定Costco历史部件

| 输入或结果 | 值 |
|---|---|
| unit | USD M / days |
| period | FY2025 (52 weeks) |
| days | 364 |
| average_inventory | 18,381.5 |
| average_payables | 19,602 |
| denominator | 239,886 |
| denominator_identity | Merchandise costs proxy, not independently observed credit purchases |
| dio_proxy | 27.891857 |
| dpo_proxy | 29.743828 |
| two_proxy_difference | -1.851971 |
| dso | 不可识别／无定义 |
| ccc | 不可识别／无定义 |
| unidentified_reason | 混合应收不是可匹配的客户赊销应收；缺客户DSO，不能补0或构造完整CCC |
| two_row_balance_current | -1,667 |
| two_row_balance_previous | -774 |
| reverse_balance_change | 893 |
| cfo_two_rows | 963 |
| unallocated_difference | 70 |

### 零售：客户23日收款、供应商30日付款

| 相对日 | 事件 | 现金变化 | 融资前累计现金 | 存货 | 应收 | 应付 |
|---|---|---|---|---|---|---|
| 0 | 取得存货／应付 | 0 | 0 | 100 | 0 | 100 |
| 20 | 赊销并结转成本 | 0 | 0 | 0 | 150 | 100 |
| 23 | 收客户款 | 150 | 150 | 0 | 0 | 100 |
| 30 | 支付供应商 | -100 | 50 | 0 | 0 | 0 |

最低资金需要 0，交易利润 50，结束现金 50.

### 仅把供应商付款改10日

| 相对日 | 事件 | 现金变化 | 融资前累计现金 | 存货 | 应收 | 应付 |
|---|---|---|---|---|---|---|
| 0 | 取得存货／应付 | 0 | 0 | 100 | 0 | 100 |
| 10 | 支付供应商 | -100 | -100 | 100 | 0 | 0 |
| 20 | 赊销并结转成本 | 0 | -100 | 0 | 150 | 0 |
| 23 | 收客户款 | 150 | 50 | 0 | 0 | 0 |

最低资金需要 100，交易利润 50，结束现金 50.

### 仅把客户收款改35日

| 相对日 | 事件 | 现金变化 | 融资前累计现金 | 存货 | 应收 | 应付 |
|---|---|---|---|---|---|---|
| 0 | 取得存货／应付 | 0 | 0 | 100 | 0 | 100 |
| 20 | 赊销并结转成本 | 0 | 0 | 0 | 150 | 100 |
| 30 | 支付供应商 | -100 | -100 | 0 | 150 | 0 |
| 35 | 收客户款 | 150 | 50 | 0 | 0 | 0 |

最低资金需要 100，交易利润 50，结束现金 50.

### 订阅教学合同

第0日开票并形成无条件应收权120；12个服务月，每月30天、履约10、付成本6. 同日先收款后付服务成本. 真实Salesforce的20,743+45,099−39,041−2,484=24,317另有其公司范围，45,099的other不改称现金.

#### 30日收款

| 相对日 | 事件 | 累计收入 | 应收 | 未履约余额 | 累计净现金 |
|---|---|---|---|---|---|
| 0 | 开票／无条件应收权 | 0 | 120 | 120 | 0 |
| 30 | 收款；完成服务月并支付成本 | 10 | 0 | 110 | 114 |
| 60 | 完成服务月并支付成本 | 20 | 0 | 100 | 108 |
| 90 | 完成服务月并支付成本 | 30 | 0 | 90 | 102 |
| 120 | 完成服务月并支付成本 | 40 | 0 | 80 | 96 |
| 150 | 完成服务月并支付成本 | 50 | 0 | 70 | 90 |
| 180 | 完成服务月并支付成本 | 60 | 0 | 60 | 84 |
| 210 | 完成服务月并支付成本 | 70 | 0 | 50 | 78 |
| 240 | 完成服务月并支付成本 | 80 | 0 | 40 | 72 |
| 270 | 完成服务月并支付成本 | 90 | 0 | 30 | 66 |
| 300 | 完成服务月并支付成本 | 100 | 0 | 20 | 60 |
| 330 | 完成服务月并支付成本 | 110 | 0 | 10 | 54 |
| 360 | 完成服务月并支付成本 | 120 | 0 | 0 | 48 |

最低资金需要 0，合同利润 48，结束净现金 48.

#### 90日收款

| 相对日 | 事件 | 累计收入 | 应收 | 未履约余额 | 累计净现金 |
|---|---|---|---|---|---|
| 0 | 开票／无条件应收权 | 0 | 120 | 120 | 0 |
| 30 | 完成服务月并支付成本 | 10 | 120 | 110 | -6 |
| 60 | 完成服务月并支付成本 | 20 | 120 | 100 | -12 |
| 90 | 收款；完成服务月并支付成本 | 30 | 0 | 90 | 102 |
| 120 | 完成服务月并支付成本 | 40 | 0 | 80 | 96 |
| 150 | 完成服务月并支付成本 | 50 | 0 | 70 | 90 |
| 180 | 完成服务月并支付成本 | 60 | 0 | 60 | 84 |
| 210 | 完成服务月并支付成本 | 70 | 0 | 50 | 78 |
| 240 | 完成服务月并支付成本 | 80 | 0 | 40 | 72 |
| 270 | 完成服务月并支付成本 | 90 | 0 | 30 | 66 |
| 300 | 完成服务月并支付成本 | 100 | 0 | 20 | 60 |
| 330 | 完成服务月并支付成本 | 110 | 0 | 10 | 54 |
| 360 | 完成服务月并支付成本 | 120 | 0 | 0 | 48 |

最低资金需要 12，合同利润 48，结束净现金 48.

#### 120日收款

| 相对日 | 事件 | 累计收入 | 应收 | 未履约余额 | 累计净现金 |
|---|---|---|---|---|---|
| 0 | 开票／无条件应收权 | 0 | 120 | 120 | 0 |
| 30 | 完成服务月并支付成本 | 10 | 120 | 110 | -6 |
| 60 | 完成服务月并支付成本 | 20 | 120 | 100 | -12 |
| 90 | 完成服务月并支付成本 | 30 | 120 | 90 | -18 |
| 120 | 收款；完成服务月并支付成本 | 40 | 0 | 80 | 96 |
| 150 | 完成服务月并支付成本 | 50 | 0 | 70 | 90 |
| 180 | 完成服务月并支付成本 | 60 | 0 | 60 | 84 |
| 210 | 完成服务月并支付成本 | 70 | 0 | 50 | 78 |
| 240 | 完成服务月并支付成本 | 80 | 0 | 40 | 72 |
| 270 | 完成服务月并支付成本 | 90 | 0 | 30 | 66 |
| 300 | 完成服务月并支付成本 | 100 | 0 | 20 | 60 |
| 330 | 完成服务月并支付成本 | 110 | 0 | 10 | 54 |
| 360 | 完成服务月并支付成本 | 120 | 0 | 0 | 48 |

最低资金需要 18，合同利润 48，结束净现金 48.

负的融资前累计现金表示应安排融资，不是已观察到负银行账户余额. 零售与订阅不共享一个CCC公式.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF16-CASH-CYCLES",
    "title": "营运资本与现金周转：同源实验",
    "anchor": "bf16-experiment",
    "description": "历史DIO/DPO=平均余额/merchandise_costs*364，后者代理非采购额；DSO/CCC不可识别. 教学现金按日期累计，资金缺口=max(0,-最低累计现金)，同日先收后付；订阅另按30天月服务与成本.",
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
        "working_capital": {
          "unit": "USD M / days",
          "period": "FY2025 (52 weeks)",
          "days": 364,
          "average_inventory": 18381.5,
          "average_payables": 19602,
          "denominator": 239886,
          "denominator_identity": "Merchandise costs proxy, not independently observed credit purchases",
          "dio_proxy": 27.891856965391895,
          "dpo_proxy": 29.743828318451264,
          "two_proxy_difference": -1.85197135305937,
          "dso": null,
          "ccc": null,
          "unidentified_reason": "混合应收不是可匹配的客户赊销应收；缺客户DSO，不能补0或构造完整CCC",
          "two_row_balance_current": -1667,
          "two_row_balance_previous": -774,
          "reverse_balance_change": 893,
          "cfo_two_rows": 963,
          "unallocated_difference": 70
        },
        "retail": {
          "parameters": {
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
          "rows": [
            {
              "day": 0,
              "priority": 0,
              "event": "取得存货／应付",
              "amount": 0,
              "cumulative_net_cash": 0,
              "inventory": 100,
              "receivable": 0,
              "payable": 100,
              "profit": 0
            },
            {
              "day": 20,
              "priority": 1,
              "event": "赊销并结转成本",
              "amount": 0,
              "cumulative_net_cash": 0,
              "inventory": 0,
              "receivable": 150,
              "payable": 100,
              "profit": 50
            },
            {
              "day": 23,
              "priority": 2,
              "event": "收客户款",
              "amount": 150,
              "cumulative_net_cash": 150,
              "inventory": 0,
              "receivable": 0,
              "payable": 100,
              "profit": 50
            },
            {
              "day": 30,
              "priority": 3,
              "event": "支付供应商",
              "amount": -100,
              "cumulative_net_cash": 50,
              "inventory": 0,
              "receivable": 0,
              "payable": 0,
              "profit": 50
            }
          ],
          "maximum_funding_gap": 0,
          "ending_net_cash": 50,
          "profit": 50
        },
        "retail_early_payment": {
          "parameters": {
            "identity": "Author synthetic inventory/cash-timing example, not Costco days",
            "unit": "teaching currency units and relative days",
            "cost": 100,
            "price": 150,
            "acquire_day": 0,
            "sale_day": 20,
            "collect_day": 23,
            "pay_day": 10,
            "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
          },
          "rows": [
            {
              "day": 0,
              "priority": 0,
              "event": "取得存货／应付",
              "amount": 0,
              "cumulative_net_cash": 0,
              "inventory": 100,
              "receivable": 0,
              "payable": 100,
              "profit": 0
            },
            {
              "day": 10,
              "priority": 3,
              "event": "支付供应商",
              "amount": -100,
              "cumulative_net_cash": -100,
              "inventory": 100,
              "receivable": 0,
              "payable": 0,
              "profit": 0
            },
            {
              "day": 20,
              "priority": 1,
              "event": "赊销并结转成本",
              "amount": 0,
              "cumulative_net_cash": -100,
              "inventory": 0,
              "receivable": 150,
              "payable": 0,
              "profit": 50
            },
            {
              "day": 23,
              "priority": 2,
              "event": "收客户款",
              "amount": 150,
              "cumulative_net_cash": 50,
              "inventory": 0,
              "receivable": 0,
              "payable": 0,
              "profit": 50
            }
          ],
          "maximum_funding_gap": 100,
          "ending_net_cash": 50,
          "profit": 50
        },
        "retail_late_collection": {
          "parameters": {
            "identity": "Author synthetic inventory/cash-timing example, not Costco days",
            "unit": "teaching currency units and relative days",
            "cost": 100,
            "price": 150,
            "acquire_day": 0,
            "sale_day": 20,
            "collect_day": 35,
            "pay_day": 30,
            "order": "Day start: acquire, sell, collect, pay. Same-day effects follow this explicit convention; cumulative net cash can be negative as a financing-gap measure, not an observed bank balance."
          },
          "rows": [
            {
              "day": 0,
              "priority": 0,
              "event": "取得存货／应付",
              "amount": 0,
              "cumulative_net_cash": 0,
              "inventory": 100,
              "receivable": 0,
              "payable": 100,
              "profit": 0
            },
            {
              "day": 20,
              "priority": 1,
              "event": "赊销并结转成本",
              "amount": 0,
              "cumulative_net_cash": 0,
              "inventory": 0,
              "receivable": 150,
              "payable": 100,
              "profit": 50
            },
            {
              "day": 30,
              "priority": 3,
              "event": "支付供应商",
              "amount": -100,
              "cumulative_net_cash": -100,
              "inventory": 0,
              "receivable": 150,
              "payable": 0,
              "profit": 50
            },
            {
              "day": 35,
              "priority": 2,
              "event": "收客户款",
              "amount": 150,
              "cumulative_net_cash": 50,
              "inventory": 0,
              "receivable": 0,
              "payable": 0,
              "profit": 50
            }
          ],
          "maximum_funding_gap": 100,
          "ending_net_cash": 50,
          "profit": 50
        },
        "subscription": {
          "parameters": {
            "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
            "unit": "teaching currency units and relative 30-day months",
            "amount": 120,
            "invoice_day": 0,
            "collection_day": 30,
            "term_months": 12,
            "monthly_cost": 6,
            "month_days": 30,
            "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
          },
          "rows": [
            {
              "day": 0,
              "event": "开票／无条件应收权",
              "revenue": 0,
              "receivable": 120,
              "unearned": 120,
              "cumulative_service_cost": 0,
              "profit": 0,
              "cumulative_net_cash": 0
            },
            {
              "day": 30,
              "event": "收款；完成服务月并支付成本",
              "revenue": 10,
              "receivable": 0,
              "unearned": 110,
              "cumulative_service_cost": 6,
              "profit": 4,
              "cumulative_net_cash": 114
            },
            {
              "day": 60,
              "event": "完成服务月并支付成本",
              "revenue": 20,
              "receivable": 0,
              "unearned": 100,
              "cumulative_service_cost": 12,
              "profit": 8,
              "cumulative_net_cash": 108
            },
            {
              "day": 90,
              "event": "完成服务月并支付成本",
              "revenue": 30,
              "receivable": 0,
              "unearned": 90,
              "cumulative_service_cost": 18,
              "profit": 12,
              "cumulative_net_cash": 102
            },
            {
              "day": 120,
              "event": "完成服务月并支付成本",
              "revenue": 40,
              "receivable": 0,
              "unearned": 80,
              "cumulative_service_cost": 24,
              "profit": 16,
              "cumulative_net_cash": 96
            },
            {
              "day": 150,
              "event": "完成服务月并支付成本",
              "revenue": 50,
              "receivable": 0,
              "unearned": 70,
              "cumulative_service_cost": 30,
              "profit": 20,
              "cumulative_net_cash": 90
            },
            {
              "day": 180,
              "event": "完成服务月并支付成本",
              "revenue": 60,
              "receivable": 0,
              "unearned": 60,
              "cumulative_service_cost": 36,
              "profit": 24,
              "cumulative_net_cash": 84
            },
            {
              "day": 210,
              "event": "完成服务月并支付成本",
              "revenue": 70,
              "receivable": 0,
              "unearned": 50,
              "cumulative_service_cost": 42,
              "profit": 28,
              "cumulative_net_cash": 78
            },
            {
              "day": 240,
              "event": "完成服务月并支付成本",
              "revenue": 80,
              "receivable": 0,
              "unearned": 40,
              "cumulative_service_cost": 48,
              "profit": 32,
              "cumulative_net_cash": 72
            },
            {
              "day": 270,
              "event": "完成服务月并支付成本",
              "revenue": 90,
              "receivable": 0,
              "unearned": 30,
              "cumulative_service_cost": 54,
              "profit": 36,
              "cumulative_net_cash": 66
            },
            {
              "day": 300,
              "event": "完成服务月并支付成本",
              "revenue": 100,
              "receivable": 0,
              "unearned": 20,
              "cumulative_service_cost": 60,
              "profit": 40,
              "cumulative_net_cash": 60
            },
            {
              "day": 330,
              "event": "完成服务月并支付成本",
              "revenue": 110,
              "receivable": 0,
              "unearned": 10,
              "cumulative_service_cost": 66,
              "profit": 44,
              "cumulative_net_cash": 54
            },
            {
              "day": 360,
              "event": "完成服务月并支付成本",
              "revenue": 120,
              "receivable": 0,
              "unearned": 0,
              "cumulative_service_cost": 72,
              "profit": 48,
              "cumulative_net_cash": 48
            }
          ],
          "maximum_funding_gap": 0,
          "ending_net_cash": 48,
          "profit": 48
        },
        "subscription_late": {
          "parameters": {
            "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
            "unit": "teaching currency units and relative 30-day months",
            "amount": 120,
            "invoice_day": 0,
            "collection_day": 90,
            "term_months": 12,
            "monthly_cost": 6,
            "month_days": 30,
            "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
          },
          "rows": [
            {
              "day": 0,
              "event": "开票／无条件应收权",
              "revenue": 0,
              "receivable": 120,
              "unearned": 120,
              "cumulative_service_cost": 0,
              "profit": 0,
              "cumulative_net_cash": 0
            },
            {
              "day": 30,
              "event": "完成服务月并支付成本",
              "revenue": 10,
              "receivable": 120,
              "unearned": 110,
              "cumulative_service_cost": 6,
              "profit": 4,
              "cumulative_net_cash": -6
            },
            {
              "day": 60,
              "event": "完成服务月并支付成本",
              "revenue": 20,
              "receivable": 120,
              "unearned": 100,
              "cumulative_service_cost": 12,
              "profit": 8,
              "cumulative_net_cash": -12
            },
            {
              "day": 90,
              "event": "收款；完成服务月并支付成本",
              "revenue": 30,
              "receivable": 0,
              "unearned": 90,
              "cumulative_service_cost": 18,
              "profit": 12,
              "cumulative_net_cash": 102
            },
            {
              "day": 120,
              "event": "完成服务月并支付成本",
              "revenue": 40,
              "receivable": 0,
              "unearned": 80,
              "cumulative_service_cost": 24,
              "profit": 16,
              "cumulative_net_cash": 96
            },
            {
              "day": 150,
              "event": "完成服务月并支付成本",
              "revenue": 50,
              "receivable": 0,
              "unearned": 70,
              "cumulative_service_cost": 30,
              "profit": 20,
              "cumulative_net_cash": 90
            },
            {
              "day": 180,
              "event": "完成服务月并支付成本",
              "revenue": 60,
              "receivable": 0,
              "unearned": 60,
              "cumulative_service_cost": 36,
              "profit": 24,
              "cumulative_net_cash": 84
            },
            {
              "day": 210,
              "event": "完成服务月并支付成本",
              "revenue": 70,
              "receivable": 0,
              "unearned": 50,
              "cumulative_service_cost": 42,
              "profit": 28,
              "cumulative_net_cash": 78
            },
            {
              "day": 240,
              "event": "完成服务月并支付成本",
              "revenue": 80,
              "receivable": 0,
              "unearned": 40,
              "cumulative_service_cost": 48,
              "profit": 32,
              "cumulative_net_cash": 72
            },
            {
              "day": 270,
              "event": "完成服务月并支付成本",
              "revenue": 90,
              "receivable": 0,
              "unearned": 30,
              "cumulative_service_cost": 54,
              "profit": 36,
              "cumulative_net_cash": 66
            },
            {
              "day": 300,
              "event": "完成服务月并支付成本",
              "revenue": 100,
              "receivable": 0,
              "unearned": 20,
              "cumulative_service_cost": 60,
              "profit": 40,
              "cumulative_net_cash": 60
            },
            {
              "day": 330,
              "event": "完成服务月并支付成本",
              "revenue": 110,
              "receivable": 0,
              "unearned": 10,
              "cumulative_service_cost": 66,
              "profit": 44,
              "cumulative_net_cash": 54
            },
            {
              "day": 360,
              "event": "完成服务月并支付成本",
              "revenue": 120,
              "receivable": 0,
              "unearned": 0,
              "cumulative_service_cost": 72,
              "profit": 48,
              "cumulative_net_cash": 48
            }
          ],
          "maximum_funding_gap": 12,
          "ending_net_cash": 48,
          "profit": 48
        },
        "subscription_120": {
          "parameters": {
            "identity": "Author synthetic subscription funding example, not actual Salesforce contract",
            "unit": "teaching currency units and relative 30-day months",
            "amount": 120,
            "invoice_day": 0,
            "collection_day": 120,
            "term_months": 12,
            "monthly_cost": 6,
            "month_days": 30,
            "order": "Invoice and unconditional right at day0; each service month completed on day30*n; collection precedes same-day service cash cost. No refunds/tax, no costs before day30. Advances cover remaining service obligations."
          },
          "rows": [
            {
              "day": 0,
              "event": "开票／无条件应收权",
              "revenue": 0,
              "receivable": 120,
              "unearned": 120,
              "cumulative_service_cost": 0,
              "profit": 0,
              "cumulative_net_cash": 0
            },
            {
              "day": 30,
              "event": "完成服务月并支付成本",
              "revenue": 10,
              "receivable": 120,
              "unearned": 110,
              "cumulative_service_cost": 6,
              "profit": 4,
              "cumulative_net_cash": -6
            },
            {
              "day": 60,
              "event": "完成服务月并支付成本",
              "revenue": 20,
              "receivable": 120,
              "unearned": 100,
              "cumulative_service_cost": 12,
              "profit": 8,
              "cumulative_net_cash": -12
            },
            {
              "day": 90,
              "event": "完成服务月并支付成本",
              "revenue": 30,
              "receivable": 120,
              "unearned": 90,
              "cumulative_service_cost": 18,
              "profit": 12,
              "cumulative_net_cash": -18
            },
            {
              "day": 120,
              "event": "收款；完成服务月并支付成本",
              "revenue": 40,
              "receivable": 0,
              "unearned": 80,
              "cumulative_service_cost": 24,
              "profit": 16,
              "cumulative_net_cash": 96
            },
            {
              "day": 150,
              "event": "完成服务月并支付成本",
              "revenue": 50,
              "receivable": 0,
              "unearned": 70,
              "cumulative_service_cost": 30,
              "profit": 20,
              "cumulative_net_cash": 90
            },
            {
              "day": 180,
              "event": "完成服务月并支付成本",
              "revenue": 60,
              "receivable": 0,
              "unearned": 60,
              "cumulative_service_cost": 36,
              "profit": 24,
              "cumulative_net_cash": 84
            },
            {
              "day": 210,
              "event": "完成服务月并支付成本",
              "revenue": 70,
              "receivable": 0,
              "unearned": 50,
              "cumulative_service_cost": 42,
              "profit": 28,
              "cumulative_net_cash": 78
            },
            {
              "day": 240,
              "event": "完成服务月并支付成本",
              "revenue": 80,
              "receivable": 0,
              "unearned": 40,
              "cumulative_service_cost": 48,
              "profit": 32,
              "cumulative_net_cash": 72
            },
            {
              "day": 270,
              "event": "完成服务月并支付成本",
              "revenue": 90,
              "receivable": 0,
              "unearned": 30,
              "cumulative_service_cost": 54,
              "profit": 36,
              "cumulative_net_cash": 66
            },
            {
              "day": 300,
              "event": "完成服务月并支付成本",
              "revenue": 100,
              "receivable": 0,
              "unearned": 20,
              "cumulative_service_cost": 60,
              "profit": 40,
              "cumulative_net_cash": 60
            },
            {
              "day": 330,
              "event": "完成服务月并支付成本",
              "revenue": 110,
              "receivable": 0,
              "unearned": 10,
              "cumulative_service_cost": 66,
              "profit": 44,
              "cumulative_net_cash": 54
            },
            {
              "day": 360,
              "event": "完成服务月并支付成本",
              "revenue": 120,
              "receivable": 0,
              "unearned": 0,
              "cumulative_service_cost": 72,
              "profit": 48,
              "cumulative_net_cash": 48
            }
          ],
          "maximum_funding_gap": 18,
          "ending_net_cash": 48,
          "profit": 48
        }
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/default-results.json"
    },
    "algorithm": "历史DIO/DPO=平均余额/merchandise_costs*364，后者代理非采购额；DSO/CCC不可识别. 教学现金按日期累计，资金缺口=max(0,-最低累计现金)，同日先收后付；订阅另按30天月服务与成本.",
    "boundaries": "Costco混合应收不生成客户DSO或CCC；订阅default30/90/120日对应0/12/18缺口，原年末余额不变.",
    "local_url": "/notebook/labs/bf-de/interactions.html#EXP-BF16-CASH-CYCLES",
    "static_equivalent": {
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static.html#EXP-BF16-CASH-CYCLES",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-de/static-equivalents.md"
    }
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.
- [Costco Wholesale Corporation · 2025 Annual Report（股东年报 PDF）](https://s201.q4cdn.com/287523651/files/doc_financials/2025/ar/COST-Annual-Report-2025.pdf): Costco 2025 股东年报中的完整合并报表及附注. 与 SEC HTML 版使用同一组财务披露，但排版页码不同：资产负债表为印刷第37页、PDF第43页.
- [Principles of Finance §19.1 — What Is Working Capital?](https://openstax.org/books/principles-finance/pages/19-1-what-is-working-capital): 平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据.

## Content relations
```json
[
  {
    "from": "zh-bf16",
    "relation": "part_of",
    "to": "business-capital",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf16",
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
    "from": "zh-bf16",
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
    "from": "zh-bf16",
    "relation": "supported_by",
    "to": "BFDE-FINANCE",
    "reason": "指定原文支持本篇采用范围；不扩展为整份原件已读",
    "locator": [
      "§19.1 full section; The Cash Cycle; Working Capital Needs by Industry"
    ],
    "scope": "平均余额、相配流量、现金周期与行业差异. Costco使用364天且DPO为成本代理，不导入教材历史Walmart数据."
  },
  {
    "from": "zh-bf16",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-COST-BF16-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf16",
    "relation": "illustrated_by",
    "to": "CASE-BFDE-CRM-BF16-20260921",
    "reason": "固定期间的教学案例，不指向动态最新研究"
  },
  {
    "from": "zh-bf16",
    "relation": "uses_method",
    "to": "zh-bf12",
    "reason": "局部调用资源/计量/边界关系，可在本文补齐；不是整篇硬先修"
  },
  {
    "from": "bf16-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF16-CASH-CYCLES",
    "reason": "历史DIO/DPO=平均余额/merchandise_costs*364，后者代理非采购额；DSO/CCC不可识别. 教学现金按日期累计，资金缺口=max(0,-最低累计现金)，同日先收后付；订阅另按30天月服务与成本.",
    "at_section": "bf16-experiment",
    "conditions": "Costco混合应收不生成客户DSO或CCC；订阅default30/90/120日对应0/12/18缺口，原年末余额不变."
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 10/14
按零售或订阅业务重建资金先后顺序与可识别的周转部件.
经营资金的时钟明确之后，进一步对照债务到期和可操作资金.
Next: [债务结构、偿付能力与流动性](https://ou-liu-red-sugar.github.io/zh/notebook/debt-solvency-and-liquidity/)
