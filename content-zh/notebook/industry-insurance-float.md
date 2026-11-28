{
  "title": "保险业：浮存金、综合成本率与准备金",
  "description": "以 BRK、CB 与 PGR 2025 年报实数拆解保险业原生机制：浮存金负成本杠杆、综合成本率与 CAY ex-Cat、短尾与长尾准备金开发周期，以及为何保险估值锚定 P/B 与 ROE。",
  "layout": "entry",
  "notebookid": "zh-industry-insurance-float",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-industry-insurance-float"
}

普通企业借钱扩张要付利息，到期还得还本；保险公司却能先从成千上万名投保人手里收进保费，把钱拿去买国债、公司债或股票生息，等到日后出险再赔付。Berkshire Hathaway（BRK.A／BRK.B）在 2025 年末手里握着约 **1,760 亿美元**保险浮存金，当年不但一分钱利息没付，还从承保端净赚 94.6 亿美元税前利润，再叠加 125.1 亿美元税后保险投资收益。[^brk]

前序主线[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/#nb-d01-finance-flow)和[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/#nb-d02-fin-revenue)已经立住了保险账本的底线：签单保费要随保障期分摊确认，收进来的钱同时挂着巨额未来赔付负债。作为独立行业深潜专题，本篇拆解保险业独有的四套核心机制：**浮存金成本、综合成本率拆解、长短尾准备金周期，以及为何保险估值要盯 `P/B` 与 `ROE`**。

## 浮存金：先收钱的循环负债池 {#nb-n08-float}

保险业常说的**浮存金（Float）**，既属于负债而不属于股东自有资本，又因为老保单赔付的同时源源不断有新保单续费进账，在稳健经营的险企账上呈现出类似“循环永续资金池”的特征。按照 BRK 2025 年报的定义，浮存金主体由**未付赔款及理赔费用准备金**、**未赚保费**与寿险／年金给付负债构成，再减去应收保费、应收再保险赔款及递延保单获取成本（DAC）。[^brk]

<figure class="flow-figure" id="nb-n08-float-cycle">
<div class="ff-head"><p class="ff-title">保险双引擎闭环：先收保费沉淀浮存金，承保决定资金成本（BRK 2025）</p><span class="ff-sub">承保盈利 94.6 亿 ÷ 平均浮存金 1,735 亿 ≈ 负 5.5% 资金成本</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="BRK 2025 保险双引擎闭环：投保人预缴保费沉淀为 1,760 亿美元浮存金池，一端产生 94.6 亿美元税前承保盈利（税后 72.6 亿），使浮存金成本约为 −5.5%，另一端投入资产组合产生 125.1 亿美元税后投资收益。">
<svg viewBox="0 0 720 205" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="n08-m-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
    <marker id="n08-m-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
  </defs>
  <rect x="20" y="54" width="152" height="96" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="96" y="88" text-anchor="middle" font-size="13.5" font-weight="700" fill="#22392f">投保人预缴</text>
  <text x="96" y="116" text-anchor="middle" font-size="12.5" fill="#5e6d65">先收保费、后赔付</text>
  <line x1="172" y1="102" x2="212" y2="102" stroke="#23695a" stroke-width="2" marker-end="url(#n08-m-s)"/>
  <rect x="218" y="42" width="186" height="120" rx="11" fill="#f3f8f4" stroke="#23695a" stroke-width="1.6"/>
  <text x="311" y="74" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">浮存金负债池</text>
  <text x="311" y="108" text-anchor="middle" font-size="22" font-weight="700" fill="#22392f">1,760 亿美元</text>
  <text x="311" y="136" text-anchor="middle" font-size="12" fill="#5e6d65">未付赔款＋未赚保费</text>
  <path d="M404 78 L458 56" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#n08-m-s)"/>
  <path d="M404 126 L458 148" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#n08-m-a)"/>
  <rect x="466" y="20" width="234" height="72" rx="10" fill="#23695a"/>
  <text x="583" y="48" text-anchor="middle" font-size="13" fill="#e5efe9">承保利润（成本 −5.5%）</text>
  <text x="583" y="75" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">税前 94.6 亿美元</text>
  <rect x="466" y="112" width="234" height="72" rx="10" fill="#a8743f"/>
  <text x="583" y="140" text-anchor="middle" font-size="13" fill="#f9efe3">保险投资收益</text>
  <text x="583" y="167" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">税后 125.1 亿美元</text>
</svg>
</div>
<figcaption>数据来自 BRK FY2025 Form 10-K（K-35、K-40）。平均浮存金取 2024 年末 1,710 亿与 2025 年末 1,760 亿均值 1,735 亿美元；一旦综合成本率突破 100%，浮存金成本即转正。</figcaption>
</figure>

看懂浮存金，千万不要把它误解成“白捡的无风险杠杆”。这笔钱到底便不便宜、安不安全，完全取决于**承保结果**与**留存稳定性**两条底线。<span data-text-versions id="nb-n08-float-text-1">浮存金成本由税前承保盈亏除以平均浮存金衡量；只有当综合成本率长期压在 100% 以下时，它才变成负成本资金<span data-text-detail>（以 BRK 2025 为例，税前承保盈利 94.6 亿美元除以 2024—2025 年末浮存金均值 1,735 亿美元，对应约 −5.5% 的负成本；同期 Chubb 账上未付赔款准备金 880.2 亿加未赚保费 262.8 亿支撑起 1,687 亿美元投资资产，在 85.7% 综合成本率下实现承保与投资双轮盈利。反过来，如果一家公司为冲规模乱降价、把综合成本率做到 105%，这笔浮存金就比发高收益债还贵，且随时可能因客户流失或集中理赔骤然缩水）</span>。[^cb]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 综合成本率：剥离天气运气与渠道结构 {#nb-n08-combined}

衡量一家财险公司承保端到底赚不赚钱，行业通用尺子是**综合成本率（Combined Ratio, CR）**：

\[
\text{综合成本率} = \underbrace{\frac{\text{已发生赔款及理赔费用}}{\text{已赚保费}}}_{\text{赔付率（Loss Ratio）}} + \underbrace{\frac{\text{保单获取费} + \text{行政管理费}}{\text{已赚保费}}}_{\text{费用率（Expense Ratio）}}.
\]

综合成本率低于 100% 意味着承保盈利，高于 100% 则承保亏损。不过，直接拿两家公司的总综合成本率横向比高下，很容易掉进两个坑：**渠道费用结构不同**，以及**单年巨灾与往年准备金释放的噪音**。把全球商业财险龙头 Chubb（CB）与 BRK 旗下三大承保板块摆在同一张图上，差异立刻现形。[^cb]<sup>，</sup>[^brk]

<figure class="flow-figure" id="nb-n08-combined-ratio" data-ff-views>
<div class="ff-head"><p class="ff-title">综合成本率透视镜：剥离巨灾与渠道费用结构（2025）</p><div class="ff-switch" role="group" aria-label="切换保险公司视图" hidden><button type="button" data-ff-view-choice="cb" aria-pressed="true">CB 85.7% 拆解</button><button type="button" data-ff-view-choice="brk" aria-pressed="false">BRK 渠道对照</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="cb" aria-label="Chubb 2025 财险综合成本率 85.7% 瀑布拆解：当年剔巨灾正常赔付 55.3%，加巨灾赔付 6.3%，减往年准备金有利释放 2.5%，得报告赔付率 59.1%；加保单获取与管理费用率 26.6%，合计 85.7%，距 100% 盈亏线留出 14.3% 承保利润。">
<svg viewBox="0 0 720 225" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <line x1="566" y1="22" x2="566" y2="196" stroke="#b5483a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="566" y="214" text-anchor="middle" font-size="12" font-weight="700" fill="#b5483a">100% 盈亏线</text>
  <text x="20" y="42" font-size="13" fill="#3c4c44">当年正常赔付</text>
  <rect x="166" y="26" width="221" height="22" rx="4" fill="#6b9f8c"/>
  <text x="398" y="42" font-size="13" font-weight="700" fill="#22392f">55.3%</text>
  <text x="20" y="76" font-size="13" fill="#b5483a">+ 巨灾赔付</text>
  <rect x="387" y="60" width="25" height="22" rx="3" fill="#c98878"/>
  <text x="424" y="76" font-size="13" font-weight="700" fill="#b5483a">+6.3%</text>
  <text x="20" y="110" font-size="13" fill="#23695a">− 往年释放</text>
  <rect x="402" y="94" width="10" height="22" rx="2" fill="#23695a"/>
  <text x="424" y="110" font-size="13" font-weight="700" fill="#23695a">−2.5%（保守释放）</text>
  <text x="20" y="144" font-size="13" fill="#8f6033">+ 费用率</text>
  <rect x="402" y="128" width="106" height="22" rx="3" fill="#a8743f"/>
  <text x="578" y="144" font-size="12.5" font-weight="600" fill="#8f6033">26.6%（佣金+管理）</text>
  <text x="20" y="182" font-size="13.5" font-weight="700" fill="#23695a">合计 85.7%</text>
  <rect x="166" y="164" width="343" height="24" rx="4" fill="#23695a"/>
  <rect x="509" y="164" width="57" height="24" rx="4" fill="#e5efe9" stroke="#23695a" stroke-dasharray="3 2"/>
  <text x="578" y="181" font-size="13.5" font-weight="700" fill="#23695a">赚 14.3%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="brk" hidden aria-label="BRK 2025 直销车险 GEICO 与商业直保 BH Primary 综合成本率构成对照：GEICO 赔付率 72.3% 加极低直销费用率 12.4% 合计 84.7%（税前赚 68.2 亿）；BH Primary 赔付率 66.9% 加商业经纪费用率 28.9% 合计 95.8%（税前赚 7.9 亿）。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <line x1="566" y1="22" x2="566" y2="165" stroke="#b5483a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="566" y="183" text-anchor="middle" font-size="12" font-weight="700" fill="#b5483a">100%</text>
  <rect x="166" y="16" width="14" height="12" rx="2" fill="#23695a"/>
  <text x="188" y="27" font-size="12.5" fill="#23695a">赔付率</text>
  <rect x="266" y="16" width="14" height="12" rx="2" fill="#a8743f"/>
  <text x="288" y="27" font-size="12.5" fill="#8f6033">费用率</text>
  <text x="20" y="78" font-size="13.5" font-weight="700" fill="#22392f">GEICO 直销车险</text>
  <rect x="166" y="58" width="289" height="30" rx="4" fill="#23695a"/>
  <rect x="457" y="58" width="50" height="30" rx="4" fill="#a8743f"/>
  <text x="310" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">72.3%</text>
  <text x="482" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">12.4%</text>
  <text x="578" y="78" font-size="13.5" font-weight="700" fill="#23695a">84.7%（赚 68.2 亿）</text>
  <text x="20" y="138" font-size="13.5" font-weight="700" fill="#22392f">BH Primary 商险</text>
  <rect x="166" y="118" width="268" height="30" rx="4" fill="#23695a"/>
  <rect x="436" y="118" width="115" height="30" rx="4" fill="#a8743f"/>
  <text x="300" y="138" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">66.9%</text>
  <text x="493" y="138" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">28.9%</text>
  <text x="578" y="138" font-size="13.5" font-weight="700" fill="#8f6033">95.8%（赚 7.9 亿）</text>
</svg>
</div>
<figcaption>点击切换 CB 瀑布拆解与 BRK 渠道对照。CB 当年剔巨灾核心综合成本率（CAY ex-Cat）为 81.9%。数据来自 CB 2025 年报与 BRK FY2025 10-K。</figcaption>
</figure>

切换对比 CB 与 GEICO，就能看清为什么不能单看赔付率：GEICO 走互联网与电话直销，把费用率死死压在 12.4%，即便赔付率高达 72.3%，综合成本率依然只有 84.7%；CB 承保复杂的跨国商业财产与责任险，必须支付经纪人佣金并养专业核保团队，费用率高达 26.6%，所以它把赔付率控制在 59.1% 才拿下 85.7% 的综合成本率。

同样，评估一家险企当下的真实定价能力，不能只看报告综合成本率，还要盯住 **当年剔除巨灾的综合成本率（Current Accident Year ex-Cat Combined Ratio，简称 CAY ex-Cat）**——比如 CB 2025 年为 81.9%。这一指标切掉了老天爷给不给面子（巨灾波动）和过去多提准备金留下的余粮（PPD 释放），直接暴露今年新签保单到底有没有定价纪律。

<span data-text-versions id="nb-n08-combined-text-1">至于 BRK 旗下的 BHRG 追溯再保（Retroactive Reinsurance）连年录得账面承保亏损（2025 年为 −10.7 亿美元），背后是另一套时间价值算盘<span data-text-detail>（追溯再保承接其他保险公司过去已出险、尚未结案的巨额遗留理赔责任，如石棉与环境诉讼。会计规则要求将超出初始保费的预计赔付差额记作递延借项并逐年摊销进承保亏损，BRK 2025 年该项录得 −10.7 亿美元；BRK 明确表示，只要换回的巨额长期浮存金在未来一二十年产生的投资收益远超摊销成本，这笔交易在经济上就划算。但这套逻辑仅适用于资本极厚、投资能力强且封顶限额严密的特大型再保巨头，绝不能拿来替普通直保公司的承保亏损开脱）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 准备金周期：短尾看快纠错，长尾防爆雷 {#nb-n08-reserves}

保险公司损益表里最主观、也最容易藏雷的数字，是**未付赔款及理赔费用准备金**。保单售出当年，很多事故已经发生、但客户还没报案（IBNR），或者报了案却要打几年官司才知道最终赔多少钱，公司只能靠精算模型先估一笔费用计入当年成本。

不同险种的理赔尾巴长短天差地别。以个人车险为主的短尾险（如 GEICO 及 Progressive，PGR 明确将全公司日历年综合成本率控制在 96% 及以下置于规模增长之前[^pgr]），修车账单几周到几个月就结清；一旦定价低估了配件通胀，两三个季度内赔付率就会立刻跳升，逼着公司马上向各州监管申请涨价。而商业责任险、医疗责任险与再保险这类长尾险，从承保到最终结案往往跨过五到十年，中途只要遭遇医疗通胀或美国陪审团高额判赔（行业称“社会通胀”），多年前算好的准备金就会大面积穿仓。

<figure class="flow-figure" id="nb-n08-tail-reserves">
<div class="ff-head"><p class="ff-title">短尾车险 vs 长尾责任险：理赔跨度决定准备金风险何时暴露</p><span class="ff-sub">短尾一年内结清、报错快；长尾横跨五至十年，少提准备金会延迟引爆</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="短尾与长尾赔付时间轴对比：上轨短尾车险（GEICO 与 PGR）绝大多数赔案在第 1 年内结清，定价失误迅速暴露；下轨长尾商业责任与再保（CB 账上背负 880 亿未付赔款）赔付延续至第 3 年、第 5 年乃至 10 年以上，易受通胀与诉讼推高。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <line x1="168" y1="154" x2="690" y2="154" stroke="#cbd5ce" stroke-width="1.4"/>
  <text x="196" y="176" text-anchor="middle" font-size="12" fill="#5e6d65">第 1 年</text>
  <text x="340" y="176" text-anchor="middle" font-size="12" fill="#5e6d65">第 2–3 年</text>
  <text x="500" y="176" text-anchor="middle" font-size="12" fill="#5e6d65">第 4–7 年</text>
  <text x="646" y="176" text-anchor="middle" font-size="12" fill="#5e6d65">第 8–10 年+</text>
  <text x="20" y="54" font-size="13.5" font-weight="700" fill="#23695a">短尾车险</text>
  <text x="20" y="74" font-size="12" fill="#5e6d65">GEICO ／ PGR</text>
  <rect x="168" y="38" width="144" height="32" rx="5" fill="#23695a"/>
  <rect x="316" y="38" width="38" height="32" rx="4" fill="#9bc2b0"/>
  <text x="240" y="59" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">年内绝大部分结清</text>
  <text x="368" y="59" font-size="12.5" fill="#23695a">报错快 · 迅速重定价</text>
  <text x="20" y="118" font-size="13.5" font-weight="700" fill="#b5483a">长尾责任／再保</text>
  <text x="20" y="138" font-size="12" fill="#5e6d65">CB 准备金 880 亿</text>
  <rect x="168" y="102" width="76" height="32" rx="4" fill="#a8743f"/>
  <rect x="248" y="102" width="150" height="32" rx="4" fill="#c98878"/>
  <rect x="402" y="102" width="174" height="32" rx="4" fill="#b5483a"/>
  <rect x="580" y="102" width="108" height="32" rx="4" fill="#dfb0a6"/>
  <text x="323" y="123" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">诉讼与通胀拉长尾巴</text>
  <text x="489" y="123" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">准备金补提或释放区</text>
</svg>
</div>
<figcaption>CB 2023—2025 年连续三年录得往年准备金有利释放（−1.9%、−2.0%、−2.5%）；若激进少提，则会在第 4–7 年集中补提冲击利润。</figcaption>
</figure>

正因准备金靠估算，研究长尾险企时必须追踪连续五到十年的<strong>往年准备金开发（Prior Period Development, PPD）</strong>记录：常年出现有利释放（如 CB 2023—2025 年分别释放 1.9%、2.0% 与 2.5%）通常说明初始提取留有安全垫；一旦一家成长飞快的险企连续在多个历史承保年度出现不利补提，往往意味着早年的“高增长＋低综合成本率”靠的是少提准备金透支未来。

此外，保险公司常通过购买<strong>再保险（Reinsurance）</strong>把极端飓风、地震或超额巨灾切分出去，降低单次事件击穿净资产的概率。但核对分出再保时要守住一条法律边界：再保险只分担风险与赔款补偿，**原保险人对投保人的法定赔付义务并未解除**；如果极端灾难同时拖垮了二三线再保对手，账单仍会原路弹回自己账上。

## 估值尺子：为何看 `P/B` 与 `ROE` 而非单年 `P/E` {#nb-n08-valuation}

普通消费或软件股常用市盈率（`P/E`）衡量估值，但把单年 `P/E` 套到保险股上经常失灵：一次罕见飓风会把优秀险企的当年利润腰斩，让 `P/E` 瞬间显得奇贵；反过来，风调雨顺叠加大额准备金释放与股票公允价值浮盈，又会让周期顶部的保险股看起来只有几倍 `P/E`。

专业研究因此把核心尺子移回资产负债表——盯着**每股账面净资产（BVPS）的长期复利速度**与**跨周期可持续 ROE**，再对照市净率（`P/B`）。

<figure class="flow-figure" id="nb-n08-pb-roe">
<div class="ff-head"><p class="ff-title">保险股估值路径：从承保纪律与投资杠杆落回 P/B 与 ROE（CB 2025）</p><span class="ff-sub">单年 P/E 易受巨灾与股票浮盈扰动，净资产复利与跨周期 ROE 才是硬尺子</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="保险股三步估值路径：第一步跨周期承保纪律（CB 2025 CAY 剔巨灾综合成本率 81.9%），第二步稳健投资杠杆（1,687 亿投资资产除以 738 亿股东权益约 2.29 倍），共同驱动第三步每股净资产复利与跨周期 ROE（CB 2025 BVPS 188.59 美元、剔 AOCI 201.31 美元、ROE 15.0%／核心 ROTE 20.5%）以锚定合理 P/B。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="n08-v-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">1. 跨周期承保</text>
  <text x="118" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">核心 CR 81.9%</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">看 5–10 年定价纪律</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#n08-v-s)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">2. 浮存金投资杠杆</text>
  <text x="360" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">2.29× 投资资产</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">查久期、信用与巨灾</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#n08-v-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">3. 锚定 P/B 与 ROE</text>
  <text x="602" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">ROE 15.0%</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#d7e8df">核心 ROTE 20.5% · 剔 AOCI</text>
</svg>
</div>
<figcaption>数据来自 CB 2025 Annual Report（BVPS 188.59 美元、剔 AOCI 为 201.31 美元；总投资 1,687 亿 ÷ 股东权益 738 亿 ≈ 2.29×）。</figcaption>
</figure>

<span data-text-versions id="nb-n08-val-text-1">读保险股的账面净资产时，还要额外剥离一次债券利率波动（AOCI）<span data-text-detail>（保险公司持有大量可供出售债券，市场利率上升时债券账面市值下跌，会通过其他综合收益累计额 AOCI 暂时拉低报告净资产；只要公司不必在低位被迫抛售、持有到期仍能按面值收本息，这笔账面浮亏就会随到期日临近自动回补。CB 2025 年报因此并列披露了报告 BVPS 188.59 美元与剔除 AOCI 后的 201.31 美元，同时列示剔除商誉无形资产后的有形每股净资产 126.22 美元与核心 ROTE 20.5%）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

把这三道体检关串成一条研究主线，Agent 在分析任何一家财险或再保险公司时都可以按顺序排查：先翻 5–10 年历史综合成本率与 CAY ex-Cat 判断承保文化，再查往年准备金开发三角表排雷，接着核对投资资产久期、信用评级与巨灾最大可能损失（PML），最后用跨周期 ROE 和 BVPS 复利增速去衡量眼前的 `P/B` 倍数有没有留出安全边际。

如果想把保险的资产负债表逻辑放回更广的跨行业财务框架中对照，可回到[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/#nb-d02-fin-revenue)核对金融收入确认边界，或衔接[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)继续打通现金流与资本投入分析。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261128">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

[^brk]: [Berkshire Hathaway Inc. FY2025 Form 10-K — Insurance Underwriting, Investment Income and Float](https://www.sec.gov/Archives/edgar/data/1067983/000119312526083899/brka-20251231.htm)。年度截至 2025-12-31；K-35–K-40：2025 年末浮存金约 1,760 亿（2024 年末 1,710 亿）、税前承保盈利 94.6 亿（GEICO 68.2 亿／84.7% CR、BH Primary 7.9 亿／95.8% CR、BHRG 18.5 亿含追溯再保 −10.7 亿）、税后保险投资收益 125.1 亿及浮存金定义。
[^cb]: [Chubb Limited 2025 Annual Report — Financial Highlights, Combined Ratio and Balance Sheet](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf)。2025 年度；p4、p44、p97：净签单 548.4 亿、净已赚 530.1 亿、P&C 综合成本率 85.7%（赔付 59.1%、获客 18.6%、行政 8.0%；巨灾 6.3%、PPD −2.5%、CAY ex-Cat 81.9%）、P&C 承保利润 65.0 亿、税前投资收益 64.7 亿、总投资 1,687 亿、未付赔款 880.2 亿、未赚保费 262.8 亿、股东权益 737.6 亿、BVPS 188.59（剔 AOCI 201.31）、ROE 15.0%、核心 ROTE 20.5%。
[^pgr]: [The Progressive Corporation FY2025 Form 10-K — Business Strategy and Reserves](https://www.sec.gov/Archives/edgar/data/80661/000008066126000086/pgr-20251231.htm)。年度截至 2025-12-31；全公司日历年综合成本率不超过 96% 的盈利优先纪律、个人车险占比（Personal Lines 占净签单 87%，其中车险占 96%）与总投资 939.5 亿美元。
