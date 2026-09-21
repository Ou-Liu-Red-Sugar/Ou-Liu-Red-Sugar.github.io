# 行权、指派与账户现金流

按平仓、实物行权、指数现金结算和空头抵押四条路径列账，区分现金、负债、权益和新投入.

Entry: zh-m17 | Node: M17 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《行权、指派与账户现金流》，面向有充分数学基础的高年级本科生至研究生. 先实际读取随包 required_readings 的指定原文单元；采用选读分支时也读取对应材料，并记录本次版本与范围. 原文不可读时查找机构的等价全文，仍缺关键单元则指出缺口.

让我分别列出call平仓、行权后卖股、SPXW现金结算的现金与证券变化. 再重建裸call卖方的抵押资产、负债、权益和追加现金，解释4.1K、2.4K、2.2K与1.3K的区别. 改变可用资金、客户行权截止或保护腿时点，判断哪条路径及其条件发生变化.

用一个完整分析任务判断我的起点，已掌握的步骤直接跳过. 沿正文的输入、单位与材料时点讲解，在我作答后给出推导、错误原因和迁移反馈.

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
        "locator": "Ch VIII printed pp55–57；IX pp58–59；X holder pp61–63、writer pp63–67所采用风险单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "行权、指派、保证金与持有人/写出人风险"
      },
      "supports": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
      "id": "M17-READ-01",
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
        "locator": "完整规格正文，包括uncovered customer margin及maintenance",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "保证金公式适用对象和T+1实物交付"
      },
      "supports": "普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.",
      "id": "M17-READ-02",
      "title": "Equity Options Product Specifications",
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
        "locator": "完整两页",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "现金结算与欧式AM/PM区别"
      },
      "supports": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
      "id": "M17-READ-03",
      "title": "S&P 500 Index Options (SPX) Fact Sheet",
      "authors": [
        "Cboe Global Markets"
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
        "locator": "FAQ正文全文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "ex-by-ex、客户指令、提前行权及平仓"
      },
      "supports": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
      "id": "M17-READ-04",
      "title": "Options Exercise FAQ",
      "authors": [
        "Options Industry Council"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PFH-T1",
      "version": "July 2024",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.optionseducation.org/news/understanding-t-1-conversion",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "全文",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "期权premium与行权股票现金/记录时点"
      },
      "supports": "期权成交头寸记账、权利金现金和行权股票交收时间有别；2024-05-28转换.",
      "id": "M17-READ-05",
      "title": "The Impact of T+1 on Options / Understanding T+1 Conversion",
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
    "experiment_id": "EXP-MEFG-M17-LIFECYCLE"
  },
  "entry_id": "zh-m17",
  "node_id": "M17",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M17-LIFECYCLE"
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
    "static/M17.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M17.html"
  }
}
```

## Supplied entry
<a id="m17-actions"></a>
## 一、平仓、行权与指派

期权持有人可以卖出已有期权平仓，也可在合约允许时行权. **平仓是期权交易，行权是使用合约权利，指派是将履约义务分配给相应卖方持仓.** 卖出平仓取得期权交易价，行权则产生合约规定的证券或现金交收. [^MEFG-ODD][^MEFG-OIC-EXERCISE]

美式期权允许在规定营业日提前行权；欧式期权限于相应到期安排. 选择何时行权时，不只看当前价内程度，还要比较卖出期权能收多少钱、提前支付行权货款的资金代价、标的分配以及失去的剩余选择权. 合约允许某个动作，不代表那个动作在当前报价下最合算.

从账户看，期权卖方也不是始终对最初那个买方履约. OCC体系在清算会员层承接和分配相应义务，客户层再按适用程序处理. 这就是为什么实际行权通知、指派通知、交易回报和交收可能在不同时间出现. [^MEFG-ODD]

<a id="m17-physical"></a>
## 二、股票call的平仓与实物行权

取一份标准股票call作教学账：每份100股，$K=100$，最初以每股4买入，权利金400. 后来观察到股票可卖报价105，call的bid／ask为6／6.2.

先假设各腿都可按给定价格执行，忽略费用. 卖出期权平仓，使用call的bid 6，收到600，原交易损益 $600-400=200$. 若提前行权，再卖掉取得的股票，则按合约付10,000、收100股，再按股票bid收10,500，扣原400后损益100. [^MEFG-OCC-EQUITY][^MEFG-OIC-EXERCISE]

| 路径 | 期权现金 | 行权股票／货款 | 后续卖股 | 原交易名义损益 |
|---|---:|---|---:|---:|
| 卖出call平仓 | 初始−400，后来＋600 | 无 | 无 | ＋200 |
| 行权后卖股 | 初始−400 | −10,000，＋100股 | ＋10,500，−100股 | ＋100 |

这里call的可卖价6，高于立即交换差额5；按这组可执行报价，直接行权会放弃每股1美元、全份100美元的剩余可卖价值. 其他报价、分红、融资与可执行条件改变时，应重新比较两条现金路径.

10,000是行权买股的货款毛额. 若先付款、后取得股票再出售，需要先筹到这笔钱；同步卖出、交收净额或券商授信可以改变峰值新增现金需求.

我们用相对事件日记时间：期权成交日为 $T$，其权利金现金交收与头寸记录不是同一事件；行权日在另一个营业日 $E$，OCC普通股票规格列示股票于随后第一个营业日交付. 它可能是 $E+1$，却不必是买入期权后的 $T+1$. [^MEFG-OIC-T1][^MEFG-OCC-EQUITY]

<a id="m17-index"></a>
## 三、SPXW的现金结算

Cboe所列SPX与SPXW都是欧式现金结算、每点100美元，但结算值形成方式不同：传统SPX采用AM安排，SPXW采用其规定的PM安排. 本例只取SPXW的现金分支. [^MEFG-SPX]

设 $K=5,000$，最初权利金50点，即5,000美元；最终结算值5,025. 到期支付为
$$
100(5,025-5,000)=2,500\text{ 美元},
$$
扣原权利金后名义损益为−2,500美元. 没有股票流入，也不发生 $K\times100$ 的买入指数“货款”. 价内只说明支付为正，不说明初始投资已被覆盖. 合约的结算现金于规则规定的营业日到达清算流程，个人账户显示还要服从相应处理.

最终结算金额使用该系列指定的exercise settlement value. AM与PM采用不同采价时点，相同的普通收盘指数不能同时替代两套结算值.

<a id="m17-margin"></a>
## 四、空头期权的抵押资产、负债与权益

现在换到一份普通股票裸call卖方. 教学输入为 $S=100$、$K=105$、权利金4、乘数100；后来 $S=120$，期权按17标记. OCC网页给出的这一类最低客户规则，可在本例写成
$$
\begin{aligned}
A_{\rm req}
 &=100\left[V+\max\left(0.20S-\max(K-S,0),\,0.10S\right)\right],\\
E_{\rm req}&=A_{\rm req}-100V.
\end{aligned}
$$
$A_{\rm req}$ 是包含期权价值部分的总抵押资产要求，$E_{\rm req}$ 是扣除空头负债后的权益要求. 维持时用当前期权价值代替最初收到的权利金. 这组公式对应OCC网页列示的普通股票裸call最低客户保证金；券商附加要求、组合抵扣和其他产品规则需要另行输入. [^MEFG-OCC-EQUITY]

开仓时要求总资产 $100[4+\max(20-5,10)]=1,900$；其中400来自卖出权利金，自有投入1,500. 价格变化后要求变成 $100[17+\max(24,12)]=4,100$. 注意，期权涨价先增加的是空头负债，不像期货每日变动现金那样自动把差额从本例现金栏扣走.

| 时点 | 现金／抵押资产 | 空头期权负债 | 净权益 | 本步客户新增现金 |
|---|---:|---:|---:|---:|
| 开仓后 | 1,900 | 400 | 1,500 | 1,500 |
| 价格变化，未补款 | 1,900 | 1,700 | 200 | 0 |
| 补足要求后 | 4,100 | 1,700 | 2,400 | 2,200 |
| 按17买回平仓后 | 2,400 | 0 | 2,400 | 0 |

累计自有投入 $1,500+2,200=3,700$；最终剩2,400，损失1,300. 也可从期权本身核对：收到400、买回付1,700，同样−1,300.

4,100为总抵押资产要求，2,400为扣除空头负债后的权益，2,200为本次需追加现金，1,300为交易损失. 外部现金少于2,200时，这条补款路径出现缺口，后续结果取决于追加融资或平仓的实际条件. 标的继续上涨仍可增加卖方义务. [^MEFG-ODD]

<a id="m17-timing"></a>
## 五、到期流程与多腿持仓的操作条件

到期附近，清算会员层的exercise-by-exception程序与客户对券商发出的指令不是一回事. 阈值处理、反向指令、客户截止以及资金能力都有各自规则. 只知道某腿价内，不能保证客户一定会按自己想象的路径取得股票；也不能保证被指派的短腿与另一条保护长腿自动同一时刻处理. [^MEFG-OIC-EXERCISE]

美式call提前行权需要比较取得股票的分红、期权剩余可卖价值及提前支付$K$的资金代价. 卖方被指派后，已持有现货者交付现货，无现货者需取得交付证券；两者面临的资金与执行条件不同.

<div data-experiment-slot="EXP-MEFG-M17-LIFECYCLE"></div>

<a id="m17-exercises"></a>
## 六、账户路径练习

**题一.** 教学股票call的可卖bid为6，而股票bid为105、$K=100$. 忽略费用，为什么提前行权后卖股少100美元？

**解析.** 平仓把整张期权以600卖掉；立即行权交换只取得500差额. 原始400成本在两条路径中都扣一次，所以两者最终损益相差100.

**题二.** 上表价格变化、尚未补款时，净权益为什么是200而不是1,900？随后“补到4,100”是否表示又亏了2,200？

**解析.** 账户有1,900现金，同时欠一份价值1,700的期权，净权益为200. 转入2,200只增加资产与投入资本，并不再产生2,200交易损失；已有损失仍为权利金负债从400升到1,700的1,300. 补后权益2,400与累计投入3,700相差同样1,300.

**题三.** 到期SPXW价内25点，是否意味着至少赚2,500？

**解析.** 2,500是该例现金支付. 最初支付5,000权利金，所以名义损益−2,500；计入资金时间和费用还需进一步调整. 支付正、损益正是两个命题.

**题四.** 你的短call已被指派，账户还有另一份长call. 为什么不能仅据此跳过资金检查？

**解析.** 两腿可能有不同期限、行权方式和客户处理时点. 即使最终支付能形成保护，短腿要求的股票／现金与长腿是否、何时行权仍要逐项核.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

[^MEFG-OIC-EXERCISE]: Options Industry Council，*Options Exercise FAQ*，Undated; retrieved 2026-09-21. [原文](https://www.optionseducation.org/referencelibrary/faq/options-exercise). 本篇定位：Full FAQ main body through exercise/closing distinction.

[^MEFG-OCC-EQUITY]: OCC，*Equity Options Product Specifications*，Undated public specification; retrieved 2026-09-21. [原文](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications). 本篇定位：Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin.

[^MEFG-OIC-T1]: Options Industry Council，*The Impact of T+1 on Options / Understanding T+1 Conversion*，July 2024. [原文](https://www.optionseducation.org/news/understanding-t-1-conversion). 本篇定位：Article body, full.

[^MEFG-SPX]: Cboe Global Markets，*S&P 500 Index Options (SPX) Fact Sheet*，©2026; WF-451400-KC; no precise issue date shown. [原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 本篇定位：Full physical pp1–2; p2 specifications and relevant footnotes.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>分支</th><th>初始premium</th><th>后续收付</th><th>总交易P&amp;L</th></tr></thead><tbody><tr><td>股票call平仓</td><td>−400</td><td>按bid收600</td><td>+200</td></tr><tr><td>股票call行权再卖股</td><td>−400</td><td>−10,000；+10,500</td><td>+100</td></tr><tr><td>SPXW结算5,025</td><td>−5,000</td><td>现金支付+2,500</td><td>−2,500</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>裸call阶段</th><th>现金</th><th>短期权负债</th><th>净权益</th><th>新增自有现金</th></tr></thead><tbody><tr><td>开仓后</td><td>1,900.00</td><td>400.00</td><td>1,500.00</td><td>1,500.00</td></tr><tr><td>价格变化、未补款</td><td>1,900.00</td><td>1,700.00</td><td>200.00</td><td>0.00</td></tr><tr><td>补足要求</td><td>4,100.00</td><td>1,700.00</td><td>2,400.00</td><td>2,200.00</td></tr><tr><td>按标记价买回平仓（教学）</td><td>2,400.00</td><td>0.00</td><td>2,400.00</td><td>0.00</td></tr></tbody></table></div><p>累计自有资金3,700；平仓剩2,400；损失1,300. 总抵押4,100、净权益2,400、追加2,200是不同量. 外部可用现金不足2,200时，补款路径在缺口处停止.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M17-LIFECYCLE",
    "title": "平仓、行权与空头资金账",
    "anchor": "m17-timing",
    "description": "比较实物与现金交收，再按四列账本分开抵押资产、负债、权益和外部资金.",
    "data_identity": "真实合约机制＋教学报价. 股票期权标记负债不当作期货逐日现金. 现金不足不续写完成结果.",
    "shared_dataset_ids": [],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "mode",
          "label": "账户分支",
          "type": "select",
          "default": "physical",
          "domain_or_choices": [
            [
              "physical",
              "股票call：平仓/行权"
            ],
            [
              "index",
              "SPXW：现金到期"
            ],
            [
              "writer",
              "裸股票call：抵押账"
            ]
          ]
        },
        {
          "name": "action",
          "label": "股票call处理",
          "type": "select",
          "default": "close",
          "domain_or_choices": [
            [
              "close",
              "卖出平仓"
            ],
            [
              "exercise",
              "先付货款行权，再卖股票"
            ]
          ]
        },
        {
          "name": "funds",
          "label": "行权可动用毛现金（美元）",
          "type": "number",
          "default": 10000,
          "domain_or_choices": {
            "min": 0,
            "step": 500
          }
        },
        {
          "name": "settlement",
          "label": "SPXW最终结算点",
          "type": "number",
          "default": 5025,
          "domain_or_choices": {
            "min": 0,
            "step": 25
          }
        },
        {
          "name": "laterSpot",
          "label": "空头后续股价",
          "type": "number",
          "default": 120,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "laterMark",
          "label": "空头期权标记报价",
          "type": "number",
          "default": 17,
          "domain_or_choices": {
            "min": 0,
            "step": 0.1
          }
        },
        {
          "name": "external",
          "label": "本次可追加现金（美元）",
          "type": "number",
          "default": 2200,
          "domain_or_choices": {
            "min": 0,
            "step": 100
          }
        }
      ]
    },
    "algorithm": "Physical close: -400+600=200. Sequential exercise: funds>=10000 required before modeled stock sale; -400-10000+10500=100. SPXW:100*max(settlement-5000,0)-5000. Naked equity call collateral=m*(option_mark+max(.2*S-max(K-S,0),.1*S)); account equity=cash-liability; required top-up=max(new_collateral-old_cash,0); cash paid=min(available,required), stop if unmet>0.",
    "outputs": {
      "default": {
        "mode": "writer",
        "status": "illustrated_funded_close",
        "rows": [
          {
            "stage": "开仓后",
            "cash": 1900,
            "liability": 400,
            "equity": 1500,
            "newCapital": 1500
          },
          {
            "stage": "价格变化、未补款",
            "cash": 1900,
            "liability": 1700,
            "equity": 200,
            "newCapital": 0
          },
          {
            "stage": "补足要求",
            "cash": 4100,
            "liability": 1700,
            "equity": 2400,
            "newCapital": 2200
          },
          {
            "stage": "按标记价买回平仓（教学）",
            "cash": 2400,
            "liability": 0,
            "equity": 2400,
            "newCapital": 0
          }
        ],
        "initialCollateral": 1900,
        "requiredCollateral": 4100,
        "requiredEquity": 2400,
        "requiredTopup": 2200,
        "paid": 2200,
        "shortfall": 0,
        "markPnl": -1300,
        "realizedPnl": -1300,
        "totalOwnCapital": 3700,
        "endingCash": 2400,
        "noFuturesVM": true,
        "noHouseMargin": true
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M17.html",
      "unit_note": "真实合约机制＋教学报价. 股票期权标记负债不当作期货逐日现金. 现金不足不续写完成结果."
    },
    "boundaries": [
      "这里只是普通股票裸call最低客户规则，非ETF/index/house-margin统一表",
      "可用追加现金不足时停止，后续realizedPnl/endingCash为null",
      "行权10,000毛额先付款是具名教学顺序，不推定经纪商净额要求",
      "T+1分trade/exercise对应事件，不编客户cutoff",
      "无费用普通美式call教学标记须不低于立即行权值且不高于股价；无效标记拒绝计算"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M17-LIFECYCLE",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M17.html"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX与SPXW均为欧式、现金结算，合约乘数为每点100美元. 规格列出最小报价增量，并区分传统SPX的AM结算与SPXW的PM结算；现金在到期后相应营业日交付.
- [Equity Options Product Specifications](https://www.theocc.com/clearance-and-settlement/clearing/equity-options-product-specifications): 标准未调整股票期权通常对应100股，按美元报价、美式行权并实物交割. 保证金规则区分初始与维持要求，维持计算使用当前期权价值；券商可另设客户要求.
- [Options Exercise FAQ](https://www.optionseducation.org/referencelibrary/faq/options-exercise): 行权、卖出平仓、OCC与清算会员层的exercise-by-exception，以及客户指令分别处理. 股息、时间价值和行权截止安排影响持有人的选择.
- [The Impact of T+1 on Options](https://www.optionseducation.org/news/understanding-t-1-conversion): 期权成交形成头寸，权利金现金与行权后的股票按交收安排转移. 2024-05-28 起适用的 T+1 周期及转换说明.

## Content relations
```json
[
  {
    "from": "zh-m17",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m17",
    "relation": "requires",
    "to": "zh-m15",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "分清call/put、premium、单位和行权方式"
  },
  {
    "from": "zh-m17",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m17-actions",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-actions"
  },
  {
    "from": "m17-actions",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
    "locator": "Full FAQ main body through exercise/closing distinction",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-actions"
  },
  {
    "from": "m17-physical",
    "relation": "supported_by",
    "to": "PFH-EQUITY",
    "reason": "普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.",
    "locator": "Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-physical"
  },
  {
    "from": "m17-physical",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
    "locator": "Full FAQ main body through exercise/closing distinction",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-physical"
  },
  {
    "from": "m17-physical",
    "relation": "supported_by",
    "to": "PFH-T1",
    "reason": "期权成交头寸记账、权利金现金和行权股票交收时间有别；2024-05-28转换.",
    "locator": "Article body, full",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-physical"
  },
  {
    "from": "m17-index",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.",
    "locator": "Full physical pp1–2; p2 specifications and relevant footnotes",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-index"
  },
  {
    "from": "m17-margin",
    "relation": "supported_by",
    "to": "PFH-EQUITY",
    "reason": "普通股票期权通常100股、美式实物交收；裸call最低规则与维持时使用当前期权价值. 非全部ETF/指数或具体账户house margin.",
    "locator": "Full displayed specification body: Unit, Premium, Exercise, Settlement, Minimum Customer Margin",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-margin"
  },
  {
    "from": "m17-margin",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-margin"
  },
  {
    "from": "m17-timing",
    "relation": "supported_by",
    "to": "PFH-EXERCISE",
    "reason": "行权vs平仓、ex-by-ex与客户指令、提前行权和分红；不提供任何个人券商统一截止.",
    "locator": "Full FAQ main body through exercise/closing distinction",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m17-timing"
  },
  {
    "from": "m17-timing",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M17-LIFECYCLE",
    "reason": "比较实物与现金交收，再按四列账本分开抵押资产、负债、权益和外部资金.",
    "at_section": "m17-timing"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 16/17
按真实规则与教学账本，判断到期交付对象、保证金权益和追加资金是否足够.
现金与行权条件明确后，研究到期前报价如何随模型条件变化.
Next: [期权价格、内在价值与隐含波动率](https://ou-liu-red-sugar.github.io/zh/notebook/option-price-intrinsic-implied-volatility/)
