# 估值对象与业务状态：从研究拆分到估值组

以2026年9月20日的Amazon研究为例，按利润机制、资本责任与普通股权利组织估值分组，检验共同成本分摊的影响.

Entry: zh-p28 | Node: P28 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的全部指定单元，所选可选分支再读 optional_readings，核对版本、期间、单位及支持内容. 缺少必要单元时先取得等价可读原件，再进行依赖它的讲解. 区分广告、国际和履约的经济身份，结合Note8及FASB重大费用条件建立估值组. 推导利润移转的价值变化，以固定21/22倍核5B移转，再检验客户重叠但合同与设施可识别的两条产品线. 先以完整推理任务诊断，再让读者计算和解释；按错误反馈，使用迁移题检验. 采用所列日期研究和教学输入，runtime_reading_log记录实际来源与范围.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "PBCD-METHOD-BUSINESS",
      "title": "业务关系、校准与共同经营状态",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "pm-business-state-business-boundaries",
        "scope": "完整业务边界节",
        "purpose": "带类型识别对象"
      },
      "supports": "本站原创方法摘编，规定业务边界、校准与共同资本责任；公开原件各自支持实例，不是完整方法的外部背书.",
      "authors": [
        "本站方法"
      ]
    },
    {
      "source_id": "PBCD-METHOD-RR",
      "title": "业务状态下的条件定价、普通股桥与Risk-Reward",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "pm-conditional-rr-valuation-groups",
        "scope": "完整估值组节",
        "purpose": "独立定价条件而非客户独占"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.",
      "authors": [
        "本站方法"
      ]
    },
    {
      "source_id": "PBCD-CASE-AMZN",
      "title": "Amazon：2026-09-20历史条件研究案例",
      "version": "研究截止2026-09-20；教学摘编2026-09-21",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "case-amzn-groups",
        "scope": "业务/资源/地域到两组的映射",
        "purpose": "定位Ads重复在哪里"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.",
      "authors": [
        "本站历史研究"
      ]
    },
    {
      "source_id": "src-amzn-2026q2",
      "title": "Amazon Form 10-Q, quarter ended June 30, 2026",
      "version": "2026Q2 SEC filing",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm"
      },
      "required_unit": {
        "locator": "Note8 pp22–25",
        "scope": "报告分部定义、费用分配、产品收入与资产表",
        "purpose": "原会计视角与研究视角区分"
      },
      "supports": "分部范围与经营费用使用分配、产品收入、PP&E取得和折旧；债务/租赁、SBC/RSU等资本权利实例. 未来余额不由当期附注直接给出.",
      "authors": [
        "Amazon.com, Inc."
      ]
    },
    {
      "source_id": "PBCD-FASB-2023-07",
      "title": "Segment Reporting (Topic 280): Improvements to Reportable Segment Disclosures",
      "version": "ASU 2023-07, November 2023",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://storage.fasb.org/ASU%202023-07.pdf"
      },
      "required_unit": {
        "locator": "50-26A–26C、50-27及55-15C",
        "scope": "完整规定和共同费用例",
        "purpose": "重大费用与管理层视角的支持边界"
      },
      "supports": "CODM管理视角、定期提供并包含在利润计量中的重大费用、其他分部项目与共同费用；不决定投资者估值组.",
      "authors": [
        "FASB"
      ]
    }
  ],
  "optional_readings": [
    {
      "source_id": "PBCD-CROUZET-EBERLY-2023",
      "title": "Rents and Intangible Capital: A Q+ Framework",
      "version": "Journal of Finance78(4),2023,DOI10.1111/jofi.13231",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/Qplus_published.pdf"
      },
      "required_unit": {
        "locator": "pp1873–1875",
        "scope": "摘要/开篇引言选段",
        "purpose": "无形资本与经济租金的交互视角；不采用Q+估值"
      },
      "supports": "无形资本和经济租金的交互视角；不证明AMZN分部倍数或具体共享费用归属.",
      "required_only_if_selected": true,
      "authors": [
        "Nicolas Crouzet",
        "Janice C. Eberly"
      ]
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_id": "CASE-AMZN-20260920",
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json",
    "identity": "冻结2026-09-20输入；不同JSON字段保留事实/假设/条件结果身份",
    "selected_keys": [
      "case_id",
      "metadata",
      "business_views",
      "grouping_sensitivity"
    ],
    "data": {
      "case_id": "CASE-AMZN-20260920",
      "metadata": {
        "information_cutoff": "2026-09-20",
        "purchase_date": "2026-09-18",
        "valuation_date": "2029-12-31",
        "purchase_price": 253.71,
        "currency": "USD",
        "money_unit": "billion",
        "share_unit": "billion",
        "quote_type": "regular_close",
        "quote_time": "16:00 EDT",
        "years": 3.2854209445585214,
        "cash_distributions": 0,
        "original_shareholder_additional_cash": 0,
        "result_identity": "历史研究的未来条件结果；不是当期目标价；期间分配为零；救援发行不等于原股东强制追加现金"
      },
      "business_views": [
        {
          "id": "AWS",
          "label": "AWS",
          "type": "reportable_segment_and_business",
          "group": "AWS",
          "reason": "独立分部收入/OI及资本资料；独立客户不是必要条件"
        },
        {
          "id": "1P",
          "label": "自营商品",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "按商品收入确认，采购、存货与履约责任"
        },
        {
          "id": "3P",
          "label": "第三方卖家服务",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "服务收费不是卖家GMV；履约资源与1P共享"
        },
        {
          "id": "Ads",
          "label": "广告",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "收入已进入地域分部；依赖购物流量、库存和技术"
        },
        {
          "id": "Prime",
          "label": "Prime/订阅关系",
          "type": "charging_business",
          "group": "nonAWS",
          "reason": "会费与配送/内容共同投入；不能再加一份相同留存价值"
        },
        {
          "id": "International",
          "label": "国际",
          "type": "geography",
          "group": "nonAWS",
          "reason": "同一收费活动的地域视角，不是六收入类别之外的收入"
        },
        {
          "id": "Fulfillment",
          "label": "履约网络",
          "type": "shared_resource",
          "group": "nonAWS",
          "reason": "同时服务自营、卖家和会员安排；另有已披露的服务收费"
        },
        {
          "id": "TechnologyContent",
          "label": "技术/内容资源",
          "type": "shared_resource",
          "group": "shared_by_usage",
          "reason": "依据实际使用进入所属分部；不是额外可直接加总的EV"
        }
      ],
      "grouping_sensitivity": {
        "direction": "nonAWS_to_AWS",
        "delta_ebit_bn": 5,
        "fixed_multiples": [
          21,
          22
        ],
        "price_effect": -0.4425797086055198,
        "identity": "固定分组与倍数的分摊敏感性，不是重估或任意重组方向结论"
      }
    }
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [
    "EXP-P28-GROUPING"
  ],
  "content_version": "2026-09-22-deep-review",
  "learning_task": "区分广告、国际和履约的经济身份，结合Note8及FASB重大费用条件建立估值组. 推导利润移转的价值变化，以固定21/22倍核5B移转，再检验客户重叠但合同与设施可识别的两条产品线."
}
```

## Supplied entry
研究拆分用于识别利润机制；估值分组要求盈利、资本责任、索取权与共同负担能够可靠归属. 本篇使用2026年9月20日的 Amazon 历史案例，把收费业务、地域、共同资源和报告分部映射到两个估值组，并检验利润分摊如何改变合计价值. [^case]

<a id="p28-views"></a>
## 业务、地域、资源与报告分部

| 视角 | 例子 | 回答的问题 | 能否直接与另一视角相加 |
|---|---|---|---|
| 收费业务 | 自营商品、第三方服务、广告、订阅 | 谁为什么付钱，按什么单位收费 | 只有同口径且不重叠的收入才可加 |
| 地域 | 北美、国际 | 在何处服务客户、承担当地竞争和成本 | 不能再叠加一遍全球广告收入 |
| 共同资源 | 履约网络、技术平台、内容、品牌与会员关系 | 多项收费活动怎样共享能力和投入 | 通常不是另一笔独立营业收入 |
| 报告分部 | 北美、国际、AWS | 管理层怎样汇总和考核经营结果 | 按附注的勾稽关系加总 |

AWS既是一组收费业务，也是披露经营利润的报告分部；国际是地域视角. 履约可指卖家收费服务，也可指配送资源，使用时按具体经济对象区分.

Amazon Note 8将广告、订阅等纳入北美和国际，按使用分配履约、技术等费用，报告分部间无内部收入交易. AWS、北美、国际按分部加总；自营、卖家服务、广告、订阅等按产品收入加总，两种视图分别覆盖同一集团.[^amzn]

<a id="p28-management"></a>
## 分部披露与估值边界

会计分部披露具有管理层视角. FASB ASU 2023-07 要求披露定期提供给主要经营决策者、且包含在报告分部利润计量中的重大费用，并对其他分部项目、所用利润计量及共同费用等给出要求. 它帮助读者看清“管理层看到的利润里面包含什么”. [^fasb]

分部费用披露提供管理口径证据，但独立定价还需识别该收费业务的资产、未来维护投入、共同资源成本和普通股权利. 若后来取得可靠的成本、资本和权利资料，估值边界可以据此调整；仅有收入披露仍不足以识别独立利润.

<a id="p28-group-test"></a>
## 估值组识别

**估值组**是指，在同一观察期业务状态下，盈利、资本责任、索取权和共同负担能够以足够可靠的方式归属，从而可以采用一致定价口径的一组业务.[^method]

归属检查包括为收入服务的成本、维持和扩张投入、集团普通股与其他持有人的权利，以及共享客户、平台和总部服务的费用.

客户重叠可形成共同需求或交叉销售，同时两条产品线仍可有可识别的合同、盈利和资本. 估值边界取决于这些经济归属能否区分.

本例AWS的经营利润、设备资本和服务状态可识别，形成一组；非AWS继续分别研究商品、卖家、广告、订阅及地域，定价时使用已包含这些贡献的整合平台利润.

商品与会员体验影响回访，流量形成广告机会，广告和卖家收费增加平台利润，技术与履约同时服务多项活动. 若将广告收入单列、获客和共同平台成本全留给商品业务，会高估广告的独立利润.

无形资本研究提示：无形资本与经济租金可能共同影响企业价值；这里的“租金”指超过相应竞争基准的回报. 本例是否合并定价仍由利润、资本、索取权和共同负担的可识别性决定. [^qplus]

<a id="p28-allocation"></a>
## 分摊与价值敏感性

我们把两个组的经营利润记为 $E_A,E_R$，固定倍数为 $m_A,m_R$. 若其他条件不动，把 $x$ 单位利润从非AWS移给AWS，则

$$
V'=m_A(E_A+x)+m_R(E_R-x),
\qquad V'-V=(m_A-m_R)x.
$$

纯分摊保持总利润，但在倍数不同时改变合计价值；倍数相同或移转额为零时，合计价值保持不变.

历史Base倍数为21与22，终点股数11,297.4M，将5B美元EBIT从非AWS移向AWS：

$$\Delta P=\frac{5(21-22)\times1,000}{11,297.4}\approx-0.443\text{美元/股}.$$

移转方向反转，影响符号反转；两组倍数差越大，同额分摊的价值敏感性越高. 接受哪种分摊取决于资源使用和权利归属的证据.

独立利润难以识别时可合并定价；存在几种有依据的分摊时，分别计算其价值影响，保留相应范围.

<a id="p28-experiment"></a>
## 视角与分摊实验

<div data-experiment-slot="EXP-P28-GROUPING"></div>

[类型与估值组实验](/notebook/labs/p-bcd/interactions.html#EXP-P28-GROUPING)先区分“广告”“国际”“履约”的收费业务、地域与资源身份；连线只表示包含、服务或按使用分配. 分摊实验固定21/22倍，正值表示 EBIT 从非AWS移向AWS，集团EBIT保持不变；下表给出同一设定的静态结果.

| 从非AWS移向AWS的EBIT | 集团EBIT变化 | 合计经营价值变化 | 每股变化 |
|---|---:|---:|---:|
| −5 | 0 | +5 | +0.443 |
| 0 | 0 | 0 | 0 |
| +5 | 0 | −5 | −0.443 |

<a id="p28-forward-state"></a>
## 未来状态与经济归属

观察期的经营价值涵盖客户、人员、开发能力、设施及随附义务. 未来状态若仍依赖集团平台，其预测利润和资本责任也应继续承担共同投入.

会计可比调整处理确认口径及特定项目，业务状态调整处理利用率、产品组合、周期和竞争，普通股归属处理税、融资及其他权利. 三类调整分别改变不同的计量对象.

分组输出应明确：哪些业务继续细研究、哪些结果可独立定价、哪些共同负担留在组内，以及哪些项目进入集团普通股桥.

<a id="p28-exercises"></a>
## 练习与解析

**解释题.** 广告收入已进入北美和国际收入，相关贡献也已进入这两个地区的预测利润. 再给广告单独加一份 EV，怎样才能不重复？

**解析.** 从原组剥离广告盈利、资本和权利，计入其对流量、会员及技术资源的使用，再重算原组. 单独加广告EV而保留原组全部利润，会重复资本化同一贡献.

**计算题.** 两业务 EBIT 为20与30，倍数分别10与30. 研究员把3的共同费用从第二组改分给第一组. 总利润与经营价值分别怎样变化？

**解析.** 利润变17与33，总额仍50. 原价值 $20\times10+30\times30=1100$，新价值 $17\times10+33\times30=1160$，增加60，来自利润移向高倍数组. 调整是否有据取决于共同费用的实际使用关系.

**迁移题.** 两条产品线服务同一批企业客户，但分别有可识别合同、生产设施、人员与售后义务. 客户重叠是否迫使合并定价？

**解析.** 可识别的盈利、资本和权利允许分别定价，客户重叠带来的共同需求和交叉销售进入共同情景. 关键平台成本或内部价格无法拆清时，合并相关业务或保留分摊范围.

[^amzn]: Amazon 2026Q2 10-Q，Note 8，pp22–25，分部范围、费用分配、收入/OI与分部资产表. [原文](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm).
[^fasb]: FASB，ASU 2023-07，2023-11；Topic 280，50-26A–26C、50-27及55-15C共同费用示例. [原文](https://storage.fasb.org/ASU%202023-07.pdf).
[^method]: [条件定价与Risk-Reward短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-valuation-groups).
[^case]: [CASE-AMZN-20260920](/zh/notebook/amzn-research-20260920/#case-amzn-groups)，固定日期的业务/分部/估值组映射及分摊敏感性.
[^qplus]: 选读：Nicolas Crouzet、Janice Eberly，Rents and Intangible Capital: A Q+ Framework，Journal of Finance 78(4), 2023，pp1873–1875摘要/引言. [作者刊行版](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/Qplus_published.pdf).

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P28-GROUPING",
    "title": "估值对象与业务状态：从研究拆分到估值组",
    "anchor": "p28-experiment",
    "description": "分清收费业务、地域、资源与报告分部，按利润、资本和权利的可识别性形成估值组.",
    "inputs": {
      "card": {
        "allowed": [
          "AWS",
          "1P",
          "3P",
          "Ads",
          "Prime",
          "International",
          "Fulfillment",
          "TechnologyContent"
        ],
        "default": "Ads"
      },
      "shift_ebit": {
        "min": -5,
        "max": 5,
        "default": 0,
        "unit": "USD billion, nonAWS→AWS positive"
      }
    },
    "outputs": {
      "card": "typed role/reporting group/pricing group",
      "delta_ev": "(21−22)*x",
      "delta_price": "(21−22)*x/11.2974"
    },
    "units": {
      "money": "USD billion for company amounts; USD per share for outcomes",
      "shares": "billion",
      "probabilities": "fractions summing to one"
    },
    "identity": "frozen dated research or explicitly marked bounded teaching arithmetic",
    "static_equivalent": {
      "reader": "https://ou-liu-red-sugar.github.io/zh/notebook/business-states-valuation-groups/#p28-experiment",
      "lab": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/interactions.html#EXP-P28-GROUPING",
      "without_javascript": "默认完整表和主要对照保留；不把参数规格当运行结果"
    },
    "algorithm": "按类型展示映射；reallocation在固定两倍数下守恒EBIT，不建立新组估值.",
    "boundaries": [
      "地域/资源不可当收入单元加总",
      "不以客户独占为条件",
      "finite且x∈[-5,5]"
    ],
    "default_values": {
      "shift_5_delta_price": {
        "direction": "nonAWS_to_AWS",
        "delta_ebit_bn": 5,
        "fixed_multiples": [
          21,
          22
        ],
        "price_effect": -0.4425797086055198,
        "identity": "固定分组与倍数的分摊敏感性，不是重估或任意重组方向结论"
      }
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json"
  }
]
```

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): Amazon 历史研究的事实、分析代理、四条未来路径、5 项替代、4 套权重和 16 组已算分布. 价格使用固定研究时点报价；各情景数值是代表点.
- [Rents and Intangible Capital: A Q+ Framework](https://www.kellogg.northwestern.edu/faculty/crouzet/html/papers/Qplus_published.pdf): 无形资本和经济租金的交互视角；不证明AMZN分部倍数或具体共享费用归属.
- [Segment Reporting (Topic 280): Improvements to Reportable Segment Disclosures](https://storage.fasb.org/ASU%202023-07.pdf): CODM管理视角、定期提供并包含在利润计量中的重大费用、其他分部项目与共同费用；不决定投资者估值组.
- [业务关系、校准与共同经营状态](https://ou-liu-red-sugar.github.io/zh/notebook/business-relations-calibrated-states/): 本站业务模型方法：业务边界、经营关系校准、共同资本与股东权利的归属.
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.
- [Amazon · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对自营零售、第三方卖家服务与 AWS 的业务口径，以及存货、设备和现金流的合并披露. 案例的解释由作者根据研究整理.

## Content relations
```json
[
  {
    "from": "zh-p28",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  },
  {
    "relation": "requires",
    "to": "zh-p04",
    "reason": "本篇承重步骤实际使用该能力",
    "required_competence": "能从业务关系识别共同资源与经营状态",
    "from": "zh-p28"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmbusinessstate",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p28"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmconditionalrr",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p28"
  },
  {
    "relation": "illustrated_by",
    "to": "zh-amzn-research-20260920",
    "reason": "固定日期案例；不新建第二个别名案例",
    "period": "2025Q4–2029",
    "cutoff": "2026-09-20",
    "from": "zh-p28"
  },
  {
    "relation": "supported_by",
    "to": "src-amzn-2026q2",
    "reason": "分部范围与经营费用使用分配、产品收入、PP&E取得和折旧；债务/租赁、SBC/RSU等资本权利实例. 未来余额不由当期附注直接给出.",
    "locator": "Note8 pp22–25; Note3 pp13–14; Note4 p15 Commitments; Note5 pp17–18 debt table and notes; Note6 p19",
    "scope": "本次重开Note8整单元；租赁余额/期限及成本表、融资承诺表与脚注、债务本金/账面及费用桥、RSU/SBC单元. 不是整份10-Q全部审阅.",
    "optional": false,
    "from": "zh-p28"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-FASB-2023-07",
    "reason": "CODM管理视角、定期提供并包含在利润计量中的重大费用、其他分部项目与共同费用；不决定投资者估值组.",
    "locator": "280-10-50-26A–26C; 280-10-50-27; 280-10-55-15C",
    "scope": "指定修订单元与共同费用例；实看PDF物理pp12–13、20，印刷pp8–9、16. 未称全文76页已读.",
    "optional": false,
    "from": "zh-p28"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-CROUZET-EBERLY-2023",
    "reason": "无形资本和经济租金的交互视角；不证明AMZN分部倍数或具体共享费用归属.",
    "locator": "pp1873–1875 abstract and opening introduction excerpt",
    "scope": "三页原文/原页；不是全篇模型、证明或实证复现. 统一选读，不列P28硬必读.",
    "optional": true,
    "from": "zh-p28"
  },
  {
    "from": "p28-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P28-GROUPING",
    "at_section": "p28-experiment",
    "reason": "分清收费业务、地域、资源与报告分部，按利润、资本和权利的可识别性形成估值组."
  }
]
```

## Related entries
