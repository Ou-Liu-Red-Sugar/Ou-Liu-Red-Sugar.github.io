# 一次衍生品安排的完整复盘

衍生品复盘应按当时可见的信息重建目标、仓位、资金约束、动作和结果. 下面沿用P23的玉米采购账，把对冲方向、执行、融资条件与终点归因分别记录，并在同一事前约束下比较替代路径.

Entry: zh-p24 | Node: P24 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的指定完整单元，所选可选分支再读 optional_readings，记录题名、版本、定位及支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 复用P23玉米账，按各时点可得信息核对原计划、动作、剩余头寸和采购结果. 比较同价路径下的融资反事实，区分采购成本、资产转账与净财富；选读时重建欧元应收款及美元补款. 先用完整推理任务诊断，再让读者计算和解释；已掌握步骤直接跳过. 根据错误反馈，用迁移条件检验理解. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p24",
  "learning_task": "复用P23玉米账，按各时点可得信息核对原计划、动作、剩余头寸和采购结果. 比较同价路径下的融资反事实，区分采购成本、资产转账与净财富；选读时重建欧元应收款及美元补款.",
  "required_readings": [
    {
      "source_id": "MP-CME-GRAIN",
      "title": "Self-Study Guide to Hedging with Grain and Oilseed Futures and Options",
      "authors": [
        "CME Group"
      ],
      "version": "归档教学指南，2026-09-21读取",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "ch2 printed pp9–14 / PDF pp11–16；ch3 printed pp17–22 / PDF pp19–24；margin pp6–7",
        "scope": "采购与销售方向、价量原例及当地基差.",
        "purpose": "按当时信息区分对冲方向、执行与资金计划，公平比较同一采购账的替代路径."
      },
      "supports": "采购与销售方向、价量原例及当地基差.",
      "limits": "公开教学例非企业实盘；p21上涨情景+.10应为+.05，p22−.02不为gain."
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
        "purpose": "按当时信息区分对冲方向、执行与资金计划，公平比较同一采购账的替代路径."
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
        "purpose": "按当时信息区分对冲方向、执行与资金计划，公平比较同一采购账的替代路径."
      },
      "supports": "抵押品资格、占用、haircut、币种、地点与及时到账.",
      "limits": "政策建议，不是统一现金比例或券商保证金承诺."
    }
  ],
  "optional_readings": [
    {
      "source_id": "PI-CME-EUR",
      "title": "CME Rulebook Chapter261: EUR/USD Futures",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21访问规则",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/rulebook/CME/III/250/261/261.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§26101–26102，常规合约与实物交割",
        "scope": "125,000欧元、报价单位与到期前平仓的合约背景.",
        "purpose": "选择欧元应收迁移时"
      },
      "supports": "125,000欧元、报价单位与到期前平仓的合约背景.",
      "limits": "选读应收款与行情是假设；不把实物交割写成现金结算.",
      "branch": "eur",
      "required_if_selected": true
    },
    {
      "source_id": "P-R03",
      "title": "2020 GIPS Standards Handbook for Firms",
      "authors": [
        "CFA Institute"
      ],
      "version": "2020标准及官方在线手册",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "1.A.35；2.A.23–24；2.A.29；2.A.30；2.B.4",
        "scope": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
        "purpose": "进一步讨论回报评价口径时"
      },
      "supports": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
      "limits": "教学采用，不宣称全套GIPS合规；2.B.4是建议，不改称强制.",
      "branch": "evaluation",
      "required_if_selected": true
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_inputs": [
      {
        "id": "CME-GRAIN-TEACHING",
        "owner": "P21",
        "consumers": [
          "P21",
          "P23",
          "P24"
        ],
        "version": "final-20260921",
        "unit": {
          "price": "USD/bushel",
          "quantity": "bushels",
          "contract": "5000 bushels"
        },
        "identity": "CME teaching illustration plus current corn contract identity; not an enterprise execution.",
        "defaults": {
          "procurement": {
            "quantity": 15000,
            "initial_futures": 5.75,
            "contracts_long": 3,
            "outcomes": [
              {
                "futures": 6.25,
                "cash": 6.2,
                "futures_pnl": 7500,
                "effective_unit_price": 5.7
              },
              {
                "futures": 5.45,
                "cash": 5.45,
                "futures_pnl": -4500,
                "effective_unit_price": 5.75
              },
              {
                "futures": 6.03,
                "cash": 6.1,
                "futures_pnl": 4200,
                "effective_unit_price": 5.82
              }
            ]
          },
          "sales": {
            "quantity": 20000,
            "initial_futures": 5.7,
            "contracts_short": 4,
            "production_cost": 5.1,
            "outcomes": [
              {
                "futures": 5.2,
                "cash": 5.05,
                "futures_pnl": 10000,
                "effective_unit_price": 5.55,
                "business_profit": 9000
              },
              {
                "futures": 5.9,
                "cash": 5.7,
                "futures_pnl": -4000,
                "effective_unit_price": 5.5,
                "business_profit": 8000
              },
              {
                "futures": 5.37,
                "cash": 5.1,
                "futures_pnl": 6600,
                "effective_unit_price": 5.43,
                "business_profit": 6600
              }
            ]
          }
        },
        "source_corrections": [
          "printed p21: basis -0.25→-0.20 is +0.05, not +0.10",
          "printed p22: basis -0.25→-0.27 is -0.02, not a gain"
        ],
        "branch_boundaries": {
          "quantity_mismatch": "Show uncovered/excess futures exposure.",
          "quality_location": "Contract unit does not eliminate local basis."
        }
      },
      {
        "id": "SIM-PJ-CORN-CASH-01",
        "owner": "P23",
        "consumers": [
          "P23",
          "P24"
        ],
        "version": "final-20260921",
        "unit": {
          "money": "USD",
          "quantity": "bushels",
          "price": "USD/bushel"
        },
        "identity": "Single shared corn procurement funding ledger for P23/P24.",
        "defaults": {
          "initial_own_cash": 106000,
          "unavailable_until_procurement": 90000,
          "current_liquid": 16000,
          "initial_margin_per_contract": 3000,
          "maintenance_per_contract": 2000,
          "futures_path": [
            5.75,
            5.45,
            5.1,
            6.25
          ],
          "procurement_quantity": 15000,
          "terminal_cash_price": 6.2
        },
        "default_results": {
          "three_contracts_no_credit": {
            "unfunded_gap_step2": 2750,
            "close_price": 5.1,
            "futures_pnl": -9750,
            "ending_own_cash": 3250,
            "effective_purchase_cost": 102750
          },
          "two_contracts": {
            "futures_pnl": 5000,
            "ending_own_cash": 18000,
            "effective_purchase_cost": 88000
          },
          "three_contracts_credit": {
            "limit": 3000,
            "draw": 2750,
            "interest": 7.534246575342481,
            "ending_own_cash": 20492.46575342465,
            "effective_purchase_cost": 85507.53424657535
          },
          "unhedged": {
            "ending_own_cash": 13000,
            "effective_purchase_cost": 93000
          }
        },
        "branch_boundaries": {
          "P23": "Stop ledger when deadline funding fails.",
          "P24": "Same ledger; later rebound is not earned after close.",
          "credit_2000": "Still short by 750 at step2."
        }
      },
      {
        "id": "SIM-PJ-EUR-RECEIVABLE-01",
        "owner": "P24",
        "consumers": [
          "P24"
        ],
        "version": "optional-final-20260921",
        "status": "optional_migration_branch",
        "unit": {
          "receivable": "EUR",
          "money": "USD",
          "price": "USD/EUR"
        },
        "identity": "Optional FX migration exercise, not a disclosed corporate hedge.",
        "defaults": {
          "receivable_eur": 1000000,
          "contract_eur": 125000,
          "short_contracts": 8,
          "initial_spot": 1.1,
          "final_spot": 1.08,
          "futures_path": [
            1.105,
            1.12,
            1.115,
            1.083
          ]
        },
        "default_results": {
          "hedge_net_pnl": 21968,
          "effective_receivable_usd": 1101968,
          "effective_rate": 1.101968,
          "initial_total_wealth": 1152000,
          "ending_total_wealth": 1153968,
          "unhedged_ending_total_wealth": 1132000
        },
        "branch_boundaries": {
          "mainline": false,
          "delivery": "Close before expiry; CME EUR/USD futures are physically deliverable."
        }
      }
    ],
    "operational_details": {
      "corn": {
        "initial_wealth": 106000,
        "restricted_until_purchase": 90000,
        "contract_size": 5000,
        "initial_margin": 3000,
        "maintenance_margin": 2000,
        "prices": [
          5.75,
          5.45,
          5.1,
          6.25
        ],
        "physical_quantity": 15000,
        "physical_price": 6.2,
        "loan_rate": 0.1,
        "loan_days": 10,
        "fees": 0,
        "close_rule": "If full call cannot be funded, close at the given teaching settlement before drawing a partial loan; no further futures position. Release remaining margin."
      },
      "eur": {
        "receivable_eur": 1000000,
        "spot_initial": 1.1,
        "spot_final": 1.08,
        "futures": [
          1.105,
          1.12,
          1.115,
          1.083
        ],
        "contract_eur": 125000,
        "initial_cash": 52000,
        "initial_margin": 32000,
        "maintenance": 24000,
        "fee_each_side": 2,
        "close_before_expiry": true
      }
    },
    "static_default_result": {
      "asof": 3,
      "effective_cost": 102750,
      "ending_cash": 3250,
      "shared_ledger_id": "SIM-PJ-CORN-CASH-01"
    },
    "attachments": [
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/corn-cash-event-ledgers.csv",
        "branch": "core",
        "sha256": "9b778996982247177134a974e89d4099ff90b28187ff670a232607609d53e68f",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      },
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/eur-event-ledger.csv",
        "branch": "eur",
        "sha256": "bdc34b87d8070928d071969d34c7595f5e01f6ef2d98eea90521bfa3fb4d8e82",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      }
    ],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "CME-GRAIN-TEACHING": "core",
      "SIM-PJ-CORN-CASH-01": "core",
      "SIM-PJ-EUR-RECEIVABLE-01": "eur"
    },
    "operational_scopes": {
      "corn": "core",
      "eur": "eur"
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
衍生品复盘应按当时可见的信息重建目标、仓位、资金约束、动作和结果. 下面沿用P23的玉米采购账，把对冲方向、执行、融资条件与终点归因分别记录，并在同一事前约束下比较替代路径.

<a id="p24-original"></a>
## 原始计划与信息时点

采购者预计未来购买15,000蒲式耳玉米并担心涨价，以5.75建立3张多头，对应15,000蒲式耳. 自有资金106,000，其中90,000的存款到采购日才可用，当前流动现金16,000. 每张初始/维持要求3,000/2,000，以及5.45、5.10、6.25的中途价格和显示价格平仓规则，均为本文教学路径参数；采购日当地现货价为6.20. [^grain24]

原计划包含价格方向与资金可行性两项判断：多头抵消采购价上涨，16,000流动现金负责维持头寸. 复盘保留初始采购量、资金和承诺额度，按这些已知条件评价后续动作.

D0记录采购批次、结束日、可接受基差、补款账户和停止条件. 采购取消或数量下降时，相应调整期货覆盖量.

<a id="p24-events"></a>
## 逐事件账户

按各时点已知信息、应补款和实际动作重建账户：

| 时点 | 此时刚知道什么 | VM | 应补/执行 | 期货余仓 | 可动自由现金 |
|---|---|---:|---|---:|---:|
| D0 | 采购量和初始资金 | 0 | 转入9,000初始保证金 | 3 | 7,000 |
| 第一次结算 | 期货5.45 | −4,500 | 实际补4,500 | 3 | 2,500 |
| 第二次结算 | 期货5.10 | −5,250 | 应补5,250但缺2,750；平仓返还3,750 | 0 | 6,250 |
| 采购日 | 期货6.25、现货6.20、存款解锁 | 0 | 总现金96,250中付93,000买货 | 0 | 3,250 |

第二次结算后持仓为零，因此最后一期VM为零. 90,000存款解锁及保证金转账改变资产位置，期货损益改变净财富，两类记录可据此勾稽.[^money24]

完整持有3张至终点的有效单价为5.7，未计融资成本；该路径要求跨过第二次追保. 比较此反事实时，将所需融资及成本一并加入.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P24-a.svg" alt="复盘信息集：每个时点只允许使用此前已知的信息，关闭之后不再领取未来VM. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">复盘沿当时信息推进</p><p class="pfh-figure-note">复用P23玉米采购路径</p><ol class="pfh-flow-steps"><li><strong>初始计划</strong><p>未来采购15,000蒲式耳；多3张</p><p>当前流动资金16,000，90,000尚受限</p></li><li><strong>第1压力点</strong><p>期货5.45；变动现金−4,500</p><p>补足后自由资金2,500</p></li><li><strong>第2压力点</strong><p>期货5.10；应补5,250</p><p>无授信，缺2,750 → 按教学价退出</p></li><li><strong>采购日</strong><p>现货6.20；支付93,000</p><p>期货已经关闭，不取得后段17,250反弹</p></li></ol></div></figure>

<a id="p24-attribution"></a>
## 结果归因

采购支出93,000减已实现期货损益−9,750，得到有效成本102,750；也等于自有资金106,000减剩余现金3,250.

原多头方向与采购涨价风险相配；价格先跌后涨，但现金缺口使持仓在5.1结束. 按给定成交价关闭后，有效成本高于不对冲的93,000. 资金缺口及处置价格共同解释9,750差额.

保持价格路径不变，预先承诺额度并借2,750使3张得以延续，期货损益由−9,750变为+7,500，另付利息约7.534. 两方案有效成本相差约17,242.466美元.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P24-b.svg" alt="同一采购的金额归因：终点现货价相同，仓位是否延续改变了实际期货结果. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">把方向、资金和终点拆开</p><p class="pfh-figure-note">实际教学关闭分支的有效采购成本</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">实物付款</span><div class="pfh-cash-reading"><strong>93,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:90.51094890510949%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货已实现损失</span><div class="pfh-cash-reading"><strong>9,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:9.48905109489051%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">有效采购成本</span><div class="pfh-cash-reading"><strong>102,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li></ul></div></figure>

<a id="p24-comparison"></a>
## 替代路径比较

四个方案都从106,000自有现金、同一采购量与同一采购日开始：3张无融资、2张、3张加承诺融资、不对冲. 2张方案成本88,000，留下三分之一数量未覆盖；承诺融资3张成本约85,507.534，增加信用依赖；不对冲成本93,000，保留共同价格风险.

替代方案按事前可接受的涨价风险、资金预算和融资条件比较. 当前路径给出逐方案结果，失败概率或平均成本另需路径分布. 外部新增自有资金按金额与时点计入资本和回报.

FSB关于抵押品的建议要求把融资承诺具体到资产资格、折扣、账户、币种及到达时点. [^fsb24] 因此融资分支应在事前写明可提款额度和操作条件；事后评价则使用当时可见证据与可行集合.

<div data-experiment-slot="EXP-P24-REVIEW"></div>

实验用时间视图重建事件账，用金额视图分解归因. 三张无额度、两张无融资与3,000额度三种分支分别改变存续能力、数量覆盖和信用依赖，比较时保持其余价格路径与采购条件一致.

<a id="p24-fx"></a>
## 欧元应收款对冲

欧元应收款变式：未来收到1M EUR，初始现汇1.1 USD/EUR，以8张CME EUR/USD期货空头覆盖. 合约每张125,000 EUR，到期实物交割，本例提前平仓. 设期货路径1.105、1.12、1.115、1.083，终点现汇1.08，初始与维持保证金总额32,000和24,000.[^eur24]

自有现金52,000，开仓费用16，转入保证金32,000，留下19,984. 第一次期货上涨0.015，空头VM−15,000，需要补15,000，自由现金降为4,984；后两次VM为+5,000、+32,000，不再补款. 累计VM22,000，双边费用32，净期货21,968.

收款后按1.08换得1,080,000，合并有效换汇所得1,101,968，折合约1.102美元/欧元；与最初期货1.105的差异来自终点现汇与期货−0.003的基差及交易费用. 总初始财富按应收初值1,100,000加现金52,000为1,152,000；最后1,153,968. 不对冲且保留相同现金，最后则为1,132,000.

该路径累计盈利前先需补15,000美元. 应收款延期或减少时，调整期货数量和退出日；补款安排同时核对欧元到账、换汇及美元转入时间.

<a id="p24-exercises"></a>
## 练习与解析

**解释题.** 3张玉米期货最终亏9,750，能否写“买入方向错了，应该卖出”？

采购价上涨是原始风险，多头方向与之对应. 本路径亏损来自先跌和被迫退出；改做空会在采购价上涨时增加损失. 复盘应将对冲方向与维持头寸的现金安排分别评价.

**迁移题.** 复盘者从106,000减去9,000初始保证金，再减9,750期货亏损和93,000采购，得到负5,750. 哪里重复了？

初始保证金转入与平仓返还已进入逐日账，再扣9,000会重复. 期末现金为 $106,000-9,750-93,000=3,250$.

[^grain24]: CME Group，[Grain and Oilseed Hedgers Guide](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch3采购与销售原例.
[^money24]: CME Group，[Money Calculations](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，pp1–3；账户转移与期货价格损益.
[^fsb24]: FSB，[Liquidity Preparedness](https://www.fsb.org/uploads/P101224-1.pdf)，§3.3 Recommendations 6–8：抵押资格、运营能力和可用性.
[^eur24]: CME，[EUR/USD Futures，Chapter 261](https://www.cmegroup.com/rulebook/CME/III/250/261/261.pdf)，§26101–26102：合约单位、报价、到期与实物交割规则.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P24-REVIEW",
    "node_id": "P24",
    "title": "一次衍生品安排的完整复盘",
    "anchor": "p24-comparison",
    "description": "按当时信息区分对冲方向、执行与资金计划，公平比较同一采购账的替代路径.",
    "inputs": {
      "frozen_ids": [
        "CME-GRAIN-TEACHING",
        "SIM-PJ-CORN-CASH-01",
        "SIM-PJ-EUR-RECEIVABLE-01"
      ],
      "operational_keys": [
        "corn",
        "eur"
      ],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "当时可知信息与仓位时间线",
      "原资产/衍生腿/资金的结果归因"
    ],
    "boundaries": [
      "主路径复用P23资金与处置规则",
      "外部流按时点另记；外汇变式到期前平仓"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P24-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P24-b.svg"
      ],
      "body_tables": true,
      "event_data": [
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/corn-cash-event-ledgers.csv",
          "branch": "core",
          "sha256": "9b778996982247177134a974e89d4099ff90b28187ff670a232607609d53e68f",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        },
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/eur-event-ledger.csv",
          "branch": "eur",
          "sha256": "bdc34b87d8070928d071969d34c7595f5e01f6ef2d98eea90521bfa3fb4d8e82",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        }
      ]
    },
    "input_controls": [
      {
        "key": "branch",
        "label": "复盘安排",
        "type": "select",
        "default": "three",
        "options": [
          {
            "value": "three",
            "label": "玉米3张无授信"
          },
          {
            "value": "two",
            "label": "玉米2张"
          },
          {
            "value": "loan",
            "label": "玉米3张＋承诺授信"
          },
          {
            "value": "none",
            "label": "玉米不对冲"
          },
          {
            "value": "eur",
            "label": "选读：EUR应收"
          }
        ]
      },
      {
        "key": "step",
        "label": "截至哪个时点",
        "type": "selectnum",
        "default": 3,
        "options": [
          {
            "value": 3,
            "label": "终点"
          },
          {
            "value": 0,
            "label": "初始"
          },
          {
            "value": 1,
            "label": "第1压力点"
          },
          {
            "value": 2,
            "label": "第2压力点"
          }
        ]
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [Liquidity Preparedness for Margin and Collateral Calls — Final Report](https://www.fsb.org/uploads/P101224-1.pdf): 流动性压力与准备的政策研究. Recommendations 6–8 讨论抵押品资格、占用、haircut、币种、地点、付款截止时间及操作准备.
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): CME逐日结算金额的计算：当日成交头寸按成交价至结算价计量，期初头寸按前结算价至本结算价计量，并按相应合约单位和舍入规则换算现金.
- [Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf): 采购与销售方向、价量原例及当地基差.
- [GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/): GIPS对外部现金流、时间加权回报、资金加权回报、费用处理以及费用应计与付款的规定.
- [CME Rulebook Chapter261: EUR/USD Futures](https://www.cmegroup.com/rulebook/CME/III/250/261/261.pdf): 125,000欧元、报价单位与到期前平仓的合约背景.

## Content relations
```json
[
  {
    "from": "zh-p24",
    "relation": "part_of",
    "to": "portfolio-implementation",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p24",
    "relation": "requires",
    "to": "zh-p23",
    "required_competence": "能够逐行重放同一玉米资金账.",
    "reason": "这项能力进入本篇主任务，而非推荐阅读顺序."
  },
  {
    "from": "zh-p24",
    "relation": "uses_method",
    "to": "zh-p09",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p24",
    "relation": "uses_method",
    "to": "zh-p12",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p24",
    "relation": "illustrated_by",
    "to": "p21-procurement",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "zh-p24",
    "relation": "illustrated_by",
    "to": "p23-setup",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "zh-p24",
    "relation": "illustrated_by",
    "to": "p24-fx",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p24-original",
    "relation": "supported_by",
    "to": "MP-CME-GRAIN",
    "reason": "采购与销售方向、价量原例及当地基差.",
    "locator": "ch2 printed pp9–14 / PDF pp11–16；ch3 printed pp17–22 / PDF pp19–24；margin pp6–7",
    "scope": "采购与销售方向、价量原例及当地基差."
  },
  {
    "from": "p24-events",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "逐日价格变动、乘数、现金与结算口径.",
    "locator": "pp1–3普通期货变动现金完整单元",
    "scope": "逐日价格变动、乘数、现金与结算口径."
  },
  {
    "from": "p24-comparison",
    "relation": "supported_by",
    "to": "MA-FSB",
    "reason": "抵押品资格、占用、haircut、币种、地点与及时到账.",
    "locator": "§3.3 printed pp18–20 / PDF pp22–24，Recommendations6–8",
    "scope": "抵押品资格、占用、haircut、币种、地点与及时到账."
  },
  {
    "from": "p24-fx",
    "relation": "supported_by",
    "to": "PI-CME-EUR",
    "reason": "125,000欧元、报价单位与到期前平仓的合约背景.",
    "locator": "§26101–26102，常规合约与实物交割",
    "scope": "125,000欧元、报价单位与到期前平仓的合约背景.",
    "branch": "eur"
  },
  {
    "from": "p24-attribution",
    "relation": "supported_by",
    "to": "P-R03",
    "reason": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
    "locator": "1.A.35；2.A.23–24；2.A.29；2.A.30；2.B.4",
    "scope": "外部现金流、TWR/MWR、净费用方法和费用应计/付款.",
    "branch": "evaluation"
  },
  {
    "from": "p24-comparison",
    "relation": "illustrated_by",
    "to": "EXP-P24-REVIEW",
    "reason": "按当时信息区分对冲方向、执行与资金计划，公平比较同一采购账的替代路径."
  }
]
```

## Related entries
