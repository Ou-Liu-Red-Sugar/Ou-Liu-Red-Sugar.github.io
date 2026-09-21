# 日历价差：期限结构与现金路径

在近月到期盘点远腿、现金与股票，区分平仓、续持和两期限波动率变化.

Entry: zh-p19 | Node: P19 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 开始前实际读取 agent_packet.required_readings 指定原文完整单元，所选可选分支再读相应 optional_readings，记录题名、版本、定位和支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 在近端到期估远call剩余60天价值，比较SPXW近端7,000、远端4,000时关闭或续持. 换算每点100美元和50倍点数，保留每张0.65费用. 美式版本另列空股、远call及现金，用期限和资金条件迁移. 使用PF-GRID-01固定教学网格及对应合约条件，先用完整任务诊断，再让读者解释、推导和计算；已掌握步骤直接跳过. 反馈核对各腿、现金时点及剩余持仓，用迁移题检验. runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p19",
  "selected_branch": "core",
  "learning_task": "在近端到期估远call剩余60天价值，比较SPXW近端7,000、远端4,000时关闭或续持. 换算每点100美元和50倍点数，保留每张0.65费用. 美式版本另列空股、远call及现金，用期限和资金条件迁移.",
  "required_readings": [
    {
      "source_id": "PFH-CALENDAR",
      "title": "Long Call Calendar Spread",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/long-call-calendar-spread-call-horizontal",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "两期限、远腿剩余价值、独立IV、近腿义务；损失界必须带关闭/续持条件."
      },
      "supports": "两期限、远腿剩余价值、独立IV、近腿义务；损失界必须带关闭/续持条件.",
      "editorial_correction": "两期限IV分别控制；近端关闭与任意续持不同，初始debit不是任意残余路径损失界.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-MIT-BSM",
      "title": "15.450 Stochastic Calculus and Option Pricing",
      "authors": [
        "Leonid Kogan / MIT OCW"
      ],
      "version": "Fall 2010",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Slides 16–21完整BSM建模与公式单元",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率."
      },
      "supports": "无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-OCC",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
      ],
      "version": "June 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
      },
      "supports": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-T1",
      "title": "The Impact of T+1 on Options",
      "authors": [
        "Options Industry Council"
      ],
      "version": "July 2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/news/understanding-t-1-conversion",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "全文：Option Trade Settlement及exercise settlement",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表."
      },
      "supports": "仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SPX",
      "title": "S&P 500 Index Options Fact Sheet",
      "authors": [
        "Cboe Global Markets"
      ],
      "version": "©2026；WF-451400-KC",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "PDF pp1–2，尤其p2合约表",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价."
      },
      "supports": "SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "shared_experiment_id": "EXP-OPTIONS-01",
    "frozen_chain": {
      "schema": "p-fgh-teaching-inputs-frozen-v2",
      "selected_chain_id": "PF-GRID-01",
      "frozen_on": "2026-09-21",
      "decision": "adopt_support_grid_as_common_baseline_with_author_plan_structure_retained",
      "identity": "Synthetic unadjusted 100-unit equity/ETF option classroom chain. Contract/lifecycle rules are supported by OCC/OIC/Cboe originals; prices, IV, spreads and fees are teaching inputs, not observed quotes or executions.",
      "real_terms": {
        "physical": {
          "unit": 100,
          "currency": "USD",
          "exercise_style": "American",
          "settlement": "physical; exercised standard equity/ETF option stock delivery follows current T+1 rules",
          "sources": [
            "MEFG-ODD",
            "MEFG-OCC-EQUITY",
            "MEFG-OCC-ETF",
            "MEFG-OIC-T1"
          ]
        },
        "cash_index_branch": {
          "product": "SPXW",
          "unit": 100,
          "exercise_style": "European",
          "settlement": "PM cash settlement; cash delivered business day following expiration",
          "source": "MEFG-SPX",
          "use": "lifecycle contrast in P17/P19; no SPXW market quote is asserted"
        }
      },
      "clock": {
        "kind": "relative teaching clock, not a listing calendar",
        "trade": "D0",
        "premium_cash": "D1",
        "near_days": 30,
        "near_fixing": "D30",
        "near_exercise_cash": "D31",
        "far_days": 90,
        "far_fixing": "D90",
        "far_exercise_cash": "D91"
      },
      "model": {
        "spot": 100.0,
        "rate": 0.0,
        "dividend_yield": 0.0,
        "volatility": 0.3,
        "strikes": [
          90,
          95,
          100,
          105,
          110
        ],
        "tenors_days": [
          30,
          90
        ],
        "pricing": "Black-Scholes-Merton teaching marks; zero rate/no distributions make European and non-dividend American vanilla values coincide in this baseline only",
        "round_to_cents": true,
        "option_half_spread": 0.02,
        "stock_half_spread": 0.02,
        "fee_per_contract_per_transaction": 0.65,
        "fee_identity": "teaching parameter, not broker tariff",
        "fill_assumption": "buy at ask / sell at bid; simultaneous one-contract fills and displayed size are teaching assumptions",
        "baseline_wealth": 12000.0,
        "baseline_shares": 100,
        "baseline_cash": 2000.0
      },
      "terminal_scenarios": [
        0,
        70,
        90,
        95,
        100,
        105,
        110,
        130
      ],
      "quote_chain": [
        {
          "kind": "call",
          "strike": 100,
          "days": 30,
          "raw_model": 3.4301386438779957,
          "mid": 3.43,
          "bid": 3.41,
          "ask": 3.45
        },
        {
          "kind": "call",
          "strike": 100,
          "days": 90,
          "raw_model": 5.93751497363823,
          "mid": 5.94,
          "bid": 5.92,
          "ask": 5.96
        }
      ],
      "strategy_results": {},
      "calendar": {
        "strike": 100,
        "short_days": 30,
        "long_days": 90,
        "near_expiry_spots": [
          80,
          100,
          140
        ],
        "remaining_vols": [
          0.15,
          0.3,
          0.45
        ],
        "later_spot_for_path_comparison": 80,
        "day_zero_vol_shocks": [
          [
            0.3,
            0.3
          ],
          [
            0.4,
            0.4
          ],
          [
            0.4,
            0.3
          ],
          [
            0.3,
            0.2
          ]
        ]
      },
      "calendar_results": {
        "mid_debit": 251.00000000000003,
        "execution_debit": 256.29999999999995,
        "near_expiry": [
          {
            "near_spot": 80,
            "far_iv": 0.15,
            "far_call_model": 0.00016017558401304477,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 11749.0160175584,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 80,
            "far_iv": 0.3,
            "far_call_model": 0.14209471540199692,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 11763.2094715402,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 80,
            "far_iv": 0.45,
            "far_call_model": 0.8706214727945341,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 11836.062147279454,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 100,
            "far_iv": 0.15,
            "far_call_model": 2.4258480440155097,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 11991.584804401551,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 100,
            "far_iv": 0.3,
            "far_call_model": 4.849454218755341,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 12233.945421875535,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 100,
            "far_iv": 0.45,
            "far_call_model": 7.268582868559953,
            "short_cash_payout": 0,
            "wealth_if_close_far_at_model": 12475.858286855995,
            "wealth_if_continue_far_to_day90_spot80": 11749.0
          },
          {
            "near_spot": 140,
            "far_iv": 0.15,
            "far_call_model": 40.00000001934846,
            "short_cash_payout": 4000,
            "wealth_if_close_far_at_model": 11749.000001934846,
            "wealth_if_continue_far_to_day90_spot80": 7749.0
          },
          {
            "near_spot": 140,
            "far_iv": 0.3,
            "far_call_model": 40.01224024561664,
            "short_cash_payout": 4000,
            "wealth_if_close_far_at_model": 11750.224024561663,
            "wealth_if_continue_far_to_day90_spot80": 7749.0
          },
          {
            "near_spot": 140,
            "far_iv": 0.45,
            "far_call_model": 40.27463565439032,
            "short_cash_payout": 4000,
            "wealth_if_close_far_at_model": 11776.463565439033,
            "wealth_if_continue_far_to_day90_spot80": 7749.0
          }
        ],
        "day_zero_vol_shocks": [
          {
            "near_iv": 0.3,
            "far_iv": 0.3,
            "calendar_model_value": 250.7376329760234,
            "pnl_vs_mid_debit": -0.2623670239766227
          },
          {
            "near_iv": 0.4,
            "far_iv": 0.4,
            "calendar_model_value": 333.85787066940935,
            "pnl_vs_mid_debit": 82.85787066940932
          },
          {
            "near_iv": 0.4,
            "far_iv": 0.3,
            "calendar_model_value": 136.50926664026102,
            "pnl_vs_mid_debit": -114.49073335973901
          },
          {
            "near_iv": 0.3,
            "far_iv": 0.2,
            "calendar_model_value": 53.023750311047735,
            "pnl_vs_mid_debit": -197.9762496889523
          }
        ]
      },
      "source_corrections": {
        "OIC_calendar_theta_vega_and_max_loss": {
          "status": "qualify_by_state_and_decision_horizon",
          "reason": "near/far IV move separately; after the near leg settles, continuing the far leg is a new residual position and losses need not be capped by original debit"
        },
        "OIC_legacy_assignment_notice_wording": {
          "status": "do_not_adopt_exact_Monday_notice_wording_as_current_lifecycle_rule",
          "use": "use current OCC ODD/T+1 contract mechanics; broker/customer exercise cutoffs remain broker-specific"
        },
        "CBOE_margin_cash_spread": {
          "status": "apply_narrowly",
          "use": "same-expiry European cash-settled spread cash-account treatment only; do not port to American physical mismatched legs or calendars"
        }
      }
    },
    "default_results": {
      "near_grid": [
        {
          "spot": 80,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.15,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 0.00016017558402747767,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 0,
          "far_ask": 0.02,
          "marked_wealth": 11749.016017558402,
          "marked_pnl": -250.98398244159762,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 0.016017558402747767,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 11749.016017558402,
          "closed_pnl": -250.98398244159762,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 80,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 0.14209471540200802,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 0.12000000000000001,
          "far_ask": 0.16,
          "marked_wealth": 11763.2094715402,
          "marked_pnl": -236.79052845980004,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 14.209471540200802,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 11763.2094715402,
          "closed_pnl": -236.79052845980004,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 80,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.45,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 0.8706214727945305,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 0.85,
          "far_ask": 0.89,
          "marked_wealth": 11836.062147279454,
          "marked_pnl": -163.9378527205463,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 87.06214727945306,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 11836.062147279454,
          "closed_pnl": -163.9378527205463,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 100,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.15,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 2.4258480440155097,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 2.41,
          "far_ask": 2.45,
          "marked_wealth": 11991.584804401551,
          "marked_pnl": -8.415195598448918,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 242.58480440155097,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 11991.584804401551,
          "closed_pnl": -8.415195598448918,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 100,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 4.849454218755341,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 4.83,
          "far_ask": 4.869999999999999,
          "marked_wealth": 12233.945421875535,
          "marked_pnl": 233.94542187553452,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 484.94542187553407,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 12233.945421875535,
          "closed_pnl": 233.94542187553452,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 100,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.45,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 0,
          "far_model": 7.26858286855996,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 7.25,
          "far_ask": 7.289999999999999,
          "marked_wealth": 12475.858286855997,
          "marked_pnl": 475.858286855997,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 726.8582868559961,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 11749,
          "close_available": true,
          "closed_wealth": 12475.858286855997,
          "closed_pnl": 475.858286855997,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 140,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.15,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 40,
          "far_model": 40.00000001934846,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 39.98,
          "far_ask": 40.02,
          "marked_wealth": 11749.000001934846,
          "marked_pnl": -250.9999980651537,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 4000,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 4000.0000019348463,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 7749,
          "close_available": true,
          "closed_wealth": 11749.000001934846,
          "closed_pnl": -250.9999980651537,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 140,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 40,
          "far_model": 40.012240245616624,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 39.989999999999995,
          "far_ask": 40.03,
          "marked_wealth": 11750.224024561663,
          "marked_pnl": -249.7759754383369,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 4000,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 4001.224024561662,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 7749,
          "close_available": true,
          "closed_wealth": 11750.224024561663,
          "closed_pnl": -249.7759754383369,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 140,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.45,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 40,
          "far_model": 40.27463565439032,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 40.25,
          "far_ask": 40.290000000000006,
          "marked_wealth": 11776.463565439033,
          "marked_pnl": -223.53643456096688,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 4000,
          "payment_day": "D31",
          "available_cash": 11749,
          "far_sale_proceeds": 4027.463565439032,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 7749,
          "close_available": true,
          "closed_wealth": 11776.463565439033,
          "closed_pnl": -223.53643456096688,
          "continued_final_wealth": null,
          "continued_pnl": null,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        }
      ],
      "iv_shocks": [
        {
          "spot": 100,
          "elapsed": 0,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 3.4301386438779957,
          "far_model": 5.93751497363823,
          "near_bid": 3.41,
          "near_ask": 3.45,
          "far_bid": 5.920000000000001,
          "far_ask": 5.96,
          "marked_wealth": 11999.737632976023,
          "marked_pnl": -0.2623670239772764,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "before_near_expiry",
          "closing_legs": {
            "near": -343.0138643877996,
            "far": 593.751497363823
          },
          "close_available": true,
          "closed_wealth": 11999.737632976023,
          "closed_pnl": -0.2623670239772764,
          "continued_final_wealth": null,
          "note": "两期限仍存在，平仓分别卖远腿bid、买回近腿ask."
        },
        {
          "spot": 100,
          "elapsed": 0,
          "nearIV": 0.4,
          "farIV": 0.4,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 4.572422307235627,
          "far_model": 7.91100101392972,
          "near_bid": 4.550000000000001,
          "near_ask": 4.59,
          "far_bid": 7.890000000000001,
          "far_ask": 7.93,
          "marked_wealth": 12082.85787066941,
          "marked_pnl": 82.85787066940975,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "before_near_expiry",
          "closing_legs": {
            "near": -457.24223072356267,
            "far": 791.100101392972
          },
          "close_available": true,
          "closed_wealth": 12082.85787066941,
          "closed_pnl": 82.85787066940975,
          "continued_final_wealth": null,
          "note": "两期限仍存在，平仓分别卖远腿bid、买回近腿ask."
        },
        {
          "spot": 100,
          "elapsed": 0,
          "nearIV": 0.4,
          "farIV": 0.3,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 4.572422307235627,
          "far_model": 5.93751497363823,
          "near_bid": 4.550000000000001,
          "near_ask": 4.59,
          "far_bid": 5.920000000000001,
          "far_ask": 5.96,
          "marked_wealth": 11885.50926664026,
          "marked_pnl": -114.49073335974026,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "before_near_expiry",
          "closing_legs": {
            "near": -457.24223072356267,
            "far": 593.751497363823
          },
          "close_available": true,
          "closed_wealth": 11885.50926664026,
          "closed_pnl": -114.49073335974026,
          "continued_final_wealth": null,
          "note": "两期限仍存在，平仓分别卖远腿bid、买回近腿ask."
        },
        {
          "spot": 100,
          "elapsed": 0,
          "nearIV": 0.3,
          "farIV": 0.2,
          "scale": 1,
          "view": "mid",
          "decision": "close",
          "settlement": "cash",
          "initial_wealth": 12000,
          "debit": 251,
          "cash_after_D1": 11749,
          "near_model": 3.4301386438779957,
          "far_model": 3.96037614698848,
          "near_bid": 3.41,
          "near_ask": 3.45,
          "far_bid": 3.94,
          "far_ask": 3.98,
          "marked_wealth": 11802.02375031105,
          "marked_pnl": -197.9762496889507,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 343
            },
            {
              "side": "buy far",
              "cash": -594
            }
          ],
          "phase": "before_near_expiry",
          "closing_legs": {
            "near": -343.0138643877996,
            "far": 396.037614698848
          },
          "close_available": true,
          "closed_wealth": 11802.023750311047,
          "closed_pnl": -197.97624968895252,
          "continued_final_wealth": null,
          "note": "两期限仍存在，平仓分别卖远腿bid、买回近腿ask."
        }
      ],
      "spxw_continuation": [
        {
          "spot": 100,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 50,
          "view": "mid",
          "decision": "continue",
          "settlement": "cash",
          "initial_wealth": 600000,
          "debit": 12550,
          "cash_after_D1": 587450,
          "near_model": 0,
          "far_model": 242.47271093776703,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 241.5,
          "far_ask": 243.49999999999997,
          "marked_wealth": 611697.2710937767,
          "marked_pnl": 11697.271093776682,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 17150
            },
            {
              "side": "buy far",
              "cash": -29700
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 0,
          "payment_day": "D31",
          "available_cash": 587450,
          "far_sale_proceeds": 24247.271093776704,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 587450,
          "close_available": false,
          "closed_wealth": null,
          "closed_pnl": null,
          "continued_final_wealth": 587450,
          "continued_pnl": -12550,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        },
        {
          "spot": 140,
          "elapsed": 30,
          "nearIV": 0.3,
          "farIV": 0.3,
          "scale": 50,
          "view": "mid",
          "decision": "continue",
          "settlement": "cash",
          "initial_wealth": 600000,
          "debit": 12550,
          "cash_after_D1": 587450,
          "near_model": 2000,
          "far_model": 2000.612012280831,
          "near_bid": null,
          "near_ask": null,
          "far_bid": 1999.4999999999998,
          "far_ask": 2001.5,
          "marked_wealth": 587511.2012280831,
          "marked_pnl": -12488.798771916889,
          "entry_legs": [
            {
              "side": "sell near",
              "cash": 17150
            },
            {
              "side": "buy far",
              "cash": -29700
            }
          ],
          "phase": "near_cash_settled",
          "gross_near_cash_obligation": 200000,
          "payment_day": "D31",
          "available_cash": 587450,
          "far_sale_proceeds": 200061.2012280831,
          "confirmed_sale_offset": 0,
          "gap": 0,
          "completed": true,
          "cash_after_near_settlement": 387450,
          "close_available": false,
          "closed_wealth": null,
          "closed_pnl": null,
          "continued_final_wealth": 387450,
          "continued_pnl": -212550,
          "finalSpot": 80,
          "note": "近端先现金结算. 远腿出售只有在明确可成交且款项可抵付时才帮助当期付款；保留远腿另为新决策."
        }
      ]
    },
    "input_units_and_bounds": {
      "normalized_spot": {
        "default": 100,
        "min": 0,
        "max": 200,
        "unit": "abstract USD/share; SPXW display ×50 points"
      },
      "elapsed": {
        "default": 30,
        "min": 0,
        "max": 30,
        "unit": "ACT days"
      },
      "near_iv": {
        "default": 0.3,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "far_iv": {
        "default": 0.3,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "scale": [
        1,
        50
      ],
      "settlement": [
        "cash",
        "physical"
      ],
      "view": [
        "mid",
        "execution"
      ],
      "decision": [
        "close",
        "continue"
      ],
      "final_stock": {
        "default": 80,
        "min": 0,
        "max": 200,
        "unit": "normalized reference"
      },
      "timely_cash": {
        "default": "all",
        "min": 0,
        "max": 600000,
        "unit": "USD"
      },
      "confirmed_sale_offset": [
        false,
        true
      ]
    },
    "algorithm": "Before near expiry close two legs at respective quotes; at near cash settlement pay intrinsic then close/continue far; physical route stops at stock inventory.",
    "boundaries": "SPXW onlyscale50/cash；fee不缩放；无及时支付或无bid不完成；physical不复用cash continuation；不同IV非时间预测.",
    "static_equivalent_markdown": "# P19 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| 近端spot | 远IV | 远call mark | 近端关闭mid财富 |\n|---|---|---|---|\n| 80 | 15% | 0.000160 | 11,749.02 |\n| 80 | 30% | 0.142095 | 11,763.21 |\n| 80 | 45% | 0.870621 | 11,836.06 |\n| 100 | 15% | 2.425848 | 11,991.58 |\n| 100 | 30% | 4.849454 | 12,233.95 |\n| 100 | 45% | 7.268583 | 12,475.86 |\n| 140 | 15% | 40.000000 | 11,749.00 |\n| 140 | 30% | 40.012240 | 11,750.22 |\n| 140 | 45% | 40.274636 | 11,776.46 |\n\n| SPXW近端 | 远端 | mid初始debit | 近端支付 | 续持终财富 | 续持损益 |\n|---|---|---|---|---|---|\n| 5000 | 4000 | 12,550.00 | 0.00 | 587,450.00 | -12,550.00 |\n| 7000 | 4000 | 12,550.00 | 200,000.00 | 387,450.00 | -212,550.00 |\n\nSPXW的0.65/张费用不乘50，执行debit12751.30；近端付款不足停止. 美式实物near指派会留下空股及far call，不沿用本现金终值.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P19-near-value.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P19-lifecycle.svg"
    ],
    "source_id_mapping": {
      "PFH-ODD": "MA-OCC",
      "PFH-ETF": "PFH-ETF",
      "PFH-EQUITY": "PFH-EQUITY",
      "PFH-T1": "PFH-T1",
      "PFH-EXERCISE": "PFH-EXERCISE",
      "PFH-SPXW": "MA-SPX",
      "PFH-MARGIN": "PFH-MARGIN",
      "PFH-CC": "PFH-CC",
      "PFH-CSP": "PFH-CSP",
      "PFH-PP": "PFH-PP",
      "PFH-COLLAR": "PFH-COLLAR",
      "PFH-CALL-SPREAD": "PFH-CALL-SPREAD",
      "PFH-PUT-SPREAD": "PFH-PUT-SPREAD",
      "PFH-STRADDLE": "PFH-STRADDLE",
      "PFH-STRANGLE": "PFH-STRANGLE",
      "PFH-CALENDAR": "PFH-CALENDAR",
      "PFH-PARITY": "PFH-PARITY",
      "PFH-MIT-OPTIONS": "PFH-MIT-OPTIONS",
      "PFH-MIT-BSM": "PFH-MIT-BSM",
      "PFH-BXM": "PFH-BXM",
      "PFH-PUT-INDEX": "PFH-PUT-INDEX",
      "PFH-CLL": "PFH-CLL",
      "PFH-AQR2021": "PFH-AQR2021",
      "PFH-CHIFED2025": "PFH-CHIFED2025",
      "MEFG-ODD": "MA-OCC",
      "MP-OCC": "MA-OCC",
      "MEFG-OCC-ETF": "PFH-ETF",
      "MEFG-OCC-EQUITY": "PFH-EQUITY",
      "MEFG-OIC-T1": "PFH-T1",
      "MEFG-OIC-EXERCISE": "PFH-EXERCISE",
      "MEFG-SPX": "MA-SPX",
      "PFGH-CBOE-MARGIN": "PFH-MARGIN",
      "PFGH-OIC-CC": "PFH-CC",
      "PFGH-OIC-CSP": "PFH-CSP",
      "PFGH-OIC-PP": "PFH-PP",
      "PFGH-OIC-COLLAR": "PFH-COLLAR",
      "PFGH-OIC-BULL-CALL": "PFH-CALL-SPREAD",
      "PFGH-OIC-BULL-PUT": "PFH-PUT-SPREAD",
      "PFGH-OIC-STRADDLE": "PFH-STRADDLE",
      "PFGH-OIC-STRANGLE": "PFH-STRANGLE",
      "PFGH-OIC-CALENDAR": "PFH-CALENDAR",
      "MEFG-MIT-OPTIONS": "PFH-MIT-OPTIONS",
      "MEFG-MIT-KOGAN": "PFH-MIT-BSM",
      "PFGH-CBOE-BXM": "PFH-BXM",
      "PFGH-CBOE-PUT": "PFH-PUT-INDEX",
      "PFGH-CBOE-COLLAR": "PFH-CLL",
      "PFGH-AQR-PROTECTION-2021": "PFH-AQR2021",
      "MEFG-CHICAGOFED-2025": "PFH-CHIFED2025"
    },
    "full_frozen_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P19.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-22-deep-review",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
同执行价日历价差买入远月call、卖出近月call，用较小初始debit换取两个不同到期日的净期权头寸. 第一个到期日必须同时盘点近腿支付、远腿剩余价值与可用现金；之后的续持属于新的路径状态.

<a id="p19-two-clocks"></a>
## 期限与建仓现金

PF-GRID-01现价100，卖30天到期的100C、买90天到期的100C. mid分别3.43和5.94，100单位净付251. 从12,000现金出发，D1余11,749，同时持有一张远call和一张近call空头. 合成执行层卖近按bid3.41、买远按ask5.96，再扣两笔0.65费用，净付256.30，余11,743.70.

近远call价格反映各自期限与波动率. 该结构买入远端选择权并出售近端选择权，价值取决于两腿报价的相对变化.[^calendar]

本篇按相对日历记D0成交、D1权利金现金结算、D30近端到期、D31处理近端现金，D90远端到期、D91处理远端现金；模型时间按实际日数/365. 所列事件日及下一编号日均设为营业日，美式股票期权与欧式指数期权分别核算交割结果. [^terms]

<a id="p19-mark"></a>
## 期限波动率与净值

在$t<30$时，净期权mark为$100[C_{90-t}(S,\sigma_f)-C_{30-t}(S,\sigma_n)]$. 两个$\sigma$分别属于近、远期限. 本篇用零利率、零分红BSM作条件mark，可成交退出另按合成bid/ask核算. [^bsm]

同样处在D0、现价100，仅改变两条IV时：

| 近IV / 远IV | 净期权模型mark | 相对251入场mid的差 |
|---|---:|---:|
| 30% / 30% | 250.738 | −0.262 |
| 40% / 40% | 333.858 | +82.858 |
| 40% / 30% | 136.509 | −114.491 |
| 30% / 20% | 53.024 | −197.976 |

首行模型值250.738与初始逐腿取整后的251相差0.262. 平行提高两期限波动率使净值增加，只提高近端波动率则使卖出的腿变贵、净值降低. 独立波动率输入用于敏感性分析，任意组合未必构成无套利期限报价.

D10平仓买回近腿ask、卖出远腿bid，并付两笔退出费. 远腿缺少正bid时，实验保留估值和未取得的成交价.

<a id="p19-first-expiry"></a>
## 近端到期与远腿价值

先用一个抽象的欧式现金结算版本看清价值. 近端到期的支付为$100(S_{30}-100)^+$，远腿仍应按剩余60天的价格估值. 若在此刻关闭远腿，mid对照财富为

$$
W_{30}=11749-100(S_{30}-100)^+
       +100C_{60}(S_{30},\sigma_f).
$$

该式汇总近端到期支付和远端市值. 在 $S_{30}=100$ 时，近腿支付为0，远腿保留60天价值：

| 远IV | 远call每股模型值 | 近到期关闭远腿的mid财富 | 相对12,000损益 |
|---:|---:|---:|---:|
| 15% | ≈2.426 | ≈11,991.585 | ≈−8.415 |
| 30% | ≈4.849 | ≈12,233.945 | ≈+233.945 |
| 45% | ≈7.269 | ≈12,475.858 | ≈+475.858 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P19-near-value.svg" alt="近到期日，远端剩余价值随标的和远IV变化"></div><div class="svg-narrow pfh-native" data-static-figure="P19-near-value-mobile.svg"><p class="pfh-figure-title">D30近端到期，但远call还剩60天</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 远IV15%</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 远IV30%</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. 远IV45%</span></li></ul><p class="pfh-axis-label">纵轴：近端关闭远腿的mid财富</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">11,698</span><span style="top:75%">11,905</span><span style="top:50%">12,112</span><span style="top:25%">12,320</span><span style="top:0%">12,527</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 60.25,323.95 65.50,323.95 70.75,323.95 76.00,323.95 81.25,323.95 86.50,323.95 91.75,323.95 97.00,323.95 102.25,323.95 107.50,323.95 112.75,323.95 118.00,323.95 123.25,323.95 128.50,323.95 133.75,323.95 139.00,323.95 144.25,323.95 149.50,323.95 154.75,323.95 160.00,323.95 165.25,323.93 170.50,323.87 175.75,323.68 181.00,323.15 186.25,321.84 191.50,318.99 196.75,313.62 202.00,304.54 207.25,290.65 212.50,271.25 217.75,289.65 223.00,302.84 228.25,311.69 233.50,317.22 238.75,320.47 244.00,322.25 249.25,323.16 254.50,323.61 259.75,323.80 265.00,323.89 270.25,323.93 275.50,323.94 280.75,323.95 286.00,323.95 291.25,323.95 296.50,323.95 301.75,323.95 307.00,323.95 312.25,323.95 317.50,323.95 322.75,323.95 328.00,323.95 333.25,323.95 338.50,323.95 343.75,323.95 349.00,323.95 354.25,323.95 359.50,323.95 364.75,323.95 370.00,323.95" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 60.25,323.95 65.50,323.95 70.75,323.95 76.00,323.95 81.25,323.95 86.50,323.95 91.75,323.95 97.00,323.95 102.25,323.95 107.50,323.95 112.75,323.95 118.00,323.94 123.25,323.93 128.50,323.90 133.75,323.84 139.00,323.71 144.25,323.46 149.50,322.99 154.75,322.19 160.00,320.86 165.25,318.79 170.50,315.72 175.75,311.31 181.00,305.25 186.25,297.21 191.50,286.88 196.75,274.01 202.00,258.41 207.25,239.95 212.50,218.60 217.75,237.87 223.00,254.41 228.25,268.41 233.50,280.10 238.75,289.70 244.00,297.49 249.25,303.73 254.50,308.65 259.75,312.50 265.00,315.45 270.25,317.71 275.50,319.41 280.75,320.68 286.00,321.60 291.25,322.28 296.50,322.78 301.75,323.13 307.00,323.38 312.25,323.56 317.50,323.68 322.75,323.76 328.00,323.83 333.25,323.87 338.50,323.89 343.75,323.91 349.00,323.93 354.25,323.93 359.50,323.94 364.75,323.94 370.00,323.95" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 60.25,323.95 65.50,323.95 70.75,323.95 76.00,323.95 81.25,323.95 86.50,323.94 91.75,323.92 97.00,323.89 102.25,323.83 107.50,323.71 112.75,323.52 118.00,323.20 123.25,322.69 128.50,321.92 133.75,320.78 139.00,319.17 144.25,316.94 149.50,313.94 154.75,310.03 160.00,305.03 165.25,298.79 170.50,291.13 175.75,281.90 181.00,271.01 186.25,258.32 191.50,243.75 196.75,227.26 202.00,208.82 207.25,188.40 212.50,166.05 217.75,185.26 223.00,202.65 228.25,218.28 233.50,232.28 238.75,244.74 244.00,255.75 249.25,265.46 254.50,273.97 259.75,281.38 265.00,287.82 270.25,293.39 275.50,298.17 280.75,302.28 286.00,305.78 291.25,308.76 296.50,311.29 301.75,313.42 307.00,315.22 312.25,316.72 317.50,317.98 322.75,319.03 328.00,319.91 333.25,320.63 338.50,321.23 343.75,321.73 349.00,322.14 354.25,322.48 359.50,322.75 364.75,322.97 370.00,323.16" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">40</span><span class="" style="left:50%">100</span><span class="last" style="left:100%">160</span></div></div><p class="pfh-axis-label">横轴：抽象现金模型标的参考值</p><p class="pfh-figure-note">欧式现金结算教学模型，采用mid. </p></div><figcaption>近到期日，远端剩余价值随标的和远IV变化</figcaption></figure>

零利率、零分红、同标的及执行价下，远call价值至少为近端内在支付. 若此刻按模型价格处理两腿，净剩余价值非负，损失以初始debit为界. 此结论对应近到期关闭组合的规则；继续持有远腿则形成下一段风险.

<a id="p19-cash-life"></a>
## 关闭与续持路径

给定近端140、远端80. 近腿到期支付4,000；近到期时远call按30%波动率计每股约40.012，按mid关闭组合财富约11,750.224. 若支付近腿后续持远call，现金7,749，到D90远call支付为0，终财富7,749、损失4,251.

近端100、远端80时，近腿支付为0，续持后终财富11,749，损失251. 两条路径远端价格相同，已在近端支付的4,000造成最终差额.[^calendar]

转换为SPXW规格的教学模型时，将参考价格、执行价及报价点数乘50：初始指数5,000、执行价5,000，每点100美元，共同财富600,000.

| SPXW教学现金路径 | D1净付mid | D31近端现金支付 | D91远端支付 | 最终财富 |
|---|---:|---:|---:|---:|
| 近端5,000 → 远端4,000，保留远腿 | 12,550 | 0 | 0 | 587,450 |
| 近端7,000 → 远端4,000，保留远腿 | 12,550 | 200,000 | 0 | 387,450 |

第二条损失212,550. 期权点数和无摩擦金额乘50，**每张0.65费用不乘50**. 因此SPXW合成执行层入场debit为

$$
100\,[50(5.96-3.41)]+2(0.65)=12751.30,
$$

对应续持路径的执行层终财富为387,248.70. 如另计行权费用或税，按发生时点加入现金流.[^spxw]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P19-lifecycle.svg" alt="SPXW的近端支付、远腿关闭或续持，是两条不同的现金路径"></div><div class="svg-narrow pfh-native" data-static-figure="P19-lifecycle-mobile.svg"><p class="pfh-figure-title">SPXW教学现金路径：先付近端，再决定远腿</p><ol class="pfh-flow-steps"><li><strong>D1（5000点起点）</strong><p>共同财富600,000</p><p>mid debit12,550</p><p>现金587,450</p><p>两腿单位均100美元/点</p></li><li><strong>D31（近端7000）</strong><p>short近腿付200,000</p><p>现金剩387,450</p><p>far call仍有价值</p><p>关闭或续持是不同选择</p></li><li><strong>D91（远端4000）</strong><p>若继续持有far call</p><p>其到期支付为0</p><p>终财富387,450</p><p>整个路径损失212,550</p></li></ol><p class="pfh-figure-note">0.65/张费用不乘50；现金不足则停在付款点，不输出后续已完成路径. </p></div><figcaption>SPXW的近端支付、远腿关闭或续持，是两条不同的现金路径</figcaption></figure>

近端需付200,000，截止前现金180,000，缺20,000. 远call卖出款只有在成交及结算可按期抵付时才进入付款资源；保持远腿则需其他及时资金.

<a id="p19-physical"></a>
## 美式实物交割

XYZ近call在140被指派，交付义务为按100卖100股. 无现股时可能形成空100股及远call：股票交割收10,000，空股负债按−14,000计，远call约4,001.224，三项共同进入净财富.

欧式现金版本支付4,000后只留远call，美式实物版本还保留空股. 后者继续持仓需要借股、担保、分红与平股安排；使用远call提前行权覆盖空股会放弃剩余时间价值.[^terms]

再次卖出近call是新交易，按新执行价、期限、报价及资金义务重建组合.

<a id="p19-lab"></a>
## 期限实验与解析

<div data-experiment-slot="EXP-P19-CALENDAR"></div>

分别改变近远波动率，再到D30估远腿60天价值. 现金版本比较关闭与续持，美式版本盘点空股、现金及远call.

**解释题.** D30现价100，为什么不能把远call标为零？

**解析.** 远call剩60天，按30%模型波动率，每股约4.849、整张约484.945，净财富约12,233.945. 变现采用当时卖价及费用.

**迁移题.** SPXW合成执行入场debit为何不是12,815？

**解析.** 点数支出255乘50得12,750，两笔0.65费用保持原金额，合计12,751.30.

**路径题.** 两条路径远端都4,000，为什么近端5,000与7,000的最终财富不同？

**解析.** 近端7,000路径在D31支付200,000，近端5,000路径支付0. 两条远腿到4,000均支付0，终财富相差已支付的200,000.

**资金题.** 近端付款需200,000、可达现金180,000，远call的mark大于200,000. 可以直接说“没有缺口”吗？

**解析.** 当前现金缺口20,000. 卖远腿且所得按时可抵付时能补缺；续持或卖款迟到时，付款仍缺资金.

[^calendar]: OIC，[Long Call Calendar Spread](https://www.optionseducation.org/strategies/all-strategies/long-call-calendar-spread-call-horizontal)，完整正文，尤其近远IV、近端到期与指派单元.
[^bsm]: Leonid Kogan，MIT [Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)，Fall 2010，slides 16–21；用于给定零利率、零分红条件下的mark示例.
[^terms]: OCC，[ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII及Other Risks item 1印刷67–68页；OIC，[The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion)，July 2024.
[^spxw]: Cboe，[SPX Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，©2026，第2页：SPXW欧式、PM、每点100美元、现金在到期后营业日交付；传统SPX的AM/SOQ另列.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P19-CALENDAR",
    "node_id": "P19",
    "title": "两次到期与残余头寸",
    "anchor": "p19-lab",
    "description": "在近月到期盘点远腿、现金与股票，区分平仓、续持和两期限波动率变化.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "normalized_spot": {
        "default": 100,
        "min": 0,
        "max": 200,
        "unit": "abstract USD/share; SPXW display ×50 points"
      },
      "elapsed": {
        "default": 30,
        "min": 0,
        "max": 30,
        "unit": "ACT days"
      },
      "near_iv": {
        "default": 0.3,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "far_iv": {
        "default": 0.3,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "scale": [
        1,
        50
      ],
      "settlement": [
        "cash",
        "physical"
      ],
      "view": [
        "mid",
        "execution"
      ],
      "decision": [
        "close",
        "continue"
      ],
      "final_stock": {
        "default": 80,
        "min": 0,
        "max": 200,
        "unit": "normalized reference"
      },
      "timely_cash": {
        "default": "all",
        "min": 0,
        "max": 600000,
        "unit": "USD"
      },
      "confirmed_sale_offset": [
        false,
        true
      ]
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "Before near expiry close two legs at respective quotes; at near cash settlement pay intrinsic then close/continue far; physical route stops at stock inventory.",
    "boundaries": "SPXW onlyscale50/cash；fee不缩放；无及时支付或无bid不完成；physical不复用cash continuation；不同IV非时间预测.",
    "views": [
      "近端价值随远IV和spot的切片",
      "两到期现金、付款缺口或股票库存"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/calendar-spread-two-expiries-and-inventory/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P19-near-value.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P19-lifecycle.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P19.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P19.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P19.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX与SPXW均为欧式、现金结算，合约乘数为每点100美元. 规格列出最小报价增量，并区分传统SPX的AM结算与SPXW的PM结算；现金在到期后相应营业日交付.
- [Long Call Calendar Spread](https://www.optionseducation.org/strategies/all-strategies/long-call-calendar-spread-call-horizontal): 两期限、远腿剩余价值、独立IV、近腿义务；损失界必须带关闭/续持条件.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无股息、常利率与常波动率条件下的连续复制、PDE、BSM公式及风险中性定价；相关数值例采用q=0.
- [The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion): 期权成交形成头寸，权利金现金与行权后的股票按交收安排转移. 2024-05-28 起适用的 T+1 周期及转换说明.

## Content relations
```json
[
  {
    "from": "zh-p19",
    "relation": "part_of",
    "to": "portfolio-options",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p19",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p19",
    "relation": "uses_method",
    "to": "zh-p17",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p19",
    "relation": "uses_method",
    "to": "zh-p18",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p19",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p19-two-clocks",
    "relation": "supported_by",
    "to": "PFH-CALENDAR",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "两期限、远腿剩余价值、独立IV、近腿义务；损失界必须带关闭/续持条件."
  },
  {
    "from": "p19-mark",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Slides 16–21完整BSM建模与公式单元",
    "scope": "无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率."
  },
  {
    "from": "p19-physical",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p19-two-clocks",
    "relation": "supported_by",
    "to": "PFH-T1",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "全文：Option Trade Settlement及exercise settlement",
    "scope": "仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表."
  },
  {
    "from": "p19-cash-life",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "PDF pp1–2，尤其p2合约表",
    "scope": "SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价."
  },
  {
    "from": "p19-lab",
    "relation": "illustrated_by",
    "to": "EXP-P19-CALENDAR",
    "reason": "在近月到期盘点远腿、现金与股票，区分平仓、续持和两期限波动率变化."
  }
]
```

## Related entries
