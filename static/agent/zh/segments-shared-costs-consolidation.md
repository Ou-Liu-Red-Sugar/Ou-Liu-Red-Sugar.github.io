# 分部、共同成本与合并

按 FASB ASC 280 的 CODM 口径区分财报披露分部与研究产品线，结合 Coca-Cola（KO）FY2025 与 Alphabet（GOOGL）FY2025 真实 10-K 拆解分部间内部交易抵销、总部未分配共同成本与分部改组，并通过互动合并桥与股权边界图厘清控股合并、少数股东权益、权益法与财务投资怎样改写三张表。

Entry: zh-segments-shared-costs-consolidation | Node: NB-E04 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E04《分部、共同成本与合并》，承接 NB-E01 与 NB-E03 的公司整体三表认识，把分业务研究接回母公司合并报表。全篇分四节：一、披露分部与研究口径：依 FASB ASC 280 与 ASU 2023-07 解释 CODM 管理视角（GOOGL 由 CEO Sundar Pichai 仅按 Services / Cloud / Other Bets 审阅，不公开 Search 与 YouTube 独立利润；KO 按四大地理大区加 Bottling Investments 审阅，并于 2025-01-01 撤销 Global Ventures 发生分部改组）。二、内部交易抵销与总部共同成本：双案例对照 KO FY2025（五大分部加 Corporate 收入 48,950 扣分部间抵销 −1,009 得合并净营收 47,941；五分部营业利润 15,578 扣 Corporate −1,816 得合并营业利润 13,762，漏扣高估 13.2%；Corporate 占 CapEx 585 / 2,112 = 27.7%）与 GOOGL FY2025（三分部收入 402,963 扣未分配套保 −127 得 402,836；三分部营业利润 145,799 扣 Alphabet-level activities 通用 AI 共享研发与总部费用 −16,760 得 129,039，漏扣高估 13.0%，若同略 Other Bets 则高估 18.8%）。三、互动分部合并桥（ui.js）：在 KO 与 GOOGL 两套真实 10-K 数据间切换，逐项开关分部间抵销、总部共同成本与营业外权益法／公允价值／NCI 调节，实时量化漏扣高估幅度。四、控股合并、少数股东权益与权益法：厘清 ASC 810（>50% 或 VIE 主受益人全额并表并底端扣 NCI：KO 归母净利 13,107 vs 合并 13,137、期末 NCI 2,106；GOOGL Waymo 等期末 NCI 34 亿美元）、ASC 323（20%–50% 重大影响单行合并且现金流只认实收分红：KO 联营收入 102,800 不并表，记权益法利润 2,031 但仅收现分红 993、CFO 扣回 1,038；MSFT FY26 记 OpenAI 权益法净收益 +65 亿美元 vs 上年 −48 亿美元）与 ASC 321（<20% 公允价值／替代法重估进营业外：GOOGL 期末替代法非上市股权 641 亿美元，FY25 录得股权证券净收益 24,080 百万美元）。衔接下一篇 NB-E05《债务、融资与现金低谷》。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-e04-fasb-asc280",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://fasb.org/projects/recently-completed-projects/segment-reporting"
      },
      "required_unit": {
        "locator": "FASB ASC Topic 280 管理视角与 ASU 2023-07（Improvements to Reportable Segment Disclosures）核心条款。",
        "scope": "核对 CODM 身份披露、重要分部费用原则以及经营分部认定口径。",
        "purpose": "核对本篇披露分部口径与研究口径差异的准则依据。"
      },
      "title": "FASB：ASC Topic 280 Segment Reporting 与 ASU 2023-07（Improvements to Reportable Segment Disclosures）",
      "authors": [
        "Financial Accounting Standards Board"
      ],
      "version": "2026-11-27 核对 FASB 官网"
    },
    {
      "source_id": "nb-e04-ko-10k-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm"
      },
      "required_unit": {
        "locator": "Item 1（Global Ventures 撤销与改组）、Consolidated Statements、Note 6（Equity Method Investments）与 Note 20（Operating Segments）。",
        "scope": "核对 KO FY2025 分部加总收入 48,950、抵销 −1,009、合并收入 47,941；分部营业利润之和 15,578、Corporate −1,816、合并营业利润 13,762；Corporate CapEx 585 / 2,112；权益法收益 2,031、实收联营分红 993、CFO 扣回 −1,038；合并净利 13,137、少数股东损益 30、归母净利 13,107 及期末 NCI 2,106（百万美元）。",
        "purpose": "核对分部抵销、总部费用、分部改组、权益法现金差额与少数股东权益的完整实证。"
      },
      "title": "The Coca-Cola Company：FY2025 Form 10-K（Item 1、Note 6 与 Note 20）",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e04-googl-10k-fy25",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
      },
      "required_unit": {
        "locator": "Consolidated Statements of Income、Note 3（Investments）、Note 7（Other Income (Expense), Net）、Note 10（VIE / NCI）与 Note 15（Information about Segments）。",
        "scope": "核对 GOOGL FY2025 CODM（Sundar Pichai）、Google Services（342,721 / 139,404）、Google Cloud（58,705 / 13,910）、Other Bets（1,537 / −7,515）、Hedging −127、合并收入 402,836、Alphabet-level activities −16,760、合并营业利润 129,039、股权证券公允价值净收益 24,080、合并净利润 132,170 及期末 NCI 34 亿美元。",
        "purpose": "核对科技集团共享 AI 研发总部成本、单分部合并多产品线以及财务投资公允价值重估的双案例对照。"
      },
      "title": "Alphabet Inc.：FY2025 Form 10-K（Consolidated Statements、Note 3、Note 7、Note 10 与 Note 15）",
      "authors": [
        "Alphabet Inc."
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    },
    {
      "source_id": "nb-e04-msft-10k-fy26",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm"
      },
      "required_unit": {
        "locator": "Item 7 Summary Results of Operations 与 Other Income (Expense), Net 中对 OpenAI 权益法投资损益的披露。",
        "scope": "核对 MSFT FY2026 因 OpenAI 资本重组确认 65 亿美元税前权益法净收益（增厚净利润 50 亿美元、稀释 EPS 0.67 美元），上年同口径为 −48 亿美元税前净亏损。",
        "purpose": "核对大型战略联营投资按权益法进营业外收益、剧烈摆动净利润的真实案例。"
      },
      "title": "Microsoft Corporation：FY2026 Form 10-K（Item 7 Other Income (Expense), Net）",
      "authors": [
        "Microsoft Corporation"
      ],
      "version": "2026-11-27 核对 SEC EDGAR"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127">

把 **The Coca-Cola Company**（KO）2025 财年五个经营分部加上总部的收入直接相加，总额是 48,950 百万美元，合并利润表却只报 47,941 百万美元；再把五个经营分部的营业利润直接相加，总额是 15,578 百万美元，合并营业利润却只剩 13,762 百万美元——一头少了 1,009 百万美元收入，另一头少了 1,816 百万美元利润。[^ko-10k]

前面的[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)与[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)都站在合并后的公司整体读数字。拆解一家多业务集团时，我们往往先按业务线分别估算收入、利润率和资本开支，再把各个模块拼回母公司股东真正享有的合并报表。拼合过程绕不开三道账务关口：财报分部按什么口径切分、集团内部交易与总部共同成本怎样归集，以及不同持股比例的子公司、联营公司和财务投资怎样并进三张表。

## 披露分部与研究口径：为什么分部不等于产品线 {#nb-e04-segment-scope}

美国公认会计准则（US GAAP）下的 **FASB ASC 280**（Segment Reporting，分部报告）采用管理视角（Management Approach）来划定财报分部。简单说，财报里看到哪几个分部，取决于公司的**首席经营决策者**（Chief Operating Decision Maker，简称 CODM）内部怎样审阅经营成果、考核团队和拨付资本开支，与外部投资者习惯按单一产品线拆分口径常常并不重合。[^asc280]

<span data-text-versions id="nb-e04-text-codm">以 **Alphabet**（GOOGL）2025 财年年报为例，附注直接写明 CODM 为首席执行官 **Sundar Pichai**，内部按三条大块做资源配置：Google Services、Google Cloud 与 Other Bets。投资者常想把搜索广告、YouTube、Android 与硬件各自的利润率单独拆出来，GOOGL 在收入附注里确实细列了 Search & other（224,532 百万美元）、YouTube ads（40,367 百万美元）、Google Network（29,792 百万美元）和 Google subscriptions, platforms, and devices（48,030 百万美元），但营业利润只披露到整个 Google Services 汇总层面（139,404 百万美元），单个产品的独立盈利并未公开；后台服务器和办公设施等成本由集团统一管理，再按使用量、人数或收入分摊进分部。[^googl-10k] 同样，KO 的 CODM 为董事长兼首席执行官，内部把浓缩液业务切成 EMEA、Latin America、North America、Asia Pacific 四个地理大区，再把直营装瓶厂单独归成跨区域的 Bottling Investments，原因在于浓缩液与重资产装瓶的毛利率和资本密度截然不同<span data-text-detail>（按 ASC 280 数量门槛，一个经营分部的收入、损益绝对值或总资产只要达到全部经营分部合计的 10% 即须单独报告，且所有可报告分部对外收入合计至少覆盖合并外部收入的 75%。2023 年底发布的 FASB ASU 2023-07 自 2024 财年起陆续生效，进一步要求上市公司在年报与季报中明示 CODM 的职位头衔，并披露常规向 CODM 汇报的重要分部费用——例如 GOOGL 2025 年附注 15 据此拆分了 Google Services 与 Google Cloud 各自的员工薪酬和其他成本费用）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

既然分部跟着内部管理架构走，一旦公司调整组织架构，就会触发**分部改组**（re-segmentation），跨年口径随即变化。2025 年 1 月 1 日起，KO 正式撤销了 2019 年设立的 Global Ventures 经营分部，把 Costa 门店（不含即饮）、innocent 与 doğadan 并入 EMEA，把 Costa 即饮与 Monster 分销协调费归入对应地理大区。[^ko-10k] 虽然新发年报会把前两年历史数字按新架构追溯重述，但如果我们直接从几年前的旧年报抄出 EMEA 历史营收去拼接 2025 年数字，就会把业务搬家误当成区域内生加速。

<figure class="flow-figure e04-codm-map" id="nb-e04-codm-map-fig">
<div class="ff-head"><p class="ff-title">研究视角 vs CODM 分部口径：合并切分与跨年改组</p><span class="ff-sub">左：GOOGL FY25 产品线如何归并进 CODM 分部 · 右：KO 2025 年撤销 Global Ventures 的口径变动</span></div>
<div class="e04-cgrid business-exchange" aria-label="左侧展示 Alphabet（GOOGL）FY2025 的 CODM 分部归并逻辑：CEO Sundar Pichai 作为 CODM，将 Search（224,532 百万美元）、YouTube 广告（40,367）、Google Network（29,792）及订阅平台硬件（48,030）合并为一个经营分部 Google Services（总收入 342,721、仅披露整体营业利润 139,404），Google Cloud 单独报告（58,705 / 13,910），Waymo 与 X 等合并入 Other Bets（1,537 / −7,515），通用前沿 AI 共享研发与总部治理留在未分配的 Alphabet-level activities（−16,760）。右侧展示 Coca-Cola（KO）2025 年 1 月 1 日分部改组：撤销原 Global Ventures 分部，Costa 门店、innocent 与 doğadan 并入 EMEA，Costa 即饮与 Monster 协调费归入对应地理大区，提醒跨年对比须核对重述口径。">
<div class="e04-box">
<div class="e04-bhead"><strong>GOOGL FY25 · CODM 口径归并</strong><span>CODM：Sundar Pichai</span></div>
<div class="e04-flow-cols">
<div>
<div class="e04-col-lbl">投资者常拆的产品线</div>
<div class="e04-stack">
<div class="e04-chip"><b>Search &amp; other / Network</b>224,532 ＋ 29,792（仅披露收入）</div>
<div class="e04-chip"><b>YouTube ads / 订阅硬件</b>40,367 ＋ 48,030（不披露独立利润）</div>
<div class="e04-chip"><b>GCP ＋ Workspace</b>58,705（企业云与办公）</div>
<div class="e04-chip"><b>Waymo / X 等孵化项</b>1,537（多个小分部汇总）</div>
<div class="e04-chip"><b>通用前沿 AI 研发＋总部</b>多业务共享，未拆入分部</div>
</div>
</div>
<div class="e04-mid-arrow" aria-hidden="true">→</div>
<div>
<div class="e04-col-lbl">10-K 披露分部（百万美元）</div>
<div class="e04-stack">
<div class="e04-chip e04-chip-seg"><b>Google Services</b>收入 342,721 · 营业利润 139,404</div>
<div class="e04-chip e04-chip-seg"><b>Google Cloud</b>收入 58,705 · 营业利润 13,910</div>
<div class="e04-chip e04-chip-seg"><b>Other Bets</b>收入 1,537 · 营业亏损 −7,515</div>
<div class="e04-chip e04-chip-corp"><b>Alphabet-level activities</b>未分配共同亏损 −16,760</div>
</div>
</div>
</div>
</div>
<div class="e04-box">
<div class="e04-bhead"><strong>KO 2025 分部改组</strong><span>Effective 2025-01-01</span></div>
<div class="e04-reseg">
<div class="e04-reseg-old"><b>旧口径（2019–2024）：单设 Global Ventures 分部</b>单独归集 Costa、innocent、doğadan 及 Monster 分销协调费。</div>
<div class="e04-reseg-arrow">↓ 2025 年撤销 Global Ventures，业务迁回地理大区 ↓</div>
<div class="e04-reseg-new"><b>新口径（2025 起）：5 个经营分部</b>Costa 门店、innocent、doğadan 并入 EMEA；Costa 即饮与 Monster 协调费归入各对应地理大区；直营装瓶保留在 Bottling Investments。</div>
<div class="e04-warn">跨年拼接分部时间序列时，必须使用最新 10-K 追溯重述后的可比列，避免把架构搬家算成业务增长。</div>
</div>
</div>
</div>
<figcaption>数据取自 Alphabet FY2025 Form 10-K（Note 15）与 Coca-Cola FY2025 Form 10-K（Item 1 及 Note 20）。</figcaption>
</figure>

## 内部交易抵销与总部共同成本 {#nb-e04-eliminations-shared}

弄清分部边界之后，下一步是把各分部数字加回公司合并报表。很多初学者在表格里顺手写一个求和公式，把所有业务分部的收入相加当总收入、把营业利润相加当公司利润，结果往往系统性高估，原因出在两条独立的抵扣线上。

第一条线在收入端，叫**分部间内部交易抵销**（Intersegment Eliminations）与未分配收入调节项。当集团内部 A 分部把原材料或半成品卖给 B 分部时，A 分部为了如实考核自身产出要记一笔内部收入，B 分部相应记一笔内部采购成本。站在单一分部看两头都有理，但站在集团对外部客户做生意的角度，货物只是左手倒右手，并未真正卖出公司大门。合并报表时必须把这笔内部收入和对应的内部营业成本同步抵销；如果期末这批货还压在 B 分部仓库里没有卖给外部客户，连 A 分部已经确认的内部毛利也要一并剔除。

在 KO 2025 财年分部表里，这条内部流转非常清晰：地理大区向自家控股并表的装瓶分部（Bottling Investments）供应饮料浓缩液，仅 EMEA（680 百万美元）和 Asia Pacific（310 百万美元）两区就贡献了 990 百万美元内部销售，五个经营分部合计产生 **1,009 百万美元**分部间收入。把五大经营分部总收入 48,806 加上 Corporate 收入 144，原值高达 48,950 百万美元；合并时从收入端抵销 **−1,009 百万美元**（同时从营业成本里同步抵销 −1,009 百万美元），净营业收入才回到 **47,941 百万美元**。[^ko-10k] 相比之下，GOOGL 的算力和办公设施在集团内部按服务成本分摊，不单列分部间收入抵销，但外汇收入套期保值损益（Hedging gains / losses）不分配给任何分部，2025 年录得 **−127 百万美元**，三大分部收入之和 402,963 百万美元扣掉这一项，才是合并总收入 **402,836 百万美元**。[^googl-10k]

第二条线在利润和资本端，叫**总部未分配共同成本**（Corporate / Unallocated Expenses）与共同资本开支。各业务分部通常只背负直接归属和按规则分摊下去的费用，而服务于全集团的前沿研发、全球品牌与战略治理、法务诉讼和解、共享后台平台以及一次性重组开支，既难以客观硬拆到某一条产品线，又实打实消耗了全体股东的利润和现金。用数学关系写出来，合并营业利润由三项共同决定：

\[
\text{合并营业利润}=\sum_{i}\text{经营分部营业利润}_{i}+\text{分部间未实现利润抵销}+\text{总部未分配共同损益}.
\]

把 KO 与 GOOGL 2025 财年的数据并排对照，就能看出漏扣总部共同成本有多危险。KO 五个经营分部营业利润加总是 **15,578 百万美元**，Corporate 总部录得 **−1,816 百万美元**营业亏损（包含全球战略、平台服务、法务及重组相关的 1,915 百万美元 SG&A 与 216 百万美元其他营业费用，部分被少量收入与成本贷项抵减），合并营业利润落到 **13,762 百万美元**——漏扣总部费用会把营业利润高估 **13.2%**。同样，KO 全年 2,112 百万美元资本开支中，有 **585 百万美元**（占 27.7%）花在 Corporate 层面，并不归入单个大区。[^ko-10k]

再看 GOOGL，Google Services 赚 139,404 百万美元，Google Cloud 赚 13,910 百万美元，Other Bets 亏 −7,515 百万美元，三大经营分部之和为 **145,799 百万美元**；但 **Alphabet-level activities** 单项就录得 **−16,760 百万美元**未分配亏损（较 2023 年的 −9,186 与 2024 年的 −10,541 持续扩大），主要装的正是服务于全集团通用前沿 AI 模型的集中研发薪酬与算力折旧，外加总部财务、人力、法律罚款和裁员办公费用。扣掉这笔共同成本后，合并营业利润为 **129,039 百万美元**——漏扣总部项会把营业利润高估 **13.0%**；如果做分部加总估值时顺手把亏损的 Other Bets 也忽略、只拿 Google Services 与 Google Cloud 相加（153,314 百万美元），营业利润更是被高估 **18.8%**。[^googl-10k]

<figure class="flow-figure e04-dual-compare" id="nb-e04-dual-compare-fig">
<div class="ff-head"><p class="ff-title">双案例对照：KO FY25 与 GOOGL FY25 从分部加总到合并营业利润</p><span class="ff-sub">单位：百万美元 · 两家公司漏扣总部共同成本均令营业利润高估约 13%</span></div>
<div class="e04-dgrid business-exchange" aria-label="双案例对照（单位：百万美元）：一、Coca-Cola（KO）FY2025：五个经营分部加 Corporate 收入相加 48,950，减去分部间抵销 −1,009 得合并净营收 47,941（漏扣高估 2.1%）；五个经营分部营业利润相加 15,578（EMEA 4,298、LatAm 3,742、NA 5,070、APAC 2,042、Bottling Investments 426），减去 Corporate 亏损 −1,816 得合并营业利润 13,762（漏扣高估 13.2%）；此外 Corporate 承担了 585 百万美元资本开支，占全年 2,112 的 27.7%。二、Alphabet（GOOGL）FY2025：三大经营分部收入相加 402,963，减去未分配外汇套保 −127 得合并总收入 402,836；三大分部营业利润相加 145,799（Google Services 139,404、Google Cloud 13,910、Other Bets −7,515），减去 Alphabet-level activities 亏损 −16,760 得合并营业利润 129,039（漏扣高估 13.0%，若同时忽略 Other Bets 则高估 18.8%）。">
<div class="e04-dcard" style="--e04-c:#a8743f">
<div class="e04-dhead"><strong>The Coca-Cola Company（KO）· FY2025</strong><small>截至 2025-12-31</small></div>
<div class="e04-blk"><div class="e04-blk-t">收入端：内部浓缩液销售抵销</div><div class="e04-lines">
<div class="e04-ln"><span>五大分部（48,806）＋ Corporate（144）</span><b>48,950</b></div>
<div class="e04-ln e04-ln-ded"><span>减：分部间抵销 Eliminations（同步扣 COGS）</span><b>−1,009</b></div>
<div class="e04-ln e04-ln-res"><span>合并净营业收入（漏扣高估 +2.1%）</span><b>47,941</b></div>
</div></div>
<div class="e04-blk"><div class="e04-blk-t">营业利润端：总部未分配费用</div><div class="e04-lines">
<div class="e04-ln"><span>五个经营分部营业利润之和</span><b>15,578</b></div>
<div class="e04-ln e04-ln-ded"><span>减：Corporate 营业亏损（治理、平台与重组）</span><b>−1,816</b></div>
<div class="e04-ln e04-ln-res"><span>合并营业利润（漏扣高估 +13.2%）</span><b>13,762</b></div>
</div></div>
<p class="e04-dfoot">资本开支同有未分配项：全年 CapEx 2,112 中，Corporate 占 585（27.7%），不可只加总区域分部资本开支。</p>
</div>
<div class="e04-dcard" style="--e04-c:#23695a">
<div class="e04-dhead"><strong>Alphabet Inc.（GOOGL）· FY2025</strong><small>截至 2025-12-31</small></div>
<div class="e04-blk"><div class="e04-blk-t">收入端：未分配外汇套期保值调节</div><div class="e04-lines">
<div class="e04-ln"><span>Services 342,721 ＋ Cloud 58,705 ＋ Other Bets 1,537</span><b>402,963</b></div>
<div class="e04-ln e04-ln-ded"><span>减：未分配外汇套保损益 Hedging losses</span><b>−127</b></div>
<div class="e04-ln e04-ln-res"><span>合并总收入（漏扣高估 +0.03%）</span><b>402,836</b></div>
</div></div>
<div class="e04-blk"><div class="e04-blk-t">营业利润端：通用 AI 共享研发与总部费用</div><div class="e04-lines">
<div class="e04-ln"><span>Services 139,404 ＋ Cloud 13,910 − Other Bets 7,515</span><b>145,799</b></div>
<div class="e04-ln e04-ln-ded"><span>减：Alphabet-level activities（AI 前沿研发＋总部）</span><b>−16,760</b></div>
<div class="e04-ln e04-ln-res"><span>合并营业利润（漏扣高估 +13.0%）</span><b>129,039</b></div>
</div></div>
<p class="e04-dfoot">Alphabet-level 亏损由 2023 年 −9,186 扩至 2025 年 −16,760；做 SOTP 估值若省略此项或 Other Bets，将严重高估盈利。</p>
</div>
</div>
<figcaption>数字核对自 KO FY2025 Form 10-K（Note 20）与 GOOGL FY2025 Form 10-K（Note 15）。</figcaption>
</figure>

## 互动分部合并桥：漏扣哪一层，数字高估多少 {#nb-e04-bridge-section}

下面的交互合并桥内置了 **KO FY2025** 与 **GOOGL FY2025** 两套完整的 SEC 10-K 真实数字。可以切换公司，逐个开关“分部间抵销／未分配收入”、“总部未分配共同成本”以及“营业利润以下的权益法／股权公允价值与少数股东调整”，或者一键模拟“只把经营分部直接相加”，直观观察漏扣任一层时收入、营业利润、营业利润率与归母净利润的偏差幅度：

<figure class="flow-figure e04-bridge-lab" id="nb-e04-bridge-lab" data-e04-bridge>
<div class="ff-head"><p class="ff-title">互动分部合并桥：从经营分部相加到合并归母净利润</p><span class="ff-sub" data-e04-v="co-name">The Coca-Cola Company（KO）· FY2025</span></div>
<div class="e04-controls" hidden>
<div class="e04-ctrl-row">
<span class="e04-ctrl-lbl">切换公司：</span>
<button type="button" class="e04-tab" data-e04-co="ko" aria-pressed="true">Coca-Cola（KO）· FY25</button>
<button type="button" class="e04-tab" data-e04-co="googl" aria-pressed="false">Alphabet（GOOGL）· FY25</button>
<button type="button" class="e04-preset" data-e04-preset>模拟漏扣（仅分部相加）</button>
</div>
<div class="e04-ctrl-row">
<span class="e04-ctrl-lbl">合并调节开关：</span>
<button type="button" class="e04-tog" data-e04-toggle="elim" aria-pressed="true">✓ 扣分部间抵销 −1,009</button>
<button type="button" class="e04-tog" data-e04-toggle="corp" aria-pressed="true">✓ 扣总部共同成本 −1,816</button>
<button type="button" class="e04-tog" data-e04-toggle="below" aria-pressed="true">✓ 计入权益法 +2,031 与扣 NCI −30</button>
</div>
</div>
<div class="e04-bgrid business-exchange" aria-label="互动分部合并桥（静态默认展示 Coca-Cola KO FY2025 官方全口径合并调节，百万美元）：收入端，五大经营分部加 Corporate 收入之和 48,950，扣减分部间内部交易抵销 −1,009，得合并净营收 47,941（若漏扣抵销则收入高估 2.1%）；营业利润端，五大经营分部营业利润之和 15,578，扣减 Corporate 总部未分配共同成本 −1,816，得合并营业利润 13,762、营业利润率 28.7%（若漏扣总部费用则营业利润高估 13.2%）；营业利润以下，加权益法投资收益 +2,031、加利息净额与其他收益减所得税净额 −2,656，得合并净利润 13,137，再扣归属少数股东损益 −30，落得归母净利润 13,107。切换至 Alphabet GOOGL FY2025 后：三大分部收入之和 402,963 扣未分配套保 −127 得 402,836；三大分部营业利润之和 145,799 扣 Alphabet-level activities −16,760 得合并营业利润 129,039（漏扣高估 13.0%）；营业利润以下加股权证券公允价值净收益 +24,080、权益法 +281、利息及其他减所得税 −21,230，落得合并净利润 132,170。">
<div class="e04-panel">
<div class="e04-phead"><strong>一、收入与营业利润桥</strong><span>百万美元</span></div>
<div class="e04-bsec">
<div class="e04-bsec-t">收入调节</div>
<div class="e04-rows">
<div class="e04-row"><span data-e04-v="rev-base-lbl">五大分部＋Corporate 收入直接相加</span><strong data-e04-v="rev-base">48,950</strong></div>
<div class="e04-row e04-row-adj" data-e04-row="elim"><span data-e04-v="elim-lbl">分部间内部交易抵销（Eliminations）</span><strong data-e04-v="elim-val">−1,009</strong></div>
<div class="e04-row e04-row-tot" data-e04-row="rev-tot"><span>当前测算总收入</span><strong data-e04-v="cur-rev">47,941</strong></div>
</div>
<p class="e04-seglist" data-e04-v="rev-seg-detail">EMEA 11,513 ＋ LatAm 6,334 ＋ NA 19,586 ＋ APAC 5,638 ＋ 装瓶投资 5,735 ＋ Corporate 144</p>
</div>
<div class="e04-bsec">
<div class="e04-bsec-t">营业利润调节</div>
<div class="e04-rows">
<div class="e04-row"><span data-e04-v="op-base-lbl">五个经营分部营业利润之和</span><strong data-e04-v="op-base">15,578</strong></div>
<div class="e04-row e04-row-adj" data-e04-row="corp"><span data-e04-v="corp-lbl">总部未分配共同成本（Corporate 营业亏损）</span><strong data-e04-v="corp-val">−1,816</strong></div>
<div class="e04-row e04-row-tot" data-e04-row="op-tot"><span>当前测算营业利润</span><strong data-e04-v="cur-op">13,762（利润率 28.7%）</strong></div>
</div>
<p class="e04-seglist" data-e04-v="op-seg-detail">EMEA 4,298 ＋ LatAm 3,742 ＋ NA 5,070 ＋ APAC 2,042 ＋ 装瓶投资 426（内部收入与成本同步抵销）</p>
</div>
</div>
<div class="e04-panel">
<div class="e04-phead"><strong>二、营业利润以下 → 归母净利润</strong><span>百万美元</span></div>
<div class="e04-rows">
<div class="e04-row"><span>起点：当前测算营业利润</span><strong data-e04-v="below-op">13,762</strong></div>
<div class="e04-row e04-row-adj" data-e04-row="eqm"><span data-e04-v="eqm-lbl">权益法投资收益（联营装瓶商等，实收现金分红 993）</span><strong data-e04-v="eqm-val">+2,031</strong></div>
<div class="e04-row e04-row-adj" data-e04-row="eqs" hidden><span data-e04-v="eqs-lbl">股权证券公允价值重估（本案主要归入其他项）</span><strong data-e04-v="eqs-val">0</strong></div>
<div class="e04-row"><span data-e04-v="ot-lbl">利息净额 −868 ＋ 其他收益净额 1,073 − 所得税 2,861</span><strong data-e04-v="ot-val">−2,656</strong></div>
<div class="e04-row e04-row-adj" data-e04-row="nci"><span data-e04-v="nci-lbl">减：归属少数股东净利润（NCI）</span><strong data-e04-v="nci-val">−30</strong></div>
<div class="e04-row e04-row-tot" data-e04-row="ni-tot"><span>当前测算归母净利润</span><strong data-e04-v="cur-ni">13,107</strong></div>
</div>
<div class="e04-barwrap">
<div class="e04-barrow"><span>收入高估率</span><div class="e04-bartrack"><div class="e04-barfill" data-e04-bar="rev" style="width:97.9%"></div></div><b data-e04-v="rev-bar-pct">0.0%</b></div>
<div class="e04-barrow"><span>营业利润高估</span><div class="e04-bartrack"><div class="e04-barfill" data-e04-bar="op" style="width:88.3%"></div></div><b data-e04-v="op-bar-pct">0.0%</b></div>
</div>
</div>
</div>
<p class="e04-alert" data-e04-alert>KO FY2025 已完整还原官方 10-K 合并报表：收入 47,941、营业利润 13,762（营业利润率 28.7%）、归母净利润 13,107 百万美元。注意权益法利润 2,031 中仅 993 收到现金分红，差额 1,038 在经营现金流中扣回。</p>
<figcaption>进度条长度反映当前测算值占分部直接加总原值的比例，右侧百分比显示相对官方 10-K 合并数的偏差；关闭上方调节开关即可查看漏扣后的高估幅度。</figcaption>
</figure>

## 控股合并、少数股东权益与权益法：持股比例怎样改写三张表 {#nb-e04-ownership-consolidation}

上面那座桥的后半段已经触及另一个实务问题：一家上市公司除了 100% 全资子公司，还经常持有其他公司从 5% 到 80% 不等的股权。母公司怎样把这些外部实体的经营成果装进自己的三张表，由**控制与影响力的会计边界**决定。一般而言，持股比例给出了最直观的三档划分：

1. **控股合并**（通常持股超过 50%，ASC 810）：只要母公司取得控制权，哪怕只持有子公司 60% 股权，也要把子公司 **100%** 的营业收入、成本费用、现金、厂房和全部债务逐行并进合并报表，而不能只并 60%。子公司其余 40% 属于外部小股东的份额，统一在报表最底端剥离：利润表先算完 100% 口径的**合并净利润**，再减去**归属少数股东的净利润**，得到真正属于母公司普通股股东的**归母净利润**（Net Income Attributable to Parent，每股收益 EPS 只按归母净利润计算）；资产负债表同样在总权益里把**少数股东权益**（Noncontrolling Interests，简称 NCI）单独列出来。KO 2025 财年合并净利润为 13,137 百万美元，底端扣减少数股东损益 30 百万美元后，归母净利润为 **13,107 百万美元**；期末总权益 34,275 百万美元中，有 **2,106 百万美元**归属并表子公司的少数股东，归属 KO 股东的净资产为 32,169 百万美元。[^ko-10k] GOOGL 的自动驾驶子公司 **Waymo** 引入外部融资后仍由母公司合并，2025 年底在资产负债表形成 **34 亿美元**少数股东权益（其中 8.41 亿美元为可赎回少数股东权益）。[^googl-10k]
2. **权益法投资**（通常持股 20%–50%，具备重大影响，ASC 323）：母公司对联营公司有话语权但无控制权时，联营公司的收入、成本和债务**完全不并入**母公司主表，改用“单行合并”——只在利润表营业利润下方单列一行**权益法投资收益**（Equity Income），按持股比例计入联营公司当期净利润；在资产负债表资产端也只记一行权益法投资账面价值。这里藏着一条极易被忽略的现金流落差：利润表按持股比例认账面利润，但经营现金流只认**实际收到银行账户的现金分红**。KO 2025 年底持有 CCEP（18%）、Monster（21%）、AC Bebidas（20%）、Coca-Cola FEMSA（28%）、Coca-Cola HBC（22%）与 Coca-Cola Bottlers Japan（24%）等核心装瓶与联营股权；这些联营公司全年合计实现 **102,800 百万美元**净营收（超过 KO 自身合并收入的两倍）并背负 **64,339 百万美元**总负债，却一分不进 KO 的收入与负债表，KO 资产端只挂 **20,235 百万美元**权益法投资。2025 年 KO 在利润表计入 **2,031 百万美元**权益法投资收益，而全年实际收到的联营现金分红只有 **993 百万美元**，因此在经营现金流量表里，KO 从合并净利润中扣回了未收现的 **1,038 百万美元**。[^ko-10k] 另一个醒目例子是 **Microsoft**（MSFT）对 OpenAI 的战略投资：MSFT 按权益法核算该笔股权并计入营业利润下方的其他收益净额，2026 财年因 OpenAI 资本重组产生稀释收益录得 **65 亿美元**税前净收益（拉高净利润 50 亿美元、稀释 EPS 0.67 美元），而 2025 财年同一科目则是 **−48 亿美元**税前净亏损。[^msft-10k]
3. **财务投资**（通常持股低于 20%，无控制也无重大影响，ASC 321）：既不并入收入与负债，也不按比例分享被投公司净利润。有公开报价的股权按每期末**公允价值**重估，未实现涨跌直接计入利润表营业利润下方的**其他收益／损益**（OI&E）；没有公开报价的非上市股权常采用成本减减值并随可观察的同轮融资价格重估（measurement alternative）。GOOGL 2025 年底按该替代法计量的非上市股权账面价值高达 **641 亿美元**（其中 456 亿美元在当年触发重估），全年在营业利润下方的其他收益净额里录得 **24,080 百万美元**的股权证券净收益（2024 年为 3,714 百万美元），将合并净利润大幅推升至 132,170 百万美元。[^googl-10k] 读这类报表时，务必把营业利润（129,039 百万美元）与营业外的纸面投资重估收益拆开看。

<span data-text-versions id="nb-e04-text-vie">需要留意的是，20% 与 50% 只是实务上的推定门槛，真正决定会计处理的是控制权与重大影响的实质判断。比如 KO 仅持有 CCEP 18% 股份，但凭借董事会席位和装瓶体系协议具备重大影响，依然按权益法核算；反过来，只要满足**可变利益实体**（Variable Interest Entity，简称 VIE）的主要受益人条件——同时拥有主导最核心经济活动的权力，以及承担重大损失或享有重大收益的义务——即便投票权不足 50%，也要纳入全额控股合并<span data-text-detail>（实务里还有两项容易踩坑的合并细则：第一，估值口径必须前后匹配——控股合并下的收入、EBITDA 与自由现金流包含 100% 子公司口径，若计算企业价值 EV 时漏加少数股东权益价值，或拿母公司市值直接除以合并净利润而非归母净利润，都会把估值倍数算偏；第二，母公司与权益法联营公司之间的内部交易同样须按持股比例抵销未实现利润——KO 2025 年附注 6 披露向权益法联营装瓶商的净销售额达 19,044 百万美元，相关内部未实现利润已按持股比例从合并成果中剔除）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure e04-ownership-matrix" id="nb-e04-ownership-fig">
<div class="ff-head"><p class="ff-title">持股边界与三表并账路径：控股合并 vs 权益法 vs 财务投资</p><span class="ff-sub">决定怎么进三张表的是控制权与重大影响，持股比例为常用推定门槛</span></div>
<div class="e04-ogrid business-exchange" aria-label="三类股权投资的三表并账路径对照：一、控股合并（通常持股超过 50% 或 VIE 主要受益人，ASC 810）：收入、营业利润、资产与负债按 100% 全额并入合并报表，利润表底端扣减归属少数股东净利润得出归母净利润，资产负债表总权益单列少数股东权益，现金流量表全额并入子公司现金流（向少数股东派息记在融资现金流）。实例：KO FY25 合并净利 13,137 扣 NCI 30 得归母净利 13,107，期末 NCI 2,106；GOOGL 的 Waymo 等期末 NCI 34 亿美元。二、权益法投资（通常持股 20% 至 50% 具备重大影响，ASC 323）：不并入被投公司收入与负债，利润表营业利润下方单列一行权益法投资收益，资产负债表资产端单列权益法投资账面价值，现金流量表经营现金流仅认实际收到的现金分红。实例：KO FY25 联营公司总收入 102,800 不并表，KO 记权益法利润 2,031、实收分红 993、CFO 扣回 1,038；MSFT FY26 对 OpenAI 录得 +65 亿美元税前权益法收益。三、财务投资（通常持股低于 20% 无重大影响，ASC 321）：不并入收入、营业利润与负债，利润表营业利润下方其他收益确认公允价值变动或可观察融资重估损益与股息，资产负债表记金融投资公允价值或替代法账面值，现金流仅在收息或出售变现时进账。实例：GOOGL FY25 录得股权证券净收益 24,080 百万美元。">
<div class="e04-ocard" style="--e04-oc:#23695a;--e04-obg:#e5efe9">
<span class="e04-otag">通常 &gt; 50% 或 VIE 主受益人 · ASC 810</span>
<strong>控股合并（Consolidation）</strong>
<span class="e04-osub">拥有控制权 · 全额并表再扣少数股东</span>
<ul class="e04-olist">
<li><b>利润表：</b>100% 并入收入与营业利润，底端扣少数股东损益得归母净利润。</li>
<li><b>资产负债表：</b>100% 并入资产与债务，总权益下方单列少数股东权益（NCI）。</li>
<li><b>现金流量表：</b>100% 并入经营与资本现金流，向少数股东派息列融资流出。</li>
</ul>
<div class="e04-ocase"><b>真实数字：</b>KO FY25 扣 NCI 30 得归母净利 13,107、期末 NCI 2,106 百万美元；GOOGL 并表 Waymo 等期末 NCI 34 亿美元。</div>
</div>
<div class="e04-ocard" style="--e04-oc:#a8743f;--e04-obg:#f5ebdf">
<span class="e04-otag">通常 20%–50% 重大影响 · ASC 323</span>
<strong>权益法投资（Equity Method）</strong>
<span class="e04-osub">单行合并 · 利润按比例，现金只认分红</span>
<ul class="e04-olist">
<li><b>利润表：</b>不并收入，仅在营业利润下方按持股比例记一行权益法投资收益。</li>
<li><b>资产负债表：</b>不并债务，资产端单列权益法投资账面值（赚增、分红减）。</li>
<li><b>现金流量表：</b>只认实际收到的现金分红，未收现利润差额须在 CFO 中扣回。</li>
</ul>
<div class="e04-ocase"><b>真实数字：</b>KO 联营收入 1,028 亿不并表，记收益 2,031、实收分红 993（CFO 扣 1,038）；MSFT FY26 记 OpenAI 权益法净收益 +65 亿美元。</div>
</div>
<div class="e04-ocard" style="--e04-oc:#5986a1;--e04-obg:#e8f1f6">
<span class="e04-otag">通常 &lt; 20% 无重大影响 · ASC 321</span>
<strong>财务投资（Fair Value）</strong>
<span class="e04-osub">公允价值或可观察价格重估 · 进营业外</span>
<ul class="e04-olist">
<li><b>利润表：</b>不并收入与营业利润，市价涨跌或融资重估直接进营业外其他收益。</li>
<li><b>资产负债表：</b>按公允价值或替代法账面值列示在金融投资／非上市股权中。</li>
<li><b>现金流量表：</b>账面重估零现金流，仅收到股息或卖出套现时产生现金流入。</li>
</ul>
<div class="e04-ocase"><b>真实数字：</b>GOOGL 期末替代法非上市股权 641 亿美元，FY25 股权证券重估净收益高达 24,080 百万美元，大幅摆动净利润。</div>
</div>
</div>
<figcaption>估值核对要点：控股子公司注意 EV 加回 NCI；权益法联营公司注意看分红转化率与隐含市值；财务投资重估收益须与主营营业利润剥离评估。</figcaption>
</figure>

把业务拆开研究后拼回母公司股东回报时，核对顺序可以固定下来：先读分部附注摸清 CODM 边界与近年有无分部改组，再扣净分部间内部抵销和总部未分配共同成本（连同总部共同资本开支），最后在营业利润下方分清控股子公司的少数股东份额、权益法联营利润与实收分红的现金差额，以及财务投资的公允价值波动。看清合并口径下真正属于母公司股东的利润与现金之后，下一篇[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)接着检验：当经营现金尚未兑现或遭遇周期低谷时，公司账上的债务到期安排与融资渠道能不能扛过现金缺口。

<script src="/notebook/segments-consolidation/ui.js?v=20261127" defer></script>

[^asc280]: Financial Accounting Standards Board，[Segment Reporting (Topic 280) & ASU 2023-07 Completed Project Summary](https://fasb.org/projects/recently-completed-projects/segment-reporting)，CODM 管理视角、10% 数量门槛、75% 收入覆盖要求及重要分部费用披露规则，2026-11-27 查阅。
[^ko-10k]: The Coca-Cola Company，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)，2026-02-20 提交 SEC，Item 1（2025-01-01 撤销 Global Ventures 分部）、Consolidated Statements of Income / Balance Sheets / Cash Flows、Note 6（Equity Method Investments）与 Note 20（Operating Segments）。
[^googl-10k]: Alphabet Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)，2026-02-05 提交 SEC，Consolidated Statements of Income、Note 3（Non-marketable Equity Securities）、Note 7（Other Income (Expense), Net）、Note 10（Waymo / Noncontrolling Interests）与 Note 15（Information about Segments and Geographic Areas）。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Item 7 Summary Results of Operations 与 Other Income (Expense), Net（OpenAI 权益法投资 FY2026 稀释净收益 65 亿美元、FY2025 净亏损 −48 亿美元）。


## Sources
- [FASB：ASC Topic 280 Segment Reporting 与 ASU 2023-07（Improvements to Reportable Segment Disclosures）](https://fasb.org/projects/recently-completed-projects/segment-reporting): 美国财务会计准则委员会（FASB）分部报告准则 ASC 280 及 2023 年 11 月发布的 ASU 2023-07：确立首席经营决策者（CODM）管理视角、10% 数量门槛与 75% 外部收入覆盖要求，并新增披露 CODM 职位身份及常规向 CODM 汇报的重要分部费用（significant segment expenses）。
- [Alphabet Inc.：FY2025 Form 10-K（Consolidated Statements、Note 3、Note 7、Note 10 与 Note 15）](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 财年年报（2026 年 2 月 5 日提交 SEC）：Note 15 明确 CODM 为 CEO Sundar Pichai，按 Google Services（收入 342,721、营业利润 139,404）、Google Cloud（58,705 / 13,910）与 Other Bets（1,537 / −7,515）三块披露；未分配外汇套保损益 −127 调节出合并总收入 402,836，未分配 Alphabet-level activities（主要为通用前沿 AI 共享研发及总部费用）亏损 −16,760 调节出合并营业利润 129,039；Note 3 与 Note 7 披露其他收益净额 29,787 含非上市及上市股权证券公允价值净收益 24,080（期末替代法非上市股权账面 641 亿美元）、权益法收益 281，合并净利润 132,170；Note 10 披露 Waymo 等并表子公司期末少数股东权益 34 亿美元。
- [The Coca-Cola Company：FY2025 Form 10-K（Item 1、Note 6 与 Note 20）](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm): Coca-Cola 2025 财年年报（2026 年 2 月 20 日提交 SEC）：Item 1 披露自 2025 年 1 月 1 日起撤销 Global Ventures 分部并改组至地理大区；Note 20 披露五个经营分部加 Corporate 收入 48,950 百万美元、分部间抵销 −1,009、合并净营收 47,941，五个经营分部营业利润之和 15,578、Corporate 营业亏损 −1,816、合并营业利润 13,762，以及 Corporate 资本开支 585（占全年 2,112 的 27.7%）；Note 6 与主表披露联营企业合计收入 102,800、负债 64,339，KO 录得权益法投资收益 2,031、实收联营现金分红 993（经营现金流扣除未收现差额 −1,038），合并净利润 13,137、少数股东损益 30、归母净利润 13,107，期末少数股东权益 2,106。
- [Microsoft Corporation：FY2026 Form 10-K（Item 7 Other Income (Expense), Net）](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm): Microsoft 2026 财年年报（2026 年 7 月 29 日提交 SEC，截至 2026 年 6 月 30 日）：Item 7 披露对 OpenAI 的股权投资按权益法（ASC 323）核算并计入营业利润下方的 Other income (expense), net，FY2026 因 OpenAI 资本重组产生稀释收益录得 65 亿美元税前净收益（拉高净利润 50 亿美元、稀释 EPS 0.67 美元），FY2025 同口径为 −48 亿美元税前净亏损（拉低净利润 36 亿美元）。

## Content relations
```json
[
  {
    "from": "zh-segments-shared-costs-consolidation",
    "relation": "part_of",
    "to": "topic-E",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [三张财报与经营活动](https://ou-liu-red-sugar.github.io/zh/notebook/three-financial-statements/)
- [客户、产品与收费方式](https://ou-liu-red-sugar.github.io/zh/notebook/customers-products-pricing/)
- [收入增长与市场预期](https://ou-liu-red-sugar.github.io/zh/notebook/revenue-growth-expectations/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
