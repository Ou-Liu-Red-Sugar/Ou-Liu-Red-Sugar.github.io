{
  "title": "复利、通胀与机会成本",
  "description": "从企业与资金的复利累积出发，用指数、对数、购买力和现实替代理解持有回报，并引入 Sharpe 比较。",
  "layout": "entry",
  "notebookid": "zh-compounding-inflation-opportunity-cost",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-compounding-inflation-opportunity-cost"
}

我们生活在一个复利世界。留在账户里的利息会进入新的本金，企业的增长接在已有的业务规模上，物价也在上一期的水平上继续变化。许多事情都是这样，一段时间的结果，又成了下一段时间的起点。

所以讨论一笔投资赚了多少，我们还得把时间放进去。同样的盈利，一年取得和多年以后才取得，会留下不同的再投资机会，也会经历不同程度的物价变化。在[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)里，我们已经把目光从买入成本移向未来所得；接下来就沿着这笔钱的变化，看看怎样比较等待的结果。

## 复利世界与回报的累积 {#nb-a04-compounding}

先从企业本身看这种积累。当企业把赚到的钱继续投入仍有良好回报的业务，经营基础便能随着再投资扩大；客户、产品和竞争优势的积累，也可能让盈利与现金创造能力进一步改善。随着这些成果兑现，我们对未来每股所得的预期也可能随之上调。Buffett 在 1989 年股东信里表达了以合理价格买入优秀企业的偏好，并指出时间有利于优秀的企业。[^buffett-1989]

一个具体的例子是 Berkshire Hathaway（BRK.A／BRK.B）长期持有 Coca-Cola（KO）。Buffett 在 2022 年股东信里回顾，Berkshire 从 KO 收到的年度现金股息，由 1994 年的 7,500 万美元增加到了 2022 年的 7.04 亿美元。同一笔长期持股，后来每年带来的现金已经更多了。这也接上了[《股票、公司与股价》](/zh/notebook/stocks-company-price/)中的认识：买入股份以后，我们仍然在参与一家不断变化的企业，经营与预期的演进，会和买入价格、后续市场定价一起影响持有回报。[^buffett-2022]

要把各期回报接成一段持有结果，我们还得看计算的基数怎样变化。100 美元上涨 10%，变成 110 美元；下一期再上涨 10%，增加的就是 11 美元，结果变成了 121 美元。两次都是 10%，第二次增加的金额却更多，因为它已经在上一次的结果上继续增长了。用 \(1+R\) 表示一期过后的资金倍数，这两期就是连续乘上两个 \(1.1\)。

<span data-text-versions id="nb-a04-text-1">把每一期留下的结果接续下去，就是复利关系。发生亏损时也同样按变化后的基数计算：先跌 20%，100 美元剩下 80 美元；再涨 20%，就只能回到 96 美元。分红取走还是继续投入，也会改变下一期参与收益的资金，这部分可以接回[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)<span data-text-detail>（以下跨期计算把现金分配计入再投资结果，期间没有额外存入或取出资金。一般形式为 \(V_n=V_0\prod_{t=1}^{n}(1+R_t)\)，其中 \(R_t\) 是第 \(t\) 期普通收益率；外部追加本金另行记录）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这种基数的变化，也能帮助我们理解指数曲线。增长速度相对当时的资金规模保持不变时，每经过同样长的一段时间，金额就会再乘上同样的倍数。我们先用一个利息留在本金里的计息账户，把这条关系延伸到连续时间：在同一利率约定下，将计息间隔不断缩短，每一小段取得的利息随即进入下一小段的本金，便逐渐接近连续复利。将恒定的连续复利率记为 \(r\)，经过 \(t\) 年后的资金就可以写为：

\[
V(t)=V(0)\exp(rt).
\]

<span data-text-versions id="nb-a04-text-2">这里的 \(\exp(rt)\) 就是 \(e^{rt}\)。它把按比例连续累积的过程写了出来，因此研究连续计息的无风险账户时，也常会用到这个形式<span data-text-detail>（每年计息 \(m\) 次时，固定名义年利率 \(r\) 的累积因子为 \((1+r/m)^{mt}\)；当 \(m\) 趋于无穷时得到 \(e^{rt}\)。若已知的是年有效收益率 \(i\)，对应的连续复利率为 \(r=\ln(1+i)\)；连续利率随时间变化时，则写为 \(\exp(\int_0^t r(s)\,ds)\)）</span>。[^compound]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span id="nb-a04-discount">我们也可以把刚才的计算倒过来：按同一利率，将一笔未来收款折算到今天。这个逆向换算叫<strong>贴现</strong>，折回今天的金额就是<strong>现值</strong>，即 \(V(0)=V(t)\exp(-rt)\)。例如，连续复利率为 5% 时，一年后的 100 美元折到今天约为 95.12 美元。这样，收款日期不同的金额就可以先换到同一个时点，再作比较。</span>

前面的计息账户采用固定利率，真实投资的回报却常常每期都不同。要把它们接起来，累计结果就需要由一串不同的增长因子相乘得到；自然对数恰好能把这串乘法变成加法。我们把一期增长因子的自然对数记为 \(g_t\)，也就是这一期的对数收益：

\[
g_t=\ln(1+R_t),\qquad
R_{\text{累计}}=\exp\!\left(\sum_t g_t\right)-1.
\]

<span data-text-versions id="nb-a04-text-3">这样，先将各期对数收益加起来，再用指数还原，就能得到整段的普通收益率。用每天的数据算一个月，或把几个月接成一年，都是同一个过程<span data-text-detail>（前面的两期 10%，每期对数收益为 \(\ln(1.1)\approx0.09531\)；相加后再还原，\(\exp(2\ln1.1)-1=21\%\)。对数收益为零对应金额不变，负值对应减少）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

当观察时间很短、涨跌幅度也不大时，直接把涨幅相加，结果往往也很接近。把刚才的两次 10% 换成两次 1%，累计上涨就是 2.01%，与直接相加的 2% 只差一点。变化幅度小时，指数曲线局部接近直线，对数收益也接近普通收益：

\[
\exp(x)\approx1+x,\qquad \ln(1+R)\approx R.
\]

<figure class="comp-figure" data-compound-demo>
<div class="comp-controls" aria-label="选择观察时长"><button type="button" data-horizon="month" aria-pressed="false">一个月</button><button type="button" data-horizon="ten" aria-pressed="true">十年</button><button type="button" data-horizon="thirty" aria-pressed="false">三十年</button></div>
<a data-compound-full href="/notebook/compounding/compound-ten.svg" target="_blank" rel="noopener" aria-label="打开复利图大图"><img data-compound-image src="/notebook/compounding/compound-ten.svg" width="1000" height="570" alt="固定连续复利率5%，比较初始1万美元在十年内的指数累积与线性近似。指数结果约16487美元，线性结果15000美元。" loading="lazy"></a>
<figcaption><span data-compound-caption aria-live="polite">十年后，指数累积约 16,487 美元，线性近似为 15,000 美元，相差约 1,487 美元。</span> 点击图可查看大图。</figcaption>
</figure>

<span data-text-versions id="nb-a04-text-4">先切到一个月，两条线几乎贴在一起；再把时间拉到十年、三十年，前面已经增加的金额不断参与后续增长，差距就逐渐显出来了。我们短期感受到的近似加法，便能和长期的复利过程联系起来<span data-text-detail>（图中固定连续复利率为 5%，比较 \(10000e^{0.05t}\) 与 \(10000(1+0.05t)\)。两期普通收益直接相加时，省略的是 \(R_1R_2\) 这个交叉项；一阶近似需要相应的变化量足够小）</span>。[^compound]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

把一段时间的回报接起来以后，我们就可以问，它相当于每年以多快的速度增长。假如每年都按同一个比例增长，并且恰好走到实际终点，这个比例就是复合年化收益率。经过 \(T\) 年，资金从 \(V_0\) 变成 \(V_T\)，便有：

\[
R_{\text{年化}}
=\left(\frac{V_T}{V_0}\right)^{1/T}-1
=\exp\!\left(\frac{\ln(V_T/V_0)}{T}\right)-1.
\]

也就是说，先把整段对数收益按年平均，再换回普通收益口径，我们便有了比较不同持有期限的一把尺子。同样累计上涨 20%，一年取得对应年化 20%，五年取得则只相当于年化约 3.7%。

再把这种年化速度放回一项真实投资。Vanguard S&P 500 ETF（VOO）跟踪 S&P 500，持有人既会经历份额价格的变化，也会收到基金分红。这里采用税前、分红再投资的口径：分红继续参与投资，新取得的份额也会带来后续回报。按 2015 年底至 2025 年底的分红调整行情估算，初始 1 万美元在期末约为 39,747 美元，十年的复合年化约为 14.8%。[^voo][^voo-data]

这笔结果已经包括分红。如果只用起止价格计算，原来份额的期末市值约为 33,549 美元；分红及其继续参与投资的影响，则体现在含分红的回报里。在下图的“实际路径与年化”视图中，两条线采用相同的含分红口径，从同一个起点走到同一个终点，月末路径还显示了途中各月的涨跌。[^voo-adjustment]

<figure class="comp-figure" id="nb-a04-history" data-growth-demo>
<div class="comp-controls" aria-label="选择资金观察方式"><button type="button" data-growth-view="nominal" aria-pressed="true">实际路径与年化</button><button type="button" data-growth-view="real" aria-pressed="false">金额与购买力</button></div>
<a data-growth-full href="/notebook/compounding/voo-nominal.svg?v=20260926-4" target="_blank" rel="noopener" aria-label="打开 VOO 回报大图"><img data-growth-image src="/notebook/compounding/voo-nominal.svg?v=20260926-4" width="1000" height="570" alt="VOO从2015年底至2025年底的月末含分红再投资回报估计，与同起点同终点的等效年化路径比较；初始1万美元，期末约39747美元。" loading="lazy"></a>
<figcaption><span data-growth-caption aria-live="polite">按含分红再投资口径估算的月末路径与等效年化路径，十年后都到达约 39,747 美元。</span> 大图：<a href="/notebook/compounding/voo-nominal.svg?v=20260926-4" target="_blank" rel="noopener">实际路径与年化</a> · <a href="/notebook/compounding/voo-real.svg?v=20260926-4" target="_blank" rel="noopener">金额与购买力</a>；<a href="/notebook/compounding/voo-growth-purchasing-power.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a04-text-5">例如，VOO 在 2022 年的全年含分红回报约为 −18.2%，和十年年化 14.8% 相差很大。年化概括了整段结果，实际每年怎样走，仍要沿着真实曲线看；期间需要用钱时，我们能够动用的也只能是当时的持仓价值<span data-text-detail>（图中采用 Yahoo Finance 的调整后收盘价，分红与拆股调整已包含其中，以其比例近似分红再投资总回报，不再额外加一次分红。每月取最后一个交易日，基期为 2015 年 12 月 31 日，终点为 2025 年 12 月 31 日，按十个完整年度年化。允许分数份额，不计投资者税费，基金运营费用已反映在价格中。按期间40次分红逐次以除息日收盘价再投，期末约39,721美元，与图中估计相差约25美元；若分红留作不计息现金，股票与现金合计约36,525美元）</span>。[^voo-data][^voo-adjustment]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 净所得与实际购买力 {#nb-a04-purchasing-power}

把收到的分红继续投入，就能让这部分资金参与后续收益；费用则会从中扣走一部分。同样是 1 万美元，假设扣费前年回报均为 8%，每年末按资产金额扣费：年费率为 0.25% 时，二十年后约剩 44,334 美元；费率为 1% 时，则约剩 38,122 美元。不到一个百分点的费率差，最后形成了约 6,211 美元的差额。

<span data-text-versions id="nb-a04-text-6">原因就在前面的本金变化里：今天少留下的一部分资金，往后也就少了一份参与收益的机会，费用的影响会随时间继续累积<span data-text-detail>（在这一假设下，期末金额为 \(10000[(1+8\%)(1-f)]^{20}\)，\(f\) 为年费率）</span>。[^fees]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

算清账户最终留下的金额以后，我们还得看看这些钱能够买到多少东西。物价也是在上一期的水平上继续变化：若账户金额上涨了 10%，同期物价上涨了 8%，原来需要 100 美元购买的东西，如今需要 108 美元；账户中的 110 美元就只能买到原来数量的约 1.0185 倍。名义金额增加了 10%，购买力实际只增加了约 1.85%。这里按物价换算的是能够购买的数量，前面的贴现则按利率将收款金额换到同一个时点。

再看前面那笔 VOO 投资。2015 年 12 月至 2025 年 12 月，美国 CPI-U 累计上涨约 37%；期末的 39,747 美元，换成起点物价衡量，购买力约相当于 29,011 美元。把[上图切换到“金额与购买力”](#nb-a04-history)，就能沿着同一段持有过程，看见账户金额与实际购买力的差别。[^cpi]

<span data-text-versions id="nb-a04-text-7">前面的对数在这里又能派上用场。名义资金的增长因子除以物价增长因子，就是购买力的增长因子；取对数以后，这个除法就变成了两项相减。财富与物价都在累积，我们便可以比较两者增长的速度<span data-text-detail>（普通实际回报为 \((1+R)/(1+\pi)-1\)，对数口径则为 \(\ln(1+R)-\ln(1+\pi)\)。常用的 \(R-\pi\) 是小变幅近似。图中采用美国 CPI-U 全项目、未季调月指数，序列 CUUR0000SA0，基期与终期分别为 236.525、324.054；换算的是美元对应的美国消费购买力。实际消费币种和消费结构不同，比较时需相应调整）</span>。[^cpi]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-a04-text-8">美联储所说的价格稳定，也需要放在这种持续变化里理解。它追求最大就业和价格稳定，长期通胀目标为个人消费支出价格指数（PCE）年涨幅 2%。即使正通胀稳定在目标水平，物价仍会逐年累积；通胀率降下来以后，我们也仍可能感到东西在变贵，只是涨得没有原来那么快了<span data-text-detail>（美联储的目标按总体 PCE 价格指数衡量；前面用 CPI-U 换算购买力，两者采用不同统计口径。长期目标也不等于每一年的实际通胀都会恰好达到 2%）</span>。[^fed]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

为了影响需求与通胀，美联储会使用利率等政策工具，影响短期资金价格和金融条件。现金、短债能提供怎样的收益，企业和个人借款需要付出多少成本，也会随之变化。具体的决策、工具和市场预期，我们放到[《美联储与货币政策》](/zh/notebook/federal-reserve-monetary-policy/)展开。对持有资金的人来说，短期利率变化，也会改变持股、持债和保留现金之间的比较。

## 机会成本与风险补偿 {#nb-a04-opportunity-cost}

知道一笔投资留下了多少购买力以后，我们还可以把它与其他资金用途放在一起比较。先把期间要用的钱留足，再看余下的资金：继续持股、转入期限匹配的短债，或者留在能够随时取用的现金中，各自会得到什么？这也接回[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)的认识，先确认哪些用途符合自己的时间安排，再比较回报。

我们取一笔真实发行的美国国债来看。2023 年 6 月 13 日拍卖的 52 周国债，6 月 15 日发行，2024 年 6 月 13 日到期，每 100 美元面值的拍卖价格约为 95.015 美元。这也呼应了前面的贴现：今天支付较少的金额，换取约定的到期收款。用 1 万美元预算，可以买到 10,500 美元面值，支付约 9,976.60 美元，另留 23.40 美元现金；到期收回面值，合计就有 10,523.40 美元。[^bill]

| 同一笔 10,000 美元的安排 | 2023 年 6 月 15 日至 2024 年 6 月 13 日的结果 | 作决定时能够依据什么 |
|---|---:|---|
| 保留不计息现金 | 10,000 美元 | 金额不因行情变化，可以取用 |
| 持有这笔短债至到期，另留余额 | 约 10,523 美元 | 买入价、面值与到期日已经给定 |
| 持有 VOO，分配再投资 | 约 12,444 美元 | 根据经营与价格形成预期，途中承受市场波动 |

<span data-text-versions id="nb-a04-text-9">这段行情里，VOO 最后实现了较高的回报；但在 2023 年作决定时，我们能够从短债条件里确定到期收款，却还不知道 VOO 一年后的市场价格。机会成本的比较，需要放在当时可取得的条件和能够形成的预期上。放弃的最佳可行替代所能带来的价值，就是这项选择的机会成本<span data-text-detail>（表中短债 CUSIP 为 912797FS1，期限 364 天，按每 100 美元面值认购，留存现金不计息；不计投资者税费。VOO 按相同起止日期的调整后收盘价比例估算含分红回报，允许分数份额，采用事后数据。拍卖结果中的 5.208% Investment Rate 采用等价票息收益率口径，表内现金结果直接按价格与面值计算）</span>。[^bill][^voo-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

有了短债的收益作参照，转向股票时，我们会希望多取得一部分收益，来补偿持有期间的波动与其他不确定性。而现金保留的取用便利，也可能是当时需要的条件。把这些因素放到同一资金安排里，我们才有依据判断等待是否值得。

我们还可以把无风险收益作为共同参照，进一步比较风险资产的回报与波动。把每一期投资收益率减去同一期的无风险收益率，得到超额收益；再看它的平均值和标准差，便能知道平均多赚了多少，以及这些结果在各期之间起伏多大。Sharpe 比率将两者放在一起：

\[
\operatorname{Sharpe}
=\frac{\text{平均超额收益}}{\text{超额收益的标准差}}.
\]

回看历史时，我们用实际数据计算这两个量；比较未来时，也可以采用明确的预期与假设。William F. Sharpe 在介绍这一比率的文章里，就给过一个简单对照：设同一期间的无风险收益率为 3%，两只基金的预期收益与波动如下。[^sharpe]

| 原文中的假设基金 | 预期收益率 | 收益标准差 | 预期超额收益 | Sharpe |
|---|---:|---:|---:|---:|
| X | 5% | 10% | 2% | 0.20 |
| Y | 8% | 20% | 5% | 0.25 |

Y 的波动是 X 的两倍，预期超额收益却是 X 的 2.5 倍，因此每单位波动对应的额外收益更高。把一半资金放在 Y、一半放在无风险资产里，组合的标准差便降到 10%，和 X 相同，预期收益却为 5.5%。有了无风险资产参与组合，我们就能把两项选择调整到相同的波动水平，再比较预期收益。

<span data-text-versions id="nb-a04-text-10">回到自己的投资，Sharpe 提供了一个比较收益与波动的角度；我们还要结合基本面前景、资金的取用时间和眼前的价格，判断是否继续持有<span data-text-detail>（标准 Sharpe 使用同频普通超额收益，不能直接把复合年化收益率或平均对数收益代入分子。原文算例采用固定的无风险收益率，因此超额收益的标准差等于基金收益标准差；半仓组合沿同一期、无交易成本的假设计算。历史样本通常使用样本均值与样本标准差，换算年度口径还需处理收益相关性）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<link rel="stylesheet" href="/notebook/compounding.css?v=20260926">
<script src="/notebook/compounding.js?v=20260926-4" defer></script>

[^buffett-1989]: Warren Buffett，[Berkshire Hathaway 1989 年股东信](https://www.berkshirehathaway.com/letters/1989.html)，Mistakes of the First Twenty-five Years：优秀企业、合理价格与时间的关系。
[^buffett-2022]: Warren Buffett，[2022 年股东信](https://www.berkshirehathaway.com/letters/2022ltr.pdf)，The Secret Sauce：KO 长期持股与年度现金股息。文中金额为 Berkshire 收到的年度分红，分别对应 1994 年与 2022 年。
[^compound]: Jonathan Goodman，NYU Courant，[Compound interest](https://math.nyu.edu/~goodman/teaching/MathFin2019/handouts/CompoundInterest.pdf)：离散与连续复利、指数及对数的一阶近似。
[^voo]: Vanguard，[VOO 官方资料](https://fund-docs.vanguard.com/F0968.pdf)，基金跟踪对象及分配再投资、税前与扣除基金费用后的业绩口径。本文历史曲线采用下一条列明的市场数据。
[^voo-data]: [Yahoo Finance：VOO 历史行情](https://finance.yahoo.com/quote/VOO/history/)，读取于 2026-09-26。2015-12-31 至 2025-12-31，调整后收盘价由 156.8276978 至 623.3413696，累计增长约 297.47%；2023-06-15 至 2024-06-13 的对应值为 389.5532837、484.7463074，增长约 24.44%。[每日输入](/notebook/compounding/voo-daily.csv)与[月末资金路径及购买力计算](/notebook/compounding/voo-growth-purchasing-power.csv)供复算。
[^voo-adjustment]: [Yahoo：What is the adjusted close?](https://help.yahoo.com/kb/SLN28256.html)，调整后收盘价包含分红与拆股调整。本文原始数据中有40次分红事件，以除息日前一交易日价格计算分红调整因子；这与逐笔按实际成交价再投资的规则不同。起止普通收盘价为186.9299927、627.1300049美元，仅价格变化对应的期末金额为33,548.92美元；[分红事件与复算输入](/notebook/compounding/voo-dividends.csv)列出两种再投资口径及现金分红。
[^fees]: SEC Investor.gov，[How Fees and Expenses Affect Your Investment Portfolio](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated)，持续费用与后续投资本金。本文金额按所列假设自行计算。
[^cpi]: BLS，[Purchasing power and constant dollars](https://www.bls.gov/cpi/factsheets/purchasing-power-constant-dollars.htm)及[CUUR0000SA0 数据](https://data.bls.gov/timeseries/CUUR0000SA0)，美国城市消费者、全项目、未季调 CPI。2015年12月为236.525，2025年12月为324.054。截至2026-09-26复核，本图所用未季调全项目CPI-U的2025年10月官方值仍缺失。BLS为季调计算采用了9月与11月指数的几何平均估补，并补发部分非调查分项；这与发布本系列10月正式值有别，见[缺失数据与后续处理说明](https://www.bls.gov/cpi/additional-resources/2025-federal-government-shutdown-impact-cpi-faq.htm)第2、3、12项。图中虚线连接相邻已知月份，数据表中该月仍留空；[计算输入](/notebook/compounding/voo-growth-purchasing-power.csv)。
[^fed]: Federal Reserve，[Statement on Longer-Run Goals and Monetary Policy Strategy](https://www.federalreserve.gov/monetarypolicy/files/fomc_longerrungoals.pdf)，2026-01-27 再确认；[长期 2% 通胀目标说明](https://www.federalreserve.gov/faqs/economy_14400.htm)。
[^bill]: TreasuryDirect，[2023-06-13 拍卖结果](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2023/R_20230613_2.pdf)及[发行公告](https://www.treasurydirect.gov/instit/annceresult/press/preanre/2023/A_20230608_2.pdf)：364 天国债，CUSIP 912797FS1，每100美元面值价格95.015222，2023-06-15发行，2024-06-13到期。10,500美元面值的成本取到分为9,976.60美元。
[^sharpe]: William F. Sharpe，[The Sharpe Ratio](https://web.stanford.edu/~wfsharpe/art/sr/SR.htm)，The Ratio、Time Dependence、Related Measures。X/Y与半仓Y的比较均来自原文假设，所有收益和标准差采用同一期口径。
