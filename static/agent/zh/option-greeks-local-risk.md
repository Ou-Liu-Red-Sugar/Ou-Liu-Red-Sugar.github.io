# Greeks：把局部导数变成带单位的风险

把delta、gamma、vega、theta写成带单位的局部导数，用50点和500点完整重定价量化误差.

Entry: zh-m19 | Node: M19 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你正在教M19《Greeks：把局部导数变成带单位的风险》，内容版本2026-09-22-deep-review. 读者已有高年级本科至研究生的数学基础.

教学前读取agent_packet列出的当前必读原文完整指定单元，并在runtime_reading_log记录实际版本、范围与内容对应；同会话已完整读取的相同版本单元可复用. 缺失单元只限制对应讲解，采用选读分支时再读取其材料.

独立学习任务：给定单位及固定条件，计算一阶/部分二阶近似，并用完整定价指出小变动和大变动误差.
专属诊断与正向讲解：用50点后用500点，要求先判断vega是每一个百分点还是sigma=1，再将点数乘100. 最后解释delta .556803与N(d2) .510441不同.
反馈尺度：输入多个变量变化时不声称只加spot gamma已经包含所有二阶项；期权点、美元和概率不混.

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
      "source_id": "MEFG-OIC-DELTA",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/delta",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整概念正文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "带单位的局部敏感度与适用条件"
      },
      "supports": "局部价格敏感度和对冲单位；概率近似不能升级成P下概率恒等.",
      "id": "M19-READ-01",
      "title": "Delta",
      "authors": [
        "Options Industry Council"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-OIC-GAMMA",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/gamma",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整概念正文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "带单位的局部敏感度与适用条件"
      },
      "supports": "delta的局部变化；全组合或做市商净gamma须另有持仓资料.",
      "id": "M19-READ-02",
      "title": "Gamma",
      "authors": [
        "Options Industry Council"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-OIC-VEGA",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/vega",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整概念正文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "带单位的局部敏感度与适用条件"
      },
      "supports": "波动率参数的偏导和每百分点单位；IV不是独立的P下预测.",
      "id": "M19-READ-03",
      "title": "Vega",
      "authors": [
        "Options Industry Council"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-OIC-THETA",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/advancedconcepts/theta",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整概念正文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "带单位的局部敏感度与适用条件"
      },
      "supports": "固定其余变量的日历时间局部敏感度；非所有欧式期权必然价值递减.",
      "id": "M19-READ-04",
      "title": "Theta",
      "authors": [
        "Options Industry Council"
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
        "purpose": "BSM模型假设/公式，解析与差分校验"
      },
      "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明.",
      "id": "M19-READ-05",
      "title": "15.450: Stochastic Calculus and Option Pricing",
      "authors": [
        "Leonid Kogan",
        "MIT OpenCourseWare"
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
    "additional_files": [],
    "experiment_id": "EXP-MEFG-M19-GREEKS"
  },
  "entry_id": "zh-m19",
  "node_id": "M19",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M19-GREEKS"
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
    "static/M19.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M19.html"
  }
}
```

## Supplied entry
<a id="m19-variables"></a>
## 一、Greeks 的变量与单位

Greeks是期权价格对各输入的局部导数. 它们给出小幅变动的近似；变动扩大时，需要比较导数近似与完整价格函数的重算结果.

令期权价格为 $V(S,\sigma,\tau,r,q_{\rm div})$，其中 $\tau$ 是剩余年数. 固定其他变量，
$$
\Delta=\frac{\partial V}{\partial S},\qquad
\Gamma=\frac{\partial^2V}{\partial S^2},\qquad
\text{Vega}_{\rm abs}=\frac{\partial V}{\partial\sigma}.
$$
若用日历时间前进一日来定义theta，固定到期日时剩余年数减少 $1/365$，本篇的日theta是 $-\frac1{365}\frac{\partial V}{\partial\tau}$. 有些资料按年、交易日或其他单位报告，数值不能不经换算就拼在一张表上. [^MEFG-OIC-DELTA][^MEFG-OIC-GAMMA][^MEFG-OIC-VEGA][^MEFG-OIC-THETA]

<a id="m19-default"></a>
## 二、同一模型切片下的 Greeks

使用与价格一篇完全相同的合成切片：$S=K=5,000$，$\tau=90/365$，$r=4\%$，$q_{\rm div}=0$，$\sigma=23.5\%$，欧式call，乘数100美元／期权点. 下面的Greeks均由同一BSM函数计算.[^MEFG-MIT-KOGAN]

| 对象 | 默认值 | 单位及解释 |
|---|---:|---|
| 价格 | 256.856 | 期权报价点 |
| delta | 0.557 | 每变动1指数点，期权点数的局部变化 |
| gamma | $6.768\times10^{-4}$ | 每变动1指数点，delta的局部变化 |
| vega | 9.804 | 波动率提高**1个百分点**时，期权点数的局部变化 |
| theta | −1.557 | 日历前进1日时，固定其余输入的局部变化 |
| 合约乘数 | 100 | 每期权报价点对应美元 |

一份合约的delta金额敏感度约为55.68美元／指数点；vega约为980.44美元／波动率百分点. 将 $\sigma$ 从0.235变成0.245是提高1个百分点，而不是把 $\sigma$ 加1. 若使用数学导数 $\partial V/\partial\sigma$，其数值应比每百分点vega大100倍.

0.557是模型对SPX指数水平的局部导数. 若以ETF、期货或其他组合实施对冲，还需转换单位并处理基差与可成交性.[^MEFG-SPX]

<a id="m19-curvature"></a>
## 三、Delta–Gamma 近似误差

只改变 $S$ 时，泰勒展开给出
$$
\Delta V\approx\Delta\,\Delta S
+\frac12\Gamma(\Delta S)^2.
$$
保留第一项是delta近似，加入第二项是delta加gamma近似. 这里的 $\Delta,\Gamma$ 均在起点计算.

| 标的变动 | delta一阶变化 | delta＋gamma二阶变化 | 完整BSM重算变化 |
|---:|---:|---:|---:|
| ＋50指数点 | 27.84 | 28.686 | 28.679 |
| ＋500指数点 | 278.401 | 363.002 | 353.165 |

对50点变动，一阶少算约0.839点；二阶误差仅约0.007点. 对500点变动，二阶仍然比一阶更近，却高出约9.838点. 现金误差还要乘100. gamma项保留了起点的二阶曲率.

call价格曲线的斜率随$S$增大，起点切线因而低于完整凸曲线. 起点gamma只能描述当地曲率；移动较大时，曲率变化会产生更高阶误差. [^MEFG-OIC-GAMMA][^MEFG-MIT-KOGAN]

<a id="m19-vol-time"></a>
## 四、Vega、Theta 与尺度

把 $S$ 固定，改 $\sigma$. 本例的每百分点vega给出的比较为：

| 波动率变化 | vega局部预测 | 完整重算 |
|---:|---:|---:|
| 23.5% → 24.5% | ＋9.804点 | ＋9.805点 |
| 23.5% → 33.5% | ＋98.044点 | ＋98.068点 |

本切片的vega近似误差较小；临近到期或远离平值时，vega随输入的变化形状不同，需重新比较误差.

日theta约−1.557，表示固定现价、模型波动率、利率与股息输入后，日历时间前进一日的局部价格变化. 次日市场价格还受其他输入变化影响. 对深度价内欧式put，时间流逝使收到$K$的时点接近，日theta可以为正. [^MEFG-OIC-THETA]

同时改变$S,\sigma$和日历时间时，起点delta、gamma、vega、theta之和仍遗漏交叉导数和其他高阶项. 实验显示完整重算结果及其与近似的差值.

<a id="m19-probability"></a>
## 五、Delta 与概率的区分

在本无股息BSM call中，delta等于 $N(d_1)$；同模型定价概率下的到期价内概率为 $N(d_2)$. 本例两者分别为
$$
N(d_1)\approx0.557,\qquad N(d_2)\approx0.510.
$$
两个数分别衡量局部价格敏感度和指定测度下的事件概率. [^MEFG-MIT-KOGAN]

其中$Q$由定价关系确定；研究现实发生频率时另需概率$P$. 改变现实概率判断可以改变期望损益，同时保留当前市场给出的定价权重.

<div data-experiment-slot="EXP-MEFG-M19-GREEKS"></div>

实验第一视角画完整价格曲线、起点切线和起点二阶曲线；第二视角比较两种近似相对于完整重算的误差. 默认可直接选50点和500点，或者改波动率百分点、时间天数. 切到美元显示时只做100倍单位换算，不改变模型.

<a id="m19-exercises"></a>
## 六、局部近似的适用范围

**题一.** 一份本例call，指数上升50点，delta近似的美元变化是多少？二阶与完整重算分别是多少？

**解析.** 期权点变化依次为27.84、28.686和28.679，乘100得到约2,784.01、2,868.61和2,867.94美元.

**题二.** 某人把每百分点vega 9.804乘以0.01，计算波动率从23.5%变24.5%的变化. 错在哪里？

**解析.** 9.804本来已经是每一个百分点的报价量，应乘1. 若要乘0.01，应使用按一整个绝对 $\sigma$ 单位报告的导数980.444. 两种单位正确换算后结果相同.

**题三.** 本例500点移动中二阶近似高于完整重算，是否否定gamma为正？

**解析.** 没有. gamma为正是价格函数在起点的曲率信息；大区间移动时曲率本身改变，还存在更高阶项. 二阶多项式不是整条价格函数.

**题四.** delta为0.557，能否宣称“我有55.68%的真实概率盈利”？

**解析.** 不能. 首先delta是导数，本例连 $Q$ 下的价内概率都只有0.51；其次价内不等于覆盖权利金后盈利；最后 $Q$ 不等于现实 $P$. 这三个区别要依次保留.

[^MEFG-OIC-DELTA]: Options Industry Council，*Delta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/delta). 本篇定位：Full main concept body.

[^MEFG-OIC-GAMMA]: Options Industry Council，*Gamma*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/gamma). 本篇定位：Full main concept body.

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/vega). 本篇定位：Full main concept body.

[^MEFG-OIC-THETA]: Options Industry Council，*Theta*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/theta). 本篇定位：Full main concept body.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>初始敏感度</th><th>数值</th><th>单位</th></tr></thead><tbody><tr><td>delta</td><td>0.556802653</td><td>点/标的点</td></tr><tr><td>gamma</td><td>0.000676807476</td><td>delta/标的点</td></tr><tr><td>vega</td><td>9.804437069</td><td>点/1波动率百分点</td></tr><tr><td>theta</td><td>-1.556972481</td><td>点/日</td></tr><tr><td>N(d2)</td><td>0.510441217</td><td>Q模型概率，不是P</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>S变化</th><th>一阶</th><th>加spot二阶</th><th>全模型</th></tr></thead><tbody><tr><td>50</td><td>27.840133</td><td>28.686142</td><td>28.679412</td></tr><tr><td>500</td><td>278.401326</td><td>363.002261</td><td>353.164687</td></tr></tbody></table></div><p>每合约点数乘100美元. 以上只改S，其余不变；同时改波动率与时间时，一阶加vega/theta，未计全部交叉二阶项.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M19-GREEKS",
    "title": "局部近似与完整重新定价",
    "anchor": "m19-probability",
    "description": "小变动和大变动各算一次；点数、美元和波动率百分点分别显示.",
    "data_identity": "同一90天、K=5,000、σ=23.5%的合成切片；不是实时Greeks.",
    "shared_dataset_ids": [
      "EXP-MEFG-IV-01"
    ],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "ds",
          "label": "标的变化（指数点）",
          "type": "number",
          "default": 50,
          "domain_or_choices": {
            "min": -4000,
            "max": 5000,
            "step": 50
          }
        },
        {
          "name": "dvPpt",
          "label": "波动率变化（百分点）",
          "type": "number",
          "default": 0,
          "domain_or_choices": {
            "min": -20,
            "max": 100,
            "step": 1
          }
        },
        {
          "name": "elapsedDays",
          "label": "经过的日历天数",
          "type": "number",
          "default": 0,
          "domain_or_choices": {
            "min": 0,
            "max": 89,
            "step": 1
          }
        },
        {
          "name": "unit",
          "label": "结果单位",
          "type": "select",
          "default": "points",
          "domain_or_choices": [
            [
              "points",
              "期权报价点"
            ],
            [
              "usd",
              "每合约美元（×100）"
            ]
          ]
        }
      ]
    },
    "algorithm": "Compute analytic delta,gamma,vega_per_ppt=vega*.01,theta_per_day=theta_year/365 at shared base. Linear ΔC=delta*ΔS+vega_ppt*Δsigma_ppt+theta_day*elapsed; partial second-order adds .5*gamma*ΔS². Exact BSM at new S,sigma,T; errors report approximate-exact; dollar scale=100.",
    "outputs": {
      "default": {
        "base": {
          "price": 256.85589455779245,
          "delta": 0.5568026529513653,
          "gamma": 0.0006768074761722486,
          "vegaPerPpt": 9.804437069207575,
          "thetaPerDay": -1.556972481378402,
          "qITM": 0.5104412165596846,
          "d1": 0.14286766759947472,
          "d2": 0.026175237306540852
        },
        "ds": 50,
        "dvPpt": 0,
        "elapsedDays": 0,
        "linear": 27.840132647568268,
        "quadratic": 28.68614199278358,
        "exact": 28.67941201992653,
        "errorLinear": -0.8392793723582628,
        "errorQuadratic": 0.006729972857048239,
        "exactCash": 2867.941201992653,
        "multiplier": 100,
        "limitation": "delta/gamma curvature only in S; cross/time/vol second derivatives omitted"
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M19.html",
      "unit_note": "同一90天、K=5,000、σ=23.5%的合成切片；不是实时Greeks."
    },
    "boundaries": [
      "Telapsed<90且新S和sigma为正",
      "vega单位百分点、theta日、multiplier100",
      "只加入spot二阶，交叉和高阶未覆盖",
      "N(d2)≠P概率，delta≠N(d2)"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M19-GREEKS",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M19.html"
  }
]
```

## Sources
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX与SPXW均为欧式、现金结算，合约乘数为每点100美元. 规格列出最小报价增量，并区分传统SPX的AM结算与SPXW的PM结算；现金在到期后相应营业日交付.
- [Delta](https://www.optionseducation.org/advancedconcepts/delta): Delta 的局部价格敏感度及换算为标的持有数量的对冲单位.
- [Gamma](https://www.optionseducation.org/advancedconcepts/gamma): delta的局部变化；全组合或做市商净gamma须另有持仓资料.
- [Theta](https://www.optionseducation.org/advancedconcepts/theta): 固定其余变量的日历时间局部敏感度；非所有欧式期权必然价值递减.
- [Vega](https://www.optionseducation.org/advancedconcepts/vega): Vega 是期权价格对波动率参数的偏导，常按波动率变化 1 个百分点报价.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无股息、常利率与常波动率条件下的连续复制、PDE、BSM公式及风险中性定价；相关数值例采用q=0.

## Content relations
```json
[
  {
    "from": "zh-m19",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m19",
    "relation": "requires",
    "to": "zh-m18",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "能说明模型输入、IV及价格函数"
  },
  {
    "from": "m19-variables",
    "relation": "supported_by",
    "to": "MEFG-OIC-DELTA",
    "reason": "局部价格敏感度和对冲单位；概率近似不能升级成P下概率恒等.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-variables"
  },
  {
    "from": "m19-variables",
    "relation": "supported_by",
    "to": "MEFG-OIC-GAMMA",
    "reason": "delta的局部变化；全组合或做市商净gamma须另有持仓资料.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-variables"
  },
  {
    "from": "m19-variables",
    "relation": "supported_by",
    "to": "MEFG-OIC-VEGA",
    "reason": "波动率参数的偏导和每百分点单位；IV不是独立的P下预测.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-variables"
  },
  {
    "from": "m19-variables",
    "relation": "supported_by",
    "to": "MEFG-OIC-THETA",
    "reason": "固定其余变量的日历时间局部敏感度；非所有欧式期权必然价值递减.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-variables"
  },
  {
    "from": "m19-default",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型中的价格、偏导与Q测度.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-default"
  },
  {
    "from": "m19-default",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
    "locator": "Full physical pp1–2; p2 specifications and relevant footnotes",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-default"
  },
  {
    "from": "m19-curvature",
    "relation": "supported_by",
    "to": "MEFG-OIC-GAMMA",
    "reason": "delta的局部变化；全组合或做市商净gamma须另有持仓资料.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-curvature"
  },
  {
    "from": "m19-curvature",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型中的价格、偏导与Q测度.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-curvature"
  },
  {
    "from": "m19-vol-time",
    "relation": "supported_by",
    "to": "MEFG-OIC-THETA",
    "reason": "固定其余变量的日历时间局部敏感度；非所有欧式期权必然价值递减.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-vol-time"
  },
  {
    "from": "m19-probability",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型中的价格、偏导与Q测度.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m19-probability"
  },
  {
    "from": "m19-probability",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M19-GREEKS",
    "reason": "小变动和大变动各算一次；点数、美元和波动率百分点分别显示.",
    "at_section": "m19-probability"
  }
]
```

## Related entries
