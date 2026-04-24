---
title: "Algebraic K-theory"
date: 2026-04-24
draft: false
math: true
weight: 10
tags:
  - K-theory
  - algebraic K-theory
  - Waldhausen construction
  - Verdier sequence
categories:
  - Mathematics
ShowToc: true
TocOpen: false
description: >
  Connective and non-connective algebraic K-theory via cospans and the Waldhausen
  S-construction; Verdier sequences in stable and non-stable settings; the
  non-connective extension via iterated Calkin categories.
---

In this section we first define the *connective* K-theory spectrum
$\mathrm{k}(\mathcal{C})$ of a category with finite colimits, then extend it to
the *non-connective* K-theory spectrum $\mathrm{K}(\mathcal{C})$.

## Connective K-theory

{{< construction id="cons-cospan" title="Cospan category" >}}
Let $\mathcal{C}$ be a category with pushouts. Applied to the saturated triple
$(\mathcal{C}^{\mathrm{op}}, \mathcal{C}^{\mathrm{op}}, \mathcal{C}^{\mathrm{op}})$,
the twisted arrow construction produces a complete Segal anima
$\mathrm{N}\mathsf{Span}(\mathcal{C}^{\mathrm{op}})$; denote the corresponding
category by $\mathsf{coSpan}(\mathcal{C})$. Concretely:

- Objects of $\mathsf{coSpan}(\mathcal{C})$ are the objects of $\mathcal{C}$.
- A morphism $X \to Y$ in $\mathsf{coSpan}(\mathcal{C})$ is a cospan
  {{< tikzcd >}}
      & W \\
      X \ar[ur] && Y \ar[ul]
    
{{< /tikzcd >}}
- A $2$-morphism between cospans $[X \to W \leftarrow Y]$ and
  $[X \to W' \leftarrow Y]$ is an equivalence $W \xrightarrow{\sim} W'$
  compatible with the two legs:
  {{< tikzcd >}}
      & W \ar[dd, "\simeq"] \\
      X \ar[ur] \ar[dr] && Y \ar[ul] \ar[dl] \\
      & W'
    
{{< /tikzcd >}}

The cospan category inherits a symmetric monoidal structure from the coproduct
on $\mathcal{C}^{\sqcup}$ (*not* the coproduct monoidal structure on
$\mathsf{coSpan}(\mathcal{C})$ itself).
{{< /construction >}}

{{< definition id="def-connective-k" title="Connective algebraic K-theory" >}}
Let $\mathcal{C}$ be a category with finite colimits. Its **connective algebraic
K-theory** is
\[
    \mathrm{k}(\mathcal{C}) \coloneqq \Omega\left| \mathrm{N}\mathsf{Span}(\mathcal{C}^{\mathrm{op}}) \right|.
\]
For $n \ge 0$ set $\mathrm{k}_n(\mathcal{C}) \coloneqq \pi_n(\mathrm{k}(\mathcal{C}))$.
{{< /definition >}}

Since $\mathsf{coSpan}(\mathcal{C})$ is symmetric monoidal, its geometric
realisation $\left| \mathrm{N}\mathsf{Span}(\mathcal{C}^{\mathrm{op}}) \right|$
is naturally a commutative monoid in $\mathsf{An}$. Group completion — equivalently,
passage to loops — turns it into a commutative group in $\mathsf{An}$. The
equivalence between commutative groups in anima and connective spectra
$\mathsf{Sp}_{\ge 0}$ produces the associated spectrum
\[
    \mathbb{B}^{\infty}\!\left(\Omega\left| \mathrm{N}\mathsf{Span}(\mathcal{C}^{\mathrm{op}}) \right|\right)
    \in \mathsf{Sp}_{\ge 0},
\]
which we also denote by $\mathrm{k}(\mathcal{C})$ when there is no risk of
confusion.

### Intuition

At the abstract level, $\mathrm{k}(\mathcal{C})$ already has a commutative group
structure. More concretely, its construction encodes the additive relations
coming from pushouts, with the initial object corresponding to the zero
element $[\varnothing] = 0$.

To see this relation strictly inside $|\mathsf{coSpan}(\mathcal{C})|$, choose
$\varnothing$ as the basepoint. For each object $X$ of $\mathcal{C}$, define two
morphisms in $\mathsf{coSpan}(\mathcal{C})$:
\begin{align*}
    a_X &\coloneqq (X \to X \leftarrow \varnothing) \qquad \text{(a morphism } X \to \varnothing\text{),} \\
    b_X &\coloneqq (\varnothing \to X \leftarrow X) \qquad \text{(a morphism } \varnothing \to X\text{).}
\end{align*}
The composite $a_X \circ b_X$ is the self-map of $\varnothing$ given by the
cospan $\varnothing \to X \leftarrow \varnothing$; this is a loop at the
basepoint, whose homotopy class we denote $[X]$ (or $p_X$).

More generally:

- For a morphism $g = (X \to A \leftarrow \varnothing)\colon X \to \varnothing$,
  the composite $g \circ b_X$ has central pushout $A$, so it represents the
  loop $p_A$.
- For a morphism $f = (\varnothing \to B \leftarrow X)\colon \varnothing \to X$,
  the composite $a_X \circ f$ has central pushout $B$, hence is $p_B$.
- The composite $g \circ f$ traces out the loop $p_{A \sqcup_X B}$ via the
  pushout $A \leftarrow X \to B$.

In the abelian group $\pi_1(|\mathsf{coSpan}(\mathcal{C})|)$ one has (in additive
notation)
\[
    [g \circ f] = [g \circ b_X] - [a_X \circ b_X] + [a_X \circ f],
\]
so
\[
    [A \sqcup_X B] = [A] - [X] + [B]
    \quad\Longrightarrow\quad
    [A \sqcup_X B] + [X] = [A] + [B].
\]
Geometrically: every pushout diagram in $\mathsf{coSpan}(\mathcal{C})$ supplies
a $2$-cell inside the geometric realisation, making the homotopy identity
above hold. In particular the cofibre sequence $X \xrightarrow{f} Y \to Y/X$
corresponds to the pushout $\varnothing \sqcup_X Y \simeq Y/X$; taking
$A = \varnothing$ and $B = Y$ gives
\[
    [Y/X] + [X] = [\varnothing] + [Y] = [Y].
\]
Thus, at the level of $\pi_1$, the relation $[Y] = [X] + [Y/X]$ is faithfully
witnessed.

This construction, however, is less transparent at higher homotopy levels. We
now give a second, more homotopically lucid construction of algebraic K-theory —
the **Waldhausen $S$-construction**.

For this second construction we need $\mathcal{C}$ to be *pointed* with finite
colimits. Before giving the simplicial object itself, here is the motivating
picture.

We seek an anima $W$ whose fundamental group is $\mathrm{k}_0(\mathcal{C})$ and
whose higher homotopy groups give the higher K-groups directly. So $W$ should
carry the following data:

1. a basepoint $0$;
2. for each $X \in \mathcal{C}$ a loop in $W$, representing $[X] \in \pi_1(W) \simeq \mathrm{k}_0(\mathcal{C})$;
3. for each cofibre sequence $X \to Y \to Y/X$, the relation $[Y] = [X] + [Y/X]$ in $\pi_1(W)$.
   Equivalently, every map $f\colon X \to Y$ should satisfy
   $[Y] = [Y/X] + [X]$ where $Y/X \coloneqq \mathrm{cofib}(f)$;
4. higher coherence data: for a sequence $X \to Y \to Z$ we want
   $[Z] = [X] + [Y/X] + [Z/Y]$. Two natural routes derive this:
   - via $X \to Z \to Z/X$ and $Y/X \to Z/X \to Z/Y$, giving $[Z] = [X] + [Z/X]$
     and $[Z/X] = [Y/X] + [Z/Y]$; or
   - via $Y \to Z \to Z/Y$ and $X \to Y \to Y/X$, giving $[Z] = [Y] + [Z/Y]$
     and $[Y] = [X] + [Y/X]$.

   Each route is the concatenation of two $2$-cells; the four $2$-cells bound
   a $2$-sphere inside $|W|$, and the composable pair $(f,g)$ supplies a
   $3$-cell filling it. All of this is packaged in the $\mathsf{S}_3$ diagram
   {{< tikzcd >}}
       0 \ar[r] & X \ar[r] \ar[d] & Y \ar[r] \ar[d] & Z \ar[d] \\
       & 0 \ar[r] & Y/X \ar[r] \ar[d] & Z/X \ar[d] \\
       && 0 \ar[r] & Z/Y \ar[d] \\
       &&& 0
     
{{< /tikzcd >}}
5. and this pattern extends: length-$n$ sequences give objects of
   $\mathsf{S}_n\mathcal{C}$, consisting of all subquotients $X_j / X_i$ and
   their pushout relations; the boundary of each such object is a
   $(n-1)$-sphere built from lower-order $\mathsf{S}$-data, and the new
   $\mathsf{S}_n$-data provides the $n$-cell that fills it.

{{< construction id="S" title="Waldhausen S-construction" >}}
Let $\mathcal{C}$ be a pointed category with finite colimits. Its **Waldhausen
$\mathsf{S}$-construction** is the simplicial object
$\mathsf{S}_{\bullet}\mathcal{C}$ whose level $n$,
$\mathsf{S}_n\mathcal{C} \subseteq \mathsf{Fun}(\mathsf{Ar}[n], \mathcal{C})$,
is the full subcategory spanned by $x\colon \mathsf{Ar}[n] \to \mathcal{C}$ with

- $x_{i,i} = 0$ for $0 \le i \le n$;
- every square
  {{< tikzcd >}}
      x_{i,j} \ar[r] \ar[d] & x_{i,j+1} \ar[d] \\
      x_{i+1,j} \ar[r] & x_{i+1,j+1}
    
{{< /tikzcd >}}
  with $0 \le i < j < n$ is a pushout.

The simplicial-category structure comes from the functoriality in $[n]$ of
$\mathsf{Fun}(\mathsf{Ar}[n], \mathcal{C})$. In other words, $\mathsf{S}_n\mathcal{C}$
is the category of diagrams of the shape
{{< tikzcd >}}
    0 \ar[r] & x_{0,1} \ar[r] \ar[d] & \cdots \ar[r] & x_{0,n-1} \ar[r] \ar[d] & x_{0,n} \ar[d] \\
    & 0 \ar[r] & \cdots \ar[r] & x_{1,n-1} \ar[r] \ar[d] & x_{1,n} \ar[d] \\
    && \ddots & \vdots \ar[d] & \vdots \ar[d] \\
    &&& 0 \ar[r] & x_{n-1,n} \ar[d] \\
    &&&& 0
  
{{< /tikzcd >}}
with every square a pushout.
{{< /construction >}}

{{< proposition >}}
When $\mathcal{C}$ is a pointed category with finite colimits, the constructions
{{< thmref "S" >}} and {{< thmref "cons-cospan" >}} produce the same algebraic
K-theory.
{{< /proposition >}}

{{< proof >}}
See the entry on the Quillen Q-construction.
{{< /proof >}}

We next show that $\mathcal{C}$ and its pointed completion have the same
algebraic K-theory.

{{< construction >}}
Let $\mathcal{C}$ be a category with finite colimits. Consider the pointed
version $\mathsf{Ind}(\mathcal{C})_*$ of $\mathsf{Ind}(\mathcal{C})$ and the
canonical composite
\[
    \mathcal{C} \xrightarrow{\;y\;} \mathsf{Ind}(\mathcal{C}) \xrightarrow{\;(-)_+\;} \mathsf{Ind}(\mathcal{C})_*.
\]
Let $\mathcal{C}_+$ denote the smallest full subcategory generated under finite
colimits by the essential image of this composite. One checks that the functor
$\mathcal{C} \to \mathcal{C}_+$ is the *pointed completion* of $\mathcal{C}$: it
turns $\mathcal{C}$ into a pointed category with finite colimits.

Equipping $\mathsf{Cat}^{\mathrm{rex}}$ with the Lurie tensor product,
$\mathcal{C}_+$ is naturally identified with
$\mathcal{C} \otimes \mathsf{An}_*^{\mathrm{fin}}$. Since the Lurie tensor
product preserves colimits in each variable, the assignment
$\mathcal{C} \mapsto \mathcal{C}_+$ preserves filtered colimits.

Another useful point: let
$\mathsf{Cat}^{\mathrm{rex}}_* \subset \mathsf{Cat}^{\mathrm{rex}}$ be the
subcategory of pointed categories with finite colimits and finite-colimit-preserving
pointed functors. Then $\mathsf{Cat}^{\mathrm{rex}}_*$ is closed under colimits
in $\mathsf{Cat}^{\mathrm{rex}}$.
{{< /construction >}}

{{< proposition id="prop-pointed" >}}
The finite-colimit-preserving functor $\mathcal{C} \to \mathcal{C}_+$ induces
an equivalence $\mathrm{k}(\mathcal{C}) \simeq \mathrm{k}(\mathcal{C}_+)$.
{{< /proposition >}}

{{< proof >}}
First suppose $\mathcal{C}$ has a terminal object $*$. Then $\mathcal{C}_+ = \mathcal{C}_{*/}$,
so the task reduces to showing that the functor
\[
    \mathsf{coSpan}(\mathcal{C}) \to \mathsf{coSpan}(\mathcal{C}_+)
\]
induces an equivalence on geometric realisations.

There is a forgetful functor $\mathcal{C}_{*/} \to \mathcal{C}$ preserving
pushouts (but not the initial object). Consider the composites
\[
    \mathcal{C}_+ \to \mathcal{C} \to \mathcal{C}_+, \qquad X \mapsto X_+ = X \sqcup *,
\]
(with basepoint the newly adjoined $*$), and the reverse composite
\[
    \mathcal{C} \to \mathcal{C}_+ \to \mathcal{C}, \qquad X \mapsto X_+.
\]
Since the $\mathsf{coSpan}$ construction depends only on pushouts, it is
functorial in pushout-preserving functors. In both composites the canonical map
$X \to X \sqcup *$ is a natural transformation from the identity to the
composite, and for each morphism $f\colon X \to Y$ the square
{{< tikzcd >}}
        X \ar[r] \ar[d, "f"] & X \sqcup * \ar[d, "f \sqcup \mathrm{id}_*"] \\
        Y \ar[r] & Y \sqcup *
    
{{< /tikzcd >}}
is a pushout. By {{< cite "sheaves-on-manifolds" "Prop. 3.1.9" >}}, a natural
transformation whose squares are all pushouts induces a homotopy between the
$\mathsf{coSpan}$ realisations. Thus each composite is homotopic to the
identity on $\mathrm{k}$, and the forgetful and $(-)_+$ functors induce
mutually inverse equivalences $\mathrm{k}(\mathcal{C}) \simeq \mathrm{k}(\mathcal{C}_+)$
whenever $\mathcal{C}$ has a terminal object.

In general, view $\mathsf{Ar}(\mathcal{C}) \to \mathcal{C}$ as the left Bousfield
localisation of $\mathcal{C}$ at $t$-pushout maps, so that $\mathcal{C}$ is a
colimit of its over-categories,
\[
    \mathcal{C} \simeq \operatorname*{colim}_{X \in \mathcal{C}} \mathcal{C}_{/X}.
\]
Each $\mathcal{C}_{/X}$ has the terminal object $\mathrm{id}_X$, so the first
part gives $\mathrm{k}(\mathcal{C}_{/X}) \xrightarrow{\sim} \mathrm{k}((\mathcal{C}_{/X})_+)$.
Since $\mathcal{C}$ has finite colimits it is filtered as an index, and
$\mathcal{C}_+ \simeq \operatorname*{colim}_X (\mathcal{C}_{/X})_+$.
Filtered colimits are preserved by both $\mathrm{k}$ and $(-)_+$
({{< thmref "prop-k-filtered" >}}), so the equivalence lifts to
\[
    \mathrm{k}(\mathcal{C})
    \simeq \operatorname*{colim}_X \mathrm{k}(\mathcal{C}_{/X})
    \xrightarrow{\;\sim\;} \operatorname*{colim}_X \mathrm{k}((\mathcal{C}_{/X})_+)
    \simeq \mathrm{k}(\mathcal{C}_+).
\]
{{< /proof >}}

### Basic properties

{{< thmref "def-connective-k" >}} is well-behaved on morphisms. Writing
$\mathsf{Cat}^{\mathrm{rex}}$ for categories with finite colimits and
right-exact functors between them,
{{< thmref "def-connective-k" >}} upgrades to a functor
\[
    \mathrm{k}\colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}_{\ge 0}.
\]

Recall that both $\mathsf{Cat}^{\mathrm{rex}}$ and
$\mathsf{Sp}_{\ge 0}$ are **semi-additive**, i.e. finite products coincide
with finite coproducts.

The geometric-realisation functor is essentially a sifted colimit, so it
commutes with finite products in $\mathsf{An}$; the loop functor $\Omega$, as a
right adjoint, preserves limits. Combining these, $\mathrm{k}$ preserves finite
products, and in a semi-additive category that amounts to preserving finite
coproducts. More informally, for functors $F, G\colon \mathcal{C} \to \mathcal{D}$,
\[
    \mathrm{k}(F \sqcup G) \simeq \mathrm{k}(F) + \mathrm{k}(G).
\]

In fact $\mathrm{k}$ also preserves filtered colimits:

{{< proposition id="prop-k-filtered" >}}
$\mathrm{k}\colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}_{\ge 0}$ preserves
filtered colimits.
{{< /proposition >}}

{{< proof >}}
First, filtered colimits in $\mathsf{Cat}^{\mathrm{rex}}$ agree with those in
$\mathsf{Cat}$. The claim then reduces to showing that, for a filtered colimit
$\mathcal{C} \simeq \operatorname*{colim}_i \mathcal{C}_i$ in $\mathsf{Cat}$
(so $\mathcal{C}^{\mathrm{op}} \simeq \operatorname*{colim}_i \mathcal{C}_i^{\mathrm{op}}$),
one has
\[
    \operatorname*{colim}_{i} \mathrm{N}\mathsf{Span}(\mathcal{C}_i^{\mathrm{op}})
    \simeq \mathrm{N}\mathsf{Span}(\mathcal{C}^{\mathrm{op}})
\]
in $\mathsf{CSeg}(\mathsf{An})$. Complete Segal objects are simplicial objects,
and simplicial colimits are levelwise. At level $n$,
$\mathrm{N}\mathsf{Span}(\mathcal{C})_n = \mathrm{Hom}_{\mathsf{AdTrip}}(\mathsf{TwAr}([n]), \mathcal{C})$,
and $\mathrm{Hom}_{\mathsf{AdTrip}}(\mathsf{TwAr}([n]), -)$ preserves filtered
colimits, so the claim follows.
{{< /proof >}}

### Stabilisation

We now extend connective K-theory to stable categories. Since $\mathcal{C}$ has
only finite colimits, we cannot stabilise by taking limits directly; instead
we dualise and build the Spanier–Whitehead category.

{{< definition title="Spanier–Whitehead category" >}}
Let $\mathcal{C}$ be a category with finite colimits. Its **Spanier–Whitehead
category** is
\[
    \mathsf{SW}(\mathcal{C})
    \coloneqq \operatorname{colim}\!\left(
        \mathcal{C}_+ \xrightarrow{\Sigma_+} \mathcal{C}_+ \xrightarrow{\Sigma_+} \cdots
    \right),
\]
with colimit computed in $\mathsf{Cat}^{\mathrm{rex}}$. By Gabriel–Ulmer duality
$\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \simeq \mathsf{Pr}_{\aleph_0}^L$ and
the fact that Ind does not distinguish a small category from its idempotent
completion ($\mathsf{Ind}(\mathcal{A}) \simeq \mathsf{Ind}(\mathcal{A}^{\mathrm{idem}})$),
we get $\mathsf{Ind}(\mathsf{SW}(\mathcal{C})) \in \mathsf{Pr}_{\aleph_0}^L$.
Colimits in $\mathsf{Pr}_{\aleph_0}^L$ are limits in $\mathsf{Pr}_{\aleph_0}^R$,
and the forgetful functor $\mathsf{Pr}_{\aleph_0}^R \to \mathsf{Cat}$ preserves
limits, which gives
\[
    \mathsf{Ind}(\mathsf{SW}(\mathcal{C}))
    \simeq \mathsf{Sp}(\mathsf{Ind}(\mathcal{C}))
    \simeq \mathsf{Sp} \otimes \mathsf{Ind}(\mathcal{C}).
\]
The canonical composite is $\mathcal{C} \to \mathcal{C}_+ \to \mathsf{SW}(\mathcal{C})$.
{{< /definition >}}

{{< proposition id="prop-sw" >}}
The canonical functor $\mathcal{C} \to \mathsf{SW}(\mathcal{C})$ induces an
equivalence
\[
    \mathrm{k}(\mathcal{C}) \xrightarrow{\;\sim\;} \mathrm{k}(\mathsf{SW}(\mathcal{C})).
\]
{{< /proposition >}}

{{< proof >}}
Combine {{< thmref "prop-k-filtered" >}} and {{< thmref "prop-pointed" >}}.
{{< /proof >}}

So connective K-theory restricts to a functor
\[
    \mathrm{k}\colon \mathsf{Cat}^{\mathrm{ex}} \to \mathsf{Sp}_{\ge 0}.
\]

### Dense embeddings and cofinality

{{< definition >}}
Let $\mathcal{C}, \mathcal{D}$ be categories with finite colimits. A functor
$i\colon \mathcal{C} \hookrightarrow \mathcal{D}$ is a **dense embedding** if it
is fully faithful and every object of $\mathcal{D}$ is a retract of some $i(c)$.
{{< /definition >}}

{{< example >}}
The idempotent completion $\mathcal{C} \to \mathcal{C}^{\mathrm{idem}}$ is a
dense embedding.
{{< /example >}}

{{< proposition id="prop-cofinal" title="Cofinality" >}}
Let $\mathcal{C} \to \mathcal{D}$ be a dense embedding. The cofibre of
$\mathrm{k}(\mathcal{C}) \to \mathrm{k}(\mathcal{D})$ is $0$-truncated: the map
$\mathrm{k}_i(\mathcal{C}) \to \mathrm{k}_i(\mathcal{D})$ is an isomorphism for
$i > 0$ and injective for $i = 0$.

A class $[D] \in \mathrm{k}_0(\mathcal{D})$ lies in the essential image of
$\mathrm{k}_0(\mathcal{C})$ iff there exists $n \ge 0$ with $\Sigma^n(D_+)$ in
the essential image of $\mathcal{C}_+ \to \mathcal{D}_+$.
{{< /proposition >}}

It is natural to ask whether K-theory detects essential surjectivity: given
$D \in \mathcal{D}$, is $D$ in $\mathcal{C} \subseteq \mathcal{D}$?

Clearly a necessary condition is that $[D] \in \mathrm{k}_0(\mathcal{D})$ lies
in the image. When $\mathcal{C}$ and $\mathcal{D}$ are both stable, this is
also sufficient. In the unstable case, cofinality only guarantees that *some*
suspension of $D$ lies in the image; there are classical counterexamples in
topology of finitely dominated but non-finite anima. After two suspensions,
however, any finitely dominated anima becomes simply connected (and remains
finitely dominated); Wall's insight is that simply connected finitely dominated
anima are automatically finite.

{{< proposition title="Wall's finiteness obstruction" >}}
Let $\mathcal{C} \hookrightarrow \mathcal{D}$ be a dense embedding in
$\mathsf{Cat}^{\mathrm{rex}}$. An object $d \in \mathcal{D}$ lies in the
essential image of $\mathcal{C}$ iff the class
$[\mathrm{id}_d] \in \mathrm{k}_0(\mathcal{D}_{/d})$ is in the essential image
of
\[
    \mathrm{k}_0(\mathcal{C}_{/d}) \to \mathrm{k}_0(\mathcal{D}_{/d}).
\]
{{< /proposition >}}

{{< example >}}
Apply this to the embedding
$\mathsf{An}^{\mathrm{fin}} \hookrightarrow \mathsf{An}^{\aleph_0}$ of finite
and finitely dominated anima. For $X \in \mathsf{An}^{\aleph_0}_{\ge 1}$, $X$
is a finite anima iff $[\mathrm{id}_X] \in \mathrm{k}_0(\mathsf{An}_{/X}^{\aleph_0})
= \mathrm{k}_0((\mathsf{Sp}^X)^{\aleph_0})$ lies in the essential image of
$\mathrm{k}_0((\mathsf{Sp}^X)^{\mathrm{fin}}) \to \mathrm{k}_0((\mathsf{Sp}^X)^{\aleph_0})$.
For connected $X$,
\[
    \mathrm{k}_0((\mathsf{Sp}^X)^{\aleph_0}) = \mathrm{k}_0(\mathbb{S}[\Omega X]) = \mathrm{k}_0(\mathbb{Z}[\pi_1 X]),
\]
and $\mathrm{k}_0((\mathsf{Sp}^X)^{\mathrm{fin}}) = \mathbb{Z}$. The finiteness
question reduces to whether $[\mathrm{id}_X]$ vanishes in the reduced K-group
\[
    \tilde{\mathrm{k}}_0(\mathbb{Z}[\pi_1 X]) = \mathrm{k}_0(\mathbb{Z}[\pi_1 X])/\mathbb{Z}.
\]
{{< /example >}}

## Non-connective K-theory

We now extend $\mathrm{k}\colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}_{\ge 0}$
to a functor
\[
    \mathrm{K}\colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}
\]
landing in all spectra — the non-connective K-theory.

### Verdier sequences

#### The stable case

{{< definition >}}
Let
\[
    \mathcal{C} \xrightarrow{f} \mathcal{D} \xrightarrow{p} \mathcal{E}
\]
be a sequence in $\mathsf{Cat}^{\mathrm{ex}}$ with $p \circ f \simeq 0$. It is
a **Verdier sequence** if it is simultaneously a fibre and cofibre sequence in
$\mathsf{Cat}^{\mathrm{ex}}$. In this case $f$ is a **Verdier embedding** and
$p$ is a **Verdier projection**.
{{< /definition >}}

{{< remark >}}
The condition $p \circ f \simeq 0$ is taken inside
$\mathsf{Fun}^{\mathrm{ex}}(\mathcal{C}, \mathcal{E})$. Equivalently,
$p \circ f$ factors as $\mathcal{C} \to \{0\} \subset \mathcal{E}$, i.e. there
is a commuting square
{{< tikzcd >}}
        \mathcal{C} \ar[r, "f"] \ar[d] & \mathcal{D} \ar[d, "p"] \\
        \{0\} \ar[r] & \mathcal{E}.
    
{{< /tikzcd >}}
{{< /remark >}}

Recall how fibres and cofibres are computed in $\mathsf{Cat}^{\mathrm{ex}}$.
The fibre of an exact $F\colon \mathcal{C} \to \mathcal{D}$ is the categorical
fibre; the cofibre is subtler.

{{< definition title="Verdier quotient" >}}
Let $F\colon \mathcal{C} \to \mathcal{D}$ be exact. A morphism
$f\colon d \to d'$ in $\mathcal{D}$ is an **isomorphism modulo $\mathcal{C}$**
if $\mathrm{cofib}(f)$ lies in the smallest stable subcategory containing the
essential image of $F$. Let $\mathcal{D}/\mathcal{C}$ be the localisation of
$\mathcal{D}$ at the class $W$ of such morphisms — the **Verdier quotient** of
$\mathcal{D}$ by $\mathcal{C}$.
{{< /definition >}}

{{< proposition >}}
Let $F\colon \mathcal{C} \to \mathcal{D}$ be exact.

1. $\mathcal{D}/\mathcal{C}$ is stable.
2. For any stable $\mathcal{E}$, the restriction
   $\mathsf{Fun}^{\mathrm{ex}}(\mathcal{D}/\mathcal{C}, \mathcal{E}) \to \mathsf{Fun}^{\mathrm{ex}}(\mathcal{D}, \mathcal{E})$
   is fully faithful with essential image the functors whose precomposition
   with $F$ vanishes. In particular,
   $\mathcal{C} \to \mathcal{D} \to \mathcal{D}/\mathcal{C}$ is a cofibre
   sequence in $\mathsf{Cat}^{\mathrm{ex}}$.
{{< /proposition >}}

#### The non-stable case

$\mathsf{Cat}^{\mathrm{rex}}$ is pointed, with zero object the terminal category
$*$, so we can consider cofibre sequences there too. For
$F\colon \mathcal{C} \to \mathcal{D}$ the cofibre is the pushout
{{< tikzcd >}}
        \mathcal{C} \ar[r, "F"] \ar[d] \ar[dr, phantom, very near end, "\ulcorner"] & \mathcal{D} \ar[d] \\
        * \ar[r] & \mathcal{D}/\mathcal{C}.
    
{{< /tikzcd >}}

For concrete computation we lift everything to presentable categories using
Gabriel–Ulmer duality. In its strict form,
\[
    \mathsf{Ind}\colon \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \xrightarrow{\;\simeq\;} \mathsf{Pr}_{\aleph_0}^L \colon (-)^{\omega},
\]
where $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$ is idempotent-complete
categories with finite colimits. Idempotent completeness cannot be dropped at
$\kappa = \aleph_0$: there exist non-idempotent-complete categories with finite
colimits, and for such a $\mathcal{C}$ the category $\mathsf{Ind}(\mathcal{C})^{\omega}$
is idempotent-complete (it is the idempotent completion $\mathcal{C}^{\mathrm{idem}}$),
not $\mathcal{C}$ itself.

{{< remark id="rmk-idem-automatic" >}}
For uncountable $\kappa$ the picture simplifies. A category with $\kappa$-small
colimits automatically has all countable colimits, in particular sequential
colimits. By {{< cite "lurie-htt" "Prop. 5.5.7.8" >}} or
{{< cite "kerodon" "Cor. 8.5.4.19" >}}, a category admitting sequential
colimits (or limits) is automatically idempotent-complete, since split
idempotents are realised as sequential colimits. Hence for $\kappa > \aleph_0$,
\[
    \mathsf{Cat}^{\mathrm{rex}(\kappa)} \simeq \mathsf{Pr}_{\kappa}^L,
\]
with no extra idempotent-completeness hypothesis. We will use this repeatedly
when working with $\mathsf{Ind}(\mathcal{C})^{\aleph_1}$.
{{< /remark >}}

Returning to cofibres. Gabriel–Ulmer extends $F$ to a colimit-preserving
functor between presentable categories,
\[
    \mathsf{Ind}(F)\colon \mathsf{Ind}(\mathcal{C}) \to \mathsf{Ind}(\mathcal{D}).
\]
Colimits in $\mathsf{Cat}^{\mathrm{rex}}$ are unwieldy to compute directly;
using $\mathsf{Pr}_{\aleph_0}^L \simeq (\mathsf{Pr}_{\aleph_0}^R)^{\mathrm{op}}$,
a colimit in $\mathsf{Cat}^{\mathrm{rex}}$ is a limit in $\mathsf{Pr}_{\aleph_0}^R$,
and the forgetful $\mathsf{Pr}_{\aleph_0}^R \to \mathsf{Cat}$ preserves limits,
letting us compute in $\mathsf{Cat}$.

Concretely, consider $\mathsf{Ind}(F)^R\colon \mathsf{Ind}(\mathcal{D}) \to \mathsf{Ind}(\mathcal{C})$,
and let $K \coloneqq \mathrm{fib}(\mathsf{Ind}(F)^R)$ — the full subcategory of
$\mathsf{Ind}(\mathcal{D})$ on those $d$ with $\mathsf{Ind}(F)^R(d) \simeq *$.
From the right-adjoint side this is exactly the cofibre of the large picture:
$K \simeq \mathsf{Ind}(\mathcal{D}/\mathcal{C})$.

To get back to the left-adjoint side, take the left adjoint of the inclusion
$K \hookrightarrow \mathsf{Ind}(\mathcal{D})$ to get a localisation
$\mathsf{Ind}(\mathcal{D}) \to K$; restricting along
$\mathcal{D} \subset \mathsf{Ind}(\mathcal{D})$ gives
$p\colon \mathcal{D} \to K$.

This is where the idempotent-completeness issue resurfaces. Because the genuine
Gabriel–Ulmer duality is
$\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \simeq \mathsf{Pr}_{\aleph_0}^L$,
passing from $K \in \mathsf{Pr}_{\aleph_0}^L$ to small categories by taking
compact objects gives $K^{\omega} = (\mathcal{D}/\mathcal{C})^{\mathrm{idem}}$
— the idempotent completion of the cofibre. The cofibre itself is the full
subcategory of $K$ generated under finite colimits by the essential image of
$p$.

Under the further assumptions that

- $F$ is fully faithful (hence so is $\mathsf{Ind}(F)$), and
- $\mathsf{Ind}(F)^R$ preserves pushouts,

one obtains the pushout square
{{< tikzcd >}}
        \mathsf{Ind}(F)\mathsf{Ind}(F)^R(d) \ar[r] \ar[d] \ar[dr, phantom, very near end, "\ulcorner"] & d \ar[d] \\
        \mathsf{Ind}(F)(*) \ar[r] & \mathsf{Ind}(p)^R \mathsf{Ind}(p)(d)
    
{{< /tikzcd >}}
and mapping spaces are
\[
    \mathrm{Hom}_{\mathcal{D}/\mathcal{C}}(pd, pd')
    \simeq \mathrm{Hom}_{\mathsf{Ind}(\mathcal{D})}\!\left(
        y(d),\, y(d') \sqcup_{\mathsf{Ind}(F)\mathsf{Ind}(F)^R(y(d'))} \mathsf{Ind}(F)(*)
    \right).
\]
This is the unstable analogue of the Verdier quotient's mapping-space formula;
in the stable case both assumptions are automatic. The description is
compatible with idempotent completion, since
$\mathsf{Ind}(\mathcal{C}^{\mathrm{idem}}) \simeq \mathsf{Ind}(\mathcal{C})$.

What we actually care about are the cofibre sequences in
$\mathsf{Cat}^{\mathrm{rex}}$ that induce long exact sequences in connective
K-theory. This property is *not* automatic under idempotent completion
(recall cofinality: dense embeddings are only injective, not surjective, on
$\mathrm{k}_0$). The following definition assembles all the needed technical
assumptions.

{{< definition id="def-verdier-rex" title="Verdier sequence in Cat^rex" >}}
A sequence
\[
    \mathcal{C} \xrightarrow{i} \mathcal{D} \xrightarrow{p} \mathcal{E}
\]
in $\mathsf{Cat}^{\mathrm{rex}}$ is a **Verdier sequence** if:

- it is a cofibre sequence;
- $i$ is fully faithful;
- $\mathsf{Ind}(i)^R$ preserves pushouts;
- the image of $i_+\colon \mathcal{C}_+ \to \mathcal{D}_+$ is closed under
  retracts.
{{< /definition >}}

{{< remark >}}
It is not clear whether retract-closedness for $i$ itself already implies the
same for $i_+$. When $\mathcal{C}$ is idempotent-complete, $\mathcal{C}_+$ is
too ({{< thmref "rmk-idem-automatic" >}}), and fully faithfulness of $i_+$
automatically gives retract-closedness of its image. When $\mathcal{C}$ and
$\mathcal{D}$ are both stable, the definition reduces to the stable Verdier
sequence.
{{< /remark >}}

{{< proposition id="prop-verdier-seq" >}}
Let $S = (\mathcal{C} \xrightarrow{i} \mathcal{D} \xrightarrow{p} \mathcal{E})$
be a sequence in $\mathsf{Cat}^{\mathrm{rex}}$. Consider the conditions:

1. $S$ is a cofibre sequence, both $\mathcal{C}$ and $\mathcal{D}$ have
   terminal objects, $i$ is fully faithful with retract-closed image, and $i$
   preserves the terminal object (then $\mathcal{E}$ also has a terminal
   object, and $p$ preserves it).
2. $S$ is a Verdier sequence ({{< thmref "def-verdier-rex" >}}).
3. $(2')$ $S$ is a cofibre sequence, $i$ is fully faithful, $i_+$'s image is
   retract-closed, and $\mathsf{Ind}(i)$ is a strong left adjoint (its right
   adjoint has a right adjoint).
4. $S_+ = (\mathcal{C}_+ \xrightarrow{i_+} \mathcal{D}_+ \xrightarrow{p_+} \mathcal{E}_+)$
   is a cofibre sequence with $i_+$ fully faithful and retract-closed image.
5. $\mathsf{SW}(S)$ is a Verdier sequence in $\mathsf{Cat}^{\mathrm{ex}}$.
6. $\mathrm{k}(S) = (\mathrm{k}(\mathcal{C}) \to \mathrm{k}(\mathcal{D}) \to \mathrm{k}(\mathcal{E}))$
   is a fibre sequence in $\mathsf{Sp}_{\ge 0}$.

Then $(2') \Rightarrow (2) \Rightarrow (3) \Rightarrow (4) \Rightarrow (5)$
and $(1) \Rightarrow (3)$. Moreover:

- When $\mathcal{C}, \mathcal{D}$ (hence $\mathcal{E}$) are pointed,
  $(1) \Leftrightarrow (3)$ and $(2) \Leftrightarrow (2')$. When they are
  stable, all implications reverse except $(5) \Rightarrow (6)$.
- The functors $(-)^{\mathrm{idem}}$, $(-)_+$ and $\mathsf{SW}(-)$ preserve
  sequences of types $(1)$–$(4)$; the last two also preserve type $(6)$.
- The classes of sequences satisfying $(3)$, $(4)$, $(6)$ are each closed
  under filtered colimits in $\mathsf{Cat}^{\mathrm{rex}}$.
{{< /proposition >}}

{{< proof >}}
See {{< cite "sheaves-on-manifolds" "Prop. 3.2.3" >}}.

We sketch $(2) \Rightarrow (3)$, the most instructive unstable implication.
We must show $i_+$ is fully faithful. Recall
$\mathsf{Ind}((-)_+) \simeq \mathsf{An}_* \otimes \mathsf{Ind}(-)$, so
$\mathsf{Ind}(\mathcal{C}_+) \simeq \mathsf{Ind}(\mathcal{C})_*$ and
$\mathsf{Ind}(i_+) \simeq \mathsf{Ind}(i)_*$. In general, if
$\ell\colon \mathcal{A} \hookrightarrow \mathcal{B}$ is fully faithful in
$\mathsf{Pr}^L$ with $\ell^R$ preserving pushouts, then
$\ell_*\colon \mathcal{A}_* \to \mathcal{B}_*$ is fully faithful. Indeed,
$(\ell_*)^R$ is the restriction of $\ell^R$ to slice categories; fully
faithfulness of $\ell$ and pushout-preservation of $\ell^R$ together force the
counit of the adjunction $\ell_*$ to be an equivalence.
{{< /proof >}}

### Non-connective K-theory

Take an idempotent-complete $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$.
Consider the Yoneda embedding $y\colon \mathcal{C} \hookrightarrow \mathsf{Ind}(\mathcal{C})$
and its $\aleph_1$-truncation
$j\colon \mathcal{C} \hookrightarrow \mathsf{Ind}(\mathcal{C})^{\aleph_1}$.
We get a natural cofibre sequence
\[
    \mathcal{C} \xrightarrow{\;j\;} \mathsf{Ind}(\mathcal{C})^{\aleph_1}
    \longrightarrow \mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}.
\]
Idempotent completeness makes $j$ fully faithful with retract-closed image, and
$\mathsf{Ind}(j) = \hat{y}\colon \mathsf{Ind}(\mathcal{C}) \to \mathsf{Ind}(\mathsf{Ind}(\mathcal{C})^{\aleph_1})$
is a strong left adjoint (see the chapter on compactly assembled categories);
condition $(2')$ of {{< thmref "prop-verdier-seq" >}} is satisfied and the
sequence induces a fibre sequence on $\mathrm{k}$:
\[
    \mathrm{k}(\mathcal{C}) \to \mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1})
    \to \mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}).
\]

Next, $\mathsf{Ind}(\mathcal{C})^{\aleph_1}$ has countable colimits — in fact
all $\aleph_1$-small colimits, and is idempotent-complete by
{{< thmref "rmk-idem-automatic" >}}. The Eilenberg swindle gives
$\mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1}) \simeq 0$, and the fibre
sequence becomes
\[
    \mathrm{k}(\mathcal{C}) \simeq \Omega \mathrm{k}(\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}).
\]
In particular $\mathrm{k}_0(\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}) = 0$.

The quotient $\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}$ is not
automatically idempotent-complete, so we cannot iterate directly. Idempotent
completion plus cofinality ({{< thmref "prop-cofinal" >}}) gives
\[
    \mathrm{k}(\mathcal{C}) \simeq \tau_{\ge 0} \Omega \mathrm{k}\!\left((\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C})^{\mathrm{idem}}\right).
\]
The key point: $\mathrm{k}_0((\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C})^{\mathrm{idem}})$
need not vanish, signalling the existence of negative K-groups and the path to
extending K-theory to all spectra.

{{< definition title="Calkin category" >}}
For idempotent-complete $\mathcal{C}$ with finite colimits, the **Calkin
category** is
\[
    \mathsf{Calk}(\mathcal{C}) \coloneqq (\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C})^{\mathrm{idem}}.
\]
For general $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex}}$ and $n \ge 0$,
recursively define
\[
    \mathsf{Calk}^0(\mathcal{C}) = \mathcal{C}^{\mathrm{idem}}, \qquad
    \mathsf{Calk}^{n+1}(\mathcal{C}) = \mathsf{Calk}(\mathsf{Calk}^n(\mathcal{C})).
\]
This defines an endofunctor $\mathsf{Calk}\colon \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \to \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$.
{{< /definition >}}

For all $n \ge 0$,
\[
    \tau_{\ge 0} \Omega \mathrm{k}(\mathsf{Calk}^{n+1}(\mathcal{C})) \simeq \mathrm{k}(\mathsf{Calk}^n(\mathcal{C})),
\]
which leads naturally to the definition:

{{< definition title="Non-connective algebraic K-theory" >}}
Let $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex}}$. The **non-connective
algebraic K-theory** of $\mathcal{C}$ is the spectrum $\mathrm{K}(\mathcal{C})$
characterised by
\[
    \tau_{\ge -n} \mathrm{K}(\mathcal{C}) \simeq \Omega^n \mathrm{k}(\mathsf{Calk}^n(\mathcal{C}))
\]
together with $\mathrm{K}(\mathcal{C}) \simeq \operatorname*{colim}_n \tau_{\ge -n} \mathrm{K}(\mathcal{C})$.
For $n \in \mathbb{Z}$ set $\mathrm{K}_n(\mathcal{C}) \coloneqq \pi_n(\mathrm{K}(\mathcal{C}))$.
{{< /definition >}}

{{< example >}}
By cofinality, the natural map $\mathrm{k}_n(\mathcal{C}) \to \mathrm{K}_n(\mathcal{C})$
is an isomorphism for $n > 0$ and injective for $n = 0$; when $\mathcal{C}$ is
idempotent-complete, it is an isomorphism at $n = 0$ too.

For negative degrees, by definition $\mathrm{K}_{-1}(\mathcal{C}) = \mathrm{k}_0(\mathsf{Calk}(\mathcal{C}))$,
which measures the retract-obstruction to idempotent-completeness of the
quotient $\mathsf{Ind}(\mathcal{C})^{\aleph_1} / \mathcal{C}$. In many practical
cases this obstruction vanishes: for a regular ring $R$, $\mathcal{C} = \mathsf{Perf}(R)$
yields an automatically idempotent-complete quotient, so $\mathrm{K}_{-1}(R) = 0$;
in fact all negative K-groups of a regular ring vanish, and
$\mathrm{K}(R) \simeq \mathrm{k}(R)$.
{{< /example >}}

The key tool for lifting connective results to the non-connective world is:

{{< proposition id="prop-calk-properties" title="Properties of Calk" >}}
$\mathsf{Calk}\colon \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \to \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$
satisfies:

1. Given a filtered diagram $\mathcal{C}_{\bullet}\colon I \to \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$,
   the sequence
   \[
       \operatorname*{colim}_i \mathcal{C}_i
       \to \operatorname*{colim}_i \mathsf{Ind}(\mathcal{C}_i)^{\aleph_1}
       \to \operatorname*{colim}_i \mathsf{Calk}(\mathcal{C}_i)
   \]
   at the filtered colimit satisfies condition $(2')$ of {{< thmref "prop-verdier-seq" >}}.
2. $\mathsf{Calk}$ preserves type-$(6)$ sequences: if a cofibre sequence
   $\mathcal{C} \to \mathcal{D} \to \mathcal{E}$ induces a long exact sequence
   on $\mathrm{k}$, then so does
   $\mathsf{Calk}(\mathcal{C}) \to \mathsf{Calk}(\mathcal{D}) \to \mathsf{Calk}(\mathcal{E})$.
3. At the level of endofunctors on $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$,
   there are natural $\mathrm{k}$-equivalences
   \[
       \mathsf{Calk}(-)_+ \simeq_{\mathrm{k}} \mathsf{Calk}((-)_+), \qquad
       \mathsf{SW}(\mathsf{Calk}(-)) \simeq_{\mathrm{k}} \mathsf{Calk}(\mathsf{SW}(-)).
   \]
4. $\mathsf{Calk}$ preserves filtered colimits up to $\mathrm{k}$-equivalence:
   \[
       \mathrm{k}\!\left(\operatorname*{colim}_i \mathsf{Calk}(\mathcal{C}_i)\right)
       \xrightarrow{\;\sim\;}
       \mathrm{k}\!\left(\mathsf{Calk}\!\left(\operatorname*{colim}_i \mathcal{C}_i\right)\right).
   \]
{{< /proposition >}}

{{< proof >}}
**(1)** Via $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}} \simeq \mathsf{Pr}_{\aleph_0}^L$
and the inclusion $\mathsf{Pr}_{\aleph_0}^L \subset \mathsf{Pr}_{\mathrm{ca}}^L$,
we prove a more general statement for filtered diagrams in $\mathsf{Pr}_{\mathrm{ca}}^L$.

The key fact about compactly assembled categories: for $\mathcal{C} \in \mathsf{Pr}_{\mathrm{ca}}^L$
the colimit functor $k\colon \mathsf{Ind}(\mathcal{C}) \to \mathcal{C}$ has both
a right adjoint $y$ (Yoneda) and a left adjoint $\hat{y}$,
\[
    \hat{y} \dashv k \dashv y.
\]
The embedding $\hat{y}\colon \mathcal{C} \hookrightarrow \mathsf{Ind}(\mathcal{C})$
is fully faithful and colimit-preserving, though it need not preserve limits —
this is the extra structure provided by compact assembly.

Crucially, compactly assembled functors preserve this adjoint structure. For
a transition functor $F_{ij}\colon \mathcal{C}_i \to \mathcal{C}_j$ in our
filtered diagram, compact assembly gives a commuting diagram
{{< tikzcd >}}
        \mathcal{C}_i \ar[r, hook, "\hat{y}"] \ar[d, "F_{ij}"] & \mathsf{Ind}(\mathcal{C}_i^{\aleph_1}) \ar[r, "k"] \ar[d, "\mathsf{Ind}(F_{ij}^{\aleph_1})"] & \mathcal{C}_i \ar[d, "F_{ij}"] \\
        \mathcal{C}_j \ar[r, hook, "\hat{y}"] & \mathsf{Ind}(\mathcal{C}_j^{\aleph_1}) \ar[r, "k"] & \mathcal{C}_j.
    
{{< /tikzcd >}}
Consider the induced functor
\[
    \phi\colon \operatorname*{colim}_i \mathcal{C}_i
    \to \operatorname*{colim}_i \mathsf{Ind}(\mathcal{C}_i^{\aleph_1})
    \simeq \mathsf{Ind}\!\left(\operatorname*{colim}_i \mathcal{C}_i^{\aleph_1}\right).
\]
We show $\phi$ is a strong left adjoint. Passing to right adjoints (using that
$\hat{y}$'s right adjoint is $k$, and $k$'s right adjoint is $y$), limits can
be computed in $\mathsf{Cat}$; the limit identifies $y$'s limit as the
right adjoint of the right adjoint of $\phi$, establishing strongness.

Fully faithfulness and retract-closedness pass through filtered colimits by
{{< thmref "lem-ff-retract" >}} below.

**(2)** Assume $\mathcal{C} \to \mathcal{D} \to \mathcal{E}$ induces a
$\mathrm{k}$-long-exact sequence. Consider the $3 \times 3$ diagram
{{< tikzcd >}}
        \mathcal{C} \ar[r] \ar[d] & \mathcal{D} \ar[r] \ar[d] & \mathcal{E} \ar[d] \\
        \mathsf{Ind}(\mathcal{C})^{\aleph_1} \ar[r] \ar[d] & \mathsf{Ind}(\mathcal{D})^{\aleph_1} \ar[r] \ar[d] & \mathsf{Ind}(\mathcal{E})^{\aleph_1} \ar[d] \\
        \mathsf{Calk}(\mathcal{C}) \ar[r] & \mathsf{Calk}(\mathcal{D}) \ar[r] & \mathsf{Calk}(\mathcal{E}).
    
{{< /tikzcd >}}
All columns induce $\mathrm{k}$-long-exact sequences (by the earlier
construction); the top row does by assumption; the middle row is zero by the
Eilenberg swindle, hence trivially long-exact. Commutativity of cofibres in
$\mathsf{Sp}$ gives long-exactness of the bottom row.

**(3)** For the stabilised version $\mathsf{SW}(\mathsf{Calk}(-)) \simeq_{\mathrm{k}} \mathsf{Calk}(\mathsf{SW}(-))$,
consider for $\mathcal{C} \in \mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$ the diagram
{{< tikzcd >}}
        \mathsf{SW}(\mathcal{C}) \ar[r] \ar[d, equal] & \mathsf{SW}(\mathsf{Ind}(\mathcal{C})^{\aleph_1}) \ar[r] \ar[d] & \mathsf{SW}(\mathsf{Calk}(\mathcal{C})) \ar[d] \\
        \mathsf{SW}(\mathcal{C}) \ar[r] & \mathsf{Ind}(\mathsf{SW}(\mathcal{C}))^{\aleph_1} \ar[r] & \mathsf{Calk}(\mathsf{SW}(\mathcal{C})).
    
{{< /tikzcd >}}
Both rows satisfy $(2')$, hence are $\mathrm{k}$-long-exact; the middle column
is zero by the Eilenberg swindle. The five lemma forces the right column to be
a $\mathrm{k}$-equivalence. The pointed case follows similarly, or from the
stable case via $\mathsf{SW}((-)_+) \simeq \mathsf{SW}(-)$ and
{{< thmref "prop-pointed" >}}.

**(4)** For a filtered diagram $\mathcal{C}_{\bullet}$ with colimit $\mathcal{C}$,
consider
{{< tikzcd >}}
        \operatorname*{colim}_i \mathcal{C}_i \ar[r] \ar[d, equal] & \operatorname*{colim}_i \mathsf{Ind}(\mathcal{C}_i)^{\aleph_1} \ar[r] \ar[d, "\simeq"] & \operatorname*{colim}_i \mathsf{Calk}(\mathcal{C}_i) \ar[d] \\
        \mathcal{C} \ar[r] & \mathsf{Ind}(\mathcal{C})^{\aleph_1} \ar[r] & \mathsf{Calk}(\mathcal{C}).
    
{{< /tikzcd >}}
The middle vertical is an equivalence because $\mathsf{Ind}(-)^{\aleph_1}$
preserves filtered colimits. Both rows are $(2')$-sequences (by part 1 for the
top), so they are $\mathrm{k}$-long-exact. The middle term is zero (Eilenberg),
and the five lemma gives the claim.
{{< /proof >}}

{{< lemma id="lem-ff-retract" >}}
Let $\mathsf{F}, \mathsf{R} \subseteq \mathrm{Ar}(\mathsf{Cat}^{\mathrm{rex}})$
be respectively the full subcategories of fully faithful functors and of
functors whose image is retract-closed. Then $\mathsf{F}$, $\mathsf{R}$ and
their intersection are closed under filtered colimits in
$\mathrm{Ar}(\mathsf{Cat}^{\mathrm{rex}})$ (equivalently, in
$\mathrm{Ar}(\mathsf{Cat})$).
{{< /lemma >}}

{{< proof >}}
Full faithfulness: mapping spaces in a filtered colimit of categories are
filtered colimits of the levelwise mapping spaces.

Retract-closedness: suppose $d \in \mathcal{D}_{\infty} = \operatorname*{colim}_i \mathcal{D}_i$
is a retract of some $\alpha_{\infty}(c)$. The minimal diagram witnessing a
retract relation is finite, hence compact in $\mathsf{Cat}$, so the witness
already lives at some finite stage $\mathcal{D}_i$: there is a $d_i \in \mathcal{D}_i$
retract of $\alpha_i(c_i)$. By the levelwise hypothesis $d_i = \alpha_i(c_i')$,
so $d = \alpha_{\infty}(\lambda_i(c_i'))$.
{{< /proof >}}

The main corollary lifts connective properties of $\mathrm{k}$ to
non-connective $\mathrm{K}$.

{{< proposition title="Properties of K" >}}
The non-connective K-theory functor
$\mathrm{K}\colon \mathsf{Cat}^{\mathrm{rex}} \to \mathsf{Sp}$ has:

1. **Idempotent-completion invariance.** The natural map
   $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$ is an isomorphism on
   $\pi_n$ for $n \ge 1$ and injective on $\pi_0$. When $\mathcal{C}$ is
   idempotent-complete, $\mathrm{k}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$
   is the connective cover.
2. $\mathrm{K}$ preserves filtered colimits and finite products.
3. **Eilenberg swindle.** If $F\colon \mathcal{C} \to \mathcal{C}$ is
   finite-colimit-preserving with $F \sqcup \mathrm{id} \simeq F$, then
   $\mathrm{K}(\mathcal{C}) \simeq 0$.
4. If $S = (\mathcal{C} \to \mathcal{D} \to \mathcal{E})$ in
   $\mathsf{Cat}^{\mathrm{rex},\mathrm{idem}}$ induces a $\mathrm{k}$-long-exact
   sequence, then it also induces a $\mathrm{K}$-long-exact sequence. In
   particular, all sequence types of {{< thmref "prop-verdier-seq" >}} are sent
   to long-exact sequences by $\mathrm{K}$.
5. $\mathrm{K}$ sends the canonical maps $\mathcal{C} \to \mathcal{C}_+$ and
   $\mathcal{C} \to \mathsf{SW}(\mathcal{C})$ to equivalences.

Given connective $\mathrm{k}$, properties 1 and 4 already determine $\mathrm{K}$
uniquely.
{{< /proposition >}}

{{< proof >}}
**(1)** Definition plus cofinality.

**(2)** Semi-additivity of $\mathsf{Cat}^{\mathrm{rex}}$ gives
product-preservation for $\mathsf{Calk}$, hence for $\mathrm{K} = \operatorname*{colim} \Omega^n \mathrm{k} \mathsf{Calk}^n$.
Filtered colimits: reduce to idempotent-complete $\mathcal{C}$ via (1), then
combine {{< thmref "prop-k-filtered" >}} and
{{< thmref "prop-calk-properties" >}}(4).

**(3)** Product-preservation yields a map $\mathrm{K}(F)\colon \mathrm{K}(\mathcal{C}) \to \mathrm{K}(\mathcal{C})$
with $\mathrm{K}(F) + \mathrm{id} = \mathrm{id}$ in
$\pi_0 \mathrm{Hom}_{\mathsf{Sp}}(\mathrm{K}(\mathcal{C}), \mathrm{K}(\mathcal{C}))$.
This is a group, so $\mathrm{id} = 0$ and $\mathrm{K}(\mathcal{C}) \simeq 0$.

**(4)** By {{< thmref "prop-calk-properties" >}}(2).

**(5)** Combine {{< thmref "prop-calk-properties" >}}(3) with the connective
equivalences {{< thmref "prop-pointed" >}} and {{< thmref "prop-sw" >}}.
{{< /proof >}}

## References

<ul class="refs">
<li id="ref-sheaves-on-manifolds"><strong>A. Krause, T. Nikolaus, P. Pützstück</strong>. <em>Sheaves on Manifolds</em>. 2024. <a href="https://philpuetzstueck.gitlab.io/documents/sheaves-on-manifolds.pdf">PDF</a>.</li>
<li id="ref-lurie-htt"><strong>J. Lurie</strong>. <em>Higher Topos Theory</em>. Ann. Math. Stud. 170, Princeton Univ. Press, 2009.</li>
<li id="ref-kerodon"><strong>J. Lurie</strong>. <em>Kerodon</em>. Online, 2018–. <a href="https://kerodon.net">kerodon.net</a>.</li>
</ul>
