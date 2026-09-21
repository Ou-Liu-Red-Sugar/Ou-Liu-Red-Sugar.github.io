# 随机变量与分布

同一次市场结算，可以对应结算指数、合约支付和持有损益几个不同数值.

Entry: zh-qt03 | Node: QT03 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你负责 QT03「随机变量与分布」，这是紧凑参考，不把它扩成测度论课程.
先实际读取本页、脚注 MIT Lecture 4 的指定定义/前推证明/CDF/离散与有密度和混合单元，以及 Cboe 两页规格；PDF 公式和表格需看原页. 记录标题、版本、完整取得范围与限制. 产品 PDF 的页脚年份不能伪装成修订日，实际合约报价未取得就保持未取得. 资料不全时先补读有据等价原件，不能用摘要补完整规则.
从诊断题开始：请读者把 [5900,6000,6100] 映射为看涨支付，再合并质量，解释为什么三个情景只剩两个支付点. 随后要求分清 30 点权利金与 3000 美元成本，支付与净损益分别列示；再问“结算值已经确定”是否等于“现金已经交付”，要求依据 Cboe p.2 回答. 若读者试图把 7000 美元写成百分比回报，先让其指出缺少哪个资金分母.
读者需要证明时，用原像保持可数不交并重建前推测度证明；不引入无关定理. 读者需要反例时，用均匀结算值的看涨支付，要求同时指出零点质量和连续部分，不能只画密度.
最后改为看跌或 K=6050 检验迁移. 合格标准：能从事件原像求概率，合并同值质量而不重算情景概率，辨认点质量与密度，明确单位. 所有未来价格、概率、权利金是教学输入，不当作历史行情或定价测度；不从假设收益得出买卖建议.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-qt03",
  "node_id": "QT03",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "audience": "高年级本科至研究生；默认微积分、线性代数和基本概率",
  "selected_branch": "full_entry",
  "learning_task": "同一次市场结算，可以对应结算指数、合约支付和持有损益几个不同数值. 我们不必另造几套情景，只需在同一情景上使用不同的函数.",
  "body_source": "body_markdown",
  "prompt": "你负责 QT03「随机变量与分布」，这是紧凑参考，不把它扩成测度论课程.\n先实际读取本页、脚注 MIT Lecture 4 的指定定义/前推证明/CDF/离散与有密度和混合单元，以及 Cboe 两页规格；PDF 公式和表格需看原页. 记录标题、版本、完整取得范围与限制. 产品 PDF 的页脚年份不能伪装成修订日，实际合约报价未取得就保持未取得. 资料不全时先补读有据等价原件，不能用摘要补完整规则.\n从诊断题开始：请读者把 [5900,6000,6100] 映射为看涨支付，再合并质量，解释为什么三个情景只剩两个支付点. 随后要求分清 30 点权利金与 3000 美元成本，支付与净损益分别列示；再问“结算值已经确定”是否等于“现金已经交付”，要求依据 Cboe p.2 回答. 若读者试图把 7000 美元写成百分比回报，先让其指出缺少哪个资金分母.\n读者需要证明时，用原像保持可数不交并重建前推测度证明；不引入无关定理. 读者需要反例时，用均匀结算值的看涨支付，要求同时指出零点质量和连续部分，不能只画密度.\n最后改为看跌或 K=6050 检验迁移. 合格标准：能从事件原像求概率，合并同值质量而不重算情景概率，辨认点质量与密度，明确单位. 所有未来价格、概率、权利金是教学输入，不当作历史行情或定价测度；不从假设收益得出买卖建议.",
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

## 映射和分布不是同一件事

同一次市场结算，可以对应结算指数、合约支付和持有损益几个不同数值. 我们不必另造几套情景，只需在同一情景上使用不同的函数.

**定义.** 令 $(\Omega,\mathcal F,\mathbb P)$ 为概率空间，则实值随机变量是指可测函数 $X\colon\Omega\to\mathbb R$；其中 $\mathcal B(\mathbb R)$ 是由实数轴开区间生成的 $\sigma$-代数；即对每个 Borel 集 $B$，都有 $X^{-1}(B)\in\mathcal F$. 其分布为 $\mu_X(B)=\mathbb P(X\in B)$，分布函数为 $F_X(x)=\mathbb P(X\le x)$. 随机变量是映射，分布是这项映射把概率质量放到数值轴上后的结果. [^rv]

**命题.** $\mu_X$ 是 $(\mathbb R,\mathcal B(\mathbb R))$ 上的概率测度.

**证明.** 可测性保证定义中每个事件都有概率；非负性和 $\mu_X(\mathbb R)=1$ 直接成立. 对两两不交的 Borel 集 $B_n$，原像 $X^{-1}(B_n)$ 也两两不交，且原像保持并集，因此
$\mu_X(\bigcup_n B_n)=\mathbb P(\bigcup_n X^{-1}(B_n))=\sum_n\mu_X(B_n)$.
这里可测性保证“能计算”，原像性质保证“计算仍满足概率规则”.

<span id="qt03-payoff-map"></span>

## 同一张情景表，两个支付点

采用 Cboe SPX 指数期权的真实产品条款：欧式行权、现金结算，乘数为每指数点 100 美元. Cboe fact sheet 把传统 SPX 列为 AM-settled，其 exercise-settlement value 由到期日成分证券在各自主市场的开盘成交价计算；SPXW 的 PM-settled 口径使用到期日成分证券的最后（收盘）成交价. 两者都不能随意拿屏幕上的某个指数最后报价替代规则所指定的结算值. [^spx]

以下只有**产品规则是真实的**；行权价 $K=6000$、未来结算 $T$、三种结算情景及其概率全部是教学设定，没有核验具体挂牌序列或历史报价. 令 $Z$ 为规则所指定的结算值，则一份看涨期权在结算时应付的现金金额为 $Y=100(Z-K)^+$，其中 $a^+=\max(a,0)$.

| 情景 | 模型概率 | $Z$（指数点） | $Y$（美元/份） | 假设支付 30 点权利金后的净损益（美元/份） |
|---|---:|---:|---:|---:|
| $\omega_1$ | 0.2 | 5,900 | 0 | −3,000 |
| $\omega_2$ | 0.5 | 6,000 | 0 | −3,000 |
| $\omega_3$ | 0.3 | 6,100 | 10,000 | 7,000 |

最后一列另假设权利金 30 点，即 $30\times100=3{,}000$ 美元，并忽略费用、税与资金利息；它不是行情. $Y$ 是按产品规则计算的现金结算金额，不是已扣权利金的利润. Cboe fact sheet 还明确写明，这类行权产生的现金在**到期后的下一个营业日**交付；因此“用于计算金额的结算值已经确定”和“现金已经实际交付”是两个事件. [^spx] 本页只计算金额，不模拟具体账户的 settlement/booking.

表中的 `−3,000` 与 `7,000` 都是**美元净损益**，不是百分比回报. 若要写“回报率”，还必须先指定分母究竟是已付权利金、组合初始财富、受约束资本还是其他资金口径；本页没有固定这些对象，所以不自动给出收益率.

结算值分布有三个质量点，支付分布却只有两个：$\mathbb P(Y=0)=0.7$、$\mathbb P(Y=10000)=0.3$. 不是概率丢失了，而是前两个情景被同一个支付函数映射到零. 因此 $F_Y(y)$ 在 $y<0$ 时为 0，在 $0\le y<10000$ 时为 0.7，在 $y\ge10000$ 时为 1. $F_Y(0)=0.7$，而左侧极限为 0，这正是一个质量点的跳跃.

<span id="qt03-mixed-distribution"></span>

## 连续输入也能产生零点质量

离散分布的全部质量集中在某个有限或可数集合上；绝对连续分布具有相对于长度测度的密度. 两者不能穷尽所有分布，“分布函数连续”也不等于“具有密度”. 这里把讲义所称具有 PDF 的 continuous 明确称为绝对连续. [^rv]

取另一项完全独立的教学假设：$Z$ 在 $[5900,6100]$ 上均匀分布. 仍令 $Y=100(Z-6000)^+$，则

$$
F_Y(y)=\begin{cases}
0,&y<0,\\
\frac12+\frac{y}{20000},&0\le y<10000,\\
1,&y\ge10000.
\end{cases}
$$

推导只需取原像：$Y=0$ 对应整个 $Z\le6000$ 的半区间；对 $0\le y<10000$，$Y\le y$ 等价于 $Z\le6000+y/100$. 因此零点质量为 $1/2$，而 $(0,10000)$ 上密度为 $1/20000$，其积分只有 $1/2$. 不能把这一半密度当作完整分布，更不能为“凑成 1”将它放大一倍. 密度的单位是每美元，零点质量则无量纲.

<span id="qt03-self-check"></span>

<div data-experiment-slot="lab-qt03"></div>

## 快速检查与使用位置

**解释题.** 三情景模型的零支付概率为什么是 0.7，而不是零结算值的概率？

**解析.** 支付为零对应原像 $\{Z\le K\}$，不是 $\{Z=0\}$. 两个不同结算值进入同一个支付值. 这里需要求原像，不是比较数值是否相同.

**迁移题.** 在原三情景模型中改成看跌支付 $100(K-Z)^+$，保持 $K=6000$. 求支付分布.

**解析.** 三情景支付为 `10,000、0、0` 美元，所以零支付概率为 0.8，10,000 美元支付的概率为 0.2. 权重没有变化，改变的是映射. 另一项检查是将看涨行权价改为 6,050：支付变成 `0、0、5,000`，其分布为零点质量 0.7 与 5,000 美元处质量 0.3.

[交互页](/notebook/labs/qt-a/interactions.html#qt03) 把情景到支付的映射逐行显示，再合并相同支付值. 连续模式另列零点质量和连续部分的总质量. 上表与分段公式就是静态替代. 此页为 QT04 的收益分布及 QT06 的条件支付提供对象定义；没有从支付公式推出市场价格，也没有把假设权重换成定价测度.

[^rv]: MIT 6.436J/15.085J，Fall 2018，[Lecture 4: Random Variables](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/9797310bed4c7f5b5d40d007783eec8d_MIT6_436JF18_lec04.pdf). 必读 §§1.1–1.2，pp.2–4 至 §1.3 前；§2 的 CDF 定义及 §2.1，pp.6–7；§§3–4，pp.9–12 至 Appendix A 前. 可列可加性的证明在 pp.3–4. 混合分布例子用于区分类别；本文支付分布由原像独立推导.
[^spx]: Cboe，[SPX Index Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf)，两页；访问于 2026-09-21，页脚 ©2026，未见单独修订日. 定位 p.1 的 SPX/SPXW AM/PM settlement 比较表；p.2 “Contract Multiplier”“Exercise Style/Cash Settlement”“Final Settlement Value”. p.2 说明每点 100 美元、欧式现金结算、行权现金于到期后的下一个营业日交付，以及传统 SPX/SPXW 的结算值来源. 实际挂牌序列与报价仍须另核，本页只借用这些产品规则.


## Additional teaching material
## 计算输入与默认输出

同源输入为 `experiments.json` 的 `probability` 与 `payoff`. HTML 默认三情景看涨、$K=6000$、乘数 100、权利金 30 点；所有未来输入为假设.

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
