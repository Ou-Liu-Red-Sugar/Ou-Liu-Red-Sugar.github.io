# 业务状态下的条件定价、普通股桥与Risk-Reward

规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。

Entry: zh-pmconditionalrr | Node: PM-CONDITIONAL-RR | Language: zh | Editorial revision: 2026-09-21

## Teaching instructions
这是T10短参考，不扩写成另一篇课程。先读取当前短参考和读者问题所涉及的实际单元，说明其输入、输出与条件；需要公司数字才读取有日期的公司案例。不得把方法页的使用地图当成硬先修。先确认本次节点和读者所选分支。先实际取得required_readings中该范围的全部完整单元，核对版本、期间、币种与模型身份；目录、摘要、搜索节选和成功打开标题不算正文。记录实际工具/文件、单元起止、读到的关键约定及其支持范围，runtime_reading_log从空表开始，不预填“已读”。本站方法和公司案例从access.uri所列公开正文读取，外部原件从指定URL读取；不得假设访问任何私人盘符。读取失败先用明示的已核等价来源，仍缺则具体说明缺的单元，不凭记忆声称已核该事实。读者要求直接讲解时可直接推进；互动时一次要求一个完整推理任务，不逐格问四则运算。引用紧随所用材料。案例固定2026-09-20信息与2026-09-18价格，不更新报价、不接账户、不重估公司；不执行或换名恢复股票DCF/WACC。所有操作标原状态、具名已算替代或纯教学扰动，不能把点击当新增证据。最后用迁移题检验，给完整解析，并指出剩余条件。

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
        "locator": "本页中读者所问的具名节",
        "scope": "该节完整文字与必要相邻定义",
        "purpose": "解决当前方法疑点，不强制延长为一课"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。",
      "authors": [
        "本站方法"
      ]
    }
  ],
  "optional_readings": [],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "uri": "https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/",
    "scope": "本站方法局部摘编"
  },
  "reading_resolution": "Use public access.uri and its specified complete unit; the teaching runtime must actually fetch it. Site candidates are not claimed publicly published.",
  "experiment_ids": []
}
```

## Supplied entry
**T10 · 可查方法参考。** 本页摘编本站公司投资方法供六篇课程调用。输入为已校准的业务关系、共同状态、资本/融资/股数、买入与观察日期；输出为有身份的条件股东结果与风险回报。它不执行股票DCF、WACC或换名后的永续/剩余收益折现；实际借款成本仍进入资金路径。

<a id="pm-conditional-rr-valuation-groups"></a>
## 估值组

盈利、资本责任、索取权及共同负担能可靠识别时，分别定价；共享资源或内部价格使独立利润不可识别时，继续细研究驱动，但合并定价。独占客户不是必要条件。已在服务/硬件盈利中体现的平台能力，不另加一次价值。

<a id="pm-conditional-rr-earnings-reference"></a>
## 盈利与参照

分开会计可比调整、业务状态/周期调整与普通股归属。经营业务可采用适配的EV/NOPAT、EV/EBITA等；使用EBITDA也不能消去资本消耗。金融业务先看资本约束和可分配盈利，使用适配权益参照。早期亏损业务先看里程碑、资金和稀释，再定未来状态；负盈利不机械乘正PE。

每项参照写清分子属于谁、分母是什么、盈利期间/状态、价值日期及可比差异。历史均值不是未来状态的默认值，今日前瞻PE不是未来售价。极小例：25%经营税设定下，同价值21倍EV/EBIT对应28倍EV/NOPAT，不能只换利润不换倍数。

<a id="pm-conditional-rr-common-equity-bridge"></a>
## 普通股桥

标明每组是经营价值还是已属股权价值，再处理尚未计入的债务、租赁融资、少数/优先权、总部和共同成本。真正未计入的非经营资产才可加回；股权层已处理的债务不重复扣。现金、股数、SBC、回购和增发沿同一情景滚动；金额/股数必须同日期、同币种。

<a id="pm-conditional-rr-states-and-probability"></a>
## 状态与概率

先定义互斥穷尽的状态集合及窗口，再用代表路径描述。粗权重须留下“参考类/机制起点 → 当前正反证 → 调整理由 → 采用值/完整可行替代 → 更新触发”。不能由当前价格、失败模式数量、机构票数或默认比例代替判断。

共同驱动下不随意独立相乘。区分权重不确定性和类内结果差异；代表点不是自动的条件均值，参数范围不是自动的概率支持或分位数。完整研究需要有据粗分布；资料不足时应明确未完成的概率部分，不填任意值。

<a id="pm-conditional-rr-dated-shareholder-results"></a>
## 日期股东结果

保留买入、期间分配/追加及期末剩余权益；分红再投不可重复计入。企业投入不等于账户追加，救援增发不意味着旧股东必然再付款。IRR是结果，不是定价输入。

期望终财富按条件均值加权；使用代表点时保留近似身份。年化期望财富与概率平均路径年化分开。亏损概率应合并各类内的条件亏损概率；不能以代表点盈利认定整类不亏。比较Tail、兑现时间与资金低谷，经营、定价和可行概率的替代分别重算。资本用途比较使用具名同期安排，不默设公司必要回报率。

## 使用地图

P28调用估值组；P29调用盈利/参照；P30调用普通股桥；P05调用状态/概率；P31调用日期股东结果，P04提供前端路径。方法参考没有反向硬要求读完六篇。

[相对估值讲义pp6–12、56–57](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf)支持倍数口径和可比选择；[Silva等§3–3.1](https://link.springer.com/article/10.1007/s10994-023-06336-7)支持评分规则的性质。它们不负责确定本站公司概率或未来倍数。


## Sources
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界。

## Content relations
```json
[
  {
    "from": "zh-pmconditionalrr",
    "relation": "part_of",
    "to": "portfolio-valuation",
    "reason": "主要 topic 归属"
  }
]
```

## Related entries
