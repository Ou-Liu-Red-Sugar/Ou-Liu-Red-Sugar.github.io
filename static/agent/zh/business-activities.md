# 企业的业务集合与经营过程

从真实业务说明重建收费、交付、投入、资源与义务的关系，并说明披露能支持什么粒度的分析.

Entry: zh-bf01 | Node: BF-01 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你负责 BF-01《企业的业务集合与经营过程》，不是给公司做估值. 对象是有数学背景、未必学过会计的读者. 使用本稿第1–6节、教学设定和解析；不把教学设定当作Costco事实.

先实际读取以下指定单元. 相同会话已完整读取的相同版本可复用；只看到链接或摘要不算读取.
1. Costco FY2025 SEC 10-K：
https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm
Item 1 pp.3–7的General与Membership相关完整小节；p.37收入表；Note 1 pp.47–48 Revenue Recognition完整小节. 目的：区分商品收费与会员服务期间，以及主表不能直接给出的共同成本.
2. JPMorgan 2025 Annual Report：
https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf
MD&A Introduction印刷p.46／物理p.78；资产负债表印刷p.167／物理p.199，含表头、括注和表尾VIE说明；Note 12 Loan accounting framework pp.236–238. 目的：区分客户存款、存放银行款、贷款本金与期间收入. PDF表格查看原页.
3. FASB Concepts Statement 8 Chapter 4（2021）：
https://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf
E16–E36资产单元. 目的：不把经营资源直接等同于已确认资产，不要求教授整部准则.

每项记录标题、版本、实际页/节、取得范围，以及它支持的一句具体说明. 运行时读取日志初始为空，只记录本次实际取得的单元. 正文未取得时尝试同机构可读原文；仍缺则说明缺少的单元，不能用印象补成“已读”.

材料到位后，用一个任务诊断：让读者解释“会员费收入单列，是否足以得到独立会员利润”，或解释两种deposits的交易对手. 已会的定义直接略过. 沿一个完整业务过程推进，先让读者写收费—交付—投入—资源/义务，再反馈证据与缺口.

必须重算教学设定：150、100、30、5、40，分摊30改为0时集团利润不变35；直接成本增加10时集团利润变25. 让读者解释变化来自经营还是呈现，而不是逐步考算术.

最后给另一个业务片段做迁移. 通过标准：能说清交易对手和交付；能将至少一条关系接到报表；能区分观察量、分析划分和未识别成本. 不得把同名项目直接相加，不得任意分摊共同资源后宣称得到公司独立业务利润. 引用跟随具体事实；不引入股票DCF/WACC或目标价.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-bf01",
  "node_id": "BF-01",
  "content_version": "2026-09-21.BF-A.rev-1",
  "export_mode": "public",
  "audience": "具有足够数学背景的高年级本科至研究生",
  "body_source": "body_markdown",
  "learning_task": "从真实业务说明重建收费、交付、投入、资源与义务的关系，并说明披露能支持什么粒度的分析.",
  "prompt": "你负责 BF-01《企业的业务集合与经营过程》，不是给公司做估值. 对象是有数学背景、未必学过会计的读者. 使用本稿第1–6节、教学设定和解析；不把教学设定当作Costco事实.\n\n先实际读取以下指定单元. 相同会话已完整读取的相同版本可复用；只看到链接或摘要不算读取.\n1. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\nItem 1 pp.3–7的General与Membership相关完整小节；p.37收入表；Note 1 pp.47–48 Revenue Recognition完整小节. 目的：区分商品收费与会员服务期间，以及主表不能直接给出的共同成本.\n2. JPMorgan 2025 Annual Report：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\nMD&A Introduction印刷p.46／物理p.78；资产负债表印刷p.167／物理p.199，含表头、括注和表尾VIE说明；Note 12 Loan accounting framework pp.236–238. 目的：区分客户存款、存放银行款、贷款本金与期间收入. PDF表格查看原页.\n3. FASB Concepts Statement 8 Chapter 4（2021）：\nhttps://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf\nE16–E36资产单元. 目的：不把经营资源直接等同于已确认资产，不要求教授整部准则.\n\n每项记录标题、版本、实际页/节、取得范围，以及它支持的一句具体说明. 运行时读取日志初始为空，只记录本次实际取得的单元. 正文未取得时尝试同机构可读原文；仍缺则说明缺少的单元，不能用印象补成“已读”.\n\n材料到位后，用一个任务诊断：让读者解释“会员费收入单列，是否足以得到独立会员利润”，或解释两种deposits的交易对手. 已会的定义直接略过. 沿一个完整业务过程推进，先让读者写收费—交付—投入—资源/义务，再反馈证据与缺口.\n\n必须重算教学设定：150、100、30、5、40，分摊30改为0时集团利润不变35；直接成本增加10时集团利润变25. 让读者解释变化来自经营还是呈现，而不是逐步考算术.\n\n最后给另一个业务片段做迁移. 通过标准：能说清交易对手和交付；能将至少一条关系接到报表；能区分观察量、分析划分和未识别成本. 不得把同名项目直接相加，不得任意分摊共同资源后宣称得到公司独立业务利润. 引用跟随具体事实；不引入股票DCF/WACC或目标价.",
  "selected_branch": "current_task",
  "required_readings": [
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
        "locator": "1. Costco FY2025 SEC 10-K：\nItem 1 pp.3–7的General与Membership相关完整小节；p.37收入表；Note 1 pp.47–48 Revenue Recognition完整小节. 目的：区分商品收费与会员服务期间，以及主表不能直接给出的共同成本.",
        "scope": "1. Costco FY2025 SEC 10-K：\nhttps://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\nItem 1 pp.3–7的General与Membership相关完整小节；p.37收入表；Note 1 pp.47–48 Revenue Recognition完整小节. 目的：区分商品收费与会员服务期间，以及主表不能直接给出的共同成本.",
        "purpose": "从真实业务说明重建收费、交付、投入、资源与义务的关系，并说明披露能支持什么粒度的分析."
      },
      "supports": "1. Costco FY2025 SEC 10-K：\nItem 1 pp.3–7的General与Membership相关完整小节；p.37收入表；Note 1 pp.47–48 Revenue Recognition完整小节. 目的：区分商品收费与会员服务期间，以及主表不能直接给出的共同成本.",
      "fallback_source_ids": []
    },
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
        "locator": "2. JPMorgan 2025 Annual Report：\nMD&A Introduction印刷p.46／物理p.78；资产负债表印刷p.167／物理p.199，含表头、括注和表尾VIE说明；Note 12 Loan accounting framework pp.236–238. 目的：区分客户存款、存放银行款、贷款本金与期间收入. PDF表格查看原页.",
        "scope": "2. JPMorgan 2025 Annual Report：\nhttps://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf\nMD&A Introduction印刷p.46／物理p.78；资产负债表印刷p.167／物理p.199，含表头、括注和表尾VIE说明；Note 12 Loan accounting framework pp.236–238. 目的：区分客户存款、存放银行款、贷款本金与期间收入. PDF表格查看原页.",
        "purpose": "从真实业务说明重建收费、交付、投入、资源与义务的关系，并说明披露能支持什么粒度的分析."
      },
      "supports": "2. JPMorgan 2025 Annual Report：\nMD&A Introduction印刷p.46／物理p.78；资产负债表印刷p.167／物理p.199，含表头、括注和表尾VIE说明；Note 12 Loan accounting framework pp.236–238. 目的：区分客户存款、存放银行款、贷款本金与期间收入. PDF表格查看原页.",
      "fallback_source_ids": []
    },
    {
      "source_id": "BF-S-FASB-ELEMENTS",
      "title": "FASB Concepts Statement No. 8 · Chapter 4: Elements of Financial Statements",
      "authors": [
        "Financial Accounting Standards Board"
      ],
      "version": "2021-12",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "3. FASB Concepts Statement 8 Chapter 4（2021）：\nE16–E36资产单元. 目的：不把经营资源直接等同于已确认资产，不要求教授整部准则.",
        "scope": "3. FASB Concepts Statement 8 Chapter 4（2021）：\nhttps://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf\nE16–E36资产单元. 目的：不把经营资源直接等同于已确认资产，不要求教授整部准则.",
        "purpose": "从真实业务说明重建收费、交付、投入、资源与义务的关系，并说明披露能支持什么粒度的分析."
      },
      "supports": "3. FASB Concepts Statement 8 Chapter 4（2021）：\nE16–E36资产单元. 目的：不把经营资源直接等同于已确认资产，不要求教授整部准则.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "source_version": "2026-09-21.BF-A.rev-1",
    "tables": [
      {
        "heading": "1　先确定我们正在拆什么",
        "headers": [
          "关系",
          "要写成什么样的具体句子",
          "对报表的第一条线索"
        ],
        "rows": [
          [
            "收费",
            "按商品、服务次数、使用期限，还是资金余额收费？",
            "哪一项收入；计量单位是什么"
          ],
          [
            "交付",
            "谁负责提供商品或服务？什么时候算完成？",
            "收入确认、存货转出、尚未完成的义务"
          ],
          [
            "持续投入",
            "完成交付需要采购、人员、处理系统还是风险承担？",
            "成本费用、应付及需要持续建设的能力"
          ],
          [
            "资源",
            "交付前持有商品、收款权，还是多年使用的设施？",
            "存货、应收、设备、使用权等"
          ],
          [
            "义务",
            "钱是欠供应商、欠客户，还是借来的？要怎样履行？",
            "应付、递延收入、存款、借款等"
          ]
        ],
        "markdown": "| 关系 | 要写成什么样的具体句子 | 对报表的第一条线索 |\n|---|---|---|\n| 收费 | 按商品、服务次数、使用期限，还是资金余额收费？ | 哪一项收入；计量单位是什么 |\n| 交付 | 谁负责提供商品或服务？什么时候算完成？ | 收入确认、存货转出、尚未完成的义务 |\n| 持续投入 | 完成交付需要采购、人员、处理系统还是风险承担？ | 成本费用、应付及需要持续建设的能力 |\n| 资源 | 交付前持有商品、收款权，还是多年使用的设施？ | 存货、应收、设备、使用权等 |\n| 义务 | 钱是欠供应商、欠客户，还是借来的？要怎样履行？ | 应付、递延收入、存款、借款等 |"
      },
      {
        "heading": "2　从 Costco 的两种收费进入",
        "headers": [
          "英文原行",
          "中文",
          "截至2025-08-31",
          "截至2024-09-01"
        ],
        "rows": [
          [
            "Net sales",
            "净销售额",
            "269,912",
            "249,625"
          ],
          [
            "Membership fees",
            "会员费收入",
            "5,323",
            "4,828"
          ],
          [
            "Total revenue",
            "总收入",
            "275,235",
            "254,453"
          ]
        ],
        "markdown": "| 英文原行 | 中文 | 截至2025-08-31 | 截至2024-09-01 |\n|---|---|---:|---:|\n| Net sales | 净销售额 | 269,912 | 249,625 |\n| Membership fees | 会员费收入 | 5,323 | 4,828 |\n| Total revenue | 总收入 | 275,235 | 254,453 |"
      },
      {
        "heading": "2　从 Costco 的两种收费进入",
        "headers": [
          "本例中的过程",
          "收费与交付",
          "需要连接的资源和义务"
        ],
        "rows": [
          [
            "商品交易",
            "商品销售与相应交付；具体确认时点按收入政策阅读",
            "商品存货、货款结算、供应商应付、退款安排"
          ],
          [
            "会员服务",
            "会员期限内提供服务；收入随期间确认",
            "已收款形成的递延会员费，以及提供会员服务所需的共同设施与人员"
          ],
          [
            "两者共同使用的经营基础",
            "门店、配送、信息系统和客户服务支持多种活动",
            "不能把同一项投入在两个业务中各算一遍"
          ]
        ],
        "markdown": "| 本例中的过程 | 收费与交付 | 需要连接的资源和义务 |\n|---|---|---|\n| 商品交易 | 商品销售与相应交付；具体确认时点按收入政策阅读 | 商品存货、货款结算、供应商应付、退款安排 |\n| 会员服务 | 会员期限内提供服务；收入随期间确认 | 已收款形成的递延会员费，以及提供会员服务所需的共同设施与人员 |\n| 两者共同使用的经营基础 | 门店、配送、信息系统和客户服务支持多种活动 | 不能把同一项投入在两个业务中各算一遍 |"
      },
      {
        "heading": "3　共同资源为什么不能靠分摊解决",
        "headers": [
          "分摊方式",
          "商品利润",
          "会员利润",
          "合计"
        ],
        "rows": [
          [
            "共同成本给商品30、给会员10",
            "`150−100−30=20`",
            "`30−5−10=15`",
            "35"
          ],
          [
            "改为给商品10、给会员30",
            "`150−100−10=40`",
            "`30−5−30=−5`",
            "35"
          ]
        ],
        "markdown": "| 分摊方式 | 商品利润 | 会员利润 | 合计 |\n|---|---:|---:|---:|\n| 共同成本给商品30、给会员10 | `150−100−30=20` | `30−5−10=15` | 35 |\n| 改为给商品10、给会员30 | `150−100−10=40` | `30−5−30=−5` | 35 |"
      },
      {
        "heading": "5　完成一张能继续使用的业务图",
        "headers": [
          "起点 → 终点",
          "箭头的含义"
        ],
        "rows": [
          [
            "供应商 → 零售企业的商品",
            "交付商品；尚未付款时同时形成应付"
          ],
          [
            "商品及履约资源 → 客户交付",
            "持有的商品进入交付过程，相关成本随适用政策确认"
          ],
          [
            "会员合同 → 期间服务",
            "收费期限和履行过程决定会员费收入及剩余义务"
          ],
          [
            "门店、系统、人员 → 商品交易／会员服务",
            "共同使用关系；不等于两份可以重复加总的资源"
          ],
          [
            "外部存款人 → 银行资金来源",
            "外部转入形成资产，同时形成存款义务"
          ],
          [
            "银行 → 借款人",
            "贷款形成收款权；本金余额、信用损失与期间收入分开读取"
          ]
        ],
        "markdown": "| 起点 → 终点 | 箭头的含义 |\n|---|---|\n| 供应商 → 零售企业的商品 | 交付商品；尚未付款时同时形成应付 |\n| 商品及履约资源 → 客户交付 | 持有的商品进入交付过程，相关成本随适用政策确认 |\n| 会员合同 → 期间服务 | 收费期限和履行过程决定会员费收入及剩余义务 |\n| 门店、系统、人员 → 商品交易／会员服务 | 共同使用关系；不等于两份可以重复加总的资源 |\n| 外部存款人 → 银行资金来源 | 外部转入形成资产，同时形成存款义务 |\n| 银行 → 借款人 | 贷款形成收款权；本金余额、信用损失与期间收入分开读取 |"
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
    "experiments": [
      {
        "id": "EXP-BF01-SHARED",
        "title": "共同成本分摊与实际成本变化",
        "anchor": "bf01-shared-resources",
        "description": "所有金额为原稿明确的教学设定.",
        "inputs": {
          "goods_revenue": 150,
          "goods_direct_cost": 100,
          "member_revenue": 30,
          "member_direct_cost": 5,
          "shared_cost": 40,
          "allocation_to_goods": 30
        },
        "source_inputs": {
          "goods_revenue": 150,
          "goods_direct_cost": 100,
          "member_revenue": 30,
          "member_direct_cost": 5,
          "shared_cost": 40,
          "default_allocation_to_goods": 30
        },
        "static_tables": [
          {
            "heading": "3　共同资源为什么不能靠分摊解决",
            "headers": [
              "分摊方式",
              "商品利润",
              "会员利润",
              "合计"
            ],
            "rows": [
              [
                "共同成本给商品30、给会员10",
                "`150−100−30=20`",
                "`30−5−10=15`",
                "35"
              ],
              [
                "改为给商品10、给会员30",
                "`150−100−10=40`",
                "`30−5−30=−5`",
                "35"
              ]
            ],
            "markdown": "| 分摊方式 | 商品利润 | 会员利润 | 合计 |\n|---|---:|---:|---:|\n| 共同成本给商品30、给会员10 | `150−100−30=20` | `30−5−10=15` | 35 |\n| 改为给商品10、给会员30 | `150−100−10=40` | `30−5−30=−5` | 35 |"
          }
        ],
        "specification_markdown": "## 配套规格：交互、静态等价与计算\n\n本部分是网页与 Agent 的同源说明，不要求读者先操作网页才能理解正文.\n\n**交互 BF01-SHARED：共同成本不是随意消失的费用.** 默认输入为 `goods_revenue=150, goods_direct_cost=100, member_revenue=30, member_direct_cost=5, shared_cost=40, allocation_to_goods=30`，单位均为教学金额单位. 只有最后一个输入可用滑块在0至40间按1改变. 输出为 `goods_profit=50-a`、`member_profit=a-15`、`group_profit=35`. 每次同时更新三项；禁止只更新其中一边. 默认输出20、15、35，两个端点为50、−15、35和10、25、35. 若读者切到“真实成本变化”，直接商品成本输入110，集团结果同步变为25；页面必须把它与纯分摊模式分开.\n\n**交互 BF01-PROCESS：业务过程切换.** 行业取值仅为`retail`与`banking`，默认`retail`. 切换替换整套节点和关系说明，而非仅换公司名称. 静态等价就是第2、4、5节的表与解释. 节点点击展示来源定位及“原始披露／本文关系组织”的身份. 无脚本、键盘、打印模式保留所有关系文字；不把图中的相邻关系解释为因果估计.",
        "outputs_origin": "原稿第3节静态表及配套规格；导入未执行新计算"
      }
    ],
    "specification_markdown": "## 配套规格：交互、静态等价与计算\n\n本部分是网页与 Agent 的同源说明，不要求读者先操作网页才能理解正文.\n\n**交互 BF01-SHARED：共同成本不是随意消失的费用.** 默认输入为 `goods_revenue=150, goods_direct_cost=100, member_revenue=30, member_direct_cost=5, shared_cost=40, allocation_to_goods=30`，单位均为教学金额单位. 只有最后一个输入可用滑块在0至40间按1改变. 输出为 `goods_profit=50-a`、`member_profit=a-15`、`group_profit=35`. 每次同时更新三项；禁止只更新其中一边. 默认输出20、15、35，两个端点为50、−15、35和10、25、35. 若读者切到“真实成本变化”，直接商品成本输入110，集团结果同步变为25；页面必须把它与纯分摊模式分开.\n\n**交互 BF01-PROCESS：业务过程切换.** 行业取值仅为`retail`与`banking`，默认`retail`. 切换替换整套节点和关系说明，而非仅换公司名称. 静态等价就是第2、4、5节的表与解释. 节点点击展示来源定位及“原始披露／本文关系组织”的身份. 无脚本、键盘、打印模式保留所有关系文字；不把图中的相邻关系解释为因果估计.",
    "outputs_origin": "原稿静态表、公式和配套规格；本导入仅提取"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
看到一家公司的名字，我们很容易先给它贴上一个标签：零售商、银行、软件公司. 标签能帮我们找到同行，却还不能解释它怎样赚钱. 同样收到一笔钱，可能是卖出商品的货款，也可能是尚未完成服务的预收款，还可能是必须归还的客户存款. 只有先看清交易中发生了什么，报表上的“收入”“资产”“负债”才不会变成一组孤立的名称.

这一篇先不估值. 我们要完成一件更基础的事：把公司拆成几条说得清楚的经营过程，同时保留它们共用的资源. 走到最后，你应该能拿着一段新的业务说明，解释客户为什么付款、企业还需要做什么，以及这些关系会在报表的什么地方留下痕迹.

<span id="bf01-business-units"></span>

## 1　先确定我们正在拆什么

**本文所说的业务单元，是为当前分析选取的一组经营活动：它有可说明的客户或交易对手、收费依据、交付责任，以及为完成交付所需的投入.** 这是分析时使用的切法，不等同于法律实体，也不保证恰好对应公司披露的报告分部.

例如，按地区管理的企业可以把几个不同产品放在同一报告分部；同一种服务也可能由多个子公司共同完成. 我们先从业务说明建立联系，再回到分部披露核对可用数据，而不是把每个分部名称直接当成一门完全独立的生意. Costco 的业务说明列出了商品类别、仓储附属业务和其他业务；JPMorgan 的经营概览则列出消费与社区银行、商业与投资银行、资产与财富管理三个报告分部及 Corporate. 两份资料本来就在使用不同的管理切法. [COST-BUS]、[JPM-BUS]

拆业务时，可以连续问五个问题，但它们不是五张互不相干的检查表. **客户买什么**决定企业承担的交付；交付决定必须投入哪些商品、人员和设施；投入与收款之间的时间差，又决定企业持有什么权利、欠别人什么.

| 关系 | 要写成什么样的具体句子 | 对报表的第一条线索 |
|---|---|---|
| 收费 | 按商品、服务次数、使用期限，还是资金余额收费？ | 哪一项收入；计量单位是什么 |
| 交付 | 谁负责提供商品或服务？什么时候算完成？ | 收入确认、存货转出、尚未完成的义务 |
| 持续投入 | 完成交付需要采购、人员、处理系统还是风险承担？ | 成本费用、应付及需要持续建设的能力 |
| 资源 | 交付前持有商品、收款权，还是多年使用的设施？ | 存货、应收、设备、使用权等 |
| 义务 | 钱是欠供应商、欠客户，还是借来的？要怎样履行？ | 应付、递延收入、存款、借款等 |

这里的“资源”先是经营语言，不表示它必然按我们想象的金额列在资产负债表里. 例如，团队协作、客户关系可能影响经营，但不能因此给它们随手标一个价值再加进总资产. 资产的概念、是否确认和如何计量，是不同层次的问题；下一篇资产负债表带读会把它们分开. [FASB-E16-36]

<span id="bf01-retail-process"></span>

## 2　从 Costco 的两种收费进入

我们先看 Costco FY2025 的原始收入片段. 它不是完整利润表，只用于把业务说明连接到可核对的金额；完整报表位置见 BF-02.

**Costco 合并口径，单位： M 美元；两期均为52周.**

| 英文原行 | 中文 | 截至2025-08-31 | 截至2024-09-01 |
|---|---|---:|---:|
| Net sales | 净销售额 | 269,912 | 249,625 |
| Membership fees | 会员费收入 | 5,323 | 4,828 |
| Total revenue | 总收入 | 275,235 | 254,453 |

来源：[COST-IS]，SEC 10-K 印刷p.37. `269912 + 5323 = 275235`，先核对这三个数，再讨论它们的经营含义.

商品销售这条过程比较容易看见：采购和持有商品，向会员交付，再与供应商结算. 会员费却不是又卖出了一批商品. 会员取得的是一定期间的会员服务；公司披露将会员费收入扣除退款后，在一年会员期内按期确认. 因此，同一年收入表里的5,323，与年末资产负债表里的递延会员费2,854，回答的是两个问题：前者是这一期间确认了多少收入，后者是这个时点还有多少已收取但尚待确认的会员费. [COST-REV]

把它们并排放置，经营过程就清楚一些了：

| 本例中的过程 | 收费与交付 | 需要连接的资源和义务 |
|---|---|---|
| 商品交易 | 商品销售与相应交付；具体确认时点按收入政策阅读 | 商品存货、货款结算、供应商应付、退款安排 |
| 会员服务 | 会员期限内提供服务；收入随期间确认 | 已收款形成的递延会员费，以及提供会员服务所需的共同设施与人员 |
| 两者共同使用的经营基础 | 门店、配送、信息系统和客户服务支持多种活动 | 不能把同一项投入在两个业务中各算一遍 |

前两行的事实来自业务说明及收入政策；第三行是据此组织分析的方式，不是公司披露的一份独立分部成本表. [COST-BUS]、[COST-REV]

现在可以看出一句常见说法的问题：“会员费收入可以单独找到，所以会员费就是利润. ”收入能单列，并不意味着服务它不需要资源. 反过来，也不宜为了表示谨慎，就把所有门店成本都分给会员业务. 我们需要先问成本是如何发生的，再决定分析中怎样呈现它.

<span id="bf01-shared-resources"></span>

## 3　共同资源为什么不能靠分摊解决

令两个业务的收入为 $R_g,R_m$，可直接归属的成本为 $C_g,C_m$，共同成本为 $K$. 在这张明确限定范围的经营表里，总利润为

$$
\Pi=R_g+R_m-C_g-C_m-K.
$$

若把共同成本中的 $a$ 分给商品业务，剩余 $K-a$ 分给会员业务，则两边分别显示 $R_g-C_g-a$ 和 $R_m-C_m-(K-a)$. 相加后，$a$ 消掉了. **改分摊可以改变业务利润的样子，却没有改变企业实际发生的收入和成本.**

我们用一个教学设定把这点算完. 下列金额都是虚构的“金额单位”，不是 Costco 的费用估计. 假设本期商品收入150、直接商品成本100，会员收入30、直接会员成本5，共同成本40；不考虑税、利息等未列项目.

| 分摊方式 | 商品利润 | 会员利润 | 合计 |
|---|---:|---:|---:|
| 共同成本给商品30、给会员10 | `150−100−30=20` | `30−5−10=15` | 35 |
| 改为给商品10、给会员30 | `150−100−10=40` | `30−5−30=−5` | 35 |

第二种分摊让会员业务“亏损”了，但没有一位顾客离开，没有新增一笔工资，集团利润仍是35. 于是，不能仅凭分摊后的负数决定取消会员服务. 真正要研究的是：取消以后哪些收入会消失、哪些投入确实能撤掉、其他业务的客户行为是否改变.

这个例子也说明了拆分的用途. 拆分不是为了让每个格子都有一个利润，而是为了让变化有落点. 若商品采购成本真的增加10，而其他条件暂时不变，总利润就从35降到25；这与把共同成本从一边搬到另一边完全不同. 若为了维持会员体验要新增一套设施，应该继续分析资本投入、投用与未来费用，而不是把这笔投入藏进任意调整的利润率里.

回到真实报表，5,323首先是已经确认的会员费收入. 它可以成为经营分析的输入，但一份未披露的“独立会员利润”仍需要额外的成本与共同资源证据. 下一步就是识别这些成本、共同资源以及它们与会员服务的关系.[COST-IS]、[COST-REV]

<span id="bf01-banking-process"></span>

## 4　换成银行，过程为什么必须重画

现在把商品流转图收起来. JPMorgan 的经营概览涵盖贷款、交易处理、投资银行、资产管理等活动；不能用“进货—库存—卖货”一条链解释全部经营. [JPM-BUS]

就拿存款和贷款来说，同样是资金进入企业，交易对手的权利可能完全不同. 2025年末，JPMorgan 合并资产负债表的客户存款是负债方的2,559,320；存放其他银行的款项321,596则在资产方. 两行都带有 deposits，但前者是本集团对存款人的义务，后者是本集团对其他银行的权利. [JPM-BS]

贷款这一边也要把本金与收入分开. 贷出的本金形成一项收款权；利息、费用以及相应成本，才进入期间经营结果. 贷款的账面计量还与持有策略和信用损失处理有关，不能把贷款余额增长直接读成同额的收入增长. [JPM-LOAN]

可以用一个很小的事件检查理解.<strong>教学设定：</strong>一位客户从外部向银行转入100，形成该银行的客户存款；忽略手续费等其他事项. 银行新增现金100，同时新增存款义务100，本次事件没有凭空产生100的利润. 本例只跟踪这笔外部转入对该银行的局部影响.

这与零售商收到商品货款的事件为什么不同？因为我们不能只盯着“收到100”，还要看收款以后对方保留什么权利、企业完成了什么交付. 同样，银行替客户提供资产管理服务，与把资产作为自己的资产持有，也不能仅因都涉及证券就合并为一种投入关系.

因此，银行分支应分别看资金来源、资产运用、计量和风险，再看股东处在什么位置. 这里先建立阅读方向；贷款准备、证券类别和普通股权益的完整算例在 BF-05 中就地展开.

<span id="bf01-business-map"></span>

## 5　完成一张能继续使用的业务图

现在回看开头的五个问题，你不需要为每个名词建一个节点. 一条有用的连接应当能说成一句完整的话，例如：“采购形成待交付的商品；付款尚未发生，所以同时留下供应商义务. ”这句话把业务、资产和负债连接起来，比“存货→应付”两个词之间的一支箭更准确.

本篇的静态业务图如下. 箭头描述关系，不表示所有事件必然依次发生，也不表示某一资源只服务一个业务.

| 起点 → 终点 | 箭头的含义 |
|---|---|
| 供应商 → 零售企业的商品 | 交付商品；尚未付款时同时形成应付 |
| 商品及履约资源 → 客户交付 | 持有的商品进入交付过程，相关成本随适用政策确认 |
| 会员合同 → 期间服务 | 收费期限和履行过程决定会员费收入及剩余义务 |
| 门店、系统、人员 → 商品交易／会员服务 | 共同使用关系；不等于两份可以重复加总的资源 |
| 外部存款人 → 银行资金来源 | 外部转入形成资产，同时形成存款义务 |
| 银行 → 借款人 | 贷款形成收款权；本金余额、信用损失与期间收入分开读取 |

前三条真实入口见[COST-BUS]、[COST-REV]，银行入口见[JPM-BUS]、[JPM-BS]、[JPM-LOAN]；关系图的组织是本文的教学表达.

<span id="bf01-exercises"></span>

## 6　练习与完整解析

<span id="bf01-exercise-membership"></span>

### 练习一：会收费，就有独立利润吗？

你已经找到 Costco 的会员费收入5,323. 有人建议把它全部计作“会员业务利润”，再把其余利润归给商品业务. 请说明这一步缺什么，并写出一个可以实际继续调查的问题.

**解析.** 缺少直接服务成本和共同投入的归属依据. 收入单列只解决了收费的一个观察窗口，没有证明其他业务承担了全部必要成本. 可以继续调查“哪些人员和系统工作会随会员数量变化，哪些门店投入即使会员数量短期变化也不会撤掉”，再核对披露是否提供足够数据. 不要从一个分摊比例出发，倒推它是企业真实的成本形成方式. [COST-IS]、[COST-REV]

<span id="bf01-exercise-allocation"></span>

### 练习二：改变什么才改变企业利润？

使用第3节的教学设定. 把共同成本给商品的份额从30改成0，其他真实收入和成本不变；随后单独考虑直接商品成本从100升到110. 分别计算结果.

**解析.** 只改分摊时，商品利润是50，会员利润是 $30-5-40=-15$，合计仍35. 成本确实增加10时，无论怎样分摊共同成本，合计都变为 $150+30-110-5-40=25$. 前者改变呈现，后者改变投入. 能把这两件事分开，才说明理解了共同资源，而不是记住一个分摊公式.

<span id="bf01-exercise-deposits"></span>

### 练习三：同名项目的迁移

给你 JPMorgan 2025年末的两行：资产方 `Deposits with banks 321,596`，负债方 `Deposits 2,559,320`. 请写出各自的交易对手关系，并说明为什么不能把两项相加称为“银行当年销售额”.

**解析.** 第一项是银行持有的权利，第二项是对客户的义务，且两者都是时点余额. 把它们相加既混淆权利与义务，也混淆余额与期间收入. 要分析期间经营，应进一步读取利息、非利息收入、资金成本和信用成本；不能用一个余额总和代替. [JPM-BS]、[JPM-LOAN]

到这里，我们已经有了一张能回到真实报表的业务图. 下一步进入 [BF-05](/zh/notebook/balance-sheet/)，先看到全表，再沿自己选择的零售或银行分支追到附注.

<span id="bf01-sources"></span>

## 来源与实际定位

| 原件链接／代号 | 版本与具体定位 |
|---|---|
| [COST-BUS] | BI-S05；Costco FY2025 10-K；Item 1 Business，General / Membership，印刷pp.3–7 |
| [COST-IS] | BI-S05；合并利润表印刷p.37；截至2025-08-31及2024-09-01的52周； M 美元 |
| [COST-REV] | BI-S05；Note 1 Revenue Recognition，印刷pp.47–48；资产负债表p.39 |
| [JPM-BUS] | BI-S07；2025 Annual Report；MD&A Introduction，印刷p.46／物理p.78 |
| [JPM-BS] | BI-S07；合并资产负债表印刷p.167／物理p.199；2025-12-31及2024-12-31； M 美元，股数另标 |
| [JPM-LOAN] | BI-S07；Note 12 Loan accounting framework，印刷pp.236–238；Loan portfolio p.239 |
| [FASB-E16-36] | BF-S-FASB-ELEMENTS；2021-12；E16–E36；概念框架不是所有具体确认与计量规则 |

[COST-BUS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Costco FY2025 10-K；Item 1 Business，General / Membership，印刷pp.3–7"
[COST-IS]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；合并利润表印刷p.37；截至2025-08-31及2024-09-01的52周； M 美元"
[COST-REV]: https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm "BI-S05；Note 1 Revenue Recognition，印刷pp.47–48；资产负债表p.39"
[JPM-BUS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=78 "BI-S07；2025 Annual Report；MD&A Introduction，印刷p.46／物理p.78"
[JPM-BS]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=199 "BI-S07；合并资产负债表印刷p.167／物理p.199；2025-12-31及2024-12-31； M 美元，股数另标"
[JPM-LOAN]: https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf#page=268 "BI-S07；Note 12 Loan accounting framework，印刷pp.236–238；Loan portfolio p.239"
[FASB-E16-36]: https://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf "BF-S-FASB-ELEMENTS；2021-12；E16–E36；概念框架不是所有具体确认与计量规则"


## Additional teaching material
## 配套规格：交互、静态等价与计算

本部分是网页与 Agent 的同源说明，不要求读者先操作网页才能理解正文.

**交互 BF01-SHARED：共同成本不是随意消失的费用.** 默认输入为 `goods_revenue=150, goods_direct_cost=100, member_revenue=30, member_direct_cost=5, shared_cost=40, allocation_to_goods=30`，单位均为教学金额单位. 只有最后一个输入可用滑块在0至40间按1改变. 输出为 `goods_profit=50-a`、`member_profit=a-15`、`group_profit=35`. 每次同时更新三项；禁止只更新其中一边. 默认输出20、15、35，两个端点为50、−15、35和10、25、35. 若读者切到“真实成本变化”，直接商品成本输入110，集团结果同步变为25；页面必须把它与纯分摊模式分开.

**交互 BF01-PROCESS：业务过程切换.** 行业取值仅为`retail`与`banking`，默认`retail`. 切换替换整套节点和关系说明，而非仅换公司名称. 静态等价就是第2、4、5节的表与解释. 节点点击展示来源定位及“原始披露／本文关系组织”的身份. 无脚本、键盘、打印模式保留所有关系文字；不把图中的相邻关系解释为因果估计.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF01-SHARED",
    "title": "共同成本分摊与实际成本变化",
    "anchor": "bf01-shared-resources",
    "description": "所有金额为原稿明确的教学设定.",
    "inputs": {
      "goods_revenue": 150,
      "goods_direct_cost": 100,
      "member_revenue": 30,
      "member_direct_cost": 5,
      "shared_cost": 40,
      "allocation_to_goods": 30
    },
    "source_inputs": {
      "goods_revenue": 150,
      "goods_direct_cost": 100,
      "member_revenue": 30,
      "member_direct_cost": 5,
      "shared_cost": 40,
      "default_allocation_to_goods": 30
    },
    "static_tables": [
      {
        "heading": "3　共同资源为什么不能靠分摊解决",
        "headers": [
          "分摊方式",
          "商品利润",
          "会员利润",
          "合计"
        ],
        "rows": [
          [
            "共同成本给商品30、给会员10",
            "`150−100−30=20`",
            "`30−5−10=15`",
            "35"
          ],
          [
            "改为给商品10、给会员30",
            "`150−100−10=40`",
            "`30−5−30=−5`",
            "35"
          ]
        ],
        "markdown": "| 分摊方式 | 商品利润 | 会员利润 | 合计 |\n|---|---:|---:|---:|\n| 共同成本给商品30、给会员10 | `150−100−30=20` | `30−5−10=15` | 35 |\n| 改为给商品10、给会员30 | `150−100−10=40` | `30−5−30=−5` | 35 |"
      }
    ],
    "specification_markdown": "## 配套规格：交互、静态等价与计算\n\n本部分是网页与 Agent 的同源说明，不要求读者先操作网页才能理解正文.\n\n**交互 BF01-SHARED：共同成本不是随意消失的费用.** 默认输入为 `goods_revenue=150, goods_direct_cost=100, member_revenue=30, member_direct_cost=5, shared_cost=40, allocation_to_goods=30`，单位均为教学金额单位. 只有最后一个输入可用滑块在0至40间按1改变. 输出为 `goods_profit=50-a`、`member_profit=a-15`、`group_profit=35`. 每次同时更新三项；禁止只更新其中一边. 默认输出20、15、35，两个端点为50、−15、35和10、25、35. 若读者切到“真实成本变化”，直接商品成本输入110，集团结果同步变为25；页面必须把它与纯分摊模式分开.\n\n**交互 BF01-PROCESS：业务过程切换.** 行业取值仅为`retail`与`banking`，默认`retail`. 切换替换整套节点和关系说明，而非仅换公司名称. 静态等价就是第2、4、5节的表与解释. 节点点击展示来源定位及“原始披露／本文关系组织”的身份. 无脚本、键盘、打印模式保留所有关系文字；不把图中的相邻关系解释为因果估计.",
    "outputs_origin": "原稿第3节静态表及配套规格；导入未执行新计算"
  }
]
```

## Sources
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 的 2025 财年末合并资产为77,099 M 美元，负债47,935，权益29,164. 业务说明把商品快速周转与供应商付款安排联系起来；会员费的确认则需要结合收入政策和递延余额.

本组带读将存货与应付的两期余额变化接到现金流量表. 两种计算并不完全相同，差额留待附注和其他口径解释.

EI-B 本批采用：会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.

BF-F/G 本批采用：零售利润/现金/普通股及债务时间的历史原件. SEC具名表定位优先；不混用IR PDF页码.
- [FASB Concepts Statement No. 8 · Chapter 4: Elements of Financial Statements](https://storage.fasb.org/Concepts_Statement_8-Chapter_4-Elements.pdf): 资产对应企业取得经济利益的现时权利，负债对应企业转移经济利益的现时义务；权益是扣除负债后的剩余利益.

这组定义帮助识别对象. 某项权利是否确认、按何种金额计量，还要结合适用的会计规则和披露.
- [JPMorgan Chase & Co. · 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPMorgan 的 2025 年末集团合并表没有照普通工业企业划分流动／非流动. 证券和贷款各有计量类别；贷款损失准备是贷款账面余额的减项，表下注明的合并VIE金额已包含在集团总额内.

从总权益到普通股权益，还要扣除优先股；每股账面值的股数使用已发行股数减库存股. 原表、附注和普通股权利因此要连在一起读.

BF-F/G 本批采用：集团季度平均LCR、期末资产和有条件融资能力分别记录；银行法人另列；完整主表支持综合带读.

## Content relations
```json
[
  {
    "from": "zh-bf01",
    "relation": "part_of",
    "to": "business-reports",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf01",
    "relation": "illustrated_by",
    "to": "EXP-BF01-SHARED",
    "reason": "改变分摊不改变合计利润的教学设定"
  },
  {
    "from": "zh-bf01",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "业务、收入及会员收入确认",
    "scope": "Item 1 pp.3–7；收入表p.37；Note 1 pp.47–48"
  },
  {
    "from": "zh-bf01",
    "relation": "supported_by",
    "to": "BF-S-JPM-FY2025",
    "reason": "银行业务与资产负债身份",
    "scope": "MD&A p.46；资产负债表p.167；Note 12 pp.236–239"
  },
  {
    "from": "zh-bf01",
    "relation": "uses_method",
    "to": "zh-bf03",
    "reason": "核对余额、期间、单位和集团范围；可就地补充"
  },
  {
    "from": "zh-bf01",
    "relation": "informs",
    "to": "zh-balance-sheet",
    "reason": "为原表阅读提供收费、交付、资源与义务关系，不宣称业务图唯一决定会计计量"
  }
]
```

## Related entries

## Optional reading path
拆一份企业财报: step 1/14
连接客户、收费、交付、资源和资金.
带着业务地图进入完整报表，选择与你的对象相近的行业.
Next: [资产负债表：全表结构与行业带读](https://ou-liu-red-sugar.github.io/zh/notebook/balance-sheet/)
