# 客户、产品与收费方式

从客户付款和企业交付认清一门生意，选择行业继续拆解业务，再沿上下游、具体订单与企业研报核验需求。

Entry: zh-customers-products-pricing | Node: NB-D01 | Language: zh | Editorial revision: 2026-11-26

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
客户掏钱，买走的可能是一双鞋、一段时间的算力，也可能是一份保单。卖商品要把货交到手上，做云服务要持续供电机房，保险公司则要在合同期内背负未来的赔付义务。研究一家公司时，先要看懂它做的究竟是哪些生意：客户买到了什么，公司为此要交付什么，钱又按什么方式来。

前面的笔记一直站在持有人视角看股票、成交与组合；真要决定该持有哪些公司，还得往财报背后走一步，回到真实的交易现场。客户为什么愿意花钱、订单增多到底说明需求变旺还是渠道备货，答案都在具体交易里。

## 使用者、采购者与付款者 {#nb-d01-business}

看清客户买到了什么，接着还要分清三个角色：谁在用、谁拍板买，又是谁真正买单。个人给自己买双鞋，挑款式、上脚穿和刷卡付钱都是同一个人；换成企业给员工配办公软件，每天点鼠标的人和签合同付款的公司就分开了。到了美国医疗服务里，这三个角色进一步拆开：患者接受诊疗，医生和医疗机构参与敲定方案并采购药械，账单则常由患者自付、商业保险与政府项目共同分担。

<figure class="flow-figure g4-role-split" id="nb-d01-role-split">
<div class="ff-head"><p class="ff-title">三种交易里，使用、采购与付款怎样拆开</p><span class="ff-sub">角色拆得越细，核对需求时要查的账也越多</span></div>
<div class="g4-rs-grid business-exchange" aria-label="三种常见交易的角色拆分对照：个人买鞋时，消费者本人同时承担使用、采购决策与付款三项角色，三者合一；企业购买办公软件时，员工日常使用软件，企业负责选型采购与付款，使用和买单分开；美国医疗诊疗中，患者接受诊疗服务，医生与医疗机构参与选择方案并采购药械，费用由患者自付、商业保险与政府项目共同承担，三方进一步拆分。">
<span class="g4-rs-corner"></span>
<div class="g4-rs-col">谁在使用<small>实际消耗或体验</small></div>
<div class="g4-rs-col">谁决定采购<small>选型、下单或开方</small></div>
<div class="g4-rs-col">谁掏钱付款<small>最终承担账单</small></div>
<div class="g4-rs-scene">个人买鞋<small>三者合一</small></div>
<div class="g4-rs-span g4-rs-all"><strong>消费者本人</strong><small>自己挑款式、自己穿、自己付钱</small></div>
<div class="g4-rs-scene">企业办公软件<small>用与买分开</small></div>
<div class="g4-rs-span g4-rs-use"><strong>员工</strong><small>日常使用软件</small></div>
<div class="g4-rs-span g4-rs-buy-pay"><strong>企业</strong><small>评估选型、签合同并付款</small></div>
<div class="g4-rs-scene">美国医疗诊疗<small>三方拆分</small></div>
<div class="g4-rs-span g4-rs-use"><strong>患者</strong><small>接受诊疗服务</small></div>
<div class="g4-rs-span"><strong>医生与医疗机构</strong><small>参与选方案、采购药械</small></div>
<div class="g4-rs-span g4-rs-pay"><strong>患者＋保险／政府</strong><small>按项目或合同共同买单</small></div>
</div>
<figcaption>角色拆开以后，使用者满意不等于采购方马上加单，采购方签了合同也不等于付款已经落袋；下面八个行业会沿着这条线索逐一展开。</figcaption>
</figure>

哪怕是同一家公司，面对不同客户时，交付的东西和收费办法也常常两样。下面可以先挑一个最熟悉的行业，从具体公司读起。每个行业都会先拆这门生意怎么运转，再看怎么核实真实需求；想横向比较几种生意，随时可以切换行业或展开全部。

<div data-reading-branch-controls hidden></div>

<section data-reading-branch="consumer" data-branch-label="消费品与零售" id="nb-d01-consumer">

## 消费品与零售：商品、渠道与库存 {#nb-d01-consumer-story}

### 从品牌出货到消费者购买 {#nb-d01-consumer-channels}

先看 NIKE（NKE）的一双鞋怎样送到消费者手里。NKE 主抓设计与营销，生产大多委托给独立制造商；成品既可以批发给零售客户，也可以通过自有门店和官网直接卖给顾客。走批发，零售客户先向 NKE 进货，再摆上货架卖给消费者；走直营，消费者直接把钱付给 NKE。两条路最终都把商品送到顾客手里，对 NKE 来说，直接打交道的买家和收钱的节点却不一样。[^nke]

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">批发路径</p><div class="business-flow-grid"><div class="business-flow-node"><small>品牌方</small><strong>NIKE（NKE）</strong><p>组织产品与供货。</p></div><p class="business-flow-edge">批发：向零售客户交货并结算</p><div class="business-flow-node"><small>零售客户</small><strong>备货与销售</strong><p>持有商品并面向消费者销售。</p></div><p class="business-flow-edge">终端：消费者购买商品并付款</p><div class="business-flow-node"><small>使用与购买</small><strong>消费者</strong><p>取得所购买的商品。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">直营路径</p><div class="business-flow-grid"><div class="business-flow-node"><small>品牌直营</small><strong>NIKE（NKE）</strong><p>通过自有门店或网站销售。</p></div><p class="business-flow-edge">NKE 交付商品；消费者直接付款</p><div class="business-flow-node"><small>直接购买</small><strong>消费者</strong><p>向品牌购买并取得商品。</p></div></div></div><figcaption>批发路径中，NKE 的直接客户是零售商；直营时，NKE 直接面向消费者。</figcaption></figure>

顺着这两条路径往下看，谁压库存、谁干后续的活，分工也会跟着变。走批发，零售商接货后得自己囤仓、陈列，等着顾客进门；走直营，开门店、接线上订单、配送和售后就全落在 NKE 自己肩上。<span data-text-versions id="nb-d01-consumer-text-1">货交到下家以后，退货、折扣和账期怎么算，全看合同约定<span data-text-detail>（退货权、促销补贴和结算期限会影响各方最终收到多少钱，以及各自承担哪些库存和销售责任）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>因此读销售数据时，既要看卖了多少件，更要分清这里统计的是品牌向渠道出货，还是商品真卖到了消费者手里。

再看 Walmart（WMT），它一边卖货，一边卖会员。顾客结账带走的是一件件实物，缴会费买下的则是一段时间里的购物与配送权益。两笔消费常发生在同一次购物里，WMT 既要把商品交给顾客，也得在会员期内持续兑现服务。如果第三方商家还借它的平台开店卖货，又会多出一层商家向平台缴服务费的关系，这一点放到“互联网平台与广告”里继续拆。[^wmt]

### 从订单追到实际需求 {#nb-d01-consumer-demand}

回到 NKE 的批发业务，订单往上走，还要对照零售商的动销来读。经销商和门店多下单，既可能是店里卖得火、顾客回头多，也可能是前一阵库存见底、先补一批货。如果货只是从品牌仓库挪进了渠道仓库，终端货架还没动起来，那出货增长和真实消费就还没对上账。同样是卖出去，靠大幅打折清库存与按原价顺畅出货，背后反映的购买意愿也相去甚远。等到终端卖得动、零售商又连续补货，需求判断才算站稳一层。

核对时，Agent 可以先查 NKE 的渠道披露，再沿着已知合作关系去读下游零售商的财报与库存变化，看渠道进了多少货、压了多少库存、实际卖出多少。研究直营业务时，直接看终端销量，并对照同品类的消费数据解释波动。若企业研报把收入增长归因于品牌热度上升，就把终端销量、渠道补货和净售价拆开一一核对，看多出来的收入到底来自哪一项。

</section>

<section data-reading-branch="software" data-branch-label="软件与云服务" id="nb-d01-software">

## 软件与云服务：使用、许可与账单 {#nb-d01-software-story}

### 从使用功能到购买服务 {#nb-d01-software-contracts}

员工每天打开办公软件干活，企业为此买单的往往是一批账号和订阅期内的云服务。采购 Microsoft（MSFT）的商业应用订阅时，企业会先划定使用范围，再选套餐、开账号；员工用这些账号工作，供应商持续维护运行、推送更新并提供支持。一家公司总共有多少员工、实际花钱开了多少账号、续约时愿不愿意为高阶功能加钱，这三件事各自独立。人手增加可能带来更多使用需要，最终落地成多少采购，还得看哪些岗位配了账号、选了哪档套餐，以及旧许可怎样衔接。[^msft]

软件也可以装进客户自己的机房运行。这时客户自备硬件与运维环境，供应商交付软件使用权，再按合同提供升级和支持。<span data-text-versions id="nb-d01-software-text-1">软件使用权与后续维护服务的期限，可以在同一份协议里分别约定<span data-text-detail>（软件许可可能有期限，也可能允许客户长期使用某个版本；后续升级和支持又有各自的合同期间。同一企业协议还可能同时包含本地许可和云服务，要按客户实际取得的权利分别理解）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>云服务则把机房和设备也接了过来，让客户直接按需使用算力与存储。

Amazon（AMZN）的 AWS 就是这种交付方式：云厂商先搭好服务器、机房与电力条件，客户直接把应用跑在上面，按选用的计算、存储或数据库服务、实际用量与合同条款结算账单。<span data-text-versions id="nb-d01-software-text-2">按用量计费也常和固定套餐或消费承诺搭配使用<span data-text-detail>（按量、承诺折扣和固定套餐对应不同付款安排，不能把某一种服务的计量单位用于全部云业务。签下合同承诺、容量可用、实际使用和收款，也要按各自发生的时间观察）</span>。[^aws]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>客户</small><strong>应用与计算任务</strong><p>运行应用、保存数据、执行计算。</p></div><p class="business-flow-edge">使用计算、存储或数据库服务</p><div class="business-flow-node"><small>云服务方</small><strong>可用容量</strong><p>准备设备、电力和运行服务。</p></div><p class="business-flow-edge">按使用和合同计费</p><div class="business-flow-node"><small>付款安排</small><strong>客户账单</strong><p>计量单位、套餐和承诺共同影响金额。</p></div></div><figcaption>客户运行应用和执行计算任务时，会使用相应资源；供应方准备设备和电力，提供服务能力。费用按所用服务及合同安排计算。</figcaption></figure>

### 把客户需求与供给条件接起来 {#nb-d01-software-demand}

客户想省钱，未必就意味着离开原来的云厂商。Netflix（NFLX）与 AWS 工程师联合披露的案例里，NFLX 团队原来在 AWS EC2 上自行维护一批关系型数据库，后来把若干应用迁到 Aurora 托管服务，以压低许可支出与运维负担。内部服务组合换了样子，客户依然留在 AWS 账上。软件许可、人工运维和云托管各有账目，Agent 看到“客户降本”时，要分清省掉的是哪笔开销，新接手的服务又落在哪家供应商那里。[^netflix]

反过来，客户想加用量，AWS 也得按时备齐能跑起来的容量。拿电力来说，Talen Energy（TLN）在 2025 年公布与 AWS 扩展供电协议，约定分阶段增加供电。签下长约只是第一步，接着还要盯配套输电改造何时完工、各阶段供电何时接通。把这些节点同机房建设进度、客户上线计划摆在一起对，才能判断电力到底能不能按时托住新增算力。[^talen]

核验云需求时，一边要看客户为什么续用或加量，一边要看云厂商能不能按期交出容量。若客户增购算力是为了向自己的下游提供付费服务，Agent 还可以继续追它的业务为何需要更多资源。英国竞争与市场管理局（CMA）在 2025 年的云市场报告里，把客户支出变化拆成了既有应用用量变动、成本优化、系统迁移和新增工作负载几类。观察云业务需求时，老应用还在不在照常续费、新开发的任务又交给了哪家云商，得拆开核对。[^cma]

</section>

<section data-reading-branch="platform" data-branch-label="互联网平台与广告" id="nb-d01-platform">

## 互联网平台与广告：参与者与付款关系 {#nb-d01-platform-story}

### 一次交易中的不同客户 {#nb-d01-platform-participants}

在 Amazon（AMZN）的第三方店铺下单时，买家花钱买走的是商家的货，商家花钱买的则是 AMZN 的平台服务。商家入驻开店，按所选销售计划和成交规则向平台缴费；若再选用平台仓储与配送，又会另付一笔履约费用。顺着这笔订单拆开，同一个页面里其实藏着两层交易：消费者为商品买单，商家为平台服务买单。[^seller]

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>商品买家</small><strong>消费者</strong><p>向第三方商家购买商品。</p></div><p class="business-flow-edge">商品交付与商品价款</p><div class="business-flow-node"><small>商品卖家</small><strong>第三方商家</strong><p>提供商品，并选择所需平台服务。</p></div><p class="business-flow-edge">平台服务与相应费用</p><div class="business-flow-node"><small>服务提供者</small><strong>平台</strong><p>提供交易支持，以及可选的履约、广告等服务。</p></div></div><figcaption>商品交易与平台服务分别发生：买家向商家买商品，商家再按安排购买平台服务。</figcaption></figure>

<span data-text-versions id="nb-d01-platform-text-1">商家把货放进平台仓库时，还要看货物归谁所有、平台具体管哪几段<span data-text-detail>（由谁拥有货物、谁保管货物、谁代收货款，以及谁负责退货，各有相应安排。使用平台仓库并不能单独证明商品已被平台买下；交易额和平台收取的费用也属于不同口径）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>研究平台收入时，得先认清每笔交易里平台到底干了什么活、向哪一方收费。

广告又把另一拨付款者带进了平台。Alphabet（GOOGL／GOOG）靠搜索和 YouTube 吸引用户，广告主掏钱买的则是触达这些用户的展示、观看或互动机会，平台再按具体广告产品的投放与计量规则收费。广告也能投放到合作方的网站和应用里，由 GOOGL 的广告网络把广告主和外部广告位连起来。合作方提供了版位，自然要按约定拿走分成，所以广告主一共花出去多少钱，跟平台最后自己留下多少钱，要算成两笔账。[^alphabet]

用户也可以自己掏钱，直接变成订阅客户。购买 YouTube 或 Google One 等会员时，用户按套餐与周期付款，换取内容、存储或功能的持续使用权。订阅和广告共用用户流量与底层设施，付钱的人和交付的东西却各不相同。看平台业务时，先要说明正在谈的是哪一类客户、哪一笔收费。

### 沿广告主的生意验证需求 {#nb-d01-platform-demand}

广告费付出去以后，广告主最关心的是这笔钱有没有换来生意。Booking Holdings（BKNG）在年报营销部分就把 Google 列为主要获客渠道，并拆解了点击成本、流量转成预订的效率，以及订单取消对投放回报的拖累。用户点完广告有没有下单、下单后有没有退订，直接决定 BKNG 的获客划算与否，也决定它下一阶段愿不愿意继续加预算。[^bkng]

Agent 判断 GOOGL 的广告需求时，可以沿着这条已知的采买关系去读 BKNG 的营销披露，把它的广告预算变化和预订量摆在一起比；要解释旅游投放为何起伏，再回头查实际出行数据。企业研报关于获客成本、渠道竞争或广告回报的论断，同样放回这些一手材料里检验。

</section>

<section data-reading-branch="semiconductor" data-branch-label="半导体与硬件" id="nb-d01-semiconductor">

## 半导体与硬件：生产、交付与使用 {#nb-d01-semiconductor-story}

### 计算需求与产品交付 {#nb-d01-semiconductor-production}

NVIDIA（NVDA）交付的产品横跨数据中心、个人电脑与专业图形工作站。图形处理器（GPU）只是其中一类；数据中心客户买的是计算与互连能力，下单的对象既可能是芯片或模块，也可能是硬件、软件和配套部件打包好的整套机架系统。个人电脑端的产品则常先卖给整机厂、板卡商或分销渠道，最后才到消费者手中。签合同付钱的直接买方，和最后真正跑起算力的终端用户，常常分属两家。而无论货流向哪里，NVDA 想要按期交付，都离不开上游晶圆制造、先进封装和配套产线顺畅运转。[^nvda]

往上游再看一层，TSMC（TSM／2330）按客户图纸提供晶圆代工与封装服务，ASML Holding（ASML）则为晶圆厂供应光刻设备、软件和装机维护。芯片设计企业主攻研发并组织委外采购，晶圆厂钻研工艺、盖厂房买设备，设备商负责制造交付并长期维护。<span data-text-versions id="nb-d01-semiconductor-text-1">处在产业链不同位置的公司，卖的东西和面对的客户截然不同<span data-text-detail>（TSM 是在美国交易的存托证券代码，2330 是台湾上市普通股代码，二者对应同一家 TSMC。TSMC 根据客户设计和生产要求提供制造与封装服务，不直接销售自有品牌芯片）</span>。[^tsmc]<sup>，</sup>[^asml]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">产品制造与交付</p><div class="business-flow-grid"><div class="business-flow-node"><small>产品与系统</small><strong>芯片设计和产品企业</strong><p>提出设计与生产要求，安排采购。</p></div><p class="business-flow-edge" data-flow-direction="both">产品企业委托并付款；服务商制造、封装并交付</p><div class="business-flow-node"><small>制造与封装</small><strong>晶圆及封装服务商</strong><p>按客户设计完成约定的生产与交付。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">生产设备与服务</p><div class="business-flow-grid"><div class="business-flow-node"><small>设备使用者</small><strong>晶圆制造企业</strong><p>建设和运行产线，采购所需设备与服务。</p></div><p class="business-flow-edge" data-flow-direction="both">制造企业采购并付款；供应商交付设备与服务</p><div class="business-flow-node"><small>设备供给</small><strong>设备及装机服务商</strong><p>提供设备、维护和升级等服务。</p></div></div></div><figcaption>生产委托与设备采购分属不同交易：产品企业取得制造和封装交付，制造企业则采购生产设备及相应服务。</figcaption></figure>

这一串环节里，每一环都在先垫钱：NVDA 要投研发、向代工厂下生产单并备货，晶圆厂要建厂房、买设备，拿到芯片的云客户还得把机房和供电备齐、把机器装上架，算力才真正跑得起来。顺着产业链核对需求时，要把前后相接的阶段摆清楚，避免把同一笔算力需要在设计、代工和设备端重复加总。

### 从终端使用追到新增采购 {#nb-d01-semiconductor-demand}

机房里已经跑着的旧设备，同样会影响新卡采购节奏。CoreWeave（CRWV）管理层在 2026 年 8 月的业绩会上提到，公司新签了一份延续至 2029 年的 A100 算力服务合同。可见旧代芯片照样能接着对外卖算力。客户业务量上来以后，既可以先挖潜现有设备、提高利用率，也可以再添置新硬件；上游供应商能不能拿到新增订单，取决于客户具体走哪条路。[^coreweave]

哪怕客户决定买新卡，预算也未必全落在同一家身上。以 Amazon（AMZN）的 AWS 为例，AMZN 在 2026 年 4 月的公告里既披露了已经投用的自研 Trainium 芯片，又公布了自 2026 年起部署更多 NVDA GPU 的安排。同一家云厂商往往一边用自研芯片、一边采买外部芯片。Agent 查资料时，要先认清客户选了哪些型号、怎样切分预算，拎出跟目标公司直接相关的那一块，再去盯交货和机房上架进度。[^aws-gpu]

券商研报里的产能预测，也能顺着这些采购与交付节点逐项核验。KGI 在 2025 年 10 月 1 日的 TSMC 报告中，据当时客户计划上调了先进封装的需求与产能预测，并把后续短缺判断建立在客户维持当时需求水平的前提下。读到这类预测，接下来就要逐条核对：客户是不是仍在按原计划下单，封装产能有没有如期开出来，交出去的芯片和设备有没有顺利装进机房投入使用。拿后来披露的建设、采购与交付记录回头校准，才能知道原来的需求假设站不站得住、产能预估需不需要改。[^kgi]

</section>

<section data-reading-branch="industrial" data-branch-label="工业设备与工程服务" id="nb-d01-industrial">

## 工业设备与工程服务：从安装到持续运行 {#nb-d01-industrial-story}

### 同一台设备，不同阶段的生意 {#nb-d01-industrial-lifecycle}

Otis Worldwide（OTIS）既卖新电梯，也为在用电梯做维保、维修和改造。盖楼期间，开发商或总承包商采购新梯，OTIS 负责制造、供货并配合现场工期安装调试；货款通常先收预付款，再随材料到场和安装里程碑分批结算。等到楼宇投用，接手操心的是业主和设施管理方：电梯能不能稳定运行，出了故障谁来修，磨损零件谁来换。[^otis]

这一阶段，客户买单的是合同期内的持续维保服务。而且 OTIS 也承接其他品牌电梯的维保，所以一台电梯当初是谁造的、后来是谁在收维保费，需要拆开看。<span data-text-versions id="nb-d01-industrial-text-1">维保合同包到什么范围，会直接改变后续工作量与收费口径<span data-text-detail>（检查、保养、故障处理和零件更换各有相应的合同约定；某项维修是否已包含在服务价内，要回到相应条款。装机设备、在保设备和付费维保设备也各有计数范围）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>再往后用久了，业主还可能单独批一笔预算升级部件或整套系统，这类改造又要重新谈施工范围并安排停机窗口。

<figure class="business-flow"><div class="business-flow-grid"><div class="business-flow-node"><small>建设阶段</small><strong>新设备采购者</strong><p>购买设备、安装与调试。</p></div><p class="business-flow-edge">设备投入使用后</p><div class="business-flow-node"><small>运行阶段</small><strong>业主或管理人</strong><p>购买约定范围的维保和维修。</p></div><p class="business-flow-edge">出现升级需要时</p><div class="business-flow-node"><small>更新阶段</small><strong>改造采购者</strong><p>安排预算和停机，购买部件或系统升级。</p></div></div><figcaption>同一台设备在不同阶段可能对应不同采购者。新设备、维保和改造分别以实际合同为准。</figcaption></figure>

大型工程更是把设计、采购、施工与项目管理捆在一起。Fluor（FLR）按合同约定的范围交付这类服务：签可报销合同时，客户按约定报销成本并支付服务费；签总价合同时，承包商则按谈好的固定价完成约定的全部工作。<span data-text-versions id="nb-d01-industrial-text-2">两种合同结构直接改变了超支风险落在谁身上<span data-text-detail>（可报销合同仍有可报销范围、费率和履约条件；总价或最高限价合同也需连同范围变更、索赔和其他条款理解，另有混合合同。项目总投资、承包金额和承包商最终取得的收入各有范围）</span>。[^fluor]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>比较工程订单时，单看合同总额不够，还得弄清金额覆盖了哪些活、成本波动由哪一方扛。

### 订单与项目进度 {#nb-d01-industrial-demand}

签下订单只是起点，项目能不能按节点推进才是后半程。签约、拿到开工通知、制造施工、交付验收与回款，每一步都标示着工程走到了哪里。GE Vernova（GEV）在 2023 年公布了一份为业主 EnBW 提供燃气轮机设备、建设与后续服务的订单；再翻开业主的 Heilbronn 项目进度页，就能顺着看到核心部件到场、启动调试和商业投运的最新时间表。<span data-text-versions id="nb-d01-industrial-text-3">把供应方早先的公告和业主后来的更新对照，立刻能发现预期投运时间已经往后挪了<span data-text-detail>（2023 年 11 月的供应方公告预计于 2026 年底投运；2026 年 9 月 27 日读取的业主项目表暂定于 2027 年下半年投入商业运行）</span>。[^gev]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>追工业项目时，看清订单此刻卡在哪一关、后面还有几道关要过，远比只记签约总额有用。

核对需求时，Agent 可以先查直接采购方与供应方的进度披露，确认项目有没有动工、关键设备和分包能不能按期到场；若订单来自总包，而项目资金或审批仍不明朗，就再往前追一层，查背后的业主。看维保要盯续签率和覆盖台数，看改造要盯业主预算与排期。要是研报拿订单增速直接往外推收入，就要问清订单按什么工期确认；拿装机总量往外推维保收入，也要问清其中多少台真正签了付费合约。

</section>

<section data-reading-branch="healthcare" data-branch-label="医药与医疗服务" id="nb-d01-healthcare">

## 医药与医疗服务：采用、采购与支付 {#nb-d01-healthcare-story}

### 一次诊疗中的不同交付 {#nb-d01-healthcare-delivery}

以美国医疗市场为例，先要把患者接受的医疗服务和医院对外的产品采购拆开。患者需要治病，医生参与定方案，医疗机构统筹医护人员与场地，并对外采购药品和器械；诊疗结束后，账单再由商业保险、政府项目和患者按约定分担。一场治疗最终把收入带给谁，取决于药械与服务各自落在哪一笔交易里。

Johnson & Johnson（JNJ）横跨药品与医疗器械两条线。药品常要经过医药批发商、药房或医院才用到患者身上，直接向药厂进货付款的买方和最终吃药的患者往往不是同一个人；器械则可由医院直接采购，也可经分销渠道送达，再由医护人员在诊疗中使用。器械内部还分耐用设备、植入物与一次性耗材：买一台能用多年的设备，和随手术持续消耗的耗材，补货节奏完全不同。同一场手术，可能同时牵动好几家药械厂商的交付。[^jnj]

<span data-text-versions id="nb-d01-healthcare-text-1">医院先把药和器械买回来，再用在患者诊疗上，产品买卖与医疗服务因此分属两笔不同的交付<span data-text-detail>（机构直接向药厂采购时，药厂售价与机构采购价就是同一笔交易的两端；经分销渠道采购时，则要分清各环节的买卖。药品销售的返利、折扣和退货会影响净收入；器械究竟按设备出售、租赁、耗材或服务收费，需按所选产品合同确认）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

HCA Healthcare（HCA）赚的则是医疗服务的钱。患者接受住院、门诊或手术治疗，医院投入医护人力、床位与耗材，付款方涵盖政府医疗项目、商业保险和患者本人。<span data-text-versions id="nb-d01-healthcare-text-2">医院最后能收到多少钱，取决于对应项目或合同的定价规则<span data-text-detail>（相关支付可以按病例、诊断、住院日或服务项目计算；Medicare、Medicaid、商业保险和患者自付各有适用关系。医院账单标价、预计可收金额和最后收到的现金需要分别辨认）</span>。[^hca]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>HCA 随着诊疗完成确认收入，现金真正入账却是下一步，中间还得经过核定与结算。

<figure class="business-flow" data-ff-views><div class="ff-switch" role="group" aria-label="选择关系" hidden><button type="button" data-ff-view-choice="r0" aria-pressed="true">药械采购</button><button type="button" data-ff-view-choice="r1" aria-pressed="false">诊疗与自付</button><button type="button" data-ff-view-choice="r2" aria-pressed="false">第三方支付</button></div><div class="business-flow-route" data-ff-only="r0"><p class="business-flow-route-title">直接采购药品或器械</p><div class="business-flow-grid"><div class="business-flow-node"><small>产品供给</small><strong>药品与器械企业</strong><p>直接向医疗机构供应药品或器械。</p></div><p class="business-flow-edge" data-flow-direction="both">向机构供货；机构按采购安排付款</p><div class="business-flow-node"><small>采购与采用</small><strong>医疗机构</strong><p>采购相应产品，供诊疗使用。</p></div></div></div><div class="business-flow-route" data-ff-only="r1"><p class="business-flow-route-title">诊疗与患者自付</p><div class="business-flow-grid"><div class="business-flow-node"><small>服务提供者</small><strong>医疗机构与医护团队</strong><p>组织人员、设施和所需药械。</p></div><p class="business-flow-edge" data-flow-direction="both">向患者提供诊疗；患者按安排支付自付部分</p><div class="business-flow-node"><small>接受服务</small><strong>患者</strong><p>接受诊疗，承担约定的自付费用。</p></div></div></div><div class="business-flow-route" data-ff-only="r2"><p class="business-flow-route-title">第三方支付</p><div class="business-flow-grid"><div class="business-flow-node"><small>费用支付方</small><strong>保险与政府项目</strong><p>按适用项目和合同核定费用。</p></div><p class="business-flow-edge" data-flow-direction="forward">按项目与合同向医疗机构支付</p><div class="business-flow-node"><small>服务提供者</small><strong>医疗机构</strong><p>提供相应服务，并办理结算。</p></div></div></div><figcaption>按美国医疗业务的关系示意：图中展示机构直接采购，产品也可以经分销渠道供货。诊疗与支付再按各自合同或项目安排完成。</figcaption></figure>

### 治疗需要、产品采用与支付 {#nb-d01-healthcare-demand}

从患者有病要治，到某款药或器械真正用上，中间隔着准入、采用、供货与报销几道关。获批上市只说明产品拿到了入场券；医院愿不愿意采购，还要看临床路径、进院流程和医生习惯；患者能不能顺利负担，又取决于支付方给不给报销。Agent 核对时，要先锁定具体产品和市场，再沿着渠道、医院和支付方逐环查证。

如果药厂直接出货给批发商，就先查批发商的进货与库存，再去核医院处方或药房配药；研究医院，则把实际诊疗量和支付方结算分开看。企业研报常爱用患病人数估算“市场空间”，读这类数字时不妨一路问下去：多少治疗需求能转成实际就诊，医院按什么条件采购，最后有多少收入真正落进目标公司的账上。

</section>

<section data-reading-branch="finance" data-branch-label="银行、支付与保险" id="nb-d01-finance">

## 银行、支付与保险：资金与未来承诺 {#nb-d01-finance-story}

### 账户、贷款与支付各自提供什么 {#nb-d01-finance-services}

往银行存钱、找银行借钱、刷卡买东西，表面都和钱打交道，背后却是几门不同的生意。拿 JPMorgan Chase（JPM）的消费银行来说，储户把钱存进账户，保留按条款随时支取的权利；借款人拿到资金，往后按期还本付息。同一个人可以既在银行存钱、又向银行借钱，但存入的本金、放出的本金，以及银行收付的利息和手续费，在账上各归各，不能混在一起。[^jpm]

为撑起这些承诺，银行既要筹措资金、支付存款和融资成本，也要自己扛下借款人违约带来的信用损失。存贷款余额只能画出业务盘子的一角；看新增贷款时，还得追问借款人拿钱去干什么、靠什么现金流还款。JPM 同时经营投行、资管等其他条线，这里先借消费银行的存贷款立住基本账。

再看 Visa（V），它向发卡行、收单行等机构提供支付网络处理服务。消费者刷卡时，发卡行服务持卡人，收单行服务商户，支付网络负责把授权、清算和结算跑通。<span data-text-versions id="nb-d01-finance-text-1">商户刷卡被扣的手续费、收单行分给发卡行的交换费，以及 V 自己真正赚到的网络处理收入，得一笔笔分开算<span data-text-detail>（交换费通常由收单方向发卡方支付；网络收费涉及支付金额、处理笔数、跨境和增值服务等安排，并受客户激励影响。V 不提供发卡行的持卡人消费信贷，但仍有自己的结算资金责任）</span>。[^visa]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>所以卡上刷出多大的流水，跟支付网络最后收走多少服务费，完全是两码事。

<figure class="business-flow" data-ff-views><div class="ff-switch" role="group" aria-label="选择业务" hidden><button type="button" data-ff-view-choice="r0" aria-pressed="true">银行</button><button type="button" data-ff-view-choice="r1" aria-pressed="false">支付网络</button><button type="button" data-ff-view-choice="r2" aria-pressed="false">保险</button></div><div class="business-flow-route" data-ff-only="r0"><p class="business-flow-route-title">银行：存款与贷款</p><div class="business-flow-grid"><div class="business-flow-node"><small>存款客户</small><strong>储户</strong><p>使用账户，保留按条款提款的权利。</p></div><p class="business-flow-edge" data-flow-direction="both">储户存入本金；银行按约办理提款</p><div class="business-flow-node"><small>账户与融资</small><strong>银行</strong><p>提供账户和贷款，负担资金成本与信用损失。</p></div><p class="business-flow-edge" data-flow-direction="both">银行发放贷款；借款人还本付息</p><div class="business-flow-node"><small>融资客户</small><strong>借款人</strong><p>使用借款，并按约偿还。</p></div></div></div><div class="business-flow-route" data-ff-only="r1"><p class="business-flow-route-title">支付网络：处理服务</p><div class="business-flow-grid"><div class="business-flow-node"><small>网络客户</small><strong>发卡、收单等机构</strong><p>为持卡人或商户服务，并使用支付网络。</p></div><p class="business-flow-edge" data-flow-direction="both">机构按约付费；网络提供处理服务</p><div class="business-flow-node"><small>网络服务方</small><strong>支付网络</strong><p>帮助完成授权、清算和结算等处理。</p></div></div></div><div class="business-flow-route" data-ff-only="r2"><p class="business-flow-route-title">保险：保费与未来责任</p><div class="business-flow-grid"><div class="business-flow-node"><small>购买保险</small><strong>投保人</strong><p>按合同购买保障并支付保费。</p></div><p class="business-flow-edge" data-flow-direction="forward">向承保公司支付保费</p><div class="business-flow-node"><small>承担责任</small><strong>承保公司</strong><p>收取保费，并承担合同约定的责任。</p></div><p class="business-flow-edge" data-flow-direction="forward">在约定情形出现时赔付或给付</p><div class="business-flow-node"><small>取得赔付或给付</small><strong>合同约定的收款方</strong><p>依保单确定相应的收款权利。</p></div></div></div><figcaption>银行分别与储户、借款人交易；支付网络和保险各有自己的客户与责任。本金、服务费与保费分别理解，保险收款方及条件由合同确定。</figcaption></figure>

### 收取保费以后的责任 {#nb-d01-finance-insurance}

保险卖的则是另一种承诺。Chubb（CB）涵盖财产与责任保险、寿险等类别：投保人缴保费，买下约定期间与范围的保障；一旦合同列明的事故发生，承保公司就要依约赔付。例如 CB 英国商业财产险的介绍里，同时列出了财产损坏保障与受损后的营业中断保障。即便中间经由经纪人或代理人成交，保费落袋之后，保障义务和潜在赔付责任依然挂在承保公司身上。[^chubb]

不同险种的承诺跨度差别极大，收进保费与真正赔钱之间有时隔着好几年。<span data-text-versions id="nb-d01-finance-text-2">保险公司因此要提前估算后续赔付、计提负债，并备足资产与资本来兜底<span data-text-detail>（损失准备金反映对尚未支付的赔款及相关费用的估计，属于保险负债。保单的保障期间与赔付持续时间也可能不同，部分已发生事故的理赔会在保障期结束后继续）</span>。[^chubb]<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>研究保险生意，永远要把投保需求与公司履行赔付的条件放在同一张桌子上看。

沿着这三类业务去查需求，Agent 追问的问题也完全不同：看银行，查客户为什么借钱、靠什么还；看支付网络，分清是真实消费变多了，还是交易换了支付渠道或路由；看保险，拆清保费变动究竟来自提价、扩保额、资产价值上升还是新保单，再看它同时带进来多大的赔付敞口。研报里写着“规模增长”时，多追问这两句，收费和风险的变化就露出来了。

</section>

<section data-reading-branch="energy" data-branch-label="能源与原材料" id="nb-d01-energy">

## 能源与原材料：商品、加工与输运 {#nb-d01-energy-story}

### 同一批资源可以形成不同生意 {#nb-d01-energy-products}

在油气行业，公司既可以自己采油卖资源，也可以买进原料加工成燃油和化工品。ExxonMobil（XOM）就同时横跨上游油气生产、下游炼化和化工几大板块。上游卖的是采出来的原油和天然气，下游卖的则是成品油和化工原料，两边对接的买家和用途截然不同。分析 XOM 的需求，先得拎清眼下讨论的是哪种产品、落在产业链哪一环。[^xom]

资源开采需要先勘探建井，再逐年产出；加工厂则要备齐装置、买进原料、组织生产并把成品卖出去。自购自销的加工企业两头都要面对市场价格，既看原料价、又看成品价，还得算进能耗、运维和库存波动。<span data-text-versions id="nb-d01-energy-text-1">成品售价与原料成本之间的价差，能帮我们抓住加工生意的脉络，但最终盈亏还要结合实际加工成本来看<span data-text-detail>（产品收率、能源消耗、运输、检修及库存等会影响结果；商品交付的品质、地点和时间也应与合同对应。这里只说明收入与成本的关系，不用一个商品报价代替整项业务的经营结果）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>下游买家拿到成品后，往往还要继续加工，最终流向交通、制造等终端领域。

同一批物料，也可以换一种赚法：不买货、不卖货，只收加工费或过路费。Kinder Morgan（KMI）主营管道与储运，它在业务介绍里就列出了与 BP North America 的长期凝析油加工协议——客户按约购买加工服务，KMI 提供设施与处理能力并收取服务费。[^kmi]

<figure class="business-flow"><div class="business-flow-route"><p class="business-flow-route-title">自购原料，再出售产品</p><div class="business-flow-grid"><div class="business-flow-node"><small>原料供给</small><strong>原料供应方</strong><p>按合同交付约定原料。</p></div><p class="business-flow-edge" data-flow-direction="both">供应方交原料；加工企业支付采购款</p><div class="business-flow-node"><small>购买与加工</small><strong>加工企业</strong><p>采购原料、组织加工，再销售产品。</p></div><p class="business-flow-edge" data-flow-direction="both">加工企业交产品；客户支付货款</p><div class="business-flow-node"><small>产品购买</small><strong>产品客户</strong><p>接收产品，用于后续加工或使用。</p></div></div></div><div class="business-flow-route"><p class="business-flow-route-title">按加工或输运服务收费</p><div class="business-flow-grid"><div class="business-flow-node"><small>服务采购</small><strong>服务客户</strong><p>购买合同约定的加工或输运等服务。</p></div><p class="business-flow-edge" data-flow-direction="both">客户支付服务费；服务商提供约定服务</p><div class="business-flow-node"><small>提供能力</small><strong>加工或输运服务商</strong><p>运行设施，按合同处理或输运物料。</p></div></div></div><figcaption>自购自销围绕原料与产品买卖；服务收费围绕加工或输运等服务。两条路径分别核对付款、交付与实际使用。</figcaption></figure>

收费模式一换，盯需求的重点也跟着变。卖商品要看谁愿意按现价接货；卖输运或加工服务，则要看客户订了多少容量、实际跑了多少量，以及合同按什么公式计费。<span data-text-versions id="nb-d01-energy-text-2">服务费可能挂钩预订容量、实际吞吐量，也可能按服务期间固定收取<span data-text-detail>（按容量还是实际数量付费、有无最低承诺、货物所有权由谁保留，都要以具体合同为准。一项设施的收费安排不能推广到该公司的全部业务）</span>。<button type="button" class="text-version-toggle" data-text-version-toggle hidden></button></span>

### 沿客户提货与实际用途核需求 {#nb-d01-energy-demand}

生产商拿到订单后，还要按期交付给买方；看炼化厂采购原料，则要对照它的开工率与库存。贸易商多提货，货既可能很快进入终端消费，也可能先堆在储罐里；托运人订了管道或储运容量，实际吞吐量还得看后续货物流转。Agent 通常先查直接买方或托运人的提货与开工情况，关键问题说不清时，再往下游终端多追一层。

遇到同一轮行业波动，不同研报常给出相反的解释，这时候先核清它们谈的到底是哪类业务。油气需求起伏直接左右上游销售，原料与成品价差拉大或收窄影响炼化利润，而管道与加工服务更看具体线路和长约条款。把这些解释放回客户订单、提货、库存与装置开工数据里一对照，影响究竟落在哪一环就能分辨出来。

</section>

## 需求判断与证据核对 {#nb-d01-evidence}

生意做法不同，核实需求要翻的账本自然不同。想确认客户是不是真下了单，得查采购合同或采用记录；想确认公司是不是把活干完了，得看实际交货与使用量；碰到收了钱还得长期运维、或者背着赔付责任的业务，更要持续跟踪合同后半程的履约情况。

实操时，Agent 可以把公司公告、客户材料、供应商披露和券商研报摆在一起交叉核对。先确认几份材料说的是不是同一款产品、同一个项目和同一段时间，再去区分真实需求扩大、客户提前备货、渠道补库存还是切换供应商。通常从直接客户或供应商查起，有缺口再往下一级延展；一时查不到的地方先记成待核问题，已有判断则写清依据以及什么新变化会推翻它。

后续资料若继续印证原判断，就沿用这套认识；一旦采购对象、交付节点或使用范围生变，就只更新受影响的那一块。研报当时的预测和后来兑现的结果分开留档，等到新订单或交货数据落地，Agent 就能沿着当初的依据逐条回查。

摸清一门生意靠谁买单、怎样收费以后，接下来就可以追问它为什么增长。下一篇[《收入增长与市场预期》](/zh/notebook/revenue-growth-expectations/)会拆解客户数、用量、净价和产品组合的变化，再把它们接到市场预期与股价反推上。

<link rel="stylesheet" href="/notebook/flow-figures.css?v=20261126">
<link rel="stylesheet" href="/notebook/business-branches.css?v=20261126">
<script src="/notebook/flow-figures.js?v=20261012-6" defer></script>

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
- [保证金、对冲与期间现金](https://ou-liu-red-sugar.github.io/zh/notebook/settlement-margin-cash/)
- [Agent 时代的基本面投资](https://ou-liu-red-sugar.github.io/zh/notebook/investment-returns/)
- [股票、公司与股价](https://ou-liu-red-sugar.github.io/zh/notebook/stocks-company-price/)
- [股东回报：分红、回购与增发](https://ou-liu-red-sugar.github.io/zh/notebook/shareholder-returns-buybacks-issuance/)
