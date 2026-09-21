{
  "title": "单位经济、成本结构与经营杠杆",
  "description": "用CAT历史桥解释变化，再用独立教材模型推导经营杠杆的精确有限变化；产能台阶显式改变条件.",
  "layout": "entry",
  "notebookid": "zh-bf17",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-bf17"
}

收入和利润将销量、价格、产品组合、投入成本和共同费用汇总为总额. Caterpillar 的历史驱动桥分解这些因素对年度变化的影响；OpenStax Company A/B 的线性模型则在给定价格、成本和产品组合下计算销量变化对利润的影响.

<a id="CASE-BFDE-CAT-BF17-20260921"></a>
<a id="bf17-historical-bridge"></a>
## 1. 历史收入与利润桥

Caterpillar FY2025 将 2024 年收入 64,809 M 美元接到 2025 年 67,589. 按其披露类别，完整桥为：[^bf17-cat]

| Sales and Revenues Comparison／收入桥原类别 | 影响， M 美元 |
|---|---:|
| 2024 Sales and revenues／期初年度收入 | 64,809 |
| Sales Volume／销售量相关影响 | +3,389 |
| Price Realization／价格实现 | −817 |
| Currency／汇率 | +45 |
| Financial Products／金融产品 | +163 |
| 2025 Sales and revenues／期末年度收入 | 67,589 |

收入增加2,780，经营利润由13,072降至11,151. 公司披露的八项经营利润变化为：

| Consolidated Operating Profit Comparison／经营利润桥原类别 | 影响， M 美元 |
|---|---:|
| 2024 Operating profit | 13,072 |
| Sales Volume | +1,218 |
| Price Realization | −817 |
| Manufacturing Costs | −2,148 |
| SG&A / R&D | −336 |
| Currency | −32 |
| Financial Products | +49 |
| Restructuring | −85 |
| Other | +230 |
| 2025 Operating profit | 11,151 |

销量相关影响增加利润1,218，制造成本、价格及其他费用的负向影响超过正向影响，经营利润合计减少1,921.

<a id="bf17-driver-definitions"></a>
## 2. 驱动项目的计量定义

Caterpillar 的 Definitions 说明：收入桥中的 Sales Volume 包含数量与新产品推出的影响；经营利润桥里的同名项目还包含产品组合. Price Realization 包含地域价格组合；Manufacturing Costs 包含按产量调整后的变动成本变化，以及期间制造成本的绝对变化. Financial Products 的汇率等影响又留在其自身类别中. [^bf17-def]

两项 Sales Volume 效果之比 $1,218/3,389\approx35.94\%$ 混合了数量、新产品及产品组合影响. 单位边际贡献率还需要纯数量、单位售价和单位变动成本.

<a id="bf17-cvp"></a>
## 3. 线性成本模型与经营杠杆

假定只有一种产品，或固定产品组合；单位价格为 $p$，单位变动成本为 $v$，销量为 $q$，决策期间及相关产量范围内的固定成本为 $F$. 销售额为 $S=pq$，贡献利润为 $C=(p-v)q$，经营利润为 $OI=C-F$. 贡献利润覆盖固定成本后形成经营利润.

<strong>经营杠杆系数</strong>在基点利润非零时为 $DOL=C/OI$. 把价格、单位变动成本、组合及固定成本保持不变，只让销量变化比例 $x$，新的贡献利润就是 $C(1+x)$，所以利润增量为 $Cx$. 因此：

$$\frac{\Delta OI}{OI}=\frac{C}{OI}x=DOL\frac{\Delta S}{S}$$

该等式在上述线性模型及固定参数下对有限变化精确成立；令变化趋于零，也得到基点的利润对销量弹性. [^bf17-cvp]

OpenStax 的教学公司 A/B 采用以下输入，单位：USD.

| 模型项目 | Company A | Company B |
|---|---:|---:|
| Sales／销售额 | 250,000 | 315,000 |
| Variable costs／变动成本 | 102,000 | 105,000 |
| Contribution margin／贡献利润 | 148,000 | 210,000 |
| Fixed costs／固定成本 | 63,000 | 125,000 |
| Operating income／经营利润 | 85,000 | 85,000 |
| 由上述原始输入计算的DOL | 1.741 | 2.471 |

两者利润相同，但 B 有更大的贡献利润和固定成本. 销售上升时，有更多新增贡献利润越过已覆盖的固定成本；下降时，同一固定成本又会使利润降得更快.

| 在固定参数内的销量／销售变化 | A新利润 | A利润变化 | B新利润 | B利润变化 |
|---|---:|---:|---:|---:|
| +10% | 99,800 | +17.412% | 106,000 | +24.706% |
| −20% | 55,400 | −34.824% | 43,000 | −49.412% |

A 的 −20% 情景为 $148,000\times0.8-63,000=55,400$. 利润变动率也可由 $\frac{148,000}{85,000}\times(-20\%)\approx-34.824\%$ 得到. 表中系数与结果均按所列原始输入计算.

<a id="bf17-boundaries"></a>
## 4. 盈亏平衡与产能台阶

接近盈亏平衡时，基点利润趋近零，DOL 的绝对值增大. 当 $OI=0$ 时，DOL 和利润相对变动率均无定义；仍可直接计算利润金额.

给 Company A 增加一个条件：销量高于基准15%时新增10,000固定成本. 销量增加20%时，原线性式给 $148,000\times1.2-63,000=114,600$；跨台阶后模型利润为104,600，较基点增长约23.059%. 原固定参数 DOL 对应约34.824%，差异来自固定成本参数已经改变.

售价、折扣、产品组合及投入方式的变化也会改变模型结果. 将变化落实到对应的价格、成本或固定投入参数后，可用后续经营资料检验.

<a id="bf17-experiment"></a>
## 5. 历史桥与成本模型实验

<div data-experiment-slot="EXP-BF17-HISTORICAL-VS-STRUCTURAL"></div>

<a id="bf17-exercise"></a>
## 6. 计算与模型迁移

<strong>计算任务.</strong>Company B 在固定参数下销量下降 20%，请同时用贡献利润直接重算和 DOL 等式求结果. 然后说明要把同样的模型用于 Caterpillar，还缺哪些输入.

<strong>解析.</strong> $210,000\times0.8-125,000=43,000$，利润下降42,000，相对原85,000下降约49.412%. 由 $DOL=210,000/85,000\approx2.471$ 计算时，保留分数精度可得同一结果. 迁移到 Caterpillar，需补充销量单位、纯价格、单位变动成本、产品组合、相关产量范围及固定成本，并分离报告桥中的组合与新产品影响.

<strong>解释任务.</strong>Caterpillar 收入上升而利润下降，与 DOL 模型矛盾吗？

<strong>解析.</strong> DOL 式保持价格、单位成本和固定成本不变；Caterpillar 的历史桥同时包含价格、制造成本等变化. 对照公司的驱动定义，才能确定线性模型中需要改变哪些参数.

[^bf17-cat]: Caterpillar FY2025 10-K，MD&A pp31–35，Sales and Revenues Comparison 与 Consolidated Operating Profit Comparison；[SEC 原件](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231.htm)，[经营利润原图](https://www.sec.gov/Archives/edgar/data/18230/000001823026000008/cat-20251231_g4.jpg). 两期为2024→2025，单位 M 美元，
[^bf17-def]: 同一原件 Definitions pp36–38：Manufacturing Costs、Price Realization、Sales Volume、Financial Products.
[^bf17-cvp]: OpenStax, *Principles of Accounting, Volume 2: Managerial Accounting* (2019)，§3.5 的 Operating Leverage 与虚构 Company A/B 输入. [公开全节](https://openstax.org/books/principles-managerial-accounting/pages/3-5-calculate-and-interpret-a-companys-margin-of-safety-and-operating-leverage). 有限变化恒等式由本篇列明的线性假设推导；产能台阶为另设教学变式.

<script defer src="/notebook/labs/bf-de/reader-adapter.js"></script>
