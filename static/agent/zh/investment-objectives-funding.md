# 投资目标、期限与可用资金

从资金用途和支付日出发，形成一份有可行性检查、合理替代和更新条件的投资任务。

Entry: zh-p01 | Node: P01 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教授P01《投资目标、期限与可用资金》，版本2026-09-21。
默认读者会基本代数，不默认读过金融工具课程。不要索取个人账户。

先实际取得并读完：
1. University of California，UCRP Investment Policy Statement：
   https://regents.universityofcalifornia.edu/policies/6101.pdf
   版本2025-07-01生效、2025-07-15修订；§2 p.3、§5–6 pp.7–8。
   读取目的：区分支付负债这一总体目标、风险和表现基准。
2. University of California，STIP Investment Policy Statement：
   https://regents.universityofcalifornia.edu/policies/6109.pdf
   相同生效/修订日期；§2–3 p.3、§5–6 pp.4–5。
   读取目的：短期现金用途怎样约束收益追求。
3. 本篇第二至四节、附录A与本 Agent 包 supplied_inputs中SIM-P01-CASH-01。
   这是教学设定，不是UC资金表。

每项报告实际取得的版本、页/节、完整取得范围和一条支持本课的内容。
若链接变成新版本，先寻找上述固定版。只取得摘要、目录或登录页，不算读完；
仍无法取得时，只说明所缺单元，不把机构事实补写成已核材料。
无需读取UC无关配置条款，也不讲解其法律适用。

完成读取后，用一个任务诊断：
“你有100资产，下个月付30，为什么还不能判断任务可行？”
若读者已识别日期与可用性，直接进入两方案完整现金账。
让读者先解释转让为何减少未来回收、借款为何不是收益，再核对数额。
随后选择折价变化或投资压力这一个迁移任务，要求同时报告付款、最低现金和终点余额。
评价标准：能写出可执行条件，能区分愿望与约束，并知道条件变化影响哪段现金账。
不要以记住政策原句、选择某种资产或给出最高收益率作为理解标准。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-p01",
  "node_id": "P01",
  "export_mode": "public",
  "content_version": "p-a-v2",
  "audience": "有数学背景的高年级本科至研究生",
  "selected_branch": "common + selected branch",
  "learning_task": "从资金用途和支付日出发，形成一份有可行性检查、合理替代和更新条件的投资任务。",
  "body_source": "body_markdown",
  "required_readings": [
    {
      "source_id": "P-R01-UCRP",
      "title": "University of California Retirement Plan Investment Policy Statement",
      "authors": [
        "University of California"
      ],
      "version": {
        "effective": "2025-07-01",
        "amended": "2025-07-15"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://regents.universityofcalifornia.edu/policies/6101.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2 p.3；§5–6 pp.7–8；原页与版本复核",
        "scope": "§2 p.3；§5–6 pp.7–8；原页与版本复核",
        "purpose": "养老金支付、风险和基准的资金用途对照"
      },
      "supports": "养老金支付、风险和基准的资金用途对照",
      "fallback_source_ids": []
    },
    {
      "source_id": "P-R01-STIP",
      "title": "Short Term Investment Pool Investment Policy Statement",
      "authors": [
        "University of California"
      ],
      "version": {
        "effective": "2025-07-01",
        "amended": "2025-07-15"
      },
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://regents.universityofcalifornia.edu/policies/6109.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§2–3 p.3；§5–6 pp.4–5；原页与版本复核",
        "scope": "§2–3 p.3；§5–6 pp.4–5；原页与版本复核",
        "purpose": "短期流动性与本金、收益目标的关系"
      },
      "supports": "短期流动性与本金、收益目标的关系",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "reading_protocol": "1. **确认当前学习范围。** 使用所选分支及本篇正文；先修仅诊断本篇确实需要的内容。识别必读材料，选读材料只有被采用时才转成对应问题的必读。\n2. **实际获取。** 用浏览/文件读取工具打开指定 URL 或随包文件。核对返回的标题/版本/范围，发现只有摘要、登录页、目录或文件清单时如实记录，继续找明确可读的正文入口。\n3. **完整读取所需单元。** 分页或分块读取到所需单元结束，包含前文约定、必要表图和脚注。PDF 符号或图表解析不可靠时查看原页；TeX 读取相关宏定义与 include 文件。不能只看搜索命中的几行。\n4. **形成简短内容对应。** 每项记录实际位置、读到的关键设定和它支持哪一步教学。例如“§5.10 的训练集仅含当前预测点之前的观测；该限制需要落实到预处理拟合，不仅是分割最终数据表”。后半句若为本站推论须标为推论。\n5. **满足后才开始该范围的实质教学。** 所有当前必读单元读完之后，基于材料给一项高密度诊断任务或按读者要求直接讲解。引用跟着对应命题或计算，不在末尾堆书名。\n6. **读取失败时自动处理缺口。** 先尝试指定的可读等价版本或作者/机构正式全文，不新造批准步骤。等价性包括版本、条款期间、定义和假设；新的替代来源实际读完后记录采用范围。仍缺失则说明具体缺少哪一个必读单元及原因，不凭训练记忆补成已读讲解，不宣称已完成本篇。\n\n“读取校验”依赖实际取得的内容及其位置、与教学相关的设定复述；不靠让模型报一句“我已阅读”，不引入无意义哈希或重复下载。它不能从技术上保证理解，但能让来源与使用之间可检查。",
  "supplied_inputs": {
    "SIM-P01-CASH-01": {
      "inputs": {
        "cash0": 20,
        "claim90": 80,
        "pay30": 30,
        "pay120": 25,
        "buffer": 5,
        "reserve365": 25,
        "project_max": 20,
        "project_day": 180,
        "sale_day": 20,
        "borrow_day": 20,
        "haircut": 0.02,
        "loan_apr": 0.06,
        "loan_fee": 0.1,
        "day_basis": 365,
        "same_day_order": "收入后支出",
        "cash_interest": 0
      },
      "default": {
        "need": 15.0,
        "sold_face": 15.306122448979592,
        "sale_cost": 0.3061224489795915,
        "loan_interest": 0.17260273972602738,
        "loan_cost": 0.2726027397260274,
        "cash120_A": 44.69387755102041,
        "cash120_B_conditional": 44.727397260273975,
        "terminal_A": 24.693877551020407,
        "terminal_B_conditional": 24.727397260273975,
        "max_project_A": 19.693877551020407,
        "max_project_B_if_timely": 19.727397260273975,
        "B_on_time": true,
        "q_limit_20pc_project18": 8.469387755102034
      },
      "haircut_5pc": {
        "need": 15.0,
        "sold_face": 15.789473684210527,
        "sale_cost": 0.7894736842105274,
        "loan_interest": 0.17260273972602738,
        "loan_cost": 0.2726027397260274,
        "cash120_A": 44.21052631578947,
        "cash120_B_conditional": 44.727397260273975,
        "terminal_A": 24.210526315789473,
        "terminal_B_conditional": 24.727397260273975,
        "max_project_A": 19.210526315789473,
        "max_project_B_if_timely": 19.727397260273975,
        "B_on_time": true,
        "q_limit_20pc_project18": 6.052631578947363
      },
      "late_loan": {
        "need": 15.0,
        "sold_face": 15.306122448979592,
        "sale_cost": 0.3061224489795915,
        "loan_interest": 0.13561643835616435,
        "loan_cost": 0.23561643835616436,
        "cash120_A": 44.69387755102041,
        "cash120_B_conditional": 44.76438356164383,
        "terminal_A": 24.693877551020407,
        "terminal_B_conditional": 24.764383561643832,
        "max_project_A": 19.693877551020407,
        "max_project_B_if_timely": 19.764383561643832,
        "B_on_time": false,
        "q_limit_20pc_project18": 8.469387755102034
      },
      "stress": {
        "project": 18,
        "loss_fraction": 0.2,
        "q_max": 8.469387755102034,
        "loss_fraction_40pc_q_max": 4.234693877551017
      },
      "author_review_boundaries": {
        "haircut_60pct": {
          "sold_face": 37.5,
          "sale_cost": 22.5,
          "cash120_A": 22.5,
          "project_max_A": null,
          "reason": "取消项目后年末储备仍不足；不显示负项目上限",
          "stress_q_limit": null,
          "stress_reason": "固定项目18后即使q=0也不能满足年末储备"
        },
        "haircut_80pct": {
          "sold_face": 75.00000000000001,
          "sale_cost": 60.000000000000014,
          "cash120_formula_only": -15.000000000000014,
          "payment_gap_day120": 15.0,
          "project_max_A": null,
          "stress_base_ready": false,
          "reason": "第120天必要支付失败；后续压力分支停止"
        },
        "late_loan_day35": {
          "payment_gap_day30": 10.0,
          "project_max_B": null,
          "reason": "资金在第一支付后才到账，B不可执行"
        }
      }
    }
  },
  "runtime_reading_log": []
}
```

## Supplied entry
投资安排不只是在若干资产中挑一个收益最高的。我们还要知道：这笔钱什么时候要用，用来完成什么事情，什么结果不能接受。只有这些问题有了边界，“收益更高”才有明确的比较对象。

本篇先读两份用途不同的真实投资政策，再替一个虚构项目走完资金安排。你不需要提前学习组合优化。我们要完成的是优化之前的工作：把目标和约束写对，发现一个看起来有钱的安排为什么仍可能无法执行。

<a id="CASE-UC-POLICY-2025"></a>
<a id="p01-policy"></a>
## 一、同一个机构，为什么需要两种投资目标

加州大学退休计划 UCRP 与短期投资池 STIP 的政策均标明：2025年7月1日生效、7月15日修订。UCRP 的总体目标围绕养老金支付义务；它讨论的不只是资产收益，还包括资产相对于负债的充足程度。STIP 服务于短期流动性需要，其收益追求受到本金安全、流动性和现金需求的约束。下面把原文中与本篇有关的内容作简短中文摘述，不复制机构的配置比例。[^uc]

| 原件位置 | UCRP：退休计划 | STIP：短期投资池 |
|---|---|---|
| §2，总体目标与收益目标 | 配合筹资安排，提高满足计划负债的可能性 | 保存本金，服务短期现金需求，并取得与其约束相容的收益 |
| §5，风险管理 | 把缴款、福利支付与投资表现一起放进资金充足状况 | 对信用、期限及流动性设置约束 |
| §6，评价基准 | 与所承担任务和配置相匹配的基准 | 与短期资金用途相匹配的基准 |

现在假设有一项安排，三年后可能回报很好，但下个月很难变现。对于没有近期支出的长期资金，它可能值得进一步研究；对于下个月必须付款的资金，仅有“三年后表现不错”还没有回答问题。这不是给两类资金规定永远不变的资产标签，而是提醒我们：**同一资产是否适合，取决于它进入的是哪一份任务。**

基准也有两层。第一层是“事情办成没有”：养老金能否支付，项目能否如期付款。第二层才是“在同样可行的安排中，结果怎样”：相对于同期限、同币种、同约束的替代方案，收益和成本如何。跑赢一个不适合这笔资金的指数，不会自动补上付款缺口。

<a id="p01-task"></a>
## 二、把目标写成一份能检查的任务

一份任务至少要确定投资对象、起止日期、支付义务、可用资源和评价方式。这里最容易混淆的是愿望与能力。“我不介意价格暂时跌20%”表达了态度；“价格跌20%后仍能付清下个月的款项”才涉及资金能力。这两句话需要分别验证。

我们为一个**完全虚构的项目资金池**建立任务。以下金额单位均为“万元”，第0天是规划起点，不对应真实交易日；回收、转让及借款条件均为教学设定。

| 事项 | 金额与日期 | 任务中的身份 |
|---|---|---|
| 现有现金 | 第0天20 | 当下可动用 |
| 一项到期债权 | 第90天收回80；此前不能按面值提款 | 资产，不是第30天的现金 |
| 第一笔必要支付 | 第30天30 | 不可延期 |
| 第二笔必要支付 | 第120天25 | 不可延期 |
| 可选项目 | 第180天，最多投入20 | 可以缩减或取消 |
| 最低现金余额 | 所有事件处理后至少5 | 日常资金约束 |
| 年末保留资金 | 第365天至少25 | 终点约束 |

任务不是“用100赚到尽可能多”。更准确的表述是：在所有必要支付日及时付款，保持现金余额至少5，年末保留至少25；在这些条件成立时，再决定第180天能做多大的可选项目。这里不靠未知投资收益填补必要支付。

先检查原安排。第30天只有20现金，却要付30，所以付款本身缺10；若还要留下5，补足资金的需求就是15。第90天收回80不能抹掉第30天的违约。另一方面，全年两笔必要支付加满额可选项目一共75，100减75刚好25，因此原预算甚至没有给融资或变现成本留出余量。

这两个缺口不同：一个是**钱到得太晚**，一个是**最终预算没有容纳成本**。只解决前一个，任务仍未必完成。

<a id="p01-cash-path"></a>
## 三、先走现金路径，再比较合理替代

我们考虑两种明确给定的替代。方案A是在第20天转让一部分到期债权，价格为所转让面值的98%。方案B是在第20天取得已落实的过桥借款，第90天偿还；年单利6%，按实际70天除以365计息，另付费用0.1。借款费用在第90天支付，现金不计利息。

**方案A：把未来款项提前变成现金。** 令转让面值为 $x$。为了在第30天支付后还剩5，需要
$$
20+0.98x-30\geq5.
$$
最小转让面值为 $x=15/0.98=15.30612245$。收到现金15，但放弃了未来15.30612245，转让成本为0.30612245。这个成本不只是一个“费率标签”：它会减少第90天剩余可收回的款项。

**方案B：借款跨过支付日。** 借款本金需要15，第90天的利息为 $15\times0.06\times70/365=0.17260274$；连同费用，总成本为0.27260274，偿还额为15.27260274。借到15会增加现金，但也增加一笔必须偿还的负债，不能把15记成投资收益。

把两种安排放进同一张账，比单看2%的转让折价或6%的年利率有意义得多：

| 事件后现金余额，万元 | 方案A：转让债权 | 方案B：过桥借款 |
|---|---:|---:|
| 第0天 | 20.00000000 | 20.00000000 |
| 第20天取得资金 | 35.00000000 | 35.00000000 |
| 第30天支付30 | 5.00000000 | 5.00000000 |
| 第90天回收；B同时还本付息及费用 | 69.69387755 | 69.72739726 |
| 第120天支付25 | 44.69387755 | 44.72739726 |
| 第180天若投入满额20 | 24.69387755 | 24.72739726 |
| 第365天，无其他收支 | 24.69387755 | 24.72739726 |

两种方案都解决了近期付款和最低现金问题，却都未满足年末25的要求。若可选项目允许连续调整金额，则其上限分别为19.69387755和19.72739726。钱不是凭空少了，差额就是提前取得流动性的成本。

在给定条件全部成立时，B的总成本比A低约0.03351971。但这还不等于现实中应当选择B。我们还要核实借款是否真正落实、到账是否赶得上、是否存在附加条件。假设B的到账时间改到第35天，原本更低的成本便无助于第30天付款；不能先在账上借入，再把到账日期当成无关细节。反过来，A只有在转让安排真实存在且能在第20天完成时才可用。

对于第90天，我们还明确采用“回收款先到账，随后还款”的顺序。若还款必须在上午、回收款下午才到，同一天也会有日内缺口。把表的日期填齐只是起点，支付顺序仍然属于安排的一部分。

还有一个容易被界面掩盖的边界：如果某种融资条件已经贵到**即使把可选项目降到0，必要支付、最低现金或年末25的储备仍有一项做不到**，那么“项目上限”不是一个负数，而是“没有可行项目金额”。这时也不应继续给后面的风险投资分配一个看似精确的上界；必须先恢复基础资金任务的可行性。负的预算数值在这里是失效信号，不是可以执行的头寸。

<a id="p01-risk-budget"></a>
## 四、钱已经到账，也不等于可以全部承担损失

继续采用方案A，并把第180天可选项目压到18。第120天现金为44.69387755。看上去有不少钱暂时闲着，但其中18要在第180天支出，25要在第365天留下。真正可以吸收损失的余量只有
$44.69387755-18-25=1.69387755$。

假设现在研究一种教学资产：第120天投入 $q$，第365天才能变现；为了检验任务，我们指定一个到期损失20%的压力状态，不给它配置概率。现金不计利息。

第180天付款后还要有5现金，所以 $44.69387755-q-18\geq5$，得到 $q\leq21.69387755$。而在压力状态中，年末总资金为
$$
(44.69387755-q-18)+0.8q
=26.69387755-0.2q.
$$
要留下25，必须有 $q\leq8.46938776$。这次先约束我们的不是近期现金，而是年末在压力下的资金底线。

这个8.46938776是**在指定20%损失压力下的金额上界**，不是资产的安全额度。若损失达到40%，相同余量只能支持约4.23469388的投入；若损失可能更大，还要继续重算。我们尚未论证这项资产值得买，也没有证明20%是充分的压力边界。这里完成的任务只是把一种风险结果接回最初的资金用途，而不是用风险标签替代它。

因此，“可用资金”至少包含两个问题：什么时候可以把钱调出来，以及调出来之后可以承担多少损失。它们可能给出完全不同的数额。

<div data-experiment-slot="lab-p01"></div>

<a id="p01-decision"></a>
## 五、把判断留成一份可以更新的记录

现在我们已经能写出一份完整决定：采用哪种取得现金的方式、支付哪些必要款项、可选项目最多做到多少、哪些压力会使任务失败，以及失败时先调整哪一项。

例如采用A、可选项目18时，任务记录还应保留转让折价2%、第20天收到款、第90天余款到账、年末底线25这些条件。以后有新信息，就能定位到应重算的关系：转让价格变差影响最终余量；回收日期推迟影响某个支付窗口；项目金额增加挤压损失承受能力。不能只留下“低风险”三个字，等条件改变后仍沿用旧结论。

评价替代方案也沿同一任务进行。这里的基准可以是“不投资有风险资产、按A完成支付和可选项目”的完整现金安排。它虽没有假设高收益，却是可复算的资本用途。若另一方案靠延迟支付、借入更多资金或减少年末储备取得较高回报，应当把这些变化一并说明，而不是只比较最后一个百分比。

下一篇会讨论怎样计算回报。你可以沿推荐顺序继续，也可以直接进入回报计算；这份资金任务不是计算收益率所必需的整篇先修。

<a id="p01-exercises"></a>
## 六、练习与完整解析

### 练习一：为什么“长期资金”仍然有近期约束？

有人读完 UCRP 与 STIP 的目标，认为前者只需关注长期收益，不需要关注近期付款。请指出问题，并说明本篇虚构项目中第90天的80为何不能消除第30天的缺口。

**解析。** 长期目标不意味着所有支出都在远期。UCRP的政策把支付义务和筹资安排纳入整体目标；具体支付时点仍需资金安排支持。[^uc] 在虚构项目中，80的到期日是第90天，而第一笔款第30天到期。它可以支持未来偿付能力，却只有通过实际可用的转让或融资安排，才能支持第30天的支付。把二者直接相加，相当于偷偷假定了无成本、无时延的变现。

### 练习二：融资更贵时，修改哪一部分任务？

把A的转让折价从2%改为5%，其余不变。求最小转让面值、总成本和可选项目上限。若项目金额不能低于19.5，原任务还可行吗？

**解析。** 每转让1面值只收到0.95，故面值为 $15/0.95=15.78947368$；成本为0.78947368。第120天剩 $100-30-25-0.78947368=44.21052632$，所以年末要留25时，可选项目上限为19.21052632。19.5超过上限0.28947368，原任务不可行。可以重新比较已落实的融资、缩减项目或取得确定追加资金；不能把尚未取得的投资收益直接补进账中。

### 练习三：有收益目标，却没有损失余量

采用A的2%折价，并把可选项目做到其上限19.69387755。还有多少余量可以承受其他投资损失？若仍想开展有风险投资，需要修改什么？

**解析。** 支付必要款、可选项目及保留年末25之后，余量为零。任何未被其他确定收入抵消的投资损失都会破坏这个年末条件。要改变这一点，需要减少可选支出、增加确定资金、调整年末目标，或重新安排有明确保障的资金来源。这是任务条件的修改，不是换一个“低波动”名称就能解决的。

[^uc]: `P-R01-UCRP`与`P-R01-STIP`。University of California，两份Investment Policy Statement，2025-07-01生效、2025-07-15修订；本轮复核2026-09-21。[UCRP原件](https://regents.universityofcalifornia.edu/policies/6101.pdf#page=3)：§2 p.3，§5–6 pp.7–8；[STIP原件](https://regents.universityofcalifornia.edu/policies/6109.pdf#page=3)：§2–3 p.3，§5–6 pp.4–5。这里采用资金用途、目标和约束的对照，机构条款不转化为读者的统一配置要求。


## Additional teaching material
## 附录A｜精确交互与静态等价

交互ID：`SIM-P01-CASH-01`。所有数字为教学输入。静态等价是正文第三节现金表、第四节两个不等式及练习二的对照；不开启JavaScript仍可完成本篇。

HTML建议使用原生数字输入、方案选择器和按事件排列的余额表。输入：`cash0=20`、`claim=80`、`pay30=30`、`pay120=25`、`buffer=5`、`reserve365=25`、`project=20`、`haircut=0.02`、`loan_apr=0.06`、`loan_fee=0.1`、资金到账日20、债权回收/借款到期日90。费用和贷款利率只属于教学合同。日期按事件日处理，同日先收入后支出；日内顺序可作为文字扩展，不暗中推断真实清算规则。

```text
need = max(0, pay30 + buffer - cash0)
sold_face = need / (1 - haircut)
sale_cost = sold_face * haircut
loan_principal = need
loan_interest = loan_principal * loan_apr * (90 - funding_day) / 365
loan_cost = loan_interest + loan_fee
cash120_A = cash0 + claim - pay30 - pay120 - sale_cost
cash120_B = cash0 + claim - pay30 - pay120 - loan_cost
raw_max_project = min(20, cash120 - reserve365, cash120 - buffer)
if 必要付款在第120天前失败 or raw_max_project < 0:
    max_project = NO_FEASIBLE_AMOUNT
else:
    max_project = raw_max_project
terminal = cash120 - project
```

若`need=0`则不借款、不收借款费。若取消项目后仍不能完成基础任务，显示“即使项目=0仍不满足任务”，不得把负的`raw_max_project`当作可执行金额，也不得静默截成零后显示可行。转让面值不得超过80，折价须在`[0,1)`，金额非负。到账日晚于第一支付日时，表在第30天标出缺口，之后的数值最多是“任务失效后的条件续算”，不能显示为已经完成的账。

压力分支固定采用A和`project=18`。只有A至少走到第120天并满足此前必要支付与最低现金，才进入这个分支；否则后续压力数字停止。进入后输入损失率`d=0.20`、拟投入`q`，计算`cash180=cash120_A-q-18`、`terminal_stress=cash120_A-18-d*q`；检验`cash180>=5`和`terminal_stress>=25`。如果连`q=0`都不能满足固定项目18与年末储备，显示“无可行q”，而不是给负的上界。不得把`d`解释成概率。

图的横轴为事件日，纵轴为现金余额；同图标出5和25的不同适用范围。图下永久保留逐事件数据、条件及首个失效日。支持键盘、数值标签、打印；移动端不依赖悬停。

## Experiment inputs and static equivalents
```json
[
  {
    "id": "SIM-P01-CASH-01",
    "title": "资金日期与可行安排",
    "anchor": "p01-cash-path",
    "description": "明确标注的教学参数及复算结果，与固定披露身份分开。",
    "inputs": {
      "cash0": 20,
      "claim90": 80,
      "pay30": 30,
      "pay120": 25,
      "buffer": 5,
      "reserve365": 25,
      "project_max": 20,
      "project_day": 180,
      "sale_day": 20,
      "borrow_day": 20,
      "haircut": 0.02,
      "loan_apr": 0.06,
      "loan_fee": 0.1,
      "day_basis": 365,
      "same_day_order": "收入后支出",
      "cash_interest": 0
    },
    "outputs": {
      "default": {
        "need": 15.0,
        "sold_face": 15.306122448979592,
        "sale_cost": 0.3061224489795915,
        "loan_interest": 0.17260273972602738,
        "loan_cost": 0.2726027397260274,
        "cash120_A": 44.69387755102041,
        "cash120_B_conditional": 44.727397260273975,
        "terminal_A": 24.693877551020407,
        "terminal_B_conditional": 24.727397260273975,
        "max_project_A": 19.693877551020407,
        "max_project_B_if_timely": 19.727397260273975,
        "B_on_time": true,
        "q_limit_20pc_project18": 8.469387755102034
      },
      "haircut_5pc": {
        "need": 15.0,
        "sold_face": 15.789473684210527,
        "sale_cost": 0.7894736842105274,
        "loan_interest": 0.17260273972602738,
        "loan_cost": 0.2726027397260274,
        "cash120_A": 44.21052631578947,
        "cash120_B_conditional": 44.727397260273975,
        "terminal_A": 24.210526315789473,
        "terminal_B_conditional": 24.727397260273975,
        "max_project_A": 19.210526315789473,
        "max_project_B_if_timely": 19.727397260273975,
        "B_on_time": true,
        "q_limit_20pc_project18": 6.052631578947363
      },
      "late_loan": {
        "need": 15.0,
        "sold_face": 15.306122448979592,
        "sale_cost": 0.3061224489795915,
        "loan_interest": 0.13561643835616435,
        "loan_cost": 0.23561643835616436,
        "cash120_A": 44.69387755102041,
        "cash120_B_conditional": 44.76438356164383,
        "terminal_A": 24.693877551020407,
        "terminal_B_conditional": 24.764383561643832,
        "max_project_A": 19.693877551020407,
        "max_project_B_if_timely": 19.764383561643832,
        "B_on_time": false,
        "q_limit_20pc_project18": 8.469387755102034
      },
      "stress": {
        "project": 18,
        "loss_fraction": 0.2,
        "q_max": 8.469387755102034,
        "loss_fraction_40pc_q_max": 4.234693877551017
      },
      "author_review_boundaries": {
        "haircut_60pct": {
          "sold_face": 37.5,
          "sale_cost": 22.5,
          "cash120_A": 22.5,
          "project_max_A": null,
          "reason": "取消项目后年末储备仍不足；不显示负项目上限",
          "stress_q_limit": null,
          "stress_reason": "固定项目18后即使q=0也不能满足年末储备"
        },
        "haircut_80pct": {
          "sold_face": 75.00000000000001,
          "sale_cost": 60.000000000000014,
          "cash120_formula_only": -15.000000000000014,
          "payment_gap_day120": 15.0,
          "project_max_A": null,
          "stress_base_ready": false,
          "reason": "第120天必要支付失败；后续压力分支停止"
        },
        "late_loan_day35": {
          "payment_gap_day30": 10.0,
          "project_max_B": null,
          "reason": "资金在第一支付后才到账，B不可执行"
        }
      }
    }
  }
]
```

## Sources
- [Short Term Investment Pool Investment Policy Statement](https://regents.universityofcalifornia.edu/policies/6109.pdf): 短期流动性与本金、收益目标的关系
- [University of California Retirement Plan Investment Policy Statement](https://regents.universityofcalifornia.edu/policies/6101.pdf): 养老金支付、风险和基准的资金用途对照

## Content relations
```json
[
  {
    "from": "zh-p01",
    "relation": "part_of",
    "to": "portfolio-objectives",
    "reason": "主要 topic 归属"
  },
  {
    "from": "p01-policy",
    "relation": "illustrated_by",
    "to": "CASE-UC-POLICY-2025",
    "reason": "对照同一机构不同资金用途",
    "scope": "2025-07-01生效、2025-07-15修订"
  },
  {
    "from": "p01-policy",
    "relation": "supported_by",
    "to": "P-R01-UCRP",
    "reason": "退休支付目标、风险与基准",
    "scope": "§2 p.3；§5–6 pp.7–8"
  },
  {
    "from": "p01-policy",
    "relation": "supported_by",
    "to": "P-R01-STIP",
    "reason": "短期流动性、本金目标与约束",
    "scope": "§2–3 p.3；§5–6 pp.4–5"
  },
  {
    "from": "p01-cash-path",
    "relation": "illustrated_by",
    "to": "SIM-P01-CASH-01",
    "reason": "完整比较转让与过桥借款的日期现金"
  }
]
```

## Related entries

## Optional reading path
做一次投资或对冲安排: step 1/9
从支付用途和日期判断哪些资金可用于投资。
有了资金任务，接着定义怎样计算投入和所得。
Next: [持有期回报与资金基数](https://ou-liu-red-sugar.github.io/zh/notebook/holding-period-returns/)
