# Amazon · AMZN：商品、平台与云服务

用自营商品、第三方平台与 AWS 对照收入确认、成本归属、共享资源和资本投用/客户结算时点.

Entry: zh-amzn | Node:  | Language: zh | Editorial revision: 2026-09-22
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

## 自营商品的收入与成本 [amzn-business]

Amazon 的业务包括自营零售、第三方卖家服务、广告与会员服务，以及 AWS 等. 季度报告中的第三方卖家服务收入包括佣金及相关履约、运输服务收费；AWS 单独披露计算等云服务收入.[2026 年第二季度报告](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)

以下金额为教学设定. 禾桥的自营柜台以70取得并控制商品，再以100向顾客交付；本例同时完成收款. 商品收入为100，已售商品成本为70，毛利为100−70=30，其余支持业务费用尚未扣除.

交付商品与结转存货成本是同一销售事件的两条会计关系：一边确认100收入，另一边让账面成本70进入销售成本. 若销售与收款不同时发生，收入确认和应收/现金结算还要分别记录；[资产负债表中的交易过程](https://ou-liu-red-sugar.github.io/zh/notebook/balance-sheet/#bf05-events)用售价150、存货成本100的例子展开这一时间差.

## 第三方平台的成交额、收入与结算义务 [amzn-platform]

另一张订单来自第三方卖家. 卖家控制商品并负责向顾客交付，禾桥提供代理平台服务. 假设平台服务已经完成，顾客支付100，禾桥代收后留下佣金10，向卖家结算90.

本例 GMV 为100，禾桥的服务收入为10，90为向卖家的结算义务. 商品销售与商品成本属于卖家，平台确认的是自己已经履约取得的服务收入.

在向卖家结算前，代收100会同时增加现金和90的待结算义务，服务收入为10. 再假设客服与结算服务的直接费用合计4，则平台直接费用后贡献为10−4=6，共享费用尚未分摊. GMV 100、收入10与直接费用后贡献6属于三个不同口径.

### Illustration — paths and results
同样成交100，自营确认商品收入与商品成本，代理平台只确认自己履约取得的服务收入.
Formula: 经营事件 → 资源与义务变化 → 收入和成本 → 利润贡献.
Default: 比较两类交易的收入与成本.
Conditions: 教学例子按正文的商品控制、履约与成本去向假设展开.
自营：控制并出售商品: 顾客支付100: 商品收入100 → [完成销售，结转成本] 减去商品成本70: 交出的存货账面成本 → [100 − 70] 毛利30: 尚待扣除其他费用
平台：提供代理服务: 顾客支付100: 其中90应结算给卖家 → [保留归属于平台的佣金] 佣金收入10: 平台已提供的服务 → [10 − 客服与结算费用4] 直接费用后贡献6: 尚待扣除共享费用

## 设备投用与客户结算的时间线 [amzn-capital]

沿用一台成本20的设备. 假设它支持两种订单处理，本期折旧2，并在本例中直接计入当期服务费用. 设备成本进入费用的时点，与客户付款时点分属两条关系.

若先付款后取得设备，先形成预付资产；若先取得设备后付款，先形成应付款. 设备取得后还可能经过安装部署，达到预定可使用状态才开始按使用期间分摊折旧. 因而采购结算时点、投用时点与折旧起点需要分开.

生产待售商品的设备折旧可先进入存货，待销售后结转成本.

AWS 的资源线可以拆成采购结算、部署、可使用状态和折旧；客户线则拆成履约、计费和收款. 客户预付款对应尚待履约的服务义务；服务已履约而后收款时形成应收等结算项目. 两条线依实际经营利用连接，但各自遵循不同合同与结算条件.[主线中的两种资源循环](https://ou-liu-red-sugar.github.io/zh/notebook/amzn/#case-amzn-assets-20260920)

## 共享资源的分摊与合并 [amzn-shared-resources]

禾桥的自营毛利为30，平台直接费用后贡献为6，两项合计36. 支持两项业务的设备本期折旧只有2，因此扣除共享折旧后的已列贡献为36−2=34.

若两种业务使用设备的份额相同，折旧2各分摊1，自营与平台分别为29和5，合计仍为34. 若两边各扣完整的2，则会得到28和4，合计32；差额2来自同一笔共享成本的重复扣除. 若暂把全部2归到自营，分部结果变成28和6，但集团合计仍为34.

分部归属需要与资源用途一致. 自营收入100、平台收入10本身不能推出设备使用比例；比较收入、费用与资本时，应先识别专属资源与共享资源，再在同一范围内归集.

## 两类交易的合并结果 [amzn-open-questions]

两张订单合计成交200，但禾桥收入为110，即自营商品收入100加平台服务收入10；平台代理卖家收取的90对应结算义务. 收入110扣除商品成本70、平台直接费用4和共享折旧2，已列交易贡献为34.

### 两个场景中，顾客都付100. 甲以70买入商品，再以100卖出；乙仅提供收费10的平台服务，90归卖家. 两者收入、已知成本与剩余金额分别是什么？
自营商品收入100、销售成本70、毛利30；平台服务收入10，另有90应付卖家，服务成本尚待扣除.

### 看到AWS相关设备投入增长，怎样把问题拆成三段，追踪到客户收款？
先追踪资源：交付、安装、达到可使用状态. 再追踪服务：可交付的能力怎样对应客户使用、合同承诺与收入. 最后追踪结算：供应商何时收款、客户何时付款. 设备折旧沿可使用资产展开，收入沿服务交付展开，两条线通过实际经营利用连接.

### 如果同一套资源服务多个业务，为什么“把各业务独立加一遍”可能算错？
各业务独扣同一共享成本会重复计费. 按使用关系分摊后，分部合计与集团总额核对；计算回报时匹配利润、资产及共同成本的范围.

## 历史教学资料 · 2026-09-20 [amzn-historical-teaching-20260920]

该片段冻结于2026-09-20，材料期间为2026年第二季度及上半年.

### AMZN · 经营循环与基础设施 [case-amzn-assets-20260920]
Research cutoff: 2026-09-20 | Data period: 2026 年第二季度及上半年

Amazon 同时经营自营零售、第三方卖家服务和 AWS. 自营零售中，企业采购商品、持有存货，再向顾客交付商品；第三方平台交易中，需要确认商品由谁控制、Amazon 提供了什么服务. 卖家商品成交总额与 Amazon 因佣金、履约、运输等服务确认的收入属于不同口径.[季度报告](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm)

以下金额为教学设定：顾客为一件商品支付100. 若零售商以70采购并控制商品、再以100售出，记录商品收入100与销售成本70；若平台仅提供收费10的代理服务、90归卖家，则平台记录服务收入10和对卖家的结算义务.

AWS 的设备留在企业中用于持续提供服务. 设备采购先改变资产构成，达到可使用状态后才按使用期间分摊折旧；服务履约形成收入，供应商结算与客户结算各有自己的时点.

若设备支出增加而当期服务收入尚未同步，应分别核对设备交付与可使用时点、客户用量、计费和收款. 设备采购支出与当期费用并不按同一时点确认.

### Illustration — paths and results
对照自营商品循环与云服务资源循环. 设备付款与客户收款分别受采购和客户合同决定.
Formula: 资源取得 → 资产用途 → 成本确认；服务交付 → 收入 → 收款.
Default: 并排阅读两种经营路径，沿箭头观察资源在何时、以什么方式进入当期结果.
Conditions: 箭头表示经济联系；付款时点取决于结算安排.
自营商品：卖出资源: 采购并取得商品: 存货；未付款时形成应付 → [完成商品销售] 交付顾客: 确认商品收入，存货转销售成本 → [依约结算] 收到货款: 应收转为现金
云服务：使用资源: 取得并部署设备: 在建资产或设备 → [形成可交付的服务能力] 达到可使用状态: 开始按使用期分摊折旧 → [客户实际使用或依约取得服务] 提供计算服务: 确认服务收入，随后按合同收款

## 研究记录 · 2026-09-20 [amzn-research-record-20260920]

[业务状态、资本与股东结果](https://ou-liu-red-sugar.github.io/zh/notebook/amzn-research-20260920/)记录截至2026-09-20的业务关系、资本与融资路径、条件定价和情景权重. 参考价格为2026-09-18常规收盘，条件结果日为2029-12-31；其中金额保持该历史版本身份.

## Sources
- [Amazon · 2026 Q2 Form 10-Q](https://www.sec.gov/Archives/edgar/data/1018724/000101872426000026/amzn-20260630.htm): 来源摘要：截至 2026-06-30 的季度报告. 用于核对自营零售、第三方卖家服务与 AWS 的业务口径，以及存货、设备和现金流的合并披露. 案例的解释由作者根据研究整理.

## Content relations
```json
[]
```

## Related entries
- [资产负债表：全表结构、附注与行业差异](https://ou-liu-red-sugar.github.io/zh/notebook/balance-sheet/)
- [Alphabet · GOOG：硬件用途、共享基础设施与股份类别](https://ou-liu-red-sugar.github.io/zh/notebook/goog/)
