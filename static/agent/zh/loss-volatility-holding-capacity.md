# 亏损、波动与持有能力

从 KO 的修复与 FISV 的失利出发，结合行业比较、Risk–Reward、量价观察和资金安排，理解持有与退出。

Entry: zh-loss-volatility-holding-capacity | Node: NB-A03 | Language: zh | Editorial revision: 2026-09-26

## Teaching instructions
从亏损后的回本预期出发，先比较各自行业中的价格变化，再核经营与盈利预期，最后用当前价格下的Risk-Reward及资金条件讨论持有或退出。KO在2023年GLP-1担忧中的修复为成功过程，FISV在2025—2026年预期下修及相对失利为失败过程；二者分别与行业ETF XLP、IPAY比较。KO图为2023-09-29至12-29，FISV图为2025-01-02至2026-09-24，均采用拆股调整后的Close，不含分红。XLP和IPAY提供消费必需品及全球数字支付行业参照；业务覆盖比单一公司更广。FISV旧代码FI，自2025-11-11改为FISV。公司已披露数据与指引分别保留期间及GAAP/非GAAP身份。情景算例用一组简化数字：两年、当前100美元、年EPS6/5/3与倍数25/20/20，累计分红各2美元；从当前价格计算，结合发生可能性及等待时间。布林带、MACD、KDJ各配SPY 2026-07-13至08-21日线K线和指标图：布林带观察7月29日跌破下轨后收回与8月4日突破上轨后延续，MACD观察7月17日转弱、8月3日转强及8月20日再转弱，KDJ观察7月30日低位转强、8月11至14日高位延续及8月17日转弱。VWAP配SPY 8月3日日内图，五分钟收盘价持续高于累计VWAP，12:05价格756.00与累计近似VWAP753.82。四种一般情况的指标例子在先，MSFT财报重定价反例独立置于后面。日内近似值按五分钟典型价乘成交量累计，不混用全天收盘价。计算输入和结果附CSV。MSFT于2026-07-29盘后发布FY26 Q4财报，下一交易日收盘上涨约15.5%；旧上轨约401.7美元为财报前20个交易日均值加2倍总体标准差，固定原位置用于对照，不能伪装成财报后实时滚动上轨。财年与自然季度的关系留给《三张财报与经营活动》。完整展开现金安排与杠杆的影响，并采用作者提供的放下设备散心句子。首次英文名加代码，后文优先代码；必要条件只在对应位置说明一次。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
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
      "source_id": "nb-a03-source-bands-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/bollinger-bands"
      },
      "required_unit": {
        "locator": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "scope": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Fidelity：Bollinger Bands",
      "authors": [
        "Fidelity"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
    },
    {
      "source_id": "nb-a03-source-macd-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/macd"
      },
      "required_unit": {
        "locator": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "scope": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Fidelity：MACD",
      "authors": [
        "Fidelity"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
    },
    {
      "source_id": "nb-a03-source-kdj-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.moomoo.com/ca/hans/support/topic3_142"
      },
      "required_unit": {
        "locator": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "scope": "Fidelity：Bollinger Bands、MACD；Moomoo：KDJ 随机指标，指标定义与计算对象。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Moomoo：KDJ 随机指标",
      "authors": [
        "Moomoo"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
    },
    {
      "source_id": "nb-a03-complete-volume-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.schwab.com/learn/story/how-to-use-volume-weighted-indicators-trading"
      },
      "required_unit": {
        "locator": "Charles Schwab：How to Use Volume-Weighted Indicators in Trading，日内 VWAP 的成交量权重与计算时段。",
        "scope": "Charles Schwab：How to Use Volume-Weighted Indicators in Trading，日内 VWAP 的成交量权重与计算时段。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Charles Schwab：How to Use Volume-Weighted Indicators in Trading",
      "authors": [
        "Charles Schwab"
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
      "source_id": "nb-a03-complete-indicator-data-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://finance.yahoo.com/quote/SPY/history/"
      },
      "required_unit": {
        "locator": "Yahoo Finance：SPY 历史行情。采用日线 OHLCV，计算起点为 2026-01-02，图中展示 7 月 13 日至 8 月 21 日结果；计算参数见各段详细版。指数均线以首个收盘价初始化，K、D 初值为 50，从首个完整九日窗口开始更新。日线输入与指标数列保留计算结果。",
        "scope": "Yahoo Finance：SPY 历史行情。采用日线 OHLCV，计算起点为 2026-01-02，图中展示 7 月 13 日至 8 月 21 日结果；计算参数见各段详细版。指数均线以首个收盘价初始化，K、D 初值为 50，从首个完整九日窗口开始更新。日线输入与指标数列保留计算结果。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "Yahoo Finance：SPY 历史行情",
      "authors": [
        "Yahoo Finance"
      ],
      "version": "本篇核对日期：2026-09-26；采用期间见正文脚注"
    },
    {
      "source_id": "nb-a03-source-settlement-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.sec.gov/newsroom/press-releases/2024-62"
      },
      "required_unit": {
        "locator": "SEC：T+1 交收实施公告，美国多数证券交易自 2024-05-28 起由 T+2 改为 T+1。",
        "scope": "SEC：T+1 交收实施公告，美国多数证券交易自 2024-05-28 起由 T+2 改为 T+1。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "SEC：T+1 交收实施公告",
      "authors": [
        "SEC"
      ],
      "version": "本篇查阅日期：2026-09-25；历史事实日期见采用范围"
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
    },
    {
      "source_id": "nb-a03-complete-spy-1",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.ssga.com/us/en/individual/etfs/state-street-spdr-sp-500-etf-trust-spy"
      },
      "required_unit": {
        "locator": "State Street：SPDR S&P 500 ETF Trust（SPY），基金目标为跟踪 S&P 500 指数的价格与收益表现。",
        "scope": "State Street：SPDR S&P 500 ETF Trust（SPY），基金目标为跟踪 S&P 500 指数的价格与收益表现。",
        "purpose": "核对本篇采用的行情、经营信息、指标定义或资金规则。"
      },
      "title": "State Street：SPDR S&P 500 ETF Trust（SPY）",
      "authors": [
        "State Street"
      ],
      "version": "本篇核对日期：2026-09-26；采用期间见正文脚注"
    }
  ],
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
亏损以后，我们常常会想：已经跌了这么多，再等一等，也许就能回本。要是价格又稍稍回升了一些，我们就更容易觉得反弹已经开始了，于是原先准备减仓的打算也变成了“再看看”。这样一来，等回本就逐渐成了持有的理由，原先为什么买入、后来又发生了什么变化，反倒容易被放到一边。

不过，在决定要不要继续等之前，我们还得先把这笔投资的得失看清楚，再看看从现在开始，继续持有还有怎样的前景。同样经历下跌，有的股票后来修复了，有的却继续落后。要理解它们为什么会走向不同的结果，就得把目光从自己的成本移向行业和公司，看看下跌期间究竟发生了什么。

## 亏损与回本预期 {#nb-a03-loss}

先把几种常见说法放在一笔持仓里。假设一股股票买入时花了 100 美元，后来涨到 120 美元，现在跌到 80 美元：相对买入成本，它亏损了 20%；相对此前的高点，它回撤了约 33%。前一个数字记录这笔投资的得失，后一个数字描述从高处回落的幅度。价格在持有期间还会反复变化，而我们怎样理解这些变化，又会影响接下来的选择。

尚未卖出的亏损，通常叫浮亏。股票虽然还在账户里，持仓的市场价值却已经减少了；卖出以后，相应股份换成现金，这部分盈亏也就实现了。若期间还收到过分红，就要像[《股东回报：分红、回购与增发》](/zh/notebook/shareholder-returns-buybacks-issuance/)所讨论的那样，把已经收到的现金与剩余股份的价值合起来看。

把过去的得失算清以后，我们还要再往前看。市场并不会因为自己在 100 美元买入，就更有理由从 80 美元涨回去；另一位投资者即使是在 60 美元买入，接下来面对的也是同一家公司和同一段价格变化。买入价仍然用于记录盈亏，但是否值得继续持有，还得看眼前的价格与今后的所得。

## 行业参照与两种结果 {#nb-a03-industry}

我们先从 Coca-Cola（KO）的一次下跌看起。2023 年秋天，GLP-1 减肥药引发了市场对食品饮料消费减少的担忧：如果人们吃得更少、喝得更少，相关公司的增长会不会受到影响？KO 与多家食品饮料公司的股价都受到了冲击，后来又逐步修复。这个过程也是 WSJ 在讨论下跌后的持有选择时使用的例子。[^wsj]

从实际行情看，KO 在 2023 年 9 月底收于约 56 美元，10 月初一度跌到约 52 美元，到了年底又回到约 59 美元。图中用消费必需品 ETF XLP 作参照：KO 在 10 月初的下跌更急，后来逐渐修复，到年底，两者相对 9 月底都上涨了约 5%。接下来要查的，就是当时的担忧与实际经营之间有多大距离。[^prices-ko]

<figure class="holding-figure">
<img src="/notebook/holding/ko-recovery.svg" alt="2023年9月29日至12月29日，KO和消费必需品ETF XLP收盘价均以期初为100。KO在10月初下跌后逐步修复，期末KO上涨约5.3%，XLP上涨约4.7%；标记10月24日的财报发布。" width="820" height="430" loading="lazy">
<figcaption>KO 的修复过程与消费必需品板块的同期表现。两条线各自从 100 起步，比较价格变化；<a href="/notebook/holding/ko-recovery.csv">查看数据</a>。</figcaption>
</figure>

再看提供支付处理和金融技术服务的 Fiserv（FISV，案例初期代码为 FI）。起初，公司给出了较高的增长与盈利预期，可后来却大幅下调指引。2025 年 10 月 29 日公布财报后，股价当天下跌约 44%；到 2026 年 9 月 24 日，价格又比这次暴跌后的收盘价低了约 35%。第一次大跌以后，继续等待仍然经历了进一步的损失。[^prices-fisv][^ticker]

为了判断这段下跌的分量，我们再把它与支付行业 ETF IPAY 放在一起。IPAY 覆盖支付网络、支付处理及相关技术服务公司，可以提供一组支付业务的参照。从 2025 年首个交易日到 2026 年 9 月 24 日，IPAY 下跌约 18%，FISV 却下跌了约 78%。支付板块的价格也在下跌，但 FISV 落后的幅度明显更大，我们因而要回到公司披露，看看它的经营与盈利预期发生了什么变化。[^ipay][^prices-fisv]

<figure class="holding-figure">
<img src="/notebook/holding/fiserv-underperformance.svg" alt="2025年1月2日至2026年9月24日，FISV和支付行业ETF IPAY收盘价均以期初为100。期末FISV下跌约77.7%，IPAY下跌约18.1%；FISV在2025年10月指引大幅下修时暴跌，随后仍持续承压。" width="820" height="430" loading="lazy">
<figcaption>FISV 相对支付行业 ETF IPAY 的明显落后。虚线标出几次公司披露，区间末的数字为相对期初的价格变化；<a href="/notebook/holding/fiserv-underperformance.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-1">一般而言，当行业里的公司一起下跌，自己的持仓也大致同步时，我们就不必单凭亏损怀疑它出了独有的问题；若在一段时间里明显落后于行业，便应该重点检查需求、竞争位置和盈利前景是否也相对转弱了。即使公司还在增长，原先的增长预期也可能已经落空<span data-text-detail>（KO 图观察 2023 年 9 月 29 日至 12 月 29 日；FISV 图观察 2025 年 1 月 2 日至 2026 年 9 月 24 日。两图使用拆股调整后的收盘价，各自以期初为 100，不计分红。XLP 覆盖美国消费必需品板块，IPAY 覆盖全球数字支付相关公司，业务范围均比对应单一公司更广；相对股价还受起始估值及市场预期变化影响）</span>。有了这个线索，我们再沿着公司的披露，看看经营变化与股价落后是怎样联系起来的。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 基本面变化与 Risk–Reward {#nb-a03-risk-reward}

要看清这种差别，我们得先回到消息刚出现的时候。对于 KO，市场已经开始担心消费减少，那么公司当时披露的经营情况是什么样的？2023 年 10 月 24 日发布的第三季度报告显示，全球销量同比增长 2%，营业利润增长 6%；公司同时上调全年有机收入增长预期至 10%—11%。财报呈现的是截至 9 月底仍在增长的业务基础，公司对全年增长的判断也没有随着市场担忧一起转弱。[^ko-results]

这就给了持有人可以继续观察的具体依据：销量能不能保持，产品和定价是否仍有竞争力，全年盈利预期是否需要调整。面对同一轮担忧，我们既要理解它可能怎样影响业务，也要看这种影响已经发展到了哪一步。后来股价修复，让我们看见了这段持有过程的结果；当时作判断时，能够使用的则是已经披露的经营情况与对未来的估计。

再回到 FISV，我们就要带着原先的预期去看后来的变化。2025 年 7 月，公司还预计全年有机收入增长约 10%，调整后每股收益为 10.15—10.30 美元；到 10 月，这两项预期分别降至 3.5%—4% 和 8.50—8.60 美元。原先期待的增长没有按计划兑现，持有依据也就需要随之修改。[^fiserv-q2][^fiserv-q3]

问题也出现在实际经营中。FISV 的商户业务有机收入增速，从第二季度的 9% 放缓到第三季度的 5%；金融服务业务则从增长 7% 转为下降 3%。第三季度调整后每股收益同比下降 11%。到 2026 年第二季度，公司有机收入同比下降 5%，调整后每股收益下降 26%，经营压力仍然没有消失。公司还在赚钱，可当初期待的增长与盈利路径已经改变了。[^fiserv-q2][^fiserv-q3][^fiserv-2026]

<span data-text-versions id="nb-a03-text-2">这些变化最后还会影响股东能够分享的所得。这也接上了[《股票、公司与股价》](/zh/notebook/stocks-company-price/)中的认识：持有公司的股份，就要看它的业务最终能带来什么。一项业务受到冲击时，要看它在公司利润中有多大份量、压力可能持续多久，其他业务又能提供多少支撑，再把共同费用、债务和资金投入放进去，估计整体的盈利前景<span data-text-detail>（本节的有机收入增长及调整后每股收益，采用各公司披露的非 GAAP 口径；比较始终在同一家公司、同一指标内进行，所述季度同比变化与全年指引分别保留各自期间）</span>。所以，重新判断持仓时，我们既要更新对未来所得的估计，也得看看眼前的股价已经变到了哪里。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

至于价格下跌以后是否更值得持有，还得看未来所得的预期怎样变化。经营预期仍有支持、价格却降下来了，相同的潜在所得就对应更少的资金投入；若经营前景下调得更多，即使股价已经更低，这笔投资也未必更划算。为了把这两边的变化放在一起，我们就要用到 Risk–Reward，比较可能取得的回报与需要承担的损失。

我们不妨用一组简化数字，把这个比较具体展开。设当前股价为 100 美元，观察两年后的结果，期间累计每股分红按 2 美元计算。经营顺利时，需求增加，利润增长；中性情景下，业务大致维持；不利时，需求和利润都转弱。这里用“年每股收益 × 市盈率”估计期末价格，也就是先估计每股对应的一年利润，再考虑市场愿意给这些利润多少倍的价格。

| 两年后的情景 | 经营变化 | 年每股收益 × 市盈率 | 情景期末股价 | 期间分红 | 情景持有回报 |
|---|---|---:|---:|---:|---:|
| 顺利 | 需求增加，利润增长 | 6 美元 × 25 倍 | 150 美元 | 2 美元 | +52% |
| 中性 | 业务大致维持 | 5 美元 × 20 倍 | 100 美元 | 2 美元 | +2% |
| 不利 | 需求转弱，利润下降 | 3 美元 × 20 倍 | 60 美元 | 2 美元 | −38% |

假设期间收到的分红先留作现金，那么从当前价格继续持有，情景回报就可以写为：

\[
\text{情景持有回报}
=\frac{\text{情景期末股价}+\text{期间每股分红}-\text{当前股价}}{\text{当前股价}}.
\]

顺利情景下，期末股票与分红合起来是 152 美元，相对当前的 100 美元，上行空间为 52%；不利情景下，两项所得合计 62 美元，下行空间为 38%。于是，上行空间与下行空间之比约为 1.37∶1。这个比例把两边的幅度放在了一起，接下来还要看各种情景有多大机会发生，以及我们需要等多久。

<div class="holding-scenario" data-holding-scenario>
<p class="holding-scenario-title">经营情景不变，当前价格改变</p>
<label for="holding-price">当前股价：<output id="holding-price-value" for="holding-price">100</output> 美元</label>
<input id="holding-price" type="range" min="70" max="140" step="1" value="100">
<div class="holding-presets"><button type="button" data-price="80">80 美元</button><button type="button" data-price="100">100 美元</button><button type="button" data-price="130">130 美元</button></div>
<div class="holding-results" aria-live="polite"><div><span>顺利情景</span><strong data-scenario="152">+52.0%</strong></div><div><span>中性情景</span><strong data-scenario="102">+2.0%</strong></div><div><span>不利情景</span><strong data-scenario="62">−38.0%</strong></div></div>
<p data-ratio>上行空间∶下行空间 = 1.37∶1</p>
<p class="holding-annotation">两年后的每股所得保持为 152、102、62 美元，仅改变今天的价格。</p>
</div>

把当前价格改为 80 美元，顺利情景的回报就提高到 90%，不利情景的损失则收窄到 22.5%；改为 130 美元，上行空间只剩约 17%，下行空间却扩大到约 52%。公司在这几种比较中的经营假设完全相同，持有的吸引力却已经随价格发生了变化。因此，企业经营良好时，也可能因为价格过高而值得减仓。

反过来，经营情景本身也会改变。假如中性情景的年每股收益从 5 美元下调到 4 美元，仍按 20 倍市盈率计算，期末股价的估计就从 100 美元降到了 80 美元。即使眼前股价也跌到 80 美元，中性情景下两年的回报仍只有分红带来的 2.5%。过去已经跌掉的部分，并不会自动变成从现在开始的上行空间。

<span data-text-versions id="nb-a03-text-3">把幅度算出来以后，我们还要看看，乐观结果依赖的需求增长能否兑现，不利情景由什么因素触发，以及等待期间有没有更合适的资金用途。同样的累计回报，等两年与等十年，吸引力也不同<span data-text-detail>（本例每个情景均假设两年累计每股分红 2 美元，暂不计税费、融资成本及分红再投资；没有给情景指定概率。表中的不利情景只对应所列经营结果）</span>。原来的理由仍有支持、当前价格的 Risk–Reward 也合意时，继续持有就有了依据；若这些条件已经改变，也就可以在尚未回本之前调整持仓。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 交易心理与短期指标 {#nb-a03-indicators}

不过，从今天走到情景所对应的时点，我们还会经历许多短期涨跌。有人因亏损急着止损，有人看到反弹开始追入，也有人等着价格回到成本附近再卖。急于成交的人会接受不同的报价，这些买卖又会影响后来者的预期：下跌可能使人更害怕，回升也可能让原先观望的人开始行动。交易心理便通过这些实际行为参与了价格形成。

这些交易会留下价格和成交量的记录，技术指标便是整理这些记录的工具。我们用跟踪 S&P 500 的 SPY 看一段先回落、再转强的行情：前三张图都从 2026 年 7 月 13 日画到 8 月 21 日，便于比较不同指标怎样回应同一段变化；VWAP 再放到其中一天的日内走势里看。[^spy]

<span data-text-versions id="nb-a03-text-11">前三张图里的每根 K 线代表一个交易日，绿色表示收盘高于开盘，红色则相反<span data-text-detail>（实体两端是开盘价和收盘价，细线两端是当日最高价和最低价；颜色比较的是当日开盘与收盘，并非相对前一日收盘的涨跌）</span>。先沿着 K 线看价格，再顺着图中的编号，观察相应的指标变化。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<strong>布林带：区间、突破与回归。</strong>布林带以一条平均价格线为中轨，再按近期波动幅度画出上下轨。轨道间距越大，意味着用于计算的这段时间里，收盘价分散得越开。下图把 K 线和轨道叠在一起，我们可以同时看到价格偏离均值的程度，以及价格是否重新回到了区间内。[^indicators]

<figure class="holding-figure">
<a href="/notebook/holding/spy-bollinger.svg" target="_blank" rel="noopener" aria-label="打开布林带大图"><img src="/notebook/holding/spy-bollinger.svg" alt="SPY在2026年7月13日至8月21日的K线与布林带。标记1为7月29日跌破下轨，次日回到区间内；标记2为8月4日突破上轨，随后数日仍维持较高价格。" width="1000" height="560" loading="lazy"></a>
<figcaption>① 跌破下轨后收回；② 突破上轨后维持高位。<a href="/notebook/holding/spy-bollinger.svg" target="_blank" rel="noopener">查看大图</a> · <a href="/notebook/holding/spy-daily-indicators.csv">数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-4">图中①处，7 月 29 日 SPY 收于约 729 美元，已经低于约 733 美元的下轨；第二天回到约 742 美元，又收进了带内。到了②处，8 月 4 日的收盘价约为 771 美元，高于约 765 美元的上轨，随后几个交易日却仍保持在较高位置。我们因而要把“触及轨道”与接下来的走势连起来看：价格是重新回到原区间，还是在突破后继续保持强势？只凭碰到上轨或下轨，就很难区分这两种过程<span data-text-detail>（采用 20 日收盘价简单平均值，上下各加减 2 倍总体标准差。7 月 29 日收盘价/下轨为 729.46/733.32 美元，7 月 30 日收盘 741.69 美元；8 月 4 日收盘价/上轨为 771.33/764.60 美元）</span>。[^indicator-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<strong>MACD：趋势动量的转弱与转强。</strong>MACD 用快慢两条移动均线的差值 DIF 观察动量，再用一条更平滑的 DEA 线作比较。蓝色 DIF 线上穿橙色 DEA 线，通常称为金叉；向下穿过则称为死叉。下图的柱体表示两条线的差，柱体由负转正，也就对应着 DIF 从 DEA 下方来到上方。[^indicators]

<figure class="holding-figure">
<a href="/notebook/holding/spy-macd.svg" target="_blank" rel="noopener" aria-label="打开 MACD 大图"><img src="/notebook/holding/spy-macd.svg" alt="SPY价格与MACD副图共用日期轴。标记1为7月17日DIF下穿DEA，标记2为8月3日DIF上穿DEA，标记3为8月20日再次下穿；上图对应先下跌、再回升及后续回落。" width="1000" height="700" loading="lazy"></a>
<figcaption>沿竖虚线对照价格与指标：① 7/17 转弱；② 8/03 转强；③ 8/20 再次转弱。<a href="/notebook/holding/spy-macd.svg" target="_blank" rel="noopener">查看大图</a> · <a href="/notebook/holding/spy-daily-indicators.csv">数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-7">这段行情里，7 月 17 日先出现了①处的死叉，接下来价格继续回落；7 月底开始反弹以后，DIF 也逐渐回升，到 8 月 3 日形成②处的金叉。随后上行动量增强，正柱体扩大，等到 8 月中旬价格转弱，柱体又逐渐缩短，最终在③处转为负值。这样一来，我们就把“感觉涨得没那么有力了”，转成了可以持续观察的均线差与动量变化。图中也能看见，价格先发生变化，指标才逐步跟上<span data-text-detail>（采用 MACD（12，26，9）：DIF＝12 日指数移动平均−26 日指数移动平均，DEA 为 DIF 的 9 日指数平均，柱体＝2×（DIF−DEA）。三个标记日的 DIF/DEA 分别约为 2.76/2.90、0.47/0.05、6.23/6.79）</span>。[^indicator-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<strong>KDJ：近期区间中的强弱变化。</strong>KDJ 先看收盘价处在最近一段高低区间的什么位置，再把它平滑成 K、D 两条线，J 线则进一步放大两者的差异。一般会用 20 和 80 作为低位与高位的观察参照，再结合 K、D 的交叉，看看强弱是否正在变化。[^indicators]

<figure class="holding-figure">
<a href="/notebook/holding/spy-kdj.svg" target="_blank" rel="noopener" aria-label="打开 KDJ 大图"><img src="/notebook/holding/spy-kdj.svg" alt="SPY价格与KDJ副图。标记1为7月30日K从低位回升并上穿D；标记2为8月中旬K和D均高于80且价格仍维持高位；标记3为8月17日K下穿D，随后价格回落。" width="1000" height="700" loading="lazy"></a>
<figcaption>① 低位回升；② 高位延续；③ K 下穿 D。<a href="/notebook/holding/spy-kdj.svg" target="_blank" rel="noopener">查看大图</a> · <a href="/notebook/holding/spy-daily-indicators.csv">数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-8">7 月 29 日下跌后，K 已经降到约 19；第二天价格回升，K 也上穿 D，形成①处的低位转强信号。再往右看，8 月 11—14 日 K、D 都高于 80，价格却仍然保持在较高位置，这就是高位指标可以随着强势走势持续一阵的例子。等到③处 K 向下穿过 D，后续回落才更明显地展开。对于这段行情，KDJ 在 8 月 17 日就表现出高位转弱，MACD 则到 8 月 20 日才出现死叉，两种指标的反应速度也就有了具体的对照<span data-text-detail>（采用 KDJ（9，3，3）：RSV＝100×（收盘价−近 9 日最低价）÷（近 9 日最高价−近 9 日最低价）；K＝前一日 K×2/3＋当日 RSV/3，D＝前一日 D×2/3＋当日 K/3，J＝3K−2D。7 月 29、30 日 K/D 分别约为 18.78/28.83、32.58/30.08；8 月 17 日为 73.14/81.81。J 可以超出 0—100 的范围）</span>。[^indicator-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<strong>VWAP：日内价格相对成交均价的位置。</strong>前面几个指标主要整理价格，VWAP 则把成交量也纳入计算。它用当天截至当前的成交金额除以成交量，得到成交量加权平均价：某个价格上的成交越多，它在均价中的权重也就越大。我们再放大到 8 月 3 日这一天，看看反弹过程中的日内交易。[^volume]

<figure class="holding-figure">
<a href="/notebook/holding/spy-vwap.svg" target="_blank" rel="noopener" aria-label="打开 VWAP 大图"><img src="/notebook/holding/spy-vwap.svg" alt="SPY在2026年8月3日的五分钟收盘价、累计VWAP与成交量。价格整体上行，各根五分钟收盘价保持在VWAP上方；标记1为纽约时间12点05分，价格756.00美元，VWAP约753.82美元。" width="1000" height="700" loading="lazy"></a>
<figcaption>绿色价格线在橙色 VWAP 上方延续，午间回落仍未收破均价。下方同时保留成交量。<a href="/notebook/holding/spy-vwap.svg" target="_blank" rel="noopener">查看大图</a> · <a href="/notebook/holding/spy-vwap-20260803.csv">数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-9">图中价格虽有小幅回落，各根五分钟收盘价却一直高于 VWAP。到①处，也就是纽约时间 12:05，价格约为 756 美元，仍高于约 754 美元的日内成交均价。因此，这些小回落还没有打断价格保持在均价上方的状态，盘中的强势仍在延续。交易者可以继续观察，后续回落是否跌破 VWAP、跌破后能否重新站上，以及这些变化伴随着多少成交<span data-text-detail>（12:00—12:05 这根五分钟 K 线的收盘价为 756.00 美元，累计 VWAP 近似值为 753.82 美元。VWAP 用常规交易时段内各根五分钟 K 线的“最高价、最低价与收盘价的平均值”乘成交量，再累计加权；它与逐笔成交计算值会有差异。图上标记 K 线结束时刻，日内累计 VWAP 每个交易日重新起算）</span>。[^vwap-data]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这些图让我们能够具体地说出价格处在什么位置、走势怎样变化。但当我们正亏着钱、盼着反弹时，一次转强信号也常常正好符合自己的愿望。均线开始转向、价格重新站上 VWAP，都可以成为观察线索；接下来还要看，行业情况、经营预期和当前价格下的 Risk–Reward 是否也有了相应的改善。几个由同一段价格计算出来的指标一起转强，也可能只是反映了同一次价格变化。

<strong>重大信息与重新定价。</strong>前面观察的是日常行情中的变化，遇到足以改变经营预期的新信息时，原来的价格区间却可能很快失去参照意义。Microsoft（MSFT）在 2026 年 7 月 29 日盘后公布 FY26 Q4 财报，当季收入同比增长 18%，Azure 及其他云服务收入增长 43%；下一交易日，收盘价从约 391 美元升至 451 美元，上涨约 15.5%，成交量也增至前一天的约 2.3 倍。[^msft-results][^msft-prices]

<figure class="holding-figure">
<img src="/notebook/holding/msft-repricing.svg" alt="MSFT在2026年7月29日盘后发布FY26 Q4财报，次日收盘价上升到451.10美元并明显放量；图中虚线保留财报前约401.7美元的上轨作对照。" width="820" height="490" loading="lazy">
<figcaption>财报后的新价格与旧区间。虚线固定在财报前的上轨位置作对照，下方显示成交量；<a href="/notebook/holding/msft-repricing.csv">查看数据</a>。</figcaption>
</figure>

<span data-text-versions id="nb-a03-text-10">这时再因为“已经碰到旧上轨”就认定价格应当回落，便容易忽略新信息正在改变市场愿意支付的价格。即使将财报次日的大涨纳入计算，当天约 422 美元的上轨仍然低于 451 美元的收盘价。我们需要先更新对经营前景的判断，再观察新的量价关系怎样形成<span data-text-detail>（图中旧上轨约为 401.68 美元，采用截至 7 月 29 日的 20 个交易日收盘价均值，加上 2 倍总体标准差；财报发布后仍固定在原位置作对照。7 月 30 日实际更新后的上轨为 422.16 美元）</span>。FY26 Q4 的财年命名与自然季度之间的关系，留到《三张财报与经营活动》展开。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

《指标与趋势交易》会继续展开怎样用这些量价观察形成趋势判断和进出场规则；《量化交易》则进一步讨论，怎样把规则写清楚，用历史数据检验，并计入实际交易的成本。


## 资金、心态与持有能力 {#nb-a03-capacity}

判断值得继续持有以后，还得看看自己有没有资金把这段时间接续下去。[《投资期限与现金需要》](/zh/notebook/investment-horizon-cash/)讨论了投资回款与期间付款的衔接；放到一笔正在亏损的持仓中，我们也要先看，预期兑现之前还有没有必须支付的款项。

假设有 12,000 美元可以安排，股票买入价为 100 美元，几个月后还有一笔已经约定的 2,000 美元支出。我们可以先留出付款现金，也可以把钱全部买成股票，等需要时再卖出一部分。到了付款前，若股价恰好跌到 80 美元，两种安排就会出现下面的区别：

| 资金安排 | 买入时 | 付款办法 | 付款后仍持有 |
|---|---|---|---|
| 先留出现金 | 100 股＋2,000 美元现金 | 使用预留现金 | 100 股，市值 8,000 美元 |
| 全部买成股票 | 120 股，无现金 | 卖出 25 股取得 2,000 美元 | 95 股，市值 7,600 美元 |

付款到期以后，第二种安排就需要取得现金。若不另行借款或补入资金，便要出售部分股份。即使后来出现了原先预计的结果，自己还能持有多少股份，也已经受到途中资金安排的影响了。预留现金会减少最初参与股票涨跌的金额，但也给期间用钱和后续调整留下了余地。

<span data-text-versions id="nb-a03-text-5">一旦需要卖股筹钱，我们还要接着看，能以什么价格成交，以及卖出以后还要等多久才能用到钱。账户缺现金时，可以考虑出售资产；若市场上合适的买盘也不足，急于成交又可能需要接受更低的价格。成交以后，证券与款项的交收、银行转账还各有处理时间<span data-text-detail>（上表假设可以按 80 美元成交，暂不计税费。美国多数证券交易采用 T+1 标准交收，资金转出还需按账户及银行的安排衔接）</span>。因此安排付款时，还得把这段取得现金的时间留出来。[^settlement]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

若买股时还借了钱，资金安排就又多了一层约束。自有资金为 10,000 美元时，全额用它买股，股价下跌 20% 后还剩 8,000 美元；若另借 10,000 美元，一共买入 20,000 美元股票，同样下跌 20% 后，股票市值还剩 16,000 美元，扣掉需要归还的借款本金，自有资金就只剩 6,000 美元了。股票跌了 20%，自己的资金却损失了 40%，还没有计入利息。

<span data-text-versions id="nb-a03-text-6">保证金要求还可能使退出提前发生。沿用这笔 10,000 美元借款，若券商要求净权益至少占持仓市值的 30%，持仓市值降到约 14,286 美元时，净权益就只够这个比例；继续下跌，账户便会出现保证金不足，需要补入资金或处置持仓<span data-text-detail>（这里采用单一股票账户，暂不计其他担保品和利息；临界关系为“持仓市值−10,000＝30%×持仓市值”。30% 为本例采用的券商要求。FINRA 的一般股票维持保证金最低要求为 25%，券商可以设更高要求，并可能直接处置证券）</span>。等到资金要求触发处置时，原先打算再等多久，也就无法完全由自己决定了。[^margin]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

除了资金，我们还要给自己的情绪留一点余地。频繁打开行情，每一次下跌都可能重新牵动回本的愿望，一点反弹又让人忍不住调整判断。屏幕上的变化越来越多，真正影响公司经营的新信息却未必同样频繁。减少这种反复刺激，也有助于按已经想清楚的依据行动。当然，放下手机和电脑，去做点别的事散散心，也是一种非常好的提升持有能力的举动。

有了资金和心态上的余地，我们也就更容易按自己的判断持有或调整。KO 的修复与 FISV 的失利提醒我们，等待本身会通向不同的结果，还要看等待期间的依据怎样变化。所以，决定继续拿着一只股票时，我们既要看未来回报是否值得承担风险，也要看自己能否承受这段持有过程；当这些条件变了，减仓和退出也就应该重新进入考虑。

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
[^indicators]: [Fidelity：Bollinger Bands](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/bollinger-bands)、[MACD](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/macd)；[Moomoo：KDJ 随机指标](https://www.moomoo.com/ca/hans/support/topic3_142)，指标定义与计算对象。
[^volume]: [Charles Schwab：How to Use Volume-Weighted Indicators in Trading](https://www.schwab.com/learn/story/how-to-use-volume-weighted-indicators-trading)，日内 VWAP 的成交量权重与计算时段。
[^msft-results]: [Microsoft：FY26 Q4 业绩公告](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast)，2026-07-29，收入及 Azure 与其他云服务收入增长；[财报发布时间公告](https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/)，确认盘后发布。
[^msft-prices]: [Yahoo Finance：MSFT 历史行情](https://finance.yahoo.com/quote/MSFT/history/)。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见[数据表](/notebook/holding/msft-repricing.csv)。
[^indicator-data]: [Yahoo Finance：SPY 历史行情](https://finance.yahoo.com/quote/SPY/history/)。采用日线 OHLCV，计算起点为 2026-01-02，图中展示 7 月 13 日至 8 月 21 日结果；计算参数见各段详细版。指数均线以首个收盘价初始化，K、D 初值为 50，从首个完整九日窗口开始更新。[日线输入与指标数列](/notebook/holding/spy-daily-indicators.csv)保留计算结果。
[^vwap-data]: 采用 Yahoo Finance 的 SPY 2026-08-03 常规交易时段五分钟 OHLCV，共 78 根 K 线；[日内输入与 VWAP 近似值](/notebook/holding/spy-vwap-20260803.csv)中的时间为纽约时间，各行标记五分钟区间的开始时刻，图示横轴标记结束时刻。
[^settlement]: [SEC：T+1 交收实施公告](https://www.sec.gov/newsroom/press-releases/2024-62)，美国多数证券交易自 2024-05-28 起由 T+2 改为 T+1。
[^margin]: [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts)，Margin Requirements、Firm Practices、Know Before You Trade。

[^spy]: [State Street：SPDR S&P 500 ETF Trust（SPY）](https://www.ssga.com/us/en/individual/etfs/state-street-spdr-sp-500-etf-trust-spy)，基金目标为跟踪 S&P 500 指数的价格与收益表现。


## Sources
- [Fiserv：2026 年第二季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-second-quarter-2026-results): Fiserv：2026 年第二季度业绩公告，2026-08-06，季度有机收入与调整后每股收益的同比变化。
- [Fiserv：2025 年第二季度业绩公告](https://www.sec.gov/Archives/edgar/data/798354/000079835425000161/fiq225earningsrelease.htm): Fiserv：2025 年第二季度业绩公告，2025-07-23，2025 年全年指引及两个业务部门的有机收入增长。
- [Fiserv：2025 年第三季度业绩公告](https://investors.fiserv.com/news-releases/news-release-details/fiserv-reports-third-quarter-2025-results): Fiserv：2025 年第三季度业绩公告，2025-10-29，全年指引重设、季度有机收入与调整后每股收益。
- [Yahoo Finance：SPY 历史行情](https://finance.yahoo.com/quote/SPY/history/): Yahoo Finance：SPY 历史行情。采用日线 OHLCV，计算起点为 2026-01-02，图中展示 7 月 13 日至 8 月 21 日结果；计算参数见各段详细版。指数均线以首个收盘价初始化，K、D 初值为 50，从首个完整九日窗口开始更新。日线输入与指标数列保留计算结果。
- [Amplify：Digital Payments ETF（IPAY）](https://amplifyetfs.com/ipay/): Amplify：Digital Payments ETF（IPAY），跟踪 Nasdaq CTA Global Digital Payments Index，覆盖支付网络、基础设施与软件、处理商及解决方案公司。
- [Coca-Cola：2023 年第三季度业绩公告](https://www.coca-colacompany.com/media-center/coca-cola-reports-third-quarter-2023-results): Coca-Cola：2023 年第三季度业绩公告，2023-10-24，季度截至 2023-09-29。采用全球销量、营业利润及全年有机收入增长指引；销量为公司披露的 unit case volume。
- [Yahoo Finance：MSFT 历史行情](https://finance.yahoo.com/quote/MSFT/history/): Yahoo Finance：MSFT 历史行情。2026-07-29 收盘 390.54 美元，7 月 30 日收盘 451.10 美元，变化约 15.5%；两个交易日成交量分别为 47,209,000 股、110,160,700 股。图与旧上轨的计算输入见数据表。
- [Microsoft：FY26 Q4 业绩公告](https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast): Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。
- [财报发布时间公告](https://news.microsoft.com/source/2026/07/08/microsoft-announces-quarterly-earnings-release-date-68/): Microsoft：FY26 Q4 业绩公告，2026-07-29，收入及 Azure 与其他云服务收入增长；财报发布时间公告，确认盘后发布。
- [FISV](https://finance.yahoo.com/quote/FISV/history/): Yahoo Finance：FISV、FIS、GPN，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%。数列见数据表。
- [IPAY](https://finance.yahoo.com/quote/IPAY/history/): Yahoo Finance：FISV、IPAY，观察期为 2025-01-02 至 2026-09-24，按共同有报价的交易日比较。FISV 在 2025-10-28、10-29 与 2026-09-24 的收盘价分别为 126.17、70.60 与 45.98 美元，对应单日约 −44.0% 及其后约 −34.9%；完整观察期内 FISV、IPAY 的价格变化分别约为 −77.7%、−18.1%。数列见数据表。
- [KO](https://finance.yahoo.com/quote/KO/history/): Yahoo Finance：KO、PEP、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。数列见数据表。
- [XLP](https://finance.yahoo.com/quote/XLP/history/): Yahoo Finance：KO、PEP、XLP，2023-09-29 至 2023-12-29 日收盘价。KO 三个文中时点分别为 55.98、52.38、58.93 美元，其中 52.38 为 10 月 5 日收盘价。数列见数据表。
- [State Street：SPDR S&P 500 ETF Trust（SPY）](https://www.ssga.com/us/en/individual/etfs/state-street-spdr-sp-500-etf-trust-spy): State Street：SPDR S&P 500 ETF Trust（SPY），基金目标为跟踪 S&P 500 指数的价格与收益表现。
- [Nasdaq：Fiserv 上市与交易代码公告](https://www.nasdaqtrader.com/TraderNews.aspx?id=DTN2025-32): Nasdaq：Fiserv 上市与交易代码公告，自 2025-11-11 起使用 FISV，此前使用 FI。
- [Charles Schwab：How to Use Volume-Weighted Indicators in Trading](https://www.schwab.com/learn/story/how-to-use-volume-weighted-indicators-trading): Charles Schwab：How to Use Volume-Weighted Indicators in Trading，日内 VWAP 的成交量权重与计算时段。
- [Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging](https://www.wsj.com/finance/stocks/how-to-tell-whether-a-plunging-stock-will-keep-plunging-bf0be3ed): Spencer Jakab：How to Tell Whether a Plunging Stock Will Keep Plunging，WSJ，2026-09-18，Missing the bounce 部分。采用 GLP-1 担忧下食品饮料股的修复案例及相对行业比较的思路。
- [Fidelity：Bollinger Bands](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/bollinger-bands): Fidelity：Bollinger Bands，Description、How this indicator works、Calculation。本文采用 20 个交易日均值及上下 2 倍标准差，不将指标当成情绪的直接测量或反弹保证。
- [Moomoo：KDJ 随机指标](https://www.moomoo.com/ca/hans/support/topic3_142): Moomoo：KDJ 随机指标，简介与计算公式，采用近期高低价、收盘位置、K／D 平滑及 J 的关系。
- [Fidelity：MACD](https://www.fidelity.com/learning-center/trading-investing/technical-analysis/technical-indicator-guide/macd): Fidelity：MACD，Description、Calculation，采用趋势、动量与 12／26／9 常见参数的说明。
- [FINRA：Brokerage Accounts](https://www.finra.org/investors/investing/investment-accounts/brokerage-accounts): FINRA：Brokerage Accounts，Margin Requirements、Firm Practices、Know Before You Trade。采用净权益、维持保证金、券商自行提高要求及强制处置的规则；正文价格、借款和 30% 比例为教学设定。
- [SEC：T+1 交收实施公告](https://www.sec.gov/newsroom/press-releases/2024-62): SEC：T+1 交收实施公告，2024-05-21，说明美国多数证券交易自 2024-05-28 由 T+2 转为 T+1。

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
