# 基差与资金费率交易：结算、融资与退出

基差交易同时包含现货损益、期货结算、保证金与融资现金. 以下分别计算美元计价MBT到期安排和USDT线性永续安排. 合约单位、结算及funding/P&L采用引用规则，价格、费用、保证金和借款为教学输入.

Entry: zh-p32 | Node: P32 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的全部指定单元，所选可选分支再读 optional_readings，核对版本、期间、单位及支持内容. 缺少必要单元时先取得等价可读原件，再进行依赖它的讲解. 分别核美元MBT与USDT线性永续账户. 美元分支在955现金、3,500应补处判断动作，比较及时追加2,545；永续分支逐次算标记价×费率及费用，迁移现货退出尾差和变动费率. 先以完整推理任务诊断，再让读者计算和解释；按错误反馈，使用迁移题检验. 采用所列日期研究和教学输入，runtime_reading_log记录实际来源与范围.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p32",
  "learning_task": "分别核美元MBT与USDT线性永续账户. 美元分支在955现金、3,500应补处判断动作，比较及时追加2,545；永续分支逐次算标记价×费率及费用，迁移现货退出尾差和变动费率.",
  "required_readings": [
    {
      "source_id": "PI-CME-MBT",
      "title": "CME Rulebook Chapter348: Micro Bitcoin Futures",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21访问规则",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/rulebook/CME/III/300/348.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "常规合约核心及最终结算；不采用BTIC变式",
        "scope": "0.1BTC、正常tick与BRR现金结算.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "0.1BTC、正常tick与BRR现金结算.",
      "limits": "并不交付现货BTC；实际现货退出可偏离BRR；无当前保证金."
    },
    {
      "source_id": "PI-CME-CRYPTO-FAQ",
      "title": "Frequently Asked Questions: Cryptocurrency Futures",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21访问版本",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "单位、交易时钟、维护、清算日及最终BRR相关完整问答",
        "scope": "交易时间与清算业务日不同.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "交易时间与清算业务日不同.",
      "limits": "不直接推导客户及时可用资金；不混淆MBT与BFF."
    },
    {
      "source_id": "MOD-CRYPTO-CARRY",
      "title": "Crypto Carry",
      "authors": [
        "Maik Schmeling",
        "Andreas Schrimpf",
        "Karamfil Todorov"
      ],
      "version": "BIS WP1087 Apr2023；manuscript2023-03-24",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.1–2.2；§3.3资金实施完整单元",
        "scope": "基差、资金分割与carry实施约束.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "基差、资金分割与carry实施约束.",
      "limits": "历史统计分母不等于本站1BTC账户；不沿p18简化文字把名义额当建仓现金."
    },
    {
      "source_id": "MD-S05",
      "title": "Money Calculations for CME-cleared Futures and Options",
      "authors": [
        "CME Group"
      ],
      "version": "2015-06-11",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "pp1–3普通期货变动现金完整单元",
        "scope": "逐日价格变动、乘数、现金与结算口径.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "逐日价格变动、乘数、现金与结算口径.",
      "limits": "清算层计算不等于某客户的资金时点与house margin."
    },
    {
      "source_id": "MA-FSB",
      "title": "Liquidity Preparedness for Margin and Collateral Calls: Final Report",
      "authors": [
        "Financial Stability Board"
      ],
      "version": "2024-12-10",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fsb.org/uploads/P101224-1.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§3.3 printed pp18–20 / PDF pp22–24，Recommendations6–8",
        "scope": "抵押品资格、占用、haircut、币种、地点与及时到账.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "抵押品资格、占用、haircut、币种、地点与及时到账.",
      "limits": "政策建议，不是统一现金比例或券商保证金承诺."
    },
    {
      "source_id": "PI-BYBIT-FEE",
      "title": "Funding Fee Calculation",
      "authors": [
        "Bybit"
      ],
      "version": "页面2026-05-12版本",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Funding-fee-calculation",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "What/When/How Deducted；USDT Perpetual Contracts完整单元",
        "scope": "持仓×标记价×费率、付款方向、时间资格与可用余额.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "持仓×标记价×费率、付款方向、时间资格与可用余额.",
      "limits": "线性和反向公式不同；未给维护要求就不模拟强平."
    },
    {
      "source_id": "MOD-BYBIT-FUNDING",
      "title": "Introduction to Funding Rate",
      "authors": [
        "Bybit"
      ],
      "version": "页面2026-05-22版本",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "完整公式、premium averaging、interest及频率/限幅说明",
        "scope": "交易所funding系数的规则，频率可变.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "交易所funding系数的规则，频率可变.",
      "limits": "不读取或采用即时费率，不把8小时固定给所有交易对."
    },
    {
      "source_id": "MOD-BYBIT-PNL",
      "title": "FAQ — Profit and Loss Calculation",
      "authors": [
        "Bybit"
      ],
      "version": "页面2026-08-12版本",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "线性P&L、mark/last、费用/funding、ROI分母相应完整问答",
        "scope": "线性USDT价格盈亏和完整成本口径.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "线性USDT价格盈亏和完整成本口径.",
      "limits": "保证金ROI不等于全部投入资本收益."
    },
    {
      "source_id": "MOD-PERP-PAPER",
      "title": "Perpetual Futures Pricing",
      "authors": [
        "Damien Ackerer",
        "Julien Hugonnier",
        "Urban Jermann"
      ],
      "version": "arXiv2310.11771v2，2024-09-04",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2310.11771v2",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2–3；p8式(6)，p12符号段",
        "scope": "线性永续价格变化与资金费现金流的模型对象.",
        "purpose": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
      },
      "supports": "线性永续价格变化与资金费现金流的模型对象.",
      "limits": "p12 below-spot/contango文字与关系式有冲突，不采用这些口头标签；未核附录定理."
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_inputs": [
      {
        "id": "SIM-PL-MBT-CARRY-01",
        "owner": "P32",
        "consumers": [
          "P32"
        ],
        "version": "final-20260921",
        "unit": {
          "money": "USD",
          "asset": "BTC",
          "futures": "MBT"
        },
        "identity": "Teaching dated-futures carry; real MBT unit/BRR settlement, synthetic path/margins/loan.",
        "defaults": {
          "quantity_btc": 1,
          "contract_btc": 0.1,
          "contracts_short": 10,
          "own_cash": 36000,
          "loan_principal": 30000,
          "loan_apr": 0.08,
          "spot_entry": 50000,
          "futures_entry": 51500,
          "initial_margin": 12000,
          "maintenance_margin": 10000
        },
        "default_results": {
          "initial_free_cash": 3955,
          "stress_margin_gap": 2545,
          "forced_exit_net": -1657.2534246575342,
          "survive_net": 1161.7647260273973,
          "max_committed_own": 38545,
          "net_over_initial": 0.03227124238964992,
          "net_over_max_committed": 0.030140478039366904
        },
        "branch_boundaries": {
          "ratios": "Capital-efficiency descriptors, not TWR/MWR/annualized.",
          "spot_transfer": "No deadline rescue unless branch explicitly permits transfer.",
          "settlement": "BRR cash settlement differs from spot sale."
        }
      },
      {
        "id": "SIM-PL-LINEAR-PERP-01",
        "owner": "P32",
        "consumers": [
          "P32"
        ],
        "version": "final-20260921",
        "unit": {
          "money": "USDT",
          "asset": "BTC",
          "funding_rate": "decimal/event"
        },
        "identity": "Teaching linear-USDT perpetual branch; exchange funding mechanics real, path/rates/fees synthetic.",
        "defaults": {
          "quantity_btc": 1,
          "spot_entry": 50000,
          "spot_exit": 51000,
          "perp_entry": 50200,
          "perp_exit": 51100,
          "funding_marks": [
            50000,
            52000,
            51000
          ],
          "funding_rates": [
            0.0001,
            -0.0002,
            0.00015
          ],
          "own_cash": 66000
        },
        "default_results": {
          "short_funding_cash": [
            5,
            -10.4,
            7.65
          ],
          "net_funding": 2.25,
          "spot_pnl": 1000,
          "perp_pnl": -900,
          "fees": 70.76,
          "net_pnl": 31.49,
          "net_over_initial_not_annualized": 0.00047712121212121204
        },
        "annualization_exercise": {
          "assumed_interval_hours": 8,
          "events_per_365_day_year": 1095,
          "formula": "(24/8)*365",
          "single_event_rate": 0.0001,
          "simple_annualized_math_only": 0.1095,
          "display": "10.95%",
          "warning": "Not locked/expected/net return; interval, rate, mark notional, eligibility and fees change."
        },
        "branch_boundaries": {
          "currency": "Keep separate from CME USD branch.",
          "interval": "Bybit says pairs may differ and settlement frequency can change dynamically."
        }
      }
    ],
    "operational_details": {
      "mbt": {
        "own_cash": 36000,
        "loan": 30000,
        "loan_rate": 0.08,
        "contract_btc": 0.1,
        "quantity": 1,
        "spot_entry": 50000,
        "futures": [
          51500,
          54500,
          56000,
          52000
        ],
        "spot_stress": 53000,
        "spot_final": 51950,
        "initial_margin": 12000,
        "maintenance": 10000,
        "revised_initial": 14000,
        "revised_maintenance": 12000,
        "spot_fee": 0.0005,
        "futures_fee_each_side": 2,
        "stress_day": 10,
        "final_day": 30,
        "cash_cannot_transfer_before_deadline": true
      },
      "perp": {
        "unit": "USDT",
        "own_cash": 66000,
        "quantity": 1,
        "spot_entry": 50000,
        "spot_exit": 51000,
        "perp_entry": 50200,
        "perp_exit": 51100,
        "funding_marks": [
          50000,
          52000,
          51000
        ],
        "funding_rates": [
          0.0001,
          -0.0002,
          0.00015
        ],
        "spot_fee": 0.0005,
        "perp_fee": 0.0002,
        "initial_margin": 12000,
        "maintenance_schedule": null,
        "financing_cost": 0
      }
    },
    "static_default_result": {
      "id": "SIM-PL-MBT-CARRY-01",
      "unit": "USD",
      "survive": false,
      "unfunded_gap": 2545,
      "stockPnl": 3000,
      "futPnl": -4500,
      "gross": -1500,
      "fees": 91.5,
      "interest": 65.75342465753425,
      "net": -1657.2534246575342,
      "ending": 34342.74657534246,
      "used_extra_own": 0,
      "max_committed_own": 36000,
      "ratio_initial": -0.04603481735159817,
      "ratio_committed": -0.04603481735159817,
      "days": 10,
      "contract_count": 10,
      "note": "借款本金与保证金释放不重复计作损益."
    },
    "attachments": [
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/mbt-event-ledgers.csv",
        "branch": "core",
        "sha256": "e974c190381f01f658e5d5195a307ca39be487312d7199047ff79437c93c1637",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      },
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/linear-perp-event-ledger.csv",
        "branch": "core",
        "sha256": "d4d267c51b814d59380a2d00842b33f2cb9cc37c45f4d13b15f9ffca9a9a450b",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      }
    ],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "SIM-PL-MBT-CARRY-01": "core",
      "SIM-PL-LINEAR-PERP-01": "core"
    },
    "operational_scopes": {
      "mbt": "core",
      "perp": "core"
    },
    "frozen_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json",
    "reproduction_data_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/runtime-inputs.json"
  },
  "source_id_aliases": {
    "PE-CME-MES": "MA-MES",
    "MP-CME-GRAIN": "MP-CME-GRAIN",
    "PI-CME-CORN": "PI-CME-CORN",
    "MP-CME-3Y": "MP-CME-3Y",
    "MP-CME-TREAS": "MP-CME-TREAS",
    "MD-S05": "MD-S05",
    "MD-S08": "MD-S08",
    "PE-FSB-MARGIN": "MA-FSB",
    "PI-CME-EUR": "PI-CME-EUR",
    "PI-MIT-CAPM03": "PI-MIT-CAPM03",
    "PI-MIT-CAPM08": "P-R04b",
    "PI-FRENCH-FACTORS": "PI-FRENCH-FACTORS",
    "QTDE-FRENCH": "QTC-FRENCH30",
    "QTDE-FRENCH-REGIME": "QTC-FRENCH",
    "PI-GIPS20": "P-R03",
    "MEFG-CHICAGOFED-2025": "PFH-CHIFED2025",
    "QTDE-TSCV": "QS02-5.10",
    "QGHI-MIT-BS13": "QGHI-MIT-BS13",
    "MD-S01": "MD-S01",
    "MOD-CRYPTO-CARRY": "MOD-CRYPTO-CARRY",
    "MOD-PERP-PAPER": "MOD-PERP-PAPER",
    "MOD-BYBIT-FUNDING": "MOD-BYBIT-FUNDING",
    "PI-BYBIT-FEE": "PI-BYBIT-FEE",
    "MOD-BYBIT-PNL": "MOD-BYBIT-PNL",
    "PI-CME-MBT": "PI-CME-MBT",
    "PI-CME-CRYPTO-FAQ": "PI-CME-CRYPTO-FAQ",
    "MOD-LVR": "MOD-LVR",
    "MOD-UNISWAP-V3": "MOD-UNISWAP-V3"
  },
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
基差交易同时包含现货损益、期货结算、保证金与融资现金. 以下分别计算美元计价MBT到期安排和USDT线性永续安排. 合约单位、结算及funding/P&L采用引用规则，价格、费用、保证金和借款为教学输入.

<a id="p32-dated"></a>
## 基差与退出尾差

先持有1 BTC现货，同时卖出覆盖1 BTC的期货. CME Micro Bitcoin Futures每张对应0.1 BTC，因此需要空10张；它按指定BRR参考价格现金结算，不把另一个账户的BTC拿来实物交割. [^mbt32]

令现货买入价为 $S_0$，期货卖出价为 $F_0$. 期末现货实际卖价为 $S_T$，期货最终结算参考价为 $F_T$. 数量均为1 BTC，暂不计费用，则

$$
\begin{aligned}
\Pi_{\rm gross}
&=(S_T-S_0)+(F_0-F_T)\\
&=(F_0-S_0)+(S_T-F_T).
\end{aligned}
$$

毛收益为建仓基差加退出尾差. 数量、时点、可执行现货价和结算参考价对齐时，尾差为零；异地现货退出会留下差额.

设 $S_0=50{,}000$、$F_0=51{,}500$，第30天期货结算52,000、现货卖价51,950，则毛收益 $1{,}500-50=1{,}450$. 市场分割和融资约束会影响这种安排的可实施性.[^bis32]

期货建仓按保证金和费用记现金，名义额51,500用于计量价格敞口. 随后按结算价格变动支付或收取VM.

<a id="p32-funding"></a>
## 保证金现金缺口

我们有自有现金36,000，另借30,000，借款单利年息8%. 合计66,000中，50,000用于现货，12,000转入期货保证金. 现货开仓费用为5个基点，即25；期货每张每边2美元，开仓20. 因此自由现金只有

$$66{,}000-50{,}000-12{,}000-25-20=3{,}955.$$

保证金保留为资产，借款30,000记负债. 另设现货位于其他账户，出售、结算及转入无法赶上期货补款截止.

期货由51,500升至54,500、56,000. 初始和维持要求从12,000/10,000在第二压力点升为14,000/12,000.

| 事件 | 期货现金变化 | 补款前保证金 | 应补至初始要求 | 可用自由现金 | 结果 |
|---|---:|---:|---:|---:|---|
| 建仓 | 0 | 12,000 | 0 | 3,955 | 仓位建立 |
| 期货54,500 | −3,000 | 9,000 | 3,000 | 3,955 | 补足后剩955 |
| 期货56,000，要求提高 | −1,500 | 10,500 | 3,500 | 955 | 缺2,545 |

第二压力点保证金10,500高于旧维持线10,000，却低于新线12,000，因此触发补款至14,000. 价格损益与保证金模型变动分别造成资金需求.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-a.svg" alt="期货账户在两个压力点的余额、应补款和可用现金. 现货账户不与之自动净额结算. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">美元carry的过程资金</p><p class="pfh-figure-note">第二压力点要求提高；现货不能及时转入</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>补款前保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>当时自由现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="2 5"/></svg><span>目标初始保证金</span></li></ul><p class="pfh-axis-label">美元；应补款分别0、3,000、3,500</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-610.4</span><span style="top:75.0%">3,433.55</span><span style="top:50.0%">7,477.5</span><span style="top:25.00000000000001%">11,521.45</span><span style="top:0.0%">15,565.4</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000003" x2="765" y2="165.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,202.41 765.00,180.16" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,277.26 430.00,277.26 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,157.90 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="202.41069993447002" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="180.15523188961288" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">初始</span><span class="" style="left:50.0%">F54,500</span><span class="last" style="left:100.0%">F56,000</span></div></div></div></figure>

此时现货价53,000，账面盈利3,000；跨账户转账时限使其无法支付当前缺口.

<a id="p32-exit"></a>
## 退出与融资路径

无追加资金分支设在第10天以现货53,000、期货56,000关闭两腿.

现货赚3,000、期货亏4,500，毛亏1,500. 双边费用 $25+20+26.5+20=91.5$，借款利息 $30{,}000\times8\%\times10/365\approx65.753$. 净损失为

$$-1{,}500-91.5-65.753\approx-1{,}657.253\text{ USD}.$$

及时追加2,545自有资金，与原955补足3,500，保证金恢复14,000. 期货随后由56,000降至52,000，空头获4,000，保证金增至18,000，再结算两腿. 追加款记外部本金.

| 项目 | 第10天退出 | 追加后第30天退出 |
|---|---:|---:|
| 现货损益 | +3,000 | +1,950 |
| 期货损益 | −4,500 | −500 |
| 两腿毛损益 | −1,500 | +1,450 |
| 全部交易费 | −91.500 | −90.975 |
| 借款利息 | −65.753 | −197.26 |
| 净损益 | **−1,657.253** | **+1,161.765** |
| 累计投入自有本金 | 36,000 | 38,545 |
| 偿清贷款后现金 | 34,342.747 | 39,706.765 |

贷款本金在终点现金偿还，同时消灭负债；损益只计利息与交易结果. 保证金释放为资产内部转移.

存续分支净收益除原始自有资金约为3.227%，除最大累计投入38,545约为3.014%. 两个比率对应不同资本分母；若要计算TWR或MWR，应把2,545的实际追加日期纳入日期现金表.

减少数量会降低资金需求并保留部分敞口，事先授信会增加可用资金及融资成本. 比较时固定风险目标，核对交易、清算及客户到账日期.[^cash32]

<a id="p32-perpetual"></a>
## 永续资金费

现在换到独立的USDT账户：自有66,000 USDT，买1 BTC现货50,000，卖1 BTC线性永续50,200. 退出时现货51,000，永续51,100. 因此两腿价格损益为 $1{,}000-900=100$ USDT.

永续没有本例那样预先给定的最终到期收敛日. 线性合约的每次资金费以持仓数量、该次标记价和资金费率计算；正费率由多头付给空头，负费率反过来. [^bybit32] 本例空头跨三个给定资金事件，记录如下：

| 资金事件 | 标记价，USDT/BTC | 每次费率 | 空头现金 |
|---|---:|---:|---:|
| 1 | 50,000 | +0.01% | +5.00 |
| 2 | 52,000 | −0.02% | −10.40 |
| 3 | 51,000 | +0.015% | +7.65 |
| 合计 | — | 不把费率直接相加代替金额 | **+2.25** |

保证金12,000，现货开仓费25、永续开仓费 $50{,}200\times0.02\%=10.04$，自由现金3,964.96. 三次funding后分别为3,969.96、3,959.56、3,967.21；强平判断还需逐点维持保证金规则.

现货双边费50.50，永续双边费20.26，总费70.76. 完整结果为

$$\Pi=1{,}000-900+2.25-70.76=31.49\text{ USDT}.$$

本路径价格损益100加资金费2.25，再扣70.76费用，净得31.49 USDT. 该计算采用线性USDT合约；反向合约需改用对应的数量和计价公式.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-b.svg" alt="独立USDT账户的funding现金与净收益分解. 正funding收入不等于整个安排盈利. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">USDT永续：funding并非全部收益</p><p class="pfh-figure-note">独立币种账户；总费用70.76 USDT</p><p class="pfh-axis-label">单位：USDT</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件1</span><div class="pfh-cash-reading"><strong>5</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:15.878056525881231%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件2</span><div class="pfh-cash-reading"><strong>-10.4</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.02635757383297%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件3</span><div class="pfh-cash-reading"><strong>7.65</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:24.29342648459829%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">funding合计</span><div class="pfh-cash-reading"><strong>2.25</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.145125436646555%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净所得</span><div class="pfh-cash-reading"><strong>31.49</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

线性永续的多头现金由价格变动扣funding项构成，实际费率、持仓资格、结算频率及扣款由交易所规则确定.[^perp32]

<a id="p32-lab"></a>
## 双账户实验

<div data-experiment-slot="EXP-P32-CARRY"></div>

美元分支比较无追加与及时追加2,545，分别列示损益、资本投入及最终现金. USDT分支逐次按标记价和费率计算空头收付.

每8小时0.01%按固定费率外推，全年 $3\times365=1{,}095$ 次，费率合计10.95%. 实际金额随费率、间隔、标记名义量及资格变化；Bybit各交易对间隔可不同，并可调整结算频率.[^bybit32]

<a id="p32-exercises"></a>
## 练习与解析

**解释题.** 第二压力点现货账面盈利3,000，为什么仍不能认定3,500应补款已解决？

自由现金955，尚缺2,545. 本例现货出售和转入赶不上截止，故账面盈利不能用于此次补款.

**迁移题.** 若期货仍按52,000结算，但现货实际只能卖51,900，存续分支净收益如何变化？

现货少收50，卖出费少0.025，净收益减少49.975至约1,111.79美元.

**辨认题.** 每次0.01%、每8小时一次，一年简单外推是多少，为什么它不是预期净回报？

固定条件下全年费率合计10.95%. 净回报另计价格腿、费用与融资，并按投入资本及现金日期计算.

[^mbt32]: [CME Rulebook Chapter348: Micro Bitcoin Futures](https://www.cmegroup.com/rulebook/CME/III/300/348.pdf)，常规合约单位及最终现金结算；[Cryptocurrency Futures FAQ](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html)，交易与清算时钟相关回答.
[^bis32]: Schmeling、Schrimpf、Todorov，[Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf)，BIS WP1087，2023，§2.1–2.2及§3.3；用于资金分割与实施条件.
[^cash32]: [CME Money Calculations for Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，普通期货VM单元；[FSB Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3.
[^bybit32]: [Bybit Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation)，2026-05-12版本，When Charged、How Deducted与USDT Perpetual单元；[Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate)及[P&L FAQ](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation)，相应线性公式.
[^perp32]: Ackerer、Hugonnier、Jermann，[Perpetual Futures Pricing](https://arxiv.org/pdf/2310.118v2)，固定v2，2024-09-04，§2–3及p8式(6). 原文p12口头符号标签与现金式方向存在冲突，本文按式(6)计算收付.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P32-CARRY",
    "node_id": "P32",
    "title": "基差与资金费率交易：先把资金账走完",
    "anchor": "p32-lab",
    "description": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求.",
    "inputs": {
      "frozen_ids": [
        "SIM-PL-MBT-CARRY-01",
        "SIM-PL-LINEAR-PERP-01"
      ],
      "operational_keys": [
        "mbt",
        "perp"
      ],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "分账户逐事件资金",
      "基差/funding/成本的净结果"
    ],
    "boundaries": [
      "真实规格不等于当前保证金或成交",
      "不得从终点补造未提供的资金路径",
      "输入无效即停止，不能沿用旧结果"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P32-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P32-b.svg"
      ],
      "body_tables": true,
      "event_data": [
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/mbt-event-ledgers.csv",
          "branch": "core",
          "sha256": "e974c190381f01f658e5d5195a307ca39be487312d7199047ff79437c93c1637",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        },
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/linear-perp-event-ledger.csv",
          "branch": "core",
          "sha256": "d4d267c51b814d59380a2d00842b33f2cb9cc37c45f4d13b15f9ffca9a9a450b",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        }
      ]
    },
    "input_controls": [
      {
        "key": "branch",
        "label": "币种/合约分支",
        "type": "select",
        "default": "dated",
        "options": [
          {
            "value": "dated",
            "label": "USD MBT"
          },
          {
            "value": "perp",
            "label": "USDT线性永续"
          }
        ]
      },
      {
        "key": "added",
        "label": "USD额外自有本金",
        "type": "selectnum",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "不追加"
          },
          {
            "value": 2545,
            "label": "及时追加2,545"
          }
        ]
      },
      {
        "key": "spotFinal",
        "label": "USD最终现货卖价（存续分支）",
        "type": "number",
        "default": 51950
      },
      {
        "key": "rate2",
        "label": "USDT第2次费率（小数）",
        "type": "number",
        "default": -0.0002
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [Liquidity Preparedness for Margin and Collateral Calls — Final Report](https://www.fsb.org/uploads/P101224-1.pdf): 流动性压力与准备的政策研究. Recommendations 6–8 讨论抵押品资格、占用、haircut、币种、地点、付款截止时间及操作准备.
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): CME逐日结算金额的计算：当日成交头寸按成交价至结算价计量，期初头寸按前结算价至本结算价计量，并按相应合约单位和舍入规则换算现金.
- [Introduction to Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate): Bybit资金费率由利息、加权溢价、两层clamp及相应限额规则形成；资金费频率按场所规则调整.
- [FAQ — Profit and Loss Calculation](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation): 线性与反向合约按各自单位计算价格损益，已实现结果计入相应费用. 固定头寸数量时，杠杆改变保证金和ROI分母，价格损益仍由头寸及价差决定.
- [Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf): 基差、资金分割与carry实施约束.
- [Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2): 永续合约的两币种现金账户、价格变化与资金费现金流，风险中性条件下的有限递推及反向合约的计价方向.
- [Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation): 资金费事件的持仓资格、付款方向和扣款顺序，以及线性与反向合约的金额计算. 文档说明结算时点前后约5秒的资格不确定性及触限后的频率调整.
- [Frequently Asked Questions: Cryptocurrency Futures](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html): 交易时间与清算业务日不同.
- [CME Rulebook Chapter348: Micro Bitcoin Futures](https://www.cmegroup.com/rulebook/CME/III/300/348.pdf): 0.1BTC、正常tick与BRR现金结算.

## Content relations
```json
[
  {
    "from": "zh-p32",
    "relation": "part_of",
    "to": "portfolio-futures",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p32",
    "relation": "requires",
    "to": "zh-p08",
    "required_competence": "能够识别受限资金、借款与外部投入.",
    "reason": "这项能力进入本篇主任务，而非推荐阅读顺序."
  },
  {
    "from": "zh-p32",
    "relation": "uses_method",
    "to": "zh-p23",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p32",
    "relation": "illustrated_by",
    "to": "p32-dated",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "zh-p32",
    "relation": "illustrated_by",
    "to": "p32-perpetual",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p32-dated",
    "relation": "supported_by",
    "to": "PI-CME-MBT",
    "reason": "0.1BTC、正常tick与BRR现金结算.",
    "locator": "常规合约核心及最终结算；不采用BTIC变式",
    "scope": "0.1BTC、正常tick与BRR现金结算."
  },
  {
    "from": "p32-exit",
    "relation": "supported_by",
    "to": "PI-CME-CRYPTO-FAQ",
    "reason": "交易时间与清算业务日不同.",
    "locator": "单位、交易时钟、维护、清算日及最终BRR相关完整问答",
    "scope": "交易时间与清算业务日不同."
  },
  {
    "from": "p32-dated",
    "relation": "supported_by",
    "to": "MOD-CRYPTO-CARRY",
    "reason": "基差、资金分割与carry实施约束.",
    "locator": "§2.1–2.2；§3.3资金实施完整单元",
    "scope": "基差、资金分割与carry实施约束."
  },
  {
    "from": "p32-funding",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "逐日价格变动、乘数、现金与结算口径.",
    "locator": "pp1–3普通期货变动现金完整单元",
    "scope": "逐日价格变动、乘数、现金与结算口径."
  },
  {
    "from": "p32-funding",
    "relation": "supported_by",
    "to": "MA-FSB",
    "reason": "抵押品资格、占用、haircut、币种、地点与及时到账.",
    "locator": "§3.3 printed pp18–20 / PDF pp22–24，Recommendations6–8",
    "scope": "抵押品资格、占用、haircut、币种、地点与及时到账."
  },
  {
    "from": "p32-perpetual",
    "relation": "supported_by",
    "to": "PI-BYBIT-FEE",
    "reason": "持仓×标记价×费率、付款方向、时间资格与可用余额.",
    "locator": "What/When/How Deducted；USDT Perpetual Contracts完整单元",
    "scope": "持仓×标记价×费率、付款方向、时间资格与可用余额."
  },
  {
    "from": "p32-lab",
    "relation": "supported_by",
    "to": "MOD-BYBIT-FUNDING",
    "reason": "交易所funding系数的规则，频率可变.",
    "locator": "完整公式、premium averaging、interest及频率/限幅说明",
    "scope": "交易所funding系数的规则，频率可变."
  },
  {
    "from": "p32-perpetual",
    "relation": "supported_by",
    "to": "MOD-BYBIT-PNL",
    "reason": "线性USDT价格盈亏和完整成本口径.",
    "locator": "线性P&L、mark/last、费用/funding、ROI分母相应完整问答",
    "scope": "线性USDT价格盈亏和完整成本口径."
  },
  {
    "from": "p32-perpetual",
    "relation": "supported_by",
    "to": "MOD-PERP-PAPER",
    "reason": "线性永续价格变化与资金费现金流的模型对象.",
    "locator": "§2–3；p8式(6)，p12符号段",
    "scope": "线性永续价格变化与资金费现金流的模型对象."
  },
  {
    "from": "p32-lab",
    "relation": "illustrated_by",
    "to": "EXP-P32-CARRY",
    "reason": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求."
  }
]
```

## Related entries
