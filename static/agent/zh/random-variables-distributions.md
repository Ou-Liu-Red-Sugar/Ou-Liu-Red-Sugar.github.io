# 随机变量与分布

在同一情景空间上分别定义结算值、合约支付与净损益的随机变量，并由原像构造各自分布.

Entry: zh-qt03 | Node: QT03 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 证明随机变量原像定义的前推分布满足概率公理，重建SPX结算值、期权支付和净损益的映射；推导连续输入形成原子质量的混合分布. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-qt03",
  "node_id": "QT03",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "高年级本科至研究生；默认微积分、线性代数和基本概率",
  "selected_branch": "full_entry",
  "learning_task": "证明随机变量原像定义的前推分布满足概率公理，重建SPX结算值、期权支付和净损益的映射；推导连续输入形成原子质量的混合分布.",
  "body_source": "body_markdown",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 证明随机变量原像定义的前推分布满足概率公理，重建SPX结算值、期权支付和净损益的映射；推导连续输入形成原子质量的混合分布. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "required_readings": [
    {
      "source_id": "QP01-L04",
      "title": "Lecture 4: Random Variables",
      "authors": [
        "MIT 6.436J / 15.085J course materials"
      ],
      "version": "Fall 2018",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§§1.1–1.2，pp.2–4 至 §1.3 前；§2 CDF 定义与 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前",
        "scope": "MIT 6.436J/15.085J，Fall 2018，[Lecture 4: Random Variables](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf). 必读 §§1.1–1.2，pp.2–4 至 §1.3 前；§2 的 CDF 定义及 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前. 可列可加性的证明在 pp.3–4. 混合分布例子用于区分类别；本文支付分布由原像独立推导.",
        "purpose": "可测映射、前推分布与密度区分"
      },
      "supports": "可测映射、前推分布与密度区分",
      "limits": "未把附录、逆分布构造或整门课程标为已读. 本文用“绝对连续”指有密度，区分于 CDF 连续.",
      "fallback_source_ids": []
    },
    {
      "source_id": "CBOE-SPX-20260921",
      "title": "SPX Index Options Fact Sheet",
      "authors": [
        "Cboe"
      ],
      "version": "Two-page PDF; footer ©2026; no separate revision date visible",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p.1 SPX/SPXW 产品对照（AM/PM settlement）；p.2 Contract Multiplier、Exercise Style/Cash Settlement、Final Settlement Value",
        "scope": "Cboe，[SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，两页；本次读取 2026-09-21，页脚 ©2026，未见单独修订日. 定位 p.1 的 SPX/SPXW AM/PM settlement 比较表；p.2 “Contract Multiplier”“Exercise Style/Cash Settlement”“Final Settlement Value”. p.2 说明每点 100 美元、欧式现金结算、行权现金于到期后的下一个营业日交付，以及传统 SPX/SPXW 的结算值来源. 实际挂牌序列与报价仍须另核，本页只借用这些产品规则.",
        "purpose": "产品乘数与结算规则；不支持假设概率和报价"
      },
      "supports": "产品乘数与结算规则；不支持假设概率和报价",
      "limits": "采用欧式、现金结算、每点100美元、传统 SPX/SPXW 的结算值口径，以及 p.2 所述行权现金在到期后下一营业日交付. 未核具体挂牌序列或实际报价；不据此推断经纪账户 booking、税务、保证金或其他交收流程.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "data_version": "2026-09-21-QT-A-review-v2",
    "inputs": {
      "probability": {
        "experiment_id": "EXP-PAYOFF-MAP-01",
        "horizon": "one hypothetical terminal settlement T; no actual listed expiry",
        "status": "teaching_assumption",
        "states": [
          "w1",
          "w2",
          "w3"
        ],
        "settlement_points": [
          5900,
          6000,
          6100
        ],
        "weights": [
          0.2,
          0.5,
          0.3
        ],
        "event_A": [
          true,
          true,
          false
        ],
        "event_B": [
          false,
          true,
          true
        ]
      },
      "payoff": {
        "status": "real_product_terms_with_hypothetical_strike_prices_probabilities_premium",
        "contract_source": "CBOE-SPX-20260921",
        "type": "call",
        "strike": 6000,
        "multiplier": 100,
        "premium_points": 30,
        "fees": 0,
        "funding_cost": 0,
        "tax": 0,
        "uniform_alternative": {
          "status": "separate_fixed_teaching_model",
          "low": 5900,
          "high": 6100,
          "strike": 6000,
          "multiplier": 100,
          "query_y": 5000
        },
        "product_cash_delivery_timing": "business day following expiration (Cboe fact sheet); account booking not modelled"
      }
    },
    "default_outputs": {
      "payoff": {
        "payoff_usd": [
          0,
          0,
          10000
        ],
        "net_pnl_usd": [
          -3000,
          -3000,
          7000
        ],
        "distribution": [
          {
            "value": 0,
            "mass": 0.7
          },
          {
            "value": 10000,
            "mass": 0.3
          }
        ]
      },
      "uniform": {
        "zero_atom_mass": 0.5,
        "positive_mass": 0.5,
        "positive_density_per_usd": 5e-05,
        "cdf": 0.75
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
<span id="qt03-mapping"></span>

## 随机变量与前推分布

同一结算情景可经不同映射得到结算指数、合约支付和净损益，各自具有对应分布.

**定义.** 令 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，则实值随机变量是指可测函数 $X\colon\Omega\to\mathbb R$；其中 $\mathcal B(\mathbb R)$ 是由实数轴开区间生成的 $\sigma$-代数；即对每个 Borel 集 $B$，都有 $X^{-1}(B)\in\mathcal F$. 其分布为 $\mu_X(B)=\mathbb P(X\in B)$，分布函数为 $F_X(x)=\mathbb P(X\le x)$. 随机变量是映射，分布是这项映射把概率质量放到数值轴上后的结果. [^rv]

**命题.** $\mu_X$ 是 $(\mathbb R,\mathcal B(\mathbb R))$ 上的概率测度.

**证明.** 可测性保证原像属于 $\mathcal F$，非负性及 $\mu_X(\mathbb R)=1$ 随之成立. 两两不交Borel集 $B_n$ 的原像也不交，且原像保持并集，因此 $\mu_X(\bigcup_nB_n)=\mathbb P(\bigcup_nX^{-1}(B_n))=\sum_n\mu_X(B_n)$.

<span id="qt03-payoff-map"></span>

## 有限情景支付

Cboe SPX指数期权采用欧式行权、现金结算，每点100美元. 传统SPX的AM结算值按到期日成分证券各自主市场开盘价计算，SPXW的PM结算值按相应收盘成交价计算.[^spx]

采用 $K=6000$、未来结算 $T$、三种结算情景及模型概率作为算例输入. 令 $Z$ 为 Cboe 规则指定的结算值，则一份看涨期权的行权结算金额为 $Y=100(Z-K)^+$，其中 $a^+=\max(a,0)$.

| 情景 | 模型概率 | $Z$（指数点） | $Y$（美元/份） | 假设支付 30 点权利金后的净损益（美元/份） |
|---|---:|---:|---:|---:|
| $\omega_1$ | 0.2 | 5,900 | 0 | −3,000 |
| $\omega_2$ | 0.5 | 6,000 | 0 | −3,000 |
| $\omega_3$ | 0.3 | 6,100 | 10,000 | 7,000 |

设权利金30点，即3,000美元，未计费用、税和利息. 净损益为结算金额Y减权利金. Cboe规定行权现金在到期后下一营业日交付，结算值确定与现金到账有时间间隔.[^spx]

表中损益单位为美元/份. 转为回报率时另指定资本分母，如权利金、初始财富或受约束资本.

前两种结算情景均映射为零支付，故 $P(Y=0)=0.7$、$P(Y=10000)=0.3$. CDF在 $y<0$ 为0，$0\le y<10000$ 为0.7，$y\ge10000$ 为1；零点跳跃0.7.

<span id="qt03-mixed-distribution"></span>

## 连续输入与原子质量

离散分布的全部质量集中在某个有限或可数集合上；绝对连续分布具有相对于长度测度的密度. 两者不能穷尽所有分布，“分布函数连续”也不等于“具有密度”. 这里把讲义所称具有 PDF 的 continuous 明确称为绝对连续. [^rv]

另设 $Z$ 在 $[5900,6100]$ 均匀分布，仍令 $Y=100(Z-6000)^+$，则

$$
F_Y(y)=\begin{cases}
0,&y<0,\\
\frac12+\frac{y}{20000},&0\le y<10000,\\
1,&y\ge10000.
\end{cases}
$$

$Y=0$ 的原像为 $Z\le6000$，占半区间. 对 $0\le y<10000$，$Y\le y$ 等价于 $Z\le6000+y/100$. 因而零点质量1/2，加上正区间密度1/20000的积分1/2构成完整分布；密度单位为每美元，原子质量无量纲.

<span id="qt03-self-check"></span>

<div data-experiment-slot="lab-qt03"></div>

## 练习与解析

**解释题.** 三情景模型的零支付概率为什么是 0.7，而不是零结算值的概率？

**解析.** 原像 $\{Z\le K\}$ 包含两个状态，其概率相加为0.7.

**迁移题.** 在原三情景模型中改成看跌支付 $100(K-Z)^+$，保持 $K=6000$. 求支付分布.

**解析.** 三情景支付为 `10,000、0、0` 美元，所以零支付概率为 0.8，10,000 美元支付的概率为 0.2. 权重没有变化，改变的是映射. 另一项检查是将看涨行权价改为 6,050：支付变成 `0、0、5,000`，其分布为零点质量 0.7 与 5,000 美元处质量 0.3.

[^rv]: MIT 6.436J/15.085J，Fall 2018，[Lecture 4: Random Variables](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf). 必读 §§1.1–1.2，pp.2–4 至 §1.3 前；§2 的 CDF 定义及 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前. 可列可加性的证明在 pp.3–4. 混合分布例子用于区分类别；本文支付分布由原像独立推导.
[^spx]: Cboe，[SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，两页；访问于 2026-09-21，页脚 ©2026，未见单独修订日. 定位 p.1 的 SPX/SPXW AM/PM settlement 比较表；p.2 “Contract Multiplier”“Exercise Style/Cash Settlement”“Final Settlement Value”. p.2 说明每点 100 美元、欧式现金结算、行权现金于到期后的下一个营业日交付，以及传统 SPX/SPXW 的结算值来源.

## Additional teaching material
## 计算输入与默认输出

同源输入为 `experiments.json` 的 `probability` 与 `payoff`. 算例采用三情景看涨、$K=6000$、乘数 100、权利金 30 点；结算值与权重取自同一模型输入.

```json
{"experiment_id":"EXP-PAYOFF-MAP-01","settlement_points":[5900,6000,6100],"weights":[0.2,0.5,0.3],"option_type":"call","strike_points":6000,"multiplier_usd_per_point":100,"premium_points":30,"payoff_usd":[0,0,10000],"net_pnl_usd":[-3000,-3000,7000],"payoff_distribution":[{"value":0,"mass":0.7},{"value":10000,"mass":0.3}],"uniform_alternative":{"low":5900,"high":6100,"zero_atom_mass":0.5,"positive_density_per_usd":0.00005,"positive_mass":0.5,"cdf_at_5000":0.75}}
```

```text
call_payoff_i = multiplier * max(settlement_i - strike, 0)
put_payoff_i = multiplier * max(strike - settlement_i, 0)
net_pnl_i = payoff_i - multiplier * premium_points  # fees and funding assumed zero
P(payoff = y) = sum_i weights[i] for which payoff_i == y
uniform_call_CDF(y) = 0 if y < 0 else clamp((strike + y/multiplier - low)/(high-low), 0, 1)
uniform_call_atom0 = clamp((strike-low)/(high-low), 0, 1)
```

## 交互与静态替代

`#qt03` 可改行权价、教学权利金与 call/put；场景概率保持与 QT02 同一输入. 改变 QT02 权重后，QT03 的质量同时更新；若权重非法，两处均停算. 行权价面板不伪装为实际期权链.

“均匀分布替代”是单独实验，固定使用本页的 $K=6000$ 与 `[5900,6100]`，不借用已被用户改动的离散权重. 零点质量 0.5、连续质量 0.5、$F_Y(5000)=0.75$ 永久注明这套输入；界面若以后开放修改连续模型，须同步更新完整原像公式与两部分质量. 静态说明还须保留“支付金额、净损益、现金交付时点、百分比回报”是四个不同对象；本演示只计算前两项，settlement timing 只引用产品规则，不模拟账户交收.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-PAYOFF-MAP-01",
    "title": "同一情景、事件与支付映射",
    "anchor": "qt02-event-example",
    "description": "one hypothetical terminal settlement T; no actual listed expiry",
    "inputs": {
      "probability": {
        "experiment_id": "EXP-PAYOFF-MAP-01",
        "horizon": "one hypothetical terminal settlement T; no actual listed expiry",
        "status": "teaching_assumption",
        "states": [
          "w1",
          "w2",
          "w3"
        ],
        "settlement_points": [
          5900,
          6000,
          6100
        ],
        "weights": [
          0.2,
          0.5,
          0.3
        ],
        "event_A": [
          true,
          true,
          false
        ],
        "event_B": [
          false,
          true,
          true
        ]
      },
      "payoff": {
        "status": "real_product_terms_with_hypothetical_strike_prices_probabilities_premium",
        "contract_source": "CBOE-SPX-20260921",
        "type": "call",
        "strike": 6000,
        "multiplier": 100,
        "premium_points": 30,
        "fees": 0,
        "funding_cost": 0,
        "tax": 0,
        "uniform_alternative": {
          "status": "separate_fixed_teaching_model",
          "low": 5900,
          "high": 6100,
          "strike": 6000,
          "multiplier": 100,
          "query_y": 5000
        },
        "product_cash_delivery_timing": "business day following expiration (Cboe fact sheet); account booking not modelled"
      }
    },
    "outputs": {
      "events": {
        "P_A": 0.7,
        "P_B": 0.8,
        "P_intersection": 0.5,
        "P_union": 1,
        "P_A_complement": 0.3
      },
      "payoff": {
        "payoff_usd": [
          0,
          0,
          10000
        ],
        "net_pnl_usd": [
          -3000,
          -3000,
          7000
        ],
        "distribution": [
          {
            "value": 0,
            "mass": 0.7
          },
          {
            "value": 10000,
            "mass": 0.3
          }
        ]
      },
      "uniform": {
        "zero_atom_mass": 0.5,
        "positive_mass": 0.5,
        "positive_density_per_usd": 5e-05,
        "cdf": 0.75
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched",
    "url": "/notebook/labs/qt-a/interactions.html#qt02"
  }
]
```

## Sources
- [SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): SPX 指数期权的合约乘数为每指数点100美元，采用现金结算；具体系列的结算值口径和到期安排要按产品规格读取. 确定结算金额与现金实际交付是两个时点，不能直接合并.
- [Lecture 4: Random Variables](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf): 随机变量把原始情景映射成数值，其分布把数值集合的概率拉回原情景集合计算. 不同情景可能映射到同一个值，因此连续输入经变换也可能产生离散概率质量.

## Content relations
```json
[
  {
    "from": "zh-qt03",
    "relation": "part_of",
    "to": "quant-foundations",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt03",
    "relation": "requires",
    "to": "zh-qt02",
    "reason": "需要先会从情景集合计算事件概率",
    "required_competence": "有限事件及非负归一权重"
  },
  {
    "from": "zh-qt03",
    "relation": "illustrated_by",
    "to": "EXP-PAYOFF-MAP-01",
    "reason": "同一情景到不同金额的映射"
  },
  {
    "from": "zh-qt03",
    "relation": "supported_by",
    "to": "QP01-L04",
    "reason": "可测映射、前推分布与密度区分",
    "locator": "§§1.1–1.2，pp.2–4 至 §1.3 前；§2 CDF 定义与 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前"
  },
  {
    "from": "zh-qt03",
    "relation": "supported_by",
    "to": "CBOE-SPX-20260921",
    "reason": "产品乘数与结算规则；不支持假设概率和报价",
    "locator": "p.1 SPX/SPXW 产品对照（AM/PM settlement）；p.2 Contract Multiplier、Exercise Style/Cash Settlement、Final Settlement Value"
  }
]
```

## Related entries
