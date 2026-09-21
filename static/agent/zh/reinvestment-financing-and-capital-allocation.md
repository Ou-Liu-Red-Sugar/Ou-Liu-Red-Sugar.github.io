# 再投资、融资与资本配置

完整恢复真实资金来源29028与用途30701，把FX单列；从同一初始账本比较留存、偿债、设施投入和回购。

Entry: zh-bf21 | Node: BF-21 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你教授BF-21《再投资、融资与资本配置》，版本2026-09-21-review-v3，面对有微积分、线性代数与基本概率基础的高年级本科至研究生。使用本包同源全文，不另造一套事实。
本篇只有core主线，不要求选择不存在的行业。先读required_readings；研究框为可选，只有启用时才补读对应optional_readings。
先实际打开每项公开URL，读完required_unit包含的正文/表/脚注；记录标题、版本、定位、得到的关键设定。runtime_reading_log初始为空，不能把编辑的阅读回执当本次已读。只有摘要、登录页或访问失败不算完成；尝试正式等价入口，仍缺则说明具体单元并停止该范围的实质讲解。
当前分支任务：{"core": "闭合Salesforce三类净现金流-1673和FX152；CFO展开须替换整体。用同一起点算四种3000用途，再以1200预算复算回购，不判断未知财富变化。"}
用一项完整真实材料任务诊断，不把四则运算拆成逐句考试。让读者先完成关系和解释，再对照同源题解反馈；已会内容直接跳过。实验的历史、分析计算和教学合同身份分开，所有默认输入来自supplied_inputs。解释必须包含原表定位、时间/单位和任务的正向完成。
最后问“读者只读完这个词条，真的能学明白吗？”用独立产出与迁移答案作检验，而不是给自评分。数字正确但混用时间、主体、税额或现金/股数时，指出具体误解并让读者修一份完整结果。不要把过程记录写进读者正文。

本篇特有边界：FX152单列；CFO展开替换而非再加；四种用途同一起点。回购需价格、股数及权益；不生成未来收益或财富优劣。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "node_id": "BF-21",
  "content_version": "2026-09-21-review-v3",
  "default_branch": "core",
  "branch_options": [
    "core"
  ],
  "branch_tasks": {
    "core": "闭合Salesforce三类净现金流-1673和FX152；CFO展开须替换整体。用同一起点算四种3000用途，再以1200预算复算回购，不判断未知财富变化。"
  },
  "required_readings": [
    {
      "source_id": "BFFG-S04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-finance/pages/1-1-what-is-finance",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1.1 Business Finance",
        "scope": "所在全节；采用业务资金功能段",
        "purpose": "资金用途的机制"
      },
      "supports": "资金用途的机制",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "OpenStax Principles of Finance — What Is Finance?",
      "authors": [
        "Julie Dahlquist",
        "Rainford Knight"
      ],
      "version": "2022",
      "retrieved_at": "2026-09-21",
      "id": "BF21-READ-01"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整CFS pp61–62，Note7 Informatica，Note9 Debt，Note11，收入/权益/Note13",
        "scope": "完整现金表含零值和补充，债务到期/授信，收购对价，回购和股数",
        "purpose": "从资金到资源、义务和普通股"
      },
      "supports": "从资金到资源、义务和普通股",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-02",
      "retrieved_at": "2026-09-21",
      "id": "BF21-READ-02"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BFFG-R03",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2–3、§6、§7；printed p10例及脚注",
        "scope": "Nov2023工作稿完整采用单元",
        "purpose": "阈值激励、机会成本和外推边界"
      },
      "supports": "阈值激励、机会成本和外推边界",
      "branch": "research",
      "required_when": "所选扩展启用时",
      "title": "How Do Short-Term Incentives Affect Long-Term Productivity?",
      "authors": [
        "Heitor Almeida",
        "Nuri Ersahin",
        "Vyacheslav Fos",
        "Rustom M. Irani",
        "Mathias Kronlund"
      ],
      "version": "实际全文Nov2023工作稿；最终卷期RFS39(1)(2026),114–157，online2024-10-07",
      "retrieved_at": "2026-09-21",
      "id": "BF21-READ-03",
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
    "tables": {
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
    },
    "sf_finance": {
      "source_id": "BFFG-C04",
      "period": "FY2026 ended 2026-01-31",
      "unit": "USD million; shares in millions",
      "principal": 14500,
      "carrying": 14439,
      "current": 4000,
      "noncurrent": 10439,
      "maturity_labels": [
        "FY2027",
        "FY2028",
        "FY2029",
        "FY2030",
        "FY2031",
        "Thereafter"
      ],
      "maturity_principal": [
        4000,
        0,
        4500,
        0,
        0,
        6000
      ],
      "revolver": 5000,
      "revolver_drawn": 0,
      "revolver_maturity": "October 2029",
      "informatica_cash": 9538,
      "informatica_other": [
        62,
        36
      ],
      "informatica_total": 9636,
      "informatica_loan_draw": 6000,
      "repurchases": {
        "cfs": 12596,
        "note11": 12677,
        "equity": 12721,
        "rounded_shares_m": 50,
        "average_price": 254.21
      },
      "shares": {
        "issued_end": 1073,
        "treasury_end": 144,
        "outstanding_end": 929,
        "basic_weighted": 950,
        "diluted_weighted": 956
      },
      "rd": 5993
    },
    "capital_teaching": {
      "id": "SYN-BF21-ALLOCATION",
      "data_identity": "hypothetical_contract",
      "unit": "统一教学金额单位；股数为教学股",
      "initial": {
        "cash": 3000,
        "other_assets": 7000,
        "facility": 0,
        "debt": 4000,
        "equity": 6000,
        "shares": 100
      },
      "budget": 3000,
      "repurchase_price": 60,
      "conditions": [
        "同一初始状态、同一即时比较点。",
        "建设限已取得且符合资本化条件设施；不涵盖所有研发或内部投入。",
        "回购使用库存股成本法，无费用税款；0<=B<=cash，p>0，B/p<N。",
        "无额外收入、融资、价格变动或未来收益假设。"
      ]
    },
    "paper_example": {
      "source_id": "BFFG-R03",
      "data_identity": "published_teaching_example_not_company_data",
      "unit": "USD million / million shares except per share",
      "earnings": 2990,
      "shares": 1000,
      "budget": 600,
      "price": 60,
      "interest": 0.05,
      "tax": 0.3,
      "period_fraction": 0.25
    }
  },
  "entry_id": "zh-bf21",
  "selected_branch": "core",
  "required_readings_by_branch": {
    "core": [
      {
        "source_id": "BFFG-S04",
        "access": {
          "kind": "html_full_text",
          "uri": "https://openstax.org/books/principles-finance/pages/1-1-what-is-finance",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§1.1 Business Finance",
          "scope": "所在全节；采用业务资金功能段",
          "purpose": "资金用途的机制"
        },
        "supports": "资金用途的机制",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "OpenStax Principles of Finance — What Is Finance?",
        "authors": [
          "Julie Dahlquist",
          "Rainford Knight"
        ],
        "version": "2022",
        "retrieved_at": "2026-09-21",
        "id": "BF21-READ-01"
      },
      {
        "source_id": "BBC-C01",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "完整CFS pp61–62，Note7 Informatica，Note9 Debt，Note11，收入/权益/Note13",
          "scope": "完整现金表含零值和补充，债务到期/授信，收购对价，回购和股数",
          "purpose": "从资金到资源、义务和普通股"
        },
        "supports": "从资金到资源、义务和普通股",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce, Inc. FY2026 Form 10-K",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "FY ended 2026-01-31；filed 2026-03-02",
        "retrieved_at": "2026-09-21",
        "id": "BF21-READ-02"
      }
    ],
    "all": [
      {
        "source_id": "BFFG-S04",
        "access": {
          "kind": "html_full_text",
          "uri": "https://openstax.org/books/principles-finance/pages/1-1-what-is-finance",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§1.1 Business Finance",
          "scope": "所在全节；采用业务资金功能段",
          "purpose": "资金用途的机制"
        },
        "supports": "资金用途的机制",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "OpenStax Principles of Finance — What Is Finance?",
        "authors": [
          "Julie Dahlquist",
          "Rainford Knight"
        ],
        "version": "2022",
        "retrieved_at": "2026-09-21",
        "id": "BF21-READ-01"
      },
      {
        "source_id": "BBC-C01",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "完整CFS pp61–62，Note7 Informatica，Note9 Debt，Note11，收入/权益/Note13",
          "scope": "完整现金表含零值和补充，债务到期/授信，收购对价，回购和股数",
          "purpose": "从资金到资源、义务和普通股"
        },
        "supports": "从资金到资源、义务和普通股",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Salesforce, Inc. FY2026 Form 10-K",
        "authors": [
          "Salesforce, Inc."
        ],
        "version": "FY ended 2026-01-31；filed 2026-03-02",
        "retrieved_at": "2026-09-21",
        "id": "BF21-READ-02"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BFFG-S04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-finance/pages/1-1-what-is-finance",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1.1 Business Finance",
        "scope": "所在全节；采用业务资金功能段",
        "purpose": "资金用途的机制"
      },
      "supports": "资金用途的机制",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "OpenStax Principles of Finance — What Is Finance?",
      "authors": [
        "Julie Dahlquist",
        "Rainford Knight"
      ],
      "version": "2022",
      "retrieved_at": "2026-09-21",
      "id": "BF21-READ-01"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整CFS pp61–62，Note7 Informatica，Note9 Debt，Note11，收入/权益/Note13",
        "scope": "完整现金表含零值和补充，债务到期/授信，收购对价，回购和股数",
        "purpose": "从资金到资源、义务和普通股"
      },
      "supports": "从资金到资源、义务和普通股",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-02",
      "retrieved_at": "2026-09-21",
      "id": "BF21-READ-02"
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
      "id": "BFFG-S04",
      "title": "OpenStax Principles of Finance — What Is Finance?",
      "authors": [
        "Julie Dahlquist",
        "Rainford Knight"
      ],
      "version": "2022",
      "url": "https://openstax.org/books/principles-finance/pages/1-1-what-is-finance",
      "locators": [
        "§1.1 全节，采用Business Finance部分"
      ]
    },
    {
      "id": "BFFG-R03",
      "title": "How Do Short-Term Incentives Affect Long-Term Productivity?",
      "authors": [
        "Heitor Almeida",
        "Nuri Ersahin",
        "Vyacheslav Fos",
        "Rustom M. Irani",
        "Mathias Kronlund"
      ],
      "version": "实际全文Nov2023工作稿；最终卷期RFS39(1)(2026),114–157，online2024-10-07",
      "url": "https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf",
      "locators": [
        "§2 strategy及printed p10例和脚注",
        "§3 data",
        "§6 robustness",
        "§7 conclusion"
      ]
    }
  ],
  "experiment_ids": [
    "EXP-BF21-SOURCES-USES"
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
      "/tables/sf_cash",
      "/sf_finance",
      "/capital_teaching",
      "/paper_example"
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
现金流量表告诉我们资金怎样变化，资本配置分析还要往前走一步：这笔钱换来了什么资源，减少了什么义务，或转到了哪些股东手里？同样花掉3,000，建设设施、偿还债务和回购股票留下的是不同状态。我们先把Salesforce FY2026的真实资金账核完，再用一个条款完全给定的教学企业比较四种用途。完整学习约15–20分钟，研究例题可另行展开。

<a id="bf21-structure"></a>
## 1. 资金用途为什么必须连到经营活动

企业面对的安排通常不止“花钱”与“不花钱”。内部建设改变未来可提供的服务能力；收购把一组已有资源、人员、客户关系和义务带入集团；偿债减少未来合同负担；分红和回购把现金交给股东，但影响的股数不同；留存保留以后选择的余地。这些安排分别涉及营运资金、长期投入和融资结构。只有把资金时间和经营目标同时写出，才有比较的起点。[^finance]

一项金额很大的回购既不能自动说明资本配置优秀，也不能自动说明没有再投资。软件研发可以作为期间费用，收购可以列在投资活动，门店建设则进入物业设备；若只看资本支出一行，就把不同资源形成渠道压成了一种。因此本篇的顺序是<strong>完整资金账→取得的资源或权利→同一初始状态下的比较</strong>。

<a id="bf21-cfs"></a>
## 2. 先保留完整资金账：Salesforce FY2026

以下是现金流量表全部行的三年列，金额为百万美元，财年分别截至相应年份1月31日。可以先看三类小计和期初期末，再回看经营活动的展开。资产负债变动按原表扣除了企业合并影响，补充利息和税款披露已经进入相关现金流，不能再加一次。[^sfcfs]

<details><summary>展开完整合并现金流量表（三年列、全部主板块及补充）</summary>

| 原行名称 | 中文读法 | FY2026 · 2026-01-31 | FY2025 · 2025-01-31 | FY2024 · 2024-01-31 |
|---|---|---:|---:|---:|
| <strong>Operating activities</strong> | <strong>经营活动</strong> |  |  |  |
| Net income | 净利润 | 7,457 | 6,197 | 4,136 |
| <strong>Adjustments to reconcile net income to net cash provided by operating activities</strong> | <strong>由净利润调节至经营活动净现金</strong> |  |  |  |
| Depreciation and amortization (1) | 折旧和摊销（1） | 3,631 | 3,477 | 3,959 |
| Amortization of costs capitalized to obtain revenue contracts, net | 取得收入合同资本化成本的摊销净额 | 2,197 | 2,095 | 1,925 |
| Stock-based compensation expense | 股权薪酬费用 | 3,509 | 3,183 | 2,787 |
| (Gains) losses on strategic investments, net | 战略投资收益／损失净额的现金流调整 | (1,017) | 121 | 277 |
| <strong>Changes in assets and liabilities, net of business combinations</strong> | <strong>资产负债变动，扣除企业合并影响</strong> |  |  |  |
| Accounts receivable, net | 应收款净额变动 | (2,160) | (490) | (659) |
| Costs capitalized to obtain revenue contracts, net | 取得收入合同的资本化成本净额变动 | (2,811) | (2,121) | (1,872) |
| Prepaid expenses and other current assets and other assets | 预付及其他资产变动 | 819 | (1,495) | (843) |
| Accounts payable and accrued expenses and other liabilities | 应付、应计费用及其他负债变动 | 1,014 | 1,089 | (478) |
| Operating lease liabilities | 经营租赁负债变动 | (567) | (548) | (621) |
| Unearned revenue | 未赚取收入变动 | 2,924 | 1,584 | 1,623 |
| <strong>Net cash provided by operating activities</strong> | <strong>经营活动产生净现金</strong> | <strong>14,996</strong> | <strong>13,092</strong> | <strong>10,234</strong> |
| <strong>Investing activities</strong> | <strong>投资活动</strong> |  |  |  |
| Business combinations, net of cash acquired | 企业合并，扣取得现金 | (9,268) | (2,734) | (82) |
| Purchases of strategic investments | 购入战略投资 | (1,958) | (539) | (496) |
| Sales of strategic investments | 出售战略投资 | 184 | 126 | 108 |
| Purchases of marketable securities | 购入有价证券 | (3,763) | (6,879) | (3,761) |
| Sales of marketable securities | 出售有价证券 | 4,414 | 4,143 | 1,511 |
| Maturities of marketable securities | 有价证券到期 | 2,395 | 3,378 | 2,129 |
| Capital expenditures | 资本支出 | (594) | (658) | (736) |
| <strong>Net cash used in investing activities</strong> | <strong>投资活动使用净现金</strong> | <strong>(8,590)</strong> | <strong>(3,163)</strong> | <strong>(1,327)</strong> |
| <strong>Financing activities</strong> | <strong>筹资活动</strong> |  |  |  |
| Proceeds from issuance of debt, net of issuance costs | 发行债务所得，扣发行成本 | 6,000 | — | — |
| Repurchases of common stock | 回购普通股现金 | (12,596) | (7,829) | (7,620) |
| Payments for taxes related to net share settlement of equity awards | 股权奖励净额结算相关税款 | (351) | — | — |
| Proceeds from employee stock plans | 员工股票计划所得 | 1,039 | 1,540 | 1,954 |
| Principal payments on financing obligations | 融资义务本金支付 | (584) | (603) | (629) |
| Repayments of debt | 偿还债务 | — | (1,000) | (1,182) |
| Payments of dividends and dividend equivalents | 股息及股息等价支付 | (1,587) | (1,537) | — |
| <strong>Net cash used in financing activities</strong> | <strong>筹资活动使用净现金</strong> | <strong>(8,079)</strong> | <strong>(9,429)</strong> | <strong>(7,477)</strong> |
| Effect of exchange rate changes | 汇率变化影响 | 152 | (124) | 26 |
| <strong>Net increase (decrease) in cash and cash equivalents</strong> | <strong>现金及等价物净增／减</strong> | <strong>(1,521)</strong> | <strong>376</strong> | <strong>1,456</strong> |
| Cash and cash equivalents, beginning of period | 期初现金及等价物 | 8,848 | 8,472 | 7,016 |
| Cash and cash equivalents, end of period | 期末现金及等价物 | 7,327 | 8,848 | 8,472 |
| <strong>Supplemental cash flow disclosure</strong> | <strong>补充现金流披露（不再加入合计）</strong> |  |  |  |
| Cash paid for interest | 已付利息 | 276 | 233 | 254 |
| Cash paid for income taxes, net of tax refunds | 已付所得税，扣退款 | 1,282 | 2,061 | 1,027 |

单位：USD millions。（1）D&A含取得无形资产摊销、固定资产折旧、使用权资产摊销及减值。 资产与负债变动按原表扣除企业合并影响，不能直接用两个期末余额替换。 现金集合为cash and cash equivalents。补充已付利息和税款已经体现在现金流中，不重复累加。

</details>

FY2026三类现金流先相加：

```text
经营 14,996 + 投资 (−8,590) + 筹资 (−8,079) = −1,673
三类净现金流 −1,673 + 汇率折算影响 152 = 现金余额净减 −1,521
期初 8,848 − 1,521 = 期末 7,327
```

152使美元报告现金余额增加，但它不是客户回款、投资出售所得或新增借款。我们将它放在余额折算桥上，而不列为经营或融资来源。

<a id="bf21-sources-uses"></a>
### 将原表重排成来源与用途，仍保留每一行的身份

| 资金来源：原行及中文含义 | FY2026 |
|---|---:|
| Net cash provided by operating activities／经营现金流整体 | 14,996 |
| Sales of strategic investments／战略投资出售 | 184 |
| Sales of marketable securities／有价证券出售 | 4,414 |
| Maturities of marketable securities／有价证券到期 | 2,395 |
| Proceeds from issuance of debt, net of issuance costs／债务发行所得，扣发行费用 | 6,000 |
| Proceeds from employee stock plans／员工股票计划所得 | 1,039 |
| <strong>来源合计，不含汇率折算</strong> | <strong>29,028</strong> |

| 资金用途：原行及中文含义 | 支出正额 |
|---|---:|
| Business combinations, net of cash acquired／企业合并，扣取得现金 | 9,268 |
| Purchases of strategic investments／战略投资购买 | 1,958 |
| Purchases of marketable securities／有价证券购买 | 3,763 |
| Capital expenditures／资本支出 | 594 |
| Repurchases of common stock／普通股回购 | 12,596 |
| Payments for taxes related to net share settlement of equity awards／股权奖励净额结算相关税款 | 351 |
| Principal payments on financing obligations／融资义务本金支付 | 584 |
| Repayments of debt／债务偿还 | — |
| Payments of dividends and dividend equivalents／股息及股息等价物支付 | 1,587 |
| <strong>用途合计</strong> | <strong>30,701</strong> |

这是对原现金流行的分析重排，不是额外一张GAAP报表。29,028−30,701＝−1,673，再单列152才回到期末7,327。用途表将支出写成正额便于阅读；原表负号保留在上面的完整表中。[^sfcfs]

### 经营来源展开时，要替换整体而不是叠加

14,996并不是凭空产生的一块钱。它从净利润7,457出发，经过以下完整间接调整：

```text
7,457 + 3,631 + 2,197 + 3,509 − 1,017 − 2,160
      − 2,811 + 819 + 1,014 − 567 + 2,924 = 14,996
```

其中包括折旧摊销、合同取得成本摊销、股权薪酬、投资收益调整，以及经营资产负债的变化。点击展开时，这11行<strong>替换</strong>来源表中的14,996，而不是在14,996之外再加7,457或3,509。每个分项是从利润到现金的调节，不应都重新叫作“客户付入的现金”。

<a id="bf21-resources"></a>
## 3. 把几笔主要用途接回资源、义务和股东

### 企业合并取得的是业务集合，不只是资本支出

9,268为整个年度“企业合并、扣取得现金”的现金流。Note 7另列Informatica交易：现金对价9,538，加既存关系公允价值62和承接奖励中计入对价的36，共9,636。两处所研究的范围不同，不能把年度9,268整行改名成“Informatica价格”。收购材料还提供所取得技术、客户关系及其他资产负债，因而可以把资金用途接回具体业务资源。[^acquisition]

资金来源也能查到对应安排：公司于2025年11月提取4,000的364天贷款和2,000的三年贷款，用于Informatica相关融资需要。我们因此能提出真正的问题：新业务的整合、履约和现金贡献在什么时间形成，而相应融资何时到期？“收购金额大”本身不回答这两个时间是否匹配。[^debt]

### 债务表和现金流表有不同的计量职责

Note 9期末债务本金14,500，账面额14,439；流动4,000、非流动10,439。本金到期表如下，不能拿账面差额替代付款。[^debt]

| 到期财年 | FY2027 | FY2028 | FY2029 | FY2030 | FY2031 | 其后 | 合计 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 本金 | 4,000 | — | 4,500 | — | — | 6,000 | 14,500 |

另外5,000循环授信在期末未提款，到期为2029年10月；未提款能力与已取得债务发行现金6,000也不是同一个存量。使用它要查合同条件与日期，不能一边把它算作现金，一边忽略未来融资义务。

### 分配需要同时看现金、权益和股数

公司FY2026回购在三份材料中的金额分别为：现金流12,596、Note 11表中12,677、权益变动12,721。Note 11使用百万股取整显示约50百万股，平均价格254.21美元。这里保留各表口径，不凭数字接近把差额全归给某一种税或结算原因。[^repurchase]

期末已发行1,073百万股减库存股144百万股，得到在外929百万股；FY2026基本EPS使用950百万股加权平均，稀释EPS使用956百万股。回购改变期末股数及期间加权路径，但并不意味着可以随手用929重算全年EPS。员工股票计划所得1,039也须保留自己的现金来源身份，不能一概称为本年SBC发行。

资本配置由此不再是“回购12,596大于资本支出594，所以没有再投资”。期间研发费用5,993、企业合并和其他投入属于不同资源形成渠道，研发已进入经营利润和现金形成过程，不能在来源/用途表再简单扣一遍。要评价它们，下一条材料应是交付能力、客户采用、整合进展、现金时点与对应义务，而不是金额排名。[^rd]

<a id="bf21-allocation"></a>
## 4. 同一笔3,000，四种用途留下什么

现在离开Salesforce历史，建立一份<strong>独立教学账本</strong>。初始现金3,000、其他资产7,000、债务4,000、普通股账面权益6,000，在外100股。金额和股数都是统一教学单位。我们在同一个即时比较点处理3,000预算，无费用、无税，也没有新增经营收益。

留存不发生交易，现金相对期初变动为0。偿债支付3,000并减少同额债务。建设限于已经取得、符合资本化条件的设施：现金换成设施，不把所有研发都假定能资本化。回购另设执行价60，以库存股成本法处理；支付3,000取得50股，权益减少3,000，在外股数降到50。

| 相同初始状态后的方案 | 现金 | 其他资产 | 新设施 | 总资产A | 债务L | 普通股账面权益E | 在外股数 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 留存 | 3,000 | 7,000 | 0 | 10,000 | 4,000 | 6,000 | 100 |
| 偿债 | 0 | 7,000 | 0 | 7,000 | 1,000 | 6,000 | 100 |
| 建设可资本化设施 | 0 | 7,000 | 3,000 | 10,000 | 4,000 | 6,000 | 100 |
| 以60回购 | 0 | 7,000 | 0 | 7,000 | 4,000 | 3,000 | 50 |

四行都满足A＝L＋E。回购取得的本公司股票不是表内新增经营资产；在本设定中它以库存股成本减少权益。支付给退出股东的现金也不能被遗漏，然后只凭留下股份的数量或每股账面值判断原股东财富。

这张表只回答<strong>即时账面状态</strong>。设施是否值得建，需要产能、需求、成本和投用时间；还债是否优于留现，需要利息与未来资金需求；回购价格是否合适，需要另一套经营与定价分析。我们没有为这些未知项偷偷设置收益率，所以图里也不产生“最优方案”。

<div data-experiment-slot="EXP-BF21-SOURCES-USES"></div>

实验先显示真实资金账，再切到教学账本。改预算时所有方案从相同期初重新计算；改回购价时只改变教学回购股数，不能用它重写Salesforce真实50百万股或现金支出。

<a id="bf21-exercise"></a>
## 5. 两个完整任务

<strong>任务一：</strong>从真实资金表复算期末现金。写清为什么152不能列为融资来源，以及为什么展开CFO后不能把14,996与11行调节同时相加。

<strong>任务二：</strong>将教学企业的“全部回购”方案换成“全部还债”。比较同一时点的现金、债务、权益和在外股数。再只用1,200预算、回购价60，复算回购状态。

<details><summary>展开完整解析</summary>

真实来源29,028减用途30,701得到−1,673；加汇率影响152，现金变化−1,521；8,848−1,521＝7,327。152是美元报告余额折算贡献，不是新增融资现金。11行间接调节已经合计为14,996；展开只是说明整体怎样组成，同时保留两者会重复计算。

全额回购与全额还债都用3,000，所以期末现金都是0。回购后债务4,000、权益3,000、在外50股；还债后债务1,000、权益6,000、在外100股。资产同为7,000，右侧只是不同权利人的余额不同。两状态不能由账面变化直接排出股东财富优劣。

预算1,200回购：取得1,200÷60＝20股；现金1,800，其他资产7,000，总资产8,800；债务4,000，权益4,800，在外80股，仍有8,800＝4,000＋4,800。被回购股东收到1,200现金，不能在讨论原股东整体所得时将它忽略。

</details>

<details data-agent-option="research"><summary>研究选读：为什么EPS提高也要看放弃的用途</summary>
<a id="bf21-research"></a>

Almeida等人的公开稿（2023-11；后发表于RFS 39(1)，2026）研究1988–2013美国制造业在回购前EPS惊喜阈值附近的激励差异，不是只把“实际回购者”抽出来比较。解释其结果需要阈值附近没有其他直接影响结果的政策跳变；结论不能直接移植到Salesforce或所有回购。[^almeida]

论文的独立教学例还能让我们检查一个细节：若季度利润2,990百万美元、股数1,000百万股，以60美元花600百万美元回购，则减少10百万股。假定期初回购、原现金年息5%、税率30%，本季少赚税后利息600×5%÷4×70%＝5.25百万美元。新EPS为(2,990−5.25)÷(1,000−10)＝3.01490，取整3.01。提高EPS的同时，总利润反而少了5.25。这个例子不是投资建议，而是在教我们把被放弃的用途也写进比较。[^almeida]

</details>

[^finance]: OpenStax，Dahlquist与Knight，Principles of Finance（2022），[§1.1 What Is Finance?](https://openstax.org/books/principles-finance/pages/1-1-what-is-finance)，business finance的营运资金、长期投资和融资结构框架。
[^sfcfs]: [Salesforce FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows，印刷pp61–62，完整年度列与D&A脚注及补充利息/税款；2026-01-31年结，百万美元。
[^acquisition]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 7 Informatica对价单元。9,538现金、62既存关系、36奖励对价与年度合并净现金行分开。
[^debt]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 9 Debt，完整债务、到期、Revolving Credit Facility及2025年11月融资单元。
[^repurchase]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 11 Share Repurchase Program、权益变动表、Note 13 EPS及现金流量表；金额/期末股数/加权股数各自保留。
[^rd]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Operations，FY2026 Research and development 5,993；费用包含自身股权薪酬组成。
[^almeida]: Almeida、Ersahin、Fos、Irani、Kronlund，[How Do Short-Term Incentives Affect Long-Term Productivity?，2023-11公开稿](https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf)，§2含印刷p10教学例及脚注、§3数据、§6稳健性与§7结论；最终卷期RFS 39(1)（2026），114–157，DOI 10.1093/rfs/hhae064。此处未复现保密样本或声称读到最终版全文。

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>


## Additional teaching material
## 资金用途：真实账与教学账

真实资金来源29,028，用途30,701，三类净现金流−1,673，汇率折算＋152，期初8,848到期末7,327。零值Repayments of debt仍为0。

完整CFO（展开时替换14,996）：

| 原行 | 金额 |
|---|---|
| Net income | 7457 |
| Depreciation and amortization (1) | 3631 |
| Amortization of costs capitalized to obtain revenue contracts, net | 2197 |
| Stock-based compensation expense | 3509 |
| (Gains) losses on strategic investments, net | -1017 |
| Accounts receivable, net | -2160 |
| Costs capitalized to obtain revenue contracts, net | -2811 |
| Prepaid expenses and other current assets and other assets | 819 |
| Accounts payable and accrued expenses and other liabilities | 1014 |
| Operating lease liabilities | -567 |
| Unearned revenue | 2924 |

统一教学账本：现金3000、其他资产7000、债务4000、权益6000、在外100股，预算3000；回购价60，无费用税。

| 方案 | 现金 | 设施 | 总资产 | 债务 | 权益 | 在外股数 | A−L−E |
|---|---|---|---|---|---|---|---|
| retain | 3000 | 0 | 10000 | 4000 | 6000 | 100 | 0 |
| repay | 0 | 0 | 7000 | 1000 | 6000 | 100 | 0 |
| build | 0 | 3000 | 10000 | 4000 | 6000 | 100 | 0 |
| repurchase | 0 | 0 | 7000 | 4000 | 3000 | 50 | 0 |

留存变化为0；建设仅限已取得、符合资本化条件的设施。回购不生成经营资产。未来收益与财富变化均未设定。

Almeida公开稿的独立教学例：600÷60＝10百万股；放弃季度税后利息600×5%×(1−30%)×1/4＝5.25；(2990−5.25)÷990＝3.0148989899。该例不是公司历史交易。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF21-SOURCES-USES",
    "title": "资金账与同一初始状态",
    "anchor": "bf21-allocation",
    "description": "来源/用途/FX三层；四种同初始账本安排。",
    "inputs": {
      "provided_by": "agent_packet.supplied_inputs",
      "selection": "agent_packet.selected_branch",
      "pointer_contract": "agent_packet.input_projection",
      "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
      "scope": "实际输入已在同一教学包中提供一次；当前 experiment 通过上述绑定复用，不复制第二份表格。"
    },
    "algorithm": "cash按原现金行分组；allocate从相同初始账本执行指定用途。",
    "boundaries": "CFO展开替换；FX非流入；资本化设施已取得；0<=预算<=现金、回购价>0、回购股数<在外股数。",
    "outputs": {
      "historical": {
        "identity": "reported_cash_rows_regrouped",
        "sources": [
          {
            "id": "cfo",
            "label_original": "Net cash provided by operating activities",
            "label_zh": "经营现金流整体",
            "value": 14996,
            "section": "cfo"
          },
          {
            "id": "strategic_sales",
            "label_original": "Sales of strategic investments",
            "label_zh": "出售战略投资",
            "value": 184,
            "section": "cfi"
          },
          {
            "id": "market_sales",
            "label_original": "Sales of marketable securities",
            "label_zh": "出售有价证券",
            "value": 4414,
            "section": "cfi"
          },
          {
            "id": "market_maturities",
            "label_original": "Maturities of marketable securities",
            "label_zh": "有价证券到期",
            "value": 2395,
            "section": "cfi"
          },
          {
            "id": "debtissue",
            "label_original": "Proceeds from issuance of debt, net of issuance costs",
            "label_zh": "发行债务所得，扣发行成本",
            "value": 6000,
            "section": "cff"
          },
          {
            "id": "employee",
            "label_original": "Proceeds from employee stock plans",
            "label_zh": "员工股票计划所得",
            "value": 1039,
            "section": "cff"
          }
        ],
        "uses": [
          {
            "id": "acquisitions",
            "label_original": "Business combinations, net of cash acquired",
            "label_zh": "企业合并，扣取得现金",
            "value": -9268,
            "section": "cfi"
          },
          {
            "id": "strategic_purchases",
            "label_original": "Purchases of strategic investments",
            "label_zh": "购入战略投资",
            "value": -1958,
            "section": "cfi"
          },
          {
            "id": "market_purchases",
            "label_original": "Purchases of marketable securities",
            "label_zh": "购入有价证券",
            "value": -3763,
            "section": "cfi"
          },
          {
            "id": "capex",
            "label_original": "Capital expenditures",
            "label_zh": "资本支出",
            "value": -594,
            "section": "cfi"
          },
          {
            "id": "repurchases",
            "label_original": "Repurchases of common stock",
            "label_zh": "回购普通股现金",
            "value": -12596,
            "section": "cff"
          },
          {
            "id": "settlementtax",
            "label_original": "Payments for taxes related to net share settlement of equity awards",
            "label_zh": "股权奖励净额结算相关税款",
            "value": -351,
            "section": "cff"
          },
          {
            "id": "financeprincipal",
            "label_original": "Principal payments on financing obligations",
            "label_zh": "融资义务本金支付",
            "value": -584,
            "section": "cff"
          },
          {
            "id": "dividends",
            "label_original": "Payments of dividends and dividend equivalents",
            "label_zh": "股息及股息等价支付",
            "value": -1587,
            "section": "cff"
          }
        ],
        "zero": [
          {
            "id": "debtrepay",
            "label_original": "Repayments of debt",
            "label_zh": "偿还债务",
            "value": 0,
            "section": "cff"
          }
        ],
        "sources_total": 29028,
        "uses_total": 30701,
        "cfo": 14996,
        "cfi": -8590,
        "cff": -8079,
        "net_three_activities": -1673,
        "fx_separate": 152,
        "change": -1521,
        "begin": 8848,
        "end": 7327,
        "operating_explanation": [
          {
            "id": "net",
            "label_original": "Net income",
            "label_zh": "净利润",
            "value": 7457
          },
          {
            "id": "da",
            "label_original": "Depreciation and amortization (1)",
            "label_zh": "折旧和摊销（1）",
            "value": 3631
          },
          {
            "id": "contract_amort",
            "label_original": "Amortization of costs capitalized to obtain revenue contracts, net",
            "label_zh": "取得收入合同资本化成本的摊销净额",
            "value": 2197
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation expense",
            "label_zh": "股权薪酬费用",
            "value": 3509
          },
          {
            "id": "strategic",
            "label_original": "(Gains) losses on strategic investments, net",
            "label_zh": "战略投资收益／损失净额的现金流调整",
            "value": -1017
          },
          {
            "id": "ar",
            "label_original": "Accounts receivable, net",
            "label_zh": "应收款净额变动",
            "value": -2160
          },
          {
            "id": "contract_add",
            "label_original": "Costs capitalized to obtain revenue contracts, net",
            "label_zh": "取得收入合同的资本化成本净额变动",
            "value": -2811
          },
          {
            "id": "prepaid",
            "label_original": "Prepaid expenses and other current assets and other assets",
            "label_zh": "预付及其他资产变动",
            "value": 819
          },
          {
            "id": "ap",
            "label_original": "Accounts payable and accrued expenses and other liabilities",
            "label_zh": "应付、应计费用及其他负债变动",
            "value": 1014
          },
          {
            "id": "lease",
            "label_original": "Operating lease liabilities",
            "label_zh": "经营租赁负债变动",
            "value": -567
          },
          {
            "id": "unearned",
            "label_original": "Unearned revenue",
            "label_zh": "未赚取收入变动",
            "value": 2924
          }
        ],
        "operating_explanation_sum": 14996,
        "note": "CFO展开替换整体；来源29028不含FX，补充现金披露不再累计。"
      },
      "allocation": [
        {
          "identity": "hypothetical_instant_book_state",
          "action": "retain",
          "budget": 3000,
          "price": 60,
          "initial": {
            "cash": 3000,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "state": {
            "cash": 3000,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "assets": 10000,
          "liabilities_plus_equity": 10000,
          "accounting_gap": 0,
          "delta": {
            "cash": 0,
            "other_assets": 0,
            "facility": 0,
            "debt": 0,
            "equity": 0,
            "shares": 0
          },
          "shares_bought": 0,
          "future_return": null,
          "wealth_change": null
        },
        {
          "identity": "hypothetical_instant_book_state",
          "action": "repay",
          "budget": 3000,
          "price": 60,
          "initial": {
            "cash": 3000,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "state": {
            "cash": 0,
            "other_assets": 7000,
            "facility": 0,
            "debt": 1000,
            "equity": 6000,
            "shares": 100
          },
          "assets": 7000,
          "liabilities_plus_equity": 7000,
          "accounting_gap": 0,
          "delta": {
            "cash": -3000,
            "other_assets": 0,
            "facility": 0,
            "debt": -3000,
            "equity": 0,
            "shares": 0
          },
          "shares_bought": 0,
          "future_return": null,
          "wealth_change": null
        },
        {
          "identity": "hypothetical_instant_book_state",
          "action": "build",
          "budget": 3000,
          "price": 60,
          "initial": {
            "cash": 3000,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "state": {
            "cash": 0,
            "other_assets": 7000,
            "facility": 3000,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "assets": 10000,
          "liabilities_plus_equity": 10000,
          "accounting_gap": 0,
          "delta": {
            "cash": -3000,
            "other_assets": 0,
            "facility": 3000,
            "debt": 0,
            "equity": 0,
            "shares": 0
          },
          "shares_bought": 0,
          "future_return": null,
          "wealth_change": null
        },
        {
          "identity": "hypothetical_instant_book_state",
          "action": "repurchase",
          "budget": 3000,
          "price": 60,
          "initial": {
            "cash": 3000,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 6000,
            "shares": 100
          },
          "state": {
            "cash": 0,
            "other_assets": 7000,
            "facility": 0,
            "debt": 4000,
            "equity": 3000,
            "shares": 50
          },
          "assets": 7000,
          "liabilities_plus_equity": 7000,
          "accounting_gap": 0,
          "delta": {
            "cash": -3000,
            "other_assets": 0,
            "facility": 0,
            "debt": 0,
            "equity": -3000,
            "shares": -50
          },
          "shares_bought": 50,
          "future_return": null,
          "wealth_change": null
        }
      ],
      "paper_example": {
        "identity": "published_teaching_example_not_company_data",
        "shares_bought": 10,
        "forgone_interest": 5.25,
        "eps": 3.01489898989899
      }
    },
    "static_equivalent": "## 资金用途：真实账与教学账\n\n真实资金来源29,028，用途30,701，三类净现金流−1,673，汇率折算＋152，期初8,848到期末7,327。零值Repayments of debt仍为0。\n\n完整CFO（展开时替换14,996）：\n\n| 原行 | 金额 |\n|---|---|\n| Net income | 7457 |\n| Depreciation and amortization (1) | 3631 |\n| Amortization of costs capitalized to obtain revenue contracts, net | 2197 |\n| Stock-based compensation expense | 3509 |\n| (Gains) losses on strategic investments, net | -1017 |\n| Accounts receivable, net | -2160 |\n| Costs capitalized to obtain revenue contracts, net | -2811 |\n| Prepaid expenses and other current assets and other assets | 819 |\n| Accounts payable and accrued expenses and other liabilities | 1014 |\n| Operating lease liabilities | -567 |\n| Unearned revenue | 2924 |\n\n统一教学账本：现金3000、其他资产7000、债务4000、权益6000、在外100股，预算3000；回购价60，无费用税。\n\n| 方案 | 现金 | 设施 | 总资产 | 债务 | 权益 | 在外股数 | A−L−E |\n|---|---|---|---|---|---|---|---|\n| retain | 3000 | 0 | 10000 | 4000 | 6000 | 100 | 0 |\n| repay | 0 | 0 | 7000 | 1000 | 6000 | 100 | 0 |\n| build | 0 | 3000 | 10000 | 4000 | 6000 | 100 | 0 |\n| repurchase | 0 | 0 | 7000 | 4000 | 3000 | 50 | 0 |\n\n留存变化为0；建设仅限已取得、符合资本化条件的设施。回购不生成经营资产。未来收益与财富变化均未设定。\n\nAlmeida公开稿的独立教学例：600÷60＝10百万股；放弃季度税后利息600×5%×(1−30%)×1/4＝5.25；(2990−5.25)÷990＝3.0148989899。该例不是公司历史交易。\n",
    "source_id_aliases": {
      "BFFG-C01": "BF-S-COST-FY2025-SEC",
      "BFFG-C02": "BF-S-JPM-FY2025",
      "BFFG-C04": "BBC-C01",
      "BFFG-C06": "EIBC-S04",
      "BFFG-S05": "BF-S-SEC-GUIDE"
    },
    "local_url": "/notebook/labs/bf-fg/interactions.html?experiment=EXP-BF21-SOURCES-USES"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注。金额、现金和股数口径保留，不虚构差额调节。

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列。
- [How Do Short-Term Incentives Affect Long-Term Productivity?](https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf): 1988–2013制造业阈值激励设计及机会成本例；不按实际回购行为筛选，不外推所有回购。
- [OpenStax Principles of Finance — What Is Finance?](https://openstax.org/books/principles-finance/pages/1-1-what-is-finance): 稳定教学结构，不代替具体公司合同、会计范围或统一安全阈值。

## Content relations
```json
[
  {
    "from": "zh-bf21",
    "relation": "part_of",
    "to": "business-capital",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf21",
    "relation": "illustrated_by",
    "to": "bf21-cfs",
    "reason": "同一正文中的具名期间案例"
  },
  {
    "from": "bf21-cfs",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "原表支持本例",
    "locator": [
      "Statements pp57–62",
      "Note 7 Informatica",
      "Note 9 Debt (pp82–83)",
      "Note 11 Share Repurchase Program p85",
      "Note 13 EPS"
    ],
    "scope": "2026-01-31材料"
  },
  {
    "from": "bf21-structure",
    "relation": "supported_by",
    "to": "BFFG-S04",
    "reason": "稳定教学结构，不代替具体公司合同、会计范围或统一安全阈值。",
    "locator": [
      "§1.1 全节，采用Business Finance部分"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf21-structure"
  },
  {
    "from": "bf21-sources-uses",
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
    "at_section": "bf21-sources-uses"
  },
  {
    "from": "bf21-research",
    "relation": "supported_by",
    "to": "BFFG-R03",
    "reason": "1988–2013制造业阈值激励设计及机会成本例；不按实际回购行为筛选，不外推所有回购。",
    "locator": [
      "§2 strategy及printed p10例和脚注",
      "§3 data",
      "§6 robustness",
      "§7 conclusion"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf21-research"
  },
  {
    "from": "bf21-cfs",
    "relation": "uses_method",
    "to": "zh-bf07",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf21-cfs"
  },
  {
    "from": "bf21-resources",
    "relation": "uses_method",
    "to": "zh-bf12",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf21-resources"
  },
  {
    "from": "bf21-resources",
    "relation": "uses_method",
    "to": "zh-bf19",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf21-resources"
  },
  {
    "from": "bf21-allocation",
    "relation": "illustrated_by",
    "to": "EXP-BF21-SOURCES-USES",
    "at_section": "bf21-allocation",
    "reason": "来源/用途/FX三层；四种同初始账本安排。",
    "conditions": "CFO展开替换；FX非流入；资本化设施已取得；0<=预算<=现金、回购价>0、回购股数<在外股数。"
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 13/14
从真实现金流恢复来源与用途，再比较同一初始账本的四种安排。
最后换成自己的分析页，把原表、推导和竞争解释交给另一个读者。
Next: [企业财报综合带读与迁移练习](https://ou-liu-red-sugar.github.io/zh/notebook/integrated-company-financial-analysis/)
