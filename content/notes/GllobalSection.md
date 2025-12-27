---
title: "Spectral Sequences as Bookkeeping, Not Structure"
date: 2025-12-27
math: true
draft: false
description: "In derived settings, many classical comparisons between Čech and sheaf cohomology are better understood as descent statements. Spectral sequences may organize computations, but they play no structural role in the argument."
tags:
  - Descent
  - Barr--Beck--Lurie
  - Higher Category Theory
  - Higher Algebra
  - Descent
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
aliases:
  - /global-section
---
## Motivation: Structure versus Computation

Spectral sequences are among the most powerful computational tools in homological algebra and algebraic geometry. When explicit calculations are required, they are often indispensable.  
However, many classical appearances of spectral sequences in the literature arise in a different context: not to compute concrete groups, but to justify *why* certain comparison theorems hold.

This note is concerned with that second situation.

A typical example is the comparison between Čech cohomology and sheaf cohomology. Traditionally, this comparison is presented via a Grothendieck spectral sequence, whose convergence and collapse encode the desired isomorphisms. While this method is effective, it tends to obscure the underlying reason the comparison works: namely, that global sections satisfy descent with respect to an appropriate topology.

From a modern, derived point of view, the situation becomes clearer. Once global sections are defined as limits in a descent-compatible manner, the comparison between Čech constructions and sheaf cohomology is no longer a computational statement. It is a formal consequence of descent. Spectral sequences may still appear as a convenient bookkeeping device, but they are not the source of the result.

The purpose of these notes is to emphasize this distinction. When one is not primarily interested in explicit calculations, but rather in the structural mechanism behind cohomological comparisons, spectral sequences are not essential. Descent is.

## Classical Sheaf Cohomology and Čech Cohomology

Let $X$ be a space (or a scheme), and let $\mathsf{Mod}(X)$ denote the category of $\mathcal{O}_X$-modules on $X$. We may consider the global sections functor

$$
\Gamma(X,-) \colon \mathsf{Mod}(X) \to \mathsf{Ab} = \mathsf{Mod}(\operatorname{pt}).
$$

This functor is left exact, and therefore it only controls the behavior of left exact sequences after taking global sections. To remedy this, one introduces **sheaf cohomology**. For $i \in \mathbb{N}$, the $i$-th sheaf cohomology of an $\mathcal{O}_X$-module $\mathcal{F}$ is defined by

$$
H^i(X,\mathcal{F}) \coloneqq R^i \Gamma(X,\mathcal{F}).
$$

This construction relies on the existence of an **injective resolution**. Namely, one chooses a complex $A_{\mathcal{F}}^*$ in $\mathsf{Mod}(X)$

$$
0 \longrightarrow \mathcal{F}
  \longrightarrow A_{\mathcal{F}}^0
  \longrightarrow A_{\mathcal{F}}^1
  \longrightarrow \cdots
$$

which is exact as a sequence of $\mathcal{O}_X$-modules, and such that for all $n \ge 0$ and all $i > 0$,

$$
H^i(X, A_{\mathcal{F}}^n) = 0.
$$

This definition depends on the classical formalism of derived functors. It is neither particularly intuitive nor easy to compute in practice. Nevertheless, it does manage to produce exactly the invariants we want.

A natural idea is the following. Given an open cover $(U_i)_{i \in I}$ of $X$ and an $\mathcal{O}_X$-module $\mathcal{F}$, can we compute the cohomology of $\mathcal{F}$ purely from the data of the groups $\Gamma(U_i,\mathcal{F})$? This leads to the notion of Čech cohomology.

Now set

$$
U \coloneqq \bigsqcup_{i \in I} U_i,
$$

so that $U \to X$ is an open cover.

The key observation is that iterated fiber products of $U$ over $X$ encode all multiple intersections of the cover.

First, the fiber product $U \times_X U$ decomposes naturally as

$$
U \times_X U
\;\cong\;
\bigsqcup_{(i,j) \in I^2} (U_i \cap U_j),
$$

namely the disjoint union of all pairwise intersections.

Similarly, the triple fiber product decomposes as

$$
U \times_X U \times_X U
\;\cong\;
\bigsqcup_{(i,j,k) \in I^3} (U_i \cap U_j \cap U_k),
$$

the disjoint union of all triple intersections.

More generally, for any $n \ge 0$, if we write $U_n$ for the $(n+1)$-fold fiber product, then

$$
U_n
\;\coloneqq\;
\underbrace{U \times_X \cdots \times_X U}_{n+1\text{ times}}
\;\cong\;
\bigsqcup_{(i_0,\dots,i_n) \in I^{n+1}}
\bigl(U_{i_0} \cap \cdots \cap U_{i_n}\bigr).
$$

Thus $U_n$ may be regarded as the disjoint union of all $(n+1)$-fold intersections of the covering.

{{< definition >}}
Let $\mathcal{C}$ be a category admitting pullbacks, and let $U \to X$ be a morphism in $\mathcal{C}$. The **Čech nerve** of $U \to X$ is the simplicial object

$$
U_{\bullet} \colon \Delta^{\mathrm{op}} \to \mathcal{C}
$$

defined in degree $n$ by

$$
U_{n} = \underbrace{U \times_X \cdots \times_X U}_{n+1\text{ factors}}.
$$

For intuition, one may picture $U_{\bullet}$ as the simplicial object whose underlying diagram looks like

{{< tikzcd >}}
\cdots &
U \times_X U \times_X U
\ar[r, shift left=4] \ar[r] \ar[r, shift right=4]
& U \times_X U
\ar[r, shift left=2] \ar[r, shift right=2]
\ar[l, shift left=2] \ar[l, shift right=2]
& U
\ar[l]
{{< /tikzcd >}}

Here the diagram is only meant as a schematic indication of the simplicial structure; the actual definition is given by the formula above.
{{< /definition >}}

## Čech Cohomology and Refinements

Given an open cover $U \to X$, the Čech nerve $U_\bullet$ allows us to form a cosimplicial abelian group

$$
\Gamma(U_\bullet, \mathcal{F}),
$$

by applying global sections levelwise. Using the Dold–Kan correspondence (more precisely, the Moore complex), this cosimplicial object gives rise to a cochain complex

$$
\check{C}^*(U,\mathcal{F}),
$$

called the **Čech complex** of $\mathcal{F}$ with respect to the cover $U$.

The cohomology of this complex is called **Čech cohomology**. For $i \ge 0$, we write

$$
\check{H}^i(U,\mathcal{F})
$$

for the $i$-th Čech cohomology group computed with respect to the cover $U$.

A priori, Čech cohomology depends on the chosen cover. However, open covers admit refinements. Given two covers $\mathcal{U} = (U_i)_{i \in I}$ and $\mathcal{V} = (V_j)_{j \in J}$, we say that $\mathcal{V}$ is a **refinement** of $\mathcal{U}$ if there exists a map $\alpha \colon J \to I$ such that

$$
V_j \subset U_{\alpha(j)}
$$

for all $j \in J$.

Such a refinement induces a morphism of Čech complexes

$$
\check{C}^*(\bigsqcup_{i \in I}U_i,\mathcal{F}) \longrightarrow \check{C}^*(\bigsqcup_{j \in J}V_j,\mathcal{F}),
$$

and hence a map on Čech cohomology groups. Let $\mathsf{Cov}(X)$ denote the category whose objects are open covers of $X$ and whose morphisms are refinements. We may then define the Čech complex and Čech cohomology of $X$ itself by taking colimits over all covers:

$$
\check{C}(X,\mathcal{F})
\coloneqq
\operatorname*{colim}_{U \in \mathsf{Cov}(X)} \check{C}(U,\mathcal{F}),
$$

and for $n \ge 0$,

$$
\check{H}^n(X,\mathcal{F})
\coloneqq
\operatorname*{colim}_{U \in \mathsf{Cov}(X)} \check{H}^n(U,\mathcal{F}).
$$

A classical and fundamental question is the following:

> Under what conditions does Čech cohomology agree with sheaf cohomology?

The answer goes back to Cartan.

{{< proposition >}}
Let $X$ be a ringed space, and let $\mathcal{B}$ be a basis of the topology of $X$ such that $U \cap V \in \mathcal{B}$ for all $U,V \in \mathcal{B}$. Let $\mathcal{F}$ be an $\mathcal{O}_X$-module.

Assume that for all $U \in \mathcal{B}$ and all $p > 0$, one has

$$
\check{H}^p(U,\mathcal{F}) = 0.
$$

Then:
1. For every $U \in \mathcal{B}$ and every $n > 0$, one has $H^n(U,\mathcal{F}) = 0$.
2. For any open cover $(U_i)_{i \in I}$ of $X$ by elements of $\mathcal{B}$, the canonical map
   $$
     \check{H}^n\!\left(\bigcup_i U_i,\mathcal{F}\right)
     \longrightarrow
     H^n(X,\mathcal{F})
   $$
   is an isomorphism.
3. In particular, the canonical map
   $$
     \check{H}^n(X,\mathcal{F}) \longrightarrow H^n(X,\mathcal{F})
   $$
   is an isomorphism.
{{< /proposition >}}

Traditionally, Cartan’s criterion is proved using a Grothendieck spectral sequence. Very roughly, one considers the presheaves

$$
\mathcal{H}^q(\mathcal{F}) \colon U \longmapsto H^q(U,\mathcal{F}),
$$

and obtains a spectral sequence of the form

$$
E_2^{p,q} = \check{H}^p\!\bigl(U,\mathcal{H}^q(\mathcal{F})\bigr) \;\Rightarrow\; H^{p+q}(X,\mathcal{F}).
$$

Under the vanishing assumptions in Cartan’s criterion, the $E_2$-page collapses, and the desired comparison results follow.

From a modern point of view, however, the spectral sequence is not the real source of the result. What actually matters is that the global sections functor satisfies descent with respect to the chosen topology. Once this is understood, the comparison between Čech cohomology and sheaf cohomology becomes a statement about descent, rather than a computation involving spectral sequences.

## Čech Cohomology on Affine Schemes

The simplest and most important case is that of affine schemes. Let $X = \operatorname{Spec}(R)$ be an affine scheme, and let $\mathcal{F}$ be a quasi-coherent $\mathcal{O}_X$-module.

In this situation, Čech cohomology behaves in the cleanest possible way.

{{< proposition >}}
Let $X = \operatorname{Spec}(R)$ be an affine scheme, and let $\mathcal{F}$ be a quasi-coherent $\mathcal{O}_X$-module. Then

$$
\check{H}^0(X,\mathcal{F}) \simeq \Gamma(X,\mathcal{F}),
$$

and for all $i > 0$,

$$
\check{H}^i(X,\mathcal{F}) = 0.
$$
{{< /proposition >}}

We briefly recall why this is true.

By definition of $\check{H}^i(X,\mathcal{F})$, it suffices to show that for every open cover $U \to X$,

$$
\check{H}^0(U,\mathcal{F}) \simeq \Gamma(X,\mathcal{F})
\quad\text{and}\quad
\check{H}^i(U,\mathcal{F}) = 0 \text{ for } i > 0.
$$

Since $X$ is affine, it is quasi-compact, and its Zariski topology admits a basis consisting of principal opens

$$
\{ D(f) \}_{f \in R}.
$$

Thus it is enough to check the claim for finite covers by principal opens

$$
\{ D(f_i) \}_{i \in I}.
$$

In this case, writing $\mathcal{F} \simeq \widetilde{M}$ for some $R$-module $M$, the Čech complex computes the cohomology of the sequence

$$
0 \longrightarrow M \longrightarrow \bigoplus_i M_{f_i} \longrightarrow \bigoplus_{i,j} M_{f_i f_j} \longrightarrow \cdots .
$$

Exactness of this sequence is precisely the Zariski descent property for quasi-coherent modules. In particular, all higher Čech cohomology groups vanish.

The affine case already suggests the general pattern. To extend the comparison beyond affines, one needs a condition ensuring that intersections of affine opens remain affine.

This leads naturally to the notion of separatedness.

{{< proposition >}}
Let $S = \operatorname{Spec}(R)$ be an affine scheme, and let $X$ be a scheme. The morphism $X \to S$ is separated if and only if there exists an affine open cover $(U_i)_i$ of $X$ such that for all $i,j$:
1. the intersection $U_i \cap U_j$ is affine, and
2. the canonical map
   $$
     \Gamma(U_i,\mathcal{O}_X) \otimes_R \Gamma(U_j,\mathcal{O}_X)
     \longrightarrow
     \Gamma(U_i \cap U_j,\mathcal{O}_X)
   $$
   is surjective.
{{< /proposition >}}

Combining the affine computation with the characterization of separated morphisms, one obtains the following classical result.

{{< theorem >}}
Let $X$ be a separated scheme, and let $\mathcal{F}$ be a quasi-coherent $\mathcal{O}_X$-module. Then for all $i \ge 0$,

$$
\check{H}^i(X,\mathcal{F}) \simeq H^i(X,\mathcal{F}).
$$
{{< /theorem >}}

In other words, for separated schemes and quasi-coherent sheaves, Čech cohomology computes sheaf cohomology correctly. From the classical point of view, this result is often proved using spectral sequences.

However, the affine case already hints at a different explanation: the vanishing of higher cohomology is not a miracle, but a manifestation of descent.

At this point, the moral should already be visible.

On affine schemes, quasi-coherent sheaves satisfy Zariski descent, and Čech cohomology simply records this fact. For separated schemes, the same descent property extends across affine covers, so Čech cohomology continues to compute the correct invariants.

From this perspective, spectral sequences are merely a technical device for organizing the comparison. The underlying reason for the agreement is descent.

## Do Spectral Sequences Really Matter Here?

In the classical comparison between Čech cohomology and sheaf cohomology, spectral sequences appear naturally, for instance in Cartan’s criterion. From a computational point of view, they are certainly convenient.

Conceptually, however, the spectral sequence is not doing the real work. What actually forces the comparison to hold is the vanishing provided by descent: once higher cohomology vanishes on a suitable basis, there is nothing left for the spectral sequence to detect.

From this perspective, spectral sequences serve mainly as a bookkeeping device. They organize the argument, but they do not explain its underlying mechanism. The agreement between Čech cohomology and sheaf cohomology is, at heart, a statement about descent rather than about spectral sequences.

This suggests a shift in viewpoint. Instead of starting from derived functors and introducing spectral sequences afterwards, one may begin with global sections defined in a descent-compatible way. In such a framework, the classical comparison results become formal, and spectral sequences are no longer structurally necessary.

## Global Sections from a Functorial Viewpoint

We now take a step back and rethink the notion of global sections from a more functorial perspective.

Instead of starting with schemes and their structure sheaves, we fix from the outset an **algebraic functor**

$$
X \colon \mathsf{CAlg} \longrightarrow \mathsf{Set}.
$$

This point of view treats schemes, algebraic spaces, and stacks on an equal footing, and is particularly well suited for discussing descent.

From this perspective, a quasi-coherent module on $X$ should record how modules vary over affine test objects. Concretely, such an object assigns:

- to every $R$-point
  $$
    x \colon \operatorname{Spec}(R) \longrightarrow X
  $$
  an $R$-module $M(x)$;
- to every morphism of rings $\varphi \colon R \to S$, an identification
  $$
    M(x) \otimes_R S \;\simeq\; M(\varphi^* x),
  $$
  satisfying the usual compatibility conditions.

This description is entirely functorial and makes no reference to a topology on $X$.

Formally, this can be packaged by defining the category of quasi-coherent modules on $X$ as

$$
\mathsf{QCoh}(X) \;\coloneqq\; \operatorname*{lim}_{x \colon \operatorname{Spec}(R) \to X} \mathsf{Mod}(R),
$$

where the limit is taken over all affine test objects mapping to $X$. Here $\mathsf{Mod}(R)$ denotes the category of $R$-modules.

Under this definition, the structure sheaf $\mathcal{O}_X$ corresponds to the assignment

$$
x \longmapsto R.
$$

With this in hand, the definition of global sections becomes tautological. Given $M \in \mathsf{QCoh}(X)$, we define its **global sections** by

$$
\Gamma(X,M) \;\coloneqq\; \operatorname{Hom}_{\mathsf{QCoh}(X)}(\mathcal{O}_X,M).
$$

Unwinding the definitions shows that this is simply the limit

$$
\Gamma(X,M) \;\simeq\; \operatorname*{lim}_{x \colon \operatorname{Spec}(R) \to X} M(x).
$$

This formula already explains why Čech constructions appear so naturally. Choosing a cover of $X$ amounts to choosing a diagram of affine test objects, and the associated Čech nerve provides an explicit way to compute the above limit.

In particular, the comparison between Čech cohomology and sheaf cohomology is no longer mysterious: it is a question about whether this limit satisfies descent with respect to the chosen class of covers.

## The Derived Picture

From now on, the word *category* always means an $(\infty,1)$-category. The functorial viewpoint becomes even more transparent in the derived setting.

We now regard $X$ as a functor

$$
X \colon \mathsf{CAlg} \longrightarrow \mathsf{Ani},
$$

where $\mathsf{CAlg}$ denotes the category of commutative ring spectra, and $\mathsf{Ani}$ the category of animae.

For $R \in \mathsf{CAlg}$, let $\mathsf{Mod}(R)$ denote the stable category of $R$-module spectra.

As before, we define

$$
\mathsf{QCoh}(X) \;\coloneqq\; \operatorname*{lim}_{x \colon \operatorname{Spec}(R) \to X} \mathsf{Mod}(R),
$$

and for $M \in \mathsf{QCoh}(X)$ we set

$$
\Gamma(X,M) \;\coloneqq\; \operatorname*{lim}_{x \colon \operatorname{Spec}(R) \to X} M(x).
$$

This time, however, $\Gamma(X,M)$ is a **spectrum** rather than an abelian group.

## Faithfully Flat Descent

From the functorial and derived viewpoint, all comparison results discussed so far are reduced to a single question:

> does the global sections functor $\Gamma(X,-)$ satisfy descent?

In practice, this question is most naturally formulated with respect to **faithfully flat morphisms**.

Associated to a morphism $A \to B$ of commutative ring spectra is the cosimplicial $A$-algebra

$$
B^{\otimes_A \bullet} = \bigl(
  B
  \;\rightrightarrows\;
  B \otimes_A B
  \;\rightrightarrows\;
  B \otimes_A B \otimes_A B
  \;\cdots
\bigr),
$$

often called the **Čech conerve** or **cobar construction** of $A \to B$.

From the perspective of descent, this cosimplicial object encodes the cover $\operatorname{Spec}(B) \to \operatorname{Spec}(A)$. The descent problem for modules can then be phrased as follows:

> can an $A$-module be recovered from its pullback to $B$, together with the canonical compatibilities over $B \otimes_A B$, $B \otimes_A B \otimes_A B$, and so on?

More precisely, there is a natural functor

$$
\mathsf{Mod}(A)
\longrightarrow
\operatorname*{lim}_{\Delta}
\mathsf{Mod}\bigl(B^{\otimes_A \bullet}\bigr),
$$

sending an $A$-module $M$ to the cosimplicial system

$$
M \otimes_A B^{\otimes_A \bullet}.
$$

Faithfully flat descent asserts that, under suitable hypotheses on $A \to B$, this functor is an equivalence.

The crucial point is that this statement is purely about limits and tensor products. No spectral sequences are involved at this stage. Once such an equivalence is known, descent for global sections follows formally: global sections commute with the relevant limits, and Čech constructions compute the same limit.

## Flatness and Faithful Flatness

To formulate descent precisely, we need a derived notion of flatness.

Let $A$ be a connective commutative ring spectrum.

* An $A$-module $M$ is called **flat** if tensoring with $M$
    $$
    -\otimes_A M \colon \mathsf{Mod}(A) \longrightarrow \mathsf{Mod}(A)
    $$
    is $t$-exact. Equivalently, flatness means that $\pi_0(M)$ is flat over $\pi_0(A)$ and that higher homotopy groups behave compatibly under base change.

* A morphism $A \to B$ of commutative ring spectra is called **flat** if $B$, regarded as an $A$-module, is flat.

* It is called **faithfully flat** if, in addition, the induced map
    $$
    \operatorname{Spec}(\pi_0 B) \longrightarrow \operatorname{Spec}(\pi_0 A)
    $$
    is surjective.

Faithful flatness is exactly the condition ensuring that $\operatorname{Spec}(B) \to \operatorname{Spec}(A)$ behaves like a cover. In particular, it is the natural class of morphisms for formulating fpqc descent.

## Descent for Modules

Let $A \to B$ be a faithfully flat morphism of commutative ring spectra. As discussed above, it gives rise to a cosimplicial $A$-algebra

$$
B^{\otimes_A \bullet}.
$$

There is a canonical functor

$$
\mathsf{Mod}(A)
\longrightarrow
\operatorname*{lim}_{\Delta}
\mathsf{Mod}\bigl(B^{\otimes_A \bullet}\bigr),
$$

sending an $A$-module $M$ to the cosimplicial system $M \otimes_A B^{\otimes_A \bullet}$.

{{< theorem title="Faithfully flat descent" >}}
Let $A \to B$ be a faithfully flat morphism of commutative ring spectra. Assume that $\pi_0(B)$ is generated over $\pi_0(A)$ by fewer than $\aleph_\omega$ generators and relations. Then the canonical functor

$$
\mathsf{Mod}(A)
\;\longrightarrow\;
\operatorname*{lim}_{\Delta}
\mathsf{Mod}\bigl(B^{\otimes_A \bullet}\bigr)
$$

is an equivalence of categories.
{{< /theorem >}}

This statement is the precise form of faithfully flat descent for modules. Once it is available, descent for global sections follows formally.

Indeed, global sections are defined as limits, and limits commute with limits. As a consequence, Čech constructions compute the same homotopy limit, and no spectral sequence is required.

## Descent Theory

To prove the theorem above, we need to introduce the theory of **descent**. We briefly recall some fundamental concepts.

{{< definition >}}
Let $\mathcal{C}$ be a stable symmetric monoidal category, and let $A \in \mathcal{C}$ be an object. We denote by $\langle A \rangle \subset \mathcal{C}$ the smallest full subcategory containing $A$ that is closed under finite (co)limits, retracts, and tensor products.

We say that $A$ is a **descendable object** if $\langle A \rangle$ contains the unit object $\mathbb{1}_{\mathcal{C}}$.
{{< /definition >}}

In general, descendability is not easy to verify directly. However, we can use pro-constant diagrams as a criterion.
The use of pro-constant objects and the role of the stable Dold--Kan correspondence
are discussed in more detail in
{{< pageref "notes/StableDoldKan.md" "the note on the Stable Dold--Kan correspondence" >}}.

{{< definition >}}
Let $\mathcal{C}$ be a category admitting finite colimits.

1.  A cofiltered diagram $I \to \mathcal{C}$ is called a **pro-constant diagram** if it lies in the essential image of the embedding $y' \colon \mathcal{C} \hookrightarrow \mathsf{Pro}(\mathcal{C})$.
2.  A cosimplicial object $M^{\bullet} \colon \Delta \to \mathcal{C}$ is called a **pro-constant object** if, after applying the stable Dold–Kan correspondence, the resulting filtered chain
    $$
    \mathbb{Z}_{\geq 0}^{\operatorname{op}} \to \mathcal{C}, \quad n \longmapsto \operatorname{lim}_{m \in \Delta_{\leq n}} M^n
    $$
    is a pro-constant diagram.
{{< /definition >}}

**Example:** Any split cosimplicial object is a pro-constant object.

**Example:** Let $\mathcal{C}$ be a stable symmetric monoidal category. If a cofiltered diagram $F \colon I \to \mathcal{C}$ is a pro-constant diagram, then for any $X \in \mathcal{C}$, one has

$$
\left(\operatorname{lim}_{I} F(i) \right) \otimes X \;\simeq\; \operatorname{lim}_{I} (F(i) \otimes X).
$$

{{< theorem title="Mathew" >}}
Given $A \in \mathsf{CAlg}(\mathcal{C})$, the algebra $A$ is descendable if and only if the cobar construction $A^{\otimes \bullet}$ is a pro-constant object and its limit is $\mathbb{1}_{\mathcal{C}}$.
{{< /theorem >}}

{{< proof "Sketch of Proof" >}}
* If $A$ is descendable, let $\mathcal{X} \subset \mathcal{C}$ be the full subcategory spanned by those objects $M$ such that $M \otimes A^{\otimes \bullet}$ is a pro-constant object with limit $M$. It is not difficult to see that $\mathcal{X}$ is closed under finite (co)limits, retracts, and tensor products. Since $A \in \mathcal{X}$ (as $A \otimes A^{\otimes \bullet}$ is split), it follows that $\langle A \rangle \subset \mathcal{X}$.
* Conversely, if $A^{\otimes \bullet}$ is a pro-constant object with limit $\mathbb{1}_{\mathcal{C}}$, we can immediately deduce that there exists $n \gg 0$ such that $\mathbb{1}_{\mathcal{C}}$ is a retract of $\operatorname{lim}_{m \in \Delta_{\leq n}} A^{\otimes \bullet}$. Since $\operatorname{lim}_{m \in \Delta_{\leq n}} A^{\otimes \bullet} \in \langle A \rangle$, the result follows.
{{< /proof >}}

Using the **Barr–Beck–Lurie Theorem**, we obtain the following result:

{{< theorem >}}
Let $\mathcal{C}$ be a stable symmetric monoidal category, and let $A$ be a descendable commutative algebra in $\mathcal{C}$. Then the adjunction
{{< tikzcd >}}
    \mathcal{C} \ar[r,shift left = 2.5,"-\otimes A"] \ar[r,phantom,"\bot"] & \mathsf{Mod}_{\mathcal{C}}(A) \ar[l,shift left = 2.5,"F"]
{{< /tikzcd >}}
is **comonadic**. In this case, there is an equivalence of categories
$$
    \mathcal{C} \simeq \operatorname{lim}_{\Delta}\left( \mathsf{Mod}_{\mathcal{C}}(A^{\otimes \bullet}) \right)
$$
{{< /theorem >}}

{{< proof >}}
This is essentially a verification of the conditions required for the Barr–Beck–Lurie theorem:

* Since $A$ is a descendable commutative algebra, the functor $-\otimes A$ is conservative. Indeed, if $M \otimes A \simeq 0$, we define $\mathcal{X}$ to be the full subcategory spanned by objects $\{N \mid M \otimes N \simeq 0\}$. It is easy to see that $\mathcal{X}$ is closed under finite (co)limits, retracts, and tensors. Since $A \in \mathcal{X}$, we have $\langle A \rangle \subset \mathcal{X}$, implying $\mathbb{1}_{\mathcal{C}} \in \mathcal{X}$, so $M \simeq 0$.

* Next, fix a cosimplicial object $M^{\bullet} \colon \Delta \to \mathcal{C}$ such that $M^{\bullet} \otimes A$ is a split simplicial object (i.e., $M^{\bullet}$ is $-\otimes A$-split). We need to show that $\operatorname{lim}_{\Delta}(M^{\bullet})$ exists and that the canonical map
    $$
    A \otimes \operatorname{lim}_{\Delta}(M^{\bullet}) \;\longrightarrow\; \operatorname{lim}_{\Delta}(A \otimes M^{\bullet})
    $$
    is an isomorphism.
    Let $\mathcal{C}' \subset \mathcal{C}$ be the full subcategory spanned by objects $N$ such that $N \otimes M^{\bullet}$ is a pro-constant object. This subcategory is closed under finite (co)limits, retracts, and tensors. Since $M^{\bullet} \otimes A$ is split, $A \in \mathcal{C}'$. It follows that $\mathbb{1}_{\mathcal{C}} \in \mathcal{C}'$, meaning $M^{\bullet}$ itself is a pro-constant object. Using the stable Dold–Kan correspondence to view this as a filtered chain, the result follows from the property of pro-constant diagrams mentioned in the Example above.
{{< /proof >}}

## Proof of Faithfully Flat Descent

We can now provide the proof for the **Faithfully Flat Descent** theorem stated in the previous section. For this, we require the following lemma.

{{< lemma >}}
Let $A$ be a connective associative ring, and let $M$ be a flat $A$-module. If $\pi_0(M)$ is an $\aleph_{n}$-compact object in $\mathsf{Mod}(\pi_0(A))$, then for any connective $A$-module $N$ and any $m > n$, we have

$$
\operatorname{Ext}^m_A(M,N) \simeq 0.
$$
{{< /lemma >}}

{{< proof >}}
See {{< cite LurieSAG "Lemma D.3.3.6" >}}
{{< /proof >}}

Now, we prove the main theorem.

{{< proof "Proof of Faithfully Flat Descent" >}}
Since $\phi \colon A \to B$ is a faithfully flat morphism, $B$ is flat over $A$. Moreover, $B$ can be identified with the image of $\tau_{\geq 0} B$ under the base change functor

$$
\mathsf{Mod}(\tau_{\geq 0} A) \longrightarrow \mathsf{Mod}(A).
$$

Thus, $B$ being descendable as an $A$-module is equivalent to $\tau_{\geq 0} B$ being descendable as a $\tau_{\geq 0} A$-module. Therefore, without loss of generality, we may assume $A$ is connective.

Consider the thick tensor ideal $\langle B \rangle$ in $\mathsf{Mod}(A)$. We need to show that $A \in \langle B \rangle$.

Let $K = \operatorname{fib}(\phi \colon A \to B)$. There is a canonical map $\rho \colon K \to A$. For any integer $m \geq 0$, let $\rho(m) \colon K^{\otimes m} \to A^{\otimes m} \simeq A$ be the $m$-th tensor power of $\rho$. One observes that the composition

$$
K^{\otimes m+1} \xrightarrow{\operatorname{id}_{K^{\otimes m}} \otimes \rho(1)} K^{\otimes m} \xrightarrow{\rho(m)} A
$$

is precisely $\rho(m+1)$.

This yields an exact sequence (fiber sequence)

$$
K^{\otimes m} \otimes_A B \longrightarrow \operatorname{cofib}(\rho(m+1)) \longrightarrow \operatorname{cofib}(\rho(m)).
$$

By induction on $m$, one sees that $\operatorname{cofib}(\rho(m)) \in \langle B \rangle$. (The base case involves tensoring with $B$, which kills the fiber of the map to $B$).

Therefore, the problem reduces to showing that there exists some $m$ such that $A$ is a retract of $\operatorname{cofib}(\rho(m))$. Considering the exact sequence

$$
K^{\otimes m} \longrightarrow A \longrightarrow \operatorname{cofib}(\rho(m)),
$$

it suffices to show that the map $\rho(m)$ is null-homotopic. If so, then $\operatorname{cofib}(\rho(m)) \simeq A \oplus (K^{\otimes m})[1]$.

We observe that

$$
\rho(m) \in \operatorname{Ext}^0_A(K^{\otimes m},A) \;\simeq\; \operatorname{Ext}_A^m((K[1])^{\otimes m},A).
$$

Note that $K[1]$ is simply $\operatorname{cofib}(\phi)$. It is a flat $A$-module, and by assumption, there exists $n \geq 0$ such that $\pi_0(\operatorname{cofib}(\phi))$ is generated by fewer than $\aleph_n$ generators and relations. Consequently, $(K[1])^{\otimes m}$ is also generated by fewer than $\aleph_n$ generators and relations. By the Lemma above, for large enough $m$, the Ext group vanishes.
{{< /proof >}}

Therefore, in the derived setting, we do not actually need the Grothendieck spectral sequence to obtain the results we need.

## References

<ul class="refs">
  <li id="ref-LurieHA">
    <strong>Lurie, Jacob</strong>. <em>Higher Algebra</em>. (2017).
    <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.
  </li>

  <li id="ref-LurieSAG">
    <strong>Lurie, Jacob</strong>. <em>Spectral Algebraic Geometry (Under Construction!)</em>. (2018).
    <a href="https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf">PDF</a>.
  </li>

  <li id="ref-MathewGalois">
    <strong>Mathew, Akhil</strong>. “The Galois group of a stable homotopy theory”. <em>arXiv:1404.2156</em>. (2016).
    <a href="https://arxiv.org/abs/1404.2156">arXiv</a>.
  </li>
</ul>
