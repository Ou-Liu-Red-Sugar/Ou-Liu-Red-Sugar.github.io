# 远期与期货的合约结构

从CL真实条款分开未来义务、数量、报价、损益与现金，解释标准化及负价格.

Entry: zh-m10 | Node: M10 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《远期与期货的合约结构》，面向有充分数学基础的高年级本科生至研究生. 先实际读取随包 required_readings 的指定原文单元；采用选读分支时也读取对应材料，并记录本次版本与范围. 原文不可读时查找机构的等价全文，仍缺关键单元则指出缺口.

从CL合约规格开始，让我列出数量、品级、地点、月份与报价刻度，并解释1.5K桶采购量与整数合约的差异. 计算三张空头在价格上涨0.12美元时的损益，再计算2020年4月17日至20日一张多头的VM. 用每张500单位的新合约检验我能否迁移乘数、方向和现金时点.

用一个完整分析任务判断我的起点，已掌握的步骤直接跳过. 沿正文的输入、单位与材料时点讲解，在我作答后给出推导、错误原因和迁移反馈.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "core",
  "learning_task": "独立填写CL契约卡，并用新合约乘数迁移一段价格损益.",
  "required_readings": [
    {
      "source_id": "MD-S01",
      "title": "Finance Theory I, Lectures 8–9: Forwards and Futures",
      "authors": [
        "Andrew W. Lo / MIT OCW"
      ],
      "version": "Fall 2008; copyright 2007–2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf"
      },
      "required_unit": {
        "locator": "slides 9–16",
        "scope": "远期/期货概念、合约标准化、清算和现金差异的完整教学单元",
        "purpose": "理解未来双向义务及标准化的取舍"
      },
      "supports": "契约比较及cash-and-carry结构. 旧讲义暂忽略远期/期货差异；不采用无条件零现金/零对手方风险的简化."
    },
    {
      "source_id": "MD-S02",
      "title": "NYMEX Rulebook Chapter 200: Light Sweet Crude Oil Futures",
      "authors": [
        "CME Group / NYMEX"
      ],
      "version": "online retrieved 2026-09-21; amendment date not stated",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf"
      },
      "required_unit": {
        "locator": "§§200100–200104，PDF pp1–3",
        "scope": "一般规则、交割品级/单位、报价/到期以及交付方法的完整相关单元；引用的通则不冒充已读",
        "purpose": "填CL合约卡，不把乘数当全部交付能力"
      },
      "supports": "CL合约单位、价格刻度和相对交割事件. 当前在线规则不是2020历史规则版；未复核通则全部依赖，不构成实盘交割操作手册."
    },
    {
      "source_id": "MD-S05-MARGIN",
      "title": "The Benefits of Futures Margins",
      "authors": [
        "CME Group"
      ],
      "version": "online accessed 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/education/courses/understanding-the-benefits-of-futures/the-benefits-of-futures-margins"
      },
      "required_unit": {
        "locator": "正文 The Benefits of Futures Margin / Initial and Maintenance Margin",
        "scope": "两组实质段落完整读",
        "purpose": "区分商品货款、担保余额与逐日现金"
      },
      "supports": "保证金是应维持的担保余额而非货款；补足规则因制度/经纪商而异. 不给百分比当作当前CL参数."
    },
    {
      "source_id": "MD-S03",
      "title": "WTI Interim Staff Report: Trading leading up to, on and around April 20, 2020",
      "authors": [
        "CFTC staff"
      ],
      "version": "2020-11-23 interim report",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download"
      },
      "required_unit": {
        "locator": "III Background；printed pp8–9,11价格及事件段",
        "scope": "读完整历史合约与结算背景单元并查看原表/图文字，结论不超出中期报告",
        "purpose": "核18.27/−37.63/10.01及历史时点"
      },
      "supports": "历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金."
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MD-review-v3",
    "experiment_ids": [
      "EXP-MD-M10-CONTRACT"
    ],
    "data": {
      "content_version": "2026-09-21-MD-review-v3",
      "cutoff": "2026-09-21",
      "frozen": {
        "schema": "m-d-primary-inputs-v1",
        "verified_on": "2026-09-21",
        "money_unit": "USD",
        "price_unit": "USD per U.S. barrel",
        "contract": {
          "code": "CL",
          "quantity_barrels": "1000",
          "tick_usd_per_barrel": "0.01",
          "source_id": "MD-S02",
          "locator": "200102.B–C",
          "version": "online rule retrieved 2026-09-21; amendment effective date not supplied"
        },
        "historical_window": {
          "identity": "real_observations_with_derived_june_settlement",
          "spread_definition": "May settlement minus June settlement",
          "basis_definition": "EIA Cushing daily close minus May settlement; not synchronous executable quotes",
          "rows": [
            {
              "date": "2020-04-17",
              "may_settlement": "18.27",
              "may_minus_june": "-6.76",
              "spot": "18.31"
            },
            {
              "date": "2020-04-20",
              "may_settlement": "-37.63",
              "may_minus_june": "-58.06",
              "spot": "-36.98"
            },
            {
              "date": "2020-04-21",
              "may_settlement": "10.01",
              "may_minus_june": "-1.56",
              "spot": "8.91"
            }
          ],
          "vm_position": "teaching long one May entered at Apr17 settlement; not an actual account",
          "missing": [
            "April2020 IM/MM",
            "broker and intraday calls",
            "synchronous executable quotes"
          ]
        },
        "margin_paths": {
          "identity": "teaching_assumptions_not_historical_CME_margins",
          "contracts": "1",
          "direction": "long",
          "starting_total_cash": "12000",
          "initial_margin": "8000",
          "maintenance_margin": "6500",
          "call_rule": "after variation, strict balance<MM triggers transfer to restore IM; equality does not trigger",
          "cash_policy": "no interest, withdrawals, fees or intraday calls",
          "paths": {
            "A": [
              "75",
              "73.5",
              "74.2",
              "71.8",
              "75.6"
            ],
            "B": [
              "75",
              "75.2",
              "75.4",
              "75.5",
              "75.6"
            ]
          },
          "increased_requirement_variant": {
            "path": "A",
            "effective_after_mark_index": 2,
            "initial_margin": "10000",
            "maintenance_margin": "8500",
            "insufficient_cash_action": "stop at unmet call; no invented financing or liquidation price"
          }
        },
        "carry_cash_ledger": {
          "identity": "teaching_deliverable_lot_not_market_arbitrage_claim",
          "spot": "75",
          "upfront_storage_per_barrel": "1",
          "end_delivery_cost_per_barrel": "0.20",
          "simple_annual_funding_rate": "0.05",
          "day_count_denominator": "365",
          "holding_days": "90",
          "fixed_forward_delivery_price": "78",
          "assumptions": [
            "deliverable grade/location/access",
            "storage at inception financed with oil",
            "day90 repayment and handling",
            "counterparty performs",
            "other friction set to zero",
            "convenience service is not cash"
          ],
          "futures_cash_timing_variant": {
            "identity": "sparse discrete teaching account, not actual CL calendar or equilibrium theorem",
            "marks": [
              {
                "day": 0,
                "price": "78"
              },
              {
                "day": 30,
                "price": "79"
              },
              {
                "day": 90,
                "price": "77.5"
              }
            ],
            "cash_purchase_delivery_payment_day": 90,
            "initial_margin": "8000",
            "margin_remuneration_rate": "0",
            "initial_margin_financed": true,
            "variation_outflow_financed_until_day90": true,
            "intermediate_unlisted_marks": "none in this discrete teaching model"
          }
        },
        "roll": {
          "identity": "teaching executions at historical settlements; no actual fills",
          "old_contract": "May 2020 CL",
          "new_contract": "June 2020 CL",
          "old_entry_price_assumption": "20",
          "roll_date": "2020-04-17",
          "next_mark_date": "2020-04-20",
          "costs": "zero defaults; no observed execution costs"
        },
        "aecom_swap": {
          "identity": "disclosed_facts",
          "as_of": "2025-09-30",
          "notional": "400000000",
          "currency": "USD",
          "fixed_rate_paid": "0.01283",
          "floating_received_description": "prevailing one-month SOFR",
          "effective_month": "2023-02",
          "expiration_month": "2028-03",
          "source_id": "MD-S06",
          "not_disclosed": [
            "confirmation index definition",
            "fixing/payment/day-count",
            "swap floor",
            "specific loan allocation",
            "CSA and clearing",
            "actual period payments"
          ]
        },
        "swap_cash_example": {
          "identity": "conditional_teaching_variant_not_AECOM_actual_settlement",
          "accrual_numerator_days": "30",
          "accrual_denominator_days": "360",
          "floating_rates": [
            "0.04",
            "0.02",
            "0"
          ],
          "loan_notional": "400000000",
          "loan_spread": "0.0175",
          "matching_assumptions": [
            "same index/fixing/accrual/payment",
            "nonnegative floating rates with loan floor inactive",
            "constant spread",
            "performance; no fees or collateral modeled"
          ],
          "mismatch_variant": {
            "swap_notional": "300000000",
            "loan_notional": "400000000",
            "rate_increase": "0.01",
            "identity": "not the separate AECOM cap; notional mismatch only"
          }
        }
      },
      "contract": {
        "quantity": 1000,
        "tick": 0.01,
        "min_contracts": 1,
        "max_contracts": 50,
        "rule_access_date": "2026-09-21",
        "source": "MD-S02"
      },
      "history": [
        {
          "date": "2020-04-17",
          "may_settlement": "18.27",
          "may_minus_june": "-6.76",
          "spot": 18.31,
          "may": 18.27,
          "spread": -6.76
        },
        {
          "date": "2020-04-20",
          "may_settlement": "-37.63",
          "may_minus_june": "-58.06",
          "spot": -36.98,
          "may": -37.63,
          "spread": -58.06
        },
        {
          "date": "2020-04-21",
          "may_settlement": "10.01",
          "may_minus_june": "-1.56",
          "spot": 8.91,
          "may": 10.01,
          "spread": -1.56
        }
      ],
      "m10": {
        "identity": "teaching_prices_with_actual_CL_multiplier",
        "side": "long",
        "contracts": 1,
        "entry": 75,
        "next": 76
      },
      "margin": {
        "identity": "teaching_account_not_CCP_or_historical_margin",
        "paths": {
          "A": [
            75,
            73.5,
            74.2,
            71.8,
            75.6
          ],
          "B": [
            75,
            75.2,
            75.4,
            75.5,
            75.6
          ]
        },
        "contracts": 1,
        "initial_per_contract": 8000,
        "maintenance_per_contract": 6500,
        "starting_cash": 12000,
        "raised_initial_per_contract": 10000,
        "raised_maintenance_per_contract": 8500,
        "change_at_mark": 2,
        "deadline": "model stage D_i after settlement, before next mark; not a real broker deadline",
        "transfer_on_time": true
      },
      "carry": {
        "identity": "teaching_funded_deliverable_lot",
        "quantity": 1000,
        "spot": 75,
        "storage": 1,
        "storage_timing": "upfront",
        "handling": 0.2,
        "rate": 0.05,
        "denominator": 365,
        "days": 90,
        "forward": 78,
        "mid": 79,
        "end": 77.5,
        "mid_day": 30,
        "initial_margin": 8000,
        "margin_rate": 0,
        "positive_intermediate_cash_rate": 0,
        "storage_available": true,
        "funding_available": true,
        "deliverable": true,
        "convenience_cash_receipt": 0
      },
      "roll": {
        "identity": "assumed_executions_with_source_settlement_references",
        "contracts": 1,
        "old_entry": 20,
        "old_reference": 18.27,
        "new_reference": 25.03,
        "next_new_settlement": 20.43,
        "previous_settlement": null,
        "illustrative_previous_settlement": 19,
        "old_sell_slippage": 0,
        "new_buy_slippage": 0,
        "fee_per_leg_per_contract": 0,
        "settlement_matches_entry_reference": true
      },
      "swap": {
        "identity": "disclosed_inputs_plus_matched_teaching_loan",
        "loan_notional": 400000000,
        "swap_notional": 400000000,
        "fixed": 0.01283,
        "spread": 0.0175,
        "rate": 0.04,
        "accrual_numerator": 30,
        "accrual_denominator": 360,
        "same_index": true,
        "same_fixing": true,
        "same_payment": true,
        "same_accrual": true,
        "loan_floor": 0,
        "swap_floor": "not disclosed; negative rates not modeled",
        "missing_rates_action": "null floating/combined outputs; request distinct inputs; do not reuse default rate",
        "cash_direction": "company receipts positive, payments positive in dedicated payment columns"
      },
      "delivery_events": [
        {
          "id": "last",
          "title": "最后交易日 L",
          "locator": "200102.F",
          "text": "交割月前月25日前第三个营业日；若25日非营业日，以其前最近营业日为基准再倒数三个营业日. 上市后休业表变更有保留原到期日及前移例外."
        },
        {
          "id": "intent",
          "title": "L 后第1营业日",
          "locator": "200105.A/B",
          "text": "纽约时间15:00前，持仓清算会员提交接受或交付意向. 不要将这一步称作实物已交付."
        },
        {
          "id": "notice",
          "title": "L 后第2营业日：Notice Day",
          "locator": "200105.E/F",
          "text": "清算所分配通知；收到通知的会员承担相应接受或交付安排，通知不可转让."
        },
        {
          "id": "margin",
          "title": "L 后第3营业日",
          "locator": "200105.A.2; 200107.B",
          "text": "清算会员须向买方收取等于完整货值的交割保证金；卖方另按交易所规定. 另须交付指令及设施接入信息."
        },
        {
          "id": "physical",
          "title": "交割月首日至末日",
          "locator": "200106",
          "text": "安排实物交付及初步货权转移确认；调度和接入必须可行，不等于“有仓位就有仓储”."
        },
        {
          "id": "payment",
          "title": "交割次月20日及规则调整",
          "locator": "200107.A/C",
          "text": "货款基于最终结算价与交付量. 周六或非周一休业日前移；周日或周一休业日后移. 须依实际交易所/纽约银行日历."
        },
        {
          "id": "complete",
          "title": "完成通知与保证金退回",
          "locator": "200107.B/C",
          "text": "交付与付款完成并通知交易所后，按规则退回所持保证金；数量差异另依规定调整. 不是第二次商品收入."
        }
      ],
      "additional_teaching_examples": {
        "forward": {
          "quantity": 1500,
          "price": 78,
          "terminal_spots": [
            90,
            65
          ],
          "upfront_or_margin_cash": 0
        },
        "transfer_contract_X": {
          "quantity": 500,
          "tick": 0.02,
          "contracts": 2,
          "price_change": 0.1
        },
        "roll_known_previous": 19,
        "roll_delivery_value": 80000,
        "roll_execution_variant": {
          "old_sell_slippage": 0.02,
          "new_buy_slippage": 0.03,
          "fee_per_leg_per_contract": 5
        },
        "margin_less_cash": 11000,
        "margin_first_mark_variant": 73.49,
        "carry_mid_variant": 82,
        "swap_notional_variant": 300000000
      }
    },
    "attachments": [
      {
        "title": "共同输入与单位",
        "url": "/notebook/labs/m-d/inputs.json",
        "kind": "json"
      },
      {
        "title": "默认计算结果",
        "url": "/notebook/labs/m-d/default-results.json",
        "kind": "json"
      },
      {
        "title": "本篇静态表",
        "url": "/notebook/labs/m-d/static/M10.html",
        "kind": "html"
      }
    ]
  }
}
```

## Supplied entry
<a id="m10-purpose"></a>
## 一、远期的未来交换义务

一家加工企业三个月后需要原油，一家生产企业预计那时能交出原油. 加工企业担心采购价格上涨，生产企业担心销售价格下降. 双方今天约定未来交换的数量、地点、时间和价格，便能固定这笔采购支出与销售收入.

**远期合约**是双方按约定在未来履行交换或结算义务的合约. 多头、空头分别承担买入、卖出方向的履约义务. **期货合约**则把标的、数量、合约月份等条款标准化，在交易所交易，并按相应清算规则逐日处理价格变动现金. 二者有共同的未来价格风险，却未必有相同的现金时点和信用安排. [^MD-S01]

我们先设一笔没有保证金和中间支付的教学远期：三个月后交付1,500桶指定原油，每桶78美元，两方均按约履行，忽略费用. 加工企业到时支付117,000美元并取得货物. 若那时相同货物的现货价是90美元，未锁价采购需要135,000美元；若现货价降至65美元，未锁价只需97,500美元.

| 到期现货价，美元/桶 | 当时直接采购1,500桶 | 远期合同付款 | 相对当时采购的价格优势 |
|---:|---:|---:|---:|
| 90 | 135,000 | 117,000 | 18,000 |
| 65 | 97,500 | 117,000 | −19,500 |

最后一栏$1{,}500(S_T-78)$衡量远期相对到期现货采购的价值差. 实物交收的现金流仍是支付117,000美元、取得1,500桶油；价值差已经包含在这项交换中.

企业以放弃有利价格变化为代价，取得预算确定性. 需求、产量或交货时间改变后，原合约的履约义务仍需处理.

<a id="case-md-cl-rule-20260921"></a>
<a id="m10-contract"></a>
## 二、CL合约的标的、数量与交付规格

本节采用2026年9月21日取得的NYMEX《Chapter 200: Light Sweet Crude Oil Futures》在线规则；文件未标明最近修订生效日，以下条款以取得时点作为版本身份. [^MD-S02]

| 字段 | 本例读出的内容 | 它决定什么 |
|---|---|---|
| 合约 | Light Sweet Crude Oil Futures，CL | 不能与别的原油产品混用规格 |
| 标准交易单位 | 每张1,000美制桶 | 从报价变化换算美元损益的乘数 |
| 报价、最小跳动 | 美元/桶；0.01美元/桶 | 每张一跳为10美元 |
| 交付对象 | 满足规则的油品与质量要求 | 任意来源的“原油”未必能履约 |
| 交付地点与接入 | Cushing的合资格设施及相应管线接入 | 地理位置和调度能力属于合约内容 |
| 月份与生命周期 | 必须指明合约月；有最后交易及交割程序 | “做多CL”尚未说明何时履约 |

规则另有体积计量与特定交付方式的数量容差；本节按标准1,000桶单位计算.

另一个港口的1,000桶库存，只有能按时送入合资格设施，才具备相应的交割能力. 运输、接入和交付时点会使这批库存与CL交付对象具有不同价格.

标准化使订单可以围绕同一油品、计量方式和交付地点比较价格. 对需要1,500桶、特定日期和另一地点的加工企业，一张合约留下500桶未覆盖，两张则多出500桶价格暴露；数量、日期和地点分别产生错配.

<a id="m10-market"></a>
## 三、标准化、清算与现金时点

定制远期可对准企业需求；退出时需处理原合同、对手方和替代交易. 标准化期货便于同月同品种的反向交易与抵销，清算规则则规定义务承接、盯市和担保方式. [^MD-S01]

客户向经纪商下单并按账户协议准备资金，清算会员向清算体系履行义务，进入实物交割后还需安排合资格货物和付款. 这些事件分别属于[成交、清算与最终交收](https://ou-liu-red-sugar.github.io/zh/notebook/clearing-settlement-collateral/).

期货保证金是建立和维持头寸的担保资金. 保证金划入、手续费和价格变动结算都能产生当期现金要求，实物所有权按交割程序转移. 远期也可约定抵押安排. [^MD-S05-MARGIN]

定制减少业务错配，集中交易和标准化改善报价可比性与退出条件；逐日结算缩短未结损失累积的时间，同时增加中途筹资需求.

<a id="m10-units"></a>
## 四、数量、报价、损益与保证金

设$n$为张数，$Q=1{,}000n$为桶数；方向$\theta=+1$表示多头，$\theta=-1$表示空头. 在本例价格按每桶美元计、忽略费用时，从结算价$F_a$到$F_b$的变化给出

$$
\Delta\Pi=\theta Q(F_b-F_a).
$$

价格每增加1美元/桶，一张多头的这一段损益增加1,000美元；一跳0.01美元/桶对应10美元. 其单位是“桶×美元/桶＝美元”，不会因为报价低就改变.

再设教学建仓价75、下一结算价76. 我们应把账户旁的数字这样摆放：

| 对象 | 一张多头的数值 | 不能拿它替代什么 |
|---|---:|---|
| 数量尺度 | 1,000桶 | 不是已入库数量 |
| 起点报价乘数量 | 75,000美元 | 不是建仓时支付的商品购买价 |
| 这一段价格变动损益 | +1,000美元 | 不是整张合约的名义量 |
| 初始/维持保证金 | 本例此处未给规则金额 | 不能由75,000自行推定 |

本例按给定价格建仓，期初现金项目包括适用的保证金与费用. [逐日资金账](https://ou-liu-red-sugar.github.io/zh/notebook/futures-variation-margin/)进一步记录各段价格差如何改变可用现金和担保余额.

<div data-experiment-slot="EXP-MD-M10-CONTRACT"></div>

75→76时，一张多头的损益为+1,000美元；三张空头的数量为3,000桶、一跳30美元，同一价格变化的损益为−3,000美元. 方向改变现金符号，不改变油品、月份和合约乘数.

<a id="m10-negative"></a>
## 五、负价格下的报价、结算与交付

CFTC的2020年中期报告记录了当年5月CL的结算价：4月17日18.27美元/桶，4月20日−37.63美元/桶，4月21日10.01美元/桶；报告把4月21日列为该合约最后交易日. [^MD-S03]

若**教学上假定**一张多头从4月17日结算价持有到4月20日，价格变化是−55.90美元/桶，结算变化现金为−55,900美元. 下一段到10.01时为+47,640美元，合计−8,260美元. 后来回到正价，没有自动撤销前一天的现金要求.

在−37.63建立一张多头后，价格变动现金按成交价与随后结算价之差计算. $FQ=-37{,}630$表示报价乘数量，并非建仓时获得的现金. 持仓进入交割时，还须按合约安排接货、调度与付款.

接货附带的仓储、运输和调度成本会降低持有该批货物的净价值，缺少可用设施时，退出交付义务也可能需要付费. CFTC报告讨论了当时的供需、仓储、实物物流与交易行为. [^MD-S03]

<a id="m10-exercises"></a>
## 六、单位与合约迁移练习

**题一：三张空头的单位.** 每桶上涨0.12美元，损益多少？

**解析.** 0.12相当于12跳；三张每跳30美元，空头损益为$-12\times30=-360$美元. 也可直接算$-3\times1{,}000\times0.12$.

**题二：采购数量错配.** 1,500桶采购能否被一张CL完全覆盖？

**解析.** 一张的数量尺度只有1,000桶，剩余500桶仍有价格暴露；两张则多出500桶. 即便数量处理了，采购日、地点和油品仍须匹配.

**题三：某人说“−37.63做多，所以交易所给我37,630美元”. 他漏了什么？**

**解析.** 他把报价乘数量误当成建仓现金流，既没写后续结算价，也没写交付义务. 如果下一结算价为−40，按该教学成交价的一张多头损益是$1{,}000(-40+37.63)=-2{,}370$美元. .

**题四：换一份合约.** 假想合约X每张500单位、报价美元/单位、每跳0.02美元. 计算两张多头在价格上升0.10时的损益.

**解析.** X每张一跳10美元，两张一跳20美元；上涨0.10是5跳，损益100美元.

[^MD-S01]: Andrew W. Lo，MIT 15.401，*Forwards and Futures*，Fall 2008，slides 9–16. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf). 远期/期货契约结构与逐日盯市.
[^MD-S02]: CME/NYMEX，*Chapter 200*，2026-09-21取得的在线版，§§200100–200104. [原文](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf). 合约单位、报价和交付条件.
[^MD-S05-MARGIN]: CME，*The Benefits of Futures Margins*，保证金及初始/维持保证金单元. [原文](https://www.cmegroup.com/education/courses/understanding-the-benefits-of-futures/the-benefits-of-futures-margins).
[^MD-S03]: CFTC staff，*WTI Interim Staff Report*，2020-11-23，印刷pp.8–9、11及背景/仓储讨论. [原文](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download). 历史结算价、事件与市场背景.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MD-M10-CONTRACT",
    "title": "远期与期货的合约结构：交互实验",
    "anchor": "m10-units",
    "description": "真实CL单位与教学价格；切换方向、张数及负结算价窗口.",
    "inputs": {
      "data_keys": [
        "contract",
        "m10",
        "history",
        "additional_teaching_examples.forward"
      ],
      "adjustable": {
        "side": [
          "long",
          "short"
        ],
        "contracts": {
          "min": 1,
          "max": 50,
          "integer": true
        },
        "entry/next": {
          "unit": "USD/bbl",
          "min": -1000,
          "max": 1000,
          "step": 0.01
        }
      },
      "read_only": [
        "quantity=1000 bbl",
        "tick=.01 USD/bbl",
        "rule retrieval date",
        "historical source prices"
      ]
    },
    "algorithm": "Q=1000*n; sign=+1(long)/−1(short); PnL=sign*Q*(next−entry); tick=Q*.01. quote_times_quantity is not entry commodity purchase cash.",
    "outputs": {
      "status": "conditional_price_change",
      "identity": "teaching_prices_with_actual_CL_multiplier",
      "inputs": {
        "identity": "teaching_prices_with_actual_CL_multiplier",
        "side": "long",
        "contracts": 1,
        "entry": 75,
        "next": 76
      },
      "quantity": 1000,
      "tick_value": 10,
      "signed_sensitivity": 1000,
      "quote_times_quantity": 75000,
      "pnl": 1000,
      "commodity_purchase_payment_at_entry": 0,
      "margin_requirement": null,
      "history": [
        {
          "date": "2020-04-17",
          "may": 18.27,
          "june": 25.03,
          "spot": 18.31,
          "spread": -6.76,
          "basis": 0.04,
          "vm": null
        },
        {
          "date": "2020-04-20",
          "may": -37.63,
          "june": 20.43,
          "spot": -36.98,
          "spread": -58.06,
          "basis": 0.65,
          "vm": -55900
        },
        {
          "date": "2020-04-21",
          "may": 10.01,
          "june": 11.57,
          "spot": 8.91,
          "spread": -1.56,
          "basis": -1.1,
          "vm": 47640
        }
      ]
    },
    "boundaries": [
      "非整数张数/非tick价格/非有限输入拒绝",
      "允许负价格但不生成负价买货收款",
      "保证金水平unknown，不由名义量推得"
    ],
    "static_equivalent": "/notebook/labs/m-d/static/M10.html；reader m10-units/m10-negative"
  }
]
```

## Sources
- [Finance Theory I, Lectures 8–9: Forwards and Futures](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf): 远期与期货契约、融资、仓储、现金收益及便利服务的carry关系. 现金流时点与复制所需交易条件决定各公式的适用范围.
- [NYMEX Rulebook Chapter 200: Light Sweet Crude Oil Futures](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf): 当前在线 CL 期货合约的单位、最小价格变动和相对交割日程.
- [WTI Interim Staff Report: Trading leading up to, on and around April 20, 2020](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download): 历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金.
- [The Benefits of Futures Margins](https://www.cmegroup.com/education/courses/understanding-the-benefits-of-futures/the-benefits-of-futures-margins): 保证金是应维持的担保余额而非货款；补足规则因制度/经纪商而异. 不给百分比当作当前CL参数.

## Content relations
```json
[
  {
    "from": "zh-m10",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m10",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能识别义务主体、数量、币种、期间与履约条件",
    "reason": "本篇实际需要的能力，非路径相邻推定"
  },
  {
    "from": "zh-m10",
    "relation": "illustrated_by",
    "to": "EXP-MD-M10-CONTRACT",
    "reason": "真实CL单位与教学价格；切换方向、张数及负结算价窗口."
  },
  {
    "from": "zh-m10",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "调用交易后担保与履约层次"
  },
  {
    "from": "m10-purpose",
    "relation": "supported_by",
    "to": "MD-S01",
    "reason": "未来义务与定制/标准化",
    "locator": "slides 9–12",
    "scope": "远期与期货的未来义务、定制与标准化基本结构"
  },
  {
    "from": "m10-market",
    "relation": "supported_by",
    "to": "MD-S01",
    "reason": "集中交易与现金机制",
    "locator": "slides 13–16",
    "scope": "集中交易、结算现金时点与期货机制差异"
  },
  {
    "from": "m10-contract",
    "relation": "supported_by",
    "to": "MD-S02",
    "reason": "支持CL合约的单位、期限与交割条款.",
    "locator": "§§200100–200104，PDF pp1–3",
    "scope": "CL单位、报价、交割品级/地点与生命周期"
  },
  {
    "from": "m10-market",
    "relation": "supported_by",
    "to": "MD-S05-MARGIN",
    "reason": "区分商品货款、担保余额与逐日现金",
    "locator": "正文 The Benefits of Futures Margin / Initial and Maintenance Margin",
    "scope": "保证金不是商品首付款；客户资金与持仓机制"
  },
  {
    "from": "m10-negative",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "核18.27/−37.63/10.01及历史时点",
    "locator": "III Background；printed pp8–9,11价格及事件段",
    "scope": "2020 May CL历史结算与负价格边界"
  },
  {
    "from": "zh-m10",
    "relation": "illustrated_by",
    "to": "case-md-cl-202004",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  },
  {
    "from": "zh-m10",
    "relation": "illustrated_by",
    "to": "case-md-cl-rule-20260921",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  },
  {
    "from": "case-md-cl-rule-20260921",
    "relation": "supported_by",
    "to": "MD-S02",
    "reason": "本例具名版本的规则、披露或公开观察",
    "locator": "§§200100–200109; 6 pages",
    "scope": "每张1,000美制桶、每桶0.01美元一跳；品级、Cushing接入及相对交付程序属于合约. 当前在线规则不作为2020历史规则版."
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 8/17
从真实CL条款分开义务、单位、名义量、损益和今天所需现金.
再把相同终点的价格路径逐日放入现金与保证金账.
Next: [每日结算与期货保证金](https://ou-liu-red-sugar.github.io/zh/notebook/futures-variation-margin/)
