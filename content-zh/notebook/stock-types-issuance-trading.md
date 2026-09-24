{
  "title": "股票的类型、发行与交易形式",
  "description": "从股份权利、发行与员工股权报酬出发，理解归属和解禁，再比较 ADR、代币化产品、个股期货与股票永续。",
  "layout": "entry",
  "notebookid": "zh-stock-types-issuance-trading",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-stock-types-issuance-trading"
}

## 股份的类型与权利 {#nb-b01-rights}

买入一家公司的股票以后，我们还要看自己持有的是哪一种股份。股东能否参与投票、公司怎样向这类股份分配收益，以及公司清算时能够按什么顺序取得财产，都与股份的具体权利有关。同一家公司的不同股份，在这些安排上也可能有所不同。

先把普通股与优先股放在一起看：普通股通常让股东参与公司治理和收益分配，清算时取得偿还债务、完成优先分配后的剩余；优先股则在约定的股息或清算分配上排在普通股之前。这里的“优先”有具体的比较对象，可以按下面三个方面区分：[^stock-types]

| 权利 | 普通股 | 优先股 |
|---|---|---|
| 投票 | 通常参与表决，具体票数由股份类别决定 | 通常不带一般表决权，特殊表决权按条款安排 |
| 分配 | 参与公司决定的股息分配 | 按股份条款享有优先分配安排 |
| 清算 | 偿还债务并完成优先股的优先分配后，取得剩余 | 排在债权人之后、普通股之前，按约定受偿 |

<span data-text-versions id="nb-b01-text-1">公司还可以设置不同类别的股份。比如 Alphabet 的 A 类以 GOOGL 交易，每股一票；B 类不上市交易，每股十票；C 类以 GOOG 交易，通常没有投票权。这三类股份的每股股息和清算权益相同，投票能力却不同<span data-text-detail>（C 类的正式名称是 Class C capital stock，法律要求时仍有相应投票权；B 类转让通常会一比一转为 A 类，章程规定的特定转让除外）</span>。所以，同样参与 Alphabet 的经营成果，持有不同类别股份的人，在公司治理中拥有的表决权可以相差很大。[^alphabet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 股份发行与分配 {#nb-b01-issuance}

认清股份带来的权利以后，再看这些股份怎样到投资者手中。公司需要资金时，可以发行新股，由认购者出资，公司取得融资；原股东希望出售持股时，则可以把已有股份转让给买方，售股款归原股东所有。两种交易都可能让买方成为股东，钱的去向却不同。

Reddit 在 2024 年的首次公开发行中，就同时出现了这两种安排。首次公开发行通常简称 IPO，指公司首次向公众发售股份，常与进入交易所上市交易相连。Reddit 当次发售既有公司出售的新股，也有原股东出售的已有股份，公司不会收到原股东售股部分的款项。承销机构参与组织发售、定价和配售。沿着股份与现金的方向，可以把两条路径列出来：[^reddit-ipo]

| 发售安排 | 股份交给谁 | 认购款流向谁 |
|---|---|---|
| Reddit 发行新股 | 认购者取得公司新发股份 | Reddit |
| 原股东出售已有股份 | 认购者取得原股东转让的股份 | 售股股东 |

上表展示资金流向，未列承销费用。等到股份开始在市场上交易，投资者之间还可以继续转让：买方支付成交款，卖方交出已有股份，这笔钱归卖方，相应股份的持有人发生了变化。取得公司的一部分权益，并不表示每笔买入款都成为公司的新增资金。IPO 发行价对应那次发售，此后市场上的成交价则由各次买卖形成，两者可以不同。[^ipo-trading]

公司还可以把股份或相关权利用于员工报酬，这类安排通常称为股权报酬，英文是 stock-based compensation，简称 SBC。员工以服务取得报酬，股份因此也能从公司流向员工。对于员工，要看拿到的是股票，还是今后取得或购买股票的权利；对于原有股东，则要看奖励安排怎样影响股份总数和自己的持股比例。公司用新股支付奖励时，若原有股东的股数不变、总股数增加，其持股比例就会下降。公司同时取得了员工的服务，这些服务又可能影响经营成果，因此还要把股份数量与经营变化放在一起，理解每股能够分到什么。[^sbc]

以员工期权和限制性股票单位（RSU）为例，两者取得股票的过程就不同。员工期权给予按约定行权价购买股票的权利，员工行权时要支付购股款；本篇所说的 RSU 则由公司在条件满足后交付股份，授予时员工尚未拿到对应股票。第二篇已经介绍过行权购股所需的现金，这里可以接着理解员工期权的付款。不过得到一项奖励以后，还要等到哪些条件满足，才能取得相应股份？[^sbc-example]

## 归属、锁定与解禁 {#nb-b01-vesting}

这就要沿着奖励安排，把授予、归属和实际取得股份的时点分别看清。公司授予奖励，先确定员工可以按什么约定取得报酬；奖励还可能要求员工完成一定服务年限、达到业绩目标，或满足其他约定条件。以这里的员工期权和 RSU 来说，满足相应归属条件后，期权还要经过行权，RSU 还要按安排交付股份。而已经持有股份的人，也可能在一段时间内受到出售限制，例如创始人、早期投资者和员工在 IPO 时约定的锁定。奖励是否已经归属，与股份能否出售，需要分别看。[^vesting-lockup]

<span data-text-versions id="nb-b01-text-2">Reddit 的员工 RSU 提供了一个实际例子。部分奖励既要求完成服务，也要求达到上市条件。已经满足服务条件的那部分奖励，在 IPO 注册生效、上市条件满足后进入结算，公司随后交付了股份<span data-text-detail>（Reddit 在 2024 年第二季度报告中披露了这次已经发生的结算，同时扣留部分股份用于处理相关税款；这里的上市条件满足时点是 IPO 注册生效，区别于首日交易和发行完成）</span>。这段经过说明，授予奖励、满足服务条件和实际收到股份，可以发生在不同时间。[^reddit-rsu]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-b01-text-3">收到股份以后，能否马上卖出还要看出售限制。Reddit 的 IPO 锁定条款允许既有期权行权和 RSU 结算，但由此取得的股份仍受锁定。这样，奖励可以继续按约定执行，出售股份却还需要等待锁定期结束，或符合相应例外<span data-text-detail>（一般锁定期限为 2024 年第二季度业绩公开后第三个交易日开市，或招股书日期后 180 日，两者取较早者；IPO 售股和某些处理税款的交易另有例外）</span>。把取得与出售这两件事分开，时间关系就清楚了：[^reddit-lockup]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

| 观察的问题 | Reddit 例子中的安排 |
|---|---|
| 员工怎样取得股份 | 按奖励约定满足服务及其他条件，再通过期权行权或 RSU 结算取得股份 |
| 这些股份何时可以出售 | 行权或结算所得股份仍受 IPO 锁定，出售还要符合锁定期限或例外安排 |

锁定期结束、相关出售限制解除，通常称为解禁。再把这些安排放回市场，就能区分几种不同的变化：发行新股增加公司在外股份；已有股份解禁扩大可以出售的范围；持有人实际卖出，才形成一笔交易。因此，解禁消息首先告诉我们哪些人的哪些股份获得了出售机会，实际增加多少卖盘，还要看持有人是否出售、卖出多少。股价也会受买方需求和市场原有预期影响，不能仅由解禁股数推出其后的涨跌。[^lockup]

## 围绕股票的持有与交易形式 {#nb-b01-forms}

### ADR 与存托安排 {#nb-b01-adr}

前面讨论了股份怎样取得、何时能够出售；进入不同市场交易时，我们还会遇到代表这些股份的存托凭证。第三篇的 SKHY 就是一个例子。它以 SK 海力士的韩国普通股为基础，由存托银行发行在美国市场交易的存托证券，每份对应十分之一股韩国普通股。投资者因此可以在美国市场买卖与这部分股份对应的权益。[^adr][^skhy]

这层联系由托管和存托安排维持。韩国原股进入当地托管安排，托管机构确认存入的股份后，存托银行据此发行相应的存托证券。在 SKHY 的公开存托文件中，Citibank 是存托银行，Korea Securities Depository 是韩国托管机构。投资者买入已有的 SKHY，持有的是存托证券，买款付给卖方；原股仍在托管安排中。这也接上了前面的资金流向：在市场上转让已有凭证，同样不等于 SK 海力士取得一笔新增融资。[^skhy-terms]

<span data-text-versions id="nb-b01-text-4">存托机构还要处理持有期间的事务。公司支付现金分红后，款项经托管与存托安排处理，再分配给存托证券持有人；公司信息和投票事项也通过这条渠道传递，持有人按通知发出投票指示，再由存托机构依约办理<span data-text-detail>（SKHY 公开存托文件规定，现金分红换成美元、扣除有关税费后分配；投票指示须及时提交，并对应整股股份。费用、汇兑和投票程序会影响持有人实际收到的现金及权利行使）</span>。所以，原股带来的经济利益和治理权利，会经过存托安排传到凭证持有人手中。[^skhy-terms]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-b01-text-5">存托凭证与原股之间还可以按规定转换：存入原股可以形成相应凭证，交回凭证注销则可以提取对应原股。实际办理要满足存托项目的程序，并看经纪商是否提供这项服务<span data-text-detail>（办理还涉及文件、税费、适用规则和处理时间；发行或注销费用之外，也可能有登记、通讯及汇兑成本）</span>。有了这层联系，我们才能继续理解第三篇比较过的价格：除了统一股数和币种，还要考虑买卖时点、转换条件与交易成本，两个市场显示的价差才有具体含义。[^skhy-terms]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 代币化与实际持有的权益 {#nb-b01-tokenization}

<span data-text-versions id="nb-b01-text-6">把权益记录放到链上以后，同样需要沿着提供者和具体安排往回看。第三篇提到的 DTC 方案，就是用代币记录参与者对托管证券的权益，证券仍由原有存管体系保存<span data-text-detail>（这里沿用 2025 年 12 月 11 日公布的方案：底层证券仍登记在 Cede & Co. 名下，代币转移对应参与者权益记录的更新）</span>。在这类安排中，变化的是权益的记录与转移方式；另一类产品则由第三方发行，用产品条款规定持有人怎样参与某只股票的价格变化。[^tokenized]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

Apple xStock（AAPLx）就是后一类产品。它由 Backed Assets (JE) Limited 发行，是以苹果股票为参考资产的追踪凭证，并由托管的底层资产支持。持有人取得的是这项产品约定的合同权益，苹果是参考股票的发行公司，Backed 则是追踪凭证的发行者；买入 AAPLx 因而不会取得苹果直接股东的投票权。[^xstocks]

<span data-text-versions id="nb-b01-text-7">底层股票的分红也通过产品安排传递经济效果。按 Kraken 对 xStocks 的说明，净分红用于再投资，并通过余额调整反映在持有人账户中<span data-text-detail>（调整采用乘数机制，平台显示的有效持有余额与链上代币枚数需要区分；持有人并非直接领取苹果支付的现金股息）</span>。将 AAPLx 与前面的 ADR 放在一起，两者都需要追踪底层股票与中间机构，但实际持有物和权利传递方式不同：SKHY 依存托安排对应韩国原股，AAPLx 则按 Backed 发行的追踪凭证条款运行。[^xstocks-dividends]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### CME 个股期货与股票永续 {#nb-b01-futures}

围绕一只股票，人们还可以交易按价格变化计算盈亏的合约，用来表达对价格方向的判断，或对冲已有持仓的价格风险。CME 新推出的美股个股期货就属于这种工具：合约以单只股票为标的，到期用现金结算，持有期货不会因此取得公司的股份。[^cme]

<span data-text-versions id="nb-b01-text-8">以苹果标准个股期货 SAAPL 为例，一份合约的乘数为 100 股。合约报价每股上涨 1 美元，一份多头的盈亏就增加 100 美元；报价每股下跌 1 美元，盈亏则减少 100 美元。交易者按要求存入保证金来开仓和维持持仓，保证金只占合约名义金额的一部分，盈亏仍按合约乘数计算<span data-text-detail>（这里计算的是价格变化造成的毛盈亏，未扣费用；名义金额等于期货报价乘以 100。该合约到期按标的股票主上市交易所的官方收盘价，以美元现金结算）</span>。持有期间若亏损使账户资金不足，就需要补充资金或调整持仓；最初交纳的保证金也不能用来界定最大损失。[^cme][^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

股票永续采用另一套到期和持有安排。以 Kraken 的 AAPLx 永续合约为例，苹果股票的代码是 AAPL，前面介绍的追踪凭证是 AAPLx，而这里买卖的是参考 AAPLx 价格的永续合约。持有这份合约会形成相应盈亏，合约不会交付苹果股票或 AAPLx 代币；持有人也不直接取得前面 AAPLx 持有人的分红再投资余额。[^perpetual]

<span data-text-versions id="nb-b01-text-9">这份永续合约没有固定到期日，但持仓需要持续满足保证金要求，并按资金费安排收付资金。资金费在多空双方之间转移：费率为正时，多头向空头支付；费率为负时，空头向多头支付<span data-text-detail>（本文采用 Kraken 合约代码 PF_AAPLXUSD 的通用规格；资金费持续计提，在每小时末或持仓净额变化时结算。合约盈亏以美元计值、默认用美元结算，平台允许的抵押物可以包括多种资产）</span>。所以，与有到期日的 CME 个股期货相比，永续合约不以固定到期日限定持有时间，期间的资金安排却仍需接续。第二篇讨论的现金需要，在这里表现为能否承受持仓盈亏、准备保证金，以及处理资金费收付。[^perpetual-spec]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

回到第二篇的看涨期权，我们还可以围绕同一只股票交易购股权利：买方先付权利金，取得在约定期限内按约定价格购股的权利，选择行权时再准备购股款；卖方则承担对应的履约义务。把本篇已经出现的形式放在一起，可以作如下比较：[^options]

| 形式 | 实际持有物及提供者 | 主要资金安排 | 本文说明的用途 |
|---|---|---|---|
| 直接股票 | 公司发行的股份 | 买股时支付价款 | 参与公司权益 |
| ADR，例如 SKHY | 存托银行发行的存托证券 | 购买凭证，持有及转换涉及相应费用 | 在另一市场持有对应的存托权益 |
| AAPLx | Backed 发行的追踪凭证 | 购买产品，按其条款处理分红经济效果 | 通过链上产品参与苹果股票的价格变化 |
| CME 苹果个股期货 | 按 CME 规则交易的期货合约 | 保证金、持仓盈亏及到期现金结算 | 表达价格判断或对冲价格风险 |
| Kraken AAPLx 永续 | 平台提供的永续合约 | 保证金、持仓盈亏和资金费 | 持续表达价格判断或对冲价格风险 |
| 本文的股票看涨期权买方 | 合约规定的购股权利 | 先付权利金，行权时另付购股款 | 在有效期内保留按约定价格买股的选择 |

认清底层是哪家公司以后，我们还要把具体持有物与它的权利、交易和付款安排联系起来。同样关注一家公司的前景，直接持股、持有对应凭证和交易价格合约，会使这份判断通过不同的方式形成收益、损失与现金需要。

[^stock-types]: [Investor.gov：Stocks](https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks)，What kinds of stocks are there? 及清算顺序说明。
[^alphabet]: [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)，Item 5、Note 11、Note 12；[股份权利说明](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm)，Voting Rights、Liquidation Rights、Conversion。
[^reddit-ipo]: [Reddit：首次公开发行定价公告](https://investor.redditinc.com/news-events/news-releases/news-details/2024/Reddit-Announces-Pricing-of-Initial-Public-Offering/default.aspx)，2024-03-20；[Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，2022-10-14，IPO、承销机构与售股股东说明。
[^ipo-trading]: [Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，Offering price、Selling shareholders。
[^sbc]: [SEC：Common Startup Securities](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities)，Stock、Stock Option、Restricted Stock；Reddit 的实际股权报酬与结算见下引 2024 年第二季度报告。持股比例变化采用持有股数除以总股数的关系。
[^sbc-example]: [SEC：Common Startup Securities](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities)；[Reddit 2024 招股书](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm)，Equity Compensation，第 171–172 页；Restricted Stock Units，第 205 页。本文选取以股份结算的 RSU。
[^vesting-lockup]: 同上 SEC 奖励介绍及 Reddit 招股书 Equity Compensation、Lock-Up Agreements。本篇分别说明奖励条件与出售限制，不把不同奖励安排合并为固定四步。
[^reddit-rsu]: [Reddit 2024 年第二季度 Form 10-Q](https://s203.q4cdn.com/380862485/files/doc_financials/2024/q2/04d62450-250b-47c1-9af2-5f7aac9f4d40.pdf)，2024-08-06，Note 2 — Initial Public Offering，报告第 12 页、PDF 第 13 页。
[^reddit-lockup]: [Reddit 2024 招股书](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm)，2024-03-20，Lock-Up Agreements，第 215–217 页；第 216 页第 5 项允许既有期权行权、RSU 结算，所得股份继续受锁定。
[^lockup]: [Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，Limited trading volume、Market overhang。发行、解除限制与实际成交的区分为股份计数及交易机制说明。
[^adr]: [SEC：Investor Bulletin—American Depositary Receipts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-88)，2012-08-17。
[^skhy]: [Citi：SK hynix 存托项目](https://depositaryreceipts.citi.com/adr/guides/estfee.aspx?cusip=78392B206&pageId=15&subpageID=114)，SKHY、普通股 ISIN KR7000660001、ORD:DR 1:10；2026-09-24 读取。
[^skhy-terms]: [SKHY 的 F-6 所附公开存托协议格式](https://www.sec.gov/Archives/edgar/data/2120882/000119380526000898/e665622_ex99-a.htm)，2026-07-01 提交；定义 1.4、1.12、1.16，条款 2.2–2.8、4.1、4.9–4.10、4.13，附录 A、B。采用公开协议格式中的存股、托管、发行、分配、投票及注销机制，未将其标作最终签署协议。ADR 是凭证名称，ADS 是凭证所代表的美国存托股份额，正文按每份 SKHY 对应权益讲解。
[^tokenized]: [DTCC：Paving the Way to Tokenized DTC-Custodied Assets](https://www.dtcc.com/press-releases/2025/paving-the-way-to-tokenized-dtc-custodied-assets)，2025-12-11；[SEC 不采取执法行动函及 DTC 申请](https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf)，PDF 第 2–3、13–14 页。本文采用这项已公布方案。
[^xstocks]: [Apple xStock 产品页](https://assets.backed.fi/products/apple-xstock)；[Apple xStock Final Terms and Summary](https://sppdownloaddocumentservice.l-p-a.com/api/DownloadDocument/UPI/CH1436219187/BF%20Final%20Terms%20AND%20Summary%20%28PDF%29)，2026-05-08，发行者、参考资产及 Rights attached / Collateralization 条款。
[^xstocks-dividends]: [Kraken：xStocks FAQ](https://support.kraken.com/articles/xstocks-faq)，2026-09-18 更新，Multiplier、Price and dividends。本文采用净分红再投资及有效余额调整机制。
[^cme]: [CME：Single Stock Futures FAQ](https://www.cmegroup.com/articles/faqs/faq-single-stock-futures.html)，2026-09-24 读取，第 1、3、5、7–11、14–15、19 问；[合约资料卡](https://www.cmegroup.com/markets/equities/files/single-stock-futures-fact-card.pdf)，第 1 页规格、第 2 页 SAAPL。每股变动 1 美元用于展示乘数计算，未采用当前股价。
[^margin]: [CME：Margin—Know What's Needed](https://www.cmegroup.com/education/courses/introduction-to-futures/margin-know-what-is-needed)，Understanding Margin、Types of Futures Margin。
[^perpetual]: [Kraken：What are xStocks perps?](https://www.kraken.com/learn/futures-trading-what-are-xstocks-perps)，定义、AAPLx、参考价格、保证金及现金结算说明。
[^perpetual-spec]: [Kraken：Multi-Collateral Derivatives Contract Specifications](https://support.kraken.com/in/articles/4844359082772-linear-multi-collateral-derivatives-contract-specifications)，2026-09-08 更新，PF_AAPLXUSD、Perpetual Contract Funding Rate Information、PnL 与抵押物说明；采用其通用规格。
[^options]: [FINRA：Options](https://www.finra.org/investors/investing/investment-products/options)，Essentials、Calls/Puts、Equity Options；本篇接续第二篇可行权购股的看涨期权设定。
