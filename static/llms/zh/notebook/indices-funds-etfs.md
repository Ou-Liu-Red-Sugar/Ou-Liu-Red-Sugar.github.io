# 指数、基金与 ETF

从 10,000 美元买入 VOO 出发，看这笔钱怎样按指数权重分到各家公司，再认识等权与再平衡、基金净值、ETF 的场内价格、主动与主题管理以及各项费用。

网页 / HTML: [指数、基金与 ETF](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/)

语言 / Language: zh · 更新 / Revised: 2026-10-12

[《股票、公司与股价》](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)和[《股东回报：分红、回购与增发》](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)都跟着同一笔 100 股 AAPL，钱只放在一家公司上。换一种买法，用 10,000 美元买入 Vanguard S&P 500 ETF（VOO），同一笔钱就会经过基金分到约 500 家美国公司。按 VOO 在 2026 年 6 月 30 日的持仓比例，NVIDIA（NVDA）分到约 750 美元，AAPL 约 660 美元；持仓最多的十家公司合计约 3,790 美元，其余持股合计约 6,210 美元。[^voo-sheet]

10,000 美元买入 VOO，按持仓比例分到各公司

2026 年 6 月 30 日 · 按占基金净资产比例换算

10,000 美元按 VOO 2026 年 6 月 30 日的持仓比例换算：前十大持股公司合计 37.9%，约 3,790 美元；其余持股合计 62.1%，约 6,210 美元。

前十大持股公司分到的金额：NVDA 约 750 美元；AAPL 约 660 美元；Alphabet（GOOGL 与 GOOG 合并）约 580 美元；MSFT 约 430 美元；AMZN 约 360 美元；AVGO 约 280 美元；MU 约 200 美元；META 约 190 美元；TSLA 约 180 美元；LLY 约 150 美元。NVDA、AAPL、MSFT、AVGO 和 MU 属于信息技术，合计约 2,320 美元。

信息技术：半导体 其他信息技术 通信服务 其他行业

**金额为 10,000 美元乘以各公司占 VOO 净资产的比例，忽略费用和买卖价差；GOOGL 与 GOOG 按 Alphabet 一家合并。[基金资料](https://fund-docs.vanguard.com/F0968.pdf) · [图表输入](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)。**

这些股票并不在我们自己的账户里。我们持有的是 VOO 的基金份额，VOO 持有这些公司的股票；股价的涨跌和公司派发的股息先进入基金资产，再体现在每份 VOO 上。钱分到了约 500 家公司，却没有平均分开：前十家拿走了将近四成，其中 NVDA、AAPL、MSFT、AVGO 和 MU 属于信息技术行业，合计约 2,320 美元；按行业统计，整只基金有 38.0% 投在信息技术上，约合 3,800 美元。

即使分属不同行业，这些公司仍可能依赖相近的客户、需求和资金条件，研究集中度时也要考虑这些共同影响（公司与行业是两个观察维度，比例不能相加。VOO 原表将 Alphabet 的 GOOGL 与 GOOG 合并为一家公司；各行取整后相加为 37.8%，前十合计保持源表公布的 37.9%。图中为基金持仓权重，时点固定为 2026 年 6 月 30 日）。

VOO 给 NVDA 的钱多、给其他公司的钱少，依据的是它跟踪的指数：VOO 以取得接近 S&P 500 的回报为目标，这些比例来自 S&P 500 的选样和加权规则。[^voo-prospectus]

## 指数的定义与样本 {#nb-v01-index}

股票指数是衡量一组股票整体表现的指标。编制者按照规则选择股票、分配权重，再把这些股票的价格变化汇总成可以连续记录的指数点位，各只股票的涨跌就汇成了一条走势。新闻里说 S&P 500 上涨，便是在用这项指数描述它所代表的那部分市场。

不同指数观察的范围各有侧重。S&P 500 由 S&P Dow Jones Indices 编制，主要反映约 500 家美国大盘公司；MSCI 编制的 MSCI World 覆盖 23 个发达市场的大盘和中盘股票，包括美国、日本、英国等市场。[^sp-method]，[^msci] MSCI World 的名称容易让人联想到全球股票市场，但它只覆盖发达市场，不包括新兴市场（范围采用 2026 年 8 月 31 日官方资料，覆盖各市场约 85% 的自由流通调整后市值。市场归类依照指数的分类口径；公司被纳入哪个市场，与它在世界各地经营、取得收入的范围，是不同的观察维度）。

要反映这部分市场，编制者就要按规则选出参与计算的股票。S&P 500 会考察公司所属市场、规模、可交易股份、流动性和盈利等条件，再由指数委员会作出选择，并不直接按市值排名截取前五百家；公司状况和市场发生变化，成分名单也会随之调整。[^sp-method]

指数点位把这些股票的表现连续记录下来，我们通常比较的是同一指数的变化幅度。不同指数各有基期和计算方法，单凭点位高低不能判断哪个市场更贵（价格指数主要记录价格变化；总回报指数还将分红及其再投资计入，税前、税后口径又可能不同。拿基金回报与指数比较时，应匹配分红、币种、期间和费用口径；公司拆股、成分变更等也需依方法调整计算，避免把计量变化当成市场涨跌）。[^index-math]

## 市值加权、等权与再平衡 {#nb-v01-weights}

选出成分以后，还要规定每只股票在计算中占多大比重，也就是权重。同样幅度的涨跌，权重越大的股票对指数的影响就越大。S&P 500 采用自由流通市值加权，可供公众投资的股份对应的市值越大，权重越高；VOO 按这套权重持股，所以自由流通市值最大的 NVDA 分到的钱也最多。[^sp-method]

同一组公司也可以换一种分法。S&P 500 等权指数采用相同的成分，按季度把各家公司调回相同的目标权重，通常每家约占 0.2%。如果用同样的 10,000 美元买入跟踪它的 Invesco S&P 500 Equal Weight ETF（RSP），在调整当日，NVDA 和规模最小的成分公司各分到约 20 美元。[^equal]，[^rsp]

这种按规则把权重调回目标的操作称为再平衡。等权规定的是调整那一天的比例；在两次再平衡之间，股价的涨跌仍会让权重偏离目标。

我们先把数量缩小到四只股票，观察这个过程。两种方式都投入 10,000 美元，市值加权的起点为 40%、30%、20%、10%，等权的起点则各为 25%。把图从“再平衡日”切到“期间价格变化”，就能看到同样的涨跌怎样改变两组权重。

同一组股票 · 两种权重规则

### 从等权开始，随价格漂移，再按期调回

期间 A 的涨跌幅+40.0%

**股票 A **股票 B **股票 C **股票 D

市值加权 **10,000 美元**

40.0% 30.0% 20.0% 10.0%

等权 **10,000 美元**

25.0% 25.0% 25.0% 25.0%

市值加权 · 区间收益 **0.0%**

等权 · 区间收益 **0.0%**

起点：两种方式各投入 10,000 美元。市值加权按 40% / 30% / 20% / 10% 分配，等权各占 25%。

**设定 B 下跌 10%，C 不变，D 上涨 10%；成分股数及可交易比例保持不变。四只股票用来单独观察权重机制，忽略分红、税费和交易成本。[默认情形与计算数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv)。**

默认设定中，A 上涨 40%，B 下跌 10%，C 不变，D 上涨 10%。等权组合的总价值由 10,000 美元增加到 11,000 美元，回报为 10%，A 的权重也从 25% 上升到约 31.8%；市值加权组合起初给了 A 更多资金，同样的价格变化便带来了 14% 的回报。股票相同，起始权重不同，结果也就不同。

到了下一次再平衡日，等权组合要把 A 的金额从 3,500 美元降到 2,750 美元，同时补足其他低于目标的部分，才重新回到各占 25%。忽略费用，这次调整后总价值仍为 11,000 美元，此后的涨跌按新的权重影响组合。市值加权组合不需要这样调回：上涨的股票市值变大，权重随之升高，不必卖出；少数公司的股价持续上涨时，资金就会越来越集中在它们身上。

实际的 S&P 500 等权指数在 3、6、9、12 月按季度再平衡，期间权重会随着行情漂移。我们读等权基金的持仓表时，也要把披露日期与再平衡安排放在一起看（指数按公司分配等权目标；同一家公司若有多个符合条件的股类，其合计对应一家公司的份额。实际方法的定权参考日与调整生效日存在间隔，价格在这期间也可能变化。上图为了单独展示漂移与调回，采用在指定时点立即恢复目标比例的简化设定）。[^equal]

等权会降低最大几家公司的比重，但行业权重仍与各行业入选的公司数量有关，并不会自动变成行业等权。选择加权规则，也就选择了资金在公司和行业之间怎样分布。

## 基金份额与净值 {#nb-v01-nav}

基金把投资者的资金集合起来，由基金管理人按照约定的目标投资；具体投向可以是股票、债券或其他资产，取决于产品规定的范围。开头那 10,000 美元买到的是 VOO 的基金份额。一份值多少钱，可以从基金拥有的资产算起：把股票、现金等资产的价值加起来，扣除基金的负债，得到基金净资产；再除以总份额，就是每份净值，通常记作 NAV：[^nav]

\[
\text{每份净值}=\frac{\text{基金资产}-\text{基金负债}}{\text{基金总份额}}.
\]

假设一只基金在某一时点有资产 101 万美元、负债 1 万美元，共 10 万份，那么净资产就是 100 万美元，每份净值为 10 美元。按这个净值，10,000 美元对应 1,000 份：

从基金资产到一笔持仓的净资产价值

**101 万美元** 基金资产

基金资产 101 万美元减去负债 1 万美元，得到净资产 100 万美元。

**100 万美元** 基金净资产

净资产 100 万美元除以总份额 10 万份，每份净值为 10 美元。

**10 美元** 每份净值（NAV）

持有 1,000 份，对应的净资产价值为 10,000 美元。

**10,000 美元** 这笔持仓对应的净资产

持有期间，资产价格的涨跌、基金取得的收入及承担的费用都会改变净值；基金向持有人分配现金时，净值也会相应下调。比如每份分配 0.20 美元，在其他价值不变时，净值由 10 美元降至 9.80 美元，1,000 份收到 200 美元现金，份额对应的资产价值则从 10,000 美元降到 9,800 美元。比较这段持有结果，就要把净值变化与收到的现金放到一起看（NAV 有时指基金总净资产，报价页面通常展示每份 NAV，计算时需辨认分母。上述金额为同一时点的设定，现金分配例忽略同期市场变化和投资者税费）。

## 场内买卖与场外申赎 {#nb-v01-trading}

净值说明每份基金对应多少资产，实际买入时付多少钱，还要看份额怎样交易。交易所交易基金（ETF）是份额可以在交易所买卖的基金，VOO 就属于这一类；美国常见的开放式共同基金则通过申购和赎回买卖份额。申购共同基金时，申请交给基金或销售机构，按收到有效申请后下一次计算的净值成交，盘中提交的申请要等相应净值算出才知道价格；退出时向基金赎回份额，由基金支付对应款项。在交易所买入 ETF 时，订单经券商送到市场，按与卖方成交的价格买入；退出时把份额卖给其他投资者。[^fund-structure]

ETF 的市场价格由买卖双方的出价决定，基金持有的资产则决定净值，两者可能出现差距：市价高于净值称为溢价，低于净值称为折价。假设某时点一份 ETF 对应的资产价值估算为 10 美元，市价为 10.10 美元，同样的 10,000 美元按市价买到的份额就比按净值成交少：

同样 10,000 美元，按净值与按市价成交

每份资产价值均设为 10 美元

按净值成交：10,000 美元按每份净值 10 美元买入 1,000 份，这些份额对应的资产价值为 10,000 美元。

按市价成交：10,000 美元按市价 10.10 美元买入约 990 份，这些份额对应的资产价值约 9,901 美元，约 99 美元付给了 1% 的溢价。

**不计佣金、销售费用和买卖价差；溢价例中的资产价值为同一时点的估算。**

即使底层股票的价格不变，溢价之后收窄，这约 99 美元也会相应变成亏损；以折价买入则相反，同样的钱能多买到一些资产。ETF 的申购、赎回机制把场内份额与基金资产联系起来，会压缩这类差距。能够直接与基金进行大额申赎的机构称为授权参与商（AP），差价足以覆盖成本时，AP 可以分别采取以下交易：[^etf]

AP 怎样把份额与资产连起来

**场内投资者** 在交易所买卖份额

ETF 市价高于相应资产价值时，AP 在场内把新份额卖给投资者，收取成交款。

**AP** 授权参与商

AP 向基金交付规定的证券篮子，换取新的 ETF 份额。

**基金** 创设或赎回份额

**市价高于资产价值** ：AP 换取新份额再卖出，场内份额供给增加，市价向资产价值回落。

**场内投资者** 在交易所买卖份额

ETF 市价低于相应资产价值时，AP 在场内向投资者买入份额，支付成交款。

**AP** 授权参与商

AP 把买入的份额交回基金赎回，取得相应的证券篮子。

**基金** 创设或赎回份额

**市价低于资产价值** ：AP 场内买入再赎回，增加买入需求，赎回后份额减少，市价向资产价值回升。

**差价足以覆盖成本时，AP 才有动力这样交易。**

这两条路径让份额与资产可以相互转换，促使市价向对应的资产价值靠拢（图中采用实物申赎的简化路径，实际篮子也可能包含现金，部分产品使用现金申赎。正式 NAV 通常在日终计算，盘中例子用的是同期资产价值估算；海外市场休市、交易成本和对冲条件会影响套利空间，因此价差仍可能存在）。

## 指数跟踪、主动管理与主题投资 {#nb-v01-management}

同样在交易所买卖的 ETF，管理方式和投资范围可以很不一样。VOO 和 RSP 跟踪同一组公司的两种加权规则；iShares MSCI World ETF（URTH）跟踪 MSCI World，把范围扩展到多个发达市场。MSCI 负责制定和维护指数，基金管理人则根据跟踪目标组织实际投资。这种主要依据指数规则调整持仓的方式称为被动管理，管理人仍要买卖股票、安排现金，并处理相应成本。[^rsp]，[^urth]

另一种做法是由管理人根据研究和判断来选择持仓，也就是主动管理。Capital Group Dividend Value ETF（CGDV）重视能够提供收入与增长机会的股票，投资目标包括争取高于美国股票平均水平的收入收益率，以及资本增值；它把 S&P 500 作为主要业绩比较基准，组合可以和指数很不一样。看到基金列出一个指数时，我们还要分清它以跟踪这个指数为投资目标，还是只拿它比较业绩。[^cgdv]

投资范围也可以收窄到某个行业或主题。Roundhill 旗下的 CHAT 投资生成式 AI 与科技，涉及平台、基础设施与软件，持有 NVDA；HUMN 围绕人形机器人，持有 Tesla（TSLA）；OZEM 围绕 GLP-1 与减重产业，持有 Eli Lilly（LLY）。这三只基金都采用主动管理（例中持仓采用发行人标注的 2026 年 6 月 30 日数据；HUMN 官网以 TSLA 的 Optimus 说明相关研发方向）。[^roundhill] 把本篇提到的基金按管理方式和投资范围放在一起：

管理方式与投资范围是两个维度

按指数规则管理、覆盖广泛市场：VOO 跟踪 S&P 500 市值加权，RSP 跟踪 S&P 500 等权，URTH 跟踪 MSCI World。由管理人选股、覆盖广泛市场：CGDV 重视收入与增长，以 S&P 500 为业绩比较基准。由管理人选股、集中于某个主题：CHAT 生成式 AI，HUMN 人形机器人，OZEM GLP-1 与减重。按指数规则管理、集中于某个主题的基金本篇没有举例。

**列看管理人怎样决定持仓，行看资金主要投向哪里。持仓例按发行人标注的 2026 年 6 月 30 日数据。**

主题基金让我们把对某种产业变化的判断落实为投资，资金也就集中到了依赖这一主题的公司上。以 CHAT 为例，企业增加生成式 AI 投入时，对计算基础设施和软件服务的需求都可能增加；投入放缓时，这些不同环节也可能同时受到影响。持有多家公司的主题基金，因而也会集中承受同一种需求变化。

## 基金费用与投资者所得 {#nb-v01-fees}

通过基金投资，我们把选股、交易和日常管理交给管理人，也要为此付费。持有期间持续发生的费用里，管理费支付给基金管理人，基金还可能承担其他运营费用；产品文件会把这些持续费用汇总为年度总费用率，按平均净资产的一定比例表示。[^fee-rules] VOO 的年度总费用率为 0.03%，其中管理费 0.02%、其他费用 0.01%；CGDV 为 0.33%，CHAT 为 0.75%（三项费率分别取自 2026 年 4 月 28 日、2026 年 8 月 1 日和 2026 年 8 月 27 日的产品文件；CGDV 与 CHAT 的费率全部为管理费，其他费用为 0.00%）。 同样 10,000 美元放在 VOO 里，每年的持续费用约 3 美元；放在 CGDV 和 CHAT，则分别约为 33 和 75 美元，实际金额会随基金资产价值变化。[^voo-prospectus]，[^cgdv]，[^chat-fee]

这些费用通常直接从基金资产中扣除，已经反映在净值里，我们未必会在证券账户里看到单独扣款。扣去的资金也就不能继续投资，持有时间越长，费用造成的差距越容易累积：

与年度费用率 0.03% 相比，少留下的金额

0.33% 0.75%

本金 10,000 美元、费用前年收益 6% 时，年度费用率 0.33% 和 0.75% 与 0.03% 相比：第 5 年分别少 199 和 474 美元；第 10 年分别少 529 和 1,245 美元；第 15 年分别少 1,052 和 2,451 美元；第 20 年分别少 1,860 和 4,291 美元。

20 年后，三档费用率分别留下 31,879、30,020 和 27,588 美元。

**本金 10,000 美元，三档采用同样的费用前年收益 6%，每年末按资产扣除相应比例，金额单位为美元，不代表三只实际基金的业绩。[查看计算数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv) · [费表摘录](https://ou-liu-red-sugar.github.io/notebook/index-funds/fund-fee-extracts.md) · [计算方法](https://ou-liu-red-sugar.github.io/notebook/index-funds/model.py)。**

在相同的费用前收益下，20 年后三档费率留下的金额相差数千美元。实际基金的持仓和费用前收益也会不同；比较主动基金时，还要看管理人的投资结果是否值得为此支付额外费用。

基金公布的净值回报通常已经扣除了基金承担的持续费用，用这项回报作比较时，就不再另减一次年度费用率（文中三个产品所核费用表均无当期减免使净费率低于总费率。其他产品若列出费用减免，还需看净费率及其期限。图中设费用前年收益为 6%，每年末按资产扣费，计算为 \(10000[(1+0.06)(1-f)]^{20}\)，不计外部存取、投资者税费及销售收费；实际基金通常按日计提费用）。[^voo-sheet]

持续费用之外，买入和退出时还可能发生额外成本。把费用按发生环节排列，就能看清一段完整持有过程包含哪些收费：

一段完整持有过程中的收费

买入时，部分场外基金份额收取销售费用，ETF 有交易佣金与买卖价差；持有时，基金承担年度持续费用，渠道还可能另收账户或投顾费用；卖出或赎回时，可能有赎回费或后端销售费，ETF 有交易佣金与买卖价差。AIVSX Class A 例：投入 10,000 美元，按最高前端销售费 5.75% 先付 575 美元，买入份额的资金为 9,425 美元；持有期间每年持续费用 0.55%，从基金资产中扣除。

一些场外基金份额在买入时收取销售费，持有期间还会收取持续服务费用。The Investment Company of America 的 Class A 份额（AIVSX），所列最高申购销售费为 5.75%，年度持续费用为 0.55%。同样投入 10,000 美元，若适用这档最高销售费，先支付的销售费用就是 575 美元，实际买入基金份额的资金只剩 9,425 美元；持有以后，基金还会继续承担年度费用。[^aivsx]

买入时的一次性收费与每年的持续费用，会在不同阶段减少可供投资的资金。同一只基金的不同份额和销售安排，也可能对应不同成本（这里的 0.55% 已包含 0.23% 管理费、0.08% 其他费用和 0.24% 的持续销售服务费用。费用取自 AIVSX 产品页，该页标注最近招募书日期为 2026 年 3 月 1 日。5.75% 是最高前端销售费，具体适用金额、折扣、豁免及合并账户资格按销售安排确定；0.24% 属于美国 12b-1 费用，已计入 0.55%。一次性销售费与年度持续费的计费时点、分母不同，不能相加称为每年 6.30%）。

不过，场外交易本身并不决定费率高低。Vanguard 的自家共同基金不收前端或后端销售费，仍会承担各自的持续费用；少数产品还可能有特定买入、赎回费用。因此，比较费用时，我们要看具体产品、份额和购买渠道。场内 ETF 同样有持续费用和交易成本，“免佣金”也只是免去了其中一项。[^vanguard-fees]，[^fee-rules]

实际下单买入 VOO 时，还会碰上报价和订单。下一篇[《报价、订单与实际成交》](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-execution/)看计划中的价格怎样变成实际付出的金额。

[^sp-method]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。
[^msci]: MSCI，[MSCI World Index factsheet](https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf)，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。
[^index-math]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。
[^equal]: S&P Dow Jones Indices，[S&P 500 Equal Weight Index](https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/)与[等权指数 FAQ](https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/)，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
[^voo-sheet]: Vanguard，[VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf)，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见[本篇数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)与[计算结果](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv)。
[^voo-prospectus]: Vanguard，[VOO Summary Prospectus](https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm)，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。
[^nav]: SEC Investor.gov，[Net Asset Value](https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value)，净资产及每份净值定义，2026-09-27 查阅。
[^fund-structure]: SEC Investor.gov，[Characteristics of Mutual Funds and Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds)，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC [共同基金定价规则背景说明](https://www.sec.gov/rules-regulations/2003/12/amendments-rules-governing-pricing-mutual-fund-shares)，只采用其对 forward pricing 的背景解释。
[^etf]: SEC Investor.gov，[Updated Investor Bulletin: Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24)，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。
[^rsp]: Invesco，[RSP 产品资料](https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=RSP)，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。
[^urth]: iShares，[URTH 产品资料](https://www.ishares.com/us/products/239696/URTH)，跟踪发达市场股票指数的目标，2026-09-27 查阅。
[^cgdv]: Capital Group，[CGDV Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1870128/000005193126000736/cgdv497k.htm)，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；[CGDV 产品资料](https://www.capitalgroup.com/advisor/investments/exchange-traded-funds/details/cgdv)，主要业绩比较基准为 S&P 500。
[^roundhill]: Roundhill，[CHAT](https://www.roundhillinvestments.com/etf/chat/)、[HUMN](https://www.roundhillinvestments.com/etf/humn/)、[OZEM](https://www.roundhillinvestments.com/etf/ozem/)产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
[^fee-rules]: SEC Investor.gov，[Mutual Fund and ETF Fees and Expenses](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin)，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。
[^chat-fee]: Roundhill，[CHAT Prospectus](https://www.sec.gov/Archives/edgar/data/1924868/000199937126018651/chat-485bpos_082526.htm)，2026-08-27，管理费及年度总费用率均为 0.75%。
[^aivsx]: Capital Group，[AIVSX 产品与费用表](https://www.capitalgroup.com/individual/investments/mutual-funds/details/ica-a)，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；[Class A 销售费及折扣](https://www.capitalgroup.com/individual/investments/share-class-information/reducing-sales-charges.html)。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。
[^vanguard-fees]: Vanguard，[共同基金费用与最低投资额](https://investor.vanguard.com/investment-products/mutual-funds/fees)，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。
