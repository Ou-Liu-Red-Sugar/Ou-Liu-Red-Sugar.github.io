{
  "title": "全球宏观与跨资产配置",
  "description": "从宏观判断的跨资产表达出发，用 2022—2024 美日利差周期对照债券、外汇、对冲与未对冲日股及科技股的噪音差异，再穿透五地半导体—AI 算力链的共同因子与局部背离，并复盘 2024 年 8 月日元套息踩踏与流动性纪律。",
  "layout": "entry",
  "notebookid": "zh-global-macro-cross-asset",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-global-macro-cross-asset"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

[《股票多空与市场中性》](/zh/notebook/long-short-market-neutral/)把战场留在股票内部，靠同一行业里好公司跑赢差公司赚钱。可一旦行情的主驱动变成央行加息、财政扩张、通胀反复或跨境资本改道，挑哪只个股往往不如选对**资产类别与国家市场**决定胜负。

**全球宏观**（Global Macro）策略反过来做：先从增长、通胀、利率与汇率周期出发，在股票、债券／利率期货、外汇和商品四个大池子里，找对当前判断**赔率更干净、噪音更少**的表达载体；与此同时，它也帮普通投资者看清一件事——资金分散在五个国家的股票、货币和设备商里，往往只是在从不同侧面押注同一条底层周期。

## 选最干净的载体：同一判断的跨资产表达 {#nb-p03-expression}

宏观交易常遇到一种尴尬：大方向看对了，选错工具还是亏钱。1992 年夏，Stanley Druckenmiller 观察到英国房地产在高利率下步入衰退，德国却因两德统一后的财政支出和通胀担忧不断加息，而英镑与德国马克又被欧洲汇率机制（ERM）硬绑在一起。面对这样明显的货币政策撕裂，他在 Quantum Fund 里绕开英国个股，直接在外汇市场做空英镑、做多德国马克，并在德国央行行长 Helmut Schlesinger 于《Financial Times》释放脱钩信号后，在 George Soros 推动下把头寸加到净值的两倍规模。[^druck-losttree] 外汇直接锚住两国央行利率矛盾，绕开了个股盈利、估值以及英国退出汇率机制降息后英股反而反弹的干扰。

把同一条原则放回 **2022 至 2024 年**的真实市场，效果同样鲜明。假设 2022 年初我们形成了一个宏观判断：“美国通胀黏性高，美联储将被迫大幅加息并维持高利率，日本央行则继续压低本国利率。”同样的判断，落在外汇、对冲日股、未对冲日股、美国长债和美国科技股这五样工具上，走出了截然不同的路径。切换下方四个真实时间窗口，可以看到噪音从哪里冒出来：

<figure class="flow-figure p03-expr-map" id="nb-p03-expr-map" data-p03-expr>
<div class="ff-head"><p class="ff-title">同一个宏观判断，五类载体的真实路径（2022—2024）</p><span class="ff-sub" data-p03-expr-sub>2021-12-31 → 2024-07-10 · 美日利差走阔至 USD/JPY 161.61 峰值</span></div>
<div class="p03-tabs" hidden><button type="button" data-p03-tab="2022">2022 急加息</button><button type="button" data-p03-tab="2023">2023 高利率＋AI</button><button type="button" data-p03-tab="cum" aria-pressed="true">2022—2024.07 累计</button><button type="button" data-p03-tab="unwind">2024.07—08 平仓反转</button></div>
<div class="p03-rows business-exchange" aria-label="对比四个真实窗口下五类资产的表现：一、2022 急加息（2021-12-31 至 2022-12-30）：USD/JPY +15.5%、DXJ +6.0%、EWJ −17.7%、TLT −31.2%、QQQ −32.6%。二、2023 高利率与 AI 爆发（2022-12-30 至 2023-12-29）：USD/JPY +6.4%、DXJ +42.0%、EWJ +20.3%、TLT +2.8%、QQQ +54.9%。三、利差走阔累计（2021-12-31 至 2024-07-10）：USD/JPY +40.5%、DXJ +102.6%、EWJ +10.8%、TLT −32.5%、QQQ +28.6%。四、日元套息平仓反转（2024-07-10 至 2024-08-05）：USD/JPY −9.8%、DXJ −22.2%、EWJ −11.0%、TLT +7.0%、QQQ −13.4%。">
<div class="p03-row" data-p03-row="usdjpy"><div class="p03-rname">USD/JPY<small>美元兑日元汇率</small></div><div class="p03-track"><i class="p03-bar p03-pos" data-p03-bar style="width:36.8%"></i></div><span class="p03-val p03-pos" data-p03-val>+40.5%</span><span class="p03-tag" data-p03-tag>115.06 → 161.61，利差单边主导</span></div>
<div class="p03-row" data-p03-row="dxj"><div class="p03-rname">DXJ<small>汇率对冲日股 ETF</small></div><div class="p03-track"><i class="p03-bar p03-pos" data-p03-bar style="width:93.3%"></i></div><span class="p03-val p03-pos" data-p03-val>+102.6%</span><span class="p03-tag" data-p03-tag>出口盈利＋汇率对冲＋正利差</span></div>
<div class="p03-row" data-p03-row="ewj"><div class="p03-rname">EWJ<small>未对冲日股 ETF</small></div><div class="p03-track"><i class="p03-bar p03-pos" data-p03-bar style="width:9.8%"></i></div><span class="p03-val p03-pos" data-p03-val>+10.8%</span><span class="p03-tag" data-p03-tag>股价涨幅大半被日元贬值抵销</span></div>
<div class="p03-row" data-p03-row="tlt"><div class="p03-rname">TLT<small>20+ 年美国长债</small></div><div class="p03-track"><i class="p03-bar p03-neg" data-p03-bar style="width:29.5%"></i></div><span class="p03-val p03-neg" data-p03-val>−32.5%</span><span class="p03-tag" data-p03-tag>美债收益率中枢持续抬升</span></div>
<div class="p03-row" data-p03-row="qqq"><div class="p03-rname">QQQ<small>纳斯达克 100 ETF</small></div><div class="p03-track"><i class="p03-bar p03-pos" data-p03-bar style="width:26.0%"></i></div><span class="p03-val p03-pos" data-p03-val>+28.6%</span><span class="p03-tag" data-p03-tag>先暴跌后反超，夹带大量盈利噪音</span></div>
</div>
<p class="p03-note" data-p03-expr-note>两年半累计：USD/JPY 涨 40.5%，同一片日本股市里，汇率对冲版 DXJ 翻倍（+102.6%），未对冲 EWJ 仅 +10.8%，相差 91.8 个百分点。</p>
<figcaption>均采用 Yahoo Finance 调整后收盘价（含分红）与汇率现货收盘；点击上方按钮可切换 2022、2023 及 2024 年 7—8 月平仓窗口。<a href="/notebook/global-macro/macro-cross-asset-daily.csv">查看完整日频数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-p03-text-carry">点到 **2023 高利率＋AI** 窗口，载体选择的重要性立刻显露出来：2023 年美联储依然把政策利率维持在高位，美日利差继续扩大，如果靠做空 Invesco QQQ Trust（QQQ）表达“高利率压低科技股估值”，就会迎头撞上 AI 资本开支浪潮——QQQ 全年大涨 **+54.9%**，利率判断没算错，股票盈利噪音却把空头打穿。反过来看，同是押注“日本维持宽松、出口企业受益”，把美元换成未对冲的 iShares MSCI Japan ETF（EWJ），2021 年底至 2024 年 7 月 10 日累计只拿到 **+10.8%**；改用按月远期对冲日元的 WisdomTree Japan Hedged Equity Fund（DXJ），同期涨幅高达 **+102.6%**，拉开整整 **91.8 个百分点**<span data-text-detail>（按照 DXJ 的 SEC Form 497K 招募说明书，基金每月滚动卖出与股票市值相当的一月期美元兑日元远期／期货合约以中和日元波动；在美元短期利率显著高于日元的阶段，卖出远期日元、买入远期美元不仅挡住了日元兑美元从 115.06 贬至 161.61 的汇兑损失，还额外收进了两国短期利差带来的远期正收益，俗称 FX hedge carry。相对应地，未对冲的 EWJ 同时承受日股走势与日元汇率双向暴露，两者成分权重亦有差异，DXJ 更偏出口与分红股）</span>。[^macro-data]<sup>，</sup>[^dxj-pros]<sup>，</sup>[^ewj-pros]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

当然，干净的载体并不等于单边白赚。切换到 **2024.07—08 平仓反转** 窗口就会看到，当日本央行在 2024 年 7 月 31 日加息、美元兑日元从 161.61 急跌至 145.79 时，DXJ 剥离了日元升值保护，18 个交易日里深跌 **−22.2%**，比未对冲的 EWJ（**−11.0%**）整整深了一倍。每种工具都有对应的受益区间和反向代价，选载体的原则是**把要押注的宏观变量留下来，把不想顺带承担的额外变量剥掉**。

## 穿透伪分散：五地算力链的共同底层因子 {#nb-p03-common-factor}

[《投资组合：分散、多资产与风险制衡》](/zh/notebook/portfolio-diversification-hedging/#nb-p01-overlap)提过单一市场里的基金穿透；把视野扩到全球以后，一种更隐蔽的错觉叫**按交易所和国家数人头**。假设一个组合平均买入五只分属不同国家与币种的行业龙头：美国 NVIDIA（NVDA，GPU 设计）、台湾 TSMC（TSM／2330，先进晶圆代工）、韩国 SK hynix（000660.KS，HBM 存储）、荷兰 ASML Holding（ASML，EUV 光刻机）与日本 Tokyo Electron（8035.T，半导体制造设备），甚至再加一只美国工业与数据中心电力设备商 Eaton（ETN）。

账面上横跨北美、东亚和欧洲五个交易市场、四种本币，还分属芯片设计、制造、存储、光刻和电力设备六个环节。可把 2022 至 2025 年共 209 周的美元口径周收益拉出来算相关性，会发现它们几乎随同一根弦起舞：

<figure class="flow-figure p03-ai-chain" id="nb-p03-ai-chain">
<div class="ff-head"><p class="ff-title">跨国伪分散透视：五地半导体—AI 算力链 vs 跨资产宏观制衡</p><span class="ff-sub">2022—2025 共 209 周美元口径周收益 · 相对 NVDA 相关性与两段真实回撤</span></div>
<div class="business-exchange" aria-label="2022 至 2025 年共 209 周美元口径周收益实测：相对 NVDA 的周相关性方面，五地产业链与配套电力高度共振：TSM +0.658、ASML +0.645、ETN +0.584、8035.T（折美元） +0.570、000660.KS（折美元） +0.468（五地半导体股票两两平均相关 +0.585）；而跨资产宏观工具与 NVDA 几乎独立：TLT +0.094、DBC +0.067、FXY +0.059、GLD +0.030。组合压力对照：100% 五地跨国算力链等权在 2022 年跌 −42.0%、2024 年 7 月 10 日至 8 月 5 日跌 −28.5%、四年年化周波动 35.7%；若改为 40% 五地算力链加 20% BIL、15% GLD、15% DBC、10% TLT，2022 年回撤收窄至 −16.9%、2024 年夏收窄至 −11.4%、年化周波动降至 15.9%。">
<div class="p03-cols">
<div class="p03-panel p03-panel-warm">
<div class="p03-phead"><strong>同链跨国资产（相对 NVDA 周相关）</strong><span>五地链两两均达 +0.585</span></div>
<div class="p03-corr-list">
<div class="p03-crow p03-cwarm"><span>TSM<small>台湾代工</small></span><div class="p03-ctrack"><i style="--w:65.8%;--c:var(--ff-cash)"></i></div><em>+0.658</em></div>
<div class="p03-crow p03-cwarm"><span>ASML<small>荷兰光刻</small></span><div class="p03-ctrack"><i style="--w:64.5%;--c:var(--ff-cash)"></i></div><em>+0.645</em></div>
<div class="p03-crow p03-cwarm"><span>ETN<small>美国电力</small></span><div class="p03-ctrack"><i style="--w:58.4%;--c:var(--ff-cash)"></i></div><em>+0.584</em></div>
<div class="p03-crow p03-cwarm"><span>8035.T<small>日本设备</small></span><div class="p03-ctrack"><i style="--w:57.0%;--c:var(--ff-cash)"></i></div><em>+0.570</em></div>
<div class="p03-crow p03-cwarm"><span>000660.KS<small>韩国存储</small></span><div class="p03-ctrack"><i style="--w:46.8%;--c:var(--ff-cash)"></i></div><em>+0.468</em></div>
</div>
</div>
<div class="p03-panel">
<div class="p03-phead"><strong>独立宏观腿（相对 NVDA 周相关）</strong><span>相关性接近零</span></div>
<div class="p03-corr-list">
<div class="p03-crow p03-ccool"><span>TLT<small>美国长债</small></span><div class="p03-ctrack"><i style="--w:9.4%;--c:var(--ff-share)"></i></div><em>+0.094</em></div>
<div class="p03-crow p03-ccool"><span>DBC<small>大宗商品</small></span><div class="p03-ctrack"><i style="--w:6.7%;--c:var(--ff-share)"></i></div><em>+0.067</em></div>
<div class="p03-crow p03-ccool"><span>FXY<small>日元现货</small></span><div class="p03-ctrack"><i style="--w:5.9%;--c:var(--ff-share)"></i></div><em>+0.059</em></div>
<div class="p03-crow p03-ccool"><span>GLD<small>实物黄金</small></span><div class="p03-ctrack"><i style="--w:3.0%;--c:var(--ff-share)"></i></div><em>+0.030</em></div>
</div>
</div>
</div>
<div class="p03-stress">
<div class="p03-sbox">
<div class="p03-sbox-head">100% 五地跨国算力链<small>NVDA / TSM / 000660.KS / ASML / 8035.T 各 20%</small></div>
<div class="p03-smetrics">
<div><span>2022 全年</span><strong>−42.0%</strong></div>
<div><span>2024 夏平仓</span><strong>−28.5%</strong></div>
<div><span>年化周波动</span><strong>35.7%</strong></div>
</div>
</div>
<div class="p03-sbox p03-sbox-ok">
<div class="p03-sbox-head">40% 五地链 ＋ 60% 宏观制衡<small>20 BIL / 15 GLD / 15 DBC / 10 TLT</small></div>
<div class="p03-smetrics">
<div><span>2022 全年</span><strong>−16.9%</strong></div>
<div><span>2024 夏平仓</span><strong>−11.4%</strong></div>
<div><span>年化周波动</span><strong>15.9%</strong></div>
</div>
</div>
</div>
</div>
<figcaption>采用周五收盘（周频）计算相关性以消除美、欧、亚时区收盘错位；000660.KS 与 8035.T 分别按同期 KRW=X、JPY=X 折算为美元。<a href="/notebook/global-macro/macro-cross-asset-daily.csv">查看完整日频数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-p03-text-chain">横跨五个国家和四种货币，五只半导体股两两之间的周收益平均相关性依然高达 **+0.585**（最低的 000660.KS 与 ASML 也达 +0.432，连换到工业板块的数据中心电力设备 ETN 与 NVDA 也有 +0.584）。遇到 2022 年加息冲击，五地算力链等权组合暴跌 **−42.0%**；2024 年 7 月 10 日至 8 月 5 日仅仅 18 个交易日的流动性平仓，五地又一起砸出 **−28.5%**。原因直截了当：它们共享同一批北美云巨头资本开支预算、同一条美元全球流动性曲线，以及相近的高估值风险偏好。把算力链压到四成，配入相关性都在 +0.10 以下的短债（BIL）、黄金（GLD）、商品（DBC）与长债（TLT）后，两段危机回撤分别收窄到 **−16.9%** 与 **−11.4%**，四年年化波动也从 35.7% 砍半至 15.9%<span data-text-detail>（采用 2021-12-31 至 2025-12-31 共 209 个自然周的最后美股交易日对齐计算，避免东京／首尔收盘较纽约早 13 至 14 小时造成的日频相关性低估。上述四年累计回报对比为：100% 五地算力链 +219.9% vs 40% 算力链加 60% 宏观制衡 +111.4%，均按期初固定权重、不计再平衡与税费。分散的代价往往体现在牛市斜率更平缓，换来的是危机期间仍能拿得住的持有能力）</span>。[^macro-data]<sup>，</sup>[^bil]<sup>，</sup>[^gld]<sup>，</sup>[^dbc]<sup>，</sup>[^tlt]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

不仅个股如此，国家大盘 ETF 同样可能藏着单一产业共因。在台湾与韩国股市权重高度集中于晶圆代工与存储芯片的结构下，买入 iShares MSCI Taiwan ETF（EWT）或 iShares MSCI South Korea ETF（EWY）时，账户买进的大头仍是同一条半导体出口周期，远不止宽泛的“亚洲经济增长”（2022 年 EWT 跌 −28.9%、EWY 跌 −26.6%；2024 年 7—8 月平仓期分别跌 −16.0% 与 −12.6%）。[^macro-data]

## 同一产业链上的四条局部背离通道 {#nb-p03-divergence}

五地资产在全局冲击里高度共振，在具体年份里又常走出分化。把全球宏观和跨境基本面连在一起，需要同时看清共同因子的共振与制造局部背离的四条具体传导通道：

<figure class="flow-figure p03-divergence" id="nb-p03-divergence-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">同一条全球算力链上，四条制造局部背离的传导通道</p><div class="ff-switch" role="group" aria-label="切换通道" hidden><button type="button" data-ff-view-choice="fx" aria-pressed="true">① 汇率折算差</button><button type="button" data-ff-view-choice="cost" aria-pressed="false">② 币种错配</button><button type="button" data-ff-view-choice="geo" aria-pressed="false">③ 出口管制</button><button type="button" data-ff-view-choice="cycle" aria-pressed="false">④ 库存周期</button></div></div>
<div data-ff-only="fx" class="business-exchange" aria-label="汇率折算差：2021 年底至 2024 年 7 月，日本 8035.T 日元涨 +82.9%，折美元仅 +30.3%；汇率对冲 DXJ +102.6% vs 未对冲 EWJ +10.8%。">
<div class="p03-dcard" style="--p03-c:#23695a"><div class="p03-dhead"><strong>① 汇率折算差</strong><span>账户币种视角</span></div><p>2021 年底至 2024 年 7 月，日本 8035.T 以日元计大涨 <b>+82.9%</b>，折回美元仅剩 <b>+30.3%</b>；同期 DXJ 涨 +102.6% 而 EWJ 仅 +10.8%。</p></div>
</div>
<div data-ff-only="cost" hidden class="business-exchange" aria-label="营收与成本币种错配：TSMC 北美客户占 75% 以美元收款、本地成本以新台币计，美元兑新台币每贬 1% 约令营业利润率降 0.3 个百分点。">
<div class="p03-dcard" style="--p03-c:#5986a1"><div class="p03-dhead"><strong>② 营收与成本币种错配</strong><span>公司经营视角</span></div><p>TSMC 2025 年 20-F 披露北美客户占 <b>75%</b>、几乎全以美元收款，本土晶圆厂成本以新台币计；美元兑新台币每贬 1%，营业利润率约降 <b>0.3 个百分点</b>。</p></div>
</div>
<div data-ff-only="geo" hidden class="business-exchange" aria-label="出口管制与地缘政策：ASML 中国大陆收入占比由 36.1% 降至 29.1%，2024 下半年 NVDA 走稳时 ASML 独自重挫 −36.7%。">
<div class="p03-dcard" style="--p03-c:#a8743f"><div class="p03-dhead"><strong>③ 出口管制与地缘政策</strong><span>制度准入视角</span></div><p>荷美许可收紧下，ASML 中国大陆收入占比由 2024 年 <b>36.1%</b> 降至 2025 年 <b>29.1%</b>；2024 下半年 NVDA（−0.4%）与 TSM（+4.1%）走稳时，ASML 独自重挫 <b>−36.7%</b>。</p></div>
</div>
<div data-ff-only="cycle" hidden class="business-exchange" aria-label="库存与产能周期时滞：SK hynix 2023 年营业亏损 7.73 万亿韩元，2024–2025 年凭 HBM 跳至 23.47 与 47.21 万亿韩元，2025 年股价涨 +278.3%。">
<div class="p03-dcard" style="--p03-c:#7c679c"><div class="p03-dhead"><strong>④ 库存与产能周期时滞</strong><span>细分供需视角</span></div><p>SK hynix 2023 年因存储去库营业亏损 <b>7.73 万亿韩元</b>（−24%），2024—2025 年靠 HBM 紧缺利润连跳至 <b>23.47</b> 与 <b>47.21 万亿韩元</b>，2025 年股价涨 <b>+278.3%</b>。</p></div>
</div>
<figcaption>点击切换四条背离通道。经营数字分别取自 TSMC、ASML FY2025 20-F 与 SK hynix 官方财报公告。</figcaption>
</figure>

这四条通道里，最容易在日常账户里算错的是第一条——**汇率折算并非简单加减，而是两腿相乘**。假设美元账户买入一只日本或韩国股票，当地股价涨跌记为 \(r_{\text{local}}\)，当地货币兑美元的升贬幅度记为 \(r_{\text{fx}}\)，折回美元的真实未对冲回报等于：

\[
R_{\text{USD}}=(1+r_{\text{local}})(1+r_{\text{fx}})-1=r_{\text{local}}+r_{\text{fx}}+r_{\text{local}}\cdot r_{\text{fx}}.
\]

拖动下方两个滑块，或点选三段真实行情预设，看清“当地赚大钱却被汇率吞掉”“股跌汇涨获缓冲”和“股汇双杀”三种组合结果：

<figure class="flow-figure p03-fx-lab" id="nb-p03-fx-lab" data-p03-fx>
<div class="ff-head"><p class="ff-title">跨境持仓双腿拆解：当地股价 × 汇率折算</p><span class="ff-sub">以美元计价账户投资海外市场为例 · 对比未对冲结果与交叉项影响</span></div>
<div class="p03-fx-presets" hidden><button type="button" data-p03-fx-preset="83,-29" aria-pressed="true">2022—2024.07 8035.T</button><button type="button" data-p03-fx-preset="-42,11">2024.07—08 8035.T</button><button type="button" data-p03-fx-preset="-42,-6">2022 000660.KS</button></div>
<div class="p03-fx-sliders">
<div class="p03-fx-srow"><label for="nb-p03-local">当地股价涨跌 <output for="nb-p03-local" data-p03-local-out>+83%</output></label><input id="nb-p03-local" data-p03-local-in type="range" min="-60" max="100" step="1" value="83" disabled></div>
<div class="p03-fx-srow p03-fx-cur"><label for="nb-p03-fx">当地货币兑美元升贬 <output for="nb-p03-fx" data-p03-fx-out>−29%</output></label><input id="nb-p03-fx" data-p03-fx-in type="range" min="-40" max="30" step="1" value="-29" disabled></div>
</div>
<div class="p03-fx-chain business-exchange" aria-label="展示跨境持仓未对冲美元回报的乘法拆解，默认预设为 2022 至 2024 年 7 月日本 8035.T 近似场景：当地股价涨 +83.0%、日元兑美元贬 −29.0%、乘法交叉项 −24.1%，三者相加得未对冲美元净回报 +29.9%。另含 2024 年 7 至 8 月 8035.T 股跌汇涨缓冲场景（股价 −42%、日元 +11% 得美元 −35.6%）与 2022 年 000660.KS 股汇双杀场景（股价 −42%、韩元 −6% 得美元 −45.5%）。">
<div class="p03-fx-box"><small>当地货币回报</small><strong data-p03-res-local>+83.0%</strong></div>
<div class="p03-fx-box"><small>汇率变动</small><strong class="p03-neg" data-p03-res-fx>−29.0%</strong></div>
<div class="p03-fx-box"><small>乘法交叉项</small><strong data-p03-res-cross>−24.1%</strong></div>
<div class="p03-fx-box p03-fx-total"><small>未对冲美元净回报</small><strong class="p03-pos" data-p03-res-usd>+29.9%</strong></div>
</div>
<p class="p03-fx-note" data-p03-fx-note>当地股价上涨 +83%，但当地货币贬值 −29%，折回美元后净回报被压缩至 +29.9%（若通过远期合约对冲汇率，美元回报近似保留当地涨幅并加减两国利差）。</p>
<figcaption>默认预设对应 2021-12-31 至 2024-07-10 的 8035.T（实际日元 +82.94%、日元兑美元 −28.80%、美元净回报 +30.25%）；未计跨境税费与换汇点差。</figcaption>
</figure>

与此同时，经营层面还会反向抵消一部分汇率冲击。像 TSMC 2025 财年 Form 20-F 写明的那样，公司虽然在台湾上市、用新台币编报表，但北美客户占总营收 **75%** 且几乎全部以美元收款，本地研发和晶圆厂运营费用以新台币支付；美元走强时，新台币贬值虽然折损美元投资者的账面换算，却会抬高公司自身的本币营业利润率（反之美元兑新台币每贬 1%，营业利润率约降 0.3 个百分点）。[^tsmc-20f] 类似地，ASML 注册在荷兰、以欧元编报，荷兰本土销售额却微乎其微，台湾（25.5%）、韩国（25.0%）与中国大陆（29.1%）三地合占 2025 年总营收近八成；荷美出口许可一旦收紧，ASML 就会走出独立于美股算力龙头的政策回撤。[^asml-20f] 而 SK hynix 从 2023 年营业亏损 7.73 万亿韩元到 2024 年盈利 23.47 万亿、2025 年翻倍至 47.21 万亿的剧烈摆动，则提醒我们同一条需求链上的细分支周期时滞同样能拉出巨大业绩差。[^skh-2024]<sup>，</sup>[^skh-2025]

## 流动性拐点、套息踩踏与宏观退场纪律 {#nb-p03-discipline}

如果把全球宏观策略拆到只剩一条操作主线，Stanley Druckenmiller 在 2015 年 Lost Tree Club 演讲里转述过他早期导师 Speros Drelles 的两句提醒：第一，**不要按眼下已经发生的利润定价，要往前看 18 个月后的局势**；第二，**推动大盘整体方向的首先是央行与流动性，而不只是企业盈利**。[^druck-losttree]

这套流动性视角解释了宏观交易为何常常“慢涨急跌”。当市场长期处于低波动、宽利差环境时，机构和零售交易员会不断借入低利率货币（例如日元），去买高收益资产或高动量科技股，这就是**套息交易**（Carry Trade）。风平浪静时它每天稳定收息，一旦央行政策与经济数据同时出现拐点，杠杆仓位就会踩在同一扇出口门上。

<span data-text-versions id="nb-p03-text-bis">国际清算银行（BIS）在 2024 年 8 月 27 日发布的第 90 号专报，完整复盘了 **2024 年 7 月底至 8 月初**的日元套息平仓冲击。此前两年多，美日利差与低波动环境推动表内外日元套息交易规模累计至约 **40 万亿日元**（约 2,500 亿美元的中位估计）。7 月 31 日日本央行意外偏鹰地将政策利率上调至 **0.25%**，紧接着 8 月 2 日美国就业数据低于预期，引发市场重新定价衰退与利差收窄。在 8 月本就偏薄的夏日流动性里，保证金上调与风控止损迅速引发顺周期去杠杆：**8 月 5 日周一，日本 TOPIX 指数单日暴跌 12%**，恐慌指数 VIX 盘外一度冲破 **60**；同期五地半导体算力链与高动量美股一起重挫，随后市场又在当周周五（8 月 9 日）迅速企稳修复大半失地<span data-text-detail>（BIS Bulletin No. 90 指出，单纯的期货市场投机性日元空头峰值仅约 2 万亿日元／140 亿美元，只是冰山一角；更大的头寸藏在场外外汇远期与掉期、银行跨境日元贷款以及日本零售保证金账户里，因此统计口径跨度较大，约 40 万亿日元／2,500 亿美元属于偏保守的中位量级估计。该事件印证了高杠杆套息与做空波动率策略的典型特征：平时稳步收小钱，波动率突升时被迫同步平仓）</span>。[^bis-90]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

也正因政策转向和流动性挤压来得既急又猛，老练的宏观交易员都把**认错速度**排在预测准确度前面。Druckenmiller 在 1992 年访谈与 2026 年 11 月访谈里反复强调：当流动性信号和仓位逻辑不再站得住，先把风险降回零（flat）、保住本金，远比硬扛一条已经反转的宏观趋势重要。[^druck-wizards]<sup>，</sup>[^druck-2026]

落回普通个人账户，我们没有机构主经纪商的跨币种掉期与低息融资额度，不必也不宜去直接追逐高杠杆外汇套息；全球宏观的框架对个人组合仍有三条直接用处：

1. **按底层营收与资金周期做全球穿透**：买海外股票或国别 ETF（如 TSM、ASML、EWT、EWY）前，先查它的主要客户在哪里、收什么货币、跟手里已有美股是不是绑在同一条资本开支或利率线上，别把“换了个交易所”当成风险分散。
2. **区分股票判断与汇率判断**：配置海外市场时，明确自己愿不愿意顺带押注当地货币兑美元走势；只看好本地企业盈利、不看好本币汇率时，留意是否存在成本合理的汇率对冲载体（如 DXJ 与 EWJ 的差别），同时算清远期利差方向。
3. **用低杠杆跨资产与现金应对流动性拐点**：远离靠低波动和高杠杆堆出来的拥挤套息，在组合里保留真正低相关的短债、黄金、商品或长债制衡，遇到央行政策与市场流动性骤变时，手里才有不用低位割肉的余粮。

下一篇[《风险平价与全天候配置》](/zh/notebook/risk-parity-all-weather/)将把视野从“主动择时切换宏观仓位”转向另一套机构范式——放弃预测下一阶段是衰退还是通胀，改按各类资产的波动贡献去均摊风险预算。

<script src="/notebook/global-macro/ui.js?v=20261126" defer></script>

[^macro-data]: [Yahoo Finance：全球跨资产与五地半导体链历史行情](https://finance.yahoo.com/quote/DXJ/history/)，2026-11-26 读取 2021-12-20 至 2026-01-09 共 1,018 个美股交易日的调整后收盘价（含分红与拆股调整）及汇率收盘价。完整复算数列见[全球跨资产日频数据](/notebook/global-macro/macro-cross-asset-daily.csv)。
[^druck-losttree]: Stanley Druckenmiller，[Lost Tree Club 演讲与问答（2015 年 1 月）](https://www.danielscrivner.com/stanley-druckenmiller-rare-lost-tree-club-lecture/)，关于“向前看 18 个月”“推动大盘的是央行与流动性”及 1992 年做空英镑、做多德国马克案例的公开记录，2026-11-26 查阅。
[^druck-wizards]: Jack D. Schwager，[《The New Market Wizards》— Stanley Druckenmiller 访谈（1992）](https://chian.io/projects/stanley-druckenmiller/sources/new-market-wizards-1992)，关于快速止损与跨资产仓位切换纪律的公开摘录，2026-11-26 查阅。
[^druck-2026]: Stanley Druckenmiller，[TomorrowX Summit 访谈记录（2026-11-18）](https://longbridge.com/en/news/306050958)，关于方向不明时保持敞口归零（flat）与灵活退场的公开自述，2026-11-26 查阅。
[^dxj-pros]: WisdomTree Asset Management，[WisdomTree Japan Hedged Equity Fund（DXJ）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1350487/000121465926012301/dxj926497k.htm)，SEC Form 497K（2026-08-01，2026-09-30 补充），按月展期一月期美元兑日元远期／期货合约对冲日元暴露。
[^ewj-pros]: BlackRock iShares，[iShares MSCI Japan ETF（EWJ）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/930667/000119312525336645/d48256d497k.htm)，SEC Form 497K（2025-12-30），跟踪未对冲汇率的 MSCI Japan 指数。
[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company Limited，[FY2025 Form 20-F 年度报告](https://investor.tsmc.com/sites/ir/sec-filings/2025_20F%20Report.pdf)，披露 2025 年北美客户占净营收 75%、几乎全部以美元计价销售，及美元兑新台币每贬值 1% 令营业利润率约降 0.3 个百分点。
[^asml-20f]: ASML Holding N.V.，[FY2025 Form 20-F 年度报告](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm)，2026-02-25 提交，披露 2025 年总净销售额 326.67 亿欧元，中国大陆（29.1%，2024 年 36.1%）、台湾（25.5%）、韩国（25.0%）收入构成及荷美出口管制许可条款。
[^skh-2024]: SK hynix Inc.，[FY2024 及 4Q24 财务业绩公告](https://news.skhynix.com/en/sk-hynix-announces-4q24-financial-results/)，2025-01-23，K-IFRS 口径 2023 年营业亏损 7.73 万亿韩元（−24%）、2024 年营业利润 23.47 万亿韩元（35%）。
[^skh-2025]: SK hynix Inc.，[FY2025 财务业绩公告](https://news.skhynix.com/en/sk-hynix-announces-fy25-financial-results/)，2026-01-28，K-IFRS 口径 2025 年营收 97.15 万亿韩元、营业利润 47.21 万亿韩元（49%）。
[^bis-90]: Matteo Aquilina, Marco Lombardi, Andreas Schrimpf & Vladyslav Sushko，[BIS Bulletin No. 90: The market turbulence and carry trade unwind of August 2024](https://www.bis.org/publications/bulletin-90-market-turbulence-and-carry-trade-unwind-august-2024.pdf)，2024-08-27，2024 年 7 月底至 8 月初日元套息去杠杆、8 月 5 日 TOPIX 跌 12% 及约 40 万亿日元表内外规模估计。
[^bil]: State Street Global Advisors，[SPDR Bloomberg 1–3 Month T-Bill ETF（BIL）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1064642/000119312525256752/d50862d497k.htm)，2025-10-31。
[^gld]: World Gold Trust Services，[SPDR Gold Trust（GLD）招募说明书](https://www.sec.gov/Archives/edgar/data/1222333/000119312522257655/d236982d424b3.htm)，2022-10-04。
[^dbc]: Invesco Capital Management，[Invesco DB Commodity Index Tracking Fund（DBC）招募说明书](https://www.sec.gov/Archives/edgar/data/1328237/000119312525273344/d50866d497k.htm)，2025-11-10 修订。
[^tlt]: BlackRock iShares，[iShares 20+ Year Treasury Bond ETF（TLT）产品资料](https://www.blackrock.com/us/financial-professionals/products/239454/ishares-20-year-treasury-bond-etf)。
