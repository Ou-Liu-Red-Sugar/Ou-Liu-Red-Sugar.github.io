# 金融资产、权利与经济事项

从真实材料写出权利卡，区分契约约定、交易价格与实际所得.

Entry: zh-financial-claims | Node: M01 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教M01《金融资产、权利与经济事项》，使用2026-09-21-review-v2版本.
先实际打开本篇“原文与定位”中的必读URL，按表读完指定单元；
PDF的表和符号查看原页. 记录标题、版本、实际范围、一个支持本课的要点.
runtime_reading_log开始为空；资料目录和编辑的已读记录不等于你的读取.
链接失败先从原机构正式入口取同一文件；未取得关键条款就说明缺口，
不要凭印象补成该证券的权利.

材料齐全后，只做一个综合诊断：给我912797RD1的公告，
让我写出义务主体、单位、付款、到期约定及尚不能证实的实际现金.
我已会的比例计算不要逐步盘问；我混淆价格和面值时，要求先写权利卡.
接着切换到Alphabet C类，让我说明没有通常投票权能否推出没有经济权利，
并指回原条款. 最后给“SPX报价4”作迁移，检验我是否会主动补合约单位、
期限、执行价和结算安排. 一次反馈一个完整推理任务，先给定位提示，
再给本篇完整解析. 通过标准是能够区分权利、价格、条件结果和实际到账，
而不只是背出股权、债权、衍生品三个名称.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "entry_id": "zh-financial-claims",
  "node_id": "M01",
  "content_version": "2026-09-21-review-v2",
  "export_mode": "public",
  "selected_branch": "full_entry",
  "body_source": "body_markdown",
  "learning_task": "从真实材料写出权利卡，区分契约约定、交易价格与实际所得.",
  "prompt": "你在教M01《金融资产、权利与经济事项》，使用2026-09-21-review-v2版本.\n先实际打开本篇“原文与定位”中的必读URL，按表读完指定单元；\nPDF的表和符号查看原页. 记录标题、版本、实际范围、一个支持本课的要点.\nruntime_reading_log开始为空；资料目录和编辑的已读记录不等于你的读取.\n链接失败先从原机构正式入口取同一文件；未取得关键条款就说明缺口，\n不要凭印象补成该证券的权利.\n\n材料齐全后，只做一个综合诊断：给我912797RD1的公告，\n让我写出义务主体、单位、付款、到期约定及尚不能证实的实际现金.\n我已会的比例计算不要逐步盘问；我混淆价格和面值时，要求先写权利卡.\n接着切换到Alphabet C类，让我说明没有通常投票权能否推出没有经济权利，\n并指回原条款. 最后给“SPX报价4”作迁移，检验我是否会主动补合约单位、\n期限、执行价和结算安排. 一次反馈一个完整推理任务，先给定位提示，\n再给本篇完整解析. 通过标准是能够区分权利、价格、条件结果和实际到账，\n而不只是背出股权、债权、衍生品三个名称.",
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
        "purpose": "融资安排的经济位置"
      },
      "supports": "融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.",
      "limits": "融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.",
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
        "locator": "2025-09-18 拍卖公告单页全文及原表",
        "scope": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
        "purpose": "具名权利、期间、面值报价"
      },
      "supports": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
      "limits": "具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-TB-PRICE",
      "title": "Understanding Pricing and Interest Rates",
      "authors": [
        "TreasuryDirect / Bureau of the Fiscal Service"
      ],
      "version": "现行网页，无独立修订日；取得2026-09-21",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.treasurydirect.gov/marketable-securities/understanding-pricing/",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Bills 小节全文及公式",
        "scope": "国库券贴现率、面值、天数与价格的关系；不把贴现率当持有期回报率.",
        "purpose": "报价基数与条件付款"
      },
      "supports": "国库券贴现率、面值、天数与价格的关系；不把贴现率当持有期回报率.",
      "limits": "国库券贴现率、面值、天数与价格的关系；不把贴现率当持有期回报率.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-GOOG-10K",
      "title": "Alphabet Inc. 2025 Form 10-K",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "报告期截至2025-12-31；2026年提交",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Note 11 Stockholders’ Equity，印刷 pp.78–79",
        "scope": "股份类别/交易代码、投票差异和股东权益披露；不是完整公司研究.",
        "purpose": "股份类别与条件"
      },
      "supports": "股份类别/交易代码、投票差异和股东权益披露；不是完整公司研究.",
      "limits": "股份类别/交易代码、投票差异和股东权益披露；不是完整公司研究.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-GOOG-RIGHTS",
      "title": "Description of Securities — Exhibit 4.20",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "2023年原始提交的证券说明，由2025年报引用；非新作的2025年章程",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Voting Rights、Dividends、Liquidation Rights 完整小节",
        "scope": "类别权利及其条件；正文不声称已逐条核完章程和所有相关法律.",
        "purpose": "权利条件与证券身份"
      },
      "supports": "类别权利及其条件；正文不声称已逐条核完章程和所有相关法律.",
      "limits": "类别权利及其条件；正文不声称已逐条核完章程和所有相关法律.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-OCC",
      "title": "Characteristics and Risks of Standardized Options",
      "authors": [
        "The Options Clearing Corporation"
      ],
      "version": "June 2024；官网入口于2026-09-21核得该版本",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "Ch.I 印刷 pp.3–5；Ch.II 交易单位及 Premium 对应完整小节",
        "scope": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
        "purpose": "选择权、单位与权利金"
      },
      "supports": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
      "limits": "本会话实际读取的指定单元，不是96页全文；支持权利、单位、权利金、费用和保证金的区分.",
      "fallback_source_ids": []
    },
    {
      "source_id": "MA-SPX",
      "title": "SPX Options Fact Sheet",
      "authors": [
        "Cboe"
      ],
      "version": "两页事实表，页脚©2026；取得2026-09-21；版权年不当作每条规则的生效日",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf",
        "author_reported_access_at": "2026-09-21",
        "local_importer_retrieved_source": false
      },
      "required_unit": {
        "locator": "两页事实表全文，核看第2页 SPX / SPXW 规格表",
        "scope": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
        "purpose": "参照对象、现金结算及乘数"
      },
      "supports": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
      "limits": "现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.",
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
      }
    }
  },
  "reading_scope_notes": "本篇的OCC指定单元只承担“权利、单位、权利金与保证金区分”的教学任务；OCC披露文件本身面向实际期权参与者并要求整体阅读，因此不能把这里的范围化必读误当作实际交易前的完整风险披露阅读. 本篇也不要求付费教材全文；上述必读小节若未取得，仍须明确材料缺口."
}
```

## Supplied entry
我们先不急着列“股票、债券、期权”这几个名字. 买入一项金融资产，最先要弄清的，是自己究竟取得了什么：有人约定在某天还钱，还是自己参与一家公司的剩余分配，或者在某种条件出现时有权要求对方履约？把这件事说清，价格才有明确的对象.

本篇沿一份真实国库券公告展开，再与 Alphabet 的股份类别、SPX 指数期权作对照. 读完后，你应能给一份陌生证券写出权利卡，并指出：仅靠这张卡，还不能知道哪些事情.

<span id="m01-rights-structure"></span>
## 一、先把经营活动与金融权利放在不同位置

企业购买设备、雇用人员、生产和销售，属于经营活动. 资金提供者与企业约定如何出资、如何获得分配，则形成另一层关系. 借款人与股东可能都为同一项经营提供资金，但前者可以持有约定支付的债权，后者持有的则是股权. 融资方式不同，改变的不只是一个“收益率”，还改变支付条件、承担损失的位置和参与决策的方式. OpenStax 的融资单元正是从这组关系展开，而不是先把金融工具排成名词表. [^OS17]

**本篇所说的金融资产，是从持有人一侧观察的一项可识别的金融权利.** 这里重点研究债权、股权和衍生合约中的权利.

“权利”也不只意味着收到现金. 某类股份可能附有投票权；某项期权允许持有人选择是否行权. 反过来，持有公司股份，不等于可以自行搬走公司的一台机器. 公司持有的经营资源，与股东持有的证券，是相连但不同的对象. 研究公司如何经营，回答的是资源如何创造结果；研究证券权利，回答的是这些结果如何、在什么条件下归到持有人.

因此，我们给权利保留下面几栏，而不只写一个证券名称.

| 权利卡字段 | 要回答的问题 |
|---|---|
| 证券与主体 | 哪一证券、哪一类别或系列？发行人是谁？谁承担相关义务？ |
| 持有人与记录 | 谁享有权利？通过什么持有记录识别？ |
| 经济事项 | 还本、分红、清算分配、投票，还是按价格条件结算？ |
| 条件与时间 | 什么条件触发？什么时候可以要求履约？ |
| 数量与币种 | 一份到底是多少？报价单位和现金单位是否相同？ |
| 顺位与限制 | 哪些其他权利优先？是否有期限、转换或转让限制？ |

这张卡故意没有把“我预计会赚多少”放进去. 预计回报需要另外输入价格、未来状态和持有方式；它不能替代契约本身.

<span id="m01-bill-case"></span>
<span id="CASE-MA-TBILL-912797RD1"></span>
## 二、读一份国库券公告：先认权利，再算付款

下面是美国财政部 2025 年 9 月 18 日拍卖结果中的必要字段. 表格按教学任务重排，没有复制认购分配的全部统计. [^TB-AUC]

| 原始字段 | 公告数值 |
|---|---|
| Security Term | 28-Day Bill |
| CUSIP | 912797RD1 |
| Issue Date | 2025-09-23 |
| Maturity Date | 2025-10-21 |
| Price | 每100美元面值99.685778美元 |
| High Rate | 4.040% |

这是一项到期支付面值的国库券权利. 我们设一个**教学持有量：面值10,000美元**. 它不是某个真实账户的获配记录. 按照公告单价，发行付款为

$$
C=10{,}000\times\frac{99.685778}{100}
  =9{,}968.5778\text{ 美元}.
$$

在按约持有至到期、完成支付的条件下，收到的面值为10,000美元，二者相差31.4222美元. 国库券的发行价格与面值之差承载这里的利息收入；不能另外再加一笔“4.040%的票息”. [^TB-PRICE]

这时权利卡已经能够落地：发行主体是美国财政部，计量以美元面值为基础，相关经济事项是到期支付，日期是2025年10月21日. 你付出的9,968.5778美元是取得这项权利的对价，不是到期面值.

### 为什么4.040%不是这28天的回报率？

公告中的 High Rate 使用国库券贴现报价惯例. 令面值为$F$、年化贴现率为$d$、期限天数为$n$，其价格关系为$C=F(1-dn/360)$. 代入$d=0.04040$和$n=28$，每100面值计算得到99.685777…，按公告精度取整就是99.685778. [^TB-PRICE]

而我们这次持有的回报率，分母是付出的资金：

$$
R=\frac{F-C}{C}
 =\frac{31.4222}{9{,}968.5778}
 \approx0.315212\%.
$$

两者首先连分母都不同：贴现率以面值为基数，并带有年化日数约定；这里的$R$以买入资金为基数，只覆盖28天. 说“哪个数字更大”之前，先把对象、期间和分母对齐，比记住一个报价名词更重要.

**精度约定.** 本篇计算保留公告单价的全部小数，现金表显示到美分. 因此显示付款9,968.58、面值差31.42；底层验算仍使用9,968.5778与31.4222. 实际支付按适用系统的货币舍入执行，两种展示不要混算.

<span id="m01-three-levels"></span>
## 三、约定、价格与实际所得，是三层不同的信息

我们把刚才的例子再拆一次.

| 层次 | 本例已经知道什么 | 还需要什么才能往下判断 |
|---|---|---|
| 契约约定 | 具名国库券、面值单位、发行和到期日期 | 与持有方式有关的操作条件 |
| 交易对价 | 公告给出了发行价格；本篇设定了持有量 | 到期前出售时的实际买方报价和成交结果 |
| 实际所得 | 可以算出按约支付时的条件结果 | 特定账户的获配、成交、费用及款项实际到账记录 |

公告给出了发行条款，并没有给我们一个人的账户流水. 即使到期日已经过去，也不能把按约计算的数值自动登记为“这个账户已收到的现金”.

再作一个有区分力的变式：假设同一笔10,000面值权利，在到期前以每100面值99.80的价格转让. 新买方付出9,980美元；如果仍按原条款持有到期，其面值差是20美元. **到期面值没有变，改变的是取得同一权利所付的价格，以及剩余持有期间.** 99.80是教学价格；转售日未设，因此这里不年化新买方的回报.

这正说明了权利卡的用途：把不随某次报价变化的条款先固定下来，再看价格和持有方式怎样改变结果. 下一篇会继续追踪这次转售的钱究竟给了谁.

<span id="m01-rights-comparison"></span>
<span id="CASE-MA-SPX-SPEC-2026"></span>
<span id="CASE-MA-ALPHABET-RIGHTS-2025"></span>
## 四、换成股权和期权，不能把国库券的结构硬套过去

### 股权：有经济权利，不等于承诺固定支付

Alphabet 的2025年报区分了 Class A（GOOGL）与 Class C（GOOG）；类别及证券代码是证券身份的一部分. 年报和所引用证券说明显示，A类通常每股一票，C类除法律要求外没有投票权. 两者不能因为都联系同一家公司，就被记成完全相同的权利. [^GOOG-10K]

但“没有通常投票权”也不意味着“没有经济权利”. 证券说明的 Dividends 小节把分配与董事会决定、可能存在的优先权等条件联系起来；Liquidation Rights 小节还规定了清算前C类转为A类及剩余资产分配的安排. 这里的关键是**条件与顺位**，不是一个保证每年支付的数额. [^GOOG-RIGHTS]

因此，股份权利卡里的“到期还本”一栏不能照抄国库券. 公司当期赚钱，也不自动等于持有人当期收到了同样比例的现金. 投资者还须区分公司经营结果、公司作出的分配决定和自己实际取得的款项.

### 期权：合约参照指数，不等于持有指数中的股票

Cboe 的 SPX 事实表给出另一种安排：欧式行权、现金结算、每指数点100美元的合约乘数；标准SPX与SPXW还有不同的到期结算时点. [^SPX] 这张合约卡要写的是“按特定系列的结算规则产生现金权利”，不是“持有一篮子指数成分股”.

假设买入一份看涨期权的权利金报价为4点，则对价为$4\times100=400$美元，未计费用. **4点是本篇教学报价，不是实际期权链.** 权利金是取得选择权的价格，不是先付400美元、以后必然补齐一份指数现货的首付款. 期权买方与卖方的权利义务不对称，而实际履约还通过券商、清算会员和清算安排连接.[^OCC]

这里先把“权利和单位”读清. 具体期权系列的到期所得、盈亏与行权流程，会在M15–M17展开.

### 三张权利卡的静态对照

| 对象 | 核心权利 | 支付条件/时间 | 数量口径 | 仅凭这张权利卡还不能确定什么 |
|---|---|---|---|---|
| 912797RD1国库券 | 按条款取得到期面值 | 2025-10-21到期支付 | 美元面值；价格每100面值 | 特定账户是否已到账 |
| Alphabet A/C类别股份 | 类别对应的股东经济及治理权利 | 分配决定、清算及其他适用条件 | 股；类别必须保留 | 固定分红或固定到期本金 |
| SPX系列期权 | 合约规定的选择权及现金结算权利 | 系列行权与结算规则 | 份；100美元/指数点 | 是否持有指数成分股、未来是否盈利 |

<span id="m01-guided-use"></span>
## 五、自己用一次权利图

把图想成两层就够了：第一层是“经营主体或参照对象”，第二层是“持有人实际取得的权利”. 国库券的箭头指向财政部的支付义务；Alphabet股份的箭头指向该类别股东权利；SPX的参照箭头指向指数，履约箭头则沿期权合约及清算关系走. **参照对象不是自动的付款义务人.**

网页中切换工具时，先不看价格计算，读出箭头上的动作. 随后只把国库券的取得价格从99.685778切到99.80：到期日期与面值仍应不变，付款从9,968.5778变为9,980，条件面值差从31.4222变为20. 再切换A/C类别：治理权利栏应变化，而界面不应凭空生成固定分红. 这些变化和“不变”，就是本篇要建立的结构感.

没有交互时，上面两张表和这组默认结果就是完整静态版本，不需要凭图形猜含义.

<div data-experiment-slot="INT-M01-RIGHTS"></div>

<span id="m01-exercises"></span>
## 六、检验理解：能否换一份材料继续做？

### 练习一：一项权利，两个价格

甲按公告单价取得10,000面值国库券，后来按教学价格99.80转给乙. 暂不计费用. 请分别写出甲的付款、乙的付款、甲的价差，以及转让后财政部的到期面值义务.

**解析.** 甲付9,968.5778；乙付9,980；甲的价差为11.4222美元. 甲卖出了权利，所以不能再把到期10,000美元算进自己的收入. 转让本身没有将证券条款中的10,000面值改成9,980；变化的是持有人与取得对价. 是否完成转让和到期到账，还要看实际履约记录.

### 练习二：没有投票权，就是没有股权吗？

有人读到GOOG通常不附投票权，认为它只是一张价格凭证，不具有股东经济权利. 请指出这个判断漏读了证券说明的哪些部分.

**解析.** 它把治理权利中的一个维度替代了全部权利. 需要一起读取Dividends和Liquidation Rights：分红参与具有条件，清算分配还涉及顺位与转换安排. 正确结论是A/C权利存在差别，不是C类没有经济权利；也不能走到另一个极端，断言两类在所有情形都完全相同.

### 练习三：一份期权的“4”是什么？

一张材料只写“SPX，看涨，报价4”. 能否据此说购买成本是4美元，或者可以算出到期现金？

**解析.** 不能. 已知SPX乘数后，若4确为每点权利金报价、数量为一份，则未计费对价是400美元. 但还缺具体系列的执行价、期限和结算安排；计算到期现金还需该系列的结算值. 报价、合约字段和未来状态各承担不同职责. 单独一个数字不足以补全这三层.

[^OS17]: **Steven A. Greenlaw、David Shapiro、Daniel MacDonald / OpenStax，Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital**. 第3版，2022-12-14.[原文](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital). 定位：§17.1，尤其 Borrowing: Banks and Bonds、Corporate Stock and Public Firms、How Firms Choose between Financial Capital Sources.

[^TB-AUC]: **U.S. Department of the Treasury，Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1**. 2025-09-18公告；发行2025-09-23；到期2025-10-21. [原文](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf). 定位：单页表格中的 Security Term、CUSIP、Issue Date、Maturity Date、High Rate、Price.

[^TB-PRICE]: **TreasuryDirect / Bureau of the Fiscal Service，Understanding Pricing and Interest Rates**. 现行网页，2026-09-21访问.[原文](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/). 定位：Bills 小节及贴现公式；其中贴现率口径与持有期回报率需区分.

[^GOOG-10K]: **Alphabet Inc.，Alphabet Inc. 2025 Form 10-K**. 报告期截至2025-12-31；2026年提交. [原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm). 定位：Item 5，印刷p.25；Note 11 Stockholders’ Equity，印刷pp.78–79.

[^GOOG-RIGHTS]: **Alphabet Inc.，Description of Securities — Exhibit 4.20**.2023年提交的证券说明，由2025年报引用.[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm). 定位：Voting Rights、Dividends、Liquidation Rights、Conversion、Equal Status.

[^SPX]: **Cboe，SPX Options Fact Sheet**. 两页事实表，页脚©2026.[原文](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf). 定位：PDF pp.1–2，尤其第2页 SPX / SPXW 规格表；版权年份不作为各项规则的生效日.

[^OCC]: **The Options Clearing Corporation，Characteristics and Risks of Standardized Options**. June 2024.[原文](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf). 定位：Ch.I印刷pp.3–5；Ch.II印刷pp.6–8、11–12；Ch.IX印刷pp.58–59.

## Additional teaching material
### 交互规范：`INT-M01-RIGHTS`

**目的：** 保持契约字段固定，观察工具、类别、数量和取得价格怎样改变权利图与条件资金表. 不是报价终端，不提供真实成交按钮.

| 控件/状态 | 类型、单位与默认值 | 允许范围 |
|---|---|---|
| `instrument` | 单选；默认`bill` | `bill / alphabet_A / alphabet_C / spx` |
| `bill_face` | 数值，美元面值，默认10000 | 100至100000，步长100；仅教学规模 |
| `bill_quote_mode` | 单选；默认`auction` | `auction / synthetic_99_80` |
| `share_count` | 整数，股，默认1 | 1至1000 |
| `option_count` | 整数，份，默认1 | 1至100 |
| `option_premium_points` | 数值，点，默认4.00 | 0.10至100，步长0.10；教学设定 |
| 权利、日期、乘数 | 只读 | 来自本篇固定版本，不让读者拖动成另一真实合约 |

计算：国库券`cost=face*quote/100`；`conditional_gap=face-cost`；`holding_return=gap/cost`. 仅`auction`模式显示已知28天的持有期间；转售模式不填未给出的剩余期限或年化率. 期权只算`premium_cash=count*100*premium_points`，不在缺少系列/结算值时输出payoff. 股份输出类别文字与数量，不自动估分红.

默认输出：国库券10000、99.685778、9968.5778、31.4222、0.3152124669%；转售模式10000、99.80、9980、20、0.2004008016%，期限“未设定”. 期权默认400美元. 股份类别切换只更新有来源支持的权利字段.

DOM：外层`section#INT-M01-RIGHTS`；所有输入有`label`；结果使用`output`和可复制表；关系线提供文字邻接表. 改动后焦点留在原控件，以`aria-live="polite"`简报更新. 不得只以颜色表示“义务/参照”. 移动端和打印展开全部三张卡.

边界：拒绝NaN、负数、超范围或单位不符；不生成未知到期支付；不能把演示数量写成账户持仓. 舍入只作用于显示，内部使用十进制定点. 测试应核：数量翻倍时资金翻倍；价格切换不改面值/到期日；股份类别切换不生造固定支付. 静态等价为正文§二–五的表格、公式及默认/变式数值.

### 指定阅读单元

学习任务是“从原件重建权利卡”，不是股票推荐. 以下单元都是本篇的必读材料；一个会话内已完整读过同版本的单元可复用，不能继承编辑的完成状态.

| 必读来源 | 必读完整单元 | 读取目的 |
|---|---|---|
| OS17 | §17.1 | 融资安排的经济位置 |
| TB-AUC、TB-PRICE | 拍卖单页；Bills小节 | 面值、价格、期间与报价基数 |
| GOOG-10K、GOOG-RIGHTS | Note 11；Voting、Dividends、Liquidation Rights | 类别与条件，不能只看证券代码 |
| OCC、SPX | OCC Ch.I及交易单位/Premium小节；SPX两页事实表 | 选择权、单位、参照对象与现金结算 |

### 阅读范围说明

本篇的OCC指定单元只承担“权利、单位、权利金与保证金区分”的教学任务；OCC披露文件本身面向实际期权参与者并要求整体阅读，因此不能把这里的范围化必读误当作实际交易前的完整风险披露阅读. 本篇也不要求付费教材全文；上述必读小节若未取得，仍须明确材料缺口.


## Sources
- [Alphabet Inc. 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): 股份类别/交易代码、投票差异和股东权益披露；不是完整公司研究.
- [Description of Securities — Exhibit 4.20](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm): 不同类别股份的经济权利、治理权利及其适用条件.
- [Characteristics and Risks of Standardized Options](https://www.theocc.com/getmedia/a151a9ae-d784-4a15-bdeb-23a029f50b70/riskstoc.pdf): 标准化期权的合约安排、买卖双方权利义务、权利金与担保品、行权与指派、结算，以及多腿组合中各项义务的关系.
- [Principles of Economics 3e — §17.1 How Businesses Raise Financial Capital](https://openstax.org/books/principles-economics-3e/pages/17-1-how-businesses-raise-financial-capital): 融资与权利的经济关系；具体股份类别和现行规则另据原件. 教材概括不覆盖所有股份类别.
- [SPX Options Fact Sheet](https://cdn.cboe.com/resources/spx/spx-fact-sheet.pdf): 现金结算、欧式行权、100美元乘数及SPX/SPXW结算差别；不采用营销/税务部分.

SPXW欧式、PM、每点100美元、现金于到期后营业日交付；传统SPX AM/SOQ与SPXW分开. 无实际报价.

M-E/F/G 本批采用：SPX/SPXW欧式现金、100美元乘数、最小报价增量及AM/PM结算差别；并非某条历史上市期权链.
- [Treasury Auction Results — 28-Day Bill, CUSIP 912797RD1](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2025/R_20250918_1.pdf): 具名历史发行条款与公布发行价格；不证明某个账户的获配或实际到账.
- [Understanding Pricing and Interest Rates](https://www.treasurydirect.gov/marketable-securities/understanding-pricing/): 国库券贴现率、面值、天数与价格的关系；不把贴现率当持有期回报率.

## Content relations
```json
[
  {
    "from": "zh-financial-claims",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-TBILL-912797RD1",
    "reason": "用具名发行拆开面值、价格与条件所得"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-ALPHABET-RIGHTS-2025",
    "reason": "同一公司不同股份类别"
  },
  {
    "from": "zh-financial-claims",
    "relation": "illustrated_by",
    "to": "CASE-MA-SPX-SPEC-2026",
    "reason": "参照对象与履约权利分开"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-TB-AUC",
    "reason": "发行日期、面值报价及期限",
    "scope": "2025-09-18公告单页",
    "at_section": "m01-bill-case"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-GOOG-RIGHTS",
    "reason": "投票、分配及清算的类别条件",
    "scope": "Voting / Dividends / Liquidation Rights",
    "at_section": "m01-rights-comparison"
  },
  {
    "from": "zh-financial-claims",
    "relation": "supported_by",
    "to": "MA-SPX",
    "reason": "现金结算与乘数",
    "scope": "2026事实表第2页",
    "at_section": "m01-rights-comparison"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 1/17
把资产的约定、实际所得和市场价格分别说清.
认识了权利之后，接着追踪发行与交易中的资金去向.
Next: [发行、交易与市场参与者](https://ou-liu-red-sugar.github.io/zh/notebook/issuance-trading-participants/)
