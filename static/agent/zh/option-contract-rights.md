# 期权合约：谁拥有选择，谁承担义务

从真实股票、ETF与SPXW规格辨认选择权、写出义务和交易单位；解释权利金的价格约束，并分开行权货款.

Entry: zh-m15 | Node: M15 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教M15《期权合约：谁拥有选择，谁承担义务》，内容版本2026-09-21-MEFG-review-v3. 读者已有高年级本科至研究生的数学基础.

先确认选用本篇共同正文和哪些分支，再实际读取agent_packet列出的当前必读完整原文. PDF需读脚注、表图与符号；只拿到摘要/目录/搜索片段不算完成. 记录实际版本、范围与内容对应，不沿用编辑端“已读”充当本次读取；同会话已完整取得相同版本单元可以复用. 若所需单元失败，尝试机构正式等价全文；仍缺失则指出具体单元，不凭记忆补成已读教学. runtime_reading_log从空开始.

独立学习任务：拿一份未见过的期权规格，独立填写holder/writer、乘数、允许行权时间、最终交付对象和两笔现金.
专属诊断与正向讲解：先让我说明采购/持仓为何需要选择而不是双向承诺. 给出股票call的4美元报价，追问400和10000分别买到了什么；SPXW改成现金结算时，要求重画交付对象.
反馈尺度：能够同时说出权利金是市场价格、复制成本约束和卖方不保证获利，而不是只背四个方向.

读者要求直接讲解时，按本篇连贯推导讲清，不反复问已会先修. 静态例、实验、练习必须使用本包同一输入和单位；实例价、合成价、模型价、规则时点不能混换. 练习要给完整解析，不仅打分. 仅当选读分支被采用时，将其optional reading转入当前必读.

复制理由进入教学前，实际读取MIT slides16–21与冻结EXP-STATE-01的assumptions、units、two_state、formula_contract；M15不要求读取three_state分支.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MA-OCC",
      "version": "June 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Ch I pp3–5；Ch II vanilla pp6–9、Premium / Opening and Closing pp11–12",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "权利/义务、premium与交易关闭的完整设置"
      },
      "supports": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
      "id": "M15-READ-01",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-EQUITY",
      "version": "Undated public specification; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "规格正文全文：单位、报价、行权、结算、保证金",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "真实普通股票期权口径"
      },
      "supports": "普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.",
      "id": "M15-READ-02",
      "title": "Equity Options Product Specifications",
      "authors": [
        "OCC"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-ETF",
      "version": "Undated public specification; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.theocc.com/clearance-and-settlement/clearing/etf-options",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "规格正文全文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "本篇ETF对照已经采用，故为必读而非未选分支"
      },
      "supports": "ETF份额期权的单位、实物交付与行权；不把同类产品的保证金百分比概括为统一数值.",
      "id": "M15-READ-03",
      "title": "ETF Options",
      "authors": [
        "OCC"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MA-SPX",
      "version": "©2026; WF-451400-KC; no precise issue date shown",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "两页全文，重点p2规格表",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "SPX/SPXW、AM/PM与100美元乘数"
      },
      "supports": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
      "id": "M15-READ-04",
      "title": "S&P 500 Index Options (SPX) Fact Sheet",
      "authors": [
        "Cboe Global Markets"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-MIT-OPTIONS",
      "version": "Fall 2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides16–21完整单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "读取两状态复制单元，解释M15权利金为何受复制成本约束；不展开三状态或一般定理"
      },
      "supports": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
      "id": "M15-READ-05",
      "title": "15.401 Finance Theory I, Lecture 10–11: Options",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-STATE",
      "version": "2026-09-21-v1",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "assumptions、units、two_state完整分支及formula_contract；不要求three_state分支",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "取得M15使用的K105两状态冻结输入、现金账户单位和复制公式；三状态不是本篇先修"
      },
      "supports": "M15只采用唯一冻结实验的二状态K105复制单元及共同假设；不把三状态市场引入本篇.",
      "id": "M15-READ-06",
      "title": "EXP-STATE-01 shared finite-market experiment",
      "authors": [
        "QT-F / Lead frozen teaching contract"
      ],
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
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
    "additional_files": [
      {
        "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
        "experiment_id": "EXP-STATE-01",
        "sha256": "8489fd3b74f469c3424d32a2b0738280e4e83709f081dfb24282d9afcfa8804b",
        "policy": "唯一冻结附件；M15运行时只需实际读取 assumptions、units、two_state、formula_contract，不要求三状态先修"
      }
    ],
    "experiment_id": "EXP-MEFG-M15-CONTRACT"
  },
  "entry_id": "zh-m15",
  "node_id": "M15",
  "content_version": "2026-09-21-MEFG-review-v3",
  "experiment_ids": [
    "EXP-MEFG-M15-CONTRACT"
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
    "static/M15.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M15.html"
  }
}
```

## Supplied entry
<a id="m15-purpose"></a>
## 一、把“将来要交易”与“将来可以选择交易”分开

我们先接着远期来看. 假设一家企业三个月后可能需要采购一批资产. 签一份远期，可以现在约定将来按什么条件交换；但如果采购计划取消，远期义务并不会随企业的心情取消. 企业真正需要的也许不是锁住交易，而是保留一种选择：需要时可以买，不需要时可以放弃. 期权就是把这种不对称的决策权写进合约的一类安排. [^MEFG-MIT-OPTIONS]

这里的“选择”不是说交易双方都能随时反悔. **持有人取得合约规定的选择权；建立卖出头寸的一方承担被指派后按约履行的义务.** 谁能决定是否行权，正是它与双向承诺的重要区别. 我们仍沿金融权利的读法，先找对象、数量、条件和时间，不急着给它贴上“高风险”或“保险”的标签.

令标的价格为 $S$、行权价为 $K$. 实物交付的看涨期权（call）给持有人按 $K$ 买入规定标的数量的权利；看跌期权（put）给持有人按 $K$ 卖出规定数量的权利. 这两类权利各自可以被买入，也可以被卖出建立义务，所以有四个方向，而不是“call是买、put是卖”两个方向. 现金结算产品则按规定的结算值与 $K$ 的关系支付现金，不交付标的本身. [^MEFG-ODD]

| 建立的头寸 | 持有的权利或义务 | 实物交付时的主要现金／标的方向 |
|---|---|---|
| 买入call | 有权按 $K$ 买入标的 | 行权时支付货款，取得标的 |
| 卖出call | 被指派时按 $K$ 卖出标的 | 交付标的，收到货款 |
| 买入put | 有权按 $K$ 卖出标的 | 行权时交付标的，收到货款 |
| 卖出put | 被指派时按 $K$ 买入标的 | 支付货款，接收标的 |

“卖出call”也可能只是卖掉已经持有的call来平仓. 这时卖出的是已有权利，不一定形成新的裸卖方义务. 判断账户变化，要连同开仓／平仓标记与原持仓一起看. [^MEFG-ODD]

<a id="m15-price"></a>
## 二、权利金是选择权的价格，不是一张风险罚单

现在问一个更根本的问题：为什么取得这项选择通常要付钱？以call为例，到期时若标的低于 $K$，持有人可以不用较高的合约价格买；高于 $K$ 时则可以取得价差. 与必须双向履行的远期相比，持有人保留了有利方向、可以放弃不利交换. 这种支付结构本身就是被交易的资产.

但“卖方有风险，所以随便收一笔风险费”仍然没有解释价格为什么是这个数. 考虑一个简化市场：股票今天100，一期后只有120或90两种可能，现金一期增长到原来的1.02倍. 行权价105的call到期支付为15或0. 买半股需要50，同时借入 $750/17\approx44.12$；到期还45. 两个状态下，半股减去还款恰好是 $60-45=15$ 和 $45-45=0$. 因此复制这个支付只需今天净投入 $100/17\approx5.88$. 在允许这种融资和交易的无摩擦模型内，同样支付的call价格就受这个复制成本约束. 完整的交易和定价权重在后面的复制一篇展开. [^MEFG-MIT-OPTIONS][^MEFG-STATE]

这个小例子也说明，选择权有价格并不等于卖方稳赚. 未对冲卖方的未来支出随状态而变；对冲卖方要把收到的资金投入复制组合，不能把全部权利金立刻当作可消费的利润. 若一个支付在所有可能状态都为零，名称再像期权，也不会单凭“选择权”三个字在这个模型里产生正价值.

实际上市期权的条款由合约规范确定，权利金则通过报价和交易形成. 相同series在不同场所的报价也可能暂时不同. 合约规范告诉你买了什么，交易市场告诉你当时愿意以多少钱交换它；模型给出在特定条件下的价格约束. 三者不能互相替代. [^MEFG-ODD]

<a id="case-mefg-spx-rules-2026"></a>
<a id="m15-contract"></a>
## 三、读两种真实规格，而不是把“100”背成万能乘数

OCC的普通股票期权规格说明，标准合约通常对应100股，行权后发生股票交付；公司行动可能使调整后的合约不再等于100股. Cboe的SPX规格则给出每报价点100美元、欧式行权、现金结算的结构. 两个“100”的单位不一样. [^MEFG-OCC-EQUITY][^MEFG-SPX]

| 原件对象 | 每份合约的单位 | 行权方式 | 履约对象 |
|---|---|---|---|
| 标准美国股票期权 | 通常100股，调整合约需另核 | 美式 | 股票与行权货款 |
| ETF份额期权的本篇对照 | 通常100份ETF份额，具体系列需核 | 采用OCC所列美式规格 | ETF份额与行权货款 |
| SPX／SPXW | 每指数点100美元 | 欧式 | 按指定结算值计算的现金 |

ETF本身持有证券，并不意味着ETF期权必然现金结算. 这里交付的对象是ETF份额. 反过来，SPX是指数，不存在“行权后自动收到100股指数股票”的安排. [^MEFG-OCC-ETF][^MEFG-SPX]

美式表示合约允许在到期前的规定营业日行权，欧式把行权限制在指定到期安排；这不是交易所在地，也不是现金／实物结算的另一种叫法. 同样叫SPX的产品还须区分传统AM结算与SPXW的PM结算. 对于前者，结算值采用到期日成份股开盘价格；本篇采用的SPXW对照按规定的收盘价格形成结算值. 不能拿一个屏幕上的收盘指数读数替代所有系列的最终结算规则. [^MEFG-SPX]

<a id="m15-cash"></a>
## 四、一份权利对应的三笔钱

用一个明确的教学报价：股票call，$K=100$，每份100股，买入价每股4美元. 买一份的权利金为 $4\times100=400$ 美元. 这400是期权权利的购买价，不是股票的4%首付. 日后行权仍要支付 $100\times100=10,000$ 美元，取得100股；若选择卖出平仓，则是出售期权本身，不发生这笔行权买股. [^MEFG-ODD]

我们再把同样的“50”放到SPXW. 假设权利金报价50点，一份成本为 $50\times100=5,000$ 美元；若到期结算值比 $K$ 高25点，现金支付是2,500美元. 指数点、期权报价点与美元需要通过乘数连接，不能直接相加.

| 现金对象 | 本教学例中的数 | 它回答的问题 |
|---|---:|---|
| 股票call权利金 | 400美元 | 买入权利花了多少 |
| 股票call行权货款 | 10,000美元 | 真正交换100股需要付多少 |
| 卖方所需抵押 | 本节不填统一数值 | 卖方履约要提供什么支持 |

第三栏没有从400或10,000自动推出来. 抵押规则取决于产品、头寸和账户；它也不是卖方可能亏损的上限. 下一篇先比较到期所得与投资损益，再在行权一篇进入账户账本.

<a id="m15-explore"></a>
## 五、沿图读合约

<div data-experiment-slot="EXP-MEFG-M15-CONTRACT"></div>

实验把两件事放在同一个面板里. 上方权利卡随产品、call／put与多空方向变化，显示谁拥有选择、谁承担条件义务；下方两条曲线则只针对**当前选中的这一头寸**，分别画到期合约支付与扣除初始权利金后的名义交易损益. 两条曲线之间的垂直差额来自权利金现金，不是“多头与空头互为相反数”的两条支付线. 若切换同一合约的long／short，在其他教学输入不变时，对应支付和名义损益才分别反号. 先把标的价格移到 $K$ 的两侧，再问权利是否有价值，以及权利金怎样把支付变成交易损益.

无交互时，按 $K=100$、乘数100，直接检查下表即可. 所有金额都是到期经济支付；实物交收另按相应合约流程处理.

| 到期标的价格 | 买入call支付 | 买入put支付 | 卖出call支付 | 卖出put支付 |
|---:|---:|---:|---:|---:|
| 90 | 0 | 1,000 | 0 | −1,000 |
| 100 | 0 | 0 | 0 | 0 |
| 110 | 1,000 | 0 | −1,000 | 0 |

<a id="m15-exercises"></a>
## 六、把权利卡自己填完

**题一.** 某股票call每份100股，$K=100$，你以4买入一份. 标的升至105，准备行权. 是否只需再付9,600美元？

**解析.** 不对. 400购买的是期权，行权交换仍是100股乘100美元，即10,000. 以标的105做经济价值比较时，取得股票值10,500，交换本身产生500差额，再扣原权利金400才是忽略其他成本的100损益. 把400从行权货款再扣一次，就把权利金误当首付.

**题二.** 一份put的买方后来行权，谁买入标的？“put是卖，所以所有参与者都卖股票”有什么问题？

**解析.** put持有人有权交出标的并收取行权货款；被指派的put卖方负有接收标的、支付货款的义务. 相同合约的两边方向相反. 还须区分卖出已有put平仓与卖出开仓承担义务.

**题三.** 买入一份SPXW call后到期价内，为什么不能预期账户出现100股？

**解析.** 规格中的100是美元／指数点乘数，不是股票数. 最终现金额依据该系列指定结算值与 $K$ 的差形成；交易之前需要读到期与结算条款，而不是只看“call”名称.

**题四.** 在上面的120／90两状态模型中，卖方收到约5.88，能否立刻说这就是他的收益？

**解析.** 若不对冲，他仍可能支付15；若按复制方式对冲，他需要把5.88与借入的44.12一起买半股，并承担到期45的还款. 5.88是负债对应的市场价格，不是无条件净利润. 改变对未来状态的判断会改变未对冲持仓的期望结果，却不会在交易条件不变时自动改掉复制成本.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-OCC-EQUITY]: OCC，*Equity Options Product Specifications*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications). 本篇定位：Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin.

[^MEFG-OCC-ETF]: OCC，*ETF Options*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/etf-options). 本篇定位：Full displayed product body.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>


## Additional teaching material
### 本篇默认结果与静态等价



<p>股票／ETF期权通常每份100股／份、美式、实物交付；SPXW为欧式现金、100美元／点. 调整合约须重读交付单位.</p>
<div class="table-wrap"><table><thead><tr><th>默认：买一份股票call</th><th>金额/单位</th></tr></thead><tbody>
<tr><td>K / 初始premium / 到期股票</td><td>100 / 4 / 110</td></tr>
<tr><td>初始premium现金</td><td>−400美元</td></tr>
<tr><td>条件到期支付</td><td>1,000美元</td></tr>
<tr><td>扣premium名义损益</td><td>600美元</td></tr>
<tr><td>若行权：毛款 / 股票</td><td>+100股、支付10,000美元</td></tr>
</tbody></table></div>
<p>交互中的两条曲线也是“当前选中头寸”的到期支付与扣权利金后的名义损益；二者相差权利金现金，并不是同屏多空支付.</p>
<div class="table-wrap"><table><thead><tr><th>现金结算SPXW call教学例</th><th>结果</th></tr></thead><tbody>
<tr><td>K / 结算值 / premium</td><td>5000 / 5025 / 50点</td></tr>
<tr><td>premium现金</td><td>−5,000美元</td></tr>
<tr><td>到期现金支付</td><td>+2,500美元</td></tr>
<tr><td>名义P&amp;L</td><td>−2,500美元</td></tr>
<tr><td>股票变化 / K×100买股货款</td><td>0股 / 不适用</td></tr>
</tbody></table></div>
<p>SPXW持有人取得的是按最终结算值与K计算的正差额现金；写出方承担对应现金义务. 100是美元／指数点乘数，不是股票数.</p>


完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M15-CONTRACT",
    "title": "期权的权利与现金",
    "anchor": "m15-explore",
    "description": "先判断选择权在哪一方，再看权利金、行权货款和终点支付.",
    "data_identity": "真实产品规则；所有价格为教学设定. 选择方向并不等于执行了交易.",
    "shared_dataset_ids": [],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "product",
          "label": "产品规则",
          "type": "select",
          "default": "equity",
          "domain_or_choices": [
            [
              "equity",
              "普通股票期权"
            ],
            [
              "etf",
              "ETF期权"
            ],
            [
              "spxw",
              "PM SPXW"
            ]
          ]
        },
        {
          "name": "kind",
          "label": "权利",
          "type": "select",
          "default": "call",
          "domain_or_choices": [
            [
              "call",
              "Call"
            ],
            [
              "put",
              "Put"
            ]
          ]
        },
        {
          "name": "side",
          "label": "持仓",
          "type": "select",
          "default": "long",
          "domain_or_choices": [
            [
              "long",
              "买入权利"
            ],
            [
              "short",
              "卖出权利"
            ]
          ]
        },
        {
          "name": "contracts",
          "label": "合约份数",
          "type": "number",
          "default": 1,
          "domain_or_choices": {
            "min": 1,
            "max": 50,
            "step": 1
          }
        },
        {
          "name": "strike",
          "label": "行权价（股价/指数点）",
          "type": "number",
          "default": 100,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "premium",
          "label": "权利金报价（每股/点）",
          "type": "number",
          "default": 4,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "terminal",
          "label": "到期标的值",
          "type": "number",
          "default": 110,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        }
      ]
    },
    "algorithm": "payoff = sign * n * multiplier * max(call: ST-K; put: K-ST, 0); premium cash = -sign*n*m*premium; nominal P&L = payoff + premiumCash. Physical exercise conditional gross strike cash is ±n*m*K; SPXW shares=0.",
    "outputs": {
      "default": {
        "product": "equity",
        "kind": "call",
        "side": "long",
        "contracts": 1,
        "strike": 100,
        "premium": 4,
        "terminal": 110,
        "multiplier": 100,
        "style": "American",
        "settlement": "实物",
        "premiumCash": -400,
        "payoff": 1000,
        "nominalPnl": 600,
        "grossStrikeCash": -10000,
        "sharesIfExercised": 100,
        "exerciseFlowStatus": "conditional_on_exercise; not automatic exercise or account funding",
        "dataIdentity": "real product units/style; all prices synthetic"
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M15.html",
      "unit_note": "真实产品规则；所有价格为教学设定. 选择方向并不等于执行了交易."
    },
    "boundaries": [
      "所有价格是教学值；合约调整可能改变通常100单位",
      "支付曲线只在到期；不把短仓premium当利润",
      "行权毛现金是条件货款，不保证融资或自动指令"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M15-CONTRACT",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M15.html"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.

SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价.

M-E/F/G 本批采用：SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.
- [EXP-STATE-01 shared finite-market experiment](https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json): 唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.
- [Equity Options Product Specifications](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications): 标准未调整股票期权100股、美元报价、美式行权与实物交割. 只支持合约身份，不代表具体账户可交易或保证金额度.

M-E/F/G 本批采用：普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.
- [ETF Options Product Specifications](https://www.theocc.com/clearance-and-settlement/clearing/etf-options): 未调整标准合约通常100股、American exercise与T+1实物交割；调整系列另核.

M-E/F/G 本批采用：ETF份额期权的单位、实物交付与行权；不把同类产品的保证金百分比概括为统一数值.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 逐腿相加的保护、价差和跨式支付；不承担现行结算规则.

M-E/F/G 本批采用：模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.

## Content relations
```json
[
  {
    "from": "zh-m15",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m15",
    "relation": "requires",
    "to": "zh-financial-claims",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "识别权利义务、数量、币种和条件"
  },
  {
    "from": "zh-m15",
    "relation": "uses_method",
    "to": "zh-m03",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m15-purpose",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-purpose"
  },
  {
    "from": "m15-purpose",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-purpose"
  },
  {
    "from": "m15-price",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-price"
  },
  {
    "from": "m15-price",
    "relation": "supported_by",
    "to": "MEFG-STATE",
    "reason": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
    "locator": "Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-price"
  },
  {
    "from": "m15-price",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-price"
  },
  {
    "from": "m15-contract",
    "relation": "supported_by",
    "to": "PFH-EQUITY",
    "reason": "普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.",
    "locator": "Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-contract"
  },
  {
    "from": "m15-contract",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
    "locator": "Full physical pp1–2; p2 specifications and relevant footnotes",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-contract"
  },
  {
    "from": "m15-contract",
    "relation": "supported_by",
    "to": "PFH-ETF",
    "reason": "ETF份额期权的单位、实物交付与行权；不把同类产品的保证金百分比概括为统一数值.",
    "locator": "Full displayed product body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-contract"
  },
  {
    "from": "m15-cash",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m15-cash"
  },
  {
    "from": "m15-explore",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M15-CONTRACT",
    "reason": "先判断选择权在哪一方，再看权利金、行权货款和终点支付.",
    "at_section": "m15-explore"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 14/17
从真实规格写出双方权利、乘数、结算对象和两笔现金，并解释复制成本的价格约束.
两笔现金分清后，在相同财富起点比较结果.
Next: [到期支付、交易损益与回报分母](https://ou-liu-red-sugar.github.io/zh/notebook/option-payoff-profit-return/)
