{
  "title": "需求、客户行为与价格弹性",
  "description": "从客户用途与可行选择定义需求与弹性；用美国居民售电资料说明两期量价变化不能直接识别需求曲线，并以工程机械区分作业需求、设备存量与新购需求.",
  "layout": "entry",
  "notebookid": "zh-ei03",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-ei03"
}

需求描述客户在给定价格和环境下愿意购买的数量、品种及时间. 实际销量同时取决于客户选择、供给与交付条件.

<span id="ei03-demand-elasticity"></span>

## 需求关系与客户条件

固定产品、客户、地域和期间，记需求为 $Q_d=D(P;Y,Z)$. $P$ 为客户面对的价格，$Y$ 为预算或收入条件，$Z$ 包括用途、替代方案、既有设备及其他环境. 分号后的条件在分析价格变化时保持不变.

**定义.** 给定 $Y,Z$，需求曲线记录价格与愿购数量的条件关系. 改变 $P$ 沿同一曲线移动；改变 $Y,Z$ 或需求关系本身使曲线移动. [^core]

允许调整的变量随期限改变. 对用电客户，短期固定的住房和电器限制了调整方式，客户主要改变使用时间或强度；更长期间可以更换设备，价格弹性也随之变化.

施工企业所需的作业能力可以由新购、使用已有设备、租赁或延期安排满足. 研究新机需求，应同时观察工程量、现有设备和采购期限；这些替代关系也决定[行业边界](/zh/notebook/industry-boundaries/).

### 点价格弹性

在 $P>0,Q_d>0$ 且对价格可微的点，本文使用**带符号的点价格弹性**

\[
\varepsilon_P=\frac{\partial Q_d}{\partial P}\frac{P}{Q_d}
=\frac{\partial\log Q_d}{\partial\log P}.
\]

弹性将有单位的斜率转为相对变化率. 小幅变化时，$\Delta Q_d/Q_d\approx\varepsilon_P\,\Delta P/P$. 向下倾斜需求的弹性为负；CORE §7.8采用其正的绝对值. [^core]

教学需求 $Q_d=100-2P$ 在 $P=20,Q_d=60$ 时，$\varepsilon_P=-2\times20/60=-2/3$. 在 $P=25,Q_d=50$ 时，斜率仍为−2，弹性成为−1；变化来自 $P/Q_d$ 的基数.

沿固定需求关系，收入 $R(P)=P Q_d(P)$，故 $R'(P)=Q_d+P Q_d'=Q_d(1+\varepsilon_P)$. 上例价格由20升至25，数量由60降至50，收入由1,200升至1,250. 利润变化还需扣除相应成本变化.

<span id="case-ei-us-power-2024"></span>

<span id="ei03-electricity-observations"></span>

## 美国居民用电量、价与收入

EIA《Electric Power Annual 2024》Tables 2.5–2.7覆盖美国50州及哥伦比亚特区. 下表合并2023、2024居民年度电量、收入与平均价格，原页标记为最终值. [^eia]

| 年度 | 居民销售电量，K MWh | 居民销售收入， M 美元 | 公布平均价格，美分/kWh |
|---|---:|---:|---:|
| 2023 | 1,450,025 | 231,993 | 16.00 |
| 2024 | 1,482,874 | 244,367 | 16.48 |

2024年平均收入／电量为：

\[
\bar P=
\frac{244367\times10^6\ \mathrm{USD}}
     {1482874\times10^3\ \mathrm{MWh}}
\cdot
\frac{1\ \mathrm{MWh}}{10^3\ \mathrm{kWh}}
\cdot
\frac{100\ \mathrm{cent}}{1\ \mathrm{USD}}
=100\frac{244367}{1482874}
\approx16.479\ \mathrm{cent/kWh}.
\]

M美元除以K MWh得到K美元/MWh，再以每MWh等于1,000 kWh换算. 2024复算结果约16.479，取两位为16.48；2023约15.999，取两位为16，与公布值相符. 计算使用表中已取整收入和电量.

接着计算电量增长：
$(1482874/1450025)-1\approx2.265\%$. 按公布价格计算的涨幅为
$(16.48/16.00)-1=3\%$. 如果机械相除，会得到约
$2.265\%/3\%\approx+0.755$.

该机械比值只描述两个年度汇总数怎样共同变化，不能作为结构需求弹性；两行数据没有固定需求关系中的其他条件，而且全体客户的平均收入／电量未必等于边际用电价格.

设教学电费账单由固定费 $F$ 和每度电价 $p$ 组成：$B(q)=F+pq$. 平均价格为 $F/q+p$，边际价格为 $B'(q)=p$. 即使 $p$ 固定，平均价格也随用量变化.

EIA售电量和收入按账单期间累计，发电量按自然月记录；分类及覆盖变化也影响跨期比较. [^eia-notes]

<span id="ei03-supply-demand"></span>

## 供需移动与均衡观测

考虑以下供需教学模型：

\[
Q_d=100-2P+u,\qquad Q_s=20+2P+v.
\]

$u,v$ 分别为需求与供给移动量，单位为教学数量. 设同质产品、单一价格、无配给，以 $Q_d=Q_s$ 表示出清.

联立 $100-2P+u=20+2P+v$，得 $P^*=20+(u-v)/4$，代回得 $Q^*=60+(u+v)/2$.

以下采用价格与数量均为正、没有额外容量约束的内部解. 若增加容量或配给限制，需要在新的可行范围内重新求解.

| 教学情景 | $u$ | $v$ | $P^*$ | $Q^*$ | 相对基准的变化 |
|---|---:|---:|---:|---:|---|
| 基准 | 0 | 0 | 20 | 60 | — |
| 需求增加 | 20 | 0 | 25 | 70 | 价量同升 |
| 供给减少 | 0 | −20 | 25 | 50 | 价升量降 |

需求增加使均衡沿原供给曲线移动，供给减少使均衡沿原需求曲线移动. 将基准与需求增加后的两个均衡点相连，斜率为正；这个斜率反映供给关系，尽管各条需求曲线均向下.

固定价格时，愿购量与愿供量可以分离. 在 $u=v=0,P=25$ 下，两者为50与70，超额供给20. 实际成交量还需交易或配给规则确定.

<span id="ei03-identification-extension"></span>

### 总体回归斜率与结构需求

令 $u,v$ 是均值为零、相互不相关、方差有限的冲击，且 $\operatorname{Var}(u)+\operatorname{Var}(v)>0$；参数范围仍保证内部解. 对观测到的均衡数量关于价格做带截距的总体线性回归，其斜率为

\[
\frac{\operatorname{Cov}(P^*,Q^*)}{\operatorname{Var}(P^*)}
=-2+\frac{\operatorname{Cov}(P^*,u)}{\operatorname{Var}(P^*)}
=-2+\frac{4\operatorname{Var}(u)}
          {\operatorname{Var}(u)+\operatorname{Var}(v)}.
\]

因为 $Q^*=100-2P^*+u$，第一步直接来自协方差的线性性；又因
$P^*=20+(u-v)/4$，分子中的协方差为 $\operatorname{Var}(u)/4$，价格方差为 $(\operatorname{Var}(u)+\operatorname{Var}(v))/16$，得到末式. 只有需求变化时斜率是+2，只有供给变化时才是−2. 即使无限多观测消除了抽样噪声，混合了哪些冲击仍然决定回归回答什么.

总体回归斜率的单位为数量／价格. 结构需求斜率识别后，再乘指定点的 $P/Q$，才得到该点的需求弹性.

工具变量应推动价格，同时满足排除限制：在已控制条件下，不能通过价格之外的路径影响需求. 这两项条件分别提供价格变动和对结构需求的识别. [^mit]

**研究延伸.** Tiedemann等比较不同时间依赖结构下的工具变量识别. 有些结构需要控制滞后关系，其他结构中加入同一滞后变量会打开额外路径；适合的控制集取决于因果结构. [^paper]

<div data-experiment-slot="lab-ei03"></div>

<span id="ei03-fleet-demand"></span>

## 设备存量与更新需求

设备需求分为期内作业量、现有设备服务能力和新增采购量.

考虑完全假设的封闭设备队伍，期初有 $K_0=100$ 台同质设备，一期报废比例为 $\delta=10\%$，本期新增设备 $X$ 在期末到位；忽略二手转让、租赁与其他流入流出. 则期末设备数为
$K_1=(1-\delta)K_0+X$. 如果目标只是维持100台，需买10台；如果目标升至110台，则需买20台. 期末所需设备数只增加10%，新购量却增加100%.

第一期同时补充报废并扩大存量. 若下一期以110台为期初，报废比例仍10%，目标仍110台，仅需新购11台. 新购量由20降至11，目标设备存量保持110台.

Census 2026年5月工程机械新订单4,879 M美元，出货4,498 M美元. 前者已扣取消，后者记录制造环节交付金额，两者受价格、产品组合及订单和交付安排影响. [^m3] 订单与交付过程见[EI-04](/zh/notebook/supply-cost-capacity/).

<span id="ei03-exercises"></span>

## 识别与迁移练习

### 练习一：修复一句行业判断

“2024年美国居民电价涨3%，电量涨2.265%，说明电力需求弹性为+0.755，所以提价可以稳定增加销量. ”

**解析.** 约+0.755为两年度电量和公布平均价格增速之比. 其他需求条件未固定，平均价格也可能随客户组成和用量变化，因而无法由该比值识别提价对销量的影响. 需核客户价格安排、用途与天气等需求条件，以及供给或价格变化的来源.

### 练习二：供需移动的反推

在本篇模型中观察到 $P^*=25,Q^*=60$. 反推出 $u,v$；并说明这是否使现实中的涨价原因可由量价唯一识别.

**解析.** $u-v=20$，$u+v=0$，故 $u=10,v=-10$，愿购和愿供均为60. 反推结果依赖已给定的斜率、截距、内部解及出清机制；经验应用需另外识别这些结构.

### 练习三：采购量与设备存量

教学设备队伍期初100台、报废10%，第一期目标110台，第二期仍目标110台. 求两期新购量. 一个报告将第二期新购下降45%写成“作业需求下降45%”，错在哪里？

**解析.** $X_1=110-0.9\times100=20$，$X_2=110-0.9\times110=11$，新购下降45%. 第一期兼有扩张与更新，第二期仅有更新，目标设备存量保持110台. 作业量还取决于每台设备的使用时数与生产率.

[^core]: EI-S01-CORE-U7. CORE Econ，The Economy 1.0，Unit7，§7.1与§7.8（包括需求、图7.4的教学身份说明和弹性符号约定）. https://books.core-econ.org/the-economy-v1/book/text/07.html
[^eia]: EI-S04-EIA-2024. EIA，Electric Power Annual 2024，Tables 2.5、2.6、2.7，Annual Totals中2023、2024居民列. 本表为三表合并摘录，原单位分别为Thousand Megawatthours、Million Dollars、Cents per Kilowatthour. https://www.eia.gov/electricity/annual/html/epa_02_05.html ；https://www.eia.gov/electricity/annual/html/epa_02_06.html ；https://www.eia.gov/electricity/annual/html/epa_02_07.html
[^eia-notes]: 同上，Tables2.5–2.7表尾关于覆盖、分类、账单期间及售电/发电差异的说明.
[^mit]: EI-S02-MIT-L7-2022. Tobias Salz，MIT14.271 Fall2022 Lecture7，slides6、19–21. https://ocw.mit.edu/courses/14-271-industrial-organization-i-fall-2022/mit14_271_f22_lec7slides.pdf
[^paper]: EI-S07-TIEDEMANN-2024V1. Silvana Tiedemann、Jorge Sanchez Canales、Felix Schur、Raffaele Sgarlato、Lion Hirth、Oliver Ruhnau、Jonas Peters，Identifying Elasticities in Autocorrelated Time Series Using Causal Graphs，封面2024-09-19，arXiv v1提交2024-09-23；§§2–4、Fig1. 工作论文；图示来自作者的模型与模拟. https://arxiv.org/pdf/2409.15530v1
[^m3]: EI-S06-M3-202605. U.S. Census Bureau，May 2026 Full Report，2026-07-02发布；固定报告第1页核身份，第3–4页核调查定义，第6–9页为四张制造表. https://www.census.gov/manufacturing/m3/historical_data/pressreleases/prel/2026/may26prel.pdf
