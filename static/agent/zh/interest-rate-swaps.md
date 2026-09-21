# 互换与风险交换

从AECOM真实互换披露建立两腿教学账，解释精确抵销、错配、价值与抵押的边界.

Entry: zh-m14 | Node: M14 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《互换与风险交换》，面向有充分数学基础的高年级本科生至研究生. 先实际读取随包 required_readings 的指定原文单元；采用选读分支时也读取对应材料，并记录本次版本与范围. 原文不可读时查找机构的等价全文，仍缺关键单元则指出缺口.

让我从AECOM FY2025 Notes 8–9提取本金、固定率、浮动基准、利差与期间，标出教学匹配假设. 先推导400 M完全匹配时的3.033%，再将互换本金降至300 M计算残留浮息. 对不同fixing、计息期间或floor，写出各腿独立变量和所需材料.

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
  "learning_task": "证明3.033%只在明确匹配条件下成立，资料缺失时指出所需独立浮息和日程.",
  "required_readings": [
    {
      "source_id": "MD-S06",
      "title": "AECOM FY2025 Form 10-K: Debt and Derivatives",
      "authors": [
        "AECOM"
      ],
      "version": "FY ended 2025-09-30; filed 2025-11-19",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/868857/000086885725000013/acm-20250930.htm"
      },
      "required_unit": {
        "locator": "Note8 Credit Agreement pp78–79；Note9 Cash Flow Hedges p81、valuation及表p82",
        "scope": "完整Credit Agreement相关贷款单元、完整Cash Flow Hedges以及估值范围段；不要把cap与swap合并数归一项",
        "purpose": "已披露本金/固定率/指数月份与未披露匹配关系分开"
      },
      "supports": "$400m付1.283%收one-month SOFR；Term B利差1.75%另披露. 教学匹配不代表真实指定借款；缺confirmation/CSA；公允价值表并非该swap独有."
    },
    {
      "source_id": "MD-S07",
      "title": "18.642 Lecture 7 Version 2 transcript",
      "authors": [
        "Andrew Gunstensen / MIT OCW"
      ],
      "version": "Fall 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/1KTK56NCy28KS0Ts53h1gOS6KO51jDctE_transcript.pdf"
      },
      "required_unit": {
        "locator": "PDF pp10–14",
        "scope": "从futures现金时点至IRS引入、日程、两腿和par-rate讨论的完整单元，止于下一收益率曲线",
        "purpose": "期间支付、整份互换价值与交易条款不是同一对象"
      },
      "supports": "IRS现金日程、两腿估值与平价利率. 不是AECOM交易确认；不照抄口述中的市场规模或历史起源."
    }
  ],
  "optional_readings": [
    {
      "source_id": "MD-S08",
      "title": "Market turbulence and soaring margins: lessons from two recent episodes — Box A",
      "authors": [
        "Benjamin H Cohen",
        "Kevin Tracol"
      ],
      "version": "BIS Quarterly Review, March 2023",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf"
      },
      "required_unit": {
        "locator": "Box A printed pp5–6，Graph A1/脚注",
        "scope": "两页全文，设置、两类假想IRS、模型比较、五日VM/IM口径和结论",
        "purpose": "用模型比较说明VM/IM与及时现金需求；不复刻数据、不冒充公司CSA"
      },
      "supports": "假想一年期USD付固定与GBP收固定IRS；VM五日累计/IM五日closeout，讨论模型重校准与流动性. 未复现Clarus曲线，不替代AECOM CSA或CL客户账户.",
      "branch": "margin-liquidity",
      "required_if_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MD-review-v3",
    "experiment_ids": [
      "EXP-MD-M14-SWAP"
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
        "url": "/notebook/labs/m-d/static/M14.html",
        "kind": "html"
      }
    ]
  }
}
```

## Supplied entry
<a id="m14-purpose"></a>
## 一、利率互换改变利率暴露的机制

一家公司已有浮动利率借款. 它希望利息更稳定，却未必愿意提前清偿贷款、重新签一份固定利率融资. 它可以另外签一份协议：向对手方支付固定利息，同时收取浮动利息. 若收到的那条浮动腿与贷款要付的浮动部分足够匹配，两者合看，原来的浮动部分就可以抵销.

**利率互换**在这里指按约定期间和基准交换利息现金流的安排. **名义本金**是用于计算利息的参考金额；本例400 M美元互换只交换利息差额，贷款本金仍按贷款合同偿还. 互换可用于管理借款、资产或其他利率敞口. [^MD-S07]

从对手方看，它可能有相反的利率暴露，也可能通过其他交易管理所承接的风险. 双方愿意交换，不需要一方确信另一方将判断错误.

<a id="case-md-aecom-fy2025"></a>
<a id="m14-source"></a>
## 二、AECOM披露与未披露字段

AECOM截至2025年9月30日的年报Note 9披露以下利率互换字段. [^MD-S06]

| 字段 | 披露内容 | 本篇使用方式 |
|---|---|---|
| 名义本金/币种 | 400 M 美元 | 真实输入，算例以此为默认 |
| 公司支付 | 固定1.283% | 不与1.283倍混用 |
| 公司收到 | prevailing one-month SOFR | 保留原描述，不擅改为某种复合OIS定义 |
| 生效/终止 | 2023年2月／2028年3月 | 只按披露的月份使用 |
| 所需但未完整取得的字段 | fixing、付款日、日数惯例、互换floor、具体借款归属、CSA/清算安排 | 不从年报简述补成确认书 |

同一份年报Note 8另披露New Term B按Term SOFR加1.75%计息，SOFR floor为0%，调整项为0. Note 8与Note 9没有把这400 M美元互换逐笔指定为New Term B的对应套期；下面只把两组已披露字段组合成教学匹配例.

若贷款与互换采用不同的重置日、观察窗口或付款日，即使基准都称SOFR，两条浮动现金流也可能不同. 匹配需要逐一核对本金、指数、观察期、计息分数和付款日期. [^MD-S07]

<a id="m14-cash"></a>
## 三、共同期间下的两条腿

本例设贷款和互换本金都为$N=400{,}000{,}000$，固定率$K=1.283\%$、贷款利差$s=1.75\%$. 计息分数取$\alpha=30/360=1/12$；同指数、同次重置、同计息分数、同付款日，双方均履约，无费用及抵押现金，浮动利率$L\geq0$. **30/360与这一整套匹配关系都是教学假设.**

从公司视角分别写三笔金额：

$$
\begin{aligned}
\text{互换固定腿付出}&=NK\alpha,\\
\text{互换浮动腿收到}&=NL\alpha,\\
\text{贷款利息付出}&=N(L+s)\alpha.
\end{aligned}
$$

于是互换净收到为$N(L-K)\alpha$；负数表示公司净付出. 贷款与互换的合并净付出为

$$
N(L+s)\alpha-N(L-K)\alpha=N(K+s)\alpha.
$$

两个浮动项使用相同的本金、指数和计息期间，因此在合并现金流中抵销.

| 教学浮动率$L$ | 固定腿支付 | 浮动腿收到 | 互换净收到 | 贷款利息支付 | 合并净支付 |
|---:|---:|---:|---:|---:|---:|
| 4% | 427,666.67 | 1,333,333.33 | 905,666.67 | 1,916,666.67 | **1,011,000.00** |
| 2% | 427,666.67 | 666,666.67 | 239,000.00 | 1,250,000.00 | **1,011,000.00** |
| 0% | 427,666.67 | 0.00 | −427,666.67 | 583,333.33 | **1,011,000.00** |

单位均为美元. 在共同本金与共同期间下，合并年化率为$K+s=3.033\%$.

4%时互换净收905,666.67，抵减1,916,666.67的贷款利息；0%时互换净付427,666.67，与583,333.33的贷款利息相加. 两种情形的合并净支付相同.

<div data-experiment-slot="EXP-MD-M14-SWAP"></div>

<a id="m14-mismatch"></a>
## 四、数量错配与输入缺失

先处理一个仍可完整计算的变式：贷款本金$N_L=400$ M 美元，互换本金$N_S=300$ M 美元，其余匹配条件相同.

$$
\text{合并净支付}
=\left[N_Ls+N_SK+(N_L-N_S)L\right]\alpha.
$$

残留的100 M 美元继续承担浮动率. $L$从4%升到5%，这一期额外付出

$$
(400{,}000{,}000-300{,}000{,}000)\times0.01\times\frac{30}{360}
=83{,}333.33.
$$

| 互换本金300 M 、贷款400 M | $L=4\%$ | $L=5\%$ |
|---|---:|---:|
| 贷款利息 | 1,916,666.67 | 2,250,000.00 |
| 互换净收到 | 679,250.00 | 929,250.00 |
| 合并净支付 | 1,237,416.67 | 1,320,750.00 |

共同$L$与期间保持不变时，可以计算上述合并金额；残留的100 M美元使其随$L$变化.

另一类问题来自**输入不足**. 若贷款和互换指数定义或fixing不同，需要$L_L$和$L_S$各自的观察；若日期和计息期间不同，还要分别给$\alpha_L,\alpha_S$及各付款日. 缺少这些输入时，合并净支付与固定综合率保持未知.

负利率下，已披露贷款的0% floor使其浮动基准成为$\max(L_L,0)$. 互换应按自身floor条款计算；贷款下限不能决定互换的下限，抵销结果因而需要互换条款这一额外输入.

<a id="m14-value"></a>
## 五、期间支付、合约价值与抵押现金

到这里我们算的是某一期、在给定浮动率下的支付. 整份互换在今天值多少，还要看剩余各期的固定和浮动现金、对应日期与定价输入. AECOM Note 9也说明其利率衍生品估值使用利率曲线等可观察市场输入；表中interest-rate contracts还包括其他合约，不能把合计金额全部归给这400 M 美元互换. [^MD-S06]

用一个紧凑模型看区别：若两腿确实采用共同日程，定价模型给出各期浮息$f_i$、计息分数$\alpha_i$和折现因子$D_i$，付固定一方的简化价值为$N\sum_i D_i\alpha_i(f_i-K)$. 要使新交易两腿现值相抵，固定率须满足$K=\sum_iD_i\alpha_i f_i/\sum_iD_i\alpha_i$. 这叫给定模型下的平价固定率：它刻画新交易在该模型中使两腿现值相抵的条件，不能用今天一期$L$替代所有$f_i$. AECOM互换若缺少所需曲线输入，也就不能由这条公式单独得到当前估值.[^MD-S07]

抵押又是第三个问题. 即使期末利息预算相对稳定，合约在到期前的市值仍可能变动；实际是否追缴、何时追缴、允许什么抵押物，需要CSA或清算规则. 一个期间净收到905,666.67的数字，既不是整份互换的市值，也不是当天应收的保证金.

<details>
<summary>选读：保证金模型与流动性需求</summary>

BIS 2023 Box A比较假想美元付固定与英镑收固定IRS的压力路径，模型中的VM与IM可能先后增加. 图中VM是五日累计、IM使用五日平仓期. [^MD-S08] 读者应先辨认“已经发生的变动现金”与“为潜在未来敞口准备的担保”，再讨论波动重校准的影响.

追加抵押降低了未担保信用敞口，同时要求付出现金的一方及时筹资.
</details>

<a id="m14-exercises"></a>
## 六、抵销条件与综合结果练习

**题一：4%那一行.** 独立算两腿和贷款，解释为何最终是1,011,000而非905,666.67.

**解析.** 固定腿$400\,\mathrm{M}\times1.283\%/12=427,666.67$，浮动腿$400\,\mathrm{M}\times4\%/12=1,333,333.33$，互换净收905,666.67. 贷款付$400\,\mathrm{M}\times5.75\%/12=1,916,666.67$；减去互换净收，净付1,011,000. 利息账没有消除400 M 美元贷款本金.

**题二：本金不足.** 只有300 M 互换，为何不能沿用固定3.033%？

**解析.** 浮动部分只抵销300 M ，仍有100 M 的$(N_L-N_S)L\alpha$. 4%时净付1,237,416.67，5%时1,320,750，相差83,333.33；这已直接证明结果不固定.

**题三：同名SOFR.** 文件都提SOFR，但没有互换的fixing和付款日，能否用贷款当前4%直接填两边？

**解析.** 不能从名称相似推出观察相同. 应列所需的指数定义、重置日、计息期间、付款日，以及各自的利率输入. 缺材料时只能保留已知合同字段，不能报告精确综合率.

**题四：负利率.** 假设某期贷款基准−0.5%，已知贷款floor=0；互换floor未知. 能否直接报告合并仍是3.033%？

**解析.** 贷款浮动基准可以按0处理，但互换收到什么还不知道；它可能仍按负数或有其他约定. 先补互换条款. 仅把界面两边都截到0是在添加未披露条件，不是核实抵销.

**题五：互换本期有现金收益，市值也等于这个数吗？**

**解析.** 不等于. 期间支付只覆盖一期；市值涉及剩余全部现金流与定价输入，抵押要求还涉及实际协议和触发条件. 这三个问题要分别拿材料、分别计算，不能以一张净收付表回答全部.

[^MD-S06]: AECOM，FY2025 Form 10-K，2025-09-30期末、2025-11-19提交；Note 8 Credit Agreement，印刷pp.78–79；Note 9 Cash Flow Hedges与估值，pp.81–82. [原文](https://www.sec.gov/Archives/edgar/data/868857/000086885725000013/acm-20250930.htm).
[^MD-S07]: Andrew Gunstensen，MIT 18.642，Lecture 7 transcript，Fall 2024，PDF pp.10–14，互换引入、日程、两腿及par-rate讨论，止于下一收益率曲线单元. [原文](https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/1KTK56NCy28KS0Ts53h1gOS6KO51jDctE_transcript.pdf).
[^MD-S08]: Cohen、Tracol，BIS Quarterly Review，March 2023，Box A，pp.5–6与Graph A1脚注. [原文](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MD-M14-SWAP",
    "title": "互换与风险交换：交互实验",
    "anchor": "m14-cash",
    "description": "披露合同字段+条件教学贷款，数量错配可算、缺独立利率/日期则暂停合并.",
    "inputs": {
      "data_keys": [
        "swap",
        "frozen.aecom_swap",
        "frozen.swap_cash_example"
      ],
      "adjustable": {
        "loan_notional": [
          1,
          10000000000
        ],
        "swap_notional": [
          0,
          10000000000
        ],
        "L": [
          0,
          1
        ],
        "numerator_days": [
          1,
          366
        ],
        "same_index/fixing/payment/accrual": "booleans"
      },
      "read_only": [
        "K=.01283",
        "loanSpread=.0175",
        "loanFloor=0",
        "denominator360",
        "swapFloor unknown"
      ]
    },
    "algorithm": "All observation/time matching true and L>=0: fixed=Ns*K*alpha; float=Ns*L*alpha; loan=Nl*(max(L,0)+s)*alpha; combined=loan-(float-fixed). Fixed combined rate K+s only if Ns=Nl. Any nonmatching flag => needs_distinct_inputs and combined/rate=null. L<0 => needs_swap_floor; no guessed floored swap.",
    "outputs": {
      "default": {
        "status": "matched_teaching",
        "inputs": {
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
        "alpha": 0.08333333333333333,
        "fixed_cash": 427666.6666666666,
        "floating_cash": 1333333.3333333333,
        "swap_net_receipt": 905666.6666666666,
        "loan_interest": 1916666.6666666665,
        "combined_payment": 1010999.9999999999,
        "fixed_combined_rate": 0.030330000000000003,
        "residual_notional": 0,
        "increment_for_100bp": 0,
        "swap_mtm": null,
        "collateral_call": null
      },
      "zero_rate": {
        "status": "matched_teaching",
        "inputs": {
          "identity": "disclosed_inputs_plus_matched_teaching_loan",
          "loan_notional": 400000000,
          "swap_notional": 400000000,
          "fixed": 0.01283,
          "spread": 0.0175,
          "rate": 0,
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
        "alpha": 0.08333333333333333,
        "fixed_cash": 427666.6666666666,
        "floating_cash": 0,
        "swap_net_receipt": -427666.6666666666,
        "loan_interest": 583333.3333333334,
        "combined_payment": 1011000,
        "fixed_combined_rate": 0.030330000000000003,
        "residual_notional": 0,
        "increment_for_100bp": 0,
        "swap_mtm": null,
        "collateral_call": null
      },
      "partial": {
        "status": "notional_mismatch",
        "inputs": {
          "identity": "disclosed_inputs_plus_matched_teaching_loan",
          "loan_notional": 400000000,
          "swap_notional": 300000000,
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
        "alpha": 0.08333333333333333,
        "fixed_cash": 320750,
        "floating_cash": 1000000,
        "swap_net_receipt": 679250,
        "loan_interest": 1916666.6666666665,
        "combined_payment": 1237416.6666666665,
        "fixed_combined_rate": null,
        "residual_notional": 100000000,
        "increment_for_100bp": 83333.33333333333,
        "swap_mtm": null,
        "collateral_call": null
      }
    },
    "boundaries": [
      "指数/日期/期间错配时不显示默认同L的金额",
      "数量错配fixed_rate=null",
      "无MTM/CSA曲线输入→unknown",
      "不认定AECOM真实loan allocation"
    ],
    "static_equivalent": "/notebook/labs/m-d/static/M14.html；reader三行情景与本金错配表"
  }
]
```

## Sources
- [AECOM FY2025 Form 10-K: Debt and Derivatives](https://www.sec.gov/Archives/edgar/data/868857/000086885725000013/acm-20250930.htm): AECOM披露名义本金400M美元、付固定1.283%并收一个月SOFR的互换；Term B贷款利差1.75%另列. 财报的公允价值表合并包含多项衍生工具，具体借款与互换的对应关系需查交易确认及担保安排.
- [18.642 Lecture 7 Version 2 transcript](https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/1KTK56NCy28KS0Ts53h1gOS6KO51jDctE_transcript.pdf): 利率互换的现金日程、固定与浮动两腿估值及平价互换利率.
- [Market turbulence and soaring margins: lessons from two recent episodes — Box A](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf): 以假想一年期美元付固定与英镑收固定互换，比较VM五日累计与IM五日平仓窗口下的变化，分析模型重校准及流动性需求.

## Content relations
```json
[
  {
    "from": "zh-m14",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m14",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能按主体、期间与条件写出现金义务",
    "reason": "本篇实际需要的能力，非路径相邻推定"
  },
  {
    "from": "zh-m14",
    "relation": "illustrated_by",
    "to": "EXP-MD-M14-SWAP",
    "reason": "披露合同字段+条件教学贷款，数量错配可算、缺独立利率/日期则暂停合并."
  },
  {
    "from": "zh-m14",
    "relation": "uses_method",
    "to": "zh-m06",
    "reason": "调用现金流及资金时间价值"
  },
  {
    "from": "zh-m14",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "调用交易后担保与履约层次"
  },
  {
    "from": "m14-source",
    "relation": "supported_by",
    "to": "MD-S06",
    "reason": "真实披露字段与缺口",
    "locator": "Note8 Credit Agreement pp78–79；Note9 Cash Flow Hedges p81",
    "scope": "AECOM真实贷款利差、swap本金/方向/起止月与未披露字段"
  },
  {
    "from": "m14-cash",
    "relation": "supported_by",
    "to": "MD-S06",
    "reason": "教学现金例的真实输入字段",
    "locator": "Note8/Note9 adopted cash-flow fields",
    "scope": "教学匹配例使用的真实本金、固定率、浮动描述与贷款利差"
  },
  {
    "from": "m14-value",
    "relation": "supported_by",
    "to": "MD-S07",
    "reason": "期间支付、整份互换价值与交易条款不是同一对象",
    "locator": "PDF pp10–14",
    "scope": "互换日程、固定/浮动腿与par-rate/整份价值的区别"
  },
  {
    "from": "m14-value",
    "relation": "supported_by",
    "to": "MD-S08",
    "reason": "用模型比较说明VM/IM与及时现金需求；不复刻数据、不冒充公司CSA",
    "locator": "Box A printed pp5–6，Graph A1/脚注",
    "scope": "VM/IM与及时流动性需求；不替代AECOM CSA"
  },
  {
    "from": "zh-m14",
    "relation": "illustrated_by",
    "to": "case-md-aecom-fy2025",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  },
  {
    "from": "case-md-aecom-fy2025",
    "relation": "supported_by",
    "to": "MD-S06",
    "reason": "本例具名版本的规则、披露或公开观察",
    "locator": "Note8 Credit Agreement pp78–79; Note9 Cash Flow Hedges p81; Note9 valuation and interest-rate-contract aggregate p82",
    "scope": "2025-09-30披露400 M 美元名义本金、付1.283%、收prevailing one-month SOFR. 贷款利差另取Note 8；两者的精确匹配及30/360为教学条件."
  }
]
```

## Related entries
