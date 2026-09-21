{
  "title": "自动做市：报价曲线、实际成交与费用记账",
  "description": "从集中区间库存推导一次带费用的有限交换、成交均价与限价余量；费用增长和池内L单独核算.",
  "layout": "entry",
  "notebookid": "zh-m29",
  "math": true,
  "body_format": "markdown",
  "translationKey": "zh-m29"
}

<a id="m29-purpose"></a>
## 一、AMM 报价与库存路径

自动做市商将交换条件写成随库存变化的价格曲线. 一笔交易沿曲线消耗库存，后续成交价格随之变化；有限数量的成交金额需要沿整段路径计算.

本文以Uniswap v3白皮书和v1.0.0 core代码为机制基准. 数值例按连续实数计算一次交换；合约实现另有整数舍入、tick间距、价格界与回调结算条件.[^M29-whitepaper][^M29-code][^M29-math]

<a id="m29-inventory"></a>
## 二、真实库存与虚拟库存

令 $P$ 表示一单位X的Y价格，流动性为 $L$，允许提供流动性的价格范围为 $[P_a,P_b]$. 在当前价格位于区间内部时，v3可以用虚拟储备

$$
x_v=\frac{L}{\sqrt P},\qquad y_v=L\sqrt P
$$

描述局部曲线，因而 $x_vy_v=L^2$. 但某个有限区间头寸真正需要的代币是

$$
\begin{aligned}
x&=L\left(\frac1{\sqrt P}-\frac1{\sqrt{P_b}}\right),\\
y&=L\left(\sqrt P-\sqrt{P_a}\right).
\end{aligned}
$$

虚拟储备是表达价格曲线的变量，不是池子另外收到的代币；真实库存则把区间之外不提供的流动性扣掉. 用真实的 $x,y$ 直接套 $xy=L^2$ 会错，正确的平移关系是

$$
\left(x+\frac{L}{\sqrt{P_b}}\right)
\left(y+L\sqrt{P_a}\right)=L^2.
$$

这也解释了集中流动性的设计：只在一段价格范围内承诺交换，可以用较少实际库存支持该区间的局部流动性；代价是出了区间以后，头寸不会继续在外面提供同样的双币交换. [^M29-whitepaper]

设 $L=1000,P=1,P_a=0.81,P_b=1.21$，平方根为1、0.9、1.1. 初始虚拟X、Y各1000；真实X为 $1000(1-1/1.1)\approx90.909$，真实Y为100. **本默认例只有这一位活跃LP，因此头寸L等于全池active L.** 后面单独的费用分配例会明确换成多位LP的环境.

<a id="m29-swap"></a>
## 三、50Y 输入的区间内交换

固定手续费率 $\phi=0.003$，协议分成取零，费用不自动复投进流动性. 用户送入50Y，其中0.15Y是费用，真正推动曲线的是49.85Y. 令 $s=\sqrt P$，区间内 $y_v=Ls$，因此

$$
\begin{aligned}
\Delta y&=50(1-0.003)=49.85,\\
s_1&=s_0+\Delta y/L=1+49.85/1000,\\
P_1&=s_1^2\approx1.102,\\
X_{\rm out}&=L\left(\frac1{s_0}-\frac1{s_1}\right)\\
&\approx47.483.
\end{aligned}
$$

最后的边际价格约1.102 Y/X，但这笔交易的**含费平均执行价**是 $50/47.483\approx1.053$ Y/X. 沿曲线看，后面买到的X越来越贵；这个平均价概括的是整段交换. [^M29-math]

从微积分也能看出差别：在活跃区间内 $dy=-P\,dx$，边际价格是瞬时的比率，而有限成交量来自这条关系在交易路径上的积分. 这里直接用两个端点的虚拟库存差算出X输出，等价于做完整个积分.

成交后真实X约43.426，真实Y为149.85，另有费用0.15Y. 检查守恒：用户拿走47.483X，加池内43.426X，恢复初始90.909X；用户50Y中49.85进入曲线库存，0.15进费用账.

<a id="m29-limit"></a>
## 四、150Y 输入与用户价格上限

这一次仍用相同初始状态，但用户最多愿意把价格推到1.21，恰好也等于当前区间上界. 要把 $\sqrt P$ 从1推到1.1，只需要净输入 $1000(1.1-1)=100$ Y. 因此含费输入的上限是

$$
\begin{aligned}
Y_{\rm consumed}&=100/(1-0.003)\approx100.301,\\
\mathrm{Fee}&\approx0.301,\\
Y_{\rm unused}&=150-Y_{\rm consumed}\approx49.699.
\end{aligned}
$$

到上限时，X输出90.909，真实库存X为0、Y为200，费用另计. 未用输入约49.699Y. 含费平均执行价以实际消耗的100.301Y除以X输出，约为1.103Y/X.

| 单次从相同初始状态出发 | 指定Y输入 | 实际消耗Y | 费用Y | 未用Y | 得到X | 最后边际价 |
|---|---:|---:|---:|---:|---:|---:|
| 区间内成交 | 50 | 50 | 0.15 | 0 | 47.483 | 1.102 |
| 达到用户价格上限 | 150 | 100.301 | 0.301 | 49.699 | 90.909 | 1.21 |

两行各从相同初始库存独立计算.

价格上限和区间边界在本例数值相同，但规则职责不同. **达到本次用户的price limit就停止，即使外面还有别人的活跃流动性.** 若用户事先允许更远的价格、首先碰到的只是一个已初始化tick，代码才会先按该tick的净流动性变化更新active L，再用新的L处理剩余量. 不能跨tick之后仍拿旧L外推，更不能因为存在另一LP而越过这次用户的限价.[^M29-code][^M29-math]

<a id="m29-fees"></a>
## 五、活跃流动性与 LP 费用份额

白皮书把fee growth描述为每单位流动性的累计费用；在其式(6.9)的印刷表达与这个单位有差异时，应回到固定代码看实际含义. v1.0.0的Pool.swap先处理协议分成，再用 `feeAmount × Q128 / state.liquidity` 更新累计量. $Q128$ 是定点数刻度；忽略数值编码后，经济关系就是**分给LP的费用除以当时全池活跃L**. [^M29-whitepaper][^M29-code]

现在另开一个独立分配例：池active L=1000，其中我们考察的头寸L=100，其他LP有900；合计可分LP费用为3Y. 于是

$$
\Delta g=3/1000=0.003\ \text{Y/单位L},\qquad
\text{该头寸所得}=100\Delta g=0.3\ \text{Y}.
$$

头寸离开活跃区间后，停止分配该区间外新增的交换费；此前累计费用仍归属于该头寸. [^M29-current]

<a id="m29-explore"></a>
## 六、曲线、库存与现金账

<div data-experiment-slot="EXP-MHIJ-M29-AMM-SWAP-01"></div>

将指定输入从50Y增至150Y，可观察边际价格、含费平均执行价和用户限价. 触及1.21后，实际消耗停止，未用输入出现；费用卡另以L100占全池L1000计算分配.

长期LP回报还取决于价格路径、累计费用、成本和比较基准. 持币基准与自融资再平衡基准给出不同的相对损益.

<a id="m29-exercises"></a>
## 七、交换、限价与费用检验

**题一：开头边际价为1，为什么50Y得不到50X？**

解析：先扣0.15Y费用，且49.85净输入沿曲线推高价格；后面的X不是都按开头价格卖给你. 完整端点差给47.483X；只用1乘整个输入同时忽略了费用和价格路径.

**题二：150Y指定输入的那一行，平均价为什么不能用150除90.909？**

解析：只有100.301被消耗，49.699没有用于成交. 含费平均价的分子是实际花掉的代币，未用额不是成本，更不是手续费.

**题三：在1.21之外出现另一位LP，原150Y订单能否自动继续？**

解析：不能，1.21也是用户价格上限. 只有另一个允许更远价格的指令，才可能先跨tick、更新active L、再继续处理剩余数量. 区间外有流动性不等于用户授权越价.

**题四：池active L=1000，某LP L=100，LP费用合计3Y，为什么该LP不能得3Y？**

解析：它只提供其中十分之一的活跃L；每L费用为0.003Y，所得0.3Y. 分母应是全池活跃L，不是该LP自己的L. 费用单独累计，也没有自动变成额外L.

**题五：上界时真实X为零，虚拟X仍为1000/1.1，这些虚拟X能继续交给交易者吗？**

解析：不能. 虚拟储备是表达曲线的平移变量，不是可交付资产；本区间真实X已用完. 把虚拟储备当余额，会同时违反库存守恒、区间约束和用户限价.

[^M29-whitepaper]: **Uniswap Labs contributors，Uniswap v3 Core**，March 2021. [原文](https://app.uniswap.org/whitepaper-v3.pdf). 定位：§2–3.2集中流动性/区间；§6.1–6.3库存、手续费及区间内交换；PDF p6式6.9的每单位L口径. 采用范围：集中区间的真实/虚拟储备与有限交换；手续费增长公式以固定代码作局部单位校正.

[^M29-code]: **Uniswap Labs contributors，Uniswap v3-core v1.0.0 — UniswapV3Pool.swap**，git tag v1.0.0. [原文](https://raw.githubusercontent.com/Uniswap/v3-core/v1.0.0/contracts/UniswapV3Pool.sol). 定位：固定tag v1.0.0 UniswapV3Pool.sol swap L596–788，特别while/价格目标、feeGrowth除active L、跨initialized tick更新L. 采用范围：用户限价停止、活动L、fee与跨tick顺序的原始代码.

[^M29-math]: **Uniswap Labs contributors，Uniswap v3-core v1.0.0 — SwapMath.sol**，git tag v1.0.0. [原文](https://raw.githubusercontent.com/Uniswap/v3-core/v1.0.0/contracts/libraries/SwapMath.sol). 定位：固定tag v1.0.0 SwapMath.sol全文；amountRemainingLessFee、target与feeAmount. 采用范围：一步精确输入中净输入/fee和target限制的原始实现.

[^M29-current]: **Uniswap Labs contributors，Concentrated Liquidity**，current docs retrieved 2026-09-21. [原文](https://developers.uniswap.org/docs/get-started/concepts/liquidity-providers/concentrated-liquidity). 定位：How concentrated liquidity works；Active liquidity；Ticks全文；v3/v4定位. 采用范围：当前集中流动性概念说明.

<script src="/notebook/labs/m-hij/reader-adapter.js" defer></script>
