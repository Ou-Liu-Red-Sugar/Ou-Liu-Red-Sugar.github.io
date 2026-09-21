# 波动率曲面与市场信息：从报价读到研究结论

从合成IV网格到VIX总方差插值，再带读2025年风险溢价研究，分开模型表达、回报分母和风险调整。

Entry: zh-m22 | Node: M22 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教M22《波动率曲面与市场信息：从报价读到研究结论》，内容版本2026-09-21-MEFG-review-v3。读者已有高年级本科至研究生的数学基础。

先确认选用本篇共同正文和哪些分支，再实际读取agent_packet列出的当前必读完整原文。PDF需读脚注、表图与符号；只拿到摘要/目录/搜索片段不算完成。记录实际版本、范围与内容对应，不沿用编辑端“已读”充当本次读取；同会话已完整取得相同版本单元可以复用。若所需单元失败，尝试机构正式等价全文；仍缺失则指出具体单元，不凭记忆补成已读教学。runtime_reading_log从空开始。

独立学习任务：从九点合成报价比较两方向IV，再复算VIX假设例；能读出Chicago论文的样本/方法/分母/结论边界。
专属诊断与正向讲解：先核两份VIX方法版本。Chicago必须先读§2.1–2.3定义与feasibility，再读§3.1和§4.1–4.1.1/Figure8，不能只读结果。让读者解释beta hedge与delta hedge不同。
反馈尺度：13.93是官方假设例；一个strike贡献不等于全strip。不得自造论文历史数据或将alpha衰减写成全部风险补偿归零。BIS只有选该分支才加入必读。

读者要求直接讲解时，按本篇连贯推导讲清，不反复问已会先修。静态例、实验、练习必须使用本包同一输入和单位；实例价、合成价、模型价、规则时点不能混换。练习要给完整解析，不仅打分。仅当选读分支被采用时，将其optional reading转入当前必读。


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MEFG-VIX-METHOD",
      "version": "v6.0, revised 2026-02-26",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "physical pp3–14：sections1–5和Appendix3完整假设例，止于Appendix4之前；版本表",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "产品/成份/结算身份与假设例"
      },
      "supports": "VIX产品筛选、期限定常与SOQ区别；13.93是官方假设计算例，不是当日行情。",
      "id": "M22-READ-01",
      "title": "Volatility Index Methodology: Cboe Volatility Index",
      "authors": [
        "Cboe Global Indices"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-VIX-MATH",
      "version": "v5.0, revised 2026-02-26",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "physical pp3–8 / printed pp4–9完整计算单元；physical p18版本表",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "single-term variance与total-variance interpolation"
      },
      "supports": "加权方差与总方差插值；原公式Q(K)是报价函数。仅final-stage与单strike复算，不称全strip或国债样条实现。",
      "id": "M22-READ-02",
      "title": "Cboe Volatility Index Mathematics Methodology",
      "authors": [
        "Cboe Global Indices"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-CHIFED2025",
      "version": "Chicago Fed WP2025-17, manuscript 2025-09-04; DOI 10.21033/wp-2025-17",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.1–2.3（含feasibility）physical pp7–12；完整§3.1 pp13–14；§4.1–4.1.1 pp29–32及Figure8 p30",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "traded/synthetic方法、样本、分母、roll、滞后对冲、alpha/beta结果"
      },
      "supports": "区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型。",
      "id": "M22-READ-03",
      "title": "The decline of the variance risk premium: evidence from traded and synthetic options",
      "authors": [
        "Ian Dew-Becker",
        "Stefano Giglio"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-MIT-BSM",
      "version": "Fall 2010",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides16–21完整单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "同源BSM合成曲面模型"
      },
      "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明。",
      "id": "M22-READ-04",
      "title": "15.450: Stochastic Calculus and Option Pricing",
      "authors": [
        "Leonid Kogan",
        "MIT OpenCourseWare"
      ],
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [
    {
      "source_id": "MEFG-BIS-2024",
      "version": "BIS Quarterly Review Box B, 2024-03-04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bis.org/publications/what-could-explain-recent-drop-vix",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Box B全文正文与脚注；不采用未看的图中特有数值",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "候选gamma机制而非已识别因果"
      },
      "supports": "结构化产品/做市对冲的候选机制；总0DTE量不识别净gamma和因果VIX，不转引未读论文结论。",
      "branch": "dealer-gamma",
      "id": "M22-READ-05",
      "title": "What could explain the recent drop in VIX?",
      "authors": [
        "Karamfil Todorov",
        "Grigory Vilkov"
      ],
      "retrieved_at": "2026-09-21",
      "required_when_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MEFG-draft-v1",
    "data": {
      "schema": "markets-mefg-adopted-inputs-v1",
      "content_version": "2026-09-21-MEFG-draft-v1",
      "scope": [
        "M15",
        "M16",
        "M17",
        "M18",
        "M19",
        "M20",
        "M21",
        "M22",
        "M23"
      ],
      "state_tree": {
        "experiment_id": "EXP-STATE-01",
        "source_file": "data/qt-f-shared-state-experiment.json",
        "source_version": "2026-09-21-v1",
        "source_sha256": "8489fd3b74f469c3424d32a2b0738280e4e83709f081dfb24282d9afcfa8804b",
        "source_pointer": "two_state / three_state_incomplete / three_state_augmented_complete",
        "identity": "Exact received QT-F/M21 frozen contract; file preserved byte-for-byte; generated browser data is a derived copy",
        "physical_up_probability_variants": [
          0.2,
          0.6,
          0.8,
          0.9
        ],
        "period_unit": "one abstract period; R is gross growth, not annual net rate"
      },
      "odd_equal_wealth": {
        "identity": "OCC ODD June2024 printed p61 hypothetical; exact interest versus rounded official display distinguished",
        "initial_wealth_usd": 5000,
        "spot_usd": 50,
        "strike_usd": 50,
        "premium_per_share_usd": 5,
        "shares_per_contract": 100,
        "stock_position_shares": 100,
        "mixed_contracts": 1,
        "all_option_contracts": 10,
        "mixed_cash_usd": 4500,
        "simple_annual_cash_rate": 0.0325,
        "horizon_years": 0.5,
        "terminal_spots_usd": [
          62,
          58,
          54,
          50,
          46,
          42,
          38
        ],
        "cost_convention": "No fees, tax or stock dividends in base; terminal economic payoff is not a funding guarantee for physical exercise"
      },
      "cash_examples": {
        "identity": "Synthetic amounts under documented product rules; not historical quotes/series/accounts",
        "equity_call": {
          "multiplier": 100,
          "contracts": 1,
          "strike": 100,
          "purchase_premium": 4,
          "later_underlying_bid": 105,
          "later_option_bid": 6,
          "later_option_ask": 6.2,
          "exercise_gross_cash_assumption": 10000,
          "exercise_model": "sequential gross payment first; no assumed netting/credit; broker policy not inferred"
        },
        "spxw_call": {
          "multiplier_usd_per_point": 100,
          "strike_points": 5000,
          "purchase_premium_points": 50,
          "settlement_value_points": 5025,
          "shares_delivered": 0
        },
        "uncovered_equity_call_margin": {
          "contract_type": "OCC ordinary equity uncovered call minimum; not ETF/index or broker house rules",
          "multiplier": 100,
          "strike": 105,
          "initial_spot": 100,
          "initial_option_premium": 4,
          "later_spot": 120,
          "later_option_mark": 17,
          "base_fraction": 0.2,
          "minimum_call_fraction": 0.1,
          "other_positions_or_broker_addons": false,
          "default_external_cash_available": 2200,
          "model": "cash collateral; liability is mark not daily futures VM; no external deposits beyond the explicitly displayed steps"
        }
      },
      "early_exercise_counterexample": {
        "identity": "Separate teaching market, not EXP-STATE-01",
        "spot": 50,
        "strike": 100,
        "up_factor": 1.2,
        "down_factor": 0.9,
        "gross_cash_growth_per_period": 1.02,
        "periods": [
          1,
          2
        ],
        "dividend": 0,
        "time_unit": "one abstract period; not a year; American exercise at every displayed node"
      },
      "parity_quotes": {
        "identity": "Separate synthetic quote/funding scenario; no friction toggle on EXP-STATE-01",
        "strike": 105,
        "gross_cash_growth": 1.02,
        "stock": {
          "bid": 99.95,
          "ask": 100.05
        },
        "call": {
          "bid": 5.8,
          "ask": 6.2
        },
        "put": {
          "bid": 8.7,
          "ask": 9.1
        },
        "extra_fee_per_underlying_unit": 0,
        "cost_convention": "same borrowing/lending, zero dividend European same K/T; all legs synchronous and fully fillable only by explicit teaching assumption",
        "execution_assumptions": {
          "borrowing": true,
          "stock_short": true,
          "synchronous": true,
          "depth": true,
          "exercise_terms_match": true
        },
        "default_capital_available": 1
      },
      "surface": {
        "experiment_id": "EXP-MEFG-IV-01",
        "identity": "Entirely synthetic SPX-sized European call/put quotes; actual multiplier/tick only; no historical chain",
        "quote_date": null,
        "spot_index_points": 5000,
        "annual_continuous_rate": 0.04,
        "annual_continuous_dividend_yield": 0,
        "dividend_note": "zero is teaching assumption, not S&P500 dividend forecast",
        "day_count": "ACT/365 teaching whole-day expiries",
        "strikes_points": [
          4500,
          5000,
          5500
        ],
        "maturities": [
          {
            "days": 30,
            "sigma_by_strike": [
              0.28,
              0.24,
              0.22
            ]
          },
          {
            "days": 90,
            "sigma_by_strike": [
              0.27,
              0.235,
              0.22
            ]
          },
          {
            "days": 180,
            "sigma_by_strike": [
              0.25,
              0.23,
              0.22
            ]
          }
        ],
        "quote_half_width_points": 0.2,
        "contract_multiplier_usd_per_point": 100,
        "min_quote_tick_below3": 0.05,
        "min_quote_tick_at_or_above3": 0.1,
        "greek_example": {
          "strike": 5000,
          "days": 90,
          "sigma": 0.235,
          "spot_changes_points": [
            50,
            500
          ],
          "vol_changes_absolute": [
            0.01,
            0.1
          ]
        },
        "validation_scope": "displayed grid only; not a global no-arbitrage surface or observed chain"
      },
      "vix": {
        "official_sample": {
          "identity": "Methodology v6.0 Appendix3 explicitly hypothetical (2022-09-27 10:45:15 ET label is not observed VIX)",
          "minutes_near": 34484,
          "minutes_next": 44954,
          "target_minutes": 43200,
          "year_minutes": 525600,
          "near_variance": 0.019233906,
          "next_variance": 0.019423884,
          "displayed_T_near": 0.0656088,
          "displayed_T_next": 0.0855289,
          "displayed_vix": 13.93,
          "one_strike": {
            "strike": 1370,
            "delta_K": 5,
            "mid_quote": 0.2,
            "R_rounded": 0.000317,
            "T_rounded": 0.0656088,
            "displayed_contribution": 5.328e-07
          }
        },
        "two_term_teaching_variant": {
          "identity": "separate variance interpolation, not a VIX-strip reproduction",
          "days_near": 24,
          "days_next": 36,
          "target_days": 30,
          "near_vol": 0.2,
          "next_vol": 0.24
        }
      },
      "information_example": {
        "identity": "Synthetic contract volumes classified by initiating side; size-weighted KIT Eq(2), not unweighted transaction counts; not motives",
        "unit": "option contracts",
        "buyer_call_contracts": 30,
        "seller_call_contracts": 10,
        "buyer_put_contracts": 25,
        "seller_put_contracts": 35,
        "non_event_mean_TOI": 0.05,
        "baseline_window": "non-announcement days tau-40 through tau-10 per paper; 0.05 here a teaching value",
        "table_2_column_3": {
          "identity": "published regression coefficients with macro/non-macro separately standardized variables; not raw-return slopes/profits",
          "OI_coefficient": 0.0033,
          "OI_macro_interaction": 0.025,
          "column_1_OI_coefficient": 0.0078,
          "sample_observations": 51522
        }
      },
      "runtime_reading_log": []
    },
    "additional_files": [],
    "experiment_id": "EXP-MEFG-M22-SURFACE"
  },
  "entry_id": "zh-m22",
  "node_id": "M22",
  "content_version": "2026-09-21-MEFG-review-v3",
  "experiment_ids": [
    "EXP-MEFG-M22-SURFACE"
  ],
  "source_id_aliases": {
    "MEFG-ODD": "MA-OCC",
    "MEFG-OCC-EQUITY": "PFH-EQUITY",
    "MEFG-OCC-ETF": "PFH-ETF",
    "MEFG-OIC-T1": "PFH-T1",
    "MEFG-SPX": "MA-SPX",
    "MEFG-MIT-OPTIONS": "PFH-MIT-OPTIONS",
    "MEFG-MIT-KOGAN": "PFH-MIT-BSM",
    "MEFG-OIC-PARITY": "PFH-PARITY",
    "MEFG-OIC-EXERCISE": "PFH-EXERCISE",
    "MEFG-CHICAGOFED-2025": "PFH-CHIFED2025"
  },
  "source_paths": {
    "shared_inputs.json": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json",
    "data/qt-f-shared-state-experiment.json": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
    "static/M22.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M22.html"
  },
  "selected_branch": "core",
  "required_readings_by_branch": {
    "core": [
      {
        "source_id": "MEFG-VIX-METHOD",
        "version": "v6.0, revised 2026-02-26",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "physical pp3–14：sections1–5和Appendix3完整假设例，止于Appendix4之前；版本表",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "产品/成份/结算身份与假设例"
        },
        "supports": "VIX产品筛选、期限定常与SOQ区别；13.93是官方假设计算例，不是当日行情。",
        "id": "M22-READ-01",
        "title": "Volatility Index Methodology: Cboe Volatility Index",
        "authors": [
          "Cboe Global Indices"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MEFG-VIX-MATH",
        "version": "v5.0, revised 2026-02-26",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "physical pp3–8 / printed pp4–9完整计算单元；physical p18版本表",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "single-term variance与total-variance interpolation"
        },
        "supports": "加权方差与总方差插值；原公式Q(K)是报价函数。仅final-stage与单strike复算，不称全strip或国债样条实现。",
        "id": "M22-READ-02",
        "title": "Cboe Volatility Index Mathematics Methodology",
        "authors": [
          "Cboe Global Indices"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "PFH-CHIFED2025",
        "version": "Chicago Fed WP2025-17, manuscript 2025-09-04; DOI 10.21033/wp-2025-17",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§2.1–2.3（含feasibility）physical pp7–12；完整§3.1 pp13–14；§4.1–4.1.1 pp29–32及Figure8 p30",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "traded/synthetic方法、样本、分母、roll、滞后对冲、alpha/beta结果"
        },
        "supports": "区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型。",
        "id": "M22-READ-03",
        "title": "The decline of the variance risk premium: evidence from traded and synthetic options",
        "authors": [
          "Ian Dew-Becker",
          "Stefano Giglio"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "PFH-MIT-BSM",
        "version": "Fall 2010",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides16–21完整单元",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "同源BSM合成曲面模型"
        },
        "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明。",
        "id": "M22-READ-04",
        "title": "15.450: Stochastic Calculus and Option Pricing",
        "authors": [
          "Leonid Kogan",
          "MIT OpenCourseWare"
        ],
        "retrieved_at": "2026-09-21"
      }
    ],
    "dealer-gamma": [
      {
        "source_id": "MEFG-VIX-METHOD",
        "version": "v6.0, revised 2026-02-26",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "physical pp3–14：sections1–5和Appendix3完整假设例，止于Appendix4之前；版本表",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "产品/成份/结算身份与假设例"
        },
        "supports": "VIX产品筛选、期限定常与SOQ区别；13.93是官方假设计算例，不是当日行情。",
        "id": "M22-READ-01",
        "title": "Volatility Index Methodology: Cboe Volatility Index",
        "authors": [
          "Cboe Global Indices"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MEFG-VIX-MATH",
        "version": "v5.0, revised 2026-02-26",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "physical pp3–8 / printed pp4–9完整计算单元；physical p18版本表",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "single-term variance与total-variance interpolation"
        },
        "supports": "加权方差与总方差插值；原公式Q(K)是报价函数。仅final-stage与单strike复算，不称全strip或国债样条实现。",
        "id": "M22-READ-02",
        "title": "Cboe Volatility Index Mathematics Methodology",
        "authors": [
          "Cboe Global Indices"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "PFH-CHIFED2025",
        "version": "Chicago Fed WP2025-17, manuscript 2025-09-04; DOI 10.21033/wp-2025-17",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§2.1–2.3（含feasibility）physical pp7–12；完整§3.1 pp13–14；§4.1–4.1.1 pp29–32及Figure8 p30",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "traded/synthetic方法、样本、分母、roll、滞后对冲、alpha/beta结果"
        },
        "supports": "区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型。",
        "id": "M22-READ-03",
        "title": "The decline of the variance risk premium: evidence from traded and synthetic options",
        "authors": [
          "Ian Dew-Becker",
          "Stefano Giglio"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "PFH-MIT-BSM",
        "version": "Fall 2010",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides16–21完整单元",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "同源BSM合成曲面模型"
        },
        "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明。",
        "id": "M22-READ-04",
        "title": "15.450: Stochastic Calculus and Option Pricing",
        "authors": [
          "Leonid Kogan",
          "MIT OpenCourseWare"
        ],
        "retrieved_at": "2026-09-21"
      },
      {
        "source_id": "MEFG-BIS-2024",
        "version": "BIS Quarterly Review Box B, 2024-03-04",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.bis.org/publications/what-could-explain-recent-drop-vix",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Box B全文正文与脚注；不采用未看的图中特有数值",
          "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
          "purpose": "候选gamma机制而非已识别因果"
        },
        "supports": "结构化产品/做市对冲的候选机制；总0DTE量不识别净gamma和因果VIX，不转引未读论文结论。",
        "branch": "dealer-gamma",
        "id": "M22-READ-05",
        "title": "What could explain the recent drop in VIX?",
        "authors": [
          "Karamfil Todorov",
          "Grigory Vilkov"
        ],
        "retrieved_at": "2026-09-21",
        "required_when_selected": true
      }
    ]
  },
  "branch_tasks": {
    "core": "从九点合成报价读 IV 切片，复算官方假设例，并核 Chicago 研究的样本、方法、分母和结论边界。",
    "dealer-gamma": "先完成共同 IV/VIX/研究带读，再读 BIS Box B 正文及脚注，解释交易商净 gamma 候选机制及总成交量不能识别的内容。"
  }
}
```

## Supplied entry
<a id="m22-question"></a>
## 一、我们究竟在图上看什么

同一个标的，不同行权价、到期日的期权会有不同报价。把每个报价放进同一套定价模型反解，就得到一组隐含波动率，简称IV。沿执行价看，是偏斜或微笑；沿期限看，是波动率期限结构；把两个方向放在一起，才是一张曲面。

这里先分清三层。期权市场给出带时点的bid和ask；模型把报价换一种参数形式表达；研究者再解释这种定价与未来风险、投资者要求的补偿或交易条件有什么关系。第三层不能跳过前两层。尤其不能把一张IV图直接读成真实概率分布的照片。上一节BSM中 $N(d_2)$ 与实际概率不同的边界，在这里同样有效。[^MEFG-MIT-KOGAN]

本篇先做一张可以复算的教学曲面，再读Cboe如何把特定期权报价构造成VIX，最后读一项2025年研究。前两段计算是练习，研究图是原文带读；它们不混成一份“历史回测”。

<a id="m22-surface"></a>
## 二、同源九点曲面：把报价区间保留下来

采用与M18、M19相同的 **EXP-MEFG-IV-01**：标的点数5,000，连续复利年利率4%，股息率设为0，期限按ACT/365。股息率0是教学假设，不是对S&P 500分红的测量。先明示各点的模型 $\sigma$，计算欧式call/put，再按SPX报价增量取整、加减0.2点半价差。真实SPX的100美元乘数只负责将点数换成美元；下面不是任何一天的SPX期权链。[^MEFG-SPX]

| 到期天数 | 执行价 | 生成报价所用 $\sigma$ | call bid / mid / ask（点） | 反解IV：bid / mid / ask |
|---:|---:|---:|---|---|
| 30 | 4,500 | 28.0% | 530.00 / 530.20 / 530.40 | 27.9111% / 28.0037% / 28.0958% |
| 30 | 5,000 | 24.0% | 145.20 / 145.40 / 145.60 | 23.9724% / 24.0074% / 24.0425% |
| 30 | 5,500 | 22.0% | 10.40 / 10.60 / 10.80 | 21.8955% / 21.9929% / 22.0894% |
| 90 | 4,500 | 27.0% | 612.30 / 612.50 / 612.70 | 26.9695% / 27.0006% / 27.0316% |
| 90 | 5,000 | 23.5% | 256.70 / 256.90 / 257.10 | 23.4841% / 23.5045% / 23.5249% |
| 90 | 5,500 | 22.0% | 70.40 / 70.60 / 70.80 | 21.9679% / 21.9942% / 22.0205% |
| 180 | 4,500 | 25.0% | 702.80 / 703.00 / 703.20 | 24.9814% / 25.0011% / 25.0207% |
| 180 | 5,000 | 23.0% | 369.70 / 369.90 / 370.10 | 22.9864% / 23.0010% / 23.0155% |
| 180 | 5,500 | 22.0% | 160.90 / 161.10 / 161.30 | 21.9834% / 21.9989% / 22.0145% |

读表先做两个动作。固定90天，低执行价的IV较高；这描述当前教学网格的执行价方向。再固定执行价5,000，从30到180天，输入波动率24%、23.5%、23%，描述期限方向。两者不是“期权价格随执行价或期限的斜率”：期权价格还同时受内在程度、资金时间等因素影响。

bid和ask反解得到一个IV区间。90天、K=5,000的call中价为256.90，反解23.5045%，略不同于生成未取整价格时的23.5%。这点差别来自报价取整，不是突然发现了另一种真实波动率。价格与IV的转换还依赖股息、利率、结算和模型；换一组假设，同一个报价可以对应不同IV。这里只检查这九点的价格界、执行价单调性和离散凸性，不宣称构建了一张全局无套利插值曲面。

<a id="m22-vix"></a>
## 三、VIX为什么不是“所有IV的平均数”

Cboe的VIX产品方法文件与数学方法文件各有职责。本篇采用前者 **v6.0、2026-02-26**，后者 **v5.0、同日**。产品方法确定合格SPX／SPXW合约、期限、报价与发布／结算安排；数学方法给定期权报价如何进入方差计算。常规30天VIX组合不是把当天到期的0DTE期权直接加进来。[^MEFG-VIX-METHOD]

为看清权重，先只写一个期限 $T$ 的核心表达：
$$
\sigma^2(T)=
\frac{2}{T}\sum_i
\frac{\Delta K_i}{K_i^2}e^{rT}q_{\rm quote}(K_i)
-\frac1T\left(\frac F{K_0}-1\right)^2.
$$
这里的 $q_{\rm quote}(K)$ 是按方法选定的**期权报价**；原文把它写作 $Q(K)$，我们特意换符号，避免与M21的概率测度 $Q$ 混淆。$F$ 是由期权关系推得的远期水平，$K_0$ 是相应边界执行价；两侧使用指定的虚值put／call，$K_0$处按规则使用两种期权的平均报价，$\Delta K$则给不同执行价间距以权重。完整规则还包括合约和报价过滤，不是随便拿一条链求和。[^MEFG-VIX-MATH]

每个期限先形成**年化方差**，然后在两个期限之间插值的是总方差。若两期限剩余分钟数为 $N_1,N_2$，目标30天为 $N_*=43,200$，一年为 $N_Y=525,600$，令
$$
w_1=\frac{N_2-N_*}{N_2-N_1},\qquad w_2=1-w_1,\qquad T_i=\frac{N_i}{N_Y}.
$$
则
$$
\sigma_{30}^2
=\frac{w_1T_1\sigma_1^2+w_2T_2\sigma_2^2}{N_*/N_Y},
\qquad
VIX=100\sqrt{\sigma_{30}^2}.
$$

产品方法Appendix 3**明确称为假设算例**。它虽带一个示例日期和时刻，仍不是该日实测VIX。本篇只重建它的最后一步：

| 输入 | 近到期 | 次近到期 |
|---|---:|---:|
| 剩余分钟 | 34,484 | 44,954 |
| 已给定年化方差 | 0.019233906 | 0.019423884 |

代入得到13.927842，显示到两位小数为 **13.93**。另一项可核的小计算是执行价1,370那一行：$\Delta K=5$、报价0.2、原例舍入后的 $r=0.000317,T=0.0656088$，其求和项
$$
\frac5{1370^2}e^{0.000317\times0.0656088}\times0.2
\approx5.32804517\times10^{-7}.
$$
这是求和中的一个贡献，尚不是完整期限方差；本篇没有重建整条执行价条带和利率曲线样条。[^MEFG-VIX-METHOD]

再做一个更直观的独立教学变式：24天年化波动20%、36天24%，目标30天。权重各半，但总方差必须带期限：
$$
\sigma_{30}^2
=\frac{\tfrac12\,24(0.20)^2+\tfrac12\,36(0.24)^2}{30}
=0.05056.
$$
开平方是 <strong>22.485551%</strong>，不是20%与24%的算术平均22%。

最后，VIX现货指数的中间报价计算，不等于能直接按那个指数值买卖某个现货资产。相关衍生品到期使用的特别开盘报价SOQ有自己的单期限、开盘成交及相应替代报价规则，不是机械复制普通盘中两期限插值。[^MEFG-VIX-METHOD]

<a id="case-mefg-chicago-2025"></a>
<a id="m22-study"></a>
## 四、带读一项研究：alpha下降，不等于所有风险补偿消失

Dew-Becker和Giglio的Chicago Fed工作论文 *The decline of the variance risk premium: evidence from traded and synthetic options*，稿件日期2025-09-04，比较真实交易期权与动态合成期权的回报。先不要跳到“卖波动还赚不赚钱”，先读三个设置。[^MEFG-CHICAGOFED-2025]

**第一，两个样本不是一条历史期权链。** Synthetic使用CRSP股票市场回报构造，历史覆盖1926–2022；traded部分拼接CME的1987–1995与SPX OptionMetrics的1996–2022。1926年起的长历史是模型合成，不是当年已观察到相同上市合约。

**第二，回报分母和窗口要对齐。** 作者把期权超额回报按**标的价格**缩放，不是拿损益除以买入权利金。它表达每单位标的规模对应的期权结果，不能直接与M16中“投入500美元期权、回报140%”相比较。直接对照的持有窗口为第三个周五到下个月第三个周五；合成序列的另一些单变量统计用21日重叠窗口。Figure 8采用对齐的roll dates，不能将不同窗口静默拼接。

**第三，风险调整不等于知道未来。** 合成头寸利用滞后一日信息，波动估计使用扩张窗；§2.2的beta对冲是用期初信息选择的静态市场头寸，不是每天更新的delta对冲。§2.1–2.3还说明traded和synthetic的定义、所需条件及交易可行性问题：把一条可计算路径写出来，不代表任意参与者都能无成本、无限频率地实现它。

现在打开原论文 **Figure 8，印刷p29／PDF第30页**。先看横轴年份和图中滚动风险调整量，而不是把纵轴读成累计净值；再看traded与synthetic在可比样本中的变化。作者在§4.1–4.1.1讨论CAPM alpha部分衰减，并明确beta关联的方差风险补偿仍在。因此“某种alpha下降”不等于“所有variance risk premium归零”。研究也没有把一次期权交易或一个卖方策略变成稳赚产品。[^MEFG-CHICAGOFED-2025]

我们在这里保留原图阅读定位，不用人工画一条似是而非的“历史复现”。可以独立检验的任务是：说清样本、分母、窗口、对冲方法以及作者结论覆盖的范围。缺原始数据时，不能给读者一个虚构的年份筛选器，再声称重跑了Figure 8。

<details data-agent-option="dealer-gamma"><summary>选读：交易商 gamma 的候选机制</summary>

<a id="m22-mechanism"></a>


BIS 2024年文章 *What could explain the recent drop in VIX?* 讨论收益增强产品、交易商头寸与对冲行为的候选联系。若某种客户交易使交易商净持有正gamma，价格上涨后减持、下跌后增持的对冲可能逆着价格变动交易；但净头寸还取决于客户方向、产品结构和其他头寸抵销。[^MEFG-BIS-2024]

所以“0DTE成交量很大”只告诉我们活动规模，不能独立识别交易商净gamma；常规VIX不直接纳入0DTE，也不等于其他期限与市场机制不会有间接联系。这两句话要同时保留。该文章给的是需要进一步检验的机制，而不是从总成交量推出VIX下跌的已识别因果证明。本篇只采用已读正文及脚注，不采用其图中特有数值。


</details>

<a id="m22-explore"></a>
## 六、两个图形视角，各回答一个问题

<div data-experiment-slot="EXP-MEFG-M22-SURFACE"></div>

曲面实验可以沿执行价或期限看同一九点网格，并切换bid／mid／ask。总方差实验单独画出两个期限与30天目标的关系。前者看报价如何表达，后者看指数如何聚合；研究卡另提供Figure 8的原文定位，不把人工合成图当成实证证据。

<a id="m22-exercises"></a>
## 七、检验理解

**题一：24天20%、36天24%，为什么不直接取22%？**

**解析。** 合约期限不同，先形成期限内总方差，再插到30天并重新年化。公式得0.05056，开平方为22.485551%。先平均波动率会丢掉平方与期限权重。

**题二：低执行价IV高，能否直接读出实际崩盘概率？**

**解析。** 不能。它首先是某模型下对期权报价的表达，包含投资者对状态支付的定价、风险补偿及交易条件。真实概率需要另外的统计与经济假设，不能把定价权重直接换名。

**题三：想复核论文的回报，为什么不能用“到期损益÷权利金”？**

**解析。** 论文§3.1采用标的价格分母。换成权利金分母会引入不同的杠杆尺度，合约期限、虚实值和roll窗口也需保持一致；那已经不是同一个统计对象。

**题四：Figure 8中alpha的变化，证明未来卖期权一定无利可图吗？**

**解析。** 没有。它是指定样本和风险调整方法下的结果；作者区分alpha与beta相关补偿。预测未来可执行净收益还需新信息、真实成本、融资和风险约束，不能从该图一步推出。

**题五：为什么这里不画“0DTE成交量导致VIX下降”的箭头？**

**解析。** 总量不等于净方向或净gamma，常规VIX还有自己的成份方法。要画因果箭头，需要识别中间持仓、对冲路径及替代解释；现有候选机制不足以完成这一步。

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010。[原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf)。本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application。

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown。[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)。本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes。

[^MEFG-VIX-METHOD]: Cboe Global Indices，*Volatility Index Methodology: Cboe Volatility Index*，v6.0, revised 2026-02-26。[原文](https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf)。本篇定位：Sections 1–5 and Appendices 1–3; physical pp3–14, stop before Appendix4 strip；Appendix2 document version; Appendix3 hypothetical sample。

[^MEFG-VIX-MATH]: Cboe Global Indices，*Cboe Volatility Index Mathematics Methodology*，v5.0, revised 2026-02-26。[原文](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf)。本篇定位：Physical pp3–8 / printed pp4–9: constituent, rates, single-term and constant-maturity calculation；Physical p18 / printed p19: version。

[^MEFG-CHICAGOFED-2025]: Ian Dew-Becker, Stefano Giglio，*The decline of the variance risk premium: evidence from traded and synthetic options*，Chicago Fed WP2025-17, manuscript 2025-09-04; DOI 10.21033/wp-2025-17。[原文](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)。本篇定位：§2.1–2.3 including feasibility: physical pp7–12；§3.1 data: physical pp13–14；§4.1–4.1.1: physical pp29–32; Figure8 physical p30。

[^MEFG-BIS-2024]: Karamfil Todorov, Grigory Vilkov，*What could explain the recent drop in VIX?*，BIS Quarterly Review Box B, 2024-03-04。[原文](https://www.bis.org/publications/what-could-explain-recent-drop-vix)。本篇定位：Full box body and footnotes; no GraphB1 numeric extraction。

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>


## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>天数</th><th>K</th><th>call mid</th><th>mid IV</th></tr></thead><tbody><tr><td>30</td><td>4500</td><td>530.20</td><td>28.003704%</td></tr><tr><td>30</td><td>5000</td><td>145.40</td><td>24.007449%</td></tr><tr><td>30</td><td>5500</td><td>10.60</td><td>21.992924%</td></tr><tr><td>90</td><td>4500</td><td>612.50</td><td>27.000564%</td></tr><tr><td>90</td><td>5000</td><td>256.90</td><td>23.504499%</td></tr><tr><td>90</td><td>5500</td><td>70.60</td><td>21.994241%</td></tr><tr><td>180</td><td>4500</td><td>703.00</td><td>25.001056%</td></tr><tr><td>180</td><td>5000</td><td>369.90</td><td>23.000964%</td></tr><tr><td>180</td><td>5500</td><td>161.10</td><td>21.998911%</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>方差对象</th><th>输入/输出</th></tr></thead><tbody><tr><td>教学近/远</td><td>24天20%；36天24%</td></tr><tr><td>目标30天年化方差</td><td>0.05056</td></tr><tr><td>目标波动</td><td>22.485551%</td></tr><tr><td>简单平均</td><td>22%（不等于正确插值）</td></tr><tr><td>官方假设近/远分钟</td><td>34,484 / 44,954</td></tr><tr><td>官方假设两方差</td><td>.019233906 / .019423884</td></tr><tr><td>官方假设最终计算</td><td>13.927842 → 13.93</td></tr><tr><td>K1,370单行贡献</td><td>5.32804517×10⁻⁷（非完整strip）</td></tr></tbody></table></div><p>Chicago Fed §2.1–2.3、§3.1、§4.1–4.1.1、Figure 8原文带读：合成历史1926–2022；交易期权1987–2022；标的价格分母；对齐月度roll；alpha与beta风险补偿分开。没有底层数据复现。</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json。来源内的包路径按 source_paths 取得。

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M22-SURFACE",
    "title": "曲面切片与30日总方差",
    "anchor": "m22-explore",
    "description": "先沿两个方向读IV，再把两期限总方差插到30天。",
    "data_identity": "曲面完全合成；13.93为Cboe官方假设例。论文Figure 8只提供原文定位，不生成伪历史图。",
    "shared_dataset_ids": [
      "EXP-MEFG-IV-01"
    ],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "slice",
          "label": "IV切片方向",
          "type": "select",
          "default": "strike",
          "domain_or_choices": [
            [
              "strike",
              "固定期限，横轴执行价"
            ],
            [
              "term",
              "固定执行价，横轴天数"
            ]
          ]
        },
        {
          "name": "days",
          "label": "固定期限",
          "type": "select",
          "default": "90",
          "domain_or_choices": [
            [
              "30",
              "30天"
            ],
            [
              "90",
              "90天"
            ],
            [
              "180",
              "180天"
            ]
          ]
        },
        {
          "name": "strike",
          "label": "固定执行价",
          "type": "select",
          "default": "5000",
          "domain_or_choices": [
            [
              "4500",
              "4,500"
            ],
            [
              "5000",
              "5,000"
            ],
            [
              "5500",
              "5,500"
            ]
          ]
        },
        {
          "name": "side",
          "label": "IV报价侧",
          "type": "select",
          "default": "mid",
          "domain_or_choices": [
            [
              "bid",
              "Bid"
            ],
            [
              "mid",
              "Mid"
            ],
            [
              "ask",
              "Ask"
            ]
          ]
        },
        {
          "name": "nearDays",
          "label": "近到期天数",
          "type": "number",
          "default": 24,
          "domain_or_choices": {
            "min": 1,
            "step": 1
          }
        },
        {
          "name": "farDays",
          "label": "远到期天数",
          "type": "number",
          "default": 36,
          "domain_or_choices": {
            "min": 1,
            "step": 1
          }
        },
        {
          "name": "targetDays",
          "label": "目标天数",
          "type": "number",
          "default": 30,
          "domain_or_choices": {
            "min": 1,
            "step": 1
          }
        },
        {
          "name": "nearVol",
          "label": "近年化波动（%）",
          "type": "number",
          "default": 20,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "farVol",
          "label": "远年化波动（%）",
          "type": "number",
          "default": 24,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        }
      ]
    },
    "algorithm": "All surface rows derived once from common grid via BSM, tick-rounded quotes±.2 then bid/mid/ask IV. For two variance maturities w=(Tnext-Ttarget)/(Tnext-Tnear),variance_target=(w*Tnear*var_near+(1-w)*Tnext*var_next)/Ttarget; vol=sqrt(var). Official example final stage and one named summand only; research charts never fabricated.",
    "outputs": {
      "default": {
        "near": 24,
        "far": 36,
        "target": 30,
        "vn": 0.2,
        "vf": 0.24,
        "wNear": 0.5,
        "variance": 0.05056,
        "vol": 0.22485550916088315,
        "simpleAverage": 0.22,
        "officialFinal": 13.927842240212474,
        "officialDisplayed": 13.93,
        "oneStrikeContribution": 5.328045171324416e-07,
        "officialIdentity": "Methodology v6.0 Appendix3 explicitly hypothetical (2022-09-27 10:45:15 ET label is not observed VIX)"
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M22.html",
      "unit_note": "曲面完全合成；13.93为Cboe官方假设例。论文Figure 8只提供原文定位，不生成伪历史图。"
    },
    "boundaries": [
      "quote_date=null且所有曲面数据synthetic",
      "近<远，目标在两者之间；波动非负",
      "13.93明确official hypothetical；只重建末级插值与单strike贡献",
      "论文无raw data不提供历史曲线或backtest",
      "VIX报价函数q_quote不与Q混淆"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M22-SURFACE",
      "engine": "/notebook/labs/m-efg/engine.js",
      "static_available_without_js": true
    },
    "source_id_aliases": {
      "MEFG-ODD": "MA-OCC",
      "MEFG-OCC-EQUITY": "PFH-EQUITY",
      "MEFG-OCC-ETF": "PFH-ETF",
      "MEFG-OIC-T1": "PFH-T1",
      "MEFG-SPX": "MA-SPX",
      "MEFG-MIT-OPTIONS": "PFH-MIT-OPTIONS",
      "MEFG-MIT-KOGAN": "PFH-MIT-BSM",
      "MEFG-OIC-PARITY": "PFH-PARITY",
      "MEFG-OIC-EXERCISE": "PFH-EXERCISE",
      "MEFG-CHICAGOFED-2025": "PFH-CHIFED2025"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M22.html"
  }
]
```

## Sources
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分。

SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开。无实际报价。

M-E/F/G 本批采用：SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链。
- [What could explain the recent drop in VIX?](https://www.bis.org/publications/what-could-explain-recent-drop-vix): 结构化产品/做市对冲的候选机制；总0DTE量不识别净gamma和因果VIX，不转引未读论文结论。
- [Cboe Volatility Index Mathematics Methodology](https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf): 加权方差与总方差插值；原公式Q(K)是报价函数。仅final-stage与单strike复算，不称全strip或国债样条实现。
- [Volatility Index Methodology: Cboe Volatility Index](https://cdn.cboe.com/api/global/us_indices/governance/Volatility_Index_Methodology_Cboe_Volatility_Index.pdf): VIX产品筛选、期限定常与SOQ区别；13.93是官方假设计算例，不是当日行情。
- [The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en): 数据/持有规则、标的价格收益分母、风险调整alpha与方差溢价区别；不能转成今天卖期权获利保证，也未复现TRACE/OptionMetrics/CRSP原数据。

M-E/F/G 本批采用：区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型。

本批读取范围：滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点。
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率。

M-E/F/G 本批采用：常参数、无股息模型条件下价格/偏导与Q；本批数值只采用q=0版本，不把非零股息扩展归给该读取单元；不宣称完整连续时间定理证明。

## Content relations
```json
[
  {
    "from": "zh-m22",
    "relation": "part_of",
    "to": "markets-pricing",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m22",
    "relation": "requires",
    "to": "zh-m18",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "能说明模型输入、IV及价格函数"
  },
  {
    "from": "zh-m22",
    "relation": "uses_method",
    "to": "zh-m19",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "zh-m22",
    "relation": "uses_method",
    "to": "zh-m21",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m22-question",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明。",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-question"
  },
  {
    "from": "m22-surface",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链。",
    "locator": "Full physical pp1–2; p2 specifications and relevant footnotes",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-surface"
  },
  {
    "from": "m22-vix",
    "relation": "supported_by",
    "to": "MEFG-VIX-METHOD",
    "reason": "VIX产品筛选、期限定常与SOQ区别；13.93是官方假设计算例，不是当日行情。",
    "locator": "Sections 1–5 and Appendices 1–3; physical pp3–14, stop before Appendix4 strip；Appendix2 document version; Appendix3 hypothetical sample",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-vix"
  },
  {
    "from": "m22-vix",
    "relation": "supported_by",
    "to": "MEFG-VIX-MATH",
    "reason": "加权方差与总方差插值；原公式Q(K)是报价函数。仅final-stage与单strike复算，不称全strip或国债样条实现。",
    "locator": "Physical pp3–8 / printed pp4–9: constituent, rates, single-term and constant-maturity calculation；Physical p18 / printed p19: version",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-vix"
  },
  {
    "from": "m22-study",
    "relation": "supported_by",
    "to": "PFH-CHIFED2025",
    "reason": "区分traded/synthetic、标的价格分母、滞后信息、beta hedge和动态delta；alpha衰减不等于全部风险补偿消失；未复现原始数据或后续均衡模型。",
    "locator": "§2.1–2.3 including feasibility: physical pp7–12；§3.1 data: physical pp13–14；§4.1–4.1.1: physical pp29–32; Figure8 physical p30",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-study"
  },
  {
    "from": "m22-mechanism",
    "relation": "supported_by",
    "to": "MEFG-BIS-2024",
    "reason": "结构化产品/做市对冲的候选机制；总0DTE量不识别净gamma和因果VIX，不转引未读论文结论。",
    "locator": "Full box body and footnotes; no GraphB1 numeric extraction",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m22-mechanism"
  },
  {
    "from": "m22-explore",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M22-SURFACE",
    "reason": "先沿两个方向读IV，再把两期限总方差插到30天。",
    "at_section": "m22-explore"
  }
]
```

## Related entries
