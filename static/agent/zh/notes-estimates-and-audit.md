# 财报附注、会计估计与审计信息

沿真实收入事项从主表追到政策、合同证据和审计程序，判断材料支持什么结论.

Entry: zh-bf09 | Node: BF-09 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你现在教授BF-09《财报附注、会计估计与审计信息》. 对象是有微积分、线性代数及基本概率基础、但不假定受过会计训练的高年级本科至研究生. 先确认行业/扩展分支和学习任务；讲解前实际读取agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件），optional_readings仅在选中相应研究/扩展时读取. 记录标题、版本、实际范围和支持当前教学的关键设定；runtime_reading_log从空数组开始，不以参考清单或先前编辑访问代替本次读取. 读取失败时先找同版本官方等价正文；仍缺失则明确缺口，不以摘要代替承重单元. 诊断：从41,525收入出发，让读者指出识别distinct obligations和SSP分别需要哪层材料. 沿同源正文、静态表和supplied_inputs推进，先让读者分析再反馈；已会步骤跳过. 通过尺度：能解释一项实际审计程序回答什么；CAM不是单独意见，样本研究不是公司风险排名. 迁移：给一个寿命估计变动，要求提出政策、明细、估计变化及审计证据路线. 保留历史观测与教学设定身份、单位、期间和未解释差额.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "BBC-S16",
      "access": {
        "kind": "html_full_text",
        "uri": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS3101"
      },
      "required_unit": {
        "locator": ".01–.05及. 11–.17完整单元",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "CAM适用位置、条件、程序和意见边界"
      },
      "supports": "CAM定义、判断因素及沟通要求；CAM不是单独意见，也不改变总体意见.",
      "branch": "common",
      "required_when_selected": false,
      "title": "PCAOB AS 3101 — The Auditor’s Report on an Audit of Financial Statements When the Auditor Expresses an Unqualified Opinion",
      "authors": [
        "Public Company Accounting Oversight Board"
      ],
      "version": "Official standard page checked 2026-09-21"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Operations p.58；Note1 Revenue Recognition pp.64–65；Note2 Contract Balances p.71；Revenue Recognition CAM pp.54–55完整单元",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "同一收入事项的三层证据"
      },
      "supports": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "Fiscal year ended 2026-01-31"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BBC-R02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s11142-026-09938-3"
      },
      "required_unit": {
        "locator": "Introduction；method/sample；findings；conclusion",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "首年CAM实施的质性研究"
      },
      "supports": "CAM实施中的组织行为质性证据；30位高层审计人员、七家事务所，不代表随机项目总体.",
      "branch": "research",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "canonical_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
    "selected_keys": [
      "sf_contract",
      "synthetic.ssp"
    ],
    "data": {
      "sf_contract": {
        "source_id": "BBC-C01",
        "locator": "Note 2, printed p.71; Note 1 Revenue Recognition; balance sheet p.57",
        "periods": [
          "FY2026",
          "FY2025"
        ],
        "begin": [
          20743,
          19003
        ],
        "billings_and_other": [
          45099,
          39635
        ],
        "over_time": [
          39041,
          35628
        ],
        "point_in_time": [
          2484,
          2267
        ],
        "end": [
          24317,
          20743
        ],
        "receivables_net": [
          14339,
          11945
        ],
        "contract_assets": [
          818,
          724
        ],
        "rpo_current_bn": 35.1,
        "rpo_noncurrent_bn": 37.3,
        "rpo_total_bn": 72.4,
        "rpo_precision_bn": 0.1,
        "other_note": "billings and other包括汇兑、合同资产及企业合并；FY2026包含Informatica收购日未赚取收入651 M 美元.",
        "identity": "historical_observation",
        "unit": "USD M except RPO USD billions"
      },
      "synthetic": {
        "ssp": {
          "id": "SYN-SSP-01",
          "data_identity": "teaching_assumption",
          "total": 120,
          "license_ssp": 100,
          "support_ssp": 50,
          "alternative_license_ssp": 80,
          "alternative_support_ssp": 80,
          "support_months": 12,
          "unit": "arbitrary currency units",
          "terms": "Distinct licence delivered at inception; support recognized evenly over one year. No variable consideration, costs, tax or refund."
        }
      }
    },
    "default_results_file": "labs/default-results.json"
  },
  "diagnosis": "从41525收入出发，请读者指出识别distinct obligations和SSP需要哪层材料.",
  "feedback_criteria": "能解释一项实际审计程序回答什么；CAM不是单独意见，样本研究不是公司风险排名.",
  "transfer_task": "给一个寿命估计变动，提出政策、明细、估计变化及审计证据的路线.",
  "experiment_ids": [
    "EXP-BF09-EVIDENCE"
  ]
}
```

## Supplied entry
主表汇总金额，附注展开确认政策、构成和估计依据，审计报告说明总体意见及涉及困难审计判断的事项. 同一收入金额需要沿这些材料追溯到合同承诺、交付时点和价格分配.

<a id="bf09-evidence-layers"></a>
## 1. 主表、附注与审计报告

Salesforce FY2026合并利润表报告收入41,525 M 美元，其中订阅及支持39,388，专业服务及其他2,137. 合同中的履约义务、价格分配和确认时点见以下附注与审计报告. [^sfstatement]

| 材料层 | 本例的具体位置 | 它回答什么 |
| --- | --- | --- |
| 主表 | Consolidated Statements of Operations，p.58 | 41,525属于哪个期间；收入和成本如何汇总 |
| 政策 | Note 1 Revenue Recognition，pp.64–65 | 何时转移控制；履约义务是否可区分；怎样分配价格 |
| 余额与明细 | Note 2 Contract Balances，p.71 | 已确认收入、应收／合同资产和剩余履约之间还有哪些关系 |
| 审计报告 | Revenue Recognition CAM，pp.54–55 | 审计难点在哪；审计师描述了哪些应对程序 |

<a id="bf09-revenue-policy"></a>
## 2. 履约义务与单独售价

Note 1区分不同交付. 云服务通常在服务期间分期确认；可供使用的软件许可可能在控制权转移时确认；支持与专业服务还要按各自履约方式处理. 合同若包含多项承诺，就要判断它们能否分别识别，再按相对单独售价分配交易价格. [^sfpolicy]

客户能否从一项商品或服务本身获益、承诺之间是否高度相互依赖，以及企业是否将多项投入整合为综合交付，会影响可区分履约义务的判断. Salesforce披露了识别履约义务、估计单独售价及分配价格的方法；评价具体估计还需要对应合同和销售证据.

教学设定：合同总价120，包含立即交付的可区分软件使用权和一年的可区分支持服务；无折扣分配例外、可变对价、税或融资成分. 单独售价分别为100和50，按相对售价分配后，许可分到 `120×100/150=80`，支持分到40. 许可满足时点确认条件且已交付，支持均匀履约，第一月累计收入为 `80 + 40/12 ≈ 83.333`.

若有证据支持的单独售价改为80和80，两项各分60，第一月累计收入为 `60 + 60/12 = 65`. 两种分配在服务结束时均累计确认120，差别来自收入进入各期间的节奏.

| 教学假设：单独售价 | 许可分配 | 支持分配 | 第一月累计收入 | 一年最终收入 |
| --- | --- | --- | --- | --- |
| 100与50 | 80 | 40 | 83.33… | 120 |
| 80与80 | 60 | 60 | 65 | 120 |

比较两组估计，需要可比独立销售、合同条款、交付内容和适用政策；算术敏感性只能说明参数如何改变确认节奏.

<a id="bf09-cam"></a>
## 3. CAM的定义与意见边界

PCAOB AS 3101定义的关键审计事项（CAM）须同时满足：来自财务报表审计，已向或按要求应向审计委员会沟通；涉及对报表重大的账户或披露；涉及尤其具有挑战性、主观或复杂的审计师判断. [^cam]

审计师须识别事项、说明认定理由与审计应对，并指向相关账户或披露. CAM属于事项沟通，不对该事项单独发表审计意见，也不替代其他应当出具的审计意见. [^cam]

Salesforce收入确认CAM涉及履约义务识别、价格分配及单独售价估计. 审计应对包括了解和测试相关控制、评价产品与服务的可区分性、抽取合同检查条款、评价单独售价依据及检查计算. [^sfcam]

<a id="bf09-evidence-practice"></a>
## 4. 经营变化与会计估计的归因

收入增速与未赚取收入增速不同，可能同时受期间、范围和确认节奏影响：前者是全年流量，后者是年末余额；Note 2的未赚取收入滚动包含汇兑、合同资产和企业合并；同一合同也可能同时包含时点与期间确认的履约义务. 归因需要把这些变化与新增合同及实际交付分开. [^sfcontract]

寿命或减值估计可沿同样的证据关系追溯：资产余额与费用行定位金额，成本及累计折旧或减值滚动解释变动，寿命、使用方式和估计变更说明计量依据. 审计报告若讨论相关判断，再核其认定理由与程序.

<a id="bf09-experiment"></a>
## 5. 合同分配与CAM实施

<div data-experiment-slot="EXP-BF09-EVIDENCE"></div>

<a id="bf09-research"></a>
<details>
<summary>研究选读：正式标准与实际实施经验</summary>

Griffith、Rousseau与Zehms发表于2026年的研究，通过七家事务所30位资深审计人员的调查和访谈，研究CAM早期实施经验. 作者报告的组织惯例，包括避免与同行显著不同、关注披露数量、尽量避免让客户措手不及等，可能影响最终披露提供多少新增信息. [^research]

这些质性发现来自CAM早期实施环境；外推到其他时期或项目，取决于审计组织惯例和制度环境是否可比.

</details>

<a id="bf09-exercise"></a>
## 6. 证据判断练习

**题一**. 看到Revenue Recognition CAM，以下哪句最接近原件支持的范围？

A．审计师认定该公司收入有重大错报. B．收入事项符合CAM条件，涉及尤其困难、主观或复杂的审计判断，报告解释了相应应对. C．这家公司一定比没有收入CAM的公司风险高.

**解析**. B. A把事项沟通错当成不利或单独审计意见；C把不同项目的披露直接变成跨公司排名. 完整判断还要看总体意见、事项条件和实际程序.

**题二**. 教学合同单独售价从100／50变成80／80时，第一月收入从83.33左右变成65. 能否由此断言修改者操纵了利润？

**解析**. 两组参数只给出了收入确认节奏的敏感性. 判断估计是否合理还需要可比销售、合同和售价依据；判断利润影响还需要相应费用.

**迁移题**. 一项设备净额下降，请给出至少两种需要区分的原因和应查材料.

**解析**. 折旧、处置和减值均可使设备净额下降. 固定资产滚动及费用记录可区分各项贡献，寿命变化还需结合估计变更说明.

[^sfstatement]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Consolidated Statements of Operations，p.58；年度截至2026-01-31，单位 M 美元.
[^sfpolicy]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 Revenue Recognition，pp.64–65；履约义务、时点／期间确认与Standalone Selling Price.
[^sfcontract]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 2 Contract Balances，p.71；未赚取收入滚动及脚注.
[^cam]: PCAOB，[AS 3101](https://pcaobus.org/oversight/standards/auditing-standards/details/AS3101)，.11–.17；CAM定义、判断因素、沟通事项及其不构成单独意见的规定.
[^sfcam]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Report of Independent Registered Public Accounting Firm，Revenue Recognition CAM，pp.54–55.
[^research]: Emily E. Griffith、Linette M. Rousseau、Karla M. Zehms，[Why do critical audit matters lack teeth? Insights from auditors’ implementation experiences](https://link.springer.com/article/10.1007/s11142-026-09938-3)，2026，*Review of Accounting Studies* 31:1481–1520；引言、方法、样本、主要发现与结论.

## Additional teaching material
交互算法：source layer selector; allocationA=price*SSPA/(SSPA+SSPB), support analogous; first-month revenue=A+B/12.

模型采用正文的可区分履约义务、确认方式与单独售价设定.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF09-EVIDENCE.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF09-EVIDENCE",
    "title": "财报附注、会计估计与审计信息：交互实验",
    "anchor": "bf09-experiment",
    "description": "沿真实收入事项从主表追到政策、合同证据和审计程序，判断材料支持什么结论.",
    "inputs": {
      "source": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
      "selected_keys": [
        "sf_contract",
        "synthetic.ssp"
      ],
      "units": "各原表自带单位；教学合同/成本/税例使用独立教学货币单位",
      "controls": "见labs/interactions.html具名label；全部算法使用engine.js"
    },
    "outputs": {
      "default": {
        "a": 80,
        "b": 40
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/default-results.json"
    },
    "algorithm": "source layer selector; allocationA=price*SSPA/(SSPA+SSPB), support analogous; first-month revenue=A+B/12.",
    "boundaries": "单独售价模型是教学设定；仅对给定distinct obligations和履约模式；CAM不是独立意见.",
    "static_equivalent": {
      "reader_anchors": [
        "bf09-experiment"
      ],
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF09-EVIDENCE",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static-equivalents.md",
      "markdown_body": "<a id=\"EXP-BF09-EVIDENCE\"></a>\n## BF-09 · 财报附注、会计估计与审计信息\n\n单独售价模型是教学设定；仅对给定distinct obligations和履约模式；CAM不是独立意见.\n\n| 证据层 | 能回答 | 需要继续取得 |\n| --- | --- | --- |\n| 主表 | 合并收入41,525与期间 | 合同义务、确认政策和估计 |\n| 政策及Note2 | 控制权、相对单独售价及余额范围 | 实际合同及SSP证据 |\n| CAM | 审计中复杂判断及应对程序 | 不能据此给公司打分或视作单独意见 |\n\n\n| 教学单独售价 | 许可分配 | 支持分配 | 首月累计收入 |\n| --- | --- | --- | --- |\n| 100／50 | 80 | 40 | 83.333333 |\n| 80／80 | 60 | 60 | 65 |\n\n\n反馈：选B正确——CAM说明复杂审计判断和应对. A错把CAM当错报结论；C把披露沟通变成公司排名.\n"
    },
    "data_identity": "historical_observations_and_separately_labelled_teaching_assumptions"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): Salesforce FY2026的订阅收入政策、合同余额、现金流、股东权益、EPS、收入关键审计事项及所得税附注. 年报分别披露债务账面金额与本金、并购对价、回购及股数变化和汇兑项目.
- [Why do critical audit matters lack teeth? Insights from auditors’ implementation experiences](https://link.springer.com/article/10.1007/s11142-026-09938-3): 对七家事务所的30位高层审计人员开展质性访谈，研究CAM实施中的组织行为.
- [PCAOB AS 3101 — The Auditor’s Report on an Audit of Financial Statements When the Auditor Expresses an Unqualified Opinion](https://pcaobus.org/oversight/standards/auditing-standards/details/AS3101): 关键审计事项（CAM）的定义、判断因素和沟通要求；CAM在总体审计意见之外说明具体审计事项，不构成对该事项的单独意见.

## Content relations
```json
[
  {
    "from": "zh-bf09",
    "relation": "part_of",
    "to": "business-reports",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf09",
    "relation": "illustrated_by",
    "to": "bf09-cam",
    "reason": "固定期间原始材料带读",
    "period": "FY2026",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf09-cam",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "该案例的原表与附注",
    "locator": "Auditor Revenue Recognition CAM pp.54–55；Balance Sheets p.57; Operations p.58；Equity p.60; Cash Flows pp.61–62；Note 1 credit risk/revenue pp.63–65; income tax and ASU adoption pp.69–70；Note 2 Contract Balances/RPO pp.71–72；Note 11 p.85; Note 12 pp.86–89; Note 13 pp.89–90",
    "scope": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节."
  },
  {
    "from": "zh-bf09",
    "relation": "supported_by",
    "to": "BBC-S16",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": ".01–.05；.11–.17",
    "scope": "CAM定义、判断因素及沟通要求；CAM不是单独意见，也不改变总体意见."
  },
  {
    "from": "zh-bf09",
    "relation": "supported_by",
    "to": "BBC-R02",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "Introduction; method/sample; implementation findings; conclusion",
    "scope": "CAM实施中的组织行为质性证据；30位高层审计人员、七家事务所，不代表随机项目总体."
  },
  {
    "from": "bf09-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF09-EVIDENCE",
    "reason": "沿真实收入事项从主表追到政策、合同证据和审计程序，判断材料支持什么结论.",
    "at_section": "bf09-experiment",
    "conditions": "单独售价模型是教学设定；仅对给定distinct obligations和履约模式；CAM不是独立意见."
  }
]
```

## Related entries
