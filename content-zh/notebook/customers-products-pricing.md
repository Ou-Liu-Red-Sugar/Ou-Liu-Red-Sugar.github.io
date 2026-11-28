{
  "title": "客户、产品与收费方式",
  "description": "从客户付款和企业交付认清一门生意，选择行业继续拆解业务，再沿上下游、具体订单与企业研报核验需求。",
  "layout": "entry",
  "notebookid": "zh-customers-products-pricing",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-customers-products-pricing"
}

客户掏钱，买走的可能是一双鞋、一段时间的算力，也可能是一份保单。卖商品要把货交到手上，做云服务要持续供电机房，保险公司则要在合同期内背负未来的赔付义务。研究一家公司时，先要看懂它做的究竟是哪些生意：客户买到了什么，公司为此要交付什么，钱又按什么方式进账。

前面的笔记一直站在持有人视角看股票、成交与组合；真要决定该持有哪些公司，还得往财报背后走一步，回到真实的交易现场。客户为什么愿意花钱、订单增多到底说明需求变旺还是渠道备货，答案都在具体交易与收费结构里。

## 使用者、采购者与付款者 {#nb-d01-business}

看清客户买到了什么，接着要分清三个角色：谁在用、谁拍板买，又是谁真正买单。个人买鞋时三者合一；企业采购办公软件时，每天点鼠标的员工和签合同付款的公司已经分开；到了美国医疗市场，患者、医生／医院和保险／政府项目进一步拆成三方。

<figure class="flow-figure g4-role-split" id="nb-d01-role-split">
<div class="ff-head"><p class="ff-title">三种交易里，使用、采购与付款怎样拆开</p><span class="ff-sub">角色拆得越细，核对需求时要查的账也越多</span></div>
<div class="g4-rs-grid business-exchange" aria-label="三种常见交易的角色拆分对照：个人买鞋时，消费者本人同时承担使用、采购决策与付款三项角色；企业购买办公软件时，员工日常使用，企业负责选型采购与付款；美国医疗诊疗中，患者接受诊疗，医生与医疗机构参与选方案并采购药械，费用由患者自付、商业保险与政府项目共同承担。">
<span class="g4-rs-corner"></span>
<div class="g4-rs-col">谁在使用<small>实际消耗或体验</small></div>
<div class="g4-rs-col">谁决定采购<small>选型、下单或开方</small></div>
<div class="g4-rs-col">谁掏钱付款<small>最终承担账单</small></div>
<div class="g4-rs-scene">个人买鞋<small>三者合一</small></div>
<div class="g4-rs-span g4-rs-all"><strong>消费者本人</strong><small>自己挑款式、自己穿、自己付钱</small></div>
<div class="g4-rs-scene">企业办公软件<small>用与买分开</small></div>
<div class="g4-rs-span g4-rs-use"><strong>员工</strong><small>日常使用软件</small></div>
<div class="g4-rs-span g4-rs-buy-pay"><strong>企业</strong><small>评估选型、签合同并付款</small></div>
<div class="g4-rs-scene">美国医疗诊疗<small>三方拆分</small></div>
<div class="g4-rs-span g4-rs-use"><strong>患者</strong><small>接受诊疗服务</small></div>
<div class="g4-rs-span"><strong>医生与医疗机构</strong><small>参与选方案、采购药械</small></div>
<div class="g4-rs-span g4-rs-pay"><strong>患者＋保险／政府</strong><small>按项目或合同共同买单</small></div>
</div>
<figcaption>角色拆开以后，使用者满意不等于采购方马上加单，采购方签了合同也不等于付款已经落袋；下面八个行业会沿着真实财报逐一拆解。</figcaption>
</figure>

哪怕是同一家公司，面对不同客户时，交付内容和赚钱位置也常常两样。下面可以先选一个熟悉的行业读起：每个分支都会拆开真实年报里的收费机制与利润来源，再指出最容易踩坑的需求核验节点；若想顺着某个行业继续深潜，可沿着专题入口延伸。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d01-consumer">

## 消费品与零售：商品、渠道与库存 {#nb-d01-consumer-story}

### 从品牌出货到会员利润引擎 {#nb-d01-consumer-channels}

同样是把实物商品交到消费者手里，渠道与收费结构不同，风险和利润的落点会彻底翻转。NIKE（NKE）主抓设计与营销，生产大多委托给独立制造商，再经由批发和 NIKE Direct 两条管道出货；Walmart（WMT）则在低价走量的商品零售之上，叠加了会员年费。[^nke]<sup>，</sup>[^wmt]

<figure class="flow-figure" id="nb-d01-consumer-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">消费品与零售：两种截然不同的赚钱结构（FY2025）</p><div class="ff-switch" role="group" aria-label="切换公司视图" hidden><button type="button" data-ff-view-choice="nke" aria-pressed="true">NKE 渠道双轨</button><button type="button" data-ff-view-choice="wmt" aria-pressed="false">Sam's Club 会员利润</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="nke" aria-label="NKE FY2025 品牌收入 447.1 亿美元拆分：批发占 57.9%（258.8 亿美元），交货后零售商承担库存与租金；NIKE Direct 直营占 42.0%（187.8 亿美元），品牌拿到全额零售价但自担门店与打折清库风险。集团毛利率 42.7%，期末自有存货 74.9 亿美元。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">NKE FY2025 品牌收入：447.1 亿美元</text>
  <text x="696" y="34" text-anchor="end" font-size="13" fill="#5e6d65">毛利率 42.7% · 自有存货 74.9 亿</text>
  <rect x="24" y="54" width="390" height="44" rx="7" fill="#23695a"/>
  <rect x="418" y="54" width="278" height="44" rx="7" fill="#a8743f"/>
  <text x="219" y="81" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">批发 258.8 亿（57.9%）</text>
  <text x="557" y="81" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">直营 187.8 亿（42.0%）</text>
  <line x1="219" y1="98" x2="219" y2="122" stroke="#23695a" stroke-width="1.5"/>
  <line x1="557" y1="98" x2="557" y2="122" stroke="#a8743f" stroke-width="1.5"/>
  <text x="219" y="142" text-anchor="middle" font-size="13" font-weight="600" fill="#23695a">零售商扛库存与门店成本</text>
  <text x="219" y="164" text-anchor="middle" font-size="12" fill="#5e6d65">风险：渠道压货不等于终端卖掉</text>
  <text x="557" y="142" text-anchor="middle" font-size="13" font-weight="600" fill="#8f6033">吃满零售价，自担门店与履约</text>
  <text x="557" y="164" text-anchor="middle" font-size="12" fill="#5e6d65">风险：打折清库直接砸毛利率</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="wmt" hidden aria-label="WMT Sam's Club FY2025 利润构成瀑布：商品净销售 902 亿美元带来毛利 102.0 亿，扣除门店运营费 101.2 亿后卖货仅剩 0.8 亿美元；会员及其他收入 23.2 亿美元撑起 24.0 亿美元分部营业利润的约 97%。">
<svg viewBox="0 0 720 205" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="32" font-size="14" font-weight="700" fill="#22392f">Sam's Club FY2025：利润从哪来</text>
  <text x="696" y="32" text-anchor="end" font-size="12.5" fill="#5e6d65">商品净销售 902 亿美元</text>
  <text x="24" y="70" font-size="13" fill="#3c4c44">商品毛利（11.3%）</text>
  <rect x="180" y="54" width="380" height="24" rx="4" fill="#6b9f8c"/>
  <text x="574" y="71" font-size="13.5" font-weight="700" fill="#22392f">+102.0 亿</text>
  <text x="24" y="106" font-size="13" fill="#3c4c44">门店运营费（11.2%）</text>
  <rect x="180" y="90" width="376" height="24" rx="4" fill="#c98878"/>
  <text x="574" y="107" font-size="13.5" font-weight="700" fill="#b5483a">−101.2 亿</text>
  <text x="24" y="142" font-size="13" fill="#5e6d65">卖货净留存</text>
  <rect x="180" y="126" width="6" height="24" rx="2" fill="#7a8780"/>
  <text x="200" y="143" font-size="13" font-weight="600" fill="#5e6d65">仅 0.8 亿美元（几乎打平）</text>
  <text x="24" y="180" font-size="13.5" font-weight="700" fill="#8f6033">会员及其他收入</text>
  <rect x="180" y="164" width="90" height="24" rx="4" fill="#a8743f"/>
  <text x="284" y="181" font-size="14" font-weight="700" fill="#8f6033">+23.2 亿（占营业利润 97%）</text>
</svg>
</div>
<figcaption>点击上方标签切换对比。数据来自 NKE 与 WMT FY2025 Form 10-K（NKE Global Brand Divisions 48 M 美元未单绘；Sam's Club 年费为 Club 50 美元／Plus 110 美元）。</figcaption>
</figure>

拆开看 NKE，批发与直营的差别不只在“谁跟顾客打交道”。走批发时，货一交付控制权就转给零售商，后者自行承担门店租金与压货风险，品牌也相应让出一截零售毛利；走直营时，NKE 拿到全额零售价，却得自己背负门店、电商配送与打折清库的成本。<span data-text-versions id="nb-d01-consumer-text-1">发票标价还要扣除预计退货、促销折让与渠道补贴，才是品牌账上确认的净对价<span data-text-detail>（退货权、季节性折扣和账期条款既改变品牌净收入，也改变存货与回款风险在品牌方和渠道商之间的切分；NKE FY2025 集团总收入为 463.1 亿美元，除 NIKE Brand 外还包含 Converse 与公司总部项）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

切换到 Sam's Club 视图，能看到零售业另一种收费逻辑。仓储会员店把商品毛利率压到极薄，卖货本身扣完门店费用几乎不留利润，真正撑起分部盈利的是续费稳定的年度会员费。顾客一次结账同时牵动两笔交易：带走的商品即时确认收入，缴的年费则按会员服务期逐月分摊；若第三方商家再借沃尔玛平台开店卖货，又会多出一层商家服务费，留待“互联网平台与广告”展开。

### 从订单追到实际需求 {#nb-d01-consumer-demand}

研究消费品牌时，最常见的误判是把**渠道进货（Sell-in）**当成**终端卖掉（Sell-through）**。经销商多下单，既可能是货架卖空后的良性补货，也可能只是提前备货；一旦货只是从品牌仓搬进渠道仓，终端并未走量，随后就会被迫给渠道贴折扣、收退货，反噬品牌毛利率。

实操核对时，Agent 可以先把品牌方的批发收入与自有存货并排对照（例如 NKE FY2025 收入下滑 10% 而期末存货仍居高位），再沿着已知合作关系去查下游零售商的库存周转天数与同店动销。看直营和零售商时，则直接把全价销售比例、促销折扣深度与会员续费率拆开，辨认客流究竟是靠产品力拉动，还是靠让利换量。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d01-software">

## 软件与云服务：使用、许可与账单 {#nb-d01-software-story}

### 席位订阅与资源用量两条管道 {#nb-d01-software-contracts}

企业买软件和云服务，表面都是按期付钱，背后却分成两套完全不同的计量逻辑。Microsoft（MSFT）的 Microsoft 365 商业订阅按**付费席位与套餐档位**收费：员工总数、企业实际买下的许可数，以及续约时是否加购 E5 或 Copilot 高阶功能，三者彼此独立。[^msft]<sup>，</sup>[^msft-fy26]

Amazon（AMZN）的 AWS 与 Snowflake（SNOW）则按**实际消耗的底层资源**计费。云厂商先砸重金建机房、拉电力、装服务器，再按实例运行秒数、对象存储 GB-月或计算集群消耗的 Credit 逐笔算账，并常叠加长期消费承诺以换取单价折扣。[^aws]<sup>，</sup>[^amzn-fy25]

<figure class="flow-figure" id="nb-d01-software-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">软件与云服务：席位订阅与资源用量两条计费管道</p><div class="ff-switch" role="group" aria-label="切换计费模式" hidden><button type="button" data-ff-view-choice="seat" aria-pressed="true">席位订阅 · MSFT</button><button type="button" data-ff-view-choice="usage" aria-pressed="false">资源用量 · AWS</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="seat" aria-label="MSFT M365 商业订阅三步流向：企业先按付费席位与套餐档位采购（FY2026 席位增 6%、云收入增 17%），预收年费进入递延收入（PBP 达 579 亿美元），再随服务期按月确认收入（FY2026 达 1,020 亿美元，商业 RPO 6,780 亿）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-sw-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">1. 付费席位 × 档位</text>
  <text x="118" y="94" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">席位 +6%</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">E5／Copilot 推高单价</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-sw-s)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#22392f">2. 预收年费入递延</text>
  <text x="360" y="94" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">579 亿美元</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">PBP 递延 · RPO 6,780 亿</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-sw-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#e5efe9">3. 按月确认收入</text>
  <text x="602" y="94" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">1,020 亿美元</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#d7e8df">FY26 M365 商业云 +17%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="usage" hidden aria-label="AMZN AWS 资源用量三步流向：先前置重资本建机房与签电力（AMZN 2025 资本开支 1,318 亿美元），再按秒级算力与 GB-月计量消耗，形成 1,287 亿美元营收（营业利润率 35.4%）与 2,440 亿美元长期 RPO（平均剩余 4.1 年）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-sw-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#8f6033">1. 前置机房与电力</text>
  <text x="118" y="94" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">1,318 亿美元</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">AMZN 2025 资本开支</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-sw-a)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#22392f">2. 按表计量消耗</text>
  <text x="360" y="94" text-anchor="middle" font-size="15" font-weight="700" fill="#22392f">秒级算力 · GB-月</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">叠加长期承诺享折扣</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-sw-a)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#a8743f"/>
  <text x="602" y="64" text-anchor="middle" font-size="13.5" font-weight="700" fill="#f9efe3">3. 营收与在手 RPO</text>
  <text x="602" y="94" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">1,287 亿美元</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#f5e6d3">利润率 35.4% · RPO 2,440 亿</text>
</svg>
</div>
<figcaption>点击切换两种计费模型。数据来自 MSFT FY2026 Form 10-K 与 AMZN FY2025 Form 10-K（AWS 长期 RPO 平均剩余期限 4.1 年）。</figcaption>
</figure>

<span data-text-versions id="nb-d01-software-text-1">两种模式在现金流与收入确认上的时间差也各不相同<span data-text-detail>（本地软件许可与持续升级支持可在同一企业协议下分别确认；云订阅通常预收年费并先计入递延收入，随后按月摊销。在微软 MCA 账单账户下，减少席位受购买或续订后 7 日窗口约束，窗口外通常要等下一次续约才生效）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span><span data-text-versions id="nb-d01-software-text-2">看云厂商的长期合同承诺（RPO）时，也要把签约额与实际消耗区分开<span data-text-detail>（以 AWS 一年期无预付 Compute Savings Plan 为例，客户承诺每小时最低美元消费以换取优惠费率，未用满仍须按小时保底付款，但该计划本身不预留物理容量，也不覆盖 S3 存储等其他服务；RPO 何时转成当期收入，最终仍取决于客户工作负载何时真实跑起来）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 把客户需求与供给条件接起来 {#nb-d01-software-demand}

听到“大客户在削减 IT 成本”，不要立刻推导出云厂商要丢单。Netflix（NFLX）与 AWS 工程师公开的案例里，NFLX 把原本部署在 AWS EC2 上自管的一批关系型数据库迁往 Aurora 托管服务，以此压缩软件许可与人工运维负担；省下来的开支有一部分来自自管环节，工作负载依然留在 AWS 账上。[^netflix]

反过来，就算客户签下巨额算力承诺，云商也要先解决物理交付瓶口。Talen Energy（TLN）在 2025 年宣布与 AMZN 扩展核电供电协议，约定供电量随输电改造分阶段爬坡，并在 2026 Q2 季报中确认修订协议已于 2026 年 4 月完成结构转换。[^talen]这类重资产供给决定着在手 RPO 究竟能多快变成可用机柜。

英国竞争与市场管理局（CMA）在 2025 年云市场报告里，把客户云支出变动拆成四股力量：存量应用用量起伏、成本优化、旧系统迁移与新增工作负载。[^cma]Agent 核对软件与云需求时，应顺着这四条线索分别查证：老负载是在缩减还是只是换了更高效的云产品、新增 AI 或数据任务落在了哪家云商，以及配套的机房电力与芯片上架有没有按期兑现。

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d01-platform">

## 互联网平台与广告：参与者与付款关系 {#nb-d01-platform-story}

### 同一笔交易里的不同收费层 {#nb-d01-platform-participants}

看互联网平台，第一道门槛是把**平台流经的交易额**和**平台自己赚到的服务费**彻底剥离。在 Amazon（AMZN）上买一件商品，若来自自营（1P），平台先买断货再转卖，账上记入全额商品价款；若来自第三方店铺（3P），货款属于商家，AMZN 只按品类佣金、FBA 履约件数与按立方英尺计量的仓储体积收服务费，商家若另投站内竞价广告，则再单计一笔广告收入。[^seller]<sup>，</sup>[^amzn-fy25]

广告平台又把另一群付款者接入了流量池。Alphabet（GOOGL／GOOG）用搜索和 YouTube 聚拢用户，向广告主按点击或展示收费；当广告投放到合作方网站和应用（Google Network）或依赖终端预装分销时，平台要向合作方支付大笔流量获取成本（TAC）。此外，YouTube 会员与 Google One 属于用户直接买单的订阅服务，与广告共用基础设施却对应不同的付费对象。[^alphabet]

<figure class="flow-figure" id="nb-d01-platform-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">互联网平台与广告：电商分账口径与广告获客闭环（2025）</p><div class="ff-switch" role="group" aria-label="切换平台视图" hidden><button type="button" data-ff-view-choice="amzn" aria-pressed="true">AMZN 三口径分账</button><button type="button" data-ff-view-choice="ad" aria-pressed="false">BKNG → GOOGL 资金链</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="amzn" aria-label="AMZN 2025 三种零售相关收入口径对照：1P 线上自营按商品全额入账 2,693 亿美元，3P 第三方卖家服务仅按佣金与 FBA 履约仓储入账 1,722 亿美元，站内广告服务单独入账 686 亿美元（+22.1%）。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">AMZN 2025：同一购物页背后的三种记账口径</text>
  <text x="24" y="76" font-size="13" font-weight="600" fill="#22392f">1P 自营（商品全额）</text>
  <rect x="196" y="58" width="380" height="26" rx="5" fill="#6b9f8c"/>
  <text x="588" y="76" font-size="14" font-weight="700" fill="#22392f">2,693 亿</text>
  <text x="24" y="118" font-size="13" font-weight="600" fill="#23695a">3P 服务（佣金＋FBA）</text>
  <rect x="196" y="100" width="243" height="26" rx="5" fill="#23695a"/>
  <text x="451" y="118" font-size="14" font-weight="700" fill="#23695a">1,722 亿</text>
  <text x="24" y="160" font-size="13" font-weight="600" fill="#8f6033">广告服务（竞价点击）</text>
  <rect x="196" y="142" width="97" height="26" rx="5" fill="#a8743f"/>
  <text x="305" y="160" font-size="14" font-weight="700" fill="#8f6033">686 亿（+22.1%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="ad" hidden aria-label="2025 年 BKNG 与 GOOGL 广告资金传导：BKNG 总预订额 1,861 亿美元经 14.5% 变现率形成 269 亿收入，其中 30.4%（81.9 亿）投向营销获客；GOOGL 广告总收入 2,947 亿美元（Search 2,245 亿），需扣除 599 亿美元流量获取成本 TAC（20.3%）。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-pl-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker></defs>
  <rect x="16" y="38" width="146" height="100" rx="9" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="89" y="66" text-anchor="middle" font-size="12.5" fill="#5e6d65">BKNG 总预订</text>
  <text x="89" y="96" text-anchor="middle" font-size="17" font-weight="700" fill="#22392f">1,861 亿</text>
  <text x="89" y="122" text-anchor="middle" font-size="12" fill="#8f6033">变现率 14.5%</text>
  <line x1="162" y1="88" x2="188" y2="88" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-pl-a)"/>
  <rect x="194" y="38" width="146" height="100" rx="9" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="267" y="66" text-anchor="middle" font-size="12.5" fill="#8f6033">BKNG 收入</text>
  <text x="267" y="96" text-anchor="middle" font-size="17" font-weight="700" fill="#22392f">269.2 亿</text>
  <text x="267" y="122" text-anchor="middle" font-size="12" fill="#b5483a">30.4% 做营销</text>
  <line x1="340" y1="88" x2="366" y2="88" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-pl-a)"/>
  <rect x="372" y="38" width="136" height="100" rx="9" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="440" y="66" text-anchor="middle" font-size="12.5" fill="#b5483a">营销获客支出</text>
  <text x="440" y="96" text-anchor="middle" font-size="17" font-weight="700" fill="#b5483a">81.9 亿</text>
  <text x="440" y="122" text-anchor="middle" font-size="12" fill="#5e6d65">主投搜索引擎</text>
  <line x1="508" y1="88" x2="534" y2="88" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-pl-a)"/>
  <rect x="540" y="38" width="164" height="100" rx="9" fill="#23695a"/>
  <text x="622" y="66" text-anchor="middle" font-size="12.5" fill="#e5efe9">GOOGL 广告盘</text>
  <text x="622" y="96" text-anchor="middle" font-size="17" font-weight="700" fill="#ffffff">2,947 亿</text>
  <text x="622" y="122" text-anchor="middle" font-size="12" fill="#f5e6d3">扣 TAC 599 亿</text>
</svg>
</div>
<figcaption>点击切换电商与广告视角。数据来自 AMZN、BKNG 与 GOOGL 2025 Form 10-K（BKNG 营销费投向含 Google 在内的多渠道）。</figcaption>
</figure>

<span data-text-versions id="nb-d01-platform-text-1">商家把货放进 FBA 仓库，并不代表平台买下了这批货<span data-text-detail>（AMZN 负责拣货、包装、配送与相关退换货支持，但卖家仍是法定记录卖方；商品滞销未售出时，仓储体积费依然按月发生，因此平台收费不能简单折算成统一成交抽成率。GOOGL 的 Network 广告通常按总额确认收入，合作方分成单独记入营业成本中的 TAC）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 沿广告主的生意验证需求 {#nb-d01-platform-demand}

广告平台能不能持续加价，最终受制于广告主的获客回报（ROAS）。Booking Holdings（BKNG）在年报里明确把搜索引擎（尤其是 Google）列为主要获客渠道，同时强调点击单价、流量转化为预订的效率以及订单取消率共同决定营销投入划不划算。[^bkng]

顺着资金链往回看，这里有一个直接的交叉核验抓手：BKNG 每年把超过三成的收入砸进营销，换回总预订额和 14.5% 的综合抽成。Agent 评估 GOOGL 或电商站内广告的需求韧性时，不应只盯平台自己的广告增速，而应顺着采买链去读 BKNG 等核心广告主的财报——一旦广告主单客获客成本攀升、退订率抬头或开始转向直接流量，平台广告的提价空间就会先承压。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d01-semiconductor">

## 半导体与硬件：生产、交付与使用 {#nb-d01-semiconductor-story}

### 四层产业链的分工与交付单位 {#nb-d01-semiconductor-production}

AI 算力热潮里，大家常把云厂、芯片设计商、晶圆代工厂和光刻机厂商笼统归为“算力板块”，但它们卖的东西、面对的买方和资本密度完全不在同一层。NVIDIA（NVDA）交付的对象既可能是单颗 GPU，也可能是包含 8 颗芯片、CPU、高速互联与网络模块的整台系统或整柜方案，且大量产品先卖给整机代工（ODM）与系统集成商，再装进云厂机房。[^nvda]

再往上游走，TSMC（TSM／2330）按客户图纸提供纯晶圆代工与 CoWoS 先进封装，自己承担数百亿美元的建厂与折旧；ASML Holding（ASML）则向晶圆厂交付光刻系统并赚取装机后的长期升级与维保费。<span data-text-versions id="nb-d01-semiconductor-text-1">每一层的统计单位与验收节点都不同<span data-text-detail>（TSM 为美股存托凭证代码，2330 为台湾上市普通股代码；TSMC 公开出货以 12 英寸等效晶圆汇总，不代表所有客户都按单一晶圆价结算。ASML 成熟设备满足工厂验收条件后可在交付时确认收入，新产品则常需完成现场安装与现场验收）</span>。[^tsmc]<sup>，</sup>[^tsm-20f]<sup>，</sup>[^asml]<sup>，</sup>[^asml-20f]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure" id="nb-d01-semi-chain">
<div class="ff-head"><p class="ff-title">半导体与硬件：算力资本开支的四层产业链分工（2025/2026）</p><span class="ff-sub">同一笔算力需求沿四层传导，严禁跨层重复加总</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="四层半导体产业链：终端云厂（如 AMZN 2025 资本开支 1,318 亿美元）向设计商 NVDA（FY2026 营收 2,159 亿、数据中心占 90%、前两大直接客户占 36%）采购芯片与整柜，上游由 TSM 纯代工与封装（2025 营收 3.81 万亿新台币、HPC 占 58%、CapEx 409 亿），最上游由 ASML 交付光刻系统（2025 营收 327 亿欧元，装机服务占 25%）。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-sm-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="14" y="28" width="154" height="122" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="91" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="#5e6d65">终端云厂</text>
  <text x="91" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#8f6033">1,318 亿</text>
  <text x="91" y="112" text-anchor="middle" font-size="12" fill="#3c4c44">AMZN 年 CapEx</text>
  <text x="91" y="134" text-anchor="middle" font-size="12" fill="#5e6d65">自研＋外购并行</text>
  <line x1="168" y1="89" x2="192" y2="89" stroke="#23695a" stroke-width="2" marker-end="url(#d01-sm-s)"/>
  <rect x="198" y="28" width="154" height="122" rx="10" fill="#f3f8f4" stroke="#23695a" stroke-width="1.4"/>
  <text x="275" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="#23695a">设计 · NVDA</text>
  <text x="275" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">2,159 亿</text>
  <text x="275" y="112" text-anchor="middle" font-size="12" fill="#3c4c44">数据中心 89.7%</text>
  <text x="275" y="134" text-anchor="middle" font-size="12" fill="#b5483a">前 2 客户占 36%</text>
  <line x1="352" y1="89" x2="376" y2="89" stroke="#23695a" stroke-width="2" marker-end="url(#d01-sm-s)"/>
  <rect x="382" y="28" width="154" height="122" rx="10" fill="#f7faf8" stroke="#c8dad0" stroke-width="1.3"/>
  <text x="459" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="#23695a">代工 · TSM</text>
  <text x="459" y="88" text-anchor="middle" font-size="15" font-weight="700" fill="#22392f">3.81 万亿台币</text>
  <text x="459" y="112" text-anchor="middle" font-size="12" fill="#3c4c44">HPC 58% · ≤7nm 74%</text>
  <text x="459" y="134" text-anchor="middle" font-size="12" fill="#5e6d65">CapEx 409 亿美元</text>
  <line x1="536" y1="89" x2="560" y2="89" stroke="#23695a" stroke-width="2" marker-end="url(#d01-sm-s)"/>
  <rect x="566" y="28" width="140" height="122" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="636" y="56" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8f6033">设备 · ASML</text>
  <text x="636" y="88" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">327 亿欧</text>
  <text x="636" y="112" text-anchor="middle" font-size="12" fill="#3c4c44">新系统 74.9%</text>
  <text x="636" y="134" text-anchor="middle" font-size="12" fill="#8f6033">装机服务 25.1%</text>
</svg>
</div>
<figcaption>数据来自 AMZN 2025 10-K、NVDA FY2026 10-K、TSM 2025 20-F 与 ASML 2025 20-F。四家公司仅作产业链层级对照，不代表单一独占合同。</figcaption>
</figure>

### 从终端使用追到新增采购 {#nb-d01-semiconductor-demand}

沿着这张产业链往上核对需求时，有两个极易忽略的缓冲垫。第一，**旧代硬件会继续服役**。CoreWeave（CRWV）管理层在 2026 年 8 月业绩会上透露，公司新签了一份延续到 2029 年的 A100 算力合同。[^coreweave]下游算力需求抬升时，客户可以先压榨存量集群利用率，未必立刻全部转为新代芯片采购。

第二，**同一家云厂的预算会在外购与自研间动态切分**。AMZN 在 2026 年 4 月业绩稿里既披露了自研 Trainium 芯片的规模投用，也同步公布了 2026 年起增配更多 NVDA GPU 的计划。[^aws-gpu]Agent 读到上游券商上调产能预测时（如 KGI 在 2025 年 10 月报告中基于当时客户规划上调 2026 年 CoWoS 需求并预判 2027 年紧缺）[^kgi]，要把研报里的条件假设拆成三道核验清单：终端云厂预算切给目标公司的份额有没有变、先进封装产能有没有如期开出，以及交出去的机柜有没有顺利通电上架。

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d01-industrial">

## 工业设备与工程服务：从安装到持续运行 {#nb-d01-industrial-story}

### 同一台设备，两段完全不同的利润生意 {#nb-d01-industrial-lifecycle}

工业设备最容易看走眼的地方，是盯着新设备销量涨跌，却漏掉了设备装好之后长达数十年的后市场现金流。Otis Worldwide（OTIS）先向开发商和总包交付新电梯并负责现场安装，等到大楼投用，真正掏钱买维保、维修和老化改造的客户换成了业主与物业管理方——而且 OTIS 同样承接其他品牌电梯的维保。[^otis]

大型工程服务则把设计、采购与施工捆成一纸长约。Fluor（FLR）按合同条款切分成本波动责任：**可报销合同**下客户实报合规成本加付服务费，**总价或最高限价合同**下承包商按固定封顶价交付全部工程，材料涨价或工期延误会直接穿透承包商的利润表。[^fluor]

<figure class="flow-figure" id="nb-d01-industrial-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">工业设备与工程服务：后市场利润翻转与合同风险切分（2025）</p><div class="ff-switch" role="group" aria-label="切换工业视角" hidden><button type="button" data-ff-view-choice="otis" aria-pressed="true">OTIS 利润翻转</button><button type="button" data-ff-view-choice="flr" aria-pressed="false">FLR 合同风险</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="otis" aria-label="OTIS 2025 收入与分部营业利润占比翻转：新设备占分部收入 34.6%（49.9 亿美元），却仅贡献分部营业利润 9.2%（2.4 亿美元、利润率 4.8%）；服务业务占收入 65.4%（94.4 亿美元），贡献了 90.8% 的分部营业利润（23.7 亿美元、利润率 25.1%）。">
<svg viewBox="0 0 720 185" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="13.5" font-weight="700" fill="#22392f">分部收入合计 144.3 亿美元</text>
  <rect x="24" y="46" width="232" height="36" rx="5" fill="#9fb2a8"/>
  <rect x="260" y="46" width="436" height="36" rx="5" fill="#23695a"/>
  <text x="140" y="69" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">新梯 34.6%（49.9 亿）</text>
  <text x="478" y="69" text-anchor="middle" font-size="13.5" font-weight="700" fill="#ffffff">服务 65.4%（94.4 亿 · 250 万台）</text>
  <text x="24" y="118" font-size="13.5" font-weight="700" fill="#22392f">分部营业利润合计 26.1 亿美元</text>
  <rect x="24" y="130" width="62" height="36" rx="5" fill="#9fb2a8"/>
  <rect x="90" y="130" width="606" height="36" rx="5" fill="#a8743f"/>
  <text x="55" y="153" text-anchor="middle" font-size="12" font-weight="700" fill="#ffffff">9.2%</text>
  <text x="393" y="153" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">服务占 90.8%（23.7 亿 · 25.1%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="flr" hidden aria-label="FLR 2025 年末在手订单 255.4 亿美元合同结构：可报销合同占 81%（207.1 亿），成本超支主要留在业主端；总价与最高限价合同占 19%（48.2 亿），成本超支直接冲击承包商利润（2025 年能源板块录得亏损 4.14 亿美元）。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">FLR 2025 年末在手订单：255.4 亿美元</text>
  <rect x="24" y="54" width="542" height="44" rx="6" fill="#23695a"/>
  <rect x="570" y="54" width="126" height="44" rx="6" fill="#b5483a"/>
  <text x="295" y="81" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">可报销合同 81%（207.1 亿）</text>
  <text x="633" y="81" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">总价 19%</text>
  <text x="295" y="128" text-anchor="middle" font-size="13" font-weight="600" fill="#23695a">合规成本实报＋服务费，超支风险偏业主</text>
  <text x="605" y="128" text-anchor="middle" font-size="12.5" font-weight="600" fill="#b5483a">封顶价包干，超支自吞</text>
  <text x="605" y="150" text-anchor="middle" font-size="12" fill="#5e6d65">能源板块 2025 亏 4.14 亿</text>
</svg>
</div>
<figcaption>点击切换 OTIS 与 FLR 视图。数据来自两家公司 2025 Form 10-K（OTIS 利润合计未扣总部及重组费用）。</figcaption>
</figure>

OTIS 的利润翻转说明了工业龙头的核心估值锚：新电梯业务只赚不到 5% 的微利，真正把利润率拉到 25% 以上、贡献九成分部盈利的是装机存量池上的持续维保与改造。<span data-text-versions id="nb-d01-industrial-text-1">比较不同维保与工程合同时，必须回到具体覆盖范围<span data-text-detail>（电梯维保套餐从基础巡检到全包故障人工与大部件更换跨度极大，装机总量、在保台数和付费维保台数各有口径；工程合同除纯可报销与纯总价外，还有含范围变更、激励条款与索赔机制的混合合同，项目总投资额不等于承包商确认的收入）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 订单之后，紧盯履约与业主进度 {#nb-d01-industrial-demand}

签下大额工程订单只是起点，项目有没有开工、关键部件何时到场，才决定收入与现金流落在哪一年。GE Vernova（GEV）在 2023 年 11 月公告拿下业主 EnBW 的两座燃气轮机电站订单时，预计于 2026 年底投运；但对照业主 EnBW 公开的 Heilbronn 项目进度表（读取于 2026 年 9 月），商业投运时间已暂定顺延至 2027 年下半年。[^gev]

Agent 追踪工业与工程需求时，不能只拿签约总额线性外推：做工程承包要同步交叉比对总包方公告与背后业主的审批、资金和工期进度，同时紧盯总价合同占比有没有抬升；看电梯、航发或工控设备，则把新机转化率、维保续签率以及业主改造排期分开核对。

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d01-healthcare">

## 医药与医疗服务：采用、采购与支付 {#nb-d01-healthcare-story}

### 药械供货与医院诊疗是两笔独立交易 {#nb-d01-healthcare-delivery}

拆解美国医疗体系的钱从哪来，必须把**药械产品买卖**和**医院诊疗服务**彻底切开。Johnson & Johnson（JNJ）横跨高研发壁垒的创新药与医疗器械两条线，美国药品绝大部分先发给少数几家大型医药批发商，再由医院、诊所或药房用到患者身上；Intuitive Surgical（ISRG）的 da Vinci 手术机器人则跑出另一套“主机装机＋有限寿命配套器械＋年度维保”的复购账本。[^jnj]<sup>，</sup>[^isrg]

HCA Healthcare（HCA）经营医院与门诊网络，赚的是组织医护、床位与耗材提供诊疗服务的钱。诊疗完成即确认收入，但最终能收回多少现金，几乎完全不看医院贴出来的账单标价，而取决于对应支付方（商业保险、Medicare、Medicaid 或患者自付）的合同定价规则。[^hca]<sup>，</sup>[^hca-10k]

<figure class="flow-figure" id="nb-d01-healthcare-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">医药与医疗服务：支付错配、高集中分销与机器人复购（2025）</p><div class="ff-switch" role="group" aria-label="切换医疗视图" hidden><button type="button" data-ff-view-choice="hca" aria-pressed="true">HCA 支付错配</button><button type="button" data-ff-view-choice="jnj" aria-pressed="false">JNJ 分销与利润</button><button type="button" data-ff-view-choice="isrg" aria-pressed="false">ISRG 复购结构</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="hca" aria-label="HCA 2025 营收 756.0 亿美元支付方错配：商业与管理式保险仅占 32% 住院人次却贡献 48.9% 净收入，Medicare 占 46% 住院人次仅贡献 32.7% 净收入，Medicaid 占 15% 住院人次贡献 12.7% 净收入。">
<svg viewBox="0 0 720 215" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="18" width="14" height="12" rx="2" fill="#9fb2a8"/>
  <text x="46" y="29" font-size="12.5" fill="#5e6d65">住院人次占比</text>
  <rect x="160" y="18" width="14" height="12" rx="2" fill="#23695a"/>
  <text x="182" y="29" font-size="12.5" font-weight="600" fill="#23695a">净收入占比（共 756 亿美元）</text>
  <text x="24" y="68" font-size="13.5" font-weight="700" fill="#22392f">商业保险</text>
  <rect x="140" y="48" width="218" height="16" rx="3" fill="#9fb2a8"/>
  <text x="368" y="61" font-size="12.5" fill="#5e6d65">32% 人次</text>
  <rect x="140" y="68" width="332" height="18" rx="3" fill="#23695a"/>
  <text x="484" y="82" font-size="13.5" font-weight="700" fill="#23695a">48.9% 收入（369.7 亿）</text>
  <text x="24" y="128" font-size="13.5" font-weight="700" fill="#22392f">Medicare</text>
  <rect x="140" y="108" width="312" height="16" rx="3" fill="#9fb2a8"/>
  <text x="462" y="121" font-size="12.5" fill="#5e6d65">46% 人次</text>
  <rect x="140" y="128" width="222" height="18" rx="3" fill="#a8743f"/>
  <text x="374" y="142" font-size="13.5" font-weight="700" fill="#8f6033">32.7% 收入（247.1 亿）</text>
  <text x="24" y="188" font-size="13.5" font-weight="700" fill="#22392f">Medicaid</text>
  <rect x="140" y="168" width="102" height="16" rx="3" fill="#9fb2a8"/>
  <text x="252" y="181" font-size="12.5" fill="#5e6d65">15% 人次</text>
  <rect x="140" y="188" width="86" height="18" rx="3" fill="#7a8780"/>
  <text x="238" y="202" font-size="13" font-weight="600" fill="#3c4c44">12.7% 收入（96.0 亿）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="jnj" hidden aria-label="JNJ 2025 总销售 941.9 亿美元：创新药 604.0 亿（税前利润率 36.9%），医疗器械 337.9 亿（税前利润率 12.2%）；前三大医药批发商包揽 48.4% 总毛收入。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">JNJ 2025：双板块规模与利润率</text>
  <text x="696" y="34" text-anchor="end" font-size="12.5" fill="#5e6d65">总销售 941.9 亿美元</text>
  <text x="24" y="76" font-size="13.5" font-weight="700" fill="#23695a">创新药</text>
  <rect x="112" y="58" width="380" height="28" rx="5" fill="#23695a"/>
  <text x="506" y="77" font-size="13.5" font-weight="700" fill="#23695a">604.0 亿 · EBT 率 36.9%</text>
  <text x="24" y="120" font-size="13.5" font-weight="700" fill="#8f6033">医疗器械</text>
  <rect x="112" y="102" width="212" height="28" rx="5" fill="#a8743f"/>
  <text x="338" y="121" font-size="13.5" font-weight="700" fill="#8f6033">337.9 亿 · EBT 率 12.2%</text>
  <text x="24" y="162" font-size="13" font-weight="700" fill="#b5483a">前三大医药批发商占总毛收入 48.4%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="isrg" hidden aria-label="ISRG 2025 手术机器人总收入 100.6 亿美元结构：系统装机仅占 24.6%（24.7 亿），配套器械附件 59.8%（60.2 亿）与维保服务 15.6%（15.7 亿）合计占 75.4% 持续性复购收入。">
<svg viewBox="0 0 720 170" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">ISRG 2025 手术机器人收入：100.6 亿美元</text>
  <rect x="24" y="56" width="164" height="44" rx="6" fill="#9fb2a8"/>
  <rect x="192" y="56" width="400" height="44" rx="6" fill="#23695a"/>
  <rect x="596" y="56" width="100" height="44" rx="6" fill="#a8743f"/>
  <text x="106" y="83" text-anchor="middle" font-size="13" font-weight="700" fill="#ffffff">系统 24.6%</text>
  <text x="392" y="83" text-anchor="middle" font-size="14" font-weight="700" fill="#ffffff">器械附件 59.8%（60.2 亿）</text>
  <text x="646" y="83" text-anchor="middle" font-size="12.5" font-weight="700" fill="#ffffff">服务 15.6%</text>
  <path d="M196 112 L196 122 L692 122 L692 112" fill="none" stroke="#23695a" stroke-width="1.8"/>
  <text x="444" y="148" text-anchor="middle" font-size="13.5" font-weight="700" fill="#23695a">75.4% 收入来自装机后的持续消耗与维保复购</text>
</svg>
</div>
<figcaption>点击标签分别查看医院、创新药与手术机器人样本。数据来自 HCA、JNJ 与 ISRG 2025 Form 10-K（HCA 另含无保险 7% 人次、海外 2.5% 及其他 3.2% 收入）。</figcaption>
</figure>

<span data-text-versions id="nb-d01-healthcare-text-1">药厂的标价与净收入、医院的标价与实收之间，都隔着巨大的合同折让<span data-text-detail>（药企向批发商供货后，还须预估扣除商业保险与政府项目的返利、折扣和退货，行业称为 Gross-to-Net 扣减；ISRG 的手术系统既可直接销售，也可按固定月租或按手术次数经营租赁，且美国医院采购获 FDA 许可的第三方再制造器械并不自动触发违约；HCA 的支付规则可按病种 DRG、住院日或服务项目计费，收入确认与保险结算回款在时间上分离）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 治疗需要、产品采用与支付核对 {#nb-d01-healthcare-demand}

研报最爱用“患病人数 × 年治疗费用”算出一个惊人的潜在市场空间，但从患者生病到收入落进公司账本，中间隔着获批上市、进院准入、医生临床采纳、渠道库存和医保／商保报销五道关卡。

Agent 核对医疗需求时，要按环节拆账：查药企先盯前三大批发商的出货节奏与终端处方量是否背离，避免把渠道压货误读为临床放量；查手术器械则把装机台数增长、单台手术量与配套器械库存补货分开核对；查医院则把诊疗量与支付方结构（尤其是商业保险占比变化）摆在一起看——从 HCA 的支付错配就能看出，同样新增 100 名住院患者，商保患者与政府医保患者带来的收入差距悬殊。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d01-finance">

## 银行、支付与保险：资金与未来承诺 {#nb-d01-finance-story}

### 账户本金、刷卡流水与保单承诺 {#nb-d01-finance-services}

金融行业最大的阅读陷阱，是把**经手的资金规模**错当成**公司自己的收入**。在 JPMorgan Chase（JPM）的资产负债表上，储户存进来的钱是随时可能被支取的负债，放出去的 1.49 万亿美元贷款是本金资产；银行真正进损益表的是资产利息扣掉融资利息之后的净利息收入，以及投行、资管与刷卡手续费，同时还要自己扛下借款人违约带来的信用损失拨备。[^jpm]<sup>，</sup>[^jpm-10k]

Visa（V）则完全不向持卡人放贷，也不承担消费信贷违约风险。消费者刷卡 100 美元时，商户扣掉的手续费大头作为交换费流向了发卡行与收单机构，V 只作为支付网络收取授权、清算和结算服务费，且还要返还大额客户激励给合作银行与商户。[^visa]

<figure class="flow-figure" id="nb-d01-finance-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">银行、支付与保险：经手资金规模如何落成公司收入（2025）</p><div class="ff-switch" role="group" aria-label="切换金融业态" hidden><button type="button" data-ff-view-choice="jpm" aria-pressed="true">银行 · JPM</button><button type="button" data-ff-view-choice="v" aria-pressed="false">支付 · Visa</button><button type="button" data-ff-view-choice="cb" aria-pressed="false">保险 · Chubb</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="jpm" aria-label="JPM 2025 银行三步流向：1.49 万亿美元总贷款属资产负债表本金，利息收入 1,933 亿减利息支出 979 亿得净利息收入 954 亿，加非息收入 870 亿形成总净收入 1,824 亿美元，同时需计提 142 亿信用损失拨备。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-fn-j" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="12.5" fill="#5e6d65">表内本金（非收入）</text>
  <text x="118" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">1.49 万亿贷款</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">储户保留随时提款权</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-fn-j)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="12.5" font-weight="700" fill="#23695a">息差净额＋非息费</text>
  <text x="360" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#23695a">1,824 亿美元</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#3c4c44">NII 954 亿 ＋ 非息 870 亿</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-fn-j)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="602" y="64" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b5483a">自担坏账代价</text>
  <text x="602" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#b5483a">142 亿拨备</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">同比 +33% · 净核销 98.5 亿</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="v" hidden aria-label="Visa FY2025 支付网络三步流向：13.89 万亿美元刷卡流水不是收入，网络毛收入 557.5 亿美元扣除 157.5 亿客户激励（28.3%）后，净收入为 400.0 亿美元，仅占流水的约 0.29%。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-fn-v" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="12.5" fill="#5e6d65">刷卡流水（非收入）</text>
  <text x="118" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">13.89 万亿</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">2,575 亿笔交易</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-fn-v)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="360" y="64" text-anchor="middle" font-size="12.5" fill="#3c4c44">毛收入 557.5 亿</text>
  <text x="360" y="95" text-anchor="middle" font-size="17" font-weight="700" fill="#b5483a">−157.5 亿激励</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">客户激励占毛收入 28.3%</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#d01-fn-v)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#a8743f"/>
  <text x="602" y="64" text-anchor="middle" font-size="12.5" fill="#f9efe3">网络净收入</text>
  <text x="602" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">400.0 亿美元</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#f5e6d3">仅占流水约 0.29%</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="cb" hidden aria-label="Chubb 2025 保险三步流向：当期净签单保费 548.4 亿美元，随保障期转为净已赚保费 530.1 亿美元（财险综合成本率 85.7%），资产负债表同时背负 880.2 亿美元未付赔款准备金与 262.8 亿未赚保费。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="d01-fn-c" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="64" text-anchor="middle" font-size="12.5" fill="#5e6d65">当期净签单保费</text>
  <text x="118" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#22392f">548.4 亿美元</text>
  <text x="118" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">保单生效先收现</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-fn-c)"/>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="360" y="64" text-anchor="middle" font-size="12.5" fill="#e5efe9">按期赚取＋投资</text>
  <text x="360" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff">530.1 亿已赚</text>
  <text x="360" y="120" text-anchor="middle" font-size="12" fill="#d7e8df">综合成本率 85.7%</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#d01-fn-c)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#faeae7" stroke="#e4c2bc" stroke-width="1.3"/>
  <text x="602" y="64" text-anchor="middle" font-size="12.5" font-weight="700" fill="#b5483a">挂在账上的赔付债</text>
  <text x="602" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#b5483a">880.2 亿准备金</text>
  <text x="602" y="120" text-anchor="middle" font-size="12" fill="#5e6d65">另含 262.8 亿未赚保费</text>
</svg>
</div>
<figcaption>点击切换三类金融业务。数据来自 JPM、V（支付额截至 2025-06-30，收入截至 2025-09-30）与 CB 2025 年报。</figcaption>
</figure>

### 收取保费之后的长期赔付责任 {#nb-d01-finance-insurance}

保险的生意与利差、过路费截然不同，卖的是“先收钱、后兜底”的风险承诺。Chubb（CB）收进投保人保费后，保障义务才刚刚开始：一旦保单约定的财产损坏、营业中断或责任事故发生，公司就要依约赔付，部分责任险的理赔甚至会拖到保单到期数年之后才最终结案。[^chubb]

<span data-text-versions id="nb-d01-finance-text-1">保费落袋与赔款流出之间的时间差，既造就了可用于投资的浮存金，也留下了庞大的估算负债<span data-text-detail>（资产负债表上的未付赔款及理赔费用准备金是对已发生但尚未结清赔案的精算估计；一旦未来通胀或诉讼推高实际赔付，公司必须在后续年度补提准备金，直接冲击当期利润。银行的资产负债表重定价、支付网络的客户激励博弈与保险的浮存金成本，各自构成一套独立的分析体系）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>关于保险浮存金、综合成本率与准备金释放的完整机制，可在独立行业专题[《保险业：浮存金、综合成本率与准备金》](/zh/notebook/industry-insurance-float/)中继续深潜。

沿这三类业务核对需求时，Agent 要问出三组不同的问题：看银行，查贷款增量投向了哪类借款人、存款成本和坏账拨备有没有同步抬头；看支付网络，分清流水增长是真实消费扩大还是现金转电子化，并紧盯客户激励占毛收入的比率有没有继续走高；看保险，把新签保单、费率提价与背后同时背进来的巨灾和长尾赔付敞口放在同一张表上核对。

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d01-energy">

## 能源与原材料：商品、加工与输运 {#nb-d01-energy-story}

### 同一桶油，走出三条盈利曲线 {#nb-d01-energy-products}

很多投资人把整个油气板块简化成“赌油价涨跌”，但真实年报拆出来的是三门截然不同的生意。ExxonMobil（XOM）同时横跨上游开采、下游炼化与化工：上游卖资源，盈利直接跟随原油与天然气实现售价起伏；下游炼化买进原油、产出成品油，赚的是**成品与原料之间的加工价差（裂解价差）**；化工则受全球石化产能周期主导。2025 年原油均价大跌时，XOM 上游盈利收缩，下游炼化盈利却逆势跳增八成。[^xom]<sup>，</sup>[^xom-10k]

Kinder Morgan（KMI）则示范了第四条路径：自己不赌货价涨跌，专门向客户出租管道容量、储罐与加工处理能力（包括与 BP North America 的长期凝析油收费加工协议，以及按日预订容量的天然气管道运输协议）。[^kmi]<sup>，</sup>[^kmi-10k]<sup>，</sup>[^wic]

<figure class="flow-figure" id="nb-d01-energy-flow" data-ff-views>
<div class="ff-head"><p class="ff-title">能源与原材料：同一年原油跌 14%，三种生意的盈利分化（2025）</p><div class="ff-switch" role="group" aria-label="切换能源视角" hidden><button type="button" data-ff-view-choice="xom" aria-pressed="true">XOM 三条盈利曲线</button><button type="button" data-ff-view-choice="kmi" aria-pressed="false">KMI 管输过路费</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="xom" aria-label="XOM 2025 在自产原油销售均价下降 14.3% 下三大板块税后盈利分化：上游开采 213.5 亿美元（−15.9%），炼化能源产品 74.2 亿美元（+84.1%），化工产品 8.0 亿美元（−69.0%）。">
<svg viewBox="0 0 720 195" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">XOM 2025 税后分部盈利</text>
  <text x="696" y="34" text-anchor="end" font-size="12.5" fill="#b5483a">背景：自产原油均价 −14.3%</text>
  <text x="24" y="78" font-size="13.5" font-weight="700" fill="#22392f">上游开采</text>
  <rect x="120" y="60" width="360" height="26" rx="5" fill="#23695a"/>
  <text x="494" y="78" font-size="13.5" font-weight="700" fill="#22392f">213.5 亿（−15.9%）</text>
  <text x="24" y="122" font-size="13.5" font-weight="700" fill="#8f6033">炼化成品油</text>
  <rect x="120" y="104" width="126" height="26" rx="5" fill="#a8743f"/>
  <text x="260" y="122" font-size="13.5" font-weight="700" fill="#23695a">74.2 亿（+84.1% · 吃裂解价差）</text>
  <text x="24" y="166" font-size="13.5" font-weight="700" fill="#b5483a">化工产品</text>
  <rect x="120" y="148" width="16" height="26" rx="4" fill="#b5483a"/>
  <text x="150" y="166" font-size="13.5" font-weight="700" fill="#b5483a">8.0 亿（−69.0% · ROCE 2.7%）</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="kmi" hidden aria-label="KMI 2025 客户合同收入结构：固定照付不议 Firm Services 53.4 亿美元（+7.8%，即使未运仍收预留费），按量计费 Fee-Based 27.2 亿美元（+4.7%），另须与随油气现价起伏的商品过手销售 72.6 亿美元分开核算。">
<svg viewBox="0 0 720 190" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <text x="24" y="34" font-size="14" font-weight="700" fill="#22392f">KMI 2025 收入拆解：稳健管输费 vs 过手商品</text>
  <text x="24" y="78" font-size="13" font-weight="700" fill="#23695a">固定照付不议（Firm）</text>
  <rect x="200" y="60" width="268" height="26" rx="5" fill="#23695a"/>
  <text x="482" y="78" font-size="13.5" font-weight="700" fill="#23695a">53.4 亿（+7.8%）</text>
  <text x="24" y="120" font-size="13" font-weight="700" fill="#8f6033">按量收费（Fee-Based）</text>
  <rect x="200" y="102" width="136" height="26" rx="5" fill="#a8743f"/>
  <text x="350" y="120" font-size="13.5" font-weight="700" fill="#8f6033">27.2 亿（+4.7%）</text>
  <text x="24" y="162" font-size="13" fill="#5e6d65">商品过手销售（分开看）</text>
  <rect x="200" y="144" width="364" height="26" rx="5" fill="#d5ddd6"/>
  <text x="578" y="162" font-size="13" font-weight="600" fill="#5e6d65">72.6 亿（自带成本）</text>
</svg>
</div>
<figcaption>点击切换 XOM 与 KMI 视图。数据来自两家公司 2025 Form 10-K（KMI 53.4 亿与 27.2 亿为 Note 14 客户合同服务拆分，集团合并服务总收入 94.9 亿）。</figcaption>
</figure>

<span data-text-versions id="nb-d01-energy-text-1">区分自购自销加工与纯收费管输，才能对准正确的盈利变量<span data-text-detail>（假设同一批原料数量为 \(Q\)、采购单价 \(P\)，全部加工产出多种产品并售出数量 \(q_i\)、净价 \(p_i\)，则产品销售额 \(\sum q_i p_i\) 与原料成本 \(QP\) 之差还要再扣能耗、运维、检修和运输费用，才成加工利润；实务跨期分析时需用已售产品对应的原料耗用配比，不能拿当期采购额直接减。管输业务里，固定照付不议服务即便客户少运或未运仍收预留费，而 KMI 合并报表中另有 72.6 亿美元按市价结算的商品销售，分析时须与服务过路费分开）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 沿提货、开工率与长约条款核需求 {#nb-d01-energy-demand}

遇到同一轮能源价格波动，不同研报常给出截然相反的盈利结论，第一步就是核清它们谈的究竟是上游开采、下游炼化还是中游管输。油价走弱压制上游实现售价，但只要成品油需求坚挺、原料变便宜反而可能撑阔炼厂裂解价差；至于中游管网，只要主干线长约到期前客户信用稳健、照付不议占比高，短期现货价起伏对服务收费的冲击就很有限。

Agent 核对能源与原材料需求时，应按业务类型切分证据：看上游核产销量、交割折溢价与开采成本曲线；看炼化与化工对照装置开工率、区域裂解价差和储罐库存，分清贸易商多提货是进了终端消费还是堆在油罐里；看管道与储运则直接核查合同中的固定预订容量、最低输送承诺和到期续约节奏。

</section>

## 需求判断与证据核对 {#nb-d01-evidence}

八个行业拆下来，核心工作落在一张统一的核验表上：确认客户是不是真下了单（采购合同与采用记录）、确认公司是不是按期交了活（发货、上架、履约与实际使用），以及确认收钱之后还背着哪些后半程义务（退货折让、持续运维或多年后的保险赔付）。

实操时，Agent 可以把目标公司年报、上下游客户披露和券商研报摆到同一张时间轴上交叉核对：先对齐产品口径、项目范围和报告期间，再去剥离真实终端扩张、渠道补库存、提前拉货或跨期并购。凡是暂时缺证据的环节先留为待核问题，已有判断则写明依赖哪条假设、什么新数据出现就会推翻它。

摸清八类生意靠谁买单、怎样收费以后，接下来就可以追问它为什么增长。下一篇[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/)会沿着同一套行业分支，用真实财报拆解销量、净价、留存与产品结构的变化，再把它们接到市场预期与股价反推上。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261128">
<link rel="stylesheet" href="/notebook/business-branches.css?v=20261128">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

[^nke]: [NIKE FY2025 Form 10-K — Business, Operating Results and Revenue Recognition](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm)。财年截至 2025-05-31；Consolidated Operating Results（批发 258.8 亿、Direct 187.8 亿、毛利率 42.7%、存货 74.9 亿）及 Item 1、Revenue Recognition。
[^wmt]: [Walmart FY2025 Form 10-K — Business; Segment Operating Results](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm)。财年截至 2025-01-31；Sam's Club 分部净销售 902 亿、毛利 102.0 亿、运营费 101.2 亿、会员及其他收入 23.23 亿与营业利润 24.04 亿；全集团纯会费 38 亿美元。
[^msft]: [Microsoft 2025 Annual Report — Microsoft 365 and Licensing Options](https://www.microsoft.com/investor/reports/ar25/index.html)。FY2025 年报；Microsoft 365 Commercial、Dynamics 与 Licensing Options。
[^msft-fy26]: [Microsoft FY2026 Form 10-K — Revenue Disaggregation, Unearned Revenue and Commercial RPO](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)。财年截至 2026-06-30；M365 Commercial 收入 1,020 亿美元（商业云 +17%、席位 +6%）、PBP 递延收入 579 亿美元与商业 RPO 6,780 亿美元。
[^aws]: [AWS Product and Service Pricing](https://aws.amazon.com/pricing/)。动态官方页面，读取于 2026-09-27；按用量计费、Compute Savings Plan 与套餐规则。
[^amzn-fy25]: [Amazon.com, Inc. FY2025 Form 10-K — Net Sales by Group, AWS Segment and Performance Obligations](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm)。年度截至 2025-12-31；Online stores 2,693 亿、3P Seller Services 1,722 亿、Advertising 686 亿、AWS 1,287 亿（营业利润 456 亿、长期 RPO 2,440 亿）及 CapEx 1,318 亿美元。
[^netflix]: [Netflix consolidates relational database infrastructure on Amazon Aurora, achieving up to 75% improved performance](https://aws.amazon.com/blogs/database/netflix-consolidates-relational-database-infrastructure-on-amazon-aurora-achieving-up-to-75-improved-performance/)。2025-11-26；Netflix ODS 团队由 EC2 自管数据库迁往 Aurora 托管服务。
[^talen]: [Talen Energy Expands Nuclear Energy Relationship with Amazon; Q2 2026 AWS PPA update](https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699)；[Talen Q2 2026 Form 10-Q](https://talenenergy.gcs-web.com/static-files/649bfa16-a54e-4997-914b-a8a5d2e00900)。2025-06-11 扩展 PPA 公告与 2026-08-05 Q2 10-Q 确认 2026 年 4 月修订转换。
[^seller]: [Sell on Amazon — How much does it cost to sell on Amazon?](https://sell.amazon.com/pricing/)。美国官方卖家页面，读取于 2026-09-27；销售计划、品类佣金与 FBA 履约／仓储计费。
[^alphabet]: [Alphabet 2025 Form 10-K — Google Services; Cost of Revenues and TAC](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。年度截至 2025-12-31；Search 2,245 亿、YouTube 404 亿、Network 298 亿、订阅平台设备 480 亿及总 TAC 599 亿美元。
[^bkng]: [Booking Holdings 2025 Form 10-K — Gross Bookings, Revenues and Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm)。年度截至 2025-12-31；总预订额 1,861 亿（商户 70%）、总收入 269.2 亿（变现率 14.5%）及营销费用 81.9 亿美元。
[^nvda]: [NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customer Concentration](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)。财年截至 2026-01-25；总营收 2,159 亿、数据中心 1,937 亿（89.7%）、毛利率 71.1%、前两大直接客户占总营收 22% 与 14% 及间接客户结构。
[^tsmc]: [TSMC 2025 Annual Report Website — About TSMC and Shareholder Letter](https://investor.tsmc.com/static/annualReports/2025/english/index.html)。2025 年度报告；纯晶圆代工模式与先进封装服务。
[^tsm-20f]: [TSMC FY2025 Form 20-F — Net Revenue by Platform, Technology and Capital Expenditures](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)。年度截至 2025-12-31；总净营收 3.81 万亿新台币、HPC 占 58%、≤7nm 占晶圆收入 74%（3nm 24%、5nm 36%、7nm 14%）、2025 CapEx 409 亿美元及 2026 指引 520–560 亿美元。
[^asml]: [ASML — About the company](https://www.asml.com/en/company)。动态公司页面，读取于 2026-09-27；光刻系统、软件与服务概述。
[^asml-20f]: [ASML Holding N.V. FY2025 Form 20-F — Consolidated Statements of Operations and Revenue Policy](https://www.sec.gov/Archives/edgar/data/937966/000162828026011378/asml-20251231.htm)。年度截至 2025-12-31；总净销售 326.7 亿欧元（新系统 244.7 亿占 74.9%，装机服务及现场选件 81.9 亿占 25.1%）及系统验收确认政策。
[^coreweave]: [CoreWeave Q2 2026 Earnings Call — Corrected Transcript](https://s205.q4cdn.com/133937190/files/doc_financials/2026/q2/CRWV-US-CORRECTED-TRANSCRIPT-CoreWeave-Q2-2026-Earnings-Call-11August2026.pdf)。2026-08-11；新签延续至 2029 年的 A100 算力合同。
[^aws-gpu]: [Amazon Q1 2026 Earnings Release — AI chip deployment highlights](https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf)。2026-04-29；AWS 自研 Trainium 与增配 NVIDIA GPU 部署并行。
[^kgi]: [KGI TSMC Company Update — 3Q25 preview: AI outlook has turned more promising](https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/tsmc_2330-tt_01102025e.pdf)。2025-10-01；上调 2026 年 CoWoS 需求与产能预测及 2027 年条件展望。
[^otis]: [Otis Worldwide 2025 Form 10-K — Segment Results, Maintenance Portfolio and Revenue Recognition](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm)。年度截至 2025-12-31；新设备收入 49.9 亿（营业利润 2.40 亿、利润率 4.8%），服务收入 94.4 亿（营业利润 23.74 亿、利润率 25.1%），在保梯约 250 万台。
[^fluor]: [Fluor 2025 Form 10-K — Types of Contracts, Backlog and Segment Results](https://www.sec.gov/Archives/edgar/data/1124198/000112419826000007/flr-20251231.htm)。年度截至 2025-12-31；总收入 155.0 亿，在手订单 255.4 亿（可报销 207.1 亿占 81%，总价/最高限价 48.2 亿占 19%）及能源板块分部亏损 4.14 亿美元。
[^gev]: [GE Vernova secures two H-class combined cycle equipment orders from EnBW](https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability)；[EnBW Heilbronn combined heat and power plant — Project phases](https://www.enbw.com/company/topics/coal-phaseout/heilbronn-combined-heat-and-power-plant/)；[EnBW Heilbronn — Projektphasen](https://www.enbw.com/unternehmen/themen/kohleausstieg/heizkraftwerk-heilbronn/)。2023-11-06 供应方公告预计 2026 年底投运，2026-09-27 读取业主项目表暂定 2027 年下半年。
[^jnj]: [Johnson & Johnson 2025 Form 10-K — Segment Results and Major Wholesalers](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm)。财年截至 2025-12-28；总销售 941.9 亿（创新药 604.0 亿 EBT 率 36.9%、器械 337.9 亿 EBT 率 12.2%），三大批发商占总毛收入 21.8%、15.5% 与 11.1%。
[^isrg]: [Intuitive Surgical FY2025 Form 10-K — Systems, Instruments and Services](https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm)。年度截至 2025-12-31；总收入 100.6 亿美元（系统 24.7 亿、器械附件 60.2 亿、服务 15.7 亿）及租赁与第三方再制造器械说明。
[^hca]: [HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf)。2025 年度；Note 1 收入确认与支付安排。
[^hca-10k]: [HCA Healthcare FY2025 Form 10-K — Revenues by Payer and Utilization](https://www.sec.gov/Archives/edgar/data/860730/000119312526044769/hca-20251231.htm)。年度截至 2025-12-31；总营收 756.0 亿，按支付方收入与住院人次占比（商业管理式 48.9%／32%、Medicare 含管理式 32.7%／46%、Medicaid 含管理式 12.7%／15%）。
[^jpm]: [JPMorgan Chase 2025 Annual Report — Consumer & Community Banking](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)。2025 年度；消费与社区银行存贷款及账户业务。
[^jpm-10k]: [JPMorgan Chase & Co. FY2025 Form 10-K — Consolidated Results and Credit Portfolio](https://www.sec.gov/Archives/edgar/data/19617/000162828026008131/jpm-20251231.htm)。年度截至 2025-12-31；总净收入 1,824 亿（净利息收入 954 亿、非息收入 870 亿）、总贷款 1.49 万亿、信用损失拨备 142 亿与净核销 98.5 亿美元。
[^visa]: [Visa FY2025 Form 10-K — Network Model, Revenue Disaggregation and Volume](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm)。财年截至 2025-09-30；名义支付额 13.89 万亿（截至 2025-06-30 十二个月）、处理笔数 2,575 亿笔、毛收入 557.5 亿、客户激励 157.5 亿与净收入 400.0 亿美元。
[^chubb]: [Chubb Limited Annual Report 2025 & FY2025 Form 10-K](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf)；[Chubb FY2025 Form 10-K — Unpaid losses](https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/R17.htm)。2025 年度；合并净签单保费 548.4 亿、净已赚保费 530.1 亿、财险综合成本率 85.7%、税前投资收益 64.7 亿、未付赔款准备金 880.2 亿与未赚保费 262.8 亿美元。
[^xom]: [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions)。动态公司业务页面，读取于 2026-09-27；Upstream、Product Solutions 与 Low Carbon Solutions 划分。
[^xom-10k]: [Exxon Mobil Corporation FY2025 Form 10-K — Business Profile and Segment Earnings](https://www.sec.gov/Archives/edgar/data/34088/000003408826000045/xom-20251231.htm)。年度截至 2025-12-31；上游税后盈利 213.5 亿（−15.9%）、能源产品 74.2 亿（+84.1%）、化工 8.0 亿（−69.0%）；自产原油均价 76.57→65.64 美元/桶。
[^kmi]: [Kinder Morgan — Products Pipelines; Condensate Processing Facility](https://www.kindermorgan.com/Operations/Products/Index)。动态公司业务页面，读取于 2026-09-27；BP North America 长期凝析油收费加工协议。
[^kmi-10k]: [Kinder Morgan, Inc. FY2025 Form 10-K — Revenue Disaggregation (Note 14)](https://www.sec.gov/Archives/edgar/data/1506307/000150630726000011/kmi-20251231.htm)。年度截至 2025-12-31；总收入 169.4 亿（服务 94.9 亿、商品销售 72.6 亿）；客户合同服务拆分为 Firm Services 53.4 亿（+7.8%）与 Fee-Based Services 27.2 亿（+4.7%）。
[^wic]: [Wyoming Interstate Company — Black Hills Negotiated Rate Agreement Update](https://pipeline2.kindermorgan.com/Documents/WIC/RP25-1193-000_Negotiated_Rate_Agreement_Update_-_Black_Hills_2025-20250930164903.pdf)。2025-09-30 监管申报；28,150 Dth/d 预订容量与按月预留费条款。
[^cma]: [CMA Cloud Infrastructure Services — Final decision report](https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf)。2025-07-31 报告；第 109 页 §§3.236—3.237 关于存量用量、成本优化、系统迁移与新增负载的区分。
