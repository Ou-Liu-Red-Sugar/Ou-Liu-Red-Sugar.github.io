---
title: "Continuous (Efimov) K-theory"
date: 2026-04-24
draft: false
math: true
weight: 30
tags:
  - K-theory
  - Efimov K-theory
  - compactly assembled categories
  - Calkin category
  - localizing invariants
categories:
  - Mathematics
ShowToc: true
TocOpen: false
description: >
  Extending algebraic K-theory from $\mathsf{Cat}^{\mathrm{rex}}$ to
  $\mathsf{Pr}^L_{\mathrm{ca}}$: the continuous Calkin category, Verdier cofibre
  sequences in the large setting, Efimov's definition of continuous K-theory,
  its basic properties, and a sketch of the universal property of $K^{\mathrm{cont}}$.
---

Recall that for a category with finite colimits and idempotent-completeness,
$\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex,idem}}$, we defined the Calkin
category $\mathsf{Calk}(\mathcal{C}) = (\mathsf{Ind}(\mathcal{C})^{\aleph_1}/\mathcal{C})^{\mathrm{idem}}$
and used the relation $\mathrm{k}(\mathsf{Calk}^n(\mathcal{C})) \simeq \tau_{\ge 0}\Omega\mathrm{k}(\mathsf{Calk}^{n+1}(\mathcal{C}))$
to construct non-connective algebraic K-theory $\mathrm{K}$.

The aim of this note is to use the inclusion
$\mathsf{Cat}^{\mathrm{rex}} \subset \mathsf{Cat}^{\mathrm{ca}} \simeq \mathsf{Pr}^L_{\mathrm{ca}}$
to extend algebraic K-theory to compactly assembled categories. The result is
**continuous (Efimov) K-theory**.

## The continuous Calkin category

First we extend the Calkin construction from small categories to compactly
assembled categories, i.e. we want to produce a dashed arrow making
{{< tikzcd >}}
\mathsf{Cat}^{\mathrm{rex}} \ar[r,"\mathsf{Calk}"] \ar[d,hook,"\mathsf{Ind}"] & \mathsf{Cat}^{\mathrm{rex,idem}} \\
\mathsf{Pr}^L_{\mathrm{ca}} \ar[ur,dashed,"\mathsf{Calk}^{\mathrm{cont}}"']
{{< /tikzcd >}}
commute.

For compactly assembled $\mathcal{C}$, consider the Verdier cofibre sequence in
$\mathsf{Pr}^L_{\mathrm{ca}}$,
\[
    \mathcal{C} \xhookrightarrow{\;\hat{y}\;} \mathsf{Ind}(\mathcal{C}^{\aleph_1})
    \longrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}.
\]
Since $\mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Pr}^L$ preserves colimits and
colimits in $\mathsf{Pr}^L$ correspond to limits in $\mathsf{Pr}^R$ under
right-adjoint duality, this cofibre can be computed as the fibre of the right
adjoint $k\colon \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathcal{C}$ over the
terminal object:
{{< tikzcd >}}
\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C} \ar[r] \ar[d]\ar[dr,phantom,very near start,"\lrcorner"] & \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \ar[d,"k"] \\
{*} \ar[r,"*"] & \mathcal{C}
{{< /tikzcd >}}
Here $* \to \mathcal{C}$ picks out the terminal object; fully faithfulness of
this map identifies $\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$ with
the full subcategory of $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$ on objects
sent to $*$ by $k$ — the Ind-objects that "vanish in $\mathcal{C}$".

{{< proposition id="prop-quotient-cg" >}}
Let $\mathcal{C}$ be compactly assembled. The functor
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$
is a Bousfield localization, and the target
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C}$ is compactly generated.
{{< /proposition >}}

{{< proof >}}
The right adjoint is the inclusion
$k^{-1}(*) \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1})$, which is
fully faithful, so we have a Bousfield localization.

For compact generation, it suffices to show the inclusion preserves filtered
colimits. Let $(X_i)_{i \in I}$ be a filtered diagram in $k^{-1}(*)$. Since $k$
is a left adjoint, $k(\operatorname*{colim}_i X_i) \simeq \operatorname*{colim}_i k(X_i) \simeq \operatorname*{colim}_i * \simeq *$,
so $\operatorname*{colim}_i X_i \in k^{-1}(*)$. The inclusion hence preserves
filtered colimits, so the localization preserves compact objects, and their
image generates the quotient. Since $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$ is
compactly generated, so is the quotient.
{{< /proof >}}

By Gabriel–Ulmer duality, the compact objects
$(\mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C})^{\aleph_0}$ of a compactly
generated category form an idempotent-complete category with finite colimits.

{{< definition id="def-calk-cont" title="Continuous Calkin category" >}}
Let $\mathcal{C}$ be compactly assembled. The **continuous Calkin category** of
$\mathcal{C}$ is
\[
    \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}) \coloneqq \left( \mathsf{Ind}(\mathcal{C}^{\aleph_1}) / \mathcal{C} \right)^{\aleph_0}.
\]
{{< /definition >}}

{{< proposition id="prop-cont-calk-cofiber" >}}
For compactly assembled $\mathcal{C}$, there is a right-exact
$p\colon \mathcal{C}^{\aleph_1} \to \mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})$
such that
\[
    \mathsf{Ind}(p)\colon \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))
\]
is a Bousfield localization. Moreover, there is a natural cofibre sequence
\[
    \mathcal{C} \xrightarrow{\;\hat{y}\;} \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \xrightarrow{\;\mathsf{Ind}(p)\;} \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})),
\]
and $\mathsf{Ind}(p)^R$ preserves pushouts.
{{< /proposition >}}

{{< proof >}}
$\mathsf{Ind}(p)$ is the Bousfield localization of
{{< thmref "prop-quotient-cg" >}}, and it preserves compact objects, so by
Gabriel–Ulmer we recover a right-exact $p$ on the small-category side.

For the pushout claim: $\mathsf{Ind}(p)^R$ is the inclusion
$k^{-1}(*) \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1})$, which sits
inside the pullback
{{< tikzcd >}}
k^{-1}(*) \ar[r]\ar[d]\ar[dr,phantom,very near start,"\lrcorner"] & \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \ar[d,"k"] \\
{*} \ar[r] & \mathcal{C}
{{< /tikzcd >}}
Given a pushout diagram $A, B, C \in k^{-1}(*)$, the pushout $A \cup_C B$ taken
in $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$ satisfies
$k(A \cup_C B) \simeq k(A) \cup_{k(C)} k(B) \simeq * \cup_* * \simeq *$, since
$k$ preserves colimits. So $A \cup_C B \in k^{-1}(*)$, and the inclusion
preserves pushouts.
{{< /proof >}}

{{< proposition id="prop-cont-extends-calk" >}}
For an idempotent-complete $\mathcal{C}$ with finite colimits,
\[
    \mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C})) \simeq \mathsf{Calk}(\mathcal{C}).
\]
{{< /proposition >}}

{{< proof >}}
Plugging the compactly generated $\mathsf{Ind}(\mathcal{C})$ into the previous
cofibre sequence,
\[
    \mathsf{Ind}(\mathcal{C})
    \xhookrightarrow{\;\hat{y}\;}
    \mathsf{Ind}(\mathsf{Ind}(\mathcal{C})^{\aleph_1})
    \xrightarrow{\;\mathsf{Ind}(p)\;}
    \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C}))).
\]
Compactly-generated makes $\hat{y} = \mathsf{Ind}(y)$ (idempotent completeness
gives $\mathcal{C} \simeq \mathsf{Ind}(\mathcal{C})^{\aleph_0} \subset \mathsf{Ind}(\mathcal{C})^{\aleph_1}$).
So the full sequence is obtained by applying $\mathsf{Ind}$ to
$\mathcal{C} \xrightarrow{y} \mathsf{Ind}(\mathcal{C})^{\aleph_1} \xrightarrow{p} \mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C}))$.
Gabriel–Ulmer equivalence
$\mathsf{Cat}^{\mathrm{rex,idem}} \simeq \mathsf{Pr}^L_{\aleph_0}$ lets us
recover
\[
    \mathsf{Calk}^{\mathrm{cont}}(\mathsf{Ind}(\mathcal{C}))
    \simeq \left( \mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C} \right)^{\aleph_0}
    \simeq \left( \mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C} \right)^{\mathrm{idem}}
    = \mathsf{Calk}(\mathcal{C}),
\]
the second equivalence because compact objects of a compactly generated
category are automatically idempotent-complete.
{{< /proof >}}

### Verdier cofibre sequences in $\mathsf{Pr}^L_{\mathrm{ca}}$

For a more thorough study of $\mathsf{Calk}^{\mathrm{cont}}$ we need an
appropriate notion of Verdier sequence in the large setting.

{{< definition id="def-verdier-prca" title="Verdier cofibre sequence in Pr^L_ca" >}}
A cofibre sequence
\[
    \mathcal{C} \xrightarrow{\;i\;} \mathcal{D} \xrightarrow{\;p\;} \mathcal{E}
\]
in $\mathsf{Pr}^L_{\mathrm{ca}}$ is a **Verdier cofibre sequence** if

- $i$ is fully faithful;
- $i^R$ preserves pushouts.
{{< /definition >}}

The natural sequence
$\mathcal{C} \xrightarrow{\hat{y}} \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))$
from {{< thmref "prop-cont-calk-cofiber" >}} is a Verdier cofibre sequence.

## Continuous (Efimov) K-theory

We now have all the pieces to define continuous K-theory.

{{< definition id="def-kcont" title="Continuous K-theory" >}}
Let $\mathcal{C}$ be a compactly assembled category. Its **continuous
K-theory** is
\[
    \mathrm{K}^{\mathrm{cont}}(\mathcal{C}) \coloneqq \Omega \mathrm{K}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})).
\]
{{< /definition >}}

Iteration reduces $\mathrm{K}^{\mathrm{cont}}$ to connective $\mathrm{k}$ just
as before. For compactly assembled $\mathcal{C}$ and $n \ge 1$, define
\[
    \mathsf{Calk}^{\mathrm{cont}, n}(\mathcal{C}) \coloneqq \mathsf{Calk}^{n-1}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})).
\]
Then $\mathrm{K}^{\mathrm{cont}}(\mathcal{C})_n = \mathrm{k}(\mathsf{Calk}^{\mathrm{cont},n}(\mathcal{C}))$
for $n \ge 1$. The $n = 0$ layer has no such formula: the first Calkin step
already passes from the large world to the small.

### Basic properties

{{< theorem id="thm-kcont" title="Properties of continuous K-theory" >}}
The functor $\mathrm{K}^{\mathrm{cont}}\colon \mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Sp}$
has the following properties.

1. **Agreement with classical $\mathrm{K}$.** There is a natural map
   $\mathrm{K}(\mathcal{C}^{\omega}) \to \mathrm{K}^{\mathrm{cont}}(\mathcal{C})$
   that is an equivalence when $\mathcal{C}$ is compactly generated.
2. $\mathrm{K}^{\mathrm{cont}}$ preserves filtered colimits and finite products.
3. **Eilenberg swindle.** If there is a compactly assembled functor
   $F\colon \mathcal{C} \to \mathcal{C}$ with $F \sqcup \operatorname{id} \simeq F$,
   then $\mathrm{K}^{\mathrm{cont}}(\mathcal{C}) \simeq 0$.
4. If $S = (\mathcal{C} \to \mathcal{D} \to \mathcal{E})$ is a sequence in
   $\mathsf{Pr}^L_{\mathrm{ca}}$ whose stabilization
   $\mathsf{Sp} \otimes S$ is a Verdier sequence (in particular, if $S$ is a
   Verdier cofibre sequence), then $\mathrm{K}^{\mathrm{cont}}(S)$ is a
   cofibre sequence.
5. $\mathrm{K}^{\mathrm{cont}}$ inverts the canonical maps
   $\mathcal{C} \to \mathsf{An}_* \otimes \mathcal{C}$ and
   $\mathcal{C} \to \mathsf{Sp} \otimes \mathcal{C}$.

Given $\mathrm{K}$, properties (1) and (2) already determine
$\mathrm{K}^{\mathrm{cont}}$ uniquely.
{{< /theorem >}}

The proof flows from a structural theorem on how the Calkin construction
interacts with various cofibre sequences in $\mathsf{Pr}^L_{\mathrm{ca}}$ —
the large-scale analogue of
{{< thmref "prop-verdier-seq" >}} from the previous section.

{{< proposition id="prop-calk-cont-seq" title="Calk^cont vs cofibre sequences" >}}
Let $S = (\mathcal{C} \xrightarrow{i} \mathcal{D} \xrightarrow{p} \mathcal{E})$
be a sequence in $\mathsf{Pr}^L_{\mathrm{ca}}$. Consider the conditions:

1. $S$ is a cofibre sequence, $i$ is fully faithful, and $i$ preserves the
   terminal object.
2. $S$ is a Verdier cofibre sequence ({{< thmref "def-verdier-prca" >}}).
   $(2')$ $S$ is a cofibre sequence and $i$ is a fully faithful strong left
   adjoint.
3. $\mathsf{An}_* \otimes S = (\mathcal{C}_* \to \mathcal{D}_* \to \mathcal{E}_*)$
   is a cofibre sequence with $\mathsf{An}_* \otimes i$ fully faithful.
4. $\mathsf{Sp} \otimes S$ is a Verdier sequence in the stable setting,
   i.e. a cofibre sequence with $\mathsf{Sp} \otimes i$ fully faithful.
5. $\mathrm{K}^{\mathrm{cont}}(S)$ is a cofibre sequence.

Then
$(2') \Rightarrow (2)$, $(1) \Rightarrow (3) \Rightarrow (4) \Rightarrow (5)$
and $(2) \Rightarrow (3)$.

Moreover:

- When $\mathcal{C}, \mathcal{D}, \mathcal{E}$ are pointed,
  $(1) \Leftrightarrow (3)$ and $(2) \Leftrightarrow (2')$; when they are
  stable, all implications except $(4) \Rightarrow (5)$ become equivalences.
  Accordingly, $\mathsf{An}_* \otimes -$ and $\mathsf{Sp} \otimes -$ preserve
  sequences of all listed types.
- The natural cofibre sequence
  $\mathcal{C} \xhookrightarrow{\hat{y}} \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))$
  is of type $(2')$.
- Types $(3)$, $(4)$ and $(5)$ are closed under filtered colimits; filtered
  colimits of the natural type-$(2')$ sequences above are again type-$(2')$.
- $\mathsf{Ind}\colon \mathsf{Cat}^{\mathrm{rex,idem}} \to \mathsf{Pr}^L_{\mathrm{ca}}$
  preserves sequences of all types (idempotent-completeness is needed only
  for type $(5)$), and
  $\mathsf{Calk}^{\mathrm{cont}}\colon \mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Cat}^{\mathrm{rex,idem}}$
  preserves Verdier cofibre sequences. As a consequence $\mathsf{Calk}$ also
  preserves Verdier cofibre sequences.
{{< /proposition >}}

{{< proof >}}
See {{< cite "sheaves-on-manifolds" "Prop. 3.4.3" >}}. The key non-trivial
implication is $(4) \Rightarrow (5)$: for a type-$(4)$ sequence
$\mathcal{C} \to \mathcal{D} \to \mathcal{E}$, natural equivalences
\[
    \Sigma \mathrm{K}^{\mathrm{cont}}
    \simeq \mathrm{K}(\mathsf{Calk}^{\mathrm{cont}}(-))
    \simeq \mathrm{K}(\mathsf{SW}(\mathsf{Calk}^{\mathrm{cont}}(-)))
    \simeq \mathrm{K}(\mathsf{Calk}^{\mathrm{cont}}(\mathsf{Sp} \otimes -))
\]
reduce the question to: tensoring with $\mathsf{Sp}$ turns the sequence into a
Verdier cofibre sequence, $\mathsf{Calk}^{\mathrm{cont}}$ preserves these,
and $\mathrm{K}$ sends Verdier cofibre sequences in
$\mathsf{Cat}^{\mathrm{rex,idem}}$ to cofibre sequences.
{{< /proof >}}

{{< proof title="Proof of Theorem on K^cont" >}}
Given {{< thmref "prop-calk-cont-seq" >}}, we can extract each property of
{{< thmref "thm-kcont" >}}:

**(1)** When $\mathcal{C}$ is compactly generated, $\mathcal{C} \simeq \mathsf{Ind}(\mathcal{C}^{\omega})$
and {{< thmref "prop-cont-extends-calk" >}} gives
$\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}) \simeq \mathsf{Calk}(\mathcal{C}^{\omega})$,
so
\[
    \mathrm{K}^{\mathrm{cont}}(\mathcal{C})
    = \Omega \mathrm{K}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))
    = \Omega \mathrm{K}(\mathsf{Calk}(\mathcal{C}^{\omega}))
    \simeq \mathrm{K}(\mathcal{C}^{\omega}).
\]

**(2)** Filtered colimits and finite products: $\mathsf{Calk}^{\mathrm{cont}}$
preserves them ($\mathsf{Pr}^L_{\mathrm{ca}}$ is semi-additive and
$\mathsf{Calk}^{\mathrm{cont}}$ is computed via $(-)^{\aleph_0}$ which
preserves both operations on compactly generated quotients), and $\mathrm{K}$
does too.

**(3)** Product-preservation gives a map $\mathrm{K}^{\mathrm{cont}}(F)$ with
$\mathrm{K}^{\mathrm{cont}}(F) + \operatorname{id} = \operatorname{id}$ in
$\pi_0 \mathrm{End}(\mathrm{K}^{\mathrm{cont}}(\mathcal{C}))$; this group is
abelian, so $\operatorname{id} = 0$.

**(4)** By {{< thmref "prop-calk-cont-seq" >}}, $(4) \Rightarrow (5)$.

**(5)** By part of {{< thmref "prop-calk-cont-seq" >}}, since
$\mathcal{C} \to \mathsf{An}_* \otimes \mathcal{C}$ and
$\mathcal{C} \to \mathsf{Sp} \otimes \mathcal{C}$ are inverted under
$\mathrm{K}^{\mathrm{cont}}$.

**Uniqueness.** Given $\mathrm{K}$ and properties (1) and (2),
$\mathrm{K}^{\mathrm{cont}}$ is determined. Indeed, every compactly assembled
$\mathcal{C}$ is a filtered colimit of compactly generated categories
(via $\mathsf{Ind}(-)^{\aleph_1}$-style approximations and cofinality), and
(1) pins $\mathrm{K}^{\mathrm{cont}}$ on the compactly generated ones while
(2) propagates the definition along the filtered colimit.
{{< /proof >}}

### Finite products vs. products

A common thread in the proofs is that finite-product preservation combined
with a stable/additive target forces additional properties automatically.
Concretely:

{{< remark >}}
The type-$(2')$ cofibre sequence $\mathcal{C} \hookrightarrow \mathcal{C} \times \mathcal{D} \to \mathcal{D}$
admits a splitting, so any localizing (or continuous localizing) invariant
preserves finite products. The Eilenberg swindle follows formally once
products are preserved, because the target is additive.
{{< /remark >}}

## The universal property of $\mathrm{K}^{\mathrm{cont}}$

The construction $F \mapsto F^{\mathrm{cont}} \coloneqq \Omega F \circ \mathsf{Calk}^{\mathrm{cont}}$
makes sense for any localizing invariant $F\colon \mathsf{Cat}^{\mathrm{rex,idem}} \to \mathcal{D}$,
not just $\mathrm{K}$. Write $\mathrm{Loc}(\mathcal{D})$ for the category of
such $F$, and $\mathrm{Loc}^{\mathrm{cont}}(\mathcal{D})$ for the category of
continuous localizing invariants
$\mathsf{Pr}^L_{\mathrm{ca}} \to \mathcal{D}$ (those preserving Verdier cofibre
sequences and filtered colimits).

{{< theorem id="thm-efimov-univ" title="Efimov's universal property" >}}
Restriction along $\mathsf{Ind}\colon \mathsf{Cat}^{\mathrm{rex,idem}} \to \mathsf{Pr}^L_{\mathrm{ca}}$
gives an equivalence
\[
    \mathrm{Loc}^{\mathrm{cont}}(\mathcal{D}) \xrightarrow{\;\sim\;} \mathrm{Loc}(\mathcal{D}),
\]
restricting to an equivalence between the finitary subcategories
$\mathrm{Loc}^{\mathrm{cont}}_{\omega}(\mathcal{D}) \xrightarrow{\sim} \mathrm{Loc}_{\omega}(\mathcal{D})$.
Write $F^{\mathrm{cont}}$ for the inverse image of $F \in \mathrm{Loc}(\mathcal{D})$.
{{< /theorem >}}

{{< proof >}}
For $F \in \mathrm{Loc}(\mathcal{D})$, the natural cofibre sequence
$\mathcal{C} \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathsf{Ind}(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C}))$
and the Eilenberg swindle force
\[
    F^{\mathrm{cont}}(\mathcal{C}) \coloneqq \Omega F(\mathsf{Calk}^{\mathrm{cont}}(\mathcal{C})).
\]
This gives $F^{\mathrm{cont}}(\mathsf{Ind}(-)) = F$ by
{{< thmref "prop-cont-extends-calk" >}}, and $F^{\mathrm{cont}}$ is determined
by this. That $\mathsf{Calk}^{\mathrm{cont}}$ preserves Verdier cofibre
sequences (part of {{< thmref "prop-calk-cont-seq" >}}) together with $F$'s
localizing property gives localizingness of $F^{\mathrm{cont}}$. The finitary
case is analogous, using that $\mathsf{Calk}^{\mathrm{cont}}$ preserves
filtered colimits up to $\mathrm{k}$-equivalence.
{{< /proof >}}

In particular this produces $\mathrm{K}^{\mathrm{cont}}$ as the unique
continuous extension of $\mathrm{K}$ — the universal status claimed on the
index page of this series.

## References

<ul class="refs">
<li id="ref-sheaves-on-manifolds"><strong>A. Krause, T. Nikolaus, P. Pützstück</strong>. <em>Sheaves on Manifolds</em>. 2024. <a href="https://philpuetzstueck.gitlab.io/documents/sheaves-on-manifolds.pdf">PDF</a>.</li>
<li id="ref-efimov-k-theory"><strong>A. I. Efimov</strong>. <em>K-theory and localizing invariants of large categories</em>. 2025. <a href="https://arxiv.org/abs/2405.12169">arXiv:2405.12169</a>.</li>
<li id="ref-ramzi-dualizable"><strong>M. Ramzi</strong>. <em>Dualizable presentable $\infty$-categories</em>. 2024. <a href="https://arxiv.org/abs/2410.21537">arXiv:2410.21537</a>.</li>
</ul>
