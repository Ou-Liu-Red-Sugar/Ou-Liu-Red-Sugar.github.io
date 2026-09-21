# 风险敞口、相关性与分散

从证券权重识别共同敞口，推导组合方差和描述性beta，并区分披露、统计估计与压力假设.

Entry: zh-p06 | Node: P06 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你负责P06“风险敞口、相关性与分散”. 开始前实际读取本包Vanguard、MIT两份讲义的指定单元，选择BIS分支时再读Box A全文和图注. 核对事实表原页为2026-06-30、F0540 062026，十大组37.9%而非十项各自权重. 记录来源、版本、实际页/slide、已知及未披露字段. 只成功打开URL或读摘要不算完成.

先让学习者解释“持有两只基金”和“持有两份不同底层风险”是否相同；基础熟练者直接计算60%基金加40%现金的底层暴露. 要求其给每个输入标注披露、估计或假设. 随后明确切换到独立的两风险资产模型，从财富加总推导回报和协方差公式，不把该模型的rho绑定到真实基金.

让学习者先预测相关性变化方向，再算交叉项；之后更换beta基准，检验其是否知道资产没有随基准一起改变. 用完全负相关但仍有8%波动的迁移题检查是否理解幅度匹配. 结束时给完整解答，并让其指出持仓表还不能识别哪些问题.

P03全篇不是硬先修. 缺少同日持仓、收益样本或分部字段时，不捏造重叠比例、当前beta或供应链因果. 历史BIS结果不表述为2026年的当前值. 若动态来源不再提供固定期次，可用本篇有定位的事实摘录完成其明确覆盖的数值例，并记录未重新取得原PDF；定义和论文依赖仍须实际取得所需正文或核实的等价来源.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-p06",
  "node_id": "P06",
  "export_mode": "public",
  "content_version": "p-a-v2",
  "audience": "有数学背景的高年级本科至研究生",
  "selected_branch": "common + selected branch",
  "learning_task": "从证券权重识别共同敞口，推导组合方差和描述性beta，并区分披露、统计估计与压力假设.",
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
      "source_id": "P-R04b",
      "title": "MIT 15.401, Lecture 15–17: The CAPM and APT",
      "authors": [
        "Andrew W. Lo"
      ],
      "version": {
        "course": "Fall 2008"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides 6、8、17正文与原页",
        "scope": "slides 6、8、17正文与原页",
        "purpose": "描述性beta定义、线性组合与估计身份"
      },
      "supports": "描述性beta定义、线性组合与估计身份",
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
        "locator": "p.2 十大持仓列表、37.9% 合计及脚注",
        "scope": "p.2 十大持仓列表、37.9% 合计及脚注",
        "purpose": "2022/2023基金年度回报及十大持仓合计37.9%"
      },
      "supports": "2022/2023基金年度回报及十大持仓合计37.9%",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "P-R05",
      "title": "The correlation of equity and bond returns",
      "authors": [
        "Marco Lombardi",
        "Vladyslav Sushko"
      ],
      "version": {
        "published": "2023-12-04"
      },
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bis.org/publications/correlation-equity-and-bond-returns",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "相同完整Box A与图A1；原页截图核图注",
        "scope": "相同完整Box A与图A1；原页截图核图注",
        "purpose": "历史相关性及经济环境解释"
      },
      "supports": "历史相关性及经济环境解释",
      "fallback_source_ids": [],
      "required_if_selected": "regime"
    }
  ],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "SIM-P06-LOOKTHROUGH-01": {
      "inputs": {
        "wealth0": 100,
        "fund_weight": 0.6,
        "top_group": 0.379,
        "group_return": -0.3,
        "rest_return": 0,
        "cash_return": 0
      },
      "group_exposure": 0.2274,
      "rest_exposure": 0.3726,
      "return": -0.06821999999999999,
      "final": 93.17800000000001,
      "with_rest_down10pc_return": -0.10547999999999999,
      "with_rest_down10pc_final": 89.45200000000001
    },
    "SIM-P06-COV-01": {
      "inputs": {
        "wA": 0.6,
        "wB": 0.4,
        "sigmaA": 0.2,
        "sigmaB": 0.1,
        "rho": -0.5,
        "period": "one year model"
      },
      "default": {
        "rho": -0.5,
        "variance": 0.0112,
        "volatility": 0.10583005244258362,
        "beta_to_A": 0.4999999999999999,
        "beta_to_B": -0.19999999999999996
      },
      "rho_positive_half": {
        "rho": 0.5,
        "variance": 0.0208,
        "volatility": 0.14422205101855956,
        "beta_to_A": 0.6999999999999998,
        "beta_to_B": 1.0
      },
      "rho0": {
        "rho": 0,
        "variance": 0.016,
        "volatility": 0.12649110640673517,
        "beta_to_A": 0.5999999999999999,
        "beta_to_B": 0.4
      },
      "rho_minus_one": {
        "rho": -1,
        "variance": 0.0063999999999999994,
        "volatility": 0.08,
        "beta_to_A": 0.3999999999999999,
        "beta_to_B": -0.7999999999999998
      },
      "rho_one": {
        "rho": 1,
        "variance": 0.0256,
        "volatility": 0.16,
        "beta_to_A": 0.7999999999999998,
        "beta_to_B": 1.6
      },
      "negative_corr_balanced": {
        "rho": -1,
        "variance": 0.0,
        "volatility": 0.0,
        "beta_to_A": -8.673617379884034e-17,
        "beta_to_B": 0.0
      },
      "equal_weight_extension": {
        "sigma": 0.2,
        "rho": 0.4,
        "n1": 0.2,
        "n10": 0.13564659966250536,
        "n100": 0.12743625857659194,
        "limit": 0.1264911064067352
      },
      "model_conditions": [
        "same_horizon",
        "same_return_definition",
        "same_numeraire_currency",
        "finite_second_moments",
        "fixed_start_weights_for_single_period_identity"
      ]
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
持有十个证券名称，不一定承担十种相互独立的风险. 两个基金可能重复持有同一批公司；看起来属于不同行业的公司，也可能共同依赖一种客户预算、融资条件或投入品. 另一方面，共同上涨或下跌本身又不能证明它们存在某种具体业务关系.

我们先读一份基金披露，把外层持仓拆到已知的底层暴露；再从回报的加权和推导协方差与beta. 这样可以分别看清“实际持有什么”和“这些资产在一个统计模型中怎样共同变化”. 不必先读完风险篇，收益口径、方差和协方差的必要定义都会在这里接上.

<a id="p06-lookthrough"></a>
## 一、从证券名称走到底层持仓

本篇使用 VFIAX 截至2026年6月30日的事实表，文件标识 `F0540 062026`. 第2页的十大持仓列表包括 NVIDIA、Apple、Alphabet、Microsoft、Amazon、Broadcom、Micron、Meta、Tesla、Eli Lilly；十项合计占基金净资产<strong>37.9%</strong>. 原表没有给出各自权重，持仓脚注还排除了临时现金投资和权益指数产品，因此不能把37.9%均分给十家公司，也不能把这组直接当成一个行业. [^vfiax]

在这个披露上建立一份**虚构的100单位组合**：60买入该基金，40保留现金. 已知的底层十大持仓组对应 $60\times37.9\%=22.74$，剩余基金净资产对应37.26. 外层只有基金和现金两个项目，内部已经有不同的价格敞口.

更一般地，若组合投向基金 $i$ 的权重为 $w_i$，该基金投向底层对象 $j$ 的净资产比例为 $a_{ij}$，那么在这份同日期、口径一致的现金权益持仓表中，底层权重为
$$
e_j=\sum_i w_i a_{ij}.
$$
直接持有股票可以看作只投向该股票的一行. 这个公式来自金额逐层相乘再相加；若两只基金都持有同一股票，两部分必须加到同一个对象上，不能因为基金名称不同就保留成两份独立风险.

现在指定一个压力变式：十大持仓组的价值统一下降30%，其他基金净资产及现金不变；没有交易、分配或再平衡. 初始权重下组合的静态损失为 $22.74\times30\%=6.822$，即6.822%.

| 教学组合的组成 | 冲击前价值 | 设定的变化 | 冲击后价值 |
|---|---:|---:|---:|
| 基金内十大持仓组 | 22.740 | −30% | 15.918 |
| 基金其余净资产 | 37.260 | 0 | 37.260 |
| 组合外部现金 | 40.000 | 0 | 40.000 |
| 合计 | 100.000 | −6.822% | 93.178 |

37.9%来自固定期次披露，60%组合权重和−30%冲击来自教学设定. 这个结果既不是VFIAX的实际历史亏损，也没有说明该冲击的概率. 它回答的是一个条件问题：**若这一组发生指定变化，而其他部分按假设不变，组合会怎样？**

披露的局限也能准确定位：不知道十项各自权重，就不能计算其中某一家公司单独下跌的精确损失；没有各项同期回报，就不能从这张持仓表估计相关性. 这里已经识别了部分暴露，但没有假装看见整张风险地图.

<div data-experiment-slot="lab-p06look"></div>

<a id="p06-covariance-definition"></a>
## 二、为什么组合风险不是各项风险直接相加？

从这里开始换成一组**独立的两风险资产参数实验**，不再指称上面的基金与现金. 考虑一个期间，初始权重 $w_i$ 固定、总和为1，没有外部资金流、交易或另计费用，各资产同期间总回报为 $R_i$. 期初资金 $V_0$ 投向第 $i$ 项的金额为 $w_iV_0$，期末合计为 $\sum_iw_iV_0(1+R_i)$，所以
$$
R_p=\sum_iw_iR_i.
$$
这里的权重是期间开始时的权重，不是价格变动后重新计算的期末权重；如果期间持续再平衡，应分段记账，不能仍称一段固定权重.

这个加总还要求各项 $R_i$ 使用**同一计量期间、同一回报口径和同一计价货币**. 例如一项写美元总回报、另一项写本币价格回报，或一项用月度而另一项用年度，不能直接塞进同一个协方差矩阵. 若跨币种投资要以某一投资者货币评价，应先把汇率变化按同一现金边界并入相应回报；这一步属于数据构造，不由相关系数替我们完成.

设各项回报二阶矩有限，均值为 $\mu_i$，协方差为
$\Sigma_{ij}=\mathbb{E}[(R_i-\mu_i)(R_j-\mu_j)]$. 均值的线性性先给出 $\mu_p=\sum_iw_i\mu_i$，然后展开平方：
$$
\begin{aligned}
\operatorname{Var}(R_p)
&=\mathbb{E}\left[\left(\sum_iw_i(R_i-\mu_i)\right)^2\right]\\
&=\sum_i\sum_jw_iw_j\Sigma_{ij}
=w^\mathsf T\Sigma w.
\end{aligned}
$$
协方差项不是为修正某个经验规则附加的，它是在计算加权和的波动时自然出现的交叉项. 两项经常向相反方向偏离均值，会减少一些合计偏离；经常同向偏离，则会保留更多共同变化. 这是精确的矩关系，不要求正态分布. [^mit]

对两项资产，令 $\sigma_A,\sigma_B>0$，相关系数 $\rho=\operatorname{Cov}(R_A,R_B)/(\sigma_A\sigma_B)$，就有
$$
\sigma_p^2=w_A^2\sigma_A^2+w_B^2\sigma_B^2
+2w_Aw_B\rho\sigma_A\sigma_B.
$$
令 $w_A=0.6,w_B=0.4$，一年回报波动率分别为20%、10%. 输入都用小数，得到
$\sigma_p^2=0.0144+0.0016+0.0096\rho=0.016+0.0096\rho$.

| 假设相关系数 | 一年回报方差 | 一年回报波动率 |
|---|---:|---:|
| −0.5 | 0.0112 | 10.58300524% |
| 0 | 0.0160 | 12.64911064% |
| +0.5 | 0.0208 | 14.42220510% |
| +1 | 0.0256 | 16.00000000% |

各项资产自身的波动率没有改变，只改变共同变化的程度，组合波动就不同. $0.6\times20\%+0.4\times10\%=16\%$ 对应本例完全正相关的边界，不是任意相关性下的波动率公式. 方差的单位是回报小数的平方，开方后才恢复回报单位.

也要注意，这一比较使用的是两项都为正的权重. 若改变为多空结构，交叉项的符号会随权重改变，不能把“相关越小，风险一定越低”脱离持仓方向写成一般定理.

<div data-experiment-slot="lab-p06cov"></div>

<a id="p06-diversification-limit"></a>
## 三、增加持仓数量，究竟消掉了哪一部分？

为了看清“多买几只”的作用，考虑 $n$ 项等权资产，各自波动率都为 $\sigma$，任意两项相关系数都为 $\rho$. 对角线上有 $n$ 项自身方差，非对角线上有 $n(n-1)$ 项共同变化. 因此
$$
\sigma_p^2
=\frac{n\sigma^2+n(n-1)\rho\sigma^2}{n^2}
=\sigma^2\left(\rho+\frac{1-\rho}{n}\right).
$$
公式告诉我们，单个资产的那部分偏离可随数量分摊，但共同变化的项不会因为名称增加就自动消失. 这与MIT讲义从平均方差和平均协方差分析分散的方式一致. [^mit]

例如 $\sigma=20\%,\rho=0.4$ 时，1项的波动率为20%，10项约13.564660%，100项约12.743626%，继续增加数量趋近 $20\%\sqrt{0.4}\approx12.649111\%$，不是零. 这里是等相关的教学模型，不是说任意100只股票都有这个风险.

模型条件同样重要. 当 $n>1$ 时，等相关矩阵在常数向量方向上的特征值为 $1+(n-1)\rho$，在其正交补上的特征值为 $1-\rho$；两者非负才是合法的协方差结构，故需有 $-1/(n-1)\leq\rho\leq1$；因而不能固定一个负相关系数，再让资产数量无限增长. 本例选择非负0.4，才可以在同一设定下讨论这个极限.

对实际组合，下一步不是只数名称，而是寻找共同条件：同一客户预算下降、某种融资渠道收紧、关键投入变贵，是否会同时改变多个持仓的结果. 业务关系可以提供有经济含义的压力情景；协方差则描述指定模型或样本中的共同回报. 两者互相帮助，但一张相关矩阵本身不能证明某两家企业有采购关系.

<a id="p06-beta"></a>
## 四、Beta必须相对于一个基准来解释

相关系数衡量共同变化的紧密程度，beta则把协方差除以**基准自身的方差**. 给定基准回报 $R_b$ 且 $\operatorname{Var}(R_b)>0$，定义
$$
\beta_{p,b}=\frac{\operatorname{Cov}(R_p,R_b)}
{\operatorname{Var}(R_b)}.
$$
它也可以从最佳线性描述推导出来：用 $a+bR_b$ 近似 $R_p$，在均方误差 $\mathbb{E}[(R_p-a-bR_b)^2]$ 最小时，先得到 $a=\mathbb{E}R_p-b\mathbb{E}R_b$；代回并对 $b$ 求极小，便得到上述协方差比. 这里是带截距的线性投影，不需要假设真实关系处处为一条直线. MIT的beta单元提供了这一定义与组合关系. [^beta]

因为协方差对第一个变量线性，固定权重下 $\beta_{p,b}=\sum_iw_i\beta_{i,b}$. 但数值只有带着基准才完整.

继续用同一个两风险资产参数实验. 在 $\rho=0.5$ 时，协方差为 $0.5\times0.2\times0.1=0.01$. 若以A为基准，
$$
\beta_{p,A}=\frac{0.6\times0.04+0.4\times0.01}{0.04}=0.7.
$$
若改用B为基准，则
$\beta_{p,B}=(0.6\times0.01+0.4\times0.01)/0.01=1$. 组合没有变化，同一期间的方差仍是0.0208，却可以同时拥有“相对于A的0.7”和“相对于B的1”.

因此beta为1不意味着持有基准的完全复制品，beta较低也不意味着总波动一定较低. 线性投影之外仍有残余变化. 若用历史样本估计beta，还需注明基准、日期窗口、频率、总回报还是价格回报，以及是否统一采用超额回报；这些选择不能藏在一个无下标的数字里. [^beta]

因此，这里算的是相对于指定基准的回报敞口，不是资产的未来价格. 更换基准可以改变描述方式，却不能替我们删掉组合中仍然存在的风险.

<a id="p06-regime"></a>
## 五、选读：为什么不能把一次估计永久冻结？

BIS于2023年12月发表的Box A研究美国股票与国债回报的相关性变化. 作者讨论了自2021年中以来转为正相关的历史阶段，并结合通胀、增长及利率反应解释不同环境下的共同变化. 图A1的部分回归使用递归扩展窗口，从2003年1月至2018年1月的初始样本，延伸至2023年9月；它不是截至2026年的实时相关性. [^bis]

这个例子对本篇的作用，是提醒我们检查估计所处的环境：某次增长变化可能对两类资产产生不同作用，某次通胀和利率变化又可能使它们同向调整. 这里没有一个无需检验、永远不变的符号规则. 原文的经验关系也不等于排除了所有竞争解释的因果证明，本篇未复现其底层数据.

因此，组合维护至少有两条更新线：新的持仓披露会改变底层权重；新的经济条件和回报数据会改变我们采用的共同变化假设. 二者分别记录. 不能看到一个季度价格相关上升，就改写长期业务关系；也不能因为业务长期不同，就拒绝检查它们在某个压力下共同下跌的可能性.

<a id="p06-exercises"></a>
## 六、练习与完整解析

### 练习一：把一个基金拆成两个名字

假设将60单位基金改为各30单位的两只基金，二者在本题中被明确定义为持有完全相同的底层比例、产生完全相同的回报. 现金仍为40. 十大持仓组暴露和上述−30%压力损失如何变化？

**解析.** 底层暴露为 $30\times0.379+30\times0.379=22.74$，损失仍为6.822. 两个基金名称并没有改变底层资产或回报过程. 这是说明“名称不是风险单位”的假设反例，不是关于某两只真实基金重叠程度的事实. 若实际两只基金不同，必须取得同日同口径持仓，不能照搬本题结论.

### 练习二：完全负相关为何还剩8%的波动？

在第二节的两风险资产例中，设 $\rho=-1$. 保持60%/40%权重，求波动率. 再求使这份给定模型的方差为零的多头权重.

**解析.** 方差变为 $(w_A\sigma_A-w_B\sigma_B)^2$，故波动率为 $|0.6\times0.2-0.4\times0.1|=8\%$. 方向完全相反也不够，还需波动幅度匹配. 令 $w_A+w_B=1$ 且 $0.2w_A=0.1w_B$，得 $w_A=1/3,w_B=2/3$，该模型中的一期回报方差为零.

这个结论依赖真实的完全负相关和给定参数，不是把样本估计代入后就获得了保证. 即使一期随机回报被消除，实际合约的兑现时间、融资和交易条件也仍需检查；它们不在这份两变量模型中.

### 练习三：改变基准，还是改变了投资？

保持 $\rho=0.5$，有人看到组合相对于A的beta为0.7、相对于B为1，认为换成B后组合风险增加. 指出错误. 再让基金其余净资产也下跌10%，计算第一节真实披露加教学冲击的组合损失.

**解析.** 更换描述基准没有改变组合的资产、权重或回报随机变量，方差仍为0.0208. 两个beta使用了不同协方差和不同分母，不能按大小直接比较“换基准前后”的总风险.

第一节另一个冲击中，十大持仓组损失6.822，其余基金净资产损失 $37.26\times10\%=3.726$，现金不变，合计损失10.548，终值89.452. 这个结果依赖新增冲击假设；它与两资产的相关系数实验不是同一份输入，不能把二者拼接成一份实测基金风险报告.

[^vfiax]: **P-R07 / OBS-VFIAX-20260630** — Vanguard, *Vanguard 500 Index Fund Admiral Shares, VFIAX*, June 30, 2026，文件标识F0540 062026，p.2 “Ten Largest Holdings”及脚注. 原件：https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf . 只采用十大持仓合计37.9%及名单身份；未取得单项权重，不使用有版本冲突的VTSAX双基金资料.
[^mit]: **P-R04a** — Andrew W. Lo, MIT 15.401 *Finance Theory I*, Fall 2008, Lecture13–14, “Risk Analytics and Portfolio Theory”. 本篇实际使用slides13–16（权重、两资产方差）、26–28（协方差矩阵与分散）；原文：https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/dd628e151309a7f23962b1a31b9356e5_MIT15_401F08_lec13.pdf . 参数实验为本站设定，并非讲义历史估计.
[^beta]: **P-R04b** — Andrew W. Lo, 同课程Lecture15–17, “The CAPM and APT”，slides6（beta定义）、8（组合关系）、17（回归估计）. 原文：https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf . 采用范围限描述性定义和线性投影，不采用公司必要回报或资本成本.
[^bis]: **P-R05** — Marco Lombardi and Vladyslav Sushko, “The correlation of equity and bond returns”, BIS Quarterly Review, Box A, 4 December 2023. 全文入口：https://www.bis.org/publications/correlation-equity-and-bond-returns ；所在报告原页：https://www.bis.org/publications/markets-adjust-higher-longer_1.pdf ，印刷pp.7–8、图A1及方法脚注. 本篇读指定单元，未取得全套底层数据或复现回归.


## Additional teaching material
## 附录A｜精确交互与静态等价

### A1 披露穿透：`SIM-P06-LOOKTHROUGH-01`

原始披露锁定`OBS-VFIAX-20260630`，`top_group=0.379`不可在“披露”模式编辑. 教学输入：组合基金权重`fund_weight=0.6`，其余为现金，初始财富`wealth0=100`；组冲击`group_return=-0.30`，其余基金净资产冲击`rest_return=0`，现金回报固定0. 权重范围`[0,1]`；本现金权益模型收益不低于−100%.

```text
group_exposure = fund_weight*top_group
rest_exposure = fund_weight*(1-top_group)
cash_exposure = 1-fund_weight
portfolio_return = group_exposure*group_return + rest_exposure*rest_return
final = wealth0*(1+portfolio_return)
group_final = wealth0*group_exposure*(1+group_return)
```

默认输出22.74%组暴露、−6.822%组合回报、终值93.178.`rest_return=-0.10`时终值89.452. 界面永久显示披露日期和“教学冲击”；不能生成未披露的十家公司逐项权重. 静态等价为第一节表与练习一、三.

### A2 两风险资产：`SIM-P06-COV-01`

这是独立模式，不与基金/现金模式共享名称或隐含数据. 默认`wA=.6,wB=.4,sigmaA=.2,sigmaB=.1,rho=-.5`；波动率对应同一一年期间、同一回报定义和同一计价货币下的模型参数，不由历史数据估计或从日频自动年化.`wA∈[0,1],wB=1-wA`，`sigmaA,sigmaB>0`，`rho∈[-1,1]`.

```text
covAB = rho*sigmaA*sigmaB
variance = wA*wA*sigmaA*sigmaA + wB*wB*sigmaB*sigmaB + 2*wA*wB*covAB
volatility = sqrt(variance)
beta_to_A = (wA*sigmaA*sigmaA + wB*covAB)/(sigmaA*sigmaA)
beta_to_B = (wA*covAB + wB*sigmaB*sigmaB)/(sigmaB*sigmaB)
```

浮点误差造成绝对值小于`1e-12`的负方差可归零，其他负值报错；不得用取绝对值掩盖无效输入. 矩阵扩到多资产时另检验半正定性，本两资产原型不伪称已实现多资产估计.

| rho | sigma_p | beta相对于A | beta相对于B |
|---|---:|---:|---:|
| −0.5〔默认〕 | 10.58300524% | 0.5 | −0.2 |
| +0.5 | 14.42220510% | 0.7 | 1.0 |
| −1 | 8.00000000% | 0.4 | −0.8 |
| +1 | 16.00000000% | 0.8 | 1.6 |

界面显示自身方差项、交叉项和开方结果，beta选择器明确基准. 静态等价为第二、四节公式及本表. 第三节分散极限的静态输入为`sigma=.2,rho=.4,n=1/10/100`，不强制再加一个交互控件. 无需BIS底层数据即可复算参数实验，不能将它标为论文复现.

图形若显示“证券→底层组”，箭头标签是金额/权重，不是因果；经济风险连接使用文字标签. 所有输出同时保留可复制表格、键盘输入和打印视图.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-P06-COV-01",
    "title": "共同变化与组合风险",
    "anchor": "p06-covariance-definition",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开.",
    "inputs": {
      "wA": 0.6,
      "wB": 0.4,
      "sigmaA": 0.2,
      "sigmaB": 0.1,
      "rho": -0.5,
      "period": "one year model"
    },
    "outputs": {
      "default": {
        "rho": -0.5,
        "variance": 0.0112,
        "volatility": 0.10583005244258362,
        "beta_to_A": 0.4999999999999999,
        "beta_to_B": -0.19999999999999996
      },
      "rho_positive_half": {
        "rho": 0.5,
        "variance": 0.0208,
        "volatility": 0.14422205101855956,
        "beta_to_A": 0.6999999999999998,
        "beta_to_B": 1.0
      },
      "rho0": {
        "rho": 0,
        "variance": 0.016,
        "volatility": 0.12649110640673517,
        "beta_to_A": 0.5999999999999999,
        "beta_to_B": 0.4
      },
      "rho_minus_one": {
        "rho": -1,
        "variance": 0.0063999999999999994,
        "volatility": 0.08,
        "beta_to_A": 0.3999999999999999,
        "beta_to_B": -0.7999999999999998
      },
      "rho_one": {
        "rho": 1,
        "variance": 0.0256,
        "volatility": 0.16,
        "beta_to_A": 0.7999999999999998,
        "beta_to_B": 1.6
      },
      "negative_corr_balanced": {
        "rho": -1,
        "variance": 0.0,
        "volatility": 0.0,
        "beta_to_A": -8.673617379884034e-17,
        "beta_to_B": 0.0
      },
      "equal_weight_extension": {
        "sigma": 0.2,
        "rho": 0.4,
        "n1": 0.2,
        "n10": 0.13564659966250536,
        "n100": 0.12743625857659194,
        "limit": 0.1264911064067352
      },
      "model_conditions": [
        "same_horizon",
        "same_return_definition",
        "same_numeraire_currency",
        "finite_second_moments",
        "fixed_start_weights_for_single_period_identity"
      ]
    }
  },
  {
    "id": "SIM-P06-LOOKTHROUGH-01",
    "title": "穿透基金持仓",
    "anchor": "p06-lookthrough",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开.",
    "inputs": {
      "wealth0": 100,
      "fund_weight": 0.6,
      "top_group": 0.379,
      "group_return": -0.3,
      "rest_return": 0,
      "cash_return": 0
    },
    "outputs": {
      "group_exposure": 0.2274,
      "rest_exposure": 0.3726,
      "return": -0.06821999999999999,
      "final": 93.17800000000001,
      "with_rest_down10pc_return": -0.10547999999999999,
      "with_rest_down10pc_final": 89.45200000000001
    }
  }
]
```

## Sources
- [MIT 15.401, Lecture 13–14: Risk Analytics and Portfolio Theory](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/dd628e151309a7f23962b1a31b9356e5_MIT15_401F08_lec13.pdf): 回报分布、固定权重、协方差与分散
- [MIT 15.401, Lecture 15–17: The CAPM and APT](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/411d7d9df37d4d0440b18e17e8cea3a9_MIT15_401F08_lec15.pdf): MIT 15.401, Lecture 15–17: The CAPM and APT

本批读取范围：beta、因子投影与绩效评价的模型身份.
- [The correlation of equity and bond returns](https://www.bis.org/publications/correlation-equity-and-bond-returns): 历史相关性及经济环境解释
- [Vanguard 500 Index Fund Admiral Shares — VFIAX](https://workplace.vanguard.com/iippdf/pdfs/FS540.pdf): 2022/2023基金年度回报及十大持仓合计37.9%

## Content relations
```json
[
  {
    "from": "zh-p06",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-p06",
    "relation": "requires",
    "to": "p02-single-period",
    "reason": "组合回报加总需要统一期间及资金基数",
    "required_competence": "会计算同期间总回报；同等能力可替代阅读",
    "scope": "只需单期收益局部定义"
  },
  {
    "from": "p06-lookthrough",
    "relation": "illustrated_by",
    "to": "SIM-P06-LOOKTHROUGH-01",
    "reason": "从基金净资产比例得到组合底层组暴露"
  },
  {
    "from": "p06-lookthrough",
    "relation": "supported_by",
    "to": "P-R07",
    "reason": "固定期次十大持仓合计比例，不支持各项精确权重",
    "scope": "2026-06-30版p.2 Ten Largest Holdings及脚注"
  },
  {
    "from": "p06-covariance-definition",
    "relation": "illustrated_by",
    "to": "SIM-P06-COV-01",
    "reason": "隔离权重、单项波动与相关性各自的作用"
  },
  {
    "from": "p06-covariance-definition",
    "relation": "supported_by",
    "to": "P-R04a",
    "reason": "固定权重回报、协方差矩阵及分散关系",
    "scope": "slides 13–16、26–28"
  },
  {
    "from": "p06-beta",
    "relation": "supported_by",
    "to": "P-R04b",
    "reason": "描述性beta定义、组合线性关系与估计身份",
    "scope": "slides 6、8、17；不调用CAPM必要回报"
  },
  {
    "from": "p06-regime",
    "relation": "supported_by",
    "to": "P-R05",
    "reason": "研究相关性的历史环境依赖",
    "scope": "Box A全文与图A1，2023-12-04版"
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 4/9
穿透一组持仓并比较相关性变化对组合的影响.
保留所选投资或对冲目标，继续检验融资、到账与成交条件.
Next: [融资、抵押品与现金流动性](https://ou-liu-red-sugar.github.io/zh/notebook/financing-collateral-cash-liquidity/)
