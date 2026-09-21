# 从经营价值与股权价值到普通股

普通股价值由经营组、已属股权层的价值、其他资产和各类索取权在同一日期汇总，再分配给该日期的经济完全稀释股份.

Entry: zh-p30 | Node: P30 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
读者为有充分数学背景的高年级本科生至研究生. 先实际读取 agent_packet.required_readings 的全部指定单元，所选可选分支再读 optional_readings，核对版本、期间、单位及支持内容. 缺少必要单元时先取得等价可读原件，再进行依赖它的讲解. 逐项重建Base普通股桥，区分经营、已属股权层和集团剩余项目. 核现金保留、租赁、投资税、RSU及末期股份，以混合工业/银行集团和200M股扰动检验归属与日期. 先以完整推理任务诊断，再让读者计算和解释；按错误反馈，使用迁移题检验. 采用所列日期研究和教学输入，runtime_reading_log记录实际来源与范围.

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
      "source_id": "PBCD-METHOD-RR",
      "title": "业务状态下的条件定价、普通股桥与Risk-Reward",
      "version": "2026-09-21 局部准确摘编",
      "access": {
        "kind": "site_body",
        "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/",
        "availability": "staged_site_body; accessible after adoption"
      },
      "required_unit": {
        "locator": "pm-conditional-rr-common-equity-bridge",
        "scope": "完整普通股桥节",
        "purpose": "混合EV/权益价值各只处理一次"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.",
      "authors": [
        "本站方法"
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
        "locator": "Note3租赁；Note4 p15融资承诺表/脚注；Note5债务表及其账面/本金说明；Note6 p19",
        "scope": "完整采用表和必要上下文",
        "purpose": "现金、借款、租赁、SBC及RSU身份"
      },
      "supports": "分部范围与经营费用使用分配、产品收入、PP&E取得和折旧；债务/租赁、SBC/RSU等资本权利实例. 未来余额不由当期附注直接给出.",
      "authors": [
        "Amazon.com, Inc."
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
        "locator": "case-amzn-equity、case-amzn-capital",
        "scope": "四状态桥、股份及投资税代理、过程现金解释",
        "purpose": "将未来余额与当期披露区分"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.",
      "authors": [
        "本站历史研究"
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "case_id": "CASE-AMZN-20260920",
    "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json",
    "identity": "冻结2026-09-20输入；不同JSON字段保留事实/假设/条件结果身份",
    "selected_keys": [
      "case_id",
      "metadata",
      "parameters",
      "dilution_sensitivity",
      "teaching_examples",
      "identity_notes"
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
      "parameters": {
        "aws": {
          "kernel": {
            "server_share": 0.45,
            "server_life": 5.5,
            "server_commission": [
              0.75,
              0.25
            ],
            "dc_share": 0.55,
            "dc_life": 30,
            "dc_commission": [
              0.2,
              0.45,
              0.35
            ]
          },
          "legacy_runoff": 0.9,
          "da_2026": 33,
          "calibration_contribution": 0.64
        },
        "retail": {
          "growth": {
            "Bull": [
              [
                10,
                9,
                8
              ],
              [
                5,
                5,
                4
              ],
              [
                14,
                13,
                12
              ],
              [
                23,
                21,
                18
              ],
              [
                12,
                11,
                10
              ],
              [
                30,
                28,
                25
              ]
            ],
            "Base": [
              [
                8,
                7,
                6
              ],
              [
                4,
                4,
                4
              ],
              [
                11,
                10,
                9
              ],
              [
                18,
                16,
                14
              ],
              [
                10,
                9,
                8
              ],
              [
                24,
                23,
                23
              ]
            ],
            "Bear": [
              [
                5,
                5,
                4
              ],
              [
                2,
                2,
                2
              ],
              [
                8,
                7,
                6
              ],
              [
                10,
                9,
                8
              ],
              [
                6,
                5,
                4
              ],
              [
                12,
                10,
                8
              ]
            ],
            "Tail": [
              [
                -2,
                1,
                3
              ],
              [
                -2,
                0,
                1
              ],
              [
                1,
                3,
                4
              ],
              [
                3,
                5,
                7
              ],
              [
                2,
                3,
                4
              ],
              [
                0,
                5,
                8
              ]
            ]
          },
          "revenue_2026": [
            297.1,
            23.5,
            194.1,
            85,
            55.7,
            7.1
          ],
          "service_mix_spread_bps_per_pp": 20,
          "logistics_cost_bps_per_pct": 35,
          "base_unit_cost_na": [
            0,
            -1,
            -1
          ],
          "base_unit_cost_intl": [
            0.25,
            -0.75,
            -1
          ],
          "base_price_invest_na": [
            15,
            10,
            10
          ],
          "base_price_invest_intl": [
            20,
            15,
            10
          ],
          "base_other_net_na": [
            15,
            20,
            25
          ],
          "base_other_net_intl": [
            25,
            35,
            35
          ]
        },
        "capital": {
          "operating_cash_reserve": 40,
          "liquidity_floor": 60,
          "issuance_fee": 0.005,
          "max_growth_debt": 168.883433,
          "new_debt_rate": {
            "Bull": 0.06,
            "Base": 0.06,
            "Bear": 0.075,
            "Tail": 0.09
          },
          "dilution_start_fully_awarded": 11.0274,
          "future_new_awards": {
            "Bull": [
              0.015,
              0.035,
              0.04,
              0.045
            ],
            "Base": [
              0.02,
              0.065,
              0.075,
              0.085
            ],
            "Bear": [
              0.025,
              0.11,
              0.125,
              0.135
            ],
            "Tail": [
              0.04,
              0.18,
              0.21,
              0.22
            ]
          },
          "globalstar_shares": 0.025,
          "globalstar_debt_assumed": 0.423692,
          "anthropic_cash": {
            "Bull": [
              0,
              7.5,
              7.5,
              0
            ],
            "Base": [
              0,
              10,
              5,
              0
            ],
            "Bear": [
              0,
              0,
              5,
              5
            ],
            "Tail": [
              0,
              5,
              0,
              0
            ]
          },
          "cash_tax": {
            "Bull": [
              5,
              18,
              28,
              40
            ],
            "Base": [
              5,
              16,
              23,
              32
            ],
            "Bear": [
              5,
              12,
              16,
              22
            ],
            "Tail": [
              5,
              8,
              11,
              15
            ]
          },
          "extra_equipment_payable_change": [
            30.2,
            -10,
            -12,
            -8.2
          ],
          "finance_lease_additions": [
            4.3,
            4,
            4,
            4
          ],
          "corporate_additions": [
            2,
            2,
            2,
            2
          ],
          "annual_refi_reserve": [
            0,
            14.06,
            17.087,
            19.452375
          ]
        },
        "benchmark": {
          "annual_rate": 0.0483,
          "identity": "Frozen three-year Treasury par yield, approximate constant-rate reinvestment comparator; not a security quote or discount rate"
        }
      },
      "dilution_sensitivity": {
        "extra_awards_bn": 0.2,
        "price": 341.40222529676095,
        "cash_proceeds": 0,
        "identity": "纯分母检查；不是现实授予/融资政策分析"
      },
      "teaching_examples": {
        "mixed_equity_bridge": {
          "industrial_ev": 600,
          "industrial_debt": 120,
          "bank_equity": 200,
          "bank_debt_already_in_equity": 1000,
          "nonoperating_cash": 30,
          "parent_debt": 40,
          "shares": 10,
          "common_equity": 670,
          "price": 67,
          "identity": "纯教学设定；不是任何公司披露"
        },
        "brier": {
          "hypothetical_observation": "Base",
          "adopted": 0.4522,
          "capital_pressure": 0.4728,
          "normalization": "sum over four classes, no one-half; range0–2"
        }
      },
      "identity_notes": {
        "market_debt": "期末有息借款余额（模型口径），不是未来债券市场公允价值",
        "cash": "期末账面可用现金/证券模型余额，经营保留未被支出",
        "finance_claims": "融资租赁及融资义务；与有息借款分列",
        "investment_net": "已扣模型实现税的非经营投资；不是流动性储备",
        "other_claims": "模型取0；未作全体潜在权利为零的审计结论",
        "pricing_range": "同一经营/资金路径的定价参数范围；不是置信区间或条件支持",
        "probability": "主观粗判断，不是统计后验；按钮操作不新增研究证据",
        "quarters": "每季已继承此前融资；融资前余额不是全期无融资轨迹，也不保证季内资金充足",
        "quote_vs_cutoff": "9月18日参考进入价格，9月20日研究信息截止；无实际成交或仅用9月18日信息的样本外回测声明.",
        "share_count_proxy": "11.0274 B 股是冻结模型规划代理：10.783普通股 + 0.2444 outstanding RSU；公司另披露普通股加全部 outstanding stock awards 对应股份约11.0 B 股. 该代理不是官方完全稀释股数，也不是EPS加权平均股数."
      },
      "state_bridges": {
        "Bull": {
          "bridge": {
            "aws_ev": 3964.8117263193035,
            "retail_ev": 2193.852713958928,
            "cash": 69.07315890389165,
            "debt": 318.4556581561797,
            "finance_claims": 27.0548,
            "investment_net": 342.925,
            "other_claims": 0,
            "shares": 11.187399999999998,
            "common_equity": 6225.152141025943,
            "price": 556.4431539969916,
            "aws_multiple": 26,
            "retail_multiple": 26
          },
          "capital": {
            "cash": 109.07315890389165,
            "debt": 318.4556581561797,
            "finance_claims": 27.0548,
            "shares": 11.187399999999998,
            "cumulative_growth_debt": 154.01909115617963,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 15.0,
            "investment_gross": 425.0,
            "investment_tax_basis": 90.0,
            "investment_tax": 82.075,
            "investment_net": 342.925,
            "operating_tax_timing_proxy": 69.15670410621198,
            "minimum_pre_financing_cash": 7.688421656321893
          }
        },
        "Base": {
          "bridge": {
            "aws_ev": 2384.9670942877474,
            "retail_ev": 1548.4611762812872,
            "cash": 76.40452209404924,
            "debt": 276.79227253610446,
            "finance_claims": 27.0548,
            "investment_net": 219.252225,
            "other_claims": 0,
            "shares": 11.297400000000001,
            "common_equity": 3925.23794512698,
            "price": 347.4461331923256,
            "aws_multiple": 21,
            "retail_multiple": 22
          },
          "capital": {
            "cash": 116.40452209404924,
            "debt": 276.79227253610446,
            "finance_claims": 27.0548,
            "shares": 11.297400000000001,
            "cumulative_growth_debt": 112.35570553610444,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 15.0,
            "investment_gross": 261.195,
            "investment_tax_basis": 90.0,
            "investment_tax": 41.942775,
            "investment_net": 219.252225,
            "operating_tax_timing_proxy": 58.00922060228494,
            "minimum_pre_financing_cash": 15.884423673048552
          }
        },
        "Bear": {
          "bridge": {
            "aws_ev": 1269.295946255737,
            "retail_ev": 810.848008973663,
            "cash": 38.46916242898965,
            "debt": 307.65570077862856,
            "finance_claims": 27.0548,
            "investment_net": 166.54,
            "other_claims": 0,
            "shares": 11.447399999999996,
            "common_equity": 1950.4426168797609,
            "price": 170.3830229466745,
            "aws_multiple": 16,
            "retail_multiple": 17
          },
          "capital": {
            "cash": 78.46916242898965,
            "debt": 307.65570077862856,
            "finance_claims": 27.0548,
            "shares": 11.447399999999996,
            "cumulative_growth_debt": 143.21913377862856,
            "cumulative_equity_proceeds": 0.0,
            "investment_funded": 10.0,
            "investment_gross": 193.0,
            "investment_tax_basis": 85.0,
            "investment_tax": 26.46,
            "investment_net": 166.54,
            "operating_tax_timing_proxy": 46.83650919705054,
            "minimum_pre_financing_cash": 16.284976550733155
          }
        },
        "Tail": {
          "bridge": {
            "aws_ev": 386.55825415769147,
            "retail_ev": 365.1482286334529,
            "cash": 31.8790067485007,
            "debt": 333.31999999999994,
            "finance_claims": 27.0548,
            "investment_net": 73.5,
            "other_claims": 0,
            "shares": 12.551806996018387,
            "common_equity": 496.71068953964516,
            "price": 39.57284315295868,
            "aws_multiple": 9,
            "retail_multiple": 12
          },
          "capital": {
            "cash": 71.8790067485007,
            "debt": 333.31999999999994,
            "finance_claims": 27.0548,
            "shares": 12.551806996018387,
            "cumulative_growth_debt": 168.883433,
            "cumulative_equity_proceeds": 21.235174900459718,
            "investment_funded": 5.0,
            "investment_gross": 73.5,
            "investment_tax_basis": 80.0,
            "investment_tax": 0.0,
            "investment_net": 73.5,
            "operating_tax_timing_proxy": 33.79717704089674,
            "minimum_pre_financing_cash": 15.257610910144159
          }
        }
      }
    }
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [
    "EXP-P30-EQUITY-BRIDGE"
  ],
  "content_version": "2026-09-22-deep-review",
  "learning_task": "逐项重建Base普通股桥，区分经营、已属股权层和集团剩余项目. 核现金保留、租赁、投资税、RSU及末期股份，以混合工业/银行集团和200M股扰动检验归属与日期."
}
```

## Supplied entry
普通股价值由经营组、已属股权层的价值、其他资产和各类索取权在同一日期汇总，再分配给该日期的经济完全稀释股份.

沿用2026-09-20 Amazon研究，终点为2029-12-31. 除另行标注外，金额单位USD B，股份在显示时使用M；计算沿原始精度.[^case]

<a id="p30-claims"></a>
## 价值层级与索取权

EV/EBIT所得为经营价值，尚需分配融资索取权；已归属普通股的净盈利乘PE所得已在股权层. 汇总时按各块已处理的权利扣减剩余项目.[^method]

一种方便的记法是先将经营组分别处理成相应股权价值，再与已在股权层的组相加，最后处理集团层仍未计入的资产和索取权. 公式可以写为

$$
V_{common}=\sum_i(V_{op,i}-C_i)+\sum_jV_{equity,j}
+A_{not\ included}-C_{group,not\ included}.
$$

$C_i$ 为第 $i$ 组尚未处理的索取权，$A$ 与集团扣项也仅列未计项目. 已参与创造定价利润的经营设备属于经营价值，资产加回另针对边界外资产.

<a id="p30-base-bridge"></a>
## Base普通股桥

本例AWS与整合非AWS的EBIT已负担分配的经营费用. FY2029 EBIT乘对应条件倍数：

$$V_{AWS}\approx113.57\times21\approx2384.967,\qquad V_{nonAWS}\approx70.385\times22\approx1548.461.$$

按未舍入输入合计3,933.428，后续现金、借款、投资和股份均来自同一2029路径.

| 桥接项目 | 对普通股价值的影响 | 已计在哪里 / 为什么这样处理 |
|---|---:|---|
| AWS经营价值 | +2384.967 | 含本组经营利润所承担的成本 |
| 非AWS经营价值 | +1548.461 | 含广告、卖家、订阅等整合利润 |
| 期末现金扣经营保留 | +76.405 | $116.405-40$；40仍留在经营边界内 |
| 期末有息借款余额（模型口径） | −276.792 | 按本金滚动的模型余额 |
| 融资租赁及融资义务 | −27.055 | 与上行借款分列，不重复 |
| 税后非经营投资 | +219.252 | 已按本研究税收代理扣税，不再次扣同项税 |
| 其他未计索取权 | 0 | 本模型边界内未另计其他索取权 |
| **普通股价值** | **3925.238** | 所有项目在同一时点归属 |

终点11,297.4M经济完全稀释股份对应每股约347.446美元，价值日期为2029-12-31.[^case]

<a id="p30-cash-debt"></a>
## 现金与融资

60为季度融资警戒线，决定触发融资的时点；40为终点经营现金保留，决定现金中可另加回的金额. 保留现金仍是公司资产，已纳入经营价值边界.

相对于同行EV全额扣现金的口径，保留40构成额外边界. 在静态桥中全额加回现金，会使普通股总值增加40，每股约增加 $40\times1,000/11,297.4\approx3.541$ 美元.

设发行本金10、扣费后收9.9并留为现金，则现金加9.9、债务加10，净债加0.1. 后续购买设备使现金转为经营资产，资本和盈利路径随之更新.

用现金10偿还本金10，两者在静态股权桥中相抵；后续利息、费用和资金可用性按新债务状态计算.

本例EBIT仍扣经营租金，经营租赁负债未再扣；融资租赁及融资义务另列. 变更租赁口径时，同步调整盈利、参照倍数与索取权.[^amzn]

<a id="p30-investments"></a>
## 非经营投资与税

非经营证券Base终点毛值261.195，税基代理90、税率代理24.5%：

$$Tax=0.245\max(261.195-90,0)\approx41.943,\qquad V_{net}\approx219.252.$$

税基与变现税率为研究假设. 资金路径已计出资，终点桥加入资产税后价值，同项出资和税各记一次.

非经营证券可进入终点资产价值，季度补款仍取决于可变现时间. 需求、相关投资与融资环境在压力状态下可能同步恶化，应共同推演.[^case]

<a id="p30-shares"></a>
## 薪酬与股份桥

SBC是期间薪酬费用，未归属RSU是权利存量，EPS稀释加权平均股数是期间盈利分母. Amazon附注提供SBC及RSU活动和归属安排.[^sbc]

6月30日普通股10,783M、未归属RSU244.4M. 公司另将普通股与全部股票奖励合计按舍入值披露为约11B股. 模型采用前两项之和11,027.4M作为fully-awarded规划起点，Base另加未来净奖励245M与收购股份25M：

$$11,027.4+245+25=11,297.4\text{ M股}.$$

已有RSU已纳入起点，归属只改变权利形式；未来净授予按薪酬、授予价格、回购及其他结算条件另预测.

EBIT中的SBC衡量用工成本，现金桥加回非现金费用，股份桥记录相应稀释或结算. 三处分别对应盈利、现金和普通股份额，按同一薪酬安排勾稽.

Tail救援募资约21.235B，按25美元发行价新增约849.407M股. 企业收到募资，未认购的旧股东承担稀释，其个人现金流不含这笔出资. 路径以融资按设定完成为条件.

<a id="p30-experiment"></a>
## 股数敏感性

<div data-experiment-slot="EXP-P30-EQUITY-BRIDGE"></div>

[普通股桥实验](/notebook/labs/p-bcd/interactions.html#EXP-P30-EQUITY-BRIDGE)逐状态展示经营组、可加回现金、融资权利、税后投资和股份，每行保留金额与归属.

Base增加200M奖励股的分母敏感性中，普通股总值保持约3,925.238，股数变11,497.4M，每股约341.402，比原值少6.044. 真实薪酬方案若同时改变成本和现金，应一并重算.

<a id="p30-exercises"></a>
## 练习与解析

**混合口径题.** 一个虚构集团有工业经营EV600、工业借款120；银行子公司的价值已按股权层计为200，其中银行自己的借款1000已在其盈利/权益关系中处理. 集团另有未计现金30、总部借款40，股份10. 普通股每股值是多少？

**解析.** 工业股权480，加银行股权200及现金30，减总部债40，普通股总值670，每股67. 银行融资已在给定股权价值中处理.

**归属题.** Base投资净值约219.252已扣变现税约41.943. 再扣同一税项会怎样？

**解析.** 会重复减少普通股价值. 追加税项需对应另一未计主体、税种、基础及日期.

**迁移题.** 同一公司报告季度EPS稀释加权平均股数10.9，而期末普通股加未归属奖励为11.0. 能否只选择较小的分母来使每股价值更高？

**解析.** EPS用期间平均分母，终点估值用终点股份. 从实际普通股、已有奖励、净授予、回购和增发构建同日期股份桥.

[^case]: [CASE-AMZN-20260920](/zh/notebook/amzn-research-20260920/#case-amzn-equity)，原研究四状态普通股桥、股份路径、投资税代理与融资条件.
[^method]: [普通股桥短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-common-equity-bridge)，本站方法摘编.
[^amzn]: Amazon 2026Q2 10-Q，Note3租赁、Note4融资义务、Note5债务及Note8经营利润分配. [原文](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm). 未来余额沿历史案例的滚动模型生成；10-Q提供当期披露口径与起点.
[^sbc]: 同一10-Q，Note6，印刷p19，SBC费用、RSU活动与归属时间表；普通股时点与期间EPS分母分别见资产负债表/封面和损益表. 股数起点固定为6月30日；7月22日股数属于不同日期.

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P30-EQUITY-BRIDGE",
    "title": "从经营价值与股权价值到普通股",
    "anchor": "p30-experiment",
    "description": "用同日期资本与权利完成普通股桥，区分已计项目、现金保留和期末股份.",
    "inputs": {
      "state": {
        "allowed": [
          "Bull",
          "Base",
          "Bear",
          "Tail"
        ],
        "default": "Base"
      },
      "extra_awards": {
        "min": 0,
        "max": 0.2,
        "default": 0,
        "unit": "billion shares"
      },
      "double_bank_debt": {
        "default": false
      }
    },
    "outputs": {
      "common_equity": "AWS_EV+retail_EV+excesscash−borrowings−financeclaims+netinvestments−otherclaims",
      "price": "common_equity/(frozen shares+extra)"
    },
    "units": {
      "money": "USD billion for company amounts; USD per share for outcomes",
      "shares": "billion",
      "probabilities": "fractions summing to one"
    },
    "identity": "frozen dated research or explicitly marked bounded teaching arithmetic",
    "static_equivalent": {
      "reader": "https://ou-liu-red-sugar.github.io/zh/notebook/operating-value-to-common-equity/#p30-experiment",
      "lab": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/interactions.html#EXP-P30-EQUITY-BRIDGE",
      "without_javascript": "默认完整表和主要对照保留；不把参数规格当运行结果"
    },
    "algorithm": "engine.equity；新增奖励仅固定价值的分母算例；mixedEquity拒绝重复扣银行债.",
    "boundaries": [
      "额外股数有限且0≤extra≤.2",
      "0其他权利明确模型假设",
      "40保留和60警戒分列",
      "已处理的税/银行债不重扣"
    ],
    "default_values": {
      "equity": 3925.23794512698,
      "price": 347.4461331923256,
      "extra_200m_price": {
        "extra_awards_bn": 0.2,
        "price": 341.40222529676095,
        "cash_proceeds": 0,
        "identity": "纯分母检查；不是现实授予/融资政策分析"
      }
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json"
  }
]
```

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): Amazon 历史研究的事实、分析代理、四条未来路径、5 项替代、4 套权重和 16 组已算分布. 价格使用固定研究时点报价；各情景数值是代表点.
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.
- [Amazon · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对自营零售、第三方卖家服务与 AWS 的业务口径，以及存货、设备和现金流的合并披露. 案例的解释由作者根据研究整理.

## Content relations
```json
[
  {
    "from": "zh-p30",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  },
  {
    "relation": "requires",
    "to": "zh-p29",
    "reason": "本篇承重步骤实际使用该能力",
    "required_competence": "能区分经营价值与普通股价值的盈利/参照",
    "from": "zh-p30"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmconditionalrr",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p30"
  },
  {
    "relation": "illustrated_by",
    "to": "zh-amzn-research-20260920",
    "reason": "固定日期案例；不新建第二个别名案例",
    "period": "2025Q4–2029",
    "cutoff": "2026-09-20",
    "from": "zh-p30"
  },
  {
    "relation": "supported_by",
    "to": "src-amzn-2026q2",
    "reason": "分部范围与经营费用使用分配、产品收入、PP&E取得和折旧；债务/租赁、SBC/RSU等资本权利实例. 未来余额不由当期附注直接给出.",
    "locator": "Note8 pp22–25; Note3 pp13–14; Note4 p15 Commitments; Note5 pp17–18 debt table and notes; Note6 p19",
    "scope": "本次重开Note8整单元；租赁余额/期限及成本表、融资承诺表与脚注、债务本金/账面及费用桥、RSU/SBC单元. 不是整份10-Q全部审阅.",
    "optional": false,
    "from": "zh-p30"
  },
  {
    "relation": "informs",
    "to": "zh-p31",
    "reason": "提供各状态同日期普通股终点结果，不直接决定概率",
    "from": "zh-p30"
  },
  {
    "from": "p30-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P30-EQUITY-BRIDGE",
    "at_section": "p30-experiment",
    "reason": "用同日期资本与权利完成普通股桥，区分已计项目、现金保留和期末股份."
  }
]
```

## Related entries
