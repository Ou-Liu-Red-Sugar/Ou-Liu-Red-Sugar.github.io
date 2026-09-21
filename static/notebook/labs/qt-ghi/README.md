# QT-GHI 同源复算附件

正文的图表使用冻结数组和实际导出结果，不在浏览器另抽随机数. 大数组为复算附件，不需要为阅读一篇词条全部载入.

- `data/qt-ghi-shared-experiments.json`：4 个冻结实验的身份、生成顺序、单位和候选采用条件.
- `data/learning-inputs.json`：按 QT13 等 node ID 定位的完整教学切片和附件清单.
- `data/results.json`：完整默认统计及12种对冲设计、成对比较、手算账本、研究表格的局部复算.
- `data/shared-normal-array.npz`：共用 8192×256 正态数组.`data/hedge-errors.csv` / `.npz`：完整8192×12误差.
- `data/first-path-ledgers.json`：12种设计的首路径完整账本.`hand-path-ledger.csv`：另一个具名4行手算路径.
- `data/ethbtc-trade-times.csv`：冻结一小时内全部3291条ID/微秒时间投影；不是整日七字段原档. 其它ETHBTC文件保留各尺度计数及内部等待.
- `static/`：九篇完整静态阅读、题解和两篇证明；对应同源Markdown另存.
- `compute/reproduce.py`：原作者完整计算入口. 需Python、NumPy、SciPy；以 `compute/` 与 `data/` 为同一根下的兄弟目录保存. 至少先下载冻结JSON和完整trade-times CSV；重算会在该根下重写派生数组和结果，请在自己下载的副本中运行.

来源PDF链接仍指向作者/机构原文；本站没有复制未授权教材全本. 论文结果和训练没有被该局部脚本复现. XSP只作真实条款接口，这些GBM、半价差和现金规则是具名教学模型.
