# 收入、应收与合同余额

依据履约和收款权利条件区分应收、合同资产、合同负债及RPO，迁移到四份明确条款.

Entry: zh-bf10 | Node: BF-10 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你现在教授BF-10《收入、应收与合同余额》. 对象是有微积分、线性代数及基本概率基础、但不假定受过会计训练的高年级本科至研究生. 讲解前实际读取agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件），optional_readings仅在选中相应研究/扩展时读取. 记录标题、版本、实际范围和支持当前教学的关键设定；runtime_reading_log从空数组开始，不以参考清单或先前编辑访问代替本次读取. 读取失败时先找同版本官方等价正文；仍缺失则明确缺口，不以摘要代替承重单元. 诊断：比较同为未开票时B合同1月末为何是应收120、C合同为何是合同资产60，答案必须落到无条件收款权是否成立. 在B合同保持1月10日履约不变，把无条件权利日从1月10日移到2月10日，再分别改变发票日，观察1月31日AR/CA. 沿同源正文、静态表和supplied_inputs推进，先让读者分析再反馈；已会步骤跳过. 通过尺度：B默认AR120、C默认CA60；B权利延至2月10日则1月末CA120；只改发票日不改变权利分类；RPO减预收不能当成应收. 迁移：给一个新的先履约后开票合同，要求列出仍缺的收款权事实，再决定应收、合同资产或合同负债. 保留历史观测与教学设定身份、单位、期间和未解释差额.

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
      "source_id": "BBC-S19",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202016-13.pdf"
      },
      "required_unit": {
        "locator": "ASC606-10-45-3/45-4；PDF179–180",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "按权利而不是发票分界"
      },
      "supports": "合同资产与应收权界线：只待时间经过的无条件权利为应收；已经履约但收款仍附其他条件才落入相应合同资产.",
      "branch": "common",
      "required_when_selected": false,
      "title": "FASB ASU 2016-13 — ASC 606-10-45-3 and 45-4 reproduced amendments",
      "authors": [
        "Financial Accounting Standards Board"
      ],
      "version": "June 2016"
    },
    {
      "source_id": "BBC-C01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm"
      },
      "required_unit": {
        "locator": "Note1 credit-risk/receivables和Revenue Recognition pp.63–65；Note2 Contract Balances/RPO pp.71–72；BS p.56相关行",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "应收、合同资产、预收和RPO的实际范围"
      },
      "supports": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Salesforce, Inc. FY2026 Form 10-K",
      "authors": [
        "Salesforce, Inc."
      ],
      "version": "Fiscal year ended 2026-01-31"
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm"
      },
      "required_unit": {
        "locator": "Note1 Revenue Recognition/Membership Fees pp.47–48；Income p.37与BS p.39对应行",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "会员零售不同履约时点"
      },
      "supports": "会员零售利润、完整现金流和库存政策；MD&A明确定义Gross Margin. 库存和应付的余额反向变化893与现金流调整963不同，70保留未归因.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "FY2025；截至2025-08-31；比较列采用同一报告"
    }
  ],
  "optional_readings": [
    {
      "source_id": "BBC-R03",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s11142-026-09936-5"
      },
      "required_unit": {
        "locator": "Research design；affected-firm分类；短期结果；§6长期分析；conclusion",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "区分采用冲击研究与公司当期结论"
      },
      "supports": "收入准则采用、收入不确定性与债务融资的研究设计；短期与长期分析分开，不直接类推公司当期融资成本.",
      "branch": "research",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "canonical_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
    "selected_keys": [
      "sf_contract",
      "synthetic.contract"
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
        "contract": {
          "id": "SYN-CONTRACT-120",
          "data_identity": "teaching_assumption",
          "consideration": 120,
          "unit": "arbitrary currency units",
          "terms": "Four bounded contracts; distinct promises, fixed consideration, no returns, taxes, financing, credit losses or cost; dates govern accounting, invoice alone does not create unconditional rights.",
          "presets": {
            "prepaid": {
              "rights_and_performance_terms": "全年均匀服务；2026-01-01付款已无条件到期.",
              "events": [
                {
                  "type": "right",
                  "date": "2026-01-01",
                  "fraction": 1,
                  "label": "付款义务已无条件到期"
                },
                {
                  "type": "invoice",
                  "date": "2026-01-01",
                  "fraction": 1,
                  "label": "开具全年账单"
                },
                {
                  "type": "cash",
                  "date": "2026-01-05",
                  "fraction": 1,
                  "label": "收到服务款"
                },
                {
                  "type": "performance",
                  "date": "2026-01-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第1个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-02-28",
                  "fraction": 0.08333333333333333,
                  "label": "完成第2个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-03-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第3个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-04-30",
                  "fraction": 0.08333333333333333,
                  "label": "完成第4个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-05-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第5个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-06-30",
                  "fraction": 0.08333333333333333,
                  "label": "完成第6个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-07-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第7个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-08-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第8个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-09-30",
                  "fraction": 0.08333333333333333,
                  "label": "完成第9个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-10-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第10个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-11-30",
                  "fraction": 0.08333333333333333,
                  "label": "完成第11个月服务"
                },
                {
                  "type": "performance",
                  "date": "2026-12-31",
                  "fraction": 0.08333333333333333,
                  "label": "完成第12个月服务"
                }
              ]
            },
            "unbilled": {
              "rights_and_performance_terms": "1月10日交付即取得无条件收款权；后续仅待时间经过，开票是行政步骤.",
              "events": [
                {
                  "type": "performance",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "控制权转移、交付完成"
                },
                {
                  "type": "right",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "收款只待时间经过"
                },
                {
                  "type": "invoice",
                  "date": "2026-02-01",
                  "fraction": 1,
                  "label": "行政开票"
                },
                {
                  "type": "cash",
                  "date": "2026-02-28",
                  "fraction": 1,
                  "label": "收到货款"
                }
              ]
            },
            "conditional": {
              "rights_and_performance_terms": "两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制. 首项已履约，但须第二项完成后才取得整笔无条件权利.",
              "events": [
                {
                  "type": "performance",
                  "date": "2026-01-10",
                  "fraction": 0.5,
                  "label": "首项独立交付完成"
                },
                {
                  "type": "performance",
                  "date": "2026-02-10",
                  "fraction": 0.5,
                  "label": "第二项独立交付完成"
                },
                {
                  "type": "right",
                  "date": "2026-02-10",
                  "fraction": 1,
                  "label": "第二项交付条件解除"
                },
                {
                  "type": "invoice",
                  "date": "2026-02-11",
                  "fraction": 1,
                  "label": "开票"
                },
                {
                  "type": "cash",
                  "date": "2026-03-01",
                  "fraction": 1,
                  "label": "收到货款"
                }
              ]
            },
            "pos": {
              "rights_and_performance_terms": "1月10日当面交付，即取得整笔无条件权利.",
              "events": [
                {
                  "type": "performance",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "交付商品"
                },
                {
                  "type": "right",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "取得无条件权利"
                },
                {
                  "type": "invoice",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "开具收据"
                },
                {
                  "type": "cash",
                  "date": "2026-01-10",
                  "fraction": 1,
                  "label": "客户付款"
                }
              ]
            }
          },
          "same_day_order": [
            "performance",
            "right",
            "invoice",
            "cash"
          ],
          "scope_note": "假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同."
        }
      }
    },
    "default_results_file": "labs/default-results.json"
  },
  "diagnosis": "比较B与C在同为未开票时为何一个是应收、一个是合同资产；再在B中保持履约1月10日不变，把无条件权利日延至2月10日.",
  "feedback_criteria": "B默认1月末AR120、C默认CA60；B权利延至2月10日后1月末CA120、AR0；只改发票日不改变无条件权利事实；RPO减预收不能当应收.",
  "transfer_task": "给一份新的先履约后开票合同，先写出权利何时变成无条件这一缺失事实；分别只改变权利日和发票日，判断AR/CA何时真正变化.",
  "experiment_ids": [
    "EXP-BF10-CONTRACT-TIMING"
  ]
}
```

## Supplied entry
收入确认、无条件收款权、开票与收款可以发生在不同日期，因此应收、合同资产与合同负债必须按履约和权利条件区分. Salesforce与Costco的披露也说明，同一家公司内不同业务对象可以对应不同确认节奏.

<a id="bf10-rights"></a>
## 1. 对价权利与履约条件

**应收款**表示无条件的对价收取权：取得这笔对价只需等待约定的付款时间经过. **合同资产**则对应已经向客户转移商品或服务、但对价权利仍附有其他条件的情形，并排除已列作应收的部分. 合同负债是已收到或已到期应收的对价中，仍需向客户交付商品或服务的义务. [^rights]

未开票金额可以已经形成无条件应收款；已确认收入也可能仍附有另一项交付条件，形成合同资产. 分类取决于合同权利，发票日期本身不足以区分两者.

无条件收款权还面临客户违约风险，信用损失另按适用政策处理. Salesforce坏账准备考虑历史损失、逾期天数、特定收款风险和可支持的经济预测；已确认收入部分的准备进入相应费用，超过该部分的增量可能冲减未赚取收入. [^ar]

<a id="bf10-timeline"></a>
## 2. 合同事件与余额

以下为教学设定：总对价120，日期属于2026年，金额为教学货币单位；忽略成本、税费、信用损失、退款、可变对价和融资成分.

**A：提前年度收费**. 1月1日付款已无条件到期并开票，1月5日收款；全年每个月均匀履约10. 1月1日应收120与合同负债120并存，3月末已收现金120、累计收入30、合同负债90.

**B：先交付、后行政开票**. 1月10日交付完成即取得无条件收款权，2月1日开票，2月28日付款. 1月末已确认收入120、应收120，合同资产为0.

**C：首项已交付，收款还取决于第二项交付**. 两个可区分的承诺各分配60，1月10日和2月10日分别完成. 合同约定第二项完成后才取得整笔无条件收款权；第一项控制权已在1月10日转移，不另附会推迟该项收入确认的实质验收条件. 1月末收入60、合同资产60；2月10日第二项也完成，累计收入120，收款条件解除，余额转成应收120. 2月11日开票、3月1日收款只是后续步骤.

**D：当面交易**. 1月10日交货、权利成立、开具收据并当场付清，当天最终状态是现金120、收入120，没有剩余应收或合同余额.

| 观察时点 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 |
| --- | --- | --- | --- | --- | --- |
| A：1月1日开票后 | 0 | 0 | 120 | 0 | 120 |
| A：3月31日 | 30 | 120 | 0 | 0 | 90 |
| B：1月31日、仍未开票 | 120 | 0 | 120 | 0 | 0 |
| C：1月31日 | 60 | 0 | 0 | 60 | 0 |
| C：2月10日条件解除后 | 120 | 0 | 120 | 0 | 0 |
| C：3月1日收款后 | 120 | 120 | 0 | 0 | 0 |
| D：1月10日全部完成后 | 120 | 120 | 0 | 0 | 0 |

B与C在1月末均未开票. B已取得无条件收款权；C的收款权仍取决于第二项交付，因此分别列作应收款和合同资产.

<div data-experiment-slot="EXP-BF10-CONTRACT-TIMING"></div>

<a id="bf10-salesforce"></a>
## 3. Salesforce：应收、合同资产与未赚取收入

Salesforce通常按年度提前开票，一般要求在开票后30天内付款. 已开票金额根据控制权是否转移，记入应收及未赚取收入或收入. [^policy]

截至2026年1月31日，应收净额14,339 M 美元，上年11,945；合同资产818，上年724. 合同资产已包含在预付及其他流动资产、递延税及其他资产净额等主表项目中. [^contract]

未赚取收入的完整两期滚动如下. 减少额以括号显示，单位 M 美元. [^contract]

| 原行／含义 | FY2026 | FY2025 |
| --- | --- | --- |
| Beginning balance／期初 | 20,743 | 19,003 |
| Billings and other／开票及其他 | 45,099 | 39,635 |
| Revenue recognized over time／期间确认 | (39,041) | (35,628) |
| Revenue recognized at a point in time／时点确认 | (2,484) | (2,267) |
| Ending balance／期末 | 24,317 | 20,743 |

45,099包括开票及汇兑、合同资产、企业合并等其他变动，其中Informatica收购日带入未赚取收入651. 开票流量与现金收款的衔接还需应收变动及其调整项，见[权责发生与跨表联系](https://ou-liu-red-sugar.github.io/zh/notebook/accrual-and-statement-links/).

### 剩余履约义务

同日披露的剩余履约义务（RPO）是72.4 B 美元，其中预计未来12个月确认的current RPO为35.1，之后的为37.3. 它描述尚未确认的已签约未来收入，包括未赚取收入及未开票合同金额. [^rpo]

RPO减未赚取收入得到约48.1 B 美元，对应剩余履约义务中尚未计入未赚取收入的部分. RPO按0.1 B 美元披露，差额沿用这一精度. 应收与合同资产则按已经形成的对价权利及其条件分类.

current RPO指预计未来12个月确认收入的部分. 合同期限、续约时点、许可交付、汇率和并购都会改变RPO，预测收入时需把这些因素与预计交付时间结合.

<a id="bf10-retail"></a>
## 4. Costco商品与会员服务

Costco FY2025会员费收入为5,323 M 美元，期末递延会员费为2,854，上期2,501. 会员费按会员期限分期确认，递延余额对应期末尚待履约的义务. [^cost]

商品销售大多在销售点确认，电商等业务依控制权转移安排. 当面交货收款接近教学合同D，全年会员服务接近A；两类业务的履约期间不同.

应收余额变化还可能来自交易量、结算周期及交易对手构成. 分析时需先拆应收组成，再将客户货款与对应销售、收款记录匹配.

<a id="bf10-research"></a>
<details>
<summary>研究选读：收入规则与债务融资</summary>

Lee、Lee与Sadka发表于2026年的研究，以ASC 606采用及公司披露的重大会计影响区分研究对象，比较收入不确定性和债务融资相关结果，并分别讨论短期与较长时期. [^research]

研究将披露ASC 606具有重大会计影响的公司列为受影响组，采用差分中的差分设计. 分组依据企业披露，解释因果效应依赖平行趋势等识别条件；研究估计针对该样本与采用事件. [^research]

</details>

<a id="bf10-exercise"></a>
## 5. 练习与解析

**题一**. 合同B在1月末尚未开票，为什么应收120而不是合同资产120？若发票提早到1月5日，又会自动提前确认收入吗？

**解析**. 1月10日交付使收款权无条件成立，故1月末列应收. 行政开票日期不改变本例的控制权转移与合同权利.

**题二**. 合同C在1月末确认收入60，却没有应收. 这是不是矛盾？

**解析**. 第一项可区分履约义务已完成，收入确认60；对价权仍取决于第二项交付，故列合同资产. 若验收条件阻止第一项控制权转移，收入确认日期也随之改变.

**题三**. RPO增加，是否证明收款加快？

**解析**. RPO是未确认的合同收入存量. 合同期限延长、签约与续约季节性、业务组合及并购都可能使其增加；收款速度需匹配应收、开票、逾期和现金流资料.

[^rights]: FASB，[ASU 2016-13所载ASC 606-10-45-3、45-4](https://storage.fasb.org/ASU%202016-13.pdf)，印刷pp.173–174／PDF物理179–180页. 合同资产与无条件收款权定义.
[^ar]: Salesforce，[FY2026 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Concentrations of Credit Risk”，pp.63–64，应收及备抵政策完整小节.
[^policy]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 Revenue Recognition，pp.64–65；MD&A “Seasonal Nature of Unearned Revenue, Accounts Receivable and Operating Cash Flow”.
[^contract]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，合并资产负债表p.57、Note 2 Contract Balances与Unearned Revenue及脚注p.71，金额 M 美元.
[^rpo]: 同份[10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 2 “Remaining Performance Obligation”，pp.71–72；金额按公司以 B 美元一位小数披露，current表示预计未来12个月确认.
[^cost]: Costco，[FY2025 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm)，利润表p.37、资产负债表p.39、Note 1 Revenue Recognition／Membership Fees，pp.47–48. 商品与会员服务的确认方式分别阅读.
[^research]: [ASC 606, revenue uncertainty, and cost of debt: short-term and long-term consequences](https://link.springer.com/article/10.1007/s11142-026-09936-5)，Lee、Lee与Sadka，2026，*Review of Accounting Studies* 31:1019–1050；研究设计、受影响分组、短期与长期分析及结论.

## Additional teaching material
交互算法：bounded contract events 按日期排序；同日显示顺序为 performance → right → invoice → cash. R=累计履约，U=已成立无条件收款权，C=已收现金；AR=max(U-C,0)；X=R-max(U,C)；CA=max(X,0)；CL=max(-X,0).

可改变：首个／唯一履约日、无条件收款权成立日、开票日、收款日和观察日. 改变权利日代表教学合同的权利事实改变；单独改变发票日不改变AR/合同资产分类.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF10-CONTRACT-TIMING.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF10-CONTRACT-TIMING",
    "title": "收入、应收与合同余额：交互实验",
    "anchor": "bf10-timeline",
    "description": "用明确条款的教学合同，把履约、无条件收款权成立、开票和收款作为可分别改变日期的事件；观察AR、合同资产、合同负债、现金和收入怎样随权利事实改变.",
    "inputs": {
      "source": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/inputs.json",
      "selected_keys": [
        "sf_contract",
        "synthetic.contract"
      ],
      "units": "各原表自带单位；教学合同/成本/税例使用独立教学货币单位",
      "controls": "合同预设、首个/唯一履约日、无条件收款权成立日、开票日、收款日、观察日；见labs/interactions.html，全部算法使用engine.js."
    },
    "outputs": {
      "default": {
        "name": "conditional",
        "price": 120,
        "terms": "两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制. 首项已履约，但须第二项完成后才取得整笔无条件权利. 当前首个/唯一履约日：2026-01-10；无条件权利日：2026-02-10；开票日：2026-02-11；实际收款日：2026-03-01. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.",
        "events": [
          {
            "type": "performance",
            "date": "2026-01-10",
            "amount": 60,
            "label": "首项独立交付完成"
          },
          {
            "type": "performance",
            "date": "2026-02-10",
            "amount": 60,
            "label": "第二项独立交付完成"
          },
          {
            "type": "right",
            "date": "2026-02-10",
            "amount": 120,
            "label": "第二项交付条件解除"
          },
          {
            "type": "invoice",
            "date": "2026-02-11",
            "amount": 120,
            "label": "开票"
          },
          {
            "type": "cash",
            "date": "2026-03-01",
            "amount": 120,
            "label": "收到货款"
          }
        ],
        "timeline": [
          {
            "date": "2026-01-10",
            "event": "首项独立交付完成",
            "type": "performance",
            "amount": 60,
            "revenue": 60,
            "unconditional": 0,
            "billed": 0,
            "cash": 0,
            "receivable": 0,
            "contract_asset": 60,
            "contract_liability": 0,
            "assets": 60,
            "equity": 60,
            "residual": 0
          },
          {
            "date": "2026-02-10",
            "event": "第二项独立交付完成",
            "type": "performance",
            "amount": 60,
            "revenue": 120,
            "unconditional": 0,
            "billed": 0,
            "cash": 0,
            "receivable": 0,
            "contract_asset": 120,
            "contract_liability": 0,
            "assets": 120,
            "equity": 120,
            "residual": 0
          },
          {
            "date": "2026-02-10",
            "event": "第二项交付条件解除",
            "type": "right",
            "amount": 120,
            "revenue": 120,
            "unconditional": 120,
            "billed": 0,
            "cash": 0,
            "receivable": 120,
            "contract_asset": 0,
            "contract_liability": 0,
            "assets": 120,
            "equity": 120,
            "residual": 0
          },
          {
            "date": "2026-02-11",
            "event": "开票",
            "type": "invoice",
            "amount": 120,
            "revenue": 120,
            "unconditional": 120,
            "billed": 120,
            "cash": 0,
            "receivable": 120,
            "contract_asset": 0,
            "contract_liability": 0,
            "assets": 120,
            "equity": 120,
            "residual": 0
          },
          {
            "date": "2026-03-01",
            "event": "收到货款",
            "type": "cash",
            "amount": 120,
            "revenue": 120,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 0,
            "assets": 120,
            "equity": 120,
            "residual": 0
          }
        ],
        "same_day_order": "performance → right → invoice → cash"
      },
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/default-results.json",
      "default_cutoff": "2026-01-31"
    },
    "algorithm": "与BF04共享同一事件引擎和合同输入；按法律权利条件而非是否开票分类.",
    "boundaries": "四种固定条款、固定对价；日期调整是教学变式. 移动无条件权利日代表合同权利事实改变，不是单纯行政改期；开票事件本身不创造无条件权利. 不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎.",
    "static_equivalent": {
      "reader_anchors": [
        "bf10-timeline"
      ],
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF10-CONTRACT-TIMING",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static-equivalents.md",
      "markdown_body": "<a id=\"EXP-BF10-CONTRACT-TIMING\"></a>\n## BF-10 · 收入、应收与合同余额\n\n四类日期可分别改变；以下为默认条款的静态结果. 移动无条件权利日表示改变教学合同的权利事实.\n\n只比较四份明确条款；现实合同的条件要由人读取；不将所有未开票款归为CA.\n\n### 合同prepaid · 教学总价120\n\n全年均匀服务；2026-01-01付款已无条件到期. 当前开票日：2026-01-01；实际收款日：2026-01-05. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-01 | 付款义务已无条件到期 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |\n| 2026-01-01 | 开具全年账单 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |\n| 2026-01-05 | 收到服务款 | 0 | 120 | 0 | 0 | 120 | 0 | 0 |\n| 2026-01-31 | 完成第1个月服务 | 10 | 120 | 0 | 0 | 110 | 10 | 0 |\n| 2026-02-28 | 完成第2个月服务 | 20 | 120 | 0 | 0 | 100 | 20 | 0 |\n| 2026-03-31 | 完成第3个月服务 | 30 | 120 | 0 | 0 | 90 | 30 | 0 |\n| 2026-04-30 | 完成第4个月服务 | 40 | 120 | 0 | 0 | 80 | 40 | 0 |\n| 2026-05-31 | 完成第5个月服务 | 50 | 120 | 0 | 0 | 70 | 50 | 0 |\n| 2026-06-30 | 完成第6个月服务 | 60 | 120 | 0 | 0 | 60 | 60 | 0 |\n| 2026-07-31 | 完成第7个月服务 | 70 | 120 | 0 | 0 | 50 | 70 | 0 |\n| 2026-08-31 | 完成第8个月服务 | 80 | 120 | 0 | 0 | 40 | 80 | 0 |\n| 2026-09-30 | 完成第9个月服务 | 90 | 120 | 0 | 0 | 30 | 90 | 0 |\n| 2026-10-31 | 完成第10个月服务 | 100 | 120 | 0 | 0 | 20 | 100 | 0 |\n| 2026-11-30 | 完成第11个月服务 | 110 | 120 | 0 | 0 | 10 | 110 | 0 |\n| 2026-12-31 | 完成第12个月服务 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同unbilled · 教学总价120\n\n1月10日交付即取得无条件收款权；后续仅待时间经过，开票是行政步骤. 当前开票日：2026-02-01；实际收款日：2026-02-28. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 控制权转移、交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-01-10 | 收款只待时间经过 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-01 | 行政开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-28 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同conditional · 教学总价120\n\n两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制. 首项已履约，但须第二项完成后才取得整笔无条件权利. 当前开票日：2026-02-11；实际收款日：2026-03-01. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 首项独立交付完成 | 60 | 0 | 0 | 60 | 0 | 60 | 0 |\n| 2026-02-10 | 第二项独立交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-02-10 | 第二项交付条件解除 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-11 | 开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-03-01 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同pos · 教学总价120\n\n1月10日当面交付，即取得整笔无条件权利. 当前开票日：2026-01-10；实际收款日：2026-01-10. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 交付商品 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-01-10 | 取得无条件权利 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-01-10 | 开具收据 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-01-10 | 客户付款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n关键比较：1月末未开票的B已取得无条件权利，应收120；C尚附第二项交付条件，合同资产60. A在3月末现金120、合同负债90、收入30. 单改开票不改权利；延迟实际收款会留下应收.\n"
    },
    "data_identity": "historical_observations_and_separately_labelled_teaching_assumptions"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): Salesforce FY2026的订阅收入政策、合同余额、现金流、股东权益、EPS、收入关键审计事项及所得税附注. 年报分别披露债务账面金额与本金、并购对价、回购及股数变化和汇兑项目.
- [ASC 606, revenue uncertainty, and cost of debt: short-term and long-term consequences](https://link.springer.com/article/10.1007/s11142-026-09936-5): 收入准则采用、收入不确定性与债务融资的研究设计；短期与长期分析分开，不直接类推公司当期融资成本.
- [FASB ASU 2016-13 — ASC 606-10-45-3 and 45-4 reproduced amendments](https://storage.fasb.org/ASU%202016-13.pdf): 合同资产与应收权界线：只待时间经过的无条件权利为应收；已经履约但收款仍附其他条件才落入相应合同资产.
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 2025财年末合并资产77,099M美元、负债47,935M美元、权益29,164M美元. 业务说明、收入政策及附注解释商品周转、供应商付款、会员费确认和递延余额. 现金流量表与两期资产负债表共同呈现存货、应付及现金变化；年报另列续费率定义、普通股和债务信息.

## Content relations
```json
[
  {
    "from": "zh-bf10",
    "relation": "part_of",
    "to": "business-accounts",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf10",
    "relation": "uses_method",
    "to": "zh-bf04",
    "reason": "按本篇实际使用的局部能力调用；正文已作必要就地补充，不锁为整篇硬先修"
  },
  {
    "from": "zh-bf10",
    "relation": "illustrated_by",
    "to": "bf10-salesforce",
    "reason": "固定期间原始材料带读",
    "period": "FY2026/FY2025",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf10-salesforce",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "该案例的原表与附注",
    "locator": "Auditor Revenue Recognition CAM pp.54–55；Balance Sheets p.57; Operations p.58；Equity p.60; Cash Flows pp.61–62；Note 1 credit risk/revenue pp.63–65; income tax and ASU adoption pp.69–70；Note 2 Contract Balances/RPO pp.71–72；Note 11 p.85; Note 12 pp.86–89; Note 13 pp.89–90",
    "scope": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节."
  },
  {
    "from": "zh-bf10",
    "relation": "illustrated_by",
    "to": "bf10-retail",
    "reason": "固定期间原始材料带读",
    "period": "FY2025",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf10-retail",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "该案例的原表与附注",
    "locator": "Income p.37；Cash Flows p.41; Balance Sheets p.39；MD&A Gross Margin p.27；Note 1 Merchandise Inventories p.44; Revenue/Membership Fees pp.47–48；Item 1有关制造及设施说明",
    "scope": "会员零售利润、完整现金流和库存政策；MD&A明确定义Gross Margin. 库存和应付的余额反向变化893与现金流调整963不同，70保留未归因."
  },
  {
    "from": "zh-bf10",
    "relation": "supported_by",
    "to": "BBC-S19",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "ASC606-10-45-3/45-4；Printed pp.173–174 / physical PDF pp.179–180",
    "scope": "合同资产与应收权界线：只待时间经过的无条件权利为应收；已经履约但收款仍附其他条件才落入相应合同资产."
  },
  {
    "from": "zh-bf10",
    "relation": "supported_by",
    "to": "BBC-R03",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "Research design and affected-firm definitions; short-run results; §6 long-run analysis; conclusion",
    "scope": "收入准则采用、收入不确定性与债务融资的研究设计；短期与长期分析分开，不直接类推公司当期融资成本."
  },
  {
    "from": "bf10-salesforce",
    "relation": "compares_with",
    "to": "bf10-retail",
    "reason": "订阅合同与会员零售的履约/收款时点"
  },
  {
    "from": "bf10-timeline",
    "relation": "illustrated_by",
    "to": "EXP-BF10-CONTRACT-TIMING",
    "reason": "用明确条款的教学合同，把履约、无条件收款权成立、开票和收款作为可分别改变日期的事件；观察AR、合同资产、合同负债、现金和收入怎样随权利事实改变.",
    "at_section": "bf10-timeline",
    "conditions": "四种固定条款、固定对价；日期调整是教学变式. 移动无条件权利日代表合同权利事实改变，不是单纯行政改期；开票事件本身不创造无条件权利. 不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎."
  }
]
```

## Related entries
