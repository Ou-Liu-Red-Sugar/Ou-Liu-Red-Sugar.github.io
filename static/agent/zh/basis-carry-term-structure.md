# 基差、持有成本与期限结构

以S−F为基差约定，按每笔现金的日期建立持有成本与期货资金时点账本.

Entry: zh-m12 | Node: M12 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在带读《基差、持有成本与期限结构》（M12，2026-09-21-MD-review-v3）. 对象为有微积分/线性代数/基础概率的高年级本科至研究生.
本次任务：重建carry总成本，定位复制受阻的腿，并消除保证金本金/融资的重复扣算.
先确认选择核心或研究分支. 必须实际读取required_readings的指定完整单元，核标题、版本、页/节、必要表图；图像未读不得猜. 运行日志起始为空，记录本次实际范围和支持的一步，不把编辑端reading_log当成自己已读. 选研究分支时对应optional单元转为必读. 只能取得目录/摘要/错误页时继续找正式可读入口；仍缺关键原文就说明具体缺口，不凭印象补课.
先让学习者完成一项完整诊断，而非逐个考四则运算. 已会内容跳过；在同一原件与同源输入上推进：
先写S−F约定及报价对象/时点，询问−1.10日度差为什么不足以宣布套利. 再从day0借款76,000逐笔追到day90成本77,136.9863；把仓储改后付，必须只节约12.3288利息. 随后重建期货三时点账：VM−1,000/+1,500、借款利息8.2192、IM融资98.6301；让学习者分别用全现金账与累计VM简写得756.1644，并查是否重复扣本金. 关闭仓储/融资/交付任一腿时，禁止把条件数字继续叫可取得净额. 便利服务不作为现金分红.
核每个金额的主体、单位、时点和身份；事实、由事实推算与教学条件分别说清. 读者完成后须能独立解释与迁移，不能只报正确数字. 逐题使用正文完整解析反馈，必要时把失败条件放回算法；未建立融资/履约路径不输出已经实现的收益. 公共包不假定能访问用户硬盘.
M12要先区分contango/backwardation的期限坡度与b=S−F现货基差，并正面解释在同一可交付对象、同一地点/时点且复制腿可实施时的收敛约束.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "content_version": "2026-09-21-MD-review-v3",
  "selected_branch": "core",
  "learning_task": "重建carry总成本，定位复制受阻的腿，并消除保证金本金/融资的重复扣算.",
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
        "locator": "slides 17–25",
        "scope": "carry、融资、仓储、现金收益与便利服务的完整单元；slide17的简化条件保留",
        "purpose": "重建现金时点而非机械套等号"
      },
      "supports": "契约比较及cash-and-carry结构. 旧讲义暂忽略远期/期货差异；不采用无条件零现金/零对手方风险的简化."
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
        "locator": "printed pp8–9,11及IV.B pp11–14",
        "scope": "所用价格/月差完整段与仓储讨论整单元",
        "purpose": "两个月份观测和仓储机制，不作单因果归因"
      },
      "supports": "历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金."
    },
    {
      "source_id": "MD-S04",
      "title": "Cushing, OK WTI Spot Price FOB — daily series RWTCD",
      "authors": [
        "U.S. EIA"
      ],
      "version": "2020-04 historical rows; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/dnav/pet/hist/RWTCD.htm"
      },
      "required_unit": {
        "locator": "表头及2020 Apr13–17/Apr20–24两周日度行",
        "scope": "读取完整两周行与日期/单位标签",
        "purpose": "实际取18.31/−36.98/8.91且不混当前行情"
      },
      "supports": "美元/桶的历史日度现货观测；不是与期货同步的可成交报价."
    },
    {
      "source_id": "MD-S04-DEF",
      "title": "Petroleum Spot Prices: Definitions, Sources and Explanatory Notes",
      "authors": [
        "U.S. EIA"
      ],
      "version": "online accessed 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/dnav/pet/TblDefs/pet_pri_spt_tbldef2.asp"
      },
      "required_unit": {
        "locator": "Spot Price；WTI-Cushing；Sources；Explanatory Notes",
        "scope": "整页定义与来源说明",
        "purpose": "辨认Cushing FOB日度收盘，不是同步bid/ask"
      },
      "supports": "现货序列的对象、单位、日度收盘与来源说明."
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MD-review-v3",
    "experiment_ids": [
      "EXP-MD-M12-CARRY"
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
        "url": "/notebook/labs/m-d/static/M12.html",
        "kind": "html"
      }
    ]
  }
}
```

## Supplied entry
用约20分钟，完成一次从报价到现金账的推演：先确认比较的是哪些资产、月份和时点，再算把一批货留到未来究竟花多少钱. 需要[合约月份与报价单位](https://ou-liu-red-sugar.github.io/zh/notebook/forward-futures-contracts/)；资金时间价值与逐日结算在用到时就地回顾.

<a id="case-md-cl-202004"></a>
<a id="m12-basis"></a>
## 一、两个价格能相减，不等于两笔交易能互相替代

**本篇固定基差约定为$b=S-F$：现货价减去指定月份的期货价.** 只写“基差扩大”还不够，必须给出现货地点、品级、期货月份、报价时点以及这个符号约定. 有人使用相反的定义时，变化方向也会相反.

下面是一组真实历史日度观测. 现货来自EIA的Cushing WTI FOB日度序列，期货及月差来自CFTC报告；单位均为美元/桶. June列由May减去报告中的May−June价差得到，并非另一个独立报价来源. [^MD-S03][^MD-S04][^MD-S04-DEF]

| 2020年交易日 | EIA现货$S$ | May结算$F_M$ | May−June | June推算值$F_J$ | $S-F_M$ |
|---|---:|---:|---:|---:|---:|
| 4月17日 | 18.31 | 18.27 | −6.76 | 25.03 | 0.04 |
| 4月20日 | −36.98 | −37.63 | −58.06 | 20.43 | 0.65 |
| 4月21日 | 8.91 | 10.01 | −1.56 | 11.57 | −1.10 |

这个表告诉我们：选定的两个合约月之间价差变化很大，现货与May日度结算之差也并非恒为零. 但EIA日度现货观测和期货结算不是同瞬间的可执行买卖价，更不保证你能按这两个数字完成交收.

若只拿4月21日的−1.10说“现货便宜，所以一定有套利”，就跳过了最重要的一步：你买到的是不是相同可交割油品，能否及时存储、运输并交付，报价是否同时可得，融资和交易费用是多少？基差首先是一个比较量，只有补齐交易路径，才能讨论可实施的约束.

<a id="m12-term"></a>
## 二、先给期限坡度命名，再讨论它为何会受收敛约束

固定同一观察时点，把不同到期月份的期货报价按月份排列，就得到期限结构. 上表只有May、June两个点，是一小段期限结构，不是整条曲线. **在同一观察时点，所选期限段里远月价格高于近月，本文称为正向结构（contango）；远月低于近月，称为反向结构（backwardation）.** 这是期货合约月份之间的坡度命名，不是上一节定义的现货基差 $b=S-F$，更不是“市场已经预测未来现货一定涨或跌”的同义词. 4月17日May为18.27、由月差推得June为25.03，因此这一小段是contango；它本身仍不能说明未来六月现货一定比五月高6.76美元.

我们先用经济关系理解这种差异. 未来用货有两条候选路径：到时买；或者现在买、融资并保存到时. 仓储、损耗、资金占用、交付能力都会影响两条路径是否可比. MIT讲义用这个比较引入持有成本；在把远期和期货暂时近似处理以前，它也明确先忽略二者差别. [^MD-S01]

同一组两路径也给出一个**正面的收敛机制**. 在一个更强、也更干净的复制设定里：比较的是同一可交付对象、同一地点、同一交付时点，现货持有、融资、仓储以及反向交易都可以实际实施. 随着当前时点逼近交付时点，剩余融资期和剩余仓储期缩短，库存服务价值也必须按剩余期间重新衡量；“现在取得并持有到交付”与“通过临近到期合约在该时点取得同一对象”越来越接近两条可替代路径. 若两条可实施路径仍存在超过剩余成本的价格差，交易会把这个差异作为复制约束来利用. 因而在这些条件下，标准模型中的现货与临近到期远期/期货价格会受到收敛约束；用最简的单一到期时点写法，就是当 $t\uparrow T$ 时，$F_{t,T}-S_t$ 应趋向零或趋向仍可解释的剩余交付差异.

这里的条件不能删除. CL有具体的可交割品级、地点和交付程序，而我们采用的EIA日度现货与CFTC期货结算又不是同步可执行报价. 因此“收敛约束为什么存在”与“某一天两列公开数据是否恰好相等”是两个问题；后者必须先对齐对象、时点和可实施交易条件.

因此，我们不先把所有成本塞进一个“利率加仓储费”的简写. 先问每笔钱何时付. 对可融资并可持有的确定货物，若$B(t,T)$表示从$t$到$T$的确定资金增长因子，$c_j$是$t_j$支付的仓储等费用，那么到$T$的现金成本可以写作

$$
C_T=Q S_0 B(0,T)+\sum_j c_j B(t_j,T)+c_T.
$$

这里的求和只包含末期以前的费用，$c_T$单独表示末期费用，不能与求和项重复. 这个表达式的用处是保留时间：起点支付的仓储费会融资，到期才付的不会产生此前的借款利息. 若中间有真正可收到的现金，也要按其日期另列；**库存的便利服务并不因此自动变成一笔现金收入**.

<a id="m12-carry"></a>
## 三、把1,000桶油从今天带到第90天

下面全部是教学条件，不是市场套利报价. 假定合格的1,000桶油现在每桶75美元，仓储费每桶1美元在起点支付，交付手续费每桶0.20美元在第90天支付；起点购油与仓储全部借款，年单利5%，ACT/365，第90天还款. 交付渠道与融资都可取得，对方按约履约，其他摩擦设为零.

我们同时卖出一份第90天交付并收款的教学远期，每桶78美元. 把货物和钱分开列：

| 时点 | 货物/合同 | 现金账，美元 |
|---|---|---:|
| 第0天 | 买入并入库1,000桶；约定未来卖价78 | 借入76,000；支付油款75,000、仓储1,000 |
| 第90天 | 按约交出这批货 | 收取78,000 |
| 第90天 | 清偿借款及交付费用 | 还本息76,936.99；支付200 |

精确到内部计算的终值成本为

$$
\begin{aligned}
C_{90}
&=1{,}000(75+1)\left(1+0.05\frac{90}{365}\right)+1{,}000(0.20)\\
&=77{,}136.9863.
\end{aligned}
$$

每桶成本约77.13699美元，78,000远期收入减去成本，净额约**863.01美元**. 这是所有设定腿都能完成时的账本结果；并不是从一条报价就已经获得的利润.

现在只把仓储付款改到第90天，价格和总仓储费不变. 起点只借75,000，最终另外付1,000仓储和200交付费：

$$
C_{90}^{\text{后付仓储}}=75{,}000\left(1+0.05\frac{90}{365}\right)+1{,}000+200
=77{,}124.6575.
$$

成本减少12.3288美元，正好是那1,000美元仓储款90天的融资利息. 相同“仓储费1美元/桶”，支付时点不同，不能套同一总成本.

<div data-experiment-slot="EXP-MD-M12-CARRY"></div>

交互默认展示这两种付款时点. 每次改变费用，先在时间轴上找对应现金，再检查结果；不要只盯最后的差额数字.

<a id="m12-constraints"></a>
## 四、复制哪一条腿做不到，结论就在哪里改变

若所有腿都能锁定并履行，远期卖价高于上述可交付总成本，会给“买现货、持有、卖远期”的方向提供一个条件现金差额. 由此讨论价格约束时，依赖的是同一批货可以沿两条路径到达相同终点，而不是依赖我们预测油价会涨.

但这个逻辑不是对任何商品、任何参与者都成立的双向等式. 没有可用仓储，**持有腿**无法建立；借不到现金，**融资腿**受阻；油品或接入不合格，**交付腿**无法用于抵销远期义务. 此时即使算术差额仍为863.01，也不能继续标成可取得的收益. 交互关掉任一可用条件后，会保留说明并撤下可执行净额.

反方向也不能照搬：若远期较便宜，要现在卖出、未来补回，可能需要借到可交付的现货. 借货困难、已经承诺的库存用途及业务连续性，都可能阻碍这条路径. 即使某企业已经有油，把库存拿去卖掉也可能损失保障生产的服务.

这正是“便利收益”要表达的经济内容之一：库存能让经营者应对急需，而不仅仅等待未来变卖. 它可以进入持有与不持有的价值比较，却不是货币红利，不能在我们的美元账上凭空填“收到便利收益200美元”. CFTC对2020年窗口的讨论也把仓储与实物物流约束列为背景；它不提供一条万能公式，把全部价格变化精确分解给这些原因. [^MD-S03]

<a id="m12-timing"></a>
## 五、换成逐次结算后，别把融资成本算两遍

保留上面的现货、仓储和90天融资，只把卖出工具换成一个**离散教学期货账户**. 起点78，第30天79，第90天77.5；仅这三个价格阶段发生结算. 本例另假定第90天按77.5出售实物并收款，保证金8,000全额借入、担保余额期间不获利息，第90天释放并归还. 这不是CL真实交割付款日程.

空头的两次VM是−1,000、+1,500. 不计资金时间，$77{,}500-1{,}000+1{,}500=78{,}000$，恰好等于之前远期的收款. 但第30天流出的1,000需借款60天，利息为8.2192；8,000保证金需融资90天，利息为98.6301. 原油与仓储的融资已经包含在77,136.9863中，不能再扣一次.

完整的末期现金重建可以这样看：

| 第90天发生的项目 | 收到 / 支付，美元 |
|---|---:|
| 出售实物 | +77,500 |
| 第二次VM | +1,500 |
| 退回教学保证金 | +8,000 |
| 归还购油及仓储本息 | −76,936.9863 |
| 交付费用 | −200 |
| 归还第30天VM借款本息 | −1,008.2192 |
| 归还保证金借款本息 | −8,098.6301 |
| **净额** | **756.1644** |

第30天的借入1,000和付出1,000彼此抵销；第0天各借款也与购油、仓储和保证金划入相配. 若改用“实物收入+累计VM”的简写，已经包括−1,000本金，末期只额外扣这笔借款的8.2192利息，不可又扣本金：

$$
77{,}500+(-1{,}000+1{,}500)-77{,}136.9863-8.2192-98.6301=756.1644.
$$

保证金本金的划入、退回与借款归还应成对出现，只有资金成本留在净额里. 这个例子说明**同样未折现累计价格结果，可以有不同资金成本**；它不是远期与期货公允价格恒相等或恒不等的完整定理. 我们给了融资规则与特定离散路径，才得到这个净额.

<a id="m12-exercises"></a>
## 六、先检查路径，再解释价格

**题一：仓储付款推迟.** 为什么净额从863.01增加到875.34，而不是增加1,000？

**解析.** 仓储总价仍要付，只是免去它起点支付所需的90天融资. 节约$1{,}000\times0.05\times90/365=12.3288$，新净额$78{,}000-77{,}124.6575=875.3425$.

**题二：无法存储.** 报价78和算出的每桶成本77.13699都没变，能否继续称有863.01套利？

**解析.** 不能. 这个成本以取得90天存储服务为前提；关闭仓储条件后，无法建立与远期交付相匹配的现货腿. 算术条件值不等于能执行的交易. 若想恢复结论，须有替代仓储或其他真实交付路径及其价格.

**题三：期货中段上涨更多.** 只把第30天结算改为82，其他默认输入不变，空头VM和终值净额如何变化？

**解析.** VM成为−4,000和+4,500，累计仍+500；多融资的中间流出利息为$4{,}000\times0.05\times60/365=32.8767$. 净额为$863.0137-32.8767-98.6301=731.5068$美元. 终点相同并未保证资金成本相同.

**题四：先说明收敛机制，再看4月21日的−1.10.** 在同一可交付对象、同一地点、同一交付时点且两条复制路径都可实施的标准设定里，为什么临近交割时现货和期货会受到收敛约束？那么本例4月21日的基差−1.10能否证明“不收敛”？

**解析.** 随着剩余持有期缩短，剩余融资、仓储和库存服务都只对应越来越短的期间；如果现货持有到交割与临近到期合约最终取得的是同一对象，而且正反两条交易路径都能做，持续存在、超过这些剩余差异的价差会被复制交易约束，所以价格应趋同. 可是本例的−1.10混合了EIA日度现货观测和CFTC期货结算，并没有同步bid/ask，也没有把交付期间、可交割条件和实际可实施交易完全对齐. 因此它可以提示我们继续查对象和时点，却不能单独成为无条件套利或收敛机制失效的证明.

**题五：谁把本金扣重了？** 有人从“实物收入+累计VM−持有成本”后再扣1,008.2192和8,098.6301，但没有加入保证金退回. 他漏了什么？

**解析.** 累计VM已含第30天的−1,000，再扣该借款本金重复；保证金8,000最终退回又归还借款，不能只留下还款一边. 按上述简写只增加8.2192与98.6301两项融资成本，或从头列全每个时点的借入、支出、退回和还本付息.

[^MD-S01]: Andrew W. Lo，MIT 15.401，*Forwards and Futures*，slides 17–25. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf). 定位：slides 17–25，两条持有路径与成本结构.
[^MD-S03]: CFTC staff，*WTI Interim Staff Report*，2020-11-23.[原文](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download). 定位：印刷pp.8–9、11–14，May价格/月差及仓储背景；June为本文推算列.
[^MD-S04]: EIA，RWTCD.[原文](https://www.eia.gov/dnav/pet/hist/RWTCD.htm). 定位：2020年Apr13–17、Apr20–24两周日度行.
[^MD-S04-DEF]: EIA，*Definitions, Sources and Explanatory Notes*.[原文](https://www.eia.gov/dnav/pet/TblDefs/pet_pri_spt_tbldef2.asp). 定位：Spot Price、WTI-Cushing、来源及说明；日度现货观测与期货同步可成交价是不同对象.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MD-M12-CARRY",
    "title": "基差、持有成本与期限结构：交互实验",
    "anchor": "m12-carry",
    "description": "按支付日期计算carry，并核中段VM与保证金融資只调整一次.",
    "inputs": {
      "data_keys": [
        "carry",
        "history"
      ],
      "adjustable": {
        "spot": [
          0,
          1000
        ],
        "storage/handling": [
          0,
          100
        ],
        "rate": [
          0,
          1
        ],
        "days": [
          31,
          3650
        ],
        "storage_timing": [
          "upfront",
          "end"
        ],
        "forward/mid/end": [
          0,
          1000
        ],
        "initial_margin": [
          0,
          10000000
        ],
        "availability": "storage/funding/deliverable booleans"
      },
      "read_only": [
        "Q=1000",
        "ACT/365",
        "mid_day=30",
        "positive cash and margin interest=0"
      ]
    },
    "algorithm": "up=Q*(spot+upfront_storage); endcost=up*(1+r*T/365)+lateStorage+handling. Short VM1=Q*(F0-Fmid), VM2=Q*(Fmid-Fend). Finance max(−VM1,0) for T−30 and IM for T at r; principal funding/return cancels. Net=Q*Fend+VM1+VM2-endcost-VMinterest-IMinterest. Positive intermediate cash held idle.",
    "outputs": {
      "default": {
        "status": "conditional_funded_ledger",
        "inputs": {
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
        "upfront": 76000,
        "repayment": 76936.98630136986,
        "late_storage": 0,
        "handling": 200,
        "all_in": 77136.98630136986,
        "per_unit": 77.13698630136986,
        "forward_receipt": 78000,
        "forward_net": 863.0136986301368,
        "vm": [
          -1000,
          1500
        ],
        "vm_funding": 8.219178082191782,
        "im_funding": 98.63013698630137,
        "futures_invoice": 77500,
        "futures_net": 756.1643835616436,
        "final_rows": [
          [
            "实物出售",
            77500
          ],
          [
            "末次VM",
            1500
          ],
          [
            "中段正VM留存释放",
            0
          ],
          [
            "保证金本金退回",
            8000
          ],
          [
            "购油/前付仓储本息",
            -76936.98630136986
          ],
          [
            "后付仓储",
            0
          ],
          [
            "交付费用",
            -200
          ],
          [
            "中段VM借款本息",
            -1008.2191780821918
          ],
          [
            "保证金借款本息",
            -8098.630136986301
          ]
        ],
        "final_cash_sum": 756.1643835616433,
        "historical": [
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
      "late_storage": {
        "status": "conditional_funded_ledger",
        "inputs": {
          "identity": "teaching_funded_deliverable_lot",
          "quantity": 1000,
          "spot": 75,
          "storage": 1,
          "storage_timing": "end",
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
        "upfront": 75000,
        "repayment": 75924.65753424658,
        "late_storage": 1000,
        "handling": 200,
        "all_in": 77124.65753424658,
        "per_unit": 77.12465753424658,
        "forward_receipt": 78000,
        "forward_net": 875.3424657534197,
        "vm": [
          -1000,
          1500
        ],
        "vm_funding": 8.219178082191782,
        "im_funding": 98.63013698630137,
        "futures_invoice": 77500,
        "futures_net": 768.4931506849265,
        "final_rows": [
          [
            "实物出售",
            77500
          ],
          [
            "末次VM",
            1500
          ],
          [
            "中段正VM留存释放",
            0
          ],
          [
            "保证金本金退回",
            8000
          ],
          [
            "购油/前付仓储本息",
            -75924.65753424658
          ],
          [
            "后付仓储",
            -1000
          ],
          [
            "交付费用",
            -200
          ],
          [
            "中段VM借款本息",
            -1008.2191780821918
          ],
          [
            "保证金借款本息",
            -8098.630136986301
          ]
        ],
        "final_cash_sum": 768.4931506849261,
        "historical": [
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
      }
    },
    "boundaries": [
      "任一复制腿不可用则forward_net/futures_net=null",
      "convenience is not cash",
      "negative spot/funding regimes not modeled",
      "此三时点账非实际CL交割日历"
    ],
    "static_equivalent": "/notebook/labs/m-d/static/M12.html；reader末期全账与累计VM简写"
  }
]
```

## Sources
- [Finance Theory I, Lectures 8–9: Forwards and Futures](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/a66f697aaeb23b8cfd2bda020172feb5_MIT15_401F08_lec08.pdf): 契约比较及cash-and-carry结构. 旧讲义暂忽略远期/期货差异；不采用无条件零现金/零对手方风险的简化.

本批读取范围：远期/期货与融资carry概念.
- [WTI Interim Staff Report: Trading leading up to, on and around April 20, 2020](https://www.cftc.gov/media/5296/InterimStaffReportNYMEX_WTICrudeOil/download): 历史May结算与May−June价差；June由两者相减得到. 报告不识别负价唯一根因；未采用April2020保证金.
- [Cushing, OK WTI Spot Price FOB — daily series RWTCD](https://www.eia.gov/dnav/pet/hist/RWTCD.htm): 美元/桶的历史日度现货观测；不是与期货同步的可成交报价.
- [Petroleum Spot Prices: Definitions, Sources and Explanatory Notes](https://www.eia.gov/dnav/pet/TblDefs/pet_pri_spt_tbldef2.asp): 现货序列的对象、单位、日度收盘与来源说明.

## Content relations
```json
[
  {
    "from": "zh-m12",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m12",
    "relation": "requires",
    "to": "zh-m10",
    "required_competence": "能识别合约月、可交付对象和报价单位",
    "reason": "本篇实际需要的能力，非路径相邻推定"
  },
  {
    "from": "zh-m12",
    "relation": "illustrated_by",
    "to": "EXP-MD-M12-CARRY",
    "reason": "按支付日期计算carry，并核中段VM与保证金融資只调整一次."
  },
  {
    "from": "zh-m12",
    "relation": "uses_method",
    "to": "zh-m06",
    "reason": "调用现金流及资金时间价值"
  },
  {
    "from": "zh-m12",
    "relation": "uses_method",
    "to": "zh-m11",
    "reason": "调用分期结算避免重复计入现金"
  },
  {
    "from": "m12-term",
    "relation": "supported_by",
    "to": "MD-S01",
    "reason": "重建现金时点而非机械套等号",
    "locator": "slides 17–25",
    "scope": "持有成本两路径、期限坡度与条件收敛机制"
  },
  {
    "from": "m12-basis",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "历史月差/期限段",
    "locator": "printed pp8–9,11",
    "scope": "May/June历史月差与期限段"
  },
  {
    "from": "m12-constraints",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "仓储与实物物流约束背景",
    "locator": "IV.B printed pp11–14",
    "scope": "仓储与实物物流约束背景"
  },
  {
    "from": "m12-basis",
    "relation": "supported_by",
    "to": "MD-S04",
    "reason": "实际取18.31/−36.98/8.91且不混当前行情",
    "locator": "表头及2020 Apr13–17/Apr20–24两周日度行",
    "scope": "18.31/−36.98/8.91日度现货观测"
  },
  {
    "from": "m12-basis",
    "relation": "supported_by",
    "to": "MD-S04-DEF",
    "reason": "辨认Cushing FOB日度收盘，不是同步bid/ask",
    "locator": "Spot Price；WTI-Cushing；Sources；Explanatory Notes",
    "scope": "Cushing FOB日度现货口径，不是同步bid/ask"
  },
  {
    "from": "zh-m12",
    "relation": "illustrated_by",
    "to": "case-md-cl-202004",
    "reason": "固定时点原件案例；与教学持仓/规则版本分别记录"
  },
  {
    "from": "case-md-cl-202004",
    "relation": "supported_by",
    "to": "MD-S03",
    "reason": "本例具名版本的规则、披露或公开观察",
    "locator": "printed pp1–14 / PDF pp3–16; prices: printed pp8–9,11",
    "scope": "4月17、20、21日：May结算来自CFTC，June由May及月差推算；EIA日度现货为独立口径，非同步可成交报价. 持仓、保证金和成交另为教学条件."
  },
  {
    "from": "case-md-cl-202004",
    "relation": "supported_by",
    "to": "MD-S04",
    "reason": "本例具名版本的规则、披露或公开观察",
    "locator": "table header; weeks Apr13–17 and Apr20–24, 2020",
    "scope": "4月17、20、21日：May结算来自CFTC，June由May及月差推算；EIA日度现货为独立口径，非同步可成交报价. 持仓、保证金和成交另为教学条件."
  },
  {
    "from": "case-md-cl-202004",
    "relation": "supported_by",
    "to": "MD-S04-DEF",
    "reason": "本例具名版本的规则、披露或公开观察",
    "locator": "Spot Price; WTI-Cushing; Sources; Explanatory Notes",
    "scope": "4月17、20、21日：May结算来自CFTC，June由May及月差推算；EIA日度现货为独立口径，非同步可成交报价. 持仓、保证金和成交另为教学条件."
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 10/17
区分基差和期限坡度，沿有条件的复制路径解释收敛并算持有成本.
再去掉到期日，看看资金费、币种与抵押安排怎样约束永续合约.
Next: [永续合约：没有到期日，价格为什么还会受到约束](https://ou-liu-red-sugar.github.io/zh/notebook/perpetual-futures-funding-anchor/)
