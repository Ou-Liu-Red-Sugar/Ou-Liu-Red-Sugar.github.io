# 企业财报综合带读与迁移练习

以完整零售/银行原表产出可复核一页分析：业务、资源、利润、现金、普通股、竞争解释及下一条证据；附Walmart和SVB迁移.

Entry: zh-bf22 | Node: BF-22 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你教授BF-22《企业财报综合带读与迁移练习》，版本2026-09-21-review-v3，面对有微积分、线性代数与基本概率基础的高年级本科至研究生. 使用本包同源全文，不另造一套事实.
先确定selected_branch，默认retail，允许["retail", "bank"]；all表示逐支教学. 按required_readings过滤common与选中行业，未选行业不是必读. 迁移与研究仅在读者启用时按optional_readings补读.
先实际打开每项公开URL，读完required_unit包含的正文/表/脚注；记录标题、版本、定位、得到的关键设定. runtime_reading_log初始为空，不能把编辑的阅读回执当本次已读. 只有摘要、登录页或访问失败不算完成；尝试正式等价入口，仍缺则说明具体单元并停止该范围的实质讲解.
当前分支任务：{"retail": "先独立填写Costco六格分析，再恢复OI10383与现金14161，解释股数口径和893/963差异；提出两项可推翻的库存解释.", "bank": "先独立填写JPM分析，恢复税前72595、现金343338及普通股权益342393；用CIB存款增119826说明为何需要账户/平均余额而非只看总量."}
用一项完整真实材料任务诊断，不把四则运算拆成逐句考试. 让读者先完成关系和解释，再对照同源题解反馈；已会内容直接跳过. 实验的历史、分析计算和教学合同身份分开，所有默认输入来自supplied_inputs. 解释必须包含原表定位、时间/单位和任务的正向完成.
最后问“读者只读完这个词条，真的能学明白吗？”用独立产出与迁移答案作检验，而不是给自评分. 数字正确但混用时间、主体、税额或现金/股数时，指出具体误解并让读者修一份完整结果. 不要把过程记录写进读者正文.

本篇特有边界：默认共同部分+一支15–20分钟；先写自己的六格再看示范. 自动仅检查数值和非空，因果解释须人工复核.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "node_id": "BF-22",
  "content_version": "2026-09-21-review-v3",
  "default_branch": "retail",
  "branch_options": [
    "retail",
    "bank"
  ],
  "branch_tasks": {
    "retail": "先独立填写Costco六格分析，再恢复OI10383与现金14161，解释股数口径和893/963差异；提出两项可推翻的库存解释.",
    "bank": "先独立填写JPM分析，恢复税前72595、现金343338及普通股权益342393；用CIB存款增119826说明为何需要账户/平均余额而非只看总量."
  },
  "required_readings": [
    {
      "source_id": "BF-S-SEC-GUIDE",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "四表、Footnotes、MD&A、Bringing It All Together",
        "scope": "全页",
        "purpose": "综合材料地图"
      },
      "supports": "综合材料地图",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Beginners’ Guide to Financial Statements",
      "authors": [
        "U.S. Securities and Exchange Commission"
      ],
      "version": "2014；Last reviewed 2017",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-01"
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Item1；完整主表；Note1财年/收入/库存/应收/PPE/Leases；Note4",
        "scope": "完整所选单元及脚注",
        "purpose": "零售六格一页分析"
      },
      "supports": "零售六格一页分析",
      "branch": "retail",
      "required_when": "共同或所选行业主线",
      "title": "Costco Wholesale Corporation FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY ended 2025-08-31；比较期2024-09-01",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-02"
    }
  ],
  "optional_readings": [
    {
      "source_id": "EIBC-S04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Item1，Note1 Inventories，MD&A Capital Allocation/FCF/Consolidated Results",
        "scope": "完整选读单元及表格脚注",
        "purpose": "同类零售迁移"
      },
      "supports": "同类零售迁移",
      "branch": "walmart",
      "required_when": "所选扩展启用时",
      "title": "Walmart Inc. FY2026 Form 10-K",
      "authors": [
        "Walmart Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-13",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-04",
      "activated_by": "walmart",
      "required_when_selected": true
    },
    {
      "source_id": "BFFG-C03",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Key Takeaways",
        "scope": "全文",
        "purpose": "历史银行迁移"
      },
      "supports": "历史银行迁移",
      "branch": "svb",
      "required_when": "所选扩展启用时",
      "title": "Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Key Takeaways",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ],
      "version": "2023-04-28；网页更新2023-05-17",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-05",
      "activated_by": "svb",
      "required_when_selected": true
    },
    {
      "source_id": "BFFG-C03L",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Liquidity Supervision",
        "scope": "从Overview起读至该节Conclusions，止于Interest Rate Risk and Investment Portfolio Supervision标题之前",
        "purpose": "可操作融资而非只是资产质量"
      },
      "supports": "可操作融资而非只是资产质量",
      "branch": "svb",
      "required_when": "所选扩展启用时",
      "title": "SVB Review — Supervision of SVBFG by Critical Risk Areas",
      "authors": [
        "Federal Reserve"
      ],
      "version": "2023-04-28",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-06",
      "activated_by": "svb",
      "required_when_selected": true
    },
    {
      "source_id": "BFFG-R02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s11142-026-09971-2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Introduction与§8试用范围",
        "scope": "完整采用单元",
        "purpose": "多渠道证据框架，不自动打分"
      },
      "supports": "多渠道证据框架，不自动打分",
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
      "id": "BF22-READ-07",
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
    "integrated": {
      "retail": {
        "source_id": "BFFG-C01",
        "period": "FY2025 ended 2025-08-31 (52 weeks)",
        "revenue": 275235,
        "oi": 10383,
        "ni": 8099,
        "cfo": 13335,
        "cfi": -5311,
        "cff": -3775,
        "fx": 6,
        "cash_begin": 9906,
        "cash_end": 14161,
        "equity": 29164,
        "equity_prior": 23622,
        "shares_end": 443237000,
        "shares_prior": 443126000,
        "inventory": 18116,
        "inventory_prior": 18647,
        "ap": 19783,
        "ap_prior": 19421,
        "cf_inventory": 559,
        "cf_ap": 404,
        "principal": 5805,
        "capex": 5498,
        "dividends": 2183,
        "repurchases": 903
      },
      "bank": {
        "source_id": "BFFG-C02",
        "period": "FY2025 ended 2025-12-31",
        "net_revenue": 182447,
        "provision": 14212,
        "noninterest_expense": 95640,
        "pretax": 72595,
        "ni": 57048,
        "common_ni": 55681,
        "nii": 95443,
        "noninterest_revenue": 87004,
        "cfo": -147782,
        "cfi": -265565,
        "cff": 269533,
        "fx": 17835,
        "cash_begin": 469317,
        "cash_end": 343338,
        "equity": 362438,
        "preferred": 20045,
        "common_equity": 342393,
        "issued_shares": 4104933895,
        "treasury_shares": 1408661319,
        "shares_end": 2696272576,
        "deposits": 2559320,
        "deposits_prior": 2406032,
        "loans_gross": 1493429,
        "allowance": 25765,
        "loans_net": 1467664,
        "assets": 4424900
      }
    },
    "tables": {
      "cost_bs": {
        "id": "COST-BS-20250831",
        "title": "Consolidated Balance Sheets",
        "source_id": "BFFG-C01",
        "locator": "SEC HTML Consolidated Balance Sheets；IR PDF 印刷p37／物理p43",
        "periods": [
          "2025-08-31",
          "2024-09-01"
        ],
        "unit": "USD M；股数与每股面值按行另标",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "assets",
            "label_original": "ASSETS",
            "label_zh": "资产",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "current_assets",
            "label_original": "CURRENT ASSETS",
            "label_zh": "流动资产",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "cash",
            "label_original": "Cash and cash equivalents",
            "label_zh": "现金及现金等价物",
            "kind": "detail",
            "values": [
              14161,
              9906
            ],
            "original_display": {
              "2025-08-31": "14,161",
              "2024-09-01": "9,906"
            }
          },
          {
            "id": "short_term_investments",
            "label_original": "Short-term investments",
            "label_zh": "短期投资",
            "kind": "detail",
            "values": [
              1123,
              1238
            ],
            "original_display": {
              "2025-08-31": "1,123",
              "2024-09-01": "1,238"
            }
          },
          {
            "id": "receivables_net",
            "label_original": "Receivables, net",
            "label_zh": "应收款净额",
            "kind": "detail",
            "values": [
              3203,
              2721
            ],
            "original_display": {
              "2025-08-31": "3,203",
              "2024-09-01": "2,721"
            }
          },
          {
            "id": "inventory",
            "label_original": "Merchandise inventories",
            "label_zh": "商品存货",
            "kind": "detail",
            "values": [
              18116,
              18647
            ],
            "original_display": {
              "2025-08-31": "18,116",
              "2024-09-01": "18,647"
            }
          },
          {
            "id": "other_current_assets",
            "label_original": "Other current assets",
            "label_zh": "其他流动资产",
            "kind": "detail",
            "values": [
              1777,
              1734
            ],
            "original_display": {
              "2025-08-31": "1,777",
              "2024-09-01": "1,734"
            }
          },
          {
            "id": "total_current_assets",
            "label_original": "Total current assets",
            "label_zh": "流动资产合计",
            "kind": "total",
            "values": [
              38380,
              34246
            ],
            "original_display": {
              "2025-08-31": "**38,380**",
              "2024-09-01": "**34,246**"
            }
          },
          {
            "id": "other_assets",
            "label_original": "OTHER ASSETS",
            "label_zh": "其他资产",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "ppe_net",
            "label_original": "Property and equipment, net",
            "label_zh": "物业及设备净额",
            "kind": "detail",
            "values": [
              31909,
              29032
            ],
            "original_display": {
              "2025-08-31": "31,909",
              "2024-09-01": "29,032"
            }
          },
          {
            "id": "operating_lease_rou",
            "label_original": "Operating lease right-of-use assets",
            "label_zh": "经营租赁使用权资产",
            "kind": "detail",
            "values": [
              2725,
              2617
            ],
            "original_display": {
              "2025-08-31": "2,725",
              "2024-09-01": "2,617"
            }
          },
          {
            "id": "other_long_term_assets",
            "label_original": "Other long-term assets",
            "label_zh": "其他长期资产",
            "kind": "detail",
            "values": [
              4085,
              3936
            ],
            "original_display": {
              "2025-08-31": "4,085",
              "2024-09-01": "3,936"
            }
          },
          {
            "id": "total_assets",
            "label_original": "TOTAL ASSETS",
            "label_zh": "总资产",
            "kind": "total",
            "values": [
              77099,
              69831
            ],
            "original_display": {
              "2025-08-31": "**77,099**",
              "2024-09-01": "**69,831**"
            }
          },
          {
            "id": "liabilities_and_equity",
            "label_original": "LIABILITIES AND EQUITY",
            "label_zh": "负债与权益",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "current_liabilities",
            "label_original": "CURRENT LIABILITIES",
            "label_zh": "流动负债",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "accounts_payable",
            "label_original": "Accounts payable",
            "label_zh": "应付账款",
            "kind": "detail",
            "values": [
              19783,
              19421
            ],
            "original_display": {
              "2025-08-31": "19,783",
              "2024-09-01": "19,421"
            }
          },
          {
            "id": "accrued_salaries_benefits",
            "label_original": "Accrued salaries and benefits",
            "label_zh": "应计工资及福利",
            "kind": "detail",
            "values": [
              5205,
              4794
            ],
            "original_display": {
              "2025-08-31": "5,205",
              "2024-09-01": "4,794"
            }
          },
          {
            "id": "accrued_member_rewards",
            "label_original": "Accrued member rewards",
            "label_zh": "应计会员奖励",
            "kind": "detail",
            "values": [
              2677,
              2435
            ],
            "original_display": {
              "2025-08-31": "2,677",
              "2024-09-01": "2,435"
            }
          },
          {
            "id": "deferred_membership_fees",
            "label_original": "Deferred membership fees",
            "label_zh": "递延会员费",
            "kind": "detail",
            "values": [
              2854,
              2501
            ],
            "original_display": {
              "2025-08-31": "2,854",
              "2024-09-01": "2,501"
            }
          },
          {
            "id": "other_current_liabilities",
            "label_original": "Other current liabilities",
            "label_zh": "其他流动负债",
            "kind": "detail",
            "values": [
              6589,
              6313
            ],
            "original_display": {
              "2025-08-31": "6,589",
              "2024-09-01": "6,313"
            }
          },
          {
            "id": "total_current_liabilities",
            "label_original": "Total current liabilities",
            "label_zh": "流动负债合计",
            "kind": "total",
            "values": [
              37108,
              35464
            ],
            "original_display": {
              "2025-08-31": "**37,108**",
              "2024-09-01": "**35,464**"
            }
          },
          {
            "id": "other_liabilities",
            "label_original": "OTHER LIABILITIES",
            "label_zh": "其他负债",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "long_term_debt",
            "label_original": "Long-term debt, excluding current portion",
            "label_zh": "长期债务，不含流动部分",
            "kind": "detail",
            "values": [
              5713,
              5794
            ],
            "original_display": {
              "2025-08-31": "5,713",
              "2024-09-01": "5,794"
            }
          },
          {
            "id": "long_term_operating_lease_liabilities",
            "label_original": "Long-term operating lease liabilities",
            "label_zh": "长期经营租赁负债",
            "kind": "detail",
            "values": [
              2460,
              2375
            ],
            "original_display": {
              "2025-08-31": "2,460",
              "2024-09-01": "2,375"
            }
          },
          {
            "id": "other_long_term_liabilities",
            "label_original": "Other long-term liabilities",
            "label_zh": "其他长期负债",
            "kind": "detail",
            "values": [
              2654,
              2576
            ],
            "original_display": {
              "2025-08-31": "2,654",
              "2024-09-01": "2,576"
            }
          },
          {
            "id": "total_liabilities",
            "label_original": "TOTAL LIABILITIES",
            "label_zh": "负债合计",
            "kind": "total",
            "values": [
              47935,
              46209
            ],
            "original_display": {
              "2025-08-31": "**47,935**",
              "2024-09-01": "**46,209**"
            }
          },
          {
            "id": "commitments_contingencies",
            "label_original": "COMMITMENTS AND CONTINGENCIES",
            "label_zh": "承诺及或有事项〔原表无金额〕",
            "kind": "disclosure",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "equity",
            "label_original": "EQUITY",
            "label_zh": "权益",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "preferred_stock",
            "label_original": "Preferred stock $0.005 par value; 100,000,000 shares authorized; no shares issued and outstanding",
            "label_zh": "优先股：每股面值0.005美元；授权100,000,000股；无已发行及流通股",
            "kind": "detail",
            "values": [
              0,
              0
            ],
            "original_display": {
              "2025-08-31": "—",
              "2024-09-01": "—"
            }
          },
          {
            "id": "common_stock",
            "label_original": "Common stock $0.005 par value; 900,000,000 shares authorized; 443,237,000 and 443,126,000 shares issued and outstanding",
            "label_zh": "普通股：每股面值0.005美元；授权900,000,000股；两期已发行及流通443,237,000及443,126,000股",
            "kind": "detail",
            "values": [
              2,
              2
            ],
            "original_display": {
              "2025-08-31": "2",
              "2024-09-01": "2"
            }
          },
          {
            "id": "additional_paid_in_capital",
            "label_original": "Additional paid-in capital",
            "label_zh": "额外实缴资本",
            "kind": "detail",
            "values": [
              8282,
              7829
            ],
            "original_display": {
              "2025-08-31": "8,282",
              "2024-09-01": "7,829"
            }
          },
          {
            "id": "aocl",
            "label_original": "Accumulated other comprehensive loss",
            "label_zh": "累计其他综合损失",
            "kind": "detail",
            "values": [
              -1770,
              -1828
            ],
            "original_display": {
              "2025-08-31": "(1,770)",
              "2024-09-01": "(1,828)"
            }
          },
          {
            "id": "retained_earnings",
            "label_original": "Retained earnings",
            "label_zh": "留存收益",
            "kind": "detail",
            "values": [
              22650,
              17619
            ],
            "original_display": {
              "2025-08-31": "22,650",
              "2024-09-01": "17,619"
            }
          },
          {
            "id": "total_equity",
            "label_original": "TOTAL EQUITY",
            "label_zh": "权益合计",
            "kind": "total",
            "values": [
              29164,
              23622
            ],
            "original_display": {
              "2025-08-31": "**29,164**",
              "2024-09-01": "**23,622**"
            }
          },
          {
            "id": "total_liabilities_equity",
            "label_original": "TOTAL LIABILITIES AND EQUITY",
            "label_zh": "负债及权益合计",
            "kind": "total",
            "values": [
              77099,
              69831
            ],
            "original_display": {
              "2025-08-31": "**77,099**",
              "2024-09-01": "**69,831**"
            }
          }
        ],
        "notes": [
          "标题和无金额披露为空，不等于零；括号为减项；明细、小计和总计不得重复相加."
        ]
      },
      "cost_income": {
        "id": "cost_income",
        "title": "Costco Consolidated Statements of Income",
        "source_id": "BFFG-C01",
        "locator": "SEC HTML printed p.37; MD&A Gross Margin p.27",
        "periods": [
          "FY2025 · 2025-08-31 · 52周",
          "FY2024 · 2024-09-01 · 52周",
          "FY2023 · 2023-09-03 · 53周"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "revenue",
            "label_original": "REVENUE",
            "label_zh": "收入",
            "kind": "heading",
            "section": "revenue",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "sales",
            "label_original": "Net sales",
            "label_zh": "净销售额",
            "kind": "detail",
            "section": "revenue",
            "values": [
              269912,
              249625,
              237710
            ]
          },
          {
            "id": "membership",
            "label_original": "Membership fees",
            "label_zh": "会员费",
            "kind": "detail",
            "section": "revenue",
            "values": [
              5323,
              4828,
              4580
            ]
          },
          {
            "id": "revenue_total",
            "label_original": "Total revenue",
            "label_zh": "收入合计",
            "kind": "total",
            "section": "revenue",
            "values": [
              275235,
              254453,
              242290
            ]
          },
          {
            "id": "cost",
            "label_original": "OPERATING EXPENSES",
            "label_zh": "经营费用",
            "kind": "heading",
            "section": "cost",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "merchandise",
            "label_original": "Merchandise costs",
            "label_zh": "商品成本",
            "kind": "detail",
            "section": "cost",
            "values": [
              239886,
              222358,
              212586
            ]
          },
          {
            "id": "sga",
            "label_original": "Selling, general and administrative",
            "label_zh": "销售、一般及行政费用",
            "kind": "detail",
            "section": "cost",
            "values": [
              24966,
              22810,
              21590
            ]
          },
          {
            "id": "operating",
            "label_original": "Operating income",
            "label_zh": "经营利润",
            "kind": "total",
            "section": "operating",
            "values": [
              10383,
              9285,
              8114
            ]
          },
          {
            "id": "other",
            "label_original": "OTHER INCOME (EXPENSE)",
            "label_zh": "其他收益（费用）",
            "kind": "heading",
            "section": "other",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "interest_expense",
            "label_original": "Interest expense",
            "label_zh": "利息费用",
            "kind": "detail",
            "section": "other",
            "values": [
              -154,
              -169,
              -160
            ]
          },
          {
            "id": "interest_other",
            "label_original": "Interest income and other, net",
            "label_zh": "利息收入及其他净额",
            "kind": "detail",
            "section": "other",
            "values": [
              589,
              624,
              533
            ]
          },
          {
            "id": "pretax",
            "label_original": "Income before income taxes",
            "label_zh": "税前利润",
            "kind": "total",
            "section": "pretax",
            "values": [
              10818,
              9740,
              8487
            ]
          },
          {
            "id": "tax",
            "label_original": "Provision for income taxes",
            "label_zh": "所得税费用",
            "kind": "detail",
            "section": "tax",
            "values": [
              2719,
              2373,
              2195
            ]
          },
          {
            "id": "net",
            "label_original": "Net income",
            "label_zh": "净利润",
            "kind": "total",
            "section": "net",
            "values": [
              8099,
              7367,
              6292
            ]
          },
          {
            "id": "eps",
            "label_original": "NET INCOME PER COMMON SHARE",
            "label_zh": "普通股每股净利润（美元/股）",
            "kind": "heading",
            "section": "eps",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "eps_basic",
            "label_original": "Basic",
            "label_zh": "基本每股净利润",
            "kind": "detail",
            "section": "eps",
            "values": [
              18.24,
              16.59,
              14.18
            ]
          },
          {
            "id": "eps_diluted",
            "label_original": "Diluted",
            "label_zh": "稀释每股净利润",
            "kind": "detail",
            "section": "eps",
            "values": [
              18.21,
              16.56,
              14.16
            ]
          },
          {
            "id": "shares",
            "label_original": "SHARES USED IN CALCULATION (000's)",
            "label_zh": "计算使用股数（K 股）",
            "kind": "heading",
            "section": "shares",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "shares_basic",
            "label_original": "Basic",
            "label_zh": "基本加权平均股数",
            "kind": "detail",
            "section": "shares",
            "values": [
              443985,
              443914,
              443854
            ]
          },
          {
            "id": "shares_diluted",
            "label_original": "Diluted",
            "label_zh": "稀释加权平均股数",
            "kind": "detail",
            "section": "shares",
            "values": [
              444803,
              444759,
              444452
            ]
          }
        ],
        "notes": [
          "金额单位为 USD M；EPS为美元/股；股数为K 股. 括号负数按负号保存.",
          "合并利润表未单列毛利；MD&A p.27定义Gross Margin=Net sales−Merchandise costs，2025/24/23分别30026/27267/25124.",
          "2023是53周，2025和2024为52周；比较增长前核对."
        ],
        "retrieved_at": "2026-09-21",
        "provenance": "同会话已核原表输入复用；本批仍保留原标签、比较列与脚注。"
      },
      "cost_cash": {
        "id": "cost_cash",
        "title": "Costco Consolidated Statements of Cash Flows",
        "source_id": "BFFG-C01",
        "locator": "SEC HTML printed p.41",
        "periods": [
          "FY2025 · 52周",
          "FY2024 · 52周",
          "FY2023 · 53周"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "op",
            "label_original": "CASH FLOWS FROM OPERATING ACTIVITIES",
            "label_zh": "经营活动现金流",
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
              8099,
              7367,
              6292
            ]
          },
          {
            "id": "adjust",
            "label_original": "Adjustments to reconcile net income to net cash provided by operating activities",
            "label_zh": "净利润至经营活动净现金的调整",
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
            "label_original": "Depreciation and amortization",
            "label_zh": "折旧及摊销",
            "kind": "detail",
            "section": "cfo",
            "values": [
              2426,
              2237,
              2077
            ]
          },
          {
            "id": "lease",
            "label_original": "Non-cash lease expense",
            "label_zh": "非现金租赁费用",
            "kind": "detail",
            "section": "cfo",
            "values": [
              303,
              315,
              412
            ]
          },
          {
            "id": "sbc",
            "label_original": "Stock-based compensation",
            "label_zh": "股权薪酬",
            "kind": "detail",
            "section": "cfo",
            "values": [
              860,
              818,
              774
            ]
          },
          {
            "id": "noncash",
            "label_original": "Impairment of assets and other non-cash operating activities, net",
            "label_zh": "资产减值及其他非现金经营活动净额",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -117,
              -9,
              495
            ]
          },
          {
            "id": "changes",
            "label_original": "Changes in operating assets and liabilities",
            "label_zh": "经营资产及负债变动",
            "kind": "heading",
            "section": "cfo",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "inventory",
            "label_original": "Merchandise inventories",
            "label_zh": "商品存货变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              559,
              -2068,
              1228
            ]
          },
          {
            "id": "ap",
            "label_original": "Accounts payable",
            "label_zh": "应付账款变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              404,
              1938,
              -382
            ]
          },
          {
            "id": "other",
            "label_original": "Other operating assets and liabilities, net",
            "label_zh": "其他经营资产负债净变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              801,
              741,
              172
            ]
          },
          {
            "id": "cfo",
            "label_original": "Net cash provided by operating activities",
            "label_zh": "经营活动产生净现金",
            "kind": "total",
            "section": "cfo",
            "values": [
              13335,
              11339,
              11068
            ]
          },
          {
            "id": "inv",
            "label_original": "CASH FLOWS FROM INVESTING ACTIVITIES",
            "label_zh": "投资活动现金流",
            "kind": "heading",
            "section": "cfi",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "capex",
            "label_original": "Additions to property and equipment",
            "label_zh": "物业及设备增加的现金支出",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -5498,
              -4710,
              -4323
            ]
          },
          {
            "id": "purchases",
            "label_original": "Purchases of short-term investments",
            "label_zh": "购买短期投资",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -1028,
              -1470,
              -1622
            ]
          },
          {
            "id": "maturities",
            "label_original": "Maturities of short-term investments",
            "label_zh": "短期投资到期",
            "kind": "detail",
            "section": "cfi",
            "values": [
              1141,
              1790,
              937
            ]
          },
          {
            "id": "otherinv",
            "label_original": "Other investing activities, net",
            "label_zh": "其他投资活动净额",
            "kind": "detail",
            "section": "cfi",
            "values": [
              74,
              -19,
              36
            ]
          },
          {
            "id": "cfi",
            "label_original": "Net cash used in investing activities",
            "label_zh": "投资活动使用净现金",
            "kind": "total",
            "section": "cfi",
            "values": [
              -5311,
              -4409,
              -4972
            ]
          },
          {
            "id": "fin",
            "label_original": "CASH FLOWS FROM FINANCING ACTIVITIES",
            "label_zh": "筹资活动现金流",
            "kind": "heading",
            "section": "cff",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "shortrepay",
            "label_original": "Repayments of short-term borrowings",
            "label_zh": "偿还短期借款",
            "kind": "detail",
            "section": "cff",
            "values": [
              -862,
              -920,
              -935
            ]
          },
          {
            "id": "shortissue",
            "label_original": "Proceeds from short-term borrowings",
            "label_zh": "短期借款所得",
            "kind": "detail",
            "section": "cff",
            "values": [
              816,
              928,
              917
            ]
          },
          {
            "id": "longrepay",
            "label_original": "Repayments of long-term debt",
            "label_zh": "偿还长期债务",
            "kind": "detail",
            "section": "cff",
            "values": [
              -103,
              -1077,
              -75
            ]
          },
          {
            "id": "longissue",
            "label_original": "Proceeds from long-term debt",
            "label_zh": "长期债务所得",
            "kind": "detail",
            "section": "cff",
            "values": [
              0,
              498,
              0
            ]
          },
          {
            "id": "taxwithheld",
            "label_original": "Tax withholdings on stock-based awards",
            "label_zh": "股票奖励代扣税款",
            "kind": "detail",
            "section": "cff",
            "values": [
              -393,
              -315,
              -303
            ]
          },
          {
            "id": "repurchases",
            "label_original": "Repurchases of common stock",
            "label_zh": "回购普通股",
            "kind": "detail",
            "section": "cff",
            "values": [
              -903,
              -700,
              -676
            ]
          },
          {
            "id": "dividends",
            "label_original": "Cash dividend payments",
            "label_zh": "支付股息",
            "kind": "detail",
            "section": "cff",
            "values": [
              -2183,
              -9041,
              -1251
            ]
          },
          {
            "id": "otherfin",
            "label_original": "Financing lease payments and other financing activities, net",
            "label_zh": "融资租赁支付及其他筹资净额",
            "kind": "detail",
            "section": "cff",
            "values": [
              -147,
              -137,
              -291
            ]
          },
          {
            "id": "cff",
            "label_original": "Net cash used in financing activities",
            "label_zh": "筹资活动使用净现金",
            "kind": "total",
            "section": "cff",
            "values": [
              -3775,
              -10764,
              -2614
            ]
          },
          {
            "id": "fx",
            "label_original": "Effect of exchange rate changes on cash and cash equivalents",
            "label_zh": "汇率变化对现金及等价物影响",
            "kind": "detail",
            "section": "cash",
            "values": [
              6,
              40,
              15
            ]
          },
          {
            "id": "change",
            "label_original": "Net change in cash and cash equivalents",
            "label_zh": "现金及等价物净变动",
            "kind": "subtotal",
            "section": "cash",
            "values": [
              4255,
              -3794,
              3497
            ]
          },
          {
            "id": "begin",
            "label_original": "Cash and cash equivalents, beginning of year",
            "label_zh": "期初现金及等价物",
            "kind": "balance",
            "section": "cash",
            "values": [
              9906,
              13700,
              10203
            ]
          },
          {
            "id": "end",
            "label_original": "Cash and cash equivalents, end of year",
            "label_zh": "期末现金及等价物",
            "kind": "balance",
            "section": "cash",
            "values": [
              14161,
              9906,
              13700
            ]
          },
          {
            "id": "supp",
            "label_original": "SUPPLEMENTAL DISCLOSURE OF CASH FLOW INFORMATION",
            "label_zh": "补充披露（不重复加总）",
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
            "label_original": "Cash paid during the year for interest",
            "label_zh": "年内已付利息",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              106,
              129,
              125
            ]
          },
          {
            "id": "paidtax",
            "label_original": "Cash paid during the year for income taxes",
            "label_zh": "年内已付所得税",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              2917,
              2319,
              2234
            ]
          },
          {
            "id": "noncashheading",
            "label_original": "SUPPLEMENTAL DISCLOSURE OF NON-CASH ACTIVITIES",
            "label_zh": "非现金活动补充披露",
            "kind": "heading",
            "section": "supplement",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "unpaiddividends",
            "label_original": "Dividends declared, but not yet paid",
            "label_zh": "已宣布而未支付股息",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              0,
              0,
              452
            ]
          },
          {
            "id": "unpaidcapex",
            "label_original": "Capital expenditures included in liabilities",
            "label_zh": "列入负债的资本支出",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              193,
              203,
              170
            ]
          }
        ],
        "notes": [
          "零值按原表破折号语义保留数值0；主表标题无金额为null，不等于0.",
          "其他非现金经营活动净额为负不能整行解释为本期资产减值.",
          "现金集合为cash and cash equivalents；补充的未付资本支出不加到当期现金支出."
        ],
        "aggregation_rules": [
          {
            "target": "cfo",
            "components": [
              "net",
              "da",
              "lease",
              "sbc",
              "noncash",
              "inventory",
              "ap",
              "other"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cfi",
            "components": [
              "capex",
              "purchases",
              "maturities",
              "otherinv"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cff",
            "components": [
              "shortrepay",
              "shortissue",
              "longrepay",
              "longissue",
              "taxwithheld",
              "repurchases",
              "dividends",
              "otherfin"
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
      },
      "wmt_capex": {
        "id": "WMT-CAPEX-FY2026",
        "title": "Allocation of Capital Expenditures",
        "source_id": "BFFG-C06",
        "locator": "MD&A Capital Allocation，印刷p36",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "supply",
            "label_original": "Supply chain, customer-facing initiatives, technology and other",
            "label_zh": "供应链、面向客户项目、技术及其他",
            "values": [
              16468,
              14603
            ],
            "kind": "detail"
          },
          {
            "id": "remodel",
            "label_original": "Store and club remodels",
            "label_zh": "门店及会员店改造",
            "values": [
              5571,
              5552
            ],
            "kind": "detail"
          },
          {
            "id": "new",
            "label_original": "New stores and clubs, including expansions and relocations",
            "label_zh": "新门店及会员店，含扩建与迁址",
            "values": [
              1406,
              450
            ],
            "kind": "detail"
          },
          {
            "id": "us",
            "label_original": "Total U.S.",
            "label_zh": "美国合计",
            "values": [
              23445,
              20605
            ],
            "kind": "subtotal"
          },
          {
            "id": "intl",
            "label_original": "Walmart International",
            "label_zh": "国际业务",
            "values": [
              3197,
              3178
            ],
            "kind": "detail"
          },
          {
            "id": "total",
            "label_original": "Total Capital Expenditures",
            "label_zh": "资本支出合计",
            "values": [
              26642,
              23783
            ],
            "kind": "total"
          }
        ],
        "notes": []
      },
      "wmt_fcf": {
        "id": "WMT-FCF-FY2026",
        "title": "Free Cash Flow reconciliation",
        "source_id": "BFFG-C06",
        "locator": "MD&A Free Cash Flow，印刷p37，含附注(1)",
        "periods": [
          "FY2026",
          "FY2025",
          "FY2024"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "cfo",
            "label_original": "Net cash provided by operating activities",
            "label_zh": "经营现金流",
            "values": [
              41565,
              36443,
              35726
            ],
            "kind": "detail"
          },
          {
            "id": "capex",
            "label_original": "Payments for property and equipment",
            "label_zh": "物业设备付款",
            "values": [
              -26642,
              -23783,
              -20606
            ],
            "kind": "detail"
          },
          {
            "id": "fcf",
            "label_original": "Free cash flow",
            "label_zh": "公司定义FCF",
            "values": [
              14923,
              12660,
              15120
            ],
            "kind": "total"
          },
          {
            "id": "cfi",
            "label_original": "Net cash used in investing activities (1)",
            "label_zh": "投资现金流",
            "values": [
              -26350,
              -21379,
              -21287
            ],
            "kind": "detail"
          },
          {
            "id": "cff",
            "label_original": "Net cash used in financing activities",
            "label_zh": "筹资现金流",
            "values": [
              -13553,
              -14822,
              -13414
            ],
            "kind": "detail"
          }
        ],
        "notes": [
          "(1)投资现金流已经包含物业设备付款. FCF未扣债务服务、其他合同付款及收购，不能再将CFI全额扣一次."
        ]
      },
      "jpm_bs": {
        "id": "JPM-BS-20251231",
        "title": "Consolidated Balance Sheets",
        "source_id": "BFFG-C02",
        "locator": "2025 Annual Report 印刷p167／一基物理p199",
        "periods": [
          "2025-12-31",
          "2024-12-31"
        ],
        "unit": "USD M；股数与每股面值按行另标",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "assets",
            "label_original": "Assets",
            "label_zh": "资产",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "cash_due_from_banks",
            "label_original": "Cash and due from banks",
            "label_zh": "现金及应收银行款",
            "kind": "detail",
            "values": [
              21742,
              23372
            ],
            "original_display": {
              "2025-12-31": "21,742",
              "2024-12-31": "23,372"
            }
          },
          {
            "id": "deposits_with_banks",
            "label_original": "Deposits with banks",
            "label_zh": "存放银行款项",
            "kind": "detail",
            "values": [
              321596,
              445945
            ],
            "original_display": {
              "2025-12-31": "321,596",
              "2024-12-31": "445,945"
            }
          },
          {
            "id": "fed_funds_sold_resale",
            "label_original": "Federal funds sold and securities purchased under resale agreements (included $327,018 and $286,771 at fair value)",
            "label_zh": "拆出联邦基金及买入返售证券〔其中按公允价值计量327,018／286,771〕",
            "kind": "detail",
            "values": [
              336426,
              295001
            ],
            "original_display": {
              "2025-12-31": "336,426",
              "2024-12-31": "295,001"
            }
          },
          {
            "id": "securities_borrowed",
            "label_original": "Securities borrowed (included $98,111 and $83,962 at fair value)",
            "label_zh": "借入证券〔其中按公允价值计量98,111／83,962〕",
            "kind": "detail",
            "values": [
              286191,
              219546
            ],
            "original_display": {
              "2025-12-31": "286,191",
              "2024-12-31": "219,546"
            }
          },
          {
            "id": "trading_assets",
            "label_original": "Trading assets (included assets pledged of $165,927 and $136,070)",
            "label_zh": "交易资产〔其中已质押资产165,927／136,070〕",
            "kind": "detail",
            "values": [
              802873,
              637784
            ],
            "original_display": {
              "2025-12-31": "802,873",
              "2024-12-31": "637,784"
            }
          },
          {
            "id": "afs_securities",
            "label_original": "Available-for-sale securities (amortized cost of $507,226 and $411,045; included assets pledged of $7,735 and $10,162)",
            "label_zh": "可供出售证券〔摊余成本507,226／411,045；其中已质押7,735／10,162〕",
            "kind": "detail",
            "values": [
              507198,
              406852
            ],
            "original_display": {
              "2025-12-31": "507,198",
              "2024-12-31": "406,852"
            }
          },
          {
            "id": "htm_securities",
            "label_original": "Held-to-maturity securities",
            "label_zh": "持有至到期证券",
            "kind": "detail",
            "values": [
              270134,
              274468
            ],
            "original_display": {
              "2025-12-31": "270,134",
              "2024-12-31": "274,468"
            }
          },
          {
            "id": "investment_securities_net",
            "label_original": "Investment securities, net of allowance for credit losses",
            "label_zh": "投资证券，扣除信用损失准备后",
            "kind": "total",
            "values": [
              777332,
              681320
            ],
            "original_display": {
              "2025-12-31": "**777,332**",
              "2024-12-31": "**681,320**"
            }
          },
          {
            "id": "loans_gross",
            "label_original": "Loans (included $70,684 and $41,350 at fair value)",
            "label_zh": "贷款，未扣贷款损失准备〔其中按公允价值计量70,684／41,350〕",
            "kind": "detail",
            "values": [
              1493429,
              1347988
            ],
            "original_display": {
              "2025-12-31": "1,493,429",
              "2024-12-31": "1,347,988"
            }
          },
          {
            "id": "allowance_loan_losses",
            "label_original": "Allowance for loan losses",
            "label_zh": "贷款损失准备〔资产减项〕",
            "kind": "detail",
            "values": [
              -25765,
              -24345
            ],
            "original_display": {
              "2025-12-31": "(25,765)",
              "2024-12-31": "(24,345)"
            }
          },
          {
            "id": "loans_net",
            "label_original": "Loans, net of allowance for loan losses",
            "label_zh": "贷款净额",
            "kind": "total",
            "values": [
              1467664,
              1323643
            ],
            "original_display": {
              "2025-12-31": "**1,467,664**",
              "2024-12-31": "**1,323,643**"
            }
          },
          {
            "id": "accrued_interest_receivables",
            "label_original": "Accrued interest and accounts receivable",
            "label_zh": "应计利息及应收账款",
            "kind": "detail",
            "values": [
              111599,
              101223
            ],
            "original_display": {
              "2025-12-31": "111,599",
              "2024-12-31": "101,223"
            }
          },
          {
            "id": "premises_equipment",
            "label_original": "Premises and equipment",
            "label_zh": "房屋及设备",
            "kind": "detail",
            "values": [
              36244,
              32223
            ],
            "original_display": {
              "2025-12-31": "36,244",
              "2024-12-31": "32,223"
            }
          },
          {
            "id": "goodwill_msrs_other_intangibles",
            "label_original": "Goodwill, MSRs and other intangible assets",
            "label_zh": "商誉、按揭服务权及其他无形资产",
            "kind": "detail",
            "values": [
              64458,
              64560
            ],
            "original_display": {
              "2025-12-31": "64,458",
              "2024-12-31": "64,560"
            }
          },
          {
            "id": "other_assets",
            "label_original": "Other assets (included $15,849 and $15,122 at fair value and assets pledged of $11,984 and $6,288)",
            "label_zh": "其他资产〔其中按公允价值计量15,849／15,122；已质押11,984／6,288〕",
            "kind": "detail",
            "values": [
              198775,
              178197
            ],
            "original_display": {
              "2025-12-31": "198,775",
              "2024-12-31": "178,197"
            }
          },
          {
            "id": "total_assets",
            "label_original": "Total assets(a)",
            "label_zh": "总资产〔附注(a)〕",
            "kind": "total",
            "values": [
              4424900,
              4002814
            ],
            "original_display": {
              "2025-12-31": "**4,424,900**",
              "2024-12-31": "**4,002,814**"
            }
          },
          {
            "id": "liabilities",
            "label_original": "Liabilities",
            "label_zh": "负债",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "customer_deposits",
            "label_original": "Deposits (included $20,930 and $33,768 at fair value)",
            "label_zh": "客户存款〔其中按公允价值计量20,930／33,768〕",
            "kind": "detail",
            "values": [
              2559320,
              2406032
            ],
            "original_display": {
              "2025-12-31": "2,559,320",
              "2024-12-31": "2,406,032"
            }
          },
          {
            "id": "fed_funds_purchased_repo",
            "label_original": "Federal funds purchased and securities loaned or sold under repurchase agreements (included $360,194 and $226,329 at fair value)",
            "label_zh": "拆入联邦基金及证券借出或回购融资〔其中按公允价值计量360,194／226,329〕",
            "kind": "detail",
            "values": [
              442396,
              296835
            ],
            "original_display": {
              "2025-12-31": "442,396",
              "2024-12-31": "296,835"
            }
          },
          {
            "id": "short_term_borrowings",
            "label_original": "Short-term borrowings (included $32,460 and $26,521 at fair value)",
            "label_zh": "短期借款〔其中按公允价值计量32,460／26,521〕",
            "kind": "detail",
            "values": [
              64776,
              52893
            ],
            "original_display": {
              "2025-12-31": "64,776",
              "2024-12-31": "52,893"
            }
          },
          {
            "id": "trading_liabilities",
            "label_original": "Trading liabilities",
            "label_zh": "交易负债",
            "kind": "detail",
            "values": [
              216019,
              192883
            ],
            "original_display": {
              "2025-12-31": "216,019",
              "2024-12-31": "192,883"
            }
          },
          {
            "id": "accounts_payable_other_liabilities",
            "label_original": "Accounts payable and other liabilities (included $6,660 and $5,893 at fair value)",
            "label_zh": "应付账款及其他负债〔其中按公允价值计量6,660／5,893〕",
            "kind": "detail",
            "values": [
              316794,
              280672
            ],
            "original_display": {
              "2025-12-31": "316,794",
              "2024-12-31": "280,672"
            }
          },
          {
            "id": "vie_beneficial_interests",
            "label_original": "Beneficial interests issued by consolidated VIEs (included $5 and $1 at fair value)",
            "label_zh": "合并VIE发行的受益权益〔其中按公允价值计量5／1〕",
            "kind": "detail",
            "values": [
              27951,
              27323
            ],
            "original_display": {
              "2025-12-31": "27,951",
              "2024-12-31": "27,323"
            }
          },
          {
            "id": "long_term_debt",
            "label_original": "Long-term debt (included $134,559 and $100,780 at fair value)",
            "label_zh": "长期债务〔其中按公允价值计量134,559／100,780〕",
            "kind": "detail",
            "values": [
              435206,
              401418
            ],
            "original_display": {
              "2025-12-31": "435,206",
              "2024-12-31": "401,418"
            }
          },
          {
            "id": "total_liabilities",
            "label_original": "Total liabilities(a)",
            "label_zh": "负债合计〔附注(a)〕",
            "kind": "total",
            "values": [
              4062462,
              3658056
            ],
            "original_display": {
              "2025-12-31": "**4,062,462**",
              "2024-12-31": "**3,658,056**"
            }
          },
          {
            "id": "commitments_contingencies",
            "label_original": "Commitments and contingencies (refer to Notes 28, 29 and 30)",
            "label_zh": "承诺及或有事项〔参见Notes 28、29、30；原表无金额〕",
            "kind": "disclosure",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "equity",
            "label_original": "Stockholders’ equity",
            "label_zh": "股东权益",
            "kind": "heading",
            "values": [
              null,
              null
            ],
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "preferred_stock",
            "label_original": "Preferred stock ($1 par value; authorized 200,000,000 shares: issued 2,005,375 and 2,005,375 shares)",
            "label_zh": "优先股：面值每股1美元；授权200,000,000股；两期已发行均为2,005,375股",
            "kind": "detail",
            "values": [
              20045,
              20050
            ],
            "original_display": {
              "2025-12-31": "20,045",
              "2024-12-31": "20,050"
            }
          },
          {
            "id": "common_stock",
            "label_original": "Common stock ($1 par value; authorized 9,000,000,000 shares; issued 4,104,933,895 shares)",
            "label_zh": "普通股：面值每股1美元；授权9,000,000,000股；已发行4,104,933,895股",
            "kind": "detail",
            "values": [
              4105,
              4105
            ],
            "original_display": {
              "2025-12-31": "4,105",
              "2024-12-31": "4,105"
            }
          },
          {
            "id": "additional_paid_in_capital",
            "label_original": "Additional paid-in capital",
            "label_zh": "额外实缴资本",
            "kind": "detail",
            "values": [
              91114,
              90911
            ],
            "original_display": {
              "2025-12-31": "91,114",
              "2024-12-31": "90,911"
            }
          },
          {
            "id": "retained_earnings",
            "label_original": "Retained earnings",
            "label_zh": "留存收益",
            "kind": "detail",
            "values": [
              416055,
              376166
            ],
            "original_display": {
              "2025-12-31": "416,055",
              "2024-12-31": "376,166"
            }
          },
          {
            "id": "aocl",
            "label_original": "Accumulated other comprehensive losses",
            "label_zh": "累计其他综合损失",
            "kind": "detail",
            "values": [
              -4290,
              -12456
            ],
            "original_display": {
              "2025-12-31": "(4,290)",
              "2024-12-31": "(12,456)"
            }
          },
          {
            "id": "treasury_stock",
            "label_original": "Treasury stock, at cost (1,408,661,319 and 1,307,313,494 shares)",
            "label_zh": "库存股，按成本〔股数1,408,661,319／1,307,313,494〕",
            "kind": "detail",
            "values": [
              -164591,
              -134018
            ],
            "original_display": {
              "2025-12-31": "(164,591)",
              "2024-12-31": "(134,018)"
            }
          },
          {
            "id": "total_equity",
            "label_original": "Total stockholders’ equity",
            "label_zh": "股东权益合计",
            "kind": "total",
            "values": [
              362438,
              344758
            ],
            "original_display": {
              "2025-12-31": "**362,438**",
              "2024-12-31": "**344,758**"
            }
          },
          {
            "id": "total_liabilities_equity",
            "label_original": "Total liabilities and stockholders’ equity",
            "label_zh": "负债及股东权益合计",
            "kind": "total",
            "values": [
              4424900,
              4002814
            ],
            "original_display": {
              "2025-12-31": "**4,424,900**",
              "2024-12-31": "**4,002,814**"
            }
          }
        ],
        "notes": [
          "标题和无金额披露为空，不等于零；括号为减项；明细、小计和总计不得重复相加.",
          "脚注(a)：所列VIE资产负债已包含于主表，排除被合并抵销的集团内余额，不能再次加总."
        ],
        "vie_note_rows": [
          {
            "id": "vie-assets",
            "label_original_md": "**Assets**",
            "label_zh_md": "**资产**",
            "amounts": {
              "2025-12-31": null,
              "2024-12-31": null
            },
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "vie-trading_assets",
            "label_original_md": "Trading assets",
            "label_zh_md": "交易资产",
            "amounts": {
              "2025-12-31": 4835,
              "2024-12-31": 3885
            },
            "original_display": {
              "2025-12-31": "4,835",
              "2024-12-31": "3,885"
            }
          },
          {
            "id": "vie-loans",
            "label_original_md": "Loans",
            "label_zh_md": "贷款",
            "amounts": {
              "2025-12-31": 37777,
              "2024-12-31": 36510
            },
            "original_display": {
              "2025-12-31": "37,777",
              "2024-12-31": "36,510"
            }
          },
          {
            "id": "vie-all_other_assets",
            "label_original_md": "All other assets",
            "label_zh_md": "其他资产",
            "amounts": {
              "2025-12-31": 683,
              "2024-12-31": 681
            },
            "original_display": {
              "2025-12-31": "683",
              "2024-12-31": "681"
            }
          },
          {
            "id": "vie-total_assets",
            "label_original_md": "**Total assets**",
            "label_zh_md": "**资产合计**",
            "amounts": {
              "2025-12-31": 43295,
              "2024-12-31": 41076
            },
            "original_display": {
              "2025-12-31": "**43,295**",
              "2024-12-31": "**41,076**"
            }
          },
          {
            "id": "vie-liabilities",
            "label_original_md": "**Liabilities**",
            "label_zh_md": "**负债**",
            "amounts": {
              "2025-12-31": null,
              "2024-12-31": null
            },
            "original_display": {
              "2025-12-31": "",
              "2024-12-31": ""
            }
          },
          {
            "id": "vie-beneficial_interests",
            "label_original_md": "Beneficial interests issued by consolidated VIEs",
            "label_zh_md": "合并VIE发行的受益权益",
            "amounts": {
              "2025-12-31": 27951,
              "2024-12-31": 27323
            },
            "original_display": {
              "2025-12-31": "27,951",
              "2024-12-31": "27,323"
            }
          },
          {
            "id": "vie-all_other_liabilities",
            "label_original_md": "All other liabilities",
            "label_zh_md": "其他负债",
            "amounts": {
              "2025-12-31": 691,
              "2024-12-31": 454
            },
            "original_display": {
              "2025-12-31": "691",
              "2024-12-31": "454"
            }
          },
          {
            "id": "vie-total_liabilities",
            "label_original_md": "**Total liabilities**",
            "label_zh_md": "**负债合计**",
            "amounts": {
              "2025-12-31": 28642,
              "2024-12-31": 27777
            },
            "original_display": {
              "2025-12-31": "**28,642**",
              "2024-12-31": "**27,777**"
            }
          }
        ]
      },
      "jpm_income": {
        "id": "jpm_income",
        "title": "JPMorgan Chase Consolidated Statements of Income",
        "source_id": "BFFG-C02",
        "locator": "Printed p.165 / physical PDF p.197",
        "periods": [
          "2025",
          "2024",
          "2023"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "revenue",
            "label_original": "Revenue",
            "label_zh": "收入",
            "kind": "heading",
            "section": "noninterest",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "ib",
            "label_original": "Investment banking fees",
            "label_zh": "投资银行费用收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              9615,
              8910,
              6519
            ]
          },
          {
            "id": "principal",
            "label_original": "Principal transactions",
            "label_zh": "交易业务收益（原行 Principal transactions）",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              27212,
              24787,
              24460
            ]
          },
          {
            "id": "lendingfees",
            "label_original": "Lending- and deposit-related fees",
            "label_zh": "贷款及存款相关费用收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              9093,
              7606,
              7413
            ]
          },
          {
            "id": "am",
            "label_original": "Asset management fees",
            "label_zh": "资产管理费用收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              20327,
              17801,
              15220
            ]
          },
          {
            "id": "commissions",
            "label_original": "Commissions and other fees",
            "label_zh": "佣金及其他费用收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              8539,
              7530,
              6836
            ]
          },
          {
            "id": "investment",
            "label_original": "Investment securities losses",
            "label_zh": "投资证券收益／损失",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              -57,
              -1021,
              -3180
            ]
          },
          {
            "id": "mortgage",
            "label_original": "Mortgage fees and related income",
            "label_zh": "按揭费用及相关收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              1381,
              1401,
              1176
            ]
          },
          {
            "id": "card",
            "label_original": "Card income",
            "label_zh": "银行卡收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              4720,
              5497,
              4784
            ]
          },
          {
            "id": "otherincome",
            "label_original": "Other income",
            "label_zh": "其他收入",
            "kind": "detail",
            "section": "noninterest",
            "values": [
              6174,
              12462,
              5609
            ]
          },
          {
            "id": "noninterest_total",
            "label_original": "Noninterest revenue",
            "label_zh": "非利息收入",
            "kind": "subtotal",
            "section": "noninterest",
            "values": [
              87004,
              84973,
              68837
            ]
          },
          {
            "id": "interestincome",
            "label_original": "Interest income",
            "label_zh": "利息收入",
            "kind": "detail",
            "section": "interest",
            "values": [
              193341,
              193933,
              170588
            ]
          },
          {
            "id": "interestexpense",
            "label_original": "Interest expense",
            "label_zh": "利息支出",
            "kind": "detail",
            "section": "interest",
            "values": [
              97898,
              101350,
              81321
            ]
          },
          {
            "id": "nii",
            "label_original": "Net interest income",
            "label_zh": "净利息收入",
            "kind": "subtotal",
            "section": "interest",
            "values": [
              95443,
              92583,
              89267
            ]
          },
          {
            "id": "netrevenue",
            "label_original": "Total net revenue",
            "label_zh": "净收入合计",
            "kind": "total",
            "section": "revenue",
            "values": [
              182447,
              177556,
              158104
            ]
          },
          {
            "id": "provision",
            "label_original": "Provision for credit losses",
            "label_zh": "信用损失计提",
            "kind": "detail",
            "section": "provision",
            "values": [
              14212,
              10678,
              9320
            ]
          },
          {
            "id": "expenses",
            "label_original": "Noninterest expense",
            "label_zh": "非利息费用",
            "kind": "heading",
            "section": "expense",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "compensation",
            "label_original": "Compensation expense",
            "label_zh": "薪酬费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              54487,
              51357,
              46465
            ]
          },
          {
            "id": "occupancy",
            "label_original": "Occupancy expense",
            "label_zh": "场地费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              5461,
              5026,
              4590
            ]
          },
          {
            "id": "technology",
            "label_original": "Technology, communications and equipment expense",
            "label_zh": "技术、通信及设备费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              11029,
              9831,
              9246
            ]
          },
          {
            "id": "professional",
            "label_original": "Professional and outside services",
            "label_zh": "专业及外部服务费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              12356,
              11057,
              10235
            ]
          },
          {
            "id": "marketing",
            "label_original": "Marketing",
            "label_zh": "营销费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              5531,
              4974,
              4591
            ]
          },
          {
            "id": "otherexpense",
            "label_original": "Other expense",
            "label_zh": "其他费用",
            "kind": "detail",
            "section": "expense",
            "values": [
              6776,
              9552,
              12045
            ]
          },
          {
            "id": "expense_total",
            "label_original": "Total noninterest expense",
            "label_zh": "非利息费用合计",
            "kind": "subtotal",
            "section": "expense",
            "values": [
              95640,
              91797,
              87172
            ]
          },
          {
            "id": "pretax",
            "label_original": "Income before income tax expense",
            "label_zh": "税前利润",
            "kind": "total",
            "section": "pretax",
            "values": [
              72595,
              75081,
              61612
            ]
          },
          {
            "id": "tax",
            "label_original": "Income tax expense",
            "label_zh": "所得税费用",
            "kind": "detail",
            "section": "tax",
            "values": [
              15547,
              16610,
              12060
            ]
          },
          {
            "id": "net",
            "label_original": "Net income",
            "label_zh": "净利润",
            "kind": "total",
            "section": "net",
            "values": [
              57048,
              58471,
              49552
            ]
          },
          {
            "id": "common_net",
            "label_original": "Net income applicable to common stockholders",
            "label_zh": "归属于普通股权益的净利润",
            "kind": "total",
            "section": "common",
            "values": [
              55681,
              56868,
              47760
            ]
          },
          {
            "id": "eps",
            "label_original": "Net income per common share data",
            "label_zh": "普通股每股净利润数据（美元/股）",
            "kind": "heading",
            "section": "eps",
            "values": [
              null,
              null,
              null
            ]
          },
          {
            "id": "eps_basic",
            "label_original": "Basic earnings per share",
            "label_zh": "基本每股净利润",
            "kind": "detail",
            "section": "eps",
            "values": [
              20.05,
              19.79,
              16.25
            ]
          },
          {
            "id": "eps_diluted",
            "label_original": "Diluted earnings per share",
            "label_zh": "稀释每股净利润",
            "kind": "detail",
            "section": "eps",
            "values": [
              20.02,
              19.75,
              16.23
            ]
          },
          {
            "id": "shares_basic",
            "label_original": "Weighted-average basic shares",
            "label_zh": "基本加权平均股数（ M 股）",
            "kind": "detail",
            "section": "shares",
            "values": [
              2776.5,
              2873.9,
              2938.6
            ]
          },
          {
            "id": "shares_diluted",
            "label_original": "Weighted-average diluted shares",
            "label_zh": "稀释加权平均股数（ M 股）",
            "kind": "detail",
            "section": "shares",
            "values": [
              2781.5,
              2879,
              2943.1
            ]
          }
        ],
        "notes": [
          "GAAP集团合并口径，不混入managed/FTE分部口径.",
          "费用行原表为正额，计算中减去；投资证券损失为带负号收入.",
          "EPS为美元/股，股数为 M 股；原表应与附注一同阅读."
        ],
        "retrieved_at": "2026-09-21",
        "provenance": "同会话已核原表输入复用；本批仍保留原标签、比较列与脚注。"
      },
      "jpm_cash": {
        "id": "jpm_cash",
        "title": "JPMorgan Chase Consolidated Statements of Cash Flows",
        "source_id": "BFFG-C02",
        "locator": "Printed p.169 / physical PDF p.201",
        "periods": [
          "2025",
          "2024",
          "2023"
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
              57048,
              58471,
              49552
            ]
          },
          {
            "id": "provision",
            "label_original": "Provision for credit losses",
            "label_zh": "信用损失计提",
            "kind": "detail",
            "section": "cfo",
            "values": [
              14212,
              10678,
              9320
            ]
          },
          {
            "id": "da",
            "label_original": "Depreciation and amortization",
            "label_zh": "折旧摊销",
            "kind": "detail",
            "section": "cfo",
            "values": [
              8821,
              7938,
              7512
            ]
          },
          {
            "id": "deferred",
            "label_original": "Deferred tax expense (benefit)",
            "label_zh": "递延所得税费用／利益",
            "kind": "detail",
            "section": "cfo",
            "values": [
              5611,
              2004,
              -4534
            ]
          },
          {
            "id": "fr",
            "label_original": "Bargain purchase gain associated with First Republic acquisition",
            "label_zh": "First Republic收购廉价购买收益调整",
            "kind": "detail",
            "section": "cfo",
            "values": [
              0,
              -103,
              -2775
            ]
          },
          {
            "id": "visa",
            "label_original": "Initial gain on Visa exchange",
            "label_zh": "Visa交换初始收益调整",
            "kind": "detail",
            "section": "cfo",
            "values": [
              0,
              -7990,
              0
            ]
          },
          {
            "id": "otheradjust",
            "label_original": "Other adjustments",
            "label_zh": "其他调整",
            "kind": "detail",
            "section": "cfo",
            "values": [
              1309,
              1985,
              4301
            ]
          },
          {
            "id": "hfsorigin",
            "label_original": "Originations and purchases of loans held-for-sale",
            "label_zh": "待售贷款发放及购买",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -260772,
              -212238,
              -115245
            ]
          },
          {
            "id": "hfssales",
            "label_original": "Proceeds from sales, securitizations and paydowns of loans held-for-sale",
            "label_zh": "待售贷款出售、证券化及偿还所得",
            "kind": "detail",
            "section": "cfo",
            "values": [
              235232,
              205303,
              116430
            ]
          },
          {
            "id": "tradingassets",
            "label_original": "Trading assets",
            "label_zh": "交易资产变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -156461,
              -95729,
              -74091
            ]
          },
          {
            "id": "securitiesborrowed",
            "label_original": "Securities borrowed",
            "label_zh": "借入证券变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -66648,
              -18762,
              -14902
            ]
          },
          {
            "id": "receivables",
            "label_original": "Accrued interest and accounts receivable",
            "label_zh": "应计利息和应收账款变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -11514,
              5735,
              19928
            ]
          },
          {
            "id": "otherassets",
            "label_original": "Other assets",
            "label_zh": "其他资产变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              -12582,
              -7650,
              32970
            ]
          },
          {
            "id": "tradingliabilities",
            "label_original": "Trading liabilities",
            "label_zh": "交易负债变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              23134,
              2276,
              5315
            ]
          },
          {
            "id": "ap",
            "label_original": "Accounts payable and other liabilities",
            "label_zh": "应付及其他负债变动",
            "kind": "detail",
            "section": "cfo",
            "values": [
              5270,
              -90,
              -25388
            ]
          },
          {
            "id": "otheroperating",
            "label_original": "Other operating adjustments",
            "label_zh": "其他经营调整",
            "kind": "detail",
            "section": "cfo",
            "values": [
              9558,
              6160,
              4581
            ]
          },
          {
            "id": "cfo",
            "label_original": "Net cash provided by (used in) operating activities",
            "label_zh": "经营活动产生／使用净现金",
            "kind": "total",
            "section": "cfo",
            "values": [
              -147782,
              -42012,
              12974
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
            "id": "resale",
            "label_original": "Federal funds sold and securities purchased under resale agreements",
            "label_zh": "拆出联邦基金及买入返售变动",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -41264,
              -18706,
              39740
            ]
          },
          {
            "id": "htmmaturity",
            "label_original": "Proceeds from maturities and paydowns of held-to-maturity securities",
            "label_zh": "HTM到期偿还所得",
            "kind": "detail",
            "section": "cfi",
            "values": [
              54791,
              99363,
              53056
            ]
          },
          {
            "id": "htmbuy",
            "label_original": "Purchases of held-to-maturity securities",
            "label_zh": "买入HTM",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -5432,
              -4709,
              -4141
            ]
          },
          {
            "id": "afspay",
            "label_original": "Proceeds from maturities and paydowns of available-for-sale securities",
            "label_zh": "AFS到期偿还所得",
            "kind": "detail",
            "section": "cfi",
            "values": [
              37414,
              38499,
              53744
            ]
          },
          {
            "id": "afssell",
            "label_original": "Proceeds from sales of available-for-sale securities",
            "label_zh": "出售AFS所得",
            "kind": "detail",
            "section": "cfi",
            "values": [
              141295,
              104625,
              108434
            ]
          },
          {
            "id": "afsbuy",
            "label_original": "Purchases of available-for-sale securities",
            "label_zh": "购入AFS",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -308772,
              -352712,
              -115499
            ]
          },
          {
            "id": "hfi",
            "label_original": "Proceeds from sales and securitizations of loans held-for-investment",
            "label_zh": "留存投资贷款出售及证券化所得",
            "kind": "detail",
            "section": "cfi",
            "values": [
              57565,
              57921,
              47312
            ]
          },
          {
            "id": "otherloans",
            "label_original": "Other changes in loans, net",
            "label_zh": "其他贷款净变动",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -188497,
              -83176,
              -88343
            ]
          },
          {
            "id": "fracquisition",
            "label_original": "Cash paid for First Republic acquisition",
            "label_zh": "First Republic收购现金支出",
            "kind": "detail",
            "section": "cfi",
            "values": [
              0,
              -2362,
              -9920
            ]
          },
          {
            "id": "otherinv",
            "label_original": "All other investing activities, net",
            "label_zh": "其他投资活动净额",
            "kind": "detail",
            "section": "cfi",
            "values": [
              -12665,
              -2146,
              -16740
            ]
          },
          {
            "id": "cfi",
            "label_original": "Net cash provided by (used in) investing activities",
            "label_zh": "投资活动产生／使用净现金",
            "kind": "total",
            "section": "cfi",
            "values": [
              -265565,
              -163403,
              67643
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
            "id": "deposits",
            "label_original": "Deposits",
            "label_zh": "客户存款变动",
            "kind": "detail",
            "section": "cff",
            "values": [
              153168,
              3299,
              -32196
            ]
          },
          {
            "id": "repo",
            "label_original": "Federal funds purchased and securities loaned or sold under repurchase agreements",
            "label_zh": "拆入联邦基金及证券出借／回购变动",
            "kind": "detail",
            "section": "cff",
            "values": [
              145535,
              80288,
              13801
            ]
          },
          {
            "id": "short",
            "label_original": "Short-term borrowings",
            "label_zh": "短期借款变动",
            "kind": "detail",
            "section": "cff",
            "values": [
              9422,
              7439,
              -1934
            ]
          },
          {
            "id": "vie",
            "label_original": "Beneficial interests issued by consolidated VIEs",
            "label_zh": "合并VIE发行受益权变动",
            "kind": "detail",
            "section": "cff",
            "values": [
              -622,
              1543,
              9029
            ]
          },
          {
            "id": "longissue",
            "label_original": "Proceeds from long-term borrowings",
            "label_zh": "长期借款所得",
            "kind": "detail",
            "section": "cff",
            "values": [
              120761,
              109915,
              75417
            ]
          },
          {
            "id": "longpay",
            "label_original": "Payments of long-term borrowings",
            "label_zh": "偿还长期借款",
            "kind": "detail",
            "section": "cff",
            "values": [
              -108100,
              -96605,
              -64880
            ]
          },
          {
            "id": "preferredissue",
            "label_original": "Proceeds from issuance of preferred stock",
            "label_zh": "发行优先股所得",
            "kind": "detail",
            "section": "cff",
            "values": [
              3000,
              2500,
              0
            ]
          },
          {
            "id": "preferredpay",
            "label_original": "Redemption of preferred stock",
            "label_zh": "赎回优先股",
            "kind": "detail",
            "section": "cff",
            "values": [
              -3000,
              -9850,
              0
            ]
          },
          {
            "id": "treasury",
            "label_original": "Treasury stock repurchased",
            "label_zh": "购买库存股",
            "kind": "detail",
            "section": "cff",
            "values": [
              -31591,
              -18830,
              -9824
            ]
          },
          {
            "id": "dividends",
            "label_original": "Dividends paid",
            "label_zh": "支付股息",
            "kind": "detail",
            "section": "cff",
            "values": [
              -16625,
              -14783,
              -13463
            ]
          },
          {
            "id": "otherfin",
            "label_original": "All other financing activities, net",
            "label_zh": "其他筹资活动净额",
            "kind": "detail",
            "section": "cff",
            "values": [
              -2415,
              -1469,
              -1521
            ]
          },
          {
            "id": "cff",
            "label_original": "Net cash provided by (used in) financing activities",
            "label_zh": "筹资活动产生／使用净现金",
            "kind": "total",
            "section": "cff",
            "values": [
              269533,
              63447,
              -25571
            ]
          },
          {
            "id": "fx",
            "label_original": "Effect of exchange rate changes",
            "label_zh": "汇率变化影响",
            "kind": "detail",
            "section": "cash",
            "values": [
              17835,
              -12866,
              1871
            ]
          },
          {
            "id": "change",
            "label_original": "Net increase (decrease) in cash and due from banks and deposits with banks",
            "label_zh": "指定现金集合净变动",
            "kind": "subtotal",
            "section": "cash",
            "values": [
              -125979,
              -154834,
              56917
            ]
          },
          {
            "id": "begin",
            "label_original": "Cash and due from banks and deposits with banks, beginning of year",
            "label_zh": "期初现金、应收银行款及存放银行款",
            "kind": "balance",
            "section": "cash",
            "values": [
              469317,
              624151,
              567234
            ]
          },
          {
            "id": "end",
            "label_original": "Cash and due from banks and deposits with banks, end of year",
            "label_zh": "期末现金、应收银行款及存放银行款",
            "kind": "balance",
            "section": "cash",
            "values": [
              343338,
              469317,
              624151
            ]
          },
          {
            "id": "supp",
            "label_original": "Supplemental disclosures of cash flow information",
            "label_zh": "补充披露",
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
            "label_original": "Cash interest paid",
            "label_zh": "已付现金利息",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              96436,
              99642,
              77114
            ]
          },
          {
            "id": "paidtax",
            "label_original": "Income taxes paid, net",
            "label_zh": "已付所得税净额",
            "kind": "supplement",
            "section": "supplement",
            "values": [
              5309,
              11715,
              9908
            ]
          }
        ],
        "notes": [
          "此表以原页重新排版；行名称保留业务含义，原文图像位于PDF第201页.",
          "JPM现金集合为cash and due from banks and deposits with banks，不能改称普通公司cash equivalents.",
          "变化和合计按原表符号；经营资产扩张与客户存款筹资分属不同活动类别."
        ],
        "aggregation_rules": [
          {
            "target": "cfo",
            "components": [
              "net",
              "provision",
              "da",
              "deferred",
              "fr",
              "visa",
              "otheradjust",
              "hfsorigin",
              "hfssales",
              "tradingassets",
              "securitiesborrowed",
              "receivables",
              "otherassets",
              "tradingliabilities",
              "ap",
              "otheroperating"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cfi",
            "components": [
              "resale",
              "htmmaturity",
              "htmbuy",
              "afspay",
              "afssell",
              "afsbuy",
              "hfi",
              "otherloans",
              "fracquisition",
              "otherinv"
            ],
            "operation": "signed_sum"
          },
          {
            "target": "cff",
            "components": [
              "deposits",
              "repo",
              "short",
              "vie",
              "longissue",
              "longpay",
              "preferredissue",
              "preferredpay",
              "treasury",
              "dividends",
              "otherfin"
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
      },
      "jpm_lcr": {
        "id": "JPM-LCR-Q42025",
        "title": "Liquidity Coverage Ratio",
        "source_id": "BFFG-C02",
        "locator": "Annual Report printed p101／一基PDF物理p133；表及(a)(b)脚注",
        "periods": [
          "3m ended 2025-12-31",
          "3m ended 2025-09-30",
          "3m ended 2024-12-31"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "cash",
            "label_original": "Eligible cash",
            "label_zh": "符合条件的现金",
            "values": [
              281117,
              308298,
              396123
            ],
            "kind": "detail"
          },
          {
            "id": "securities",
            "label_original": "Eligible securities",
            "label_zh": "符合条件的证券",
            "values": [
              680862,
              638020,
              464877
            ],
            "kind": "detail"
          },
          {
            "id": "hqla",
            "label_original": "Total eligible HQLA",
            "label_zh": "集团HQLA合计",
            "values": [
              961979,
              946318,
              861000
            ],
            "kind": "total"
          },
          {
            "id": "outflows",
            "label_original": "Total net cash outflows",
            "label_zh": "净现金流出压力量",
            "values": [
              868500,
              858157,
              763648
            ],
            "kind": "detail"
          },
          {
            "id": "ratio",
            "label_original": "LCR",
            "label_zh": "集团LCR（%）",
            "values": [
              111,
              110,
              113
            ],
            "kind": "detail"
          },
          {
            "id": "excess",
            "label_original": "Net excess eligible HQLA",
            "label_zh": "集团超额HQLA",
            "values": [
              93479,
              88161,
              97352
            ],
            "kind": "detail"
          },
          {
            "id": "bankratio",
            "label_original": "JPMorgan Chase Bank, N.A. LCR",
            "label_zh": "银行法人LCR（%）",
            "values": [
              115,
              117,
              124
            ],
            "kind": "detail"
          },
          {
            "id": "bankexcess",
            "label_original": "JPMorgan Chase Bank, N.A. net excess eligible HQLA",
            "label_zh": "银行法人超额HQLA",
            "values": [
              138052,
              152886,
              193682
            ],
            "kind": "detail"
          }
        ],
        "notes": [
          "季度平均；银行法人行与集团行身份不同. 证券使用监管公允价值及haircut口径.",
          "集团排除银行超过独立最低要求且无法转移给非银行关联方的HQLA；金额比值不是逐日监管比率平均的重新计算."
        ]
      },
      "jpm_deposits": {
        "id": "JPM-DEPOSITS-2025",
        "title": "Deposits",
        "source_id": "BFFG-C02",
        "locator": "Annual Report printed p103／一基PDF物理p135",
        "periods": [
          "2025-12-31",
          "2024-12-31",
          "2025 average",
          "2024 average"
        ],
        "unit": "USD M",
        "data_identity": "historical_observation",
        "rows": [
          {
            "id": "ccb",
            "label_original": "Consumer & Community Banking",
            "label_zh": "消费者与社区银行",
            "values": [
              1072792,
              1056652,
              1057232,
              1064215
            ],
            "kind": "detail"
          },
          {
            "id": "cib",
            "label_original": "Commercial & Investment Bank",
            "label_zh": "商业与投资银行",
            "values": [
              1193338,
              1073512,
              1174581,
              1061488
            ],
            "kind": "detail"
          },
          {
            "id": "awm",
            "label_original": "Asset & Wealth Management",
            "label_zh": "资产与财富管理",
            "values": [
              257316,
              248287,
              245248,
              235146
            ],
            "kind": "detail"
          },
          {
            "id": "corp",
            "label_original": "Corporate",
            "label_zh": "公司层",
            "values": [
              35874,
              27581,
              29504,
              25793
            ],
            "kind": "detail"
          },
          {
            "id": "total",
            "label_original": "Total",
            "label_zh": "存款合计",
            "values": [
              2559320,
              2406032,
              2506565,
              2386642
            ],
            "kind": "total"
          }
        ],
        "notes": []
      }
    },
    "walmart": {
      "source_id": "BFFG-C06",
      "period": "FY2026 ended 2026-01-31",
      "unit": "USD M",
      "revenue": 713163,
      "net_sales": 706413,
      "oi": 29825,
      "cfo": 41565,
      "capex": 26642,
      "fcf": 14923,
      "notes": [
        "三报告分部：Walmart U.S.、Walmart International、Sam’s Club U.S..",
        "美国/加拿大1月31日年结，其他经营通常自然年口径滞后一个月合并.",
        "美国RIM/LIFO、国际依业态RIM或加权平均/FIFO、Sam’s Club多数加权平均/LIFO，按原政策保留."
      ]
    },
    "jpm_liquidity": {
      "source_id": "BFFG-C02",
      "unit": "USD M unless marked",
      "average_period": "three months ended 2025-12-31",
      "group": {
        "eligible_cash": 281117,
        "eligible_securities": 680862,
        "hqla": 961979,
        "nco": 868500,
        "reported_lcr_pct": 111,
        "excess": 93479
      },
      "bank_na": {
        "reported_lcr_pct": 115,
        "excess": 138052
      },
      "period_end": {
        "date": "2025-12-31",
        "hqla_pre_haircut_approx_bn": 915,
        "other_unencumbered_approx_bn": 548,
        "reported_available_approx_tn": 1.5,
        "conditional_borrowing_approx_bn": 449,
        "deposits": 2559320,
        "uninsured_estimate": 1558600
      },
      "notes": [
        "449bn原文明确排除已列HQLA/其他无抵押证券带来的相关能力，不能武断称必然重复.",
        "期末资产与有条件融资能力分别呈现，不输出无条件挤兑覆盖率."
      ]
    },
    "svb": {
      "source_id": "BFFG-C03",
      "data_identity": "historical_official_review",
      "date": "2023-04-28",
      "events": [
        {
          "date": "2023-03-08",
          "kind": "announced",
          "text": "证券出售与拟增资的资产负债调整公告"
        },
        {
          "date": "2023-03-09",
          "kind": "realized",
          "text": "单日存款流出超过40 B 美元"
        },
        {
          "date": "2023-03-10",
          "kind": "expected_not_realized_total",
          "text": "管理层预计额外100 B 美元流出；当日银行关闭"
        }
      ],
      "notes": "预期流出不是另一笔已实现历史流出；不得两项相加称已完成提款."
    }
  },
  "entry_id": "zh-bf22",
  "selected_branch": "retail",
  "required_readings_by_branch": {
    "retail": [
      {
        "source_id": "BF-S-SEC-GUIDE",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "四表、Footnotes、MD&A、Bringing It All Together",
          "scope": "全页",
          "purpose": "综合材料地图"
        },
        "supports": "综合材料地图",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Beginners’ Guide to Financial Statements",
        "authors": [
          "U.S. Securities and Exchange Commission"
        ],
        "version": "2014；Last reviewed 2017",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-01"
      },
      {
        "source_id": "BF-S-COST-FY2025-SEC",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Item1；完整主表；Note1财年/收入/库存/应收/PPE/Leases；Note4",
          "scope": "完整所选单元及脚注",
          "purpose": "零售六格一页分析"
        },
        "supports": "零售六格一页分析",
        "branch": "retail",
        "required_when": "共同或所选行业主线",
        "title": "Costco Wholesale Corporation FY2025 Form 10-K",
        "authors": [
          "Costco Wholesale Corporation"
        ],
        "version": "FY ended 2025-08-31；比较期2024-09-01",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-02"
      }
    ],
    "bank": [
      {
        "source_id": "BF-S-SEC-GUIDE",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "四表、Footnotes、MD&A、Bringing It All Together",
          "scope": "全页",
          "purpose": "综合材料地图"
        },
        "supports": "综合材料地图",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Beginners’ Guide to Financial Statements",
        "authors": [
          "U.S. Securities and Exchange Commission"
        ],
        "version": "2014；Last reviewed 2017",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-01"
      },
      {
        "source_id": "BF-S-JPM-FY2025",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p46；p165/167/169；pp100–103；Note12 Loan accounting framework；Note17 Deposits",
          "scope": "完整主表/流动性单元及上述贷款/存款完整子节",
          "purpose": "银行一页分析及对象、计量和普通股"
        },
        "supports": "银行一页分析及对象、计量和普通股",
        "branch": "bank",
        "required_when": "共同或所选行业主线",
        "title": "JPMorgan Chase & Co. 2025 Annual Report",
        "authors": [
          "JPMorgan Chase & Co."
        ],
        "version": "FY2025；364页PDF",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-03"
      }
    ],
    "all": [
      {
        "source_id": "BF-S-SEC-GUIDE",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "四表、Footnotes、MD&A、Bringing It All Together",
          "scope": "全页",
          "purpose": "综合材料地图"
        },
        "supports": "综合材料地图",
        "branch": "common",
        "required_when": "共同或所选行业主线",
        "title": "Beginners’ Guide to Financial Statements",
        "authors": [
          "U.S. Securities and Exchange Commission"
        ],
        "version": "2014；Last reviewed 2017",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-01"
      },
      {
        "source_id": "BF-S-COST-FY2025-SEC",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Item1；完整主表；Note1财年/收入/库存/应收/PPE/Leases；Note4",
          "scope": "完整所选单元及脚注",
          "purpose": "零售六格一页分析"
        },
        "supports": "零售六格一页分析",
        "branch": "retail",
        "required_when": "共同或所选行业主线",
        "title": "Costco Wholesale Corporation FY2025 Form 10-K",
        "authors": [
          "Costco Wholesale Corporation"
        ],
        "version": "FY ended 2025-08-31；比较期2024-09-01",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-02"
      },
      {
        "source_id": "BF-S-JPM-FY2025",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "p46；p165/167/169；pp100–103；Note12 Loan accounting framework；Note17 Deposits",
          "scope": "完整主表/流动性单元及上述贷款/存款完整子节",
          "purpose": "银行一页分析及对象、计量和普通股"
        },
        "supports": "银行一页分析及对象、计量和普通股",
        "branch": "bank",
        "required_when": "共同或所选行业主线",
        "title": "JPMorgan Chase & Co. 2025 Annual Report",
        "authors": [
          "JPMorgan Chase & Co."
        ],
        "version": "FY2025；364页PDF",
        "retrieved_at": "2026-09-21",
        "id": "BF22-READ-03"
      }
    ]
  },
  "required_readings_all_branches": [
    {
      "source_id": "BF-S-SEC-GUIDE",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "四表、Footnotes、MD&A、Bringing It All Together",
        "scope": "全页",
        "purpose": "综合材料地图"
      },
      "supports": "综合材料地图",
      "branch": "common",
      "required_when": "共同或所选行业主线",
      "title": "Beginners’ Guide to Financial Statements",
      "authors": [
        "U.S. Securities and Exchange Commission"
      ],
      "version": "2014；Last reviewed 2017",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-01"
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Item1；完整主表；Note1财年/收入/库存/应收/PPE/Leases；Note4",
        "scope": "完整所选单元及脚注",
        "purpose": "零售六格一页分析"
      },
      "supports": "零售六格一页分析",
      "branch": "retail",
      "required_when": "共同或所选行业主线",
      "title": "Costco Wholesale Corporation FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY ended 2025-08-31；比较期2024-09-01",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-02"
    },
    {
      "source_id": "BF-S-JPM-FY2025",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p46；p165/167/169；pp100–103；Note12 Loan accounting framework；Note17 Deposits",
        "scope": "完整主表/流动性单元及上述贷款/存款完整子节",
        "purpose": "银行一页分析及对象、计量和普通股"
      },
      "supports": "银行一页分析及对象、计量和普通股",
      "branch": "bank",
      "required_when": "共同或所选行业主线",
      "title": "JPMorgan Chase & Co. 2025 Annual Report",
      "authors": [
        "JPMorgan Chase & Co."
      ],
      "version": "FY2025；364页PDF",
      "retrieved_at": "2026-09-21",
      "id": "BF22-READ-03"
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
      "id": "BF-S-COST-FY2025-SEC",
      "title": "Costco Wholesale Corporation FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY ended 2025-08-31；比较期2024-09-01",
      "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
      "locators": [
        "Item 1",
        "Consolidated Statements of Income / Balance Sheets / Equity / Cash Flows",
        "Note 1",
        "Note 4—Debt",
        "MD&A Bank Credit Facilities and Commercial Paper Programs"
      ]
    },
    {
      "id": "BF-S-JPM-FY2025",
      "title": "JPMorgan Chase & Co. 2025 Annual Report",
      "authors": [
        "JPMorgan Chase & Co."
      ],
      "version": "FY2025；364页PDF",
      "url": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf",
      "locators": [
        "printed 100–103 = physical 132–135 (1-based)",
        "printed 165/167/169 = physical 197/199/201",
        "MD&A Introduction p46; Loan accounting framework Note 12 pp236–238"
      ]
    },
    {
      "id": "BFFG-C03",
      "title": "Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Key Takeaways",
      "authors": [
        "Board of Governors of the Federal Reserve System"
      ],
      "version": "2023-04-28；网页更新2023-05-17",
      "url": "https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm",
      "locators": [
        "Key Takeaways 全文"
      ]
    },
    {
      "id": "BFFG-C03L",
      "title": "SVB Review — Supervision of SVBFG by Critical Risk Areas",
      "authors": [
        "Federal Reserve"
      ],
      "version": "2023-04-28",
      "url": "https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm",
      "locators": [
        "Liquidity Supervision：Overview至该节Conclusions；止于下一节Interest Rate Risk and Investment Portfolio Supervision之前"
      ]
    },
    {
      "id": "EIBC-S04",
      "title": "Walmart Inc. FY2026 Form 10-K",
      "authors": [
        "Walmart Inc."
      ],
      "version": "FY ended 2026-01-31；filed 2026-03-13",
      "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
      "locators": [
        "Item1 分部与期间",
        "MD&A Capital Allocation p36",
        "Free Cash Flow p37",
        "Consolidated Results of Operations p38",
        "Note1 Inventories"
      ]
    },
    {
      "id": "BF-S-SEC-GUIDE",
      "title": "Beginners’ Guide to Financial Statements",
      "authors": [
        "U.S. Securities and Exchange Commission"
      ],
      "version": "2014；Last reviewed 2017",
      "url": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
      "locators": [
        "四张报表、Footnotes、MD&A、Bringing It All Together"
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
    "EXP-BF22-ONE-PAGE-BUILDER"
  ],
  "input_projection": {
    "schema": "notebook-input-projection-v1",
    "metadata_pointers": [
      "/schema_version",
      "/content_version",
      "/cutoff",
      "/identity_policy"
    ],
    "common_pointers": [],
    "branch_pointers": {
      "retail": [
        "/integrated/retail",
        "/tables/cost_bs",
        "/tables/cost_income",
        "/tables/cost_cash",
        "/walmart",
        "/tables/wmt_capex",
        "/tables/wmt_fcf"
      ],
      "bank": [
        "/integrated/bank",
        "/tables/jpm_bs",
        "/tables/jpm_income",
        "/tables/jpm_cash",
        "/jpm_liquidity",
        "/tables/jpm_lcr",
        "/tables/jpm_deposits",
        "/svb"
      ]
    },
    "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
    "rule": "同源完整对象/整表按篇及行业投影，不删表中行、列、期间、单位、脚注或已包含的题解；研究/迁移仍按原选读规则.",
    "scope": "Canonical packet contains the union for this entry; copy action projects the selected industry. Other entry data stays in the complete frozen public input."
  }
}
```

## Supplied entry
这一篇不再按科目逐个讲解. 我们接到一份年报，要在有限时间内交出一页别人能复核的企业分析：公司怎样经营，资源与义务在哪里，利润怎样形成，现金去了哪里，结果如何归到普通股，以及目前还有哪两种解释无法区分.

选择Costco零售或JPM银行一支，连同共同地图与题解约15–20分钟. 完整原表可随时展开；Walmart与SVB迁移另行选读. 信息取得截至2026-09-21，各项数字仍固定在原材料的报告期间，不向当时的判断倒填后续事实.

<a id="bf22-map"></a>
## 1. 开始前先留一张空白分析页

先用下面六个格子写自己的答案，再展开示范. 不是每格都必须填一个比率：有时最重要的结论是某个余额不适合做分母，或某项未来结果还缺资料.

| 格子 | 要交出的内容 |
|---|---|
| 对象与时间 | 企业/证券的区别；年结日、单位、合并范围 |
| 业务与资源 | 谁付款、交付什么、需要什么资源；义务来自哪里 |
| 利润 | 一条从业务收入到净利润的可复算关系 |
| 现金与资金 | 一条现金总桥；一项投入和一项融资/分配的含义 |
| 普通股 | 总权益与普通股归属、期末和加权股数的区别 |
| 判断与下一条证据 | 两项可区分的解释；下一份什么资料能推进判断 |

四张主表并不竞争“谁最真实”. 利润表归集一段期间的经营结果，资产负债表记录时点资源与义务，现金流量表记录收付与现金余额变化，权益表解释股东投入、分配和其他变动. 附注展开计量与边界，MD&A帮助把变动放回业务；要做完整分析，就让它们围绕同一个问题互相接上. [^map]

这一轮的作业不是猜股票明天涨跌. 我们要求：每个关键数字能回到原表；每条解释能说出证据支持到哪里；每个未决问题能指向下一条具体观察. 图可以检查算术，但不会替你给公司打投资分数.

<div data-reading-branch-controls><button data-select-reading-branch="retail">零售：Costco</button><button data-select-reading-branch="bank">银行：JPMorgan Chase</button><button data-select-reading-branch="all">两支展开</button></div>

<section data-reading-branch="retail">

<a id="bf22-retail"></a>
## 2. 零售任务包：Costco FY2025

对象为Costco Wholesale Corporation合并集团，FY2025截至2025-08-31；比较期2024-09-01，两年都是52周. 金额 M 美元，利润表股数为K 股，资产负债表普通股文字说明中的股数则是实际股数. 先保持这些单位分开，再开始计算. [^cost]

### 原表入口：全貌保留，重点由业务决定

<details><summary>完整合并利润表：收入、费用、税项、EPS及分母</summary>

| 原行名称 | 中文读法 | FY2025 · 2025-08-31 · 52周 | FY2024 · 2024-09-01 · 52周 | FY2023 · 2023-09-03 · 53周 |
|---|---|---:|---:|---:|
| <strong>REVENUE</strong> | <strong>收入</strong> |  |  |  |
| Net sales | 净销售额 | 269,912 | 249,625 | 237,710 |
| Membership fees | 会员费 | 5,323 | 4,828 | 4,580 |
| <strong>Total revenue</strong> | <strong>收入合计</strong> | <strong>275,235</strong> | <strong>254,453</strong> | <strong>242,290</strong> |
| <strong>OPERATING EXPENSES</strong> | <strong>经营费用</strong> |  |  |  |
| Merchandise costs | 商品成本 | 239,886 | 222,358 | 212,586 |
| Selling, general and administrative | 销售、一般及行政费用 | 24,966 | 22,810 | 21,590 |
| <strong>Operating income</strong> | <strong>经营利润</strong> | <strong>10,383</strong> | <strong>9,285</strong> | <strong>8,114</strong> |
| <strong>OTHER INCOME (EXPENSE)</strong> | <strong>其他收益（费用）</strong> |  |  |  |
| Interest expense | 利息费用 | (154) | (169) | (160) |
| Interest income and other, net | 利息收入及其他净额 | 589 | 624 | 533 |
| <strong>Income before income taxes</strong> | <strong>税前利润</strong> | <strong>10,818</strong> | <strong>9,740</strong> | <strong>8,487</strong> |
| Provision for income taxes | 所得税费用 | 2,719 | 2,373 | 2,195 |
| <strong>Net income</strong> | <strong>净利润</strong> | <strong>8,099</strong> | <strong>7,367</strong> | <strong>6,292</strong> |
| <strong>NET INCOME PER COMMON SHARE</strong> | <strong>普通股每股净利润（美元/股）</strong> |  |  |  |
| Basic | 基本每股净利润 | 18.24 | 16.59 | 14.18 |
| Diluted | 稀释每股净利润 | 18.21 | 16.56 | 14.16 |
| <strong>SHARES USED IN CALCULATION (000&#x27;s)</strong> | <strong>计算使用股数（K 股）</strong> |  |  |  |
| Basic | 基本加权平均股数 | 443,985 | 443,914 | 443,854 |
| Diluted | 稀释加权平均股数 | 444,803 | 444,759 | 444,452 |

单位：USD M. 金额单位为 USD M；EPS为美元/股；股数为K 股. 括号负数按负号保存. 合并利润表未单列毛利；MD&A p.27定义Gross Margin=Net sales−Merchandise costs，2025/24/23分别30026/27267/25124. 2023是53周，2025和2024为52周；比较增长前核对.

</details>

<details><summary>完整两期资产负债表：资产、负债、权益及无金额披露</summary>

| 原行名称 | 中文读法 | 2025-08-31 | 2024-09-01 |
|---|---|---:|---:|
| <strong>ASSETS</strong> | <strong>资产</strong> |  |  |
| <strong>CURRENT ASSETS</strong> | <strong>流动资产</strong> |  |  |
| Cash and cash equivalents | 现金及现金等价物 | 14,161 | 9,906 |
| Short-term investments | 短期投资 | 1,123 | 1,238 |
| Receivables, net | 应收款净额 | 3,203 | 2,721 |
| Merchandise inventories | 商品存货 | 18,116 | 18,647 |
| Other current assets | 其他流动资产 | 1,777 | 1,734 |
| <strong>Total current assets</strong> | <strong>流动资产合计</strong> | <strong>38,380</strong> | <strong>34,246</strong> |
| <strong>OTHER ASSETS</strong> | <strong>其他资产</strong> |  |  |
| Property and equipment, net | 物业及设备净额 | 31,909 | 29,032 |
| Operating lease right-of-use assets | 经营租赁使用权资产 | 2,725 | 2,617 |
| Other long-term assets | 其他长期资产 | 4,085 | 3,936 |
| <strong>TOTAL ASSETS</strong> | <strong>总资产</strong> | <strong>77,099</strong> | <strong>69,831</strong> |
| <strong>LIABILITIES AND EQUITY</strong> | <strong>负债与权益</strong> |  |  |
| <strong>CURRENT LIABILITIES</strong> | <strong>流动负债</strong> |  |  |
| Accounts payable | 应付账款 | 19,783 | 19,421 |
| Accrued salaries and benefits | 应计工资及福利 | 5,205 | 4,794 |
| Accrued member rewards | 应计会员奖励 | 2,677 | 2,435 |
| Deferred membership fees | 递延会员费 | 2,854 | 2,501 |
| Other current liabilities | 其他流动负债 | 6,589 | 6,313 |
| <strong>Total current liabilities</strong> | <strong>流动负债合计</strong> | <strong>37,108</strong> | <strong>35,464</strong> |
| <strong>OTHER LIABILITIES</strong> | <strong>其他负债</strong> |  |  |
| Long-term debt, excluding current portion | 长期债务，不含流动部分 | 5,713 | 5,794 |
| Long-term operating lease liabilities | 长期经营租赁负债 | 2,460 | 2,375 |
| Other long-term liabilities | 其他长期负债 | 2,654 | 2,576 |
| <strong>TOTAL LIABILITIES</strong> | <strong>负债合计</strong> | <strong>47,935</strong> | <strong>46,209</strong> |
| COMMITMENTS AND CONTINGENCIES | 承诺及或有事项〔原表无金额〕 |  |  |
| <strong>EQUITY</strong> | <strong>权益</strong> |  |  |
| Preferred stock $0.005 par value; 100,000,000 shares authorized; no shares issued and outstanding | 优先股：每股面值0.005美元；授权100,000,000股；无已发行及流通股 | — | — |
| Common stock $0.005 par value; 900,000,000 shares authorized; 443,237,000 and 443,126,000 shares issued and outstanding | 普通股：每股面值0.005美元；授权900,000,000股；两期已发行及流通443,237,000及443,126,000股 | 2 | 2 |
| Additional paid-in capital | 额外实缴资本 | 8,282 | 7,829 |
| Accumulated other comprehensive loss | 累计其他综合损失 | (1,770) | (1,828) |
| Retained earnings | 留存收益 | 22,650 | 17,619 |
| <strong>TOTAL EQUITY</strong> | <strong>权益合计</strong> | <strong>29,164</strong> | <strong>23,622</strong> |
| <strong>TOTAL LIABILITIES AND EQUITY</strong> | <strong>负债及权益合计</strong> | <strong>77,099</strong> | <strong>69,831</strong> |

单位：USD M；股数与每股面值按行另标. 标题和无金额披露为空，不等于零；括号为减项；明细、小计和总计不得重复相加.

</details>

<details><summary>完整现金流量表：三类活动、余额桥及补充</summary>

| 原行名称 | 中文读法 | FY2025 · 52周 | FY2024 · 52周 | FY2023 · 53周 |
|---|---|---:|---:|---:|
| <strong>CASH FLOWS FROM OPERATING ACTIVITIES</strong> | <strong>经营活动现金流</strong> |  |  |  |
| Net income | 净利润 | 8,099 | 7,367 | 6,292 |
| <strong>Adjustments to reconcile net income to net cash provided by operating activities</strong> | <strong>净利润至经营活动净现金的调整</strong> |  |  |  |
| Depreciation and amortization | 折旧及摊销 | 2,426 | 2,237 | 2,077 |
| Non-cash lease expense | 非现金租赁费用 | 303 | 315 | 412 |
| Stock-based compensation | 股权薪酬 | 860 | 818 | 774 |
| Impairment of assets and other non-cash operating activities, net | 资产减值及其他非现金经营活动净额 | (117) | (9) | 495 |
| <strong>Changes in operating assets and liabilities</strong> | <strong>经营资产及负债变动</strong> |  |  |  |
| Merchandise inventories | 商品存货变动 | 559 | (2,068) | 1,228 |
| Accounts payable | 应付账款变动 | 404 | 1,938 | (382) |
| Other operating assets and liabilities, net | 其他经营资产负债净变动 | 801 | 741 | 172 |
| <strong>Net cash provided by operating activities</strong> | <strong>经营活动产生净现金</strong> | <strong>13,335</strong> | <strong>11,339</strong> | <strong>11,068</strong> |
| <strong>CASH FLOWS FROM INVESTING ACTIVITIES</strong> | <strong>投资活动现金流</strong> |  |  |  |
| Additions to property and equipment | 物业及设备增加的现金支出 | (5,498) | (4,710) | (4,323) |
| Purchases of short-term investments | 购买短期投资 | (1,028) | (1,470) | (1,622) |
| Maturities of short-term investments | 短期投资到期 | 1,141 | 1,790 | 937 |
| Other investing activities, net | 其他投资活动净额 | 74 | (19) | 36 |
| <strong>Net cash used in investing activities</strong> | <strong>投资活动使用净现金</strong> | <strong>(5,311)</strong> | <strong>(4,409)</strong> | <strong>(4,972)</strong> |
| <strong>CASH FLOWS FROM FINANCING ACTIVITIES</strong> | <strong>筹资活动现金流</strong> |  |  |  |
| Repayments of short-term borrowings | 偿还短期借款 | (862) | (920) | (935) |
| Proceeds from short-term borrowings | 短期借款所得 | 816 | 928 | 917 |
| Repayments of long-term debt | 偿还长期债务 | (103) | (1,077) | (75) |
| Proceeds from long-term debt | 长期债务所得 | — | 498 | — |
| Tax withholdings on stock-based awards | 股票奖励代扣税款 | (393) | (315) | (303) |
| Repurchases of common stock | 回购普通股 | (903) | (700) | (676) |
| Cash dividend payments | 支付股息 | (2,183) | (9,041) | (1,251) |
| Financing lease payments and other financing activities, net | 融资租赁支付及其他筹资净额 | (147) | (137) | (291) |
| <strong>Net cash used in financing activities</strong> | <strong>筹资活动使用净现金</strong> | <strong>(3,775)</strong> | <strong>(10,764)</strong> | <strong>(2,614)</strong> |
| Effect of exchange rate changes on cash and cash equivalents | 汇率变化对现金及等价物影响 | 6 | 40 | 15 |
| <strong>Net change in cash and cash equivalents</strong> | <strong>现金及等价物净变动</strong> | <strong>4,255</strong> | <strong>(3,794)</strong> | <strong>3,497</strong> |
| Cash and cash equivalents, beginning of year | 期初现金及等价物 | 9,906 | 13,700 | 10,203 |
| Cash and cash equivalents, end of year | 期末现金及等价物 | 14,161 | 9,906 | 13,700 |
| <strong>SUPPLEMENTAL DISCLOSURE OF CASH FLOW INFORMATION</strong> | <strong>补充披露（不重复加总）</strong> |  |  |  |
| Cash paid during the year for interest | 年内已付利息 | 106 | 129 | 125 |
| Cash paid during the year for income taxes | 年内已付所得税 | 2,917 | 2,319 | 2,234 |
| <strong>SUPPLEMENTAL DISCLOSURE OF NON-CASH ACTIVITIES</strong> | <strong>非现金活动补充披露</strong> |  |  |  |
| Dividends declared, but not yet paid | 已宣布而未支付股息 | — | — | 452 |
| Capital expenditures included in liabilities | 列入负债的资本支出 | 193 | 203 | 170 |

单位：USD M. 零值按原表破折号语义保留数值0；主表标题无金额为null，不等于0. 其他非现金经营活动净额为负不能整行解释为本期资产减值. 现金集合为cash and cash equivalents；补充的未付资本支出不加到当期现金支出.

</details>

### 先自己观察，再走一遍完整解释

请先在原表找出净销售、会员费、商品成本、存货、应付及门店资源. 公司以会员仓储零售为业务入口，但它的资源不只是商品：仓库、物业设备及租赁使用权也支持交付. 商品采购和供应商付款形成一个时间过程，会员服务又有自己的收费与确认节奏. 会员费按一年会员期递延确认，因此会员费收入不是期末现金余额. [^costpolicy]

从利润入手，净销售269,912减商品成本239,886，得到30,026；公司MD&A将这一关系列为Gross Margin. 加会员费5,323，再扣销售及管理等费用24,966，得到经营利润10,383. 随后10,383−利息费用154＋利息及其他净收入589＝税前10,818，扣所得税2,719得到净利润8,099. 这里同一段话既有业务层次，也能完全复算. [^costincome]

现在做两期变化桥. 商品销售与商品成本差额由27,267增到30,026，增加2,759；会员费增加495；销售及管理等费用增加2,156. 因此2,759＋495−2,156＝经营利润增加1,098，正好等于10,383−9,285. 它把总增长分成三个明确入口，但尚未把2,759唯一归因为销量、价格、组合或采购成本.

再回到资源和现金. 存货18,116比前期少531，应付19,783比前期多362；两行余额之差由−774变为−1,667. 其反向变化893说明所选两行账面资金部件的变化；现金流中对应两项却为559＋404＝963，差70尚未分解. 此处最有用的动作是保留两张表各自口径，继续查变化明细，而不是挑一个数让另外一张表强行相等. [^costcash]

完整现金桥为9,906＋13,335−5,311−3,775＋6＝14,161. 经营现金流13,335支持了当年5,498物业设备付款以及其他安排，但“13,335−5,498＝7,837”只是两行残余，不是扣尽一切义务后的自由资金. 筹资部分还包括股息2,183、回购903、股权奖励代扣款、债务收付及融资租赁等；这些都是这年资金路径的一部分.

### 普通股处在这条链的哪里

期末总资产77,099、负债47,935、权益29,164，三者相等关系成立. 优先股未发行，所以这里的权益没有一项在外优先股余额需要另减. 普通股期末443,237,000股，前期443,126,000股，净增加111,000股；本期有回购并不等于期末股数一定下降. 若要解释这种净变动，需要回到发行、股权奖励与回购的股数，而不是只看回购现金. [^costequity]

全年基本EPS用443,985 K 股加权平均，稀释EPS用444,803 K 股；期末443,237,000股不能替代这两个期间分母. 净利润8,099也不等于权益增加：权益由23,622到29,164增加5,542，中间还有分配和其他权益变动. 我们在一页里不必展开所有奖励细节，却须保留普通股所得所依赖的口径.

<a id="bf22-retail-onepage"></a>
### 可交付的一页示范

| 分析格 | 一页可复核内容 |
|---|---|
| 范围 | FY2025合并集团；2025-08-31年结，52周；金额 M 美元，股数单位另核 |
| 业务/资源 | 商品销售与会员服务；商品18,116、物业设备净额31,909和经营租赁使用权2,725共同支持交付；应付19,783是供应链付款义务 |
| 利润桥 | (269,912−239,886)＋5,323−24,966＝10,383；10,383−154＋589−2,719＝8,099 |
| 现金/资金 | 9,906＋13,335−5,311−3,775＋6＝14,161；物业设备现金投入5,498；分红2,183、回购903；债务本金5,805另按到期表读 |
| 普通股 | 权益29,164，未发行优先股；期末443,237,000股；全年EPS使用加权分母 |
| 未决解释 | 存货下降可能反映交付/备货节奏变化，也可能反映成本或组合；供应商结算时间也影响应付；不能凭两期净额唯一归因 |
| 下一条证据 | 取得相同期次的销量/可比销售与库存构成，再对照采购、供应商条款和付款时点，区分“销售更快”与“采购及结算时点” |

这份示范不是“没有结论”. 它已经给出经营利润变化、现金闭合、资金用途和股数边界；只是把还需要证据的因果问题留在正确位置. 能明确指出下一条观察，通常比用一个模糊形容词评价库存更有用.

### 分支练习与完整反馈

<strong>先做：</strong>重建经营利润增加1,098；再解释为什么两行库存资金反向变化893不能直接说成现金流963. 最后在“销售更快”和“结算时点改变”两种解释中，为每一种指定一条可以推翻它的观察.

<details><summary>展开解析</summary>

利润变化＝毛利差额增加2,759＋会员费增加495−销售管理等费用增加2,156＝1,098. 893来自两期资产负债表，963来自现金流调整，两者差70没有取得完整归因.

若解释为销售更快，应当能在相应销量、交付或库存周转结构中找到证据；若销量/交付无此变化，却发现期末采购减少，这个解释就受挑战. 若解释为供应商结算更晚，应检查具体付款日、条款或到期应付；若账期与支付节奏未变而采购结构变化明显，便不能继续把应付增长归给延付. 这里只提出可检验假说，没把假说写成公司已经发生的事实.

</details>

<details data-agent-option="walmart"><summary>同类迁移：Walmart FY2026，换一家零售商还能重建吗？</summary>
<a id="bf22-walmart"></a>

先读对象卡：Walmart有Walmart U.S.、Walmart International和Sam’s Club U.S.三个报告分部. 美国和加拿大财年截至1月31日，其他经营通常按自然年、滞后一个月合并. 它与Costco的52周财年不是同一个期间安排. 库存方法也随分部、业态不同：美国主要RIM及LIFO，国际依业态采用RIM或加权平均并用FIFO，Sam’s Club多数为加权平均/LIFO. 相似的“零售”标签没有消除这些边界. [^wmtpolicy]

采用FY2026：净销售706,413，加会员及其他收入6,750，得到收入713,163；经营利润29,825. 下表给出可直接核的资金及投入材料，不要求先读完另一家全部附注. [^wmt]

| 原行名称 | 中文读法 | FY2026 | FY2025 | FY2024 |
|---|---|---:|---:|---:|
| Net cash provided by operating activities | 经营现金流 | 41,565 | 36,443 | 35,726 |
| Payments for property and equipment | 物业设备付款 | (26,642) | (23,783) | (20,606) |
| <strong>Free cash flow</strong> | <strong>公司定义FCF</strong> | <strong>14,923</strong> | <strong>12,660</strong> | <strong>15,120</strong> |
| Net cash used in investing activities (1) | 投资现金流 | (26,350) | (21,379) | (21,287) |
| Net cash used in financing activities | 筹资现金流 | (13,553) | (14,822) | (13,414) |

单位：USD M. (1)投资现金流已经包含物业设备付款. FCF未扣债务服务、其他合同付款及收购，不能再将CFI全额扣一次.

| 原行名称 | 中文读法 | FY2026 | FY2025 |
|---|---|---:|---:|
| Supply chain, customer-facing initiatives, technology and other | 供应链、面向客户项目、技术及其他 | 16,468 | 14,603 |
| Store and club remodels | 门店及会员店改造 | 5,571 | 5,552 |
| New stores and clubs, including expansions and relocations | 新门店及会员店，含扩建与迁址 | 1,406 | 450 |
| <strong>Total U.S.</strong> | <strong>美国合计</strong> | <strong>23,445</strong> | <strong>20,605</strong> |
| Walmart International | 国际业务 | 3,197 | 3,178 |
| <strong>Total Capital Expenditures</strong> | <strong>资本支出合计</strong> | <strong>26,642</strong> | <strong>23,783</strong> |

单位：USD M.

<strong>迁移任务：</strong>将“业务—资源—利润—现金—投入目标”写成五行，并复算美国资本支出小计与总额；指出一条不能直接从Costco搬来的比较方法.

<strong>完整解析：</strong>业务先按三个报告分部及各自业态定位；资源包括门店、供应链和技术能力，不能只等同于新开门店. 收入713,163、经营利润29,825给出利润层次入口. 经营现金流41,565减物业设备付款26,642＝公司FCF14,923，但原文说明它未扣债务服务、其他合同义务和收购，所以不能叫任意可用于回购的钱. 资本支出美国小计16,468＋5,571＋1,406＝23,445，再加国际3,197＝26,642；这把供应链/客户项目/技术等、改造与新店投入分开了. 公司将这些投入与全渠道及自动化策略相联系，但还要用交付效率、成本或客户使用结果检验效果，不能由用途标签直接生成回报率. [^wmt]

不能照搬的例子：两个集团的毛利或周转比较需要先核会员及其他收入、库存方法、期间和业务组合；不能拿各自总收入与一个混合应收余额随手造出同口径客户DSO.

</details>

</section>

<section data-reading-branch="bank">

<a id="bf22-bank"></a>
## 3. 银行任务包：JPMorgan Chase FY2025

对象为JPMorgan Chase & Co.集团，不是其银行子公司单体；年度截至2025-12-31. 金额 M 美元，利润表加权股数为 M 股，资产负债表股数说明为实际股数. 银行业务围绕贷款、证券、支付、客户资产服务及其融资展开，分析先从资产和资金的关系进入，而不是先找一张商品毛利表. [^jpm]

<details><summary>完整集团合并利润表：净利息、非利息、信用成本、费用及普通股</summary>

| 原行名称 | 中文读法 | 2025 | 2024 | 2023 |
|---|---|---:|---:|---:|
| <strong>Revenue</strong> | <strong>收入</strong> |  |  |  |
| Investment banking fees | 投资银行费用收入 | 9,615 | 8,910 | 6,519 |
| Principal transactions | 交易业务收益（原行 Principal transactions） | 27,212 | 24,787 | 24,460 |
| Lending- and deposit-related fees | 贷款及存款相关费用收入 | 9,093 | 7,606 | 7,413 |
| Asset management fees | 资产管理费用收入 | 20,327 | 17,801 | 15,220 |
| Commissions and other fees | 佣金及其他费用收入 | 8,539 | 7,530 | 6,836 |
| Investment securities losses | 投资证券收益／损失 | (57) | (1,021) | (3,180) |
| Mortgage fees and related income | 按揭费用及相关收入 | 1,381 | 1,401 | 1,176 |
| Card income | 银行卡收入 | 4,720 | 5,497 | 4,784 |
| Other income | 其他收入 | 6,174 | 12,462 | 5,609 |
| <strong>Noninterest revenue</strong> | <strong>非利息收入</strong> | <strong>87,004</strong> | <strong>84,973</strong> | <strong>68,837</strong> |
| Interest income | 利息收入 | 193,341 | 193,933 | 170,588 |
| Interest expense | 利息支出 | 97,898 | 101,350 | 81,321 |
| <strong>Net interest income</strong> | <strong>净利息收入</strong> | <strong>95,443</strong> | <strong>92,583</strong> | <strong>89,267</strong> |
| <strong>Total net revenue</strong> | <strong>净收入合计</strong> | <strong>182,447</strong> | <strong>177,556</strong> | <strong>158,104</strong> |
| Provision for credit losses | 信用损失计提 | 14,212 | 10,678 | 9,320 |
| <strong>Noninterest expense</strong> | <strong>非利息费用</strong> |  |  |  |
| Compensation expense | 薪酬费用 | 54,487 | 51,357 | 46,465 |
| Occupancy expense | 场地费用 | 5,461 | 5,026 | 4,590 |
| Technology, communications and equipment expense | 技术、通信及设备费用 | 11,029 | 9,831 | 9,246 |
| Professional and outside services | 专业及外部服务费用 | 12,356 | 11,057 | 10,235 |
| Marketing | 营销费用 | 5,531 | 4,974 | 4,591 |
| Other expense | 其他费用 | 6,776 | 9,552 | 12,045 |
| <strong>Total noninterest expense</strong> | <strong>非利息费用合计</strong> | <strong>95,640</strong> | <strong>91,797</strong> | <strong>87,172</strong> |
| <strong>Income before income tax expense</strong> | <strong>税前利润</strong> | <strong>72,595</strong> | <strong>75,081</strong> | <strong>61,612</strong> |
| Income tax expense | 所得税费用 | 15,547 | 16,610 | 12,060 |
| <strong>Net income</strong> | <strong>净利润</strong> | <strong>57,048</strong> | <strong>58,471</strong> | <strong>49,552</strong> |
| <strong>Net income applicable to common stockholders</strong> | <strong>归属于普通股权益的净利润</strong> | <strong>55,681</strong> | <strong>56,868</strong> | <strong>47,760</strong> |
| <strong>Net income per common share data</strong> | <strong>普通股每股净利润数据（美元/股）</strong> |  |  |  |
| Basic earnings per share | 基本每股净利润 | 20.05 | 19.79 | 16.25 |
| Diluted earnings per share | 稀释每股净利润 | 20.02 | 19.75 | 16.23 |
| Weighted-average basic shares | 基本加权平均股数（ M 股） | 2,776.5 | 2,873.9 | 2,938.6 |
| Weighted-average diluted shares | 稀释加权平均股数（ M 股） | 2,781.5 | 2,879 | 2,943.1 |

单位：USD M. GAAP集团合并口径，不混入managed/FTE分部口径. 费用行原表为正额，计算中减去；投资证券损失为带负号收入. EPS为美元/股，股数为 M 股；原表应与附注一同阅读.

</details>

<details><summary>完整两期集团资产负债表及VIE脚注</summary>

| 原行名称 | 中文读法 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| <strong>Assets</strong> | <strong>资产</strong> |  |  |
| Cash and due from banks | 现金及应收银行款 | 21,742 | 23,372 |
| Deposits with banks | 存放银行款项 | 321,596 | 445,945 |
| Federal funds sold and securities purchased under resale agreements (included $327,018 and $286,771 at fair value) | 拆出联邦基金及买入返售证券〔其中按公允价值计量327,018／286,771〕 | 336,426 | 295,001 |
| Securities borrowed (included $98,111 and $83,962 at fair value) | 借入证券〔其中按公允价值计量98,111／83,962〕 | 286,191 | 219,546 |
| Trading assets (included assets pledged of $165,927 and $136,070) | 交易资产〔其中已质押资产165,927／136,070〕 | 802,873 | 637,784 |
| Available-for-sale securities (amortized cost of $507,226 and $411,045; included assets pledged of $7,735 and $10,162) | 可供出售证券〔摊余成本507,226／411,045；其中已质押7,735／10,162〕 | 507,198 | 406,852 |
| Held-to-maturity securities | 持有至到期证券 | 270,134 | 274,468 |
| <strong>Investment securities, net of allowance for credit losses</strong> | <strong>投资证券，扣除信用损失准备后</strong> | <strong>777,332</strong> | <strong>681,320</strong> |
| Loans (included $70,684 and $41,350 at fair value) | 贷款，未扣贷款损失准备〔其中按公允价值计量70,684／41,350〕 | 1,493,429 | 1,347,988 |
| Allowance for loan losses | 贷款损失准备〔资产减项〕 | (25,765) | (24,345) |
| <strong>Loans, net of allowance for loan losses</strong> | <strong>贷款净额</strong> | <strong>1,467,664</strong> | <strong>1,323,643</strong> |
| Accrued interest and accounts receivable | 应计利息及应收账款 | 111,599 | 101,223 |
| Premises and equipment | 房屋及设备 | 36,244 | 32,223 |
| Goodwill, MSRs and other intangible assets | 商誉、按揭服务权及其他无形资产 | 64,458 | 64,560 |
| Other assets (included $15,849 and $15,122 at fair value and assets pledged of $11,984 and $6,288) | 其他资产〔其中按公允价值计量15,849／15,122；已质押11,984／6,288〕 | 198,775 | 178,197 |
| <strong>Total assets(a)</strong> | <strong>总资产〔附注(a)〕</strong> | <strong>4,424,900</strong> | <strong>4,002,814</strong> |
| <strong>Liabilities</strong> | <strong>负债</strong> |  |  |
| Deposits (included $20,930 and $33,768 at fair value) | 客户存款〔其中按公允价值计量20,930／33,768〕 | 2,559,320 | 2,406,032 |
| Federal funds purchased and securities loaned or sold under repurchase agreements (included $360,194 and $226,329 at fair value) | 拆入联邦基金及证券借出或回购融资〔其中按公允价值计量360,194／226,329〕 | 442,396 | 296,835 |
| Short-term borrowings (included $32,460 and $26,521 at fair value) | 短期借款〔其中按公允价值计量32,460／26,521〕 | 64,776 | 52,893 |
| Trading liabilities | 交易负债 | 216,019 | 192,883 |
| Accounts payable and other liabilities (included $6,660 and $5,893 at fair value) | 应付账款及其他负债〔其中按公允价值计量6,660／5,893〕 | 316,794 | 280,672 |
| Beneficial interests issued by consolidated VIEs (included $5 and $1 at fair value) | 合并VIE发行的受益权益〔其中按公允价值计量5／1〕 | 27,951 | 27,323 |
| Long-term debt (included $134,559 and $100,780 at fair value) | 长期债务〔其中按公允价值计量134,559／100,780〕 | 435,206 | 401,418 |
| <strong>Total liabilities(a)</strong> | <strong>负债合计〔附注(a)〕</strong> | <strong>4,062,462</strong> | <strong>3,658,056</strong> |
| Commitments and contingencies (refer to Notes 28, 29 and 30) | 承诺及或有事项〔参见Notes 28、29、30；原表无金额〕 |  |  |
| <strong>Stockholders’ equity</strong> | <strong>股东权益</strong> |  |  |
| Preferred stock ($1 par value; authorized 200,000,000 shares: issued 2,005,375 and 2,005,375 shares) | 优先股：面值每股1美元；授权200,000,000股；两期已发行均为2,005,375股 | 20,045 | 20,050 |
| Common stock ($1 par value; authorized 9,000,000,000 shares; issued 4,104,933,895 shares) | 普通股：面值每股1美元；授权9,000,000,000股；已发行4,104,933,895股 | 4,105 | 4,105 |
| Additional paid-in capital | 额外实缴资本 | 91,114 | 90,911 |
| Retained earnings | 留存收益 | 416,055 | 376,166 |
| Accumulated other comprehensive losses | 累计其他综合损失 | (4,290) | (12,456) |
| Treasury stock, at cost (1,408,661,319 and 1,307,313,494 shares) | 库存股，按成本〔股数1,408,661,319／1,307,313,494〕 | (164,591) | (134,018) |
| <strong>Total stockholders’ equity</strong> | <strong>股东权益合计</strong> | <strong>362,438</strong> | <strong>344,758</strong> |
| <strong>Total liabilities and stockholders’ equity</strong> | <strong>负债及股东权益合计</strong> | <strong>4,424,900</strong> | <strong>4,002,814</strong> |

单位：USD M；股数与每股面值按行另标. 标题和无金额披露为空，不等于零；括号为减项；明细、小计和总计不得重复相加. 脚注(a)：所列VIE资产负债已包含于主表，排除被合并抵销的集团内余额，不能再次加总.

| 脚注(a)原行 | 中文读法 | 2025-12-31 | 2024-12-31 |
|---|---|---:|---:|
| Assets | 资产 |  |  |
| Trading assets | 交易资产 | 4,835 | 3,885 |
| Loans | 贷款 | 37,777 | 36,510 |
| All other assets | 其他资产 | 683 | 681 |
| Total assets | 资产合计 | 43,295 | 41,076 |
| Liabilities | 负债 |  |  |
| Beneficial interests issued by consolidated VIEs | 合并VIE发行的受益权益 | 27,951 | 27,323 |
| All other liabilities | 其他负债 | 691 | 454 |
| Total liabilities | 负债合计 | 28,642 | 27,777 |

以上VIE数额已包含于合并主表，不能再加到总资产或总负债.

</details>

<details><summary>完整集团现金流量表与补充披露</summary>

| 原行名称 | 中文读法 | 2025 | 2024 | 2023 |
|---|---|---:|---:|---:|
| <strong>Operating activities</strong> | <strong>经营活动</strong> |  |  |  |
| Net income | 净利润 | 57,048 | 58,471 | 49,552 |
| Provision for credit losses | 信用损失计提 | 14,212 | 10,678 | 9,320 |
| Depreciation and amortization | 折旧摊销 | 8,821 | 7,938 | 7,512 |
| Deferred tax expense (benefit) | 递延所得税费用／利益 | 5,611 | 2,004 | (4,534) |
| Bargain purchase gain associated with First Republic acquisition | First Republic收购廉价购买收益调整 | — | (103) | (2,775) |
| Initial gain on Visa exchange | Visa交换初始收益调整 | — | (7,990) | — |
| Other adjustments | 其他调整 | 1,309 | 1,985 | 4,301 |
| Originations and purchases of loans held-for-sale | 待售贷款发放及购买 | (260,772) | (212,238) | (115,245) |
| Proceeds from sales, securitizations and paydowns of loans held-for-sale | 待售贷款出售、证券化及偿还所得 | 235,232 | 205,303 | 116,430 |
| Trading assets | 交易资产变动 | (156,461) | (95,729) | (74,091) |
| Securities borrowed | 借入证券变动 | (66,648) | (18,762) | (14,902) |
| Accrued interest and accounts receivable | 应计利息和应收账款变动 | (11,514) | 5,735 | 19,928 |
| Other assets | 其他资产变动 | (12,582) | (7,650) | 32,970 |
| Trading liabilities | 交易负债变动 | 23,134 | 2,276 | 5,315 |
| Accounts payable and other liabilities | 应付及其他负债变动 | 5,270 | (90) | (25,388) |
| Other operating adjustments | 其他经营调整 | 9,558 | 6,160 | 4,581 |
| <strong>Net cash provided by (used in) operating activities</strong> | <strong>经营活动产生／使用净现金</strong> | <strong>(147,782)</strong> | <strong>(42,012)</strong> | <strong>12,974</strong> |
| <strong>Investing activities</strong> | <strong>投资活动</strong> |  |  |  |
| Federal funds sold and securities purchased under resale agreements | 拆出联邦基金及买入返售变动 | (41,264) | (18,706) | 39,740 |
| Proceeds from maturities and paydowns of held-to-maturity securities | HTM到期偿还所得 | 54,791 | 99,363 | 53,056 |
| Purchases of held-to-maturity securities | 买入HTM | (5,432) | (4,709) | (4,141) |
| Proceeds from maturities and paydowns of available-for-sale securities | AFS到期偿还所得 | 37,414 | 38,499 | 53,744 |
| Proceeds from sales of available-for-sale securities | 出售AFS所得 | 141,295 | 104,625 | 108,434 |
| Purchases of available-for-sale securities | 购入AFS | (308,772) | (352,712) | (115,499) |
| Proceeds from sales and securitizations of loans held-for-investment | 留存投资贷款出售及证券化所得 | 57,565 | 57,921 | 47,312 |
| Other changes in loans, net | 其他贷款净变动 | (188,497) | (83,176) | (88,343) |
| Cash paid for First Republic acquisition | First Republic收购现金支出 | — | (2,362) | (9,920) |
| All other investing activities, net | 其他投资活动净额 | (12,665) | (2,146) | (16,740) |
| <strong>Net cash provided by (used in) investing activities</strong> | <strong>投资活动产生／使用净现金</strong> | <strong>(265,565)</strong> | <strong>(163,403)</strong> | <strong>67,643</strong> |
| <strong>Financing activities</strong> | <strong>筹资活动</strong> |  |  |  |
| Deposits | 客户存款变动 | 153,168 | 3,299 | (32,196) |
| Federal funds purchased and securities loaned or sold under repurchase agreements | 拆入联邦基金及证券出借／回购变动 | 145,535 | 80,288 | 13,801 |
| Short-term borrowings | 短期借款变动 | 9,422 | 7,439 | (1,934) |
| Beneficial interests issued by consolidated VIEs | 合并VIE发行受益权变动 | (622) | 1,543 | 9,029 |
| Proceeds from long-term borrowings | 长期借款所得 | 120,761 | 109,915 | 75,417 |
| Payments of long-term borrowings | 偿还长期借款 | (108,100) | (96,605) | (64,880) |
| Proceeds from issuance of preferred stock | 发行优先股所得 | 3,000 | 2,500 | — |
| Redemption of preferred stock | 赎回优先股 | (3,000) | (9,850) | — |
| Treasury stock repurchased | 购买库存股 | (31,591) | (18,830) | (9,824) |
| Dividends paid | 支付股息 | (16,625) | (14,783) | (13,463) |
| All other financing activities, net | 其他筹资活动净额 | (2,415) | (1,469) | (1,521) |
| <strong>Net cash provided by (used in) financing activities</strong> | <strong>筹资活动产生／使用净现金</strong> | <strong>269,533</strong> | <strong>63,447</strong> | <strong>(25,571)</strong> |
| Effect of exchange rate changes | 汇率变化影响 | 17,835 | (12,866) | 1,871 |
| <strong>Net increase (decrease) in cash and due from banks and deposits with banks</strong> | <strong>指定现金集合净变动</strong> | <strong>(125,979)</strong> | <strong>(154,834)</strong> | <strong>56,917</strong> |
| Cash and due from banks and deposits with banks, beginning of year | 期初现金、应收银行款及存放银行款 | 469,317 | 624,151 | 567,234 |
| Cash and due from banks and deposits with banks, end of year | 期末现金、应收银行款及存放银行款 | 343,338 | 469,317 | 624,151 |
| <strong>Supplemental disclosures of cash flow information</strong> | <strong>补充披露</strong> |  |  |  |
| Cash interest paid | 已付现金利息 | 96,436 | 99,642 | 77,114 |
| Income taxes paid, net | 已付所得税净额 | 5,309 | 11,715 | 9,908 |

单位：USD M. 此表以原页重新排版；行名称保留业务含义，原文图像位于PDF第201页. JPM现金集合为cash and due from banks and deposits with banks，不能改称普通公司cash equivalents. 变化和合计按原表符号；经营资产扩张与客户存款筹资分属不同活动类别.

</details>

### 从经营结构解释收入和成本

利息收入193,341减利息支出97,898，得到净利息收入95,443；再加非利息收入87,004，得到净收入182,447. 信用损失准备费用14,212和非利息费用95,640都继续扣除，得税前72,595；减税15,547得净利润57,048. 这里利息支出参与资金业务的核心收入形成，不像一般工业企业的融资费用那样只在经营利润后补一行. [^jpmincome]

两期桥也能给出一个正向结论：FY2025净收入比2024增加4,891，但准备费用增加3,534、非利息费用增加3,843，因此税前利润减少2,486；税费减少1,063后，净利润减少1,423. 于是收入增长和净利润下降可以同时成立. 我们已经定位到信用成本和费用两条解释入口，接下来应读贷款组合、准备估计和费用组成，而不是把“银行收入增长”直接当作股东利润同比增长.

### 资源、资金与现金表的读法一起改变

主表贷款1,493,429减准备余额25,765＝贷款净额1,467,664. 这个准备余额不是一笔额外现金，也不是当期损益表14,212的同义词：一个是期末资产减项，一个是期间费用. 客户存款2,559,320是资金来源负债；交易资产、证券与借入证券等则有各自经营和流动性角色. [^jpmbs]

现金表中经营现金流−147,782，不能只贴一个“经营失败”标签. 表内交易资产变动−156,461、借入证券−66,648，以及待售贷款发放购买−260,772与出售回收235,232，说明经营性金融资产变化会大量影响这一分类；存款现金变动则在筹资活动. 完整桥469,317−147,782−265,565＋269,533＋17,835＝343,338，期末集合名是<strong>cash and due from banks and deposits with banks</strong>，不是把工业企业cash equivalents名字直接套过来. [^jpmcash]

与现金表并读的流动性证据，是集团季度平均HQLA961,979对净流出868,500、披露LCR111%，以及期末资产和融资能力. 约915 B 美元的期末HQLA（未扣监管haircut）加548 B 美元其他无抵押证券，对应约1500 B 美元；449 B 美元为另列有条件抵押融资能力，原文已说明排除关系. 不能使用季度平均HQLA去拼期末总额，银行法人的115%也不能替换集团111%. [^jpmliq]

### 给存款变化提出两种解释，而不是只报同比

| 原行名称 | 中文读法 | 2025-12-31 | 2024-12-31 | 2025 average | 2024 average |
|---|---|---:|---:|---:|---:|
| Consumer &amp; Community Banking | 消费者与社区银行 | 1,072,792 | 1,056,652 | 1,057,232 | 1,064,215 |
| Commercial &amp; Investment Bank | 商业与投资银行 | 1,193,338 | 1,073,512 | 1,174,581 | 1,061,488 |
| Asset &amp; Wealth Management | 资产与财富管理 | 257,316 | 248,287 | 245,248 | 235,146 |
| Corporate | 公司层 | 35,874 | 27,581 | 29,504 | 25,793 |
| <strong>Total</strong> | <strong>存款合计</strong> | <strong>2,559,320</strong> | <strong>2,406,032</strong> | <strong>2,506,565</strong> | <strong>2,386,642</strong> |

单位：USD M.

期末存款增加2,559,320−2,406,032＝153,288. 按原表，商业与投资银行增加119,826，是其中最大一部分；其余来自CCB16,140、AWM9,029和公司层8,293，四项合计相等. 原MD&A将CIB变化与支付、证券服务中的客户资金活动等联系. 这个分解比“全部客户更信任银行”更接近所披露的经营结构. [^jpmdeposits]

下一步可以并列两种分析假说：一是客户交易和服务活动扩大带来更多经营存款；二是利率、账户产品与资产配置改变使资金暂时停留或迁移. 它们可能同时存在. 要区分，应查分业务的平均余额、存款成本、客户资金流及账户类型，不能只用期末总额上涨就判断稳定性更强.

<a id="bf22-bank-onepage"></a>
### 普通股归属与一页示范

集团权益362,438减优先股20,045，得到普通股账面权益342,393；这不是监管资本，也不是股票市值. 期末已发行4,104,933,895股减库存股1,408,661,319股，得在外2,696,272,576股；年度稀释加权股数2,781.5 M 股又是不同量. 净利润57,048与普通股可归属净利润55,681也分别保留，1,367差额不在没有进一步归属明细时全部改名成某一种优先股现金支付. [^jpmbs]

| 分析格 | 一页可复核内容 |
|---|---|
| 范围 | JPMorgan Chase & Co.集团，FY2025；银行法人流动性指标另列 |
| 业务/资源 | 客户资金、贷款/证券及服务相互连接；贷款净额1,467,664、存款2,559,320；准备余额与当期信用费用不同 |
| 利润桥 | 193,341−97,898＋87,004−14,212−95,640＝72,595；扣税15,547得57,048 |
| 现金/融资 | 469,317−147,782−265,565＋269,533＋17,835＝343,338；金融资产变动与客户存款分别影响不同现金分类 |
| 流动性 | 季度平均集团LCR111%；期末约915＋548 B 美元为资产视图；有条件融资449 B 美元另列 |
| 普通股 | 普通股账面权益342,393；期末在外2,696,272,576股；普通股可归属净利润55,681与集团净利润不同 |
| 解释及下一证据 | 存款增长可能来自客户业务流量或定价/配置变化；先查CIB/CCB等平均余额、存款成本、客户流量和账户集中度 |

### 分支练习与完整反馈

<strong>先做：</strong>重建FY2025的税前利润、普通股账面权益及存款增加；说明为何−147,782没有单独完成经营质量判断. 再为一项存款增长假说写出一条能推翻它的证据.

<details><summary>展开解析</summary>

税前182,447−14,212−95,640＝72,595；普通股权益362,438−20,045＝342,393；存款增加153,288. 现金流表中的交易资产、借入证券和待售贷款活动使CFO包含金融资产的收付，必须与筹资中的存款、资产质量和流动性一起解释.

例如，若把全部存款增长解释为更稳定的经营性客户资金，下一步应查账户类型、客户流量及平均余额. 若增量主要是短暂的期末大额机构资金、平均余额未同步，原解释就需要修改. 这里假说和检验方法是我们的分析安排，不是已确认的公司结论.

</details>

<details data-agent-option="svb"><summary>历史迁移：把同一方法带到SVB 2023</summary>
<a id="bf22-svb"></a>

迁移到SVB 2023时，需要改用SVB自身的历史证据. 美联储SVB复盘的核心材料包括未保险存款集中、内部流动性压力测试与应急融资缺陷，以及2023-03-09超过40 B 美元的实际提款和次日额外100 B 美元的预期提款. [^svb]

<strong>任务：</strong>用“资产—负债—可操作融资—时间”四格，解释为什么仅有低信用风险证券不够；并辨认其中哪个提款量是当时预期.

<strong>完整解析：</strong>资产格写证券可能提供回收或抵押资源，但出售价格、结算及抵押准备决定何时能用；负债格写集中且未保险的资金来源使提款可能共同发生；融资格检查应急渠道是否已测试、抵押和操作是否能落地；时间格区分3月9日已实现流出与次日管理层预计流出. 两项不能相加说成140 B 美元已完成提款. 这个历史案例还包含治理和监督问题，四格只是完成本篇流动性迁移，不宣称它解释了所有失败原因.

</details>

</section>

<a id="bf22-builder"></a>
## 4. 交出你自己的那一页

现在在实验里选定行业. 先只显示对象和材料入口，逐步填写业务、利润、现金、普通股、竞争解释及下一证据；完成后再揭示示范. 保存的只是本浏览器中的学习笔记，不发送到账户或外部服务；也可以导出一页文本带走.

<div data-experiment-slot="EXP-BF22-ONE-PAGE-BUILDER"></div>

自动核对只检查指定数值和填写情况，不能判断一段业务解释是否有充分因果证据. 一个合格的分析页应当允许下一位读者沿来源重算，并看出哪些是事实、哪些是解释、哪些仍需观察. 若看完示范只记住了数字，再换一家就不会做，任务尚未完成；若能换行业后改变读表顺序、保留口径，并提出具体下一证据，这套方法才真正可以迁移.

<details data-agent-option="research"><summary>选读：为什么不设一个综合“财报好坏分”</summary>
<a id="bf22-research"></a>

Dechow等（2026）把财务披露放在多渠道框架中讨论，提醒读者联合理解报表、调整指标和其他管理层沟通，而不是用单一数字替代全部信息. 本文据此保留竞争解释和证据入口，不复刻其2024Q2试用评价，也不把本次分析页变成自动买卖评分. [^disclosure]

</details>

[^map]: SEC，[Beginners’ Guide to Financial Statements](https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements)，四表、附注、MD&A及Bringing It All Together单元；本篇将地图落实到两种行业.
[^cost]: [Costco FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Item 1、合并利润表/资产负债表/现金流量表，Note 1财年与合并政策. IR PDF与SEC HTML页码不同，按具名报表定位.
[^costpolicy]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Note 1 Membership Fees、Merchandise Inventories、Receivables及Property and Equipment/Leases政策.
[^costincome]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Consolidated Statements of Income及MD&A Gross Margin；表中全部年度行保留.
[^costcash]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，Consolidated Statements of Cash Flows及两期资产负债表库存/应付行. 70差额未分解.
[^costequity]: 同份[Costco 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，两期资产负债表权益栏、Consolidated Statements of Equity及EPS分母；Note 4本金到期.
[^wmtpolicy]: [Walmart FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm)，Item 1分部及期间、Note 1 Inventories；2026-01-31年度，取得日2026-09-21.
[^wmt]: 同份[Walmart 10-K](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm)，MD&A Capital Allocation（p36）、Free Cash Flow（p37）完整表及限制、Consolidated Results of Operations（p38）.
[^jpm]: [JPMorgan Chase 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，集团业务概览，印刷p165利润表、p167资产负债表、p169现金流表，分别为一基PDF物理197/199/201页.
[^jpmincome]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p165完整Consolidated statements of income；原费用行以正额列示，在桥中减去.
[^jpmbs]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p167及贷款/存款相关附注；资产负债表股份为shares，利润表加权分母为million shares.
[^jpmcash]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p169完整Consolidated statements of cash flows及补充；保留原现金集合名称.
[^jpmliq]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，Liquidity Risk Management印刷pp100–103／一基PDF物理pp132–135；季度平均、期末、集团与法人分别采用.
[^jpmdeposits]: 同份[JPM年报](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)，印刷p103完整存款分业务表及变动说明；表内153,288的余额差不是现金流表存款153,168的替代.
[^svb]: 美联储，2023-04-28，[SVB Key Takeaways](https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm)及[Critical Risk Areas—Liquidity Supervision（Overview至Conclusions，止于下一节Interest Rate Risk and Investment Portfolio Supervision之前）](https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm). 历史失败不作为JPM当前预测.
[^disclosure]: Dechow、Ge、Loh、McVay，[Beyond earnings quality](https://link.springer.com/article/10.1007/s11142-026-09971-2)（2026），引言、§3.2–3.3、§8试用范围与局限.

<script src="/notebook/labs/bf-fg/reader-adapter.js" defer></script>


## Additional teaching material
## 一页分析：默认完整反馈

### 零售

Costco FY2025、52周，合并集团. 商品销售与会员服务共享门店、物业和租赁资源. 经营利润(269912−239886)+5323−24966=10383；净利润10383−154+589−2719=8099. 现金9906+13335−5311−3775+6=14161. 权益29164；期末443237000股，与EPS加权分母不同. 库存/应付反向变化893，CFO对应963，未分解差70. 下一观察是匹配期次销量/库存构成及采购/付款条款，而不是把差额直接命名.

### 银行

JPM FY2025集团. NII95443+非息87004−准备14212−非息费用95640=税前72595；净利润57048. 贷款净额1493429−25765=1467664；存款2559320. 现金469317−147782−265565+269533+17835=343338. 权益362438−优先20045=普通股342393；期末在外2696272576股. 季度平均LCR111%与期末资金不混用. 存款增153288，CIB增119826；区分客户活动与产品定价/配置变化，下一步读平均余额、成本、资金流和集中度.

### 迁移解析

Walmart FY2026：美国资本16468+5571+1406=23445，加国际3197=26642；CFO41565−26642=FCF14923，但未扣尽债务与收购等义务. 三分部、期间和库存方法须重新定位. SVB：2023-03-09超过40 B 美元为已实现流出，次日100 B 美元为管理层预期；要看资产变现及抵押操作，不能合称140 B 美元已实现.

一页表自动检查仅核数字与非空格，不认证解释的因果充分性或投资质量. 完整练习与逐条解析见同源正文.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF22-ONE-PAGE-BUILDER",
    "title": "一页分析工作台",
    "anchor": "bf22-builder",
    "description": "按行业逐步显示材料/填写/数字检查/完整示范.",
    "inputs": {
      "provided_by": "agent_packet.supplied_inputs",
      "selection": "agent_packet.selected_branch",
      "pointer_contract": "agent_packet.input_projection",
      "complete_frozen_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-fg/inputs.json",
      "scope": "实际输入已在同一教学包中提供一次；当前 experiment 通过上述绑定复用，不复制第二份表格."
    },
    "algorithm": "integrated重建指定桥；worksheet只验证两项数值与六格非空.",
    "boundaries": "不自动认定因果解释、投资价值或财报质量；本地保存/导出不上传.",
    "outputs": {
      "retail": {
        "branch": "retail",
        "period": "FY2025 ended 2025-08-31 (52 weeks)",
        "profit": 10383,
        "ni": 8099,
        "cash_end": 14161,
        "stock_gap": 5542,
        "shares_net_change": 111000,
        "inventory_ap_change": -893,
        "reverse_balance_change": 893,
        "cf_two_rows": 963,
        "unexplained_difference": 70,
        "income_growth": 1098
      },
      "bank": {
        "branch": "bank",
        "period": "FY2025 ended 2025-12-31",
        "profit": 72595,
        "ni": 57048,
        "cash_end": 343338,
        "common_equity": 342393,
        "shares_end": 2696272576,
        "deposits_change": 153288
      }
    },
    "static_equivalent": "## 一页分析：默认完整反馈\n\n### 零售\n\nCostco FY2025、52周，合并集团. 商品销售与会员服务共享门店、物业和租赁资源. 经营利润(269912−239886)+5323−24966=10383；净利润10383−154+589−2719=8099. 现金9906+13335−5311−3775+6=14161. 权益29164；期末443237000股，与EPS加权分母不同. 库存/应付反向变化893，CFO对应963，未分解差70. 下一观察是匹配期次销量/库存构成及采购/付款条款，而不是把差额直接命名.\n\n### 银行\n\nJPM FY2025集团. NII95443+非息87004−准备14212−非息费用95640=税前72595；净利润57048. 贷款净额1493429−25765=1467664；存款2559320. 现金469317−147782−265565+269533+17835=343338. 权益362438−优先20045=普通股342393；期末在外2696272576股. 季度平均LCR111%与期末资金不混用. 存款增153288，CIB增119826；区分客户活动与产品定价/配置变化，下一步读平均余额、成本、资金流和集中度.\n\n### 迁移解析\n\nWalmart FY2026：美国资本16468+5571+1406=23445，加国际3197=26642；CFO41565−26642=FCF14923，但未扣尽债务与收购等义务. 三分部、期间和库存方法须重新定位. SVB：2023-03-09超过40 B 美元为已实现流出，次日100 B 美元为管理层预期；要看资产变现及抵押操作，不能合称140 B 美元已实现.\n\n一页表自动检查仅核数字与非空格，不认证解释的因果充分性或投资质量. 完整练习与逐条解析见同源正文.\n",
    "source_id_aliases": {
      "BFFG-C01": "BF-S-COST-FY2025-SEC",
      "BFFG-C02": "BF-S-JPM-FY2025",
      "BFFG-C04": "BBC-C01",
      "BFFG-C06": "EIBC-S04",
      "BFFG-S05": "BF-S-SEC-GUIDE"
    },
    "local_url": "/notebook/labs/bf-fg/interactions.html?experiment=EXP-BF22-ONE-PAGE-BUILDER"
  }
]
```

## Sources
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 的 2025 财年末合并资产为77,099 M 美元，负债47,935，权益29,164. 业务说明把商品快速周转与供应商付款安排联系起来；会员费的确认则需要结合收入政策和递延余额.

本组带读将存货与应付的两期余额变化接到现金流量表. 两种计算并不完全相同，差额留待附注和其他口径解释.

EI-B 本批采用：会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.

BF-F/G 本批采用：零售利润/现金/普通股及债务时间的历史原件. SEC具名表定位优先；不混用IR PDF页码.
- [JPMorgan Chase & Co. · 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPMorgan 的 2025 年末集团合并表没有照普通工业企业划分流动／非流动. 证券和贷款各有计量类别；贷款损失准备是贷款账面余额的减项，表下注明的合并VIE金额已包含在集团总额内.

从总权益到普通股权益，还要扣除优先股；每股账面值的股数使用已发行股数减库存股. 原表、附注和普通股权利因此要连在一起读.

BF-F/G 本批采用：集团季度平均LCR、期末资产和有条件融资能力分别记录；银行法人另列；完整主表支持综合带读.
- [SEC · Beginners’ Guide to Financial Statements](https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements): 主表给出汇总数字，附注补充会计政策、组成和承诺，管理层讨论解释经营变化，审计意见说明审计结论. 读一个财务数字时，可以沿“主表行—相关附注—管理层解释”寻找它的含义.

BF-F/G 本批采用：综合材料地图，不替代行业分支机制.
- [Review of the Federal Reserve’s Supervision and Regulation of Silicon Valley Bank — Key Takeaways](https://www.federalreserve.gov/publications/2023-April-SVB-Key-Takeaways.htm): 2023历史复盘；超过40 B 美元为实际日流出，100 B 美元为次日预期，不可相加为已实现.
- [SVB Review — Supervision of SVBFG by Critical Risk Areas](https://www.federalreserve.gov/publications/2023-April-SVB-Supervision-of-SVBFG-by-Critical-Risk-Areas.htm): 具体流动性治理、压力假设与可操作融资缺陷；不把历史复盘当JPM当前预测.
- [Beyond earnings quality: evaluating the quality of corporate disclosure practices](https://link.springer.com/article/10.1007/s11142-026-09971-2): 透明度、项目持续性、分母和其他披露的联读框架；18家公司试用是2024Q2，不是Salesforce FY26评价.
- [Walmart FY2026 Form 10-K — Sam’s Club U.S.](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm): Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.

BF-F/G 本批采用：零售迁移：三分部、年结差异、资本用途与FCF范围；FY25 capex为23783.

## Content relations
```json
[
  {
    "from": "zh-bf22",
    "relation": "part_of",
    "to": "business-reports",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf22",
    "relation": "illustrated_by",
    "to": "bf22-retail",
    "reason": "同一正文中的具名期间案例"
  },
  {
    "from": "bf22-retail",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "原表支持本例",
    "locator": [
      "Item 1",
      "Consolidated Statements of Income / Balance Sheets / Equity / Cash Flows",
      "Note 1",
      "Note 4—Debt",
      "MD&A Bank Credit Facilities and Commercial Paper Programs"
    ],
    "scope": "2025-08-31材料"
  },
  {
    "from": "zh-bf22",
    "relation": "illustrated_by",
    "to": "bf22-bank",
    "reason": "同一正文中的具名期间案例"
  },
  {
    "from": "bf22-bank",
    "relation": "supported_by",
    "to": "BF-S-JPM-FY2025",
    "reason": "原表支持本例",
    "locator": [
      "printed 100–103 = physical 132–135 (1-based)",
      "printed 165/167/169 = physical 197/199/201",
      "MD&A Introduction p46; Loan accounting framework Note 12 pp236–238"
    ],
    "scope": "2025-12-31材料"
  },
  {
    "from": "bf22-map",
    "relation": "supported_by",
    "to": "BF-S-SEC-GUIDE",
    "reason": "综合材料地图，不替代行业分支机制.",
    "locator": [
      "四张报表、Footnotes、MD&A、Bringing It All Together"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-map"
  },
  {
    "from": "bf22-retail",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "零售利润/现金/普通股及债务时间的历史原件. SEC具名表定位优先；不混用IR PDF页码.",
    "locator": [
      "Item 1",
      "Consolidated Statements of Income / Balance Sheets / Equity / Cash Flows",
      "Note 1",
      "Note 4—Debt",
      "MD&A Bank Credit Facilities and Commercial Paper Programs"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-retail"
  },
  {
    "from": "bf22-bank",
    "relation": "supported_by",
    "to": "BF-S-JPM-FY2025",
    "reason": "集团季度平均LCR、期末资产和有条件融资能力分别记录；银行法人另列；完整主表支持综合带读.",
    "locator": [
      "printed 100–103 = physical 132–135 (1-based)",
      "printed 165/167/169 = physical 197/199/201",
      "MD&A Introduction p46; Loan accounting framework Note 12 pp236–238"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-bank"
  },
  {
    "from": "bf22-walmart",
    "relation": "supported_by",
    "to": "EIBC-S04",
    "reason": "零售迁移：三分部、年结差异、资本用途与FCF范围；FY25 capex为23783.",
    "locator": [
      "Item1 分部与期间",
      "MD&A Capital Allocation p36",
      "Free Cash Flow p37",
      "Consolidated Results of Operations p38",
      "Note1 Inventories"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-walmart"
  },
  {
    "from": "bf22-svb",
    "relation": "supported_by",
    "to": "BFFG-C03",
    "reason": "2023历史复盘；超过40 B 美元为实际日流出，100 B 美元为次日预期，不可相加为已实现.",
    "locator": [
      "Key Takeaways 全文"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-svb"
  },
  {
    "from": "bf22-svb",
    "relation": "supported_by",
    "to": "BFFG-C03L",
    "reason": "具体流动性治理、压力假设与可操作融资缺陷；不把历史复盘当JPM当前预测.",
    "locator": [
      "Liquidity Supervision：Overview至该节Conclusions；止于下一节Interest Rate Risk and Investment Portfolio Supervision之前"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-svb"
  },
  {
    "from": "bf22-research",
    "relation": "supported_by",
    "to": "BFFG-R02",
    "reason": "透明度、项目持续性、分母和其他披露的联读框架；18家公司试用是2024Q2，不是Salesforce FY26评价.",
    "locator": [
      "Introduction",
      "§3.2–3.3",
      "§8 pilot及实施边界"
    ],
    "scope": "仅正文/所选扩展实际使用范围",
    "at_section": "bf22-research"
  },
  {
    "from": "bf22-map",
    "relation": "uses_method",
    "to": "zh-bf06",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-map"
  },
  {
    "from": "bf22-map",
    "relation": "uses_method",
    "to": "zh-bf07",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-map"
  },
  {
    "from": "bf22-map",
    "relation": "uses_method",
    "to": "zh-bf08",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-map"
  },
  {
    "from": "bf22-builder",
    "relation": "uses_method",
    "to": "zh-bf19",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-builder"
  },
  {
    "from": "bf22-builder",
    "relation": "uses_method",
    "to": "zh-bf20",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-builder"
  },
  {
    "from": "bf22-builder",
    "relation": "uses_method",
    "to": "zh-bf21",
    "reason": "调用已说明的局部读表能力，可就地补充，不锁整篇先修",
    "at_section": "bf22-builder"
  },
  {
    "from": "bf22-builder",
    "relation": "illustrated_by",
    "to": "EXP-BF22-ONE-PAGE-BUILDER",
    "at_section": "bf22-builder",
    "reason": "按行业逐步显示材料/填写/数字检查/完整示范.",
    "conditions": "不自动认定因果解释、投资价值或财报质量；本地保存/导出不上传."
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 14/14
完成所选行业的原表重建，写出竞争解释及下一项区分证据.
