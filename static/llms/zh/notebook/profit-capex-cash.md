# 利润、资本开支与现金

拆解资本化与费用化的会计分叉、折旧摊销的投产时滞，系统界定 EBIT、EBITDA、Owner Earnings 与自由现金流（FCF）的计算桥、适用场景与失真陷阱；借互动推演器与 KO、T、MSFT、TSMC 四家公司真实 SEC 披露，把账面利润与可分配现金的落差讲透。

网页 / HTML: [利润、资本开支与现金](https://ou-liu-red-sugar.github.io/zh/notebook/profit-capex-cash/)

语言 / Language: zh · 更新 / Revised: 2026-11-27

前两篇[《三张财报与经营活动》](https://ou-liu-red-sugar.github.io/zh/notebook/three-financial-statements/)与[《收入、回款与营运资本》](https://ou-liu-red-sugar.github.io/zh/notebook/revenue-collections-working-capital/)留下一道悬念：Microsoft（MSFT）在 FY2026 的营业利润比上年多赚 267 亿美元，可全年自由现金流反而从 716.11 亿美元跌至 669.87 亿美元。[^msft-fy26]

应收与存货只能解释短期周转错期，把利润与现金拉开上千亿美元鸿沟的，是长期资产的**资本开支**（Capital Expenditures，简称 CapEx）及其**折旧与摊销**（Depreciation & Amortization，简称 D&A）。同一份财报换用 **EBIT**、**EBITDA**、**所有者盈余**（Owner Earnings）和**自由现金流**（Free Cash Flow，简称 FCF）去量，会得出截然不同的盈利印象。

## 利润、折旧摊销与真实现金支出 {#nb-e03-capex-da}

企业花出去的钱，在会计上先过一道**费用化**与**资本化**的分岔口。薪酬、房租这类当期耗尽的支出，直接全额扣减利润并流出经营现金流；买厂房、光刻机或 AI 服务器，现金在付款当天全额从投资现金流流出，账面先记为**固定资产**（PP&E），再按预计年限分年计提**折旧**（外购专利与软件等有限寿命无形资产则计提**摊销**）。

正是这种“花钱在前、记账在后”的错位，让不少人误把折旧当成不用掏钱的纸面扣除。Warren Buffett 在 2003 年 Berkshire Hathaway 股东大会上直言，折旧其实是“反向浮存金”（reverse float）：企业先垫出真金白银，利润表里每年的折旧不过是那笔前置支出的延迟入账。[^munger-2003]

当企业处在不同资本周期时，**CapEx / D&A**（资本开支与折旧摊销之比）直接决定了账面利润和自由现金流谁高谁低：

- **扩张期**（CapEx 远高于 D&A）：提前为未来三到五年买设备建厂，当期现金流出远超存量折旧，利润与 CFO 明显高于 FCF。
- **稳态期**（CapEx 约等于 D&A）：设备价格与技术代际平稳时，年度更新支出贴近折旧；若营运资本平稳，利润会逐步向 FCF 收敛。
- **收缩或透支期**（CapEx 持续低于 D&A）：账面 FCF 会显得高于利润；除少数并购摊销虚高的优质资产外，常常是在推迟必要更新、透支未来竞争力。

除了金额错位，长期投资还有两到三年的**投产时滞**。按 US GAAP 与 IFRS 准则，建厂装机阶段的投入先挂在**在建工程**（CIP / EUI）科目，完工投用前不提折旧；一旦转固，折旧立刻按年限全额压向毛利率，哪怕新产能还在爬坡（以 MSFT FY2026 Form 10-K Note 1 与 Note 6 为例：服务器与网络设备按 2—6 年直线法折旧，期末原值达 2,158.74 亿美元，建筑与改良按 5—15 年、内部使用软件按 3 年折旧，另有 346 亿美元数据中心在建合同承诺。TSMC 在 FY2025 Form 20-F Note 5 与 Note 15 中披露：机台按 5 年、无尘室与机电系统 10 年、主厂房 20 年直线折旧，建设期符合条件的借款利息亦资本化。此外，部分重资产企业通过融资租赁或供应商分期融资采购设备，现金流出可能落在融资现金流而非投资活动 CapEx 行，例如 AT&T FY2025 除 208.42 亿美元现金 CapEx 外，还在融资活动支付了 11.81 亿美元供应商融资款）。[^msft-10k]，[^tsmc-20f]，[^att-10k]

从资本开支到折旧的四阶段时滞：MSFT 与 TSMC 实证

现金在建设期先行流出 · 折旧在资产达预定可使用状态后才进入利润表

资本开支到折旧的四阶段路径与两家公司实证：四阶段依次为建设安装期（现金大额流出、在建工程不提折旧）、投产转固期（开始计提折旧但产能爬坡中、毛利率承压）、满产收获期（产能利用率高、折旧与收入匹配、现金回流）及存量更新稳态（CapEx 贴近维持所需、利润与现金收敛）。左侧 MSFT FY2024 至 FY2026 实证显示：固定资产 CapEx 由 445 亿增至 646 亿再增至 1,159 亿美元，而同期固定资产折旧费用仅由 152 亿升至 220 亿再升至 343 亿美元，另余 267 亿美元未付设备款挂在应付账款。右侧 TSMC FY2025 Form 20-F 实证显示：全年 CapEx 12,724 亿新台币（约 409 亿美元，2026 年指引 520—560 亿美元），全年 D&A 6,881 亿新台币；期末在建工程与安装中设备高达 15,190 亿新台币，占自用固定资产净值 41.2%，完工投用前不提折旧，投用后机台按 5 年直线法折旧。

**数据来源：Microsoft FY2026 Form 10-K Note 1 与 Note 6；TSMC FY2025 Form 20-F Item 4、现金流量表及 Note 15。**

## EBIT、EBITDA、Owner Earnings 与 FCF：定义、桥接与适用边界 {#nb-e03-four-rulers}

弄清折旧与资本开支的时间差后，就能把投资里最常混用的四把盈利尺子依次排开，看清各自切在资金流转的哪一刀。

### 1. EBIT（息税前利润）

\[
\text{EBIT} \approx \text{营业利润} = \text{营业收入} - \text{营业成本} - \text{研发、销售与管理等经营费用（含 D\&A）}.
\]

**EBIT**（Earnings Before Interest and Taxes）剥离了债息与所得税，保留折旧与摊销，量的是扣除资产损耗后的主业赚钱能力。它不受杠杆与税率干扰，适合横向比较同业经营效率，也是估算 NOPAT 与 ROIC 的起点；只是若把设备折旧年限从 4 年拉长到 6 年，账面 EBIT 会凭空变厚，硬件淘汰速度其实并未放慢。

### 2. EBITDA（息税折旧摊销前利润）

\[
\text{EBITDA} = \text{EBIT} + \text{折旧与摊销（D\&A）}.
\]

**EBITDA**（Earnings Before Interest, Taxes, Depreciation and Amortization）在 EBIT 基础上加回全部折旧与摊销，量的是付息、交税与资本开支前的毛现金规模。当需要撇开跨国折旧政策差异、加回轻资产并购遗留的历史摊销，或作短期偿债杠杆参照（见[《债务、融资与现金低谷》](https://ou-liu-red-sugar.github.io/zh/notebook/debt-financing-cash-troughs/)）时，它有实用价值。

EBITDA 的陷阱是把年年重置的设备磨损当成不算成本。Warren Buffett 在 2000 年股东信里举了 FlightSafety 的例子——当年投入 2.72 亿美元添置飞行模拟器，几乎每年都要花掉等同折旧的现金才能原地不退步——随后反问：“难道管理层以为资本开支是牙仙付钱吗？”（“does management think the tooth fairy pays for capital expenditures?”）[^buffett-2000]

三年后的股东大会上，Warren Buffett 再次点名电信业曾借 EBITDA 掩盖巨额资本吞噬，Charlie Munger 随即补刀：在演示材料里看到 EBITDA，直接替换成“bullshit earnings”就能看懂真相。[^munger-2003] 至于管理层再加回股权激励与重组费造出的 **Adjusted EBITDA**，留到[《盈利质量与可比口径》](https://ou-liu-red-sugar.github.io/zh/notebook/earnings-quality-comparability/)拆解。

### 3. FCF（自由现金流）

\[
\text{FCF} = \text{经营现金流（CFO）} - \text{资本开支（CapEx）}.
\]

**FCF** 从现金流量表出发，扣完营运资本、实付税息与全部资本开支，量的是企业真正可自由用于分红、回购、还债或留存的现金；拿三到五年累计 FCF 对照累计净利润，是检验盈利成色的硬尺子。不过单年 FCF 有双向盲区：高回报扩产会把当年数字压低甚至压负，衰退公司刻意推迟设备检修也能把单年现金挤得好看。

### 4. Owner Earnings（所有者盈余）

\[
\text{Owner Earnings} = \text{净利润} + \text{D\&A 及其他非现金费用} - \text{维持性 CapEx} - \Delta\text{维持性营运资本}.
\]

为同时避开 EBITDA 忽略设备重置、单年 FCF 又误伤主动扩张这两处盲区，Warren Buffett 在 1986 年 Berkshire Hathaway 股东信附录中提出**所有者盈余**。[^buffett-1986] 它只扣保住现有地位所需的维持投入，但财报并不分列维持与扩张两行，只能结合行业寿命与产能估算——正如他借 John Maynard Keynes 所言，宁要“模糊的正确，不要精确的错误”。

从营业收入到四把盈利尺子：计算勾稽、适用场景与失真陷阱

以 Microsoft（MSFT）FY2026 真实 SEC 披露为例（单位：M 美元）· 看清利润表与现金流量表在哪里分叉

以 Microsoft（MSFT）FY2026（单位 M 美元）演示四把盈利尺子的跨表勾稽与适用边界：左侧利润表自营业收入 331,839 减营业成本 106,374 得毛利 225,465，再减研发与三费 70,228 得营业利润 EBIT 155,237，加回现金流折旧摊销及其他 38,534 得 EBITDA 193,771。绿色曲线箭头经税费、营运资本与非现金股权激励调节，连至中间经营现金流 CFO 182,935；琥珀曲线箭头从 CFO 扣除来自投资现金流的总资本开支 CapEx 115,948，拆出先扣维持性 CapEx 的所有者盈余 Owner Earnings，以及再扣扩张性 CapEx 后的账面自由现金流 FCF 66,987（仅占 EBITDA 的 34.6%）。底部四栏对比四把尺子的核心适用场景与误用陷阱。

**四把尺子各有侧重，从“利润表经营效率”一路过渡到“扣除全部资本投入后的剩余现金”；同一家公司四数落差越大，越要追查资本开支属性。**

跨国比较 FCF 时，还要留意会计准则对利息归类的差别：US GAAP 把实付利息计入经营现金流，美股常见的 CFO − CapEx 属于扣完债息的股权口径；采用 IFRS 的公司（如 TSMC）常将已付利息列在融资活动、已收利息列在投资活动，套用同一公式前应先核对现金流附表（实务中另须区分两组口径：第一，严格定义下的 EBIT 为税前利润加回利息费用，当公司存在大额联营收益或公允价值重估损益时——如 KO FY2025 录得 20.31 亿美元联营收益，MSFT FY2026 录得 106.97 亿美元其他净收益——该口径会明显偏离 Operating Income，比较主业通常以 Operating Income 近似 EBIT。第二，无杠杆企业自由现金流 FCFF ＝ EBIT × (1 − 税率) ＋ D&A − CapEx − ΔNWC，供债权人与股东共享；而 CFO − CapEx 属于扣息后的股权口径。TSMC FY2025 现金流量表将已付利息 19,129 M 新台币列在融资活动、已收利息 98,955 M 新台币列在投资活动，与美股比对 FCF 须先对齐利息口径）。[^tsmc-20f]，[^ko-fy25]

## 维持性投入与扩张性投入：四把尺子怎样背离 {#nb-e03-capex-split}

现金流量表只报一行合并后的资本开支，可流出去的每一美元背后，经济含义可能截然相反。拆不开**维持性 CapEx** 与**扩张性 CapEx**，就很容易把同一份低 FCF 看反：

同一笔资本开支的两条经济去向：维持性 CapEx 与扩张性 CapEx

财报只合报一行现金流出 · 经济属性与估值后果截然相反

同一笔现金流出的资本开支（CapEx）拆向两条不同经济去向的流向图：左侧起点卡显示投资活动中的同一笔资本开支，现金当天全额离开账面，但会计准则只合并披露一行，不区分保旧还是建新。上方琥珀色路径为维持性 CapEx（补磨损、不增收入），仅替换老化设备、基站与厂房以守住现有销量与竞争力，典型如 AT&T（T）FY2025 CapEx / D&A 为 1.00 倍且多用于存量网络更新；右侧后果卡指出它等价于真实刚性成本，必须从 Owner Earnings 中扣除，推迟投入会导致产能老化与份额流失，拿 EBITDA 估值会系统性高估，结果表现为 Owner Earnings 与 FCF 双低。下方松绿色路径为扩张性 CapEx（建增量、争未来回报），用于新建增量产能、AI 机房与先进产线，典型如 MSFT FY2026 CapEx / D&A 达 3.01 倍与 TSMC FY2025 达 1.85 倍；右侧后果卡指出它在建设期压低账面 FCF，投产后若 ROIIC 高于资本成本则放大未来 EBIT 与现金流，但若回报不及成本，转固后折旧会反噬利润，扩产高峰期表现为 Owner Earnings 高于账面 FCF。

**同一笔资本开支按用途分叉：维持性支出是刚性重置成本，扩张性支出是前置投资，最终成败取决于新产能的增量回报率（ROIIC）。**

既然财报不帮我们拆分，日常研究常常交叉核对四条线索来估算维持性支出：

1. **看低增长年份的下限**：找过去五到十年收入几乎停滞的年份，那时 CapEx 占收入与 D&A 的比例往往接近维持底线。
2. **核对真实产能是否增加**：若航空公司座位数或运营商用户数没怎么涨，CapEx 高于折旧多半来自通胀涨价，或是 4G 升 5G 这类不得不花的防御更新。
3. **拆读 10-K 与业绩会预算**：晶圆厂、云厂商与油气公司常在管理层讨论里说明，多少预算建新厂新算力、多少用于老厂运维。
4. **防备通胀拉大重置缺口**：会计折旧只按当年的历史采购价算；若十年来厂房与机台涨价三成，原地维持产能所需现金也会系统性高于折旧。

把所有公司统一归到 **EBITDA ＝ 100 M 美元**（暂设无债、税率 20%、营运资本净变动为 0），切换下方预设或拖动滑块，就能看清折旧占比、CapEx 倍率与扩张占比怎样拉开四把尺子——扩张够大时，账面 FCF 会直接跌破零轴：

互动推演器：同样 100 M 美元 EBITDA，四把盈利尺子为何天壤之别

统一设定 EBITDA ＝ 100 · 无债（利息 0）· 税率 20% · Δ营运资本 ＝ 0

折旧占比 D&A / EBITDA 20%

资本开支强度 CapEx / D&A 3.0×

扩张性 CapEx 占比 70%

资本开支与四指标互动对照（假设 EBITDA 为 100 M 美元、无债、税率 20%、营运资本净变动 0）：一、轻资产成熟品牌（KO 型，D&A 占 8%、CapEx 为 D&A 的 1.8 倍、扩张占比 40%）：EBIT 为 92.0、CFO 为 81.6、维持性 CapEx 为 8.6、扩张性 CapEx 为 5.8，Owner Earnings 为 73.0、账面 FCF 为 67.2，四把尺子接近。二、默认展示的重资产 AI 扩产期（MSFT 或 TSMC 型，D&A 占 20%、CapEx 为 D&A 的 3.0 倍、扩张占比 70%）：EBIT 为 80.0、CFO 为 84.0、总 CapEx 为 60.0（维持 18.0 加扩张 42.0），Owner Earnings 仍达 66.0，但账面 FCF 被压低至 24.0（仅占 EBITDA 24%）。三、高折旧存量更新（电信或航空型，D&A 占 46%、CapEx 为 D&A 的 1.0 倍、扩张占比 15%）：EBIT 仅 54.0、CFO 为 89.2、维持性 CapEx 高达 39.1、扩张性仅 6.9，Owner Earnings 落至 50.1、账面 FCF 落至 43.2（尚未扣除高债务利息），EBITDA 严重高估可分配现金。

重资本扩产型背离：Owner Earnings（66.0）显著高于账面 FCF（24.0），差额 42.0 是提前支付的扩张投入；用 EBITDA 会高估，单看当年 FCF 又会低估。

**教学模型按 CFO ＝ EBITDA − 20% × EBIT、Owner Earnings ＝ CFO − 维持性 CapEx、FCF ＝ CFO − 总 CapEx 严格勾稽；现实中重资产企业往往还背负较高债务利息，会进一步压低可供股东分配的现金。**

切换三组预设会发现，同样的 100 M 美元 EBITDA 背后藏着截然不同的现金命运：轻资产企业里四把尺子彼此贴近；高折旧存量行业还没算债息，近半数 EBITDA 就被刚性维护吞掉；而重资本扩产期里，拉开 Owner Earnings 与账面 FCF 的，是提前砸向未来的扩张投入。

## 真实 SEC 财报对照：轻资产、存量更新与重资本扩产 {#nb-e03-sec-contrast}

回到 SEC 正式年报，把 **The Coca-Cola Company**（KO）、**AT&T Inc.**（T）与 **MSFT** 并排放到统一刻度下，前文的三种背离立刻在现实账本里现形：

真实 SEC 10-K 对照：KO FY25 vs T FY25 vs MSFT FY26

单位：M 美元 · 各公司柱长均以自身 EBITDA ＝ 100% 归一化

三家美股真实 SEC 10-K 的 EBIT、EBITDA、CapEx 与 FCF 对照（M 美元）：一、Coca-Cola（KO，FY2025，轻资产成熟品牌）：收入 47,941、营业利润 13,762（利润率 28.7%）、D&A 1,050、EBITDA 14,812（30.9%）；CapEx 仅 2,112（占收入 4.4%、为 D&A 的 2.01 倍）；剔除一次性 6,069 fairlife 或有对价支付后 FCF 为 11,365（账面 GAAP FCF 5,296），正常化 FCF 占 EBITDA 高达 76.7%。二、AT&T（T，FY2025，高折旧存量更新）：收入 125,648、营业利润 24,162（19.2%）、D&A 高达 20,886、EBITDA 45,048（35.9%，表面利润率高于 KO）；CFO 40,284、CapEx 20,842（CapEx/D&A 恰为 1.00 倍）、利息费用 6,804，标准 FCF 19,442（仅占 EBITDA 43.2%），另在融资现金流支付 1,181 供应商融资款。三、Microsoft（MSFT，FY2026，重资本 AI 扩产）：收入 331,839、营业利润 155,237（46.8%）、折旧摊销及其他 38,534、EBITDA 193,771（58.4%）；CFO 182,935、CapEx 飙升至 115,948（占收入 34.9%、为 D&A 的 3.01 倍），账面 FCF 落至 66,987（仅占 EBITDA 34.6%）。

**口径说明：三家公司 EBITDA 统一按 GAAP Operating Income ＋ 现金流量表 D&A 项计算（MSFT 为 155,237 ＋ 38,534）；标准 FCF ＝ CFO − 固定资产资本开支。**

先对照 **KO** 与 **T**，EBITDA 的错觉一目了然。只看 EBITDA 利润率，电信巨头（35.9%）甚至高于浓缩液品牌（30.9%）；可一旦扣除刚性网络更新与高额债息，T 的现金转化率被拦腰截断，轻资产的 KO 剔除一次性尾款后仍能留下近八成自由现金流（FY2025 年报显示，KO 收入 47,941 M 美元、D&A 仅 10.50 亿美元、CapEx 21.12 亿美元，剔除 60.69 亿美元 fairlife 或有对价尾款后，每 1 美元 EBITDA 留下 0.77 美元 FCF，2026 财年 FCF 指引进一步看至 122 亿美元。T 收入 125,648 M 美元，当年 208.42 亿美元 CapEx 几乎与 208.86 亿美元 D&A 等额，外加 68.04 亿美元利息；若将记入融资现金流的 11.81 亿美元供应商融资付款算回设备支出，真实现金结余进一步降至 182.61 亿美元）。[^ko-fy25]，[^att-10k]

再把 **MSFT** 和晶圆代工龙头 **Taiwan Semiconductor Manufacturing Company Limited**（TSMC，NYSE：TSM）放进同一视野，就会发现另一个误区：MSFT 与 TSM 的 FCF / EBITDA 转化率都在三成多，表面上甚至低于 T，单凭这一条比率极易把三家公司混为一谈（MSFT FY2026 的 FCF / EBITDA 为 34.6%，低于 T 的 43.2%。TSM FY2025 Form 20-F 录得净营收 38,091 亿新台币、营业利润 19,361 亿新台币、D&A 6,881 亿新台币、EBITDA 26,242 亿新台币，利润率 68.9%；在 12,724 亿新台币、即 1.85 倍于 D&A 的晶圆厂扩产支出后，标准 FCF 为 10,026 亿新台币，约合 319.6 亿美元，占 EBITDA 的 38.2%）。[^msft-fy26]，[^tsmc-20f]

三者的分水岭，在于资本开支到底流向哪里。T 收入仅增 2.7%，巨额投入大多用于守住存量网络，Owner Earnings 贴着偏低的 FCF 走；而 MSFT（全年收入增 18%）与 TSM（毛利率 59.9%）的高额支出重在新建算力与先进晶圆厂。这些产能两三年后陆续转固，会带来成倍放大的折旧账单，最终回报取决于投产后的利用率与定价权。

走通三张报表、营运资本与资本开支自由现金流后，从收入到现金的财务底座已经合拢。下一篇[《成本结构与经营杠杆》](https://ou-liu-red-sugar.github.io/zh/notebook/cost-structure-operating-leverage/)带着刚建立的折旧与利润表视角回到经营内部，拆解收入变动怎样经变动成本、固定成本与产能利用折出迥异的利润振幅；多业务分部合并、债务低谷与盈利质量清洗，则待产业与业务结构拆清后在第四卷[《分部、共同成本与合并》](https://ou-liu-red-sugar.github.io/zh/notebook/segments-shared-costs-consolidation/)至[《盈利质量与可比口径》](https://ou-liu-red-sugar.github.io/zh/notebook/earnings-quality-comparability/)接续展开。

[^msft-fy26]: Microsoft Corporation，[FY2026 Q4 及全财年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323632/msft-ex99_1.htm)，2026-07-29，截至 2026-06-30 的利润表、现金流量表与分部业绩原件。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Note 1 固定资产折旧年限政策、FY24—FY26 三年现金流量表与 Note 6 Property and Equipment 附注。
[^ko-fy25]: The Coca-Cola Company，[FY2025 全年业绩公告（EX-99.1）](https://www.sec.gov/Archives/edgar/data/21344/000162828026006642/a2025q4earningsreleaseex-9.htm)与 [FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)（2026-02-20 提交），截至 2025-12-31 的三张主表与 Free Cash Flow 调节表。
[^att-10k]: AT&T Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/732717/000073271726000120/t-20251231.htm)，2026-02-09 提交 SEC，Consolidated Statements of Income、Cash Flows 与 Note 22 Supplier and Vendor Financing Programs。
[^tsmc-20f]: Taiwan Semiconductor Manufacturing Company Limited，[FY2025 Form 20-F](https://www.sec.gov/Archives/edgar/data/1046179/000162828026025362/tsm-20251231.htm)，2026-04-16 提交 SEC，Item 4 资本开支披露、合并利润表与现金流量表、Note 5 会计政策及 Note 15 Property, Plant and Equipment。
[^buffett-1986]: Warren Buffett，[1986 年 Berkshire Hathaway 股东信附录《Purchase-Price Accounting Adjustments and the “Cash Flow” Fallacy》](https://www.berkshirehathaway.com/letters/1986.html)，1987-02-27，Owner Earnings 原始公式与“现金流”谬误批驳。
[^buffett-2000]: Warren Buffett，[2000 年 Berkshire Hathaway 股东信](https://www.berkshirehathaway.com/2000ar/2000letter.html)，2001-02-28，FlightSafety 2.72 亿美元模拟器资本开支与 Full and Fair Reporting 一节“tooth fairy”原话。
[^munger-2003]: Warren Buffett & Charlie Munger，[2003 年 Berkshire Hathaway 股东大会下午场实录](https://buffett.cnbc.com/video/2003/05/03/afternoon-session---2003-berkshire-hathaway-annual-meeting.html)，2003-05-03，CNBC Berkshire Hathaway Archive 第 17 问。
