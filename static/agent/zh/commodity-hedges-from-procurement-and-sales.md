# 商品期货：从采购和销售出发

采购者以期货多头对冲采购价上涨，生产者以空头对冲售价下跌. 将期货损益与经营付款或收款合并，得到对冲后的有效单价.

Entry: zh-p21 | Node: P21 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的指定完整单元，所选可选分支再读 optional_readings，记录题名、版本、定位及支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 以CME采购和销售原始价格推导有效单价，核验指南基差算术，比较期货与远期报价. 将采购量改为12,000，解释2张与3张留下的敞口. 先用完整推理任务诊断，再让读者计算和解释；已掌握步骤直接跳过. 根据错误反馈，用迁移条件检验理解. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p21",
  "learning_task": "以CME采购和销售原始价格推导有效单价，核验指南基差算术，比较期货与远期报价. 将采购量改为12,000，解释2张与3张留下的敞口.",
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
        "purpose": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配."
      },
      "supports": "采购与销售方向、价量原例及当地基差.",
      "limits": "公开教学例非企业实盘；p21上涨情景+.10应为+.05，p22−.02不为gain."
    },
    {
      "source_id": "PI-CME-CORN",
      "title": "CBOT Rulebook Chapter 10: Corn Futures",
      "authors": [
        "CME Group / CBOT"
      ],
      "version": "2026-09-21访问规则",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/rulebook/CBOT/I/10.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§10100–10104",
        "scope": "5,000蒲式耳、基准等级及规格边界.",
        "purpose": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配."
      },
      "supports": "5,000蒲式耳、基准等级及规格边界.",
      "limits": "不把所有地点、等级、交期的现货当作同一种无差别资产."
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
        "purpose": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配."
      },
      "supports": "逐日价格变动、乘数、现金与结算口径.",
      "limits": "清算层计算不等于某客户的资金时点与house margin."
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
      }
    ],
    "operational_details": {},
    "static_default_result": {
      "unit": "USD",
      "side": "procurement",
      "quantity": 15000,
      "hedged_quantity": 15000,
      "excess_quantity": 0,
      "futures_pnl": 7500,
      "physical_cash": 93000,
      "effective_cash": 85500,
      "effective_price": 5.7,
      "basis": -0.04999999999999982,
      "price": 6.2,
      "futures": 6.25,
      "initial_futures": 5.75,
      "production_cost": null,
      "business_profit": null
    },
    "attachments": [],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "CME-GRAIN-TEACHING": "core"
    },
    "operational_scopes": {},
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
采购者以期货多头对冲采购价上涨，生产者以空头对冲售价下跌. 将期货损益与经营付款或收款合并，得到对冲后的有效单价.

主例采用CME粮食与油籽指南的公开教学案例，金额为美元、数量为蒲式耳（bushel）. CBOT玉米标准期货每张5,000蒲式耳；No.2 Yellow为基准等级，其他允许等级按规则计价差. 合约数量匹配后，地点、品质和交期仍可能形成基差与交割错配. [^grain][^corn]

<a id="p21-business"></a>
## 经营现金流与多空方向

饲料采购者计划将来买15,000蒲式耳玉米. 还没有购买时，他担心的是未来采购价上涨；可以先做多期货，让期货上涨时的收入抵消一部分更高的现货支出. 种植者准备出售20,000蒲式耳，则担心未来售价下降；可以先做空，让期货下跌时的收入抵消较低的销售收入.

采购取消后保留的期货多头转为独立方向敞口；实际收成减少而空头数量不变，则可能超过待售数量.

企业按采购地点、品质、数量和付款日选择合约. 合约应覆盖风险期间；不准备进入交割时，在适用期限前平仓或换月. 现货品质与供应商履约仍由采购合同安排.

<a id="p21-basis"></a>
## 基差与有效单价

令 $S_T$ 为退出时的当地现货价，$F_T$ 为同一时点所用期货价，定义当地基差 $b_T=S_T-F_T$. 先假设实物数量与期货覆盖数量恰好相同，在采购或销售日同时退出期货，暂不计费用和资金利息.

采购者每单位实物付出 $S_T$，多头期货赚 $F_T-F_0$. 因此有效采购成本是

$$
S_T-(F_T-F_0)=F_0+b_T.
$$

销售者每单位收到 $S_T$，空头期货赚 $F_0-F_T$，因此有效销售收入也是

$$
S_T+(F_0-F_T)=F_0+b_T.
$$

采购从实物支出中扣期货所得，销售向实物收入加期货所得，因而得到同一形式. 起点确定 $F_0$，终点仍取决于当地基差 $b_T$；共同价格波动被转为基差风险.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-a.svg" alt="采购和销售两条现金链：先根据经营付款或收款确定期货方向. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">从经营现金方向推出期货方向</p><p class="pfh-figure-note">数量、地点、品质和日期仍需分别匹配</p><ol class="pfh-flow-steps"><li><strong>采购：未来要付钱</strong><p>担心现货上涨 → 期货多头</p><p>实物支出 − 期货所得 = 有效采购成本</p></li><li><strong>销售：未来要收钱</strong><p>担心现货下跌 → 期货空头</p><p>实物收入 + 期货所得 = 有效销售收入</p></li><li><strong>共同剩余</strong><p>终点基差 b = S当地 − F</p><p>数量全配且同日退出时，有效单价 = F0 + b</p></li></ol></div></figure>

<a id="p21-procurement"></a>
## 采购对冲

CME采购例的期货起点为5.75美元，15,000蒲式耳对应3张多头. 最终期货6.25、现货6.20时，实物支付93,000，期货收入7,500，合并成本85,500，即5.7/蒲式耳. 终点基差−0.05使有效单价比起点期货低0.05.

| 退出期货价 | 当地现货价 | 终点基差 | 实物付款 | 多头结果 | 有效单价 |
|---:|---:|---:|---:|---:|---:|
| 6.25 | 6.2 | −0.05 | 93,000 | +7,500 | 5.7 |
| 5.45 | 5.45 | 0 | 81,750 | −4,500 | 5.75 |
| 6.03 | 6.1 | +0.07 | 91,500 | +4,200 | 5.82 |

第二行的期货亏损4,500伴随较低采购价，有效单价为5.75. 第三行期货盈利4,200，但终点基差升至+0.07，有效单价为5.82.

案例另有5.8的远期采购报价. 在品质、地点、交期和信用条件相同时，可比较固定采购价与各基差情景下的有效价格，并计入抵押、额度和取消条款. 三条情景未设概率，当前只能逐情景比较.

<a id="p21-sales"></a>
## 销售对冲

销售例从5.70的期货起点卖出4张. 给定每蒲式耳生产成本5.10，原料/种植等成本总额102,000. 先把销售收入与期货结果合并，再减生产成本：

| 退出期货价 | 当地售价 | 基差 | 现货收入 | 空头结果 | 有效售价 | 减生产成本后利润 |
|---:|---:|---:|---:|---:|---:|---:|
| 5.2 | 5.05 | −0.15 | 101,000 | +10,000 | 5.55 | 9,000 |
| 5.9 | 5.7 | −0.2 | 114,000 | −4,000 | 5.5 | 8,000 |
| 5.37 | 5.1 | −0.27 | 102,000 | +6,600 | 5.43 | 6,600 |

原指南印刷p21右侧上涨情景把基差从−0.25到−0.20的变化写成0.10；按表中价格重算应为+0.05. p22从−0.25到−0.27为−0.02，即基差弱化. 本文按原始现货与期货价格重算这两处变化. [^grain]

表中利润未扣其他经营费用、交易费和融资利息. 期货补款若早于销售回款，还需安排中途资金.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P21-b.svg" alt="六个原始价格状态的有效单价：剩余变化对应当地基差，不等于共同价格完全未对冲. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">有效单价的变化来自剩余基差</p><p class="pfh-figure-note">CME原始教学状态；横轴为三个情景</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>采购有效价</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>销售有效价</span></li></ul><p class="pfh-axis-label">美元/蒲式耳</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">5.38</span><span style="top:75.0000000000001%">5.5</span><span style="top:50.0%">5.62</span><span style="top:24.999999999999904%">5.75</span><span style="top:0.0%">5.87</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0000000000002" x2="765" y2="285.0000000000002" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.0" x2="765" y2="225.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="164.99999999999977" x2="765" y2="164.99999999999977" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,187.78 430.00,162.97 765.00,128.23" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,262.22 430.00,287.03 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="187.7791563275434" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="162.96526054590583" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="128.22580645161293" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="262.22084367245657" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="287.03473945409417" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.7741935483871" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">1</span><span class="" style="left:50.0%">2</span><span class="last" style="left:100.0%">3</span></div></div></div></figure>

<a id="p21-lab"></a>
## 数量错配

<div data-experiment-slot="EXP-P21-CORN"></div>

令实际采购量为 $Q$，期货覆盖量为 $H=5,000N$. 采购成本的一般式为

$$
C=QS_T-H(F_T-F_0),\qquad
\frac{C}{Q}=S_T-\frac{H}{Q}(F_T-F_0).
$$

$H=Q$ 时简化为 $F_0+b_T$. 实际采购降至12,000而保留3张时，多出的3,000蒲式耳为方向敞口：期货上涨降低成本，下跌增加成本.

采购延期会使原合约过早结束覆盖，收成下降会使空头过量. 根据新数量与日期比较减仓、换月和固定价采购的成本.

<a id="p21-exercises"></a>
## 练习与解析

**解释题.** 当地采购价6.2，期货从5.75涨到6.25，多3张. 企业采购15,000蒲式耳的有效成本是多少？

现货付款93,000减期货收入7,500，合并成本85,500，即5.7/蒲式耳.

**迁移题.** 实际只买12,000蒲式耳，价格仍为6.20，期货仍按3张持有至6.25. 有效单价是多少？若只持2张呢？

3张时成本 $12,000\times6.20-7,500=66,900$，每单位5.575；2张时期货收入5,000，成本69,400，单价约5.783. 前者在这条上涨路径中受益于过量多头；若期货下跌，超出需求的多头会反向增加损失.

[^grain]: CME Group，[Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf)，ch2印刷pp9–14、ch3印刷pp17–22，采购/销售完整教学单元.
[^corn]: CME/CBOT，[Corn Futures，Chapter 10](https://www.cmegroup.com/rulebook/CBOT/I/10.pdf)，§10100–10104：合约单位、等级、报价与交易/交割月份的核心规则.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P21-CORN",
    "node_id": "P21",
    "title": "商品期货：从采购和销售出发",
    "anchor": "p21-lab",
    "description": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配.",
    "inputs": {
      "frozen_ids": [
        "CME-GRAIN-TEACHING"
      ],
      "operational_keys": [],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "经营方向与逐腿金额",
      "三种基差状态与数量失配"
    ],
    "boundaries": [
      "现货与期货同步退出，主表数量匹配",
      "主表未计费用与融资，采购量可在实验改变"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P21-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P21-b.svg"
      ],
      "body_tables": true,
      "event_data": []
    },
    "input_controls": [
      {
        "key": "side",
        "label": "经营身份",
        "type": "select",
        "default": "procurement",
        "options": [
          {
            "value": "procurement",
            "label": "采购"
          },
          {
            "value": "sales",
            "label": "销售"
          }
        ]
      },
      {
        "key": "outcome",
        "label": "原例状态",
        "type": "selectnum",
        "default": 0,
        "options": [
          {
            "value": 0,
            "label": "第一行"
          },
          {
            "value": 1,
            "label": "第二行"
          },
          {
            "value": 2,
            "label": "第三行"
          }
        ]
      },
      {
        "key": "quantity",
        "label": "实际蒲式耳",
        "type": "number",
        "default": 15000
      },
      {
        "key": "contracts",
        "label": "期货张数",
        "type": "number",
        "default": 3
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): CME逐日结算金额的计算：当日成交头寸按成交价至结算价计量，期初头寸按前结算价至本结算价计量，并按相应合约单位和舍入规则换算现金.
- [Self-Study Guide to Hedging with Grain and Oilseed Futures and Options](https://www.cmegroup.com/trading/agricultural/files/grain-oilseed-hedgers-guide.pdf): 采购与销售方向、价量原例及当地基差.
- [CBOT Rulebook Chapter 10: Corn Futures](https://www.cmegroup.com/rulebook/CBOT/I/10.pdf): 5,000蒲式耳、基准等级及规格边界.

## Content relations
```json
[
  {
    "from": "zh-p21",
    "relation": "part_of",
    "to": "portfolio-futures",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p21",
    "relation": "uses_method",
    "to": "zh-p10",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p21",
    "relation": "illustrated_by",
    "to": "p21-procurement",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p21-procurement",
    "relation": "supported_by",
    "to": "MP-CME-GRAIN",
    "reason": "采购与销售方向、价量原例及当地基差.",
    "locator": "ch2 printed pp9–14 / PDF pp11–16；ch3 printed pp17–22 / PDF pp19–24；margin pp6–7",
    "scope": "采购与销售方向、价量原例及当地基差."
  },
  {
    "from": "p21-business",
    "relation": "supported_by",
    "to": "PI-CME-CORN",
    "reason": "5,000蒲式耳、基准等级及规格边界.",
    "locator": "§10100–10104",
    "scope": "5,000蒲式耳、基准等级及规格边界."
  },
  {
    "from": "p21-sales",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "逐日价格变动、乘数、现金与结算口径.",
    "locator": "pp1–3普通期货变动现金完整单元",
    "scope": "逐日价格变动、乘数、现金与结算口径."
  },
  {
    "from": "p21-lab",
    "relation": "illustrated_by",
    "to": "EXP-P21-CORN",
    "reason": "由经营现金推出多空，合并当地现货和期货，辨认基差、数量与时间失配."
  }
]
```

## Related entries
