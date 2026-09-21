# QT-C 冻结实验材料

输入版本：`QT-C-inputs-20260921-v1`。教学内容：`2026-09-21-QT-C-review-v2`。数值结果保留原实际计算版本身份。

- `data/BusEq-value-weighted-monthly-199001-202512.csv`：Kenneth French 30 Industry Portfolios 首个 value-weighted monthly 区块的 BusEq，199001—202512，432 月。202607 CRSP 整段重建快照；非逐月当时可见数据。
- `data/experiment-config.json`：单位、量纲、样本、分位算法、NumPy PCG64 种子、抽样次序、重复数和区块方案。
- `data/results.json`：完整参考路径、覆盖判定、bootstrap 均值、首条抽样索引、AR 创新及路径。
- `data/result-summary.json` 与 `data/result-tables.md`：可读的默认结果与关键对照；完整数组仍在 results 文件。
- `shared_inputs.json`：三篇共同输入；其 `results_file`、`summary_file` 以此目录为基准。
- `sources.json`：具名来源、版本、完整指定单元及实际支持范围。
- `compute/reproduce.py`：独立于网页的原复算程序，读取此目录下的冻结 CSV 和配置；需要 Python 与 NumPy。

保留目录结构下载后，可运行 `python compute/reproduce.py --out recomputed`。输出是指定数据和模型下的复算，没有执行交易回测。当前官网会更新；复算本版本时使用随包冻结输入。

默认尾部水平为 95%，Monte Carlo 样本规模为 1,000，bootstrap 为 5,000 次、区块长 6；交互与静态解释使用同一数据。完整 432 月是历史观测；四状态支付、AR(1) 与抽样索引是明确指定的教学模型/随机实验，两种身份分别记录。
