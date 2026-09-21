# 盈利质量、调整口径与比较

完整复算Salesforce官方GAAP/non-GAAP调节，辨清税额、SBC范围和分母；自选区只改变经营利润与利润率。

Entry: zh-bf20 | Node: BF-20 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你教授BF-20《盈利质量、调整口径与比较》，版本2026-09-21-review-v3，面对有微积分、线性代数与基本概率基础的高年级本科至研究生。使用本包同源全文，不另造一套事实。
本篇只有core主线，不要求选择不存在的行业。先读required_readings；研究框为可选，只有启用时才补读对应optional_readings。
先实际打开每项公开URL，读完required_unit包含的正文/表/脚注；记录标题、版本、定位、得到的关键设定。runtime_reading_log初始为空，不能把编辑的阅读回执当本次已读。只有摘要、登录页或访问失败不算完成；尝试正式等价入口，仍缺则说明具体单元并停止该范围的实质讲解。
当前分支任务：{"core": "先恢复官方经营桥与净利润桥；保留SBC后得10676，只剔摊销得10018。解释3480+29=3509，拒绝把完整税额-1313留给自选子集。"}
用一项完整真实材料任务诊断，不把四则运算拆成逐句考试。让读者先完成关系和解释，再对照同源题解反馈；已会内容直接跳过。实验的历史、分析计算和教学合同身份分开，所有默认输入来自supplied_inputs。解释必须包含原表定位、时间/单位和任务的正向完成。
最后问“读者只读完这个词条，真的能学明白吗？”用独立产出与迁移答案作检验，而不是给自评分。数字正确但混用时间、主体、税额或现金/股数时，指出具体误解并让读者修一份完整结果。不要把过程记录写进读者正文。

本篇特有边界：自选开关只重算OI和margin。官方NI/EPS/FCF固定。禁止按项目比例分摊-1313；22%属于FY26，20.5%属于FY27；3480+29=3509。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "node_id": "BF-20",
  "content_version": "2026-09-21-review-v3",
  "default_branch": "core",
  "branch_options": [
    "core"
  ],
  "branch_tasks": {
    "core": "先恢复官方经营桥与净利润桥；保留SBC后得10676，只剔摊销得10018。解释3480+29=3509，拒绝把完整税额-1313留给自选子集。"
  },
  "required_readings": [
    {
      "source_id": "BFFG-C05",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "GAAP/non-GAAP Reconciliations及EPS、FCF、Non-GAAP Financial Measures",
        "scope": "全部采用年度列、脚注、FY26/FY27税率说明",
        "purpose": "官方四桥与税率/股权薪酬范围"
      },
      "supports": "官方四桥与税率/股权薪酬范围",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "2026-02-25",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-01"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Statements of operations/equity/cash flows；Note13",
        "scope": "完整主表与EPS单元，Note12税前/费用采用表",
        "purpose": "回接原值、现金及期末/加权股数"
      },
      "supports": "回接原值、现金及期末/加权股数",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-02",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-02"
    },
    {
      "source_id": "BFFG-S03",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "100.01–100.06；102.05–07；102.10(a–c)；102.11",
        "scope": "每条完整问题与答案",
        "purpose": "披露/名称/一致性/税务边界"
      },
      "supports": "披露/名称/一致性/税务边界",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Non-GAAP Financial Measures — Compliance & Disclosure Interpretations",
      "authors": [
        "SEC Division of Corporation Finance"
      ],
      "version": "Last Update 2022-12-13",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-03"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BFFG-R02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s11142-026-09971-2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.2–3.3；§8试用及边界",
        "scope": "完整采用子节及试用方法",
        "purpose": "2024Q2试用范围；不是FY26评分"
      },
      "supports": "2024Q2试用范围；不是FY26评分",
      "branch": "research",
      "required_when": "所选扩展启用时",
      "title": "Beyond earnings quality: evaluating the quality of corporate disclosure practices",
      "authors": [
        "Patricia M. Dechow",
        "Weili Ge",
        "Wei Ting Loh",
        "Sarah McVay"
      ],
      "version": "RAST31(2026),1567–1637；published 2026-07-24",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-04",
      "activated_by": "research",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "schema_version": "BFFG-1.0",
    "content_version": "2026-09-21-review-v3",
    "cutoff": "2026-09-21",
    "identity_policy": "historical_observation / disclosed_non_gaap / analyst_arithmetic / hypothetical_contract 分列；未获取的未来现金及收益为null。",
    "sf_adjust": {
      "source_id": "BFFG-C05",
      "period": "FY2026 ended 2026-01-31",
      "unit": "USD million",
      "revenue": 41525,
      "gaap_oi": 8331,
      "adjustments": [
        {
          "id": "amort",
          "label": "Amortization of purchased intangibles",
          "label_zh": "购入无形资产摊销",
          "value": 1687
        },
        {
          "id": "sbc",
          "label": "Stock-based compensation expense",
          "label_zh": "股权薪酬（不含重组项内29）",
          "value": 3480
        },
        {
          "id": "restruct",
          "label": "Restructuring and acquisition-related costs",
          "label_zh": "重组与收购相关成本",
          "value": 658
        }
      ],
      "official_oi": 14156,
      "gaap_ni": 7457,
      "tax_effect": -1313,
      "official_ni": 11969,
      "gaap_pretax": 9520,
      "gaap_tax": 2063,
      "fy26_nongaap_tax_rate": 0.22,
      "fy27_guidance_nongaap_tax_rate": 0.205,
      "diluted_shares_m": 956,
      "official_eps": 12.52,
      "gaap_eps": 7.8,
      "cfo": 14996,
      "capex": 594,
      "fcf": 14402,
      "cfs_sbc": 3509,
      "restructuring_sbc": 29,
      "custom_scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
    },
    "tables": {
      "sf_adjust_oi": {
        "id": "SF-FY26-NONGAAP-OI",
        "title": "GAAP Results Reconciled to Non-GAAP Results — Operating income",
        "source_id": "BFFG-C05",
        "locator": "Exhibit 99.1：GAAP Results Reconciled to Non-GAAP Results；完整年度列（未复制季度列）",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "unit": "USD million",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "gaap",
            "label_original": "GAAP income from operations",
            "label_zh": "GAAP经营利润",
            "values": [
              8331,
              7205
            ],
            "kind": "total"
          },
          {
            "id": "amort",
            "label_original": "Amortization of purchased intangibles",
            "label_zh": "购入无形资产摊销",
            "values": [
              1687,
              1651
            ],
            "kind": "detail"
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation expense",
            "label_zh": "股权薪酬（不含另列重组股权薪酬）",
            "values": [
              3480,
              3181
            ],
            "kind": "detail"
          },
          {
            "id": "restruct",
            "label_original": "Restructuring and acquisition-related costs",
            "label_zh": "重组与收购相关成本",
            "values": [
              658,
              461
            ],
            "kind": "detail"
          },
          {
            "id": "adjusted",
            "label_original": "Non-GAAP income from operations",
            "label_zh": "公司non-GAAP经营利润",
            "values": [
              14156,
              12498
            ],
            "kind": "total"
          },
          {
            "id": "revenue",
            "label_original": "Total revenues",
            "label_zh": "收入分母",
            "values": [
              41525,
              37895
            ],
            "kind": "detail"
          },
          {
            "id": "gaapmargin",
            "label_original": "GAAP operating margin",
            "label_zh": "GAAP经营利润率（%）",
            "values": [
              20.1,
              19.0
            ],
            "kind": "detail"
          },
          {
            "id": "adjustedmargin",
            "label_original": "Non-GAAP operating margin",
            "label_zh": "公司non-GAAP经营利润率（%）",
            "values": [
              34.1,
              33.0
            ],
            "kind": "detail"
          }
        ],
        "notes": [
          "年度期间截至相应年份1月31日，非日历年；利润率是公司展示的取整百分数。",
          "SBC脚注(3)：FY26/FY25重组项内的29/2不在本表SBC剔除行，已经纳入重组与收购行。"
        ]
      },
      "sf_adjust_ni": {
        "id": "SF-FY26-NONGAAP-NI",
        "title": "GAAP Results Reconciled to Non-GAAP Results — Net income",
        "source_id": "BFFG-C05",
        "locator": "Exhibit 99.1 同名表及 Non-GAAP Financial Measures 中 Income Tax Effects and Adjustments",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "unit": "USD million",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "gaap",
            "label_original": "GAAP net income",
            "label_zh": "GAAP净利润",
            "values": [
              7457,
              6197
            ],
            "kind": "total"
          },
          {
            "id": "amort",
            "label_original": "Amortization of purchased intangibles",
            "label_zh": "购入无形资产摊销",
            "values": [
              1687,
              1651
            ],
            "kind": "detail"
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation expense",
            "label_zh": "股权薪酬（同一排除范围）",
            "values": [
              3480,
              3181
            ],
            "kind": "detail"
          },
          {
            "id": "restruct",
            "label_original": "Restructuring and acquisition-related costs",
            "label_zh": "重组与收购相关成本",
            "values": [
              658,
              461
            ],
            "kind": "detail"
          },
          {
            "id": "tax",
            "label_original": "Income tax effects and adjustments",
            "label_zh": "所得税影响及调整",
            "values": [
              -1313,
              -1560
            ],
            "kind": "detail"
          },
          {
            "id": "adjusted",
            "label_original": "Non-GAAP net income",
            "label_zh": "公司non-GAAP净利润",
            "values": [
              11969,
              9930
            ],
            "kind": "total"
          }
        ],
        "notes": [
          "这是官方完整组合；税额不作为可任意拆分的单项税收属性。"
        ]
      },
      "sf_adjust_eps": {
        "id": "SF-FY26-NONGAAP-EPS",
        "title": "GAAP Results Reconciled to Non-GAAP Results — Diluted EPS",
        "source_id": "BFFG-C05",
        "locator": "Exhibit 99.1 EPS调节与Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "unit": "USD/share；分母行另为million shares",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "gaap",
            "label_original": "GAAP diluted net income per share",
            "label_zh": "GAAP稀释EPS",
            "values": [
              7.8,
              6.36
            ],
            "kind": "total"
          },
          {
            "id": "amort",
            "label_original": "Amortization of purchased intangibles",
            "label_zh": "摊销每股调整",
            "values": [
              1.76,
              1.7
            ],
            "kind": "detail"
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation expense",
            "label_zh": "股权薪酬每股调整",
            "values": [
              3.64,
              3.27
            ],
            "kind": "detail"
          },
          {
            "id": "restruct",
            "label_original": "Restructuring and acquisition-related costs",
            "label_zh": "重组/收购每股调整",
            "values": [
              0.69,
              0.47
            ],
            "kind": "detail"
          },
          {
            "id": "tax",
            "label_original": "Income tax effects and adjustments",
            "label_zh": "所得税每股调整",
            "values": [
              -1.37,
              -1.6
            ],
            "kind": "detail"
          },
          {
            "id": "adjusted",
            "label_original": "Non-GAAP diluted net income per share",
            "label_zh": "公司non-GAAP稀释EPS",
            "values": [
              12.52,
              10.2
            ],
            "kind": "total"
          },
          {
            "id": "basic_shares",
            "label_original": "Shares used in computing basic net income per share",
            "label_zh": "GAAP与non-GAAP基本分母（百万股）",
            "values": [
              950,
              962
            ],
            "kind": "detail"
          },
          {
            "id": "diluted_shares",
            "label_original": "Shares used in computing diluted net income per share",
            "label_zh": "GAAP与non-GAAP稀释分母（百万股）",
            "values": [
              956,
              974
            ],
            "kind": "detail"
          }
        ],
        "notes": [
          "每股调整分别取整；FY26/FY25官方两种稀释EPS分别使用同一956/974百万股分母。"
        ]
      },
      "sf_fcf": {
        "id": "SF-FY26-FCF",
        "title": "Computation of Free Cash Flow, a Non-GAAP Measure",
        "source_id": "BFFG-C05",
        "locator": "Exhibit 99.1 Supplemental Cash Flow Information；完整年度列",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "unit": "USD million",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "cfo",
            "label_original": "GAAP net cash provided by operating activities",
            "label_zh": "GAAP经营现金流",
            "values": [
              14996,
              13092
            ],
            "kind": "detail"
          },
          {
            "id": "capex",
            "label_original": "Capital expenditures",
            "label_zh": "资本支出",
            "values": [
              -594,
              -658
            ],
            "kind": "detail"
          },
          {
            "id": "fcf",
            "label_original": "Free cash flow",
            "label_zh": "公司定义FCF",
            "values": [
              14402,
              12434
            ],
            "kind": "total"
          }
        ],
        "notes": []
      },
      "sf_cash": {
        "id": "sf_cash",
        "title": "Salesforce Consolidated Statements of Cash Flows",
        "source_id": "BFFG-C04",
        "locator": "Printed pp.61–62",
        "periods": [
          "FY2026 · 2026-01-31",
          "FY2025 · 2025-01-31",
          "FY2024 · 2024-01-31"
        ],
        "unit": "USD millions",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "op",
            "label_original": "Operating activities",
            "label_zh": "经营活动",
            "kind": "heading",
            "section": "cfo",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "net",
            "label_original": "Net income",
            "label_zh": "净利润",
            "kind": "detail",
            "section": "cfo",
            "values": [
              7457,
              6197,
              4136
            ]
          },
          {
            "id": "adjust",
            "label_original": "Adjustments to reconcile net income to net cash provided by operating activities",
            "label_zh": "由净利润调节至经营活动净现金",
            "kind": "heading",
            "section": "cfo",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "da",
            "label_original": "Depreciation and amortization (1)",
            "label_zh": "折旧和摊销（1）",
            "kind": "detail",
            "section": "cfo",
            "values": [
              3631,
              3477,
              3959
            ]
          },
          {
            "id": "contract_amort",
            "label_original": "Amortization of costs capitalized to obtain revenue contracts, net",
            "label_zh": "取得收入合同资本化成本的摊销净额",
            "kind": "detail",
            "section": "cfo",
            "values": [
              2197,
              2095,
              1925
            ]
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation expense",
            "label_zh": "股权薪酬费用",
            "kind": "detail",
            "section": "cfo",
            "values": [
              3509,
              3183,
              2787
            ]
          },
          {
            "id": "strategic",
            "label_original": "(Gains) losses on strategic investments, net",
            "label_zh": "战略投资收益／损失净额的现金流调整",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -1017,
              121,
              277
            ]
          },
          {
            "id": "changes",
            "label_original": "Changes in assets and liabilities, net of business combinations",
            "label_zh": "资产负债变动，扣除企业合并影响",
            "kind": "heading",
            "section": "cfo",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "ar",
            "label_original": "Accounts receivable, net",
            "label_zh": "应收款净额变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -2160,
              -490,
              -659
            ]
          },
          {
            "id": "contract_add",
            "label_original": "Costs capitalized to obtain revenue contracts, net",
            "label_zh": "取得收入合同的资本化成本净额变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -2811,
              -2121,
              -1872
            ]
          },
          {
            "id": "prepaid",
            "label_original": "Prepaid expenses and other current assets and other assets",
            "label_zh": "预付及其他资产变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              819,
              -1495,
              -843
            ]
          },
          {
            "id": "ap",
            "label_original": "Accounts payable and accrued expenses and other liabilities",
            "label_zh": "应付、应计费用及其他负债变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              1014,
              1089,
              -478
            ]
          },
          {
            "id": "lease",
            "label_original": "Operating lease liabilities",
            "label_zh": "经营租赁负债变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -567,
              -548,
              -621
            ]
          },
          {
            "id": "unearned",
            "label_original": "Unearned revenue",
            "label_zh": "未赚取收入变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              2924,
              1584,
              1623
            ]
          },
          {
            "id": "cfo",
            "label_original": "Net cash provided by operating activities",
            "label_zh": "经营活动产生净现金",
            "kind": "total",
            "section": "cfo",
            "values": [
              14996,
              13092,
              10234
            ]
          },
          {
            "id": "inv",
            "label_original": "Investing activities",
            "label_zh": "投资活动",
            "kind": "heading",
            "section": "cfi",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "acquisitions",
            "label_original": "Business combinations, net of cash acquired",
            "label_zh": "企业合并，扣取得现金",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -9268,
              -2734,
              -82
            ]
          },
          {
            "id": "strategic_purchases",
            "label_original": "Purchases of strategic investments",
            "label_zh": "购入战略投资",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -1958,
              -539,
              -496
            ]
          },
          {
            "id": "strategic_sales",
            "label_original": "Sales of strategic investments",
            "label_zh": "出售战略投资",
            "kind": "detail",
            "section": "cfi",
            "values": [
              184,
              126,
              108
            ]
          },
          {
            "id": "market_purchases",
            "label_original": "Purchases of marketable securities",
            "label_zh": "购入有价证券",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -3763,
              -6879,
              -3761
            ]
          },
          {
            "id": "market_sales",
            "label_original": "Sales of marketable securities",
            "label_zh": "出售有价证券",
            "kind": "detail",
            "section": "cfi",
            "values": [
              4414,
              4143,
              1511
            ]
          },
          {
            "id": "market_maturities",
            "label_original": "Maturities of marketable securities",
            "label_zh": "有价证券到期",
            "kind": "detail",
            "section": "cfi",
            "values": [
              2395,
              3378,
              2129
            ]
          },
          {
            "id": "capex",
            "label_original": "Capital expenditures",
            "label_zh": "资本支出",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -594,
              -658,
              -736
            ]
          },
          {
            "id": "cfi",
            "label_original": "Net cash used in investing activities",
            "label_zh": "投资活动使用净现金",
            "kind": "total",
            "section": "cfi",
            "values": [
              -8590,
              -3163,
              -1327
            ]
          },
          {
            "id": "fin",
            "label_original": "Financing activities",
            "label_zh": "筹资活动",
            "kind": "heading",
            "section": "cff",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "debtissue",
            "label_original": "Proceeds from issuance of debt, net of issuance costs",
            "label_zh": "发行债务所得，扣发行成本",
            "kind": "detail",
            "section": "cff",
            "values": [
              6000,
              0,
              0
            ]
          },
          {
            "id": "repurchases",
            "label_original": "Repurchases of common stock",
            "label_zh": "回购普通股现金",
            "kind": "detail",
            "section": "cff",
            "values": [
              -12596,
              -7829,
              -7620
            ]
          },
          {
            "id": "settlementtax",
            "label_original": "Payments for taxes related to net share settlement of equity awards",
            "label_zh": "股权奖励净额结算相关税款",
            "kind": "detail",
            "section": "cff",
            "values": [
              -351,
              0,
              0
            ]
          },
          {
            "id": "employee",
            "label_original": "Proceeds from employee stock plans",
            "label_zh": "员工股票计划所得",
            "kind": "detail",
            "section": "cff",
            "values": [
              1039,
              1540,
              1954
            ]
          },
          {
            "id": "financeprincipal",
            "label_original": "Principal payments on financing obligations",
            "label_zh": "融资义务本金支付",
            "kind": "detail",
            "section": "cff",
            "values": [
              -584,
              -603,
              -629
            ]
          },
          {
            "id": "debtrepay",
            "label_original": "Repayments of debt",
            "label_zh": "偿还债务",
            "kind": "detail",
            "section": "cff",
            "values": [
              0,
              -1000,
              -1182
            ]
          },
          {
            "id": "dividends",
            "label_original": "Payments of dividends and dividend equivalents",
            "label_zh": "股息及股息等价支付",
            "kind": "detail",
            "section": "cff",
            "values": [
              -1587,
              -1537,
              0
            ]
          },
          {
            "id": "cff",
            "label_original": "Net cash used in financing activities",
            "label_zh": "筹资活动使用净现金",
            "kind": "total",
            "section": "cff",
            "values": [
              -8079,
              -9429,
              -7477
            ]
          },
          {
            "id": "fx",
            "label_original": "Effect of exchange rate changes",
            "label_zh": "汇率变化影响",
            "kind": "detail",
            "section": "cash",
            "values": [
              152,
              -124,
              26
            ]
          },
          {
            "id": "change",
            "label_original": "Net increase (decrease) in cash and cash equivalents",
            "label_zh": "现金及等价物净增／减",
            "kind": "subtotal",
            "section": "cash",
            "values": [
              -1521,
              376,
              1456
            ]
          },
          {
            "id": "begin",
            "label_original": "Cash and cash equivalents, beginning of period",
            "label_zh": "期初现金及等价物",
            "kind": "balance",
            "section": "cash",
            "values": [
              8848,
              8472,
              7016
            ]
          },
          {
            "id": "end",
            "label_original": "Cash and cash equivalents, end of period",
            "label_zh": "期末现金及等价物",
            "kind": "balance",
            "section": "cash",
            "values": [
              7327,
              8848,
              8472
            ]
          },
          {
            "id": "supp",
            "label_original": "Supplemental cash flow disclosure",
            "label_zh": "补充现金流披露（不再加入合计）",
            "kind": "heading",
            "section": "supplement",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "paidinterest",
            "label_original": "Cash paid for interest",
            "label_zh": "已付利息",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              276,
              233,
              254
            ]
          },
          {
            "id": "paidtax",
            "label_original": "Cash paid for income taxes, net of tax refunds",
            "label_zh": "已付所得税，扣退款",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              1282,
              2061,
              1027
            ]
          }
        ],
        "notes": [
          "（1）D&A含取得无形资产摊销、固定资产折旧、使用权资产摊销及减值。",
          "资产与负债变动按原表扣除企业合并影响，不能直接用两个期末余额替换。",
          "现金集合为cash and cash equivalents。补充已付利息和税款已经体现在现金流中，不重复累加。"
        ],
        "aggregation_rules": [
          {
            "target": "cfo",
            "components": [
              "net",
              "da",
              "contract_amort",
              "sbc",
              "strategic",
              "ar",
              "contract_add",
              "prepaid",
              "ap",
              "lease",
              "unearned"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cfi",
            "components": [
              "acquisitions",
              "strategic_purchases",
              "strategic_sales",
              "market_purchases",
              "market_sales",
              "market_maturities",
              "capex"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cff",
            "components": [
              "debtissue",
              "repurchases",
              "settlementtax",
              "employee",
              "financeprincipal",
              "debtrepay",
              "dividends"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "change",
            "components": [
              "cfo",
              "cfi",
              "cff",
              "fx"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "end",
            "components": [
              "begin",
              "change"
            ],
            "operation": "signed_sum"
          }
        ],
        "retrieved_at": "2026-09-21",
        "provenance": "同会话已核原表输入复用；本批仍保留原标签、比较列与脚注。"
      }
    }
  },
  "entry_id": "zh-bf20",
  "selected_branch": "core",
  "required_readings_by_branch": {
    "core": [
      {
        "source_id": "BFFG-C05",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "GAAP/non-GAAP Reconciliations及EPS、FCF、Non-GAAP Financial Measures",
          "scope": "全部采用年度列、脚注、FY26/FY27税率说明",
          "purpose": "官方四桥与税率/股权薪酬范围"
        },
        "supports": "官方四桥与税率/股权薪酬范围",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "2026-02-25",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-01"
      },
      {
        "source_id": "BBC-C01",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Statements of operations/equity/cash flows；Note13",
          "scope": "完整主表与EPS单元，Note12税前/费用采用表",
          "purpose": "回接原值、现金及期末/加权股数"
        },
        "supports": "回接原值、现金及期末/加权股数",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce, Inc. FY2026 Form 10-K",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "FY ended 2026-01-31；filed 2026-03-02",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-02"
      },
      {
        "source_id": "BFFG-S03",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "100.01–100.06；102.05–07；102.10(a–c)；102.11",
          "scope": "每条完整问题与答案",
          "purpose": "披露/名称/一致性/税务边界"
        },
        "supports": "披露/名称/一致性/税务边界",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Non-GAAP Financial Measures — Compliance & Disclosure Interpretations",
        "authors": [
          "SEC Division of Corporation Finance"
        ],
        "version": "Last Update 2022-12-13",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-03"
      }
    ],
    "all": [
      {
        "source_id": "BFFG-C05",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "GAAP/non-GAAP Reconciliations及EPS、FCF、Non-GAAP Financial Measures",
          "scope": "全部采用年度列、脚注、FY26/FY27税率说明",
          "purpose": "官方四桥与税率/股权薪酬范围"
        },
        "supports": "官方四桥与税率/股权薪酬范围",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "2026-02-25",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-01"
      },
      {
        "source_id": "BBC-C01",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Statements of operations/equity/cash flows；Note13",
          "scope": "完整主表与EPS单元，Note12税前/费用采用表",
          "purpose": "回接原值、现金及期末/加权股数"
        },
        "supports": "回接原值、现金及期末/加权股数",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce, Inc. FY2026 Form 10-K",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "FY ended 2026-01-31；filed 2026-03-02",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-02"
      },
      {
        "source_id": "BFFG-S03",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "100.01–100.06；102.05–07；102.10(a–c)；102.11",
          "scope": "每条完整问题与答案",
          "purpose": "披露/名称/一致性/税务边界"
        },
        "supports": "披露/名称/一致性/税务边界",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Non-GAAP Financial Measures — Compliance & Disclosure Interpretations",
        "authors": [
          "SEC Division of Corporation Finance"
        ],
        "version": "Last Update 2022-12-13",
        "retrieved_at": "2026-09-21",
        "id": "BF20-READ-03"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BFFG-C05",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "GAAP/non-GAAP Reconciliations及EPS、FCF、Non-GAAP Financial Measures",
        "scope": "全部采用年度列、脚注、FY26/FY27税率说明",
        "purpose": "官方四桥与税率/股权薪酬范围"
      },
      "supports": "官方四桥与税率/股权薪酬范围",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "2026-02-25",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-01"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Statements of operations/equity/cash flows；Note13",
        "scope": "完整主表与EPS单元，Note12税前/费用采用表",
        "purpose": "回接原值、现金及期末/加权股数"
      },
      "supports": "回接原值、现金及期末/加权股数",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-02",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-02"
    },
    {
      "source_id": "BFFG-S03",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "100.01–100.06；102.05–07；102.10(a–c)；102.11",
        "scope": "每条完整问题与答案",
        "purpose": "披露/名称/一致性/税务边界"
      },
      "supports": "披露/名称/一致性/税务边界",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Non-GAAP Financial Measures — Compliance & Disclosure Interpretations",
      "authors": [
        "SEC Division of Corporation Finance"
      ],
      "version": "Last Update 2022-12-13",
      "retrieved_at": "2026-09-21",
      "id": "BF20-READ-03"
    }
  ],
  "source_id_aliases": {
    "BFFG-C01": "BF-S-COST-FY2025-SEC",
    "BFFG-C02": "BF-S-JPM-FY2025",
    "BFFG-C04": "BBC-C01",
    "BFFG-C06": "EIBC-S04",
    "BFFG-S05": "BF-S-SEC-GUIDE"
  },
  "shared_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
  "bibliography": [
    {
      "id": "BBC-C01",
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-02",
      "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
      "locators": [
        "Statements pp57–62",
        "Note 7 Informatica",
        "Note 9 Debt (pp82–83)",
        "Note 11 Share Repurchase Program p85",
        "Note 13 EPS"
      ]
    },
    {
      "id": "BFFG-C05",
      "title": "Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "2026-02-25",
      "url": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm",
      "locators": [
        "GAAP Results Reconciled to Non-GAAP Results",
        "Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share",
        "Computation of Free Cash Flow",
        "Non-GAAP Financial Measures—Income Tax Effects and Adjustments"
      ]
    },
    {
      "id": "BFFG-S03",
      "title": "Non-GAAP Financial Measures — Compliance & Disclosure Interpretations",
      "authors": [
        "SEC Division of Corporation Finance"
      ],
      "version": "Last Update 2022-12-13",
      "url": "https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures",
      "locators": [
        "100.01–100.06",
        "102.05–102.07",
        "102.10(a)–(c)",
        "102.11"
      ]
    },
    {
      "id": "BFFG-R02",
      "title": "Beyond earnings quality: evaluating the quality of corporate disclosure practices",
      "authors": [
        "Patricia M. Dechow",
        "Weili Ge",
        "Wei Ting Loh",
        "Sarah McVay"
      ],
      "version": "RAST31(2026),1567–1637；published 2026-07-24",
      "url": "https://link.springer.com/article/10.1007/s11142-026-09971-2",
      "locators": [
        "Introduction",
        "§3.2–3.3",
        "§8 pilot及实施边界"
      ]
    }
  ],
  "experiment_ids": [
    "EXP-BF20-REVERSIBLE-ADJUSTMENTS"
  ],
  "input_projection": {
    "schema": "notebook-input-projection-v1",
    "metadata_pointers": [
      "/schema_version",
      "/content_version",
      "/cutoff",
      "/identity_policy"
    ],
    "common_pointers": [
      "/sf_adjust",
      "/tables/sf_adjust_oi",
      "/tables/sf_adjust_ni",
      "/tables/sf_adjust_eps",
      "/tables/sf_fcf",
      "/tables/sf_cash"
    ],
    "branch_pointers": {
      "core": []
    },
    "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
    "rule": "同源完整对象/整表按篇及行业投影，不删表中行、列、期间、单位、脚注或已包含的题解；研究/迁移仍按原选读规则。",
    "scope": "Canonical packet contains the union for this entry; copy action projects the selected industry. Other entry data stays in the complete frozen public input."
  }
}
```

## Supplied entry
读到一家公司同时给出两种利润，我们不必先选“相信哪一个”。更有效的起点是问：它们各自计入了什么，为了回答什么问题，又有哪些事项被留在了图外？这篇用Salesforce FY2026的原始业绩公告，把经营利润、净利润、每股收益和自由现金流四组调节走完，再由读者撤销一项调整。完整学习约15–20分钟；研究选读可后看。

<a id="bf20-purpose"></a>
## 1. 一项调整先要有一个分析目的

<strong>报告质量</strong>关心计量、披露和呈现能否让人理解经营事实；<strong>盈利的持续性</strong>关心某个项目今后是否还会发生；<strong>可比性</strong>关心两期或两家公司是否使用相同口径。三者相关，却不是同一个尺度。某项费用真实发生、披露清楚，仍可能在下一年不再发生；某项没有当期现金支付的费用，也可能每年继续发生并改变股东权利。

因此我们从GAAP原值出发，保留一条可逆路径：原利润，加减具名项目，得到明确命名的补充指标。调整不是抹去事实，而是让某个比较更清楚。例如，要观察收购无形资产摊销前的经营结果，可以单独列出该摊销；但要判断现有收入由哪些资源支持，又必须回到取得这些资产的成本、使用寿命和未来投入。一个视角提供信息，不代表它取代了其他视角。

SEC对发行人的non-GAAP披露解释也围绕这些关系：原值及调节应清楚，名称不能歪曲计算，跨期处理要解释，税务影响要与指标匹配。经常性项目、现金项目或单方面只调坏消息，需要结合具体事实判断。它们是发行人披露要求，不是禁止读者自行研究的指令；我们这里采用的是保留原值和解释调整目的的方法。[^sec]

<a id="bf20-official-oi"></a>
## 2. 先完整恢复公司的经营利润桥

采用2026-02-25发布的FY2026 Q4及全年业绩公告Exhibit 99.1。下面摘选<strong>完整年度列</strong>，不混入同张原表的季度列。FY2026截至2026-01-31，FY2025截至2025-01-31；金额为百万美元。[^release]

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP income from operations</strong> | <strong>GAAP经营利润</strong> | <strong>8,331</strong> | <strong>7,205</strong> |
| Amortization of purchased intangibles | 购入无形资产摊销 | 1,687 | 1,651 |
| Stock-based compensation expense | 股权薪酬（不含另列重组股权薪酬） | 3,480 | 3,181 |
| Restructuring and acquisition-related costs | 重组与收购相关成本 | 658 | 461 |
| <strong>Non-GAAP income from operations</strong> | <strong>公司non-GAAP经营利润</strong> | <strong>14,156</strong> | <strong>12,498</strong> |
| Total revenues | 收入分母 | 41,525 | 37,895 |
| GAAP operating margin | GAAP经营利润率（%） | 20.1 | 19 |
| Non-GAAP operating margin | 公司non-GAAP经营利润率（%） | 34.1 | 33 |

单位：USD million。年度期间截至相应年份1月31日，非日历年；利润率是公司展示的取整百分数。 SBC脚注(3)：FY26/FY25重组项内的29/2不在本表SBC剔除行，已经纳入重组与收购行。

FY2026原经营利润8,331；加回1,687的购入无形资产摊销、3,480的特定范围股权薪酬，以及658的重组与收购相关成本，得到14,156。分母仍是同一份GAAP收入41,525。因此，金额复算的两种利润率分别为20.0626%和34.0903%，对应公告展示的20.1%和34.1%。

先看两期，而不是只看加回后较大的数。FY2025同类三项为1,651、3,181和461，官方补充利润为12,498。由此可以确认这些调整类别并非只在FY2026出现；但“类别连续出现”仍不能替代对具体收购、奖励和重组事项的分析。持续性应在项目层面判断，不能仅凭表里写了“调整”就把它认作一次性。

### 三项加回分别把什么移出了观察窗口

购入无形资产摊销是已取得资源的期间分摊；它没有在摊销当期重复发生同额收购现金支出，但这些技术和客户关系仍参与形成收入。公司自己的说明也承认它们支持收入。如果拿摊销前利润与内部研发企业比较，还须注意后者的研发或销售投入可能已直接费用化；仅移掉一边的资源成本，并不会自动得到更好的可比口径。[^release]

股权薪酬对应员工服务和可能的股东权利变化。把它从经营指标中排除，可以形成公司选定的补充视角，但不能把薪酬安排及股数影响一并删掉。重组与收购相关成本则可能同时含现金付款、非现金减值和其他成本；要判断它今后会否发生，应读所对应计划、交易和履行情况，而不只看科目名。

<a id="bf20-official-ni"></a>
## 3. 净利润和每股桥必须连同税与分母一起读

经营利润桥只处理这一层的费用。走到净利润时，公司还调整所得税，以下保留整条官方桥。[^release]

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP net income</strong> | <strong>GAAP净利润</strong> | <strong>7,457</strong> | <strong>6,197</strong> |
| Amortization of purchased intangibles | 购入无形资产摊销 | 1,687 | 1,651 |
| Stock-based compensation expense | 股权薪酬（同一排除范围） | 3,480 | 3,181 |
| Restructuring and acquisition-related costs | 重组与收购相关成本 | 658 | 461 |
| Income tax effects and adjustments | 所得税影响及调整 | (1,313) | (1,560) |
| <strong>Non-GAAP net income</strong> | <strong>公司non-GAAP净利润</strong> | <strong>11,969</strong> | <strong>9,930</strong> |

单位：USD million。这是官方完整组合；税额不作为可任意拆分的单项税收属性。

FY2026的计算为7,457＋1,687＋3,480＋658−1,313＝11,969。这一税额是整套指标的组成部分，不是可以随意留在任意三个开关后的“共同扣项”。公司的方法说明，FY2025和FY2026使用22.0%的长期预计non-GAAP税率，20.5%属于FY2027，不能前移到本期。[^taxmethod]

我们可以用本期税前利润9,520和GAAP税费2,063检查整桥的量级：

```text
调整后税前总额 = 9,520 + 1,687 + 3,480 + 658 = 15,345
按公司FY2026方法的税额 = 15,345 × 22% = 3,375.9
相对GAAP税费增加 = 3,375.9 − 2,063 = 1,312.9 ≈ 1,313
```

这解释了为什么−1,313不能固定跟随任何子集。若三个经营调整都关闭却仍扣它，会得到6,144，既不是GAAP7,457，也不是官方non-GAAP11,969。若未来要研究自选的税后口径，需要另给适用期间、税收假设和分母，而不是按加回金额比例分配这条税额。

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| <strong>GAAP diluted net income per share</strong> | <strong>GAAP稀释EPS</strong> | <strong>7.8</strong> | <strong>6.36</strong> |
| Amortization of purchased intangibles | 摊销每股调整 | 1.76 | 1.7 |
| Stock-based compensation expense | 股权薪酬每股调整 | 3.64 | 3.27 |
| Restructuring and acquisition-related costs | 重组/收购每股调整 | 0.69 | 0.47 |
| Income tax effects and adjustments | 所得税每股调整 | (1.37) | (1.6) |
| <strong>Non-GAAP diluted net income per share</strong> | <strong>公司non-GAAP稀释EPS</strong> | <strong>12.52</strong> | <strong>10.2</strong> |
| Shares used in computing basic net income per share | GAAP与non-GAAP基本分母（百万股） | 950 | 962 |
| Shares used in computing diluted net income per share | GAAP与non-GAAP稀释分母（百万股） | 956 | 974 |

单位：USD/share；分母行另为million shares。每股调整分别取整；FY26/FY25官方两种稀释EPS分别使用同一956/974百万股分母。

官方FY2026的两种稀释EPS都用956百万股：7,457÷956约7.80，11,969÷956约12.52。每股调节各行经过取整，比较时首先保留原表。年度基本分母950和稀释分母956又不同于期末在外929百万股；前两者是期间加权数量，最后一个是时点数量。换分母会同时换问题。[^shares]

<a id="bf20-scope"></a>
## 4. 一处脚注能避免怎样的重复计算

在现金流量表中，FY2026股权薪酬加回为3,509；业绩公告的剔除行却是3,480。乍看像冲突，但公告脚注(3)明确说明：另有29已包含在重组项中，所以3,480＋29＝3,509。如果把3,509全部填进经营利润桥，再保留完整658，就会把29重复加回。[^release]

| 事项 | 在这份调节中的位置 | 还要回到哪份材料 |
|---|---|---|
| 股权薪酬 | 3,480单列；29在重组项内 | 现金流加回3,509；权益、授予和股数 |
| 购入无形资产摊销 | 本期加回1,687 | 无形资产附注、过去收购及资源替换 |
| 重组与收购成本 | 加回658，含上述29 | 具体计划、交易范围、现金及非现金组成 |
| 税额 | 整套官方净利润调整−1,313 | FY2026的22%方法与GAAP税前/税费 |

现金流加回本身也不表示员工服务免费。Salesforce现金流还单列股权奖励净额结算相关税款351和回购现金12,596；这不是把它们全归为“消除股权薪酬”的理由，而是提醒我们薪酬费用、现金分类和股数是三组需要联读的证据。实验中的调整按钮只改变分析结果，不会真的支付现金或注销股份。[^cfs]

<a id="bf20-fcf"></a>
## 5. 自由现金流也有自己的定义边界

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| GAAP net cash provided by operating activities | GAAP经营现金流 | 14,996 | 13,092 |
| Capital expenditures | 资本支出 | (594) | (658) |
| <strong>Free cash flow</strong> | <strong>公司定义FCF</strong> | <strong>14,402</strong> | <strong>12,434</strong> |

单位：USD million。

公司这里将FCF定义为经营现金流减资本支出，14,996−594＝14,402。这个等式能完整复算，但它没有扣去本年9,268的企业合并净现金支出，也不替代债务、分红或其他融资安排。FCF不是从所有义务中扣剩的“任意可分配资金”。SEC的相关解释特别要求说明定义与调节，并提醒不同公司的FCF口径可能不同。[^fcf]

这也说明盈利质量不能只用“净利润与FCF接近不接近”判断。订阅业务的开票、收款与履约时间，以及合同取得成本资本化等项目，会进入经营现金流；收购形成的资源则在另一类现金流里。比较之前先恢复这些路径，才知道差额在说明什么。

<a id="bf20-experiment"></a>
## 6. 现在撤销一项，写出自己的理由

实验固定显示四条官方桥；读者自选区只重算经营利润和收入分母下的利润率。默认启用全部三项，得到公司官方经营口径。将股权薪酬排除开关关闭，相当于把该费用重新纳入：14,156−3,480＝10,676，利润率25.7098%。全部关闭则回到8,331和20.0626%。

<div data-experiment-slot="EXP-BF20-REVERSIBLE-ADJUSTMENTS"></div>

与开关一同写下的应是一句目的说明。例如：“为了观察保留员工薪酬后的经营结果，我保留股权薪酬费用，同时暂时剔除购入无形资产摊销和重组/收购项；所得10,676是这个特定比较口径，不代表它已完成未来盈利正常化。”下一步再追问剔除项的持续性，才会从算术走向分析。

<a id="bf20-exercise"></a>
## 7. 解释题与跨期迁移

<strong>任务一：</strong>只剔除摊销，保留其他所有费用。给出FY2026经营利润及利润率，并指出为什么不能直接沿用−1,313税额。

<strong>任务二：</strong>对FY2025也采用“保留股权薪酬、剔除其他两项”的同一口径，计算两期经营利润。两者比较改善了什么，又还没解决什么？

<strong>任务三：</strong>有人把现金流的3,509填进non-GAAP桥，结果比14,156多29。找出错误，并说明为何不能简单把某张表判为不可靠。

<details><summary>展开完整解析</summary>

任务一：8,331＋1,687＝10,018；10,018÷41,525＝24.1252%。−1,313是官方完整三项组合与公司税率方法共同产生的税后调节，不是摊销这一项的独立税收属性。本任务不生成自选净利润或EPS。

任务二：FY2025为12,498−3,181＝9,317；FY2026为10,676，增加1,359，约14.59%。统一处理改善了指标口径的一致性，却还没有证明重组成本永不重复、并购摊销与内部资源投入经济上完全等价。它也没有改变真实现金或股数。可以把同口径结果当作后续经营状态分析的输入，不把它自动命名为未来正常盈利。

任务三：29已进入658重组/收购项。再用3,509取代3,480会重复剔除29。应按脚注恢复3,480＋29＝3,509的范围关系，而不是凭两个接近的数字宣告原件冲突。

</details>

<details data-agent-option="research"><summary>研究选读：透明度、持续性和分母为什么要一起读</summary>
<a id="bf20-research"></a>

Dechow、Ge、Loh和McVay（2026）的披露质量框架把调节透明度、剔除项目、分母和其他披露渠道联系起来，也承认non-GAAP既可能提供信息，也可能掩盖经营成本。其18家公司试用对应2024Q2，虽含Salesforce和Adobe，却不是本篇FY2026的公司评价；某些难编码指标还未进入试用评分。这里借用的是联读问题，不是一个自动质量分数。[^research]

</details>

[^sec]: SEC Division of Corporation Finance，[Non-GAAP Financial Measures CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，100.01–100.06、102.05–102.07、102.10(a–c)、102.11；页面Last Update 2022-12-13。
[^release]: [Salesforce FY2026 Q4/FY Results，Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，2026-02-25，GAAP Results Reconciled to Non-GAAP Results的完整年度列、费用明细及脚注(1)–(3)。
[^taxmethod]: 同份[Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Non-GAAP Financial Measures—Income Tax Effects and Adjustments；FY2025/FY2026 22%，FY2027 20.5%。配合[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)利润表及Note 12的9,520/2,063，仅用于本例整桥核对。
[^shares]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share；[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)权益表及Note 13。百万股与美元/股分开。
[^cfs]: [Salesforce FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows，FY2026列；股权奖励现金税、回购与经营加回分别保留。
[^fcf]: [Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm)，Computation of Free Cash Flow及定义；[SEC CFIs](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures)，102.07。公司FCF是补充指标而非所有剩余资金。
[^research]: Dechow、Ge、Loh、McVay，[Beyond earnings quality: evaluating the quality of corporate disclosure practices](https://link.springer.com/article/10.1007/s11142-026-09971-2)，Review of Accounting Studies 31（2026），1567–1637，§3.2–3.3及§8的2024Q2试用范围；2026-07-24出版。

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>


## Additional teaching material
## 利润调整：八个可选组合与固定官方税后桥

以下三个布尔值分别表示剔除摊销、股权薪酬、重组/收购费用。收入分母始终41,525。

| 摊销 | SBC | 重组/收购 | 自选OI | 利润率% |
|---|---|---|---|---|
| 否 | 否 | 否 | 8331 | 20.0626 |
| 是 | 否 | 否 | 10018 | 24.1252 |
| 否 | 是 | 否 | 11811 | 28.4431 |
| 是 | 是 | 否 | 13498 | 32.5057 |
| 否 | 否 | 是 | 8989 | 21.6472 |
| 是 | 否 | 是 | 10676 | 25.7098 |
| 否 | 是 | 是 | 12469 | 30.0277 |
| 是 | 是 | 是 | 14156 | 34.0903 |

官方完整净利润7,457＋1,687＋3,480＋658−1,313＝11,969；官方稀释EPS11,969÷956≈12.52。两者不随自选开关改变，不能作为自选组合的税后结果。FY26为22%方法，FY27的20.5%不得前移。3,480＋29＝3,509。公司FCF14,996−594＝14,402。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF20-REVERSIBLE-ADJUSTMENTS",
    "title": "经营利润可逆调整",
    "anchor": "bf20-experiment",
    "description": "三项开关只计算OI和margin；四条官方桥固定可查。",
    "inputs": {
      "provided_by": "agent_packet.supplied_inputs",
      "selection": "agent_packet.selected_branch",
      "pointer_contract": "agent_packet.input_projection",
      "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
      "scope": "实际输入已在同一教学包中提供一次；当前 experiment 通过上述绑定复用，不复制第二份表格。"
    },
    "algorithm": "OI=8331+被选择项目之和；margin=OI/41525。",
    "boundaries": "没有自选NI/EPS；-1313税额不分配、不留给任意子集；不更改现金/股数。",
    "outputs": {
      "default": {
        "identity": "analyst_selected_operating_measure",
        "selected": {
          "amort": true,
          "sbc": true,
          "restruct": true
        },
        "oi": 14156,
        "margin_pct": 34.09030704394943,
        "revenue": 41525,
        "adjustments": [
          {
            "id": "amort",
            "label": "Amortization of purchased intangibles",
            "label_zh": "购入无形资产摊销",
            "value": 1687
          },
          {
            "id": "sbc",
            "label": "Stock-based compensation expense",
            "label_zh": "股权薪酬（不含重组项内29）",
            "value": 3480
          },
          {
            "id": "restruct",
            "label": "Restructuring and acquisition-related costs",
            "label_zh": "重组与收购相关成本",
            "value": 658
          }
        ],
        "official": {
          "oi": 14156,
          "ni": 11969,
          "eps": 12.52,
          "fcf": 14402,
          "gaap_ni": 7457,
          "gaap_eps": 7.8,
          "diluted_shares_m": 956,
          "tax_effect": -1313
        },
        "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
      },
      "all_combinations": [
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": false,
            "sbc": false,
            "restruct": false
          },
          "oi": 8331,
          "margin_pct": 20.06261288380494,
          "revenue": 41525,
          "adjustments": [],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": true,
            "sbc": false,
            "restruct": false
          },
          "oi": 10018,
          "margin_pct": 24.125225767609873,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "amort",
              "label": "Amortization of purchased intangibles",
              "label_zh": "购入无形资产摊销",
              "value": 1687
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": false,
            "sbc": true,
            "restruct": false
          },
          "oi": 11811,
          "margin_pct": 28.44310656231186,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "sbc",
              "label": "Stock-based compensation expense",
              "label_zh": "股权薪酬（不含重组项内29）",
              "value": 3480
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": true,
            "sbc": true,
            "restruct": false
          },
          "oi": 13498,
          "margin_pct": 32.5057194461168,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "amort",
              "label": "Amortization of purchased intangibles",
              "label_zh": "购入无形资产摊销",
              "value": 1687
            },
            {
              "id": "sbc",
              "label": "Stock-based compensation expense",
              "label_zh": "股权薪酬（不含重组项内29）",
              "value": 3480
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": false,
            "sbc": false,
            "restruct": true
          },
          "oi": 8989,
          "margin_pct": 21.64720048163757,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "restruct",
              "label": "Restructuring and acquisition-related costs",
              "label_zh": "重组与收购相关成本",
              "value": 658
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": true,
            "sbc": false,
            "restruct": true
          },
          "oi": 10676,
          "margin_pct": 25.709813365442503,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "amort",
              "label": "Amortization of purchased intangibles",
              "label_zh": "购入无形资产摊销",
              "value": 1687
            },
            {
              "id": "restruct",
              "label": "Restructuring and acquisition-related costs",
              "label_zh": "重组与收购相关成本",
              "value": 658
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": false,
            "sbc": true,
            "restruct": true
          },
          "oi": 12469,
          "margin_pct": 30.02769416014449,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "sbc",
              "label": "Stock-based compensation expense",
              "label_zh": "股权薪酬（不含重组项内29）",
              "value": 3480
            },
            {
              "id": "restruct",
              "label": "Restructuring and acquisition-related costs",
              "label_zh": "重组与收购相关成本",
              "value": 658
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        },
        {
          "identity": "analyst_selected_operating_measure",
          "selected": {
            "amort": true,
            "sbc": true,
            "restruct": true
          },
          "oi": 14156,
          "margin_pct": 34.09030704394943,
          "revenue": 41525,
          "adjustments": [
            {
              "id": "amort",
              "label": "Amortization of purchased intangibles",
              "label_zh": "购入无形资产摊销",
              "value": 1687
            },
            {
              "id": "sbc",
              "label": "Stock-based compensation expense",
              "label_zh": "股权薪酬（不含重组项内29）",
              "value": 3480
            },
            {
              "id": "restruct",
              "label": "Restructuring and acquisition-related costs",
              "label_zh": "重组与收购相关成本",
              "value": 658
            }
          ],
          "official": {
            "oi": 14156,
            "ni": 11969,
            "eps": 12.52,
            "fcf": 14402,
            "gaap_ni": 7457,
            "gaap_eps": 7.8,
            "diluted_shares_m": 956,
            "tax_effect": -1313
          },
          "scope": "Only operating income and margin; no custom NI/EPS or cash/share mutations."
        }
      ]
    },
    "static_equivalent": "## 利润调整：八个可选组合与固定官方税后桥\n\n以下三个布尔值分别表示剔除摊销、股权薪酬、重组/收购费用。收入分母始终41,525。\n\n| 摊销 | SBC | 重组/收购 | 自选OI | 利润率% |\n|---|---|---|---|---|\n| 否 | 否 | 否 | 8331 | 20.0626 |\n| 是 | 否 | 否 | 10018 | 24.1252 |\n| 否 | 是 | 否 | 11811 | 28.4431 |\n| 是 | 是 | 否 | 13498 | 32.5057 |\n| 否 | 否 | 是 | 8989 | 21.6472 |\n| 是 | 否 | 是 | 10676 | 25.7098 |\n| 否 | 是 | 是 | 12469 | 30.0277 |\n| 是 | 是 | 是 | 14156 | 34.0903 |\n\n官方完整净利润7,457＋1,687＋3,480＋658−1,313＝11,969；官方稀释EPS11,969÷956≈12.52。两者不随自选开关改变，不能作为自选组合的税后结果。FY26为22%方法，FY27的20.5%不得前移。3,480＋29＝3,509。公司FCF14,996−594＝14,402。\n",
    "source_id_aliases": {
      "BFFG-C01": "BF-S-COST-FY2025-SEC",
      "BFFG-C02": "BF-S-JPM-FY2025",
      "BFFG-C04": "BBC-C01",
      "BFFG-C06": "EIBC-S04",
      "BFFG-S05": "BF-S-SEC-GUIDE"
    },
    "local_url": "/notebook/labs/bf-fg/interactions.html?experiment=EXP-BF20-REVERSIBLE-ADJUSTMENTS"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注。金额、现金和股数口径保留，不虚构差额调节。

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列。
- [Salesforce Announces Fourth Quarter and Fiscal Year 2026 Results — Exhibit 99.1](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000056/crm-q4fy26xexhibit991.htm): FY26税率22%，FY27为20.5%；公司完整税后桥固定；SBC3480+重组29=3509。
- [Beyond earnings quality: evaluating the quality of corporate disclosure practices](https://link.springer.com/article/10.1007/s11142-026-09971-2): 透明度、项目持续性、分母和其他披露的联读框架；18家公司试用是2024Q2，不是Salesforce FY26评价。
- [Non-GAAP Financial Measures — Compliance & Disclosure Interpretations](https://www.sec.gov/rules-regulations/staff-guidance/corporation-finance-interpretations/non-gaap-financial-measures): 发行人披露的透明度、一致性、名称/计量、GAAP显著性、FCF及税项边界；不是公司质量评级。

## Content relations
```json
[
  {
    "from": "zh-bf20",
    "relation": "part_of",
    "to": "business-reports",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf20",
    "relation": "illustrated_by",
    "to": "bf20-official-oi",
    "reason": "同一正文中的具名期间案例"
  },
  {
    "from": "bf20-official-oi",
    "relation": "supported_by",
    "to": "BFFG-C05",
    "reason": "原表支持本例",
    "locator": [
      "GAAP Results Reconciled to Non-GAAP Results",
      "Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share",
      "Computation of Free Cash Flow",
      "Non-GAAP Financial Measures—Income Tax Effects and Adjustments"
    ],
    "scope": "2026-01-31材料"
  },
  {
    "from": "bf20-official-oi",
    "relation": "supported_by",
    "to": "BFFG-C05",
    "reason": "FY26税率22%，FY27为20.5%；公司完整税后桥固定；SBC3480+重组29=3509。",
    "locator": [
      "GAAP Results Reconciled to Non-GAAP Results",
      "Computation of Basic and Diluted GAAP and Non-GAAP Net Income Per Share",
      "Computation of Free Cash Flow",
      "Non-GAAP Financial Measures—Income Tax Effects and Adjustments"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf20-official-oi"
  },
  {
    "from": "bf20-scope",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列。",
    "locator": [
      "Statements pp57–62",
      "Note 7 Informatica",
      "Note 9 Debt (pp82–83)",
      "Note 11 Share Repurchase Program p85",
      "Note 13 EPS"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf20-scope"
  },
  {
    "from": "bf20-purpose",
    "relation": "supported_by",
    "to": "BFFG-S03",
    "reason": "发行人披露的透明度、一致性、名称/计量、GAAP显著性、FCF及税项边界；不是公司质量评级。",
    "locator": [
      "100.01–100.06",
      "102.05–102.07",
      "102.10(a)–(c)",
      "102.11"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf20-purpose"
  },
  {
    "from": "bf20-research",
    "relation": "supported_by",
    "to": "BFFG-R02",
    "reason": "透明度、项目持续性、分母和其他披露的联读框架；18家公司试用是2024Q2，不是Salesforce FY26评价。",
    "locator": [
      "Introduction",
      "§3.2–3.3",
      "§8 pilot及实施边界"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf20-research"
  },
  {
    "from": "bf20-official-ni",
    "relation": "uses_method",
    "to": "zh-bf08",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf20-official-ni"
  },
  {
    "from": "bf20-scope",
    "relation": "uses_method",
    "to": "zh-bf09",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf20-scope"
  },
  {
    "from": "bf20-exercise",
    "relation": "informs",
    "to": "zh-p28",
    "reason": "透明会计调整提供输入，不替代经营状态和条件定价",
    "at_section": "bf20-exercise"
  },
  {
    "from": "bf20-exercise",
    "relation": "informs",
    "to": "zh-p29",
    "reason": "透明会计调整提供输入，不替代经营状态和条件定价",
    "at_section": "bf20-exercise"
  },
  {
    "from": "bf20-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF20-REVERSIBLE-ADJUSTMENTS",
    "at_section": "bf20-experiment",
    "reason": "三项开关只计算OI和margin；四条官方桥固定可查。",
    "conditions": "没有自选NI/EPS；-1313税额不分配、不留给任意子集；不更改现金/股数。"
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 12/14
从官方完整四桥出发，撤销一项经营调整并解释税额、现金与分母边界。
盈利与现金的口径明确后，把完整资金账连接到资本的具体用途。
Next: [再投资、融资与资本配置](https://ou-liu-red-sugar.github.io/zh/notebook/reinvestment-financing-and-capital-allocation/)
