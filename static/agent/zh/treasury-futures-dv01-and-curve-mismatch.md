# 国债期货：DV01、曲线与CTD错配

重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。

Entry: zh-p22 | Node: P22 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
请先实际读取本篇必读原件的指定完整单元，再围绕“重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。”带我完成学习。先让我自己判断方向、对象或基准，再让我逐步重建一项承重计算；不要先把答案全部说出。选读分支只有我选中后才启用对应原件和输入。每次解释都分清真实规则、教学假设、作者报告与本站复算。逐事件核现金、负债、费用和剩余仓位；资金不足时停止已完成结果。使用本包正文里的完整解析反馈我哪里错、为什么、如何迁移。未来runtime_reading_log由你实际读取后填写，不能把作者或支持者日志当成自己的阅读。不要接触账户或更新冻结数据。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p22",
  "learning_task": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。",
  "required_readings": [
    {
      "source_id": "MP-CME-3Y",
      "title": "Hedging 3-Year Note Issuance",
      "authors": [
        "Jonathan Kronstein",
        "CME Group"
      ],
      "version": "2020年9月教学情景",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/education/articles-and-reports/hedging-3-year-note-issuance",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "全文；Sep1/3/8/15时间线与BPV段",
        "scope": "预期取得债券的拍卖参与者的100m本金、代理证券与455张DV01对冲。",
        "purpose": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。"
      },
      "supports": "预期取得债券的拍卖参与者的100m本金、代理证券与455张DV01对冲。",
      "limits": "非财政部债务发行人套保；非实际成交；没有核全图像交割篮。"
    },
    {
      "source_id": "MP-CME-TREAS",
      "title": "Understanding Treasury Futures",
      "authors": [
        "CME Group"
      ],
      "version": "©2024；例子包含2017数据",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.cmegroup.com/education/files/understanding-treasury-futures.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "printed pp5–8（CF/CTD）；pp11–13（风险与BPV对冲）",
        "scope": "交割转换因子、最便宜可交割券、BPV匹配及假设。",
        "purpose": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。"
      },
      "supports": "交割转换因子、最便宜可交割券、BPV匹配及假设。",
      "limits": "CF不是DV01；不主张完整曲线、凸性或当前合约敏感度。"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_inputs": [
      {
        "id": "CME-3Y-202009-TEACHING",
        "owner": "P22",
        "consumers": [
          "P22"
        ],
        "version": "final-20260921",
        "unit": {
          "sensitivity": "USD/bp",
          "par": "USD",
          "contracts": "3-Year Treasury futures"
        },
        "identity": "CME Sep-2020 teaching issuance hedge; curve/CTD changes are explicit teaching stresses.",
        "defaults": {
          "par": 100000000,
          "proxy_par": 200000,
          "proxy_dv01": 56.11,
          "portfolio_dv01": 28055,
          "future_dv01": 61.7,
          "selected_short_contracts": 455
        },
        "default_results": {
          "ideal_short_contracts": 454.70016207455427,
          "residual_dv01": -18.5,
          "plus_1bp_pnl": 18.5,
          "twist": {
            "portfolio_pnl": -119450,
            "future_pnl": 128765,
            "net_pnl": 9315
          },
          "ctd_change": {
            "alternative_future_dv01": 58,
            "unadjusted_residual_dv01": 1665,
            "new_ideal_contracts": 483.7068965517241
          }
        },
        "branch_boundaries": {
          "conversion_factor": "Delivery invoice adjustment, not DV01.",
          "linear": "Does not cover full curve/convexity/CTD/funding."
        }
      }
    ],
    "operational_details": {
      "treasury": {
        "portfolio_dv01": 28055,
        "future_dv01": 61.7,
        "portfolio_buckets": [
          20000,
          8055
        ],
        "future_buckets": [
          45,
          16.7
        ],
        "alternative_dv01": 58
      }
    },
    "static_default_result": {
      "unit": "USD",
      "state": "parallel",
      "n": 455,
      "portfolio_dv01": 28055,
      "future_dv01": 61.7,
      "ideal": 454.70016207455427,
      "residual_dv01": -18.5,
      "portfolio_pnl": -28055,
      "futures_pnl": 28073.5,
      "net": 18.5,
      "funding_verified": false
    },
    "attachments": [],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次。",
    "case_scopes": {
      "CME-3Y-202009-TEACHING": "core"
    },
    "operational_scopes": {
      "treasury": "core"
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
买一亿元面值的短债和一亿元面值的长债，利率上涨时的价格反应不会一样。因此，国债期货对冲不能只比名义本金。本篇先把一个有日期的CME教学案例算清，再有意破坏“所有利率一起变化”的假设，看看一个看似严丝合缝的张数留下了什么。

<a id="p22-object"></a>
## 1. 先确定保护的究竟是谁

CME的2020年案例站在参与美国国债拍卖、预期形成债券多头敞口的市场参与者一侧，不是在为财政部设计借款成本。它以9月1日可观察的风险为起点，列出9月3日公布并开启when-issued交易、9月8日拍卖、9月15日发行交收的时间线，用国债期货空头对冲预计的多头价格风险。[^3y]

这里采用的是作者的1亿美元面值教学安排，不是已执行订单。未发行新券的敏感度暂用刚拍卖的、2023年8月到期、票息1/8%的三年期票据作代理。这个“代理”身份很重要：券还未最终形成，不能把代理证券的精确数值说成新券永远不变的风险。

DV01表示收益率增加1个基点时，价格减少多少美元的一阶敏感度，本篇把正常债券多头的DV01记为正。于是对于小幅收益率变动 $\Delta y_{bp}$，价格变化约为 $-D\Delta y_{bp}$。单位是美元/基点；“基点”是收益率的0.01个百分点，不是债券价格下跌0.01%。

<a id="p22-ratio"></a>
## 2. 为什么得到455张？

原例代理券每200,000美元面值的DV01为56.11美元/基点。1亿美元对应500个这样的面值单位，所以

$$
D_p=56.11\times\frac{100,000,000}{200,000}=28,055.
$$

2020年12月三年期国债期货 Z3NZ0 的给定DV01为61.70美元/基点。空头在利率上涨、期货价格下降时盈利。令空头张数为 $N$，共同平移下的合并变化约为

$$
\Delta W\approx-(D_p-ND_f)\Delta y_{bp},\qquad
N^*=\frac{28,055}{61.70}=454.700162.
$$

采用455张后，期货敏感度是28,073.50，残余多头DV01为−18.50。利率上升1bp，组合约亏28,055，空头约赚28,073.50，合并约赚18.50。这个小正数来自轻微过度对冲，不是一种利率套利。

| 空头张数 | 期货DV01（美元/bp） | 残余多头DV01 | +1bp时合计近似变化 |
|---:|---:|---:|---:|
| 454 | 28,011.80 | +43.20 | −43.20 |
| 455 | 28,073.50 | −18.50 | +18.50 |

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-a.svg" alt="名义本金到DV01再到整数张数：455的来源是敏感度，不是面值相除。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">用DV01而不是票面本金匹配</p><p class="pfh-figure-note">CME 2020年发行对冲教学例；不是当前DV01</p><ol class="pfh-flow-steps"><li><strong>代理证券</strong><p>56.11美元/bp / 200,000美元本金</p><p>100m本金 → 28,055美元/bp</p></li><li><strong>期货一张</strong><p>61.70美元/bp</p><p>28,055 / 61.70 = 454.700162张</p></li><li><strong>采用455张</strong><p>净DV01 = −18.50美元/bp</p><p>利率平移+1bp → 合并近似+18.50美元</p></li></ol></div></figure>

<a id="p22-ctd"></a>
## 3. 转换因子和最便宜可交割券，为什么必须进来？

国债期货允许交付符合规则的一篮子不同债券。转换因子（CF）把期货报价映射到某一可交割券的发票金额；最便宜可交割券（CTD）则与当时券价、融资、应计利息和交割选择有关。简化地说，在选定CTD且基差关系局部稳定时，期货DV01常可从CTD的DV01除以其CF近似得到。但CF本身没有美元/基点单位，所以不能拿CF直接替代风险敏感度。[^treas]

假如原来61.70的每张DV01在新CTD或价格状态下变为58，455张提供的敏感度只有26,390；相对28,055，还剩1,665美元/bp。新的理想张数约483.706897。先前的455并没有算错，是被用来计算它的风险关系已经变了。

这一步也说明为什么“定期检查合约”不能简化成固定日历加减仓。需要先知道价格、交割篮和风险是否改变。没有这些信息就机械从455加到484，只会把另一个假设当事实。实验里的58是明确的教学压力，不是对2020或当前真实CTD的重新估计。

<a id="p22-curve"></a>
## 4. 总DV01相同，曲线扭曲仍然可能不同

一个DV01把整条收益率曲线压成“所有期限同时增加1bp”。实际可以一端涨、另一端跌。我们另设两个期限桶，组合敏感度为 $(20,000,8,055)$，每张期货为 $(45,16.7)$。它们加总仍分别是28,055和61.70，所以沿平行方向继续得到同一个455。

但若第一桶上升10bp、第二桶下降10bp，组合变化为

$$
\Delta V_p=-20,000\times10-8,055\times(-10)=-119,450.
$$

空头期货则给

$$
\Delta V_f=455[45\times10+16.7\times(-10)]
=128,765.
$$

净额为9,315美元，不再接近零。原因是两个敏感度向量不成比例，一个标量张数只能匹配一个方向。若要同时约束多个期限桶，可能需要不同期限的合约，解一个向量匹配问题；同时还会增加交易、资金和模型维护成本。

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P22-b.svg" alt="平行移动、曲线扭曲与CTD变化：同一455张面对三个不同风险问题。"></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">平移匹配不等于曲线匹配</p><p class="pfh-figure-note">教学两桶扭曲 +10 / −10 bp；仍用455张</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">债券变化</span><div class="pfh-cash-reading"><strong>-119,450.000</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:92.7658913524638%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货变化</span><div class="pfh-cash-reading"><strong>128,765.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净变化</span><div class="pfh-cash-reading"><strong>9,315.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:7.2341086475362095%"></span></div></li></ul></div></figure>

<div data-experiment-slot="EXP-P22-DV01"></div>

在实验中先选“平移”，观察455张的18.50美元微小残余，再切“扭曲”而不改张数。最后切“CTD变化”，分别比较保持455与重新计算理想张数。图中风险都是一阶教学近似；没有给出凸性、实际完整曲线和每日券价时，不会把它延伸成大幅变动下的精确损益。

<a id="p22-funding"></a>
## 5. 价格抵消不负责提供交收现金

期货空头可能在收益率下降时发生现金亏损，而债券多头的市值同时上升。若持有的是未交收证券或不愿卖出的库存，增值不自动变成期货截止前可用现金。真正部署还要知道期货日结算、经纪商保证金、可动用现金、发券交收和旧合约退出日期。

本例没有这些账户数据，因此没有“455张所需现金”的数值结论。一个负18.50美元/bp的残余并不能证明资金充足。直接卖掉一部分债券、缩小预期拍卖头寸或使用其他期限工具，都是可比较的替代；它们分别改变库存、收益机会、基差或资金要求，不能只按最小残余DV01排序。

<a id="p22-exercises"></a>
## 6. 自测与解析

**解释题。** 为什么一个CF为0.9的合约，不意味着其DV01就是债券的90%？

CF调整交割发票报价，不是无量纲风险折扣。简化交割关系中，某券价格近似为CF乘期货价再加其他项，反过来期货敏感度更接近券敏感度除以CF，而且还需要CTD和基差稳定的假设。只报0.9，没有券的DV01，甚至无法得到美元/bp。

**迁移题。** 455张不变，期货DV01变58，利率平移上升5bp。忽略凸性和其他变化，合计多少？这能直接变成加仓建议吗？

残余为 $28,055-455\times58=1,665$ 美元/bp，所以近似损失8,325美元。新理想张数为483.706897，但是否采用484仍要核CTD判断、费用和过程现金。教学敏感度表不是已经观察到的市场资料，因此只能给条件结果。

**完成标准。** 能说清455来自哪个日期、哪个代理券、哪个期货敏感度；还能指出曲线、CTD、凸性和现金分别在哪一步超出了这个数字。

[^3y]: Jonathan Kronstein / CME Group，[Hedging 3-Year Note Issuance](https://www.cmegroup.com/education/articles-and-reports/hedging-3-year-note-issuance)，2020年教学情景全文，尤其Sep1/3/8/15与DV01算例段。
[^treas]: CME Group，[Understanding Treasury Futures](https://www.cmegroup.com/education/files/understanding-treasury-futures.pdf)，转换因子、CTD及基差单元，印刷pp5–8；BPV风险与对冲单元，印刷pp11–13。本文两期限桶是另列的教学变式。

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P22-DV01",
    "node_id": "P22",
    "title": "国债期货：DV01、曲线与CTD错配",
    "anchor": "p22-curve",
    "description": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。",
    "inputs": {
      "frozen_ids": [
        "CME-3Y-202009-TEACHING"
      ],
      "operational_keys": [
        "treasury"
      ],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "DV01到张数的匹配",
      "曲线扭曲/CTD残余"
    ],
    "boundaries": [
      "真实规格不等于当前保证金或成交",
      "不得从终点补造未提供的资金路径",
      "输入无效即停止，不能沿用旧结果"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P22-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P22-b.svg"
      ],
      "body_tables": true,
      "event_data": []
    },
    "input_controls": [
      {
        "key": "state",
        "label": "利率状态",
        "type": "select",
        "default": "parallel",
        "options": [
          {
            "value": "parallel",
            "label": "平行+1bp"
          },
          {
            "value": "twist",
            "label": "两桶+10/−10bp"
          },
          {
            "value": "ctd",
            "label": "单张DV01改为58"
          }
        ]
      },
      {
        "key": "contracts",
        "label": "空头张数",
        "type": "number",
        "default": 455
      },
      {
        "key": "shock",
        "label": "平移冲击bp",
        "type": "number",
        "default": 1
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [Hedging 3-Year Note Issuance](https://www.cmegroup.com/education/articles-and-reports/hedging-3-year-note-issuance): 预期取得债券的拍卖参与者的100m本金、代理证券与455张DV01对冲。
- [Understanding Treasury Futures](https://www.cmegroup.com/education/files/understanding-treasury-futures.pdf): 交割转换因子、最便宜可交割券、BPV匹配及假设。

## Content relations
```json
[
  {
    "from": "zh-p22",
    "relation": "part_of",
    "to": "portfolio-futures",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p22",
    "relation": "uses_method",
    "to": "zh-p10",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明。"
  },
  {
    "from": "zh-p22",
    "relation": "uses_method",
    "to": "zh-m06",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明。"
  },
  {
    "from": "zh-p22",
    "relation": "uses_method",
    "to": "zh-m07",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明。"
  },
  {
    "from": "zh-p22",
    "relation": "illustrated_by",
    "to": "p22-object",
    "reason": "同一冻结对象和明确身份的算例。"
  },
  {
    "from": "p22-object",
    "relation": "supported_by",
    "to": "MP-CME-3Y",
    "reason": "预期取得债券的拍卖参与者的100m本金、代理证券与455张DV01对冲。",
    "locator": "全文；Sep1/3/8/15时间线与BPV段",
    "scope": "预期取得债券的拍卖参与者的100m本金、代理证券与455张DV01对冲。"
  },
  {
    "from": "p22-ctd",
    "relation": "supported_by",
    "to": "MP-CME-TREAS",
    "reason": "交割转换因子、最便宜可交割券、BPV匹配及假设。",
    "locator": "printed pp5–8（CF/CTD）；pp11–13（风险与BPV对冲）",
    "scope": "交割转换因子、最便宜可交割券、BPV匹配及假设。"
  },
  {
    "from": "p22-curve",
    "relation": "illustrated_by",
    "to": "EXP-P22-DV01",
    "reason": "重建2020年发行教学例，区分本金、转换因子和敏感度，并检查曲线扭曲与CTD变化。"
  }
]
```

## Related entries
