{
  "title": "经济与行业数据的口径",
  "description": "识别测量对象、期间、单位、覆盖与版本，建立可比较的数据口径.",
  "layout": "entry",
  "notebookid": "zh-ei02",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-ei02"
}

测量对象、期间、单位、覆盖范围与数据版本共同决定两组数字的可比性.

<span id="ei02-definitions"></span>

## 数据口径

**水平**为某期或某时点的量；**增速**比较同口径水平. 基数为正时，$g=x_t/x_{t-k}-1$；同比比较上年同期，环比比较上一相邻期间. 存量与期间流量见[EI-01](/zh/notebook/economic-activities/).

**名义金额**同时受数量、价格和组成影响，**实际量或数量指数**按指定统计方法剔除价格变化. 单一产品、质量可比且量价范围匹配时，收入增10%、单价增5%，数量增速为 $1.10/1.05-1\approx4.762\%$. 多产品总量还需相应权重及指数方法.

**季节调整**处理重复出现的季节模式，价格调整另行处理. **初值、修订值和最终值**标记发布阶段；材料期记录数据描述的时间，发布日期记录该版可取得的时间，读取日记录实际取得时间.

**历史值与预测值**沿原件身份保存. 对预测的检验，需要另取实际结果及其版本.

<span id="ei02-material-scopes"></span>

## 电力与制造资料口径

| 固定材料 | 对象与单位 | 时间与状态 | 必须保留的区别 |
|---|---|---|---|
| EIA年报2024，Tables2.5–2.7居民列 |  K MWh、 M 美元、美分/kWh | 2023/2024年度；原页标final | 最终客户售电及收入，不是同月发电 |
| Census M3 May2026 | 制造出货/订单/存货， M 美元 | 2026-07-02发布；5月p、4月r | 季调而未扣价格；新订单已扣取消 |
| IEA Electricity2025，pp57–61首段 | 2024特定时段的功率与日前价格等 | 2025报告中的历史案例 | 功率GW与电量GWh、小时与年均分开 |

EIA 售电与收入按账单期间累计，发电按自然月记录. Census 出货和新订单为期间流量，未交订单和存货为期末余额. [^eia][^m3] IEA 事件图分别以功率和价格作纵轴. [^iea]

<span id="ei02-units"></span>

## 电价单位换算

EIA 2024居民收入244,367 M美元、电量1,482,874 K MWh. 由 $1\ \mathrm{MWh}=1000\ \mathrm{kWh}$，1 K MWh＝1 M kWh. 收入除以电量得 USD/kWh，再乘100换算为美分/kWh：

\[
\frac{244367\times10^6\ \mathrm{USD}}
{1482874\times10^6\ \mathrm{kWh}}
\times100\ \mathrm{cent/USD}
\approx16.479\ \mathrm{cent/kWh}.
\]

复算平均收入／电量约16.479美分/kWh，与公布16.48相符. 平均价格及需求识别见[EI-03](/zh/notebook/demand-price-elasticity/). [^eia]

<div data-experiment-slot="lab-ei02"></div>

<span id="ei02-vintages"></span>

## 发布版本与估计误差

Census 的 May 2026版于2026-07-02 10:00 AM EDT发布，其中5月标初值p、4月标修订值r. 研究该次发布时的信息，应使用这版数值和脚注；后续修订另保存版本，供比较更新幅度. [^m3]

M3调查面板采用非概率抽样，缺少用于通常设计型抽样误差计算的随机抽样机制. 精确抄录表值保留了公布数，却无法据此量化总体估计误差.

<span id="ei02-exercises"></span>

## 图表口径练习

图中把“2024美国居民年均电价16.48美分/kWh”“2026年5月工程机械出货4,498 M 美元”和“同月末未交订单11,595 M 美元”画在同一纵轴，称作行业需求比较；作者又说季调出货增长就是实际产量增长. 请改成一份可以使用的材料.

**解析.** 分别展示售电量价表和机械订单表，各自注明对象、单位与期间. 机械表中的出货为月度流量，未交订单为月末余额；季调金额仍含价格和组合影响. 比较增速需取得同一频率、版本与可比基期，进一步估计需求弹性还需客户价格及影响需求和供给的条件.

<span id="ei02-usage"></span>

[^eia]: EI-S04-EIA-2024. EIA Electric Power Annual2024，Tables2.5–2.7的居民年度行、单位与全部表注. https://www.eia.gov/electricity/annual/html/epa_02_05.html ；https://www.eia.gov/electricity/annual/html/epa_02_06.html ；https://www.eia.gov/electricity/annual/html/epa_02_07.html
[^m3]: EI-S06-M3-202605. U.S. Census Bureau，*Manufacturers’ Shipments, Inventories, and Orders — May 2026 Full Report*，2026-07-02 10:00 AM EDT发布，CB 26-104 M3-2 (26)-05. 第1页为版次身份，第3–4页为调查说明，第6–9页为Tables 1–4；5月p、4月r. 固定历史入口：https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
[^iea]: EI-S05-IEA-2025. IEA Electricity2025，pp57–61首段，2024历史事件图、说明及图注. https://iea.blob.core.windows.net/assets/7c671ef6-2947-4e87-beea-af0e1288e1d7/Electricity2025.pdf
