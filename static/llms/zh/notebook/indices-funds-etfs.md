# 指数、基金与 ETF

从 10,000 美元买入 VOO 出发，看这笔钱怎样按指数权重分到各家公司，再认识等权与再平衡、基金净值、ETF 的场内价格、主动与主题管理以及各项费用。

网页 / HTML: [指数、基金与 ETF](https://ou-liu-red-sugar.github.io/zh/notebook/indices-funds-etfs/)

语言 / Language: zh · 更新 / Revised: 2026-11-28

[《股票、公司与股价》](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/#nb-s01-ownership)和[《股东回报：分红、回购与增发》](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/#nb-s02-returns)都跟着同一笔 100 股 AAPL，资金只压在一家公司上。换一种买法，用 10,000 美元买入 Vanguard S&P 500 ETF（VOO），同一笔钱会经过基金分到约 500 家美国公司；只是按 2026 年 6 月 30 日的持仓权重，这 500 家拿到的份额悬殊得多。[^voo-sheet]

10,000 美元买入 VOO，按持仓比例分到各公司

2026 年 6 月 30 日 · 按占基金净资产比例换算

10,000 美元按 VOO 2026 年 6 月 30 日的持仓比例换算：前十大持股公司合计 37.9%，约 3,790 美元；其余持股合计 62.1%，约 6,210 美元。

前十大持股公司分到的金额：NVDA 约 750 美元；AAPL 约 660 美元；Alphabet（GOOGL 与 GOOG 合并）约 580 美元；MSFT 约 430 美元；AMZN 约 360 美元；AVGO 约 280 美元；MU 约 200 美元；META 约 190 美元；TSLA 约 180 美元；LLY 约 150 美元。NVDA、AAPL、MSFT、AVGO 和 MU 属于信息技术，合计约 2,320 美元。

信息技术：半导体 其他信息技术 通信服务 其他行业

**金额为 10,000 美元乘以各公司占 VOO 净资产的比例，忽略费用和买卖价差；GOOGL 与 GOOG 按 Alphabet 一家合并。[基金资料](https://fund-docs.vanguard.com/F0968.pdf) · [图表输入](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)。**

账户里实际持有的是 VOO 基金份额，股价波动与公司派发的股息先汇入基金资产，再体现在每份 VOO 上。前十家公司就占去近四成资金，按行业统计，整只基金更有 38.0%（约 3,800 美元）落在信息技术上。即便分属不同行业，头部公司也常共享相近的客户与资本开支周期，评估分散度时要把这些共同暴露算进去（公司与行业是两个观察维度，比例不能相加。VOO 原表将 Alphabet 的 GOOGL 与 GOOG 合并为一家公司；前十行取整相加为 37.8%，合计保留源表公布的 37.9%；NVDA、AAPL、MSFT、AVGO 与 MU 属于信息技术，合计约 2,320 美元。时点固定为 2026 年 6 月 30 日）。

VOO 把最多资金分给 NVIDIA（NVDA）、把较少资金分给其余公司，依据的是它所跟踪的指数：VOO 以取得接近 S&P 500 的回报为目标，这份比例来自 S&P 500 的选样与加权规则。[^voo-prospectus]

## 指数的定义与样本 {#nb-v01-index}

股票指数是衡量一组股票整体表现的独立标尺，本身并不替任何人管理资金。你可以自己照着成分买一篮子股票，也可以通过基金份额去跟踪它。编制者先把市场切出范围、定好权重，再把涨跌汇总成一条连续点位。[^sp-method]，[^msci]

从股票市场到一条指数曲线：三步规则

选样本 → 定权重 → 算点位

指数编制三步：第一步划定样本池（如 S&P 500 选约 500 家美国大盘公司，MSCI World 覆盖 23 个发达市场）；第二步按规则分配权重（自由流通市值加权或等权）；第三步汇总成点位（只看涨跌幅，并区分价格指数与含分红总回报指数）。

**样本范围、权重规则和回报口径共同决定一只指数衡量什么。MSCI World 不含新兴市场；S&P 500 由委员会按规模、流动性与盈利标准调整成分。**

读指数名字时容易被字面误导：MSCI World 听起来像覆盖全球股市，实际只包含发达市场，不包含新兴市场（范围采用 2026 年 8 月 31 日官方资料，覆盖各市场约 85% 的自由流通调整后市值。市场归类依照指数的分类口径；公司被纳入哪个市场，与它在世界各地取得收入的范围是两个维度）。 拿基金业绩和指数对照时，还要把分红、币种、期间和费用口径对齐（价格指数主要记录价格变化；总回报指数还将分红及其再投资计入，税前与税后口径也可能不同；公司拆股、成分变更均依方法调整除数，避免把计量变化当成市场涨跌）。[^index-math]

## 市值加权、等权与再平衡 {#nb-v01-weights}

同样一组 S&P 500 成分股，换一套权重规则，资金去向立刻大变。按自由流通市值加权，NVDA 在 VOO 里分到最多资金；换成跟踪 S&P 500 等权指数的 Invesco S&P 500 Equal Weight ETF（RSP），在每季调整当日，NVDA 和最小成分公司各分到约 0.2%（10,000 美元里各约 20 美元）。[^sp-method]，[^equal]，[^rsp]

等权规定的是再平衡那一天的目标比例；两次调整之间，股价涨跌仍会让权重漂移。把 500 家缩成 4 只股票，在下图里切换三个阶段并拖动 A 的涨跌幅，就能亲眼看见同一组涨跌怎样拉开市值加权与等权的结果：

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

切到第 ③ 步可以看到两者的机制分叉：等权到期要卖出涨超目标的股票、补进落后的股票，把比例拉回原点（忽略费用，调整瞬间总资产不变，只改写后续权重）；市值加权则顺着股价涨跌自然浮动，不需要为了恢复比例而卖出赢家，当少数巨头持续走强时，资金会越来越向它们集中。

实际 S&P 500 等权指数在 3、6、9、12 月按季再平衡，读持仓表时要把披露日和调整节奏合起来看；而且等权压低的是最大几家公司的比重，哪个行业入选家数多，该行业总权重依然更大，并不会自动变成行业等权（指数按公司分配等权目标；同一家公司若有多个符合条件的股类，合计对应一家公司的份额。实际方法的定权参考日与生效日存在间隔，价格在此期间也会漂移；上图为单独展示漂移与调回，采用即时恢复目标比例的简化设定）。[^equal]

## 基金份额与净值 {#nb-v01-nav}

基金把投资者的资金集合起来，按约定目标投向股票、债券或其他资产。每份基金背后对应多少净资产，用每份净值（NAV）衡量：[^nav]

\[
\text{每份净值}=\frac{\text{基金资产}-\text{基金负债}}{\text{基金总份额}}.
\]

从基金资产到一笔持仓的净资产价值

设定算例 · 任意时点

**101 万美元** 基金资产

基金资产 101 万美元减去负债 1 万美元，得到净资产 100 万美元。

**100 万美元** 基金净资产

净资产 100 万美元除以总份额 10 万份，每份净值为 10 美元。

**10 美元** 每份净值（NAV）

持有 1,000 份，对应的净资产价值为 10,000 美元。

**10,000 美元** 这笔持仓对应的净资产

资产涨跌、股息收入和持续费用都会推动净值变化；当基金把现金分给持有人时，净值也会同步下调——钱只是从基金账上搬进了你的现金账户，本身不算亏损：

每份分配 0.20 美元：净值下调，合计价值不变

持有 1,000 份 · 其他价值不变

持有 1,000 份基金：分配前每份净值 10 美元，对应净资产价值 10,000 美元。每份分配 0.20 美元现金后，在其他价值不变时，每份净值下调至 9.80 美元，份额对应资产价值为 9,800 美元，同时持有人收到 200 美元现金，两者合计仍为 10,000 美元。净值下降对应的是 200 美元移入现金账户，本身并非亏损。

**设定同一时点、忽略同期市场涨跌与投资者税费；橙色切片示意移入现金的 200 美元（占总价值的 2%）。**

因此评估一段持有结果时，要把净值变化和收到的现金分配合起来算（NAV 有时指基金总净资产，报价页面通常展示每份 NAV，计算时需辨认分母。上述两图均为同一时点的设定算例，忽略同期市场涨跌和投资者税费）。

## 场内买卖与场外申赎 {#nb-v01-trading}

净值说明每份基金值多少资产，而实际买进卖出付多少钱，取决于基金走的是哪条交易通道：场外共同基金直接向基金申赎，ETF 则在交易所挂牌撮合。[^fund-structure]

两种交易通道：场外共同基金 vs 场内 ETF

场外共同基金路径：投资者向基金或销售机构提交申购或赎回申请，收盘后按日终净值 NAV 确认份额或回款，无场内溢折价。

场内 ETF 路径：投资者通过券商在交易所与其他对手方实时撮合成交，按盘中市价买卖，可能偏离净值 NAV，由授权参与商 AP 压缩价差。

**点击切换两种交易通道。并非所有场内交易基金都是 ETF；共同基金与 ETF 对应不同的对手方与定价时点。**

ETF 的市价由买卖盘撮合决定，一旦高出每份资产价值，同样的资金买到的底层资产就会变少：

同样 10,000 美元，按净值与按市价成交

每份资产价值均设为 10 美元

按净值成交：10,000 美元按每份净值 10 美元买入 1,000 份，这些份额对应的资产价值为 10,000 美元。

按市价成交：10,000 美元按市价 10.10 美元买入约 990 份，这些份额对应的资产价值约 9,901 美元，约 99 美元付给了 1% 的溢价。

**不计佣金、销售费用和买卖价差；溢价例中的资产价值为同一时点的估算。**

即便底层股票纹丝不动，只要 1% 的溢价随后收窄，多付的约 99 美元就会变成真实亏损。之所以主流 ETF 的溢折价通常不大，依靠的是授权参与商（AP）的申赎套利机制——切换下方按钮，看 AP 在溢价和折价时分别怎样行动：[^etf]

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

两条路径打通了份额与底层资产的互换，把市价拉回净值附近（图中采用实物申赎的简化路径，实际篮子也可能包含现金，部分产品使用现金申赎。正式 NAV 通常在日终计算，盘中例子用的是同期资产价值估算；海外市场休市、交易成本和对冲条件会影响套利空间，因此价差仍可能存在）。

## 指数跟踪、主动管理与主题投资 {#nb-v01-management}

ETF 说的是“在交易所交易”的形式，并不自动等于被动跟踪指数。挑一只基金时，要分开问两个问题：**谁决定买什么**（按指数规则被动跟踪，还是由管理人主动选股）和**钱投向多宽的范围**（广泛市场，还是单一行业与主题）。[^rsp]，[^urth]，[^cgdv]，[^sox]，[^soxq]，[^roundhill]

管理方式与投资范围是两个维度

同为 ETF，规则与集中度大不相同

按指数规则管理、覆盖广泛市场：VOO 跟踪 S&P 500 市值加权，RSP 跟踪 S&P 500 等权，URTH 跟踪 MSCI World。由管理人选股、覆盖广泛市场：CGDV 重视收入与增长，以 S&P 500 为业绩比较基准。由管理人选股、集中于某个主题：CHAT 生成式 AI，HUMN 人形机器人，OZEM GLP-1 与减重。按指数规则管理、集中于某个主题：SOXQ 跟踪 SOX，指数由在美国上市、市值最大的 30 家半导体公司组成。

**列看管理人怎样决定持仓，行看资金主要投向哪里。iShares MSCI World ETF（URTH）、Capital Group Dividend Value ETF（CGDV）、Invesco PHLX Semiconductor ETF（SOXQ）及 Roundhill 旗下 CHAT、HUMN、OZEM 持仓例采用 2026 年 6 月 30 日披露数据。**

看基金文件列出某个指数时，先分清它是**跟踪目标**还是**业绩比较基准**：VOO、RSP、URTH 与 SOXQ 照规则跟踪对应指数（被动管理仍需交易股票、安排现金并控制误差）；而 CGDV 只把 S&P 500 当比较基准，实际持仓由管理人主动决定，可以和指数大不相同。

行业指数本身也会靠上限规则约束集中度，例如 Nasdaq 的 PHLX Semiconductor Sector Index（SOX）从美国上市半导体公司选出市值最大的 30 家，前三名上限依次为 12%、10%、8%，其余每家不超过 4%（入选公司须属于 ICB 分类中的半导体或生产技术设备子行业，超出上限的权重按市值比例分给其他成分；成分每年 9 月重组，权重在 3、6、9、12 月按季调回，两次调整之间会随价格漂移）。 跟踪 SOX 的 SOXQ 在调整当日，10,000 美元最多有 1,200 美元落到第一大公司、三名以外每家最多 400 美元，全部压在半导体行业上（据 2025 年 12 月 19 日招募说明书，SOXQ 通常将至少 90% 总资产投向指数成分，年度总费用率 0.19%；1,200/400 美元是按指数上限换算的规则推算，非某一时点实际持仓）。

主动主题基金（如 Roundhill 的 CHAT、HUMN 与 OZEM）能把对某条产业方向的看好直接落到持仓里，代价是风险同样压在同一条产业链上（2026 年 6 月 30 日前五大持仓中，CHAT 持有 NVDA，HUMN 持有 Tesla（TSLA，官网以 Optimus 说明人形机器人方向），OZEM 持有 Eli Lilly（LLY））。 拿 CHAT 来说，AI 资本开支扩张时算力与软件往往齐涨，投入节奏一放缓，几十家上下游成分也会一起降温——持仓家数多，并不代表分散了景气风险。

## 基金费用与投资者所得 {#nb-v01-fees}

把选股和日常管理交给基金，持续发生的管理费与运营开支会汇总成年度总费用率，直接从基金资产里扣除并反映在净值中，账户里不会出现单独扣款。VOO 年度总费用率 0.03%（10,000 美元每年约 3 美元），CGDV 为 0.33%（约 33 美元），CHAT 为 0.75%（约 75 美元）（分别取自 2026 年 4 月 28 日、8 月 1 日与 8 月 27 日产品文件；VOO 含管理费 0.02% 与其他费用 0.01%，CGDV 与 CHAT 全部为管理费；实际扣费金额随基金净值上下变动）。[^fee-rules]，[^voo-prospectus]，[^cgdv]，[^chat-fee] 被扣掉的资金无法继续滚存，时间一拉长，微小的费率差会滚出数千美元的差距：

与年度费用率 0.03% 相比，少留下的金额

0.33% 0.75%

本金 10,000 美元、费用前年收益 6% 时，年度费用率 0.33% 和 0.75% 与 0.03% 相比：第 5 年分别少 199 和 474 美元；第 10 年分别少 529 和 1,245 美元；第 15 年分别少 1,052 和 2,451 美元；第 20 年分别少 1,860 和 4,291 美元。

20 年后，三档费用率分别留下 31,879、30,020 和 27,588 美元。

**本金 10,000 美元，三档采用同样的费用前年收益 6%，每年末按资产扣除相应比例，金额单位为美元，不代表三只实际基金的业绩。[查看计算数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv) · [费表摘录](https://ou-liu-red-sugar.github.io/notebook/index-funds/fund-fee-extracts.md) · [计算方法](https://ou-liu-red-sugar.github.io/notebook/index-funds/model.py)。**

因为基金公布的净值回报已经扣过持续费用，比较历史业绩时不要再重复减去一次费率；对比主动基金，关键看扣除费用后的结果是否值得这笔额外支出（文中三只产品所核费用表均无当期减免使净费率低于总费率；其他产品若列有费率减免，需留意净费率及到期日。上图按 6% 费用前年收益、年末扣费 \(10000[(1+0.06)(1-f)]^{20}\) 测算，不计税费与销售费；实际基金通常按日计提）。[^voo-sheet]

除持有期间的持续费用外，买入和退出两个节点也可能扣费，完整持有一轮的成本结构如下：[^aivsx]

一段完整持有过程中的收费

以 AIVSX Class A 最高前端费为例

买入时，部分场外基金份额收取销售费用，ETF 有交易佣金与买卖价差；持有时，基金承担年度持续费用，渠道还可能另收账户或投顾费用；卖出或赎回时，可能有赎回费或后端销售费，ETF 有交易佣金与买卖价差。AIVSX Class A 例：投入 10,000 美元，按最高前端销售费 5.75% 先付 575 美元，买入份额的资金为 9,425 美元；持有期间每年持续费用 0.55%，从基金资产中扣除；该份额属于前端收费 Class A，常规赎回不另收后端销售费，具体按份额条款与销售安排确定。

一次性销售费直接削减起投本金，年度持续费则每年按资产比例滚扣，两者发生时点与分母不同，不能简单相加；同一只基金在不同份额类别和销售渠道下的成本也可能相差很大（The Investment Company of America Class A（AIVSX）年度持续费用 0.55% 含 0.23% 管理费、0.08% 其他费用和 0.24% 持续销售服务费 12b-1，取自产品页标注的 2026 年 3 月 1 日招募书；5.75% 为最高前端销售费，具体折扣、豁免及合并账户资格依销售安排确定，不能与 0.55% 相加称作每年 6.30%）。 场外申赎本身也不必然昂贵：Vanguard 自家共同基金不收前后端销售费（少数产品另设特定买入或赎回费）；而场内 ETF 即便“免佣金”，也仍存在持续费用与买卖价差。[^vanguard-fees]，[^fee-rules]

真正下单买入 VOO 时，屏幕报价怎样变成实际成交价、买卖价差又从何而来，下一篇[《报价、订单与实际成交》](https://ou-liu-red-sugar.github.io/zh/notebook/quotes-orders-execution/)接着展开。

[^sp-method]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，选样、自由流通市值加权、公司多股类及再平衡。正文只列所需条件类型。
[^msci]: MSCI，[MSCI World Index factsheet](https://www.msci.com/documents/10199/255599/msci-world-index-usd-net.pdf)，2026-08-31，23 个发达市场的大中盘范围及覆盖比例。
[^index-math]: S&P Dow Jones Indices，[S&P U.S. Indices Methodology](https://www.spglobal.com/spdji/en/documents/methodologies/methodology-sp-us-indices.pdf)，2026 年 7 月，第 16 页 Index Calculations、第 21 页 Calculation Return Types，指数计算与价格、总回报口径。
[^equal]: S&P Dow Jones Indices，[S&P 500 Equal Weight Index](https://www.spglobal.com/spdji/en/indices/equity/sp-500-equal-weight-index/) 与[等权指数 FAQ](https://www.spglobal.com/spdji/en/education/article/sp-500-equal-weight-index-faq/)，按公司等权、季度再平衡；具体定权参考日与生效规则采用前列 2026 年 7 月方法书。
[^voo-sheet]: Vanguard，[VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf)，2026-06-30，第 2 页持仓公司与行业分布。前十大公司合计 37.9% 采用源表合计。图表输入和设定计算见[本篇数据](https://ou-liu-red-sugar.github.io/notebook/index-funds/inputs.json)与[计算结果](https://ou-liu-red-sugar.github.io/notebook/index-funds/calculations.csv)。
[^voo-prospectus]: Vanguard，[VOO Summary Prospectus](https://www.sec.gov/Archives/edgar/data/36405/000003640526000183/f44783d1.htm)，2026-04-28，投资目标、策略和费用表：管理 0.02%、其他 0.01%、合计 0.03%。
[^nav]: SEC Investor.gov，[Net Asset Value](https://www.investor.gov/introduction-investing/investing-basics/glossary/net-asset-value)，净资产及每份净值定义，2026-09-27 查阅。
[^fund-structure]: SEC Investor.gov，[Characteristics of Mutual Funds and Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/characteristics-mutual-funds-exchange-traded-funds)，2025-04-29，份额买卖及定价；申请后定价的机制另见 SEC [共同基金定价规则背景说明](https://www.sec.gov/rules-regulations/2003/12/amendments-rules-governing-pricing-mutual-fund-shares)，只采用其对 forward pricing 的背景解释。
[^etf]: SEC Investor.gov，[Updated Investor Bulletin: Exchange-Traded Funds](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24)，2023-02-23，AP、大额申赎、证券篮子或现金与份额的交换。
[^rsp]: Invesco，[RSP 产品资料](https://www.invesco.com/us/financial-products/etfs/product-detail?audienceType=Investor&ticker=RSP)，跟踪 S&P 500 等权指数与季度再平衡，2026-09-27 查阅。
[^urth]: iShares，[URTH 产品资料](https://www.ishares.com/us/products/239696/URTH)，跟踪发达市场股票指数的目标，2026-09-27 查阅。
[^cgdv]: Capital Group，[CGDV Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1870128/000005193126000736/cgdv497k.htm)，2026-08-01，投资目标、主动持仓与 0.33% 总费用率；[CGDV 产品资料](https://www.capitalgroup.com/advisor/investments/exchange-traded-funds/details/cgdv)，主要业绩比较基准为 S&P 500。
[^sox]: Nasdaq，[PHLX Semiconductor Sector Index Methodology](https://indexes.nasdaq.com/docs/Methodology_SOX.pdf)，2026 年版（变更记录最近一项于 2026-07-06 生效），成分资格、30 家选样、前三 12%／10%／8% 与其余 4% 的权重上限，以及年度重组与季度再平衡日程，2026-10-12 查阅。
[^soxq]: Invesco，[SOXQ Summary Prospectus](https://www.sec.gov/Archives/edgar/data/1378872/000119312525325650/d54028d497k.htm)，2025-12-19，跟踪 SOX 的投资目标、至少 90% 资产投资于指数成分、集中于半导体行业及 0.19% 年度总费用率。
[^roundhill]: Roundhill，[CHAT](https://www.roundhillinvestments.com/etf/chat/)、[HUMN](https://www.roundhillinvestments.com/etf/humn/)、[OZEM](https://www.roundhillinvestments.com/etf/ozem/) 产品页，主题与主动管理身份，2026-09-27 查阅；例中持仓采用网页标注的 2026-06-30 Top 5 Holdings，HUMN/Optimus 对应其官网业务说明。
[^fee-rules]: SEC Investor.gov，[Mutual Fund and ETF Fees and Expenses](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/mutual-fund-and-etf-fees-and-expenses-investor-bulletin)，2025-07-23，持续费用、销售费用、基金资产扣费及费率表外的交易和中介成本。
[^chat-fee]: Roundhill，[CHAT Prospectus](https://www.sec.gov/Archives/edgar/data/1924868/000199937126018651/chat-485bpos_082526.htm)，2026-08-27，管理费及年度总费用率均为 0.75%。
[^aivsx]: Capital Group，[AIVSX 产品与费用表](https://www.capitalgroup.com/individual/investments/mutual-funds/details/ica-a)，产品页标注最近招募书日期为 2026-03-01，费用数据取自该页；[Class A 销售费及折扣](https://www.capitalgroup.com/individual/investments/share-class-information/reducing-sales-charges.html)。最高前端费 5.75%，持续总费用 0.55%，适用收费依销售安排和资格确定。
[^vanguard-fees]: Vanguard，[共同基金费用与最低投资额](https://investor.vanguard.com/investment-products/mutual-funds/fees)，不收前后端销售负担，持续费用及部分买入/赎回费用另列，2026-09-27 查阅。
