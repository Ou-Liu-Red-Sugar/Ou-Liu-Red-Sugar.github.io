---
title: "Presentable category"
slug: "presentable-category"
date: 2026-04-25
draft: false
math: true
categories:
  - Category theory
tags:
  - presentable
  - accessible
  - locally presentable
aliases:
  - "Presentable ∞-category"
  - "Locally presentable category"
  - "Pr^L"
description: >
  An (∞,1)-category that admits all small colimits and is generated under
  colimits by an essentially small set of κ-compact objects for some regular
  cardinal κ.
---

## Introduction

Presentability is the right size condition for category theory: it is large
enough to contain "all the categories that come up in nature" — modules over
a ring spectrum, sheaves on a site, parametrised spectra, anima, etc. — yet
small enough that the **adjoint functor theorem** applies and that
$\mathrm{Hom}$-functors are controlled by an essentially small skeleton.

The intuition is that a presentable category is *generated* by a small piece
(its $\kappa$-compact objects) under filtered colimits. Everything else is
recovered as a limit of these atoms. This is what makes the category "tame":
universal constructions exist, adjoint functors exist as soon as one side
preserves the right kind of (co)limit, and almost all the categories of
homotopy theory live here.

## Body

A category $\mathcal{C}$ is **presentable** iff:

1. $\mathcal{C}$ admits all small colimits.
2. There is a regular cardinal $\kappa$ and an essentially small set of
   $\kappa$-compact objects that generate $\mathcal{C}$ under
   $\kappa$-filtered colimits.

Equivalently (Lurie / Adámek–Rosický in the classical case),
$\mathcal{C}$ is presentable iff it is an accessible localization of a
presheaf category $\mathsf{Fun}(\mathcal{D}^{\mathrm{op}}, \mathsf{An})$ for
some small $\mathcal{D}$.

The category of presentable categories with colimit-preserving functors is
$\mathsf{Pr}^L$. It carries the Lurie tensor product, and is itself complete
and cocomplete.

Two important refinements live inside $\mathsf{Pr}^L$:

- A [[Compactly generated category]] is a presentable category whose
  $\kappa$-compact generators can be taken with $\kappa = \aleph_0$.
- A [[Compactly assembled category]] is a presentable category that is a
  retract in $\mathsf{Pr}^L$ of a compactly generated one — equivalently, a
  *dualizable* object of $\mathsf{Pr}^L_{\mathrm{st}}$ in the stable case.

For the 1-categorical (i.e. classical) version of these notions, see
Adámek–Rosický.

## Pointers

- Lurie, *Higher Topos Theory*, §5.5
- Adámek–Rosický, *Locally Presentable and Accessible Categories*

See also: [[Compactly generated category]], [[Compactly assembled category]],
[[Stable category]].
