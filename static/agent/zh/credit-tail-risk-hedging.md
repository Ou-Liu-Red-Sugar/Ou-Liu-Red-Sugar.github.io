# 信用与尾部风险对冲

用 2008 信用冻结、2020 疫情闪崩与 2022 利率慢熊三段实测看清信用利差与恐慌波动率怎样同时冲击股债；拆解 CDS 违约赔付与深度虚值期权尾部对冲的凸性逻辑、常态保费损耗及个人账户的现实替代。

Entry: zh-credit-tail-risk-hedging | Node: NB-P05 | Language: zh | Editorial revision: 2026-11-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
本篇为 NB-P05《信用与尾部风险对冲》，作为组合与制衡范式的收束篇。围绕四条主线展开：一、三类危机实测（/notebook/credit-tail/credit-tail-daily.csv 与 ICE BofA US High Yield OAS）：2008 金融危机（HY OAS 峰值 21.82%、VIX 峰值 80.86、SPY −55.2%、HYG −32.9%、TLT +25.1%）、2020 疫情 23 日闪崩（HY OAS 20 日由 4.18% 跳至 10.87%、VIX 收盘峰值 82.69、SPY −33.7%、HYG −21.9%、LQD 最深 −19.6%）与 2022 利率慢熊（VIX 峰值仅 36.45、SPY 全年 −18.2%／最深 −24.1%、HYG −11.0% 反浅于 TLT −31.2%），揭示尾部保护工具高度依赖下跌速度与信用冻结。二、CDS 机制：依 Federal Reserve FEDS 2022-023、SEC 证词与 ISDA 2014 信用衍生品定义拆解按季息差支付、利差走阔盯市重估、标准信用事件裁定（Bankruptcy、Failure to Pay 及 2020 年信用恶化修订）与拍卖回收差额赔付。三、深度虚值期权尾部对冲的正反对照：以 Mark Spitznagel / Universa（顾问 Nassim Nicholas Taleb）的“极小预算保费换崩盘抄底现金与高股票仓位几何复利”对照 AQR（Roni Israelov 2018 与 AQR 2020—2022 慢熊研究）的“波动率风险溢价、2011—2019 九年慢牛失血与 2022 慢熊路径依赖失效”，并配 100,000 美元教学推演器比较 100% 股票、80/20 短债缓冲与 97/3 尾部 Put 预算。四、机构 OTC 门槛与个人账户替代：明确 CDS 为机构场外市场，个人可用低杠杆与超短美债 BIL 作零损耗主防御，并在明确窗口以 HYG 或股指 Put 作有限预算阶段防护。不提供具体期权或信用交易建议。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-p05-credit-data",
      "access": {
        "kind": "site_full_text",
        "uri": "/notebook/credit-tail/credit-tail-daily.csv"
      },
      "required_unit": {
        "locator": "2007-10-09 至 2009-03-09、2020-02-19 至 2020-03-23、2021-12-31 至 2022-12-30 及 2010-12-31 至 2019-12-31 的 SPY、HYG、LQD、TLT、BIL 与 VIX 数据。",
        "scope": "复算 2008 金融危机、2020 疫情闪崩、2022 利率慢熊与 2011—2019 慢牛的资产表现与 VIX 峰值。",
        "purpose": "核对本篇三类下跌窗口的实证对照数据。"
      },
      "title": "Yahoo Finance：信用债、美股与 VIX 长周期历史行情（2007—2026）",
      "authors": [
        "Yahoo Finance"
      ],
      "version": "2026-11-26 读取"
    },
    {
      "source_id": "nb-p01-cds-fed",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.federalreserve.gov/econres/feds/files/2022023pap.pdf"
      },
      "required_unit": {
        "locator": "CDS 定期息差、违约赔付、中央对手方清算比例与 OTC 机构交易结构。",
        "scope": "核对 CDS 风险转移、盯市估值与机构市场门槛。",
        "purpose": "核对本篇 CDS 机制与现实可得性说明。"
      },
      "title": "Federal Reserve Board（FEDS 2022-023）：Credit Default Swaps",
      "authors": [
        "Federal Reserve Board"
      ],
      "version": "2026-11-26 核对"
    },
    {
      "source_id": "nb-p05-isda-cds",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.isda.org/a/ur4TE/Guidelines-for-Smart-Contracts-CDS.pdf"
      },
      "required_unit": {
        "locator": "2014 Credit Derivatives Definitions 的标准信用事件（Bankruptcy、Failure to Pay 等）与拍卖结算流程。",
        "scope": "说明 CDS 触发条件并非随意判定，而是由标准条款与认定委员会裁定。",
        "purpose": "核对本篇信用事件触发与结算机制。"
      },
      "title": "ISDA：2014 Credit Derivatives Definitions & Credit Event Guidelines",
      "authors": [
        "International Swaps and Derivatives Association"
      ],
      "version": "2026-11-26 核对"
    },
    {
      "source_id": "nb-p05-aqr-fastslow",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.aqr.com/Insights/Research/White-Papers/Tail-Risk-Hedging-Contrasting-Put-and-Trend-Strategies"
      },
      "required_unit": {
        "locator": "深度虚值 Put 在极速闪崩与持续慢熊中的表现差异及长期保费损耗。",
        "scope": "对照 Mark Spitznagel 的干火药复利逻辑与 AQR 的波动率风险溢价警示。",
        "purpose": "核对尾部期权对冲的适用边界与竞争观点。"
      },
      "title": "AQR Capital Management（2020 / 2022）：Tail Risk Hedging — Fast vs Slow Drawdowns",
      "authors": [
        "AQR Capital Management"
      ],
      "version": "2026-11-26 核对"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">

前几篇讨论的多资产分散、股票多空、全球宏观与风险平价，主要对付常规周期里的涨跌波动。可金融市场每隔十年左右总会出现一次流动性骤然干涸、企业借不到新钱、各类风险资产一起跳水的极端冲击。**信用与尾部风险对冲**（Credit & Tail-Risk Hedging）专门盯住分布最左端的罕见崩盘：平时愿意付出一笔有限且可预期的保费或息差，换取危机爆发时不成比例的**凸性赔付**（Convexity）。

不过，这种“买保险”的做法带有一道尖锐的现实权衡：真正暴赚的窗口极少，和平年份却长达五到十年。把信用利差、**信用违约互换**（CDS）与深度虚值看跌期权放进 2008、2020 与 2022 三段真实行情里对照，就能看清它什么时候雪中送炭、什么时候只会默默失血。

## 信用利差与三类完全不同的危机 {#nb-p05-credit-crunch}

企业债券的收益率由两部分拼成：同期限无违约美国国债收益率，加上补偿企业可能还不起钱的**信用利差**（Credit Spread）。衡量美国信用市场松紧最常用的尺子，是 ICE BofA 美国高收益债期权调整利差（ICE BofA US High Yield OAS，FRED 序列 BAMLH0A0HYM2 剥离了提前赎回条款的影响，以百分点计价）。[^fred-hyoas] 经济顺景时，违约稀少、融资宽裕，高收益债利差常压在 3% 至 4% 一带；一旦银行收紧放贷、企业续借受阻，信用利差会成倍飙升，同时把高收益债（如 iShares iBoxx USD High Yield Corporate Bond ETF，HYG）、甚至投资级企业债（如 iShares iBoxx USD Investment Grade Corporate Bond ETF，LQD）和高负债股票一起拖下水。

同样是股市下跌超过 18%，**2008 金融危机**、**2020 疫情闪崩**与 **2022 加息慢熊**在信用利差和恐慌指数（VIX）上呈现出完全不同的结构：

<figure class="flow-figure p05-crises" id="nb-p05-crises">
<div class="ff-head"><p class="ff-title">三类下跌窗口对照：信用冻结、极速闪崩与利率慢熊</p><span class="ff-sub">Yahoo Finance 2007—2022 调整后收盘价 · 利差极值参照 ICE BofA US High Yield OAS</span></div>
<div class="p05-cgrid business-exchange" aria-label="三类真实下跌窗口对照：一、2008 金融危机（2007-10-09 至 2009-03-09）：高收益债 OAS 从 2007 年 6 月低点 2.41% 飙升至 2008 年 12 月 15 日峰值 21.82%，VIX 峰值 80.86，SPY 跌 −55.2%，HYG 跌 −32.9%，LQD 最深跌 −18.2%，TLT 涨 +25.1%。二、2020 疫情闪崩（2020-02-19 至 2020-03-23，仅 23 个交易日）：HY OAS 20 个交易日由 4.18% 跳至 10.87%，VIX 收盘峰值 82.69，SPY 跌 −33.7%，HYG 跌 −21.9%，LQD 最深跌 −19.6%，TLT 涨 +14.2%。三、2022 加息慢熊（2021-12-31 至 2022-12-30）：无系统性信用冻结，VIX 全年收盘峰值仅 36.45，SPY 全年跌 −18.2%（盘段最深 −24.1%），HYG 跌 −11.0% 反浅于 LQD −17.9% 与 TLT −31.2%。">
<div class="p05-ccard" style="--p05-c:#a8743f">
<div class="p05-chead"><strong>2008 金融危机</strong><small>2007-10-09 → 2009-03-09 · 深度信用冻结</small></div>
<div class="p05-cstats">
<div class="p05-cstat"><span>HY OAS 峰值</span><b class="p05-neg">21.82%</b></div>
<div class="p05-cstat"><span>VIX 收盘峰值</span><b class="p05-neg">80.86</b></div>
<div class="p05-cstat"><span>SPY 跌幅</span><b class="p05-neg">−55.2%</b></div>
<div class="p05-cstat"><span>HYG / TLT</span><b>−32.9% / +25.1%</b></div>
</div>
<p class="p05-cverdict">违约激增且融资瘫痪；CDS 信用保护与尾部 Put 双双触发高倍赔付。</p>
</div>
<div class="p05-ccard" style="--p05-c:#c26d4a">
<div class="p05-chead"><strong>2020 疫情闪崩</strong><small>2020-02-19 → 2020-03-23 · 23 日急跌</small></div>
<div class="p05-cstats">
<div class="p05-cstat"><span>HY OAS 峰值</span><b class="p05-neg">10.87%</b></div>
<div class="p05-cstat"><span>VIX 收盘峰值</span><b class="p05-neg">82.69</b></div>
<div class="p05-cstat"><span>SPY 跌幅</span><b class="p05-neg">−33.7%</b></div>
<div class="p05-cstat"><span>HYG / LQD 最深</span><b>−21.9% / −19.6%</b></div>
</div>
<p class="p05-cverdict">速度极快且波动率飙破 80；单个期权周期内尾部 Put 爆发力最强。</p>
</div>
<div class="p05-ccard" style="--p05-c:#5986a1">
<div class="p05-chead"><strong>2022 加息慢熊</strong><small>2021-12-31 → 2022-12-30 · 利率重估</small></div>
<div class="p05-cstats">
<div class="p05-cstat"><span>信用状态</span><b>未爆发违约潮</b></div>
<div class="p05-cstat"><span>VIX 收盘峰值</span><b>36.45</b></div>
<div class="p05-cstat"><span>SPY 全年/最深</span><b class="p05-neg">−18.2% / −24.1%</b></div>
<div class="p05-cstat"><span>HYG / TLT</span><b>−11.0% / −31.2%</b></div>
</div>
<p class="p05-cverdict">持续十个月慢跌、恐慌未爆表；深度虚值 Put 往往难以跑赢常态保费损耗。</p>
</div>
</div>
<figcaption>价格与 VIX 均为收盘口径，2020 年 3 月 23 日美联储宣布企业信贷便利（PMCCF／SMCCF）后信用利差迅速回落。<a href="/notebook/credit-tail/credit-tail-daily.csv">查看完整日频数据</a>。</figcaption>
</figure>

这三张卡片解释了为何信用与尾部保护的回报高度挑“跌法”。2008 年和 2020 年 3 月，市场同时遭遇信用利差飙升（2008 年从 2.41% 冲到 21.82%、2020 年 20 个交易日内从 4.18% 冲到 10.87%）和 VIX 冲破 80，连投资级企业债 LQD 都在 2020 年 3 月盘中一度跌近两成。[^credit-data]<sup>，</sup>[^fred-hyoas] 到了 2022 年，压垮估值的推手是无风险利率飙升，企业违约没有失控，VIX 全年最高收盘只到 36.45，信用久期更短的 HYG（−11.0%）反而比 TLT（−31.2%）跌得更浅。

## CDS：为企业违约与信用恶化买一份合约保险 {#nb-p05-cds}

在机构信用市场上，用来直接对冲企业或一篮子发行人违约风险的标准工具是**信用违约互换**（Credit Default Swap，CDS），包括针对单一公司的单名 CDS，以及覆盖一篮子投资级或高收益企业的指数 CDS（如北美 CDX 指数）。[^cds-fed]

把 CDS 拆成常态和危机两段现金流，结构很直白：

<figure class="flow-figure p05-cds-flow" id="nb-p05-cds-flow">
<div class="ff-head"><p class="ff-title">CDS 信用保护的常态现金流与违约赔付链条（示意）</p><span class="ff-sub">假设 10,000,000 美元名义本金 · 5 年期高收益参考实体 · 年化息差 500 bps（5%）</span></div>
<div class="business-exchange" aria-label="以 10,000,000 美元名义本金、年化息差 500 bps 的 5 年期 CDS 为例展示两段现金流：常态期间（未发生信用事件）：保护买方每季支付 125,000 美元息差（全年 500,000 美元）；若市场担忧加剧、新签息差由 500 bps 走阔至 1,200 bps，原有低息差保护合约市价大涨，买方无需等到正式违约即可平仓获利。触发信用事件后：经 ISDA 地区认定委员会裁定构成破产或到期未能付款等信用事件，通过统一拍卖确定违约债券回收率（如 40%），保护卖方向买方赔付 (100% − 40%) 乘以名义本金即 6,000,000 美元，买方以有限年化保费换取高倍凸性赔付。">
<div class="p05-flane">
<div class="p05-fhead"><strong>常态期间（未发生信用事件）</strong><span>固定支出息差 · 盯市随利差重估</span></div>
<div class="p05-fsteps">
<div class="p05-fbox"><b>① 保护买方按季付息差</b>按名义本金的 5% 年化，每季向卖方支付 125,000 美元（全年 500,000 美元）。</div>
<div class="p05-fbox"><b>② 信用利差走阔即升值</b>若市场恐慌把新签息差推高至 1,200 bps，手里的低息差保护合约市价大幅跳涨。</div>
<div class="p05-fbox"><b>③ 无需等到违约即可平仓</b>实务中多数机构在利差急扩窗口直接转让或平仓，兑现账面盯市利润。</div>
</div>
</div>
<div class="p05-flane p05-fevent">
<div class="p05-fhead"><strong>触发信用事件（经 ISDA 认定委员会裁定）</strong><span>拍卖定价 · 凸性赔付差额</span></div>
<div class="p05-fsteps">
<div class="p05-fbox"><b>① 裁定构成标准信用事件</b>参考实体发生破产（Bankruptcy）或到期未能付款（Failure to Pay）等条款约定事件。</div>
<div class="p05-fbox"><b>② 统一拍卖确定回收率</b>假设违约债券在 ISDA 拍卖中的市场回收价定为面值的 40%。</div>
<div class="p05-fbox"><b>③ 卖方赔付面值回收差额</b>保护卖方向买方支付 (100% − 40%) × 10,000,000 ＝ <b>6,000,000 美元</b>。</div>
</div>
</div>
</div>
<figcaption>简化示意未计期初标准化票息前端折溢价（upfront payment）；现实中标准企业 CDS 常用 100 bps 或 500 bps 固定票息并以期初差价找平。</figcaption>
</figure>

<span data-text-versions id="nb-p05-text-cds">CDS 赔付之所以严格依赖标准合同，是因为历史上曾出现过围绕“算不算违约”的激烈博弈。国际互换与衍生品协会（ISDA）2014 年信用衍生品定义将企业 CDS 常见触发条件归为**破产**（Bankruptcy）与**到期未能付款**（Failure to Pay）等标准事件，由地区认定委员会（Determinations Committee）投票裁定并组织统一拍卖确定回收率<span data-text-detail>（为了堵塞部分市场参与者与债务人合谋制造“技术性违约”骗取 CDS 赔付的漏洞，ISDA 于 2020 年 1 月 27 日正式在多数企业 CDS 合约中生效了“窄口径信用事件”修订条款，要求到期未能付款必须直接或间接源于、或导致参考实体信用状况恶化，才能触发赔付。此外，美联储 FEDS 2022-023 显示约 62% 的交易商未平仓 CDS 名义本金经中央对手方清算，以降低类似 2008 年 AIG 那样的对手方违约链式风险）</span>。[^isda-cds]<sup>，</sup>[^cds-fed]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 深度虚值期权：常态保费损耗与崩盘抄底现金 {#nb-p05-tail-puts}

如果保护对象聚焦在股市整体崩盘而非特定企业违约，另一条机构路线是**尾部风险期权对冲**（Tail-Risk Hedging）：长期把极小一笔年度预算（常见在组合的 1% 至 3.5%）持续滚动买入深度虚值股指看跌期权（例如行权价远低于市价 20% 至 30% 的 S&P 500 Put）。

这套策略在机构界长期存在分歧：支持方看重崩盘时的复利效应，反对方则把账算在常态保费损耗与慢熊路径上：

- **支持方（干火药与几何复利）**：Universa Investments 首席投资官 Mark Spitznagel（顾问为 Nassim Nicholas Taleb）主张把尾部期权放进整套组合评估长期复利，而非单独核算单腿盈亏。只要用大约 3% 的预算锁住极端崩盘，其余 97% 资金就能放心留在高长期回报的股票里，不必像 60/40 或 80/20 那样在十年牛市里常年把大量资金闲置在低收益债券上；真遇 2008 或 2020 年 3 月那种闪崩，深度虚值 Put 因价格暴跌叠加隐含波动率飙升涨出十几倍，正好在市场最恐慌时送来一笔现成的**抄底现金**（dry powder）。[^universa-2020]
- **反对方（波动率溢价与慢熊失血）**：AQR Capital Management 的 Roni Israelov（2018）与后续研究团队（2020—2022）用长周期数据指出了相反的现实约束：首先，股指看跌期权长期定价高于真实发生波动，买方持续支付**波动率风险溢价**，在 2011—2019 年那样的九年慢牛（SPY 涨 +206.6%）里，每年保费归零极难坚持；其次，期权存在**路径依赖**，遇到 2022 年那种耗时十个月、VIX 最高只有 36.45 的慢熊，深度虚值 Put 到期前往往涨不起来，保护效果既不如直接多留现金，也不如跨资产趋势策略。[^aqr-puts]<sup>，</sup>[^aqr-fastslow]<sup>，</sup>[^credit-data]

在下面的推演器里切换四种典型行情（极速闪崩、深度股灾、慢熊阴跌、常态慢牛），并调节股市跌幅与年度尾部预算，直观比较三种防御结构的净值落差：

<figure class="flow-figure p05-tail-lab" id="nb-p05-tail-lab" data-p05-tail>
<div class="ff-head"><p class="ff-title">尾部期权预算 vs 20% 短债缓冲（100,000 美元组合示意）</p><span class="ff-sub">教学情景设定 · 对比不同下跌速度下的防御效果与低位再平衡弹性</span></div>
<div class="p05-presets" hidden><button type="button" data-p05-preset="2020" aria-pressed="true">极速闪崩（−35%）</button><button type="button" data-p05-preset="2008">深度股灾（−50%）</button><button type="button" data-p05-preset="2022">慢熊阴跌（−20%）</button><button type="button" data-p05-preset="bull">常态慢牛（+12%）</button></div>
<div class="p05-sliders">
<div class="p05-srow"><label for="nb-p05-eq">股市年度变动 <output for="nb-p05-eq" data-p05-eq-out>−35%</output></label><input id="nb-p05-eq" data-p05-eq-in type="range" min="-55" max="30" step="1" value="-35" disabled></div>
<div class="p05-srow"><label for="nb-p05-bg">年度尾部 Put 预算 <output for="nb-p05-bg" data-p05-bg-out>3%</output></label><input id="nb-p05-bg" data-p05-bg-in type="range" min="1" max="6" step="0.5" value="3" disabled></div>
</div>
<div class="p05-cards business-exchange" aria-label="假设 100,000 美元组合比较三种结构在四个教学情景下的表现（短债假设年息 3%）：一、极速闪崩（股市 −35%，3% Put 涨 12 倍）：100% 股票剩 65,000 美元（−35.0%），80/20 股债剩 72,600 美元（−27.4%），97% 股加 3% Put 剩 99,050 美元（−1.0%，其中期权变现 36,000 美元）。二、深度股灾（股市 −50%，3% Put 涨 18 倍）：100% 股票剩 50,000 美元，80/20 剩 60,600 美元，97/3 尾部对冲升至 102,500 美元（+2.5%）。三、慢熊阴跌（股市 −20%，3% Put 仅 1.5 倍）：100% 股票剩 80,000 美元，80/20 剩 84,600 美元（−15.4%），97/3 剩 82,100 美元（−17.9%，弱于短债缓冲）。四、常态慢牛（股市 +12%，Put 归零）：100% 股票 112,000 美元（+12.0%），80/20 为 110,200 美元（+10.2%），97/3 为 108,640 美元（+8.6%）。">
<div class="p05-pcard"><small>100% 纯股票</small><strong class="p05-neg" data-p05-r100>−35.0%</strong><span data-p05-v100>65,000 美元</span></div>
<div class="p05-pcard"><small>80% 股票 ＋ 20% 短债</small><strong class="p05-neg" data-p05-r80>−27.4%</strong><span data-p05-v80>72,600 美元</span></div>
<div class="p05-pcard p05-phi"><small>股票 ＋ 尾部 Put 预算</small><strong class="p05-neg" data-p05-rtail>−1.0%</strong><span data-p05-vtail>99,050 美元</span><span data-p05-dry>期权变现 36,000 美元（12.0×）</span></div>
</div>
<p class="p05-rebound"><strong data-p05-note>2020-03 极速闪崩示意：股市急跌 −35%、VIX 爆炸，深度虚值 Put 价值假设跳升 12 倍。</strong> <span data-p05-rebound>若把期权变现现金在低位再平衡回股票，后续反弹 +40% 后净值可达 138,670 美元（纯股票为 91,000 美元）。</span></p>
<figcaption>期权赔付倍数为教学设定，真实结果高度依赖行权价选择、到期时点、隐含波动率斜率与展期执行成本；短债假设年收益 3%。</figcaption>
</figure>

切到“慢熊阴跌（−20%）”和“常态慢牛（+12%）”，可以看到深度虚值 Put 并非在所有下跌里都占便宜。当市场温和回撤或常年慢牛时，**不花保费、还能赚正利息的短债缓冲**（80/20）反而比持续扣血的期权对冲更省心；只有遇到极速、深度的恐慌崩盘，高凸性期权才会拉开压倒性差距——前提还是投资者在连续亏掉几年保费后没有中途放弃，且真在崩盘谷底敢把期权变现的现金买回股票。

## 机构 OTC 门槛与个人账户的现实替代 {#nb-p05-retail}

从机制落到开户执行，信用与尾部对冲在机构与个人之间的门槛鸿沟非常明显。SEC 证词与美联储研究都明确指出，CDS 属于机构间场外（OTC）市场合约，需要签订 ISDA 主协议、满足大额名义本金与双边／清算所担保品要求，不在面向散户的股票交易所挂牌。[^cds-sec]<sup>，</sup>[^cds-fed] 即便是在交易所挂牌的深度虚值期权，散户逐月自己展期也要面对宽买卖价差、隐含波动率偏度高昂以及难以把握止盈平仓时点的摩擦。

把机构工具和个人账户真正够得着的替代方案并排来看，边界非常清楚：

<figure class="flow-figure p05-access" id="nb-p05-access">
<div class="ff-head"><p class="ff-title">从机构 OTC 信用保护到个人账户的现实替代地图</p><span class="ff-sub">先区分“机构专属合约”“个人阶段性工具”与“零损耗结构防御”</span></div>
<div class="p05-agrid business-exchange" aria-label="三档工具对照：一、机构 OTC 工具（单名 CDS 与 CDX 指数）：需要 ISDA 协议、大额名义本金与担保品管理，个人通常无法直接开户交易，适合机构精确剥离企业或组合信用风险。二、个人合约替代（HYG 或 SPY 保护性 Put）：标准交易所挂牌、买方最大亏损限于权利金无追保，但长期滚动存在波动率溢价损耗与慢熊失效，更适合在重大事件或高估值脆弱窗口做阶段性保护。三、个人零损耗防御（削减高杠杆信用暴露加超短美债 BIL）：无需衍生品权限与保费损耗，在信用冻结期天然保本并保留低位加仓现金，代价是牛市让渡部分股票仓位弹性。">
<div class="p05-acard p05-aotc" style="--p05-c:#a8743f">
<div class="p05-ahead"><strong>CDS / CDX 信用保护</strong><span>机构 OTC</span></div>
<dl>
<div><dt>准入与门槛</dt><dd>需 ISDA 主协议、大额名义本金与担保品划转，个人难直购。</dd></div>
<div><dt>主要优势</dt><dd>精准锚定违约与利差飙升，不夹杂股市估值噪音。</dd></div>
<div><dt>常态代价</dt><dd>持续按季支付息差，并承担展期与对手方管理复杂度。</dd></div>
</dl>
</div>
<div class="p05-acard" style="--p05-c:#5986a1">
<div class="p05-ahead"><strong>HYG / SPY 保护性 Put</strong><span>个人期权权限</span></div>
<dl>
<div><dt>准入与门槛</dt><dd>交易所标准挂牌，买方最大亏损锁死在权利金，无追保。</dd></div>
<div><dt>适用方式</dt><dd>用于特定高风险窗口或已知事件保护，而非无脑全年重仓滚动。</dd></div>
<div><dt>主要摩擦</dt><dd>波动率溢价损耗、买卖价差与慢熊（如 2022）下失效。</dd></div>
</dl>
</div>
<div class="p05-acard" style="--p05-c:#23695a">
<div class="p05-ahead"><strong>降信用暴露 ＋ 超短美债</strong><span>个人零损耗</span></div>
<dl>
<div><dt>准入与门槛</dt><dd>普通证券账户直接配置 BIL 等超短国债，远离高负债垃圾债。</dd></div>
<div><dt>主要优势</dt><dd>零保费磨损且赚正票息，在信用冻结期天然保留抄底现金。</dd></div>
<div><dt>主要取舍</dt><dd>牛市里让渡对应比例的股票上行弹性，不产生衍生品倍增赔付。</dd></div>
</dl>
</div>
</div>
<figcaption>期权合约的详细定价、时间价值损耗与多腿价差结构，详见按需专题《期权价格与定价模型》及《备兑与期权持仓的取舍》。</figcaption>
</figure>

对绝大多数个人投资者而言，理解信用与尾部对冲最实用的收获有三点：第一，把**信用利差**（高收益债相对国债的溢价）当成观察市场融资冷暖的晴雨表，避免在利差极窄、全市场忽视违约风险时去追逐高杠杆垃圾债或债台高筑的脆弱公司；第二，不把“常年花高价买深度虚值 Put”当成万能护身符，明白它只擅长极速恐慌闪崩、在慢牛和慢熊里都会持续扣血；第三，在日常组合里用**低杠杆结构、避开高信用风险标的以及保留超短美债现金**承担主要防御，把 HYG 或股指看跌期权留给真正有明确边界和预算的阶段性防护。[^hyg]<sup>，</sup>[^bil]

到这里，机构组合与对冲范式四篇专题（股票多空、全球宏观、风险平价与信用尾部对冲）已经完整收束。回到基本面主线可接读[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)进入企业经营研究；需要把保证金、盯市与期权／期货实操落进账户时，可接读[《保证金、对冲与期间现金》](/zh/notebook/settlement-margin-cash/)。

<script src="/notebook/credit-tail/ui.js?v=20261126" defer></script>

[^credit-data]: [Yahoo Finance：SPY、HYG、LQD、TLT、BIL 与 VIX 历史行情](https://finance.yahoo.com/quote/HYG/history/)，2026-11-26 读取 2007-06-01 至 2026-01-09 共 4,683 个交易日的调整后收盘价与 VIX 收盘价。完整复算数列见[信用与尾部风险日频数据](/notebook/credit-tail/credit-tail-daily.csv)。
[^fred-hyoas]: ICE Data Indices / FRED，[ICE BofA US High Yield Index Option-Adjusted Spread（BAMLH0A0HYM2）](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)，美国高收益企业债相对国债曲线的期权调整利差口径；全样本历史低点为 2007-06-01 的 2.41%，峰值分别为 2008-12-15 的 21.82% 与 2020-03-23 的 10.87%。
[^cds-fed]: Federal Reserve Board（FEDS 2022-023），[Credit Default Swaps](https://www.federalreserve.gov/econres/feds/files/2022023pap.pdf)，2022，CDS 定期息差、违约赔付、约 62% 中央对手方清算比例及 OTC 市场结构。
[^cds-sec]: SEC，[Testimony Concerning Credit Default Swaps](https://www.sec.gov/newsroom/speeches-statements/ts101508ers-testimony-concerning-credit-default-swaps)，说明 CDS 在场外市场由成熟机构协商达成、不在传统交易所挂牌。
[^isda-cds]: ISDA，[2014 Credit Derivatives Definitions & Guidelines](https://www.isda.org/a/ur4TE/Guidelines-for-Smart-Contracts-CDS.pdf)，标准信用事件（Bankruptcy、Failure to Pay 等）、认定委员会裁定、拍卖回收率结算及 2020 年信用恶化条款修订。
[^universa-2020]: Mark Spitznagel（Universa Investments），[2020 年 8 月公开访谈记录](https://www.cnbc.com/2020/08/17/universas-mark-spitznagel-on-the-hedge-funds-4000percent-return.html)，关于极小预算配置尾部看跌期权、在崩盘时提供抄底现金并提升组合长期复利的公开说明，2026-11-26 查阅。
[^aqr-puts]: Roni Israelov（AQR Capital Management），[Pathetic Protection: The Elusive Benefits of Protective Puts](https://www.aqr.com/Insights/Research/White-Papers/Pathetic-Protection-The-Elusive-Benefits-of-Protective-Puts)，The Journal of Alternative Investments，2018，实证检验保护性 Put 的波动率风险溢价与路径依赖局限。
[^aqr-fastslow]: AQR Capital Management，[Tail Risk Hedging: Contrasting Put and Trend Strategies](https://www.aqr.com/Insights/Research/White-Papers/Tail-Risk-Hedging-Contrasting-Put-and-Trend-Strategies)，2020，对比直接买入深度虚值 Put 在极速闪崩与持续慢熊中的表现差异及长期保费损耗。
[^hyg]: BlackRock iShares，[iShares iBoxx USD High Yield Corporate Bond ETF（HYG）](https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf)，跟踪美元计价的非投资级高收益企业债指数。
[^bil]: State Street Global Advisors，[SPDR Bloomberg 1–3 Month T-Bill ETF（BIL）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1064642/000119312525256752/d50862d497k.htm)，2025-10-31。


## Sources
- [State Street SPDR：Bloomberg 1–3 Month T-Bill ETF（BIL）摘要招募说明书](https://www.sec.gov/Archives/edgar/data/1064642/000119312525256752/d50862d497k.htm): SEC EDGAR 披露的 BIL 摘要招募说明书（2025-10-31）：跟踪剩余期限 1 至 3 个月的美国短期国库券指数，总费用率约 0.14%。
- [Federal Reserve Board（FEDS 2022-023）：Credit Default Swaps](https://www.federalreserve.gov/econres/feds/files/2022023pap.pdf): 美联储研究论文（2022）：解释 CDS 的基本条款（买方定期支付息差、发生违约等信用事件时卖方赔付）、常见 5 年期限，以及由大型交易商、中央对手方、银行、对冲基金与保险机构主导的 OTC 市场结构。
- [SEC：Testimony Concerning Credit Default Swaps](https://www.sec.gov/newsroom/speeches-statements/ts101508ers-testimony-concerning-credit-default-swaps): SEC 国会证词：说明 CDS 在场外（OTC）市场由成熟机构交易方协商达成、不在传统证券交易所挂牌，既可用于信用对冲，也可在不持有底层债券时建立空头信用暴露。
- [BlackRock iShares：iShares iBoxx USD High Yield Corporate Bond ETF（HYG）](https://www.ishares.com/us/products/239565/ishares-iboxx-high-yield-corporate-bond-etf): iShares 官方 HYG 产品说明：跟踪美元计价的高收益（非投资级）企业债指数，同时承受利率变化与企业信用利差风险。
- [AQR Capital Management（2020 / 2022）：Tail Risk Hedging — Fast vs Slow Drawdowns](https://www.aqr.com/Insights/Research/White-Papers/Tail-Risk-Hedging-Contrasting-Put-and-Trend-Strategies): AQR 尾部对冲研究系列（含《Tail Risk Hedging: Contrasting Put and Trend Strategies》与《Should Your Portfolio Protection Work Fast or Slow?》）：对比直接买入深度虚值 Put 与跨资产趋势跟踪，指出期权在 2020 年 3 月这类极速闪崩中爆发力强，但在 2022 年这类持续缓慢下跌中因隐含波动率未暴涨而表现受限。
- [Roni Israelov（AQR，2018）：Pathetic Protection: The Elusive Benefits of Protective Puts](https://www.aqr.com/Insights/Research/White-Papers/Pathetic-Protection-The-Elusive-Benefits-of-Protective-Puts): 发表于 The Journal of Alternative Investments（2018）：实证检验标普 500 保护性看跌期权策略，指出股指期权长期存在波动率风险溢价且受到期路径依赖制约，机械滚动买入看跌期权在多数环境下弱于直接降低股票仓位或分散配置。
- [Yahoo Finance：信用债、美股与 VIX 长周期历史行情（2007—2026）](https://finance.yahoo.com/quote/HYG/history/): Yahoo Finance 调整后收盘价（含分红与拆股调整）及 VIX 收盘价，覆盖 2007-06-01 至 2026-01-09 共 4,683 个交易日（含 SPY、HYG、LQD、TLT、BIL 与 ^VIX）；完整复算数列保留于 /notebook/credit-tail/credit-tail-daily.csv。
- [ICE Data Indices / FRED（BAMLH0A0HYM2）：ICE BofA US High Yield Index Option-Adjusted Spread](https://fred.stlouisfed.org/series/BAMLH0A0HYM2): 美国高收益企业债期权调整利差（OAS）日频基准指标：记录 2007 年 6 月低点 2.41%、2008 年 12 月 15 日历史峰值 21.82% 与 2020 年 3 月 23 日疫情峰值 10.87%（注：2026 年 4 月起 FRED 仅分发最近三年滚动窗口，历史极值按 1996 年起全样本记录引用）。
- [ISDA：2014 Credit Derivatives Definitions & Credit Event Guidelines](https://www.isda.org/a/ur4TE/Guidelines-for-Smart-Contracts-CDS.pdf): 国际互换与衍生品协会（ISDA）标准信用衍生品定义：界定破产（Bankruptcy）、到期未能付款（Failure to Pay，2020 年起引入信用恶化要件以防技术性人为违约）及债务重组等信用事件，并由地区认定委员会（DC）裁定与拍卖结算。
- [Mark Spitznagel / Universa Investments（2020）：尾部风险对冲与复利增长公开讨论记录](https://www.cnbc.com/2020/08/17/universas-mark-spitznagel-on-the-hedge-funds-4000percent-return.html): Universa Investments 首席投资官 Mark Spitznagel 2020 年公开访谈与客户端信摘要：阐述将极小比例资金（示例约 3.3%）配入深度虚值尾部看跌期权，在崩盘时提供高凸性抄底现金，从而允许组合其余部分保持较高权益仓位以提升长期几何复利。

## Content relations
```json
[
  {
    "from": "zh-credit-tail-risk-hedging",
    "relation": "part_of",
    "to": "topic-P",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [投资组合：分散、多资产与风险制衡](https://ou-liu-red-sugar.github.io/zh/notebook/portfolio-diversification-hedging/)
- [风险平价与全天候配置](https://ou-liu-red-sugar.github.io/zh/notebook/risk-parity-all-weather/)
- [保证金、对冲与期间现金](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
