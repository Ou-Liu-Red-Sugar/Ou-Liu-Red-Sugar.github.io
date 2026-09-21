# 清算、结算与抵押品

区分成交、清算义务与最终交收，并识别担保安排带来的资金约束.

Entry: zh-m04 | Node: M04 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
用M04《清算、结算与保证金》带我分析成交后的义务和资金. 先通过本篇 reference 包中的公开链接，实际读完 required_readings 指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF 表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.
从100股、每股100美元的成交开始，让我列待付款券，并按2024年5月24日和28日的规则、营业日日历推算标准交收日. 判断§240.15c6-2在该流程中的适用条件，区分交易回报、机构affirmation和完成交收. 在净额例中，甲原持有0股并买100股，乙原持有70股并卖70股；分别计算会员净变动和客户最终持仓. 把DTC抵押折扣改为25%，解释CM为−500的约束. 再用MES路径区分60K名义金额、3K初始保证金、250可用现金与首日−400损益，计算150的补款缺口及获得资金后的第二日条件结果. 通过标准是能逐项确定义务所在层次、交收状态与资金条件.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-m04",
  "node_id": "M04",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "selected_branch": "full_entry",
  "body_source": "body_markdown",
  "learning_task": "区分成交、清算义务与最终交收，并识别担保安排带来的资金约束.",
  "prompt": "用M04《清算、结算与保证金》带我分析成交后的义务和资金. 先通过本篇 reference 包中的公开链接，实际读完 required_readings 指定单元，记录来源、版本、读取范围和支持当前讲解的内容. PDF 表格与公式核对原页. 读取失败时从原机构查找同版材料；仍缺关键单元则指出受影响的任务，补齐后再讲解. 根据一次完整任务诊断我的水平，跳过已掌握的步骤；反馈先给定位提示，再展开解析.\n从100股、每股100美元的成交开始，让我列待付款券，并按2024年5月24日和28日的规则、营业日日历推算标准交收日. 判断§240.15c6-2在该流程中的适用条件，区分交易回报、机构affirmation和完成交收. 在净额例中，甲原持有0股并买100股，乙原持有70股并卖70股；分别计算会员净变动和客户最终持仓. 把DTC抵押折扣改为25%，解释CM为−500的约束. 再用MES路径区分60K名义金额、3K初始保证金、250可用现金与首日−400损益，计算150的补款缺口及获得资金后的第二日条件结果. 通过标准是能逐项确定义务所在层次、交收状态与资金条件.",
  "required_readings": [
    {
      "source_id": "MA-SEC-CYCLE",
      "title": "17 CFR §240.15c6-1 — Settlement cycle",
      "authors": [
        "eCFR / Office of the Federal Register"
      ],
      "version": "作者复核日2026-09-21；eCFR Title 17页面标示内容更新至2026-09-17，页面本次读取显示last amended 2026-09-16；该条来源注88 FR 13952",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-1",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "§240.15c6-1(a)–(d) 全条",
        "scope": "适用范围、下一营业日标准、明示另约及排除/发行例外. eCFR是持续更新的电子文本，不是正式印本.",
        "purpose": "周期范围与例外"
      },
      "supports": "适用范围、下一营业日标准、明示另约及排除/发行例外. eCFR是持续更新的电子文本，不是正式印本.",
      "limits": "适用范围、下一营业日标准、明示另约及排除/发行例外. eCFR是持续更新的电子文本，不是正式印本.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SEC-AFFIRM",
      "title": "17 CFR §240.15c6-2 — Same-day allocation, confirmation, and affirmation",
      "authors": [
        "eCFR / Office of the Federal Register"
      ],
      "version": "读取日2026-09-21；与SEC-CYCLE同批取得",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-2",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "§240.15c6-2 全条",
        "scope": "经纪交易商与其他方为受§15c6-1(a)约束交易进行allocation/confirmation/affirmation流程时的同日处理要求；不把零售成交回报当成同一环节.",
        "purpose": "同日分配、确认与认可"
      },
      "supports": "经纪交易商与其他方为受§15c6-1(a)约束交易进行allocation/confirmation/affirmation流程时的同日处理要求；不把零售成交回报当成同一环节.",
      "limits": "经纪交易商与其他方为受§15c6-1(a)约束交易进行allocation/confirmation/affirmation流程时的同日处理要求；不把零售成交回报当成同一环节.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SEC-FAQ",
      "title": "Shortening the Securities Transaction Settlement Cycle — T+1 FAQ",
      "authors": [
        "SEC staff"
      ],
      "version": "2024-03-27",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/exams/educationhelpguidesfaqs/t1-faq",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Q1–Q7 及对应脚注全文",
        "scope": "2024-05-28合规切换、适用交易和同日处理边界；staff guidance不代替条文.",
        "purpose": "切换日期及解释层次"
      },
      "supports": "2024-05-28合规切换、适用交易和同日处理边界；staff guidance不代替条文.",
      "limits": "2024-05-28合规切换、适用交易和同日处理边界；staff guidance不代替条文.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SEC-FINAL",
      "title": "Shortening the Securities Transaction Settlement Cycle — Release 34-96930 / IA-6239",
      "authors": [
        "SEC"
      ],
      "version": "2023-02-15；正文生效日2023-05-05",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.sec.gov/files/rules/final/2023/34-96930.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "PDF pp.1–2 正文及原页",
        "scope": "生效日期和规则结构；合规切换日另见FAQ.",
        "purpose": "生效日和规则结构"
      },
      "supports": "生效日期和规则结构；合规切换日另见FAQ.",
      "limits": "生效日期和规则结构；合规切换日另见FAQ.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-NSCC",
      "title": "NSCC Rules & Procedures",
      "authors": [
        "National Securities Clearing Corporation / DTCC"
      ],
      "version": "封面As of July 14, 2026",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://files.dtcc.com/download/assets/nscc_rules.pdf/85bda02a369211f0a3ae820bd5ac0897",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Rule 11 §§1–6，印刷 pp.112–114/PDF物理119–121；Rule 4 §§1–2，印刷 pp.83–84/PDF物理90–91",
        "scope": "会员净额、义务承接阶段、存管指令、额外盯市与清算基金用途；未核全部违约规则和保证金模型.",
        "purpose": "净额、义务承接与基金用途"
      },
      "supports": "会员净额、义务承接阶段、存管指令、额外盯市与清算基金用途；未核全部违约规则和保证金模型.",
      "limits": "会员净额、义务承接阶段、存管指令、额外盯市与清算基金用途；未核全部违约规则和保证金模型.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-DTC",
      "title": "DTC Settlement Service Guide",
      "authors": [
        "The Depository Trust Company / DTCC"
      ],
      "version": "封面As of June 10, 2026",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://files.dtcc.com/download/assets/Settlement.pdf/c83a99be369a11f093d0c204a2f8334f",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "印刷 pp.9–10、68–71；Recycle Processing / Reasons for Recycling，PDF物理页59–60；查看印刷p.70原图",
        "scope": "参与人层记账、款项交收与风险约束；CM不是零售账户余额.",
        "purpose": "记账交收、Collateral Monitor、Net Debit Cap 与再处理边界"
      },
      "supports": "参与人层记账、款项交收与风险约束；CM不是零售账户余额.",
      "limits": "参与人层记账、款项交收与风险约束；CM不是零售账户余额.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-HOLD",
      "title": "Investor Bulletin: Holding Your Securities",
      "authors": [
        "SEC OIEA / FINRA"
      ],
      "version": "2023-07-12",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Street Name Registration 完整说明",
        "scope": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
        "purpose": "参与人及客户持有层次"
      },
      "supports": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
      "limits": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-CUSTOMER",
      "title": "SEA Rule 15c3-3 and Related Interpretations",
      "authors": [
        "FINRA收录SEC客户保护规则及解释"
      ],
      "version": "2026-09-21取得现行网页；各解释单独标日期",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-15c3-3-and-related-interpretations",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "15c3-3(b)(1)–(2) 及相关解释",
        "scope": "全额付清及超额保证金证券的占有/控制要求及条件；不概括为所有证券绝对不得借贷.",
        "purpose": "客户证券占有/控制条件"
      },
      "supports": "全额付清及超额保证金证券的占有/控制要求及条件；不概括为所有证券绝对不得借贷.",
      "limits": "全额付清及超额保证金证券的占有/控制要求及条件；不概括为所有证券绝对不得借贷.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-CALENDAR",
      "title": "Accelerating to T+1: A Global Custodian’s Perspective",
      "authors": [
        "DTCC"
      ],
      "version": "2023-03-06历史切换安排；只采用美国日期",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.dtcc.com/insights/2023/accelerating-to-t-1-a-global-custodians-perspective",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Key Dates and Rules 及相邻完整说明",
        "scope": "2024-05-24/28/29及Memorial Day的切换日历；文章当时的加拿大预期不采用.",
        "purpose": "美国 T+1 切换日历"
      },
      "supports": "2024-05-24/28/29及Memorial Day的切换日历；文章当时的加拿大预期不采用.",
      "limits": "2024-05-24/28/29及Memorial Day的切换日历；文章当时的加拿大预期不采用.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-MES",
      "title": "Micro E-mini Equity Index Futures: Frequently Asked Questions",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21访问；网页部分表例标2023-02-01，不当作当前行情",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Q2、Q5、Q6、Q9、Q10、Q14 完整问答",
        "scope": "MES每指数点5美元及结算/保证金基本安排；本篇价格和保证金金额均为教学设定.",
        "purpose": "真实合约单位与教学参数分开"
      },
      "supports": "MES每指数点5美元及结算/保证金基本安排；本篇价格和保证金金额均为教学设定.",
      "limits": "MES每指数点5美元及结算/保证金基本安排；本篇价格和保证金金额均为教学设定.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-CME-MARGIN",
      "title": "FAQ — Performance Bonds/Margins",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21所见现行网页",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/solutions/risk-management/performance-bonds-margins/faq-performance-bonds-margins.html",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Q1–Q4 完整问答",
        "scope": "履约保障、资金要求与风险管理的区分；不提供当前零售券商保证金.",
        "purpose": "履约保障和资金要求"
      },
      "supports": "履约保障、资金要求与风险管理的区分；不提供当前零售券商保证金.",
      "limits": "履约保障、资金要求与风险管理的区分；不提供当前零售券商保证金.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "MA-FSB",
      "title": "Liquidity Preparedness for Margin and Collateral Calls — Final Report",
      "authors": [
        "Financial Stability Board"
      ],
      "version": "2024-12-10",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fsb.org/uploads/P101224-1.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "执行摘要印刷 pp.1–2；§1.1–1.2 印刷 pp.3–8 对应完整单元",
        "scope": "政策研究中的流动性压力分析；未读全报告，不作因果估计或约束性规则.",
        "purpose": "采用流动性压力研究讨论时再读取；不属于默认必读"
      },
      "supports": "政策研究中的流动性压力分析；未读全报告，不作因果估计或约束性规则.",
      "limits": "政策研究中的流动性压力分析；未读全报告，不作因果估计或约束性规则.",
      "fallback_source_ids": []
    }
  ],
  "runtime_reading_log": [],
  "local_required_units": [
    {
      "locator": "本篇正文与交互静态输入、算法、边界及默认验算表",
      "scope": "仅所列教学数据和规则；不补不存在的盘口或账户流水",
      "purpose": "重建练习与交互的计算"
    }
  ],
  "shared_inputs": {
    "version": "2026-09-21-review-v2",
    "identity_rule": "observed/source-backed, official_example, and teaching_assumption/synthetic are never relabelled as each other",
    "cases": {
      "EXP-MA-DTC-CM-v1": {
        "identity": "official_example_with_synthetic_variants",
        "official": {
          "market_value_usd": "10000",
          "haircut": "0.10",
          "net_debit_usd": "8000",
          "cm_usd": "1000"
        },
        "synthetic_variants": [
          {
            "haircut": "0.20",
            "cm_usd": "0"
          },
          {
            "haircut": "0.25",
            "cm_usd": "-500"
          }
        ]
      },
      "SIM-MA-MES-VM-v1": {
        "identity": "synthetic_experiment_with_real_multiplier",
        "source_backed": {
          "multiplier_usd_per_point": "5"
        },
        "teaching_assumptions": {
          "contracts": 2,
          "prices": [
            "6000",
            "5960",
            "6010"
          ],
          "initial_margin_per_contract_usd": "1500",
          "maintenance_per_contract_usd": "1350",
          "free_cash_buffer_usd": "250",
          "topup_rule": "if balance < maintenance threshold, restore to initial margin"
        },
        "derived_default": {
          "notional_usd": "60000",
          "initial_margin_usd": "3000",
          "maintenance_threshold_usd": "2700",
          "day1_pnl_usd": "-400",
          "day1_margin_balance_usd": "2600",
          "required_topup_usd": "400",
          "funding_shortfall_usd": "150",
          "day2_conditional_pnl_usd": "500"
        }
      }
    }
  },
  "reading_scope_notes": ""
}
```

## Supplied entry
成交确定价格、数量和交易关系；清算处理待履行义务；交收完成证券与资金的转移. 客户账户、会员清算和存管参与人分别维护对应层次的记录.

<span id="m04-post-trade-states"></span>
## 一、成交、清算与交收状态

设投资者买入100股，每股100美元，未计费用，作为本节教学交易. 成交回报告确定的是买方支付10,000美元、取得100股的交易约定；证券与资金的最终交收还要经过后续流程.

**清算**是确定、核对和处理待履行义务的过程，可包括净额和中央对手方安排；**结算或交收**是按相应制度完成资金和证券的履行. 零售客户收到的成交回报报告交易结果，机构流程中的分配（allocation）、确认（confirmation）和affirmation则处理具体账户分配及交易细节核对.[^SEC-AFFIRM][^SEC-FAQ]

| 事件/层次 | 这一层确定什么 | 还需后续哪一层确认 |
|---|---|---|
| 成交 | 数量100股、价格100、交易约定 | 证券与资金的最终交付 |
| allocation / confirmation / affirmation（**仅在适用流程中**） | 账户、数量、交收资料按适用流程核对 | 适用流程完成后仍进入清算与交收 |
| NSCC/CNS会员层清算（若交易合资格进入该服务） | 按Rule 11形成会员层净头寸、义务承接及相关处理 | 客户账户权益仍由客户记录层维护 |
| DTC参与人层交收 | 参与人记录中的证券交付、款项等按规程处理 | 券商继续维护客户明细 |
| 客户账户/受益持有记录 | 券商按账户关系记录客户权益与交易 | 机构层履约状态仍须由相应记录确认 |

本表表示层次关系；具体市场中流程可以并行或自动传递. 成交约定、义务处理与最终履行应分别核查.

<span id="m04-tplus-one"></span>
<span id="CASE-MA-T1-CUTOVER-202405"></span>
## 二、T+1的营业日口径与适用范围

eCFR §240.15c6-1(a)对适用的经纪交易商证券交易规定下一营业日的标准付款及交付周期，并保留交易时明示另约等条件. 政府证券属于(a)的排除范围，特定承销发行在(c)、(d)另有规定.[^SEC-CYCLE]

T+1只作用于相应规则覆盖的证券交易；国库券发行等其他事件按各自规则和已公布日期处理. M01 的国库券因此使用其独立发行日期.

SEC最终规则的**生效日是2023年5月5日**；市场合规切换到T+1的日期是**2024年5月28日**.[^SEC-FINAL][^SEC-FAQ]

| 交易日 | 当时常规周期 | 营业日计数 | 标准交收日 |
|---|---|---|---|
| 2024-05-24，星期五 | T+2 | 5月28日为第1个、29日为第2个营业日 | 2024-05-29 |
| 2024-05-28，星期二 | T+1 | 5月29日为下一个营业日 | 2024-05-29 |

5月25、26日是周末，27日是Memorial Day. 两笔不同交易日、适用不同标准周期的交易，因而落在同一交收日.

更短的周期要求适用机构交易的资料更早备妥. 对于经纪交易商与其他方为一笔受§240.15c6-1(a)约束的证券交易进行allocation、confirmation或affirmation的情形，§240.15c6-2要求通过符合条文的书面协议，或建立、维护并执行合理设计的书面政策与程序，使相应处理尽快且不晚于交易日结束完成.[^SEC-AFFIRM][^SEC-FAQ]

<div data-experiment-slot="INT-M04-SETTLEMENT"></div>

<span id="m04-netting-layers"></span>
## 三、会员净额与客户持有记录

假设在同一证券、同一交收日、满足本例净额条件的安排下，一家机构有两笔交易：买100股、每股100美元；卖70股、每股101美元. 分别计算，需付10,000、收7,070；需收100股、交70股.

按两笔约定分别计量后相抵，机构净收30股、净付2,930美元，其中$10,000-7,070=2,930$. 两笔交易价格不同，因此现金净额由逐笔金额相抵得到.

NSCC的CNS制度处理合资格交易的**会员层**头寸. Rule 11 §1(a)按会员、证券形成净头寸并带入既有未交收头寸；§1(b)–(c)规定NSCC承接义务及担保生效的处理阶段；§§2–3将会员头寸与合格存管机构指令连接，§6允许特定情形下追加盯市款.[^NSCC]

在本例中，会员层可把买100股与卖70股的合资格义务处理为净变动，从而减少对外交付数量；履约风险、失败后的义务和客户明细仍分别存在.

设甲原持有0股并买入100股，乙原持有70股并全部卖出. 完成交收后，客户明细分别记录甲100股、乙0股，合计持有量从70增至100. 机构对外净增30股，客户期末合计持有100股，两者分别记录变动量与存量.

我们把三层明确画开：

| 层次 | 记录或处理什么 | 本例如何理解 |
|---|---|---|
| NSCC清算会员层 | CNS合资格义务、净额和相关风险安排 | 处理对外净变动，不替代客户明细 |
| DTC参与人层 | 证券记账移转及结算相关指令 | 与净收/净交证券等机构指令连接 |
| 券商客户层 | 哪位客户有什么权益、交易和余额 | 仍须区分甲100股、乙0股 |

SEC/FINRA区分名义登记和客户受益持有；客户保护规则还对全额付清及超额保证金证券的占有或控制规定了相应要求.[^HOLD][^CUSTOMER]

<span id="m04-settlement-collateral"></span>
## 四、DTC记账移转与抵押约束

DTC交收规程分别规定参与人之间的证券记账交付（book-entry delivery）、付款指令（Payment Order）和抵押贷款（Collateral Loan）处理，证券交付可以附款或不附款.[^DTC] 这些指令处理参与人层的记录与义务，券商另在客户明细中记录客户权益.

DTC的Collateral Monitor（CM，抵押余量）在参与人层核对可计入抵押价值与结算净借记，约束待处理交收指令.

规程p.70给出一个很合适的官方教学例：证券市值10,000美元，抵押折扣10%，计入抵押的价值为9,000美元；若结算净借记为8,000美元，则CM为1,000美元. [^DTC]

我们用这一例作局部计算：

$$
V_{\text{抵押}}=10{,}000(1-h),\qquad
CM=V_{\text{抵押}}-D,
$$

其中$h$为折扣，$D$为本例结算净借记. 这个简单公式是所选例子的压缩表示，不代替DTC全部抵押来源和操作规则.

| 场景 | 市值 | 折扣 | 抵押计值 | 净借记 | CM |
|---|---:|---:|---:|---:|---:|
| 官方例 | 10,000 | 10% | 9,000 | 8,000 | +1,000 |
| 教学变式 | 10,000 | 25% | 7,500 | 8,000 | −500 |

证券市场价值保持10,000美元，抵押折扣提高使认可价值降至7,500美元；相对8,000美元净借记，CM为−500，表示抵押价值不足500美元. 指令还需满足证券可得性、净借记上限等条件；不满足条件的指令可进入等待和再处理流程.[^DTC]

NSCC的清算基金保障会员履约并提供相应结算流动性；DTC的抵押余量控制参与人交收风险.[^NSCC] 两种安排分别作用于会员清算义务与参与人交收指令.

<div data-experiment-slot="INT-M04-COLLATERAL"></div>

<span id="m04-futures-contrast"></span>
## 五、期货路径中的中途现金约束

MES合约乘数为每指数点5美元；下例价格路径、保证金金额及补足规则为教学设定.[^MES][^CME-MARGIN]

设做多2份MES，价格按结算路径6000→5960→6010移动；每份初始保证金1,500美元、维持要求1,350美元. 在本例中，若余额低于维持要求，就须补回初始要求. 最初保证金共3,000美元，另有可用现金250美元.

本例分开记录四个量：2份MES在6000点的合约名义量为$6000\times5\times2=60,000$美元；初始保证金为3,000美元；保证金外可用现金为250美元；每日损益按$2\times5\times\Delta S$计算. 名义量是合约尺度，不代表建仓现金或最大可能亏损.

| 阶段 | 当日价格变化 | 条件结算损益 | 资金意义 |
|---|---:|---:|---|
| 建仓基准 | 6000 | — | 名义量60,000；保证金3,000；保证金外可用现金250 |
| 第1日 | −40点 | $2\times5\times(-40)=-400$ | 余额2,600，低于维持要求2,700 |
| 补足阶段 | — | 存入保证金不是新增交易损益 | 补回3,000需400，现有250，缺150 |
| 第2日（仅在补足后继续持有） | +50点 | $2\times5\times50=+500$ | 若未解决前日缺口，不能自动进入这条持有路径 |

从起点到终点的合约损益是+100美元，但默认资金不足以按所设规则一路持有. 若另外投入150美元补足，第一日补回3,000后，第二日余额变为3,500；最初3,250加新增150共投入3,400，差额仍是100美元. 新增入金不是收益.

本例中，继续持有要求中途满足资金条件. FSB将保证金和抵押品调用与流动性准备作为政策研究对象.[^FSB]

<div data-experiment-slot="INT-M04-MES"></div>

<span id="m04-exercises"></span>
## 六、练习与解析

### 练习一·营业日日历

分别推算2024年5月24日和28日的常规美国股票交易交收日. 能否据此认定两个账户都在29日上午有同样可提款额？

**解析.** 24日按当时T+2，跳过周末和27日假日，28日计第1、29日计第2个营业日；28日按切换后的T+1，也落在29日. 两者的标准交收日相同. 可提款额却还取决于实际完成、账户余额及券商安排；标准日期不提供这些数据，因此后半句不能推出.

### 练习二·存量与净变动

甲买100股，乙卖70股；乙原来持有70股，甲原来没有. 机构对外净增30股后，客户层应保留哪些持有量？

**解析.** 交收后甲持有100股、乙为0股，合计100股；此前合计70股，因此机构净增30股. 客户明细保存各自持有量，机构净额记录对外变动.

### 练习三·抵押计值

在DTC局部例中，把折扣改为25%，市值仍10,000、净借记仍8,000. 计算CM，并解释能否从中得出“客户亏500美元并强平”.

**解析.** 抵押计值7,500美元，CM为−500，表示这一项参与人层抵押约束未满足. 本例证券市场价值保持不变，负CM来自抵押折扣调整. 将折扣调回10%可恢复正CM，交收仍需满足证券可得性及净借记上限等条件.

### 练习四·保证金现金流

先给这五个数贴上正确标签，再假设按MES设定补入额外150美元并继续到第二日. 最终保证金余额3,500，是否代表相对最初保证金3,000赚了500？

**解析.** 60,000是指数水平乘合约乘数和数量所得的名义金额；3,000是初始保证金；−400是首日结算损益；250是保证金外可用现金；150是补足要求尚缺的资金. 补足后，总投入为$3,000+250+150=3,400$，第二日余额3,500，净损益100，与两日损益$-400+500=100$一致. 若150缺口未解决，原持仓无法按本例补足规则继续到第二日.

[^SEC-AFFIRM]: **eCFR / Office of the Federal Register，17 CFR §240.15c6-2 — Same-day allocation, confirmation, and affirmation**.2026-09-21访问.[原文](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-2). 定位：(a)、(b)(1)–(5)；适用于相应经纪交易商与其他方的allocation、confirmation或affirmation流程.

[^SEC-FAQ]: **SEC staff，Shortening the Securities Transaction Settlement Cycle — T+1 FAQ**. 2024-03-27.[原文](https://www.sec.gov/exams/educationhelpguidesfaqs/t1-faq). 定位：Q1–Q7及对应脚注，尤其Q1、Q3–Q6；用于2024-05-28合规切换与适用交易说明.

[^SEC-CYCLE]: **eCFR / Office of the Federal Register，17 CFR §240.15c6-1 — Settlement cycle**.2026-09-21访问；页面Title 17更新至2026-09-17，来源注88 FR 13952.[原文](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-1). 定位：(a)–(d)；涵盖适用范围、下一营业日标准、明示另约及排除/发行例外.

[^SEC-FINAL]: **SEC，Shortening the Securities Transaction Settlement Cycle — Release 34-96930 / IA-6239**. 2023-02-15；正文生效日2023-05-05.[原文](https://www.sec.gov/files/rules/final/2023/34-96930.pdf). 定位：PDF pp.1–2及印刷pp.308–311；合规切换日另见SEC T+1 FAQ.

[^CALENDAR]: **DTCC，Accelerating to T+1: A Global Custodian’s Perspective**.2023-03-06.[原文](https://www.dtcc.com/insights/2023/accelerating-to-t-1-a-global-custodians-perspective). 定位：Key Dates and Rules、Preparing for Changes；用于美国2024-05-24/28/29及Memorial Day切换日历.

[^NSCC]: **National Securities Clearing Corporation / DTCC，NSCC Rules & Procedures**. As of July 14, 2026.[原文](https://files.dtcc.com/download/assets/nscc_rules.pdf/85bda02a369211f0a3ae820bd5ac0897). 定位：Rule 11 §§1–6，印刷pp.112–114/PDF物理119–121；Rule 4 §§1–2，印刷pp.83–84/PDF物理90–91.

[^HOLD]: **SEC OIEA / FINRA，Investor Bulletin: Holding Your Securities**. 2023-07-12.[原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97). 定位：开头两种持有方式、Street Name Registration及Direct Registration.

[^CUSTOMER]: **FINRA收录SEC客户保护规则及解释，SEA Rule 15c3-3 and Related Interpretations**.2026-09-21访问.[原文](https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-15c3-3-and-related-interpretations). 定位：(b)(1)–(2)正文及邻近解释；用于全额付清及超额保证金证券的占有/控制条件.

[^DTC]: **The Depository Trust Company / DTCC，DTC Settlement Service Guide**. As of June 10, 2026.[原文](https://files.dtcc.com/download/assets/Settlement.pdf/c83a99be369a11f093d0c204a2f8334f). 定位：印刷pp.9–10；pp.68–71；Recycle Processing / Reasons for Recycling，PDF物理pp.59–60；p.70算例.

[^MES]: **CME Group，Micro E-mini Equity Index Futures: Frequently Asked Questions**. 2026-09-21访问；网页部分表例标2023-02-01.[原文](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html). 定位：Q2、Q5、Q6、Q9、Q10、Q14；用于MES每指数点5美元及结算/保证金基本安排.

[^CME-MARGIN]: **CME Group，FAQ — Performance Bonds/Margins**.2026-09-21访问.[原文](https://www.cmegroup.com/solutions/risk-management/performance-bonds-margins/faq-performance-bonds-margins.html). 定位：Q1–Q4；用于履约保障、资金要求与风险管理的区分.

[^FSB]: **Financial Stability Board，Liquidity Preparedness for Margin and Collateral Calls — Final Report**. 2024-12-10.[原文](https://www.fsb.org/uploads/P101224-1.pdf). 定位：执行摘要印刷pp.1–2；§1.1–§1.2，印刷pp.3–8；该来源是政策研究而非约束性交易规则.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MA-DTC-CM-v1",
    "title": "DTC 原例与抵押折扣教学变式",
    "anchor": "m04-settlement-collateral",
    "description": "official_example_with_synthetic_variants",
    "period": "DTC2026-06-10版本",
    "sources": [
      "MA-DTC"
    ],
    "static_equivalent_markdown": "### 交互规范：`INT-M04-SETTLEMENT`\n\n一个词条提供三张独立面板，**不得把三个账户余额相加**. 证券状态为主，CM为约束实验，MES是可折叠短对照. 默认显示证券状态和其静态表，MES不抢占正文主线.\n\n#### A. 证券日期与状态 `panel=securities`\n\n输入`trade_date`只允许`2024-05-24`或`2024-05-28`；默认28日. 规则模式由日期决定，不能任意将历史日切到“当前”. 冻结营业日列表为`[2024-05-24, 2024-05-28, 2024-05-29, 2024-05-30]`，27日假日，25/26日周末. 教学数量100股、价格100美元固定.\n\n算法：从交易日之后开始计营业日；24日`lag=2`，28日`lag=1`；输出均为29日.`stage=executed/processed/settled/failed`用于选择教学状态；前两项仍列待履约款券，`settled`只有显式选择“假设实际完成”才清零待履行事项；`failed`继续保留未履行标记. 不把标准日期自动当作成功状态，不输出账户购买力或可提款额.\n\n静态等价：正文§一、§二完整表，附买方待付10,000/待收100股的教学约定. 非支持日期/假日不接受新计算，显示“本实验日历范围外”，不调用未经核实的完整交易日库.\n\n#### B. DTC抵押约束 `panel=dtc_cm`\n\n`market_value=10000 USD`只读；`haircut=10%`，0%至30%，步长1%；`net_debit=8000 USD`，0至11000，步长100. 以十进制计算`collateral=market_value*(1-haircut)`，`cm=collateral-net_debit`. CM≥0仅显示“本项抵押余量非负；其余约束未核”；CM<0显示“本项抵押约束不满足”. 不显示“客户盈利/亏损”“所有交收通过”或“爆仓”.\n\n默认9000、1000；折扣25%时7500、−500；折扣20%时8000、0. 静态等价为正文两行表及此零边界. 新增净借记还需要净借记上限等外部数据，实验不假定全部满足.\n\n#### C. MES条件资金路径 `panel=mes`\n\n固定`contracts=2`、`multiplier=5 USD/point`、`prices=[6000,5960,6010]`、每份初始1500/维持1350；以上除乘数外均标`teaching_assumption`. 输入`buffer=250 USD`，0至1000，步长50；`allow_external_topup=false/true`默认false. 只读输出先分栏显示`notional=contracts*multiplier*prices[0]=60000 USD`、`initial_margin=3000`、`maintenance_threshold=2700`、`free_cash=buffer`；不得把四者相加成“持仓价值”.\n\nDay1：`pnl=-400`；`margin_balance=2600`；触发条件`2600<2700`；`call=3000-2600=400`；`shortfall=max(0,400-buffer)`. 界面同时保留`notional=60000`，但不让名义量进入保证金余额或收益率分母.\n- 默认buffer250且不许额外入金：输出缺口150、状态`funding_unresolved`；第二日仅保留灰显的条件损益+500，不标成可实现余额或利润.\n- 允许补足：新增外部资金150，补足后保证金3000/自由缓冲0，第二日条件余额3500；总外部投入3400，净损益100.\n- buffer400且不另入金：同样可补足；初始投入3400，第二日3500，净损益100.\n- buffer500：补款400后自由缓冲100；第二日保证金3500，自由缓冲100，总3600，相对初始3500仍为100.\n真实强平、补款截止时间、滑点和费用没有输入，不编造其输出.\n\n统一可访问性：三面板使用独立标题、标签和`fieldset`，状态说明可键盘读取；不用颜色代替“尚待履约/条件结果/实际假设完成”.`section#INT-M04-SETTLEMENT`打印时全部展开为正文静态表. 模型更新不覆盖已核规则日期. 验收检查日历、资金守恒、停止条件和账户层次，浏览器实现另行验收.",
    "inputs": {
      "market_value": 10000,
      "default_haircut": "0.10",
      "default_net_debit": 8000,
      "formula": "market_value * (1-haircut) - net_debit",
      "original_example_source": "MA-DTC",
      "variants": [
        "0.20",
        "0.25"
      ]
    },
    "outputs": {
      "default": 1000,
      "haircut_020": 0,
      "haircut_025": -500,
      "origin": "Recomputed by local authored script named DTC checks"
    }
  },
  {
    "id": "SIM-MA-MES-VM-v1",
    "title": "MES 教学路径：逐日损益与资金缺口",
    "anchor": "m04-futures-contrast",
    "description": "synthetic_experiment_with_real_multiplier",
    "period": null,
    "sources": [
      "MA-MES",
      "MA-CME-MARGIN"
    ],
    "static_equivalent_markdown": "### 交互规范：`INT-M04-SETTLEMENT`\n\n一个词条提供三张独立面板，**不得把三个账户余额相加**. 证券状态为主，CM为约束实验，MES是可折叠短对照. 默认显示证券状态和其静态表，MES不抢占正文主线.\n\n#### A. 证券日期与状态 `panel=securities`\n\n输入`trade_date`只允许`2024-05-24`或`2024-05-28`；默认28日. 规则模式由日期决定，不能任意将历史日切到“当前”. 冻结营业日列表为`[2024-05-24, 2024-05-28, 2024-05-29, 2024-05-30]`，27日假日，25/26日周末. 教学数量100股、价格100美元固定.\n\n算法：从交易日之后开始计营业日；24日`lag=2`，28日`lag=1`；输出均为29日.`stage=executed/processed/settled/failed`用于选择教学状态；前两项仍列待履约款券，`settled`只有显式选择“假设实际完成”才清零待履行事项；`failed`继续保留未履行标记. 不把标准日期自动当作成功状态，不输出账户购买力或可提款额.\n\n静态等价：正文§一、§二完整表，附买方待付10,000/待收100股的教学约定. 非支持日期/假日不接受新计算，显示“本实验日历范围外”，不调用未经核实的完整交易日库.\n\n#### B. DTC抵押约束 `panel=dtc_cm`\n\n`market_value=10000 USD`只读；`haircut=10%`，0%至30%，步长1%；`net_debit=8000 USD`，0至11000，步长100. 以十进制计算`collateral=market_value*(1-haircut)`，`cm=collateral-net_debit`. CM≥0仅显示“本项抵押余量非负；其余约束未核”；CM<0显示“本项抵押约束不满足”. 不显示“客户盈利/亏损”“所有交收通过”或“爆仓”.\n\n默认9000、1000；折扣25%时7500、−500；折扣20%时8000、0. 静态等价为正文两行表及此零边界. 新增净借记还需要净借记上限等外部数据，实验不假定全部满足.\n\n#### C. MES条件资金路径 `panel=mes`\n\n固定`contracts=2`、`multiplier=5 USD/point`、`prices=[6000,5960,6010]`、每份初始1500/维持1350；以上除乘数外均标`teaching_assumption`. 输入`buffer=250 USD`，0至1000，步长50；`allow_external_topup=false/true`默认false. 只读输出先分栏显示`notional=contracts*multiplier*prices[0]=60000 USD`、`initial_margin=3000`、`maintenance_threshold=2700`、`free_cash=buffer`；不得把四者相加成“持仓价值”.\n\nDay1：`pnl=-400`；`margin_balance=2600`；触发条件`2600<2700`；`call=3000-2600=400`；`shortfall=max(0,400-buffer)`. 界面同时保留`notional=60000`，但不让名义量进入保证金余额或收益率分母.\n- 默认buffer250且不许额外入金：输出缺口150、状态`funding_unresolved`；第二日仅保留灰显的条件损益+500，不标成可实现余额或利润.\n- 允许补足：新增外部资金150，补足后保证金3000/自由缓冲0，第二日条件余额3500；总外部投入3400，净损益100.\n- buffer400且不另入金：同样可补足；初始投入3400，第二日3500，净损益100.\n- buffer500：补款400后自由缓冲100；第二日保证金3500，自由缓冲100，总3600，相对初始3500仍为100.\n真实强平、补款截止时间、滑点和费用没有输入，不编造其输出.\n\n统一可访问性：三面板使用独立标题、标签和`fieldset`，状态说明可键盘读取；不用颜色代替“尚待履约/条件结果/实际假设完成”.`section#INT-M04-SETTLEMENT`打印时全部展开为正文静态表. 模型更新不覆盖已核规则日期. 验收检查日历、资金守恒、停止条件和账户层次，浏览器实现另行验收.",
    "inputs": {
      "real_contract_multiplier_usd": 5,
      "contracts": 2,
      "teaching_prices": [
        6000,
        5960,
        6010
      ],
      "teaching_initial_margin": 3000,
      "teaching_maintenance_margin": 2700,
      "default_buffer": 250,
      "default_allow_external_topup": false,
      "buffer_bounds": [
        0,
        1000
      ],
      "rule": "When balance falls below maintenance, restore to initial; stop if cash is insufficient unless explicit topup is selected.",
      "notional_usd_at_initial_price": "60000"
    },
    "outputs": {
      "notional": "60000",
      "blocked": {
        "buffer": "250",
        "day1_pnl": "-400",
        "balance_before_topup": "2600",
        "maintenance": "2700",
        "call": "400",
        "shortfall": "150",
        "status": "funding_unresolved",
        "extra_external_cash": "0",
        "terminal_resources": null,
        "net_pnl": null,
        "day2_conditional_pnl": "500"
      },
      "funded": {
        "buffer": "250",
        "day1_pnl": "-400",
        "balance_before_topup": "2600",
        "maintenance": "2700",
        "call": "400",
        "shortfall": "150",
        "status": "funded_conditional_path",
        "extra_external_cash": "150",
        "terminal_resources": "3500",
        "net_pnl": "100",
        "day2_conditional_pnl": "500",
        "margin_terminal": "3500",
        "free_cash": "0",
        "external_resources": "3400"
      }
    }
  }
]
```

## Sources
- [Accelerating to T+1: A Global Custodian’s Perspective](https://www.dtcc.com/insights/2023/accelerating-to-t-1-a-global-custodians-perspective): 美国2024年5月由T+2切换至T+1的营业日日历，含5月24日、28日、29日和Memorial Day.
- [FAQ — Performance Bonds/Margins](https://www.cmegroup.com/solutions/risk-management/performance-bonds-margins/faq-performance-bonds-margins.html): 履约保障、资金要求与风险管理的区分；不提供当前零售券商保证金.
- [SEA Rule 15c3-3 and Related Interpretations](https://www.finra.org/rules-guidance/guidance/interpretations-financial-operational-rules/sea-rule-15c3-3-and-related-interpretations): 全额付清及超额保证金证券的占有/控制要求及条件；不概括为所有证券绝对不得借贷.
- [DTC Settlement Service Guide](https://files.dtcc.com/download/assets/Settlement.pdf/c83a99be369a11f093d0c204a2f8334f): DTC 参与人层面的证券记账、款项交收与风险约束.
- [Liquidity Preparedness for Margin and Collateral Calls — Final Report](https://www.fsb.org/uploads/P101224-1.pdf): 流动性压力与准备的政策研究. Recommendations 6–8 讨论抵押品资格、占用、haircut、币种、地点、付款截止时间及操作准备.
- [Investor Bulletin: Holding Your Securities](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97): 名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.
- [Micro E-mini Equity Index Futures: Frequently Asked Questions](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html): MES乘数为每指数点5美元，最小价格跳动为0.25点. FAQ分别说明合约代码、结算和保证金安排.
- [NSCC Rules & Procedures](https://files.dtcc.com/download/assets/nscc_rules.pdf/85bda02a369211f0a3ae820bd5ac0897): CNS按会员和证券形成净头寸；Rule 11规定义务承接、存管指令及追加盯市的处理阶段，Rule 4规定清算基金安排.
- [17 CFR §240.15c6-2 — Same-day allocation, confirmation, and affirmation](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-2): 经纪交易商与其他方为受§15c6-1(a)约束交易进行allocation/confirmation/affirmation流程时的同日处理要求；不把零售成交回报当成同一环节.
- [17 CFR §240.15c6-1 — Settlement cycle](https://www.ecfr.gov/current/title-17/chapter-II/part-240/subject-group-ECFRc8401dcba174f73/section-240.15c6-1): 美国证券交易的标准交收周期、明示另约及适用例外. eCFR 提供持续更新的规则电子文本.
- [Shortening the Securities Transaction Settlement Cycle — T+1 FAQ](https://www.sec.gov/exams/educationhelpguidesfaqs/t1-faq): 2024-05-28合规切换、适用交易和同日处理边界；staff guidance不代替条文.
- [Shortening the Securities Transaction Settlement Cycle — Release 34-96930 / IA-6239](https://www.sec.gov/files/rules/final/2023/34-96930.pdf): 生效日期和规则结构；合规切换日另见FAQ.

## Content relations
```json
[
  {
    "from": "zh-m04",
    "relation": "part_of",
    "to": "markets-trading",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m04",
    "relation": "requires",
    "to": "m02-issue-transfer",
    "reason": "理解交易约定与证券转移的关系",
    "required_competence": "能区分买卖双方约定的款券与实际完成的交付",
    "scope": "只需该局部能力；不要求M02全部IPO计算或M03订单实验"
  },
  {
    "from": "zh-m04",
    "relation": "supported_by",
    "to": "MA-SEC-CYCLE",
    "reason": "标准周期、范围及例外",
    "scope": "(a)–(d)，2026-09-21读取",
    "at_section": "m04-tplus-one"
  },
  {
    "from": "zh-m04",
    "relation": "illustrated_by",
    "to": "CASE-MA-T1-CUTOVER-202405",
    "reason": "营业日计数与规则切换",
    "at_section": "m04-tplus-one"
  },
  {
    "from": "zh-m04",
    "relation": "supported_by",
    "to": "MA-NSCC",
    "reason": "会员净额与义务承接",
    "scope": "Rule11 §§1–6，2026-07-14版",
    "at_section": "m04-netting-layers"
  },
  {
    "from": "zh-m04",
    "relation": "supported_by",
    "to": "MA-DTC",
    "reason": "参与人层移转与抵押约束",
    "scope": "2026-06-10版pp.9–10、68–71",
    "at_section": "m04-settlement-collateral"
  },
  {
    "from": "zh-m04",
    "relation": "illustrated_by",
    "to": "EXP-MA-DTC-CM-v1",
    "reason": "官方算例与显式折扣变式",
    "at_section": "m04-settlement-collateral"
  },
  {
    "from": "zh-m04",
    "relation": "illustrated_by",
    "to": "SIM-MA-MES-VM-v1",
    "reason": "终点损益不能替代中途资金约束",
    "at_section": "m04-futures-contrast"
  },
  {
    "from": "SIM-MA-MES-VM-v1",
    "relation": "uses_method",
    "to": "m04-futures-contrast",
    "reason": "按同一资金账核对损益和外部入金",
    "scope": "教学规则，不是现行券商参数"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 4/17
区分成交、净额清算、最终交收与期间资金需要.
把权利与履约机制带回实际证券：先读普通股条款，再看基金份额.
Next: [股票与股东权利](https://ou-liu-red-sugar.github.io/zh/notebook/stock-shareholder-rights/)
