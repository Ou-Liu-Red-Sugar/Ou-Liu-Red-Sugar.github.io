{
  "title": "收入增长与市场预期",
  "description": "拆开销量、净价、客户和产品组合，用真实业绩与预测市场辨认增长预期，再从股价反推所需收入，交给经营证据检验。",
  "layout": "entry",
  "notebookid": "zh-revenue-growth-expectations",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-revenue-growth-expectations"
}

收入增长，可能因为卖得更多，也可能因为卖得更贵。Coca-Cola（KO）在 2025 年第二季度的报表净营收同比增长 1%，全球标准箱销量却下降 1%。收入在涨、销量在跌，不把增长拆开，根本看不清多出来的钱究竟靠什么撑着。[^ko-growth]

[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)拆清了八类生意谁买单、怎么收费。收入一旦开始变化，接下来就要追问增长的质量与延续性：究竟是真实用量扩张、结构上移，还是仅仅受惠于发货时点、折扣回补或并购并表？真到买卖决策时，还要把经营拆解拿去跟公开预期门槛对表，再从眼前股价反推出公司需要交出怎样的成绩单。

## 销量、净价与产品组合 {#nb-d02-drivers}

卖商品的收入最直观：每类商品的销量 \(q_i\) 乘以扣除折扣、退货与渠道折让后的平均净价 \(p_i\)，加总即得收入 \(R=\sum_i q_i p_i\)。把相邻两期或上年同季并列时，除了量与单品净价，还有一个经常被错当成“提价”的变量——**产品组合**。哪怕每款商品单价分文未涨，只要高价款占比上升，整体均价也会大幅跳升。

<figure class="flow-figure stack-rows" id="nb-d02-mix">
<div class="ff-head"><p class="ff-title">每款都不涨价，平均售价也能上升（示意）</p><p class="ff-legend"><span style="--c:#8db39c">A 款，每件 10 元</span><span style="--c:#24664f">B 款，每件 20 元</span></p></div>
<div class="sr-grid">
<span class="sr-name">第一期</span><span class="sr-val">收入 <strong>1,200 元</strong><br>平均售价 12 元</span><div class="sr-bar business-exchange" aria-label="第一期卖出 100 件：A 款 80 件、B 款 20 件，收入 1,200 元，平均售价 12 元。"><i style="--w:80%;--c:#8db39c">A 80 件</i><i style="--w:20%;--c:#24664f">B 20 件</i></div>
<span class="sr-name">第二期</span><span class="sr-val">收入 <strong>1,400 元</strong><br>平均售价 <strong>14 元，+16.7%</strong></span><div class="sr-bar business-exchange" aria-label="第二期同样卖出 100 件，每款价格不变，但 B 款增加到 40 件、A 款减少到 60 件，收入 1,400 元，平均售价 14 元，上升约 16.7%。"><i style="--w:60%;--c:#8db39c">A 60 件</i><i style="--w:40%;--c:#24664f">B 40 件</i></div>
</div>
<figcaption>两期都卖出 100 件，A、B 两款单价不变；平均售价跳升 16.7%，全部来自高价款占比提高。</figcaption>
</figure>

量、价与组合彼此牵动：硬提价可能劝退价格敏感顾客，推高毛利新品则可能同时拉高销量与均价。下面沿用前篇的八个行业分支，逐一用 2025/2026 年一手财报演示不同生意怎样拆增长、避陷阱。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d02-consumer">

## 消费品与零售：销量与组合 {#nb-d02-consumer-story}

拆消费品牌与零售商的收入变化，要先核对三条分界线：**批发与直营渠道**、**上游出货与终端动销**，以及**老店可比销售与新店／会费增量**。前篇[《消费品与零售》](/zh/notebook/customers-products-pricing/#nb-d01-consumer-flow)已经拆开了 NKE 与 WMT 的收费结构，把它们拉进两期对比，差异立刻显现。[^nke]<sup>，</sup>[^ko-growth]<sup>，</sup>[^wmt]

<figure class="flow-figure" id="nb-d02-consumer-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">消费品与零售：渠道量价、发货时点与老店拆解（2025）</p><div class="ff-switch" role="group" aria-label="切换消费案例" hidden><button type="button" data-ff-view-choice="nke" aria-pressed="true">NKE 渠道降速</button><button type="button" data-ff-view-choice="ko" aria-pressed="false">KO 发货时点差</button><button type="button" data-ff-view-choice="wmt" aria-pressed="false">WMT 老店与会费</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="nke" aria-label="NKE FY2025 渠道增速分化：批发由 277.6 亿降至 258.8 亿美元（−7%，剔汇率 −6%），直营 NIKE Direct 由 215.2 亿降至 187.8 亿美元（−13%，其中线上 −20%）；鞋类销量降 8%、每双均价再拖累约 3 个百分点。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="32" font-size="14" font-weight="700" fill="#22392f">NKE FY2025：直营跌幅几乎是批发两倍</text>
  <text x="696" y="32" text-anchor="end" font-size="12.5" fill="#5e6d65">灰色 FY24 · 彩色 FY25</text>
  <text x="24" y="76" font-size="13.5" font-weight="700" fill="#22392f">批发渠道</text>
  <rect x="124" y="54" width="330" height="16" rx="3" fill="#dce3dd"/>
  <rect x="124" y="74" width="307" height="18" rx="3" fill="#6b9f8c"/>
  <text x="466" y="88" font-size="13" font-weight="700" fill="#22392f">277.6 → 258.8 亿（−7%）</text>
  <text x="24" y="132" font-size="13.5" font-weight="700" fill="#b5483a">直营 Direct</text>
  <rect x="124" y="110" width="256" height="16" rx="3" fill="#dce3dd"/>
  <rect x="124" y="130" width="223" height="18" rx="3" fill="#b5483a"/>
  <text x="392" y="144" font-size="13" font-weight="700" fill="#b5483a">187.8 亿（−13% · 线上 −20%）</text>
  <text x="24" y="176" font-size="12.5" fill="#8f6033">鞋类口径：销量 −8% · 均价拖累 −3 pct</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="ko" hidden aria-label="KO 2025 Q2 亚太地区两个箱数指标差异：贴近下游动销的标准箱销量 −3%，KO 向装瓶厂发货的浓缩液销量 −5%，两者相差 2 个百分点，主因跨季发货时点错位。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">KO 2025 Q2 亚太：两个“箱数”相差 2 pct</text>
  <line x1="560" y1="54" x2="560" y2="146" stroke="#b7c3b9" stroke-width="1.5"/>
  <text x="560" y="164" text-anchor="middle" font-size="12" fill="#5e6d65">0%</text>
  <text x="24" y="82" font-size="13.5" font-weight="700" fill="#22392f">标准箱销量（贴近终端）</text>
  <rect x="410" y="64" width="150" height="26" rx="4" fill="#6b9f8c"/>
  <text x="396" y="82" text-anchor="end" font-size="14" font-weight="700" fill="#22392f">−3%</text>
  <text x="24" y="128" font-size="13.5" font-weight="700" fill="#b5483a">浓缩液销量（上游发货）</text>
  <rect x="310" y="110" width="250" height="26" rx="4" fill="#b5483a"/>
  <text x="296" y="128" text-anchor="end" font-size="14" font-weight="700" fill="#b5483a">−5%</text>
  <text x="580" y="106" font-size="12.5" fill="#8f6033">主因跨季发货时点</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="wmt" hidden aria-label="WMT U.S. FY2025 净销售增 4.7%（4,418 亿至 4,624 亿美元），可比老店销售增 4.8%（交易次数与件数拉动）；全集团按 12 个月摊销的纯会员费由 31 亿增至 38 亿美元（+22.6%）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="34" width="212" height="108" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="126" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">WMT U.S. 净销售</text>
  <text x="126" y="96" text-anchor="middle" font-size="22" font-weight="700" fill="#22392f">+4.7%</text>
  <text x="126" y="122" text-anchor="middle" font-size="12" fill="#3c4c44">4,418 → 4,624 亿美元</text>
  <rect x="254" y="34" width="212" height="108" rx="10" fill="#f3f8f4" stroke="#23695a" stroke-width="1.4"/>
  <text x="360" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">老店可比销售</text>
  <text x="360" y="96" text-anchor="middle" font-size="22" font-weight="700" fill="#23695a">+4.8%</text>
  <text x="360" y="122" text-anchor="middle" font-size="12" fill="#3c4c44">客流与件数拉动</text>
  <rect x="488" y="34" width="212" height="108" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="594" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">全集团纯会费</text>
  <text x="594" y="96" text-anchor="middle" font-size="22" font-weight="700" fill="#8f6033">31 → 38 亿</text>
  <text x="594" y="122" text-anchor="middle" font-size="12" fill="#5e6d65">按 12 个月摊销</text>
</svg>
</div>
<figcaption>点击切换三家消费公司视角。WMT 总销售（+4.7%）与可比老店（+4.8%）范围不同，不可相减算新店贡献。数据来自 NKE、WMT FY2025 10-K 及 KO 2025 Q2 业绩稿。</figcaption>
</figure>

看 NKE 时，直营跌幅几乎是批发的两倍，且直营线上重挫 20%，说明终端流量承压后，品牌不得不靠直营降价和批发折扣去消化库存，进而同时拉低销量与每双净价。看 KO 亚太区，标准箱销量与浓缩液发货相差 2 个百分点，一旦只盯单季出货量，很容易把跨季发货错位当成需求断崖；而 KO 披露的 `price/mix` 把提价、包装规格与渠道组合打成一包，同样不能读成全线饮料统一涨价。

看 WMT 这类零售巨头，则要把老店客流（交易次数与件数）同新店扩张分开，再把按 12 个月摊销的纯会员费单独列出——年初入会与年中入会在当年确认的会费天数不同，会员总数与当期会费收入天然存在时间错位。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d02-software">

## 软件与云服务：新增客户与原有客户 {#nb-d02-software-story}

软件与云服务的增长来自两头：新客户买进来了没有，老客户花得比去年多了没有。按席位收费的办公软件看付费许可与套餐升级（参考前篇[席位与用量双轨图](/zh/notebook/customers-products-pricing/#nb-d01-software-flow)），按用量计费的云数据平台则看同一群老客的实际消耗扩张。[^snow]<sup>，</sup>[^msft-fy26]

<figure class="flow-figure" id="nb-d02-software-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">软件与云服务：老客留存口径错位（SNOW）与席位／云分化（MSFT）</p><div class="ff-switch" role="group" aria-label="切换软件视图" hidden><button type="button" data-ff-view-choice="snow" aria-pressed="true">SNOW 口径错位</button><button type="button" data-ff-view-choice="msft" aria-pressed="false">MSFT 席位 vs 云</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="snow" aria-label="SNOW Q2 FY2026 两把尺子时间窗与人群错位：单季产品收入同比 +32%（1,090.5 M 美元）覆盖 2025 年 5 至 7 月全体新老客户；净收入留存率 NRR 125%（+25%）比较的是 2023 年 8 月在网老客连续两个 12 个月滚动窗口，不可拿 32% 减 25% 倒推新客贡献。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">SNOW Q2 FY26：两把尺子不能相减</text>
  <rect x="24" y="54" width="672" height="50" rx="8" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="42" y="84" font-size="13.5" font-weight="700" fill="#23695a">产品收入 +32%</text>
  <text x="198" y="84" font-size="13" fill="#22392f">1,090.5 M · 单季 · 全体新老客</text>
  <rect x="24" y="114" width="672" height="50" rx="8" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="42" y="144" font-size="13.5" font-weight="700" fill="#8f6033">NRR 125% (+25%)</text>
  <text x="198" y="144" font-size="13" fill="#22392f">两年滚动 12 月 · 仅限老客</text>
  <text x="24" y="186" font-size="12.5" font-weight="700" fill="#b5483a">时间窗、群体与分母全错位，两数不可相减</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="msft" hidden aria-label="MSFT FY2026 与 SNOW 配套指标对照：MSFT M365 商业席位仅增 6%，但靠 E5 与 Copilot 提单价拉动 M365 商业云增 17%，Azure 及其他云受 AI 负载拉动增 41%；同期 SNOW 百万美元级大客户增 30% 至 654 家。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">MSFT FY2026：席位慢增也能靠提价与云消耗提速</text>
  <text x="24" y="78" font-size="13.5" font-weight="700" fill="#5e6d65">M365 付费席位</text>
  <rect x="176" y="60" width="66" height="24" rx="4" fill="#9fb2a8"/>
  <text x="256" y="78" font-size="14" font-weight="700" fill="#5e6d65">+6%</text>
  <text x="24" y="120" font-size="13.5" font-weight="700" fill="#23695a">M365 商业云收入</text>
  <rect x="176" y="102" width="187" height="24" rx="4" fill="#23695a"/>
  <text x="377" y="120" font-size="14" font-weight="700" fill="#23695a">+17%（E5／Copilot 提价）</text>
  <text x="24" y="162" font-size="13.5" font-weight="700" fill="#8f6033">Azure 及其他云</text>
  <rect x="176" y="144" width="450" height="24" rx="4" fill="#a8743f"/>
  <text x="640" y="162" font-size="14" font-weight="700" fill="#8f6033">+41%</text>
</svg>
</div>
<figcaption>点击切换 SNOW 与 MSFT 视图。SNOW 同季 RPO 增 33% 至 69.3 亿美元、百万美元级大客户增 30% 至 654 家。数据来自 SNOW Q2 FY2026 10-Q 与 MSFT FY2026 10-K。</figcaption>
</figure>

<span data-text-versions id="nb-d02-software-text-1">Snowflake（SNOW）的净收入留存率（NRR）125%，打包反映了选定老客群体扩用、缩减与停用退出后的净扩张<span data-text-detail>（本次口径选取 2023 年 8 月在网且签有容量合同的客户，对比 2023.08–2024.07 与 2024.08–2025.07 两个 12 个月窗口；停用客户保留在群体中、后一年记零。同季 10-Q 另披露约 98% 收入来自既有容量客户，属存量结构占比，同样不能拿来替代新客增长拆解）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>实务里最容易犯的算数错，是拿当季产品收入同比 32% 减去 25% 声称新客贡献了 7%——两把尺子的时间窗口、客户池和分母全部错位。

判断软件与云增长能否延续，还要把“工作负载优化”纳入视野：同一客户给查询加速或压缩存储，可能让业务量不变而云账单收缩；反过来，像 MSFT M365 那样靠 E5 与 Copilot 升级拉高每席位单价，哪怕席位只增 6%，商业云收入依然能跑出 17% 的增速。

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d02-platform">

## 互联网平台与广告：交易与收费 {#nb-d02-platform-story}

平台流量涨上去以后，要沿着收费层逐一拆解：搜索广告拆**付费点击量 × 平均单次点击收入（CPC）**，电商平台拆**成交件数与履约／广告渗透率**，再回查广告主获客账本确认这轮增长是需求变旺还是获客变贵。前篇[《互联网平台与广告》](/zh/notebook/customers-products-pricing/#nb-d01-platform-flow)已画出 AMZN、BKNG 与 GOOGL 的资金链，这里直接落到 2025 年的变动上。[^alphabet]<sup>，</sup>[^amzn-fy25]<sup>，</sup>[^bkng]

<figure class="flow-figure" id="nb-d02-platform-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">互联网平台与广告：搜索量价乘积与增长质量核验（2025）</p><div class="ff-switch" role="group" aria-label="切换平台视角" hidden><button type="button" data-ff-view-choice="googl" aria-pressed="true">GOOGL 搜索量×价</button><button type="button" data-ff-view-choice="bkng" aria-pressed="false">BKNG 获客核验</button><button type="button" data-ff-view-choice="amzn" aria-pressed="false">AMZN 3P 服务</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="googl" aria-label="GOOGL 2025 搜索点击驱动增长公式：付费点击量 +6% 乘以平均 CPC +7% 约等于 +13.4%，对应 Search & other 收入由 1,980.8 亿增至 2,245.3 亿美元；同期 YouTube 广告 +11.7%，Google Network −1.9%。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="34" width="180" height="96" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="114" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">付费点击量</text>
  <text x="114" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#23695a">+6%</text>
  <text x="234" y="92" text-anchor="middle" font-size="22" font-weight="700" fill="#7a8780">×</text>
  <rect x="264" y="34" width="180" height="96" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="354" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">平均 CPC</text>
  <text x="354" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#8f6033">+7%</text>
  <text x="474" y="92" text-anchor="middle" font-size="22" font-weight="700" fill="#7a8780">≈</text>
  <rect x="504" y="34" width="192" height="96" rx="10" fill="#23695a"/>
  <text x="600" y="64" text-anchor="middle" font-size="13" fill="#e5efe9">搜索收入 2,245 亿</text>
  <text x="600" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#ffffff">+13.4%</text>
  <text x="24" y="164" font-size="12.5" fill="#5e6d65">YouTube +11.7% · Network −1.9%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="bkng" hidden aria-label="BKNG 2025 广告买方增长核验：总预订额 +12.4%、收入 +13.4%、营销费用 +12.5%，营销增速未跑赢收入，占收比稳在 30.4%，支撑投放延续性。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">BKNG 2025：营销增速未跑赢收入，投放站得住脚</text>
  <text x="24" y="78" font-size="13.5" font-weight="700" fill="#22392f">总预订额</text>
  <rect x="136" y="60" width="372" height="24" rx="4" fill="#6b9f8c"/>
  <text x="522" y="78" font-size="14" font-weight="700" fill="#22392f">+12.4%</text>
  <text x="24" y="120" font-size="13.5" font-weight="700" fill="#23695a">营业收入</text>
  <rect x="136" y="102" width="402" height="24" rx="4" fill="#23695a"/>
  <text x="552" y="120" font-size="14" font-weight="700" fill="#23695a">+13.4%</text>
  <text x="24" y="162" font-size="13.5" font-weight="700" fill="#8f6033">营销获客费</text>
  <rect x="136" y="144" width="375" height="24" rx="4" fill="#a8743f"/>
  <text x="525" y="162" font-size="14" font-weight="700" fill="#8f6033">+12.5%（占收比稳在 30.4%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="amzn" hidden aria-label="AMZN 2025 平台变现双引擎：3P 第三方卖家服务由 1,561 亿增至 1,722 亿美元（+10.3%，含成交量与 FBA 履约渗透），站内广告服务单独增 22.1% 至 686 亿美元。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">AMZN 2025：履约渗透与广告单独放大平台收入</text>
  <text x="24" y="84" font-size="13.5" font-weight="700" fill="#23695a">3P 卖家服务</text>
  <rect x="150" y="66" width="344" height="26" rx="5" fill="#23695a"/>
  <text x="508" y="84" font-size="13.5" font-weight="700" fill="#23695a">1,722 亿（+10.3%）</text>
  <text x="24" y="132" font-size="13.5" font-weight="700" fill="#8f6033">站内广告服务</text>
  <rect x="150" y="114" width="138" height="26" rx="5" fill="#a8743f"/>
  <text x="302" y="132" font-size="13.5" font-weight="700" fill="#8f6033">686 亿（+22.1% · 独立核算）</text>
</svg>
</div>
<figcaption>点击切换三家平台样本。GOOGL 付费点击 +6% 与 CPC +7% 仅对应点击驱动范围。数据来自 GOOGL、BKNG 与 AMZN 2025 Form 10-K。</figcaption>
</figure>

GOOGL 的拆解给出了一个极好的核对示范：付费点击 +6% 乘以平均 CPC +7% 约等于 +13.4%，与全体 Search & other 收入增速 13.4% 高度接近，但 CPC 变动夹杂着移动端占比、高价值行业竞价与广告格式调整，不能直接当成所有关键词统一提价；与此同时，依赖外部版位的 Google Network 反而微降 1.9%，说明不同广告位景气度可以背道而驰。

把镜头切到买方 BKNG，就能辨别增长成色：如果广告主营销费用增速持续跑赢预订与收入增速，意味着平台广告的高增可能是在透支广告主利润率，往往难以为继；当营销占收比平稳、退订率可控时，广告预算扩张才站得住脚。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d02-semiconductor">

## 半导体与硬件：交付量与产品结构 {#nb-d02-semiconductor-story}

读半导体公司的收入增长，最危险的捷径是把所有产品加总成“出货台数”或“芯片颗数”。前篇[半导体四层产业链图](/zh/notebook/customers-products-pricing/#nb-d01-semi-chain)已经区分了设计、代工与设备三层，落到年度增幅上，**代际结构迁移**与**系统配套率提升**的威力远大于单纯出货量变化。[^asml-20f]<sup>，</sup>[^nvda]<sup>，</sup>[^mrvl]

<figure class="flow-figure" id="nb-d02-semi-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">半导体与硬件：结构迁移（ASML）与整柜配套爆发（NVDA）</p><div class="ff-switch" role="group" aria-label="切换半导体视角" hidden><button type="button" data-ff-view-choice="asml" aria-pressed="true">ASML 台数跌、收入涨</button><button type="button" data-ff-view-choice="nvda" aria-pressed="false">NVDA 网络配套翻倍</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="asml" aria-label="ASML 2025 代际结构迁移：全年确认系统总数从 583 台降至 535 台（−8.2%），净系统销售额反从 217.7 亿增至 244.7 亿欧元（+12.4%），原因在于低价 KrF 减 74 台仅少 9.9 亿欧元，而高价 NXE 仅增 2 台收入增 25.9 亿、EXE 增 2 台收入增 6.9 亿欧元。">
<svg viewBox="0 0 720 200" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="32" font-size="14" font-weight="700" fill="#22392f">ASML 2025：台数 −8.2%，收入 +12.4%</text>
  <line x1="280" y1="50" x2="280" y2="176" stroke="#b7c3b9" stroke-width="1.4"/>
  <text x="24" y="80" font-size="13.5" font-weight="700" fill="#23695a">NXE 极紫外（+2 台）</text>
  <rect x="280" y="62" width="260" height="24" rx="4" fill="#23695a"/>
  <text x="552" y="80" font-size="13.5" font-weight="700" fill="#23695a">+25.9 亿欧（台均 2.37 亿）</text>
  <text x="24" y="122" font-size="13.5" font-weight="700" fill="#8f6033">EXE 高孔径（+2 台）</text>
  <rect x="280" y="104" width="70" height="24" rx="4" fill="#a8743f"/>
  <text x="362" y="122" font-size="13.5" font-weight="700" fill="#8f6033">+6.9 亿欧（台均 2.89 亿）</text>
  <text x="24" y="164" font-size="13.5" font-weight="700" fill="#b5483a">KrF 成熟机（−74 台）</text>
  <rect x="180" y="146" width="100" height="24" rx="4" fill="#b5483a"/>
  <text x="292" y="164" font-size="13" font-weight="700" fill="#b5483a">−9.9 亿欧（压不动总额）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="nvda" hidden aria-label="NVDA FY2026 数据中心营收由 1,152 亿跃至 1,937 亿美元（+68%）：计算 Compute 增 59% 至 1,624 亿美元，高速网络 Networking 暴增 142% 至 314 亿美元。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">NVDA FY2026 数据中心（+68%）</text>
  <text x="696" y="34" text-anchor="end" font-size="12.5" fill="#5e6d65">1,152 → 1,937 亿美元</text>
  <text x="24" y="84" font-size="13.5" font-weight="700" fill="#23695a">计算 Compute</text>
  <rect x="158" y="62" width="234" height="16" rx="3" fill="#dce3dd"/>
  <rect x="158" y="82" width="372" height="18" rx="3" fill="#23695a"/>
  <text x="544" y="96" font-size="13.5" font-weight="700" fill="#23695a">1,624 亿（+59%）</text>
  <text x="24" y="142" font-size="13.5" font-weight="700" fill="#8f6033">网络 Networking</text>
  <rect x="158" y="120" width="30" height="16" rx="3" fill="#dce3dd"/>
  <rect x="158" y="140" width="72" height="18" rx="3" fill="#a8743f"/>
  <text x="244" y="154" font-size="13.5" font-weight="700" fill="#8f6033">314 亿（+142% · 整柜拉动）</text>
</svg>
</div>
<figcaption>点击切换 ASML 与 NVDA 视图。ASML 另含装机升级服务 81.9 亿欧元（+26.2%）。数据来自 ASML 2025 年报 Note 2 与 NVDA FY2026 10-K。</figcaption>
</figure>

ASML 2025 年给出了教科书级反例：全年确认收入的系统总台数不升反降 8.2%，净系统销售额却逆势大涨 12.4%。低价成熟深紫外（KrF）少卖 74 台，只要多交付 2 台 NXE 极紫外与 2 台高数值孔径 EXE，就能轻松反转大盘。<span data-text-versions id="nb-d02-semi-text-1">同时要守住分母口径与验收时点<span data-text-detail>（ASML 2025 年 Note 2 表的 535 台含光刻及量测检测系统，纯光刻系统为 327 台，总收入 326.7 亿欧元还包含 81.9 亿装机升级与服务收入，三者不可交叉相除算均价；成熟设备与新机型的验收确认时点也会影响跨年收入归属）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

NVDA FY2026 的数据中心爆发则展示了另一层结构杠杆：从单卡走向整柜集群后，高速网络互联（Networking）以 142% 的增速把配套比例大幅推高。紧接下文的 Marvell（MRVL）预测市场案例同样遵循这一纪律——核对数据中心板块门槛时，必须锁死终端市场口径，不与全公司收入或全年指引混谈。

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d02-industrial">

## 工业设备与工程服务：订单与履约 {#nb-d02-industrial-story}

工业与工程公司最常让新手困惑的现象，是“订单没跌、在手积压还在涨，当期收入却跌了”。原因在于新签合同、在手待履约（Backlog）与当期完工确认分属三个时间节点；只要大项目施工或现场土建延后几周，收入就会滑进下一季度。前篇[OTIS 利润翻转图](/zh/notebook/customers-products-pricing/#nb-d01-industrial-flow)已经表明九成利润藏在服务里，拆增长时自然要把新设备与服务彻底拆开。[^otis]<sup>，</sup>[^otis-call]

<figure class="flow-figure" id="nb-d02-industrial-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">工业设备与工程服务：新梯订单错位与服务存量双推（OTIS 2025）</p><div class="ff-switch" role="group" aria-label="切换板块视图" hidden><button type="button" data-ff-view-choice="ne" aria-pressed="true">新设备：订单 vs 收入</button><button type="button" data-ff-view-choice="svc" aria-pressed="false">服务：存量双引擎</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="ne" aria-label="OTIS 2025 新设备三项指标不同步：全年新签订单持平 0%，年末在手待履约 Backlog 按固定汇率增 2%（实际汇率 +6%），但当年确认收入反降 7%（53.7 亿降至 49.9 亿美元），反映施工排期错位。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d02-in-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#7a8780"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">1. 全年新签订单</text>
  <text x="118" y="98" text-anchor="middle" font-size="22" font-weight="700" fill="#5e6d65">0%</text>
  <text x="118" y="122" text-anchor="middle" font-size="12" fill="#5e6d65">合同刚签、未入损益</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#7a8780" stroke-width="2" marker-end="url(#d02-in-a)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">2. 在手 Backlog</text>
  <text x="360" y="98" text-anchor="middle" font-size="22" font-weight="700" fill="#23695a">+2%</text>
  <text x="360" y="122" text-anchor="middle" font-size="12" fill="#3c4c44">固定汇率（实际 +6%）</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#7a8780" stroke-width="2" marker-end="url(#d02-in-a)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="602" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#b5483a">3. 当年确认收入</text>
  <text x="602" y="98" text-anchor="middle" font-size="22" font-weight="700" fill="#b5483a">−7%</text>
  <text x="602" y="122" text-anchor="middle" font-size="12" fill="#5e6d65">49.9 亿 · 施工延至下季</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="svc" hidden aria-label="OTIS 2025 服务业务 94.4 亿美元（有机 +5%）双引擎：在保电梯池增 4% 至约 250 万台，带动维护与维修达 75.8 亿（有机 +4%），老旧梯现代化改造提速至 18.6 亿（有机 +9%）。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">OTIS 服务：94.4 亿（有机 +5%）</text>
  <text x="696" y="34" text-anchor="end" font-size="12.5" fill="#5e6d65">在保梯约 250 万台</text>
  <text x="24" y="84" font-size="13.5" font-weight="700" fill="#23695a">维护与维修</text>
  <rect x="132" y="66" width="380" height="28" rx="5" fill="#23695a"/>
  <text x="526" y="85" font-size="13.5" font-weight="700" fill="#23695a">75.8 亿（有机 +4%）</text>
  <text x="24" y="136" font-size="13.5" font-weight="700" fill="#8f6033">现代化改造</text>
  <rect x="132" y="118" width="93" height="28" rx="5" fill="#a8743f"/>
  <text x="239" y="137" font-size="13.5" font-weight="700" fill="#8f6033">18.6 亿（有机 +9% · 提速最快）</text>
</svg>
</div>
<figcaption>点击切换新设备与服务视角。数据来自 OTIS 2025 Form 10-K 及 Q4 2025 业绩电话会（维护与改造基数不同，不可相加）。</figcaption>
</figure>

切换新梯与服务两个视角，能一眼看透工业龙头的韧性来源：新梯受地产竣工周期与美国 Q4 现场执行延迟拖累下滑 7%，但 250 万台在保电梯池像复利蓄水池一样稳步托住维护维修（+4%），叠加存量楼宇进入老龄换代期带动改造提速（+9%），稳住了整体大盘。<span data-text-versions id="nb-d02-industrial-text-1">核对工业服务增长时，不能把总服务收入除以在保台数当成统一年费<span data-text-detail>（OTIS 服务收入既含按合同期直线确认的周期维保，也含单次维修与按完工成本进度确认的现代化改造；年报中的“Organic volume”排除了汇率与近 12 个月并购剥离，但仍混杂价格与工作组合，不等同于纯物理设备台数增长）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d02-healthcare">

## 医药与医疗服务：采用与支付 {#nb-d02-healthcare-story}

医疗行业内部的三类生意，拆解收入增长时要换三套尺子：创新药看**新药临床爬坡能否跑赢老药专利悬崖（LOE）**，手术机器人看**手术量带动的高频耗材复购**，医院连锁则看**诊疗当量与支付方结构**（对应前篇[医疗渠道与支付错配图](/zh/notebook/customers-products-pricing/#nb-d01-healthcare-flow)）。[^jnj]<sup>，</sup>[^isrg]<sup>，</sup>[^hca]

<figure class="flow-figure" id="nb-d02-healthcare-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">医药与医疗服务：三种生意的增长方程（2025）</p><div class="ff-switch" role="group" aria-label="切换医疗样本" hidden><button type="button" data-ff-view-choice="jnj" aria-pressed="true">JNJ 新旧接力</button><button type="button" data-ff-view-choice="isrg" aria-pressed="false">ISRG 手术复购</button><button type="button" data-ff-view-choice="hca" aria-pressed="false">HCA 医院量价</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="jnj" aria-label="JNJ 2025 创新药新旧切换：重磅药 STELARA 失专利大减 42.8 亿美元（−41.3%），但 DARZALEX 增 26.8 亿（+23%）、TREMFYA 增 14.9 亿（+41%）、CARVYKTI 增 9.3 亿（+96%）完成对冲，板块合计仍增 6.0%。">
<svg viewBox="0 0 720 205" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="30" font-size="14" font-weight="700" fill="#22392f">JNJ 2025 创新药：核心产品单年增减额（亿美元）</text>
  <line x1="330" y1="46" x2="330" y2="188" stroke="#b7c3b9" stroke-width="1.4"/>
  <text x="24" y="72" font-size="13" font-weight="700" fill="#b5483a">STELARA（失专利）</text>
  <rect x="176" y="56" width="154" height="22" rx="4" fill="#b5483a"/>
  <text x="342" y="72" font-size="13" font-weight="700" fill="#b5483a">−42.8 亿（−41.3%）</text>
  <text x="24" y="108" font-size="13" font-weight="700" fill="#23695a">DARZALEX</text>
  <rect x="330" y="92" width="96" height="22" rx="4" fill="#23695a"/>
  <text x="438" y="108" font-size="13" font-weight="700" fill="#23695a">+26.8 亿（+23%）</text>
  <text x="24" y="144" font-size="13" font-weight="700" fill="#23695a">TREMFYA</text>
  <rect x="330" y="128" width="54" height="22" rx="4" fill="#4f8b77"/>
  <text x="396" y="144" font-size="13" font-weight="700" fill="#23695a">+14.9 亿（+41%）</text>
  <text x="24" y="180" font-size="13" font-weight="700" fill="#8f6033">CARVYKTI</text>
  <rect x="330" y="164" width="34" height="22" rx="4" fill="#a8743f"/>
  <text x="376" y="180" font-size="13" font-weight="700" fill="#8f6033">+9.3 亿（+96%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="isrg" hidden aria-label="ISRG 2025 手术量带动三线复购：da Vinci 手术超 310 万例（+18%）与 Ion 活检 +51% 驱动总收入增 20.5% 至 100.6 亿美元，其中系统 +26%、器械附件 +19%、维保服务 +20%。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">ISRG 2025：手术量（+18%）带动三线同步放大</text>
  <text x="24" y="78" font-size="13.5" font-weight="700" fill="#22392f">系统装机</text>
  <rect x="128" y="60" width="364" height="22" rx="4" fill="#9fb2a8"/>
  <text x="506" y="76" font-size="13.5" font-weight="700" fill="#22392f">+26%（24.7 亿）</text>
  <text x="24" y="116" font-size="13.5" font-weight="700" fill="#23695a">器械附件</text>
  <rect x="128" y="98" width="266" height="22" rx="4" fill="#23695a"/>
  <text x="408" y="114" font-size="13.5" font-weight="700" fill="#23695a">+19%（60.2 亿 · 核心复购）</text>
  <text x="24" y="154" font-size="13.5" font-weight="700" fill="#8f6033">维保服务</text>
  <rect x="128" y="136" width="280" height="22" rx="4" fill="#a8743f"/>
  <text x="422" y="152" font-size="13.5" font-weight="700" fill="#8f6033">+20%（15.7 亿）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="hca" hidden aria-label="HCA 2025 营收由 706.0 亿增至 756.0 亿美元（+7.1%），拆解为折合住院人次 +2.9%（399 万至 411 万）乘以单次均价 +4.0%（含病例复杂度与 Medicaid 州补充支付由 55 亿增至 62 亿美元）。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="34" width="180" height="96" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="114" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">折合住院人次</text>
  <text x="114" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#23695a">+2.9%</text>
  <text x="234" y="92" text-anchor="middle" font-size="22" font-weight="700" fill="#7a8780">×</text>
  <rect x="264" y="34" width="180" height="96" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="354" y="64" text-anchor="middle" font-size="13" fill="#5e6d65">单次均价</text>
  <text x="354" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#8f6033">+4.0%</text>
  <text x="474" y="92" text-anchor="middle" font-size="22" font-weight="700" fill="#7a8780">≈</text>
  <rect x="504" y="34" width="192" height="96" rx="10" fill="#23695a"/>
  <text x="600" y="64" text-anchor="middle" font-size="13" fill="#e5efe9">集团营收 756 亿</text>
  <text x="600" y="102" text-anchor="middle" font-size="24" font-weight="700" fill="#ffffff">+7.1%</text>
  <text x="24" y="162" font-size="12.5" fill="#5e6d65">含病例复杂度与 Medicaid 补充（55→62 亿）</text>
</svg>
</div>
<figcaption>点击切换创新药、手术机器人与医院视角。数据来自 JNJ、ISRG（含 da Vinci 与 Ion 双平台）与 HCA 2025 Form 10-K。</figcaption>
</figure>

<span data-text-versions id="nb-d02-healthcare-text-1">拆这三张账单时，每一类都有一个隐蔽的口径边界<span data-text-detail>（JNJ 创新药增速背后是 STELARA 失专利大跌 41.3% 与 DARZALEX 等新药高增的对冲；ISRG 医院会先消耗已有器械库存再按寿命补货，且器械收入覆盖 da Vinci 与 Ion 双平台，因此不能把器械增速 19% 减 da Vinci 手术增速 18% 读成 1% 提价；HCA 的折合住院人次按住院与门诊毛收入比例折算，不是去重患者人数，其同机构增速 6.6% 也与集团 7.1% 不同）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

对医院而言，单次收入上升 4.0% 并不等于医院普涨了诊费——高复杂手术占比提升、商业保险患者比例走高，以及 Medicaid 州定向补充支付从 55 亿增至 62 亿美元，都会一起抬高单次均价。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d02-finance">

## 银行、支付与保险：规模与收费 {#nb-d02-finance-story}

比较金融业务的收入增长，第一步是沿着前篇[资金规模与收入对照图](/zh/notebook/customers-products-pricing/#nb-d01-finance-flow)的边界，把**表内本金／支付流水／签单保费**同**损益表确认收入**的转换时间差对齐。2025 年三家龙头的真实转换桥摆在一起，就能看出为什么不能拿规模增速直接预测当季收入。[^jpm]<sup>，</sup>[^visa]<sup>，</sup>[^chubb]

<figure class="flow-figure" id="nb-d02-fin-revenue" data-ff-views>
<div class="ff-head"><p class="ff-title">金融业收入增长：规模基数怎样落进损益表（2025）</p><div class="ff-switch" role="group" aria-label="切换金融样本" hidden><button type="button" data-ff-view-choice="jpm" aria-pressed="true">银行 · JPM</button><button type="button" data-ff-view-choice="v" aria-pressed="false">支付 · Visa</button><button type="button" data-ff-view-choice="cb" aria-pressed="false">财险 · Chubb</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="jpm" aria-label="JPM 2025 净利息收入逆势增长桥：利息收入同比微降 5.9 亿美元，但存款与融资利息支出大降 34.5 亿美元，两相抵消后净利息收入反增 28.6 亿美元至 954.4 亿美元（+3.1%）。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">JPM 2025：息差净额反增 +28.6 亿</text>
  <line x1="250" y1="54" x2="250" y2="172" stroke="#b7c3b9" stroke-width="1.4"/>
  <text x="24" y="82" font-size="13.5" font-weight="700" fill="#b5483a">利息收入变动</text>
  <rect x="208" y="64" width="42" height="24" rx="4" fill="#b5483a"/>
  <text x="264" y="82" font-size="13.5" font-weight="700" fill="#b5483a">−5.9 亿（1,939 → 1,933）</text>
  <text x="24" y="122" font-size="13.5" font-weight="700" fill="#23695a">利息支出节省</text>
  <rect x="250" y="104" width="242" height="24" rx="4" fill="#6b9f8c"/>
  <text x="506" y="122" font-size="13.5" font-weight="700" fill="#23695a">+34.5 亿（1,014 → 979）</text>
  <text x="24" y="162" font-size="13.5" font-weight="700" fill="#23695a">净利息收入 NII</text>
  <rect x="250" y="144" width="200" height="24" rx="4" fill="#23695a"/>
  <text x="464" y="162" font-size="13.5" font-weight="700" fill="#23695a">+28.6 亿（954.4 亿 · +3.1%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="v" hidden aria-label="Visa FY2025 增速对照：名义支付额 +7%（滞后一季计服务费 +9%），处理笔数 +10%（同期计处理费 +13%），客户激励跳升 +14%（157.5 亿），净收入增 11% 至 400.0 亿美元。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="30" font-size="14" font-weight="700" fill="#22392f">Visa FY25：激励（+14%）跑赢净收入</text>
  <text x="24" y="70" font-size="13" fill="#3c4c44">支付额（滞后一季）</text>
  <rect x="178" y="54" width="168" height="20" rx="4" fill="#9fb2a8"/>
  <text x="360" y="70" font-size="13" font-weight="700" fill="#22392f">+7% → 服务费 +9%</text>
  <text x="24" y="106" font-size="13" fill="#3c4c44">处理笔数（同期）</text>
  <rect x="178" y="90" width="240" height="20" rx="4" fill="#6b9f8c"/>
  <text x="432" y="106" font-size="13" font-weight="700" fill="#22392f">+10% → 处理费 +13%</text>
  <text x="24" y="142" font-size="13" font-weight="700" fill="#b5483a">扣：客户激励</text>
  <rect x="178" y="126" width="336" height="20" rx="4" fill="#b5483a"/>
  <text x="528" y="142" font-size="13.5" font-weight="700" fill="#b5483a">+14%（157.5 亿）</text>
  <text x="24" y="178" font-size="13.5" font-weight="700" fill="#8f6033">网络净收入</text>
  <rect x="178" y="162" width="264" height="20" rx="4" fill="#a8743f"/>
  <text x="456" y="178" font-size="13.5" font-weight="700" fill="#8f6033">+11%（400.0 亿美元）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="cb" hidden aria-label="Chubb 2025 财险签单到已赚分摊示意：全年财险净签单保费 +5.4%（475.6 亿），净已赚保费 +5.1%；一张 10 月生效的 1,200 美元年单，当年仅确认 3/12 即 300 美元，余下 900 美元滞后到次年确认。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">Chubb：10 月签下的 1,200 年单</text>
  <rect x="24" y="56" width="168" height="44" rx="6" fill="#23695a"/>
  <rect x="196" y="56" width="500" height="44" rx="6" fill="#e5efe9" stroke="#23695a" stroke-dasharray="4 3"/>
  <text x="108" y="83" text-anchor="middle" font-size="13.5" font-weight="700" fill="#ffffff">当年确认 300</text>
  <text x="446" y="83" text-anchor="middle" font-size="14" font-weight="700" fill="#23695a">次年确认 900（未赚保费 9/12）</text>
  <text x="24" y="138" font-size="13" fill="#3c4c44">2025 财险：净签单 +5.4% → 净已赚 +5.1%</text>
  <text x="24" y="160" font-size="12" fill="#5e6d65">涨价须滞后四个季度才完全落进损益表</text>
</svg>
</div>
<figcaption>点击切换银行、支付与财险视角。数据来自 JPM 2025 年报、V FY2025 10-K 与 CB 2025 年报及全年业绩公告。</figcaption>
</figure>

三类金融账单里各藏着一个反直觉机制：银行在利率下行阶段，即便利息收入微降，只要存款与批发融资成本降得更快，净利息收入照样增长；支付网络的服务费按**上一季度**名义支付额计费，且大客户谈判拉高了客户激励（+14% 跑赢净收入 +11%），研究费率弹性时必须盯着激励占毛收入的比例；财险则因签单保费要沿 12 个月保障期逐月赚取，涨价周期里已赚保费往往滞后于签单增速。想进一步深挖保险浮存金、准备金释放与综合成本率拆解，可直接进入专题[《保险业：浮存金、综合成本率与准备金》](/zh/notebook/industry-insurance-float/#nb-n08-combined-ratio)。

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d02-energy">

## 能源与原材料：销量、售价与服务 {#nb-d02-energy-story}

能源板块的收入增长常出现两极画面：上游资源商辛辛苦苦把产量拉高，只要油价掉头向下，报表收入照样缩水；中游管网即便客户输送量翻倍，账单也未必跟着翻倍。结合前篇[三条能源盈利曲线](/zh/notebook/customers-products-pricing/#nb-d01-energy-flow)，把 XOM 2025 年报与 KMI 旗下管输协议并列，原因一目了然。[^xom]<sup>，</sup>[^xom-10k]<sup>，</sup>[^kmi]<sup>，</sup>[^wic]

<figure class="flow-figure" id="nb-d02-energy-bridge" data-ff-views>
<div class="ff-head"><p class="ff-title">能源与原材料：油价弹性（XOM）vs 固定预留费托底（KMI WIC）</p><div class="ff-switch" role="group" aria-label="切换能源视角" hidden><button type="button" data-ff-view-choice="xom" aria-pressed="true">XOM 量增价跌</button><button type="button" data-ff-view-choice="kmi" aria-pressed="false">KMI 管输费率</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="xom" aria-label="XOM 2025 合并量价背离：原油日产量增 7.2%（1,858 升至 1,992 千桶每日，含 Pioneer 全年并表），但自产原油销售均价跌 14.3%（76.57 降至 65.64 美元每桶），合并销售收入由 3,392 亿降至 3,239 亿美元（−4.5%）。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="32" font-size="14" font-weight="700" fill="#22392f">XOM 2025：产量上升盖不住油价走弱</text>
  <line x1="360" y1="50" x2="360" y2="170" stroke="#b7c3b9" stroke-width="1.4"/>
  <text x="24" y="78" font-size="13.5" font-weight="700" fill="#23695a">原油日产量</text>
  <rect x="360" y="60" width="108" height="24" rx="4" fill="#23695a"/>
  <text x="480" y="78" font-size="13.5" font-weight="700" fill="#23695a">+7.2%（含 Pioneer）</text>
  <text x="24" y="120" font-size="13.5" font-weight="700" fill="#b5483a">原油销售均价</text>
  <rect x="146" y="102" width="214" height="24" rx="4" fill="#b5483a"/>
  <text x="374" y="120" font-size="13.5" font-weight="700" fill="#b5483a">−14.3%（76.6 → 65.6）</text>
  <text x="24" y="160" font-size="13.5" font-weight="700" fill="#22392f">合并营业收入</text>
  <rect x="292" y="142" width="68" height="24" rx="4" fill="#8f6033"/>
  <text x="374" y="160" font-size="13.5" font-weight="700" fill="#8f6033">−4.5%（3,392 → 3,239 亿）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="kmi" hidden aria-label="KMI 旗下 WIC 管输协议在同月同容量下用量翻倍对比：日输 1 万 Dth 时月账单为固定预留费 2.57 万加追加费 3.38 万合计 5.94 万美元；日输翻倍至 2 万 Dth 时预留费仍为 2.57 万，追加费翻倍至 6.75 万，合计 9.32 万美元，仅增 56.8%。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">WIC 协议：输量翻倍，账单仅 +56.8%</text>
  <text x="24" y="84" font-size="13.5" font-weight="700" fill="#22392f">日输 1 万 Dth</text>
  <rect x="150" y="64" width="118" height="28" rx="4" fill="#23695a"/>
  <rect x="272" y="64" width="155" height="28" rx="4" fill="#a8743f"/>
  <text x="209" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">预留 2.57 万</text>
  <text x="349" y="83" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">追加 3.38 万</text>
  <text x="440" y="83" font-size="13.5" font-weight="700" fill="#22392f">5.94 万</text>
  <text x="24" y="138" font-size="13.5" font-weight="700" fill="#23695a">日输 2 万（翻倍）</text>
  <rect x="150" y="118" width="118" height="28" rx="4" fill="#23695a"/>
  <rect x="272" y="118" width="310" height="28" rx="4" fill="#a8743f"/>
  <text x="209" y="137" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">预留 2.57 万</text>
  <text x="427" y="137" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">追加 6.75 万（翻倍）</text>
  <text x="596" y="137" font-size="13.5" font-weight="700" fill="#23695a">9.32 万</text>
</svg>
</div>
<figcaption>点击切换 XOM 与 KMI 视角。XOM 同年消除分部间内部转移 1,210 亿美元；WIC 情景固定 28,150 Dth/d 容量、30 日服务月（不含商品费与燃料损耗）。数据来自 XOM 2025 10-K 与 WIC 监管申报。</figcaption>
</figure>

读一体化油企如 XOM 时，还要提防两道口径关：一是**并购并表**（Pioneer 于 2024 年 5 月才并入，2025 年是首个完整年度，产量 +7.2% 并非纯有机增长）；二是**内部转移消除**（2025 年集团上游供货给下游炼厂消除了 1,210 亿美元分部间收入，不能把各分部收入简单相加）。换到 KMI 这类管输合同，固定预留费垫起了稳健底盘，判断增长时应重点跟踪新管道投产、预订容量扩展与长约到期续签费率，而不是拿国际油价涨跌幅去套。

</section>

## 增长的期间与比较口径 {#nb-d02-comparison}

不论落到哪个行业，比较增速前都要先把**期间、合并范围与币种**对齐。季节性强的生意要看同比而非环比；刚做完收购或剥离资产的公司，报表增速会被合并范围扭曲；跨国企业还要剥离汇率换算波动。

回到开篇 KO 2025 年第二季度的案例：报表净营收仅增 1%，剔除 −3% 汇率拖累及结构变动后的**有机收入**实为 +5%，其中价格与组合（`price/mix`）贡献 +6%，浓缩液与标准箱销量双双小幅回落 −1%。[^ko-growth]

<figure><img src="/notebook/revenue-growth/ko-growth.svg?v=20261126" alt="KO 2025年第二季度报告净营收增长1%、有机收入增长5%、price/mix增长6%，浓缩液销量和标准箱销量均下降1%；不同指标分别比较。" loading="lazy"><figcaption>KO 2025 年第二季度。报表收入、有机收入及量价指标按各自定义列示；横向比较方向与幅度。</figcaption></figure>

<span data-text-versions id="nb-d02-comparison-text-1">这一季的增长主要由价格与组合推高，汇率换算拉低了报表表象<span data-text-detail>（公司将汇率影响列为 −3%；price/mix 包含提价、包装、渠道与地区结构，不可全部归为提价；各项披露值经过取整，未必严格相加）</span>。判断这类有机增长能不能延续，仍须回查终端动销与补货节奏，不能直接线性外推。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除了同比与汇率，**签约、消耗与确认收入的时间错位**同样关键。拿 SNOW 的容量合同来说，客户签字承诺的多年采购额先进入剩余履约义务（RPO），后续随实际消耗才逐季确认成产品收入。[^snow]

<figure class="flow-figure" id="nb-d02-rpo-flow">
<div class="ff-head"><p class="ff-title">合同签约、实际消耗与报表收入如何错开（SNOW Q2 FY2026）</p><span class="ff-sub">RPO 反映账外待履约池，实际落进哪一季由客户消耗速度决定</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="SNOW 容量合同三阶段转化：客户签署多年期容量合同进入 RPO 池（69.3 亿美元，+33%），再随平台计算与存储消耗节奏，逐季确认成产品收入（Q2 FY2026 确认 1,090.5 M 美元，+32%）。">
<svg viewBox="0 0 720 165" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d02-rpo-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="28" width="196" height="106" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">1. 签约入 RPO 池</text>
  <text x="118" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">69.3 亿美元</text>
  <text x="118" y="114" text-anchor="middle" font-size="12" fill="#5e6d65">同比 +33% · 未入损益</text>
  <line x1="216" y1="81" x2="256" y2="81" stroke="#23695a" stroke-width="2" marker-end="url(#d02-rpo-s)"/>
  <rect x="262" y="28" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="360" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">2. 平台实际消耗</text>
  <text x="360" y="90" text-anchor="middle" font-size="15.5" font-weight="700" fill="#22392f">计算 ＋ 存储</text>
  <text x="360" y="114" text-anchor="middle" font-size="12" fill="#5e6d65">新任务加速 · 优化放慢</text>
  <line x1="458" y1="81" x2="498" y2="81" stroke="#23695a" stroke-width="2" marker-end="url(#d02-rpo-s)"/>
  <rect x="504" y="28" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="58" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">3. 当季确认收入</text>
  <text x="602" y="90" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">1,090.5 M</text>
  <text x="602" y="114" text-anchor="middle" font-size="12" fill="#d7e8df">同比 +32% · 占收 95%</text>
</svg>
</div>
<figcaption>数据来自 SNOW Q2 FY2026 Form 10-Q（截至 2025-07-31）。RPO 含尚未开票的未来履约义务，不等同于已到账现金。</figcaption>
</figure>

<span data-text-versions id="nb-d02-timing-text-1">看 RPO 高增时，必须同时跟踪客户消耗速度，辨认积压合同是在加速转化还是停留在纸面承诺<span data-text-detail>（RPO 包含递延收入和未来才开票的不可取消合同额，不能等同于已收现；无最低承诺的按需用量以及超出已有承诺的未来扩用，也未必反映在当前 RPO 中）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 增长预期与事件报价 {#nb-d02-expectations}

拆清公司真实的增长驱动后，下一步是把自己的判断拿去跟市场预期对表。公司指引与券商一致预期通常给一个宽泛区间；Prediction Market（预测市场）则直接把问题钉成一道是非题——单季某板块收入是否严格超过门槛——到期判 YES 付 1 美元、否则付 0，事前成交价于是标出了市场的过线把握。[^pm]

以 Marvell（MRVL）FY2027 第一季度（截至 2026 年 5 月 2 日）数据中心收入为例。Polymarket 上线了“严格超过 18.5 亿美元”与“严格超过 19 亿美元”两道门槛合约，对照上年同季基期 14.406 亿美元，分别要求同比增速超过约 28.4% 与 31.9%。[^pm]<sup>，</sup>[^mrvl-base]

<figure class="flow-figure g4-pm-thresholds" id="nb-d02-pm-thresholds">
<div class="ff-head"><p class="ff-title">MRVL FY2027 Q1 数据中心收入门槛与事前过线把握</p><span class="ff-sub">2026-05-26 财报前一日同一时刻 YES 历史价格</span></div>
<div class="business-exchange" aria-label="MRVL FY2027 第一季度数据中心收入两项 Polymarket 门槛合约对照：上年同季基期收入为 14.406 亿美元。门槛一为严格超过 18.5 亿美元，对应同比增长边界约 28.4%，5 月 26 日 YES 历史价格为 0.395 美元（对应约 39.5% 过线把握）；门槛二为严格超过 19 亿美元，对应同比增长边界约 31.9%，5 月 26 日 YES 历史价格为 0.185 美元（对应约 18.5% 过线把握）。两张合约为可同时成立的门槛事件，非互斥区间。">
<p class="g4-pm-section">收入门槛相对上年同季基期的位置（亿美元）</p>
<div class="g4-pm-ruler">
<div class="g4-pm-rail">
<i class="g4-pm-span" style="--from:7.38%;--w:74.44%;--c:#b7d2c5"></i>
<i class="g4-pm-span" style="--from:81.82%;--w:9.09%;--c:#e5c7a7"></i>
</div>
<span class="g4-pm-tick" style="--x:7.38%;--c:#7a8780"></span>
<span class="g4-pm-lab g4-pm-lab-base" style="--x:7.38%">基期 14.406 亿</span>
<span class="g4-pm-tick" style="--x:81.82%;--c:var(--ff-share)"></span>
<span class="g4-pm-lab g4-pm-lab-top" style="--x:81.82%">门槛一 <strong>&gt; 18.5 亿</strong>（+28.4%）</span>
<span class="g4-pm-tick" style="--x:90.91%;--c:var(--ff-cash)"></span>
<span class="g4-pm-lab g4-pm-lab-bot" style="--x:90.91%">门槛二 <strong>&gt; 19.0 亿</strong>（+31.9%）</span>
</div>
<p class="g4-pm-section">5 月 26 日 YES 历史价格对应的过线把握（0%—100%）</p>
<div class="g4-pm-bars">
<div class="g4-pm-name"><strong>严格超过 18.5 亿美元</strong><small>对应同比边界约 +28.4%</small></div>
<div class="g4-pm-track"><i style="--w:39.5%;--c:var(--ff-share)"></i></div>
<div class="g4-pm-val"><strong>0.395 美元</strong>（39.5%）</div>
<div class="g4-pm-name"><strong>严格超过 19 亿美元</strong><small>对应同比边界约 +31.9%</small></div>
<div class="g4-pm-track"><i style="--w:18.5%;--c:#619483"></i></div>
<div class="g4-pm-val"><strong>0.185 美元</strong>（18.5%）</div>
<div class="g4-pm-axis"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
</div>
</div>
<figcaption>门槛从 18.5 亿抬高 0.5 亿到 19 亿，YES 历史价格便从 0.395 美元落到 0.185 美元；两项事件可同时成立，并非互斥区间。</figcaption>
</figure>

<span data-text-versions id="nb-d02-pm-text-1">这两组价格取自财报前一日同一时刻的历史成交序列，直观标出了门槛每抬高 0.5 亿美元时市场过线把握的衰减<span data-text-detail>（观察时点为 2026-05-26 16:00:04 UTC 官方历史序列，未还原当时盘口买卖价差与深度，不视作可即时成交价；两道门槛可同时成立，并非互斥区间；结算按官方原始金额判定）</span>。[^pm-history]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure><img src="/notebook/revenue-growth/mrvl-expectations.svg?v=20261126" alt="2026年3月5日MRVL给出公司展望，5月26日记录数据中心收入门槛的预测市场事前价格，5月27日报告实际收入18.327亿美元，两项门槛均未超过。" loading="lazy"><figcaption>先留档事前指引与事件报价，再与财报公布后的同口径实数对照。</figcaption></figure>

5 月 27 日财报落地，MRVL 数据中心收入录得 18.327 亿美元（同比 +27.2%），距 18.5 亿仅差 0.173 亿美元，两张合约双双结为 NO。[^mrvl]27% 以上的增速本身并不慢，但在交易层面依然落在事前门槛之下。回看 3 月 5 日公司展望时，更要守住口径边界：管理层提到的约 40% 增速针对的是 FY2027 **全年**数据中心收入，24 亿美元（±5%）则是下一季**全公司**指引，哪一个都不能直接套用单季数据中心门槛。<span data-text-versions id="nb-d02-pm-text-2">实操复核还要把并购并表范围拆清楚<span data-text-detail>（本期指引与实际收入均已自收购日起并入 Celestial AI 与 XConn 两笔交易，此处同比为报告口径，尚未剥离并购贡献）</span>。[^mrvl-outlook]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 股价对应的增长要求 {#nb-d02-price-in}

事件合约只锁住一个季度；买股票时，更实用的做法是把眼前的股价倒推回收入要求，看看市场究竟在押注一份怎样的经营成绩单。设股价为 \(P\)、目标年度净利率为 \(m\)、股数为 \(N\)、市场愿意给出的前瞻市盈率为 \(M\)，由 \(\mathrm{EPS}=mR/N\) 可直接反推出所需每股收益与所需收入：

\[
\mathrm{EPS}_{\mathrm{要求}}=\frac{P}{M},\qquad
R_{\mathrm{要求}}=\frac{PN}{Mm}.
\]

这里换回 KO 全年数据演示。按公司调整后的可比口径，2025 全年净营收 480.62 亿美元、归属股东净利润 129.58 亿美元（净利率约 27.0%）、稀释加权平均股数 43.13 亿股。[^ko-base]借用 DBS 研报采用的 26 倍前瞻 PE 并将其明确限定在 2026 全年可比盈利上，就能沿四步反推出所需的收入底线：[^dbs]

<figure class="flow-figure step-chain sc-4" id="nb-d02-reverse-chain">
<div class="ff-head"><p class="ff-title">从 KO 的股价反推 2026 年的收入要求</p><span class="ff-sub">可比口径，美元</span></div>
<div class="sc-track">
<div class="sc-node"><strong>78.76</strong><small>股价，2026 年 4 月 30 日收盘</small></div>
<div class="sc-link business-exchange" aria-label="股价 78.76 美元除以借用自 DBS 报告的 26 倍前瞻 PE，得到 2026 年所需的每股收益约 3.03 美元。"><span>÷ 26 倍 PE</span><span>借用 DBS 的倍数</span></div>
<div class="sc-node"><strong>3.03</strong><small>2026 年所需每股收益</small></div>
<div class="sc-link business-exchange" aria-label="每股收益乘以 43.13 亿股稀释加权平均股数，假设股数保持 2025 年水平，所需归属股东净利润约 130.7 亿美元。"><span>× 43.13 亿股</span><span>假设保持 2025 年</span></div>
<div class="sc-node"><strong>130.7 亿</strong><small>所需净利润</small></div>
<div class="sc-link business-exchange" aria-label="所需净利润除以约 27.0% 的净利率，假设保持 2025 年的比率，所需可比净营收约 484.6 亿美元。"><span>÷ 27.0%</span><span>净利率，假设保持</span></div>
<div class="sc-node sc-focus"><strong>484.6 亿</strong><small>所需净营收</small></div>
</div>
<p class="ff-aside business-exchange" aria-label="2025 年同口径净营收为 480.62 亿美元，所需净营收约 484.6 亿美元，需要增长约 0.8%。"><strong>与 2025 年的 480.62 亿美元相比</strong>：需要增长约 0.8%。</p>
<figcaption>净利率按 2025 年可比口径计算：129.58 ÷ 480.62 ≈ 27.0%。股价为实际收盘价，PE、股数与净利率均为本篇设定的条件。</figcaption>
</figure>

<span data-text-versions id="nb-d02-price-text-1">只需改变 PE、净利率或股数中的任意一项条件，反推出来的收入增长要求就会大幅移动<span data-text-detail>（DBS 报告未在该处完整界定其 forward PE 的盈利期间，本篇限定为 2026 全年可比口径，不用于复刻报告目标价；计算采用 129.58 ÷ 480.62 的精确净利率，股数维持 2025 年稀释加权平均股数）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>在下方推演器里拖动滑块就能切身体会：单凭一个 78.76 美元的股价，解不出增长率、利润率与估值倍数三个未知数。

<div data-experiment-slot="nb-d02-price-lab"></div>

固定净利率与股数、只把 PE 从 26 倍压到 22 倍，KO 需要增长约 19.2% 才能托住当前股价；若市场给到 30 倍，哪怕收入回落约 12.6% 也能站稳。反推的价值不在于猜出唯一市场共识，而在于把不同估值假设对应的经营成绩单摊到桌面上，交给前面拆过的销量、净价、渠道与留存证据逐条检验。

## 从增长到盈利 {#nb-d02-next}

MRVL 提醒我们高增长不等于跑赢预期门槛，KO 反推又把增长要求绑到了净利率与股数之上。要检验账面确认的收入最终有没有变成利润与到账现金，必须打通公司的整套会计账本。下一篇[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)就沿同一段经营过程贯通利润表、资产负债表与现金流量表，补齐分析营运资本、资本开支与成本结构的底座。

<link rel="stylesheet" href="/notebook/business-branches.css?v=20261128">
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261128">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

[^ko-growth]: [The Coca-Cola Company — Second Quarter 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf)。PDF p1、p3、p5、p8、p15、p25；全球报表 +1%、有机 +5%（price/mix +6%、浓缩液 −1%、标准箱 −1%），亚太标准箱 −3% 与浓缩液 −5%。
[^nke]: [NIKE FY2025 Form 10-K — Consolidated Operating Results](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm)。财年截至 2025-05-31；批发 277.6→258.8 亿（−7%／剔汇率 −6%）、NIKE Direct 215.2→187.8 亿（−13%／剔汇率 −12%，数字 −20%）、鞋类销量 −8% 及均价拖累约 3 pct。
[^wmt]: [Walmart FY2025 Form 10-K — Walmart U.S. Results and Membership](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm)。财年截至 2025-01-31；Walmart U.S. 净销售 4,418→4,624 亿（+4.7%）、可比销售 +4.8% 与全集团纯会员费 31→38 亿美元。
[^snow]: [Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf)。PDF p16–17、p45、p47、p53；产品收入 829.3→1,090.5 M 美元（+32%）、NRR 125%、RPO 52.3→69.3 亿（+33%）及年消超 100 万美元大客户 504→654 家。
[^msft-fy26]: [Microsoft FY2026 Form 10-K — Segment Results](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)。财年截至 2026-06-30；M365 商业云 +17%（席位 +6% 及 E5/Copilot 推升单价）、Azure 及其他云 +41%。
[^alphabet]: [Alphabet 2025 Form 10-K — Revenues and Monetization Metrics](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。年度截至 2025-12-31；Search & other 1,980.8→2,245.3 亿（+13.4%，付费点击 +6%、CPC +7%）、YouTube +11.7%、Network −1.9%。
[^amzn-fy25]: [Amazon.com, Inc. FY2025 Form 10-K — Note 10 Net Sales by Group](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm)。年度截至 2025-12-31；3P 第三方卖家服务 1,561→1,722 亿美元（+10.3%）、广告服务 686 亿（+22.1%）。
[^bkng]: [Booking Holdings 2025 Form 10-K — Gross Bookings, Revenues and Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm)。年度截至 2025-12-31；总预订 +12.4%、收入 +13.4%、营销费用 +12.5%（占收比 30.4%）。
[^asml-20f]: [ASML Holding N.V. FY2025 Form 20-F & Annual Report Note 2](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm)。年度截至 2025-12-31；净系统销售 217.7→244.7 亿欧元（+12.4%）、表内系统数 583→535 台（NXE 42→44 台、EXE 2→4 台、KrF 152→78 台）及装机升级服务 64.9→81.9 亿欧元（+26.2%）。
[^nvda]: [NVIDIA FY2026 Form 10-K — Revenue by End Market](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)。财年截至 2026-01-25；数据中心 1,152→1,937 亿美元（+68%，其中 Compute +59% 至 1,624 亿、Networking +142% 至 314 亿）。
[^mrvl]: [Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm)。截至 2026-05-02；总收入 24.18 亿（+28%），数据中心 18.327 亿（占 76%，同比 +27.2%），含 Celestial AI 与 XConn 收购。
[^otis]: [Otis Worldwide 2025 Form 10-K — Segment Results & Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm)。年度截至 2025-12-31；新设备 53.7→49.9 亿（有机 −7%）、维护维修 72.1→75.8 亿（有机 +4%）、改造 16.8→18.6 亿（有机 +9%）及在保梯约 250 万台。
[^otis-call]: [Otis Reports FY2025 Results & Q4 2025 Earnings Call Transcript](https://s203.q4cdn.com/227649559/files/doc_financials/2025/q4/4Q25-Otis-Worldwide-Corp-Earnings-Call-Transcript.pdf)。2026-01-28；全年新设备订单持平、年末 Backlog 固定汇率 +2%（实际 +6%）、服务组合 +4% 主靠新梯转入及美国 Q4 执行延至 Q1 说明。
[^jnj]: [Johnson & Johnson 2025 Form 10-K — Innovative Medicine Product Sales](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm)。财年截至 2025-12-28；STELARA 103.6→60.8 亿（−41.3%）、DARZALEX 116.7→143.5 亿（+23.0%）、TREMFYA 36.7→51.6 亿（+40.5%）、CARVYKTI 9.6→18.9 亿（+95.9%）。
[^isrg]: [Intuitive Surgical FY2025 Form 10-K — Revenue & Procedures](https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm)。年度截至 2025-12-31；总收入 83.5→100.6 亿（+20.5%），系统 +26%、器械附件 +19%、服务 +20%；da Vinci 手术超 310 万例（+18%）、Ion 操作量 +51%。
[^hca]: [HCA Healthcare 2025 Annual Report & Form 10-K](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf)。2025 年度；集团营收 706.0→756.0 亿（+7.1%）、折合住院人次 399→411 万（+2.9%）、单次收入 +4.0% 及 Medicaid 州补充支付 55→62 亿美元。
[^jpm]: [JPMorgan Chase 2025 Annual Report & Form 10-K](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)。2025 年度；集团 GAAP 利息收入 1,939.3→1,933.4 亿、利息支出 1,013.5→979.0 亿、净利息收入 925.8→954.4 亿美元（+3.1%）。
[^visa]: [Visa FY2025 Form 10-K — Operating Metrics & Revenue Disaggregation](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm)。财年截至 2025-09-30；名义支付额 12.99→13.89 万亿（截至 6 月末，+7%）、处理笔数 2,338→2,575 亿笔（+10%）、服务费 175.4 亿（+9%）、处理费 199.9 亿（+13%）、客户激励 157.5 亿（+14%）及净收入 400.0 亿美元（+11%）。
[^chubb]: [Chubb Limited Annual Report 2025 & FY2025 Results Release](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf)。2025 年度；财险净签单保费 451.4→475.6 亿（+5.4%）、2026-02-03 全年业绩公告财险净已赚保费 +5.1% 及 Note 1 保费分摊确认政策。
[^xom]: [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions)。上游开采、下游炼化与化工业务划分。
[^xom-10k]: [Exxon Mobil Corporation FY2025 Form 10-K — Production, Realizations & Note 3](https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm)。年度截至 2025-12-31；原油日产量 1,858→1,992 千桶/日（+7.2%）、销售均价 76.57→65.64 美元/桶（−14.3%）、合并销售及营业收入 3,392→3,239 亿及消除分部间收入 1,210 亿美元。
[^kmi]: [Kinder Morgan — Products Pipelines](https://www.kindermorgan.com/Operations/Products/Index)。Galena Park 凝析油长期收费加工协议。
[^wic]: [Wyoming Interstate Company — Black Hills Negotiated Rate Agreement Update](https://pipeline2.kindermorgan.com/Documents/WIC/RP25-1193-000_Negotiated_Rate_Agreement_Update_-_Black_Hills_2025-20250930164903.pdf)。2025-09-30 申报；28,150 Dth/d 容量月预留费率 0.9125 美元/Dth 与指定接收点追加费率 0.1125 美元/Dth。
[^pm]: [Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets](https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above)。event id 483195；门槛合约严格超过 18.5 亿与 19 亿美元。
[^mrvl-base]: [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm)。FY2026 Q1 数据中心收入 14.406 亿美元。
[^pm-history]: [Official CLOB YES price history: MRVL Q1 Data Center > 1.85B / 1.9B](https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60)。2026-05-26 16:00:04 UTC 历史序列 YES 价格 0.395 与 0.185 美元。
[^mrvl-outlook]: [Marvell FY26 and Q4 FY26 Financial and Business Results](https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf)。PDF pp6,13,15–16；FY2027 全年数据中心约 40% 增长展望与 Q1 全公司 24 亿（±5%）指引。
[^ko-base]: [The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf)。2025 全年可比净营收 480.62 亿、归属股东可比净利 129.58 亿、稀释加权平均股数 43.13 亿股。
[^dbs]: [DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke](https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf)。2026-05-04 研报；2026-04-30 收盘价 78.76 美元与 26 倍前瞻 PE 参照。
