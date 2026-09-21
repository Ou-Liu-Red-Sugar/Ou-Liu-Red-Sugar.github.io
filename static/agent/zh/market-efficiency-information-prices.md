# 市场有效性与信息处理：从公开事件到可检验的证据

按size加权合约量重建公告前流量代理，核对信息窗口、回报基准与分组标准化，避免把关联当收益.

Entry: zh-m23 | Node: M23 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
你正在教M23《市场有效性与信息处理：从公开事件到可检验的证据》，内容版本2026-09-22-deep-review. 读者已有高年级本科至研究生的数学基础.

教学前读取agent_packet列出的当前必读原文完整指定单元，并在runtime_reading_log记录实际版本、范围与内容对应；同会话已完整读取的相同版本单元可复用. 缺失单元只限制对应讲解，采用选读分支时再读取其材料.

独立学习任务：用四类size加权合约量算TOI，标出事件前可用信息，并解释标准化回归而不是宣称策略利润.
专属诊断与正向讲解：先问30/10/25/35的单位，若答笔数要求补每笔size；核TOI.30和PCR1.5. 然后按τ−300至−46、τ−40至−10、τ−1、τ、[0,1]排序.
反馈尺度：.0283是宏观分组标准化变量上的回归系数，不能直接换算成2.83%原始收益；发起方向分类只描述成交方向，动机需另行识别；事件信息按当时可得时点进入分析.

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
      "source_id": "MEFG-MIT-EFFICIENCY",
      "version": "Spring 2003",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-433-investments-spring-2003/4491842813dd9719421bce96c282b39c_1543322marketefficiency.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整pp1–11，重点信息集、事件研究、成本与限制",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "效率的相对信息集和基准"
      },
      "supports": "信息集、检验基准与实施成本的基本框架；历史基金绩效不是当前市场事实.",
      "id": "M23-READ-01",
      "title": "15.433 Investments, Class 22: Market Efficiency",
      "authors": [
        "MIT OpenCourseWare"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MEFG-KIT-2025",
      "version": "Manuscript 2025-03-07; no journal status claimed",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://derivate.fbv.kit.edu/download/Information_Processing_in_the_Option_Market%202025.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.2、完整§3（含§3.4.1式2–3）、§4.1.1及Figure1、完整§4.2与Tables2–3，止于§4.3前",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "size加权合约量、事件/估计窗口、CAR、macro/nonmacro分别标准化与关联"
      },
      "supports": "size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.",
      "id": "M23-READ-02",
      "title": "Information Processing in the Option Market Around Earnings and Macroeconomic Announcements",
      "authors": [
        "Jelena Eberbach",
        "Marliese Uhrig-Homburg",
        "Xiaoxiao Yu"
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
    "experiment_id": "EXP-MEFG-M23-INFORMATION"
  },
  "entry_id": "zh-m23",
  "node_id": "M23",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M23-INFORMATION"
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
    "static/M23.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M23.html"
  }
}
```

## Supplied entry
<a id="m23-information"></a>
## 一、市场有效性的可检验含义

市场有效性以信息集为条件. 弱式采用过去价格等交易信息，半强式采用全部公开信息，强式还包括私人信息；检验的是指定信息能否系统改善经适当风险调整的回报. [^MEFG-MIT-EFFICIENCY]

检验还需要正常回报的基准. 发现公告后股票上涨，可能是意外好消息，也可能是共同市场变化；发现某信号与未来回报有关，也可能是风险补偿而不是可免费取得的超额收益. 因而检验信息效率常与检验回报模型交织在一起.

统计关系转为可执行收益，还受处理时间、买卖价差、费用、借券和资本约束影响. 以下研究用公告前的期权流量解释公告附近的股票回报.

<a id="case-mefg-kit-2025"></a>
<a id="m23-study"></a>
## 二、观察对象与可识别机制

采用Eberbach、Uhrig-Homburg和Yu的 *Information Processing in the Option Market Around Earnings and Macroeconomic Announcements*，2025-03-07工作稿. 其美国股票期权样本覆盖2004年1月至2017年10月，结合LiveVol成交／报价、OptionMetrics、I/B/E/S及宏观公告资料. 它研究公告附近的期权流量和随后股票价格关系. [^MEFG-KIT-2025]

第一步已经有测量问题：一笔成交由买方还是卖方主动发起，是根据报价附近的成交分类等规则推断的，并非直接观察交易者真实动机. 买入put可能为对冲，也可能为方向判断；卖出put可能有不同组合背景. 作者构造的是可观察信息处理的**代理量**.

图形阅读也要看时间. 原文§4.1.1、Figure 1（PDF第19页）按事后消息分类比较公告周围的异常流量. 这能帮助描述消息与交易之间的关系，但事后才知道的好／坏消息标签，不能被放进公告前的策略输入.

<a id="m23-volume"></a>
## 三、合约份数加权的 TOI

KIT §3.4.1式(2)用每笔成交的方向符号与**成交合约份数size**计算
$$
TOI=\frac{\sum_i \operatorname{sign}_i\,\operatorname{size}_i}
{\sum_i\operatorname{size}_i}.
$$
买方发起的call和卖方发起的put取正；卖方发起的call和买方发起的put取负. 它是方向性合约成交量的标准化差. [^MEFG-KIT-2025]

下面用一个合成例复算TOI. 四行表示按发起方向分类后的**合约份数**：

| 分类 | 成交合约份数 | 符号 | 带符号合约量 |
|---|---:|---:|---:|
| 买方发起call | 30 | +1 | +30 |
| 卖方发起call | 10 | −1 | −10 |
| 买方发起put | 25 | −1 | −25 |
| 卖方发起put | 35 | +1 | +35 |
| 合计 | 100 | — | 30 |

所以 $TOI=(30+35-10-25)/100=0.30$. 若对应的非事件基线均值为0.05，异常OI为 $0.30-0.05=0.25$. 原文的基线使用公告前指定非公告日窗口；本例把其均值0.05作为教学输入.

同一组数据的put／call总量比是
$$
\frac{25+35}{30+10}=\frac{60}{40}=1.5.
$$
“put量更多”和“方向代理量为正”没有矛盾. 前者不区分发起方向，后者区分并按合约量加权.

再想一个更小的核对：若上表恰好来自四笔不同大小的成交，每笔各算一票会有两个正、两个负，未加权结果为0；按size加权才是0.30. 只给笔数而不给每笔规模，就没有足够输入复算论文的这个变量.

<a id="m23-timing"></a>
## 四、信息时点与事件窗口

以公告日为 $\tau$，本篇采用原文的几组不同窗口：

| 环节 | 相对时间 | 用途 |
|---|---|---|
| 市场beta估计 | $\tau-300$ 至 $\tau-46$ | 形成异常回报的市场模型基准 |
| 非事件流量基线 | $\tau-40$ 至 $\tau-10$ 中相应非公告日 | 计算平常的TOI均值 |
| 公告前流量 | 例如 $\tau-1$ | 作为随后价格反应的解释变量 |
| 公告／消息 | $\tau$ | 确定事件，具体盘中盘后对齐沿原研究 |
| 公告回报窗口 | 例如 $[0,1]$ | 度量公告附近价格反应 |

这些窗口不能仅因为都在同一张图上，就当成同一时点已经知道的信息. 预测者在 $\tau-1$ 不知道事后实现的公告回报，也不能用完整未来样本重新估计当时的beta. [^MEFG-KIT-2025]

原文的市场调整累计回报也不是随便把股票涨幅叫alpha. 用 $G_i=\prod(1+r_{i,t})$、$G_m=\prod(1+r_{m,t})$、$G_f=\prod(1+r_{f,t})$ 表示指定窗口的累计总增长量，其比较结构为
$$
CAR=(G_i-G_f)-\widehat\beta_i(G_m-G_f).
$$
$\widehat\beta_i$由上述更早的估计窗口得到. CAR衡量指定窗口内个股超额增长量相对于估计市场暴露的偏离.

<a id="m23-regression"></a>
## 五、标准化系数与回报单位

Table 2（印刷p22／PDF第23页）将公告窗口回报与公告前异常OI、宏观日指标及其交互联系. 用简写表示其中一部分：
$$
CAR=\alpha+\beta_1OI+\beta_2MD
+\beta_3(OI\times MD)+\text{控制项}+\varepsilon.
$$
$MD$ 是相应宏观公告日指示变量. 作者在宏观／非宏观两组分别标准化相关变量；因此表中系数不能直接作为未经标准化的OI每增加1时，真实回报百分点会增加多少. [^MEFG-KIT-2025]

| 原文比较 | 采用值 | 正确阅读 |
|---|---:|---|
| 第3列OI系数 | $3.3\times10^{-3}$ | 该列指定基组与标准化下的系数 |
| 第3列OI×宏观日交互 | $25\times10^{-3}$ | 同一回归中宏观日斜率增量 |
| 两者之和 | $28.3\times10^{-3}$ | 作者解释的宏观日对应系数 |
| 第1列合并样本OI系数 | $7.8\times10^{-3}$ | 另一列合并回归的参照 |

作者报告的系数关系为$(3.3+25)\times10^{-3}=28.3\times10^{-3}$，与合并样本系数$7.8\times10^{-3}$之比约3.628. 这些系数作用于分组标准化变量；还原原始收益单位需相应组内尺度，将关联转为策略回报还需交易价格、持有规则和成本.

期权流量与随后股票反应的关联支持作者关于信息处理的解释，但该设计不识别单笔交易者动机，也不能单独判定内幕信息来源. 公开信息处理、风险暴露和交易需求都可能生成相似流量；区分这些机制需要额外识别.

<a id="m23-explore"></a>
## 六、图形与回归证据

<div data-experiment-slot="EXP-MEFG-M23-INFORMATION"></div>

合约量图分别显示四类正负贡献，计算TOI、异常OI与put/call量比；时间图显示估计、基线、流量、公告和回报窗口. Figure 1和Table 2可从研究卡打开原文.

总合约量为0时，TOI无定义；call总量为0时，put/call量比无定义. 原研究另有样本筛选要求，使用这些变量复现研究时需同步采用.

<a id="m23-exercises"></a>
## 七、证据范围与替代解释

**题一：上表只有四行，为什么不能算成“二正二负，TOI为0”？**

**解析.** 论文按size加权，四行分别汇总30、10、25、35份合约. 带符号量为30，总量100，得0.30. 即使恰好来自四笔成交，也不能丢掉不同size.

**题二：put／call比1.5与TOI=+0.30各告诉我们什么？**

**解析.** 前者只有call与put总量，不含发起方向；后者对四类方向加权. 两者都不是交易者心理的直接测量，也不能凭这两个数建立必赚信号.

**题三：把Figure 1事后好消息组的标签加入 $\tau-1$ 策略，会犯什么错？**

**解析.** 该标签依赖后来公告，属于未来信息. 用它训练或执行公告前规则，会把事后解释误当成当时可用的预测信息.

**题四：$28.3\times10^{-3}$和$7.8\times10^{-3}$的比约3.628，能否说宏观日策略收益高3.63倍？**

**解析.** 不能. 它比较原文指定回归和标准化口径下的系数；不是同资本、同成本的两套交易收益. 要作策略比较，须另定义价格、仓位、信息、持有期和可执行费用.

**题五：一条公开消息之后价格仍缓慢变化，足以推翻半强式有效吗？**

**解析.** 单一观察不足. 先确认何时消息真正公开、市场基准、风险补偿、样本选择及交易成本；再检验可重复的异常结果. 否则既可能漏掉真正信息处理，也可能把正常风险或测量偏差错当成低效率.

[^MEFG-MIT-EFFICIENCY]: MIT OpenCourseWare，*15.433 Investments, Class 22: Market Efficiency*，Spring 2003. [原文](https://ocw.mit.edu/courses/15-433-investments-spring-2003/4491842813dd9719421bce96c282b39c_1543322marketefficiency.pdf). 本篇定位：Full physical pp1–11; p2 information sets, pp4–6 event/cost/limits, p9 framing.

[^MEFG-KIT-2025]: Jelena Eberbach, Marliese Uhrig-Homburg, Xiaoxiao Yu，*Information Processing in the Option Market Around Earnings and Macroeconomic Announcements*，Manuscript 2025-03-07; no journal status claimed. [原文](https://derivate.fbv.kit.edu/download/Information_Processing_in_the_Option_Market%202025.pdf). 本篇定位：§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>发起方向</th><th>合约份数</th><th>符号</th></tr></thead><tbody><tr><td>买call</td><td>30</td><td>+</td></tr><tr><td>卖call</td><td>10</td><td>−</td></tr><tr><td>买put</td><td>25</td><td>−</td></tr><tr><td>卖put</td><td>35</td><td>+</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th>量</th><th>计算</th></tr></thead><tbody><tr><td>TOI</td><td>(30+35−10−25)/100=0.30</td></tr><tr><td>异常OI</td><td>0.30−0.05=0.25</td></tr><tr><td>put/call量</td><td>60/40=1.5</td></tr><tr><td>宏观日标准化系数</td><td>.0033+.0250=.0283</td></tr><tr><td>与合并列比较</td><td>.0283/.0078≈3.6282</td></tr></tbody></table></div><p>单位是按发起方向分类的成交合约份数，size加权. 论文按宏观/非宏观组标准化；系数不是交易收益. 估计窗口τ−300…−46，基线τ−40…−10，公告前流量τ−1，CAR[0,1]. 事后消息标签不能倒放.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M23-INFORMATION",
    "title": "合约成交量与事件时间",
    "anchor": "m23-explore",
    "description": "同一组put量可以更多，而带方向的TOI仍为正. 先核单位，再解释系数.",
    "data_identity": "四组数均为按发起方向分类的合约份数，不是未加权笔数；不是交易者动机或真实流量.",
    "shared_dataset_ids": [],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "bc",
          "label": "买方发起call（份）",
          "type": "number",
          "default": 30,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "sc",
          "label": "卖方发起call（份）",
          "type": "number",
          "default": 10,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "bp",
          "label": "买方发起put（份）",
          "type": "number",
          "default": 25,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "sp",
          "label": "卖方发起put（份）",
          "type": "number",
          "default": 35,
          "domain_or_choices": {
            "min": 0,
            "step": 1
          }
        },
        {
          "name": "baseline",
          "label": "非事件TOI均值（教学）",
          "type": "number",
          "default": 0.05,
          "domain_or_choices": {
            "min": -1,
            "max": 1,
            "step": 0.01
          }
        }
      ]
    },
    "algorithm": "TOI=(BC+SP-SC-BP)/(BC+SC+BP+SP), all counts are size-weighted contract volumes. Abnormal=TOI-baseline; PCR=(BP+SP)/(BC+SC). Total0=>undefined; call_total0=>PCR undefined. Published standardized macro slope=.0033+.025=.0283; ratio to pooled=.0283/.0078; not return percent.",
    "outputs": {
      "default": {
        "bc": 30,
        "sc": 10,
        "bp": 25,
        "sp": 35,
        "total": 100,
        "calls": 40,
        "puts": 60,
        "signed": 30,
        "TOI": 0.3,
        "abnormal": 0.25,
        "putCallRatio": 1.5,
        "baseline": 0.05,
        "status": "toy_computed_not_research_replication",
        "standardizedMacroSlope": 0.028300000000000002,
        "pooledCoefficient": 0.0078,
        "ratioToPooled": 3.6282051282051286,
        "unit": "contracts classified by initiating side, size weighted; not transaction counts"
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M23.html",
      "unit_note": "四组数均为按发起方向分类的合约份数，不是未加权笔数；不是交易者动机或真实流量."
    },
    "boundaries": [
      "合约份数非交易笔数，非动机",
      "size总量0不除0；call量0PCR null",
      "低于10份仅toy，不能称通过原研究筛选",
      "事后消息不能用于公告前信号",
      "分组标准化coefficients不改写为交易收益"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M23-INFORMATION",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M23.html"
  }
]
```

## Sources
- [Information Processing in the Option Market Around Earnings and Macroeconomic Announcements](https://derivate.fbv.kit.edu/download/Information_Processing_in_the_Option_Market%202025.pdf): size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.
- [15.433 Investments, Class 22: Market Efficiency](https://ocw.mit.edu/courses/15-433-investments-spring-2003/4491842813dd9719421bce96c282b39c_1543322marketefficiency.pdf): 市场有效性检验中的信息集、比较基准、实施成本与历史基金绩效.

## Content relations
```json
[
  {
    "from": "zh-m23",
    "relation": "part_of",
    "to": "markets-pricing",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m23",
    "relation": "requires",
    "to": "zh-m02",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "区分发行、二级交易与参与者的信息路径"
  },
  {
    "from": "zh-m23",
    "relation": "uses_method",
    "to": "zh-m03",
    "reason": "本篇相应段落就地调用报价、履约、时间价值或价格敏感度，不要求重新学习整篇"
  },
  {
    "from": "m23-information",
    "relation": "supported_by",
    "to": "MEFG-MIT-EFFICIENCY",
    "reason": "信息集、检验基准与实施成本的基本框架；历史基金绩效不是当前市场事实.",
    "locator": "Full physical pp1–11; p2 information sets, pp4–6 event/cost/limits, p9 framing",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m23-information"
  },
  {
    "from": "m23-study",
    "relation": "supported_by",
    "to": "MEFG-KIT-2025",
    "reason": "size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.",
    "locator": "§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m23-study"
  },
  {
    "from": "m23-volume",
    "relation": "supported_by",
    "to": "MEFG-KIT-2025",
    "reason": "size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.",
    "locator": "§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m23-volume"
  },
  {
    "from": "m23-timing",
    "relation": "supported_by",
    "to": "MEFG-KIT-2025",
    "reason": "size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.",
    "locator": "§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m23-timing"
  },
  {
    "from": "m23-regression",
    "relation": "supported_by",
    "to": "MEFG-KIT-2025",
    "reason": "size加权的发起方向合约成交量代理、事件时间、市场模型基准、分组标准化关联；无交易动机识别或可执行净收益证明.",
    "locator": "§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m23-regression"
  },
  {
    "from": "m23-explore",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M23-INFORMATION",
    "reason": "同一组put量可以更多，而带方向的TOI仍为正. 先核单位，再解释系数.",
    "at_section": "m23-explore"
  }
]
```

## Related entries
