---
title: "Compactly generated category"
slug: "compactly-generated-category"
date: 2026-04-25
draft: false
math: true
categories:
  - Category theory
tags:
  - compactly generated
  - Ind-completion
  - presentable
aliases:
  - "Compactly generated"
  - "ω-presentable"
  - "ℵ₀-presentable"
description: >
  A presentable category that is generated under filtered colimits by its
  compact (i.e. ℵ₀-compact) objects. Equivalently, the Ind-completion of a
  small idempotent-complete category with finite colimits.
---

## Introduction

Compactly generated categories are the **tame end of the presentable
spectrum**. Every object is a filtered colimit of compact ones, and most
homological invariants — K-theory, Hochschild homology, cyclic homology —
are determined by the small subcategory of compact objects. The idea: a
"big" category is recovered, up to filtered colimits, from a small skeleton
of finite/perfect/dualizable atoms.

Examples are everywhere in algebra and topology: spectra (compact = finite
spectra), modules over a ring spectrum (compact = perfect), the derived
category of a ring (compact = perfect complexes). The fact that all of
homotopy theory's "large" categories of interest are compactly generated is
why the theory of K-theory, traces and dimensions is as workable as it is.

## Body

A presentable category $\mathcal{C}$ is **compactly generated** (or
$\aleph_0$-presentable) if it is generated under filtered colimits by its
compact objects $\mathcal{C}^{\omega} \subset \mathcal{C}$.

Equivalently:

\[
    \mathcal{C} \;\simeq\; \mathsf{Ind}(\mathcal{C}^{\omega}),
\]

so a compactly generated $\mathcal{C}$ is recovered as the Ind-completion of
its small subcategory of compact objects. In the classical case, this
recovers the notion of a *locally finitely presentable category* in the
sense of Adámek–Rosický.

Examples include:

- The derived category $\mathsf{D}(R)$ of a ring $R$ (compact = perfect
  complexes).
- The stable category of spectra $\mathsf{Sp}$ (compact = finite spectra).
- $\mathsf{Mod}_R$ over a ring spectrum (compact = perfect modules).

Many naturally occurring categories — sheaves on a locally compact Hausdorff
space, for instance — are *not* compactly generated, but the slightly weaker
notion of [[Compactly assembled category]] still applies.

### Relation to other notions

- A compactly generated category is automatically a
  [[Presentable category]] (with $\kappa = \aleph_0$).
- A [[Compactly assembled category]] is, by Lurie–Clausen, a retract in
  $\mathsf{Pr}^L$ of a compactly generated one.
- In the stable setting, a [[Stable category]] that is compactly generated
  is in particular dualizable in $\mathsf{Pr}^L_{\mathrm{st}}$, with dual
  $\mathsf{Ind}((\mathcal{C}^{\omega})^{\mathrm{op}})$.

## Pointers

- Lurie, *Higher Topos Theory*, §5.5.7
- Krause–Nikolaus–Pützstück, *Sheaves on Manifolds*, §2

See also: [[Presentable category]], [[Compactly assembled category]],
[[Stable category]].
