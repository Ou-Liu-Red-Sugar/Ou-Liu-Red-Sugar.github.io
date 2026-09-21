# 股指期货的beta对冲：目标、张数与剩余风险

从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里.

Entry: zh-p20 | Node: P20 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
请先实际读取本篇必读原件的指定完整单元，再围绕“从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里.”带我完成学习. 先让我自己判断方向、对象或基准，再让我逐步重建一项承重计算；不要先把答案全部说出. 选读分支只有我选中后才启用对应原件和输入. 每次解释都分清真实规则、教学假设、作者报告与本站复算. 逐事件核现金、负债、费用和剩余仓位；资金不足时停止已完成结果. 使用本包正文里的完整解析反馈我哪里错、为什么、如何迁移. 未来runtime_reading_log由你实际读取后填写，不能把作者或支持者日志当成自己的阅读. 不要接触账户或更新冻结数据.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p20",
  "learning_task": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里.",
  "required_readings": [
    {
      "source_id": "MA-MES",
      "title": "Micro E-mini Equity Index Futures FAQ",
      "authors": [
        "CME Group"
      ],
      "version": "2026-09-21访问版本",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Q2、Q5–6、Q9–10、Q14",
        "scope": "MES乘数、tick、结算与保证金的不同身份.",
        "purpose": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里."
      },
      "supports": "MES乘数、tick、结算与保证金的不同身份.",
      "limits": "不提供本例当前券商保证金、beta或实际成交."
    },
    {
      "source_id": "P-R04b",
      "title": "15.401 Finance Theory I: CAPM and APT",
      "authors": [
        "Andrew W. Lo",
        "MIT OpenCourseWare"
      ],
      "version": "Fall 2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides6、16–18，置于beta/回归完整单元中",
        "scope": "beta、因子投影与绩效评价的模型身份.",
        "purpose": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里."
      },
      "supports": "beta、因子投影与绩效评价的模型身份.",
      "limits": "旧讲义不当作当前实证；样本截距不证明技能."
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
        "purpose": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里."
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
        "id": "SIM-PI-BETA-01",
        "owner": "P20",
        "consumers": [
          "P20"
        ],
        "version": "final-20260921",
        "unit": {
          "money": "USD",
          "index": "points",
          "beta": "dimensionless",
          "contracts": "MES"
        },
        "identity": "Teaching beta-hedge case; MES multiplier is real, portfolio/beta/price/fees are teaching inputs.",
        "defaults": {
          "portfolio_value": 950000,
          "portfolio_beta": 1.15,
          "target_beta": 0.25,
          "futures_price": 5000,
          "multiplier_usd_per_point": 5,
          "selected_short_contracts": 34,
          "fee_per_contract_per_side": 2
        },
        "default_results": {
          "ideal_short_contracts": 34.2,
          "future_notional": 850000,
          "achieved_beta": 0.25526315789473675,
          "combined_gross_pnl_under_4pct_common_move": 9700,
          "roundtrip_fees": 136,
          "combined_net_pnl": 9564
        },
        "branch_boundaries": {
          "34_vs_35": "Compare residual beta error explicitly.",
          "margin": "Not supplied; do not infer from notional."
        }
      }
    ],
    "operational_details": {},
    "static_default_result": {
      "unit": "USD",
      "ideal": 34.199999999999996,
      "n": 34,
      "direction": "空头",
      "notional": 850000,
      "achieved_beta": 0.25526315789473675,
      "target": 0.25,
      "stock": 43700,
      "future": -34000,
      "fees": 136,
      "gross": 9700,
      "net": 9564,
      "required_margin": null,
      "limitation": "期货项是本次冲击的累计结算现金，不是保证金；未给中途价格，不能生成逐日路径."
    },
    "attachments": [],
    "default_scope": "core",
    "branch_rule": "复制或学习只带本篇及所选分支需要的附件，完整大数组只在shared中保存一次.",
    "case_scopes": {
      "SIM-PI-BETA-01": "core"
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
  }
}
```

## Supplied entry
我们先从一个容易混淆的目的开始：暂时不想承受那么多市场涨跌，并不等于不再看好手里的公司. 卖掉股票能直接减少风险，但也会改变公司组合；用股指期货，则可以先调整组合与某个指数共同变化的那一部分. 本篇要完成的任务是：从目标推出方向和张数，再把取整、剩余风险与现金要求放回同一个决定里.

这里的组合市值、beta、指数点位及费用都是教学输入，不是账户记录或当前报价. 合约单位采用 CME Micro E-mini S&P 500 期货（MES）的真实规格：每点5美元，最小变动0.25点，也就是每张1.25美元. 日常结算与到期最终结算不是同一个价格事件. [^mes]

<a id="p20-target"></a>
## 1. 对冲的是共同变化，不是把股票名称换成指数

设股票组合市值为950,000美元，相对指定指数的 beta 估计为1.15；希望在接下来的一段持有期，把这个共同敞口降到0.25. 可以先用局部关系 $r_p\approx\beta_p r_m+\epsilon$ 理解它：指数变动 $r_m$ 时，组合中约有 $\beta_p r_m$ 的共同部分，另有没有被该基准解释的部分 $\epsilon$. beta 的定义是协方差除以基准方差，不是“组合会准确涨跌指数的1.15倍”. [^capm]

真实研究还应写清估计窗口、日或月频率、币种、是否包含分红，以及组合权重是否在样本内改变. 本例直接给定1.15，不假装已经用一个真实组合重新估计. 行业新闻、个股业绩和风格差异都可能留在 $\epsilon$ 中；股指空头不会把这些风险自动出售出去.

还要问为什么目标是0.25. 它表达的是“仍保留一些市场上涨，也接受对应下跌”，而不是“保证下跌不超过某个金额”. beta 对冲主要调整局部斜率；它没有期权保护所提供的非线性下限. 若真正目标是某天必须有足额现金，那需要另做支付预算，不能让0.25这个数字代答.

<a id="p20-quantity"></a>
## 2. 从一元指数变化推到合约张数

假设期货起点为5,000点，一张 MES 的名义额是 $5,000\times5=25,000$ 美元. 这里先假设期货相对基准的百分比变化近似一致. 指数上涨1%时，一张多头大约盈利250美元，一张空头大约亏损250美元. 因此，需要降低的共同敏感度是 $(1.15-0.25)\times950,000=855,000$ 美元，而不是整个950,000美元.

令 $N$ 表示空头张数，$m$ 为每点乘数. 对一小段共同变动，对冲后的美元变化近似为

$$
\Delta W\approx(\beta_pV-NmF_0)r_m+V\epsilon.
$$

让共同部分等于目标 $\beta_*Vr_m$，就得到

$$
N^*=\frac{(\beta_p-\beta_*)V}{mF_0}
=\frac{(1.15-0.25)\times950,000}{5\times5,000}
=34.2.
$$

公式里的每一项都有单位：分子是“以基准衡量的美元敞口”，分母是“每张期货的基准美元敞口”，相除才是张数. 若目标 beta 高于原值，$N^*$ 为负，意思是增加多头，而不是去卖更多空头. 若基准与期货不是近似一比一共同变化，还需另估期货的相对敏感度，不能继续不加说明地使用上式.

真正下单只能选整数. 34张空头对应850,000美元名义额，剩余 beta 为

$$
\beta_{34}=1.15-\frac{850,000}{950,000}=0.2552631579.
$$

35张则留下 $1.15-875,000/950,000=0.2289473684$. 两者相对0.25的偏差分别约0.00526和−0.02105，因此在“绝对 beta 误差最小”的这项目标下，34张更合适. 若目标改成“绝不能高于0.25”，取整选择可能变为35张；整数答案取决于风险约束，而不只是计算器的舍入键.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P20-a.svg" alt="34与35张：离目标的距离不同，取整后仍需报告剩余beta. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">取整以后，目标并未消失</p><p class="pfh-figure-note">教学组合950,000美元；目标beta 0.25</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>取整后的beta</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>目标beta</span></li></ul><p class="pfh-axis-label">beta（无量纲）；横轴为空头张数</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">0.19</span><span style="top:75.0%">0.22</span><span style="top:50.000000000000014%">0.26</span><span style="top:25.00000000000002%">0.29</span><span style="top:0.0%">0.32</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.00000000000003" x2="765" y2="225.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000006" x2="765" y2="165.00000000000006" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 262.50,176.61 430.00,225.00 597.50,273.39 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,234.68 262.50,234.68 430.00,234.68 597.50,234.68 765.00,234.68" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.22580645161293" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="262.5" cy="176.61290322580663" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="225.0000000000001" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="597.5" cy="273.38709677419365" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.77419354838713" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="262.5" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="597.5" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">32</span><span class="" style="left:50.0%">34</span><span class="last" style="left:100.0%">36</span></div></div></div></figure>

<a id="p20-cash"></a>
## 3. 一次上涨检查：组合赚钱，为什么还需要付款？

现在只做一个给定状态检查：指数上涨4%，期货也从5,000升到5,200，组合残差暂设为零. 股票增加 $950,000\times1.15\times4\%=43,700$ 美元；34张空头的期货变化为 $34\times5\times(5,000-5,200)=-34,000$ 美元. 合计仍赚9,700，因为本来就保留了正 beta.

| 项目 | 金额（美元） | 是什么 |
|---|---:|---|
| 股票共同部分变化 | +43,700 | 股票市值变化，未假设已经卖出 |
| 期货结算损益 | −34,000 | 给定结算区间的现金变动 |
| 两腿毛合计 | +9,700 | 不等于可立即支付的现金 |
| 开仓费用 | −68 | 教学每张每边2美元 |
| 平仓费用 | −68 | 同一费用约定 |
| 两腿净合计 | +9,564 | 不含未给出的保证金融资成本 |

日结算把期货亏损兑现为现金流，抵押品的账户转移又是另一笔记录. 34,000美元不是损失以后再交一次“亏损保证金”，也不是850,000名义本金的付款；它是价格变化产生的损益. 初始保证金则是为履约占用的资产，原则上不能当作一笔立即消失的费用. [^money]

我们没有这一假设组合的实际保证金安排，也没有5,000到5,200之间的逐日价格路径，所以只能确认这一段累计现金变化，不能凭端点画出“最高追加资金”. 若某个日间截止前没有足够可用现金，股票账面盈利也未必能及时转过来. 此时应先减小规模、增加事先确定的流动性或选择直接卖股，而不是把净赚9,700当成资金可行的证明. P23会把这一步展开成完整事件账.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P20-b.svg" alt="市值变化与结算现金并列：合计为正并不取消期货一侧的付款. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">市值变化与结算现金分开</p><p class="pfh-figure-note">指数+4%、残差0；金额不能当作可用流动性</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">组合共同项</span><div class="pfh-cash-reading"><strong>43,700.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">组合残差</span><div class="pfh-cash-reading"><strong>0.000</strong><span>零值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货现金</span><div class="pfh-cash-reading"><strong>-34,000.000</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:77.80320366132723%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">费用</span><div class="pfh-cash-reading"><strong>-136.000</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.3112128146453089%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净合计</span><div class="pfh-cash-reading"><strong>9,564.000</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:21.88558352402746%"></span></div></li></ul></div></figure>

<a id="p20-lab"></a>
## 4. 用实验检查残差，而不是寻找一个完美张数

<div data-experiment-slot="EXP-P20-BETA"></div>

先保留默认34张，把指数冲击从上涨4%切到下跌4%. 期货方向反过来，净结果不再是同一个正数；费用依然支出. 再把组合残差改成−2个百分点，观察股票额外损失19,000美元并没有被期货对冲掉. 最后比较34与35张：35张会略微降低共同市场敏感度，但不能消除这个个股/行业残差.

实验显示的是透明的线性变式，不是重新估出的统计模型. 它适合回答“如果这组敏感度成立，会发生什么”，不能回答“beta未来一定是多少”. 一旦组合权重明显改变、指数代表性变差，或者临近换月，先更新风险关系，再决定是否交易. 换月意味着平旧合约、开新合约、支付相关价差与费用；一张旧合约的名义额与新合约未必相同.

<a id="p20-exercises"></a>
## 5. 自测与解析

**解释题.** 有人计算 $950,000/25,000=38$ 张，然后说“这样就没有市场风险了”. 哪里错了？

38张抵消的是950,000美元的基准敞口，而组合给定的原基准敞口是1,092,500美元. 即使期货跟踪完全一致，仍留下142,500美元，beta为0.15，不是零；而题目要求0.25，又被多对冲了. 正确次序是先确定目标，再算需要减少的差额. 若真要 beta 零，理想张数是43.7，还需另做取整与资金检查.

**迁移题.** 34张不变，指数上涨4%，组合残差−2个百分点，双边费用仍136. 合并结果是多少？能否由这个结果评价所有未来路径？

股票变动为 $43,700-19,000=24,700$；期货仍为−34,000；净额是 $24,700-34,000-136=-9,436$ 美元. 这说明共同风险缩小并不消除残差风险. 它只评价一个给定状态；若把残差设置为另一个值，或把指数冲击改为下跌，结果会变. 还没提供的资金轨不能由该终点补出来.

**完成标准.** 不看答案，写出基准、目标、理想张数、采用整数、剩余敞口和现金缺口需要的材料. 能把这六项连起来，才真正完成了本篇，而不只是会套张数公式.

[^mes]: CME Group，[Micro E-mini FAQ](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html)，Q2、Q5–6、Q9–10、Q14：乘数、tick、结算与保证金. 数例是本站教学设定.
[^capm]: Andrew W. Lo，MIT 15.401，[CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf)，slides 6、16–18：beta及回归的身份.
[^money]: CME Group，[Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，pp1–3普通期货现金变动单元；不据此推定客户具体保证金或截止时间.

<script src="/notebook/labs/p-ijklm/reader-adapter.js" defer></script>


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P20-BETA",
    "node_id": "P20",
    "title": "股指期货的beta对冲：目标、张数与剩余风险",
    "anchor": "p20-lab",
    "description": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里.",
    "inputs": {
      "frozen_ids": [
        "SIM-PI-BETA-01"
      ],
      "operational_keys": [],
      "units": "逐字段以shared/final-shared-inputs.json与operational-inputs.json为准"
    },
    "outputs": {
      "default_location": "agent_packet.supplied_inputs.static_default_result"
    },
    "algorithm": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/engine.js; P26 consumes QT24 outputs without rerunning simulation.",
    "views": [
      "目标与取整后敞口",
      "共同项、残差与结算现金"
    ],
    "boundaries": [
      "真实规格不等于当前保证金或成交",
      "不得从终点补造未提供的资金路径",
      "输入无效即停止，不能沿用旧结果"
    ],
    "static_equivalent": {
      "figures": [
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P20-a.svg",
        "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/figures/P20-b.svg"
      ],
      "body_tables": true,
      "event_data": []
    },
    "input_controls": [
      {
        "key": "contracts",
        "label": "空头张数（负数为多头）",
        "type": "number",
        "default": 34
      },
      {
        "key": "target",
        "label": "目标beta",
        "type": "number",
        "default": 0.25
      },
      {
        "key": "move",
        "label": "指数变动（小数）",
        "type": "number",
        "default": 0.04
      },
      {
        "key": "residual",
        "label": "组合残差（小数）",
        "type": "number",
        "default": 0
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-ijklm/shared/final-shared-inputs.json"
  }
]
```

## Sources
- [Micro E-mini Equity Index Futures: Frequently Asked Questions](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html): MES每指数点5美元及结算/保证金基本安排；本篇价格和保证金金额均为教学设定.

P-E 使用范围：MES每点5美元、0.25点跳动、代码/结算与保证金可变；不提供本文教学费率或当前保证金.

本批读取范围：MES乘数、tick、结算与保证金的不同身份.
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): 当日成交与期初头寸的结算现金及正常舍入；不采用无关分数报价例的印刷错误，不提供CL保证金水平.

本批读取范围：逐日价格变动、乘数、现金与结算口径.
- [MIT 15.401, Lecture 15–17: The CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf): MIT 15.401, Lecture 15–17: The CAPM and APT

本批读取范围：beta、因子投影与绩效评价的模型身份.

## Content relations
```json
[
  {
    "from": "zh-p20",
    "relation": "part_of",
    "to": "portfolio-futures",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p20",
    "relation": "uses_method",
    "to": "zh-p06",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p20",
    "relation": "uses_method",
    "to": "zh-p08",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p20",
    "relation": "uses_method",
    "to": "zh-p10",
    "reason": "调用局部概念；本篇同时给出完成算例所需的最小说明."
  },
  {
    "from": "zh-p20",
    "relation": "illustrated_by",
    "to": "p20-quantity",
    "reason": "同一冻结对象和明确身份的算例."
  },
  {
    "from": "p20-quantity",
    "relation": "supported_by",
    "to": "MA-MES",
    "reason": "MES乘数、tick、结算与保证金的不同身份.",
    "locator": "Q2、Q5–6、Q9–10、Q14",
    "scope": "MES乘数、tick、结算与保证金的不同身份."
  },
  {
    "from": "p20-target",
    "relation": "supported_by",
    "to": "P-R04b",
    "reason": "beta、因子投影与绩效评价的模型身份.",
    "locator": "slides6、16–18，置于beta/回归完整单元中",
    "scope": "beta、因子投影与绩效评价的模型身份."
  },
  {
    "from": "p20-cash",
    "relation": "supported_by",
    "to": "MD-S05",
    "reason": "逐日价格变动、乘数、现金与结算口径.",
    "locator": "pp1–3普通期货变动现金完整单元",
    "scope": "逐日价格变动、乘数、现金与结算口径."
  },
  {
    "from": "p20-lab",
    "relation": "illustrated_by",
    "to": "EXP-P20-BETA",
    "reason": "从基准共同风险推出期货方向与整数张数，把残差与结算现金保留在结论里."
  }
]
```

## Related entries
