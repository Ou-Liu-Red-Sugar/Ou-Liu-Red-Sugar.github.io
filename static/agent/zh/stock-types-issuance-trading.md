# 股票的类型、发行与交易形式

从股份权利、发行与员工股权报酬出发，理解归属和解禁，再看 ADR 怎样通过存托安排对应境外原股。

Entry: zh-stock-types-issuance-trading | Node: NB-B01 | Language: zh | Editorial revision: 2026-10-11

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
沿股份权利、取得与出售过程和存托安排讲解。承接前两篇实际正文。简明版讲清对象、机构、动作、资金去向与用途，条款补充保留在原句的详细版。Reddit 的发行、员工奖励和锁定分别依已核原件说明，不把授予、归属、行权或交付、解禁和实际卖出合成一条普遍流程。SKHY 按每份对应十分之一股韩国普通股，公开存托协议格式不称为最终签署文本。代币化产品、个股期货与股票永续属于按需专题，本篇只指出它们的位置。教学案例用于理解机制，不代表用户账户或交易安排。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [],
  "required_readings_by_branch": {
    "股份权利与发行": [
      {
        "source_id": "nb-s01-source-stocks",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
        },
        "required_unit": {
          "locator": "Investor.gov：Stocks，What kinds of stocks are there? 及清算顺序说明。",
          "scope": "Investor.gov：Stocks，What kinds of stocks are there? 及清算顺序说明。",
          "purpose": "辨认股份权利及新股发行、原股东转让中的股份和款项去向。"
        },
        "title": "Investor.gov：Stocks",
        "authors": [
          "SEC"
        ],
        "version": "本篇查阅日期：2026-09-24；页面未标正文日期"
      },
      {
        "source_id": "nb-b01-source-alphabet",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
        },
        "required_unit": {
          "locator": "Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。",
          "scope": "Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。",
          "purpose": "辨认股份权利及新股发行、原股东转让中的股份和款项去向。"
        },
        "title": "Alphabet 2025 Form 10-K",
        "authors": [
          "Alphabet"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-alphabet-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm"
        },
        "required_unit": {
          "locator": "Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。",
          "scope": "Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。",
          "purpose": "辨认股份权利及新股发行、原股东转让中的股份和款项去向。"
        },
        "title": "股份权利说明",
        "authors": [
          "Alphabet"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-reddit-ipo",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://investor.redditinc.com/news-events/news-releases/news-details/2024/Reddit-Announces-Pricing-of-Initial-Public-Offering/default.aspx"
        },
        "required_unit": {
          "locator": "Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。",
          "scope": "Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。",
          "purpose": "辨认股份权利及新股发行、原股东转让中的股份和款项去向。"
        },
        "title": "Reddit：首次公开发行定价公告",
        "authors": [
          "Reddit"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-reddit-ipo-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17"
        },
        "required_unit": {
          "locator": "Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。",
          "scope": "Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。",
          "purpose": "辨认股份权利及新股发行、原股东转让中的股份和款项去向。"
        },
        "title": "Investor.gov：Investing in an IPO",
        "authors": [
          "SEC"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      }
    ],
    "股权报酬与解禁": [
      {
        "source_id": "nb-b01-source-sbc",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities"
        },
        "required_unit": {
          "locator": "SEC：Common Startup Securities，Stock、Stock Option、Restricted Stock；Reddit 的实际股权报酬与结算见下引 2024 年第二季度报告。持股比例变化采用持有股数除以总股数的关系。",
          "scope": "SEC：Common Startup Securities，Stock、Stock Option、Restricted Stock；Reddit 的实际股权报酬与结算见下引 2024 年第二季度报告。持股比例变化采用持有股数除以总股数的关系。",
          "purpose": "区分员工奖励、取得股份、允许出售与实际成交，并理解对股数和现金的影响。"
        },
        "title": "SEC：Common Startup Securities",
        "authors": [
          "SEC"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-sbc-example-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm"
        },
        "required_unit": {
          "locator": "SEC：Common Startup Securities；Reddit 2024 招股书，Equity Compensation，第 171–172 页；Restricted Stock Units，第 205 页。本文选取以股份结算的 RSU。",
          "scope": "SEC：Common Startup Securities；Reddit 2024 招股书，Equity Compensation，第 171–172 页；Restricted Stock Units，第 205 页。本文选取以股份结算的 RSU。",
          "purpose": "区分员工奖励、取得股份、允许出售与实际成交，并理解对股数和现金的影响。"
        },
        "title": "Reddit 2024 招股书",
        "authors": [
          "Reddit"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-reddit-rsu",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s203.q4cdn.com/380862485/files/doc_financials/2024/q2/04d62450-250b-47c1-9af2-5f7aac9f4d40.pdf"
        },
        "required_unit": {
          "locator": "Reddit 2024 年第二季度 Form 10-Q，2024-08-06，Note 2 — Initial Public Offering，报告第 12 页、PDF 第 13 页。",
          "scope": "Reddit 2024 年第二季度 Form 10-Q，2024-08-06，Note 2 — Initial Public Offering，报告第 12 页、PDF 第 13 页。",
          "purpose": "区分员工奖励、取得股份、允许出售与实际成交，并理解对股数和现金的影响。"
        },
        "title": "Reddit 2024 年第二季度 Form 10-Q",
        "authors": [
          "Reddit"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-b01-source-reddit-ipo-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17"
        },
        "required_unit": {
          "locator": "Investor.gov：Investing in an IPO，Limited trading volume、Market overhang。发行、解除限制与实际成交的区分为股份计数及交易机制说明。",
          "scope": "Investor.gov：Investing in an IPO，Limited trading volume、Market overhang。发行、解除限制与实际成交的区分为股份计数及交易机制说明。",
          "purpose": "区分员工奖励、取得股份、允许出售与实际成交，并理解对股数和现金的影响。"
        },
        "title": "Investor.gov：Investing in an IPO",
        "authors": [
          "SEC"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      }
    ],
    "存托安排": [
      {
        "source_id": "nb-s01-source-adr-definition",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-88"
        },
        "required_unit": {
          "locator": "SEC：Investor Bulletin—American Depositary Receipts，2012-08-17。",
          "scope": "SEC：Investor Bulletin—American Depositary Receipts，2012-08-17。",
          "purpose": "追踪底层股份、提供机构、投资者权益及分配和转换机制。"
        },
        "title": "SEC：Investor Bulletin—American Depositary Receipts",
        "authors": [
          "SEC"
        ],
        "version": "发布日期：2012-08-17；本篇查阅日期：2026-09-24"
      },
      {
        "source_id": "nb-s01-source-skhy-citi",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://depositaryreceipts.citi.com/adr/guides/estfee.aspx?cusip=78392B206&pageId=15&subpageID=114"
        },
        "required_unit": {
          "locator": "Citi：SK hynix 存托项目，SKHY、普通股 ISIN KR7000660001、ORD:DR 1:10；2026-09-24 读取。",
          "scope": "Citi：SK hynix 存托项目，SKHY、普通股 ISIN KR7000660001、ORD:DR 1:10；2026-09-24 读取。",
          "purpose": "追踪底层股份、提供机构、投资者权益及分配和转换机制。"
        },
        "title": "Citi：SK hynix 美国存托证券项目资料",
        "authors": [
          "Citi"
        ],
        "version": "本篇查阅日期：2026-09-24"
      },
      {
        "source_id": "nb-b01-source-skhy-terms",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/2120882/000119380526000898/e665622_ex99-a.htm"
        },
        "required_unit": {
          "locator": "SKHY 的 F-6 所附公开存托协议格式，2026-07-01 提交；定义 1.4、1.12、1.16，条款 2.2–2.8、4.1、4.9–4.10、4.13，附录 A、B。采用公开协议格式中的存股、托管、发行、分配、投票及注销机制，未将其标作最终签署协议。ADR 是凭证名称，ADS 是凭证所代表的美国存托股份额，正文按每份 SKHY 对应权益讲解。",
          "scope": "SKHY 的 F-6 所附公开存托协议格式，2026-07-01 提交；定义 1.4、1.12、1.16，条款 2.2–2.8、4.1、4.9–4.10、4.13，附录 A、B。采用公开协议格式中的存股、托管、发行、分配、投票及注销机制，未将其标作最终签署协议。ADR 是凭证名称，ADS 是凭证所代表的美国存托股份额，正文按每份 SKHY 对应权益讲解。",
          "purpose": "追踪底层股份、提供机构、投资者权益及分配和转换机制。"
        },
        "title": "SKHY 的 F-6 所附公开存托协议格式",
        "authors": [
          "SK hynix",
          "Citibank"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      }
    ]
  },
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
## 股份的类型与权利 {#nb-b01-rights}

直接买入一家公司的股票时，我们还要看买到的是哪一种股份。股东能否参与投票、公司怎样向这类股份分配收益，以及公司清算时能够按什么顺序取得财产，都与股份的具体权利有关。同一家公司的不同股份，在这些安排上也可能有所不同。

先把普通股与优先股放在一起看：普通股通常让股东参与公司治理和收益分配，清算时取得偿还债务、完成优先分配后的剩余财产；优先股则在约定的股息或清算分配上排在普通股之前。这里的“优先”有具体的比较对象，可以按下面三个方面区分：[^stock-types]

| 权利 | 普通股 | 优先股 |
|---|---|---|
| 投票 | 通常参与表决，具体票数由股份类别决定 | 通常不带一般表决权，特殊表决权按条款安排 |
| 分配 | 参与公司决定的股息分配 | 按股份条款享有优先分配安排 |
| 清算 | 偿还债务并完成优先股的优先分配后，取得剩余 | 排在债权人之后、普通股之前，按约定受偿 |

清算一行说的是先后次序。用一组假设数字来看：公司欠债权人 60，优先股按约定可以先取得 25，剩下的才归普通股。

<figure class="flow-figure claim-order" id="nb-b01-claims" data-ff-views>
<div class="ff-head"><p class="ff-title">清算时的受偿次序（示意）</p><div class="ff-switch" role="group" aria-label="选择可分配财产" hidden><button type="button" data-ff-view-choice="more" aria-pressed="true">财产 100</button><button type="button" data-ff-view-choice="less" aria-pressed="false">财产 70</button></div></div>
<div class="co-grid business-exchange" data-ff-only="more" aria-label="清算后可分配财产为 100：债权人先取得约定的 60；优先股再取得 25，达到约定的 25；普通股取得剩余的 15。"><div class="co-name">可分配财产<small>清算后</small></div><div class="co-track"><i class="co-got co-total" style="--from:0%;--w:100%"></i></div><div class="co-val">100</div><div class="co-name">① 债权人<small>约定 60</small></div><div class="co-track"><i class="co-claim" style="--from:0%;--w:60%"></i><i class="co-got co-debt" style="--from:0%;--w:60%"></i></div><div class="co-val">60 <small>/ 60</small></div><div class="co-name">② 优先股<small>约定 25</small></div><div class="co-track"><i class="co-claim" style="--from:60%;--w:25%"></i><i class="co-got co-pref" style="--from:60%;--w:25%"></i></div><div class="co-val">25 <small>/ 25</small></div><div class="co-name">③ 普通股<small>取得剩余</small></div><div class="co-track"><i class="co-got co-common" style="--from:85%;--w:15%"></i></div><div class="co-val">15</div></div>
<div class="co-grid business-exchange" data-ff-only="less" aria-label="清算后可分配财产为 70：债权人先取得约定的 60；优先股再取得 10，少于约定的 25；普通股没有剩余可分。" hidden><div class="co-name">可分配财产<small>清算后</small></div><div class="co-track"><i class="co-got co-total" style="--from:0%;--w:70%"></i></div><div class="co-val">70</div><div class="co-name">① 债权人<small>约定 60</small></div><div class="co-track"><i class="co-claim" style="--from:0%;--w:60%"></i><i class="co-got co-debt" style="--from:0%;--w:60%"></i></div><div class="co-val">60 <small>/ 60</small></div><div class="co-name">② 优先股<small>约定 25</small></div><div class="co-track"><i class="co-claim" style="--from:60%;--w:25%"></i><i class="co-got co-pref" style="--from:60%;--w:10%"></i></div><div class="co-val">10 <small>/ 25</small></div><div class="co-name">③ 普通股<small>取得剩余</small></div><div class="co-track"></div><div class="co-val">0 <small>没有剩余</small></div></div>
<div class="co-grid" aria-hidden="true"><span></span><div class="co-axis"><span style="--x:0%">0</span><span style="--x:60%">60</span><span style="--x:85%">85</span><span style="--x:100%">100</span></div><span></span></div>
<figcaption>数字为假设。虚线框是按约定可以取得的金额，实心部分是实际取得的金额；前一类得到满足以后，财产才轮到下一类。</figcaption>
</figure>

可分配财产减少时，最先拿不到钱的是排在最后的普通股。

<span data-text-versions id="nb-b01-text-1">公司还可以设置不同类别的股份。比如 Alphabet 的 A 类以 GOOGL 交易，每股一票；B 类不上市交易，每股十票；C 类以 GOOG 交易，通常没有投票权。这三类股份的每股股息和清算权益相同，投票能力却不同<span data-text-detail>（C 类的正式名称是 Class C capital stock，法律要求时仍有相应投票权；B 类转让通常会一比一转为 A 类，章程规定的特定转让除外）</span>。[^alphabet]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 股份发行与分配 {#nb-b01-issuance}

认清股份带来的权利以后，再看这些股份怎样到投资者手中。公司需要资金时，可以发行新股，由认购者出资，公司取得融资；原股东希望出售持股时，则可以把已有股份转让给买方，售股款归原股东所有。两种交易都可能让买方成为股东，钱的去向却不同。

Reddit（RDDT）在 2024 年的首次公开发行中，就同时出现了这两种安排。首次公开发行通常简称 IPO，指公司首次向公众发售股份，常与进入交易所上市交易相连。RDDT 当次发售既有公司出售的新股，也有原股东出售的已有股份，公司不会收到原股东售股部分的款项。承销机构参与组织发售、定价和配售。按股份与款项各自的流向，可以把两条路径画出来：[^reddit-ipo]

<figure class="flow-figure" id="nb-b01-ipo-flow">
<div class="ff-head"><p class="ff-title">RDDT 首次公开发行：股份交给谁，款项流向谁</p><p class="ff-legend"><span class="ff-key-share">股份</span><span class="ff-key-cash">款项</span></p></div>
<div class="ff-row">
<div class="ff-party"><strong>RDDT</strong><small>公司发行新股</small><span class="ff-result">取得融资</span></div>
<div class="ff-exchange business-exchange" aria-label="RDDT 把新发股份交给认购者；认购者把认购款付给 RDDT，公司由此取得融资"><div class="ff-arrow ff-right"><span>新发股份</span></div><div class="ff-arrow ff-cash ff-left"><span>认购款</span></div></div>
<div class="ff-party ff-party-focus"><strong>认购者</strong><small>在 IPO 中认购股份</small></div>
<div class="ff-exchange business-exchange" aria-label="售股股东把已有股份转让给认购者；认购者把这部分款项付给售股股东，RDDT 收不到这笔钱"><div class="ff-arrow ff-left"><span>已有股份</span></div><div class="ff-arrow ff-cash ff-right"><span>售股款</span></div></div>
<div class="ff-party"><strong>售股股东</strong><small>原股东出售已有股份</small><span class="ff-result">取得售股款</span></div>
</div>
<div class="ff-later">
<p class="ff-later-label">上市以后</p>
<div class="ff-party"><strong>卖方</strong><small>已有股东</small></div>
<div class="ff-exchange business-exchange" aria-label="上市以后，卖方把已有股份交给买方；买方把成交款付给卖方，RDDT 收不到这笔成交款"><div class="ff-arrow ff-right"><span>已有股份</span></div><div class="ff-arrow ff-cash ff-left"><span>成交款</span></div></div>
<div class="ff-party"><strong>买方</strong><small>其他投资者</small></div>
</div>
<p class="ff-note">股份换了持有人，RDDT 收不到这笔成交款。</p>
<figcaption>图中只列股份与款项的去向。承销机构参与组织发售、定价和配售，承销费用未列。</figcaption>
</figure>

等到股份开始在市场上交易，投资者之间还可以继续转让：买方支付成交款，卖方交出已有股份，这笔钱归卖方，相应股份的持有人发生了变化。取得公司的一部分权益，并不表示每笔买入款都成为公司的新增资金。IPO 发行价对应那次发售，此后市场上的成交价则由各次买卖形成，两者可以不同。[^ipo-trading]

公司还可以把股份或相关权利用于员工报酬，这类安排通常称为股权报酬，英文是 stock-based compensation，简称 SBC。员工以服务取得报酬，股份因此也能从公司流向员工。对于员工，要看拿到的是股票，还是今后取得或购买股票的权利；对于原有股东，则要看奖励安排怎样影响股份总数和自己的持股比例。公司用新股支付奖励时，若原有股东的股数不变、总股数增加，其持股比例就会下降。公司同时取得了员工的服务，这些服务又可能影响经营成果，因此还要把股份数量与经营变化放在一起，理解每股能够分到什么。[^sbc]

以员工期权和限制性股票单位（RSU）为例，两者取得股票的过程就不同。员工期权给予按约定行权价购买股票的权利，员工行权时要支付购股款；本篇所说的 RSU 则由公司在条件满足后交付股份，授予时员工尚未拿到对应股票。不过在实际取得股份之前，员工还需要满足奖励约定的条件。[^sbc-example]

## 归属、锁定与解禁 {#nb-b01-vesting}

沿着奖励安排，我们可以把授予、归属和实际取得股份的时点分别看清。公司授予奖励，先确定员工可以按什么约定取得报酬；奖励还可能要求员工完成一定服务年限、达到业绩目标，或满足其他约定条件。以这里的员工期权和 RSU 来说，满足相应归属条件后，期权还要经过行权，RSU 还要按安排交付股份。而已经持有股份的人，也可能在一段时间内受到出售限制，例如创始人、早期投资者和员工在 IPO 时约定的锁定。奖励是否已经归属，与股份能否出售，需要分别看。[^vesting-lockup]

<span data-text-versions id="nb-b01-text-2">RDDT 的员工 RSU 提供了一个实际例子。部分奖励既要求完成服务，也要求达到上市条件。已经满足服务条件的那部分奖励，在 IPO 注册生效、上市条件满足后进入结算，公司随后交付了股份<span data-text-detail>（RDDT 在 2024 年第二季度报告中披露了这次已经发生的结算，同时扣留部分股份用于处理相关税款；这里的上市条件满足时点是 IPO 注册生效，区别于首日交易和发行完成）</span>。这段经过说明，授予奖励、满足服务条件和实际收到股份，可以发生在不同时间。[^reddit-rsu]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-b01-text-3">收到股份以后，能否马上卖出还要看出售限制。RDDT 的 IPO 锁定条款允许既有期权行权和 RSU 结算，但由此取得的股份仍受锁定。这样，奖励可以继续按约定执行，出售股份却还需要等待锁定期结束，或符合相应例外<span data-text-detail>（一般锁定期限为 2024 年第二季度业绩公开后第三个交易日开市，或招股书日期后 180 日，两者取较早者；IPO 售股和某些处理税款的交易另有例外）</span>。把取得与出售这两件事分开，时间关系就清楚了：[^reddit-lockup]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="flow-figure stage-lanes" id="nb-b01-rsu-lanes">
<div class="ff-head"><p class="ff-title">RDDT 员工 RSU：取得股份与出售股份</p></div>
<div class="rs-grid business-exchange" aria-label="RDDT 员工 RSU 的两条线：取得股份要经过授予奖励、完成服务条件、IPO 注册生效使上市条件满足，再由公司结算交付股份，并扣留部分股份处理税款；出售股份则在取得以前无从谈起，取得以后仍受 IPO 锁定，锁定期结束后才可以出售，卖不卖由持有人决定。">
<div class="rs-stage" style="--c:2"><strong>授予</strong>IPO 之前</div>
<div class="rs-stage" style="--c:3"><strong>服务期</strong>按约定任职</div>
<div class="rs-stage" style="--c:4"><strong>IPO 注册生效</strong>2024 年 3 月</div>
<div class="rs-stage" style="--c:5"><strong>结算</strong>交付股份</div>
<div class="rs-stage" style="--c:6"><strong>锁定期结束</strong>即解禁</div>
<div class="rs-lane" style="--lane:2">取得股份</div>
<div class="rs-lane" style="--lane:3">出售股份</div>
<div class="rs-cell rs-step" style="--c:2;--lane:2">授予 RSU<small>约定服务与上市条件</small></div>
<div class="rs-cell rs-step" style="--c:3;--lane:2">完成服务条件</div>
<div class="rs-cell rs-step" style="--c:4;--lane:2">上市条件满足</div>
<div class="rs-cell rs-step" style="--c:5;--lane:2">公司交付股份<small>扣留部分处理税款</small></div>
<div class="rs-cell rs-wait" style="--c:2 / 5;--lane:3">尚未取得股份，无从出售</div>
<div class="rs-cell rs-lock" style="--c:5;--lane:3">已持有，仍受 IPO 锁定</div>
<div class="rs-cell rs-free" style="--c:6;--lane:3">可以出售<small>卖不卖由持有人决定</small></div>
</div>
<figcaption>各阶段的宽度不代表实际时长。图中只画已经满足服务条件、在 IPO 后结算的那部分奖励。</figcaption>
</figure>

锁定期结束、相关出售限制解除，通常称为解禁。再把这些安排放回市场，就能区分几种不同的变化：发行新股增加公司发行在外的股份；已有股份解禁扩大可以出售的范围；持有人实际卖出，才形成一笔交易。因此，解禁消息首先告诉我们哪些人的哪些股份获得了出售机会，实际增加多少卖盘，还要看持有人是否出售、卖出多少。股价也会受买方需求和市场原有预期影响，不能仅由解禁股数推出其后的涨跌。[^lockup]

<figure class="flow-figure share-layers" id="nb-b01-share-layers">
<div class="ff-head"><p class="ff-title">三种变化分别改变哪一层（示意）</p><p class="ff-legend"><span class="sl-key-out">发行在外</span><span class="sl-key-free">可以出售</span><span class="sl-key-sold">实际卖出</span><span class="sl-key-delta">本次变化</span></p></div>
<div class="sl-grid">
<div class="sl-row"><div class="sl-event">发行新股</div><div class="sl-bar business-exchange" aria-label="发行新股：发行在外的股份从 100 增加到 110，可以出售的部分和实际卖出的部分不因此改变。"><i class="sl-out" style="--w:90.91%"></i><i class="sl-delta" style="--from:90.91%;--w:9.09%"></i><i class="sl-free" style="--w:36.36%"></i></div><div class="sl-note">在外股份 <strong>+10</strong></div></div>
<div class="sl-row"><div class="sl-event">解禁</div><div class="sl-bar business-exchange" aria-label="解禁：发行在外的股份仍为 100，可以出售的部分从 40 扩大到 70，还没有形成交易。"><i class="sl-out" style="--w:90.91%"></i><i class="sl-free" style="--w:36.36%"></i><i class="sl-delta sl-in-free" style="--from:36.36%;--w:27.27%"></i></div><div class="sl-note">可以出售 <strong>+30</strong></div></div>
<div class="sl-row"><div class="sl-event">实际卖出</div><div class="sl-bar business-exchange" aria-label="实际卖出：可以出售的 70 中有持有人卖出 5，形成成交；发行在外的股份和可以出售的范围都不变。"><i class="sl-out" style="--w:90.91%"></i><i class="sl-free" style="--w:63.64%"></i><i class="sl-sold" style="--w:4.55%"></i></div><div class="sl-note">成交 <strong>5</strong></div></div>
</div>
<figcaption>数字为假设，三行各自从同一起点比较。</figcaption>
</figure>

## ADR 与存托安排 {#nb-b01-adr}

在市场上买卖的对象，也可能是对应股票权益的存托证券。[《股票、公司与股价》](/zh/notebook/stocks-company-price/)介绍的 SKHY 就在美国市场交易，每份对应十分之一股 SK hynix（000660）韩国普通股。这层对应关系怎样维持，还要沿着托管和存托安排继续看。[^adr]<sup>，</sup>[^skhy]

韩国原股进入当地托管安排，托管机构确认存入的股份后，存托银行据此发行相应的存托证券。在 SKHY 的公开存托文件中，Citibank 是存托银行，Korea Securities Depository 是韩国托管机构。投资者买入已有的 SKHY，持有的是存托证券，买款付给卖方；原股仍在托管安排中。与前面转让已有股份一样，在市场上转让已有存托凭证，也不会为 SK hynix 带来新增融资。[^skhy-terms]

<figure class="flow-figure channels" id="nb-b01-adr-channels">
<div class="ff-head"><p class="ff-title">SKHY 的存托渠道</p></div>
<div class="ch-grid">
<span class="ch-corner"></span><div class="ch-party">原股一侧<small>SK hynix 普通股</small></div><div class="ch-party">托管机构<small>KSD</small></div><div class="ch-party">存托银行<small>Citibank</small></div><div class="ch-party">SKHY 持有人<small>美国市场</small></div>
<div class="ch-row  business-exchange" aria-label="形成凭证：韩国原股存入托管，托管机构确认存入后，存托银行发行相应的 SKHY，投资者取得 SKHY。"><div class="ch-name">形成凭证</div><div class="ch-cell">存入原股</div><div class="ch-cell">确认存入</div><div class="ch-cell">发行 SKHY</div><div class="ch-cell">取得 SKHY</div></div>
<div class="ch-row ch-cash business-exchange" aria-label="现金分红：SK hynix 派发韩元分红，款项经托管机构转到存托银行，换成美元并扣除有关税费后，分配给 SKHY 持有人。"><div class="ch-name">现金分红</div><div class="ch-cell">派发韩元分红</div><div class="ch-cell">经托管转出</div><div class="ch-cell">换成美元、扣除税费</div><div class="ch-cell">收到美元</div></div>
<div class="ch-row ch-vote ch-back business-exchange" aria-label="投票：SKHY 持有人按通知发出投票指示，存托银行依约办理，经托管安排对相应原股表决。"><div class="ch-name">投票</div><div class="ch-cell">原股表决</div><div class="ch-cell">经托管安排</div><div class="ch-cell">依约办理</div><div class="ch-cell">发出投票指示</div></div>
<div class="ch-row ch-back business-exchange" aria-label="注销提取：持有人交回 SKHY，存托银行注销凭证，经托管安排交付相应原股，持有人提取原股。"><div class="ch-name">注销提取</div><div class="ch-cell">提取原股</div><div class="ch-cell">交付原股</div><div class="ch-cell">注销凭证</div><div class="ch-cell">交回 SKHY</div></div>
</div>
<figcaption>右箭头从原股一侧流向 SKHY 持有人，左箭头反向。</figcaption>
</figure>

<span data-text-versions id="nb-b01-text-4">存托机构还要处理持有期间的事务。公司支付现金分红后，款项经托管与存托安排处理，再分配给存托证券持有人；公司信息和投票事项也通过这条渠道传递，持有人按通知发出投票指示，再由存托机构依约办理<span data-text-detail>（SKHY 公开存托文件规定，现金分红换成美元、扣除有关税费后分配；投票指示须及时提交，并对应整股股份。费用、汇兑和投票程序会影响持有人实际收到的现金及权利行使）</span>。[^skhy-terms]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<span data-text-versions id="nb-b01-text-5">存托凭证与原股之间还可以按规定转换：存入原股可以形成相应凭证，交回凭证注销则可以提取对应原股。实际办理要满足存托项目的程序，并看经纪商是否提供这项服务<span data-text-detail>（办理还涉及文件、税费、适用规则和处理时间；发行或注销费用之外，也可能有登记、通讯及汇兑成本）</span>。有了这层联系，就可以继续比较[《股票、公司与股价》](/zh/notebook/stocks-company-price/)中的两地价格：除了统一股数和币种，还要考虑买卖时点、转换条件与交易成本，两个市场显示的价差才有具体含义。[^skhy-terms]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

认清底层是哪家公司以后，我们还要弄清实际持有的是什么。直接持有的股份由公司发行，权利按股份类别确定；SKHY 这样的存托证券由存托银行发行，分红、投票和转换都要经过存托安排。围绕同一只股票，市场上还有代币化产品、个股期货和股票永续等形式，持有人取得的权益和要准备的资金又各不相同，按需专题[《个股期货、股票永续与代币化股票》](/zh/notebook/#topic-K)会把它们放在一起比较。

回到直接持有的股份，公司还会通过分红、回购和增发改变每股能分到什么。下一篇[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)从 AAPL 的分红与回购讲起。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261011-6">
<script src="/notebook/flow-figures.js?v=20261011-6" defer></script>

[^stock-types]: [Investor.gov：Stocks](https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks)，What kinds of stocks are there? 及清算顺序说明。
[^alphabet]: [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)，Item 5、Note 11、Note 12；[股份权利说明](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm)，Voting Rights、Liquidation Rights、Conversion。
[^reddit-ipo]: [Reddit：首次公开发行定价公告](https://investor.redditinc.com/news-events/news-releases/news-details/2024/Reddit-Announces-Pricing-of-Initial-Public-Offering/default.aspx)，2024-03-20；[Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，2022-10-14，IPO、承销机构与售股股东说明。
[^ipo-trading]: [Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，Offering price、Selling shareholders。
[^sbc]: [SEC：Common Startup Securities](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities)，Stock、Stock Option、Restricted Stock；Reddit 的实际股权报酬与结算见下引 2024 年第二季度报告。持股比例变化采用持有股数除以总股数的关系。
[^sbc-example]: [SEC：Common Startup Securities](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities)；[Reddit 2024 招股书](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm)，Equity Compensation，第 171–172 页；Restricted Stock Units，第 205 页。本文选取以股份结算的 RSU。
[^vesting-lockup]: 同上 SEC 奖励介绍及 Reddit 招股书 Equity Compensation、Lock-Up Agreements。本篇分别说明奖励条件与出售限制，不把不同奖励安排合并为固定四步。
[^reddit-rsu]: [Reddit 2024 年第二季度 Form 10-Q](https://s203.q4cdn.com/380862485/files/doc_financials/2024/q2/04d62450-250b-47c1-9af2-5f7aac9f4d40.pdf)，2024-08-06，Note 2 — Initial Public Offering，报告第 12 页、PDF 第 13 页。
[^reddit-lockup]: [Reddit 2024 招股书](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm)，2024-03-20，Lock-Up Agreements，第 215–217 页；第 216 页第 5 项允许既有期权行权、RSU 结算，所得股份继续受锁定。
[^lockup]: [Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17)，Limited trading volume、Market overhang。发行、解除限制与实际成交的区分为股份计数及交易机制说明。
[^adr]: [SEC：Investor Bulletin—American Depositary Receipts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-88)，2012-08-17。
[^skhy]: [Citi：SK hynix 存托项目](https://depositaryreceipts.citi.com/adr/guides/estfee.aspx?cusip=78392B206&pageId=15&subpageID=114)，SKHY、普通股 ISIN KR7000660001、ORD:DR 1:10；2026-09-24 读取。
[^skhy-terms]: [SKHY 的 F-6 所附公开存托协议格式](https://www.sec.gov/Archives/edgar/data/2120882/000119380526000898/e665622_ex99-a.htm)，2026-07-01 提交；定义 1.4、1.12、1.16，条款 2.2–2.8、4.1、4.9–4.10、4.13，附录 A、B。采用公开协议格式中的存股、托管、发行、分配、投票及注销机制，未将其标作最终签署协议。ADR 是凭证名称，ADS 是凭证所代表的美国存托股份额，正文按每份 SKHY 对应权益讲解。


## Sources
- [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。
- [股份权利说明](https://www.sec.gov/Archives/edgar/data/1652044/000165204423000016/googexhibit420q42022.htm): Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。
- [Reddit：首次公开发行定价公告](https://investor.redditinc.com/news-events/news-releases/news-details/2024/Reddit-Announces-Pricing-of-Initial-Public-Offering/default.aspx): Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。
- [Investor.gov：Investing in an IPO](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-17): Reddit：首次公开发行定价公告，2024-03-20；Investor.gov：Investing in an IPO，2022-10-14，IPO、承销机构与售股股东说明。
- [Reddit 2024 年第二季度 Form 10-Q](https://s203.q4cdn.com/380862485/files/doc_financials/2024/q2/04d62450-250b-47c1-9af2-5f7aac9f4d40.pdf): Reddit 2024 年第二季度 Form 10-Q，2024-08-06，Note 2 — Initial Public Offering，报告第 12 页、PDF 第 13 页。
- [SEC：Common Startup Securities](https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/common-startup-securities): SEC：Common Startup Securities，Stock、Stock Option、Restricted Stock；Reddit 的实际股权报酬与结算见下引 2024 年第二季度报告。持股比例变化采用持有股数除以总股数的关系。
- [Reddit 2024 招股书](https://www.sec.gov/Archives/edgar/data/1713445/000162828024012380/reddit-final424b4.htm): SEC：Common Startup Securities；Reddit 2024 招股书，Equity Compensation，第 171–172 页；Restricted Stock Units，第 205 页。本文选取以股份结算的 RSU。
- [SKHY 的 F-6 所附公开存托协议格式](https://www.sec.gov/Archives/edgar/data/2120882/000119380526000898/e665622_ex99-a.htm): SKHY 的 F-6 所附公开存托协议格式，2026-07-01 提交；定义 1.4、1.12、1.16，条款 2.2–2.8、4.1、4.9–4.10、4.13，附录 A、B。采用公开协议格式中的存股、托管、发行、分配、投票及注销机制，未将其标作最终签署协议。ADR 是凭证名称，ADS 是凭证所代表的美国存托股份额，正文按每份 SKHY 对应权益讲解。
- [SEC：Investor Bulletin—American Depositary Receipts](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-88): ADR、ADS与托管境外公司股份之间的对应关系。
- [Citi：SK hynix 美国存托证券项目资料](https://depositaryreceipts.citi.com/adr/guides/estfee.aspx?cusip=78392B206&pageId=15&subpageID=114): SKHY、Nasdaq、CUSIP 78392B206、底层普通股ISIN与每ADS对应1/10股的项目字段。
- [Investor.gov：Stocks](https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks): 股票代表公司所有权的定义；本篇采用范围见正文脚注与指定阅读单元。

## Content relations
```json
[
  {
    "from": "zh-stock-types-issuance-trading",
    "relation": "part_of",
    "to": "topic-B",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
