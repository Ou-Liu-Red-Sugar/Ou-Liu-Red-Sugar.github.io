# 指数、基金与 ETF

从自己建立股票组合与通过基金投资出发，理解指数定义、权重与定期再平衡，再认识基金净值、ETF 交易、主动与主题投资以及各项费用。

网页 / HTML: [指数、基金与 ETF](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/)

语言 / Language: zh · 更新 / Revised: 2026-09-27

买入一只股票，我们持有的是一家公司的部分股权；而想同时投资多家公司，可以自己买入一组股票、建立投资组合，也可以购买股票基金的份额，由基金管理人组织投资。

无论自己管理还是委托基金管理，我们通常都会关心这组股票的整体表现，也会把它与相关市场作比较。股票指数提供了观察市场和比较业绩的参照。

## 指数的定义与样本 {#nb-v01-index}

股票指数是衡量一组股票整体表现的指标。编制者按照一定规则选择股票、分配权重，再把它们的价格变化汇总成可以连续记录的指数点位。这样，各只股票的涨跌就汇成了一条走势，便于我们连续观察和比较。

不同指数观察的范围各有侧重。S&P 500 主要反映美国大盘股市场，MSCI World 则覆盖多个发达市场的大盘和中盘股票。新闻里说 S&P 500 上涨，便是在用这项指数描述它所代表的那部分市场；换成 MSCI World，所观察的市场范围也随之扩大。[^sp-method]，[^msci]

| 指数 | 编制机构 | 主要观察范围 |
|---|---|---|
| S&P 500 | S&P Dow Jones Indices | 约 500 家美国大盘公司 |
| MSCI World | MSCI | 23 个发达市场的大盘、中盘股票，包括美国、日本、英国等市场 |

MSCI World 的名称容易让人联想到全球股票市场，但它只覆盖发达市场，不包括新兴市场（表中范围采用 2026 年 8 月 31 日官方资料，覆盖各市场约 85% 的自由流通调整后市值。市场归类依照指数的分类口径；公司被纳入哪个市场，与它在世界各地经营、取得收入的范围，是不同的观察维度）。

要反映这部分市场，指数编制者就需要按规则选择参与计算的股票。S&P 500 会考察公司所属市场、规模、可交易股份、流动性和盈利等条件，再由指数委员会作出选择，并不直接按市值排名截取前五百家。随着公司状况和市场变化，成分名单也会调整。[^sp-method]

指数点位把这些股票的表现连续记录下来，我们通常比较的是同一指数的变化幅度。不同指数各有基期和计算方法，单凭点位高低不能判断哪个市场更贵（价格指数主要记录价格变化；总回报指数还将分红及其再投资计入，税前、税后口径又可能不同。拿基金回报与指数比较时，应匹配分红、币种、期间和费用口径；公司拆股、成分变更等也需依方法调整计算，避免把计量变化当成市场涨跌）。[^index-math]

选出成分股票后，还要规定每只股票在计算中占多大比重，也就是权重。

## 权重、调整与集中度 {#nb-v01-weights}

同样幅度的涨跌，权重越大的股票对指数的影响就越大。S&P 500 采用自由流通市值加权，可供公众投资的股份对应市值越大，所占权重也越高；S&P 500 等权指数采用同一组公司，按季度把各家公司的权重调回相同的目标水平，通常每家约占 0.2%。[^sp-method]，[^equal]

这种按规则调整权重的操作称为再平衡。等权规定的是调整时的目标比例；在两次再平衡之间，各只股票价格的涨跌仍会让权重偏离目标。

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

默认设定中，A 上涨 40%，B 下跌 10%，C 不变，D 上涨 10%。等权组合的总价值由 10,000 美元增加到 11,000 美元，回报为 10%，A 的权重也从 25% 上升到约 31.8%；市值加权组合起初给了 A 更多资金，同样的价格变化便带来了 14% 的回报。股票相同，起始权重不同，最终结果也会不同。

到了下一次再平衡日，等权组合要把 A 的金额从 3,500 美元降到 2,750 美元，同时补足其他低于目标的部分，才重新回到各占 25%。忽略费用，这次调整后总价值仍为 11,000 美元；此后的股价涨跌则会按新的权重影响组合。

实际的 S&P 500 等权指数在 3、6、9、12 月按季度再平衡，期间权重会随着行情漂移。我们读等权基金的持仓表时，也要把披露日期与再平衡安排放在一起看（指数按公司分配等权目标；同一家公司若有多个符合条件的股类，其合计对应一家公司的份额。实际方法的定权参考日与调整生效日存在间隔，价格在这期间也可能变化。上图为了单独展示漂移与调回，采用在指定时点立即恢复目标比例的简化设定）。[^equal]

当少数公司的权重越来越高时，它们的涨跌就会更多地影响整体表现。以跟踪 S&P 500 的 Vanguard 基金 VOO 为例，2026 年 6 月 30 日，它的前十大持股公司合计占基金净资产 37.9%；按行业观察，信息技术占 38.0%。持有的公司很多，并不意味着资金平均分布在这些公司和行业里。[^voo-sheet]

VOO · 2026 年 6 月 30 日

### 持有多家公司，权重仍会集中

**信息技术：半导体 **其他信息技术 **通信服务 **其他行业

[![VOO在2026年6月30日前十大持股公司合计37.9%，Alphabet的两个股类合并列示。](https://ou-liu-red-sugar.github.io/notebook/index-funds/voo-concentration.svg)](https://ou-liu-red-sugar.github.io/notebook/index-funds/voo-concentration.svg)

#### 按行业观察

信息技术 **38.0%**

**

金融 **11.8%**

**

通信服务 **9.7%**

**

其他行业及其他项 **40.5%**

**

**深绿色的 NVDA、AVGO、MU 属于半导体，和浅绿色公司同属下方的信息技术大类。持仓权重按 Vanguard 官方季度资料；公司与行业比例不能相加。[基金资料](https://fund-docs.vanguard.com/F0968.pdf) · [图表输入](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)。**

即使分属不同行业，这些公司仍可能依赖相近的客户、需求和资金条件，研究集中度时也要考虑这些共同影响（公司与行业是两个观察维度，图中比例不能相加。VOO 原表将 Alphabet 的 GOOGL 与 GOOG 合并为一家公司；各行取整后相加为 37.8%，前十合计保持源表公布的 37.9%。图中为基金持仓权重，时点固定为 2026 年 6 月 30 日）。

等权会降低最大几家公司在指数里的比重，但行业权重仍与各行业入选的公司数量有关，并不会自动变成行业等权。我们选择加权规则，也就在选择不同的资金分布。

除了用来观察市场和比较业绩，指数的成分与权重规则还可以用于安排实际投资。跟踪指数的基金便以这些规则为投资依据。

## 基金份额与净值 {#nb-v01-nav}

基金把投资者的资金集合起来，由基金管理人按照约定的目标投资。具体投向可以是股票、债券或其他资产，取决于产品规定的范围。以股票基金为例，我们持有基金份额，基金持有公司股票；通过这两层持有关系，我们间接参与这些公司的经营成果。VOO 就以跟踪 S&P 500 为目标，管理人据此安排投资，争取取得接近指数的回报。[^voo-prospectus]

股票基金中的两层持有关系

**投资者** 持有基金份额

**→**

**基金** 管理人安排投资

**→**

**公司股票与现金** 构成基金资产

**基金份额对应基金资产的权益；基金收到的股息、资产涨跌及费用，会影响持有人的所得。**

这些份额值多少钱，可以先从基金拥有的资产算起。把股票、现金等资产的价值加起来，扣除基金的负债，得到基金净资产；再除以总份额，就是每份净值，通常记作 NAV：[^nav]

\[
\text{每份净值}=\frac{\text{基金资产}-\text{基金负债}}{\text{基金总份额}}.
\]

假设某一时点，基金资产为 101 万美元、负债为 1 万美元，共有 10 万份，那么净资产就是 100 万美元，每份净值为 10 美元。持有 100 份，对应的净资产价值就是 1,000 美元。

持有期间，资产价格的涨跌、基金取得的收入及承担的费用都会影响净值；基金向持有人分配现金时，净值也会相应调整。例如，每份分配 0.20 美元，在其他价值不变时，净值由 10 美元降至 9.80 美元，持有人同时取得 0.20 美元现金。比较这段持有结果，就要把净值变化与收到的现金放到一起看（NAV 有时指基金总净资产，报价页面通常展示每份 NAV，计算时需辨认分母。上述金额为同一时点的设定，现金分配例忽略同期市场变化和投资者税费）。

净值告诉我们每份基金对应多少资产价值；而实际买入或退出时怎样成交，还要看基金份额的交易方式。

## 场内交易与场外申赎 {#nb-v01-trading}

购买基金份额，一种方式是向基金或销售机构提交申请；另一种方式是在交易所里买入卖方提供的份额。交易所交易基金（ETF）是一类份额可以在交易所买卖的基金，VOO 就属于这一类。

以美国常见的开放式共同基金为例，申购和赎回通常按收到有效申请后下一次适用的净值成交；而普通投资者在交易所买卖 ETF，则按当时能够成交的市场价格交易。两种方式在交易对象、成交价格和成交时间上各有不同：[^fund-structure]

| 比较内容 | 场外申购、赎回共同基金 | 普通投资者场内买卖 ETF |
|---|---|---|
| 申请或订单交给谁 | 基金或销售机构 | 通过券商向市场下单 |
| 按什么价格成交 | 下一次适用的每份净值，加减适用费用 | 与买卖对手成交的市场价格 |
| 盘中怎样处理 | 可以提交申请，价格通常要等相应净值计算后确定 | 交易时段内可以按市场报价成交 |
| 退出方式 | 赎回份额，由基金支付对应款项 | 卖出份额，收取成交款 |

回到 VOO，我们在交易软件里看到的买卖报价，就是它的场内价格。买卖双方的出价决定市场成交，基金持有的资产则决定其净值，因此两者可能出现差距：市价高于净值称为溢价，低于净值称为折价。

假设某时点一份 ETF 对应的资产价值估算为 10 美元，市价为 10.10 美元，就相当于以 1% 的溢价买入 ETF 份额。即使底层股票的价格暂时不变，后来的溢价收窄也会影响这笔投资的回报。

ETF 的申购、赎回机制把场内份额与对应资产联系起来，也会影响市价与资产价值的差距。能够直接与基金进行大额申赎的机构称为授权参与商（AP）。当差价足以覆盖成本时，AP 可以分别采取以下交易：[^etf]

| 观察到的价格关系 | AP 可以采取的交易 | 对场内份额的影响 |
|---|---|---|
| ETF 市价高于相应资产价值 | 向基金交付规定的证券篮子，换取新 ETF 份额，再在场内卖出 | 增加份额供给 |
| ETF 市价低于相应资产价值 | 在场内买入 ETF 份额，交回基金赎回，取得相应证券篮子 | 增加场内买入需求，赎回后减少份额 |

这两条路径让份额与资产可以相互转换，促使市价向对应的资产价值靠拢（表中采用实物申赎的简化路径，实际篮子也可能包含现金，部分产品使用现金申赎。正式 NAV 通常在日终计算，盘中例子用的是同期资产价值估算；海外市场休市、交易成本和对冲条件会影响套利空间，因此价差仍可能存在）。

同样在交易所买卖的 ETF，也可以采用不同的管理方式。

## 指数跟踪、主动管理与主题投资 {#nb-v01-management}

在跟踪指数的基金中，前面比较的加权规则都有对应的产品：VOO 跟踪 S&P 500，Invesco S&P 500 Equal Weight ETF（RSP）则跟踪 S&P 500 等权指数。前者按自由流通市值分配权重，后者按等权规则定期调整；买入这两只产品，资金在同一组公司中的分布会有所不同。[^rsp]

除了加权方式，基金所跟踪的市场范围也可以不同。iShares MSCI World ETF（URTH）跟踪 MSCI World，把范围扩展到多个发达市场。MSCI 负责制定和维护指数，基金管理人则根据跟踪目标组织实际投资。这种主要依据指数规则调整持仓的方式称为被动管理；管理人仍要买卖股票、安排现金，并处理相应成本。[^urth]

另一种做法是由管理人根据研究和判断来选择持仓，这就是主动管理。Capital Group Dividend Value ETF（CGDV）采用的便是这种方式，重视能够提供收入与增长机会的股票；它的投资目标包括争取高于美国股票平均水平的收入收益率，以及资本增值。S&P 500 是它的主要业绩比较基准，管理人可以形成与指数不同的组合。因此，看到基金列出一个指数时，我们还要分清：它以跟踪指数为投资目标，还是把指数作为业绩比较基准。[^cgdv]

管理方式之外，基金的投资范围也有差别：有些覆盖较广的市场，有些则集中于某个行业或主题。Roundhill 旗下就有围绕不同主题组织投资的 ETF：[^roundhill]

| ETF | 投资主题 | 官方资料中的实际例子 |
|---|---|---|
| CHAT | 生成式 AI 与科技 | 涉及平台、基础设施与软件；持有 NVIDIA（NVDA） |
| HUMN | 人形机器人 | 持有 Tesla（TSLA），官网以 Optimus 说明相关研发方向 |
| OZEM | GLP-1 与减重产业 | 持有 Eli Lilly（LLY） |

表中持仓采用发行人标注的 2026 年 6 月 30 日数据，三只基金都采用主动管理。一只基金既有管理方式，也有投资范围：主动或被动说明管理人怎样决定持仓，覆盖广泛市场还是集中某个主题则说明资金主要投向哪里。

通过这些基金，我们可以把对某种产业变化的判断落实为投资；与此同时，资金也集中到了依赖这一主题的公司上。以 CHAT 为例，当企业增加生成式 AI 投入时，对计算基础设施和软件服务的需求都可能增加；投入放缓时，这些不同环节也可能同时受到影响。所以，持有多家公司的主题基金，也可能集中承受同一种需求变化。

通过基金投资，我们把选股、交易和日常管理交给管理人，也要承担相应费用。这些费用会减少最终留给持有人的回报。

## 基金费用与投资者所得 {#nb-v01-fees}

先看持有期间持续发生的费用。管理费支付给基金管理人，基金还可能承担其他运营费用；产品文件会把这些持续费用汇总为年度总费用率，按平均净资产的一定比例表示。拿前面介绍的三只 ETF 来比较：[^fee-rules]

| ETF | 管理费 | 其他费用 | 年度总费用率 | 所用文件日期 |
|---|---:|---:|---:|---|
| VOO | 0.02% | 0.01% | 0.03% | 2026-04-28 |
| CGDV | 0.33% | 0.00% | 0.33% | 2026-08-01 |
| CHAT | 0.75% | 0.00% | 0.75% | 2026-08-27 |

VOO 的 0.02% 管理费已经包含在 0.03% 总费用率里，不能再加一次。以平均持有 10,000 美元粗略估算，0.03%、0.33% 和 0.75% 分别相当于每年约 3、33 和 75 美元；实际金额会随基金资产价值变化。[^voo-prospectus]，[^cgdv]，[^chat-fee]

这些费用通常直接从基金资产中扣除，已经反映在净值里，我们未必会在证券账户里看到单独扣款。扣去的资金也就不能继续用于投资，因而持有时间越长，费用造成的差距越容易累积。

本金 10,000 美元 · 20 年 · 相同费用前收益

### 每年留下的本金不同，长期积累也会不同

[![初始10000美元、费用前年收益6%，比较0.03%、0.33%和0.75%三档年度费用率的20年资金积累。](https://ou-liu-red-sugar.github.io/notebook/index-funds/fees.svg)](https://ou-liu-red-sugar.github.io/notebook/index-funds/fees.svg)

年度费用率 0.03% **31,879 美元** 20 年后

年度费用率 0.33% **30,020 美元** 20 年后

年度费用率 0.75% **27,588 美元** 20 年后

**三条线采用同样的费用前年收益 6%，每年末按资产扣除相应比例，仅比较费率的影响。图中金额不代表三只实际基金的业绩。[查看计算数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv) · [费表摘录](https://ou-liu-red-sugar.github.io/notebook/index-funds/fund-fee-extracts.md) · [计算方法](https://ou-liu-red-sugar.github.io/notebook/index-funds/model.py)。**

在相同的费用前收益下，20 年后三档费率留下的金额相差数千美元。实际基金的持仓和费用前收益也会不同；比较主动基金时，还要看管理人的投资结果是否值得我们为此支付额外费用。

基金公布的净值回报通常已经扣除了基金承担的持续费用，用这项回报作比较时，就不再另减一次年度费用率（表中三个产品所核费用表均无当期减免使净费率低于总费率。其他产品若列出费用减免，还需看净费率及其期限。图中设费用前年收益为 6%，每年末按资产扣费，计算为 \(10000[(1+0.06)(1-f)]^{20}\)，不计外部存取、投资者税费及销售收费；实际基金通常按日计提费用）。[^voo-sheet]

持续费用之外，买入和退出时还可能发生额外成本。把费用按发生环节排列，就能看清一段完整持有过程包含哪些收费：

| 环节 | 需要查看的收费 |
|---|---|
| 买入 | 部分场外基金份额的销售费用；ETF 交易佣金与买卖价差 |
| 持有 | 基金年度持续费用，以及渠道可能另外收取的账户或投顾费用 |
| 卖出、赎回 | 适用的赎回费或后端销售费；ETF 交易佣金与买卖价差 |

一些场外基金份额在买入时收取销售费，持有期间还会收取持续服务费用。The Investment Company of America 的 Class A 份额（AIVSX），所列最高申购销售费为 5.75%，年度持续费用为 0.55%。若投入 10,000 美元，并适用这档最高销售费，先支付的销售费用就是 575 美元，实际买入基金份额的资金剩下 9,425 美元；持有以后，基金还会继续承担年度费用。[^aivsx]

买入时的一次性收费与每年的持续费用，会在不同阶段减少可供投资的资金。同一只基金的不同份额和销售安排，也可能对应不同成本（这里的 0.55% 已包含 0.23% 管理费、0.08% 其他费用和 0.24% 的持续销售服务费用。费用取自 AIVSX 产品页，该页标注最近招募书日期为 2026 年 3 月 1 日。5.75% 是最高前端销售费，具体适用金额、折扣、豁免及合并账户资格按销售安排确定；0.24% 属于美国 12b-1 费用，已计入 0.55%。一次性销售费与年度持续费的计费时点、分母不同，不能相加称为每年 6.30%）。

不过，场外交易本身并不决定费率高低。Vanguard 的自家共同基金不收前端或后端销售费，仍会承担各自的持续费用；少数产品还可能有特定买入、赎回费用。因此，比较费用时，我们要看具体产品、份额和购买渠道。场内 ETF 同样有持续费用和交易成本，而“免佣金”也只是免去了其中一项。[^vanguard-fees]，[^fee-rules]

持有一组股票时，指数可以帮助我们观察市场、比较业绩，也可以提供安排持仓的规则。至于实际投资，我们可以自己建立并管理组合，也可以持有基金份额，把管理交给基金管理人；ETF 则为基金份额提供了在交易所买卖的形式。选择基金以后，底层公司的经营与股票买入价格仍然影响回报，管理人的取舍和各项费用则继续影响最终留给我们的所得。至于底层股票具体附带哪些权利、又怎样发行和转手，[《股票的类型、发行与交易形式》](https://ou-liu-red-sugar.github.io/zh/notebook/stock-types-issuance-trading/)会继续展开。

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
