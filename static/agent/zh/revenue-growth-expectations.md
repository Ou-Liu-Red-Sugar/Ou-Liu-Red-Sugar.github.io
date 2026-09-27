# 收入增长与市场预期

拆开销量、净价、客户和产品组合，用真实业绩与预测市场辨认增长预期，再从股价反推所需收入，交给经营证据检验。

Entry: zh-revenue-growth-expectations | Node: NB-D02 | Language: zh | Editorial revision: 2026-09-27

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
收入增长，可能来自卖得更多，也可能来自卖得更贵。Coca-Cola（KO）在 2025 年第二季度的净营收同比增长了 1%，公司披露的全球标准箱销量却下降了 1%。收入和销量没有朝同一方向变化，此时我们就需要把增长拆开，看看多出来的收入究竟来自什么。[^ko-growth]

[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/)讨论了公司向谁提供什么、怎样收费。同一门生意的收入增加了，我们还要判断哪些变化能够延续：客户会不会继续购买，价格能否维持，新的产品又能卖出多少。准备买入股票时，我们还要比较自己的增长判断与公开预测有何不同，再看看眼前的价格需要怎样的经营表现来支撑。

## 销量、净价与产品组合 {#nb-d02-drivers}

先从商品销售看起。同一期间内，卖出的数量与每件商品的净价共同影响销售收入。标价为 100 元的商品，打折后未必还能贡献 100 元收入；预计退货、折让等安排，也会影响最终计入收入的金额。这里说的净价，是扣除相应调整后计入收入的价格，货款何时到账则要另看付款安排。把第 \(i\) 类商品的销量记为 \(q_i\)，对应的平均净价记为 \(p_i\)，收入记为 \(R\)，我们就可以写为：

\[
R=\sum_i q_i p_i.
\]

再把两期放在一起，我们就能分别观察卖出的数量、同类商品的净价和销售组合怎样变化。即使每款商品都没涨价，高价商品在销量中的占比提高，也能推高整体平均售价。因此，看到“平均卖得更贵了”，我们还需要继续拆解，才能知道是同款提价，还是顾客买了不同的东西。这些因素也会相互影响：提价可能使部分顾客减少购买，新产品则可能同时带来更多销量和更高的平均售价。

不同生意需要选不同的观察单位。下面沿用前篇的行业选择，看看收入增加时各自该查什么。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d02-consumer">

## 消费品与零售：销量与组合 {#nb-d02-consumer-story}

我们先分清公司说的销量发生在哪个环节。KO 向装瓶伙伴等客户销售浓缩液，公司与装瓶伙伴又会销售成品饮料；两种销量虽然都可以折成标准箱，却未必在同一时点变化。2025 年第二季度，KO 亚太地区的标准箱销量下降 3%，浓缩液销量下降 5%，公司将两者之间的差距解释为浓缩液发货时点的影响。[^ko-growth]如果一批浓缩液提前或延后发货，相关销量就可能落在不同的报告期，下游成品饮料的销售却未必同步变化。要进一步判断需求，我们还得对照下游销售和库存，看看购买是否持续、补货节奏又怎样变化。

再看零售，我们还可以分开看原有业务和新开门店。Walmart（WMT）的美国业务在 FY2025 可比销售增长 4.8%，公司将其解释为交易次数和销量增加；新开门店带来的销售，则需要另看。[^wmt]除了卖出多少，品类、包装和渠道变化也会改变平均售价。KO 披露的 price/mix 就合并反映了价格与这些组合变化，因此还不能直接读成所有商品都涨了相同比例的价格。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d02-software">

## 软件与云服务：新增客户与原有客户 {#nb-d02-software-story}

观察软件和云服务的增长时，我们既要看客户数量怎样变化，也要看每位客户购买了多少。按席位收费的软件可以观察账号与套餐，按用量收费的云服务则要看实际消耗。原有客户增加用量、减少购买或停止使用，都会改变收入；把同一群客户放在一起观察，才能看到这些变化合起来产生了什么结果。

<span data-text-versions id="nb-d02-software-text-1">Snowflake（SNOW）在截至 2025 年 7 月 31 日的披露中，净收入留存率为 125%，也就是所选同一群客户在后一个十二个月贡献的产品收入，比前一个十二个月多了 25%<span data-text-detail>（本次选取的是 2023 年 8 月使用平台且有容量合同的客户，比较 2023 年 8 月至 2024 年 7 月、2024 年 8 月至 2025 年 7 月两个窗口；停止使用的客户仍保留在计算中，后期收入记为零，客户合并等调整按公司方法处理）</span>。这个数字包含扩用、缩减和退出的净效果，衡量的是收入留存。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>同期披露的单季产品收入同比增长 32%，我们却不能拿 32% 减去 25%，就说其余来自新客户：两者的期间、客户范围和分母都不同。[^snow]

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d02-platform">

## 互联网平台与广告：交易与收费 {#nb-d02-platform-story}

平台上的活动增多，接下来要看哪些活动带来了收费。Alphabet（GOOGL／GOOG）的 2025 年报披露，Google Search & other 的付费点击次数增长 6%，平均每次点击收入增长 7%。这就给了我们两个观察方向：收费点击是否增加，每次点击平均带来了多少收入。平均单价还会受广告产品、设备和地区组合等因素影响，不能把它直接解释为所有广告统一提价。[^alphabet]

平台的广告收入能否继续增长，还要看广告主愿不愿意继续投入预算。沿[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/#nb-d01-platform-demand)中的采购关系，我们可以继续核对广告主的业务活动与投放效果。广告主愿意增加预算，可能因为生意扩大，也可能需要花更多钱才能获得同样的客户。因此，还要比较平台的点击和收费怎样变化、广告主的成交与获客成本又怎样变化，再判断这种收入增长能否持续。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d02-semiconductor">

## 半导体与硬件：交付量与产品结构 {#nb-d02-semiconductor-story}

芯片、系统、晶圆和设备各有自己的交付单位。研究收入增长时，需要先按产品拆开，再看交付数量与平均售价；新一代产品的占比提高，也可能在销量变化不大时推高收入。客户需要更多计算能力以后，还可能先提高现有设备的利用率，或在自研与外购之间重新安排采购，因此计算需求增长与某家供应商的收入增长之间，还隔着具体的产品选择和交付。相关交易过程可参照[《客户、产品与收费方式》](/zh/notebook/customers-products-pricing/#nb-d01-semiconductor)。

本篇后面会读到一项关于 Marvell（MRVL）数据中心收入的预测市场合约。这项业务包括用于 AI 系统、交换、服务器、存储和数据中心互连等场景的芯片。公司按终端市场单独披露这部分收入，因此后面比较合约门槛时，也要采用相应的数据中心收入，全公司收入则要另外看。[^mrvl]

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d02-industrial">

## 工业设备与工程服务：订单与履约 {#nb-d02-industrial-story}

新签订单增加以后，当期收入未必按同样幅度变化。设备需要制造和交付，工程要按计划施工，本期完成的工作也可能来自过去签下的订单。因此，判断当期收入为什么增长时，既要看新签订单，也要看过去的订单在本期完成了多少；交付提前或推迟，也可能使收入落在不同期间。

再看维保业务，已经安装的设备还可以带来持续服务的机会。Otis Worldwide（OTIS）在 2025 年报中列出几种增长来源：新梯交付后转入维保，取得其他已安装设备的维保合同，以及收购已有业务。[^otis]这些变化都可能增加服务规模，维修与改造又有各自的项目和收费。因此，我们还要核对实际签约范围和服务内容，不能直接把全部装机量乘以统一年费。后续《三张财报与经营活动》会进一步说明，订单和履约怎样进入报表。

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d02-healthcare">

## 医药与医疗服务：采用与支付 {#nb-d02-healthcare-story}

药品和器械可以观察产品采用、销售数量与净价，医疗服务则需要按诊疗项目和支付安排拆解。HCA Healthcare（HCA）2025 年收入增长 7.1%，公司同时披露，折合住院人次增长 2.9%，每折合住院人次收入增长 4.0%。<span data-text-versions id="nb-d02-healthcare-text-1">这里的折合住院人次，将门诊等活动也纳入同一个业务量指标<span data-text-detail>（公司按住院与门诊等业务的毛收入比例，将门诊活动折合到住院当量中；它不等于去重后的患者人数）</span>。[^hca]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

每单位服务收入的变化，还可能涉及病例复杂度、提供的诊疗项目和支付方结构，单看平均值还无法分清各自贡献。判断后续增长时，还要继续查产品或服务为什么得到采用、机构能否提供相应治疗，以及服务能按什么条件获得支付。即便患者的诊疗需求增加了，所研究的公司能取得多少业务，仍要看它提供的具体产品、服务能力与竞争情况。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d02-finance">

## 银行、支付与保险：规模与收费 {#nb-d02-finance-story}

比较金融业务的增长，先要分清各自的“规模”在衡量什么。JPMorgan Chase（JPM）的贷款本金、Visa（V）网络中的支付金额，都不能直接当作相应公司的收入。贷款会产生利息，支付活动会产生服务收费；保险还要把当期签下的保费与对应保障期间分开看。

| 业务 | 收入增长时先看什么 | 还需核对的关系 |
|---|---|---|
| 银行，以 JPM 为例 | 生息资产、资产收益和资金利息成本 | 净利息收入已扣去利息支出，手续费等非利息收入另看 |
| 支付网络，以 V 为例 | 支付金额、处理笔数与收费安排 | 不同收费类别对应不同活动，客户激励也会影响净收入 |
| 财险，以 Chubb（CB）为例 | 新业务、既有业务留存，以及费率与承保风险规模变化 | 签单保费主要随保障期间逐步确认为已赚保费，即相应的保费收入 |

[^jpm]<sup>，</sup>[^visa]<sup>，</sup>[^chubb]

活动发生与收费还可能错开一个期间。V 的季度服务收入主要依据前一季度的名义支付金额计费，所以比较这两项增长时，就要先把对应的期间对齐，再看价格和业务组合的影响。[^visa]

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d02-energy">

## 能源与原材料：销量、售价与服务 {#nb-d02-energy-story}

资源销售的收入可以来自卖得更多，也可以来自实现售价提高。看 ExxonMobil（XOM）时，我们需要分开观察上游资源销售、炼化和化工等业务，再核对各自的销量、实际售价与产品组合。[^xom]屏幕上的某个原油现货价，只是一个价格参照；品种、交易时间与合同不同，公司实际取得的售价也会不同。

如果公司提供的是加工和输运服务，我们就要看合同怎样收费。Kinder Morgan（KMI）的 Galena Park 凝析油加工设施，就与 BP North America 订有长期收费协议。[^kmi]研究这类业务时，需要核对客户使用了多少服务、合同怎样计费，不能直接套用油价涨幅。

</section>

## 增长的期间与比较口径 {#nb-d02-comparison}

无论选择哪个行业，我们都要先把比较的对象和期间对齐。同比把本期与上年相应期间比较，环比则与相邻的上一个期间比较。季节性很强的业务，旺季超过淡季并不难；若要判断业务是否扩大，还需要看相同季节和业务范围。公司买下一项业务以后，即使原有业务没有增长，合并收入也可能增加；出售业务则可能使报表收入下降。经营涉及多种货币时，当地销售与换算成报告货币后的收入，也会出现不同增幅。

回到开头 KO 的披露，公司会在报表收入之外，另列排除汇率及收购、剥离和结构变化影响的有机收入增长。它还把收入变化拆为价格与组合（price/mix）和浓缩液销量等因素：前者合并反映价格、产品及包装等组合的变化，后者主要对应公司向装瓶伙伴等客户供货的量。2025 年第二季度，报表净营收增长 1%，有机增长为 5%，price/mix 增长 6%，浓缩液销量下降 1%。[^ko-growth]

<figure><img src="/notebook/revenue-growth/ko-growth.svg" alt="KO 2025年第二季度报告净营收增长1%、有机收入增长5%、price/mix增长6%，浓缩液销量和标准箱销量均下降1%；不同指标分别比较。" loading="lazy"><figcaption>KO 2025 年第二季度。报表收入、有机收入及量价指标按各自定义列示；横向比较其方向与幅度。</figcaption></figure>

<span data-text-versions id="nb-d02-comparison-text-1">KO 当季的价格与组合变化对收入增长作出了贡献，汇率换算则带来了负面影响<span data-text-detail>（公司将汇率影响列为 −3%；price/mix 包含产品、包装、渠道和地区组合，不能全归为提价。披露比例经过取整，各项显示值未必严格相加）</span>。接下来判断能否延续时，就要继续查看消费者的购买、渠道补货和产品组合，不能把本季的有机增速直接推到未来每个季度。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

订单、收入和收款也各有自己的时间。以 Snowflake（SNOW）的容量合同为例，客户已经承诺购买的服务，可能还没有全部使用；公司披露的剩余履约义务（RPO）记录了已经签约、尚未确认的未来收入，产品收入则主要随客户实际消耗确认。[^snow]

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>合同承诺</small><strong>客户签下容量合同</strong><p>尚未确认的合同收入进入相应履约记录。</p></div><p class="business-flow-edge">客户随后使用平台资源</p><div class="business-flow-node"><small>服务使用</small><strong>实际消耗逐步发生</strong><p>用量与时间取决于客户的业务活动。</p></div><p class="business-flow-edge">按适用条款计量与确认</p><div class="business-flow-node"><small>报告期间</small><strong>确认相应产品收入</strong><p>本期收入可以来自此前签下的合同。</p></div></div><figcaption>SNOW 容量合同的一项时间关系：签约与实际消耗可以落在不同期间。</figcaption></figure>

<span data-text-versions id="nb-d02-timing-text-1">RPO 告诉我们还有多少已签约收入尚待确认；至于这些收入会落在哪些期间，还要看客户怎样使用<span data-text-detail>（RPO 包括递延收入，也包括未来才开票和确认的不可取消合同金额，因此不能都视为已收现；无最低购买承诺的按需安排等不计入，超出已有承诺的后续使用也未必反映在当前 RPO 中）</span>。判断合同增长能否转成后续收入时，我们就要先分清合同承诺、预计用量和已确认收入，再看客户是否仍需增加用量、供应方能否及时提供服务。这时可以让 Agent 协助阅读公司、客户与供应商的材料，核对这些变化发生的期间，并比较不同的增长解释。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

## 增长预期与事件报价 {#nb-d02-expectations}

有了自己的增长判断，我们还可以与公开的预测对照。公司指引和企业研报通常给出某个期间的收入或增长展望；Prediction Market（预测市场）则可以把问题写成一项明确的事件，例如收入是否会超过某个数值。若按规则判定为 YES，对应合约就支付 1 美元，否则支付 0。这样一来，YES 合约的价格就提供了一条概率报价线索，我们可以据此观察市场预期，再与自己对收入能否超过门槛的判断作比较。[^pm]

Marvell（MRVL）为 AI 系统、服务器、存储和互连等用途提供芯片，并按数据中心终端市场单独披露收入。有了这个可以单独核对的指标，我们就可以先预测某个季度的数据中心收入能达到多少，再等财报公布后查看结果。Polymarket 上就曾有一组这样的门槛合约，判断 **FY2027 第一季度、截至 2026 年 5 月 2 日的三个月，数据中心收入是否严格超过指定金额**。其中两项门槛分别为 18.5 亿美元和 19 亿美元。[^pm]上年同季收入为 14.406 亿美元，换算以后，两项门槛就分别要求同比增幅超过约 28.4% 和 31.9%。[^mrvl-base]

| 数据中心收入门槛 | 对应的同比增长边界 | 5 月 26 日 YES 历史价格 |
|---|---:|---:|
| 严格超过 18.5 亿美元 | 约 28.4% | 0.395 美元 |
| 严格超过 19 亿美元 | 约 31.9% | 0.185 美元 |

<span data-text-versions id="nb-d02-pm-text-1">两项价格来自财报公布前一天的同一时刻，分别给出约 39.5% 和 18.5% 的概率报价线索<span data-text-detail>（观察时点为 2026 年 5 月 26 日 16:00:04 UTC，采用官方历史价格序列；当时买卖两侧及深度没有恢复，因此不把序列点当作可以立即成交的买入价。两张合约是可同时成立的门槛事件，不是两个互斥收入区间；合约按官方原始金额判定，表中取整后的增速仅用于理解）</span>。[^pm-history]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure><img src="/notebook/revenue-growth/mrvl-expectations.svg" alt="2026年3月5日MRVL给出公司展望，5月26日记录数据中心收入门槛的预测市场事前价格，5月27日报告实际收入18.327亿美元，两项门槛均未超过。" loading="lazy"><figcaption>先记录当时的预测与报价，再与后来公布的同口径结果比较。</figcaption></figure>

5 月 27 日，MRVL 公布的数据中心收入为 18.327 亿美元，同比增长约 27.2%，这两项合约的结果均为 NO。[^mrvl]收入确实增长了，但没有超过这两道预先给定的门槛。读到“增长很快”时，我们还得继续问：相对于哪个基期，又是否达到了正在讨论的预期。

再回看财报公布前的公司展望，也要按同样的期间与业务范围比较。MRVL 在 3 月 5 日给出的约 40% 增长，是 FY2027 **全年**数据中心收入展望；同期的 24 亿美元、上下浮动 5%，则是下一季度的**全公司**收入指引。[^mrvl-outlook]它们分别提供全年路径和季度整体规模的参照，无法直接代替某一季度的数据中心门槛。<span data-text-versions id="nb-d02-pm-text-2">Agent 要继续查相应客户的采购、产品交付及并购范围<span data-text-detail>（这里的指引和后来实际收入都包含 Celestial AI 与 XConn 收购，本篇计算的是报告收入同比，尚未单独拆出并购贡献）</span>，才能形成自己的季度判断，再与当时的合约价格比较。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

这类事件合约明确了季度、业务范围和收入门槛，而讨论股票价格时，还要继续看增长能持续多久、能留下多少利润，以及股份数量怎样变化。要进一步讨论股价中已经计入了怎样的预期，我们需要先说明收入怎样形成每股盈利。

## 股价对应的增长要求 {#nb-d02-price-in}

我们对公司增长有了自己的判断，还可以反过来看看，给定的股价需要怎样的经营表现来支撑。这里换回 KO，用它的全年数据来说明收入、利润与每股价格之间的关系。从收入计算利润时，还要扣除相应的成本、费用和税费，并计入其他损益；再把最终归属普通股股东的利润除以相应股数，就得到每股收益（EPS）。假设所用净利率为 \(m\)，收入为 \(R\)，股数为 \(N\)，那么 \(\mathrm{EPS}=mR/N\)。

市盈率（PE）表示股价相对于每股收益的倍数。使用预计盈利计算时，就得到前瞻市盈率；这里必须同时说清预计的是哪一年的盈利。若给定股价 \(P\)，并假设市场愿意为指定年度的每股盈利支付 \(M\) 倍，我们就可以从价格反推这一年的 EPS、利润和收入要求：

\[
\mathrm{EPS}_{\mathrm{要求}}=\frac{P}{M},\qquad
R_{\mathrm{要求}}=\frac{PN}{Mm}.
\]

先把实际数据与计算条件摆出来。沿用公司调整后的可比口径，KO 的 2025 年净营收为 480.62 亿美元，归属股东净利润为 129.58 亿美元，由此算出的净利率约为 27.0%；全年稀释加权平均股数为 43.13 亿股。[^ko-base]这些是本次反推的基期参照。

| 输入 | 本次采用 | 身份 |
|---|---:|---|
| 股价 | 78.76 美元 | 2026 年 4 月 30 日收盘价，由 5 月 4 日 DBS 报告列示 |
| 基期可比净营收 | 480.62 亿美元 | KO 披露的 2025 年数据 |
| 基期可比归属股东净利润 | 129.58 亿美元 | KO 披露的 2025 年数据 |
| 预计盈利期间 | 2026 全年 | 本篇指定 |
| 预计净利率 | 约 27.0% | 假设保持 2025 年上述比率 |
| 预计稀释加权平均股数 | 43.13 亿股 | 假设保持 2025 年股数 |
| 前瞻 PE | 26 倍 | 借用 DBS 用于目标价的倍数，作为本篇条件 |

<span data-text-versions id="nb-d02-price-text-1">DBS 在这份报告中为目标价选用了 26 倍前瞻 PE；我们借用这个倍数，并明确把它用于 KO 的 2026 全年可比盈利<span data-text-detail>（报告没有在该处完整定义其 forward PE 的盈利期间，本篇的年度安排不用于复刻报告目标价。可比收入与可比利润属于公司非 GAAP 口径，与前面的有机增长也不同；计算用 129.58／480.62 的精确比率，约 27.0% 仅用于显示。股数采用全年稀释加权平均股数，未来保持不变是本篇条件）</span>。[^dbs]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

在这些条件下，先用 78.76 美元除以 26，就得到所需的每股收益，约为 3.03 美元；再按所设股数与净利率反推，2026 全年可比净营收需要达到约 **484.6 亿美元**，比 2025 年同口径增长约 **0.8%**。这个结果对应的，仍是刚才设定的那组条件。若换一个 PE，或让利润率与股数发生变化，所需增长也会随之改变。

<div data-experiment-slot="nb-d02-price-lab"></div>

可以先只调整 PE，保持其他条件不变：选择 22 倍时，所需收入增长约 19.2%；选择 30 倍时，所需收入则可以比基期少约 12.6%。这说明“价格计入了多少增长”还取决于市场愿意为盈利支付多少倍。只从一个股价出发，无法同时唯一确定增长、利润率与定价倍数；反推的用途，是把不同条件下的经营要求列出来，再交给基本面证据检验。

有了这些收入要求，Agent 还可以进一步拆解，看看客户数量、用量、价格和产品组合各需达到怎样的水平，再核对客户的购买与公司的供货能力能否满足这些要求，也要解释净利率为何能够保持或变化。若公开预测给出不同增速，就核对分歧究竟来自销量、价格、汇率、并购范围，还是盈利条件。比较时，还要沿用同一公司、业务范围和期间；MRVL 的单季数据中心门槛与 KO 的全年可比收入要求，分别回答了各自公司的问题。等到新的销售、订单或成本资料出现，再更新对应判断。

## 从增长到盈利 {#nb-d02-next}

MRVL 的例子让我们看到，收入增长与超过预期门槛是两件事；KO 的反推又说明，所需增长会随利润率、股数和定价倍数而变化。要继续判断这些条件能否成立，我们还得看取得收入时需要增加哪些投入。下一篇《成本结构与经营杠杆》将继续讨论：收入增加以后，哪些成本随之变化，又能留下多少利润。

<link rel="stylesheet" href="/notebook/business-branches.css">


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
- [Marvell FY2026 Q1 earnings release / 8-K Exhibit 99.1](https://investor.marvell.com/sec-filings/all-sec-filings/content/0001835632-25-000115/q126_8kx532025ex-991.htm): 读取当年已披露Data center 1,440.6百万美元及季度期间；与最新表所列同季数一致。
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
