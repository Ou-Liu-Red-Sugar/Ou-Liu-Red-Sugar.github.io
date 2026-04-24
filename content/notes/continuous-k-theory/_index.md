---
title: "Continuous K-theory"
date: 2026-04-24
draft: false
math: true
tags:
  - K-theory
  - higher algebra
  - dualizable categories
  - compactly assembled categories
categories:
  - Mathematics
ShowToc: true
TocOpen: false
weight: 25
description: >
  Notes on continuous (Efimov) K-theory: from classical connective and non-connective
  algebraic K-theory, through compactly assembled categories, to Efimov's universality
  theorem and the sheaf formula.
---

These notes record some elementary observations about continuous K-theory (also
called Efimov K-theory), largely following {{< cite "sheaves-on-manifolds" >}}
and {{< cite "bonn-k" >}}.

## K-theory as a universal homology theory

For an ordinary finite set $S$ we measure its size by its cardinality $|S|$.
The familiar identity
\[
    |S \cup T| = |S| + |T| - |S \cap T|
\]
hides a non-trivial fact: once we fix $|\{*\}| = 1$, the operation $|-|$ is
uniquely determined. Every finite set is built from a point by finitely many
disjoint unions and quotientings along subsets, and the identity above simply
records that $|-|$ is compatible with these assembly operations.

In homotopy theory we routinely derive such excision properties. The derived
analogue of the category of sets $\mathsf{Set}$ is the category of anima
$\mathsf{An}$, and finite anima play the role of derived finite sets. To make
the analogy precise we introduce the notion of a **homology theory**: a functor
\[
    H\colon \mathsf{An}^{\mathrm{fin}} \to \mathcal{C}
\]
sending homotopy pushouts of finite anima to homotopy pushouts in $\mathcal{C}$,
\[
    H(A \cup_C B) \simeq H(A) \cup_{H(C)} H(B).
\]
Every finite anima is built from the point by finitely many pushouts, so $H$ is
determined by its value $H(*) \in \mathcal{C}$ — exactly as cardinality is
determined by $|\{*\}| = 1$.

One way to summarise this: a *homology theory* is a form of counting that
respects excision. The specific shape of excision depends on what we are
counting and how.

From this perspective, K-theory quantifies algebraic and geometric objects,
but its counting values are no longer integers — they are anima. Anima carry
far richer algebraic structure than numbers, and that extra structure is what
lets one propagate computations from known cases to new ones.

## Algebraic K-theory

This principle extends to stable categories. Every idempotent-complete small
stable category $\mathcal{C}$ has an algebraic K-theory spectrum attached to
it. Writing $\mathsf{Cat}^{\mathrm{perf}}$ for the category of such small
stable categories, K-theory is a functor
\[
    K\colon \mathsf{Cat}^{\mathrm{perf}} \to \mathsf{Sp}.
\]
For a ring $R$ we set $K(R) \coloneqq K(\mathsf{Mod}^{\mathrm{perf}}(R))$, the
K-theory of the category of perfect complexes over $R$.

In practice, however, we frequently care more about **dualizable** stable
categories. Every dualizable stable category is presentable — that is, big.
The Ind-completion functor
\[
    \mathsf{Ind}\colon \mathsf{Cat}^{\mathrm{perf}} \hookrightarrow \mathsf{Cat}^{\mathrm{dual}}
\]
sends a small $\mathcal{C}$ to the category $\mathsf{Ind}(\mathcal{C})$ obtained
by freely adjoining filtered colimits (equivalently, arbitrary direct sums). It
is fully faithful. But trying to count a big category produces a familiar
obstruction:

{{< example title="Eilenberg swindle" >}}
Let $\mathcal{C}$ be a small category with finite colimits. If there is a
finite-colimit-preserving endofunctor $F\colon \mathcal{C} \to \mathcal{C}$ with
$F \sqcup \mathrm{id}_{\mathcal{C}} \simeq F$, then $K(\mathcal{C}) \simeq 0$.
{{< /example >}}

The reason is transparent. The map $f$ induced by $F$ on K-theory satisfies
$f + \mathrm{id} = f$, hence $\mathrm{id} = 0$. For a presentable stable
$\mathcal{C}$ all small colimits exist, so one can take
$F = \bigoplus_{\mathbb{N}} \mathrm{id}_{\mathcal{C}}$; this $F$ satisfies
$F \sqcup \mathrm{id} \simeq F$, and the swindle says $K(\mathcal{C}) = 0$.

## Continuous K-theory

And yet in practice we constantly meet categories that are big but carry a
topological continuity — sheaves of spectra on a locally compact Hausdorff
space, nuclear modules in the sense of Clausen–Scholze, and so on. These
categories sit far outside the reach of classical K-theory.

This is the setting for **continuous** (Efimov) K-theory. The central idea is
to extend K-theory from small categories to dualizable stable categories; in
the stable setting these are exactly the **compactly assembled** categories. A
compactly assembled category need not have many compact *objects*, but it
always has enough compact *morphisms*: every object is an $\mathbb{N}$-colimit
along compact morphisms — in other words, every object is **compactly
exhaustible**. Examples abound in geometry (sheaves on a locally compact
Hausdorff space), and this class is the natural stage on which algebra meets
topology.

What does continuous K-theory count? Classical K-theory counts compact objects
of a category (for a ring: finitely generated projective modules). The
Eilenberg swindle forbids that direct approach for big categories. The trick
is to count not compact objects themselves but the *residue* they leave behind
inside a Verdier cofibre sequence
\[
    \mathcal{C}
    \xrightarrow{\;\hat{Y}\;}
    \mathrm{Ind}(\mathcal{C}^{\omega_1})
    \longrightarrow
    \mathrm{Ind}\!\left(\mathrm{Calk}^{\mathrm{cont}}(\mathcal{C})\right),
\]
where $\hat{Y}$ is a fully faithful embedding and the **continuous Calkin
category** $\mathrm{Calk}^{\mathrm{cont}}(\mathcal{C})$ is the category of
compact objects of the Verdier quotient
$\mathrm{Ind}(\mathcal{C}^{\omega_1}) / \mathcal{C}$ — the world of
$\omega_1$-compact objects with the original category quotiented out. At the
level of morphisms this quotient divides by compactly assembled maps,
\[
    \mathrm{hom}_{\mathrm{Calk}^{\mathrm{cont}}(\mathcal{C})}(pX, pY)
    \simeq \mathrm{hom}_{\mathcal{C}}(X, Y)
    \big/
    \mathrm{hom}_{\mathcal{C}}^{\mathrm{ca}}(X, Y),
\]
in strict analogy with the Calkin algebra $\mathcal{B}(H) / \mathcal{K}(H)$ in
functional analysis: bounded operators modulo compact operators. Since
$\mathcal{C}^{\omega_1}$ has countable colimits, the Eilenberg swindle forces
the middle term's K-theory to vanish, and continuous K-theory is determined
by the quotient:
\[
    K^{\mathrm{cont}}(\mathcal{C})
    \simeq \Omega K\!\left(\mathrm{Calk}^{\mathrm{cont}}(\mathcal{C})\right).
\]
This relative counting neatly evades the swindle and produces a non-trivial
invariant.

The excision picture here is more striking than in the classical case: it
becomes a genuinely **geometric** property. For a locally compact Hausdorff
space $X$ and a compactly assembled coefficient category $\mathcal{C}$,
\[
    K^{\mathrm{cont}}\!\left(\mathsf{Shv}(X;\mathcal{C})\right)
    \simeq \Gamma_c\!\left(X,\, K^{\mathrm{cont}}(\mathcal{C})\right).
\]
The topology of $X$ is fully encoded: however one decomposes $X$ by open
covers, the K-theory spectrum glues sheaf-theoretically along that
decomposition. Continuous K-theory is, on the nose, a **cosheaf** on $X$.
Specialising to $X = \mathbb{R}^n$,
\[
    K^{\mathrm{cont}}\!\left(\mathsf{Shv}(\mathbb{R}^n;\mathcal{C})\right)
    \simeq \Omega^n K^{\mathrm{cont}}(\mathcal{C}),
\]
so the topology of the base is faithfully reflected in the K-theory spectrum.

The two questions we opened with — *what are we counting, and how* — thus
have clean answers in the continuous setting: the residue of a compactly
assembled category relative to its compact objects, with the counting rule
dictated by the topology of the underlying space.

More deeply, Efimov proved the following universal property: restriction
along $\mathsf{Ind}$ is an equivalence
\[
    \mathrm{Loc}^{\mathrm{cont}}(D)
    \xrightarrow{\;\sim\;}
    \mathrm{Loc}(D),
\]
so every classical localizing invariant (K-theory, topological Hochschild
homology, etc.) extends *uniquely* to a continuous localizing invariant on
compactly assembled categories. This grants continuous K-theory the status
of a universal homology theory, echoing the philosophical discussion at the
start of this page.

The plan of these notes is to follow this thread: we begin with classical
connective and non-connective algebraic K-theory and build up to Efimov's
central result — the universal property of continuous K-theory and the
sheaf formula.

## Contents

{{< section_index mode="pages" sort="weight" show_summary="true" >}}

## References

<ul class="refs">
<li id="ref-sheaves-on-manifolds"><strong>A. Krause, T. Nikolaus, P. Pützstück</strong>. <em>Sheaves on Manifolds</em>. 2024. <a href="https://philpuetzstueck.gitlab.io/documents/sheaves-on-manifolds.pdf">PDF</a>.</li>
<li id="ref-efimov-k-theory"><strong>A. I. Efimov</strong>. <em>K-theory and localizing invariants of large categories</em>. 2025. <a href="https://arxiv.org/abs/2405.12169">arXiv:2405.12169</a>.</li>
<li id="ref-ramzi-dualizable"><strong>M. Ramzi</strong>. <em>Dualizable presentable $\infty$-categories</em>. 2024. <a href="https://arxiv.org/abs/2410.21537">arXiv:2410.21537</a>.</li>
<li id="ref-bonn-k"><strong>K. Hilman, J. McCandless</strong>. <em>Lecture Notes on Algebraic K-Theory</em>. 2024. <a href="https://sites.google.com/view/jonasmccandless/introduction-to-algebraic-k-theory">Page</a>.</li>
<li id="ref-lurie-htt"><strong>J. Lurie</strong>. <em>Higher Topos Theory</em>. Ann. Math. Stud. 170, Princeton Univ. Press, 2009. <a href="https://www.math.ias.edu/~lurie/papers/HTT.pdf">PDF</a>.</li>
<li id="ref-lurie-ha"><strong>J. Lurie</strong>. <em>Higher Algebra</em>. <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.</li>
<li id="ref-kerodon"><strong>J. Lurie</strong>. <em>Kerodon</em>. Online, 2018–. <a href="https://kerodon.net">kerodon.net</a>.</li>
</ul>
