# 永续合约：无到期日下的价格锚定与资金费

从一周期现金解释永续价格锚定，再读资金费的两层限幅、事件资格和改频，分清模型与场所规则.

Entry: zh-m24 | Node: M24 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《永续合约：无到期日下的价格锚定与资金费》，面向有充分数学背景的高年级本科生至研究生. 先实际读取随包 required_readings 的完整指定单元，记录版本、范围与所支持内容；选择选读分支时，再读取其指定材料. 动态页面换版时保留本文具名版本的身份；缺少原文则寻找正式等价全文，仍缺失时指出该单元.

从一单位永续多头的现金流推导有限期递推，说明无泡沫条件作用于哪个终端余项. 按Bybit具名规则计算内层调整、外层限幅及资金费，分别处理当期事件与下一周期改频；保留结算前后五秒的资格不确定分支.

先用一项完整推导或分析诊断我的起点，跳过已掌握步骤. 让我先计算或判断，再解释错误与机制，最后改变一个条件检验迁移.

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
      "source_id": "MOD-PERP-PAPER",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/2310.11771v2",
        "verified_access_at": "2026-09-21"
      },
      "version": "arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03",
      "required_unit": {
        "locator": "§2两币种/现金账户/Q_a；§3完整一周期现金与有限递推、终端余项；无穷条件只作边界",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射."
      },
      "supports": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
      "id": "M24-READ-01",
      "title": "Perpetual Futures Pricing",
      "authors": [
        "Damien Ackerer",
        "Julien Hugonnier",
        "Urban Jermann"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MOD-BYBIT-FUNDING",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate",
        "verified_access_at": "2026-09-21"
      },
      "version": "updated 2026-05-22 13:52:11",
      "required_unit": {
        "locator": "Funding Rate Calculation；Interest Rate；Average Premium Index及分钟加权；Funding Rate Upper/Lower Limit与min限制",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同."
      },
      "supports": "资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同.",
      "id": "M24-READ-02",
      "title": "Introduction to Funding Rate",
      "authors": [
        "Bybit"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "PI-BYBIT-FEE",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bybit.com/en/help-center/article/Funding-fee-calculation",
        "verified_access_at": "2026-09-21"
      },
      "version": "updated 2026-05-12 12:38:20",
      "required_unit": {
        "locator": "What Is/When Is/How Is Funding Fee；资格±5秒说明；扣款顺序；USDT与Inverse费用例；Trade History符号及触限改频说明",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定."
      },
      "supports": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
      "id": "M24-READ-03",
      "title": "Funding Fee Calculation",
      "authors": [
        "Bybit"
      ],
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "scope": "M24",
    "experiment_ids": [
      "EXP-MHIJ-M24-FUNDING-01"
    ],
    "groups": {
      "EXP-MHIJ-M24-FUNDING-01": {
        "owner": "M24",
        "unit_contract": {
          "rates": "decimal fractions per funding event",
          "position_linear": "BTC",
          "mark_linear": "USDT/BTC",
          "fee_linear": "USDT",
          "position_inverse": "USD contract quantity",
          "mark_inverse": "USD/BTC",
          "fee_inverse": "BTC"
        },
        "identity": "Current Bybit funding formulas/rules plus explicit teaching premium aggregates and teaching IMR/MMR; no historical funding path or live symbol parameters.",
        "source_ids": [
          "MOD-PERP-PAPER",
          "MOD-BYBIT-FUNDING",
          "PI-BYBIT-FEE"
        ],
        "model_scope": {
          "paper_formula": "One-period finite recursion only: (1+kappa_t) f_t = E_t^{Q_a}[f_{t+1}] + (kappa_t-iota_t) x_t.",
          "infinite_horizon": "Boundary note only: dropping the terminal remainder requires named no-bubble and integrability conditions; proof is not part of M24."
        },
        "inputs": {
          "selected_interval_hours": 8,
          "daily_interest_fraction": 0.0003,
          "inner_clamp_absolute": 0.0005,
          "normal_limit_coefficient": 0.75,
          "teaching_IMR": 0.01,
          "teaching_MMR": 0.005,
          "premium_aggregates": [
            0.0002,
            0.001,
            -0.001,
            0.01
          ],
          "official_linear_example": {
            "quantity_btc": 10,
            "mark_usdt_per_btc": 8000,
            "rate": 0.0001
          },
          "official_inverse_example": {
            "quantity_usd": 10000,
            "mark_usd_per_btc": 8000,
            "rate": 0.0001
          }
        },
        "formulas": {
          "interest_per_event": "I = 0.0003 / (24 / interval_hours)",
          "inner_adjustment": "A = clamp(I - P, -0.0005, +0.0005)",
          "normal_limit": "L = min(coefficient * (IMR - MMR), MMR)",
          "funding_rate": "F = clamp(P + A, -L, +L)",
          "linear_fee": "fee_USDT = quantity_BTC * mark_USDT_per_BTC * F",
          "inverse_fee": "fee_BTC = quantity_USD / mark_USD_per_BTC * F"
        },
        "default_results": {
          "interest_8h": 0.0001,
          "normal_limit": 0.00375,
          "funding_by_premium": [
            {
              "premium": 0.0002,
              "funding": 0.0001,
              "hits_limit": false
            },
            {
              "premium": 0.001,
              "funding": 0.0005,
              "hits_limit": false
            },
            {
              "premium": -0.001,
              "funding": -0.0005,
              "hits_limit": false
            },
            {
              "premium": 0.01,
              "funding": 0.00375,
              "hits_limit": true
            }
          ],
          "linear_positive_rate_long_pays_usdt": 8,
          "inverse_positive_rate_long_pays_btc": 0.000125
        },
        "branch_boundaries": {
          "parameter_domain": "IMR >= MMR > 0; normal limit must use the full min expression.",
          "limit_hit": "If the funding rate reaches the preset upper/lower limit at settlement, subsequent settlement frequency switches to hourly. The current capped 8h result remains valid only for that event.",
          "hourly_interest_if_same_daily_interest": 1.25e-05,
          "next_event": "Requires a new premium path/inputs and then-current limits; do not reuse the old 8h funding value.",
          "eligibility": "Holding at the actual funding time controls payment/receipt, but opening/closing within ±5 seconds does not guarantee inclusion or exclusion.",
          "signs": "Positive funding: long cash outflow, short inflow. Trade-history fee signs are a separate display convention and must be labelled.",
          "no_annualization": true
        }
      }
    },
    "attached_frozen_file": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368",
      "reading_scope": "只取本篇及所选分支groups，其他字段不重复内嵌"
    },
    "selection": {
      "default": "main",
      "available": [
        "main",
        "all"
      ],
      "chosen": "all"
    }
  },
  "entry_id": "zh-m24",
  "node_id": "M24",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "all",
  "export_scope": "完整本篇，含明确标为选读的分支；仅在采用选读时升级其具名原文为必读.",
  "source_paths": {
    "data/m-hij-final-shared-inputs.json": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static/M24.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M24.html"
  },
  "experiment_ids": [
    "EXP-MHIJ-M24-FUNDING-01"
  ]
}
```

## Supplied entry
<a id="m24-purpose"></a>
## 一、无到期日下的价格锚

期货临近到期时，交割或结算将合约与约定标的连接起来；交付对象、时点和交易条件一致时，替代交易路径约束其价格差. 永续合约没有预定到期日，通常通过持仓期间的资金费将价格偏离转化为持有成本.

在Bybit规则中，多空持有人按指定时点收付资金费. 持仓能否继续取决于账户保证金和履约条件，资金费也会改变可用资金. 以下先计算一周期现金，再比较定价模型与实际费率规则. [^M24-fee]

<a id="m24-cash"></a>
## 二、永续合约的一周期现金流

假设以 USDT 计价，持有多头的数量为 $q$ BTC. 价格从 $f_0$ 到 $f_1$ 的合约价差结果是 $q(f_1-f_0)$，而资金费是另一项现金. 若该次最终资金费率为 $F$，按当次标记价 $m$ 计持仓价值，则多头的资金费现金为 $-qmF$，空头为 $+qmF$. 这里现金流入记正；交易记录里“正的费用表示已支付”是另一种展示符号，不应混着加总. [^M24-fee]

价格损益与资金费方向可以不同：价格上涨时，多头可能获得价差收益并支付资金费；空头则可能收到资金费，同时承担更大的价差损失.

合约相对现货溢价提高多头的持有成本时，多头需求受到抑制，空头供给受到激励，从而压低溢价. 交易摩擦、资金限制、费率上限及其他持仓需求可以使偏离持续. [^M24-paper]

<a id="m24-model"></a>
## 三、递推定价与无泡沫条件

在 Ackerer、Hugonnier 与 Jermann 的离散时间模型里，$a$ 是计价与收付货币，$b$ 是标的货币；$x_t$ 表示一单位 $b$ 值多少 $a$，$f_t$ 是同尺度的永续报价. 现金账户满足 $B_{a,t+1}=(1+r_{a,t})B_{a,t}$，其中 $r_{a,t}>-1$ 在时点 $t$ 已知. 我们采用与市场资产和该合约定价相容的 $Q_a$. [^M24-paper]

令 $\kappa_t>0$，它衡量本模型对价格偏离的收费强度；$\iota_t$ 是另一项已知的利息系数. 两者在 $t$ 时已知. 持有一单位多头，从 $t$ 到 $t+1$ 的 $a$ 币现金为

$$
\begin{aligned}
\Delta C_{t+1}
&=(f_{t+1}-f_t)\\
&\quad-\kappa_t(f_t-x_t)-\iota_t x_t.
\end{aligned}
$$

第一项是价格变化；第二项让偏离进入持有现金；第三项是该模型设定的利息部分. 合约初始价值设为零；保证金另属履约资金安排. 在无套利定价关系下，一周期贴现现金的条件期望为零：

$$
0=\mathbb{E}_t^{Q_a}\!\left[\frac{\Delta C_{t+1}}{1+r_{a,t}}\right].
$$

由于分母在 $t$ 已知且为正，可以把它提出期望，再移项，得到

$$
\begin{aligned}
(1+\kappa_t)f_t
&=\mathbb{E}_t^{Q_a}[f_{t+1}]+(\kappa_t-\iota_t)x_t,\\
f_t
&=\frac{\mathbb{E}_t^{Q_a}[f_{t+1}]}{1+\kappa_t}
 +\frac{\kappa_t-\iota_t}{1+\kappa_t}x_t.
\end{aligned}
$$

今天的报价同时受未来合约价值和本期现金安排约束. 当$\iota_t=0$时，当前价是条件期望的未来价与现货价的加权平均；$\iota_t\ne0$时，现货项另含利息调整，两个系数之和相应改变. [^M24-paper]

继续向有限的 $T$ 展开，仍有一个乘上相应系数的 $f_T$ 余项. 这里没有到期结算把它设成 $x_T$，所以该项不能省略. 无穷期表示还需要论文具名的无泡沫和可积性条件；一周期递推可以单独使用，而进一步取极限需要这些条件.

<a id="m24-rule"></a>
## 四、场所资金费率规则

Bybit 2026-05-22 的资金费率说明采用一个溢价指数和利息项. 溢价并非任取“最新合约价减现货价”：其基础指标用冲击买卖价格与指数比较，再对周期内分钟观测加权，临近结算的权重更大. 八小时例的加权形式是

$$
\bar P=\frac{\sum_{j=1}^{480}jP_j}{\sum_{j=1}^{480}j}.
$$

本例给定汇总后的教学$\bar P$；完整历史复算则需要各分钟的溢价指数及权重. [^M24-rate]

为免与论文的永续报价 $f_t$ 混淆，下面用 $F$ 表示**每次资金费率**，所有百分数先换成小数. 定义 $\operatorname{clamp}(z,l,u)=\min(\max(z,l),u)$. 所选常规规则为

$$
\begin{aligned}
I&=\frac{0.03\%}{24/h},\\
A&=\operatorname{clamp}(I-\bar P,-0.05\%,+0.05\%),\\
L&=\min\{0.75(\mathrm{IMR}-\mathrm{MMR}),\mathrm{MMR}\},\\
F&=\operatorname{clamp}(\bar P+A,-L,+L).
\end{aligned}
$$

$h$ 是该事件的小时长度；IMR、MMR 在这项常规规则中指所涉币对最低风险档位的要求. 特定交易对的利息项可以为零，平台也可调整系数、限幅与频率. [^M24-rate]

现在只用教学 IMR=1%、MMR=0.5%、$h=8$. 这给出 $I=0.01\%$，$L=\min(0.375\%,0.5\%)=0.375\%$：

| 教学平均溢价 $\bar P$ | 内层调整 $A$ | 限幅前 $\bar P+A$ | 本次 $F$ | 事件说明 |
|---:|---:|---:|---:|---|
| 0.02% | −0.01% | 0.01% | 0.01% | 未触及外限 |
| 0.10% | −0.05% | 0.05% | 0.05% | 未触及外限 |
| −0.10% | +0.05% | −0.05% | −0.05% | 收付方向反转 |
| 1.00% | −0.05% | 0.95% | 0.375% | 本次八小时事件触及上限 |

当$I-\bar P$处于内层上下限内，$\bar P+(I-\bar P)=I$，费率形成平坦区. 外层上限取两项较小值；IMR与MMR之差较大时，MMR本身会成为约束.

<a id="m24-event"></a>
## 五、资金费结算资格

原文的线性例是 10 BTC、标记价 8,000 USDT/BTC、正费率 0.01%，因此持仓价值 80,000 USDT，多头支付 $80{,}000\times0.01\%=8$ USDT. 反向例的数量是 10,000 USD，标记价 8,000 USD/BTC，先除得 1.25 BTC，再乘0.01%，支付0.125mBTC. 两笔分别以USDT和BTC结算. [^M24-fee]

原文还给出两条会改变实验结果的事件规则. **本次结算触及预设上限或下限后，后续结算频率转为每小时**；若仍采用相同每日利息，下一小时的利息项应为 $0.03\%/24=1.25\times10^{-3}\%$，但下一次最终费率仍需新的溢价及当时参数，不能把刚才的 0.375% 连续复制. 另一方面，在资金费时点前后五秒内开平仓，原文明确不保证该笔是否被计入. [^M24-fee]

资金费先从可用余额扣除；不足时扣头寸初始保证金，逐仓下可能使强平阈值靠近标记价. 于是同一笔资金费既改变持仓结果，也可能缩小继续持有的空间. 评估现货加永续的策略时，还要同时列价格损益、费用与资金；单次正资金费只是其中一项现金流.[^M24-fee]

<a id="m24-explore"></a>
## 六、限幅、改频与现金结果

<div data-experiment-slot="EXP-MHIJ-M24-FUNDING-01"></div>

资金费只在该结算时点持仓被计入时发生；资格不确定时，现金结果保留为“计入则按费率收付、未计入则为0”的条件分支. 本例固定规则系数0.75，只改变教学设定的IMR/MMR、溢价和事件分支. 外层限幅与下一周期频率变化分别处理：本次事件仍按当期结算规则，新的频率用于后续周期.

<a id="m24-exercises"></a>
## 七、模型、规则与现金的检验

**题一：溢价从0.02%升至0.04%，为何费率仍可等于0.01%？**

解析：第二点的内层调整是 $0.01\%-0.04\%=-0.03\%$，未越过−0.05%内限；与溢价相加仍为0.01%，外限也不约束. 平台规则有分段结构，不能只画斜率为一的直线.

**题二：在1%溢价的事件里，多头是否从此每八小时必付0.375%？**

解析：不是. 本次选定八小时事件按给定输入得到0.375%；触限后的频率变化及新周期取样必须重新处理. 即便持仓继续，资格、规模、标记价与下一次费率也都不能由这一行确定.

**题三：若一笔线性空头确认在资金费事件内，持仓价值80,000 USDT、费率−0.05%，应记什么现金？**

解析：负费率意味着空头支付多头. 空头现金为 $80{,}000\times(-0.05\%)=-40$ USDT. Trade History以正费用表示支出，现金流账以负号表示支出.

**题四：论文中的“零进入价值”能否支持零保证金交易？**

解析：不能. 它用于推导合约未来现金的定价约束；保证金、交易费、融资与清算是另外的制度要求. 无套利条件期望也不是现实期望利润为零的断言. 先把这些对象分开，永续的现金安排才不会被误写成免费持有标的.

[^M24-fee]: **Bybit，Funding Fee Calculation**，updated 2026-05-12 12:38:20. [原文](https://www.bybit.com/en/help-center/article/Funding-fee-calculation). 定位：What Is/When Is/How Is Funding Fee；资格±5秒说明；扣款顺序；USDT与Inverse费用例；Trade History符号及触限改频说明. 采用范围：事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.

[^M24-paper]: **Ackerer / Hugonnier / Jermann，Perpetual Futures Pricing**，arXiv 2310.11771v2; posted 2024-09-04; manuscript 2024-09-03. [原文](https://arxiv.org/pdf/2310.11771v2). 定位：离散时间§2完整模型；§3一周期现金、有限递推及终端余项；无泡沫/可积性只作边界；§4开头至逆向现金与Q_b为M25选读. 采用范围：两币种现金账户、风险中性条件现金与有限递推. inverse头寸方向见M25映射.

[^M24-rate]: **Bybit，Introduction to Funding Rate**，updated 2026-05-22 13:52:11. [原文](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate). 定位：Funding Rate Calculation；Interest Rate；Average Premium Index及分钟加权；Funding Rate Upper/Lower Limit与min限制. 采用范围：资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>

## Additional teaching material
### 交互静态结果

<div class="inline-experiment"><a href="https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M24-FUNDING-01">打开这一实验</a><p>固定本次8小时事件、规则系数0.75、教学IMR1%/MMR0.5%、完整min外限0.375%.</p><div class="table-wrap"><table><thead><tr><th scope="col">平均溢价</th><th scope="col">利息项I</th><th scope="col">内夹调整</th><th scope="col">最终资金率</th><th scope="col">本事件触限</th></tr></thead><tbody><tr><td>0.020%</td><td>0.010%</td><td>-0.010%</td><td>0.010%</td><td>否</td></tr><tr><td>0.100%</td><td>0.010%</td><td>-0.050%</td><td>0.050%</td><td>否</td></tr><tr><td>-0.100%</td><td>0.010%</td><td>0.050%</td><td>-0.050%</td><td>否</td></tr><tr><td>1.000%</td><td>0.010%</td><td>-0.050%</td><td>0.375%</td><td>是；后续小时事件</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th scope="col">官方费用例</th><th scope="col">数量/标记价</th><th scope="col">正0.01%时多头现金</th></tr></thead><tbody><tr><td>USDT线性</td><td>10 BTC / 8,000 USDT/BTC</td><td>−8 USDT</td></tr><tr><td>BTC反向</td><td>10,000 USD / 8,000 USD/BTC</td><td>−0.000125 BTC</td></tr></tbody></table></div><p>触限后，若日利息设置不变，1小时I为0.00125%；下一资金费率仍需新的溢价和参数.结算前后5秒开平仓的计入资格可能不确定；表中现金流入为正.</p></div>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MHIJ-M24-FUNDING-01",
    "title": "一笔资金费：函数、资格与下一事件",
    "anchor": "m24-explore",
    "description": "Bybit具名规则 + 已汇总教学溢价. 规则系数0.75固定；IMR/MMR与溢价为透明教学输入. 不是历史资金费率或当前币对参数.",
    "owner": "M24",
    "data_identity": "Current Bybit funding formulas/rules plus explicit teaching premium aggregates and teaching IMR/MMR; no historical funding path or live symbol parameters.",
    "source_ids": [
      "MOD-PERP-PAPER",
      "MOD-BYBIT-FUNDING",
      "PI-BYBIT-FEE"
    ],
    "units": {
      "rates": "decimal fractions per funding event",
      "position_linear": "BTC",
      "mark_linear": "USDT/BTC",
      "fee_linear": "USDT",
      "position_inverse": "USD contract quantity",
      "mark_inverse": "USD/BTC",
      "fee_inverse": "BTC"
    },
    "inputs": {
      "selected_interval_hours": 8,
      "daily_interest_fraction": 0.0003,
      "inner_clamp_absolute": 0.0005,
      "normal_limit_coefficient": 0.75,
      "teaching_IMR": 0.01,
      "teaching_MMR": 0.005,
      "premium_aggregates": [
        0.0002,
        0.001,
        -0.001,
        0.01
      ],
      "official_linear_example": {
        "quantity_btc": 10,
        "mark_usdt_per_btc": 8000,
        "rate": 0.0001
      },
      "official_inverse_example": {
        "quantity_usd": 10000,
        "mark_usd_per_btc": 8000,
        "rate": 0.0001
      }
    },
    "outputs": {
      "interest_8h": 0.0001,
      "normal_limit": 0.00375,
      "funding_by_premium": [
        {
          "premium": 0.0002,
          "funding": 0.0001,
          "hits_limit": false
        },
        {
          "premium": 0.001,
          "funding": 0.0005,
          "hits_limit": false
        },
        {
          "premium": -0.001,
          "funding": -0.0005,
          "hits_limit": false
        },
        {
          "premium": 0.01,
          "funding": 0.00375,
          "hits_limit": true
        }
      ],
      "linear_positive_rate_long_pays_usdt": 8,
      "inverse_positive_rate_long_pays_btc": 0.000125
    },
    "formulas": {
      "interest_per_event": "I = 0.0003 / (24 / interval_hours)",
      "inner_adjustment": "A = clamp(I - P, -0.0005, +0.0005)",
      "normal_limit": "L = min(coefficient * (IMR - MMR), MMR)",
      "funding_rate": "F = clamp(P + A, -L, +L)",
      "linear_fee": "fee_USDT = quantity_BTC * mark_USDT_per_BTC * F",
      "inverse_fee": "fee_BTC = quantity_USD / mark_USD_per_BTC * F"
    },
    "branch_boundaries": {
      "parameter_domain": "IMR >= MMR > 0; normal limit must use the full min expression.",
      "limit_hit": "If the funding rate reaches the preset upper/lower limit at settlement, subsequent settlement frequency switches to hourly. The current capped 8h result remains valid only for that event.",
      "hourly_interest_if_same_daily_interest": 1.25e-05,
      "next_event": "Requires a new premium path/inputs and then-current limits; do not reuse the old 8h funding value.",
      "eligibility": "Holding at the actual funding time controls payment/receipt, but opening/closing within ±5 seconds does not guarantee inclusion or exclusion.",
      "signs": "Positive funding: long cash outflow, short inflow. Trade-history fee signs are a separate display convention and must be labelled.",
      "no_annualization": true
    },
    "static_equivalent_html": "<p>固定本次8小时事件、规则系数0.75、教学IMR1%/MMR0.5%、完整min外限0.375%.0.75按本批所读规则固定，不作为教学滑杆.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">平均溢价</th><th scope=\"col\">利息项I</th><th scope=\"col\">内夹调整</th><th scope=\"col\">最终资金率</th><th scope=\"col\">本事件触限</th></tr></thead><tbody><tr><td>0.020%</td><td>0.010%</td><td>-0.010%</td><td>0.010%</td><td>否</td></tr><tr><td>0.100%</td><td>0.010%</td><td>-0.050%</td><td>0.050%</td><td>否</td></tr><tr><td>-0.100%</td><td>0.010%</td><td>0.050%</td><td>-0.050%</td><td>否</td></tr><tr><td>1.000%</td><td>0.010%</td><td>-0.050%</td><td>0.375%</td><td>是；后续小时事件</td></tr></tbody></table></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">官方费用例</th><th scope=\"col\">数量/标记价</th><th scope=\"col\">正0.01%时多头现金</th></tr></thead><tbody><tr><td>USDT线性</td><td>10 BTC / 8,000 USDT/BTC</td><td>−8 USDT</td></tr><tr><td>BTC反向</td><td>10,000 USD / 8,000 USD/BTC</td><td>−0.000125 BTC</td></tr></tbody></table></div><p>触限后，若日利息设置不变，1小时I为0.00125%；下一资金费率仍需新的溢价和参数.±5秒开平仓是否计入不能保证. 正资金率与历史fee的正支出符号分开.</p>",
    "frozen_reference": {
      "file": "data/m-hij-final-shared-inputs.json",
      "json_pointer": "/experiments/EXP-MHIJ-M24-FUNDING-01",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368"
    },
    "controls": [
      {
        "name": "hours",
        "label": "本次事件间隔",
        "type": "select",
        "value": 8,
        "options": [
          {
            "value": 8,
            "label": "8小时（默认事件）"
          },
          {
            "value": 1,
            "label": "1小时（独立教学选择）"
          }
        ]
      },
      {
        "name": "premium",
        "label": "平均溢价 P（%）",
        "type": "number",
        "value": 0.02,
        "step": 0.01,
        "min": -20,
        "max": 20
      },
      {
        "name": "imr",
        "label": "教学初始保证金率 IMR（%）",
        "type": "number",
        "value": 1,
        "step": 0.1,
        "min": 0.0001,
        "max": 100
      },
      {
        "name": "mmr",
        "label": "教学维持率 MMR（%）",
        "type": "number",
        "value": 0.5,
        "step": 0.1,
        "min": 0.0001,
        "max": 100
      },
      {
        "name": "eligibility",
        "label": "本事件参与资格",
        "type": "select",
        "value": "included",
        "options": [
          {
            "value": "included",
            "label": "已确认参与（教学条件）"
          },
          {
            "value": "excluded",
            "label": "已确认不参与"
          },
          {
            "value": "uncertain",
            "label": "开平仓临近±5秒：不确定"
          }
        ]
      },
      {
        "name": "kind",
        "label": "费用计算分支",
        "type": "select",
        "value": "linear",
        "options": [
          {
            "value": "linear",
            "label": "线性：数量BTC，费用USDT"
          },
          {
            "value": "inverse",
            "label": "反向：数量USD，费用BTC"
          }
        ]
      },
      {
        "name": "side",
        "label": "持仓方向",
        "type": "select",
        "value": "long",
        "options": [
          {
            "value": "long",
            "label": "多头"
          },
          {
            "value": "short",
            "label": "空头"
          }
        ]
      },
      {
        "name": "quantity",
        "label": "合约数量（按所选分支单位）",
        "type": "number",
        "value": 10,
        "step": 1,
        "min": 1e-06
      },
      {
        "name": "mark",
        "label": "当次标记价（USDT/BTC或USD/BTC）",
        "type": "number",
        "value": 8000,
        "step": 1,
        "min": 1e-06
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M24.html",
    "implementation": {
      "html": "/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M24-FUNDING-01",
      "engine": "/notebook/labs/m-hij/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Introduction to Funding Rate](https://www.bybit.com/en/help-center/article/Introduction-to-Funding-Rate): Bybit资金费率由利息、加权溢价、两层clamp及相应限额规则形成；资金费频率按场所规则调整.
- [Perpetual Futures Pricing](https://arxiv.org/pdf/2310.11771v2): 永续合约的两币种现金账户、价格变化与资金费现金流，风险中性条件下的有限递推及反向合约的计价方向.
- [Funding Fee Calculation](https://www.bybit.com/en/help-center/article/Funding-fee-calculation): 资金费事件的持仓资格、付款方向和扣款顺序，以及线性与反向合约的金额计算. 文档说明结算时点前后约5秒的资格不确定性及触限后的频率调整.

## Content relations
```json
[
  {
    "from": "zh-m24",
    "relation": "part_of",
    "to": "markets-derivatives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m24",
    "relation": "requires",
    "to": "zh-m10",
    "required_competence": "能识别期货数量、方向及价差结果",
    "reason": "依赖具体能力，不要求机械完成所有前序"
  },
  {
    "from": "zh-m24",
    "relation": "uses_method",
    "to": "zh-m11",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "zh-m24",
    "relation": "uses_method",
    "to": "zh-m12",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "zh-m24",
    "relation": "uses_method",
    "to": "zh-m20",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "m24-explore",
    "relation": "illustrated_by",
    "to": "EXP-MHIJ-M24-FUNDING-01",
    "reason": "冻结输入上的可复算教学实验及静态等价",
    "at_section": "m24-explore"
  },
  {
    "from": "m24-purpose",
    "relation": "supported_by",
    "to": "PI-BYBIT-FEE",
    "reason": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "locator": "What Is/When Is/How Is Funding Fee；资格±5秒说明；扣款顺序；USDT与Inverse费用例；Trade History符号及触限改频说明",
    "scope": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "at_section": "m24-purpose"
  },
  {
    "from": "m24-cash",
    "relation": "supported_by",
    "to": "PI-BYBIT-FEE",
    "reason": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "locator": "What Is/When Is/How Is Funding Fee；资格±5秒说明；扣款顺序；USDT与Inverse费用例；Trade History符号及触限改频说明",
    "scope": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "at_section": "m24-cash"
  },
  {
    "from": "m24-cash",
    "relation": "supported_by",
    "to": "MOD-PERP-PAPER",
    "reason": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "locator": "离散时间§2完整模型；§3一周期现金、有限递推及终端余项；无泡沫/可积性只作边界；§4开头至逆向现金与Q_b为M25选读",
    "scope": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "at_section": "m24-cash"
  },
  {
    "from": "m24-model",
    "relation": "supported_by",
    "to": "MOD-PERP-PAPER",
    "reason": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "locator": "离散时间§2完整模型；§3一周期现金、有限递推及终端余项；无泡沫/可积性只作边界；§4开头至逆向现金与Q_b为M25选读",
    "scope": "两币种现金账户、风险中性条件现金与有限递推. 不给出未验证的无穷期证明；inverse方向须映射.",
    "at_section": "m24-model"
  },
  {
    "from": "m24-rule",
    "relation": "supported_by",
    "to": "MOD-BYBIT-FUNDING",
    "reason": "资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同.",
    "locator": "Funding Rate Calculation；Interest Rate；Average Premium Index及分钟加权；Funding Rate Upper/Lower Limit与min限制",
    "scope": "资金费率的利息、加权溢价、两层clamp及正常min限额；场所规则与论文线性模型不同.",
    "at_section": "m24-rule"
  },
  {
    "from": "m24-event",
    "relation": "supported_by",
    "to": "PI-BYBIT-FEE",
    "reason": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "locator": "What Is/When Is/How Is Funding Fee；资格±5秒说明；扣款顺序；USDT与Inverse费用例；Trade History符号及触限改频说明",
    "scope": "事件资格、正负现金方向、扣款和线性/反向fee例；触限后改频与±5秒不确定.",
    "at_section": "m24-event"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 11/17
分清规则、模型与事件资格，重建一次资金费收付并解释价格约束.
接着明确报价、数量、结算、钱包与报告的五种币种职责.
Next: [线性与反向合约：报价、结算与报告币](https://ou-liu-red-sugar.github.io/zh/notebook/linear-inverse-contract-currencies/)
