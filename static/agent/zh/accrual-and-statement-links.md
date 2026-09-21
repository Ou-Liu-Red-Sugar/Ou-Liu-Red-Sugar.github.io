# 权责发生与报表之间的联系

将确认期间和收付款日期放在同一时间线上，解释合同余额、费用、投资和分配如何连接三张表.

Entry: zh-bf04 | Node: BF-04 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你现在教授BF-04《权责发生与报表之间的联系》. 对象是有微积分、线性代数及基本概率基础，但不假定受过会计训练的高年级本科至研究生. 先确认本篇学习任务. 在讲解前，使用读取工具实际取得agent_packet中common及所选branch的全部required_readings完整单元（含表头、脚注和条件）. optional_readings只有选中相应研究/扩展时才转为必读. 记录标题、版本、实际范围以及支持当前教学的关键设定；runtime_reading_log初始为空，不以编辑访问或参考清单冒充本次已读. 访问失败时尝试同版本官方等价正文；仍缺失就指出具体缺口，不拿摘要代替承重单元. 诊断任务：让读者先解释Salesforce滚动表45,099为什么不能称为现金收款，再用120教学合同把履约、无条件收款权、开票和收款四个日期分开. 先保持B合同1月10日履约不变，把无条件收款权成立日移到2月10日，要求读者判断1月31日从应收120变成合同资产120；随后只改开票日，检验分类是否变化. 沿当前同源正文、静态表和supplied_inputs逐段推进，先让读者分析再反馈，已会步骤直接跳过. 判断理解的尺度：能解释默认预收合同3月末现金120、合同负债90、收入30；也能解释B合同权利日期变化为何改变AR/CA，而单独改发票日期不应创造或取消无条件权利. 最后迁移：给一个已履约但未开票的合同，先索取收款权是否还附有其他条件，再判断AR/CA. 保留历史观测与教学设定身份、单位、期间、未解释差额；不得从本篇生成新估值或账户建议.

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
      "source_id": "BBC-S01",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-financial-accounting/pages/4-1-explain-the-concepts-and-guidelines-affecting-adjusting-entries"
      },
      "required_unit": {
        "locator": "§4.1全文",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "应计和期间对象"
      },
      "supports": "应计、会计期间及调整的理由.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Principles of Accounting, Volume 1: Financial Accounting — §4.1 Explain the Concepts and Guidelines Affecting Adjusting Entries",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper"
      ],
      "version": "OpenStax 2019"
    },
    {
      "source_id": "BBC-S02",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-financial-accounting/pages/4-2-discuss-the-adjustment-process-and-illustrate-common-types-of-adjusting-entries"
      },
      "required_unit": {
        "locator": "§4.2全文",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "递延与应计调整"
      },
      "supports": "递延和应计项目的调整；教学例不替代真实企业政策.",
      "branch": "common",
      "required_when_selected": false,
      "title": "Principles of Accounting, Volume 1: Financial Accounting — §4.2 Discuss the Adjustment Process and Illustrate Common Types of Adjusting Entries",
      "authors": [
        "Mitchell Franklin",
        "Patty Graybeal",
        "Dixon Cooper"
      ],
      "version": "OpenStax 2019"
    },
    {
      "source_id": "BBC-S19",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202016-13.pdf"
      },
      "required_unit": {
        "locator": "ASC606-10-45-3/45-4；PDF179–180",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "无条件收款权与合同资产界线"
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
        "locator": "Note1 Revenue Recognition pp.64–65；Note2 Contract Balances/Unearned Revenue p.71及全部脚注",
        "scope": "所列完整单元、相关表头、脚注及当前计算所需说明",
        "purpose": "真实确认政策和滚动表other范围"
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
  "optional_readings": [],
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
  "diagnosis": "先解释Salesforce滚动表45,099为何不是现金，再把120教学合同的履约日、无条件权利日、开票日、收款日拆开；在B合同保持1月10日履约不变，将无条件权利日改至2月10日.",
  "feedback_criteria": "能解释默认预收合同3月末现金120、合同负债90、收入30；B合同若履约1月10日而无条件权利延至2月10日，则1月31日为合同资产120、应收0；只改开票日不应创造或取消无条件权利.",
  "transfer_task": "一个交付已完成但尚未开票的合同：先索取收款权是否还附有其他条件，再判断AR/合同资产；说明单独移动发票日期是否足以改变分类.",
  "experiment_ids": [
    "EXP-BF04-ACCRUAL-TIMELINE"
  ]
}
```

## Supplied entry
一家公司可以已经把服务交给客户，却还没收到钱；也可以先收到全年服务费，而服务才刚刚开始. 要理解这两种情况，不能只问“钱进来了吗”，还要问“已经完成了什么、取得了什么权利、还欠对方什么”. 这正是利润表、现金流量表和资产负债表需要同时存在的原因.

这一篇用一项订阅业务把三张表连起来. 你不必先学完整套会计分录；先抓住两个对象就够了：**一段期间发生的收入、费用和现金流，是流量；某个时点尚存的现金、权利和义务，是余额**. 学完后，我们要能解释一项余额如何形成、为何消失，以及它和利润、收付款分别是什么关系.

<a id="bf04-timing"></a>
## 1. 记录已经发生的经营，而不只记录收付款

**权责发生制**是按交易或事项所属的期间确认相关收入和费用，而不是仅以现金收付时点为确认依据. 它并不是说现金不重要，而是把“这一段经营做得怎样”和“这一段钱怎样收支”分开回答. 期末调整把已经发生但未收付、或者已经收付但尚未完成的关系留在合适的位置. [^accrual]

例如，客户预付一年的服务款. 现金确实增加了，但公司也必须在未来提供服务. 尚未履约部分形成合同负债，不能因为钱到账就把整笔当成本期经营成果. 反过来，已经交付并取得无条件收款权时，即使钱还没来，也可能同时出现收入和应收款. 这里的“无条件”是指收款只需等待约定时间经过；是否已经开票并不是普遍适用的判断标准. [^rights]

我们由此得到一条读表办法：先描述事件，再问它留下的东西. 履约可能把尚未赚取的金额转成收入，收款可能把应收换成现金；这两次变化的经济含义不同. 借贷记账只是让每次变化在报表里保持平衡的记录方式，不应取代对事件的解释.

<a id="bf04-salesforce"></a>
## 2. 先读一份真实的跨期记录

Salesforce 的 FY2026 截至2026年1月31日. 它在收入政策中区分了一段时间内提供的云服务、在某个时点可供客户使用的软件许可，以及专业服务等安排. 许多服务收入随服务期间确认，而账单通常按年度提前开出. 因此，年末的 *unearned revenue* 不是一个抽象的“递延账户”，而是尚未按履约过程转为收入的余额. [^sfpolicy]

下面保留 Note 2 的完整两期滚动关系. 金额单位为** M 美元**；括号表示该滚动关系中的减少数，不是负销售额. [^sfcontract]

| 原行／中文含义 | FY2026 | FY2025 |
| --- | --- | --- |
| Beginning unearned revenue／期初未赚取收入 | 20,743 | 19,003 |
| Billings and other／开票及其他 | 45,099 | 39,635 |
| Revenue recognized over time／随时间确认收入 | (39,041) | (35,628) |
| Revenue recognized at a point in time／时点确认收入 | (2,484) | (2,267) |
| Ending unearned revenue／期末未赚取收入 | 24,317 | 20,743 |


本期核对是 `20,743 + 45,099 − 39,041 − 2,484 = 24,317`. 这个式子有用之处，不只是末尾加得上，而是把“进入尚未履约余额的增加”和“通过履约离开该余额的金额”分开了. 两类收入合计41,525，恰能继续接到本期利润表.

但45,099不能改名为客户现金收款. 原表明确写着 **billings and other**；脚注说明其中还有汇兑、合同资产和企业合并影响，FY2026包括收购Informatica时的651未赚取收入. 它们进入的是这张滚动表的解释，不等于Salesforce在当期收到了同额客户现金. 把这条脚注丢掉，虽然仍能算出24,317，却已经把表读错了. [^sfcontract]

再往前想一步：收购日承接了一项服务义务，和公司当年新签合同、开票、收款不是同一过程. 报表仍需纳入这项余额；经营分析则要辨别它从哪里来. **完整的勾稽首先维护记录范围，随后才解释经营变化.**

<a id="bf04-accrual-experiment"></a>
## 3. 把120的合同走完，而不是只画两根箭头

现在离开真实公司，做一份条款明确的教学合同. 以下金额都是**教学货币单位**：2026年全年均匀提供服务，总价120；1月1日付款已无条件到期并开票，1月5日收款，每月末完成当月服务. 为单独观察时点关系，忽略服务成本、税项、退款、信用损失和重大融资成分. 因而累计收入在这个例子里也等于累计利润及新增权益.

1月1日应收120与合同负债120同时出现. 公司已有无条件收款权，但还没有提供服务. 1月5日只是把应收120换成现金120：资产的组成变了，总资产没有再增加，也没有再赚一次收入. 1月末完成服务10，合同负债减少10，收入及权益增加10.

| 事件后的状态 | 现金 | 应收 | 合同资产 | 合同负债 | 累计收入／权益 |
| --- | --- | --- | --- | --- | --- |
| 1月1日：付款已无条件到期并开票 | 0 | 120 | 0 | 120 | 0 |
| 1月5日：收款 | 120 | 0 | 0 | 120 | 0 |
| 1月末：累计履约1个月 | 120 | 0 | 0 | 110 | 10 |
| 2月末：累计履约2个月 | 120 | 0 | 0 | 100 | 20 |
| 3月末：累计履约3个月 | 120 | 0 | 0 | 90 | 30 |
| 4月末：累计履约4个月 | 120 | 0 | 0 | 80 | 40 |
| 5月末：累计履约5个月 | 120 | 0 | 0 | 70 | 50 |
| 6月末：累计履约6个月 | 120 | 0 | 0 | 60 | 60 |
| 7月末：累计履约7个月 | 120 | 0 | 0 | 50 | 70 |
| 8月末：累计履约8个月 | 120 | 0 | 0 | 40 | 80 |
| 9月末：累计履约9个月 | 120 | 0 | 0 | 30 | 90 |
| 10月末：累计履约10个月 | 120 | 0 | 0 | 20 | 100 |
| 11月末：累计履约11个月 | 120 | 0 | 0 | 10 | 110 |
| 12月末：累计履约12个月 | 120 | 0 | 0 | 0 | 120 |


这里最值得手算的是3月末：资产是现金120，负债是未履约部分90，权益是已经赚取的30，因此 `120 = 90 + 30`. 如果只看现金，12个月似乎在1月5日就全部“完成”；如果只看收入，又会看不见公司已经提前取得可用资金. 两种信息都不可少.

<div data-experiment-slot="EXP-BF04-ACCRUAL-TIMELINE"></div>

实验把四类事件的日期分开：**首个／唯一履约日、无条件收款权成立日、开票日和实际收款日**都可以单独改变. 先只把开票日改到2月1日，保持1月1日无条件收款权不变，你会看到行政开票延后本身不会把应收改成合同资产. 再把收款改到4月5日：3月末仍是应收120、合同负债90、累计收入30、现金0. 随后可选合同B，把履约日留在1月10日、把无条件权利日改到2月10日；1月末已履约但权利仍附条件，状态会由应收改成合同资产. 这里改变“无条件权利日”是在**改变教学合同的权利事实**，不是声称原合同条款会自行移动.

同一天存在多个事件时，实验按“履约、权利成立、开票、收款”展示中间状态；不同日期始终按实际时间排序. 这个同日约定只是为了把瞬时中间状态展示清楚，不是现实合同的普遍先后规则. 若日期变式与原预设条款不再一致，界面会明确把它标成教学变式；判断真实权利仍要回到合同条款.

<a id="bf04-other-events"></a>
## 4. 费用、投资和分配，也沿同样的办法阅读

我们再用一组独立教学事件检查这套办法. 假设企业起初由股东投入现金200，没有其他项目. 购入100的设备但尚未投用；随后员工已完成工作，确认工资费用20，次日付款；最后宣布并立即支付股息10. 忽略税、折旧及其他事项. 表中均为每步之后的余额.

| 事件 | 现金 | 设备 | 应付工资 | 权益 | 累计利润 |
| --- | --- | --- | --- | --- | --- |
| 期初出资 | 200 | 0 | 0 | 200 | 0 |
| 支付100购入尚未投用设备 | 100 | 100 | 0 | 200 | 0 |
| 确认已经发生的工资费用20 | 100 | 100 | 20 | 180 | (20) |
| 支付工资20 | 80 | 100 | 0 | 180 | (20) |
| 宣布并支付股息10 | 70 | 100 | 0 | 170 | (20) |


买设备时，现金变成了仍将使用的资源，本例尚未投用，不能把100全部当作此刻费用；后续使用所形成的折旧还要按相应政策确认. 确认工资时，劳动已经耗用，即使尚未付款，利润和权益已经减少. 付款消除应付工资，不再重复确认费用. 股息则是对所有者的分配，减少现金和权益，不是为赚取本期收入发生的工资或商品成本.

这个小表还解释了为什么“利润进入权益”不能简化成“权益变化就是利润”：最后权益比初始少30，只有20来自本例的亏损，另10来自分配. 之后读[权益和股数](https://ou-liu-red-sugar.github.io/zh/notebook/equity-shares-and-shareholder-claims/)时，我们会把这类关系带回真实原表.

<a id="bf04-exercise"></a>
## 5. 自己判断，再核对理由

**题一：** Salesforce这张未赚取收入滚动表能否直接给出当年客户收款？要求用一个具体原行或脚注回答，而不是只说“利润不等于现金”.

**解析**. 不能. 增加项是45,099的“开票及其他”，包含并购、合同资产和汇兑等影响；其中651是Informatica收购时承接的余额. 连增加项都不纯粹代表客户开票，更不能把它当成现金. 需要另读应收、收款及现金流口径.

**题二：** 上述全年服务合同延迟到4月5日收款. 3月末为什么不是“没有收入”，也不是“负债120一直不变”？

**解析**. 前三个月服务已完成30，所以确认收入30，并将相应合同负债减少到90. 无条件应收120尚未变现，故余额是资产120、负债90、权益30. 付款延迟改变现金和应收，不会把已经完成的服务抹掉.

**题三：** 一项交付在1月10日完成，2月1日才开票. 此时一定形成合同资产吗？

**解析**. 还缺收款条款. 如果交付即使收款权无条件成立，只待到期付款，1月10日应列应收；如果已交付的对价还要等第二项独立交付完成，可能先形成合同资产. [收入、应收与合同余额](https://ou-liu-red-sugar.github.io/zh/notebook/revenue-receivables-contract-balances/)会专门处理这个界线. 本题的关键不是知道“先履约后开票”这几个字，而是能指出还需要什么事实.

[^accrual]: OpenStax，*Principles of Accounting, Vol.1*（2019），[§4.1 调整所依据的期间和应计概念](https://openstax.org/books/principles-financial-accounting/pages/4-1-explain-the-concepts-and-guidelines-affecting-adjusting-entries)、[§4.2 调整过程](https://openstax.org/books/principles-financial-accounting/pages/4-2-discuss-the-adjustment-process-and-illustrate-common-types-of-adjusting-entries)；§4.1–4.2，应计与递延机制.
[^rights]: FASB，[ASU 2016-13中的ASC 606-10-45-3、45-4](https://storage.fasb.org/ASU%202016-13.pdf)，印刷pp.173–174、PDF物理第179–180页；合同资产与无条件应收权定义.
[^sfpolicy]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 1 “Revenue Recognition”，印刷pp.64–65；年度截至2026-01-31.
[^sfcontract]: Salesforce，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm)，Note 2 “Contract Balances”“Unearned Revenue”滚动表及脚注，p.71；FY2026/FY2025，单位 M 美元.


## Additional teaching material
交互算法：bounded contract events 按日期排序；同日显示顺序为 performance → right → invoice → cash. R=累计履约，U=已成立无条件收款权，C=已收现金；AR=max(U-C,0)；X=R-max(U,C)；CA=max(X,0)；CL=max(-X,0).

可改变：首个／唯一履约日、无条件收款权成立日、开票日、收款日和观察日. 改变权利日代表教学合同的权利事实改变；单独改发票日不应偷改AR/合同资产分类.

静态结果：https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF04-ACCRUAL-TIMELINE. 所有输入保留历史/教学身份.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-BF04-ACCRUAL-TIMELINE",
    "title": "权责发生与报表之间的联系：交互实验",
    "anchor": "bf04-accrual-experiment",
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
        "name": "prepaid",
        "price": 120,
        "terms": "全年均匀服务；2026-01-01付款已无条件到期. 当前首个/唯一履约日：2026-01-31；无条件权利日：2026-01-01；开票日：2026-01-01；实际收款日：2026-01-05. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.",
        "events": [
          {
            "type": "right",
            "date": "2026-01-01",
            "amount": 120,
            "label": "付款义务已无条件到期"
          },
          {
            "type": "invoice",
            "date": "2026-01-01",
            "amount": 120,
            "label": "开具全年账单"
          },
          {
            "type": "cash",
            "date": "2026-01-05",
            "amount": 120,
            "label": "收到服务款"
          },
          {
            "type": "performance",
            "date": "2026-01-31",
            "amount": 10,
            "label": "完成第1个月服务"
          },
          {
            "type": "performance",
            "date": "2026-02-28",
            "amount": 10,
            "label": "完成第2个月服务"
          },
          {
            "type": "performance",
            "date": "2026-03-31",
            "amount": 10,
            "label": "完成第3个月服务"
          },
          {
            "type": "performance",
            "date": "2026-04-30",
            "amount": 10,
            "label": "完成第4个月服务"
          },
          {
            "type": "performance",
            "date": "2026-05-31",
            "amount": 10,
            "label": "完成第5个月服务"
          },
          {
            "type": "performance",
            "date": "2026-06-30",
            "amount": 10,
            "label": "完成第6个月服务"
          },
          {
            "type": "performance",
            "date": "2026-07-31",
            "amount": 10,
            "label": "完成第7个月服务"
          },
          {
            "type": "performance",
            "date": "2026-08-31",
            "amount": 10,
            "label": "完成第8个月服务"
          },
          {
            "type": "performance",
            "date": "2026-09-30",
            "amount": 10,
            "label": "完成第9个月服务"
          },
          {
            "type": "performance",
            "date": "2026-10-31",
            "amount": 10,
            "label": "完成第10个月服务"
          },
          {
            "type": "performance",
            "date": "2026-11-30",
            "amount": 10,
            "label": "完成第11个月服务"
          },
          {
            "type": "performance",
            "date": "2026-12-31",
            "amount": 10,
            "label": "完成第12个月服务"
          }
        ],
        "timeline": [
          {
            "date": "2026-01-01",
            "event": "付款义务已无条件到期",
            "type": "right",
            "amount": 120,
            "revenue": 0,
            "unconditional": 120,
            "billed": 0,
            "cash": 0,
            "receivable": 120,
            "contract_asset": 0,
            "contract_liability": 120,
            "assets": 120,
            "equity": 0,
            "residual": 0
          },
          {
            "date": "2026-01-01",
            "event": "开具全年账单",
            "type": "invoice",
            "amount": 120,
            "revenue": 0,
            "unconditional": 120,
            "billed": 120,
            "cash": 0,
            "receivable": 120,
            "contract_asset": 0,
            "contract_liability": 120,
            "assets": 120,
            "equity": 0,
            "residual": 0
          },
          {
            "date": "2026-01-05",
            "event": "收到服务款",
            "type": "cash",
            "amount": 120,
            "revenue": 0,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 120,
            "assets": 120,
            "equity": 0,
            "residual": 0
          },
          {
            "date": "2026-01-31",
            "event": "完成第1个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 10,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 110,
            "assets": 120,
            "equity": 10,
            "residual": 0
          },
          {
            "date": "2026-02-28",
            "event": "完成第2个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 20,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 100,
            "assets": 120,
            "equity": 20,
            "residual": 0
          },
          {
            "date": "2026-03-31",
            "event": "完成第3个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 30,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 90,
            "assets": 120,
            "equity": 30,
            "residual": 0
          },
          {
            "date": "2026-04-30",
            "event": "完成第4个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 40,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 80,
            "assets": 120,
            "equity": 40,
            "residual": 0
          },
          {
            "date": "2026-05-31",
            "event": "完成第5个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 50,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 70,
            "assets": 120,
            "equity": 50,
            "residual": 0
          },
          {
            "date": "2026-06-30",
            "event": "完成第6个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 60,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 60,
            "assets": 120,
            "equity": 60,
            "residual": 0
          },
          {
            "date": "2026-07-31",
            "event": "完成第7个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 70,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 50,
            "assets": 120,
            "equity": 70,
            "residual": 0
          },
          {
            "date": "2026-08-31",
            "event": "完成第8个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 80,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 40,
            "assets": 120,
            "equity": 80,
            "residual": 0
          },
          {
            "date": "2026-09-30",
            "event": "完成第9个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 90,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 30,
            "assets": 120,
            "equity": 90,
            "residual": 0
          },
          {
            "date": "2026-10-31",
            "event": "完成第10个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 100,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 20,
            "assets": 120,
            "equity": 100,
            "residual": 0
          },
          {
            "date": "2026-11-30",
            "event": "完成第11个月服务",
            "type": "performance",
            "amount": 10,
            "revenue": 110,
            "unconditional": 120,
            "billed": 120,
            "cash": 120,
            "receivable": 0,
            "contract_asset": 0,
            "contract_liability": 10,
            "assets": 120,
            "equity": 110,
            "residual": 0
          },
          {
            "date": "2026-12-31",
            "event": "完成第12个月服务",
            "type": "performance",
            "amount": 10,
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
      "all_defaults_file": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/default-results.json"
    },
    "algorithm": "bounded contract events: chronological then performance/right/invoice/cash; R=cumulative performance, U=unconditional consideration, C=cash; AR=max(U-C,0); X=R-max(U,C); CA=max(X,0); CL=max(-X,0); A=C+AR+CA; E=R.",
    "boundaries": "四种固定条款、固定对价；日期调整是教学变式. 移动无条件权利日代表合同权利事实改变，不是单纯行政改期；开票事件本身不创造无条件权利. 不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎.",
    "static_equivalent": {
      "reader_anchors": [
        "bf04-accrual-experiment"
      ],
      "html": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static.html#EXP-BF04-ACCRUAL-TIMELINE",
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/bf-bc/static-equivalents.md",
      "markdown_body": "<a id=\"EXP-BF04-ACCRUAL-TIMELINE\"></a>\n## BF-04 · 权责发生与报表之间的联系\n\n四类日期可分别改变；以下为默认条款的静态结果. 移动无条件权利日表示改变教学合同的权利事实.\n\n四种固定条款、固定对价；不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎.\n\n### 合同prepaid · 教学总价120\n\n全年均匀服务；2026-01-01付款已无条件到期. 当前开票日：2026-01-01；实际收款日：2026-01-05. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-01 | 付款义务已无条件到期 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |\n| 2026-01-01 | 开具全年账单 | 0 | 0 | 120 | 0 | 120 | 0 | 0 |\n| 2026-01-05 | 收到服务款 | 0 | 120 | 0 | 0 | 120 | 0 | 0 |\n| 2026-01-31 | 完成第1个月服务 | 10 | 120 | 0 | 0 | 110 | 10 | 0 |\n| 2026-02-28 | 完成第2个月服务 | 20 | 120 | 0 | 0 | 100 | 20 | 0 |\n| 2026-03-31 | 完成第3个月服务 | 30 | 120 | 0 | 0 | 90 | 30 | 0 |\n| 2026-04-30 | 完成第4个月服务 | 40 | 120 | 0 | 0 | 80 | 40 | 0 |\n| 2026-05-31 | 完成第5个月服务 | 50 | 120 | 0 | 0 | 70 | 50 | 0 |\n| 2026-06-30 | 完成第6个月服务 | 60 | 120 | 0 | 0 | 60 | 60 | 0 |\n| 2026-07-31 | 完成第7个月服务 | 70 | 120 | 0 | 0 | 50 | 70 | 0 |\n| 2026-08-31 | 完成第8个月服务 | 80 | 120 | 0 | 0 | 40 | 80 | 0 |\n| 2026-09-30 | 完成第9个月服务 | 90 | 120 | 0 | 0 | 30 | 90 | 0 |\n| 2026-10-31 | 完成第10个月服务 | 100 | 120 | 0 | 0 | 20 | 100 | 0 |\n| 2026-11-30 | 完成第11个月服务 | 110 | 120 | 0 | 0 | 10 | 110 | 0 |\n| 2026-12-31 | 完成第12个月服务 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同unbilled · 教学总价120\n\n1月10日交付即取得无条件收款权；后续仅待时间经过，开票是行政步骤. 当前开票日：2026-02-01；实际收款日：2026-02-28. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 控制权转移、交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-01-10 | 收款只待时间经过 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-01 | 行政开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-28 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同conditional · 教学总价120\n\n两项可区分交付各分配一半对价；1月10日、2月10日分别转移控制. 首项已履约，但须第二项完成后才取得整笔无条件权利. 当前开票日：2026-02-11；实际收款日：2026-03-01. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 首项独立交付完成 | 60 | 0 | 0 | 60 | 0 | 60 | 0 |\n| 2026-02-10 | 第二项独立交付完成 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-02-10 | 第二项交付条件解除 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-02-11 | 开票 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-03-01 | 收到货款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n### 合同pos · 教学总价120\n\n1月10日当面交付，即取得整笔无条件权利. 当前开票日：2026-01-10；实际收款日：2026-01-10. 假设合同在首个事件前有效成立. 改变收款日只改变实际收付；提前收款属于可抵未来合同对价的预收，不是另一个押金合同.\n\n| 日期 | 事件 | 累计收入 | 现金 | 应收 | 合同资产 | 合同负债 | 权益 | 平衡差 |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| 2026-01-10 | 交付商品 | 120 | 0 | 0 | 120 | 0 | 120 | 0 |\n| 2026-01-10 | 取得无条件权利 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-01-10 | 开具收据 | 120 | 0 | 120 | 0 | 0 | 120 | 0 |\n| 2026-01-10 | 客户付款 | 120 | 120 | 0 | 0 | 0 | 120 | 0 |\n\n\n关键比较：1月末未开票的B已取得无条件权利，应收120；C尚附第二项交付条件，合同资产60. A在3月末现金120、合同负债90、收入30. 单改开票不改权利；延迟实际收款会留下应收.\n"
    },
    "data_identity": "historical_observations_and_separately_labelled_teaching_assumptions"
  }
]
```

## Sources
- [Salesforce, Inc. FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1108524/000110852426000060/crm-20260131.htm): 订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节.

BF-F/G 本批采用：完整收付账、净现金和债务账面/本金、PPA对价及三种回购/股数口径；FX单列.
- [Principles of Accounting, Volume 1: Financial Accounting — §4.1 Explain the Concepts and Guidelines Affecting Adjusting Entries](https://openstax.org/books/principles-financial-accounting/pages/4-1-explain-the-concepts-and-guidelines-affecting-adjusting-entries): 应计、会计期间及调整的理由.
- [Principles of Accounting, Volume 1: Financial Accounting — §4.2 Discuss the Adjustment Process and Illustrate Common Types of Adjusting Entries](https://openstax.org/books/principles-financial-accounting/pages/4-2-discuss-the-adjustment-process-and-illustrate-common-types-of-adjusting-entries): 递延和应计项目的调整；教学例不替代真实企业政策.
- [FASB ASU 2016-13 — ASC 606-10-45-3 and 45-4 reproduced amendments](https://storage.fasb.org/ASU%202016-13.pdf): 合同资产与应收权界线：只待时间经过的无条件权利为应收；已经履约但收款仍附其他条件才落入相应合同资产.

## Content relations
```json
[
  {
    "from": "zh-bf04",
    "relation": "part_of",
    "to": "business-accounts",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-bf04",
    "relation": "illustrated_by",
    "to": "bf04-salesforce",
    "reason": "固定期间原始材料带读",
    "period": "FY2026/FY2025",
    "cutoff": "2026-09-21"
  },
  {
    "from": "bf04-salesforce",
    "relation": "supported_by",
    "to": "BBC-C01",
    "reason": "该案例的原表与附注",
    "locator": "Auditor Revenue Recognition CAM pp.54–55；Balance Sheets p.57; Operations p.58；Equity p.60; Cash Flows pp.61–62；Note 1 credit risk/revenue pp.63–65; income tax and ASU adoption pp.69–70；Note 2 Contract Balances/RPO pp.71–72；Note 11 p.85; Note 12 pp.86–89; Note 13 pp.89–90",
    "scope": "订阅收入确认、合同余额、完整现金流、权益与EPS、收入CAM及所得税附注. 金额、现金和股数口径保留，不虚构差额调节."
  },
  {
    "from": "zh-bf04",
    "relation": "supported_by",
    "to": "BBC-S01",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "§4.1完整单元",
    "scope": "应计、会计期间及调整的理由."
  },
  {
    "from": "zh-bf04",
    "relation": "supported_by",
    "to": "BBC-S02",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "§4.2完整单元",
    "scope": "递延和应计项目的调整；教学例不替代真实企业政策."
  },
  {
    "from": "zh-bf04",
    "relation": "supported_by",
    "to": "BBC-S19",
    "reason": "定义、机制或选读研究的直接来源",
    "locator": "ASC606-10-45-3/45-4；Printed pp.173–174 / physical PDF pp.179–180",
    "scope": "合同资产与应收权界线：只待时间经过的无条件权利为应收；已经履约但收款仍附其他条件才落入相应合同资产."
  },
  {
    "from": "bf04-accrual-experiment",
    "relation": "illustrated_by",
    "to": "EXP-BF04-ACCRUAL-TIMELINE",
    "reason": "用明确条款的教学合同，把履约、无条件收款权成立、开票和收款作为可分别改变日期的事件；观察AR、合同资产、合同负债、现金和收入怎样随权利事实改变.",
    "at_section": "bf04-accrual-experiment",
    "conditions": "四种固定条款、固定对价；日期调整是教学变式. 移动无条件权利日代表合同权利事实改变，不是单纯行政改期；开票事件本身不创造无条件权利. 不含成本、税、退款、信用损失或重大融资；不是通用ASC606引擎."
  }
]
```

## Related entries
