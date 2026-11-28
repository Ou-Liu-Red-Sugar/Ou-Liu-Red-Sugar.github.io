{
  "title": "成本结构与经营杠杆",
  "description": "把收入到营业利润的转化拆成变动成本、边际贡献、固定成本与阶梯费用；以单屏经营杠杆推演器与 TSM、INTC、COST 三家最新 SEC 财报实证，对照正向产能摊薄、反向开工不足、高变动稳态，以及提价、扩量与供给端成本通胀对利润的不对称冲击。",
  "layout": "entry",
  "notebookid": "zh-cost-structure-operating-leverage",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-cost-structure-operating-leverage"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127d">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

同样卖芯片、同样背着千亿美元级晶圆厂，两家半导体龙头在 2025 财年却交出了截然相反的利润表：**Taiwan Semiconductor Manufacturing Company**（TSM）营收增长 31.6%，营业利润跃升 46.4%[^tsmc-20f]；同期 **Intel Corporation**（INTC）设计部门赚走 127.4 亿美元，自建晶圆代工部门却因产能填不满巨亏 103.2 亿美元，拖累全公司合并营业利润转负[^intc-fy25]。

反差背后运转的是同一套成本力学。前五篇走通了[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)、[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/)以及[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)至[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/#nb-e03-capex-split)的现金底座，这一篇带着折旧与成本视角回到企业内部：从采购、生产与履约开始，看同样 100 美元收入变动，怎样在不同成本结构下折出完全不同的利润振幅。

## 从营业收入到营业利润：成本怎样分流 {#nb-d03-cost-split}

<span data-text-versions id="nb-d03-text-split">企业收到一笔货款后，账上支出按是否随产量同步增减，分流为两条通道。多卖一件就同步多付的属于**变动成本**，如商超进货、晶圆厂硅片耗材与支付抽佣；满产停机都照付不误的属于**固定成本**，如厂房折旧、核心研发薪酬与基础租金<span data-text-detail>（现实里不少支出属于半变动成本，例如基础电费叠加生产电度、底薪叠加销售提成；分析时按其随销量变动的斜率拆入变动与固定两部分即可）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-d03-text-cm">营业收入扣掉变动成本后剩下的部分叫**边际贡献**（Contribution Margin），它先用来填满企业的固定成本池。填满之前公司处于亏损区；一旦越过**盈亏平衡点**，后续每一美元边际贡献几乎直接落进营业利润<span data-text-detail>（设边际贡献率为 \(m = 1 - \text{变动成本率}\)、固定成本为 \(F\)，则盈亏平衡收入 \(S_{\text{BE}} = F / m\)。例如边际贡献率 80%、固定成本 60 M 美元的公司，收入跨过 75 M 美元后开始盈利）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure" id="nb-d03-cost-split-fig">
<div class="ff-head"><p class="ff-title">收入怎样流向营业利润：变动成本、边际贡献与盈亏平衡</p><span class="ff-sub">先扣随量变动的支出，再用边际贡献填满固定成本池</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="收入分流示意图：营业收入先扣除随销量同步增减的变动成本，余下边际贡献优先填满短期刚性的固定成本池，跨过盈亏平衡线后的溢出部分直接转化为营业利润 EBIT。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="d03-cs-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
    <marker id="d03-cs-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
  </defs>
  <rect x="16" y="54" width="152" height="86" rx="10" fill="#fbfbf6" stroke="#cfd6ce" stroke-width="1.4"/>
  <text x="92" y="88" text-anchor="middle" font-size="14" font-weight="700" fill="#22392f">营业收入</text>
  <text x="92" y="114" text-anchor="middle" font-size="12.5" fill="#5e6d65">均价 P × 销量 Q</text>
  <path d="M168 80 C200 80 202 52 232 52" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#d03-cs-a)"/>
  <path d="M168 114 C200 114 202 142 232 142" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#d03-cs-s)"/>
  <rect x="238" y="18" width="204" height="68" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.4"/>
  <text x="340" y="46" text-anchor="middle" font-size="13.5" font-weight="700" fill="#8f6033">变动成本</text>
  <text x="340" y="69" text-anchor="middle" font-size="12" fill="#5e6d65">原料、运费、抽佣（随 Q 变）</text>
  <rect x="238" y="106" width="204" height="72" rx="10" fill="#f3f8f4" stroke="#23695a" stroke-width="1.5"/>
  <text x="340" y="135" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">边际贡献</text>
  <text x="340" y="160" text-anchor="middle" font-size="12" fill="#3c4c44">先填固定成本 · 盈亏平衡线</text>
  <path d="M442 126 C472 126 474 62 504 62" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#d03-cs-a)"/>
  <path d="M442 154 L504 154" fill="none" stroke="#23695a" stroke-width="2.2" marker-end="url(#d03-cs-s)"/>
  <rect x="510" y="24" width="194" height="70" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.4"/>
  <text x="607" y="52" text-anchor="middle" font-size="13.5" font-weight="700" fill="#b5483a">固定成本池</text>
  <text x="607" y="76" text-anchor="middle" font-size="12" fill="#5e6d65">折旧、研发 · 未填满即亏</text>
  <rect x="510" y="114" width="194" height="66" rx="10" fill="#23695a"/>
  <text x="607" y="142" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">营业利润 EBIT</text>
  <text x="607" y="164" text-anchor="middle" font-size="12" fill="#d7e8df">跨线溢出 · 放大弹性</text>
</svg>
</div>
<figcaption>经营杠杆系数 DOL ＝ 边际贡献 ÷ 营业利润。固定成本占比越高、越贴近盈亏平衡线，收入每变动 1% 引发的利润振幅就越陡。</figcaption>
</figure>

<span data-text-versions id="nb-d03-text-dol">经营杠杆系数（Degree of Operating Leverage，简称 DOL）等于边际贡献除以营业利润，用来度量收入每变 1% 时利润的放大倍数。固定成本越重，分母营业利润远小于分子边际贡献，DOL 越高。更重要的是，**DOL 会随产能位置动态漂移**：收入越贴近盈亏平衡线，杠杆越陡；等收入远远甩开平衡线，利润率向边际贡献率收敛，倍数反而回落<span data-text-detail>（固定成本为零时 DOL 等于 1 倍，利润与收入同步伸缩；在单价与单位变动成本恒定的简化条件下，\(\text{DOL} = \frac{\Delta \text{EBIT} / \text{EBIT}}{\Delta Q / Q} = \frac{\text{边际贡献}}{\text{EBIT}}\)。若公司已处亏损状态，分母为负使该比值失效，此时应改看距离盈亏平衡收入的缺口）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 产能利用、增量贡献与双向杠杆 {#nb-d03-capacity-leverage}

把同样的 100 M 美元营收放进三种成本结构，再用滑块改变销量、均价或单位变动成本，利润振幅的落差便一目了然。下面可以先点选快捷情景，再切换高固定、均衡与高变动三类预设，看同一笔收入冲击如何折出迥异结果。

<figure class="flow-figure d03-lev-lab" id="nb-d03-lev-lab">
<div class="ff-head"><p class="ff-title">单屏经营杠杆推演器：三种成本结构与四种经营冲击</p><span class="ff-sub">基期营收均为 100 M 美元，切换成本结构或拖动滑块实时观察 EBIT 与盈亏平衡线变化</span></div>
<div class="d03-ctrl-row" role="group" aria-label="成本结构预设">
<span class="d03-ctrl-lbl">成本结构</span>
<button type="button" class="d03-pill" data-d03-preset="highfix" aria-pressed="true">高固定（软件／晶圆厂）</button>
<button type="button" class="d03-pill" data-d03-preset="balanced" aria-pressed="false">均衡型（品牌制造）</button>
<button type="button" class="d03-pill" data-d03-preset="highvar" aria-pressed="false">高变动（零售／经销）</button>
</div>
<div class="d03-ctrl-row" role="group" aria-label="典型经营冲击">
<span class="d03-ctrl-lbl">快捷情景</span>
<button type="button" class="d03-pill is-sc" data-d03-scenario="vol_up" aria-pressed="true">扩量 +10%</button>
<button type="button" class="d03-pill is-sc" data-d03-scenario="price_up" aria-pressed="false">提价 +10%</button>
<button type="button" class="d03-pill is-sc" data-d03-scenario="vol_down" aria-pressed="false">退坡 −20%</button>
<button type="button" class="d03-pill is-sc" data-d03-scenario="cost_up" aria-pressed="false">变动成本 +10%</button>
</div>
<div class="d03-sliders">
<label class="d03-sbox"><span class="d03-shead"><span>销量变动</span><b data-d03-out="vol-lbl">+10%</b></span><input type="range" min="-30" max="40" step="5" value="10" data-d03-sl="vol"></label>
<label class="d03-sbox"><span class="d03-shead"><span>平均售价变动</span><b data-d03-out="price-lbl">0%</b></span><input type="range" min="-15" max="15" step="1" value="0" data-d03-sl="price"></label>
<label class="d03-sbox"><span class="d03-shead"><span>单位变动成本变动</span><b data-d03-out="cost-lbl">0%</b></span><input type="range" min="-10" max="20" step="1" value="0" data-d03-sl="cost"></label>
</div>
<div class="d03-stage business-exchange" aria-label="单屏经营杠杆推演器默认展示高固定成本型（基期营收 100 M、变动成本 20 M、固定成本 60 M、基期 EBIT 20 M、DOL 4.0 倍、盈亏平衡收入 75 M）：销量上涨 10% 时营收升至 110 M、变动成本 22 M、固定成本锁在 60 M、EBIT 跃升至 28 M（+40%，营业利润率升至 25.5%）。另可切换均衡型（变动 50 M、固定 30 M、DOL 2.5 倍）与高变动型（变动 80 M、固定 10 M、DOL 2.0 倍），并比较提价 +10%、退坡 −20% 与单位变动成本 +10% 四种情景。">
<div class="d03-panel">
<div class="d03-phead"><span>利润表拆解（M 美元）</span><small>基期 DOL：<span data-d03-out="base-dol">4.0×</span></small></div>
<div class="d03-bars">
<div><div class="d03-brow-hd"><span>营业收入</span><b data-d03-out="new-rev">110 M（+10%）</b></div><div class="d03-track"><div class="d03-fill is-rev" data-d03-bar="rev" style="width:75.9%"></div></div></div>
<div><div class="d03-brow-hd"><span>变动成本</span><b data-d03-out="new-vc">22 M</b></div><div class="d03-track"><div class="d03-fill is-vc" data-d03-bar="vc" style="width:15.2%"></div></div></div>
<div><div class="d03-brow-hd"><span>固定成本（短期刚性）</span><b data-d03-out="new-fix">60 M</b></div><div class="d03-track"><div class="d03-fill is-fix" data-d03-bar="fix" style="width:41.4%"></div></div></div>
<div><div class="d03-brow-hd"><span>营业利润（EBIT）</span><b data-d03-out="new-ebit">28 M（+40%）</b></div><div class="d03-track"><div class="d03-fill is-ebit" data-d03-bar="ebit" style="width:19.3%"></div></div></div>
</div>
</div>
<div class="d03-panel">
<div class="d03-phead"><span>关键读数</span><small>盈亏边界与利润率</small></div>
<div class="d03-kpis">
<div class="d03-kpi"><small>基期 EBIT（利润率）</small><strong data-d03-out="base-ebit">20 M（20%）</strong></div>
<div class="d03-kpi is-gain" data-d03-ebit-card><small>新营业利润率</small><strong data-d03-out="new-margin">25.5%</strong></div>
<div class="d03-kpi"><small>当前盈亏平衡收入</small><strong data-d03-out="be-rev">75 M</strong></div>
<div class="d03-kpi"><small>成本结构直觉</small><strong>固定越重，双向越陡</strong></div>
</div>
</div>
</div>
<div class="d03-note" data-d03-out="note" aria-live="polite">纯销量杠杆：基期 DOL 为 4.0×，销量 +10% 令营业利润 +40%（营业利润率由 20% 变为 25.5%），且固定成本仍锁定在 60 M。</div>
<figcaption>教学模型假设固定成本在当前产能区间内不发生台阶跃迁；点击上方快捷情景，可直观对照提价、扩量、退坡与原料涨价四条传导链。</figcaption>
</figure>
<script defer src="/notebook/operating-leverage/ui.js?v=20261127d"></script>

这组模拟把三种经营状态划清了界限。**增长期**里，只要产能尚有空余，高固定成本业务会释放极高的**增量营业利润率**（新增营业利润 ÷ 新增营收）；**保持期**里，营收零增长并不保证利润稳住，薪资与能耗随通胀微升就会悄悄侵蚀利润率；到了**退坡期**，高变动企业可顺手压缩进货保住微利，高固定企业却被折旧研发锁死，销量跌两成便逼近亏损。

## 三家上市公司的真实对照 {#nb-d03-real-cases}

回到真实年报，上面三条路径在 2024—2026 财年同时上演。下面用单公司标签切换三份 SEC 申报文件：前两家同处半导体晶圆制造，恰好站在盈亏平衡线的正反两侧；第三家 **Costco Wholesale Corporation**（COST）则展示了高变动成本商业模式特有的稳态纪律。

<figure class="flow-figure d03-real-tabs" id="nb-d03-real-tabs-fig">
<div class="ff-head"><p class="ff-title">真实财报中的三种成本结构：正向摊薄、反向承压与高变动稳态</p><span class="ff-sub">切换标签逐家查看（数据取自 SEC 官方申报文件）</span></div>
<div class="d03-tabs" role="group" aria-label="选择公司案例">
<button type="button" class="d03-tab" data-d03-tab="tsm" aria-pressed="true">TSM · 正向杠杆</button>
<button type="button" class="d03-tab" data-d03-tab="intc" aria-pressed="false">INTC · 反向杠杆</button>
<button type="button" class="d03-tab" data-d03-tab="cost" aria-pressed="false">COST · 高变动稳态</button>
</div>
<div class="rel-svg-wrap business-exchange" data-d03-panel="tsm" aria-label="TSM FY2023 至 FY2025 正向经营杠杆：营收增至 3.81 万亿新台币（FY25 +31.6%），固定折旧与研发被充分摊薄，毛利率升至 59.9%、费用率降至 9.1%，营业利润跃至 19,361 亿（+46.4%，增量营业利润率 67.1%）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d03-t-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">1. 营收量价齐升</text>
  <text x="118" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="#22392f">3.81 万亿台币</text>
  <text x="118" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">FY25 +31.6% · 1,502 万片</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d03-t-s)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">2. 折旧与研发摊薄</text>
  <text x="360" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="#23695a">毛利率 59.9%</text>
  <text x="360" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">费用率 11.8% → 9.1%</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d03-t-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">3. 利润大跑赢营收</text>
  <text x="602" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">19,361 亿 (+46%)</text>
  <text x="602" y="118" text-anchor="middle" font-size="12" fill="#d7e8df">增量营业利润率 67.1%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-d03-panel="intc" hidden aria-label="INTC FY2025 反向经营杠杆：设计分部赚 127.4 亿美元，但晶圆代工分部背负重资产、亏损 103.2 亿美元，期末厂房设备净值高达 1,054 亿而合并毛利率仅 34.8%，合并营业亏损 22.1 亿美元。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d03-i-r" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#b5483a"/></marker></defs>
  <rect x="20" y="20" width="200" height="64" rx="9" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="120" y="46" text-anchor="middle" font-size="12.5" font-weight="700" fill="#23695a">设计分部 Products</text>
  <text x="120" y="70" text-anchor="middle" font-size="15" font-weight="700" fill="#23695a">盈利 +127.4 亿</text>
  <rect x="20" y="100" width="200" height="64" rx="9" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="120" y="126" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b5483a">代工分部 Foundry</text>
  <text x="120" y="150" text-anchor="middle" font-size="15" font-weight="700" fill="#b5483a">亏损 −103.2 亿</text>
  <line x1="220" y1="92" x2="262" y2="92" stroke="#b5483a" stroke-width="2" marker-end="url(#d03-i-r)"/>
  <rect x="268" y="38" width="194" height="108" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="365" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">重资产压低利用率</text>
  <text x="365" y="96" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">厂房设备 1,054 亿</text>
  <text x="365" y="122" text-anchor="middle" font-size="12" fill="#b5483a">合并毛利率仅 34.8%</text>
  <line x1="462" y1="92" x2="500" y2="92" stroke="#b5483a" stroke-width="2" marker-end="url(#d03-i-r)"/>
  <rect x="506" y="38" width="194" height="108" rx="10" fill="#b5483a"/>
  <text x="603" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#fce8e5">合并仍处亏损区</text>
  <text x="603" y="98" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">−22.1 亿美元</text>
  <text x="603" y="124" text-anchor="middle" font-size="12" fill="#f7d6d0">两年重组费 91.6 亿</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-d03-panel="cost" hidden aria-label="COST FY2024 至 FY2026 高变动稳态：总收入增至 3,031.5 亿美元（+10.1%），商品成本稳占 87.2%、SG&amp;A 稳占 9.0%，营业利润 116.9 亿（+12.5%，杠杆仅约 1.2 倍），59.1 亿会员费贡献 50.6% 营业利润。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d03-c-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">1. 总收入稳增</text>
  <text x="118" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="#22392f">3,032 亿美元</text>
  <text x="118" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">FY26 +10.1% · 会费 59 亿</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d03-c-a)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="360" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">2. 成本紧贴营收</text>
  <text x="360" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="#8f6033">商品成本 87.2%</text>
  <text x="360" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">SG&amp;A 稳在 9.0%</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d03-c-a)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">3. 弱杠杆高确定性</text>
  <text x="602" y="94" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">116.9 亿 (+12.5%)</text>
  <text x="602" y="118" text-anchor="middle" font-size="12" fill="#d7e8df">利润率 3.85% · 杠杆 1.2×</text>
</svg>
</div>
<figcaption>口径说明：TSM 取自 FY2025 20-F（新台币）；INTC 取自 FY2025 8-K 业绩公告（含内部抵销及总部费用）；COST 取自 FY2026 10-K（会员费贡献 50.6% 营业利润）。</figcaption>
</figure>

把 TSM 和 INTC 放在一起读，能直接破除“高经营杠杆等于好生意”的误判。晶圆厂的光刻机折旧和研发开支不会因为砍单就暂停：TSM 先进制程满载运转，新增晶圆不断摊薄固定成本，推升利润率连年走高[^tsmc-20f]；INTC 在外部代工订单不足的情况下硬扛千亿美元厂房折旧，只能靠大额重组费强行削减研发与管销开支来止血[^intc-fy25]。

COST 走了另一条路。它主动把商品加价压到极薄，采购与门店费用几乎跟营收同比例伸缩，扩量时利润率纹丝不动，消费走弱时也不必靠砍厂房保命[^cost-10k]。与此同时，近乎零变动成本的会员费稳稳托住了全公司一半以上的营业利润，让弱杠杆零售同样具备出色的跨周期韧性。

## 规模扩大后的阶梯费用与供给端约束 {#nb-d03-step-supply}

<span data-text-versions id="nb-d03-text-step">教科书常把固定成本画成一条永远水平延伸的直线，但真实商业世界里，**没有哪项固定成本能无限期扛住规模扩张**。当工厂开工率逼近满产、云机房机柜插满，或者交付团队负荷触顶时，公司必须提前投建新产线、新数据中心或扩招整建制团队。固定成本不会平滑爬坡，而是瞬间跃上一个新台阶——会计上称为**阶梯固定成本**（Step-Fixed Costs）<span data-text-detail>（TSM 在 Form 20-F 的毛利率讨论中也明确提示：每逢新一代先进制程刚刚量产的年份，新厂房与设备折旧集中入账而初始良率与产能仍在爬坡，当年毛利率往往承受阶段性压力）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这解释了一个经常让投资者看走眼的财报现象：一家公司订单旺盛、营收还在高速增长，某几个季度的营业利润率却突然掉头向下。此时需要立刻分辨两种截然不同的原因——究竟是老产线失去定价权、竞争恶化导致的利润率塌陷，还是新产能刚转固、新台阶尚未填满造成的短期摊薄？前者破坏长期盈利能力，后者随着新产能利用率爬升往往会在随后几个季度自动修复。

<figure class="flow-figure" id="nb-d03-step-costs-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">扩张期两道转折：阶梯固定成本与同等 10% 冲击弹性</p><div class="ff-switch" role="group" aria-label="切换视角" hidden><button type="button" data-ff-view-choice="step" aria-pressed="true">阶梯固定成本</button><button type="button" data-ff-view-choice="shock" aria-pressed="false">同等 10% 冲击落差</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="step" aria-label="阶梯固定成本示意图：随着产能触顶建二期新厂或扩建三期，固定成本向上跃升台阶，跨台阶瞬间利润率短暂回落，直至新产能被订单填满。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <line x1="76" y1="160" x2="670" y2="160" stroke="#9da39e" stroke-width="1.4"/>
  <line x1="76" y1="160" x2="76" y2="24" stroke="#9da39e" stroke-width="1.4"/>
  <text x="66" y="36" text-anchor="end" font-size="12" fill="#5e6d65">成本</text>
  <text x="670" y="182" text-anchor="end" font-size="12" fill="#5e6d65">业务规模 ／ 产能</text>
  <path d="M76 144 L650 30" fill="none" stroke="#23695a" stroke-width="2.2" stroke-dasharray="6 4"/>
  <text x="650" y="24" text-anchor="end" font-size="12.5" font-weight="700" fill="#23695a">营业收入线</text>
  <path d="M76 138 L256 138 L256 102 L452 102 L452 66 L646 66" fill="none" stroke="#a8743f" stroke-width="2.8"/>
  <circle cx="256" cy="102" r="4.5" fill="#b5483a"/>
  <circle cx="452" cy="66" r="4.5" fill="#b5483a"/>
  <text x="166" y="154" text-anchor="middle" font-size="12" fill="#8f6033">一期固定成本</text>
  <text x="246" y="94" text-anchor="end" font-size="12" font-weight="700" fill="#b5483a">建二期新厂</text>
  <text x="442" y="58" text-anchor="end" font-size="12" font-weight="700" fill="#b5483a">扩建三期</text>
  <text x="550" y="90" text-anchor="middle" font-size="12" fill="#5e6d65">跨台阶瞬间利润率回落</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="shock" hidden aria-label="同等 10% 冲击对均衡型业务营业利润的落差（基准营收 100、变动 50、固定 30、EBIT 20）：提价 +10% 令 EBIT 跃升 +50%，扩量 +10% 令 EBIT 升 +25%，单位变动成本涨 10% 令 EBIT 降 −25%。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="30" font-size="13.5" font-weight="700" fill="#22392f">基准：营收 100 · 变动 50 · 固定 30 → EBIT 20</text>
  <line x1="330" y1="48" x2="330" y2="176" stroke="#b7c3b9" stroke-width="1.4"/>
  <text x="24" y="76" font-size="13.5" font-weight="700" fill="#23695a">提价 +10%（零新增变动）</text>
  <rect x="330" y="58" width="280" height="24" rx="5" fill="#23695a"/>
  <text x="624" y="76" font-size="14" font-weight="700" fill="#23695a">+50%</text>
  <text x="24" y="120" font-size="13.5" font-weight="700" fill="#3c4c44">扩量 +10%（变动同增）</text>
  <rect x="330" y="102" width="140" height="24" rx="5" fill="#6b9f8c"/>
  <text x="484" y="120" font-size="14" font-weight="700" fill="#23695a">+25%</text>
  <text x="24" y="164" font-size="13.5" font-weight="700" fill="#b5483a">单位变动成本 +10%</text>
  <rect x="190" y="146" width="140" height="24" rx="5" fill="#b5483a"/>
  <text x="344" y="164" font-size="14" font-weight="700" fill="#b5483a">−25%</text>
</svg>
</div>
<figcaption>点击切换阶梯固定成本与量价冲击视图。阶梯固定成本制造的是扩张期节奏错位，而提价转嫁能力决定利润率中枢去向。</figcaption>
</figure>

供给约束下的量价不对称，常比产能利用率更直接地改写利润。同样带来 10% 的营收增长，**提价**几乎零新增变动成本，多收的货款全额直达利润；**扩量**则须同步付原料与履约开支，只留下边际贡献。反过来，若上游原料或人工涨价 10% 而企业缺乏转嫁能力，在推演器里切到“高变动”就能看到：变动成本占 80%、利润率 10% 的薄利生意，哪怕量价不变，营业利润也会被一口气抹掉 80%。

## 在财报里辨认真实成本结构的实用边界 {#nb-d03-filing-clues}

<span data-text-versions id="nb-d03-text-cogs">财报极少直接标注变动与固定成本，利润表只列**营业成本**（COGS）与**营业费用**（OpEx），把两者简单一一对应极易看偏。晶圆厂设备折旧、航空租赁与酒店租金记在营业成本里，实质是高度刚性的固定成本；软件与消费品按销售额抽成的渠道佣金记在销售费用里，实质随收入高度联动<span data-text-detail>（折旧与摊销在营业成本和研发费用之间的具体分摊，通常可以在 Form 10-K 或 Form 20-F 的不动产厂房附注与现金流量表补充资料中查到）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

报表没有拆解时，可以用连续几个景气波动季度的**增量营业利润率**反推成本池：营收加速时显著高于历史均值、放缓时骤降，说明固定成本占比沉重；常年紧贴历史均值，则多由变动成本主导。再配合核对资本开支与在建工程，就能分清利润率回落到底来自新产能刚落地的阶梯费用，还是竞争加剧与上游成本无法转嫁，把成本分析自然接进下一篇《竞争、定价权与替代》。

[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company，[FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)，2026-04-16 提交，Item 5 Results of Operations（FY2023–FY2025 营收、晶圆出货量、毛利率、营业费用率与营业利润）。
[^intc-fy25]: Intel Corporation，[Q4 & Full-Year 2025 业绩公告（Form 8-K EX-99.1）](https://www.sec.gov/Archives/edgar/data/50863/000005086326000009/q425earningsrelease.htm)，2026-01-22 提交，FY2024–FY2025 合并利润表、Intel Products 与 Intel Foundry 分部损益及期末厂房设备净值。
[^cost-10k]: Costco Wholesale Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/R3.htm)，截至 2026-08-30 的 52 周合并利润表（商品销售额、会员费、商品成本、SG&A 与营业利润）。
