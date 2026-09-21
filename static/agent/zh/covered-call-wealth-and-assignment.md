# P13 备兑看涨：收到权利金，也卖出了一段上行

从已有股票出发，重建权利金、负债、封顶收益和股息指派后的完整账户.

Entry: zh-p13 | Node: P13 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P13《P13 备兑看涨：收到权利金，也卖出了一段上行》. 先确认读者选择的分支. 实际打开required_readings的公开原文，完整读取指定单元和必要表图；记录标题、版本、位置及其支持的具体步骤. optional_readings只有在分支被选择时转为必读. 若只有摘要、目录或访问失败，不能声称完成，也不凭印象补课；可复用本会话已完整读过的相同版本单元并注明.

然后一次给出一项完整诊断任务：从已有100股和2000现金开始，先比较到期70和130，再盘点109除息前发生指派的完整账户. 不逐个考四则运算. 使用本包全文与PF-GRID-01唯一冻结链，先让读者解释关系，再计算，最后使用本篇迁移题. 区分真实契约、模型生成mid、合成执行价和假设事件. 反馈标准：确认没有二次买股扣款、premium与负债同时出现、交付后股票为0，并同时处理108除息价与100股息.

每次现金都带账户/时点，无法支付或未给报价时不制造已经完成的结果. 数据没有现实概率，不推断胜率或推荐交易；不访问用户账户. 不更新公司估值、不调用真实订单. 结束时让读者指出改变哪一个条件会改变结论，输出尚未掌握的具体关系. runtime_reading_log按本次实读填写，导出初始为空.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p13",
  "selected_branch": "core",
  "learning_task": "从已有100股和2000现金开始，先比较到期70和130，再盘点109除息前发生指派的完整账户.",
  "required_readings": [
    {
      "source_id": "PFH-CC",
      "title": "Covered Call (Buy/Write)",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/covered-call-buy-write",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "股票下行仍在、call交付义务与上行让渡；不采用无条件“没有额外风险”措辞或旧Monday通知时点."
      },
      "supports": "股票下行仍在、call交付义务与上行让渡；不采用无条件“没有额外风险”措辞或旧Monday通知时点.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-ETF",
      "title": "ETF Options Product Specifications",
      "authors": [
        "OCC"
      ],
      "version": "现行公开规格；读取2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.theocc.com/clearance-and-settlement/clearing/etf-options",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Unit of Trade; Exercise Style; Exercise Settlement Time",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "未调整标准合约通常100股、American exercise与T+1实物交割；调整系列另核."
      },
      "supports": "未调整标准合约通常100股、American exercise与T+1实物交割；调整系列另核.",
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
      "source_id": "PFH-BXM",
      "title": "Cboe BuyWrite Indices Methodology",
      "authors": [
        "Cboe Global Indices"
      ],
      "version": "v6.0，2026-05-11",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Cboe_BuyWrite_Indices_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§1–2 BXM相关行; §3.1 BXM非滚动/滚动规则，PDF p9",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "BXM结构、股息/权利金再投资、执行价与SOQ/VWAP滚动、短期权负债. 只用规则，不复现指数绩效."
      },
      "supports": "BXM结构、股息/权利金再投资、执行价与SOQ/VWAP滚动、短期权负债. 只用规则，不复现指数绩效.",
      "branch": "benchmark-bxm",
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
        }
      },
      "lifecycle_cases": {
        "covered_call_early_assignment": {
          "strike": 105,
          "spot_before_ex_dividend": 109,
          "stylized_cash_dividend_per_share": 1,
          "event": "early assignment imposed on D10, not predicted"
        }
      },
      "source_corrections": {
        "OIC_legacy_assignment_notice_wording": {
          "status": "do_not_adopt_exact_Monday_notice_wording_as_current_lifecycle_rule",
          "use": "use current OCC ODD/T+1 contract mechanics; broker/customer exercise cutoffs remain broker-specific"
        }
      }
    },
    "default_results": {
      "terminal": [
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
          "spot": 0,
          "payoffs": [
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 2157,
          "pnl": -9843,
          "return_on_initial": -0.82025,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 90,
          "payoffs": [
            0
          ],
          "stock_mark": 9000,
          "option_payoff": 0,
          "wealth": 11157,
          "pnl": -843,
          "return_on_initial": -0.07025000000000003,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 95,
          "payoffs": [
            0
          ],
          "stock_mark": 9500,
          "option_payoff": 0,
          "wealth": 11657,
          "pnl": -343,
          "return_on_initial": -0.028583333333333294,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 100,
          "payoffs": [
            0
          ],
          "stock_mark": 10000,
          "option_payoff": 0,
          "wealth": 12157,
          "pnl": 157,
          "return_on_initial": 0.013083333333333336,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 105,
          "payoffs": [
            0
          ],
          "stock_mark": 10500,
          "option_payoff": 0,
          "wealth": 12657,
          "pnl": 657,
          "return_on_initial": 0.054750000000000076,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 110,
          "payoffs": [
            -500
          ],
          "stock_mark": 11000,
          "option_payoff": -500,
          "wealth": 12657,
          "pnl": 657,
          "return_on_initial": 0.054750000000000076,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
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
          "spot": 130,
          "payoffs": [
            -2500
          ],
          "stock_mark": 13000,
          "option_payoff": -2500,
          "wealth": 12657,
          "pnl": 657,
          "return_on_initial": 0.054750000000000076,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        }
      ],
      "entry_execution": {
        "id": "covered_call_105",
        "view": "execution",
        "origin": "existing",
        "initial_wealth": 12000,
        "initial_shares": 100,
        "initial_cash": 2000,
        "stock_delta": 0,
        "stock_trade_cash": 0,
        "stock_spread": 0,
        "shares": 100,
        "option_cash": 154.35,
        "opening_fee": 0.65,
        "cash_after_D1": 2154.35,
        "option_mark": -157,
        "wealth_at_mid_after_entry": 11997.35,
        "legs": [
          {
            "kind": "call",
            "strike": 105,
            "days": 30,
            "quantity": -1,
            "mid": 1.57,
            "bid": 1.55,
            "ask": 1.59,
            "fill": 1.55,
            "fee": 0.65,
            "cash": 154.35
          }
        ],
        "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金.",
        "spot": 0,
        "payoffs": [
          0
        ],
        "stock_mark": 0,
        "option_payoff": 0,
        "wealth": 2154.35,
        "pnl": -9845.65,
        "return_on_initial": -0.8204708333333334,
        "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
      },
      "assignment": {
        "entry": {
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
          "settlement_note": "D0形成仓位与应收应付；D1教学营业日完成权利金/初始股票转换现金."
        },
        "assigned": true,
        "shares_after": 0,
        "delivery_shares": 100,
        "cash_receivable": 10500,
        "cash_after_settlement": 12657,
        "dividend_received": 0,
        "remaining_put": 0,
        "remaining_put_value": 0,
        "hold_comparator": {
          "ex_price": 108,
          "shares": 100,
          "cash": 2100,
          "wealth": 12900
        },
        "pre_ex_spot": 109,
        "dividend_per_share": 1,
        "wealth": 12657,
        "note": "单独施加D10指派及随后1美元除息分支；108除息股价与100现金股息一起计. 剩余put的报价未给，不用零代替."
      }
    },
    "input_units_and_bounds": {
      "terminal_stock": {
        "default": 100,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "view": [
        "mid",
        "execution"
      ],
      "branch": [
        "expiry",
        "early-assignment"
      ]
    },
    "algorithm": "entry -> terminal/expiryHoldings; early-assignment uses separately imposed event and ex-dividend comparator.",
    "boundaries": "已有100股不重复买入；恰K按非行权演示不预测指派；未知后续报价不补造.",
    "static_equivalent_markdown": "# P13 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| 终点股价 | mid财富 | 执行层财富 | mid损益 |\n|---|---|---|---|\n| 0.00 | 2,157.00 | 2,154.35 | -9,843.00 |\n| 70.00 | 9,157.00 | 9,154.35 | -2,843.00 |\n| 90.00 | 11,157.00 | 11,154.35 | -843.00 |\n| 95.00 | 11,657.00 | 11,654.35 | -343.00 |\n| 100.00 | 12,157.00 | 12,154.35 | 157.00 |\n| 105.00 | 12,657.00 | 12,654.35 | 657.00 |\n| 110.00 | 12,657.00 | 12,654.35 | 657.00 |\n| 130.00 | 12,657.00 | 12,654.35 | 657.00 |\n\nD1原有100股不再买入；mid现金2157、短call负债157. 提前指派后现金12657、股票0；只持股除息对照为100×108＋2000＋100股息＝12900.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P13-payoff.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P13-lifecycle.svg"
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
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P13.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-21-PFGH-staging-v3",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
这一篇从已经持有的股票出发. 我们要完成的不是“找一张权利金高的 call”，而是判断：愿不愿意在约定期限内，按照指定价格交出这些股票？读完后，你应能把股票、短 call、现金和指派放回同一张账，并说清备兑与直接减持的区别.

<a id="p13-objective"></a>
## 1. 先问愿意交出什么，再看能收到多少

设我们已经持有100股教学标的XYZ，现价100美元，另有现金2,000美元. 今天的共同财富为12,000美元. 我们仍愿意承担股票的日常涨跌，但未来30天若能按105卖出，愿意接受这个结果. 由此才考虑卖出一张执行价105的看涨期权：对方获得买入100股的选择权，我们承担被指派时交付100股的义务. 现有股票能够用于交付，因此称为**备兑看涨**；同时买股票和卖call的建立方式常称buy-write. [^cc]

选择权不是免费的附赠品. 上涨时，对方可以要求执行约定价格；下跌时，对方可以不行权，把股票下跌留给我们. 权利金补偿的是这种不对称权利，而不是把股票风险取消了. 市场中的期权价格由交易形成；计算模型只是在给定条件下计算一个价格参照.

本篇采用PF-GRID-01合成链：未调整标准合约每张对应100股，主例30天，利率和分红均设为零. 105 call的模型生成中间价为1.57，合成买价/卖价为1.55/1.59，交易费每张每次0.65美元. 这些价格与费用是教学输入，不是XYZ真实挂牌系列或券商报价. 美式实物合约、100股单位和行权后T+1交割的规则身份来自OCC；调整合约必须另核交付物. [^terms]

<a id="p13-ledger"></a>
## 2. 现金增加，不等于净财富立刻增加

先用中间价看结构. 卖call形成157美元权利金应收，同时产生价值157美元的短期权负债. 已有股票没有再买一次，不能从现金中又扣10,000美元.

| 账户项目（美元，股数另列） | 建立前 | 按mid建立后 |
|---|---:|---:|
| 股票股数 | 100 | 100 |
| 股票市值 | 10,000 | 10,000 |
| 现金及结算后权利金 | 2,000 | 2,157 |
| 短call价值 | 0 | −157 |
| 净财富 | 12,000 | 12,000 |

教学时钟把成交记作D0、现金结算记作下一营业日D1. D0已经有短call，157却仍可能是应收而非可转出的现金. 期权仓位建立与权利金现金结算不是同一件事；这里沿用OIC对T+1的说明. D0、D30及其下一编号日在本例被设为营业日，不是在描述某个真实节假日日历. [^t1]

换到合成执行层，我们是卖方，收取bid而不是mid：$100\times1.55-0.65=154.35$. D1现金成为2,154.35；按mid标记的短负债仍是157，净财富为11,997.35. 少掉的2.65是价差让价与费用，不是一个新的风险预测. 后面“mid结构”和“执行层”始终分别列示；默认到期财富还没有另扣最终卖股、行权或指派费及税.

<a id="p13-payoff"></a>
## 3. 逐腿相加，封顶是怎样出现的

记到期股价为$s$，并记$x^+=\max(x,0)$. 若没有提前指派，股票加短call的到期经济价值为$100s-100(s-105)^+$，再加账上现金，得到

$$
W_T=2157+100s-100(s-105)^+.
$$

当$s\le105$，call没有正的到期支付，组合仍随股票每上涨1美元增加100美元. 超过105后，股票每增加100美元，短call支付也增加100美元，两者正好抵消. 因此

$$
W_T=2157+100\min(s,105).
$$

这是终点财富恒等式，不是宣称实物交割一定自动完成. 按严格价内call指派、平价call不指派的教学分支，$s<105$时我们仍有股票，$s>105$时交出股票、收到10,500现金. 恰在105附近的实际指令和指派结果仍需确认；两种结果当时的经济价值相同，往后的敞口却不同.

| 到期XYZ股价 | 只持股财富 | 备兑mid财富 | 备兑执行层财富 | mid备兑相对只持股 |
|---:|---:|---:|---:|---:|
| 0 | 2,000 | 2,157 | 2,154.35 | +157 |
| 70 | 9,000 | 9,157 | 9,154.35 | +157 |
| 100 | 12,000 | 12,157 | 12,154.35 | +157 |
| 105 | 12,500 | 12,657 | 12,654.35 | +157 |
| 130 | 15,000 | 12,657 | 12,654.35 | −2,343 |

所以“收到157”并不等于“亏损最多157”. 股票归零时，mid组合损失9,843美元；最大到期盈利则为657美元. 未计费的下侧盈亏平衡股价是98.43，而不是105. 105是交付约定，98.43是特定成本口径下的盈亏分界，两者回答不同问题.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P13-payoff.svg" alt="共同财富曲线：股票与备兑在105以上分开"></div><div class="svg-narrow pfh-native" data-static-figure="P13-payoff-mobile.svg"><p class="pfh-figure-title">备兑：下跌区间仍有股票，上涨区间封顶</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. 持有100股</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. CC105</span></li></ul><p class="pfh-axis-label">纵轴：共同财富（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:7"><div class="pfh-y-ticks"><span style="top:100%">1,020</span><span style="top:75%">5,010</span><span style="top:50%">9,000</span><span style="top:25%">12,990</span><span style="top:0%">16,980</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,323.95 59.50,321.69 64.00,319.43 68.50,317.18 73.00,314.93 77.50,312.67 82.00,310.41 86.50,308.16 91.00,305.90 95.50,303.65 100.00,301.39 104.50,299.14 109.00,296.88 113.50,294.62 118.00,292.36 122.50,290.12 127.00,287.86 131.50,285.60 136.00,283.34 140.50,281.09 145.00,278.83 149.50,276.58 154.00,274.33 158.50,272.07 163.00,269.81 167.50,267.55 172.00,265.30 176.50,263.05 181.00,260.79 185.50,258.53 190.00,256.28 194.50,254.02 199.00,251.76 203.50,249.51 208.00,247.26 212.50,245.00 217.00,242.74 221.50,240.49 226.00,238.24 230.50,235.98 235.00,233.72 239.50,231.47 244.00,229.21 248.50,226.95 253.00,224.70 257.50,222.45 262.00,220.19 266.50,217.93 271.00,215.67 275.50,213.42 280.00,211.17 284.50,208.91 289.00,206.66 293.50,204.40 298.00,202.14 302.50,199.88 307.00,197.64 311.50,195.38 316.00,193.12 320.50,190.86 325.00,188.61 329.50,186.35 334.00,184.10 338.50,181.84 343.00,179.59 347.50,177.33 352.00,175.07 356.50,172.82 361.00,170.57 365.50,168.31 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,322.18 59.50,319.92 64.00,317.66 68.50,315.41 73.00,313.16 77.50,310.90 82.00,308.64 86.50,306.38 91.00,304.13 95.50,301.88 100.00,299.62 104.50,297.37 109.00,295.11 113.50,292.85 118.00,290.59 122.50,288.35 127.00,286.09 131.50,283.83 136.00,281.57 140.50,279.32 145.00,277.06 149.50,274.81 154.00,272.55 158.50,270.30 163.00,268.04 167.50,265.78 172.00,263.53 176.50,261.28 181.00,259.02 185.50,256.76 190.00,254.51 194.50,252.25 199.00,250.00 203.50,247.74 208.00,245.49 212.50,243.23 217.00,240.97 221.50,238.71 226.00,236.47 230.50,234.21 235.00,231.95 239.50,229.70 244.00,227.44 248.50,225.18 253.00,222.93 257.50,220.68 262.00,218.42 266.50,216.16 271.00,213.90 275.50,211.65 280.00,209.40 284.50,207.14 289.00,204.88 293.50,203.76 298.00,203.76 302.50,203.76 307.00,203.76 311.50,203.76 316.00,203.76 320.50,203.76 325.00,203.76 329.50,203.76 334.00,203.76 338.50,203.76 343.00,203.76 347.50,203.76 352.00,203.76 356.50,203.76 361.00,203.76 365.50,203.76 370.00,203.76" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01合成链 · mid结构；非真实行情</p></div><figcaption>共同财富曲线：股票与备兑在105以上分开</figcaption></figure>

图中到期曲线的斜率变化，比“收益增强”四个字更有用. 卖掉50股并持现，整个价格区间的股票敏感度都减半；备兑在明显下跌区间仍保留100股敏感度，只得到有限权利金缓冲. 两者不能因为都降低某些情景损失，就当作同一种对冲.

<a id="p13-lifecycle"></a>
## 4. 股息与提前指派：需要再画一条时间线

现在单独施加一个不同于零分红主例的事件：D10发生提前指派，随后每股除息1美元；除息前教学股价109，除息后按108作纯会计对照. 这里把提前指派直接作为已发生的路径条件，而不是从价内程度推断其必然发生.

备兑持有人交付100股，在交割完成后有现金$2157+10500=12657$，不再持股，也不取得这次股息. 只持股的对照则是100股按108计值，加原现金2,000和股息100，共12,900. 股息若尚未支付，应先列应收，到实际付款才成为可用现金.

不能把对照股票继续按109估值，再额外加100股息；那会凭空制造一份财富. 也不能只说“备兑少拿100股息”，因为两条路线的股票出售价格本来就不同. 此处两者相差243，是整份账户比较的结果.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P13-lifecycle.svg" alt="持股、短call、现金与除息事件的顺序"></div><div class="svg-narrow pfh-native" data-static-figure="P13-lifecycle-mobile.svg"><p class="pfh-figure-title">不是少算一次股息，而是完整账户发生变化</p><ol class="pfh-flow-steps"><li><strong>D0→D1</strong><p>已有100股</p><p>现金2,000 → 2,157</p><p>短call负债157</p><p>净财富仍12,000</p></li><li><strong>D10指派（施加）</strong><p>交出100股</p><p>应收10,500</p><p>交割后现金12,657</p><p>不再拥有股票</p></li><li><strong>除息对照</strong><p>只持股：109 → 108</p><p>100股×108＋现金2,000</p><p>另有股息100</p><p>完整财富12,900</p></li></ol><p class="pfh-figure-note">指派与分红为独立教学事件；股息应收与已到账现金另区分. </p></div><figcaption>持股、短call、现金与除息事件的顺序</figcaption></figure>

如果原计划并不愿失去股票，就要在卖出前处理这个冲突，而不是指派后把它解释成意外. 平仓短call需要实际买回价格，可能高于最初收到的权利金；直接卖掉股票而保留短call，又会让原来的覆盖消失. OCC的多腿风险说明强调，一腿关闭不会替另一腿自动作出决定. [^odd]

<a id="p13-lab"></a>
## 5. 操作：先预测曲线，再查看账户

<div data-experiment-slot="EXP-P13-COVERED-CALL"></div>

先把终点价依次设为70、105、130，分别写下“到期财富”和“期权处理后仍持有多少股”. 再切换mid与执行层：你应当看到固定的2.65美元建立成本差，而不是封顶执行价也跟着改变. 最后选择提前指派分支，核对除息后的108和100美元股息是否同时进入对照.

<details data-reading-branch="benchmark-bxm"><summary>选读：真实BXM规则怎样把备兑写成一项基准</summary>

Cboe BuyWrite方法文件6.0版（2026-05-11修订）的BXM，以S&P 500敞口配月度call，并明确执行价选择、到期SOQ与新call滚动的VWAP时段，股息和权利金在规则中再投资. 非滚动日计算也扣除当前短call负债，而不把所有权利金直接称收益. 它说明一项真实基准需要多少时间和估值约定；并不说明任何客户都能按该基准成交. 我们本篇的XYZ既不是BXM，也没有复现BXM历史回报. [^bxm]

</details>

<a id="p13-exercises"></a>
## 6. 解释与迁移

**解释题.** XYZ跌到70时，call到期没有价值. 有人说“期权赚157，所以这次策略成功”. 这句话漏了什么？

**解析.** 它只观察了短call单腿. 股票亏3,000，期权的157只是缓冲，整份mid账户从12,000降到9,157，净亏2,843. 策略是否符合原目标还取决于原先愿承受多少下行；单腿到期赚钱不能证明整体达到目标.

**迁移题.** 若原股票很早以前买在60，现在100，备兑到130时应该用60还是100衡量今天的决策？

**解析.** 历史累计盈亏可以保留60的成本，但“今天备兑还是继续持有”要从今天相同的12,000财富比较. 只持股到130为15,000，备兑为12,657，机会差额2,343不因原成本低而消失. 低成本解释历史赚了多少，不能替今天卖出上行辩护.

**生命周期题.** 股票被call走后又继续上涨，我们能否继续把图上的封顶线称为账户从此永远封顶？

**解析.** 不能. 图只描述这份30天合同及指定持有安排. 指派后我们持有现金；再买股票、换标的或重新卖期权都是新的决策，须有新的现金与风险账. 相反，到期没有指派而仍持股，则30天之后恢复完整股票风险，不能把旧call的边界延长下去.

[^cc]: OIC，[Covered Call](https://www.optionseducation.org/strategies/all-strategies/covered-call-buy-write)，Description、Variations、Max Loss/Gain、Assignment Risk完整单元；2026-09-21核用. 来源支持结构与义务，本篇数字为PF-GRID-01推导.
[^terms]: OCC，[ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，Unit of Trade、Exercise Style、Exercise Settlement Time，2026-09-21读取.
[^t1]: OIC，[The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion)，July 2024，Option Trade Settlement及exercise settlement正文.
[^odd]: OCC，[Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII印刷55–57页、Chapter X Other Risks第1项印刷67–68页. 客户指令和通知时点不由本例假定.
[^bxm]: Cboe，[BuyWrite Indices Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_BuyWrite_Indices_Methodology.pdf)，6.0版，§§1–2及§3.1的BXM部分；只采用结构、定价与滚动规则.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P13-COVERED-CALL",
    "node_id": "P13",
    "title": "备兑财富与交付",
    "anchor": "p13-lab",
    "description": "从已有股票出发，重建权利金、负债、封顶收益和股息指派后的完整账户.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "terminal_stock": {
        "default": 100,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "view": [
        "mid",
        "execution"
      ],
      "branch": [
        "expiry",
        "early-assignment"
      ]
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "entry -> terminal/expiryHoldings; early-assignment uses separately imposed event and ex-dividend comparator.",
    "boundaries": "已有100股不重复买入；恰K按非行权演示不预测指派；未知后续报价不补造.",
    "views": [
      "到期财富线",
      "股票、现金、短义务与除息时点"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/covered-call-wealth-and-assignment/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P13-payoff.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P13-lifecycle.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P13.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P13.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P13.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Cboe BuyWrite Indices Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_BuyWrite_Indices_Methodology.pdf): BXM结构、股息/权利金再投资、执行价与SOQ/VWAP滚动、短期权负债. 只用规则，不复现指数绩效.
- [Covered Call (Buy/Write)](https://www.optionseducation.org/strategies/all-strategies/covered-call-buy-write): 股票下行仍在、call交付义务与上行让渡；不采用无条件“没有额外风险”措辞或旧Monday通知时点.
- [ETF Options Product Specifications](https://www.theocc.com/clearance-and-settlement/clearing/etf-options): 未调整标准合约通常100股、American exercise与T+1实物交割；调整系列另核.

M-E/F/G 本批采用：ETF份额期权的单位、实物交付与行权；不把同类产品的保证金百分比概括为统一数值.
- [The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion): 仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表.

M-E/F/G 本批采用：期权成交头寸记账、权利金现金和行权股票交收时间有别；2024-05-28转换.

## Content relations
```json
[
  {
    "from": "zh-p13",
    "relation": "part_of",
    "to": "portfolio-options",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p13",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p13",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p13",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p13-objective",
    "relation": "supported_by",
    "to": "PFH-CC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "股票下行仍在、call交付义务与上行让渡；不采用无条件“没有额外风险”措辞或旧Monday通知时点."
  },
  {
    "from": "p13-objective",
    "relation": "supported_by",
    "to": "PFH-ETF",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Unit of Trade; Exercise Style; Exercise Settlement Time",
    "scope": "未调整标准合约通常100股、American exercise与T+1实物交割；调整系列另核."
  },
  {
    "from": "p13-ledger",
    "relation": "supported_by",
    "to": "PFH-T1",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "全文：Option Trade Settlement及exercise settlement",
    "scope": "仓位形成与权利金现金结算不同；行权后股票交割T+1. 不是通用客户通知截止表."
  },
  {
    "from": "p13-lifecycle",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p13-lab",
    "relation": "supported_by",
    "to": "PFH-BXM",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "§§1–2 BXM相关行; §3.1 BXM非滚动/滚动规则，PDF p9",
    "scope": "BXM结构、股息/权利金再投资、执行价与SOQ/VWAP滚动、短期权负债. 只用规则，不复现指数绩效."
  },
  {
    "from": "p13-lab",
    "relation": "illustrated_by",
    "to": "EXP-P13-COVERED-CALL",
    "reason": "从已有股票出发，重建权利金、负债、封顶收益和股息指派后的完整账户."
  }
]
```

## Related entries
