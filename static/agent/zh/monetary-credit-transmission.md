# 货币、信用与融资环境的传导

把政策基准、信用利差、资产与债务重定价和客户需求放到同一条日历时间轴.

Entry: zh-ei10 | Node: EI-10 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生，内容版本2026-09-22-deep-review. 讲解前按 selected_branch 实际读取 required_readings 的完整指定单元，包含定义、方法、表注与结论条件，记录题名、版本、范围和支持内容. 必要原件缺失时先取得同机构或作者的等价版本，齐全后教学. 用资产200、浮债50、固定债250及200 bp变化诊断年化与期间金额. 推导40%固定债年中再融资的首年累计，再改变时点及信用利差，解释合同支付日和客户需求路径. 已掌握的步骤直接跳过；先让读者推导或判断，再用正文解析反馈条件、机制和计算，并用迁移题检验. 真实观察、作者估计和教学参数各自标识；runtime_reading_log记录本次实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-ei10",
  "node_id": "EI-10",
  "content_version": "2026-09-22-deep-review",
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
      "text": "教学金额为USD M. 现金年化收入增4，浮债费用增1，年初净年化增3. 固定债40%在年中再融资后新增年化费用2，净年化增量降至1；首年新增固定债费用1，净利息累计增2. 再融资时点为年初或年末时，首年新增费用分别2或0.",
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
<a id="ei10-structure"></a>

## 资产收益与债务费用

融资环境由一组关系共同决定：企业把现金存在哪里、向谁借钱、多久重新定价、客户是否依赖信贷购买产品，以及银行愿意提供多少融资. 政策利率位于这些关系的上游，但各合同的重定价时点不同.

新借款利率可分解为匹配期限的基准及信用、流动性和其他合同溢价. 基准不变时信用利差仍可上升；短端基准上升时，尚未到期的长期固定债票息仍可保持不变. 具体合同需核参考基准、加点、重置频率、利率下限及到期日. [^mit]

“实际利率”还涉及购买力. 在给定通胀情景 $\pi^e$ 下，名义利率为 $i$ 时，购买力增幅为 $(1+i)/(1+\pi^e)-1$；小幅变化下常用 $i-\pi^e$ 近似. 这一比较固定通胀情景；合同支付仍按名义美元利息记录.

<div class="flow">
<div>政策及市场利率</div><span>影响基准与预期</span>
<div>银行／债券市场报价</div><span>加上信用与流动性条件</span>
<div>具体合同的重定价</div><span>经过期限与支付安排</span>
<div>企业利息与融资可得性</div>
</div>

短期现金投资的收益也会重定价，因此利率变化同时影响资产收入和债务费用. 净融资变化再通过客户支出及企业投资影响经营.

<a id="ei10-material"></a>

## 新融资报价与存量债务成本

美联储2023年12月 FEDS Note 使用截至2023Q1的上市非金融企业资料，以季度利息费用年度化除以债务余额计量债务服务成本. 这一存量费用率由不同发行时间、期限与合同组成. [^feds]

| 原材料中的对象 | 它记录什么 | 本篇如何使用 |
|---|---|---|
| 新发行债券或新融资利率 | 此时新增资金的价格 | 判断新投资或到期债务面临的报价 |
| 季度利息费用年度化／债务余额 | 存量负债组合的费用率 | 判断旧合同已经传入多少变化 |
| 固定债到期分布 | 未来需要重新融资的金额和时间 | 安排利率变化进入费用的日历 |
| 现金、银行债务等企业特征 | 不同企业的资产负债暴露 | 寻找传导异质性，避免统一加点 |

Table 1 显示，当次紧缩前五季的存量债务成本传导与2003年以来历史紧缩在统计上不可区分. Table 2 显示现金和银行债务结构与传导差异相关. 这些系数描述研究样本；企业预测仍需具体债务结构、重定价规则和到期表. [^feds]

新债报价升高而报告费用率变化较小时，期限分布可解释传导滞后；费用率突然上升时，需结合再融资、浮息重置、信用利差和债务余额分解.

<a id="ei10-repricing"></a>

## 重定价时间表

设一家教学企业年初现金200、浮息债50、固定债250，单位USD M. 基准利率在年初上升200基点，即 $\Delta b=0.02$；现金及浮债完全传导，信用利差不变. 全年余额固定，按税前简单利息计算.

令现金为 $A$、浮债为 $D_f$、固定债为 $D_k$；现金与浮债的传导比例为 $\alpha_A,\alpha_f$. 浮债利差变化为 $\Delta s_f$，新发行固定债相对旧债的利率变化为 $\Delta b_k+\Delta s_k$. 若固定债比例 $r$ 在年内时点 $\tau$ 再融资，$\tau=0.5$ 表示恰在年中，则

$$
\begin{aligned}
\Delta I_A^{ann}&=A\alpha_A\Delta b,\\
\Delta I_f^{ann}&=D_f(\alpha_f\Delta b+\Delta s_f),\\
\Delta I_k^{ann}&=D_k r(\Delta b_k+\Delta s_k).
\end{aligned}
$$

$ann$ 表示按当前条件持续一年的利息差额. 默认例设 $\Delta b_k=\Delta b$，两种信用利差变化均为零.

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

下表前两行是指定时点后的年化速度，第三行为第一年累计应计金额.

| 比较位置 | 现金收入变化 | 浮债费用变化 | 固定债费用变化 | 净利息变化 |
|---|---:|---:|---:|---:|
| 年初，固定债尚未再融资 | 年化+4 | 年化+1 | 年化0 | 年化+3 |
| 年中再融资之后 | 年化+4 | 年化+1 | 年化+2 | 年化+1 |
| 整个第一年累计 | 累计+4 | 累计+1 | 累计+1 | 累计+2 |

首年累计比较的是简单计息下的应计金额；现金收付日还取决于付息合同、结息日和应计／支付安排.

<div data-experiment-slot="exp-ei10-rate-transmission"></div>

若再融资移到年末，固定债新增年化费用仍为2，首年累计新增费用降为零. 若仍在年中再融资而新债信用利差另升100基点，新增年化费用为3，首年为1.5.

<a id="ei10-business"></a>

## 信用数量与客户需求

现金很多的企业可能暂时获得净利息收入，但客户也可能因分期付款更贵而推迟买设备；银行还可能缩短授信期限或降低可提款额度. 融资的**价格**、**数量**和**用途**需分开核查.

设备客户的贷款报价提高，可使边际项目推迟，随后影响订单、交付和预收款. 银行则因存款成本与贷款收益重置不同而改变净息差. 对现金充裕的软件企业，客户预算和续约价格可能比直接借款费用带来更大的经营变化.

| 路径 | 先核哪份材料 | 能区分解释的新观察 |
|---|---|---|
| 存量债务费用 | 浮息比例、重置规则、到期分布 | 下一次重置或再融资后的费用率 |
| 现金收益 | 现金投资期限、收益方式、受限状态 | 利息收入与现金余额的共同变化 |
| 信用供给 | 授信承诺、财务约束、提款条件 | 额度、抵押要求或到期安排改变 |
| 客户支出 | 客户融资方式、订单与取消 | 分期购买和现金购买客户是否分化 |

[企业现金与利率传导研究](https://ou-liu-red-sugar.github.io/zh/notebook/research-corporate-cash-rate-transmission/)用企业数据考察现金和债务结构对应的利率响应差异.

<a id="ei10-exercises"></a>

## 重建与迁移

<strong>任务一：</strong>用默认余额和200基点冲击，假设40%固定债在年中再融资，分别报年初净年化增量、再融资后的净年化增量、第一年累计增量.

<strong>解析.</strong> 现金收入年化增4，浮债费用增1，年初净年化增3. 固定债再融资后费用年化增2，净年化增1；首年固定债累计费用增1，全年净利息累计增2. 实际收付日期另按合同确定.

<strong>任务二：</strong>再融资后基准上升200基点、信用利差再增加100基点，其他条件保持默认. 先只对固定债应用额外利差，第一年净利息增量是多少？

<strong>解析.</strong> 再融资本金100，利率增3%，新增年化费用3，半年度1.5. 现金和旧浮债仍按题设重定价，首年净利息增量为 $4-1-1.5=1.5$.

<strong>迁移任务：</strong>另一家设备商现金20、浮债200、固定债100，利率同样上升200基点，固定债本年不再融资；客户多数用贷款买设备. 写出直接利息结果及一条可能更晚出现的经营路径.

<strong>解析.</strong> 完全传导下，现金收益年化增0.4，浮债费用增4，净利息年化降3.6 USD M. 客户融资变贵还可推迟订单，影响排产、交付及营运资金；可用分期融资比例、取消订单及交期资料检验这条经营路径.

[^mit]: EIDEF-S01，Ricardo Caballero，MIT 14.02 Spring 2023，Lecture 7 “An Extended IS–LM Model”，nominal/real interest rate、risk premium 与企业融资单元. [课程与转录入口](https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/resources/1402-sp23-lecture-7-v2_mp4/).
[^feds]: EIDEF-S02，Yuriy Kitsul、Bill Lang、Mehrdad Samadi，FEDS Notes，2023-12-01，“Monetary Policy Tightening and Debt Servicing Costs of Nonfinancial Companies”，债务服务成本定义、Tables 1–2、maturity/refinancing 与结论单元，样本截至2023Q1. [原文](https://www.federalreserve.gov/econres/notes/feds-notes/monetary-policy-tightening-and-debt-servicing-costs-of-nonfinancial-companies-20231201.html).

<script src="/notebook/labs/ei-defgh/reader-adapter.js" defer></script>

## Additional teaching material
## 静态计算

教学金额为USD M. 现金年化收入增4，浮债费用增1，年初净年化增3. 固定债40%在年中再融资后新增年化费用2，净年化增量降至1；首年新增固定债费用1，净利息累计增2. 再融资时点为年初或年末时，首年新增费用分别2或0.

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
    "static_equivalent": "教学金额为USD M. 现金年化收入增4，浮债费用增1，年初净年化增3. 固定债40%在年中再融资后新增年化费用2，净年化增量降至1；首年新增固定债费用1，净利息累计增2. 再融资时点为年初或年末时，首年新增费用分别2或0.",
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
