# 竞争、差异化与利润分配

从客户替代选择推到价格、数量与利润，并用会员零售披露区分机制与结果.

Entry: zh-ei07 | Node: EI-07 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先按所选分支实际读取本包 required_readings 完整指定单元，记录题名、版本、范围及支持内容. 必读齐全后教学；缺失时先补齐原文. 诊断：在c＝10、t＝6、两价16时预测企业1提价到18的数量与利润，再完成边界客户、需求、一阶条件和角点验证. 保留完全覆盖、无退出选项及t＝0同价平分约定. 重建t下降时两家均衡. 读取两家会员零售损益后核收入、利润和费用归属；续费率保留完整窗口及会员范围. 用订阅软件留存题提出竞争解释及判别证据. 已掌握步骤直接跳过，先让读者作答，再按正文完整解析反馈条件、计算和机制. runtime_reading_log 记录本次实际读取.

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
      "source_id": "EIBC-S01",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides5–7",
        "scope": "同质价格竞争与Hotelling设置、条件和最佳反应",
        "purpose": "用于客户选择推导；正文另声明无退出选项"
      },
      "supports": "静态 Cournot、Bertrand 和 Hotelling 的条件与一阶条件；本包采用无退出选项的覆盖市场，数值和角点为教学改写.",
      "version": "MIT 14.271 Fall 2022; Lecture 5",
      "id": "EI07-READ-01",
      "title": "Static Competition and Models of Differentiation, Part 1",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Membership; Item7 Membership Fees; Income Statement p.37",
        "scope": "会员制度、续费窗口完整段与收入费用采用表",
        "purpose": "把实际指标接回客户选择与利润桥"
      },
      "supports": "会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.",
      "version": "Year ended 2025-08-31",
      "id": "EI07-READ-02",
      "title": "Costco FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Sam’s Club U.S.; Segment Information p.77",
        "scope": "会员等级、分部表及会员与其他收入说明",
        "purpose": "比较口径，不作业务利润归因"
      },
      "supports": "Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.",
      "version": "Year ended 2026-01-31",
      "id": "EI07-READ-03",
      "title": "Walmart FY2026 Form 10-K — Sam’s Club U.S.",
      "authors": [
        "Walmart Inc."
      ],
      "branch": "common"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "input_version": "2026-09-21-review-v2",
    "facts": {
      "warehouse_clubs": {
        "unit": "USD billion",
        "costco": {
          "source_id": "EIBC-S03",
          "period": "FY2025 ended 2025-08-31",
          "scope": "global consolidated",
          "net_sales": 269.912,
          "membership": 5.323,
          "membership_label": "membership fees",
          "total_revenue": 275.235,
          "cost": 239.886,
          "opex": 24.966,
          "operating_income": 10.383,
          "base_fee_usd": 65,
          "executive_additional_fee_usd": 65,
          "renewal_us_canada_pct": 92.3,
          "renewal_scope": "trailing 7–18 months; excludes recent 6-month expirations and business affiliates"
        },
        "sams": {
          "source_id": "EIBC-S04",
          "period": "FY2026 ended 2026-01-31",
          "scope": "Sam’s Club U.S. segment",
          "net_sales": 93.015,
          "membership": 2.525,
          "membership_label": "membership and other income",
          "total_revenue": 95.54,
          "cost": 82.459,
          "opex": 10.639,
          "operating_income": 2.442,
          "club_fee_usd": 50,
          "plus_fee_usd": 110
        }
      }
    },
    "models": {
      "hotelling": {
        "identity": "teaching_assumption",
        "defaults": {
          "c": 10,
          "t": 6,
          "p1": 16,
          "p2": 16,
          "mode": "equilibrium"
        },
        "ranges": {
          "c": [
            0,
            50,
            1
          ],
          "t": [
            0,
            30,
            1
          ],
          "p1": [
            0,
            100,
            1
          ],
          "p2": [
            0,
            100,
            1
          ]
        },
        "conditions": [
          "covered market; no outside option",
          "unit mass; one unit each",
          "constant same marginal cost; no capacity limit",
          "t=0 lower price takes all; equal prices split 1/2 each"
        ]
      }
    },
    "default_outputs": {
      "hotelling": {
        "c": 10,
        "t": 6,
        "p1": 16,
        "p2": 16,
        "theta": 0.5,
        "q1": 0.5,
        "q2": 0.5,
        "profit1": 3,
        "profit2": 3,
        "kind": "interior_allocation",
        "label": "model_equilibrium",
        "covered_market": true
      },
      "accounts": {
        "costco": {
          "reconstructed_revenue": 275.235,
          "reconstructed_oi": 10.383,
          "membership_revenue_pct": 1.9339836866677569,
          "membership_oi_pct": 51.266493306366186
        },
        "sams": {
          "reconstructed_revenue": 95.54,
          "reconstructed_oi": 2.442,
          "membership_revenue_pct": 2.6428720954574,
          "membership_oi_pct": 103.39885339885339
        }
      }
    }
  },
  "branch_policy": {
    "default": "common",
    "available": [],
    "required_on_selection": true
  },
  "entry_id": "zh-ei07",
  "node_id": "EI-07",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "common",
  "default_branch": "common",
  "required_readings_all_branches": [
    {
      "source_id": "EIBC-S01",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides5–7",
        "scope": "同质价格竞争与Hotelling设置、条件和最佳反应",
        "purpose": "用于客户选择推导；正文另声明无退出选项"
      },
      "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
      "version": "MIT 14.271 Fall 2022; Lecture 5",
      "id": "EI07-READ-01",
      "title": "Static Competition and Models of Differentiation, Part 1",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "BF-S-COST-FY2025-SEC",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Membership; Item7 Membership Fees; Income Statement p.37",
        "scope": "会员制度、续费窗口完整段与收入费用采用表",
        "purpose": "把实际指标接回客户选择与利润桥"
      },
      "supports": "会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.",
      "version": "Year ended 2025-08-31",
      "id": "EI07-READ-02",
      "title": "Costco FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S04",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "Sam’s Club U.S.; Segment Information p.77",
        "scope": "会员等级、分部表及会员与其他收入说明",
        "purpose": "比较口径，不作业务利润归因"
      },
      "supports": "Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.",
      "version": "Year ended 2026-01-31",
      "id": "EI07-READ-03",
      "title": "Walmart FY2026 Form 10-K — Sam’s Club U.S.",
      "authors": [
        "Walmart Inc."
      ],
      "branch": "common"
    }
  ],
  "required_readings_by_branch": {
    "common": [
      {
        "source_id": "EIBC-S01",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides5–7",
          "scope": "同质价格竞争与Hotelling设置、条件和最佳反应",
          "purpose": "用于客户选择推导；正文另声明无退出选项"
        },
        "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
        "version": "MIT 14.271 Fall 2022; Lecture 5",
        "id": "EI07-READ-01",
        "title": "Static Competition and Models of Differentiation, Part 1",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "BF-S-COST-FY2025-SEC",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Membership; Item7 Membership Fees; Income Statement p.37",
          "scope": "会员制度、续费窗口完整段与收入费用采用表",
          "purpose": "把实际指标接回客户选择与利润桥"
        },
        "supports": "会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.",
        "version": "Year ended 2025-08-31",
        "id": "EI07-READ-02",
        "title": "Costco FY2025 Form 10-K",
        "authors": [
          "Costco Wholesale Corporation"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S04",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Sam’s Club U.S.; Segment Information p.77",
          "scope": "会员等级、分部表及会员与其他收入说明",
          "purpose": "比较口径，不作业务利润归因"
        },
        "supports": "Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.",
        "version": "Year ended 2026-01-31",
        "id": "EI07-READ-03",
        "title": "Walmart FY2026 Form 10-K — Sam’s Club U.S.",
        "authors": [
          "Walmart Inc."
        ],
        "branch": "common"
      }
    ],
    "all": [
      {
        "source_id": "EIBC-S01",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides5–7",
          "scope": "同质价格竞争与Hotelling设置、条件和最佳反应",
          "purpose": "用于客户选择推导；正文另声明无退出选项"
        },
        "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
        "version": "MIT 14.271 Fall 2022; Lecture 5",
        "id": "EI07-READ-01",
        "title": "Static Competition and Models of Differentiation, Part 1",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "BF-S-COST-FY2025-SEC",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Membership; Item7 Membership Fees; Income Statement p.37",
          "scope": "会员制度、续费窗口完整段与收入费用采用表",
          "purpose": "把实际指标接回客户选择与利润桥"
        },
        "supports": "会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.",
        "version": "Year ended 2025-08-31",
        "id": "EI07-READ-02",
        "title": "Costco FY2025 Form 10-K",
        "authors": [
          "Costco Wholesale Corporation"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S04",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "Sam’s Club U.S.; Segment Information p.77",
          "scope": "会员等级、分部表及会员与其他收入说明",
          "purpose": "比较口径，不作业务利润归因"
        },
        "supports": "Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.",
        "version": "Year ended 2026-01-31",
        "id": "EI07-READ-03",
        "title": "Walmart FY2026 Form 10-K — Sam’s Club U.S.",
        "authors": [
          "Walmart Inc."
        ],
        "branch": "common"
      }
    ]
  },
  "branch_tasks": {
    "common": "重建覆盖市场的客户边界、最佳反应与角点；比较单家提价和共同重新定价；用两家公司各自期间的收入—费用—营业利润桥解释会员收入比值，最后迁移到订阅软件."
  },
  "learning_task": "重建覆盖市场的客户边界、最佳反应与角点；比较单家提价和共同重新定价；用两家公司各自期间的收入—费用—营业利润桥解释会员收入比值，最后迁移到订阅软件.",
  "source_id_aliases": {
    "EIBC-S03": "BF-S-COST-FY2025-SEC",
    "EIBC-S07": "EI-S06-M3-202605"
  },
  "shared_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/inputs.json",
  "experiment_ids": [
    "exp-ei07-competition"
  ],
  "bibliography": [
    {
      "id": "EIBC-S01",
      "title": "Static Competition and Models of Differentiation, Part 1",
      "authors": [
        "Glenn Ellison"
      ],
      "version": "MIT 14.271 Fall 2022; Lecture 5",
      "url": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
      "locators": [
        "slides 3–4 Cournot",
        "slide 5 Bertrand",
        "slides 6–7 Hotelling"
      ]
    },
    {
      "id": "BF-S-COST-FY2025-SEC",
      "title": "Costco FY2025 Form 10-K",
      "authors": [
        "Costco Wholesale Corporation"
      ],
      "version": "Year ended 2025-08-31",
      "url": "https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm",
      "locators": [
        "Item 1 Membership",
        "Item 7 Membership Fees",
        "Consolidated Statements of Income p.37"
      ]
    },
    {
      "id": "EIBC-S04",
      "title": "Walmart FY2026 Form 10-K — Sam’s Club U.S.",
      "authors": [
        "Walmart Inc."
      ],
      "version": "Year ended 2026-01-31",
      "url": "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
      "locators": [
        "Item 1 Sam’s Club U.S. membership",
        "Segment Information: Sam’s Club U.S. income table p.77 and footnotes"
      ]
    }
  ]
}
```

## Supplied entry
<a id="ei07-structure"></a>

## 企业行动与客户替代

企业涨价后损失多少交易，取决于客户可用的替代、转换成本及对手反应. 距离、交期、服务和系统适配会改变同一价格差对应的客户流失.

价格和服务改变客户选择；交易数量、单位收入与成本共同形成利润. 企业再根据对手的行动调整，形成相互约束的决策.

<a id="ei07-hotelling"></a>

## Hotelling 覆盖市场

设客户总量为1，位置 $\theta$ 在 $[0,1]$ 上均匀分布，两家企业位于两端. 每位客户购买一单位，取消不购买选项，市场完全覆盖. 企业同时选择非负单位价格 $p_1,p_2$，共同边际成本 $c\ge0$，产能充分，无固定费用，竞争仅进行一期. 位置表示距离或产品适配程度.

客户购买企业1产品的总负担为 $p_1+t\theta$，购买企业2产品为 $p_2+t(1-\theta)$，其中 $t>0$ 将适配差异折成价格单位. 企业每单位收入为 $p_i$，适配成本由客户另行承担. [^mit5]

令两种方案负担相等，得到边界客户：

$$
p_1+t\theta^*=p_2+t(1-\theta^*)
\quad\Longrightarrow\quad
\theta^*=\frac{p_2-p_1+t}{2t}.
$$

在 $0<\theta^*<1$ 的内点区域，左侧客户选1，右侧客户选2，于是 $q_1=\theta^*$、$q_2=1-\theta^*$. 在整个价格域内，按客户选择得到
$q_1=\min\{1,\max\{0,\theta^*\}\}$，$q_2=1-q_1$. 这个截断把**给定价格下**的客户选择完整写成分段需求，边界位置落到区间外时由0或1的端点接管.

企业1在内点区域的利润为
$\pi_1=(p_1-c)(p_2-p_1+t)/(2t)$. 提价的收益是每位留下的客户多付钱，代价是失去边界附近的客户. 一阶条件把两者接起来：

$$
\frac{\partial\pi_1}{\partial p_1}
=\frac{p_2-p_1+t}{2t}-\frac{p_1-c}{2t}=0,
\qquad
p_1=\frac{p_2+t+c}{2}.
$$

二阶导数为 $-1/t<0$. 企业2有对称条件，两式联立得到
$p_1^*=p_2^*=c+t$，各服务半个市场，每家利润为 $t/2$. 还要检查角点：当对手取 $c+t$ 时，要夺下全市场就必须把自己的价格降到不高于 $c$，利润至多为0；放弃全市场也是0. 内点利润 $t/2>0$，因此这里的解不仅满足局部一阶条件，也优于两个边界. 至此才完成均衡验证.

取教学参数 $c=10,t=6$，对称价格为16，各家数量0.5、利润3. 若只把企业1价格从16提到18，企业2仍收16，则企业1的数量降为 $1/3$，利润为 $8/3$，低于3. 再提到22，企业1几乎失去全部客户，利润归零. 提价是否有利，关键正在“每笔多赚”与“少成交多少”之间.

| 教学情形 | $p_1$ | $p_2$ | $q_1$ | $q_2$ | $\pi_1$ | 状态 |
|---|---:|---:|---:|---:|---:|---|
| $c=10,t=6$ 的对称解 | 16 | 16 | 0.5 | 0.5 | 3 | 模型均衡 |
| 仅企业1提价 | 18 | 16 | 0.333 | 0.667 | 2.667 | 给定价格配置 |
| 企业1到达失去市场的边界 | 22 | 16 | 0 | 1 | 0 | 角点配置 |
| $c=10,t=2$ 的新对称解 | 12 | 12 | 0.5 | 0.5 | 1 | 另一参数下的均衡 |

差异化减弱时，两家同时降价，份额保持一半，利润却由3降至1. 份额稳定因而可与利润空间收窄并存.

$t=0$ 时客户仅比较价格，约定低价者获得全部市场，同价各得一半. 同价高于 $c$ 时，一家略降价即可吸引全部客户；低于 $c$ 出售则亏损. 在同质、容量充分的设定下，$p_1=p_2=c$ 为 Bertrand 均衡. [^mit5]

<a id="ei07-experiment"></a>

## 客户边界与利润

<div data-experiment-slot="exp-ei07-competition"></div>

手动价格展示给定配置，“求对称均衡”根据两家的最佳反应计算价格.

<a id="ei07-clubs"></a>
<a id="CASE-EI07-WMT-SAMS-FY2026"></a>
<a id="CASE-EI07-COST-FY2025"></a>

## 会员制零售

Costco FY2025 10-K 披露全球合并业务，Walmart FY2026 10-K 披露 Sam’s Club U.S. 美国分部；各自年度截止日列于表头. [^cost][^wmt]

| 披露项目，单位： B 美元 | Costco，截至2025-08-31年度 | Sam’s Club U.S.，截至2026-01-31年度 |
|---|---:|---:|
| 净销售 | 269.912 | 93.015 |
| 会员费／会员与其他收入 | 5.323：会员费 | 2.525：会员与其他收入 |
| 总收入 | 275.235 | 95.540 |
| 商品成本／销售成本 | 239.886 | 82.459 |
| 销售、一般及行政等经营费用 | 24.966 | 10.639 |
| 营业利润 | 10.383 | 2.442 |

营业利润分别为 $269.912+5.323-239.886-24.966=10.383$ 和 $93.015+2.525-82.459-10.639=2.442$.

会费收入占 Costco 总收入约1.934%；Sam’s 的会员与其他收入占总收入约2.643%. 以营业利润为分母，两者约为51.267%与103.399%. 这些比值比较收入和利润；将营业利润分配到会员与商品业务，还需将履约、销售及其他费用归属到相应活动.

各报告时点的美国年费为 Costco 基础65美元、Executive 加65美元，以及 Sam’s Club 50美元、Plus 110美元. 会员权益、购物奖励、商品价格、门店覆盖及服务共同影响选择. [^cost][^wmt]

客户在方案中的净收益为购物与服务价值减去会费、预计购物支出、时间和转换成本. 购物频率改变固定会费对应的每次成本，服务使用程度改变所得价值. 商家的结果则取决于会费、购物收入与履约成本的组合.

供应商净价也影响零售利润. 采购规模和稳定订单可改善条件，让价又可能伴随质量、账期或交付承诺变化. 分析收益分配需要同时追踪客户总支出、零售履约成本与供应商净所得.

<a id="ei07-evidence"></a>

## 续费率与竞争机制

Costco FY2025年末美加续费率为92.3%，排除 Business 附属会员，采用报告日前7–18个月续费的尾随窗口；报告期末前六个月到期的会员暂不进入该计算. [^cost]

高续费可由净购物价值支持，也可由转换摩擦支持. 前者依赖购物篮和服务的净节省，后者依赖转店距离、采购重组及使用习惯带来的成本.

判别这两种机制，可比较附近新增替代门店后不同距离会员的续费变化，或套餐调价后同一到期批次中不同使用频率会员的变化，并控制同期服务与会员构成.

<a id="ei07-exercises"></a>

## 重建与迁移

**任务一：两家同时面对更容易替代的产品.** 固定 $c=10$，把 $t$ 从6降为2，重建价格、份额、利润. 若一家份额仍是50%，你还会检查什么？

**解析.** 重新联立两家最佳反应，价格由16降至12，各占0.5市场，利润由3降至1. 份额之外，还需观察单位价差、履约成本、差异化服务及客户替代反应.

**任务二：用实际披露解释一个比率.** 有人把 Sam’s 的103.399%称为“会员业务利润贡献率”. 请从上表重建总收入和营业利润，然后给出适合的改写.

**解析.** $93.015+2.525=95.540$，扣除 $82.459+10.639$ 后得2.442. 约103.399%为会员与其他收入相对营业利润的比值. 归因会员业务利润还需界定会员制度引起的成本、商品销售联系及共同费用分配.

**迁移题：订阅软件的留存上升，销售费用占收入比例下降.** 请分别构造“产品价值提高”和“转换更困难”两条机制，并选择一项能区分它们的新证据.

**解析.** 产品价值提高可能带来更高使用深度与主动扩购，使维持关系所需销售投入下降；转换困难也可能压低流失，但不必提高使用效果. 可对比同一客户批次的实际功能使用、扩购、满意度，以及合同到期且具备可行替代时的留存. 销售费用比例下降还可能来自收入增快或客户组合变化，需要先拆分分子分母.

[^mit5]: EIBC-S01，Glenn Ellison，MIT 14.271 Fall 2022，Lecture 5《Static Competition and Models of Differentiation, Part 1》，幻灯片3–7；原讲义包含外部选项，本文采用取消该选项的覆盖市场版本. [原讲义](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf).
[^cost]: BF-S-COST-FY2025-SEC，Costco FY2025 10-K，Item 1“Membership”完整单元，Item 7“Membership Fees”，Consolidated Statements of Income（印刷p.37）. 表中USD M 换为 B 美元，续费与会费制度保留报告时点. [SEC原件](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm).
[^wmt]: EIBC-S04，Walmart FY2026 10-K，Item 1 Sam’s Club U.S.会员等级；Segment Information中Sam’s Club U.S.损益（印刷p.77）及“Membership and other income”说明. [SEC原件](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm).

<script src="/notebook/labs/ei-b/reader-adapter.js" defer></script>

## Additional teaching material
## 差异化竞争的静态计算

采用正文完全覆盖、客户总量1的模型. $c=10,t=6$ 时，对称价格16，各得数量0.5、利润3. 仅企业1提价至18，其数量为 $1/3$、利润 $8/3$，对手利润4；提到22时，企业1数量与利润均为零，对手利润6. $t$ 降到2后，两家均衡价格12，各得数量0.5、利润1.

$t>0$ 时，$\theta^*=(p_2-p_1+t)/(2t)$，$q_1=\min\{1,\max\{0,\theta^*\}\}$，$\pi_i=(p_i-c)q_i$. $t=0$ 时，低价者取得全部市场，同价平分，均衡价为 $c$.

Costco FY2025合并与Sam’s U.S. FY2026分部的营业利润分别10.383、2.442 USD B. 会费或会员与其他收入占总收入约1.934%、2.643%，相对营业利润约51.267%、103.399%. 业务利润归因另需费用归属.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei07-competition",
    "title": "竞争、差异化与利润分配：机制实验",
    "anchor": "ei07-experiment",
    "description": "theta=(p2-p1+t)/(2*t), q1=clamp(theta,0,1); pi_i=(p_i-c)*q_i. equilibrium p1=p2=c+t; t=0 equal-price split.",
    "inputs": {
      "input_version": "2026-09-21-review-v2",
      "facts": {
        "warehouse_clubs": {
          "unit": "USD billion",
          "costco": {
            "source_id": "EIBC-S03",
            "period": "FY2025 ended 2025-08-31",
            "scope": "global consolidated",
            "net_sales": 269.912,
            "membership": 5.323,
            "membership_label": "membership fees",
            "total_revenue": 275.235,
            "cost": 239.886,
            "opex": 24.966,
            "operating_income": 10.383,
            "base_fee_usd": 65,
            "executive_additional_fee_usd": 65,
            "renewal_us_canada_pct": 92.3,
            "renewal_scope": "trailing 7–18 months; excludes recent 6-month expirations and business affiliates"
          },
          "sams": {
            "source_id": "EIBC-S04",
            "period": "FY2026 ended 2026-01-31",
            "scope": "Sam’s Club U.S. segment",
            "net_sales": 93.015,
            "membership": 2.525,
            "membership_label": "membership and other income",
            "total_revenue": 95.54,
            "cost": 82.459,
            "opex": 10.639,
            "operating_income": 2.442,
            "club_fee_usd": 50,
            "plus_fee_usd": 110
          }
        }
      },
      "models": {
        "hotelling": {
          "identity": "teaching_assumption",
          "defaults": {
            "c": 10,
            "t": 6,
            "p1": 16,
            "p2": 16,
            "mode": "equilibrium"
          },
          "ranges": {
            "c": [
              0,
              50,
              1
            ],
            "t": [
              0,
              30,
              1
            ],
            "p1": [
              0,
              100,
              1
            ],
            "p2": [
              0,
              100,
              1
            ]
          },
          "conditions": [
            "covered market; no outside option",
            "unit mass; one unit each",
            "constant same marginal cost; no capacity limit",
            "t=0 lower price takes all; equal prices split 1/2 each"
          ]
        }
      },
      "default_outputs": {
        "hotelling": {
          "c": 10,
          "t": 6,
          "p1": 16,
          "p2": 16,
          "theta": 0.5,
          "q1": 0.5,
          "q2": 0.5,
          "profit1": 3,
          "profit2": 3,
          "kind": "interior_allocation",
          "label": "model_equilibrium",
          "covered_market": true
        },
        "accounts": {
          "costco": {
            "reconstructed_revenue": 275.235,
            "reconstructed_oi": 10.383,
            "membership_revenue_pct": 1.9339836866677569,
            "membership_oi_pct": 51.266493306366186
          },
          "sams": {
            "reconstructed_revenue": 95.54,
            "reconstructed_oi": 2.442,
            "membership_revenue_pct": 2.6428720954574,
            "membership_oi_pct": 103.39885339885339
          }
        }
      }
    },
    "outputs": {
      "hotelling": {
        "c": 10,
        "t": 6,
        "p1": 16,
        "p2": 16,
        "theta": 0.5,
        "q1": 0.5,
        "q2": 0.5,
        "profit1": 3,
        "profit2": 3,
        "kind": "interior_allocation",
        "label": "model_equilibrium",
        "covered_market": true
      },
      "accounts": {
        "costco": {
          "reconstructed_revenue": 275.235,
          "reconstructed_oi": 10.383,
          "membership_revenue_pct": 1.9339836866677569,
          "membership_oi_pct": 51.266493306366186
        },
        "sams": {
          "reconstructed_revenue": 95.54,
          "reconstructed_oi": 2.442,
          "membership_revenue_pct": 2.6428720954574,
          "membership_oi_pct": 103.39885339885339
        }
      }
    },
    "algorithm": {
      "formula": "theta=(p2-p1+t)/(2*t), q1=clamp(theta,0,1); pi_i=(p_i-c)*q_i. equilibrium p1=p2=c+t; t=0 equal-price split.",
      "algorithm": "engine.hotelling; integer price controls; manual allocations and model equilibria labelled separately",
      "boundary_tests": [
        "t=0 and equal/unequal prices",
        "theta<=0 and theta>=1",
        "profit vs global unilateral deviation grid"
      ],
      "static": "readers/EI-07.reader.md#ei07-hotelling; static/static-equivalents.md first unit"
    },
    "static_equivalent": {
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/static-equivalents.md",
      "in_entry": "ei07-experiment",
      "text": "/ ei07-experiment\n\n对象是无退出选项的覆盖市场、客户总量1、每人一单位. c=10,t=6：\n对称均衡p1=p2=16，q1=q2=.5，π1=π2=3.\n给定p1=18,p2=16：q1=1/3，q2=2/3，π1=8/3，π2=4.\n给定p1=22,p2=16：q1=0，q2=1，π1=0，π2=6.\n改变t到2并重新求均衡：价格12、数量各. 5、利润各1.\nt=0转同质价格竞争：低价者获全市场；同价平分. 对称基准p=c.\n\n算法：\nt>0：θ*=(p2-p1+t)/(2t)，给定价格配置的q1=min(1,max(0,θ*))；\nprofit1=(p1-c)q1，profit2=(p2-c)(1-q1).\n“手动”只展示给定价格配置；“均衡”把两价设为c+t.\n全部价格控件是非负整数0..100；c=0..50，t=0..30. 没有会员费/v参数自动校准.\n图横轴客户位置0..1，纵轴客户总负担；两条线分别p1+tθ与p2+t(1−θ).\n\n真实侧栏固定Costco全球FY2025与Sam’s U.S. FY2026：\n净销售269.912/93.015；会员费或会员与其他收入5.323/2.525；\n总收入275.235/95.540；成本239.886/82.459；经营费用24.966/10.639；营业利润10.383/2.442（ B 美元）.\n会费/总收入1.9339837%/2.6428721%；会费或其他/营业利润51.2664933%/103.3988534%，不是利润归因."
    },
    "implementation_files": [
      "/notebook/labs/ei-b/inputs.json",
      "/notebook/labs/ei-b/inputs.js",
      "/notebook/labs/ei-b/engine.js",
      "/notebook/labs/ei-b/ui.js",
      "/notebook/labs/ei-b/interactions.html"
    ],
    "state": "staging_only_awaiting_Lead_UI",
    "local_url": "/notebook/labs/ei-b/interactions.html?experiment=exp-ei07-competition"
  }
]
```

## Sources
- [Costco Wholesale Corporation · FY2025 Form 10-K（SEC HTML）](https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm): Costco 2025财年末合并资产77,099M美元、负债47,935M美元、权益29,164M美元. 业务说明、收入政策及附注解释商品周转、供应商付款、会员费确认和递延余额. 现金流量表与两期资产负债表共同呈现存货、应付及现金变化；年报另列续费率定义、普通股和债务信息.
- [Static Competition and Models of Differentiation, Part 1](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf): 静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.
- [Walmart FY2026 Form 10-K — Sam’s Club U.S.](https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm): Sam’s Club U.S.分部的净销售、会员与其他收入及损益层级；会员与其他收入包含other项目. Walmart年报另列三分部、资本用途及FCF口径，FY2025资本支出为23,783M美元.

## Content relations
```json
[
  {
    "from": "zh-ei07",
    "relation": "part_of",
    "to": "industry-structure",
    "reason": "主要 topic 归属"
  },
  {
    "from": "ei07-clubs",
    "relation": "illustrated_by",
    "to": "CASE-EI07-COST-FY2025",
    "reason": "固定期间的真实材料，保留单位与统计对象",
    "at_section": "ei07-clubs"
  },
  {
    "from": "ei07-clubs",
    "relation": "illustrated_by",
    "to": "CASE-EI07-WMT-SAMS-FY2026",
    "reason": "固定期间的真实材料，保留单位与统计对象",
    "at_section": "ei07-clubs"
  },
  {
    "from": "ei07-hotelling",
    "relation": "supported_by",
    "to": "EIBC-S01",
    "reason": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
    "locator": "slides 3–4 Cournot; slide 5 Bertrand; slides 6–7 Hotelling",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei07-hotelling"
  },
  {
    "from": "ei07-clubs",
    "relation": "supported_by",
    "to": "BF-S-COST-FY2025-SEC",
    "reason": "会员制度、尾随续费率定义、会员费收入及合并营业利润桥. USD M 转换为 B 美元；全球公司边界不等于美国单一零售市场.",
    "locator": "Item 1 Membership; Item 7 Membership Fees; Consolidated Statements of Income p.37",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei07-clubs"
  },
  {
    "from": "ei07-clubs",
    "relation": "supported_by",
    "to": "EIBC-S04",
    "reason": "Sam’s Club U.S.分部，会员与其他收入含other，净销售加该项才是总收入；损益层级支持重建而不支持会员利润归因.",
    "locator": "Item 1 Sam’s Club U.S. membership; Segment Information: Sam’s Club U.S. income table p.77 and footnotes",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei07-clubs"
  },
  {
    "from": "ei07-structure",
    "relation": "requires",
    "to": "zh-ei06",
    "reason": "使用明确竞争边界",
    "required_competence": "能说明产品、客户、地域与期间及份额分母",
    "at_section": "ei07-structure"
  },
  {
    "from": "ei07-hotelling",
    "relation": "uses_method",
    "to": "zh-ei03",
    "reason": "客户替代选择；本篇给自足短释",
    "at_section": "ei07-hotelling"
  },
  {
    "from": "ei07-experiment",
    "relation": "illustrated_by",
    "to": "exp-ei07-competition",
    "at_section": "ei07-experiment",
    "reason": "theta=(p2-p1+t)/(2*t), q1=clamp(theta,0,1); pi_i=(p_i-c)*q_i. equilibrium p1=p2=c+t; t=0 equal-price split."
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 4/10
从客户选择推竞争利润，再读会员店的收入与成本.
现有企业集合之外，潜在进入者又怎样改变未来竞争？
Next: [进入、退出与产业资本投入](https://ou-liu-red-sugar.github.io/zh/notebook/entry-exit-capital-formation/)
