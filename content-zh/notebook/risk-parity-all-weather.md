{
  "title": "风险平价与全天候配置",
  "description": "区分资金权重与风险贡献，拆解 60/40 组合为何超九成波动仍由股票主导；建立增长与通胀四象限的等风险预算框架，解释温和债券杠杆的由来，并用 2011—2020 与 2022—2023 两段实测看清相关性翻转与融资挤压的失效边界。",
  "layout": "entry",
  "notebookid": "zh-risk-parity-all-weather",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-risk-parity-all-weather"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

[《全球宏观与跨资产配置》](/zh/notebook/global-macro-cross-asset/)讲的是主动判断利率、通胀和汇率周期，再挑干净的工具顺势下注。如果一家家族信托或长期资金明确**放弃预测下一阶段是衰退还是通胀**，只想靠资产本身的结构相互抵销，走出来的就是另一条机构路线：**风险平价**（Risk Parity）与**全天候配置**（All Weather）。

这套方法从一条直觉起步：把 60% 资金放进股票、40% 放进国债，账面上像是稳妥的平衡组合，可因为股票的年化波动率常常是中长期国债的三倍左右，组合里超过九成的波动和亏损依然由股市决定。风险平价改按**风险贡献**分配资产权重，再通过温和杠杆把低波动组合的收益空间拉回合理水平——它把“要不要赌方向”换成了“能不能扛住相关性翻转和融资成本抬升”。

## 资金权重与风险贡献的落差 {#nb-p04-risk-contribution}

2005 年 9 月，PanAgora 资产管理公司的 Edward Qian 在白皮书《Risk Parity Portfolios》里正式提出“风险平价”这一名称。他用 1983 至 2004 年美股 Russell 1000（年化波动 15.1%）与美债 Lehman Aggregate（年化波动 4.6%、相关性 +0.20）算了一笔账：在一套标准的 60/40 组合里，股票虽然只占 60% 本金，却贡献了 **93%** 的组合方差风险，债券只贡献 **7%**；统计所有月度跌幅超过 2% 的亏损月份，其中 **95.6%** 的损失来自股票。[^qian-2005]

背后的算术来自 Euler 波动分解：组合总波动率 \(\sigma_p\) 可以精确拆成每一项资产的**风险贡献**之和：

\[
RC_i = w_i \frac{\partial \sigma_p}{\partial w_i} = \frac{w_i (\Sigma \mathbf{w})_i}{\sigma_p},\qquad \sum_i \frac{RC_i}{\sigma_p} = 100\%.
\]

股票的波动率接近中长期国债的三倍，进到方差里要平方放大近九倍。用 2011 至 2020 年真实行情检验 SPDR S&P 500 ETF Trust（SPY，年化波动 17.2%）与 iShares 7–10 Year Treasury Bond ETF（IEF，年化波动 5.9%）的 60/40 组合，在两者的负相关性（−0.45）作用下，SPY 的净风险贡献甚至达到 **106.0%**，IEF 为 **−6.0%**（对冲掉了小部分波动）。拖动下面两个滑块，或切换三种真实预设，直接看资金权重与风险贡献的落差：

<figure class="flow-figure p04-rc-lab" id="nb-p04-rc-lab" data-p04-rc>
<div class="ff-head"><p class="ff-title">60/40 资金权重 vs 真实风险贡献（Euler 波动分解）</p><span class="ff-sub">采用 2011—2020 实测年化波动：SPY 17.2% · IEF 5.9%</span></div>
<div class="p04-presets" hidden><button type="button" data-p04-preset="60.0,0.20" aria-pressed="true">60/40 · 正相关 (+0.20)</button><button type="button" data-p04-preset="60.0,-0.45">60/40 · 2011—2020 (−0.45)</button><button type="button" data-p04-preset="25.5,-0.45">两资产风险平价 (25.5/74.5)</button><button type="button" data-p04-preset="25.5,0.19">风险平价遇 2022 (+0.19)</button></div>
<div class="p04-sliders">
<div class="p04-srow"><label for="nb-p04-w">股票 / 债券资金权重 <output for="nb-p04-w" data-p04-w-out>60% / 40%</output></label><input id="nb-p04-w" data-p04-w-in type="range" min="10" max="90" step="0.5" value="60" disabled></div>
<div class="p04-srow"><label for="nb-p04-c">股债相关性 ρ <output for="nb-p04-c" data-p04-c-out>+0.20</output></label><input id="nb-p04-c" data-p04-c-in type="range" min="-0.50" max="0.50" step="0.01" value="0.20" disabled></div>
</div>
<div class="p04-bars-grid business-exchange" aria-label="比较 SPY（年化波动 17.2%）与 IEF（年化波动 5.9%）在不同资金权重和相关性下的风险贡献：默认 60/40 配比在相关性 +0.20 时，股票占 60% 资金却贡献 91.4% 风险、债券仅占 8.6%，组合总波动 11.0%；在 2011 至 2020 年负相关 −0.45 下，股票贡献 106.0% 风险、债券贡献 −6.0%，组合总波动 9.5%。切换至波动倒数配比 25.5% 股票与 74.5% 债券后，无论相关性为 −0.45 还是 +0.19，两类资产风险贡献均严格各占 50.0%，但组合年化总波动从 4.6% 抬升至 6.8%。">
<div class="p04-bars">
<div class="p04-brow"><div class="p04-bhead"><strong>资金权重（账面占比）</strong><span>股票 <em data-p04-cap-s-val>60%</em> · 债券 <b data-p04-cap-b-val>40%</b></span></div><div class="p04-stack"><i class="p04-seg-s" data-p04-cap-s style="width:60%"></i><i class="p04-seg-b" data-p04-cap-b style="width:40%"></i></div></div>
<div class="p04-brow"><div class="p04-bhead"><strong>真实风险贡献（波动占比）</strong><span>股票 <em data-p04-rc-s-val>91.4%</em> · 债券 <b data-p04-rc-b-val>8.6%</b></span></div><div class="p04-stack"><i class="p04-seg-s" data-p04-rc-s style="width:91.4%"></i><i class="p04-seg-b" data-p04-rc-b style="width:8.6%"></i></div></div>
</div>
<div class="p04-volbox"><span>组合年化波动率</span><strong data-p04-vol>11.0%</strong><small>股票 17.2% · 债券 5.9%</small></div>
</div>
<p class="p04-note" data-p04-note>虽然资金像是分散配置，股票仍占据 91.4% 的组合风险，组合年化波动为 11.0%。</p>
<figcaption>采用 Euler 波动分解计算；切到“两资产风险平价”后再切换相关性，可观察风险占比恒定 50/50 时，相关性翻正怎样把总波动从 4.6% 推高到 6.8%。</figcaption>
</figure>

按波动率倒数把资金配成 **25.5% SPY ＋ 74.5% IEF** 时，两腿各自承担的独立波动（\(w_i \sigma_i\)）恰好相等，股债风险贡献在任何相关性下都维持在 **50% / 50%**。不过，光有股票和名义国债两腿，依然防不住 1970 年代或 2022 年那种通胀飙升的冲击。

## 增长 × 通胀四象限与全天候制衡 {#nb-p04-quadrants}

1996 年，Ray Dalio 与桥水基金（Bridgewater Associates）合伙人给他的家族信托设计了一套不依赖宏观预测的被动配置——**全天候**（All Weather）。桥水在 2012 年发布的官方白皮书里把这套思路归结为一张 2×2 地图：资产价格已经反映了市场对未来经济的一致预期，真正推动大类资产剧烈重定价的是**相对预期的意外**，而所有宏观意外大致落在**经济增长**（超预期／低于预期）与**通胀**（超预期／低于预期）四个象限里。[^bridgewater-aw]

全天候做法给这四个象限各分配 **25% 的风险预算**，而不是各分 25% 的资金：

<figure class="flow-figure p04-quadrants" id="nb-p04-quadrants-fig">
<div class="ff-head"><p class="ff-title">全天候四象限：按“相对预期的意外”均摊 25% 风险预算</p><span class="ff-sub">来源框架：Bridgewater Associates《The All Weather Story》（1996 / 2012）</span></div>
<div class="p04-qgrid business-exchange" aria-label="全天候四个宏观象限及各 25% 风险预算对应资产：一、增长超预期（25% 风险）：受益资产为股票、大宗商品、企业信用债，经济扩张带动企业盈利与原料需求上升。二、增长低于预期（25% 风险）：受益资产为名义国债、通胀挂钩债 TIPS，衰退担忧促使央行降息、避险资金压低收益率推升债价。三、通胀超预期（25% 风险）：受益资产为通胀挂钩债 TIPS、大宗商品、实物黄金，物价上行直接推高商品价格并按 CPI 调高 TIPS 本金。四、通胀低于预期（25% 风险）：受益资产为股票、名义国债，通胀回落压低贴现率并扩张估值，同时提升固定名义票息的实际购买力。">
<div class="p04-qcard" style="--p04-c:#23695a">
<div class="p04-qhead"><strong>① 增长超预期</strong><span>25% 风险预算</span></div>
<div class="p04-qassets"><i>股票（SPY）</i><i>大宗商品（DBC）</i><i>企业信用债</i></div>
<p>经济扩张快于市场预期，企业盈利上修与工业补库共同推高股票和商品价格。</p>
</div>
<div class="p04-qcard" style="--p04-c:#5986a1">
<div class="p04-qhead"><strong>② 增长低于预期</strong><span>25% 风险预算</span></div>
<div class="p04-qassets"><i>名义国债（IEF / TLT）</i><i>通胀挂钩债（TIP）</i></div>
<p>衰退担忧压低企业盈利并迫使央行降息，无违约长债因收益率下行收获资本利得。</p>
</div>
<div class="p04-qcard" style="--p04-c:#a8743f">
<div class="p04-qhead"><strong>③ 通胀超预期</strong><span>25% 风险预算</span></div>
<div class="p04-qassets"><i>通胀挂钩债（TIP）</i><i>大宗商品（DBC）</i><i>实物黄金（GLD）</i></div>
<p>物价超预期上涨直接推高能源与原材料，并按 CPI 指数上调 TIPS 调整后本金与票息。</p>
</div>
<div class="p04-qcard" style="--p04-c:#7c679c">
<div class="p04-qhead"><strong>④ 通胀低于预期</strong><span>25% 风险预算</span></div>
<div class="p04-qassets"><i>股票（SPY）</i><i>名义国债（IEF / TLT）</i></div>
<p>物价降温让央行不必紧缩，贴现率回落同时支撑股票估值与固定票息名义国债。</p>
</div>
</div>
<figcaption>区分点在于相对市场预期的“意外”而非绝对高低；同一资产可同时覆盖两个相邻象限（如名义国债对应增长走弱与通胀降温）。</figcaption>
</figure>

<span data-text-versions id="nb-p04-text-tips">这里需要把**美国通胀保护国债**（TIPS，常见载体为 iShares TIPS Bond ETF，TIP）的机制看清。按照美国财政部 TreasuryDirect 与 TIP 摘要招募说明书的规则，TIPS 的本金按非季调消费者物价指数（CPI-U）逐月上调，固定实际票息率乘在调整后本金上付息，到期按调整后本金与原始面值较高者兑付。[^tips-td]<sup>，</sup>[^tip-pros] 也就是说，TIPS 能保护投资者抵御**意外通胀**，但二级市场价格依然随**实际利率**（名义利率减去通胀预期）反向波动<span data-text-detail>（2022 年美国通胀高企的同时，美联储把实际利率从负值大幅拉升至正值，导致长久期 TIPS 的久期跌价超过 CPI 本金上调，全年 TIP 含分红总回报仍为 −12.3%，仅比同期名义中长债 IEF 的 −15.2% 少跌约 2.9 个百分点；真正录得正收益的是直接挂钩能源与原材料的商品期货基金 DBC，全年涨 +19.3%）</span>。[^rp-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 为什么风险平价常借温和杠杆抬高债券权重 {#nb-p04-leverage}

把股票、名义国债、TIPS 和大宗商品按历史波动倒数配进同一个无杠杆组合，马上会碰到一个现实难题。拿 2011 至 2020 年实测波动率（SPY 17.2%、DBC 16.0%、IEF 5.9%、TIP 5.4%）来算，四资产无杠杆风险平价的资金权重会自然落成：**12.2% SPY ＋ 13.2% DBC ＋ 35.7% IEF ＋ 38.9% TIP**。近四分之三的本金压在低波动债券上，整套组合的年化波动被压缩到仅 **4.6%**，十年年化回报只有 **+4.2%**（同期 60/40 波动 9.5%、年化 +10.5%）。[^rp-data]

如果一套组合波动极低、收益也跟着掉到接近定期存款，养老金和机构客户很难接受。AQR 基金的 Clifford Asness、Andrea Frazzini 与 Lasse Pedersen 在 2012 年《Financial Analysts Journal》发表的《Leverage Aversion and Risk Parity》里给出了理论解释：多数投资者因为制度限制或心理原因**厌恶杠杆**，为了追逐更高的目标收益，只能把大量本金挤进高波动股票，压低了股票的风险调整回报；相反，低波动债券虽然绝对收益不高，单位风险换来的超额回报（Sharpe 比率）往往更高。[^aqr-2012]

因此，机构风险平价往往采取两步走：先把四类资产按等风险配平，再对低波动的债券腿施加**温和杠杆**（常见在 1.5 至 2 倍总敞口区间），把整套组合的波动率抬回到接近 60/40 的水平。公开挂牌的 **RPAR Risk Parity ETF**（SEC Form 497K，2026 年 4 月 30 日）给出了很直观的现实样本：它的长期目标风险为 TIPS、全球股票、商品与黄金、美国国债各占 **25%**；落到资金端，则是 **35% 长期 TIPS ＋ 25% 全球股票 ＋ 25% 商品与黄金 ＋ 15% 超短美债作保证金抵押，再叠入 10 年期与超长期美债期货**，靠期货的保证金效率把美债名义敞口放大到超过 15%。[^rpar-pros]

<figure class="flow-figure p04-lev-chain" id="nb-p04-lev-chain">
<div class="ff-head"><p class="ff-title">从无杠杆等风险到温和杠杆的构造链条</p><span class="ff-sub">权重示例取自 2011—2020 四资产实测波动倒数</span></div>
<div class="p04-lsteps business-exchange" aria-label="三步构造链条：第一步、按波动倒数配平风险：SPY 12.2%、DBC 13.2%、IEF 35.7%、TIP 38.9%，近七成五资金落在债券上，组合年化波动压低至 4.6%、预期回报同步偏低。第二步、用国债期货施加温和杠杆：机构常通过 10 年期或超长期美债期货（如 RPAR 以 15% 短债作抵押叠加美债期货）将总敞口放至约 1.5 至 1.8 倍，使整体波动接近 60/40。第三步、净回报取决于融资差价：杠杆后净回报等于 L 倍组合回报减去 (L − 1) 倍融资利率，仅当组合收益率高于隐含融资利率时杠杆才放大正超额收益；一旦短期融资利率跃升超过债券收益，杠杆会转为负利差拖累。">
<div class="p04-lbox">
<span class="p04-lstep-tag">步骤一 · 波动倒数配权</span>
<strong>低波债券占去近四分之三资金</strong>
<div class="p04-wbar"><span style="--w:12.2%;--c:#a8743f"></span><span style="--w:13.2%;--c:#d4a36a"></span><span style="--w:35.7%;--c:#23695a"></span><span style="--w:38.9%;--c:#5986a1"></span></div>
<p class="p04-wleg">SPY 12.2% · DBC 13.2% · IEF 35.7% · TIP 38.9%</p>
<p style="margin-top:4px">无杠杆组合波动仅 4.6%，回撤浅，但长期绝对回报偏低。</p>
</div>
<div class="p04-lbox">
<span class="p04-lstep-tag">步骤二 · 温和杠杆放量</span>
<strong>机构常用美债期货抬升债券敞口</strong>
<p>用短债抵押叠加国债期货（如 RPAR 规则），避开高息零售融资，将组合波动抬升至接近 60/40（约 8%—10%），保留分散后的高 Sharpe。</p>
</div>
<div class="p04-lbox p04-lwarn">
<span class="p04-lstep-tag">步骤三 · 融资成本门槛</span>
<strong>杠杆前提：资产回报 ＞ 融资利率</strong>
<p>净回报近似为 L 倍组合收益减去 (L − 1) 倍融资成本；当短期现金利率跃升至高于债券收益率时，加杠杆会反过来吞噬回报。</p>
</div>
</div>
<figcaption>杠杆后的组合回报可写为 R_lev = L·R_RP − (L − 1)·r_fin；利率曲线倒挂或融资利差扩大时，正利差优势随之消失。</figcaption>
</figure>

## 失效边界：相关性翻正与融资利率挤压 {#nb-p04-boundary}

从 1980 年代初到 2020 年末，美国十年期国债收益率经历了近四十年的下行长牛，既给了债券丰厚的资本利得，又在 2008 年后的十余年里维持了接近零的短期融资成本。一旦前提换成一个**从极低利率起步、遭遇急剧加息**的宏观窗口，风险平价最怕的两道压力会同时落下来：

1. **股债相关性翻正叠加 TIPS 实际利率下杀**：名义国债（IEF、TLT）与通胀债（TIP）占了组合最大头资金，当通胀推动央行把名义利率与实际利率一起猛拉上去，股票、名义债和 TIPS 同步下跌，杠杆把三边亏损一起放大。
2. **融资成本跃升挤压利差**：无风险短期利率（以 BIL 为近似）从接近 0% 飙升至接近 5%，融资买债从“借低息吃高息”变成“借高息扛低息”，即使债券跌势缓和，高融资成本仍会持续拖累杠杆组合的净回报。

把刚才那套按 2011—2020 波动倒数定好的四资产风险平价（无杠杆与 1.8 倍杠杆）、传统 60/40（SPY / IEF）以及实盘基金 RPAR，放进 **2011—2020 低通胀顺风十年**与 **2022—2023 加息挤压两年**对照，边界非常清楚：

<figure class="flow-figure p04-eras" id="nb-p04-eras">
<div class="ff-head"><p class="ff-title">两段真实历史对比：2011—2020 低通胀顺风 vs 2022—2023 加息挤压</p><span class="ff-sub">Yahoo Finance 调整后收盘价 · 1.8× 杠杆按 BIL + 0.50% 年化模拟融资</span></div>
<div class="p04-ecols business-exchange" aria-label="两段真实历史对比：第一段 2011 至 2020 十年低通胀顺风期（SPY 与 IEF 日相关性 −0.451，BIL 融资基准年化仅 +0.5%）：60/40 年化 +10.5%、波动 9.5%、最大回撤 −19.1%；无杠杆四资产 RP 年化 +4.2%、波动 4.6%、最大回撤 −10.6%；1.8 倍杠杆 RP 年化 +6.7%、波动 8.3%、最大回撤 −18.5%（同期商品 DBC 十年累计大跌 −45.1%）。第二段 2022 至 2023 两年加息与高利率挤压期（2022 年 SPY 与 IEF 相关性翻正至 +0.190、SPY 与 TIP 达 +0.278，BIL 2023 年升至 +4.9%、两年累计 +6.4%）：2022 全年 60/40 跌 −16.4%、无杠杆 RP 跌 −9.8%、1.8 倍杠杆 RP 跌 −18.8%、实盘 RPAR 跌 −22.8%；2022 至 2023 两年累计 60/40 跌 −2.2%、无杠杆 RP 跌 −5.2%、1.8 倍杠杆 RP 跌 −15.1%、实盘 RPAR 跌 −18.2%。">
<div class="p04-epanel">
<div class="p04-ehead"><strong>2011—2020 低通胀顺风十年</strong><span>低利率 · 股债负相关</span></div>
<div class="p04-emeta">SPY–IEF 日相关 <b>−0.451</b> · BIL 融资基准年化 <b>+0.5%</b></div>
<div class="p04-elist">
<div class="p04-erow"><span>传统 60/40（SPY / IEF）</span><em>波动 9.5% · 回撤 −19.1%</em><strong>年化 +10.5%</strong></div>
<div class="p04-erow"><span>无杠杆四资产 RP（1.0×）</span><em>波动 4.6% · 回撤 −10.6%</em><strong>年化 +4.2%</strong></div>
<div class="p04-erow"><span>温和杠杆 RP（1.8×）</span><em>波动 8.3% · 回撤 −18.5%</em><strong>年化 +6.7%</strong></div>
<div class="p04-erow"><span>同期参照：BIL 短债</span><em>几乎零利率融资环境</em><strong>年化 +0.5%</strong></div>
</div>
</div>
<div class="p04-epanel p04-eshock">
<div class="p04-ehead"><strong>2022—2023 加息与融资挤压</strong><span>相关性翻正 · 融资跃升</span></div>
<div class="p04-emeta">2022 年 SPY–IEF <b>+0.190</b> / SPY–TIP <b>+0.278</b> · 2023 BIL <b>+4.9%</b></div>
<div class="p04-elist">
<div class="p04-erow"><span>传统 60/40（SPY / IEF）</span><em>2022 跌 −16.4% · 两年</em><strong class="p04-neg">−2.2%</strong></div>
<div class="p04-erow"><span>无杠杆四资产 RP（1.0×）</span><em>2022 跌 −9.8% · 两年</em><strong class="p04-neg">−5.2%</strong></div>
<div class="p04-erow"><span>温和杠杆 RP（1.8×）</span><em>2022 跌 −18.8% · 两年</em><strong class="p04-neg">−15.1%</strong></div>
<div class="p04-erow"><span>实盘 RPAR ETF（含美债期货）</span><em>2022 跌 −22.8% · 两年</em><strong class="p04-neg">−18.2%</strong></div>
</div>
</div>
</div>
<figcaption>四资产 RP 权重固定为 2011—2020 波动倒数（12.2% SPY / 35.7% IEF / 38.9% TIP / 13.2% DBC），逐日再平衡且不计税费与交易佣金；RPAR 为实盘净值总回报。<a href="/notebook/risk-parity/risk-parity-daily.csv">查看完整日频数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-p04-text-2022">在 2011—2020 年，哪怕商品 DBC 十年大跌 −45.1%，无杠杆 RP 依然把最大回撤压在 −10.6%（只有 60/40 的一半出头）；到了 2022 年，无杠杆 RP 靠商品上涨（DBC +19.3%）也把全年跌幅控在 **−9.8%**，浅于 60/40 的 −16.4%。让杠杆风险平价受重伤的，是**低利率起步下的债券大跌遇上杠杆放大，再接上 2023 年接近 5% 的高融资成本**：1.8 倍杠杆 RP 在 2022 年跌 **−18.8%**，2023 年市场企稳时，扣完融资成本只拿到 **+4.6%**，反而不如无杠杆版本的 **+5.2%**；实盘自带超长期美债期货与长期 TIPS 的 RPAR 在 2022 年跌 **−22.8%**（最大回撤 −29.0%），两年累计仍亏 **−18.2%**，远逊于同期 60/40 的 −2.2%<span data-text-detail>（若把黄金 GLD 也纳入五资产风险平价，2022 年无杠杆版跌 −8.7%、1.6 倍杠杆版跌 −15.0%，2020—2025 六年受益于黄金累计大涨 +177.3%，五资产无杠杆与 1.6 倍杠杆累计回报分别达 +41.8% 与 +54.3%，仍低于同期受益于美股大牛市的 60/40 的 +71.9%。全天候瞄准的是用更低的波动和更分散的回报来源穿越未知的宏观意外，在单边股市牛市里通常会跑输纯股或 60/40）</span>。[^rp-data]<sup>，</sup>[^rpar-pros]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

回到普通个人账户，我们同样不需要盲目照搬高杠杆债券配置，可以把风险平价里三条可以直接借鉴的结构纪律留下来：

1. **按风险贡献而不是账面资金检查分散**：买进 60% 股票和 40% 中短期债券后，别以为风险也平分了——先看各类资产的历史波动率倍数，评估真遇股灾时组合是否仍几乎全由股票决定净值。
2. **普通账户慎用高息融资给低波资产加杠杆**：机构靠国债期货的隐含利率接近无风险基准，个人账户若用高出基准 1%—2% 的券商融资去杠杆化持有中长期债券，在利率倒挂期很容易陷入负利差；无杠杆状态下，适当配入名义债、TIPS、黄金／商品与超短债，已经能建立较稳的四象限缓冲。
3. **警惕极低利率起点的长久期集中度**：全天候不是永动机；当长债名义利率和实际利率都压在历史低位时，把超长期名义债与超长期 TIPS 叠上杠杆，会同时暴露于利率抬升和相关性翻正，此时保留一部分超短美债（BIL）与实物资产权重，能替组合留出关键的安全垫。

下一篇[《信用与尾部风险对冲》](/zh/notebook/credit-tail-risk-hedging/)将进入最后一条对冲范式，拆解信用利差、CDS 与深度虚值期权怎样在极端崩盘时提供凸性赔付，以及个人账户的现实替代方案。

<script src="/notebook/risk-parity/ui.js?v=20261126" defer></script>

[^qian-2005]: Edward E. Qian（PanAgora Asset Management），[Risk Parity Portfolios: Efficient Portfolios Through True Diversification](https://www.panagora.com/assets/PanAgora-Risk-Parity-Portfolios-Efficient-Portfolios-Through-True-Diversification.pdf)，2005 年 9 月，提出风险平价概念并以 1983—2004 年 Russell 1000 与 Lehman Aggregate 证明 60/40 组合 93% 的风险和 95.6% 的大额月度损失来自股票。
[^bridgewater-aw]: Bridgewater Associates，[The All Weather Story](https://www.bridgewater.com/resources/all-weather-story.pdf)，2012，记录 1996 年全天候策略创立背景与增长／通胀四象限各 25% 风险预算映射。
[^aqr-2012]: Clifford S. Asness, Andrea Frazzini & Lasse H. Pedersen，[Leverage Aversion and Risk Parity](https://www.aqr.com/-/media/AQR/Documents/Insights/Journal-Article/Leverage-Aversion-and-Risk-Parity.pdf)，Financial Analysts Journal 68(1)，2012，提出杠杆厌恶假说及 1926—2010 年杠杆风险平价的实证检验。
[^tips-td]: U.S. Department of the Treasury（TreasuryDirect），[Treasury Inflation-Protected Securities（TIPS）](https://treasurydirect.gov/marketable-securities/tips/)，TIPS 本金按 CPI-U 调整、固定实际票息率与到期面值底线说明，2026-11-26 查阅。
[^tip-pros]: BlackRock iShares，[iShares TIPS Bond ETF（TIP）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1100663/000119312526081826/d191245d497k.htm)，SEC Form 497K（2026-02-27），年费率 0.18%，CPI 本金调整与实际利率久期风险说明。
[^rpar-pros]: Tidal Investments LLC，[RPAR Risk Parity ETF（RPAR）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1742912/000199937126009444/rpar_497k-043026.htm)，SEC Form 497K（2026-04-30），四类资产各 25% 长期目标风险、35% 长期 TIPS / 25% 全球股票 / 25% 商品与黄金 / 15% 短债抵押叠加 10 年及超长期美债期货结构，年总费率 0.52%。
[^rp-data]: [Yahoo Finance：风险平价跨资产长周期历史行情](https://finance.yahoo.com/quote/IEF/history/)，2026-11-26 读取 2010-12-20 至 2026-01-09 共 3,787 个交易日的 SPY、IEF、TLT、TIP、GLD、DBC、BIL 及 2019-12-13 起的 RPAR 调整后收盘价。完整复算数列见[风险平价日频数据](/notebook/risk-parity/risk-parity-daily.csv)。
