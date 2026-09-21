# 货币、信用与融资环境的传导

把政策基准、信用利差、资产与债务重定价和客户需求放到同一条日历时间轴.

Entry: zh-ei10 | Node: EI-10 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授EI-10《货币、信用与融资环境的传导》，采用内容版本2026-09-21-review-v2，当前范围：本篇完整学习单元.
先使用工具实际读取当前required_readings列出的公开原文完整单元，核对标题、版本、表头、单位、脚注和适用范围. 来源清单或作者先前读过不等于你本次读过；runtime_reading_log初始为空，按实际结果填写，不预填成功. 网页太大时用按页/文本范围的工具；不要用搜索节选顶替完整单元. 读取失败时只说明具体缺口并尝试同机构/作者对应版本的开放正文，不能声称已完成依赖该原文的讲解.
完成读取后，按学习者已有水平选择直接讲解、推导或互动，不强迫重学已掌握的四则运算. 诊断任务：不用计算器，先说明“每年多3 M 美元”和“今天到账3 M 美元”的差别，再重建40%固定债在年中再融资后的首年累计.
沿随包完整正文推进一个完整推理任务：先结构和变量，再真实材料/模型设定，再推导和比较，最后迁移与反馈. 真实观察、作者估计、本站教学参数必须保持各自身份. 通过标准：单位、重定价起点、固定债再融资比例/时间和客户需求路径齐全；把年化流量当即时现金则退回日历图.
使用随包实验的相同输入、算法和静态结果. 你可以改变教学参数，但先声明改变哪一条件；不改写冻结观察值，不编造未取得的论文曲线. 解释题和迁移题的完整解析已随正文提供，先让读者作答，再对照推理而非只报分数.
额外约定：EI-10年化不是付息流水；EI-11没有未定义衍生品；EI-12信用额度不得计入30天来源；EI-13基期产出权重；EI-15分支来源仅随所选分支读取；EI-16需求与发电覆盖不同；EI-17 Figure7/9不是同一实验；EI-18来源尺度疑点不替作者静默修正. 只适用当前篇相关项.


Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei10",
  "node_id": "EI-10",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "all",
  "audience": "有微积分、线性代数和基本概率基础的高年级本科生至研究生",
  "learning_task": "重建利息增量的年化速度与首年累计，并给出业务与信用传导路径.",
  "required_readings": [
    {
      "source_id": "EIDEF-S01",
      "title": "Lecture 7: An Extended IS–LM Model",
      "authors": [
        "Ricardo Caballero",
        "MIT OCW"
      ],
      "version": "14.02, Spring 2023",
      "access": {
        "kind": "site_body",
        "uri": "https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/resources/1402-sp23-lecture-7-v2_mp4/",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Transcript：nominal versus real interest rate；risk and risk premium；extended IS–LM",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "讲义区分名义/实际利率及风险溢价；不校准本文企业的200基点教学冲击."
      },
      "supports": "讲义区分名义/实际利率及风险溢价；不校准本文企业的200基点教学冲击.",
      "id": "EI-10-READ-1",
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "EIDEF-S02",
      "title": "Monetary Policy Tightening and Debt Servicing Costs of Nonfinancial Companies",
      "authors": [
        "Yuriy Kitsul",
        "Bill Lang",
        "Mehrdad Samadi"
      ],
      "version": "FEDS Notes, 2023-12-01",
      "access": {
        "kind": "site_body",
        "uri": "https://www.federalreserve.gov/econres/notes/feds-notes/monetary-policy-tightening-and-debt-servicing-costs-of-nonfinancial-companies-20231201.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Sections I–VII；debt servicing cost definition；Tables 1–2；fixed-rate debt maturity",
        "scope": "所列具名单元全文，包含公式、表头、表注及本篇采用结论所需上下文；不要求无关章节.",
        "purpose": "企业存量债务费用率与新融资报价不同. Table 1未发现当次周期显著较慢；本文不外推2026政策."
      },
      "supports": "企业存量债务费用率与新融资报价不同. Table 1未发现当次周期显著较慢；本文不外推2026政策.",
      "id": "EI-10-READ-2",
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "frozen_source_version": "2026-09-21-ei-defgh-preflight-final",
    "node": {
      "experiment_id": "exp-ei10-rate-transmission",
      "status": "teaching_assumption",
      "inputs": {
        "cash_m_usd": 200,
        "floating_debt_m_usd": 50,
        "fixed_debt_m_usd": 250,
        "benchmark_rate_shock_bp": 200,
        "cash_yield_pass_through": 1.0,
        "floating_debt_benchmark_pass_through": 1.0,
        "credit_spread_change_bp": 0,
        "fixed_debt_refinance_fraction": 0.4,
        "fixed_debt_refinance_time_year_fraction": 0.5
      },
      "outputs": {
        "annualized_cash_interest_income_delta_m_usd": 4.0,
        "annualized_floating_interest_expense_delta_m_usd": 1.0,
        "annualized_immediate_net_interest_carry_delta_m_usd": 3.0,
        "annualized_fixed_refinance_expense_delta_m_usd": 2.0,
        "first_year_fixed_refinance_expense_delta_if_midyear_m_usd": 1.0
      },
      "identity": {
        "timing": "annualized run-rate changes, not cash received/paid immediately",
        "assumptions": [
          "cash yield and floating-debt benchmark reprice fully by the 200 bp shock",
          "credit spread held fixed in the default teaching case",
          "fixed-rate debt changes only for the refinanced fraction",
          "midyear first-year amount applies the new coupon for half a year"
        ]
      }
    },
    "experiments": [
      {
        "id": "exp-ei10-rate-transmission",
        "node_id": "EI-10",
        "title": "年化利息与首年累计",
        "anchor": "ei10-repricing",
        "method": "rates",
        "controls": [
          {
            "key": "cash",
            "label": "现金（ M 美元）",
            "default": 200,
            "min": 0,
            "max": 1000,
            "step": 10,
            "kind": "number"
          },
          {
            "key": "floating",
            "label": "浮债（ M 美元）",
            "default": 50,
            "min": 0,
            "max": 1000,
            "step": 10,
            "kind": "number"
          },
          {
            "key": "fixed",
            "label": "固定债（ M 美元）",
            "default": 250,
            "min": 0,
            "max": 1000,
            "step": 10,
            "kind": "number"
          },
          {
            "key": "rateBP",
            "label": "基准变动（bp）",
            "default": 200,
            "min": -500,
            "max": 500,
            "step": 25,
            "kind": "number"
          },
          {
            "key": "refiFraction",
            "label": "固定债再融资比例",
            "default": 0.4,
            "min": 0,
            "max": 1,
            "step": 0.05,
            "kind": "number"
          },
          {
            "key": "refiTime",
            "label": "年内再融资时点τ",
            "default": 0.5,
            "min": 0,
            "max": 1,
            "step": 0.05,
            "kind": "number"
          },
          {
            "key": "refiSpreadBP",
            "label": "新固定债额外利差（bp）",
            "default": 0,
            "min": -500,
            "max": 500,
            "step": 25,
            "kind": "number"
          }
        ],
        "inputs": {
          "cash": 200,
          "floating": 50,
          "fixed": 250,
          "rateBP": 200,
          "refiFraction": 0.4,
          "refiTime": 0.5,
          "refiSpreadBP": 0
        },
        "algorithm": "默认资产/浮债完全传导、旧浮债利差不变；ΔIA=AΔb，ΔIf=DfΔb，ΔIk=Dk*r*(Δb+Δsk).τ前净年化ΔIA−ΔIf，τ后再减ΔIk；首年累计ΔIA−ΔIf−(1−τ)ΔIk. 简单计息、余额固定，不给付息流水.",
        "static_equivalent": "冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.",
        "source_ids": [
          "EIDEF-S01",
          "EIDEF-S02"
        ],
        "identity": "teaching_assumption",
        "description": "年化利息与首年累计",
        "outputs": {
          "annual_asset_income": 4,
          "annual_floating_expense": 1,
          "annual_net_before_refinance": 3,
          "annual_refinance_expense": 2,
          "first_year_refinance_expense": 1,
          "annual_net_after_refinance": 1,
          "first_year_net_accrual": 2,
          "series": [
            {
              "t": 0,
              "annual_net": 3,
              "cumulative_accrual": 0
            },
            {
              "t": 0.08333333333333333,
              "annual_net": 3,
              "cumulative_accrual": 0.25
            },
            {
              "t": 0.16666666666666666,
              "annual_net": 3,
              "cumulative_accrual": 0.5
            },
            {
              "t": 0.25,
              "annual_net": 3,
              "cumulative_accrual": 0.75
            },
            {
              "t": 0.3333333333333333,
              "annual_net": 3,
              "cumulative_accrual": 1
            },
            {
              "t": 0.4166666666666667,
              "annual_net": 3,
              "cumulative_accrual": 1.25
            },
            {
              "t": 0.5,
              "annual_net": 1,
              "cumulative_accrual": 1.5
            },
            {
              "t": 0.5833333333333334,
              "annual_net": 1,
              "cumulative_accrual": 1.5833333333333333
            },
            {
              "t": 0.6666666666666666,
              "annual_net": 1,
              "cumulative_accrual": 1.6666666666666667
            },
            {
              "t": 0.75,
              "annual_net": 1,
              "cumulative_accrual": 1.75
            },
            {
              "t": 0.8333333333333334,
              "annual_net": 1,
              "cumulative_accrual": 1.8333333333333333
            },
            {
              "t": 0.9166666666666666,
              "annual_net": 1,
              "cumulative_accrual": 1.9166666666666667
            },
            {
              "t": 1,
              "annual_net": 1,
              "cumulative_accrual": 2
            }
          ],
          "units": "USD M; annualized rates versus first-calendar-year accrual; not payment-date cash"
        }
      }
    ]
  },
  "static_equivalents": [
    {
      "experiment_id": "exp-ei10-rate-transmission",
      "text": "冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.",
      "outputs": {
        "annual_asset_income": 4,
        "annual_floating_expense": 1,
        "annual_net_before_refinance": 3,
        "annual_refinance_expense": 2,
        "first_year_refinance_expense": 1,
        "annual_net_after_refinance": 1,
        "first_year_net_accrual": 2,
        "series": [
          {
            "t": 0,
            "annual_net": 3,
            "cumulative_accrual": 0
          },
          {
            "t": 0.08333333333333333,
            "annual_net": 3,
            "cumulative_accrual": 0.25
          },
          {
            "t": 0.16666666666666666,
            "annual_net": 3,
            "cumulative_accrual": 0.5
          },
          {
            "t": 0.25,
            "annual_net": 3,
            "cumulative_accrual": 0.75
          },
          {
            "t": 0.3333333333333333,
            "annual_net": 3,
            "cumulative_accrual": 1
          },
          {
            "t": 0.4166666666666667,
            "annual_net": 3,
            "cumulative_accrual": 1.25
          },
          {
            "t": 0.5,
            "annual_net": 1,
            "cumulative_accrual": 1.5
          },
          {
            "t": 0.5833333333333334,
            "annual_net": 1,
            "cumulative_accrual": 1.5833333333333333
          },
          {
            "t": 0.6666666666666666,
            "annual_net": 1,
            "cumulative_accrual": 1.6666666666666667
          },
          {
            "t": 0.75,
            "annual_net": 1,
            "cumulative_accrual": 1.75
          },
          {
            "t": 0.8333333333333334,
            "annual_net": 1,
            "cumulative_accrual": 1.8333333333333333
          },
          {
            "t": 0.9166666666666666,
            "annual_net": 1,
            "cumulative_accrual": 1.9166666666666667
          },
          {
            "t": 1,
            "annual_net": 1,
            "cumulative_accrual": 2
          }
        ],
        "units": "USD M; annualized rates versus first-calendar-year accrual; not payment-date cash"
      }
    }
  ],
  "source_id_aliases": {
    "EIDEF-S10": "BFDE-JEP",
    "EIDEF-S14": "EIBC-S07M",
    "EIDEF-S16A": "EIBC-S05A",
    "EIDEF-S16B": "EIBC-S05B",
    "EIDEF-S21": "EI-S06-M3-202605"
  }
}
```

## Supplied entry
<strong>本篇任务：</strong>沿一家企业的资产、债务合同和客户交易，重建一次利率变化的作用方向与时间. 读完应能分别写出年化利息增量、首年累计影响，以及还不能用利息表回答的经营问题. 建议用约18分钟完成正文、实验和迁移题.

<a id="ei10-structure"></a>

## 一、先看谁在收利息，谁在付利息

研究融资环境时，我们真正面对的是一组关系：企业把现金存在哪里，向谁借钱，多久重新定价，客户是否依赖信贷购买产品，以及银行还愿意提供多少融资. 政策利率位于这些关系的上游，但合同并不会在同一时刻一起变化.

我们先把公司新借款利率写成一个分析分解：匹配期限的基准利率，加上信用、流动性及其他合同溢价. 这个分解并非每份贷款的原生报价方式，却能提醒我们：基准不动，信用利差也可能上升；短端基准上升，长期固定债的存量票息仍可能不变. 实际分析应回到浮息贷款的参考基准、加点、重置频率、利率下限和到期日. MIT 的扩展 IS–LM 讲义也把实际利率及风险溢价加入融资条件，而不是让所有企业只面对一个政策数字. [^mit]

“实际利率”还涉及购买力. 在一个给定通胀情景 $\pi^e$ 下，名义利率为 $i$ 时，购买力增幅为 $(1+i)/(1+\pi^e)-1$；小幅变化下常用 $i-\pi^e$ 近似. 这是给定情景的比较，不是对随机通胀下真实收益完整取期望，更不会把合同上实际支付的美元利息改写成另一笔现金.

<div class="flow">
<div>政策及市场利率</div><span>影响基准与预期</span>
<div>银行／债券市场报价</div><span>加上信用与流动性条件</span>
<div>具体合同的重定价</div><span>经过期限与支付安排</span>
<div>企业利息与融资可得性</div>
</div>

这条路径旁边还有资产端：短期现金投资可以增加利息收入. 因此我们需要同时看**资产的收益重定价**和**负债的费用重定价**. 最后再把净融资变化接回客户需求和生产投资，不能在利息表处结束分析.

<a id="ei10-material"></a>

## 二、从真实研究看“新借款价格”和“存量债务费用”

美联储2023年12月的 FEDS Note 使用截至2023年第一季度的上市非金融企业资料，区分新债市场利率与企业财务报告中的债务服务成本. 后者的定义是：把季度利息费用年度化，再除以债务余额. 它反映一批不同发行时间、期限和合同共同形成的存量成本，而不是当季新融资报价. [^feds]

| 原材料中的对象 | 它记录什么 | 本篇如何使用 |
|---|---|---|
| 新发行债券或新融资利率 | 此时新增资金的价格 | 判断新投资或到期债务面临的报价 |
| 季度利息费用年度化／债务余额 | 存量负债组合的费用率 | 判断旧合同已经传入多少变化 |
| 固定债到期分布 | 未来需要重新融资的金额和时间 | 安排利率变化进入费用的日历 |
| 现金、银行债务等企业特征 | 不同企业的资产负债暴露 | 寻找传导异质性，避免统一加点 |

这份研究的 Table 1 并没有发现当次紧缩的平均传导显著慢于历史紧缩. 可以从中学到“新借款和存量费用不是同一个量”，但不应再加一句“这轮一定异常缓慢”. Table 2 则讨论现金和银行债务等特征与传导的差异；研究结果的对象仍是该历史样本，而非任意一家公司的预测系数. [^feds]

一个很实用的读法是：若新债报价已经升高，而报告费用率暂时变化不大，就去查期限分布；若费用率突然上升，则同时查再融资、浮息重置、信用利差与债务余额变化. 这样，每个指标都有下一项核查职责.

<a id="ei10-repricing"></a>

## 三、把一次200基点变动放进完整时间表

下面是一家**虚构企业**，金额单位均为 M 美元. 年初持有现金200，浮息债50、固定债250. 基准利率在年初上升200基点，即 $\Delta b=0.02$；现金收益和浮债基准完全传导，信用利差暂时不变. 余额全年固定，使用简单计息，不把利息再投或税费混入本例.

令现金为 $A$、浮债为 $D_f$、固定债为 $D_k$；现金与浮债的传导比例为 $\alpha_A,\alpha_f$. 浮债利差变化为 $\Delta s_f$，新发行固定债相对旧债的利率变化为 $\Delta b_k+\Delta s_k$. 若固定债比例 $r$ 在年内时点 $\tau$ 再融资，$\tau=0.5$ 表示恰在年中，则

$$
\begin{aligned}
\Delta I_A^{ann}&=A\alpha_A\Delta b,\\
\Delta I_f^{ann}&=D_f(\alpha_f\Delta b+\Delta s_f),\\
\Delta I_k^{ann}&=D_k r(\Delta b_k+\Delta s_k).
\end{aligned}
$$

上标 $ann$ 表示**年化运行速度**：以当前条件持续一年会产生多少利息差额. 它不意味着利率改变当天便收到整年的钱. 默认例进一步设 $\Delta b_k=\Delta b$、两种利差变化均为0；这是教学约定，不是期限利率总会平行变动的规律.

因此现金收入年化增加 $200\times0.02=4$，浮债费用年化增加 $50\times0.02=1$. 固定债尚未到期时，其合同费用没有自动改变，净利息年化增量为 $4-1=3$.

现在让固定债的40%在年中再融资. 新增年化费用为

$$
250\times0.4\times0.02=2,
$$

但首年只承担半年的新费用，所以累计增加 $2(1-0.5)=1$. 为把“速度”变成“期间累计”，可以把净利息增量函数积分：

$$
\Delta N(t)=4-1-2\,\mathbf 1_{\{t\ge0.5\}},
\qquad
\int_0^1\Delta N(t)\,dt=2.
$$

前两行比较的是**某一时点之后的年化运行速度**，第三行比较的是**第一年累计应计金额**. 因此不能把三行当成同一个时间单位横着读.

| 比较位置 | 现金收入变化 | 浮债费用变化 | 固定债费用变化 | 净利息变化 |
|---|---:|---:|---:|---:|
| 年初，固定债尚未再融资 | 年化+4 | 年化+1 | 年化0 | 年化+3 |
| 年中再融资之后 | 年化+4 | 年化+1 | 年化+2 | 年化+1 |
| 整个第一年累计 | 累计+4 | 累计+1 | 累计+1 | 累计+2 |

这里的首年累计是简单计息下的应计经济比较. 究竟哪天到账，还需要付息合同、结息日和应计／支付的转换；正文没有替虚构企业设造具体银行流水.

<div data-experiment-slot="exp-ei10-rate-transmission"></div>

在实验里先把再融资时点从年中移到年末. 再融资后的年化费用仍是2，但第一年新增费用趋近0. 接着保持年中，令新债信用利差额外上升100基点：固定债新增年化费用变成3，首年1.5. 这样就能看出，“基准利率”与“公司融资条件”是在两处进入计算的.

<a id="ei10-business"></a>

## 四、利息表之外，还有信用数量与客户需求

接下来我们回到企业经营. 现金很多的企业可能暂时获得净利息收入，但它的客户可能因分期付款更贵而推迟买设备；银行也可能缩短授信期限或降低可提款额度. 融资的**价格**、**数量**和**用途**必须分开.

对设备制造商，一条有条件的路径是：客户贷款报价提高，部分边际项目回报不足，订单减少，交付和预收款随后变化. 对银行，存款成本和贷款收益重置速度不同，又会改变净息差；这不是把制造商的净利息公式原样照搬. 对现金富余的软件企业，直接融资费用可能不突出，客户预算收紧和续约价格反而值得先查.

我们可以用一张简洁的传导表收束分析：

| 路径 | 先核哪份材料 | 能区分解释的新观察 |
|---|---|---|
| 存量债务费用 | 浮息比例、重置规则、到期分布 | 下一次重置或再融资后的费用率 |
| 现金收益 | 现金投资期限、收益方式、受限状态 | 利息收入与现金余额的共同变化 |
| 信用供给 | 授信承诺、财务约束、提款条件 | 额度、抵押要求或到期安排改变 |
| 客户支出 | 客户融资方式、订单与取消 | 分期购买和现金购买客户是否分化 |

目标是把“利率影响很大”改成一项可核查陈述：**哪个合同或客户选择，在什么时候、通过什么变量改变了经营路径？** [企业现金与利率传导研究](https://ou-liu-red-sugar.github.io/zh/notebook/research-corporate-cash-rate-transmission/)将进一步讨论怎样用企业数据检验其中一部分关系.

<a id="ei10-exercises"></a>

## 五、重建与迁移

<strong>任务一：</strong>用默认余额和200基点冲击，假设40%固定债在年中再融资，分别报年初净年化增量、再融资后的净年化增量、第一年累计增量.

<strong>解析：</strong>资产端+4，浮债费用+1，所以年初净年化+3. 固定债再融资新增年化费用2，之后净年化+1. 第一年固定债仅增加1费用，全年净利息增量2. 三个数字描述不同时间对象，没有冲突. 把“+3”写成当天现金到账，会同时错在年化和支付时间.

<strong>任务二：</strong>再融资后基准上升200基点、信用利差再增加100基点，其他条件保持默认. 先只对固定债应用额外利差，第一年净利息增量是多少？

<strong>解析：</strong>再融资的固定债本金100，新旧利差合计3%，年化额外费用3；半年度1.5. 现金和旧浮债仍按原合同变化，第一年净额为 $4-1-1.5=1.5$. 只有题目另行设定浮债加点也提高，才修改该项；旧合同按题设保持不变.

<strong>迁移任务：</strong>另一家设备商现金20、浮债200、固定债100，利率同样上升200基点，固定债本年不再融资；客户多数用贷款买设备. 写出直接利息结果及一条可能更晚出现的经营路径.

<strong>解析：</strong>完全传导约定下，年化现金收益+0.4，浮债费用+4，直接净利息变化为−3.6 M 美元. 晚出现的路径可能是客户融资报价提高后延迟订单，继而影响排产、交付与营运资金. 核验时应寻找客户分期融资比例、订单取消和交期，而不是把−3.6直接当作利润总变化；经营成本、销量、税费都未包含.

[^mit]: EIDEF-S01，Ricardo Caballero，MIT 14.02 Spring 2023，Lecture 7 “An Extended IS–LM Model”，nominal/real interest rate、risk premium 与企业融资单元. [课程与转录入口](https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/resources/1402-sp23-lecture-7-v2_mp4/).
[^feds]: EIDEF-S02，Yuriy Kitsul、Bill Lang、Mehrdad Samadi，FEDS Notes，2023-12-01，“Monetary Policy Tightening and Debt Servicing Costs of Nonfinancial Companies”，债务服务成本定义、Tables 1–2、maturity/refinancing 与结论单元，样本截至2023Q1. [原文](https://www.federalreserve.gov/econres/notes/feds-notes/monetary-policy-tightening-and-debt-servicing-costs-of-nonfinancial-companies-20231201.html).

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>


## Additional teaching material
### 图表的静态等价与默认结果

冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.

```json
{
  "annual_asset_income": 4,
  "annual_floating_expense": 1,
  "annual_net_before_refinance": 3,
  "annual_refinance_expense": 2,
  "first_year_refinance_expense": 1,
  "annual_net_after_refinance": 1,
  "first_year_net_accrual": 2,
  "series": [
    {
      "t": 0,
      "annual_net": 3,
      "cumulative_accrual": 0
    },
    {
      "t": 0.08333333333333333,
      "annual_net": 3,
      "cumulative_accrual": 0.25
    },
    {
      "t": 0.16666666666666666,
      "annual_net": 3,
      "cumulative_accrual": 0.5
    },
    {
      "t": 0.25,
      "annual_net": 3,
      "cumulative_accrual": 0.75
    },
    {
      "t": 0.3333333333333333,
      "annual_net": 3,
      "cumulative_accrual": 1
    },
    {
      "t": 0.4166666666666667,
      "annual_net": 3,
      "cumulative_accrual": 1.25
    },
    {
      "t": 0.5,
      "annual_net": 1,
      "cumulative_accrual": 1.5
    },
    {
      "t": 0.5833333333333334,
      "annual_net": 1,
      "cumulative_accrual": 1.5833333333333333
    },
    {
      "t": 0.6666666666666666,
      "annual_net": 1,
      "cumulative_accrual": 1.6666666666666667
    },
    {
      "t": 0.75,
      "annual_net": 1,
      "cumulative_accrual": 1.75
    },
    {
      "t": 0.8333333333333334,
      "annual_net": 1,
      "cumulative_accrual": 1.8333333333333333
    },
    {
      "t": 0.9166666666666666,
      "annual_net": 1,
      "cumulative_accrual": 1.9166666666666667
    },
    {
      "t": 1,
      "annual_net": 1,
      "cumulative_accrual": 2
    }
  ],
  "units": "USD M; annualized rates versus first-calendar-year accrual; not payment-date cash"
}
```

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei10-rate-transmission",
    "node_id": "EI-10",
    "title": "年化利息与首年累计",
    "anchor": "ei10-repricing",
    "method": "rates",
    "controls": [
      {
        "key": "cash",
        "label": "现金（ M 美元）",
        "default": 200,
        "min": 0,
        "max": 1000,
        "step": 10,
        "kind": "number"
      },
      {
        "key": "floating",
        "label": "浮债（ M 美元）",
        "default": 50,
        "min": 0,
        "max": 1000,
        "step": 10,
        "kind": "number"
      },
      {
        "key": "fixed",
        "label": "固定债（ M 美元）",
        "default": 250,
        "min": 0,
        "max": 1000,
        "step": 10,
        "kind": "number"
      },
      {
        "key": "rateBP",
        "label": "基准变动（bp）",
        "default": 200,
        "min": -500,
        "max": 500,
        "step": 25,
        "kind": "number"
      },
      {
        "key": "refiFraction",
        "label": "固定债再融资比例",
        "default": 0.4,
        "min": 0,
        "max": 1,
        "step": 0.05,
        "kind": "number"
      },
      {
        "key": "refiTime",
        "label": "年内再融资时点τ",
        "default": 0.5,
        "min": 0,
        "max": 1,
        "step": 0.05,
        "kind": "number"
      },
      {
        "key": "refiSpreadBP",
        "label": "新固定债额外利差（bp）",
        "default": 0,
        "min": -500,
        "max": 500,
        "step": 25,
        "kind": "number"
      }
    ],
    "inputs": {
      "cash": 200,
      "floating": 50,
      "fixed": 250,
      "rateBP": 200,
      "refiFraction": 0.4,
      "refiTime": 0.5,
      "refiSpreadBP": 0
    },
    "algorithm": "默认资产/浮债完全传导、旧浮债利差不变；ΔIA=AΔb，ΔIf=DfΔb，ΔIk=Dk*r*(Δb+Δsk).τ前净年化ΔIA−ΔIf，τ后再减ΔIk；首年累计ΔIA−ΔIf−(1−τ)ΔIk. 简单计息、余额固定，不给付息流水.",
    "static_equivalent": "冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.",
    "source_ids": [
      "EIDEF-S01",
      "EIDEF-S02"
    ],
    "identity": "teaching_assumption",
    "description": "年化利息与首年累计",
    "outputs": {
      "annual_asset_income": 4,
      "annual_floating_expense": 1,
      "annual_net_before_refinance": 3,
      "annual_refinance_expense": 2,
      "first_year_refinance_expense": 1,
      "annual_net_after_refinance": 1,
      "first_year_net_accrual": 2,
      "series": [
        {
          "t": 0,
          "annual_net": 3,
          "cumulative_accrual": 0
        },
        {
          "t": 0.08333333333333333,
          "annual_net": 3,
          "cumulative_accrual": 0.25
        },
        {
          "t": 0.16666666666666666,
          "annual_net": 3,
          "cumulative_accrual": 0.5
        },
        {
          "t": 0.25,
          "annual_net": 3,
          "cumulative_accrual": 0.75
        },
        {
          "t": 0.3333333333333333,
          "annual_net": 3,
          "cumulative_accrual": 1
        },
        {
          "t": 0.4166666666666667,
          "annual_net": 3,
          "cumulative_accrual": 1.25
        },
        {
          "t": 0.5,
          "annual_net": 1,
          "cumulative_accrual": 1.5
        },
        {
          "t": 0.5833333333333334,
          "annual_net": 1,
          "cumulative_accrual": 1.5833333333333333
        },
        {
          "t": 0.6666666666666666,
          "annual_net": 1,
          "cumulative_accrual": 1.6666666666666667
        },
        {
          "t": 0.75,
          "annual_net": 1,
          "cumulative_accrual": 1.75
        },
        {
          "t": 0.8333333333333334,
          "annual_net": 1,
          "cumulative_accrual": 1.8333333333333333
        },
        {
          "t": 0.9166666666666666,
          "annual_net": 1,
          "cumulative_accrual": 1.9166666666666667
        },
        {
          "t": 1,
          "annual_net": 1,
          "cumulative_accrual": 2
        }
      ],
      "units": "USD M; annualized rates versus first-calendar-year accrual; not payment-date cash"
    },
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-defgh/inputs.json",
    "implementation": {
      "html": "/notebook/labs/ei-defgh/interactions.html?embed=1&experiment=exp-ei10-rate-transmission",
      "engine": "/notebook/labs/ei-defgh/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Lecture 7: An Extended IS–LM Model](https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/resources/1402-sp23-lecture-7-v2_mp4/): 讲义区分名义/实际利率及风险溢价；不校准本文企业的200基点教学冲击.
- [Monetary Policy Tightening and Debt Servicing Costs of Nonfinancial Companies](https://www.federalreserve.gov/econres/notes/feds-notes/monetary-policy-tightening-and-debt-servicing-costs-of-nonfinancial-companies-20231201.html): 企业存量债务费用率与新融资报价不同. Table 1未发现当次周期显著较慢；本文不外推2026政策.

## Content relations
```json
[
  {
    "from": "zh-ei10",
    "relation": "part_of",
    "to": "industry-environment",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-ei10",
    "relation": "requires",
    "to": "zh-ei02",
    "reason": "辨认存量/流量、期间和版本",
    "required_competence": "辨认存量/流量、期间和版本"
  },
  {
    "from": "zh-ei10",
    "relation": "uses_method",
    "to": "zh-ei01",
    "reason": "企业资产负债与部门融资位置"
  },
  {
    "from": "zh-ei10",
    "relation": "informs",
    "to": "zh-ei18",
    "reason": "给现金和债务异质性研究提供机制"
  },
  {
    "from": "ei10-material",
    "relation": "supported_by",
    "to": "EIDEF-S02",
    "reason": "企业存量债务费用率与新融资报价不同. Table 1未发现当次周期显著较慢；本文不外推2026政策.",
    "locator": "Sections I–VII；debt servicing cost definition；Tables 1–2；fixed-rate debt maturity",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei10-material"
  },
  {
    "from": "ei10-structure",
    "relation": "supported_by",
    "to": "EIDEF-S01",
    "reason": "讲义区分名义/实际利率及风险溢价；不校准本文企业的200基点教学冲击.",
    "locator": "Transcript：nominal versus real interest rate；risk and risk premium；extended IS–LM",
    "scope": "对应段采用的具名单元，不扩称完整论文复现",
    "at_section": "ei10-structure"
  },
  {
    "from": "ei10-repricing",
    "relation": "illustrated_by",
    "to": "exp-ei10-rate-transmission",
    "reason": "冻结默认：资产年化+4，浮债费用+1，年初净年化+3；固定债新增年化2、首年1；年中后净年化1，首年累计2. M 美元.τ=0/1显示整年/零首年新增固定债费用.",
    "at_section": "ei10-repricing"
  }
]
```

## Related entries
