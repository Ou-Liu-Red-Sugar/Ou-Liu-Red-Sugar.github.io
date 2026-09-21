# 唯一数据身份与复算入口

`final-shared-inputs.json` 为Lead冻结文件，原字节保留，SHA-256：
`f5c4bbcce5afb4f68ec68c21c81a685a3af20513ae838a746a38bb8bbe819625`.
其中准备阶段的状态字段不被偷偷改写；本包当前交付状态见manifest.

## 原始输入与派生数据

| 文件 | 身份与范围 |
|---|---|
| factor-attribution-input-201601-202512.csv | 原样保留120月BusEq/FF3；202607 CRSP vintage；月小数回报；研究组合，不是基金净收益 |
| exp-hedge-01-hand-path.csv | QT24独立手算路径100→102→101→104；4行完整事件账 |
| exp-hedge-01-first-model-path.csv | QT24默认16区间/5bps的首条模型路径；17行；不是上一条手算路径 |
| exp-hedge-01-owner-summary.json | QT24十二设计的既有结果投影；每设计8192路径；不再模拟 |
| operational-inputs.json | 已批准完整计划中的价格、保证金、费用、授信及账户时序；无新增估值或市场数据 |
| calculation-results.json | 作者引擎从冻结/批准输入推得的默认及具名变式结果 |
| corn-cash-event-ledgers.csv | P23/P24同一资金账的0/2/3张、0/2000/3000授信等既定变式；含停止后的零仓位 |
| eur-event-ledger.csv | P24选读迁移；EUR/USD实际规格＋教学现金路径，预先平掉实物期货 |
| factor-attribution-full-rows.csv | 逐月拟合、残差、贡献与复合财富；原始CSV另保留 |
| performance-event-ledgers.csv | 现金、应付费用、NAV、外部流；四种费用确认/支付口径 |
| mbt-event-ledgers.csv | USD现货、期货保证金、自有资金、借款与强制退出/追加分支 |
| linear-perp-event-ledger.csv | USDT funding与交易费用；没有虚造未提供的维护保证金或强平路径 |
| lp-self-financing-ledgers.csv | 四条树路径的X库存、Y现金、LP/HODL/再平衡财富与无费LVR |
| lp-range-grid.csv | 独立集中区间的库存/财富/活跃状态；连续价格近似，不是实际tick部署 |

所有CSV的字段来自唯一引擎或原字节文件，离线JS数据仅为这些输入的运行时序列化. 原始大数组不在每个Agent重复嵌入；当前节点需要的附件按路径一次附入复制文本. 初始持仓、外部转入、借款和账面损益始终区别.

P26两种借款峰值仅对明确标出的完整代表路径计算. 四价格手算路径：成交后6647.11422055133；包括计息后、成交前现金事件为6652.57984794302.5000授信在t0即拒绝；不是第10天才触发.

P33无费结构LVR不含费用；树上另加0.02Y费用减0.005Y成本；集中区间独立用0.05Y/0.01Y. 价格P为Y/X、库存x为X、现金y与财富/LVR/费用均为Y. 净费用差额不重新命名为结构LVR.
