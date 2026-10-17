# 股东回报：分红、回购与增发

从 100 股 AAPL 的一个季度出发，比较分红与回购怎样把同样的现金交给股东，再看增发、稀释和成交价格怎样改变继续持有者的每股价值。

Entry: zh-shareholder-returns-buybacks-issuance | Node: NB-S02 | Language: zh | Editorial revision: 2026-10-11

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
沿公司现金用途与净股数变化解释股东回报。回购买盘能支持股价，继续持有者也可能受益；结合执行、价格和公司资金代价理解效果。Apple 采用截至2025-12-27的财季，现金流量表回购付款与回购交易金额分开；期初期末股数减少70,557,000股，不用单项RSU归属量拼股数桥。税务采用美国普通应税账户中收付实现制个人：股息再投资仍需申报，本人未处置股票的普通公开市场回购通常不使本人实现资本利得。Alphabet采用截至2026-06-30的披露，496亿美元为普通股与强制可转换优先股融资合计净额；400亿美元ATM截至该日未执行，上半年没有回购A/C股，695亿美元为未用授权。其他笔记写明篇名和链接，必要背景在本篇解释，不假设读者按顺序读过。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-s02-source-apple-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/320193/000032019326000006/aapl-20251227.htm"
      },
      "required_unit": {
        "locator": "Apple：2026 财年第一季度 Form 10-Q，季度截至 2025-12-27。现金流量表的股息及股息等价物支付、普通股回购付款；资产负债表的发行在外普通股；Note 7 与 Part II Item 2 的回购披露。本文的净股数变化由两个资产负债表时点相减，未将单项 RSU 归属量直接作为新增普通股量。",
        "scope": "Apple：2026 财年第一季度 Form 10-Q，季度截至 2025-12-27。现金流量表的股息及股息等价物支付、普通股回购付款；资产负债表的发行在外普通股；Note 7 与 Part II Item 2 的回购披露。本文的净股数变化由两个资产负债表时点相减，未将单项 RSU 归属量直接作为新增普通股量。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "Apple：2026 财年第一季度 Form 10-Q",
      "authors": [
        "Apple"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-berkshire-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.berkshirehathaway.com/letters/2012ltr.pdf"
      },
      "required_unit": {
        "locator": "Berkshire Hathaway：2012 年股东信，Dividends 部分，讨论业务投入、收购、回购价格与股东分配的取舍；本文采用资金用途与回购价格的比较关系，不沿用其中的估值假设或历史回购门槛。",
        "scope": "Berkshire Hathaway：2012 年股东信，Dividends 部分，讨论业务投入、收购、回购价格与股东分配的取舍；本文采用资金用途与回购价格的比较关系，不沿用其中的估值假设或历史回购门槛。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "Berkshire Hathaway：2012 年股东信",
      "authors": [
        "Berkshire Hathaway"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-dividends-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and"
      },
      "required_unit": {
        "locator": "Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends，普通现金股息的除息与支付说明。",
        "scope": "Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends，普通现金股息的除息与支付说明。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends",
      "authors": [
        "Investor.gov"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-tax-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.irs.gov/publications/p538"
      },
      "required_unit": {
        "locator": "IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。",
        "scope": "IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "IRS Publication 538",
      "authors": [
        "IRS"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-tax-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.irs.gov/publications/p550"
      },
      "required_unit": {
        "locator": "IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。",
        "scope": "IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "IRS Publication 550",
      "authors": [
        "IRS"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-alphabet-release-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm"
      },
      "required_unit": {
        "locator": "Alphabet：2026 年第二季度业绩公告，Equity Capital Raise。",
        "scope": "Alphabet：2026 年第二季度业绩公告，Equity Capital Raise。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "Alphabet：2026 年第二季度业绩公告",
      "authors": [
        "Alphabet"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    },
    {
      "source_id": "nb-s02-source-alphabet-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm"
      },
      "required_unit": {
        "locator": "Alphabet：截至 2026-06-30 的 Form 10-Q，Note 11、Equity Capital Raise、ATM Program、Share Repurchases；采用已完成融资、披露的资金用途、期末未执行发行额度及上半年回购状态。",
        "scope": "Alphabet：截至 2026-06-30 的 Form 10-Q，Note 11、Equity Capital Raise、ATM Program、Share Repurchases；采用已完成融资、披露的资金用途、期末未执行发行额度及上半年回购状态。",
        "purpose": "核对正文引用的实际事实、时点及适用关系。"
      },
      "title": "Alphabet：截至 2026-06-30 的 Form 10-Q",
      "authors": [
        "Alphabet"
      ],
      "version": "本篇核对日期：2026-09-25；各财报期间见标题与采用范围"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261012-6">

[《股票、公司与股价》](/zh/notebook/stocks-company-price/)里那 100 股 Apple（AAPL），每个季度都会碰上公司向股东返还现金。在 2026 财年第一季度（截至 2025 年 12 月 27 日），AAPL 支付了约 39 亿美元的股息及股息等价物，又花了约 247 亿美元回购自己的普通股。按期初约 147.73 亿股发行在外普通股平摊，每 100 股分到约 26 美元股息，对应的回购款则约为 167 美元。[^apple]

<figure class="flow-figure" id="nb-s02-returns">
<div class="ff-head"><p class="ff-title">AAPL 2026 财年第一季度返还给股东的现金</p><span class="ff-sub">按期初 147.73 亿股平摊到每 100 股</span></div>
<div class="ff-bars business-exchange" aria-label="AAPL 2026 财年第一季度支付股息及股息等价物约 39 亿美元，按期初股数平摊每 100 股约 26 美元；回购普通股支付约 247 亿美元，每 100 股约 167 美元。回购约为股息的 6.3 倍。">
<span class="fb-name">股息<small>100 股约 26 美元</small></span><span class="fb-bar"><i class="fb-cash" style="--w:15.8%"></i></span><span class="fb-val">约 39 亿美元</span>
<span class="fb-name">回购普通股<small>100 股约 167 美元</small></span><span class="fb-bar"><i class="fb-cash" style="--w:100%"></i></span><span class="fb-val">约 247 亿美元</span>
</div>
<figcaption>季度截至 2025 年 12 月 27 日，金额取自现金流量表中的实际付款；股息含股息等价物。</figcaption>
</figure>

这两笔钱去了不同的地方。26 美元股息进了我们的账户；167 美元回购款付给了这一季度卖出 AAPL 的投资者，我们没有卖股，也就没有收到。我们从回购中得到的是份额：期末发行在外的股份少了，同样 100 股所占的比例比期初高了约 0.48%。分红、回购，以及方向相反的增发，改变的都是这两样东西：现金落在谁手里，每一股占公司多少。

## 分红与除息 {#nb-s02-dividends-tax}

<span data-text-versions id="nb-s02-text-1">分红最直观：公司按每股固定金额付出现金，股票仍留在账户里。不过这笔现金原本属于公司，付出以后，公司剩下的资产也少了同样多。所以常规现金股息除息以后，股价通常会按股息相应调整：从除息日起买入的人拿不到这一期股息，愿意付的价格也就低一些<span data-text-detail>（本文讨论普通现金股息。除息日划分这次交易是否附带本期股息权利，支付日才是公司实际付款的日期；特殊分配可能采用不同规则。除息形成的价格调整还会和当天的市场行情叠加，实际成交价不会只由股息金额决定）</span>。股息要等到支付日才实际到账，打算用这笔钱安排开支，就要以支付日为准。[^dividends]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure value-tiles" id="nb-s02-dividend-dates">
<div class="ff-head"><p class="ff-title">除息日与支付日前后，持有人手里有什么（示意）</p></div>
<div class="vt-grid business-exchange" aria-label="示意：每股价格 100、每股股息 1。除息日之前，持有人有价值 100 的股票；除息日以后，股价按股息调整为 99，持有人另有尚未到账的股息 1，合计仍为 100；支付日以后，股息 1 作为现金到账，股票价值 99。">
<div class="vt-col"><span class="vt-when">除息日之前</span><span class="vt-tile vt-stock">股票 <strong>100</strong></span><span class="vt-sum">合计 100</span></div>
<div class="vt-step">除息 <br>价格按股息调整</div>
<div class="vt-col"><span class="vt-when">除息日至支付日</span><span class="vt-tile vt-stock">股票 <strong>99</strong></span><span class="vt-tile vt-due">股息 <strong>1</strong>，未到账</span><span class="vt-sum">合计 100</span></div>
<div class="vt-step">支付 <br>股息到账</div>
<div class="vt-col"><span class="vt-when">支付日以后</span><span class="vt-tile vt-stock">股票 <strong>99</strong></span><span class="vt-tile vt-cash">现金 <strong>1</strong></span><span class="vt-sum">合计 100</span></div>
</div>
<figcaption>数字为假设，不计税费；除息日的实际价格还会受当天行情影响。</figcaption>
</figure>

收到股息还涉及税务。以美国普通应税账户中的个人投资者为例，现金股息通常在实际收到或可以支配的年度计入收入；即使券商自动用股息买入更多股票，这笔股息一般仍需申报。暂时不需要现金、打算继续持有股票的人，就多经历了一次计税：钱从公司分出来，计入当年收入，再由自己投回股票。[^tax]

## 回购与持股比例 {#nb-s02-buybacks}

回购把同样的现金交给另一群人。我们用一家假设的公司比较两种做法：公司共有 1,000 股，业务和现金合计值 100,000 美元，每股价值 100 美元，市场价格也是 100 美元；我们持有其中 100 股，占 10%。公司准备拿出 1,000 美元返还给股东。

分红时，每股分 1 美元，我们收到 100 美元现金，股价按股息调整为 99 美元，100 股值 9,900 美元，合计仍是 10,000 美元。回购时，公司按每股 100 美元买回 10 股，这 1,000 美元付给了卖出那 10 股的人；公司剩下 99,000 美元的价值和 990 股，每股仍值 100 美元，我们的 100 股还是 10,000 美元，所占比例则从 10% 升到约 10.1%。如果我们也想要 100 美元现金，自己卖出 1 股就行，结果和分红一样：9,900 美元股票加 100 美元现金，仍占公司的 10%。

<figure class="flow-figure payout-paths" id="nb-s02-payout-paths">
<div class="ff-head"><p class="ff-title">同样返还 1,000 美元：分红与回购（示意）</p><span class="ff-sub">公司 1,000 股，每股价值 100 美元；我们持有 100 股</span></div>
<div class="pp-grid business-exchange" aria-label="示意：公司共 1,000 股，每股价值 100 美元，我们持有 100 股，占 10%，价值 10,000 美元。分红路线：每股分红 1 美元，股价按股息调整为 99 美元，我们有 9,900 美元股票和 100 美元现金，仍占 10%。回购路线：公司以每股 100 美元买回 10 股，剩 990 股，每股仍值 100 美元，我们的 100 股价值 10,000 美元，占约 10.1%；需要现金时自己卖出 1 股，得到 9,900 美元股票和 100 美元现金，占 10%。两条路线的终点相同。">
<span class="pp-lane" style="--l:1">分红</span>
<div class="pp-tile" style="--l:1;--c:2"><span class="pp-stock">股票 <strong>10,000</strong></span><small>100 股 × 100<b>占 10%</b></small></div>
<div class="pp-step" style="--l:1;--c:3;--s:3">每股分红 1 美元<small>股价按股息调整为 99 美元</small></div>
<div class="pp-tile pp-end" style="--l:1;--c:6"><span class="pp-stock">股票 <strong>9,900</strong></span><span class="pp-cash">现金 <strong>100</strong></span><small>100 股 × 99<b>占 10%</b></small></div>
<span class="pp-lane" style="--l:2">回购</span>
<div class="pp-tile" style="--l:2;--c:2"><span class="pp-stock">股票 <strong>10,000</strong></span><small>100 股 × 100<b>占 10%</b></small></div>
<div class="pp-step" style="--l:2;--c:3">公司买回 10 股<small>每股 100 美元</small></div>
<div class="pp-tile" style="--l:2;--c:4"><span class="pp-stock">股票 <strong>10,000</strong></span><small>100 股 × 100<b>占约 10.1%</b></small></div>
<div class="pp-step" style="--l:2;--c:5">自己卖出 1 股<small>需要现金时再卖</small></div>
<div class="pp-tile pp-end" style="--l:2;--c:6"><span class="pp-stock">股票 <strong>9,900</strong></span><span class="pp-cash">现金 <strong>100</strong></span><small>99 股 × 100<b>占 10%</b></small></div>
</div>
<figcaption>金额单位为美元，不计税费。按价值成交时，两条路线的终点相同。</figcaption>
</figure>

<span data-text-versions id="nb-s02-text-2">按价值成交时，两条路的终点相同，差别在于时间和选择。分红把现金同时交给所有股东，股息到账就要计税；回购只把钱付给愿意卖出的人，没有卖出的人不因这次回购实现资本利得，什么时候卖、卖多少仍由自己决定<span data-text-detail>（这里采用美国联邦个人所得税下、收付实现制个人通过普通应税账户直接持股的情形，讨论本人没有出售、交换或被赎回股份的普通公开市场回购。自己卖出 1 股换取现金时，计入资本利得的是售价超过这 1 股成本的部分。合格股息与资本利得的适用税率、退休账户和跨境投资另有规则；本段比较的是纳税时点，不预设每位投资者最终的税率）</span>。需要定期现金的股东可能更习惯分红，准备长期持有的人常常更偏好回购，两种偏好背后是不同的用钱时间。[^tax]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-s02-text-3">实际的回购大多在公开市场上执行，公司于是成了市场上的一个买家。AAPL 一个季度花约 247 亿美元、买回约 9,300 万股，等于持续接下了相当一部分卖盘；平时说大公司的回购有“托市”作用，指的就是这股买盘。当然，价格同时受经营消息和其他投资者买卖的影响，回购买盘只是其中一股力量。读回购消息时，我们还要把授权和执行分开：授权额度规定公司最多可以动用多少资金，实际买入才形成买盘和股数减少<span data-text-detail>（这里的季度截至 2025 年 12 月 27 日。AAPL 披露的回购交易金额约为 250 亿美元，现金流量表中当期支付的回购款为 247.01 亿美元；正文比较现金收付时采用后者。回购计划允许公司按情况执行，没有最低购买数量义务）</span>。[^apple]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-s02-text-4">回购减少股数的同时，以股票或相关权利支付员工报酬的股权报酬（SBC）等安排又会增加股数，具体形式见[《股票的类型、发行与交易形式》](/zh/notebook/stock-types-issuance-trading/)。AAPL 这一季度买回约 9,300 万股，期末发行在外股数却只比期初少了约 7,056 万股，中间约 2,240 万股是同期新增股份等其他变化<span data-text-detail>（资产负债表列示，2025 年 9 月 27 日发行在外普通股为 14,773,260,000 股，12 月 27 日为 14,702,703,000 股，减少 70,557,000 股。此处比较期初与期末股数；正式每股收益另按相应期间的加权平均股数及摊薄规则计算）</span>。开头算出的 0.48%，用的就是净减少后的股数；只看回购股数，会把持股比例的提升算多。[^apple]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure share-bridge" id="nb-s02-share-bridge">
<div class="ff-head"><p class="ff-title">AAPL 发行在外股数的变化</p></div>
<div class="business-exchange" aria-label="AAPL 发行在外普通股从 2025 年 9 月 27 日的 14,773,260,000 股减少到 12 月 27 日的 14,702,703,000 股，净减少 70,557,000 股。同期回购约 9,300 万股，两者的差额约 2,240 万股，是同期新增的股份等其他变化。">
<p class="sb-zero"><span>期初 <strong>147.73 亿股</strong>（2025 年 9 月 27 日）</span><span>期末 <strong>147.03 亿股</strong>（12 月 27 日）</span></p>
<div class="sb-cols">
<div class="sb-col sb-buy"><i style="--top:0%;--h:100%;--link-b:0"></i><span class="sb-val" style="--top:0%;--h:100%">−约 9,300 万</span></div>
<div class="sb-col sb-add sb-up"><i style="--top:75.87%;--h:24.13%;--link:0"></i><span class="sb-val" style="--top:75.87%;--h:24.13%">+约 2,240 万</span></div>
<div class="sb-col sb-net"><i style="--top:0%;--h:75.87%"></i><span class="sb-val" style="--top:0%;--h:75.87%">−7,056 万</span></div>
</div>
<div class="sb-names"><span><strong>回购买回</strong>本季度</span><span><strong>其他变化</strong>新增股份等，由差额推算</span><span><strong>净变化</strong>期末减期初</span></div>
</div>
<figcaption>横线是期初股数，柱子是相对期初的变化。</figcaption>
</figure>

## 增发、稀释与新增资本 {#nb-s02-issuance}

增发的方向与回购相反：公司卖出新股，换回资金。还用前面那家假设的公司：如果它按每股 100 美元发行 100 股新股，收到 10,000 美元，股数变成 1,100 股，公司价值变成 110,000 美元，每股仍值 100 美元。我们没有认购，100 股所占的比例从 10% 降到约 9.1%，这就是持股比例的稀释；新股东按价值付了等额现金，每股价值并没有因此下降。

新资金接下来用在哪里，决定了每股价值之后怎样变化。投入能带来利润的业务，公司价值的增加可以超过募集到的 10,000 美元，每股价值随之上升；用得不好，增加不到 10,000 美元，每股价值就会下降。所以看到公司规模变大，还不能推定每一股也得到了同样比例的增长。

<span data-text-versions id="nb-s02-text-5">Alphabet（GOOGL／GOOG）在 2026 年的融资是一个实际例子。公司披露，2026 年 6 月通过发行 Class A、Class C 股票及强制可转换优先股，合计取得约 496 亿美元净募集资金，用途包括扩充 AI 基础设施和全球算力<span data-text-detail>（这项金额是上述权益融资合计的净所得，并非全部来自普通股发行。强制可转换优先股先以优先股形式存在，再按条款转换为普通股，其分红权利与未来转股另有安排，不能直接把全部融资额换算成当期新增普通股）</span>。普通股与优先股的权利区别见[《股票的类型、发行与交易形式》](/zh/notebook/stock-types-issuance-trading/)；对没有认购的股东，这笔融资带来的是增益还是损失，同样要看发行价格，以及这笔资金投入算力以后的回报。[^alphabet-release]<sup>，</sup>[^alphabet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure" id="nb-s02-issuance-flow">
<div class="ff-head"><p class="ff-title">增发：公司取得资金，认购者取得新证券</p><p class="ff-legend"><span class="ff-key-share">证券</span><span class="ff-key-cash">资金</span></p></div>
<div class="ff-row ff-row-2">
<div class="ff-party ff-party-focus"><strong>Alphabet</strong><small>2026 年 6 月权益融资</small><span class="ff-result">净募集约 496 亿美元</span></div>
<div class="ff-exchange business-exchange" aria-label="2026 年 6 月，认购者向 Alphabet 支付认购款，Alphabet 合计取得约 496 亿美元净募集资金；认购者取得新发行的 Class A、Class C 股票和强制可转换优先股。"><div class="ff-arrow ff-cash ff-left"><span>认购款</span></div><div class="ff-arrow ff-right"><span>新发行的证券</span></div></div>
<div class="ff-party"><strong>认购者</strong><small>取得新发行的证券</small></div>
</div>
<p class="ff-aside"><strong>没有认购的老股东</strong>：股数不变，持股比例随普通股增加而下降；公司则多了一笔可以投入业务的资金。</p>
</figure>

<span data-text-versions id="nb-s02-text-6">公司还设立了最高 400 亿美元的 ATM 发行安排，可以按计划在市场上陆续出售新股；截至 2026 年 6 月 30 日，这个安排尚未实际售出股份<span data-text-detail>（ATM 即 at-the-market offering。公司披露，该项未来发行所得主要拟用于员工股权奖励相关的税款义务；这里采用截至 6 月底的披露状态，不将额度计入已经完成的融资，也不据此推定后续月份的执行情况）</span>。同一份报告显示，Alphabet 在 2026 年上半年没有回购 Class A 或 Class C 股票，此前的回购授权仍有约 695 亿美元可用。回购授权还在，公司却在募集新股：额度只表示允许，资金实际往哪个方向走，取决于公司当时的投入需要。[^alphabet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 交易价格与每股价值 {#nb-s02-price}

前面的例子都让交易价格正好等于每股价值。市场价格却常常高于或低于公司实际值的价格，这时回购和增发就会在继续持有的股东与交易对手之间转移价值。我们仍用每股价值 100 美元的那家公司，让它用 10,000 美元回购，或者通过增发募集 10,000 美元，只改变成交价格：

<figure class="flow-figure price-effect" id="nb-s02-price-effect">
<div class="ff-head"><p class="ff-title">成交价格怎样改变继续持有者的每股价值（示意）</p><span class="ff-sub">交易前 1,000 股，每股价值 100 美元</span></div>
<div class="pe-panels">
<div class="pe-panel business-exchange" aria-label="回购：公司付出 10,000 美元，交易后公司价值 90,000 美元。按 80 美元回购 125 股，剩 875 股，每股价值 102.86 美元，上升约 2.9%；按 100 美元回购 100 股，每股价值仍为 100 美元；按 120 美元回购约 83 股，剩约 917 股，每股价值 98.18 美元，下降约 1.8%。">
<p class="pe-title">回购<small>付出 10,000 美元，公司剩 90,000 美元价值</small></p>
<div class="pe-row"><span class="pe-price">80 美元</span><span class="pe-qty">买回 125 股</span><span class="pe-bar"><i class="pe-up" style="--w:95.2%"></i></span><span class="pe-val">102.86<small>+2.9%</small></span></div>
<div class="pe-row"><span class="pe-price">100 美元</span><span class="pe-qty">买回 100 股</span><span class="pe-bar"></span><span class="pe-val">100.00<small>不变</small></span></div>
<div class="pe-row"><span class="pe-price">120 美元</span><span class="pe-qty">买回约 83 股</span><span class="pe-bar"><i class="pe-down" style="--w:60.6%"></i></span><span class="pe-val">98.18<small>−1.8%</small></span></div>
</div>
<div class="pe-panel business-exchange" aria-label="增发：公司收到 10,000 美元，交易后公司价值 110,000 美元。按 80 美元发行 125 股，共 1,125 股，每股价值 97.78 美元，下降约 2.2%；按 100 美元发行 100 股，每股价值仍为 100 美元；按 120 美元发行约 83 股，共约 1,083 股，每股价值 101.54 美元，上升约 1.5%。">
<p class="pe-title">增发<small>收到 10,000 美元，公司共 110,000 美元价值</small></p>
<div class="pe-row"><span class="pe-price">80 美元</span><span class="pe-qty">发行 125 股</span><span class="pe-bar"><i class="pe-down" style="--w:74.1%"></i></span><span class="pe-val">97.78<small>−2.2%</small></span></div>
<div class="pe-row"><span class="pe-price">100 美元</span><span class="pe-qty">发行 100 股</span><span class="pe-bar"></span><span class="pe-val">100.00<small>不变</small></span></div>
<div class="pe-row"><span class="pe-price">120 美元</span><span class="pe-qty">发行约 83 股</span><span class="pe-bar"><i class="pe-up" style="--w:51.3%"></i></span><span class="pe-val">101.54<small>+1.5%</small></span></div>
</div>
</div>
<figcaption>交易后每股价值 = 交易后公司价值 ÷ 交易后股数，单位为美元。左列是成交价格。</figcaption>
</figure>

回购价格高于价值时，卖出者拿到的现金多于他们交出的那部分公司，差额由继续持有的人承担：按 120 美元回购，约 83 股换走了 10,000 美元，这些股份按价值只值约 8,333 美元，剩下每股的价值降到约 98.18 美元。增发正好相反，低价发行把差额让给了认购者。Berkshire Hathaway（BRK.A／BRK.B）的 2012 年股东信在讨论分红与回购时，也把回购价格与公司价值的比较作为判断回购是否划算的依据。[^berkshire]

回到 AAPL：上述季度披露的回购交易约 250 亿美元、约 9,300 万股，平均每股约 270 美元。这些回购对继续持有的人是否划算，就看 AAPL 每股实际值不值这个价格。回购还有另一面：这笔钱付给售股者以后，就不能再用于经营、投资或偿债。AAPL 把大量现金交还股东，Alphabet 在同一年为算力投入募集新股，资金流动的方向正好相反。[^apple]

## 从公司动作看到持有结果 {#nb-s02-holding-return}

把分红、回购、增发和股权报酬放在一起，现金和股份的流向如下：

<figure class="flow-figure action-flows" id="nb-s02-actions">
<div class="ff-head"><p class="ff-title">四种公司动作的流向</p><p class="ff-legend"><span class="ff-key-share">股份与服务</span><span class="ff-key-cash">现金</span></p></div>
<div class="af-grid">
<span class="af-head">动作</span><span class="af-head"></span><span class="af-head">流向</span><span class="af-head"></span><span class="af-head">继续持有时要看</span>
<div class="af-row business-exchange" aria-label="现金分红：公司把现金付给符合条件的股东。继续持有时，要看实际到账、税务与剩余股票价值。"><span class="af-name">现金分红</span><span class="af-party"><span>公司</span></span><div class="af-x"><div class="af-line af-cash af-r"><span>现金</span></div></div><span class="af-party"><span>股东</span></span><span class="af-watch">实际到账、税务与剩余股票价值</span></div>
<div class="af-row business-exchange" aria-label="回购：公司把现金付给售股者，收回股份。继续持有时，要看回购价格与净股数变化。"><span class="af-name">回购</span><span class="af-party"><span>公司</span></span><div class="af-x"><div class="af-line af-cash af-r"><span>现金</span></div><div class="af-line af-l"><span>股份</span></div></div><span class="af-party"><span>售股者</span></span><span class="af-watch">回购价格与净股数变化</span></div>
<div class="af-row business-exchange" aria-label="普通股增发：认购者把资金付给公司，取得新股。继续持有时，要看发行价格、份额变化与新增资金用途。"><span class="af-name">普通股增发</span><span class="af-party"><span>公司</span></span><div class="af-x"><div class="af-line af-cash af-l"><span>资金</span></div><div class="af-line af-r"><span>新股</span></div></div><span class="af-party"><span>认购者</span></span><span class="af-watch">发行价格、份额变化与新增资金用途</span></div>
<div class="af-row business-exchange" aria-label="股权报酬：公司以股票或相关权利支付员工的部分报酬，员工提供服务。继续持有时，要看奖励交付和其他资本动作合起来怎样影响股数。"><span class="af-name">股权报酬</span><span class="af-party"><span>公司</span></span><div class="af-x"><div class="af-line af-r"><span>股票或相关权利</span></div><div class="af-line af-l"><span>服务</span></div></div><span class="af-party"><span>员工</span></span><span class="af-watch">奖励交付和其他资本动作合起来怎样影响股数</span></div>
</div>
</figure>

对我们自己的投资，要把持有期间收到的现金与期末股票的价值合起来，再与原先投入比较。分红落在现金这一部分，股息到账就要计税；回购、增发和股权报酬通过股数和每股价值落在股票这一部分，要等自己卖出时才实现盈亏。

这些都是一家公司内部的资本动作。想同时持有许多家公司时，我们还可以借助指数规则和基金份额，下一篇[《指数、基金与 ETF》](/zh/notebook/indices-funds-etfs/)从这里讲起。

[^apple]: [Apple：2026 财年第一季度 Form 10-Q](https://www.sec.gov/Archives/edgar/data/320193/000032019326000006/aapl-20251227.htm)，季度截至 2025-12-27。现金流量表的股息及股息等价物支付、普通股回购付款；资产负债表的发行在外普通股；Note 7 与 Part II Item 2 的回购披露。本文的净股数变化由两个资产负债表时点相减，未将单项 RSU 归属量直接作为新增普通股量。
[^berkshire]: [Berkshire Hathaway：2012 年股东信](https://www.berkshirehathaway.com/letters/2012ltr.pdf)，Dividends 部分，讨论业务投入、收购、回购价格与股东分配的取舍；本文采用资金用途与回购价格的比较关系，不沿用其中的估值假设或历史回购门槛。
[^dividends]: [Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends](https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and)，普通现金股息的除息与支付说明。
[^tax]: [IRS Publication 538](https://www.irs.gov/publications/p538)，Cash Method—Income、Constructive receipt；[IRS Publication 550](https://www.irs.gov/publications/p550)，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。
[^alphabet-release]: [Alphabet：2026 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm)，Equity Capital Raise。
[^alphabet]: [Alphabet：截至 2026-06-30 的 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)，Note 11、Equity Capital Raise、ATM Program、Share Repurchases；采用已完成融资、披露的资金用途、期末未执行发行额度及上半年回购状态。


## Sources
- [Alphabet：截至 2026-06-30 的 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm): Alphabet：截至 2026-06-30 的 Form 10-Q，Note 11、Equity Capital Raise、ATM Program、Share Repurchases；采用已完成融资、披露的资金用途、期末未执行发行额度及上半年回购状态。
- [Alphabet：2026 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000066/googexhibit991q22026.htm): Alphabet：2026 年第二季度业绩公告，Equity Capital Raise。
- [Apple：2026 财年第一季度 Form 10-Q](https://www.sec.gov/Archives/edgar/data/320193/000032019326000006/aapl-20251227.htm): Apple：2026 财年第一季度 Form 10-Q，季度截至 2025-12-27。现金流量表的股息及股息等价物支付、普通股回购付款；资产负债表的发行在外普通股；Note 7 与 Part II Item 2 的回购披露。本文的净股数变化由两个资产负债表时点相减，未将单项 RSU 归属量直接作为新增普通股量。
- [Berkshire Hathaway：2012 年股东信](https://www.berkshirehathaway.com/letters/2012ltr.pdf): Berkshire Hathaway：2012 年股东信，Dividends 部分，讨论业务投入、收购、回购价格与股东分配的取舍；本文采用资金用途与回购价格的比较关系，不沿用其中的估值假设或历史回购门槛。
- [Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends](https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and): Investor.gov：Ex-Dividend Dates—When Are You Entitled to Stock and Cash Dividends，普通现金股息的除息与支付说明。
- [IRS Publication 538](https://www.irs.gov/publications/p538): IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。
- [IRS Publication 550](https://www.irs.gov/publications/p550): IRS Publication 538，Cash Method—Income、Constructive receipt；IRS Publication 550，Dividends Used To Buy More Stock、What Is a Sale or Trade?、Redemption of stock、Capital Gains and Losses。未出售者的表述是将处置规则用于普通公开市场回购的情形。

## Content relations
```json
[
  {
    "from": "zh-shareholder-returns-buybacks-issuance",
    "relation": "part_of",
    "to": "topic-S",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [股票的类型、发行与交易形式](https://ou-liu-red-sugar.github.io/zh/notebook/stock-types-issuance-trading/)
- [投资期限与现金需要](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)
