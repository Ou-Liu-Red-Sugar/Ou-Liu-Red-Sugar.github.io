# 收入增长与市场预期

拆开销量、净价、客户和产品组合，用真实业绩与预测市场辨认增长预期，再从股价反推所需收入，交给经营证据检验。

Entry: zh-revenue-growth-expectations | Node: NB-D02 | Language: zh | Editorial revision: 2026-11-26

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
以学习者当前问题为主，按需读取所选行业。共同主线是解释实际收入增长、辨认事件门槛与事前价格、在明确条件下从股票价格反推收入。MRVL历史价格记录与后来结果分开；年度展望不可直接替代季度。KO互动使用2025可比收入/归属利润，2026全年、利润率、股数与26倍参照为本篇条件；26倍数值有研报出处，但不是唯一市场预期。Agent应解释客户需求、供应交付、价格与组合怎样支持或挑战增长要求。公式由程序计算，经营判断仍须依据材料。静态输入与结果在正文，互动配置与源码按需读取；不要求学习者先看完所有资料。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [
    {
      "source_id": "nb-d02-ko-q2-2025",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf"
      },
      "required_unit": {
        "locator": "PDF p1 标题与 Quarterly Performance / Revenues；PDF p3 Revenues and Volume，Consolidated 行及 rounding 注；PDF p8 Notes，unit case、unit case volume、concentrate sales、price/mix；PDF p15 Definitions；p25 Net Operating Revenues 调节表；PDF p3 Asia Pacific 行；p5 Asia Pacific 第二段",
        "scope": "全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "The Coca-Cola Company — Second Quarter 2025 Earnings Release",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2025-07-22"
    },
    {
      "source_id": "nb-d02-pm-contracts",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above"
      },
      "required_unit": {
        "locator": "event id 483195; markets id 2256679–2256683; description/outcomes/clobTokenIds/closedTime",
        "scope": "读取五个子合约完整description、题目、token映射、结束及关闭字段、当前解析状态；完整JSON保留。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets",
      "authors": [
        "Polymarket"
      ],
      "version": "Retrieved 2026-09-27; markets created/opened May 2026"
    },
    {
      "source_id": "nb-d02-pm-history-1850",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60"
      },
      "required_unit": {
        "locator": "history[] entries with t/p; selected t=1779811204",
        "scope": "读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.85B?",
      "authors": [
        "Polymarket"
      ],
      "version": "2026-05-14 to 2026-05-28, hourly request"
    },
    {
      "source_id": "nb-d02-pm-history-1900",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://clob.polymarket.com/prices-history?market=17371423556770029879189222365137773013648929593752442002979764677862763408752&startTs=1778716800&endTs=1779926400&fidelity=60"
      },
      "required_unit": {
        "locator": "history[] entries with t/p; selected t=1779811204",
        "scope": "读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.9B?",
      "authors": [
        "Polymarket"
      ],
      "version": "2026-05-14 to 2026-05-28, hourly request"
    },
    {
      "source_id": "nb-d02-mrvl-q1fy2027",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm"
      },
      "required_unit": {
        "locator": "Quarterly Revenue Trend (Unaudited), Revenue by End Market table (HTML table index 9, zero-based); opening acquisition paragraph",
        "scope": "读取收入终端市场定义表、当前/前季/去年同季收入表、收购纳入范围及发布日期；未重建全套利润和现金流。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2026-05-27; quarter ended 2026-05-02"
    },
    {
      "source_id": "nb-d02-mrvl-base",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm"
      },
      "required_unit": {
        "locator": "Quarterly Revenue Trend table (HTML table index 8, zero-based)",
        "scope": "读取当年已披露Data center 1,440.6百万美元及季度期间；与最新表所列同季数一致。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2025-05-29; quarter ended 2025-05-03"
    },
    {
      "source_id": "nb-d02-mrvl-guidance-deck",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf"
      },
      "required_unit": {
        "locator": "PDF pp6,13,15–16 (one-based)",
        "scope": "实际读p6全年数据中心约40%增长预期、p13产品/需求背景、p15收入类别变更脚注及p16全公司Q1指引；完整45页原件保存但不称通读。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "Marvell FY26 and Q4 FY26 Financial and Business Results",
      "authors": [
        "Marvell Technology"
      ],
      "version": "2026-03-05"
    },
    {
      "source_id": "nb-d02-ko-fy2025-base",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf"
      },
      "required_unit": {
        "locator": "PDF p10 Consolidated Statements of Income，Year Ended December 31, 2025；PDF p16 Comparable EPS 定义；PDF p22 Reconciliation，Comparable (Non-GAAP) Net operating revenues；PDF p23 Reconciliation，Comparable (Non-GAAP) Net income及Diluted net income per share；脚注3明确net income为归属公司股东净利",
        "scope": "GAAP净营收为47,941m；另列的可比净营收为48,062m，不能不加标签地交换。；可比归属股东净利润12,958m和可比稀释EPS显示值3.00均来自公司非GAAP调节表；GAAP对应归属股东净利13,107m、稀释EPS3.04。；4,313m为2025全年稀释加权平均股数，不是2025年末股数。；本篇同口径净利率proxy采用12,958/48,062；EPS用12,958/4,313核对，公司显示3.00是取整数。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release",
      "authors": [
        "The Coca-Cola Company"
      ],
      "version": "2026-02-10"
    },
    {
      "source_id": "nb-d02-dbs-ko-multiple",
      "access": {
        "kind": "selected_chapters",
        "uri": "https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf"
      },
      "required_unit": {
        "locator": "PDF p1右上 4 May 2026；PDF p1 Key Financial Data / Share Price (USD) 78.76；表下 Closing Price as of 30 Apr 2026；PDF p1 Investment Overview，Maintain BUY段：TP86 pegged to a higher 26x fwd PE；PDF p1 12-mth Target Price (USD) 86.0",
        "scope": "当前URL取得的本地PDF实际为2026-05-04版，报告列示2026-04-30收盘价78.76。；26倍是分析师为其目标价选择的forward PE；本篇可把这个已公开数值作为有出处、可调整的条件输入。",
        "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
      },
      "title": "DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke",
      "authors": [
        "DBS"
      ],
      "version": "2026-05-04"
    }
  ],
  "required_readings_by_branch": {
    "consumer": [
      {
        "source_id": "nb-d02-ko-q2-2025",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf"
        },
        "required_unit": {
          "locator": "PDF p1 标题与 Quarterly Performance / Revenues；PDF p3 Revenues and Volume，Consolidated 行及 rounding 注；PDF p8 Notes，unit case、unit case volume、concentrate sales、price/mix；PDF p15 Definitions；p25 Net Operating Revenues 调节表；PDF p3 Asia Pacific 行；p5 Asia Pacific 第二段",
          "scope": "全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "The Coca-Cola Company — Second Quarter 2025 Earnings Release",
        "authors": [
          "The Coca-Cola Company"
        ],
        "version": "2025-07-22"
      },
      {
        "source_id": "nb-d01-wmt",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm"
        },
        "required_unit": {
          "locator": "Walmart U.S. Results of Operations；本轮实际阅读974–980行",
          "scope": "FY2025 WMT US comparable sales +4.8%，公司归因为交易次数及销量增加；FY2024 +5.5%来自交易次数与客单价。可用来区分同店业务变化与新店扩张，不能据此推算未给出的新店精确贡献。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Walmart FY2025 Form 10-K — Business; Membership and Other Income",
        "authors": [
          "Walmart"
        ],
        "version": "财年截至 2025-01-31；申报 2025-03-14"
      }
    ],
    "software": [
      {
        "source_id": "nb-d02-snow-q2fy2026",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf"
        },
        "required_unit": {
          "locator": "PDF p16 Note 3 Revenue；p53 Revenue comparison 三个月列；PDF p45 Net Revenue Retention Rate 全段；PDF p53 Product revenue increased 段：125% as of July 31, 2025；PDF p17 Note 3 / Remaining Performance Obligations；p47 Remaining Performance Obligations及Components of Results / Revenue",
          "scope": "Q2 FY2026产品收入为1,090.496m，可显示1,090.5m，同比报告为32%；NRR为125%。；125%表示所定义同一cohort在第二个12个月窗口的产品收入相对第一个窗口增长25%，包含该组扩张、收缩和不再使用的净结果。；32%与25%不能直接相减取得新客户贡献：观察期间、客户总体及比较分母不相同。即使期间统一，也要知道该cohort在总基期收入中的权重。；RPO既含递延收入也含未开票合同额；它不能完整反映未来usage增长及其发生时间，超出已承诺capacity的消费与新增采购未必已经进入现有RPO。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025",
        "authors": [
          "Snowflake Inc."
        ],
        "version": "本篇核读：2026-09-27"
      }
    ],
    "platform": [
      {
        "source_id": "nb-b01-source-alphabet",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
        },
        "required_unit": {
          "locator": "Item 7，广告指标定义与增长表；本轮实际阅读 HTML 907–918、1108–1118 行",
          "scope": "Search & other 的 paid clicks 2025同比+6%、CPC+7%；不是全部Alphabet广告的统一量价。Network采用展示量与每次展示费用。CPC受设备/地域/产品组合和外汇等影响，不等于所有广告统一涨价。两个增速不能直接当精确加总。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Alphabet 2025 Form 10-K",
        "authors": [
          "Alphabet"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      }
    ],
    "semiconductor": [
      {
        "source_id": "nb-d02-mrvl-q1fy2027-10q",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000019/mrvl-20260502.htm"
        },
        "required_unit": {
          "locator": "Net revenue by end market table (HTML table index 12, zero-based); Note 13 Segment Information; MD&A overview",
          "scope": "读取终端市场收入表、唯一报告分部说明、数据中心产品需求解释及并购纳入；与前日8-K按同一数字对照。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Marvell quarter ended May 2 2026 Form 10-Q",
        "authors": [
          "Marvell Technology"
        ],
        "version": "2026-05-28; quarter ended 2026-05-02"
      }
    ],
    "industrial": [
      {
        "source_id": "nb-d01-otis",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm"
        },
        "required_unit": {
          "locator": "Item 1 Service；本轮阅读205–222行",
          "scope": "维保组合约250万台，涵盖本公司和其他厂家设备；增长来源为新梯交付后转入维保、取得其他已有设备维保合同、收购。维修/现代化项目另看，不能装机总量乘统一年费。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Otis Worldwide 2025 Form 10-K — New Equipment and Service",
        "authors": [
          "Otis Worldwide"
        ],
        "version": "年度截至 2025-12-31"
      }
    ],
    "healthcare": [
      {
        "source_id": "nb-d01-hca",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf"
        },
        "required_unit": {
          "locator": "PDF第68、71页（网络文本P67等），收入与Equivalent admissions解释",
          "scope": "2025收入75.600b、2024为70.603b，同比增长7.1%；equivalent admissions +2.9%，每equivalent admission收入+4.0%。该量按总收入比例把门诊折合进住院当量，不是去重患者人数。使用数字时解释这一层，不能直接称患者+2.9%。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues",
        "authors": [
          "HCA Healthcare"
        ],
        "version": "2025 年度；URL 目录含 2024，报告正文为 2025"
      }
    ],
    "finance": [
      {
        "source_id": "nb-d01-jpm",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf"
        },
        "required_unit": {
          "locator": "PDF79、83、92、351页；NII及定义段",
          "scope": "净收入含净利息收入与非利息收入。NII受到平均生息资产、资产收益与资金利息成本共同影响；信用卡循环余额、存款、证券活动及利率变化参与解释。季度不能将余额与年化收益率直接相乘漏掉时间。这里只用机制，不复制整表。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "JPMorgan Chase 2025 Annual Report — Consumer & Community Banking",
        "authors": [
          "JPMorgan Chase"
        ],
        "version": "2025 年度"
      },
      {
        "source_id": "nb-d01-visa",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm"
        },
        "required_unit": {
          "locator": "Service/data processing revenue与operating metrics；已读1152–54、1189、1211、1240–68行",
          "scope": "付款金额主要驱动service revenue，处理交易笔数主要驱动data processing revenue；季度service revenue主要按上季名义支付金额计费。跨境/定价/客户激励亦影响净收入。只对此收费类别讲前季→本季，不能推广全部V收入。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Visa FY2025 Form 10-K — Network Model and Transaction Processing",
        "authors": [
          "Visa"
        ],
        "version": "财年截至 2025-09-30"
      },
      {
        "source_id": "nb-d02-chubb-premiums",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf"
        },
        "required_unit": {
          "locator": "PDF pp157–158，印刷页 F-10–F-11，Note 1 Summary of significant accounting policies / b) Premiums；PDF p97，10-K印刷页49，Financial Highlights for the Year Ended December 31, 2025，P&C net premiums written 段",
          "scope": "保费定义跨页完整读取，经营增长说明读取对应段落；其他命中页只作定位上下文，不作为新增研究内容。未称304页全文已审读。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Chubb Limited Annual Report 2025 — Premiums; Financial Highlights",
        "authors": [
          "Chubb Limited"
        ],
        "version": "本篇核读：2026-09-27"
      }
    ],
    "energy": [
      {
        "source_id": "nb-d01-xom",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions"
        },
        "required_unit": {
          "locator": "D01已核的业务介绍；本篇按上游、产品和服务机制复用",
          "scope": "自产资源销售与炼化/化工业务分别研究。产销量、实现售价和组合不等于屏幕现货价；本篇无额外精确增长数字。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "ExxonMobil — Business divisions",
        "authors": [
          "ExxonMobil"
        ],
        "version": "动态公司业务页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-kmi",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.kindermorgan.com/Operations/Products/Index"
        },
        "required_unit": {
          "locator": "Products Pipelines，Galena Park；本轮读取网页276行",
          "scope": "Galena Park凝析油加工基于与BP North America长期fee-based协议。用于区别收费加工与自有商品销售，不虚构具体容量费/最低量公式，不说全部KMI合同相同。",
          "purpose": "按当前学习问题核对本篇采用的数字、期间或经营机制，其余内容按需读取。"
        },
        "title": "Kinder Morgan — Products Pipelines; Condensate Processing Facility",
        "authors": [
          "Kinder Morgan"
        ],
        "version": "动态公司业务页面，读取于 2026-09-27"
      }
    ]
  },
  "runtime_reading_log": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry
收入增长，可能因为卖得更多，也可能因为卖得更贵。Coca-Cola（KO）在 2025 年第二季度的净营收同比增长 1%，公司披露的全球标准箱销量却下降 1%。收入在涨、销量在跌，这时候就得把增长拆开，看看多出来的钱到底从哪儿来。[^ko-growth]

[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)讲清了公司卖给谁、交付什么、怎样收费。这门生意的收入一旦往上走，接下来就要判断哪些增长能延续：客户会不会接着买、净价守不守得住、新品又能贡献多少。真准备买股票时，还要把自己的增长判断拿去跟公开预测对照，再反推眼前的股价需要公司交出怎样的成绩单。

## 销量、净价与产品组合 {#nb-d02-drivers}

先从最直观的卖商品看起。一段时间内卖出多少件、每件实际入账多少钱，两者相乘就是销售收入。吊牌上标着 100 元的商品，扣掉促销折扣、预计退货与渠道折让以后，最终入账往往不到 100 元。这里说的净价，就是扣除这些调整后计入收入的价格；货款哪天真正到账，则另看付款条款。把第 \(i\) 类商品的销量记为 \(q_i\)，对应的平均净价记为 \(p_i\)，收入记为 \(R\)，可以写成：

\[
R=\sum_i q_i p_i.
\]

把相邻两期或上年同季摆在一起，就能把销量、同类商品净价与产品组合拆开看。哪怕每一款商品一分钱都没涨，只要高价款在总销量里的占比提高，整体平均售价照样往上走。光看到“平均客单价变贵了”，还不能一口断定公司提了价，得拆开核对究竟是同款商品涨价，还是顾客挑了更多高价款。量、价与组合彼此牵动：提价可能劝退一部分价格敏感的顾客，推新品则可能把销量和均价同时拉高。

<figure class="flow-figure stack-rows" id="nb-d02-mix">
<div class="ff-head"><p class="ff-title">每款都不涨价，平均售价也能上升（示意）</p><p class="ff-legend"><span style="--c:#8db39c">A 款，每件 10 元</span><span style="--c:#24664f">B 款，每件 20 元</span></p></div>
<div class="sr-grid">
<span class="sr-name">第一期</span><span class="sr-val">收入 <strong>1,200 元</strong><br>平均售价 12 元</span><div class="sr-bar business-exchange" aria-label="第一期卖出 100 件：A 款 80 件、B 款 20 件，收入 1,200 元，平均售价 12 元。"><i style="--w:80%;--c:#8db39c">A 80 件</i><i style="--w:20%;--c:#24664f">B 20 件</i></div>
<span class="sr-name">第二期</span><span class="sr-val">收入 <strong>1,400 元</strong><br>平均售价 <strong>14 元，+16.7%</strong></span><div class="sr-bar business-exchange" aria-label="第二期同样卖出 100 件，每款价格不变，但 B 款增加到 40 件、A 款减少到 60 件，收入 1,400 元，平均售价 14 元，上升约 16.7%。"><i style="--w:60%;--c:#8db39c">A 60 件</i><i style="--w:40%;--c:#24664f">B 40 件</i></div>
</div>
<figcaption>两期都卖出 100 件，A、B 两款的价格也都没变；平均售价上升，全部来自高价商品占比的提高。</figcaption>
</figure>

不同行业的生意形态不同，拆解增长时选用的观察单位也不一样。下面沿用前篇的八个行业，分别看收入往上走时先查什么。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d02-consumer">

## 消费品与零售：销量与组合 {#nb-d02-consumer-story}

读消费品公司的销量，先要认清这个量统计在哪个环节。KO 向装瓶伙伴等客户销售浓缩液，公司与装瓶伙伴再面向终端销售成品饮料；两种销量都能折成标准箱，变动节奏却未必同步。2025 年第二季度，KO 亚太地区的标准箱销量下降 3%，浓缩液销量却下降 5%，公司将这 2 个百分点的落差归因于浓缩液发货时点。[^ko-growth]一批浓缩液提前或错后几天发货，出货量就会落进相邻报告期，而下游货架上的成品动销未必同步变化。判断真实需求时，还得对照下游动销与渠道库存，看补货能不能接上。

换到零售业，还要把老店增长与开新店分开算。Walmart（WMT）美国业务在 FY2025 的可比销售增长 4.8%，公司将其归因于交易次数和销量增加；新开门店贡献的增量，则另起一笔看。[^wmt]在数量之外，品类、包装和渠道结构也会左右平均售价。KO 披露的 price/mix 就把价格调整和这些组合变化合在一起，因此不能直接当成所有饮料统一涨了同样幅度的价。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d02-software">

## 软件与云服务：新增客户与原有客户 {#nb-d02-software-story}

看软件和云服务的收入增长，要同时盯两件事：客户变多了没有，老客户花得比去年多了没有。按席位收费的软件看账号数与套餐档位，按用量计费的云平台则看实际消耗。老客户加量、缩减还是彻底停用，都会拉动或拖累收入；只有把同一批客户圈在一起跨期追踪，才能看清这几种力道抵销后留下了多少净增长。

<span data-text-versions id="nb-d02-software-text-1">Snowflake（SNOW）截至 2025 年 7 月 31 日的净收入留存率（NRR）为 125%，意思是选定的同一批客户在后一个十二个月贡献的产品收入，比前一个十二个月多出 25%<span data-text-detail>（本次选取的是 2023 年 8 月使用平台且有容量合同的客户，比较 2023 年 8 月至 2024 年 7 月、2024 年 8 月至 2025 年 7 月两个窗口；停止使用的客户仍保留在计算中，后期收入记为零，客户合并等调整按公司方法处理）</span>。这个数字打包反映了扩用、缩减和退出的净结果，衡量的是老客收入留存。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>同期 SNOW 披露的单季产品收入同比增长 32%，但千万不能拿 32% 减去 25%，就说剩下的 7% 来自新客户：两项指标的统计窗口、客户总体与比较分母全都不一样。[^snow]

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d02-platform">

## 互联网平台与广告：交易与收费 {#nb-d02-platform-story}

平台流量上去以后，接着要看哪些互动真正带来了收费。Alphabet（GOOGL／GOOG）2025 年报披露，Google Search & other 的付费点击次数增长 6%，平均每次点击收入增长 7%。这两个指标把广告增长拆成了量和价两头：收费点击变多了没有，单次点击平均收进来多少钱。平均单价同样夹杂着广告产品、终端设备和地区组合的影响，不能直接解读成全站广告统一提了价。[^alphabet]

广告收入能不能接着涨，最终看广告主愿不愿意继续掏预算。沿着[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/#nb-d01-platform-demand)里的采买关系，可以继续核对广告主的业务体量与投放回报。广告主加预算，可能是自家生意扩大了，也可能只是获客变贵、不得不花更多钱买回同样多的订单。把平台的点击与单价走势，同广告主的成交转化和获客成本摆在一起看，才能判断这轮增长站不站得稳。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d02-semiconductor">

## 半导体与硬件：交付量与产品结构 {#nb-d02-semiconductor-story}

芯片、整机系统、晶圆和光刻设备各有交付单位。拆半导体公司的收入增长，得先按产品线分开，再看交货量与平均单价；高价新一代产品的占比一提上去，就算出货总数变化不大，收入也会明显跳升。云客户对算力的需要增加以后，还可能先压榨存量设备的利用率，或在自研芯片与外购方案之间重分预算，因此终端算力变旺到某家供应商的收入兑现，中间隔着选型、排产与交付。具体产业链分工见[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/#nb-d01-semiconductor)。

本篇后面会用到一组关于 Marvell（MRVL）数据中心收入的预测市场合约。这一板块涵盖用于 AI 系统、交换、服务器、存储和数据中心互连的芯片；MRVL 按终端市场单独披露该项收入，因此后面核对合约门槛时，就要对准数据中心这一条线，不能混用全公司总收入。[^mrvl]

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d02-industrial">

## 工业设备与工程服务：订单与履约 {#nb-d02-industrial-story}

工业企业新签了大单，当期收入往往不会立刻跟着起跳。设备要排产交付，工程要按里程碑施工，这一季记进报表的收入，很大一部分来自早先签下的存量订单。所以拆当期收入增长时，既要看新接了多少单，更要看手头在手订单本期干完了多少；交期稍微提前或延后几周，收入就会挪到相邻季度。

到了维保环节，跑在楼里的存量设备才开始源源不断贡献续费收入。Otis Worldwide（OTIS）在 2025 年报中列出了维保增长的三条路径：新梯交付后转入维保、拿下其他品牌存量梯的维保合约，以及收购既有维保组合。[^otis]此外，大修与现代化改造又各自单签项目、单独计费。核对服务收入时，要对照实际签约范围与服务内容，不能拿总装机台数直接乘一个统一年费。订单与履约怎样一步步落进财务报表，留待后续《三张财报与经营活动》展开。

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d02-healthcare">

## 医药与医疗服务：采用与支付 {#nb-d02-healthcare-story}

药企和器械商可以顺着临床采用、销量与净价拆增长，医院服务则要按诊疗项目和支付结构来看。HCA Healthcare（HCA）2025 年收入增长 7.1%，同期折合住院人次增长 2.9%，每折合住院人次收入增长 4.0%。<span data-text-versions id="nb-d02-healthcare-text-1">这里的折合住院人次，把门诊等业务也并进了同一个业务量刻度<span data-text-detail>（公司按住院与门诊等业务的毛收入比例，将门诊活动折合到住院当量中；它不等于去重后的患者人数）</span>。[^hca]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

单次服务收入的变化，背后混杂着病例复杂程度、诊疗项目组合以及商保与政府支付方的比例，只看均值拆不出各自贡献。判断后续还能不能涨，还要回头核对产品或服务为什么被采用、医疗机构接不接得住新增量、支付方按什么条款报销。哪怕患者看病需求在增长，某家公司最终分走多少，仍取决于它的产品力、床位产能与同业竞争。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d02-finance">

## 银行、支付与保险：规模与收费 {#nb-d02-finance-story}

比较金融业务的增长，第一步是把“业务规模”和“营业收入”分开。JPMorgan Chase（JPM）放出去的贷款本金、Visa（V）网络里流过的刷卡流水，都不能直接算作公司收入；前者要按生息资产收益扣掉资金利息成本后算净利息收入（手续费等非利息收入另看）[^jpm]，财险公司如 Chubb（CB）则要把当期签下的保费沿保障期间逐步确认为已赚保费[^chubb]。下图把这三类金融业务从规模基数到收入确认的转换路径摆在一起对照：

<figure class="flow-figure g4-fin-revenue" id="nb-d02-fin-revenue">
<div class="ff-head"><p class="ff-title">三类金融业务：从“规模基数”到“实际收入”</p><span class="ff-sub">先看规模在量什么，再看收费与期间转换</span></div>
<div class="g4-fin-head"><span>业务</span><span>业务规模基数（非收入）</span><span>收费与确认转换</span><span>实际收入与核对口径</span></div>
<div class="g4-fin-lanes business-exchange" aria-label="三类金融业务从规模基数到实际收入的转换路径：第一，银行（以 JPM 为例），规模基数是生息资产与存贷款余额，经过资产收益减去资金利息成本的息差转换，形成净利息收入，手续费等非利息收入另看；第二，支付网络（以 V 为例），规模基数是网络支付金额与处理笔数，其季度服务收入滞后一季、主要依据前一季度的名义支付金额计费，并扣除客户激励，形成网络服务与处理净收入，不同收费类别对应不同活动；第三，财险（以 Chubb（CB）为例），规模基数是新业务、既有业务留存及费率与承保风险规模共同形成的签单保费，签单保费主要随保障期间逐步分摊确认为已赚保费，即相应的保费收入。">
<div class="g4-fin-lane">
<div class="g4-fin-biz"><strong>银行</strong><small>JPM 为例</small></div>
<div class="g4-fin-box g4-fin-base"><strong>生息资产与存贷款余额</strong><small>贷款本金本身不是收入</small></div>
<div class="g4-fin-bridge"><b class="g4-fin-tag">息差净额</b><span>资产收益 − 资金利息成本</span></div>
<div class="g4-fin-box g4-fin-rev"><strong>净利息收入（NII）</strong><small>已扣利息支出；手续费等非利息收入另看</small></div>
</div>
<div class="g4-fin-lane">
<div class="g4-fin-biz"><strong>支付网络</strong><small>V 为例</small></div>
<div class="g4-fin-box g4-fin-base"><strong>支付金额与处理笔数</strong><small>卡内流经金额不是收入</small></div>
<div class="g4-fin-bridge"><b class="g4-fin-tag g4-warm">滞后一季计费</b><span>季度服务费主要按上季名义支付金额计费，并扣客户激励</span></div>
<div class="g4-fin-box g4-fin-rev"><strong>网络服务与处理净收入</strong><small>不同收费类别对应不同活动，先对齐期间</small></div>
</div>
<div class="g4-fin-lane">
<div class="g4-fin-biz"><strong>财险</strong><small>CB 为例</small></div>
<div class="g4-fin-box g4-fin-base"><strong>当期签单保费</strong><small>受新业务、留存、费率与风险规模影响</small></div>
<div class="g4-fin-bridge"><b class="g4-fin-tag g4-warm">随保障期分摊</b><span>按保单保障期间逐步确认</span></div>
<div class="g4-fin-box g4-fin-rev"><strong>已赚保费（保费收入）</strong><small>签单与确认收入对应不同时间窗</small></div>
</div>
</div>
<figcaption>规模基数只反映业务盘子；真正落进损益表的收入，还要经过息差、滞后计费或保障期分摊等转换规则。</figcaption>
</figure>

正如中间一条路径标出的，业务发生与收费有时会错开一个季度。V 的季度服务收入主要依据前一季度的名义支付金额计费，并受客户激励和收费类别组合影响；把支付量增速与收入增速放在一起比较时，要先将对应的计费期间对齐，再拆解费率与业务结构的变化。[^visa]

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d02-energy">

## 能源与原材料：销量、售价与服务 {#nb-d02-energy-story}

资源销售的收入增长，一头看卖出去多少，另一头看实际卖上了什么价。分析 ExxonMobil（XOM）时，要把上游油气开采、下游炼化和化工分开看，分别核对产销量、实际售价与产品结构。[^xom]行情软件上跳动的原油现货价只是基准参照；油品规格、交割地点和长协条款不同，公司账上真正落袋的售价也会拉开差距。

如果公司做的是加工和输运服务，目光就要转回合同计费条款。Kinder Morgan（KMI）的 Galena Park 凝析油加工设施，就与 BP North America 签有长期收费协议。[^kmi]看这类服务业务，关键在核对客户实际用了多少设施能力、合同按什么口径收费，不能简单套用国际油价涨跌幅。

</section>

## 增长的期间与比较口径 {#nb-d02-comparison}

不论落到哪个行业，比较增速前都要先把期间和业务范围对齐。同比拿本期对上年同季，环比拿本期对紧邻上一期。季节性强的生意，旺季压过淡季很常见；想判断生意本身有没有扩盘，得在相同季节、同一合并范围内比。公司刚并购了一块资产，老业务原地踏步，合并报表收入照样往上跳；剥离一块资产，报表收入则会往下掉。跨国经营涉及多币种时，当地货币增速与换算成美元后的报表增速也常走岔路。

回到开头 KO 的案例，公司在报表收入之外，另列了剔除汇率及收购、剥离与结构变化后的有机收入增长，并把变化拆成价格与组合（price/mix）和浓缩液销量两块：前者合并反映价格、产品和包装等组合变动，后者对应公司向装瓶伙伴等客户的供货量。2025 年第二季度，KO 报表净营收增长 1%，有机收入增长 5%，其中 price/mix 贡献 +6%，浓缩液销量贡献 −1%。[^ko-growth]

<figure><img src="/notebook/revenue-growth/ko-growth.svg?v=20261126" alt="KO 2025年第二季度报告净营收增长1%、有机收入增长5%、price/mix增长6%，浓缩液销量和标准箱销量均下降1%；不同指标分别比较。" loading="lazy"><figcaption>KO 2025 年第二季度。报表收入、有机收入及量价指标按各自定义列示；横向比较其方向与幅度。</figcaption></figure>

<span data-text-versions id="nb-d02-comparison-text-1">这一季里，价格与组合推高了 KO 的收入，汇率换算则拖累了报表表现<span data-text-detail>（公司将汇率影响列为 −3%；price/mix 包含产品、包装、渠道和地区组合，不能全归为提价。披露比例经过取整，各项显示值未必严格相加）</span>。接下来判断增长能不能延续，还要继续查消费者实际购买、渠道补货与产品组合，不能把这一个季度的有机增速直接外推到未来每个季度。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

订单签约、收入确认与现金到账也各有时间表。以 Snowflake（SNOW）的容量合同为例，客户签字承诺的采购额未必立刻用完；公司披露的剩余履约义务（RPO）记录了已经签约、尚未确认为收入的合同金额，而产品收入主要随客户实际消耗逐步确认。[^snow]

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>合同承诺</small><strong>客户签下容量合同</strong><p>尚未确认的合同收入进入相应履约记录。</p></div><p class="business-flow-edge">客户随后使用平台资源</p><div class="business-flow-node"><small>服务使用</small><strong>实际消耗逐步发生</strong><p>用量与时间取决于客户的业务活动。</p></div><p class="business-flow-edge">按适用条款计量与确认</p><div class="business-flow-node"><small>报告期间</small><strong>确认相应产品收入</strong><p>本期收入可以来自此前签下的合同。</p></div></div><figcaption>SNOW 容量合同的一项时间关系：签约与实际消耗可以落在不同期间。</figcaption></figure>

<span data-text-versions id="nb-d02-timing-text-1">RPO 告诉我们账外还有多少已签约收入等着确认，但它们具体落进哪几个季度，取决于客户的消耗速度<span data-text-detail>（RPO 包括递延收入，也包括未来才开票和确认的不可取消合同金额，因此不能都视为已收现；无最低购买承诺的按需安排等不计入，超出已有承诺的后续使用也未必反映在当前 RPO 中）</span>。评估签约增长能否顺利兑现成收入时，要先分清合同承诺、预计用量和当期确认额，再去核对客户是否真会加量、云商能否按期供给。这时就可以让 Agent 并行查公司、客户与供应商的材料，把时间线对齐，对照各种竞争解释。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 增长预期与事件报价 {#nb-d02-expectations}

有了自己的增长判断，下一步是把它拿去跟公开预期对表。公司指引与券商研报通常给出某段期间的收入或增速区间；Prediction Market（预测市场）则直接把问题写成一道明确的是非题，比如单季收入会不会严格超过某个门槛。到期按规则判为 YES，合约支付 1 美元，否则支付 0。YES 的成交价于是直观标出了市场给出的过线把握，正好拿来校准自己的判断。[^pm]

Marvell（MRVL）为 AI 系统、服务器、存储和互连供应芯片，并按数据中心终端市场单独披露收入。有了这条清晰可核的收入口径，就能事前押注单季数字，再等财报一锤定音。Polymarket 曾上线过一组这样的门槛合约，判定 **FY2027 第一季度（截至 2026 年 5 月 2 日的三个月）MRVL 数据中心收入是否严格超过指定金额**，其中两道门槛分别是 18.5 亿美元和 19 亿美元。[^pm]上年同季该板块收入为 14.406 亿美元，换算下来，两道门槛分别要求同比增速超过约 28.4% 和 31.9%。[^mrvl-base]

<figure class="flow-figure g4-pm-thresholds" id="nb-d02-pm-thresholds">
<div class="ff-head"><p class="ff-title">MRVL FY2027 Q1 数据中心收入门槛与事前过线把握</p><span class="ff-sub">2026-05-26 财报前一日同一时刻 YES 历史价格</span></div>
<div class="business-exchange" aria-label="MRVL FY2027 第一季度数据中心收入两项 Polymarket 门槛合约对照：上年同季基期收入为 14.406 亿美元。门槛一为严格超过 18.5 亿美元，对应同比增长边界约 28.4%，5 月 26 日 YES 历史价格为 0.395 美元（对应约 39.5% 过线把握）；门槛二为严格超过 19 亿美元，对应同比增长边界约 31.9%，5 月 26 日 YES 历史价格为 0.185 美元（对应约 18.5% 过线把握）。两张合约为可同时成立的门槛事件，非互斥区间。">
<p class="g4-pm-section">收入门槛相对上年同季基期的位置（亿美元）</p>
<div class="g4-pm-ruler">
<div class="g4-pm-rail">
<i class="g4-pm-span" style="--from:7.38%;--w:74.44%;--c:#b7d2c5"></i>
<i class="g4-pm-span" style="--from:81.82%;--w:9.09%;--c:#e5c7a7"></i>
</div>
<span class="g4-pm-tick" style="--x:7.38%;--c:#7a8780"></span>
<span class="g4-pm-lab g4-pm-lab-base" style="--x:7.38%">基期 14.406 亿</span>
<span class="g4-pm-tick" style="--x:81.82%;--c:var(--ff-share)"></span>
<span class="g4-pm-lab g4-pm-lab-top" style="--x:81.82%">门槛一 <strong>&gt; 18.5 亿</strong>（+28.4%）</span>
<span class="g4-pm-tick" style="--x:90.91%;--c:var(--ff-cash)"></span>
<span class="g4-pm-lab g4-pm-lab-bot" style="--x:90.91%">门槛二 <strong>&gt; 19.0 亿</strong>（+31.9%）</span>
</div>
<p class="g4-pm-section">5 月 26 日 YES 历史价格对应的过线把握（0%—100%）</p>
<div class="g4-pm-bars">
<div class="g4-pm-name"><strong>严格超过 18.5 亿美元</strong><small>对应同比边界约 +28.4%</small></div>
<div class="g4-pm-track"><i style="--w:39.5%;--c:var(--ff-share)"></i></div>
<div class="g4-pm-val"><strong>0.395 美元</strong>（39.5%）</div>
<div class="g4-pm-name"><strong>严格超过 19 亿美元</strong><small>对应同比边界约 +31.9%</small></div>
<div class="g4-pm-track"><i style="--w:18.5%;--c:#619483"></i></div>
<div class="g4-pm-val"><strong>0.185 美元</strong>（18.5%）</div>
<div class="g4-pm-axis"><span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span></div>
</div>
</div>
<figcaption>门槛从 18.5 亿抬高 0.5 亿到 19 亿，YES 历史价格便从 0.395 美元落到 0.185 美元；两项事件可同时成立，并非互斥区间。</figcaption>
</figure>

<span data-text-versions id="nb-d02-pm-text-1">这两个价格取自财报公布前一天的同一时刻，大致相当于市场给出了 39.5% 和 18.5% 的过线把握<span data-text-detail>（观察时点为 2026 年 5 月 26 日 16:00:04 UTC，采用官方历史价格序列；当时买卖两侧及深度没有恢复，因此不把序列点当作可以立即成交的买入价。两张合约是可同时成立的门槛事件，不是两个互斥收入区间；合约按官方原始金额判定，图中取整后的增速仅用于理解）</span>。[^pm-history]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure><img src="/notebook/revenue-growth/mrvl-expectations.svg?v=20261126" alt="2026年3月5日MRVL给出公司展望，5月26日记录数据中心收入门槛的预测市场事前价格，5月27日报告实际收入18.327亿美元，两项门槛均未超过。" loading="lazy"><figcaption>先记录当时的预测与报价，再与后来公布的同口径结果比较。</figcaption></figure>

5 月 27 日财报落地，MRVL 公布的数据中心收入为 18.327 亿美元，同比增长约 27.2%，距离 18.5 亿美元只差 0.173 亿美元，两项合约双双结为 NO。[^mrvl]27.2% 的同比增速并不慢，但仍落在两道事前门槛之下。下次听到“增长很快”，不妨紧接着问两句：相对哪一年的基期，又有没有越过市场眼下盯着的门槛。

回头看财报前公司自己给的展望，口径一样要对齐。MRVL 在 3 月 5 日谈到的约 40% 增速，针对的是 FY2027 **全年**数据中心收入；同场给出的 24 亿美元（上下浮动 5%），则是下一季度的**全公司**收入指引。[^mrvl-outlook]前者勾勒全年路径，后者给出季度总盘子，哪一个都不能直接拿来套某一季度的数据中心门槛。<span data-text-versions id="nb-d02-pm-text-2">Agent 还要沿着客户采购、芯片交付与并购并表范围逐条查证<span data-text-detail>（这里的指引和后来实际收入都包含 Celestial AI 与 XConn 收购，本篇计算的是报告收入同比，尚未单独拆出并购贡献）</span>，形成自己的单季估算，再去和当时的事件报价对照。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

事件合约把季度、板块和门槛钉死在一条线上；而回到股票价格本身，我们还要把视线拉长，连同增长能延续几年、每块收入能留下多少利润、股数会不会摊薄一起算进来。为此，先看收入怎样一步步走到每股盈利。

## 股价对应的增长要求 {#nb-d02-price-in}

除了从生意往外推增速，还可以倒过来算：眼下这个股价，需要公司交出多少收入才撑得住？这里换回 KO，用全年数据把收入、利润和股价连成一条线。收入扣掉成本、费用、税费并计入其他损益，再把归属普通股股东的净利润除以股数，就得到每股收益（EPS）。设净利率为 \(m\)、收入为 \(R\)、股数为 \(N\)，就有 \(\mathrm{EPS}=mR/N\)。

市盈率（PE）衡量股价是每股收益的多少倍；拿预计盈利作分母，就得到前瞻市盈率，使用时要写明预计的是哪一年。给定股价 \(P\)，再假设市场愿意为指定年度的每股盈利给出 \(M\) 倍估值，就能反推出这一年所需的 EPS、利润与收入：

\[
\mathrm{EPS}_{\mathrm{要求}}=\frac{P}{M},\qquad
R_{\mathrm{要求}}=\frac{PN}{Mm}.
\]

先摆出实打实的基期底数。沿用公司调整后的可比口径，KO 2025 全年净营收为 480.62 亿美元，归属股东净利润为 129.58 亿美元，对应净利率约 27.0%；全年稀释加权平均股数为 43.13 亿股。[^ko-base]

<figure class="flow-figure step-chain sc-4" id="nb-d02-reverse-chain">
<div class="ff-head"><p class="ff-title">从 KO 的股价反推 2026 年的收入要求</p><span class="ff-sub">可比口径，美元</span></div>
<div class="sc-track">
<div class="sc-node"><strong>78.76</strong><small>股价，2026 年 4 月 30 日收盘</small></div>
<div class="sc-link business-exchange" aria-label="股价 78.76 美元除以借用自 DBS 报告的 26 倍前瞻 PE，得到 2026 年所需的每股收益约 3.03 美元。"><span>÷ 26 倍 PE</span><span>借用 DBS 的倍数</span></div>
<div class="sc-node"><strong>3.03</strong><small>2026 年所需每股收益</small></div>
<div class="sc-link business-exchange" aria-label="每股收益乘以 43.13 亿股稀释加权平均股数，假设股数保持 2025 年水平，所需归属股东净利润约 130.7 亿美元。"><span>× 43.13 亿股</span><span>假设保持 2025 年</span></div>
<div class="sc-node"><strong>130.7 亿</strong><small>所需净利润</small></div>
<div class="sc-link business-exchange" aria-label="所需净利润除以约 27.0% 的净利率，假设保持 2025 年的比率，所需可比净营收约 484.6 亿美元。"><span>÷ 27.0%</span><span>净利率，假设保持</span></div>
<div class="sc-node sc-focus"><strong>484.6 亿</strong><small>所需净营收</small></div>
</div>
<p class="ff-aside business-exchange" aria-label="2025 年同口径净营收为 480.62 亿美元，所需净营收约 484.6 亿美元，需要增长约 0.8%。"><strong>与 2025 年的 480.62 亿美元相比</strong>：需要增长约 0.8%。</p>
<figcaption>净利率按 2025 年可比口径计算：129.58 ÷ 480.62 ≈ 27.0%。股价为实际收盘价，PE、股数与净利率都是本篇设定的条件，2026 全年为本篇指定的盈利期间。</figcaption>
</figure>

<span data-text-versions id="nb-d02-price-text-1">DBS 在这份报告里为目标价选用了 26 倍前瞻 PE；我们借用这一倍数，并明确把它用在 KO 2026 全年可比盈利上<span data-text-detail>（报告没有在该处完整定义其 forward PE 的盈利期间，本篇的年度安排不用于复刻报告目标价。可比收入与可比利润属于公司非 GAAP 口径，与前面的有机增长也不同；计算用 129.58／480.62 的精确比率，约 27.0% 仅用于显示。股数采用全年稀释加权平均股数，未来保持不变是本篇条件）</span>。[^dbs]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

顺着上图走完四步：78.76 美元除以 26，得出 2026 年所需 EPS 约 3.03 美元；再乘以 43.13 亿股、除以 2025 年净利率，所需可比净营收约 **484.6 亿美元**，较 2025 年同口径只需增长约 **0.8%**。只要把其中任何一个条件换掉，比如改一个 PE 倍数，或者允许净利率和股数变动，反推出来的增长要求就会立刻跟着移动。

<div data-experiment-slot="nb-d02-price-lab"></div>

不妨在上面的推演器里先只拉动 PE、固定其余条件：市场若只给 22 倍，KO 的收入得涨约 19.2% 才托得住 78.76 美元；若市场愿意给到 30 倍，哪怕收入比基期回落约 12.6% 也够得着。平时常说“股价里已经计入了多少增长”，很大程度上要看市场给盈利配了多少倍估值。单凭一个股价，解不出增长率、利润率与估值倍数三个未知数；反推的价值，在于把不同假设对应的经营成绩单摊到桌面上，再拿基本面证据一条条检验。

算出这些收入要求后，Agent 可以倒着往下拆：客户数、用量、净价与产品组合各要走到哪一步，客户采购和公司供货撑不撑得起，净利率凭什么维持或变化。若市场公开预测给出不同增速，就逐项核对分歧出在销量、价格、汇率、并购范围还是利润率上。比较时始终守住同一公司、同一业务板块和同一期间——MRVL 的单季数据中心门槛与 KO 的全年可比收入要求，回答的各是各的账；等新财报、订单或成本数据出炉，再更新受影响的判断。

## 从增长到盈利 {#nb-d02-next}

MRVL 提醒我们，收入增长快和跑赢预期门槛是两码事；KO 的反推又表明，股价隐含的收入要求会随着利润率、股数与估值倍数一起浮动。要继续判断这些经营条件能不能兑现，还得翻开收入背后的账本：多赚一块钱收入，究竟要多花多少成本。下一篇《成本结构与经营杠杆》就会顺着这里往下走，拆解成本如何随规模变化，最后又能留下多少利润。

<link rel="stylesheet" href="/notebook/business-branches.css?v=20261126">
<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">


[^ko-growth]: [The Coca-Cola Company — Second Quarter 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf)。PDF p1 标题与 Quarterly Performance / Revenues；PDF p3 Revenues and Volume，Consolidated 行及 rounding 注；PDF p8 Notes，unit case、unit case volume、concentrate sales、price/mix；PDF p15 Definitions；p25 Net Operating Revenues 调节表；PDF p3 Asia Pacific 行；p5 Asia Pacific 第二段。
[^wmt]: [Walmart FY2025 Form 10-K](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm)。Walmart U.S. Results of Operations；本轮实际阅读974–980行。
[^snow]: [Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf)。PDF p16 Note 3 Revenue；p53 Revenue comparison 三个月列；PDF p45 Net Revenue Retention Rate 全段；PDF p53 Product revenue increased 段：125% as of July 31, 2025；PDF p17 Note 3 / Remaining Performance Obligations；p47 Remaining Performance Obligations及Components of Results / Revenue。
[^alphabet]: [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。Item 7，广告指标定义与增长表；本轮实际阅读 HTML 907–918、1108–1118 行。
[^mrvl]: [Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm)。Quarterly Revenue Trend (Unaudited), Revenue by End Market table (HTML table index 9, zero-based); opening acquisition paragraph。
[^otis]: [Otis 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm)。Item 1 Service；本轮阅读205–222行。
[^hca]: [HCA 2025 Annual Report](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf)。PDF第68、71页（网络文本P67等），收入与Equivalent admissions解释。
[^jpm]: [JPMorgan Chase 2025 Annual Report](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)。PDF79、83、92、351页；NII及定义段。
[^visa]: [Visa FY2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm)。Service/data processing revenue与operating metrics；已读1152–54、1189、1211、1240–68行。
[^chubb]: [Chubb Limited Annual Report 2025 — Premiums; Financial Highlights](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf)。PDF pp157–158，印刷页 F-10–F-11，Note 1 Summary of significant accounting policies / b) Premiums；PDF p97，10-K印刷页49，Financial Highlights for the Year Ended December 31, 2025，P&C net premiums written 段。
[^xom]: [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions)。D01已核的业务介绍；本篇按上游、产品和服务机制复用。
[^kmi]: [Kinder Morgan — Products Pipelines](https://www.kindermorgan.com/Operations/Products/Index)。Products Pipelines，Galena Park；本轮读取网页276行。
[^pm]: [Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets](https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above)。event id 483195; markets id 2256679–2256683; description/outcomes/clobTokenIds/closedTime。
[^mrvl-base]: [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm)。Quarterly Revenue Trend table (HTML table index 8, zero-based)。
[^pm-history]: [Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.85B?](https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60)。history[] entries with t/p; selected t=1779811204。；[Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.9B?](https://clob.polymarket.com/prices-history?market=17371423556770029879189222365137773013648929593752442002979764677862763408752&startTs=1778716800&endTs=1779926400&fidelity=60)。history[] entries with t/p; selected t=1779811204。
[^mrvl-outlook]: [Marvell FY26 and Q4 FY26 Financial and Business Results](https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf)。PDF pp6,13,15–16 (one-based)。
[^ko-base]: [The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf)。PDF p10 Consolidated Statements of Income，Year Ended December 31, 2025；PDF p16 Comparable EPS 定义；PDF p22 Reconciliation，Comparable (Non-GAAP) Net operating revenues；PDF p23 Reconciliation，Comparable (Non-GAAP) Net income及Diluted net income per share；脚注3明确net income为归属公司股东净利。
[^dbs]: [DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke](https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf)。PDF p1右上 4 May 2026；PDF p1 Key Financial Data / Share Price (USD) 78.76；表下 Closing Price as of 30 Apr 2026；PDF p1 Investment Overview，Maintain BUY段：TP86 pegged to a higher 26x fwd PE；PDF p1 12-mth Target Price (USD) 86.0。


## Sources
- [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。
- [HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf): HCA 提供住院和门诊服务，多数患者合同还涉及政府项目、商业保险或管理式医疗等第三方付款者。；支付可按病例、日或服务项目等约定，服务交付、收入确认与收款需要区别。
- [JPMorgan Chase 2025 Annual Report — Consumer & Community Banking](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPM 的消费与社区银行服务个人和小企业，包含存款、贷款、账户和支付服务。；客户存入的本金、银行放出的贷款本金、利息及服务费用承担不同权利和义务。
- [Kinder Morgan — Products Pipelines; Condensate Processing Facility](https://www.kindermorgan.com/Operations/Products/Index): KMI 提供成品油等运输、储存与调和服务。；其 Galena Park 附近凝析油加工设施由与 BP North America 的长期收费协议支持。；同样处理能源商品，企业也可以通过提供加工服务取得收费。
- [Otis Worldwide 2025 Form 10-K — New Equipment and Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm): 新设备客户包括开发商、总承包商和政府机构；通常有预付和按里程碑付款。；维保客户通常为业主和设施管理方，可以不同于原设备采购者。；OTIS 维护自家和其他厂商设备，服务还包含维修与改造。
- [Visa FY2025 Form 10-K — Network Model and Transaction Processing](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm): V 向支付体系参与者提供网络处理服务，本身不发卡或向持卡人授信。；交换费一般由收单方向发卡方支付，商户收单费用与 V 对机构收取的费用需区分。；网络流经金额不等同 V 的营业收入。
- [Walmart FY2025 Form 10-K — Business; Membership and Other Income](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm): WMT 有商品零售和会员服务，会员收费对应期间权益。；同一购物活动可以涉及商品价款与会员费两种不同收费。
- [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions): XOM 同时有油气生产、下游燃料及化工业务，最终服务不同用途。；从开采、加工及商品销售切面识别业务，有助于分别研究产品价格和加工关系。
- [Chubb Limited Annual Report 2025 — Premiums; Financial Highlights](https://www.chubb.com/content/dam/annual-corporate-governance/2026/a-chubb-limited/chubb-limited-annual-report-2025.pdf): 保费定义跨页完整读取，经营增长说明读取对应段落；其他命中页只作定位上下文，不作为新增研究内容。未称304页全文已审读。
- [DBS US Equity Research — Coca-Cola: The world remains thirsty for Coke](https://www.dbs.com/content/article/pdf/US_clover/CocaCola.pdf): 当前URL取得的本地PDF实际为2026-05-04版，报告列示2026-04-30收盘价78.76。；26倍是分析师为其目标价选择的forward PE；本篇可把这个已公开数值作为有出处、可调整的条件输入。
- [The Coca-Cola Company — Fourth Quarter and Full Year 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola%20Q4%202025%20Earnings%20Release_Full%20Release_2.10.26.pdf): GAAP净营收为47,941m；另列的可比净营收为48,062m，不能不加标签地交换。；可比归属股东净利润12,958m和可比稀释EPS显示值3.00均来自公司非GAAP调节表；GAAP对应归属股东净利13,107m、稀释EPS3.04。；4,313m为2025全年稀释加权平均股数，不是2025年末股数。；本篇同口径净利率proxy采用12,958/48,062；EPS用12,958/4,313核对，公司显示3.00是取整数。
- [The Coca-Cola Company — Second Quarter 2025 Earnings Release](https://www.coca-colacompany.com/content/dam/corporate/us/en/media-center/Coca-Cola-2025-Q2-Earnings-Release-Full-Release-7.22.25.pdf): 全球报表净营收同比增长1%，有机净营收增长5%；收入表现包含price/mix增长6%及concentrate sales下降1%，unit case volume亦下降1%。；同用标准箱等价单位，不保证统计的是同一销售环节或同一时点；亚太两个量指标相差2个百分点，公司解释为浓缩液发货时点。；报表收入与有机收入之间的FX和范围调整属于口径区别。
- [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm): 读取当年已披露Data center 1,440.6 M 美元及季度期间；与最新表所列同季数一致。
- [Marvell FY26 and Q4 FY26 Financial and Business Results](https://d1io3yog0oux5.cloudfront.net/_6b3a348c4b3086f910c6504b5c8068c0/marvell/db/3735/35341/file/2026_03_05_Marvell_Q4_FY26_financial_business_results_FINAL.pdf): 实际读p6全年数据中心约40%增长预期、p13产品/需求背景、p15收入类别变更脚注及p16全公司Q1指引；完整45页原件保存但不称通读。
- [Marvell FY2027 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000014/q127_8kx522026ex-991.htm): 读取收入终端市场定义表、当前/前季/去年同季收入表、收购纳入范围及发布日期；未重建全套利润和现金流。
- [Marvell quarter ended May 2 2026 Form 10-Q](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-26-000019/mrvl-20260502.htm): 读取终端市场收入表、唯一报告分部说明、数据中心产品需求解释及并购纳入；与前日8-K按同一数字对照。
- [Polymarket Gamma: MRVL FY2027 Q1 Data Center event and five markets](https://gamma-api.polymarket.com/events?slug=will-marvell-q1-data-center-revenue-be-above): 读取五个子合约完整description、题目、token映射、结束及关闭字段、当前解析状态；完整JSON保留。
- [Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.85B?](https://clob.polymarket.com/prices-history?market=15444808016939390136366603813937420398362508425617427546284721604674110774890&startTs=1778716800&endTs=1779926400&fidelity=60): 读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。
- [Official CLOB YES price history: Will Marvell Q1 Data Center revenue be above USD 1.9B?](https://clob.polymarket.com/prices-history?market=17371423556770029879189222365137773013648929593752442002979764677862763408752&startTs=1778716800&endTs=1779926400&fidelity=60): 读取311条记录的起止、事前样本、公布日前后状态；采用2026-05-26同一UTC时点，不用历史结果替代报价。
- [Snowflake Inc. — Form 10-Q for the quarter ended July 31, 2025](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001640147/1ced529d-f536-4668-bc46-6996092be424.pdf): Q2 FY2026产品收入为1,090.496m，可显示1,090.5m，同比报告为32%；NRR为125%。；125%表示所定义同一cohort在第二个12个月窗口的产品收入相对第一个窗口增长25%，包含该组扩张、收缩和不再使用的净结果。；32%与25%不能直接相减取得新客户贡献：观察期间、客户总体及比较分母不相同。即使期间统一，也要知道该cohort在总基期收入中的权重。；RPO既含递延收入也含未开票合同额；它不能完整反映未来usage增长及其发生时间，超出已承诺capacity的消费与新增采购未必已经进入现有RPO。

## Content relations
```json
[
  {
    "from": "zh-revenue-growth-expectations",
    "relation": "part_of",
    "to": "topic-D",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [客户、产品与收费方式](https://ou-liu-red-sugar.github.io/zh/notebook/customers-products-pricing/)
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [亏损、波动与持有能力](https://ou-liu-red-sugar.github.io/zh/notebook/loss-volatility-holding-capacity/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
