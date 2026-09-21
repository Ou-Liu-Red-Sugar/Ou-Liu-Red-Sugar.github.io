# 需求、客户行为与价格弹性

这一篇先从客户的用途与选择出发，定义需求和弹性，再用美国居民售电资料说明为什么两年的量价变化不能直接估出需求曲线. 最后把同一框架放到工程机械采购中，看使用需求与新购需求为什么可能走出不同幅度. 默认读共同部分与电力案例；工程机械和计量推导可作为有针对性的迁移阅读.

Entry: zh-ei03 | Node: EI-03 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
教授 EI-03《需求、客户行为与价格弹性》，2026-09-21-review-2.
采用带符号弹性，读者懂微积分. 不要以一个悬空的“为什么涨价”开场；
先说明客户集合、用途、选择和保持不变的条件.

实质教学前实际读取：
1. CORE The Economy 1.0 Unit 7 §7.1、§7.8全文及图注：
   https://books.core-econ.org/the-economy-v1/book/text/07.html
   等价已核PDF：
   https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf
   核对教材的弹性绝对值约定，并区分教学利润与真实估计需求.
2. Tobias Salz，MIT 14.271 Lecture 7 slides 6、19–21：
   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
   分别是PDF第12–15页、32–42页（叠页以页脚编号核对）.
   读完整同时性、相关性与排除限制单元，不只看关键词.
3. EIA 2024年报Tables 2.5/2.6/2.7的2023/2024居民年度行与全部表注：
   https://www.eia.gov/electricity/annual/html/epa_02_05.html
   https://www.eia.gov/electricity/annual/html/epa_02_06.html
   https://www.eia.gov/electricity/annual/html/epa_02_07.html
4. 工程机械分支采用真实金额时，直接读取 Census May 2026 固定期次：
   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
   核第1页版次与发布日期、第3–4页定义、第6–9页原表和脚注.
   若固定原件未取得，不得用滚动“current”报告替代这一历史快照.
研究延伸被选择后，另读Tiedemann等：
https://arxiv.org/pdf/2409.15530v1
§§2–4的设置、方法及模拟结果，Fig1和Table1；讲其实际德国估计则需再读
§5和D.1，不以本篇短摘要替代原单元. 不得把论文估计塞成网页默认参数.

先记录取得的题名、版本和单元，并指出每项具体支持哪一步. 必读不全则
自动尝试已核等价入口，仍缺时只报告缺口，不凭印象冒充完成阅读.
运行日志初始为空；同会话已经完整取得的同版单元可以复用.

诊断：让读者解释+0.7551364是什么，并从单位重建16.4792828美分/kWh.
若能完成，直接联立供需模型并做练习二；不要逐项考四则运算.
图中价格固定和市场出清必须分开，固定价格下只给愿购/愿供，不臆造成交量.
引导读者先说明改变了哪个条件，再展示模型结果；事实模式始终只读.
以练习一和设备更新练习作迁移，反馈要指出条件、单位和需求对象混淆.
通过标准：能解释弹性定义、重建三情景、区分市场观测与结构关系，并说明
新购量下降不等于设备存量或作业需求按同幅度下降.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei03",
  "node_id": "EI-03",
  "content_version": "2026-09-21-review-2",
  "export_mode": "public",
  "audience": "微积分、基本概率",
  "learning_task": "这一篇先从客户的用途与选择出发，定义需求和弹性，再用美国居民售电资料说明为什么两年的量价变化不能直接估出需求曲线. 最后把同一框架放到工程机械采购中，看使用需求与新购需求为什么可能走出不同幅度. 默认读共同部分与电力案例；工程机械和计量推导可作为有针对性的迁移阅读.",
  "body_source": "body_markdown",
  "prompt": "教授 EI-03《需求、客户行为与价格弹性》，2026-09-21-review-2.\n采用带符号弹性，读者懂微积分. 不要以一个悬空的“为什么涨价”开场；\n先说明客户集合、用途、选择和保持不变的条件.\n\n实质教学前实际读取：\n1. CORE The Economy 1.0 Unit 7 §7.1、§7.8全文及图注：\n   https://books.core-econ.org/the-economy-v1/book/text/07.html\n   等价已核PDF：\n   https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf\n   核对教材的弹性绝对值约定，并区分教学利润与真实估计需求.\n2. Tobias Salz，MIT 14.271 Lecture 7 slides 6、19–21：\n   https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf\n   分别是PDF第12–15页、32–42页（叠页以页脚编号核对）.\n   读完整同时性、相关性与排除限制单元，不只看关键词.\n3. EIA 2024年报Tables 2.5/2.6/2.7的2023/2024居民年度行与全部表注：\n   https://www.eia.gov/electricity/annual/html/epa_02_05.html\n   https://www.eia.gov/electricity/annual/html/epa_02_06.html\n   https://www.eia.gov/electricity/annual/html/epa_02_07.html\n4. 工程机械分支采用真实金额时，直接读取 Census May 2026 固定期次：\n   https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf\n   核第1页版次与发布日期、第3–4页定义、第6–9页原表和脚注.\n   若固定原件未取得，不得用滚动“current”报告替代这一历史快照.\n研究延伸被选择后，另读Tiedemann等：\nhttps://arxiv.org/pdf/2409.15530v1\n§§2–4的设置、方法及模拟结果，Fig1和Table1；讲其实际德国估计则需再读\n§5和D.1，不以本篇短摘要替代原单元. 不得把论文估计塞成网页默认参数.\n\n先记录取得的题名、版本和单元，并指出每项具体支持哪一步. 必读不全则\n自动尝试已核等价入口，仍缺时只报告缺口，不凭印象冒充完成阅读.\n运行日志初始为空；同会话已经完整取得的同版单元可以复用.\n\n诊断：让读者解释+0.7551364是什么，并从单位重建16.4792828美分/kWh.\n若能完成，直接联立供需模型并做练习二；不要逐项考四则运算.\n图中价格固定和市场出清必须分开，固定价格下只给愿购/愿供，不臆造成交量.\n引导读者先说明改变了哪个条件，再展示模型结果；事实模式始终只读.\n以练习一和设备更新练习作迁移，反馈要指出条件、单位和需求对象混淆.\n通过标准：能解释弹性定义、重建三情景、区分市场观测与结构关系，并说明\n新购量下降不等于设备存量或作业需求按同幅度下降.",
  "selected_branch": "power",
  "common_required_readings": [
    {
      "id": "EI-S01-CORE-U7",
      "source_id": "EI-S01-CORE-U7",
      "title": "The Economy 1.0 · Unit 7: The Firm and Its Customers",
      "authors": [
        "CORE Econ"
      ],
      "version": "The Economy 1.0",
      "access": {
        "kind": "html_full_text",
        "uri": "https://books.core-econ.org/the-economy-v1/book/text/07.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
        "scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
        "purpose": "采用教材定义、图注及计算约定；本站参数另属教学构造"
      },
      "supports": "采用教材定义、图注及计算约定；本站参数另属教学构造",
      "fallback_source_ids": [],
      "alternative_access": [
        {
          "kind": "pdf_full_text",
          "uri": "https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf",
          "equivalent_scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定"
        }
      ]
    },
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
        "locator": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
        "scope": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
        "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
      },
      "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
      "fallback_source_ids": []
    }
  ],
  "required_readings": [
    {
      "id": "EI-S01-CORE-U7",
      "source_id": "EI-S01-CORE-U7",
      "title": "The Economy 1.0 · Unit 7: The Firm and Its Customers",
      "authors": [
        "CORE Econ"
      ],
      "version": "The Economy 1.0",
      "access": {
        "kind": "html_full_text",
        "uri": "https://books.core-econ.org/the-economy-v1/book/text/07.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
        "scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
        "purpose": "采用教材定义、图注及计算约定；本站参数另属教学构造"
      },
      "supports": "采用教材定义、图注及计算约定；本站参数另属教学构造",
      "fallback_source_ids": [],
      "alternative_access": [
        {
          "kind": "pdf_full_text",
          "uri": "https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf",
          "equivalent_scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定"
        }
      ]
    },
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
        "locator": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
        "scope": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
        "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
      },
      "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
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
    "power": [
      {
        "id": "EI-S01-CORE-U7",
        "source_id": "EI-S01-CORE-U7",
        "title": "The Economy 1.0 · Unit 7: The Firm and Its Customers",
        "authors": [
          "CORE Econ"
        ],
        "version": "The Economy 1.0",
        "access": {
          "kind": "html_full_text",
          "uri": "https://books.core-econ.org/the-economy-v1/book/text/07.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
          "scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
          "purpose": "采用教材定义、图注及计算约定；本站参数另属教学构造"
        },
        "supports": "采用教材定义、图注及计算约定；本站参数另属教学构造",
        "fallback_source_ids": [],
        "alternative_access": [
          {
            "kind": "pdf_full_text",
            "uri": "https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf",
            "equivalent_scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定"
          }
        ]
      },
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
          "locator": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
          "scope": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
          "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
        },
        "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
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
    "machinery": [
      {
        "id": "EI-S01-CORE-U7",
        "source_id": "EI-S01-CORE-U7",
        "title": "The Economy 1.0 · Unit 7: The Firm and Its Customers",
        "authors": [
          "CORE Econ"
        ],
        "version": "The Economy 1.0",
        "access": {
          "kind": "html_full_text",
          "uri": "https://books.core-econ.org/the-economy-v1/book/text/07.html",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
          "scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定",
          "purpose": "采用教材定义、图注及计算约定；本站参数另属教学构造"
        },
        "supports": "采用教材定义、图注及计算约定；本站参数另属教学构造",
        "fallback_source_ids": [],
        "alternative_access": [
          {
            "kind": "pdf_full_text",
            "uri": "https://www.core-econ.org/wp-content/uploads/2021/04/the-economy-unit-7-pdf.pdf",
            "equivalent_scope": "§7.1、§7.8全文及图注；核教材弹性绝对值与本文带符号约定"
          }
        ]
      },
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
          "locator": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
          "scope": "slide6（PDF第12–15页）及slides19–21（PDF第32–42页）；完整同时性、相关性与排除限制单元",
          "purpose": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计"
        },
        "supports": "核对选择集合、同时性或识别条件；不把教学斜率当经验估计",
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
    },
    {
      "id": "EI-S07-TIEDEMANN-2024V1",
      "source_id": "EI-S07-TIEDEMANN-2024V1",
      "title": "Identifying Elasticities in Autocorrelated Time Series Using Causal Graphs",
      "authors": [
        "Silvana Tiedemann",
        "Jorge Sanchez Canales",
        "Felix Schur",
        "Raffaele Sgarlato",
        "Lion Hirth",
        "Oliver Ruhnau",
        "Jonas Peters"
      ],
      "version": "arXiv v1",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2409.15530v1",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§2–4的设置、方法与相应模拟，Fig1和Table1",
        "scope": "§§2–4的设置、方法与相应模拟，Fig1和Table1",
        "purpose": "选择研究延伸时解释时间依赖与识别条件；不输入论文系数到教学曲线"
      },
      "supports": "选择研究延伸时解释时间依赖与识别条件；不输入论文系数到教学曲线",
      "fallback_source_ids": [],
      "role": "research_extension",
      "required_when_selected": true
    },
    {
      "id": "EI-S07-TIEDEMANN-2024V1-EMPIRICAL",
      "source_id": "EI-S07-TIEDEMANN-2024V1",
      "title": "Identifying Elasticities in Autocorrelated Time Series Using Causal Graphs",
      "authors": [
        "Silvana Tiedemann",
        "Jorge Sanchez Canales",
        "Felix Schur",
        "Raffaele Sgarlato",
        "Lion Hirth",
        "Oliver Ruhnau",
        "Jonas Peters"
      ],
      "version": "arXiv v1",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2409.15530v1",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "先读§§2–4；讲德国经验估计另读§5、D.1与对应图表",
        "scope": "先读§§2–4；讲德国经验估计另读§5、D.1与对应图表",
        "purpose": "只在教学采用原论文德国估计时启用"
      },
      "supports": "只在教学采用原论文德国估计时启用",
      "fallback_source_ids": [],
      "role": "empirical_extension",
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
        "id": "EXP-EI-SUPPLY-DEMAND-01",
        "status": "teaching_assumption",
        "units": {
          "P": "synthetic currency/unit",
          "Q": "synthetic units/period",
          "u": "demand quantity shift",
          "v": "supply quantity shift"
        },
        "input_domain": {
          "u": [
            -20,
            20
          ],
          "v": [
            -20,
            20
          ],
          "pFixed": [
            10,
            30
          ]
        },
        "step": {
          "u": 1,
          "v": 1,
          "pFixed": 0.5
        },
        "formulas": {
          "demand": "100-2*P+u",
          "supply": "20+2*P+v",
          "equilibrium_P": "20+(u-v)/4",
          "equilibrium_Q": "60+(u+v)/2",
          "OLS_population_slope": "-2+4*Var(u)/(Var(u)+Var(v))"
        },
        "conditions_OLS": "zero-mean uncorrelated u,v, finite variances with positive sum, bounded within the interior-solution domain; population linear projection, not an empirical estimate",
        "states": [
          {
            "u": 0,
            "v": 0,
            "P": 20,
            "Q": 60
          },
          {
            "u": 20,
            "v": 0,
            "P": 25,
            "Q": 70
          },
          {
            "u": 0,
            "v": -20,
            "P": 25,
            "Q": 50
          },
          {
            "u": 10,
            "v": -10,
            "P": 25,
            "Q": 60
          }
        ],
        "fixed_price_example": {
          "P": 25,
          "u": 0,
          "v": 0,
          "Qd": 50,
          "Qs": 70,
          "excess_supply": 20,
          "actual_trade_quantity": null
        },
        "equilibrium_output_bounds": {
          "P": [
            10,
            30
          ],
          "Q": [
            40,
            80
          ]
        }
      },
      {
        "id": "EXP-EI-FLEET-01",
        "status": "teaching_assumption",
        "units": "homogeneous machine units",
        "inputs": {
          "K0": 100,
          "delta": 0.1,
          "target": 110
        },
        "formulas": {
          "survivors": "(1-delta)*K0",
          "purchases": "max(0,target-survivors)",
          "next_K0": "survivors+purchases"
        },
        "expected": {
          "purchase_period1": 20,
          "purchase_period2": 11,
          "purchase_growth_pct": -45
        },
        "conditions": [
          "closed homogeneous fleet",
          "no purchases before decision",
          "sales/extra retirement/idle capacity not modeled",
          "target below survivors implies no purchase, not negative purchases"
        ]
      }
    ],
    "specification_markdown": "## 附：交互与静态等价合同\n\n### `EI03-observation`：真实资料窗口\n\n固定输入见正文表和 `shared-inputs.json`. 选择2023/2024可查看收入、电量、公布均价及复算均价. 结果只读，不将真实数值作为模拟滑杆. 默认显示：\n- 电量增长 `2.265409217082464%`；\n- 公布均价增长 `3%`；\n- 机械比值 `0.7551364056941547`，标签必须是“未识别的两期变化比”；\n- 2024收入/电量 `16.479282798133895 cent/kWh`.\n\n完整单位换算式常驻. 用公布均价算涨幅与用收入/电量重建均价是两条分开的计算路径，不混用中间的取整结果.\n\n### `EI03-demand-supply`：教学模型窗口\n\n输入 `u,v ∈ [-20,20]`，步长1，默认0；模式 `equilibrium` 或 `fixed-price`. 固定价格 `pFixed ∈ [10,30]`，步长0.5，默认25，仅在第二种模式启用.\n\n均衡模式：\n`p = 20 + (u-v)/4; q = 60 + (u+v)/2`.\n全控件域内 `10≤p≤30; 40≤q≤80`，均为内部正解. 绘图以数量为横轴、价格为纵轴，使用\n`pDemand(q)=(100+u-q)/2`、\n`pSupply(q)=(q-20-v)/2`；\n只画坐标窗口内非负部分，不把负数截断后的线段当新经济模型.\n\n固定价格模式：\n`qd=100-2*pFixed+u; qs=20+2*pFixed+v; excessSupply=qs-qd`.\n分别标两个愿望数量与差额；**不输出未经交易规则确定的实际成交量**. 默认固定价格模式输出25、50、70、20. 该控件域内两种数量均至少20.\n\n每次改参，同时更新曲线、公式、两个移动量、结果表和“保持不变”说明. 均衡基准/需求增加/供给减少三按钮严格对应正文三行，不生成EIA反事实预测. 参数越界时拒绝而不是画出负数量. 静态等价就是正文三情景表、固定价格说明及练习二.\n\n### `EI03-fleet`：可选设备更新窗口\n\n输入 `K0=100, delta=0.1, target=110`；允许 `K0∈[0,200]`、`delta∈[0,0.3]`、`target∈[0,240]`. 计算\n`survivors=(1-delta)*K0; purchases=max(0,target-survivors)`.\n若 `target<survivors`，显示“无新增即可达到至少目标；出售/闲置未建模”，不能用负采购冒充销售. 下一期按钮将实际期末 `survivors+purchases` 传递为新期初，不能仍用100计算第二期. 默认两期20、11；静态等价为练习三的完整演算.\n\n共用无障碍：文字标签、单位、`output`、键盘可调、非颜色身份区分. 打印展开当前输入与结果并附默认静态表. 交互是接入规格，本次未运行浏览器界面.",
    "outputs_origin": "原稿共享输入与默认结果；数字身份保持observed或teaching_assumption"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
行业的需求不是一个已经实现的销售额，而是客户在一定条件下愿意购买什么、多少、何时购买的关系. 我们看到的销售量只是这段过程的一个结果：它既受到客户选择影响，也可能受到价格、供给和交付条件影响.

这一篇先从客户的用途与选择出发，定义需求和弹性，再用美国居民售电资料说明为什么两年的量价变化不能直接估出需求曲线. 最后把同一框架放到工程机械采购中，看使用需求与新购需求为什么可能走出不同幅度. 默认读共同部分与电力案例；工程机械和计量推导可作为有针对性的迁移阅读.

<span id="ei03-demand-elasticity"></span>

## 一、客户选择怎样变成需求关系

我们先固定产品、客户、地域与期间. 对于这些客户，可以将需求记为
$Q_d=D(P;Y,Z)$：$P$ 是客户面对的价格，$Y$ 表示预算或收入条件，$Z$ 包含用途、可替代方案、既有设备以及其他环境. 分号提醒我们，讨论“价格作用”时，必须说明哪些条件保持不变.

**定义.** 给定 $Y,Z$ 后，需求曲线是价格与客户愿意购买数量之间的条件关系. 沿同一曲线移动，改变的是 $P$；需求曲线移动，改变的是 $Y,Z$ 或需求关系本身. 观察到一次销售增长，尚不足以判断是哪一种变化.

CORE Unit 7 从客户的支付意愿进入企业的可行销售选择，同时强调生产成本承担另一种职责. 本篇借用这一结构，但不把教材 Cheerios 例子中的教学成本与利润，当成已经核实的真实公司利润. [^core]

条件关系之所以重要，是因为一次购买通常不只比较标价. 设有一个教学中的用电客户：短期内电器和住房固定，电价变化可能先改变使用时间和强度；在更长期间，客户还可能改变设备. 两个期间允许调整的变量不同，弹性自然也不必相同. 这里是在说明可能机制，不是在给实际居民用电指定一个数值.

同样，一家施工企业可能需要的是若干小时的作业能力，而不是“必须购买一台新机器”. 在明确标注的采购情境中，新购、使用现有设备、租用和延期，是服务同一用途的不同安排. 为了研究新机销量，我们不仅要了解工程量，还要了解现有设备和采购期限. [EI-06](/zh/notebook/industry-boundaries/) 的边界说明在这里变成需求函数中真正需要的条件.

### 弹性保留了什么信息

在 $P>0,Q_d>0$ 且对价格可微的点，本文使用**带符号的点价格弹性**

\[
\varepsilon_P=\frac{\partial Q_d}{\partial P}\frac{P}{Q_d}
=\frac{\partial\log Q_d}{\partial\log P}.
\]

它将带有单位的斜率转为相对变化率. 沿给定需求关系，在足够小的变动下，
$\Delta Q_d/Q_d\approx\varepsilon_P\,\Delta P/P$. 向下倾斜需求的弹性为负；CORE §7.8 使用正的绝对值表述，因此读来源时要先统一符号，而不是把两种约定误认为结论相反. [^core]

例如，教学需求 $Q_d=100-2P$ 在 $P=20,Q_d=60$ 时有
$\varepsilon_P=-2\times20/60=-2/3$. 这里“斜率为 −2”和“弹性为 −2/3”不是同一个数. 若在相同曲线上改到 $P=25,Q_d=50$，斜率仍是 −2，弹性却成为 −1，因为相对变化的基数变了.

弹性还帮助区分销量与收入. 在需求关系不变时，$R(P)=P Q_d(P)$，所以
$R'(P)=Q_d+P Q_d'=Q_d(1+\varepsilon_P)$. 这是乘积求导，不是额外经验假设. 上述曲线上，价格从20升到25，数量从60降到50，收入却从1200升到1250. 收入增加并不等于利润增加；采购、生产、服务等成本仍需另算.

<span id="case-ei-us-power-2024"></span>

<span id="ei03-electricity-observations"></span>

## 二、真实带读：美国居民用电的量、价与收入

下面将 EIA《Electric Power Annual 2024》Tables 2.5、2.6、2.7 的**居民、年度合计**重排到一张表. 地理覆盖为美国50州及哥伦比亚特区，页面将这些年度值标为最终值. 这里只摘选2023、2024两行，分析对象仍是年度汇总而非客户微观数据.[^eia]

| 年度 | 居民销售电量，K MWh | 居民销售收入， M 美元 | 公布平均价格，美分/kWh |
|---|---:|---:|---:|
| 2023 | 1,450,025 | 231,993 | 16.00 |
| 2024 | 1,482,874 | 244,367 | 16.48 |

我们先核对这三个字段如何连接，再讨论经济解释. 2024年的平均收入／电量为

\[
\bar P=
\frac{244367\times10^6\ \mathrm{USD}}
     {1482874\times10^3\ \mathrm{MWh}}
\cdot
\frac{1\ \mathrm{MWh}}{10^3\ \mathrm{kWh}}
\cdot
\frac{100\ \mathrm{cent}}{1\ \mathrm{USD}}
=100\frac{244367}{1482874}
=16.4792828\ \mathrm{cent/kWh}.
\]

“ M 美元”与“K MWh”先产生K 美元/MWh，再用每 MWh 的1000 kWh换算. 不能仅凭数字好像相近，就省掉单位. 结果四舍五入为16.48，与公布值相符；从2023年表中复算则为15.9992414美分/kWh，与16.00相符. 由于收入和电量本身也经过表格取整，这不是对所有底层未取整数据的重建.

接着计算电量增长：
$(1482874/1450025)-1=2.2654092\%$. 按公布价格计算的涨幅为
$(16.48/16.00)-1=3\%$. 如果机械相除，会得到
$2.2654092\%/3\%=+0.7551364$.

**这个正数不是本篇估计的需求弹性.** 它只描述两个年度汇总数怎样共同变化. 需求定义中的“其他条件不变”没有由两行数据满足，价格变量也有问题：全体客户的平均收入／电量，未必是某个客户增加一度用电时支付的边际价格.

后一点可以不用任何额外数据就说明. 若一个教学电费账单为固定费 $F$ 加每度电单价 $p$，则账单 $B(q)=F+pq$. 平均价格是 $B(q)/q=F/q+p$，边际价格却是 $B'(q)=p$. 即使 $p$ 不变，平均价也会随用量改变. 这只是一个反例，不表示已经确认上述美国平均价变化由固定费造成.

EIA 表注另提醒，售电和收入按账单期间累计，未必与按自然月记录的发电量一致；分类和覆盖变化也可能影响比较. [^eia-notes] 所以本例能够完成的是量价收入口径核查，而不是用年度总量代替客户调查或价格识别.

<span id="ei03-supply-demand"></span>

## 三、为什么同样涨价，可以对应两条相反的数量路径

我们用一个与 EIA 数字**没有拟合关系**的教学模型，把前面的区别完整算一遍：

\[
Q_d=100-2P+u,\qquad Q_s=20+2P+v.
\]

$u$ 是需求移动量，$v$ 是供给移动量；两者单位均为教学数量单位. 斜率是给定的行为假设，不是从现实资料估出来的. 本模型假设同质产品、一个价格、没有配给，并用 $Q_d=Q_s$ 描述出清. 实际合同、库存和交付时滞不在这个模型内.

联立后，
$100-2P+u=20+2P+v$，所以
$P^*=20+(u-v)/4$，再代回得到 $Q^*=60+(u+v)/2$. 这一步才是模型内部的均衡求解.


这些闭式公式还隐含一个条件：当前参数下的解必须落在模型允许的内部区域，至少不能触发非负数量、容量上限或别的边界约束. 本篇交互把默认参数域限制在内部正解范围. 若以后把冲击拖到使数量为负、供给碰到容量上限或出现配给，就必须重新解带约束的问题，不能先用上述公式求出一个不可行点，再把负数机械截成0并称其为均衡.

| 教学情景 | $u$ | $v$ | $P^*$ | $Q^*$ | 相对基准的变化 |
|---|---:|---:|---:|---:|---|
| 基准 | 0 | 0 | 20 | 60 | — |
| 需求增加 | 20 | 0 | 25 | 70 | 价量同升 |
| 供给减少 | 0 | −20 | 25 | 50 | 价升量降 |

第二行沿原供给关系移动，但不沿原需求曲线移动；第三行则沿原需求关系移动. 若将第一、第二行两点连起来，得到的是正斜率，尽管每一条假设需求曲线都向下. 我们现在不仅知道“相关不等于因果”，还知道偏差为什么会出现：观察点是双方条件共同决定的.

还要区分**给定价格观察客户选择**与**重新求市场均衡**. 若仍取 $u=v=0$，直接把价格固定为25，则愿购量是50、愿供量是70，差额20. 没有配给、库存或价格调整规则，我们不能把实际交易量自动写成70，更不能同时画出一个所谓“均衡点”. 这正是交互里两种操作必须分开的原因.

<span id="ei03-identification-extension"></span>

### 可选推导：更多观测也不自动解除识别问题

令 $u,v$ 是均值为零、相互不相关、方差有限的冲击，且 $\operatorname{Var}(u)+\operatorname{Var}(v)>0$；参数范围仍保证内部解. 对观测到的均衡数量关于价格做带截距的总体线性回归，其斜率为

\[
\frac{\operatorname{Cov}(P^*,Q^*)}{\operatorname{Var}(P^*)}
=-2+\frac{\operatorname{Cov}(P^*,u)}{\operatorname{Var}(P^*)}
=-2+\frac{4\operatorname{Var}(u)}
          {\operatorname{Var}(u)+\operatorname{Var}(v)}.
\]

因为 $Q^*=100-2P^*+u$，第一步直接来自协方差的线性性；又因
$P^*=20+(u-v)/4$，分子中的协方差为 $\operatorname{Var}(u)/4$，价格方差为 $(\operatorname{Var}(u)+\operatorname{Var}(v))/16$，得到末式. 只有需求变化时斜率是+2，只有供给变化时才是−2. 即使无限多观测消除了抽样噪声，混合了哪些冲击仍然决定回归回答什么.


这里的回归系数是“观测均衡数量对观测价格”的总体线性投影斜率，单位仍是数量/价格；它本身也不是无量纲的需求弹性. 即使结构需求斜率 $\partial Q_d/\partial P=-2$ 已经识别，要得到某一点的带符号弹性还要乘以该点的 $P/Q$. 斜率、弹性和均衡回归系数是三种不同对象.

MIT 的同时性讲义正是把结构需求、结构供给和均衡观测分开. 工具变量的思路，是寻找能推动价格、又不经其他未处理路径直接改变需求的变化；相关性和排除条件缺一不可. [^mit] 本篇没有找到并验证一个可直接用于 EIA 年度资料的工具变量.

**研究延伸.** Tiedemann 等的2024年工作论文进一步比较了不同时间依赖结构：某些模型需要处理滞后关系，另一些模型中机械加入同一个滞后变量反而改变识别条件. 因此，看到自相关后“多加几个滞后”不是普遍修复法. 本篇采用这一方法警示，不采用其数值估计作为默认电力弹性，也未运行论文复现. [^paper]

<div data-experiment-slot="lab-ei03"></div>

<span id="ei03-fleet-demand"></span>

## 四、工程机械分支：作业需求不等于新购设备需求

将需求对象换成一支设备队伍，我们就必须区分三件事：期内需要完成多少工作，已有设备可以提供多少服务，以及需要补购多少设备.

考虑完全假设的封闭设备队伍，期初有 $K_0=100$ 台同质设备，一期报废比例为 $\delta=10\%$，本期新增设备 $X$ 在期末到位；忽略二手转让、租赁与其他流入流出. 则期末设备数为
$K_1=(1-\delta)K_0+X$. 如果目标只是维持100台，需买10台；如果目标升至110台，则需买20台. 期末所需设备数只增加10%，新购量却增加100%.

这是存量更新和扩张叠加的结果，不是需求突然“非理性”. 如果之后目标从110台保持不变，以110台为新的期初、仍报废10%，下一期只需新增11台. 新购量从20降到11，并不意味着所需设备存量从110缩回100. 用同一个“需求增速”描述作业、设备存量与新购，反而会丢掉机制.

回到真实材料，Census 的2026年5月工程机械新订单为4,879 M 美元，出货为4,498 M 美元；新订单定义已扣取消，出货记录制造环节的金额. [^m3] 这两项都不是刚才模型的设备台数，也不是客户的作业小时. 价格、产品组合、交期和订单取消均可能使金额与实物变化不同. [EI-04](/zh/notebook/supply-cost-capacity/) 会把它们接入订单与交付过程；本篇到这里，已经能说明应该向下一步提供哪些不同的需求对象.

<span id="ei03-exercises"></span>

## 五、完整练习与解析

### 练习一：修复一句行业判断

“2024年美国居民电价涨3%，电量涨2.2654%，说明电力需求弹性为+0.755，所以提价可以稳定增加销量. ”

**解析.** 原句的两个年度变化可以保留，但“需求弹性”和“提价增加销量”必须删除. +0.7551364只是在不同年度、其他条件未固定、使用平均价格时的机械比值. 要解释变化，可以提出“某些客户使用需要增加，同时供应或计费条件变化”等候选机制，但不能据两行数据给出贡献比例. 应进一步取得客户实际价格安排、客户与用途构成、天气或其他需求条件，以及供给或价格变化的来源. 这里每项资料都要接到需求条件或识别限制，而不是任意增加数据清单.

### 练习二：一次涨价背后有哪些条件变化？

在本篇模型中观察到 $P^*=25,Q^*=60$. 反推出 $u,v$；并说明这是否使现实中的涨价原因可由量价唯一识别.

**解析.** 由价格式得到 $u-v=20$，由数量式得到 $u+v=0$，因此 $u=10,v=-10$. 代回两边，愿购与愿供都为60. 在**斜率、截距、边界与出清机制已经正确给定**的这个模型里，两项移动可被反推；现实中这些结构未必已知，均衡与交付条件也未必相同，所以不能将这里的代数唯一性升级为经验识别已完成.

### 练习三：销量下降是否等于客户不再需要设备？

教学设备队伍期初100台、报废10%，第一期目标110台，第二期仍目标110台. 求两期新购量. 一个报告将第二期新购下降45%写成“作业需求下降45%”，错在哪里？

**解析.** 第一期 $X_1=110-0.9\times100=20$；第二期
$X_2=110-0.9\times110=11$，下降 $11/20-1=-45\%$. 第一期兼有扩张和更新，第二期只有更新；设备目标没有下降. 模型未给每台设备作业时数，因此连作业需求是否完全不变也应保留条件，不能直接从新购量推出. 真实 M3 金额还多了价格与产品组合因素，距离作业服务更远.

[^core]: EI-S01-CORE-U7. CORE Econ，The Economy 1.0，Unit7，§7.1与§7.8（包括需求、图7.4的教学身份说明和弹性符号约定）. https://books.core-econ.org/the-economy-v1/book/text/07.html
[^eia]: EI-S04-EIA-2024. EIA，Electric Power Annual 2024，Tables 2.5、2.6、2.7，Annual Totals中2023、2024居民列. 本表为三表合并摘录，原单位分别为Thousand Megawatthours、Million Dollars、Cents per Kilowatthour. https://www.eia.gov/electricity/annual/html/epa_02_05.html ；https://www.eia.gov/electricity/annual/html/epa_02_06.html ；https://www.eia.gov/electricity/annual/html/epa_02_07.html
[^eia-notes]: 同上，Tables2.5–2.7表尾关于覆盖、分类、账单期间及售电/发电差异的说明；本篇未复算调查加权或官方容量因子.
[^mit]: EI-S02-MIT-L7-2022. Tobias Salz，MIT14.271 Fall2022 Lecture7，slides6、19–21. 本文的100/20截距、±2斜率及协方差算例是本站教学构造，不是讲义实证结果. https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
[^paper]: EI-S07-TIEDEMANN-2024V1. Silvana Tiedemann、Jorge Sanchez Canales、Felix Schur、Raffaele Sgarlato、Lion Hirth、Oliver Ruhnau、Jonas Peters，Identifying Elasticities in Autocorrelated Time Series Using Causal Graphs，封面2024-09-19，arXiv v1提交2024-09-23；§§2–4、Fig1. 工作论文；图示来自作者的模型与模拟，不是本篇已经复现的结果. https://arxiv.org/pdf/2409.15530v1
[^m3]: EI-S06-M3-202605. U.S. Census Bureau，May 2026 Full Report，2026-07-02发布；固定报告第1页核身份，第3–4页核调查定义，第6–9页为四张制造表. 本文设备分支只把这些金额作为制造环节观察，不把它们当设备台数或客户作业需求. https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf


## Additional teaching material
## 附：交互与静态等价合同

### `EI03-observation`：真实资料窗口

固定输入见正文表和 `shared-inputs.json`. 选择2023/2024可查看收入、电量、公布均价及复算均价. 结果只读，不将真实数值作为模拟滑杆. 默认显示：
- 电量增长 `2.265409217082464%`；
- 公布均价增长 `3%`；
- 机械比值 `0.7551364056941547`，标签必须是“未识别的两期变化比”；
- 2024收入/电量 `16.479282798133895 cent/kWh`.

完整单位换算式常驻. 用公布均价算涨幅与用收入/电量重建均价是两条分开的计算路径，不混用中间的取整结果.

### `EI03-demand-supply`：教学模型窗口

输入 `u,v ∈ [-20,20]`，步长1，默认0；模式 `equilibrium` 或 `fixed-price`. 固定价格 `pFixed ∈ [10,30]`，步长0.5，默认25，仅在第二种模式启用.

均衡模式：
`p = 20 + (u-v)/4; q = 60 + (u+v)/2`.
全控件域内 `10≤p≤30; 40≤q≤80`，均为内部正解. 绘图以数量为横轴、价格为纵轴，使用
`pDemand(q)=(100+u-q)/2`、
`pSupply(q)=(q-20-v)/2`；
只画坐标窗口内非负部分，不把负数截断后的线段当新经济模型.

固定价格模式：
`qd=100-2*pFixed+u; qs=20+2*pFixed+v; excessSupply=qs-qd`.
分别标两个愿望数量与差额；**不输出未经交易规则确定的实际成交量**. 默认固定价格模式输出25、50、70、20. 该控件域内两种数量均至少20.

每次改参，同时更新曲线、公式、两个移动量、结果表和“保持不变”说明. 均衡基准/需求增加/供给减少三按钮严格对应正文三行，不生成EIA反事实预测. 参数越界时拒绝而不是画出负数量. 静态等价就是正文三情景表、固定价格说明及练习二.

### `EI03-fleet`：可选设备更新窗口

输入 `K0=100, delta=0.1, target=110`；允许 `K0∈[0,200]`、`delta∈[0,0.3]`、`target∈[0,240]`. 计算
`survivors=(1-delta)*K0; purchases=max(0,target-survivors)`.
若 `target<survivors`，显示“无新增即可达到至少目标；出售/闲置未建模”，不能用负采购冒充销售. 下一期按钮将实际期末 `survivors+purchases` 传递为新期初，不能仍用100计算第二期. 默认两期20、11；静态等价为练习三的完整演算.

共用无障碍：文字标签、单位、`output`、键盘可调、非颜色身份区分. 打印展开当前输入与结果并附默认静态表. 交互是接入规格，本次未运行浏览器界面.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-EI-FLEET-01",
    "status": "teaching_assumption",
    "units": "homogeneous machine units",
    "inputs": {
      "id": "EXP-EI-FLEET-01",
      "status": "teaching_assumption",
      "units": "homogeneous machine units",
      "inputs": {
        "K0": 100,
        "delta": 0.1,
        "target": 110
      },
      "formulas": {
        "survivors": "(1-delta)*K0",
        "purchases": "max(0,target-survivors)",
        "next_K0": "survivors+purchases"
      },
      "expected": {
        "purchase_period1": 20,
        "purchase_period2": 11,
        "purchase_growth_pct": -45
      },
      "conditions": [
        "closed homogeneous fleet",
        "no purchases before decision",
        "sales/extra retirement/idle capacity not modeled",
        "target below survivors implies no purchase, not negative purchases"
      ]
    },
    "formulas": {
      "survivors": "(1-delta)*K0",
      "purchases": "max(0,target-survivors)",
      "next_K0": "survivors+purchases"
    },
    "expected": {
      "purchase_period1": 20,
      "purchase_period2": 11,
      "purchase_growth_pct": -45
    },
    "conditions": [
      "closed homogeneous fleet",
      "no purchases before decision",
      "sales/extra retirement/idle capacity not modeled",
      "target below survivors implies no purchase, not negative purchases"
    ],
    "title": "设备存量更新与新购需求",
    "anchor": "ei03-fleet-demand",
    "description": "原稿明确的教学构造；与真实行业观测分开.",
    "outputs_origin": "原稿shared-inputs.json；本导入保留原值，不执行新数值计算",
    "url": "/notebook/labs/ei-a/interactions.html#ei03"
  },
  {
    "id": "EXP-EI-SUPPLY-DEMAND-01",
    "status": "teaching_assumption",
    "units": {
      "P": "synthetic currency/unit",
      "Q": "synthetic units/period",
      "u": "demand quantity shift",
      "v": "supply quantity shift"
    },
    "input_domain": {
      "u": [
        -20,
        20
      ],
      "v": [
        -20,
        20
      ],
      "pFixed": [
        10,
        30
      ]
    },
    "step": {
      "u": 1,
      "v": 1,
      "pFixed": 0.5
    },
    "formulas": {
      "demand": "100-2*P+u",
      "supply": "20+2*P+v",
      "equilibrium_P": "20+(u-v)/4",
      "equilibrium_Q": "60+(u+v)/2",
      "OLS_population_slope": "-2+4*Var(u)/(Var(u)+Var(v))"
    },
    "conditions_OLS": "zero-mean uncorrelated u,v, finite variances with positive sum, bounded within the interior-solution domain; population linear projection, not an empirical estimate",
    "states": [
      {
        "u": 0,
        "v": 0,
        "P": 20,
        "Q": 60
      },
      {
        "u": 20,
        "v": 0,
        "P": 25,
        "Q": 70
      },
      {
        "u": 0,
        "v": -20,
        "P": 25,
        "Q": 50
      },
      {
        "u": 10,
        "v": -10,
        "P": 25,
        "Q": 60
      }
    ],
    "fixed_price_example": {
      "P": 25,
      "u": 0,
      "v": 0,
      "Qd": 50,
      "Qs": 70,
      "excess_supply": 20,
      "actual_trade_quantity": null
    },
    "equilibrium_output_bounds": {
      "P": [
        10,
        30
      ],
      "Q": [
        40,
        80
      ]
    },
    "title": "供需移动与固定价格",
    "anchor": "ei03-supply-demand",
    "description": "原稿明确的教学构造；与真实行业观测分开.",
    "inputs": {
      "id": "EXP-EI-SUPPLY-DEMAND-01",
      "status": "teaching_assumption",
      "units": {
        "P": "synthetic currency/unit",
        "Q": "synthetic units/period",
        "u": "demand quantity shift",
        "v": "supply quantity shift"
      },
      "input_domain": {
        "u": [
          -20,
          20
        ],
        "v": [
          -20,
          20
        ],
        "pFixed": [
          10,
          30
        ]
      },
      "step": {
        "u": 1,
        "v": 1,
        "pFixed": 0.5
      },
      "formulas": {
        "demand": "100-2*P+u",
        "supply": "20+2*P+v",
        "equilibrium_P": "20+(u-v)/4",
        "equilibrium_Q": "60+(u+v)/2",
        "OLS_population_slope": "-2+4*Var(u)/(Var(u)+Var(v))"
      },
      "conditions_OLS": "zero-mean uncorrelated u,v, finite variances with positive sum, bounded within the interior-solution domain; population linear projection, not an empirical estimate",
      "states": [
        {
          "u": 0,
          "v": 0,
          "P": 20,
          "Q": 60
        },
        {
          "u": 20,
          "v": 0,
          "P": 25,
          "Q": 70
        },
        {
          "u": 0,
          "v": -20,
          "P": 25,
          "Q": 50
        },
        {
          "u": 10,
          "v": -10,
          "P": 25,
          "Q": 60
        }
      ],
      "fixed_price_example": {
        "P": 25,
        "u": 0,
        "v": 0,
        "Qd": 50,
        "Qs": 70,
        "excess_supply": 20,
        "actual_trade_quantity": null
      },
      "equilibrium_output_bounds": {
        "P": [
          10,
          30
        ],
        "Q": [
          40,
          80
        ]
      }
    },
    "outputs_origin": "原稿shared-inputs.json；本导入保留原值，不执行新数值计算",
    "url": "/notebook/labs/ei-a/interactions.html#ei03"
  }
]
```

## Sources
- [The Economy 1.0 · Unit 7: The Firm and Its Customers](https://books.core-econ.org/the-economy-v1/book/text/07.html): 需求曲线表示在其他条件给定时，价格与需求量的关系；弹性使用相对变化衡量反应. 企业的成本、可用产能和需求共同约束生产选择.

两期市场价格与交易量的共同变化，还混合了需求和供给条件的移动，不能直接当成沿同一条需求曲线测得的弹性.
- [Introduction to Empirical Models of Demand · MIT 14.271 Lecture 7](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf): 离散选择需求模型需要先界定消费者能选择的产品集合、外部选项和市场大小. 相同的销售数字，放到不同选择集合和分母中，会给出不同的份额与替代关系. 这里采用模型的对象与边界，不采用讲义中的估计值.
- [Electric Power Annual 2024 · Tables 2.5–2.7](https://www.eia.gov/electricity/annual/html/epa_02_05.html): EIA 的售电量、收入和平均零售电价分表列示，并区分居民、商业、工业等用途.2024年居民售电量为1,482,874 K MWh、收入244,367 M 美元，平均价格表列16.48美分/kWh.

核对量、额与平均价要处理单位和四舍五入；年度平均价还含用户构成和计费结构的影响.
- [Manufacturers’ Shipments, Inventories, and Orders · May 2026 Full Report](https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf): Census 的 M3 报告把出货、新订单、未交订单和存货分开，分别描述已交付活动、期间订单流和期末余额. 本文使用固定的2026年5月报告及其中4月比较列.

新订单按净额口径使用；不能再次机械扣除取消量. 未交订单与月出货之比也不是每位客户实际等待时间.

EI-B 本批采用：工程机械固定4月修订/5月初值四表；USD M 、季调、未作价格调整. 与CAT公司渠道范围不对账. 季调新订单 N=S+ΔB 为数据产品定义，详见 EIBC-S07M；381不是三个独立需求观测的互证.

本批采用：April revised / May preliminary；SA M 美元；381定义性订单桥、存货+66分开.
- [Identifying Elasticities in Autocorrelated Time Series Using Causal Graphs](https://arxiv.org/pdf/2409.15530v1): 这篇工作论文研究带有自相关的时间序列中，弹性识别如何受因果结构影响. 本文引用其模型设定和因果图来说明识别假设的职责，不将论文中的特定估计推广成所有市场的价格反应.

## Content relations
```json
[
  {
    "from": "zh-ei03",
    "relation": "part_of",
    "to": "industry-dynamics",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei03",
    "relation": "uses_method",
    "to": "zh-ei06",
    "reason": "使用客户与产品边界；所需内容已就地复述"
  },
  {
    "from": "zh-ei03",
    "relation": "uses_method",
    "to": "zh-ei02",
    "reason": "区分平均价格、量价单位和期间"
  },
  {
    "from": "zh-ei03",
    "relation": "illustrated_by",
    "to": "case-ei-us-power-2024",
    "reason": "真实年度量价收入核对，非弹性估计"
  },
  {
    "from": "zh-ei03",
    "relation": "illustrated_by",
    "to": "EXP-EI-SUPPLY-DEMAND-01",
    "reason": "比较需求移动、供给移动和固定价格"
  },
  {
    "from": "zh-ei03",
    "relation": "illustrated_by",
    "to": "EXP-EI-FLEET-01",
    "reason": "设备存量更新与新购流量"
  },
  {
    "from": "zh-ei03",
    "relation": "supported_by",
    "to": "EI-S01-CORE-U7",
    "reason": "需求与弹性的教材约定",
    "scope": "§7.1、§7.8"
  },
  {
    "from": "zh-ei03",
    "relation": "supported_by",
    "to": "EI-S02-MIT-L7-2022",
    "reason": "同时性与工具变量条件",
    "scope": "slides 6、19–21"
  },
  {
    "from": "zh-ei03",
    "relation": "supported_by",
    "to": "EI-S07-TIEDEMANN-2024V1",
    "reason": "时间依赖下识别条件的方法警示，不输入经验系数",
    "scope": "§§2–4，Fig1"
  },
  {
    "from": "zh-ei03",
    "relation": "informs",
    "to": "zh-ei04",
    "reason": "传递愿购关系、时点及待解释的实际数量"
  },
  {
    "from": "case-ei-us-power-2024",
    "relation": "supported_by",
    "to": "EI-S04-EIA-2024",
    "reason": "用途构成原表",
    "scope": "Tables2.5–2.7的2023/2024居民年度行及表注；Table2.5的2024全部用途与合计",
    "original_scope": "Table 2.5，2024 Annual Totals及表注"
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 2/10
区分观测到的量价变化和可识别的需求关系.
再把产能、成本与供给约束放进同一结构.
Next: [供给、成本与有效产能](https://ou-liu-red-sugar.github.io/zh/notebook/supply-cost-capacity/)
