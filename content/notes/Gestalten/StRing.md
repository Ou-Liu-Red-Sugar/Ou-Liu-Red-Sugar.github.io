---
title: "Stefanich Rings"
date: 2025-12-29
tags:
  - Presentable Category
  - Higher Category Theory
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
weight: 30
draft: false
description: >
  This note discuss the colimit of the sequence
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
  in $1\mathsf{Pr}$, and discuss the $n$-affine, $n$-proper, $n$-suave and $n$-prim maps.
---

## Stefanich Rings

In the last note, we define
\[
  n\mathsf{Pr} \coloneqq \mathsf{Mod}_{(n-1)\mathsf{Pr}}(1\mathsf{Pr}),
  \qquad
  1\mathsf{Pr} \coloneqq \mathsf{Pr}_{\aleph_1}^{L}.
\]
Now, we let $0\mathsf{Pr} \coloneqq \mathsf{An}$.

Since we have
\[
  \mathsf{CAlg}(\mathcal{C}) \hookrightarrow
  \mathsf{CAlg}(\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}_{\aleph_1}^L)),
  \quad
  A \mapsto \mathsf{Mod}_A(\mathcal{C}),
\]
and $1\mathsf{Pr} \in \mathsf{Pr}_{\aleph_1}^L$, we obtain a sequence
\[
  \mathsf{CAlg}(0\mathsf{Pr})
  \hookrightarrow
  \mathsf{CAlg}(1\mathsf{Pr})
  \hookrightarrow
  \cdots
  \hookrightarrow
  \mathsf{CAlg}(n\mathsf{Pr})
  \hookrightarrow
  \cdots .
\]

In {{< pageref "notes/gestalten/presentable.md" "Presentable Categories" >}},
we know that $1\mathsf{Pr}$ admits all small colimits, which can be computed in
$\widehat{\mathsf{Cat}}$ by passing to adjoint functors.
Thus, we obtain the following definition.

{{< definition >}}
The $\aleph_1$-presentable category $\mathsf{StRing}$ of *Stefanich rings* is
\[
\begin{aligned}
\mathsf{StRing}
&=
\operatorname{colim}_{1\mathsf{Pr}}
\bigl(
  \mathsf{CAlg}(\mathsf{An})
  \hookrightarrow
  \mathsf{CAlg}(1\mathsf{Pr})
  \hookrightarrow
  \cdots
\bigr) \\
&=
\operatorname{lim}_{\widehat{\mathsf{Cat}}}
\bigl(
  \mathsf{CAlg}(\mathsf{An})
  \xleftarrow{\mathsf{End}_{(-)}(1)}
  \mathsf{CAlg}(1\mathsf{Pr})
  \xleftarrow{\mathsf{End}_{(-)}(1)}
  \cdots
\bigr).
\end{aligned}
\]
We often write $A = (A_0, A_1, \dots) \in \mathsf{StRing}$, where
$A_n \in \mathsf{CAlg}(n\mathsf{Pr})$ and $A_{n} \simeq \mathsf{End}_{A_{n+1}}(1)$.
{{< /definition >}}

{{< remark >}}
Stefanich rings are also known as
*$\aleph_1$-compactly generated categorical spectra*,
originally introduced by {{< cite ACS "Remark 3.3.6" >}}.

In {{< cite Aok25 >}}, the author uses $\mathsf{PrSp}^{\aleph_1}$ to denote the category of Stefanich rings, and also considers the construction
\[
  \mathsf{PrSp} \coloneqq \operatorname{colim}_{\kappa} \mathsf{PrSp}^{\kappa}.
\]
Unfortunately, this notion is no longer stable: as shown in {{< cite Aok25 "Theorem C" >}},
there exists an object which is *not* given by a sequence
$(A_n)_n \in \prod_{n} \mathsf{CAlg}(n\mathsf{Pr}^L)$,
where
$n\mathsf{Pr}^L \coloneqq \operatorname{colim}_{\kappa} n\mathsf{Pr}^{L}_{\kappa}$.
{{< /remark >}}

The unit object in $\mathsf{StRing}$ is given by $(*,\mathsf{Ani},1\mathsf{Pr},\cdots)$. Consequently, any Stefanich ring $A$ is equipped with compatible symmetric monoidal maps $(n-1)\mathsf{Pr} \to A_n$. This map admits a lax symmetric monoidal right adjoint, which induces a forgetful functor
$$
  \mathsf{CAlg}(A_n) \to \mathsf{CAlg}((n-1)\mathsf{Pr}),
$$
allowing us to regard an $A_n$-algebra as a $(n-1)\mathsf{Pr}$-algebra. For $n \geq 1$, these structures naturally arise from the identification
$$
  A_n \in \mathsf{CAlg}(n\mathsf{Pr}) \simeq
  \mathsf{CAlg}\bigl(\mathsf{Mod}_{(n-1)\mathsf{Pr}}(1\mathsf{Pr})\bigr).
$$
A morphism $f \colon A \to B$ of Stefanich rings consists of compatible maps
$f_{n-1}^* \colon A_n \to B_n$ in $\mathsf{CAlg}(n\mathsf{Pr})$ for all $n \geq 1$.
Since $f_{n-1}^*$ is a morphism in $1\mathsf{Pr}$, it admits a lax symmetric
monoidal right adjoint $f_{n-1,*} \colon B_n \to A_n$, which induces a functor
$$
  f_{n-1,*} \colon \mathsf{CAlg}(B_n) \to \mathsf{CAlg}(A_n).
$$
In particular, the unit $\mathbb{1}_{B_n} \in \mathsf{CAlg}(B_n)$ determines a
commutative algebra
$$
  (B/A)_{n-1} \coloneqq f_{n-1,*}(\mathbb{1}_{B_n}) \in \mathsf{CAlg}(A_n).
$$
Under the forgetful functor $\mathsf{CAlg}(A_n) \to \mathsf{CAlg}((n-1)\mathsf{Pr})$,
this object maps to $B_{n-1} \in \mathsf{CAlg}((n-1)\mathsf{Pr})$. Thus, any
$A$-Stefanich algebra $B$ determines a sequence
$\bigl((B/A)_0, (B/A)_1, \ldots\bigr)$.

To make this precise, we introduce the following adjunctions. For each $n \geq 0$,
there is an adjunction

{{< tikzcd >}}
\mathsf{Mod}_{A_n}(1\mathsf{Pr}) \ar[r,shift left = 2,"F_n"]\ar[r,phantom,"\bot"] & A_{n+1} \ar[l,shift left = 2,"G_n"]
{{< /tikzcd >}}

where $G_n(X) \coloneqq \underline{\mathsf{Hom}}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}, X)$.
By definition of a Stefanich ring, there is a canonical equivalence
$$
  A_n \xrightarrow{\sim} G_n(\mathbb{1}_{A_{n+1}}) = \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}).
$$
The right adjoint $G_n$ induces a transition functor
$$
  \phi_n \colon \mathsf{CAlg}(A_{n+1}) \to \mathsf{CAlg}(A_n),
  \qquad
  B \longmapsto \mathsf{End}_{G_n(B)}(\mathbb{1}_{A_n}),
$$
whose left adjoint is
$$
  \psi_n \colon \mathsf{CAlg}(A_n) \to \mathsf{CAlg}(A_{n+1}),
  \qquad
  R \longmapsto F_n\!\left(\mathsf{Mod}_R(A_n)\right).
$$

{{< proposition >}}
Let $A$ be a Stefanich ring. There are equivalences of categories
$$
\begin{align*}
  \mathsf{StRing}_{A/}
  &\simeq
  \operatorname{lim}_{\widehat{\mathsf{Cat}}}
  \Bigl(
    \mathsf{CAlg}(A_1)
    \xleftarrow{\phi_1}
    \mathsf{CAlg}(A_2)
    \xleftarrow{\phi_2}
    \cdots
  \Bigr)\\
  &\simeq
  \operatorname{colim}_{1\mathsf{Pr}}
  \Bigl(
    \mathsf{CAlg}(A_1)
    \xrightarrow{\psi_1}
    \mathsf{CAlg}(A_2)
    \xrightarrow{\psi_2}
    \cdots
  \Bigr),
\end{align*}
$$
where the projection $B \mapsto (B/A)_{n-1}$ recovers the $n$-th component of the limit.
Furthermore, each $\psi_n$ is fully faithful, and there is a fully faithful functor
$$
  \mathsf{CAlg}(A_{n+1}) \hookrightarrow \mathsf{StRing}_{A/}
$$
left adjoint to the projection $B \mapsto (B/A)_n$.
{{< /proposition >}}

{{< proof >}}
*Step 1: Limit description.*

Since $\mathsf{StRing}$ is defined as a limit in $\widehat{\mathsf{Cat}}$, the slice
$\mathsf{StRing}_{A/}$ is the limit of the corresponding slices at each level.
Lurie's identification $\mathsf{CAlg}(n\mathsf{Pr})_{A_n/} \simeq
\mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))$ gives
$$
  \mathsf{StRing}_{A/}
  \simeq
  \operatorname{lim}_{\widehat{\mathsf{Cat}}}
  \Bigl(
    \cdots \to
    \mathsf{CAlg}(\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr}))
    \xrightarrow{T_n}
    \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))
    \to \cdots
  \Bigr).
$$
One checks that each $T_n$ factors through $\mathsf{CAlg}(A_{n+1})$ via
$$
  \mathsf{CAlg}(\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr}))
  \xrightarrow{\mathsf{End}_{(-)}(\mathbb{1}_{A_{n+1}})}
  \mathsf{CAlg}(A_{n+1})
  \xrightarrow{G_n^*}
  \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr})),
$$
so inserting the intermediate terms $\mathsf{CAlg}(A_{n+1})$ does not change the
limit, yielding the claimed limit description with transition functors $\phi_n$.

*Step 2: Colimit description.*

Each $\phi_n$ preserves limits and $\aleph_1$-filtered colimits, hence lies in
$\mathsf{Pr}^R_{\aleph_1}$. Under the equivalence
$(\mathsf{Pr}^L_{\aleph_1})^{\mathrm{op}} \simeq \mathsf{Pr}^R_{\aleph_1}$, the
limit of the $\phi_n$-diagram corresponds to the colimit of their left adjoints
$\psi_n$ in $1\mathsf{Pr}$.

*Step 3: Full faithfulness of $\psi_n$.*

We show the unit $R \to \phi_n(\psi_n(R))$ is an equivalence. Since
$\mathsf{Mod}_R(A_n)$ is generated by $A_n$ with $\mathsf{End}_{\mathsf{Mod}_R(A_n)}(A_n) \simeq R$,
and since $F_n$ is symmetric monoidal and maps $A_n$ to $\mathbb{1}_{A_{n+1}}$, we get
$$
  \phi_n(\psi_n(R))
  = \mathsf{End}_{G_n(F_n(\mathsf{Mod}_R(A_n)))}(\mathbb{1}_{A_n})
  \simeq \mathsf{End}_{F_n(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}})
  \simeq R. \qquad \square
$$
{{< /proof >}}

{{< lemma id="lem-Fn-dualizable" >}}
For any Stefanich ring $A$ and $n \geq 0$, the functor $F_n$ is fully faithful on
dualizable objects of $\mathsf{Mod}_{A_n}(1\mathsf{Pr})$, and more generally on
$\aleph_1$-filtered colimits of dualizable objects.
{{< /lemma >}}

{{< proof >}}
Since $F_n$ preserves colimits and $G_n$ preserves $\aleph_1$-filtered colimits,
it suffices to treat dualizable objects. For dualizable $X, Y$, we compute
$$
  \operatorname{Hom}_{A_{n+1}}(F_n X, F_n Y)
  \simeq \operatorname{Hom}_{A_{n+1}}(F_n(X \otimes Y^\vee), \mathbb{1}_{A_{n+1}})
  \simeq \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X \otimes Y^\vee, G_n(\mathbb{1}_{A_{n+1}})).
$$
By the defining equivalence $G_n(\mathbb{1}_{A_{n+1}}) \simeq \mathbb{1}_{A_n}$, this becomes
$$
  \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X \otimes Y^\vee, \mathbb{1}_{A_n})
  \simeq \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X, Y),
$$
which proves full faithfulness. 
{{< /proof >}}

## Shifting

For any Stefanich ring $A = (A_0, A_1, A_2, \ldots)$, the shifted sequence
$(A_1, A_2, A_3, \ldots)$ is again a Stefanich ring: the defining equivalences
$A_n \simeq \mathsf{End}_{A_{n+1}}(\mathbb{1})$ simply shift their indices. This
gives a *shifting functor* on $\mathsf{StRing}$, which turns out to be an
equivalence.

{{< proposition id="prop-shifting" >}}
The shifting functor
$(A_0, A_1, A_2, \ldots) \mapsto (A_1, A_2, A_3, \ldots)$ induces an equivalence

$$
  \mathsf{StRing} \xrightarrow{\;\sim\;}
  \mathsf{StRing}_{(1\mathsf{Pr},\, 2\mathsf{Pr},\, \ldots)/}.
$$

More generally, shifting $n$ times yields an equivalence
$\mathsf{StRing} \simeq \mathsf{StRing}_{(n\mathsf{Pr},\, (n+1)\mathsf{Pr},\, \ldots)/}$.
{{< /proposition >}}

{{< proof >}}
This follows from the identification
$$
  \mathsf{CAlg}((n+1)\mathsf{Pr})
  = \mathsf{CAlg}\bigl(\mathsf{Mod}_{n\mathsf{Pr}}(1\mathsf{Pr})\bigr)
  = \mathsf{CAlg}(1\mathsf{Pr})_{n\mathsf{Pr}/}.
$$
Since also
$\mathsf{CAlg}(n\mathsf{Pr}) = \mathsf{CAlg}(1\mathsf{Pr})_{(n-1)\mathsf{Pr}/}$,
the slice over $n\mathsf{Pr}$ gives
$$
  \mathsf{CAlg}(n\mathsf{Pr})_{n\mathsf{Pr}/}
  = \bigl(\mathsf{CAlg}(1\mathsf{Pr})_{(n-1)\mathsf{Pr}/}\bigr)_{n\mathsf{Pr}/}
  = \mathsf{CAlg}(1\mathsf{Pr})_{n\mathsf{Pr}/}
  = \mathsf{CAlg}((n+1)\mathsf{Pr}),
$$
which is exactly the transition in the colimit defining $\mathsf{StRing}$, but
based at $n\mathsf{Pr}$ instead of $0\mathsf{Pr}$.
{{< /proof >}}

{{< remark >}}
The shifting operation has no known geometric or intuitive meaning. Its very
existence is tied to our choice of foundations: it is not a priori clear that a
functor $2\mathsf{Pr} \to 1\mathsf{Pr}$ should exist, and the construction is not
compatible with changing the cutoff cardinal $\kappa$ (which we fixed to be
$\aleph_1$). Had we worked stably, i.e.\ over the base
$S = (D(\mathbb{S}), 1\mathsf{Pr}_{\mathrm{st}}, \ldots)$, the shifting operation
would not be available.

Nonetheless, shifting is extremely useful as a technical device: it allows us to
assume *without loss of generality* that $n = 0$ in most proofs about properties
of morphisms (such as $n$-affineness, $n$-properness, $n$-suavity), thereby
simplifying notation considerably.
{{< /remark >}}

## Tensor products of Stefanich rings

### Limits and spectrification

Limits of Stefanich rings are straightforward: they are computed levelwise.
Colimits, however, are more subtle. If one forms the colimit at each level
separately, the result is a sequence $D_n \in \mathsf{CAlg}(n\mathsf{Pr})$
equipped with maps

$$
  D_n \to \mathsf{End}_{D_{n+1}}(\mathbb{1}),
$$

but these usually fail to be equivalences, so $(D_n)_n$ is not yet a Stefanich
ring. One must *spectrify*: universally enforce that these maps become
equivalences. The terminology comes from the analogy with spectra in stable
homotopy theory, where a Stefanich ring plays the role of an infinite loop space

$$
  X_0 \simeq \Omega X_1 \simeq \Omega^2 X_2 \simeq \cdots
$$

and one similarly needs to spectrify a sequence of spaces equipped with maps
$X_n \to \Omega X_{n+1}$ that are not yet equivalences.

Concretely, one replaces the sequence $(D_n)_n$ by

$$
  D'_n \coloneqq \mathsf{End}_{D_{n+1}}(\mathbb{1}),
$$

equipped with the induced map $D_n \to D'_n$, and iterates using transfinite
induction (taking filtered colimits at limit ordinal stages). Since the functor
$D \mapsto \mathsf{End}_D(\mathbb{1})$ commutes with $\aleph_1$-filtered
colimits, the process stabilises after $\aleph_1$ steps. By the adjoint functor
theorem, this spectrification always exists.

### Three perspectives on pushouts

In practice, we are mostly interested in pushouts (i.e.\ relative tensor
products). Consider a pushout diagram $B \xleftarrow{f} A \xrightarrow{g} C$ of
Stefanich rings. There are three equivalent ways to describe the levelwise data
before spectrification.

**Perspective 1 (absolute).** Form the tensor product at each level:

$$
  (B_0 \otimes_{A_0} C_0,\;
   B_1 \otimes_{A_1} C_1,\;
   B_2 \otimes_{A_2} C_2,\; \ldots),
$$

then spectrify.

**Perspective 2 (relative, symmetric).** Under the equivalence
$\mathsf{StRing}_{A/} \simeq
\operatorname{colim}(\mathsf{CAlg}(A_1) \xrightarrow{\psi_1}
\mathsf{CAlg}(A_2) \xrightarrow{\psi_2} \cdots)$,
form the tensor product in $\mathsf{StRing}_{A/}$:

$$
  \bigl((B/A)_0 \otimes_{A_1} (C/A)_0,\;
        (B/A)_1 \otimes_{A_2} (C/A)_1,\;
        \ldots\bigr),
$$

then spectrify.

**Perspective 3 (relative, base change).** Think of $B \otimes_A C$ as the image
of $B \in \mathsf{StRing}_{A/}$ under the base change functor
$g^* \colon \mathsf{StRing}_{A/} \to \mathsf{StRing}_{C/}$:

$$
  \bigl(g^*_0(B/A)_0,\; g^*_1(B/A)_1,\;
        g^*_2(B/A)_2,\; \ldots\bigr),
$$

then spectrify.

The third perspective is the most useful for analysing morphisms: it expresses
base change as a levelwise operation followed by spectrification, and we will
isolate general classes of maps (the $n$-affine maps, introduced below) for
which spectrification changes only finitely many terms.

## Affine maps

### Motivation: a hierarchy of affineness

In classical algebraic geometry, an affine morphism $f \colon Y \to X$ is one for
which $Y$ is completely determined by
$f_*\mathcal{O}_Y \in \mathsf{CAlg}(\mathsf{QCoh}(X))$; in the language of
Stefanich rings, the data $(B/A)_0 \in \mathsf{CAlg}(A_1)$ suffices to
reconstruct $B$. This is the notion of *0-affineness*.

One level up, Gaitsgory's 1-affineness asks that a prestack $\mathcal{Y}$
satisfy

$$
  \mathsf{ShvCat}(\mathcal{Y}) \simeq
  \mathsf{QCoh}(\mathcal{Y})\text{-}\mathsf{mod},
$$

i.e.\ the category of sheaves of categories on $\mathcal{Y}$ is completely
recovered from the monoidal DG category $\mathsf{QCoh}(\mathcal{Y})$. In the
Stefanich framework, $\mathsf{ShvCat}(\mathcal{Y})$ corresponds to
$1\mathsf{Pr}_\mathcal{Y}$ and the right-hand side to
$\mathsf{Mod}_{D(\mathcal{Y})}(1\mathsf{Pr})$. Hence 1-affineness means that the
data $(B/A)_1 \in \mathsf{CAlg}(A_2)$ --- a commutative algebra in
$1\mathsf{Pr}$-categories --- determines all higher levels by iteratively passing
to module categories.

The pattern is clear: *$n$-affineness* means that everything from the $n$-th
categorical level onwards is generated by a single piece of commutative algebra
data at that level. This is what ``everything becomes affine under sufficient
categorification'' means precisely. In terms of the tensor product discussion
above, $n$-affineness of $B$ over $A$ means exactly that *spectrification is
unnecessary from level $n$ onwards*: the base change recipe of Perspective 3
already produces a Stefanich ring starting at level $n$, without any further
correction.

### Definition and formal properties

{{< definition id="def-affineness" >}}
Let $A$ be a Stefanich ring and $n \geq 0$. An $A$-algebra
$B \in \mathsf{StRing}_{A/}$ is called *$n$-affine* if it lies in the essential
image of the fully faithful embedding

$$
  \psi_n \colon \mathsf{CAlg}(A_{n+1}) \hookrightarrow \mathsf{StRing}_{A/}.
$$

In other words, $B$ is completely determined by the datum of
$(B/A)_n \in \mathsf{CAlg}(A_{n+1})$, by iteratively passing to module
categories (in the $A$-internal sense).
{{< /definition >}}

{{< proposition id="prop-n-affine" >}}
Let $A$ be a Stefanich ring and $n \geq 0$. The class of $n$-affine
$B \in \mathsf{StRing}_{A/}$ is stable under all small colimits. Moreover:

1. If $B$ is $n$-affine over $A$, then for all $m \geq n$ the canonical functor

   $$
     \mathsf{Mod}_{(B/A)_m}(A_{m+1}) \to B_{m+1}
   $$

   is an equivalence. Here, the functor is the composite
   $\mathsf{Mod}_{(B/A)_m}(A_{m+1}) \hookrightarrow \mathsf{Mod}_{A_{m+1}}(1\mathsf{Pr})
   \xrightarrow{F_{m+1}} A_{m+2}$, which is fully faithful on
   ($\aleph_1$-filtered colimits of) dualizable objects by
   {{< thmref "lem-Fn-dualizable" >}}.

2. *(Base change.)* If $g \colon A \to C$ is any map of Stefanich rings and $B$
   is $n$-affine over $A$, then $g^*B = B \otimes_A C$ is $n$-affine over $C$,
   and for all $m \geq n$,

   $$
     g^*_m(B/A)_m \xrightarrow{\;\sim\;} (B \otimes_A C / C)_m.
   $$

3. *(Composition.)* For composable maps $f \colon A \to B$ and
   $g \colon B \to C$ with $f$ being $n$-affine, $g$ is $n$-affine if and only
   if $g \circ f$ is $n$-affine.

In particular, $n$-affine maps are stable under composition, base change, and
passage to diagonals.
{{< /proposition >}}

{{< proof >}}
Stability under small colimits is clear, as
$\psi_n \colon \mathsf{CAlg}(A_{n+1}) \to \mathsf{StRing}_{A/}$ preserves small
colimits.

*Part (1).* If $B$ is $n$-affine, then for all $m \geq n$, $(B/A)_{m+1}$ is by
construction the image of $\mathsf{Mod}_{(B/A)_m}(A_{m+1})$ under
$F_{m+1} \colon \mathsf{Mod}_{A_{m+1}}(1\mathsf{Pr}) \to A_{m+2}$. By
{{< thmref "lem-Fn-dualizable" >}}, the functor $F_{m+1}$ is fully faithful on
the subcategory containing $\mathsf{Mod}_{(B/A)_m}(A_{m+1})$ (which is an
$\aleph_1$-filtered colimit of dualizables --- indeed,
$\mathsf{Mod}_R(A_{m+1})$ is dualizable whenever
$R \in \mathsf{CAlg}(A_{m+1})$ is countably presented). Thus the underlying
category is unchanged, giving $B_{m+1} \simeq
\mathsf{Mod}_{(B/A)_m}(A_{m+1})$.

*Part (2).* This follows from the commutative diagram

{{< tikzcd >}}
\mathsf{CAlg}(A_{n+1}) \ar[r,"\psi_{n+1}"]\ar[d,"g^*_n"'] & \mathsf{CAlg}(A_{n+2}) \ar[r]\ar[d,"g^*_{n+1}"'] & \cdots \ar[r] & \mathsf{StRing}_{A/} \ar[d,"g^*"]\\
\mathsf{CAlg}(C_{n+1}) \ar[r,"\psi_{n+1}"] & \mathsf{CAlg}(C_{n+2}) \ar[r] & \cdots \ar[r] & \mathsf{StRing}_{C/}
{{< /tikzcd >}}

which is assembled from two squares: (i) the assertion that module categories
base change, i.e.\ the square involving $\mathsf{CAlg}(A_{n+1}) \to
\mathsf{CAlg}(\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr}))$ and its $C$-analogue; and
(ii) the square involving $\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr}) \to A_{n+2}$ and
its $C$-analogue, whose commutativity follows from the datum of the map $g$ of
Stefanich rings.

*Part (3).* If $B$ is $n$-affine over $A$, then $\mathsf{StRing}_{B/}$ maps
isomorphically to

$$
  \mathsf{StRing}_{A/} \times_{\mathsf{CAlg}(A_{n+1})}
  \mathsf{CAlg}(A_{n+1})_{(B/A)_n/}.
$$

In other words, a $B$-algebra $C$ is fully determined by the map $A \to C$ plus
a map $(B/A)_n \to (C/A)_n$ in $\mathsf{CAlg}(A_{n+1})$. By part (1), the
category of $n$-affine $C$ over $B$ is $\mathsf{CAlg}(B_{n+1})$, while the
category of $B$-algebras $C$ that are $n$-affine over $A$ is
$\mathsf{CAlg}(A_{n+1})_{(B/A)_n/}$, and these are equivalent.
{{< /proof >}}

### Affineness as a condition on maps

> **Warning.** The converse to (1) is false. Consider the map
> $f \colon * \to B^2\mathbb{G}_m$ over a field $k$ and the corresponding map
> $A \to B$ of Stefanich rings. This map is 1-affine, so condition (1) holds for
> $m \geq 1$. But condition (1) also holds for $m = 0$, since
> $A_1 = B_1 = D(k)$ and $(B/A)_0 = k$, so that
> $\mathsf{Mod}_k(D(k)) \simeq D(k) = B_1$. Nevertheless, $f$ is *not*
> 0-affine: $(B/A)_0 = k$ is the unit in $\mathsf{CAlg}(A_1)$, so applying
> $\psi_0$ to it gives $A$ itself rather than $B$.

{{< remark id="rem-affineness-enrichment" >}}
The warning above illustrates a structural point worth emphasising:
*$n$-affineness is a condition on how the map $A \to B$ assembles the tower
$(B/A)_0, (B/A)_1, \ldots$, not merely a levelwise matching of categories.*

A Stefanich $A$-algebra $B$ can be viewed as a categorical Postnikov tower: each
$(B/A)_m \in \mathsf{CAlg}(A_{m+1})$ is the ``$m$-th homotopy group'', and the
way $(B/A)_{m+1}$ sits inside $A_{m+2}$ --- rather than merely its underlying
category --- plays the role of a $k$-invariant.

Condition (1) checks that the underlying categories match at every
level, but it is blind to the $A_{m+2}$-enrichment. Since
$F_{m+1} \colon \mathsf{Mod}_{A_{m+1}}(1\mathsf{Pr}) \to A_{m+2}$ is fully
faithful on ($\aleph_1$-filtered colimits of) dualizables by
{{< thmref "lem-Fn-dualizable" >}}, any object *in its essential image* is
uniquely determined by its underlying category. But $(B/A)_{m+1}$ need not lie
in this image: it can be an object of $A_{m+2}$ whose underlying category agrees
with $F_{m+1}(\mathsf{Mod}_{(B/A)_m}(A_{m+1}))$, yet which carries a different
enriched structure --- just as two vector bundles can be fibrewise isomorphic
while differing globally.

The situation is analogous to the Whitehead theorem in homotopy theory: an
abstract isomorphism $\pi_n(X) \cong \pi_n(Y)$ for all $n$ does not imply
$X \simeq Y$; one needs the isomorphisms to be *coherently induced* by a single
map. Here, $n$-affineness asks not just that every level matches, but that the
entire tower from level $n$ onwards is *coherently generated* by
$(B/A)_n \in \mathsf{CAlg}(A_{n+1})$ via the canonical module category
construction.

In the $B^2\mathbb{G}_m$ example, the algebra $(B/A)_0 = k$ is the unit, so
$\psi_0(k)$ reconstructs $A$ itself. The non-trivial geometry of
$B^2\mathbb{G}_m$ is invisible at the level of underlying categories; it is
encoded entirely in how $(B/A)_1$ sits inside $A_2 = 1\mathsf{Pr}$ as an enriched
object (related to $\mathbb{G}_m$-gerbes).
{{< /remark >}}

{{< remark id="rem-comparison-gaitsgory" >}}
This perspective also clarifies the relationship with Gaitsgory's 1-affineness.
Gaitsgory's condition asks for a single equivalence
$\mathsf{ShvCat}(\mathcal{Y}) \simeq
\mathsf{QCoh}(\mathcal{Y})\text{-}\mathsf{mod}$, which in Stefanich language
amounts to an equivalence of the underlying categories at level
$m = 1$. {{< thmref "def-affineness" >}} is strictly stronger: it asks that $B$
lie in the essential image of $\psi_n$, meaning the entire tower from level $n$
onwards is coherently generated by $(B/A)_n$, including all enrichment data. The
examples of 1-affine maps in the literature (algebraic stacks with finite-type
inertia, de Rham prestacks, formal completions, etc.) do satisfy this stronger
condition.
{{< /remark >}}

## Proper map

## Étale map

## Reference


<ul class="refs">
  <li id="ref-ACS">
  <span class="ref-label">[ACS]</span>
  <strong>The Algebra of Categorical Spectra</strong>.
  <a href="https://jscholarship.library.jhu.edu/items/536dbb6b-9c2f-4f01-9637-7807cdadb96a">PDF/Record</a>.
  </li>
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
