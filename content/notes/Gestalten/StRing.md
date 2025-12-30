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
  1\mathsf{Pr} \coloneqq \mathsf{Pr}_{\omega_1}^{L}.
\]
Now, we let $0\mathsf{Pr} \coloneqq \mathsf{An}$.

Since we have
\[
  \mathsf{CAlg}(\mathcal{C}) \hookrightarrow
  \mathsf{CAlg}(\mathsf{Mod}_{\mathcal{C}}(\mathsf{Pr}_{\omega_1}^L)),
  \quad
  A \mapsto \mathsf{Mod}_A(\mathcal{C}),
\]
and $1\mathsf{Pr} \in \mathsf{Pr}_{\omega_1}^L$, we obtain a sequence
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
The $\omega_1$-presentable category $\mathsf{StRing}$ of *Stefanich rings* is
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
*$\omega_1$-compactly generated categorical spectra*,
originally introduced by {{< cite ACS "Remark 3.3.6" >}}.

In {{< cite Aok25 >}}, the author uses $\mathsf{PrSp}^{\omega_1}$ to denote the category of Stefanich rings, and also considers the construction
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
  \mathsf{StRing}_{A/} \simeq \operatorname{lim} \left( \mathsf{CAlg}(A_1) \xleftarrow{\phi_1} \mathsf{CAlg}(A_2) \xleftarrow{\phi_2} \cdots \right).
$$
{{< /proposition >}}

{{< proof >}}
*Step 1: Reformulating the Limit*

Recall that $\mathsf{StRing}$ is defined as a limit in $\widehat{\mathsf{Cat}}$. Consequently, the under-category $\mathsf{StRing}_{A/}$ is the limit of the under-categories at each level.
For $n \geq 1$, we utilize the identification of relative algebras with algebras in the module category (via Lurie's result):
$$
  \mathsf{CAlg}(n\mathsf{Pr})_{A_n/} \simeq \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr})).
$$
Let $\mathcal{C}_n \coloneqq \mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))$. The original definition gives us the **"Big Tower"**:
$$
  \mathsf{StRing}_{A/} \simeq \operatorname{lim} \left( \cdots \to \mathcal{C}_{n+1} \xrightarrow{T_n} \mathcal{C}_n \to \cdots \right).
$$

To analyze the transition functor $T_n$, we need to unpack the structural relationship between consecutive levels $A_n$ and $A_{n+1}$. By the definition of a Stefanich ring, $A_n$ serves as the endomorphism algebra of the unit in $A_{n+1}$. This relationship is encoded by a fundamental adjunction:
{{< tikzcd >}}
\mathsf{Mod}_{A_n}(1\mathsf{Pr}) \ar[r,shift left = 2.5,"F"] \ar[r,phantom,"\bot"] & A_{n+1} \ar[l,shift left =2.5,"G"]
{{< /tikzcd >}}
Here:
  * The left adjoint $F$ is the **"free generation"** functor, determined by sending the generator $A_n$ to the unit $\mathbb{1}_{A_{n+1}}$.
  * The right adjoint $G$ is the **"geometric forgetful"** functor, given by $G(X) \coloneqq \underline{\mathsf{Hom}}_{A_{n+1}}(\mathbb{1}, X)$.

The transition functor $T_n$ in the Big Tower is precisely the functor on algebra categories induced by this right adjoint $G$.
Crucially, this functor **factors** through the category of plain algebras $\mathcal{B}_{n+1} \coloneqq \mathsf{CAlg}(A_{n+1})$. The decomposition is given by:
$$
  T_n: \mathcal{C}_{n+1} \xrightarrow{\pi_{n+1}} \mathcal{B}_{n+1} \xrightarrow{g} \mathcal{C}_n.
$$
Where:
  * $\pi_{n+1}$ extracts the underlying algebra of endomorphisms over the unit: $X \mapsto \mathsf{End}_X(\mathbb{1}_{A_{n+1}})$.
  * $g$ is the restriction of $G$ to algebras, viewing an $A_{n+1}$-algebra as an algebra object in $\mathsf{Mod}_{A_n}(1\mathsf{Pr})$.

Since the transition maps at every level factor through the intermediate objects $\mathcal{B}_k = \mathsf{CAlg}(A_{k})$, the limit of the original tower is equivalent to the limit of the tower formed by these objects (the **"Small Tower"**).
The new transition map $\phi_n: \mathsf{CAlg}(A_{n+1}) \to \mathsf{CAlg}(A_n)$ is the composite $\pi_n \circ g$:
$$
  \phi_n(B) = \mathsf{End}_{g(B)}(\mathbb{1}_{A_n}) \in \mathsf{CAlg}(A_n).
$$
This establishes the equivalence stated in the proposition. It is clear from this construction that the projection maps $B \in \mathsf{StRing}_{A/}$ to $(B/A)_{n-1} \in \mathsf{CAlg}(A_n)$.

<br>

*Step 2: Fully Faithfulness*

**Strategy:**
We need to show that the left adjoint functor $\mathsf{CAlg}(A_n) \to \mathsf{CAlg}(A_{n+1})$ is fully faithful. This is equivalent to showing that the unit of the adjunction $\eta: \operatorname{Id} \to \operatorname{Right} \circ \operatorname{Left}$ is an isomorphism.
Since we are working in large categories ($1\mathsf{Pr}$), it suffices to check this on generators, i.e., $\aleph_1$-compact objects.
The key insight is to utilize the perspective of **"Endomorphisms of the Generator"**:
Any algebra $R \in \mathsf{CAlg}(A_n)$ is naturally the endomorphism algebra of the generator $A_n$ in the module category $\mathsf{Mod}_R(A_n)$. Since our functor $F$ preserves both the generator (mapping $A_n$ to $\mathbb{1}_{A_{n+1}}$) and the algebraic structure, it must map the endomorphisms of $A_n$ isomorphically to the endomorphisms of $\mathbb{1}_{A_{n+1}}$.

**Formal Proof:**
Let $F: \mathsf{Mod}_{A_n}(1\mathsf{Pr}) \to A_{n+1}$ be the left adjoint functor described above. The embedding of algebras is induced by $F$.
To prove fully faithfulness, we verify that for any $R \in \mathsf{CAlg}(A_n)$, the unit of the adjunction $\eta_R: R \to \phi_n(F(R))$ is an equivalence.
Since we are working in $1\mathsf{Pr} = \mathsf{Pr}_{\aleph_1}^L$, it suffices to check this on $\aleph_1$-compact objects. Let $R$ be a countably presented algebra.

Consider $R$ as an object in $\mathsf{CAlg}(\mathsf{Mod}_{A_n}(1\mathsf{Pr}))$ via the embedding $R \mapsto \mathsf{Mod}_R(A_n)$.
The functor $F$ sends this to $F(\mathsf{Mod}_R(A_n)) \in \mathsf{CAlg}(A_{n+1})$.
Applying the right adjoint $\phi_n$, we compute the endomorphisms of the unit for this image:
$$
  \phi_n(F(R)) \simeq \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}}).
$$
Observe that $\mathsf{Mod}_R(A_n)$ is generated by $A_n$ (viewed as an $R$-module via restriction). The endomorphism algebra of this generator is simply $R$ itself:
$$
\mathsf{End}_{\mathsf{Mod}_R(A_n)}(A_n) \simeq R.
$$
Since $F$ is a functor of 2-categories, it preserves adjunction structures and endomorphism algebras. Thus, the endomorphism algebra of the *image of the generator* is the *image of the endomorphism algebra*:
$$
  \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(F(A_n)) \simeq F(R).
$$
Crucially, by the definition of a Stefanich ring, $F$ induces an equivalence on the unit's endomorphisms:
$$
  A_n \xrightarrow{\sim} \mathsf{End}_{A_{n+1}}(\mathbb{1}_{A_{n+1}}).
$$
This implies that $F$ maps the "relative generator" $A_n$ to the unit $\mathbb{1}_{A_{n+1}}$.
Consequently, combining these observations, the endomorphism algebra of the unit in the target is exactly the image of $R$:
$$
  \mathsf{End}_{F(\mathsf{Mod}_R(A_n))}(\mathbb{1}_{A_{n+1}}) \simeq F(R) \cong R.
$$
(The last isomorphism holds because $R$ is viewed as an element of $A_n$, and the map $A_n \to \mathsf{End}(\mathbb{1})$ is the identity on the underlying algebra structure).
Thus, the unit map $\eta_R$ induces the identification $R \xrightarrow{\sim} R$, which is an isomorphism.
{{< /proof >}}
## Affine map

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
