# 风险、损失与情景

说明终点损失、路径回撤、尾部严重程度和支付缺口分别测量什么，并补出遗漏的压力检查.

Entry: zh-p03 | Node: P03 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你负责P03“风险、损失与情景”. 先询问或采用默认路径分支，然后实际读取本包指定的MIT及FSB原文；选择尾部分支后再实际读取Acerbi–Tasche的定义单元、Proposition3.2证明与式(3.3). PDF中的公式和图表必须查看原页. 运行日志记录版本、取得范围、利润/损失符号、概率口径和所支持的教学任务，不预填已读状态.

首先让学习者解释“年底盈利，但下个月付不出钱”是否矛盾. 熟练者不再反复诊断基础概率，直接推演两条资产路径. 每次加入提款都先改变份额，再算终财富；要求分别展示单位价格回撤和所有者现金. 没有额外融资时不能把支付缺口延续成负份额.

尾部分支先写明本篇的分位点定义和置信水平，再让学习者从最坏5%的质量组成计算ES. 原论文用利润低尾，不得直接照搬符号；用等于分位点的离散概率检验其理解. 若其把ES写成条件平均，让其明确该条件取了百分之几的结果.

最后用本篇迁移题检验是否能指出指标遗漏的对象，并给完整解析. 不得凭价格图宣布永久损失、凭给定分布宣布概率已校准，或把FSB报告的历史事件说成当前账户实况. 原文读取失败先补可读的机构/作者原件；仍缺的单元明确暂停其来源依赖，不凭摘要完成一场“已读全文”的教学.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-p03",
  "node_id": "P03",
  "export_mode": "public",
  "content_version": "p-a-v2",
  "audience": "有数学背景的高年级本科至研究生",
  "selected_branch": "common + selected branch",
  "learning_task": "说明终点损失、路径回撤、尾部严重程度和支付缺口分别测量什么，并补出遗漏的压力检查.",
  "body_source": "body_markdown",
  "required_readings": [
    {
      "source_id": "P-R04a",
      "title": "MIT 15.401, Lecture 13–14: Risk Analytics and Portfolio Theory",
      "authors": [
        "Andrew W. Lo"
      ],
      "version": {
        "course": "Fall 2008",
        "copyright": "2007–2008"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/dd628e151309a7f23962b1a31b9356e5_MIT15_401F08_lec13.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides 9–11、13–16、26–28；核原页13、16、26、28",
        "scope": "slides 9–11、13–16、26–28；核原页13、16、26、28",
        "purpose": "回报分布、固定权重、协方差与分散"
      },
      "supports": "回报分布、固定权重、协方差与分散",
      "fallback_source_ids": []
    },
    {
      "source_id": "P-R06",
      "title": "Liquidity Preparedness for Margin and Collateral Calls: Final Report",
      "authors": [
        "Financial Stability Board"
      ],
      "version": {
        "published": "2024-12-10"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.fsb.org/uploads/P101224-1.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1.2 pp.5–8、§3.2 pp.15–18；LDI说明印刷p.7原页核验",
        "scope": "§1.2 pp.5–8、§3.2 pp.15–18；LDI说明印刷p.7原页核验",
        "purpose": "历史保证金/抵押现金压力与情景检查机制"
      },
      "supports": "历史保证金/抵押现金压力与情景检查机制",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "P-R08",
      "title": "On the Coherence of Expected Shortfall",
      "authors": [
        "Carlo Acerbi",
        "Dirk Tasche"
      ],
      "version": {
        "arxiv": "cond-mat/0104295v5",
        "date": "2002-05-02"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://arxiv.org/pdf/cond-mat/0104295",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2定义，Proposition 3.2及证明、式(3.3)；承重原页p.6–7",
        "scope": "§2定义，Proposition 3.2及证明、式(3.3)；承重原页p.6–7",
        "purpose": "分位数积分、离散点质量处理"
      },
      "supports": "分位数积分、离散点质量处理",
      "fallback_source_ids": [],
      "required_if_selected": "tail-branch"
    }
  ],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "SIM-P03-PATH-01": {
      "inputs": {
        "A": [
          100,
          120,
          96
        ],
        "B": [
          100,
          60,
          96
        ],
        "withdrawal": 50,
        "target": 40
      },
      "A": {
        "mdd": 0.19999999999999996,
        "withdrawal": 50,
        "payment_gap": 0,
        "remaining_units": 0.5833333333333333,
        "terminal": 55.99999999999999,
        "terminal_shortfall": 0
      },
      "B": {
        "mdd": 0.4,
        "withdrawal": 50,
        "payment_gap": 0,
        "remaining_units": 0.16666666666666663,
        "terminal": 15.999999999999996,
        "terminal_shortfall": 24.000000000000004
      },
      "withdraw70_A": {
        "mdd": 0.19999999999999996,
        "withdrawal": 70,
        "payment_gap": 0,
        "remaining_units": 0.41666666666666663,
        "terminal": 40.0,
        "terminal_shortfall": 0
      },
      "withdraw70_B": {
        "mdd": 0.4,
        "withdrawal": 70,
        "payment_gap": 10,
        "remaining_units": null,
        "terminal": null,
        "terminal_shortfall": null
      }
    },
    "SIM-P03-TAIL-01": {
      "inputs": {
        "losses": [
          0,
          10,
          100
        ],
        "probabilities": [
          0.94,
          0.05,
          0.01
        ],
        "confidence": 0.95
      },
      "default": {
        "confidence": 0.95,
        "max_loss": 100,
        "var": 10,
        "es": 27.999999999999982,
        "mass_above": 0.01,
        "mass_at_q_used": 0.04000000000000004
      },
      "c99": {
        "confidence": 0.99,
        "max_loss": 100,
        "var": 10,
        "es": 99.99999999999991,
        "mass_above": 0.01,
        "mass_at_q_used": 8.673617379884035e-18
      },
      "c995": {
        "confidence": 0.995,
        "max_loss": 100,
        "var": 100,
        "es": 100.0,
        "mass_above": 0,
        "mass_at_q_used": 0.0050000000000000044
      },
      "max200": {
        "confidence": 0.95,
        "max_loss": 200,
        "var": 10,
        "es": 47.999999999999964,
        "mass_above": 0.01,
        "mass_at_q_used": 0.04000000000000004
      },
      "mean_loss": 1.5,
      "conditional_ge_10": 25,
      "conditional_gt_10": 100
    }
  },
  "runtime_reading_log": []
}
```

## Supplied entry
假设两项投资从100出发，最后都剩96. 我们已经知道它们的终点回报相同，却还不知道过程中有没有跌到无法继续持有，也不知道中途要付款的人能否按时拿到钱. 只报“亏了4%”并没有把经历说完.

本篇不把风险压成一个越低越好的分数. 我们先说明几个度量各自看到了什么，再沿一条完整路径检查它们遗漏的东西. 读完共同部分后，可以继续做“提款与支付”分支；希望进一步理解尾部指标的读者，也可以选择“离散分布”分支. 第一次阅读不必同时完成所有扩展.

<a id="p03-risk-object"></a>
## 一、先确定哪一种结果不符合任务

风险总是相对于一个对象和一段时间来讨论的. 对没有中途收付的投资，初始价值为 $V_0$、终点财富为 $V_T$，可定义货币损失 $L=V_0-V_T$. 这里 $L$ 是带符号的：盈利时可以为负. 若任务是到期必须支付 $K$，更直接的量则是资金不足额 $(K-V_T)^+$，其中 $x^+=\max(x,0)$.

这两个对象不一样. 初始100、终点105，没有相对本金的亏损，但若到期必须支付110，仍有5的缺口. 反过来，某项资产市价下降也不自动说明当前就付不出款：支付日期、可变现金额和其他资金来源还要另查. 我们既不把所有价格下跌叫作破产，也不把账面净资产为正叫作流动性充分.

“永久损失”还需要更强的判断. 已经消失的现金权利、被迫出售后不再持有的份额，和暂时较低的报价，不是同一回事. 仅凭一条价格曲线，无法证明未来一定恢复，也无法证明永远不恢复. 需要研究的是资产权利、经营或偿付能力，以及持有者是否还能等到未来. 价格路径给出发生了什么，不能独自完成这类判断.

<a id="p03-distribution-path"></a>
## 二、分布和路径回答不同的问题

令未来回报为随机变量 $R$，当二阶矩有限时，波动率是 $\sigma=\sqrt{\mathbb{E}[(R-\mathbb{E}R)^2]}$. 它衡量回报围绕平均值的离散程度；同样大小的向上、向下偏离都会进入平方项. 均值和方差可以帮助比较，但没有把支出期限、最坏损失或结果分布的全部形状装进去.[^mit]

一份分布描述指定时点的不同可能结果；一条路径描述同一个实现怎样一步步到达终点. 即使终点分布相同，中途最低点、支付时点和退出条件也可能不同. 我们现在用两条**明确虚构、没有外部现金流的单位资产路径**把区别算出来.

| 观察时点 | A的单位价值 | B的单位价值 |
|---|---:|---:|
| 起点 | 100 | 100 |
| 中间 | 120 | 60 |
| 终点 | 96 | 96 |

两条路径终点回报都是−4%. 要衡量路径上从已达到的高点跌下来多少，令
$$
H_t=\max_{u\leq t}W_u,\qquad D_t=1-\frac{W_t}{H_t},
\qquad \mathrm{MDD}=\max_tD_t,
$$
其中 $W_t$ 是正的单位财富指数，或已剔除外部出入金影响的财富序列. $H_t$ 只用截至当时已经发生的高点，不能把未来高点拿回去计算今天的回撤.

A的运行高点为100、120、120，回撤为0、0、20%；B的运行高点一直为100，回撤为0、40%、4%. 因此最大回撤分别为20%和40%. 这里的“最大”只覆盖给定观察点；若实际两个观察点之间跌得更深，这张离散表没有记录到，不能宣称它给出了连续时间内的最大回撤.

这些数字没有给出未来回撤的概率，更不是把20%或40%保证成以后不会突破的上界. 它们完成的是对这两条既定路径的描述.

<a id="p03-path-branch"></a>
## 三、路径分支：同一个提款要求，为什么改变了结果？

现在加入一个所有者的任务：初始买入一单位资产，中途必须取出50，卖出部分资产取得现金；无费用、无分红，取走的钱不再投资. 这里要重算份额，不能在原路径上画一个提款箭头，却仍把期末财富留作96.

中途单位价格为 $P_m$ 时，卖出份额为 $50/P_m$，剩余 $1-50/P_m$；终点组合价值为
$$
V_T=\left(1-\frac{50}{P_m}\right)\times96.
$$

| 结果 | A：中途价格120 | B：中途价格60 |
|---|---:|---:|
| 为取得50而卖出的份额 | $5/12$ | $5/6$ |
| 剩余份额 | $7/12$ | $1/6$ |
| 终点组合价值 | 56 | 16 |
| 已支付50加终点财富 | 106 | 66 |
| 若终点还需40，资金缺口 | 0 | 24 |

B后来从60恢复到96，但所有者已经卖出了六分之五的份额，后来的上涨只能作用于剩下的一小部分. **资产后来恢复，不等于已经提款或被迫退出的人恢复到同一种财富状态.** 差异来自每次卖出多少份额的算术.

106和66只是把未再投资的提款加回后的总金额，不是已经年化的回报. 若要比较日期现金的等效回报，应使用上一篇的完整现金路径. 单位资产的原始最大回撤仍是20%和40%；不能直接对含提款的账户余额计算回撤，再把所有者自己取走的钱算成市场亏损.

这里还能检查支付能力. 若把中途提款改为70，A可以出售 $70/120$ 份取得资金，B却只有60的总价值. 没有另外的借款或出资安排时，B当场短缺10，不能让份额变成负数后假装已经完成支付. 这时路径分析的重点不再是终点回报，而是支付条件已经先失效.

<div data-experiment-slot="lab-p03path"></div>

<a id="p03-liquidity"></a>
## 四、从教学路径回到真实资金压力

真实风险并不只来自卖出时价格较低. 资产的收益可能以后才能收回，而另一条腿的现金支付今天就到期. FSB于2024年发布的流动性准备报告，分析了若干历史保证金与抵押压力事件；对2022年英国负债驱动投资（LDI）基金事件的讨论还涉及杠杆、现金准备和治理流程对补充抵押品速度的影响. 它支持我们检查兑现时间和可动用资源，但不是本篇教学数字的来源，也没有提供某个账户的逐笔重建. [^fsb]

把机制压成一组另外的教学条件：一项资产未来的可收款增加10，与之相关的另一条腿今天需要付10，今天手头现金只有6. 合起来的经济价值变动可以接近抵消，但今天仍缺4. 假设“未来的10已经在账上，所以现在不缺钱”，相当于未经核实就给了一个即时、无成本融资渠道.

在这类安排中，参与者可能按合同被要求补交用于保障履约的资金或资产. 保证金或抵押安排可能降低交易对手面对的信用损失，却同时使持仓者必须及时调来现金. 这两个作用并不矛盾. 于是压力检查至少要同时保留：资产价格怎么变、现金什么时候到、哪些资产能以什么成本变现、承诺资金是否附条件，以及谁能在支付期限前批准和完成转移. FSB的压力测试建议特别关注这类历史与假设情景、资金来源及变现约束. [^fsb]

现在回头看“波动率低”的说法：即使某个终点回报比较稳定，也不能据此跳过付款时点. 融资与组合实施还要继续检查现金何时可达、资产能否及时变现以及相关资金条件.

<a id="p03-tail-branch"></a>
## 五、尾部分支：VaR和ES究竟取了哪些结果？

这一节改用一个给定概率模型，不再使用刚才的路径作为概率样本. 全部损失及概率都是**教学输入**：

| 一期货币损失 $L$ | 0 | 10 | 100 |
|---|---:|---:|---:|
| 概率 | 0.94 | 0.05 | 0.01 |

采用置信水平 $c\in(0,1)$，分布函数 $F_L(\ell)=\Pr(L\leq\ell)$，本篇固定定义
$$
q_c=\inf\{\ell:F_L(\ell)\geq c\},
\qquad \mathrm{VaR}_c(L)=q_c.
$$
因此95%的VaR为10：损失不超过0的概率只有94%，不超过10的概率达到99%. VaR是一个分位点，不是“最坏情况下只损失10”，也不要求严格超过它的概率恰好为5%. 本例严格超过10的概率只有1%.

期望短缺ES取的是最坏 $1-c$ 比例结果中的平均损失. 在 $\mathbb{E}|L|<\infty$ 时，使用分位数积分定义
$$
\mathrm{\mathbb{E}S}_c(L)=\frac{1}{1-c}\int_c^1q_u\,du.
$$
离散分布在阈值处可能有一整块概率质量，而尾部只需要其中一部分. Acerbi与Tasche特别分析了这种区别；原文用利润的低尾和尾部概率，本篇改用正向损失的高尾及置信水平，并明确采用上面的分位点约定. [^es]

本例的最坏5%包含全部1%的损失100，还需要从损失10的5%中取4%. 所以
$$
\mathrm{\mathbb{E}S}_{0.95}
=\frac{0.01\times100+0.04\times10}{0.05}=28.
$$
这里“取4%”不是声称同一个结果只有四分之一发生，而是把位于同一损失值上的概率质量分配到固定大小的尾部. 只要损失相同，如何区分那一档里的个别状态不会影响平均值.

这一推导也给出可直接计算的有限分布公式. 按上面的左连续分位点约定，若阈值为 $q_c$，就有
$F_L(q_c^-)<c\leq F_L(q_c)$. 因此在分位数积分里，区间 $(c,F_L(q_c)]$ 上的分位数仍等于 $q_c$；而 $(F_L(q_c),1]$ 对应严格高于阈值的损失. 严格高于它的概率为 $1-F_L(q_c)$，还需补入的阈值质量为
$(1-c)-(1-F_L(q_c))=F_L(q_c)-c$. 把积分按这两段拆开，于是
$$
\mathrm{\mathbb{E}S}_c
=\frac{\mathbb{E}[L\,\mathbf1_{\{L>q_c\}}]
+q_c\big(F_L(q_c)-c\big)}{1-c}.
$$
不能不加条件地用 $\mathbb{E}[L\mid L\geq q_c]$ 替代. 本例后者用了全部6%的损失10和100，得到25；若用严格大于阈值的条件平均，又只剩1%，得到100. 两者都不是我们定义的最坏5%平均28.

最后把最严重损失由100改成200，概率保持不变. 95%VaR仍为10，ES却升到48. 这说明两者关注不同：一个定位尾部入口，一个继续考察尾部的严重程度. 但ES也没有自动解决时间、支付和概率依据的问题. 算得再精确，也只是对给定分布的传播；它不能替我们证明1%这个概率合理.

<div data-experiment-slot="lab-p03tail"></div>

<a id="p03-exercises"></a>
## 六、练习与完整解析

路径分支做前两题即可；尾部分支做第一题和第三题. 完整答案保留在这里，便于自学核对.

### 练习一：高回报与支付不足可以同时出现吗？

初始资金100，一年末资产为110，但第一个月必须付30；在该月不能出售或质押资产，也没有其他现金或已落实融资. 有人说年度回报10%，所以这项投资没有风险. 指出其混淆了什么.

**解析.** 相对于本金的年度损失为−10，即盈利；但第一个月的支付资源是0，现金缺口为30. 两个数字测量不同对象、不同日期. 不能从未来财富推导当前可付款，也不能仅因现金短缺就把全年回报改写为负数. 要修复任务，需要改变持仓或资金安排，或者修改支付日期；需要新的可行条件，而不是换一个风险指标.

### 练习二：提款改为70，终点不再相同

沿第三节两条路径，把中途提款改成70. 求A的终点组合价值，解释B为什么不能照套公式. 再说明比较原始资产回撤与比较所有者剩余财富应使用哪两张表.

**解析.** A剩 $1-70/120=5/12$ 份，终点价值 $96\times5/12=40$. B中途总资产60，无法支付70，缺10；计算出负的剩余份额会暗中加入做空或借款，这不属于给定安排，应停止“已完成提款”的结果展示.

原始单位资产表用于比较价格路径与现金流调整后的回撤；所有者表则列出售份额、收到的现金及剩余财富. 两张表可以一起分析，但不能用账户提款造成的余额下降冒充资产本身下跌.

### 练习三〔尾部〕：把置信水平提高到99%

在损失0、10、100及原概率下，求99%VaR与ES，再求99.5%的结果. 为什么99%时VaR仍是10？

**解析.** $F_L(10)=0.99$，按本篇的 $\inf\{\ell:F_L(\ell)\geq c\}$ 约定，99%分位点仍为10. 最坏1%完全由损失100组成，所以99%ES为100. 置信水平99.5%已经超过0.99，分位点变为100，最坏0.5%取自该损失档，ES同样为100. 积分中单个端点不改变面积，但VaR的端点约定会改变离散分布边界上的显示值；因此定义不能省略.

[^mit]: **P-R04a** — Andrew W. Lo, MIT 15.401 *Finance Theory I*, Fall 2008, Lecture13–14, “Risk Analytics and Portfolio Theory”，slides9–11的收益分布和风险定义. 原文：https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/dd628e151309a7f23962b1a31b9356e5_MIT15_401F08_lec13.pdf . 路径及提款例为教学设定.
[^fsb]: **P-R06** — Financial Stability Board, *Liquidity Preparedness for Margin and Collateral Calls: Final Report*, 10 December 2024；§1.2（印刷pp.5–8）及§3.2（pp.15–18），用于事件分析、流动性压力与情景测试. 原文：https://www.fsb.org/uploads/P101224-1.pdf .
[^es]: **P-R08** — Carlo Acerbi and Dirk Tasche, *On the Coherence of Expected Shortfall*, arXiv cond-mat/0104295v5, 2 May 2002；§2、Proposition3.2及证明（印刷p.6）、式(3.3)（p.7）. 原文：https://arxiv.org/pdf/cond-mat/0104295 . 这里使用其分位数积分与点质量处理.


## Additional teaching material
## 附录A｜精确交互与静态等价

### A1 路径与提款：`SIM-P03-PATH-01`

锁定单位价格路径 `A=[100,120,96]`、`B=[100,60,96]`，各初始持有1份；没有分红和费用. 默认中途提款 `withdrawal=50`、终点支付任务 `target=40`. 输入提款不得为负；两条路径分别检查可行性，不能只按A的上限限制B.

```text
running_peak[t] = max(price[0:t+1])
drawdown[t] = 1 - price[t]/running_peak[t]
mdd = max(drawdown)
payment_gap = max(0, withdrawal - price[1])
if payment_gap > 0:
    remaining_units = null
    terminal = null
    status = "中途无法完成支付；不生成已执行终点"
else:
    remaining_units = 1 - withdrawal/price[1]
    terminal = remaining_units*price[2]
    terminal_shortfall = max(0, target - terminal)
```

默认结果：A回撤20%、剩余7/12份、终点56、终点缺口0；B回撤40%、剩余1/6份、终点16、终点缺口24. 提款70时，A终点40，B中途缺10、无可执行终点. 提款恰等于中途总价值时，允许全部退出、剩余0，不计算之后未持有资产的投资收益. 金额总和不标为年化收益率.

界面并列两块：不含资金流的单位价值/回撤，与实际份额/所有者现金. 静态等价为第二、三节所有表格和练习二；现金提款必须改变持仓，不能让原始96沿用为实际终财富.

### A2 离散尾部：`SIM-P03-TAIL-01`

输入 `confidence=0.95`、`losses=[0,10,100]`、`probs=[0.94,0.05,0.01]`. 可调整置信水平为`(0,1)`内的数、最严重损失为不低于10的数；默认不开放概率编辑，避免隐式归一化. 相同损失点合并概率后计算. 定义与正文完全相同.

```text
sort and aggregate equal loss values
cdf = cumulative sum(probs)
q = first loss with cdf >= confidence
mass_above = sum(prob where loss > q)
mass_at_q_used = (1-confidence) - mass_above
es = (sum(loss*prob where loss > q) + q*mass_at_q_used)/(1-confidence)
```

数值实现须对恰好等于累计概率的边界使用明确的浮点容差，不能把99%默认跳到下一档；展示时同时列出严格高于阈值的质量和补入的阈值质量.

| 静态配置 | VaR | ES | 被计入的尾部 |
|---|---:|---:|---|
| $c=0.95$，最大损失100 | 10 | 28 | 0.04在损失10，0.01在损失100 |
| $c=0.99$，最大损失100 | 10 | 100 | 0.01在损失100 |
| $c=0.995$，最大损失100 | 100 | 100 | 0.005在损失100 |
| $c=0.95$，最大损失200 | 10 | 48 | 0.04在损失10，0.01在损失200 |

用条形图的文字分段显示概率质量，但保留上表和公式作为打印/无脚本视图. 不得把教学概率称为经验频率、公司的Bull/Base/Bear/Tail判断或风险中性概率.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-P03-PATH-01",
    "title": "提款路径",
    "anchor": "p03-path-branch",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开.",
    "inputs": {
      "A": [
        100,
        120,
        96
      ],
      "B": [
        100,
        60,
        96
      ],
      "withdrawal": 50,
      "target": 40
    },
    "outputs": {
      "A": {
        "mdd": 0.19999999999999996,
        "withdrawal": 50,
        "payment_gap": 0,
        "remaining_units": 0.5833333333333333,
        "terminal": 55.99999999999999,
        "terminal_shortfall": 0
      },
      "B": {
        "mdd": 0.4,
        "withdrawal": 50,
        "payment_gap": 0,
        "remaining_units": 0.16666666666666663,
        "terminal": 15.999999999999996,
        "terminal_shortfall": 24.000000000000004
      },
      "withdraw70_A": {
        "mdd": 0.19999999999999996,
        "withdrawal": 70,
        "payment_gap": 0,
        "remaining_units": 0.41666666666666663,
        "terminal": 40.0,
        "terminal_shortfall": 0
      },
      "withdraw70_B": {
        "mdd": 0.4,
        "withdrawal": 70,
        "payment_gap": 10,
        "remaining_units": null,
        "terminal": null,
        "terminal_shortfall": null
      }
    }
  },
  {
    "id": "SIM-P03-TAIL-01",
    "title": "离散尾部",
    "anchor": "p03-tail-branch",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开.",
    "inputs": {
      "losses": [
        0,
        10,
        100
      ],
      "probabilities": [
        0.94,
        0.05,
        0.01
      ],
      "confidence": 0.95
    },
    "outputs": {
      "default": {
        "confidence": 0.95,
        "max_loss": 100,
        "var": 10,
        "es": 27.999999999999982,
        "mass_above": 0.01,
        "mass_at_q_used": 0.04000000000000004
      },
      "c99": {
        "confidence": 0.99,
        "max_loss": 100,
        "var": 10,
        "es": 99.99999999999991,
        "mass_above": 0.01,
        "mass_at_q_used": 8.673617379884035e-18
      },
      "c995": {
        "confidence": 0.995,
        "max_loss": 100,
        "var": 100,
        "es": 100.0,
        "mass_above": 0,
        "mass_at_q_used": 0.0050000000000000044
      },
      "max200": {
        "confidence": 0.95,
        "max_loss": 200,
        "var": 10,
        "es": 47.999999999999964,
        "mass_above": 0.01,
        "mass_at_q_used": 0.04000000000000004
      },
      "mean_loss": 1.5,
      "conditional_ge_10": 25,
      "conditional_gt_10": 100
    }
  }
]
```

## Sources
- [MIT 15.401, Lecture 13–14: Risk Analytics and Portfolio Theory](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/dd628e151309a7f23962b1a31b9356e5_MIT15_401F08_lec13.pdf): 回报分布、固定权重、协方差与分散
- [Liquidity Preparedness for Margin and Collateral Calls: Final Report](https://www.fsb.org/uploads/P101224-1.pdf): 历史保证金/抵押现金压力与情景检查机制
- [On the Coherence of Expected Shortfall](https://arxiv.org/pdf/cond-mat/0104295): 分位数积分、离散点质量处理

## Content relations
```json
[
  {
    "from": "zh-p03",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p03",
    "relation": "requires",
    "to": "p02-cash-boundary",
    "reason": "避免把所有者提款误算为资产亏损",
    "required_competence": "区分资产收益与外部出入金；同等能力可替代阅读",
    "scope": "只需该局部定义，不锁定P02全篇"
  },
  {
    "from": "p03-path-branch",
    "relation": "illustrated_by",
    "to": "SIM-P03-PATH-01",
    "reason": "同终点资产路径在中途提款后产生不同实际财富"
  },
  {
    "from": "p03-tail-branch",
    "relation": "illustrated_by",
    "to": "SIM-P03-TAIL-01",
    "reason": "展示分位点原子质量与ES的部分质量处理"
  },
  {
    "from": "p03-distribution-path",
    "relation": "supported_by",
    "to": "P-R04a",
    "reason": "随机回报的均值与方差框架",
    "scope": "slides 9–11"
  },
  {
    "from": "p03-liquidity",
    "relation": "supported_by",
    "to": "P-R06",
    "reason": "历史资金压力机制及压力检查范围",
    "scope": "§1.2 pp.5–8；§3.2 pp.15–18"
  },
  {
    "from": "p03-tail-branch",
    "relation": "supported_by",
    "to": "P-R08",
    "reason": "离散分布的尾部平均需要处理分位点质量",
    "scope": "§2；Proposition 3.2及证明；式(3.3)；本篇转为损失高尾记号"
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 3/9
用路径、回撤与尾部结果刻画具体风险.
将风险对象落到持仓与共同业务因素上.
Next: [风险敞口、相关性与分散](https://ou-liu-red-sugar.github.io/zh/notebook/exposures-correlation-diversification/)
