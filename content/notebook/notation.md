{
  "title": "Notation and units",
  "layout": "notation",
  "math": true,
  "translationKey": "notebook-notation"
}

These notes share the conventions below. Expectation is written as $\mathbb{E}$, and quantities use K, M and B for scale.

## Probability and statistics

| Notation | Meaning | Convention |
|---|---|---|
| $\mathbb{E}[X]$ | Expectation | Use blackboard bold for the expectation operator. |
| $\mathbb{E}[X\mid\mathcal{G}]$ | Conditional expectation | $\mathcal{G}$ is the conditioning information. |
| $\mathbb{E}_P[X],\ \mathbb{E}_Q[X]$ | Expectation under a measure | P usually denotes the physical measure; specify the pricing measure Q. |
| $\widehat{\mathbb{E}}[X]$ | Estimated expectation | The hat denotes a sample or numerical estimate. |
| $P(A),\ Q(A)$ | Probability of an event | Identify the measure being used. |
| $\operatorname{Var}(X),\ \operatorname{Cov}(X,Y)$ | Variance and covariance | Set operator names upright. |
| $\rho_{XY}$ | Correlation | Specify the sample or distribution. |
| $\mathbf{1}_A$ | Indicator of event A | Equals 1 on A and 0 otherwise. |
| $\Omega,\ \mathcal{F},\ (\mathcal{F}_t)$ | Sample space, events and filtration | The filtration increases with time. |
| $X_t,\ W_t$ | Stochastic process and Brownian motion | State the time domain, measure and process assumptions. |
| $\mu,\ \sigma,\ \Sigma$ | Mean or drift, volatility, covariance matrix | State the time scale and the model-specific definition. |

## Markets, contracts and portfolios

| Notation | Meaning | Convention |
|---|---|---|
| $t,\ T,\ \Delta t$ | Current time, terminal time, time step | Match the units of interest rates and time. |
| $S_t$ | Underlying or spot price | State currency and underlying unit. |
| $F_{t,T}$ | Forward or futures quote | Specify the contract type and maturity. |
| $K,\ C_t,\ P_t$ | Strike, call price, put price | State contract units and multiplier; define P in context. |
| $V_t,\ B_t$ | Contract or portfolio value, cash account | Specify the numeraire and cash-account dynamics. |
| $R,\ r$ | Return or interest rate | Define simple return, log return or annualized rate on first use. |
| $w_i,\ q_i,\ N$ | Portfolio weight, quantity, notional or sample size | Define N locally and state contract multipliers. |
| $A=L+E$ | Assets = liabilities + equity | E denotes equity; use consistent scope and reporting dates. |

## Amounts and quantities

| Notation | Meaning | Convention |
|---|---|---|
| K | $10^3$ | For example, 250 K shares = 250,000 shares. |
| M | $10^6$ | For example, USD 4,105 M; use “USD M” in the table header. |
| B | $10^9$ | For example, USD 12.5 B = USD 12,500 M. |
| USD / CNY / EUR | US dollar / renminbi / euro | State currency separately from scale; use USD/share for per-share values. |
| bp | $10^{-4}=0.01\%$ | One basis point; used for differences in rates or yields. |

Display at most three decimal places and omit unnecessary trailing zeros. Retain the original precision in calculations. Distinguish fractions from percentages, for example $0.125=12.5\%$.

Operators have a shared notation; variables are defined on first use. Local meanings may reuse a letter: $E$ can denote equity or a state space, while expectation is $\mathbb{E}$. Strike $K$ and cash account $B_t$ are mathematical variables; scale labels K, M and B are plain text. State the correspondence when a source uses different notation.
