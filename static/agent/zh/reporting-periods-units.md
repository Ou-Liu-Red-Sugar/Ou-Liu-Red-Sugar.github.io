# 财报的期间、范围、币种与可比口径

比较财务数字的报告期间、合并范围与币种，按原始口径换算，并识别可比性限制.

Entry: zh-bf03 | Node: BF-03 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
面向具有微积分、线性代数、基本概率与证明阅读能力的高年级本科生至研究生，材料版本2026-09-22-deep-review. 围绕BF-03“财报的期间、范围、币种与可比口径”（2026-09-22-deep-review）处理读者当前表格；未指定时，默认修正Costco 52/53周比较.

先实际读取下列所用单元. 运行时读取日志初始为空；记录文档版本、范围及支持当前比较的内容，已有书目或历史读取记录不等于本次运行已读：
1. OpenStax Principles of Accounting Vol.1，2019，§2.1中报表的时点/期间及联系完整单元：
https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate
2. Costco FY2025 SEC 10-K：
https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm
读取Item 1 p.3财年与季度构成段；完整利润表p.37、资产负债表p.39；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 若需要同店指标，须另读MD&A中该指标完整定义，不能把每周增长直接改名.
3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report：
https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf
完整资产负债表p.167/物理p.199及股份括注；Note 10 pp.228–229，尤其类别转移、单位与计量说明；采用现金比较时再读p.169/物理p.201. PDF表格查看原页.

只取得目录或摘要不满足承重数据读取. 失败时找同机构原件或已核等价版；仍缺就说明缺少的具体单元，不填一组相似数字.

先让读者给每个数字贴上“对象/范围、项目、币种/单位、时点或期间、版本/出处”. 随后保留原始249625、237710、52、53，计算原始增长与每周平均增长. 必须解释7.03%为何不是同店增长，也不能用于把期末存货除以周数.

单位练习使用44.1 B=44,100 M；每股练习使用342393 M、2696272576shares，转换得到126.99USD/share. 区分期末股数、加权平均股数和市场价格. 不得把类别转移当成购入现金流.

最后换成明确虚构的累计100、230，让读者求第二季度单季130并说明适用条件. 完整反馈既核公式，也核比较名称和仍未解决的范围差异；算术正确不代表比较口径有效. 当前疑点解决后返回原词条.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-bf03",
  "node_id": "BF-03",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "具有足够数学背景的高年级本科至研究生",
  "body_source": "body_markdown",
  "learning_task": "为真实财务数字保留口径，在不丢失原值的前提下做期间和单位比较，并指出仍不可比较的部分.",
  "prompt": "面向具有微积分、线性代数、基本概率与证明阅读能力的高年级本科生至研究生，材料版本2026-09-22-deep-review. 围绕BF-03“财报的期间、范围、币种与可比口径”（2026-09-22-deep-review）处理读者当前表格；未指定时，默认修正Costco 52/53周比较.\n\n先实际读取下列所用单元. 运行时读取日志初始为空；记录文档版本、范围及支持当前比较的内容，已有书目或历史读取记录不等于本次运行已读：\n1. OpenStax Principles of Accounting Vol.1，2019，§2.1中报表的时点/期间及联系完整单元：\nhttps://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate\n2. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\n读取Item 1 p.3财年与季度构成段；完整利润表p.37、资产负债表p.39；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 若需要同店指标，须另读MD&A中该指标完整定义，不能把每周增长直接改名.\n3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\n完整资产负债表p.167/物理p.199及股份括注；Note 10 pp.228–229，尤其类别转移、单位与计量说明；采用现金比较时再读p.169/物理p.201. PDF表格查看原页.\n\n只取得目录或摘要不满足承重数据读取. 失败时找同机构原件或已核等价版；仍缺就说明缺少的具体单元，不填一组相似数字.\n\n先让读者给每个数字贴上“对象/范围、项目、币种/单位、时点或期间、版本/出处”. 随后保留原始249625、237710、52、53，计算原始增长与每周平均增长. 必须解释7.03%为何不是同店增长，也不能用于把期末存货除以周数.\n\n单位练习使用44.1 B=44,100 M；每股练习使用342393 M、2696272576shares，转换得到126.99USD/share. 区分期末股数、加权平均股数和市场价格. 不得把类别转移当成购入现金流.\n\n最后换成明确虚构的累计100、230，让读者求第二季度单季130并说明适用条件. 完整反馈既核公式，也核比较名称和仍未解决的范围差异；算术正确不代表比较口径有效. 当前疑点解决后返回原词条.",
  "selected_branch": "current_task",
  "required_readings": [
    {
      "source_id": "BF-S-OPENSTAX-21",
      "title": "OpenStax · Principles of Accounting, Volume 1 · §2.1",
      "authors": [
        "OpenStax"
      ],
      "version": "2019；§2.1",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "1. OpenStax Principles of Accounting Vol.1，2019，§2.1中报表的时点/期间及联系完整单元：",
        "scope": "1. OpenStax Principles of Accounting Vol.1，2019，§2.1中报表的时点/期间及联系完整单元：\nhttps://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate",
        "purpose": "为真实财务数字保留口径，在不丢失原值的前提下做期间和单位比较，并指出仍不可比较的部分."
      },
      "supports": "1. OpenStax Principles of Accounting Vol.1，2019，§2.1中报表的时点/期间及联系完整单元：",
      "fallback_source_ids": []
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "title": "Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY2025；截至2025-08-31；比较列采用同一报告",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2. Costco FY2025 SEC 10-K：\n读取Item 1 p.3财年与季度构成段；完整利润表p.37、资产负债表p.39；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 若需要同店指标，须另读MD&A中该指标完整定义，不能把每周增长直接改名.",
        "scope": "2. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\n读取Item 1 p.3财年与季度构成段；完整利润表p.37、资产负债表p.39；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 若需要同店指标，须另读MD&A中该指标完整定义，不能把每周增长直接改名.",
        "purpose": "为真实财务数字保留口径，在不丢失原值的前提下做期间和单位比较，并指出仍不可比较的部分."
      },
      "supports": "2. Costco FY2025 SEC 10-K：\n读取Item 1 p.3财年与季度构成段；完整利润表p.37、资产负债表p.39；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 若需要同店指标，须另读MD&A中该指标完整定义，不能把每周增长直接改名.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "BF-S-JPM-FY2025",
      "title": "JPMorgan Chase & Co. · 2025 Annual Report",
      "authors": [
        "JPMorgan Chase & Co."
      ],
      "version": "2025 Annual Report；集团合并，非银行子公司单体",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report：\n完整资产负债表p.167/物理p.199及股份括注；Note 10 pp.228–229，尤其类别转移、单位与计量说明；采用现金比较时再读p.169/物理p.201. PDF表格查看原页.",
        "scope": "3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\n完整资产负债表p.167/物理p.199及股份括注；Note 10 pp.228–229，尤其类别转移、单位与计量说明；采用现金比较时再读p.169/物理p.201. PDF表格查看原页.",
        "purpose": "为真实财务数字保留口径，在不丢失原值的前提下做期间和单位比较，并指出仍不可比较的部分."
      },
      "supports": "3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report：\n完整资产负债表p.167/物理p.199及股份括注；Note 10 pp.228–229，尤其类别转移、单位与计量说明；采用现金比较时再读p.169/物理p.201. PDF表格查看原页.",
      "fallback_source_ids": [],
      "required_when_selected": true,
      "selected_scope": "3. 使用银行单位/每股例子时，读取JPMorgan 2025 Annual Report："
    }
  ],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "source_version": "2026-09-21.BF-A.rev-1",
    "tables": [
      {
        "heading": "1　随数字保存的最小口径",
        "headers": [
          "字段",
          "本例应保存什么",
          "最容易发生的错位"
        ],
        "rows": [
          [
            "对象／范围",
            "Costco及其全资子公司的合并报表；或JPMorgan Chase & Co.集团合并表",
            "把集团与银行子公司、报告分部混在一起"
          ],
          [
            "时间",
            "`as_of=2025-08-31`，或截至该日52周",
            "把期末余额当作全年发生额"
          ],
          [
            "单位",
            "USD，金额以 M 计；股数另用shares",
            "只改“ M ／ B ”标签，不改数值"
          ],
          [
            "定义／计量",
            "原行名称、净额所扣项目、相关政策",
            "“贷款”与“扣准备后的贷款”互相替代"
          ],
          [
            "比较版本",
            "使用2025年报中列示的2024比较数",
            "把旧版与本期重分类后的比较列拼接"
          ],
          [
            "来源与可得时间",
            "文档、原表行、页码及该版本何时可取得",
            "把财年末当成年报发布日或研究读取日"
          ]
        ],
        "markdown": "| 字段 | 本例应保存什么 | 最容易发生的错位 |\n|---|---|---|\n| 对象／范围 | Costco及其全资子公司的合并报表；或JPMorgan Chase & Co.集团合并表 | 把集团与银行子公司、报告分部混在一起 |\n| 时间 | `as_of=2025-08-31`，或截至该日52周 | 把期末余额当作全年发生额 |\n| 单位 | USD，金额以 M 计；股数另用shares | 只改“ M ／ B ”标签，不改数值 |\n| 定义／计量 | 原行名称、净额所扣项目、相关政策 | “贷款”与“扣准备后的贷款”互相替代 |\n| 比较版本 | 使用2025年报中列示的2024比较数 | 把旧版与本期重分类后的比较列拼接 |\n| 来源与可得时间 | 文档、原表行、页码及该版本何时可取得 | 把财年末当成年报发布日或研究读取日 |"
      },
      {
        "heading": "2　先比较同样长的一段时间，但别把它当作全部解释",
        "headers": [
          "财年",
          "期间截至日",
          "周数",
          "Net sales／净销售额"
        ],
        "rows": [
          [
            "FY2023",
            "2023-09-03",
            "53",
            "237,710"
          ],
          [
            "FY2024",
            "2024-09-01",
            "52",
            "249,625"
          ],
          [
            "FY2025",
            "2025-08-31",
            "52",
            "269,912"
          ]
        ],
        "markdown": "| 财年 | 期间截至日 | 周数 | Net sales／净销售额 |\n|---|---|---:|---:|\n| FY2023 | 2023-09-03 | 53 | 237,710 |\n| FY2024 | 2024-09-01 | 52 | 249,625 |\n| FY2025 | 2025-08-31 | 52 | 269,912 |"
      }
    ],
    "source_input_schema": "BF-A.rev-1.unified-inputs",
    "information_cutoff": "2026-09-21",
    "units_and_limits": [
      "金额默认单位为USD M；股数单独使用shares；教学设定另列.",
      "主表与附注明细分层保存；附注明细不得自动再加到主表总额.",
      "Costco存货/应付余额反向变化893与现金流调整963之间的70保持未归因."
    ],
    "case_inputs": {
      "COST-BS-20250831": {
        "entity": "Costco Wholesale Corporation",
        "periods": [
          "2025-08-31",
          "2024-09-01"
        ],
        "statement_rows": [
          {
            "id": "assets",
            "label_original_md": "**ASSETS**",
            "label_zh_md": "**资产**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "current_assets",
            "label_original_md": "**CURRENT ASSETS**",
            "label_zh_md": "**流动资产**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "cash",
            "label_original_md": "Cash and cash equivalents",
            "label_zh_md": "现金及现金等价物",
            "amounts": {
              "2025-08-31": 14161,
              "2024-09-01": 9906
            },
            "original_display": {
              "2025-08-31": "14,161",
              "2024-09-01": "9,906"
            }
          },
          {
            "id": "short_term_investments",
            "label_original_md": "Short-term investments",
            "label_zh_md": "短期投资",
            "amounts": {
              "2025-08-31": 1123,
              "2024-09-01": 1238
            },
            "original_display": {
              "2025-08-31": "1,123",
              "2024-09-01": "1,238"
            }
          },
          {
            "id": "receivables_net",
            "label_original_md": "Receivables, net",
            "label_zh_md": "应收款净额",
            "amounts": {
              "2025-08-31": 3203,
              "2024-09-01": 2721
            },
            "original_display": {
              "2025-08-31": "3,203",
              "2024-09-01": "2,721"
            }
          },
          {
            "id": "inventory",
            "label_original_md": "Merchandise inventories",
            "label_zh_md": "商品存货",
            "amounts": {
              "2025-08-31": 18116,
              "2024-09-01": 18647
            },
            "original_display": {
              "2025-08-31": "18,116",
              "2024-09-01": "18,647"
            }
          },
          {
            "id": "other_current_assets",
            "label_original_md": "Other current assets",
            "label_zh_md": "其他流动资产",
            "amounts": {
              "2025-08-31": 1777,
              "2024-09-01": 1734
            },
            "original_display": {
              "2025-08-31": "1,777",
              "2024-09-01": "1,734"
            }
          },
          {
            "id": "total_current_assets",
            "label_original_md": "**Total current assets**",
            "label_zh_md": "**流动资产合计**",
            "amounts": {
              "2025-08-31": 38380,
              "2024-09-01": 34246
            },
            "original_display": {
              "2025-08-31": "**38,380**",
              "2024-09-01": "**34,246**"
            }
          },
          {
            "id": "other_assets",
            "label_original_md": "**OTHER ASSETS**",
            "label_zh_md": "**其他资产**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "ppe_net",
            "label_original_md": "Property and equipment, net",
            "label_zh_md": "物业及设备净额",
            "amounts": {
              "2025-08-31": 31909,
              "2024-09-01": 29032
            },
            "original_display": {
              "2025-08-31": "31,909",
              "2024-09-01": "29,032"
            }
          },
          {
            "id": "operating_lease_rou",
            "label_original_md": "Operating lease right-of-use assets",
            "label_zh_md": "经营租赁使用权资产",
            "amounts": {
              "2025-08-31": 2725,
              "2024-09-01": 2617
            },
            "original_display": {
              "2025-08-31": "2,725",
              "2024-09-01": "2,617"
            }
          },
          {
            "id": "other_long_term_assets",
            "label_original_md": "Other long-term assets",
            "label_zh_md": "其他长期资产",
            "amounts": {
              "2025-08-31": 4085,
              "2024-09-01": 3936
            },
            "original_display": {
              "2025-08-31": "4,085",
              "2024-09-01": "3,936"
            }
          },
          {
            "id": "total_assets",
            "label_original_md": "**TOTAL ASSETS**",
            "label_zh_md": "**总资产**",
            "amounts": {
              "2025-08-31": 77099,
              "2024-09-01": 69831
            },
            "original_display": {
              "2025-08-31": "**77,099**",
              "2024-09-01": "**69,831**"
            }
          },
          {
            "id": "liabilities_and_equity",
            "label_original_md": "**LIABILITIES AND EQUITY**",
            "label_zh_md": "**负债与权益**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "current_liabilities",
            "label_original_md": "**CURRENT LIABILITIES**",
            "label_zh_md": "**流动负债**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "accounts_payable",
            "label_original_md": "Accounts payable",
            "label_zh_md": "应付账款",
            "amounts": {
              "2025-08-31": 19783,
              "2024-09-01": 19421
            },
            "original_display": {
              "2025-08-31": "19,783",
              "2024-09-01": "19,421"
            }
          },
          {
            "id": "accrued_salaries_benefits",
            "label_original_md": "Accrued salaries and benefits",
            "label_zh_md": "应计工资及福利",
            "amounts": {
              "2025-08-31": 5205,
              "2024-09-01": 4794
            },
            "original_display": {
              "2025-08-31": "5,205",
              "2024-09-01": "4,794"
            }
          },
          {
            "id": "accrued_member_rewards",
            "label_original_md": "Accrued member rewards",
            "label_zh_md": "应计会员奖励",
            "amounts": {
              "2025-08-31": 2677,
              "2024-09-01": 2435
            },
            "original_display": {
              "2025-08-31": "2,677",
              "2024-09-01": "2,435"
            }
          },
          {
            "id": "deferred_membership_fees",
            "label_original_md": "Deferred membership fees",
            "label_zh_md": "递延会员费",
            "amounts": {
              "2025-08-31": 2854,
              "2024-09-01": 2501
            },
            "original_display": {
              "2025-08-31": "2,854",
              "2024-09-01": "2,501"
            }
          },
          {
            "id": "other_current_liabilities",
            "label_original_md": "Other current liabilities",
            "label_zh_md": "其他流动负债",
            "amounts": {
              "2025-08-31": 6589,
              "2024-09-01": 6313
            },
            "original_display": {
              "2025-08-31": "6,589",
              "2024-09-01": "6,313"
            }
          },
          {
            "id": "total_current_liabilities",
            "label_original_md": "**Total current liabilities**",
            "label_zh_md": "**流动负债合计**",
            "amounts": {
              "2025-08-31": 37108,
              "2024-09-01": 35464
            },
            "original_display": {
              "2025-08-31": "**37,108**",
              "2024-09-01": "**35,464**"
            }
          },
          {
            "id": "other_liabilities",
            "label_original_md": "**OTHER LIABILITIES**",
            "label_zh_md": "**其他负债**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "long_term_debt",
            "label_original_md": "Long-term debt, excluding current portion",
            "label_zh_md": "长期债务，不含流动部分",
            "amounts": {
              "2025-08-31": 5713,
              "2024-09-01": 5794
            },
            "original_display": {
              "2025-08-31": "5,713",
              "2024-09-01": "5,794"
            }
          },
          {
            "id": "long_term_operating_lease_liabilities",
            "label_original_md": "Long-term operating lease liabilities",
            "label_zh_md": "长期经营租赁负债",
            "amounts": {
              "2025-08-31": 2460,
              "2024-09-01": 2375
            },
            "original_display": {
              "2025-08-31": "2,460",
              "2024-09-01": "2,375"
            }
          },
          {
            "id": "other_long_term_liabilities",
            "label_original_md": "Other long-term liabilities",
            "label_zh_md": "其他长期负债",
            "amounts": {
              "2025-08-31": 2654,
              "2024-09-01": 2576
            },
            "original_display": {
              "2025-08-31": "2,654",
              "2024-09-01": "2,576"
            }
          },
          {
            "id": "total_liabilities",
            "label_original_md": "**TOTAL LIABILITIES**",
            "label_zh_md": "**负债合计**",
            "amounts": {
              "2025-08-31": 47935,
              "2024-09-01": 46209
            },
            "original_display": {
              "2025-08-31": "**47,935**",
              "2024-09-01": "**46,209**"
            }
          },
          {
            "id": "commitments_contingencies",
            "label_original_md": "COMMITMENTS AND CONTINGENCIES",
            "label_zh_md": "承诺及或有事项〔原表无金额〕",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "equity",
            "label_original_md": "**EQUITY**",
            "label_zh_md": "**权益**",
            "amounts": {
              "2025-08-31": null,
              "2024-09-01": null
            },
            "original_display": {
              "2025-08-31": "",
              "2024-09-01": ""
            }
          },
          {
            "id": "preferred_stock",
            "label_original_md": "Preferred stock \\$0.005 par value; 100,000,000 shares authorized; no shares issued and outstanding",
            "label_zh_md": "优先股：每股面值0.005美元；授权100,000,000股；无已发行及流通股",
            "amounts": {
              "2025-08-31": 0,
              "2024-09-01": 0
            },
            "original_display": {
              "2025-08-31": "—",
              "2024-09-01": "—"
            }
          },
          {
            "id": "common_stock",
            "label_original_md": "Common stock \\$0.005 par value; 900,000,000 shares authorized; 443,237,000 and 443,126,000 shares issued and outstanding",
            "label_zh_md": "普通股：每股面值0.005美元；授权900,000,000股；两期已发行及流通443,237,000及443,126,000股",
            "amounts": {
              "2025-08-31": 2,
              "2024-09-01": 2
            },
            "original_display": {
              "2025-08-31": "2",
              "2024-09-01": "2"
            }
          },
          {
            "id": "additional_paid_in_capital",
            "label_original_md": "Additional paid-in capital",
            "label_zh_md": "额外实缴资本",
            "amounts": {
              "2025-08-31": 8282,
              "2024-09-01": 7829
            },
            "original_display": {
              "2025-08-31": "8,282",
              "2024-09-01": "7,829"
            }
          },
          {
            "id": "aocl",
            "label_original_md": "Accumulated other comprehensive loss",
            "label_zh_md": "累计其他综合损失",
            "amounts": {
              "2025-08-31": -1770,
              "2024-09-01": -1828
            },
            "original_display": {
              "2025-08-31": "(1,770)",
              "2024-09-01": "(1,828)"
            }
          },
          {
            "id": "retained_earnings",
            "label_original_md": "Retained earnings",
            "label_zh_md": "留存收益",
            "amounts": {
              "2025-08-31": 22650,
              "2024-09-01": 17619
            },
            "original_display": {
              "2025-08-31": "22,650",
              "2024-09-01": "17,619"
            }
          },
          {
            "id": "total_equity",
            "label_original_md": "**TOTAL EQUITY**",
            "label_zh_md": "**权益合计**",
            "amounts": {
              "2025-08-31": 29164,
              "2024-09-01": 23622
            },
            "original_display": {
              "2025-08-31": "**29,164**",
              "2024-09-01": "**23,622**"
            }
          },
          {
            "id": "total_liabilities_equity",
            "label_original_md": "**TOTAL LIABILITIES AND EQUITY**",
            "label_zh_md": "**负债及权益合计**",
            "amounts": {
              "2025-08-31": 77099,
              "2024-09-01": 69831
            },
            "original_display": {
              "2025-08-31": "**77,099**",
              "2024-09-01": "**69,831**"
            }
          }
        ],
        "supplemental": {
          "cashflow_2025": {
            "beginning_cash": 9906,
            "cfo": 13335,
            "cfi": -5311,
            "cff": -3775,
            "fx": 6,
            "ending_cash": 14161
          },
          "working_balance": {
            "inventory_2025": 18116,
            "inventory_2024": 18647,
            "payables_2025": 19783,
            "payables_2024": 19421,
            "cf_inventory_adjustment": 559,
            "cf_payables_adjustment": 404
          },
          "lease_2025": {
            "current_operating": 208,
            "current_finance": 78,
            "long_term_operating": 2460,
            "long_term_finance": 1401,
            "finance_lease_assets_other_long_term_assets": 1488
          }
        }
      },
      "JPM-BS-20251231": {
        "entity": "JPMorgan Chase & Co.",
        "periods": [
          "2025-12-31",
          "2024-12-31"
        ],
        "statement_rows": [
          {
            "id": "assets",
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
            "id": "cash_due_from_banks",
            "label_original_md": "Cash and due from banks",
            "label_zh_md": "现金及应收银行款",
            "amounts": {
              "2025-12-31": 21742,
              "2024-12-31": 23372
            },
            "original_display": {
              "2025-12-31": "21,742",
              "2024-12-31": "23,372"
            }
          },
          {
            "id": "deposits_with_banks",
            "label_original_md": "Deposits with banks",
            "label_zh_md": "存放银行款项",
            "amounts": {
              "2025-12-31": 321596,
              "2024-12-31": 445945
            },
            "original_display": {
              "2025-12-31": "321,596",
              "2024-12-31": "445,945"
            }
          },
          {
            "id": "fed_funds_sold_resale",
            "label_original_md": "Federal funds sold and securities purchased under resale agreements (included \\$327,018 and \\$286,771 at fair value)",
            "label_zh_md": "拆出联邦基金及买入返售证券〔其中按公允价值计量327,018／286,771〕",
            "amounts": {
              "2025-12-31": 336426,
              "2024-12-31": 295001
            },
            "original_display": {
              "2025-12-31": "336,426",
              "2024-12-31": "295,001"
            }
          },
          {
            "id": "securities_borrowed",
            "label_original_md": "Securities borrowed (included \\$98,111 and \\$83,962 at fair value)",
            "label_zh_md": "借入证券〔其中按公允价值计量98,111／83,962〕",
            "amounts": {
              "2025-12-31": 286191,
              "2024-12-31": 219546
            },
            "original_display": {
              "2025-12-31": "286,191",
              "2024-12-31": "219,546"
            }
          },
          {
            "id": "trading_assets",
            "label_original_md": "Trading assets (included assets pledged of \\$165,927 and \\$136,070)",
            "label_zh_md": "交易资产〔其中已质押资产165,927／136,070〕",
            "amounts": {
              "2025-12-31": 802873,
              "2024-12-31": 637784
            },
            "original_display": {
              "2025-12-31": "802,873",
              "2024-12-31": "637,784"
            }
          },
          {
            "id": "afs_securities",
            "label_original_md": "Available-for-sale securities (amortized cost of \\$507,226 and \\$411,045; included assets pledged of \\$7,735 and \\$10,162)",
            "label_zh_md": "可供出售证券〔摊余成本507,226／411,045；其中已质押7,735／10,162〕",
            "amounts": {
              "2025-12-31": 507198,
              "2024-12-31": 406852
            },
            "original_display": {
              "2025-12-31": "507,198",
              "2024-12-31": "406,852"
            }
          },
          {
            "id": "htm_securities",
            "label_original_md": "Held-to-maturity securities",
            "label_zh_md": "持有至到期证券",
            "amounts": {
              "2025-12-31": 270134,
              "2024-12-31": 274468
            },
            "original_display": {
              "2025-12-31": "270,134",
              "2024-12-31": "274,468"
            }
          },
          {
            "id": "investment_securities_net",
            "label_original_md": "**Investment securities, net of allowance for credit losses**",
            "label_zh_md": "**投资证券，扣除信用损失准备后**",
            "amounts": {
              "2025-12-31": 777332,
              "2024-12-31": 681320
            },
            "original_display": {
              "2025-12-31": "**777,332**",
              "2024-12-31": "**681,320**"
            }
          },
          {
            "id": "loans_gross",
            "label_original_md": "Loans (included \\$70,684 and \\$41,350 at fair value)",
            "label_zh_md": "贷款，未扣贷款损失准备〔其中按公允价值计量70,684／41,350〕",
            "amounts": {
              "2025-12-31": 1493429,
              "2024-12-31": 1347988
            },
            "original_display": {
              "2025-12-31": "1,493,429",
              "2024-12-31": "1,347,988"
            }
          },
          {
            "id": "allowance_loan_losses",
            "label_original_md": "Allowance for loan losses",
            "label_zh_md": "贷款损失准备〔资产减项〕",
            "amounts": {
              "2025-12-31": -25765,
              "2024-12-31": -24345
            },
            "original_display": {
              "2025-12-31": "(25,765)",
              "2024-12-31": "(24,345)"
            }
          },
          {
            "id": "loans_net",
            "label_original_md": "**Loans, net of allowance for loan losses**",
            "label_zh_md": "**贷款净额**",
            "amounts": {
              "2025-12-31": 1467664,
              "2024-12-31": 1323643
            },
            "original_display": {
              "2025-12-31": "**1,467,664**",
              "2024-12-31": "**1,323,643**"
            }
          },
          {
            "id": "accrued_interest_receivables",
            "label_original_md": "Accrued interest and accounts receivable",
            "label_zh_md": "应计利息及应收账款",
            "amounts": {
              "2025-12-31": 111599,
              "2024-12-31": 101223
            },
            "original_display": {
              "2025-12-31": "111,599",
              "2024-12-31": "101,223"
            }
          },
          {
            "id": "premises_equipment",
            "label_original_md": "Premises and equipment",
            "label_zh_md": "房屋及设备",
            "amounts": {
              "2025-12-31": 36244,
              "2024-12-31": 32223
            },
            "original_display": {
              "2025-12-31": "36,244",
              "2024-12-31": "32,223"
            }
          },
          {
            "id": "goodwill_msrs_other_intangibles",
            "label_original_md": "Goodwill, MSRs and other intangible assets",
            "label_zh_md": "商誉、按揭服务权及其他无形资产",
            "amounts": {
              "2025-12-31": 64458,
              "2024-12-31": 64560
            },
            "original_display": {
              "2025-12-31": "64,458",
              "2024-12-31": "64,560"
            }
          },
          {
            "id": "other_assets",
            "label_original_md": "Other assets (included \\$15,849 and \\$15,122 at fair value and assets pledged of \\$11,984 and \\$6,288)",
            "label_zh_md": "其他资产〔其中按公允价值计量15,849／15,122；已质押11,984／6,288〕",
            "amounts": {
              "2025-12-31": 198775,
              "2024-12-31": 178197
            },
            "original_display": {
              "2025-12-31": "198,775",
              "2024-12-31": "178,197"
            }
          },
          {
            "id": "total_assets",
            "label_original_md": "**Total assets(a)**",
            "label_zh_md": "**总资产〔附注(a)〕**",
            "amounts": {
              "2025-12-31": 4424900,
              "2024-12-31": 4002814
            },
            "original_display": {
              "2025-12-31": "**4,424,900**",
              "2024-12-31": "**4,002,814**"
            }
          },
          {
            "id": "liabilities",
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
            "id": "customer_deposits",
            "label_original_md": "Deposits (included \\$20,930 and \\$33,768 at fair value)",
            "label_zh_md": "客户存款〔其中按公允价值计量20,930／33,768〕",
            "amounts": {
              "2025-12-31": 2559320,
              "2024-12-31": 2406032
            },
            "original_display": {
              "2025-12-31": "2,559,320",
              "2024-12-31": "2,406,032"
            }
          },
          {
            "id": "fed_funds_purchased_repo",
            "label_original_md": "Federal funds purchased and securities loaned or sold under repurchase agreements (included \\$360,194 and \\$226,329 at fair value)",
            "label_zh_md": "拆入联邦基金及证券借出或回购融资〔其中按公允价值计量360,194／226,329〕",
            "amounts": {
              "2025-12-31": 442396,
              "2024-12-31": 296835
            },
            "original_display": {
              "2025-12-31": "442,396",
              "2024-12-31": "296,835"
            }
          },
          {
            "id": "short_term_borrowings",
            "label_original_md": "Short-term borrowings (included \\$32,460 and \\$26,521 at fair value)",
            "label_zh_md": "短期借款〔其中按公允价值计量32,460／26,521〕",
            "amounts": {
              "2025-12-31": 64776,
              "2024-12-31": 52893
            },
            "original_display": {
              "2025-12-31": "64,776",
              "2024-12-31": "52,893"
            }
          },
          {
            "id": "trading_liabilities",
            "label_original_md": "Trading liabilities",
            "label_zh_md": "交易负债",
            "amounts": {
              "2025-12-31": 216019,
              "2024-12-31": 192883
            },
            "original_display": {
              "2025-12-31": "216,019",
              "2024-12-31": "192,883"
            }
          },
          {
            "id": "accounts_payable_other_liabilities",
            "label_original_md": "Accounts payable and other liabilities (included \\$6,660 and \\$5,893 at fair value)",
            "label_zh_md": "应付账款及其他负债〔其中按公允价值计量6,660／5,893〕",
            "amounts": {
              "2025-12-31": 316794,
              "2024-12-31": 280672
            },
            "original_display": {
              "2025-12-31": "316,794",
              "2024-12-31": "280,672"
            }
          },
          {
            "id": "vie_beneficial_interests",
            "label_original_md": "Beneficial interests issued by consolidated VIEs (included \\$5 and \\$1 at fair value)",
            "label_zh_md": "合并VIE发行的受益权益〔其中按公允价值计量5／1〕",
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
            "id": "long_term_debt",
            "label_original_md": "Long-term debt (included \\$134,559 and \\$100,780 at fair value)",
            "label_zh_md": "长期债务〔其中按公允价值计量134,559／100,780〕",
            "amounts": {
              "2025-12-31": 435206,
              "2024-12-31": 401418
            },
            "original_display": {
              "2025-12-31": "435,206",
              "2024-12-31": "401,418"
            }
          },
          {
            "id": "total_liabilities",
            "label_original_md": "**Total liabilities(a)**",
            "label_zh_md": "**负债合计〔附注(a)〕**",
            "amounts": {
              "2025-12-31": 4062462,
              "2024-12-31": 3658056
            },
            "original_display": {
              "2025-12-31": "**4,062,462**",
              "2024-12-31": "**3,658,056**"
            }
          },
          {
            "id": "commitments_contingencies",
            "label_original_md": "Commitments and contingencies (refer to Notes 28, 29 and 30)",
            "label_zh_md": "承诺及或有事项〔参见Notes 28、29、30；原表无金额〕",
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
            "id": "equity",
            "label_original_md": "**Stockholders’ equity**",
            "label_zh_md": "**股东权益**",
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
            "id": "preferred_stock",
            "label_original_md": "Preferred stock (\\$1 par value; authorized 200,000,000 shares: issued 2,005,375 and 2,005,375 shares)",
            "label_zh_md": "优先股：面值每股1美元；授权200,000,000股；两期已发行均为2,005,375股",
            "amounts": {
              "2025-12-31": 20045,
              "2024-12-31": 20050
            },
            "original_display": {
              "2025-12-31": "20,045",
              "2024-12-31": "20,050"
            }
          },
          {
            "id": "common_stock",
            "label_original_md": "Common stock (\\$1 par value; authorized 9,000,000,000 shares; issued 4,104,933,895 shares)",
            "label_zh_md": "普通股：面值每股1美元；授权9,000,000,000股；已发行4,104,933,895股",
            "amounts": {
              "2025-12-31": 4105,
              "2024-12-31": 4105
            },
            "original_display": {
              "2025-12-31": "4,105",
              "2024-12-31": "4,105"
            }
          },
          {
            "id": "additional_paid_in_capital",
            "label_original_md": "Additional paid-in capital",
            "label_zh_md": "额外实缴资本",
            "amounts": {
              "2025-12-31": 91114,
              "2024-12-31": 90911
            },
            "original_display": {
              "2025-12-31": "91,114",
              "2024-12-31": "90,911"
            }
          },
          {
            "id": "retained_earnings",
            "label_original_md": "Retained earnings",
            "label_zh_md": "留存收益",
            "amounts": {
              "2025-12-31": 416055,
              "2024-12-31": 376166
            },
            "original_display": {
              "2025-12-31": "416,055",
              "2024-12-31": "376,166"
            }
          },
          {
            "id": "aocl",
            "label_original_md": "Accumulated other comprehensive losses",
            "label_zh_md": "累计其他综合损失",
            "amounts": {
              "2025-12-31": -4290,
              "2024-12-31": -12456
            },
            "original_display": {
              "2025-12-31": "(4,290)",
              "2024-12-31": "(12,456)"
            }
          },
          {
            "id": "treasury_stock",
            "label_original_md": "Treasury stock, at cost (1,408,661,319 and 1,307,313,494 shares)",
            "label_zh_md": "库存股，按成本〔股数1,408,661,319／1,307,313,494〕",
            "amounts": {
              "2025-12-31": -164591,
              "2024-12-31": -134018
            },
            "original_display": {
              "2025-12-31": "(164,591)",
              "2024-12-31": "(134,018)"
            }
          },
          {
            "id": "total_equity",
            "label_original_md": "**Total stockholders’ equity**",
            "label_zh_md": "**股东权益合计**",
            "amounts": {
              "2025-12-31": 362438,
              "2024-12-31": 344758
            },
            "original_display": {
              "2025-12-31": "**362,438**",
              "2024-12-31": "**344,758**"
            }
          },
          {
            "id": "total_liabilities_equity",
            "label_original_md": "**Total liabilities and stockholders’ equity**",
            "label_zh_md": "**负债及股东权益合计**",
            "amounts": {
              "2025-12-31": 4424900,
              "2024-12-31": 4002814
            },
            "original_display": {
              "2025-12-31": "**4,424,900**",
              "2024-12-31": "**4,002,814**"
            }
          }
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
        ],
        "supplemental": {
          "loan_categories_2025": {
            "retained": 1408905,
            "held_for_sale": 13840,
            "fair_value": 70684,
            "gross_total": 1493429,
            "allowance": -25765
          },
          "loan_categories_2024": {
            "retained": 1299590,
            "held_for_sale": 7048,
            "fair_value": 41350,
            "gross_total": 1347988,
            "allowance": -24345
          },
          "deposits_2025": {
            "us_noninterest": 583342,
            "non_us_noninterest": 37057,
            "total_deposits": 2559320
          },
          "deposits_2024": {
            "us_noninterest": 592500,
            "non_us_noninterest": 26806,
            "total_deposits": 2406032
          },
          "securities_2025": {
            "afs_carrying_fair_value": 507198,
            "htm_carrying_amortized_cost": 270134,
            "main_table_total": 777332,
            "afs_to_htm_transfer_billion": 44.1
          },
          "common_equity_2025": {
            "total_stockholders_equity": 362438,
            "preferred_stock": 20045,
            "issued_common_shares": 4104933895,
            "treasury_shares": 1408661319
          },
          "derivative_receivables_2025": {
            "gross_recognized": 606382,
            "balance_sheet_netting": 548605,
            "balance_sheet_net": 57777,
            "collateral_not_balance_sheet_netted": 28891,
            "note_net_amount": 28886
          },
          "cashflow_2025": {
            "beginning": 469317,
            "cfo": -147782,
            "cfi": -265565,
            "cff": 269533,
            "fx": 17835,
            "ending": 343338
          }
        }
      }
    },
    "experiments": [],
    "specification_markdown": "## 交互、计算和静态等价\n\n`BF03-PERIOD-UNIT` 的默认状态为Costco FY2024对FY2023，显示上面的两期原始销售、52/53周、5.0124%原始增长和约7.03%按周增长. 切换“原始／每周平均”只新增一列派生值，不覆盖原始数据，也不把图题改成同店增长. 静态表与§2算式提供完整默认结果.\n\n单位切换保留基础存储单位USD_millions；显示为billion时全部金额除以1000，回切时乘以1000. 股数shares及每股USD_per_share不参与同一金额转换. 以44,100million／44.1billion作为固定核对项. 余额行不提供“除以周数”按钮；若通过接口调用该操作，返回“该操作仅用于所选期间流量”，不得静默计算.\n\n累计／单季演示仅使用上面的**教学数据**，默认100、230、导出单季130. 输入必须是相同项目、币种、范围和兼容版本的累计值；财报自身未提供的数据不插值伪造. 允许收入调整为负的实际情况，所以不把所有负结果一律判错；应检查输入与披露，而非以数值正负替代业务解释.\n\n每次调整显示 `原值—单位/期间—公式—结果—剩余不可比因素`. 键盘、窄屏及打印保留全部五项，图不是唯一入口. 这里给出静态等价和交互规格；网页实现另行完成.",
    "outputs_origin": "原稿静态表、公式和配套规格；本导入仅提取"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
财务数字的比较依赖项目、范围、期间和计量口径. 同为美元金额，期末余额与全年流量、集团合并值与子公司值分别对应不同对象.

<span id="bf03-observation-scope"></span>

## 1　随数字保存的最小口径

**一个用于比较的财务观测，至少要连同对象与合并范围、项目定义、币种与金额单位、时点或期间、计量及列报口径、原始出处一起保存.** 这是本笔记用于保持比较口径的数据约定；时点与期间的基本区别见 [BF-02](/zh/notebook/financial-report-map/). [OPENSTAX-21]

| 字段 | 本例应保存什么 | 最容易发生的错位 |
|---|---|---|
| 对象／范围 | Costco及其全资子公司的合并报表；或JPMorgan Chase & Co.集团合并表 | 把集团与银行子公司、报告分部混在一起 |
| 时间 | `as_of=2025-08-31`，或截至该日52周 | 把期末余额当作全年发生额 |
| 单位 | USD，金额以 M 计；股数另用shares | 只改“ M ／ B ”标签，不改数值 |
| 定义／计量 | 原行名称、净额所扣项目、相关政策 | “贷款”与“扣准备后的贷款”互相替代 |
| 比较版本 | 使用2025年报中列示的2024比较数 | 把旧版与本期重分类后的比较列拼接 |
| 来源与可得时间 | 文档、原表行、页码及该版本何时可取得 | 把财年末当成年报发布日或研究读取日 |

前两家公司的合并范围分别由Costco Note 1和JPM集团报告限定. Costco还明确说明将2024资产负债表作了重分类以配合本期列报. 因此，本批两期表采用同一份2025报告中的比较列. [COST-POLICY]、[JPM-BS]

<span id="bf03-reporting-periods"></span>

## 2　52/53周期间的可比调整

Costco FY2025、FY2024各52周，FY2023为53周，年末是最接近8月31日的星期日. 它的前三季度各12周，第四季度通常16周，53周财年则为17周；不能把年报机械平均成四个等长季度. [COST-CALENDAR]

下表保留原始数字，全部来自**同一份2025年报的合并利润表**，单位 M 美元. [COST-IS]

| 财年 | 期间截至日 | 周数 | Net sales／净销售额 |
|---|---|---:|---:|
| FY2023 | 2023-09-03 | 53 | 237,710 |
| FY2024 | 2024-09-01 | 52 | 249,625 |
| FY2025 | 2025-08-31 | 52 | 269,912 |

2024相对2023的净销售额增长为 `249625 / 237710 − 1 ≈ 5.012%`. 两年的每周平均净销售额分别为 `249625 / 52 ≈ 4800.481`、`237710 / 53 ≈ 4485.094`，因此每周平均增长为 `((249625 / 52) / (237710 / 53) − 1) ≈ 7.032%`. [COST-IS]（本文计算）

每周平均增长只调整了52/53周的长度差异. 季节性、开店、关闭、商品组合和汇率仍可能影响结果；同店增长另需按公司定义选取可比门店.

2024-09-01的存货18,647与2025-08-31的存货18,116均为时点余额，应直接保留对应时点. 周转分析则需将期间成本与适当的平均存货匹配，见BF-16. [COST-BS]

<span id="bf03-units-and-shares"></span>

## 3　单位换算与每股分母

JPM证券附注中的44.1 B美元等于主表单位下的44,100 M美元. 该金额是证券由AFS转入HTM的类别转移，现金流仍需按证券实际买卖另行识别. [JPM-SEC]

JPM 2025年末普通股权益为342,393 M美元，期末普通股流通股数为2,696,272,576股，每股账面值为 `342393 × 1000000 / 2696272576 ≈ 126.988` 美元/股. 分子先换成美元，分母采用期末股数；期间每股收益则使用相应的期间加权平均股数. [JPM-BS]（本文计算）

现金范围按各公司附注界定. Costco的现金及现金等价物包含一定结算期内的卡交易待收款；JPM现金流末端对应现金及应收银行款、存放银行款两行. 比较时需保留这些范围差异. [COST-CASH]、[JPM-CF]

<span id="bf03-exercises"></span>

## 4　比较表修正练习

**解释题.** 一张表写道：“Costco 2024销售真实增长7.03%，因此2024期末存货也应先除以52再和2023比. ”请保留有用的计算，改写错误的结论.

**解析.** 保留“2024相对2023的每周平均净销售额增长约7.03%”，并同时列出原始净销售增长约5.01%. 删除“真实增长”，因为周数调整未控制其他因素；删除对期末存货的周数标准化，因为余额不是在52周内累计产生的销售流量. 要比较库存，保留相应时点、计量和范围，并另行查找周转需要的分母. [COST-IS]、[COST-CALENDAR]、[COST-BS]

**迁移题.** 教学设定：一家公司的第一季度收入100，上半年累计收入230，币种和合并范围相同，且无重述. 有人说第二季度收入230、比一季度增长130%. 应怎样修正？若上半年发生了合并范围变化，答案又应如何限定？

**解析.** 在题设可比条件下，第二季度单季收入为 `230 - 100 = 130`，相对第一季度增长 `130 / 100 - 1 = 30%`. 230是上半年累计，不是第二季度单季. 若范围变化，上半年累计减一季度累计仍可能得到报告口径的第二季度流量，但30%不能直接解释为同范围经营增长；必须说明新增合并业务的影响，无法拆分就标记不可比部分.

报告期末是报表描述的业务时点，信息截止日限定可以使用的已发布材料. 还原过去交易日的判断时，采用当时已发布的版本.

<span id="bf03-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [OPENSTAX-21] | BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系 |
| [COST-POLICY] | BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列 |
| [COST-CALENDAR] | BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日 |
| [COST-IS] | BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales， M 美元 |
| [COST-BS] | BI-S05；合并资产负债表p.39；两期商品存货为时点余额 |
| [COST-CASH] | BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数 |
| [JPM-SEC] | BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228 |
| [JPM-CF] | BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成 |

[OPENSTAX-21]: https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate "BI-S01；OpenStax，2019，§2.1；时点报表和期间报表及其联系"
[COST-POLICY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K Note 1 p.42，Basis of Presentation、Fiscal Year、Reclassification；采用同一报告的2024比较列"
[COST-CALENDAR]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Item 1 p.3，52/53周、十三个四周期间及季度构成；Note 1 p.42财年截止日"
[COST-IS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并利润表p.37；FY2025、FY2024、FY2023 Net sales， M 美元"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并资产负债表p.39；两期商品存货为时点余额"
[COST-CASH]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Cash and Cash Equivalents，p.42；结算范围"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；集团表、优先股、普通股和库存股股数"
[JPM-SEC]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=260 "BI-S07；Note 10 Investment securities，印刷pp.228–229；44.1billion类别转移在p.228"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；完整现金流量表p.169／物理p.201；现金与存放银行款的期末构成"

## Additional teaching material
## 期间与单位实验

Costco FY2024／FY2023：净销售额249,625／237,710 M美元，52／53周. 原始增长约5.012%，每周平均增长约7.032%；周数调整保留季节性、门店和产品组合等差异.

44.1 B美元=44,100 M美元. 股数与每股金额分别按自己的单位计算. 期间流量可按期间长度比较，期末余额保留对应时点.

教学累计收入：第一季度100，上半年230；同项目、币种、范围和兼容版本下，第二季度单季为130. 收入调整可以导致负数，解释应回到具体披露与范围.

## Sources
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 2025财年末合并资产77,099M美元、负债47,935M美元、权益29,164M美元. 业务说明、收入政策及附注解释商品周转、供应商付款、会员费确认和递延余额. 现金流量表与两期资产负债表共同呈现存货、应付及现金变化；年报另列续费率定义、普通股和债务信息.
- [JPMorgan Chase & Co. · 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPMorgan 2025年末集团合并表按银行业务项目列示资产和负债；证券与贷款采用各自计量类别，贷款损失准备抵减贷款余额，披露的合并VIE金额已包含于集团总额. 普通股权益由总权益扣除优先股所得，每股账面值使用已发行股数减库存股. 流动性披露分别给出季度平均LCR、期末资产及附条件融资能力，并区分集团与银行法人.
- [OpenStax · Principles of Accounting, Volume 1 · §2.1](https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate): 利润表解释一个期间的收入、费用和净收益；权益变动表把期间结果和所有者交易接回权益；资产负债表给出期末余额；现金流量表解释现金在期间怎样变化. 四张表的连接需要使用相同企业范围和相匹配的期间.

## Content relations
```json
[
  {
    "from": "zh-bf03",
    "relation": "part_of",
    "to": "business-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf03",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "期间、合并、重分类和金额取自原件.",
    "scope": "Costco Item 1 p.3；主表pp.37,39；Note 1 p.42"
  },
  {
    "from": "zh-bf03",
    "relation": "supported_by",
    "to": "BF-S-JPM-FY2025",
    "reason": "证券转移和普通股每股计算的原始输入.",
    "scope": "JPM pp.167,228；单位与股份括注"
  },
  {
    "from": "zh-bf03",
    "relation": "uses_method",
    "to": "zh-bf02",
    "reason": "通过表头和附注取得口径；可就地调用，不形成互相硬先修."
  },
  {
    "from": "zh-bf03",
    "relation": "informs",
    "to": "zh-balance-sheet",
    "reason": "为余额、附注与现金流比较提供具名口径，避免混用."
  }
]
```

## Related entries
