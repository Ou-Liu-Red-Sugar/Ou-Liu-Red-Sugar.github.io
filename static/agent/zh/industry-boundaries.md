# 行业边界、市场划分与竞争结构

这一篇先把这三层分开，再学习怎样计算有明确分母的份额。完成后，你应当能为一个行业问题写出可复核的边界说明，而不是只给它贴上“能源”“制造”或“科技”的标签。

Entry: zh-ei06 | Node: EI-06 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你教授 EI-06《行业边界、市场划分与竞争结构》，采用 2026-09-21-review-2。
读者懂基本数学，不需要从百分数讲起。先询问或采用默认电力分支，
不要把参考目录或本 Prompt 视作你已经读过原文。

必须实际读取：
1. Tobias Salz，MIT 14.271 Fall 2022 Lecture 7：
   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
   读页脚 slides 8/34–10/34（PDF物理页约18–21），包含产品选择、
   outside option，以及“谁是所有可能购买者”的市场大小决定。
2. BEA Industries 正文：
   https://www.bea.gov/resources/learning-center/what-to-know-industries
   GDP by Industry、Gross Output、Input-Output Accounts。
3. 电力默认分支：EIA Table 2.5年度行及全部表注：
   https://www.eia.gov/electricity/annual/html/epa_02_05.html
   IEA Electricity 2025 PDF pp57–61首段：
   https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
4. 选择工程机械分支时，直接读取 Census 固定 May 2026 Full Report：
   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
   核第1页版次与发布日期、第3–4页调查说明、第6–9页工程机械行和脚注。
   如果该固定原件未取得，不得用滚动“current”文件假装是同一版。

逐项记录实际题名、版次、页/节和取得范围，再用一两句话说明哪个内容
影响边界选择。所有当前必读项取得后再实质教学；同会话已经完整读取的
相同版本可复用。缺原文时用已核等价入口；仍缺则明确缺哪个单元，
不能声称完成相关带读。

诊断任务：给读者EIA四类用途表，让他写出分子、分母、单位和不能推出的
一项公司结论。若已掌握，直接进入边界/主体双重变式，不逐个询问算术。
沿“用途—可行选择—统计单位—分母—份额”连续推进；解释外部选项
不是一个卖方。要求先判断D/E是否应纳入，再显示HHI，禁止由结果倒选边界。
最后完成本篇练习二；必须同时处理九个月交期、销售期间和共同控制。
通过标准：能写出边界备忘录，分别解释3450、2112.5、6250、2812.5来自
哪个条件变化，并说明尚未识别价格影响。不得以HHI给出现实法律认定。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei06",
  "node_id": "EI-06",
  "content_version": "2026-09-21-review-2",
  "export_mode": "public",
  "audience": "微积分、基本概率；不要求产业组织先修",
  "learning_task": "这一篇先把这三层分开，再学习怎样计算有明确分母的份额。完成后，你应当能为一个行业问题写出可复核的边界说明，而不是只给它贴上“能源”“制造”或“科技”的标签。",
  "body_source": "body_markdown",
  "prompt": "你教授 EI-06《行业边界、市场划分与竞争结构》，采用 2026-09-21-review-2。\n读者懂基本数学，不需要从百分数讲起。先询问或采用默认电力分支，\n不要把参考目录或本 Prompt 视作你已经读过原文。\n\n必须实际读取：\n1. Tobias Salz，MIT 14.271 Fall 2022 Lecture 7：\n   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf\n   读页脚 slides 8/34–10/34（PDF物理页约18–21），包含产品选择、\n   outside option，以及“谁是所有可能购买者”的市场大小决定。\n2. BEA Industries 正文：\n   https://www.bea.gov/resources/learning-center/what-to-know-industries\n   GDP by Industry、Gross Output、Input-Output Accounts。\n3. 电力默认分支：EIA Table 2.5年度行及全部表注：\n   https://www.eia.gov/electricity/annual/html/epa_02_05.html\n   IEA Electricity 2025 PDF pp57–61首段：\n   https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf\n4. 选择工程机械分支时，直接读取 Census 固定 May 2026 Full Report：\n   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf\n   核第1页版次与发布日期、第3–4页调查说明、第6–9页工程机械行和脚注。\n   如果该固定原件未取得，不得用滚动“current”文件假装是同一版。\n\n逐项记录实际题名、版次、页/节和取得范围，再用一两句话说明哪个内容\n影响边界选择。所有当前必读项取得后再实质教学；同会话已经完整读取的\n相同版本可复用。缺原文时用已核等价入口；仍缺则明确缺哪个单元，\n不能声称完成相关带读。\n\n诊断任务：给读者EIA四类用途表，让他写出分子、分母、单位和不能推出的\n一项公司结论。若已掌握，直接进入边界/主体双重变式，不逐个询问算术。\n沿“用途—可行选择—统计单位—分母—份额”连续推进；解释外部选项\n不是一个卖方。要求先判断D/E是否应纳入，再显示HHI，禁止由结果倒选边界。\n最后完成本篇练习二；必须同时处理九个月交期、销售期间和共同控制。\n通过标准：能写出边界备忘录，分别解释3450、2112.5、6250、2812.5来自\n哪个条件变化，并说明尚未识别价格影响。不得以HHI给出现实法律认定。",
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
  "branch_selection": "使用当前分支完整必读单元，共同材料保留，行业部分随选择替换；原Prompt的默认诊断属于默认分支。跨材料综合练习采用comparison所列全部材料，研究延伸仅在选择后启用。",
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
  "reading_protocol": "1. **确认当前学习范围。** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容。识别必读材料，选读材料只有被采用时才转成对应问题的必读。\n2. **实际获取。** 用浏览/文件读取工具打开指定 URL 或随包文件。核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口。\n3. **完整读取所需单元。** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注。PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件。不能只看搜索命中的几行。\n4. **形成简短内容对应。** 每项记录实际位置、读到的关键设定和它支持哪一步教学。例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”。后半句若为本站推论须标为推论。\n5. **满足后才开始该范围的实质教学。** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解。引用跟着对应命题或计算，不在末尾堆书名。\n6. **读取失败时自动处理缺口。** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤。等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围。仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇。\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载。它不能从技术上保证理解，但能让来源与使用之间可检查。",
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
        "unit": "million USD",
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
    "specification_markdown": "## 附：HTML 交互与静态等价合同\n\n**组件 `EI06-boundary`。** 默认显示真实材料，不显示可拖动企业份额。原表表头、年度、单位、用途分类及表注摘要常驻。切换 `power-annual / power-hourly / machinery` 只改变材料和边界说明；不把不同模式的数字叠成可比序列。小时材料显示有标注的结构邻接表，不伪造原报告逐小时数据。\n\n**组件 `EI06-hhi`。** 独立标为“教学变式”。输入 `boundary=narrow|wide`、`combineAB=false|true`。原始数组固定 `[40,35,25,50,50]`，前两项是否合并在筛选后处理；分母为当前纳入量之和。输出总量、所有主体的百分数份额、HHI、与窄边界独立主体基准之差。默认 `narrow,false`，输出 `100; [40,35,25]; 3450`。四状态验收值依次为：\n\n| boundary | combineAB | 份额 | HHI |\n|---|---|---|---:|\n| narrow | false | 40,35,25 | 3450 |\n| wide | false | 20,17.5,12.5,25,25 | 2112.5 |\n| narrow | true | 75,25 | 6250 |\n| wide | true | 37.5,12.5,25,25 | 2812.5 |\n\n组件不接受缺失数据自动补零；扩展边界按钮的说明是“在假设替代证据成立时查看算术”，不是“选择正确市场”。缺少同口径所有权资料的真实模式，HHI 显示“未计算”，而非 0。\n\n**结构图边的含义。** `用途 → 候选方案` 表示按用途寻找候选；`地点/时点/交付条件 → 可行方案` 表示筛除不可实施选择；`同口径交易数据＋控制主体 → 份额` 表示统计聚合；`份额 → HHI` 才是本篇已给公式的计算。这些边不证明现实中的因果效应。\n\n无 JavaScript 时，正文两张表、四状态验收表和以上文字邻接表就是静态等价。控件使用带文字的 radio/checkbox，键盘可操作；计算结果用 `output` 与 `aria-live=polite`，不靠颜色区分事实与假设。窄屏允许逐行查看，打印展开所有表注。",
    "outputs_origin": "原稿共享输入与默认结果；数字身份保持observed或teaching_assumption"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
我们做行业分析，首先需要说明自己到底在研究什么。统计表里的一行、公司的一个业务分部，以及客户购买时比较的几种方案，可能不是同一个集合。它们没有谁天然更正确，关键在于各自负责什么：统计分类帮助汇总生产活动，公司分部帮助理解企业怎样管理业务，竞争边界则要说明客户可以转向谁。

这一篇先把这三层分开，再学习怎样计算有明确分母的份额。完成后，你应当能为一个行业问题写出可复核的边界说明，而不是只给它贴上“能源”“制造”或“科技”的标签。

<span id="ei06-customer-boundaries"></span>

## 一、从生产活动走到客户的选择集合

BEA 的行业资料通常沿 NAICS 分类汇总经济活动；其“行业增加值”和“总产出”又是两个不同指标。这里的分类是统计工作的起点，不等于已经回答了每一种产品的竞争关系。[^bea]

例如，我们可以研究“美国工程机械制造业这个月的出货金额”，也可以研究“一个承包商为下个月的施工任务购买哪台设备”。前者需要稳定的统计总体，后者需要知道施工用途、设备能力、运输、维修及交付期限。以下采购情境是教学假设：一台设备即使价格很低，但在项目结束后才交货，就不属于这个项目能够采用的方案；同一台设备对下一年度项目又可能成为候选。边界随问题变化，不是因为我们可以任意挑选竞争者，而是因为可行选择确实改变了。

**定义。** 对一项给定研究，**市场边界说明**至少指明产品或用途、客户集合、可交付地域、交易环节、期间及计量单位。这里的“市场”是经济分析中的工作边界，不自动构成某个司法辖区的法律市场认定。

我们可以将客户 $i$ 在时点 $t$ 的可选方案记为 $\mathcal J_{it}$，并将不购买、暂缓或保留现有方案记为 $0$。一种简化的选择表达是
$j^*_{it}\in\operatorname{argmax}_{j\in\mathcal J_{it}\cup\{0\}}U_{ijt}$。它没有告诉我们效用函数已经被估出来，只是把分析职责写清楚：哪些方案可行，以及客户怎样比较价格、性能和其他条件。MIT 需求讲义的离散选择设置保留了这个外部选项，并要求研究者明确潜在购买者的总体。[^mit]

注意，外部选项不是凭空补出一家竞争企业。假设某年有 200 个潜在购买单位，其中 100 个实际购买了三个厂商的产品，另外 100 个延期。三个厂商在“已完成购买”中的份额，与它们在“潜在购买单位”中的采用比例不同。延期者也不是由一家叫“不购买”的公司统一控制。前者可以服务于卖方销售结构分析，后者帮助理解市场渗透和购买时点；不能把两种分母混在同一个集中度计算里。

<span id="ei06-real-boundaries"></span>

## 二、真实材料：同一个电力主题有几种不同边界

先读一小段官方表，而不是先画竞争图。下面重排 EIA《Electric Power Annual 2024》Table 2.5 的 2024 年年度行，保留所有终端用途分类；不是全部年份的原表。地区为美国 50 州及哥伦比亚特区，单位为**千 MWh**，对象是向最终客户销售的电量。[^eia25]

| 2024 年终端用途分类 | 销售电量：千 MWh |
|---|---:|
| 居民 Residential | 1,482,874 |
| 商业 Commercial | 1,450,941 |
| 工业 Industrial | 1,034,584 |
| 交通 Transportation | 6,983 |
| 全部用途 All Sectors | 3,975,382 |

我们可以计算居民用途占比：
$1,482,874/3,975,382=37.3014\%$。这个结果说明终端用途构成，不说明哪家企业拥有多少市场份额。四个用途分类不是四家供应商，居民也不是一种发电技术。只要先写清“分子是谁、分母是谁”，这种误读就很容易发现。


同一个错误还会出现在**技术占比**上。IEA 的 2024 年德国供给图把风电、太阳能、天然气、煤电等按发电来源或技术类别展示；这些类别不是独立控制主体。多家公司可以同时拥有风电，一家公司也可以同时拥有天然气、风电或其他资产。于是，即使我们恰好拿到了各技术的发电量占比，把这些占比平方求和也只是“技术构成”的平方和，不能自动改名为企业 HHI。要计算企业集中度，必须把分子重新映射到同一交易边界内的独立控制主体，并保持分母、期间和单位一致。[^iea]

现在把问题换成“某个冬日晚间，德国及相邻地区能够提供多少电力”。IEA《Electricity 2025》的历史案例考察 2024 年 11 月 5–7 日和 12 月 11–12 日，图中同时呈现时段出力、进口和日前价格。它还用德国及周边竞价区的剩余负荷与可用可调度容量比值比较供给紧张程度。[^iea]

这个材料改变了我们需要的边界。美国全年居民售电表回答不了德国某小时的供给条件；德国国境内的装机总和也没有包含所有跨境可交付资源。反过来，发现邻国有发电能力，还不能把邻国全年全部产量直接加入该小时的可用供给。我们需要同一时段的剩余能力和可传输条件。

这里有两个不同动作。**扩展分析网络**是将可能影响本地供应的邻区纳入观察；**扩大某个份额的统计分母**则要求重新定义计量对象，并确认纳入的量可比较、没有重复计算。前一个动作不自动许可后一个动作。这也是为什么行业关系图可以很广，而某项具体指标的分母仍然必须很窄、很明确。

<span id="ei06-machinery-branch"></span>

### 对照分支：工程机械不是“把电力换成设备”

Census M3 的 2026 年 5 月报告分别列“工程机械”的出货、新订单、未交订单和存货。这是制造环节的资料，不是一张承包商最终采购或设备使用时数表。[^m3]

对于制造出货问题，统计分类足以定义起点；对于客户选择问题，我们还要比较实际设备用途和采购方案。可以将“购买新设备、使用已有设备、租用适合设备或延后项目”列为待调查的候选，不能仅凭这张统计表断言它们在现实中的替代强度。租赁服务的交易额也不应未经转换，就与设备销售额相加来计算厂商份额：两者可能是在不同时间出售同一设备的不同权利。

因此，电力分支强调**同一时段与网络约束**，工程机械分支强调**用途、交付与购买时点**。共同概念是客户的可行替代，而不是强行让两行业使用相同的数量单位。

<span id="ei06-shares-hhi"></span>

## 三、份额与集中度：先固定分母，再做算术

令 $x_j\geq0$ 为同一边界内第 $j$ 个独立控制主体的销售额或销售量，且 $X=\sum_jx_j>0$。本篇采用百分数份额
$s_j=100x_j/X$，并定义平方和指标 $H=\sum_js_j^2$。这就是本文采用的 HHI 数值约定：上限为 10,000，而不是 1。销售额和实物量都可能有用途，但不能在同一次求和中混用。

平方的作用可以直接看出来。在份额总和固定时，将份额从一个较小主体移向较大主体，会使平方和增加。若有 $n$ 个正份额主体，由
$(\sum_js_j)^2\leq n\sum_js_j^2$，得到 $H\geq10000/n$，且等份额时取等号；一个主体占全部销售时为 10,000。这解释了它怎样压缩“数量与不均匀程度”，却没有赋予它价格、成本或利润方面的额外信息。

下面是**纯教学变式**，不是任何真实行业的企业份额。所有数字假设已经满足相同产品、交易环节、期间和单位，并且各供方独立控制。

| 供方 | 窄边界销售量 | 窄边界份额 | 扩展边界销售量 | 扩展边界份额 |
|---|---:|---:|---:|---:|
| A | 40 | 40% | 40 | 20% |
| B | 35 | 35% | 35 | 17.5% |
| C | 25 | 25% | 25 | 12.5% |
| D | 不纳入 | — | 50 | 25% |
| E | 不纳入 | — | 50 | 25% |
| 合计 | 100 | 100% | 200 | 100% |

窄边界下，$H=40^2+35^2+25^2=3450$。扩展后，
$H=20^2+17.5^2+12.5^2+25^2+25^2=2112.5$。A 的销售量没有改变，份额却减半，原因完全在于分母改变了。

这两个结果都算对，并不意味着两个边界同样适合研究。只有当 D、E 的产品确实属于该任务的可比较替代，扩展才获得经济依据。不能先喜欢较低的 HHI，再寻找把它算低的分母。

控制主体也同样重要。仍在窄边界内，若教学上假设 A、B 由同一主体控制，合并其份额后平方和为 $75^2+25^2=6250$，比原值增加 $2\times40\times35=2800$。这是统计单位改变的代数结果，不是对现实并购合法性或价格影响的判断。

<div data-experiment-slot="lab-ei06"></div>

<span id="ei06-market-power"></span>

## 四、集中结构为什么不等于市场力量

假设我们已经正确算出了 HHI，下一步仍然不能直接写“因此提价能力很强”。在一个明确标注的理论对照中，少数同质产品卖方可能因客户容易转单、闲置产能充足而竞争激烈；另一个有很多供应者的市场，也可能在某个地点、时点或交付条件下只有少数可行选择。这些例子不是现实行业结论，而是说明：销售结构没有包含全部选择和约束。

要从结构走向价格与利润，还需解释客户流失、供方扩供、进入时间及交易条件。[EI-03](/zh/notebook/demand-price-elasticity/) 接着研究客户选择怎样随价格及环境改变；[EI-04](/zh/notebook/supply-cost-capacity/) 研究资源怎样转化为可交付供给。到那时，集中度才是机制分析的一项输入，而不是它的替代品。

这篇完成的分析产出可以写成一段连贯的话：

> 我研究的是指定客户在指定地域与期间，对某类可交付产品的选择；统计资料覆盖某个生产或交易环节。当前份额使用同口径销售作为分母；潜在但尚未验证的替代单列。关于价格影响，仍需客户转换和供方响应证据。

这不是要求你每次都写模板，而是使别人能够知道你的数字究竟比较了什么。

<span id="ei06-exercises"></span>

## 五、带解析的练习

### 练习一：读懂同一张表

有人把 EIA 上述四类用途的份额平方求和，称为“美国电力供应商集中度”；另一个人把 IEA 图里的风电、太阳能、天然气、煤电等技术类别占比平方求和，也称为“企业集中度”，并据此解释德国冬日晚间的价格。请分别指出错在哪里，并保留两份材料真正能回答的内容。

**解析。** EIA 四类数据分的是最终用途，分母是美国全年售电量。居民 37.3014% 是用途构成，不是供方份额；平方和至多描述该四类用途的构成集中程度。IEA 的风电、太阳能、天然气、煤电等则是技术或能源来源类别，也不是独立控制主体：同一技术可以由多家公司持有，同一家公司也可以跨技术持有资产。两种平方和都没有给出企业控制关系。德国特定小时又改变了地域、时间和交易环节，因此合适的改写是：“EIA 表显示 2024 年美国最终客户售电的用途构成；IEA 图展示特定时段的供给来源及系统条件。若要讨论企业集中度，需另外取得同一市场边界内按独立控制主体归集的可比销售或交易数据。”

### 练习二：改变边界，还是改变主体？

在三家供方的教学数据中，A、B 实际属于同一主体；D、E 能提供同一用途的产品，但交货需九个月。研究任务是未来两周必须交付的项目。怎样处理份额与 HHI？再将任务改为下一年度采购，能否直接采用 2112.5？

**解析。** 两周任务暂不把九个月后可交付的 D、E 纳入当前可行供方，但 A、B 应按同一控制主体合计。因此按给定教学销售量算 $H=6250$。这仍以这些销售量确实对应两周任务为条件；如果销售量是全年的，就必须重新取数，不能照搬。下一年度任务使 D、E 具备候选资格，却仍需核用途、运输、客户资格和实际销售口径。即使扩边界成立，也不能用 2112.5，因为那个值假设 A、B 独立。沿同一组教学销售量并合并 A、B，结果应为 $37.5^2+12.5^2+25^2+25^2=2812.5$。两种变化必须同时落实。

[^bea]: EI-S03-BEA-INDUSTRIES。BEA，Industries，页面标示最后修改 2021-02-24；读取日 2026-09-21。定位：GDP by Industry、Gross Output by Industry、Input-Output Accounts。https://www.bea.gov/resources/learning-center/what-to-know-industries
[^mit]: EI-S02-MIT-L7-2022。Tobias Salz，*Introduction to Empirical Models of Demand*，MIT 14.271 Fall 2022 Lecture 7，页脚 slides 8/34–10/34（PDF物理页约18–21），包含离散选择、outside option 与市场大小决定。本篇不采用该模型的估计数值。https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
[^eia25]: EI-S04-EIA-2024。EIA，Electric Power Annual 2024，Table 2.5，Annual Totals 的2024年行及全部表注。2024资料在读取页面标为final；本摘表保留全部用途列，转为行展示。https://www.eia.gov/electricity/annual/html/epa_02_05.html
[^iea]: EI-S05-IEA-2025。IEA，Electricity 2025，印刷pp57–61首段；p58散点图及图注、p59进出口讨论。采用2024历史事件，不采用报告预测作为实现值。https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
[^m3]: EI-S06-M3-202605。U.S. Census Bureau，*Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report*，2026-07-02 10:00 AM EDT发布，CB 26-104 M3-2 (26)-05。固定报告第1页核身份，第3–4页核调查说明，第6–9页为Tables 1–4。https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf


## Additional teaching material
## 附：HTML 交互与静态等价合同

**组件 `EI06-boundary`。** 默认显示真实材料，不显示可拖动企业份额。原表表头、年度、单位、用途分类及表注摘要常驻。切换 `power-annual / power-hourly / machinery` 只改变材料和边界说明；不把不同模式的数字叠成可比序列。小时材料显示有标注的结构邻接表，不伪造原报告逐小时数据。

**组件 `EI06-hhi`。** 独立标为“教学变式”。输入 `boundary=narrow|wide`、`combineAB=false|true`。原始数组固定 `[40,35,25,50,50]`，前两项是否合并在筛选后处理；分母为当前纳入量之和。输出总量、所有主体的百分数份额、HHI、与窄边界独立主体基准之差。默认 `narrow,false`，输出 `100; [40,35,25]; 3450`。四状态验收值依次为：

| boundary | combineAB | 份额 | HHI |
|---|---|---|---:|
| narrow | false | 40,35,25 | 3450 |
| wide | false | 20,17.5,12.5,25,25 | 2112.5 |
| narrow | true | 75,25 | 6250 |
| wide | true | 37.5,12.5,25,25 | 2812.5 |

组件不接受缺失数据自动补零；扩展边界按钮的说明是“在假设替代证据成立时查看算术”，不是“选择正确市场”。缺少同口径所有权资料的真实模式，HHI 显示“未计算”，而非 0。

**结构图边的含义。** `用途 → 候选方案` 表示按用途寻找候选；`地点/时点/交付条件 → 可行方案` 表示筛除不可实施选择；`同口径交易数据＋控制主体 → 份额` 表示统计聚合；`份额 → HHI` 才是本篇已给公式的计算。这些边不证明现实中的因果效应。

无 JavaScript 时，正文两张表、四状态验收表和以上文字邻接表就是静态等价。控件使用带文字的 radio/checkbox，键盘可操作；计算结果用 `output` 与 `aria-live=polite`，不靠颜色区分事实与假设。窄屏允许逐行查看，打印展开所有表注。

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
    "description": "原稿明确的教学构造；与真实行业观测分开。",
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
- [Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf): 离散选择需求模型需要先界定消费者能选择的产品集合、外部选项和市场大小。相同的销售数字，放到不同选择集合和分母中，会给出不同的份额与替代关系。这里采用模型的对象与边界，不采用讲义中的估计值。
- [Industries · BEA Learning Center](https://www.bea.gov/resources/learning-center/what-to-know-industries): 行业总产出衡量生产活动的总额，中间投入是生产中耗用的其他产品与服务，增加值保留本环节新增的部分。投入产出表进一步追踪行业之间的供货和使用关系，避免把多次中间销售都当作最终新增价值。
- [Electric Power Annual 2024 · Tables 2.5–2.7](https://www.eia.gov/electricity/annual/html/epa_02_05.html): EIA 的售电量、收入和平均零售电价分表列示，并区分居民、商业、工业等用途。2024年居民售电量为1,482,874千MWh、收入244,367百万美元，平均价格表列16.48美分/kWh。

核对量、额与平均价要处理单位和四舍五入；年度平均价还含用户构成和计费结构的影响。
- [Electricity 2025 · Supply](https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf): 报告的指定单元讨论欧洲2024年低风、低光时段的电力供应与跨境流动。发电装机、某个时段可提供的功率、储能可持续多久，是不同的约束；进口也取决于邻近系统及互联能力。本文的储能和供需参数另列为教学设定。
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告把出货、新订单、未交订单和存货分开，分别描述已交付活动、期间订单流和期末余额。本文使用固定的2026年5月报告及其中4月比较列。

新订单按净额口径使用；不能再次机械扣除取消量。未交订单与月出货之比也不是每位客户实际等待时间。

EI-B 本批采用：工程机械固定4月修订/5月初值四表；美元百万、季调、未作价格调整。与CAT公司渠道范围不对账。 季调新订单 N=S+ΔB 为数据产品定义，详见 EIBC-S07M；381不是三个独立需求观测的互证。

本批采用：April revised / May preliminary；SA百万美元；381定义性订单桥、存货+66分开。

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
说明哪些参与者属于同一个市场，以及这种划分如何影响判断。
边界确定后，先看客户怎样使用产品和响应价格。
Next: [需求、客户行为与价格弹性](https://ou-liu-red-sugar.github.io/zh/notebook/demand-price-elasticity/)
