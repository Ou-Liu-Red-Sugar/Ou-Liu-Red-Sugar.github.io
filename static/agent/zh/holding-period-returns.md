# 持有期回报与资金基数

从估值与现金记录重建持有期回报、TWR和MWR，选择与问题匹配的口径。

Entry: zh-p02 | Node: P02 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你是P02“持有期回报与资金基数”的教学Agent。先实际打开本包脚注中的Zivot收益章、GIPS Handbook指定条款和Vanguard FS540，读取上述完整单元及必要公式。核对Vanguard原页为2026-06-30、F0540 062026，年度基金回报为−18.15%与26.24%。不得只看目录、搜索摘要或默认当前链接仍是同一期。

在运行日志中记录URL、版本/日期、读到的章节或页、关键现金约定及支持范围，日志不能预先填“已读”。固定版取不到时，可用本篇已标明日期与定位的两项事实摘录做这些数的演算，但必须注明没有重新取得原PDF；未取得定义原文时先补可核的原作者/机构版本，不以印象替代读取。

先让学习者解释账户从100增加到160、其中追加50时，哪些变化是收益；已会则直接进入VFIAX两年例。让其先重建现金表，再分别计算TWR和MWR，反馈重点是边界与用途，不是多报小数。用“取走4,000”的迁移检验其是否真的理解；熟练者再做缺估值或多IRR题。

不要求先读完P01，不引入股票DCF/WACC，不把基金费用再扣一次。没有日频数据就不接受任意历史申购日期的精确结果。结束时要求学习者说明两种回报为何可以不同、各自回答什么，以及当前记录缺少哪个信息。给出完整推理反馈，而不是只告诉其百分比对错。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-p02",
  "node_id": "P02",
  "export_mode": "public",
  "content_version": "p-a-v2",
  "audience": "有数学背景的高年级本科至研究生",
  "selected_branch": "common + selected branch",
  "learning_task": "从估值与现金记录重建持有期回报、TWR和MWR，选择与问题匹配的口径。",
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
  "reading_protocol": "1. **确认当前学习范围。** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容。识别必读材料，选读材料只有被采用时才转成对应问题的必读。\n2. **实际获取。** 用浏览/文件读取工具打开指定 URL 或随包文件。核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口。\n3. **完整读取所需单元。** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注。PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件。不能只看搜索命中的几行。\n4. **形成简短内容对应。** 每项记录实际位置、读到的关键设定和它支持哪一步教学。例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”。后半句若为本站推论须标为推论。\n5. **满足后才开始该范围的实质教学。** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解。引用跟着对应命题或计算，不在末尾堆书名。\n6. **读取失败时自动处理缺口。** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤。等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围。仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇。\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载。它不能从技术上保证理解，但能让来源与使用之间可检查。",
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
“这笔投资赚了多少”至少可能是在问两件事：资产本身怎样变化，以及一个在不同日期投入、取出资金的人最后得到什么。没有追加资金时，这两个问题很容易得到相同的数字；一旦资金中途进出，它们就不能再混着回答。

我们先把一笔钱的变化算清，再带读基金的历史回报披露，最后在同一条资产路径上改变出资安排。你不需要先读完投资目标那一篇。本篇只要求确定：我们在计算哪个资产或组合、从哪一天到哪一天，以及从谁的角度记录现金。

<a id="p02-single-period"></a>
## 一、价格不是全部所得，账户增加也不一定是收益

令期初每份资产的价格为 $P_0>0$，期末价格为 $P_1$，持有期间每份收到分配 $D$。若分配放在现金中、不产生额外收益，且没有其他出入金或费用，一期总回报是
$$
R=\frac{P_1+D-P_0}{P_0}.
$$
分子是持有带来的净所得，分母是开始承担风险的资金。只用 $(P_1-P_0)/P_0$ 算的是价格回报，会漏掉分配。反过来，若你已经用分配买入更多份额，并把新增份额计入期末财富，就不能再把同一笔分配额加一次。分配发生在期间中途时，再投资日期和买入价格会影响最终份额；“包含分红”不是不需要现金账的理由。[^zivot]

现在把视角放大到一个组合。初始有100，期间投资赚了10，所有者又投入50，期末160。账户增加60，其中只有10来自投资，另50是外部资金。若直接计算 $160/100-1=60\%$，就是把投入本金当作收益。

<a id="p02-cash-boundary"></a>
**现金边界约定。** 本篇把所有者对组合的投入记作组合的外部入金 $C>0$，取走资金记作 $C<0$；从所有者的现金视角，符号恰好相反。组合内收到的股息、出售资产的款项和支付的费用，都先属于组合内部活动。某笔股息后来被所有者取走，应分别记作“资产产生股息”和“组合向所有者支付”，而不是二选一地抹掉其中一项。

这个分类决定收益计算的边界。基金收到所持公司的分红，与基金份额持有人另行申购，是两种不同的变化。费用则会减少所得，不是为了美化表现就可以剔除的外部提款。GIPS 的计量讨论同样把总回报、外部现金流与估值时点分开；这里借用其计算解释，不要求一个教学账户承担机构报告的全部合规义务。[^gips]

<a id="OBS-VFIAX-20260630"></a>
<a id="p02-historical-example"></a>
## 二、读一份真实披露：两年回报不能直接相加

Vanguard 500 Index Fund Admiral Shares，证券代码 VFIAX，是基金的一种份额类别。本篇使用其**截至2026年6月30日**的事实表，文件标识 `F0540 062026`。第1页的年度回报表给出如下两项数据，并说明回报包含分配再投资、已经扣除基金费用。我们只截取计算需要的两年；这是根据后来披露做的历史演算，不是一份当时的买入决策记录。[^vfiax]

| 日历年 | 基金披露的总回报 |
|---|---:|
| 2022 | −18.15% |
| 2023 | +26.24% |

设初始投入10,000，不追加也不取走资金。第一年结束后为 $10{,}000\times0.8185=8{,}185$，第二年结束后为 $8{,}185\times1.2624=10{,}332.744$。因此两年累计回报为
$$
(1-0.1815)(1+0.2624)-1=0.0332744=3.32744\%.
$$
两个年度回报相加得到8.09%，但第二年的26.24%是在已经减少的8,185上赚取，不是在原来的10,000上赚取。把两个百分比相加，等于偷偷让第二年重新使用第一年的资金基数。

一般地，如果每一期结束时把所得继续留在同一投资中，且没有外部资金流，财富递推为 $V_j=V_{j-1}(1+r_j)$。逐期代入就得到
$$
V_n=V_0\prod_{j=1}^n(1+r_j).
$$
这里不需要独立同分布或正态假设。它是对已经实现的财富变化的记账关系，不是对未来收益的概率模型。[^zivot]

为了把两年的变化写成一个等效年增长率，令 $g$ 满足 $(1+g)^2=1.0332744$，则 $g=1.65010575\%$。它回答“若每年按同一比例增长，需要多大的比例才能得到相同终值”。两个年度回报的算术平均4.045%回答的是年度观测的平均值，不能替代这个复合增长率。计算的输入只有披露到小数点后两位的百分比，后面的更多位数用于复算核对，不意味着原始数据具有同样精度。

<a id="p02-twr"></a>
## 三、把追加资金放进来：先切开现金边界

现在只改变一件事：第一年结束后，所有者再投入10,000，然后继续持有第二年。为了只使用已取得的数据，我们把时点记为等长教学年 $t=0,1,2$。追加发生在两年之间的估值边界，不指定某个真实申购日。

| 时点与顺序 | 组合中的变化 | 所有者现金流 |
|---|---:|---:|
| $t=0$，建立投资 | 初始价值10,000 | −10,000 |
| $t=1$，追加前 | 价值8,185 | 0 |
| $t=1$，追加10,000后 | 价值18,185 | −10,000 |
| $t=2$，第二年结束 | 价值22,956.744 | 若全部退出，收到22,956.744 |

最后一行来自 $18{,}185\times1.2624$。期末财富比不追加时多了12,624，其中10,000是新增本金，2,624是新增本金参与第二年投资的所得。不能把增加的12,624全算成原来10,000的投资能力。

怎样去掉外部入金对收益率的直接影响？在每次外部现金流前后分开估值。用 $V_j^-$ 表示第 $j$ 个边界处流入前的组合价值，$V_j^+=V_j^-+C_j$ 表示流入后价值。相邻两次流入之间的回报是
$$
r_j=\frac{V_j^-}{V_{j-1}^+}-1,
\qquad
R_{\mathrm{TWR}}=\prod_j(1+r_j)-1.
$$
这就是本篇使用的精确时间加权回报：先计算各段投资回报，再几何连接。此例的两段仍然是−18.15%和+26.24%，因此 TWR 的两年累计值仍为3.32744%，年化值仍为1.65010575%。[^gips]

“TWR 不受出入金影响”应这样理解：在各段投资回报既定、边界估值正确时，单纯往账户加入本金不会被记成收益。它不意味着现实中的大额申购永远不会改变持仓、成交成本或策略，也不意味着一个 TWR 数字已经证明了管理能力。后两个问题需要另外的分析。

缺少现金流发生前的估值时，不能凭期初、期末和出资总额反推出精确 TWR。按资金在场时间作权重的 Modified Dietz 等办法可以给近似，但近似的条件和误差应当另说，不能把插值当成已经观测到的净值。[^gips]

<a id="p02-mwr"></a>
## 四、资金加权回报：这个出资人经历了什么

TWR 刻意去除了出资金额的直接影响，但出资人可能正想知道：自己先后投入的这些钱，整体相当于取得了怎样的收益？这时现金流的大小与时间不能被删掉。

本例可用内部收益率 IRR 表达资金加权回报 MWR。令 $i>-1$ 为等效年利率，使各笔现金在同一时间尺度下相抵：
$$
-10{,}000-\frac{10{,}000}{1+i}
+\frac{22{,}956.744}{(1+i)^2}=0.
$$
令 $y=1+i>0$，变为 $10{,}000y^2+10{,}000y-22{,}956.744=0$。取满足 $y>0$ 的根，得到
$$
i=\frac{-1+\sqrt{1+4\times2.2956744}}{2}-1
=9.55169695\%.
$$
TWR 年化约1.65%，而这位出资人的 MWR 年化约9.55%，两者都可以算对。原因不是某个公式美化了回报，而是较多本金参与了上涨的第二年。这里 MWR 高于 TWR，不证明追加时点具有可重复的择时能力；它首先是在描述这条已经给定的现金路径。[^gips]

实际日期不等间隔时，可以保留全部现金日期，写成 $\sum_k CF_k/(1+i)^{\tau_k}=0$。若采用实际天数除以365，则 $\tau_k$ 是从起点到该笔现金的天数除以365；采用其他日数惯例时，应明确说明。期末仍未卖出的资产可以作为估值终点放入方程，但应标作“按该估值计算”，不称已经收到了卖出款。

IRR 在这里是现金路径的**结果**，不是为了给资产定价而事先指定的折现率。对期初投入、随后继续投入、最终正额收回这类本例现金流，有一个有效的正 $y$ 根；更复杂的多次收付可能没有唯一有意义的 IRR。遇到这种情况，日期现金表和终财富比较仍然有效，不能挑一个最好看的根作为答案。

现在也能说清两种口径的用途：比较既定区间内投资过程的复合变化，常需要 TWR；描述特定出资人在不同日期投入的资金经历，则需要 MWR 或完整日期现金分析。选哪个取决于问题，而不是看哪个更高。

<div data-experiment-slot="lab-p02"></div>

<a id="p02-net-real"></a>
## 五、名义、实际与税费后：逐层改变的是哪一项？

基金已经报告扣费后的总回报时，再扣一次同一基金费用会重复减少所得。本例 VFIAX 数据还包含分配再投资，因此也不能另加一份分红。真正需要额外加入的，是这个使用者另外承担、而原回报尚未包含的费用或税款；它们是什么、什么时候支付，需要单独给出。[^vfiax]

用一个不对应任何现行税制的**独立教学例**说明顺序。初始100，投资在额外费用前变成110；期末另付费用2。假设教学税款恰好为扣除该费用后收益8的20%，即1.6，则最后剩106.4，名义净回报为6.4%。若同期物价水平上涨5%，期末购买力相对于期初为 $1.064/1.05$，实际回报就是
$$
R_{\mathrm{real}}=\frac{1+R_{\mathrm{nominal}}}{1+\pi}-1
=\frac{1.064}{1.05}-1=1.33333333\%.
$$
直接算 $6.4\%-5\%=1.4\%$ 是近似，不是精确关系。税率、税基和支付日期在这里都是明示假设；这组数不与 VFIAX 的披露拼接。实际回报的换算来自名义财富除以价格水平，而不是再造一个投资策略。[^zivot]

本篇最后应留下的不是一个孤立百分比，而是这样一条记录：投资边界与币种、估值时点、外部出入金、已含及未含的所得与费用、计算公式和用途。它让下一篇讨论损失时知道，我们究竟是在研究资产变化，还是某位出资人的财富变化。

<a id="p02-exercises"></a>
## 六、练习与完整解析

### 练习一：第二年开始前改为取走4,000

仍使用前述两段回报，但 $t=1$ 不追加，而是取走4,000，取出的现金不再投资。求期末组合价值、TWR 和 MWR。期末价值加已取走的钱为什么不等于一个已经年化的收益率？

**解析。** 第一年后为8,185，取款后剩4,185；期末为 $4{,}185\times1.2624=5{,}283.144$。TWR 仍连接原来两段回报，累计3.32744%。所有者现金流为 $(-10{,}000,+4{,}000,+5{,}283.144)$，故
$10{,}000y^2-4{,}000y-5{,}283.144=0$，有效根给出年化 MWR <strong>−4.61336989%</strong>。

期末5,283.144加上早先取出的4,000，共9,283.144，名义净所得为−716.856。这种直接相加保留了未再投资现金的总金额，却没有把4,000提早收到的时间压成一个等效年率。它可以回答总共拿回多少，不可冒充年化回报。这个结果也说明，资产最终略有盈利，不意味着每一种提款路径都盈利。

### 练习二：只有期初、入金和期末，能算精确TWR吗？

初始100，第一年结束时投入100，两年末价值240。没有追加前的中间估值。比较两种可能：追加前价值80，或追加前价值120。

**解析。** 若中间为80，两段增长因子为 $0.8$ 和 $240/180$，累计 TWR 为 $0.8\times240/180-1=6.66666667\%$。若中间为120，则为 $1.2\times240/220-1=30.90909091\%$。两种路径与已知的期初、入金和期末数据都相容，因此精确 TWR 无法识别。

两种情况的所有者日期现金相同，MWR 则相同：$y^2+y-2.4=0$，年化为 <strong>12.78820596%</strong>。缺少的信息限制的是哪个计算，应当具体指出，而不是笼统说“数据不够，所以什么都算不了”。

### 练习三〔选读〕：两个IRR根

等间隔现金流为 $(-100,+230,-132)$。证明10%和20%都满足IRR方程，并解释为什么不应直接采用20%。

**解析。** 乘以 $y^2$ 后得到 $100y^2-230y+132=0$，即 $100(y-1.1)(y-1.2)=0$。两根都在 $i>-1$ 的范围内。这条路径既有回收又有后续付款，无法仅靠“使现值相抵”给出唯一等效回报。应保留原现金路径，并在明确的资金安排或共同终点上比较；采用20%只是选择较有利的根，并没有补充任何经济依据。

[^zivot]: **P-R02** — Eric Zivot, *Introduction to Computational Finance and Financial Econometrics with R*, Chapter 1, “Return Calculations”，章页标记 Updated January 30, 2022；实际使用§1.2.2、§1.2.2.1–3、§1.2.2.6–7。原文：https://bookdown.org/compfinezbook/introFinRbook/Return-Calculations.html 。旧税例不作为现行税法来源。本篇公式和教学现金表独立推导。
[^gips]: **P-R03** — CFA Institute, *GIPS Standards Handbook for Firms*，在线版取得于2026-09-21。具体定位：2.A.23–24及Discussion（TWR、外部现金流和估值近似），2.A.28–29及Discussion（MWR、IRR与现金日期）；全文入口：https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/ 。本篇不声称读完整本手册，也不把机构合规条款当作个人账户规则。
[^vfiax]: **P-R07 / OBS-VFIAX-20260630** — Vanguard, *Vanguard 500 Index Fund Admiral Shares, VFIAX*，June 30, 2026，文件标识F0540 062026，p.1 “Annual Returns”基金行及总回报脚注。原件：https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf 。披露值经四舍五入；本篇出资与取款是教学变式，未声称实际历史申购。该URL会更新，案例身份固定为所用期次。


## Additional teaching material
## 附录A｜精确交互与静态等价

交互ID：`SIM-P02-FLOWS-01`。来源数据锁定 `OBS-VFIAX-20260630` 的两项历史年度回报；所有出资安排均为教学变式。默认本金 `v0=10000`、边界追加 `a=10000`、`timing=1`，回报固定 `r1=-0.1815,r2=0.2624`。金额单位为教学货币单位，不冒充实际成交的美元份额账。

允许操作是选择“开始时投入额外资金”或“第一子期结束时投入/取出”。没有日频估值，不设置任意日期拖动条。公式：

```text
f1 = 1 + r1
f2 = 1 + r2
twr = f1*f2 - 1
twr_annual = sqrt(f1*f2) - 1

if timing == 1:
    pre = v0*f1
    post = pre + a
    final = post*f2
    y = (-a + sqrt(a*a + 4*v0*final)) / (2*v0)
    mwr = y - 1
    investor_cash = [-v0, -a, final]
else:
    initial = v0 + a
    pre = initial*f1
    post = pre
    final = initial*f1*f2
    mwr = twr_annual
    investor_cash = [-initial, 0, final]
```

要求 `v0>0`，边界模式 `post>0`，开始模式 `initial>0`。若取款耗尽或超过组合，不继续用负分母套公式；完整退出后的新一轮投资应另定计量区间。交互中`timing=0`表示**计量区间开始前**改变起始承诺：此时负的`additional_amount`只能解释为“初始投入较少”，不能叫作期间取款；真正的期间取款必须放在后续已定义的估值边界。所有界面先显示现金表，再显示回报，符号明确标“组合”或“所有者”。

| 静态默认/对照 | 期末财富 | 两年TWR | 年化MWR |
|---|---:|---:|---:|
| 不追加 | 10,332.744 | 3.32744% | 1.65010575% |
| $t=1$追加5,000 | 16,644.744 | 3.32744% | 6.41439799% |
| $t=1$追加10,000〔默认〕 | 22,956.744 | 3.32744% | 9.55169695% |
| $t=1$取出4,000 | 5,283.144 | 3.32744% | −4.61336989% |
| $t=0$额外投入10,000 | 20,665.488 | 3.32744% | 1.65010575% |

第三、四节的现金表与公式、上表及练习二就是完整静态等价。可使用两条资金规模折线，但曲线中间只连线示意、不生成中间估值；屏幕和打印都保留数据日期身份。禁止为已经扣费的披露设置默认重复扣费。另一个“独立税费例”须完全独立标识，不能改变历史披露值。

## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-P02-FLOWS-01",
    "title": "回报与出入金",
    "anchor": "p02-twr",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开。",
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
- [GIPS Standards Handbook for Firms](https://www.gipsstandards.org/standards/gips-standards-for-firms/gips-standards-handbook-for-firms/): GIPS Standards Handbook for Firms

本批读取范围：外部现金流、TWR/MWR、净费用方法和费用应计/付款。
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
为含外部出入金的过程选择并复算回报口径。
同样的期末回报，过程中可能承担不同的损失。
Next: [风险、损失与情景](https://ou-liu-red-sugar.github.io/zh/notebook/risk-loss-scenarios/)
