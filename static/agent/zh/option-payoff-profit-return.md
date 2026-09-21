# 到期支付、交易损益与回报分母

用OCC同初始财富例重建支付、损益与回报，避免把权利金收益率当作全部财富收益率.

Entry: zh-m16 | Node: M16 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《到期支付、交易损益与回报分母》，面向有充分数学基础的高年级本科生至研究生. 先实际读取随包 required_readings 的指定原文单元；采用选读分支时也读取对应材料，并记录本次版本与范围. 原文不可读时查找机构的等价全文，仍缺关键单元则指出缺口.

让我用OCC的5K初始财富例重建股票、一份call加现金、十份call的支付与终值. 在到期价54和62分别计算权利金回报与整体财富回报，再计入同期现金基准. 用收到400、付1.7K平仓的卖方例检验资本分母所需的资金金额与日期.

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
      "source_id": "PFH-MIT-OPTIONS",
      "version": "Fall 2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides3–9完整支付/损益单元",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "从期权合同到支付和损益"
      },
      "supports": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
      "id": "M16-READ-01",
      "title": "15.401 Finance Theory I, Lecture 10–11: Options",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MA-OCC",
      "version": "June 2024",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Ch IX printed pp58–59；Ch X holder-risk pp61–63完整单元，含p61同财富表与假设",
        "scope": "完整指定单元、必要脚注与表图；不以搜索摘要代替",
        "purpose": "费用、资本、同财富官方假设例"
      },
      "supports": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
      "id": "M16-READ-02",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
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
    "experiment_id": "EXP-MEFG-M16-RETURN"
  },
  "entry_id": "zh-m16",
  "node_id": "M16",
  "content_version": "2026-09-22-deep-review",
  "experiment_ids": [
    "EXP-MEFG-M16-RETURN"
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
    "static/M16.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M16.html"
  }
}
```

## Supplied entry
<a id="m16-payoff"></a>
## 一、到期支付、交易损益与回报

期权图的纵轴可以是到期支付、扣除权利金的交易损益，或损益除以资金投入的回报率. 三者依次加入成本与资金分母，数值和含义随之改变.

设 $x^+=\max(x,0)$，每份合约乘数为 $m$，买入一份看涨期权的报价为 $c_0$. 到期经济支付是 $m(S_T-K)^+$；不计费用和资金时间价值的交易损益是
$$
\Pi_T=m\big((S_T-K)^+-c_0\big).
$$
看跌期权只需把支付改成 $m(K-S_T)^+$. 公式里的 $c_0$ 是每单位权利金；先乘合约单位，才能与账户美元比较. [^MEFG-MIT-OPTIONS]

这项损益计算把不同日期的钱按名义美元相加. 如果需要相对于现金投资的表现，必须把初始资金移到同一时点. 例如初始权利金的资金增长因子为 $R$，到期支付减 $mc_0R$ 才是相对于这笔资金同期增长的净额. 税、交易费和借贷利率差异也应在相应现金日期进入账本，不藏进图的标题.

<a id="case-mefg-odd-equal-wealth"></a>
<a id="m16-wealth"></a>
## 二、同初始财富下的三种配置

OCC风险披露文件给了一个特别适合练习分母的假设例. 股票现价50，看涨期权 $K=50$，每股权利金5，一份对应100股，剩余半年. 三位投资者初始财富都是5,000美元：甲全部买100股；乙买一份call，用掉500，剩4,500放在现金工具中；丙买十份call，用完5,000. 原例不计交易费、税和股票分红. [^MEFG-ODD]

我们采用原例的简单年利率3.25%. 半年现金利息为
$$
4,500\times3.25\%\times0.5=73.125.
$$
OCC表中把这笔利息近似成73美元；本表内部保留73.125，金额显示到美分时再四舍五入.

假设到期股票为62. 甲的股票值6,200，损益1,200；乙的一份call经济支付为1,200，现金含息4,573.125，终值5,773.125；丙的十份call支付12,000. 分别扣同一个5,000初始财富，就得到1,200、773.125和7,000. 这些终值按可实现的经济支付计算；实物行权所需的中途资金在[行权与账户路径](https://ou-liu-red-sugar.github.io/zh/notebook/option-exercise-assignment-settlement/)中另列.

| 到期股价 | 甲：100股损益 | 乙：1call＋现金损益 | 丙：10call损益 | 甲财富回报 | 乙财富回报 | 丙财富回报 |
|---:|---:|---:|---:|---:|---:|---:|
| 62 | 1,200.00 | 773.13 | 7,000.00 | 24.00% | 15.46% | 140.00% |
| 58 | 800.00 | 373.13 | 3,000.00 | 16.00% | 7.46% | 60.00% |
| 54 | 400.00 | −26.88 | −1,000.00 | 8.00% | −0.54% | −20.00% |
| 50 | 0.00 | −426.88 | −5,000.00 | 0.00% | −8.54% | −100.00% |
| 46 | −400.00 | −426.88 | −5,000.00 | −8.00% | −8.54% | −100.00% |
| 42 | −800.00 | −426.88 | −5,000.00 | −16.00% | −8.54% | −100.00% |
| 38 | −1,200.00 | −426.88 | −5,000.00 | −24.00% | −8.54% | −100.00% |

丙将全部5,000美元投入十份call，乙只投入一份. 因而上涨时丙的支付敏感度更高；当期权到期无价值时，丙损失全部资金，乙仍保留现金和利息. 这里的杠杆来自支付结构和持仓数量，丙未另外借款.

<a id="m16-denominator"></a>
## 三、权利金分母与整体财富分母

仍看股价62. 乙的单份期权损益为 $1,200-500=700$；以500权利金为基数，期权自身的名义投入回报是140%. 但乙没有把全部财富买期权，整体财富回报是
$$
\frac{700+73.125}{5,000}\approx15.463\%.
$$
再看股价54. 股票确实从50上涨了8%，可是call支付400，小于买入成本500. 乙的现金收益补回73.125后仍亏26.875. **看对方向，只说明 $S_T>S_0$；是否赚钱，还取决于行权价、支付形状、买入价和期限内资金安排.** 对这里的call，忽略其他成本的单份名义盈亏平衡价是55，而不是50.

若把相同的5,000美元存入原例现金工具，半年收益为81.25美元. 从三种配置各自的名义损益中减去81.25，得到相对于同一现金基准的增量结果.

<a id="m16-writer"></a>
## 四、卖方负债与资本分母

期权买方购买一份独立权利，可以把已付权利金作为这项权利的成本. 卖方收到权利金时，却同时承担一个未来负债. 若拿“收到的权利金”当作自有资本，再把未来净收款除以它，就跳过了履约抵押、追加资金和其他头寸，可能得到毫无资本解释的百分比. OCC对卖方保证金与买方损失分别说明，也提醒保证金并不是卖方损失上限. [^MEFG-ODD]

卖方收400、后来付1,700买回，名义损失为1,300. 资本回报还需初始自有资金、中途追加金额及日期、持有期和期末剩余资产. [空头期权账本](https://ou-liu-red-sugar.github.io/zh/notebook/option-exercise-assignment-settlement/)给出这些资金项目的完整例子.

<a id="m16-explore"></a>
## 五、支付、损益与回报的静态核对

<div data-experiment-slot="EXP-MEFG-M16-RETURN"></div>

同一组5,000美元初始财富下，股票终值为线性，call组合在行权价形成折点；从终值转到损益需要扣相应初始资金，从损益转到回报还必须注明资本分母. 改变期权份数后，只有整体初始财富仍为5,000美元时才能继续使用该分母.

<a id="m16-exercises"></a>
## 六、回报分母练习

**题一.** 到期股价58，乙的期权投入回报与整体财富回报分别是多少？

**解析.** 单份支付800，扣500得300，权利金回报 $300/500=60\%$. 乙整体再加73.125现金利息，损益373.125；除5,000得约7.463%. 两个百分比分别使用500与5,000作为分母.

**题二.** 到期股价50时，乙是否损失全部5,000？

**解析.** call到期支付为零，损失500，但4,500现金和利息仍在，终值4,573.125，损益−426.875. 丙的5,000全部买了call，才在该状态下全部损失. 两个“买期权”的账户，资金结构不同，结果并不一样.

**题三.** 买入 $K=50$、权利金5的call，忽略费用时盈亏平衡为55. 把权利金的半年融资成本纳入，边界是否仍为55？

**解析.** 不再相同. 若权利金也按原例现金基准计机会成本，期末每单位要覆盖$5\times(1+3.25\%\times0.5)\approx5.081$，相应边界约为55.081. 名义损益与相对现金基准的超额结果使用不同基准，需明确所采用的一个.

**题四.** 某裸卖方最初收400、最后付1,700平仓. 能否仅凭这两个数算其资本年化回报？

**解析.** 只能得出忽略其他现金的名义损失1,300. 还缺自有资金、追加资金日期、持有期与其他头寸. 收到的400是承担负债的对价，不等于全部投入资本；本题没有足够信息支持年化回报.

[^MEFG-MIT-OPTIONS]: Andrew W. Lo, MIT OpenCourseWare，*15.401 Finance Theory I, Lecture 10–11: Options*，Fall 2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf). 本篇定位：Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation.

[^MEFG-ODD]: The Options Clearing Corporation，*Characteristics and Risks of Standardized Options*，June 2024. [原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 本篇定位：Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>

## Additional teaching material
### 本篇默认结果与静态等价

<div class="table-wrap"><table><thead><tr><th>到期股价</th><th>股票P&amp;L</th><th>1call＋现金P&amp;L</th><th>10callsP&amp;L</th></tr></thead><tbody><tr><td>62</td><td>1,200.000</td><td>773.125</td><td>7,000.000</td></tr><tr><td>58</td><td>800.000</td><td>373.125</td><td>3,000.000</td></tr><tr><td>54</td><td>400.000</td><td>-26.875</td><td>-1,000.000</td></tr><tr><td>50</td><td>0.000</td><td>-426.875</td><td>-5,000.000</td></tr><tr><td>46</td><td>-400.000</td><td>-426.875</td><td>-5,000.000</td></tr><tr><td>42</td><td>-800.000</td><td>-426.875</td><td>-5,000.000</td></tr><tr><td>38</td><td>-1,200.000</td><td>-426.875</td><td>-5,000.000</td></tr></tbody></table></div><p>共同初始财富5,000美元；保留4,500美元半年简单年率3.25%的利息是73.125美元. ST=62时：单call权利金回报140%，1call＋现金整体财富回报15.463%. 不含税费和股票股息.</p>

完整冻结输入：https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/inputs.json. 来源内的包路径按 source_paths 取得.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MEFG-M16-RETURN",
    "title": "同样5,000美元，结果怎样比较",
    "anchor": "m16-explore",
    "description": "先比较全部财富，再切到期权权利金分母，看两个百分比回答什么问题.",
    "data_identity": "OCC官方假设例；可调现金率为教学变式. 到期经济支付不保证实物行权融资.",
    "shared_dataset_ids": [],
    "inputs": {
      "canonical_common": "shared_inputs.json",
      "state_contract": null,
      "controls": [
        {
          "name": "terminal",
          "label": "到期股价（美元）",
          "type": "number",
          "default": 62,
          "domain_or_choices": {
            "min": 0,
            "max": 200,
            "step": 1
          }
        },
        {
          "name": "cashRate",
          "label": "现金简单年率（%）",
          "type": "number",
          "default": 3.25,
          "domain_or_choices": {
            "min": -50,
            "max": 100,
            "step": 0.25
          }
        },
        {
          "name": "view",
          "label": "曲线视角",
          "type": "select",
          "default": "pnl",
          "domain_or_choices": [
            [
              "pnl",
              "组合损益（美元）"
            ],
            [
              "wealth",
              "终值财富（美元）"
            ],
            [
              "return",
              "同财富回报（%）"
            ]
          ]
        }
      ]
    },
    "algorithm": "interest=4500*simple_rate*0.5; stock_gain=100*(ST-50); mixed_gain=100*max(ST-50,0)-500+interest; options_gain=1000*max(ST-50,0)-5000. Whole-wealth return=gain/5000; one-call premium return=(100*payoff-500)/500.",
    "outputs": {
      "default": {
        "terminal": 62,
        "interest": 73.125,
        "payoffOne": 1200,
        "onePremium": 500,
        "gains": [
          1200,
          773.125,
          7000
        ],
        "wealth": [
          6200,
          5773.125,
          12000
        ],
        "returns": [
          0.24,
          0.154625,
          1.4
        ],
        "premiumReturn": 1.4,
        "initialWealth": 5000
      },
      "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M16.html",
      "unit_note": "OCC官方假设例；可调现金率为教学变式. 到期经济支付不保证实物行权融资."
    },
    "boundaries": [
      "成本口径沿ODD，无税费/股息，现金按半年简单利息",
      "不模拟实物行权融资，使用经济终值",
      "卖方没有给资本口径时不输出return"
    ],
    "views": {
      "first": "数值/单位/现金表",
      "second": "定价、现金、状态或事件图；见同一实验实现"
    },
    "implementation": {
      "html": "/notebook/labs/m-efg/interactions.html?experiment=EXP-MEFG-M16-RETURN",
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
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-efg/static/M16.html"
  }
]
```

## Sources
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [15.401 Finance Theory I: Lecture 10–11, Options](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/c40ecc0cc0dce0fbf2d229bc4027c43b_MIT15_401F08_lec10.pdf): 保护性组合、价差与跨式的逐腿支付，以及模型内的经济复制和定价. 现金账户的增长因子按讲义定义使用.

## Content relations
```json
[
  {
    "from": "zh-m16",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m16",
    "relation": "requires",
    "to": "zh-m15",
    "reason": "仅需要这项先备能力，不由推荐次序自动生成",
    "required_competence": "分清call/put、premium、单位和行权方式"
  },
  {
    "from": "m16-payoff",
    "relation": "supported_by",
    "to": "PFH-MIT-OPTIONS",
    "reason": "模型内的支付和复制定价；不代替当前产品规则，讲义现金增长记号不能误写成年化净利率.",
    "locator": "Slides 3–9: option definitions and payoff；Slides 16–21: binomial replication and risk-neutral valuation",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m16-payoff"
  },
  {
    "from": "m16-wealth",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m16-wealth"
  },
  {
    "from": "m16-writer",
    "relation": "supported_by",
    "to": "MA-OCC",
    "reason": "规则、权利金、行权/指派和同财富假设例；本课指定单元不替代实际交易者对整份ODD的阅读. 无真实行情或个人券商操作保证.",
    "locator": "Ch I printed pp3–5；Ch II vanilla terms pp6–9; Premium/Opening and Closing pp11–12; Intrinsic and Time Value pp14–15；Ch VIII pp55–57; Ch IX pp58–59；Ch X holder pp61–63; writer pp63–67（至所采用第11项）",
    "scope": "本段具名采用内容；教学生成数字仍按自身身份",
    "at_section": "m16-writer"
  },
  {
    "from": "m16-explore",
    "relation": "illustrated_by",
    "to": "EXP-MEFG-M16-RETURN",
    "reason": "先比较全部财富，再切到期权权利金分母，看两个百分比回答什么问题.",
    "at_section": "m16-explore"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 15/17
用同一初始财富比较配置，分开终点支付、交易损益和不同回报分母.
结果之外，还要核账户怎样经过平仓、行权与交收.
Next: [行权、指派与账户现金流](https://ou-liu-red-sugar.github.io/zh/notebook/option-exercise-assignment-settlement/)
