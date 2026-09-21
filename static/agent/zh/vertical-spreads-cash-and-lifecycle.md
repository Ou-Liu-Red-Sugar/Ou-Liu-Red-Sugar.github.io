# P17 垂直价差：有限到期支付，不等于没有过程资金问题

重建借方/贷方同到期支付、状态相关theta和行权后股票资金压力.

Entry: zh-p17 | Node: P17 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P17《P17 垂直价差：有限到期支付，不等于没有过程资金问题》. 先确认读者选择的分支. 实际打开required_readings的公开原文，完整读取指定单元和必要表图；记录标题、版本、位置及其支持的具体步骤. optional_readings只有在分支被选择时转为必读. 若只有摘要、目录或访问失败，不能声称完成，也不凭印象补课；可复用本会话已完整读过的相同版本单元并注明.

然后一次给出一项完整诊断任务：分别计算100/105 call debit和put credit，再处理104.99到期后1000与12000钱包. 不逐个考四则运算. 使用本包全文与PF-GRID-01唯一冻结链，先让读者解释关系，再计算，最后使用本篇迁移题. 区分真实契约、模型生成mid、合成执行价和假设事件. 反馈标准：两边同时入账、theta按状态变化；9186资金缺口停止完成路径，后续股价80属于新股仓而非旧payoff失效.

每次现金都带账户/时点，无法支付或未给报价时不制造已经完成的结果. 数据没有现实概率，不推断胜率或推荐交易；不访问用户账户. 不更新公司估值、不调用真实订单. 结束时让读者指出改变哪一个条件会改变结论，输出尚未掌握的具体关系. runtime_reading_log按本次实读填写，导出初始为空.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p17",
  "selected_branch": "core",
  "learning_task": "分别计算100/105 call debit和put credit，再处理104.99到期后1000与12000钱包.",
  "required_readings": [
    {
      "source_id": "PFH-CALL-SPREAD",
      "title": "Bull Call Spread",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/bull-call-spread-debit-call-spread",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "同到期call价差、资金与指派差异；不采用恒负theta或long leg必自动行权说法."
      },
      "supports": "同到期call价差、资金与指派差异；不采用恒负theta或long leg必自动行权说法.",
      "editorial_correction": "策略名称不决定净theta符号；本包有95/103/110同参数一天变化反例. 旧Monday通知语句不作为当前客户时点.",
      "fallback_source_ids": []
    },
    {
      "source_id": "PFH-PUT-SPREAD",
      "title": "Bull Put Spread",
      "authors": [
        "Options Industry Council"
      ],
      "version": "未署年月网页；2026-09-21核用",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/strategies/all-strategies/bull-put-spread-credit-put-spread",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Description至Comments/Related Position的完整策略主文",
        "scope": "完整读取上述具名单元及必要表图、脚注，不以搜索节选或摘要替代.",
        "purpose": "put credit价差、匹配到期边界；不采用恒正theta或客户固定Monday通知."
      },
      "supports": "put credit价差、匹配到期边界；不采用恒正theta或客户固定Monday通知.",
      "editorial_correction": "策略名称不决定净theta符号；本包有95/103/110同参数一天变化反例. 旧Monday通知语句不作为当前客户时点.",
      "fallback_source_ids": []
    },
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
    }
  ],
  "optional_readings": [
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
      "branch": "cash-index",
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
        "bull_call_100_105": {
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
          "option_cash_mid": -186.0,
          "option_cash_execution": -191.29999999999998,
          "cash_after_premium_settlement_mid": 11814.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12314.0
            }
          ]
        },
        "bull_put_100_105": {
          "shares": 0,
          "legs": [
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
            },
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
          "option_cash_mid": 314.0,
          "option_cash_execution": 308.70000000000005,
          "cash_after_premium_settlement_mid": 12314.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11814.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 12314.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 12314.0
            }
          ]
        },
        "bear_put_95_100": {
          "shares": 0,
          "legs": [
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
            },
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
          "option_cash_mid": -201.0,
          "option_cash_execution": -206.29999999999998,
          "cash_after_premium_settlement_mid": 11799.0,
          "terminal_mid": [
            {
              "spot": 0,
              "terminal_wealth_mid": 12299.0
            },
            {
              "spot": 70,
              "terminal_wealth_mid": 12299.0
            },
            {
              "spot": 90,
              "terminal_wealth_mid": 12299.0
            },
            {
              "spot": 95,
              "terminal_wealth_mid": 12299.0
            },
            {
              "spot": 100,
              "terminal_wealth_mid": 11799.0
            },
            {
              "spot": 105,
              "terminal_wealth_mid": 11799.0
            },
            {
              "spot": 110,
              "terminal_wealth_mid": 11799.0
            },
            {
              "spot": 130,
              "terminal_wealth_mid": 11799.0
            }
          ]
        }
      },
      "lifecycle_cases": {
        "vertical_expiration_mismatch": {
          "long_call_strike": 100,
          "short_call_strike": 105,
          "mid_debit_usd": 186,
          "small_wallet": 1000,
          "fixing_stock": 104.99,
          "long_exercise_cash_payment": 10000,
          "small_wallet_cash_gap": 9186,
          "post_expiration_stock": 80
        }
      },
      "vertical_theta_sanity": [
        {
          "spot": 95,
          "debit_call_spread_today": 0.9029697651347384,
          "same_spot_sigma_one_day_later": 0.8850064270014197,
          "one_day_change_usd": -1.796333813331863
        },
        {
          "spot": 103,
          "debit_call_spread_today": 2.5289638811985355,
          "same_spot_sigma_one_day_later": 2.5323127092350433,
          "one_day_change_usd": 0.33488280365077117
        },
        {
          "spot": 110,
          "debit_call_spread_today": 3.895123146977909,
          "same_spot_sigma_one_day_later": 3.9161234744119326,
          "one_day_change_usd": 2.10003274340238
        }
      ],
      "source_corrections": {
        "OIC_vertical_theta": {
          "status": "do_not_use_strategy_name_as_fixed_theta_sign",
          "reason": "OIC bull-call/bull-put wording is a heuristic; same-vol one-day debit-call-spread sensitivity changes sign across spot in the frozen grid",
          "author_subset": [
            {
              "spot": 95,
              "debit_call_spread_today": 0.9029697651347384,
              "same_spot_sigma_one_day_later": 0.8850064270014197,
              "one_day_change_usd": -1.796333813331863
            },
            {
              "spot": 103,
              "debit_call_spread_today": 2.5289638811985355,
              "same_spot_sigma_one_day_later": 2.5323127092350433,
              "one_day_change_usd": 0.33488280365077117
            },
            {
              "spot": 110,
              "debit_call_spread_today": 3.895123146977909,
              "same_spot_sigma_one_day_later": 3.9161234744119326,
              "one_day_change_usd": 2.10003274340238
            }
          ]
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
      "terminal": [
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            0,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 0,
          "wealth": 11814,
          "pnl": -186,
          "return_on_initial": -0.015499999999999958,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            500,
            0
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 12314,
          "pnl": 314,
          "return_on_initial": 0.02616666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            1000,
            -500
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 12314,
          "pnl": 314,
          "return_on_initial": 0.02616666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        },
        {
          "id": "bull_call_100_105",
          "view": "mid",
          "origin": "cash",
          "initial_wealth": 12000,
          "initial_shares": 0,
          "initial_cash": 12000,
          "stock_delta": 0,
          "stock_trade_cash": 0,
          "stock_spread": 0,
          "shares": 0,
          "option_cash": -186,
          "opening_fee": 0,
          "cash_after_D1": 11814,
          "option_mark": 186,
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
            3000,
            -2500
          ],
          "stock_mark": 0,
          "option_payoff": 500,
          "wealth": 12314,
          "pnl": 314,
          "return_on_initial": 0.02616666666666667,
          "identity": "到期闭合支付的财富标记；不自动宣称所有实物交割已完成. 默认不计最终平股/行权费或税."
        }
      ],
      "theta": [
        {
          "spot": 95,
          "today": 90.29697651347436,
          "tomorrow": 88.50064270014215,
          "change": -1.796333813332211
        },
        {
          "spot": 103,
          "today": 252.89638811985213,
          "tomorrow": 253.23127092350504,
          "change": 0.3348828036529028
        },
        {
          "spot": 110,
          "today": 389.5123146977923,
          "tomorrow": 391.6123474411947,
          "change": 2.10003274340238
        }
      ],
      "wallets": [
        {
          "wallet": 1000,
          "debit": 186,
          "fixing": 104.99,
          "expiry_payoff": 499,
          "expiry_pnl": 313,
          "cash_before_delivery": 814,
          "gross_payment": 10000,
          "gap": 9186,
          "completed": false,
          "phase": "delivery_failed",
          "cash_after": null,
          "stock_after": null,
          "wealth_at_fixing": null,
          "wealth_after_gap": null,
          "note": "明确施加长100C行权、短105C不指派. 交割后80是新股票风险，不重写旧价差到期支付."
        },
        {
          "wallet": 12000,
          "debit": 186,
          "fixing": 104.99,
          "expiry_payoff": 499,
          "expiry_pnl": 313,
          "cash_before_delivery": 11814,
          "gross_payment": 10000,
          "gap": 0,
          "completed": true,
          "phase": "delivery_completed",
          "cash_after": 1814,
          "stock_after": 100,
          "wealth_at_fixing": 12313,
          "wealth_after_gap": 9814,
          "note": "明确施加长100C行权、短105C不指派. 交割后80是新股票风险，不重写旧价差到期支付."
        }
      ]
    },
    "input_units_and_bounds": {
      "terminal_stock": {
        "default": 102,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "spread": [
        "bull_call_100_105",
        "bull_put_100_105",
        "bear_put_95_100"
      ],
      "view": [
        "mid",
        "execution"
      ],
      "theta_stock": {
        "default": 103,
        "min": 1,
        "max": 200,
        "unit": "USD/share"
      },
      "wallet": {
        "default": 1000,
        "min": 0,
        "max": 30000,
        "unit": "USD"
      }
    },
    "algorithm": "Legwise entry/payoffs; theta is one-day BSM difference; long100 exercise independent short105 nonassignment at104.99.",
    "boundaries": "小钱包不足不继续；期权宽度不封住之后股票损失；保证金不从debit猜测.",
    "static_equivalent_markdown": "# P17 默认结果与静态解释\n\nPF-GRID-01合成教学链；真实合约条款与模型/执行价分开. 金额为美元，标准单位100；无真实行情.\n\n| 终点股价 | mid财富 | 执行层财富 | mid损益 |\n|---|---|---|---|\n| 0.00 | 11,814.00 | 11,808.70 | -186.00 |\n| 70.00 | 11,814.00 | 11,808.70 | -186.00 |\n| 90.00 | 11,814.00 | 11,808.70 | -186.00 |\n| 95.00 | 11,814.00 | 11,808.70 | -186.00 |\n| 100.00 | 11,814.00 | 11,808.70 | -186.00 |\n| 105.00 | 12,314.00 | 12,308.70 | 314.00 |\n| 110.00 | 12,314.00 | 12,308.70 | 314.00 |\n| 130.00 | 12,314.00 | 12,308.70 | 314.00 |\n\n| 独立钱包 | 净debit | 付款前现金 | 总义务 | 缺口 | 交割后80财富 |\n|---|---|---|---|---|---|\n| 1000 | 186.00 | 814.00 | 10000 | 9,186.00 | 未给/未完成 |\n| 12000 | 186.00 | 11,814.00 | 10000 | 0.00 | 9,814.00 |\n\n| 当前spot | 30天净模型值 | 29天净模型值 | 一天变化 |\n|---|---|---|---|\n| 95 | 90.297 | 88.501 | -1.796 |\n| 103 | 252.896 | 253.231 | 0.335 |\n| 110 | 389.512 | 391.612 | 2.100 |\n\n小钱包停止在付款点. 大钱包交割后变成100股，后续80是新股票风险.\n",
    "static_figures": [
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P17-payoff.svg",
      "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P17-funding.svg"
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
    "default_results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P17.json",
    "default_results_pointer": "/",
    "reproduction_instructions": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md",
    "input_identity": "本篇投影沿作者review-v2；完整PF-GRID-01原字节见公开inputs.json，模型/报价/默认结果未改."
  },
  "content_version": "2026-09-21-PFGH-staging-v3",
  "branch_selection_protocol": "核心读取required_readings；选择具名选读分支时追加其完整required_unit. 实际读完再教，不继承编辑的读取状态."
}
```

## Supplied entry
如果判断只涉及一个有限上涨区间，可以买下这个区间的收益，同时让出更高处的上行. 垂直价差把这种目标变成同标的、同到期、不同执行价的两张期权. 本篇会同时比较先付钱与先收钱的两种表达，并在到期处停下来核对真正留下的股票和现金.

<a id="p17-range"></a>
## 1. 我们想表达的是一个价格区间

假设关注XYZ未来30天从100到105这一段上涨，并不要求105以上继续增加收益. 买100 call可获得100以上的上涨，卖105 call则让出105以上部分. 两腿必须匹配标的、单位、期限与适用结算方式，才得到下文的有限宽度结论. OIC与MIT的组合图都用这个逐腿相减方式解释call vertical. [^vertical]

PF-GRID-01中，100C mid3.43、105C mid1.57，所以每组100单位净付186美元. 从12,000现金起点出发，D1剩余11,814；另外拥有long100C与short105C. 它们的净mid价值186，故未计摩擦的即时净财富仍为12,000. 这里从现金起步，不暗中夹带一份原股票成本.

<a id="p17-payoff"></a>
## 2. 用有限宽度推导收益，不背策略名

定义每股call spread到期支付

$$
h(s)=(s-100)^+-(s-105)^+.
$$

$s\le100$时两项为零；$100<s<105$时只剩$s-100$；$s\ge105$时相减为5. 于是$0\le h(s)\le5$. 整份mid组合损益为$100h(s)-186$：最大损失186，最大盈利314，盈亏平衡101.86.

执行层不是mid成交. 买100C按3.45，卖105C按1.55，两腿费用合计1.30，因此净支出

$$
100(3.45-1.55)+1.30=191.30.
$$

其匹配到期损失上限191.30，盈利上限308.70，盈亏平衡101.913. 默认这里尚未增加行权、指派或最终股票平仓费用；一旦采用相应退出方式，需要另列这些现金.

同一个上涨区间也可以用put表达：买100P、卖105P. mid净收$100(6.57-3.43)=314$，到期支付则是

$$
g(s)=(100-s)^+-(105-s)^+.
$$

逐区间展开可得$g(s)=h(s)-5$. 于是put credit结构的mid损益$314+100g(s)=100h(s)-186$，与call debit相同. **同一最终利润形状，不表示建立与履约资金同一时间发生.** call先付186、将来可能收最多500；put先收314、将来可能付最多500.

| 到期股价 | call debit mid损益 | put credit mid损益 | 两者执行层损益 |
|---:|---:|---:|---:|
| 95 | −186 | −186 | −191.30 |
| 100 | −186 | −186 | −191.30 |
| 102 | +14 | +14 | +8.70 |
| 105 | +314 | +314 | +308.70 |
| 110 | +314 | +314 | +308.70 |

本链零利率、零分红且两边同样的点差费用，使执行层仍相同：put净收308.70，最大支付500. 现实若资金利率、成交价、费用或条款不同，不能仅凭“经济等价”强制相等. 信用结构收到的308.70也可能需要留作担保，并非立刻可分给其他交易的收益. [^margin]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P17-payoff.svg" alt="两种入场现金方向，相同的匹配到期损益"></div><div class="svg-narrow pfh-native" data-static-figure="P17-payoff-mobile.svg"><p class="pfh-figure-title">同到期区间：debit与credit是两种现金时间</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#145c70" stroke-width="3"/></svg><span>1. call debit</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#a2682d" stroke-width="3" stroke-dasharray="7 4"/></svg><span>2. put credit</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="#607298" stroke-width="3"/></svg><span>3. bear put</span></li></ul><p class="pfh-axis-label">纵轴：价差损益（美元）</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100%">-237</span><span style="top:75%">-90</span><span style="top:50%">56</span><span style="top:25%">203</span><span style="top:0%">350</span></div><svg class="pfh-plot-svg" viewBox="55 155 315 180" preserveAspectRatio="none" aria-hidden="true"><path d="M55 335.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 290.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 245.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 200.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><path d="M55 155.00H370" stroke="#e1e6e8" vector-effect="non-scaling-stroke"/><polyline points="55.00,319.34 59.50,319.34 64.00,319.34 68.50,319.34 73.00,319.34 77.50,319.34 82.00,319.34 86.50,319.34 91.00,319.34 95.50,319.34 100.00,319.34 104.50,319.34 109.00,319.34 113.50,319.34 118.00,319.34 122.50,319.34 127.00,319.34 131.50,319.34 136.00,319.34 140.50,319.34 145.00,319.34 149.50,319.34 154.00,319.34 158.50,319.34 163.00,319.34 167.50,319.34 172.00,319.34 176.50,319.34 181.00,319.34 185.50,319.34 190.00,319.34 194.50,319.34 199.00,319.34 203.50,319.34 208.00,319.34 212.50,319.34 217.00,319.34 221.50,319.34 226.00,319.34 230.50,319.34 235.00,319.34 239.50,319.34 244.00,319.34 248.50,319.34 253.00,319.34 257.50,319.34 262.00,319.34 266.50,319.34 271.00,319.34 275.50,319.34 280.00,319.34 284.50,258.03 289.00,196.71 293.50,166.05 298.00,166.05 302.50,166.05 307.00,166.05 311.50,166.05 316.00,166.05 320.50,166.05 325.00,166.05 329.50,166.05 334.00,166.05 338.50,166.05 343.00,166.05 347.50,166.05 352.00,166.05 356.50,166.05 361.00,166.05 365.50,166.05 370.00,166.05" fill="none" stroke="#145c70" stroke-width="2.5" vector-effect="non-scaling-stroke"/><polyline points="55.00,319.34 59.50,319.34 64.00,319.34 68.50,319.34 73.00,319.34 77.50,319.34 82.00,319.34 86.50,319.34 91.00,319.34 95.50,319.34 100.00,319.34 104.50,319.34 109.00,319.34 113.50,319.34 118.00,319.34 122.50,319.34 127.00,319.34 131.50,319.34 136.00,319.34 140.50,319.34 145.00,319.34 149.50,319.34 154.00,319.34 158.50,319.34 163.00,319.34 167.50,319.34 172.00,319.34 176.50,319.34 181.00,319.34 185.50,319.34 190.00,319.34 194.50,319.34 199.00,319.34 203.50,319.34 208.00,319.34 212.50,319.34 217.00,319.34 221.50,319.34 226.00,319.34 230.50,319.34 235.00,319.34 239.50,319.34 244.00,319.34 248.50,319.34 253.00,319.34 257.50,319.34 262.00,319.34 266.50,319.34 271.00,319.34 275.50,319.34 280.00,319.34 284.50,258.03 289.00,196.71 293.50,166.05 298.00,166.05 302.50,166.05 307.00,166.05 311.50,166.05 316.00,166.05 320.50,166.05 325.00,166.05 329.50,166.05 334.00,166.05 338.50,166.05 343.00,166.05 347.50,166.05 352.00,166.05 356.50,166.05 361.00,166.05 365.50,166.05 370.00,166.05" fill="none" stroke="#a2682d" stroke-width="2.5" stroke-dasharray="7 4" vector-effect="non-scaling-stroke"/><polyline points="55.00,170.66 59.50,170.66 64.00,170.66 68.50,170.66 73.00,170.66 77.50,170.66 82.00,170.66 86.50,170.66 91.00,170.66 95.50,170.66 100.00,170.66 104.50,170.66 109.00,170.66 113.50,170.66 118.00,170.66 122.50,170.66 127.00,170.66 131.50,170.66 136.00,170.66 140.50,170.66 145.00,170.66 149.50,170.66 154.00,170.66 158.50,170.66 163.00,170.66 167.50,170.66 172.00,170.66 176.50,170.66 181.00,170.66 185.50,170.66 190.00,170.66 194.50,170.66 199.00,170.66 203.50,170.66 208.00,170.66 212.50,170.66 217.00,170.66 221.50,170.66 226.00,170.66 230.50,170.66 235.00,170.66 239.50,170.66 244.00,170.66 248.50,170.66 253.00,170.66 257.50,170.66 262.00,170.66 266.50,170.66 271.00,201.31 275.50,262.63 280.00,323.95 284.50,323.95 289.00,323.95 293.50,323.95 298.00,323.95 302.50,323.95 307.00,323.95 311.50,323.95 316.00,323.95 320.50,323.95 325.00,323.95 329.50,323.95 334.00,323.95 338.50,323.95 343.00,323.95 347.50,323.95 352.00,323.95 356.50,323.95 361.00,323.95 365.50,323.95 370.00,323.95" fill="none" stroke="#607298" stroke-width="2.5" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0%">0</span><span class="" style="left:50%">70</span><span class="last" style="left:100%">140</span></div></div><p class="pfh-axis-label">横轴：D30标的价格（美元/股）</p><p class="pfh-figure-note">PF-GRID-01合成链 · mid结构；非真实行情</p></div><figcaption>两种入场现金方向，相同的匹配到期损益</figcaption></figure>

<a id="p17-theta"></a>
## 3. 借方与贷方不能决定theta的符号

到期支付有清楚边界，期间价格却仍是两腿市值的差. 记两腿的一天时间变化为$\Delta C_{100}$与$\Delta C_{105}$，价差变化就是它们相减，而不是因为建仓付了钱就永远随时间贬值.

在本链的零利率、零分红BSM条件中，仅把剩余30天改为29天、保持现价与30%波动率不变，100/105 call spread每组价值变化如下：

| 标的现价 | 今天净期权价值 | 一天后净期权价值 | 一天变化 |
|---:|---:|---:|---:|
| 95 | 90.297 | 88.501 | −1.796 |
| 103 | 252.896 | 253.231 | +0.335 |
| 110 | 389.512 | 391.612 | +2.100 |

这些是模型敏感性，不是实际隔天收益；隔天股价与IV未必不变. 但它们已经足以反驳“debit vertical恒为负theta”的一般说法. OIC策略页的典型时间衰减文字须带状态条件；不能用收到还是付出权利金取代逐腿计算. [^bsm]

<a id="p17-delivery"></a>
## 4. 到期104.99：186的支出可能接上10,000的付款

现在给定一个具名实物事件：D30收盘104.99，long100C行权，short105C没有被指派. 这个事件是教学条件，不是预测所有券商都会如此处理. 长call带来买入100股的义务：支付10,000，得到100股. 短call未指派，所以没有自动将这100股卖出.

先看独立的小钱包压力例，起始仅1,000现金，不偷换共同12,000财富. mid建仓付186后只剩814，要完成长call交割仍需10,000，缺9,186. 没有已核贷款或及时转入，就应在交割截止处停止“已经完成”的路径；不能记成负现金，再假装股票一路持到未来. [^odd]

再看能够支付的12,000钱包. 建仓后11,814，买股后现金1,814、股票100股；按104.99标记财富12,313，恰等于原12,000加价差到期净利313. 若之后股票跌到80，财富成为$1814+8000=9814$，损失2,186. 那是**到期后新股票持仓**造成的结果，不是$0\le h\le5$失效.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-fgh/figures/P17-funding.svg" alt="小钱包在交割前停止，大钱包交割后成为股票持仓"></div><div class="svg-narrow pfh-native" data-static-figure="P17-funding-mobile.svg"><p class="pfh-figure-title">到期104.99：long100行权，short105不指派</p><ol class="pfh-flow-steps"><li><strong>小钱包1,000</strong><p>mid付186 → 余814</p><p>行权总付款10,000</p><p>缺口9,186</p><p>停止“已完成交割”</p></li><li><strong>共同钱包12,000</strong><p>mid付186 → 余11,814</p><p>付款10,000 → 余1,814</p><p>收到100股，按104.99</p><p>总财富12,313</p></li><li><strong>若股票随后到80</strong><p>现金仍1,814</p><p>股票价值8,000</p><p>财富9,814</p><p>这是新股仓的损失</p></li></ol><p class="pfh-figure-note">小debit是期权成本，不是实物交割付款能力. </p></div><figcaption>小钱包在交割前停止，大钱包交割后成为股票持仓</figcaption></figure>

短腿提前指派也会改变结构：若短call先被指派而我们没有股票，可能出现空股和仍存续的长call；长腿不会因为组合名字叫spread就自动替我们处理全部资金与头寸. 行权通知、借股和资金安排需要具体规则. 相反，同到期欧式现金结算的匹配价差没有提前实物交割，却仍须满足对应现金要求.

<details data-reading-branch="cash-index"><summary>结算对照：SPXW与现金账户价差条件</summary>

Cboe SPXW按欧式行权、PM结算价和每点100美元现金交割，结算现金通常在到期后的营业日交付，不会产生本例100股XYZ. Cboe的策略保证金概述对某些同到期、欧式、现金结算的有限风险组合给出现金账户处理条件；这些条件只适用于相应结构，不能外推到美式实物组合或不同到期的日历价差. 实际保证金仍需按具体券商、账户和合约规则确认.[^spx]

</details>

<a id="p17-lab"></a>
## 5. 操作与完整题解

<div data-experiment-slot="EXP-P17-VERTICAL"></div>

先切换call debit与put credit，说明相同到期曲线下面，D1现金为何相差500. 再选95、103、110，比较一天时间敏感性. 最后将独立钱包在1,000和12,000之间切换：区分“价差到期标记盈利”“交割可行”和“交割后股票盈亏”三个输出.

**解释题.** put credit先收314，是否意味着不需要自有资金？

**解析.** 不是. 匹配组合将来可能支付500，且担保或结算安排可以在此前占用现金. 314是与负债一起出现的收款；mid即时净财富没有增加. 现金账户处理还取决于是否满足同期限、行权方式和结算条件，不能用净收款代替资金预算.

**迁移题.** 把方向改为看跌：买100P、卖95P，mid分别3.43和1.42. 求匹配到期损失、盈利上限和盈亏平衡.

**解析.** 净付201，支付是$100[(100-s)^+-(95-s)^+]$，介于0与500. 损失上限201，盈利上限299；在95到100之间令$100(100-s)=201$，得$s=97.99$. 执行层买3.45、卖1.40，加1.30费用，净付206.30，上限盈利293.70. 方向改变了有效区间，没有改变逐腿现金方法.

**生命周期题.** 小钱包例在104.99标记有313盈利，能否用“已经盈利”替代9,186资金缺口？

**解析.** 不能. 499是长call相对于执行价的内在价值，行权所需却是10,000总买股款. 若要通过卖期权或卖新股票实现净额，需提前取得可执行交易与时间安排. 没有这些条件，只能报告标记收益和未完成交割，不能假设利润自动支付总价款.

[^vertical]: OIC，[Bull Call Spread](https://www.optionseducation.org/strategies/all-strategies/bull-call-spread-debit-call-spread) 与 [Bull Put Spread](https://www.optionseducation.org/strategies/all-strategies/bull-put-spread-credit-put-spread)，完整策略正文；MIT [Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf) slide 12.
[^margin]: Cboe，[Strategy-based Margin](https://www.cboe.com/markets/us/options/margin/strategy-based-margin)，主文及same-expiry European cash-settled spreads单元，适用条件不能省略.
[^bsm]: Leonid Kogan，MIT [Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)，Fall 2010，slides 16–21：无分红、固定利率/波动率模型、复制与公式. 上表为本篇独立计算，不是来源中的行情.
[^odd]: OCC，[ODD](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf)，June 2024，Chapter VIII与Other Risks item 1印刷67–68页；一腿结束不自动关闭另一腿.
[^spx]: Cboe，[SPX Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，©2026，第2页区分传统SPX的AM与SPXW的PM现金结算；不用传统合约时点覆盖SPXW.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P17-VERTICAL",
    "node_id": "P17",
    "title": "垂直价差与交割钱包",
    "anchor": "p17-lab",
    "description": "重建借方/贷方同到期支付、状态相关theta和行权后股票资金压力.",
    "shared_experiment_id": "EXP-OPTIONS-01",
    "inputs": {
      "terminal_stock": {
        "default": 102,
        "min": 0,
        "max": 200,
        "unit": "USD/share"
      },
      "spread": [
        "bull_call_100_105",
        "bull_put_100_105",
        "bear_put_95_100"
      ],
      "view": [
        "mid",
        "execution"
      ],
      "theta_stock": {
        "default": 103,
        "min": 1,
        "max": 200,
        "unit": "USD/share"
      },
      "wallet": {
        "default": 1000,
        "min": 0,
        "max": 30000,
        "unit": "USD"
      }
    },
    "outputs": [
      "逐腿现金/条件mark",
      "终点或期间财富",
      "持仓及可达资金",
      "缺口或适用边界"
    ],
    "algorithm": "Legwise entry/payoffs; theta is one-day BSM difference; long100 exercise independent short105 nonassignment at104.99.",
    "boundaries": "小钱包不足不继续；期权宽度不封住之后股票损失；保证金不从debit猜测.",
    "views": [
      "借方/贷方/看跌价差到期损益",
      "应付10000与钱包可用额/残余股票"
    ],
    "static_equivalent": {
      "reader_path": "https://ou-liu-red-sugar.github.io/zh/notebook/vertical-spreads-cash-and-lifecycle/",
      "figure_paths": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P17-payoff.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/figures/P17-funding.svg"
      ],
      "defaults_location": "agent_packet.supplied_inputs.default_results",
      "defaults_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P17.json",
      "defaults_pointer": "/",
      "static_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/static/P17.md"
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/inputs.json",
    "results_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/results/P17.json",
    "reproduce_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-fgh/reproduce.md"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.

SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价.

M-E/F/G 本批采用：SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.
- [Bull Call Spread](https://www.optionseducation.org/strategies/all-strategies/bull-call-spread-debit-call-spread): 同到期call价差、资金与指派差异；不采用恒负theta或long leg必自动行权说法.
- [Strategy-based Margin: Overview of Margin Requirements for Options](https://www.cboe.com/markets/us/options/margin/strategy-based-margin): 短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率.

M-E/F/G 本批采用：常参数、无股息模型条件下价格/偏导与Q；本批数值只采用q=0版本，不把非零股息扩展归给该读取单元；不宣称完整连续时间定理证明.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 逐腿相加的保护、价差和跨式支付；不承担现行结算规则.

M-E/F/G 本批采用：模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.
- [Bull Put Spread](https://www.optionseducation.org/strategies/all-strategies/bull-put-spread-credit-put-spread): put credit价差、匹配到期边界；不采用恒正theta或客户固定Monday通知.

## Content relations
```json
[
  {
    "from": "zh-p17",
    "relation": "part_of",
    "to": "portfolio-options",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p17",
    "relation": "illustrated_by",
    "to": "EXP-OPTIONS-01",
    "reason": "同一PF-GRID-01合成报价、财富与生命周期约定."
  },
  {
    "from": "zh-p17",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "zh-p17",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "按本篇所需调用风险目标、现金、成交或多腿方法；正文保留自足局部定义."
  },
  {
    "from": "p17-payoff",
    "relation": "supported_by",
    "to": "PFH-CALL-SPREAD",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "同到期call价差、资金与指派差异；不采用恒负theta或long leg必自动行权说法."
  },
  {
    "from": "p17-payoff",
    "relation": "supported_by",
    "to": "PFH-PUT-SPREAD",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Description至Comments/Related Position的完整策略主文",
    "scope": "put credit价差、匹配到期边界；不采用恒正theta或客户固定Monday通知."
  },
  {
    "from": "p17-range",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Slides 10–13完整策略组合单元",
    "scope": "逐腿相加的保护、价差和跨式支付；不承担现行结算规则."
  },
  {
    "from": "p17-theta",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Slides 16–21完整BSM建模与公式单元",
    "scope": "无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率."
  },
  {
    "from": "p17-delivery",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "Chapter VIII printed pp55–57 / PDF pp57–59; Chapter IX printed pp58–59 / PDF pp60–61; Chapter X holder/writer units printed pp61–67; Other Risks item 1 printed pp67–68 / PDF pp69–70",
    "scope": "契约、买卖双方权利义务、权利金/担保品、行权/指派/结算与多腿独立性. 不给本链报价、客户截止时点或自动处理保证."
  },
  {
    "from": "p17-delivery",
    "relation": "supported_by",
    "to": "PFH-MARGIN",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "主文; Short Put现金账户行; same-expiry European cash-settled spreads完整段",
    "scope": "短put总执行价现金担保、短期长option付清、同到期欧式现金结算价差的窄适用条件. 券商可更严格；不推广为calendar或具体账户融资承诺."
  },
  {
    "from": "p17-delivery",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "原件支持本段契约/方法或有日期研究；不证明合成报价为行情.",
    "locator": "PDF pp1–2，尤其p2合约表",
    "scope": "SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价."
  },
  {
    "from": "p17-lab",
    "relation": "illustrated_by",
    "to": "EXP-P17-VERTICAL",
    "reason": "重建借方/贷方同到期支付、状态相关theta和行权后股票资金压力."
  }
]
```

## Related entries
