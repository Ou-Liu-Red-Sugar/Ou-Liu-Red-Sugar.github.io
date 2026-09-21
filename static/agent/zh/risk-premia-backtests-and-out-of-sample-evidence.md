# 风险溢价、回测与样本外检验

Ian Dew-Becker与Stefano Giglio的Chicago Fed工作论文比较交易期权与动态合成期权的收益，并研究负alpha随时间的变化. 本文按2025年9月4日版本重建数据、持仓、收益分母、信息时点与统计结论，再据此区分历史结构变化、可实施性与样本外验证.[^cf25]

Entry: zh-p25 | Node: P25 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的指定完整单元，所选可选分支再读 optional_readings，记录题名、版本、定位及支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 按2025-09-04论文版本重建交易/合成期权数据、持有期、滞后、收益分母、IR和事后断点. 推导固定缩放的IR不变性，设计规则在测试前冻结的滚动验证；数值报告标明作者结果. 先用完整推理任务诊断，再让读者计算和解释；已掌握步骤直接跳过. 根据错误反馈，用迁移条件检验理解. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p25",
  "learning_task": "按2025-09-04论文版本重建交易/合成期权数据、持有期、滞后、收益分母、IR和事后断点. 推导固定缩放的IR不变性，设计规则在测试前冻结的滚动验证；数值报告标明作者结果.",
  "required_readings": [
    {
      "source_id": "PFH-CHIFED2025",
      "title": "The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options",
      "authors": [
        "Ian Dew-Becker",
        "Stefano Giglio"
      ],
      "version": "WP2025-17；manuscript 2025-09-04",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.3/2.3.1；§3.1；§3.2开头；§4.1/4.1.1；fn25–26；Table2讨论 printedp31/PDFp32",
        "scope": "滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点.",
        "purpose": "完整辨认一篇期权研究的策略、分母、样本、滞后和断点，不把事后证据称为样本外."
      },
      "supports": "滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点.",
      "limits": "完整Table2未单独定位，不声称核SE/p值；未取得付费原始数据；§4.2证明不采用."
    },
    {
      "source_id": "QS02-5.10",
      "title": "Forecasting: Principles and Practice, Time series cross-validation",
      "authors": [
        "Rob J Hyndman",
        "George Athanasopoulos"
      ],
      "version": "online third edition",
      "access": {
        "kind": "html_full_text",
        "uri": "https://otexts.com/fpp3/tscv.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§5.10完整滚动预测起点单元",
        "scope": "先训练、后评价、逐次推进的样本外结构.",
        "purpose": "正文核心：区分事后分段和真正滚动预测起点的评价."
      },
      "supports": "先训练、后评价、逐次推进的样本外结构.",
      "limits": "金融数据的发布日期和历史版本仍需独立约束."
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_inputs": [
      {
        "id": "OBS-PK-VRP-WP2025-17",
        "owner": "P25",
        "consumers": [
          "P25"
        ],
        "version": "2025-09-04/final-reading-contract-20260921",
        "unit": {
          "returns": "paper-defined",
          "information_ratio": "CAPM alpha / residual standard deviation"
        },
        "identity": "Reading contract for Chicago Fed WP2025-17; no paid raw-data replication.",
        "required_units": [
          "§2.3/2.3.1",
          "§3.1",
          "§3.2 opening: synthetic return vs market return / conditional mean nonlinearity",
          "§4.1 and Figure8",
          "§4.1 footnote26 printed p30/PDF p31 pseudo variance return",
          "§4.1.1 ex-post break test",
          "Table2 discussion printed p31/PDF p32"
        ],
        "default_results": {
          "reported_traded_option_information_ratio_early": -0.6,
          "reported_traded_option_information_ratio_late": 0.09,
          "break_date": "2012m5",
          "break_identity": "ex-post break test"
        },
        "verification_boundary": {
          "table2_full_table_reverified": false,
          "table2_discussion_reverified": true,
          "do_not_claim": "Full Table2 cells, SEs or p-values independently checked."
        },
        "scaling_exercise": {
          "baseline_denominator": "underlying price",
          "premium_denominator": "Variable premium/underlying ratio changes series/exposure/weighting; cannot copy results unchanged.",
          "fixed_positive_scaling": "Same series × fixed c>0 scales alpha and residual SD equally; information ratio unchanged."
        },
        "branch_boundaries": {
          "rolling_oos": "If selected, add FPP3 §5.10 + release/vintage timing.",
          "section4_2": "Not adopted without full read."
        }
      }
    ],
    "operational_details": {},
    "static_default_result": {
      "reported_identity": "论文Table 2正文讨论，非本地重估的完整表格",
      "scale": "fixed",
      "split": "posthoc",
      "fixed_scale": 100,
      "ir_unchanged_by_fixed_scale": true,
      "requires_reestimate": false,
      "valid_oos_label": false,
      "description": "同一序列乘固定正常数，alpha与残差标准差同比例变化，IR不变.",
      "split_explanation": "2012m5由事后断点检验识别，只支持历史分段.",
      "table2_cells_verified": false
    },
    "attachments": [],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "OBS-PK-VRP-WP2025-17": "core"
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
Ian Dew-Becker与Stefano Giglio的Chicago Fed工作论文比较交易期权与动态合成期权的收益，并研究负alpha随时间的变化. 本文按2025年9月4日版本重建数据、持仓、收益分母、信息时点与统计结论，再据此区分历史结构变化、可实施性与样本外验证.[^cf25]

<a id="p25-question"></a>
## 风险解释与策略实施

交易所期权是实际有市场报价的权利；合成期权则通过动态改变市场资产持仓来构造非线性收益. 两者的价格、成本、残余风险和可交易条件不必相同. 论文用它们研究边际效用与风险补偿的解释，需要满足关于定价、非线性形状和未被市场解释风险的条件.

§2.3.1的价格解释依赖边际效用与支付形状的关系，动态复制对投资者的可得性另由成本、交易时间和融资约束决定.

投资者可实施性还取决于成交时点、价差、交易频率、借贷、融资、账户权限和无法继续持仓时的处置规则. 这些变量决定统计上的合成收益能否转化为实际可执行策略.

<a id="p25-method"></a>
## 数据构造与信息时点

合成策略采用每日CRSP市值加权市场收益及French无风险收益. 主分析delta含杠杆效应调整，波动率由扩展窗口估计的异质自回归模型预测. 扩展窗口限制估计时可用数据，delta再滞后一天，以减轻滞后价格等微观结构偏差.[^data25]

交易期权数据把1987–1995年的CME期货期权与1996–2022年的OptionMetrics SPX期权连接起来，按第三个星期五买入并持有到下个月对应到期日. 直接比较交易与合成期权时，持有期必须相同；论文的一些合成期权单变量统计则采用21日重叠窗口，以使用更多观测.

相邻21日窗口共享大部分市场路径，误差相关性影响标准误与有效样本量. §4.1直接比较时采用与交易期权相同的换月日.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P25-a.svg" alt="资料和滚动规则时间线：真实期权、合成头寸与重叠统计各有身份. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">先对齐样本与持有期，再读结果</p><p class="pfh-figure-note">作者报告的数据与样本构造</p><ol class="pfh-flow-steps"><li><strong>合成期权</strong><p>CRSP长期日数据；滞后信息与扩张估计</p><p>单变量统计可用21日重叠窗口</p></li><li><strong>交易期权</strong><p>CME 1987–1995；SPX 1996–2022</p><p>第三个星期五至下一同类日期</p></li><li><strong>直接比较与分期</strong><p>合成回报对齐交易期权换月日</p><p>2012m5是事后识别断点，不是预封存OOS</p></li></ol></div></figure>

<a id="p25-denominator"></a>
## 收益分母与尺度

主分析以标的价格规范化期权超额支付. 同一损益 $\Pi_t$，以标的价 $S_t$ 或权利金 $C_t$ 作分母，得到

$$
R_t^{premium}=\frac{\Pi_t}{C_t}
=\frac{S_t}{C_t}R_t^{underlying}.
$$

$S_t/C_t$ 随期限、波动率及价内外程度变化，因此变更分母会逐期改变规模、暴露和统计权重.

固定比例缩放则保留某些统计量. 同一超额收益序列乘固定 $c>0$，相同CAPM回归下有 $\alpha'=c\alpha$、$\epsilon'=c\epsilon$，信息比率满足

$$
IR'=\frac{c\alpha}{c\operatorname{sd}(\epsilon)}=IR.
$$

<a id="p25-result"></a>
## 样本结构变化

方差伪收益在§4.1脚注26定义为

$$
R_t^{RV}=\frac{RV_t-VIX_{t-1}^{2}}{VIX_{t-1}^{2}},
$$

$RV_t$ 为年化已实现月方差，$VIX_{t-1}$ 为前月末VIX. 两者统一使用小数或百分数尺度后再平方、相减；IR为该收益序列的CAPM alpha除以残差标准差.[^result25]

§4.1展示滚动十年IR，§4.1.1的事后断点检验将2012年5月划为早晚样本分界. Table 2及相邻正文报告交易期权IR由约−0.6变为0.09，变化具有统计显著性.[^result25]

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P25-b.svg" alt="结论所需的证据层次：原始回报、风险调整、分期与样本外不能彼此替代. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">回报评价与证据</p><p class="pfh-figure-note">回报定义、风险调整与样本划分</p><ol class="pfh-flow-steps"><li><strong>原始结果</strong><p>净支付 / 明确资本分母</p><p>保费与标的资本分别列示</p></li><li><strong>风险调整</strong><p>CAPM alpha与残差标准差</p><p>IR：固定比例缩放不变，变动比例需重估</p></li><li><strong>后续检验</strong><p>先冻结规则再评价未知时期</p><p>事后断点与真正滚动样本外不同</p></li></ol></div></figure>

alpha贡献缩小后，与市场beta相联系的补偿仍可构成总方差风险溢价. 将长期权改为短期权还会改变尾部损失、融资和资本需求；实际净收益须按卖方执行条件重算.

<a id="p25-oos"></a>
## 滚动样本外检验

2012年5月由完整历史的断点检验识别，支持历史结构变化. 预测检验则要求参数、窗口和交易规则在相应测试期开始前确定.

滚动验证在每个起点按可得数据估参、选规则，再评价随后时期. FPP3给出滚动起点结构，金融数据另需按发布时间、版本和成交时刻对齐.[^oos25] 全样本调参会使后段结果参与规则选择，破坏这项独立性.

<div data-experiment-slot="EXP-P25-EVIDENCE"></div>

实验比较事后断点与预定滚动起点，以及固定倍数与逐期分母. −0.6和0.09沿用作者报告值，切换用于辨认证据及缩放方式.

<a id="p25-exercises"></a>
## 练习与解析

**解释题.** “2012年5月以后alpha改善，说明策略通过了样本外检验. ”如何修改这句话？

作者依据事后识别的断点报告风险调整表现变化. 样本外检验另要求测试结果未参与参数、窗口和策略选择.

**迁移题.** 将同一超额收益序列统一乘100，与逐期改除以期权权利金，有什么不同？

统一乘100时，alpha与残差标准差同比缩放，IR不变. 改用权利金分母时，$S_t/C_t$ 逐期变化，须重新估计回归和IR.

[^cf25]: Ian Dew-Becker、Stefano Giglio，[The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en)，Chicago Fed WP2025-17，manuscript 2025-09-04，§2.3及§2.3.1.
[^data25]: 同文§3.1，印刷pp12–13 / PDF pp13–14；§3.2开头讨论收益非线性.
[^result25]: 同文§4.1脚注25（滚动日期对齐）、脚注26（印刷p30 / PDF p31），以及§4.1.1和Table 2讨论（印刷p31 / PDF p32）.
[^oos25]: Hyndman、Athanasopoulos，[Forecasting: Principles and Practice, §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html)，滚动起点单元.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P25-EVIDENCE",
    "node_id": "P25",
    "title": "风险溢价、回测与样本外检验",
    "anchor": "p25-oos",
    "description": "完整辨认一篇期权研究的策略、分母、样本、滞后和断点，不把事后证据称为样本外.",
    "inputs": {
      "frozen_ids": [
        "OBS-PK-VRP-WP2025-17"
      ],
      "operational_keys": [],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "样本及换月日期的证据图",
      "分母缩放/断点可支持结论"
    ],
    "boundaries": [
      "结果数值引用2025-09-04论文报告",
      "2012年5月为事后断点；固定与变动缩放分别处理"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P25-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P25-b.svg"
      ],
      "body_tables": true,
      "event_data": []
    },
    "input_controls": [
      {
        "key": "scale",
        "label": "分母变化",
        "type": "select",
        "default": "fixed",
        "options": [
          {
            "value": "fixed",
            "label": "固定正比例缩放"
          },
          {
            "value": "variable",
            "label": "逐笔改用权利金分母"
          }
        ]
      },
      {
        "key": "split",
        "label": "验证身份",
        "type": "select",
        "default": "posthoc",
        "options": [
          {
            "value": "posthoc",
            "label": "2012m5事后断点"
          },
          {
            "value": "rolling",
            "label": "事先冻结的滚动起点"
          }
        ]
      },
      {
        "key": "c",
        "label": "固定正常数c",
        "type": "number",
        "default": 100
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [The Decline of the Variance Risk Premium: Evidence from Traded and Synthetic Options](https://www.chicagofed.org/-/media/publications/working-papers/2025/wp2025-17.pdf?sc_lang=en): 期权研究的样本、持有规则、滞后估计、标的价格回报分母、非线性敞口与风险调整；区分实交易和合成策略、beta 对冲和动态 delta 对冲. 2012m5 在研究中作为事后断点.
- [Forecasting: Principles and Practice, §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html): 时间序列交叉验证逐步向前移动预测起点，每轮训练仅使用该起点前可得的观测. 一步和多步预测分别设置评价窗口.

## Content relations
```json
[
  {
    "from": "zh-p25",
    "relation": "part_of",
    "to": "portfolio-models",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p25",
    "relation": "requires",
    "to": "zh-p12",
    "required_competence": "能够区分金额、回报分母和模型风险调整.",
    "reason": "这项能力进入本篇主任务，而非推荐阅读顺序."
  },
  {
    "from": "zh-p25",
    "relation": "uses_method",
    "to": "zh-p18",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p25",
    "relation": "illustrated_by",
    "to": "p25-method",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p25-method",
    "relation": "supported_by",
    "to": "PFH-CHIFED2025",
    "reason": "滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点.",
    "locator": "§2.3/2.3.1；§3.1；§3.2开头；§4.1/4.1.1；fn25–26；Table2讨论 printedp31/PDFp32",
    "scope": "滞后估计、样本构造、分母、非线性与风险调整；2012m5为事后断点."
  },
  {
    "from": "p25-oos",
    "relation": "supported_by",
    "to": "QS02-5.10",
    "reason": "先训练、后评价、逐次推进的样本外结构.",
    "locator": "§5.10完整滚动预测起点单元",
    "scope": "先训练、后评价、逐次推进的样本外结构."
  },
  {
    "from": "p25-oos",
    "relation": "illustrated_by",
    "to": "EXP-P25-EVIDENCE",
    "reason": "辨认期权研究的策略、分母、样本、滞后、事后断点与样本外检验."
  }
]
```

## Related entries
