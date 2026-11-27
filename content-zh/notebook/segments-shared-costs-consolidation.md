{
  "title": "分部、共同成本与合并",
  "description": "按 FASB ASC 280 的 CODM 口径区分财报披露分部与研究产品线，结合 Coca-Cola（KO）FY2025 与 Alphabet（GOOGL）FY2025 真实 10-K 拆解分部间内部交易抵销、总部未分配共同成本与分部改组，并通过互动合并桥与股权边界图厘清控股合并、少数股东权益、权益法与财务投资怎样改写三张表。",
  "layout": "entry",
  "notebookid": "zh-segments-shared-costs-consolidation",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-segments-shared-costs-consolidation"
}

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261127c">

把 **The Coca-Cola Company**（KO）2025 财年各分部加总部的收入直接相加，总额是 48,950 M 美元，合并利润表却只报 47,941 M 美元；再把五个经营分部营业利润加总，总额是 15,578 M 美元，合并营业利润却只剩 13,762 M 美元——收入少了 1,009 M 美元，利润少了 1,816 M 美元。[^ko-10k]

前面两篇[《三张财报与经营活动》](/zh/notebook/three-financial-statements/)与[《利润、资本开支与现金》](/zh/notebook/profit-capex-cash/)都站在公司整体读账。拆解多业务集团时，把各条业务线拼回母公司股东真正享有的合并报表，绕不开三道关口：分部口径怎么切、内部交易与总部共同成本怎么扣，以及不同持股比例的外部实体怎样并表。

## 披露分部与研究口径：为什么分部不等于产品线 {#nb-e04-segment-scope}

美国公认会计准则（US GAAP）下的 **FASB ASC 280** 按“管理视角”划定财报分部：公开哪几个分部，取决于公司**首席经营决策者**（Chief Operating Decision Maker，简称 CODM）内部怎样考核业务与拨付资本，和外部投资者习惯按单一产品线拆分的口径常常并不重合。[^asc280]

<span data-text-versions id="nb-e04-text-codm">因此，热门产品常常打包在同一个分部里：例如 **Alphabet**（GOOGL）的 CODM（首席执行官 **Sundar Pichai**）只在 Google Services 汇总层面看利润，Search 与 YouTube 不公开独立盈利；KO 则把浓缩液按四大区切分、单划出直营装瓶，正是两类生意的毛利率与资本密度迥异<span data-text-detail>（按 ASC 280 数量门槛，一个经营分部的收入、损益绝对值或总资产只要达到全部经营分部合计的 10% 即须单独报告，且所有可报告分部对外收入合计至少覆盖合并外部收入的 75%。自 2024 财年起陆续生效的 FASB ASU 2023-07 进一步要求年报与季报明示 CODM 职位头衔，并披露向其常规汇报的重要分部费用——GOOGL FY2025 附注 15 据此拆分了 Google Services 与 Google Cloud 各自的员工薪酬与其他成本费用）</span>。[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure e04-codm-map" id="nb-e04-codm-map-fig">
<div class="ff-head"><p class="ff-title">研究视角 vs CODM 分部口径：合并切分与跨年改组</p><span class="ff-sub">左：GOOGL FY25 产品线如何归并进 CODM 分部 · 右：KO 2025 年撤销 Global Ventures 的口径变动</span></div>
<div class="e04-cgrid business-exchange" aria-label="左侧展示 Alphabet（GOOGL）FY2025 的 CODM 分部归并逻辑：CEO Sundar Pichai 作为 CODM，将 Search（224,532 M 美元）、YouTube 广告（40,367）、Google Network（29,792）及订阅平台硬件（48,030）合并为一个经营分部 Google Services（总收入 342,721、仅披露整体营业利润 139,404），Google Cloud 单独报告（58,705 / 13,910），Waymo 与 X 等合并入 Other Bets（1,537 / −7,515），通用前沿 AI 共享研发与总部治理留在未分配的 Alphabet-level activities（−16,760）。右侧展示 Coca-Cola（KO）2025 年 1 月 1 日分部改组：撤销原 Global Ventures 分部，Costa 门店、innocent 与 doğadan 并入 EMEA，Costa 即饮与 Monster 协调费归入对应地理大区，提醒跨年对比须核对重述口径。">
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
<div class="e04-col-lbl">10-K 披露分部（M 美元）</div>
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

管理视角还会带来跨年拼接陷阱：**分部改组**（re-segmentation）。如右图所示，KO 在 2025 年撤销 Global Ventures 后，新发年报已把前两年历史数字按新架构追溯重述；但如果顺手拿旧年报里的 EMEA 营收去衔接 2025 年数字，就会把业务搬家误当成区域内生加速。[^ko-10k]

## 内部交易抵销与总部共同成本 {#nb-e04-eliminations-shared}

<span data-text-versions id="nb-e04-text-elim">把各分部报表拼回集团合并表时，顺手求和往往会系统性高估，偏差来自两条独立的抵扣线。第一条在收入端，叫**分部间内部交易抵销**（Intersegment Eliminations）：当 A 分部向集团内 B 分部供货时，内部考核各记一笔收支，但货物并未卖出公司大门，合并时须同步抵销内部收入与内部成本<span data-text-detail>（如果期末这批货还压在 B 分部仓库、尚未卖给外部客户，连 A 分部确认的内部未实现毛利也要一并剔除。KO FY2025 五大经营分部向自营装瓶厂供应浓缩液产生 1,009 M 美元内部收入——仅 EMEA 680 与 Asia Pacific 310 两区便占 990——合并时与营业成本同步抵销，总收入从 48,950 回到 47,941 M 美元；GOOGL 内部算力与办公按成本分摊，收入调节项来自未分配的外汇套保损益 −127 M 美元，三分部之和 402,963 扣除此项后为 402,836 M 美元）</span>。[^ko-10k]<sup>，</sup>[^googl-10k]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

第二条在利润和资本端，叫**总部未分配共同成本**（Corporate / Unallocated Expenses）。服务全集团的基础研发、全球品牌治理、法务诉讼和共享后台难以硬拆进单一产品线，却实打实消耗全体股东的利润与现金：

\[
\text{合并营业利润}=\sum_{i}\text{经营分部营业利润}_{i}+\text{分部间未实现利润抵销}+\text{总部未分配共同损益}.
\]

<figure class="flow-figure e04-dual-compare" id="nb-e04-dual-compare-fig" data-e04-dual-tabs>
<div class="ff-head"><p class="ff-title">从分部加总到合并利润：KO FY25 与 GOOGL FY25 真实勾稽桥</p><span class="ff-sub">切换公司查看单家完整流向 · 单位：M 美元 · 漏扣总部未分配成本均令营业利润高估约 13%</span></div>
<div class="e04-dual-tabs" role="group" aria-label="切换公司案例" hidden><button type="button" class="e04-dual-tab" data-e04-dual-tab="ko" aria-pressed="true">Coca-Cola · FY2025</button><button type="button" class="e04-dual-tab" data-e04-dual-tab="googl" aria-pressed="false">Alphabet · FY2025</button></div>
<div class="rel-svg-wrap business-exchange" data-e04-dual-panel="ko" aria-label="Coca-Cola（KO）FY2025 真实分部到合并利润勾稽图（单位 M 美元）：五大经营分部营业利润为 North America 5,070、EMEA 4,298、Latin America 3,742、Asia Pacific 2,042、Bottling Investments 426，直接相加得 15,578（另收入加总 48,950 扣内部抵销 1,009 得合并净营收 47,941）；经琥珀色曲线箭头扣除总部未分配费用 Corporate −1,816 后，落入合并营业利润 13,762（漏扣高估 +13.2%，且 Corporate 另承担 585 M 资本开支、占全公司 27.7%）；再经绿色曲线箭头加回联营权益法收益 +2,031、扣除净利息其他与所得税净额 −2,656、扣减少数股东损益 NCI −30，落入归母净利润 13,107（联营装瓶商 1,028 亿美元营收均在表外）。">
<svg viewBox="0 0 860 270" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e04-ko-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e04-ko-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="270" rx="8" fill="#fafaf6"/>
  <text x="20" y="28" font-size="12.5" font-weight="700" fill="#1f5c4e">The Coca-Cola Company（KO）· FY2025 Form 10-K</text>
  <text x="840" y="28" text-anchor="end" font-size="11" fill="#66736c">单位：M 美元 · 收入加总 48,950 − 内部抵销 1,009 ＝ 47,941</text>
  <rect x="18" y="42" width="246" height="212" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <text x="141" y="65" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">五大经营分部营业利润</text>
  <line x1="32" y1="75" x2="250" y2="75" stroke="#eaede5"/>
  <text x="34" y="96" font-size="12" fill="#2e3c36">North America</text><text x="248" y="96" text-anchor="end" font-size="12" fill="#2e3c36">5,070</text>
  <text x="34" y="118" font-size="12" fill="#2e3c36">EMEA</text><text x="248" y="118" text-anchor="end" font-size="12" fill="#2e3c36">4,298</text>
  <text x="34" y="140" font-size="12" fill="#2e3c36">Latin America</text><text x="248" y="140" text-anchor="end" font-size="12" fill="#2e3c36">3,742</text>
  <text x="34" y="162" font-size="12" fill="#2e3c36">Asia Pacific</text><text x="248" y="162" text-anchor="end" font-size="12" fill="#2e3c36">2,042</text>
  <text x="34" y="184" font-size="12" fill="#2e3c36">Bottling Investments</text><text x="248" y="184" text-anchor="end" font-size="12" fill="#2e3c36">426</text>
  <line x1="32" y1="196" x2="250" y2="196" stroke="#eaede5"/>
  <rect x="28" y="206" width="226" height="30" rx="6" fill="#f5f5ec"/>
  <text x="38" y="225.5" font-size="12.5" font-weight="700" fill="#1d2a25">五分部简单相加</text><text x="244" y="225.5" text-anchor="end" font-size="12.5" font-weight="700" fill="#1d2a25">15,578</text>
  <rect x="334" y="54" width="216" height="188" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.3"/>
  <text x="442" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">合并营业利润口径</text>
  <line x1="348" y1="88" x2="536" y2="88" stroke="#eaede5"/>
  <text x="350" y="110" font-size="12" fill="#5d6b64">分部利润加总</text><text x="534" y="110" text-anchor="end" font-size="12" fill="#5d6b64">15,578</text>
  <text x="350" y="134" font-size="12" font-weight="600" fill="#8d5520">减：Corporate 总部</text><text x="534" y="134" text-anchor="end" font-size="12" font-weight="600" fill="#8d5520">−1,816</text>
  <rect x="346" y="146" width="192" height="30" rx="6" fill="#e2ede7"/>
  <text x="356" y="165.5" font-size="12.5" font-weight="700" fill="#1f5c4e">合并营业利润</text><text x="528" y="165.5" text-anchor="end" font-size="13" font-weight="700" fill="#1f5c4e">13,762</text>
  <text x="442" y="198" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">漏扣总部会高估 +13.2%</text>
  <text x="442" y="218" text-anchor="middle" font-size="10.2" fill="#66736c">总部另担 585 M 资本开支（占 27.7%）</text>
  <rect x="618" y="54" width="224" height="188" rx="10" fill="#ffffff" stroke="#dfb98d" stroke-width="1.3"/>
  <text x="730" y="78" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">权益法与少数股东调节</text>
  <line x1="632" y1="88" x2="828" y2="88" stroke="#eaede5"/>
  <text x="634" y="110" font-size="12" fill="#1f5c4e">加：联营权益法收益</text><text x="826" y="110" text-anchor="end" font-size="12" font-weight="600" fill="#1f5c4e">+2,031</text>
  <text x="634" y="132" font-size="12" fill="#5d6b64">净利息、其他与所得税</text><text x="826" y="132" text-anchor="end" font-size="12" fill="#5d6b64">−2,656</text>
  <text x="634" y="154" font-size="12" fill="#5d6b64">减：少数股东损益 NCI</text><text x="826" y="154" text-anchor="end" font-size="12" fill="#5d6b64">−30</text>
  <rect x="630" y="166" width="200" height="30" rx="6" fill="#f4e5d2"/>
  <text x="640" y="185.5" font-size="12.5" font-weight="700" fill="#8d5520">归母净利润</text><text x="820" y="185.5" text-anchor="end" font-size="13" font-weight="700" fill="#8d5520">13,107</text>
  <text x="730" y="218" text-anchor="middle" font-size="10.2" fill="#66736c">联营 1,028 亿美元营收均在表外</text>
  <path d="M264,221 C300,221 298,152 330,152" fill="none" stroke="#a8743f" stroke-width="2.1" marker-end="url(#e04-ko-amber)"/>
  <rect x="268" y="166" width="60" height="34" rx="4" fill="#fafaf6"/>
  <text x="298" y="180" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8d5520">扣总部</text>
  <text x="298" y="195" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8d5520">−1,816</text>
  <path d="M550,161 C582,161 582,178 614,178" fill="none" stroke="#23695a" stroke-width="2.1" marker-end="url(#e04-ko-sage)"/>
  <rect x="554" y="122" width="60" height="34" rx="4" fill="#fafaf6"/>
  <text x="584" y="136" text-anchor="middle" font-size="10.5" font-weight="700" fill="#23695a">表外联营</text>
  <text x="584" y="151" text-anchor="middle" font-size="10.5" font-weight="700" fill="#23695a">与 NCI</text>
</svg>
</div>
<div class="rel-svg-wrap business-exchange" data-e04-dual-panel="googl" aria-label="Alphabet（GOOGL）FY2025 真实分部到合并利润勾稽图（单位 M 美元）：三大经营分部营业利润为 Google Services 139,404、Google Cloud 13,910、Other Bets −7,515，三分部净额 145,799（若仅加盈利两部则高达 153,314，高估 +18.8%；收入加总 402,963 扣未分配套保 127 得合并收入 402,836）；经琥珀色曲线箭头扣除 Alphabet-level 未分配共同成本 −16,760（主要是跨业务共享的基础 AI 研发与集团总部治理费用，2023 年仅 −9,186），落入合并营业利润 129,039（漏扣总部会高估 +13.0%）；营业利润下方叠加股权证券公允价值重估净收益 +24,080 等营业外项后，合并净利润为 132,170。" hidden>
<svg viewBox="0 0 860 250" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e04-go-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e04-go-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="250" rx="8" fill="#fafaf6"/>
  <text x="20" y="28" font-size="12.5" font-weight="700" fill="#2c4459">Alphabet Inc.（GOOGL）· FY2025 Form 10-K</text>
  <text x="840" y="28" text-anchor="end" font-size="11" fill="#66736c">单位：M 美元 · 收入加总 402,963 − 未分配套保 127 ＝ 402,836</text>
  <rect x="18" y="44" width="286" height="188" rx="10" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.2"/>
  <text x="161" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">三大经营分部营业利润</text>
  <line x1="32" y1="78" x2="290" y2="78" stroke="#eaede5"/>
  <text x="34" y="102" font-size="12" fill="#2e3c36">Google Services（搜索 / YT）</text><text x="288" y="102" text-anchor="end" font-size="12" fill="#2e3c36">139,404</text>
  <text x="34" y="128" font-size="12" fill="#2e3c36">Google Cloud（云业务）</text><text x="288" y="128" text-anchor="end" font-size="12" fill="#2e3c36">13,910</text>
  <text x="34" y="154" font-size="12" fill="#8d5520">Other Bets（前沿孵化）</text><text x="288" y="154" text-anchor="end" font-size="12" fill="#8d5520">−7,515</text>
  <line x1="32" y1="168" x2="290" y2="168" stroke="#eaede5"/>
  <rect x="28" y="178" width="266" height="30" rx="6" fill="#f5f5ec"/>
  <text x="38" y="197.5" font-size="12" font-weight="700" fill="#1d2a25">三分部净额</text><text x="284" y="197.5" text-anchor="end" font-size="12.5" font-weight="700" fill="#1d2a25">145,799</text>
  <text x="161" y="222" text-anchor="middle" font-size="10.2" fill="#66736c">若仅加盈利两部达 153,314（高估 +18.8%）</text>
  <rect x="356" y="68" width="204" height="140" rx="10" fill="#fdf8f0" stroke="#e4c59e" stroke-width="1.3"/>
  <text x="458" y="94" text-anchor="middle" font-size="13" font-weight="700" fill="#8d5520">Alphabet-level 未分配</text>
  <rect x="376" y="106" width="164" height="34" rx="6" fill="#f4e5d2"/>
  <text x="458" y="129" text-anchor="middle" font-size="17" font-weight="700" fill="#8d5520">−16,760</text>
  <text x="458" y="162" text-anchor="middle" font-size="11" fill="#5d6b64">跨业务共享的基础 AI 研发</text>
  <text x="458" y="181" text-anchor="middle" font-size="11" fill="#5d6b64">与集团总部治理费用</text>
  <text x="458" y="198" text-anchor="middle" font-size="10" fill="#8d5520">2023 年仅 −9,186 · 两年扩近倍</text>
  <rect x="612" y="44" width="230" height="188" rx="10" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.3"/>
  <text x="727" y="68" text-anchor="middle" font-size="13" font-weight="700" fill="#1d2a25">Alphabet 合并利润口径</text>
  <line x1="626" y1="78" x2="828" y2="78" stroke="#eaede5"/>
  <rect x="624" y="90" width="206" height="32" rx="6" fill="#e2ede7"/>
  <text x="634" y="111" font-size="12.5" font-weight="700" fill="#1f5c4e">合并营业利润</text><text x="820" y="111" text-anchor="end" font-size="13.5" font-weight="700" fill="#1f5c4e">129,039</text>
  <text x="727" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="#8d5520">漏扣总部会高估 +13.0%</text>
  <line x1="626" y1="156" x2="828" y2="156" stroke="#eaede5"/>
  <text x="630" y="180" font-size="11.5" fill="#2e3c36">加：股权公允重估等</text><text x="824" y="180" text-anchor="end" font-size="11.5" font-weight="600" fill="#1f5c4e">+24,080</text>
  <text x="630" y="206" font-size="12" font-weight="700" fill="#1d2a25">合并净利润（含营业外）</text><text x="824" y="206" text-anchor="end" font-size="12" font-weight="700" fill="#1d2a25">132,170</text>
  <path d="M304,193 C330,193 328,138 352,138" fill="none" stroke="#a8743f" stroke-width="2.1" marker-end="url(#e04-go-amber)"/>
  <path d="M560,138 C584,138 584,108 608,108" fill="none" stroke="#23695a" stroke-width="2.1" marker-end="url(#e04-go-sage)"/>
</svg>
</div>
<figcaption>点击上方标签切换两家巨头 2025 财年勾稽桥：虽然业务结构迥异，但只把经营分部加总、漏扣总部未分配费用，都会把真实营业利润凭空放大约 13%。</figcaption>
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

<figure class="flow-figure e04-ownership-matrix" id="nb-e04-ownership-fig">
<div class="ff-head"><p class="ff-title">持股边界与三表并账路径：控股合并 vs 权益法 vs 财务投资</p><span class="ff-sub">决定怎么进三张表的是控制权与重大影响，持股比例为常用推定门槛</span></div>
<div class="rel-svg-wrap business-exchange" aria-label="三类股权投资的并账路径对照图：第一行，控股合并（＞50% 或 VIE 主受益人，ASC 810）：收入、资产与债务 100% 全额并入主表，总权益单列少数股东 NCI；利润表全额进营业利润，先算 100% 合并净利润，底端扣减少数股东损益得归母净利润；现金流量表 100% 并入经营与资本现金流，向少数股东派息记融资流出。实例：KO 控股装瓶并表扣 NCI 30 M 得归母 13,107 M、期末 NCI 2,106 M 美元，GOOGL 并表 Waymo 期末 NCI 34 亿美元。第二行，权益法投资（20%–50% 具备重大影响，ASC 323）：联营体收入与债务完全不并表，资产端仅挂一行权益法投资；利润表在营业利润下方单列一行按持股比例确认联营净利润；经营现金流只认实际收到的现金分红，未收现差额须从 CFO 扣回。实例：KO 联营营收 1,028 亿美元表外，记利润 2,031 M vs 实收分红 993 M、CFO 扣回 1,038 M 美元；MSFT–OpenAI FY26 确认 +65 亿美元税前权益法收益，上年为 −48 亿美元。第三行，财务投资（＜20% 无重大影响，ASC 321）：收入与债务完全不并表，资产端记金融投资或非上市股权；利润表不按比例分享利润，市价或同轮融资重估损益直接进营业外其他收益（OI&amp;E）；账面重估零现金流，仅收股息或出售变现时入账。实例：GOOGL 期末替代法非上市股权 641 亿美元，FY25 股权证券公允重估净收益 +24,080 M 美元。">
<svg viewBox="0 0 860 365" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="e04-own-sage" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#23695a"/>
    </marker>
    <marker id="e04-own-amber" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#a8743f"/>
    </marker>
    <marker id="e04-own-slate" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
      <path d="M1,1.5 L9,5 L1,8.5 Z" fill="#5986a1"/>
    </marker>
  </defs>
  <rect x="0" y="0" width="860" height="365" rx="8" fill="#fafaf6"/>
  <!-- Column Headers -->
  <rect x="14" y="10" width="178" height="22" rx="5" fill="#eff1e8"/>
  <text x="103" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#2e3c36">持股比例与控制实质</text>
  <rect x="216" y="10" width="190" height="22" rx="5" fill="#eff1e8"/>
  <text x="311" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#2e3c36">进不进合并收入与债务</text>
  <rect x="428" y="10" width="198" height="22" rx="5" fill="#eff1e8"/>
  <text x="527" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#2e3c36">进利润表哪一行</text>
  <rect x="648" y="10" width="198" height="22" rx="5" fill="#eff1e8"/>
  <text x="747" y="25" text-anchor="middle" font-size="11" font-weight="700" fill="#2e3c36">现金流怎么认</text>
  <!-- LANE 1: >50% Consolidation (ASC 810) -->
  <rect x="14" y="42" width="178" height="96" rx="9" fill="#ffffff" stroke="#b3d3c4" stroke-width="1.3"/>
  <rect x="24" y="51" width="158" height="19" rx="9.5" fill="#e5efe9"/>
  <text x="103" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#1f5c4e">＞50% 控股合并 · ASC 810</text>
  <text x="103" y="90" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">全额并表</text>
  <text x="103" y="109" text-anchor="middle" font-size="10.5" fill="#5d6b64">掌握控制权或 VIE 主受益人</text>
  <text x="103" y="126" text-anchor="middle" font-size="10" font-weight="600" fill="#1f5c4e">底端剥离少数股东 NCI</text>
  <rect x="216" y="42" width="190" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="311" y="60" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1f5c4e">100% 全额并入主表</text>
  <text x="311" y="79" text-anchor="middle" font-size="10.8" fill="#2e3c36">收入、资产、债务全部并表</text>
  <text x="311" y="96" text-anchor="middle" font-size="10.2" fill="#5d6b64">总权益下单列少数股东 NCI</text>
  <rect x="428" y="42" width="198" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="527" y="60" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1f5c4e">全额进营业利润，底端扣 NCI</text>
  <text x="527" y="79" text-anchor="middle" font-size="10.8" fill="#2e3c36">先算 100% 口径合并净利润</text>
  <text x="527" y="96" text-anchor="middle" font-size="10.2" fill="#5d6b64">减少数股东损益得归母净利</text>
  <rect x="648" y="42" width="198" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="747" y="60" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1f5c4e">100% 并入经营与资本现金流</text>
  <text x="747" y="79" text-anchor="middle" font-size="10.8" fill="#2e3c36">子公司收付全额进现金流表</text>
  <text x="747" y="96" text-anchor="middle" font-size="10.2" fill="#5d6b64">向少数股东派息记融资流出</text>
  <rect x="216" y="113" width="630" height="25" rx="5" fill="#e5efe9"/>
  <text x="226" y="129.5" font-size="10.2" fill="#1f5c4e"><tspan font-weight="700">实例：</tspan>KO 控股装瓶并表（扣 NCI 30 M 得归母 13,107 M，期末 NCI 2,106 M）· GOOGL 并表 Waymo（期末 NCI 34 亿美元）</text>
  <path d="M192,90 C204,90 203,75 213,75" fill="none" stroke="#23695a" stroke-width="2" marker-end="url(#e04-own-sage)"/>
  <path d="M406,75 L425,75" fill="none" stroke="#23695a" stroke-width="1.8" marker-end="url(#e04-own-sage)"/>
  <path d="M626,75 L645,75" fill="none" stroke="#23695a" stroke-width="1.8" marker-end="url(#e04-own-sage)"/>
  <line x1="14" y1="146" x2="846" y2="146" stroke="#e2e5dc" stroke-width="1.1" stroke-dasharray="5,4"/>
  <!-- LANE 2: 20%-50% Equity Method (ASC 323) -->
  <rect x="14" y="154" width="178" height="96" rx="9" fill="#ffffff" stroke="#dfb98d" stroke-width="1.3"/>
  <rect x="24" y="163" width="158" height="19" rx="9.5" fill="#f5ebdf"/>
  <text x="103" y="176" text-anchor="middle" font-size="10" font-weight="700" fill="#8d5520">20%–50% 权益法 · ASC 323</text>
  <text x="103" y="202" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">单行合并</text>
  <text x="103" y="221" text-anchor="middle" font-size="10.5" fill="#5d6b64">具备重大影响 · 无控制权</text>
  <text x="103" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="#8d5520">利润按比例 · 现金只认分红</text>
  <rect x="216" y="154" width="190" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="311" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8d5520">收入与债务完全不并表</text>
  <text x="311" y="191" text-anchor="middle" font-size="10.8" fill="#2e3c36">联营体营收与负债留在表外</text>
  <text x="311" y="208" text-anchor="middle" font-size="10.2" fill="#5d6b64">资产端仅挂一行权益法投资</text>
  <rect x="428" y="154" width="198" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="527" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8d5520">营业利润下方单列一行</text>
  <text x="527" y="191" text-anchor="middle" font-size="10.8" fill="#2e3c36">按持股比例确认联营净利润</text>
  <text x="527" y="208" text-anchor="middle" font-size="10.2" fill="#5d6b64">不进营业利润，直接影响净利</text>
  <rect x="648" y="154" width="198" height="66" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="747" y="172" text-anchor="middle" font-size="11.5" font-weight="700" fill="#8d5520">CFO 只认实收现金分红</text>
  <text x="747" y="191" text-anchor="middle" font-size="10.8" fill="#2e3c36">账面收益大于实收分红时</text>
  <text x="747" y="208" text-anchor="middle" font-size="10.2" fill="#5d6b64">未收现差额须从 CFO 扣回</text>
  <rect x="216" y="225" width="630" height="25" rx="5" fill="#f5ebdf"/>
  <text x="226" y="241.5" font-size="10" fill="#8d5520"><tspan font-weight="700">实例：</tspan>KO 联营 1,028 亿美元表外，收益 2,031 M vs 分红 993 M（扣回 1,038 M）· MSFT–OpenAI +65 亿（上年 −48 亿）</text>
  <path d="M192,202 C204,202 203,187 213,187" fill="none" stroke="#a8743f" stroke-width="2" marker-end="url(#e04-own-amber)"/>
  <path d="M406,187 L425,187" fill="none" stroke="#a8743f" stroke-width="1.8" marker-end="url(#e04-own-amber)"/>
  <path d="M626,187 L645,187" fill="none" stroke="#a8743f" stroke-width="1.8" marker-end="url(#e04-own-amber)"/>
  <line x1="14" y1="258" x2="846" y2="258" stroke="#e2e5dc" stroke-width="1.1" stroke-dasharray="5,4"/>
  <!-- LANE 3: <20% Financial Investment (ASC 321) -->
  <rect x="14" y="265" width="178" height="92" rx="9" fill="#ffffff" stroke="#b7cfde" stroke-width="1.3"/>
  <rect x="24" y="274" width="158" height="19" rx="9.5" fill="#e8f1f6"/>
  <text x="103" y="287" text-anchor="middle" font-size="10" font-weight="700" fill="#2c4459">＜20% 财务投资 · ASC 321</text>
  <text x="103" y="312" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d2a25">公允重估</text>
  <text x="103" y="330" text-anchor="middle" font-size="10.5" fill="#5d6b64">既无控制也无重大影响</text>
  <text x="103" y="346" text-anchor="middle" font-size="10" font-weight="600" fill="#2c4459">按市价或同轮融资重估</text>
  <rect x="216" y="265" width="190" height="64" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="311" y="282" text-anchor="middle" font-size="11.5" font-weight="700" fill="#2c4459">收入与债务完全不并表</text>
  <text x="311" y="301" text-anchor="middle" font-size="10.8" fill="#2e3c36">不并被投公司经营与负债</text>
  <text x="311" y="318" text-anchor="middle" font-size="10.2" fill="#5d6b64">资产端记金融投资／非上市股权</text>
  <rect x="428" y="265" width="198" height="64" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="527" y="282" text-anchor="middle" font-size="11.5" font-weight="700" fill="#2c4459">重估损益进营业外 OI&amp;E</text>
  <text x="527" y="301" text-anchor="middle" font-size="10.8" fill="#2e3c36">不按比例分享被投公司利润</text>
  <text x="527" y="318" text-anchor="middle" font-size="10.2" fill="#5d6b64">市价或同轮融资涨跌进营业外</text>
  <rect x="648" y="265" width="198" height="64" rx="8" fill="#ffffff" stroke="#cfd3c9" stroke-width="1.1"/>
  <text x="747" y="282" text-anchor="middle" font-size="11.5" font-weight="700" fill="#2c4459">账面重估零现金流</text>
  <text x="747" y="301" text-anchor="middle" font-size="10.8" fill="#2e3c36">未实现浮盈浮亏不进现金流</text>
  <text x="747" y="318" text-anchor="middle" font-size="10.2" fill="#5d6b64">仅收股息或出售变现时入账</text>
  <rect x="216" y="334" width="630" height="23" rx="5" fill="#e8f1f6"/>
  <text x="226" y="349.5" font-size="10.2" fill="#2c4459"><tspan font-weight="700">实例：</tspan>GOOGL 期末替代法非上市股权 641 亿美元，FY25 股权证券公允重估净收益 +24,080 M 美元（须与主营营业利润剥离）</text>
  <path d="M192,311 C204,311 203,297 213,297" fill="none" stroke="#5986a1" stroke-width="2" marker-end="url(#e04-own-slate)"/>
  <path d="M406,297 L425,297" fill="none" stroke="#5986a1" stroke-width="1.8" marker-end="url(#e04-own-slate)"/>
  <path d="M626,297 L645,297" fill="none" stroke="#5986a1" stroke-width="1.8" marker-end="url(#e04-own-slate)"/>
</svg>
</div>
<figcaption>估值核对要点：控股子公司注意 EV 加回 NCI；权益法联营公司注意看分红转化率与隐含市值；财务投资重估收益须与主营营业利润剥离评估。</figcaption>
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
