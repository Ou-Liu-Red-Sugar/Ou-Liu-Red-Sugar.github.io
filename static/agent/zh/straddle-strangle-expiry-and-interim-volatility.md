# P18 跨式与宽跨式：买的是一段时间里的变化，不是一张到期V形图

把到期幅度、期间两侧IV与时间分开，计入真实身份的合成退出报价和费用.

Entry: zh-p18 | Node: P18 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P18《P18 跨式与宽跨式：买的是一段时间里的变化，不是一张到期V形图》. 先确认读者选择的分支. 实际打开required_readings的公开原文，完整读取指定单元和必要表图；记录标题、版本、位置及其支持的具体步骤. optional_readings只有在分支被选择时转为必读. 若只有摘要、目录或访问失败，不能声称完成，也不凭印象补课；可复用本会话已完整读过的相同版本单元并注明.

然后一次给出一项完整诊断任务：从同一691.30入场支出计算第10天S103、IV20%的两腿退出；再比较S100、IV50%. 不逐个考四则运算. 使用本包全文与PF-GRID-01唯一冻结链，先让读者解释关系，再计算，最后使用本篇迁移题. 区分真实契约、模型生成mid、合成执行价和假设事件. 反馈标准：先列两腿bid和两笔退出费，不用到期V图回答期间P&L；短结构买回不足时显示缺口，不能宣布可实施.

每次现金都带账户/时点，无法支付或未给报价时不制造已经完成的结果. 数据没有现实概率，不推断胜率或推荐交易；不访问用户账户. 不更新公司估值、不调用真实订单. 结束时让读者指出改变哪一个条件会改变结论，输出尚未掌握的具体关系. runtime_reading_log按本次实读填写，导出初始为空.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p18",
  "selected_branch": "core",
  "learning_task": "从同一691.30入场支出计算第10天S103、IV20%的两腿退出；再比较S100、IV50%.",
  "required_readings": [
    {
      "source_id": "PFH-STRADDLE",
      "title": "Long Straddle",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/long-straddle",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "同K两腿总权利金、到期幅度与期间IV；下侧盈利受非负股价限制."
      },
      "supports": "同K两腿总权利金、到期幅度与期间IV；下侧盈利受非负股价限制.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-STRANGLE",
      "title": "Long Strangle",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/long-strangle-long-combination",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "不同执行价两边long与更远门槛；不直接提供当前策略优势."
      },
      "supports": "不同执行价两边long与更远门槛；不直接提供当前策略优势.",
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
    }
  ],
  "optional_readings": [
    {
      "source_id": "PFH-CHIFED2025",
      "title": "The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options",
      "authors": [
        "Ian Dew-Becker",
        "Stefano Giglio"
      ],
      "version": "Chicago Fed WP2025-17，2025-09-04",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.1完整数据单元; §4.1与§4.1.1 printed pp28–31 / PDF pp29–32",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "数据/持有规则、标的价格收益分母、风险调整alpha与方差溢价区别；不能转成今天卖期权获利保证，也未复现TRACE/OptionMetrics/CRSP原数据."
      },
      "supports": "数据/持有规则、标的价格收益分母、风险调整alpha与方差溢价区别；不能转成今天卖期权获利保证，也未复现TRACE/OptionMetrics/CRSP原数据.",
      "branch": "risk-premium",
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
          "strike": 100,
          "days": 30,
          "raw_model": 3.4301386438779957,
          "mid": 3.43,
          "bid": 3.41,
          "ask": 3.45
        },
        {
          "kind": "put",
          "strike": 100,
          "days": 30,
          "raw_model": 3.4301386438779957,
          "mid": 3.43,
          "bid": 3.41,
          "ask": 3.45
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
        "long_straddle_100": {
          "shares": 0,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "initial_mid_cash": -343.0,
              "initial_execution_cash_after_fee": -345.65
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "initial_mid_cash": -343.0,
              "initial_execution_cash_after_fee": -345.65
            }
          ],
          "option_cash_mid": -686.0,
          "option_cash_execution": -691.3,
          "cash_after_premium_settlement_mid": 11314.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 21314.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 14314.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11314.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 14314.0
            }
          ]
        },
        "long_strangle_95_105": {
          "shares": 0,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "initial_mid_cash": -157.0,
              "initial_execution_cash_after_fee": -159.65
            }
          ],
          "option_cash_mid": -299.0,
          "option_cash_execution": -304.3,
          "cash_after_premium_settlement_mid": 11701.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 21201.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 14201.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 12201.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11701.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11701.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 11701.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12201.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 14201.0
            }
          ]
        }
      },
      "event_marks": [
        {
          "id": "no_move_iv_down",
          "elapsed_days": 10,
          "spot": 100,
          "volatility": 0.2
        },
        {
          "id": "up_3_percent_iv_down",
          "elapsed_days": 10,
          "spot": 103,
          "volatility": 0.2
        },
        {
          "id": "up_3_percent_same_iv",
          "elapsed_days": 10,
          "spot": 103,
          "volatility": 0.3
        },
        {
          "id": "no_move_iv_up",
          "elapsed_days": 10,
          "spot": 100,
          "volatility": 0.5
        }
      ],
      "event_results": [
        {
          "id": "no_move_iv_down",
          "elapsed_days": 10,
          "spot": 100,
          "volatility": 0.2,
          "entry_execution_cost": 691.3,
          "exit_execution_cash": 368.7,
          "execution_pnl": -322.59999999999997
        },
        {
          "id": "up_3_percent_iv_down",
          "elapsed_days": 10,
          "spot": 103,
          "volatility": 0.2,
          "entry_execution_cost": 691.3,
          "exit_execution_cash": 446.70000000000005,
          "execution_pnl": -244.5999999999999
        },
        {
          "id": "up_3_percent_same_iv",
          "elapsed_days": 10,
          "spot": 103,
          "volatility": 0.3,
          "entry_execution_cost": 691.3,
          "exit_execution_cash": 612.7,
          "execution_pnl": -78.59999999999991
        },
        {
          "id": "no_move_iv_up",
          "elapsed_days": 10,
          "spot": 100,
          "volatility": 0.5,
          "entry_execution_cost": 691.3,
          "exit_execution_cash": 928.7000000000002,
          "execution_pnl": 237.4000000000002
        }
      ],
      "source_corrections": {}
    },
    "default_results": {
      "terminal_straddle": [
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 0,
          "payoffs": [
            0,
            10000
          ],
          "stock_mark": 0,
          "option_payoff": 10000,
          "wealth": 21314,
          "pnl": 9314,
          "return_on_initial": 0.7761666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            0,
            3000
          ],
          "stock_mark": 0,
          "option_payoff": 3000,
          "wealth": 14314,
          "pnl": 2314,
          "return_on_initial": 0.1928333333333334,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 90,
          "payoffs": [
            0,
            1000
          ],
          "stock_mark": 0,
          "option_payoff": 1000,
          "wealth": 12314,
          "pnl": 314,
          "return_on_initial": 0.02616666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 95,
          "payoffs": [
            0,
            500
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 100,
          "payoffs": [
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11314,
          "pnl": -686,
          "return_on_initial": -0.0571666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 105,
          "payoffs": [
            500,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 110,
          "payoffs": [
            1000,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 1000,
          "wealth": 12314,
          "pnl": 314,
          "return_on_initial": 0.02616666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_straddle_100",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -686,
          "opening_fee": 0,
          "cash_after_D1": 11314,
          "option_mark": 686,
          "wealth_at_mid_after_entry": 12000,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            },
            {
              "kind": "put",
              "strike": 100,
              "days": 30,
              "quantity": 1,
              "mid": 3.43,
              "bid": 3.41,
              "ask": 3.45,
              "fill": 3.43,
              "fee": 0,
              "cash": -343
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 130,
          "payoffs": [
            3000,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 3000,
          "wealth": 14314,
          "pnl": 2314,
          "return_on_initial": 0.1928333333333334,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        }
      ],
      "terminal_strangle": [
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 0,
          "payoffs": [
            9500,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 9500,
          "wealth": 21201,
          "pnl": 9201,
          "return_on_initial": 0.76675,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 70,
          "payoffs": [
            2500,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 2500,
          "wealth": 14201,
          "pnl": 2201,
          "return_on_initial": 0.18341666666666656,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 90,
          "payoffs": [
            500,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 12201,
          "pnl": 201,
          "return_on_initial": 0.016750000000000043,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 95,
          "payoffs": [
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11701,
          "pnl": -299,
          "return_on_initial": -0.024916666666666698,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 100,
          "payoffs": [
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11701,
          "pnl": -299,
          "return_on_initial": -0.024916666666666698,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 105,
          "payoffs": [
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11701,
          "pnl": -299,
          "return_on_initial": -0.024916666666666698,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 110,
          "payoffs": [
            0,
            500
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 12201,
          "pnl": 201,
          "return_on_initial": 0.016750000000000043,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "long_strangle_95_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -299,
          "opening_fee": 0,
          "cash_after_D1": 11701,
          "option_mark": 299,
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
              "quantity": 1,
              "mid": 1.57,
              "bid": 1.55,
              "ask": 1.59,
              "fill": 1.57,
              "fee": 0,
              "cash": -157
            }
          ],
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
          "spot": 130,
          "payoffs": [
            0,
            2500
          ],
          "stock_mark": 0,
          "option_payoff": 2500,
          "wealth": 14201,
          "pnl": 2201,
          "return_on_initial": 0.18341666666666656,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        }
      ],
      "events": [
        {
          "s": 100,
          "elapsed": 10,
          "shape": "straddle",
          "side": "long",
          "callIV": 0.2,
          "putIV": 0.2,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 1.8675359337448185,
              "synthetic_mid": 1.87,
              "bid": 1.85,
              "ask": 1.89,
              "exit_price": 1.85,
              "exit_fee": 0.65,
              "exit_cash": 184.35
            },
            {
              "kind": "put",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 1.8675359337448185,
              "synthetic_mid": 1.87,
              "bid": 1.85,
              "ask": 1.89,
              "exit_price": 1.85,
              "exit_fee": 0.65,
              "exit_cash": 184.35
            }
          ],
          "cash_after_D1": 11308.7,
          "entry_net_cash": -691.2999999999993,
          "model_option_mark": 373.5071867489637,
          "marked_wealth": 11682.207186748965,
          "close_cash": 368.7,
          "closed_wealth": 11677.400000000001,
          "closed_pnl": -322.59999999999854,
          "close_available": true,
          "funding_gap": 0,
          "collateral_assessment": "长仓付清premium；行权资金另核."
        },
        {
          "s": 103,
          "elapsed": 10,
          "shape": "straddle",
          "side": "long",
          "callIV": 0.2,
          "putIV": 0.2,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 3.7611981760800575,
              "synthetic_mid": 3.76,
              "bid": 3.74,
              "ask": 3.78,
              "exit_price": 3.74,
              "exit_fee": 0.65,
              "exit_cash": 373.35
            },
            {
              "kind": "put",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 0.7611981760800575,
              "synthetic_mid": 0.76,
              "bid": 0.74,
              "ask": 0.78,
              "exit_price": 0.74,
              "exit_fee": 0.65,
              "exit_cash": 73.35
            }
          ],
          "cash_after_D1": 11308.7,
          "entry_net_cash": -691.2999999999993,
          "model_option_mark": 452.2396352160115,
          "marked_wealth": 11760.939635216013,
          "close_cash": 446.70000000000005,
          "closed_wealth": 11755.400000000001,
          "closed_pnl": -244.59999999999854,
          "close_available": true,
          "funding_gap": 0,
          "collateral_assessment": "长仓付清premium；行权资金另核."
        },
        {
          "s": 103,
          "elapsed": 10,
          "shape": "straddle",
          "side": "long",
          "callIV": 0.3,
          "putIV": 0.3,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 4.591070176216704,
              "synthetic_mid": 4.59,
              "bid": 4.57,
              "ask": 4.61,
              "exit_price": 4.57,
              "exit_fee": 0.65,
              "exit_cash": 456.35
            },
            {
              "kind": "put",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 1.5910701762167037,
              "synthetic_mid": 1.59,
              "bid": 1.57,
              "ask": 1.61,
              "exit_price": 1.57,
              "exit_fee": 0.65,
              "exit_cash": 156.35
            }
          ],
          "cash_after_D1": 11308.7,
          "entry_net_cash": -691.2999999999993,
          "model_option_mark": 618.2140352433407,
          "marked_wealth": 11926.914035243342,
          "close_cash": 612.7,
          "closed_wealth": 11921.400000000001,
          "closed_pnl": -78.59999999999854,
          "close_available": true,
          "funding_gap": 0,
          "collateral_assessment": "长仓付清premium；行权资金另核."
        },
        {
          "s": 100,
          "elapsed": 10,
          "shape": "straddle",
          "side": "long",
          "callIV": 0.5,
          "putIV": 0.5,
          "legs": [
            {
              "kind": "call",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 4.6666024785380245,
              "synthetic_mid": 4.67,
              "bid": 4.65,
              "ask": 4.69,
              "exit_price": 4.65,
              "exit_fee": 0.65,
              "exit_cash": 464.3500000000001
            },
            {
              "kind": "put",
              "strike": 100,
              "entry_price": 3.45,
              "entry_fee": 0.65,
              "entry_cash": -345.65,
              "model_mark": 4.6666024785380245,
              "synthetic_mid": 4.67,
              "bid": 4.65,
              "ask": 4.69,
              "exit_price": 4.65,
              "exit_fee": 0.65,
              "exit_cash": 464.3500000000001
            }
          ],
          "cash_after_D1": 11308.7,
          "entry_net_cash": -691.2999999999993,
          "model_option_mark": 933.3204957076049,
          "marked_wealth": 12242.020495707606,
          "close_cash": 928.7000000000002,
          "closed_wealth": 12237.400000000001,
          "closed_pnl": 237.40000000000146,
          "close_available": true,
          "funding_gap": 0,
          "collateral_assessment": "长仓付清premium；行权资金另核."
        }
      ]
    },
    "input_units_and_bounds": {
      "spot": {
        "default": 103,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "elapsed": {
        "default": 10,
        "min": 0,
        "max": 29,
        "unit": "ACT days"
      },
      "call_iv": {
        "default": 0.2,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "put_iv": {
        "default": 0.2,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "shape": [
        "straddle",
        "strangle"
      ],
      "side": [
        "long",
        "short"
      ]
    },
    "algorithm": "BSM each remaining leg, round synthetic mid to cents, exit longs bid/shorts ask, .65 per leg each transaction.",
    "boundaries": "零bid不虚构成交；IV独立变化只作敏感性；短结构担保未核，不判可实施；买回现金不足停止完成结果.",
    "static_equivalent_markdown": "# P18 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| D10 spot | 两侧IV | 入场执行成本 | 退出净现金 | 损益 |\n|---|---|---|---|---|\n| 100 | 20% | 691.30 | 368.70 | -322.60 |\n| 103 | 20% | 691.30 | 446.70 | -244.60 |\n| 103 | 30% | 691.30 | 612.70 | -78.60 |\n| 100 | 50% | 691.30 | 928.70 | 237.40 |\n\n跨式mid成本686、执行691.30；宽跨式mid299、执行304.30. 到期mid平衡点为93.14/106.86与92.01/107.99. 期间退出另算两腿bid与两笔费；短结构还缺实际担保品规则.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P18-payoff.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P18-interim.svg"
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
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P18.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-21-PFGH-staging-v3",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
有时，我们对一个事件可能推动价格重新定位有判断，却无法确定方向. 买一张call再买一张put，似乎可以让两边都不落空. 但市场也知道未来存在不确定性，两种选择权都要付钱. 真正的问题不是“会不会动”，而是变化的幅度、发生时间及期权重新报价，能否补偿已经支付的成本.

<a id="p18-task"></a>
## 1. 两边都买，为什么不是两边都赢

本篇继续使用PF-GRID-01：XYZ现价100，30天到期，标准未调整合约每张100单位. 跨式买同执行价100的call与put；宽跨式则买95 put与105 call. 两者都只有买方权利，没有卖方指派义务，但若到期行权而保留新股票或空股，风险会改变，不能把买方期权的损失上限延伸到新持仓. [^odd]

为什么同时买两边？价格大涨时call提供支付，价格大跌时put提供支付；不是猜中方向后才补买另一腿. 代价是两份权利金在开始时就付出. OIC与MIT用逐腿相加解释这类组合：方向未定的判断，可以变成到期支付随偏离程度增大的结构，但结构本身不证明期权便宜. [^oic]

从12,000现金起点出发，100C与100P的模型mid均为3.43. 无摩擦对照付686，D1现金11,314，并拥有两张期权. 合成执行层两腿均按ask3.45买入，各付0.65费用，共付691.30，现金11,308.70. 期权按mid标记为686，所以执行后即时净财富11,994.70；这5.30是点差与费用，不是标的下跌.

宽跨式的95P mid1.42、105C mid1.57，mid共付299；按ask1.44与1.59、加两费，执行支出304.30. 它较便宜，是因为把95至105之间的变化留给自己承担，而不是因为找到了同样保护的折扣.

<a id="p18-expiry"></a>
## 2. 到期幅度：先给每一腿支付，再扣总成本

设到期价为$s\ge0$，跨式的每股支付为

$$
(s-100)^++(100-s)^+=|s-100|.
$$

因此mid净损益是$100|s-100|-686$. 令它为零，得$s=93.14$或$106.86$. 执行层只计建仓摩擦、仍按匹配到期支付标记时，门槛变为93.087与106.913；若选择卖期权平仓，还需实际买卖价及退出费，不能套用这两个到期门槛.

宽跨式的mid损益为

$$
100[(95-s)^++(s-105)^+]-299.
$$

95至105之间两腿均无到期支付，损失299. 下方盈亏平衡为$95-2.99=92.01$，上方为$105+2.99=107.99$. 与跨式相比，付出的成本较少，开始赚钱却需要更远的价格移动.

| 到期价 | 跨式mid损益 | 宽跨式mid损益 | 跨式执行层损益 | 宽跨式执行层损益 |
|---:|---:|---:|---:|---:|
| 70 | +2,314 | +2,201 | +2,308.70 | +2,195.70 |
| 95 | −186 | −299 | −191.30 | −304.30 |
| 100 | −686 | −299 | −691.30 | −304.30 |
| 105 | −186 | −299 | −191.30 | −304.30 |
| 110 | +314 | +201 | +308.70 | +195.70 |
| 130 | +2,314 | +2,201 | +2,308.70 | +2,195.70 |

上表损益都以同一12,000现金起点计算，终财富就是12,000加对应损益. 没有把全部账户都花在期权上，也没有将收益除以686后与持股的账户收益率直接比较. 上涨方向的call支付没有有限上界；下跌方向则受$s\ge0$限制，所以“两个方向的盈利都无限”并不成立.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P18-payoff.svg" alt="跨式和宽跨式的到期支付与成本门槛"></div><div class="svg-narrow pfh-native" data-static-figure="P18-payoff-mobile.svg"><p class="pfh-figure-title">到期幅度：跨式较贵，宽跨式需要移动更远</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 100跨式</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. 95/105宽跨式</span></li></ul><p class="pfh-axis-label">纵轴：损益（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">-1,386</span><span style="top:75%">1,464</span><span style="top:50%">4,314</span><span style="top:25%">7,164</span><span style="top:0%">10,014</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,166.05 59.50,169.22 64.00,172.37 68.50,175.53 73.00,178.68 77.50,181.84 82.00,185.00 86.50,188.16 91.00,191.31 95.50,194.47 100.00,197.64 104.50,200.79 109.00,203.95 113.50,207.10 118.00,210.26 122.50,213.42 127.00,216.58 131.50,219.74 136.00,222.89 140.50,226.06 145.00,229.21 149.50,232.37 154.00,235.52 158.50,238.69 163.00,241.84 167.50,245.00 172.00,248.16 176.50,251.31 181.00,254.48 185.50,257.63 190.00,260.79 194.50,263.94 199.00,267.11 203.50,270.26 208.00,273.42 212.50,276.58 217.00,279.74 221.50,282.90 226.00,286.05 230.50,289.21 235.00,292.36 239.50,295.53 244.00,298.69 248.50,301.84 253.00,305.00 257.50,308.16 262.00,311.32 266.50,314.47 271.00,317.63 275.50,320.78 280.00,323.95 284.50,320.78 289.00,317.63 293.50,314.47 298.00,311.32 302.50,308.16 307.00,305.00 311.50,301.84 316.00,298.69 320.50,295.53 325.00,292.36 329.50,289.21 334.00,286.05 338.50,282.90 343.00,279.74 347.50,276.58 352.00,273.42 356.50,270.26 361.00,267.11 365.50,263.94 370.00,260.79" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,167.83 59.50,171.00 64.00,174.15 68.50,177.31 73.00,180.47 77.50,183.62 82.00,186.79 86.50,189.94 91.00,193.10 95.50,196.25 100.00,199.42 104.50,202.58 109.00,205.73 113.50,208.89 118.00,212.05 122.50,215.21 127.00,218.36 131.50,221.52 136.00,224.67 140.50,227.84 145.00,231.00 149.50,234.15 154.00,237.31 158.50,240.47 163.00,243.63 167.50,246.78 172.00,249.94 176.50,253.10 181.00,256.26 185.50,259.42 190.00,262.57 194.50,265.73 199.00,268.89 203.50,272.05 208.00,275.20 212.50,278.36 217.00,281.53 221.50,284.68 226.00,287.84 230.50,290.99 235.00,294.15 239.50,297.31 244.00,300.47 248.50,303.62 253.00,306.78 257.50,309.95 262.00,313.10 266.50,316.26 271.00,317.84 275.50,317.84 280.00,317.84 284.50,317.84 289.00,317.84 293.50,316.26 298.00,313.10 302.50,309.95 307.00,306.78 311.50,303.62 316.00,300.47 320.50,297.31 325.00,294.15 329.50,290.99 334.00,287.84 338.50,284.68 343.00,281.53 347.50,278.36 352.00,275.20 356.50,272.05 361.00,268.89 365.50,265.73 370.00,262.57" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01合成链 · mid结构；非真实行情</p></div><figcaption>跨式和宽跨式的到期支付与成本门槛</figcaption></figure>

<a id="p18-interim"></a>
## 3. 第10天还不是到期日

到期图只依赖$s$，因为那时没有剩余期限. 第10天则还剩20天；即使股价正好100，两张期权也可能有价值. 我们需要重新观察它们的报价，而不是把$|100-100|=0$当作市值.

为把这种依赖算清楚，本实验用无分红、零利率、固定波动率的BSM公式生成条件mark. 令剩余时间$\tau$以ACT/365计、$N$为标准正态分布函数，则

$$
d_1=\frac{\log(S/K)}{\sigma\sqrt{\tau}}
       +\frac{\sigma\sqrt{\tau}}2,
\qquad d_2=d_1-\sigma\sqrt{\tau},
$$

$$
C=S N(d_1)-K N(d_2),\qquad P=C-S+K.
$$

这里的$\sigma$是模型的条件输入；若从真实期权价格倒求它才称隐含波动率. 公式解释给定条件如何对应价格，不证明实际波动恒定，也不替市场决定报价. 风险中性定价概率与我们对事件结果的现实概率不同，不能拿$N(d_2)$或delta直接当策略胜率. [^bsm]

本链的初始ask已固定. 第10天分别代入不同的$S$与$\sigma$，得到新mark；再将每腿mark四舍五入到美分，按减0.02形成合成退出bid，各扣0.65退出费. 以下列出了两腿而非只有组合总价：

| 第10天条件 | call mark / put mark（每股） | 退出call bid / put bid | 两腿退出现金（扣两费） | 相对691.30入场支出 |
|---|---:|---:|---:|---:|
| $S=100,\sigma=20\%$ | 1.86754 / 1.86754 | 1.85 / 1.85 | 368.70 | −322.60 |
| $S=103,\sigma=20\%$ | 3.76120 / 0.76120 | 3.74 / 0.74 | 446.70 | −244.60 |
| $S=103,\sigma=30\%$ | 4.59107 / 1.59107 | 4.57 / 1.57 | 612.70 | −78.60 |
| $S=100,\sigma=50\%$ | 4.66660 / 4.66660 | 4.65 / 4.65 | 928.70 | +237.40 |

第二行中，call涨到了3.76左右，但put跌至0.76左右；只看赚钱的call会丢掉另一笔支出. 股价已经涨3%，组合仍亏244.60. 第四行则没有现价变动，却因条件波动率上升而在合成退出报价下盈利. 它们说明**幅度、时间与重新定价可以相互抵消**，不是“有事件就买两边”的证据.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P18-interim.svg" alt="同一入场成本下，第10天四种条件的两腿价值和净退出结果"></div><div class="svg-narrow pfh-native" data-static-figure="P18-interim-mobile.svg"><p class="pfh-figure-title">同一691.30执行入场成本，第10天退出结果</p><p class="pfh-figure-note">单位：美元. 条长比较绝对值. </p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">S100 / IV20%：退出现金</span><div class="pfh-cash-reading"><strong>368.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:39.7015%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S103 / IV20%：退出现金</span><div class="pfh-cash-reading"><strong>446.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:48.1007%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S103 / IV30%：退出现金</span><div class="pfh-cash-reading"><strong>612.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:65.9739%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">S100 / IV50%：退出现金</span><div class="pfh-cash-reading"><strong>928.70</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">入场：两腿ask＋两费</span><div class="pfh-cash-reading"><strong>691.30</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:74.4366%"></span></div></li></ul><p class="pfh-figure-note">退出现金已扣每腿0.65；这些是模型派生合成报价，不是行情. </p></div><figcaption>同一入场成本下，第10天四种条件的两腿价值和净退出结果</figcaption></figure>

实验允许call与put使用不同的条件IV，便于看两侧报价的作用；这是敏感性切片，不保证任意独立输入共同组成无套利市场. 默认四个情景使用同一侧别无差异的波动率. 若合成bid降至零，页面不会假装存在一个可立即卖出的零价买盘，而会保留mark并报告未给可执行退出价.

<a id="p18-short"></a>
## 4. 卖出两边：不是把长仓风险简单反号

若把两腿反向卖出，匹配到期支付的符号确实反转，但资金条件没有因此反转. 卖100C与100P按bid3.41收682，扣建仓两费后净收680.70；账户现金12,680.70，同时负有两张期权的义务. 涨到很高时短call损失无界；跌到零时短put也可能要求10,000接股款.

期间IV上升会提高买回成本，并可能提高券商要求的担保品. 本实验没有任何具体券商的保证金时间表，因此短跨式只是高级对照：可以计算两腿条件负债与买回现金，但不能凭现金显示为正就判定可实施. 若买回成本超过已列现金，必须显示资金缺口，不生成“已平仓的负现金账户”. 关于多腿和卖方额外保证金风险，应回到ODD而不是从长仓最大损失类推. [^odd]

<details data-reading-branch="risk-premium"><summary>选读：历史期权收益，为什么还要区分溢价与alpha</summary>

Dew-Becker与Giglio的2025年Chicago Fed工作论文比较长期合成期权和实际交易期权. 采用的实际数据包括1987–1995年CME与1996–2022年SPX资料，收益口径按标的价格而非期权权利金归一，且讨论了滚动风险调整后的表现. 其§4.1与§4.1.1显示不同阶段的alpha表现有显著差别；不能将其简化成“所有方差风险溢价已经消失”. 本篇借此提醒：卖期权收取的补偿、承担的系统风险和扣除风险暴露后的alpha并非同一对象. 这里未复现原始数据，也不由该结果判断当前合成链有超额收益. [^research]

</details>

<a id="p18-lab"></a>
## 5. 操作、解释与迁移

<div data-experiment-slot="EXP-P18-VOLATILITY"></div>

先在到期视角比较两个结构的门槛；再进入第10天，将现价固定103，只改波动率20%与30%. 把两腿退出价、两笔退出费及最终现金完整写出. 最后固定现价100，将IV改50%，说明为什么到期V形图不能直接解释这个时点.

**解释题.** 股价涨3%，为什么跨式仍亏244.60？

**解析.** 初始两腿共付691.30，而第10天给定IV20%时，call与put的合成bid分别3.74与0.74. 退出收到$374+74-1.30=446.70$，差额−244.60. 较低IV与剩余时间缩短压低了总期权价值；call本身上涨不能弥补全部成本. 这是给定情景的账，不是对现实事件的预测.

**迁移题.** 同样到期110，宽跨式更便宜，是否一定赚得更多？比较两结构的执行层收益.

**解析.** 跨式支付1,000，减691.30得308.70；宽跨式只由105C支付500，减304.30得195.70. 便宜的结构同时让出了95至105的支付区域，因此不能只按入场价格排序. 若以12,000为共同财富，终值分别12,308.70和12,195.70.

**资金题.** 短跨式条件市值亏损已大于12,000，但有人说“到期还没到，不必处理”. 这个结论缺了什么？

**解析.** 它把到期支付与期间融资混在一起. 卖方可能先遇到担保品追加、买回资金不足或指派，这些都有各自的截止时间. 缺少具体券商规则时，只能确认条件负债、已列资金和未核约束，不能据此判断账户可以继续；尚未取得的融资也不能进入现金账.

[^oic]: OIC，[Long Straddle](https://www.optionseducation.org/strategies/all-strategies/long-straddle)与[Long Strangle](https://www.optionseducation.org/strategies/all-strategies/long-strangle-long-combination)，完整策略正文；MIT [Options lecture](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf)，slide 13. 来源支持腿结构，数值为PF-GRID-01教学链.
[^bsm]: Leonid Kogan，MIT [Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)，Fall 2010，slides 16–21：模型市场、复制及公式. 此处仅使用无分红零利率特例.
[^odd]: OCC，[Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII、IX与Chapter X holder/writer及Other Risks item 1；到期后的股票、多腿独立性与卖方资金义务.
[^research]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，WP2025-17，2025-09-04；§3.1（数据与收益分母）、§4.1/4.1.1（滚动时期与风险调整），非全文计量复现.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P18-VOLATILITY",
    "node_id": "P18",
    "title": "幅度门槛与期间重新报价",
    "anchor": "p18-lab",
    "description": "把到期幅度、期间两侧IV与时间分开，计入真实身份的合成退出报价和费用.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "spot": {
        "default": 103,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "elapsed": {
        "default": 10,
        "min": 0,
        "max": 29,
        "unit": "ACT days"
      },
      "call_iv": {
        "default": 0.2,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "put_iv": {
        "default": 0.2,
        "min": 0.05,
        "max": 1.5,
        "unit": "annual volatility"
      },
      "shape": [
        "straddle",
        "strangle"
      ],
      "side": [
        "long",
        "short"
      ]
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "BSM each remaining leg, round synthetic mid to cents, exit longs bid/shorts ask, .65 per leg each transaction.",
    "boundaries": "零bid不虚构成交；IV独立变化只作敏感性；短结构担保未核，不判可实施；买回现金不足停止完成结果.",
    "views": [
      "到期损益与门槛",
      "当前两腿mark、退出bid/ask与全现金"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/straddle-strangle-expiry-and-interim-volatility/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P18-payoff.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P18-interim.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P18.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P18.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P18.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en): 数据/持有规则、标的价格收益分母、风险调整alpha与方差溢价区别；不能转成今天卖期权获利保证，也未复现TRACE/OptionMetrics/CRSP原数据.

M-E/F/G 本批采用：区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型.

本批读取范围：滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率.

M-E/F/G 本批采用：常参数、无股息模型条件下价格/偏导与Q；本批数值只采用q=0版本，不把非零股息扩展归给该读取单元；不宣称完整连续时间定理证明.
- [Long Straddle](https://www.optionseducation.org/strategies/all-strategies/long-straddle): 同K两腿总权利金、到期幅度与期间IV；下侧盈利受非负股价限制.
- [Long Strangle](https://www.optionseducation.org/strategies/all-strategies/long-strangle-long-combination): 不同执行价两边long与更远门槛；不直接提供当前策略优势.

## Content relations
```json
[
  {
    "from": "zh-p18",
    "relation": "part_of",
    "to": "portfolio-options",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p18",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p18",
    "relation": "uses_method",
    "to": "zh-p03",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p18-task",
    "relation": "supported_by",
    "to": "PFH-STRADDLE",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "同K两腿总权利金、到期幅度与期间IV；下侧盈利受非负股价限制."
  },
  {
    "from": "p18-expiry",
    "relation": "supported_by",
    "to": "PFH-STRANGLE",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "不同执行价两边long与更远门槛；不直接提供当前策略优势."
  },
  {
    "from": "p18-interim",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Slides 16–21完整BSM建模与公式单元",
    "scope": "无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率."
  },
  {
    "from": "p18-short",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p18-short",
    "relation": "supported_by",
    "to": "PFH-CHIFED2025",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "§3.1完整数据单元; §4.1与§4.1.1 printed pp28–31 / PDF pp29–32",
    "scope": "数据/持有规则、标的价格收益分母、风险调整alpha与方差溢价区别；不能转成今天卖期权获利保证，也未复现TRACE/OptionMetrics/CRSP原数据."
  },
  {
    "from": "p18-lab",
    "relation": "illustrated_by",
    "to": "EXP-P18-VOLATILITY",
    "reason": "把到期幅度、期间两侧IV与时间分开，计入真实身份的合成退出报价和费用."
  }
]
```

## Related entries
