/* Generated from the staged shared_inputs.json. */
window.BFDE_INPUTS = {
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
};
