# 基差与资金费率交易：先把资金账走完

分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求.

Entry: zh-p32 | Node: P32 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
请先实际读取本篇必读原件的指定完整单元，再围绕“分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求.”带我完成学习. 先让我自己判断方向、对象或基准，再让我逐步重建一项承重计算；不要先把答案全部说出. 选读分支只有我选中后才启用对应原件和输入. 每次解释都分清真实规则、教学假设、作者报告与本站复算. 逐事件核现金、负债、费用和剩余仓位；资金不足时停止已完成结果. 使用本包正文里的完整解析反馈我哪里错、为什么、如何迁移. 未来runtime_reading_log由你实际读取后填写，不能把作者或支持者日志当成自己的阅读. 不要接触账户或更新冻结数据.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p32",
  "learning_task": "分别走完美元MBT和USDT永续账，辨认终点carry与中途资金需求.",
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
  }
}
```

## Supplied entry
现货50,000、期货51,500，看起来像是把1,500放在桌上：买现货、卖期货，等到期就收钱. 我们先不争论它是否“套利”，而是把这个安排真正装进账户. 买现货要付钱，期货每天可能要补钱，借款要付息，两个账户之间的钱也未必能及时转移. 最后两腿相抵，只说明终点的一部分价格风险相抵，不能替我们完成这条资金路径.

这一篇先走美元计价的有到期期货，再换到USDT计价的线性永续. 二者是两个独立教学账，不能把两个净结果直接相加. 真实合约规格与规则有原文依据；下面的价格、费用、保证金和借款条件均为透明教学设定，不是当前报价、收益承诺或真实账户记录.

<a id="p32-dated"></a>
## 1. 到期基差收益怎样产生，又怎样留下尾差

先持有1 BTC现货，同时卖出覆盖1 BTC的期货. CME Micro Bitcoin Futures每张对应0.1 BTC，因此需要空10张；它按指定BRR参考价格现金结算，不把另一个账户的BTC拿来实物交割. [^mbt32]

令现货买入价为 $S_0$，期货卖出价为 $F_0$. 期末现货实际卖价为 $S_T$，期货最终结算参考价为 $F_T$. 数量均为1 BTC，暂不计费用，则

$$
\begin{aligned}
\Pi_{\rm gross}
&=(S_T-S_0)+(F_0-F_T)\\
&=(F_0-S_0)+(S_T-F_T).
\end{aligned}
$$

第一项是建立仓位时的基差；第二项是实际现货卖价与期货结算价之间仍留下的尾差. 只有在数量、退出时点、可执行价格和结算基准都按假设对齐时，才能进一步把第二项当成零. 现金结算本身并不保证你能在参考价卖掉另一场所的现货.

本例 $S_0=50{,}000$、$F_0=51{,}500$. 存续至第30天时，期货按52,000结算，现货实际卖价51,950. 于是毛收益为 $1{,}500-50=1{,}450$，不是1,500. BIS的carry研究提示我们关注市场分割与融资约束，但其历史组合统计与这里的一枚BTC账户不是同一个收益分母. [^bis32]

还有一个建仓细节：**卖出期货不等于在建仓时收到51,500现金**. 期货初始价值、保证金转移与逐日变动现金分别记录. 若把名义金额写进入金，一张本来需要融资的账户会凭空变得富裕.

<a id="p32-funding"></a>
## 2. 终点有利润，中途却可能先缺2,545

我们有自有现金36,000，另借30,000，借款单利年息8%. 合计66,000中，50,000用于现货，12,000转入期货保证金. 现货开仓费用为5个基点，即25；期货每张每边2美元，开仓20. 因此自由现金只有

$$66{,}000-50{,}000-12{,}000-25-20=3{,}955.$$

12,000保证金仍是资产，不是消费掉的费用；30,000借款同时是负债，不是投资收益. 为隔离资金问题，设现货在另一个账户，无法在保证金截止前卖出并转入.

期货从51,500先涨到54,500，再涨到56,000. 初始要求12,000、维持要求10,000；第二压力点要求提高至14,000／12,000. 所有这些要求是教学参数，不是券商现行保证金.

| 事件 | 期货现金变化 | 补款前保证金 | 应补至初始要求 | 可用自由现金 | 结果 |
|---|---:|---:|---:|---:|---|
| 建仓 | 0 | 12,000 | 0 | 3,955 | 仓位建立 |
| 期货54,500 | −3,000 | 9,000 | 3,000 | 3,955 | 补足后剩955 |
| 期货56,000，要求提高 | −1,500 | 10,500 | 3,500 | 955 | 缺2,545 |

读表时不要跳过“要求提高”这一列. 若仍用原维持线10,000，10,500不会触发同一个补款动作；模型IM变化和市场VM是两个不同原因. 资金准备要同时覆盖两者，而不是只看价格损失.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-a.svg" alt="期货账户在两个压力点的余额、应补款和可用现金. 现货账户不与之自动净额结算. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">美元carry的过程资金</p><p class="pfh-figure-note">第二压力点要求提高；现货不能及时转入</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>补款前保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>当时自由现金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="2 5"/></svg><span>目标初始保证金</span></li></ul><p class="pfh-axis-label">美元；应补款分别0、3,000、3,500</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-610.40</span><span style="top:75.0%">3,433.55</span><span style="top:50.0%">7,477.50</span><span style="top:25.00000000000001%">11,521.45</span><span style="top:0.0%">15,565.40</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000003" x2="765" y2="165.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,202.41 765.00,180.16" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,277.26 430.00,277.26 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><polyline points="95.00,157.90 430.00,157.90 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="202.41069993447002" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="180.15523188961288" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="277.26325745867285" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="157.89976384475574" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">初始</span><span class="" style="left:50.0%">F54,500</span><span class="last" style="left:100.0%">F56,000</span></div></div></div></figure>

此时现货价设为53,000，账面赚3,000. 经济上似乎足以覆盖缺口，操作上却来不及转移. 这正是为什么净资产为正和截止前可支付必须分开：我们不能拿一个尚未到账的变现假设完成今天的账户.

<a id="p32-exit"></a>
## 3. 被迫退出与活到终点，是两条不同路径

没有追加自有资金时，本例明确假设在第10天按现货53,000、期货56,000退出. 不能继续把后来期货回到52,000的收益记给已关闭仓位.

现货赚3,000，期货亏4,500，合计毛亏1,500. 两腿双边费用为 $25+20+26.50+20=91.50$；贷款利息为 $30{,}000\times8\%\times10/365=65.7534$. 净损失因此为

$$-1{,}500-91.50-65.7534=-1{,}657.2534\text{ 美元}.$$

另一分支是及时追加2,545自有资金. 这是外部本金，不是策略赚的钱. 它与原有955一同补足3,500，使保证金恢复14,000. 之后期货从56,000降至52,000，空头获得4,000，保证金变成18,000，再与现货退出一起结算.

| 项目 | 第10天退出 | 追加后第30天退出 |
|---|---:|---:|
| 现货损益 | +3,000 | +1,950 |
| 期货损益 | −4,500 | −500 |
| 两腿毛损益 | −1,500 | +1,450 |
| 全部交易费 | −91.500 | −90.975 |
| 借款利息 | −65.7534 | −197.2603 |
| 净损益 | **−1,657.2534** | **+1,161.7647** |
| 累计投入自有本金 | 36,000 | 38,545 |
| 偿清贷款后现金 | 34,342.7466 | 39,706.7647 |

贷款本金在最终现金中偿还，但不能又从净损益扣一次30,000，否则重复计算. 同理，保证金释放只是资产地点变化，不是额外利润.

存续分支的净收益除原始自有资金为3.2271%，除最大累计投入38,545为3.0140%. 这两个比率描述不同的资本占用，不是已经按追加日期处理的TWR或MWR，更不自动成为年化收益. 若要评价投资者实际经历，应把2,545的真实到账日期加入日期现金表再计算.

合理替代可以是减少数量、事先锁定可用授信、或不建立此安排. 它们改变的是资金需求、剩余基差或机会成本，不应只按这条已知路径的终值排名. 关于真实清算，成交时钟、清算业务日和客户到账仍要逐项核定. [^cash32]

<a id="p32-perpetual"></a>
## 4. 永续：价格变化之外，还有逐次funding现金

现在换到独立的USDT账户：自有66,000 USDT，买1 BTC现货50,000，卖1 BTC线性永续50,200. 退出时现货51,000，永续51,100. 因此两腿价格损益为 $1{,}000-900=100$ USDT.

永续没有本例那样预先给定的最终到期收敛日. 线性合约的每次资金费以持仓数量、该次标记价和资金费率计算；正费率由多头付给空头，负费率反过来. [^bybit32] 本例空头跨三个给定资金事件，记录如下：

| 资金事件 | 标记价，USDT/BTC | 每次费率 | 空头现金 |
|---|---:|---:|---:|
| 1 | 50,000 | +0.01% | +5.00 |
| 2 | 52,000 | −0.02% | −10.40 |
| 3 | 51,000 | +0.015% | +7.65 |
| 合计 | — | 不把费率直接相加代替金额 | **+2.25** |

以初始保证金12,000计，开仓现货费25、永续费 $50{,}200\times0.02\%=10.04$，自由现金3,964.96；三次funding后依次3,969.96、3,959.56、3,967.21. 这里没有提供逐点维持保证金条件，因而不能另画一条自称真实的强平线.

现货双边费50.50，永续双边费20.26，总费70.76. 完整结果为

$$\Pi=1{,}000-900+2.25-70.76=31.49\text{ USDT}.$$

少量价差和funding几乎被费用吃掉. 它说明检查费用很重要，不说明所有永续carry都只有这样的收益. 反向合约有不同的数量/计价公式，不能把这里的线性USDT公式直接移过去；也不能把31.49 USDT与前面的美元结果相加.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P32-b.svg" alt="独立USDT账户的funding现金与净收益分解. 正funding收入不等于整个安排盈利. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">USDT永续：funding并非全部收益</p><p class="pfh-figure-note">独立币种账户；总费用70.76 USDT</p><p class="pfh-axis-label">单位：USDT</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件1</span><div class="pfh-cash-reading"><strong>5.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:15.878056525881231%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件2</span><div class="pfh-cash-reading"><strong>-10.400</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:33.02635757383297%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">资金事件3</span><div class="pfh-cash-reading"><strong>7.650</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:24.29342648459829%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">funding合计</span><div class="pfh-cash-reading"><strong>2.250</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.145125436646555%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净所得</span><div class="pfh-cash-reading"><strong>31.490</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

定价论文把线性永续的多头现金写成价格变动减funding相关项，帮助我们看清合约对象；具体交易所则决定实际费率、时间与扣款程序.[^perp32] 模型中的已知系数不能替代未来实际费率. 原文p12的口头符号标签与现金式存在冲突时，方向以现金式为准.

<a id="p32-lab"></a>
## 5. 先检查能否继续，再看收益

<div data-experiment-slot="EXP-P32-CARRY"></div>

在美元分支，先保持“不追加”，推进到第二压力点，找到955与3,500之间的缺口. 再切换及时追加2,545，比较最后现金与净损益；注意本金变化列，而不是只盯利润. USDT分支单独显示三次funding，可以核对空头遇负费率时也要付款.

看到每8小时0.01%，最容易做的外推是 $(24/8)\times365=1{,}095$ 次，每年简单相加10.95%. 这个数学次数没有错；把它叫作“锁定净年化”才错. 未来费率可能反转，间隔会调整，标记名义量和持仓资格改变，且这一乘法没有扣任何费用、融资和退出差价. Bybit原文明确各交易对可以有不同间隔，并可调整结算频率. [^bybit32]

<a id="p32-exercises"></a>
## 6. 自测与解析

**解释题.** 第二压力点现货账面盈利3,000，为什么仍不能认定3,500应补款已解决？

本账户自由现金只有955；现货盈利要通过出售、结算与跨账户转入才能成为及时现金. 题目已设这些动作赶不上截止，因此仍缺2,545. 净资产足够与流动性可用不是同一个判断.

**迁移题.** 若期货仍按52,000结算，但现货实际只能卖51,900，存续分支净收益如何变化？

毛损益再减少50. 现货卖出费由25.975降至25.950，节省0.025，其他条件不变，所以净收益减少49.975，变为1,111.7897美元. 这是实际退出尾差的影响；不能因为期货结算已确定就忽略它.

**辨认题.** 每次0.01%、每8小时一次，一年简单外推是多少，为什么它不是预期净回报？

次数为1,095，简单外推10.95%. 只有在费率、间隔、名义本金和资格全固定时，这个算式才描述全年资金费；净回报还需加价格腿、减费用和融资，并用合适的投入资本/日期现金评价. 现实规则不提供这些条件的锁定承诺.

**完成标准.** 能独立写出两腿和每个账户的现金，先判第二次补款可行性，再解释终值、外部投入与资本分母；永续部分能逐次算funding并保持USD与USDT分账.

[^mbt32]: [CME Rulebook Chapter348: Micro Bitcoin Futures](https://www.cmegroup.com/rulebook/CME/III/300/348.pdf)，常规合约单位及最终现金结算；[Cryptocurrency Futures FAQ](https://www.cmegroup.com/articles/faqs/frequently-asked-questions-cryptocurrency-futures.html)，交易与清算时钟相关回答. 本例保证金另由教学设定.
[^bis32]: Schmeling、Schrimpf、Todorov，[Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf)，BIS WP1087，2023，§2.1–2.2及§3.3；用于资金分割与实施条件.
[^cash32]: [CME Money Calculations for Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，普通期货VM单元；[FSB Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3.
[^bybit32]: [Bybit Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation)，2026-05-12版本，When Charged、How Deducted与USDT Perpetual单元；[Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate)及[P&L FAQ](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation)，相应线性公式. 这里引用扣款时点与公式，即时费率和费率档位不作为输入.
[^perp32]: Ackerer、Hugonnier、Jermann，[Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2)，固定v2，2024-09-04，§2–3及p8式(6)；用于模型现金关系，交易所实时程序另以实际规则为准.

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
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): 当日成交与期初头寸的结算现金及正常舍入；不采用无关分数报价例的印刷错误，不提供CL保证金水平.

本批读取范围：逐日价格变动、乘数、现金与结算口径.
- [Introduction to Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate): 资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同.

本批读取范围：交易所funding系数的规则，频率可变.
- [FAQ — Profit and Loss Calculation](https://www.bybit.com/en/help-center/article/FAQ-Profit-Loss-Calculation): 合约规定的价格P&L与币种，杠杆并非固定size价格损益的乘数.

本批读取范围：线性USDT价格盈亏和完整成本口径.
- [Crypto Carry](https://www.bis.org/publications/working-paper-1087-crypto-carry.pdf): 基差、资金分割与carry实施约束.
- [Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2): 两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.

本批读取范围：线性永续价格变化与资金费现金流的模型对象.
- [Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation): 事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.

本批读取范围：持仓×标记价×费率、付款方向、时间资格与可用余额.
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
