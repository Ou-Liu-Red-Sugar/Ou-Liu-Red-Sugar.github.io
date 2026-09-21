# 持有期回报与资金基数

从估值与现金记录重建持有期回报、TWR和MWR，选择与问题匹配的口径.

Entry: zh-p02 | Node: P02 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 讲解前实际读取 required_readings 及所选分支 required_readings_by_branch 的完整指定单元，记录版本、范围、定义或方法及其支持内容；可选分支选定后读取对应原件. 必要原件缺失时先取得同机构或作者的等价可读版本，齐全后进入依赖它的讲解. 用VFIAX 2022、2023回报和边界追加10,000重建TWR与MWR. 改为取款4,000，再解释缺失边界估值的非识别及多重IRR. 费用和分配沿原披露口径，额外税费例独立计算. 先用一个完整任务诊断，再让读者推导或分析，按正文解析反馈；已掌握步骤直接跳过，最后用迁移题检验. 数据日期、教学参数及模型条件沿本包采用；实际读取记入 runtime_reading_log.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-p02",
  "node_id": "P02",
  "export_mode": "public",
  "content_version": "2026-09-22-deep-review",
  "audience": "有数学背景的高年级本科至研究生",
  "selected_branch": "common + selected branch",
  "learning_task": "用VFIAX 2022、2023回报和边界追加10,000重建TWR与MWR. 改为取款4,000，再解释缺失边界估值的非识别及多重IRR. 费用和分配沿原披露口径，额外税费例独立计算.",
  "body_source": "body_markdown",
  "required_readings": [
    {
      "source_id": "P-R02",
      "title": "Introduction to Computational Finance and Financial Econometrics with R — Chapter 1 Return Calculations",
      "authors": [
        "Eric Zivot"
      ],
      "version": {
        "chapter_update": "2022-01-30",
        "original_plan_book_home_date": "2022-02-25"
      },
      "access": {
        "kind": "html_full_text",
        "uri": "https://bookdown.org/compfinezbook/introFinRbook/Return-Calculations.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§1.2.2；§1.2.2.1–3、§1.2.2.6–7；分配、实际/名义及复利关系",
        "scope": "§1.2.2；§1.2.2.1–3、§1.2.2.6–7；分配、实际/名义及复利关系",
        "purpose": "回报、复利、分配和购买力口径"
      },
      "supports": "回报、复利、分配和购买力口径",
      "fallback_source_ids": []
    },
    {
      "source_id": "P-R03",
      "title": "GIPS Standards Handbook for Firms",
      "authors": [
        "CFA Institute"
      ],
      "version": {
        "edition_context": "2020 GIPS Standards；当前在线Handbook按2026-09-21访问",
        "accessed": "2026-09-21"
      },
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "2.A.23–24、2.A.28–29及Discussion；子期估值、连接、MWR与日期公式",
        "scope": "2.A.23–24、2.A.28–29及Discussion；子期估值、连接、MWR与日期公式",
        "purpose": "TWR/MWR边界和估值要求、近似身份"
      },
      "supports": "TWR/MWR边界和估值要求、近似身份",
      "fallback_source_ids": []
    },
    {
      "source_id": "P-R07",
      "title": "Vanguard 500 Index Fund Admiral Shares — VFIAX",
      "authors": [
        "Vanguard"
      ],
      "version": {
        "as_of": "2026-06-30",
        "document_marker": "F0540 062026"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "p.1 Annual Returns、总回报及费用脚注",
        "scope": "p.1 Annual Returns、总回报及费用脚注",
        "purpose": "2022/2023基金年度回报及十大持仓合计37.9%"
      },
      "supports": "2022/2023基金年度回报及十大持仓合计37.9%",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "SIM-P02-FLOWS-01": {
      "inputs": {
        "v0": 10000,
        "r1": -0.1815,
        "r2": 0.2624,
        "timing": 1,
        "additional_amount": 10000
      },
      "default": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 18185.0,
        "final": 22956.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.0955169695117628,
        "investor_cash": [
          -10000.0,
          -10000.0,
          22956.744
        ]
      },
      "no_flow": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 8185.0,
        "final": 10332.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.01650105754986808,
        "investor_cash": [
          -10000.0,
          0,
          10332.744
        ]
      },
      "add5000": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 13185.0,
        "final": 16644.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.06414397993522769,
        "investor_cash": [
          -10000.0,
          -5000,
          16644.744
        ]
      },
      "withdraw4000": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 4185.0,
        "final": 5283.144,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": -0.04613369885635543,
        "investor_cash": [
          -10000.0,
          4000,
          5283.144
        ]
      },
      "initial_extra10000": {
        "initial": 20000.0,
        "pre": 16370.0,
        "post": 16370.0,
        "final": 20665.488,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.01650105754986808,
        "investor_cash": [
          -20000.0,
          0,
          20665.488
        ]
      },
      "missing_valuation": {
        "v0": 100,
        "flow": 100,
        "final": 240,
        "pre80_twr": 0.06666666666666665,
        "pre120_twr": 0.3090909090909091,
        "mwr": 0.12788205960997057
      },
      "multiple_irr": {
        "cashflows": [
          -100,
          230,
          -132
        ],
        "valid_irr_roots": [
          0.1,
          0.2
        ]
      },
      "tax_inflation_separate_sim": {
        "initial": 100,
        "before_fee_end": 110,
        "fee": 2,
        "tax_rate_on_after_fee_gain": 0.2,
        "tax": 1.6,
        "end": 106.4,
        "inflation": 0.05,
        "real_return": 0.01333333333333342
      },
      "timing_semantics": {
        "timing_1": "边界额外金额：正数=追加，负数=组合建立后的取款",
        "timing_0": "计量区间开始前调整起始承诺；负数=初始投入较少，不称期间取款"
      }
    },
    "OBS-VFIAX-20260630": {
      "as_of": "2026-06-30",
      "document_marker": "F0540 062026",
      "source_id": "P-R07",
      "source_url": "https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf",
      "annual_returns": {
        "2022": -0.1815,
        "2023": 0.2624
      },
      "returns_locator": "p.1 Annual Returns基金行和分配再投资/费用脚注",
      "top_ten_fraction": 0.379,
      "holdings_locator": "p.2 Ten Largest Holdings及脚注",
      "fees": "原披露回报已扣基金费用，不重复扣除",
      "individual_weights": null
    }
  },
  "runtime_reading_log": []
}
```

## Supplied entry
“这笔投资赚了多少”至少可能是在问两件事：资产本身怎样变化，以及一个在不同日期投入、取出资金的人最后得到什么. 没有追加资金时，这两个问题很容易得到相同的数字；一旦资金中途进出，它们就不能再混着回答.

计算前先固定三件事：对象是哪个资产或组合、计量期间从哪一天到哪一天，以及现金从谁的视角记录.

<a id="p02-single-period"></a>
## 单期总回报

令期初每份资产的价格为 $P_0>0$，期末价格为 $P_1$，持有期间每份收到分配 $D$. 若分配放在现金中、不产生额外收益，且没有其他出入金或费用，一期总回报是
$$
R=\frac{P_1+D-P_0}{P_0}.
$$
分子是持有带来的净所得，分母是开始承担风险的资金. 只用 $(P_1-P_0)/P_0$ 算的是价格回报，会漏掉分配. 反过来，若你已经用分配买入更多份额，并把新增份额计入期末财富，就不能再把同一笔分配额加一次. 分配发生在期间中途时，再投资日期和买入价格会影响最终份额；“包含分红”不是不需要现金账的理由. [^zivot]

现在把视角放大到一个组合. 初始有100，期间投资赚了10，所有者又投入50，期末160. 账户增加60，其中只有10来自投资，另50是外部资金. 若直接计算 $160/100-1=60\%$，就是把投入本金当作收益.

<a id="p02-cash-boundary"></a>
**现金边界约定.** 本篇把所有者对组合的投入记作组合的外部入金 $C>0$，取走资金记作 $C<0$；从所有者的现金视角，符号恰好相反. 组合内收到的股息、出售资产的款项和支付的费用，都先属于组合内部活动. 某笔股息后来被所有者取走，应分别记作“资产产生股息”和“组合向所有者支付”.

这个分类决定收益计算的边界. 基金收到所持公司的分红，与基金份额持有人另行申购，是两种不同的变化. 费用会减少所得，不属于组合外部提款. GIPS 的计量讨论同样把总回报、外部现金流与估值时点分开. [^gips]

<a id="OBS-VFIAX-20260630"></a>
<a id="p02-historical-example"></a>
## 历史回报与复合

Vanguard 500 Index Fund Admiral Shares（VFIAX）截至**2026年6月30日**的事实表标识为 `F0540 062026`. 第1页年度回报表给出如下两项数据，并说明回报包含分配再投资且已扣除基金费用；这里截取这两年用于复利计算. [^vfiax]

| 日历年 | 基金披露的总回报 |
|---|---:|
| 2022 | −18.15% |
| 2023 | +26.24% |

设初始投入10,000，不追加也不取走资金. 第一年结束后为 $10{,}000\times(1-18.15\%)=8{,}185$，第二年结束后为 $8{,}185\times(1+26.24\%)=10{,}332.744$. 因此两年累计回报为
$$
(1-18.15\%)(1+26.24\%)-1\approx3.327\%.
$$
第二年的26.24%作用于8,185，因此两期回报按增长因子相乘.

一般地，如果每一期结束时把所得继续留在同一投资中，且没有外部资金流，财富递推为 $V_j=V_{j-1}(1+r_j)$. 逐期代入就得到
$$
V_n=V_0\prod_{j=1}^n(1+r_j).
$$
这里不需要独立同分布或正态假设. 它是对已经实现的财富变化的记账关系，不是对未来收益的概率模型. [^zivot]

为了把两年的变化写成一个等效年增长率，令 $g$ 满足 $(1+g)^2=((1-18.15\%)(1+26.24\%))$，得到 $g\approx1.650\%$. 它回答“若每年按同一比例增长，需要多大的比例才能得到相同终值”. 两个年度回报的算术平均4.045%是年度观测均值，不能替代复合增长率.

<a id="p02-twr"></a>
## 时间加权回报

现在只改变一件事：第一年结束后，所有者再投入10,000，然后继续持有第二年. 为了只使用已取得的数据，我们把时点记为等长教学年 $t=0,1,2$. 追加发生在两年之间的估值边界，不指定某个真实申购日.

| 时点与顺序 | 组合中的变化 | 所有者现金流 |
|---|---:|---:|
| $t=0$，建立投资 | 初始价值10,000 | −10,000 |
| $t=1$，追加前 | 价值8,185 | 0 |
| $t=1$，追加10,000后 | 价值18,185 | −10,000 |
| $t=2$，第二年结束 | 价值22,956.744 | 若全部退出，收到22,956.744 |

期末价值为 $18{,}185(1+26.24\%)=22{,}956.744$. 相比不追加资金，多出的12,624由新增本金10,000和该本金第二年所得2,624组成.

在每次外部现金流前后分别估值. 用 $V_j^-$ 表示第 $j$ 个边界处流入前的组合价值，$V_j^+=V_j^-+C_j$ 表示流入后价值，相邻两次流入之间的回报为
$$
r_j=\frac{V_j^-}{V_{j-1}^+}-1,\qquad
R_{\mathrm{TWR}}=\prod_j(1+r_j)-1.
$$
时间加权回报先计算各段投资回报，再几何连接. 本例两段回报仍为−18.15%和26.24%，两年累计约3.327%，年化约1.65%.[^gips]

在各段回报既定、边界估值正确时，追加本金会同时增加该时点的组合价值和下一段的起始分母，因此不直接增加 TWR.

精确 TWR 需要各现金流边界的估值. 缺少这些估值时，Modified Dietz 等方法按资金在场时间加权，给出近似回报.[^gips]

<a id="p02-mwr"></a>
## 资金加权回报

资金加权回报保留各笔出资的大小与日期，用一个等效年率描述出资人经历的现金路径.

本例以内部收益率 IRR 表达资金加权回报 MWR. 令 $i>-1$ 为等效年利率，使日期现金满足
$$
-10{,}000-\frac{10{,}000}{1+i}
+\frac{22{,}956.744}{(1+i)^2}=0.
$$
令 $y=1+i>0$，则 $10{,}000y^2+10{,}000y-22{,}956.744=0$，取正根得到 $i\approx9.552\%$. 它高于 TWR 年化约1.65%，因为较多本金参与了上涨的第二年.[^gips]

实际日期不等间隔时，保留全部日期，写成 $\sum_k CF_k/(1+i)^{\tau_k}=0$. 采用 Actual/365 时，$\tau_k$ 为距起点天数除以365. 未卖出资产以期末估值进入最后一项.

本例期初投入、随后追加、最终正额收回，对应唯一的正 $y$ 根. 更复杂的多次收付可以产生多个 IRR 或无有效根，此时保留日期现金表，并在共同终点比较财富.

TWR 衡量各段投资回报的复合变化；MWR 衡量特定出资路径的等效回报.

<div data-experiment-slot="lab-p02"></div>

<a id="p02-net-real"></a>
## 费用与实际回报

VFIAX 披露值已经扣除基金费用并计入分配再投资. 使用者另外承担的税款或交易费用，按实际金额和支付日另计.[^vfiax]

另设教学税费例：初始100，费用前终值110，期末另付费用2，并对扣费后收益8征收20%的税款1.6. 净终值106.4，名义回报6.4%. 同期物价上涨5%时，
$$
R_{\mathrm{real}}=\frac{1+R_{\mathrm{nominal}}}{1+\pi}-1
=\frac{1.064}{1.05}-1\approx1.333\%.
$$
名义财富除以价格水平得到实际购买力. 直接相减所得1.4%是其近似.[^zivot]

<a id="p02-exercises"></a>
## 练习与解析

### 边界取款

仍使用前述两段回报，但 $t=1$ 不追加，而是取走4,000，取出的现金不再投资. 求期末组合价值、TWR 和 MWR. 期末价值加已取走的钱为什么不等于一个已经年化的收益率？

**解析.** 第一年后8,185，取款后4,185，期末 $4{,}185(1+26.24\%)=5{,}283.144$. TWR 累计仍约3.327%. 所有者现金流为 $(-10{,}000,+4{,}000,+5{,}283.144)$，所以 $10{,}000y^2-4{,}000y-5{,}283.144=0$，有效根给出年化 MWR 约−4.613%.

期末价值加未再投资的取款共9,283.144，名义净所得为−716.856. 这个总额保留收回金额；MWR 进一步计入4,000提前一年的时间.

### 缺失边界估值

初始100，第一年结束时投入100，两年末价值240. 没有追加前的中间估值. 比较两种可能：追加前价值80，或追加前价值120.

**解析.** 中间价值为80时，累计 TWR 为 $0.8\times240/180-1\approx6.667\%$；为120时，累计 TWR 为 $1.2\times240/220-1\approx30.909\%$. 两种路径都符合已知期初、入金和期末数据，精确 TWR 因而无法识别.

两种路径的所有者日期现金相同，MWR 同为 $y^2+y-2.4=0$ 的有效根减1，约12.788%.

### 多重 IRR〔选读〕

等间隔现金流为 $(-100,+230,-132)$. 证明10%和20%都满足IRR方程，并解释为什么不应直接采用20%.

**解析.** 乘以 $y^2$ 得 $100y^2-230y+132=100(y-1.1)(y-1.2)=0$. 两根均满足 $i>-1$，现值相抵条件无法唯一确定等效回报. 比较时需另给资金安排或共同终点.

[^zivot]: **P-R02** — Eric Zivot, *Introduction to Computational Finance and Financial Econometrics with R*, Chapter 1, “Return Calculations”，Updated January 30, 2022；§1.2.2、§1.2.2.1–3、§1.2.2.6–7. 原文：https://bookdown.org/compfinezbook/introFinRbook/Return-Calculations.html .
[^gips]: **P-R03** — CFA Institute, *GIPS Standards Handbook for Firms*，在线版取得于2026-09-21；2.A.23–24及Discussion（TWR、外部现金流和估值近似），2.A.28–29及Discussion（MWR、IRR与现金日期）. 全文入口：https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/ .
[^vfiax]: **P-R07 / OBS-VFIAX-20260630** — Vanguard, *Vanguard 500 Index Fund Admiral Shares, VFIAX*，June 30, 2026，文件标识F0540 062026，p.1 “Annual Returns”基金行及总回报脚注. 原件：https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf . 披露值经四舍五入；

## Additional teaching material
## 静态计算

VFIAX 2026-06-30披露的2022、2023年度回报分别−18.15%、26.24%；以下出资安排为教学设定，金额为货币单位.

| 静态默认/对照 | 期末财富 | 两年TWR | 年化MWR |
|---|---:|---:|---:|
| 不追加 | 10,332.744 | 3.327% | 1.650% |
| $t=1$追加5,000 | 16,644.744 | 3.327% | 6.414% |
| $t=1$追加10,000〔默认〕 | 22,956.744 | 3.327% | 9.552% |
| $t=1$取出4,000 | 5,283.144 | 3.327% | −4.613% |
| $t=0$额外投入10,000 | 20,665.488 | 3.327% | 1.650% |


TWR 连接两段回报，MWR 解所有者日期现金方程. 边界取款后组合价值须为正；完全退出后重新投资另设计量区间. 起点额外投入调整初始本金，期间现金流则放在已定义估值边界. 原始参数与计算结果见实验数据.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-P02-FLOWS-01",
    "title": "回报与出入金",
    "anchor": "p02-twr",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开.",
    "inputs": {
      "v0": 10000,
      "r1": -0.1815,
      "r2": 0.2624,
      "timing": 1,
      "additional_amount": 10000
    },
    "outputs": {
      "default": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 18185.0,
        "final": 22956.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.0955169695117628,
        "investor_cash": [
          -10000.0,
          -10000.0,
          22956.744
        ]
      },
      "no_flow": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 8185.0,
        "final": 10332.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.01650105754986808,
        "investor_cash": [
          -10000.0,
          0,
          10332.744
        ]
      },
      "add5000": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 13185.0,
        "final": 16644.744,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.06414397993522769,
        "investor_cash": [
          -10000.0,
          -5000,
          16644.744
        ]
      },
      "withdraw4000": {
        "initial": 10000.0,
        "pre": 8185.0,
        "post": 4185.0,
        "final": 5283.144,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": -0.04613369885635543,
        "investor_cash": [
          -10000.0,
          4000,
          5283.144
        ]
      },
      "initial_extra10000": {
        "initial": 20000.0,
        "pre": 16370.0,
        "post": 16370.0,
        "final": 20665.488,
        "twr": 0.03327440000000004,
        "twr_annual": 0.01650105754986808,
        "mwr": 0.01650105754986808,
        "investor_cash": [
          -20000.0,
          0,
          20665.488
        ]
      },
      "missing_valuation": {
        "v0": 100,
        "flow": 100,
        "final": 240,
        "pre80_twr": 0.06666666666666665,
        "pre120_twr": 0.3090909090909091,
        "mwr": 0.12788205960997057
      },
      "multiple_irr": {
        "cashflows": [
          -100,
          230,
          -132
        ],
        "valid_irr_roots": [
          0.1,
          0.2
        ]
      },
      "tax_inflation_separate_sim": {
        "initial": 100,
        "before_fee_end": 110,
        "fee": 2,
        "tax_rate_on_after_fee_gain": 0.2,
        "tax": 1.6,
        "end": 106.4,
        "inflation": 0.05,
        "real_return": 0.01333333333333342
      },
      "timing_semantics": {
        "timing_1": "边界额外金额：正数=追加，负数=组合建立后的取款",
        "timing_0": "计量区间开始前调整起始承诺；负数=初始投入较少，不称期间取款"
      }
    }
  }
]
```

## Sources
- [Introduction to Computational Finance and Financial Econometrics with R — Chapter 1 Return Calculations](https://bookdown.org/compfinezbook/introFinRbook/Return-Calculations.html): 回报、复利、分配和购买力口径
- [GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/): GIPS对外部现金流、时间加权回报、资金加权回报、费用处理以及费用应计与付款的规定.
- [Vanguard 500 Index Fund Admiral Shares — VFIAX](https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf): 2022/2023基金年度回报及十大持仓合计37.9%

## Content relations
```json
[
  {
    "from": "zh-p02",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "p02-historical-example",
    "relation": "illustrated_by",
    "to": "OBS-VFIAX-20260630",
    "reason": "使用固定披露中的2022与2023总回报",
    "scope": "p.1 Annual Returns及回报脚注"
  },
  {
    "from": "p02-twr",
    "relation": "illustrated_by",
    "to": "SIM-P02-FLOWS-01",
    "reason": "同一资产路径改变外部现金流，区分投资过程与资金经历"
  },
  {
    "from": "p02-single-period",
    "relation": "supported_by",
    "to": "P-R02",
    "reason": "总回报、复利和分配的口径",
    "scope": "§1.2.2及§1.2.2.1–3"
  },
  {
    "from": "p02-twr",
    "relation": "supported_by",
    "to": "P-R03",
    "reason": "边界估值、子期连接与近似方法的区别",
    "scope": "2.A.23–24及Discussion"
  },
  {
    "from": "p02-mwr",
    "relation": "supported_by",
    "to": "P-R03",
    "reason": "资金加权计量与日期现金",
    "scope": "2.A.28–29及Discussion"
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 2/9
为含外部出入金的过程选择并复算回报口径.
同样的期末回报，过程中可能承担不同的损失.
Next: [风险、损失与情景](https://ou-liu-red-sugar.github.io/zh/notebook/risk-loss-scenarios/)
