# 信息流与可执行策略

本篇先给这些事件一个准确的数学表达，再把它落实为可逐行核对的资金账。

Entry: zh-qt07 | Node: QT07 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你负责 QT07「信息流与可执行策略」。先实际读取本文件完整正文与数据输入，再通过脚注打开 MIT Lecture 1 §4.1、Lecture 25 §0 中滤过/适应部分、Tropp Lecture 24 §24.1.1 Definition 24.1、FPP3 §5.10 全节，以及本篇使用的 BEA 发布段和 ALFRED 日期说明。逐项记下版本、实际范围、能支持的内容；仅看到书目或摘要不能开始相应事实教学。若打不开，先核对有据的等价原件；没有完整支持单元就明确缺口，不补造延迟或成交事实。
不要以 QT06 或一般条件期望作为先修。诊断从四情景表开始：请读者判断两条规则是否对相同已知信息给出相同决定，并指出不可测的那一个事件。读者会集合论时，直接让其重建有限分组命题，不逐个问四则运算。
随后要求读者先按 E0–E6 指出 observation、decision、execution、fill report、booking、valuation 各自改变了什么，并明确 settlement 本例未建模；再填出 1000 美元、2 股、103 成交、1 美元费用、105 标记的经济账本。必须分清目标与实际数量、经济敞口与本地已记账持仓、标记价值与退出经济现金，也不得把任何一项称为 settled cash。改变为只成交一股，再检查结果。讲到“调仓只损失费用”时，请其说出固定标记价等于成交价的条件，并推导一般式。
最后选正文题二或题三。合格标准不是说出“前视偏差”四个字，而是定位到具体信息、计算、持仓或成交被提前的时点，并给出修正后的账本。
未知 received_at 保持未知；假设延迟独立标记。所有教学价格不称为历史行情；不宣称合法规则必然赚钱；不调用个人账户或另做股票估值。参考材料满足后可按读者要求直接讲解，不强制延长问答。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-qt07",
  "node_id": "QT07",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "audience": "高年级本科至研究生；默认集合、函数与基本概率",
  "selected_branch": "full_entry",
  "learning_task": "本篇先给这些事件一个准确的数学表达，再把它落实为可逐行核对的资金账。目标不是证明某条规则赚钱，而是判断一份规则和它声称的计算结果，能否放在同一条时间线上。",
  "body_source": "body_markdown",
  "prompt": "你负责 QT07「信息流与可执行策略」。先实际读取本文件完整正文与数据输入，再通过脚注打开 MIT Lecture 1 §4.1、Lecture 25 §0 中滤过/适应部分、Tropp Lecture 24 §24.1.1 Definition 24.1、FPP3 §5.10 全节，以及本篇使用的 BEA 发布段和 ALFRED 日期说明。逐项记下版本、实际范围、能支持的内容；仅看到书目或摘要不能开始相应事实教学。若打不开，先核对有据的等价原件；没有完整支持单元就明确缺口，不补造延迟或成交事实。\n不要以 QT06 或一般条件期望作为先修。诊断从四情景表开始：请读者判断两条规则是否对相同已知信息给出相同决定，并指出不可测的那一个事件。读者会集合论时，直接让其重建有限分组命题，不逐个问四则运算。\n随后要求读者先按 E0–E6 指出 observation、decision、execution、fill report、booking、valuation 各自改变了什么，并明确 settlement 本例未建模；再填出 1000 美元、2 股、103 成交、1 美元费用、105 标记的经济账本。必须分清目标与实际数量、经济敞口与本地已记账持仓、标记价值与退出经济现金，也不得把任何一项称为 settled cash。改变为只成交一股，再检查结果。讲到“调仓只损失费用”时，请其说出固定标记价等于成交价的条件，并推导一般式。\n最后选正文题二或题三。合格标准不是说出“前视偏差”四个字，而是定位到具体信息、计算、持仓或成交被提前的时点，并给出修正后的账本。\n未知 received_at 保持未知；假设延迟独立标记。所有教学价格不称为历史行情；不宣称合法规则必然赚钱；不调用个人账户或另做股票估值。参考材料满足后可按读者要求直接讲解，不强制延长问答。",
  "required_readings": [
    {
      "source_id": "QP01-L01",
      "title": "Lecture 1: Probabilistic Models and Probability Measures",
      "authors": [
        "MIT 6.436J / 15.085J course materials"
      ],
      "version": "Fall 2018",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§4.1，印刷 pp.6–7（重点 p.7），有限观察者与信息的例子",
        "scope": "MIT 6.436J/15.085J，Fall 2018，Lecture 1，[Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf)，§4.1，印刷 pp.6–7（重点 p.7），有限观察者与信息的例子。有限分组决策判据的证明由本文给出。",
        "purpose": "有限观察者的信息解释"
      },
      "supports": "有限观察者的信息解释",
      "limits": "原文把有限容斥的证明留作练习；QT02 的二事件证明是本篇给出的推导，不冒称原文已完整证明。",
      "fallback_source_ids": []
    },
    {
      "source_id": "QP01-L25",
      "title": "Lecture 25: Martingales I",
      "authors": [
        "Yury Polyanskiy",
        "MIT class participants (scribe)"
      ],
      "version": "Fall 2018",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§0 Background，pp.1–2；本篇采用 p.2 的滤过与适应",
        "scope": "MIT 6.436/15.085，Lecture 25，讲授 Yury Polyanskiy、课堂参与者记录，[Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf)，§0 Background，pp.1–2；本篇采用 p.2 的滤过与适应，不采用 p.1 条件期望简写作本篇先修。",
        "purpose": "滤过、信息生成与适应"
      },
      "supports": "滤过、信息生成与适应",
      "limits": "课堂笔记而非全篇精校教材；本批不采用条件期望简写或后续鞅定理。离散可预测定义、有限分组证明在本文自足陈述。",
      "fallback_source_ids": []
    },
    {
      "source_id": "QP-TROPP-24.1",
      "title": "Probability Theory & Computational Mathematics — Lecture 24 §24.1.1",
      "authors": [
        "Joel A. Tropp"
      ],
      "version": "CMS/ACM 117, Caltech, Fall 2024; typeset 2025-01-23",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Lecture 24 §24.1.1，Definition 24.1 及紧随的下注时点解释，印刷 p.348 / PDF 第363页；不采用后续 martingale transform 命题",
        "scope": "Joel A. Tropp，*Probability Theory & Computational Mathematics*，CMS/ACM 117, Caltech, Fall 2024，typeset 2025-01-23，[Lecture 24 §24.1.1, Definition 24.1](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf)，printed p.348（PDF page 363）。本次复审实际查看该页；只采用 previsible/predictable process 的离散定义及“必须在本局结果揭晓前决定”的解释，不采用后续 martingale transform 定理。",
        "purpose": "离散可预测过程的 F_{k-1}-可测定义"
      },
      "supports": "离散可预测过程的 F_{k-1}-可测定义",
      "limits": "不采用该页后续 martingale transform 命题来证明本篇现金账或策略收益；只用于可预测性定义的公开支撑。",
      "fallback_source_ids": []
    },
    {
      "source_id": "QS02-5.10",
      "title": "Forecasting: Principles and Practice, §5.10 Time series cross-validation",
      "authors": [
        "Rob J Hyndman",
        "George Athanasopoulos"
      ],
      "version": "Third edition, online; access snapshot 2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://otexts.com/fpp3/tscv.html",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§5.10 全节；rolling forecasting origin、单步/多步、Google 2015 代码例",
        "scope": "Rob J Hyndman、George Athanasopoulos，[FPP3 §5.10：Time series cross-validation](https://otexts.com/fpp3/tscv.html)，本次读取 2026-09-21，全节。支持逐次前移预测起点及预测期限；本文未运行原书代码，也没有报告其数值为自己的复现。",
        "purpose": "时间尊重的预测验证"
      },
      "supports": "时间尊重的预测验证",
      "limits": "未运行原书 R 代码；预测验证不是可成交交易收益证明。",
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
        "locator": "页首 08:30 EDT 与开篇 −32.9%",
        "scope": "U.S. BEA，[2020Q2 Advance Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update)，2020-07-30，页首 08:30 EDT 与开篇 −32.9%。",
        "purpose": "核对本词条脚注所引的 Gross Domestic Product, 2nd Quarter 2020 (Advance Estimate) and Annual Update"
      },
      "supports": "页首发布时间与开篇 −32.9%；估计不完整及修订说明；Statistical conventions",
      "limits": "只用于固定历史初值；不是当前修订后序列，也不支持教学阈值、接收延迟或任何交易表现。",
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
        "locator": "页首 08:30 EDT、开篇及 Updates to GDP",
        "scope": "U.S. BEA，[2020Q2 Second Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter)，2020-08-27，页首 08:30 EDT、开篇及 Updates to GDP。",
        "purpose": "核对本词条脚注所引的 Gross Domestic Product, 2nd Quarter 2020 (Second Estimate); Corporate Profits, 2nd Quarter 2020 (Preliminary Estimate)"
      },
      "supports": "页首发布时间与开篇 −31.7%；Updates to GDP 修订表的 Real GDP 行",
      "limits": "只用于固定历史次值；未采用无关公司利润内容，不把本次下载日当作历史接收时点。",
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
        "locator": "数据更新、Release Dates 及日期确定顺序",
        "scope": "Federal Reserve Bank of St. Louis，[ALFRED Help](https://alfred.stlouisfed.org/help)，定位数据更新、Release Dates 及日期确定顺序。本次读取 2026-09-21；不能支持实际系统的逐秒延迟。",
        "purpose": "不能把来源日期替代系统接收日志"
      },
      "supports": "不能把来源日期替代系统接收日志",
      "limits": "日期元数据不等于特定系统盘中接收日志；没有执行历史序列数据导出。",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围。** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容。识别必读材料，选读材料只有被采用时才转成对应问题的必读。\n2. **实际获取。** 用浏览/文件读取工具打开指定 URL 或随包文件。核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口。\n3. **完整读取所需单元。** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注。PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件。不能只看搜索命中的几行。\n4. **形成简短内容对应。** 每项记录实际位置、读到的关键设定和它支持哪一步教学。例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”。后半句若为本站推论须标为推论。\n5. **满足后才开始该范围的实质教学。** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解。引用跟着对应命题或计算，不在末尾堆书名。\n6. **读取失败时自动处理缺口。** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤。等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围。仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇。\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载。它不能从技术上保证理解，但能让来源与使用之间可检查。",
  "supplied_inputs": {
    "data_version": "2026-09-21-QT-A-review-v2",
    "inputs": {
      "ledger": {
        "experiment_id": "EXP-CLOCK-01",
        "status": "entirely_fictional",
        "initial_cash": 1000,
        "target_shares": 2,
        "filled_shares": 2,
        "execution_price": 103,
        "entry_fee_if_filled": 1,
        "mark_price": 105,
        "exit_fee_if_position": 1,
        "wrong_clock_price": 100,
        "borrowing": false,
        "short_sales": false,
        "interest": 0,
        "tax": 0,
        "distributions": 0,
        "exit_price": 105,
        "timeline": {
          "status": "teaching_event_order_not_exchange_rule",
          "observation": "E0",
          "decision": "E1",
          "order_submitted": "E2",
          "execution": "E3",
          "fill_report_received": "E4",
          "booked": "E5",
          "valuation": "E6",
          "settlement": null,
          "settlement_status": "not_modelled",
          "economic_cash_convention": "recognize execution economics at E3 for ex-post teaching ledger; not settled or withdrawable cash"
        }
      },
      "information": {
        "status": "finite_teaching_model",
        "states": [
          "u+",
          "u-",
          "d+",
          "d-"
        ],
        "groups": [
          "u",
          "u",
          "d",
          "d"
        ],
        "price_changes": [
          2,
          -2,
          2,
          -2
        ],
        "rule_A": [
          2,
          2,
          0,
          0
        ],
        "rule_B": [
          1,
          -1,
          1,
          -1
        ]
      }
    },
    "default_outputs": {
      "ledger": {
        "cash_after_entry": 793,
        "actual_shares": 2,
        "value_at_execution_mark": 999,
        "marked_value": 1003,
        "marked_pnl": 3,
        "cash_after_exit": 1002,
        "realized_pnl_if_exited": 2
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched"
  },
  "runtime_reading_log": []
}
```

## Supplied entry
<span id="qt07-event-order"></span>

## 一、从一条信号到一笔真实持仓，中间还隔着什么

上一节把数据整理成带版本和可得时点的记录。现在我们有了一个合法输入，却还不能立即把它变成策略收益。看到某个数、作出决定、发出订单、取得成交，是几个不同的事件。只有成交以后形成的实际持仓，才承担之后的价格变化。

本篇先给这些事件一个准确的数学表达，再把它落实为可逐行核对的资金账。目标不是证明某条规则赚钱，而是判断一份规则和它声称的计算结果，能否放在同一条时间线上。

沿用真实的 GDP 例：2020Q2 初值在 7 月 30 日 08:30 EDT 公布为 −32.9%，次值在 8 月 27 日 08:30 EDT 公布为 −31.7%。观察期相同，公开时点不同。[^bea-adv][^bea-second] 这只建立来源的发布时间；实际系统收到它的时间仍未知。我们把“发布事件”和“收到事件”保留为两列，而不是用前者自动替代后者。ALFRED 日期元数据同样不能替代特定系统的盘中接收日志。[^alfred]

假设两位观察者看着同一个市场，一位已经收到公告，另一位还没有。他们面对的未来可能性可以相同，但此刻能据以决定的事项不同。数学上，我们因此既要描述未来结果，也要描述每一时点已经能够区分哪些结果。

<span id="qt07-information"></span>

## 二、用信息分组把“此刻知道什么”写清楚

先用一个完整但很小的模型。设 $\Omega=\{u+,u-,d+,d-\}$。字母表示第一阶段已经观察到的信号，正负号表示下一阶段才揭晓的价格变化。此时能区分的两组是 $C_u=\{u+,u-\}$ 和 $C_d=\{d+,d-\}$。看见 $u$ 以后，我们知道结果属于 $C_u$，却不知道它是 $u+$ 还是 $u-$。

相应信息由 $\mathcal F_1=\{\varnothing,C_u,C_d,\Omega\}$ 表示；第二阶段结果完全揭晓后，信息变成 $\mathcal F_2=2^\Omega$。这里的 $\sigma$-代数不是装饰：它精确列出此时可以判断真假的事件。MIT Lecture 1 §4.1 用有限观察说明这一解释，Lecture 25 的 Background 接着引入随时间增长的信息。[^mit-info][^mit-filtration]

**定义（滤过与适应）。** 在概率空间 $(\Omega,\mathcal F,\mathbb P)$ 上，满足 $\mathcal F_s\subseteq\mathcal F_t\subseteq\mathcal F$（$s\le t$）的一族子 $\sigma$-代数 $(\mathcal F_t)$ 称为滤过。若过程 $X$ 的每个 $X_t$ 都是 $\mathcal F_t$-可测的，则称 $X$ 关于该滤过适应。

这个递增条件表示我们保留已经收到的记录。后来出现更正时，新记录可以否定旧说法，却不会抹去“此前曾公布过旧值”这件事。因此信息增长与数据值被修订并不矛盾。

现在我们能证明一个真正可以拿来审查规则的判据。

**命题（有限信息分组与决策）。** 设有限集 $\Omega$ 被非空集合 $C_1,\ldots,C_m$ 分割，$\mathcal G=\sigma(C_1,\ldots,C_m)$。函数 $h\colon\Omega\to\mathbb R$ 为 $\mathcal G$-可测，当且仅当它在每个 $C_j$ 内为常数。

**证明。** 先把这里唯一需要的集合论事实写完整。由于 $C_1,\ldots,C_m$ 是有限分割，所有这些分组的并组成一个 $\sigma$-代数；它包含每个 $C_j$。反过来，$\sigma(C_1,\ldots,C_m)$ 必须包含每个 $C_j$ 以及它们的任意有限并。因此
$$
\mathcal G=\sigma(C_1,\ldots,C_m)
=\left\{\bigcup_{j\in J}C_j:J\subseteq\{1,\ldots,m\}\right\}.
$$
若 $h$ 在每组内为常数，那么任意 Borel 集 $B$ 的原像 $h^{-1}(B)$ 都是若干整组的并，故属于 $\mathcal G$，所以 $h$ 可测。反过来，若同组中存在 $\omega,\omega'$，使 $h(\omega)<h(\omega')$，取严格介于两值之间的 $c$。事件 $\{h\le c\}$ 包含该组中的一个点却不包含另一个点，不是若干整组的并，因而不属于 $\mathcal G$，与 $h$ 的可测性矛盾。证毕。

可测性在这里检查的是：**面对完全相同的已知信息，规则是否给出相同决定。** 这个判据不需要先计算条件期望，也不需要为四个情景指定概率。

| 完整情景 | 此刻已知信号 | 之后价格变化（美元/股） | 规则甲持仓（股） | 规则乙持仓（股） |
|---|---|---:|---:|---:|
| $u+$ | $u$ | +2 | 2 | 1 |
| $u-$ | $u$ | −2 | 2 | −1 |
| $d+$ | $d$ | +2 | 0 | 1 |
| $d-$ | $d$ | −2 | 0 | −1 |

规则甲在每个已知分组内相同，可以由当前信号决定。规则乙在同组内随尚未揭晓的涨跌改变，因此此时不可实施。若把乙的每一项持仓乘以后来的变化，就会得到每个情景都赚 2 美元的表面结果；那只是事后按答案选择方向。所有表中数值都是教学模型输入，不是实际交易记录。甲合法也不代表甲盈利：其毛损益分别是 `4、−4、0、0` 美元。

<span id="qt07-predictable-holdings"></span>

## 三、适应不等于来得及承担这一期的收益

规定离散时点 $0,1,\ldots,T$，$S_k$ 是时点 $k$ 已经取得的价格记录。我们把 $H_k$ 定义为在区间 $(k-1,k]$ 内保持的股数。这里先采用理想化约定：在 $k-1$ 时点观察并决定后，能够立即按指定价格完成调仓，没有成交延迟。

**定义（离散可预测持仓）。** 若对每个 $k\ge1$，$H_k$ 都是 $\mathcal F_{k-1}$-可测的，则称 $H$ 为离散可预测过程。这里“可预测”指第 $k$ 段使用的系数在这一段结果出现以前已经能够确定，不是指可以预报未来涨跌。Tropp 的公开讲义 Definition 24.1 采用同一离散定义，并直接把它解释成一项下注必须在第 $k$ 局结果揭晓前确定。[^tropp-predictable]

在上述理想化、无分配的区间内，股票价格变化带来的毛增益是

$$
G_n=\sum_{k=1}^{n}H_k(S_k-S_{k-1}).
$$

量纲是“股 × 美元/股 = 美元”。价格变化不是收益率，$H_k$ 也不是无量纲资金权重；若换成权重模型，必须另外给出财富分母。

若令 $H_k=\operatorname{sgn}(S_k-S_{k-1})$，乘积就变成绝对价格变化。这个 $H_k$ 可以在 $k$ 时刻被算出，即关于当前信息适应，但通常不属于上一时点的信息。把“当前已经算出”误当“本期开始前已知”，就是差一个下标的前视错误。

实际成交存在延迟时，不能硬把一天当作一个无法拆开的步骤。至少要分开四个层次：**execution/fill** 是市场上实际成交发生；**fill report received** 是本系统收到成交回报；**booking** 是本地账本把回报写入持仓与现金记录；**settlement** 是合约或市场规则规定的证券与资金交收。决策时可以确定目标 $q^*$，但实际成交数量 $\Delta q$ 在成交前仍可能未知。经济敞口从 execution 发生时就已改变，即使 fill report 稍后才到达；本地“已知持仓”则可能要到收到回报甚至完成 booking 后才更新。事后核账须以 execution 还原敞口，不能用 report 或 booking 的时间倒替成交时间。本篇不模拟 settlement，也不从教学账本推断真实可用现金的交收状态。

这也说明为什么“把信号整体向后移动一行”不总是足够。该行究竟代表发布日、接收日、开盘还是收盘？成交价格和数量是否对应那个事件？只有这些口径固定，移一行才有清楚含义。即使以上全部合法，资金、交易权限和成交条件还可能限制执行；可预测性只是信息条件，不是完整的成交保证。

<span id="qt07-trade-ledger"></span>

## 四、用一笔交易把现金和收益接起来

以下是**完全虚构的执行实验**，不与 GDP 公布日的真实行情绑定。价格单位为美元/股。初始财富全部是现金 1,000 美元，持股 0；不计利息、税和现金分配，不借款、不卖空。完整价格记录为 100，规则在收到记录后决定购买 2 股；随后实际成交 2 股，每股 103，整笔入场费用 1 美元；之后按 105 估值。

先把事件顺序本身写成数据。`E0–E6` 只是教学标签，不是任何交易所的真实延迟：

| 事件 | 发生什么 | 经济上的实际持股 | 本地已记账持股 | 本篇是否给出交收现金 |
|---|---|---:|---:|---|
| E0 observation | 完整价格记录 100 已取得 | 0 | 0 | 不适用 |
| E1 decision | 目标变成买 2 股 | 0 | 0 | 不适用 |
| E2 order submitted | 指令已发出，是否成交仍未知 | 0 | 0 | 不适用 |
| E3 execution/fill | 实际买到 2 股，每股 103 | 2 | 0 | **不模拟** |
| E4 fill report received | 系统收到“2 股 @ 103”的回报 | 2 | 0 | **不模拟** |
| E5 booking | 本地账本把成交写入持仓记录 | 2 | 2 | **不模拟** |
| E6 valuation | 后续按 105 估值 | 2 | 2 | **不模拟** |

这里故意让 report 和 booking 分成两个事件，使层次可见；真实系统可能把它们处理得几乎同时，也可能有其他中间状态。最重要的是：E3 已改变经济敞口，不能等到 E4 或 E5 才把 103 之后的价格变化算给新持仓；另一方面，本地系统在 E3 尚未收到回报时，也不能假装已经知道实际成交数量。

为了核算这笔交易，我们另建一条**经济账本**：在 E3 按实际成交立即确认买入成本和费用。它是事后重建 execution 经济效果的教学约定，不是“已交收/可提取现金”字段。于是
$C^{econ}=1000-2\times103-1=793$ 美元；按成交价 103 标记时，股票价值 206，总值 999；按 105 标记时，股票价值 210，总值 1,003。价格从 100 到 103 的变化发生在持股形成之前，所以这两股不能取得那 6 美元的账面涨幅；103 到 105 的股票增益是 4 美元，扣掉 1 美元入场费，标记损益为 3 美元。settlement 的实际时间与可用现金状态本篇保持“未建模”，绝不把 793 冒充为已完成交收的现金余额。

**命题（单次成交的经济账本恒等式）。** 设 execution 前模型经济现金和股数为 $C^-,q^-$，实际有符号成交量为 $\Delta q$（买入为正），成交价为 $P^{exec}$，费用为 $\kappa\ge0$。若无外部资金流入流出，并采用“成交时确认交易经济效果”的本篇账本约定，则

$$
q^+=q^-+\Delta q,\qquad C^+=C^- -P^{exec}\Delta q-\kappa.
$$

在前后均采用同一个固定标记价 $M$ 时，$V=C+Mq$ 满足

$$
V^+-V^-=(M-P^{exec})\Delta q-\kappa.
$$

**证明。** 把股数和现金更新式代入 $C^++Mq^+-(C^-+Mq^-)$，$C^-$ 与 $Mq^-$ 抵消，剩余 $(M-P^{exec})\Delta q-\kappa$。当 $M=P^{exec}$ 时，变化正好为 $-\kappa$。若标记价与成交价不同，则还存在按标记价计算的执行差额，不能笼统说“每次调仓只损失费用”。证明逐路径成立，不需要独立同分布、正态性或鞅假设。

现在故意把这笔成交改记成 100：现金会显示为 $1000-2\times100-1=799$，后续价值变成 1,009。这个反事实的算术没有错，但按我们的事件设定，100 出现时还没有基于完整记录的订单，更没有该订单的成交证据。它与实际设定的差额 $2(103-100)=6$，正是时钟错配。

再改变一个真实执行中必须面对的输入：假设目标仍为 2 股，却只成交 1 股，费用仍为每笔已发生入场 1 美元。现金变成 896，后续价值为 $896+105=1001$，标记损益 1 美元。不能继续用目标 2 股计算收益。若完全没有成交，本实验不收费用，现金和价值都是 1,000；这是一项明确的费用假设，而不是适用于所有经纪商的规则。

最后，1,003 不是退出所得，更不是“已经交收的现金”。若另假设随后以 105 全部卖出且再付 1 美元退出费用，按同一**经济账本约定**得到退出后经济现金 1,002，已实现净损益 2 美元；部分成交的一股同样退出时为 1,000。这里仍没有模拟卖出交易的 settlement。若要计算收益率，还必须明确分母（例如初始财富、投入资本或其他资金口径）；本页只报告美元价值与美元损益，不把 `2/1000` 或 `2/207` 中任何一个自动命名为“回报率”。

<span id="qt07-training-clock"></span>

<div data-experiment-slot="lab-qt07"></div>

## 五、信息条件也要贯穿训练过程

把交易时钟写对以后，信号本身仍可能含有未来信息。一个模型可能只用昨天的特征发出今天的订单，却用整段历史的均值标准化输入，或用测试期结果挑出参数。此时泄漏发生在模型生成之前，不在最后的下单时点。

FPP3 §5.10 用逐次前移的预测起点组织训练与检验，训练数据在被预测观测之前；其单步与多步示意图提醒我们，预测期限属于实验设定。[^fpp-cv] 本篇只接过这一时间原则，不把其预测误差结果解释成交易收益，也不在这里展开调参和多重检验。

更具体地，设第 $s$ 个训练样本的特征实际就绪时点为 $b_s$，目标标签就绪时点为 $\ell_s$。在时点 $t$ 拟合模型时，样本至少要满足 $b_s\le t$ 且 $\ell_s\le t$；预处理参数、训练选择和版本选择也必须只使用届时允许的信息。若目标是未来五天累计收益，样本起点早于 $t$ 不足以证明标签已经完整出现。这个条件是把前面的信息约束应用到训练数据，不是另一种神秘的“回测技巧”。

历史训练标签有时按“后来公布的最终估计”定义，有时按“首次发布数”定义。两者可以研究不同问题，但必须先选定目标；即使目标定义为最终估计，在历史训练时也不能使用尚未获得的最终标签。后续 QT21 会用完整实验处理这一层。

配套 [交互页](/notebook/labs/qt-a/interactions.html#qt07) 同时保留三种视角：信息分组、正确与错配的成交账本、部分成交。先预判从 2 股改到 1 股会改变哪些行，再打开结果。无法运行脚本时，本篇的情景表与资金账就是静态等价说明，不需要猜图中的隐藏状态。

<span id="qt07-self-check"></span>

## 六、自检：指出哪一步错了，而不只说“有泄漏”

**题一：解释与证明。** 表中规则乙在第二阶段结束后已经知道所有持仓数字。为什么这不能说明它可用于赚取第二阶段的价格变化？用分组判据回答。

**解析。** 第二阶段结束后的可测性只对应 $\mathcal F_2$。要承担从第一阶段到第二阶段的变化，持仓应在 $\mathcal F_1$ 下确定。乙在 $C_u$ 和 $C_d$ 内都取不同值，违反第二节命题，所以不能从第一阶段信息生成该持仓。把记录事后补齐不等于事前有这项信息。

**题二：迁移计算。** 初始现金 1,000；目标买 2 股，但只在 104 成交 1 股，入场费 1；之后按 102 估值。再假设全部按 102 卖出，退出费 1。分别求标记价值和最终现金。

**解析。** 成交后现金 $1000-104-1=895$，实际持股 1；标记价值 $895+102=997$，标记损益 −3。卖出后现金 $895+102-1=996$，最终净损益 −4。目标数量 2 不进入实际资金账；102 的标记本身也没有使持股变成现金。

**题三：信息时间迁移。** 一条发布记录 08:30:00 公开，假设系统 08:30:05 才收到，08:30:06 完成计算。08:30:03 的决定能否用它？08:30:05 的决定呢？

**解析。** 08:30:03 只有来源公开，系统尚未收到，不能用。08:30:05 收到原始信息并不代表该计算结果已经生成；若决定依赖计算结果，还要等到 08:30:06 及明确的事件顺序。五秒与一秒都是题目假设，不是 BEA 或 ALFRED 的延迟测量。数学可测性只说明结果是已有信息的函数，不保证计算已经完成；计算耗时是执行层的额外约束，应与信息条件分别记录。

读到这里，我们能检查信号使用了什么信息、持仓何时形成，以及损益是否由同一笔实际成交产生。要进一步问“给定当前信息，未来平均结果是多少”，才进入 QT11 的条件期望；该问题不需要倒过来成为本篇的先修。

[^mit-info]: MIT 6.436J/15.085J，Fall 2018，Lecture 1，[Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf)，§4.1，印刷 pp.6–7（重点 p.7），有限观察者与信息的例子。有限分组决策判据的证明由本文给出。
[^mit-filtration]: MIT 6.436/15.085，Lecture 25，讲授 Yury Polyanskiy、课堂参与者记录，[Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf)，§0 Background，pp.1–2；本篇采用 p.2 的滤过与适应，不采用 p.1 条件期望简写作本篇先修。
[^tropp-predictable]: Joel A. Tropp，*Probability Theory & Computational Mathematics*，CMS/ACM 117, Caltech, Fall 2024，typeset 2025-01-23，[Lecture 24 §24.1.1, Definition 24.1](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf)，printed p.348（PDF page 363）。本次复审实际查看该页；只采用 previsible/predictable process 的离散定义及“必须在本局结果揭晓前决定”的解释，不采用后续 martingale transform 定理。
[^fpp-cv]: Rob J Hyndman、George Athanasopoulos，[FPP3 §5.10：Time series cross-validation](https://otexts.com/fpp3/tscv.html)，本次读取 2026-09-21，全节。支持逐次前移预测起点及预测期限；本文未运行原书代码，也没有报告其数值为自己的复现。
[^bea-adv]: U.S. BEA，[2020Q2 Advance Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update)，2020-07-30，页首 08:30 EDT 与开篇 −32.9%。
[^bea-second]: U.S. BEA，[2020Q2 Second Estimate](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter)，2020-08-27，页首 08:30 EDT、开篇及 Updates to GDP。
[^alfred]: Federal Reserve Bank of St. Louis，[ALFRED Help](https://alfred.stlouisfed.org/help)，定位数据更新、Release Dates 及日期确定顺序。本次读取 2026-09-21；不能支持实际系统的逐秒延迟。


## Additional teaching material
## 计算输入与默认输出

全部价格、费用、数量和事件标签为教学设定。`experiments.json` 的 `ledger` 与 `information` 是同源输入；`engine.js` 给出所用计算。没有接入券商、逐笔数据或个人账户。

```json
{
  "experiment_id": "EXP-CLOCK-01",
  "initial_cash_usd": 1000,
  "initial_shares": 0,
  "target_buy_shares": 2,
  "observed_close_usd": 100,
  "actual_filled_shares": 2,
  "execution_price_usd": 103,
  "entry_fee_usd_if_filled": 1,
  "mark_price_usd": 105,
  "exit_price_usd_if_selected": 105,
  "exit_fee_usd_if_position": 1,
  "cash_after_entry": 793,
  "value_at_execution_mark": 999,
  "marked_value": 1003,
  "marked_pnl": 3,
  "cash_after_hypothetical_exit": 1002,
  "realized_pnl_if_exited": 2,
  "wrong_clock_marked_value": 1009,
  "partial_fill_one_share_marked_value": 1001,
  "execution_event": "E3",
  "fill_report_received_event": "E4",
  "booking_event": "E5",
  "settlement_event": null,
  "settlement_status": "not_modelled"
}
```

```text
entry_fee = filled_shares > 0 ? entry_fee_if_filled : 0
cash_after = initial_cash - filled_shares * execution_price - entry_fee
marked_value = cash_after + filled_shares * mark_price
marked_pnl = marked_value - initial_cash
exit_cash = cash_after + filled_shares * exit_price - (filled_shares > 0 ? exit_fee_if_position : 0)
fixed_mark_trade_value_change = (fixed_mark - execution_price) * delta_shares - entry_fee
```

界面当前只开放 0、1、2 股的非负整数成交，成交不得超过目标数量，也不得使现金为负。模型禁止借款，资金不足时必须拒绝输入，不自动缩小成交量。通用恒等式允许有符号成交，但卖空与融资不是本演示功能。

## 交互与静态替代

`#qt07` 的规则选择显示四情景下持仓、毛增益及是否在信息组内常数。价格变化固定为 `[2,-2,2,-2]`，规则甲 `[2,2,0,0]`，规则乙 `[1,-1,1,-1]`，合法性分别为真、假。显示“非法”的依据是同组分裂，不是亏损大小。

账本面板可调整成交价、实际成交股数和后续标记价；错误时钟结果始终另列为不可执行对照，不混入正确结果。界面时间线固定把 execution、fill report、booking、valuation 四个事件分开，并把 settlement 显示为“未建模”；经济账本结果也明确不是 settled cash。界面提供“假设按标记价退出”的单独经济账本结果，保留退出费用。静态表包括默认 2 股、部分成交 1 股、零成交和错配结果。输入非法时停止计算并显示原因；键盘标签、表头单位、打印和无脚本说明均保留。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-CLOCK-01",
    "title": "信息、实际成交与资金账",
    "anchor": "qt07-trade-ledger",
    "description": "全部价格、费用、数量和事件标签为教学设定。",
    "inputs": {
      "ledger": {
        "experiment_id": "EXP-CLOCK-01",
        "status": "entirely_fictional",
        "initial_cash": 1000,
        "target_shares": 2,
        "filled_shares": 2,
        "execution_price": 103,
        "entry_fee_if_filled": 1,
        "mark_price": 105,
        "exit_fee_if_position": 1,
        "wrong_clock_price": 100,
        "borrowing": false,
        "short_sales": false,
        "interest": 0,
        "tax": 0,
        "distributions": 0,
        "exit_price": 105,
        "timeline": {
          "status": "teaching_event_order_not_exchange_rule",
          "observation": "E0",
          "decision": "E1",
          "order_submitted": "E2",
          "execution": "E3",
          "fill_report_received": "E4",
          "booked": "E5",
          "valuation": "E6",
          "settlement": null,
          "settlement_status": "not_modelled",
          "economic_cash_convention": "recognize execution economics at E3 for ex-post teaching ledger; not settled or withdrawable cash"
        }
      },
      "information": {
        "status": "finite_teaching_model",
        "states": [
          "u+",
          "u-",
          "d+",
          "d-"
        ],
        "groups": [
          "u",
          "u",
          "d",
          "d"
        ],
        "price_changes": [
          2,
          -2,
          2,
          -2
        ],
        "rule_A": [
          2,
          2,
          0,
          0
        ],
        "rule_B": [
          1,
          -1,
          1,
          -1
        ]
      }
    },
    "outputs": {
      "ledger": {
        "cash_after_entry": 793,
        "actual_shares": 2,
        "value_at_execution_mark": 999,
        "marked_value": 1003,
        "marked_pnl": 3,
        "cash_after_exit": 1002,
        "realized_pnl_if_exited": 2
      }
    },
    "outputs_origin": "QT-A review-v2 local Node verification (2026-09-20T18:18:09.193Z; 34/34); independent default recomputation matched",
    "url": "/notebook/labs/qt-a/interactions.html#qt07"
  },
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
- [Gross Domestic Product, 2nd Quarter 2020 (Advance Estimate) and Annual Update](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-advance-estimate-and-annual-update): BEA 在2020年7月30日发布的美国第二季度实际GDP初值为环比折年下降32.9%。它记录当时发布的估计版本；后来的修订值不能倒填成当时已知的数据。
- [Gross Domestic Product, 2nd Quarter 2020 (Second Estimate); Corporate Profits, 2nd Quarter 2020 (Preliminary Estimate)](https://www.bea.gov/news/2020/gross-domestic-product-2nd-quarter-2020-second-estimate-corporate-profits-2nd-quarter): BEA 在2020年8月27日把第二季度实际GDP环比折年下降幅度修订为31.7%，并对照初值32.9%。观察期相同，发布时间和估计版本不同。
- [ALFRED Help](https://alfred.stlouisfed.org/help): ALFRED 保留经济数据的历史版本，使使用者能查找某个日期当时可得的数值。来源发布日期与具体系统收到数据的时刻仍是不同字段。
- [Probability Theory & Computational Mathematics — Lecture 24 §24.1.1](https://tropp.caltech.edu/notes/Tro24-Probability-Theory-LN.pdf): 离散可预测过程的第k期取值须为 F(k−1) 可测：这期承担的头寸，需要由进入这一期之前的信息决定。该条件解释决策的信息时点；实际成交和交收仍要另行记录。
- [Lecture 1: Probabilistic Models and Probability Measures](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/c37dc8b61cdf6bde689a627bfa5b4942_MIT6_436JF18_lec01.pdf): 概率模型先指定情景集合、可辨认事件及非负且总量为1的概率测度。事件的并、交与补集描述不同范围；容斥修正的是重复计数，不要求事件独立。
- [Lecture 25: Martingales I](https://ocw.mit.edu/courses/6-436j-fundamentals-of-probability-fall-2018/d734a5f3c245eef581b2937b53d8e6dd_MIT6_436JF18_lec25.pdf): 滤过用随时间增加的事件集合描述已知信息。随机变量在时点t可测，表示它能由当时的信息区分；适应过程要求各期变量满足相应的可测性。
- [Forecasting: Principles and Practice, §5.10 Time series cross-validation](https://otexts.com/fpp3/tscv.html): 时间序列交叉验证以逐步向前的预测起点划分训练与评价：每轮只用该起点之前可得的观测。预测一步与预测多步需要按各自目标设置评价窗口。

本批读取范围：先训练、后评价、逐次推进的样本外结构。

## Content relations
```json
[
  {
    "from": "zh-qt07",
    "relation": "part_of",
    "to": "quant-data-info",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-qt07",
    "relation": "requires",
    "to": "zh-qt01",
    "reason": "先能区分观察期、发布时间与接收时间",
    "required_competence": "按历史截止选择输入并识别未知接收记录"
  },
  {
    "from": "zh-qt07",
    "relation": "illustrated_by",
    "to": "EXP-DATA-VINTAGE-01",
    "reason": "公开与实际接收不是同一时点"
  },
  {
    "from": "zh-qt07",
    "relation": "illustrated_by",
    "to": "EXP-CLOCK-01",
    "reason": "决策、成交与承担价格变化的顺序"
  },
  {
    "from": "zh-qt07",
    "relation": "supported_by",
    "to": "QP01-L01",
    "reason": "有限观察者的信息解释",
    "at_section": "qt07-information",
    "source_at_section": "二",
    "locator": "§§1–4，约 pp.1–7；§5 Definition 3、Proposition 2，约 pp.7–10"
  },
  {
    "from": "zh-qt07",
    "relation": "supported_by",
    "to": "QP01-L25",
    "reason": "滤过、信息生成与适应",
    "at_section": "qt07-information",
    "source_at_section": "二",
    "locator": "§0 Background，pp.1–2；实际采用 p.2 的信息生成、滤过与适应"
  },
  {
    "from": "zh-qt07",
    "relation": "supported_by",
    "to": "QP-TROPP-24.1",
    "reason": "离散可预测过程的 F_{k-1}-可测定义",
    "at_section": "qt07-predictable-holdings",
    "source_at_section": "三",
    "locator": "Definition 24.1 (Previsible process), printed p.348; PDF page 363 (1-based)"
  },
  {
    "from": "zh-qt07",
    "relation": "supported_by",
    "to": "QS02-5.10",
    "reason": "时间尊重的预测验证",
    "at_section": "qt07-training-clock",
    "source_at_section": "五",
    "locator": "§5.10 全节；rolling forecasting origin、单步/多步、Google 2015 代码例"
  },
  {
    "from": "zh-qt07",
    "relation": "supported_by",
    "to": "QD02-ALFRED-HELP",
    "reason": "不能把来源日期替代系统接收日志",
    "at_section": "qt07-event-order",
    "source_at_section": "一",
    "locator": "What is ALFRED / vintage 说明；更新与 Release Dates 的确定方法；数据版本核验及增长率公式"
  }
]
```

## Related entries

## Optional reading path
理解模型并亲手算: step 2/9
证明有限信息条件下的规则合法性，并重算成交与退出现金。
在信息约束下，进一步定义可知的预测，并证明平方误差如何分解。
Next: [条件期望、投影与预测目标](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-expectation-projection/)
