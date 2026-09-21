# Alphabet · GOOG：硬件用途、共享基础设施与股份类别

用自用设备与待售硬件对照成本路径，再区分共享基础设施、Services/Cloud 经营分部与 GOOG/GOOGL 股份类别.

Entry: zh-goog | Node:  | Language: zh | Editorial revision: 2026-09-22
Research cutoff: 2026-09-20 | Data period: 2026 年第二季度及上半年

## Teaching instructions
先阅读本条sources中的公司季度报告，重点核对业务、收入确认、库存、固定资产、分部与股份权利的指定披露，记录版本和定位. 再用本条数值设定解释交易、资源与结算，核对收入、成本、现金、权益和共享费用加总. 实际公司事实与设定金额分别注明；按读者疑点选择计算或改变一项条件.

Before substantive teaching, actually retrieve every required reading unit for the selected scope. Read its complete designated section, including necessary assumptions, tables and footnotes. A working URL or an editorial access date is not a runtime reading receipt. Record the actual version, location, scope and what it supports. If unavailable, use a previously verified equivalent source; if the required unit remains unavailable, identify that gap rather than teach it from memory. Start runtime_reading_log empty. Once reading is complete, use a substantive diagnostic or follow the reader's request for direct explanation. Advance one complete reasoning task at a time; skip mastered basics. Distinguish original facts, supplied teaching assumptions and inference.

## Shared notation and writing conventions
数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.
[Notation and units](https://ou-liu-red-sugar.github.io/agent/zh/notation.md)

## Required readings and runtime protocol
```json
{
  "runtime_reading_log": [],
  "required_readings": [],
  "optional_readings": [],
  "export_mode": "public"
}
```

## Supplied entry

## 硬件用途与业务分类 [goog-business]

Google Services 包括广告、订阅等业务，Google Cloud 提供基础设施、平台、办公应用等企业服务，并披露 TPU 系统销售形成的产品收入. Alphabet 的技术基础设施支撑不同产品和服务，同时也持有用于出售的 TPU 系统硬件及设备存货.[2026 年第二季度报告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

以下金额为教学设定. 青禾买入两件硬件，每件成本20：一件留在自己的服务系统中使用，一件由它控制并准备卖给客户. 付款与交付同时完成，自用件已经达到可使用状态，其他收支保持不变. 现金、存货和设备均属于资产，因此采购首先改变资产构成；随后由硬件用途决定成本进入经营结果的路径.

## 自用设备与待售存货 [goog-assets]

采购使现金减少40，自用件形成设备20，待售件形成存货20. 采购后资产总额与权益保持不变.

自用件跨期支持服务，在达到可使用状态后按使用期间分摊成本；待售件在销售前留在存货中，销售时将已售部分账面成本结转为销售成本. 两件硬件起始成本相同，但进入利润的时点由用途决定.

Alphabet披露的待售 TPU 系统硬件及设备存货还要按存货的成本与可变现净值规则计量.[存货披露](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

### Illustration — paths and results
两件成本同为20的硬件，采购先改变资产构成，使用或销售才决定成本如何进入经营结果.
Formula: 经营事件 → 资源与义务变化 → 收入和成本 → 利润贡献.
Default: 比较自用与待售硬件的成本路径.
Conditions: 教学例子按正文的商品控制、履约与成本去向假设展开.
自用：保留资源提供服务: 购买自用件20: 现金−20，设备+20 → [开始按使用期分摊成本] 达到可使用状态: 本例服务设备 → [本例折旧2直接费用化] 净额18，费用2: 本期利润减少2
待售：把资源交给客户: 购买待售件20: 现金−20，存货+20 → [商品出售并完成履约] 向客户交付，收款30: 销售收入30 → [结转已售存货成本] 销售成本20，毛利10: 存货归零

## 销售、折旧与资产负债表核对 [goog-worked-result]

本期，青禾把待售件以30卖出并收款. 现金增加30，收入增加30；存货减少20，销售成本增加20，因此销售毛利为30−20=10.

自用件本期折旧2. 本例约定它服务于当期业务，所以2直接计入服务费用，设备净额从20降到18. 两种用途合计的已列利润贡献为30−20−2=8.

从资产负债表交叉核对：采购使现金先减少40，销售收款再增加30，现金净减少10；待售存货已售完，自用设备净额增加18. 没有新增负债，因此净资产变化为−10+18=8，与利润贡献一致. 收到30而只贡献8，是因为同时交出了成本20的存货并分摊2的设备使用成本.

若自用设备改为生产待售商品，相关生产折旧可能先进入存货成本，随商品销售再进入销售成本. 成本进入哪个对象和期间取决于资产实际用途.

## 共享资源与付款安排 [goog-shared-resources]

让青禾的自用设备共同支持两项服务. 假设使用份额相同，本期折旧2各分1；两项服务的分摊合计仍为2. 若两边各扣完整的2，同一笔共享成本就会重复进入分部结果.

Alphabet 的业务分类说明企业向外提供什么，资源使用关系则决定技术基础设施等共同成本怎样进入 Services、Cloud 或 Alphabet-level activities. 公司披露部分集中管理成本按使用量、人数或收入等基础分配，因此收入规模本身不能单独确定基础设施占用.[分部与共同成本披露](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

付款安排属于另一条线：先付款后取得硬件会形成预付资产，先取得硬件后付款会形成应付款. 设备可以已达到可使用状态而仍未付清，客户也可以按合同先付或后付；这些结算时点不改变硬件的自用或待售用途.[主线里的设备用途案例](https://ou-liu-red-sugar.github.io/zh/notebook/goog/#case-goog-assets-20260920)

## 股份类别与股东权利 [goog-security]

GOOG 对应 Alphabet 的 Class C 股票，GOOGL 对应 Class A 股票；两者属于同一个发行公司. Services 与 Cloud 是经营分部，股份类别是证券权利分类，不能用股票代码替代业务分部. Alphabet 还披露 Class A、B、C 普通股的清算与股息权利相同，差异主要在表决权.[股票类别与公司披露](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

### 两台成本都是20的设备：一台保留提供服务，一台卖给客户. 这20分别在什么时候进入费用或成本？
保留使用的一台形成长期经营资产，在可使用后按使用期分摊折旧；准备卖给客户的一台先是存货，销售确认时将相应账面成本结转为销售成本. 成本相同，并不意味着进入当期利润的节奏相同.

### 集团基础设施同时服务Services和Cloud. 把全部设备都归入Cloud，能算出可靠的Cloud资产回报吗？
全部设备中有服务其他业务的资源，分母与Cloud利润范围不匹配. 应按实际使用关系及披露分配口径归集.

### GOOG与GOOGL代表两套不同的Google业务吗？阅读公司经营与阅读具体股票时，各应核对什么？
两者对应同一 Alphabet 集团的不同股份类别：GOOG 为 Class C，GOOGL 为 Class A. 集团经营资料共同描述 Alphabet 的业务；具体证券层面还要核对股份类别、表决权、交易价格及其他条款. 公司身份回答“研究哪家企业”，股份类别回答“持有何种权利”.

## 历史教学资料 · 2026-09-20 [goog-historical-teaching-20260920]

该片段冻结于2026-09-20，材料期间为2026年第二季度及上半年.

### GOOG · 设备用途与共享资源 [case-goog-assets-20260920]
Research cutoff: 2026-09-20 | Data period: 2026 年第二季度及上半年

Alphabet 的技术基础设施支持 Services、Cloud 等业务；公司同时披露用于出售的 TPU 系统硬件和设备存货. 自用基础设施与待售硬件对应不同的资产与成本路径.[季度报告](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm)

以下20为教学设定. 一台成本20的硬件用于企业自身服务，在达到可使用状态后逐期确认折旧；另一台成本20的硬件准备出售，在卖出前属于存货，交付客户并确认销售时把20结转为销售成本. 外观和采购成本相同，资源控制与未来收费方式不同.

共同技术基础设施可能服务多个产品. 若计算某项业务的资产回报，资产范围、业务利润范围和共同成本分配口径需要一致；Alphabet 的合并资产资料只能作为这一分析的起点.

硬件出售后，原企业不再保有该硬件的控制；后续服务收入取决于另行提供的服务与合同. 因此“出售硬件”与“保留硬件提供服务”应分别连接到相应资源和收入.

### Illustration — paths and results
相似硬件的两种用途. 按出售资源或持续使用资源区分其进入利润的时点.
Formula: 资源取得 → 资产用途 → 成本确认；服务交付 → 收入 → 收款.
Default: 并排阅读两种经营路径，沿箭头观察资源在何时、以什么方式进入当期结果.
Conditions: 箭头表示经济联系；付款时点取决于结算安排.
自用基础设施: 取得硬件: 用于自己的服务 → [保留设备，持续使用] 长期经营资产: 达到可使用状态 → [服务跨期交付] 逐期折旧: 成本分配到使用期间
持有待售硬件: 取得硬件: 准备交付客户 → [等待商品销售] 存货: 卖出前仍持有 → [交付硬件并确认销售] 销售成本: 销售时结转账面成本

## Sources
- [Alphabet · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1652044/000165204426000071/goog-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对 Google Services、Google Cloud、技术基础设施与设备用途. 报告主体为 Alphabet；GOOG 与 GOOGL 对应不同股份类别.

## Content relations
```json
[]
```

## Related entries
- [资产负债表：全表结构、附注与行业差异](https://ou-liu-red-sugar.github.io/zh/notebook/balance-sheet/)
- [Amazon · AMZN：商品、平台与云服务](https://ou-liu-red-sugar.github.io/zh/notebook/amzn/)
