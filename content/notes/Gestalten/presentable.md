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
weight: 10
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
{{< cite Hau25 "Corollary 9.9.3" >}}.
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

{{< example >}}
Let $\mathcal I$ be a cofiltered category whose objects are $\mathbb N$,
and such that for $m \le n$ there is a unique morphism $n \to m$.
Define a functor
\[
    X \colon \mathcal I \to \mathsf{Ab},
    \qquad
    n \longmapsto \mathbb Z,
\]
whose structure map $n \to m$ is given by multiplication by $2^{\,n-m}$.
Then
\[
    \lim_{\mathcal I} X = 0 .
\]

View $X$ as an object of $\mathsf{Pro}(\mathsf{Ab})$.
Tensor it levelwise with $\mathbb Z[1/2]$,
obtaining a cofiltered diagram $X \otimes \mathbb Z[1/2]$.
Since multiplication by $2$ is an isomorphism on $\mathbb Z[1/2]$,
this diagram is equivalent to a constant diagram, hence
\[
    \lim_{\mathcal I} (X \otimes \mathbb Z[1/2])
    \cong
    \mathbb Z[1/2].
\]

This shows that an object of $\mathsf{Pro}(\mathsf{Ab})$
is not determined by its limit in $\mathsf{Ab}$.
{{< /example >}}

{{< remark >}}
Strictly speaking, $\mathsf{Ab}$ is a large category.
One may work inside a sufficiently large Grothendieck universe,
or equivalently regard $\mathsf{Ab}$ as a small category
relative to a larger universe.
{{< /remark >}}

We can summarize the universal property of $\mathsf{Ind}_{\kappa}(\mathcal{C})$
as follows.

{{< lemma >}}
Let $\mathcal{D}$ be a category admitting $\kappa$-filtered colimits.
Then the Yoneda embedding induces an equivalence of categories
\[
    \mathsf{Fun}^{\kappa\text{-fil}}(\mathsf{Ind}_{\kappa}(\mathcal{C}),\mathcal{D})
    \simeq
    \mathsf{Fun}(\mathcal{C},\mathcal{D}).
\]
{{< /lemma >}}

Therefore, given a category $\mathcal{D}$ admitting $\kappa$-filtered colimits
and a functor $F \colon \mathcal{C} \to \mathcal{D}$,
one obtains an induced functor
$\mathsf{Ind}_{\kappa}(F) \colon \mathsf{Ind}_{\kappa}(\mathcal{C}) \to \mathcal{D}$
such that the following diagram commutes:

{{< tikzcd >}}
\mathcal{C} \ar[d,hook,"y"] \ar[dr,"F"]\\
\mathsf{Ind}_{\kappa}(\mathcal{C}) \ar[r,"\mathsf{Ind}_{\kappa}(F)"'] & \mathcal{D}.
{{< /tikzcd >}}

We also call $\mathsf{Ind}_{\kappa} F$ the $\mathsf{Ind}_{\kappa}$-extension of $F$.
Its concrete construction is nothing but Kan extension.


Moreover, if $F$ is fully faithful
and its image lands in the full subcategory of $\kappa$-compact objects
$\mathcal{D}^{\kappa}$,
then its $\mathsf{Ind}_{\kappa}$-extension is also fully faithful.
Furthermore, if $F(\mathcal{C})$ generates $\mathcal{D}$
under $\kappa$-filtered colimits,
then $\mathsf{Ind}_{\kappa}(F)$ is an equivalence of categories.

When $\mathcal{C}$ admits $\kappa$-small colimits,
we can identify $\mathsf{Ind}_{\kappa}(\mathcal{C})$
as $\mathsf{Fun}^{\kappa\text{-rex}}(\mathcal{C}^{\operatorname{op}},\mathsf{An})$,
that is, the category of all functors
$\mathcal{C}^{\operatorname{op}} \to \mathsf{An}$
preserving $\kappa$-small limits.

{{< proposition id="prop-C-kappa-colim-Ind" >}}
Let $\mathcal{C}$ be a small category admitting $\kappa$-small colimits.
Then there is an equivalence of categories
\[
    \mathsf{Ind}_{\kappa}(\mathcal{C})
    \simeq
    \mathsf{Fun}^{\kappa\text{-rex}}(\mathcal{C}^{\operatorname{op}},\mathsf{An}).
\]
Since limits in $\mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathsf{An})$
are computed pointwise,
and using the commutation of limits,
it follows that $\mathsf{Ind}_{\kappa}(\mathcal{C})$
admits all limits.
{{< /proposition >}}

{{< proof >}}
- For $F \in \mathsf{Ind}_{\kappa}(\mathcal{C})$,
  we may write $F$ as a $\kappa$-filtered colimit
  \[
      \operatorname{colim}_i y(X_i)
      =
      \operatorname{colim}_i \operatorname{Hom}_{\mathcal{C}}(-,X_i).
  \]
  For $\kappa$-small limits in $\mathcal{C}^{\operatorname{op}}$,
  these are automatically $\kappa$-small colimits in $\mathcal{C}$.
  Using
  \[
      \operatorname{colim}_i
      \operatorname{Hom}_{\mathcal{C}}(\operatorname{colim}_j Y_j,X_i)
      \simeq
      \operatorname{colim}_i
      \operatorname{lim}_j
      \operatorname{Hom}_{\mathcal{C}}(Y_j,X_i)
  \]
  together with Proposition {{< thmref "prop-An-filter" >}},
  the claim follows.

- Now let
  $F \colon \mathcal{C}^{\operatorname{op}} \to \mathsf{An}$
  be a functor preserving $\kappa$-small limits.
  The Grothendieck construction $\mathsf{El}(F)$
  is given by the pullback

  {{< tikzcd >}}
   \mathsf{El}(F) \ar[r] \ar[d] \ar[dr,phantom,pos = 0.3,"\lrcorner"]
  & \mathsf{An}_*^{\operatorname{op}} \ar[d]\\
   \mathcal{C} \ar[r,"F^{\operatorname{op}}"]
  & \mathsf{An}^{\operatorname{op}}
   {{< /tikzcd >}}

  Since $F$ preserves $\kappa$-small limits,
  $\mathsf{El}(F)$ is a $\kappa$-filtered category.
  Hence $F$, as the colimit of the composite
  \[
      \mathsf{El}(F) \to \mathcal{C} \to \mathsf{PShv}(\mathcal{C}),
  \]
  is a $\kappa$-filtered colimit.
{{< /proof >}}

{{< corollary >}}
Let $\mathcal{C}$ be a category admitting $\kappa$-small colimits.
Then
\[
  y \colon \mathcal{C} \to \mathsf{PShv}(\mathcal{C})
\]
preserves $\kappa$-small colimits.
{{< /corollary >}}

{{< proof >}}
It suffices to show that for any diagram $(X_i)_i$
indexed by a $\kappa$-small category $I$,
there is an equivalence in $\mathsf{Ind}_{\kappa}(\mathcal{C})$
\[
    \operatorname{colim}_i y(X_i)
    \simeq
    y(\operatorname{colim}_i X_i).
\]
By the Yoneda lemma, this is equivalent to saying that
for any $F \in \mathsf{Ind}_{\kappa}(\mathcal{C})$,
\[
    \operatorname{lim}_i F(X_i)
    \simeq
    F(\operatorname{colim}_i X_i),
\]
which reduces to Proposition {{< thmref "prop-C-kappa-colim-Ind" >}}.
{{< /proof >}}

Since any colimit can be written as a $\kappa$-filtered colimit
together with a $\kappa$-small colimit,
for a small category $\mathcal{C}$ admitting $\kappa$-small colimits,
$\mathsf{Ind}_{\kappa}$ also yields the following universal property.

{{< proposition >}}
Let $\mathcal{C}$ be a small category admitting $\kappa$-small colimits.
Then for any category $\mathcal{D}$ admitting small colimits,
there is an equivalence of categories
\[
    \mathsf{Fun}^{\operatorname{colim}}(\mathsf{Ind}_{\kappa}(\mathcal{C}),\mathcal{D})
    \simeq
    \mathsf{Fun}^{\kappa\text{-colim}}(\mathcal{C},\mathcal{D}).
\]
{{< /proposition >}}

In everyday practice, the vast majority of “large categories”
we encounter can naturally be written as the Ind-completion
of some small category.
In other words, they are often generated by a family of
“finite / compact objects” under filtered colimits.

For example:

- The category of sets can be presented as
  \[
      \mathsf{Set} \;\simeq\; \mathsf{Ind}(\mathsf{FinSet}),
  \]
  that is, any set is a filtered colimit of finite sets.

- The anima category can be presented as
  \[
      \mathsf{An} \;\simeq\; \mathsf{Ind}(\mathsf{An}^{\mathrm{fin}}),
  \]
  where $\mathsf{An}^{\mathrm{fin}}$ denotes the full subcategory
  of finite anima.

- For a fixed (derived) ring $R$,
  the category of modules can be presented as
  \[
      \mathsf{Mod}_R \;\simeq\; \mathsf{Ind}(\mathsf{Perf}_R),
  \]
  that is, any $R$-module is a filtered colimit of perfect modules.

These examples show that Ind-completion is not an abstract artificial construction,
but a unified language for describing
“large objects generated from small data via filtered colimits”.
This also leads to the notion of accessible categories.


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

{{< example >}} 
For any small category $\mathcal{C}$, the presheaf category $\mathsf{PShv}(\mathcal{C})$ is $\kappa$-accessible for any $\kappa$.
In fact, $\mathsf{PShv}(\mathcal{C}) \simeq \mathsf{Ind}_{\kappa}(\mathsf{PShv}(\mathcal{C})^{\kappa})$.
{{< /example >}} 

{{< remark id="rmk-cardinal" >}}
Let $\lambda > \kappa$ be a regular cardinal.
In general, a $\kappa$-accessible category need not be $\lambda$-accessible.
{{< /remark >}}

From the description of Hom anima in $\mathsf{Ind}_{\kappa}(\mathcal{C})$ above,
it follows that accessible categories are locally small categories.

In fact, accessible categories can be characterized as idempotent complete categories.

{{< proposition title="Lurie" id="prop-accessible-idempotent" >}}
A **small** category $\mathcal{C}$ is accessible if and only if it is idempotent complete.
{{< /proposition >}}

{{< proof >}}
{{< cite HTT "5.4.3" >}}
{{< /proof >}}

### General Adjoint Functor Theorem

In {{<cite "NRS18">}}, they prove the following theorem.

{{< theorem id="thm-general-adjoint-functor-theorem" title="adjoint functor theorem" >}}
Let $F \colon \mathcal{C} \to \mathcal{D}$ be a functor between locally small categories.

1. Assume that $\mathcal{C}$ and $\mathcal{D}$ have all colimits and that $\mathcal{C}$ is generated under colimits by an essentially small subcategory $\mathcal{C}_0 \subset \mathcal{C}$.
Then $F$ admits a right adjoint $G \colon \mathcal{D} \to \mathcal{C}$ if and only if $F$ preserves colimits.

2. Assume that $\mathcal{C}$ and $\mathcal{D}$ have all limits, that $\mathcal{C}$ is accessible, and that for every object $y \in \mathcal{D}$ there exists a regular cardinal $\kappa_y$ such that $y$ is $\kappa_y$-compact.
If there exists a regular cardinal $\kappa$ such that $F$ preserves limits as well as $\kappa$-filtered colimits, then $F$ admits a left adjoint $G \colon \mathcal{D} \to \mathcal{C}$.
The converse is true as well provided that $\mathcal{D}$ is accessible too.
{{< /theorem >}}

Thus, one can find that in an accessible category, completeness is equivalent to cocompleteness.

{{< corollary id="cor-acc-cocomplete-complete" >}}
Let $\mathcal C$ be a locally small category.

1. If $\mathcal C$ admits all small colimits and is generated under colimits by
    an essentially small sub-category, then $\mathcal C$ admits all
    small limits.

2. If $\mathcal C$ is accessible and admits all small limits, then $\mathcal C$
    admits all small colimits.
{{< /corollary >}}


{{< proof >}}
Let $\mathcal I$ be an essentially small category. Then
$\operatorname{Fun}(\mathcal I,\mathcal C)$ is locally small, and the constant
diagram functor
\[
  \operatorname{const} \colon \mathcal C \longrightarrow \operatorname{Fun}(\mathcal I,\mathcal C)
\]
preserves all limits and colimits.

(a) If $\mathcal C$ admits all small colimits and is generated under colimits by
an essentially small subcategory, then by the adjoint functor theorem,
$\operatorname{const}$ admits a right adjoint
\[
  \lim_{\mathcal I} \colon \operatorname{Fun}(\mathcal I,\mathcal C) \to \mathcal C.
\]
Since $\mathcal I$ was arbitrary, $\mathcal C$ admits all small limits.

(b) Assume that $\mathcal C$ is accessible and admits all small limits. We show
that $\operatorname{const}$ admits a left adjoint
\[
  \operatorname{colim}_{\mathcal I} \colon \operatorname{Fun}(\mathcal I,\mathcal C) \to \mathcal C.
\]
By accessibility, every object of $\mathcal C$ is $\kappa$-compact for some
regular cardinal $\kappa$. For any functor
$\alpha \colon \mathcal I \to \mathcal C$, choose a sufficiently large regular
cardinal $\tau$ such that $\mathcal I$ is $\tau$-small and each value
$\alpha(i)$ is $\tau$-compact.

Using that $\tau$-small limits commute with $\tau$-filtered colimits, and that
colimits in functor categories are computed pointwise, it follows that
$\alpha$ is $\tau$-compact. Hence $\operatorname{Fun}(\mathcal I,\mathcal C)$ is
generated under filtered colimits by compact objects, and the adjoint functor
theorem implies that $\operatorname{const}$ admits a left adjoint. Therefore
$\mathcal C$ admits all small colimits.
{{< /proof >}}


## Presentable Categories

Now, we discuss presentable categories.

{{< definition >}}
Let $\mathcal{C}$ be a category and let $\kappa$ be a regular cardinal.
We say that $\mathcal{C}$ is **$\kappa$-presentable**
(or $\kappa$-compactly generated) if:

* $\mathcal{C}$ is $\kappa$-accessible.
* $\mathcal{C}$ admits small limits.

We say that $\mathcal{C}$ is presentable
if there exists some $\kappa$ such that $\mathcal{C}$ is $\kappa$-presentable.
In particular, when $\kappa = \omega$,
we say that $\mathcal{C}$ is **compactly generated**.
{{< /definition >}}

{{< remark >}}
By {{< thmref "cor-acc-cocomplete-complete" >}}, accessibility together with the
existence of all small limits already implies the existence of all small
colimits, and hence presentability in the sense of Lurie.
I thank Marc Hoyois for pointing out this equivalence.
{{< /remark >}}


{{< proposition id="prop-PShv-kappa-left-adjoint" >}}
Let $\mathcal{C}$ be an idempotent complete category.
For a regular cardinal $\kappa$, the following are equivalent:
 1. $\mathcal{C}$ admits $\kappa$-small colimits.
 2. $i \colon \mathcal{C} \hookrightarrow \mathsf{PShv}(\mathcal{C})^{\kappa}$
    admits a left adjoint $L$.
{{< /proposition >}}

{{< proof >}}
* Suppose that $\mathcal{C}$ admits $\kappa$-small colimits.
We need to show that the copresheaf $\operatorname{Hom}_{\mathsf{PShv}(\mathcal{C})}(\mathcal{F},y)$ on $\mathcal{C}$ is corepresentable for every $\mathcal{F} \in \mathsf{PShv}(\mathcal{C})^{\kappa}$.
By {{< thmref "prop-compact-in-PSh" >}}, there exists a functor $p \colon K \to \mathcal{C}$ such that $\mathcal{F}$ is a retract of $\psi = \operatorname{colim} y \circ p$. 
Observe that by the Yoneda lemma, we have an isomorphism
\[
  \operatorname{Hom}_{\mathsf{PShv}(\mathcal{C})}(\psi,y(-)) \simeq \operatorname{lim}_{K^{\operatorname{op}}}\operatorname{Hom}_{\mathcal{C}}(p,-) \simeq \operatorname{Hom}_{\mathcal{C}}(\operatorname{colim} p,-).
\]
Since $\mathcal{C}$ is idempotent complete, it then follows that the original copresheaf is corepresented by a retract of $\operatorname{colim} p$.
* Now, suppose 2. is satisfied, so $i \colon \mathcal{C} \to \mathsf{PShv}(\mathcal{C})^{\kappa}$ admits a left adjoint $L$.
For a diagram $p \colon K \to \mathcal{C}$,
we know that $i \circ p$ admits a colimit in $\mathsf{PShv}(\mathcal{C})^{\kappa}$, since $L$ is a Bousfield localization, $p$ has a colimit in $\mathcal{C}$.
{{< /proof >}}

Suppose that we have an adjunction $f \dashv g$.
Then we can get an adjunction $g^{\operatorname{op}} \dashv f^{\operatorname{op}}$ (Since $(-)^{\operatorname{op}}$ is a 2-functor and 2-functors preserve adjunctions), and so an adjunction $f^{\operatorname{op},*}  \dashv g^{\operatorname{op},*}$.
Since adjunction is unique, we have $f^{\operatorname{op},*} \simeq g^{\operatorname{op}}_!$.
So that we also have
\[
  f_!^{\operatorname{op}} \dashv g_!^{\operatorname{op}}.
\]
Here, both functors restrict to $\mathsf{Ind}_{\kappa}(-)$, then we obtain an adjunction
\[
  \mathsf{Ind}_{\kappa} f \dashv \mathsf{Ind}_{\kappa} g.
\]
Since $\mathsf{PShv}(\mathcal{C}) \simeq \mathsf{Ind}_{\kappa}(\mathsf{PShv}(\mathcal{C})^{\kappa})$,
we have an adjunction
\[
  \mathsf{Ind}_{\kappa} L \dashv \mathsf{Ind}_{\kappa} i
\]
between $\mathsf{PShv}(\mathcal{C})$ and $\mathsf{Ind}_{\kappa}(\mathcal{C})$. One can also see that $\mathsf{Ind}_{\kappa} i$ is a fully faithful functor, thus $\mathsf{Ind}_{\kappa} L$ is still a Bousfield localization.
By {{< thmref "prop-C-kappa-colim-Ind">}}, one can find that in this case, $\mathsf{Ind}_{\kappa}(\mathcal{C})$ is a presentable category.


We may summarize the preceding discussion in the following equivalent characterizations of presentable categories.

{{< theorem id="thm-presentable-cat" >}}
Let $\mathcal{C}$ be a category, the following conditions are equivalent:
1. $\mathcal{C}$ is $\kappa$-presentable.
2. $\mathcal{C}$ is a Bousfield localization of $\mathsf{PShv}(\mathcal{D})$ for some small category $\mathcal{D}$ with $\kappa$-small colimits.
3. There exists a small category $\mathcal{D}$ with $\kappa$-small colimits such that $\mathcal{C} \simeq \mathsf{Ind}_{\kappa}(\mathcal{D})$.
4. $\mathcal{C}^{\kappa}$ is small, and the $\mathsf{Ind}_{\kappa}$-extension
\[
  \mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa}) \to \mathcal{C}
\]
is an equivalence.
{{< /theorem >}}

The preceding proposition suggests that a presentable category $\mathcal{C}$ should be regarded as generated, under all small colimits, by its $\kappa$-compact objects
We now make this perspective precise.

{{< proposition >}}
Let $\mathcal{C}$ be a category admitting all small colimits, and assume that
the full subcategory $\mathcal{C}^{\kappa}$ of $\kappa$-compact objects is small.
The following conditions are equivalent:
1. $\mathcal{C}$ is $\kappa$-presentable.
2. Every object of $\mathcal{C}$ can be expressed as a small colimit of
   $\kappa$-compact objects.
{{< /proposition >}}

{{< proof >}}
(1) $\Rightarrow$ (2).
Assume that $\mathcal{C}$ is $\kappa$-presentable. By definition, the canonical
functor
\[
  \mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa}) \longrightarrow \mathcal{C}
\]
is an equivalence. In particular, it is essentially surjective.

Let $X \in \mathcal{C}$. Since $\mathcal{C}$ admits all small colimits, $X$ can
be written as a small colimit
\[
  X \simeq \operatorname{colim}_{K} Z_k
\]
of objects $Z_k \in \mathcal{C}^{\kappa}$.
Any small colimit can be expressed as a $\kappa$-filtered colimit of
$\kappa$-small colimits, hence we may write
\[
  X \simeq \operatorname{colim}_{K' \subset K} \operatorname{colim}_{K'} Z_k,
\]
where $K'$ ranges over the $\kappa$-small subcategories of $K$.
By {{< thmref "cor-compact-colim-retract" >}}, each colimit
$\operatorname{colim}_{K'} Z_k$ is again $\kappa$-compact.
Therefore $X$ is a $\kappa$-filtered colimit of $\kappa$-compact objects, and
hence lies in the essential image of
$\mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa})$.

(2) $\Rightarrow$ (1).
Assume that every object of $\mathcal{C}$ can be expressed as a small colimit of
$\kappa$-compact objects. Then, in particular, every object of $\mathcal{C}$ is
a $\kappa$-filtered colimit of objects of $\mathcal{C}^{\kappa}$.
It follows that the canonical functor
\[
  \mathsf{Ind}_{\kappa}(\mathcal{C}^{\kappa}) \longrightarrow \mathcal{C}
\]
is essentially surjective. Since it is fully faithful, it is an equivalence,
and therefore $\mathcal{C}$ is $\kappa$-presentable.
{{< /proof >}}

In presentable category, {{< thmref "thm-general-adjoint-functor-theorem">}} admits a substantially simpler formulation.

{{< theorem id="adjoint-functor-theorem" title="adjoint functor theorem (presentable case)" >}}
Let $\mathcal C$ and $\mathcal D$ be presentable categories, and let
$F \colon \mathcal C \to \mathcal D$ be a functor.

1. The functor $F$ admits a right adjoint if and only if it preserves all small
   colimits.

2. The functor $F$ admits a left adjoint if and only if it preserves all small
   limits, and there exists a regular cardinal $\kappa$ such that $F$ preserves $\kappa$-filtered colimits.
{{< /theorem >}}

### The Category of Presentable Categories

Now, we define the category of presentable categories.

{{< definition id="def-Pr^L">}}
Let $\mathsf{Pr}^L$ be the category whose objects are presentable categories and
whose morphisms are colimit-preserving functors.

For a regular cardinal $\kappa$, let
$\mathsf{Pr}^{L}_{\kappa} \subset \mathsf{Pr}^L$ denote the non-full
subcategory whose objects are $\kappa$-presentable categories and whose
morphisms are those colimit-preserving functors that additionally preserve
$\kappa$-compact objects.
{{< /definition >}}
{{< remark id="rmk-Pr^L" >}}
Every presentable category is necessarily a **big** category. Consequently,
the category $\mathsf{Pr}^L$ of all presentable categories is a
**very big** category.

Nevertheless, a presentable category $\mathcal C$ admits a presentation by a
pair $(\kappa, \mathcal C^{\kappa})$, consisting of a regular cardinal $\kappa$
and a **small** category $\mathcal C^{\kappa}$ of $\kappa$-compact objects.
From this point of view, $\mathsf{Pr}^L$ may be regarded as a **big** category,
in the sense that its objects can be encoded by small data.

Despite this, $\mathsf{Pr}^L$ is not locally small. Indeed, for any
$\mathcal C \in \mathsf{Pr}^L$, one has
\[
  \operatorname{Hom}_{\mathsf{Pr}^L}(\mathsf{An}, \mathcal C) \simeq \mathcal C,
\]
since $\mathsf{An}$ is the free presentable category generated by a single
object, and $\mathcal C$ itself is large.

By contrast, the category $\mathsf{Pr}^{L}_{\kappa}$ is locally small.
Indeed, by definition of morphisms in $\mathsf{Pr}^{L}_{\kappa}$, any functor
$\mathsf{An} \to \mathcal C$ must preserve $\kappa$-compact objects, and hence
factors through the small category $\mathcal C^{\kappa}$. As a result,
\[
  \operatorname{Hom}_{\mathsf{Pr}^{L}_{\kappa}}(\mathsf{An}, \mathcal C)
  \simeq \mathcal C^{\kappa}.
\]

Thus, we consider the category $\mathsf{Rex}_{\kappa}$ defined as follows:
* the objects of $\mathsf{Rex}_{\kappa}$ are small categories $\mathcal D$
        admitting all $\kappa$-small colimits and closed under retracts;
*  the morphisms of $\mathsf{Rex}_{\kappa}$ are functors preserving
        $\kappa$-small colimits.

There is an equivalence
\[
  \mathsf{Pr}_{\kappa}^L \simeq \mathsf{Rex}_{\kappa},
\]
sending a $\kappa$-presentable category $\mathcal C$ to its full subcategory
$\mathcal C^{\kappa}$ of $\kappa$-compact objects, and sending
$\mathcal D \in \mathsf{Rex}_{\kappa}$ to $\mathsf{Ind}_{\kappa}(\mathcal D)$.
This equivalence is known as **Gabriel--Ulmer duality**
{{< cite "HTT" "Proposition 5.5.7.8 and Proposition 5.5.7.10">}}.
{{< /remark >}}

We see that $\mathsf{Pr}^L$ is too large to be an object of itself—it is not
even locally small. However, after fixing a regular cardinal $\kappa$, the
situation improves substantially.

{{< theorem title="Capion">}}
Let $\kappa$ be a regular cardinal. Then the category
$\mathsf{Pr}^{L}_{\kappa}$ is itself $\kappa$-presentable; in particular,
\[
  \mathsf{Pr}^{L}_{\kappa} \in \mathsf{Pr}^{L}_{\kappa}.
\]
{{< /theorem >}}

{{< proof >}}
By Gabriel--Ulmer duality, we may identify $\mathsf{Pr}_{\kappa}^L$ with
$\mathsf{Rex}_{\kappa}$. It therefore suffices to show that
$\mathsf{Rex}_{\kappa}$ is $\kappa$-presentable.

First, by the remark above, $\mathsf{Rex}_{\kappa}$ is locally small.
Consider the forgetful functor
\[
  G \colon \mathsf{Rex}_{\kappa} \longrightarrow \mathsf{Cat}.
\]
This functor admits a left adjoint
\[
  F \colon \mathsf{Cat} \longrightarrow \mathsf{Rex}_{\kappa},
  \qquad
  F(S) = \mathsf{PShv}(S)^{\kappa}.
\]

We claim that the adjunction $F \dashv G$ is monadic, so that
$\mathsf{Rex}_{\kappa}$ is equivalent to the category of algebras over the monad
$GF$ on $\mathsf{Cat}$. By the Barr--Beck--Lurie theorem, it suffices to verify
the following conditions:
\begin{itemize}
* the functor $G$ is conservative;
* $G$ preserves geometric realizations of $G$-split simplicial objects.

The first condition is immediate.
For the second, let $\mathcal C_\bullet$ be a simplicial object of
$\mathsf{Rex}_{\kappa}$ whose geometric realization $\mathcal C_{-1}$ exists in
$\mathsf{Cat}$, and assume that the augmentation
$\mathcal C_\bullet \to \mathcal C_{-1}$ is split in $\mathsf{Cat}$.
Then for any $\kappa$-small category $I$, the induced morphism
\[
  \mathsf{Fun}(I, \mathcal C_\bullet)
  \longrightarrow
  \mathsf{Fun}(I, \mathcal C_{-1})
\]
is again a geometric realization in $\mathsf{Cat}$.
Applying this observation to $I$ and to its right cone $I^{\rhd}$, one readily
verifies that $G$ preserves the required geometric realizations.

Thus, $\mathsf{Rex}_{\kappa}$ is monadic over $\mathsf{Cat}$ and in particular
admits all small colimits. Since $\mathsf{Cat}$ is compactly generated by the
finite ordinal categories $[n]$ (and hence $\kappa$-compactly generated), it
remains to observe that the functor $F$ preserves $\kappa$-compact objects.
Equivalently, the right adjoint $G$ preserves $\kappa$-filtered colimits, which
follows from {{< cite "HTT" "Proposition 5.5.7.11">}}.
{{< /proof >}}

It naturally leads to a question:
> Given that $\mathsf{Pr}_{\kappa}^L$ is $\kappa$-presentable, it has a large subcategory $(\mathsf{Pr}_{\kappa}^L)^{\kappa}$ of $\kappa$-compact objects.
Is it, in fact, a $\kappa$-compact object of itself, i.e.
\[
  \mathsf{Pr}_{\kappa}^L \in (\mathsf{Pr}_{\kappa}^L)^{\kappa}?
\]

This is not full truth.
{{< proposition >}}
One has $\mathsf{Pr}_{\kappa}^L \in (\mathsf{Pr}_{\kappa}^L)^{\kappa}$ if and only if $\kappa$ is not a limit cardinal.
{{< /proposition >}}

### Colimits and Limits in $\mathsf{Pr}^L$

By {{<thmref "adjoint-functor-theorem">}}, one obtains the following result. We say a functor $F$ is **accessible** if there is some $\kappa$ such that $F$ commutes with $\kappa$-filtered colimits.
{{< corollary id="cor-Pr^R">}}
Let $\mathsf{Pr}^R$ be the category whose objects are presentable categories and morphisms are accessible functors that commute with all limits.
Then there is an equivalence
\[
  (\mathsf{Pr}^L)^{\operatorname{op}} \simeq \mathsf{Pr}^R
\]
giving by passing to adjoint functors.

Similarly, let $\mathsf{Pr}^R_{\kappa}$ be the category whose objects are $\kappa$-presentable categories and morphisms are functors commute with $\kappa$-filtered colimits and all small limits. Then the above equivalence restricts to an equivalence
\[
  (\mathsf{Pr}^L_{\kappa})^{\operatorname{op}} \simeq \mathsf{Pr}_{\kappa}^R.
\]
{{< /corollary >}}

Next, we will discuss various operations within $\mathsf{Pr}^L$.

{{< proposition >}}
* $\mathsf{Pr}^L$ admits all small limits, and the forgetful functor
\[
  \mathsf{Pr}^L \to \widehat{\mathsf{Cat}}
\]
preserves small limits.
* Similarly, for regular cardinal $\kappa$, $\mathsf{Pr}_{\kappa}^L$ admits all small limits, and the composite $\mathsf{Pr}_{\kappa}^L \simeq \mathsf{Rex}_{\kappa} \to \mathsf{Cat}$ preserves small limits.
* If $\kappa$ is uncountable, the inclusion $\mathsf{Pr}_{\kappa}^L \hookrightarrow \mathsf{Pr}^L$ preserves $\kappa$-small limits.
{{< /proposition >}}
We omit the proof of this statement.
For colimits, by {{< thmref "cor-Pr^R">}}, the colimits in $\mathsf{Pr}^L$ is the limits in $\mathsf{Pr}^R$.

{{< proposition >}}
* $\mathsf{Pr}^R$ admits all small limits, and the forgetful functor
\[
  \mathsf{Pr}^R \to \widehat{\mathsf{Cat}}
\]
preserves small limits.
* Similarly, for regular cardinal $\kappa$, $\mathsf{Pr}_{\kappa}^R$ admits all small limits.
* The inclusion $\mathsf{Pr}_{\kappa}^R \hookrightarrow \mathsf{Pr}^R$ preserves all small limits.
{{< /proposition >}}

Let us compute some examples.

{{< example >}}
1. Let $I$ be a set, and let $\mathcal{C}_i \in \mathsf{Pr}^L$ be presentable categories, then the product of $\mathcal{C}_i$ in $\mathsf{Pr}^L$ agrees with the naive product $\prod_{i \in I}\mathcal{C}_i$.
2. Let $I$ be a set,  and let $\mathcal{C}_i \in \mathsf{Pr}^L$ be presentable categories, then the coproduct of $\mathcal{C}_i$ in $\mathsf{Pr}^L$ agrees with the naive product $\prod_{i \in I}\mathcal{C}_i$ (by passing to adjoint functor), which means
\[
  \coprod_{i}^{\mathsf{Pr}^L} \mathcal{C}_i \to \prod_{i}^{\mathsf{Pr}^L} \mathcal{C}_i = \prod_i \mathcal{C}_i
\]
is an equivalence.
In other words, $\mathsf{Pr}^L$ is $\kappa$-semiadditive for all cardinal $\kappa$.
3. Let $S$ be a small category. Then we can form the free presentable category $\langle S \rangle_{\text{pres}} \coloneqq \mathsf{PShv}(S)$. This can also be seen as an instance of colimits (or free constructions) in $\mathsf{Pr}^L$ agreeing with limits (or cofree construction).
Indeed, giving any presentable category $\mathcal{C}$ with a functor $i \colon S \to \mathcal{C}$, we get a functor $\mathcal{C} \to \mathsf{PShv}(S)$ via $X \mapsto \left(T \mapsto \operatorname{Hom}_{\mathcal{C}}(i(T),X)\right)$.
This functor commutes with all limits and is accessible, thus a left adjoint $\mathsf{PShv}(S) \to \mathcal{C}$, extending the giving functor $i$.
{{< /example >}}

## Lurie Tensor Product

In this section, we will introduce the symmetric monoidal structure on $\mathsf{Pr}^L$, in fact, we will find that we have the
following table of vague analogies

| Linear algebra | Presentable category theory |
|:--------------:|:----------------------------:|
| ring | $\mathsf{An}$ |
| module | presentable category |
| linear map | colimit-preserving functor |
| bilinear map | functor preserving colimits in each variable |
| tensor product $\otimes$ | Lurie tensor product $\otimes$ in $\mathsf{Pr}^L$ |

{{< definition >}}
Let $\mathcal{C}$ and $\mathcal{D}$ be presentable categories. There is a universal presentable category $\mathcal{C} \otimes \mathcal{D}$ equipped with functor
\[
  \mathcal{C} \times \mathcal{D} \to \mathcal{C} \otimes \mathcal{D}
\]
that commutes with small colimits in each variable.
If $\mathcal{C}$ and $\mathcal{D}$ are $\kappa$-presentable, then $\mathcal{C} \otimes \mathcal{D}$ are $\kappa$-presentable, and $\mathcal{C} \times \mathcal{D} \to \mathcal{C} \otimes \mathcal{D}$ preserves $\kappa$-compact objects.
This endows $\mathsf{Pr}^L$ and $\mathsf{Pr}_{\kappa}^L$ with compactible symmetric monoidal structres, with unit object $\mathsf{An}$.
This symmetric monoidal structure is called **Lurie tensor product**.
{{< /definition >}}
{{< proof title="sketch of construction">}}
It suffices to prove existence. 
By {{< thmref "thm-presentable-cat" >}}, one can choose small categories $S$ and $T$ such that
\[
  \mathcal{C} = \langle S \rangle_{\text{pres}}[R^{-1}] \quad \text{and} \quad \mathcal{D} = \langle T \rangle_{\text{pres}}[Q^{-1}].
\]
Then it is easy to see that
\[
  \mathcal{C} \otimes \mathcal{D} \coloneqq \langle S \times T \rangle_{\text{pres}}[(R \times Q)^{-1}]
\]
{{< /proof >}}

By construction of $\mathcal{C} \otimes \mathcal{D}$, one can easily find that for small category $\mathcal{C}$, we have
\[
  \mathsf{PShv}(\mathcal{C}) \otimes \mathcal{D} \simeq \mathsf{Fun}(\mathcal{C}^{\operatorname{op}},\mathcal{D})
\]

Now, one can introduce the notion of a symmetric monoidal presentable category.

{{< definition >}}
* A presentable symmetric monoidal category is a commutative algebra object in
  $\mathsf{Pr}^L$ with respect to the Lurie tensor product.
* A  $\kappa$-presentable symmetric monoidal category is a commutative algebra
  object in $\mathsf{Pr}^L_{\kappa}$ with respect to the Lurie tensor product.
{{< /definition >}}

In other words, if $\mathcal{C}$ is a $\kappa$-presentable symmetric monoidal category, then its tensor product commutes with colimits in each variable,
preserves $\kappa$-compact objects, and its unit object is $\kappa$-compact.

## References

<ul class="refs">
  <li id="ref-Hau25">
    <span class="ref-label">[Hau25]</span>
    <strong>Rune Haugseng</strong>.
    <em>Yet Another Introduction to ∞-Categories</em>.
    2025.
    <a href="https://runegha.folk.ntnu.no/naivecat_web.pdf">PDF</a>.
  </li>

  <li id="ref-HTT">
    <span class="ref-label">[HTT]</span>
    <strong>Jacob Lurie</strong>.
    <em>Higher Topos Theory</em>.
    Princeton University Press, 2009.
    <a href="https://www.math.ias.edu/~lurie/papers/HTT.pdf">PDF</a>.
  </li>

  <li id="ref-NRS18">
    <span class="ref-label">[NRS18]</span>
    <strong>Hoang&nbsp;Kim Nguyen</strong>,
    <strong>George&nbsp;Raptis</strong>,
    and <strong>Christoph&nbsp;Schrade</strong>.
    <em>Adjoint functor theorems for ∞-categories</em>.
    arXiv:1803.01664, 2018.
    <a href="https://arxiv.org/abs/1803.016">
