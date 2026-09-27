# 客户、产品与收费方式

从客户付款和企业交付认清一门生意，选择行业继续拆解业务，再沿上下游、具体订单与企业研报核验需求。

Entry: zh-customers-products-pricing | Node: NB-D01 | Language: zh | Editorial revision: 2026-09-27

## Reference use
This is reference material for the learner's current request. Use the supplied entry to teach the selected concept. Retrieve the relevant original unit when explaining a claim that depends on its assumptions, figures or rules; the reading list is a map for that work, not a prerequisite to the first lesson. Keep facts, supplied examples and inference distinct. Editorial access dates describe the author's work. The empty runtime_reading_log is an optional record field, not a requested response. Author-supplied scope notes below constrain factual use of the material; the learner's request determines the teaching task and first response.

## Author-supplied scope notes (reference only)
<author_scope_notes>
按读者选定行业使用本篇。各行业可独立读，使用者、采购者、付款者与交付收费分别辨认；上下游只沿有依据的业务关系延伸。本文的案例支持相应业务机制，不预设需求增长、订单兑现或投资回报。企业研报保留预测时点及条件，实际来源和阶段按正文及脚注。医疗使用美国关系案例，保险具体条款依产品；产业角色图不自动形成具名交易。后续收入增长、成本利润和财报确认由对应词条展开。
</author_scope_notes>

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q。保留局部变量的明确定义。金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值。主文通常保留不超过三位小数，很小的数值或复算输入保留必要精度；计算使用原始数据。直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中。中文语句使用中文标点，代码、公式和原文引用保留各自格式。基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中。
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "required_readings": [],
  "required_readings_by_branch": {
    "consumer": [
      {
        "source_id": "nb-d01-nke",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm"
        },
        "required_unit": {
          "locator": "Item 1，HTML 行 143—175；Revenue Recognition，行 1952—1955；批发客户信用，行 423—426",
          "scope": "NKE 设计、开发及销售商品，绝大部分产品由独立承包商制造。；自有门店和数字渠道直营与批发并存；批发交货和消费者购入是不同交易阶段。；批发与直营的控制转移、付款和退货折扣安排存在差别。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "NIKE FY2025 Form 10-K — Business and Revenue Recognition",
        "authors": [
          "NIKE"
        ],
        "version": "财年截至 2025-05-31"
      },
      {
        "source_id": "nb-d01-wmt",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm"
        },
        "required_unit": {
          "locator": "业务概述行 226—248；Sam’s Club 行 303—318；会员收入行 1929—1931",
          "scope": "WMT 有商品零售和会员服务，会员收费对应期间权益。；同一购物活动可以涉及商品价款与会员费两种不同收费。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
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
        "source_id": "nb-d01-msft",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.microsoft.com/investor/reports/ar25/index.html"
        },
        "required_unit": {
          "locator": "行 258—276，Microsoft 365 Commercial、Dynamics；行 392—400，Licensing Options",
          "scope": "Microsoft 365 商业云、Office 本地许可和持续服务对应不同交付。；企业可以在批量许可协议下购买多份软件许可和云服务；用户数量、购买功能及使用范围需要区别。；软件保障可以提供合同期内的新版本、升级和支持权益。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Microsoft 2025 Annual Report — Microsoft 365 and Licensing Options",
        "authors": [
          "Microsoft"
        ],
        "version": "FY2025 年报"
      },
      {
        "source_id": "nb-d01-aws",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://aws.amazon.com/pricing/"
        },
        "required_unit": {
          "locator": "How does AWS pricing work；How do you pay for AWS，行 239—254 及价格方式标题",
          "scope": "AWS 多数云服务采用按用量计费，也有固定套餐和承诺安排。；客户具体工作负载、所用资源和购买安排共同影响账单。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "AWS Product and Service Pricing",
        "authors": [
          "Amazon Web Services"
        ],
        "version": "动态官方页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-netflix",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://aws.amazon.com/blogs/database/netflix-consolidates-relational-database-infrastructure-on-amazon-aurora-achieving-up-to-75-improved-performance/"
        },
        "required_unit": {
          "locator": "Business challenge；Achieving cost-efficiency；Migration results；About the authors，行 237—276、299—316",
          "scope": "Netflix ODS 团队此前在 AWS EC2 上自管 PostgreSQL 兼容数据库，随后把若干应用迁到 Aurora PostgreSQL。；案例将降低许可和维护负担、简化运行管理与成本效率联系起来；客户降本可以伴随同一云商内部的服务组合变化。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Netflix consolidates relational database infrastructure on Amazon Aurora, achieving up to 75% improved performance",
        "authors": [
          "Netflix 与 AWS 工程团队"
        ],
        "version": "2025-11-26；迁移结果截至 2025 年 10 月"
      },
      {
        "source_id": "nb-d01-talen",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699"
        },
        "required_unit": {
          "locator": "2025 8-K 附件 99.1，PDF 第 4 页，行 55—67；2026 Q2 10-Q，PDF 第 46 页 AWS PPA 术语，行 2054—2059",
          "scope": "2025 年扩展 PPA 约定供电随时间分阶段增加。；原公告把输电改造与供电结构转换相连，后续 10-Q 确认修订 PPA 于 2026 年 4 月转换。；合同、具体供电节点和客户机房可用容量应分别核对。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Talen Energy Expands Nuclear Energy Relationship with Amazon; Q2 2026 AWS PPA update",
        "authors": [
          "Talen Energy"
        ],
        "version": "合同公告 2025-06-11；进展披露 2026-08-05"
      },
      {
        "source_id": "nb-d01-talen-support-1",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://talenenergy.gcs-web.com/static-files/649bfa16-a54e-4997-914b-a8a5d2e00900"
        },
        "required_unit": {
          "locator": "PDF 第 46 页 AWS PPA",
          "scope": "Talen Q2 2026 Form 10-Q",
          "purpose": "核对正文涉及的后续进展或具体产品说明。"
        },
        "title": "Talen Q2 2026 Form 10-Q",
        "authors": [
          "Talen Energy"
        ],
        "version": "合同公告 2025-06-11；进展披露 2026-08-05"
      },
      {
        "source_id": "nb-d01-cma",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf"
        },
        "required_unit": {
          "locator": "本轮 PDF 第 109 页 §§3.236—3.237 关于新增客户/负载和存量变动的区别；第 269 页 §6.70；既有本地迁移阅读见 external-sources.md E2",
          "scope": "云客户支出改变可能来自存量用量变化、成本优化、工作负载转移或新增负载。；外部研究可以帮助比较已有系统迁移和新增工作负载选择。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "CMA Cloud Infrastructure Services — Final decision report",
        "authors": [
          "CMA"
        ],
        "version": "2025-07-31 报告；公布版 2025-08-01"
      }
    ],
    "platform": [
      {
        "source_id": "nb-d01-seller",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://sell.amazon.com/pricing/"
        },
        "required_unit": {
          "locator": "Selling plans、FBA/merchant fulfillment 选项、Referral fees，行 180—258、294—308",
          "scope": "第三方商家向平台购买销售服务，可能另选平台仓储配送。；商家服务费用与消费者购买商品的价款是不同交易关系。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Sell on Amazon — How much does it cost to sell on Amazon?",
        "authors": [
          "Amazon"
        ],
        "version": "美国官方卖家页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-b01-source-alphabet",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm"
        },
        "required_unit": {
          "locator": "How We Make Money，行 227—239；TAC 与内容采购，行 959—976",
          "scope": "平台使用者与广告付款者可以不同；Google 自有位置和合作伙伴位置都可以承载广告。；YouTube 服务与 Google One 等也有消费者订阅收入。；广告分销、网络合作方和内容提供者存在不同付款关系。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Alphabet 2025 Form 10-K",
        "authors": [
          "Alphabet"
        ],
        "version": "本篇材料核查日期：2026-09-24；具体版本与采用范围见正文脚注。"
      },
      {
        "source_id": "nb-d01-bkng",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm"
        },
        "required_unit": {
          "locator": "行 855—864，performance marketing expenses and efficiency",
          "scope": "BKNG 披露其效果营销主要使用搜索引擎，尤其 Google，以及联盟、比价和社交渠道。；其营销效率受点击成本、转化、取消和渠道组合等影响。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Booking Holdings 2025 Form 10-K — Marketing",
        "authors": [
          "Booking Holdings"
        ],
        "version": "年度截至 2025-12-31"
      }
    ],
    "semiconductor": [
      {
        "source_id": "nb-d01-nvda",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm"
        },
        "required_unit": {
          "locator": "行 187—207；Manufacturing 行 284—289；直接/间接客户行 1279—1288",
          "scope": "NVDA 的计算平台可以以机架系统、子系统、模块及相关软件服务交付。；直接采购者与实际部署使用者可以不同。；公司采用晶圆代工和合同制造，明确提到 TSMC 制造晶圆与 CoWoS 封装技术。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customers",
        "authors": [
          "NVIDIA"
        ],
        "version": "财年截至 2026-01-25"
      },
      {
        "source_id": "nb-d01-tsmc",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://investor.tsmc.com/static/annualReports/2025/english/index.html"
        },
        "required_unit": {
          "locator": "股东信行 18—24；About TSMC 行 64—77",
          "scope": "TSMC 以制造客户产品的纯代工模式经营，并提供先进封装等技术。；制造和封装需要公司进行相应技术及产能投入。；2330 为台湾上市股票代码，TSM 为美国存托股份交易代码。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "TSMC 2025 Annual Report Website — About TSMC and Shareholder Letter",
        "authors": [
          "TSMC"
        ],
        "version": "2025 年度报告"
      },
      {
        "source_id": "nb-d01-asml",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.asml.com/en/company"
        },
        "required_unit": {
          "locator": "公司概述，行 138",
          "scope": "ASML 为芯片制造商提供在硅片上制造图案所用的光刻设备、软件和服务。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "ASML — About the company",
        "authors": [
          "ASML"
        ],
        "version": "动态公司页面，读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-coreweave",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s205.q4cdn.com/133937190/files/doc_financials/2026/q2/CRWV-US-CORRECTED-TRANSCRIPT-CoreWeave-Q2-2026-Earnings-Call-11August2026.pdf"
        },
        "required_unit": {
          "locator": "PDF 第 8 页 A100 合同；问答中续约范围，既有文本行 576—590",
          "scope": "管理层称新签了一份延续到 2029 年的 A100 算力服务合同。；旧代设备可以继续承接付费服务，存量设备使用与购买新硬件需分别观察。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "CoreWeave Q2 2026 Earnings Call — Corrected Transcript",
        "authors": [
          "CoreWeave；FactSet 转录"
        ],
        "version": "2026-08-11"
      },
      {
        "source_id": "nb-d01-aws-gpu",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf"
        },
        "required_unit": {
          "locator": "PDF 第 2 页，AI chips / Trainium / NVIDIA 条目，行 35—42",
          "scope": "AWS 同时使用自研 Trainium 并公开宣布从 2026 年开始部署更多 NVIDIA GPU 的安排。；云客户增加计算服务时，采购可以落到不同类型的芯片。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Amazon Q1 2026 Earnings Release — AI chip deployment highlights",
        "authors": [
          "Amazon"
        ],
        "version": "2026-04-29"
      },
      {
        "source_id": "nb-d01-kgi",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/tsmc_2330-tt_01102025e.pdf"
        },
        "required_unit": {
          "locator": "PDF 第 1 页：Revise up 2026 CoWoS estimates；Early 2027 outlook；第 10 页材料使用说明",
          "scope": "报告以当时 AI 客户计划及交易安排为依据，上调 2026 年 CoWoS 需求和产能预测。；其对 2027 年短缺的判断以客户维持当时需求水平为条件，可用来演示研报假设如何等待后续公司材料校准。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "KGI TSMC Company Update — 3Q25 preview: AI outlook has turned more promising",
        "authors": [
          "KGI"
        ],
        "version": "2025-10-01"
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
          "locator": "Item 1，行 172—178、205—222",
          "scope": "新设备客户包括开发商、总承包商和政府机构；通常有预付和按里程碑付款。；维保客户通常为业主和设施管理方，可以不同于原设备采购者。；OTIS 维护自家和其他厂商设备，服务还包含维修与改造。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Otis Worldwide 2025 Form 10-K — New Equipment and Service",
        "authors": [
          "Otis Worldwide"
        ],
        "version": "年度截至 2025-12-31"
      },
      {
        "source_id": "nb-d01-fluor",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/1124198/000112419826000007/flr-20251231.htm"
        },
        "required_unit": {
          "locator": "行 205—208；Types of Contracts，行 310、323—333",
          "scope": "FLR 提供工程、采购、施工和项目管理服务。；可报销合同按商定费率/费用结算，总价合同需要承包方估算工作和成本；成本超支的承担不同。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Fluor 2025 Form 10-K — Business and Types of Contracts",
        "authors": [
          "Fluor"
        ],
        "version": "年度截至 2025-12-31"
      },
      {
        "source_id": "nb-a01-source-02",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability"
        },
        "required_unit": {
          "locator": "公告行 68—72；EnBW Heilbronn 页面 Project phases、Project diary，行 40—59",
          "scope": "GE Vernova 2023 年公告取得 EnBW 两个项目订单，范围包括设备、建设、软件与后续服务，并由国际联合体执行。；业主项目页分别更新建设、主要部件交付、启动和商业投运节点，足以示范订单之后继续追进度。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "GE Vernova：2023年 EnBW 发电项目订单公告",
        "authors": [
          "GE Vernova"
        ],
        "version": "本篇查阅日期：2026-09-23"
      },
      {
        "source_id": "nb-d01-gev-support-1",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.enbw.com/company/topics/coal-phaseout/heilbronn-combined-heat-and-power-plant/"
        },
        "required_unit": {
          "locator": "Project phases；德语版同表可确认英文 Q23 排版笔误实际为 Q3/Q4",
          "scope": "EnBW Heilbronn combined heat and power plant — Project phases",
          "purpose": "核对正文涉及的后续进展或具体产品说明。"
        },
        "title": "EnBW Heilbronn combined heat and power plant — Project phases",
        "authors": [
          "EnBW"
        ],
        "version": "供应方公告 2023-11-06；业主动态项目页读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-gev-support-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.enbw.com/unternehmen/themen/kohleausstieg/heizkraftwerk-heilbronn/"
        },
        "required_unit": {
          "locator": "2026-09-27 V3核验读取Projektphasen，行44，暂定Q3/Q4 2027商业投运安排。",
          "scope": "EnBW Heilbronn — Projektphasen",
          "purpose": "核对正文涉及的后续进展或具体产品说明。"
        },
        "title": "EnBW Heilbronn — Projektphasen",
        "authors": [
          "EnBW"
        ],
        "version": "供应方公告 2023-11-06；业主动态项目页读取于 2026-09-27"
      }
    ],
    "healthcare": [
      {
        "source_id": "nb-d01-jnj",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm"
        },
        "required_unit": {
          "locator": "Item 1，行 214—217、225—235；收入确认既有定位见 health-finance-branches.json",
          "scope": "JNJ 同时经营药品与医疗器械。；药品可经零售商、批发商、分销商、医院和专业人员分销；器械有对应专业用途与机构采购渠道。；临床使用者、机构买方与最终支付方需要分别识别。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Johnson & Johnson 2025 Form 10-K — Innovative Medicine and MedTech",
        "authors": [
          "Johnson & Johnson"
        ],
        "version": "财年截至 2025-12-28"
      },
      {
        "source_id": "nb-d01-hca",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf"
        },
        "required_unit": {
          "locator": "PDF 第 104—105 页，Note 1 Revenues，行 4898—4945",
          "scope": "HCA 提供住院和门诊服务，多数患者合同还涉及政府项目、商业保险或管理式医疗等第三方付款者。；支付可按病例、日或服务项目等约定，服务交付、收入确认与收款需要区别。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
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
          "locator": "PDF 第 97 页/报告第 65 页，行 8140—8172",
          "scope": "JPM 的消费与社区银行服务个人和小企业，包含存款、贷款、账户和支付服务。；客户存入的本金、银行放出的贷款本金、利息及服务费用承担不同权利和义务。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
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
          "locator": "业务模式行 181—219；Note 1 Organization，行 1960—1961；结算资金责任沿既有 F2 短段记录复用",
          "scope": "V 向支付体系参与者提供网络处理服务，本身不发卡或向持卡人授信。；交换费一般由收单方向发卡方支付，商户收单费用与 V 对机构收取的费用需区分。；网络流经金额不等同 V 的营业收入。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Visa FY2025 Form 10-K — Network Model and Transaction Processing",
        "authors": [
          "Visa"
        ],
        "version": "财年截至 2025-09-30"
      },
      {
        "source_id": "nb-d01-chubb",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://about.chubb.com/stories/2025-chubb-letter-to-shareholders.html"
        },
        "required_unit": {
          "locator": "股东信行 224、234—250；英国商业财产险产品页行 348—392",
          "scope": "Chubb 为企业和个人承保风险，也经营寿险业务。；其商业财产险可以约定财产损坏及损坏后的营业中断保障，赔付依保单及理赔核定。；公司把损失准备金与履行赔付能力联系起来；收取保费以后仍可能承担后续义务。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
        },
        "title": "Chubb 2025 Letter to Shareholders; Commercial Property Insurance",
        "authors": [
          "Chubb"
        ],
        "version": "2025 年度股东信；官方产品页读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-chubb-support-1",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.chubb.com/uk-en/business/products/property-insurance.html"
        },
        "required_unit": {
          "locator": "Who it’s for；What it covers；claims handling",
          "scope": "Chubb Commercial Property Insurance — UK",
          "purpose": "核对正文涉及的后续进展或具体产品说明。"
        },
        "title": "Chubb Commercial Property Insurance — UK",
        "authors": [
          "Chubb"
        ],
        "version": "2025 年度股东信；官方产品页读取于 2026-09-27"
      },
      {
        "source_id": "nb-d01-chubb-support-2",
        "access": {
          "kind": "selected_chapters",
          "uri": "https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/R17.htm"
        },
        "required_unit": {
          "locator": "V3专业核验：行7、64、86—90，未付赔款责任、估计与长期索赔；未取金额表。",
          "scope": "Chubb FY2025 Form 10-K — Unpaid losses and loss expenses, and Future policy benefits",
          "purpose": "核对正文涉及的后续进展或具体产品说明。"
        },
        "title": "Chubb FY2025 Form 10-K — Unpaid losses and loss expenses, and Future policy benefits",
        "authors": [
          "Chubb"
        ],
        "version": "2025 年度股东信；官方产品页读取于 2026-09-27"
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
          "locator": "行 29—55：Upstream、Product Solutions、Low Carbon Solutions",
          "scope": "XOM 同时有油气生产、下游燃料及化工业务，最终服务不同用途。；从开采、加工及商品销售切面识别业务，有助于分别研究产品价格和加工关系。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
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
          "locator": "Overview 行 19—21；Kinder Morgan Condensate Processing Facility 行 272—278",
          "scope": "KMI 提供成品油等运输、储存与调和服务。；其 Galena Park 附近凝析油加工设施由与 BP North America 的长期收费协议支持。；同样处理能源商品，企业也可以通过提供加工服务取得收费。",
          "purpose": "按所选行业的当前问题读取对应原文，核对业务关系或案例；其余资料按需参考。"
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
客户付钱，买到的可能是一件商品、一段时间的算力，也可能是一份保险。卖商品要交货，提供云服务要持续运行设备，保险公司则要按合同承担未来的赔付责任。研究一家公司时，我们就要先弄清它做的是哪些生意：客户买到了什么，公司需要做什么，又按什么方式收费。

[《投资组合、保证金与对冲策略》](/zh/notebook/settlement-margin-cash/)讨论了怎样安排持仓与对冲；要判断该持有哪些股票，还得进一步理解背后的生意。客户为什么愿意购买、订单增加是否意味着需求变强，都需要从具体交易中寻找答案。

## 使用者、采购者与付款者 {#nb-d01-business}

知道客户买到了什么，还要分清谁在使用、谁作出采购决定，以及谁来付款。个人给自己买鞋时，选购、使用和付款都由自己完成；企业给员工采购软件时，使用者与付款者就分开了。医疗服务中，患者接受诊疗，还可能由保险或政府项目支付部分费用。即便是同一家公司，面向不同客户时，提供的产品或服务、收取费用的方式也可能不同。

可以先选一个熟悉的行业，从具体例子读起。我们会先看这门生意怎样运转，再讨论怎样核实客户的需求；想对照不同生意时，可以切换行业或展开全部。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d01-consumer">

## 消费品与零售：商品、渠道与库存 {#nb-d01-consumer-story}

### 从品牌出货到消费者购买 {#nb-d01-consumer-channels}

我们先看 NIKE（NKE）的一件商品怎样到达消费者手中。NKE 负责商品的设计和营销，生产则主要交给独立制造商；商品随后可以批发给零售客户，也可以通过自有门店和网站直接卖给消费者。批发时，零售客户向 NKE 采购，再把商品卖给顾客；直营时，顾客直接向 NKE 付款。两条路径最终都把商品交给消费者，但 NKE 面对的直接客户和收款环节不同。[^nke]

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">批发路径</p><div class="business-flow-grid"><div class="business-flow-node"><small>品牌方</small><strong>NIKE（NKE）</strong><p>组织产品与供货。</p></div><p class="business-flow-edge">批发：向零售客户交货并结算</p><div class="business-flow-node"><small>零售客户</small><strong>备货与销售</strong><p>持有商品并面向消费者销售。</p></div><p class="business-flow-edge">终端：消费者购买商品并付款</p><div class="business-flow-node"><small>使用与购买</small><strong>消费者</strong><p>取得所购买的商品。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">直营路径</p><div class="business-flow-grid"><div class="business-flow-node"><small>品牌直营</small><strong>NIKE（NKE）</strong><p>通过自有门店或网站销售。</p></div><p class="business-flow-edge">NKE 交付商品；消费者直接付款</p><div class="business-flow-node"><small>直接购买</small><strong>消费者</strong><p>向品牌购买并取得商品。</p></div></div></div><figcaption>批发路径中，NKE 的直接客户是零售商；直营时，NKE 直接面向消费者。</figcaption></figure>

沿着这两条销售路径继续看，谁持有库存、谁承担后续工作，也会有所不同。批发时，零售客户接货后还要储存、陈列商品，等待消费者购买。采用直营方式时，NKE 还要承担经营门店、处理线上订单、配送和售后等工作。<span data-text-versions id="nb-d01-consumer-text-1">商品交给下一方后，退货、折扣和付款怎样安排，还要看具体合同<span data-text-detail>（退货权、促销补贴和结算期限会影响各方最终收到多少钱，以及各自承担哪些库存和销售责任）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>所以我们既要看商品卖了多少，也要分清这里说的是品牌向零售客户出货，还是商品已经卖到了消费者手中。

再看 Walmart（WMT），它采购商品后向消费者销售，同时也提供会员服务。顾客买走一件商品，取得的是这件商品；支付会费，则取得一定期间内的购物、配送等权益。两者可以服务于同一次购物活动，WMT 既要交付顾客买下的商品，还要在约定期间持续提供会员权益。至于第三方商家在平台上卖货，还会涉及商家向平台支付服务费，我们可以在“互联网平台与广告”一节继续比较。[^wmt]

### 从订单追到实际需求 {#nb-d01-consumer-demand}

回到 NKE 的批发业务，订单增加还要结合零售客户的销售情况来理解。零售客户多进货，可能因为顾客买得更多，也可能是在库存较低时补货。如果货已经送进渠道，却还没有被消费者买走，品牌出货和终端购买就处在不同阶段。我们还要看零售客户的库存、促销和后续补货：同样是商品售出，依靠折价清库存与按原价畅销，反映的购买意愿也不同。等到商品已经被消费者买走，零售客户又能持续补货，需求判断才多了一层依据。

Agent 可以先查 NKE 的渠道说明，再沿已经确认的销售关系读取零售客户的材料，核对零售客户进了多少货、库存怎样变化、又卖出了多少。研究直营时，就直接看消费者的购买，并用相关品类的消费资料帮助解释变化。企业研报若把销售收入增长解释成品牌需求增强，我们也要分别核对终端销量、渠道补货和净售价的变化，看增长究竟来自哪里。这些材料最终要帮助我们判断，消费者是否持续购买，以及这种购买怎样支持 NKE 在各个渠道的销售。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d01-software">

## 软件与云服务：使用、许可与账单 {#nb-d01-software-story}

### 从使用功能到购买服务 {#nb-d01-software-contracts}

员工每天使用一套办公软件，企业为此购买的可能是一定数量的账号和订阅期内的服务。企业采购 Microsoft（MSFT）的应用订阅时，要先确定使用范围，再选择套餐、开通账号。员工通过这些账号使用软件，供应商则持续提供运行、更新和支持。企业有多少员工、开通了多少账号，以及愿意继续为哪些功能付费，需要分别看。员工增加可能带来更多使用需求，实际采购还要看哪些人需要软件、选择什么套餐，以及原有许可怎样安排。[^msft]

软件也可以交给客户在自己的设施中运行。这时，客户要准备本地运行所需的设施，供应商则交付软件使用权，再按约定提供升级、维护或支持。<span data-text-versions id="nb-d01-software-text-1">软件使用权与后续维护服务的期限，可以在同一份合同中分别约定<span data-text-detail>（软件许可可能有期限，也可能允许客户长期使用某个版本；后续升级和支持又有各自的合同期间。同一企业协议还可能同时包含本地许可和云服务，要按客户实际取得的权利分别理解）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>云服务还提供了另一种安排：客户直接付费使用供应商提供的计算资源。

Amazon（AMZN）的 AWS 提供计算、存储、数据库等服务。AWS 需要先准备可用的设备和运行条件；客户运行应用时，会使用计算资源、保存数据，也可能调用数据库。AWS 按照客户选择的服务、实际用量和合同中的计费约定计算费用。<span data-text-versions id="nb-d01-software-text-2">按用量计费还可以与套餐或消费承诺结合<span data-text-detail>（按量、承诺折扣和固定套餐对应不同付款安排，不能把某一种服务的计量单位用于全部云业务。签下合同承诺、容量可用、实际使用和收款，也要按各自发生的时间观察）</span>。[^aws]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>客户</small><strong>应用与计算任务</strong><p>运行应用、保存数据、执行计算。</p></div><p class="business-flow-edge">使用计算、存储或数据库服务</p><div class="business-flow-node"><small>云服务方</small><strong>可用容量</strong><p>准备设备、电力和运行服务。</p></div><p class="business-flow-edge">按使用和合同计费</p><div class="business-flow-node"><small>付款安排</small><strong>客户账单</strong><p>计量单位、套餐和承诺共同影响金额。</p></div></div><figcaption>客户运行应用和执行计算任务时，会使用相应资源；供应方准备设备和电力，提供服务能力。费用按所用服务及合同安排计算。</figcaption></figure>

### 把客户需求与供给条件接起来 {#nb-d01-software-demand}

客户希望少花钱，也未必就要离开原来的供应商。Netflix（NFLX）与 AWS 工程师在一份联合案例中介绍，NFLX 团队原来在 AWS EC2 上自行管理一批关系型数据库，后来把其中若干应用迁到 Aurora 托管服务，以减少许可费用和运行维护负担。服务组合变了，客户仍在使用同一家云供应商。软件许可、内部维护和云服务各有相应费用，因此 Agent 读到“客户降低成本”时，还要继续辨认省下的是哪笔钱，以及新的服务由谁提供。[^netflix]

云客户要增加用量，AWS 也得按时准备好相应的服务能力。以电力为例，Talen Energy（TLN）在 2025 年公布与 AWS 的扩展供电安排，约定分阶段增加供电。签订长期合同以后，还要核对配套工程何时完成、各阶段供电何时开始。再把这些时间与机房和设备的建设进度、客户的使用计划相对照，我们就能检查供电是否跟得上服务需求。[^talen]

核验云需求时，我们既要知道客户为什么继续使用或增加用量，也要看供应商能否按时提供服务。如果一家企业为了向自己的客户提供付费服务而增加算力，Agent 还可以进一步查看它的业务为什么需要这些计算资源。外部研究也能帮助我们区分不同的使用变化：英国竞争与市场管理局（CMA）在 2025 年的云市场研究中，区分了原有应用的用量变化、成本优化、应用迁移和新增任务。因此，客户是否继续为已有应用购买服务、又把新的应用或计算任务交给哪家供应商，需要分别核对。[^cma]

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d01-platform">

## 互联网平台与广告：参与者与付款关系 {#nb-d01-platform-story}

### 一次交易中的不同客户 {#nb-d01-platform-participants}

在 Amazon（AMZN）的第三方商家店铺购买商品时，买家购买的是商家的货，商家则在使用平台提供的服务。商家把商品放到平台上销售，按所选销售计划和交易安排付费；如果还需要平台仓储、配送，又会购买相应的履约服务。顺着这笔交易看下去，同一平台上就出现了两种购买关系：消费者为商品付款，商家为平台服务付款。[^seller]

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>商品买家</small><strong>消费者</strong><p>向第三方商家购买商品。</p></div><p class="business-flow-edge">商品交付与商品价款</p><div class="business-flow-node"><small>商品卖家</small><strong>第三方商家</strong><p>提供商品，并选择所需平台服务。</p></div><p class="business-flow-edge">平台服务与相应费用</p><div class="business-flow-node"><small>服务提供者</small><strong>平台</strong><p>提供交易支持，以及可选的履约、广告等服务。</p></div></div><figcaption>商品交易与平台服务分别发生：买家向商家买商品，商家再按安排购买平台服务。</figcaption></figure>

<span data-text-versions id="nb-d01-platform-text-1">商家使用平台仓库时，还要看货物属于谁、平台负责哪些工作<span data-text-detail>（由谁拥有货物、谁保管货物、谁代收货款，以及谁负责退货，各有相应安排。使用平台仓库并不能单独证明商品已被平台买下；交易额和平台收取的费用也属于不同口径）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>所以研究平台收入时，要看每笔交易中平台提供了哪些服务、向谁收费。

广告又带来了另一类付款者。Alphabet（GOOGL／GOOG）的搜索和视频服务吸引用户，广告主则希望通过这些服务接触用户。用户搜索信息、观看 YouTube 视频，广告主购买相关的展示、观看或互动机会，平台再按具体广告产品的投放和计量安排收费。广告还可以出现在合作方的网站和应用里，由 GOOGL 的广告网络连接广告主与这些广告位置。合作方提供广告位置，并按约定取得分成，所以广告主支付的金额与平台最终保留的金额也要分开看。[^alphabet]

用户也可以直接付费，成为订阅客户。订阅 YouTube 或 Google One 等服务时，用户按套餐和订阅周期付款，取得内容、存储或功能的持续使用权益。订阅与广告可以共享用户和基础设施，但付费者购买的东西不同，平台也要分别提供相应的内容和服务。研究一项平台业务时，也就要分清正在讨论的是哪一类客户、哪一种收费。

### 沿广告主的生意验证需求 {#nb-d01-platform-demand}

平台收取广告费之后，广告主还要看这笔支出给自己的生意带来了什么。Booking Holdings（BKNG）在营销说明中把 Google 列为重要渠道，并讨论点击成本、流量转成预订的效果，以及预订取消对营销效率的影响。用户点击广告以后，是否完成预订、后来是否取消，都会影响 BKNG 的投放效果，进而影响它愿意继续投入多少预算。[^bkng]

如果 Agent 要判断 GOOGL 的广告需求，就可以先沿这项已知采购关系读取 BKNG 的营销材料，比较广告预算和预订怎样变化。需要解释旅游需求时，再查看实际旅行活动；企业研报关于获客成本、渠道竞争或广告回报的解释，也应与这些材料相对照。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d01-semiconductor">

## 半导体与硬件：生产、交付与使用 {#nb-d01-semiconductor-story}

### 计算需求与产品交付 {#nb-d01-semiconductor-production}

NVIDIA（NVDA）提供的产品，既可以进入数据中心，也可以用于个人电脑和专业工作。图形处理器（GPU）是其中一类产品；数据中心客户需要计算和互连能力，采购的可能是芯片、模块，也可能是由硬件、软件与配套部件组成的系统。面向个人电脑的产品则可能先交给电脑厂商、板卡商或销售渠道，再由最终用户购买。直接采购方与最终使用者未必是同一个主体。不论最终用在哪里，NVDA 要把产品交给客户，都需要制造、封装和配套工作按时完成。[^nvda]

在芯片生产中，TSMC（TSM／2330）按客户设计提供晶圆制造和封装服务，ASML Holding（ASML）则为芯片制造商提供光刻设备、软件和相关服务。设计企业负责产品研发并安排生产采购，晶圆厂开发工艺、建设厂房并购置设备，设备供应商则制造和交付设备，并提供后续维护。<span data-text-versions id="nb-d01-semiconductor-text-1">这些企业为客户提供的产品和服务各不相同<span data-text-detail>（TSM 是在美国交易的存托证券代码，2330 是台湾上市普通股代码，二者对应同一家 TSMC。TSMC 根据客户设计和生产要求提供制造与封装服务，不直接销售自有品牌芯片）</span>。[^tsmc]<sup>，</sup>[^asml]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">产品制造与交付</p><div class="business-flow-grid"><div class="business-flow-node"><small>产品与系统</small><strong>芯片设计和产品企业</strong><p>提出设计与生产要求，安排采购。</p></div><p class="business-flow-edge" data-flow-direction="both">产品企业委托并付款；服务商制造、封装并交付</p><div class="business-flow-node"><small>制造与封装</small><strong>晶圆及封装服务商</strong><p>按客户设计完成约定的生产与交付。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">生产设备与服务</p><div class="business-flow-grid"><div class="business-flow-node"><small>设备使用者</small><strong>晶圆制造企业</strong><p>建设和运行产线，采购所需设备与服务。</p></div><p class="business-flow-edge" data-flow-direction="both">制造企业采购并付款；供应商交付设备与服务</p><div class="business-flow-node"><small>设备供给</small><strong>设备及装机服务商</strong><p>提供设备、维护和升级等服务。</p></div></div></div><figcaption>生产委托与设备采购分属不同交易：产品企业取得制造和封装交付，制造企业则采购生产设备及相应服务。</figcaption></figure>

这些交付还各自需要资金。NVDA 需要投入研发、安排制造采购并持有相应库存；晶圆厂需要建设和运行产线；购买计算设备的客户则要准备机房及运行条件。客户采购了设备以后，还要完成部署，才能在自己的工作中使用。沿产业链观察时，应当辨认这些相接的阶段，避免把同一项需要在不同环节出现的金额重复相加。

### 从终端使用追到新增采购 {#nb-d01-semiconductor-demand}

客户已经在使用的设备，也会影响后续采购。CoreWeave（CRWV）管理层在 2026 年 8 月的电话会上披露，公司新签了一份延续至 2029 年的 A100 算力服务合同。这个案例说明，旧代设备仍能用于提供收费服务。客户的服务业务增长以后，可能先利用现有设备或提高效率，也可能购置新设备；要判断设备供应商能否拿到新订单，还得看客户具体选择了哪种办法。[^coreweave]

以 Amazon（AMZN）的 AWS 为例，新增计算需求也可能由不同的芯片满足。AMZN 在 2026 年 4 月的公告中，既介绍了已经部署的自研 Trainium 芯片，也公布了从 2026 年起部署更多 NVDA GPU 的计划。同一家云服务商可以同时采用自研与外购芯片。Agent 因而需要查看产品选择和采购安排，判断哪些采购与所研究的公司有关，再分别核对产品交付和客户部署的进度。[^aws-gpu]

企业研报中的预测，也可以沿这些采购和生产安排逐项核对。KGI 在 2025 年 10 月 1 日的 TSMC 报告中，根据当时客户的计划，上调了先进封装的需求和产能预测；它对后续短缺的判断，又以客户维持当时需求水平为条件。接下来就要核对：客户是否仍按原计划采购，封装产能是否按预期增加，客户买到的设备又是否顺利部署。用后来披露的建设、采购和交付材料对照这些预测，可以继续判断原来的需求假设是否仍然成立、产能预测是否需要调整。[^kgi]

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d01-industrial">

## 工业设备与工程服务：从安装到持续运行 {#nb-d01-industrial-story}

### 同一台设备，不同阶段的生意 {#nb-d01-industrial-lifecycle}

Otis Worldwide（OTIS）既交付新电梯，也为已经安装的设备提供维保、维修和改造。建设一栋楼时，开发商或总承包商等客户采购设备，OTIS 需要制造、供货，再配合现场进度完成安装与调试。客户可以先支付预付款，再按材料到场、安装等进度支付后续款项。等到设备开始使用，业主或设施管理人就要考虑：电梯能否按要求运行，出现问题时由谁检查、维修，零件怎样更换。[^otis]

这时，客户购买的是一定期间内的维保服务。OTIS 也维护其他厂商的设备，因此一台设备由谁制造，与后来由谁提供付费维保，需要分别辨认。<span data-text-versions id="nb-d01-industrial-text-1">维保合同的覆盖范围会影响后续工作和收费<span data-text-detail>（检查、保养、故障处理和零件更换各有相应的合同约定；某项维修是否已包含在服务价内，要回到相应条款。装机设备、在保设备和付费维保设备也各有计数范围）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>设备使用一段时间后，业主还可能为升级部件或系统另做预算。这类设备改造需要重新确定施工范围，并安排停机时间。

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>建设阶段</small><strong>新设备采购者</strong><p>购买设备、安装与调试。</p></div><p class="business-flow-edge">设备投入使用后</p><div class="business-flow-node"><small>运行阶段</small><strong>业主或管理人</strong><p>购买约定范围的维保和维修。</p></div><p class="business-flow-edge">出现升级需要时</p><div class="business-flow-node"><small>更新阶段</small><strong>改造采购者</strong><p>安排预算和停机，购买部件或系统升级。</p></div></div><figcaption>同一台设备在不同阶段可能对应不同采购者。新设备、维保和改造分别以实际合同为准。</figcaption></figure>

大型工程还需要统筹设备采购、施工和项目管理。Fluor（FLR）提供工程设计、采购、施工及项目管理等服务，承包范围由合同规定。采用可报销合同时，客户按约定报销相应成本，并支付费用；采用总价合同时，承包商则按约定价格完成规定范围内的工作。<span data-text-versions id="nb-d01-industrial-text-2">两种安排会改变客户与承包商各自承担的成本责任<span data-text-detail>（可报销合同仍有可报销范围、费率和履约条件；总价或最高限价合同也需连同范围变更、索赔和其他条款理解，另有混合合同。项目总投资、承包金额和承包商最终取得的收入各有范围）</span>。[^fluor]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>比较这类订单时，就还要看合同金额对应多少工作、哪些支出由谁承担。

### 订单与项目进度 {#nb-d01-industrial-demand}

拿到订单以后，项目还需要按计划推进。签约、取得开工通知、制造或施工、交付验收和付款，分别说明项目已经走到哪里。GE Vernova（GEV）的一份 2023 年订单公告，就介绍了为业主 EnBW 提供设备、建设及后续服务的安排。再读业主的 Heilbronn 项目页，可以看到主要部件交付、启动和商业投运的后续计划。<span data-text-versions id="nb-d01-industrial-text-3">把供应方最初的计划与业主后来的安排对照，就能发现预期投运时间发生了变化<span data-text-detail>（2023 年 11 月的供应方公告预计于 2026 年底投运；2026 年 9 月 27 日读取的业主项目表暂定于 2027 年下半年投入商业运行）</span>。[^gev]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>核对项目进度时，我们就需要辨认这笔订单已经走到了哪一步，接下来还要完成什么。

Agent 可以先读直接采购方和供应方的材料，看采购方的项目是否在推进，设备或分包工作能否按时交付。如果订单来自总包，而项目资金或建设安排仍不清楚，再查背后的业主。研究维保业务，要看合同是否续签、服务覆盖哪些设备；研究改造业务，则要看业主预算及实施安排。企业研报若用订单增长推算后续收入，就要交代订单中的工作怎样按项目进度完成；若用装机基础推算服务增长，则要解释哪些设备会继续由客户付费维保。

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d01-healthcare">

## 医药与医疗服务：采用、采购与支付 {#nb-d01-healthcare-story}

### 一次诊疗中的不同交付 {#nb-d01-healthcare-delivery}

我们以美国医疗市场为例，先把患者接受的服务与机构之间的采购分开看。患者需要诊疗，医生参与选择治疗办法，医疗机构组织人员与设施，同时采购所需药品和器械。患者接受服务以后，费用还可能由商业保险、政府项目和患者分别承担。这些治疗需要怎样带来采购和付款，要看诊疗所需的产品与服务分别由谁提供。

Johnson & Johnson（JNJ）的业务包括药品和医疗器械。药品可以通过批发商、药房或医疗机构等渠道，最终用于患者治疗，药厂的直接买方与最终使用者因而未必是同一方；器械可以由机构采购，也可以经批发或零售渠道交付，随后由相应人员使用。医疗器械中又有设备、植入产品和耗材等不同类型：一台可持续使用的设备，与随诊疗消耗的材料，对应不同的采购与补货过程。同一项诊疗需要，可能同时带来不同供应方的产品交付。[^jnj]

<span data-text-versions id="nb-d01-healthcare-text-1">医疗机构采购药品或器械，再把它们用于患者的诊疗，产品买卖与医疗服务因而对应不同的交付<span data-text-detail>（机构直接向药厂采购时，药厂售价与机构采购价就是同一笔交易的两端；经分销渠道采购时，则要分清各环节的买卖。药品销售的返利、折扣和退货会影响净收入；器械究竟按设备出售、租赁、耗材或服务收费，需按所选产品合同确认）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

HCA Healthcare（HCA）则通过医院与门诊设施提供医疗服务。患者接受住院、门诊或手术等服务，医院需要准备医护人员、场所和耗材，付款来源包括政府医疗项目、保险计划和患者。<span data-text-versions id="nb-d01-healthcare-text-2">支付金额取决于相应项目或合同的安排<span data-text-detail>（相关支付可以按病例、诊断、住院日或服务项目计算；Medicare、Medicaid、商业保险和患者自付各有适用关系。医院账单标价、预计可收金额和最后收到的现金需要分别辨认）</span>。[^hca]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>HCA 随着医疗服务的提供确认收入，现金到账又是另一个环节，我们还需要跟进支付核定和实际收款。

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">直接采购药品或器械</p><div class="business-flow-grid"><div class="business-flow-node"><small>产品供给</small><strong>药品与器械企业</strong><p>直接向医疗机构供应药品或器械。</p></div><p class="business-flow-edge" data-flow-direction="both">向机构供货；机构按采购安排付款</p><div class="business-flow-node"><small>采购与采用</small><strong>医疗机构</strong><p>采购相应产品，供诊疗使用。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">诊疗与患者自付</p><div class="business-flow-grid"><div class="business-flow-node"><small>服务提供者</small><strong>医疗机构与医护团队</strong><p>组织人员、设施和所需药械。</p></div><p class="business-flow-edge" data-flow-direction="both">向患者提供诊疗；患者按安排支付自付部分</p><div class="business-flow-node"><small>接受服务</small><strong>患者</strong><p>接受诊疗，承担约定的自付费用。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">第三方支付</p><div class="business-flow-grid"><div class="business-flow-node"><small>费用支付方</small><strong>保险与政府项目</strong><p>按适用项目和合同核定费用。</p></div><p class="business-flow-edge" data-flow-direction="forward">按项目与合同向医疗机构支付</p><div class="business-flow-node"><small>服务提供者</small><strong>医疗机构</strong><p>提供相应服务，并办理结算。</p></div></div></div><figcaption>按美国医疗业务的关系示意：图中展示机构直接采购，产品也可以经分销渠道供货。诊疗与支付再按各自合同或项目安排完成。</figcaption></figure>

### 治疗需要、产品采用与支付 {#nb-d01-healthcare-demand}

从患者需要治疗，到实际用上某个产品，中间还有采用、供货和支付的安排。产品获准销售，说明它取得了相应准入；医疗机构是否愿意采用，还涉及诊疗安排、采购与人员使用；患者最后能否用上，又要看能否获得相应服务，以及费用能否得到支付。Agent 核对时就要先选定产品和市场，再沿渠道、机构及付款关系逐项查证。

如果药厂的直接客户是批发商，Agent 可以先看其采购与库存，再看医院的用药情况，或药房的销售、配药情况；研究医院服务，则要分别看患者实际接受的诊疗与支付方的结算安排。企业研报中关于患者人数或市场空间的估计，也要结合前面的采用过程来理解：有多少治疗需要能够得到满足，机构怎样采购，目标公司最后按什么条件取得收入。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d01-finance">

## 银行、支付与保险：资金与未来承诺 {#nb-d01-finance-story}

### 账户、贷款与支付各自提供什么 {#nb-d01-finance-services}

把钱存入银行、向银行借款和通过银行卡付款，是几种不同的交易。以 JPMorgan Chase（JPM）的消费银行业务为例，存款客户使用账户，把钱存入银行，并保留按相应条款提款的权利；借款客户取得融资，随后需要还本付息。同一个人可以同时承担这两种角色，但存款本金、贷款本金和银行收取的利息、服务费，各有不同的含义。[^jpm]

银行还需要为这些承诺准备资金，负担资金成本，并承担借款人不能按约偿付造成的损失。存款和贷款金额只能反映业务规模的一部分；研究新增贷款时，还要看借款人为什么需要钱，靠什么还款。JPM 同时经营其他金融业务，这里先用账户与贷款认清消费银行中的基本关系。

再看 Visa（V），它为发卡、收单等参与者提供网络处理服务。消费者用卡付款，发卡方服务持卡人，收单方服务商户，支付网络帮助完成授权、清算和结算等处理。<span data-text-versions id="nb-d01-finance-text-1">商户承担的费用、机构间的交换费和 V 的网络收入，需要分别辨认<span data-text-detail>（交换费通常由收单方向发卡方支付；网络收费涉及支付金额、处理笔数、跨境和增值服务等安排，并受客户激励影响。V 不提供发卡行的持卡人消费信贷，但仍有自己的结算资金责任）</span>。[^visa]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>交易金额有多大，网络最终收取的费用有多少，是两个不同的观察对象。

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">银行：存款与贷款</p><div class="business-flow-grid"><div class="business-flow-node"><small>存款客户</small><strong>储户</strong><p>使用账户，保留按条款提款的权利。</p></div><p class="business-flow-edge" data-flow-direction="both">储户存入本金；银行按约办理提款</p><div class="business-flow-node"><small>账户与融资</small><strong>银行</strong><p>提供账户和贷款，负担资金成本与信用损失。</p></div><p class="business-flow-edge" data-flow-direction="both">银行发放贷款；借款人还本付息</p><div class="business-flow-node"><small>融资客户</small><strong>借款人</strong><p>使用借款，并按约偿还。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">支付网络：处理服务</p><div class="business-flow-grid"><div class="business-flow-node"><small>网络客户</small><strong>发卡、收单等机构</strong><p>为持卡人或商户服务，并使用支付网络。</p></div><p class="business-flow-edge" data-flow-direction="both">机构按约付费；网络提供处理服务</p><div class="business-flow-node"><small>网络服务方</small><strong>支付网络</strong><p>帮助完成授权、清算和结算等处理。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">保险：保费与未来责任</p><div class="business-flow-grid"><div class="business-flow-node"><small>购买保险</small><strong>投保人</strong><p>按合同购买保障并支付保费。</p></div><p class="business-flow-edge" data-flow-direction="forward">向承保公司支付保费</p><div class="business-flow-node"><small>承担责任</small><strong>承保公司</strong><p>收取保费，并承担合同约定的责任。</p></div><p class="business-flow-edge" data-flow-direction="forward">在约定情形出现时赔付或给付</p><div class="business-flow-node"><small>取得赔付或给付</small><strong>合同约定的收款方</strong><p>依保单确定相应的收款权利。</p></div></div></div><figcaption>银行分别与储户、借款人交易；支付网络和保险各有自己的客户与责任。本金、服务费与保费分别理解，保险收款方及条件由合同确定。</figcaption></figure>

### 收取保费以后的责任 {#nb-d01-finance-insurance}

保险提供的是另一种承诺。Chubb（CB）的业务包括财产与责任保险，以及寿险等类别。投保人支付保费，购买约定期间和范围内的保障；承保公司则在合同约定的情形出现时承担相应的赔付责任。例如，CB 英国商业财产险的产品介绍就列出了财产损坏保障，以及损坏后的营业中断保障。经纪人或代理人可以帮助客户购买保险。保费收到以后，约定的保障和未来赔付责任还会持续。[^chubb]

不同保险产品承诺的时间和条件不同，收到保费与最终履约之间可能相隔很久。<span data-text-versions id="nb-d01-finance-text-2">公司需要估计后续赔付，确认相应负债，并以资产和资本支持履约<span data-text-detail>（损失准备金反映对尚未支付的赔款及相关费用的估计，属于保险负债。保单的保障期间与赔付持续时间也可能不同，部分已发生事故的理赔会在保障期结束后继续）</span>。[^chubb]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>研究这类业务时，我们就要把客户购买保障的需要，与公司履行承诺的条件一起看。

Agent 核对不同业务的需求时，追问的对象也会改变。银行要看客户为什么借款、靠什么还款；支付网络要分清实际交易增加，还是客户换了支付方式或交易路由；保险则要区分保费变化来自费率、保障范围、投保价值还是客户数量，再看这些变化怎样影响相应的赔付责任。企业研报若只写“规模增长”，我们就还要弄清增长来自哪里，以及它怎样改变收费和履约责任。

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d01-energy">

## 能源与原材料：商品、加工与输运 {#nb-d01-energy-story}

### 同一批资源可以形成不同生意 {#nb-d01-energy-products}

以油气业务为例，公司可以开采并出售资源，也可以把买来的原料加工成燃料或化工产品。ExxonMobil（XOM）的业务就涉及油气生产、下游加工与化工等活动。生产业务出售开采出来的油气，加工业务则把原料转成适合具体用途的产品，两类客户购买的东西已经不同。因此研究 XOM 的客户需求时，就要先确定正在看哪一种产品和哪一个环节。[^xom]

资源开采需要先开发和建设，再逐步生产；加工企业则要准备装置、采购原料，并组织产品销售。自购原料再出售产品时，公司既面对原料价格，也面对产品售价，还要安排能源供应、组织加工和管理库存。<span data-text-versions id="nb-d01-energy-text-1">产品售价与原料价格之间的差额，可以帮助我们理解加工业务，但还需要结合实际加工成本<span data-text-detail>（产品收率、能源消耗、运输、检修及库存等会影响结果；商品交付的品质、地点和时间也应与合同对应。这里只说明收入与成本的关系，不用一个商品报价代替整项业务的经营结果）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>产品到了客户手中，还可能经过进一步加工，最终用于交通、制造或其他领域。

Kinder Morgan（KMI）提供管道、储运等服务，其业务介绍还列出与 BP North America 的长期加工服务安排。客户按协议购买加工服务，KMI 则提供相应的设施和处理能力，并收取服务费。[^kmi]

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">自购原料，再出售产品</p><div class="business-flow-grid"><div class="business-flow-node"><small>原料供给</small><strong>原料供应方</strong><p>按合同交付约定原料。</p></div><p class="business-flow-edge" data-flow-direction="both">供应方交原料；加工企业支付采购款</p><div class="business-flow-node"><small>购买与加工</small><strong>加工企业</strong><p>采购原料、组织加工，再销售产品。</p></div><p class="business-flow-edge" data-flow-direction="both">加工企业交产品；客户支付货款</p><div class="business-flow-node"><small>产品购买</small><strong>产品客户</strong><p>接收产品，用于后续加工或使用。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">按加工或输运服务收费</p><div class="business-flow-grid"><div class="business-flow-node"><small>服务采购</small><strong>服务客户</strong><p>购买合同约定的加工或输运等服务。</p></div><p class="business-flow-edge" data-flow-direction="both">客户支付服务费；服务商提供约定服务</p><div class="business-flow-node"><small>提供能力</small><strong>加工或输运服务商</strong><p>运行设施，按合同处理或输运物料。</p></div></div></div><figcaption>自购自销围绕原料与产品买卖；服务收费围绕加工或输运等服务。两条路径分别核对付款、交付与实际使用。</figcaption></figure>

这也会改变我们看需求的方法。出售产品，要看谁愿意按相应条件接货；提供输运或加工服务，则要看客户购买什么服务、预订多少容量、实际使用多少，以及合同怎样收费。<span data-text-versions id="nb-d01-energy-text-2">服务收费可以分别依据预订容量、实际吞吐量或服务期间计算<span data-text-detail>（按容量还是实际数量付费、有无最低承诺、货物所有权由谁保留，都要以具体合同为准。一项设施的收费安排不能推广到该公司的全部业务）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 沿客户提货与实际用途核需求 {#nb-d01-energy-demand}

生产企业接到订单以后，还要按安排把产品交给买方；研究加工企业的原料采购时，则要结合它的生产和库存变化。若贸易商增加提货，商品可能进入后续使用，也可能暂时停留在库存中；若客户预订了运输或储存能力，实际使用还要看后续货物流转。Agent 可以先核对直接买方或托运人的采购与使用情况，再根据当前问题决定是否追到下一环节的实际使用。

企业研报对同一次行业变化也可能给出不同解释，我们可以先看这些解释分别涉及哪一类业务。油气需求变化可以影响产品销售，原料与成品价格的相对变化又会影响加工业务的收入与成本；分析运输服务的变化，还要看具体路线和容量合同。将这些解释同客户订单、提货、库存及设施使用材料相对照，就可以辨认影响落在哪个环节。

</section>

## 需求判断与证据核对 {#nb-d01-evidence}

公司的业务模式不同，核验需求时要找的证据也不同。客户是否决定购买，要看采购或采用记录；供应方是否满足了需求，则要看实际交付或使用情况。对于收款以后还需持续提供服务或承担责任的业务，也要继续看合同怎样履行。

Agent 可以同时读取公司、客户和供应商的材料，再与企业研报中的分析对照。先核对它们谈的是不是同一项产品或项目、对应的是哪段时间，再比较需求扩大、提前采购、补库存或更换供应商等解释。调查可以从直接客户或供应商开始；若关键问题还解释不清，再查客户的客户、供应商的供应商。材料不足的地方先记下待核问题；已有判断则写清依据，以及出现什么变化时需要重新考虑。

材料支持原来的解释，就保留相应判断；采购对象、交付时间或使用范围发生变化时，再更新受影响的部分。研报当时作出的预测与后来发生的结果也应分别保存。等到新订单、采用或交付信息出现，Agent 就能追溯原先的判断依据，检查这些依据是否仍然成立。

弄清一门生意怎样取得收入以后，我们就能进一步讨论它为什么增长。下一篇[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/)将比较客户数量、用量、价格和产品组合变化带来的影响。

<link rel="stylesheet" href="/notebook/business-branches.css">

[^nke]: [NIKE FY2025 Form 10-K — Business and Revenue Recognition](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm)。财年截至 2025-05-31；Item 1，HTML 行 143—175；Revenue Recognition，行 1952—1955；批发客户信用，行 423—426。
[^wmt]: [Walmart FY2025 Form 10-K — Business; Membership and Other Income](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm)。财年截至 2025-01-31；申报 2025-03-14；业务概述行 226—248；Sam’s Club 行 303—318；会员收入行 1929—1931。
[^msft]: [Microsoft 2025 Annual Report — Microsoft 365 and Licensing Options](https://www.microsoft.com/investor/reports/ar25/index.html)。FY2025 年报；行 258—276，Microsoft 365 Commercial、Dynamics；行 392—400，Licensing Options。
[^aws]: [AWS Product and Service Pricing](https://aws.amazon.com/pricing/)。动态官方页面，读取于 2026-09-27；How does AWS pricing work；How do you pay for AWS，行 239—254 及价格方式标题。
[^netflix]: [Netflix consolidates relational database infrastructure on Amazon Aurora, achieving up to 75% improved performance](https://aws.amazon.com/blogs/database/netflix-consolidates-relational-database-infrastructure-on-amazon-aurora-achieving-up-to-75-improved-performance/)。2025-11-26；迁移结果截至 2025 年 10 月；Business challenge；Achieving cost-efficiency；Migration results；About the authors，行 237—276、299—316。
[^talen]: [Talen Energy Expands Nuclear Energy Relationship with Amazon; Q2 2026 AWS PPA update](https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699)；[Talen Q2 2026 Form 10-Q](https://talenenergy.gcs-web.com/static-files/649bfa16-a54e-4997-914b-a8a5d2e00900)。合同公告 2025-06-11；进展披露 2026-08-05；2025 8-K 附件 99.1，PDF 第 4 页，行 55—67；2026 Q2 10-Q，PDF 第 46 页 AWS PPA 术语，行 2054—2059。
[^seller]: [Sell on Amazon — How much does it cost to sell on Amazon?](https://sell.amazon.com/pricing/)。美国官方卖家页面，读取于 2026-09-27；Selling plans、FBA/merchant fulfillment 选项、Referral fees，行 180—258、294—308。
[^alphabet]: [Alphabet 2025 Form 10-K — Google Services; Cost of Revenues](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm)。年度截至 2025-12-31；How We Make Money，行 227—239；TAC 与内容采购，行 959—976。
[^bkng]: [Booking Holdings 2025 Form 10-K — Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm)。年度截至 2025-12-31；行 855—864，performance marketing expenses and efficiency。
[^nvda]: [NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customers](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm)。财年截至 2026-01-25；行 187—207；Manufacturing 行 284—289；直接/间接客户行 1279—1288。
[^tsmc]: [TSMC 2025 Annual Report Website — About TSMC and Shareholder Letter](https://investor.tsmc.com/static/annualReports/2025/english/index.html)。2025 年度报告；股东信行 18—24；About TSMC 行 64—77。
[^asml]: [ASML — About the company](https://www.asml.com/en/company)。动态公司页面，读取于 2026-09-27；公司概述，行 138。
[^coreweave]: [CoreWeave Q2 2026 Earnings Call — Corrected Transcript](https://s205.q4cdn.com/133937190/files/doc_financials/2026/q2/CRWV-US-CORRECTED-TRANSCRIPT-CoreWeave-Q2-2026-Earnings-Call-11August2026.pdf)。2026-08-11；PDF 第 8 页 A100 合同；问答中续约范围，既有文本行 576—590。
[^aws-gpu]: [Amazon Q1 2026 Earnings Release — AI chip deployment highlights](https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf)。2026-04-29；PDF 第 2 页，AI chips / Trainium / NVIDIA 条目，行 35—42。
[^kgi]: [KGI TSMC Company Update — 3Q25 preview: AI outlook has turned more promising](https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/tsmc_2330-tt_01102025e.pdf)。2025-10-01；PDF 第 1 页：Revise up 2026 CoWoS estimates；Early 2027 outlook；第 10 页材料使用说明。
[^otis]: [Otis Worldwide 2025 Form 10-K — New Equipment and Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm)。年度截至 2025-12-31；Item 1，行 172—178、205—222。
[^fluor]: [Fluor 2025 Form 10-K — Business and Types of Contracts](https://www.sec.gov/Archives/edgar/data/1124198/000112419826000007/flr-20251231.htm)。年度截至 2025-12-31；行 205—208；Types of Contracts，行 310、323—333。
[^gev]: [GE Vernova secures two H-class combined cycle equipment orders from EnBW](https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability)；[EnBW Heilbronn combined heat and power plant — Project phases](https://www.enbw.com/company/topics/coal-phaseout/heilbronn-combined-heat-and-power-plant/)；[EnBW Heilbronn — Projektphasen](https://www.enbw.com/unternehmen/themen/kohleausstieg/heizkraftwerk-heilbronn/)。供应方公告 2023-11-06；业主动态项目页读取于 2026-09-27；公告行 68—72；EnBW Heilbronn 页面 Project phases、Project diary，行 40—59。
[^jnj]: [Johnson & Johnson 2025 Form 10-K — Innovative Medicine and MedTech](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm)。财年截至 2025-12-28；Item 1，行 214—217、225—235；收入确认既有定位见 health-finance-branches.json。
[^hca]: [HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf)。2025 年度；URL 目录含 2024，报告正文为 2025；PDF 第 104—105 页，Note 1 Revenues，行 4898—4945。
[^jpm]: [JPMorgan Chase 2025 Annual Report — Consumer & Community Banking](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf)。2025 年度；PDF 第 97 页/报告第 65 页，行 8140—8172。
[^visa]: [Visa FY2025 Form 10-K — Network Model and Transaction Processing](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm)。财年截至 2025-09-30；业务模式行 181—219；Note 1 Organization，行 1960—1961；结算资金责任沿既有 F2 短段记录复用。
[^chubb]: [Chubb 2025 Letter to Shareholders; Commercial Property Insurance](https://about.chubb.com/stories/2025-chubb-letter-to-shareholders.html)；[Chubb Commercial Property Insurance — UK](https://www.chubb.com/uk-en/business/products/property-insurance.html)；[Chubb FY2025 Form 10-K — Unpaid losses and loss expenses, and Future policy benefits](https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/R17.htm)。2025 年度股东信；官方产品页读取于 2026-09-27；股东信行 224、234—250；英国商业财产险产品页行 348—392。
[^xom]: [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions)。动态公司业务页面，读取于 2026-09-27；行 29—55：Upstream、Product Solutions、Low Carbon Solutions。
[^kmi]: [Kinder Morgan — Products Pipelines; Condensate Processing Facility](https://www.kindermorgan.com/Operations/Products/Index)。动态公司业务页面，读取于 2026-09-27；Overview 行 19—21；Kinder Morgan Condensate Processing Facility 行 272—278。
[^cma]: [CMA Cloud Infrastructure Services — Final decision report](https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf)。2025-07-31 报告；公布版 2025-08-01；本轮 PDF 第 109 页 §§3.236—3.237 关于新增客户/负载和存量变动的区别；第 269 页 §6.70；既有本地迁移阅读见 external-sources.md E2。


## Sources
- [GE Vernova：2023年 EnBW 发电项目订单公告](https://www.gevernova.com/news/press-releases/ge-vernova-secures-two-h-class-combined-cycle-equipment-orders-hydrogen-capability): 本篇采用的公开资料：GE Vernova：2023年 EnBW 发电项目订单公告。具体采用范围见文章脚注与 Agent 阅读材料。
- [Alphabet 2025 Form 10-K](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000018/goog-20251231.htm): Alphabet 2025 Form 10-K，Item 5、Note 11、Note 12；股份权利说明，Voting Rights、Liquidation Rights、Conversion。
- [ASML — About the company](https://www.asml.com/en/company): ASML 为芯片制造商提供在硅片上制造图案所用的光刻设备、软件和服务。
- [AWS Product and Service Pricing](https://aws.amazon.com/pricing/): AWS 多数云服务采用按用量计费，也有固定套餐和承诺安排。；客户具体工作负载、所用资源和购买安排共同影响账单。
- [Amazon Q1 2026 Earnings Release — AI chip deployment highlights](https://s2.q4cdn.com/299287126/files/doc_earnings/2026/q1/earnings-result/AMZN-Q1-2026-Earnings-Release.pdf): AWS 同时使用自研 Trainium 并公开宣布从 2026 年开始部署更多 NVIDIA GPU 的安排。；云客户增加计算服务时，采购可以落到不同类型的芯片。
- [Booking Holdings 2025 Form 10-K — Marketing](https://www.sec.gov/Archives/edgar/data/1075531/000107553126000009/bkng-20251231.htm): BKNG 披露其效果营销主要使用搜索引擎，尤其 Google，以及联盟、比价和社交渠道。；其营销效率受点击成本、转化、取消和渠道组合等影响。
- [Chubb 2025 Letter to Shareholders; Commercial Property Insurance](https://about.chubb.com/stories/2025-chubb-letter-to-shareholders.html): Chubb 为企业和个人承保风险，也经营寿险业务。；其商业财产险可以约定财产损坏及损坏后的营业中断保障，赔付依保单及理赔核定。；公司把损失准备金与履行赔付能力联系起来；收取保费以后仍可能承担后续义务。
- [Chubb Commercial Property Insurance — UK](https://www.chubb.com/uk-en/business/products/property-insurance.html): Who it’s for；What it covers；claims handling
- [Chubb FY2025 Form 10-K — Unpaid losses and loss expenses, and Future policy benefits](https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/R17.htm): V3专业核验：行7、64、86—90，未付赔款责任、估计与长期索赔；未取金额表。
- [CMA Cloud Infrastructure Services — Final decision report](https://assets.publishing.service.gov.uk/media/688b8891fdde2b8f73469544/final_decision_report.pdf): 云客户支出改变可能来自存量用量变化、成本优化、工作负载转移或新增负载。；外部研究可以帮助比较已有系统迁移和新增工作负载选择。
- [CoreWeave Q2 2026 Earnings Call — Corrected Transcript](https://s205.q4cdn.com/133937190/files/doc_financials/2026/q2/CRWV-US-CORRECTED-TRANSCRIPT-CoreWeave-Q2-2026-Earnings-Call-11August2026.pdf): 管理层称新签了一份延续到 2029 年的 A100 算力服务合同。；旧代设备可以继续承接付费服务，存量设备使用与购买新硬件需分别观察。
- [Fluor 2025 Form 10-K — Business and Types of Contracts](https://www.sec.gov/Archives/edgar/data/1124198/000112419826000007/flr-20251231.htm): FLR 提供工程、采购、施工和项目管理服务。；可报销合同按商定费率/费用结算，总价合同需要承包方估算工作和成本；成本超支的承担不同。
- [EnBW Heilbronn combined heat and power plant — Project phases](https://www.enbw.com/company/topics/coal-phaseout/heilbronn-combined-heat-and-power-plant/): Project phases；德语版同表可确认英文 Q23 排版笔误实际为 Q3/Q4
- [EnBW Heilbronn — Projektphasen](https://www.enbw.com/unternehmen/themen/kohleausstieg/heizkraftwerk-heilbronn/): 2026-09-27 V3核验读取Projektphasen，行44，暂定Q3/Q4 2027商业投运安排。
- [HCA Healthcare 2025 Annual Report to Shareholders — Note 1 Revenues](https://s23.q4cdn.com/949900249/files/doc_financials/2024/ar/HCA-2025-Annual-Report-to-Shareholders-FINAL.pdf): HCA 提供住院和门诊服务，多数患者合同还涉及政府项目、商业保险或管理式医疗等第三方付款者。；支付可按病例、日或服务项目等约定，服务交付、收入确认与收款需要区别。
- [Johnson & Johnson 2025 Form 10-K — Innovative Medicine and MedTech](https://www.sec.gov/Archives/edgar/data/200406/000020040626000016/jnj-20251228.htm): JNJ 同时经营药品与医疗器械。；药品可经零售商、批发商、分销商、医院和专业人员分销；器械有对应专业用途与机构采购渠道。；临床使用者、机构买方与最终支付方需要分别识别。
- [JPMorgan Chase 2025 Annual Report — Consumer & Community Banking](https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/investor-relations/documents/annualreport-2025.pdf): JPM 的消费与社区银行服务个人和小企业，包含存款、贷款、账户和支付服务。；客户存入的本金、银行放出的贷款本金、利息及服务费用承担不同权利和义务。
- [KGI TSMC Company Update — 3Q25 preview: AI outlook has turned more promising](https://www.kgi.com.hk/en/-/media/files/kgishk/research-reports/tw-reports/tsmc_2330-tt_01102025e.pdf): 报告以当时 AI 客户计划及交易安排为依据，上调 2026 年 CoWoS 需求和产能预测。；其对 2027 年短缺的判断以客户维持当时需求水平为条件，可用来演示研报假设如何等待后续公司材料校准。
- [Kinder Morgan — Products Pipelines; Condensate Processing Facility](https://www.kindermorgan.com/Operations/Products/Index): KMI 提供成品油等运输、储存与调和服务。；其 Galena Park 附近凝析油加工设施由与 BP North America 的长期收费协议支持。；同样处理能源商品，企业也可以通过提供加工服务取得收费。
- [Microsoft 2025 Annual Report — Microsoft 365 and Licensing Options](https://www.microsoft.com/investor/reports/ar25/index.html): Microsoft 365 商业云、Office 本地许可和持续服务对应不同交付。；企业可以在批量许可协议下购买多份软件许可和云服务；用户数量、购买功能及使用范围需要区别。；软件保障可以提供合同期内的新版本、升级和支持权益。
- [Netflix consolidates relational database infrastructure on Amazon Aurora, achieving up to 75% improved performance](https://aws.amazon.com/blogs/database/netflix-consolidates-relational-database-infrastructure-on-amazon-aurora-achieving-up-to-75-improved-performance/): Netflix ODS 团队此前在 AWS EC2 上自管 PostgreSQL 兼容数据库，随后把若干应用迁到 Aurora PostgreSQL。；案例将降低许可和维护负担、简化运行管理与成本效率联系起来；客户降本可以伴随同一云商内部的服务组合变化。
- [NIKE FY2025 Form 10-K — Business and Revenue Recognition](https://www.sec.gov/Archives/edgar/data/320187/000032018725000047/nke-20250531.htm): NKE 设计、开发及销售商品，绝大部分产品由独立承包商制造。；自有门店和数字渠道直营与批发并存；批发交货和消费者购入是不同交易阶段。；批发与直营的控制转移、付款和退货折扣安排存在差别。
- [NVIDIA FY2026 Form 10-K — Markets, Manufacturing and Customers](https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm): NVDA 的计算平台可以以机架系统、子系统、模块及相关软件服务交付。；直接采购者与实际部署使用者可以不同。；公司采用晶圆代工和合同制造，明确提到 TSMC 制造晶圆与 CoWoS 封装技术。
- [Otis Worldwide 2025 Form 10-K — New Equipment and Service](https://www.sec.gov/Archives/edgar/data/1781335/000178133526000011/otis-20251231.htm): 新设备客户包括开发商、总承包商和政府机构；通常有预付和按里程碑付款。；维保客户通常为业主和设施管理方，可以不同于原设备采购者。；OTIS 维护自家和其他厂商设备，服务还包含维修与改造。
- [Sell on Amazon — How much does it cost to sell on Amazon?](https://sell.amazon.com/pricing/): 第三方商家向平台购买销售服务，可能另选平台仓储配送。；商家服务费用与消费者购买商品的价款是不同交易关系。
- [Talen Energy Expands Nuclear Energy Relationship with Amazon; Q2 2026 AWS PPA update](https://ir.talenenergy.com/static-files/90cce90c-e281-42c6-b686-ed6010dd8699): 2025 年扩展 PPA 约定供电随时间分阶段增加。；原公告把输电改造与供电结构转换相连，后续 10-Q 确认修订 PPA 于 2026 年 4 月转换。；合同、具体供电节点和客户机房可用容量应分别核对。
- [Talen Q2 2026 Form 10-Q](https://talenenergy.gcs-web.com/static-files/649bfa16-a54e-4997-914b-a8a5d2e00900): PDF 第 46 页 AWS PPA
- [TSMC 2025 Annual Report Website — About TSMC and Shareholder Letter](https://investor.tsmc.com/static/annualReports/2025/english/index.html): TSMC 以制造客户产品的纯代工模式经营，并提供先进封装等技术。；制造和封装需要公司进行相应技术及产能投入。；2330 为台湾上市股票代码，TSM 为美国存托股份交易代码。
- [Visa FY2025 Form 10-K — Network Model and Transaction Processing](https://www.sec.gov/Archives/edgar/data/1403161/000140316125000089/v-20250930.htm): V 向支付体系参与者提供网络处理服务，本身不发卡或向持卡人授信。；交换费一般由收单方向发卡方支付，商户收单费用与 V 对机构收取的费用需区分。；网络流经金额不等同 V 的营业收入。
- [Walmart FY2025 Form 10-K — Business; Membership and Other Income](https://stock.walmart.com/sec-filings/all-sec-filings/content/0000104169-25-000021/wmt-20250131.htm): WMT 有商品零售和会员服务，会员收费对应期间权益。；同一购物活动可以涉及商品价款与会员费两种不同收费。
- [ExxonMobil — Business divisions](https://corporate.exxonmobil.com/who-we-are/our-global-organization/business-divisions): XOM 同时有油气生产、下游燃料及化工业务，最终服务不同用途。；从开采、加工及商品销售切面识别业务，有助于分别研究产品价格和加工关系。

## Content relations
```json
[
  {
    "from": "zh-customers-products-pricing",
    "relation": "part_of",
    "to": "topic-D",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
- [投资组合、保证金与对冲策略](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)
- [Agent 时代的基本面投资](https://ou-liu-red-sugar.github.io/zh/notebook/investment-returns/)
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
