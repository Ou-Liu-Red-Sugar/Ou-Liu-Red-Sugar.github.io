# 保证金与对冲中的现金压力

中途现金决定期货对冲能否持有至采购日. 结算损益、保证金补款和及时可用资金共同决定每次继续或平仓；平仓后停止计入期货损益.

Entry: zh-p23 | Node: P23 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的指定完整单元，所选可选分支再读 optional_readings，记录题名、版本、定位及支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 从106,000自有资金的位置与日期出发，重建3张玉米期货每次结算、补款、缺口和平仓. 比较2张、承诺额度及不对冲，以额度2,000检验资金判断与动作顺序. 先用完整推理任务诊断，再让读者计算和解释；已掌握步骤直接跳过. 根据错误反馈，用迁移条件检验理解. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p23",
  "learning_task": "从106,000自有资金的位置与日期出发，重建3张玉米期货每次结算、补款、缺口和平仓. 比较2张、承诺额度及不对冲，以额度2,000检验资金判断与动作顺序.",
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
        "purpose": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓."
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
        "purpose": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓."
      },
      "supports": "逐日价格变动、乘数、现金与结算口径.",
      "limits": "清算层计算不等于某客户的资金时点与house margin."
    },
    {
      "source_id": "MD-S08",
      "title": "Market turbulence and soaring margins: lessons from two recent episodes",
      "authors": [
        "Benjamin H Cohen",
        "Kevin Tracol",
        "BIS"
      ],
      "version": "BIS Quarterly Review，2023-03",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Box A printed pp5–6，Graph A1及图注",
        "scope": "VM与模型IM在压力中共同变化；VM图为五日累计.",
        "purpose": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓."
      },
      "supports": "VM与模型IM在压力中共同变化；VM图为五日累计.",
      "limits": "非玉米真实账户；不复制Clarus未取得底层数据."
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
        "purpose": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓."
      },
      "supports": "抵押品资格、占用、haircut、币种、地点与及时到账.",
      "limits": "政策建议，不是统一现金比例或券商保证金承诺."
    }
  ],
  "optional_readings": [],
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
      }
    },
    "static_default_result": {
      "id": "SIM-PJ-CORN-CASH-01",
      "unit": "USD",
      "n": 3,
      "credit": 0,
      "status": "futures_closed_before_purchase",
      "stop": {
        "step": 2,
        "F": 5.1,
        "required": 5250.000000000008,
        "free": 2500.0000000000027,
        "credit_remaining": 0,
        "gap": 2750.0000000000055
      },
      "final": {
        "event": "采购、释放保证金并偿债",
        "margin": 0,
        "restricted": 0,
        "loan": 0,
        "free": 3250,
        "physical_payment": 93000,
        "loan_repaid": 0,
        "interest_paid": 0,
        "inventory_quantity": 15000,
        "inventory_mark_value": 93000,
        "inventory_is_not_cash": true
      },
      "futures_pnl": -9750.000000000005,
      "loan_drawn": 0,
      "interest": 0,
      "physical_payment": 93000,
      "ending_cash": 3250,
      "effective_cost": 102750,
      "initial_own_cash": 106000,
      "wealth_with_goods_after_settlement": 96250,
      "initial_loan_capacity": 0
    },
    "attachments": [
      {
        "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/corn-cash-event-ledgers.csv",
        "branch": "core",
        "sha256": "9b778996982247177134a974e89d4099ff90b28187ff670a232607609d53e68f",
        "format": "csv",
        "public_access": "具名公开附件；与原稿字节一致."
      }
    ],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "CME-GRAIN-TEACHING": "core",
      "SIM-PJ-CORN-CASH-01": "core"
    },
    "operational_scopes": {
      "corn": "core"
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
中途现金决定期货对冲能否持有至采购日. 结算损益、保证金补款和及时可用资金共同决定每次继续或平仓；平仓后停止计入期货损益.

<a id="p23-setup"></a>
## 资产位置与可用日期

采购者将在未来购买15,000蒲式耳玉米，现有106,000美元自有现金，其中90,000存款到采购日才可用，当前可用于对冲16,000.

沿用CME采购例：3张多头，每张5,000蒲式耳，起点5.75. 设中途价格5.45、5.1、6.25，每张初始保证金3,000、维持要求2,000；先结算，余额低于维持要求时补至初始要求，补不齐则按显示价平仓并返还余额. 中途路径、保证金和处置方式为教学参数，未计交易费和滑点.[^grain23]

建仓将9,000从自由现金转入保证金账户，资产分为90,000受限存款、9,000保证金和7,000自由现金，合计106,000. 随后期货损益改变净财富.

<a id="p23-recursion"></a>
## 结算与补款递推

设仍持有的张数为 $N$，期货价从 $F_{k-1}$ 变为 $F_k$. 多头本次结算损益为

$$
VM_k=5,000N(F_k-F_{k-1}).
$$

结算前保证金为 $M_{k-1}$，结算后 $M_k^-=M_{k-1}+VM_k$. 若 $M_k^-<2,000N$，应补 $A_k=3,000N-M_k^-$；否则为零. 比较应补款与自由现金加及时可提承诺额度，足额时才执行补款.

第一次跌到5.45，损失 $15,000\times(-0.30)=-4,500$. 账户从9,000降到4,500，低于6,000维持要求，应补4,500. 7,000自由现金足够，所以补至9,000，自由现金变2,500.

跌至5.1再损失 $15,000\times(-0.35)=-5,250$，保证金由9,000降至3,750，应补5,250，自由现金2,500，缺口2,750.

| 事件 | 本次VM | 结算后账户 | 应补款 | 截止前自由现金 | 动作后账户 | 动作后自由现金 |
|---|---:|---:|---:|---:|---:|---:|
| 建仓 | 0 | 9,000 | — | 7,000 | 9,000 | 7,000 |
| 5.75→5.45 | −4,500 | 4,500 | 4,500 | 7,000 | 9,000 | 2,500 |
| 5.45→5.10 | −5,250 | 3,750 | 5,250 | 2,500 | 0，平仓 | 6,250 |
| 后来5.10→6.25 | 0 | 0 | 0 | 6,250 | 0 | 6,250 |

本例在第二次检查失败后直接平仓，返还3,750保证金，自由现金为 $2,500+3,750=6,250$，期货张数归零.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P23-a.svg" alt="资金分在不同地点和日期：第二次要求补款时，90,000仍不能调用. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">三张采购对冲的现金过程</p><p class="pfh-figure-note">第2压力点平仓，随后期货持仓为零</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>保证金</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>自由现金</span></li></ul><p class="pfh-axis-label">美元；图示保证金与自由现金</p><div class="pfh-plot" style="--pfh-y-label-ch:10"><div class="pfh-y-ticks"><span style="top:100.0%">-1,080</span><span style="top:75.0%">1,710</span><span style="top:50.0%">4,500</span><span style="top:25.0%">7,290</span><span style="top:0.0%">10,080</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.0" x2="765" y2="165.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 229.00,225.00 363.00,128.23 497.00,241.13 631.00,321.77 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,171.24 229.00,171.24 363.00,268.01 497.00,268.01 631.00,187.37 765.00,187.37" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="229.0" cy="224.99999999999994" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="363.0" cy="128.2258064516129" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="497.0" cy="241.12903225806468" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="631.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="171.23655913978496" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="229.0" cy="171.23655913978496" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="363.0" cy="268.010752688172" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="497.0" cy="268.010752688172" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="631.0" cy="187.36559139784956" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="187.36559139784956" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">建仓</span><span class="" style="left:60.0%">第2记账</span><span class="last" style="left:100.0%">无仓位</span></div></div></div></figure>

<a id="p23-terminal"></a>
## 采购成本与剩余现金

采购日存款可用，账户有 $90,000+6,250=96,250$ 现金. 当地现货价6.20，支付93,000采购，剩余现金3,250. 期间期货累计损失9,750，所以有效采购成本为

$$
93,000-(-9,750)=102,750.
$$

各方案购入同数量玉米，日期与现货价相同，可按有效采购成本和剩余现金比较. 若计算终点净资产，再按一致口径计入玉米库存.

若额外资金使3张持续持有，5.1到6.25会带来17,250，累计期货损益由−9,750变为+7,500. 两条结果的差异由中途融资是否可得决定.

<a id="p23-alternatives"></a>
## 数量与融资替代

改为2张覆盖10,000蒲式耳，剩5,000未对冲. 初始保证金6,000，自由现金10,000；前两次VM为−3,000、−3,500，补款后剩3,500自由现金. 反弹带来11,500，累计盈利5,000，采购成本88,000，剩余18,000.

建仓前取得3,000承诺额度，则第二次借2,750即可继续. 十天后按10%年单利偿还，利息为

$$
2,750\times10\%\times\frac{10}{365}\approx7.534.
$$

3张累计期货收入7,500，有效采购成本 $93,000-7,500+7.534\approx85,507.534$，自有剩余现金约20,492.466. 偿还本金同时减少现金与负债，融资费用计利息.

| 安排 | 能否完整持有原头寸 | 期货累计损益 | 利息 | 有效采购成本 | 采购后自有现金 |
|---|---|---:|---:|---:|---:|
| 3张，无融资 | 否，第二次退出 | −9,750 | 0 | 102,750 | 3,250 |
| 2张 | 是，但数量不完全覆盖 | +5,000 | 0 | 88,000 | 18,000 |
| 3张，预先承诺额度 | 是，借2,750 | +7,500 | 7.534 | 85,507.534 | 20,492.466 |
| 不对冲 | 不适用 | 0 | 0 | 93,000 | 13,000 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P23-b.svg" alt="同一初始资金下，比较四种安排的有效采购成本. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">同一采购日，不同存续路径</p><p class="pfh-figure-note">四方案都从106,000自有资金出发</p><p class="pfh-axis-label">单位：有效采购成本，美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">3张，停仓</span><div class="pfh-cash-reading"><strong>102,750</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">2张，存续</span><div class="pfh-cash-reading"><strong>88,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:85.64476885644768%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">3张，承诺融资</span><div class="pfh-cash-reading"><strong>85,507.534</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:83.21901119221411%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">不对冲</span><div class="pfh-cash-reading"><strong>93,000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:90.51094890510949%"></span></div></li></ul></div></figure>

<a id="p23-reality"></a>
## 保证金压力与资金可达性

BIS对2020和2022年利率互换压力的分析显示，变动保证金和模型初始保证金可以同时上升. Graph A1的VM按五日累计，IM采用五日平仓期，分别反映价格变动结算和履约抵押需求.[^bis23]

FSB抵押品管理建议检查占用状态、资产资格、折扣率、币种、账户地点和到达时间.[^fsb23] 出售资产的结算日、银行转账时间及额度提款条件，共同决定截止前可达资金.

<div data-experiment-slot="EXP-P23-LIQUIDITY"></div>

实验中，3张且额度为0时在第二次检查退出，额度2,000仍缺750；额度3,000可继续3张，2张无融资则保留5,000蒲式耳采购敞口.

<a id="p23-exercises"></a>
## 练习与解析

**解释题.** 在第二次追保前，资产包括90,000存款、3,750保证金和2,500自由现金，为什么仍不能继续？

90,000存款尚不可用，5,250应补款只能动用2,500自由现金，缺口2,750. 总资产96,250无法改变当期付款来源.

**迁移题.** 承诺额度为2,000，第二次应补5,250时，按本实验规则采取什么动作？

及时可达资金4,500，仍缺750. 本例先判断能否足额补款，失败时不提款，在5.1平仓并返还保证金.

[^grain23]: CME Group，[Grain and Oilseed Hedgers Guide](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch1保证金机制与ch3采购单元.
[^bis23]: Benjamin H. Cohen、Kevin Tracol，BIS Quarterly Review March 2023，[Box A: Market turbulence and soaring margins](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf)，印刷pp5–6与Graph A1图注.
[^fsb23]: FSB，[Liquidity Preparedness for Margin and Collateral Calls](https://www.fsb.org/uploads/P101224-1.pdf)，2024-12-10，§3.3印刷pp18–20、Recommendations 6–8.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P23-LIQUIDITY",
    "node_id": "P23",
    "title": "保证金与对冲中的现金压力",
    "anchor": "p23-reality",
    "description": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓.",
    "inputs": {
      "frozen_ids": [
        "CME-GRAIN-TEACHING",
        "SIM-PJ-CORN-CASH-01"
      ],
      "operational_keys": [
        "corn"
      ],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "逐事件保证金/自由现金",
      "有效采购成本与存续安排"
    ],
    "boundaries": [
      "中途路径、保证金与显示价平仓为教学参数",
      "补款前检查可达资金，不足则平仓"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P23-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P23-b.svg"
      ],
      "body_tables": true,
      "event_data": [
        {
          "path": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/corn-cash-event-ledgers.csv",
          "branch": "core",
          "sha256": "9b778996982247177134a974e89d4099ff90b28187ff670a232607609d53e68f",
          "format": "csv",
          "public_access": "随本ZIP及复制教学包提供的UTF-8附件；非内部盘符"
        }
      ]
    },
    "input_controls": [
      {
        "key": "contracts",
        "label": "多头张数",
        "type": "number",
        "default": 3
      },
      {
        "key": "credit",
        "label": "事先承诺授信USD",
        "type": "selectnum",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "无授信"
          },
          {
            "value": 2000,
            "label": "2,000（不足）"
          },
          {
            "value": 3000,
            "label": "3,000（足够此路径）"
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
- [Market turbulence and soaring margins: lessons from two recent episodes — Box A](https://www.bis.org/publications/perceptions-risk-and-policy-outlook-drive-markets_1.pdf): 以假想一年期美元付固定与英镑收固定互换，比较VM五日累计与IM五日平仓窗口下的变化，分析模型重校准及流动性需求.
- [Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf): 采购与销售方向、价量原例及当地基差.

## Content relations
```json
[
  {
    "from": "zh-p23",
    "relation": "part_of",
    "to": "portfolio-implementation",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p23",
    "relation": "requires",
    "to": "zh-p08",
    "required_competence": "能够区分拥有资产与截止前可用现金.",
    "reason": "这项能力进入本篇主任务，而非推荐阅读顺序."
  },
  {
    "from": "zh-p23",
    "relation": "uses_method",
    "to": "zh-p21",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p23",
    "relation": "illustrated_by",
    "to": "p21-procurement",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "zh-p23",
    "relation": "illustrated_by",
    "to": "p23-setup",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p23-setup",
    "relation": "supported_by",
    "to": "MP-CME-GRAIN",
    "reason": "采购与销售方向、价量原例及当地基差.",
    "locator": "ch2 printed pp9–14 / PDF pp11–16；ch3 printed pp17–22 / PDF pp19–24；margin pp6–7",
    "scope": "采购与销售方向、价量原例及当地基差."
  },
  {
    "from": "p23-recursion",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "逐日价格变动、乘数、现金与结算口径.",
    "locator": "pp1–3普通期货变动现金完整单元",
    "scope": "逐日价格变动、乘数、现金与结算口径."
  },
  {
    "from": "p23-reality",
    "relation": "supported_by",
    "to": "MD-S08",
    "reason": "VM与模型IM在压力中共同变化；VM图为五日累计.",
    "locator": "Box A printed pp5–6，Graph A1及图注",
    "scope": "VM与模型IM在压力中共同变化；VM图为五日累计."
  },
  {
    "from": "p23-reality",
    "relation": "supported_by",
    "to": "MA-FSB",
    "reason": "抵押品资格、占用、haircut、币种、地点与及时到账.",
    "locator": "§3.3 printed pp18–20 / PDF pp22–24，Recommendations6–8",
    "scope": "抵押品资格、占用、haircut、币种、地点与及时到账."
  },
  {
    "from": "p23-reality",
    "relation": "illustrated_by",
    "to": "EXP-P23-LIQUIDITY",
    "reason": "用一条玉米采购账完整重放VM、可用资金、承诺融资与资金不足后的平仓."
  }
]
```

## Related entries
