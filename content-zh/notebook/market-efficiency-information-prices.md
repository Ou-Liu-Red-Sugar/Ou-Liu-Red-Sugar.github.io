{
  "title": "市场有效性与信息处理：从公开事件到可检验的证据",
  "description": "按size加权合约量重建公告前流量代理，核对信息窗口、回报基准与分组标准化，避免把关联当收益.",
  "layout": "entry",
  "notebookid": "zh-m23",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m23"
}

<a id="m23-information"></a>
## 一、市场有效性的可检验含义

市场有效性以信息集为条件. 弱式采用过去价格等交易信息，半强式采用全部公开信息，强式还包括私人信息；检验的是指定信息能否系统改善经适当风险调整的回报. [^MEFG-MIT-EFFICIENCY]

检验还需要正常回报的基准. 发现公告后股票上涨，可能是意外好消息，也可能是共同市场变化；发现某信号与未来回报有关，也可能是风险补偿而不是可免费取得的超额收益. 因而检验信息效率常与检验回报模型交织在一起.

统计关系转为可执行收益，还受处理时间、买卖价差、费用、借券和资本约束影响. 以下研究用公告前的期权流量解释公告附近的股票回报.

<a id="case-mefg-kit-2025"></a>
<a id="m23-study"></a>
## 二、观察对象与可识别机制

采用Eberbach、Uhrig-Homburg和Yu的 *Information Processing in the Option Market Around Earnings and Macroeconomic Announcements*，2025-03-07工作稿. 其美国股票期权样本覆盖2004年1月至2017年10月，结合LiveVol成交／报价、OptionMetrics、I/B/E/S及宏观公告资料. 它研究公告附近的期权流量和随后股票价格关系. [^MEFG-KIT-2025]

第一步已经有测量问题：一笔成交由买方还是卖方主动发起，是根据报价附近的成交分类等规则推断的，并非直接观察交易者真实动机. 买入put可能为对冲，也可能为方向判断；卖出put可能有不同组合背景. 作者构造的是可观察信息处理的**代理量**.

图形阅读也要看时间. 原文§4.1.1、Figure 1（PDF第19页）按事后消息分类比较公告周围的异常流量. 这能帮助描述消息与交易之间的关系，但事后才知道的好／坏消息标签，不能被放进公告前的策略输入.

<a id="m23-volume"></a>
## 三、合约份数加权的 TOI

KIT §3.4.1式(2)用每笔成交的方向符号与**成交合约份数size**计算
$$
TOI=\frac{\sum_i \operatorname{sign}_i\,\operatorname{size}_i}
{\sum_i\operatorname{size}_i}.
$$
买方发起的call和卖方发起的put取正；卖方发起的call和买方发起的put取负. 它是方向性合约成交量的标准化差. [^MEFG-KIT-2025]

下面用一个合成例复算TOI. 四行表示按发起方向分类后的**合约份数**：

| 分类 | 成交合约份数 | 符号 | 带符号合约量 |
|---|---:|---:|---:|
| 买方发起call | 30 | +1 | +30 |
| 卖方发起call | 10 | −1 | −10 |
| 买方发起put | 25 | −1 | −25 |
| 卖方发起put | 35 | +1 | +35 |
| 合计 | 100 | — | 30 |

所以 $TOI=(30+35-10-25)/100=0.30$. 若对应的非事件基线均值为0.05，异常OI为 $0.30-0.05=0.25$. 原文的基线使用公告前指定非公告日窗口；本例把其均值0.05作为教学输入.

同一组数据的put／call总量比是
$$
\frac{25+35}{30+10}=\frac{60}{40}=1.5.
$$
“put量更多”和“方向代理量为正”没有矛盾. 前者不区分发起方向，后者区分并按合约量加权.

再想一个更小的核对：若上表恰好来自四笔不同大小的成交，每笔各算一票会有两个正、两个负，未加权结果为0；按size加权才是0.30. 只给笔数而不给每笔规模，就没有足够输入复算论文的这个变量.

<a id="m23-timing"></a>
## 四、信息时点与事件窗口

以公告日为 $\tau$，本篇采用原文的几组不同窗口：

| 环节 | 相对时间 | 用途 |
|---|---|---|
| 市场beta估计 | $\tau-300$ 至 $\tau-46$ | 形成异常回报的市场模型基准 |
| 非事件流量基线 | $\tau-40$ 至 $\tau-10$ 中相应非公告日 | 计算平常的TOI均值 |
| 公告前流量 | 例如 $\tau-1$ | 作为随后价格反应的解释变量 |
| 公告／消息 | $\tau$ | 确定事件，具体盘中盘后对齐沿原研究 |
| 公告回报窗口 | 例如 $[0,1]$ | 度量公告附近价格反应 |

这些窗口不能仅因为都在同一张图上，就当成同一时点已经知道的信息. 预测者在 $\tau-1$ 不知道事后实现的公告回报，也不能用完整未来样本重新估计当时的beta. [^MEFG-KIT-2025]

原文的市场调整累计回报也不是随便把股票涨幅叫alpha. 用 $G_i=\prod(1+r_{i,t})$、$G_m=\prod(1+r_{m,t})$、$G_f=\prod(1+r_{f,t})$ 表示指定窗口的累计总增长量，其比较结构为
$$
CAR=(G_i-G_f)-\widehat\beta_i(G_m-G_f).
$$
$\widehat\beta_i$由上述更早的估计窗口得到. CAR衡量指定窗口内个股超额增长量相对于估计市场暴露的偏离.

<a id="m23-regression"></a>
## 五、标准化系数与回报单位

Table 2（印刷p22／PDF第23页）将公告窗口回报与公告前异常OI、宏观日指标及其交互联系. 用简写表示其中一部分：
$$
CAR=\alpha+\beta_1OI+\beta_2MD
+\beta_3(OI\times MD)+\text{控制项}+\varepsilon.
$$
$MD$ 是相应宏观公告日指示变量. 作者在宏观／非宏观两组分别标准化相关变量；因此表中系数不能直接作为未经标准化的OI每增加1时，真实回报百分点会增加多少. [^MEFG-KIT-2025]

| 原文比较 | 采用值 | 正确阅读 |
|---|---:|---|
| 第3列OI系数 | $3.3\times10^{-3}$ | 该列指定基组与标准化下的系数 |
| 第3列OI×宏观日交互 | $25\times10^{-3}$ | 同一回归中宏观日斜率增量 |
| 两者之和 | $28.3\times10^{-3}$ | 作者解释的宏观日对应系数 |
| 第1列合并样本OI系数 | $7.8\times10^{-3}$ | 另一列合并回归的参照 |

作者报告的系数关系为$(3.3+25)\times10^{-3}=28.3\times10^{-3}$，与合并样本系数$7.8\times10^{-3}$之比约3.628. 这些系数作用于分组标准化变量；还原原始收益单位需相应组内尺度，将关联转为策略回报还需交易价格、持有规则和成本.

期权流量与随后股票反应的关联支持作者关于信息处理的解释，但该设计不识别单笔交易者动机，也不能单独判定内幕信息来源. 公开信息处理、风险暴露和交易需求都可能生成相似流量；区分这些机制需要额外识别.

<a id="m23-explore"></a>
## 六、图形与回归证据

<div data-experiment-slot="EXP-MEFG-M23-INFORMATION"></div>

合约量图分别显示四类正负贡献，计算TOI、异常OI与put/call量比；时间图显示估计、基线、流量、公告和回报窗口. Figure 1和Table 2可从研究卡打开原文.

总合约量为0时，TOI无定义；call总量为0时，put/call量比无定义. 原研究另有样本筛选要求，使用这些变量复现研究时需同步采用.

<a id="m23-exercises"></a>
## 七、证据范围与替代解释

**题一：上表只有四行，为什么不能算成“二正二负，TOI为0”？**

**解析.** 论文按size加权，四行分别汇总30、10、25、35份合约. 带符号量为30，总量100，得0.30. 即使恰好来自四笔成交，也不能丢掉不同size.

**题二：put／call比1.5与TOI=+0.30各告诉我们什么？**

**解析.** 前者只有call与put总量，不含发起方向；后者对四类方向加权. 两者都不是交易者心理的直接测量，也不能凭这两个数建立必赚信号.

**题三：把Figure 1事后好消息组的标签加入 $\tau-1$ 策略，会犯什么错？**

**解析.** 该标签依赖后来公告，属于未来信息. 用它训练或执行公告前规则，会把事后解释误当成当时可用的预测信息.

**题四：$28.3\times10^{-3}$和$7.8\times10^{-3}$的比约3.628，能否说宏观日策略收益高3.63倍？**

**解析.** 不能. 它比较原文指定回归和标准化口径下的系数；不是同资本、同成本的两套交易收益. 要作策略比较，须另定义价格、仓位、信息、持有期和可执行费用.

**题五：一条公开消息之后价格仍缓慢变化，足以推翻半强式有效吗？**

**解析.** 单一观察不足. 先确认何时消息真正公开、市场基准、风险补偿、样本选择及交易成本；再检验可重复的异常结果. 否则既可能漏掉真正信息处理，也可能把正常风险或测量偏差错当成低效率.

[^MEFG-MIT-EFFICIENCY]: MIT OpenCourseWare，*15.433 Investments, Class 22: Market Efficiency*，Spring 2003. [原文](https://ocw.mit.edu/courses/15-433-investments-spring-2003/4491842813dd9719421bce96c282b39c_1543322marketefficiency.pdf). 本篇定位：Full physical pp1–11; p2 information sets, pp4–6 event/cost/limits, p9 framing.

[^MEFG-KIT-2025]: Jelena Eberbach, Marliese Uhrig-Homburg, Xiaoxiao Yu，*Information Processing in the Option Market Around Earnings and Macroeconomic Announcements*，Manuscript 2025-03-07; no journal status claimed. [原文](https://derivate.fbv.kit.edu/download/Information_Processing_in_the_Option_Market%202025.pdf). 本篇定位：§2.2 proxy; §3 full data/variables: physical pp11–18；§4.1.1, Figure1 physical p19；§4.2 including Tables2–3, physical pp21–26 before §4.3; Table2 p23；§3.4.1 Eq(2)–(3): physical pp14–15.

<script src="/notebook/labs/m-efg/reader-adapter.js" defer></script>
