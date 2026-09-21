# 对冲目标与风险单位

先定义终点下限、保留上行与付款时间，再判断候选对冲是否满足同一任务.

Entry: zh-p10 | Node: P10 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 按11,300全价格下限及高价区上涨斜率100检验候选集合，再改下限11,400. 使用同一PF-GRID-01冻结教学网格，对比mid与合成执行费用. 区分D20付款和D30保护；期限研究分支读取AQR指定正文、脚注及附录. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p10",
  "selected_branch": "core",
  "learning_task": "按11,300全价格下限及高价区上涨斜率100检验候选集合，再改下限11,400. 使用同一PF-GRID-01冻结教学网格，对比mid与合成执行费用. 区分D20付款和D30保护；期限研究分支读取AQR指定正文、脚注及附录.",
  "required_readings": [
    {
      "source_id": "PFH-MIT-OPTIONS",
      "title": "15.401 Finance Theory I: Lecture 10–11, Options",
      "authors": [
        "Andrew W. Lo / MIT OCW"
      ],
      "version": "Fall 2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Slides 10–13完整策略组合单元",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "逐腿相加的保护、价差和跨式支付；不承担现行结算规则."
      },
      "supports": "逐腿相加的保护、价差和跨式支付；不承担现行结算规则.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-PP",
      "title": "Protective Put (Married Put)",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/protective-put-married-put",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "股票+long put的指定期限保护、权利金代价与退出方式；不是永久净财富保证."
      },
      "supports": "股票+long put的指定期限保护、权利金代价与退出方式；不是永久净财富保证.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-COLLAR",
      "title": "Collar (Protective Collar)",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/collar-protective-collar",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "三腿结构、floor/cap与指派. 紧凑最大损失横幅的debit/credit符号不采用，逐腿重建."
      },
      "supports": "三腿结构、floor/cap与指派. 紧凑最大损失横幅的debit/credit符号不采用，逐腿重建.",
      "editorial_correction": "紧凑最大损失横幅debit/credit符号不采用；以逐腿现金及详细Max Loss条件重建.",
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
    }
  ],
  "optional_readings": [
    {
      "source_id": "PFH-AQR2021",
      "title": "Portfolio Protection? It’s a Long (Term) Story…",
      "authors": [
        "Nicholas McQuinn",
        "Ashwin Thapar",
        "Dan Villalon"
      ],
      "version": "Journal of Portfolio Management 47(3)，February 2021",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/Portfolio-Protection-Its-a-Long-Term-Story.pdf?sc_lang=en",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "printed pp5–6 / PDF pp7–8 Options-Based Hedging完整节、footnote6、Exhibit3; printed p14 / PDF p16 option data appendix",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "只采用保护期限/重设执行价机制与研究口径. 研究是单位名义纯put而非本篇股票+put，1996-01-05至2020-03-31、季度重设、费用前；不宣称普遍劣势或数据复现."
      },
      "supports": "只采用保护期限/重设执行价机制与研究口径. 研究是单位名义纯put而非本篇股票+put，1996-01-05至2020-03-31、季度重设、费用前；不宣称普遍劣势或数据复现.",
      "branch": "horizon-research",
      "activate_when": "只有选择该分支时转为必读；未选不考对应题目.",
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
        "half_stock": {
          "shares": 50,
          "legs": [],
          "option_cash_mid": 0,
          "option_cash_execution": 0,
          "cash_after_premium_settlement_mid": 7000,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 7000
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 10500
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11500
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11750
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12250
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12500
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 13500
            }
          ]
        },
        "cash": {
          "shares": 0,
          "legs": [],
          "option_cash_mid": 0,
          "option_cash_execution": 0,
          "cash_after_premium_settlement_mid": 12000,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12000
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12000
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
        },
        "protective_put_95": {
          "shares": 100,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": 1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "initial_mid_cash": -142.0,
              "initial_execution_cash_after_fee": -144.65
            }
          ],
          "option_cash_mid": -142.0,
          "option_cash_execution": -144.65,
          "cash_after_premium_settlement_mid": 1858.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 11358.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 11358.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11358.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11358.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11858.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12358.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12858.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 14858.0
            }
          ]
        },
        "collar_95_105": {
          "shares": 100,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": 1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "initial_mid_cash": -142.0,
              "initial_execution_cash_after_fee": -144.65
            },
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
          "option_cash_mid": 15.0,
          "option_cash_execution": 9.699999999999989,
          "cash_after_premium_settlement_mid": 2015.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 11515.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 11515.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11515.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11515.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 12015.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12515.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12515.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12515.0
            }
          ]
        }
      },
      "source_corrections": {}
    },
    "default_results": {
      "target": [
        {
          "id": "hold",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 100,
          "option_cash": 0,
          "opening_fee": 0,
          "cash_after_D1": 2000,
          "option_mark": 0,
          "wealth_at_mid_after_entry": 12000,
          "legs": [],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [],
          "stock_mark": 7000,
          "option_payoff": 0,
          "wealth": 9000,
          "pnl": -3000,
          "return_on_initial": -0.25,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 2000,
          "high_upside_fraction": 1,
          "meets_floor": false,
          "meets_upside": true,
          "qualifies": false
        },
        {
          "id": "half_stock",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": -50,
          "stock_trade_cash": 5000,
          "stock_spread": 0,
          "shares": 50,
          "option_cash": 0,
          "opening_fee": 0,
          "cash_after_D1": 7000,
          "option_mark": 0,
          "wealth_at_mid_after_entry": 12000,
          "legs": [],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [],
          "stock_mark": 3500,
          "option_payoff": 0,
          "wealth": 10500,
          "pnl": -1500,
          "return_on_initial": -0.125,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 7000,
          "high_upside_fraction": 0.5,
          "meets_floor": false,
          "meets_upside": false,
          "qualifies": false
        },
        {
          "id": "cash",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": -100,
          "stock_trade_cash": 10000,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": 0,
          "opening_fee": 0,
          "cash_after_D1": 12000,
          "option_mark": 0,
          "wealth_at_mid_after_entry": 12000,
          "legs": [],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 12000,
          "pnl": 0,
          "return_on_initial": 0,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 12000,
          "high_upside_fraction": 0,
          "meets_floor": true,
          "meets_upside": false,
          "qualifies": false
        },
        {
          "id": "covered_call_105",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 100,
          "option_cash": 157,
          "opening_fee": 0,
          "cash_after_D1": 2157,
          "option_mark": -157,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 105,
              "days": 30,
              "quantity": -1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": 157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            0
          ],
          "stock_mark": 7000,
          "option_payoff": 0,
          "wealth": 9157,
          "pnl": -2843,
          "return_on_initial": -0.23691666666666666,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 2157,
          "high_upside_fraction": 0,
          "meets_floor": false,
          "meets_upside": false,
          "qualifies": false
        },
        {
          "id": "protective_put_95",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 100,
          "option_cash": -142,
          "opening_fee": 0,
          "cash_after_D1": 1858,
          "option_mark": 142,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": 1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": -142
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            2500
          ],
          "stock_mark": 7000,
          "option_payoff": 2500,
          "wealth": 11358,
          "pnl": -642,
          "return_on_initial": -0.05349999999999999,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 11358,
          "high_upside_fraction": 1,
          "meets_floor": true,
          "meets_upside": true,
          "qualifies": true
        },
        {
          "id": "collar_95_105",
          "view": "mid",
          "origin": "existing",
          "initial_wealth": 12000,
          "initial_shares": 100,
          "initial_cash": 2000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 100,
          "option_cash": 15,
          "opening_fee": 0,
          "cash_after_D1": 2015,
          "option_mark": -15,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "put",
              "strike": 95,
              "days": 30,
              "quantity": 1,
              "mid": 1.42,
              "bid": 1.4,
              "ask": 1.44,
              "fill": 1.42,
              "fee": 0,
              "cash": -142
            },
            {
              "kind": "call",
              "strike": 105,
              "days": 30,
              "quantity": -1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": 157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            2500,
            0
          ],
          "stock_mark": 7000,
          "option_payoff": 2500,
          "wealth": 11515,
          "pnl": -485,
          "return_on_initial": -0.040416666666666656,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税.",
          "floor": 11515,
          "high_upside_fraction": 0,
          "meets_floor": true,
          "meets_upside": false,
          "qualifies": false
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
      "floor": {
        "default": 11300,
        "min": 0,
        "max": 12000,
        "unit": "USD"
      },
      "upside": {
        "default": 1,
        "min": 0,
        "max": 1,
        "unit": "fraction"
      },
      "view": [
        "mid",
        "execution"
      ]
    },
    "algorithm": "For each of six candidates compute all-price floor and high-price slope; take intersection, then show selected stress wealth.",
    "boundaries": "无概率或最优组合宣称；一组任务可以没有可行候选；截止现金另核.",
    "static_equivalent_markdown": "# P10 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| 动作 | D1现金 | 全价格下限 | 高价上涨比例 | 符合11300＋100%任务 |\n|---|---|---|---|---|\n| hold | 2,000.00 | 2,000.00 | 100% | 否 |\n| half_stock | 7,000.00 | 7,000.00 | 50% | 否 |\n| cash | 12,000.00 | 12,000.00 | 0% | 否 |\n| covered_call_105 | 2,157.00 | 2,157.00 | 0% | 否 |\n| protective_put_95 | 1,858.00 | 11,358.00 | 100% | 是 |\n| collar_95_105 | 2,015.00 | 11,515.00 | 0% | 否 |\n\n这一默认任务仅95 put通过. 把下限改11400又要求全部高价上涨，则候选集合为空. D20付款不是这张D30财富表已经解决的问题.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P10-payoff.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P10-funding.svg"
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
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P10.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-22-deep-review",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
买put、卖call、做空期货与减仓改变的风险单位、期限和现金要求不同. 先写明要保留的上涨暴露、要限制的损失区间与付款时点，再比较工具.

<a id="p10-contract"></a>
## 对冲任务

设持有100股XYZ，现价100美元，另有2,000现金，总财富12,000. 保护期30天，要求限制下跌损失并保留高价区上涨收益.

固定任务为：**在D30的闭合支付比较中，财富不低于11,300；在股价已远高于105的区域，每上涨1美元仍保留100美元增值.** 这是本例的输入约束.

闭合支付将各腿在同一终点的经济价值相加；实际可转出现金另取决于出售、履约与结算日期. 对冲任务据此分别规定数量、价格区间、期限及现金要求.[^mit]

<span id="EXP-OPTIONS-01"></span>

<a id="p10-candidates"></a>
## 候选动作与支付

PF-GRID-01为30天、标准100股单位、零利率零分红的BSM教学报价网格. 95 put mid为1.42，105 call mid为1.57；合成执行层买ask、卖bid，每张每次费用0.65，股票半点差0.02.

只持股保留所有上涨，也承担股票归零的风险. 卖掉一半则立即把持股变为50股，现金增为7,000；下跌敏感度和上涨敏感度一起减半. 全卖后财富成为现金12,000，价格风险退出，但也没有股票上涨收益.

买一张95 put保留100股，同时取得按95出售的选择权. 其mid现金降为1,858，低于95的到期股票损失被put逐步抵消. 再卖一张105 call可收157，为put提供资金；但这时增加了一项按105交股的义务，保护的下限与上涨的上限同时出现. OIC对保护性put和领口的讨论，分别对应“花钱保留上行”和“让出上行支付保护成本”两种目的. [^protect]

| 动作（均从同一已有100股出发） | D1 mid现金 | D30股价0的财富 | 股价70的财富 | 股价130的财富 |
|---|---:|---:|---:|---:|
| 不调整 | 2,000 | 2,000 | 9,000 | 15,000 |
| 卖50股持现 | 7,000 | 7,000 | 10,500 | 13,500 |
| 全部转现金 | 12,000 | 12,000 | 12,000 | 12,000 |
| 备兑105 call | 2,157 | 2,157 | 9,157 | 12,657 |
| 100股＋95 put | 1,858 | 11,358 | 11,358 | 14,858 |
| 95/105领口 | 2,015 | 11,515 | 11,515 | 12,515 |

在合成执行层，从原持仓卖50股收4,999，全卖收9,998；买put净支出144.65，领口净收9.70. 这些现金由股票转换或期权交易产生，原股票价值已计入初始12,000财富.

<a id="p10-constraints"></a>
## 全价格下限与上行斜率

设动作$a$在价格$s$的终点财富为$W_a(s)$. 这里的下限要求是

$$
\inf_{s\ge0} W_a(s)\ge11300.
$$

我们的上涨要求，则可以用高价区间每股上涨的保留比例来表达：持100股时斜率为100；半仓为50；现金和封顶后的领口为0. 对本例，要求高价区间斜率不小于100.

按这两个条件检验，持股、半仓和备兑不满足下限；全现金与领口满足下限，却不保留所要求的大涨收益；保护性put同时满足两项，因此在本例给定任务与候选集合中留下一个可行选择. 若允许放弃105以上上涨，领口也进入集合；若只要求终点财富下限、不要求股票上行，全现金同样符合.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P10-payoff.svg" alt="同一原始财富下，各种对冲改变了哪一段价格暴露"></div><div class="svg-narrow pfh-native" data-static-figure="P10-payoff-mobile.svg"><p class="pfh-figure-title">同一12,000财富，不同动作保留不同风险</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 50股＋现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. 全部现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#32765a" stroke-width="3" stroke-dasharray="7 4"/></svg><span>4. CC105</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#9b4c61" stroke-width="3"/></svg><span>5. 95保护put</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#77716a" stroke-width="3" stroke-dasharray="7 4"/></svg><span>6. 95/105领口</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,267.55 59.50,266.42 64.00,265.30 68.50,264.18 73.00,263.05 77.50,261.92 82.00,260.79 86.50,259.66 91.00,258.53 95.50,257.41 100.00,256.28 104.50,255.15 109.00,254.02 113.50,252.89 118.00,251.76 122.50,250.64 127.00,249.51 131.50,248.39 136.00,247.26 140.50,246.13 145.00,245.00 149.50,243.87 154.00,242.74 158.50,241.61 163.00,240.49 167.50,239.36 172.00,238.24 176.50,237.11 181.00,235.98 185.50,234.85 190.00,233.72 194.50,232.59 199.00,231.47 203.50,230.34 208.00,229.21 212.50,228.08 217.00,226.95 221.50,225.82 226.00,224.70 230.50,223.58 235.00,222.45 239.50,221.32 244.00,220.19 248.50,219.06 253.00,217.93 257.50,216.80 262.00,215.67 266.50,214.55 271.00,213.42 275.50,212.29 280.00,211.17 284.50,210.04 289.00,208.91 293.50,207.78 298.00,206.66 302.50,205.53 307.00,204.40 311.50,203.27 316.00,202.14 320.50,201.01 325.00,199.88 329.50,198.75 334.00,197.64 338.50,196.51 343.00,195.38 347.50,194.25 352.00,193.12 356.50,191.99 361.00,190.86 365.50,189.74 370.00,188.61" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,211.17 59.50,211.17 64.00,211.17 68.50,211.17 73.00,211.17 77.50,211.17 82.00,211.17 86.50,211.17 91.00,211.17 95.50,211.17 100.00,211.17 104.50,211.17 109.00,211.17 113.50,211.17 118.00,211.17 122.50,211.17 127.00,211.17 131.50,211.17 136.00,211.17 140.50,211.17 145.00,211.17 149.50,211.17 154.00,211.17 158.50,211.17 163.00,211.17 167.50,211.17 172.00,211.17 176.50,211.17 181.00,211.17 185.50,211.17 190.00,211.17 194.50,211.17 199.00,211.17 203.50,211.17 208.00,211.17 212.50,211.17 217.00,211.17 221.50,211.17 226.00,211.17 230.50,211.17 235.00,211.17 239.50,211.17 244.00,211.17 248.50,211.17 253.00,211.17 257.50,211.17 262.00,211.17 266.50,211.17 271.00,211.17 275.50,211.17 280.00,211.17 284.50,211.17 289.00,211.17 293.50,211.17 298.00,211.17 302.50,211.17 307.00,211.17 311.50,211.17 316.00,211.17 320.50,211.17 325.00,211.17 329.50,211.17 334.00,211.17 338.50,211.17 343.00,211.17 347.50,211.17 352.00,211.17 356.50,211.17 361.00,211.17 365.50,211.17 370.00,211.17" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,322.18 59.50,319.92 64.00,317.66 68.50,315.41 73.00,313.16 77.50,310.90 82.00,308.64 86.50,306.38 91.00,304.13 95.50,301.88 100.00,299.62 104.50,297.37 109.00,295.11 113.50,292.85 118.00,290.59 122.50,288.35 127.00,286.09 131.50,283.83 136.00,281.57 140.50,279.32 145.00,277.06 149.50,274.81 154.00,272.55 158.50,270.30 163.00,268.04 167.50,265.78 172.00,263.53 176.50,261.28 181.00,259.02 185.50,256.76 190.00,254.51 194.50,252.25 199.00,250.00 203.50,247.74 208.00,245.49 212.50,243.23 217.00,240.97 221.50,238.71 226.00,236.47 230.50,234.21 235.00,231.95 239.50,229.70 244.00,227.44 248.50,225.18 253.00,222.93 257.50,220.68 262.00,218.42 266.50,216.16 271.00,213.90 275.50,211.65 280.00,209.40 284.50,207.14 289.00,204.88 293.50,203.76 298.00,203.76 302.50,203.76 307.00,203.76 311.50,203.76 316.00,203.76 320.50,203.76 325.00,203.76 329.50,203.76 334.00,203.76 338.50,203.76 343.00,203.76 347.50,203.76 352.00,203.76 356.50,203.76 361.00,203.76 365.50,203.76 370.00,203.76" fill="none" stroke="#32765a" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,218.41 59.50,218.41 64.00,218.41 68.50,218.41 73.00,218.41 77.50,218.41 82.00,218.41 86.50,218.41 91.00,218.41 95.50,218.41 100.00,218.41 104.50,218.41 109.00,218.41 113.50,218.41 118.00,218.41 122.50,218.41 127.00,218.41 131.50,218.41 136.00,218.41 140.50,218.41 145.00,218.41 149.50,218.41 154.00,218.41 158.50,218.41 163.00,218.41 167.50,218.41 172.00,218.41 176.50,218.41 181.00,218.41 185.50,218.41 190.00,218.41 194.50,218.41 199.00,218.41 203.50,218.41 208.00,218.41 212.50,218.41 217.00,218.41 221.50,218.41 226.00,218.41 230.50,218.41 235.00,218.41 239.50,218.41 244.00,218.41 248.50,218.41 253.00,218.41 257.50,218.41 262.00,218.41 266.50,218.41 271.00,217.28 275.50,215.02 280.00,212.77 284.50,210.51 289.00,208.25 293.50,206.00 298.00,203.75 302.50,201.49 307.00,199.23 311.50,196.97 316.00,194.73 320.50,192.47 325.00,190.21 329.50,187.95 334.00,185.70 338.50,183.44 343.00,181.19 347.50,178.94 352.00,176.68 356.50,174.42 361.00,172.16 365.50,169.91 370.00,167.66" fill="none" stroke="#9b4c61" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,216.64 59.50,216.64 64.00,216.64 68.50,216.64 73.00,216.64 77.50,216.64 82.00,216.64 86.50,216.64 91.00,216.64 95.50,216.64 100.00,216.64 104.50,216.64 109.00,216.64 113.50,216.64 118.00,216.64 122.50,216.64 127.00,216.64 131.50,216.64 136.00,216.64 140.50,216.64 145.00,216.64 149.50,216.64 154.00,216.64 158.50,216.64 163.00,216.64 167.50,216.64 172.00,216.64 176.50,216.64 181.00,216.64 185.50,216.64 190.00,216.64 194.50,216.64 199.00,216.64 203.50,216.64 208.00,216.64 212.50,216.64 217.00,216.64 221.50,216.64 226.00,216.64 230.50,216.64 235.00,216.64 239.50,216.64 244.00,216.64 248.50,216.64 253.00,216.64 257.50,216.64 262.00,216.64 266.50,216.64 271.00,215.51 275.50,213.25 280.00,210.99 284.50,208.74 289.00,206.49 293.50,205.36 298.00,205.36 302.50,205.36 307.00,205.36 311.50,205.36 316.00,205.36 320.50,205.36 325.00,205.36 329.50,205.36 334.00,205.36 338.50,205.36 343.00,205.36 347.50,205.36 352.00,205.36 356.50,205.36 361.00,205.36 365.50,205.36 370.00,205.36" fill="none" stroke="#77716a" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01合成链 · mid结构；非真实行情</p></div><figcaption>同一原始财富下，各种对冲改变了哪一段价格暴露</figcaption></figure>

压力点与全价格区间的要求不同：半仓在股价70时较原持股少亏1,500，股价归零时仍只剩7,000，未满足11,300的全区间下限.

<a id="p10-time"></a>
## 保护期限与付款日期

若改为D20必须支付9,500现金，需要确定股票与put的出售、行权或融资安排，采用D20报价、费用、结算日及账户资金. D30到期财富下限无法决定这条提前付款路径.[^odd]

指数期货主要改变与指数共同波动的敞口；个股事件可能使股票与指数偏离. 数量计算因此需要相应风险单位、期限和基差假设，逐日结算另进入现金计划.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P10-funding.svg" alt="终点保护与中途现金任务不是同一个轴"></div><div class="svg-narrow pfh-native" data-static-figure="P10-funding-mobile.svg"><p class="pfh-figure-title">先定义风险单位，再定义现金时点</p><ol class="pfh-flow-steps"><li><strong>今天：原敞口</strong><p>100股×100＋现金2,000</p><p>选择减持/put/领口</p><p>持股数量会不同</p><p>权利金不是保证金</p></li><li><strong>D20：现金任务</strong><p>股票市值≠现金</p><p>期权mark≠已成交款</p><p>要核账户与截止</p><p>付款路径必须另列</p></li><li><strong>D30：终点保护</strong><p>要求财富≥11,300</p><p>还要求保留全部高价上涨</p><p>本例只有95 put通过</p><p>不等于D20一定可付款</p></li></ol><p class="pfh-figure-note">高价斜率、全价格下限和及时现金，是三个不同约束. </p></div><figcaption>终点保护与中途现金任务不是同一个轴</figcaption></figure>

保护期延长时重新决定是否续保；出售原股票后，保留的put变为独立方向仓位；为支付而减仓时，也重新计算剩余保护结构.

<a id="p10-lab"></a>
## 对冲约束实验

<div data-experiment-slot="EXP-P10-HEDGE-TARGET"></div>

把终点财富下限11,300和高价区上涨比例100%作为两条独立约束，逐项标出各动作失败的约束；再把上涨比例改为0%比较可行集合，并在合成执行层计入股票转换与期权交易成本.

<details data-reading-branch="horizon-research"><summary>保护期限与重置〔选读〕</summary>

McQuinn、Thapar和Villalon（2021）指出，保护期限与期权到期不一致会产生路径依赖；脚注6用季度重置的10% OTM put说明，重复重设执行价并不等于跨季度保持同一10%保护. 其附录的单位名义敞口、季度到期和费用口径决定这一结论的适用范围. [^aqr]

</details>

<a id="p10-exercises"></a>
## 练习与解析

**解释题.** 在股价70的表中，半仓比备兑财富更高，是否可以据此说半仓全面优于备兑？

**解析.** 股价100时，mid半仓财富12,000，备兑12,157，排序与70时不同. 两者均未满足11,300的全价格下限，应按给定任务比较.

**迁移题.** 把目标改为“D30至少11,400，且仍保留100%的高价区上涨”，现有候选中还有可行结构吗？

**解析.** 可行集合为空. 95 put的mid下限11,358低于11,400，执行费用进一步降低下限；领口和现金缺少要求的高价区上涨，其他候选下限不足.

**现金迁移题.** D20有付款义务，D30 put仍有效. 还需要哪些信息判断付款可行性？

**解析.** 需要变现动作及报价、费用、履约和交割时间、付款账户可用余额，并据此计算剩余持仓和按期现金.

[^mit]: Andrew W. Lo，MIT [15.401 Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)，Fall 2008，slides 10–13；
[^protect]: OIC，[Protective Put](https://www.optionseducation.org/strategies/all-strategies/protective-put-married-put) 与 [Collar](https://www.optionseducation.org/strategies/all-strategies/collar-protective-collar)，完整结构、目的与到期风险单元. 具体本篇比较为合成教学推导.
[^odd]: OCC，[ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapters VIII–IX与Other Risks item 1；履约、保证金及多腿风险分别处理.
[^aqr]: McQuinn、Thapar、Villalon，[Portfolio Protection? It's a Long (Term) Story…](https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/Portfolio-Protection-Its-a-Long-Term-Story.pdf?sc_lang=en)，Journal of Portfolio Management，February 2021；印刷5–6页含脚注6、Exhibit 3，附录印刷14页数据定义.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P10-HEDGE-TARGET",
    "node_id": "P10",
    "title": "风险单位与可行集合",
    "anchor": "p10-lab",
    "description": "先定义终点下限、保留上行与付款时间，再判断候选对冲是否满足同一任务.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "terminal_stock": {
        "default": 70,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "floor": {
        "default": 11300,
        "min": 0,
        "max": 12000,
        "unit": "USD"
      },
      "upside": {
        "default": 1,
        "min": 0,
        "max": 1,
        "unit": "fraction"
      },
      "view": [
        "mid",
        "execution"
      ]
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "For each of six candidates compute all-price floor and high-price slope; take intersection, then show selected stress wealth.",
    "boundaries": "无概率或最优组合宣称；一组任务可以没有可行候选；截止现金另核.",
    "views": [
      "六条共同财富线",
      "下限/上涨比例/实际建仓现金矩阵"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/hedge-objective-and-tool-choice/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P10-payoff.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P10-funding.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P10.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P10.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P10.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Portfolio Protection? It’s a Long (Term) Story…](https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/Portfolio-Protection-Its-a-Long-Term-Story.pdf?sc_lang=en): 研究1996-01-05至2020-03-31的单位名义看跌期权，采用季度重设、费用前口径，分析保护期限和执行价重设对结果的影响.
- [Collar (Protective Collar)](https://www.optionseducation.org/strategies/all-strategies/collar-protective-collar): 领口的股票、看跌多头和看涨空头三腿结构，以及到期所得上下限和指派安排. 净权利金按各腿付款与收款相加.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 保护性组合、价差与跨式的逐腿支付，以及模型内的经济复制和定价. 现金账户的增长因子按讲义定义使用.
- [Protective Put (Married Put)](https://www.optionseducation.org/strategies/all-strategies/protective-put-married-put): 持股加看跌期权在指定期限内的保护范围、权利金成本与退出方式.

## Content relations
```json
[
  {
    "from": "zh-p10",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p10",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p10",
    "relation": "uses_method",
    "to": "zh-p03",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p10",
    "relation": "uses_method",
    "to": "zh-p06",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p10",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p10",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p10-contract",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Slides 10–13完整策略组合单元",
    "scope": "逐腿相加的保护、价差和跨式支付；不承担现行结算规则."
  },
  {
    "from": "p10-candidates",
    "relation": "supported_by",
    "to": "PFH-PP",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "股票+long put的指定期限保护、权利金代价与退出方式；不是永久净财富保证."
  },
  {
    "from": "p10-candidates",
    "relation": "supported_by",
    "to": "PFH-COLLAR",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "三腿结构、floor/cap与指派. 紧凑最大损失横幅的debit/credit符号不采用，逐腿重建."
  },
  {
    "from": "p10-time",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p10-lab",
    "relation": "supported_by",
    "to": "PFH-AQR2021",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "printed pp5–6 / PDF pp7–8 Options-Based Hedging完整节、footnote6、Exhibit3; printed p14 / PDF p16 option data appendix",
    "scope": "保护期限与重设执行价机制. 研究采用单位名义纯put，样本1996-01-05至2020-03-31，季度重设、费用前；本文持有股票与put的组合."
  },
  {
    "from": "p10-lab",
    "relation": "illustrated_by",
    "to": "EXP-P10-HEDGE-TARGET",
    "reason": "先定义终点下限、保留上行与付款时间，再判断候选对冲是否满足同一任务."
  }
]
```

## Related entries
