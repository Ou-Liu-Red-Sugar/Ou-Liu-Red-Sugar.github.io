# 亏损、波动与持有能力

从 FISV 财报后暴跌、又继续下跌的持有经历出发，对照 KO 的修复，结合行业比较、Risk–Reward、重新定价和资金安排，理解持有与退出。

Entry: zh-loss-volatility-holding-capacity | Node: NB-A03 | Language: zh | Editorial revision: 2026-10-12

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
开篇以FISV为实例：2025-10-29财报后收盘126.17→70.60（约−44%），此后最高收盘69.85（2026-01-09），2026-09-24为45.98（较暴跌收盘再−35%）。亏损一节用同一数据：年初205.98买入−77.7%，高点237.79（2025-03-03）回撤−80.7%，财报前126.17买入−63.6%，暴跌当天70.60买入−34.9%，三人此后涨跌相同。再从亏损后的回本预期出发，先比较各自行业中的价格变化，再核经营与盈利预期，最后用当前价格下的Risk-Reward及资金条件讨论持有或退出。KO在2023年GLP-1担忧中的修复为成功过程，FISV在2025—2026年预期下修及相对失利为失败过程；二者分别与行业ETF XLP、IPAY比较。KO图为2023-09-29至12-29，FISV图为2025-01-02至2026-09-24，均采用拆股调整后的Close，不含分红。XLP和IPAY提供消费必需品及全球数字支付行业参照；业务覆盖比单一公司更广。FISV旧代码FI，自2025-11-11改为FISV。公司已披露数据与指引分别保留期间及GAAP/非GAAP身份。情景算例用一组简化数字：两年、当前100美元、年EPS6/5/3与倍数25/20/20，累计分红各2美元；从当前价格计算，结合发生可能性及等待时间。技术指标只作简短交代，布林带、MACD、KDJ 与 VWAP 的读法属于按需专题《指标与趋势交易》。MSFT于2026-07-29盘后发布FY26 Q4财报，下一交易日收盘上涨约15.5%；旧上轨约401.7美元为财报前20个交易日均值加2倍总体标准差，固定原位置用于对照，不能伪装成财报后实时滚动上轨。财年与自然季度的关系留给《三张财报与经营活动》。完整展开现金安排与杠杆的影响，并采用作者提供的放下设备散心句子。首次英文名加代码，后文优先代码；必要条件只在对应位置说明一次。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-a03-complete-wsj-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.wsj.com/finance/stocks/how-to-tell-whether-a-plunging-stock-will-keep-plunging-bf0be3ed"
      },
      "required_unit": {
        "locator": "Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。",
        "scope": "Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging",
      "authors": [
        "Spencer Jakab"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-prices-ko-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/KO/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：KO、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见数据表。",
        "scope": "Yahoo Finance：KO、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见数据表。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "KO",
      "authors": [
        "KO"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-prices-ko-3",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/XLP/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：KO、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见数据表。",
        "scope": "Yahoo Finance：KO、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见数据表。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "XLP",
      "authors": [
        "XLP"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-ipay-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://amplifyetfs.com/ipay/"
      },
      "required_unit": {
        "locator": "Amplify：Digital Payments ETF（IPAY），跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。",
        "scope": "Amplify：Digital Payments ETF（IPAY），跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Amplify：Digital Payments ETF（IPAY）",
      "authors": [
        "Amplify"
      ],
      "version": "本篇核对日期：2026-09-26；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-prices-fisv-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/FISV/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。",
        "scope": "Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "FISV",
      "authors": [
        "FISV"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-prices-fisv-2-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/IPAY/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。",
        "scope": "Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "IPAY",
      "authors": [
        "IPAY"
      ],
      "version": "本篇核对日期：2026-09-26；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-ticker-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2025-32"
      },
      "required_unit": {
        "locator": "Nasdaq：Fiserv 上市与交易代码公告，自 2025-11-11 起使用 FISV，此前使用 FI。",
        "scope": "Nasdaq：Fiserv 上市与交易代码公告，自 2025-11-11 起使用 FISV，此前使用 FI。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Nasdaq：Fiserv 上市与交易代码公告",
      "authors": [
        "Nasdaq"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-ko-results-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.coca-colacompany.com/media-center/coca-cola-reports-third-quarter-2023-results"
      },
      "required_unit": {
        "locator": "Coca-Cola：2023 年第三季度业绩公告，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。",
        "scope": "Coca-Cola：2023 年第三季度业绩公告，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Coca-Cola：2023 年第三季度业绩公告",
      "authors": [
        "Coca-Cola"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-fiserv-q2-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/Archives/edgar/data/798354/000079835425000161/fiq225earningsrelease.htm"
      },
      "required_unit": {
        "locator": "Fiserv：2025 年第二季度业绩公告，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。",
        "scope": "Fiserv：2025 年第二季度业绩公告，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Fiserv：2025 年第二季度业绩公告",
      "authors": [
        "Fiserv"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-fiserv-q3-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-third-quarter-2025-results"
      },
      "required_unit": {
        "locator": "Fiserv：2025 年第三季度业绩公告，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。",
        "scope": "Fiserv：2025 年第三季度业绩公告，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Fiserv：2025 年第三季度业绩公告",
      "authors": [
        "Fiserv"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-fiserv-2026-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-second-quarter-2026-results"
      },
      "required_unit": {
        "locator": "Fiserv：2026 年第二季度业绩公告，2026-08-06，季度有机收入与调整后每股收益的同比变化。",
        "scope": "Fiserv：2026 年第二季度业绩公告，2026-08-06，季度有机收入与调整后每股收益的同比变化。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Fiserv：2026 年第二季度业绩公告",
      "authors": [
        "Fiserv"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-msft-results-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast"
      },
      "required_unit": {
        "locator": "Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。",
        "scope": "Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Microsoft：FY26 Q4 业绩公告",
      "authors": [
        "Microsoft"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-msft-results-2",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/"
      },
      "required_unit": {
        "locator": "Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。",
        "scope": "Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "财报发布时间公告",
      "authors": [
        "财报发布时间公告"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-complete-msft-prices-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/MSFT/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：MSFT 历史行情。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见数据表。",
        "scope": "Yahoo Finance：MSFT 历史行情。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见数据表。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Yahoo Finance：MSFT 历史行情",
      "authors": [
        "Yahoo Finance"
      ],
      "version": "本篇核对日期：2026-09-25；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-source-margin-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts"
      },
      "required_unit": {
        "locator": "FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。",
        "scope": "FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "FINRA：Brokerage Accounts",
      "authors": [
        "FINRA"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
2025 年 10 月 29 日，Fiserv（FISV，当时代码为 FI）公布第三季度财报并大幅下调全年指引，股价当天从 126.17 美元跌到 70.60 美元，跌了约 44%。已经跌掉这么多，再等一等似乎就能回本；可此后将近一年里，FISV 的收盘价最高只回到 69.85 美元，到 2026 年 9 月 24 日跌到 45.98 美元，比暴跌当天的收盘价又低了约 35%。[^prices-fisv]<sup>，</sup>[^ticker]

同样在下跌中继续持有，2023 年秋天的 Coca-Cola（KO）到年底就收复了跌幅。两笔持仓走向不同的结果，原因要到行业和公司那里去找：下跌期间经营和盈利预期发生了什么，眼前的价格又对应着怎样的前景。等回本的愿望，回答不了这些问题。

## 亏损与回本预期 {#nb-a03-loss}

先把几种常见说法放进 FISV 这笔持仓。2025 年第一个交易日以 205.98 美元买入，到 2026 年 9 月 24 日的 45.98 美元，相对买入成本亏损约 77.7%；股价在 2025 年 3 月 3 日曾到 237.79 美元，从这个高点算起，回撤约 80.7%。前一个数字记录这笔投资的得失，后一个数字描述从高处回落的幅度。[^prices-fisv]

尚未卖出的亏损，通常叫浮亏。股票虽然还在账户里，持仓的市场价值却已经减少了；卖出以后，相应股份换成现金，这部分盈亏也就实现了。若期间还收到过分红，就要像[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)所讨论的那样，把已经收到的现金与剩余股份的价值合起来看。

把过去的得失算清以后，还要再往前看。三个人分别在 2025 年初、财报前一天和暴跌当天收盘时买入 FISV，到 2026 年 9 月 24 日，各自亏损约 77.7%、63.6% 和 34.9%；从这一天起，他们持有的是同一只 45.98 美元的股票，接下来的涨跌完全相同。市场不会因为谁在 205.98 美元买入，就更有理由涨回去。买入价仍然用于记录盈亏，是否值得继续持有，要看眼前的价格与今后的所得。

<figure class="flow-figure path-chart" id="nb-a03-cost-bases">
<div class="ff-head"><p class="ff-title">同一个现价，三种买入成本</p><span class="ff-sub">FISV 收盘价，美元／股</span></div>
<div class="pc-plot business-exchange" aria-label="FISV 拆股调整后收盘价，2025 年 1 月 2 日 至 2026 年 9 月 24 日。2025 年 3 月 3 日 达到高点 237.79 美元，2025 年 10 月 28 日 收盘 126.17 美元，2025 年 10 月 29 日 财报后收盘 70.60 美元，2026 年 9 月 24 日 为 45.98 美元。年初以 205.98 美元买入的人亏损约 77.7%，财报前一天以 126.17 美元买入的人亏损约 63.6%，暴跌当天收盘以 70.60 美元买入的人亏损约 34.9%；从高点算起回撤约 80.7%。此后三人持有的是同一只 45.98 美元的股票，接下来的涨跌相同。">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline class="pc-grid" points="0,80.77 100,80.77"/><polyline class="pc-grid" points="0,61.54 100,61.54"/><polyline class="pc-grid" points="0,42.31 100,42.31"/><polyline class="pc-grid" points="0,23.08 100,23.08"/><polyline class="pc-grid" points="0,3.85 100,3.85"/><polyline class="pc-fixed" points="0.00,20.78 100,20.78"/><polyline class="pc-fixed" points="47.46,51.47 100,51.47"/><polyline class="pc-fixed" points="47.62,72.85 100,72.85"/><polyline class="pc-price" points="0.00,20.78 0.16,19.78 1.27,22.88 2.38,19.78 3.49,19.68 4.60,16.91 5.71,11.52 6.83,11.31 7.94,10.64 9.05,9.35 10.16,16.14 11.27,17.46 12.38,16.12 13.49,16.87 14.60,23.62 15.71,19.95 16.67,19.75 17.94,31.72 19.05,29.09 20.16,29.20 21.27,35.90 22.38,38.72 23.49,37.39 24.60,35.88 25.71,37.30 26.83,37.16 27.94,33.72 28.89,32.48 30.16,36.34 31.27,36.25 32.38,45.37 33.49,47.95 34.60,48.75 35.71,47.42 36.83,46.28 37.94,46.85 39.05,48.06 40.16,48.34 41.27,49.31 42.38,50.17 43.49,50.94 44.60,52.83 45.71,53.21 46.83,51.86 47.46,51.47 47.62,72.85 47.94,74.35 49.05,75.50 50.16,75.61 51.27,76.60 52.38,76.36 53.49,74.51 54.60,73.56 55.71,73.87 56.83,74.04 57.94,74.77 59.05,73.13 60.16,74.50 61.27,74.02 62.38,75.49 63.49,76.92 64.60,77.17 65.71,76.36 66.83,76.04 67.94,75.73 69.05,78.18 70.16,78.05 71.27,79.27 72.22,78.40 73.49,78.43 74.60,75.40 75.71,76.60 76.83,76.10 77.94,78.66 79.05,78.72 80.16,78.03 81.27,78.25 82.38,79.07 83.49,79.32 84.44,81.59 85.71,80.98 86.67,79.87 87.94,80.60 89.05,80.53 90.16,80.38 91.27,79.25 92.38,79.84 93.49,79.08 94.60,79.78 95.71,79.55 96.83,79.62 97.94,80.16 99.05,81.85 100.00,82.32"/></svg>
<span class="pc-y" style="top:80.77%">50</span><span class="pc-y" style="top:61.54%">100</span><span class="pc-y" style="top:42.31%">150</span><span class="pc-y" style="top:23.08%">200</span><span class="pc-y" style="top:3.85%">250</span><span class="pc-xlab" style="left:28.57%">2025.07</span><span class="pc-xlab" style="left:57.78%">2026.01</span><span class="pc-xlab" style="left:86.51%">2026.07</span>
<span class="pc-dot" style="left:9.52%;top:8.54%"></span><span class="pc-note" style="left:calc(9.52% + 8px);top:calc(8.54% - 22px)">高点 237.79</span><span class="pc-dot" style="left:0.00%;top:20.78%"></span><span class="pc-note cb-mark" style="left:calc(0.00% + 4px);top:calc(20.78% + 6px)">①</span><span class="pc-dot" style="left:47.46%;top:51.47%"></span><span class="pc-note cb-mark" style="left:calc(47.46% + 8px);top:calc(51.47% - 20px)">②</span><span class="pc-dot" style="left:47.62%;top:72.85%;--c:var(--ff-cash)"></span><span class="pc-note cb-mark pc-warm" style="left:calc(47.62% - 22px);top:calc(72.85% + 4px)">③</span><span class="pc-dot" style="left:100.00%;top:82.32%;--c:var(--ff-cash)"></span><span class="pc-note" style="right:0;top:calc(20.78% - 18px);text-align:right">① <strong>−77.7%</strong></span><span class="pc-note" style="right:0;top:calc(51.47% - 18px);text-align:right">② <strong>−63.6%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(72.85% - 18px);text-align:right">③ <strong>−34.9%</strong></span><span class="pc-note pc-warm" style="right:0;top:calc(82.32% + 8px);text-align:right">现价 45.98</span>
</div>
<figcaption>① 2025 年初以 205.98 买入；② 10 月 28 日财报前以 126.17 买入；③ 10 月 29 日暴跌后以 70.60 买入。虚线是三个买入价，右端为各自到 2026 年 9 月 24 日的盈亏；拆股调整后收盘价，不含分红。<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

## 行业参照与两种结果 {#nb-a03-industry}

我们先从 Coca-Cola（KO）的一次下跌看起。2023 年秋天，GLP-1 减肥药引发了市场对食品饮料消费减少的担忧：如果人们吃得更少、喝得更少，相关公司的增长会不会受到影响？KO 与多家食品饮料公司的股价都受到了冲击，后来又逐步修复。[^wsj]

从实际行情看，KO 在 2023 年 9 月底收于约 56 美元，10 月初一度跌到约 52 美元，到了年底又回到约 59 美元。图中用消费必需品 ETF XLP 作参照：KO 在 10 月初的下跌更急，后来逐渐修复，到年底，两者相对 9 月底都上涨了约 5%。接下来要查的，就是当时的担忧与实际经营之间有多大距离。[^prices-ko]

<figure class="holding-figure">
<img src="/notebook/holding/ko-recovery.svg" alt="2023年9月29日至12月29日，KO和消费必需品ETF XLP收盘价均以期初为100。KO在10月初下跌后逐步修复，期末KO上涨约5.3%，XLP上涨约4.7%；标记10月24日的财报发布。" width="820" height="430" loading="lazy">
<figcaption>KO 的修复过程与消费必需品板块的同期表现。两条线各自从 100 起步，比较价格变化；<a href="/notebook/holding/ko-recovery.csv">查看数据</a>。</figcaption>
</figure>

再看开头的 FISV。Fiserv 提供支付处理和金融技术服务，起初给出了较高的增长与盈利预期，后来却大幅下调指引。为了判断这段下跌有多少来自行业，我们把它与支付行业 ETF IPAY 放在一起。IPAY 覆盖支付网络、支付处理及相关技术服务公司，可以提供一组支付业务的参照。从 2025 年首个交易日到 2026 年 9 月 24 日，IPAY 下跌约 18%，FISV 却下跌了约 78%。支付板块的价格也在下跌，但 FISV 落后的幅度明显更大，我们因而要回到公司披露，看看它的经营与盈利预期发生了什么变化。[^ipay]<sup>，</sup>[^prices-fisv]

<figure class="holding-figure">
<img src="/notebook/holding/fiserv-underperformance.svg" alt="2025年1月2日至2026年9月24日，FISV和支付行业ETF IPAY收盘价均以期初为100。期末FISV下跌约77.7%，IPAY下跌约18.1%；FISV在2025年10月指引大幅下修时暴跌，随后仍持续承压。" width="820" height="430" loading="lazy">
<figcaption>FISV 相对支付行业 ETF IPAY 的明显落后。虚线标出几次公司披露，区间末的数字为相对期初的价格变化；<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-1">一般而言，当行业里的公司一起下跌，自己的持仓也大致同步时，我们就不必单凭亏损怀疑它出了独有的问题；若在一段时间里明显落后于行业，便应该重点检查需求、竞争位置和盈利前景是否也相对转弱了。即使公司还在增长，原先的增长预期也可能已经落空<span data-text-detail>（KO 图观察 2023 年 9 月 29 日至 12 月 29 日；FISV 图观察 2025 年 1 月 2 日至 2026 年 9 月 24 日。两图使用拆股调整后的收盘价，各自以期初为 100，不计分红。XLP 覆盖美国消费必需品板块，IPAY 覆盖全球数字支付相关公司，业务范围均比对应单一公司更广；相对股价还受起始估值及市场预期变化影响）</span>。相对行业的表现提供了查证的方向，接下来就要用公司披露的经营情况检验：当时担心的业务变化是否已经出现，原来的增长预期又兑现了多少。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 基本面变化与 Risk-Reward {#nb-a03-risk-reward}

先看 KO 在这轮下跌中披露了什么。市场开始担心消费减少以后，公司随后公布的财报能为这一担忧提供怎样的参照？2023 年 10 月 24 日发布的第三季度报告显示，全球销量同比增长 2%，营业利润增长 6%；公司同时上调全年有机收入增长预期至 10%—11%。财报呈现的是截至 9 月底仍在增长的业务基础，公司对全年增长的判断也没有随着市场担忧一起转弱。[^ko-results]

这就给了持有人可以继续观察的具体依据：销量能不能保持，产品和定价是否仍有竞争力，全年盈利预期是否需要调整。面对同一轮担忧，我们既要理解它可能怎样影响业务，也要看这种影响已经发展到了哪一步。后来股价修复，让我们看见了这段持有过程的结果；当时作判断时，能够使用的则是已经披露的经营情况与对未来的估计。

再回到 FISV，我们就要带着原先的预期去看后来的变化。2025 年 7 月，公司还预计全年有机收入增长约 10%，调整后每股收益为 10.15—10.30 美元；到 10 月，这两项预期分别降至 3.5%—4% 和 8.50—8.60 美元。原先期待的增长没有按计划兑现，持有依据也就需要随之修改。[^fiserv-q2]<sup>，</sup>[^fiserv-q3]

问题也出现在实际经营中。FISV 的商户业务有机收入增速，从第二季度的 9% 放缓到第三季度的 5%；金融服务业务则从增长 7% 转为下降 3%。第三季度调整后每股收益同比下降 11%。到 2026 年第二季度，公司有机收入同比下降 5%，调整后每股收益下降 26%，经营压力仍然没有消失。公司还在赚钱，可当初期待的增长与盈利路径已经改变了。[^fiserv-q2]<sup>，</sup>[^fiserv-q3]<sup>，</sup>[^fiserv-2026]

<figure class="flow-figure shift-rows" id="nb-a03-fisv-reset">
<div class="ff-head"><p class="ff-title">FISV 的预期与经营怎样被改写</p><p class="ff-legend"><span style="--c:#8a978e" class="sh-key-old">原先</span><span class="ff-key-cash">后来</span></p></div>
<div class="sh-grid">
<span class="sh-sep">全年指引：2025 年 7 月 → 10 月</span>
<span class="sh-name">有机收入增长<small>2025 年全年</small></span><span class="sh-val">约 10% → <strong>3.5%–4%</strong></span><div class="sh-track business-exchange" aria-label="2025 年全年有机收入增长指引，从 7 月的约 10% 下调到 10 月的 3.5%—4%。"><i class="sh-line" style="--from:31.2%;--w:52.1%"></i><i class="sh-old" style="--from:83.3%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:29.2%;--w:4.2%;--shift:0px"></i></div>
<span class="sh-name">调整后每股收益<small>2025 年全年，美元</small></span><span class="sh-val">10.15–10.30 → <strong>8.50–8.60</strong></span><div class="sh-track business-exchange" aria-label="2025 年全年调整后每股收益指引，从 7 月的 10.15—10.30 美元下调到 10 月的 8.50—8.60 美元。"><i class="sh-line" style="--from:18.3%;--w:55.8%"></i><i class="sh-old" style="--from:71.7%;--w:5.0%;--shift:0px"></i><i class="sh-new" style="--from:16.7%;--w:3.3%;--shift:0px"></i></div>
<span class="sh-sep">季度有机收入增长：第二季度 → 第三季度</span>
<span class="sh-name">商户业务<small>2025 年</small></span><span class="sh-val">9% → <strong>5%</strong></span><div class="sh-track business-exchange" aria-label="商户业务有机收入增速从 2025 年第二季度的 9% 放缓到第三季度的 5%。"><span class="sh-zero" style="--x:33.3%"></span><i class="sh-line" style="--from:61.1%;--w:22.2%"></i><i class="sh-old" style="--from:83.3%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:61.1%;--w:0.0%;--shift:-6px"></i></div>
<span class="sh-name">金融服务业务<small>2025 年</small></span><span class="sh-val">7% → <strong>−3%</strong></span><div class="sh-track business-exchange" aria-label="金融服务业务有机收入从 2025 年第二季度增长 7% 转为第三季度下降 3%。"><span class="sh-zero" style="--x:33.3%"></span><i class="sh-line" style="--from:16.7%;--w:55.6%"></i><i class="sh-old" style="--from:72.2%;--w:0.0%;--shift:-6px"></i><i class="sh-new" style="--from:16.7%;--w:0.0%;--shift:-6px"></i></div>
</div>
<figcaption>空心标记为原先的数字，实心为后来的数字；每行各用自己的刻度，竖虚线为 0%。均为公司披露的非 GAAP 口径。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-2">经营与盈利预期的变化，还会改变我们对股东未来所得的估计。正如[《股票、公司与股价》](/zh/notebook/stocks-company-price/)所讨论的，持有公司的股份，就要看它的业务最终能带来什么。一项业务受到冲击时，要看它在公司利润中占多大比重、压力可能持续多久，其他业务又能提供多少支撑，再计入共同费用、债务和资金投入的影响，估计整体的盈利前景<span data-text-detail>（本节的有机收入增长及调整后每股收益，采用各公司披露的非 GAAP 口径；比较始终在同一家公司、同一指标内进行，所述季度同比变化与全年指引分别保留各自期间）</span>。所以，重新判断持仓时，我们既要更新对未来所得的估计，也得看看眼前的股价已经变到了哪里。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

至于价格下跌以后是否更值得持有，还得看未来所得的预期怎样变化。经营预期仍有支持、价格却降下来了，相同的潜在所得就对应更少的资金投入；若经营前景下调得更多，即使股价已经更低，这笔投资也未必更划算。为了把这两边的变化放在一起，我们就要用到 Risk-Reward，比较可能取得的回报与需要承担的损失。

我们不妨用一组简化数字，把这个比较具体展开。设当前股价为 100 美元，观察两年后的结果，期间累计每股分红按 2 美元计算。经营顺利时，需求增加，利润增长；中性情景下，业务大致维持；不利时，需求和利润都转弱。这里用“年每股收益 × 市盈率”估计期末价格，也就是先估计每股对应的一年利润，再考虑市场愿意给这些利润多少倍的价格。

<figure class="flow-figure" id="nb-a03-scenario-chain" data-calc-chain>
<div class="ff-head"><p class="ff-title">从经营情景到持有回报</p><p class="ff-legend"><span class="ff-key-share">上行</span><span class="ff-key-cash">下行</span></p></div>
<div class="cc-control">
<label for="nb-a03-price">当前股价 <output for="nb-a03-price" data-cc-price-output>100</output> 美元</label>
<input id="nb-a03-price" type="range" min="70" max="140" step="1" value="100" disabled>
<div class="cc-presets" hidden><button type="button" data-cc-price="80">80</button><button type="button" data-cc-price="100" aria-pressed="true">100</button><button type="button" data-cc-price="130">130</button></div>
</div>
<div class="cc-table">
<div class="cc-head" aria-hidden="true"><span>两年后的经营情景</span><span>年每股收益 × 市盈率</span><span>期末股价</span><span>＋分红</span><span>＝每股所得</span><span>相对当前股价</span></div>
<div class="cc-lane" data-cc-outcome="152" data-cc-role="up"><div class="cc-name"><strong>顺利</strong><small>需求增加，利润增长</small></div><div class="cc-step cc-eps">6 <em>美元</em> × 25 <em>倍</em></div><div class="cc-step cc-price">150</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">152</div><div class="cc-return" data-cc-return><div class="cc-bar cc-up" style="width:43.3%"></div><span class="cc-value cc-up" style="left:calc(50% + 21.7% + 6px)">+52.0%</span></div></div>
<div class="cc-lane" data-cc-outcome="102"><div class="cc-name"><strong>中性</strong><small>业务大致维持</small></div><div class="cc-step cc-eps">5 <em>美元</em> × 20 <em>倍</em></div><div class="cc-step cc-price">100</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">102</div><div class="cc-return" data-cc-return><div class="cc-bar cc-up" style="width:1.7%"></div><span class="cc-value cc-up" style="left:calc(50% + 0.8% + 6px)">+2.0%</span></div></div>
<div class="cc-lane" data-cc-outcome="62" data-cc-role="down"><div class="cc-name"><strong>不利</strong><small>需求转弱，利润下降</small></div><div class="cc-step cc-eps">3 <em>美元</em> × 20 <em>倍</em></div><div class="cc-step cc-price">60</div><div class="cc-step cc-div cc-step-cash">＋2</div><div class="cc-step cc-total cc-step-total">62</div><div class="cc-return" data-cc-return><div class="cc-bar cc-down" style="width:31.7%"></div><span class="cc-value cc-down" style="right:calc(50% + 15.8% + 6px)">−38.0%</span></div></div>
</div>
<div class="cc-foot"><span>每股所得 ÷ 当前股价 − 1，即从今天起的情景回报；金额单位为美元／股。</span><span>上行∶下行 = <strong data-cc-ratio>1.37∶1</strong></span></div>
<figcaption>简化教学设定：观察两年，期间每股分红合计 2 美元并留作现金；三个情景没有指定概率。</figcaption>
</figure>

假设期间收到的分红先留作现金，那么从当前价格继续持有，情景回报就可以写为：

\[
\text{情景持有回报}
=\frac{\text{情景期末股价}+\text{期间每股分红}-\text{当前股价}}{\text{当前股价}}.
\]

顺利情景下，期末股票与分红合起来是 152 美元，相对当前的 100 美元，上行空间为 52%；不利情景下，两项所得合计 62 美元，下行空间为 38%。于是，上行空间与下行空间之比约为 1.37∶1。这个比例把两边的幅度放在了一起，接下来还要看各种情景有多大机会发生，以及我们需要等多久。

在上图中把当前价格改为 80 美元，顺利情景的回报就提高到 90%，不利情景的损失则收窄到 22.5%；改为 130 美元，上行空间只剩约 17%，下行空间却扩大到约 52%。公司在这几种比较中的经营假设完全相同，持有的吸引力却已经随价格发生了变化。因此，企业经营良好时，也可能因为价格过高而值得减仓。

反过来，经营情景本身也会改变。假如中性情景的年每股收益从 5 美元下调到 4 美元，仍按 20 倍市盈率计算，期末股价的估计就从 100 美元降到了 80 美元。即使眼前股价也跌到 80 美元，中性情景下两年的回报仍只有分红带来的 2.5%。过去已经跌掉的部分，并不会自动变成从现在开始的上行空间。

<span data-text-versions id="nb-a03-text-3">把幅度算出来以后，我们还要看看乐观结果依赖的需求增长能否兑现、不利情景由什么因素触发，以及等待期间有没有更合适的资金用途。同样的累计回报，等两年与等十年，吸引力也不同<span data-text-detail>（本例每个情景均假设两年累计每股分红 2 美元，暂不计税费、融资成本及分红再投资；没有给情景指定概率。图中的不利情景只对应所列经营结果）</span>。原来的理由仍有支持、当前价格的 Risk-Reward 也合意时，继续持有就有了依据；若这些条件已经改变，也就可以在尚未回本之前调整持仓。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 交易心理与重新定价 {#nb-a03-repricing}

不过，从今天走到情景所对应的时点，我们还会经历许多短期涨跌。有人因亏损急着止损，有人看到反弹开始追入，也有人等着价格回到成本附近再卖。急于成交的人会接受不同的报价，这些买卖又会影响后来者的预期：下跌可能使人更害怕，回升也可能让原先观望的人开始行动。交易心理便通过这些实际行为参与了价格形成。

这些交易会留下价格和成交量的记录。技术指标就是整理这些记录的工具，能帮助我们具体说出价格处在近期区间的什么位置、走势是在转强还是转弱；布林带、MACD、KDJ 与 VWAP 的读法，放在按需专题[《指标与趋势交易》](/zh/notebook/indicators-trend-trading/)中展开。但当我们正亏着钱、盼着反弹时，一次转强信号也常常正好符合自己的愿望。均线开始转向、价格回到某个区间，都可以作为观察线索；接下来还要看，行业情况、经营预期和当前价格下的 Risk-Reward 是否也有了相应的改善。几个由同一段价格算出来的指标一起转强，也可能只是反映了同一次价格变化。

日常行情中的这些变化之外，遇到足以改变经营预期的新信息时，原来的价格区间还可能很快失去参照意义。Microsoft（MSFT）在 2026 年 7 月 29 日盘后公布 FY26 Q4 财报，当季收入同比增长 18%，Azure 及其他云服务收入增长 43%；下一交易日，收盘价从约 391 美元升至 451 美元，上涨约 15.5%，成交量也增至前一天的约 2.3 倍。[^msft-results]<sup>，</sup>[^msft-prices]

<figure class="holding-figure">
<img src="/notebook/holding/msft-repricing.svg" alt="MSFT在2026年7月29日盘后发布FY26 Q4财报，次日收盘价上升到451.10美元并明显放量；图中虚线保留财报前约401.7美元的区间上沿作对照。" width="820" height="490" loading="lazy">
<figcaption>财报后的新价格与旧区间。虚线固定在财报前按近 20 个交易日收盘价画出的区间上沿，下方显示成交量；<a href="/notebook/holding/msft-repricing.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-10">这时再因为价格已经远高于财报前的交易区间，就认定它应当回落，便容易忽略新信息正在改变市场愿意支付的价格。图中虚线是财报前按近 20 个交易日收盘价及其波动画出的区间上沿，约为 401.7 美元；即使把财报次日的大涨也纳入计算，当天更新后的上沿约为 422 美元，仍然低于 451 美元的收盘价。我们需要先更新对经营前景的判断，再观察新的量价关系怎样形成<span data-text-detail>（这条上沿就是布林带上轨：取截至 7 月 29 日的 20 个交易日收盘价均值，加上 2 倍总体标准差，约为 401.68 美元，财报发布后仍固定在原位置作对照；7 月 30 日实际更新后的上轨为 422.16 美元）</span>。FY26 Q4 的财年命名与自然季度之间的关系，留到《三张财报与经营活动》展开。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>


## 资金、心态与持有能力 {#nb-a03-capacity}

即使经营前景与当前价格仍支持继续持有，我们还得有资金等到预期兑现。[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)用 VOO 在 2022 年的下跌比较过：付款日正赶上低位时，全部买入的安排要卖出份额凑钱，这部分份额也就错过了后来的回升。放到一笔正在亏损的个股上，情形也一样。沿用前面的情景算例，若股价跌到 80 美元时要筹集 2,000 美元，就得卖出 25 股；即使之后出现了顺利情景，这 25 股也分不到从 80 美元算起约 90% 的那部分回报。所以在预期兑现之前还有必须支付的款项时，我们要先把这笔钱留出来，再判断余下的持仓能等多久。

若买股时还借了钱，资金安排就又多了一层约束。自有资金为 10,000 美元时，全额用它买股，股价下跌 20% 后还剩 8,000 美元；若另借 10,000 美元，一共买入 20,000 美元股票，同样下跌 20% 后，股票市值还剩 16,000 美元，扣掉需要归还的借款本金，自有资金就只剩 6,000 美元了。股票跌了 20%，自己的资金却损失了 40%，还没有计入利息。

<figure class="flow-figure leverage-bars" id="nb-a03-leverage">
<div class="ff-head"><p class="ff-title">借款不随股价变化，自有资金承担全部跌幅</p><p class="ff-legend"><span class="lv-key-own">自有资金</span><span class="lv-key-loan">借款 10,000</span></p></div>
<div class="lv-grid">
<span class="lv-name">不借款<small>买入 10,000</small></span><span class="lv-val">自有 <strong>10,000</strong></span><div class="lv-bar business-exchange" aria-label="不借款：用 10,000 美元自有资金买入股票。"><i class="lv-own" style="--w:50.00%"></i></div>
<span class="lv-name">不借款，跌 20%</span><span class="lv-val">自有 <strong class="lv-bad">8,000</strong>，−20%</span><div class="lv-bar business-exchange" aria-label="不借款时股价下跌 20%，持仓和自有资金都剩 8,000 美元，损失 20%。"><i class="lv-own" style="--w:40.00%"></i><i class="lv-gone" style="--w:10.00%"></i></div>
<span class="lv-sep"></span>
<span class="lv-name">再借 10,000<small>买入 20,000</small></span><span class="lv-val">自有 <strong>10,000</strong></span><div class="lv-bar business-exchange" aria-label="另借 10,000 美元，一共买入 20,000 美元股票，其中自有资金 10,000 美元。"><i class="lv-own" style="--w:50.00%"></i><i class="lv-loan" style="--w:50.00%"></i></div>
<span class="lv-name">借款，跌 20%</span><span class="lv-val">自有 <strong class="lv-bad">6,000</strong>，−40%</span><div class="lv-bar business-exchange" aria-label="借款时股价下跌 20%，持仓剩 16,000 美元，扣除 10,000 美元借款，自有资金只剩 6,000 美元，损失 40%。"><i class="lv-own" style="--w:30.00%"></i><i class="lv-loan" style="--w:50.00%"></i><i class="lv-gone" style="--w:20.00%"></i></div>
<span class="lv-name">保证金临界<small>持仓约 14,286</small></span><span class="lv-val">自有 <strong class="lv-bad">约 4,286</strong>，占 30%</span><div class="lv-bar business-exchange" aria-label="若券商要求净权益至少占持仓市值的 30%，持仓市值跌到约 14,286 美元时，自有资金约 4,286 美元，恰好达到要求；再跌就需要补入资金或被处置持仓。"><i class="lv-own" style="--w:21.43%"></i><i class="lv-loan" style="--w:50.00%"></i><i class="lv-gone" style="--w:28.57%"></i></div>
</div>
<figcaption>整条长度按 20,000 美元绘制，虚线框是已经跌掉的市值。不计利息；30% 为本例采用的券商要求。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-6">保证金要求还可能使退出提前发生。沿用这笔 10,000 美元借款，若券商要求净权益至少占持仓市值的 30%，持仓市值降到约 14,286 美元时，净权益占持仓市值的比例就恰好达到要求；继续下跌，账户便会出现保证金不足，需要补入资金或处置持仓<span data-text-detail>（这里采用单一股票账户，暂不计其他担保品和利息；临界关系为“持仓市值−10,000＝30%×持仓市值”。30% 为本例采用的券商要求。FINRA 的一般股票维持保证金最低要求为 25%，券商可以设更高要求，并可能直接处置证券）</span>。等到资金要求触发处置时，原先打算再等多久，也就无法完全由自己决定了。[^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除了资金，我们还要给自己的情绪留一点余地。频繁打开行情，每一次下跌都可能重新牵动回本的愿望，一点反弹又让人忍不住调整判断。屏幕上的变化越来越多，真正影响公司经营的新信息却未必同样频繁。减少这种反复刺激，也有助于按已经想清楚的依据行动。当然，放下手机和电脑，去做点别的事散散心，也是一种非常好的提升持有能力的举动。

决定继续拿着一只股票时，比较的是从今天起的回报与可能损失，再算上等待的时间和期间的现金需要；这些条件变了，就该重新考虑减仓或退出，不必等到回本。

这里看的是单独一笔持仓。手里同时有几只股票和基金时，它们常常会一起涨跌，现金也要在几项持仓之间分配；下一篇[《投资组合：集中、分散与现金》](/zh/notebook/#topic-P)把这些持仓放在一起来看。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261012-6">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>
<link rel="stylesheet" href="/notebook/holding.css?v=20260926">
<script src="/notebook/holding.js" defer></script>

[^wsj]: [Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging](https://www.wsj.com/finance/stocks/how-to-tell-whether-a-plunging-stock-will-keep-plunging-bf0be3ed)，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。
[^prices-ko]: Yahoo Finance：[KO](https://finance.yahoo.com/quote/KO/history/)、[XLP](https://finance.yahoo.com/quote/XLP/history/)，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。KO、XLP 在该区间的价格变化分别约为 +5.3%、+4.7%。数列见[数据表](/notebook/holding/ko-recovery.csv)。
[^ipay]: [Amplify：Digital Payments ETF（IPAY）](https://amplifyetfs.com/ipay/)，跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。
[^prices-fisv]: Yahoo Finance：[FISV](https://finance.yahoo.com/quote/FISV/history/)、[IPAY](https://finance.yahoo.com/quote/IPAY/history/)，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见[数据表](/notebook/holding/fiserv-underperformance.csv)。
[^ticker]: [Nasdaq：Fiserv 上市与交易代码公告](https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2025-32)，自 2025-11-11 起使用 FISV，此前使用 FI。
[^ko-results]: [Coca-Cola：2023 年第三季度业绩公告](https://www.coca-colacompany.com/media-center/coca-cola-reports-third-quarter-2023-results)，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。
[^fiserv-q2]: [Fiserv：2025 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/798354/000079835425000161/fiq225earningsrelease.htm)，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。
[^fiserv-q3]: [Fiserv：2025 年第三季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-third-quarter-2025-results)，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。
[^fiserv-2026]: [Fiserv：2026 年第二季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-second-quarter-2026-results)，2026-08-06，季度有机收入与调整后每股收益的同比变化。
[^msft-results]: [Microsoft：FY26 Q4 业绩公告](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast)，2026-07-29，收入及 Azure 与其他云服务收入增长；[财报发布时间公告](https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/)，确认盘后发布。
[^msft-prices]: [Yahoo Finance：MSFT 历史行情](https://finance.yahoo.com/quote/MSFT/history/)。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见[数据表](/notebook/holding/msft-repricing.csv)。
[^margin]: [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts)，Margin Requirements、Firm Practices、Know Before You Trade。



## Sources
- [Fiserv：2026 年第二季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-second-quarter-2026-results): Fiserv：2026 年第二季度业绩公告，2026-08-06，季度有机收入与调整后每股收益的同比变化。
- [Fiserv：2025 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/798354/000079835425000161/fiq225earningsrelease.htm): Fiserv：2025 年第二季度业绩公告，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。
- [Fiserv：2025 年第三季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-third-quarter-2025-results): Fiserv：2025 年第三季度业绩公告，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。
- [Amplify：Digital Payments ETF（IPAY）](https://amplifyetfs.com/ipay/): Amplify：Digital Payments ETF（IPAY），跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。
- [Coca-Cola：2023 年第三季度业绩公告](https://www.coca-colacompany.com/media-center/coca-cola-reports-third-quarter-2023-results): Coca-Cola：2023 年第三季度业绩公告，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。
- [Yahoo Finance：MSFT 历史行情](https://finance.yahoo.com/quote/MSFT/history/): Yahoo Finance：MSFT 历史行情。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见数据表。
- [Microsoft：FY26 Q4 业绩公告](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast): Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。
- [财报发布时间公告](https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/): Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。
- [FISV](https://finance.yahoo.com/quote/FISV/history/): Yahoo Finance：FISV、FIS、GPN，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%。数列见数据表。
- [IPAY](https://finance.yahoo.com/quote/IPAY/history/): Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。
- [KO](https://finance.yahoo.com/quote/KO/history/): Yahoo Finance：KO、PEP、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。数列见数据表。
- [XLP](https://finance.yahoo.com/quote/XLP/history/): Yahoo Finance：KO、PEP、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。数列见数据表。
- [Nasdaq：Fiserv 上市与交易代码公告](https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2025-32): Nasdaq：Fiserv 上市与交易代码公告，自 2025-11-11 起使用 FISV，此前使用 FI。
- [Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging](https://www.wsj.com/finance/stocks/how-to-tell-whether-a-plunging-stock-will-keep-plunging-bf0be3ed): Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。
- [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts): FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。采用净权益、维持保证金、券商自行提高要求及强制处置的规则；正文价格、借款和 30% 比例为教学设定。

## Content relations
```json
[
  {
    "from": "zh-loss-volatility-holding-capacity",
    "relation": "part_of",
    "to": "topic-A",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [投资期限与现金需要](https://ou-liu-red-sugar.github.io/zh/notebook/investment-horizon-cash/)
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
