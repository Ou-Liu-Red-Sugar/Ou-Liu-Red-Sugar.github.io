---
title: "A brief introduction to 6-functor formalisms"
date: 2026-04-24
math: true
draft: false
description: "A coherent pass through six-functor formalisms. From the structural properties one wants of cohomology, through the Liu–Zheng / Mann / Scholze span-category packaging and the Cnossen–Lenz–Linskens universal property, to Scholze's organising observation: Poincaré duality for a morphism is *precisely* a dualizability statement in the $2$-category of kernels. We close with Heyer–Mann's suave/prim weakening, Aoki's one-step étale/proper picture, and transmutation to Gestalten."
tags:
  - Six Functor Formalism
  - Higher Category Theory
  - Poincaré Duality
  - Gestalten
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
aliases:
  - /sixfunctor
  - /notes/notes/six-functor-formalisms-smoothness-and-suaveness/
---

> **Conventions.**
>
> - *Category* means $(\infty,1)$-category; $\mathsf{Cat}$ is the category
>   of all categories.
> - *$2$-category* means $(\infty,2)$-category; $\mathsf{Cat}_2$ is the
>   $2$-category of all categories.
> - $\mathsf{Pr}^L$ denotes presentable categories with left adjoints;
>   $\mathsf{Pr}^L_{\mathrm{st}}$ is the stable version.
> - $\mathsf{CAlg}(\mathcal M)$ denotes commutative algebra objects in a
>   symmetric monoidal category $\mathcal M$.
> - Given a *geometric setup* $(\mathcal C, E)$ — a category $\mathcal C$
>   with finite limits and a class of morphisms $E$ closed under base
>   change, composition and diagonals — we write
>   $\mathsf{Corr}(\mathcal C, E)$ for the span $(\infty, 2)$-category and
>   $\mathsf{Span}_2(\mathcal C, E)_{I, P}$ for the CLL upgrade with
>   biadjointability data.
> - $\underline{\mathrm{Hom}}$ is internal hom; $\mathbf 1_{X}$ is the
>   monoidal unit of $\mathsf D(X)$; $\mathbb 1$ is the terminal object of
>   a slice $\mathcal C_{/Y}$.

---

# Part I · Six-functor formalisms

## 1. From cohomology to six functors

A cohomology theory associates with every "space" $X$ a complex
$\Gamma(X; \Lambda) \in \mathsf D(\Lambda)$ of $\Lambda$-modules — singular
cohomology, étale cohomology, coherent cohomology, and many more. We then
expect $\Gamma(X; \Lambda)$ to satisfy structural identities like the
Künneth formula, Poincaré duality, proper base change, excision. Each is
classically proved by hand, with most of the work intertwined with
whatever specific sheaf-theoretic gadget produced $\Gamma(X; \Lambda)$.

The **six-functor formalism** flips the order: we fix a much richer object
— a category $\mathsf D(X)$ of "sheaves on $X$" with six interrelated
functors — and demand a small list of compatibilities. Cohomology becomes
a derived quantity, and the structural identities fall out as formal
consequences.

### The data

Fix an $(\infty,1)$-category $\mathcal C$ of geometric objects with finite
limits and terminal object $\ast$. A **six-functor formalism** $\mathsf D$
on $\mathcal C$ assigns:

- to each $X \in \mathcal C$, a closed symmetric monoidal category
  $\mathsf D(X)$ — *sheaves on $X$* — with $\otimes$,
  $\underline{\mathrm{Hom}}$, and unit $\mathbf 1_{X}$;
- to each map $f\colon Y \to X$ in $\mathcal C$, an adjunction
  $f^{\ast} \dashv f_{\ast}$;
- to each map $f\colon Y \to X$ in a distinguished class $E$ (the
  *exceptional* morphisms — typically maps admitting a compactification),
  an adjunction $f_{!} \dashv f^{!}$.

For $\mathsf D \coloneqq \mathsf D(\ast)$ — usually $\mathsf D(\Lambda)$ —
and $X$ with structure map $p\colon X \to \ast$, four (co)homology
theories are immediate:

- **Cohomology** $\Gamma(X; \mathbf 1) \coloneqq p_{\ast} \mathbf 1_{X}$;
- **Compactly-supported cohomology** $\Gamma_{c}(X; \mathbf 1) \coloneqq p_{!} \mathbf 1_{X}$;
- **Borel–Moore homology** $\Gamma^{\mathrm{BM}}(X; \mathbf 1) \coloneqq p_{\ast} p^{!} \mathbf 1$;
- **Homology** $\Gamma^{\vee}(X; \mathbf 1) \coloneqq p_{!} p^{!} \mathbf 1$.

### The compatibilities

For the formalism to do work, the functors are coupled by three axioms:

1. **Pullback is monoidal.** $f^{\ast}$ is symmetric monoidal — in
   particular $f^{\ast}$ commutes with $\otimes$.
2. **Proper base change.** For a cartesian square with $f \in E$, the
   natural map $g^{\ast} f_{!} \xrightarrow{\sim} f'_{!} g'^{\ast}$ is an
   equivalence.
3. **Projection formula.** For $f \in E$,
   $M \otimes f_{!} N \xrightarrow{\sim} f_{!}(f^{\ast} M \otimes N)$ is
   an equivalence.

With just these, the classical theorems are one-line consequences.

{{< proposition title="Künneth formula" id="prop-kunneth" >}}
For $X, Y \in \mathcal C$ with exceptional structure maps,

$$
    \Gamma_{c}(X \times Y;\, \mathbf 1) \;\simeq\; \Gamma_{c}(X;\, \mathbf 1) \;\otimes\; \Gamma_{c}(Y;\, \mathbf 1).
$$
{{< /proposition >}}

{{< proof >}}
Apply base change and projection to $X \xleftarrow{p_{X}} X \times Y \xrightarrow{p_{Y}} Y$ over $\ast$:

$$
\begin{aligned}
\Gamma_{c}(X \times Y;\, \mathbf 1)
    &\;\simeq\; (p_{Y})_{!}\bigl( (p_{Y})^{\ast} (p_{X})_{!} \mathbf 1 \bigr) \quad \text{(base change)} \\
    &\;\simeq\; (p_{X})_{!}\, \mathbf 1 \;\otimes\; (p_{Y})_{!}\, \mathbf 1 \quad \text{(projection)}.
\end{aligned}
$$
{{< /proof >}}

{{< proposition title="Poincaré duality" id="prop-poincare-classical" >}}
For $X \in \mathcal C$ "smooth" (precise notion in §6) with
$\omega_{X} \coloneqq p^{!} \mathbf 1$,

$$
    \Gamma(X;\, \omega_{X}) \;\simeq\; \underline{\mathrm{Hom}}\bigl( \Gamma_{c}(X;\, \mathbf 1),\, \mathbf 1 \bigr).
$$
{{< /proposition >}}

{{< proof >}}
For any $M \in \mathsf D$, two adjunctions plus projection give

$$
    \mathrm{Hom}(M, p_{\ast} p^{!} \mathbf 1)
    \simeq \mathrm{Hom}(p_{!} p^{\ast} M, \mathbf 1)
    \simeq \mathrm{Hom}(M \otimes \Gamma_{c}(X; \mathbf 1), \mathbf 1).
$$

Yoneda. For an oriented $n$-manifold $\omega_{X} \simeq \mathbf 1[n]$, and
this becomes the classical
$H^{i}(X; \Lambda) \simeq H_{c}^{n-i}(X; \Lambda)^{\vee}$.
{{< /proof >}}

Two short proofs, no bespoke analysis. The work has been shifted out of
the cohomology theory and into the axioms — and that is what we now want
to package efficiently.

## 2. The span picture

Three compatibilities is a small list, but each drags an
$\infty$-dimensional web of higher coherences (associativity of $\otimes$,
naturality of base change in two variables, projection formula compatible
with the symmetric monoidal structure, …). Writing this down by hand is
hopeless. The trick — initiated by Liu–Zheng {{< cite "liu-zheng" >}} and
brought to its modern form by Mann {{< cite "mann-rigid" >}} and Scholze
{{< cite "scholze-six" >}} — packages everything as a *single* lax
symmetric monoidal functor out of a span category.

Fix a geometric setup $(\mathcal C, E)$. The **span category**
$\mathsf{Corr}(\mathcal C, E)$ has:

- objects: those of $\mathcal C$;
- morphisms $X \to Y$: spans
  $X \xleftarrow{} W \xrightarrow{g} Y$ with $g \in E$;
- composition: pullback of spans.

When $\mathcal C$ has finite products, $\mathsf{Corr}(\mathcal C, E)$ is
symmetric monoidal under $\times$.

{{< definition title="Three- and six-functor formalisms" id="def-sixfunctor" >}}
A **three-functor formalism** on $(\mathcal C, E)$ is a lax symmetric
monoidal functor

$$
    \mathsf D\colon \mathsf{Corr}(\mathcal C, E) \longrightarrow \mathsf{Cat}.
$$

It is a **six-functor formalism** if $-\otimes A$, $f^{\ast}$ and $f_{!}$
admit right adjoints (i.e.\ $\underline{\mathrm{Hom}}$, $f_{\ast}$,
$f^{!}$ exist). The right adjoints are a *property*, not extra data:
adjoints come with all coherences automatically.
({{< cite "scholze-six" "Lecture II" >}};
{{< cite "heyer-mann" >}}.)
{{< /definition >}}

What a 3-functor formalism encodes:

- **Pullback.** $g\colon Y \to X$ gives the span $X \xleftarrow{g} Y \xrightarrow{\mathrm{id}} Y$ → $g^{\ast}$.
- **Exceptional pushforward.** $f\colon Y \to X$ in $E$ gives $Y \xleftarrow{\mathrm{id}} Y \xrightarrow{f} X$ → $f_{!}$.
- **Tensor product.** Lax symmetric monoidality gives
  $\mathsf D(X) \times \mathsf D(X) \to \mathsf D(X \times X)$;
  precomposing with $\Delta_{X}^{\ast}$ gives $\otimes$.
- **General span.** $X \xleftarrow{g} Z \xrightarrow{f} Y$ goes to
  $f_{!} g^{\ast}$.

Most of the magic: the two non-trivial compatibilities of §1 are
consequences of the *single* statement "$\mathsf D$ is a lax symmetric
monoidal functor":

- **proper base change** = functoriality on composable spans;
- **the projection formula** = the lax-monoidal coherence on $X \times X$.

So three axioms plus one adjoint-existence property = six functors with
all their coherences.

## 3. Construction via CLL universality

Producing a lax symmetric monoidal functor out of
$\mathsf{Corr}(\mathcal C, E)$ from scratch is just as hopeless as
spelling out the hexagonal compatibility web by hand. The standard idea:
split exceptional morphisms into two simpler classes and build the
formalism on each.

A **suitable decomposition** of $E$ is a pair $I, P \subseteq E$ ("open
immersions" and "proper morphisms") such that every $f \in E$ factors as
$f = p \circ i$ with $i \in I$, $p \in P$, subject to mild
cancellation/truncation axioms. Geometrically: $i_{!}$ is *left* adjoint
to $i^{\ast}$ (extension by zero); $p_{!}$ is *right* adjoint to
$p^{\ast}$ (direct image of a proper map); $f_{!} = p_{!} i_{!}$. The
input data we want to carry is captured by two base-change conditions.

{{< definition title="Left and right base change" id="def-base-change" >}}
Let $\mathsf D_{0}\colon \mathcal C^{\mathrm{op}} \to \mathsf{CAlg}(\mathsf{Cat})$
encode pullbacks and tensor.

- $g\colon C \to D$ satisfies **left base change** if, for every cartesian
  square
  {{< tikzcd >}}
  A \ar[r, "k"] \ar[d, "h"'] \ar[dr, phantom, very near start, "\lrcorner"] & B \ar[d, "f"] \\
  C \ar[r, "g"'] & D
  {{< /tikzcd >}}
  $k^{\ast}$ has a left adjoint $k_{\sharp}$ and the canonical
  $k_{\sharp} h^{\ast} \xrightarrow{\sim} f^{\ast} g_{\sharp}$ is an
  equivalence.
- $f$ satisfies **right base change** if dually $h^{\ast}$ has a right
  adjoint $h_{\ast}$ and $g^{\ast} f_{\ast} \xrightarrow{\sim} h_{\ast} k^{\ast}$
  is an equivalence.

Either condition packages the corresponding adjoint plus its compatibility
with base change as a single property.
{{< /definition >}}

The cleanest path now goes via the universal property of Cnossen–Lenz–Linskens
{{< cite "cll-universal" >}}: enhance $\mathsf{Corr}(\mathcal C, E)$ to a
$2$-category whose $2$-morphisms encode the adjunction data of
$i_{\sharp}$ and $p_{\ast}$ coherently, and produce a universal
$(I, P)$-biadjointable functor.

{{< construction title="The CLL 2-categorical span category" >}}
$\mathsf{Span}_2(\mathcal C, E)_{I, P}$ has:

- **Objects.** Objects of $\mathcal C$.
- **$1$-morphisms** $X \to Z$: spans
  {{< tikzcd >}}
  & W \ar[dl, "f"'] \ar[dr, "g"] & \\
  X & & Z
  {{< /tikzcd >}}
  with $g \in E$.
- **$2$-morphisms** between two such spans: diagrams
  {{< tikzcd >}}
  & W \ar[dl] \ar[dr] & \\
  X & W'' \ar[u, "a"] \ar[d, "b"'] & Z \\
  & W' \ar[ul] \ar[ur] &
  {{< /tikzcd >}}
  with $a \in P$ and $b \in I$.
{{< /construction >}}

{{< theorem title="CLL universality" id="thm-cll-universal" >}}
Assume $I, P \subseteq E$ are wide and closed under base change, every
$e \in E$ factors as $p \circ i$ with $p \in P$ and $i \in I$, and maps
in $I \cap P$ are truncated. Then

$$
    \mathcal C^{\mathrm{op}} \hookrightarrow \mathsf{Span}_2(\mathcal C, E)_{I, P}
$$

is the *universal $(I, P)$-biadjointable functor* — i.e.\ the initial
functor under which morphisms in $I$ satisfy left base change and
morphisms in $P$ satisfy right base change.
({{< cite "cll-universal" "Thm. 5.17" >}}.)
{{< /theorem >}}

So a six-functor formalism on $(\mathcal C, E)$ is, by definition, a lax
symmetric monoidal functor out of $\mathsf{Span}_{2}(\mathcal C, E)_{I, P}$;
constructing one reduces to verifying left base change for $I$, right
base change for $P$, and the mixed Beck–Chevalley equivalence on cartesian
squares with one $I$-edge and one $P$-edge. Everything else is formal.

{{< corollary title="Mann's extension theorem" id="cor-mann" >}}
Suppose $\mathsf D_{0}\colon \mathcal C^{\mathrm{op}} \to \mathsf{CAlg}(\mathsf{Cat})$
satisfies left base change for every $i \in I$, right base change for
every $p \in P$, and the **mixed Beck–Chevalley** condition: for every
cartesian square with $i \in I$, $p \in P$, the natural map
$i_{\sharp} p'_{\ast} \xrightarrow{\sim} p_{\ast} i'_{\sharp}$ is an
equivalence. Then $\mathsf D_{0}$ extends uniquely to a 3-functor
formalism with $f_{!} = p_{\ast} i_{\sharp}$.
({{< cite "mann-rigid" "Prop. A.5.10" >}};
{{< cite "liu-zheng" >}}.)
{{< /corollary >}}

Heyer–Mann observed that mixed Beck–Chevalley is often automatic:

{{< proposition title="Auto-Beck–Chevalley for monomorphic open immersions" id="prop-mann-auto" >}}
If all $i \in I$ are monomorphisms, the mixed Beck–Chevalley condition
holds automatically. ({{< cite "heyer-mann" >}}.)
{{< /proposition >}}

The slogan: in any setup where "open immersion" really means open
immersion (not some derived enlargement of one), the construction reduces
to two independent base-change conditions, no mixing required.

---

# Part II · From localization to $\mathsf{SH}$

We now make the CLL/Mann input concrete in the motivic setting: localization
plus base change, two further geometric properties (excision +
$\mathbb A^{1}$-invariance), produces $\mathsf{SH}$ — the *initial*
six-functor formalism with these properties.

## 4. Localization, base change, and cdh descent

The CLL construction asks for left base change on $I$, right base change
on $P$, and mixed Beck–Chevalley. To make these concrete in the motivic
setting we need one more axiom — *localization* (recollement) — which
together with base change forces cdh descent.

{{< definition title="Recollement and localization" >}}
A diagram

$$
    \mathcal C_U \xleftarrow{\;j^{\ast}\;} \mathcal C_X \xrightarrow{\;i^{\ast}\;} \mathcal C_Z
$$

in $\mathsf{Pr}^L_{\mathrm{st}}$ is a **recollement** if $j^{\ast}$ has a
left adjoint $j_{!}$ with $j_{!} j^{\ast} \to \mathrm{id}$ an equivalence,
$i^{\ast}$ has a right adjoint $i_{\ast}$ with
$\mathrm{id} \to i_{\ast} i^{\ast}$ an equivalence, $j^{\ast} i_{\ast} \simeq 0$,
and the square
{{< tikzcd >}}
j_{!} j^{\ast} \ar[r] \ar[d] & \mathrm{id} \ar[d] \\
0 \ar[r] & i_{\ast} i^{\ast}
{{< /tikzcd >}}
is a pushout in $\mathrm{End}(\mathcal C_X)$.

$\mathsf D\colon (\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \to \mathsf{Pr}^L_{\mathrm{st}}$
satisfies the **localization axiom** if every closed immersion
$i\colon Z \hookrightarrow X$ with open complement $j\colon U \hookrightarrow X$
gives a recollement of $\mathsf D(U), \mathsf D(X), \mathsf D(Z)$.
{{< /definition >}}

Localization plus base change feeds directly into descent.

{{< proposition title="Localization implies cdh descent" id="prop-localization-cdh" >}}
Let $\mathsf D$ satisfy the localization axiom.

1. If every étale morphism satisfies left base change, then $\mathsf D$
   satisfies **Nisnevich descent**.
2. If every finitely presented proper morphism satisfies right base change,
   then $\mathsf D$ satisfies **abstract blowup descent**.

Under both, $\mathsf D$ is a cdh sheaf.
{{< /proposition >}}

{{< proof >}}
We do abstract blowup; Nisnevich is dual. For
{{< tikzcd >}}
E \ar[r, "k"] \ar[d, "q"'] \ar[dr, phantom, very near start, "\lrcorner"] & \tilde X \ar[d, "p"] \\
Z \ar[r, hook, "i"'] & X
{{< /tikzcd >}}
write $j\colon U = X \setminus Z \hookrightarrow X$ and
$h\colon U \hookrightarrow \tilde X$. We must show

$$
    (p^{\ast}, i^{\ast})\colon \mathsf D(X) \to \mathsf D(\tilde X) \times_{\mathsf D(E)} \mathsf D(Z)
$$

is an equivalence. Right adjoint:
$G(A, B) = p_{\ast} A \times_{(iq)_{\ast} C} i_{\ast} B$.

*Conservativity.* Localization says $(i^{\ast}, j^{\ast})$ is jointly
conservative; $j^{\ast} \simeq h^{\ast} p^{\ast}$ since $p$ is iso over
$U$, so $(p^{\ast}, i^{\ast})$ is too.

*$i^{\ast}$-component.* Right base change for $p$ along $i$ gives
$i^{\ast} p_{\ast} A \simeq q_{\ast} C$, and full faithfulness of
$i_{\ast}$ collapses the pullback to $B$.

*$p^{\ast}$-component.* Apply $k^{\ast}$ and $h^{\ast}$ separately: $k^{\ast}$
is the previous case, $h^{\ast}$ kills the $Z$-supported terms and is left
with $j^{\ast} p_{\ast} A$, which by right base change for $i$ along $p$ and
the localization triangle equals $h^{\ast} A$.
{{< /proof >}}

## 5. SH and Drew–Gallauer initiality

{{< theorem title="Six-functor formalism on SH" id="thm-sh-six" >}}
$\mathsf{SH}\colon (\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \to \mathsf{Pr}^L_{\mathrm{st}}$
satisfies the localization axiom ({{< cite "morel-voevodsky" >}}). The
data of $\mathsf{SH}$ together with smooth $i_{\sharp}$ and proper
$p_{\ast}$ extends essentially uniquely to a lax symmetric monoidal

$$
    \mathsf{SH}\colon \mathsf{Span}_{2}(\mathsf{Sch}^{\mathrm{qcqs}}, E)_{I, P}^{\otimes} \longrightarrow \mathsf{CAlg}(\mathsf{Pr}^L_{\mathrm{st}})
$$

with $E$ = locally finitely presented, $I$ = open immersions, $P$ = proper
morphisms, and $f_{!} = p_{\ast} i_{\sharp}$ for $f = p \circ i$.
({{< cite "ayoub" >}}; {{< cite "cisinski-deglise" >}};
{{< cite "cll-universal" >}}.)
{{< /theorem >}}

The proof has a formal half (invoke {{< thmref "thm-cll-universal" >}})
and a geometric half (smooth/étale base change for $i_{\sharp}$,
localization, proper base change for $p_{\ast}$ — Ayoub for projective,
Cisinski–Déglise for arbitrary proper via Chow's lemma). The mixed
Beck–Chevalley is *not* additional input: it follows from proper base
change across a square with one étale edge.

Combining {{< thmref "prop-localization-cdh" >}} with proper base change:
$\mathsf{SH}$ is a cdh sheaf.

In what sense is $\mathsf{SH}$ universal?

{{< theorem title="Drew–Gallauer initiality" id="thm-dg" >}}
Over a noetherian base $k$ of finite Krull dimension, with $\mathcal C$ =
separated finite-type $k$-schemes, $I$ open immersions, $P$ proper
morphisms: the *initial* presentable six-functor formalism

$$
    \mathsf D\colon \mathsf{Corr}(\mathcal C) \to \mathsf{Pr}^{L}_{\mathrm{st}}
$$

with open immersions cohomologically étale, proper maps cohomologically
proper, every smooth morphism cohomologically smooth, satisfying excision
($j_{!} \mathbf 1 \to \mathbf 1 \to i_{\ast} \mathbf 1$ a fibre sequence
for $i \hookrightarrow X$ closed) and $\mathbb A^{1}$-invariance
($\pi^{\ast}\colon \mathsf D(X) \to \mathsf D(\mathbb A^{1}_{X})$ fully
faithful) is $\mathsf{SH}$.
({{< cite "drew-gallauer" >}}; cf.\ {{< cite "scholze-six" "Lecture XI" >}}.)
{{< /theorem >}}

The proof is *constructive* and recovers Morel–Voevodsky: smooth
$f_{\sharp}$ forces $\mathsf{PShv}(\mathsf{Sm}_{X}; \mathsf{Sp})$;
excision forces Nisnevich localization; $\mathbb A^{1}$-invariance forces
$\mathbb A^{1}$-localization; $\otimes$-inverting the Tate object yields
$\mathsf{SH}$.

---

# Part III · Cohomological smoothness and the 2-category of kernels

We now zoom into a fixed six-functor formalism $\mathsf D$ and ask which
morphisms satisfy **Poincaré duality**. This is the question that motivates
the $2$-category of kernels.

## 6. Cohomological smoothness

Classical Poincaré duality says: for a proper manifold bundle
$f\colon X \to Y$ of relative dimension $d$, $f_{!}$ has a right adjoint
$f^{!}$ of the form $f^{!} \simeq f^{\ast}(-) \otimes \omega_{f}$, where
$\omega_{f} = f^{!}(\mathbf 1_{Y})$ is the **dualizing complex** of $f$,
locally isomorphic to $\mathbf 1[d]$.

For an abstract $\mathsf D$, this motivates *axiomatising* the class of
morphisms with this behaviour:

{{< definition title="Cohomologically smooth morphism" id="def-cohomsmooth" >}}
A morphism $f\colon X \to Y$ in $E$ is **$\mathsf D$-cohomologically
smooth** (or $\mathsf D$-smooth) if:

1. $f^{!}$ exists, and $f^{!}(\mathbf 1_{Y}) \otimes f^{\ast}(-) \to f^{!}(-)$
   is an equivalence of functors $\mathsf D(Y) \to \mathsf D(X)$.
2. $\omega_{f} \coloneqq f^{!}(\mathbf 1_{Y})$ is $\otimes$-invertible.
3. (1) and (2) hold for every base change $f'$ of $f$, and the natural
   map $g'^{\ast}\omega_{f} \to \omega_{f'}$ is an equivalence.

({{< cite "scholze-six" "Lecture V" >}}.)
{{< /definition >}}

Checking (1)–(3) looks impossibly hard: each piece involves base changes,
and $f^{!}$ is abstractly an adjoint. The point of the next two sections
is *Scholze's organising observation*: all three conditions together
follow for free from a single, minimal piece of $2$-categorical data on
$X \times_Y X$ — once we have built the right $2$-category.

## 7. Integral transforms and the 2-category of kernels

The classical integral transform
$T_{K}(F)(x) = \int_{Y} K(x, y)\, F(y)\, dy$ encodes a function
$L^{2}(Y) \to L^{2}(X)$ as a function on $X \times Y$. Its categorification
— the **Fourier–Mukai transform** — replaces integration by $\pi_{!}$ and
tensor: for $K \in \mathsf D(X \times_{Y} X')$,

$$
    \Phi_{K}\colon \mathsf D(X) \to \mathsf D(X'),
    \qquad
    A \mapsto (\pi_{X'})_{!}\bigl(\pi_{X}^{\ast} A \otimes K\bigr).
$$

Two familiar functors are themselves Fourier–Mukai transforms with simple
kernels. Take $K = \mathbf 1_{X}$ regarded as an element of
$\mathsf D(X \times_{Y} Y) = \mathsf D(X)$ (the "$X \to Y$" slot): then
$\Phi_{K} = f_{!}$. Take instead $K = \mathbf 1_{X}$ in
$\mathsf D(Y \times_{Y} X) = \mathsf D(X)$ (the "$Y \to X$" slot): then
$\Phi_{K} = f^{\ast}$.

So "$f_{!}$ is left adjoint to $f^{\ast}$" translates to
"$\mathbf 1_{X}$ (in the $X \to Y$ slot) is left adjoint to
$\mathbf 1_{X}$ (in the $Y \to X$ slot) in a suitable $2$-category whose
$1$-morphisms are kernels". Making this precise:

{{< definition title="The 2-category of kernels" id="def-kerncat" >}}
For $\mathsf D\colon \mathsf{Corr}(\mathcal C, E) \to \mathsf{Cat}$ and
$Y \in \mathcal C$, the **$2$-category of kernels**
$\mathbb K_{\mathsf D, Y}$ has:

- **Objects.** Objects of $(\mathcal C_{E})_{/Y}$ — i.e.\ maps $X \to Y$
  in $E$.
- **Morphism categories.** $\mathsf{Hom}_{Y}(X_{1}, X_{2}) \coloneqq \mathsf D(X_{1} \times_{Y} X_{2})$.
- **Composition.** $M \circ N \coloneqq \pi_{13!}(\pi_{12}^{\ast} M \otimes \pi_{23}^{\ast} N)$.
- **Identity.** $\mathrm{id}_{X} = (\Delta_{X/Y})_{!}\mathbf 1_{X}$.

({{< cite "lu-zheng" >}}; {{< cite "fargues-scholze" "§2.3" >}};
{{< cite "scholze-six" "Lecture V" >}}; {{< cite "heyer-mann" >}}.)
{{< /definition >}}

Three structural features fall out of the definition.

**Realisation.** There is a "realisation" $2$-functor
$\Psi_{\mathsf D, Y} \coloneqq \mathsf{Hom}_{Y}(Y, -)\colon \mathbb K_{\mathsf D, Y} \to \mathsf{Cat}_{2}$
sending $X \mapsto \mathsf D(X)$ and a kernel $M$ to its Fourier–Mukai
functor. Working in $\mathbb K_{\mathsf D, Y}$ amounts to working with
*kernels of functors directly*, instead of the induced functors.

**Factorization** ({{< cite "heyer-mann" >}}). $\mathsf D$ factors:

$$
    \mathsf{Corr}((\mathcal C_{E})_{/Y}) \xrightarrow{\;\Phi_{\mathsf D, Y}\;} \mathbb K_{\mathsf D, Y} \xrightarrow{\;\Psi_{\mathsf D, Y}\;} \mathsf{Cat},
$$

with $\Psi \circ \Phi = \mathsf D$. The first $2$-functor is identity on
objects and sends a span $X \xleftarrow{g} Z \xrightarrow{f} Y$ to
$(f, g)_{!} \mathbf 1_{Z}$.

**Functoriality.** As $Y$ varies, $\mathbb K_{\mathsf D, (-)}$ is itself a
3-functor formalism, one categorical level higher:

{{< theorem title="Functoriality of the kernel 2-category" id="thm-K-functorial" >}}
$\mathbb K_{\mathsf D, (-)}\colon \mathsf{Corr}(\mathcal C, E) \to \mathsf{Cat}_{2}$
is a lax symmetric monoidal $2$-functor.
({{< cite "heyer-mann" >}}.)
{{< /theorem >}}

That is: just as $\mathsf D$ is a categorified cohomology theory valued
in $\mathsf{Cat}$, $\mathbb K_{\mathsf D}$ is a $2$-categorified one valued
in $\mathsf{Cat}_{2}$. This both promotes the classical "base change of
suave/prim" lemmas to formal $2$-functoriality, and is the gateway to
iteration in §10.

## 8. Cohomological smoothness as dualizability in $\mathbb K_{\mathsf D}$

Now the punchline. After sliding $\mathcal C$ down to $\mathcal C_{/Y}$,
assume $Y$ is final. Consider $\mathbf 1_{X}$ as a $1$-morphism $X \to Y$
in $\mathbb K_{\mathsf D}$; its realisation under $\Psi$ is $f_{!}$.

{{< theorem title="Poincaré duality as dualizability" id="thm-d-smooth-kernel" >}}
$f$ is $\mathsf D$-cohomologically smooth iff:

1. $\mathbf 1_{X} \in \mathsf{Hom}_{\mathbb K_{\mathsf D}}(X, Y) = \mathsf D(X)$
   is a left adjoint in $\mathbb K_{\mathsf D}$ — i.e.\ admits a right
   adjoint $\omega_{f} \in \mathsf D(X)$;
2. $\omega_{f}$ is $\otimes$-invertible in $\mathsf D(X)$.

In this case $\omega_{f} \simeq f^{!}(\mathbf 1_{Y})$.
({{< cite "scholze-six" "Lecture V" >}}.)
{{< /theorem >}}

Two consequences:

- Dropping invertibility in (2) gives a strictly weaker, far more robust
  notion — *suaveness*, the subject of §9.
- Base-change compatibility of $\omega_{f}$ (axiom (3) of
  {{< thmref "def-cohomsmooth" >}}) is *automatic*, because
  $\mathbb K_{\mathsf D, Y}$ is functorial in $Y$
  ({{< thmref "thm-K-functorial" >}}) and adjunctions are preserved by
  $2$-functors.

Even better, the $2$-categorical adjointness of (1) can be verified from
a *surprisingly small* amount of data on $X$, $Y$, $X \times_{Y} X$:

{{< theorem title="Small-data criterion" id="thm-critcohomsmooth" >}}
$f\colon X \to Y$ (with $Y$ final) is cohomologically smooth iff there
exist:

- a $\otimes$-invertible $L \in \mathsf D(X)$,
- $\alpha\colon \Delta_{!}\mathbf 1_{X} \to \pi_{2}^{\ast} L$ in
  $\mathsf D(X \times_{Y} X)$,
- $\beta\colon f_{!} L \to \mathbf 1_{Y}$ in $\mathsf D(Y)$,

such that the two composites

$$
    \mathbf 1_{X} \cong \pi_{1!}\Delta_{!}\mathbf 1_{X} \xrightarrow{\pi_{1!}\alpha} f^{\ast} f_{!} L \xrightarrow{f^{\ast}\beta} \mathbf 1_{X},
$$

$$
    L \cong \pi_{2!}(\pi_{1}^{\ast} L \otimes \Delta_{!}\mathbf 1_{X}) \xrightarrow{\alpha} f^{\ast} f_{!} L \otimes L \xrightarrow{f^{\ast}\beta \otimes L} L
$$

are the identity. Then $\omega_{f} \simeq L$.
({{< cite "scholze-six" "Lecture V" >}}.)
{{< /theorem >}}

The proof in $(\Leftarrow)$ is the heart of the picture: $(\alpha, \beta)$
translate *literally* into unit/counit $2$-morphisms making
$\mathbf 1_{X}$ (in the $X \to Y$ direction) and $L$ (in the $Y \to X$
direction) an adjoint pair in $\mathbb K_{\mathsf D}$. Applying $\Psi$
gives the adjunction $f_{!} \dashv (f^{\ast}(-) \otimes L)$ in
$\mathsf{Cat}$, hence $f^{!} \simeq f^{\ast}(-) \otimes L$ and
$L \simeq f^{!}(\mathbf 1_{Y})$.

{{< example title="ℝ → ∗ in topology" >}}
For $f\colon \mathbb R \to \ast$ in $\mathsf D = \mathsf D(\mathsf{Ab})$,
take $L = \mathbb Z[1]$. Here $\alpha$ is a generator of
$R\Gamma_{c}(\mathbb R, \mathbb Z[1]) \simeq \mathbb Z$ and $\beta$ is
built from the triangle
$0 \to \Delta_{!}\mathbb Z \to \mathbb Z \to j_{!}\mathbb Z \to 0$ on
$\mathbb R^{2}$. Compatibility of signs is automatic. Base-changing,
every manifold bundle is $\mathsf D$-smooth.
{{< /example >}}

---

# Part IV · Suave, prim, and transmutation to Gestalten

## 9. Suave, prim, étale, proper

Dropping invertibility from {{< thmref "thm-d-smooth-kernel" >}} produces
a strictly larger, far more robust class of morphisms. This was the
observation of Heyer–Mann.

{{< definition title="Suave and prim" id="def-suave-prim" >}}
Let $f\colon X \to Y$ in $E$. Note
$\mathsf{Hom}_{\mathbb K_{\mathsf D, Y}}(X, Y) = \mathsf D(X)$, so the
unit $\mathbf 1_{X}$ is a $1$-morphism $X \to Y$.

- $f$ is **$\mathsf D$-suave** if $\mathbf 1_{X}$ is a *left adjoint* in
  $\mathbb K_{\mathsf D, Y}$. The right adjoint
  $\omega_{f} \in \mathsf D(X)$ is the **dualizing complex**.
- $f$ is **$\mathsf D$-prim** if $\mathbf 1_{X}$ is a *right adjoint* in
  $\mathbb K_{\mathsf D, Y}$. The left adjoint
  $\delta_{f} \in \mathsf D(X)$ is the **codualizing complex**.

The names: *suave* (Scholze, "close to smooth"); *prim* (Hansen, "close
to but not proper"). $\mathsf D$-cohomological smoothness =
$\mathsf D$-suave + $\omega_{f}$ invertible.
({{< cite "scholze-six" "Lecture VI" >}}; {{< cite "heyer-mann" >}}.)
{{< /definition >}}

Realising through $\Psi$, $f$-suaveness gives the **twist formula**

$$
    f^{!} \simeq \omega_{f} \otimes f^{\ast},
    \qquad
    f^{\ast} \simeq \underline{\mathrm{Hom}}(\omega_{f}, f^{!}),
$$

so suaveness is the *structural* half of cohomological smoothness — the
identity $f^{!} = \omega_{f} \otimes f^{\ast}$ — *without* requiring
$\omega_{f}$ invertible. Dually for prim and $\delta_{f}$.

### Concrete criterion

{{< proposition title="Pointwise criterion for suaveness" id="prop-suave-criterion" >}}
$f\colon X \to Y$ is $\mathsf D$-suave iff

$$
    \pi_{1}^{\ast} \underline{\mathrm{Hom}}(\mathbf 1_{X}, f^{!} \mathbf 1_{Y}) \otimes \pi_{2}^{\ast} \mathbf 1_{X}
    \;\xrightarrow{\;\sim\;}\;
    \underline{\mathrm{Hom}}(\pi_{1}^{\ast} \mathbf 1_{X}, \pi_{2}^{!} \mathbf 1_{X})
$$

is an isomorphism in $\mathsf D(X \times_{Y} X)$. Then
$\omega_{f} = f^{!}\mathbf 1_{Y}$.
({{< cite "heyer-mann" >}}; {{< cite "scholze-six" "Lecture VI" >}}.)
{{< /proposition >}}

### Stability and geometric meaning

All from formal $2$-categorical adjointness (using
{{< thmref "thm-K-functorial" >}}):

- *Locality on the target:* both notions descend along $\mathsf D^{\ast}$-covers.
- *Stability:* suave morphisms compose, base-change, and are stable under
  suave pullback.
- *Self-duality:* $\omega_{f}$ for $f$ suave is itself dualizable, and
  $\omega_{f}^{\vee} \simeq \omega_{f}$ by uniqueness of adjoints.

({{< cite "heyer-mann" >}}.) Geometric content:

- *Étale sheaves on schemes:* $f$-suave = ULA — the original motivation
  of the kernel category in {{< cite "fargues-scholze" >}}.
- *Topology:* topological manifolds are $\mathsf D$-suave with
  $\omega_{f} \simeq \mathbf 1[\dim f]$.
- *Representation theory of locally profinite groups:* on classifying
  stacks, $f$-suave = admissible representations,
  $f$-prim = compact representations ({{< cite "heyer-mann" >}}, the main
  application of HM's paper).

### Étale and proper, via the diagonal

When the dualizing/codualizing complex is *trivial* — $\omega_{f} \simeq \mathbf 1$
or $\delta_{f} \simeq \mathbf 1$ — we recover the étale/proper hierarchy.
The natural definition is recursive on the diagonal.

For $f$ truncated, using the diagonal factorisation, one builds a natural
map $f^{!} \to f^{\ast}$ provided $\Delta_{f}^{!} \simeq \Delta_{f}^{\ast}$:

$$
    f^{!} \simeq \Delta_{f}^{\ast} \pi_{2}^{\ast} f^{!} \xrightarrow{\sim} \Delta_{f}^{!} \pi_{2}^{\ast} f^{!} \to \Delta_{f}^{!} \pi_{1}^{!} f^{\ast} \simeq f^{\ast}.
$$

The recursion *terminates* because the diagonal of an $n$-truncated map
is $(n-1)$-truncated.

{{< definition title="Cohomologically étale and proper, inductively" id="def-d-etale-inductive" >}}
Let $f\colon X \to Y$ be $n$-truncated in $E$.

- $f$ is **cohomologically étale** if $f$ is $\mathsf D$-suave and
  $\Delta_{f}$ is either an isomorphism or cohomologically étale.
- $f$ is **cohomologically proper** if $f$ is $\mathsf D$-prim and
  $\Delta_{f}$ is either an isomorphism or cohomologically proper.

({{< cite "scholze-six" "Lecture VI" >}};
{{< cite "heyer-mann" >}}.)
{{< /definition >}}

The étale-proper dichotomy materialises:

{{< proposition title="Étale ⇔ f^! = f^*; proper ⇔ f_! = f_*" id="prop-etale-proper-equiv" >}}
For $f$ truncated:

1. If $\Delta_{f}$ is cohomologically étale, the following are equivalent:
   $f$ is cohomologically étale; $f^{!}\mathbf 1_{Y} \simeq f^{\ast}\mathbf 1_{Y}$;
   $f^{!} \xrightarrow{\sim} f^{\ast}$.
2. If $\Delta_{f}$ is cohomologically proper, the following are
   equivalent: $f$ is cohomologically proper;
   $f_{!}\mathbf 1_{X} \simeq f_{\ast}\mathbf 1_{X}$;
   $f_{!} \xrightarrow{\sim} f_{\ast}$.

({{< cite "scholze-six" "Lecture VI" >}}; {{< cite "heyer-mann" >}}.)
{{< /proposition >}}

### Aoki's one-step reformulation

The inductive definition is clean but unfolds truncations. Aoki observed
that the same content packages in *one step* once one passes through
*monomorphisms*.

{{< definition title="Open and closed immersions" id="def-immersion" >}}
A morphism $f\colon X \to Y$ of stacks is an **open immersion** if it is
a $\mathsf D$-suave monomorphism, a **closed immersion** if it is a
$\mathsf D$-prim monomorphism. ({{< cite "aoki-motives" >}}.)
{{< /definition >}}

Equivalently ({{< cite "aoki-motives" >}}): $[X] \to [Y]$ admits a fully
faithful $[Y]$-linear left (resp. right) adjoint.

{{< definition title="Unramified, étale, separated, proper (Aoki)" id="def-aoki-classes" >}}
A *static* (i.e.\ $0$-truncated) morphism $f$ of stacks is:

- **unramified** if $\Delta_{f}$ is an open immersion;
- **étale** if $f$ is suave and unramified;
- **separated** if $\Delta_{f}$ is a closed immersion;
- **proper** if $f$ is prim and separated.

({{< cite "aoki-motives" >}}.)
{{< /definition >}}

{{< remark title="Why static?" >}}
For a static morphism, both source and target are $0$-truncated, so
$X \times_{Y} X$ is $0$-truncated, hence $\Delta_{f}\colon X \to X \times_{Y} X$
is *automatically* a monomorphism. Without staticity, requiring
$\Delta_{f}$ to be open/closed immersion would impose an extra mono
condition. The recursion of {{< thmref "def-d-etale-inductive" >}} is now
implicit: open/closed immersions encode all the truncated-diagonal data
in one step.
{{< /remark >}}

{{< remark title="Coda: six operations without compactification" >}}
Aoki's formulation has a structural dividend. With $\mathcal C$ stacks
and $E$ = exceptional morphisms (those $n$-truncated $f$ along which
$[Y]$ is iteratively dualizable over $[Y]^{\otimes_{[X]} S^{n-1}}$), the
$(E, E)$-biadjointability condition of {{< thmref "thm-cll-universal" >}}
holds, so CLL produces a six-functor formalism *without input
compactification*. This recovers the classical six operations on locally
compact Hausdorff spaces of countable weight built from open subsets of
$\mathbb R^{n}$. ({{< cite "aoki-motives" >}}.)
{{< /remark >}}

## 10. Transmutation to Gestalten

The functoriality theorem ({{< thmref "thm-K-functorial" >}}) makes
$\mathbb K_{\mathsf D, (-)}$ a 3-functor formalism one categorical level
higher. The natural next step is to *iterate*. The output is a tower of
$n$-categories controlled by a single algebraic object — a Stefanich ring
— and the geometric content of $\mathsf D$ is captured by a functor into
$\mathsf{Gest}$.

### Functorial form of $\mathbb K_{\mathsf D, Y}$

For iteration we want a description of $\mathbb K_{\mathsf D, Y}$ in
which $\mathsf D$-linearity is built in from the start. Set
$\mathsf{Corr}_{Y} \coloneqq \mathsf{Corr}((\mathcal C_{E})_{/Y})$. Under
Day convolution, $\mathsf D$ (restricted to $\mathsf{Corr}_{Y}$) is a
commutative algebra in $\mathsf{Fun}(\mathsf{Corr}_{Y}, 1\mathsf{Pr})$.

{{< proposition title="Functorial description of $\mathbb K_{\mathsf D, Y}$" id="prop-functorial-K" >}}
$\mathbb K_{\mathsf D, Y}$ is identified with the full sub-$2$-category
of

$$
    \mathsf{Mod}_{\mathsf D}\!\bigl(\mathsf{Fun}(\mathsf{Corr}_{Y}, 1\mathsf{Pr})\bigr)
$$

spanned by representable $\mathsf D$-modules
$[X] \coloneqq \mathsf D(- \times_{Y} X)$.
({{< cite "scholze-six" "Lecture V, appendix" >}};
{{< cite "aoki-motives" >}}.)
{{< /proposition >}}

In this form, the $\mathsf D$-module structure is intrinsic: a kernel
$K \in \mathsf D(X_{1} \times_{Y} X_{2})$ becomes a $\mathsf D$-module
morphism $\varphi_{K}\colon [X_{1}] \to [X_{2}]$, and asking for
$\varphi_{K}$ to admit a linear adjoint is a direct condition inside
$\mathsf{Mod}_{\mathsf D}$. Statements like "$[Y]$ is self-dual over $[X]$"
or "the trace of a kernel lives in $\mathsf D(Y)$" become naked
symmetric-monoidal statements.

### Iteration to Stefanich rings

The functorial form iterates. From
$\mathsf D\colon \mathsf{Corr}(\mathcal C) \to 1\mathsf{Pr}$, the
functoriality theorem gives a kernel $2$-category $\mathbb K_{\mathsf D, X}$
for each $X$; the same machinery applied to $\mathbb K_{\mathsf D, (-)}$
gives a $3$-category $\mathbb K_{\mathsf D, X}^{(2)}$, and so on.
Assembling everything yields a **Stefanich ring**

$$
    A_{\mathsf D, X} \;\coloneqq\; \bigl( \mathsf D(X),\; \mathbb K_{\mathsf D, X},\; \mathbb K_{\mathsf D, X}^{(2)},\; \ldots \bigr) \;\in\; \mathsf{StRing}.
$$

({{< cite "scholze-gestalten" "§3" >}}, building on
{{< cite "stefanich-thesis" >}}.) Functorially:
$\mathcal C^{\mathrm{op}} \to \mathsf{StRing}$.

### The transmutation theorem

The Gestalt category is $\mathsf{Gest} \coloneqq \mathsf{StRing}^{\mathrm{op}}$.
Composing with $\mathsf{Spec}_{\infty}\colon \mathsf{StRing} \to \mathsf{Gest}^{\mathrm{op}}$
gives the transmutation:

{{< theorem title="Transmutation" id="thm-transmutation" >}}
$X \mapsto [X]_{\mathsf D} \coloneqq \mathsf{Spec}_{\infty}(A_{\mathsf D, X})$
extends to a finite-limit-preserving functor
$[-]_{\mathsf D}\colon \mathcal C \to \mathsf{Gest}$, and for every
$f\colon X \to Y$ in $\mathcal C$:

1. $[f]_{\mathsf D}$ is $1$-étale and $1$-proper *automatically*;
2. $f$ is $\mathsf D$-suave (resp.\ $\mathsf D$-prim) iff $[f]_{\mathsf D}$
   is $0$-suave (resp.\ $0$-prim);
3. $f$ is truncated and $\mathsf D$-cohomologically étale (resp.\ proper)
   iff $f$ is truncated and $[f]_{\mathsf D}$ is $0$-étale (resp.\
   $0$-proper).

({{< cite "scholze-gestalten" "Prop. 9.5, Rem. 9.6" >}}.)
{{< /theorem >}}

Two things at once:

- **Level $1$ free.** Whatever $f$ is geometrically, $[f]_{\mathsf D}$ is
  "doubly nice" at the next level — ambidexterity in the Stefanich-ring
  tower. The 6FF sees only level $0$; $\mathsf{Gest}$ remembers all.
- **Level $0$ faithful.** Suave, prim, étale, proper for $f$ correspond
  *exactly* to their $0$-versions for $[f]_{\mathsf D}$.

### Unpacking the dictionary

For $f\colon X \to Y$, write $A = A_{\mathsf D, Y}$, $B = A_{\mathsf D, X}$.
The unit
$\mathbf 1_{X} \in \mathsf D(X) = \mathrm{Fun}_{Y}(X, \mathbb 1)$ —
a morphism $X \to \mathbb 1$ in $\mathbb K_{\mathsf D, Y}$ realising as
$f_{!}$ — is the structure map $\mathbb 1 \to (B/A)_{1}$ of the algebra
$(B/A)_{1} \in A_{2}$. Its Koszul dual is the counit
$(B/A)^{!}_{1} \to \mathbb 1$ of the coalgebra
$(B/A)^{!}_{1} = f_{1, \sharp}(\mathbb 1)$. Then
({{< cite "scholze-gestalten" "Defs. 6.9, 6.16" >}}):

*$[f]_{\mathsf D}$ is $0$-prim* iff for all $m \geq 1$ the map
$\mathbb 1 \to (B/A)_{m}$ admits a right adjoint in $A_{m+1}$. For
transmuted maps, $m \geq 2$ follow from ambidexterity, so the content is
at $m = 1$: $\mathbb 1 \to (B/A)_{1}$ admits a right adjoint in $A_{2}$.

*$[f]_{\mathsf D}$ is $0$-suave* iff for all $m \geq 1$ both
$\mathbb 1 \to (B/A)_{m}$ admits a left adjoint *and*
$(B/A)^{!}_{m} \to \mathbb 1$ admits a right adjoint — the second a
strengthening. Reduces to $m = 1$.

So suave/prim conditions on $f$, abstract adjunction statements in
$\mathbb K_{\mathsf D}$, become bare adjoint existence for the unit map
$\mathbb 1 \to (B/A)_{1}$ in $A_{2}$.

### What this buys us

- **Six-functor formalisms forget structure.** Higher-categorical data
  hidden in $\mathsf D$ becomes manifest in $A_{\mathsf D}$; the
  level-$1$ ambidexterity that was previously a theorem is now a
  tautology.
- **Geometry independent of the formalism.** Different 6FFs on
  $\mathcal C$ can produce the *same* Gestalt $[X]_{\mathsf D}$, reducing
  comparison of cohomology theories to comparison of geometric objects.
- **The site is encoded.** The Morel–Voevodsky example
  $[\operatorname{Spec}(\mathbb Z)]_{\mathsf{SH}} \in \mathsf{Gest}$ is
  $2$-affine, generated by $[\mathbb A^{n}_{\mathbb Z}]_{\mathsf{SH}}$,
  $n \geq 0$. ({{< cite "scholze-gestalten" "Prop. 9.9" >}}.) The "site"
  of algebraic geometry is reconstructed from $\mathsf D$ alone.

A Gestalt is a six-functor formalism with all its hidden
higher-categorical data made manifest. Cohomology, suaveness, properness,
smoothness sit at level $0$; everything else encoded above.

---

# References

<span id="ref-aoki-motives"></span>
**[Aoki]**
Ko Aoki.
*Algebraic 2-motives and ring stacks*.
Preprint (2025).

<span id="ref-ayoub"></span>
**[Ayo07]**
Joseph Ayoub.
*Les six opérations de Grothendieck et le formalisme des cycles évanescents dans le monde motivique*.
Astérisque 314, 315 (2007).

<span id="ref-cisinski-deglise"></span>
**[CD19]**
Denis-Charles Cisinski and Frédéric Déglise.
*Triangulated Categories of Mixed Motives*.
Springer Monographs in Mathematics (2019).

<span id="ref-cll-universal"></span>
**[CLL25]**
Bastiaan Cnossen, Tobias Lenz, Sil Linskens.
*Universal six-functor formalisms*.
arXiv:2505.19192 (2025).

<span id="ref-dauser-kuijper"></span>
**[DK25]**
Adam Dauser and Josefien Kuijper.
*Uniqueness of six-functor formalisms*.
arXiv:2412.15780 (2025).

<span id="ref-drew-gallauer"></span>
**[DG22]**
Brad Drew and Martin Gallauer.
*The universal six-functor formalism*.
Annals of K-theory 7 (2022), 599–649.

<span id="ref-fargues-scholze"></span>
**[FS24]**
Laurent Fargues and Peter Scholze.
*Geometrization of the local Langlands correspondence*.
arXiv:2102.13459 (2024).

<span id="ref-heyer-mann"></span>
**[HM24]**
Claudius Heyer and Lucas Mann.
*6-functor formalisms and smooth representations*.
Preprint (2024).

<span id="ref-liu-zheng"></span>
**[LZ12]**
Yifeng Liu and Weizhe Zheng.
*Enhanced six operations and base change theorem for higher Artin stacks*.
arXiv:1211.5948 (2012).

<span id="ref-lu-zheng"></span>
**[LZ22]**
Qing Lu and Weizhe Zheng.
*Categorical traces and a relative Lefschetz–Verdier formula*.
Forum of Mathematics, Sigma 10 (2022).

<span id="ref-mann-rigid"></span>
**[Man22]**
Lucas Mann.
*A $p$-adic 6-functor formalism in rigid-analytic geometry*.
arXiv:2206.02022 (2022).

<span id="ref-morel-voevodsky"></span>
**[MV99]**
Fabien Morel and Vladimir Voevodsky.
*$\mathbb A^{1}$-homotopy theory of schemes*.
Publ. Math. IHES 90 (1999), 45–143.

<span id="ref-scholze-gestalten"></span>
**[Sch26]**
Peter Scholze.
*Geometry and higher category theory*.
Lecture notes (2025/26).

<span id="ref-scholze-six"></span>
**[Sch22]**
Peter Scholze.
*Six-functor formalisms*.
Lecture notes, Bonn (WS 2022/23).

<span id="ref-stefanich-thesis"></span>
**[Ste20]**
Germán Stefanich.
*Presentable $(\infty,n)$-categories*.
arXiv:2011.03035 (2020).