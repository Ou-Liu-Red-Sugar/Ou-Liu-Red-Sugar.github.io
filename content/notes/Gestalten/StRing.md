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
  A_n \xrightarrow{\sim} G_n(\mathbb{1}_{A_{n+1}})
  = \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}).
$$

{{< proposition id="prop-string-slice" >}}
Let $A$ be a Stefanich ring. There are equivalences of categories

$$
\begin{align*}
  \mathsf{StRing}_{A/}
  &\simeq
  \operatorname{lim}_{\widehat{\mathsf{Cat}}}
  \Bigl(
    \mathsf{CAlg}(A_1)
    \xleftarrow{\;\mathsf{End}_{G_1(-)}(\mathbb{1})\;}
    \mathsf{CAlg}(A_2)
    \xleftarrow{\;\mathsf{End}_{G_2(-)}(\mathbb{1})\;}
    \cdots
  \Bigr)\\
  &\simeq
  \operatorname{colim}_{1\mathsf{Pr}}
  \Bigl(
    \mathsf{CAlg}(A_1)
    \xrightarrow{\;F_1(\mathsf{Mod}_{(-)}(A_1))\;}
    \mathsf{CAlg}(A_2)
    \xrightarrow{\;F_2(\mathsf{Mod}_{(-)}(A_2))\;}
    \cdots
  \Bigr).
\end{align*}
$$

Furthermore, for each $n \geq 0$, the structure map from the $(n{+}1)$-th term
of the colimit defines a fully faithful embedding

$$
  \operatorname{Spec}_n \colon \mathsf{CAlg}(A_{n+1})
  \hookrightarrow \mathsf{StRing}_{A/},
$$

whose right adjoint

$$
  \Gamma_n \colon \mathsf{StRing}_{A/} \to \mathsf{CAlg}(A_{n+1}),
  \qquad
  B \longmapsto (B/A)_n
$$

recovers the $(n{+}1)$-th component of the limit.
{{< /proposition >}}

{{< proof >}}
*Step 1: Limit description.*

Since $\mathsf{StRing}$ is defined as a limit in $\widehat{\mathsf{Cat}}$, the slice
$\mathsf{StRing}_{A/}$ is the limit of the corresponding slices at each level.
Lurie's identification
$\mathsf{CAlg}(n\mathsf{Pr})_{A_n/} \simeq
\mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))$
gives

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
limit.

*Step 2: Colimit description.*

The transition functors
$\mathsf{End}_{G_n(-)}(\mathbb{1}) \colon \mathsf{CAlg}(A_{n+1}) \to
\mathsf{CAlg}(A_n)$ preserve limits and $\aleph_1$-filtered colimits, hence lie
in $\mathsf{Pr}^R_{\aleph_1}$. Under the equivalence
$(\mathsf{Pr}^L_{\aleph_1})^{\mathrm{op}} \simeq \mathsf{Pr}^R_{\aleph_1}$, the
limit of these right adjoints corresponds to the colimit of their left adjoints
$R \mapsto F_n(\mathsf{Mod}_R(A_n))$ in $1\mathsf{Pr}$.

*Step 3: Full faithfulness of $\operatorname{Spec}_n$.*

It suffices to show that each transition functor
$R \mapsto F_n(\mathsf{Mod}_R(A_n))$ is fully faithful, i.e.\ that the unit
$R \to \mathsf{End}_{G_n(F_n(\mathsf{Mod}_R(A_n)))}(\mathbb{1}_{A_n})$ is an
equivalence. Since $\mathsf{Mod}_R(A_n)$ is generated by $A_n$ with
$\mathsf{End}_{\mathsf{Mod}_R(A_n)}(A_n) \simeq R$, and since $F_n$ is symmetric
monoidal and maps $A_n$ to $\mathbb{1}_{A_{n+1}}$, we get

$$
  \mathsf{End}_{G_n(F_n(\mathsf{Mod}_R(A_n)))}(\mathbb{1}_{A_n})
  \simeq \mathsf{End}_{F_n(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}})
  \simeq R.
$$

Since $\mathsf{StRing}_{A/}$ is the colimit of these fully faithful embeddings,
each structure map $\operatorname{Spec}_n$ is fully faithful.
{{< /proof >}}

{{< remark id="rem-spec-gamma" >}}
The notation is motivated by the geometric picture. On the level of Gestalten
$\mathsf{Gest} = \mathsf{StRing}^{\mathrm{op}}$, the induced functor
$\mathsf{CAlg}(A_{n+1})^{\mathrm{op}} \to \mathsf{Gest}_{/X}$ is a relative
$\operatorname{Spec}$ at the $n$-th categorical level, and $\Gamma_n$ extracts the
``$n$-th level global sections''. We write $\operatorname{Spec}_n$ on the ring
side (strictly speaking $\operatorname{Spec}_n^{\mathrm{op}}$) for brevity.

The transition functors appearing in the colimit and limit descriptions of
{{< thmref "prop-string-slice" >}} are then expressed as composites:

$$
  R \mapsto F_n(\mathsf{Mod}_R(A_n))
  \quad\text{is}\quad
  \Gamma_n \circ \operatorname{Spec}_{n-1},
  \qquad
  B \mapsto \mathsf{End}_{G_n(B)}(\mathbb{1}_{A_n})
  \quad\text{is}\quad
  \Gamma_{n-1} \circ \operatorname{Spec}_n.
$$

Here $\Gamma_n \circ \operatorname{Spec}_{n-1}$ takes the $(n{-}1)$-affine
approximation and extracts its $n$-th level data, while
$\Gamma_{n-1} \circ \operatorname{Spec}_n$ forgets down one categorical level.
{{< /remark >}}

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
  \simeq \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}
    (X \otimes Y^\vee, G_n(\mathbb{1}_{A_{n+1}})).
$$

By the defining equivalence
$G_n(\mathbb{1}_{A_{n+1}}) \simeq \mathbb{1}_{A_n}$, this becomes

$$
  \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}
    (X \otimes Y^\vee, \mathbb{1}_{A_n})
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
$\mathsf{StRing} \simeq
\mathsf{StRing}_{(n\mathsf{Pr},\, (n+1)\mathsf{Pr},\, \ldots)/}$.
{{< /proposition >}}

{{< proof >}}
This follows from the identification

$$
  \mathsf{CAlg}((n+1)\mathsf{Pr})
  = \mathsf{CAlg}\bigl(\mathsf{Mod}_{n\mathsf{Pr}}(1\mathsf{Pr})\bigr)
  = \mathsf{CAlg}(1\mathsf{Pr})_{n\mathsf{Pr}/}.
$$

Since also
$\mathsf{CAlg}(n\mathsf{Pr}) =
\mathsf{CAlg}(1\mathsf{Pr})_{(n-1)\mathsf{Pr}/}$, the slice over
$n\mathsf{Pr}$ gives

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
$S = (D(\mathbb{S}), 1\mathsf{Pr}_{\mathrm{st}}, \ldots)$, the shifting
operation would not be available.

Nonetheless, shifting is extremely useful as a technical device: it allows us to
assume *without loss of generality* that $n = 0$ in most proofs about properties
of morphisms, thereby simplifying notation considerably.
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

**Perspective 2 (relative, symmetric).** Under the equivalence of
{{< thmref "prop-string-slice" >}}, form the tensor product in
$\mathsf{StRing}_{A/}$:

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
base change as a levelwise operation followed by spectrification. A key theme
of the following sections is to isolate general classes of maps for which
spectrification is unnecessary from some level onwards, making the tensor
product computable in practice.

## Affine maps

### Motivation: a hierarchy of affineness

In classical algebraic geometry, an affine morphism $f \colon Y \to X$ is one for which $Y$ can be completely reconstructed from its global sections: $Y \simeq \operatorname{Spec}(\Gamma(Y, \mathcal{O}_Y))$. Translated into the language of our $\operatorname{Spec}_n \dashv \Gamma_n$ adjunction, this states that the counit map

$$
\operatorname{Spec}_0(\Gamma_0(B)) \to B
$$

is an equivalence. In other words, the single piece of algebraic data $(B/A)_0 \in \mathsf{CAlg}(A_1)$ is entirely sufficient to reconstruct the whole tower $B$. This is the precise formulation of *0-affineness*.

Moving one level up the categorical ladder, Gaitsgory's notion of 1-affineness asks that a prestack $\mathcal{Y}$ satisfies:

$$
\mathsf{ShvCat}(\mathcal{Y}) \simeq \mathsf{QCoh}(\mathcal{Y})\text{-}\mathsf{mod},
$$

meaning the category of sheaves of categories on $\mathcal{Y}$ is fully recovered just from the monoidal DG category $\mathsf{QCoh}(\mathcal{Y})$. In our Stefanich framework, $\mathsf{ShvCat}(\mathcal{Y})$ corresponds to $1\mathsf{Pr}_\mathcal{Y}$, and the right-hand side corresponds to $\mathsf{Mod}_{D(\mathcal{Y})}(1\mathsf{Pr})$. Hence, 1-affineness is exactly the assertion that:

$$
\operatorname{Spec}_1(\Gamma_1(B)) \xrightarrow{\sim} B.
$$

Here, the data $(B/A)_1 \in \mathsf{CAlg}(A_2)$ — which is a commutative algebra in $1\mathsf{Pr}$-categories — is enough to determine all higher levels strictly by iteratively passing to module categories.

The overarching pattern is now crystal clear: *$n$-affineness* dictates that everything from the $n$-th categorical level onwards is rigidly generated by a single, pure piece of commutative algebra data at that level. This rigorously formalizes the mantra that ``everything becomes affine under sufficient categorification''. In the context of our tensor product discussion, the $n$-affineness of $B$ over $A$ guarantees that *spectrification is entirely unnecessary from level $n$ onwards*.

### Definition and formal properties

{{< definition id="def-affineness" >}}
Let $A$ be a Stefanich ring and $n \geq 0$. An $A$-algebra
$B \in \mathsf{StRing}_{A/}$ is called *$n$-affine* if it lies in the essential
image of the fully faithful embedding

$$
  \operatorname{Spec}_n \colon \mathsf{CAlg}(A_{n+1})
  \hookrightarrow \mathsf{StRing}_{A/},
$$

or equivalently, if the counit
$\operatorname{Spec}_n(\Gamma_n(B)) \xrightarrow{\sim} B$ is an equivalence.
{{< /definition >}}

{{< proposition id="prop-n-affine" >}}
Let $A$ be a Stefanich ring and $n \geq 0$. The class of $n$-affine
$B \in \mathsf{StRing}_{A/}$ is stable under all small colimits. Moreover:

1. If $B$ is $n$-affine over $A$, then for all $m \geq n$ the canonical functor

   $$
     \mathsf{Mod}_{(B/A)_m}(A_{m+1}) \to B_{m+1}
   $$

   is an equivalence. Here, the functor is the composite
   $\mathsf{Mod}_{(B/A)_m}(A_{m+1}) \hookrightarrow
   \mathsf{Mod}_{A_{m+1}}(1\mathsf{Pr})
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
$\operatorname{Spec}_n \colon \mathsf{CAlg}(A_{n+1}) \to \mathsf{StRing}_{A/}$ preserves small
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
\mathsf{CAlg}(A_{n+1}) \ar[r, hook]\ar[d,"g^*_n"'] \ar[rrr, bend left=20, "\operatorname{Spec}_n"] & \mathsf{CAlg}(A_{n+2}) \ar[r, hook]\ar[d,"g^*_{n+1}"'] & \cdots \ar[r] & \mathsf{StRing}_{A/} \ar[d,"g^*"]\\
\mathsf{CAlg}(C_{n+1}) \ar[r, hook] \ar[rrr, bend right=20, "\operatorname{Spec}_n"'] & \mathsf{CAlg}(C_{n+2}) \ar[r, hook] & \cdots \ar[r] & \mathsf{StRing}_{C/}
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

> **Warning.** The converse to condition (1) is violently false. Consider the map $f \colon * \to B^2\mathbb{G}_m$ over a field $k$, and let $A \to B$ be the corresponding map of Stefanich rings. Because $f$ is a torsor for a 1-stack, it is 1-affine, so condition (1) holds perfectly for $m \geq 1$. 
> 
> Dangerously, condition (1) *also* appears to hold for $m = 0$. By standard pulling back, we have $A_1 = B_1 = D(k)$, and the relative global sections give $(B/A)_0 = k$. Consequently, the external equivalence holds: $\mathsf{Mod}_k(D(k)) \simeq D(k) = B_1$. 
> 
> However, $f$ is absolutely *not* 0-affine! Since $(B/A)_0 = k$ is merely the trivial unit object in $\mathsf{CAlg}(A_1)$, the space freely generated by it is just the base space itself: $\operatorname{Spec}_0(k) = A$. But obviously $A \neq B$ ($*$ is not $B^2\mathbb{G}_m$).

{{< remark id="rem-affineness-spec-gamma" >}}
The warning above perfectly exposes the vulnerability of lower-level truncations. It is the exact categorical analogue of the classical fact that $\Gamma(\mathbb{P}^1, \mathcal{O}) = k$ but $\mathbb{P}^1$ is undeniably not affine. The extraction functor $\Gamma_0$ acts like a blunt "decategorification" filter: it simply *cannot* see the highly twisted, non-trivial 2-stacky geometry of $B^2\mathbb{G}_m$ that lurks at higher categorical levels. 

Crucially, the equivalence $\mathsf{Mod}_k(D(k)) \simeq D(k) = B_1$ at $m = 0$ *is* genuinely induced by the map $f$ --- there is no mathematical error there. The catch is that checking external equivalence level-by-level is a weak test. The functor $\Gamma_0$ loses so much hidden structural information that attempting to rebuild the space via the counit $\operatorname{Spec}_0(\Gamma_0(B)) \to B$ completely fails to capture the higher stacky "ghosts".

This intuitive picture also elegantly situates Gaitsgory's 1-affineness within the broader framework. Gaitsgory's classical condition asks for a single, isolated equivalence $\mathsf{ShvCat}(\mathcal{Y}) \simeq \mathsf{QCoh}(\mathcal{Y})\text{-}\mathsf{mod}$. This amounts to merely checking that *the underlying external $(\infty,1)$-category* of our reconstructed $\operatorname{Spec}_1(\Gamma_1(B))$ matches that of the target $B$ at level $m = 1$. {{< thmref "def-affineness" >}} is strictly and purposefully stronger: by demanding that the entire generated tower $\operatorname{Spec}_1(\Gamma_1(B)) \to B$ is an equivalence of Stefanich $A$-algebras, it acts as a ruthless filter, guaranteeing that absolutely no higher stacky anomalies can survive in the tower. (Fortunately, the standard examples of 1-affine maps found in the literature do, in fact, satisfy this robust stronger condition.)
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
