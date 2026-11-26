{
  "title": "股票、公司与股价",
  "description": "从一笔 100 股 AAPL 的持仓出发，理解股权份额、分红、股价与市值，再看拆股、分拆和存托凭证怎样改变持有的形式。",
  "layout": "entry",
  "notebookid": "zh-stocks-company-price",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-stocks-company-price"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

## 100 股 AAPL 意味着什么 {#nb-s01-ownership}

买入 100 股 Apple（AAPL），我们就成了这家公司的股东。AAPL 普通股在 Nasdaq 交易，代表持有人在公司中的股权，平时常说“买股票就是买公司的一部分”，指的正是这层关系。这一小份究竟有多大？2025 年 4 月中旬，AAPL 大约有 149.36 亿股在外普通股，100 股大概只占其中的 1.49 亿分之一。[^stock]<sup>，</sup>[^apple-shares]

份额虽小，享有的权利却与其他股东一样按股数计算。AAPL 一边向客户卖出 iPhone、Mac 等硬件，一边靠 App Store、Apple Music 等服务收钱；扣掉生产、研发、销售等各项成本费用和税款，余下的才是公司利润。这部分利润可以留在公司继续经营和再投资，也可以在安排好经营和偿债所需的资金以后，以现金分红交给股东。2025 年 5 月，AAPL 每股派发 0.26 美元，符合领取条件的 100 股就收到税前 26 美元。[^apple-business]<sup>，</sup>[^apple-dividend]

<figure class="flow-figure fan-out" id="nb-s01-holding">
<div class="ff-head"><p class="ff-title">一笔 100 股 AAPL 的持仓</p><span class="ff-sub">2025 年 4—5 月的实际数字</span></div>
<div class="fo-grid business-exchange" aria-label="持有 100 股 AAPL：按 2025 年 4 月 18 日约 149.36 亿股在外普通股计算，约占其中的 1.49 亿分之一；2025 年 5 月每股分红 0.26 美元，100 股税前收到 26 美元；按 2025 年 4 月 25 日收盘价 209.28 美元计算，持仓市值为 20,928 美元。">
<div class="ff-party ff-party-focus fo-src"><strong>100 股 AAPL</strong><small>Apple 的普通股</small></div>
<div class="fo-fork"><em></em><i></i><i></i><i></i></div>
<div class="fo-outs">
<div class="fo-out"><b>份额</b><strong>约 1.49 亿分之一</strong><small>100 ÷ 149.36 亿股在外普通股</small></div>
<div class="fo-out"><b class="fo-cash">现金</b><strong>税前 26 美元</strong><small>2025 年 5 月那次分红：0.26 美元 × 100 股</small></div>
<div class="fo-out"><b>市值</b><strong>20,928 美元</strong><small>4 月 25 日收盘价 209.28 美元 × 100 股</small></div>
</div>
</div>
</figure>

股东看重的当然不只是已经发到手的分红。买 AAPL 产品的人越来越多、产品一直有竞争力时，生意就有机会继续往上走；反过来，一旦需求转弱、竞争加剧，盈利也会跟着承压。公司怎样使用赚到的钱——继续投入业务，还是拿出更多资金回报股东——同样关系到持有这些股份以后能得到什么。公司的业务、盈利能力、竞争地位和资金使用，以及由此形成的经营前景，合起来就是我们要研究的基本面；抱着买入公司一部分的眼光看股票，基本面自然成为判断投资价值的出发点，[《Agent 时代的基本面投资》](/zh/notebook/investment-returns/)正是从这里讲起。

## 股价、股数与市值 {#nb-s01-price}

弄清自己买到的是什么以后，还要看取得这份股权付出了什么价格。股票可以在投资者之间转让，股价就是一股股票的交易价格。2025 年 4 月 25 日，AAPL 收于每股 209.28 美元，100 股对应 100 × 209.28 = 20,928 美元，这就是这笔持仓的市值。[^apple-price]

<span data-text-versions id="nb-s01-text-1">想看整家公司全部股权的市场定价，就把前面的 149.36 亿股在外普通股乘以每股价格，估算股票市值，也就是按这一股价折算的全部普通股总价<span data-text-detail>（这里采用 2025 年 4 月 25 日的收盘价和 4 月 18 日的 14,935,826,000 股在外普通股；股数于 5 月 2 日披露，因此本文是结合邻近时点的真实记录作事后估算）</span>。两者相乘，得到：[^apple-shares]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

\[
209.28\text{ 美元/股}\times149.36\text{ 亿股}\approx3.13\text{ 万亿美元}.
\]

<figure class="flow-figure g1-scale-bridge" id="nb-s01-mcap-scale">
<div class="ff-head"><p class="ff-title">同一个股价，两种尺度的市值</p><span class="ff-sub">2025 年 4 月 AAPL 实际数字</span></div>
<div class="g1-sb-wrap business-exchange" aria-label="按 2025 年 4 月 25 日 AAPL 收盘价每股 209.28 美元计算：个人持有 100 股，持仓市值为 20,928 美元；公司全部 149.36 亿股在外普通股，总市值约为 3.13 万亿美元。两个市值相除，每股价格约去，比例等于 100 股除以 149.36 亿股，约 1.49 亿分之一。">
<div class="g1-sb-lanes">
<div class="g1-sb-lane"><span class="g1-sb-tag">个人持仓</span><div class="g1-sb-eq"><span class="g1-sb-chip g1-sb-price">209.28 美元/股</span><span class="g1-sb-op">×</span><span class="g1-sb-chip">100 股</span><span class="g1-sb-op">=</span><span class="g1-sb-res">20,928 美元</span></div></div>
<div class="g1-sb-lane g1-sb-lane-all"><span class="g1-sb-tag">公司全部</span><div class="g1-sb-eq"><span class="g1-sb-chip g1-sb-price">209.28 美元/股</span><span class="g1-sb-op">×</span><span class="g1-sb-chip">149.36 亿股</span><span class="g1-sb-op">≈</span><span class="g1-sb-res">3.13 万亿美元</span></div></div>
</div>
<div class="g1-sb-ratio"><small>两项市值之比</small><strong>约 1.49 亿分之一</strong><span>股价约去，剩下的正是持股比例</span></div>
</div>
<figcaption>市值是按股价折算的全部普通股总价，不代表公司账上有同等数额的现金。</figcaption>
</figure>

这约 3.13 万亿美元，只是按当时股价给全部普通股标出的总价，并不表示 AAPL 账上躺着同样多的现金。同一个股价，乘以自己的股数得到持仓市值，乘以全部股数得到公司市值，两者一除，股价约去，剩下的正好是前面那个 1.49 亿分之一。

## 股价怎样形成 {#nb-s01-expectations}

股价来自买卖双方的成交，而读到同一份财报，投资者常常看法不一。NVIDIA（NVDA）在 2024 年 5 月公布，上一财季的收入已经达到约 260 亿美元。看好业务与盈利继续增长的人愿意出更高的价，对增长预期较谨慎的人出价就会低一些。不过判断今后的经营，单看收入还不够，还得接着了解需求来自哪里、成本和费用有多少，以及这份增长能否持续。[^nvda-results]

交易也不全由对公司的看法驱动，投资者还得安排自己的资金。即使对公司经营的看法分毫未变，等到一笔既定付款临近，也可能需要卖出股票准备现金，[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)会专门讨论这类安排。这些判断加上各自的资金需要，决定了每个人愿意在什么价位买入或卖出；买卖双方在同一个价格上达成一致，就成交了一笔，市场上也就有了最新的成交价。

看一家公司时，不能只问生意好不好，还得同时问一句：按今天这个价格买进去，划算吗？持有期相同、未来拿到的分红和卖出价也一样时，起初买得越贵，最后落袋的回报就越低：

<figure class="flow-figure g1-return-flow" id="nb-s01-price-return">
<div class="ff-head"><p class="ff-title">同样的未来所得，不同的买入价（示意）</p><span class="ff-sub">两年后卖出 120 美元 + 期间分红 4 美元 = 总所得 124 美元</span></div>
<div class="business-exchange" aria-label="示意：同一只股票两年后卖出 120 美元，期间分红 4 美元，合计每股总所得 124 美元。以 90 美元买入，净赚 34 美元，总回报率约 +37.8%；以 100 美元买入，净赚 24 美元，总回报率 +24.0%；以 110 美元买入，净赚 14 美元，总回报率约 +12.7%；若买入价升到 124 美元，净赚 0 美元，总回报率降到 0.0% 的盈亏平衡线。">
<div class="g1-rf-head" aria-hidden="true"><span>今日买入价</span><span>两年后总所得</span><span>净赚</span><span>总回报率</span></div>
<div class="g1-rf-row"><span class="g1-rf-price">90 美元</span><span class="g1-rf-flow"><span class="g1-rf-total">120 <span class="g1-rf-div">+4</span> = <b>124</b></span></span><span class="g1-rf-gain">+34 美元</span><span class="g1-rf-ret"><span class="g1-rf-bar"><i style="--w:100%"></i></span><span class="g1-rf-pct">+37.8%</span></span></div>
<div class="g1-rf-row"><span class="g1-rf-price">100 美元</span><span class="g1-rf-flow"><span class="g1-rf-total">120 <span class="g1-rf-div">+4</span> = <b>124</b></span></span><span class="g1-rf-gain">+24 美元</span><span class="g1-rf-ret"><span class="g1-rf-bar"><i style="--w:63.5%"></i></span><span class="g1-rf-pct">+24.0%</span></span></div>
<div class="g1-rf-row"><span class="g1-rf-price">110 美元</span><span class="g1-rf-flow"><span class="g1-rf-total">120 <span class="g1-rf-div">+4</span> = <b>124</b></span></span><span class="g1-rf-gain">+14 美元</span><span class="g1-rf-ret"><span class="g1-rf-bar"><i style="--w:33.6%"></i></span><span class="g1-rf-pct">+12.7%</span></span></div>
<div class="g1-rf-row g1-rf-zero"><span class="g1-rf-price">124 美元</span><span class="g1-rf-flow"><span class="g1-rf-total">120 <span class="g1-rf-div">+4</span> = <b>124</b></span></span><span class="g1-rf-gain">0 美元</span><span class="g1-rf-ret"><span class="g1-rf-zero-mark">盈亏平衡线</span><span class="g1-rf-pct">0.0%</span></span></div>
</div>
<figcaption>总回报率 =（卖出价 120 + 分红 4）÷ 买入价 − 1。浅琥珀标记为期间分红 4 美元。</figcaption>
</figure>

## 拆股与并股 {#nb-s01-splits}

股价和股数还会随着股份的划分方式一起改变。公司可以把原来的一股拆成多股，也可以把多股合成一股，分别称为拆股和并股。NVDA 在 2024 年实行了一拆十，当时的 General Electric（GE）在 2021 年实行了八合一。下图比较同一位股东在调整前后的持股：[^nvda-split]<sup>，</sup>[^ge-reverse]

<figure class="flow-figure unit-split" id="nb-s01-split" data-ff-views>
<div class="ff-head"><p class="ff-title">调整前后的同一份持股（示意）</p><div class="ff-switch" role="group" aria-label="选择股份调整" hidden><button type="button" data-ff-view-choice="split" aria-pressed="true">NVDA 一拆十</button><button type="button" data-ff-view-choice="reverse" aria-pressed="false">GE 八合一</button></div></div>
<div class="us-row business-exchange" data-ff-only="split" aria-label="NVDA 一拆十之前：这位股东持有 1 股，每股价格记为 P，持仓市值为 P。"><span class="us-when">调整前</span><span class="us-bar" style="--cell:16%"><span class="us-mine"><i></i></span></span><span class="us-note"><strong>1 股</strong> × P = P</span></div>
<div class="us-step business-exchange" data-ff-only="split" aria-label="一拆十：每一股拆成十股，每股价格调整为原来的十分之一。">一拆十：股数 × 10，每股价格 ÷ 10</div>
<div class="us-row business-exchange" data-ff-only="split" aria-label="NVDA 一拆十之后：这位股东持有 10 股，每股价格调整为 P 的十分之一，持仓市值仍为 P；公司总股数也变为原来的十倍，持股比例不变。"><span class="us-when">调整后</span><span class="us-bar" style="--cell:1.6%"><span class="us-mine"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></span><span class="us-note"><strong>10 股</strong> × P/10 = P</span></div>
<div class="us-row business-exchange" data-ff-only="reverse" aria-label="GE 八合一之前：这位股东持有 8 股，每股价格记为 P，持仓市值为 8P。" hidden><span class="us-when">调整前</span><span class="us-bar" style="--cell:2%"><span class="us-mine"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span></span><span class="us-note"><strong>8 股</strong> × P = 8P</span></div>
<div class="us-step business-exchange" data-ff-only="reverse" aria-label="八合一：每八股合成一股，每股价格调整为原来的八倍。" hidden>八合一：股数 ÷ 8，每股价格 × 8</div>
<div class="us-row business-exchange" data-ff-only="reverse" aria-label="GE 八合一之后：这位股东持有 1 股，每股价格调整为 P 的八倍，持仓市值仍为 8P；公司总股数也变为原来的八分之一，持股比例不变。" hidden><span class="us-when">调整后</span><span class="us-bar" style="--cell:16%"><span class="us-mine"><i></i></span></span><span class="us-note"><strong>1 股</strong> × 8P = 8P</span></div>
<p class="us-keep">深色部分的宽度不变：持股比例和持仓市值都不变，变的是每一股的大小。</p>
<figcaption>浅色长条代表公司全部普通股，竖线隔出一股，深色是这位股东的持股。比例为示意，不按实际股数绘制；调整生效以后，市场交易仍会使价格变化。</figcaption>
</figure>

<span data-text-versions id="nb-s01-text-2">以一拆十为例，股东原来持有的 1 股会变成 10 股，公司总股数也同步扩大到原来的十倍。持股比例等于持有股数除以公司总股数，分子和分母同时乘以十，比例自然不变。并股则沿相反方向调整：股东的持股数与公司总股数同比例减少，每一股所代表的份额相应扩大<span data-text-detail>（这里比较拆股、并股的比例调整本身，市场交易仍会使价格变化；GE 并股后不足一股的部分，登记股东按方案取得现金替代，经纪商托管账户依其具体安排处理）</span>。同样的公司权益，只是换了一套股份计量单位。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-s01-text-6">那为什么还要拆股呢？对每股价格较高的股票来说，拆股之后，买入一整股所需的资金就会降下来。一拆十会把这笔金额压到原来的十分之一，小额资金更容易参与，投资者也更方便按较小金额分批买卖和调整仓位。NVDA 公布这次拆股时，就说明希望让员工和投资者更容易持有公司股票。[^nvda-split] 一般而言，拆股也有助于改善流动性，让买卖更顺畅，并减轻较大订单对价格的冲击<span data-text-detail>（观察流动性是否改善，可以看买卖价差相对股价的大小、成交金额，或相同交易金额造成的价格影响；比较成交股数时，要先换到相同的股份计量单位）</span>。[^split-liquidity]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-s01-text-7">并股的目的又有所不同。GE 此前陆续剥离了多项业务，在外股数仍维持在早年的体量上。于是公司在 2021 年实施八合一，让在外股数与转型后的公司规模和业务范围更加相称<span data-text-detail>（这次并股于 7 月 30 日完成，自 8 月 2 日起按调整后的股份单位交易）</span>。[^ge-reverse] 另一些公司则会在股价过低时借助并股提高每股报价，争取重新满足交易所的最低报价要求，以维持上市。[^reverse-purpose]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 公司分拆 {#nb-s01-separation}

拆股和并股只改变同一家公司的股份单位，公司分拆改变的则是业务归属。2023 年，GE 的医疗业务以 GE HealthCare（GEHC）独立上市；2024 年，GE Vernova（GEV）也完成分拆，留下的航空业务以 GE Aerospace（GE）继续经营。原 GE 股东在两次分拆中都按方案取得了新公司的股份，[《Agent 时代的基本面投资》](/zh/notebook/investment-returns/#nb-a01-business)里的设备业务就来自其中的 GEV。[^ge-spinoffs]

<figure class="flow-figure spin-map" id="nb-s01-spinoffs">
<div class="ff-head"><p class="ff-title">一位原 GE 股东持有的公司</p></div>
<div class="sm-track">
<div class="sm-col business-exchange" aria-label="2022 年底，这位股东只持有 GE 的股份，GE 同时经营医疗、能源和航空业务。"><span class="sm-when">2022 年底</span><div class="sm-co"><strong>GE</strong><span class="sm-biz sm-med">医疗</span><span class="sm-biz sm-energy">能源</span><span class="sm-biz sm-aero">航空</span></div></div>
<div class="sm-arrow">2023 年 1 月 <br>GEHC 分拆</div>
<div class="sm-col business-exchange" aria-label="2023 年 1 月医疗业务以 GE HealthCare（GEHC）分拆上市，这位股东按方案取得 GEHC 股份，同时持有经营能源和航空业务的 GE。"><span class="sm-when">2023 年 1 月后</span><div class="sm-co"><strong>GE</strong><span class="sm-biz sm-energy">能源</span><span class="sm-biz sm-aero">航空</span></div><div class="sm-co sm-new"><strong>GEHC</strong><span class="sm-biz sm-med">医疗</span></div></div>
<div class="sm-arrow">2024 年 4 月 <br>GEV 分拆</div>
<div class="sm-col business-exchange" aria-label="2024 年 4 月能源业务以 GE Vernova（GEV）分拆，这位股东按方案取得 GEV 股份；留下航空业务的公司以 GE Aerospace（GE）继续经营。此时这位股东分别持有 GE、GEHC 和 GEV 三家公司的股份。"><span class="sm-when">2024 年 4 月后</span><div class="sm-co"><strong>GE</strong><span class="sm-biz sm-aero">航空</span><small>GE Aerospace</small></div><div class="sm-co"><strong>GEHC</strong><span class="sm-biz sm-med">医疗</span></div><div class="sm-co sm-new"><strong>GEV</strong><span class="sm-biz sm-energy">能源</span></div></div>
</div>
<figcaption>假设这位股东一直持有 GE，并保留分拆时取得的股份。</figcaption>
</figure>

分拆完成以后，原来一张股票里的几块业务各自独立，股东手里变成了三家公司的股份。这三家公司面对的客户、资金需要和行业周期各不相同，研究时也就得一家一家拆开，分别看各自的生意、前景和股价了。

## 交易载体与对应权益 {#nb-s01-instruments}

有时，同一家公司的权益还会以不同证券形式挂在不同市场。除了在本国交易所直接交易普通股，存托银行也可以依托托管的境外股票，在另一个市场发行存托凭证；买下这些凭证，持有人就取得了与底层托管股份对应的权益。

<span data-text-versions id="nb-s01-text-3">在美国市场上，这类证券通常称为美国存托凭证（ADR）。以 SK hynix（韩国普通股：000660）为例，美国市场上的 SKHY 是对应其普通股的存托证券<span data-text-detail>（ADR 指存托凭证，ADS 指凭证所代表的美国存托股份额，两种称呼常通用；本文按每份 SKHY 对应十分之一股韩国普通股换算）</span>。虽然交易代码和市场不同，两者仍通过具体的股份对应关系联系在一起。[^adr]<sup>，</sup>[^skhy]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

有了这层对应关系，我们就可以把两个市场的价格换算后再比较。Interactive Brokers（IBKR）在 2026 年 7 月 16 日记录过这样一个实例，下图先按每份 SKHY 对应的股数换算，再换成美元：[^skhy-price]

<figure class="flow-figure step-chain price-convert" id="nb-s01-adr-price">
<div class="ff-head"><p class="ff-title">把韩国普通股价格换算到每份 SKHY</p><span class="ff-sub">2026 年 7 月 16 日</span></div>
<div class="sc-track">
<div class="sc-node"><strong>1,830,000 韩元</strong><small>韩国普通股前次收盘价，每股</small></div>
<div class="sc-link business-exchange" aria-label="每份 SKHY 对应十分之一股韩国普通股，每股价格乘以十分之一，得到 183,000 韩元。"><span>× 1/10</span><span>每份对应的股数</span></div>
<div class="sc-node"><strong>183,000 韩元</strong><small>每份 SKHY 对应的韩股价值</small></div>
<div class="sc-link business-exchange" aria-label="按 1 美元兑 1,480 韩元换算，183,000 韩元约合 123.65 美元。"><span>÷ 1,480</span><span>韩元/美元</span></div>
<div class="sc-node sc-focus"><strong>123.65 美元</strong><small>换算后的每份价格</small></div>
</div>
<div class="pc-compare business-exchange" aria-label="同一天，SKHY 的盘中价格是 160.69 美元，比换算价格 123.65 美元高出 37.04 美元，约 30%。">
<span class="pc-name">韩股换算价</span><span class="pc-bar"><i style="--w:76.95%"></i></span><span class="pc-val">123.65 美元</span>
<span class="pc-name">SKHY 盘中价</span><span class="pc-bar"><i class="pc-base" style="--w:76.95%"></i><i class="pc-gap-part" style="--from:76.95%"></i></span><span class="pc-val">160.69 美元</span>
<span class="pc-gap">高出 37.04 美元，<strong>约 30%</strong></span>
</div>
<figcaption>韩股取前次收盘价，SKHY 为美股盘中价，两地存在交易时差；该价差不代表同一时点可直接兑现的套利收益。</figcaption>
</figure>

统一股数和币种以后，SKHY 当时的盘中价格比韩国普通股前一次收盘价高出约 30%。因此，即使已经认出了同一家公司，我们也还要看看通过什么证券、在哪个市场买入，会付出怎样的价格。

<span data-text-versions id="nb-s01-text-5">证券权益的记录方式也在变化。比如美国证券存管机构 DTC 在 2025 年 12 月 11 日公布了一项代币化试点方案，提出用区块链上的代币记录和转移证券权益<span data-text-detail>（本方案记录的是参与者对 DTC 托管证券的权益；底层证券仍登记在其名义持有人 Cede & Co. 名下，适用的法律框架不因记录形式改变）</span>。理解这项方案时，我们仍要看代币记录的是谁对哪些证券的权益。[^dtc]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

同一家公司的股份还可能分成不同类别，附带不同的权利；公司发行新股和股东之间转手，资金的去向也不一样。下一篇[《股票的类型、发行与交易形式》](/zh/notebook/stock-types-issuance-trading/)就从这些差别讲起。

<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

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
