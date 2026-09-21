# 发行、交易与市场参与者

追踪发行与转让中的现金和权利，区分交易对手、服务机构和持有记录.

Entry: zh-m02 | Node: M02 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M02，版本2026-09-21-review-v2. 先实际读取上表及本篇脚注给出的URL，
保留源版本、实际读取单元和支持任务的内容. 不要把IPO封面基准数量
说成最终完成数量，不要给99.80教学价格补一个虚假的行情时间戳.

读完以后，让我用三列（甲、乙、发行人）重建国库券发行/转售/到期的现金，
再画相反方向的权利变化. 不先给三列答案；若我把到期钱同时分给甲乙，
提示我检查转让后的权利持有人.
然后让我从Reddit招股书封面解释748,000,000为何不是公司净融资，
要求把出售股东、佣金及其他费用逐项分开；随后切换8-K/A完成记录，让我说明为什么18,576,527股与631,601,918美元不能倒灌回招股书基准表.
最后切换TreasuryDirect持有渠道，问我哪一步不再可达；
再用发行人名义登记—DTC参与人—券商客户明细图检验“钱给谁、谁记录什么”.
参与者名称可就地解释，不做机构缩写背诵考试.
以正确画出资金、权利和记录三种关系为通过标准；完整解析取自本篇，
读取失败时先处理材料缺口，不凭常识填具体渠道规则.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-m02",
  "node_id": "M02",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "full_entry",
  "body_source": "body_markdown",
  "learning_task": "追踪发行与转让中的现金和权利，区分交易对手、服务机构和持有记录.",
  "prompt": "你在教M02，版本2026-09-21-review-v2. 先实际读取上表及本篇脚注给出的URL，\n保留源版本、实际读取单元和支持任务的内容. 不要把IPO封面基准数量\n说成最终完成数量，不要给99.80教学价格补一个虚假的行情时间戳.\n\n读完以后，让我用三列（甲、乙、发行人）重建国库券发行/转售/到期的现金，\n再画相反方向的权利变化. 不先给三列答案；若我把到期钱同时分给甲乙，\n提示我检查转让后的权利持有人.\n然后让我从Reddit招股书封面解释748,000,000为何不是公司净融资，\n要求把出售股东、佣金及其他费用逐项分开；随后切换8-K/A完成记录，让我说明为什么18,576,527股与631,601,918美元不能倒灌回招股书基准表.\n最后切换TreasuryDirect持有渠道，问我哪一步不再可达；\n再用发行人名义登记—DTC参与人—券商客户明细图检验“钱给谁、谁记录什么”.\n参与者名称可就地解释，不做机构缩写背诵考试.\n以正确画出资金、权利和记录三种关系为通过标准；完整解析取自本篇，\n读取失败时先处理材料缺口，不凭常识填具体渠道规则.",
  "required_readings": [
    {
      "source_id": "MA-OS17",
      "title": "Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital",
      "authors": [
        "Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax"
      ],
      "version": "第3版，2022-12-14；在线单元于2026-09-21取得",
      "access": {
        "kind": "html_full_text",
        "uri": "https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "§17.1 全节",
        "scope": "融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.",
        "purpose": "发行与转售的经济关系"
      },
      "supports": "融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.",
      "limits": "融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-MIT-EQ",
      "title": "15.401 Finance Theory I — Lecture 7: Equities",
      "authors": [
        "Andrew W. Lo / MIT OpenCourseWare"
      ],
      "version": "Fall 2008；文件版权2007–2008",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/1aea40b063cad5a335e980ecf30d84b7_MIT15_401F08_lec07.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "slides 3–4",
        "scope": "普通股、发行与二级转售的结构；不采用后续股票估值单元.",
        "purpose": "股权发行与二级转售的结构"
      },
      "supports": "普通股、发行与二级转售的结构；不采用后续股票估值单元.",
      "limits": "普通股、发行与二级转售的结构；不采用后续股票估值单元.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-TB-AUC",
      "title": "Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1",
      "authors": [
        "U.S. Department of the Treasury"
      ],
      "version": "2025-09-18公告；发行2025-09-23；到期2025-10-21",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "拍卖公告单页全文及原表",
        "scope": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
        "purpose": "沿同一证券识别条款"
      },
      "supports": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
      "limits": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-TB-SELL",
      "title": "Selling Your Treasury Marketable Securities",
      "authors": [
        "TreasuryDirect / Bureau of the Fiscal Service"
      ],
      "version": "现行操作说明，取得2026-09-21；未取得2025年网页存档",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/selling-marketable-securities/",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "销售与转出说明全文",
        "scope": "新购证券45天持有要求、四周券转出限制和商业记账渠道；本例不冒充2025年真实转售操作记录.",
        "purpose": "同券路径与持有渠道"
      },
      "supports": "新购证券45天持有要求、四周券转出限制和商业记账渠道；本例不冒充2025年真实转售操作记录.",
      "limits": "新购证券45天持有要求、四周券转出限制和商业记账渠道；本例不冒充2025年真实转售操作记录.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-REDDIT-IPO",
      "title": "Reddit, Inc. Final Prospectus — Class A Common Stock",
      "authors": [
        "Reddit, Inc."
      ],
      "version": "招股书日期2024-03-20；424B4于2024-03-21提交",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "封面全文、发行/佣金表、Before expenses 脚注与相关超额配售段",
        "scope": "不含超额配售的基准发行两部分及其扣佣金、其他费用前金额；不是最终完成总量或公司净融资.",
        "purpose": "发行人与出售股东的资金分开"
      },
      "supports": "不含超额配售的基准发行两部分及其扣佣金、其他费用前金额；不是最终完成总量或公司净融资.",
      "limits": "不含超额配售的基准发行两部分及其扣佣金、其他费用前金额；不是最终完成总量或公司净融资.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-REDDIT-CLOSE",
      "title": "Form 8-K/A (Amendment No. 1) — IPO completion correction",
      "authors": [
        "Reddit, Inc."
      ],
      "version": "Date of Report 2024-03-25; filed 2024-03-26",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1713445/000162828024012983/reddit-8xka.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Explanatory Note 与 Item 8.01 完整段",
        "scope": "Completed IPO share split, full exercise of the 3.3m additional-share option, and corrected issuer gross proceeds of $631,601,918 before underwriting discounts, commissions and estimated offering expenses.",
        "purpose": "完成发行数量及更正后的公司毛所得；与基准招股书分别保留"
      },
      "supports": "Completed IPO share split, full exercise of the 3.3m additional-share option, and corrected issuer gross proceeds of $631,601,918 before underwriting discounts, commissions and estimated offering expenses.",
      "limits": "Completed IPO share split, full exercise of the 3.3m additional-share option, and corrected issuer gross proceeds of $631,601,918 before underwriting discounts, commissions and estimated offering expenses.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-EXEC",
      "title": "Executing an Order",
      "authors": [
        "SEC Investor.gov"
      ],
      "version": "现行教学网页；取得2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "执行订单主体全文",
        "scope": "券商路由和执行路径；非同一时点真实盘口.",
        "purpose": "交易来源与机构职责"
      },
      "supports": "券商路由和执行路径；非同一时点真实盘口.",
      "limits": "券商路由和执行路径；非同一时点真实盘口.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-HOLD",
      "title": "Investor Bulletin: Holding Your Securities",
      "authors": [
        "SEC OIEA / FINRA"
      ],
      "version": "2023-07-12",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "开头及 Street Name Registration 完整说明",
        "scope": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
        "purpose": "名义登记与客户记录层"
      },
      "supports": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
      "limits": "名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "local_required_units": [
    {
      "locator": "本篇正文与交互静态输入、算法、边界及默认验算表",
      "scope": "仅所列教学数据和规则；不补不存在的盘口或账户流水",
      "purpose": "重建练习与交互的计算"
    }
  ],
  "shared_inputs": {
    "version": "2026-09-21-review-v2",
    "identity_rule": "observed/source-backed, official_example, and teaching_assumption/synthetic are never relabelled as each other",
    "cases": {
      "CASE-MA-TBILL-912797RD1": {
        "observed": {
          "cusip": "912797RD1",
          "term_days": 28,
          "issue_date": "2025-09-23",
          "maturity_date": "2025-10-21",
          "price_per_100": "99.685778",
          "high_rate_percent": "4.040"
        },
        "teaching_assumptions": {
          "face_value_usd": "10000",
          "resale_price_per_100": "99.80",
          "resale_channel": "commercial_book_entry"
        }
      },
      "CASE-MA-REDDIT-IPO-20240320": {
        "observed": {
          "issuer_shares_base": 15276527,
          "selling_holder_shares": 6723473,
          "public_price_usd": "34.00",
          "underwriting_discount_per_share_usd": "1.70"
        },
        "source_ids": [
          "REDDIT-IPO"
        ]
      },
      "CASE-MA-REDDIT-IPO-20240325-CLOSE": {
        "observed": {
          "total_shares_completed": 25300000,
          "issuer_shares_completed": 18576527,
          "selling_holder_shares": 6723473,
          "additional_option_shares": 3300000,
          "issuer_gross_proceeds_usd": "631601918"
        },
        "source_ids": [
          "REDDIT-CLOSE"
        ]
      }
    }
  },
  "reading_scope_notes": "公开Agent包不假设可访问本地F盘；本篇来源均提供可实际读取的公开入口.",
  "experiment_ids": [
    "EXP-MA-BILL-FLOWS-v1",
    "EXP-MA-IPO-SNAPSHOTS-v1"
  ]
}
```

## Supplied entry
一张证券权利卡说明“持有人拿到了什么”，却还没有说明“钱是怎样走过去的”. 这一步值得单独做：同样是买入一张证券，钱可能作为发行对价流向发行证券的经济收款主体，也可能只是从新持有人转到旧持有人. 把两者混在一起，容易把市场成交额误当成企业融资额.

本篇继续使用912797RD1国库券，沿发行、转售和到期追踪现金；再用一份真实股票招股书检验这套区分. 最后，我们把发行人、券商、交易场所、清算机构和登记托管放回各自的位置.

<span id="m02-issue-transfer"></span>
## 一、先看两条线：现金往哪里走，权利归给谁

先回顾一个足够的起点：证券是持有人取得的一组权利，交易价格是取得这组权利的对价. **发行形成或向投资者提供相应证券权利；二级转让则让已有权利换一个持有人.** 在典型发行融资中，经济收款主体通常是发行人或政府发行主体；承销商、券商、清算与支付安排可以参与资金路径，但不能因此自动成为这笔融资的最终经济收款人. 在投资者之间的转让中，收款者则是出售已有权利的原持有人. MIT的股票讲义和OpenStax融资单元都把这一区别放在理解市场的前面. [^MIT-EQ][^OS17]

这不是一个“第一手交易比较重要、后续换手不重要”的排序. 转让市场让资金提供者不必一直持有到债券到期，也让希望继续持有的人能够接手. 正因为权利可以转移，持有期限和证券期限才可以不同. 这里是从契约和交易结构作出的经济解释，并不意味着每一笔转让都一定容易成交.

为了避免箭头含糊，我们约定每一步都画两条线：一条表示现金支付，另一条表示证券权利的取得或转移. 付款方向与权利方向通常相反，而提供服务的机构另外标出. 券商替客户执行订单，并不因此在所有交易中都成为最终经济买方或卖方.

<span id="m02-bill-lifecycle"></span>
## 二、沿同一笔国库券走完生命周期

真实材料仍是2025年9月18日的拍卖公告：912797RD1，9月23日发行，10月21日到期，价格每100面值99.685778美元. 我们设甲获配10,000美元面值. 发行付款为9,968.5778美元；这些数字的出处和教学持有量的身份不要混淆. [^TB-AUC]

接下来新增一项**教学变式**：甲在发行后、到期前，把全部权利以每100面值99.80转给乙. 这里没有实际成交日期或历史成交证据，也不加任何真实账户信息. 暂不计费用，三步的现金与证券变化如下.

| 事件 | 现金路径 | 权利路径 | 此步改变了什么 |
|---|---|---|---|
| 发行 | 甲 → 国库券发行/结算路径：9,968.5778美元；本例经济收款主体为美国财政部 | 形成甲持有的10,000面值国库券 | 财政部取得该份额对应发行对价，投资者取得权利；中介服务不改变经济收款主体 |
| 假设转售 | 乙 → 甲：9,980美元 | 甲 → 乙：同一10,000面值权利 | 持有人与取得对价改变，条款中的到期面值不变 |
| 按约到期支付 | 财政部 → 到期持有人乙：10,000美元 | 到期债权得到偿付 | 不是甲再收到一笔10,000美元 |

为什么转售时财政部没有再取得9,980美元？因为乙此时买的是甲已经持有的权利. 甲交出权利，获得乙的付款；财政部仍负担该证券约定的到期支付. 把两步交易加起来说“这张国库券为发行人融了19,948.5778美元”，就把不同收款人的钱合并了.

甲的未计费价差为$9,980-9,968.5778=11.4222$美元. 乙若按约持有到期，面值差为$10,000-9,980=20$美元. 这两个差额相加仍为31.4222美元：

$$
(9{,}980-9{,}968.5778)+(10{,}000-9{,}980)
=10{,}000-9{,}968.5778.
$$

中间的转售价格在这项加总中抵消了. 这个等式不是在说两人承担了相同风险、占用了相同时间，也不是说可以不计交易费用；它只是帮助我们核对：没有把同一笔到期现金算给两个人.

本篇显示到美分时，发行付款为9,968.58、甲价差11.42、乙差额20.00；底层继续保存上述精度.

<span id="m02-holding-channel"></span>
## 三、权利可以转让，不等于任意持有渠道都能马上出售

刚才的转售有一个容易被图形省掉的条件：甲通过什么渠道持有证券？

TreasuryDirect的现行说明要求，新购证券在系统中持有至少45天才能转出或出售；因此，放在TreasuryDirect中的新购四周券，不能按“到期前转出给券商再卖”的路径完成我们这项安排. 通过银行、券商的商业记账系统持有，则是另一条交易渠道. [^TB-SELL]

所以，上面的可转售演示明确选择**银行或券商的商业记账渠道**. 切换为TreasuryDirect新购四周券时，界面必须在转出/转售这一步停下，而不是仍画一条畅通箭头.

注意我们组合了两个有日期的材料：证券条款来自2025年的真实发行，操作规则来自2026年9月21日实际读取的网页. 这是“历史契约＋已核操作规则”的教学比较，没有声称重现一笔2025年的实际转售. 规则限制的意义在于：不仅要问“这项证券有没有转让市场”，还要问“当前持有人能否通过这个渠道、在这个时点进入该市场”.

这一点也解释了为什么市场参与者不只是可以省略的中间名字. 账户、登记和指令路径，直接关系到持有人能做什么.

<div data-experiment-slot="INT-M02-FLOWS"></div>

<span id="m02-ipo-split"></span>
<span id="CASE-MA-REDDIT-IPO-20240325-CLOSE"></span>
<span id="CASE-MA-REDDIT-IPO-20240320"></span>
## 四、真实股票发行也可能有两种收款人

现在换一份材料，检验前面的区分是否可迁移. Reddit日期为2024年3月20日的最终招股书封面列明：发行人出售15,276,527股，出售股东出售6,723,473股，每股发行价34美元；公司不取得这些出售股东的售股所得. [^REDDIT-IPO]

这份发行面向公众出售22,000,000股，但不能因此说“公司融资了22,000,000×34”. 我们把封面基准发行拆开，**不包括可能行使的超额配售权**.

| 基准发行组成 | 股数 × 每股价格 | 金额（美元） | 谁的所得 |
|---|---:|---:|---|
| 发行人出售部分毛额 | 15,276,527 × 34 | 519,401,918 | 发行人对应部分，尚未扣费用 |
| 原股东出售部分毛额 | 6,723,473 × 34 | 228,598,082 | 出售股东对应部分，不进入公司发行所得 |
| 向公众出售总额 | 22,000,000 × 34 | 748,000,000 | 两部分合计，不是公司净融资 |

封面还列每股1.70美元承销折扣和佣金，因而每股扣佣金后为32.30美元. 对发行人部分计算，得到$15,276,527\times32.30=493,431,822.10$美元；对出售股东部分计算，得到217,168,177.90美元. 原表按美元取整，两项分别显示493,431,822与217,168,178. 它们仍是**其他发行费用前**的金额，不能直接改名为全部费用后的公司净融资. [^REDDIT-IPO]

这个例子带来的修正很具体：“IPO”描述首次公开发行安排，并不保证封面全部出售股份都是公司新发给公众、全部款项都进公司. 我们必须读每个出售部分的主体. 反过来，后来的公司增发仍可以给公司带来发行资金，不能把“第一次之后”全部归成投资者之间的二级换手.

这里使用的是招股书基准安排，不是核定最终完成数量. 为了把“发行文件里的基准安排”和“后来实际完成”也分开，我们再看一份完成后的原件：Reddit于2024年3月26日提交的8-K/A说明，3月25日完成IPO时合计出售25,300,000股，其中公司出售18,576,527股（包括承销商全额行使3,300,000股额外购买权），出售股东仍为6,723,473股；公司毛所得更正为631,601,918美元，仍是承销折扣、佣金和估计发行费用前的口径. [^REDDIT-CLOSE]

这条完成记录**不改写上面的基准发行表**. 它形成第二个有日期的状态：3月20日招股书告诉我们基准安排，3月25日完成记录告诉我们额外购买权实际被全额行使. 把两者分开，正好训练“文件时点、出售主体和金额口径”三件事同时对齐. 其2024年3月日期也早于美国2024年5月的T+1切换，不拿后来的标准周期反推它当时的交收条款.

<div data-experiment-slot="INT-M02-IPO"></div>

<span id="m02-participants-records"></span>
## 五、把机构放回具体动作，不把它们画成一条流水线

从投资者视角看，“券商里出现了股票”似乎是一件事；从履约和记录看，却可以拆成不同职责.

| 参与者/系统 | 本篇需要识别的职责 | 不应与什么混同 |
|---|---|---|
| 发行人及登记/过户安排 | 确认证券类别、发行及股东登记等事项 | 每笔二级成交的收款人 |
| 券商 | 接收指令、安排执行，并按账户关系记录客户权益 | 必然是最终买卖对手；必然直接进入单一交易所 |
| 交易场所、交易商等执行来源 | 提供报价、撮合或与订单成交 | 自动完成所有后续交收 |
| 清算机构 | 在适用制度下处理会员义务、净额和履约风险 | 股东名册或客户账本 |
| 证券存管与交收系统 | 按指令移转参与人层记录，处理交收 | 决定每一客户的投资目标或交易价格 |

券商可以把订单路由到不同执行来源，而不是每一单都直达同一个交易所. 后续是否进入某种清算服务，也取决于证券、交易和参与机构是否适用. [^EXEC] 因此，这张表是职责图，不是一条声称全球所有市场都必须经过的固定流水线.

以美国股票常见的间接持有结构作具体观察：发行人层可能登记中介或名义持有人，例如DTC的名义人Cede & Co.；DTC维护参与人层记录；券商维护客户作为受益持有人的明细. 非直接参与人的券商还可能通过其他承载机构连接. SEC/FINRA的持有方式说明正是把这些记录层分开. [^HOLD]

静态记录图可读成：

**发行人层名义登记 ⇄ 存管参与人层头寸 ⇄ 券商客户明细 ⇄ 客户享有的相应权利.**

这些双向连接表示记录和传递关系，不表示同一份证券被创造了四次. 股息、信息或指令可以沿中介链传递；名字未直接列在发行人名册，也不能仅据此断言客户没有经济权利. 关于具体客户保护和交收风险，仍需看适用账户与制度，而不是凭图形猜结论.

在下一篇，我们把焦点放回券商收到的一张订单，计算它在给定报价下能成交多少. 再下一篇才检查成交后尚未履行的款券义务.

<span id="m02-exercises"></span>
## 六、检验理解：不要只认“发行”两个字

### 练习一：转售为何不等于再融资？

按本篇国库券变式，乙向甲支付9,980美元. 有人把这笔金额加入财政部的发行收入，也把到期10,000美元加入甲的所得. 请分别修正.

**解析.** 乙的付款给甲，购买已有权利，不是再向财政部认购新权利. 甲已经转出债权，到期收款者是乙. 分别按主体列账：甲为−9,968.5778、+9,980；乙为−9,980、按约+10,000；发行人的本例证券融资/到期现金为+9,968.5778、−10,000. 把不同主体或持有阶段混在一张收益表里，才会发生双重计算. 这里的“发行人”在国库券例中具体就是美国财政部；经纪、清算或付款服务机构即使参与流程，也不因此取得这笔国库券融资的经济所得.

### 练习二：748,000,000美元能否叫公司净融资？

使用Reddit封面基准安排，说明从向公众出售总额到公司净所得，至少要做哪两项分离.

**解析.** 先从总额中分出原股东出售部分228,598,082美元，剩下发行人毛额519,401,918美元. 再分开承销佣金和其他发行费用. 扣发行人部分佣金25,970,095.90后为493,431,822.10美元，仍在其他费用前. 不能把整笔37,400,000佣金全部从公司部分扣，也不能把全部公开出售额当作公司收入. 若切换到完成记录，还要另用18,576,527股与更正后的公司毛所得631,601,918美元，不能把这个后来的完成口径倒灌进上面的基准发行表.

### 练习三：公司出现在买方，是否推翻二级市场的解释？

如果公司回购已有股票，钱往哪里走？若先把购回股份记作库存股而未注销，能否说法定“已发行股数”必然马上减少？

**解析.** 回购中公司向出售股东支付资金，方向与发行融资相反；这说明交易主体需要逐笔识别，并不推翻投资者之间转售的解释. 回购的股份通常不再属于外部投资者持有的发行在外股份，但“发行在外”与法律/会计口径的“已发行”不能混用；是否注销、如何列报还需读相应安排. 本题为分类教学变式，不给特定公司的库存股规则作概括. 详细股数与每股权利变化交给M05.

### 练习四：换渠道后，哪一步失效？

把国库券路径改为“在TreasuryDirect新购四周券，发行10天后转给券商出售”，保持其他数字不变. 先指出路径问题，再决定是否计算价差.

**解析.** 按本篇采用的已核操作说明，45天持有要求使这条四周券到期前转出路径不可执行. 先应停在转出步骤，不能继续把99.80乘面值、再称得到了可实现的利润. 若明确改用商业记账渠道，可以重开可转售的教学分支，但仍需要真实报价与执行才能认定实际成交.

[^MIT-EQ]: **Andrew W. Lo / MIT OpenCourseWare，15.401 Finance Theory I — Lecture 7: Equities**. Fall 2008；文件版权2007–2008. [原文](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/1aea40b063cad5a335e980ecf30d84b7_MIT15_401F08_lec07.pdf). 定位：slides 3–4.

[^OS17]: **Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax，Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital**. 第3版，2022-12-14.[原文](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital). 定位：§17.1，尤其 Borrowing: Banks and Bonds、Corporate Stock and Public Firms、How Firms Choose between Financial Capital Sources.

[^TB-AUC]: **U.S. Department of the Treasury，Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1**. 2025-09-18公告；发行2025-09-23；到期2025-10-21. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf). 定位：单页表格中的 Security Term、CUSIP、Issue Date、Maturity Date、High Rate、Price.

[^TB-SELL]: **TreasuryDirect / Bureau of the Fiscal Service，Selling Your Treasury Marketable Securities**. 现行操作说明，2026-09-21访问；未取得2025年网页存档.[原文](https://www.treasurydirect.gov/marketable-securities/selling-marketable-securities/). 定位：In TreasuryDirect、In the Commercial Book-Entry System；用于45天持有要求、四周券转出限制与商业记账渠道.

[^REDDIT-IPO]: **Reddit, Inc.，Reddit, Inc. Final Prospectus — Class A Common Stock**. 招股书日期2024-03-20；424B4于2024-03-21提交. [原文](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm). 定位：封面、发行/佣金表、Before expenses脚注和超额配售权段；基准发行金额为扣承销折扣、佣金及其他费用前口径.

[^REDDIT-CLOSE]: <strong>Reddit, Inc.，Form 8-K/A (Amendment No. 1)</strong>. Date of Report 2024-03-25；2024-03-26提交. [原文](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012983/reddit-8xka.htm). 定位：Explanatory Note与Item 8.01；披露完成IPO的25,300,000股拆分、3,300,000股额外购买权全额行使及更正后的公司毛所得631,601,918美元，均为承销折扣、佣金和估计发行费用前.

[^EXEC]: **SEC Investor.gov，Executing an Order**. 现行教学网页，2026-09-21访问.[原文](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order). 定位：主体全文中的订单路由、执行场所及报价时效/数量.

[^HOLD]: **SEC OIEA / FINRA，Investor Bulletin: Holding Your Securities**. 2023-07-12.[原文](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97). 定位：开头两种持有方式、Street Name Registration及Direct Registration.

## Additional teaching material
### 交互规范：`INT-M02-FLOWS`

控件：`case=bill/ipo`（默认bill）；`step=issue/transfer/maturity`；`channel=commercial/treasurydirect_new`（默认commercial）；面值默认10000美元，100至100000、步长100；转售价固定教学99.80，不开放成“历史价格”. IPO分支增加只读的`ipo_view=prospectus_base/completed_close`：默认`prospectus_base`并允许切换`component=issuer/selling_holders/combined`；`completed_close`只展示3月25日完成数量和更正后的公司毛所得，不把两时点数据合成一张无日期的表.

**国库券状态机.** 所有账户值是本例的现金变动和面值权利，不是实际账户余额.

| 状态 | 甲累计现金变动 | 乙累计现金变动 | 本例义务主体（财政部）累计现金变动 | 甲/乙面值权利 |
|---|---:|---:|---:|---:|
| 发行动作完成（设定） | −9968.5778 | 0 | +9968.5778 | 10000 / 0 |
| 可达转售动作完成（设定） | +11.4222 | −9980 | +9968.5778 | 0 / 10000 |
| 按约到期支付（条件结果） | +11.4222 | +20 | −31.4222 | 0 / 0 |

财政部列仅跟踪本例面值份额，不是财政部全部财务；支付、清算或经纪中介没有被错误合并成经济收款主体. 各行三方现金变化之和为0. 所有小数按内部精度核算，显示到美分.

若`channel=treasurydirect_new`，转售动作被阻止：保留发行状态，说明45天条件与四周期限的冲突. 点击到期可走“未转售，甲按约收款”的另一分支：甲累计+31.4222、乙0、发行人−31.4222. 不可先显示不可能的转售，再悄悄恢复甲的持有.

IPO的`prospectus_base`分支用整数股数及每股34、佣金1.70：输出本篇基准发行金额关系；`combined`清楚写“公开出售总额”，不能标“公司净融资”.`completed_close`是独立只读状态：25,300,000股合计、公司18,576,527股、出售股东6,723,473股、公司毛所得631,601,918美元，并显示“完成记录/更正8-K/A”. 不提供把超额配售开关任意拨回基准表的伪历史.

DOM：`section#INT-M02-FLOWS`，按钮带阶段名称与`aria-pressed`；每条边有“付款/权利转移/记录”文本；不可达路径显示原因文字，不仅变灰. 表格始终可打开. 打印展开商业渠道、受限渠道和IPO三个静态状态. 禁止生成客户姓名、账户号码或“已到账”真实性标记.

### 指定阅读单元

| 必读来源 | 完整单元 | 目的 |
|---|---|---|
| OS17、MIT-EQ | §17.1；slides 3–4 | 发行和转售的经济关系 |
| TB-AUC、TB-SELL | 拍卖单页；销售/转出说明全文 | 同券路径与持有渠道 |
| REDDIT-IPO、REDDIT-CLOSE | 招股书封面及发行/费用表；8-K/A Item 8.01完整段 | 区分基准安排、完成状态，以及发行人和出售股东两笔钱 |
| EXEC、HOLD | 执行订单主体；持有方式开头及Street Name完整说明 | 交易来源、机构职责和记录层 |

### 阅读范围说明

公开Agent包不假设可访问本地F盘；本篇来源均提供可实际读取的公开入口.


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MA-BILL-FLOWS-v1",
    "interaction_id": "INT-M02-FLOWS",
    "title": "国库券：三方现金、权利转移与持有渠道",
    "anchor": "m02-holding-channel",
    "url": "/notebook/labs/m-a/interactions.html#m02-flow",
    "description": "历史发行条款、显式教学转售价与具名取得日的渠道规则；现金变动不等于账户余额.",
    "sources": [
      "MA-TB-AUC",
      "MA-TB-SELL"
    ],
    "inputs": {
      "controls": {
        "bill_case_id": "CASE-MA-TBILL-912797RD1",
        "default_face": 10000,
        "face_bounds": [
          100,
          100000
        ],
        "face_step": 100,
        "steps": [
          "issue",
          "transfer",
          "maturity"
        ],
        "channels": [
          "commercial",
          "treasurydirect_new"
        ],
        "default_channel": "commercial",
        "default_step": "issue",
        "treasurydirect_new_holding_days": 45,
        "channel_rule_source_id": "MA-TB-SELL",
        "channel_rule_access_at": "2026-09-21",
        "channel_rule_identity": "Current operating rules paired with a historical security for teaching; not a 2025 actual execution replay"
      },
      "case": {
        "observed": {
          "cusip": "912797RD1",
          "term_days": 28,
          "issue_date": "2025-09-23",
          "maturity_date": "2025-10-21",
          "price_per_100": "99.685778",
          "high_rate_percent": "4.040"
        },
        "teaching_assumptions": {
          "face_value_usd": "10000",
          "resale_price_per_100": "99.80",
          "resale_channel": "commercial_book_entry"
        }
      }
    },
    "outputs": {
      "unit": "USD cash changes; face rights in USD face",
      "party_order": [
        "甲",
        "乙",
        "本例财政部份额"
      ],
      "commercial": {
        "issue": {
          "cash_changes_usd": [
            "-9968.577800",
            "0",
            "9968.577800"
          ],
          "face_rights_usd": [
            10000,
            0
          ]
        },
        "transfer": {
          "cash_changes_usd": [
            "11.422200",
            "-9980.00",
            "9968.577800"
          ],
          "face_rights_usd": [
            0,
            10000
          ]
        },
        "maturity": {
          "cash_changes_usd": [
            "11.422200",
            "20.00",
            "-31.422200"
          ],
          "face_rights_usd": [
            0,
            0
          ]
        }
      },
      "treasurydirect_new": {
        "issue": {
          "cash_changes_usd": [
            "-9968.577800",
            "0",
            "9968.577800"
          ],
          "face_rights_usd": [
            10000,
            0
          ]
        },
        "transfer": {
          "blocked": true,
          "effective_step": "issue",
          "cash_changes_usd": [
            "-9968.577800",
            "0",
            "9968.577800"
          ],
          "face_rights_usd": [
            10000,
            0
          ]
        },
        "maturity": {
          "cash_changes_usd": [
            "31.422200",
            "0",
            "-31.422200"
          ],
          "face_rights_usd": [
            0,
            0
          ]
        }
      }
    },
    "definition_origin": "Received INT-M02-FLOWS specification, locally split into two implemented panels",
    "outputs_origin": "Local Decimal recomputation from the received shared inputs; historical amounts retain their source identities",
    "static_equivalent_markdown": "### 交互规范：`INT-M02-FLOWS`\n\n控件：`case=bill/ipo`（默认bill）；`step=issue/transfer/maturity`；`channel=commercial/treasurydirect_new`（默认commercial）；面值默认10000美元，100至100000、步长100；转售价固定教学99.80，不开放成“历史价格”. IPO分支增加只读的`ipo_view=prospectus_base/completed_close`：默认`prospectus_base`并允许切换`component=issuer/selling_holders/combined`；`completed_close`只展示3月25日完成数量和更正后的公司毛所得，不把两时点数据合成一张无日期的表.\n\n**国库券状态机.** 所有账户值是本例的现金变动和面值权利，不是实际账户余额.\n\n| 状态 | 甲累计现金变动 | 乙累计现金变动 | 本例义务主体（财政部）累计现金变动 | 甲/乙面值权利 |\n|---|---:|---:|---:|---:|\n| 发行动作完成（设定） | −9968.5778 | 0 | +9968.5778 | 10000 / 0 |\n| 可达转售动作完成（设定） | +11.4222 | −9980 | +9968.5778 | 0 / 10000 |\n| 按约到期支付（条件结果） | +11.4222 | +20 | −31.4222 | 0 / 0 |\n\n财政部列仅跟踪本例面值份额，不是财政部全部财务；支付、清算或经纪中介没有被错误合并成经济收款主体. 各行三方现金变化之和为0. 所有小数按内部精度核算，显示到美分.\n\n若`channel=treasurydirect_new`，转售动作被阻止：保留发行状态，说明45天条件与四周期限的冲突. 点击到期可走“未转售，甲按约收款”的另一分支：甲累计+31.4222、乙0、发行人−31.4222. 不可先显示不可能的转售，再悄悄恢复甲的持有.\n\nIPO的`prospectus_base`分支用整数股数及每股34、佣金1.70：输出本篇基准发行金额关系；`combined`清楚写“公开出售总额”，不能标“公司净融资”.`completed_close`是独立只读状态：25,300,000股合计、公司18,576,527股、出售股东6,723,473股、公司毛所得631,601,918美元，并显示“完成记录/更正8-K/A”. 不提供把超额配售开关任意拨回基准表的伪历史.\n\nDOM：`section#INT-M02-FLOWS`，按钮带阶段名称与`aria-pressed`；每条边有“付款/权利转移/记录”文本；不可达路径显示原因文字，不仅变灰. 表格始终可打开. 打印展开商业渠道、受限渠道和IPO三个静态状态. 禁止生成客户姓名、账户号码或“已到账”真实性标记."
  },
  {
    "id": "EXP-MA-IPO-SNAPSHOTS-v1",
    "interaction_id": "INT-M02-IPO",
    "title": "Reddit：招股书基准与完成发行的两份记录",
    "anchor": "m02-ipo-split",
    "url": "/notebook/labs/m-a/interactions.html#m02-ipo",
    "description": "两份真实文件分别展示公司和出售股东；完成记录不回填为基准条款，也不推算未给的净融资.",
    "sources": [
      "MA-REDDIT-IPO",
      "MA-REDDIT-CLOSE"
    ],
    "inputs": {
      "controls": {
        "ipo_views": [
          "prospectus_base",
          "completed_close"
        ],
        "ipo_default_view": "prospectus_base",
        "ipo_default_component": "issuer"
      },
      "cases": {
        "CASE-MA-REDDIT-IPO-20240320": {
          "observed": {
            "issuer_shares_base": 15276527,
            "selling_holder_shares": 6723473,
            "public_price_usd": "34.00",
            "underwriting_discount_per_share_usd": "1.70"
          },
          "source_ids": [
            "REDDIT-IPO"
          ]
        },
        "CASE-MA-REDDIT-IPO-20240325-CLOSE": {
          "observed": {
            "total_shares_completed": 25300000,
            "issuer_shares_completed": 18576527,
            "selling_holder_shares": 6723473,
            "additional_option_shares": 3300000,
            "issuer_gross_proceeds_usd": "631601918"
          },
          "source_ids": [
            "REDDIT-CLOSE"
          ]
        }
      }
    },
    "outputs": {
      "prospectus_base": {
        "document_date": "2024-03-20",
        "issuer": {
          "shares": 15276527,
          "gross_usd": "519401918.00",
          "underwriting_discount_and_commission_usd": "25970095.90",
          "after_commission_before_other_expenses_usd": "493431822.10"
        },
        "selling_holders": {
          "shares": 6723473,
          "gross_usd": "228598082.00",
          "underwriting_discount_and_commission_usd": "11429904.10",
          "after_commission_before_other_expenses_usd": "217168177.90"
        },
        "combined": {
          "shares": 22000000,
          "gross_usd": "748000000.00",
          "underwriting_discount_and_commission_usd": "37400000.00",
          "after_commission_before_other_expenses_usd": "710600000.00"
        },
        "company_net_proceeds": null
      },
      "completed_close": {
        "document_date": "2024-03-26",
        "record_date": "2024-03-25",
        "total_shares": 25300000,
        "issuer_shares": 18576527,
        "selling_holder_shares": 6723473,
        "additional_option_shares": 3300000,
        "issuer_gross_proceeds_usd": "631601918",
        "commission_usd": null,
        "company_net_proceeds": null
      }
    },
    "definition_origin": "Received INT-M02-FLOWS specification, locally split into two implemented panels",
    "outputs_origin": "Local Decimal recomputation from the received shared inputs; historical amounts retain their source identities",
    "static_equivalent_markdown": "### 交互规范：`INT-M02-FLOWS`\n\n控件：`case=bill/ipo`（默认bill）；`step=issue/transfer/maturity`；`channel=commercial/treasurydirect_new`（默认commercial）；面值默认10000美元，100至100000、步长100；转售价固定教学99.80，不开放成“历史价格”. IPO分支增加只读的`ipo_view=prospectus_base/completed_close`：默认`prospectus_base`并允许切换`component=issuer/selling_holders/combined`；`completed_close`只展示3月25日完成数量和更正后的公司毛所得，不把两时点数据合成一张无日期的表.\n\n**国库券状态机.** 所有账户值是本例的现金变动和面值权利，不是实际账户余额.\n\n| 状态 | 甲累计现金变动 | 乙累计现金变动 | 本例义务主体（财政部）累计现金变动 | 甲/乙面值权利 |\n|---|---:|---:|---:|---:|\n| 发行动作完成（设定） | −9968.5778 | 0 | +9968.5778 | 10000 / 0 |\n| 可达转售动作完成（设定） | +11.4222 | −9980 | +9968.5778 | 0 / 10000 |\n| 按约到期支付（条件结果） | +11.4222 | +20 | −31.4222 | 0 / 0 |\n\n财政部列仅跟踪本例面值份额，不是财政部全部财务；支付、清算或经纪中介没有被错误合并成经济收款主体. 各行三方现金变化之和为0. 所有小数按内部精度核算，显示到美分.\n\n若`channel=treasurydirect_new`，转售动作被阻止：保留发行状态，说明45天条件与四周期限的冲突. 点击到期可走“未转售，甲按约收款”的另一分支：甲累计+31.4222、乙0、发行人−31.4222. 不可先显示不可能的转售，再悄悄恢复甲的持有.\n\nIPO的`prospectus_base`分支用整数股数及每股34、佣金1.70：输出本篇基准发行金额关系；`combined`清楚写“公开出售总额”，不能标“公司净融资”.`completed_close`是独立只读状态：25,300,000股合计、公司18,576,527股、出售股东6,723,473股、公司毛所得631,601,918美元，并显示“完成记录/更正8-K/A”. 不提供把超额配售开关任意拨回基准表的伪历史.\n\nDOM：`section#INT-M02-FLOWS`，按钮带阶段名称与`aria-pressed`；每条边有“付款/权利转移/记录”文本；不可达路径显示原因文字，不仅变灰. 表格始终可打开. 打印展开商业渠道、受限渠道和IPO三个静态状态. 禁止生成客户姓名、账户号码或“已到账”真实性标记."
  }
]
```

## Sources
- [Executing an Order](https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/executing-order): 券商路由和执行路径；非同一时点真实盘口.
- [Investor Bulletin: Holding Your Securities](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-97): 名义登记、受益持有与客户记录层次；不推论所有法域的破产结果.
- [15.401 Finance Theory I — Lecture 7: Equities](https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/1aea40b063cad5a335e980ecf30d84b7_MIT15_401F08_lec07.pdf): 普通股、发行与二级转售的结构；不采用后续股票估值单元.
- [Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital): 融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.
- [Form 8-K/A (Amendment No. 1) — IPO completion correction](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012983/reddit-8xka.htm): Completed IPO share split, full exercise of the 3.3m additional-share option, and corrected issuer gross proceeds of $631,601,918 before underwriting discounts, commissions and estimated offering expenses.
- [Reddit, Inc. Final Prospectus — Class A Common Stock](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm): 不含超额配售的基准发行两部分及其扣佣金、其他费用前金额；不是最终完成总量或公司净融资.
- [Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf): 具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.
- [Selling Your Treasury Marketable Securities](https://www.treasurydirect.gov/marketable-securities/selling-marketable-securities/): 新购证券45天持有要求、四周券转出限制和商业记账渠道；本例不冒充2025年真实转售操作记录.

## Content relations
```json
[
  {
    "from": "zh-m02",
    "relation": "part_of",
    "to": "markets-trading",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m02",
    "relation": "requires",
    "to": "zh-financial-claims",
    "reason": "用权利与价格的区别追踪转让",
    "required_competence": "能区分取得一项权利的价格与该权利约定的支付",
    "scope": "M01#rights-structure 与 M01#three-levels；不要求先会期权定价"
  },
  {
    "from": "zh-m02",
    "relation": "illustrated_by",
    "to": "CASE-MA-TBILL-912797RD1",
    "reason": "同券发行与显式教学转售"
  },
  {
    "from": "zh-m02",
    "relation": "illustrated_by",
    "to": "CASE-MA-REDDIT-IPO-20240320",
    "reason": "公开出售总额与发行人资金分离"
  },
  {
    "from": "zh-m02",
    "relation": "supported_by",
    "to": "MA-TB-SELL",
    "reason": "当前操作路径的45天限制",
    "scope": "2026-09-21所读全文",
    "at_section": "m02-holding-channel"
  },
  {
    "from": "zh-m02",
    "relation": "supported_by",
    "to": "MA-REDDIT-IPO",
    "reason": "封面基准发行，不含超额配售",
    "scope": "封面发行与佣金表及脚注",
    "at_section": "m02-ipo-split"
  },
  {
    "from": "zh-m02",
    "relation": "supported_by",
    "to": "MA-REDDIT-CLOSE",
    "reason": "完成数量与更正后的公司毛所得",
    "scope": "2024-03-26 Form 8-K/A Item 8.01",
    "at_section": "m02-ipo-split"
  },
  {
    "from": "zh-m02",
    "relation": "illustrated_by",
    "to": "CASE-MA-REDDIT-IPO-20240325-CLOSE",
    "reason": "将招股书基准安排与实际完成状态分开"
  },
  {
    "from": "zh-m02",
    "relation": "supported_by",
    "to": "MA-HOLD",
    "reason": "名义登记与客户受益持有分层",
    "scope": "Street Name Registration",
    "at_section": "m02-participants-records"
  },
  {
    "from": "zh-m02",
    "relation": "illustrated_by",
    "to": "EXP-MA-BILL-FLOWS-v1",
    "at_section": "m02-holding-channel",
    "reason": "历史发行条款、显式教学转售价与具名取得日的渠道规则；现金变动不等于账户余额.",
    "origin": "Local registration of the already implemented author-specified interaction"
  },
  {
    "from": "zh-m02",
    "relation": "illustrated_by",
    "to": "EXP-MA-IPO-SNAPSHOTS-v1",
    "at_section": "m02-ipo-split",
    "reason": "两份真实文件分别展示公司和出售股东；完成记录不回填为基准条款，也不推算未给的净融资.",
    "origin": "Local registration of the already implemented author-specified interaction"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 2/17
分清发行融资、二级交易及各参与者的职责.
交易需要具体的报价和订单，下一篇把成交过程展开.
Next: [报价、订单与流动性](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-liquidity/)
