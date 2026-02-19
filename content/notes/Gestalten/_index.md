---
title: "Gestalten"
draft: false
math: true
menu:
  main:
    parent: "notes"
    weight: 15
description: >
  Notes on Gestalten and higher-categorical geometry following Scholze's Geometry and Higher Category Theory.
---

These notes are organized around the framework introduced in *Geometry and Higher Category Theory*, a series of lectures by Peter Scholze (Winter 2025/26). The goal of that work is to develop a workable theory of geometric objects in a higher-categorical setting, in which the classical duality between geometry and algebra is fully extended and internalized.

**The core motivation.** A fundamental principle, made precise by Scholze as Idea 1.6, is the following:

> Any good $(\infty$-)category of geometric objects (in which one can take all colimits) should be an $\infty$-topos.

This suggests that the correct framework for geometry is not to start with a site and sheafify, but to look for categories that are intrinsically topos-like. A key piece of evidence for this philosophy comes from *Tannakian reconstruction*: the functor

$$
\{\text{qcqs schemes}\} \longrightarrow \{\text{symmetric monoidal presentable abelian categories}\}, \quad X \longmapsto \mathsf{QCoh}(X)
$$

is fully faithful. In other words, a scheme is completely determined by its category of quasi-coherent sheaves. This suggests that one should be able to *define* geometric objects by specifying what their categories of sheaves look like, rather than by explicit geometric data.

**From Tannaka to 1-affineness.** Gaitsgory promoted this observation into a definition. An algebraic prestack $X$ is called *1-affine* if the $\infty$-category of quasi-coherent sheaves of categories on $X$, denoted $1\mathsf{Pr}_X$ (or $\mathsf{ShvCat}(X)$), is equivalent to the category of modules over the symmetric monoidal $\infty$-category $D(X) \coloneqq \mathsf{QCoh}_X$. That is, we require an equivalence

$$
1\mathsf{Pr}_X \xrightarrow{\sim} \mathsf{Mod}_{D(X)}(1\mathsf{Pr}).
$$

For affine schemes this holds by definition, and Gaitsgory showed it holds for a wide class of algebraic stacks. The idea is that 1-affineness is precisely the condition under which $X$ is "seen" by its sheaf theory — a categorical analogue of the Tannakian reconstruction above.

**Stefanich rings and Gestalten.** Scholze's lectures push this idea further by iterating: one considers not just categories of sheaves, but sheaves of categories of categories, and so on. This leads to the iterative construction

$$
\mathsf{StRing} := \operatorname{colim}\bigl(1\mathsf{Pr} \to 2\mathsf{Pr} \to 3\mathsf{Pr} \to \cdots\bigr),
$$

where $1\mathsf{Pr} \coloneqq \mathsf{Pr}^L_{\aleph_1}$ denotes the category of $\aleph_1$-compactly generated presentable $\infty$-categories, $n\mathsf{Pr}$ denotes the category of presentable $(\infty, n)$-categories, and the transition functors raise the categorical dimension. A *Stefanich ring* is a commutative algebra object in this colimit. The structure is self-referential: $\mathsf{StRing}$ is, in an appropriate sense, an object of itself, which is precisely the phenomenon discussed in the opening lecture under the heading of "a category of categories that contains itself."

The category of *Gestalten* is then defined as

$$
\mathsf{Gest} := \bigl(\mathrm{Ind}_{\aleph_1}(\mathsf{StRing}^{n\text{-}\acute{e}t})\bigr)^{\mathrm{op}},
$$

where $\mathsf{StRing}^{n\text{-}\acute{e}t}$ denotes the subcategory of $n$-étale maps between Stefanich rings, and $\mathrm{Ind}_{\aleph_1}$ is the $\aleph_1$-ind-completion. The term *Gestalten* is German for "shapes" or "forms," emphasizing that these objects are not merely stacks in the classical sense, but genuinely geometric objects in their own right, arising naturally from the higher algebra without any additional input.

This setup aims to unify several flavors of geometry — algebraic, analytic, and beyond — under a single higher-categorical umbrella. The framework is furthermore flexible enough to accommodate condensed mathematics, analytic rings, and almost rings as concrete examples of the general theory.

The material here is developed progressively, beginning with presentable $\infty$-categories and their $\kappa$-compact generation, moving through six-functor formalisms and Stefanich rings, and culminating in the construction and study of Gestalten.

---
For background material from higher algebra that will be used throughout these notes — including algebraic patterns, operads, $\mathcal{O}$-monoidal categories, and $\mathcal{O}$-algebras — see
{{< pageref "notes/HA.md" "Basic Concepts on Higher Algebra" >}}.

## Contents

{{< section_index
    mode="both"
    sort="weight"
    show_summary="true"
    show_date="true"
>}}
