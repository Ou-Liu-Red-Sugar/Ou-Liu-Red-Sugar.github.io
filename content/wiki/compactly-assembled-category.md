---
title: "Compactly assembled category"
slug: "compactly-assembled-category"
date: 2026-04-25
draft: false
math: true
categories:
  - Category theory
tags:
  - compactly assembled
  - dualizable
  - presentable
aliases:
  - "Compactly assembled"
  - "Dualizable presentable category"
description: >
  A presentable category that is a retract in Pr^L of a compactly generated
  one. In the stable setting, equivalent to being dualizable in Pr^L_st.
---

## Introduction

Compactly assembled categories are the **right generality for modern
applications** where compact generation fails but the category still feels
"finite-dimensional". The motivating example: $\mathsf{Shv}(X)$ for $X$
locally compact Hausdorff is not compactly generated, yet behaves like a
compactly generated category for nearly every K-theoretic and trace-theoretic
purpose.

The intuition: an object of a compactly assembled category is built out of
*compactly exhaustible* atoms — sequences whose transition maps are
"compact" in a precise sense. Compactness is now a property of *morphisms*,
not just objects. In the stable world, this generality is forced on us:
compactly assembled is precisely *dualizable* in $\mathsf{Pr}^L_{\mathrm{st}}$,
which is what we need for K-theory, traces, and the symmetric monoidal
structure to behave.

## Body

A presentable category $\mathcal{C}$ is **compactly assembled** if it is
generated under colimits by *compactly exhaustible* objects — objects of the
form $\operatorname*{colim}_n X_n$ along a sequence
$X_0 \to X_1 \to \cdots$ in which every transition map is a **compact
morphism**.

A compact morphism $f\colon X \to Y$ is one for which, for every filtered
colimit $Z \simeq \operatorname*{colim}_i Z_i$, the natural square

\[
\begin{array}{ccc}
\operatorname*{colim}_i \operatorname{Hom}(Y, Z_i) & \to & \operatorname*{colim}_i \operatorname{Hom}(X, Z_i) \\
\downarrow & & \downarrow \\
\operatorname{Hom}(Y, Z) & \to & \operatorname{Hom}(X, Z)
\end{array}
\]

is a pullback.

### Lurie–Clausen characterisation

For a presentable $\mathcal{C}$, the following are equivalent:

1. $\mathcal{C}$ is compactly assembled.
2. There is a regular cardinal $\kappa$ such that $\mathcal{C}$ is
   $\kappa$-presentable and the colimit functor
   $k\colon \mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}$ has a left
   adjoint $\hat y$.
3. $\mathcal{C}$ is a retract in $\mathsf{Pr}^L$ of a
   [[Compactly generated category]].
4. Filtered colimits commute with all small limits in $\mathcal{C}$.

In the stable world, $\mathcal{C} \in \mathsf{Pr}^L_{\mathrm{st}}$ is
compactly assembled iff it is a **dualizable** object of
$\mathsf{Pr}^L_{\mathrm{st}}$.

### Why care

- $\mathsf{Shv}(X)$ for $X$ locally compact Hausdorff is compactly assembled
  but not in general compactly generated.
- Efimov K-theory extends K-theory from compactly generated to compactly
  assembled categories, recovering "classical" K-theory of categories like
  $\mathsf{Shv}(X, \mathsf{Sp})$.
- In $\mathsf{Pr}^L_{\mathrm{ca}}$, dualizability gives an analogue of
  finite-dimensional vector spaces, with internal Hom and a meaningful trace.

### Relation to other notions

- Every [[Compactly generated category]] is compactly assembled.
- Every compactly assembled category is a [[Presentable category]],
  $\aleph_1$-presentable in fact.
- A [[Stable category]] is compactly assembled iff it is dualizable in
  $\mathsf{Pr}^L_{\mathrm{st}}$.

## Pointers

- Krause–Nikolaus–Pützstück, *Sheaves on Manifolds*, §2.3
- Ramzi, *Dualizable presentable ∞-categories*, [arXiv:2410.21537](https://arxiv.org/abs/2410.21537)
- Efimov, *K-theory and localizing invariants of large categories*,
  [arXiv:2405.12169](https://arxiv.org/abs/2405.12169)

See also: [[Presentable category]], [[Compactly generated category]],
[[Stable category]].
