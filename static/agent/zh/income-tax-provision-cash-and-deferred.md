# 所得税费用、现金税与递延税项

区分税费、已付税款、应交税与递延余额，用两期例子和区间检验理解差异.

Entry: zh-bf15 | Node: BF-15 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你现在教授BF-15《所得税费用、现金税与递延税项》. 对象是有微积分、线性代数及基本概率基础，但不假定受过会计训练的高年级本科至研究生. 先确认本篇行业/扩展分支和学习任务. 在讲解前，使用读取工具实际取得agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件）. optional_readings只有选中相应研究/扩展时才转为必读. 记录标题、版本、实际范围以及支持当前教学的关键设定；runtime_reading_log初始为空，不以编辑访问或参考清单冒充本次已读. 访问失败时尝试同版本官方等价正文；仍缺失就指出具体缺口，不拿摘要代替承重单元. 诊断任务：把2063税费、1282现金税和2060期末净递延资产放入三个并列关系，再走两期例. 沿当前同源正文、静态表和supplied_inputs逐段推进，先让读者分析再反馈，已会步骤直接跳过. 判断理解的尺度：完整给出税前/应税/当期税/递延税/现金和DTA；用21.6638–21.6766区间拒绝取整解释21.5. 最后迁移：改变教学税率或费用时点，复算；原报告税率差异不编造解释. 保留历史观测与教学设定身份、单位、期间、未解释差额；不得从本篇生成新估值或账户建议.

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
利润表中的所得税费用，不是本年银行账户里付出的全部税款；资产负债表中的递延税资产，也不是一笔随时可以取回的现金. 读税项需要同时维护期间、计量基础和权利义务，而不只找一个税率乘税前利润.

这一篇沿Salesforce FY2026税务附注，分开三组材料：**本期税费、当期现金税、期末递延税余额**. 随后用一组完整两期教学例子解释递延税为什么出现. 细节较多的税率调节与披露规则可以展开阅读，但“它们不是同一个数”必须先弄清.

<a id="bf15-tax-layers"></a>
## 1. 先把费用、应交、现金、递延放到正确的位置

所得税费用属于利润表期间项目. 在资产负债表法下，报告税费通常包含当期部分与递延部分；递延部分反映账面与计税基础等差异所形成未来税务后果的本期变化. Salesforce披露按差异预计转回年度已颁布的税率计量，并在必要时对不能达到实现条件的递延税资产设估值备抵. [^policy]

**当期税费**回答本期应确认的当期所得税影响；**应交所得税**是某日尚需结算的负债余额；**已付税款**是期间现金收付，可能涉及以前期间，也可能扣除了退税. 三者并不因为都带“当期”或“税”就相等.

在只含一种税应付款、且不存在预缴税资产、并购、汇兑或其他调整的简化账中，可以写成 `期末应交 = 期初应交 + 本期计提 − 本期支付`. 真实集团还可能需要加入或拆分其他项目. 这个关系说明为什么需要期初期末与调整信息，而不是授权我们把“税费减现金税”的差额全部塞进某一个递延账户.

递延税资产／负债又是另一组余额：它们关联未来的可扣除或应纳税后果，不是当前未付税款的同义词. 估值备抵关注递延税资产能否实现，要考虑适当性质、辖区与可用期间内的应税收入等证据；不能只因账上有DTA，就把它当作等额可分配现金. [^policy]

<a id="bf15-salesforce"></a>
## 2. 原表之一：税费怎样构成

Salesforce FY2026截至2026年1月31日. 以下完整保留Note 12所列三期境内外税前利润，以及当期／递延税费的联邦、州和外国分类；单位** M 美元**. 这里的“境外”是报告分组，不是把某国税制拿来替所有业务统一计算. [^taxnote]

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

2025的递延部分是负1,213，即在税费计算中形成利益；2026则为正959. 它们会显著改变税费与净利润的关系，但不能因此说2025收到了1,213现金退税，或2026恰好支付959递延税. 是否收付现金，需要另外一张表.

### 原表之二：当年实际支付多少

下面是同一附注的已付所得税、扣退款分类. Israel与Ireland在某些期间原表为破折号，此处数值表示为0；其他外国税款是合并类别，不是单一辖区. [^taxnote]

| 已付所得税，扣退款（ M 美元） | FY2026 | FY2025 | FY2024 |
| --- | --- | --- | --- |
| federal | 658 | 1,091 | 417 |
| state | 132 | 276 | 233 |
| Ireland | 92 | 139 | 0 |
| Israel | 0 | 287 | 129 |
| other_foreign | 400 | 268 | 248 |
| Total／合计 | 1,282 | 2,061 | 1,027 |


本期 `658 + 132 + 92 + 400 = 1,282`. 它比总税费2,063少781，却比当期税费1,104多178. 于是，两个快捷解释同时失败了：“付了1,282，所以税费应是1,282”；“总税费与付款的差额781就是新增递延税资产”. 后者连本期递延税费959都没有对上，更未考虑应交和预缴的时间变化.

正文没有给Salesforce构造一个未披露的应交税余额来补平这178. 要完成真实当前税结算桥，还需要对应期初、期末及其他变化的完整口径. 我们现在能确认的是三张原表各自的金额和身份，而不是已经穷尽税款来源.

### 原表之三：期末还留下什么递延余额

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


资本化研发对应DTA1,944，取得收入合同的资本化成本对应DTL912，购入无形资产对应DTL1,173. 这几行帮助我们找到经营与税基的联系：相同业务资源或费用，在财务报告与计税时可能有不同确认或扣除安排. 具体何时转回，还需要税基与期间资料；不能把每个DTA都简单说成“公司本年多交过的税”.

净递延税资产从3,489降至2,060，变化−1,429，也不等于本期递延税费959的相反数. 除了损益，收购、其他综合收益或其他事项也可能改变余额；本例没有完整逐项调节，因而不把470差额指定给其中任何一项.

这三组金额应并排看：`当期1,104 + 递延959 = 税费2,063`；现金税为1,282；期末递延净资产为2,060. 它们不是一条“2,063流向1,282、再流向2,060”的现金瀑布.

<a id="bf15-experiment"></a>
## 3. 用完整的两期例子理解递延税

我们现在做一组与Salesforce无关的教学设定. 每年在一笔特殊成本之前的利润均为200. 成本100在第一年已经发生并全额作为账面费用确认，第二年支付并按设定获准税前扣除；其他账面与税基一致，税率两年均为25%，当期税款当年付清. 无期初税余额、税收抵免、永久差异、税率变化或估值备抵，并假定第二年有充分适当应税利润，因此满足本例递延税资产确认条件.

第一年账面税前利润100，计税利润却为200，因为100还不能扣除. 当期税50并当期付出，但未来扣除100对应25的递延税资产，第一年递延税利益为−25. 因此税费为25，而不是现金税50. 第二年账面税前利润200，计税利润100，当期税25；原DTA25随扣除实现而转回，递延税费+25，合计税费50.

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


两年总税费75、总现金税75，但每年的分配不同. 这个等式成立是因为我们把所有其他差异排除了；不是说真实公司每两年一定自动完全抵销. 若没有足够可实现的未来扣除依据，DTA的确认及备抵需要另作判断，本实验不把该条件藏起来.

<div data-experiment-slot="EXP-BF15-TAX-LAYERS"></div>

实验把真实三组原表与两期教学设定分成两个视图. 你可以改变教学成本或税率，所有当期税、递延税、现金和余额一起更新，而不是只改一个税费标签.

<a id="bf15-rate-discrepancy"></a>
## 4. 一个必须保留的税率差异

Salesforce附注的税率调节表列出总税费2,063和有效税率21.5%；其主表及税注税前利润为9,520. 可是按这些金额相除得到 `2,063 / 9,520 × 100 ≈ 21.6702%`，并不等于21.5%. 原列百分比逐项相加也是21.5%，金额逐项相加是2,063. [^taxnote]

我们应同时保留原表与复算结果，将它标为**尚未解释的披露数值差异**. 不能把21.6702%默默换成21.5%，也不能在没有依据时发明某个适用税基、税项或计算方法来消掉它. 阅读税费、现金和递延构成仍然有用，但这组数不应被当作已经完全核对一致的单一有效税率.

<details>
<summary>展开原调节表与取整检验</summary>

以下只重排FY2026完整金额行，保留相关类别身份和原列百分比. 税法缩写用于对应原行，不在此展开税务操作规则；正负号按原件保留.

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


 M 美元显示取整，能否解释这0.1702个百分点？假设税费与税前利润各自误差都不超过0.5 M 美元，可能比率在

`100×(2,063−0.5)/(9,520+0.5) ≈ 21.6638%`

与

`100×(2,063+0.5)/(9,520−0.5) ≈ 21.6766%`

之间. 21.5%不在这个区间内. 因此，**不能把该差异归因于这两个金额的以 M 为单位的四舍五入**. 这只是排除了一种解释，没有自动证明另一种解释.

</details>

<a id="bf15-disclosure-update"></a>
<details>
<summary>现代披露：两个5%的分母不同</summary>

FASB ASU 2023-09细化了所得税披露. 公共企业适用于2024年12月15日之后开始的年度；其他企业适用于2025年12月15日之后开始的年度. 可提前采用；原则上前瞻应用，也允许对展示期间追溯应用. Salesforce披露在FY2026第四季度采用并追溯调整比较期披露. [^asu][^adoption]

最容易混淆的是两个5%. 税率调节中某些项目的进一步拆分阈值，基于持续经营税前利润乘适用法定税率形成的金额的5%；现金税按主要辖区披露的阈值，则是当年已付所得税、扣退款总额的5%. 适用类别、性质和辖区还要沿条款阅读，不能只保留一个百分数.

用本例金额展示分母差异：`9,520×21%×5%=99.96`，而 `1,282×5%=64.1`，单位都是 M 美元. 前者不是总实际税费的5%，后者也不是税前利润的5%. 这是计算口径演示，不是对公司每个税项披露作合规结论. [^asu]

</details>

<a id="bf15-exercise"></a>
## 5. 练习与解析

<strong>题一. </strong>“税费2,063、现金税1,282，差额781等于新增递延税资产”为什么不成立？

**解析**. 费用与付款的差额混合了确认与结算时间. 实际递延税费是959，期末净递延税资产变化又是−1,429，三者不同. 当前应交、预缴和其他变化还未完整识别，不能拿差额替代某个账户.

**题二**. 两期教学例子中，第二年DTA变成0，为什么总税费反而是50，而现金税只有25？

**解析**. 第二年实际取得100税前扣除，计税利润降为100、当期税25；第一年已经提前确认过的未来税收利益25此时转回，形成递延税费25. 合计税费50与第二年账面税前利润200×25%一致.

**题三**. 原表有效税率21.5%与2,063／9,520不同，能直接用“取整”结束解释吗？

**解析**. 不能. 金额各±0.5的最宽边界只容许约21.6638%至21.6766%，不包含21.5%. 当前可以指出并保留差异，不能把尚未找到的原因写成事实.

完成这三题后，再面对另一份税务附注，你应先找到费用、现金、当前结算与递延余额各自的位置，再比较税率. 税率是这些结构的一种汇总，不是可以替代它们的万能输入.

[^policy]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Income Taxes”，p.69；Note 12递延税资产实现和估值备抵，pp.88–89；美国GAAP资产负债表法.
[^taxnote]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 12 Income Taxes，pp.86–88；税前利润、当期／递延税费、有效税率调节、已付税款及递延税资产负债. 本文的数值差异仅作原列金额与百分比的算术核对.
[^asu]: FASB，[ASU 2023-09](https://storage.fasb.org/ASU%202023-09.pdf)，740-10-50-10A/10B、50-11A、50-12至12C、50-22/23、65-9；PDF物理第12–16、18、21页；用于Codification修订及生效期.
[^adoption]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Recently Adopted Accounting Pronouncements”；FY2026第四季度追溯采用ASU 2023-09.


## Additional teaching material
交互算法：三组税项分别加总；rounding interval=[100*(expense−.5)/(pretax+.5),100*(expense+.5)/(pretax−.5)]. 两期教学的当期税和递延税分列.

边界：区间需正分母不穿0；不补造税率差异成因；税费、现金和期末余额不连成连续瀑布.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF15-TAX-LAYERS. 所有输入保留历史/教学身份；行业选择与打印由配套页面提供.

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
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.
- [FASB ASU 2023-09 — Income Taxes (Topic 740): Improvements to Income Tax Disclosures](https://storage.fasb.org/ASU%202023-09.pdf): 所得税披露更新：税率调节与现金税辖区两种5%门槛、生效期和追溯选项. 不是完整税务计量准则.

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
