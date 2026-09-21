# 代币化资产：所有权记录、转让与交收最终性

沿真实基金登记和转让，再比较PvP的验证、锁资、完成或取消，分开技术记录与法律最终性.

Entry: zh-m28 | Node: M28 | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
带读《代币化资产：所有权记录、转让与交收最终性》，面向有充分数学背景的高年级本科生至研究生. 先实际读取随包 required_readings 的完整指定单元，记录版本、范围与所支持内容；选择选读分支时，再读取其指定材料. 动态页面换版时保留本文具名版本的身份；缺少原文则寻找正式等价全文，仍缺失时指出该单元.

以Franklin材料说明基金底层资产、份额、转让代理人和钱包记录，计算100份跨链迁移及12/24的股息分配比例. 另用Agorá的PvP三阶段推演预给100 USD/90 EUR指令，以及B仅有80 EUR时的取消释放. 最后区分技术不可逆、跨腿共同结果与法律最终性.

先用一项完整推导或分析诊断我的起点，跳过已掌握步骤. 让我先计算或判断，再解释错误与机制，最后改变一个条件检验迁移.

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
      "source_id": "MHIJ-FRANKLIN-20260801",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.franklintempleton.com/forms-literature/download-preview/9001-P",
        "verified_access_at": "2026-09-21"
      },
      "version": "2026-08-01",
      "required_unit": {
        "locator": "印刷/PDF pp5–7、14–19、31–33、36–39；Use of Blockchain、Buying/Selling Shares、Peer-to-Peer Transfer",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论."
      },
      "supports": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
      "id": "M28-READ-01",
      "title": "Franklin OnChain U.S. Government Money Fund — Prospectus",
      "authors": [
        "Franklin Templeton Trust"
      ],
      "retrieved_at": "2026-09-21"
    },
    {
      "source_id": "MHIJ-BIS-AGORA-2026",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments.pdf",
        "verified_access_at": "2026-09-21"
      },
      "version": "2026-05-27",
      "required_unit": {
        "locator": "印刷pp19–23/PDF24–28一般流程；pp50–53/PDF55–58锁资与PvP（重点pp51–52）；pp59–61/PDF64–66法律关系；pp65–66/PDF70–71最终性；pp82–83/PDF87–88限制",
        "scope": "完整指定单元；不得以目录/摘要替代",
        "purpose": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用."
      },
      "supports": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用.",
      "id": "M28-READ-02",
      "title": "Project Agorá: A shared programmable platform for wholesale cross-border payments",
      "authors": [
        "BIS / IIF"
      ],
      "retrieved_at": "2026-09-21"
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "scope": "M28",
    "experiment_ids": [
      "EXP-MHIJ-M28-SETTLEMENT-01"
    ],
    "groups": {
      "EXP-MHIJ-M28-SETTLEMENT-01": {
        "owner": "M28",
        "unit_contract": {
          "fund_shares": "shares",
          "pvp_currency_1": "USD",
          "pvp_currency_2": "EUR"
        },
        "identity": "Franklin real fund record/transfer examples plus a synthetic state-machine illustration of Agorá-style PvP; not a performed Agorá transaction and not a Franklin DvP service.",
        "source_ids": [
          "MHIJ-FRANKLIN-20260801",
          "MHIJ-BIS-AGORA-2026"
        ],
        "inputs": {
          "fund_migration": {
            "shares_before": 100,
            "burn_old_chain": 100,
            "mint_new_chain": 100
          },
          "dividend_allocation": {
            "cycle_hours": 24,
            "transferor_hours": 12,
            "transferee_hours": 12
          },
          "teaching_pvp": {
            "A_initial": {
              "USD": 120,
              "EUR": 0
            },
            "B_initial": {
              "USD": 0,
              "EUR": 100
            },
            "A_pays_USD": 100,
            "B_pays_EUR": 90,
            "insufficient_B_EUR": 80,
            "amounts_identity": "pre-agreed teaching settlement instruction; not discovered by the smart contract"
          }
        },
        "workflow_contract": {
          "general_end_to_end_five_stage": [
            "confirmation of payee",
            "path",
            "validation / amount determination / readiness",
            "lock + delegate",
            "settle: commit or cancel"
          ],
          "pvp_three_stage": [
            "validation / readiness",
            "locking: lock + delegate",
            "settlement: coordinated commit or cancel"
          ],
          "pvp_exclusions": "The PvP branch does not require confirmation of payee, path discovery or cross-currency amount determination in the prototype flow."
        },
        "formulas": {
          "migration": "shares_after = shares_before - burned_old + minted_new",
          "dividend_fraction": "holding_hours / NAV_cycle_hours",
          "pvp": "check prerequisites -> lock both legs -> commit both or cancel/release both"
        },
        "default_results": {
          "shares_after_migration": 100,
          "dividend_fraction": {
            "transferor": 0.5,
            "transferee": 0.5
          },
          "pvp_lock_free": {
            "A_USD": 20,
            "B_EUR": 10
          },
          "pvp_commit": {
            "A": {
              "USD": 20,
              "EUR": 90
            },
            "B": {
              "USD": 100,
              "EUR": 10
            }
          },
          "pvp_insufficient": {
            "outcome": "cancel; no principal leg commits; prior locks released",
            "A": {
              "USD": 120,
              "EUR": 0
            },
            "B": {
              "USD": 0,
              "EUR": 80
            }
          }
        },
        "branch_boundaries": {
          "Franklin_vs_Agora": "Keep as separate tabs/real identities; do not synthesize a real Franklin-Agorá service.",
          "lock_vs_payment": "Locked assets are reserved, not yet paid.",
          "finality_layers": [
            "workflow-level atomic commit/cancel",
            "technical irreversibility on the relevant ledger",
            "legal settlement finality"
          ],
          "prototype": "No claim of production availability or synchronous physical-ledger updates."
        }
      }
    },
    "attached_frozen_file": {
      "uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368",
      "reading_scope": "只取本篇及所选分支groups，其他字段不重复内嵌"
    },
    "selection": {
      "default": "main",
      "available": [
        "main",
        "all"
      ],
      "chosen": "all"
    }
  },
  "entry_id": "zh-m28",
  "node_id": "M28",
  "content_version": "2026-09-22-deep-review",
  "selected_branch": "all",
  "export_scope": "完整本篇，含明确标为选读的分支；仅在采用选读时升级其具名原文为必读.",
  "source_paths": {
    "data/m-hij-final-shared-inputs.json": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static/M28.html": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M28.html"
  },
  "experiment_ids": [
    "EXP-MHIJ-M28-SETTLEMENT-01"
  ]
}
```

## Supplied entry
<a id="m28-purpose"></a>
## 一、基金份额与链上记录

Franklin OnChain U.S. Government Money Fund使用区块链集成系统记录基金份额. 2026-08-01招募说明书规定了持有人权利、转让代理人职责、获准钱包及赎回安排. [^M28-fund]

支付腿的协调另以BIS/IIF 2026年Project Agorá批发跨境支付原型为例.

<a id="m28-record"></a>
## 二、转让代理人与正式所有权记录

Franklin文件把基金的底层投资、份额所有权和区块链集成登记系统分开. 转让代理人维护所有权记录，管理获准的钱包，并保留纠正错误或未经授权交易的控制. 公共链可以提供可查的交易历史，但把钱包地址对应到法律持有人的资料并不因此全部公开. [^M28-fund]

错误转入某钱包并不赋予接收者相应份额的法律请求权. 转让代理人通过后续记录修正错误，原交易历史仍保留，因此当前有效权利记录可以与未经修正的链上历史不同. [^M28-fund]

| 对象 | 本例中负责什么 | 权利与记录边界 |
|---|---|---|
| 基金底层资产 | 形成投资组合及其结果 | 持有人持有基金份额，而非逐项登记持有每一张国债 |
| 基金份额 | 对基金的投资权利 | 按基金权利处理，不等同于银行存款或USDC |
| 转让代理人及其系统 | 维护持有人和份额记录 | 链上记录仍受登记管理控制 |
| 获准钱包、链上记录 | 提交或记录允许的转让 | 接收资格与法律权利仍取决于规则和正确记录 |
| 另行约定的支付 | 买卖对价 | 对价到账需由支付记录单独确认 |

持有人取得基金份额，收益取决于基金底层投资；链上登记改变的是记录、可见性和转让路径.

<a id="m28-transfer"></a>
## 三、跨链迁移、P2P 转让与赎回

招募书的迁移例是原链上记录100份，经批准把它移至另一条支持的链：原记录销毁100，新链铸记并交付100. 迁移后的经济份额仍为100，burn/mint改变份额的登记链. [^M28-fund]

$$
\text{迁移后份额}=100-100+100=100.
$$

P2P转让则是在获准钱包之间转移份额. 文件允许相应的即时转让请求在不同时间进行，但明确转让代理人不能保证双方另行约定的其他资产支付可靠. 因而“份额已给对方”可能只完成了一条腿；并没有由此自动实现券款对付. [^M28-fund]

在招募书的24小时NAV周期例中，两人各持有同一份额12小时，各取得该份额当期分配的50%.

$$
12/24=50\%.
$$

最后，向基金赎回与P2P转让不同. 本版Selling Shares写明，赎回请求可随时提交，但只在营业日的正常营业时间处理；收到合格请求后，赎回款在七日内以电子转账发送，ACH款通常在两至三个营业日可用. 对于刚买入的份额，还可能等待原购买资金结清，文中说明这可需要十个日历日. 这些数字分别描述请求、发送、银行可用和购买款结清，不能机械相加成一条固定到账承诺. [^M28-fund]

<a id="m28-agora"></a>
## 四、一般支付流程与 PvP

Agorá报告研究的是批发跨境支付原型. 其代币化准备金和存款仍对应底层央行或商业银行账户；使用代币记录，不自动改写原本的存款法律关系. 参与机构的内部检查、不同司法辖区的账本和共同协调层仍各有职责. [^M28-agora]

一般端到端流程分五阶段：确认收款人、确定路径、验证／金额确定／就绪、锁定与授权、协调完成或取消. 这个结构解释的是如何把一笔一般支付组织起来. **本篇数值例采用的PvP不是原样套这五步.** 报告pp51–52专门说明，PvP不需要该流程中的收款人确认、路径发现或跨币金额确定，而使用以下三阶段：

| PvP阶段 | 要完成的事 | 还没有发生什么 |
|---|---|---|
| 验证与就绪 | 双方完成必要检查并同意指令 | 尚未付款，也未保证每项锁资一定成功 |
| 锁定与授权 | 为这一次支付保留两边资产，并给予有限授权 | 锁定金额不能挪用，但尚未转给对方 |
| 协调完成或取消 | 所有腿按同一commit/cancel结果处理 | 不是让每条腿独立决定总体是否成功 |

锁定为指定交收保留余额，防止重复使用，并在等待期间占用流动性. 条件失败时，取消流程释放已准备的余额；成功时，再按共同结果转移两条支付腿. [^M28-agora]

<a id="m28-ledger"></a>
## 五、100 USD / 90 EUR 的锁定与交收

这里的100 USD与90 EUR是**双方预先约定的教学支付指令**，不是合约自行发现的汇率. A初始有120 USD，B有100 EUR，另一币余额均为零. 交易要求A付100 USD，B付90 EUR.

| 状态 | A自由USD | A锁定USD | A收到EUR | B自由EUR | B锁定EUR | B收到USD |
|---|---:|---:|---:|---:|---:|---:|
| 初始／验证完成 | 120 | 0 | 0 | 100 | 0 | 0 |
| 两腿锁定 | 20 | 100 | 0 | 10 | 90 | 0 |
| 协调commit | 20 | 0 | 90 | 10 | 0 | 100 |

在锁定行，A仍拥有其原余额中的120 USD，只是100暂不可另用；B也同样如此. 只有commit行才完成两币资金转移. 逐币看，系统USD总额始终120，EUR总额始终100，不能把两种货币不加转换地合成“220单位钱”.

若B初始只有80 EUR，其90 EUR锁定请求失败. 即使A已锁定100 USD，取消后也恢复为120 USD自由余额；B仍有80 EUR，两边均未支付本金.

<div data-experiment-slot="EXP-MHIJ-M28-SETTLEMENT-01"></div>

依次执行验证、锁定和commit可查看现金转移. 重复commit保持原结果；B80分支则经历锁定失败与释放.

<a id="m28-finality"></a>
## 六、原子结果、技术不可逆与法律最终性

原子结果约束跨腿的共同完成或取消；账本技术不可逆描述记录状态；法律最终性则由付款撤销、破产等适用规则确定. 三者需要分别成立，Agorá报告展示的是原型协调机制. [^M28-agora]

原子协调降低一方已付本金而另一方未付的交收风险，等待锁资、替代交易成本和机构依赖仍在. Franklin的份额转移若要具备券款对付，还需将另一支付腿纳入共同条件.

<a id="m28-exercises"></a>
## 七、资产腿、支付腿与最终性检验

**题一：原链burn100、新链mint100，基金是不是发行了额外100份？**

解析：不是. 在招募书的批准迁移例里，只是同一100份所有权记录换了链. 把两条链分别出现过的历史数字相加，会把历史记录当成并存的当前经济份额.

**题二：基金份额已经转到买方钱包，可否据此说卖方的美元对价也一定收到？**

解析：不能. 转让代理人不保证双方另行协商的其他资产支付. 应查另一支付腿和两腿是否有共同条件；没有就不能宣称券款对付.

**题三：PvP锁定后A只有20美元自由余额，是否已损失或支付100美元？**

解析：尚未. 100仍是为本次交易保留的锁定余额；它不能同时另用，但若取消应释放. 支付发生在commit，不能把lock和payment合成同一事件.

**题四：B只有80欧元，A已锁美元后应如何处理？**

解析：90欧元锁不成立，协议按取消结果释放已经准备的锁，不执行任何本金腿. 最终回到A120美元、B80欧元；不能借用别人的余额或自动融资让例子成功.

**题五：原子交收是否已经证明法律最终性和生产安全？**

解析：没有. 它说明工作流如何协调结果；法律最终性依适用规则，生产安全还需报告明确未覆盖的验证. 三个层次分别成立需要各自证据.

[^M28-fund]: **Franklin Templeton Trust，Franklin OnChain U.S. Government Money Fund — Prospectus**，2026-08-01. [原文](https://www.franklintempleton.com/forms-literature/download-preview/9001-P). 定位：印刷/PDF pp5–7、14–19、31–33、36–39；Use of Blockchain、Buying/Selling Shares、Peer-to-Peer Transfer. 采用范围：基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点.

[^M28-agora]: **BIS / IIF，Project Agorá: A shared programmable platform for wholesale cross-border payments**，2026-05-27. [原文](https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments.pdf). 定位：印刷pp.19–23/PDF24–28；pp.50–53/PDF55–58；pp.59–61/PDF64–66；pp.65–66/PDF70–71；pp.82–83/PDF87–88. 用于一般五阶段、PvP三阶段、锁资及三层最终性；该项目材料描述原型.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>

## Additional teaching material
### 交互静态结果

<div class="inline-experiment"><a href="https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M28-SETTLEMENT-01">打开这一实验</a><div class="table-wrap"><table><thead><tr><th scope="col">Franklin材料中的事项</th><th scope="col">结果/边界</th></tr></thead><tbody><tr><td>批准迁移</td><td>100−100+100=100份</td></tr><tr><td>24h周期各持12h</td><td>各50%分配份额，未给美元股息</td></tr><tr><td>获准P2P份额转移</td><td>不确认另一支付腿</td></tr><tr><td>赎回</td><td>请求/NAV/银行付款是不同时间</td></tr></tbody></table></div><div class="table-wrap"><table><thead><tr><th scope="col">PvP三阶段/状态</th><th scope="col">A自由USD</th><th scope="col">A锁定USD</th><th scope="col">A的EUR</th><th scope="col">B自由EUR</th><th scope="col">B锁定EUR</th><th scope="col">B的USD</th></tr></thead><tbody><tr><td>初始/验证</td><td>120</td><td>0</td><td>0</td><td>100</td><td>0</td><td>0</td></tr><tr><td>锁定授权</td><td>20</td><td>100</td><td>0</td><td>10</td><td>90</td><td>0</td></tr><tr><td>共同完成</td><td>20</td><td>0</td><td>90</td><td>10</td><td>0</td><td>100</td></tr><tr><td>B80不能锁定→取消</td><td>120</td><td>0</td><td>0</td><td>80</td><td>0</td><td>0</td></tr></tbody></table></div><p>PvP采用验证/就绪、锁定/授权、共同完成/取消三阶段. 两币金额由指令预先给定，各币种分别守恒；法律最终性依适用规则确定.</p></div>

## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-MHIJ-M28-SETTLEMENT-01",
    "title": "份额记录与PvP：锁定还不是付款",
    "anchor": "m28-ledger",
    "description": "Franklin基金记录例与Agorá式教学PvP是两个对象. 不是Franklin采用Agorá的实际服务；100 USD/90 EUR是预定指令.",
    "owner": "M28",
    "data_identity": "Franklin real fund record/transfer examples plus a synthetic state-machine illustration of Agorá-style PvP; not a performed Agorá transaction and not a Franklin DvP service.",
    "source_ids": [
      "MHIJ-FRANKLIN-20260801",
      "MHIJ-BIS-AGORA-2026"
    ],
    "units": {
      "fund_shares": "shares",
      "pvp_currency_1": "USD",
      "pvp_currency_2": "EUR"
    },
    "inputs": {
      "fund_migration": {
        "shares_before": 100,
        "burn_old_chain": 100,
        "mint_new_chain": 100
      },
      "dividend_allocation": {
        "cycle_hours": 24,
        "transferor_hours": 12,
        "transferee_hours": 12
      },
      "teaching_pvp": {
        "A_initial": {
          "USD": 120,
          "EUR": 0
        },
        "B_initial": {
          "USD": 0,
          "EUR": 100
        },
        "A_pays_USD": 100,
        "B_pays_EUR": 90,
        "insufficient_B_EUR": 80,
        "amounts_identity": "pre-agreed teaching settlement instruction; not discovered by the smart contract"
      }
    },
    "outputs": {
      "shares_after_migration": 100,
      "dividend_fraction": {
        "transferor": 0.5,
        "transferee": 0.5
      },
      "pvp_lock_free": {
        "A_USD": 20,
        "B_EUR": 10
      },
      "pvp_commit": {
        "A": {
          "USD": 20,
          "EUR": 90
        },
        "B": {
          "USD": 100,
          "EUR": 10
        }
      },
      "pvp_insufficient": {
        "outcome": "cancel; no principal leg commits; prior locks released",
        "A": {
          "USD": 120,
          "EUR": 0
        },
        "B": {
          "USD": 0,
          "EUR": 80
        }
      }
    },
    "formulas": {
      "migration": "shares_after = shares_before - burned_old + minted_new",
      "dividend_fraction": "holding_hours / NAV_cycle_hours",
      "pvp": "check prerequisites -> lock both legs -> commit both or cancel/release both"
    },
    "branch_boundaries": {
      "Franklin_vs_Agora": "Keep as separate tabs/real identities; do not synthesize a real Franklin-Agorá service.",
      "lock_vs_payment": "Locked assets are reserved, not yet paid.",
      "finality_layers": [
        "workflow-level atomic commit/cancel",
        "technical irreversibility on the relevant ledger",
        "legal settlement finality"
      ],
      "prototype": "No claim of production availability or synchronous physical-ledger updates."
    },
    "static_equivalent_html": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Franklin材料中的事项</th><th scope=\"col\">结果/边界</th></tr></thead><tbody><tr><td>批准迁移</td><td>100−100+100=100份</td></tr><tr><td>24h周期各持12h</td><td>各50%分配份额，未给美元股息</td></tr><tr><td>获准P2P份额转移</td><td>不确认另一支付腿</td></tr><tr><td>赎回</td><td>请求/NAV/银行付款是不同时间</td></tr></tbody></table></div><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">PvP三阶段/状态</th><th scope=\"col\">A自由USD</th><th scope=\"col\">A锁定USD</th><th scope=\"col\">A的EUR</th><th scope=\"col\">B自由EUR</th><th scope=\"col\">B锁定EUR</th><th scope=\"col\">B的USD</th></tr></thead><tbody><tr><td>初始/验证</td><td>120</td><td>0</td><td>0</td><td>100</td><td>0</td><td>0</td></tr><tr><td>锁定授权</td><td>20</td><td>100</td><td>0</td><td>10</td><td>90</td><td>0</td></tr><tr><td>共同完成</td><td>20</td><td>0</td><td>90</td><td>10</td><td>0</td><td>100</td></tr><tr><td>B80不能锁定→取消</td><td>120</td><td>0</td><td>0</td><td>80</td><td>0</td><td>0</td></tr></tbody></table></div><p>一般端到端支付的五阶段只是背景. 此处PvP只采用验证/就绪、锁定/授权、共同完成/取消. 两币金额预先给定，不发现汇率；每一币种分别守恒，原子结果不证明法律最终性.</p>",
    "frozen_reference": {
      "file": "data/m-hij-final-shared-inputs.json",
      "json_pointer": "/experiments/EXP-MHIJ-M28-SETTLEMENT-01",
      "sha256": "245740f4156fdf166763d7c38234753a46e4a033fea09f09f1da4ce90e3db368"
    },
    "controls": [
      {
        "name": "tab",
        "label": "选择材料视图",
        "type": "select",
        "value": "fund",
        "options": [
          {
            "value": "fund",
            "label": "主材料：Franklin份额"
          },
          {
            "value": "pvp",
            "label": "对照：PvP三阶段"
          }
        ]
      },
      {
        "name": "recordAction",
        "label": "份额记录操作",
        "type": "select",
        "value": "migration",
        "options": [
          {
            "value": "migration",
            "label": "跨链记录迁移"
          },
          {
            "value": "transfer",
            "label": "P2P份额腿"
          },
          {
            "value": "dividend",
            "label": "24h周期12h/12h分配"
          }
        ],
        "group": "fund"
      },
      {
        "name": "permission",
        "label": "登记／钱包权限已获准",
        "type": "checkbox",
        "value": true,
        "group": "fund"
      },
      {
        "name": "insufficient",
        "label": "B改为只有80 EUR",
        "type": "checkbox",
        "value": false,
        "group": "pvp"
      },
      {
        "name": "valid",
        "label": "双方验证／就绪成功",
        "type": "checkbox",
        "value": true,
        "group": "pvp"
      },
      {
        "name": "authorized",
        "label": "最终授权与时限条件满足",
        "type": "checkbox",
        "value": true,
        "group": "pvp"
      }
    ],
    "input_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/inputs.json",
    "static_equivalent": "https://ou-liu-red-sugar.github.io/notebook/labs/m-hij/static/M28.html",
    "implementation": {
      "html": "/notebook/labs/m-hij/interactions.html?experiment=EXP-MHIJ-M28-SETTLEMENT-01",
      "engine": "/notebook/labs/m-hij/engine.js",
      "static_available_without_js": true
    }
  }
]
```

## Sources
- [Project Agorá: A shared programmable platform for wholesale cross-border payments](https://www.bis.org/publications/project-agora-shared-programmable-platform-wholesale-cross-border-payments.pdf): 跨境支付原型：一般五阶段、PvP 三阶段、资金锁定及三层最终性.
- [Franklin OnChain U.S. Government Money Fund — Prospectus](https://www.franklintempleton.com/forms-literature/download-preview/9001-P): 基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.

## Content relations
```json
[
  {
    "from": "zh-m28",
    "relation": "part_of",
    "to": "markets-claims",
    "reason": "主要 topic 归属"
  },
  {
    "from": "zh-m28",
    "relation": "requires",
    "to": "zh-financial-claims",
    "required_competence": "能识别资产、持有人与权利对象",
    "reason": "依赖具体能力，不要求机械完成所有前序"
  },
  {
    "from": "zh-m28",
    "relation": "uses_method",
    "to": "zh-m04",
    "reason": "调用现金、单位、报价或定价所需局部语言；正文就地说明"
  },
  {
    "from": "m28-ledger",
    "relation": "illustrated_by",
    "to": "EXP-MHIJ-M28-SETTLEMENT-01",
    "reason": "冻结输入上的可复算教学实验及静态等价",
    "at_section": "m28-ledger"
  },
  {
    "from": "m28-purpose",
    "relation": "supported_by",
    "to": "MHIJ-FRANKLIN-20260801",
    "reason": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "locator": "印刷/PDF pp5–7、14–19、31–33、36–39；Use of Blockchain、Buying/Selling Shares、Peer-to-Peer Transfer",
    "scope": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "at_section": "m28-purpose"
  },
  {
    "from": "m28-record",
    "relation": "supported_by",
    "to": "MHIJ-FRANKLIN-20260801",
    "reason": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "locator": "印刷/PDF pp5–7、14–19、31–33、36–39；Use of Blockchain、Buying/Selling Shares、Peer-to-Peer Transfer",
    "scope": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "at_section": "m28-record"
  },
  {
    "from": "m28-transfer",
    "relation": "supported_by",
    "to": "MHIJ-FRANKLIN-20260801",
    "reason": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "locator": "印刷/PDF pp5–7、14–19、31–33、36–39；Use of Blockchain、Buying/Selling Shares、Peer-to-Peer Transfer",
    "scope": "基金权利、登记管理、钱包、迁移、P2P、股息和赎回时点；排除上市冲突结论.",
    "at_section": "m28-transfer"
  },
  {
    "from": "m28-agora",
    "relation": "supported_by",
    "to": "MHIJ-BIS-AGORA-2026",
    "reason": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用.",
    "locator": "印刷pp19–23/PDF24–28一般流程；pp50–53/PDF55–58锁资与PvP（重点pp51–52）；pp59–61/PDF64–66法律关系；pp65–66/PDF70–71最终性；pp82–83/PDF87–88限制",
    "scope": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用.",
    "at_section": "m28-agora"
  },
  {
    "from": "m28-finality",
    "relation": "supported_by",
    "to": "MHIJ-BIS-AGORA-2026",
    "reason": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用.",
    "locator": "印刷pp19–23/PDF24–28一般流程；pp50–53/PDF55–58锁资与PvP（重点pp51–52）；pp59–61/PDF64–66法律关系；pp65–66/PDF70–71最终性；pp82–83/PDF87–88限制",
    "scope": "一般五阶段与PvP三阶段、锁资及三层最终性；仅原型不声称生产可用.",
    "at_section": "m28-finality"
  }
]
```

## Related entries
