# 经济活动、部门与产业结构

区分交易角色、行业生产与公司实体，并用总产出—中间投入—增加值关系连接统计口径；同一公司可以跨多个业务和统计单位.

Entry: zh-ei01 | Node: EI-01 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 针对读者当前疑点教授EI-01.
先实际读取BEA Industries正文的GDP by Industry、Gross Output by Industry
和Input-Output Accounts：
https://www.bea.gov/resources/learning-center/what-to-know-industries
记录取得范围，说明增加值为何扣中间投入、为什么不同于利润.
未取得正文时记录缺失；同会话同版已完整读取可复用.
随后用三阶段生产例诊断：让读者解释交易额260与增加值120，并说明装配活动、劳动报酬、资本消耗和融资各自的位置. 已掌握时直接做无额外价值的转手迁移题，以能重建交易额及增加值、列出分析股东利润所需材料为完成标准.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei01",
  "node_id": "EI-01",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "具有足够数学背景的高年级本科至研究生",
  "learning_task": "区分**交易角色、行业生产与公司实体**，并用总产出—中间投入—增加值关系连接统计口径；同一公司可以跨多个业务和统计单位.",
  "body_source": "body_markdown",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 针对读者当前疑点教授EI-01.\n先实际读取BEA Industries正文的GDP by Industry、Gross Output by Industry\n和Input-Output Accounts：\nhttps://www.bea.gov/resources/learning-center/what-to-know-industries\n记录取得范围，说明增加值为何扣中间投入、为什么不同于利润.\n未取得正文时记录缺失；同会话同版已完整读取可复用.\n随后用三阶段生产例诊断：让读者解释交易额260与增加值120，并说明装配活动、劳动报酬、资本消耗和融资各自的位置. 已掌握时直接做无额外价值的转手迁移题，以能重建交易额及增加值、列出分析股东利润所需材料为完成标准.",
  "selected_branch": "current_question",
  "common_required_readings": [
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
  "required_readings_by_branch": {
    "current_question": [
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
    ]
  },
  "branch_selection": "使用当前分支完整必读单元，共同材料保留，行业部分随选择替换；原Prompt的默认诊断属于默认分支. 跨材料综合练习采用comparison所列全部材料，研究延伸仅在选择后启用.",
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "data_version": "2026-09-21-review-2",
    "meaning": "数字案例的同源输入；observed与teaching_assumption严格分开，不作为真实估计模型",
    "cases": [],
    "experiments": [
      {
        "id": "EXP-EI-VALUE-ADDED-01",
        "status": "teaching_assumption",
        "conditions": [
          "three production stages, final stage assembly not retail resale",
          "no imports, taxes, inventory changes",
          "same period and valuation basis"
        ],
        "gross_output": [
          40,
          100,
          120
        ],
        "intermediate_inputs": [
          0,
          40,
          100
        ],
        "value_added": [
          40,
          60,
          20
        ],
        "expected": {
          "gross_output_sum": 260,
          "intermediate_input_sum": 140,
          "value_added_sum": 120,
          "final_product_value": 120
        }
      }
    ],
    "specification_markdown": "## 交互与静态等价规格\n**组件`EI01-value-added`.** 固定教学输入三行`GO=[40,100,120]`、`IC=[0,40,100]`，选择`transactions / value-added`. 前者显示260并标“不可作为本例GDP”；后者逐行相减并显示120. 切换只改变阅读层，不修改活动或数据. 所有边分别标“中间产品交付”和“最终产品交付”，资金反向支付另用文字标出，不把两次箭头相加. 静态等价（零脚本与打印视图）就是上表和完整抵消式；键盘radio与文字标签均保留. 没有GDP动态预测功能.",
    "outputs_origin": "原稿共享输入与默认结果；数字身份保持observed或teaching_assumption"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
居民、企业、政府和境外可作为交易角色的概括；行业按生产活动归类，公司实体则可能同时包含多个业务和统计单位.

BEA 按生产活动组织行业统计：GDP by Industry 记录行业增加值，Gross Output by Industry 记录总产出，Input-Output Accounts 连接各行业的生产及使用. 行业通常沿 NAICS 分类. [^bea]

<span id="ei01-definitions"></span>

## 定义与边界

**总产出 $GO$** 计量特定期间的生产活动，各类业务按相应规则计量. **中间投入 $IC$** 为生产消耗的外购货物和服务. **增加值 $VA$** 为同口径总产出扣除中间投入，即 $VA=GO-IC$.

行业增加值由劳动报酬、总营业盈余及相关生产税净额等组成. 劳动报酬属于增加值分配；总营业盈余包含固定资本消耗，扣除后得到相应净额. 净利润还受融资及税务等项目影响. [^bea]

**存量**记录时点状态，如期末存货和未交订单；**流量**记录期间活动，如生产、销售和新订单. 借款本金属于融资流量，供多年使用的设备购买属于资本形成；两者分别影响融资状态与生产资源.

<span id="ei01-value-added"></span>

## 三阶段生产与增加值

教学经济包含原料生产、零件加工和最终装配三道工序. 设进口、存货变动与税价差均为零，所有产品期内售出，第一工序无外购中间投入.

| 生产阶段 | 总产出 | 中间投入 | 增加值 |
|---|---:|---:|---:|
| 原料生产 | 40 | 0 | 40 |
| 零件加工 | 100 | 40 | 60 |
| 最终装配 | 120 | 100 | 20 |
| 合计 | 260 | 140 | 120 |

三道销售额相加为40＋100＋120＝260，包含中间产品多次交付的价值. 每道扣除外购中间投入后，增加值合计 $40+(100-40)+(120-100)=120$，等于本例最终产品价值.

<div data-experiment-slot="lab-ei01"></div>

<span id="ei01-exercises"></span>

## 解释与迁移练习

在原料与零件加工之间增加一次成交价40、无额外服务价值的转手，其他生产活动不变. 交易额和增加值各怎样变化？原表还缺哪些信息，才能从增加值分析股东利润？

**解析.** 交易额增加40，该次转手的增加值为零，整条生产链增加值仍为120. 从增加值分析股东利润，还需劳动报酬、资本消耗、税费、融资成本和普通股归属等信息.

<span id="ei01-usage"></span>

[^bea]: EI-S03-BEA-INDUSTRIES. BEA，Industries，页面最后修改2021-02-24. 原文定位：GDP by Industry、Gross Output by Industry、Input-Output Accounts. https://www.bea.gov/resources/learning-center/what-to-know-industries

## Additional teaching material
## 三阶段生产的静态计算

原料、零件与最终装配的总产出分别40、100、120，中间投入分别0、40、100. 交易额合计260；逐阶段增加值为40、60、20，合计120. 各阶段产品依次交付，支付方向与交付相反.

增加一次价格40、无额外服务价值的转手后，交易额为300，增加值仍为120.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-EI-VALUE-ADDED-01",
    "status": "teaching_assumption",
    "conditions": [
      "three production stages, final stage assembly not retail resale",
      "no imports, taxes, inventory changes",
      "same period and valuation basis"
    ],
    "gross_output": [
      40,
      100,
      120
    ],
    "intermediate_inputs": [
      0,
      40,
      100
    ],
    "value_added": [
      40,
      60,
      20
    ],
    "expected": {
      "gross_output_sum": 260,
      "intermediate_input_sum": 140,
      "value_added_sum": 120,
      "final_product_value": 120
    },
    "title": "三阶段生产与增加值",
    "anchor": "ei01-value-added",
    "description": "原稿明确的教学构造；与真实行业观测分开.",
    "inputs": {
      "id": "EXP-EI-VALUE-ADDED-01",
      "status": "teaching_assumption",
      "conditions": [
        "three production stages, final stage assembly not retail resale",
        "no imports, taxes, inventory changes",
        "same period and valuation basis"
      ],
      "gross_output": [
        40,
        100,
        120
      ],
      "intermediate_inputs": [
        0,
        40,
        100
      ],
      "value_added": [
        40,
        60,
        20
      ],
      "expected": {
        "gross_output_sum": 260,
        "intermediate_input_sum": 140,
        "value_added_sum": 120,
        "final_product_value": 120
      }
    },
    "outputs_origin": "原稿shared-inputs.json；本导入保留原值，不执行新数值计算",
    "url": "/notebook/labs/ei-a/interactions.html#ei01"
  }
]
```

## Sources
- [Industries · BEA Learning Center](https://www.bea.gov/resources/learning-center/what-to-know-industries): 行业总产出衡量生产活动的总额，中间投入是生产中耗用的其他产品与服务，增加值保留本环节新增的部分. 投入产出表进一步追踪行业之间的供货和使用关系，避免把多次中间销售都当作最终新增价值.

## Content relations
```json
[
  {
    "from": "zh-ei01",
    "relation": "part_of",
    "to": "industry-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei01",
    "relation": "supported_by",
    "to": "EI-S03-BEA-INDUSTRIES",
    "reason": "增加值、总产出和投入产出账户的区别",
    "scope": "三个对应标题下的完整正文"
  },
  {
    "from": "zh-ei01",
    "relation": "illustrated_by",
    "to": "EXP-EI-VALUE-ADDED-01",
    "reason": "纯制造三阶段的重复计算与抵消"
  }
]
```

## Related entries
