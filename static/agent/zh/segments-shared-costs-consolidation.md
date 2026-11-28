# 分部、共同成本与合并

按 FASB ASC 280 的 CODM 口径区分财报披露分部与研究产品线，结合 Coca-Cola（KO）FY2025 与 Alphabet（GOOGL）FY2025 真实 10-K 拆解分部间内部交易抵销、总部未分配共同成本与分部改组，并通过互动合并桥与股权边界图厘清控股合并、少数股东权益、权益法与财务投资怎样改写三张表。

Entry: zh-segments-shared-costs-consolidation | Node: NB-E04 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为主线核心篇 NB-E04《分部、共同成本与合并》，承接 NB-E01 与 NB-E03 的公司整体三表认识，把分业务研究接回母公司合并报表。全篇分四节：一、披露分部与研究口径：依 FASB ASC 280 与 ASU 2023-07 解释 CODM 管理视角（GOOGL 由 CEO Sundar Pichai 仅按 Services / Cloud / Other Bets 审阅，不公开 Search 与 YouTube 独立利润；KO 按四大地理大区加 Bottling Investments 审阅，并于 2025-01-01 撤销 Global Ventures 发生分部改组）。二、内部交易抵销与总部共同成本：双案例对照 KO FY2025（五大分部加 Corporate 收入 48,950 扣分部间抵销 −1,009 得合并净营收 47,941；五分部营业利润 15,578 扣 Corporate −1,816 得合并营业利润 13,762，漏扣高估 13.2%；Corporate 占 CapEx 585 / 2,112 = 27.7%）与 GOOGL FY2025（三分部收入 402,963 扣未分配套保 −127 得 402,836；三分部营业利润 145,799 扣 Alphabet-level activities 通用 AI 共享研发与总部费用 −16,760 得 129,039，漏扣高估 13.0%，若同略 Other Bets 则高估 18.8%）。三、互动分部合并桥（ui.js）：在 KO 与 GOOGL 两套真实 10-K 数据间切换，逐项开关分部间抵销、总部共同成本与营业外权益法／公允价值／NCI 调节，实时量化漏扣高估幅度。四、控股合并、少数股东权益与权益法：厘清 ASC 810（>50% 或 VIE 主受益人全额并表并底端扣 NCI：KO 归母净利 13,107 vs 合并 13,137、期末 NCI 2,106；GOOGL Waymo 等期末 NCI 34 亿美元）、ASC 323（20%–50% 重大影响单行合并且现金流只认实收分红：KO 联营收入 102,800 不并表，记权益法利润 2,031 但仅收现分红 993、CFO 扣回 1,038；MSFT FY26 记 OpenAI 权益法净收益 +65 亿美元 vs 上年 −48 亿美元）与 ASC 321（<20% 公允价值／替代法重估进营业外：GOOGL 期末替代法非上市股权 641 亿美元，FY25 录得股权证券净收益 24,080 M 美元）。衔接下一篇 NB-E05《债务、融资与现金低谷》。
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
        "scope": "核对 KO FY2025 分部加总收入 48,950、抵销 −1,009、合并收入 47,941；分部营业利润之和 15,578、Corporate −1,816、合并营业利润 13,762；Corporate CapEx 585 / 2,112；权益法收益 2,031、实收联营分红 993、CFO 扣回 −1,038；合并净利 13,137、少数股东损益 30、归母净利 13,107 及期末 NCI 2,106（M 美元）。",
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
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127c">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

把 **The Coca-Cola Company**（KO）2025 财年各分部加总部的收入直接相加，总额是 48,950 M 美元，合并利润表却只报 47,941 M 美元；再把五个经营分部营业利润加总，总额是 15,578 M 美元，合并营业利润却只剩 13,762 M 美元——收入少了 1,009 M 美元，利润少了 1,816 M 美元。[^ko-10k]

前面两篇[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)与[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)都站在公司整体读账。拆解多业务集团时，把各条业务线拼回母公司股东真正享有的合并报表，绕不开三道关口：分部口径怎么切、内部交易与总部共同成本怎么扣，以及不同持股比例的外部实体怎样并表。

## 披露分部与研究口径：为什么分部不等于产品线 {#nb-e04-segment-scope}

美国公认会计准则（US GAAP）下的 **FASB ASC 280** 按“管理视角”划定财报分部：公开哪几个分部，取决于公司**首席经营决策者**（Chief Operating Decision Maker，简称 CODM）内部怎样考核业务与拨付资本，和外部投资者习惯按单一产品线拆分的口径常常并不重合。[^asc280]

<span data-text-versions id="nb-e04-text-codm">因此，热门产品常常打包在同一个分部里：例如 **Alphabet**（GOOGL）的 CODM（首席执行官 **Sundar Pichai**）只在 Google Services 汇总层面看利润，Search 与 YouTube 不公开独立盈利；KO 则把浓缩液按四大区切分、单划出直营装瓶，正是两类生意的毛利率与资本密度迥异<span data-text-detail>（按 ASC 280 数量门槛，一个经营分部的收入、损益绝对值或总资产只要达到全部经营分部合计的 10% 即须单独报告，且所有可报告分部对外收入合计至少覆盖合并外部收入的 75%。自 2024 财年起陆续生效的 FASB ASU 2023-07 进一步要求年报与季报明示 CODM 职位头衔，并披露向其常规汇报的重要分部费用——GOOGL FY2025 附注 15 据此拆分了 Google Services 与 Google Cloud 各自的员工薪酬与其他成本费用）</span>。[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure e04-codm-map" id="nb-e04-codm-map-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">研究视角 vs CODM 分部口径：归并切分与跨年改组</p><div class="ff-switch" role="group" aria-label="切换视角" hidden><button type="button" data-ff-view-choice="googl" aria-pressed="true">GOOGL · CODM 归并</button><button type="button" data-ff-view-choice="ko" aria-pressed="false">KO · 2025 分部改组</button></div></div>
<div data-ff-only="googl" class="business-exchange" aria-label="Alphabet FY2025 CODM 分部归并（M 美元）：Search、Network、YouTube 与订阅硬件合并入 Google Services（收入 342,721、营业利润 139,404），Google Cloud 单列（58,705 / 13,910），Waymo 等入 Other Bets（−7,515），前沿共享 AI 研发留作 Alphabet-level 未分配（−16,760）。">
<div class="e04-box">
<div class="e04-bhead"><strong>GOOGL FY25 · CODM 口径归并（M 美元）</strong><span>CODM：Sundar Pichai</span></div>
<div class="e04-flow-cols">
<div>
<div class="e04-col-lbl">投资者常拆的产品线</div>
<div class="e04-stack">
<div class="e04-chip"><b>Search &amp; Network</b>224,532 ＋ 29,792（仅收入）</div>
<div class="e04-chip"><b>YouTube &amp; 订阅硬件</b>40,367 ＋ 48,030（无单独利润）</div>
<div class="e04-chip"><b>GCP ＋ Workspace</b>58,705（企业云与办公）</div>
<div class="e04-chip"><b>Waymo / X · 共享 AI 研发</b>小分部汇总 ＋ 总部未分配</div>
</div>
</div>
<div class="e04-mid-arrow" aria-hidden="true">→</div>
<div>
<div class="e04-col-lbl">10-K 披露分部</div>
<div class="e04-stack">
<div class="e04-chip e04-chip-seg"><b>Google Services</b>收入 342,721 · 利润 139,404</div>
<div class="e04-chip e04-chip-seg"><b>Google Cloud</b>收入 58,705 · 利润 13,910</div>
<div class="e04-chip e04-chip-seg"><b>Other Bets</b>收入 1,537 · 亏损 −7,515</div>
<div class="e04-chip e04-chip-corp"><b>Alphabet-level</b>未分配共同亏损 −16,760</div>
</div>
</div>
</div>
</div>
</div>
<div data-ff-only="ko" hidden class="business-exchange" aria-label="Coca-Cola 2025 年 1 月 1 日分部改组：撤销原 Global Ventures 分部，Costa 门店、innocent 与 doğadan 并入 EMEA，Costa 即饮与 Monster 协调费归入对应地理大区，跨年对比须核对重述列。">
<div class="e04-box">
<div class="e04-bhead"><strong>KO 2025 分部改组</strong><span>Effective 2025-01-01</span></div>
<div class="e04-reseg">
<div class="e04-reseg-old"><b>旧口径（2019–2024）：单设 Global Ventures</b>归集 Costa、innocent、doğadan 及 Monster 分销协调费。</div>
<div class="e04-reseg-arrow">↓ 2025 年撤销 Global Ventures，业务迁回地理大区 ↓</div>
<div class="e04-reseg-new"><b>新口径（2025 起）：5 个经营分部</b>Costa 门店、innocent 与 doğadan 并入 EMEA；其余归入对应地理大区；直营装瓶留在 Bottling Investments。</div>
<div class="e04-warn">跨年拼接时间序列时，必须采用最新 10-K 追溯重述后的可比列，避免把架构搬家算成增长。</div>
</div>
</div>
</div>
<figcaption>点击切换 GOOGL 与 KO 案例。数据取自两家 FY2025 Form 10-K（GOOGL Note 15；KO Item 1 及 Note 20）。</figcaption>
</figure>

管理视角还会带来跨年拼接陷阱：**分部改组**（re-segmentation）。切到 KO 分部改组视图可见，KO 在 2025 年撤销 Global Ventures 后，新发年报已把前两年历史数字按新架构追溯重述；但如果顺手拿旧年报里的 EMEA 营收去衔接 2025 年数字，就会把业务搬家误当成区域内生加速。[^ko-10k]

## 内部交易抵销与总部共同成本 {#nb-e04-eliminations-shared}

<span data-text-versions id="nb-e04-text-elim">把各分部报表拼回集团合并表时，顺手求和往往会系统性高估，偏差来自两条独立的抵扣线。第一条在收入端，叫**分部间内部交易抵销**（Intersegment Eliminations）：当 A 分部向集团内 B 分部供货时，内部考核各记一笔收支，但货物并未卖出公司大门，合并时须同步抵销内部收入与内部成本<span data-text-detail>（如果期末这批货还压在 B 分部仓库、尚未卖给外部客户，连 A 分部确认的内部未实现毛利也要一并剔除。KO FY2025 五大经营分部向自营装瓶厂供应浓缩液产生 1,009 M 美元内部收入——仅 EMEA 680 与 Asia Pacific 310 两区便占 990——合并时与营业成本同步抵销，总收入从 48,950 回到 47,941 M 美元；GOOGL 内部算力与办公按成本分摊，收入调节项来自未分配的外汇套保损益 −127 M 美元，三分部之和 402,963 扣除此项后为 402,836 M 美元）</span>。[^ko-10k]<sup>，</sup>[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

第二条在利润和资本端，叫**总部未分配共同成本**（Corporate / Unallocated Expenses）。服务全集团的基础研发、全球品牌治理、法务诉讼和共享后台难以硬拆进单一产品线，却实打实消耗全体股东的利润与现金：

\[
\text{合并营业利润}=\sum_{i}\text{经营分部营业利润}_{i}+\text{分部间未实现利润抵销}+\text{总部未分配共同损益}.
\]

<figure class="flow-figure e04-dual-compare" id="nb-e04-dual-compare-fig" data-e04-dual-tabs>
<div class="ff-head"><p class="ff-title">从分部加总到合并利润：漏扣总部成本高估约 13%（FY2025）</p><span class="ff-sub">切换公司查看单家勾稽桥 · 单位：M 美元</span></div>
<div class="e04-dual-tabs" role="group" aria-label="切换公司案例" hidden><button type="button" class="e04-dual-tab" data-e04-dual-tab="ko" aria-pressed="true">Coca-Cola · FY2025</button><button type="button" class="e04-dual-tab" data-e04-dual-tab="googl" aria-pressed="false">Alphabet · FY2025</button></div>
<div class="rel-svg-wrap business-exchange" data-e04-dual-panel="ko" aria-label="KO FY2025 合并勾稽桥（M 美元）：五大经营分部营业利润相加 15,578，扣除总部未分配 −1,816 得合并营业利润 13,762（漏扣高估 +13.2%），再经联营权益法 +2,031、利息税项 −2,656 与少数股东 −30 得归母净利润 13,107。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e04-k-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
    <marker id="e04-k-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
  </defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="62" text-anchor="middle" font-size="13" fill="#5e6d65">五大分部直接相加</text>
  <text x="118" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#22392f">15,578 M</text>
  <text x="118" y="118" text-anchor="middle" font-size="12" fill="#8f6033">漏扣总部高估 +13.2%</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#e04-k-a)"/>
  <text x="236" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#b5483a">−1,816</text>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="360" y="62" text-anchor="middle" font-size="13" fill="#e5efe9">合并营业利润</text>
  <text x="360" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#ffffff">13,762 M</text>
  <text x="360" y="118" text-anchor="middle" font-size="12" fill="#d7e8df">总部另担 585 M 资本开支</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#e04-k-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="602" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">归母净利润</text>
  <text x="602" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#8f6033">13,107 M</text>
  <text x="602" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">联营 +2,031 · NCI −30</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-e04-dual-panel="googl" hidden aria-label="GOOGL FY2025 合并勾稽桥（M 美元）：三大分部营业利润净额 145,799（含 Other Bets −7,515），扣除 Alphabet-level 未分配共同成本 −16,760 得合并营业利润 129,039（漏扣高估 +13.0%），加股权公允重估 +24,080 等得合并净利润 132,170。">
<svg viewBox="0 0 720 175" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e04-g-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker>
    <marker id="e04-g-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker>
  </defs>
  <rect x="20" y="34" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="118" y="62" text-anchor="middle" font-size="13" fill="#5e6d65">三大分部净额</text>
  <text x="118" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#22392f">145,799 M</text>
  <text x="118" y="118" text-anchor="middle" font-size="12" fill="#8f6033">已含 Other Bets −7,515</text>
  <line x1="216" y1="87" x2="256" y2="87" stroke="#a8743f" stroke-width="2" marker-end="url(#e04-g-a)"/>
  <text x="236" y="76" text-anchor="middle" font-size="12" font-weight="700" fill="#b5483a">−16,760</text>
  <rect x="262" y="34" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="360" y="62" text-anchor="middle" font-size="13" fill="#e5efe9">合并营业利润</text>
  <text x="360" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#ffffff">129,039 M</text>
  <text x="360" y="118" text-anchor="middle" font-size="12" fill="#d7e8df">漏扣总部高估 +13.0%</text>
  <line x1="458" y1="87" x2="498" y2="87" stroke="#23695a" stroke-width="2" marker-end="url(#e04-g-s)"/>
  <rect x="504" y="34" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="602" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">合并净利润</text>
  <text x="602" y="94" text-anchor="middle" font-size="19" font-weight="700" fill="#8f6033">132,170 M</text>
  <text x="602" y="118" text-anchor="middle" font-size="12" fill="#5e6d65">含股权公允重估 +24,080</text>
</svg>
</div>
<figcaption>点击切换两家巨头 2025 财年勾稽桥。细分大区与营业外调节项可在下方互动合并桥逐项开关核对。</figcaption>
</figure>

<span data-text-versions id="nb-e04-text-corp">对照上图，做分部加总估值（SOTP）常在三处算偏：漏扣总部费用会让 KO 与 GOOGL 营业利润双双虚高约 13%；顺手略去亏损孵化项（如 Other Bets），偏差接近两成；若再漏算 KO 近三成总部资本开支或 GOOGL 集中计提的通用 AI 研发，主业利润率与自由现金流都会失真<span data-text-detail>（KO FY2025 总部 −1,816 M 美元亏损由全球战略、平台服务、法务与重组相关的 1,915 M 美元 SG&A 和 216 M 美元其他营业费用构成，被少量收入与成本贷项部分冲抵，总部 CapEx 585 M 美元占全公司 2,112 M 美元的 27.7%；GOOGL 的 Alphabet-level 未分配亏损则从 2023 年的 −9,186、2024 年的 −10,541 扩至 2025 年的 −16,760 M 美元，主要承载全集团共享的前沿 AI 研发薪酬与算力折旧）</span>。[^ko-10k]<sup>，</sup>[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 互动分部合并桥：漏扣哪一层，数字高估多少 {#nb-e04-bridge-section}

下面的互动合并桥内置了 KO 与 GOOGL 2025 财年 10-K 完整数据。切换公司并逐项关闭三类调节开关，或直接点击“模拟漏扣（仅分部相加）”，就能实时观察漏扣每一层对收入、营业利润率与归母净利润的放大效应：

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
<div class="e04-bgrid business-exchange" aria-label="互动分部合并桥（静态默认展示 Coca-Cola KO FY2025 官方全口径合并调节，M 美元）：收入端，五大经营分部加 Corporate 收入之和 48,950，扣减分部间内部交易抵销 −1,009，得合并净营收 47,941（若漏扣抵销则收入高估 2.1%）；营业利润端，五大经营分部营业利润之和 15,578，扣减 Corporate 总部未分配共同成本 −1,816，得合并营业利润 13,762、营业利润率 28.7%（若漏扣总部费用则营业利润高估 13.2%）；营业利润以下，加权益法投资收益 +2,031、加利息净额与其他收益减所得税净额 −2,656，得合并净利润 13,137，再扣归属少数股东损益 −30，落得归母净利润 13,107。切换至 Alphabet GOOGL FY2025 后：三大分部收入之和 402,963 扣未分配套保 −127 得 402,836；三大分部营业利润之和 145,799 扣 Alphabet-level activities −16,760 得合并营业利润 129,039（漏扣高估 13.0%）；营业利润以下加股权证券公允价值净收益 +24,080、权益法 +281、利息及其他减所得税 −21,230，落得合并净利润 132,170。">
<div class="e04-panel">
<div class="e04-phead"><strong>一、收入与营业利润桥</strong><span>M 美元</span></div>
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
<div class="e04-phead"><strong>二、营业利润以下 → 归母净利润</strong><span>M 美元</span></div>
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
<p class="e04-alert" data-e04-alert>KO FY2025 已完整还原官方 10-K 合并报表：收入 47,941、营业利润 13,762（营业利润率 28.7%）、归母净利润 13,107 M 美元。注意权益法利润 2,031 中仅 993 收到现金分红，差额 1,038 在经营现金流中扣回。</p>
<figcaption>进度条长度反映当前测算值占分部直接加总原值的比例，右侧百分比显示相对官方 10-K 合并数的偏差；关闭上方调节开关即可查看漏扣后的高估幅度。</figcaption>
</figure>

## 控股合并、少数股东权益与权益法：持股比例怎样改写三张表 {#nb-e04-ownership-consolidation}

上面那座桥的后半段已经触及第三道关口：上市公司常持有外部企业 5% 到 80% 不等的股权，这些实体怎样装进母公司的三张表，取决于**控制权与重大影响**的会计边界。下图按三档常见门槛，对照它们的并账与现金流路径：

<figure class="flow-figure e04-ownership-matrix" id="nb-e04-ownership-fig" data-ff-views>
<div class="ff-head"><p class="ff-title">持股边界与三表并账路径：控制权决定怎么进表</p><div class="ff-switch" role="group" aria-label="切换并账类别" hidden><button type="button" data-ff-view-choice="ctrl" aria-pressed="true">控股合并（＞50%）</button><button type="button" data-ff-view-choice="eq" aria-pressed="false">权益法（20–50%）</button><button type="button" data-ff-view-choice="fin" aria-pressed="false">财务投资（＜20%）</button></div></div>
<div class="rel-svg-wrap business-exchange" data-ff-only="ctrl" aria-label="控股合并（＞50% 或 VIE 主受益人，ASC 810）：资产负债表 100% 全额并入并在总权益下单列少数股东 NCI；利润表全额进营业利润、底端扣减少数股东损益得归母净利；现金流量表 100% 并入经营与资本现金流。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e04-o-s" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#23695a"/></marker></defs>
  <rect x="20" y="24" width="196" height="106" rx="10" fill="#f3f8f4" stroke="#b9d0c2" stroke-width="1.3"/>
  <text x="118" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#23695a">资产负债表</text>
  <text x="118" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">100% 全额并表</text>
  <text x="118" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">总权益单列少数股东 NCI</text>
  <line x1="216" y1="77" x2="256" y2="77" stroke="#23695a" stroke-width="2" marker-end="url(#e04-o-s)"/>
  <rect x="262" y="24" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">利润表</text>
  <text x="360" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">全额进营业利润</text>
  <text x="360" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">底端扣 NCI 得归母净利</text>
  <line x1="458" y1="77" x2="498" y2="77" stroke="#23695a" stroke-width="2" marker-end="url(#e04-o-s)"/>
  <rect x="504" y="24" width="196" height="106" rx="10" fill="#23695a"/>
  <text x="602" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#e5efe9">现金流量表</text>
  <text x="602" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#ffffff">100% 并入 CFO/CapEx</text>
  <text x="602" y="110" text-anchor="middle" font-size="12" fill="#d7e8df">向少数股东派息入融资</text>
  <text x="24" y="162" font-size="12.5" fill="#23695a">实例：KO 扣 NCI 30 M · GOOGL Waymo NCI 34 亿</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="eq" hidden aria-label="权益法投资（20%–50% 具重大影响，ASC 323）：资产负债表不并表收入与债务，资产端仅挂一行权益法投资；利润表在营业利润下方单行按比例确认联营净利；现金流量表只认实收分红，未收现差额须从 CFO 扣回。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e04-o-a" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#a8743f"/></marker></defs>
  <rect x="20" y="24" width="196" height="106" rx="10" fill="#fcf8f3" stroke="#ead9c4" stroke-width="1.3"/>
  <text x="118" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#8f6033">资产负债表</text>
  <text x="118" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">收入债务不并表</text>
  <text x="118" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">资产端单挂权益法投资</text>
  <line x1="216" y1="77" x2="256" y2="77" stroke="#a8743f" stroke-width="2" marker-end="url(#e04-o-a)"/>
  <rect x="262" y="24" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">利润表</text>
  <text x="360" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">营业利润下单行</text>
  <text x="360" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">按持股比例认联营净利</text>
  <line x1="458" y1="77" x2="498" y2="77" stroke="#a8743f" stroke-width="2" marker-end="url(#e04-o-a)"/>
  <rect x="504" y="24" width="196" height="106" rx="10" fill="#a8743f"/>
  <text x="602" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#f9efe3">现金流量表</text>
  <text x="602" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#ffffff">只认实收分红</text>
  <text x="602" y="110" text-anchor="middle" font-size="12" fill="#f5e6d3">未收现差额从 CFO 扣回</text>
  <text x="24" y="162" font-size="12.5" fill="#8f6033">实例：KO 联营 2,031 M vs 分红 993 M</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-ff-only="fin" hidden aria-label="财务投资（＜20% 无重大影响，ASC 321）：收入与债务不并表，资产端记金融投资；市价或同轮融资重估损益直接进营业外 OI&amp;E；未实现重估零现金流。">
<svg viewBox="0 0 720 180" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e04-o-b" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0 1.2 L9 5 L0 8.8 z" fill="#4a738c"/></marker></defs>
  <rect x="20" y="24" width="196" height="106" rx="10" fill="#f2f6f9" stroke="#b7cfde" stroke-width="1.3"/>
  <text x="118" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#3b5a70">资产负债表</text>
  <text x="118" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">完全不并表</text>
  <text x="118" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">记金融投资／非上市股权</text>
  <line x1="216" y1="77" x2="256" y2="77" stroke="#4a738c" stroke-width="2" marker-end="url(#e04-o-b)"/>
  <rect x="262" y="24" width="196" height="106" rx="10" fill="#fbfbf6" stroke="#dfe5dc" stroke-width="1.3"/>
  <text x="360" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#22392f">利润表</text>
  <text x="360" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#22392f">重估进营业外</text>
  <text x="360" y="110" text-anchor="middle" font-size="12" fill="#5e6d65">市价或同轮融资涨跌入账</text>
  <line x1="458" y1="77" x2="498" y2="77" stroke="#4a738c" stroke-width="2" marker-end="url(#e04-o-b)"/>
  <rect x="504" y="24" width="196" height="106" rx="10" fill="#3b5a70"/>
  <text x="602" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="#e6eff5">现金流量表</text>
  <text x="602" y="84" text-anchor="middle" font-size="16" font-weight="700" fill="#ffffff">账面重估零现金</text>
  <text x="602" y="110" text-anchor="middle" font-size="12" fill="#d3e3ee">仅收息或出售变现入账</text>
  <text x="24" y="162" font-size="12.5" fill="#3b5a70">实例：GOOGL FY25 股权公允重估 +24,080 M</text>
</svg>
</div>
<figcaption>点击切换三类持股并账路径（ASC 810 / 323 / 321）。估值核对时，控股留意 EV 加回 NCI，权益法留意分红转化率，财务投资须剥离重估波动。</figcaption>
</figure>

<span data-text-versions id="nb-e04-text-nci">看**控股合并**报表，常踩的坑在估值口径错配。哪怕母公司只占 60% 股权，子公司仍 **100%** 全额并表，外方份额在利润表底端和权益里作为**少数股东权益**（Noncontrolling Interests，简称 NCI）剥离。因此每股收益（EPS）只按**归母净利润**算；算企业价值（EV）倍数时，既然分母的 EBITDA 含 100% 口径，分子也须加回 NCI<span data-text-detail>（KO FY2025 合并净利润 13,137 M 美元，底端扣减少数股东损益 30 M 美元得归母净利润 13,107 M 美元；期末总权益 34,275 M 美元中，2,106 M 美元归属少数股东、32,169 M 美元归属 KO 股东。GOOGL 控股并表的 Waymo 等实体在 2025 年底形成 34 亿美元 NCI，其中 8.41 亿美元为可赎回少数股东权益）</span>。[^ko-10k]<sup>，</sup>[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e04-text-eqm">**权益法**的盲区在纸面利润与实收现金错位，以及留在表外的联营体杠杆。像上图 KO 联营装瓶商，营收与债务全在表外，当年账面确认的**权益法投资收益**只有不到一半变成实收分红，差额须在经营现金流里扣回。遇到大型战略持股，这一行还会剧烈摆动净利，如 **Microsoft**（MSFT）对 OpenAI 的损益两年间便从巨亏翻成巨盈<span data-text-detail>（KO 2025 年底持有 CCEP 18%、Monster 21%、AC Bebidas 20%、Coca-Cola FEMSA 28%、Coca-Cola HBC 22% 与 Coca-Cola Bottlers Japan 24% 等联营股权，这些联营体全年合计净营收 102,800 M 美元、总负债 64,339 M 美元，KO 资产端仅挂 20,235 M 美元权益法投资，当年确认收益 2,031 M 美元、实收分红 993 M 美元，CFO 扣回未收现差额 1,038 M 美元；MSFT FY2026 因 OpenAI 资本重组稀释确认 65 亿美元税前权益法净收益，增厚净利润 50 亿美元、稀释 EPS 0.67 美元，而 FY2025 同口径为 −48 亿美元税前净亏损）</span>。[^ko-10k]<sup>，</sup>[^msft-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e04-text-eqs">持股低于 20% 且无重大影响的**财务投资**，既不并表也不按比例分享盈利，改按期末**公允价值**重估，未实现涨跌直接计入营业利润下方的其他收益。当科技巨头手握大量非上市股权时，被投企业一轮新融资就可能触发百亿美元级账面浮盈——就像 GOOGL 2025 年营业外巨额重估直接把净利润推高到营业利润之上，读表时务必与主营盈利剥离<span data-text-detail>（无公开报价的非上市股权常采用成本减减值并随可观察同轮融资价格重估的替代法，即 measurement alternative；GOOGL 2025 年底按该替代法计量的非上市股权账面价值达 641 亿美元，其中 456 亿美元当年触发重估，全年在营业外其他收益录得 24,080 M 美元股权证券净收益，较 2024 年的 3,714 M 美元大增，将合并净利润推升至 132,170 M 美元，高于营业利润 129,039 M 美元）</span>。[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-e04-text-vie">一般而言，20% 与 50% 只是实务上的推定门槛，会计归类最终看控制权与重大影响的实质。比如 KO 仅持有 CCEP 18% 股份，但凭借董事会席位和装瓶体系协议具备重大影响，依然按权益法核算；反过来，只要满足**可变利益实体**（Variable Interest Entity，简称 VIE）的主要受益人条件，即便投票权不足 50%，仍须纳入全额控股合并<span data-text-detail>（VIE 主要受益人须同时拥有主导最核心经济活动的权力，以及承担重大损失或享有重大收益的义务。此外，母公司与权益法联营公司之间的内部交易同样须按持股比例抵销未实现利润——KO FY2025 附注 6 披露向权益法联营装瓶商净销售额达 19,044 M 美元，相关内部未实现利润已按比例剔除）</span>。[^ko-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

厘清分部边界、扣净总部共同成本，并剥离少数股东份额与账面重估之后，我们才拿到真正属于母公司股东的利润与现金底座。下一篇[《债务、融资与现金低谷》](/zh/notebook/debt-financing-cash-troughs/)接着检验：当经营现金遭遇周期低谷或尚未兑现时，账上的债务到期结构与融资渠道能否扛过缺口。

<script src="/notebook/segments-consolidation/ui.js?v=20261127c" defer></script>

[^asc280]: Financial Accounting Standards Board，[Segment Reporting (Topic 280) & ASU 2023-07 Completed Project Summary](https://fasb.org/projects/recently-completed-projects/segment-reporting)，CODM 管理视角、10% 数量门槛、75% 收入覆盖要求及重要分部费用披露规则，2026-11-27 查阅。
[^ko-10k]: The Coca-Cola Company，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm)，2026-02-20 提交 SEC，Item 1（2025-01-01 撤销 Global Ventures 分部）、Consolidated Statements of Income / Balance Sheets / Cash Flows、Note 6（Equity Method Investments）与 Note 20（Operating Segments）。
[^googl-10k]: Alphabet Inc.，[FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)，2026-02-05 提交 SEC，Consolidated Statements of Income、Note 3（Non-marketable Equity Securities）、Note 7（Other Income (Expense), Net）、Note 10（Waymo / Noncontrolling Interests）与 Note 15（Information about Segments and Geographic Areas）。
[^msft-10k]: Microsoft Corporation，[FY2026 Form 10-K](https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm)，2026-07-29 提交 SEC，Item 7 Summary Results of Operations 与 Other Income (Expense), Net（OpenAI 权益法投资 FY2026 稀释净收益 65 亿美元、FY2025 净亏损 −48 亿美元）。


## Sources
- [FASB：ASC Topic 280 Segment Reporting 与 ASU 2023-07（Improvements to Reportable Segment Disclosures）](https://fasb.org/projects/recently-completed-projects/segment-reporting): 美国财务会计准则委员会（FASB）分部报告准则 ASC 280 及 2023 年 11 月发布的 ASU 2023-07：确立首席经营决策者（CODM）管理视角、10% 数量门槛与 75% 外部收入覆盖要求，并新增披露 CODM 职位身份及常规向 CODM 汇报的重要分部费用（significant segment expenses）。
- [Alphabet Inc.：FY2025 Form 10-K（Consolidated Statements、Note 3、Note 7、Note 10 与 Note 15）](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 财年年报（2026 年 2 月 5 日提交 SEC）：Note 15 明确 CODM 为 CEO Sundar Pichai，按 Google Services（收入 342,721、营业利润 139,404）、Google Cloud（58,705 / 13,910）与 Other Bets（1,537 / −7,515）三块披露；未分配外汇套保损益 −127 调节出合并总收入 402,836，未分配 Alphabet-level activities（主要为通用前沿 AI 共享研发及总部费用）亏损 −16,760 调节出合并营业利润 129,039；Note 3 与 Note 7 披露其他收益净额 29,787 含非上市及上市股权证券公允价值净收益 24,080（期末替代法非上市股权账面 641 亿美元）、权益法收益 281，合并净利润 132,170；Note 10 披露 Waymo 等并表子公司期末少数股东权益 34 亿美元。
- [The Coca-Cola Company：FY2025 Form 10-K（Item 1、Note 6 与 Note 20）](https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm): Coca-Cola 2025 财年年报（2026 年 2 月 20 日提交 SEC）：Item 1 披露自 2025 年 1 月 1 日起撤销 Global Ventures 分部并改组至地理大区；Note 20 披露五个经营分部加 Corporate 收入 48,950 M 美元、分部间抵销 −1,009、合并净营收 47,941，五个经营分部营业利润之和 15,578、Corporate 营业亏损 −1,816、合并营业利润 13,762，以及 Corporate 资本开支 585（占全年 2,112 的 27.7%）；Note 6 与主表披露联营企业合计收入 102,800、负债 64,339，KO 录得权益法投资收益 2,031、实收联营现金分红 993（经营现金流扣除未收现差额 −1,038），合并净利润 13,137、少数股东损益 30、归母净利润 13,107，期末少数股东权益 2,106。
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
