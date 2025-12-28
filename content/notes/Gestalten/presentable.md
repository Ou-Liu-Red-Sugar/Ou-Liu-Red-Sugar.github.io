---
title: "Presentable Categories and Ind-Completion"
date: 2025-12-28
tags:
  - Presentable Catgeory
  - Higher Category Theory
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
draft: false
description : This note reviews the basic theory of presentable categories. We focus on κ-compact objects, Ind-completions, accessible categories, and their role in organizing large categories via filtered colimits.
---



## Definition

{{< definition >}}
Let $\kappa$ be a regular cardinal (for example $\kappa = \omega$ or $\kappa = \omega_1$).

1. A category $\mathcal{I}$ is called **$\kappa$-filtered** if for any $\kappa$-small category $\mathcal{K}$ and any functor
   $F\colon \mathcal{K} \to \mathcal{I}$,
   there exists an extension $F^{\rhd} \colon \mathcal{K}^{\rhd} \to \mathcal{I}$.
   When $\kappa = \omega$, we simply call a $\kappa$-filtered category a filtered category.

2. Let $\mathcal{C}$ be a category admitting small colimits.
   An object $X \in \mathcal{C}$ is called **$\kappa$-compact**
   if for any $\kappa$-filtered diagram $(Y_i)_{i \in \mathcal{I}}$, there is an isomorphism of mapping spaces
   \[
       \operatorname{Hom}_{\mathcal{C}}(X,\operatorname{colim}_i Y_i)
       \simeq
       \operatorname{colim}_i \operatorname{Hom}_{\mathcal{C}}(X,Y_i).
   \]
   Denote by $\mathcal{C}^{\kappa} \subset \mathcal{C}$ the full subcategory spanned by all $\kappa$-compact objects.
   When $\kappa = \omega$, we simply call $\kappa$-compact objects compact objects.
{{< /definition >}}

{{< proposition id="prop-An-filter" >}}
In the anima category $\mathsf{An}$,
$\kappa$-filtered colimits commute with $\kappa$-small limits.
{{< /proposition >}}

{{< proof >}}
The proof can be found in {{< cite HTT "Proposition 5.3.3.3" >}},
and a model-independent version of the proof can be found in
{{< cite naivecat "Corollary 9.9.3" >}}.
In fact, this statement also holds for general anima.

In fact, the underlying intuition is relatively simple; we take the case of $\kappa$-small products as an example.
Consider
\[
    \operatorname{colim}_{i \in I} \prod_{j \in J} X_{ij}
    \to
    \prod_{j \in J} \operatorname{colim}_{i \in I} X_i.
\]
Here $I$ is a $\kappa$-filtered category and $J$ is a $\kappa$-small category.
We note that

* A point in the anima on the left-hand side actually consists of the following data:
  there exists an $i \in I$, and for each $j \in J$ a chosen point in $X_{ij}$.

* For each $j \in J$, choose some $i(j) \in I$,
  and then choose a point in $X_{i(j),j}$.

Since $I$ is a $\kappa$-filtered category, for the functor $J \to I$,
we can extend it to $J^{\rhd} \to I$.
This means that in $I$ we can always choose an upper bound of the $i(j)$.
Thus, a point in the anima on the right-hand side is equivalent to choosing some
$\operatorname{sup}_{j \in J} i(j) \in I$,
and then making the choices for each $j \in J$,
which yields the isomorphism.
{{< /proof >}}

From the proposition above, we can easily obtain the following corollary.

{{< corollary id="cor-compact-colim-retract" >}}
Any $\kappa$-small colimit of $\kappa$-compact objects and any retract of a $\kappa$-compact object are $\kappa$-compact.
{{< /corollary >}}

{{< proof >}}
Let $(X_i)_{i \in I}$ be some $\kappa$-compact objects in $\mathcal{C}$,
where $I$ is a $\kappa$-small category.
We verify that $\operatorname{colim}_{i \in I} X_i$ is $\kappa$-compact.
For this, it suffices to note that
\[
\operatorname{Hom}_{\mathcal{C}}(\operatorname{colim}_i X_i,-)
\simeq
\operatorname{lim}_i \operatorname{Hom}_{\mathcal{C}}(X_i,-).
\]
For the case of retracts, let $X$ be a retract of a $\kappa$-compact object $X'$.
Then $\operatorname{Hom}_{\mathcal{C}}(X,-)$ is a retract of
$\operatorname{Hom}_{\mathcal{C}}(X',-)$.
Since a retract of an isomorphism is still an isomorphism,
the result follows.
{{< /proof >}}

Now consider the presheaf category
\[
    \mathsf{PShv}(\mathcal{C})
    = \mathsf{Fun}(\mathcal{C}^{\operatorname{op}}, \mathsf{An}),
\]
and denote the Yoneda embedding by
\[
    y \colon \mathcal{C} \longrightarrow \mathsf{PShv}(\mathcal{C}).
\]

{{< proposition id="prop-compact-in-PSh" >}}
Let $\mathcal{C}$ be a small category.
In the presheaf category $\mathsf{PShv}(\mathcal{C})$,
an object $F$ is $\kappa$-compact if and only if it is a retract of a $\kappa$-small colimit of $y(X_i)$.
{{< /proposition >}}

{{< proof >}}
* Suppose $F$ is $\kappa$-compact, and decompose $F$ as a colimit
\[
    F \simeq \operatorname{colim}_i y(X_i).
\]
Since any colimit can be written as a combination of a $\kappa$-filtered colimit
and a $\kappa$-small colimit, we may write the indexing category $I$
as a filtered colimit
\[
I \simeq \operatorname{colim}_{k \in K} \varphi,
\]
where $\varphi \colon K \to \mathsf{Cat}$ is a diagram of $\kappa$-small categories.
Then
\[
    \operatorname{Hom}_{\mathsf{PShv}(\mathcal{C})}(F,F)
    \simeq
    \operatorname{colim}_k
    \operatorname{Hom}_{\mathsf{PShv}(\mathcal{C})}
    \bigl(F,\operatorname{colim}_{\varphi(k)} y(X_i)\bigr).
\]
It is not hard to see that there exists some $k \in K$
such that $F$ is a retract of $\operatorname{colim}_{i \in \varphi(k)} y(X_i)$.

* Conversely, since each $y(X)$ is $\kappa$-compact,
this is exactly {{< thmref "cor-compact-colim-retract" >}}.
{{< /proof >}}

## Ind Completion

{{< definition >}}
Let $\mathcal{C}$ be a small category and $\kappa$ a regular cardinal.
Define $\mathsf{Ind}_{\kappa}(\mathcal{C}) \subset \mathsf{PShv}(\mathcal{C})$
to be the smallest full subcategory containing $y(\mathcal{C})$
and closed under $\kappa$-filtered colimits.
When $\kappa = \omega$, we omit the subscript $\kappa$.
{{< /definition >}}

{{< remark >}}
Dually, consider the covariant Yoneda embedding
\[
    y' \colon \mathcal{C}
    \longrightarrow
    \mathsf{Fun}(\mathcal{C},\mathsf{An})^{\operatorname{op}},
    \qquad
    X \longmapsto \operatorname{Hom}_{\mathcal C}(X,-).
\]
Define $\mathsf{Pro}_{\kappa}(\mathcal{C})$
to be the full subcategory of
$\mathsf{Fun}(\mathcal{C},\mathsf{An})^{\operatorname{op}}$
that contains $y'(\mathcal{C})$
and is closed under $\kappa$-cofiltered limits.
It is easy to see that
\[
    \mathsf{Pro}_{\kappa}(\mathcal{C})
    \simeq
    \mathsf{Ind}_{\kappa}(\mathcal{C}^{\operatorname{op}})^{\operatorname{op}}.
\]
{{< /remark >}}

By definition, any object in $\mathsf{Ind}_{\kappa}(\mathcal{C})$
can be written as a $\kappa$-filtered colimit of the form
\[
    \operatorname{colim}_{i} y(X_i),
\]
where the indexing category is $\kappa$-filtered.

However, in general there is no natural isomorphism
\[
    \operatorname{colim}_{i} y(X_i)
    \;\simeq\;
    y\!\left(\operatorname{colim}_{i} X_i\right).
\]
Therefore, even if the corresponding filtered colimit exists in $\mathcal{C}$,
it need not agree with the formally given filtered colimit in
$\mathsf{Ind}_{\kappa}(\mathcal{C})$.

One can also compute the Hom anima in $\mathsf{Ind}_{\kappa}(\mathcal{C})$ in this way:
\[\begin{align*}
    \operatorname{Hom}_{\mathsf{Ind}_{\kappa}(\mathcal{C})}(X,Y)
    & \simeq
    \operatorname{Hom}_{\mathsf{Ind}_{\kappa}(\mathcal{C})}
    \bigl(\operatorname{colim}_i y(X_i),\operatorname{colim}_j y(Y_j)\bigr) \\
    & \simeq
    \operatorname{lim}_i
    \operatorname{Hom}_{\mathsf{Ind}_{\kappa}(\mathcal{C})}
    \bigl(y(X_i),\operatorname{colim}_j y(Y_j)\bigr)\\
    & \simeq
    \operatorname{lim}_i \operatorname{colim}_{j}
    y(Y_j)(X_i)
    =
    \operatorname{lim}_i \operatorname{colim}_{j}
    \operatorname{Hom}_{\mathcal{C}}(X_i,Y_j).
\end{align*}\]

## Accessible Categories

We want to investigate the following question:
which categories can be regarded as the $\mathsf{Ind}_{\kappa}$-completion
of their $\kappa$-compact objects?

{{< definition >}}
Let $\mathcal{C}$ be a category, and let $\kappa$ be a regular cardinal.
We say that $\mathcal{C}$ is a **$\kappa$-accessible category** if:

* $\mathcal{C}$ admits $\kappa$-filtered colimits.
* The full subcategory $\mathcal{C}^{\kappa}$ is small.
* There is an equivalence $\mathcal{C} \simeq \mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa})$.

We say that $\mathcal{C}$ is an **accessible category**
if there exists some $\kappa$ such that $\mathcal{C}$ is $\kappa$-accessible.
{{< /definition >}}

{{< remark id="rmk-cardinal" >}}
Let $\lambda > \kappa$ be a regular cardinal.
In general, a $\kappa$-accessible category need not be $\lambda$-accessible.
{{< /remark >}}

From the description of Hom anima in $\mathsf{Ind}_{\kappa}(\mathcal{C})$ above,
it follows that accessible categories are locally small categories.

In fact, accessible categories can be characterized as idempotent complete categories.

{{< proposition title="Lurie" id="prop-accessible-idempotent" >}}
A category $\mathcal{C}$ is accessible if and only if it is idempotent complete.
{{< /proposition >}}

{{< proof >}}
{{< cite HTT "5.4.3" >}}
{{< /proof >}}

## Presentable Categories

In fact, it was observed that when $\mathcal{C}$ admits small colimits,
the issue in Remark~\ref{rmk-cardinal} can be remedied,
and in this case we call such categories presentable.

{{< definition >}}
Let $\mathcal{C}$ be a category and let $\kappa$ be a regular cardinal.
We say that $\mathcal{C}$ is **$\kappa$-presentable**
(or $\kappa$-compactly generated) if:

* $\mathcal{C}$ is $\kappa$-accessible.
* $\mathcal{C}$ admits small colimits.

We say that $\mathcal{C}$ is presentable
if there exists some $\kappa$ such that $\mathcal{C}$ is presentable.
In particular, when $\kappa = \omega$,
we say that $\mathcal{C}$ is **compactly generated**.
{{< /definition >}}

{{< proposition >}}
Let $\mathcal{C}$ be an idempotent complete category.
For a regular cardinal $\kappa$, the following are equivalent:
 1. $\mathcal{C}$ admits $\kappa$-small colimits.
 2. $y \colon \mathcal{C} \hookrightarrow \mathsf{PShv}(\mathcal{C})^{\kappa}$
    admits a left adjoint.
{{< /proposition >}}

## Lurie Tensor Product

## References

<ul class="refs">
  <li id="ref-naivecat">
    <strong>Rune Haugseng</strong>.
    <em>yet another introduction to ∞-categories</em>.
    2025.
    <a href="https://runegha.folk.ntnu.no/naivecat_web.pdf">PDF</a>.
  </li>
  <li id="ref-HTT">
    <strong>Jacob Lurie</strong>.
    <em>Higher Topos Theory</em>.
    Princeton University Press, 2009.
    <a href="https://www.math.ias.edu/~lurie/papers/HTT.pdf">PDF</a>.
  </li>
</ul>