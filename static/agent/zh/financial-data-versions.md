# 金融数据、变量与版本

按 observation_period、release_at、received_at 与版本记录重建历史输入，并把公司行动引起的单位变化接入同一数据表.

Entry: zh-qt01 | Node: QT01 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 用BEA两版2020Q2数据区分公开截面与系统接收截面，推导未来记录不改变旧截面的条件；再以拆股和分配重算价格收益、总收益及单位变化. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-qt01",
  "node_id": "QT01",
  "content_version": "2026-09-22-deep-review",
  "export_mode": "public",
  "audience": "高年级本科至研究生；默认微积分、线性代数与基本概率",
  "selected_branch": "full_entry",
  "learning_task": "用BEA两版2020Q2数据区分公开截面与系统接收截面，推导未来记录不改变旧截面的条件；再以拆股和分配重算价格收益、总收益及单位变化.",
  "body_source": "body_markdown",
  "prompt": "读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 指定完整单元，选择可选分支后再读 optional_readings；记录题名、版本、定位与支持内容. 缺失必读单元时先取得等价原件，再解释依赖它的命题. 用BEA两版2020Q2数据区分公开截面与系统接收截面，推导未来记录不改变旧截面的条件；再以拆股和分配重算价格收益、总收益及单位变化. 用完整推导或计算诊断理解，已掌握步骤直接继承，再用改变条件的任务检验迁移. runtime_reading_log记录实际读取.",
  "required_readings": [
    {
      "source_id": "QS02-2.1",
      "title": "Forecasting: Principles and Practice, §2.1 tsibble objects",
      "authors": [
        "Rob J Hyndman",
        "George Athanasopoulos"
      ],
      "version": "Third edition, online; access snapshot 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://otexts.com/fpp3/tsibbles.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2.1 全节；The index variable、The key variables、单位转换与 CSV 示例",
        "scope": "Rob J Hyndman、George Athanasopoulos，*Forecasting: Principles and Practice*，3rd ed，在线版（本次读取日 2026-09-21）；[§2.1 全节](https://otexts.com/fpp3/tsibbles.html)，定位 “The index variable”“The key variables”及单位转换、唯一键说明. 支持索引、键和单位组织；增加发布版本是本篇的应用设计.",
        "purpose": "索引、键、单位转换"
      },
      "supports": "索引、键、单位转换",
      "limits": "没有运行 R 代码. 原始记录中增加发布版本键，是本篇应用设计，不是原书的同名制度.",
      "fallback_source_ids": []
    },
    {
      "source_id": "BEA-2020Q2-ADV",
      "title": "Gross Domestic Product, 2nd Quarter 2020 (Advance Estimate) and Annual Update",
      "authors": [
        "U.S. Bureau of Economic Analysis"
      ],
      "version": "BEA 20–37; released 2020-07-30 08:30 EDT",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "页首发布时间与开篇 −32.9%；估计不完整及修订说明；Statistical conventions",
        "scope": "U.S. BEA，2020-07-30，[2020Q2 GDP Advance Estimate，BEA 20–37](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update). 定位页首 08:30 EDT、开篇 −32.9%、数据可修订段、文末 “Statistical conventions”. 只用于固定历史版本，不称现值.",
        "purpose": "初值、发布时间与统计口径"
      },
      "supports": "初值、发布时间与统计口径",
      "limits": "只用于固定历史初值；不是当前修订后序列，也不支持教学阈值、接收延迟或任何交易表现.",
      "fallback_source_ids": []
    },
    {
      "source_id": "BEA-2020Q2-SECOND",
      "title": "Gross Domestic Product, 2nd Quarter 2020 (Second Estimate); Corporate Profits, 2nd Quarter 2020 (Preliminary Estimate)",
      "authors": [
        "U.S. Bureau of Economic Analysis"
      ],
      "version": "BEA 20–41; released 2020-08-27 08:30 EDT",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "页首发布时间与开篇 −31.7%；Updates to GDP 修订表的 Real GDP 行",
        "scope": "U.S. BEA，2020-08-27，[2020Q2 GDP Second Estimate，BEA 20–41](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter). 定位页首 08:30 EDT、开篇、 “Updates to GDP”及其 Real GDP 行.",
        "purpose": "次值及修订幅度"
      },
      "supports": "次值及修订幅度",
      "limits": "只用于固定历史次值；未采用无关公司利润内容，不把本次下载日当作历史接收时点.",
      "fallback_source_ids": []
    },
    {
      "source_id": "QD02-ALFRED-HELP",
      "title": "ALFRED Help",
      "authors": [
        "Federal Reserve Bank of St. Louis"
      ],
      "version": "Live help page; accessed 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://alfred.stlouisfed.org/help",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "What is ALFRED / vintage 说明；更新与 Release Dates 的确定方法；数据版本核验及增长率公式",
        "scope": "Federal Reserve Bank of St. Louis，[ALFRED Help](https://alfred.stlouisfed.org/help)，本次读取 2026-09-21. 定位 vintage、数据何时加入、Release Dates 的确定方法及增长率公式；不把日期粒度当盘中接收日志.",
        "purpose": "历史版本与日期来源限制"
      },
      "supports": "历史版本与日期来源限制",
      "limits": "日期元数据不等于特定系统盘中接收日志；没有执行历史序列数据导出.",
      "fallback_source_ids": []
    },
    {
      "source_id": "QD02-API-REALTIME",
      "title": "FRED API: Real-Time Periods",
      "authors": [
        "Federal Reserve Bank of St. Louis"
      ],
      "version": "Live documentation; accessed 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://fred.stlouisfed.org/docs/api/fred/realtime_period.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Introduction 全单元；realtime_start / realtime_end 及日期闭区间规则",
        "scope": "Federal Reserve Bank of St. Louis，[FRED API：Real-Time Periods](https://fred.stlouisfed.org/docs/api/fred/realtime_period.html)，Introduction 全单元，`realtime_start` / `realtime_end` 及闭区间定义. 本篇没有调用 API，也没有使用示例 API key.",
        "purpose": "实时区间的日期粒度"
      },
      "supports": "实时区间的日期粒度",
      "limits": "只读文档，未调用 API，未使用示例密钥.",
      "fallback_source_ids": []
    },
    {
      "source_id": "AAPL-SPLIT-20200730",
      "title": "Apple Reports Third Quarter Results",
      "authors": [
        "Apple"
      ],
      "version": "News release, 2020-07-30",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.apple.com/newsroom/2020/07/apple-reports-third-quarter-results/",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "four-for-one stock split 完整公告段；August 24 record date；August 31 split-adjusted trading",
        "scope": "Apple，2020-07-30，[Apple Reports Third Quarter Results](https://www.apple.com/newsroom/2020/07/apple-reports-third-quarter-results/)，定位包含 “four-for-one stock split” 与 “August 31, 2020” 的完整公告段. 仅支持拆股事实与日期，不支持本文假设价格.",
        "purpose": "仅支持真实公司行动，不支持假设行情"
      },
      "supports": "仅支持真实公司行动，不支持假设行情",
      "limits": "只支持 4:1 与事件日期. 本文价格、股数、现金分配是独立教学输入；未取得真实 AAPL 行情.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围.** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容. 识别必读材料，选读材料只有被采用时才转成对应问题的必读.\n2. **实际获取.** 用浏览/文件读取工具打开指定 URL 或随包文件. 核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口.\n3. **完整读取所需单元.** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注. PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件. 不能只看搜索命中的几行.\n4. **形成简短内容对应.** 每项记录实际位置、读到的关键设定和它支持哪一步教学. 例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”. 后半句若为本站推论须标为推论.\n5. **满足后才开始该范围的实质教学.** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解. 引用跟着对应命题或计算，不在末尾堆书名.\n6. **读取失败时自动处理缺口.** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤. 等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围. 仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇.\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载. 它不能从技术上保证理解，但能让来源与使用之间可检查.",
  "supplied_inputs": {
    "data_version": "2026-09-21-QT-A-review-v2",
    "inputs": {
      "vintage": {
        "experiment_id": "EXP-DATA-VINTAGE-01",
        "series_label": "US real GDP growth, qoq SAAR",
        "period": "2020Q2",
        "unit": "percent",
        "records": [
          {
            "version": "advance",
            "version_order": 1,
            "release_at": "2020-07-30T08:30:00-04:00",
            "received_at": null,
            "value": -32.9,
            "source_id": "BEA-2020Q2-ADV"
          },
          {
            "version": "second",
            "version_order": 2,
            "release_at": "2020-08-27T08:30:00-04:00",
            "received_at": null,
            "value": -31.7,
            "source_id": "BEA-2020Q2-SECOND"
          }
        ],
        "default_cutoff": "2020-08-03T16:00:00-04:00",
        "default_mode": "public",
        "threshold_percent": -32,
        "simulation": {
          "status": "teaching_assumption",
          "delay_seconds": 5
        }
      },
      "split": {
        "status": "teaching_assumption_except_4_for_1_event",
        "initial_shares": 1,
        "price_before": 400,
        "ratio": 4,
        "price_after": 102,
        "cash_distribution_per_new_share": 1,
        "actual_event_source": "AAPL-SPLIT-20200730"
      }
    },
    "default_outputs": {
      "vintage": {
        "status": "selected",
        "mode": "public",
        "selected_version": "advance",
        "value": -32.9,
        "signal": 0
      },
      "quarterly_percent": [
        -9.493320873490463,
        -9.091356821489438
      ],
      "split": {
        "new_shares": 4,
        "initial_wealth": 400,
        "stock_value": 408,
        "distribution_cash": 4,
        "ending_wealth": 412,
        "raw_quote_return": -0.745,
        "price_return": 0.020000000000000018,
        "total_return": 0.030000000000000027,
        "log_price_return": 0.01980262729617973
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
<span id="qt01-data-records"></span>

## 历史输入记录

同一季度的指标可有多个发布版本，每股报价也会随拆股改变单位. 历史输入需同时记录对象、观察期、单位、版本和可得时点.

已经公布的 `−32.9` 是一条带单位和版本的历史记录；在公布前，“未来会公布什么数”才是模型中的随机变量. 观察到的一条历史记录与未来分布是两个对象. 后一个区分可就地查阅 [QT03](/zh/notebook/random-variables-distributions/).

时间序列的索引标记观测时点，键识别序列.[^fpp] 加入发布版本后，同一观察期的初值与修订值分别存储，便于重建各时点可用输入.

<span id="qt01-gdp-releases"></span>

## GDP发布版本

BEA的两份2020Q2发布记录为：

| 观察对象 | 观察期 | 来源发布时间 | 原件与版本 | 公布值及单位 |
|---|---|---|---|---|
| 美国实际 GDP 的季度环比年化增长率，经季节调整 | 2020Q2，即 4–6 月 | 2020-07-30 08:30 EDT | BEA 20–37，Advance estimate | −32.9% |
| 同一对象 | 同一 2020Q2 | 2020-08-27 08:30 EDT | BEA 20–41，Second estimate | −31.7% |

初值基于当时可用的不完整数据，次值的Updates to GDP列出修订. 两个数字均描述2020Q2，发布相隔一个月.[^bea-adv][^bea-second]

**定义（本篇的数据记录）.** 令一项指标的对象、统计口径、单位与观察频率已经固定，则一条发布记录是“观察期、来源版本、来源发布时间、取值及原件位置”的组合. 涉及真实系统回放时，再独立记录该系统收到这条记录的时间.

观察期定位经济活动，发布时间定位来源公开：2020Q2于6月底结束，初值于7月30日发布. 系统输入还涉及接收与决策时点：

| 字段 | 回答的问题 | 本例的处理 |
|---|---|---|
| `release_at` | 来源何时发布这一版本？ | 来自 BEA 原件，保留 `−04:00` 时区偏移 |
| `received_at` | 某一个具体研究或交易系统何时收到它？ | 没有取得接收日志，记为 `null` |
| `retrieved_at` | 本教学材料何时重新取得原件？ | 2026-09-21；不能反写成历史接收时间 |
| `decision_at` | 这一次分析允许使用的信息截止到何时？ | 由研究任务明确指定，不是原始数值的属性 |

ALFRED 保留历史数据版本，并提供来源日期与更新时差的说明. API 的实时区间按日期指定，因此只能支持日期层级的版本判断，不能确定某个盘中系统在发布后的逐秒接收时点.[^alfred][^realtime]

<span id="qt01-historical-cutoff"></span>

## 历史截面

固定同一指标与观察期，版本顺序由来源确定. 第 $v$ 版发布时间记为 $r_v$，数值记为 $x^{(v)}$.

**定义（来源公开截面）.** 给定截止时点 $t$，在满足 $r_v\le t$ 的记录中，选取来源版本顺序最新的一条，得到 $x^{\mathrm{pub}}(t)$；没有合格记录时，结果是“尚未公开”，而不是零.

系统接收截面另要求接收记录 $a_v\le t$，本节约定 $a_v\ge r_v$. 接收时间未知时无法核定系统输入；同一发布时间若有冲突版本，需按来源的修订顺序消歧.

设检验规则：输入 $x>-32$ 时信号1，否则0；输入缺失则信号缺失.

| 截止时点，均为 EDT | 来源公开截面 | 信号 $\mathbf 1_{\{x>-32\}}$ | 有据可说的话 |
|---|---:|---:|---|
| 2020-07-30 08:29:59 | 缺失 | 缺失 | 初值还没有公开 |
| 2020-08-03 16:00:00 | −32.9 | 0 | 只能选已经公开的初值 |
| 2020-08-27 08:30:00 | −31.7 | 1 | 在“发布事件已发生”的顺序约定下，次值进入公开截面 |

两版均缺真实接收日志，因此表格表示来源公开截面.

将8月27日次值回填8月3日，会把信号0改为1，较晚信息进入较早决策，造成泄漏.

**命题（追加未来版本不应改写较早截面）.** 固定截止时点 $t$、既有记录及版本选择规则. 向数据集中追加若干发布时点都严格晚于 $t$ 的记录，来源公开截面 $x^{\mathrm{pub}}(t)$ 不变.

**证明.** 新记录均不满足 $r_v\le t$，合格集合及其最新版本保持不变. 由 $a_v\ge r_v$，系统接收截面同样不变. 若更正原有发布时间，则属于输入记录修改，另留更正记录.

两版本之间的修订幅度为 `−31.7 − (−32.9) = 1.2` **个百分点**. 另一个容易出错的地方是年化. 令季度环比增长率的小数表示为 $g_q$，对应的年化率为 $g_a$，则按四个同幅季度复合的定义，$1+g_a=(1+g_q)^4$. 因此

$$
g_q=(1+g_a)^{1/4}-1.
$$

代入−32.9%和−31.7%，得到季度率约−9.493%和−9.091%. 结果由已舍入公布率反推，使用复合关系而非年化率除4.[^bea-adv][^alfred]

<span id="qt01-share-units"></span>

## 拆股与财富

Apple于2020-07-30公告4:1拆股，8月31日起按新股单位交易.[^aapl]

设拆股前1股、每股400美元，纯单位转换后为4股、每股100美元. 报价比值 $100/400-1=-75\%$，持有财富变化为 $4\times100/400-1=0$.

**命题（纯拆股的单位一致性）.** 设拆股比例为 $k>0$，拆股前股数与每股价格分别为 $q,S$. 若只作单位转换，令 $q'=kq$、$S'=S/k$，则 $q'S'=qS$.

**证明.** $(kq)(S/k)=qS$. 该等式固定经济价格，仅转换每股单位.

再设拆股后终价102美元，每新股已收1美元分配且留为现金. 股票408、现金4，终财富412美元：

| 口径 | 计算 | 本例结果 |
|---|---|---:|
| 错接不同每股单位的报价变化 | $102/400-1$ | −74.5% |
| 同一新股单位下的价格收益 | $102/(400/4)-1$ | 2% |
| 本例含分配、未再投资的持有总收益 | $(4\times102+4\times1)/400-1$ | 3% |

**定义（本例的收益口径）.** 对正的初始价格 $S_0$，在股数单位已统一、期间没有交易、全部分配现金 $D$ 留存且不计利息、费用和税的条件下，简单价格收益为 $S_1/S_0-1$，持有总收益为 $(S_1+D)/S_0-1$. 若 $S_1>0$，对数价格收益为 $\log(S_1/S_0)$.

对数价格收益可沿连续持有区间相加. 含分配的财富指数则需指定现金留存或再投资规则；供应商调整价应按其分配处理及基准日定义使用.

历史价格统一乘固定系数时，收益比率中的系数抵消；绝对价格阈值及未同步调整的成交量会改变. 复权是否影响历史决策，取决于计算量和当时可得调整规则.

<span id="qt01-experiments"></span>

<div data-experiment-slot="lab-qt01"></div>

## 版本与单位实验

实验对比公开截面、实际接收记录与假设延迟5秒三种状态. 公开截面在8月3日选初值，实际接收状态未知；5秒延迟分支在7月30日08:30:05收到初值，模拟接收字段与真实空值分别保存.

<span id="qt01-self-check"></span>

## 练习与解析

**题一：解释.** 某文件把 2020Q2 数据的时间列写成 `2020-06-30`，取值为 −31.7，并称“按日期排序后就没有未来数据”. 指出缺少什么，并说明怎样修.

**解析.** 这只有观察期标签，没有次值的来源发布时间. 必须恢复 2020-08-27 08:30 EDT 这条版本记录，并保留初值记录. 对 8 月 3 日的公开截面选初值；对真实系统回放，还要有接收日志. 只把时间列改成发布日期也不充分，因为那会丢失它描述 2020Q2 的事实；两个时间维度都要保留.

**题二：迁移.** 一家公司某年报的原版于 3 月 1 日公开，4 月 10 日更正一个金额. 研究截止在 3 月 20 日，系统于 3 月 2 日收到原版，但没有更正版的历史接收日志. 应保存几条记录？当时能用哪个版本？

**解析.** 至少保留原版与更正版两条，绑定同一报告期和不同来源版本. 3 月 20 日只能使用原版；已有 3 月 2 日的接收记录还支持该系统届时已经收到. 更正版的接收时间继续留空，不会妨碍这个较早截止时点的结论. 若截止改到 4 月 11 日，则来源公开截面可选更正版，但系统是否已经收到仍不能确定.

**题三：迁移计算.** 纯 2:1 拆股前持有 3 股，每股 80 美元；拆股后期末每股 42 美元，并已收到每股新股 0.5 美元现金，现金留存. 求期末财富、价格收益、总收益.

**解析.** 新股数6，同口径初价40. 股票 $6\times42=252$、现金 $6\times0.5=3$、终财富255，初始240，价格收益5%、总收益6.25%.

[^fpp]: Rob J Hyndman、George Athanasopoulos，*Forecasting: Principles and Practice*，3rd ed，在线版，访问于 2026-09-21；[§2.1 全节](https://otexts.com/fpp3/tsibbles.html)，定位 “The index variable”“The key variables”及单位转换、唯一键说明. 支持索引、键和单位组织；增加发布版本是本篇的应用设计.
[^bea-adv]: U.S. BEA，2020-07-30，[2020Q2 GDP Advance Estimate，BEA 20–37](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update). 定位页首 08:30 EDT、开篇 −32.9%、数据可修订段、文末 “Statistical conventions”.
[^bea-second]: U.S. BEA，2020-08-27，[2020Q2 GDP Second Estimate，BEA 20–41](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter). 定位页首 08:30 EDT、开篇、 “Updates to GDP”及其 Real GDP 行.
[^alfred]: Federal Reserve Bank of St. Louis，[ALFRED Help](https://alfred.stlouisfed.org/help)，访问于 2026-09-21. 定位 vintage、数据何时加入、Release Dates 的确定方法及增长率公式..
[^realtime]: Federal Reserve Bank of St. Louis，[FRED API：Real-Time Periods](https://fred.stlouisfed.org/docs/api/fred/realtime_period.html)，Introduction 全单元，`realtime_start` / `realtime_end` 及闭区间定义.
[^aapl]: Apple，2020-07-30，[Apple Reports Third Quarter Results](https://www.apple.com/newsroom/2020/07/apple-reports-third-quarter-results/)，定位包含 “four-for-one stock split” 与 “August 31, 2020” 的完整公告段.

## Additional teaching material
## 计算输入与默认输出

同源实验为 `experiments.json` 中的 `vintage` 和 `split`；复算函数见 `engine.js`. 两条真实值直接摘自 BEA，接收时间均为未知.

```json
{
  "experiment_id": "EXP-DATA-VINTAGE-01",
  "series_label": "US real GDP growth, qoq SAAR",
  "observation_period": "2020Q2",
  "value_unit": "percent",
  "records": [
    {"version": "advance", "version_order": 1, "release_at": "2020-07-30T08:30:00-04:00", "received_at": null, "value": -32.9, "source_id": "BEA-2020Q2-ADV"},
    {"version": "second", "version_order": 2, "release_at": "2020-08-27T08:30:00-04:00", "received_at": null, "value": -31.7, "source_id": "BEA-2020Q2-SECOND"}
  ],
  "default_cutoff": "2020-08-03T16:00:00-04:00",
  "default_mode": "public",
  "threshold_percent": -32,
  "default_selected_value": -32.9,
  "default_signal": 0,
  "strict_received_output": "unknown_received_time",
  "simulated_delay_seconds": 5
}
```

```text
revision_pp = -31.7 - (-32.9) = 1.2
quarterly_pct = 100 * ((1 + annualized_pct / 100) ** 0.25 - 1)
public_candidate = release_at <= cutoff
received_candidate = release_at <= cutoff AND received_at is known AND received_at <= cutoff
signal = null if selected_value is null else Number(selected_value > threshold_percent)
new_shares = q0 * split_ratio
initial_wealth = q0 * price_before
ending_wealth = new_shares * (price_after + cash_distribution_per_new_share)
```

非正初始财富不计算收益率；非正价格不计算对数；实际接收缺失的状态与“尚未发布”分开. review-v2 的独立复算记录见 `review-verification.json`；`verify.js` 若由 Lead 后续执行会另生成新的 `verification.json`. 正文显示值按所列精度舍入.

## 交互与静态替代

`#qt01` 包含有文字标签的时间预设、模式选择、假设接收延迟输入和拆股面板. 时间内部使用带偏移的 ISO 字符串，显示明确为 EDT；不依赖访问者电脑时区. 公开模式与假设接收模式持续显示身份标签. 改变截止时点后同时更新候选版本、选中值、信号与拒绝原因. 界面不允许手工改真实发布值. 数学公式保留在 Markdown，HTML 的输出用文字和表格表达，不依赖在线公式服务.

静态表常驻；键盘可操作所有控件；错误有文本而不只靠颜色；打印隐藏控件但保留默认输入、完整默认结果和状态说明. HTML 是由同源输入和计算函数生成的演示，不是正式站点实现.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-DATA-VINTAGE-01",
    "title": "2020Q2 GDP 数据版本与截止时点",
    "anchor": "qt01-historical-cutoff",
    "description": "US real GDP growth, qoq SAAR",
    "inputs": {
      "vintage": {
        "experiment_id": "EXP-DATA-VINTAGE-01",
        "series_label": "US real GDP growth, qoq SAAR",
        "period": "2020Q2",
        "unit": "percent",
        "records": [
          {
            "version": "advance",
            "version_order": 1,
            "release_at": "2020-07-30T08:30:00-04:00",
            "received_at": null,
            "value": -32.9,
            "source_id": "BEA-2020Q2-ADV"
          },
          {
            "version": "second",
            "version_order": 2,
            "release_at": "2020-08-27T08:30:00-04:00",
            "received_at": null,
            "value": -31.7,
            "source_id": "BEA-2020Q2-SECOND"
          }
        ],
        "default_cutoff": "2020-08-03T16:00:00-04:00",
        "default_mode": "public",
        "threshold_percent": -32,
        "simulation": {
          "status": "teaching_assumption",
          "delay_seconds": 5
        }
      }
    },
    "outputs": {
      "vintage": {
        "status": "selected",
        "mode": "public",
        "selected_version": "advance",
        "value": -32.9,
        "signal": 0
      },
      "quarterly_percent": [
        -9.493320873490463,
        -9.091356821489438
      ]
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched",
    "url": "/notebook/labs/qt-a/interactions.html#qt01"
  }
]
```

## Sources
- [Apple Reports Third Quarter Results](https://www.apple.com/newsroom/2020/07/apple-reports-third-quarter-results/): Apple 的2020年7月30日公告给出4:1拆股安排. 拆股同时改变股数和每股计价单位；本文的400、102及现金分配数值是用于计算财富的独立教学输入.
- [Gross Domestic Product, 2nd Quarter 2020 (Advance Estimate) and Annual Update](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update): BEA 在2020年7月30日发布的美国第二季度实际GDP初值为环比折年下降32.9%. 它记录当时发布的估计版本；后来的修订值不能倒填成当时已知的数据.
- [Gross Domestic Product, 2nd Quarter 2020 (Second Estimate); Corporate Profits, 2nd Quarter 2020 (Preliminary Estimate)](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter): BEA 在2020年8月27日把第二季度实际GDP环比折年下降幅度修订为31.7%，并对照初值32.9%. 观察期相同，发布时间和估计版本不同.
- [ALFRED Help](https://alfred.stlouisfed.org/help): ALFRED 保留经济数据的历史版本，使使用者能查找某个日期当时可得的数值. 来源发布日期与具体系统收到数据的时刻仍是不同字段.
- [FRED API: Real-Time Periods](https://fred.stlouisfed.org/docs/api/fred/realtime_period.html): FRED API 的实时区间描述数据版本在哪些日期有效，起止日均包含在内. 按历史信息截止查询时，应保留这一版本口径，不能把默认的当前版本当作历史截面.
- [Forecasting: Principles and Practice, §2.1 tsibble objects](https://otexts.com/fpp3/tsibbles.html): tsibble 使用时间索引与序列标识组织观测. 变量数值要和日期、对象及单位一起保存；构建历史输入时，本文另外保留数据公开及接收时点.

## Content relations
```json
[
  {
    "from": "zh-qt01",
    "relation": "part_of",
    "to": "quant-data-info",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt01",
    "relation": "illustrated_by",
    "to": "EXP-DATA-VINTAGE-01",
    "reason": "同一观察期的公开版本与截止时点",
    "scope": "2020Q2 GDP 两版本"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "BEA-2020Q2-ADV",
    "reason": "初值、发布时间与统计口径",
    "at_section": "qt01-gdp-releases",
    "source_at_section": "二",
    "locator": "页首发布时间与开篇 −32.9%；估计不完整及修订说明；Statistical conventions"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "BEA-2020Q2-SECOND",
    "reason": "次值及修订幅度",
    "at_section": "qt01-gdp-releases",
    "source_at_section": "二至三",
    "at_sections": [
      "qt01-gdp-releases",
      "qt01-historical-cutoff"
    ],
    "locator": "页首发布时间与开篇 −31.7%；Updates to GDP 修订表的 Real GDP 行"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "QD02-ALFRED-HELP",
    "reason": "历史版本与日期来源限制",
    "at_section": "qt01-gdp-releases",
    "source_at_section": "二",
    "locator": "What is ALFRED / vintage 说明；更新与 Release Dates 的确定方法；数据版本核验及增长率公式"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "QD02-API-REALTIME",
    "reason": "实时区间的日期粒度",
    "at_section": "qt01-gdp-releases",
    "source_at_section": "二",
    "locator": "Introduction 全单元；realtime_start / realtime_end 及日期闭区间规则"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "QS02-2.1",
    "reason": "索引、键、单位转换",
    "at_section": "qt01-data-records",
    "source_at_section": "一",
    "locator": "§2.1 全节；The index variable、The key variables、单位转换与 CSV 示例"
  },
  {
    "from": "zh-qt01",
    "relation": "supported_by",
    "to": "AAPL-SPLIT-20200730",
    "reason": "仅支持真实公司行动，不支持假设行情",
    "at_section": "qt01-share-units",
    "source_at_section": "四",
    "locator": "four-for-one stock split 完整公告段；August 24 record date；August 31 split-adjusted trading"
  },
  {
    "from": "zh-qt01",
    "relation": "informs",
    "to": "zh-qt07",
    "reason": "提供决策前可用的数据与时间身份",
    "scope": "不是成交证明"
  }
]
```

## Related entries

## Optional reading path
理解模型并亲手算: step 1/9
重建给定时点的数据截面，并核对单位与公司行动.
数据可得并不代表可以按旧价格成交，下一篇把信息与持仓的时钟分开.
Next: [信息流与可执行策略](https://ou-liu-red-sugar.github.io/zh/notebook/information-executable-strategies/)
