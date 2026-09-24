{
  "title": "投资期限与现金需要",
  "description": "从债券与期权的期限出发，理解期间付款、过桥现金和退出安排。",
  "layout": "entry",
  "notebookid": "zh-investment-horizon-cash",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-investment-horizon-cash"
}

<link rel="stylesheet" href="/notebook/period-cash.css">

## 期限与现金回收 {#nb-a02-dates}

许多投资和交易都有明确的期限安排。债券约定什么时候付息还本；期权规定买卖权利在多长时间内有效；一笔已经成交的交易也有付款和交付的时间。上一篇从钱的用途谈起，到了具体投资中，我们还要把这些时间和自己用钱的时间放在一起，看什么时候会收到钱，什么时候又需要付款。

<span data-text-versions id="nb-a02-text-1">先看一张两年期债券：假设我们用 1,000 美元买入这张债券<span data-text-detail>（买价等于面值，也就是约定到期偿还的本金；固定年票息率为 4%，每年付息一次，买入时恰好刚结束一次付息）</span>，每年收到 40 美元利息。等到第二年末，发行人按约归还 1,000 美元本金，并付出最后一次 40 美元利息，我们当次共收到 1,040 美元<span data-text-detail>（本例不允许发行人自行提前还本、结束后续付息；计算忽略税费，收到的利息不再投资）</span>。把买入和收款的过程放在一起，可以列成下面这张表：[^bond]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

| 时点 | 本次现金收付 | 此后仍持有的收款权利 |
|---|---:|---|
| 买入时 | 支出 1,000 美元 | 未来两次利息及到期本金 |
| 第一年末 | 收到 40 美元利息 | 最后一次利息及到期本金 |
| 第二年末 | 收到 1,040 美元 | 本金和利息已全部偿付 |

沿着这张表看下来，两年一共收到 1,080 美元，其中 1,000 美元是归还的本金，80 美元是利息。不过第一年收到的 40 美元已经可以另作安排，本金却还要再等一年才回来。对于这张债券，到期日告诉我们最后一笔约定回款的时间；整条时间线则让我们看清，持有期间还有哪些现金能够使用。

## 期间付款与过桥现金 {#nb-a02-bridge}

现在假设我们刚收到第一年的 40 美元利息，就有另一笔已经约定的 900 美元付款需要履行。先用这 40 美元抵付，还缺 860 美元，而债券要到第二年末才还本。钱还没回来，付款时间却已经到了，这时就需要安排眼前的现金。

<span data-text-versions id="nb-a02-text-2">一种做法是先借入 860 美元，连同收到的利息完成付款，把债券继续留着，等到回款以后再还借款。这样临时接上收付款间隔的钱，就是过桥现金。假设这笔一年借款的利息为 43 美元，届时一共要还 903 美元<span data-text-detail>（本例借款净到账 860 美元，固定年利率为 5%，利息为 860 × 5% = 43 美元；没有其他融资费用，本息均在一年后一次支付，且借款允许用于这笔付款）</span>。另一种做法是现在卖出债券：假设在收息后实际净得 970 美元，就可以连同那 40 美元利息付清 900 美元，余下 110 美元；不过卖出以后，这张债券后续的利息和本金也就归买方了。[^sale]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

两种办法都完成了眼前的付款，接下来再看第二年末各自会留下多少现金：

| 资金安排 | 第一年怎样完成付款 | 第二年末留下的现金 |
|---|---|---:|
| 借款后继续持有 | 40 美元利息加上 860 美元借款，支付 900 美元 | 收到 1,040 美元，偿还 903 美元，剩 **137 美元** |
| 现在出售债券 | 40 美元利息加上 970 美元卖出款，支付 900 美元，剩 110 美元 | 没有这张债券的后续收款，仍余 **110 美元** |

<span data-text-versions id="nb-a02-text-3">在这组设定下，借款并持有到期，比现在出售多留下 27 美元。多等一年收到的 1,040 美元，比现在净卖出的 970 美元多了 70 美元；其中 43 美元要用来支付借款利息，所以最后还多出 27 美元<span data-text-detail>（出售后余下的 110 美元按不计息计算，两条路线其余资产、现金和完成 900 美元付款所取得的权益相同；137 和 110 都是付款后的余额，不是整笔投资的总利润）</span>。不过借款成本越高，这个差额就越小。若一年的总借款成本超过 70 美元，出售路线留下的现金就会更多<span data-text-detail>（无其他费用时，成本 70 美元对应年利率约 8.14%）</span>。决定是否值得多持有这一年时，我们就要把多取得的收款和这段时间的用钱成本一起比较。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

手边已有预留现金时，我们也可以先用自己的钱周转，等债券回款以后再补回来。这样不用支付本例的借款利息，不过在补回之前，这笔现金就不能同时用于其他付款或投资。自己的钱同样会被占用，只是这里要比较的变成了暂时放弃其他用途的代价。

<span data-text-versions id="nb-a02-text-4">除了比较成本，还要看两笔钱的时间能不能接上。如果债券的钱晚到，借款却已经到期，就需要另一笔现金来还款。继续持有债券，也就继续承担它不能按时足额回款的风险<span data-text-detail>（上表假设债券款项先成为可用现金，再归还借款，且没有期间付息、追加抵押或提前追偿要求。实际融资若包含这些安排，应分别放回时间表；债券回款延迟也不会自动取消借款的还款义务）</span>。[^credit]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 期权的有效期与购股付款 {#nb-a02-options}

<span data-text-versions id="nb-a02-text-5">前面那张债券的到期日约定了还本时间；对于期权，到期日则限定了一项权利能够使用到什么时候。以买入看涨期权为例，我们先付一笔费用，取得按约定价格买入股票的权利，这笔费用称为权利金。假设我们支付 300 美元，取得在未来三个月内以每股 100 美元买入 100 股股票的权利<span data-text-detail>（合约的每股权利金为 3 美元，一份对应 100 股；本例允许在有效期内行权，行权时实际付款并取得股票，计算忽略税费）</span>。这时付出的 300 美元只是取得权利的费用，我们还没有买到那 100 股股票。[^options]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

假设我们一直拿着这份期权，没有提前卖出或行权，等到到期时，股价只有 95 美元。此时在市场上买一股只需要 95 美元，使用期权却要付 100 美元，行权没有价格上的好处。到期后，这份未行权的期权失效，没有带来收入，最初付出的 300 美元也就全部损失了。即使股票在第四个月涨到 120 美元，也已经不能再用这份期权买股了。对这类有期限的权利，涨跌方向、幅度和发生时间会共同影响结果。[^call]

现在回到期权还有效的时候，我们再看另外两种处理办法：卖出期权，可以按实际成交款收回现金，再与最初付出的 300 美元比较盈亏；选择行权，就要另外支付 100 × 100 = 10,000 美元，取得 100 股股票。最初的 300 美元权利金不会抵扣这笔购股款。行权后得到的也是股票，还没有把这部分投资变回现金。

<span data-text-versions id="nb-a02-text-6">这就和前面那笔已经承诺的付款有了区别：900 美元是已经约定、只待支付的义务；10,000 美元购股款则由行权触发。至于期权到期时会怎样处理，还要看适用的行权安排<span data-text-detail>（本例这类股票看涨期权，到期时若股价高于约定的购股价，通常会按自动行权安排处理，可能由此产生购股资金需要）</span>。所以在持有期间，我们既要考虑最初付出的权利金，也要看后面是否会发生购股付款，提前想好这笔现金从哪里来、期权又该怎样处理。[^options]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 期限与现金意识 {#nb-a02-awareness}

<span data-text-versions id="nb-a02-text-7">有了这些例子，以后再看一项投资时，我们就可以顺着它的整个持有过程想一遍：资金能够投入多久，期间会不会另有付款，如果提前退出会付出什么代价，卖出后又要等多久才能用到钱<span data-text-detail>（实际交易中，成交、证券与款项的正式交付，以及资金转出有各自的处理时间，需要按实际市场和账户安排衔接）</span>。预期回报合意时，我们还要有资金把这段持有过程接续下去。[^settlement]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

当几项投资放在一起时，还要再看它们的收付款能不能相互配合。几笔付款集中在相近的日期，回款却都要更晚才来，现金缺口就会一起出现。预留现金可以支持已经承诺的付款、应对回款延后，也给后来的调整和投资机会留下空间。随着新的交易和付款安排出现，我们也要重新看看各笔收付款的时间和金额，提前准备可能出现的现金缺口。

[^bond]: [SEC：What Are Corporate Bonds?](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/what-are)，What are the financial terms of a bond?、Credit/default Risk、Call Risk。本文金额与条款为教学设定。
[^sale]: [FINRA：Bonds](https://www.finra.org/investors/investing/investment-products/bonds)，Selling Before the Maturity Date、Bond Pricing。970 美元为本例设定的实际净成交款。
[^credit]: [FINRA：Securities-Backed Lines of Credit Explained](https://www.finra.org/investors/insights/securities-backed-lines-credit)，2024-01-03，What Are SBLOCs?、Interest Rates and Repayment、问题4和8。用于说明保留资产融资仍有利息和合同要求；本文借款为独立教学设定。该文所述 SBLOC 不得用于购买或交易证券，其用途及还款条款不能直接套用于本文。
[^options]: [FINRA：Options](https://www.finra.org/investors/investing/investment-products/options)，Options by Underlying Asset、Options by Expiration、Expiration Risk。本文采用可在到期前行权并交付股票的合约设定。
[^call]: [OIC：Long Call](https://www.optionseducation.org/strategies/all-strategies/long-call)，Description、Max Loss、Profit/Loss、Expiration Risk。
[^settlement]: [SEC：New “T+1” Settlement Cycle – What Investors Need To Know](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin)，2024-03-27，What is Settlement?。这里采用成交与正式交付的区别，不将美国特定交收周期推广到所有市场。
