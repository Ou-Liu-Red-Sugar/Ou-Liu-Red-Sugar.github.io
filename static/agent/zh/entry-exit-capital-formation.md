# 进入、退出与产业资本投入

倒推进入的弱均衡集合，区分零利润多解、进入上限、项目建设与退出选择.

Entry: zh-ei08 | Node: EI-08 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先按所选分支实际读取本包 required_readings 完整指定单元，记录题名、版本、范围及支持内容. 必读齐全后教学；缺失时先补齐原文. 诊断：解释K＝900的均衡集合{2,3}. 推导经营续局，核进入和未进入的弱最优条件、上限及零产量情形. 将EIA53 GW、86 GW分别放回2025新增与2026当时计划，比较沉没、可回收及未来可避免支出. 研究分支说明对数就业方差分解的样本和年龄20外推. 最后分析三年后投产项目的竞争、付款承诺及回收价值，并选择判别证据. 已掌握步骤直接跳过，先让读者作答，再按正文完整解析反馈条件、计算和机制. runtime_reading_log 记录本次实际读取.

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
        "locator": "slides3–4",
        "scope": "Cournot设定与一阶条件",
        "purpose": "完整推出经营阶段收益"
      },
      "supports": "Cournot 数量竞争的设定与一阶条件；EI-08 的 $a,c,K,\\bar N$ 及数值为进入模型的教学输入.",
      "version": "MIT 14.271 Fall 2022; Lecture 5",
      "id": "EI08-READ-01",
      "title": "Static Competition and Models of Differentiation, Part 1",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S02",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides2–3",
        "scope": "二阶段进入与纯策略弱条件",
        "purpose": "检验零利润多解和有限上限"
      },
      "supports": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
      "version": "MIT 14.271 Fall 2022; Lecture 16",
      "id": "EI08-READ-02",
      "title": "Entry",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S05A",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "文章全文及开篇数据期",
        "scope": "2026-02-20固定短文",
        "purpose": "计划与实现的资料身份"
      },
      "supports": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
      "version": "Published 2026-02-20",
      "id": "EI08-READ-03",
      "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S05B",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "工作簿列表前方法说明全文",
        "scope": "preliminary、修订与capacity commitments",
        "purpose": "理解观测范围和承诺区别"
      },
      "supports": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
      "version": "Methods webpage accessed 2026-09-21",
      "id": "EI08-READ-04",
      "title": "Preliminary Monthly Electric Generator Inventory",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "branch": "common"
    }
  ],
  "optional_readings": [
    {
      "source_id": "EIBC-S06",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§I.A–F; Table1; Figure4; introduction p.548 comparison",
        "scope": "正式版印刷pp.550–559，包含样本、估计、图注和85/90文本差异",
        "purpose": "事前异质性的有限结论"
      },
      "supports": "§I平衡面板对数就业横截面方差分解；正文age0约85%、age20约40%，后者为外推. 与引言90%+不一致. 只作进入异质性选读，不作成功概率或项目校准.",
      "version": "AER 111(2), 2021, pp.547–579; 33-page version of record",
      "branch": "research",
      "required_when": "selected_branch includes research",
      "id": "EI08-READ-05",
      "title": "The Nature of Firm Growth",
      "authors": [
        "Vincent Sterk",
        "Petr Sedláček",
        "Benjamin Pugsley"
      ]
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "input_version": "2026-09-21-review-v2",
    "facts": {
      "eia": {
        "source_ids": [
          "EIBC-S05A",
          "EIBC-S05B"
        ],
        "article_date": "2026-02-20",
        "rows": [
          {
            "year": 2025,
            "capacity_gw": 53,
            "status": "reported_realized_additions"
          },
          {
            "year": 2026,
            "capacity_gw": 86,
            "status": "plan_if_realized"
          }
        ]
      }
    },
    "models": {
      "entry": {
        "identity": "teaching_assumption",
        "defaults": {
          "a": 120,
          "c": 0,
          "K": 800,
          "cap": 10
        },
        "ranges": {
          "a": [
            0,
            200,
            1
          ],
          "c": [
            0,
            200,
            1
          ],
          "K": [
            0,
            20000,
            1
          ],
          "cap": [
            0,
            20,
            1
          ]
        },
        "presets": [
          {
            "K": 800,
            "expected": [
              3
            ]
          },
          {
            "K": 350,
            "expected": [
              5
            ]
          },
          {
            "K": 900,
            "expected": [
              2,
              3
            ]
          },
          {
            "K": 400,
            "expected": [
              4,
              5
            ]
          }
        ],
        "conditions": [
          "finite identical potential entrants; one operating period",
          "weak entry incentives, no maximal-N selection",
          "cap=0 -> {0}",
          "a<=c -> zero-output continuation; if K=0 every N from 0..cap indifferent",
          "no trades -> no transaction price"
        ]
      },
      "exit": {
        "identity": "teaching_assumption",
        "unit": "same-date decision units",
        "past_sunk": 900,
        "continue_cash": 120,
        "future_salvage": 30,
        "salvage_now": 100,
        "stress_cash": 40
      }
    },
    "default_outputs": {
      "entry": {
        "a": 120,
        "c": 0,
        "K": 800,
        "cap": 10,
        "equilibrium_set": [
          3
        ],
        "rows": [
          {
            "N": 0,
            "q_each": null,
            "Q": 0,
            "price": null,
            "variable_profit": null,
            "net_profit": null,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 1,
            "q_each": 60,
            "Q": 60,
            "price": 60,
            "variable_profit": 3600,
            "net_profit": 2800,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 2,
            "q_each": 40,
            "Q": 80,
            "price": 40,
            "variable_profit": 1600,
            "net_profit": 800,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 3,
            "q_each": 30,
            "Q": 90,
            "price": 30,
            "variable_profit": 900,
            "net_profit": 100,
            "incumbentOK": true,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": true,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 4,
            "q_each": 24,
            "Q": 96,
            "price": 24,
            "variable_profit": 576,
            "net_profit": -224,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 5,
            "q_each": 20,
            "Q": 100,
            "price": 20,
            "variable_profit": 400,
            "net_profit": -400,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 6,
            "q_each": 17.142857142857142,
            "Q": 102.85714285714286,
            "price": 17.142857142857142,
            "variable_profit": 293.8775510204082,
            "net_profit": -506.1224489795918,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 7,
            "q_each": 15,
            "Q": 105,
            "price": 15,
            "variable_profit": 225,
            "net_profit": -575,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 8,
            "q_each": 13.333333333333334,
            "Q": 106.66666666666667,
            "price": 13.333333333333334,
            "variable_profit": 177.77777777777777,
            "net_profit": -622.2222222222222,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 9,
            "q_each": 12,
            "Q": 108,
            "price": 12,
            "variable_profit": 144,
            "net_profit": -656,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 10,
            "q_each": 10.909090909090908,
            "Q": 109.09090909090908,
            "price": 10.909090909090908,
            "variable_profit": 119.00826446280992,
            "net_profit": -680.99173553719,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": false,
            "equilibrium": false,
            "cap_bound": true,
            "entry_tie": false,
            "incumbent_tie": false
          }
        ],
        "nonpositive_margin_corner": false,
        "zero_output_continuation": false,
        "no_potential_entrants": false
      }
    }
  },
  "branch_policy": {
    "default": "common",
    "available": [
      "research"
    ],
    "required_on_selection": true
  },
  "entry_id": "zh-ei08",
  "node_id": "EI-08",
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
        "locator": "slides3–4",
        "scope": "Cournot设定与一阶条件",
        "purpose": "完整推出经营阶段收益"
      },
      "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
      "version": "MIT 14.271 Fall 2022; Lecture 5",
      "id": "EI08-READ-01",
      "title": "Static Competition and Models of Differentiation, Part 1",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S02",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "slides2–3",
        "scope": "二阶段进入与纯策略弱条件",
        "purpose": "检验零利润多解和有限上限"
      },
      "supports": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
      "version": "MIT 14.271 Fall 2022; Lecture 16",
      "id": "EI08-READ-02",
      "title": "Entry",
      "authors": [
        "Glenn Ellison"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S05A",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "文章全文及开篇数据期",
        "scope": "2026-02-20固定短文",
        "purpose": "计划与实现的资料身份"
      },
      "supports": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
      "version": "Published 2026-02-20",
      "id": "EI08-READ-03",
      "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S05B",
      "access": {
        "kind": "html_full_text",
        "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "工作簿列表前方法说明全文",
        "scope": "preliminary、修订与capacity commitments",
        "purpose": "理解观测范围和承诺区别"
      },
      "supports": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
      "version": "Methods webpage accessed 2026-09-21",
      "id": "EI08-READ-04",
      "title": "Preliminary Monthly Electric Generator Inventory",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "branch": "common"
    },
    {
      "source_id": "EIBC-S06",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf",
        "verified_access_at": "2026-09-21"
      },
      "required_unit": {
        "locator": "§I.A–F; Table1; Figure4; introduction p.548 comparison",
        "scope": "正式版印刷pp.550–559，包含样本、估计、图注和85/90文本差异",
        "purpose": "事前异质性的有限结论"
      },
      "supports": "§I平衡面板对数就业横截面方差分解；正文age0约85%、age20约40%，后者为外推. 与引言90%+不一致. 只作进入异质性选读，不作成功概率或项目校准.",
      "version": "AER 111(2), 2021, pp.547–579; 33-page version of record",
      "branch": "research",
      "required_when": "selected_branch includes research",
      "id": "EI08-READ-05",
      "title": "The Nature of Firm Growth",
      "authors": [
        "Vincent Sterk",
        "Petr Sedláček",
        "Benjamin Pugsley"
      ]
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
          "locator": "slides3–4",
          "scope": "Cournot设定与一阶条件",
          "purpose": "完整推出经营阶段收益"
        },
        "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
        "version": "MIT 14.271 Fall 2022; Lecture 5",
        "id": "EI08-READ-01",
        "title": "Static Competition and Models of Differentiation, Part 1",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S02",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides2–3",
          "scope": "二阶段进入与纯策略弱条件",
          "purpose": "检验零利润多解和有限上限"
        },
        "supports": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
        "version": "MIT 14.271 Fall 2022; Lecture 16",
        "id": "EI08-READ-02",
        "title": "Entry",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05A",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "文章全文及开篇数据期",
          "scope": "2026-02-20固定短文",
          "purpose": "计划与实现的资料身份"
        },
        "supports": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
        "version": "Published 2026-02-20",
        "id": "EI08-READ-03",
        "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05B",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "工作簿列表前方法说明全文",
          "scope": "preliminary、修订与capacity commitments",
          "purpose": "理解观测范围和承诺区别"
        },
        "supports": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
        "version": "Methods webpage accessed 2026-09-21",
        "id": "EI08-READ-04",
        "title": "Preliminary Monthly Electric Generator Inventory",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      }
    ],
    "research": [
      {
        "source_id": "EIBC-S01",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides3–4",
          "scope": "Cournot设定与一阶条件",
          "purpose": "完整推出经营阶段收益"
        },
        "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
        "version": "MIT 14.271 Fall 2022; Lecture 5",
        "id": "EI08-READ-01",
        "title": "Static Competition and Models of Differentiation, Part 1",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S02",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides2–3",
          "scope": "二阶段进入与纯策略弱条件",
          "purpose": "检验零利润多解和有限上限"
        },
        "supports": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
        "version": "MIT 14.271 Fall 2022; Lecture 16",
        "id": "EI08-READ-02",
        "title": "Entry",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05A",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "文章全文及开篇数据期",
          "scope": "2026-02-20固定短文",
          "purpose": "计划与实现的资料身份"
        },
        "supports": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
        "version": "Published 2026-02-20",
        "id": "EI08-READ-03",
        "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05B",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "工作簿列表前方法说明全文",
          "scope": "preliminary、修订与capacity commitments",
          "purpose": "理解观测范围和承诺区别"
        },
        "supports": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
        "version": "Methods webpage accessed 2026-09-21",
        "id": "EI08-READ-04",
        "title": "Preliminary Monthly Electric Generator Inventory",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S06",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§I.A–F; Table1; Figure4; introduction p.548 comparison",
          "scope": "正式版印刷pp.550–559，包含样本、估计、图注和85/90文本差异",
          "purpose": "事前异质性的有限结论"
        },
        "supports": "§I平衡面板对数就业横截面方差分解；正文age0约85%、age20约40%，后者为外推. 与引言90%+不一致. 只作进入异质性选读，不作成功概率或项目校准.",
        "version": "AER 111(2), 2021, pp.547–579; 33-page version of record",
        "branch": "research",
        "required_when": "selected_branch includes research",
        "id": "EI08-READ-05",
        "title": "The Nature of Firm Growth",
        "authors": [
          "Vincent Sterk",
          "Petr Sedláček",
          "Benjamin Pugsley"
        ]
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
          "locator": "slides3–4",
          "scope": "Cournot设定与一阶条件",
          "purpose": "完整推出经营阶段收益"
        },
        "supports": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
        "version": "MIT 14.271 Fall 2022; Lecture 5",
        "id": "EI08-READ-01",
        "title": "Static Competition and Models of Differentiation, Part 1",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S02",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "slides2–3",
          "scope": "二阶段进入与纯策略弱条件",
          "purpose": "检验零利润多解和有限上限"
        },
        "supports": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
        "version": "MIT 14.271 Fall 2022; Lecture 16",
        "id": "EI08-READ-02",
        "title": "Entry",
        "authors": [
          "Glenn Ellison"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05A",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "文章全文及开篇数据期",
          "scope": "2026-02-20固定短文",
          "purpose": "计划与实现的资料身份"
        },
        "supports": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
        "version": "Published 2026-02-20",
        "id": "EI08-READ-03",
        "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S05B",
        "access": {
          "kind": "html_full_text",
          "uri": "https://www.eia.gov/electricity/data/eia860m/index.php",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "工作簿列表前方法说明全文",
          "scope": "preliminary、修订与capacity commitments",
          "purpose": "理解观测范围和承诺区别"
        },
        "supports": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
        "version": "Methods webpage accessed 2026-09-21",
        "id": "EI08-READ-04",
        "title": "Preliminary Monthly Electric Generator Inventory",
        "authors": [
          "U.S. Energy Information Administration"
        ],
        "branch": "common"
      },
      {
        "source_id": "EIBC-S06",
        "access": {
          "kind": "pdf_full_text",
          "uri": "https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf",
          "verified_access_at": "2026-09-21"
        },
        "required_unit": {
          "locator": "§I.A–F; Table1; Figure4; introduction p.548 comparison",
          "scope": "正式版印刷pp.550–559，包含样本、估计、图注和85/90文本差异",
          "purpose": "事前异质性的有限结论"
        },
        "supports": "§I平衡面板对数就业横截面方差分解；正文age0约85%、age20约40%，后者为外推. 与引言90%+不一致. 只作进入异质性选读，不作成功概率或项目校准.",
        "version": "AER 111(2), 2021, pp.547–579; 33-page version of record",
        "branch": "research",
        "required_when": "selected_branch includes research",
        "id": "EI08-READ-05",
        "title": "The Nature of Firm Growth",
        "authors": [
          "Vincent Sterk",
          "Petr Sedláček",
          "Benjamin Pugsley"
        ]
      }
    ]
  },
  "branch_tasks": {
    "common": "重建经营阶段 Cournot 续局和全部弱进入数量，解释 K=900 的 {2,3}；区分电力计划、建设、投运及沉没/可回收/可避免投入.",
    "research": "完成共同主线后，按 AER 正式版 §I.A–F、Table 1、Figure 4 解释存活平衡面板的对数就业方差分解；保留正文85%、年龄20外推及引言90%差异，不转成成败概率."
  },
  "learning_task": "重建经营阶段 Cournot 续局和全部弱进入数量，解释 K=900 的 {2,3}；区分电力计划、建设、投运及沉没/可回收/可避免投入.",
  "source_id_aliases": {
    "EIBC-S03": "BF-S-COST-FY2025-SEC",
    "EIBC-S07": "EI-S06-M3-202605"
  },
  "shared_inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/inputs.json",
  "experiment_ids": [
    "exp-ei08-entry"
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
      "id": "EIBC-S02",
      "title": "Entry",
      "authors": [
        "Glenn Ellison"
      ],
      "version": "MIT 14.271 Fall 2022; Lecture 16",
      "url": "https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf",
      "locators": [
        "slides 2–3",
        "slide 11 learning/exit background"
      ]
    },
    {
      "id": "EIBC-S05A",
      "title": "New U.S. electric generating capacity expected to reach a record high in 2026",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "Published 2026-02-20",
      "url": "https://www.eia.gov/todayinenergy/detail.php?id=67205",
      "locators": [
        "Article opening, source period and planned/realized statements"
      ]
    },
    {
      "id": "EIBC-S05B",
      "title": "Preliminary Monthly Electric Generator Inventory",
      "authors": [
        "U.S. Energy Information Administration"
      ],
      "version": "Methods webpage accessed 2026-09-21",
      "url": "https://www.eia.gov/electricity/data/eia860m/index.php",
      "locators": [
        "Methods text above yearly workbook lists",
        "Capacity commitments paragraph"
      ]
    },
    {
      "id": "EIBC-S06",
      "title": "The Nature of Firm Growth",
      "authors": [
        "Vincent Sterk",
        "Petr Sedláček",
        "Benjamin Pugsley"
      ],
      "version": "AER 111(2), 2021, pp.547–579; 33-page version of record",
      "url": "https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf",
      "locators": [
        "§I.A–F, printed pp.550–559",
        "Table 1",
        "§I.E p.558",
        "Figure 4 p.559; introduction p.548 conflict"
      ]
    }
  ]
}
```

## Supplied entry
<div data-reading-branch-controls aria-label="选择阅读分支">
<button type="button" data-select-reading-branch="common">共同主线</button>
<button type="button" data-select-reading-branch="research">研究选读</button>
<button type="button" data-select-reading-branch="all">全部展开</button>
</div>

<a id="ei08-process"></a>

## 进入与未来经营机会

进入者先投入资源，再在投产时的需求和竞争条件下经营. 建设期间，成本、客户选择和其他企业的容量都可能变化.

可转卖或转作他用的资源具有回收价值；已付且无法回收的投入成为沉没成本；尚未支付、可通过暂停或退出避免的支出仍影响当前选择. 三者在进入前共同影响投资决策，进入后分别进入继续与退出的比较.

<a id="ei08-cournot"></a>

## 经营阶段的数量竞争

采用两阶段教学模型：第一阶段决定是否进入并支付 $K\ge0$，第二阶段由已进入企业竞争. 经营期只有一期，$K$ 与经营利润采用同一货币单位. [^entry]

本篇在每个进入数量下采用下述对称经营续局，第一阶段的进入集合以这个续局为条件.

设有 $\bar N$ 家潜在企业. 若 $N\ge1$ 家进入，它们生产同质产品，边际成本均为 $c\ge0$，同时选择非负数量. 需求在正价格区域为 $P=a-Q$，$Q=\sum_iq_i$，$a\ge0$；价格下界为0. 先处理 $a>c$ 的正产量情形. 给定其他企业总产量 $Q_{-i}$，企业 $i$ 选择 $q_i$，其经营期变动利润为

$$
\pi_i^v=(a-Q_{-i}-q_i-c)q_i.
$$

一阶导数为 $a-c-Q_{-i}-2q_i$，二阶导数为 $-2$. 在正产量均衡中，所有企业取相同数量 $q$，于是 $Q_{-i}=(N-1)q$. 代回一阶条件：

$$
a-c-(N+1)q=0,\qquad
q_i^*=\frac{a-c}{N+1}.
$$

再由价格定义得到

$$
Q^*=\frac{N(a-c)}{N+1},\qquad
P^*=c+\frac{a-c}{N+1},\qquad
\pi^v(N)=\frac{(a-c)^2}{(N+1)^2}.
$$

该利润扣除可变成本，进入成本另在第一阶段扣除. 企业数增加使每家产量和价差同时下降. 对称解落在正产量、正价格区域；零产量得零利润，令总供给进入零价格区域所得至多为零，因此角点偏离均不改善正利润解. [^pricing]

<a id="ei08-entryset"></a>

## 进入均衡集合

若 $0<N<\bar N$，稳定的进入决定要求已进入者所得 $\pi^v(N)-K\ge0$，下一家进入后的所得 $\pi^v(N+1)-K\le0$，即

$$
\pi^v(N)\ge K,\qquad \pi^v(N+1)\le K.
$$

这是弱最优条件：净利润为零时，进入与不进入均为最佳选择，均衡企业数因此可以有多个. [^entry]

取 $a=120,c=0,\bar N=10$. 先列出经营利润，再放入进入成本：

| 已进入企业数 $N$ | 每家产量 | 均衡价格 | 每家变动利润 $\pi^v(N)$（显示值舍入） |
|---:|---:|---:|---:|
| 1 | 60 | 60 | 3,600 |
| 2 | 40 | 40 | 1,600 |
| 3 | 30 | 30 | 900 |
| 4 | 24 | 24 | 576 |
| 5 | 20 | 20 | 400 |
| 6 | 17.143 | 17.143 | 293.878 |

当 $K=800$ 时，三家进入各有100净利润，第四家若进入只得 $576-800<0$. 两家并不稳定，因为第三家进入仍可获利；四家也不稳定，因为已有企业愿意改为不进入. 均衡企业数集合因此是 $\{3\}$.

$K=350$ 时，五家各有净利润50，第六家进入将亏损，均衡集合为 $\{5\}$. 较低的进入成本改变了未来竞争强度及利润空间.

$K=900$ 时，第三家进入恰得零净利，可以选择进入或不进入，均衡集合为 $\{2,3\}$；同理，$K=400$ 对应 $\{4,5\}$.

| $K$ | 弱均衡企业数集合 | 含义 |
|---:|---|---|
| 800 | $\{3\}$ | 唯一默认例 |
| 350 | $\{5\}$ | 较低进入成本 |
| 900 | $\{2,3\}$ | 第三家零净利，进入与否均可 |
| 400 | $\{4,5\}$ | 第五家零净利，进入与否均可 |

若 $N=\bar N$，只需已进入者所得非负；上限为2且 $K=800$ 时，集合为 $\{2\}$. 若 $\bar N=0$，集合为 $\{0\}$；上限为正时，零家进入稳定的条件是 $\pi^v(1)\le K$.

当 $a\le c$ 时，选择各企业零产量、零变动利润的经营续局. 此时 $K>0$ 对应 $\{0\}$，$K=0$ 对应从0到 $\bar N$ 的全部进入数量. $a=c=0$ 时也采用该续局，以此确定第一阶段所得.

<a id="ei08-experiment"></a>

## 进入成本与竞争

<div data-experiment-slot="exp-ei08-entry"></div>

应用该比较需要潜在进入者、不可回收投入及投产后竞争方式的信息.

<a id="ei08-capital"></a>
<a id="CASE-EI08-EIA-GENERATOR-PLAN-2026"></a>

## 电力容量的计划与投运

EIA 2026年2月20日文章报告2025年已新增约53 GW公用事业规模容量，并公布当时2026年计划新增86 GW. 计划来自月度发电机组调查，属于可修订的初步信息；项目的承诺状态需另查. [^eia][^inventory]

| 同一篇历史文章中的数值 | 材料期间 | 状态 | 本例用途 |
|---|---|---|---|
| 53 GW | 2025年 | 文章报告的已新增量 | 回看上年交付 |
| 86 GW | 2026年 | 当时计划量，尚待实现 | 识别未来潜在供给 |

计算计划兑现率，需要将同一批项目的原计划与实际投运逐一匹配.

```text
预期需求与未来竞争
      │ 形成投资理由
      ▼
投资决定 ──资金、许可、设备和场址安排──▶ 建设、调试
                                            │ 达到运行条件
                                            ▼
                                        投入运行
                                            │ 原料、人员、网络与运行状态
                                            ▼
                                        可用供给
```

建设使供给响应滞后于投资决定. 当前高利润可吸引多个项目，数年后集中投运又压缩利润. 评估未来供给时，需沿项目的融资、许可、设备交付、调试和投运时间更新可用容量.

教学例中，建厂已支付且无法回收的900为沉没成本. 从现在继续经营可得净现金流120及残值30，立即清算可得100；所有金额按同一决策时点计量，无其他义务. 继续所得150高于100. 若未来净现金流降为40，继续所得70低于100，应退出. 两种选择均无法改变过去900的支出，可回收价值和未来现金流决定当前取舍.

<section data-reading-branch="research">
<a id="ei08-research"></a>
<details>
<summary>选读：进入者异质性</summary>

Sterk、Sedláček、Pugsley（2021）用美国企业纵向数据分解对数就业的横截面方差. 基准估计采用年龄0–19岁的存活企业平衡面板；§I.E 和 Figure 4 中，事前异质性份额在年龄0约85%，年龄20约40%，后者为估计区间外的参数外推. [^sterk]

**练习.** “85%的企业命运在成立时决定”如何误读该结果？原结果分解指定样本的规模方差；企业成败需要另行定义结果变量和样本，存活企业面板尤其没有覆盖全部退出企业.

</details>
</section>

<a id="ei08-exercises"></a>

## 进入与退出练习

**任务一：弱条件与多解.** 取 $a=120,c=0,K=400,\bar N=10$，解释4家、5家稳定而6家不稳定的原因.

**解析.** 四家各得 $576-400=176$，第五家进入恰得零净利，可选择不进；五家各得零净利，第六家进入净利约为 $293.878-400<0$. 六家时已有企业愿意改为不进入. 故集合为 $\{4,5\}$. 若额外约定零净利润时总选择进入，则选出5家.

**任务二：零产量续局.** 取 $a=20,c=30,\bar N=3$，比较 $K=10$ 和 $K=0$.

**解析.** 两种情况均选择零产量、零变动利润. $K=10$ 时进入亏10，集合为 $\{0\}$；$K=0$ 时进入与不进入所得相同，集合为 $\{0,1,2,3\}$.

**迁移题.** 某工业企业称“当前订单利润率高，已宣布一座三年后投产的新厂”. 专用安装无法回收，设备可二手转售，投入尚未全部支付. 请写出进入前、建设中、投运后三个不同问题，并给一项下一步证据.

**解析.** 进入前比较未来竞争下的经营所得与全部投入承诺. 建设中比较从当前继续的增量所得、可避免付款及暂停或转售所得，已付专用安装费按沉没成本处理. 投运后比较可交付订单的收益、边际成本和资源约束. 分别可查需求合同、未付设备合同及产线调试和交付记录.

[^entry]: EIBC-S02. Glenn Ellison，MIT 14.271 Fall 2022，Lecture 16《Entry》；定位：slides2–3的两阶段进入和弱条件，slide11的学习／退出概念背景.[原讲义](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf).
[^pricing]: EIBC-S01. MIT 14.271 Fall 2022 Lecture 5；定位：slides3–4的Cournot数量竞争设置. $a,c,K,\bar N$ 和所有数值为教学假设.[原讲义](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf).
[^eia]: EIBC-S05A. EIA，2026-02-20，《New U.S. electric generating capacity expected to reach a record high in 2026》；定位：正文开篇及图的数据期注释，区分2025已新增与2026计划容量.[原文](https://www.eia.gov/todayinenergy/detail.php?id=67205).
[^inventory]: EIBC-S05B. EIA，*Preliminary Monthly Electric Generator Inventory*；定位：页面方法说明及“not meant to be capacity commitments”段.[方法原页](https://www.eia.gov/electricity/data/eia860m/index.php).
[^sterk]: EIBC-S06. Vincent Sterk、Petr Sedláček、Benjamin Pugsley，*The Nature of Firm Growth*，AER 111(2)，2021；定位：§I.A–F、Table1、Figure4（印刷pp.550–559），年龄0–19为估计区间，年龄20为参数外推.[开放正式版](https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf).

<script src="/notebook/labs/ei-b/reader-adapter.js" defer></script>

## Additional teaching material
## 进入与退出的静态计算

$a=120,c=0,\bar N=10$ 时，1至6家企业的每家变动利润分别3600、1600、900、576、400、约293.878. $K=800$ 的均衡集合为 $\{3\}$，$K=350$ 为 $\{5\}$，$K=900$ 为 $\{2,3\}$，$K=400$ 为 $\{4,5\}$.

枚举 $0\le N\le\bar N$，令 $g=\max(a-c,0)$. 当 $N>0$，已进入条件为 $g^2\ge K(N+1)^2$；当 $N<\bar N$，未进入条件为 $g^2\le K(N+2)^2$. 参数为整数时直接比较整数积，保留等号. $a\le c$ 选择零产量续局：$K>0$ 仅零家进入，$K=0$ 则全部允许数量均稳定.

EIA 2026-02-20文章记录2025年新增53 GW、2026年当时计划86 GW. 退出教学例中，已付沉没900，继续所得120＋30＝150超过立即清算100；未来现金降为40时，继续所得70低于100.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "exp-ei08-entry",
    "title": "进入、退出与产业资本投入：机制实验",
    "anchor": "ei08-experiment",
    "description": "g=max(a-c,0); var_profit(N)=g^2/(N+1)^2. Enumerate 0..cap; incumbent g^2>=K*(N+1)^2; outsider g^2<=K*(N+2)^2 only when N<cap.",
    "inputs": {
      "input_version": "2026-09-21-review-v2",
      "facts": {
        "eia": {
          "source_ids": [
            "EIBC-S05A",
            "EIBC-S05B"
          ],
          "article_date": "2026-02-20",
          "rows": [
            {
              "year": 2025,
              "capacity_gw": 53,
              "status": "reported_realized_additions"
            },
            {
              "year": 2026,
              "capacity_gw": 86,
              "status": "plan_if_realized"
            }
          ]
        }
      },
      "models": {
        "entry": {
          "identity": "teaching_assumption",
          "defaults": {
            "a": 120,
            "c": 0,
            "K": 800,
            "cap": 10
          },
          "ranges": {
            "a": [
              0,
              200,
              1
            ],
            "c": [
              0,
              200,
              1
            ],
            "K": [
              0,
              20000,
              1
            ],
            "cap": [
              0,
              20,
              1
            ]
          },
          "presets": [
            {
              "K": 800,
              "expected": [
                3
              ]
            },
            {
              "K": 350,
              "expected": [
                5
              ]
            },
            {
              "K": 900,
              "expected": [
                2,
                3
              ]
            },
            {
              "K": 400,
              "expected": [
                4,
                5
              ]
            }
          ],
          "conditions": [
            "finite identical potential entrants; one operating period",
            "weak entry incentives, no maximal-N selection",
            "cap=0 -> {0}",
            "a<=c -> zero-output continuation; if K=0 every N from 0..cap indifferent",
            "no trades -> no transaction price"
          ]
        },
        "exit": {
          "identity": "teaching_assumption",
          "unit": "same-date decision units",
          "past_sunk": 900,
          "continue_cash": 120,
          "future_salvage": 30,
          "salvage_now": 100,
          "stress_cash": 40
        }
      },
      "default_outputs": {
        "entry": {
          "a": 120,
          "c": 0,
          "K": 800,
          "cap": 10,
          "equilibrium_set": [
            3
          ],
          "rows": [
            {
              "N": 0,
              "q_each": null,
              "Q": 0,
              "price": null,
              "variable_profit": null,
              "net_profit": null,
              "incumbentOK": true,
              "outsiderOK": false,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 1,
              "q_each": 60,
              "Q": 60,
              "price": 60,
              "variable_profit": 3600,
              "net_profit": 2800,
              "incumbentOK": true,
              "outsiderOK": false,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 2,
              "q_each": 40,
              "Q": 80,
              "price": 40,
              "variable_profit": 1600,
              "net_profit": 800,
              "incumbentOK": true,
              "outsiderOK": false,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 3,
              "q_each": 30,
              "Q": 90,
              "price": 30,
              "variable_profit": 900,
              "net_profit": 100,
              "incumbentOK": true,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": true,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 4,
              "q_each": 24,
              "Q": 96,
              "price": 24,
              "variable_profit": 576,
              "net_profit": -224,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 5,
              "q_each": 20,
              "Q": 100,
              "price": 20,
              "variable_profit": 400,
              "net_profit": -400,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 6,
              "q_each": 17.142857142857142,
              "Q": 102.85714285714286,
              "price": 17.142857142857142,
              "variable_profit": 293.8775510204082,
              "net_profit": -506.1224489795918,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 7,
              "q_each": 15,
              "Q": 105,
              "price": 15,
              "variable_profit": 225,
              "net_profit": -575,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 8,
              "q_each": 13.333333333333334,
              "Q": 106.66666666666667,
              "price": 13.333333333333334,
              "variable_profit": 177.77777777777777,
              "net_profit": -622.2222222222222,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 9,
              "q_each": 12,
              "Q": 108,
              "price": 12,
              "variable_profit": 144,
              "net_profit": -656,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": true,
              "equilibrium": false,
              "cap_bound": false,
              "entry_tie": false,
              "incumbent_tie": false
            },
            {
              "N": 10,
              "q_each": 10.909090909090908,
              "Q": 109.09090909090908,
              "price": 10.909090909090908,
              "variable_profit": 119.00826446280992,
              "net_profit": -680.99173553719,
              "incumbentOK": false,
              "outsiderOK": true,
              "next_exists": false,
              "equilibrium": false,
              "cap_bound": true,
              "entry_tie": false,
              "incumbent_tie": false
            }
          ],
          "nonpositive_margin_corner": false,
          "zero_output_continuation": false,
          "no_potential_entrants": false
        }
      }
    },
    "outputs": {
      "entry": {
        "a": 120,
        "c": 0,
        "K": 800,
        "cap": 10,
        "equilibrium_set": [
          3
        ],
        "rows": [
          {
            "N": 0,
            "q_each": null,
            "Q": 0,
            "price": null,
            "variable_profit": null,
            "net_profit": null,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 1,
            "q_each": 60,
            "Q": 60,
            "price": 60,
            "variable_profit": 3600,
            "net_profit": 2800,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 2,
            "q_each": 40,
            "Q": 80,
            "price": 40,
            "variable_profit": 1600,
            "net_profit": 800,
            "incumbentOK": true,
            "outsiderOK": false,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 3,
            "q_each": 30,
            "Q": 90,
            "price": 30,
            "variable_profit": 900,
            "net_profit": 100,
            "incumbentOK": true,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": true,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 4,
            "q_each": 24,
            "Q": 96,
            "price": 24,
            "variable_profit": 576,
            "net_profit": -224,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 5,
            "q_each": 20,
            "Q": 100,
            "price": 20,
            "variable_profit": 400,
            "net_profit": -400,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 6,
            "q_each": 17.142857142857142,
            "Q": 102.85714285714286,
            "price": 17.142857142857142,
            "variable_profit": 293.8775510204082,
            "net_profit": -506.1224489795918,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 7,
            "q_each": 15,
            "Q": 105,
            "price": 15,
            "variable_profit": 225,
            "net_profit": -575,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 8,
            "q_each": 13.333333333333334,
            "Q": 106.66666666666667,
            "price": 13.333333333333334,
            "variable_profit": 177.77777777777777,
            "net_profit": -622.2222222222222,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 9,
            "q_each": 12,
            "Q": 108,
            "price": 12,
            "variable_profit": 144,
            "net_profit": -656,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": true,
            "equilibrium": false,
            "cap_bound": false,
            "entry_tie": false,
            "incumbent_tie": false
          },
          {
            "N": 10,
            "q_each": 10.909090909090908,
            "Q": 109.09090909090908,
            "price": 10.909090909090908,
            "variable_profit": 119.00826446280992,
            "net_profit": -680.99173553719,
            "incumbentOK": false,
            "outsiderOK": true,
            "next_exists": false,
            "equilibrium": false,
            "cap_bound": true,
            "entry_tie": false,
            "incumbent_tie": false
          }
        ],
        "nonpositive_margin_corner": false,
        "zero_output_continuation": false,
        "no_potential_entrants": false
      }
    },
    "algorithm": {
      "formula": "g=max(a-c,0); var_profit(N)=g^2/(N+1)^2. Enumerate 0..cap; incumbent g^2>=K*(N+1)^2; outsider g^2<=K*(N+2)^2 only when N<cap.",
      "algorithm": "engine.entry; BigInt exact integer comparisons keep weak equality; zero-output continuation",
      "boundary_tests": [
        "K800/350 unique",
        "K900/400 weak sets",
        "K3600 {0,1}",
        "cap0",
        "cap bound",
        "a<=c K0 all counts"
      ],
      "static": "readers/EI-08.reader.md#ei08-entryset; static/static-equivalents.md second unit"
    },
    "static_equivalent": {
      "markdown": "https://ou-liu-red-sugar.github.io/notebook/labs/ei-b/static-equivalents.md",
      "in_entry": "ei08-experiment",
      "text": "/ ei08-experiment\n\na=120,c=0，潜在上限10，默认K=800.\nN=1..6变动利润：3600,1600,900,576,400,293.877551.\n均衡集合：K800->{3}；350->{5}；900->{2,3}；400->{4,5}.\n默认N3时每家q30，价格30，变动利润900，净利润100；\nK350时N5，每家q20，价格20，变动利润400，净利润50.\n\n算法枚举N=0..cap. a,c,K、cap均为合法范围内整数.\ng=max(a-c,0)，正N变动利润g²/(N+1)².\n现有企业条件：N=0或g²>=K(N+1)².\n外部条件：N=cap或g²<=K(N+2)².\n用整数BigInt比较，保留零净利润等号.\ncap0->{0}；a<=c,K>0->{0}；a<=c,K0->{0,1,...,cap}，采用零产量续局.\n无成交时成交价null，不显示未发生的交易价格.\na/c合法0..200，K0..20000，cap0..20. 到cap不再检查不存在的下一家.\n\nEIA静态卡：2026-02-20文章报告2025新增53GW、2026当时计划86GW. 不能当同批兑现率，不能当模型N或K.\n退出例：过去沉没900；继续现金120+残值30=150，立即清算100，选择继续；\n未来现金降为40时，继续70<100，选择退出. 各值已统一决策时点的教学单位."
    },
    "implementation_files": [
      "/notebook/labs/ei-b/inputs.json",
      "/notebook/labs/ei-b/inputs.js",
      "/notebook/labs/ei-b/engine.js",
      "/notebook/labs/ei-b/ui.js",
      "/notebook/labs/ei-b/interactions.html"
    ],
    "state": "staging_only_awaiting_Lead_UI",
    "local_url": "/notebook/labs/ei-b/interactions.html?experiment=exp-ei08-entry"
  }
]
```

## Sources
- [Static Competition and Models of Differentiation, Part 1](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec5slides.pdf): 静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.
- [Entry](https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec16slides.pdf): 两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.
- [New U.S. electric generating capacity expected to reach a record high in 2026](https://www.eia.gov/todayinenergy/detail.php?id=67205): 2026 年计划新增发电容量 86 GW；2025 年实际新增容量 53 GW. 两项分别描述不同年度的计划和实际容量.
- [Preliminary Monthly Electric Generator Inventory](https://www.eia.gov/electricity/data/eia860m/index.php): 月度发电设备资料包含现有与拟建项目，估计可能修订. 计划容量表示项目计划，实际投产需要继续跟踪.
- [The Nature of Firm Growth](https://discovery.ucl.ac.uk/id/eprint/10109806/1/Sterk_aer.20190748.pdf): §I 用平衡面板分解对数就业的横截面方差. 正文报告 age 0 约 85%、age 20 约 40%，后一数值来自外推；引言另有超过 90% 的表述.

## Content relations
```json
[
  {
    "from": "zh-ei08",
    "relation": "part_of",
    "to": "industry-structure",
    "reason": "主要 topic 归属"
  },
  {
    "from": "ei08-capital",
    "relation": "illustrated_by",
    "to": "CASE-EI08-EIA-GENERATOR-PLAN-2026",
    "reason": "固定期间的真实材料，保留单位与统计对象",
    "at_section": "ei08-capital"
  },
  {
    "from": "ei08-cournot",
    "relation": "supported_by",
    "to": "EIBC-S01",
    "reason": "静态Cournot、Bertrand和Hotelling的条件与一阶条件；本包无退出选项的覆盖市场、数值和角点验证为教学改写，并非会员公司参数估计.",
    "locator": "slides 3–4 Cournot; slide 5 Bertrand; slides 6–7 Hotelling",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei08-cournot"
  },
  {
    "from": "ei08-entryset",
    "relation": "supported_by",
    "to": "EIBC-S02",
    "reason": "两阶段进入的纯策略弱条件；零利润边界不唯一. 有限上限、N=0及无产量情形按本包完整明示的教学续局计算.",
    "locator": "slides 2–3; slide 11 learning/exit background",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei08-entryset"
  },
  {
    "from": "ei08-capital",
    "relation": "supported_by",
    "to": "EIBC-S05A",
    "reason": "固定文章报告2026计划新增86 GW与2025已新增53 GW. 两值分属不同年度和状态，不是同批项目兑现率.",
    "locator": "Article opening, source period and planned/realized statements",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei08-capital"
  },
  {
    "from": "ei08-capital",
    "relation": "supported_by",
    "to": "EIBC-S05B",
    "reason": "月度存量/计划资料可修订，容量不等于设施承诺. 仅用方法正文，不采用未读状态码或当前工作簿字段.",
    "locator": "Methods text above yearly workbook lists; Capacity commitments paragraph",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei08-capital"
  },
  {
    "from": "ei08-research",
    "relation": "supported_by",
    "to": "EIBC-S06",
    "reason": "§I平衡面板对数就业横截面方差分解；正文age0约85%、age20约40%，后者为外推. 与引言90%+不一致. 只作进入异质性选读，不作成功概率或项目校准.",
    "locator": "§I.A–F, printed pp.550–559; Table 1; §I.E p.558; Figure 4 p.559; introduction p.548 conflict",
    "scope": "指定采用单元，不等于整部报告",
    "at_section": "ei08-research"
  },
  {
    "from": "ei08-cournot",
    "relation": "uses_method",
    "to": "zh-ei07",
    "reason": "进入后的产品市场竞争决定变动利润",
    "at_section": "ei08-cournot"
  },
  {
    "from": "ei08-capital",
    "relation": "uses_method",
    "to": "zh-ei04",
    "reason": "资本投运后还受有效供给条件约束",
    "at_section": "ei08-capital"
  },
  {
    "from": "ei08-capital",
    "relation": "informs",
    "to": "zh-ei09",
    "reason": "资本形成时间轴；与供应链交期分开",
    "at_section": "ei08-capital"
  },
  {
    "from": "ei08-experiment",
    "relation": "illustrated_by",
    "to": "exp-ei08-entry",
    "at_section": "ei08-experiment",
    "reason": "g=max(a-c,0); var_profit(N)=g^2/(N+1)^2. Enumerate 0..cap; incumbent g^2>=K*(N+1)^2; outsider g^2<=K*(N+2)^2 only when N<cap."
  }
]
```

## Related entries

## Optional reading path
读懂一个行业: step 5/10
先求经营续局与进入集合，再区分计划、投入、投运和退出.
资本形成连接着上下游；先用投入产出表追踪生产需要，再研究交付与库存的时间.
Next: [产业链、投入产出与上下游联系](https://ou-liu-red-sugar.github.io/zh/notebook/input-output-and-production-linkages/)
