# 现金担保看跌：接股义务与资金时点

区分接股总款与有效成本，比较同K平价、限价成交和指派时点.

Entry: zh-p14 | Node: P14 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 开始前实际读取 agent_packet.required_readings 指定原文完整单元，所选可选分支再读相应 optional_readings，记录题名、版本、定位和支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 重建9,500交割付款和净取得成本，比较同K105平价及现金占用. 对照95限价已成交与put未指派的110终点，检查及时现金9,000的500缺口. PUT基准分支核3.0版式(3)–(4)零利率冲突，利息计算沿独立现金推导. 使用PF-GRID-01固定教学网格及对应合约条件，先用完整任务诊断，再让读者解释、推导和计算；已掌握步骤直接跳过. 反馈核对各腿、现金时点及剩余持仓，用迁移题检验. runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p14",
  "selected_branch": "core",
  "learning_task": "重建9,500交割付款和净取得成本，比较同K105平价及现金占用. 对照95限价已成交与put未指派的110终点，检查及时现金9,000的500缺口. PUT基准分支核3.0版式(3)–(4)零利率冲突，利息计算沿独立现金推导.",
  "required_readings": [
    {
      "source_id": "PFH-CSP",
      "title": "Cash-Secured Put",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/cash-secured-put",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "接股意愿与义务、现金保留、未取得股票的机会成本；不把净成本等同总交割款."
      },
      "supports": "接股意愿与义务、现金保留、未取得股票的机会成本；不把净成本等同总交割款.",
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
      "source_id": "PFH-MARGIN",
      "title": "Strategy-based Margin: Overview of Margin Requirements for Options",
      "authors": [
        "Cboe"
      ],
      "version": "网页2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cboe.com/markets/us/options/margin/strategy-based-margin",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "主文; Short Put现金账户行; same-expiry European cash-settled spreads完整段",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺."
      },
      "supports": "短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-PARITY",
      "title": "Put/Call Parity",
      "authors": [
        "Options Industry Council"
      ],
      "version": "网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/put-call-parity",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "平价定义、匹配条件及现实限制完整单元",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "同标的/同K/同到期及资金、分红、行权方式条件；独立R=1.01例为本站推导."
      },
      "supports": "同标的/同K/同到期及资金、分红、行权方式条件；独立R=1.01例为本站推导.",
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
      "source_id": "PFH-EXERCISE",
      "title": "Options Exercise FAQ",
      "authors": [
        "Options Industry Council"
      ],
      "version": "网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/referencelibrary/faq/options-exercise",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "行权与平仓问答; 自动处理、提前行权和分红问答",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "行权、平仓、成员exercise-by-exception与客户指令分开；股息和时间价值影响选择，但不保证每个客户腿自动执行."
      },
      "supports": "行权、平仓、成员exercise-by-exception与客户指令分开；股息和时间价值影响选择，但不保证每个客户腿自动执行.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "PFH-PUT-INDEX",
      "title": "Cboe S&P 500 PutWrite Indices Methodology",
      "authors": [
        "Cboe Global Indices"
      ],
      "version": "v3.0，2025-08-15",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Cboe_SP_500_PutWrite_Indices_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§1–3 PUT完整相关单元; §3.1 printed Page5 / PDF p6的式(3)(4)连同不采用说明",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "只用PUT国库券+SPX puts结构、执行价/SOQ/roll价格来源与现金减短负债. 印刷§3.1式(3)(4)在USBR=0会使现金倍增，不用作引擎."
      },
      "supports": "只用PUT国库券+SPX puts结构、执行价/SOQ/roll价格来源与现金减短负债. 印刷§3.1式(3)(4)在USBR=0会使现金倍增，不用作引擎.",
      "branch": "benchmark-put",
      "activate_when": "只有选择该分支时转为必读；未选不考对应题目.",
      "editorial_correction": "本版本§3.1(3)(4)零USBR校验会错误倍增现金；不得照抄作利息引擎，只用结构/roll与报价来源. 请连同原式读这个条件.",
      "fallback_source_ids": []
    }
  ],
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
          "kind": "put",
          "strike": 95,
          "days": 30,
          "raw_model": 1.4216039100326583,
          "mid": 1.42,
          "bid": 1.4,
          "ask": 1.44
        },
        {
          "kind": "call",
          "strike": 105,
          "days": 30,
          "raw_model": 1.5664370191311896,
          "mid": 1.57,
          "bid": 1.55,
          "ask": 1.59
        },
        {
          "kind": "put",
          "strike": 105,
          "days": 30,
          "raw_model": 6.566437019131186,
          "mid": 6.57,
          "bid": 6.55,
          "ask": 6.59
        }
      ],
      "strategy_results": {
        "hold": {
          "shares": 100,
          "legs": [],
          "option_cash_mid": 0,
          "option_cash_execution": 0,
          "cash_after_premium_settlement_mid": 2000,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 2000
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 9000
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11000
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11500
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12500
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 13000
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 15000
            }
          ]
        },
        "cash_secured_put_95": {
          "shares": 0,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "initial_mid_cash": 142.0,
              "initial_execution_cash_after_fee": 139.35
            }
          ],
          "option_cash_mid": 142.0,
          "option_cash_execution": 139.35,
          "cash_after_premium_settlement_mid": 12142.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 2642.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 9642.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11642.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 12142.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12142.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12142.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12142.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12142.0
            }
          ]
        },
        "cash_secured_put_105": {
          "shares": 0,
          "legs": [
            {
              "kind": "put",
              "strike": 105,
              "days": 30,
              "quantity": -1,
              "mid": 6.57,
              "bid": 6.55,
              "ask": 6.59,
              "initial_mid_cash": 657.0,
              "initial_execution_cash_after_fee": 654.35
            }
          ],
          "option_cash_mid": 657.0,
          "option_cash_execution": 654.35,
          "cash_after_premium_settlement_mid": 12657.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 2157.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 9157.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11157.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11657.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12157.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12657.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12657.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12657.0
            }
          ]
        },
        "covered_call_105": {
          "shares": 100,
          "legs": [
            {
              "kind": "call",
              "strike": 105,
              "days": 30,
              "quantity": -1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "initial_mid_cash": 157.0,
              "initial_execution_cash_after_fee": 154.35
            }
          ],
          "option_cash_mid": 157.0,
          "option_cash_execution": 154.35,
          "cash_after_premium_settlement_mid": 2157.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 2157.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 9157.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11157.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11657.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12157.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12657.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12657.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12657.0
            }
          ]
        }
      },
      "lifecycle_cases": {
        "put_early_assignment": {
          "strike": 95,
          "spot_at_assignment": 75,
          "gross_cash_obligation": 9500,
          "timely_cash_example": 9000,
          "timely_cash_gap": 500
        }
      },
      "separate_interest_parity_unit": {
        "spot": 100,
        "strike": 105,
        "gross_return": 1.01,
        "call": 2,
        "put_from_parity": 5.960396039603964,
        "identity": "separate frictionless one-period European example; not the PF-GRID-01 price chain"
      },
      "source_corrections": {
        "CBOE_PUT_equations_3_4": {
          "status": "exclude_equation_pair_from_engine",
          "visual_check": "public Cboe methodology physical PDF page 6 / printed Page 5 inspected",
          "zero_rate_test": {
            "USBR": 0,
            "printed_eq4_r": 1,
            "printed_eq3_balance_multiple": 2,
            "economically_expected_multiple": 1
          },
          "use": "structure, constituents, roll, pricing-source and cash-account identity only"
        },
        "OIC_legacy_assignment_notice_wording": {
          "status": "do_not_adopt_exact_Monday_notice_wording_as_current_lifecycle_rule",
          "use": "use current OCC ODD/T+1 contract mechanics; broker/customer exercise cutoffs remain broker-specific"
        }
      }
    },
    "default_results": {
      "terminal": [
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 0,
          "payoffs": [
            -9500
          ],
          "stock_mark": 0,
          "option_payoff": -9500,
          "wealth": 2642,
          "pnl": -9358,
          "return_on_initial": -0.7798333333333334,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            -2500
          ],
          "stock_mark": 0,
          "option_payoff": -2500,
          "wealth": 9642,
          "pnl": -2358,
          "return_on_initial": -0.1965,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 90,
          "payoffs": [
            -500
          ],
          "stock_mark": 0,
          "option_payoff": -500,
          "wealth": 11642,
          "pnl": -358,
          "return_on_initial": -0.02983333333333338,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 95,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12142,
          "pnl": 142,
          "return_on_initial": 0.011833333333333362,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 100,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12142,
          "pnl": 142,
          "return_on_initial": 0.011833333333333362,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 105,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12142,
          "pnl": 142,
          "return_on_initial": 0.011833333333333362,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 110,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12142,
          "pnl": 142,
          "return_on_initial": 0.011833333333333362,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "cash_secured_put_95",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 142,
          "opening_fee": 0,
          "cash_after_D1": 12142,
          "option_mark": -142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": -1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": 142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 130,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12142,
          "pnl": 142,
          "return_on_initial": 0.011833333333333362,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        }
      ],
      "assignment": [
        {
          "entry": {
            "id": "cash_secured_put_95",
            "view": "mid",
            "origin": "cash",
            "initial_wealth": 12000,
            "initial_shares": 0,
            "initial_cash": 12000,
            "stock_delta": 0,
            "stock_trade_cash": 0,
            "stock_spread": 0,
            "shares": 0,
            "option_cash": 142,
            "opening_fee": 0,
            "cash_after_D1": 12142,
            "option_mark": -142,
            "wealth_at_mid_after_entry": 12000,
            "legs": [
              {
                "kind": "put",
                "strike": 95,
                "days": 30,
                "quantity": -1,
                "mid": 1.42,
                "bid": 1.4,
                "ask": 1.44,
                "fill": 1.42,
                "fee": 0,
                "cash": 142
              }
            ],
            "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金."
          },
          "obligation": 9500,
          "timely_cash": 9000,
          "unavailable_cash": 3142,
          "gap": 500,
          "completed": false,
          "cash_after": null,
          "shares_after": null,
          "wealth_after": null,
          "note": "截止前缺现金：停止已完成交割结果；未假设券商借款."
        },
        {
          "entry": {
            "id": "cash_secured_put_95",
            "view": "mid",
            "origin": "cash",
            "initial_wealth": 12000,
            "initial_shares": 0,
            "initial_cash": 12000,
            "stock_delta": 0,
            "stock_trade_cash": 0,
            "stock_spread": 0,
            "shares": 0,
            "option_cash": 142,
            "opening_fee": 0,
            "cash_after_D1": 12142,
            "option_mark": -142,
            "wealth_at_mid_after_entry": 12000,
            "legs": [
              {
                "kind": "put",
                "strike": 95,
                "days": 30,
                "quantity": -1,
                "mid": 1.42,
                "bid": 1.4,
                "ask": 1.44,
                "fill": 1.42,
                "fee": 0,
                "cash": 142
              }
            ],
            "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金."
          },
          "obligation": 9500,
          "timely_cash": 9500,
          "unavailable_cash": 2642,
          "gap": 0,
          "completed": true,
          "cash_after": 2642,
          "shares_after": 100,
          "wealth_after": 10142,
          "note": "教学时点支付完成，股票按75标记."
        }
      ],
      "parity": {
        "R": 1.01,
        "S": 100,
        "K": 105,
        "C": 2,
        "P": 5.960396039603964,
        "stock_minus_call": 98,
        "pv_strike_minus_put": 98,
        "full_reserve_extra": 1.039603960396036
      },
      "limit": [
        {
          "spot": 70,
          "limit_filled_price": 95,
          "limit_wealth": 9500,
          "csp95_wealth": 9642,
          "hold_wealth": 9000,
          "cash_wealth": 12000,
          "note": "D10限价已成交被明确施加；put没有提前指派，不能从一次触价推断这两件事."
        },
        {
          "spot": 110,
          "limit_filled_price": 95,
          "limit_wealth": 13500,
          "csp95_wealth": 12142,
          "hold_wealth": 13000,
          "cash_wealth": 12000,
          "note": "D10限价已成交被明确施加；put没有提前指派，不能从一次触价推断这两件事."
        }
      ]
    },
    "input_units_and_bounds": {
      "terminal_stock": {
        "default": 70,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "view": [
        "mid",
        "execution"
      ],
      "timely_cash": {
        "default": 9000,
        "min": 0,
        "max": 12000,
        "unit": "USD"
      }
    },
    "algorithm": "terminal CSP95 + same-K CC105/CSP105; putAssignment separates gross and reachable cash; limitComparison is imposed fill path.",
    "boundaries": "没有资金不输出已完成股份；不以一次触价推定成交/指派.",
    "static_equivalent_markdown": "# P14 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| 终点股价 | mid财富 | 执行层财富 | mid损益 |\n|---|---|---|---|\n| 0.00 | 2,642.00 | 2,639.35 | -9,358.00 |\n| 70.00 | 9,642.00 | 9,639.35 | -2,358.00 |\n| 90.00 | 11,642.00 | 11,639.35 | -358.00 |\n| 95.00 | 12,142.00 | 12,139.35 | 142.00 |\n| 100.00 | 12,142.00 | 12,139.35 | 142.00 |\n| 105.00 | 12,142.00 | 12,139.35 | 142.00 |\n| 110.00 | 12,142.00 | 12,139.35 | 142.00 |\n| 130.00 | 12,142.00 | 12,139.35 | 142.00 |\n\n总接股款9500，不是9358；及时现金9000时缺500，已完成交割股数/财富保持空值.\n\n| 终点 | 已成交95限价财富 | CSP95财富 |\n|---|---|---|\n| 70 | 9500 | 9642 |\n| 110 | 13500 | 12142 |\n\n同K105的CC与CSP才作平价. 独立利息例：R=1.01，P=5.960396，现存K与PV(K)差1.039604.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P14-payoff.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P14-lifecycle.svg"
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
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P14.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-22-deep-review",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
现金担保看跌以现金换取权利金，同时承担被指派时按执行价买入股票的义务. 账户需要同时跟踪权利金、接股总付款与到期持仓身份.

<a id="p14-goal"></a>
## 买入目标与履约义务

账户持有12,000美元现金，XYZ现价100，计划未来30天按95取得100股. 卖一张95 put后，持有人可依合同交付股票，卖方被指派时支付9,500；相应现金或合格等价物用于担保. 权利金为出售选择权的收入，是否接股取决于行权与指派.[^csp]

本篇仍用PF-GRID-01：95 put的mid为1.42，合成bid/ask为1.40/1.44，每张每次费0.65，标准单位100股；主例无分红、无利息. 用mid建立后，D1现金为12,142，同时有142美元短put负债，净财富仍为12,000；D0成交与D1权利金现金结算分开记录. [^t1]

Cboe现金账户short put规则按总执行价要求担保. 本例预留9,500，资产资格与内部要求沿适用账户规则.[^margin]

<a id="p14-accounts"></a>
## 交割付款与净取得成本

低于95且被指派时，支付9,500、取得100股，现金剩2,642，股票按当时市价计值.

| 到期价 | mid路径下最终股票 | mid现金 | 股票市值 | 合计财富 | 相对12,000损益 |
|---:|---:|---:|---:|---:|---:|
| 0 | 100股 | 2,642 | 0 | 2,642 | −9,358 |
| 70 | 100股 | 2,642 | 7,000 | 9,642 | −2,358 |
| 95 | 本例按未指派处理 | 12,142 | 0 | 12,142 | +142 |
| 110 | 0股 | 12,142 | 0 | 12,142 | +142 |

本例将恰好95的put记为未指派. 若实际被指派，现金2,642加价值9,500的股票，同样为12,142；之后的敞口由实际持仓决定.

以$s$表示终点股价，整个账户可写为

$$
W_T=12142-100(95-s)^+.
$$

净取得成本将先收到的权利金与交割付款合并：mid每股成本 $95-1.42=93.58$，交割日总付款仍为9,500. 执行层净收139.35，每股有效成本约93.607.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P14-payoff.svg" alt="接股与未接股两侧的完整财富"></div><div class="svg-narrow pfh-native" data-static-figure="P14-payoff-mobile.svg"><p class="pfh-figure-title">准备买股的CSP95：可能接股，也可能一直持现</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. CSP95</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. 全部现金</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,316.71 59.50,314.45 64.00,312.19 68.50,309.94 73.00,307.69 77.50,305.43 82.00,303.17 86.50,300.92 91.00,298.66 95.50,296.40 100.00,294.15 104.50,291.90 109.00,289.64 113.50,287.38 118.00,285.13 122.50,282.87 127.00,280.62 131.50,278.36 136.00,276.11 140.50,273.85 145.00,271.59 149.50,269.33 154.00,267.09 158.50,264.83 163.00,262.57 167.50,260.31 172.00,258.06 176.50,255.80 181.00,253.55 185.50,251.30 190.00,249.04 194.50,246.78 199.00,244.52 203.50,242.27 208.00,240.02 212.50,237.76 217.00,235.50 221.50,233.25 226.00,230.99 230.50,228.74 235.00,226.48 239.50,224.23 244.00,221.97 248.50,219.71 253.00,217.46 257.50,215.21 262.00,212.95 266.50,210.69 271.00,209.56 275.50,209.56 280.00,209.56 284.50,209.56 289.00,209.56 293.50,209.56 298.00,209.56 302.50,209.56 307.00,209.56 311.50,209.56 316.00,209.56 320.50,209.56 325.00,209.56 329.50,209.56 334.00,209.56 338.50,209.56 343.00,209.56 347.50,209.56 352.00,209.56 356.50,209.56 361.00,209.56 365.50,209.56 370.00,209.56" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,211.17 59.50,211.17 64.00,211.17 68.50,211.17 73.00,211.17 77.50,211.17 82.00,211.17 86.50,211.17 91.00,211.17 95.50,211.17 100.00,211.17 104.50,211.17 109.00,211.17 113.50,211.17 118.00,211.17 122.50,211.17 127.00,211.17 131.50,211.17 136.00,211.17 140.50,211.17 145.00,211.17 149.50,211.17 154.00,211.17 158.50,211.17 163.00,211.17 167.50,211.17 172.00,211.17 176.50,211.17 181.00,211.17 185.50,211.17 190.00,211.17 194.50,211.17 199.00,211.17 203.50,211.17 208.00,211.17 212.50,211.17 217.00,211.17 221.50,211.17 226.00,211.17 230.50,211.17 235.00,211.17 239.50,211.17 244.00,211.17 248.50,211.17 253.00,211.17 257.50,211.17 262.00,211.17 266.50,211.17 271.00,211.17 275.50,211.17 280.00,211.17 284.50,211.17 289.00,211.17 293.50,211.17 298.00,211.17 302.50,211.17 307.00,211.17 311.50,211.17 316.00,211.17 320.50,211.17 325.00,211.17 329.50,211.17 334.00,211.17 338.50,211.17 343.00,211.17 347.50,211.17 352.00,211.17 356.50,211.17 361.00,211.17 365.50,211.17 370.00,211.17" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01教学网格 · mid结构</p></div><figcaption>接股与未接股两侧的完整财富</figcaption></figure>

现金担保解决接股付款来源，股票归零时账户仍损失9,358. 股票上涨且put未被指派时，账户保留现金和有限权利金收入，未形成目标持股.

<a id="p14-parity"></a>
## 平价与资金占用

在零利率、零分红、相同到期和相同执行价$K$的理想条件下，$C-P=S_0-K$. 因此

$$
S_T-(S_T-K)^+=K-(K-S_T)^+.
$$

这是股票减call与现金减put的终点支付相同. 再把起点成本配齐，就能比较同一财富. PF-GRID-01中的C105是1.57，P105是6.57，满足$1.57-6.57=100-105$. 于是CC105和现金担保P105从12,000出发，所有到期状态的mid财富一致；CSP95则是另一个取得目标，不能拿它冒充同K平价. [^parity]

利息会让“准备到期执行价”与“现在存足执行价”不同. 考虑独立的一期欧式小例：$S_0=100,K=105$，一期现金毛增长倍数$R=1.01$，call价格2. 无分红无费用时，平价给出

$$
P=C-S_0+K/R\approx5.96.
$$

股票减call的初始成本为98，等额的到期现金组合成本为 $105/1.01-P=98$. 若担保规则要求现在留足105，额外占用现金 $105-105/1.01\approx1.04$.

<a id="p14-path"></a>
## 订单、指派与持股路径

另设无费用、无利息路径：D10的95限价单已成交100股，95 put尚未提前指派. 两条路径据此发展到D30：

| D30股价 | 95限价已成交 | CSP95 | D0按100立即买100股 | 持现 |
|---:|---:|---:|---:|---:|
| 70 | 9,500 | 9,642 | 9,000 | 12,000 |
| 110 | 13,500 | 12,142 | 13,000 | 12,000 |

限价成交后已承担股票涨跌；put卖方在反弹路径中可始终持现. 未成交订单可申请撤销，既有short put则通过平仓、到期或履约终止.

提前指派时，若XYZ为75、账户现金12,142，但截止前仅9,000能到达付款账户，则总接股款9,500尚缺500. 按时付款完成后，现金2,642加股票7,500，财富10,142.[^exercise]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P14-lifecycle.svg" alt="期权义务、及时现金和指派交付的三个时点"></div><div class="svg-narrow pfh-native" data-static-figure="P14-lifecycle-mobile.svg"><p class="pfh-figure-title">净取得成本不能替代交割总付款</p><ol class="pfh-flow-steps"><li><strong>D1资金与负债</strong><p>现金12,142</p><p>短put负债142</p><p>接股预留9,500</p><p>净财富12,000</p></li><li><strong>提前指派压力</strong><p>股票当时75</p><p>应付总款9,500</p><p>及时可达9,000</p><p>仍缺500，停止</p></li><li><strong>若及时付款完整</strong><p>现金2,642</p><p>100股×75＝7,500</p><p>完整财富10,142</p><p>不是支付净成本9,358</p></li></ol><p class="pfh-figure-note">相同总资产不代表在相同账户/截止时间可以使用. </p></div><figcaption>期权义务、及时现金和指派交付的三个时点</figcaption></figure>

<a id="p14-lab"></a>
## 交割与平价实验

<div data-experiment-slot="EXP-P14-CASH-SECURED-PUT"></div>

比较终点价下的权利金、接股状态与财富，再将及时可用现金从9,500降到9,000，识别500缺口. 平价对照采用同一执行价105.

<details data-reading-branch="benchmark-put"><summary>选读：PUT现金账户与滚动</summary>

Cboe PUT规则用国库券账户配月度SPX put，净值需要扣除当前短put价值，并规定执行价、到期结算与滚动价格. BXM与PUT的实际执行价和滚动时段并不完全相同，所以理想同K等价不能推出两个指数历史回报逐日相等. [^put]

3.0版§3.1印刷式(4)在零利率时为1，代入式(3)的“1加该值”会使余额翻倍，两式存在口径冲突. 本文利息例采用上面的终点支付推导.

</details>

<a id="p14-exercises"></a>
## 练习与解析

**解释题.** 有人说“put收了142，所以接股只需9,358现金”. 这句话何时是成本简称，何时是危险的付款计划？

**解析.** 9,358为未计费净成本，9,500为交割总款. 142已到账且可用时可作为付款来源；已转走、占用或未结算时按实际可用现金安排.

**迁移题.** 在D10限价已成交、put未指派的路径里，到期110时，为什么不能因CSP仍赚142就说它比限价“多了一笔收入”？

**解析.** 限价路径财富13,500，CSP为12,142，差额1,358来自不同持股路径. 两者均从12,000开始，比较包括股票与现金.

**更新题.** XYZ的重要业务依据在D15失效，但价格仍在100附近，原来愿意95取得股票的判断是否自动继续有效？

**解析.** 取得意愿随经营判断更新，既有履约义务仍存续. 比较继续持有、买回put及其他安排；若另买100股并保留short put，后续指派可使持股增至200股.

[^csp]: OIC，[Cash-Secured Put](https://www.optionseducation.org/strategies/all-strategies/cash-secured-put)，Description、Max Loss、Profit/Loss及Assignment Risk，完整策略正文.
[^t1]: OIC，[The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion)，July 2024，Option Trade Settlement；OCC标准合约按具体交割规则执行.
[^margin]: Cboe，[Strategy-based Margin](https://www.cboe.com/markets/us/options/margin/strategy-based-margin)，Short Put现金账户行及主文.
[^parity]: OIC，[Put/Call Parity](https://www.optionseducation.org/advancedconcepts/put-call-parity)，同标的、执行价和期限条件及利率/分红/提前行权限制；本篇数值与等式为独立教学推导.
[^exercise]: OCC，[ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII印刷55–57页；OIC [Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise)，指派、行权与平仓的完整相应问答.
[^put]: Cboe，[S&P 500 PutWrite Indices Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_SP_500_PutWrite_Indices_Methodology.pdf)，3.0版（2025-08-15），§§1–3的PUT部分；§3.1印刷Page 5／PDF第6页式(3)–(4)不用于利息引擎.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P14-CASH-SECURED-PUT",
    "node_id": "P14",
    "title": "接股义务、平价与资金",
    "anchor": "p14-lab",
    "description": "区分接股总款与有效成本，比较同K平价、限价成交和指派时点.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "terminal_stock": {
        "default": 70,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "view": [
        "mid",
        "execution"
      ],
      "timely_cash": {
        "default": 9000,
        "min": 0,
        "max": 12000,
        "unit": "USD"
      }
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "terminal CSP95 + same-K CC105/CSP105; putAssignment separates gross and reachable cash; limitComparison is imposed fill path.",
    "boundaries": "没有资金不输出已完成股份；不以一次触价推定成交/指派.",
    "views": [
      "接股/不接股财富曲线",
      "总交割款与及时现金/缺口"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/cash-secured-put-funding-and-acquisition/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P14-payoff.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P14-lifecycle.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P14.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P14.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P14.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Cash-Secured Put](https://www.optionseducation.org/strategies/all-strategies/cash-secured-put): 接股意愿与义务、现金保留、未取得股票的机会成本；不把净成本等同总交割款.
- [Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise): 行权、卖出平仓、OCC与清算会员层的exercise-by-exception，以及客户指令分别处理. 股息、时间价值和行权截止安排影响持有人的选择.
- [Strategy-based Margin: Overview of Margin Requirements for Options](https://www.cboe.com/markets/us/options/margin/strategy-based-margin): 短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺.
- [Put/Call Parity](https://www.optionseducation.org/advancedconcepts/put-call-parity): 看涨与看跌期权平价关系中的标的、行权价、期限、资金、分红和行权方式条件；合成组合包含行权价现金腿.
- [Cboe S&P 500 PutWrite Indices Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_SP_500_PutWrite_Indices_Methodology.pdf): 只用PUT国库券+SPX puts结构、执行价/SOQ/roll价格来源与现金减短负债. 印刷§3.1式(3)(4)在USBR=0会使现金倍增，不用作引擎.
- [The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion): 期权成交形成头寸，权利金现金与行权后的股票按交收安排转移. 2024-05-28 起适用的 T+1 周期及转换说明.

## Content relations
```json
[
  {
    "from": "zh-p14",
    "relation": "part_of",
    "to": "portfolio-options",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p14",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p14",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p14",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p14",
    "relation": "uses_method",
    "to": "zh-p13",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p14-goal",
    "relation": "supported_by",
    "to": "PFH-CSP",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "接股意愿与义务、现金保留、净成本与交割款、未取得股票的机会成本."
  },
  {
    "from": "p14-goal",
    "relation": "supported_by",
    "to": "PFH-MARGIN",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "主文; Short Put现金账户行; same-expiry European cash-settled spreads完整段",
    "scope": "短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺."
  },
  {
    "from": "p14-parity",
    "relation": "supported_by",
    "to": "PFH-PARITY",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "平价定义、匹配条件及现实限制完整单元",
    "scope": "同标的/同K/同到期及资金、分红、行权方式条件；独立R=1.01例为本站推导."
  },
  {
    "from": "p14-lab",
    "relation": "supported_by",
    "to": "PFH-PUT-INDEX",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "§§1–3 PUT完整相关单元; §3.1 printed Page5 / PDF p6的式(3)(4)连同不采用说明",
    "scope": "只用PUT国库券+SPX puts结构、执行价/SOQ/roll价格来源与现金减短负债. 印刷§3.1式(3)(4)在USBR=0会使现金倍增，不用作引擎."
  },
  {
    "from": "p14-path",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p14-path",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "行权与平仓问答; 自动处理、提前行权和分红问答",
    "scope": "行权、平仓、成员exercise-by-exception与客户指令分开；股息和时间价值影响选择，但不保证每个客户腿自动执行."
  },
  {
    "from": "p14-goal",
    "relation": "supported_by",
    "to": "PFH-T1",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "全文：Option Trade Settlement及exercise settlement",
    "scope": "仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表."
  },
  {
    "from": "p14-lab",
    "relation": "illustrated_by",
    "to": "EXP-P14-CASH-SECURED-PUT",
    "reason": "区分接股总款与有效成本，比较同K平价、限价成交和指派时点."
  }
]
```

## Related entries
