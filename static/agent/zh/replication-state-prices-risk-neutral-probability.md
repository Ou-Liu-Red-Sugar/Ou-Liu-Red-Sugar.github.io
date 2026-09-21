# 复制定价、状态价格与 Q：先把交易组合做出来

先解现金与股票复制，再构造状态价格、Q和定价核；以共享三状态实例说明开放区间与端点套利.

Entry: zh-m21 | Node: M21 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教M21《复制定价、状态价格与 Q：先把交易组合做出来》，内容版本2026-09-21-MEFG-review-v3. 读者已有高年级本科至研究生的数学基础.

先确认选用本篇共同正文和哪些分支，再实际读取agent_packet列出的当前必读完整原文. PDF需读脚注、表图与符号；只拿到摘要/目录/搜索片段不算完成. 记录实际版本、范围与内容对应，不沿用编辑端“已读”充当本次读取；同会话已完整取得相同版本单元可以复用. 若所需单元失败，尝试机构正式等价全文；仍缺失则指出具体单元，不凭记忆补成已读教学. runtime_reading_log从空开始.

独立学习任务：从唯一冻结市场构造头寸、价格和权重，并用端点持仓解释开放价格区间.
专属诊断与正向讲解：先读整个EXP-STATE-01及assumptions. 先解Δ、β再算Q；P滑块只改看法. 切三状态时口述顺序down/middle/up和K100，逐状态乘回两个端点套利.
反馈尺度：严格分cash-account units和βB1；三状态不私设P；不能互设QT18整篇硬先修. 一般证明分支取得QT18具名原文后另教.

读者要求直接讲解时，按本篇连贯推导讲清，不反复问已会先修. 静态例、实验、练习必须使用本包同一输入和单位；实例价、合成价、模型价、规则时点不能混换. 练习要给完整解析，不仅打分. 仅当选读分支被采用时，将其optional reading转入当前必读.

M21交互注册为独立view `VIEW-MEFG-M21-STATE-01`；核心实验身份仍唯一是EXP-STATE-01，参数只从冻结附件读取.

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
        "purpose": "先构造复制再构造Q"
      },
      "supports": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
      "id": "M21-READ-01",
      "title": "15.401 Finance Theory I, Lecture 10–11: Options",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
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
        "locator": "slides52–58与60完整采用单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "Q定价表示的模型作用；不讲未读一般连续时间定理"
      },
      "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明.",
      "id": "M21-READ-02",
      "title": "15.450: Stochastic Calculus and Option Pricing",
      "authors": [
        "Leonid Kogan",
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
        "locator": "文件全文：全部1033行，two_state、three_state_incomplete、three_state_augmented_complete、条件/公式/边界",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "唯一冻结输入、现金单位、P/Q/π/m、端点与补全"
      },
      "supports": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
      "id": "M21-READ-03",
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
    "experiment_id": "VIEW-MEFG-M21-STATE-01",
    "shared_experiment_id": "EXP-STATE-01"
  },
  "entry_id": "zh-m21",
  "node_id": "M21",
  "content_version": "2026-09-21-MEFG-review-v3",
  "experiment_ids": [
    "VIEW-MEFG-M21-STATE-01"
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
    "static/M21.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M21.html"
  },
  "shared_experiment_ids": [
    "EXP-STATE-01"
  ]
}
```

## Supplied entry
<a id="m21-market"></a>
## 一、先给可交易对象，不先猜上涨概率

我们已经见过两种思路：一是判断某个结果发生的可能性，二是找出能够产生同样现金流的交易组合. 本篇先做第二件事. 若两个组合在每一个可能状态下都支付同样金额，却有不同的当前价格，那么在允许买便宜者、卖贵者的市场里，价差就不能任意存在. 复制定价从这个约束出发，而不是先猜未来. [^MEFG-MIT-OPTIONS]

采用共同的 **EXP-STATE-01**. 这是一个抽象的一期教学市场，不是一年的预测，也不是实际股票报价. 交易在时点0决定，终点才知道状态；可以持有正负和分数数量，无费用、无股息、没有借券或保证金限制，现金借入与存入用同一个增长因子. 每个终端状态在实际概率下均为正概率. [^MEFG-STATE]

| 可交易资产 | 时点0单价 | 上涨状态终值 | 下跌状态终值 |
|---|---:|---:|---:|
| 一单位现金账户 $B$ | 1 | 1.02 | 1.02 |
| 一股股票 $S$ | 100 | 120 | 90 |

现金账户的**单位数**记为 $\beta$，其时点 $t$ 的现金金额是 $\beta B_t$. 负单位数表示借款. $R=B_1/B_0=51/50$ 是一期总增长因子，不是“年利率1.02%”. 本分支的call行权价是 **105**，终端支付 $H=(15,0)$.

<a id="m21-replicate"></a>
## 二、半股股票和一笔借款，真的能复制吗

令 $\Delta$ 为股票数. 若组合要复制call，就须同时满足
$$
\begin{aligned}
1.02\beta+120\Delta&=15,\\
1.02\beta+90\Delta&=0.
\end{aligned}
$$
两式相减，得 $30\Delta=15$，所以 $\Delta=1/2$. 再代回下跌状态，
$$
1.02\beta=-45,
\qquad
\beta=-\frac{750}{17}\approx-44.117647.
$$
因此今天买半股花50，借入约44.117647，自己需要投入
$$
C_0=\beta B_0+\Delta S_0
=-\frac{750}{17}+50
=\frac{100}{17}\approx5.882353.
$$

| 检查位置 | 股票部分 | 现金账户部分 | 合计 |
|---|---:|---:|---:|
| 时点0 | 50 | −44.117647 | 5.882353 |
| 上涨终点 | 60 | −45 | 15 |
| 下跌终点 | 45 | −45 | 0 |

借入额不是到期还款额，半股也不是“上涨后才买半股”. 头寸在状态揭晓以前确定，两个状态都已经复制到. 若这项call可自由买卖，其价格偏离复制成本时，买入一边、卖出另一边才会产生逐状态抵销的价格约束. 这不需要先知道哪个状态更可能. [^MEFG-MIT-OPTIONS]

同样的方法可复制put：支付 $(0,15)$，股票数 $-1/2$，现金账户单位 $1000/17$，初始成本 $150/17$. 所以前篇平价 $C-P=-50/17$ 不是另设价格，而是两次复制的结果.

<a id="m21-weights"></a>
## 三、状态价格、Q 和实际概率，各自是什么

现在反过来问：今天购买“只在某一个状态支付1美元”的权利应花多少钱？把两个状态的当前单价记为 $\pi_u,\pi_d$. 一单位现金账户到期在两状态都给1.02，而一股股票给120或90，因此
$$
\begin{aligned}
1.02(\pi_u+\pi_d)&=1,\\
120\pi_u+90\pi_d&=100.
\end{aligned}
$$
解得
$$
\pi=\left(\frac{20}{51},\frac{10}{17}\right),
\qquad
\pi_u+\pi_d=\frac{50}{51}.
$$
状态价格的和不是1，因为它们是**未来状态现金的当前价格**，已经包含资金时间. 于是call价格直接为 $15\pi_u=100/17$.

把贴现取出去，定义 $Q_i=R\pi_i$，得到
$$
Q=(2/5,3/5),\qquad
\mathbb{E}_Q[S_1]=102=RS_0.
$$
$Q$ 是将当前可交易资产价格写成贴现期望的权重：
$$
C_0=\sum_i\pi_i H_i=\frac{\mathbb{E}_Q[H]}{R}.
$$
它通常称风险中性定价概率，但这个名字不是说现实中的投资者没有风险偏好，也不是说上涨的真实概率就是40%. 这些权重来自本市场的价格约束. [^MEFG-MIT-KOGAN]

另设教学实际概率 $P=(3/5,2/5)$. 则 $\mathbb{E}_P[S_1]=108$、$\mathbb{E}_P[H]=9$，而 $\mathbb{E}_Q[S_1]=102$、$\mathbb{E}_Q[H]=6$. $\mathbb{E}_P[H]/R=150/17$ 是按这组 $P$ 折算的期望支付，**不是**call的复制成本.

还可把两个权重体系联系起来：
$$
\frac{dQ}{dP}=\left(\frac23,\frac32\right),
\qquad
m_i=\frac{\pi_i}{P_i}
=\left(\frac{100}{153},\frac{25}{17}\right).
$$
这里 $m$ 是定价核；它给不同状态的实际概率加上不同价格权重. 三种写法一致：
$$
C_0=\mathbb{E}_P[mH]=\sum_i\pi_iH_i=\frac{\mathbb{E}_Q[H]}R.
$$
$\mathbb{E}_P[dQ/dP]=1$，而 $\mathbb{E}_P[m]=1/R$；一个是概率密度，一个含贴现，不能互换.

<a id="m21-belief"></a>
## 四、改变看法，不会自动改变同一张价格表

保持两资产价格和终端支付不变，只把教学 $P(u)$ 改为0.2、0.6、0.8，复制头寸和 $Q$ 都不变. 变化的是实际期望结果：

| $P(u)$ | $\mathbb{E}_P[H]$ | 初始成本一期增长 $RC_0$ | 长call的期望净额 |
|---:|---:|---:|---:|
| 0.2 | 3 | 6 | −3 |
| 0.6 | 9 | 6 | 3 |
| 0.8 | 12 | 6 | 6 |

所以存在正的权利金，不意味着未对冲卖方在每一种实际概率判断下都有正期望利润；更不意味着一次交易一定盈利. 改变 $P$ 会改变 $dQ/dP$ 和 $m$，却不会在“可交易市场保持不变”的这个比较中自动改写 $Q$. 冻结文件另保留 $P(u)=0.9$ 的迁移题，它也服从同样的区分. [^MEFG-STATE]

<a id="m21-incomplete"></a>
## 五、多一个状态，为什么会出现一段价格

接下来切换到共同实验的**另一个分支**. 状态顺序改为下／中／上，股票终值为80、100、120；现金仍为1到1.02. 这次call行权价是 **100**，支付为 $(0,0,20)$，不是刚才的 $K=105$.

只有股票和现金时，任何终端组合都是 $\beta R+\Delta S_1$. 如果它要在80和100两状态都为0，两式相减就迫使 $\Delta=0$，继而 $\beta=0$；这样在120状态也只能为0，无法支付20. 失败的原因是交易方向不够，不是我们还没选一个漂亮的概率. [^MEFG-STATE]

满足原两资产价格的概率有一族：
$$
Q(t)=\left(t,\frac9{10}-2t,\frac1{10}+t\right),
\qquad 0<t<\frac9{20}.
$$
严格正性使三个实际可能状态都得到正定价权重. 若把上述call以价格 $c$ 加成一项可自由正负交易的资产，无套利的候选价格为
$$
c(t)=\frac{20(1/10+t)}{51/50},
\qquad
c\in\left(\frac{100}{51},\frac{550}{51}\right).
$$
这个开区间约为 $(1.960784,10.784314)$. 它表示：在保持股票和现金价格不变时，新支付以这些价格进入可自由正负交易的市场仍与无套利相容；这不是未交易支付的实际市场报价集合.

为什么端点不包括？看两组真实写出的教学持仓：

| 新支付价格 | 现金账户单位 $\beta$ | 股票 $\Delta$ | 新支付单位 $\gamma$ | 初始成本 | 下／中／上终值 |
|---|---:|---:|---:|---:|---|
| $100/51$ | $5000/51$ | −1 | 1 | 0 | (20,0,0) |
| $550/51$ | $-2000/51$ | 1/2 | −1 | 0 | (0,10,0) |

它们零成本、没有负终值，而且至少一个正概率状态严格赚钱. 端点被排除不是浮点容差，而是有可以逐状态验证的套利组合.

若新增支付确实以 **6** 交易，新增约束使
$$
Q=\left(\frac{103}{500},\frac{61}{125},\frac{153}{500}\right)
$$
唯一；三列终端支付矩阵的秩变成3. 还可以真的合成只在中间状态给1的支付：取 $(\beta,\Delta,\gamma)=(-200/51,1/20,-1/10)$，终值为 $(0,1,0)$，初始成本 $122/255$. 这比只说“市场完备了”多完成一步交易构造.

<a id="m21-explore"></a>
## 六、读图时，先辨认改的是市场还是看法

<div data-experiment-slot="VIEW-MEFG-M21-STATE-01"></div>

这个 Markets 交互只是共享 `EXP-STATE-01` 的独立视图，不重新注册或改写该实验. 第一个视角固定两状态市场，仅切换 $P$：对照期望支付、定价权重和初始成本，确认没有把概率滑块写回市场输入. 第二个视角切换三状态分支，用 $t$ 改变允许的 $Q$；端点按钮不显示为合法概率模型，而显示上表的套利组合.

一般有限市场里，无套利、严格正定价权重和完备性之间的完整证明需要说明可交易策略、信息和现金补足. 这里已把当前一期例子做完；QT18承担一般有限模型证明，不是理解本例必须先绕过去的一整篇先修.

<a id="m21-exercises"></a>
## 七、自己核一遍

**题一：$-750/17$ 和 $-45$ 为什么都出现在同一笔借款里？**

**解析.** 前者是现金账户持有单位；因为 $B_0=1$，也恰等于时点0借款金额. 终点现金账户单价为1.02，所以 $\beta B_1=-45$. 不是复制组合借了两次钱，也不是终点再次扣初始投入.

**题二：$P(u)$ 从0.6改到0.9，call价格为什么仍为 $100/17$？**

**解析.** 股票、现金价格和状态支付均未变，原复制策略还在每个状态给 $(15,0)$. 因此 $Q$ 和状态价格不变；$dQ/dP$ 则变为 $(4/9,6)$，定价核变为 $(200/459,100/17)$. 真实期望支付变成13.5，不能因此把复制价格改成 $13.5/1.02$.

**题三：三状态下端组合的终值，请不要只背表.**

**解析.** 现金账户 $5000/51$ 到期为100；空一股给 $(-80,-100,-120)$；买一份支付给 $(0,0,20)$. 加总为 $(20,0,0)$. 初始为 $5000/51-100+100/51=0$，所以确有套利.

**题四：两状态call约5.882353，三状态某个候选也可能约5.882353，是同一合约吗？**

**解析.** 不是. 前者 $K=105$，状态120/90；后者 $K=100$，状态80/100/120，且是在 $t=0.2$ 这一候选权重下得出的价格. 相同数字不能消除市场和合同的差异.

**题五：为什么本篇不直接加入“不能卖空”的开关再沿用全部结论？**

**解析.** 复制与端点套利使用了负持仓. 禁止卖空会改变可行策略集合，需要重新定义价格约束，而不只是改变一个概率. 它应是有独立条件的模型变式，不能静默修改这份无摩擦冻结市场.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-STATE]: QT-F / Lead frozen teaching contract，*EXP-STATE-01 shared finite-market experiment*，2026-09-21-v1. [原文](/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json). 本篇定位：Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>


## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>二状态对象</th><th>数值</th></tr></thead><tbody><tr><td>B</td><td>1→51/50</td></tr><tr><td>S</td><td>100→120/90</td></tr><tr><td>K / 支付</td><td>105 / (15,0)</td></tr><tr><td>股票数 / 现金账户单位</td><td>1/2 / −750/17</td></tr><tr><td>终点现金金额</td><td>−45</td></tr><tr><td>当前call成本</td><td>100/17</td></tr><tr><td>Q / 状态价格</td><td>(2/5,3/5) / (20/51,10/17)</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>P(up)</th><th>P期望支付</th><th>融资后期望净额</th></tr></thead><tbody><tr><td>0.2</td><td>3</td><td>-3</td></tr><tr><td>0.6</td><td>9</td><td>3</td></tr><tr><td>0.8</td><td>12</td><td>6</td></tr></tbody></table></div><p>三状态为另一分支：80/100/120，K=100，H=(0,0,20). Q(t)=(t,0.9−2t,0.1+t)，0&lt;t&lt;0.45；价格开区间(100/51,550/51).</p><div class="table-wrap"><table><thead><tr><th>端点</th><th>持仓(B,S,H)</th><th>成本</th><th>终点支付</th></tr></thead><tbody><tr><td>下端</td><td>(5000/51,−1,1)</td><td>0</td><td>(20,0,0)</td></tr><tr><td>上端</td><td>(−2000/51,1/2,−1)</td><td>0</td><td>(0,10,0)</td></tr></tbody></table></div><p>新增支付以6交易后，Q=(103/500,61/125,153/500)，秩3. 以上全部沿唯一冻结合同，未把市场摩擦变式写回核心.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-STATE-01",
    "title": "有限市场中的状态价格、等价鞅测度与完备性：计算视图",
    "anchor": "qt18-measures",
    "description": "改变本视图参数后重算；正文保留默认表、完整推导和题解，公开附件提供精确输入与结果.",
    "inputs": {
      "shared_experiment_id": "EXP-STATE-01",
      "view": {
        "node": "QT18",
        "underlying_experiment_id": "EXP-STATE-01",
        "default_mode": "two"
      },
      "public_attachments": [
        {
          "title": "EXP-STATE-01 唯一冻结市场",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json",
          "kind": "json",
          "version": "2026-09-21-v1",
          "json_pointers": [
            "/units",
            "/assumptions",
            "/two_state",
            "/three_state_incomplete",
            "/three_state_augmented_complete"
          ],
          "policy": "沿同一冻结文件读取当前单元指定部分，不另造树或三状态物理概率."
        },
        {
          "title": "同包默认精确计算",
          "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
          "kind": "json",
          "json_pointers": [
            "/two",
            "/three",
            "/complete"
          ]
        }
      ]
    },
    "outputs": {
      "file": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/results.json",
      "scope": "two/three/complete",
      "json_pointers": [
        "/two",
        "/three",
        "/complete"
      ]
    },
    "is_view_of_existing_experiment": true,
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/static/QT18.html"
  },
  {
    "id": "VIEW-MEFG-M21-STATE-01",
    "title": "复制、概率与状态价格（Markets视图）",
    "anchor": "m21-explore",
    "description": "共享EXP-STATE-01的Markets交互视图；不注册第二个核心实验，也不改变冻结参数.",
    "data_identity": "view only; canonical shared experiment remains EXP-STATE-01 from qt-f-shared-state-experiment.json",
    "shared_dataset_ids": [
      "EXP-STATE-01"
    ],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": "data/qt-f-shared-state-experiment.json",
      "controls": [
        {
          "name": "branch",
          "label": "市场分支",
          "type": "select",
          "default": "two",
          "domain_or_choices": [
            [
              "two",
              "两状态复制与P/Q"
            ],
            [
              "family",
              "三状态：开放Q族"
            ],
            [
              "lower",
              "下端点套利"
            ],
            [
              "upper",
              "上端点套利"
            ],
            [
              "complete",
              "支付以6交易后的补全"
            ]
          ]
        },
        {
          "name": "p",
          "label": "教学P(up)",
          "type": "number",
          "default": 0.6,
          "domain_or_choices": {
            "min": 0.01,
            "max": 0.99,
            "step": 0.1
          }
        },
        {
          "name": "t",
          "label": "三状态t（严格0<t<0.45）",
          "type": "number",
          "default": 0.2,
          "domain_or_choices": {
            "min": 0,
            "max": 0.45,
            "step": 0.01
          }
        }
      ]
    },
    "algorithm": "Read frozen file. Two-state solve Δ=(Hu-Hd)/(Su-Sd),β=(Hd-ΔSd)/B1;price=βB0+ΔS0;Qup=(R*S0-Sd)/(Su-Sd),π=Q/R,m=π/P. Three-state Qdown=t,Qup=(R*S0-Smid+(Smid-Sdown)*t)/(Sup-Smid),Qmid=1-t-Qup. Strict0<t<.45; endpoints use frozen portfolios; augmented price6 uses frozen digital replication and matrix.",
    "outputs": {
      "default": {
        "stateOrder": [
          "up",
          "down"
        ],
        "strike": 105,
        "P": [
          0.6,
          0.4
        ],
        "Q": [
          0.4,
          0.6
        ],
        "pi": [
          0.39215686274509803,
          0.5882352941176471
        ],
        "delta": 0.5,
        "beta": -44.11764705882353,
        "initialCash": -44.11764705882353,
        "terminalCash": -45,
        "price": 5.882352941176471,
        "terminal": [
          15,
          0
        ],
        "density": [
          0.6666666666666667,
          1.4999999999999998
        ],
        "kernel": [
          0.6535947712418301,
          1.4705882352941175
        ],
        "expectedPayoff": 9,
        "fundedExpectedPnl": 2.999999999999999,
        "cashFactor": 1.02,
        "coreDataUnchanged": true
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M21.html",
      "unit_note": "唯一冻结EXP-STATE-01. 两状态K=105；三状态K=100. 摩擦与卖空限制不在这个市场里切换."
    },
    "boundaries": [
      "state核心文件字节和SHA保持不变",
      "P严格在(0,1)，变P不改Q",
      "三状态t只在开区间；端点明确标套利",
      "两状态K105、三状态K100不混",
      "不加原市场没有的friction/shortsale开关"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=VIEW-MEFG-M21-STATE-01",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M21.html",
    "shared_experiment_id": "EXP-STATE-01",
    "shared_input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json"
  }
]
```

## Sources
- [EXP-STATE-01 shared finite-market experiment](https://ou-liu-red-sugar.github.io/notebook/labs/qt-f/data/qt-f-shared-state-experiment.json): 唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无分红、常利率/常波动率模型、复制、PDE与BSM公式；本例采用r=0，非一般American模型或实际概率.

M-E/F/G 本批采用：常参数、无股息模型条件下价格/偏导与Q；本批数值只采用q=0版本，不把非零股息扩展归给该读取单元；不宣称完整连续时间定理证明.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 逐腿相加的保护、价差和跨式支付；不承担现行结算规则.

M-E/F/G 本批采用：模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.

## Content relations
```json
[
  {
    "from": "zh-m21",
    "relation": "part_of",
    "to": "markets-pricing",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m21",
    "relation": "requires",
    "to": "zh-m20",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "能逐状态检查现金等价与融资腿"
  },
  {
    "from": "m21-market",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-market"
  },
  {
    "from": "m21-market",
    "relation": "supported_by",
    "to": "MEFG-STATE",
    "reason": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
    "locator": "Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-market"
  },
  {
    "from": "m21-replicate",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-replicate"
  },
  {
    "from": "m21-weights",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-weights"
  },
  {
    "from": "m21-belief",
    "relation": "supported_by",
    "to": "MEFG-STATE",
    "reason": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
    "locator": "Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-belief"
  },
  {
    "from": "m21-incomplete",
    "relation": "supported_by",
    "to": "MEFG-STATE",
    "reason": "唯一冻结教学市场；二状态K105、三状态K100，允许正负可分持仓、全支持P、同借贷率. 非观测价格.",
    "locator": "Complete contract; two_state; three_state_incomplete; three_state_augmented_complete; formula_contract; assumptions",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m21-incomplete"
  },
  {
    "from": "m21-explore",
    "relation": "illustrated_by",
    "to": "EXP-STATE-01",
    "reason": "先复制，再读权重. 改变P是改变看法；改变三状态t是在允许的Q族中选一点.",
    "at_section": "m21-explore"
  },
  {
    "from": "zh-m21",
    "relation": "compares_with",
    "to": "zh-qt18",
    "reason": "M21用同一期市场完成经济复制；QT18给一般有限模型证明，不互设硬先修"
  },
  {
    "from": "m21-explore",
    "relation": "illustrated_by",
    "to": "VIEW-MEFG-M21-STATE-01",
    "at_section": "m21-explore",
    "reason": "本篇经济解释视图使用现有 EXP-STATE-01；核心输入和实验身份仍由 QT18 维护."
  }
]
```

## Related entries
