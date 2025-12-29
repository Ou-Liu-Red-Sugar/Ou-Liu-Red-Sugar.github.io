---
title: "Presentable n-Categories"
date: 2025-12-29
tags:
  - Presentable Category
  - Higher Category Theory
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
weight: 20
draft: false
description: This note introduces the notion of presentable n-categories and constructs the six-functor formalisms on them.
---

# What is $n\mathsf{Pr}$

Recall that in the last note, we reviewed presentable category theory.
In this section, we introduce presentable $n$-categories.

Let $\mathcal{C} \in \mathsf{CAlg}(\mathsf{Pr}^L_{\kappa})$ be a $\kappa$-presentable symmetric monoidal category.
For any algebra $A \in \mathsf{Alg}(\mathcal{C})$, one can define the $\kappa$-presentable category of (left) modules over $A$ in $\mathcal{C}$,
\[
  \mathsf{Mod}_A(\mathcal{C}).
\]
An object $M \in \mathsf{Mod}_A(\mathcal{C})$ can be regarded as an object $M \in \mathcal{C}$ equipped with an action map
\[
  A \otimes_{\mathcal{C}} M \to M
\]
satisfying unitality and associativity, as expressed by (higher) coherences.

If $A$ is a commutative algebra, then $\mathsf{Mod}_A(\mathcal{C})$ acquires a symmetric monoidal structure such that the “free $A$-modules” functor
\[
  \mathcal{C} \to \mathsf{Mod}_A(\mathcal{C})
\]
is symmetric monoidal.
In fact, this tensor product is given by the geometric realization of the two-sided bar construction:
\[
  M \otimes_A M' \coloneqq \operatorname{colim}\left(
    \cdots \to
    M \otimes_{\mathcal{C}} A \otimes_{\mathcal{C}} M'
    \to
    M \otimes_{\mathcal{C}} M'
  \right).
\]
Thus, many statements in higher algebra require that the tensor product preserves geometric realizations of simplicial objects.
