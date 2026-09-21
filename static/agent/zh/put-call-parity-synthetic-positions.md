# 平价与合成：终端支付、现金腿与可执行价格

逐状态保留行权价现金腿，推导平价；用真实交易方向的合成bid/ask检查中价偏离.

Entry: zh-m20 | Node: M20 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你正在教M20《平价与合成：终端支付、现金腿与可执行价格》，内容版本2026-09-22-deep-review. 读者已有高年级本科至研究生的数学基础.

教学前读取agent_packet列出的当前必读原文完整指定单元，并在runtime_reading_log记录实际版本、范围与内容对应；同会话已完整读取的相同版本单元可复用. 缺失单元只限制对应讲解，采用选读分支时再读取其材料.

独立学习任务：先验证每个终点状态的现金相等，再写两方向初始bid/ask交易现金.
专属诊断与正向讲解：从到期支付 $C_T-P_T=S_T-K$ 出发，先逐状态核对；再加入今天投入 $K/R$ 的现金腿，得到 $C_0-P_0=S_0-K/R$. 随后用5.8/6.2等报价逐腿买ask卖bid. mid差+.041176不允许直接命名套利.
反馈尺度：要报告每方向资金、借款/借券、同步与足量条件；终点0不等于初始免费.

按本篇顺序连贯讲解；静态例、实验和练习使用同一组输入与单位，区分实例价、合成价、模型价和规则时点. 练习给出完整解析；采用选读分支时再读取对应材料.


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
      "source_id": "PFH-PARITY",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/put-call-parity",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整正文，含合成表、精确欧式公式、融资股息和摩擦段",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "不丢strike现金腿、区分理论与成交"
      },
      "supports": "合成支付与融资条件；简写合成表遗漏的行权价现金腿须补齐，美式不能一律套欧式等式.",
      "id": "M20-READ-01",
      "title": "Put/Call Parity",
      "authors": [
        "Options Industry Council"
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
        "purpose": "逐状态复制"
      },
      "supports": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
      "id": "M20-READ-02",
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
        "locator": "assumptions、units、two_state完整分支及formula_contract",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "K105冻结市场与独立bid/ask变式分开"
      },
      "supports": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
      "id": "M20-READ-03",
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
        "policy": "唯一冻结市场，原字节保留；运行时实际读取"
      }
    ],
    "experiment_id": "EXP-MEFG-M20-PARITY"
  },
  "entry_id": "zh-m20",
  "node_id": "M20",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M20-PARITY"
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
    "static/M20.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M20.html"
  }
}
```

## Supplied entry
<a id="m20-payoff"></a>
## 一、终端支付与现金腿

令call与put具有同一标的、同一行权价 $K$、同一到期日，并采用欧式、无股息、可持有股票与现金、借贷利率相同且无费用或交易约束的市场. 在这些条件下，先逐状态比较终端支付，再比较当前价格.[^MEFG-OIC-PARITY]

无论 $S_T$ 大于还是小于 $K$，
$$
(S_T-K)^+-(K-S_T)^+=S_T-K.
$$
买call、卖put在到期时的合计支付为$S_T-K$. 同时存入足够到期变成$K$的现金后，合计支付才与一股股票相同.

<a id="m20-parity"></a>
## 二、两状态平价勾稽

采用共同有限市场：$B_0=1$，$B_1=R=1.02$，股票100变为120或90；本分支 $K=105$. 两种期权到期支付分别为call的 $(15,0)$ 与put的 $(0,15)$. [^MEFG-STATE]

| 到期状态 | call支付 | put支付 | call−put | 到期支付105的现金＋call−put | 股票价值 |
|---|---:|---:|---:|---:|---:|
| 上涨 | 15 | 0 | 15 | 120 | 120 |
| 下跌 | 0 | 15 | −15 | 90 | 90 |

若今天存入 $K/R=105/1.02$，到期可支付105. 因此相同终端支付的价格关系为
$$
C+\frac K R=P+S_0,
\qquad
C-P=S_0-\frac K R.
$$
共同模型中$C=100/17$、$P=150/17$，价格差为$-50/17\approx-2.941$. [复制定价](https://ou-liu-red-sugar.github.io/zh/notebook/replication-state-prices-risk-neutral-probability/)从股票与现金求得两个期权各自的价格. [^MEFG-MIT-OPTIONS]

平价也给价格界提供直觉. 例如无股息欧式call不低于 $\max(S_0-K/R,0)$，而不是无条件不低于 $S_0-K$；put的相应融资关系涉及 $K/R-S_0$. 对立刻允许行权的美式，决策集合改变，不能把上述欧式等式原封不动套过去. 已知现金股息还需把持股期间现金计入；不同借贷成本与借券约束则把理想等式变成需要逐腿检查的区间或单向约束. [^MEFG-OIC-PARITY]

<a id="m20-execution"></a>
## 三、Bid/Ask 下的可执行平价

另设带买卖价差的教学报价，保持$K=105$和现金增长因子1.02：

| 工具 | bid | ask | mid |
|---|---:|---:|---:|
| 股票 | 99.95 | 100.05 | 100.00 |
| call | 5.80 | 6.20 | 6.00 |
| put | 8.70 | 9.10 | 8.90 |

若只把中价代入，得到
$$
6-8.9-100+\frac{105}{1.02}\approx0.041.
$$
这个“偏离”来自中价，但你不能要求所有腿按中价足额成交. 为了核可交易现金，先定义**初始净现金为收到减付出**；正数表示手里剩下现金，负数表示还需投入.

第一条方向是卖call、借入 $K/R$、买put和股票. 卖用bid，买用ask：
$$
a_1=5.8+\frac{105}{1.02}-9.1-100.05\approx-0.409.
$$
到期支付 $-C_T-K+P_T+S_T=0$，但起点已经需要净付0.409.

反方向是卖股票和put、买call并存入 $K/R$：
$$
a_2=99.95+8.7-6.2-\frac{105}{1.02}\approx-0.491.
$$
到期 $-S_T-P_T+C_T+K=0$，起点同样要净付. 两方向都没有留下正的初始现金；加上额外费用只会更差.

| 检查 | 第一方向 | 反方向 |
|---|---:|---:|
| 初始净现金 | −0.409 | −0.491 |
| 理论到期净支付 | 0 | 0 |
| 已证明无风险套利？ | 否 | 否 |

这里的价格按每个标的单位计量，并允许分割. 若映射到上市合约，还需加入合约乘数；若判断可执行套利，还需逐腿满足同步成交、融资、借券与足够深度等条件.

<a id="m20-feasibility"></a>
## 四、复制交易的实施条件

两个组合终端支付相同而价格不同，且买入便宜组合、卖出昂贵组合及相关资金安排均可实施时，价差构成套利. 交易约束决定这些头寸是否可建立.

第一方向需要融资买入股票和put、卖出call；反方向需要卖空股票并卖出put. 若借不到股票，反方向就不能按原设定实施. 若某报价滞后，下一秒另一条腿的价格可能已经变动；若一个产品允许提前行权而另一个不允许，原先只按共同到期日设计的现金账也不再完整. [^MEFG-OIC-PARITY]

合成远期的支付为$S_T-K$，可以为正或负. 在本市场中，交割价$K=RS_0=102$时初始价值为零；改为$K=105$，初始价值就是$S_0-105/R$. 交割价与远期当前价值由这条关系连接.

<a id="m20-explore"></a>
## 五、状态支付与初始现金

<div data-experiment-slot="EXP-MEFG-M20-PARITY"></div>

实验列出两个方向的bid/ask现金账，同时显示中价偏离. 改变报价会重算净额；关闭融资、借券、同步或深度条件时，相应交易路径变为不可执行，账面差额仅作比较.

静态阅读时，按上表分别把“收到”与“付出”分开加总即可：第一方向收到108.741、付出109.15；反方向收到108.65、付出109.141. 每条账到期归零，起点差额才是该检查的重点.

<a id="m20-exercises"></a>
## 六、现金腿与执行约束检验

**题一.** “买call、卖put等于买股票”在本例缺了哪一条现金腿？

**解析.** 前者到期支付 $S_T-105$，还要加到期支付105的现金资产，才能变成股票支付 $S_T$. 这笔资产今天成本 $105/1.02$. 不计现金腿就把一个有融资成分的合成头寸冒充裸股票.

**题二.** 中间价偏离为＋0.041. 为什么第一方向真正使用买卖边后反而需要付0.409？

**解析.** 卖call只能按5.8，买put需9.1，买股需100.05. 中价不是所有腿的可执行价格. 把各腿恢复到正确bid／ask，交易成本立刻超过中价缝隙.

**题三.** 若反方向初始净额出现正数，但股票无法借到，应该怎样展示？

**解析.** 可以报告“报价代数提示这个方向”，但执行状态必须标为受借券约束而未完成. 不能给它一个真实无风险利润，也不能悄悄把不能卖空的股票腿删掉.

**题四.** 为什么共同模型公平远期交割价是102，而本篇平价仍用105？

**解析.** 102使远期初值 $S_0-K/R$ 为零；105是两份期权的给定行权价. 不同 $K$ 对应不同初始价值的合成远期，不能为了让公式“漂亮”就改合约条款.

[^MEFG-OIC-PARITY]: Options Industry Council，*Put/Call Parity*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/put-call-parity). 本篇定位：Full article including formulas, financing/dividend/friction discussion.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>工具</th><th>bid</th><th>ask</th></tr></thead><tbody><tr><td>股</td><td>99.95</td><td>100.05</td></tr><tr><td>call</td><td>5.8</td><td>6.2</td></tr><tr><td>put</td><td>8.7</td><td>9.1</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>对象</th><th>默认结果</th></tr></thead><tbody><tr><td>PV(105)</td><td>102.941176</td></tr><tr><td>mid平价差</td><td>+0.041176</td></tr><tr><td>方向一初始净收款</td><td>−0.408824</td></tr><tr><td>方向二初始净收款</td><td>−0.491176</td></tr><tr><td>匹配支付的终点净额</td><td>两方向均0</td></tr></tbody></table></div><p>方向一：卖call＋借PV(K)−买put−买股；方向二反过来. 两个方向均需初始投入. 只在同K/T、欧式、无分红、同借贷率、允许各腿且同步足量时使用这张表.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M20-PARITY",
    "title": "平价：用哪一侧成交",
    "anchor": "m20-explore",
    "description": "中价看似有缝，先把买入ask、卖出bid和现金腿全部列出来.",
    "data_identity": "独立合成bid/ask账本；同利率、无分红欧式合约. 核心冻结市场不加入价差开关.",
    "shared_dataset_ids": [],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": "data/qt-f-shared-state-experiment.json",
      "controls": [
        {
          "name": "stockBid",
          "label": "股票bid",
          "type": "number",
          "default": 99.95,
          "domain_or_choices": {
            "min": 0,
            "step": 0.01
          }
        },
        {
          "name": "stockAsk",
          "label": "股票ask",
          "type": "number",
          "default": 100.05,
          "domain_or_choices": {
            "min": 0,
            "step": 0.01
          }
        },
        {
          "name": "callBid",
          "label": "call bid",
          "type": "number",
          "default": 5.8,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "callAsk",
          "label": "call ask",
          "type": "number",
          "default": 6.2,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "putBid",
          "label": "put bid",
          "type": "number",
          "default": 8.7,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "putAsk",
          "label": "put ask",
          "type": "number",
          "default": 9.1,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "fee",
          "label": "每方向额外费用／单位标的",
          "type": "number",
          "default": 0,
          "domain_or_choices": {
            "min": 0,
            "step": 0.05
          }
        },
        {
          "name": "capital",
          "label": "模型净启动资金",
          "type": "number",
          "default": 1,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "borrowing",
          "label": "可以按设定利率借款",
          "type": "check",
          "default": true,
          "domain_or_choices": {}
        },
        {
          "name": "stockShort",
          "label": "可以卖空股票",
          "type": "check",
          "default": true,
          "domain_or_choices": {}
        },
        {
          "name": "synchronous",
          "label": "报价同步",
          "type": "check",
          "default": true,
          "domain_or_choices": {}
        },
        {
          "name": "depth",
          "label": "各腿数量均足够",
          "type": "check",
          "default": true,
          "domain_or_choices": {}
        },
        {
          "name": "terms",
          "label": "相同K/T及欧式无分红",
          "type": "check",
          "default": true,
          "domain_or_choices": {}
        }
      ]
    },
    "algorithm": "PV=105/1.02; a1=call_bid+PV-put_ask-stock_ask-fee; a2=stock_bid+put_bid-call_ask-PV-fee. Mid gap separate. Terminal net payoff=0 only under European/no-dividend/sameK/T conditions. Direction1 needs borrowing; direction2 stock borrow; both synchronous/depth/terms; startup capital>=max(-receipt,0).",
    "outputs": {
      "default": {
        "quotes": {
          "stock": {
            "bid": 99.95,
            "ask": 100.05,
            "mid": 100
          },
          "call": {
            "bid": 5.8,
            "ask": 6.2,
            "mid": 6
          },
          "put": {
            "bid": 8.7,
            "ask": 9.1,
            "mid": 8.899999999999999
          }
        },
        "PV": 102.94117647058823,
        "midGap": 0.041176470588226266,
        "conditions": {
          "borrowing": true,
          "stockShort": true,
          "depth": true,
          "synchronous": true,
          "terms": true
        },
        "fee": 0,
        "directions": [
          {
            "label": "卖call＋借PV(K)－买put－买股票",
            "initialNetReceipt": -0.40882352941176237,
            "neededCapital": 0.40882352941176237,
            "status": "no_positive_initial_receipt",
            "terminalNet": 0,
            "capitalModel": "simultaneous net-funding with stated permissions; broker gross margin not modeled"
          },
          {
            "label": "卖股票＋卖put－买call－存PV(K)",
            "initialNetReceipt": -0.4911764705882291,
            "neededCapital": 0.4911764705882291,
            "status": "no_positive_initial_receipt",
            "terminalNet": 0,
            "capitalModel": "simultaneous net-funding with stated permissions; broker gross margin not modeled"
          }
        ],
        "identity": "separate synthetic executable-side model; core EXP-STATE-01 unchanged"
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M20.html",
      "unit_note": "独立合成bid/ask账本；同利率、无分红欧式合约. 核心冻结市场不加入价差开关."
    },
    "boundaries": [
      "模型启动资本按同步净资金，不是客户账户实际毛margin",
      "借券/借款/时间/深度任何缺失，撤下可执行解释",
      "核心无摩擦市场没有被修改",
      "正初始收款仅在全部假设可实施时构成条件套利"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M20-PARITY",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M20.html"
  }
]
```

## Sources
- [EXP-STATE-01 shared finite-market experiment](https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json): 唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 保护性组合、价差与跨式的逐腿支付，以及模型内的经济复制和定价. 现金账户的增长因子按讲义定义使用.
- [Put/Call Parity](https://www.optionseducation.org/advancedconcepts/put-call-parity): 看涨与看跌期权平价关系中的标的、行权价、期限、资金、分红和行权方式条件；合成组合包含行权价现金腿.

## Content relations
```json
[
  {
    "from": "zh-m20",
    "relation": "part_of",
    "to": "markets-pricing",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m20",
    "relation": "requires",
    "to": "zh-m16",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "能逐状态区分支付、P&L与投入"
  },
  {
    "from": "zh-m20",
    "relation": "uses_method",
    "to": "zh-m06",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "zh-m20",
    "relation": "uses_method",
    "to": "zh-m17",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m20-payoff",
    "relation": "supported_by",
    "to": "PFH-PARITY",
    "reason": "合成支付与融资条件；简写合成表遗漏的行权价现金腿须补齐，美式不能一律套欧式等式.",
    "locator": "Full article including formulas, financing/dividend/friction discussion",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m20-payoff"
  },
  {
    "from": "m20-parity",
    "relation": "supported_by",
    "to": "MEFG-STATE",
    "reason": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
    "locator": "Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m20-parity"
  },
  {
    "from": "m20-parity",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m20-parity"
  },
  {
    "from": "m20-parity",
    "relation": "supported_by",
    "to": "PFH-PARITY",
    "reason": "合成支付与融资条件；简写合成表遗漏的行权价现金腿须补齐，美式不能一律套欧式等式.",
    "locator": "Full article including formulas, financing/dividend/friction discussion",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m20-parity"
  },
  {
    "from": "m20-feasibility",
    "relation": "supported_by",
    "to": "PFH-PARITY",
    "reason": "合成支付与融资条件；简写合成表遗漏的行权价现金腿须补齐，美式不能一律套欧式等式.",
    "locator": "Full article including formulas, financing/dividend/friction discussion",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m20-feasibility"
  },
  {
    "from": "m20-explore",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M20-PARITY",
    "reason": "中价看似有缝，先把买入ask、卖出bid和现金腿全部列出来.",
    "at_section": "m20-explore"
  }
]
```

## Related entries
