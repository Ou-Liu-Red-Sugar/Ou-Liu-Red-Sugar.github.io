# 期权价格、内在价值与隐含波动率

解释价格因素与欧式put的迟收货款反例；在明确BSM假设下将报价区间反解为IV区间.

Entry: zh-m18 | Node: M18 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你正在教M18《期权价格、内在价值与隐含波动率》，内容版本2026-09-22-deep-review. 读者已有高年级本科至研究生的数学基础.

教学前读取agent_packet列出的当前必读原文完整指定单元，并在runtime_reading_log记录实际版本、范围与内容对应；同会话已完整读取的相同版本单元可复用. 缺失单元只限制对应讲解，采用选读分支时再读取其材料.

独立学习任务：在完全给定的树中分别倒推欧式和美式put；给定模型与报价侧后反解IV，界外拒绝.
专属诊断与正向讲解：先问欧式持有人今天能否收到100；写S50,K100,u1.2,d.9,R1.02，无股息和抽象期间，逐节点比较继续/行权. 之后才看SPX尺寸的另一组模型报价.
反馈尺度：不能把两个不同市场写回EXP-STATE-01；解释迟收K和决策集合，而非仅报反例数字. IV不是真实sigma或P概率.

按本篇顺序连贯讲解；静态例、实验和练习使用同一组输入与单位，区分实例价、合成价、模型价和规则时点. 练习给出完整解析；采用选读分支时再读取对应材料.

本篇数值与IV实验使用无股息BSM；股息只作现金/行权机制说明，不把未读的非零股息公式扩展归给Kogan来源.
说明BSM时必须列出常参数GBM动态 $dS_t=\mu S_tdt+\sigma S_tdW_t$、q=0和复制后物理漂移不进入定价公式.

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
        "locator": "Premium pp11–12；Intrinsic Value and Time Value pp14–15完整小节",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "价格与内在/剩余价值的条件"
      },
      "supports": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
      "id": "M18-READ-01",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
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
        "locator": "slides16–21完整BSM市场/复制/公式单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "模型假设和价格函数"
      },
      "supports": "常参数、无股息模型条件下价格/偏导与Q；不宣称完整连续时间定理证明.",
      "id": "M18-READ-02",
      "title": "15.450: Stochastic Calculus and Option Pricing",
      "authors": [
        "Leonid Kogan",
        "MIT OpenCourseWare"
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
        "locator": "slides16–21完整复制/树单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "独立教学树的倒推关系"
      },
      "supports": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
      "id": "M18-READ-03",
      "title": "15.401 Finance Theory I, Lecture 10–11: Options",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
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
        "purpose": "模型价格随vol变化的局部含义"
      },
      "supports": "波动率参数的偏导和每百分点单位；IV不是独立的P下预测.",
      "id": "M18-READ-04",
      "title": "Vega",
      "authors": [
        "Options Industry Council"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-EXERCISE",
      "version": "Undated; retrieved 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/referencelibrary/faq/options-exercise",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "FAQ中提前行权、剩余价值和closing相关完整问答",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "欧式与美式决策集合"
      },
      "supports": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
      "id": "M18-READ-05",
      "title": "Options Exercise FAQ",
      "authors": [
        "Options Industry Council"
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
    "experiment_id": "EXP-MEFG-M18-IV"
  },
  "entry_id": "zh-m18",
  "node_id": "M18",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M18-IV"
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
    "static/M18.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M18.html"
  }
}
```

## Supplied entry
<a id="m18-price"></a>
## 一、现时行权差额与期权权利

期权当前价格对应剩余期限内的合约权利. 看涨或看跌、行权价、剩余期限、行权方式和分配条款共同决定这些权利；交易形成权利金，定价模型则刻画指定假设下的价格约束. [^MEFG-ODD]

给定当前标的价 $S$，call的现时行权差额为 $(S-K)^+$，put为 $(K-S)^+$，常称为spot intrinsic value. 取得这一差额还要求合约允许立即行权；欧式期权的行权日由到期条款规定.

权利金减去现时立即行权差额，通常称为时间价值. 该差值的符号依赖行权方式与资金时间，下面的欧式put给出负值的例子. [^MEFG-ODD]

<a id="m18-tree"></a>
## 二、欧式 put 的延期收款反例

下面采用独立教学树：初始 $S_0=50$，$K=100$；每个抽象期间，股票乘以 $u=1.2$ 或 $d=0.9$，现金增长因子 $R=1.02$，无股息，并允许按相同条件借贷. 每期长度仅为该树的抽象时间单位.

一期股票为60或45；两期为72、54或40.5，均低于100. 定价权重由股票／现金关系得到
$$
q_{\rm tree}=\frac{R-d}{u-d}=\frac{1.02-0.9}{1.2-0.9}=0.4.
$$
因为每个终端状态的put支付都等于 $K-S_T$，只需持有到期付 $K$ 的现金、同时空一股就能复制. 所以 $n$ 期欧式价格为
$$
P_E(n)=\frac{K}{R^n}-S_0.
$$

| 到期期间数 | 欧式put价格 | 当前 $K-S_0$ | 价格减当前立即行权差额 |
|---:|---:|---:|---:|
| 1 | $2450/51\approx48.039$ | 50 | −1.961 |
| 2 | $119950/2601\approx46.117$ | 50 | −3.883 |

这棵树的所有终端状态均低于$K$，put始终执行卖出，支付退化为$K-S_T$. 延长到期日推迟了收到$K$的时间，减少其现值，因而降低put价格. [^MEFG-MIT-OPTIONS]

现在让同一树上的put变为每个节点都能行权的美式版本. 两期末支付依次为28、46、59.5. 回到第一期节点，继续持有值必须和立即行权值比较：

| 美式树节点 | 股票价 | 继续持有价值 | 立即行权价值 | 节点选择 |
|---|---:|---:|---:|---:|
| 第一期上涨 | 60 | $(0.4\times28+0.6\times46)/1.02\approx38.039$ | 40 | 40 |
| 第一期下跌 | 45 | $(0.4\times46+0.6\times59.5)/1.02\approx53.039$ | 55 | 55 |
| 初始节点 | 50 | $(0.4\times40+0.6\times55)/1.02\approx48.039$ | 50 | 50 |

一期美式初值同样为50. 立即行权属于美式持有人的可行决策，因此美式价格不低于立即行权差额. [^MEFG-OIC-EXERCISE]

<a id="m18-factors"></a>
## 三、价格变量与现金机制

接下来固定一种合约与模型，一次只动一个变量. 提高 $S$ 让按固定 $K$ 买入更有利，call价值上升，put方向相反；提高 $K$ 则让call不利、put有利. 剩余时间会同时改变可等待多久和未来货款的折现，刚才的欧式put反例说明不能只看前者.

持有股票可收取分红，call持有人在行权前没有同一分红权；提前支付行权货款还会增加资金占用. 这两项现金差异进入提前行权的比较. [^MEFG-OIC-EXERCISE]

下文采用无股息的常参数欧式BSM模型. 在该模型中，提高利率降低到期$K$的现值，增加call价值并降低put价值. [^MEFG-MIT-KOGAN]

看涨与看跌的支付是凸函数. 在保持均值的凸序比较下，分散程度增加会提高凸支付的期望；单独比较方差不足以建立这一结论. 在BSM中，固定其余参数、增加$\sigma$给出具体的比较，vanilla期权的vega为正. [^MEFG-OIC-VEGA]

<a id="m18-model"></a>
## 四、无股息 BSM 的模型条件

下面使用SPX尺度的合成网格：$S=5,000$，连续复利年利率4%，**股息设为0**，期限按天数／365计. 这里的零股息属于模型输入；SPX规格仅用于每点100美元乘数与报价增量.[^MEFG-SPX]

这里采用共享输入对应的**无股息 BSM 欧式公式**. 模型假定标的在连续时间服从常参数几何布朗运动
$$
dS_t=\mu S_t\,dt+\sigma S_t\,dW_t,
$$
并假定连续可交易、无摩擦、可按同一常数利率融资和对冲. 复制定价消去了物理漂移 $\mu$；在风险中性表示下，标的漂移相应由 $r$ 进入价格公式. 股息率固定为0，因此下面的数值公式不再加入连续股息项.[^MEFG-MIT-KOGAN]

在这些条件下：
$$
\begin{aligned}
d_1&=\frac{\log(S/K)+(r+\sigma^2/2)\tau}{\sigma\sqrt{\tau}},\\
d_2&=d_1-\sigma\sqrt{\tau},\\
C&=S N(d_1)-Ke^{-r\tau}N(d_2),\\
P&=Ke^{-r\tau}N(-d_2)-S N(-d_1).
\end{aligned}
$$
$N$ 是标准正态分布函数. [^MEFG-MIT-KOGAN]

对90天、$K=5,000$、$\sigma=23.5\%$，模型call价格为256.856点. 为形成教学bid／ask，先按相应增量把中价取成256.9，再给两边各0.2点价差：

| 报价身份 | 期权点数 | 一份对应美元 | 同模型反解的IV |
|---|---:|---:|---:|
| bid | 256.7 | 25,670 | 23.484% |
| mid | 256.9 | 25,690 | 23.505% |
| ask | 257.1 | 25,710 | 23.525% |

中价由模型价格取整得到，因此反解IV约23.504%，与生成价格时的23.5%略有差异.

<a id="m18-inversion"></a>
## 五、隐含波动率的反解

给定合约及无股息模型的 $S,K,\tau,r$，隐含波动率解决的是方程 $C_{\rm model}(\sigma)=C_{\rm quote}$. 可以从较小和较大的 $\sigma$ 起步，反复二分，直到模型价格接近给定报价. 买入通常面对ask，卖出面对bid；相应IV区间比只报一个中价IV更贴近交易对象.

反解前还要检查价格界. 在本例无股息模型中，call的正有限波动率价格位于 $\max(S-Ke^{-r\tau},0)$ 与 $S$ 之间. 若30天、$K=4,500$ 的call被输入1点，远低于模型下界，该输入不存在相容的IV.

<div data-experiment-slot="EXP-MEFG-M18-IV"></div>

实验分别显示价格随$\sigma$变化的曲线，以及欧式和美式put的行权树. 在价格曲线上切换bid、mid、ask，可比较同一模型中的反解位置；行权树采用前述$u,d,R$参数.

市场报价还反映库存、供求、成交条件和资金限制；由报价反解的IV因此同时包含这些因素，预测实现波动需要另建统计关系.

<a id="m18-exercises"></a>
## 六、价格界、行权与 IV 的检验

**题一.** 为什么一期欧式put的48.039低于当前差额50，不构成这里的套利？

**解析.** 持有人现在没有立即以100卖出股票的权利，不能买put后今天就取得50. 合约只承诺期末支付，复制需要今天存入 $100/1.02$ 并空一股，成本48.039. 将美式的立即行权操作擅自加给欧式，才制造了虚假的套利.

**题二.** 两期美式put为什么不是46.117？请在上涨节点核一次.

**解析.** 上涨后股票60，继续持有两期末支付的折现价值38.039，而立即行权值40；美式可取较大者40. 下跌节点取55，初始继续值48.039仍低于立即行权50，故初值50. 46.117只属于必须等待两期末的欧式版本.

**题三.** 为什么表中ask IV高于bid IV？它们是否是对未来的两个独立预测？

**解析.** 在其他BSM输入相同且vega为正时，更高期权价格需要更大的 $\sigma$ 来重现. 因此bid与ask分别反解出同一报价价差对应的模型IV区间；未来实现波动仍是另一项估计.

**题四.** 30天、$K=4,500$ 的call报价1点，能否输出“市场几乎确定不会波动”？

**解析.** 不能. 先检查模型价格下界；该输入已与无股息、给定现价／利率的价格界不相容. 可能是单位、合约、时点或输入错误，也可能模型条件不适用. 在识别原因前，不应强行输出IV.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-OIC-EXERCISE]: Options Industry Council，*Options Exercise FAQ*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/referencelibrary/faq/options-exercise). 本篇定位：Full FAQ main body through exercise/closing distinction.

[^MEFG-MIT-KOGAN]: Leonid Kogan, MIT OpenCourseWare，*15.450: Stochastic Calculus and Option Pricing*，Fall 2010. [原文](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf). 本篇定位：Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application.

[^MEFG-OIC-VEGA]: Options Industry Council，*Vega*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/advancedconcepts/vega). 本篇定位：Full main concept body.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>90天/K5,000 call</th><th>报价点</th><th>反解IV</th></tr></thead><tbody><tr><td>bid</td><td>256.70</td><td>23.484100%</td></tr><tr><td>mid</td><td>256.90</td><td>23.504499%</td></tr><tr><td>ask</td><td>257.10</td><td>23.524897%</td></tr></tbody></table></div><p>BSM:S=5,000,r=4%,q_div=0,ACT/365；标的采用常参数GBM dS=μSdt+σSdW. 复制定价消去物理漂移μ；价格界以同一无股息模型验证，q_div=0为教学设定.</p><div class="table-wrap"><table><thead><tr><th>put反例</th><th>欧式</th><th>美式</th><th>现在行权差额</th></tr></thead><tbody><tr><td>1</td><td>48.039215686</td><td>50.00</td><td>50</td></tr><tr><td>2</td><td>46.116878124</td><td>50.00</td><td>50</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>两期树节点（t,上次数）</th><th>S</th><th>立即行权</th><th>美式继续值</th><th>美式价值</th></tr></thead><tbody><tr><td>0,0</td><td>50.00</td><td>50.00</td><td>48.039216</td><td>50.000000</td></tr><tr><td>1,1</td><td>60.00</td><td>40.00</td><td>38.039216</td><td>40.000000</td></tr><tr><td>1,0</td><td>45.00</td><td>55.00</td><td>53.039216</td><td>55.000000</td></tr><tr><td>2,2</td><td>72.00</td><td>28.00</td><td>—</td><td>28.000000</td></tr><tr><td>2,1</td><td>54.00</td><td>46.00</td><td>—</td><td>46.000000</td></tr><tr><td>2,0</td><td>40.50</td><td>59.50</td><td>—</td><td>59.500000</td></tr></tbody></table></div><p>独立教学树S0=50,K=100,u=1.2,d=0.9,R=1.02，每期抽象期间，无股息；欧式今天不能行权.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M18-IV",
    "title": "报价反解IV，与欧式put反例",
    "anchor": "m18-inversion",
    "description": "先检查报价是否在模型价格界内，再看同一树在不同决策集合中的价值.",
    "data_identity": "EXP-MEFG-IV-01合成报价；提前行权树为独立教学市场，绝不改写EXP-STATE-01.",
    "shared_dataset_ids": [
      "EXP-MEFG-IV-01"
    ],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "days",
          "label": "到期天数",
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
          "label": "执行价",
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
          "name": "kind",
          "label": "类型",
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
          "label": "报价侧",
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
            ],
            [
              "custom",
              "另设教学报价"
            ]
          ]
        },
        {
          "name": "quote",
          "label": "自定义报价（点）",
          "type": "number",
          "default": 256.9,
          "domain_or_choices": {
            "step": 0.1
          }
        },
        {
          "name": "periods",
          "label": "put反例抽象期数",
          "type": "select",
          "default": "2",
          "domain_or_choices": [
            [
              "1",
              "一期"
            ],
            [
              "2",
              "两期"
            ]
          ]
        }
      ]
    },
    "algorithm": "BSM no-dividend/general continuous-yield price; strict positive finite IV if model lower<quote<upper and bracketed; bisection90 steps. Separate 1/2-period tree q=(R-d)/(u-d); European continuation=(q*up+(1-q)*down)/R; American node=max(K-S,continuation).",
    "outputs": {
      "default": {
        "status": "ok",
        "iv": 0.235044985169588,
        "lower": 49.0726684812289,
        "upper": 5000,
        "days": 90,
        "strike": 5000,
        "kind": "call",
        "side": "mid",
        "price": 256.9,
        "contractCash": 25689.999999999996,
        "row": {
          "days": 90,
          "strike": 5000,
          "sigma": 0.235,
          "call": {
            "model": 256.85589455779245,
            "quotes": {
              "bid": 256.7,
              "mid": 256.9,
              "ask": 257.1
            },
            "iv": {
              "bid": 0.23484099571019257,
              "mid": 0.235044985169588,
              "ask": 0.2352489739676527
            },
            "tick": 0.1
          },
          "put": {
            "model": 207.78322607656355,
            "quotes": {
              "bid": 207.6,
              "mid": 207.8,
              "ask": 208
            },
            "iv": {
              "bid": 0.23481311894992452,
              "mid": 0.2350171084999934,
              "ask": 0.23522109738820862
            },
            "tick": 0.1
          }
        }
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M18.html",
      "unit_note": "EXP-MEFG-IV-01合成报价；提前行权树为独立教学市场，绝不改写EXP-STATE-01."
    },
    "boundaries": [
      "独立tree并非EXP-STATE-01，u/d/R全显示",
      "T>0且价格严格界内才反解有限正IV",
      "q_div=0非真实SPX估计；σ是模型参数",
      "无全局无套利surface保证"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M18-IV",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M18.html"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX与SPXW均为欧式、现金结算，合约乘数为每点100美元. 规格列出最小报价增量，并区分传统SPX的AM结算与SPXW的PM结算；现金在到期后相应营业日交付.
- [Vega](https://www.optionseducation.org/advancedconcepts/vega): Vega 是期权价格对波动率参数的偏导，常按波动率变化 1 个百分点报价.
- [Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise): 行权、卖出平仓、OCC与清算会员层的exercise-by-exception，以及客户指令分别处理. 股息、时间价值和行权截止安排影响持有人的选择.
- [15.450 Stochastic Calculus and Option Pricing](https://ocw.mit.edu/courses/15-450-analytics-of-finance-fall-2010/0d1260b891a96241316d883d4f5bfaec_MIT15_450F10_lec02.pdf): 无股息、常利率与常波动率条件下的连续复制、PDE、BSM公式及风险中性定价；相关数值例采用q=0.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 保护性组合、价差与跨式的逐腿支付，以及模型内的经济复制和定价. 现金账户的增长因子按讲义定义使用.

## Content relations
```json
[
  {
    "from": "zh-m18",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m18",
    "relation": "requires",
    "to": "zh-m15",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "分清call/put、premium、单位和行权方式"
  },
  {
    "from": "zh-m18",
    "relation": "uses_method",
    "to": "zh-m17",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m18-price",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-price"
  },
  {
    "from": "m18-tree",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-tree"
  },
  {
    "from": "m18-tree",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
    "locator": "Full FAQ main body through exercise/closing distinction",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-tree"
  },
  {
    "from": "m18-factors",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "分红、融资与提前行权的现金比较.",
    "locator": "FAQ中提前行权、分红、closing与exercise相关完整问答",
    "scope": "解释持股现金分配与行权选择的现实边界；不作为BSM非零股息公式来源",
    "at_section": "m18-factors"
  },
  {
    "from": "m18-factors",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型中的价格、偏导与Q测度.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-factors"
  },
  {
    "from": "m18-factors",
    "relation": "supported_by",
    "to": "MEFG-OIC-VEGA",
    "reason": "波动率参数的偏导和每百分点单位；IV不是独立的P下预测.",
    "locator": "Full main concept body",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-factors"
  },
  {
    "from": "m18-model",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
    "locator": "Full physical pp1–2; p2 specifications and relevant footnotes",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-model"
  },
  {
    "from": "m18-model",
    "relation": "supported_by",
    "to": "PFH-MIT-BSM",
    "reason": "常参数、无股息模型中的价格、偏导与Q测度.",
    "locator": "Slides 16–21: BSM market, replication/PDE/formula；Slides 52–58 and 60: Q pricing and European application",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m18-model"
  },
  {
    "from": "m18-inversion",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M18-IV",
    "reason": "先检查报价是否在模型价格界内，再看同一树在不同决策集合中的价值.",
    "at_section": "m18-inversion"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 17/17
先辨欧式可行权约束和模型条件，再检查报价界并反解 IV.
