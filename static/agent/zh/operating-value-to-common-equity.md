# 从经营价值与股权价值到普通股

用同日期资本与权利完成普通股桥，区分已计项目、现金保留和期末股份.

Entry: zh-p30 | Node: P30 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P30《从经营价值与股权价值到普通股》，读者具有高年级本科至研究生数学背景.

先确认本次节点和读者所选分支. 先实际取得required_readings中该范围的全部完整单元，核对版本、期间、币种与模型身份；目录、摘要、搜索节选和成功打开标题不算正文. 记录实际工具/文件、单元起止、读到的关键约定及其支持范围，runtime_reading_log从空表开始，不预填“已读”. 本站方法和公司案例从access.uri所列公开正文读取，外部原件从指定URL读取；不得假设访问任何私人盘符. 读取失败先用明示的已核等价来源，仍缺则具体说明缺的单元，不凭记忆声称已核该事实. 读者要求直接讲解时可直接推进；互动时一次要求一个完整推理任务，不逐格问四则运算. 引用紧随所用材料. 案例固定2026-09-20信息与2026-09-18价格，不更新报价、不接账户、不重估公司；不执行或换名恢复股票DCF/WACC. 所有操作标原状态、具名已算替代或纯教学扰动，不能把点击当新增证据. 最后用迁移题检验，给完整解析，并指出剩余条件.

本篇任务与反馈尺度：
让读者先给Base桥每一项标“属于谁、已计在哪里、哪一天”，再复算3925.237945/11.2974=347.446133. 有息借款是模型本金余额，不是未来交易市值；40终点经营保留不曾花掉，60是不同的融资警戒线；other claims0仍是模型边界. 展示现有RSU归属不再加一次、未来净授予/救援发行另入股数. 额外0.2仅分母练习，不偷偷把真实授予成本当零. 用工业EV600与已属权益的银行200迁移，不能再扣银行1000债. 若旧股东没参与救援认购，不额外写个人付款. 答对数字但不能解释以上身份，不算掌握.

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
  ]
}
```

## Supplied entry
我们已经有了各估值组的条件经营价值，但买入股票并不等于拥有集团的全部经营资产. 债权人、融资租赁提供者、优先权持有人和少数股东可能先分走一部分；公司也可能持有尚未计入经营价值的投资. 最后，同一份普通股总价值还要分给同一时点的股份.

本篇的任务是把这些权利接到一张表上. 以2026年9月20日 Amazon 历史研究为例，所有终点值均属于2029年12月31日，金额为 B 美元、股数为 B 股. 我们要检查的是每一项属于谁、已计在哪里，而不只是检查最后一行加减法. [^case]

<a id="p30-claims"></a>
## 1. 先给每一块价值贴上层级

一个组若以 EV/EBIT 定价，得到的是经营价值，尚未完成融资索取权的分配. 另一个组若以已经归属普通股的净盈利乘PE，得到的已是股权层价值. 两种结果可以出现在同一家公司，但不能把它们相加后，假装总数全部是纯EV，再统一扣一遍全部债务. [^method]

一种方便的记法是先将经营组分别处理成相应股权价值，再与已在股权层的组相加，最后处理集团层仍未计入的资产和索取权. 公式可以写为

$$
V_{common}=\sum_i(V_{op,i}-C_i)+\sum_jV_{equity,j}
+A_{not\ included}-C_{group,not\ included}.
$$

这里 $C_i$ 代表尚未在第 $i$ 个经营价值中处理的索取权，不是任意的“风险扣分”；$A$ 与集团扣项也必须确实尚未计入. 用公司资产负债表帮助定位，但资产账面额不自动等于可加回的价值. 经营需要的设备已经参与创造所定价利润，不能在资本化利润之外再把设备市值整笔加一次.

<a id="p30-base-bridge"></a>
## 2. 把 Base 从头走一遍

历史案例有两个经营组：AWS 与整合非AWS. 它们的成本中已包括所分配的经营费用，没有另建一份“广告价值”或重复总部成本. 先用FY2029 EBIT和该时点条件倍数：

$$
V_{AWS}=113.56986163275\times21=2384.96709428775,
$$
$$
V_{nonAWS}=70.38459892188\times22=1548.46117628129.
$$

两者合计3933.42827056904. 接下来的每一步都使用同一未来路径的资金和权利，而不是把2026年的债务留在增长后的2029年经营价值旁边.

| 桥接项目 | 对普通股价值的影响 | 已计在哪里 / 为什么这样处理 |
|---|---:|---|
| AWS经营价值 | +2384.967094 | 含本组经营利润所承担的成本 |
| 非AWS经营价值 | +1548.461176 | 含广告、卖家、订阅等整合利润 |
| 期末现金扣经营保留 | +76.404522 | $116.404522-40$；40仍留在经营边界内 |
| 期末有息借款余额（模型口径） | −276.792273 | 债券/借款本金滚动，不称未来交易公允价值 |
| 融资租赁及融资义务 | −27.054800 | 与上行借款分列，不重复 |
| 税后非经营投资 | +219.252225 | 已按本研究税收代理扣税，不再次扣同项税 |
| 其他未计索取权 | 0 | 模型采用值，不是审计确认所有潜在权利为零 |
| **普通股价值** | **3925.237945** | 所有项目在同一时点归属 |

最后除以末期经济完全稀释股数11.2974，得到347.446133美元/股.  B 美元除 B 股，正好得到美元/股；别在这一步再乘或除一千. 该数是2029年的条件值，不是今天的公平价. [^case]

<a id="p30-cash-debt"></a>
## 3. 现金、借款和租赁各有自己的账

表里有两个容易混淆的现金参数. 60是过程中的季度融资警戒线；40是终点估值中保留给经营的现金边界. 前者决定何时需要融资，后者决定终点现金有多少另加到经营价值之外. 40没有在现金账中花掉，也没有再从借款净额中扣一次.

这一保留还是相对于某些可比EV“全额扣现金”的额外边界，不能含糊地说两者已经完全同口径. 若只在本静态桥里把全部116.404522都加回，价值增加40，每股增加 $40/11.2974\approx3.5406$；它是边界敏感性，不是一笔新收入.

新融资也不是只有负债的一边. 举一个纯教学的小例：发行本金10，费用后收到9.9，暂时把现金保留. 忽略其他变化，现金增加9.9、借款增加10，所以净债增加0.1，而不是10. 后来若拿这笔钱购置经营设备，现金才会减少，经营关系和资本结果也要跟着变化. 只加债务、不加已收到现金，会把一次融资误当作全部损失.

反向操作同样重要：用10现金偿还10本金，现金和债务同时减少10. 在最简单的同口径静态桥中，两者对股权价值的直接影响相抵. 现实中的利息、费用、资金可用性和违约风险可能改变后续结果，但那需要另外建模，不能凭空保留已还债务再扣一次.

经营租赁与融资租赁不能只按名称全部扔进一个债务格. 本例经营租金仍在 EBIT 中，若又不调整利润便将整笔经营租赁负债额外扣除，会改变所比较的经济边界. 融资租赁和融资义务则按本模型的融资口径单列处理. 改变租赁处理方式时，利润、价值参照与权利桥必须一起匹配. [^amzn]

<a id="p30-investments"></a>
## 4. 投资已经付了钱，并不等于终点价值要扣两次

历史案例保留一组非经营证券. Base 的终点毛值261.195、税基代理90、税率代理24.5%，所以

$$
Tax=0.245\max(261.195-90,0)=41.942775,
\quad V_{net}=219.252225.
$$

这些税基和变现税率是研究假设，不是披露的法律税基. 已经采用税后净值，就不能再减一次相同投资收益对应的税；也不能在资金路径中已经支付出资后，又在终点股权桥中把原始出资整笔扣一遍.

这里还存在流动性区别. 证券的估值可以进入普通股资产价值，却不代表该价值在季度付款时可以立即拿来交付. 2029经营兑现不佳时，客户需求、相关投资和融资环境可能共同受压；把投资账面上涨当作随时可用的现金，会掩盖这层共同风险. [^case]

<a id="p30-shares"></a>
## 5. 股数是期末权利，不是利润表平均数

Amazon 的2026Q2附注列有期末未归属RSU244.4 M 及其归属安排，另有期间SBC费用. 二者描述不同事情：SBC是期间薪酬成本，未归属奖励是尚待归属的权利存量，EPS的加权平均稀释股数则是为计算期间每股利润所用的平均分母. [^sbc]

公司披露的6月30日普通股为10.783 B 股，另有244.4 M 股 outstanding RSU；公司还用四舍五入口径披露“普通股加全部 outstanding stock awards 对应股份”约11.0 B 股. 历史模型为了统一未来稀释路径，采用更窄的规划代理 `10.783 + 0.2444 = 11.0274` 作为 fully-awarded 起点. **11.0274 是模型规划代理，不是公司披露的GAAP/官方完全稀释股数，也不等同于EPS的期内加权平均股数.** Base未来净新增奖励合计0.245，收购相关股份0.025，所以终点为

$$
11.0274+0.245+0.025=11.2974.
$$

既有RSU已经在起点加过，其后归属时不能再加一次. 未来净授予是另一项预测，需要随薪酬与授予价格条件审查；它不是把每年SBC费用机械除以今天股价就能精确得到的数字.

在利润中扣SBC，而现金桥因非现金性质加回，并不使劳动免费；股数与其他结算现金仍要各归其账. 也不能仅因同时看见费用与稀释，就断言两者重复：一个影响业务盈利尺度，一个影响收益分给多少份权利，需检查整套口径是否一致.

本例Tail的企业救援发行额为21.235175，设发行价25，因而新增约0.849407 B 股. 这笔钱进入企业，原普通股被稀释；不参与认购的旧股东没有因此在个人现金流水里强制多付同额款项. 其回报要用发行后的每股终值，不能既让他承担稀释，又虚构一笔个人追加付款. 融资能否完成仍是该路径的条件，不由这张表保证.

<a id="p30-experiment"></a>
## 6. 操作：只动一项权利，检查其他项目

<div data-experiment-slot="EXP-P30-EQUITY-BRIDGE"></div>

[打开普通股桥实验](/notebook/labs/p-bcd/interactions.html#EXP-P30-EQUITY-BRIDGE). 选择原四状态中的任一条，按“经营组→可加入现金→借款与融资权利→税后投资→普通股→股数”的顺序阅读. 每行都保留金额与归属，不把净债压缩成无法追踪的一个数.

然后在 Base 选择“额外0.2 B 奖励股”. 这个按钮只检查分母敏感性，不模拟一套新的真实薪酬政策. 普通股总值仍3925.237945，分母变11.4974，结果341.402225美元/股，减少约6.043908. 若你要研究现实新授予，还要重新检查成本与现金；不能把这个按钮当免费发行股票的预测.

上一张桥接表与这一对数值给出完整的静态等价. 图中被减去的债务不是“悲观程度”，而是一份先于普通股的索取权；被加回的投资也不是“乐观奖励”，而是尚未计入的资产权利.

<a id="p30-exercises"></a>
## 7. 练习与完整解析

**混合口径题.** 一个虚构集团有工业经营EV600、工业借款120；银行子公司的价值已按股权层计为200，其中银行自己的借款1000已在其盈利/权益关系中处理. 集团另有未计现金30、总部借款40，股份10. 普通股每股值是多少？

**解析.** 工业股权为600−120=480；加银行股权200、未计现金30，减总部借款40，普通股总值670，每股67. 不能再减银行借款1000，否则会把已在股权层处理的融资重复扣除. 银行的200在真实研究中还要核所有权和资本可分配性；本题明确给定该权益身份，因此不需要再猜一套EV.

**归属题.** Base投资净值219.252225已扣未来变现税41.942775. 若有人说“为保险起见再扣一次税”，应怎样检查？

**解析.** 先确认是否是同一投资、同一收益与同一税责任. 若是，第二次扣除属于重复，而不是稳健. 若存在另一个确实未计的税负，必须说明税种、主体、计税基础和日期；不能只靠“保守”二字新增一项负担.

**迁移题.** 同一公司报告季度EPS稀释加权平均股数10.9，而期末普通股加未归属奖励为11.0. 能否只选择较小的分母来使每股价值更高？

**解析.** 不能. EPS分母服务期间利润，期末估值分母服务期末权利. 需要从同一时点的实际普通股、已有奖励、未来净授予、回购和增发建立桥，说明各项是否已计. 较小或较大并不是选择依据，适用对象与日期才是. 下一篇汇合概率与这张权利桥时，每个状态都必须使用自己的同日期股数.

[^case]: [CASE-AMZN-20260920](/zh/notebook/amzn-research-20260920/#case-amzn-equity)，原研究四状态普通股桥、股份路径、投资税代理与融资条件. 所有2029数字是历史条件结果.
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
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): 原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布. 报价冻结，代表点不是条件均值.
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
