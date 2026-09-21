# 经济与行业数据的口径

一个数列至少要说明**测量对象、期间、单位、覆盖和版本**。这不是给分析添加手续，而是在确定两个数字是否回答同一个问题。统计口径确认集中在本页；哪些指标值得选、怎样权衡证据，留给EI-15。

Entry: zh-ei02 | Node: EI-02 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
教授EI-02时只处理当前统计疑点，不强凑完整课。
先实际读取所涉原表和表注：
EIA Tables2.5–2.7：
https://www.eia.gov/electricity/annual/html/epa_02_05.html
https://www.eia.gov/electricity/annual/html/epa_02_06.html
https://www.eia.gov/electricity/annual/html/epa_02_07.html
制造材料直接读取Census May2026固定期次：
https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
核第1页版次和发布日期、第3–4页定义、第6–9页表头/脚注；
固定原件未取得时明确报告缺口，不以滚动“current”报告替代。
涉及IEA图时读：
https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
pp57–61首段并看原图两个纵轴。

先记实际取得范围和版本，再让读者修复本页的混合图。
缺少所需正文/表注则说明具体缺口，不能先凭记忆补完再宣称已读。
同会话已经完整取得的相同版本可复用。
反馈必须分别落在对象、单位、频率、存流量和版本上。
要求读者从单位抵消重建16.4792828，不只背乘100；
季调不等于实际、平均价不等于边际价、归一化不修复对象差异。
通过标准：修好的图能明确回答一个有限问题，同时指出尚不能回答什么。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei02",
  "node_id": "EI-02",
  "content_version": "2026-09-21-review-2",
  "export_mode": "public",
  "audience": "具有足够数学背景的高年级本科至研究生",
  "learning_task": "一个数列至少要说明**测量对象、期间、单位、覆盖和版本**。这不是给分析添加手续，而是在确定两个数字是否回答同一个问题。统计口径确认集中在本页；哪些指标值得选、怎样权衡证据，留给EI-15。",
  "body_source": "body_markdown",
  "prompt": "教授EI-02时只处理当前统计疑点，不强凑完整课。\n先实际读取所涉原表和表注：\nEIA Tables2.5–2.7：\nhttps://www.eia.gov/electricity/annual/html/epa_02_05.html\nhttps://www.eia.gov/electricity/annual/html/epa_02_06.html\nhttps://www.eia.gov/electricity/annual/html/epa_02_07.html\n制造材料直接读取Census May2026固定期次：\nhttps://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf\n核第1页版次和发布日期、第3–4页定义、第6–9页表头/脚注；\n固定原件未取得时明确报告缺口，不以滚动“current”报告替代。\n涉及IEA图时读：\nhttps://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf\npp57–61首段并看原图两个纵轴。\n\n先记实际取得范围和版本，再让读者修复本页的混合图。\n缺少所需正文/表注则说明具体缺口，不能先凭记忆补完再宣称已读。\n同会话已经完整取得的相同版本可复用。\n反馈必须分别落在对象、单位、频率、存流量和版本上。\n要求读者从单位抵消重建16.4792828，不只背乘100；\n季调不等于实际、平均价不等于边际价、归一化不修复对象差异。\n通过标准：修好的图能明确回答一个有限问题，同时指出尚不能回答什么。",
  "selected_branch": "eia_units",
  "common_required_readings": [],
  "required_readings": [
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
      "id": "EI-S04-EIA-2024-T26",
      "source_id": "EI-S04-EIA-2024",
      "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "with data for2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
        "scope": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
        "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
      },
      "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
      "fallback_source_ids": [],
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html"
    },
    {
      "id": "EI-S04-EIA-2024-T27",
      "source_id": "EI-S04-EIA-2024",
      "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "with data for2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
        "scope": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
        "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
      },
      "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
      "fallback_source_ids": [],
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html"
    }
  ],
  "required_readings_by_branch": {
    "eia_units": [
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
        "id": "EI-S04-EIA-2024-T26",
        "source_id": "EI-S04-EIA-2024",
        "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "version": "with data for2024",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
          "scope": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
          "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
        },
        "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
        "fallback_source_ids": [],
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html"
      },
      {
        "id": "EI-S04-EIA-2024-T27",
        "source_id": "EI-S04-EIA-2024",
        "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "version": "with data for2024",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
          "scope": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
          "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
        },
        "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
        "fallback_source_ids": [],
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html"
      }
    ],
    "manufacturing": [
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
    ],
    "electricity_event": [
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
    "comparison": [
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
        "id": "EI-S04-EIA-2024-T26",
        "source_id": "EI-S04-EIA-2024",
        "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "version": "with data for2024",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
          "scope": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
          "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
        },
        "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
        "fallback_source_ids": [],
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html"
      },
      {
        "id": "EI-S04-EIA-2024-T27",
        "source_id": "EI-S04-EIA-2024",
        "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "version": "with data for2024",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
          "scope": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
          "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
        },
        "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
        "fallback_source_ids": [],
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html"
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
      "for_branch": "manufacturing",
      "required_when_selected": true
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
      "fallback_source_ids": [],
      "for_branch": "electricity_event",
      "required_when_selected": true
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
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_05.html",
      "for_branch": "comparison",
      "required_when_selected": true
    },
    {
      "id": "EI-S04-EIA-2024-T26",
      "source_id": "EI-S04-EIA-2024",
      "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "with data for2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
        "scope": "Table 2.6：Annual Totals的2023/2024居民列、单位及全部表注",
        "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
      },
      "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
      "fallback_source_ids": [],
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_06.html",
      "for_branch": "comparison",
      "required_when_selected": true
    },
    {
      "id": "EI-S04-EIA-2024-T27",
      "source_id": "EI-S04-EIA-2024",
      "title": "Electric Power Annual 2024 · Tables 2.5–2.7",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "with data for2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
        "scope": "Table 2.7：Annual Totals的2023/2024居民列、单位及全部表注",
        "purpose": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性"
      },
      "supports": "核对售电量、收入、公布均价、覆盖和账单期间；不据两期变化识别需求弹性",
      "fallback_source_ids": [],
      "uri": "https://www.eia.gov/electricity/annual/html/epa_02_07.html",
      "for_branch": "comparison",
      "required_when_selected": true
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
      "fallback_source_ids": [],
      "for_branch": "comparison",
      "required_when_selected": true
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
      "fallback_source_ids": [],
      "for_branch": "comparison",
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
      }
    ],
    "experiments": [],
    "specification_markdown": "## 交互与静态等价规格\n**组件`EI02-metadata-card`。** 输入不是随意改数字的滑杆，而是选择三个已经核定的材料卡。字段固定为：\n`object, geography, unit, frequency, stock_or_flow, seasonal_adjustment,\nprice_adjustment, period, released_at, vintage, retrieval_status`。\n不知道的字段显示`未取得/未核定`，不猜默认值；只有报告年份的IEA材料不补造发布日期日时分。\n\n卡片允许在“原值／说明”之间切换；EIA另显示上述单位抵消式与16.4792828结果。没有匹配价格指数则禁用“实际增长”；没有对应频率的两期数据则禁用该增速；不以插值补缺期。版本冲突卡只显示已核5月原页记录，不将7月文本作为同版附件。\n\n静态等价为本页口径表、换算式与版本说明。键盘切换保留文本字段；打印展开来源与状态，不以警告颜色替代说明。",
    "outputs_origin": "原稿共享输入与默认结果；数字身份保持observed或teaching_assumption"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
一个数列至少要说明**测量对象、期间、单位、覆盖和版本**。这不是给分析添加手续，而是在确定两个数字是否回答同一个问题。统计口径确认集中在本页；哪些指标值得选、怎样权衡证据，留给EI-15。

<span id="ei02-definitions"></span>

## 紧凑定义

**水平**是某期或某时点的量；**增速**比较两个同口径水平。若基数为正，$g=x_t/x_{t-k}-1$。同比与环比改变比较间隔，不能只看“增长”两个字。存量与期间流量的区别见[EI-01](/zh/notebook/economic-activities/)。

**名义金额**受数量、价格和组成共同影响；**实际量或数量指数**尝试按指定统计方法排除价格影响。对于单一产品、可比质量且价格与数量确实匹配的教学例子，收入增10%、单价增5%对应数量增长
$1.10/1.05-1=4.7619\%$，不是严格的5%。多产品总量必须按合适的权重与统计方法处理，不能拿任意价格指数除一下便称“实际”。

**季节调整**处理重复出现的季节模式，不等于扣除通胀。**初值、修订值和最终值**描述一份资料的发布状态，不直接代表估计不存在误差。材料期是数据所描述的时间，发布日期是外界首次可取得这一版的时间，读取日是本次实际取得的时间；三者不能互换。

**历史值与预测值**按所用原件标记。即使后来走过了预测年份，也不能把旧报告中的预测自动改名为实绩。新的实绩资料是另一个来源版本。

<span id="ei02-material-scopes"></span>

## 三份材料各自测量什么

下表是本批案例的口径摘记，不是三套序列可以拼接的许可。

| 固定材料 | 对象与单位 | 时间与状态 | 必须保留的区别 |
|---|---|---|---|
| EIA年报2024，Tables2.5–2.7居民列 | 千MWh、百万美元、美分/kWh | 2023/2024年度；原页标final | 最终客户售电及收入，不是同月发电 |
| Census M3 May2026 | 制造出货/订单/存货，百万美元 | 2026-07-02发布；5月p、4月r | 季调而未扣价格；新订单已扣取消 |
| IEA Electricity2025，pp57–61首段 | 2024特定时段的功率与日前价格等 | 2025报告中的历史案例 | 功率GW与电量GWh、小时与年均分开 |

EIA表注指出账单累计期间与自然月发电记录存在差别；Census表注区分期间出货/新订单与期末未交订单/存货。它们不是通用的“销量”四个写法。[^eia][^m3] IEA的事件图有不同单位的纵轴，不能把价格尖峰的高度当作功率变化幅度。[^iea]

<span id="ei02-units"></span>

## 一个单位核查：收入／电量为什么要乘100

EIA 2024居民收入为244,367**百万美元**，电量为1,482,874**千MWh**。因为 $1\ \mathrm{MWh}=1000\ \mathrm{kWh}$，所以电量的原始数值同样对应百万kWh。先相除得到美元/kWh，再乘100变为美分/kWh：

\[
\frac{244367\times10^6\ \mathrm{USD}}
{1482874\times10^6\ \mathrm{kWh}}
\times100\ \mathrm{cent/USD}
=16.4792828\ \mathrm{cent/kWh}.
\]

这是平均收入／电量的复算，与公布16.48相符；不是逐客户边际电价，也不是需求弹性。完整经济解释见[EI-03](/zh/notebook/demand-price-elasticity/)。[^eia]

<div data-experiment-slot="lab-ei02"></div>

<span id="ei02-vintages"></span>

## 版本也是输入的一部分

Census 的 May 2026 固定发布版给了一个很干净的版本例子：报告身份是 **May 2026**，发布时间是 **2026-07-02 10:00 AM EDT**；同一版里5月标为初值p，4月标为修订值r。若我们的研究问题是“2026-07-02这次发布能够告诉我们什么”，就应固定这一版的表值和脚注。以后出现更新版时，可以建立新的资料快照，但不能把后来修订的数值静默写回，再声称它们就是当日已知信息。[^m3]

还要把“表格单元格能够精确读取”和“总体估计误差已经量化”分开。该M3报告说明其调查面板**不是概率抽样**，因此不能据此计算通常意义上的抽样误差。这并不妨碍我们精确记录Tables 1–4中工程机械这一行的公布数字；它限制的是对调查统计不确定性的进一步推断。数字抄得很准，不等于抽样设计的不确定性已经被消除。

<span id="ei02-exercises"></span>

## 修复一张混合图：练习与解析

图中把“2024美国居民年均电价16.48美分/kWh”“2026年5月工程机械出货4,498百万美元”和“同月末未交订单11,595百万美元”画在同一纵轴，称作行业需求比较；作者又说季调出货增长就是实际产量增长。请改成一份可以使用的材料。

**解析。** 三个水平的单位和对象不同，同轴高度没有可解释的比较意义。应分别展示售电量价表和机械订单桥；在机械面板内，出货是期间流量、未交订单是期末余额，即使同为美元，也要分别标出职责。季调并未消除价格或产品组合变化，4,498不能直接变成设备台数。若进一步比较各自增速，也要取得同一频率、同一版本和可比基期；仅将三条线都归一到100，仍不能消除经济对象的差异。修复后，材料可以支持口径核查及局部过程解释，尚不能比较两个行业的需求弹性。

<span id="ei02-usage"></span>

## 使用位置与交互

[EI-06](/zh/notebook/industry-boundaries/)用本页核份额分母，[EI-03](/zh/notebook/demand-price-elasticity/)用它核量价，[EI-04](/zh/notebook/supply-cost-capacity/)用它核能力和订单桥。正式指标选择及因果证据判断不在此扩写。

[^eia]: EI-S04-EIA-2024。EIA Electric Power Annual2024，Tables2.5–2.7的居民年度行、单位与全部表注。https://www.eia.gov/electricity/annual/html/epa_02_05.html ；https://www.eia.gov/electricity/annual/html/epa_02_06.html ；https://www.eia.gov/electricity/annual/html/epa_02_07.html
[^m3]: EI-S06-M3-202605。U.S. Census Bureau，*Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report*，2026-07-02 10:00 AM EDT发布，CB 26-104 M3-2 (26)-05。第1页为版次身份，第3–4页为调查说明，第6–9页为Tables 1–4；5月p、4月r。固定历史入口：https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
[^iea]: EI-S05-IEA-2025。IEA Electricity2025，pp57–61首段，2024历史事件图、说明及图注。https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf


## Additional teaching material
## 交互与静态等价规格
**组件`EI02-metadata-card`。** 输入不是随意改数字的滑杆，而是选择三个已经核定的材料卡。字段固定为：
`object, geography, unit, frequency, stock_or_flow, seasonal_adjustment,
price_adjustment, period, released_at, vintage, retrieval_status`。
不知道的字段显示`未取得/未核定`，不猜默认值；只有报告年份的IEA材料不补造发布日期日时分。

卡片允许在“原值／说明”之间切换；EIA另显示上述单位抵消式与16.4792828结果。没有匹配价格指数则禁用“实际增长”；没有对应频率的两期数据则禁用该增速；不以插值补缺期。版本冲突卡只显示已核5月原页记录，不将7月文本作为同版附件。

静态等价为本页口径表、换算式与版本说明。键盘切换保留文本字段；打印展开来源与状态，不以警告颜色替代说明。

## Sources
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
    "from": "zh-ei02",
    "relation": "part_of",
    "to": "industry-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei02",
    "relation": "uses_method",
    "to": "zh-ei01",
    "reason": "存量、流量和计量对象；可就地查阅"
  },
  {
    "from": "zh-ei02",
    "relation": "illustrated_by",
    "to": "case-ei-us-power-2024",
    "reason": "量价收入单位及账单期间"
  },
  {
    "from": "zh-ei02",
    "relation": "illustrated_by",
    "to": "case-ei-us-construction-machinery-202605",
    "reason": "季调名义金额、净额和发布版本"
  },
  {
    "from": "zh-ei02",
    "relation": "supported_by",
    "to": "EI-S04-EIA-2024",
    "reason": "单位与覆盖",
    "scope": "Tables2.5–2.7表头及全部表注"
  },
  {
    "from": "zh-ei02",
    "relation": "supported_by",
    "to": "EI-S06-M3-202605",
    "reason": "存流量、p/r与取消净额",
    "scope": "fixed May2026 report: p1 identity; p3–4 definitions as used; p6–9 construction machinery rows/notes"
  }
]
```

## Related entries
