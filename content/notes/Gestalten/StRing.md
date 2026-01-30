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

A morphism $f \colon A \to B$ of Stefanich rings consists of a compatible collection of maps $f_{n-1}^* \colon A_n \to B_n$ in $\mathsf{CAlg}(n\mathsf{Pr})$ for all $n \geq 1$. Since $f_{n-1}^*$ is a morphism in $1\mathsf{Pr}$ (a symmetric monoidal left adjoint), it admits a lax symmetric monoidal right adjoint $f_{n-1,*} \colon B_n \to A_n$. This induces a functor on the level of commutative algebras:
$$
  f_{n-1,*} \colon \mathsf{CAlg}(B_n) \to \mathsf{CAlg}(A_n).
$$

In particular, the unit object $\mathbb{1}_{B_n} \in \mathsf{CAlg}(B_n)$ corresponds to a commutative algebra
$$
  (B/A)_{n-1} \coloneqq f_{n-1,*}(\mathbb{1}_{B_n}) \in \mathsf{CAlg}(A_n).
$$
Under the forgetful functor $\mathsf{CAlg}(A_n) \to \mathsf{CAlg}((n-1)\mathsf{Pr})$, this object is sent to $B_{n-1} \in \mathsf{CAlg}((n-1)\mathsf{Pr})$. In other words, if $B \in \mathsf{StRing}_{A/}$, then for any $n \geq 0$, the object $B_n \in \mathsf{CAlg}(n\mathsf{Pr})$ refines to an object $(B/A)_n \in \mathsf{CAlg}(A_{n+1})$. Thus, any $A$-Stefanich algebra $B$ can be translated to a sequence $\left((B/A)_0,(B/A)_1,\cdots\right)$, and this construction yields the desired equivalence.

{{< proposition >}}
Let $A$ be a Stefanich ring. For any $n \geq 1$, there is a fully faithful functor
$$
  \mathsf{CAlg}(A_n) \hookrightarrow \mathsf{StRing}_{A/}
$$
which is left adjoint to the projection $B \mapsto (B/A)_{n-1}$.
This induces an equivalence identifying $\mathsf{StRing}_{A/}$ with the limit of a tower of algebras:
$$
  \mathsf{StRing}_{A/} \simeq \operatorname{lim}_{\widehat{\mathsf{Cat}}} \left( \mathsf{CAlg}(A_1) \xleftarrow{\phi_1} \mathsf{CAlg}(A_2) \xleftarrow{\phi_2} \cdots \right)
$$
taking $B \in \mathsf{StRing}_{A/}$ to  $\left((B/A)_0,(B/A)_1,\cdots\right)$.
Furthermore, since the transition functors lie in $\mathsf{Pr}_{\aleph_1}^R$, one can describe $\mathsf{StRing}_{A/}$ as a colimit in $1\mathsf{Pr}$:
$$
  \mathsf{StRing}_{A/} \simeq \operatorname{colim}_{1\mathsf{Pr}} \left( \mathsf{CAlg}(A_1) \hookrightarrow \mathsf{CAlg}(A_2) \hookrightarrow \cdots \right).
$$
{{< /proposition >}}

{{< proof >}}
*Step 1: Reformulating the Limit*

Recall that $\mathsf{StRing}$ is defined as a limit in $\widehat{\mathsf{Cat}}$. Consequently, the under-category $\mathsf{StRing}_{A/}$ is the limit of the under-categories at each level.
For $n \geq 1$, we utilize the identification of relative algebras with algebras in the module category (via Lurie's result):
$$
  \mathsf{CAlg}(n\mathsf{Pr})_{A_n/} \simeq \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr})).
$$
Using this identification, the original definition presents $\mathsf{StRing}_{A/}$ as the limit of the following tower:
$$
  \mathsf{StRing}_{A/} \simeq \operatorname{lim}_{\widehat{\mathsf{Cat}}} \left( \cdots \to \mathsf{CAlg}(\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr})) \xrightarrow{T_n} \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr})) \to \cdots \right).
$$

To analyze the transition functor $T_n$, we need to unpack the structural relationship between consecutive levels. By the definition of a Stefanich ring, we have the adjunction:
{{< tikzcd >}}
\mathsf{Mod}_{A_n}(1\mathsf{Pr}) \ar[r,shift left = 2.5,"F"] \ar[r,phantom,"\bot"] & A_{n+1} \ar[l,shift left =2.5,"G"]
{{< /tikzcd >}}
where $G(X) \coloneqq \underline{\mathsf{Hom}}_{A_{n+1}}(\mathbb{1}, X)$ is the geometric forgetful functor.

Crucially, the transition functor $T_n$ **factors** through the category $\mathsf{CAlg}(A_{n+1})$. Specifically, $T_n$ is the composite:
$$
  \mathsf{CAlg}(\mathsf{Mod}_{A_{n+1}}(1\mathsf{Pr})) \xrightarrow{\pi_{n+1}} \mathsf{CAlg}(A_{n+1}) \xrightarrow{g} \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr})).
$$
Here:
* $\pi_{n+1}$ is given by taking endomorphisms of the unit: $X \mapsto \mathsf{End}_X(\mathbb{1}_{A_{n+1}})$.
* $g$ is the functor induced by the right adjoint $G$ on algebras.

Since the transition maps at every level factor through the objects $\mathsf{CAlg}(A_{k})$, the limit of the original tower is equivalent to the limit of the tower formed by these intermediate objects.
The new transition map $\phi_n: \mathsf{CAlg}(A_{n+1}) \to \mathsf{CAlg}(A_n)$ is the composite $\pi_n \circ g$:
$$
  \phi_n(B) = \mathsf{End}_{g(B)}(\mathbb{1}_{A_n}) \in \mathsf{CAlg}(A_n).
$$
This establishes the limit equivalence. It is clear from this construction that the projection maps $B \in \mathsf{StRing}_{A/}$ to $(B/A)_{n-1} \in \mathsf{CAlg}(A_n)$.

<br>

*Step 2: Colimit Description*

The transition functors $\phi_n: \mathsf{CAlg}(A_{n+1}) \to \mathsf{CAlg}(A_n)$ constructed above are accessible functors that preserve limits (being right adjoints). Thus, they lie in $\mathsf{Pr}_{\aleph_1}^R$.
In the duality between $\mathsf{Pr}^R$ (categories with right adjoints) and $\mathsf{Pr}^L$ (categories with left adjoints), the limit of a diagram of right adjoints corresponds to the colimit of the diagram of their left adjoints.
Therefore, $\mathsf{StRing}_{A/}$ can be described as the colimit in $1\mathsf{Pr}$:
$$
  \mathsf{StRing}_{A/} \simeq \operatorname{colim}_{1\mathsf{Pr}} \left( \mathsf{CAlg}(A_1) \to \mathsf{CAlg}(A_2) \to \cdots \right),
$$
where the transition maps are now the left adjoints $\mathsf{CAlg}(A_n) \to \mathsf{CAlg}(A_{n+1})$.

<br>

*Step 3: Fully Faithfulness*

It remains to show that these left adjoints $\mathsf{CAlg}(A_n) \to \mathsf{CAlg}(A_{n+1})$ are fully faithful.
Let $F: \mathsf{Mod}_{A_n}(1\mathsf{Pr}) \to A_{n+1}$ be the left adjoint functor described in Step 1. The functor on algebras is induced by $F$.
To prove fully faithfulness, we verify that for any $R \in \mathsf{CAlg}(A_n)$, the unit of the adjunction $\eta_R: R \to \phi_n(F(R))$ is an equivalence.
Since we are working in $1\mathsf{Pr}$, it suffices to check this on $\aleph_1$-compact objects. Let $R$ be a countably presented algebra.

Consider $R$ as an object in $\mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))$ via the embedding $R \mapsto \mathsf{Mod}_R(A_n)$.
Applying the right adjoint $\phi_n$ to the image $F(\mathsf{Mod}_R(A_n))$, we compute:
$$
  \phi_n(F(\mathsf{Mod}_R(A_n))) \simeq \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}}).
$$
Note that $\mathsf{Mod}_R(A_n)$ is generated by $A_n$. The endomorphism algebra of this generator is simply $R$ itself:
$$
\mathsf{End}_{\mathsf{Mod}_R(A_n)}(A_n) \simeq R.
$$
Since $F$ preserves adjunctions and endomorphism algebras, we have:
$$
  \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(F(A_n)) \simeq F(R).
$$
Crucially, by the definition of a Stefanich ring, $F$ induces an equivalence on the unit's endomorphisms:
$$
  A_n \xrightarrow{\sim} \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}).
$$
This implies that $F$ maps the generator $A_n$ to the unit $\mathbb{1}_{A_{n+1}}$. Consequently, the endomorphism algebra of the unit in the target is exactly the image of $R$:
$$
  \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}}) \simeq F(R) \cong R.
$$
Thus, $\eta_R$ is an isomorphism.
{{< /proof >}}

In the above proof, we constructed a functor
$$
   \mathsf{Mod}_{A_n}(1\mathsf{Pr}) \xrightarrow{F} A_{n+1}
$$
It is not fully faithful globally, but if we focus on dualizable objects, $F$ will be fully faithful.

{{< lemma >}}
For any Stefanich ring $A$ and $n \geq 0$, the functor
$$
  F \colon \mathsf{Mod}_{A_n}(1\mathsf{Pr}) \to A_{n+1}
$$
is fully faithful on dualizable objects.
In fact, it is even fully faithful on $\aleph_1$-filtered colimits of dualizable objects.
{{< /lemma >}}

{{< proof >}}
First, observe that $F$ is a morphism in $1\mathsf{Pr}$. Consequently, $F$ preserves colimits and $\aleph_1$-compact objects. Additionally, the right adjoint $G$ preserves $\aleph_1$-filtered colimits.
Therefore, to show fully faithfulness on $\aleph_1$-filtered colimits of dualizable objects, it suffices to check it on the dualizable objects themselves.

Since $F$ is a symmetric monoidal functor, the problem reduces to checking the unit of the adjunction.
Let $X, Y \in \mathsf{Mod}_{A_n}(1\mathsf{Pr})$ be dualizable objects. We have the following chain of natural equivalences using the duality pairings:
$$
\begin{aligned}
  \operatorname{Hom}_{A_{n+1}}(F(X), F(Y)) &\simeq \operatorname{Hom}_{A_{n+1}}(F(X) \otimes F(Y)^{\vee}, \mathbb{1}_{A_{n+1}}) \\
  &\simeq \operatorname{Hom}_{A_{n+1}}(F(X \otimes Y^{\vee}), \mathbb{1}_{A_{n+1}}).
\end{aligned}
$$
Using the adjunction $F \dashv G$, this maps to:
$$
  \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X \otimes Y^{\vee}, G(\mathbb{1}_{A_{n+1}})).
$$
If we can show that the natural map $1_{A_n} \to G(\mathbb{1}_{A_{n+1}})$ is an equivalence, then the last term becomes:
$$
  \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X \otimes Y^{\vee}, 1_{A_n}) \simeq \operatorname{Hom}_{\mathsf{Mod}_{A_n}(1\mathsf{Pr})}(X, Y),
$$
which proves fully faithfulness.

Recall the definition of the right adjoint $G$:
$$
  G(Z) = \underline{\mathsf{Hom}}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}, Z).
$$
Applying this to the unit $\mathbb{1}_{A_{n+1}}$, we get:
$$
  G(\mathbb{1}_{A_{n+1}}) = \underline{\mathsf{Hom}}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}, \mathbb{1}_{A_{n+1}}) = \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}).
$$
By the fundamental definition of a Stefanich ring, we have the identification $A_n \simeq \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}})$.
Since $A_n$ is precisely the unit object $\mathbb{1}_{A_n}$ in the category $\mathsf{Mod}_{A_n}(1\mathsf{Pr})$, we conclude that $G(\mathbb{1}_{A_{n+1}}) \simeq \mathbb{1}_{A_{n}}$.
Thus, the functor is fully faithful on dualizable objects.
{{< /proof >}}

## Affine map

Since $\mathsf{CAlg}(A_{n+1}) \hookrightarrow \mathsf{StRing}_{A/}$ is fully faithful, one can consider those $B \in \mathsf{StRing}_{A/}$ which lies in the essential image of $\mathsf{CAlg}(A_{n+1})$, which is equivalent to say those $B$ determined by $(B/A)_{n} \in \mathsf{CAlg}(A_{n+1})$.
{{< definition id="def-affineness" >}}
Let $A$ be a Stefanich ring and $n \geq 0$.
An $A$-Stefanich algebra $B \in \mathsf{StRing}_{A/}$ is called **$n$-affine** if it lies in the essential image of the fully faithful embedding
$$
  \mathsf{CAlg}(A_{n+1}) \hookrightarrow \mathsf{StRing}_{A/}.
$$
Equivalently, $B$ is $n$-affine if for all $m \geq n$, the structure of $B$ at level $m+1$ is freely generated by its structure at level $m$. Explicitly, consider the left adjoint functor ("free generation"):
$$
  F_{m+1} \colon \mathsf{Mod}_{A_{m+1}}(1\mathsf{Pr}) \to A_{m+2}.
$$
Then for all $m \geq n$, this functor maps the module category of the relative algebra at level $m$ to the relative algebra at level $m+1$:
$$
  F_{m+1}\left( \mathsf{Mod}_{(B/A)_m}(A_{m+1}) \right) \simeq (B/A)_{m+1} \quad \text{in } \mathsf{CAlg}(A_{m+2}).
$$
In terms of the sequence of relative algebras, this means the tower for $m \ge n$ is determined by applying the free generation functors iteratively:
$$
\begin{aligned}
  (B/A)_n     &\in \mathsf{CAlg}(A_{n+1}) \\
  (B/A)_{n+1} &\simeq F_{n+1}\bigl( \mathsf{Mod}_{(B/A)_n}(A_{n+1}) \bigr) \\
  (B/A)_{n+2} &\simeq F_{n+2}\bigl( \mathsf{Mod}_{(B/A)_{n+1}}(A_{n+2}) \bigr) \\
              &\vdots
\end{aligned}
$$
{{< /definition >}}
In next note, we will compare 1-affineness in the sense of Gaistgory and {{< thmref "def-affineness" >}}.

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
