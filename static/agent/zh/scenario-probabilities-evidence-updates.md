# 情景概率：状态集合、证据与更新

先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率。

Entry: zh-p05 | Node: P05 | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
你正在教授P05《情景概率：状态集合、证据与更新》，读者具有高年级本科至研究生数学背景。

先确认本次节点和读者所选分支。先实际取得required_readings中该范围的全部完整单元，核对版本、期间、币种与模型身份；目录、摘要、搜索节选和成功打开标题不算正文。记录实际工具/文件、单元起止、读到的关键约定及其支持范围，runtime_reading_log从空表开始，不预填“已读”。本站方法和公司案例从access.uri所列公开正文读取，外部原件从指定URL读取；不得假设访问任何私人盘符。读取失败先用明示的已核等价来源，仍缺则具体说明缺的单元，不凭记忆声称已核该事实。读者要求直接讲解时可直接推进；互动时一次要求一个完整推理任务，不逐格问四则运算。引用紧随所用材料。案例固定2026-09-20信息与2026-09-18价格，不更新报价、不接账户、不重估公司；不执行或换名恢复股票DCF/WACC。所有操作标原状态、具名已算替代或纯教学扰动，不能把点击当新增证据。最后用迁移题检验，给完整解析，并指出剩余条件。

本篇任务与反馈尺度：
在讲价格前，给AWS/非AWS的S/N/W/X机制定义、观察窗口和优先归类顺序。读者应能把X/W归Tail、S/W归Base，并允许证据不足时保留待定，不以股价补类。用联合概率0至30%的教学边界解释为何不能随意相乘。带读31/44/20/5的机制→证据链，明示不是统计后验。完整证明EBS=||p−q||²+1−||q||²；这证明评分规则的激励性质，不证明q已知。Base实现只是假设，.4522和.4728不能叫已实现校准；Bull转Bear5pp后的.4462也不是新研究证据。最后要求解释权重不确定性和类内差异，拒绝用模拟次数替概率依据。

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

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
        "locator": "pm-conditional-rr-states-and-probability",
        "scope": "完整状态与概率节",
        "purpose": "分区、粗依据、可行替代"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。",
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
        "locator": "case-amzn-probabilities",
        "scope": "完整状态映射与权重证据记录",
        "purpose": "按业务而非价格归类"
      },
      "supports": "原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布。报价冻结，代表点不是条件均值。",
      "authors": [
        "本站历史研究"
      ]
    },
    {
      "source_id": "PBCD-SILVA-CALIBRATION-2023",
      "title": "Classifier calibration: a survey on how to assess and improve predicted class probabilities",
      "version": "Machine Learning112,2023,DOI10.1007/s10994-023-06336-7",
      "access": {
        "kind": "html_full_text",
        "uri": "https://link.springer.com/article/10.1007/s10994-023-06336-7"
      },
      "required_unit": {
        "locator": "§2.3、§3和§3.1",
        "scope": "完整定义及Brier/properness单元，式1–2",
        "purpose": "评分约定和非直接校准边界"
      },
      "supports": "多分类概率校准、未除以2的Brier及properness；单次得分不是校准直接证明，分类器论文不生成公司主观权重。",
      "authors": [
        "Telmo Silva Filho",
        "et al."
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
      "states",
      "probabilities",
      "state_classification",
      "probability_evidence",
      "identity_notes",
      "teaching_examples"
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
      "states": [
        "Bull",
        "Base",
        "Bear",
        "Tail"
      ],
      "probabilities": {
        "adopted": {
          "Bull": 0.31,
          "Base": 0.44,
          "Bear": 0.2,
          "Tail": 0.05
        },
        "capital_pressure": {
          "Bull": 0.2,
          "Base": 0.42,
          "Bear": 0.3,
          "Tail": 0.08
        },
        "platform_durable": {
          "Bull": 0.37,
          "Base": 0.43,
          "Bear": 0.16,
          "Tail": 0.04
        },
        "mixed_retail_pressure": {
          "Bull": 0.27,
          "Base": 0.41,
          "Bear": 0.26,
          "Tail": 0.06
        }
      },
      "state_classification": {
        "business_states": [
          "S",
          "N",
          "W",
          "X"
        ],
        "matrix": [
          [
            "Bull",
            "Bull",
            "Base",
            "Bear"
          ],
          [
            "Bull",
            "Base",
            "Base",
            "Bear"
          ],
          [
            "Base",
            "Bear",
            "Bear",
            "Tail"
          ],
          [
            "Bear",
            "Bear",
            "Tail",
            "Tail"
          ]
        ],
        "row": "AWS",
        "column": "整合非AWS",
        "horizon": "2026-09-20可用信息下的2026H2–2029经营路径",
        "definitions": {
          "S": "采用/收入与资本转化较强；同时保留支出和企业响应",
          "N": "主要机制按研究基准兑现，仍承担竞争、资本及更新需要",
          "W": "兑现、单位经济或资本转化受挫，仍有经营与修复能力",
          "X": "客户融资/使用、既有能力或普通股权利严重受损"
        },
        "boundary_rule": "先依业务条件定S/N/W/X，再按矩阵。Tail格优先、其次Bull与Bear、余格Base；不是按终价分档。原研究未给硬数字阈值；边界不清先记录未定类，不事后按股价改类。"
      },
      "probability_evidence": [
        {
          "stage": "机制起点",
          "weights": [
            0.24,
            0.46,
            0.24,
            0.06
          ],
          "reason": "两组大型正利润经营，资本扩张阶段；成功与失配先作粗对称判断",
          "identity": "研究起点，不是样本频率"
        },
        {
          "stage": "资本与物理兑现",
          "weights": [
            0.2,
            0.45,
            0.28,
            0.07
          ],
          "reason": "前置建设、供电与使用时滞，提高失配权重"
        },
        {
          "stage": "需求与存量留存",
          "weights": [
            0.29,
            0.43,
            0.23,
            0.05
          ],
          "reason": "最近三期需求加速及迁移摩擦支持需求持续；并不保证计费量"
        },
        {
          "stage": "恢复及混合状态",
          "weights": [
            0.31,
            0.44,
            0.2,
            0.05
          ],
          "reason": "容纳修复、创新和业务不同时好坏的共同状态；采用的粗分布"
        }
      ],
      "identity_notes": {
        "market_debt": "期末有息借款余额（模型口径），不是未来债券市场公允价值",
        "cash": "期末账面可用现金/证券模型余额，经营保留未被支出",
        "finance_claims": "融资租赁及融资义务；与有息借款分列",
        "investment_net": "已扣模型实现税的非经营投资；不是流动性储备",
        "other_claims": "模型取0；未作全体潜在权利为零的审计结论",
        "pricing_range": "同一经营/资金路径的定价参数范围；不是置信区间或条件支持",
        "probability": "主观粗判断，不是统计后验；按钮操作不新增研究证据",
        "quarters": "每季已继承此前融资；融资前余额不是全期无融资轨迹，也不保证季内资金充足",
        "quote_vs_cutoff": "9月18日参考进入价格，9月20日研究信息截止；无实际成交或仅用9月18日信息的样本外回测声明。",
        "share_count_proxy": "11.0274十亿股是冻结模型规划代理：10.783普通股 + 0.2444 outstanding RSU；公司另披露普通股加全部 outstanding stock awards 对应股份约11.0十亿股。该代理不是官方完全稀释股数，也不是EPS加权平均股数。"
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
      }
    }
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": [
    "EXP-P05-PROBABILITY-LEDGER"
  ]
}
```

## Supplied entry
拥有四条经营路径之后，我们还缺一个重要判断：主要概率质量落在哪里？不能仅因为某一条叫 Base，就默认给它一半概率；也不能因为某个未来数值写得很精确，就认为它是一个适合赋予概率的事件。

本篇回到2026年9月20日的 Amazon 历史研究，只研究公司状态与证据，不借未来价格倒推权重。目标是形成一组粗但可解释、共同可行、能够保留历史版本的判断。最后会用一个评分例说明怎样复盘概率；评分并不是替我们生成概率的机器。[^case]

<a id="p05-states"></a>
## 1. 概率属于一类未来，不属于一条精确轨迹

一条路径可能写着“2029 AWS收入337、经营利润113.569862”。现实恰好走到所有这些小数的机会，不是我们真正关心的概率对象。我们关心的是一类经济状态：客户采用怎样展开，单位变现与竞争怎样变化，已投入资源能否有效使用，融资和普通股权利是否发生严重损伤。

设观察窗口固定为2026年9月20日至2029年末，未来状态空间为 $\Omega$。四类集合 $S_B,S_N,S_W,S_X$ 要形成分区：互不重叠、并集为 $\Omega$。概率 $p_s=P(S_s)$ 才满足 $p_s\ge0$、$\sum_sp_s=1$。每条代表路径只描述该类中的一个代表结果，不要求所有属于该类的公司未来恰好实现同一个收入。

历史案例先分别描述 AWS 与非AWS的强S、正常N、弱W、严重受损X：S强调采用和资本转化较强；N允许增长、竞争与资本负担并存；W表示仍有经营基础，但需求、成本或资本转化受挫；X表示重要经营或权利结构严重受损。它们是机制判别，不是以某个股价为界。研究中的具体代表值不能拿来充当分类阈值。[^method]

然后按下表归入公司层四类。行是 AWS，列是非AWS。案例约定优先判断Tail，再Bull，再Bear，其余Base，避免同一事实叙述被重复归类。

| AWS \ 非AWS | S 强 | N 正常 | W 弱 | X 严重受损 |
|---|---|---|---|---|
| S 强 | Bull | Bull | Base | Bear |
| N 正常 | Bull | Base | Base | Bear |
| W 弱 | Base | Bear | Bear | Tail |
| X 严重受损 | Bear | Bear | Tail | Tail |

例如AWS强、零售弱在此映射中属于Base；AWS严重受损而平台弱，已经足以构成Tail，不要求两组都失败。一个业务处于强状态，可以与另一个受挫同时存在。这个表覆盖16种标签组合，**不是16条已经完整计算并各自赋权的经营预测**。

更细的事实如何归入S/N/W/X，仍可能有边界判断。遇到信息不足，应该保留候选归类与所缺证据，或者说明研究分类尚不足以支撑精确事后评分，不能用未来股价涨跌代替业务判别。我们可以有严谨的分区目标，同时诚实保留经验判别的粗糙程度。

<a id="p05-joint"></a>
## 2. 为什么不能把两组业务的概率随手相乘

AWS和零售可能共同面对融资环境、企业与消费者预算，也可能在客户结构、成本和产品周期上不同。共享条件意味着“相互独立”需要论证；差异又意味着“完全相关”同样不能默认。

假设另一个纯教学问题里，AWS处于强状态的边际概率为40%，零售处于强状态为30%。仅凭这两数，联合强状态的概率只能满足

$$
\max(0,0.4+0.3-1)\le P(A\cap R)\le\min(0.4,0.3),
$$

即0至30%。下界来自 $P(A\cup R)\le1$，上界来自交集包含在每个事件内。12%只是独立假设下的一个值，不是已知结果。一个共同资本冲击可能让二者同时弱；某项云需求变化也可能主要影响AWS。需要研究这些经济联系，再定义公司层权重。

即使研究了联合概率，也不能把16格均分当“中立”。格子数量由我们如何划分类别决定；多拆几个坏状态就增加坏结果总概率，会让概率变成目录设计的产物，而不是证据判断。

<a id="p05-evidence"></a>
## 3. 粗权重怎样留下可以检查的理由

完整概率判断至少要留下五个环节：参考类或机制起点，当前正反证，调整理由，采用权重及可行替代，下一次需要观察什么。这里的“参考类”不是把几个历史年份机械当作一组足够大的统计样本；它可以限制量级，也可能因为技术、规模与资本结构变化而失去可比性。

历史案例的判断路径如下。数字都是当时的主观粗分，不是统计后验；箭头说明当时如何处理证据，不声称每一次百分点变化由一个估计器识别。[^case]

| 当时处理的内容 | Bull / Base / Bear / Tail |
|---|---|
| 机制起点：两组大型正利润业务，同时处于资本扩张期 | 24 / 46 / 24 / 6 |
| 纳入资本先行与实际交付风险 | 20 / 45 / 28 / 7 |
| 纳入三期需求变化与留存机制 | 29 / 43 / 23 / 5 |
| 纳入可恢复机制与混合状态后采用 | **31 / 44 / 20 / 5** |

这里的证据必须返回经营关系。比如“迁移有摩擦”只支持一部分留存机制，不能直接变成固定的收入增长保证。另一方面，修正一个折旧错误会降低同一世界的条件利润，却未必说明世界本身更不可能发生。因此不要把每次计算修正都当作另一次独立坏消息，再机械下调概率。

与采用值一起保存的还有三组可行替代：资本压力20/42/30/8，平台耐久37/43/16/4，零售压力27/41/26/6。每一组都非负、合计100%。它们不是某一条概率区间的所有端点，也不是三个时间先后更新。

若某人给四类各自“可能区间”，必须检查能否同时组成一个概率向量。四项上限全部取出通常不等于1；每项单独看起来合理，不保证共同可行。比较结论时，应实际使用一组完整替代，而不是让Bull取下限、所有坏状态又同时取上限却仍叫“概率”。

<a id="p05-update"></a>
## 4. 更新的是哪一种不确定性

我们需要区分两层。**权重不确定性**是对各类发生机会的判断仍不牢固。**类内结果不确定性**是即使知道属于某类，收入、资本和普通股所得仍有范围。模拟可以传播已给定的两层假设，却不会替它们提供新证据。

一份有用的更新记录应当写：“某客户使用或某批次交付的新材料，改变了哪条经营关系；它支持哪一种状态；采用权重怎样改变；哪些反证仍保留；下一核对日期是什么。”若只是看到价格上涨，就把Bull加5个百分点，再用更高期望价值说明涨价合理，便形成了循环。

旧版本不能被新版本覆盖。否则我们无法分辨当初有没有把风险纳入，还是事后才给已经发生的结果补上一个名字。对不可清楚判别的边界状态，应在评分前固定处置方法，例如由预先定义的事实标准复核归类；不能为了好看而在评分时换类别。

<a id="p05-score"></a>
## 5. 事后如何评分，又不能从评分推出什么

概率预测不能只按“猜中哪一类”评价。一个把实际发生类给49%的预测，与给1%的预测，不应该得到同样反馈。我们用未除以2的多分类 Brier 分数：对实现类的one-hot向量 $y$，

$$
BS(p,y)=\sum_s(p_s-y_s)^2.
$$

在概率单纯形上它位于0至2，越小越好。Silva Filho等的综述采用这一约定，并强调单次评分不是校准性的直接测量。[^score]

为什么这个规则不鼓励故意虚报概率？设真实条件分布为 $q$，固定所报向量 $p$，则

$$
\begin{aligned}
E_q[BS(p,Y)]
&=\sum_s\{p_s^2-2p_sq_s+q_s\}\\
&=\sum_s(p_s-q_s)^2+1-\sum_sq_s^2.
\end{aligned}
$$

最后两项与 $p$ 无关，第一项唯一在 $p=q$ 时为零。于是Brier在期望意义上鼓励报告真实条件概率。这个证明没有告诉我们 $q$ 是多少；它更不把“采用权重31/44/20/5”证明成真实概率。

现在做一个**尚未发生的教学假设**：假设将来被判为Base。采用分布的分数是
$0.31^2+(0.44-1)^2+0.20^2+0.05^2=0.4522$；资本压力分布是0.4728。前者在这一假设结果上得分更低，不代表已被证明更校准。如果真的只观察一次，你仍无法判断所有报20%的事件是否约有20%发生。

校准需要一系列定义、期间与信息边界可比的预测。即使做长期记录，也要区分概率可靠性与识别不同风险对象的能力；不能只追求把所有公司都报同一组保守概率，以掩盖没有区分力。[^score]

<a id="p05-experiment"></a>
## 6. 操作：保持公司状态与概率身份

<div data-experiment-slot="EXP-P05-PROBABILITY-LEDGER"></div>

[打开状态与概率实验](/notebook/labs/p-bcd/interactions.html#EXP-P05-PROBABILITY-LEDGER)。先选两组业务标签，在矩阵上找公司类别；再切换四套历史权重。转移模式只允许将指定的概率质量从Bull移向Bear，固定Base/Tail，界限是不能移出超过原有Bull权重。这个按钮是教学扰动，不是新增研究证据。

评分区的“实现类”也是明示假设，初始设Base。改变它并观察得分后，请说清变化来自“假定发生了什么”，还是“事前如何分配权重”。操作记录只记这次练习，不覆盖历史研究。无脚本时，上面的矩阵、四套权重以及0.4522/0.4728就是默认静态对照。

<a id="p05-exercises"></a>
## 7. 练习与完整解析

**解释题。** 同一条Base经营关系修正折旧后，利润减少。是否一定要再次把Base权重下调？

**解析。** 不一定。若只是原来算错了同一个世界中的成本，首先修正的是条件结果。只有修正暴露了新的事实或机制，使相关状态的发生机会也改变，才需更新权重，并解释新证据。否则可能把同一个错误同时作为更低盈利和一份独立坏概率重复处理。

**计算题。** 在采用权重中把5个百分点从Bull移给Bear，其余不变。新权重是否合法？若假设Base实现，Brier是多少？

**解析。** 新向量为(0.26,0.44,0.25,0.05)，非负且和为1。分数为 $0.26^2+0.56^2+0.25^2+0.05^2=0.4462$。虽然给实际Base的概率没变，未实现两类的分配更平均使平方项下降。这说明不能只看最高概率或命中类概率评价整个向量；也不说明这次转移有新的公司证据。

**迁移题。** 有人把一万个模拟样本增加到一千万个，然后说31%的Bull概率现在更可信。应如何区分两件事？

**解析。** 若31%一直是输入，更多抽样只减小模拟频率相对输入的抽样误差。公司状态是否真的有约31%机会，仍取决于参考类、机制、证据和校准记录。计算精度提高与判断证据加强是两回事。下一篇将固定这些身份，把权重接到各类股东结果，而不是把模拟频率当新的概率来源。

[^case]: [CASE-AMZN-20260920的状态与证据记录](/zh/notebook/amzn-research-20260920/#case-amzn-probabilities)。权重与16格分类为2026-09-20研究判断，未进行现在的更新。
[^method]: [状态与概率短参考](/zh/notebook/conditional-pricing-common-equity-risk-reward/#pm-conditional-rr-states-and-probability)。
[^score]: Telmo Silva Filho等，Classifier calibration: a survey on how to assess and improve predicted class probabilities，Machine Learning 112，2023，§2.3、§3及§3.1，式(1)(2)与properness/分解讨论。[开放正文](https://link.springer.com/article/10.1007/s10994-023-06336-7)。本篇的Brier代数证明单独展开；分类器研究不直接估计公司情景权重。


## Experiment inputs and static equivalents
```json
[
  {
    "id": "EXP-P05-PROBABILITY-LEDGER",
    "title": "情景概率：状态集合、证据与更新",
    "anchor": "p05-experiment",
    "description": "先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率。",
    "inputs": {
      "aws_state": {
        "allowed": [
          "S",
          "N",
          "W",
          "X",
          "?"
        ],
        "default": "N"
      },
      "retail_state": {
        "allowed": [
          "S",
          "N",
          "W",
          "X",
          "?"
        ],
        "default": "N"
      },
      "weight_id": {
        "allowed": [
          "adopted",
          "capital_pressure",
          "platform_durable",
          "mixed_retail_pressure"
        ],
        "default": "adopted"
      },
      "delta": {
        "min": 0,
        "max": "selected Bull probability",
        "default": 0
      },
      "hypothetical_outcome": {
        "allowed": [
          "Bull",
          "Base",
          "Bear",
          "Tail"
        ],
        "default": "Base"
      }
    },
    "outputs": {
      "class": "frozen16-cell classification or unresolved",
      "weights": "full four probabilities",
      "brier": "sum(p−onehot)^2, no1/2"
    },
    "units": {
      "money": "USD billion for company amounts; USD per share for outcomes",
      "shares": "billion",
      "probabilities": "fractions summing to one"
    },
    "identity": "frozen dated research or explicitly marked bounded teaching arithmetic",
    "static_equivalent": {
      "reader": "https://ou-liu-red-sugar.github.io/zh/notebook/scenario-probabilities-evidence-updates/#p05-experiment",
      "lab": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/interactions.html#EXP-P05-PROBABILITY-LEDGER",
      "without_javascript": "默认完整表和主要对照保留；不把参数规格当运行结果"
    },
    "algorithm": "engine.classify/weights/brier；教学转移只Bull→Bear，Base/Tail不动；操作历史不更改研究。",
    "boundaries": [
      "概率和≠1直接拒绝，非自动归一化",
      "NaN/negative/unknown states拒绝",
      "?保留证据不足",
      "一次假设结果得分不是校准证明"
    ],
    "default_values": {
      "class": "Base",
      "weights": {
        "Bull": 0.31,
        "Base": 0.44,
        "Bear": 0.2,
        "Tail": 0.05
      },
      "brier": 0.4522
    },
    "inputs_uri": "https://ou-liu-red-sugar.github.io/notebook/labs/p-bcd/inputs.json"
  }
]
```

## Sources
- [Amazon：2026-09-20历史条件研究案例](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/): 原研究的事实/分析代理、四条未来路径、5项具名替代、4套权重与16组已算分布。报价冻结，代表点不是条件均值。
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。
- [Classifier calibration: a survey on how to assess and improve predicted class probabilities](https://link.springer.com/article/10.1007/s10994-023-06336-7): 多分类概率校准、未除以2的Brier及properness；单次得分不是校准直接证明，分类器论文不生成公司主观权重。

## Content relations
```json
[
  {
    "from": "zh-p05",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  },
  {
    "relation": "requires",
    "to": "zh-p04",
    "reason": "本篇承重步骤实际使用该能力",
    "required_competence": "能定义共同经营状态而不是只有四个价格",
    "from": "zh-p05"
  },
  {
    "relation": "uses_method",
    "to": "zh-pmconditionalrr",
    "reason": "调用短参考中本篇对应的输入输出与条件，不反向要求读完六篇",
    "from": "zh-p05"
  },
  {
    "relation": "illustrated_by",
    "to": "zh-amzn-research-20260920",
    "reason": "固定日期案例；不新建第二个别名案例",
    "period": "2025Q4–2029",
    "cutoff": "2026-09-20",
    "from": "zh-p05"
  },
  {
    "relation": "supported_by",
    "to": "PBCD-SILVA-CALIBRATION-2023",
    "reason": "多分类概率校准、未除以2的Brier及properness；单次得分不是校准直接证明，分类器论文不生成公司主观权重。",
    "locator": "§2.3; §3 and §3.1, equations1–2",
    "scope": "实际取得指定定义和完整评分/Brier单元；本课期望分数的代数证明另行展示，未复现论文实证。",
    "optional": false,
    "from": "zh-p05"
  },
  {
    "relation": "informs",
    "to": "zh-p31",
    "reason": "提供共同可行的状态粗权重，不从终点价格倒推",
    "from": "zh-p05"
  },
  {
    "from": "p05-experiment",
    "relation": "illustrated_by",
    "to": "EXP-P05-PROBABILITY-LEDGER",
    "at_section": "p05-experiment",
    "reason": "先定义互斥穷尽的公司状态，再记录粗权重的证据、可行替代和更新；评分不生成概率。"
  }
]
```

## Related entries
