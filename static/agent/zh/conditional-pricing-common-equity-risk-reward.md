# 业务状态下的条件定价、普通股桥与Risk-Reward

根据已校准业务关系与共同状态，推演盈利、资本、融资及股份，再用状态相容的参照形成条件股东结果，结合日期现金和权重计算Risk-Reward. 实际借款成本进入资金路径.

Entry: zh-pmconditionalrr | Node: PM-CONDITIONAL-RR | Language: zh | Editorial revision: 2026-09-22

## Teaching instructions
这是按需查阅的方法参考. 定位读者所问的估值组、盈利参照、普通股桥、概率或日期现金，读取本参考对应完整单元. 重建相关计量对象与条件，按需要选一项计算或反例检验理解. 使用公司数据时，先读有日期案例及相应required_readings完整原文. 记录来源、版本、范围及支持内容；必要材料缺失时先补足，再进入依赖它的分析. runtime_reading_log记录实际读取.

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
        "locator": "本页中读者所问的具名节",
        "scope": "该节完整文字与必要相邻定义",
        "purpose": "解决当前方法疑点，不强制延长为一课"
      },
      "supports": "规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.",
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
  "experiment_ids": [],
  "content_version": "2026-09-22-deep-review",
  "learning_task": "定位读者所问的估值组、盈利参照、普通股桥、概率或日期现金，读取本参考对应完整单元. 重建相关计量对象与条件，按需要选一项计算或反例检验理解."
}
```

## Supplied entry
根据已校准业务关系与共同状态，推演盈利、资本、融资及股份，再用状态相容的参照形成条件股东结果，结合日期现金和权重计算Risk-Reward. 实际借款成本进入资金路径.

<a id="pm-conditional-rr-valuation-groups"></a>
## 估值组

盈利、资本责任、索取权及共同负担能可靠识别时，分别定价；共享资源或内部价格使独立利润不可识别时，继续细研究驱动，但合并定价. 已在服务/硬件盈利中体现的平台能力，不另加一次价值.

<a id="pm-conditional-rr-earnings-reference"></a>
## 盈利与参照

分开会计可比调整、业务状态/周期调整与普通股归属. 经营业务可采用适配的EV/NOPAT、EV/EBITA等；资本消耗按实际经营需求计入. 金融业务先看资本约束和可分配盈利，使用适配权益参照. 早期亏损业务先看里程碑、资金和稀释，再定未来状态.

每项参照写清分子属于谁、分母是什么、盈利期间/状态、价值日期及可比差异. 未来参照按预期业务状态选择；前瞻PE以当前价格为分子. 25%经营税设定下，同价值21倍EV/EBIT对应28倍EV/NOPAT.

<a id="pm-conditional-rr-common-equity-bridge"></a>
## 普通股桥

标明每组是经营价值还是已属股权价值，再处理尚未计入的债务、租赁融资、少数/优先权、总部和共同成本. 真正未计入的非经营资产才可加回；股权层已处理的债务不重复扣. 现金、股数、SBC、回购和增发沿同一情景滚动；金额/股数必须同日期、同币种.

<a id="pm-conditional-rr-states-and-probability"></a>
## 状态与概率

先定义互斥穷尽的状态集合及窗口，再用代表路径描述. 粗权重记录参考类或机制起点、当前正反证、调整理由、采用值、可行替代及更新触发.

共同驱动进入联合分布. 权重不确定性和类内结果差异分别记录；代表点用于均值时标近似，参数范围用于概率界限时需有支持区间证据. 概率判断有缺口时记录尚缺的材料.

<a id="pm-conditional-rr-dated-shareholder-results"></a>
## 日期股东结果

按日期记录买入、分配、个人追加和期末权益，再投资股息在终财富中计一次. 企业资金与个人现金分账，未认购的股东通过股份稀释承担增发影响. IRR由已得到的现金路径计算.

期望终财富按条件均值加权；使用代表点时保留近似身份. 年化期望财富与概率平均路径年化分开. 亏损概率应合并各类内的条件亏损概率. 比较Tail、兑现时间与资金低谷，经营、定价和可行概率的替代分别重算. 资本用途比较使用具名同期安排.

## 使用地图

P28调用估值组；P29调用盈利/参照；P30调用普通股桥；P05调用状态/概率；P31调用日期股东结果，P04提供前端路径.

[相对估值讲义pp6–12、56–57](https://pages.stern.nyu.edu/~adamodar/pdfiles/eqnotes/valpacket2spr24.pdf)支持倍数口径和可比选择；[Silva等§3–3.1](https://link.springer.com/article/10.1007/s10994-023-06336-7)支持评分规则的性质.

## Sources
- [业务状态下的条件定价、普通股桥与Risk-Reward](https://ou-liu-red-sugar.github.io/zh/notebook/conditional-pricing-common-equity-risk-reward/): 规定估值组、盈利/参照、普通股桥、状态权重和日期现金的输入输出与边界.

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
