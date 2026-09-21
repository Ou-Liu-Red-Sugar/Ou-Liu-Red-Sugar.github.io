# 所得税费用、现金税与递延税项

区分税费、已付税款、应交税与递延余额，用两期例子和区间检验理解差异.

Entry: zh-bf15 | Node: BF-15 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你现在教授BF-15《所得税费用、现金税与递延税项》. 对象是有微积分、线性代数及基本概率基础、但不假定受过会计训练的高年级本科至研究生. 讲解前实际读取agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件），optional_readings仅在选中相应研究/扩展时读取. 记录标题、版本、实际范围和支持当前教学的关键设定；runtime_reading_log从空数组开始，不以参考清单或先前编辑访问代替本次读取. 读取失败时先找同版本官方等价正文；仍缺失则明确缺口，不以摘要代替承重单元. 诊断：把2,063税费、1,282现金税和2,060期末净递延税资产放入三个并列关系，再走两期例. 沿同源正文、静态表和supplied_inputs推进，先让读者分析再反馈；已会步骤跳过. 通过尺度：完整给出税前利润、应税利润、当期税、递延税、现金和DTA；用约21.664%–21.677%的区间排除“21.5%仅由两个总额取整造成”的解释. 迁移：改变教学税率或费用时点并复算；原报告税率差异保持未解释. 保留历史观测与教学设定身份、单位、期间和未解释差额.

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
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Note1 Income Taxes p.69与Recently Adopted Accounting Pronouncements；Note12 pp.86–89税前、税费、现金税、税率调节、DTA/DTL及备抵完整单元",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "三组真实关系、实现条件、ASU追溯采用和税率差异"
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
      "source_id": "BBC-S17",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202023-09.pdf"
      },
      "required_unit": {
        "locator": "740-10-50-10A/10B、11A、12–12C、22–23与65-9；PDF12–16/18/21",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "两种5%门槛与生效/追溯选项"
      },
      "supports": "所得税披露更新：税率调节与现金税辖区两种5%门槛、生效期和追溯选项. 不是完整税务计量准则.",
      "branch": "disclosure-rules",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "canonical_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
    "selected_keys": [
      "sf_tax",
      "synthetic.tax"
    ],
    "data": {
      "sf_tax": {
        "source_id": "BBC-C01",
        "locator": "Note 12 pp.86–88; Note 1 Income Taxes and ASU adoption",
        "periods": [
          "FY2026",
          "FY2025",
          "FY2024"
        ],
        "pretax_domestic": [
          6627,
          5119,
          4045
        ],
        "pretax_foreign": [
          2893,
          2319,
          905
        ],
        "pretax": [
          9520,
          7438,
          4950
        ],
        "current": {
          "federal": [
            413,
            1284,
            940
          ],
          "state": [
            72,
            245,
            199
          ],
          "foreign": [
            619,
            925,
            417
          ]
        },
        "deferred": {
          "federal": [
            618,
            -982,
            -640
          ],
          "state": [
            121,
            -167,
            -182
          ],
          "foreign": [
            220,
            -64,
            80
          ]
        },
        "expense": [
          2063,
          1241,
          814
        ],
        "cash_paid": {
          "federal": [
            658,
            1091,
            417
          ],
          "state": [
            132,
            276,
            233
          ],
          "Ireland": [
            92,
            139,
            0
          ],
          "Israel": [
            0,
            287,
            129
          ],
          "other_foreign": [
            400,
            268,
            248
          ]
        },
        "cash_total": [
          1282,
          2061,
          1027
        ],
        "displayed_etr_percent": 21.5,
        "amount_rounding_halfwidth_m": 0.5,
        "deferred_balances": {
          "periods": [
            "2026-01-31",
            "2025-01-31"
          ],
          "dta_rows": [
            [
              "Loss and deduction carryforwards",
              "亏损及扣除结转",
              200,
              209
            ],
            [
              "Deferred stock-based compensation",
              "递延股权薪酬",
              260,
              237
            ],
            [
              "Tax credit carryforwards",
              "税收抵免结转",
              906,
              769
            ],
            [
              "Accrued liabilities",
              "应计负债",
              494,
              482
            ],
            [
              "Intangible assets",
              "无形资产",
              1541,
              1694
            ],
            [
              "Operating lease liabilities",
              "经营租赁负债",
              685,
              740
            ],
            [
              "Unearned revenue",
              "未赚取收入",
              124,
              -28
            ],
            [
              "Capitalized research and development",
              "资本化研发",
              1944,
              2431
            ],
            [
              "Other",
              "其他",
              17,
              65
            ]
          ],
          "gross_dta": [
            6171,
            6599
          ],
          "valuation_allowance": [
            -967,
            -786
          ],
          "dta_after_allowance": [
            5204,
            5813
          ],
          "dtl_rows": [
            [
              "Costs capitalized to obtain revenue contracts",
              "取得收入合同资本化成本",
              -912,
              -850
            ],
            [
              "Purchased intangible assets",
              "购入无形资产",
              -1173,
              -650
            ],
            [
              "Depreciation and amortization",
              "折旧摊销",
              -193,
              -164
            ],
            [
              "Strategic investments and other investments",
              "战略及其他投资",
              -347,
              -106
            ],
            [
              "Operating lease right-of-use assets",
              "经营租赁使用权资产",
              -519,
              -554
            ]
          ],
          "total_dtl": [
            -3144,
            -2324
          ],
          "net_deferred_tax_asset": [
            2060,
            3489
          ]
        },
        "reconciliation_2026": [
          [
            "U.S. federal statutory rate",
            "美国联邦法定税率金额",
            1999,
            21.0
          ],
          [
            "State and local income taxes, net",
            "州及地方税净额",
            114,
            1.2
          ],
          [
            "Foreign tax effects: Ireland rate differential",
            "外国税项：爱尔兰税率差",
            -197,
            -2.1
          ],
          [
            "Ireland other",
            "爱尔兰其他",
            -24,
            -0.3
          ],
          [
            "Israel reorganization",
            "以色列重组",
            0,
            0
          ],
          [
            "Israel other",
            "以色列其他",
            0,
            0
          ],
          [
            "Other foreign tax effects",
            "其他外国税项",
            463,
            4.9
          ],
          [
            "GILTI, net of foreign tax credits",
            "GILTI扣外国税抵免",
            152,
            1.6
          ],
          [
            "Foreign-derived intangible income deduction",
            "FDII扣除",
            -188,
            -2.0
          ],
          [
            "Other foreign tax credits",
            "其他外国税抵免",
            -160,
            -1.7
          ],
          [
            "Other cross-border tax effects",
            "其他跨境税项",
            28,
            0.3
          ],
          [
            "Research and development tax credits",
            "研发税收抵免",
            -368,
            -3.9
          ],
          [
            "Changes in valuation allowances",
            "估值备抵变化",
            70,
            0.7
          ],
          [
            "Reorganization (nontaxable/nondeductible)",
            "重组（非应税／不可扣除）",
            0,
            0
          ],
          [
            "Share-based payment awards",
            "股份支付奖励",
            4,
            0.0
          ],
          [
            "Other nontaxable/nondeductible",
            "其他非应税／不可扣除",
            30,
            0.3
          ],
          [
            "Changes in unrecognized tax benefits",
            "未确认税收利益变化",
            151,
            1.6
          ],
          [
            "Other adjustments",
            "其他调整",
            -11,
            -0.1
          ]
        ],
        "identity": "historical_observation",
        "unit": "USD M; tax reconciliation percentages separately identified"
      },
      "synthetic": {
        "tax": {
          "id": "SYN-TAX-01",
          "data_identity": "teaching_assumption",
          "base_profit_each_year": 200,
          "expense": 100,
          "rate": 0.25,
          "unit": "arbitrary currency units",
          "terms": "Book expense in year 1; tax deduction and cash payment for underlying expense in year 2; tax paid in each year equals current tax; no opening tax balances, permanent differences, credits or valuation allowance; sufficient future taxable profit."
        }
      }
    },
    "default_results_file": "labs/default-results.json"
  },
  "diagnosis": "把2063税费、1282现金税和2060期末净递延资产放入三个并列关系，再走两期例.",
  "feedback_criteria": "完整给出税前/应税/当期税/递延税/现金和DTA；用21.6638–21.6766区间拒绝取整解释21.5.",
  "transfer_task": "改变教学税率或费用时点，复算；原报告税率差异不编造解释.",
  "experiment_ids": [
    "EXP-BF15-TAX-LAYERS"
  ]
}
```

## Supplied entry
所得税费用、现金税、应交税和递延税余额分别对应不同期间与计量基础. Salesforce FY2026税务附注可同时观察本期税费、当期现金税和期末递延税余额；两期教学例用于展示递延税的形成与转回.

<a id="bf15-tax-layers"></a>
## 1. 税费、结算与递延税项

所得税费用属于利润表期间项目. 在资产负债表法下，报告税费通常包含当期部分与递延部分；递延部分反映账面与计税基础等差异所形成未来税务后果的本期变化. Salesforce披露按差异预计转回年度已颁布的税率计量，并在必要时对不能达到实现条件的递延税资产设估值备抵. [^policy]

**当期税费**记录本期应确认的当期所得税影响；**应交所得税**记录某日尚需结算的负债；**已付税款**记录期间现金收付，可能涉及以前期间，并按披露口径扣除退税.

在只有一种税应付款、无预缴税资产、并购、汇兑及其他调整的简化账中，`期末应交 = 期初应交 + 本期计提 − 本期支付`. 集团税款结算还需加入实际存在的其他项目.

递延税资产／负债记录未来可扣除或应纳税的后果. 递延税资产的实现取决于适当性质、辖区和可用期间内的应税收入等证据，估值备抵反映其中预计无法实现的部分. [^policy]

<a id="bf15-salesforce"></a>
## 2. Salesforce税费、现金税与递延余额

Salesforce FY2026截至2026年1月31日. Note 12列示境内外税前利润，以及当期／递延税费中的联邦、州和外国税项，单位：M 美元.[^taxnote]

| 税前利润与税费（ M 美元） | FY2026 | FY2025 | FY2024 |
| --- | --- | --- | --- |
| Income before taxes: domestic／境内税前 | 6,627 | 5,119 | 4,045 |
| Foreign／境外税前 | 2,893 | 2,319 | 905 |
| Total pretax／税前合计 | 9,520 | 7,438 | 4,950 |
| Current: federal／当期联邦税 | 413 | 1,284 | 940 |
| Current: state／当期州税 | 72 | 245 | 199 |
| Current: foreign／当期外国税 | 619 | 925 | 417 |
| Total current／当期税费合计 | 1,104 | 2,454 | 1,556 |
| Deferred: federal／递延联邦税 | 618 | (982) | (640) |
| Deferred: state／递延州税 | 121 | (167) | (182) |
| Deferred: foreign／递延外国税 | 220 | (64) | 80 |
| Total deferred／递延税费合计 | 959 | (1,213) | (742) |
| Total provision／所得税费用合计 | 2,063 | 1,241 | 814 |

本期税前利润为 `6,627 + 2,893 = 9,520`. 当期税费 `413 + 72 + 619 = 1,104`，递延税费 `618 + 121 + 220 = 959`，因此总税费 `1,104 + 959 = 2,063`，净利润为 `9,520 − 2,063 = 7,457`.

FY2025递延税利益1,213减少当期总税费，FY2026递延税费用959增加总税费. 实际现金收付另列如下.

### 已付所得税

下面是同一附注的已付所得税、扣退款分类. Israel与Ireland在某些期间原表为破折号，此处数值表示为0；其他外国税款是合并类别，不是单一辖区. [^taxnote]

| 已付所得税，扣退款（ M 美元） | FY2026 | FY2025 | FY2024 |
| --- | --- | --- | --- |
| federal | 658 | 1,091 | 417 |
| state | 132 | 276 | 233 |
| Ireland | 92 | 139 | 0 |
| Israel | 0 | 287 | 129 |
| other_foreign | 400 | 268 | 248 |
| Total／合计 | 1,282 | 2,061 | 1,027 |

本期现金税 `658 + 132 + 92 + 400 = 1,282`，比当期税费1,104多178. 这项结算差额需结合应交或预缴税的期初期末余额及其他变动解释.

### 递延税余额

截至2026年1月31日，递延税资产总额6,171，扣967估值备抵后为5,204；再扣递延税负债3,144，净额为2,060. 两期全部组成如下，单位 M 美元，负数保留. [^taxnote]

| 原行／中文 | 2026-01-31 | 2025-01-31 |
| --- | --- | --- |
| Loss and deduction carryforwards／亏损及扣除结转 | 200 | 209 |
| Deferred stock-based compensation／递延股权薪酬 | 260 | 237 |
| Tax credit carryforwards／税收抵免结转 | 906 | 769 |
| Accrued liabilities／应计负债 | 494 | 482 |
| Intangible assets／无形资产 | 1,541 | 1,694 |
| Operating lease liabilities／经营租赁负债 | 685 | 740 |
| Unearned revenue／未赚取收入 | 124 | (28) |
| Capitalized research and development／资本化研发 | 1,944 | 2,431 |
| Other／其他 | 17 | 65 |
| Gross deferred tax assets／递延税资产总额 | 6,171 | 6,599 |
| Valuation allowance／估值备抵 | (967) | (786) |
| Deferred tax assets, net／扣备抵后递延税资产 | 5,204 | 5,813 |
| Costs capitalized to obtain revenue contracts／取得收入合同资本化成本 | (912) | (850) |
| Purchased intangible assets／购入无形资产 | (1,173) | (650) |
| Depreciation and amortization／折旧摊销 | (193) | (164) |
| Strategic investments and other investments／战略及其他投资 | (347) | (106) |
| Operating lease right-of-use assets／经营租赁使用权资产 | (519) | (554) |
| Total deferred tax liabilities／递延税负债总额 | (3,144) | (2,324) |
| Net deferred tax assets／递延税资产净额 | 2,060 | 3,489 |

资本化研发对应DTA1,944，取得收入合同资本化成本对应DTL912，购入无形资产对应DTL1,173. 同一业务资源或费用在财务报告与计税中采用不同确认和扣除安排，形成这些差异；转回时间还需对应税基与期间资料.

净递延税资产减少1,429，其中本期损益中的递延税费用为959，另470尚缺完整调节. 收购、其他综合收益及其他事项也可影响递延税余额，具体贡献需逐项核实.

<a id="bf15-experiment"></a>
## 3. 暂时性差异的形成与转回

教学设定：每年在一笔特殊成本之前的利润均为200. 成本100在第一年发生并全额作为账面费用确认，第二年支付并按设定获准税前扣除；其他账面与税基一致，税率两年均为25%，当期税款当年付清. 无期初税余额、税收抵免、永久差异、税率变化或估值备抵，并假定第二年有充分适当应税利润，因此满足本例递延税资产确认条件.

第一年账面税前利润100，应税利润200，当期税50并付清. 第二年可扣除100形成DTA25，第一年确认递延税利益25，总税费为25. 第二年账面税前利润200、应税利润100，当期税25；DTA25随扣除实现而转回，确认递延税费用25，总税费50.

| 教学项目 | 第一年 | 第二年 |
| --- | --- | --- |
| 特殊成本前利润 | 200 | 200 |
| 本期账面成本 | 100 | 0 |
| 本期税前扣除 | 0 | 100 |
| 账面税前利润 | 100 | 200 |
| 应税利润 | 200 | 100 |
| 当期税费／现金税 | 50 | 25 |
| 递延税费（负数为利益） | (25) | 25 |
| 总税费 | 25 | 50 |
| 期末递延税资产 | 25 | 0 |
| 期末应交税（假设当年付清） | 0 | 0 |

两年总税费与总现金税均为75，成本扣除的时间差在第二年转回.

<div data-experiment-slot="EXP-BF15-TAX-LAYERS"></div>

<a id="bf15-rate-discrepancy"></a>
## 4. 有效税率披露与金额复算差异

Salesforce税率调节表列示总税费2,063、有效税率21.5%；税前利润为9,520，金额复算 `2,063 / 9,520 × 100 ≈ 21.670%`. 原列百分比合计21.5%，金额合计2,063，差异原因尚未识别.[^taxnote]

<details>
<summary>展开原调节表与取整检验</summary>

FY2026税率调节表的金额与原列百分比如下.

| 调节行（2026，原行重排与中文） | 金额： M 美元 | 原列百分比 |
| --- | --- | --- |
| U.S. federal statutory rate／美国联邦法定税率金额 | 1,999 | 21.0% |
| State and local income taxes, net／州及地方税净额 | 114 | 1.2% |
| Foreign tax effects: Ireland rate differential／外国税项：爱尔兰税率差 | (197) | -2.1% |
| Ireland other／爱尔兰其他 | (24) | -0.3% |
| Israel reorganization／以色列重组 | 0 | 0% |
| Israel other／以色列其他 | 0 | 0% |
| Other foreign tax effects／其他外国税项 | 463 | 4.9% |
| GILTI, net of foreign tax credits／GILTI扣外国税抵免 | 152 | 1.6% |
| Foreign-derived intangible income deduction／FDII扣除 | (188) | -2.0% |
| Other foreign tax credits／其他外国税抵免 | (160) | -1.7% |
| Other cross-border tax effects／其他跨境税项 | 28 | 0.3% |
| Research and development tax credits／研发税收抵免 | (368) | -3.9% |
| Changes in valuation allowances／估值备抵变化 | 70 | 0.7% |
| Reorganization (nontaxable/nondeductible)／重组（非应税／不可扣除） | 0 | 0% |
| Share-based payment awards／股份支付奖励 | 4 | 0.0% |
| Other nontaxable/nondeductible／其他非应税／不可扣除 | 30 | 0.3% |
| Changes in unrecognized tax benefits／未确认税收利益变化 | 151 | 1.6% |
| Other adjustments／其他调整 | (11) | -0.1% |
| Effective tax rate／原表合计 | 2,063 | 21.5% |

税费与税前利润按M美元取整. 若两者取整误差均不超过0.5 M，比率下限约为 `100×(2,063−0.5)/(9,520+0.5) ≈ 21.664%`，上限约为 `100×(2,063+0.5)/(9,520−0.5) ≈ 21.677%`. 21.5%位于区间之外，因此两个总额的取整无法解释这一差异.

</details>

<a id="bf15-disclosure-update"></a>
<details>
<summary>披露门槛与计量基数</summary>

FASB ASU 2023-09细化了所得税披露. 公共企业适用于2024年12月15日之后开始的年度；其他企业适用于2025年12月15日之后开始的年度. 可提前采用；原则上前瞻应用，也允许对展示期间追溯应用. Salesforce披露在FY2026第四季度采用并追溯调整比较期披露. [^asu][^adoption]

税率调节中指定项目进一步拆分的5%阈值，以持续经营税前利润乘适用法定税率所得金额为基数；现金税按主要辖区披露的5%阈值，以当年已付所得税扣退款总额为基数. 具体拆分还取决于条款规定的类别、性质和辖区.

用本例金额计算，两项门槛分别为 `9,520×21%×5%=99.96` 和 `1,282×5%=64.1`，单位：M 美元.[^asu]

</details>

<a id="bf15-exercise"></a>
## 5. 练习与解析

<strong>题一. </strong>“税费2,063、现金税1,282，差额781等于新增递延税资产”为什么不成立？

**解析**. 费用与付款的差额混合了确认与结算时间. 实际递延税费是959，期末净递延税资产变化又是−1,429，三者不同. 当前应交、预缴和其他变化还未完整识别，不能拿差额替代某个账户.

**题二**. 两期教学例子中，第二年DTA变成0，为什么总税费反而是50，而现金税只有25？

**解析**. 第二年实际取得100税前扣除，计税利润降为100、当期税25；第一年已经提前确认过的未来税收利益25此时转回，形成递延税费25. 合计税费50与第二年账面税前利润200×25%一致.

**题三**. 原表有效税率21.5%与2,063／9,520不同，能直接用“取整”结束解释吗？

**解析**. 金额各±0.5的取整范围对应约21.664%–21.677%，不包含21.5%，因此该解释被排除.

[^policy]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Income Taxes”，p.69；Note 12递延税资产实现和估值备抵，pp.88–89；美国GAAP资产负债表法.
[^taxnote]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 12 Income Taxes，pp.86–88；税前利润、当期／递延税费、有效税率调节、已付税款及递延税资产负债.
[^asu]: FASB，[ASU 2023-09](https://storage.fasb.org/ASU%202023-09.pdf)，740-10-50-10A/10B、50-11A、50-12至12C、50-22/23、65-9；PDF物理第12–16、18、21页；用于Codification修订及生效期.
[^adoption]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Recently Adopted Accounting Pronouncements”；FY2026第四季度追溯采用ASU 2023-09.

## Additional teaching material
交互算法：三组税项分别加总；rounding interval=[100*(expense−.5)/(pretax+.5),100*(expense+.5)/(pretax−.5)]. 两期教学的当期税和递延税分列.

取整区间的分母下限须大于0.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF15-TAX-LAYERS.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF15-TAX-LAYERS",
    "title": "所得税费用、现金税与递延税项：交互实验",
    "anchor": "bf15-experiment",
    "description": "区分税费、已付税款、应交税与递延余额，用两期例子和区间检验理解差异.",
    "inputs": {
      "source": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
      "selected_keys": [
        "sf_tax",
        "synthetic.tax"
      ],
      "units": "各原表自带单位；教学合同/成本/税例使用独立教学货币单位",
      "controls": "见labs/interactions.html具名label；全部算法使用engine.js"
    },
    "outputs": {
      "default": {
        "period": "FY2026",
        "current": 1104,
        "deferred": 959,
        "expense": 2063,
        "cash_paid": 1282,
        "pretax": 9520,
        "computed_rate_percent": 21.67016806722689,
        "displayed_2026_rate": 21.5,
        "deferred_snapshot_period": "2026-01-31",
        "dta_gross": 6171,
        "valuation_allowance": -967,
        "dta_after_allowance": 5204,
        "dtl": -3144,
        "net_deferred_asset": 2060
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/default-results.json"
    },
    "algorithm": "三组税项分别加总；rounding interval=[100*(expense−.5)/(pretax+.5),100*(expense+.5)/(pretax−.5)]. 两期教学的当期税和递延税分列.",
    "boundaries": "区间需正分母不穿0；不补造税率差异成因；税费、现金和期末余额不连成连续瀑布.",
    "static_equivalent": {
      "reader_anchors": [
        "bf15-experiment"
      ],
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF15-TAX-LAYERS",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static-equivalents.md",
      "markdown_body": "<a id=\"EXP-BF15-TAX-LAYERS\"></a>\n## BF-15 · 所得税费用、现金税与递延税项\n\n区间需正分母不穿0；不补造税率差异成因；税费、现金和期末余额不连成连续瀑布.\n\n| 三个独立组 | 公式／结果 |\n| --- | --- |\n| 当期税+递延税 | 1,104+959=2,063 |\n| 已付现金税 | 658+132+92+400=1,282 |\n| 期末递延余额 | 6,171−967=5,204；5,204−3,144=2,060 |\n\n\n| 取整检验 | % |\n| --- | --- |\n| 机械率 | 21.670168 |\n| 原列示 | 21.5 |\n| 下界 | 21.663778 |\n| 上界 | 21.676559 |\n\n\n| 教学年度 | 账面税前 | 应税 | 当期税 | 递延税 | 税费 | 现金税 | 期末DTA | 应交 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 1 | 100 | 200 | 50 | -25 | 25 | 50 | 25 | 0 |\n| 2 | 200 | 100 | 25 | 25 | 50 | 25 | 0 | 0 |\n\n\n金额取整区间不含21.5%；两种原件/复算结果并存，不补造原因. 两期教学采用每年特殊费用前利润200、第一年账面费用100、第二年支付且扣除、税率25%、当期税当年付清，无其他差异和备抵，有充分适当的未来应税利润."
    },
    "data_identity": "historical_observations_and_separately_labelled_teaching_assumptions"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): Salesforce FY2026的订阅收入政策、合同余额、现金流、股东权益、EPS、收入关键审计事项及所得税附注. 年报分别披露债务账面金额与本金、并购对价、回购及股数变化和汇兑项目.
- [FASB ASU 2023-09 — Income Taxes (Topic 740): Improvements to Income Tax Disclosures](https://storage.fasb.org/ASU%202023-09.pdf): 所得税披露更新：税率调节与现金税辖区的两种 5% 门槛、生效期和追溯选项.

## Content relations
```json
[
  {
    "from": "zh-bf15",
    "relation": "part_of",
    "to": "business-accounts",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf15",
    "relation": "uses_method",
    "to": "zh-bf06",
    "reason": "按本篇实际使用的局部能力调用；正文已作必要就地补充，不锁为整篇硬先修"
  },
  {
    "from": "zh-bf15",
    "relation": "uses_method",
    "to": "zh-bf07",
    "reason": "按本篇实际使用的局部能力调用；正文已作必要就地补充，不锁为整篇硬先修"
  },
  {
    "from": "zh-bf15",
    "relation": "illustrated_by",
    "to": "bf15-salesforce",
    "reason": "固定期间原始材料带读",
    "period": "FY2026/FY2025/FY2024; balances2026/2025",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf15-salesforce",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "该案例的原表与附注",
    "locator": "Auditor Revenue Recognition CAM pp.54–55；Balance Sheets p.57; Operations p.58；Equity p.60; Cash Flows pp.61–62；Note 1 credit risk/revenue pp.63–65; income tax and ASU adoption pp.69–70；Note 2 Contract Balances/RPO pp.71–72；Note 11 p.85; Note 12 pp.86–89; Note 13 pp.89–90",
    "scope": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节."
  },
  {
    "from": "zh-bf15",
    "relation": "supported_by",
    "to": "BBC-S17",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "740-10-50-10A/10B,11A,12–12C,22–23;65-9；PDF physical pp.12–16,18,21",
    "scope": "所得税披露更新：税率调节与现金税辖区两种5%门槛、生效期和追溯选项. 不是完整税务计量准则."
  },
  {
    "from": "bf15-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF15-TAX-LAYERS",
    "reason": "区分税费、已付税款、应交税与递延余额，用两期例子和区间检验理解差异.",
    "at_section": "bf15-experiment",
    "conditions": "区间需正分母不穿0；不补造税率差异成因；税费、现金和期末余额不连成连续瀑布."
  }
]
```

## Related entries
