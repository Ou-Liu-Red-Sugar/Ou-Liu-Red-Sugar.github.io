# 股票、公司与股价

从买公司的一部分出发，结合 Apple（AAPL）、NVIDIA（NVDA）与 SK hynix（000660／SKHY）的实例，理解基本面、股份、股价与市值。

网页 / HTML: [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)

语言 / Language: zh · 更新 / Revised: 2026-09-25

## 股份与公司经营 {#nb-s01-ownership}

股票是证券市场的主要交易品种之一，代表着持有人在一家公司的股权。比如 Apple（AAPL）的普通股就在 Nasdaq 交易。投资者买入 AAPL，取得的就是 Apple 的股份，也就成为了公司的股东。我们说“买股票就是买公司的一部分”，说的就是这层关系。[^stock]

既然已经成了股东，我们自然会关心这家公司是怎样做生意的。AAPL 会向客户销售 iPhone、Mac 等产品，也会通过 App Store、Apple Music 等服务取得收入。有了收入，还要扣除生产、研发、销售等成本费用和税款，才能知道公司最后赚了多少钱。公司可以留存盈利，用于后续经营和再投资；在安排好经营和偿债等资金需要后，也可以通过现金分红，把钱分给股东。AAPL 在 2025 年 5 月的一次现金分红中，每股就支付了 0.26 美元。对于符合领取条件的股东来说，持有 100 股便会收到税前 26 美元，这就是股东从公司取得现金的一种具体方式。[^apple-business][^apple-dividend]

不过，股东关心的还不止已经拿到手的分红。如果以后购买 Apple 产品的人更多、公司能保持产品竞争力，经营就有机会继续增长；如果需求转弱、竞争加剧，盈利也会受到影响。公司还会怎样使用赚到的钱，是继续投入业务，还是留出更多资金回报股东，也关系到持有这些股份以后能得到什么。公司的业务、盈利能力、竞争地位和资金使用，以及由此形成的经营前景，就是我们要研究的公司基本面。以买入公司一部分的眼光看股票，基本面也就成为判断投资价值最重要的锚点，接上了第一篇介绍的[基本面投资](https://ou-liu-red-sugar.github.io/zh/notebook/investment-returns/)。

## 股价、股数与市值 {#nb-s01-price}

知道自己买的是什么以后，还要看取得这份股权需要付出什么价格。股票可以在投资者之间转让，股价就是一股股票的交易价格。2025 年 4 月 25 日，AAPL 的收盘价是每股 209.28 美元。我们用这个真实价格算一算：100 股对应的金额就是 100 × 209.28 = 20,928 美元。把每股价格乘以持有股数，就得到了这笔持仓的市值。[^apple-price]

如果我们想进一步了解公司全部股权的市场定价，就还要知道公司一共有多少股。AAPL 当时约有 149.36 亿股在外普通股，把它乘以每股价格，就能估算股票市值，也就是按这个股价计算的全部普通股的总价（这里采用 2025 年 4 月 25 日的收盘价和 4 月 18 日的 14,935,826,000 股在外普通股；股数于 5 月 2 日披露，因此本文是结合邻近时点的真实记录作事后估算）。把这两个数放在一起，得到：[^apple-shares]

\[
209.28\text{ 美元/股}\times149.36\text{ 亿股}\approx3.13\text{ 万亿美元}.
\]

这约 3.13 万亿美元说的是全部普通股按市场价格合计值多少钱，并不表示 AAPL 账上有同样多的现金。

## 拆股与并股 {#nb-s01-splits}

不过，每股价格还会随着股份的划分方式改变。公司可以把原来的一股拆成多股，也可以把原来的多股合成一股，分别称为拆股和并股。NVIDIA（NVDA）和当时的 General Electric（GE）就有两个实际例子：

| 公司与调整 | 调整前股数 | 调整后股数 | 每股价格的对应调整 |
|---|---:|---:|---|
| NVDA，2024 年一拆十[^nvda-split] | 1 股 | 10 股 | 调整为原来的十分之一 |
| GE，2021 年八合一[^ge-reverse] | 8 股 | 1 股 | 调整为原来的八倍 |

以一拆十为例，股东原来持有的一股会变成十股，公司总股数也会增加到原来的十倍。持股比例等于持有股数除以公司总股数，分子和分母同时乘以十，比例便保持不变。并股沿相反方向调整：股东的持股数与公司总股数同比例减少，每一股所代表的份额相应扩大（这里比较拆股、并股的比例调整本身，市场交易仍会使价格变化；GE 并股后不足一股的部分，登记股东按方案取得现金替代，经纪商托管账户依其具体安排处理）。这样一来，股东持有的公司比例保持不变，每一股所代表的公司份额却已经变了。

那为什么还要拆股呢？对每股价格比较高的股票来说，拆股以后，买入一整股所需的资金就会减少。一拆十会把这个金额降到原来的十分之一，小额资金因而更容易参与，投资者也能按较小金额买卖和调整仓位。NVDA 公布这次拆股时，就说明希望让员工和投资者更容易持有公司股票。[^nvda-split] 一般来说，拆股有利于交易，也有助于改善流动性，让股票更容易买卖，而不明显推高或压低价格（观察流动性是否改善，可以看买卖价差相对股价的大小、成交金额，或相同交易金额造成的价格影响；比较成交股数时，要先换到相同的股份计量单位）。[^split-liquidity]

并股的目的又有所不同。GE 此前已经剥离了多项业务，股份数量却没有相应减少。于是公司在 2021 年实施八合一，希望让在外股数与转型后的公司规模和业务范围更加相称（这次并股于 7 月 30 日完成，自 8 月 2 日起按调整后的股份单位交易）。[^ge-reverse] 另一些公司则会在股价过低时借助并股提高每股报价，争取重新满足交易所的最低报价要求，以维持上市。[^reverse-purpose]

说到 GE，还可以顺带认识公司分拆。2023 年，GE 的医疗业务以 GE HealthCare（GEHC）独立上市；2024 年，GE Vernova（GEV）也完成了分拆，留下的航空业务以 GE Aerospace（GE）继续经营。原 GE 股东在两次分拆中都按方案取得了新公司的股份，[第一篇提到的 GEV](https://ou-liu-red-sugar.github.io/zh/notebook/investment-returns/#nb-a01-business)就是 GE Vernova 的股票代码。公司分拆改变了业务归属，股东会分别持有不同公司的权益；拆股和并股调整的则是同一家公司的股份单位。[^ge-spinoffs]

## 经营信息与交易预期 {#nb-s01-expectations}

了解了这些股份安排，我们再回到公司的经营。NVDA 在 2024 年 5 月宣布那次一拆十时，也在同一份财报公告里披露，上一财季的收入已经达到约 260 亿美元。拆股告诉我们股份单位怎样变化，收入则让我们看到公司做了多大规模的生意。不过要判断今后的经营前景，还得接着了解需求来自哪里、成本和费用有多少，以及业务能否持续。把这些问题联系起来，我们才能从已经取得的收入，进一步判断未来的盈利，以及持股可能带来的收益。[^nvda-results]

当投资者读到这样的财报时，也会形成各自的判断。有人认为未来的业务和盈利会继续增长，因而愿意出更高的价格；也有人对增长预期较低，愿意付出的价格便会低一些。同时，投资者还要安排自己的资金。正如上一篇[投资期限与现金需要](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)所讨论的，即使对公司经营的看法没有改变，等到一笔已经约定的付款临近，也可能需要卖出股票来准备现金。这些判断和资金安排会影响投资者愿意以什么价格买入或卖出；当买卖双方接受同一个价格并成交时，市场上就形成了这一笔交易的价格。

所以，我们最终还要把公司可能带来的收益和眼前的买入价格放在一起看。在相同持有期里，如果未来取得的分红和卖出所得相同，起初付出的价格越高，投资回报就越低。这样，我们研究的既是公司会怎样经营，也是自己准备以什么价格参与其中。

## 交易载体与对应权益 {#nb-s01-instruments}

有时，同一家公司的权益还会以不同的证券形式出现在不同市场。公司的股份可以在本国市场交易，存托银行也可以以托管的境外股票为基础，发行在另一个市场交易的存托凭证。投资者持有这些凭证，就取得了与托管股份对应的权益。

在美国市场上，这类证券通常称为美国存托凭证（ADR）。以 SK hynix（韩国普通股：000660）为例，美国市场上的 SKHY 是对应其普通股的存托证券（ADR 指存托凭证，ADS 指凭证所代表的美国存托股份额，两种称呼常通用；本文按每份 SKHY 对应十分之一股韩国普通股换算）。虽然交易代码和市场不同，两者仍通过具体的股份对应关系联系在一起。[^adr][^skhy]

有了这层对应关系，我们就可以把两个市场的价格换算后再比较。IBKR 在 2026 年 7 月 16 日记录过这样一个实例：统一对应股数和币种后，SKHY 当时的盘中价格，相对韩国普通股前一次收盘价高出约 30%（SKHY 盘中价为 160.69 美元；韩国普通股前次收盘价为 1,830,000 韩元，按 1 美元兑 1,480 韩元及每份 SKHY 对应十分之一股换算，相当于每份 123.65 美元。160.69 ÷ 123.65 − 1 约为 30%）。因此，即使已经认出了同一家公司，我们也还要看看通过什么证券、在哪个市场买入，会付出怎样的价格。[^skhy-price]

证券权益的记录方式也在变化。比如美国证券存管机构 DTC 在 2025 年 12 月 11 日公布了一项代币化试点方案，提出用区块链上的代币记录和转移证券权益（本方案记录的是参与者对 DTC 托管证券的权益；底层证券仍登记在其名义持有人 Cede & Co. 名下，适用的法律框架不因记录形式改变）。技术形式在变化，我们仍然要沿着这些记录和安排，认清自己实际持有的权益。[^dtc]

认清证券与公司的对应关系以后，我们还会遇到两个更具体的问题：不同股份分别赋予股东什么权利，发行和买卖股份时的钱又流向哪里？下一篇就从股份类型和发行讲起。

[^stock]: [Investor.gov：Stocks](https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks)，What are stocks?；[Apple：Investor Relations FAQ](https://investor.apple.com/faq/)，Stock 部分。
[^apple-business]: [Apple 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/320193/000032019325000079/aapl-20250927.htm)，Item 1 Business；[Apple 2025 财年第二季度 Form 10-Q](https://www.sec.gov/Archives/edgar/data/320193/000032019325000057/aapl-20250329.htm)，损益表。
[^apple-dividend]: [Apple：Dividend History](https://investor.apple.com/dividend-history/)，2025 年 5 月 1 日宣告、5 月 15 日支付的现金分红，每股 0.26 美元。100 股为据此设置的教学持仓，现金分红为税前金额。
[^apple-price]: [Nasdaq-100 Weekly Commentary，2025-04-28](https://www.nasdaq.com/docs/ndx-weekly-earnings-update-april-28-2025)，第 4 页 Apple Inc. 的 Closing Price，第 5 页表尾注明 Data as of 04/25/2025。100 股为依据真实价格设置的教学持仓。
[^apple-shares]: [Apple 2025 财年第二季度 Form 10-Q](https://www.sec.gov/Archives/edgar/data/320193/000032019325000057/aapl-20250329.htm)，封面披露截至 2025 年 4 月 18 日的在外普通股数。
[^nvda-split]: [NVIDIA 2024 Stock Split FAQ](https://investor.nvidia.com/files/doc_downloads/2024/06/nvidia-2024-stock-split_faq_investors.pdf)，2024-06-11，第 1–2、5–10 问。
[^nvda-results]: [NVIDIA：First Quarter Fiscal 2025 Results](https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-first-quarter-fiscal-2025)，2024-05-22，季度截至 2024-04-28；收入摘要约 260 亿美元，拆股安排见同一公告。
[^adr]: [SEC：Investor Bulletin—American Depositary Receipts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-88)，2012-08-17，What is an ADR?。
[^skhy]: [Citi：SK hynix 存托项目资料](https://depositaryreceipts.citi.com/adr/guides/estfee.aspx?cusip=78392B206&pageId=15&subpageID=114)，代码 SKHY、普通股 ISIN KR7000660001 及每份对应十分之一股的比例。
[^skhy-price]: [IBKR：A Quick Primer on ADRs and SKHY](https://www.interactivebrokers.com/campus/traders-insight/ibkr-market-insights/although-economic-conditions-did-not-change-much-between-the-first-and-second-quarters-investors-were-far-more-bullish-in-the-second-quarter/)，Steve Sosnick，2026-07-16。本文采用其中的历史盘中报价、汇率与韩股前次收盘价作比较。
[^dtc]: [DTCC：Paving the Way to Tokenized DTC-Custodied Assets](https://www.dtcc.com/press-releases/2025/paving-the-way-to-tokenized-dtc-custodied-assets)，2025-12-11；[SEC 不采取执法行动函及所附 DTC 申请](https://www.sec.gov/files/tm/no-action/dtc-nal-121125.pdf)，第 2–3 页及附件 PDF 第 14 页有关权益记录与法律框架的说明。本文采用该次公开方案。
[^ge-reverse]: [GE：Reverse Stock Split Frequently Asked Questions](https://www.ge.com/sites/default/files/GE_Reverse_Stock_Split_FAQs.pdf)，2021-09-21 版本，what/why/when、持股比例与零股处理部分。
[^split-liquidity]: [Nasdaq：Analyzing the 2022 Stock Splits](https://www.nasdaq.com/articles/analyzing-the-2022-stock-splits)，Phil Mackintosh，2022-09-08，Tradability mostly improved 及后续相对价差比较。
[^reverse-purpose]: [Investor.gov：Reverse Stock Splits](https://www.investor.gov/introduction-investing/investing-basics/glossary/reverse-stock-splits)，定义及最低报价要求的用途说明。
[^ge-spinoffs]: [GE：完成 GE HealthCare 分拆](https://www.ge.com/news/press-releases/ge-completes-separation-of-ge-healthcare)，2023-01-04；[GE Aerospace：在 GE Vernova 分拆完成后作为独立上市公司运营](https://www.geaerospace.com/news/press-releases/ge-aerospace-launches-independent-investment-grade-public-company-following-0)，2024-04-02。
