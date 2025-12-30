---
title: "Presentable n-Categories"
date: 2025-12-29
slug: "presentable-n-categories"
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
description: This note introduces the notion of presentable n-categories.
---

## What is \( n\mathsf{Pr} \)

Recall that in the previous note we reviewed the basic theory of presentable categories.
In this section, we introduce the notion of presentable \(n\)-categories.

Let \(\mathcal{C} \in \mathsf{CAlg}(\mathsf{Pr}^L)\) be a commutative algebra object in \(\mathsf{Pr}^L\) with respect to the Lurie tensor product, and let
\(A \in \mathsf{Alg}(\mathcal{C})\) be a commutative algebra object.
We may then consider the category of \(A\)-modules
\[
  \mathsf{Mod}_A(\mathcal{C}).
\]

It is well known that \(\mathsf{Mod}_A(\mathcal{C})\) carries a natural symmetric monoidal structure,
defined via the colimit of the bar construction.
More precisely, for \(A\)-modules \(M\) and \(N\), consider the simplicial object
\[
  \operatorname{Bar}_A(M,N)_\bullet,
\]
defined as follows:
- \(\operatorname{Bar}_A(M,N)_n \coloneqq M \otimes A^{\otimes n} \otimes N\).
- The face maps
  \[
    d_i \colon \operatorname{Bar}_A(M,N)_n \to \operatorname{Bar}_A(M,N)_{n-1}
  \]
  are given by:
  - \(d_0 = \operatorname{act}_M \otimes \operatorname{id}_{A^{\otimes n-1}} \otimes \operatorname{id}_N\).
  - For \(0 < i < n\), \(d_i\) is induced by the multiplication map
    \[
      m \colon A \otimes A \to A
    \]
    on the \(i\)-th and \((i+1)\)-th factors of \(A^{\otimes n}\).
  - \(d_n = \operatorname{id}_M \otimes \operatorname{id}_{A^{\otimes n-1}} \otimes \operatorname{act}_N\).

The relative tensor product is then defined by
\[
  M \otimes_A N \coloneqq \operatorname{colim}\, \operatorname{Bar}_A(M,N)_\bullet.
\]
This construction equips \(\mathsf{Mod}_A(\mathcal{C})\) with a symmetric monoidal structure.

Moreover, an object \(B \in \mathsf{CAlg}(\mathsf{Mod}_A(\mathcal{C}))\) is equivalently a commutative
algebra object in \(\mathcal{C}\) together with a morphism from \(A\).

In other words, there is a canonical equivalence
\[
  \mathsf{CAlg}(\mathcal{C})_{/A} \simeq \mathsf{CAlg}(\mathsf{Mod}_A(\mathcal{C})).
\]

Now, we regard \(\mathcal{C}\) as a category linear over itself.
Since \(\mathcal{C} \in \mathsf{CAlg}(\mathsf{Pr}^L)\), the tensor product on \(\mathcal{C}\) preserves colimits separately in each variable. In particular, for any commutative algebra object \(A \in \mathsf{CAlg}(\mathcal{C})\), the category \(\mathsf{Mod}_A(\mathcal{C})\) exists in \(\mathsf{Pr}^L\) and the forgetful functor
\[
  \mathsf{Mod}_A(\mathcal{C}) \to \mathcal{C}
\]
preserves colimits. If \(\mathcal{C}\) is \(\kappa\)-presentable, then \(\mathsf{Mod}_A(\mathcal{C})\) is again \(\kappa\)-presentable (by {{< cite LurieHA "Corollary 4.2.3.7" >}}).

Recall that \(\mathsf{Pr}^L_\kappa\) is \(\kappa\)-presentable.
Thus, one can consider \(\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}^L_\kappa)\). And now, one can regard
\(\mathsf{Mod}_A(\mathcal{C})\) as a commutative algebra in
\(\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}^L_{\kappa})\), and hence we have
\(\mathsf{Mod}_A(\mathcal{C}) \in \mathsf{CAlg}(\mathsf{Pr}^L_{\kappa})_{\mathcal{C}/}\).

{{< definition >}}
Let \(\mathcal{C} \in \mathsf{CAlg}(\mathsf{Pr}^L_{\kappa})\), the symmetric monoidal category of *\(\mathcal{C}\)-linear categories* is
\[
\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}_{\kappa}^L).
\]
{{< /definition >}}

{{< theorem id="thm-A-mapsto-ModA(C)" >}}
The functor \(A \mapsto \mathsf{Mod}_A(\mathcal{C})\) yields a fully faithful functor
\[
  \mathsf{CAlg}(\mathcal{C}) \hookrightarrow
  \mathsf{CAlg}(\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}_{\kappa}^L))
\]
whose right adjoint is given by \(\mathcal{D} \mapsto \mathsf{End}_{\mathcal{D}}(1)\).
The displayed map is a map in \(\mathsf{CAlg}(\mathsf{Pr}_{\kappa}^L)\).
{{< /theorem >}}

{{< proof >}}
* Fully faithfulness in {{< cite LurieHA "Corollary 4.8.5.21">}}.
* The identification of the right adjoint in {{< cite LurieHA "Remark 4.8.5.12">}}.
* Everything lives in \(\mathsf{CAlg}(\mathsf{Pr}_{\kappa}^L)\) is checked in {{< cite Aok25 >}},
  by checking that \(\mathcal{D} \mapsto \mathsf{End}_{\mathcal{D}}(1)\) commutes with
  \(\kappa\)-filtered colimits.
{{< /proof >}}

{{< example >}}
Let \(\mathcal{C} = \mathsf{Mod}_A \coloneqq \mathsf{Mod}_A(\mathsf{Sp})\) for some commutative
ring spectra \(A\). Then it follows that for any commutative \(A\)-algebra \(B\) and \(C\),
one has
\[
  \mathsf{Mod}_B \otimes_{\mathsf{Mod}_A} \mathsf{Mod}_C
  = \mathsf{Mod}_{B \otimes_A C}.
\]
Indeed, this is a special case of the commutation of the above functor with colimits.
More generally, the theorem says that the algebraic operations of colimits and tensor
products as performed on the level of categories faithfully reflect the same operations
at the level of rings and modules.
{{< /example >}}

At this point, we have succeeded in pushing all the important algebraic operations to
the level of categories. Now, we replace \(\mathcal{C}\) by \(\mathsf{Pr}^L_{\kappa}\),
then we have a fully faithful functor
\[
  \mathsf{CAlg}(\mathsf{Pr}^L_{\kappa}) \hookrightarrow
  \mathsf{CAlg}\!\left(
    \mathsf{Mod}_{\mathsf{Pr}^L_{\kappa}}(\mathsf{Pr}_{\kappa}^L)
  \right),
  \quad
  \mathcal{C} \mapsto \mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}_{\kappa}^L).
\]

Note that \(\mathsf{Pr}_{\kappa}^L\) with the Lurie tensor product is also a commutative
algebra object in \(\mathsf{Pr}^L_{\kappa}\), so we can consider
\[
  \mathsf{Mod}_{\mathsf{Pr}_{\kappa}^L}(\mathsf{Pr}_{\kappa}^L)
  \in
  \mathsf{CAlg}\!\left(
    \mathsf{Mod}_{\mathsf{Pr}^L_{\kappa}}(\mathsf{Pr}_{\kappa}^L)
  \right).
\]

We denote \(\mathsf{Mod}_{\mathsf{Pr}_{\kappa}^L}(\mathsf{Pr}_{\kappa}^L)\) by \(2\mathsf{Pr}_{\kappa}^L\), since it is a \(\mathsf{Pr}_{\kappa}^L\)-enriched category: for every \(\mathcal{C}, \mathcal{D} \in 2\mathsf{Pr}_{\kappa}^L\), we have
\[
  \mathsf{Hom}_{2\mathsf{Pr}_{\kappa}^L}(\mathcal{C},\mathcal{D})
  \in \mathsf{Pr}_{\kappa}^L
\]
determined as the universal object equipped with a morphism
\[
  \mathsf{Hom}_{2\mathsf{Pr}_{\kappa}^L}(\mathcal{C},\mathcal{D})
  \otimes \mathcal{C} \to \mathcal{D},
\]
which endows \(2\mathsf{Pr}_{\kappa}^L\) with an enrichment over \(\mathsf{Pr}_{\kappa}^L\), and hence with the structure of a \(2\)-category.
We thus get a full embedding
\[
  \mathsf{CAlg}(\mathsf{Pr}_{\kappa}^L)
  \hookrightarrow
  \mathsf{CAlg}(2\mathsf{Pr}_{\kappa}^L).
\]

Note that we have
\[
  2\mathsf{Pr}_{\kappa}^L \in \mathsf{CAlg}(\mathsf{Pr}_{\kappa}^L).
\]
Hence, one can replace \(\mathcal{C}\) in
{{< thmref "thm-A-mapsto-ModA(C)" >}}
by \(2\mathsf{Pr}_{\kappa}^L\), and obtain a full embedding
\[
  2\mathsf{Pr}_{\kappa}^L
  \hookrightarrow
  \mathsf{CAlg}\!\left(
    \mathsf{Mod}_{2\mathsf{Pr}_{\kappa}^L}(\mathsf{Pr}_{\kappa}^L)
  \right).
\]

We denote
\[
  3\mathsf{Pr}_{\kappa}^L
  \coloneqq
  \mathsf{Mod}_{2\mathsf{Pr}_{\kappa}^L}(\mathsf{Pr}_{\kappa}^L).
\]
More generally, one defines inductively
\[
  n\mathsf{Pr}_{\kappa}^L
  \coloneqq
  \mathsf{Mod}_{(n-1)\mathsf{Pr}_{\kappa}^L}(\mathsf{Pr}_{\kappa}^L).
\]
Each of these is itself a symmetric monoidal \(\kappa\)-presentable category. Consequently, we obtain a chain of fully faithful embeddings
\[
  \mathsf{CAlg}(\mathsf{Pr}_{\kappa}^L)
  \hookrightarrow
  \mathsf{CAlg}(2\mathsf{Pr}_{\kappa}^L)
  \hookrightarrow
  \cdots
  \hookrightarrow
  \mathsf{CAlg}(n\mathsf{Pr}_{\kappa}^L)
  \hookrightarrow
  \cdots .
\]

From now on, we take \(\kappa = \aleph_1\) and abbreviate
\[
  n\mathsf{Pr} \coloneqq n\mathsf{Pr}_{\aleph_1}^L.
\]
Thus, we obtain a sequence
\[
  \mathsf{CAlg}(1\mathsf{Pr})
  \hookrightarrow
  \mathsf{CAlg}(2\mathsf{Pr})
  \hookrightarrow
  \cdots
  \hookrightarrow
  \mathsf{CAlg}(n\mathsf{Pr})
  \hookrightarrow
  \cdots .
\]

Taking the colimit of this sequence in \(1\mathsf{Pr} = \mathsf{Pr}_{\omega}^L\), we obtain a presentable category, denoted \(\mathsf{StRing}\), which will be studied in the next note.


## References

<ul class="refs">
  <li id="ref-Aok25">
    <span class="ref-label">[Aok25]</span>
    <strong>Ko Aoki</strong>.
    <em>Higher presentable categories and limits</em>.
    2025.
    <a href="https://arxiv.org/abs/2510.13503">arXiv:2510.13503</a>.
  </li>

  <li id="ref-LurieHA">
    <span class="ref-label">[Lur17]</span>
    <strong>Jacob Lurie</strong>.
    <em>Higher Algebra</em>.
    2017.
    <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.
  </li>
</ul>
