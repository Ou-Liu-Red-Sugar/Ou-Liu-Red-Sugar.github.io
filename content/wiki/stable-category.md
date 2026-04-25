---
title: "Stable category"
slug: "stable-category"
date: 2026-04-25
draft: false
math: true
categories:
  - Stable homotopy theory
tags:
  - stable
  - triangulated
  - spectrum
aliases:
  - "Stable ∞-category"
  - "Stable ∞-cat"
description: >
  A category in which the suspension functor is an equivalence and finite
  limits coincide with finite colimits — the natural replacement for
  triangulated categories.
---

## Introduction

The point of stability is that **fibre and cofibre sequences become the same
data**. In a stable category one can build a long exact sequence in either
direction and the choice is forced — there is no "missing" octahedral axiom
to postulate, no shift functor whose square has to be remembered. Cones are
functorial; mapping fibres glue. The triangulated structure on the homotopy
category is a *theorem*, not a definition.

The motivating example is spectra. Spectra are the natural home for stable
phenomena precisely because the suspension equivalence $\Sigma$ is built
in. Stable categories generalise this: any pointed category in which finite
pushouts and pullbacks agree behaves like a category of spectra.

A consequence worth absorbing: every stable category is automatically
enriched in spectra, and morphism objects $\operatorname{map}(X, Y)$ are
spectra rather than anima. The triangulated homotopy category is a shadow.

## Body

A **stable category** is a category $\mathcal{C}$ such that:

1. $\mathcal{C}$ has a zero object,
2. $\mathcal{C}$ admits all finite limits and finite colimits, and
3. a square in $\mathcal{C}$ is a pullback iff it is a pushout.

Equivalently, $\mathcal{C}$ is pointed, has all pushouts, and the suspension
functor $\Sigma\colon \mathcal{C} \to \mathcal{C}$ is an equivalence.

### Examples

- The category of spectra $\mathsf{Sp}$.
- $\mathsf{Mod}_R$ for $R$ a ring spectrum.
- The derived category $\mathsf{D}(\mathcal{A})$ of an abelian category,
  viewed as a stable category.
- Quasi-coherent sheaves $\mathsf{QCoh}(X)$ on a scheme.

### Inside $\mathsf{Pr}^L$

A [[Presentable category]] that is also stable is called a *presentable
stable category*; the resulting full subcategory
$\mathsf{Pr}^L_{\mathrm{st}} \subset \mathsf{Pr}^L$ is itself presentable
and inherits a symmetric monoidal structure (the Lurie tensor product).
$\mathsf{Pr}^L_{\mathrm{st}}$ is canonically equivalent to
$\mathsf{Mod}_{\mathsf{Sp}}(\mathsf{Pr}^L)$.

Within $\mathsf{Pr}^L_{\mathrm{st}}$:

- A [[Compactly generated category]] that is stable corresponds, via
  Ind-completion, to a small idempotent-complete stable category.
- A [[Compactly assembled category]] that is stable is exactly a *dualizable*
  object of $\mathsf{Pr}^L_{\mathrm{st}}$.

### Stable vs triangulated

The homotopy category $h\mathcal{C}$ of a stable category is canonically
**triangulated**, but $\mathcal{C}$ carries strictly more data: cones are
functorial in the diagram (not just up to non-unique isomorphism), the
octahedral axiom is automatic, and homotopy-coherent diagrams of fibre
sequences glue. A classical (i.e. 1-categorical) triangulated category is a
shadow of a stable one; it is not, in general, possible to recover the
stable category from its homotopy category alone.

## Pointers

- Lurie, *Higher Algebra*, §1.1
- Lurie, *Higher Topos Theory*, §5.5

See also: [[Presentable category]], [[Compactly generated category]],
[[Compactly assembled category]].
