# 财务报告的组成与阅读地图

在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处.

Entry: zh-bf02 | Node: BF-02 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
面向具有微积分、线性代数、基本概率与证明阅读能力的高年级本科生至研究生，材料版本2026-09-22-deep-review. 围绕BF-02“财务报告的组成与阅读地图”（2026-09-22-deep-review）开展定位教学. 先确认读者当前需要定位的数字或事项；若未指定，用Costco现金14,161.

在实质讲解前实际读取以下可读单元. 运行时读取日志初始为空；记录标题、版本、实际取得范围和当前用途，来源清单本身不算读取：
1. OpenStax，Principles of Accounting Vol.1，2019，§2.1全文：
https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate
目的：报表各自记录什么，以及时点与期间的联系.
2. SEC，Beginners’ Guide to Financial Statements，公开正文：
https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements
目的：报表、附注和MD&A的不同用途. 旧指南用来解释稳定结构，不当作全部现行规则.
3. Costco FY2025 SEC 10-K：
https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm
读取Item 8目录p.33，财报审计意见和Basis for Opinion p.34，pp.37–41各表表头；完整p.39和p.41；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 使用存货练习时再读Note 1 Merchandise Inventories完整小节p.44. 不要把目录读取说成整份年报已读.
4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注：
https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf
PDF表格看原页. 该分支没选时不强求银行全文.

正文未取得时，尝试同机构可读原件；只有等价页码、期间和内容核对后才替换. 仍缺则准确说明缺少的单元，不从搜索摘要补作已核内容.

先给读者一个定位任务，而不是考四则运算：现金14,161是本年利润、期间现金流还是期末余额？让读者说出需要的表头. 接着按“主表→现金流→定义”展示三处材料，复算9906+13335-5311-3775+6=14161. 解释来源不同于用途：这个桥不把现金增加都称为盈利.

最后让读者区分18,116和559，或者把页码方法迁移到JPM. 答案必须同时有文档、行名、单位、时点/期间和支持范围；只有找到相同词语不算通过. 已掌握的导航不重复讲，当前疑点解决即返回BF-05相应段落.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-bf02",
  "node_id": "BF-02",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "具有足够数学背景的高年级本科至研究生",
  "body_source": "body_markdown",
  "learning_task": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处.",
  "prompt": "面向具有微积分、线性代数、基本概率与证明阅读能力的高年级本科生至研究生，材料版本2026-09-22-deep-review. 围绕BF-02“财务报告的组成与阅读地图”（2026-09-22-deep-review）开展定位教学. 先确认读者当前需要定位的数字或事项；若未指定，用Costco现金14,161.\n\n在实质讲解前实际读取以下可读单元. 运行时读取日志初始为空；记录标题、版本、实际取得范围和当前用途，来源清单本身不算读取：\n1. OpenStax，Principles of Accounting Vol.1，2019，§2.1全文：\nhttps://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate\n目的：报表各自记录什么，以及时点与期间的联系.\n2. SEC，Beginners’ Guide to Financial Statements，公开正文：\nhttps://www.sec.gov/about/reports-publications/beginners-guide-financial-statements\n目的：报表、附注和MD&A的不同用途. 旧指南用来解释稳定结构，不当作全部现行规则.\n3. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\n读取Item 8目录p.33，财报审计意见和Basis for Opinion p.34，pp.37–41各表表头；完整p.39和p.41；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 使用存货练习时再读Note 1 Merchandise Inventories完整小节p.44. 不要把目录读取说成整份年报已读.\n4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\nPDF表格看原页. 该分支没选时不强求银行全文.\n\n正文未取得时，尝试同机构可读原件；只有等价页码、期间和内容核对后才替换. 仍缺则准确说明缺少的单元，不从搜索摘要补作已核内容.\n\n先给读者一个定位任务，而不是考四则运算：现金14,161是本年利润、期间现金流还是期末余额？让读者说出需要的表头. 接着按“主表→现金流→定义”展示三处材料，复算9906+13335-5311-3775+6=14161. 解释来源不同于用途：这个桥不把现金增加都称为盈利.\n\n最后让读者区分18,116和559，或者把页码方法迁移到JPM. 答案必须同时有文档、行名、单位、时点/期间和支持范围；只有找到相同词语不算通过. 已掌握的导航不重复讲，当前疑点解决即返回BF-05相应段落.",
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
        "locator": "1. OpenStax，Principles of Accounting Vol.1，2019，§2.1全文：\n目的：报表各自记录什么，以及时点与期间的联系.",
        "scope": "1. OpenStax，Principles of Accounting Vol.1，2019，§2.1全文：\nhttps://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate\n目的：报表各自记录什么，以及时点与期间的联系.",
        "purpose": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处."
      },
      "supports": "1. OpenStax，Principles of Accounting Vol.1，2019，§2.1全文：\n目的：报表各自记录什么，以及时点与期间的联系.",
      "fallback_source_ids": []
    },
    {
      "source_id": "BF-S-SEC-GUIDE",
      "title": "SEC · Beginners’ Guide to Financial Statements",
      "authors": [
        "U.S. Securities and Exchange Commission"
      ],
      "version": "原稿登记：2014发布、2017复核；采用结构导航单元",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2. SEC，Beginners’ Guide to Financial Statements，公开正文：\n目的：报表、附注和MD&A的不同用途. 旧指南用来解释稳定结构，不当作全部现行规则.",
        "scope": "2. SEC，Beginners’ Guide to Financial Statements，公开正文：\nhttps://www.sec.gov/about/reports-publications/beginners-guide-financial-statements\n目的：报表、附注和MD&A的不同用途. 旧指南用来解释稳定结构，不当作全部现行规则.",
        "purpose": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处."
      },
      "supports": "2. SEC，Beginners’ Guide to Financial Statements，公开正文：\n目的：报表、附注和MD&A的不同用途. 旧指南用来解释稳定结构，不当作全部现行规则.",
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
        "locator": "3. Costco FY2025 SEC 10-K：\n读取Item 8目录p.33，财报审计意见和Basis for Opinion p.34，pp.37–41各表表头；完整p.39和p.41；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 使用存货练习时再读Note 1 Merchandise Inventories完整小节p.44. 不要把目录读取说成整份年报已读.",
        "scope": "3. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\n读取Item 8目录p.33，财报审计意见和Basis for Opinion p.34，pp.37–41各表表头；完整p.39和p.41；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 使用存货练习时再读Note 1 Merchandise Inventories完整小节p.44. 不要把目录读取说成整份年报已读.",
        "purpose": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处."
      },
      "supports": "3. Costco FY2025 SEC 10-K：\n读取Item 8目录p.33，财报审计意见和Basis for Opinion p.34，pp.37–41各表表头；完整p.39和p.41；Note 1 p.42的Basis of Presentation、Fiscal Year、Reclassification、Cash and Cash Equivalents完整小节. 使用存货练习时再读Note 1 Merchandise Inventories完整小节p.44. 不要把目录读取说成整份年报已读.",
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
        "locator": "4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注：\nPDF表格看原页. 该分支没选时不强求银行全文.",
        "scope": "4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\nPDF表格看原页. 该分支没选时不强求银行全文.",
        "purpose": "在一份真实年报中找到报表、附注、管理层解释和审计意见，并为一个数字补齐可核对的出处."
      },
      "supports": "4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注：\nPDF表格看原页. 该分支没选时不强求银行全文.",
      "fallback_source_ids": [],
      "required_when_selected": true,
      "selected_scope": "4. 采用银行迁移题时，读取JPMorgan 2025 Annual Report的完整资产负债表p.167/物理p.199、现金流p.169/物理p.201及表注："
    }
  ],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "source_version": "2026-09-21.BF-A.rev-1",
    "tables": [
      {
        "heading": "1　主表各自回答什么",
        "headers": [
          "原件位置",
          "看什么",
          "能回答的具体问题"
        ],
        "rows": [
          [
            "Item 1，Business，p.3起",
            "企业、产品、服务、交易过程",
            "某个收入或资产来自什么活动？"
          ],
          [
            "Item 1A，Risk Factors",
            "具名风险披露",
            "哪些条件可能影响经营？不能由风险清单推成发生概率"
          ],
          [
            "Item 7，MD&A，p.23起",
            "管理层对结果、财务状况与资金的讨论",
            "管理层怎样解释变化？这些解释对应哪些可核数字？"
          ],
          [
            "Item 8，目录p.33；审计报告pp.34–36",
            "报表审计、关键审计事项及内控审计意见",
            "审计对象、期间、适用框架和意见是什么？"
          ],
          [
            "Consolidated Statements of Income，p.37",
            "合并利润表",
            "本期收入和利润怎样形成？"
          ],
          [
            "Consolidated Statements of Comprehensive Income，p.38",
            "合并综合收益表",
            "净利润以外还有哪些综合收益变化？"
          ],
          [
            "Consolidated Balance Sheets，p.39",
            "合并资产负债表",
            "两个期末的资源、义务和权益怎样分布？"
          ],
          [
            "Consolidated Statements of Equity，p.40",
            "合并权益变动表",
            "利润、分配、出资和其他事项怎样改变权益？"
          ],
          [
            "Consolidated Statements of Cash Flows，p.41",
            "合并现金流量表",
            "本期实际资金来源与使用如何连接期初、期末？"
          ],
          [
            "Notes，p.42起",
            "政策、明细、估计、期限和承诺",
            "主表这一行具体包括什么、怎样计量？"
          ]
        ],
        "markdown": "| 原件位置 | 看什么 | 能回答的具体问题 |\n|---|---|---|\n| Item 1，Business，p.3起 | 企业、产品、服务、交易过程 | 某个收入或资产来自什么活动？ |\n| Item 1A，Risk Factors | 具名风险披露 | 哪些条件可能影响经营？不能由风险清单推成发生概率 |\n| Item 7，MD&A，p.23起 | 管理层对结果、财务状况与资金的讨论 | 管理层怎样解释变化？这些解释对应哪些可核数字？ |\n| Item 8，目录p.33；审计报告pp.34–36 | 报表审计、关键审计事项及内控审计意见 | 审计对象、期间、适用框架和意见是什么？ |\n| Consolidated Statements of Income，p.37 | 合并利润表 | 本期收入和利润怎样形成？ |\n| Consolidated Statements of Comprehensive Income，p.38 | 合并综合收益表 | 净利润以外还有哪些综合收益变化？ |\n| Consolidated Balance Sheets，p.39 | 合并资产负债表 | 两个期末的资源、义务和权益怎样分布？ |\n| Consolidated Statements of Equity，p.40 | 合并权益变动表 | 利润、分配、出资和其他事项怎样改变权益？ |\n| Consolidated Statements of Cash Flows，p.41 | 合并现金流量表 | 本期实际资金来源与使用如何连接期初、期末？ |\n| Notes，p.42起 | 政策、明细、估计、期限和承诺 | 主表这一行具体包括什么、怎样计量？ |"
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
    "specification_markdown": "## 阅读器交互与静态等价\n\n此页不是依赖点击才能理解的流程. 上面的导航表、现金例子和题目解析，就是默认静态内容. 网页可在此基础上增加 `BF02-REPORT-MAP`：点击“时点状态／期间结果／现金变化／口径与估计”后，滚动到相应原表入口；选择现金14,161时，并排打开三个定位卡. 卡片应明确区分原始金额、原文定位和教学解释，不以生成的解释代替原件.\n\n**固定输入与输出：** 文档为Costco FY2025 SEC HTML；默认字段为 `cash`，原行定位p.39、数值14161、单位USD_millions、时点2025-08-31. 现金桥输入为 `[9906,13335,-5311,-3775,6]`，输出14161、差额0；政策卡为Note 1 p.42. 切换JPM时，必须同时改为本公司的两行现金构成、p.167/p.169及其时间，不能保留Costco定义只换标题.\n\n查找无匹配时显示“尚未定位”，不生成原文. 所有入口支持键盘和返回原段落；窄屏按“主表—变化—定义”顺序排列；打印保留上述全部位置与公式. 这里给出静态内容和交互规格；网页实现另行完成.",
    "outputs_origin": "原稿静态表、公式和配套规格；本导入仅提取"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
年报中的业务说明、财务报表、附注和管理层讨论分别提供经营对象、记录结果、计量明细和变化解释. 定位一个数字时，需同时确定它描述的对象与时间.

<span id="bf02-statement-map"></span>

## 1　主表的时间对象与信息职责

**资产负债表记录某一时点已确认的资产、负债与权益；利润表记录一段期间的收入、费用与利润；现金流量表记录一段期间现金的来源与使用；权益变动表把期初权益连接到期末权益. 综合收益还包括按相应会计处理未进入当期净利润的其他综合收益项目.** 相关信息可按适用要求合并或分表呈现. [OPENSTAX-21]、[SEC-GUIDE]

利润影响权益，出资、分配和其他综合收益也会改变权益；现金流量表解释利润与现金在时间和范围上的差异，其期末金额再与资产负债表及现金定义核对. 联动机制见BF-04、BF-07、BF-08. [OPENSTAX-21]

下面使用 **Costco FY2025 SEC HTML 10-K 的印刷页码**. 同一公司另一个排版版本可能有不同页码，文档名称和表名都属于定位的一部分. [COST-MAP]

| 原件位置 | 看什么 | 能回答的具体问题 |
|---|---|---|
| Item 1，Business，p.3起 | 企业、产品、服务、交易过程 | 某个收入或资产来自什么活动？ |
| Item 1A，Risk Factors | 具名风险披露 | 哪些条件可能影响经营？不能由风险清单推成发生概率 |
| Item 7，MD&A，p.23起 | 管理层对结果、财务状况与资金的讨论 | 管理层怎样解释变化？这些解释对应哪些可核数字？ |
| Item 8，目录p.33；审计报告pp.34–36 | 报表审计、关键审计事项及内控审计意见 | 审计对象、期间、适用框架和意见是什么？ |
| Consolidated Statements of Income，p.37 | 合并利润表 | 本期收入和利润怎样形成？ |
| Consolidated Statements of Comprehensive Income，p.38 | 合并综合收益表 | 净利润以外还有哪些综合收益变化？ |
| Consolidated Balance Sheets，p.39 | 合并资产负债表 | 两个期末的资源、义务和权益怎样分布？ |
| Consolidated Statements of Equity，p.40 | 合并权益变动表 | 利润、分配、出资和其他事项怎样改变权益？ |
| Consolidated Statements of Cash Flows，p.41 | 合并现金流量表 | 本期实际资金来源与使用如何连接期初、期末？ |
| Notes，p.42起 | 政策、明细、估计、期限和承诺 | 主表这一行具体包括什么、怎样计量？ |

附注是解释主表金额所必需的材料. MD&A则保留管理层自己的解释身份，不能代替原表. Costco的审计报告对合并财报发表意见，其合理保证针对财务报表是否存在重大错报.[COST-AUDIT]

<span id="bf02-cash-bridge"></span>

## 2　现金余额的跨表核对

以 Costco 2025-08-31 资产负债表的 **Cash and cash equivalents，14,161** 为例，把主表、现金流量表和现金定义三处材料接起来. [COST-BS]

第一处是 **p.39 主表**：这是某日余额，单位为 M 美元，范围为集团合并报表. 第二处是 **p.41 现金流量表**：期初现金9,906，本期经营、投资、筹资和汇率影响依次为13,335、−5,311、−3,775、6，于是 `9906 + 13335 - 5311 - 3775 + 6 = 14161`.  [COST-CF]

第三处是 **Note 1，p.42，Cash and Cash Equivalents**. 公司定义还包含结算期不超过四天的信用卡和借记卡交易待收款，因此现金及现金等价物余额可以包括尚未到账的卡交易款项. [COST-CASH]

报表行确定对象，现金流量表解释期间变化，附注界定范围；变化的经营原因需结合管理层讨论和业务材料取证.

JPMorgan 2025年报的资产负债表在印刷p.167／PDF物理p.199，现金流量表在印刷p.169／物理p.201. 现金流末端343,338由资产端的现金及应收银行款21,742与存放银行款321,596构成. 负债端的客户存款属于银行对客户的义务. [JPM-BS]、[JPM-CF]

<span id="bf02-exercises"></span>

## 3　定位与口径练习

**定位题.** 同一份 Costco 年报里，`Merchandise inventories` 有18,116和559两个数. 请分别写出表名、时间性质、单位和用途，并判断能否将559加到18,116上当作“更完整的期末存货”.

**解析.** 18,116在p.39资产负债表，是2025-08-31的存货余额；559在p.41现金流量表的经营活动调整中，属于截至该日52周的期间调整. 两者单位同为 M 美元，时间和含义却不同，不能相加成新的期末余额. 若要了解存货计量，应去Note 1的 `Merchandise Inventories` 小节. [COST-BS]、[COST-CF]、[COST-INVENTORY]

**迁移题.** 有人拿 JPM 的PDF物理第167页，找不到预期的资产负债表，就改从搜索摘要抄一个总资产数. 应该怎样修正这一步？

**解析.** 先区分印刷页与PDF物理页：本例的印刷p.167对应物理p.199. 到该页核对公司集团名称、表名、两个时点和 M 美元单位，再读取行与脚注. 银行与零售的完整原表及带读都见 [BF-05](/zh/notebook/balance-sheet/). [JPM-BS]

<span id="bf02-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [OPENSTAX-21] | BI-S01；OpenStax Principles of Accounting Vol.1，2019，§2.1完整单元；四张报表及其联系 |
| [SEC-GUIDE] | BF-S-SEC-GUIDE；SEC公开指南，2014发布、2017复核；Financial Statements、Footnotes、MD&A等相关单元 |
| [COST-MAP] | BI-S05；Costco FY2025 SEC 10-K，总目录及Item 8目录p.33；Business p.3起、MD&A p.23起 |
| [COST-AUDIT] | BI-S05；Reports of Independent Registered Public Accounting Firm pp.34–36；财报Opinion与Basis p.34，内控Opinion p.36 |
| [COST-BS] | BI-S05；完整合并资产负债表印刷p.39； M 美元，2025-08-31及2024-09-01 |
| [COST-CF] | BI-S05；完整合并现金流量表印刷p.41；现金总桥及Merchandise inventories调整行 |
| [COST-CASH] | BI-S05；Note 1 Cash and Cash Equivalents，印刷p.42；包括结算期不超过4天的卡交易待收款 |
| [COST-INVENTORY] | BI-S05；Note 1 Merchandise Inventories，印刷p.44；存货计量、损失及供应商折扣相关政策 |
| [JPM-BS] | BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整合并资产负债表及脚注 |
| [JPM-CF] | BI-S07；JPMorgan 2025 Annual Report，印刷p.169／物理p.201；期末现金343,338的两行构成 |

[OPENSTAX-21]: https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate "BI-S01；OpenStax Principles of Accounting Vol.1，2019，§2.1完整单元；四张报表及其联系"
[SEC-GUIDE]: https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements "BF-S-SEC-GUIDE；SEC公开指南，2014发布、2017复核；Financial Statements、Footnotes、MD&A等相关单元"
[COST-MAP]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 SEC 10-K，总目录及Item 8目录p.33；Business p.3起、MD&A p.23起"
[COST-AUDIT]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Reports of Independent Registered Public Accounting Firm pp.34–36；财报Opinion与Basis p.34，内控Opinion p.36"
[COST-BS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并资产负债表印刷p.39； M 美元，2025-08-31及2024-09-01"
[COST-CF]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；完整合并现金流量表印刷p.41；现金总桥及Merchandise inventories调整行"
[COST-CASH]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Cash and Cash Equivalents，印刷p.42；包括结算期不超过4天的卡交易待收款"
[COST-INVENTORY]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Merchandise Inventories，印刷p.44；存货计量、损失及供应商折扣相关政策"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；JPMorgan 2025 Annual Report，印刷p.167／物理p.199；完整合并资产负债表及脚注"
[JPM-CF]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=201 "BI-S07；JPMorgan 2025 Annual Report，印刷p.169／物理p.201；期末现金343,338的两行构成"

## Additional teaching material
## 定位与现金核对

Costco FY2025 SEC HTML：现金及现金等价物14,161 M美元，时点2025-08-31，主表p.39，现金流p.41，Note 1现金定义p.42. 现金桥为9,906+13,335−5,311−3,775+6=14,161.

JPMorgan 2025 Annual Report：主表印刷p.167，现金流p.169；期末现金集合为21,742+321,596=343,338 M美元，时点2025-12-31. 两家公司的现金定义分别按各自原件读取.

## Sources
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 2025财年末合并资产77,099M美元、负债47,935M美元、权益29,164M美元. 业务说明、收入政策及附注解释商品周转、供应商付款、会员费确认和递延余额. 现金流量表与两期资产负债表共同呈现存货、应付及现金变化；年报另列续费率定义、普通股和债务信息.
- [JPMorgan Chase & Co. · 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPMorgan 2025年末集团合并表按银行业务项目列示资产和负债；证券与贷款采用各自计量类别，贷款损失准备抵减贷款余额，披露的合并VIE金额已包含于集团总额. 普通股权益由总权益扣除优先股所得，每股账面值使用已发行股数减库存股. 流动性披露分别给出季度平均LCR、期末资产及附条件融资能力，并区分集团与银行法人.
- [OpenStax · Principles of Accounting, Volume 1 · §2.1](https://openstax.org/books/principles-financial-accounting/pages/2-1-describe-the-income-statement-statement-of-owners-equity-balance-sheet-and-statement-of-cash-flows-and-how-they-interrelate): 利润表解释一个期间的收入、费用和净收益；权益变动表把期间结果和所有者交易接回权益；资产负债表给出期末余额；现金流量表解释现金在期间怎样变化. 四张表的连接需要使用相同企业范围和相匹配的期间.
- [SEC · Beginners’ Guide to Financial Statements](https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements): 主表汇总数字，附注说明会计政策、组成和承诺，管理层讨论解释经营变化，审计意见报告审计结论. 财务数字的含义可由主表行、相关附注和管理层解释相互核对.

## Content relations
```json
[
  {
    "from": "zh-bf02",
    "relation": "part_of",
    "to": "business-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf02",
    "relation": "supported_by",
    "to": "BF-S-OPENSTAX-21",
    "reason": "四张报表承担不同的信息职责.",
    "scope": "OpenStax 2019 §2.1"
  },
  {
    "from": "zh-bf02",
    "relation": "supported_by",
    "to": "BF-S-SEC-GUIDE",
    "reason": "报表、附注与管理层讨论的阅读地图.",
    "scope": "SEC Beginners’ Guide to Financial Statements 正文"
  },
  {
    "from": "zh-bf02",
    "relation": "uses_method",
    "to": "zh-bf03",
    "reason": "定位结果需保留单位、期间及合并范围；可就地补充，不是硬先修."
  },
  {
    "from": "zh-bf02",
    "relation": "informs",
    "to": "zh-balance-sheet",
    "reason": "提供原表、附注及跨表核对的导航位置."
  }
]
```

## Related entries
