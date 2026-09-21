# 每日结算与期货保证金

用同终点的两条价格路径重建VM、担保余额、外部现金和追缴缺口.

Entry: zh-m11 | Node: M11 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《每日结算与期货保证金》，面向有充分数学基础的高年级本科生至研究生. 先实际读取随包 required_readings 的指定原文单元；采用选读分支时也读取对应材料，并记录本次版本与范围. 原文不可读时查找机构的等价全文，仍缺关键单元则指出缺口.

让我沿正文A、B路径逐阶段计算担保余额、应补金额、实际转入和外部剩余现金，解释同终点如何产生不同中途资金要求. 再把IM/MM提高到10K/8.5K，并加入转款晚到，定位首次未满足的金额与时点. 用账户总额恒等式检查是否重复计入追加资金.

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
  "learning_task": "逐阶段算实际转入与未满足金额，证明资金不足时不能继续实现后续收益.",
  "required_readings": [
    {
      "source_id": "MD-S05",
      "title": "Money Calculations for CME-cleared Futures and Options",
      "authors": [
        "CME Group"
      ],
      "version": "updated 2015-06-11",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf"
      },
      "required_unit": {
        "locator": "PDF pp1–3 Normal Futures Variation",
        "scope": "日初头寸和当日成交、现金符号与normal variation算法完整单元；无关分数报价错误不采用",
        "purpose": "先按正确时段算VM，再进入资金账户"
      },
      "supports": "当日成交与期初头寸的结算现金及正常舍入；不采用无关分数报价例的印刷错误，不提供CL保证金水平."
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
        "locator": "两组保证金正文",
        "scope": "完整读initial/maintenance及客户资金安排相关内容",
        "purpose": "机制与本篇8,000/6,500教学水平分开"
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
        "locator": "III.B–C；printed pp6–10及p11价格输入",
        "scope": "市场/合约/结算的完整背景单元及采用价格定位",
        "purpose": "真实历史VM与合成IM/MM分开"
      },
      "supports": "历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金."
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
      "EXP-MD-M11-MARGIN"
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
        "url": "/notebook/labs/m-d/static/M11.html",
        "kind": "html"
      }
    ]
  }
}
```

## Supplied entry
<a id="m11-purpose"></a>
## 一、逐日结算的价格现金流

假设一张多头的亏损一直留到到期才处理. 若中间累积了很大亏损，另一方必须相信它到时有能力支付. 逐日结算把已经发生的价格变化分段结清，减少未结金额长期堆积；与此同时，亏损方需要在制度要求的时点准备现金. 后来的价格反弹，不能拿来支付今天已经到期的要求.

CME的正常期货变动现金算法区分当日成交和日初已有头寸：前者从成交价算到当日结算价，后者从前一结算价算到当日结算价. [^MD-S05] 所以“昨日损益”“今天平仓的现金”“整个持有期损益”不是天然相等的三个数.

设一张CL多头一直持有，本例合约单位为$Q=1{,}000$桶，则第$i$次结算变化为$\mathrm{VM}_i=Q(F_i-F_{i-1})$. 只要同一张头寸没有中断，未计费用的累计价格损益满足

$$
\sum_{i=1}^k\mathrm{VM}_i=Q(F_k-F_0).
$$

累计损益只保留起点与终点，资金安排还取决于每笔VM的到期日.

<a id="m11-accounts"></a>
## 二、担保余额、损益与外部现金

初始保证金是建立头寸所需的担保余额，维持保证金是持仓期间触发补款的余额界线；具体金额和补足规则由清算与经纪商安排确定. [^MD-S05-MARGIN]

本篇采用一个教学客户资金账：一张CL多头，最初总现金12,000美元，其中8,000转作保证金，另有4,000随时可用. IM=8,000，MM=6,500；结算变化计入后，只有余额**严格小于**MM才产生补回IM的要求. 没有利息、手续费、提款和盘中追加.

每次收到要求的模型阶段记作$D_i$，资金必须在进入下一价格阶段以前到达. 晚于$D_i$到达的资金不满足该阶段要求.

令$M_{i-1}$为原担保余额，$C_{i-1}$为保证金账户之外的可用现金. 先算

$$
\widetilde M_i=M_{i-1}+\mathrm{VM}_i,
\qquad
A_i=\begin{cases}
\mathrm{IM}_i-\widetilde M_i,&\widetilde M_i<\mathrm{MM}_i,\\
0,&\widetilde M_i\geq\mathrm{MM}_i.
\end{cases}
$$

$A_i$是要求转入的金额. 若资金准时，实际转入$T_i=\min(C_{i-1},A_i)$；否则$T_i=0$. 更新$M_i=\widetilde M_i+T_i$、$C_i=C_{i-1}-T_i$，剩余要求为$A_i-T_i$. 尚有缺口时，该资金路径在此阶段停止；继续持有或平仓需要另行给定资金与成交条件.

转入$T_i$只是把自己的钱从一栏挪到另一栏，$M_i+C_i$不因此增减；本模型的总额只随VM改变. 若把追加资金再记作一次亏损，就会重复计量.

<a id="m11-paths"></a>
## 三、同终点的两条现金路径

路径A的教学结算价依次为75、73.5、74.2、71.8、75.6.

| 阶段 | 结算价，美元/桶 | VM，美元 | 转入前余额 | 要求/实际转入 | 转入后余额 | 外部现金 |
|---|---:|---:|---:|---:|---:|---:|
| 起点 | 75.00 | — | — | 8,000初始划入 | 8,000 | 4,000 |
| 1 | 73.50 | −1,500 | 6,500 | 0 / 0 | 6,500 | 4,000 |
| 2 | 74.20 | +700 | 7,200 | 0 / 0 | 7,200 | 4,000 |
| 3 | 71.80 | −2,400 | 4,800 | 3,200 / 3,200 | 8,000 | 800 |
| 4 | 75.60 | +3,800 | 11,800 | 0 / 0 | 11,800 | 800 |

第一步恰好等于MM，不触发追缴；第三步从4,800补回8,000，需要3,200，而不是只补到6,500. 最后总额为11,800+800=12,600，较初始12,000增加600. 3,200的转入没有成为额外亏损.

再看路径B：75→75.2→75.4→75.5→75.6. 四次VM依次为+200、+200、+100、+100，无追缴；最后担保余额8,600、外部现金4,000，总额同样为12,600.

两条路径的期末价格相同，累计VM都等于$1{,}000(75.6-75)=600$. 但在路径A上，经营者有一段时间只能自由使用800美元；路径B则一直保留4,000. 其他业务若也在这期间需要付款，这个差别就有实际后果.

<div data-experiment-slot="EXP-MD-M11-MARGIN"></div>

若追缴资金晚于$D_i$到达，路径会在该阶段停止：外部现金虽仍属于客户，却尚未成为满足当期要求的担保余额.

<a id="m11-raised"></a>
## 四、保证金要求变化与未补足金额

现在沿路径A，在第2次结算变化计入后，IM改为10,000、MM改为8,500，并从此维持. 其余条件不变.

| 阶段 | VM | 转入前余额 | 当期IM/MM | 要求转入 | 实际转入 | 尚欠 | 转入后余额/外部现金 |
|---|---:|---:|---|---:|---:|---:|---|
| 1 | −1,500 | 6,500 | 8,000 / 6,500 | 0 | 0 | 0 | 6,500 / 4,000 |
| 2，要求改变 | +700 | 7,200 | 10,000 / 8,500 | 2,800 | 2,800 | 0 | 10,000 / 1,200 |
| 3 | −2,400 | 7,600 | 10,000 / 8,500 | 2,400 | 1,200 | **1,200** | 8,800 / 0；停止 |

最后的8,800高于维持线8,500，但追缴在7,600时已触发，目标为补回10,000，因此仍欠1,200. 维持线决定是否触发，初始保证金决定触发后的补足金额.

到停止点，累计VM为−3,200，总余额8,800等于12,000−3,200. 余下1,200缺口未补足，后续75.6的结算结果取决于接下来的融资或处置.

<a id="m11-history"></a>
## 五、历史结算价与保证金研究

CFTC记录的2020年5月CL结算价依次为18.27、−37.63、10.01. 假设一张多头从第一个结算时点持续持有，两个后续VM分别为−55,900和+47,640美元. 这组历史价格足以计算VM；客户在各日能否继续持有，还取决于当时的保证金要求与资金. [^MD-S03]

<details>
<summary>选读：保证金模型与资金占用</summary>

BIS 2023年的Box A用假想利率互换对比2020美元付固定与2022英镑收固定头寸，展示VM支付和IM模型重校准可相继增加流动性需求；图中VM按五日累计，IM以五日平仓期计算. 作者比较预防性压力底线与随近期波动变化的部分：更高底线可缓和压力时的追加幅度，却提高平静时期的资金占用. [^MD-S08]

<a id="m11-exercises"></a>
## 六、账本恒等式与路径可行性练习

**题一：追缴边界.** 路径A第一次结算后6,500，要不要补钱？若结算价改为73.49呢？

**解析.** 前者等于MM，不追缴. 后者VM为−1,510，转入前6,490，严格低于MM；应补$8{,}000-6{,}490=1{,}510$. 不是只补10美元. 触发不等式与补款目标承担不同职责.

**题二：少一点现金.** 原始IM/MM不变，起点总现金改为11,000，路径A能否走完？

**解析.** 初始划入8,000后外部仅3,000. 第三步仍需3,200，最多转入3,000，差200；账户到7,800，外部为0，停在该阶段. 不能因为端点从75到75.6就报告盈利600已实现.

**题三：为何不把3,200追加再从12,600扣掉？**

**解析.** 3,200来自原来4,000的外部现金. 转入后它在担保余额中，已经计入11,800；外部只剩800. 再次扣除相当于把自己两个账户间的移动当成对外费用. 应检查“担保余额+外部现金＝初始资金+累计VM”.

**题四：加保证金情景的8,800是否合格？**

**解析.** 本例在7,600低于8,500时已经产生2,400补足要求. 只交1,200后虽然超过维持线，仍未达到这笔要求的10,000目标. 既有追缴不能自行用重新测试维持线的方法撤销.

**题五：有现金但晚到.** 第三步需3,200且外部有4,000，但转款将在模型截止后到达，可以先计作已付吗？

**解析.** 不可以. 已拥有现金、可在指定时间使用、已履行转款是三个状态. 模型在截止时把实际转入记为0、未满足记为3,200并停止.

[^MD-S05]: CME，*Money Calculations for CME-cleared Futures and Options*，2015-06-11，pp.1–3正常期货变动现金单元. [原文](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf).
[^MD-S05-MARGIN]: CME，*The Benefits of Futures Margins*，保证金与初始/维持保证金单元. [原文](https://www.cmegroup.com/education/courses/understanding-the-benefits-of-futures/the-benefits-of-futures-margins).
[^MD-S03]: CFTC staff，*WTI Interim Staff Report*，2020-11-23，印刷pp.8–9、11. [原文](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download). 结算价为历史观测，持仓与资金账户为条件算例.
[^MD-S08]: Benjamin H Cohen、Kevin Tracol，BIS Quarterly Review，March 2023，Box A，pp.5–6及Graph A1/脚注. [原文](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf). 假想IRS的VM/IM压力路径.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MD-M11-MARGIN",
    "title": "每日结算与期货保证金：交互实验",
    "anchor": "m11-paths",
    "description": "固定教学截止下，先计VM，再比较MM，按IM补款并在不足/晚到停止.",
    "inputs": {
      "data_keys": [
        "margin",
        "contract",
        "history"
      ],
      "adjustable": {
        "path": [
          "A",
          "B"
        ],
        "contracts": [
          1,
          50
        ],
        "starting_cash": [
          0,
          100000000
        ],
        "IM/MM_per_contract": "nonnegative, MM<=IM",
        "raised": "stage2 after mark",
        "transfer_on_time": "boolean"
      },
      "read_only": [
        "price vectors for A/B",
        "raisedIM10000/MM8500",
        "deadline D_i definition"
      ]
    },
    "algorithm": "Before=M+VM; required=(before<MM ? IM-before:0). Paid=onTime?min(free,required):0. Update M/free; if shortfall>0 STOP. Partial M>MM does not cancel prior IM call. Initial funding failure means no position.",
    "outputs": {
      "default": {
        "status": "completed",
        "inputs": {
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
          "transfer_on_time": true,
          "path": "A",
          "raised": false
        },
        "initial_state": {
          "stage": 0,
          "price": 75,
          "balance": 8000,
          "free": 4000,
          "equity": 12000
        },
        "rows": [
          {
            "stage": 1,
            "price": 73.5,
            "vm": -1500,
            "initial": 8000,
            "maintenance": 6500,
            "before": 6500,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 6500,
            "free": 4000,
            "equity": 10500,
            "deadline": "D_1",
            "transfer_on_time": true
          },
          {
            "stage": 2,
            "price": 74.2,
            "vm": 700,
            "initial": 8000,
            "maintenance": 6500,
            "before": 7200,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 7200,
            "free": 4000,
            "equity": 11200,
            "deadline": "D_2",
            "transfer_on_time": true
          },
          {
            "stage": 3,
            "price": 71.8,
            "vm": -2400,
            "initial": 8000,
            "maintenance": 6500,
            "before": 4800,
            "required": 3200,
            "paid": 3200,
            "shortfall": 0,
            "balance": 8000,
            "free": 800,
            "equity": 8800,
            "deadline": "D_3",
            "transfer_on_time": true
          },
          {
            "stage": 4,
            "price": 75.6,
            "vm": 3800,
            "initial": 8000,
            "maintenance": 6500,
            "before": 11800,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 11800,
            "free": 800,
            "equity": 12600,
            "deadline": "D_4",
            "transfer_on_time": true
          }
        ],
        "cumulative_vm": 600,
        "equity_at_stop": 12600,
        "completed_equity": 12600,
        "unmodeled_marks": 0,
        "actual_account": false
      },
      "B": {
        "status": "completed",
        "inputs": {
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
          "transfer_on_time": true,
          "path": "B",
          "raised": false
        },
        "initial_state": {
          "stage": 0,
          "price": 75,
          "balance": 8000,
          "free": 4000,
          "equity": 12000
        },
        "rows": [
          {
            "stage": 1,
            "price": 75.2,
            "vm": 200,
            "initial": 8000,
            "maintenance": 6500,
            "before": 8200,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 8200,
            "free": 4000,
            "equity": 12200,
            "deadline": "D_1",
            "transfer_on_time": true
          },
          {
            "stage": 2,
            "price": 75.4,
            "vm": 200,
            "initial": 8000,
            "maintenance": 6500,
            "before": 8400,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 8400,
            "free": 4000,
            "equity": 12400,
            "deadline": "D_2",
            "transfer_on_time": true
          },
          {
            "stage": 3,
            "price": 75.5,
            "vm": 100,
            "initial": 8000,
            "maintenance": 6500,
            "before": 8500,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 8500,
            "free": 4000,
            "equity": 12500,
            "deadline": "D_3",
            "transfer_on_time": true
          },
          {
            "stage": 4,
            "price": 75.6,
            "vm": 100,
            "initial": 8000,
            "maintenance": 6500,
            "before": 8600,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 8600,
            "free": 4000,
            "equity": 12600,
            "deadline": "D_4",
            "transfer_on_time": true
          }
        ],
        "cumulative_vm": 600,
        "equity_at_stop": 12600,
        "completed_equity": 12600,
        "unmodeled_marks": 0,
        "actual_account": false
      },
      "raised": {
        "status": "stopped_at_unmet_call",
        "inputs": {
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
          "transfer_on_time": true,
          "path": "A",
          "raised": true
        },
        "initial_state": {
          "stage": 0,
          "price": 75,
          "balance": 8000,
          "free": 4000,
          "equity": 12000
        },
        "rows": [
          {
            "stage": 1,
            "price": 73.5,
            "vm": -1500,
            "initial": 8000,
            "maintenance": 6500,
            "before": 6500,
            "required": 0,
            "paid": 0,
            "shortfall": 0,
            "balance": 6500,
            "free": 4000,
            "equity": 10500,
            "deadline": "D_1",
            "transfer_on_time": true
          },
          {
            "stage": 2,
            "price": 74.2,
            "vm": 700,
            "initial": 10000,
            "maintenance": 8500,
            "before": 7200,
            "required": 2800,
            "paid": 2800,
            "shortfall": 0,
            "balance": 10000,
            "free": 1200,
            "equity": 11200,
            "deadline": "D_2",
            "transfer_on_time": true
          },
          {
            "stage": 3,
            "price": 71.8,
            "vm": -2400,
            "initial": 10000,
            "maintenance": 8500,
            "before": 7600,
            "required": 2400,
            "paid": 1200,
            "shortfall": 1200,
            "balance": 8800,
            "free": 0,
            "equity": 8800,
            "deadline": "D_3",
            "transfer_on_time": true
          }
        ],
        "cumulative_vm": -3200,
        "equity_at_stop": 8800,
        "completed_equity": null,
        "unmodeled_marks": 1,
        "actual_account": false
      }
    },
    "boundaries": [
      "初始资金不足：无成交/无路径",
      "迟到/缺款：completed_equity=null, no later VM",
      "转入不重复扣总权益",
      "仅教学客户账，不是SPAN/April2020margin"
    ],
    "static_equivalent": "/notebook/labs/m-d/static/M11.html；reader两张完整表与五题解析"
  }
]
```

## Sources
- [WTI Interim Staff Report: Trading leading up to, on and around April 20, 2020](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download): 历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金.
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): CME逐日结算金额的计算：当日成交头寸按成交价至结算价计量，期初头寸按前结算价至本结算价计量，并按相应合约单位和舍入规则换算现金.
- [The Benefits of Futures Margins](https://www.cmegroup.com/education/courses/understanding-the-benefits-of-futures/the-benefits-of-futures-margins): 保证金是应维持的担保余额而非货款；补足规则因制度/经纪商而异. 不给百分比当作当前CL参数.
- [Market turbulence and soaring margins: lessons from two recent episodes — Box A](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf): 以假想一年期美元付固定与英镑收固定互换，比较VM五日累计与IM五日平仓窗口下的变化，分析模型重校准及流动性需求.

## Content relations
```json
[
  {
    "from": "zh-m11",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m11",
    "relation": "requires",
    "to": "zh-m10",
    "required_competence": "会按方向、张数和合约单位算价格变化损益",
    "reason": "本篇实际需要的能力，非路径相邻推定"
  },
  {
    "from": "zh-m11",
    "relation": "illustrated_by",
    "to": "EXP-MD-M11-MARGIN",
    "reason": "固定教学截止下，先计VM，再比较MM，按IM补款并在不足/晚到停止."
  },
  {
    "from": "zh-m11",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "调用交易后担保与履约层次"
  },
  {
    "from": "m11-purpose",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "先按正确时段算VM，再进入资金账户",
    "locator": "PDF pp1–3 Normal Futures Variation",
    "scope": "日初持仓/当日成交的结算变化现金算法"
  },
  {
    "from": "m11-accounts",
    "relation": "supported_by",
    "to": "MD-S05-MARGIN",
    "reason": "机制与本篇8,000/6,500教学水平分开",
    "locator": "两组保证金正文",
    "scope": "initial/maintenance及客户资金安排机制"
  },
  {
    "from": "m11-history",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "真实历史VM与合成IM/MM分开",
    "locator": "III.B–C；printed pp6–10及p11价格输入",
    "scope": "真实历史价格对应的条件VM"
  },
  {
    "from": "m11-history",
    "relation": "supported_by",
    "to": "MD-S08",
    "reason": "用模型比较说明VM/IM与及时现金需求；不复刻数据、不冒充公司CSA",
    "locator": "Box A printed pp5–6，Graph A1/脚注",
    "scope": "VM/IM与压力期流动性需求的选读研究"
  },
  {
    "from": "zh-m11",
    "relation": "illustrated_by",
    "to": "case-md-cl-202004",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 9/17
重建VM、补款和资金截止，找出不能继续持有的阶段.
现金时点明确后，比较持有实物与未来取得的两条路径.
Next: [基差、持有成本与期限结构](https://ou-liu-red-sugar.github.io/zh/notebook/basis-carry-term-structure/)
