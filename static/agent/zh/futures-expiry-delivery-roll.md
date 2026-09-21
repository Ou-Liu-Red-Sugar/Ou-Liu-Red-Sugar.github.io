# 到期、交割与展期

以当前CL相对规则读交割事件，再按历史参考价格拆旧仓、新仓和换月当日现金。

Entry: zh-m13 | Node: M13 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在带读《到期、交割与展期》（M13，2026-09-21-MD-review-v3）。对象为有微积分/线性代数/基础概率的高年级本科至研究生。
本次任务：用前一结算价判定旧仓当天现金，不把两个月份的报价差当作即时损失。
先确认选择核心或研究分支。必须实际读取required_readings的指定完整单元，核标题、版本、页/节、必要表图；图像未读不得猜。运行日志起始为空，记录本次实际范围和支持的一步，不把编辑端reading_log当成自己已读。选研究分支时对应optional单元转为必读。只能取得目录/摘要/错误页时继续找正式可读入口；仍缺关键原文就说明具体缺口，不凭印象补课。
先让学习者完成一项完整诊断，而非逐个考四则运算。已会内容跳过；在同一原件与同源输入上推进：
让学习者用当前规则画last trading、intent、notice、交付担保、实物交付、货款及退回担保；不给未核未来日历。然后拆旧May累计−1,730与新June累计−4,600。若没有前结算价，旧仓当日现金必须未知。给教学19后才算此前−1,000/当日−730；再加0.02/0.03滑点与每腿5美元，核全期−6,390、当日−790。6,760月差不许再次扣损失。客户/清算会员层以及2020/当前规则保持分开。
核每个金额的主体、单位、时点和身份；事实、由事实推算与教学条件分别说清。读者完成后须能独立解释与迁移，不能只报正确数字。逐题使用正文完整解析反馈，必要时把失败条件放回算法；未建立融资/履约路径不输出已经实现的收益。公共包不假定能访问用户硬盘。
现行Chapter 200 §200107.B要表述为清算会员向买方收取等于完整货值的交割保证金；不把现行规则回填成2020历史规则。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "content_version": "2026-09-21-MD-review-v3",
  "selected_branch": "core",
  "learning_task": "用前一结算价判定旧仓当天现金，不把两个月份的报价差当作即时损失。",
  "required_readings": [
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
        "locator": "§200102.F；§§200105–200109",
        "scope": "到期、通知、交付、担保、货款及替代交付完整条款；必要时补被援引规则",
        "purpose": "按相对事件日画图，不把当前版当2020版"
      },
      "supports": "CL合约单位、价格刻度和相对交割事件。当前在线规则不是2020历史规则版；未复核通则全部依赖，不构成实盘交割操作手册。"
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
        "locator": "III.B–C；printed pp8–9,11",
        "scope": "所用合约事件和May/月差的完整背景/数据段",
        "purpose": "分清历史结算和教学成交"
      },
      "supports": "历史May结算与May−June价差；June由两者相减得到。报告不识别负价唯一根因；未采用April2020保证金。"
    },
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
        "locator": "PDF pp1–3 normal variation完整单元",
        "scope": "成交到结算与前结算到本结算的分段",
        "purpose": "旧仓累计/当日现金以及新仓日内VM不重复"
      },
      "supports": "当日成交与期初头寸的结算现金及正常舍入；不采用无关分数报价例的印刷错误，不提供CL保证金水平。"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MD-review-v3",
    "experiment_ids": [
      "EXP-MD-M13-ROLL"
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
          "text": "交割月前月25日前第三个营业日；若25日非营业日，以其前最近营业日为基准再倒数三个营业日。上市后休业表变更有保留原到期日及前移例外。"
        },
        {
          "id": "intent",
          "title": "L 后第1营业日",
          "locator": "200105.A/B",
          "text": "纽约时间15:00前，持仓清算会员提交接受或交付意向。不要将这一步称作实物已交付。"
        },
        {
          "id": "notice",
          "title": "L 后第2营业日：Notice Day",
          "locator": "200105.E/F",
          "text": "清算所分配通知；收到通知的会员承担相应接受或交付安排，通知不可转让。"
        },
        {
          "id": "margin",
          "title": "L 后第3营业日",
          "locator": "200105.A.2; 200107.B",
          "text": "清算会员须向买方收取等于完整货值的交割保证金；卖方另按交易所规定。另须交付指令及设施接入信息。"
        },
        {
          "id": "physical",
          "title": "交割月首日至末日",
          "locator": "200106",
          "text": "安排实物交付及初步货权转移确认；调度和接入必须可行，不等于“有仓位就有仓储”。"
        },
        {
          "id": "payment",
          "title": "交割次月20日及规则调整",
          "locator": "200107.A/C",
          "text": "货款基于最终结算价与交付量。周六或非周一休业日前移；周日或周一休业日后移。须依实际交易所/纽约银行日历。"
        },
        {
          "id": "complete",
          "title": "完成通知与保证金退回",
          "locator": "200107.B/C",
          "text": "交付与付款完成并通知交易所后，按规则退回所持保证金；数量差异另依规定调整。不是第二次商品收入。"
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
        "url": "/notebook/labs/m-d/static/M13.html",
        "kind": "html"
      }
    ]
  }
}
```

## Supplied entry
用约18分钟，完成两张时间表：一张说明期货交易结束后还剩哪些履约事件；另一张把换月拆成旧仓损益、新仓损益和当日现金。需要[合约月份与交割义务](https://ou-liu-red-sugar.github.io/zh/notebook/forward-futures-contracts/)，并会在用到时调用[逐日结算](https://ou-liu-red-sugar.github.io/zh/notebook/futures-variation-margin/)。

<a id="m13-purpose"></a>
## 一、到期不是一个动作，而是一串状态变化

“我持有五月原油期货”至少留下三个问题：在哪一天以后不能再按通常交易方式处理这张合约？如果届时仍有仓位，谁来通知和安排交付？收到原油、支付货款和退回担保是不是同一时刻？只有把这些事件分开，才能知道一次平仓或换月到底改变了什么。

我们使用2026年9月21日取得的CL Chapter 200读相对事件顺序；2020年的价格例另用当年的CFTC报告。两份材料的时间身份保持分开。当前规则不是我们已取得的2020完整制度快照，也不拿今天的相对规则自动给2020历史账户补一张日历。

把未来交付义务看清，还有一个直接好处：你不会再把“换月”理解为把原合约的到期日改长。实际上是在旧月份做反向交易，再建立另一个月份的头寸。合约身份换了，后续价格路径也换了；旧合约的损益不因此被新合约价差重写。

<a id="m13-calendar"></a>
## 二、沿CL规则读出事件，暂不猜具体日历

令$L$表示按规则识别的最后交易日。下表保留当前规则中承重的相对顺序，时刻采用规则约定的纽约时间。[^MD-S02]

| 事件 | 相对时间及规则定位 | 此时完成什么、还没完成什么 |
|---|---|---|
| 最后交易 | §200102.F：前月25日前第三个营业日；25日非营业日及上市后休业表变化另有条款 | 通常交易停止，不等于货已经交到手 |
| 接受/交付意向 | $L$后第1营业日15:00前，§200105.A/B | 由持仓清算会员提供相应资料 |
| Notice Day | $L$后第2营业日，§200105.E/F | 分配通知；通知不是可自由转卖的普通仓位 |
| 交割担保与指令 | $L$后第3营业日，§200107.B及§200105.A.2 | 清算会员须向买方收取等于完整货值的交割保证金；另有交付指令和接入要求 |
| 实物交付 | 交割月首日至末日，§200106 | 货物、调度和初步货权确认，不与现金付款混为同一动作 |
| 货款与完成通知 | 次月20日及规则休业调整，§200107.A/C | 支付、核对实际数量、通知完成；保证金按规定释放 |

最后交易日规则不能简化成“永远每月22号”。25日若非营业日，要先找到其前的最近营业日，再按条款倒数；上市后假日变化还有保留原到期日及前移例外。货款日也不是一律向后顺延：规则区分周六或非周一休业日，与周日或周一休业日的处理。没有相应交易所和银行日历时，可靠输出是规则和待核日期，而不是编出一个具体未来日。

正常交割以外还有受条件限制的安排，例如规则提及到期后特定窗口的EFRP以及双方按程序同意的替代交付。这里只提醒这些路径存在，不能将其改写为“过了最后交易日仍可随时普通平仓”。进入相应路径前须继续读取被引用规则和服务机构要求。

<a id="m13-collateral"></a>
## 三、完整货值的交割保证金不是第二次买货

假设商品最终货款为80,000美元，交割担保也要求准备相应完整货值。两个数字相等，不表示商品成本变成160,000。一个是为履约提供的担保余额，另一个是支付给卖方的对价；担保按规则释放时，不是再获得一笔商品销售收入。

但“不是双倍成本”也不等于“只要80,000现金就足够完成所有时点”。当前规则把交割保证金与之后的付款、完成通知、保证金退回分开。若担保尚未释放，而付款又需另备资金，就有临时流动性安排问题；是否能抵用、何时释放，要看具体安排，不能从金额相等自行推定。[^MD-S02]

同样，有1,000桶仓位不等于有1,000桶的设施接入。交付通知、调度和合资格设施信息之所以重要，是因为交换的不是无地点无时间的“原油概念”。本节的规则图帮助你识别未完成义务；它不替代实盘交割操作文件。

<a id="m13-roll"></a>
## 四、换月先分成两张合约，再算各自损益

历史输入取2020年4月17日：May结算18.27美元/桶，报告中的May−June价差为−6.76，由此得到June结算25.03。4月20日May为−37.63、价差为−58.06，得到June为20.43。[^MD-S03] 我们现在**假设按这些结算价完成交易**；真实成交、点差、手续费和滑点没有在历史材料里恢复。

教学旧仓是一张May多头，早先以20建立。4月17日以18.27平仓，旧仓累计损益是

$$
1{,}000(18.27-20)=-1{,}730.
$$

同时以25.03建立一张June多头。两个月的报价差乘数量是$1{,}000(25.03-18.27)=6{,}760$，但新仓不是支付25,030美元买下一批油，也不是开仓立刻确认6,760亏损。这个25.03成为新合约随后计算价格变动的起点；建仓保证金、费用与当日VM要另外处理。

到4月20日，June结算20.43，新仓累计价格损益为$1{,}000(20.43-25.03)=-4{,}600$。两段合起来为−6,330美元：

| 对象 | 计算 | 结果，美元 |
|---|---|---:|
| 旧May从建立到平仓 | $(18.27-20)\times1,000$ | −1,730 |
| 两个月报价差 | $(25.03-18.27)\times1,000$ | 6,760；不是即时损失 |
| 新June至下一结算 | $(20.43-25.03)\times1,000$ | −4,600 |
| 两段价格损益 | −1,730−4,600 | **−6,330** |

旧仓与新仓对应不同时间段，后者没有“追溯买入”旧仓之前的价格变化。若把6,760又扣进来，就凭不同合约的价位差另造了一笔并不存在的当日损失。

<div data-experiment-slot="EXP-MD-M13-ROLL"></div>

交互默认保持历史结算价只读。改费用或滑点时，它们明确变成教学成交假设；报价月差仍和实际执行差额分栏。

<a id="m13-daily"></a>
## 五、累计亏损不等于今天还要再付同一笔钱

只知道旧仓以20建立、以18.27平仓，可以算累计−1,730，却还不知道平仓当天的现金。因为此前损失可能已通过逐日结算支付。缺少前一结算价时，交互将“旧仓当日变动现金”留为未知，而不会拿累计损益代替。

为完成这一步，我们额外设一个**纯教学的前一结算价19.00**。于是平仓以前累计VM为$1{,}000(19-20)=-1{,}000$，平仓当日再结$1{,}000(18.27-19)=-730$，合起来才是−1,730。新June若以当天结算价25.03建立，当天VM为零；之后到20.43再产生−4,600。

| 时段 | May现金 | June现金 | 两者累计价格损益 |
|---|---:|---:|---:|
| 平仓日以前，教学前结算19 | −1,000 | — | −1,000 |
| 4月17日假设交易 | −730 | 0 | −1,730 |
| 到4月20日结算 | — | −4,600 | −6,330 |

再增加一个有意义的执行变式：旧仓卖出比18.27少0.02，新仓买入比25.03多0.03。旧卖价18.25，新买价25.06；旧仓累计−1,750，平仓当日−750。新仓在当日结算25.03时已有−30，之后的−4,600仍从25.03算起，新仓累计−4,630。两段合计−6,380，较无滑点少50美元；手续费还应另外扣。

注意，这一次我们既能说明损益来自哪里，也能指出哪一天付出。不能把−4,630作为下一结算日现金，再把建仓日−30另扣一次。

<details>
<summary>选读：连续合约图为什么会跳，后复权又改变了什么？</summary>

直接从May的18.27拼接June的25.03，曲线上会出现6.76的跳跃，但这不是一张合约的同日上涨。若只为观察差额而把旧段整体加6.76，旧入口20变成26.76，旧出口18.27变成25.03，旧段差仍是−1.73；再接June到20.43，整段差为−6.33。这个加法拼接恰能保持本例一张、同乘数、无费用的分段价格差，却没有把26.76变成真实可成交的旧仓价格。

数据构造、真实合约与策略现金账因此必须分开。尤其在价格穿零时，简单百分比或对数收益还会遇到额外定义问题；不能让一条漂亮的连续图替代合约身份。
</details>

<a id="m13-exercises"></a>
## 六、检验你的时间线与两本账

**题一：最小资料缺口。** 只知道20建仓、18.27平仓，问平仓当天现金是多少。

**解析。** 累计价格损益−1,730可算，但当天现金还缺前一结算价、此前持仓变化及执行费用。应回答缺什么，不应把−1,730自动填成当日再次支付。

**题二：前一结算价改为18.50。** 保留无滑点假设。

**解析。** 之前累计$1,000(18.5-20)=-1,500$，当日$1,000(18.27-18.5)=-230$，累计仍−1,730。换一个此前路径，会改变当天现金，却不改变这两个端点之间的累计价格差。

**题三：有滑点再加费用。** 沿0.02/0.03滑点变式，每个换月交易腿另收5美元，一张合约。两段净损益及换月当日现金是多少？

**解析。** 价格损益−6,380，卖旧、买新两腿费用合计10，净−6,390。若前一结算价19，换月当天旧仓−750、新仓−30、费用−10，现金合计−790；后续−4,600及此前−1,000补全全期金额。没有把6,760月差扣作损失。

**题四：三张纸分别代表什么？** 最后交易的成交回报、Notice Day交付通知、货款汇款凭证能否互相替代？

**解析。** 不能。它们分别说明交易、交付安排和支付三个事件；不能从一个成交回报推出油已入库，也不能从收到通知推出款已付清。当前规则限定通知的处理，不应把到期后的通知当普通仓位自由转手。

**题五：历史日期怎么引用？** 能否将这张当前相对事件表直接称为“2020年五月合约实际全部流程”？

**解析。** 不能。2020价格和到期事件用当年的CFTC资料；当前Chapter 200只支持它所显示的现行条款。完整历史流程仍需当年的规则版本、日历和账户/交付记录。

[^MD-S02]: CME/NYMEX，*Chapter 200*，2026-09-21取得的在线版，§200102.F、§§200105–200109。[原文](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf)。相对日程、交付保证金和货款；未复核所有被援引通则，非实盘操作指引。
[^MD-S03]: CFTC staff，*WTI Interim Staff Report*，2020-11-23，印刷pp.8–9、11。[原文](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download)。May结算和月差为历史记录；June为差额推算；20、19及滑点/费用为教学设定。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MD-M13-ROLL",
    "title": "到期、交割与展期：交互实验",
    "anchor": "m13-roll",
    "description": "当前相对交割事件；历史参考下将两合约累计损益和当日VM/费用分开。",
    "inputs": {
      "data_keys": [
        "roll",
        "delivery_events",
        "history"
      ],
      "adjustable": {
        "contracts": [
          1,
          50
        ],
        "old_entry": "tick .01",
        "previous_settlement": "null or explicit teaching tick price",
        "slippage_sell/buy": [
          0,
          10
        ],
        "fee_per_leg": [
          0,
          1000
        ]
      },
      "read_only": [
        "18.27/25.03/20.43 references",
        "current relative events"
      ]
    },
    "algorithm": "oldExit=18.27-sellSlip; newEntry=25.03+buySlip; oldTotal=Q*(oldExit-oldEntry); oldDay=prevKnown?Q*(oldExit-prev):null. newEntryVM=Q*(25.03-newEntry); nextVM=Q*(20.43-25.03). Net=oldTotal+newEntryVM+nextVM-2*n*fee. Quoted month gap=Q*(25.03-18.27) not included in Net.",
    "outputs": {
      "default": {
        "status": "assumed_executions",
        "inputs": {
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
        "quantity": 1000,
        "old_exit": 18.27,
        "new_entry": 25.03,
        "old_total": -1730,
        "quoted_month_gap": 6760,
        "new_principal_purchase_payment": 0,
        "new_quote_scale": 25030,
        "old_vm_before": null,
        "old_close_day_vm": null,
        "new_entry_day_vm": 0,
        "new_next_vm": -4600,
        "new_total": -4600,
        "fees": 0,
        "total_price_pnl": -6330,
        "net_pnl": -6330,
        "roll_day_cash": null,
        "margin_change": null,
        "roll_day_cash_includes_margin": false
      },
      "previous19": {
        "status": "assumed_executions",
        "inputs": {
          "identity": "assumed_executions_with_source_settlement_references",
          "contracts": 1,
          "old_entry": 20,
          "old_reference": 18.27,
          "new_reference": 25.03,
          "next_new_settlement": 20.43,
          "previous_settlement": 19,
          "illustrative_previous_settlement": 19,
          "old_sell_slippage": 0,
          "new_buy_slippage": 0,
          "fee_per_leg_per_contract": 0,
          "settlement_matches_entry_reference": true
        },
        "quantity": 1000,
        "old_exit": 18.27,
        "new_entry": 25.03,
        "old_total": -1730,
        "quoted_month_gap": 6760,
        "new_principal_purchase_payment": 0,
        "new_quote_scale": 25030,
        "old_vm_before": -1000,
        "old_close_day_vm": -730,
        "new_entry_day_vm": 0,
        "new_next_vm": -4600,
        "new_total": -4600,
        "fees": 0,
        "total_price_pnl": -6330,
        "net_pnl": -6330,
        "roll_day_cash": -730,
        "margin_change": null,
        "roll_day_cash_includes_margin": false
      },
      "slippage_and_fees": {
        "status": "assumed_executions",
        "inputs": {
          "identity": "assumed_executions_with_source_settlement_references",
          "contracts": 1,
          "old_entry": 20,
          "old_reference": 18.27,
          "new_reference": 25.03,
          "next_new_settlement": 20.43,
          "previous_settlement": 19,
          "illustrative_previous_settlement": 19,
          "old_sell_slippage": 0.02,
          "new_buy_slippage": 0.03,
          "fee_per_leg_per_contract": 5,
          "settlement_matches_entry_reference": true
        },
        "quantity": 1000,
        "old_exit": 18.25,
        "new_entry": 25.06,
        "old_total": -1750,
        "quoted_month_gap": 6760,
        "new_principal_purchase_payment": 0,
        "new_quote_scale": 25030,
        "old_vm_before": -1000,
        "old_close_day_vm": -750,
        "new_entry_day_vm": -30,
        "new_next_vm": -4600,
        "new_total": -4630,
        "fees": 10,
        "total_price_pnl": -6380,
        "net_pnl": -6390,
        "roll_day_cash": -790,
        "margin_change": null,
        "roll_day_cash_includes_margin": false
      }
    },
    "boundaries": [
      "未知前结算→当日cash=null，不借累计代替",
      "same-day cash不含未取得的margin转移",
      "不能改动source reference as observed",
      "不按当前规则生成2020/未来真实日期"
    ],
    "static_equivalent": "/notebook/labs/m-d/static/M13.html；reader m13-daily全时间表"
  }
]
```

## Sources
- [NYMEX Rulebook Chapter 200: Light Sweet Crude Oil Futures](https://www.cmegroup.com/content/dam/cmegroup/rulebook/NYMEX/2/200.pdf): CL合约单位、价格刻度和相对交割事件。当前在线规则不是2020历史规则版；未复核通则全部依赖，不构成实盘交割操作手册。
- [WTI Interim Staff Report: Trading leading up to, on and around April 20, 2020](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download): 历史May结算与May−June价差；June由两者相减得到。报告不识别负价唯一根因；未采用April2020保证金。
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): 当日成交与期初头寸的结算现金及正常舍入；不采用无关分数报价例的印刷错误，不提供CL保证金水平。

本批读取范围：逐日价格变动、乘数、现金与结算口径。

## Content relations
```json
[
  {
    "from": "zh-m13",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m13",
    "relation": "requires",
    "to": "zh-m10",
    "required_competence": "理解合约月份和终止交易/交付义务",
    "reason": "本篇实际需要的能力，非路径相邻推定"
  },
  {
    "from": "zh-m13",
    "relation": "illustrated_by",
    "to": "EXP-MD-M13-ROLL",
    "reason": "当前相对交割事件；历史参考下将两合约累计损益和当日VM/费用分开。"
  },
  {
    "from": "zh-m13",
    "relation": "uses_method",
    "to": "zh-m11",
    "reason": "调用分期结算避免重复计入现金"
  },
  {
    "from": "m13-calendar",
    "relation": "supported_by",
    "to": "MD-S02",
    "reason": "当前交割事件顺序",
    "locator": "§200102.F；§§200105–200106",
    "scope": "当前最后交易、意向/Notice与实物交割相对事件"
  },
  {
    "from": "m13-collateral",
    "relation": "supported_by",
    "to": "MD-S02",
    "reason": "交割担保与付款分层",
    "locator": "§200107.A–C；§200105.A.2",
    "scope": "交割保证金、货款与完成通知"
  },
  {
    "from": "m13-roll",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "分清历史结算和教学成交",
    "locator": "III.B–C；printed pp8–9,11",
    "scope": "历史May/June结算与月差，用作透明教学成交输入"
  },
  {
    "from": "m13-daily",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "以正常变动现金规则区分已结VM、平仓日现金和新仓日内VM",
    "locator": "PDF pp1–3 Normal Futures Variation",
    "scope": "已结VM与平仓日现金分离"
  },
  {
    "from": "zh-m13",
    "relation": "illustrated_by",
    "to": "case-md-cl-202004",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  },
  {
    "from": "zh-m13",
    "relation": "illustrated_by",
    "to": "case-md-cl-rule-20260921",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  }
]
```

## Related entries
