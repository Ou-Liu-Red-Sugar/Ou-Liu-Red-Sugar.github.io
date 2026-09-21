# 现代金融学习方法：把一项研究读到可以复核

所选范围：共同部分 + A

## Teaching instructions
先读 A 分支指定的必读文献，记录版本与所读章节，再做本分支的推演、核算和迁移题.

你是这篇中文学习单元的教学 Agent. 读者具备本包列出的先修：A：回归、时序评价与信息时点. B：条件信息、状态与离散对冲损失. 无共同 QT20–22 硬门槛.
先由读者选择 A 或 B；只实际取得 required_readings_by_branch 中该分支的完整单元并读完，未选分支不强制读取. 核对版本、页码与公式；已有同会话同版完整读取可以复用. 只取得摘要或目录不得声称完成. 指定原件若无法取得，先说明缺失单元和访问结果；只有本包中已经具名核过等价范围的完整数学证明，才可在对应数学步骤内作为替代，并须实际读完且记录替代正文、版本与支持步骤. 论文的样本设置、训练安排、图表结果和作者主张不得以本站概述替代；若所选分支必读仍缺失，就不开始依赖该内容的实质讲解，也不得声称原件已经读过. runtime_reading_log 是你的实际运行记录，交付的空数组不是已读.
本篇任务：先由读者选择 A 或 B，仅启用该支必读. A 重建三层标准化与17/29指标反例；B 说明两对冲工具、Q下零成本、Eq3.8对象冲突与. 244/.22差异. 不把隐藏状态编码能力称统计充分性或训练最优.
先让读者尝试，再按所缺的一步解释，不将全部课文一次复述. 完整证明需要标明每项条件在哪一步用到，练习给出完整解析. 只采用 supplied_inputs 的本篇切片和已链接全量数据，区分教学模型、真实记录、作者论文结果. 图不是证明，模拟不是现实规律；不以预测概率替换定价测度. 禁止从分位数拟造分布或另抽浏览器随机数冒充冻结路径. 最后问：读者只读完这个词条，真的能学明白吗？用迁移题实际判断，明确剩余能力缺口.

数学期望统一写成 \mathbb{E}，条件期望用 \mathbb{E}[X\mid\mathcal{G}]，需要时注明测度 P 或 Q. 保留局部变量的明确定义. 金额与数量使用 K=10^3、M=10^6、B=10^9；表格标明币种、量级与期间，变更量级时同步换算数值. 展示小数最多三位，计算保留原始精度. 直接解释对象、机制与推理；保留影响结论的假设和事实来源，把编辑流程留在记录中. 句末使用英文句点 .，包括定义、命题、证明和解析等标签. 基础定义与推导直接讲内容，出处放在紧邻脚注；来源读取、复审和采用范围等编辑经过留在记录中.

## Required readings and runtime protocol
```json
{
  "export_mode": "public",
  "required_readings": [
    {
      "source_id": "QTDE-KMZ",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://economics.yale.edu/sites/default/files/2024-01/The%20Journal%20of%20Finance%20-%202023%20-%20KELLY%20-%20The%20Virtue%20of%20Complexity%20in%20Return%20Prediction%20%281%29.pdf"
      },
      "required_unit": {
        "locator": "§V.A–C printed487–493 / PDF29–35，脚注33–35、38–41及图7–10",
        "scope": "实证设计、三层预处理、结果与指标完整单元",
        "purpose": "A 支复核设计与 variance-ratio 指标"
      },
      "supports": "§V.A–C 的预测设计与作者样本结果；三层标准化、不含截距、footnote33 发布时间约定、footnote40 variance-ratio R² 必须保留.",
      "branch": "A",
      "title": "The Virtue of Complexity in Return Prediction",
      "authors": [
        "Bryan Kelly",
        "Semyon Malamud",
        "Kangying Zhou"
      ],
      "version": "Journal of Finance 79(1), 459–503, February 2024",
      "fallback_source_ids": []
    }
  ],
  "optional_readings": [
    {
      "source_id": "QTDE-NAGEL",
      "branch": "A",
      "access": {
        "kind": "pdf_full_text",
        "uri": "https://www.nber.org/system/files/working_papers/w34104/w34104.pdf",
        "landing_uri": "https://www.nber.org/papers/w34104",
        "access_note": "本轮独立审查公网请求失败；沿先前已读同版原件记录提供正式PDF入口. 该状态不等于当前Agent已取得，选用后须实际读完指定单元."
      },
      "required_unit": {
        "locator": "§II.A–D、§II.G.1",
        "scope": "线性权重与机制挑战完整采用单元",
        "purpose": "只在选择机制对照时读取"
      },
      "title": "Seemingly Virtuous Complexity in Return Prediction",
      "authors": [
        "Stefan Nagel"
      ],
      "version": "NBER Working Paper 34104, August 2025 frozen version",
      "fallback_source_ids": []
    }
  ],
  "runtime_reading_log": [],
  "supplied_inputs": {
    "competence": "回归、预测误差、时序信息；调用 QT20/QT21/QT22 局部能力.",
    "static_equivalent": "本包所选分支正文、静态表与完整题解；输入和结果保留在 branches.",
    "attachments": [],
    "branches": {
      "A": {
        "actual": [
          1,
          2,
          3
        ],
        "predicted": [
          0,
          1,
          2
        ],
        "past_mean": [
          0,
          0.5,
          1
        ],
        "initial_history": [
          0
        ],
        "variance_R2": 1,
        "SSE_R2_exact": "17/29",
        "MSE": 1
      }
    },
    "authors_results_not_replication": true
  },
  "selection": "共同部分与已选择的 A 分支；先读此范围的指定原文.",
  "required_competence": "回归、预测误差、时序信息；调用 QT20/QT21/QT22 局部能力.",
  "selected_branch": "A"
}
```

## Supplied entry
读论文时，我们很容易先记住一句结论：“复杂模型更好”或“循环网络更适合对冲”. 这篇反过来做：先确定作者让谁预测什么、使用哪些信息、怎样评价，再判断某个数字究竟支持哪一句话. 完成一支后，你应当能够重建一项局部比较，而不是只复述摘要.

本篇有两个独立分支. A 使用预测、回归与时序评价的背景；B 使用条件信息、状态和离散对冲损失的背景，不要求先读完 QT20–QT22. 每次选择一支，共同导言加所选支构成一个学习任务. 两支都保留完整内容，不把同时阅读两篇论文算成一个二十分钟单元.



<a id="qt25-common"></a>
## 共同的核对顺序

先写研究对象与概率/数据身份，再写方法与信息时点，接着记录真实执行过的比较，最后列出还没有验证的外推. 数学近似能力、优化程序找到好解、指定样本的表现、真实交易的表现，是四种不同主张. 一个论证能支撑第一项，并不自动支撑后面三项.

复核不一定意味着从零重跑整篇论文. 准确恢复一个评价公式、识别一项方法约定、算清一张表、指出一个对象不一致，同样能推进理解；但必须把完成的范围说准确.



<a id="qt25-a-object"></a>
## A1. Kelly–Malamud–Zhou：复杂度的比较对象

我们读取 Kelly、Malamud、Zhou 发表在 *Journal of Finance* 79(1) 的 *The Virtue of Complexity in Return Prediction*，只采用 §V.A–C 的完整实证单元和有关脚注/图表. 预测对象是 CRSP 价值加权市场组合的月度超额收益，原始信息来自15个预测量，包含一项市场收益滞后. 不是本文 BusEq 小实验，也不是输入越多就越好的普遍定理. [^kmz]

论文把原始信息向量 $G_t\in\mathbb R^{15}$ 转成随机 Fourier 特征. 对独立抽取的 $\omega_i\sim N(0,I)$，构造一对

$$
\sin(\gamma\omega_i^TG_t),\qquad
\cos(\gamma\omega_i^TG_t).
$$

实证基准取 $\gamma=2$. 每对特征来自同一个随机投影；增加特征数可以在保留原始信息的同时增大函数表示空间. 它不是又取得了更多月份的信息. 论文以 $c=P/T$ 表示复杂度，其中 $P$ 是特征数，$T$ 是训练月数，研究 $T=12,60,120$ 和最高 $P=12000$. 这里的 $P$ 不是概率测度.

例如同样 $P=120$，在12个月训练窗中 $c=10$，在120个月窗中 $c=1$. 前者有更多参数相对于观测值，不等于拥有更丰富的经济历史. 插值边界附近为什么会不稳定，要同时看训练样本、特征结构和正则化，而不能只看网络尺寸.

<a id="qt25-a-preprocessing"></a>
## A2. 三层标准化不能合成一句话

论文使用三个不同的尺度步骤. 第一，收益按过去12个月的未中心化二阶矩尺度标准化；脚注34说明这里用二阶矩而非先减样本均值的短窗波动，因为短窗均值很不稳定. 第二，15个原始预测量按扩展历史窗口的标准差标准化，初始至少需要36个月. 第三，在每次回归拟合前，训练 RFF 和当前待预测 RFF 又共同按这次训练样本中的标准差缩放，这是脚注39的步骤. [^kmz-pre]

因此，“所有变量只在当前训练窗口里标准化”不是这篇论文的方法. 过去12个月收益尺度、原始预测量的扩展尺度、RFF 的当轮训练尺度，各自处于不同位置. 原文脚注35还明确回归不含截距；不能把 QT20 中带截距、训练窗口中心化的小 ridge 实验换个标题就叫作复现.

脚注33提供另一类关键约定：月份 $t$ 的通胀通常在 $t+1$ 发布，但作者沿所用数据库的日期约定，把产生官方统计的价格信息视作月份 $t$ 的信息. 他们报告了剔除通胀后的附录对照. 这里应分别记下“作者的时间约定”和“官方发布时间”，不能把论文的约定直接当作研究系统在月末已收到正式发布值的证据. 本支没有重新取得或验证全部附录结果.

<a id="qt25-a-design"></a>
## A3. 怎样生成一条样本外比较

对固定的随机特征集合、特征数 $P$、收缩参数 $z$ 和训练窗 $T$，每个原点只用此前 $T$ 对训练观测拟合，再用当期特征预测下一月. 论文用 $\log_{10}z=-3,\ldots,3$ 等设置比较收缩程度. 较小的 $P$ 取自同一组已生成特征的前缀，避免把“特征数量变化”和“换了一套完全不同的特征”混在一起.

原点 $t$ 的预测记为 $\widehat\beta_t^TS_t$，相应择时收益记为 $\widehat\beta_t^TS_tR_{t+1}$. 一个是预测量，一个是用该预测量形成的模型策略收益，两者不能使用同一个评价词而不说明分母. 作者对随机特征的生成重复1000次，再平均表现统计量；这处理的是随机特征造成的变异，不是1000个独立市场历史.[^kmz-design]

Figures 7–10 在该数据和研究设计下展示作者观察到的复杂度、收缩与样本外表现关系：插值附近的不稳定、高复杂度区间的恢复，以及相应择时表现. 可据此解读的范围限于这一设定；新增预测量、费用、容量和实时执行属于另外的问题.

可选的 Nagel 2025 对照从高维预测的核权重和时间结构重新解释这类结果. 读它时应问“作者改变了哪一种机制解释或比较”，而不是先决定谁赢. 形如 $k^TK^{-1}y$ 的线性权重未必非负，也未必加总为一，不能只因出现“权重”就当作概率加权平均. 这个对照不是完成本支的硬先修. [^nagel]

<a id="qt25-a-metric"></a>
## A4. 同名的样本外 R²，可能回答不同问题

论文脚注40将实证 $R^2$ 定义为一减去“样本外预测误差的方差 / 样本外实际收益的方差”. 采用相同中心化方差分母时，可以写成

$$
R^2_{\mathrm{var}}=1-\frac{\sum(e_t-\bar e)^2}{\sum(y_t-\bar y)^2},
\qquad e_t=y_t-\widehat y_t.
$$

它与相对于逐原点历史均值基线的 SSE 比值

$$
R^2_{\mathrm{base}}=1-\frac{\sum(y_t-\widehat y_t)^2}
{\sum(y_t-\widehat y_t^{\mathrm{base}})^2}
$$

不是同一量. 我们用完全构造的三点例亲手区分. 初始历史只有0，随后实际值依次为1、2、3，预测为0、1、2；每个原点的过去均值基线分别为0、$1/2$、1.

预测误差恒为1，所以 MSE 为1，但中心化误差方差为零，$R^2_{\mathrm{var}}=1$. 相对于历史均值基线，误差平方和为 $1+(3/2)^2+2^2=29/4$，模型误差平方和为3，因此

$$
R^2_{\mathrm{base}}=1-\frac3{29/4}=\frac{17}{29}.
$$

两者并不矛盾. 中心化方差消掉了常数误差，而平方误差仍保留它. 这个例子的作用是恢复论文实际使用的指标：若要评价绝对预测水平，还必须另外检查偏差或 MSE，不能从 $R^2_{\mathrm{var}}=1$ 推出逐点预测无误.

<div data-experiment-slot="VIEW-QT25-A-RESEARCH"></div>

<a id="qt25-a-exercise"></a>
## A5. 迁移与解析

有人准备“复现”论文：使用 BusEq、带截距 ridge、随机打乱月份做交叉验证，并用 expanding-mean SSE $R^2$ 得到一个数. 他能否将结果写成“与 KMZ 的 Figure7 不一致，因此推翻原论文”？

不能. 预测对象、回归截距、三层尺度、时序切分、随机特征和评价公式都已经改变. 合理的第一步是列对照表，注明它是一个相关但不同的实验；若要复核论文的具体比较，则固定原目标、数据身份和可得时点、三层尺度、RFF 生成与前缀、训练窗、收缩参数、重复规则及评价公式. 还要将作者附录声称与自己真正重跑的结果分开.

最终可以得到一条有边界的结论，例如“我验证了同名 R² 的两个定义不能互换”，而不是凭一项方法不同的实验跳到“复杂度理论普遍成立或普遍失败”.

[^kmz]: Bryan Kelly、Semyon Malamud、Kangying Zhou，*The Virtue of Complexity in Return Prediction*，*Journal of Finance* 79(1), 459–503, 2024，§V.A–C，印刷 pp.487–493／PDF29–35；[发表版全文](https://economics.yale.edu/sites/default/files/2024-01/The%20Journal%20of%20Finance%20-%202023%20-%20KELLY%20-%20The%20Virtue%20of%20Complexity%20in%20Return%20Prediction%20%281%29.pdf).
[^kmz-pre]: 同文 §V.A，脚注33–35；§V.C 脚注39. 三种标准化、时间约定与不含截距分别据这些位置识别.
[^kmz-design]: 同文 §V.B–C，式(20)、步骤(i)–(iv)、脚注38–41及 Figures7–10.
[^nagel]: Stefan Nagel，*Seemingly Virtuous Complexity in Return Prediction*，NBER Working Paper 34104，August 2025，§II.A–D、§II.G.1 为可选对照；[作者工作论文入口](https://www.nber.org/papers/w34104).
