# 股票与股东权利

读Alphabet与Apple的股份条款，再用真实股数桥和有现金约束的教学公司区分回购、增发与分配。

Entry: zh-m05 | Node: M05 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你在教 M05《股票与股东权利》，使用 2026-09-21-MB-review-v2；对象是有数学基础、但未必熟悉金融制度的读者。
先按 agent_packet.required_readings 实际打开全部指定完整单元，记录标题、版本、实际范围及它支持的当前任务。确认 Alphabet 2025年报4.41援引2023 Exhibit4.20；不要把书目、搜索片段或本包的编辑读取记录当成你自己已读。同一会话完整读取过的同一版本可复用。PDF/表格若解析有误要看原页；缺单位或脚注时不能先猜。没有核过的备用来源不要自行写成等价。仍缺材料就指出哪个任务缺证据，不把训练记忆充当原件。
先用一个完整诊断任务：给我 A/B/C 权利卡的空栏，要求区分表决、分配、清算、转换，并指出B一般转让转换的例外和C清算前的步骤。已会的步骤跳过，不逐题考四则运算。
然后给我12,211、117、240、12,088与45,398/45,709两组真实披露，先说单位、期间、Note 11回购表/现金流付款身份，再重建股数桥。若我说净减少240、把45,398称为一般“确认金额”、或把两笔金额可相加，要回到原表与脚注；311只能作为待衔接差额，不强行分配原因。
进入 supplied_inputs 的单类别虚构公司，先写 V是经济价值、C是可用现金、N是股数。推导增发/回购每股差额，尤其 p*q<=C、q<N。现金60,000而需要80,000时停止，不展示已完成后的财富。说明钱付给卖出者而非剩余股东。不要由教学v0推断真实股票低估。
最后用Apple无优先认购权和每股0.21分配做迁移：让我把剩余权益与收到现金合并；解释已经宣派与未来分红意向不同。答案必须同时正确处理权利、现金路径、股数和条件；只说“回购好/稀释坏”不算掌握。正文、算例、交互均用相同输入，不提供账户操作或投资推荐。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "MBC-01",
      "title": "Alphabet 2025 Form 10-K",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "年度截至2025-12-31；2025年报快照",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
      },
      "required_unit": {
        "locator": "Note 11 pp.78–79；权益变动表p.51；现金流p.52融资行；Exhibit Index 4.41",
        "scope": "Note11全文及脚注；表头、单位、2025股数桥与对应现金流；附件援引位置",
        "purpose": "股数总变动、Note 11 回购表及未交收脚注与现金流付款分别读取、股息意向和权利文件的版本链"
      },
      "supports": "2025股本、回购及分配；含未交收回购与期间付款分开；2025附件4.41援引旧Exhibit4.20。没有据此核尽2026中期变动。",
      "fallback_source_ids": []
    },
    {
      "source_id": "MBC-02",
      "title": "Description of Securities — Exhibit 4.20",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "2023-02-03提交，被2025年报4.41援引",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm"
      },
      "required_unit": {
        "locator": "Voting Rights; Dividends; Liquidation Rights; Conversion; Equal Status",
        "scope": "五个完整小节；包含C清算前转换及B转让转换的具名例外，连同开头范围说明",
        "purpose": "逐类填写权利卡，避免把经济参与相似写成程序完全相同"
      },
      "supports": "A/B/C的表决、分配、清算与转换；C清算程序和B转换例外不可省略。证券说明仍受援引章程等约束。",
      "fallback_source_ids": []
    },
    {
      "source_id": "MBC-03",
      "title": "Description of the Registrant's Securities — Exhibit 4.1",
      "authors": [
        "Apple Inc."
      ],
      "version": "截至2025-09-27",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/a10-kexhibit4109272025.htm"
      },
      "required_unit": {
        "locator": "Description of Common Stock 至 Listing",
        "scope": "开头已注册证券范围与Common Stock完整单元；不要求债券单元",
        "purpose": "迁移到单一普通股类别，核对一股一票及无优先认购/转换/赎回权"
      },
      "supports": "单一普通股类别对照；一股一票、条件分配、剩余清算及无优先认购/转换/赎回权。不是只有一种证券。",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "content_version": "2026-09-21-MB-review-v2",
    "capital_default": {
      "identity": "synthetic",
      "V": 1000000,
      "C": 150000,
      "N": 100000,
      "q": 10000,
      "p": 8,
      "d": 0.21,
      "h": 1000,
      "action": "repurchase"
    },
    "capital_tables": {
      "issue_q": 20000,
      "repurchase_q": 10000,
      "prices": [
        8,
        10,
        12
      ],
      "distribution_d": 0.21,
      "distribution_h": 10,
      "cash_stress": 60000
    },
    "rights": {
      "alphabet_A": {
        "label": "Alphabet A / GOOGL",
        "votes": 1,
        "source_id": "MBC-02",
        "voting_note": "一般事项每股1票；法律或类别事项按原条款",
        "dividend_note": "按董事会决定及适用优先权，每股相应参与分配",
        "liquidation_note": "债务和适用优先清算权之后参与剩余分配",
        "conversion_note": "A不可转换为其他类别"
      },
      "alphabet_B": {
        "label": "Alphabet B",
        "votes": 10,
        "source_id": "MBC-02",
        "voting_note": "一般事项每股10票",
        "dividend_note": "相应每股经济分配权与A相同",
        "liquidation_note": "按条款参与剩余分配",
        "conversion_note": "持有人可按1:1转A；转让一般触发转换，但有条件的创始人、税务/遗产及实体分配等例外；不能认定任何转让都转换"
      },
      "alphabet_C": {
        "label": "Alphabet C / GOOG",
        "votes": 0,
        "source_id": "MBC-02",
        "voting_note": "通常无表决权，法律要求的情形除外",
        "dividend_note": "按条款享有相应每股经济分配权",
        "liquidation_note": "相关清算分配或其登记日两者较早发生前，先按1:1转A",
        "conversion_note": "一般不可转换；上述清算转换除外"
      },
      "apple": {
        "label": "Apple 普通股 / AAPL",
        "votes": 1,
        "source_id": "MBC-03",
        "voting_note": "一股一票；无累积投票权",
        "dividend_note": "董事会从依法可分配资金中酌情宣派",
        "liquidation_note": "按条款参与剩余分配",
        "conversion_note": "无优先认购、转换或约定赎回权；仅为普通股类别，不代表只有一种证券"
      }
    },
    "alphabet_2025": {
      "identity": "reported",
      "period": "2025",
      "source_id": "MBC-01",
      "share_unit": "million_shares",
      "amount_unit": "USD_million",
      "shares_start": 12211,
      "shares_issued": 117,
      "shares_repurchase": 240,
      "shares_end": 12088,
      "class_a_repurchase_shares": 37,
      "class_c_repurchase_shares": 203,
      "class_a_repurchase_amount": 6501,
      "class_c_repurchase_amount": 38897,
      "repurchase_cash_paid": 45709,
      "includes_unsettled": true,
      "net_cash_difference_not_fully_reconciled": true,
      "repurchase_note11_amount": 45398,
      "note11_share_footnote": "shares repurchased include any unsettled repurchases",
      "repurchase_cash_flow_payment_identity": "Consolidated Statements of Cash Flows financing activity",
      "note11_amount_not_labeled_generic_recognition_measure": true
    }
  },
  "protocol": "先实际取得指定完整单元再教学；编辑取得记录不能冒充Agent本次已读。选读分支启用时其指定单元转为必读。"
}
```

## Supplied entry
我们已经会问一份金融资产“谁向谁承诺什么”。接下来把问题落到一股股票上：它给我哪些权利？公司分红、增发或回购以后，钱去了哪里，剩余股东的每股所得为什么会改变？本篇以 Alphabet 的股份文件为主线，用 Apple 作对照，再用一个独立的教学公司检查现金与股数。

<a id="m05-position"></a>
## 一、先把公司、股份和每股权利分开

一家企业可以有许多业务，也可以发行不止一类证券。企业经营什么、证券持有人得到什么，是两层问题。持有普通股，不能理解成可以直接搬走公司某个比例的机器或提走同样比例的银行存款；我们要通过股份条款，确定表决、分配、转换等权利。Apple 和 Alphabet 的证券说明都把这些项目分别列出，而没有用“所有权”三个字代替全部条件。[^MBC-02][^MBC-03]

**本篇所说的每股权利，是同一股份类别中一股所附带的、在相应条件下可以行使或实现的权利。** 至少要分清四栏：平时怎样表决，何时能取得分配，清算时位于什么顺序，以及股份能否或何时必须转换。经济利益相近，不表示四栏完全一样；交易代码不同，也不必然意味着背后是两家不同企业。

这种安排为什么值得单独研究？因为投入资本、参与决策和取得未来分配可以被设计成不同的组合。例如，同样每股参与分配的两类股份，可以具有不同票数。这里的经济解释是：公司在组织融资与控制权时有多个可调整维度；至于某次具体安排为什么被采用，要另外读当时的文件，不能从最终结构倒推设计者动机。

读者可以沿着三个问题推进：**我买的是谁发行的哪一类股份；公司采取行动时，哪一栏权利被触发；现金和股数分别怎样变化。** 后面的计算都服务于这三个问题。

<a id="m05-share-classes"></a>
## 二、读一份真实股份说明：相同经济参与，不同表决和转换程序

这里使用的是 Alphabet **2025 年报的有日期快照**。年报 Exhibit Index 的 4.41 引用了 2023 年提交的《Description of Securities》，该旧文件自身的编号是 Exhibit 4.20。两者构成引用链，不能把旧文件编号当成 2025 年报的附件编号。[^MBC-01]

根据这份被年报援引的说明，我们把必要条款压成一张权利卡；涉及转换时仍须保留例外。[^MBC-02]

| 对象 | 通常表决权 | 分配与清算 | 转换边界 |
|---|---|---|---|
| Alphabet Class A（GOOGL） | 每股 1 票 | 按条款参与分红；清算剩余位于债务及适用优先权之后 | 不可由持有人换成其他类别 |
| Alphabet Class B | 每股 10 票 | 与 A 的相应经济分配权相同 | 可选择按 1:1 转为 A；转让一般触发转换，但有约定例外 |
| Alphabet Class C（GOOG） | 通常无表决权，法律要求的情形除外 | 按相应条款参与分配；清算有先转换的程序 | 一般不可转换；在清算分配或确定分配对象的登记日两者较早发生前，先按 1:1 转为 A |

B 的例外不是一句“内部转让都可以”。原说明列有受条件约束的创始人之间转让、某些税务或遗产规划转让，以及符合条件的实体分配等。C 的“通常无投票权”也不能改写成“任何情况下都没有投票权”。因此，“三类经济权利相近”不能替代这张程序表。[^MBC-02]

假设分别持有 A、B、C 各 100 股，在一般表决事项中对应 100、1,000、0 票。这里的票数演算没有改变三类每股分配条款，也没有推出三类市场价格应该相等。表决影响、可转让性和市场供求是否进入价格，是另一个需要证据的问题。

<a id="case-mb-apple-2025"></a>

再看 Apple 截至 2025 年 9 月 27 日的证券说明：其普通股一股一票，股息取决于董事会依法宣派；普通股没有优先认购、转换或约定赎回权。它适合作为**单一普通股类别**的对照，但同一附件还列出债券，不能写成“Apple 只有一种证券”。该文件的公司法框架是加州法，Alphabet 说明采用特拉华法框架，我们不把两者条款交叉套用。[^MBC-03]

现在回到开头：无普通表决权并不等于没有股权经济利益；有股息分配权，也不等于公司以后每季固定欠你一笔利息。**已经宣派的一次分红，与对未来分红的政策意向，是不同对象。**

<a id="case-mb-alphabet-2025"></a>
<a id="m05-share-bridge"></a>
## 三、回购了多少，不等于股数净减少多少

股份权利不是静止不变的分母。我们先读实际股数，再讨论每股量，顺序不要倒过来。

Alphabet 2025 年权益变动表给出的股数桥如下，单位为**百万股**，沿用报表列示精度：[^MBC-01]

| 2025 年股数桥 | 百万股 |
|---|---:|
| 年初已发行在外 | 12,211 |
| 当年发行 | +117 |
| 回购并随后注销 | −240 |
| 年末已发行在外 | 12,088 |

于是 $12{,}211+117-240=12{,}088$。回购是 240 百万股，全年净减少却是 **123 百万股**。若只把回购数量拿去除以年初股数，就会漏掉当年新增股份。这张桥使用时点在外股数，不是计算每股收益时使用的期间加权平均股数，更不是自动包含全部潜在稀释的分母。

接着看钱。Note 11 的回购表列 A/C 分别回购 37/203 百万股、金额 6,501/38,897 百万美元，合计 **240 百万股、45,398 百万美元**；表下注明其中的 *shares repurchased* 包括未交收回购。同年现金流量表“Repurchases of stock”另行列示期间现金支付 **45,709 百万美元**。[^MBC-01]

这两个金额回答的问题不同：45,398 是 **Note 11 回购表列示金额**，45,709 是现金流量表中的**期间现金付款**。差额是 311 百万美元，但也不能只凭这两个数，就把差额全部命名为某一笔年末未交收款；完整衔接还需要期初、期末未交收项目及相关调整。它们更不是两笔可以相加的回购支出。读材料时最重要的动作是：**先写清股数、表格身份、期间现金付款和交收状态，再做股数或现金桥。**

回购授权、实际成交和实际付款也应分开。授权允许公司在相应范围内行动，不等于已经把资金花完。下面的模型刻意设定“交易立即按给定价格完成并交收”，正是为了把真实披露中的时间差暂时拿开，单独看每股机制。

<a id="m05-share-count"></a>
## 四、增发与回购：分子、分母、现金约束一起变化

设有一家**完全虚构的单类别公司**。它的权益经济价值为 $V_0=1{,}000{,}000$ 美元，其中可动用现金 $C_0=150{,}000$ 美元，在外股数 $N_0=100{,}000$ 股，所以教学每股经济价值 $v_0=V_0/N_0=10$ 美元。

这里的 $V_0$ 既不是账面净资产，也不是已经观察到的市值；它只是模型给定的经济价值，包含现金。模型假设非现金部分不变，每进入或离开一美元现金，权益经济价值就相应变化一美元。没有税费、债务融资、交易冲击或信息效应。为了让这个简化模型自洽，取 $0\le C_0\le V_0$，数量为非负整数，交易价 $p>0$。

**增发。** 公司按每股 $p$ 收取现金并发行 $q$ 股：

$$
V_{\mathrm{issue}}=V_0+pq,\qquad
C_{\mathrm{issue}}=C_0+pq,\qquad
N_{\mathrm{issue}}=N_0+q.
$$

从增发后的每股量减去 $v_0$，通分就得到

$$
v_{\mathrm{issue}}-v_0
=\frac{V_0+pq-v_0(N_0+q)}{N_0+q}
=\frac{q(p-v_0)}{N_0+q}.
$$

旧股东的持股比例确实下降，但经济价值分子同时收到资金。因此，“比例被稀释”和“每股经济价值下降”不是同一句话。以下每行都从同一个初始状态开始，不是连续执行：

| 增发 20,000 股的价格 | 公司现金（美元） | 权益经济价值（美元） | 在外股数 | 每股经济价值（美元） |
|---:|---:|---:|---:|---:|
| 8 | 310,000 | 1,160,000 | 120,000 | 9.6667 |
| 10 | 350,000 | 1,200,000 | 120,000 | 10.0000 |
| 12 | 390,000 | 1,240,000 | 120,000 | 10.3333 |

**回购。** 公司从愿意出售的股东那里买回并注销 $q$ 股，无外部融资时必须先满足

$$
pq\le C_0,\qquad 0\le q<N_0.
$$

第一条保证有钱付款；第二条保证本篇讨论的“剩余每股价值”仍有分母。$V_0-pq\ge0$ 不是付款能力的替代条件：价值可能在业务里，而不是随时可付的现金。满足约束后才写

$$
V_{\mathrm{repurchase}}=V_0-pq,\quad
C_{\mathrm{repurchase}}=C_0-pq,\quad
N_{\mathrm{repurchase}}=N_0-q,
$$

以及

$$
v_{\mathrm{repurchase}}-v_0
=\frac{q(v_0-p)}{N_0-q}.
$$

| 回购 10,000 股的价格 | 公司现金（美元） | 权益经济价值（美元） | 在外股数 | 每股经济价值（美元） |
|---:|---:|---:|---:|---:|
| 8 | 70,000 | 920,000 | 90,000 | 10.2222 |
| 10 | 50,000 | 900,000 | 90,000 | 10.0000 |
| 12 | 30,000 | 880,000 | 90,000 | 9.7778 |

钱付给了**出售股票的股东**，没有直接打进剩余股东的银行账户。剩余股东的股数不变，但面对更小的公司价值和更小的总股数。例如一直持有 1,000 股的人，在第一行的比例从 1% 变成约 1.11%，其教学权益值由 10,000 变成约 10,222.22 美元；卖出者则取得合计 80,000 美元。无摩擦模型中，“回购后剩余权益价值 920,000＋卖出者所得 80,000＝原权益价值 1,000,000”，没有凭空造出总价值。

注意，模型里的 $v_0$ 是预先给定的，不是通过公式证明出来的正确估值。因此 $p<v_0$ 的演算并不证明某家真实公司正在低估回购，更不能据此预测股价必涨。

<div data-experiment-slot="EXP-MB-M05-CAPITAL"></div>

**动手检验。** 先比较三个价格，再保持 $V_0=1{,}000{,}000$ 不变，把可动用现金降到 60,000。按 8 美元回购 10,000 股需要 80,000，差 20,000。此时应停在“交易无法按设定完成”，而不是照样展示回购后的 10.2222 美元。经济上的条件结果不能冒充已完成的资金路径。

<a id="m05-dividends"></a>
## 五、分红：钱从公司转到股东，不是白送一段收益

Alphabet 年报披露，2025 年 4 月季度股息提高到每股 0.21 美元；未来季度分红仍须董事会审议批准。这个有日期的披露既说明现金分配真实存在，也提醒我们把已宣派事项和未来意向分开。[^MBC-01]

为看清分配本身，仍从虚构公司的原始状态出发，设立即宣派并支付每股 $d=0.21$ 美元，符合本例现金约束 $dN_0\le C_0$。总支付 21,000 美元，现金变为 129,000，权益经济价值变为 979,000，股数仍为 100,000，剩余每股价值为 9.79 美元。

持有 10 股的人，分配后拥有的组合是

$$
10\times9.79+10\times0.21=97.90+2.10=100.00.
$$

这是一条**现金守恒的教学关系**，不是 Alphabet 某个实际除息日的价格记录。若现实中的除息与付款分开，股东在收到现金之前可能持有相应的分配请求权；从请求权变成现金时，不能再把公司价值重复扣一次。税费、业务变化和市场重新定价则可能改变实际结果。

因此，看持有回报不能只看股价涨跌。若期间持股不变、只发生一次现金分配、暂不计税费，则从买入价 $P_0$ 到期末价格 $P_1$ 的回报为 $(P_1-P_0+d)/P_0$。这里的 $P$ 是交易价格，不是前面的教学经济价值 $v$；先分清两者，才不会把一个守恒演算写成市场价格预测。

回到制度差异：按本例分红，所有符合条件的股份取得现金；回购的钱则付给出售股份的一方，未出售者通过剩余股数与价值的变化参与结果。二者都可能把公司资金交给股东，但路径并不相同。

<a id="m05-exercises"></a>
## 六、拿走原文以后，你能独立重建什么？

### 题一：权利不只有投票

有人说：“Class C 没有投票权，所以清算时什么也分不到；B 股任何转让都会变成 A。”指出两句话的具体错误。

**解析。** C 通常没有表决权，但有法律要求的例外；清算条款还规定在相关分配或登记日前先按 1:1 转为 A，再依剩余分配条款参与。第二句把一般转让触发规则说成无例外，遗漏了原文件列出的若干受条件约束的转让。正确答案不只是“说得太绝对”，而要指出应回到 Voting、Liquidation、Conversion 哪一个单元。[^MBC-02]

### 题二：回购数量和付款能直接互换吗？

使用上文 2025 年材料，分别回答净股数变化、Note 11 回购总数与金额、以及现金流量表现金支付。能否把 45,398 和 45,709 相加？能否把差额 311 全部认定为期末未交收回购？

**解析。** 净减少为 $12{,}211-12{,}088=123$ 百万股；Note 11 回购表列出 240 百万股、45,398 百万美元，而现金流量表列示期间付款 45,709 百万美元。由于当年同时发行 117 百万股，240 百万股也不能直接当成净股数减少。45,398 与 45,709 属于不同报表位置和现金/交收身份，不是两笔独立支出，不能相加；差额本身也不足以完整识别期末未交收额，还需要跨期衔接。[^MBC-01]

### 题三：有价值，却付不起回购款

保持 $V_0=1{,}000{,}000$、$N_0=100{,}000$，设现金只有 60,000。公司拟按 8 美元回购 10,000 股。请先判断可行性，再回答原来持有 1,000 股的股东是否可以据此说自己的权益已升到约 10,222.22 美元。

**解析。** 付款为 80,000，现金不足 20,000。模型没有借款、出售业务或外部注资，因此交易不能按设定完成，股东仍面对原状态；10,222.22 只是“交易已经完成”的条件计算。即使剩余经济价值为正，也不能越过现金约束。相反，把现金改成恰好 80,000 时，这次交易可行，交易后现金为零；模型的可行不等于现实中留下零现金一定合适。

### 题四：用 Apple 做一次迁移

仅根据 Apple 普通股单元，能否说公司每次发新股时，原股东都有自动按比例优先认购权？再在虚构公司中按每股 12 美元增发 20,000 股，说明一位一直持有 1,000 股者的比例和教学权益值怎样改变。

**解析。** Apple 的说明明确普通股没有这种优先认购权，不能把别处的制度搬过来。[^MBC-03] 虚构公司的旧股东比例从 1% 降至 $1{,}000/120{,}000\approx0.8333\%$，但每股教学价值升至约 10.3333 美元，1,000 股对应约 10,333.33 美元。比例下降不自动等于经济价值下降，原因是新投资者把 240,000 美元交给了公司。

### 题五：分配后只剩 97.90，是亏损吗？

一位股东的 10 股从教学价值 100 美元变成 97.90，同时取得 2.10 美元分红。另一位股东说“价格跌了 2.1%，所以分红没有意义”。你会怎样改写？

**解析。** 首先补上股东收到的现金，合计仍为 100。模型说明分配本身不创造总财富，但把资金从公司移到股东手上，现金可支配主体已经改变。是否分配以及分配方式是否合适，还须看经营需要、税费和投资机会；这些没有被守恒式一并回答。

读一份新股票材料时，就重复本篇的次序：先列权利，再对齐股数与现金的时间口径，最后在清楚的假设与资金约束下讨论每股结果。

[^MBC-01]: Alphabet Inc., *2025 Form 10-K*，期间截至 2025-12-31。[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。定位：Note 11 印刷 pp.78–79；权益变动表 p.51 的 2025 行；现金流量表 p.52 融资活动；Exhibit Index 4.41。数值按原表百万单位；本篇没有把该年报当作 2026 年全部中期变更的汇总。
[^MBC-02]: Alphabet Inc., *Description of Securities*，2023 提交的 Exhibit 4.20，被上述年报 4.41 援引。[原文](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm)。定位：Voting Rights、Dividends、Liquidation Rights、Conversion、Equal Status；B 转换例外应与相应条件一并阅读。它是证券说明，具体权利仍受所援引章程等文件约束。
[^MBC-03]: Apple Inc., *Description of the Registrant’s Securities*，截至 2025-09-27，Exhibit 4.1。[原文](https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/a10-kexhibit4109272025.htm)。定位：开头证券范围及 Description of Common Stock 至 Listing，尤其 Voting Rights、Dividends、Right to Receive Liquidation Distributions、No Preemptive or Similar Rights。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MB-M05-CAPITAL",
    "title": "现金、股数与每股经济价值",
    "anchor": "m05-share-count",
    "description": "固定真实权利卡与可调的独立合成公司；先验证现金、股数和数值域，再演算发行/回购/分配。",
    "data_identity": "synthetic numeric experiment; separate reported rights snapshots",
    "inputs": {
      "source": "shared_inputs.json: capital_default / capital_tables / rights",
      "fields": [
        {
          "key": "V",
          "unit": "USD economic equity value including cash",
          "default": 1000000,
          "range": "0<V<=1e12"
        },
        {
          "key": "C",
          "unit": "USD available company cash",
          "default": 150000,
          "range": "0<=C<=V"
        },
        {
          "key": "N",
          "unit": "outstanding shares",
          "default": 100000,
          "range": "integer 1..1e9"
        },
        {
          "key": "action",
          "values": [
            "issue",
            "repurchase",
            "dividend"
          ],
          "default": "repurchase"
        },
        {
          "key": "q",
          "unit": "shares",
          "default": 10000,
          "range": "integer 0..1e9; repurchase q<N"
        },
        {
          "key": "p",
          "unit": "USD/share transaction price",
          "default": 8,
          "range": "p>0; p*q<=1e12"
        },
        {
          "key": "d",
          "unit": "USD/share distribution",
          "default": 0.21,
          "range": "d>=0"
        },
        {
          "key": "h",
          "unit": "retained shares",
          "default": 1000,
          "range": "integer 0..min(N,N_after)"
        }
      ],
      "identity": "V,C,N,p,q,d,h are teaching assumptions, not Alphabet/Apple market values"
    },
    "algorithm": {
      "issue": [
        "payment=p*q",
        "V1=V+payment",
        "C1=C+payment",
        "N1=N+q",
        "delta=q*(p-V/N)/(N+q)"
      ],
      "repurchase": [
        "require q<N and p*q<=C",
        "V1=V-p*q",
        "C1=C-p*q",
        "N1=N-q",
        "delta=q*(V/N-p)/(N-q)"
      ],
      "dividend": [
        "require d*N<=C",
        "V1=V-d*N",
        "C1=C-d*N",
        "N1=N",
        "holder_total=h*(V1/N)+h*d"
      ],
      "execution": "failed feasibility produces after:null, not a funded completion; no financing"
    },
    "outputs": {
      "default": {
        "status": "calculated",
        "V1": 920000,
        "C1": 70000,
        "N1": 90000,
        "per_share": 10.222222222222221,
        "retained_value": 10222.222222222223
      },
      "cash_stress": {
        "C": 60000,
        "required": 80000,
        "shortfall": 20000,
        "status": "blocked",
        "after": null
      },
      "dividend": {
        "V1": 979000,
        "C1": 129000,
        "N1": 100000,
        "per_share": 9.79,
        "h": 10,
        "holder_total": 100
      }
    },
    "boundaries": [
      "No negative/nonfinite inputs or fractional shares",
      "C is included in V; this is model assumption, not all corporate balance sheets",
      "zero q identity; q=N is outside remaining-share model",
      "all post-value/cash/share results remain in finite range",
      "retained holder cannot exceed remaining shares; cash exactly equal requirement allowed",
      "read-only real rights do not change with synthetic price"
    ],
    "static_equivalent": {
      "reader_anchor": "m05-share-count",
      "tables": "six issue/repurchase rows in reader; rows reset to same initial state",
      "stress": "cash 60,000 cannot finance 80,000; gap20,000",
      "distribution": "m05-dividends:97.90+2.10=100",
      "chart": "x transaction price4..16, y model per-share value; only feasible points; dashed initial V/N, not a market price forecast"
    },
    "ui": {
      "keyboard": "labelled number/select inputs and native buttons",
      "mobile": "single-column controls, local table scroll only",
      "print": "all sections and static equivalents",
      "offline": "no network; standalone includes shared data and same engine"
    }
  }
]
```

## Sources
- [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): 2025 股本、Note 11 回购表、股息与现金流付款；回购表列金额与期间付款分别读取，shares repurchased 的未交收脚注不单独解释两表差额。
- [Description of Securities — Exhibit 4.20](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm): A/B/C的表决、分配、清算与转换；C清算程序和B转换例外不可省略。证券说明仍受援引章程等约束。
- [Description of the Registrant's Securities — Exhibit 4.1](https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/a10-kexhibit4109272025.htm): 单一普通股类别对照；一股一票、条件分配、剩余清算及无优先认购/转换/赎回权。不是只有一种证券。

## Content relations
```json
[
  {
    "from": "zh-m05",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m05",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能识别发行主体、持有人、权利事项、时间和单位",
    "reason": "将权利卡落到具体股份类别",
    "status": "external_delivered"
  },
  {
    "from": "zh-m05",
    "relation": "illustrated_by",
    "to": "case-mb-alphabet-2025",
    "reason": "类别权利和有日期的回购/股数/现金桥"
  },
  {
    "from": "zh-m05",
    "relation": "illustrated_by",
    "to": "case-mb-apple-2025",
    "reason": "单一普通股类别的迁移材料"
  },
  {
    "from": "m05-share-count",
    "relation": "illustrated_by",
    "to": "EXP-MB-M05-CAPITAL",
    "reason": "现金和股数约束必须先于每股结果"
  },
  {
    "from": "m05-share-classes",
    "relation": "supported_by",
    "to": "MBC-01",
    "reason": "该处原始材料支持",
    "locator": "Exhibit Index 4.41",
    "scope": "2025年报到2023权利说明的引用链"
  },
  {
    "from": "m05-share-classes",
    "relation": "supported_by",
    "to": "MBC-02",
    "reason": "该处原始材料支持",
    "locator": "Voting Rights/Dividends/Liquidation/Conversion/Equal Status",
    "scope": "类别权利、例外与程序"
  },
  {
    "from": "m05-share-classes",
    "relation": "supported_by",
    "to": "MBC-03",
    "reason": "该处原始材料支持",
    "locator": "Description of Common Stock至Listing",
    "scope": "Apple一股一票、无优先认购等"
  },
  {
    "from": "m05-share-bridge",
    "relation": "supported_by",
    "to": "MBC-01",
    "reason": "该处原始材料支持",
    "locator": "Note11 pp78–79；权益变动表p51；现金流p52",
    "scope": "股数桥与含未交收口径/现金付款"
  },
  {
    "from": "m05-dividends",
    "relation": "supported_by",
    "to": "MBC-01",
    "reason": "该处原始材料支持",
    "locator": "Note11 Cash Dividends",
    "scope": "2025年分红披露及未来董事会决定"
  },
  {
    "from": "case-mb-alphabet-2025",
    "relation": "supported_by",
    "to": "MBC-01",
    "reason": "本例有日期的原始材料",
    "locator": "Note 11 pp.78–79；权益变动表p.51；现金流p.52融资行；Exhibit Index 4.41",
    "scope": "2025年报股数桥、Note11回购表/脚注与现金流付款分别读取；未核尽2026中间期"
  },
  {
    "from": "case-mb-alphabet-2025",
    "relation": "supported_by",
    "to": "MBC-02",
    "reason": "本例有日期的原始材料",
    "locator": "Voting Rights; Dividends; Liquidation Rights; Conversion; Equal Status",
    "scope": "2025年报股数桥、Note11回购表/脚注与现金流付款分别读取；未核尽2026中间期"
  },
  {
    "from": "case-mb-apple-2025",
    "relation": "supported_by",
    "to": "MBC-03",
    "reason": "本例有日期的原始材料",
    "locator": "Description of Common Stock 至 Listing",
    "scope": "普通股单元，不是债券研究"
  }
]
```

## Related entries

## Optional reading path
理解合约与市场机制: step 5/17
读股份条款，区分公司现金、股数与股东每股所得。
再把公司股份与基金份额比较，区分底层资产、净值和二级交易价格。
Next: [基金、ETF与指数](https://ou-liu-red-sugar.github.io/zh/notebook/funds-etfs-indexes/)
