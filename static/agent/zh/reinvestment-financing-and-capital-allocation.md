# 再投资、融资与资本配置

完整恢复真实资金来源29028与用途30701，把FX单列；从同一初始账本比较留存、偿债、设施投入和回购.

Entry: zh-bf21 | Node: BF-21 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你教授 BF-21《再投资、融资与资本配置》，版本2026-09-22-deep-review，面向有微积分、线性代数与基本概率基础的高年级本科至研究生. 本篇只有 core；research 仅在启用后读取 optional_readings.
开始实质讲解前，先实际打开 required_readings，读完 required_unit 的正文、表和脚注；记录标题、版本、定位和关键设定到从空数组开始的 runtime_reading_log. 正式入口失败时先找同版本正式等价原文；仍缺则标明单元并停止依赖该材料的讲解.
闭合 Salesforce FY2026 经营14,996、投资−8,590、筹资−8,079 得−1,673，再单列FX+152；展开 CFO 时11行替换14,996整体. 用同一期初教学账本比较留存、偿债、资本化设施与回购，再用预算1,200、回购价60复算股数和权益；未来收益/财富变化保持未设定.
通过尺度：资金来源/用途不重复；9,268年度企业合并现金与9,636 Informatica对价范围分开；回购保留价格、股数和权益. research 启用时保留 Almeida 的制造业样本、fuzzy RD 阈值与识别假设.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "node_id": "BF-21",
  "content_version": "2026-09-22-deep-review",
  "default_branch": "core",
  "branch_options": [
    "core"
  ],
  "branch_tasks": {
    "core": "闭合Salesforce三类净现金流-1673和FX152；CFO展开须替换整体. 用同一起点算四种3000用途，再以1200预算复算回购；未来收益与财富变化保持未设定."
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
    "identity_policy": "historical_observation / disclosed_non_gaap / analyst_arithmetic / hypothetical_contract 分列；未获取的未来现金及收益为null.",
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
        "unit": "USD M",
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
          "（1）D&A含取得无形资产摊销、固定资产折旧、使用权资产摊销及减值.",
          "资产与负债变动按原表扣除企业合并影响，不能直接用两个期末余额替换.",
          "现金集合为cash and cash equivalents. 补充已付利息和税款已经体现在现金流中，不重复累加."
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
      "unit": "USD M; shares in millions",
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
        "同一初始状态、同一即时比较点.",
        "建设限已取得且符合资本化条件设施；不涵盖所有研发或内部投入.",
        "回购使用库存股成本法，无费用税款；0<=B<=cash，p>0，B/p<N.",
        "无额外收入、融资、价格变动或未来收益假设."
      ]
    },
    "paper_example": {
      "source_id": "BFFG-R03",
      "data_identity": "published_teaching_example_not_company_data",
      "unit": "USD M / million shares except per share",
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
    "rule": "同源完整对象/整表按篇及行业投影，不删表中行、列、期间、单位、脚注或已包含的题解；研究/迁移仍按原选读规则.",
    "scope": "Canonical packet contains the union for this entry; copy action projects the selected industry. Other entry data stays in the complete frozen public input."
  }
}
```

## Supplied entry
现金流量表记录资金变化；资本配置分析还要识别资金换来的资源、减少的义务和转给股东的权利. 同样使用3,000，留存、建设设施、偿还债务和回购股票会形成不同的资产负债与股数状态. Salesforce FY2026用于恢复真实资金账，独立教学账本用于比较四种用途.

<a id="bf21-structure"></a>
## 1. 资金用途与经营资源

内部建设改变交付能力，收购将资源、人员、客户关系与义务纳入集团，偿债减少合同负担，分红和回购向股东支付现金，留存维持资金选择. 比较这些安排时，应同时指定资金时间、经营目标及股东权利变化. [^finance]

资源取得方式还影响会计路径：软件研发可确认为期间费用，收购列入投资活动，符合资本化条件的设施进入物业设备. 资金表与利润表、资产负债表共同记录这些安排.

<a id="bf21-cfs"></a>
## 2. Salesforce FY2026 现金流

下表保留三年完整现金流行，财年截至各年1月31日. [^sfcfs]

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

单位：USD M. （1）D&A含取得无形资产摊销、固定资产折旧、使用权资产摊销及减值. 资产负债变动已扣除企业合并影响. 现金集合为 cash and cash equivalents；补充的已付利息和税款已计入相应现金流.

</details>

FY2026三类现金流先相加：

```text
经营 14,996 + 投资 (−8,590) + 筹资 (−8,079) = −1,673
三类净现金流 −1,673 + 汇率折算影响 152 = 现金余额净减 −1,521
期初 8,848 − 1,521 = 期末 7,327
```

152为美元报告现金余额的汇率折算变动，单列于三类现金流之后.

<a id="bf21-sources-uses"></a>
### 资金来源与用途

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

将原现金流按来源、用途重排，支出以正额列示：29,028−30,701＝−1,673，加汇率变动152后，期末现金为7,327. [^sfcfs]

### 经营现金流的间接调节

经营现金流14,996由净利润7,457和以下完整间接调整组成：

```text
7,457 + 3,631 + 2,197 + 3,509 − 1,017 − 2,160
      − 2,811 + 819 + 1,014 − 567 + 2,924 = 14,996
```

11项包括净利润、折旧摊销、合同取得成本摊销、股权薪酬、投资收益调整及经营资产负债变化，合计替代来源表中的14,996.

<a id="bf21-resources"></a>
## 3. 收购、融资与股东分配

### Informatica 收购与融资

9,268是整个年度“企业合并、扣取得现金”的现金流；Note 7 的 Informatica 特定交易对价为9,636，由现金9,538、既存关系公允价值62和承接奖励中计入对价的36组成. 两者范围不同. 收购材料还列出所取得技术、客户关系及其他资产负债，可将资金用途接回具体业务资源. [^acquisition]

公司2025年11月提取4,000的364天贷款和2,000的三年贷款，用于 Informatica 相关融资. 收购业务的整合进度、履约及现金贡献时间，需要与这两笔到期安排比较. [^debt]

### 债务余额与本金到期

Note 9期末债务本金14,500，账面额14,439，其中流动4,000、非流动10,439. 本金到期安排如下. [^debt]

| 到期财年 | FY2027 | FY2028 | FY2029 | FY2030 | FY2031 | 其后 | 合计 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 本金 | 4,000 | — | 4,500 | — | — | 6,000 | 14,500 |

另有期末未提款循环授信5,000，到期日2029年10月. 将其纳入未来融资来源时，应附提款条件和日期；本年债务发行现金6,000已进入现金流量表.

### 回购现金、权益与股数

FY2026回购在现金流量表、Note 11及权益变动表分别为12,596、12,677及12,721，各口径差额尚未完成归因. Note 11以M股取整列示回购约50 M股、平均价格254.21美元. [^repurchase]

期末已发行1,073 M股减库存股144 M股，得在外929 M股；年度基本、稀释 EPS 分别使用950、956 M股加权分母. 回购影响期末股数及期间加权路径. 员工股票计划所得1,039为现金流中的单独来源.

FY2026回购12,596减少现金和普通股权益；资本支出594、研发费用5,993和企业合并分别对应设施、研发活动与取得业务. 研发已进入经营利润与经营现金形成过程，来源与用途重排时沿用这项处理. 评价这些投入还需交付能力、客户采用、成本和后续利润等证据.

<a id="bf21-allocation"></a>
## 4. 四种资金用途的账面结果

教学企业初始现金3,000、其他资产7,000、债务4,000、普通股账面权益6,000，在外100股. 金额与股数采用统一教学单位. 以下在同一时点使用3,000预算，设费用、税及新增经营收益均为零.

留存维持期初状态；偿债支付3,000并减少同额债务；建设取得符合资本化条件的设施，以3,000现金换同额设施；回购按执行价60取得50股，采用库存股成本法减少权益3,000，在外股数降至50.

| 相同初始状态后的方案 | 现金 | 其他资产 | 新设施 | 总资产A | 债务L | 普通股账面权益E | 在外股数 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 留存 | 3,000 | 7,000 | 0 | 10,000 | 4,000 | 6,000 | 100 |
| 偿债 | 0 | 7,000 | 0 | 7,000 | 1,000 | 6,000 | 100 |
| 建设可资本化设施 | 0 | 7,000 | 3,000 | 10,000 | 4,000 | 6,000 | 100 |
| 以60回购 | 0 | 7,000 | 0 | 7,000 | 4,000 | 3,000 | 50 |

四行均满足 A＝L＋E. 回购按库存股成本减少权益，出售股份的股东取得3,000现金.

表中给出即时账面状态. 比较未来结果还需设施的产能、需求、成本与投用时间，债务实际成本与资金需求，以及回购时的业务价值和成交价格.

<div data-experiment-slot="EXP-BF21-SOURCES-USES"></div>

<a id="bf21-exercise"></a>
## 5. 现金流与资本配置练习

<strong>任务一：</strong>从真实资金表复算期末现金. 写清为什么152不能列为融资来源，以及为什么展开CFO后不能把14,996与11行调节同时相加.

<strong>任务二：</strong>将教学企业的“全部回购”方案换成“全部还债”. 比较同一时点的现金、债务、权益和在外股数. 再只用1,200预算、回购价60，复算回购状态.

<details><summary>展开完整解析</summary>

29,028−30,701＝−1,673，加汇率折算152后，现金净变动−1,521；8,848−1,521＝7,327. 152来自报告余额折算；11项间接调节合计为 CFO 14,996.

两种方案均用3,000，期末现金均为0、资产均为7,000. 回购后债务4,000、权益3,000、在外50股；偿债后债务1,000、权益6,000、在外100股.

1,200预算按60回购20股. 期末现金1,800、其他资产7,000，总资产8,800＝债务4,000＋权益4,800，在外80股；出售股份的股东取得1,200现金.

</details>

<details data-agent-option="research"><summary>研究选读：回购激励与机会成本</summary>
<a id="bf21-research"></a>

Almeida等人的2023-11公开稿研究1988–2013美国制造业，利用回购前 EPS surprise 在零阈值附近的激励跳变实施 fuzzy RD. 识别依赖该阈值附近其他直接影响结果的政策连续性；估计反映阈值附近受激励影响的企业. [^almeida]

论文教学例设季度利润2,990 M美元、股数1,000 M股，期初以60美元花600 M美元回购，减少10 M股. 原现金年息5%、税率30%，季度税后利息减少600×5%÷4×70%＝5.25 M美元. 新 EPS 为(2,990−5.25)÷(1,000−10)≈3.015，高于原2.99；总利润减少5.25 M美元. 股数收缩幅度超过利润降幅，使 EPS 上升. [^almeida]

</details>

[^finance]: OpenStax，Dahlquist与Knight，Principles of Finance（2022），[§1.1 What Is Finance?](https://openstax.org/books/principles-finance/pages/1-1-what-is-finance)，business finance的营运资金、长期投资和融资结构框架.
[^sfcfs]: [Salesforce FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Cash Flows，印刷pp61–62，完整年度列与D&A脚注及补充利息/税款；2026-01-31年结， M 美元.
[^acquisition]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 7 Informatica对价单元. 9,538现金、62既存关系、36奖励对价与年度合并净现金行分开.
[^debt]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 9 Debt，完整债务、到期、Revolving Credit Facility及2025年11月融资单元.
[^repurchase]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 11 Share Repurchase Program、权益变动表、Note 13 EPS及现金流量表；金额/期末股数/加权股数各自保留.
[^rd]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Operations，FY2026 Research and development 5,993；费用包含自身股权薪酬组成.
[^almeida]: Almeida、Ersahin、Fos、Irani、Kronlund，[How Do Short-Term Incentives Affect Long-Term Productivity?，2023-11公开稿](https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf)，§2含印刷p10教学例及脚注、§3数据、§6稳健性与§7结论；最终卷期RFS 39(1)（2026），114–157，DOI 10.1093/rfs/hhae064.

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>

## Additional teaching material
## 资金用途：真实账与教学账

真实资金来源29,028，用途30,701，三类净现金流−1,673，汇率折算＋152，期初8,848到期末7,327.

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

统一教学账本：现金3000、其他资产7000、债务4000、权益6000、在外100股，预算3000；回购价60，无费用税.

| 方案 | 现金 | 设施 | 总资产 | 债务 | 权益 | 在外股数 | A−L−E |
|---|---|---|---|---|---|---|---|
| retain | 3000 | 0 | 10000 | 4000 | 6000 | 100 | 0 |
| repay | 0 | 0 | 7000 | 1000 | 6000 | 100 | 0 |
| build | 0 | 3000 | 10000 | 4000 | 6000 | 100 | 0 |
| repurchase | 0 | 0 | 7000 | 4000 | 3000 | 50 | 0 |

建设取得符合资本化条件的设施；回购按库存股成本减少权益，出售股份的股东取得现金. 表中比较即时账面状态.

Almeida公开稿的独立教学例：600÷60＝10 M 股；放弃季度税后利息600×5%×(1−30%)×1/4＝5.25；(2990−5.25)÷990≈3.015.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF21-SOURCES-USES",
    "title": "资金账与同一初始状态",
    "anchor": "bf21-allocation",
    "description": "来源/用途/FX三层；四种同初始账本安排.",
    "inputs": {
      "provided_by": "agent_packet.supplied_inputs",
      "selection": "agent_packet.selected_branch",
      "pointer_contract": "agent_packet.input_projection",
      "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
      "scope": "实际输入已在同一教学包中提供一次；当前 experiment 通过上述绑定复用，不复制第二份表格."
    },
    "algorithm": "cash按原现金行分组；allocate从相同初始账本执行指定用途.",
    "boundaries": "CFO展开替换；FX非流入；资本化设施已取得；0<=预算<=现金、回购价>0、回购股数<在外股数.",
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
        "note": "CFO展开替换整体；来源29028不含FX，补充现金披露不再累计."
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
    "static_equivalent": "## 资金用途：真实账与教学账\n\n真实资金来源29,028，用途30,701，三类净现金流−1,673，汇率折算＋152，期初8,848到期末7,327.\n\n完整CFO（展开时替换14,996）：\n\n| 原行 | 金额 |\n|---|---|\n| Net income | 7457 |\n| Depreciation and amortization (1) | 3631 |\n| Amortization of costs capitalized to obtain revenue contracts, net | 2197 |\n| Stock-based compensation expense | 3509 |\n| (Gains) losses on strategic investments, net | -1017 |\n| Accounts receivable, net | -2160 |\n| Costs capitalized to obtain revenue contracts, net | -2811 |\n| Prepaid expenses and other current assets and other assets | 819 |\n| Accounts payable and accrued expenses and other liabilities | 1014 |\n| Operating lease liabilities | -567 |\n| Unearned revenue | 2924 |\n\n统一教学账本：现金3000、其他资产7000、债务4000、权益6000、在外100股，预算3000；回购价60，无费用税.\n\n| 方案 | 现金 | 设施 | 总资产 | 债务 | 权益 | 在外股数 | A−L−E |\n|---|---|---|---|---|---|---|---|\n| retain | 3000 | 0 | 10000 | 4000 | 6000 | 100 | 0 |\n| repay | 0 | 0 | 7000 | 1000 | 6000 | 100 | 0 |\n| build | 0 | 3000 | 10000 | 4000 | 6000 | 100 | 0 |\n| repurchase | 0 | 0 | 7000 | 4000 | 3000 | 50 | 0 |\n\n建设取得符合资本化条件的设施；回购按库存股成本减少权益，出售股份的股东取得现金. 表中比较即时账面状态.\n\nAlmeida公开稿的独立教学例：600÷60＝10 M 股；放弃季度税后利息600×5%×(1−30%)×1/4＝5.25；(2990−5.25)÷990≈3.015.\n",
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
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): Salesforce FY2026的订阅收入政策、合同余额、现金流、股东权益、EPS、收入关键审计事项及所得税附注. 年报分别披露债务账面金额与本金、并购对价、回购及股数变化和汇兑项目.
- [How Do Short-Term Incentives Affect Long-Term Productivity?](https://rirani.web.illinois.edu/AEFIK_ShortTermLongTerm.pdf): 1988–2013制造业阈值激励设计及机会成本例；不按实际回购行为筛选，不外推所有回购.
- [OpenStax Principles of Finance — What Is Finance?](https://openstax.org/books/principles-finance/pages/1-1-what-is-finance): 稳定教学结构，不代替具体公司合同、会计范围或统一安全阈值.

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
    "reason": "稳定教学结构，不代替具体公司合同、会计范围或统一安全阈值.",
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
    "reason": "完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.",
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
    "reason": "1988–2013美国制造业阈值附近的激励设计及机会成本例.",
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
    "reason": "来源/用途/FX三层；四种同初始账本安排.",
    "conditions": "CFO展开替换；FX非流入；资本化设施已取得；0<=预算<=现金、回购价>0、回购股数<在外股数."
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 13/14
从真实现金流恢复来源与用途，再比较同一初始账本的四种安排.
最后换成自己的分析页，把原表、推导和竞争解释交给另一个读者.
Next: [企业财报综合分析与迁移](https://ou-liu-red-sugar.github.io/zh/notebook/integrated-company-financial-analysis/)
