# 股指期货的beta对冲：目标、张数与剩余风险

股指期货可以调整股票组合相对某个基准的共同市场敞口，同时保留原股票持仓. 合约张数由目标beta、组合市值和期货乘数决定，取整后留下共同敞口残差.

Entry: zh-p20 | Node: P20 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的指定完整单元，所选可选分支再读 optional_readings，记录题名、版本、定位及支持内容. 必要单元缺失时先取得等价可读原件，齐全后进入依赖它的讲解. 从950,000市值、beta1.15及目标0.25推导MES张数，比较34和35所对应的两种取整目标. 再核指数+4%、残差−2个百分点时的股票、期货及费用；说明峰值现金尚需哪些输入. 先用完整推理任务诊断，再让读者计算和解释；已掌握步骤直接跳过. 根据错误反馈，用迁移条件检验理解. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "entry_id": "zh-p20",
  "learning_task": "从950,000市值、beta1.15及目标0.25推导MES张数，比较34和35所对应的两种取整目标. 再核指数+4%、残差−2个百分点时的股票、期货及费用；说明峰值现金尚需哪些输入.",
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
  },
  "content_version": "2026-09-22-deep-review"
}
```

## Supplied entry
股指期货可以调整股票组合相对某个基准的共同市场敞口，同时保留原股票持仓. 合约张数由目标beta、组合市值和期货乘数决定，取整后留下共同敞口残差.

以下组合市值、beta、指数点位和费用为本文设定；MES合约规格采用CME真实规则：每点5美元，最小变动0.25点，即每张1.25美元. 日常结算与到期最终结算是不同的价格事件. [^mes]

<a id="p20-target"></a>
## 目标beta与共同敞口

股票组合市值950,000美元，相对指定指数的beta为1.15，目标降至0.25. 局部关系 $r_p\approx\beta_p r_m+\epsilon$ 将组合回报分为与指数共同变化的部分和残差. beta按组合与基准的协方差除以基准方差定义.[^capm]

本例将1.15作为输入. 实证估计须固定窗口、频率、币种、分红处理和组合权重规则，并报告估计误差；行业新闻、个股业绩和风格差异可留在 $\epsilon$ 中.

目标0.25保留正的市场敏感度，指数上涨和下跌都会传入组合. 固定张数的期货对冲调整局部斜率；若要求到期价格下限或指定日足额付款，应分别加入非线性保护或现金约束.

<a id="p20-quantity"></a>
## 对冲比率与整数张数

期货起点为5,000点，每张MES名义额 $5,000\times5=25,000$ 美元. 假定期货与基准的百分比变化近似一致，则指数上涨1%时，多头每张约赚250，空头约亏250. 待削减的共同敏感度为 $(1.15-0.25)\times950,000=855,000$ 美元.

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

分子为基准美元敞口，分母为每张期货的基准美元敞口，相除得到张数. $N^*<0$ 表示需要增加多头. 若期货相对基准的敏感度为 $\beta_f$，分母应改为 $\beta_f mF_0$.

真正下单只能选整数. 34张空头对应850,000美元名义额，剩余 beta 为

$$
\beta_{34}=1.15-\frac{850,000}{950,000}\approx0.255.
$$

35张留下 $1.15-875,000/950,000\approx0.229$. 对0.25的偏差，34张约为+0.005，35张约为−0.021；绝对误差最小取34张，要求beta不超过0.25则取35张.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P20-a.svg" alt="34与35张：离目标的距离不同，取整后仍需报告剩余beta. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">取整后的剩余beta</p><p class="pfh-figure-note">教学组合950,000美元；目标beta 0.25</p><ul class="pfh-legend"><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray=""/></svg><span>取整后的beta</span></li><li><svg viewBox="0 0 32 12" width="32" height="12" aria-hidden="true"><path d="M1 6H31" stroke="currentColor" stroke-width="3" stroke-dasharray="10 5"/></svg><span>目标beta</span></li></ul><p class="pfh-axis-label">beta（无量纲）；横轴为空头张数</p><div class="pfh-plot" style="--pfh-y-label-ch:5"><div class="pfh-y-ticks"><span style="top:100.0%">0.19</span><span style="top:75.0%">0.22</span><span style="top:50.000000000000014%">0.26</span><span style="top:25.00000000000002%">0.29</span><span style="top:0.0%">0.32</span></div><svg class="pfh-plot-svg" viewBox="95.0 105.0 670.0 240.0" preserveAspectRatio="none" aria-hidden="true"><line class="grid" x1="95" y1="345.0" x2="765" y2="345.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="285.0" x2="765" y2="285.0" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="225.00000000000003" x2="765" y2="225.00000000000003" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="165.00000000000006" x2="765" y2="165.00000000000006" vector-effect="non-scaling-stroke"/><line class="grid" x1="95" y1="105.0" x2="765" y2="105.0" vector-effect="non-scaling-stroke"/><polyline points="95.00,128.23 262.50,176.61 430.00,225.00 597.50,273.39 765.00,321.77" fill="none" stroke="currentColor" stroke-width="2.7" stroke-dasharray="" vector-effect="non-scaling-stroke"/><polyline points="95.00,234.68 262.50,234.68 430.00,234.68 597.50,234.68 765.00,234.68" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="10 5" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="128.22580645161293" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="262.5" cy="176.61290322580663" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="225.0000000000001" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="597.5" cy="273.38709677419365" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="321.77419354838713" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="95.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="262.5" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="430.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="597.5" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/><circle cx="765.0" cy="234.67741935483866" r="3.5" fill="white" stroke="currentColor" vector-effect="non-scaling-stroke"/></svg><div class="pfh-x-ticks"><span class="first" style="left:0.0%">32</span><span class="" style="left:50.0%">34</span><span class="last" style="left:100.0%">36</span></div></div></div></figure>

<a id="p20-cash"></a>
## 市值变化与结算现金

设指数上涨4%，期货从5,000升到5,200，组合残差为零. 股票增加 $950,000\times1.15\times4\%=43,700$ 美元；34张空头损益为 $34\times5\times(5,000-5,200)=-34,000$ 美元. 保留的正beta使两腿毛合计盈利9,700.

| 项目 | 金额（美元） | 是什么 |
|---|---:|---|
| 股票共同部分变化 | +43,700 | 股票市值变化，未假设已经卖出 |
| 期货结算损益 | −34,000 | 给定结算区间的现金变动 |
| 两腿毛合计 | +9,700 | 不等于可立即支付的现金 |
| 开仓费用 | −68 | 教学每张每边2美元 |
| 平仓费用 | −68 | 同一费用约定 |
| 两腿净合计 | +9,564 | 不含未给出的保证金融资成本 |

日结算将期货损益转为现金流，本段累计支出34,000美元. 初始保证金另记为占用资产；存入和返还在账户之间转移资产，损益与融资费用才改变净财富.[^money]

端点5,000和5,200决定累计期货损益，路径内的峰值现金需求还取决于每日结算与保证金要求. 股票盈利在卖出、结算并转入前不可用于补款. [保证金与对冲中的现金压力](/zh/notebook/hedging-margin-and-deadline-liquidity/)展开逐次资金检查.

<figure class="pfh-responsive-figure"><div class="svg-wide"><img src="/notebook/labs/p-ijklm/figures/P20-b.svg" alt="市值变化与结算现金并列：合计为正并不取消期货一侧的付款. "></div><div class="svg-narrow pfh-native"><p class="pfh-figure-title">市值变化与结算现金分开</p><p class="pfh-figure-note">指数+4%、残差0；分别列示股票市值与结算现金</p><p class="pfh-axis-label">单位：美元</p><ul class="pfh-cash-list"><li class="pfh-cash-row"><span class="pfh-cash-label">组合共同项</span><div class="pfh-cash-reading"><strong>43,700</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:100.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">组合残差</span><div class="pfh-cash-reading"><strong>0</strong><span>零值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.0%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">期货现金</span><div class="pfh-cash-reading"><strong>-34,000</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:77.80320366132723%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">费用</span><div class="pfh-cash-reading"><strong>-136</strong><span>负值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:0.3112128146453089%"></span></div></li><li class="pfh-cash-row"><span class="pfh-cash-label">净合计</span><div class="pfh-cash-reading"><strong>9,564</strong><span>正值</span></div><div class="pfh-cash-track" aria-hidden="true"><span style="width:21.88558352402746%"></span></div></li></ul></div></figure>

<a id="p20-lab"></a>
## 取整与残差实验

<div data-experiment-slot="EXP-P20-BETA"></div>

默认34张时，指数冲击从+4%改为−4%，共同项方向反转，费用保持支出. 组合残差为−2个百分点时，股票额外损失19,000美元；改为35张仅调整共同市场敏感度.

这些变式按给定beta做线性状态检查. 组合权重、基准代表性或换月条件变化时，应先更新风险关系，再比较平旧开新产生的名义额差、价差与费用.

<a id="p20-exercises"></a>
## 练习与解析

**解释题.** 有人计算 $950,000/25,000=38$ 张，然后说“这样就没有市场风险了”. 哪里错了？

38张抵消950,000美元基准敞口，原敞口为1,092,500美元，剩余142,500，beta为0.15. 该结果低于目标0.25. 若目标为零，理想张数为43.7，再按约束取整.

**迁移题.** 34张不变，指数上涨4%，组合残差−2个百分点，双边费用136，合并结果是多少？

股票变动 $43,700-19,000=24,700$，期货为−34,000，净额 $24,700-34,000-136=-9,436$ 美元.

[^mes]: CME Group，[Micro E-mini FAQ](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html)，Q2、Q5–6、Q9–10、Q14：乘数、tick、结算与保证金.
[^capm]: Andrew W. Lo，MIT 15.401，[CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf)，slides 6、16–18：beta及回归的身份.
[^money]: CME Group，[Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf)，pp1–3普通期货现金变动单元.

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
      "局部线性beta关系；期货相对基准的敏感度默认1",
      "端点损益不确定路径内峰值现金"
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
- [Micro E-mini Equity Index Futures: Frequently Asked Questions](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html): MES乘数为每指数点5美元，最小价格跳动为0.25点. FAQ分别说明合约代码、结算和保证金安排.
- [Money Calculations for CME-cleared Futures and Options](https://www.cmegroup.com/clearing/files/CME-Money-Calculations-Futures-and-Options.pdf): CME逐日结算金额的计算：当日成交头寸按成交价至结算价计量，期初头寸按前结算价至本结算价计量，并按相应合约单位和舍入规则换算现金.
- [MIT 15.401, Lecture 15–17: The CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf): CAPM与APT中的beta、因子投影及绩效评价方法.

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
