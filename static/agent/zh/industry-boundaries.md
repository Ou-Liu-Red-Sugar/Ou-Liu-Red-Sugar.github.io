# 行业边界、市场划分与竞争结构

区分统计行业、公司分部与客户选择集合，并在明确产品、客户、地域、期间、单位和控制主体后计算份额与 HHI.

Entry: zh-ei06 | Node: EI-06 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 你教授 EI-06《行业边界、市场划分与竞争结构》，采用 2026-09-22-deep-review.
读者懂基本数学；先询问或采用默认电力分支.

必须实际读取：
1. Tobias Salz，MIT 14.271 Fall 2022 Lecture 7：
   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
   读页脚 slides 8/34–10/34（PDF物理页约18–21），包含产品选择、
   outside option，以及“谁是所有可能购买者”的市场大小决定.
2. BEA Industries 正文：
   https://www.bea.gov/resources/learning-center/what-to-know-industries
   GDP by Industry、Gross Output、Input-Output Accounts.
3. 电力默认分支：EIA Table 2.5年度行及全部表注：
   https://www.eia.gov/electricity/annual/html/epa_02_05.html
   IEA Electricity 2025 PDF pp57–61首段：
   https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
4. 选择工程机械分支时，直接读取 Census 固定 May 2026 Full Report：
   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
   核第1页版次与发布日期、第3–4页调查说明、第6–9页工程机械行和脚注.
   如果该固定原件未取得，不得用滚动“current”文件假装是同一版.

逐项记录实际题名、版次、页/节、取得范围及其对边界选择的影响. 当前分支必读项取得后再实质教学；同会话同版已完整读取可复用；仍缺原文时列明缺少的单元.

诊断：让读者写出EIA用途表的分子、分母、单位和分类主体. 进入边界与共同控制变式时，先判断D、E的可交付性，再计算份额和HHI. 练习二同时核九个月交期、销售期间与共同控制，以能解释四个HHI结果及价格影响所需证据为完成标准.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei06",
  "node_id": "EI-06",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "微积分、基本概率；不要求产业组织先修",
  "learning_task": "区分统计行业、公司分部与客户选择集合，并在明确产品、客户、地域、期间、单位和控制主体后计算份额与 HHI.",
  "body_source": "body_markdown",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 你教授 EI-06《行业边界、市场划分与竞争结构》，采用 2026-09-22-deep-review.\n读者懂基本数学；先询问或采用默认电力分支.\n\n必须实际读取：\n1. Tobias Salz，MIT 14.271 Fall 2022 Lecture 7：\n   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf\n   读页脚 slides 8/34–10/34（PDF物理页约18–21），包含产品选择、\n   outside option，以及“谁是所有可能购买者”的市场大小决定.\n2. BEA Industries 正文：\n   https://www.bea.gov/resources/learning-center/what-to-know-industries\n   GDP by Industry、Gross Output、Input-Output Accounts.\n3. 电力默认分支：EIA Table 2.5年度行及全部表注：\n   https://www.eia.gov/electricity/annual/html/epa_02_05.html\n   IEA Electricity 2025 PDF pp57–61首段：\n   https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf\n4. 选择工程机械分支时，直接读取 Census 固定 May 2026 Full Report：\n   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf\n   核第1页版次与发布日期、第3–4页调查说明、第6–9页工程机械行和脚注.\n   如果该固定原件未取得，不得用滚动“current”文件假装是同一版.\n\n逐项记录实际题名、版次、页/节、取得范围及其对边界选择的影响. 当前分支必读项取得后再实质教学；同会话同版已完整读取可复用；仍缺原文时列明缺少的单元.\n\n诊断：让读者写出EIA用途表的分子、分母、单位和分类主体. 进入边界与共同控制变式时，先判断D、E的可交付性，再计算份额和HHI. 练习二同时核九个月交期、销售期间与共同控制，以能解释四个HHI结果及价格影响所需证据为完成标准.",
  "selected_branch": "power",
  "common_required_readings": [
    {
      "id": "EI-S02-MIT-L7-2022",
      "source_id": "EI-S02-MIT-L7-2022",
      "title": "Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7",
      "authors": [
        "Tobias Salz"
      ],
      "version": "Fall2022 Lecture7",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
        "scope": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
        "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
      },
      "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
      "fallback_source_ids": []
    },
    {
      "id": "EI-S03-BEA-INDUSTRIES",
      "source_id": "EI-S03-BEA-INDUSTRIES",
      "title": "Industries · BEA Learning Center",
      "authors": [
        "U.S. Bureau of Economic Analysis"
      ],
      "version": "页面2021-02-24更新，2026-09-21取得",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bea.gov/resources/learning-center/what-to-know-industries",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
        "scope": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
        "purpose": "区分行业、总产出、中间投入及增加值"
      },
      "supports": "区分行业、总产出、中间投入及增加值",
      "fallback_source_ids": []
    }
  ],
  "required_readings": [
    {
      "id": "EI-S02-MIT-L7-2022",
      "source_id": "EI-S02-MIT-L7-2022",
      "title": "Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7",
      "authors": [
        "Tobias Salz"
      ],
      "version": "Fall2022 Lecture7",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
        "scope": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
        "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
      },
      "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
      "fallback_source_ids": []
    },
    {
      "id": "EI-S03-BEA-INDUSTRIES",
      "source_id": "EI-S03-BEA-INDUSTRIES",
      "title": "Industries · BEA Learning Center",
      "authors": [
        "U.S. Bureau of Economic Analysis"
      ],
      "version": "页面2021-02-24更新，2026-09-21取得",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bea.gov/resources/learning-center/what-to-know-industries",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
        "scope": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
        "purpose": "区分行业、总产出、中间投入及增加值"
      },
      "supports": "区分行业、总产出、中间投入及增加值",
      "fallback_source_ids": []
    },
    {
      "id": "EI-S04-EIA-2024-T25",
      "source_id": "EI-S04-EIA-2024",
      "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "with data for2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_05.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Table 2.5：Annual Totals的2023/2024居民列、单位及全部表注；行业边界使用2024全部终端用途及合计",
        "scope": "Table 2.5：Annual Totals的2023/2024居民列、单位及全部表注；行业边界使用2024全部终端用途及合计",
        "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
      },
      "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
      "fallback_source_ids": [],
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_05.html"
    },
    {
      "id": "EI-S05-IEA-2025",
      "source_id": "EI-S05-IEA-2025",
      "title": "Electricity 2025 · Supply",
      "authors": [
        "International Energy Agency"
      ],
      "version": "Electricity 2025；February 2025 report，October 2025 revised version（版权页）",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "印刷pp57–60及p61首段，读至2024年低风低光事件单元结束；查看p57、p58、p60图及全部相应图注",
        "scope": "印刷pp57–60及p61首段，读至2024年低风低光事件单元结束；查看p57、p58、p60图及全部相应图注",
        "purpose": "核对历史时期、双轴、剩余负荷、可用可调度能力及邻区条件"
      },
      "supports": "核对历史时期、双轴、剩余负荷、可用可调度能力及邻区条件",
      "fallback_source_ids": []
    }
  ],
  "required_readings_by_branch": {
    "power": [
      {
        "id": "EI-S02-MIT-L7-2022",
        "source_id": "EI-S02-MIT-L7-2022",
        "title": "Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7",
        "authors": [
          "Tobias Salz"
        ],
        "version": "Fall2022 Lecture7",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
          "scope": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
          "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
        },
        "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
        "fallback_source_ids": []
      },
      {
        "id": "EI-S03-BEA-INDUSTRIES",
        "source_id": "EI-S03-BEA-INDUSTRIES",
        "title": "Industries · BEA Learning Center",
        "authors": [
          "U.S. Bureau of Economic Analysis"
        ],
        "version": "页面2021-02-24更新，2026-09-21取得",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bea.gov/resources/learning-center/what-to-know-industries",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
          "scope": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
          "purpose": "区分行业、总产出、中间投入及增加值"
        },
        "supports": "区分行业、总产出、中间投入及增加值",
        "fallback_source_ids": []
      },
      {
        "id": "EI-S04-EIA-2024-T25",
        "source_id": "EI-S04-EIA-2024",
        "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "version": "with data for2024",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/annual/html/epa_02_05.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Table 2.5：Annual Totals的2023/2024居民列、单位及全部表注；行业边界使用2024全部终端用途及合计",
          "scope": "Table 2.5：Annual Totals的2023/2024居民列、单位及全部表注；行业边界使用2024全部终端用途及合计",
          "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
        },
        "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
        "fallback_source_ids": [],
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_05.html"
      },
      {
        "id": "EI-S05-IEA-2025",
        "source_id": "EI-S05-IEA-2025",
        "title": "Electricity 2025 · Supply",
        "authors": [
          "International Energy Agency"
        ],
        "version": "Electricity 2025；February 2025 report，October 2025 revised version（版权页）",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "印刷pp57–60及p61首段，读至2024年低风低光事件单元结束；查看p57、p58、p60图及全部相应图注",
          "scope": "印刷pp57–60及p61首段，读至2024年低风低光事件单元结束；查看p57、p58、p60图及全部相应图注",
          "purpose": "核对历史时期、双轴、剩余负荷、可用可调度能力及邻区条件"
        },
        "supports": "核对历史时期、双轴、剩余负荷、可用可调度能力及邻区条件",
        "fallback_source_ids": []
      }
    ],
    "machinery": [
      {
        "id": "EI-S02-MIT-L7-2022",
        "source_id": "EI-S02-MIT-L7-2022",
        "title": "Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7",
        "authors": [
          "Tobias Salz"
        ],
        "version": "Fall2022 Lecture7",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
          "scope": "页脚slides8/34–10/34，PDF物理页约18–21；核对完整叠页的产品选择、outside option和市场大小决定",
          "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
        },
        "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
        "fallback_source_ids": []
      },
      {
        "id": "EI-S03-BEA-INDUSTRIES",
        "source_id": "EI-S03-BEA-INDUSTRIES",
        "title": "Industries · BEA Learning Center",
        "authors": [
          "U.S. Bureau of Economic Analysis"
        ],
        "version": "页面2021-02-24更新，2026-09-21取得",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bea.gov/resources/learning-center/what-to-know-industries",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
          "scope": "GDP by Industry、Gross Output by Industry、Input-Output Accounts三个标题下完整正文；Supply/Use/Requirements表的功能说明",
          "purpose": "区分行业、总产出、中间投入及增加值"
        },
        "supports": "区分行业、总产出、中间投入及增加值",
        "fallback_source_ids": []
      },
      {
        "id": "EI-S06-M3-202605",
        "source_id": "EI-S06-M3-202605",
        "title": "Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report",
        "authors": [
          "U.S. Census Bureau"
        ],
        "version": "CB26-104 M3-2(26)-05",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "第1页固定2026年5月报告身份、2026-07-02发布日期；第3–4页调查定义；第6–9页Tables1–4工程机械行、表头及相关脚注",
          "scope": "第1页固定2026年5月报告身份、2026-07-02发布日期；第3–4页调查定义；第6–9页Tables1–4工程机械行、表头及相关脚注",
          "purpose": "区分流量/存量、季调名义金额、初值/修订和已净扣取消的新订单"
        },
        "supports": "区分流量/存量、季调名义金额、初值/修订和已净扣取消的新订单",
        "fallback_source_ids": []
      }
    ]
  },
  "branch_selection": "使用当前分支完整必读单元，共同材料保留，行业部分随选择替换；原Prompt的默认诊断属于默认分支. 跨材料综合练习采用comparison所列全部材料，研究延伸仅在选择后启用.",
  "optional_readings": [
    {
      "id": "EI-S06-M3-202605",
      "source_id": "EI-S06-M3-202605",
      "title": "Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report",
      "authors": [
        "U.S. Census Bureau"
      ],
      "version": "CB26-104 M3-2(26)-05",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "第1页固定2026年5月报告身份、2026-07-02发布日期；第3–4页调查定义；第6–9页Tables1–4工程机械行、表头及相关脚注",
        "scope": "第1页固定2026年5月报告身份、2026-07-02发布日期；第3–4页调查定义；第6–9页Tables1–4工程机械行、表头及相关脚注",
        "purpose": "区分流量/存量、季调名义金额、初值/修订和已净扣取消的新订单"
      },
      "supports": "区分流量/存量、季调名义金额、初值/修订和已净扣取消的新订单",
      "fallback_source_ids": [],
      "for_branch": "machinery",
      "required_when_selected": true
    }
  ],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "data_version": "2026-09-21-review-2",
    "meaning": "数字案例的同源输入；observed与teaching_assumption严格分开，不作为真实估计模型",
    "cases": [
      {
        "id": "CASE-EI-US-POWER-2024",
        "status": "observed",
        "source_id": "EI-S04-EIA-2024",
        "period": [
          "2023",
          "2024"
        ],
        "vintage": "2024 annual",
        "released_at": "2025-10-16",
        "retrieved_at": "2026-09-21",
        "geography": "50 U.S. states and District of Columbia",
        "rows": [
          {
            "year": 2023,
            "residential_sales_thousand_MWh": 1450025,
            "residential_revenue_million_USD": 231993,
            "published_residential_price_cent_per_kWh": 16
          },
          {
            "year": 2024,
            "residential_sales_thousand_MWh": 1482874,
            "residential_revenue_million_USD": 244367,
            "published_residential_price_cent_per_kWh": 16.48
          }
        ],
        "end_use_sales_2024_thousand_MWh": {
          "residential": 1482874,
          "commercial": 1450941,
          "industrial": 1034584,
          "transportation": 6983,
          "total": 3975382
        },
        "formulas": {
          "sales_growth_pct": "100*(1482874/1450025-1)",
          "published_price_growth_pct": "100*(16.48/16.00-1)",
          "unidentified_change_ratio": "(1482874/1450025-1)/(16.48/16.00-1)",
          "reconstructed_price_2024_cent_per_kWh": "(244367*1000000)/(1482874*1000*1000)*100",
          "residential_composition_pct": "100*1482874/3975382"
        },
        "expected": {
          "sales_growth_pct": 2.265409217082464,
          "published_price_growth_pct": 3,
          "unidentified_change_ratio": 0.7551364056941547,
          "reconstructed_price_2024_cent_per_kWh": 16.479282798133895,
          "reconstructed_price_2023_cent_per_kWh": 15.999241392389786,
          "residential_composition_pct": 37.30142159923248
        },
        "limits": [
          "部门构成不是企业份额",
          "均价不是个别客户边际电价",
          "年际共同变化不识别需求弹性"
        ]
      },
      {
        "id": "CASE-EI-DE-POWER-2024",
        "status": "observed",
        "source_id": "EI-S05-IEA-2025",
        "period": [
          "2024-11-05/2024-11-07",
          "2024-12-11/2024-12-12"
        ],
        "retrieved_at": "2026-09-21",
        "vintage": "Electricity2025 Supply",
        "extracts": [
          {
            "locator": "p57 December event",
            "metric": "wind daily capacity factor",
            "date": "2024-12-12",
            "value_pct": 2,
            "approximate": true
          },
          {
            "locator": "p57 comparator",
            "metric": "December average wind capacity factor",
            "period": "Decembers 2019–2023",
            "value_pct": 26,
            "approximate": true
          },
          {
            "locator": "pp57–58 November event",
            "metric": "wind daily capacity factor",
            "date": "2024-11-06",
            "value_pct": 0.5,
            "approximate": true
          }
        ],
        "definitions": {
          "residual_load": "load-wind-solarPV",
          "available_dispatchable_capacity": "installed_dispatchable_capacity-outages"
        },
        "limits": [
          "没有逐小时原数列",
          "历史日均与历史月均不同窗口",
          "不用于校准合成60GW例子",
          "不据此认定停电或违法"
        ]
      },
      {
        "id": "CASE-EI-US-CONSTRUCTION-MACHINERY-202605",
        "status": "observed",
        "source_id": "EI-S06-M3-202605",
        "period": "2026-04/2026-05",
        "released_at": "2026-07-02T10:00:00-04:00",
        "retrieved_at": "2026-09-21",
        "unit": "USD M",
        "seasonally_adjusted": true,
        "price_adjusted": false,
        "new_orders_net_of_cancellations": true,
        "rows": [
          {
            "month": "2026-04",
            "shipments": 4424,
            "net_new_orders": 4734,
            "end_unfilled_orders": 11214,
            "end_inventories": 10593,
            "status_in_selected_table": "revised"
          },
          {
            "month": "2026-05",
            "shipments": 4498,
            "net_new_orders": 4879,
            "end_unfilled_orders": 11595,
            "end_inventories": 10659,
            "status_in_selected_table": "preliminary"
          }
        ],
        "locators": {
          "shipments": "p6 Table1 Construction machinery",
          "net_new_orders": "p7 Table2 Construction machinery",
          "end_unfilled_orders": "p8 Table3 Construction machinery",
          "end_inventories": "p9 Table4 Construction machinery"
        },
        "formulas": {
          "net_flow_may": "4879-4498",
          "backlog_change_may": "11595-11214",
          "reconciliation_residual_may": "11595-11214-4879+4498",
          "inventory_to_monthly_shipments": "10659/4498"
        },
        "expected": {
          "net_flow_may": 381,
          "backlog_change_may": 381,
          "reconciliation_residual_may": 0,
          "inventory_to_monthly_shipments": 2.3697198755002225
        },
        "limits": [
          "净新订单不能再次扣取消",
          "一般桥保留取消、修订、范围与计量调整项",
          "余额局部相等不证明调整项在所有时期为零",
          "金额比不是设备数量、交期或财务存货天数",
          "调查面板不是概率抽样，公布单元格精确读取不等于抽样误差已量化"
        ]
      }
    ],
    "experiments": [
      {
        "id": "EXP-EI-HHI-01",
        "status": "teaching_assumption",
        "unit": "synthetic same-period sales units",
        "formula": "shares_pct_i=100*sales_i/sum(sales); HHI=sum(shares_pct_i**2)",
        "convention": "percent squared, 0–10000",
        "states": [
          {
            "boundary": "narrow",
            "ownership": "separate",
            "sales": [
              40,
              35,
              25
            ],
            "denominator": 100,
            "shares_pct": [
              40,
              35,
              25
            ],
            "HHI": 3450
          },
          {
            "boundary": "wide",
            "ownership": "separate",
            "sales": [
              40,
              35,
              25,
              50,
              50
            ],
            "denominator": 200,
            "shares_pct": [
              20,
              17.5,
              12.5,
              25,
              25
            ],
            "HHI": 2112.5
          },
          {
            "boundary": "narrow",
            "ownership": "A+B common owner",
            "sales": [
              75,
              25
            ],
            "denominator": 100,
            "shares_pct": [
              75,
              25
            ],
            "HHI": 6250
          },
          {
            "boundary": "wide",
            "ownership": "A+B common owner",
            "sales": [
              75,
              25,
              50,
              50
            ],
            "denominator": 200,
            "shares_pct": [
              37.5,
              12.5,
              25,
              25
            ],
            "HHI": 2812.5
          }
        ],
        "domain": "nonnegative sales, positive total; invalid total rejected",
        "not_inferred": "market boundaries or actual market power"
      }
    ],
    "specification_markdown": "## 附：HTML 交互与静态等价合同\n\n**组件 `EI06-boundary`.** 默认显示真实材料，不显示可拖动企业份额. 原表表头、年度、单位、用途分类及表注摘要常驻. 切换 `power-annual / power-hourly / machinery` 只改变材料和边界说明；不把不同模式的数字叠成可比序列. 小时材料显示有标注的结构邻接表，不伪造原报告逐小时数据.\n\n**组件 `EI06-hhi`.** 独立标为“教学变式”. 输入 `boundary=narrow|wide`、`combineAB=false|true`. 原始数组固定 `[40,35,25,50,50]`，前两项是否合并在筛选后处理；分母为当前纳入量之和. 输出总量、所有主体的百分数份额、HHI、与窄边界独立主体基准之差. 默认 `narrow,false`，输出 `100; [40,35,25]; 3450`. 四状态验收值依次为：\n\n| boundary | combineAB | 份额 | HHI |\n|---|---|---|---:|\n| narrow | false | 40,35,25 | 3450 |\n| wide | false | 20,17.5,12.5,25,25 | 2112.5 |\n| narrow | true | 75,25 | 6250 |\n| wide | true | 37.5,12.5,25,25 | 2812.5 |\n\n组件不接受缺失数据自动补零；扩展边界按钮的说明是“在假设替代证据成立时查看算术”，不是“选择正确市场”. 缺少同口径所有权资料的真实模式，HHI 显示“未计算”，而非 0.\n\n**结构图边的含义.** `用途 → 候选方案` 表示按用途寻找候选；`地点/时点/交付条件 → 可行方案` 表示筛除不可实施选择；`同口径交易数据＋控制主体 → 份额` 表示统计聚合；`份额 → HHI` 才是本篇已给公式的计算. 这些边不证明现实中的因果效应.\n\n无 JavaScript 时，正文两张表、四状态验收表和以上文字邻接表就是静态等价. 控件使用带文字的 radio/checkbox，键盘可操作；计算结果用 `output` 与 `aria-live=polite`，不靠颜色区分事实与假设. 窄屏允许逐行查看，打印展开所有表注.",
    "outputs_origin": "原稿共享输入与默认结果；数字身份保持observed或teaching_assumption"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
行业统计按生产活动汇总，公司分部按企业经营结构披露，竞争分析按客户的可行选择划定市场. 三种边界分别服务于总量测量、企业分析与替代关系研究.

<span id="ei06-customer-boundaries"></span>

## 生产分类与客户选择

BEA 沿 NAICS 分类汇总行业经济活动，分别发布增加值、总产出和投入产出关系. [^bea]

“美国工程机械制造业本月出货金额”需要稳定的统计总体；“承包商为下月施工采购设备”需要用途、设备能力、运输、维修和交期信息. 设某设备在当前项目结束后才交付，它不在本项目的可行选择中，却可以进入下一年度采购的候选集合.

**定义.** 市场边界说明包括产品或用途、客户集合、可交付地域、交易环节、期间及计量单位.

将客户 $i$ 在时点 $t$ 的可选方案记为 $\mathcal J_{it}$，将不购买、暂缓或保留现状记为外部选项0. 简化的选择式为 $j^*_{it}\in\operatorname{argmax}_{j\in\mathcal J_{it}\cup\{0\}}U_{ijt}$，效用取决于价格、性能及其他交易条件. 估计这种离散选择模型时，需定义潜在购买者总体及外部选项. [^mit]

设一年有200个潜在购买单位，100个购买三家厂商的产品，100个延期. 厂商在已完成购买中的份额以100为分母，在潜在购买者中的采用比例以200为分母；延期属于外部选项.

<span id="ei06-real-boundaries"></span>

## 电力市场的时间与地域

下表重排 EIA《Electric Power Annual 2024》Table 2.5 的2024年年度行，覆盖美国50州及哥伦比亚特区的全部终端用途分类. [^eia25]

| 2024 年终端用途分类 | 销售电量：K MWh |
|---|---:|
| 居民 Residential | 1,482,874 |
| 商业 Commercial | 1,450,941 |
| 工业 Industrial | 1,034,584 |
| 交通 Transportation | 6,983 |
| 全部用途 All Sectors | 3,975,382 |

居民用途占全年售电量 $1,482,874/3,975,382\approx37.301\%$. 这些份额描述终端用途构成.

IEA 将德国供给按风电、太阳能、天然气和煤电等技术或能源来源分类. 研究企业集中度则需按独立控制主体归集：同一企业可持有多种技术，同一技术也可由多家企业供应.

IEA《Electricity 2025》考察2024年11月5–7日及12月11–12日的德国电力供给，展示时段出力、进口和日前价格，并用德国及周边竞价区的剩余负荷与可用可调度容量之比比较紧张程度. [^iea]

研究特定小时的可交付供给，要匹配邻区同一时段的可用出力、本地需求及跨境输电约束. 国境内装机容量与邻国全年发电量都需要据此转换为当前可交付资源.

关系网络可纳入影响本地供给的邻区；计算份额时，分母中的每项数量还需属于同一交易对象、时段与计量口径，并排除重复交付.

<span id="ei06-machinery-branch"></span>

### 工程机械的用途与交期

Census M3 的2026年5月报告记录工程机械制造环节的出货、新订单、未交订单和存货. [^m3]

客户采购还涉及购买新设备、保留现有设备、租赁或延后项目的选择. 判断替代强度需要用途、成本与交付条件；比较租赁和购买时，还需统一使用期限及所得服务.

<span id="ei06-shares-hhi"></span>

## 份额与集中度

令 $x_j\geq0$ 为同一边界内第 $j$ 个独立控制主体的销售额或销售量，且 $X=\sum_jx_j>0$. 本篇采用百分数份额
$s_j=100x_j/X$，并定义平方和指标 $H=\sum_js_j^2$. 本文的 HHI 上限为 10,000. 同一次求和统一使用销售额份额或实物量份额.

将份额从较小主体移向较大主体会提高平方和. 若有 $n$ 个正份额主体，由 $(\sum_js_j)^2\le n\sum_js_j^2$ 得 $H\ge10000/n$，等份额时取等号；全部销售由一个主体控制时，$H=10000$.

以下教学数据假设产品、交易环节、期间与单位相同，各供方独立控制.

| 供方 | 窄边界销售量 | 窄边界份额 | 扩展边界销售量 | 扩展边界份额 |
|---|---:|---:|---:|---:|
| A | 40 | 40% | 40 | 20% |
| B | 35 | 35% | 35 | 17.5% |
| C | 25 | 25% | 25 | 12.5% |
| D | 不纳入 | — | 50 | 25% |
| E | 不纳入 | — | 50 | 25% |
| 合计 | 100 | 100% | 200 | 100% |

窄边界的 $H=40^2+35^2+25^2=3450$；扩展后的 $H=20^2+17.5^2+12.5^2+25^2+25^2=2112.5$. A的销售量不变，分母翻倍使其份额减半.

扩展边界的经济依据是D、E能为该任务提供可比较的替代.

若A、B由同一主体控制，窄边界应合并两者，得到 $H=75^2+25^2=6250$，比独立控制时增加 $2\times40\times35=2800$.

<div data-experiment-slot="lab-ei06"></div>

<span id="ei06-market-power"></span>

## 集中结构与市场力量

提价能力还取决于客户转换、闲置产能、交付条件和供给响应. 少数同质产品卖方在客户容易转单且容量充足时可激烈竞争；供应者众多的市场，在特定地点和交期下也可能只有少数可用选择.

要从结构走向价格与利润，还需解释客户流失、供方扩供、进入时间及交易条件. [EI-03](/zh/notebook/demand-price-elasticity/) 接着研究客户选择怎样随价格及环境改变；[EI-04](/zh/notebook/supply-cost-capacity/) 研究资源怎样转化为可交付供给.

<span id="ei06-exercises"></span>

## 迁移练习

### 用途、技术与控制主体

有人把 EIA 上述四类用途的份额平方求和，称为“美国电力供应商集中度”；另一个人把 IEA 图里的风电、太阳能、天然气、煤电等技术类别占比平方求和，也称为“企业集中度”，并据此解释德国冬日晚间的价格. 请分别指出错在哪里，并保留两份材料真正能回答的内容.

**解析.** EIA 表按美国全年终端用途分类，居民份额约37.301%；IEA 图按特定时段的技术或能源来源分类. 两者均需另行匹配企业控制关系，才能计算供方集中度. 研究德国特定小时的价格，还需相应地域、时段及交易环节的可比数据.

### 交期与共同控制

在三家供方的教学数据中，A、B 实际属于同一主体；D、E 能提供同一用途的产品，但交货需九个月. 研究任务是未来两周必须交付的项目. 怎样处理份额与 HHI？再将任务改为下一年度采购，能否直接采用 2112.5？

**解析.** 两周任务的可行供方为A、B、C，A、B合并后 $H=6250$，条件是给定销售量对应该任务的范围和期间. 下一年度D、E可进入候选，再核用途、运输、客户资格和统计口径. 若扩展成立且沿用给定销售量，同时保留A、B共同控制，$H=37.5^2+12.5^2+25^2+25^2=2812.5$.

[^bea]: EI-S03-BEA-INDUSTRIES. BEA，*Industries*，页面最后修改 2021-02-24；定位：GDP by Industry、Gross Output by Industry、Input-Output Accounts. https://www.bea.gov/resources/learning-center/what-to-know-industries
[^mit]: EI-S02-MIT-L7-2022. Tobias Salz，*Introduction to Empirical Models of Demand*，MIT 14.271 Fall 2022 Lecture 7；定位：slides 8/34–10/34（PDF物理页约18–21），离散选择、outside option与市场大小决定. https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
[^eia25]: EI-S04-EIA-2024. EIA，*Electric Power Annual 2024*；定位：Table 2.5，Annual Totals 的2024年行及表注，2024资料标为final. https://www.eia.gov/electricity/annual/html/epa_02_05.html
[^iea]: EI-S05-IEA-2025. IEA，*Electricity 2025*；定位：印刷pp57–61，p58散点图及图注、p59进出口讨论，相关观察为2024历史事件. https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
[^m3]: EI-S06-M3-202605. U.S. Census Bureau，*Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report*，2026-07-02 10:00 AM EDT，CB 26-104 M3-2 (26)-05；定位：第1页报告身份、第3–4页调查说明、第6–9页Tables 1–4. https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf

## Additional teaching material
## 边界与共同控制的静态计算

教学供方A、B、C销量为40、35、25；扩大边界后加入销量各50的D、E. 各销量采用同一产品、期间与单位，HHI按百分数份额的平方和计算.

| 边界 | 控制主体 | 份额 | HHI |
|---|---|---|---:|
| A、B、C | 相互独立 | 40、35、25 | 3450 |
| 加入D、E | 相互独立 | 20、17.5、12.5、25、25 | 2112.5 |
| A、B、C | A与B共同控制 | 75、25 | 6250 |
| 加入D、E | A与B共同控制 | 37.5、12.5、25、25 | 2812.5 |

扩大边界需要可行替代证据，共同控制需要所有权资料. EIA终端用途表及IEA技术构成图保留各自分类，企业份额另按控制主体归集.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-EI-HHI-01",
    "status": "teaching_assumption",
    "unit": "synthetic same-period sales units",
    "formula": "shares_pct_i=100*sales_i/sum(sales); HHI=sum(shares_pct_i**2)",
    "convention": "percent squared, 0–10000",
    "states": [
      {
        "boundary": "narrow",
        "ownership": "separate",
        "sales": [
          40,
          35,
          25
        ],
        "denominator": 100,
        "shares_pct": [
          40,
          35,
          25
        ],
        "HHI": 3450
      },
      {
        "boundary": "wide",
        "ownership": "separate",
        "sales": [
          40,
          35,
          25,
          50,
          50
        ],
        "denominator": 200,
        "shares_pct": [
          20,
          17.5,
          12.5,
          25,
          25
        ],
        "HHI": 2112.5
      },
      {
        "boundary": "narrow",
        "ownership": "A+B common owner",
        "sales": [
          75,
          25
        ],
        "denominator": 100,
        "shares_pct": [
          75,
          25
        ],
        "HHI": 6250
      },
      {
        "boundary": "wide",
        "ownership": "A+B common owner",
        "sales": [
          75,
          25,
          50,
          50
        ],
        "denominator": 200,
        "shares_pct": [
          37.5,
          12.5,
          25,
          25
        ],
        "HHI": 2812.5
      }
    ],
    "domain": "nonnegative sales, positive total; invalid total rejected",
    "not_inferred": "market boundaries or actual market power",
    "title": "行业边界与共同控制下的份额",
    "anchor": "ei06-shares-hhi",
    "description": "原稿明确的教学构造；与真实行业观测分开.",
    "inputs": {
      "id": "EXP-EI-HHI-01",
      "status": "teaching_assumption",
      "unit": "synthetic same-period sales units",
      "formula": "shares_pct_i=100*sales_i/sum(sales); HHI=sum(shares_pct_i**2)",
      "convention": "percent squared, 0–10000",
      "states": [
        {
          "boundary": "narrow",
          "ownership": "separate",
          "sales": [
            40,
            35,
            25
          ],
          "denominator": 100,
          "shares_pct": [
            40,
            35,
            25
          ],
          "HHI": 3450
        },
        {
          "boundary": "wide",
          "ownership": "separate",
          "sales": [
            40,
            35,
            25,
            50,
            50
          ],
          "denominator": 200,
          "shares_pct": [
            20,
            17.5,
            12.5,
            25,
            25
          ],
          "HHI": 2112.5
        },
        {
          "boundary": "narrow",
          "ownership": "A+B common owner",
          "sales": [
            75,
            25
          ],
          "denominator": 100,
          "shares_pct": [
            75,
            25
          ],
          "HHI": 6250
        },
        {
          "boundary": "wide",
          "ownership": "A+B common owner",
          "sales": [
            75,
            25,
            50,
            50
          ],
          "denominator": 200,
          "shares_pct": [
            37.5,
            12.5,
            25,
            25
          ],
          "HHI": 2812.5
        }
      ],
      "domain": "nonnegative sales, positive total; invalid total rejected",
      "not_inferred": "market boundaries or actual market power"
    },
    "outputs_origin": "原稿shared-inputs.json；本导入保留原值，不执行新数值计算",
    "url": "/notebook/labs/ei-a/interactions.html#ei06"
  }
]
```

## Sources
- [Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf): 离散选择需求模型通过产品集合、外部选项和市场大小定义消费者选择. 销售份额及替代关系随所选产品集合和分母而变化.
- [Industries · BEA Learning Center](https://www.bea.gov/resources/learning-center/what-to-know-industries): 行业总产出衡量生产活动的总额，中间投入是生产中耗用的其他产品与服务，增加值保留本环节新增的部分. 投入产出表进一步追踪行业之间的供货和使用关系，避免把多次中间销售都当作最终新增价值.
- [Electric Power Annual 2024 · Tables 2.5–2.7](https://www.eia.gov/electricity/annual/html/epa_02_05.html): EIA 的售电量、收入和平均零售电价分表列示，并区分居民、商业、工业等用途.2024年居民售电量为1,482,874 K MWh、收入244,367 M 美元，平均价格表列16.48美分/kWh.

核对量、额与平均价要处理单位和四舍五入；年度平均价还含用户构成和计费结构的影响.
- [Electricity 2025 · Supply](https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf): 报告的指定单元讨论欧洲2024年低风、低光时段的电力供应与跨境流动. 发电装机、某个时段可提供的功率、储能可持续多久，是不同的约束；进口也取决于邻近系统及互联能力. 本文的储能和供需参数另列为教学设定.
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告分别列出出货、新订单、未交订单和存货. 本站使用 2026 年 5 月报告及其中 4 月修订列，单位 USD M，数据经过季节调整，未作价格调整. 新订单含取消和修改影响，按出货加未交订单变动构造；这一关系属于统计定义.

## Content relations
```json
[
  {
    "from": "zh-ei06",
    "relation": "part_of",
    "to": "industry-structure",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei06",
    "relation": "uses_method",
    "to": "zh-ei01",
    "reason": "就地确认行业与公司层次，不是整篇先修"
  },
  {
    "from": "zh-ei06",
    "relation": "uses_method",
    "to": "zh-ei02",
    "reason": "核对份额分母的单位、期间与覆盖；正文可就地完成"
  },
  {
    "from": "zh-ei06",
    "relation": "illustrated_by",
    "to": "case-ei-us-power-2024",
    "reason": "用途占比与供方份额不是同一对象"
  },
  {
    "from": "zh-ei06",
    "relation": "illustrated_by",
    "to": "case-ei-de-power-2024",
    "reason": "时段与可交付地域改变分析范围"
  },
  {
    "from": "zh-ei06",
    "relation": "illustrated_by",
    "to": "EXP-EI-HHI-01",
    "reason": "分母和控制主体变更的代数对照"
  },
  {
    "from": "zh-ei06",
    "relation": "supported_by",
    "to": "EI-S02-MIT-L7-2022",
    "reason": "外部选项与潜在购买总体",
    "scope": "slide footers 8/34–10/34: choice, outside option, market-size decision"
  },
  {
    "from": "zh-ei06",
    "relation": "informs",
    "to": "zh-ei03",
    "reason": "提供客户、产品、时点和替代候选；不自动形成必要先修"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 1/10
说明哪些参与者属于同一个市场，以及这种划分如何影响判断.
边界确定后，先看客户怎样使用产品和响应价格.
Next: [需求、客户行为与价格弹性](https://ou-liu-red-sugar.github.io/zh/notebook/demand-price-elasticity/)
