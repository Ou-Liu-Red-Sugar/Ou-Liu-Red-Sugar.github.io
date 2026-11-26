{
  "title": "投资组合：分散、多资产与风险制衡",
  "description": "从仓位大小与 VOO 穿透重叠出发，用 2020 与 2022 两段真实行情看清跨资产制衡与相关性翻转，再建立期货、期权与 CDS 的合约对冲地图，并落回组合现金与再平衡。",
  "layout": "entry",
  "notebookid": "zh-portfolio-diversification-hedging",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-portfolio-diversification-hedging"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)看的是单只股票的 Risk–Reward 与回撤。回到真实账户，我们手里常常同时拿着宽基基金、几只个股、债券和现金。占总资金 10% 的一只股票腰斩，组合净值只掉 5%；可一旦利率急升、通胀抬头或行业周期转向，让几笔重仓股一起下跌，整套账户的回撤才会考验持有能力。

2022 年美联储持续加息，跟踪 S&P 500 的 Vanguard S&P 500 ETF（VOO）含分红全年跌去约 18.2%，不仅科技成长股跌得更深，连 20 年以上长期美债 ETF（iShares 20+ Year Treasury Bond ETF，TLT）也大跌约 31.2%；把六成资金放进 VOO、四成放进 TLT 的传统股债组合，全年跌了约 23.4%，回撤甚至超过单买 VOO。[^prices]<sup>，</sup>[^tlt] 只靠股票内部多买几只代码，或者套用固定不变的股债比例，都挡不住所有宏观冲击。要把整套账户搭稳，得把仓位大小、跨资产制衡与合约级对冲放在一起看。

## 持仓理由、赔率与仓位大小 {#nb-p01-sizing}

挑中一家有吸引力的公司以后，进组合前还有一道绕不开的题：给它 5%、15%、30% 还是 50% 的仓位？同一个研究判断，配在不同权重上，会给账户带来截然不同的后果。

教科书常提醒投资者“不要把鸡蛋放在一个篮子里”。[^sec-alloc] 不过，在宏观基金经理 Stanley Druckenmiller 看来，无差别地把资金摊进几十个平庸标的，同样会稀释研究价值。他在 1992 年的《The New Market Wizards》访谈里提到从 George Soros 学到的一课：决定长期业绩的分水岭，是**看对时赚了多少、看错时亏了多少**，单纯的胜率排在后面；2015 年在 Lost Tree Club 演讲时，他也主张遇到罕见的高赔率机会就集中下注，同时紧盯那个篮子，一旦逻辑证伪立刻离场。[^druck-wizards]<sup>，</sup>[^druck-losttree]

高集中仓位离不了迅速认错的纪律和良好的流动性。要是只学了重仓下注，真碰上基本面恶化时又像[《亏损、波动与持有能力》](/zh/notebook/loss-volatility-holding-capacity/)里的 Fiserv（FISV）那样等回本，仓位越重，账户越难缓过来。拖动下面的滑块，看看同一只股票在“看对涨 80%”与“看错腰斩 −50%”两种情形下，仓位大小怎样放大这种不对称：

<figure class="flow-figure p01-sizing-lab" id="nb-p01-sizing-lab" data-p01-sizing>
<div class="ff-head"><p class="ff-title">单票仓位的双刃剑：拉动收益与砸坑幅度</p><span class="ff-sub">假设 100,000 美元组合 · 其余仓位价格暂不变</span></div>
<div class="cc-control">
<label for="nb-p01-weight">单票仓位 <output for="nb-p01-weight" data-p01-weight-output>30%</output></label>
<input id="nb-p01-weight" type="range" min="5" max="60" step="5" value="30" disabled>
<div class="cc-presets" hidden><button type="button" data-p01-preset="5">5%</button><button type="button" data-p01-preset="15">15%</button><button type="button" data-p01-preset="30" aria-pressed="true">30%</button><button type="button" data-p01-preset="50">50%</button></div>
</div>
<p class="p01-sz-meta">当前投入金额：<strong data-p01-weight-usd>30,000 美元</strong>（其余仓位合计占剩余比例）</p>
<div class="p01-sz-lanes business-exchange" aria-label="在 100,000 美元组合中比较单票仓位为 5%、15%、30% 和 50% 时的不对称影响：看对涨 80% 时，对总组合净值分别拉动 +4.0%、+12.0%、+24.0% 和 +40.0%；看错腰斩下跌 50% 时，对总组合净值分别拖累 −2.5%、−7.5%、−15.0% 和 −25.0%。若该股腰斩后不再回升，其余仓位分别需整体上涨 +2.6%、+8.8%、+21.4% 和 +50.0% 才能把总资产拉回 100,000 美元。">
<div class="p01-sz-lane">
<div class="p01-sz-label"><strong>看对：该股涨 +80%</strong><small>对整套组合的拉动</small></div>
<div class="p01-sz-track"><i class="p01-sz-bar" data-p01-up-bar style="width:48.0%"></i></div>
<div class="p01-sz-val"><strong data-p01-up-val>+24.0%</strong><small data-p01-up-sub>净值 +24,000 美元</small></div>
</div>
<div class="p01-sz-lane">
<div class="p01-sz-label"><strong>看错：该股跌 −50%</strong><small>对整套组合的拖累</small></div>
<div class="p01-sz-track"><i class="p01-sz-bar p01-sz-down" data-p01-down-bar style="width:30.0%"></i></div>
<div class="p01-sz-val"><strong class="p01-neg" data-p01-down-val>−15.0%</strong><small data-p01-down-sub>净值 −15,000 美元</small></div>
</div>
</div>
<div class="p01-sz-recovery"><span data-p01-rest-note>若这只股票腰斩后不再回升，其余 70% 的仓位需整体上涨 +21.4% 才能把总组合拉回 100,000 美元。</span><span>其余仓位填坑所需涨幅 <strong data-p01-recovery>+21.4%</strong></span></div>
<figcaption>默认展示 30% 仓位；横条以组合净值变动 50% 为满格。仓位升至 50% 时，单票腰斩会迫使剩余半仓涨满 +50% 才能回本。</figcaption>
</figure>

切到 5% 看看：哪怕这只股票大涨 80%，整套组合也只多了 4.0%；切到 50%，涨对了贡献 40.0%，可一旦看错腰斩，剩下的半仓就得整体大涨 50.0% 才能把总资产拉回原点。所以仓位大小既取决于赔率与把握，也受制于看错时的止损条件和组合承受力——研究透彻、有明确证伪信号的标的可以配高一些，把握尚浅或难以跟踪的标的就该控在较小权重。

## 穿透重叠：代码多不等于分散 {#nb-p01-overlap}

就算单只股票的仓位看着都不算太重，几笔持仓叠在一起，真实集中度也可能远高于账面数字。假设手里有一笔 100,000 美元的长期资金，按 40% VOO（40,000 美元）、20% NVIDIA（NVDA，20,000 美元）、15% Amazon（AMZN，15,000 美元）、10% Coca-Cola（KO，10,000 美元）再加 15% 美元现金（15,000 美元）配置。表面上摊在五笔资产里，横跨宽基指数、科技、消费必需品和现金，单票最高才 20%。

可[《指数、基金与 ETF》](/zh/notebook/indices-funds-etfs/)拆解过 VOO 截至 2026 年 6 月 30 日的官方持仓：VOO 里单是 NVDA 就占了 7.5%，AMZN 占 3.6%，整个信息技术行业占到 38.0%。[^voo-sheet] 把我们直持的个股和藏在 VOO 里的份额穿透合并，真实敞口马上变了模样：

<figure class="flow-figure p01-lookthrough" id="nb-p01-lookthrough">
<div class="ff-head"><p class="ff-title">100,000 美元组合：表面配置 vs VOO 穿透后的真实敞口</p><p class="ff-legend"><span class="p01-k-dir">直接持有</span><span class="p01-k-voo">藏在 VOO 里的重叠份额</span></p></div>
<div class="business-exchange" aria-label="100,000 美元组合表面配置为 VOO 40,000 美元（40%）、NVDA 20,000 美元（20%）、AMZN 15,000 美元（15%）、KO 10,000 美元（10%）、现金 15,000 美元（15%）。按 VOO 2026 年 6 月 30 日持仓穿透（NVDA 7.5%、AMZN 3.6%、信息技术行业 38.0%）：VOO 内部另含 NVDA 3,000 美元、AMZN 1,440 美元及信息技术合计 15,200 美元。合并后：NVDA 真实敞口升至 23,000 美元（23.0%），AMZN 升至 16,440 美元（16.4%），GICS 信息技术合计 35,200 美元（35.2%），信息技术加上同属云与 AI 资本开支链的 AMZN 合计达 51,640 美元，占总组合约 51.6%、占股票仓位约 60.8%。">
<div class="p01-lt-stage">
<p class="p01-lt-sub">账面权重<span>5 项配置，单票表面最高 20%</span></p>
<div class="p01-lt-bar"><span class="p01-lt-seg" style="--w:40%;--c:#23695a">VOO <span>40%</span></span><span class="p01-lt-seg" style="--w:20%;--c:#4d8b79">NVDA <span>20%</span></span><span class="p01-lt-seg" style="--w:15%;--c:#7ba895">AMZN <span>15%</span></span><span class="p01-lt-seg" style="--w:10%;--c:#9eb0a5">KO <span>10%</span></span><span class="p01-lt-seg p01-dark" style="--w:15%;--c:#e6c9a5">现金 <span>15%</span></span></div>
</div>
<div class="p01-lt-arrow">按 VOO（2026-06-30）持仓穿透：40,000 美元 VOO 内含 NVDA 3,000、AMZN 1,440 及信息技术 15,200 美元</div>
<div class="p01-lt-rows">
<div class="p01-lt-row"><div class="p01-lt-name">NVDA 合计<small>直持 20,000 + VOO 3,000</small></div><div class="p01-lt-track"><i class="p01-lt-direct" style="--w:20%;--c:#23695a"></i><i class="p01-lt-hidden" style="--w:3%;--c:#a8743f"></i></div><div class="p01-lt-val"><strong>23,000 美元</strong> <em>23.0%</em></div></div>
<div class="p01-lt-row"><div class="p01-lt-name">AMZN 合计<small>直持 15,000 + VOO 1,440</small></div><div class="p01-lt-track"><i class="p01-lt-direct" style="--w:15%;--c:#4d8b79"></i><i class="p01-lt-hidden" style="--w:1.44%;--c:#a8743f"></i></div><div class="p01-lt-val"><strong>16,440 美元</strong> <em>16.4%</em></div></div>
<div class="p01-lt-row"><div class="p01-lt-name">GICS 信息技术<small>直持 NVDA + VOO 38.0%</small></div><div class="p01-lt-track"><i class="p01-lt-direct" style="--w:20%;--c:#23695a"></i><i class="p01-lt-hidden" style="--w:15.2%;--c:#a8743f"></i></div><div class="p01-lt-val"><strong>35,200 美元</strong> <em>35.2%</em></div></div>
<div class="p01-lt-row"><div class="p01-lt-name">信息技术 ＋ AMZN<small>占股票仓位约 60.8%</small></div><div class="p01-lt-track"><i class="p01-lt-direct" style="--w:35%;--c:#23695a"></i><i class="p01-lt-hidden" style="--w:16.64%;--c:#a8743f"></i></div><div class="p01-lt-val"><strong>51,640 美元</strong> <em>51.6%</em></div></div>
</div>
</div>
<figcaption>横条均按 100,000 美元总组合（满格 100%）绘制；AMZN 在 GICS 中归属可选消费，但业务上与云计算和 AI 资本开支紧密相连。穿透口径沿用 VOO 2026-06-30 官方季度资料。</figcaption>
</figure>

<span data-text-versions id="nb-p01-text-overlap">表面只给 NVDA 配了 20%，穿透以后升到 23.0%；单是 GICS 信息技术就占到整套组合的 35.2%，再把同样处在云和 AI 资本开支链条上的 AMZN 算进来，总资金里超过一半（约 51.6%，占股票仓位的 60.8%）绑在同一股需求与利率预期上<span data-text-detail>（VOO 中还持有 KO 及其他消费必需品成分，因 KO 未列于该期前十大持仓表，图中未对 KO 另作穿透叠加；40,000 美元 VOO 对应的消费必需品板块整体约为 1,840 美元。穿透时既要看同一家公司，也要看不同行业标签下共享的客户预算与融资条件）</span>。[^voo-sheet]<sup>，</sup>[^finra-div]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这种“账面分散、底层同因”不仅发生在单一市场。哪怕同时买入美股 NVDA、台股 TSMC（TSM／2330）、韩股 SK hynix（000660）与欧股 ASML Holding（ASML），表面上横跨了四个交易所和四种货币，底层仍是在配置同一条全球半导体与 AI 算力周期的不同侧面。关于跨市场配置里的共同因子与局部背离，留到按需专题[《全球宏观与跨资产配置》](/zh/notebook/global-macro-cross-asset/)专门展开。

## 跨资产制衡与相关性翻转 {#nb-p01-multi-asset}

就算我们把股票仓位真正分散到科技、消费、医疗、工业和能源各个板块，只要整套组合全押在股票上，遇到利率急升、通胀失控或经济衰退这类共同冲击，大多数股票仍会一起承压。FINRA 与 SEC 的分散指南都强调，组合分散要分两层来做：既在股票内部跨行业分散，也在**不同资产类别之间**建立制衡。[^sec-alloc]<sup>，</sup>[^finra-div] Druckenmiller 在 2015 年的演讲里也谈到，他早年特意把视野从股票扩到债券、大宗商品和外汇，正是因为当股市下跌时，这些其他资产池里往往存在能够逆势上涨的工具。[^druck-losttree]

要把多资产真正用出制衡效果，先得看清每类常见资产对**增长、通胀、利率和信用**这四项变量的反应方向：

- **股票**（以 VOO 为例）：长期依赖企业盈利增长，在经济衰退、信用紧缩或无风险利率快速抬升时普遍承压。
- **超短期国债与现金工具**（以 SPDR Bloomberg 1–3 Month T-Bill ETF，BIL 为例）：剩余期限仅 1 至 3 个月，利率上升时很快滚动到更高票息，价格几乎不因加息下跌，是应对利率上行最稳妥的压舱石。[^bil]
- **长久期国债**（以 TLT 为例）：持有剩余期限 20 年以上的美国国债，有效久期约 14—15 年。经济衰退、市场恐慌或央行降息时，资金涌入避险、收益率下行，长债价格会明显上涨对冲股票；反过来，一旦通胀迫使央行急剧加息，高久期会把价格跌幅同样放大。[^tlt]
- **高收益企业债**（以 iShares iBoxx $ High Yield Corporate Bond ETF，HYG 为例）：虽然名字里带着“债”，底层却是非投资级企业债务。经济转弱或股市暴跌时，企业违约担忧推高信用利差，它常常跟着股票一起下跌。[^hyg]
- **实物黄金**（以 SPDR Gold Shares，GLD 为例）与**一篮子商品期货**（以 Invesco DB Commodity Index Tracking Fund，DBC 为例）：黄金不产生利息或股息，独立于企业盈利，在货币信用担忧与实际利率受压时常有支撑；但它也有一层容易被忽视的流动性风险——正因为黄金全球流动性充裕、随时能换成美元，一旦市场爆发系统性流动性挤兑或保证金追缴潮，杠杆机构往往率先抛售黄金套现，导致它在危机最急的几天跟着风险资产同步下挫，常要等恐慌缓和或央行注入流动性后才重拾对冲。一篮子商品覆盖能源、金属与农产品，在供给型通胀里可以直接上涨，不过遇到经济骤然停摆时也会随需求一起回落。[^gld]<sup>，</sup>[^dbc]

把这六类资产以及四套组合，放进 **2020 年疫情衰退冲击**与 **2022 年通胀急加息** 两段真实行情里对照，就能直接看见不同宏观环境下谁在制衡、谁又突然失效：

<figure class="flow-figure p01-regimes" id="nb-p01-regimes">
<div class="ff-head"><p class="ff-title">两段真实宏观冲击下的跨资产表现与相关性翻转</p><span class="ff-sub">Yahoo Finance 调整后收盘价（含分红）· 共同标尺 −40% 至 +25%</span></div>
<div class="business-exchange" aria-label="两段真实冲击的含分红总回报对照：第一段为 2020 年疫情衰退冲击（2020-02-19 至 2020-03-23）：VOO −34.0%、TLT +14.2%、BIL +0.3%、GLD −3.6%、DBC −25.7%、HYG −21.9%；组合结果：100% VOO −34.0%、40% VOO 加 60% 科技三股（NVDA/AMZN/MSFT） −28.0%、传统 60/40（VOO/TLT） −14.7%、多资产组合（40% VOO、15% TLT、25% BIL、10% GLD、10% DBC） −14.3%。第二段为 2022 年通胀急加息全年（2021-12-31 至 2022-12-30）：VOO −18.2%、TLT −31.2%、BIL +1.4%、GLD −0.8%、DBC +19.3%、HYG −11.0%；组合结果：100% VOO −18.2%、40% VOO 加 60% 科技三股 −32.9%、传统 60/40 −23.4%、多资产组合 −9.8%。VOO 与 TLT 的日收益相关性由 2020 全年的 −0.485 翻正至 2022 全年的 +0.086；2022 年 VOO 与 HYG 的日相关性高达 +0.807。">
<div class="p01-rg-head"><span>资产或组合</span><div>2020 疫情冲击<small>2020-02-19 → 03-23（衰退避险）</small></div><div>2022 加息全年<small>2021-12-31 → 2022-12-30（通胀加息）</small></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">VOO<small>美国 S&amp;P 500 股票</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:52.3%"></i></div><span class="p01-rg-val p01-neg">−34.0%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:28.0%"></i></div><span class="p01-rg-val p01-neg">−18.2%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">TLT<small>20+ 年长久期美债</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-pos" style="--w:21.9%"></i></div><span class="p01-rg-val p01-pos">+14.2%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:48.0%"></i></div><span class="p01-rg-val p01-neg">−31.2%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">BIL<small>1–3 个月超短美债</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-pos" style="--w:1.2%"></i></div><span class="p01-rg-val p01-pos">+0.3%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-pos" style="--w:2.2%"></i></div><span class="p01-rg-val p01-pos">+1.4%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">GLD<small>实物支持黄金</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:5.6%"></i></div><span class="p01-rg-val p01-neg">−3.6%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:1.2%"></i></div><span class="p01-rg-val p01-neg">−0.8%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">DBC<small>一篮子商品期货</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:39.5%"></i></div><span class="p01-rg-val p01-neg">−25.7%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-pos" style="--w:29.8%"></i></div><span class="p01-rg-val p01-pos">+19.3%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">HYG<small>美国高收益企业债</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:33.7%"></i></div><span class="p01-rg-val p01-neg">−21.9%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:16.9%"></i></div><span class="p01-rg-val p01-neg">−11.0%</span></div></div>
<p class="p01-rg-sep">同期四套组合结果对照（段初按权重建仓，期间不调仓）</p>
<div class="p01-rg-row"><div class="p01-rg-name">40% VOO + 60% 科技<small>NVDA / AMZN / MSFT 各 20%</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:43.1%"></i></div><span class="p01-rg-val p01-neg">−28.0%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:50.5%"></i></div><span class="p01-rg-val p01-neg">−32.9%</span></div></div>
<div class="p01-rg-row"><div class="p01-rg-name">传统 60/40 股债<small>60% VOO + 40% TLT</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:22.6%"></i></div><span class="p01-rg-val p01-neg">−14.7%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:36.0%"></i></div><span class="p01-rg-val p01-neg">−23.4%</span></div></div>
<div class="p01-rg-row p01-rg-hi"><div class="p01-rg-name">五类多资产组合<small>40 VOO / 15 TLT / 25 BIL / 10 GLD / 10 DBC</small></div><div class="p01-rg-cell"><span class="p01-rg-yr">2020 冲击</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:22.0%"></i></div><span class="p01-rg-val p01-neg">−14.3%</span></div><div class="p01-rg-cell"><span class="p01-rg-yr">2022 全年</span><div class="p01-rg-track"><i class="p01-rg-bar p01-neg" style="--w:15.0%"></i></div><span class="p01-rg-val p01-neg">−9.8%</span></div></div>
</div>
<figcaption>实测日收益相关性：VOO 与 TLT 由 2020 全年的 −0.485 翻正至 2022 全年的 +0.086；2022 年 VOO 与 HYG 的日相关性为 +0.807。<a href="/notebook/portfolio-basics/cross-asset-daily.csv">查看完整日频数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-p01-text-corr">把这两段行情并排来看，先能看到**相关性会随宏观状态翻转**：2020 年经济骤停、央行紧急降息时，TLT 逆势大涨 14.2%，和 VOO 的全年日相关性低至 −0.485，60/40 组合跌幅只有全仓股票的四成多；可到了 2022 年通胀推动加息，VOO 与 TLT 的相关性翻正为 +0.086，长债跌得比美股还深，60/40 反而跑输了单买 VOO<span data-text-detail>（这里采用 Yahoo Finance 调整后收盘价近似含分红再投资总回报，组合收益按各段起始日固定权重、期间不再平衡计算，不计税费和交易成本；2022 年全年四套组合的最大日回撤依次为：100% VOO −24.5%、40% VOO 加 60% 科技三股 −36.4%、60/40 −27.3%、五类多资产组合 −13.8%）</span>。同时，**名字叫债券未必对冲股票**：2022 年 HYG 与 VOO 的日相关性高达 +0.807，2020 年也跟着跌掉 21.9%，因为它背着与股票同源的企业信用风险。把短债、黄金与商品一并纳入制衡后，2022 年 BIL 的正票息（+1.4%）、GLD 的稳定（−0.8%）与 DBC 的上涨（+19.3%）共同托住了账户，让多资产组合在两类相反的危机里都没出现极端回撤。[^prices]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

不过，单看 2020 年起止两点里 GLD 只跌 3.6%，很容易低估它在流动性危机里的脆弱性。拆开 2020 年 3 月中旬的逐日路径就会发现，在 3 月 9 日至 3 月 19 日全球美元挤兑与追保潮最猛的 8 个交易日里，GLD 从 157.81 美元急跌至 138.04 美元，单段回撤约 12.5%（同期 TLT 也在 3 月 9 日至 18 日从 139.31 美元急挫至 117.40 美元，回落约 15.7%）；直到恐慌缓和，GLD 才在 4 月 14 日修复到 162.68 美元之上。越是流动性充裕、越容易立刻变现的资产，在系统性追保潮里越容易先被拿来套现。[^prices]

至于组合整体跟着大盘起伏的幅度，可以用市场敏感度（beta）先建立直觉：大盘跌 10% 时，有些高波动成长股往往跌 15%，防御性股票可能只跌 5%，超短债和现金则近似为 0；整套组合的总体敏感度，大致是各持仓敏感度按仓位加权的结果。如果把高敏感度个股不断加仓，账面上哪怕留着现金，组合随大盘波动的幅度也会被悄悄推高。精确的样本回归估法、\(R^2\) 能解释多少波动以及怎样算对冲张数，我们在按需专题[《保证金、对冲与期间现金》](/zh/notebook/settlement-margin-cash/)里展开。

把刚才几类现货资产与接下来要谈的衍生合约放到同一张宏观棋盘上，就能直接对照它们各自制衡哪一类冲击：

<figure class="flow-figure p01-risk-matrix" id="nb-p01-risk-matrix">
<div class="ff-head"><p class="ff-title">四种宏观状态下，跨资产与合约工具的风险制衡地图</p><p class="ff-legend"><span class="p01-k-up">通常受益 / 提供对冲</span><span class="p01-k-mid">中性缓冲 / 视条款</span><span class="p01-k-dn">通常承压</span></p></div>
<div class="p01-rm-grid business-exchange" aria-label="四种宏观状态下的多资产与合约制衡地图：一、温和增长：股票受益，短债中性，长债中性，黄金与商品中性，期货空头承压，保护性期权与 CDS 消耗保费或息差。二、衰退降息：股票承压，短债中性缓冲，长久期国债受益对冲，黄金偏稳而需求型商品承压，股指期货空头受益，保护性 Put 受益。三、通胀加息：股票与长久期国债同步承压，短债受益于票息重定价，黄金与大宗商品受益对冲，利率与股指期货空头受益，债基或股指 Put 受益。四、信用收缩：股票与高收益债承压，短债受益于流动性避风港，长债避险受益但在极端美元挤兑日亦可能短线遭抛售，黄金因变现最快常在追保潮里先被抛售套现、待恐慌缓和后再修复，股指期货空头受益，CDS 与高收益债 Put 产生凸性赔付。">
<span></span><div class="p01-rm-col">温和增长<small>盈利扩张、利率稳</small></div><div class="p01-rm-col">衰退降息<small>盈利下滑、利率降</small></div><div class="p01-rm-col">通胀加息<small>物价升、利率急升</small></div><div class="p01-rm-col">信用收缩<small>利差飙升、违约增</small></div>
<div class="p01-rm-rowname">股票<small>如 VOO、个股</small></div><div class="p01-rm-cell p01-up"><b>主要引擎</b><span>分享盈利增长</span></div><div class="p01-rm-cell p01-dn"><b>明显承压</b><span>盈利与估值下修</span></div><div class="p01-rm-cell p01-dn"><b>承压</b><span>贴现率上行压估值</span></div><div class="p01-rm-cell p01-dn"><b>承压</b><span>融资收紧、高杠杆领跌</span></div>
<div class="p01-rm-rowname">短债与现金<small>如 BIL、短债</small></div><div class="p01-rm-cell p01-mid"><b>稳健缓冲</b><span>有轻微机会成本</span></div><div class="p01-rm-cell p01-mid"><b>守住本金</b><span>降息后票息渐降</span></div><div class="p01-rm-cell p01-up"><b>票息抬升</b><span>几乎无久期损伤</span></div><div class="p01-rm-cell p01-up"><b>流动性避风港</b><span>保留低位加仓余粮</span></div>
<div class="p01-rm-rowname">长久期国债<small>如 TLT</small></div><div class="p01-rm-cell p01-mid"><b>票息贡献</b><span>价格大致平稳</span></div><div class="p01-rm-cell p01-up"><b>强力对冲</b><span>利率下行推高债价</span></div><div class="p01-rm-cell p01-dn"><b>与股同跌</b><span>高久期放大跌价</span></div><div class="p01-rm-cell p01-up"><b>避险受益</b><span>资金回流无违约国债</span></div>
<div class="p01-rm-rowname">黄金与商品<small>如 GLD、DBC</small></div><div class="p01-rm-cell p01-mid"><b>无票息</b><span>随供需分化</span></div><div class="p01-rm-cell p01-mid"><b>先挤兑后分化</b><span>急跌期易变现、商品承压</span></div><div class="p01-rm-cell p01-up"><b>通胀对冲</b><span>能源与实物受益</span></div><div class="p01-rm-cell p01-mid"><b>先抛售后修复</b><span>变现最快、追保期先套现</span></div>
<div class="p01-rm-rowname">期货空头<small>股指 / 利率期货</small></div><div class="p01-rm-cell p01-dn"><b>反向拖累</b><span>上涨需付盯市现金</span></div><div class="p01-rm-cell p01-up"><b>线性抵补</b><span>股指空头对冲跌幅</span></div><div class="p01-rm-cell p01-up"><b>精准制衡</b><span>债期空头对冲加息</span></div><div class="p01-rm-cell p01-up"><b>抵补大盘</b><span>个股信用风险仍留存</span></div>
<div class="p01-rm-rowname">期权与 CDS<small>Put / 信用保护</small></div><div class="p01-rm-cell p01-dn"><b>保费损耗</b><span>持续付权利金/息差</span></div><div class="p01-rm-cell p01-up"><b>截断下行</b><span>股指 Put 触发保护</span></div><div class="p01-rm-cell p01-up"><b>定向保护</b><span>利率/债基 Put 对冲</span></div><div class="p01-rm-cell p01-up"><b>凸性赔付</b><span>CDS / HYG Put 跳涨</span></div>
</div>
<figcaption>表征常见传导方向而非固定定律；单次冲击的实际幅度还取决于起始估值、利率起点与政策响应速度。</figcaption>
</figure>

## 合约级对冲：期货、期权与 CDS {#nb-p01-hedges}

跨资产配置靠的是不同资产之间的相关性彼此抵销，可一旦遇上 2022 年那样的状态切换，原本负相关的资产也可能突然同向大跌。如果想跳过对历史相关性的猜测、直接按合同条款锁定反向赔付，组合里就会引入三类合约工具：

- **期货**（股指期货如 MES、美债与利率期货）：对称的线性对冲。卖出股指期货可以直接压低组合的大盘暴露，卖出美债期货则能直接对冲利率上升风险，而且不存在期权那样的权利金时间损耗。它的代价落在两边：一方面会对称让渡对应方向的上行收益，另一方面需要交纳履约保证金并承受逐日盯市，一旦标的上涨，账面期货亏损会立刻从现金里扣款。[^contracts]
- **期权**（保护性 Put、股指或债基期权）：非对称的“保险式”制衡。买入看跌期权后，标的跌破行权价以下的大幅亏损由期权赔付抵补，标的继续上涨时多头仓位仍能享受大部分收益；代价是在大多数平稳或上涨年份里，预付的权利金会随着到期临近逐渐损耗。[^contracts]
- **CDS**（信用违约互换，Credit Default Swap）：专门对冲企业或主权的信用恶化与违约风险。在标准合约中，保护买方定期（通常按季）按名义本金向卖方支付约定的息差（spread，好比保费），一旦参考主体发生违约等约定信用事件，卖方须按约赔付；即便尚未违约，只要信用利差急剧走阔，已持有的保护合约价值也会迅速跳升。[^cds-fed]<sup>，</sup>[^cds-sec]

<span data-text-versions id="nb-p01-text-cds">不过，理解 CDS 的机制是一回事，个人账户里能不能直接买是另一回事。美联储研究与 SEC 证词都指出，单名 CDS 与指数 CDS 主要在场外（OTC）市场由大型银行交易商、中央对手方、对冲基金、保险公司与机构资管协商达成，不在传统股票交易所面向散户挂牌<span data-text-detail>（美联储 FEDS 2022-023 引用的 2020 年国际清算银行调查显示，主要交易商未平仓 CDS 名义本金中约 62% 通过中央对手方清算；场外双边交易通常需签订标准法律协议并配套初始与变动担保品安排。常见合约期限为 1 至 10 年，以 5 年期最为普遍）</span>。个人投资者若在组合中面临信用收缩风险，现实替代往往是买入高收益债 ETF（如 HYG）看跌期权、直接削减高杠杆标的仓位，或把风险仓位切回短期国债。[^cds-fed]<sup>，</sup>[^cds-sec]<sup>，</sup>[^hyg]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

把这三类合约工具沿对冲形态、常态代价、期间现金与个人可得性并排比较，选型边界就很清楚：

<figure class="flow-figure p01-hedge-map" id="nb-p01-hedge-map">
<div class="ff-head"><p class="ff-title">三类合约对冲工具的机制、代价与门槛</p><span class="ff-sub">机制归机制，个人账户执行另看准入与现金约束</span></div>
<div class="p01-hm-cards business-exchange" aria-label="比较期货、保护性期权与 CDS 三类对冲工具：一、期货（如股指 MES、美债期货）：对称线性对冲，常态代价为让渡对应方向上行收益，期间现金需履约保证金与逐日盯市，个人期货账户可直接交易。二、保护性期权（如股指、债基或 HYG Put）：非对称保险式对冲，锁住极端下行并保留上行，常态代价为持续支付并损耗权利金，买方权利金预先付清、无追加保证金，个人期权账户可直接交易。三、CDS（单名或 CDX 指数）：针对企业或主权违约与信用利差飙升的凸性赔付，常态代价为按季支付约定息差，机构 OTC 市场需担保品与协议，个人通常无法直接开户交易，可以 HYG Put、减持高信用风险资产或切换国债作近似替代。">
<div class="p01-hm-card" style="--p01-c:#23695a">
<div class="p01-hm-head"><strong>期货空头</strong><span class="p01-hm-badge">线性对称</span></div>
<dl class="p01-hm-dl">
<div><dt>制衡对象</dt><dd>大盘方向（MES 等）或利率上行（美债期货）</dd></div>
<div><dt>常态代价</dt><dd>对称让渡对应方向的上行收益，无权利金时间损耗</dd></div>
<div><dt>期间现金</dt><dd>需留保证金，标的上涨时逐日盯市扣减现金</dd></div>
<div><dt>个人可得性</dt><dd>支持期货权限的券商账户可直接交易</dd></div>
</dl>
</div>
<div class="p01-hm-card" style="--p01-c:#5986a1">
<div class="p01-hm-head"><strong>保护性期权</strong><span class="p01-hm-badge">非对称底线</span></div>
<dl class="p01-hm-dl">
<div><dt>制衡对象</dt><dd>股指、个股、长债或高收益债的极端下行</dd></div>
<div><dt>常态代价</dt><dd>预先支付权利金；平稳行情下保险费持续损耗</dd></div>
<div><dt>期间现金</dt><dd>买方最大损失限于权利金，不触发盯市追保</dd></div>
<div><dt>个人可得性</dt><dd>标准股票与 ETF 期权在交易所挂牌，个人可买</dd></div>
</dl>
</div>
<div class="p01-hm-card" style="--p01-c:#a8743f">
<div class="p01-hm-head"><strong>CDS 信用保护</strong><span class="p01-hm-badge p01-warm">机构 OTC</span></div>
<dl class="p01-hm-dl">
<div><dt>制衡对象</dt><dd>企业／主权违约事件与信用利差急剧走阔</dd></div>
<div><dt>常态代价</dt><dd>按名义本金定期（常按季）支付约定息差</dd></div>
<div><dt>期间现金</dt><dd>机构双边或清算所安排，配套担保品与逐日估值</dd></div>
<div><dt>个人替代</dt><dd>散户难直购；常用 HYG Put、降杠杆或切回国债</dd></div>
</dl>
</div>
</div>
<figcaption>具体保证金、张数估算与盯市划转见<a href="/zh/notebook/settlement-margin-cash/">《保证金、对冲与期间现金》</a>；合约定价与交割细节见期权与期货专题。</figcaption>
</figure>

把跨资产与合约工具组合成系统打法时，常见对冲基金大致分化出四条路径：拆开总敞口与净敞口做多强空弱的[《股票多空与市场中性》](/zh/notebook/long-short-market-neutral/)、沿利率、汇率与商品周期跨资产调仓的[《全球宏观与跨资产配置》](/zh/notebook/global-macro-cross-asset/)、按波动贡献分配四象限权重的[《风险平价与全天候配置》](/zh/notebook/risk-parity-all-weather/)，以及用 CDS 和深度虚值期权专保极端崩盘的[《信用与尾部风险对冲》](/zh/notebook/#topic-P)。这四类范式各自保留为独立按需专题，供需要深入某条路线时选读。

## 组合里的现金与再平衡 {#nb-p01-cash-rebalance}

[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)讨论的是怎么把近期生活支出和备用金提前划出去；哪怕已经剔除了这些刚性开支，长期投资组合内部保留一笔现金或超短国债（如 BIL），依然同时承担两项功能：一是直接把组合整体跌幅压浅，二是留出无需低位割肉就能补仓的可用资金。仍以 100,000 美元组合为例，当股票整体下跌 25% 时，保留 0%、15% 与 30% 现金分别会让总净值落在 75,000（−25.0%）、78,750（−21.25%）与 82,500 美元（−17.5%）；反过来，如果股票大涨 25%，三档组合分别来到 125,000（+25.0%）、121,250（+21.25%）与 117,500 美元（+17.5%），少赚的那一截正是为缓冲与机动性付出的机会成本。

资产开始一起涨跌以后，最初定好的比例会慢慢跑偏：涨得多的仓位自动变重，跌得多的仓位自然变轻。把权重调回既定目标的操作就是**再平衡**，我们在[《指数、基金与 ETF》](/zh/notebook/indices-funds-etfs/#nb-v01-weights)里已经见过等权指数按季度做这件事。落到个人账户里，SEC Investor.gov 给出了两种常见做法：一种是卖出超配的盈利仓位、买入低配资产，拉回速度快，但在应税账户可能提前触发资本利得税和交易成本；另一种是用后续新增收入、定投资金或分红优先买入低配仓位，不动原有盈利持仓，可以减少卖出摩擦。[^sec-alloc]

不过，给个股和主动仓位做再平衡有个前提：下跌的那笔资产，原先的持仓理由还得成立。如果是行业情绪扰动、企业经营稳健（如 2023 年秋天的 KO），逢低补足权重能帮我们用更便宜的价格拿到同样好的生意；如果经营与盈利前景已经改写（如 2025—2026 年的 FISV），机械地“跌了就补回目标权重”，反而会不断把好钱倒进变坏的仓位里。

<figure class="flow-figure p01-rebalance" id="nb-p01-rebalance">
<div class="ff-head"><p class="ff-title">再平衡的两种执行方式与一个基本面前提</p><span class="ff-sub">先区分“价格偏离”还是“基本面改写”</span></div>
<div class="business-exchange" aria-label="再平衡的两种常见执行方式：一、卖出超配买入低配，可快速恢复目标权重，但在应税账户可能触发资本利得税与交易成本；二、新增现金流再平衡，用新投入资金或分红优先买入低配资产，减少卖出与税费摩擦。再平衡前需要先核查下跌标的的基本面：若经营稳健、仅受情绪或阶段波动拖累（如 2023 年秋的 KO），补仓恢复权重可摊薄买入成本；若经营与指引已经恶化（如 2025 至 2026 年的 FISV），机械再平衡只会不断向变坏仓位追加资金，应先重估去留。">
<div class="p01-rb-top">
<div class="p01-rb-box"><strong>方式一：卖出超配 → 买入低配</strong>直接减持大涨仓位、补足低配资产，权重一次拉回目标。<br><span class="p01-rb-tag p01-warm">留意应税账户资本利得税与交易成本</span></div>
<div class="p01-rb-box"><strong>方式二：用新增资金 / 分红补低配</strong>不卖原有盈利仓位，把新到账的收入或分红投向权重变轻的一侧。<br><span class="p01-rb-tag">减少卖出摩擦，适合持续有现金流流入的账户</span></div>
</div>
<p class="p01-rb-fork-title">补仓前的关键检查：这笔仓位为什么跌成了低配？</p>
<div class="p01-rb-forks">
<div class="p01-rb-branch p01-rb-good"><strong>经营完好，仅遇情绪或周期波动（如 2023 秋 KO）</strong>盈利基础未变，逢低补回目标权重等于用更低价格增持同一门生意。</div>
<div class="p01-rb-branch p01-rb-bad"><strong>经营预期已被改写（如 2025—2026 FISV）</strong>机械按比例补仓会放大永久性亏损，应先重算 Risk–Reward 决定减仓或退出。</div>
</div>
</div>
<figcaption>宽基指数与跨资产大类多适用纪律化再平衡；个股仓位在补仓前需要先核对最新经营证据。</figcaption>
</figure>

无论决定给一只股票放多大仓位、判断几家公司是否共享同一条需求链，还是决定下跌时该再平衡补仓还是认错退出，最后都要回到企业经营本身。下一篇[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)便从持有人视角转入公司内部，先弄清每门生意究竟卖给谁、交付什么，又怎样收到钱。

<script src="/notebook/portfolio-basics/ui.js?v=20261126" defer></script>

[^voo-sheet]: Vanguard，[VOO 官方季度资料](https://fund-docs.vanguard.com/F0968.pdf)，2026-06-30，第 2 页前十大持仓（NVDA 7.5%、AMZN 3.6%）与行业权重（Information Technology 38.0%）；原始摘录见[本篇复用数据](/notebook/index-funds/inputs.json)。
[^sec-alloc]: SEC Investor.gov，[Beginners’ Guide to Asset Allocation, Diversification, and Rebalancing](https://www.investor.gov/additional-resources/general-resources/publications-research/info-sheets/beginners-guide-asset)，资产类别间与类别内两层分散、定期／阈值再平衡及新增资金再平衡说明，2026-11-26 查阅。
[^finra-div]: FINRA，[Asset Allocation and Diversification](https://www.finra.org/investors/investing/investing-basics/asset-allocation-diversification)，集中度风险、低相关性资产互补及集合基金底层分散核查，2026-11-26 查阅。
[^druck-wizards]: Jack D. Schwager，[《The New Market Wizards》— Stanley Druckenmiller 访谈（1992）](https://chian.io/projects/stanley-druckenmiller/sources/new-market-wizards-1992)，关于看对赚多少与看错亏多少及快速止损的公开转录摘录，2026-11-26 查阅。
[^druck-losttree]: Stanley Druckenmiller，[Lost Tree Club 演讲与问答（2015 年 1 月）](https://www.danielscrivner.com/stanley-druckenmiller-rare-lost-tree-club-lecture/)，关于集中下注、盯紧风险及跨股票、债券、商品与外汇多资产选择的公开记录，2026-11-26 查阅。
[^prices]: [Yahoo Finance：历史行情](https://finance.yahoo.com/quote/VOO/history/)，2026-11-26 读取 VOO、TLT、BIL、GLD、DBC、HYG、NVDA、AMZN、MSFT、KO 在 2019-12-20 至 2023-01-09 共 768 个共同交易日的调整后收盘价（含分红与拆股调整）。完整复算数列见[跨资产日频数据](/notebook/portfolio-basics/cross-asset-daily.csv)。
[^tlt]: BlackRock iShares，[iShares 20+ Year Treasury Bond ETF（TLT）产品资料](https://www.blackrock.com/us/financial-professionals/products/239454/ishares-20-year-treasury-bond-etf)，跟踪剩余期限 20 年以上的美国国债指数，2026 年 10 月披露有效久期约 14.7 年；久期与利率敏感性基础另见 [iShares：Bond duration 101](https://www.ishares.com/us/insights/what-is-bond-duration)。
[^bil]: State Street Global Advisors，[SPDR Bloomberg 1–3 Month T-Bill ETF（BIL）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1064642/000119312525256752/d50862d497k.htm)，2025-10-31，跟踪 1 至 3 个月美国短期国库券指数。
[^gld]: World Gold Trust Services，[SPDR Gold Trust（GLD）招募说明书](https://www.sec.gov/Archives/edgar/data/1222333/000119312522257655/d236982d424b3.htm)，2022-10-04，以实物金条支持份额，扣除信托费用后反映金价表现。
[^dbc]: Invesco Capital Management，[Invesco DB Commodity Index Tracking Fund（DBC）招募说明书](https://www.sec.gov/Archives/edgar/data/1328237/000119312525273344/d50866d424b3.htm)，2025-11-10 修订，通过能源、金属与农产品期货合约跟踪商品指数并以短期美债等作保证金管理。
[^hyg]: BlackRock iShares，[iShares iBoxx $ High Yield Corporate Bond ETF（HYG）](https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf)，跟踪美元计价的非投资级高收益企业债指数。
[^contracts]: [CME：Micro E-mini FAQ](https://www.cmegroup.com/articles/faqs/micro-e-mini-equity-index-futures-frequently-asked-questions.html) 与 [OCC：ETF Options](https://www.theocc.com/clearance-and-settlement/clearing/etf-options)，股指期货合约规则、保证金盯市及标准 ETF 期权权利义务。
[^cds-fed]: Federal Reserve Board（FEDS 2022-023），[Credit Default Swaps](https://www.federalreserve.gov/econres/feds/files/2022023pap.pdf)，2022，CDS 定期息差支付、违约赔付、常见 5 年期、OTC 市场结构与中央对手方清算比例。
[^cds-sec]: SEC，[Testimony Concerning Credit Default Swaps](https://www.sec.gov/newsroom/speeches-statements/ts101508ers-testimony-concerning-credit-default-swaps)，CDS 在 OTC 市场由成熟机构协商达成、不在传统交易所挂牌及合成信用空头用途。
