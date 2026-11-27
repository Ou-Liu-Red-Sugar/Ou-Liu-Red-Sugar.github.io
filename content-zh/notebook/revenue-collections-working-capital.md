{
  "title": "收入、回款与营运资本",
  "description": "承接三表勾稽，拆解应收账款、存货、应付账款与预收／未实现收入如何组成净营运资本与现金转换周期（CCC）；借互动推演器与 NVIDIA（NVDA）、Costco（COST）、Microsoft（MSFT）等真实 FY2026 SEC 披露，对照正负营运资本在扩张与退坡时的反向现金效应。",
  "layout": "entry",
  "notebookid": "zh-revenue-collections-working-capital",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-revenue-collections-working-capital"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127b">

[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)里的装配小厂卖出了 75,000 美元零件，利润表如实记下 75,000 美元收入，银行账户当天却只进账 45,000 美元——剩下 30,000 美元变成客户欠条，仓库压着 10,000 美元原料，厂里也欠供应商 40,000 美元货款没结。这三笔进出错期的短期资金，就是日常运转里的**营运资本**。

放到真实股市里，两家增速和利润率相同的公司，现金命运可能截然相反：有的订单越爆、账上越缺钱，利润多半压在仓库和客户账期里；有的越扩张、现金反而比净利润涨得更快，靠上游账期或客户年付预付款免费垫资。分岔口就在**净营运资本**（Net Working Capital，简称 NWC）的结构与方向。

## 从赊购到回款：净营运资本与四把周转标尺 {#nb-e02-working-capital-cycle}

[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)讲过收费与交付的先后顺序。落到资产负债表上，日常收付错期主要沉淀在四个科目里，正好分成“占钱”和“垫钱”两队：

- **存货**（Inventory，占用现金）：商品卖出前，采购与制造成本全部押在仓库里。
- **应收账款**（Accounts Receivable，占用现金）：货已交付并记收入，客户按账期还没汇来的货款。
- **应付账款**（Accounts Payable，提供现金）：商品已入库，按上游信用条款延后结算的货款。
- **预收／未实现收入**（Deferred / Unearned Revenue，提供现金）：客户提前付清年费或定金、待未来分期履约确认的合同负债——正如[《Agent 时代的基本面投资》](/zh/notebook/investment-returns/)里预付定金先落袋的现金。

用占用现金的两项资产减去提供现金的两项负债，就是衡量主业短期占资的**核心净营运资本**（NWC）：

\[
\text{核心 NWC} = \text{应收账款} + \text{存货} - \text{应付账款} - \text{预收／未实现收入}.
\]

<span data-text-versions id="nb-e02-text-nwc-def">到了现金流量表的间接法里，变动方向正好一正一反：资产端（应收、存货）同比增加，说明今年多押进去一笔钱，记作经营现金流的**流出**（负号）；负债端（应付、预收）增加，说明多借来一笔免息资金，记作**流入**（正号）<span data-text-detail>（会计教科书常把广义营运资本写作“流动资产 − 流动负债”。做基本面现金流分析时，通常会剔除现金、短期投资以及一年内到期的有息短债，改看“经营性净营运资本”：现金正是要解释的结果，短债属于融资安排而非经营周转。完整口径下，预付账款归入经营流动资产，应付薪酬与应计经营费用归入经营流动负债，上式抓住的是跨行业差异最大的四项主干）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e02-text-days-rule">不同公司体量相差几十倍，直接比余额看不出周转快慢，习惯把金额换算成“天数”。算天数要守住分母规则：**应收与预收**对应含毛利的售价，除以全年营业收入；**存货与应付**按成本入账，除以全年营业成本<span data-text-detail>（为平滑期末时点波动，计算天数时通常取期初与期末余额的平均值乘以 365 天；遇到会员制或年付软件公司，还会把**预收天数** \(\text{平均预收／未实现收入} \div \text{营业收入} \times 365\) 摆在旁边一并衡量，才不会漏掉客户提前打来的大笔现金）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

\[
\text{DSO} = \frac{\text{平均应收账款}}{\text{营业收入}} \times 365,\quad
\text{DIO} = \frac{\text{平均存货}}{\text{营业成本}} \times 365,\quad
\text{DPO} = \frac{\text{平均应付账款}}{\text{营业成本}} \times 365,
\]

\[
\text{CCC} = \text{DSO} + \text{DIO} - \text{DPO}.
\]

把货在仓库停留的天数（DIO）和等客户打款的天数（DSO）加起来，扣掉供应商垫付的账期（DPO），剩下的**现金转换周期**（Cash Conversion Cycle，简称 CCC）就是公司要自掏腰包周转的净窗口——下面这张图把时间轴和现金流正负号连到了一起：

<figure class="flow-figure e02-cycle-map" id="nb-e02-cycle-map-fig">
<div class="ff-head"><p class="ff-title">一笔生意的现金转换时间轴与三表联动关系</p><span class="ff-sub">上方为资金占用与账期抵减（CCC ＝ DIO ＋ DSO − DPO）· 曲线箭头直指间接法经营现金流方向</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="一笔生意的现金转换时间轴与四科目现金流联动：时间轴依次经过 t0 采购入库、t1 向供应商付款、t2 交付确认收入与 t3 收到客户货款。上方现金占用期分为存货周转天数 DIO（采购到交付）与应收周转天数 DSO（交付到回款）；下方为供应商账期 DPO（采购到付款）与净缺口现金转换周期 CCC（付款到回款，等于 DIO 加 DSO 减 DPO）。四条曲线箭头连接至下方四张报表联动卡片：存货余额增加记经营现金流出（−）、应收账款增加记经营现金流出（−）、应付账款增加记经营现金流入（+）、预收与未实现收入增加记经营现金流入（+）。底部给出真实对照：NVDA FY26 周期 +96.9 天（扩产期净占现金 236 亿美元），COST FY26 传统 +0.9 天、计入递延会员费后净周期 −2.6 天。">
<svg viewBox="0 0 860 442" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e02-arr-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e02-arr-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="442" rx="8" fill="#fafaf6"/>
  <!-- Top Timeline Panel -->
  <rect x="14" y="12" width="832" height="178" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <text x="30" y="34" font-size="13" font-weight="700" fill="#1d2a25">现金占用期（资产端先垫钱）与账期抵减（负债端后付钱）</text>
  <text x="830" y="34" text-anchor="end" font-size="11.5" fill="#66736c">CCC ＝ DIO ＋ DSO − DPO</text>
  <!-- Upper bars: DIO + DSO -->
  <rect x="44" y="48" width="380" height="32" rx="6" fill="#f5e9da" stroke="#dfb98d" stroke-width="1"/>
  <text x="234" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8d5520">存货周转天数 DIO（备货生产，资金压在存货）</text>
  <rect x="428" y="48" width="388" height="32" rx="6" fill="#f9efe3" stroke="#e4c59e" stroke-width="1"/>
  <text x="622" y="68" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8d5520">应收周转天数 DSO（已确认收入，货款尚未收回）</text>
  <!-- Center Timeline Spine -->
  <line x1="44" y1="100" x2="816" y2="100" stroke="#9aaea5" stroke-width="1.8"/>
  <circle cx="44" cy="100" r="5.5" fill="#23695a"/>
  <circle cx="294" cy="100" r="5.5" fill="#23695a"/>
  <circle cx="426" cy="100" r="5.5" fill="#a8743f"/>
  <circle cx="816" cy="100" r="5.5" fill="#23695a"/>
  <text x="44" y="120" font-size="11" font-weight="600" fill="#2e3c36">t₀ 采购入库</text>
  <text x="294" y="120" text-anchor="middle" font-size="11" font-weight="600" fill="#23695a">t₁ 付供应商款</text>
  <text x="426" y="120" text-anchor="middle" font-size="11" font-weight="600" fill="#8d5520">t₂ 交付确认收入</text>
  <text x="816" y="120" text-anchor="end" font-size="11" font-weight="600" fill="#23695a">t₃ 客户现金回款</text>
  <!-- Lower bars: DPO + CCC -->
  <rect x="44" y="132" width="248" height="32" rx="6" fill="#e2ede7" stroke="#9ec4b2" stroke-width="1"/>
  <text x="168" y="152" text-anchor="middle" font-size="12" font-weight="700" fill="#1f5c4e">应付账期 DPO（上游替你垫资）</text>
  <rect x="296" y="132" width="520" height="32" rx="6" fill="#f3dfc8" stroke="#c78e52" stroke-width="1.4"/>
  <text x="556" y="152" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8d5520">现金转换周期 CCC：付出现金到收回现金的真实垫资窗口（若预收足够大则转负）</text>
  <!-- Curved connectors down to 4 cards -->
  <path d="M113,164 C113,198 113,204 113,232" fill="none" stroke="#23695a" stroke-width="1.8" marker-end="url(#e02-arr-sage)"/>
  <path d="M324,164 C324,198 324,204 324,232" fill="none" stroke="#a8743f" stroke-width="1.8" marker-end="url(#e02-arr-amber)"/>
  <path d="M535,164 C535,198 535,204 535,232" fill="none" stroke="#a8743f" stroke-width="1.8" marker-end="url(#e02-arr-amber)"/>
  <path d="M746,164 C746,198 746,204 746,232" fill="none" stroke="#23695a" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#e02-arr-sage)"/>
  <!-- 4 Statement-Linkage Cards -->
  <rect x="14" y="236" width="198" height="132" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.2"/>
  <text x="113" y="259" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">应付账款（负债）</text>
  <text x="113" y="277" text-anchor="middle" font-size="11" fill="#66736c">已收货、暂未给供应商付款</text>
  <line x1="26" y1="286" x2="200" y2="286" stroke="#eaede5"/>
  <rect x="28" y="295" width="170" height="24" rx="5" fill="#e2ede7"/>
  <text x="113" y="311" text-anchor="middle" font-size="12" font-weight="700" fill="#1f5c4e">余额 ↑ → 现金流入 (+)</text>
  <text x="113" y="338" text-anchor="middle" font-size="10.5" fill="#5d6b64">相当于上游提供的无息借款</text>
  <text x="113" y="354" text-anchor="middle" font-size="10.5" fill="#5d6b64">须剔除应付设备款防失真</text>
  <rect x="225" y="236" width="198" height="132" rx="10" fill="#ffffff" stroke="#e4c59e" stroke-width="1.2"/>
  <text x="324" y="259" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">存货（资产）</text>
  <text x="324" y="277" text-anchor="middle" font-size="11" fill="#66736c">仓库备货增加</text>
  <line x1="237" y1="286" x2="411" y2="286" stroke="#eaede5"/>
  <rect x="239" y="295" width="170" height="24" rx="5" fill="#f4e5d2"/>
  <text x="324" y="311" text-anchor="middle" font-size="12" font-weight="700" fill="#8d5520">余额 ↑ → 现金流出 (−)</text>
  <text x="324" y="338" text-anchor="middle" font-size="10.5" fill="#5d6b64">还没卖成收入就先付料工费</text>
  <text x="324" y="354" text-anchor="middle" font-size="10.5" fill="#5d6b64">滞销时再面临存货跌价</text>
  <rect x="436" y="236" width="198" height="132" rx="10" fill="#ffffff" stroke="#e4c59e" stroke-width="1.2"/>
  <text x="535" y="259" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">应收账款（资产）</text>
  <text x="535" y="277" text-anchor="middle" font-size="11" fill="#66736c">赊销已记利润、尚未到账</text>
  <line x1="448" y1="286" x2="622" y2="286" stroke="#eaede5"/>
  <rect x="450" y="295" width="170" height="24" rx="5" fill="#f4e5d2"/>
  <text x="535" y="311" text-anchor="middle" font-size="12" font-weight="700" fill="#8d5520">余额 ↑ → 现金流出 (−)</text>
  <text x="535" y="338" text-anchor="middle" font-size="10.5" fill="#5d6b64">增长越快、赊销垫款越多</text>
  <text x="535" y="354" text-anchor="middle" font-size="10.5" fill="#5d6b64">需核查坏账与客户集中度</text>
  <rect x="647" y="236" width="199" height="132" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.2"/>
  <text x="746" y="259" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">预收／递延收入（负债）</text>
  <text x="746" y="277" text-anchor="middle" font-size="11" fill="#66736c">客户先付年费、分期履约</text>
  <line x1="659" y1="286" x2="834" y2="286" stroke="#eaede5"/>
  <rect x="661" y="295" width="170" height="24" rx="5" fill="#e2ede7"/>
  <text x="746" y="311" text-anchor="middle" font-size="12" font-weight="700" fill="#1f5c4e">余额 ↑ → 现金流入 (+)</text>
  <text x="746" y="338" text-anchor="middle" font-size="10.5" fill="#5d6b64">软件订阅与会员制核心现金池</text>
  <text x="746" y="354" text-anchor="middle" font-size="10.5" fill="#5d6b64">但新签滑坡时会反向抽血</text>
  <!-- Bottom Real Anchor Strip -->
  <rect x="14" y="382" width="409" height="46" rx="8" fill="#fdf6ec" stroke="#e4c59e" stroke-width="1"/>
  <text x="26" y="401" font-size="11.5" font-weight="700" fill="#8d5520">正周期扩产吞现金 · NVDA FY26</text>
  <text x="26" y="418" font-size="10.2" fill="#5d6b64">DSO 52.0 ＋ DIO 92.0 − DPO 47.1 ＝ +96.9 天（净占现金 236 亿美元）</text>
  <rect x="436" y="382" width="410" height="46" rx="8" fill="#eef6f2" stroke="#b3d3c4" stroke-width="1"/>
  <text x="448" y="401" font-size="11.5" font-weight="700" fill="#1f5c4e">负周期扩张造现金 · COST FY26</text>
  <text x="448" y="418" font-size="10.2" fill="#5d6b64">传统 +0.9 天；计入递延会员费 3.5 天后净 −2.6 天（NWC −23 亿美元）</text>
</svg>
</div>
<figcaption>间接法经营现金流永远按“资产增加减现金、负债增加加现金”调节；同一套账期机制在扩张期与退坡期方向相反。</figcaption>
</figure>

## 正营运资本与负营运资本：增长怎样反向牵动现金 {#nb-e02-growth-cash-lab}

弄清四个科目的符号后，还要抓住一条决定现金流方向的关系：进入当期现金流量表的是净营运资本的**变动额** \(\Delta\text{NWC}\)，静态余额本身不会触发新的收付。只要营收原地踏步、周转天数不变，哪怕账上常年压着 3 亿美元应收和存货，今年新增占用也是零，现金利润依然会原封不动进账。

一旦业务高速扩张，正负营运资本立刻拉开分野。当 **NWC 为正**（长账期、重备货）时，营收每多卖一成，库存和未结账单都要同比放大，\(\Delta\text{NWC} > 0\) 会从经营现金流里扣掉一大块，甚至把高增长公司拉进“账面大赚、账上缺钱”的窘境；当 **NWC 为负**时，扩张反而多借来免息负债，\(\Delta\text{NWC} < 0\) 会给现金流额外加钱。

下面的推演器把三类典型生意拉到同一条起跑线。先固定 **+40%** 增速依次点开前三组预设，感受不同账期怎样把现金转换率撕开近三倍差距；再切到第四组预设，看负营运资本遇到营收退坡时怎样反向抽血：

<figure class="flow-figure e02-ccc-lab" id="nb-e02-ccc-lab" data-e02-ccc>
<div class="ff-head"><p class="ff-title">互动推演器：不同商业模式在增长与退坡下的营运资本现金流</p><span class="ff-sub">单位：M 美元 · 基期收入 1,000 · 营业成本率 65% · 营运资本前现金利润率 15%</span></div>
<div class="e02-presets" hidden><button type="button" data-e02-preset="hardware" aria-pressed="true">① 重账期硬件／制造（+40%）</button><button type="button" data-e02-preset="retail">② 高周转零售（+40%）</button><button type="button" data-e02-preset="saas">③ 预收订阅软件（+40%）</button><button type="button" data-e02-preset="downturn">④ 预收模式退坡（−25%）</button></div>
<div class="e02-sliders">
<div class="e02-sgroup-top">
<div class="e02-srow"><label for="nb-e02-in-dso"><span>应收天数 DSO</span><output data-e02-dso-out>65 天</output></label><input id="nb-e02-in-dso" type="range" min="0" max="120" step="1" value="65" data-e02-dso-in disabled></div>
<div class="e02-srow"><label for="nb-e02-in-dio"><span>存货天数 DIO</span><output data-e02-dio-out>105 天</output></label><input id="nb-e02-in-dio" type="range" min="0" max="140" step="1" value="105" data-e02-dio-in disabled></div>
<div class="e02-srow"><label for="nb-e02-in-dpo"><span>应付天数 DPO</span><output data-e02-dpo-out>45 天</output></label><input id="nb-e02-in-dpo" type="range" min="0" max="100" step="1" value="45" data-e02-dpo-in disabled></div>
</div>
<div class="e02-sgroup-bot">
<div class="e02-srow"><label for="nb-e02-in-drd"><span>客户预收天数</span><output data-e02-drd-out>0 天</output></label><input id="nb-e02-in-drd" type="range" min="0" max="180" step="2" value="0" data-e02-drd-in disabled></div>
<div class="e02-srow"><label for="nb-e02-in-g"><span>收入年增速 g</span><output data-e02-g-out>+40%</output></label><input id="nb-e02-in-g" type="range" min="-30" max="60" step="5" value="40" data-e02-g-in disabled></div>
</div>
</div>
<div class="business-exchange" aria-label="营运资本与经营现金流互动推演结果（基期收入 1,000 M 美元、营业成本率 65%、营运资本前现金利润率 15%）：预设一重账期硬件与制造（DSO 65 天、DIO 105 天、DPO 45 天、预收 0 天、收入增速 +40%），本年收入 1,400 M 美元，传统 CCC 与净资金周期均为 +125 天，变动前现金利润 210.0 M 美元，营运资本净占用 −114.0 M 美元（NWC 由 +284.9 升至 +398.9），最终 CFO 为 +96.0 M 美元（现金转换率 45.7%）。预设二高周转零售（DSO 4 天、DIO 26 天、DPO 40 天、预收 4 天、增速 +40%），传统 CCC −10 天、含预收净 −14 天，营运资本反哺 +10.0 M 美元，最终 CFO +220.0 M 美元（104.7%）。预设三预收订阅软件（DSO 60 天、DIO 0 天、DPO 30 天、预收 120 天、增速 +40%），含预收净周期 −90 天，营运资本反哺 +87.1 M 美元，最终 CFO +297.1 M 美元（141.5%）。预设四预收模式退坡（参数同预设三、收入增速 −25%），本年收入 750 M 美元，变动前现金利润 112.5 M 美元，营运资本反噬抽走 −54.5 M 美元，最终 CFO 降至 +58.0 M 美元（51.6%）。">
<div class="e02-barbox">
<div class="e02-brow"><span class="e02-blabel">占用（DIO＋DSO）</span><div class="e02-btrack"><div class="e02-bfill-dio" data-e02-bar-dio style="width:52.5%"></div><div class="e02-bfill-dso" data-e02-bar-dso style="width:32.5%"></div></div><span class="e02-bval" data-e02-use-days>170 天</span></div>
<div class="e02-brow"><span class="e02-blabel">信用（DPO＋预收）</span><div class="e02-btrack"><div class="e02-bfill-dpo" data-e02-bar-dpo style="width:22.5%"></div><div class="e02-bfill-drd" data-e02-bar-drd style="width:0%"></div></div><span class="e02-bval" data-e02-src-days>45 天</span></div>
</div>
<div class="e02-kpis">
<div class="e02-kcard"><small>净资金周期</small><strong class="e02-neg" data-e02-net-ccc>+125 天</strong><span data-e02-trade-ccc>传统 CCC +125 天</span></div>
<div class="e02-kcard"><small>变动前现金利润</small><strong data-e02-pre-cf>210.0</strong><span data-e02-rev-sub>本年收入 1,400M</span></div>
<div class="e02-kcard"><small>营运资本现金流</small><strong class="e02-neg" data-e02-wc-cf>−114.0</strong><span data-e02-nwc-sub>NWC +284.9 → +398.9</span></div>
<div class="e02-kcard e02-khi"><small>最终经营现金流 CFO</small><strong data-e02-cfo>+96.0</strong><span data-e02-conv-sub>现金转换率 45.7%</span></div>
</div>
</div>
<p class="e02-note" data-e02-note>重账期硬件／制造模式（+40% 增长）：存货备货 105 天加客户账期 65 天远高于上游 45 天账期，营收多增 400 M 美元时，营运资本直接吃掉 114.0 M 美元现金，经营现金流不到变动前现金利润的一半。</p>
<figcaption>按各科目严格分母折算金额：NWC ＝ R × [DSO − 预收天数 ＋ 0.65 × (DIO − DPO)] ÷ 365；当年营运资本现金流为 −ΔNWC，最终 CFO ＝ 变动前现金利润 − ΔNWC。</figcaption>
</figure>

把增速滑回 0%，三类生意的现金转换率都会回到 100%；把增速推高，差异才会彻底暴露。正营运资本的高增长需要厚利润率或外部融资垫背，负营运资本则在扩张期自带融资引擎，用上下游的免息钱撑大生意。

## 真实 10-K 对照：NVDA、COST 与 MSFT 的三种资金结构 {#nb-e02-real-10k}

回到 FY2026 的三份 SEC 官方年报，这三种资金结构都能找到清晰映射：全速扩产 AI 算力系统的 **NVIDIA**（NVDA）、靠高周转与会员费运转的 **Costco Wholesale**（COST），以及以企业订阅预收见长的 **Microsoft**（MSFT）：

<figure class="flow-figure e02-real-wc" id="nb-e02-real-wc-fig">
<div class="ff-head"><p class="ff-title">三类商业模式的真实营运资本对照（FY2026 SEC 官方原件）</p><span class="ff-sub">金额单位：M 美元 · 周转天数统一按期初期末平均余额 × 365 计算</span></div>
<div class="e02-rgrid business-exchange" aria-label="三家真实上市公司 FY2026 营运资本与经营现金流对照（金额单位：M 美元，周转天数按平均余额乘以 365 天计算）：一、NVIDIA（NVDA，截至 2026-01-25）：收入 215,938（同比 +65.5%）、营业成本 62,475；期末应收 38,466（上年 23,065，DSO 52.0 天）、存货 21,403（上年 10,080，DIO 92.0 天）、应付 9,812（上年 6,310，DPO 47.1 天），CCC 为 +96.9 天；现金流量表中应收增 −15,399、存货增 −11,324、应付增 +3,096，三项合计净流出 −23,627，使 CFO 102,718 低于 GAAP 净利润 120,067 达 173.5 亿美元。二、Costco Wholesale（COST，截至 2026-08-30）：总收入 303,154（+10.1%，含会员费 5,907）、商品成本 264,279；期末应收 3,959（DSO 4.3 天）、存货 19,324（DIO 25.9 天）、应付 22,591（DPO 29.3 天），传统 CCC 仅 +0.9 天；计入递延会员费 3,006（3.5 天）后核心净营运资本为 −2,314（广义 −2.6 天）；现金流应付增 +2,755 远超存货增 −1,153，营运资本合计净流入 +2,320，托起 CFO 15,817（远高于净利润 9,226）。三、Microsoft（MSFT，截至 2026-06-30）：总收入 331,839（+17.8%）、营业成本 106,374；存货仅 1,397，期末应收 80,876（DSO 82.9 天，受 Q4 集中续约开票拉高），短期未实现收入 72,965（75.6 天，含长期合计 75,712）；应付账款 42,416 中含 26,700 资本开支设备应付（非经营采购账期）；现金流未实现收入增 +9,361 加经营应付增 +5,268，合计 +14,629 抵销应收增 −12,737，托起 182,935 经营现金流。">
<div class="e02-rcard" style="--e02-c:#a8743f">
<div>
<div class="e02-rhead"><strong>NVIDIA（NVDA）· FY2026</strong><small>截至 2026-01-25 · 重备货硬件扩张</small></div>
<div class="e02-pills">
<div class="e02-pill"><span>DSO</span><b>52.0 天</b></div>
<div class="e02-pill"><span>DIO</span><b>92.0 天</b></div>
<div class="e02-pill"><span>DPO</span><b>47.1 天</b></div>
</div>
<div class="e02-ccc-tag e02-ccc-pos">CCC ＝ +96.9 天（增长显著占资）</div>
<div class="e02-ritems">
<div class="e02-ri"><span>收入（+65.5%）/ 成本</span><b>215,938 / 62,475</b></div>
<div class="e02-ri"><span>期末 应收 / 存货 / 应付</span><b>38,466 / 21,403 / 9,812</b></div>
<div class="e02-ri"><span>CF 应收＋存货＋应付</span><b class="e02-neg">−23,627</b></div>
<div class="e02-ri"><span>GAAP 净利润 → CFO</span><b>120,067 → 102,718</b></div>
</div>
</div>
<p class="e02-rnote">营收激增 854 亿美元，单是应收与存货扩张就吃掉 267 亿美元现金，应付仅补回 31 亿。</p>
</div>
<div class="e02-rcard" style="--e02-c:#23695a">
<div>
<div class="e02-rhead"><strong>Costco（COST）· FY2026</strong><small>截至 2026-08-30 · 高周转＋会员预收</small></div>
<div class="e02-pills">
<div class="e02-pill"><span>DSO</span><b>4.3 天</b></div>
<div class="e02-pill"><span>DIO</span><b>25.9 天</b></div>
<div class="e02-pill"><span>DPO</span><b>29.3 天</b></div>
</div>
<div class="e02-ccc-tag e02-ccc-neg">传统 CCC +0.9 天 · 含预收 −2.6 天</div>
<div class="e02-ritems">
<div class="e02-ri"><span>总收入（+10.1%）/ 成本</span><b>303,154 / 264,279</b></div>
<div class="e02-ri"><span>期末 存货 / 应付 / 递延会费</span><b>19,324 / 22,591 / 3,006</b></div>
<div class="e02-ri"><span>CF 营运资本三项合计</span><b class="e02-pos">+2,320</b></div>
<div class="e02-ri"><span>GAAP 净利润 → CFO</span><b>9,226 → 15,817</b></div>
</div>
</div>
<p class="e02-rnote">货还没给供应商结账平均就已卖空，叠加 30 亿美元预收会员费，扩张期反而多吐出现金。</p>
</div>
<div class="e02-rcard" style="--e02-c:#4d778f">
<div>
<div class="e02-rhead"><strong>Microsoft（MSFT）· FY2026</strong><small>截至 2026-06-30 · 预收云与订阅</small></div>
<div class="e02-pills">
<div class="e02-pill"><span>DSO</span><b>82.9 天</b></div>
<div class="e02-pill"><span>短期预收</span><b>75.6 天</b></div>
<div class="e02-pill"><span>存货</span><b>1,397M</b></div>
</div>
<div class="e02-ccc-tag e02-ccc-neg">短期未实现 72,965M · 核心负占资</div>
<div class="e02-ritems">
<div class="e02-ri"><span>总收入（+17.8%）/ 成本</span><b>331,839 / 106,374</b></div>
<div class="e02-ri"><span>期末 应收 / 短期未实现</span><b>80,876 / 72,965</b></div>
<div class="e02-ri"><span>CF 未实现＋应付 vs 应收</span><b class="e02-pos">+14,629 vs −12,737</b></div>
<div class="e02-ri"><span>GAAP 净利润 → CFO</span><b>133,749 → 182,935</b></div>
</div>
</div>
<p class="e02-rnote">客户年付预收稳住资金流；期末应付 42,416 含 26,700 数据中心设备款，不可直接算 DPO。</p>
</div>
</div>
<figcaption>三家数据均取自 SEC EDGAR FY2026 官方披露。COST 现金流“营运资本三项”为存货 −1,153、应付 +2,755 与其他经营资产负债 +718 之和；MSFT 现金流量表单独列出经营性应付变动 +5,268，已剥离非现金设备应付。</figcaption>
</figure>

先看 **NVDA**，高增速为何反而让经营现金流落后净利润 **173.5 亿美元**？[^nvda-fy26] 从 Hopper 向 Blackwell 整机架爬坡时，它得先向代工封测链垫付备货、再等云客户按账期回款，近百天正周期一口气抽走了 **236.3 亿美元**现金。NVDA 靠超过 55% 的净利率扛住了这笔占资；换成净利率 8% 的普通制造厂，同样增速和账期下经营现金流早已转负。

<span data-text-versions id="nb-e02-text-cost-wmt">另一端的 **COST** 走了相反的路径：门店几乎现款现结，精简 SKU 又把货架周转压得比上游账期还短，商品在结清供应商货款之前平均就已变成现金落袋，再叠加年付预收会员费，扩张期反而多吐出资金。[^cost-fy26] 这种结构在头部商超并不罕见——同为 FY2026，**Walmart**（WMT）的传统 CCC 也只有 **+3.2 天**，期末应付账款同样盖过存货<span data-text-detail>（WMT FY2026 总收入 713,163 M 美元，DSO 5.4 天、DIO 39.3 天、DPO 41.5 天，期末应付账款 63,061 M 美元高出期末存货 58,851 M 美元）</span>。[^wmt-fy26]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

到了 **MSFT** 这类企业软件与云平台，实物存货几乎可以忽略，负营运资本的主力换成了**预收／未实现收入**。[^msft-fy26] 企业多年度合同通常在年初一次性开票收款、再随服务按月滴入利润表；只要新签预收快于当期确认，递延收入就像一座水位持续抬升的蓄水池。[^msft-10k-fy26] 在[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/)拆过的 **Snowflake**（SNOW）身上，这座蓄水池甚至能在利润表大额亏损时撑出充沛现金流：[^snow-fy26]

<figure class="flow-figure e02-deferred-flow" id="nb-e02-deferred-flow-fig">
<div class="ff-head"><p class="ff-title">订阅预收的“蓄水池”：MSFT FY2026 递延收入流转与 SNOW 对照</p><span class="ff-sub">金额单位：M 美元（MSFT Form 10-K Note 12）· 只要新签预收快于履约确认，蓄水池就持续净流入现金</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="订阅预收蓄水池机制图解：上方展示 Microsoft（MSFT）FY2026 未实现收入蓄水池变动（单位 M 美元），左侧期初递延余额 67,265 加当年新签预收 +194,184 经两条曲线箭头注入中央未实现收入蓄水池，期末余额 75,712 M 美元（含短期 72,965 M 美元），现金流量表未实现收入变动带来净增现金流 +9,361 M 美元；右侧曲线箭头表示按月履约滴入利润表 −185,737 M 美元，并标明新签大于确认时现金快于利润、新签小于确认时现金先于利润失血。底部对照栏展示 Snowflake（SNOW）FY2026：零存货、全年 GAAP 净亏损 13.3 亿美元，靠 33.5 亿美元短期递延收入（占全年收入 71.5%，当年递延收入变动净增现金 +755.2 M 美元）撑出经营现金流 +12.2 亿美元。">
<svg viewBox="0 0 860 330" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e02-def-arr-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e02-def-arr-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="330" rx="8" fill="#fafaf6"/>
  <!-- Top Header -->
  <text x="18" y="27" font-size="12.5" font-weight="700" fill="#1d2a25">Microsoft（MSFT）FY2026 未实现收入蓄水池（Note 12）</text>
  <text x="842" y="27" text-anchor="end" font-size="11" fill="#66736c">期末 75,712 ＝ 期初 67,265 ＋ 新签 194,184 − 确认 185,737</text>
  <!-- Left Column: Beginning Balance + New Billings -->
  <rect x="18" y="40" width="220" height="82" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <text x="128" y="61" text-anchor="middle" font-size="11.5" font-weight="600" fill="#5d6b64">期初递延余额（FY25 末）</text>
  <text x="128" y="88" text-anchor="middle" font-size="17" font-weight="700" fill="#1d2a25">67,265 M 美元</text>
  <text x="128" y="109" text-anchor="middle" font-size="10.2" fill="#66736c">上年已收款、待本年履约存量</text>
  <rect x="18" y="136" width="220" height="106" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.3"/>
  <text x="128" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#1f5c4e">当年新签预收（进水口）</text>
  <rect x="34" y="168" width="188" height="28" rx="6" fill="#e2ede7"/>
  <text x="128" y="187" text-anchor="middle" font-size="15.5" font-weight="700" fill="#1f5c4e">+194,184 M 美元</text>
  <text x="128" y="213" text-anchor="middle" font-size="10.2" fill="#5d6b64">企业合同年初一次开票收款</text>
  <text x="128" y="229" text-anchor="middle" font-size="10.2" font-weight="600" fill="#23695a">现金先落袋，持续抬高水位</text>
  <!-- Left to Center Curved Bezier Arrows -->
  <path d="M238,81 C266,81 266,104 294,104" fill="none" stroke="#8aa198" stroke-width="1.8" stroke-dasharray="4,3" marker-end="url(#e02-def-arr-sage)"/>
  <text x="266" y="73" text-anchor="middle" font-size="10" font-weight="600" fill="#5d6b64">滚存</text>
  <path d="M238,188 C266,188 266,166 294,166" fill="none" stroke="#23695a" stroke-width="2.3" marker-end="url(#e02-def-arr-sage)"/>
  <text x="266" y="206" text-anchor="middle" font-size="10" font-weight="600" fill="#1f5c4e">注水</text>
  <!-- Center Column: Reservoir Card -->
  <rect x="298" y="40" width="264" height="202" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <rect x="299" y="41" width="262" height="31" rx="9" fill="#eef6f2"/>
  <rect x="299" y="63" width="262" height="9" fill="#eef6f2"/>
  <line x1="299" y1="72" x2="561" y2="72" stroke="#d2e4db" stroke-width="1"/>
  <text x="430" y="61" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1f5c4e">资产负债表 · 未实现收入蓄水池</text>
  <!-- Visual Water Tank -->
  <rect x="316" y="83" width="228" height="92" rx="8" fill="#f7faf8" stroke="#b3d3c4" stroke-width="1.2"/>
  <rect x="317" y="106" width="226" height="17" fill="#d3e6dc"/>
  <rect x="317" y="123" width="226" height="51" rx="6" fill="#e2ede7"/>
  <rect x="317" y="123" width="226" height="10" fill="#e2ede7"/>
  <line x1="317" y1="123" x2="543" y2="123" stroke="#6aa08b" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="430" y="100" text-anchor="middle" font-size="10.2" fill="#5d6b64">期末蓄水池余额（含短期 72,965）</text>
  <text x="430" y="146" text-anchor="middle" font-size="20" font-weight="700" fill="#1d2a25">75,712 M 美元</text>
  <text x="430" y="166" text-anchor="middle" font-size="10.2" font-weight="600" fill="#1f5c4e">进水快于出水 · 免息合同负债扩容</text>
  <!-- Cash Flow Net Impact Badge -->
  <rect x="316" y="185" width="228" height="46" rx="7" fill="#e2ede7" stroke="#9ec4b2" stroke-width="1"/>
  <text x="430" y="203" text-anchor="middle" font-size="10" fill="#1f5c4e">现金流量表 · 未实现收入变动调节</text>
  <text x="430" y="222" text-anchor="middle" font-size="13" font-weight="700" fill="#1f5c4e">净增现金流 +9,361 M 美元</text>
  <!-- Center to Right Curved Bezier Arrow -->
  <path d="M562,106 C586,93 596,93 618,106" fill="none" stroke="#a8743f" stroke-width="2.3" marker-end="url(#e02-def-arr-amber)"/>
  <text x="590" y="86" text-anchor="middle" font-size="10" font-weight="600" fill="#8d5520">按月履约</text>
  <!-- Right Column: Income Statement Outflow + Threshold Card -->
  <rect x="622" y="40" width="220" height="124" rx="10" fill="#ffffff" stroke="#e4c59e" stroke-width="1.3"/>
  <text x="732" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#8d5520">滴入利润表（出水口）</text>
  <rect x="638" y="73" width="188" height="28" rx="6" fill="#f4e5d2"/>
  <text x="732" y="92" text-anchor="middle" font-size="15.5" font-weight="700" fill="#8d5520">−185,737 M 美元</text>
  <text x="732" y="119" text-anchor="middle" font-size="10.2" fill="#5d6b64">按月履约逐步确认为营业收入</text>
  <text x="732" y="136" text-anchor="middle" font-size="10.2" fill="#5d6b64">仅释放此前已收款，不再进现</text>
  <text x="732" y="153" text-anchor="middle" font-size="10" fill="#8d5520">确认节奏滞后于现金收款</text>
  <rect x="622" y="176" width="220" height="66" rx="10" fill="#fdf6ec" stroke="#e4c59e" stroke-width="1.1"/>
  <text x="732" y="196" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">顺风与逆风分界</text>
  <text x="732" y="214" text-anchor="middle" font-size="10.2" font-weight="600" fill="#1f5c4e">新签 ＞ 确认 → 现金快于利润</text>
  <text x="732" y="231" text-anchor="middle" font-size="10.2" font-weight="600" fill="#8d5520">新签 ＜ 确认 → 现金先于利润失血</text>
  <!-- Bottom Contrast Callout: SNOW FY26 -->
  <rect x="18" y="256" width="824" height="62" rx="9" fill="#eef6f2" stroke="#b3d3c4" stroke-width="1.1"/>
  <rect x="30" y="269" width="128" height="36" rx="6" fill="#23695a"/>
  <text x="94" y="284" text-anchor="middle" font-size="10" fill="#e2ede7">纯预收样本对照</text>
  <text x="94" y="299" text-anchor="middle" font-size="11.5" font-weight="700" fill="#ffffff">SNOW FY2026</text>
  <text x="174" y="282" font-size="12" font-weight="700" fill="#1d2a25">GAAP 净亏 13.3 亿美元，靠 33.5 亿美元递延收入（占收入 71.5%）撑出 CFO +12.2 亿美元</text>
  <text x="174" y="303" font-size="10.5" fill="#4f5f58">零存货、全年递延收入单一项净增现金 +755.2 M 美元——利润表尚在亏损，预收蓄水池已能托起强正经营现金流。</text>
</svg>
</div>
<figcaption>MSFT FY2026 未实现收入期末合计 75,712 M 美元（资产负债表短期 72,965 加长期部分），受汇率折算影响，现金流量表未实现收入变动项为 +9,361 M 美元；SNOW FY2026 收入 4,683.9 M 美元、GAAP 净亏损 −1,329.0 M 美元、短期递延收入 3,347.0 M 美元、CFO +1,221.9 M 美元。</figcaption>
</figure>

<span data-text-versions id="nb-e02-text-footnotes">不过读科技与软件大厂的营运资本时，不能把资产负债表余额直接塞进周转天数公式，得先翻开附注排掉三颗雷：应付账款里可能混着买服务器建数据中心的资本开支，财年末集中续约开票会暂时拉高表观 DSO，高增长公司按期末余额与均值算出的天数也会差出一大截<span data-text-detail>（第一，**资本开支混入应付账款**：MSFT FY2026 期末应付账款 42,416 M 美元中，Note 6 披露有 **267 亿美元**（占 63%）属于尚未结算的服务器与数据中心固定资产采购，直接除以营业成本会算出失真的 145 天 DPO，剔除后经营性应付仅约 157 亿美元。第二，**财年末集中续约开票**：MSFT 企业客户习惯在 6 月末第四财季集中签单开票，同时推高应收（80,876 M 美元）与短期未实现收入（72,965 M 美元）；到了 FY2027 Q1（截至 2026-09-30），期末应收便回落至 62,084 M 美元，单季收回现金 **+17,104 M 美元**。第三，**高速增长下的期末与均值口径差**：NVDA FY2026 营收增 65.5%、Q4 单季达 68,127 M 美元，拿全年收入去除期末余额算出的 DSO（65.0 天）和 DIO（125.0 天）明显高于期初期末平均口径的 52.0 天与 92.0 天，横纵向比较前应先统一口径）</span>。[^msft-q1fy27]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 退坡与周期反转：营运资本怎样从助力变成反噬 {#nb-e02-reversal-risk}

前面看到的都是顺风扩张期的画面。一旦行业退坡、客户砍单或周期急转，顺风期的资金引擎会突然调头，重备货和长账期也会从资产端暴露软肋：

<figure class="flow-figure e02-reversal" id="nb-e02-reversal-fig">
<div class="ff-head"><p class="ff-title">行业退坡时，两类营运资本结构的反噬路径</p><span class="ff-sub">顺风期的资金助推器在退坡时调头 · 重存货与长账期在骤停时面临跌价与坏账双击</span></div>
<div class="business-exchange" aria-label="行业退坡与周期反转时两类营运资本结构的反噬路径：路径一为负营运资本退坡（零售与预收软件），当销售或新签下滑时，新采购与新预收同步缩小，前期应付账款到期必须照付、旧预收继续按期摊销，导致应付账款或递延收入净减少，经营现金流比利润表更早失血，如 Target（TGT）FY2025 销售额微降 1.7%，清库存收回 436 M 美元被应付收缩流出 501 M 美元完全抵销。路径二为正营运资本与重存货反转（硬件与周期制造），当需求骤停、政策受限或大客户信用恶化时，积压存货叠加不可撤销采购协议、应收逾期拉长，被迫计提存货跌价与坏账准备，毛利与净利受创且原本预期的去库回血落空，如 NVIDIA（NVDA）Q1 FY2026 因 H20 出口限制单季计提 45 亿美元过剩存货与采购准备、FY2023 Q2 游戏下行期单季计提 13.4 亿美元令毛利率降至 43.5%。">
<div class="e02-lane">
<div class="e02-lhead"><strong>路径 A · 负营运资本退坡（高周转零售／预收软件）</strong><span>现金流往往先于利润表恶化</span></div>
<div class="e02-steps">
<div class="e02-step"><b>① 销售或新签放缓</b>门店客流下滑，或软件新签与续费低于当期确认收入。</div>
<div class="e02-step"><b>② 旧账照付、新信用缩水</b>前期欠供应商的应付到期结清；新进货与新收年费同步变小。</div>
<div class="e02-step e02-step-hit"><b>③ 现金反被倒抽</b>应付或预收净减直接扣减 CFO（如 TGT FY25：存货 +436M 被应付 −501M 抵销）。</div>
</div>
</div>
<div class="e02-lane e02-lane-warn">
<div class="e02-lhead"><strong>路径 B · 重存货与长账期反转（半导体／周期制造）</strong><span>跌价与坏账同时冲击利润表与现金</span></div>
<div class="e02-steps">
<div class="e02-step"><b>① 需求骤停或客户承压</b>下游砍单、架构换代或贸易限制打断销售，大客户账期趋紧。</div>
<div class="e02-step"><b>② 积压叠加刚性采购协议</b>仓库高价存货滞销、不可撤销代工承诺难取消，应收逾期拉长。</div>
<div class="e02-step e02-step-hit"><b>③ 减值砸穿毛利、回血落空</b>计提存货跌价与坏账准备（如 NVDA Q1 FY26 H20 减值 45 亿美元）。</div>
</div>
</div>
</div>
<figcaption>评估营运资本质量不能只看单年静态天数：扩张期核对是否过度占资，拐点期则须紧盯存货周转、应收增速是否快于收入，以及应付／递延收入是否开始净收缩。</figcaption>
</figure>

<span data-text-versions id="nb-e02-text-tgt-reversal">先看路径 A：负营运资本借来的钱不属于股东——旧货款到期要付，预收款也要按期履约。销售额稍一转弱，新采购缩水会让应付账款净减少，反手抽走清库存收回的现金：像上图里的 **Target**（TGT）FY2025，营收仅微降 **1.7%**，应付收缩就把去库回笼抵销干净<span data-text-detail>（TGT FY2025 净销售额由 106,566 降至 104,780 M 美元，主动压存货腾回 +436 M 美元，应付账款同步收缩却流出 −501 M 美元；而在 FY2024 扩张期，存货占用 −854 M 美元被应付扩张 +1,008 M 美元盖过，反而净赚 +154 M 美元现金）</span>。[^tgt-fy25] 预收软件同理：新签放缓时利润表靠旧递延摊销还能撑几季，现金流却会提前失血。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e02-text-inv-writedown">再看路径 B：不少人以为正营运资本在下滑期能靠“清存货＋收欠款”自动回血，但这只在货能原价卖掉时成立。需求骤停或政策受限时，滞销库存要计提**存货跌价准备**（Inventory Provisions），刚性采购协议也会追加损失——除了上图里 NVDA 的 H20 减值，FY2023 Q2 游戏显卡反转时它就曾单季计提 **13.4 亿美元**、把毛利率压至 **43.5%**<span data-text-detail>（NVDA FY2026 Q1 因美国对 H20 芯片加征出口许可限制，单季计提 45 亿美元过剩存货与采购准备，全年合计 72 亿美元，拉低全年 GAAP 毛利率 2.6 个百分点；FY2023 全年存货及相关准备合计 21.7 亿美元）</span>。[^nvda-fy26]<sup>，</sup>[^nvda-q2fy24]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e02-text-ar-baddebt">应收账款这一头同样如此。当 B2B 账期较长且客户高度集中时，下游资金链一旦趋紧，应收款就会面临展期甚至计提**坏账准备**（Allowance for Doubtful Accounts），利润表和现金流一起受伤——像 NVDA FY2026 期末仅前三大直接客户就占去全部应收账款的 **56%**<span data-text-detail>（分别占期末应收余额 38,466 M 美元的 25%、18% 与 13%，集中在少数大型云客户与系统集成商手中）</span>。[^nvda-fy26]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

拆清营运资本，从利润表净利润走到经营现金流（CFO）之间的短期错期就落到实处了。不过拿到 1,829 亿美元经营现金流的 MSFT，还要在下一栏投出 1,159 亿美元买服务器和建数据中心——这类跨越多年的长期资本开支怎样通过折旧进入利润表、又怎样改写股东可支配的自由现金流，下一篇[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)接着拆解。

<script src="/notebook/working-capital/ui.js?v=20261127b" defer></script>

[^nvda-fy26]: NVIDIA Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)（2026-02-25 提交，截至 2026-01-25），三张主表、MD&A（H20 45 亿美元准备及全年 72 亿美元存货与采购准备）与 Note 9（前三大直接客户占应收余额 25%、18%、13%）。
[^cost-fy26]: Costco Wholesale Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/909832/000090983226000093/cost-20260830.htm)（2026-10-07 提交，52 周截至 2026-08-30），Consolidated Statements of Income、Balance Sheets 与 Cash Flows。
[^wmt-fy26]: Walmart Inc.，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm)（2026-03-13 提交，截至 2026-01-31），Consolidated Statements of Income、Balance Sheets 与 Cash Flows。
[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)（2026-07-29，截至 2026-06-30），Income Statements、Balance Sheets 与 Cash Flows Statements。
[^msft-10k-fy26]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)（2026-07-29 提交），Note 6（应付账款中含 267 亿美元固定资产资本开支采购）与 Note 12（未实现收入全年变动表）。
[^snow-fy26]: Snowflake Inc.，[FY2026 Q4 及全财年业绩公告（EX-99.1，截至 2026-01-31）](https://www.sec.gov/Archives/edgar/data/1640147/000162828026011631/fy2026q4earnings.htm)（2026-02-25 发布；对应经审计 Form 10-K 于 2026-03-20 提交），三张主表。
[^msft-q1fy27]: Microsoft Corporation，[FY2027 Q1 Form 10-Q](https://www.sec.gov/Archives/edgar/data/789019/000119312526436133/msft-20260930.htm)（截至 2026-09-30），Balance Sheets 与 Cash Flows Statements（应收由 80,876 降至 62,084、单季应收现金流入 +17,104 M 美元）。
[^tgt-fy25]: Target Corporation，[FY2025 全年业绩公告（EX-99.1，截至 2026-01-31）](https://www.sec.gov/Archives/edgar/data/27419/000002741926000012/a2025q4ex-99.htm)（2026-03-03 发布），Consolidated Statements of Operations、Financial Position 与 Cash Flows。
[^nvda-q2fy24]: NVIDIA Corporation，[FY2024 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1045810/000104581023000175/nvda-20230730.htm)（截至 2023-07-30），MD&A Gross Margin 与 Note 10（FY2023 Q2 计提 13.4 亿美元存货及相关准备、毛利率降至 43.5%）。
