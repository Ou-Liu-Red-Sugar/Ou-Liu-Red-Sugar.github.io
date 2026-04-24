---
title: "A brief introduction to 6-functor formalisms"
date: 2026-04-24
math: true
draft: false
description: "A coherent pass through six-functor formalisms. Starting from Liu–Zheng / Mann / Scholze's span-category formulation and the Cnossen–Lenz–Linskens universal property, passing through the construction of $\\mathsf{SH}$ and the Drew–Gallauer initiality theorem, we arrive at the organising observation of Scholze's Lecture V: Poincaré duality for a morphism is *precisely* a dualizability statement in the 2-category of Fourier–Mukai kernels. A functorial reformulation in $\\mathsf{D}$-modules then makes transmutation transparent, and the whole apparatus lands naturally inside Gestalten. We close with suave and prim morphisms, the inductive étale/proper picture via diagonals, and Aoki's one-step rephrasing through open and closed immersions."
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
>   $2$-category of all categories, and $\mathsf{Cat}^{(2)}$ is the
>   category of $2$-categories.
> - $\mathsf{Pr}^L$ denotes presentable categories with left adjoints;
>   $\mathsf{Pr}^L_{\mathrm{st}}$ is the stable version.
> - $\mathsf{CAlg}(\mathcal M)$ denotes commutative algebra objects in a
>   symmetric monoidal category $\mathcal M$.
> - Given a geometric setup $(\mathcal C, E)$ — a category $\mathcal C$
>   with finite limits and a class of morphisms $E$ containing
>   isomorphisms and stable under pullback, composition and diagonals —
>   we write $\mathsf{Corr}(\mathcal C, E)$ for the span $(2,1)$-category
>   (Scholze's notation). Its $2$-categorical upgrade with
>   biadjointability data, introduced in the CLL framework, is denoted
>   $\mathsf{Span}_2(\mathcal C, E)_{I, P}$.
> - Internal hom in a symmetric monoidal category is written
>   $\underline{\mathrm{Hom}}$. The monoidal unit of $\mathsf D(X)$ is
>   written $\mathbf 1_{X}$; the terminal object of a slice $\mathcal C_{/Y}$
>   (equivalently the monoidal unit of $A_{\mathsf D, Y}$ at each level) is
>   written $\mathbb 1$.

---

# Part I · What a six-functor formalism is

## 1. Why six functors?

Cohomology theories assign to a geometric object $X$ a complex
$\Gamma(X; R) \in \mathsf D(R)$ of $R$-modules, capturing much of what
we want to know about $X$.
In practice we ask cohomology to satisfy *structural* properties:
the Künneth formula

$$
    H^{*}(X \times Y; R) \;\simeq\; H^{*}(X; R) \otimes_{R} H^{*}(Y; R),
$$

Poincaré duality between ordinary and Borel–Moore homology for smooth
$X$, proper base change, excision, and so on.
Each such property is classically proved by hand, and each proof
intertwines a concrete geometric construction with the particular
sheaf-theoretic machinery that produces $\Gamma(X; R)$.

The **six-functor formalism** inverts the order of operations.
Instead of defining $\Gamma(X; R)$ first and then proving it has the
properties we want, one fixes a category $\mathsf D(X)$ of "sheaves on
$X$" together with a short list of functors and compatibilities; one
then recovers cohomology as a derivative of this data, and the
structural properties fall out as formal consequences of the axioms.
The Künneth formula, Poincaré duality, base change and the projection
formula cease to be theorems about cohomology — they are re-packaging
of what was asked for at the outset.

## 2. The six functors and (co)homology

Fix an $(\infty, 1)$-category $\mathcal C$ of geometric objects; we
assume $\mathcal C$ has finite limits, so in particular a terminal
object $\ast$ exists.
A **six-functor formalism** on $\mathcal C$ consists of the following
data, informally described.

**Sheaves.**
For each $X \in \mathcal C$, a closed symmetric monoidal
$\infty$-category $\mathsf D(X)$ — the category of "sheaves on $X$".
We write $\otimes$ for the tensor product, $\underline{\mathrm{Hom}}$
for its right adjoint (internal hom), and $\mathbf 1_{X}$ for the
monoidal unit.

**Upper-star and lower-star.**
For each morphism $f\colon Y \to X$ in $\mathcal C$, an adjoint pair

$$
    f^{\ast}\colon \mathsf D(X) \;\rightleftarrows\; \mathsf D(Y) \;{:}\, f_{\ast},
$$

with $f^{\ast}$ the **pullback** (upper-star) and $f_{\ast}$ the
**pushforward** (lower-star).

**Lower-shriek and upper-shriek.**
For a distinguished class $E$ of morphisms (the **exceptional**
morphisms — typically finite-type, or morphisms admitting
compactification), an adjoint pair

$$
    f_{!}\colon \mathsf D(Y) \;\rightleftarrows\; \mathsf D(X) \;{:}\, f^{!},
$$

with $f_{!}$ the **exceptional pushforward** (lower-shriek) and $f^{!}$
the **exceptional pullback** (upper-shriek).

We write $\mathsf D \coloneqq \mathsf D(\ast)$ for the "coefficient"
category.

### Recovering (co)homology

For $X \in \mathcal C$ with projection $p\colon X \to \ast$, four
(co)homology theories are immediately available:

- **Cohomology:** $\Gamma(X; \mathbf 1) \coloneqq p_{\ast} p^{\ast} \mathbf 1$.
- **Compactly-supported cohomology:** $\Gamma_{c}(X; \mathbf 1) \coloneqq p_{!} p^{\ast} \mathbf 1$.
- **Borel–Moore homology:** $\Gamma^{\mathrm{BM}}(X; \mathbf 1) \coloneqq p_{\ast} p^{!} \mathbf 1$.
- **Homology:** $\Gamma^{\vee}(X; \mathbf 1) \coloneqq p_{!} p^{!} \mathbf 1$.

All four live in $\mathsf D$. Replacing $\mathbf 1$ by an arbitrary
$M \in \mathsf D$ gives (co)homology with coefficients in $M$. The last
three require $p$ to be exceptional.

## 3. Compatibility axioms: Künneth and Poincaré duality for free

For the formal consequences to go through, the functors above must
satisfy three compatibility axioms. These are what the six-functor
machinery is about; everything else follows.

1. **Monoidality of $f^{\ast}$.**
   For every $f\colon Y \to X$, the pullback $f^{\ast}$ is symmetric
   monoidal — in particular $f^{\ast}$ commutes with $\otimes$.

2. **Base change (Beck–Chevalley).**
   For a cartesian square
   {{< tikzcd >}}
   X' \times_{X} Y \ar[r, "g'"] \ar[d, "f'"'] \ar[dr, phantom, very near start, "\lrcorner"] & Y \ar[d, "f"] \\
   X' \ar[r, "g"'] & X
   {{< /tikzcd >}}
   with $f \in E$, the natural transformation
   $g^{\ast} f_{!} \xrightarrow{\sim} f'_{!} (g')^{\ast}$ is an
   equivalence.

3. **Projection formula.**
   For $f\colon Y \to X$ in $E$, $M \in \mathsf D(X)$ and
   $N \in \mathsf D(Y)$, the natural transformation
   $M \otimes f_{!} N \xrightarrow{\sim} f_{!}(f^{\ast} M \otimes N)$
   is an equivalence.

With just these, the classical structural theorems are formal
consequences.

{{< proposition title="Künneth formula" id="prop-kunneth-informal" >}}
For $X, Y \in \mathcal C$ with exceptional structure maps,

$$
    \Gamma_{c}(X \times Y;\, \mathbf 1) \;\simeq\; \Gamma_{c}(X;\, \mathbf 1) \;\otimes\; \Gamma_{c}(Y;\, \mathbf 1).
$$
{{< /proposition >}}

{{< proof >}}
Consider the square
{{< tikzcd >}}
X \times Y \ar[r, "f_{X}"] \ar[d, "f_{Y}"'] \ar[dr, "p"] & X \ar[d, "p_{X}"] \\
Y \ar[r, "p_{Y}"'] & \ast.
{{< /tikzcd >}}

$$
\begin{aligned}
\Gamma_{c}(X \times Y;\, \mathbf 1) \;=\; p_{!} p^{\ast} \mathbf 1
    &\;\simeq\; (p_{Y})_{!} (f_{Y})_{!} (f_{X})^{\ast} (p_{X})^{\ast} \mathbf 1 \\
    &\;\simeq\; (p_{Y})_{!} \bigl( (p_{Y})^{\ast} (p_{X})_{!} (p_{X})^{\ast} \mathbf 1 \bigr) \quad \text{(base change)} \\
    &\;\simeq\; (p_{X})_{!} (p_{X})^{\ast} \mathbf 1 \;\otimes\; (p_{Y})_{!} (p_{Y})^{\ast} \mathbf 1 \quad \text{(projection)} \\
    &\;=\; \Gamma_{c}(X;\, \mathbf 1) \;\otimes\; \Gamma_{c}(Y;\, \mathbf 1).
\end{aligned}
$$
{{< /proof >}}

{{< proposition title="Poincaré duality" id="prop-poincare-informal" >}}
For $X \in \mathcal C$ sufficiently "smooth" (a notion to be made
precise in §10; in concrete examples: smooth manifolds, smooth
schemes),

$$
    \Gamma^{\mathrm{BM}}(X;\, \mathbf 1) \;\simeq\; \underline{\mathrm{Hom}}\bigl( \Gamma_{c}(X;\, \mathbf 1),\, \mathbf 1 \bigr).
$$
{{< /proposition >}}

{{< proof >}}
Let $p\colon X \to \ast$. For any $M \in \mathsf D$, adjunctions and the
projection formula give

$$
\begin{aligned}
\mathrm{Hom}_{\mathsf D}\bigl( M,\, \Gamma^{\mathrm{BM}}(X;\, \mathbf 1) \bigr)
    &\;=\; \mathrm{Hom}\bigl( M,\, p_{\ast} p^{!} \mathbf 1 \bigr) \\
    &\;\simeq\; \mathrm{Hom}\bigl( p_{!} p^{\ast} M,\, \mathbf 1 \bigr) \quad (\text{$p_{!} \dashv p^{!}$, $p^{\ast} \dashv p_{\ast}$}) \\
    &\;\simeq\; \mathrm{Hom}\bigl( M \otimes p_{!} p^{\ast} \mathbf 1,\, \mathbf 1 \bigr) \quad \text{(projection)} \\
    &\;\simeq\; \mathrm{Hom}\bigl( M,\, \underline{\mathrm{Hom}}(\Gamma_{c}(X;\, \mathbf 1),\, \mathbf 1) \bigr).
\end{aligned}
$$

Yoneda gives the claim. When the coefficient category is
$\mathsf D(\mathrm{pt}) = \mathsf D(\Bbbk)$ over a field $\Bbbk$, the
right-hand side is $\Gamma_{c}(X; \Bbbk)^{\vee}$, the linear dual.
{{< /proof >}}

Each proof is a single commuting square plus one application of each
compatibility axiom. No bespoke analysis, no recourse to the particular
realisation of $\mathsf D(X)$ — the content is packaged into the axioms,
and the structural theorems fall out.

What we want now is an efficient way to *package* these axioms, their
coherences, and their interactions, in a fully higher-categorical way —
without listing an explicit $n$-dimensional web of compatibilities for
every $n$. That is the role of the span-category description.

## 4. The span picture

Classically, a six-functor formalism is a packet
$(f^{\ast},\, f_{\ast},\, f_{!},\, f^{!},\, \otimes,\, \underline{\mathrm{Hom}})$
subject to the web of adjunctions, base-change isomorphisms and
projection formulae stated in §3.
Writing this down in a fully coherent higher-categorical sense — with
all associativity, commutativity and compatibility data coherent to
arbitrary depth — is, by direct assault, hopeless.

A far more economical description was initiated by Liu–Zheng
{{< cite "liu-zheng" >}} and brought to its present form by Mann
{{< cite "mann-rigid" >}} and Scholze {{< cite "scholze-six" >}}. Fix a
wide subcategory $E \subset \mathcal C$ closed under composition and base
change. The **span category** $\mathsf{Corr}(\mathcal C, E)$ has the same
objects as $\mathcal C$, and its morphisms $X \to Y$ are spans

$$
    X \xleftarrow{\;\;\;} W \xrightarrow{\;g\;} Y,
    \qquad g \in E,
$$

composed by pullback. When $\mathcal C$ has finite products,
$\mathsf{Corr}(\mathcal C, E)$ inherits a symmetric monoidal structure.

{{< definition title="Three- and six-functor formalisms" id="def-sixfunctor" >}}
A **three-functor formalism** on $(\mathcal C, E)$ is a lax symmetric
monoidal functor

$$
    \mathsf{D}\colon \mathsf{Corr}(\mathcal C, E) \longrightarrow \mathsf{Cat}.
$$

Its backward legs encode $f^{*}$, its forward legs encode $f_{!}$, and the
monoidal structure encodes $\otimes$. It is a **six-functor formalism** if
additionally $-\otimes A$, $f^{*}$ and $f_{!}$ all admit right adjoints —
i.e. $\underline{\mathrm{Hom}}$, $f_{*}$, $f^{!}$ exist. These right adjoints
are a *property* of $\mathsf D$, not further structure: adjoints
automatically acquire all relevant coherences
({{< cite "scholze-six" "Lecture II" >}}).
{{< /definition >}}

The packaging is remarkably concise. A span
$X \xleftarrow{f} W \xrightarrow{g} Y$ maps to the functor
$g_{!} f^{\ast}\colon \mathsf D(X) \to \mathsf D(Y)$; base change is
compatibility with span composition, and the projection formula is
compatibility with the symmetric monoidal structure — both encoded by
the single datum "$\mathsf D$ is lax symmetric monoidal".

## 5. Mann's extension theorem

Constructing a lax monoidal functor out of $\mathsf{Corr}(\mathcal C, E)$
directly is still hard. In practice one starts from a much simpler piece of
data — a functor

$$
    \mathsf{D}_0\colon \mathcal C^{\mathrm{op}} \longrightarrow \mathsf{CAlg}(\mathsf{Cat})
$$

encoding only $f^{*}$ and $\otimes$ — and asks when it extends across
$\mathsf{Corr}(\mathcal C, E)$.

The input is a **suitable decomposition** of $E$
({{< cite "mann-rigid" "Def. A.5.9" >}}): a pair of wide subcategories
$I, P \subset E$ — think *étale-like* and *proper-like* — such that every
$e \in E$ factors as $e = p \circ i$ with $i \in I$ and $p \in P$, subject to
mild cancellation and truncation axioms. Mann's extension theorem then says:
if $i^{*}$ admits a left adjoint $i_{\sharp}$ for $i \in I$ and $p^{*}$
admits a right adjoint $p_{*}$ for $p \in P$, satisfying the expected base
change and projection formulae — in particular the mixed Beck–Chevalley
equivalence $i_{\sharp} p'_{*} \simeq p_{*} i'_{\sharp}$ in any cartesian
square — then $\mathsf D_0$ extends essentially uniquely to $\mathsf D$, with

$$
    f_{!} = p_{*}\, i_{\sharp} \qquad \text{for any factorisation } f = p \circ i.
$$

## 6. The CLL universal property

Cnossen–Lenz–Linskens {{< cite "cll-universal" >}} gave a conceptually
streamlined account of this extension theorem. They enhance
$\mathsf{Corr}(\mathcal C, E)$ to a $2$-category whose $2$-morphisms encode
the adjunction data of $i_{\sharp}$ and $p_{*}$ coherently, and show that a
certain inclusion is universal among $(I,P)$-biadjointable functors —
making Mann's theorem a formal corollary.

{{< construction title="CLL 2-categorical span category" >}}
The $2$-category $\mathsf{Span}_2(\mathcal C, E)_{I,P}$ has:

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
Assume $I, P \subseteq E \subseteq \mathcal C$ are wide and closed under
base change, every $e \in E$ factors as $p \circ i$ with $p \in P$ and
$i \in I$, and maps in $I \cap P$ are truncated. Then the inclusion

$$
    \mathcal C^{\mathrm{op}} \hookrightarrow \mathsf{Span}_2(\mathcal C, E)_{I, P}
$$

is the initial functor under which $I$ satisfies left base change and $P$
satisfies right base change — equivalently, the universal
$(I, P)$-biadjointable functor
({{< cite "cll-universal" "Thm. 5.17" >}}).
{{< /theorem >}}

So to build a six-functor formalism it suffices to supply $\mathsf D_0$ and
verify three biadjointability conditions: left base change for $I$, right
base change for $P$, and the mixed Beck–Chevalley equivalence. Everything
else is formal.

---

# Part II · From localization to $\mathsf{SH}$

## 7. The localization axiom and base change

To make the CLL input concrete we pin down *localization* (recollement) and
*base change*.

{{< definition title="Recollement and the localization axiom" >}}
A diagram

$$
    \mathcal C_U \xleftarrow{\;j^{*}\;} \mathcal C_X \xrightarrow{\;i^{*}\;} \mathcal C_Z
$$

in $\mathsf{Pr}^L_{\mathrm{st}}$ is a **recollement** if

1. $j^{*}$ has a left adjoint $j_{!}$ with $j_{!} j^{*} \to \mathrm{id}$ an equivalence;
2. $i^{*}$ has a right adjoint $i_{*}$ with $\mathrm{id} \to i_{*} i^{*}$ an equivalence;
3. $j^{*} i_{*} \simeq 0$ (equivalently $i^{*} j_{!} \simeq 0$), and the square
   {{< tikzcd >}}
   j_{!} j^{*} \ar[r] \ar[d] & \mathrm{id} \ar[d] \\
   0 \ar[r] & i_{*} i^{*}
   {{< /tikzcd >}}
   in $\mathrm{End}(\mathcal C_X)$ is a pushout.

A functor
$\mathsf D\colon (\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \to \mathsf{Cat}_{\mathrm{st}}$
satisfies the **localization axiom** if every closed immersion
$i\colon Z \hookrightarrow X$ with open complement
$j\colon U \hookrightarrow X$ gives a recollement
$\mathsf D(U) \xleftarrow{j^{*}} \mathsf D(X) \xrightarrow{i^{*}} \mathsf D(Z)$.
{{< /definition >}}

{{< definition title="Left and right base change" id="def-base-change" >}}
For $\mathsf D\colon (\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \to \mathsf{Cat}_{\mathrm{st}}$:

- $g\colon C \to D$ satisfies **left base change** if, for every pullback
  square
  {{< tikzcd >}}
  A \ar[r, "k"] \ar[d, "h"'] \ar[dr, phantom, very near start, "\lrcorner"] & B \ar[d, "f"] \\
  C \ar[r, "g"'] & D
  {{< /tikzcd >}}
  $k^{*}$ has a left adjoint $k_{\sharp}$ and the canonical
  $k_{\sharp} h^{*} \to f^{*} g_{\sharp}$ is an equivalence.

- $f\colon B \to D$ satisfies **right base change** if, for such a square,
  $h^{*}$ has a right adjoint $h_{*}$ and the canonical
  $g^{*} f_{*} \to h_{*} k^{*}$ is an equivalence.
{{< /definition >}}

Together these feed straight into descent:

{{< proposition title="Localization implies Nisnevich and blowup descent" id="prop-localization-cdh" >}}
Let $\mathsf D$ satisfy the localization axiom.

1. If every étale morphism satisfies left base change, then $\mathsf D$
   satisfies **Nisnevich descent**.
2. If every finitely presented proper morphism satisfies right base change,
   then $\mathsf D$ satisfies **abstract blowup descent**.

In particular, under both hypotheses, $\mathsf D$ is a cdh sheaf.
{{< /proposition >}}

{{< proof >}}
We do the abstract blowup case; Nisnevich is dual. For an abstract blowup
square
{{< tikzcd >}}
E \ar[r, "k"] \ar[d, "q"'] \ar[dr, phantom, very near start, "\lrcorner"] & \tilde X \ar[d, "p"] \\
Z \ar[r, hook, "i"'] & X
{{< /tikzcd >}}
write $j\colon U = X \setminus Z \hookrightarrow X$ and
$h\colon U \hookrightarrow \tilde X$. We must show the comparison

$$
    (p^{*}, i^{*})\colon \mathsf D(X) \to \mathsf D(\tilde X) \times_{\mathsf D(E)} \mathsf D(Z)
$$

is an equivalence. Its right adjoint is
$G(A, B) = p_{*} A \times_{(iq)_{*} C} i_{*} B$, where $C$ is the common
image in $\mathsf D(E)$.

*Conservativity.* The localization axiom gives that $(i^{*}, j^{*})$ is
jointly conservative. Since $p$ is iso over $U$, $j^{*} \simeq h^{*} p^{*}$,
so $(p^{*}, i^{*})$ is too.

*$i^{*}$-component.* Fully faithfulness of $i_{*}$ plus right base change for
$p$ along $i$ ($i^{*} p_{*} A \simeq q_{*} C$) gives
$i^{*}(p_{*} A \times_{(iq)_{*} C} i_{*} B) \simeq q_{*} C \times_{q_{*} C} B \simeq B$.

*$p^{*}$-component.* Apply $k^{*}$ and $h^{*}$ separately. $k^{*}$ is the
previous case. For $h^{*}$: $i_{*} B$ and $(iq)_{*} C$ are supported on $Z$
and killed by $j^{*} = h^{*} p^{*}$, leaving $j^{*} p_{*} A$. The diagram
{{< tikzcd >}}
i_{*} i^{!} p_{*} A \ar[r] \ar[d] & p_{*} A \ar[r] \ar[d, equal] & j_{*} j^{*} p_{*} A \ar[d] \\
p_{*} k_{*} k^{!} A \ar[r] & p_{*} A \ar[r] & p_{*} h_{*} h^{*} A
{{< /tikzcd >}}
has left vertical an equivalence by right base change for $i$ along $p$, and
middle the identity, so the right vertical is an equivalence. Since
$ph = j$ and $j_{*}$ is fully faithful, $j^{*} p_{*} A \simeq h^{*} A$.
{{< /proof >}}

## 8. The six-functor formalism on $\mathsf{SH}$

{{< theorem title="Morel–Voevodsky" id="thm-sh-loc" >}}
$\mathsf{SH}\colon (\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \to \mathsf{Pr}^L_{\mathrm{st}}$
satisfies the localization axiom
({{< cite "morel-voevodsky" >}}).
{{< /theorem >}}

{{< theorem title="Six-functor formalism on SH" id="thm-sh-six" >}}
There is an essentially unique lax symmetric monoidal extension
{{< tikzcd >}}
(\mathsf{Sch}^{\mathrm{qcqs}})^{\mathrm{op}} \ar[r, "\mathsf{SH}"] \ar[d, hook] & \mathsf{CAlg}(\mathsf{Pr}^L_{\mathrm{st}}) \\
\mathsf{Span}_2(\mathsf{Sch}^{\mathrm{qcqs}}, E)_{I, P}^{\otimes} \ar[ur, dashed] &
{{< /tikzcd >}}
with $E$ = morphisms locally of finite presentation, $I$ = open immersions,
$P$ = proper morphisms, and

$$
    f_{!} = p_{*}\, i_{\sharp} \qquad \text{for } f = p \circ i,\; i \in I,\; p \in P.
$$

({{< cite "ayoub" >}}; {{< cite "cisinski-deglise" >}};
{{< cite "cll-universal" >}}.)
{{< /theorem >}}

The proof has a formal half and a geometric half. Formally one invokes
{{< thmref "thm-cll-universal" >}}; the geometric input is:

1. **Smooth/étale base change and projection formula for $i_{\sharp}$.** Built
   into $\mathsf{SH}$: for étale $i\colon T \to S$, $i_{\sharp}$ on
   $\mathsf{PShv}(\mathsf{Sm}_{-})$ is restriction along
   $\mathsf{Sm}_T \to \mathsf{Sm}_S$, manifestly base-change compatible.
2. **Localization.** {{< thmref "thm-sh-loc" >}}.
3. **Proper base change and projection formula for $p_{*}$.** Ayoub for
   projective morphisms; Cisinski–Déglise extend to arbitrary proper via
   Chow's lemma and Noetherian approximation, using localization as the
   bridge.

The mixed Beck–Chevalley $i_{\sharp} p'_{*} \simeq p_{*} i'_{\sharp}$ is
*not* additional input — it follows from proper base change across a
pullback square with one étale edge.

Combining {{< thmref "prop-localization-cdh" >}},
{{< thmref "thm-sh-loc" >}} and proper base change:

{{< corollary title="SH is a cdh sheaf" id="cor-sh-cdh" >}}
$\mathsf{SH}$ is a cdh sheaf.
{{< /corollary >}}

## 9. The Drew–Gallauer universal property

One can now ask: *in what precise sense is $\mathsf{SH}$ universal?*

{{< theorem title="Drew–Gallauer" id="thm-dg" >}}
Let $k$ be a Noetherian base ring of finite Krull dimension and let
$\mathcal C$ be separated finite-type $k$-schemes with $I$ = open
immersions, $P$ = proper morphisms. Consider presentable six-functor
formalisms
$\mathsf D\colon \mathsf{Corr}(\mathcal C) \to \mathsf{Pr}^L_{\mathrm{st}}$
in which open immersions are cohomologically étale, proper maps are
cohomologically proper, and which satisfy:

1. **Cohomological smoothness.** Every smooth morphism is cohomologically
   smooth.
2. **Excision.** For $i\colon Z \hookrightarrow X$ closed with open
   complement $j\colon U \hookrightarrow X$, the sequence
   $j_{!}\mathbf 1 \to \mathbf 1 \to i_{*}\mathbf 1$ is a fibre
   sequence.
3. **$\mathbb A^{1}$-invariance.** For
   $\pi\colon \mathbb A^{1}_{X} \to X$, the pullback
   $\pi^{*}\colon \mathsf D(X) \to \mathsf D(\mathbb A^{1}_{X})$ is fully
   faithful.

The initial object of this $\infty$-category is $\mathsf{SH}$
({{< cite "drew-gallauer" >}}; cf. {{< cite "scholze-six" "Lecture XI" >}}).
{{< /theorem >}}

The Drew–Gallauer proof is *constructive* and recovers the Morel–Voevodsky
construction of $\mathsf{SH}$: smooth $f_{\sharp}$ forces
$\mathsf{PShv}(\mathsf{Sm}_X; \mathsf{Sp})$; excision forces Nisnevich
localization; $\mathbb A^{1}$-triviality forces
$\mathbb A^{1}$-localization; $\otimes$-inverting the Tate object yields
$\mathsf{SH}$.

---

# Part III · Cohomological smoothness and the 2-category of kernel

We now zoom into a given six-functor formalism $\mathsf D$ and study which
morphisms satisfy **Poincaré duality**.

## 10. Poincaré duality and the dualizing complex

{{< theorem title="Poincaré duality (classical form)" >}}
Let $f\colon X \to Y$ be a proper manifold bundle of relative dimension $d$
(locally $Y \times D^{d} \to Y$). Then $f_{!}$ has a right adjoint $f^{!}$
of the form

$$
    f^{!} \simeq f^{*}(-) \otimes \omega_{f},
    \qquad
    \omega_{f} \coloneqq f^{!}(\mathbf 1_{Y}),
$$

where $\omega_{f}$ is locally isomorphic to $\mathbf 1[d]$. The sheaf
$\omega_{f}$ is the **dualizing complex** of $f$.
{{< /theorem >}}

Following {{< cite "scholze-six" "Lecture V, def:cohomsmooth" >}}, for an abstract $\mathsf D$
we therefore axiomatise the class of morphisms $f$ with this behaviour:

{{< definition title="Cohomologically smooth morphism" id="def-cohomsmooth" >}}
A morphism $f\colon X \to Y$ in $E$ is **$\mathsf D$-cohomologically smooth**
(or simply $\mathsf D$-smooth) if:

1. $f^{!}$ exists, and $f^{!}(\mathbf 1_{Y}) \otimes f^{*}(-) \to f^{!}(-)$
   is an equivalence of functors $\mathsf D(Y) \to \mathsf D(X)$.
2. $\omega_{f} \coloneqq f^{!}(\mathbf 1_{Y})$ is $\otimes$-invertible.
3. For every base change $f'\colon X' \to Y'$ of $f$ along $g\colon Y' \to Y$,
   conditions (1) and (2) hold for $f'$, and the natural map
   $g'^{*}\omega_{f} \to \omega_{f'}$ is an equivalence.
{{< /definition >}}

Checking (1)–(3) looks impossibly hard: each piece involves base changes,
and $f^{!}$ is abstractly an adjoint. The goal of the next two sections is
Scholze's observation that *all three conditions together* come for free
from a single, minimal piece of $2$-categorical data on $X \times_Y X$.

## 11. Integral transforms and the 2-category of kernel

The classical integral transform
$T_{K}(F)(x) = \int_{Y} K(x, y)\, F(y)\, dy$ encodes a function
$L^{2}(Y) \to L^{2}(X)$ as a function on $X \times Y$. Its categorification,
a **Fourier–Mukai transform**, replaces integration by $\pi_{!}$ and tensor
product: for $K \in \mathsf D(X \times_Y X')$,

$$
    \Phi_{K}\colon \mathsf D(X) \to \mathsf D(X'),
    \qquad
    A \mapsto (\pi_{X'})_{!}\bigl(\pi_{X}^{*} A \otimes K\bigr).
$$

Two familiar functors are themselves Fourier–Mukai transforms with
particularly simple kernels:

- **$f_{!}$ as a kernel.** Take $K = \mathbf 1_{X}$ regarded as an element
  of $\mathsf D(X \times_{Y} Y) = \mathsf D(X)$ (the "$X \to Y$" slot).
  Then for $A \in \mathsf D(X)$,

$$
    \pi_{Y!}\bigl(\pi_{X}^{*} A \otimes \mathbf 1_{X}\bigr) = f_{!} A.
$$

- **$f^{*}$ as a kernel.** Take $K = \mathbf 1_{X}$ regarded as an element of
  $\mathsf D(Y \times_{Y} X) = \mathsf D(X)$ (the "$Y \to X$" slot). Then
  for $B \in \mathsf D(Y)$,

$$
    \pi_{X!}\bigl(\pi_{Y}^{*} B \otimes \mathbf 1_{X}\bigr) = f^{*} B.
$$

So the statement "$f_{!}$ is left adjoint to $f^{*}$" translates to
"$\mathbf 1_{X}$ (in the $X \to Y$ slot) is left adjoint to $\mathbf 1_{X}$
(in the $Y \to X$ slot) in a suitable $2$-category whose $1$-morphisms are
kernels". Making this precise gives the **$2$-category of kernel**
$\mathbb K_{\mathsf D, Y}$ — historically known as the **Lu–Zheng
$2$-category** ({{< cite "lu-zheng" >}}; {{< cite "fargues-scholze" "§2.3" >}};
{{< cite "scholze-six" "Lecture V" >}}).

{{< definition title="2-category of kernel" id="def-kernel-2cat" >}}
Let $\mathsf D\colon \mathsf{Corr}(\mathcal C) \to \mathsf{Cat}$ be a
three-functor formalism and $Y \in \mathcal C$. The $2$-category
$\mathbb K_{\mathsf D, Y} \in \mathsf{Cat}^{(2)}$ is defined by:

- **Objects.** Objects of $(\mathcal C_{E})_{/Y}$, i.e. morphisms $X \to Y$
  in $E$.
- **Morphism categories.** $\mathsf{Hom}_{Y}(X_{1}, X_{2}) \coloneqq \mathsf D(X_{1} \times_{Y} X_{2})$.
- **Composition.** For $M \in \mathsf D(X_{1} \times_{Y} X_{2})$ and
  $N \in \mathsf D(X_{2} \times_{Y} X_{3})$,

$$
    N \circ M \coloneqq (\pi_{13})_{!}\bigl(\pi_{12}^{*} M \otimes \pi_{23}^{*} N\bigr) \in \mathsf D(X_{1} \times_{Y} X_{3}).
$$

- **Identity.** For $X \to Y$ with diagonal $\Delta_{X/Y}\colon X \to X \times_Y X$,

$$
    \mathrm{id}_{X} = (\Delta_{X/Y})_{!}(\mathbf 1_{X}) \in \mathsf D(X \times_{Y} X).
$$
{{< /definition >}}

There is a canonical "realisation" $2$-functor

$$
    \Psi_{\mathsf D, Y} \coloneqq \mathsf{Hom}_{Y}(Y, -)\colon \mathbb K_{\mathsf D, Y} \longrightarrow \mathsf{Cat}_{2},
    \qquad
    X \mapsto \mathsf D(X),
$$

sending a kernel $M \in \mathsf D(X_1 \times_Y X_2)$ to its Fourier–Mukai
functor. *"Working in $\mathbb K_{\mathsf D, Y}$ amounts to working with
kernels of functors directly, instead of with the induced functors"*
({{< cite "scholze-six" "Lecture V" >}}).

## 12. Characterising cohomological smoothness

We can now restate {{< thmref "def-cohomsmooth" >}} as a pure adjunction
statement in $\mathbb K_{\mathsf D, Y}$. Fix a morphism $f\colon X \to Y$
in $E$; after sliding $\mathcal C$ down to $\mathcal C_{/Y}$ we may assume
$Y$ is the final object. Consider $\mathbf 1_{X}$ as a $1$-morphism from
$X$ to $Y$ in $\mathbb K_{\mathsf D}$; its realisation under $\Psi$ is
$f_{!}$.

{{< theorem title="Poincaré duality as dualizability" id="thm-d-smooth-kernel" >}}
$f$ is $\mathsf D$-cohomologically smooth iff

1. $\mathbf 1_{X} \in \mathsf{Hom}_{\mathbb K_{\mathsf D}}(X, Y) = \mathsf D(X)$ is a left adjoint
   in $\mathbb K_{\mathsf D}$ — that is, it *admits a right adjoint*
   $\omega_{f} \in \mathsf{Hom}_{\mathbb K_{\mathsf D}}(Y, X) = \mathsf D(X)$;
2. $\omega_{f}$ is $\otimes$-invertible in $\mathsf D(X)$.

In this case $\omega_{f} \simeq f^{!}(\mathbf 1_{Y})$.
({{< cite "scholze-six" "Lecture V" >}}.)
{{< /theorem >}}

Two remarks.

- Dropping the invertibility hypothesis in (2) gives a strictly weaker and
  far more robust notion — this will become *$f$-suaveness* in §16.
- Base-change compatibility of $\omega_{f}$ (condition (3) of
  {{< thmref "def-cohomsmooth" >}}) comes for free, because
  $\mathbb K_{\mathsf D, Y}$ is functorial in $Y$ and adjunctions are
  preserved by $2$-functors.

Even more strikingly: the $2$-categorical adjointness of (1) can be
verified from a *surprisingly small* amount of data supported on $X$, $Y$
and $X \times_Y X$.

{{< theorem title="Small-data criterion for cohomological smoothness" id="thm-critcohomsmooth" >}}
Suppose $Y$ is final and let $f\colon X \to Y$. Let $\Delta\colon X \to X \times_Y X$
be the diagonal. Then $f$ is cohomologically smooth iff there exist:

- a $\otimes$-invertible $L \in \mathsf D(X)$,
- maps $\alpha\colon \Delta_{!}\mathbf 1_{X} \to \pi_{2}^{*} L$ in
  $\mathsf D(X \times_Y X)$ and $\beta\colon f_{!} L \to \mathbf 1_{Y}$ in
  $\mathsf D(Y)$,

such that the two composites

$$
    \mathbf 1_{X} \cong \pi_{1!}\Delta_{!}\mathbf 1_{X} \xrightarrow{\pi_{1!}\alpha} \pi_{1!}\pi_{2}^{*} L \cong f^{*} f_{!} L \xrightarrow{f^{*}\beta} \mathbf 1_{X}
$$

and

$$
    L \cong \pi_{2!}(\pi_{1}^{*} L \otimes \Delta_{!}\mathbf 1_{X}) \xrightarrow{\alpha} \pi_{2!}(\pi_{1}^{*} L \otimes \pi_{2}^{*} L) \cong f^{*} f_{!} L \otimes L \xrightarrow{f^{*}\beta \otimes L} L
$$

are the identity. In that case $L = \omega_{f}$
({{< cite "scholze-six" "Lecture V, thm:critcohomsmooth" >}}).
{{< /theorem >}}

The proof in the $(\Leftarrow)$ direction is the heart of the picture: the
pair $(\alpha, \beta)$ translates *literally* into unit/counit $2$-morphisms
making $\mathbf 1_{X}$ (in the $X \to Y$ direction) and $L$ (in the
$Y \to X$ direction) an adjoint pair inside $\mathbb K_{\mathsf D}$;
applying $\Psi$ gives an adjunction $f_{!} \dashv (f^{*}(-) \otimes L)$ in
$\mathsf{Cat}$, which forces $f^{!} \simeq f^{*}(-) \otimes L$ and $L \simeq f^{!}(\mathbf 1_{Y})$.

> **Geometric sanity check ({{< cite "scholze-six" "Lecture V" >}}).** For
> $f\colon \mathbb R \to \ast$ with $\mathsf D(X) = \mathsf D(\mathsf{Ab}(X))$,
> take $L = \mathbb Z[1]$. Then $\alpha$ is a generator of
> $R\Gamma_c(\mathbb R, \mathbb Z[1]) \simeq \mathbb Z$ and $\beta$ is built
> from the triangle
> $0 \to \Delta_{!}\mathbb Z \to \mathbb Z \to j_{!}\mathbb Z \to 0$
> on $\mathbb R^{2}$, which computes
> $\mathrm{RHom}(\Delta_{!}\mathbb Z[-1], \mathbb Z) \simeq \mathbb Z$.
> Compatibility of signs is automatic from the adjunction lemma
> ({{< cite "scholze-six" "Lecture V" >}}). Base-changing, every manifold
> bundle is cohomologically smooth.

---

# Part IV · Functorial presentation and transmutation to Gestalten

The concrete definition of $\mathbb K_{\mathsf D, Y}$ via Fourier–Mukai
kernels is convenient for computation but awkward for *transmutation* —
the generic term for transporting adjointness, dualizability and
$\mathsf D$-linearity data between different kernel categories, and the
mechanism by which six-functor formalisms give rise to Gestalten. For
this we want a description in which $\mathsf D$-linear structure is built
in from the start.

## 13. Kernels as $\mathsf D$-modules in a functor category

The definition in §11 is concrete but makes two structural features awkward:
$\mathsf D$-linearity is *implicit* in the FM formula rather than built in,
and the presentability of $\mathbb K_{\mathsf D, Y}$ — which is what lets us
iterate the construction in the next section — has to be argued for by
hand. There is an equivalent, functorial description in which both issues
disappear.

Fix $Y \in \mathcal C$ and write $\mathsf{Corr}_{Y} \coloneqq \mathsf{Corr}(\mathcal C_{/Y})$.
Under pointwise tensor (Day convolution),
$\mathsf{Fun}(\mathsf{Corr}_{Y}, 1\mathsf{Pr})$ is symmetric monoidal, and
$\mathsf D$ (restricted to $\mathsf{Corr}_{Y}$) is a commutative algebra
object in it — as always, commutative algebras for Day convolution are
exactly lax symmetric monoidal functors.

{{< definition title="Functorial description of $\mathbb K_{\mathsf D, Y}$" id="def-kernel-fun" >}}
For $X \in (\mathcal C_{E})_{/Y}$, the **representable $\mathsf D$-module**
is

$$
    [X] \;\coloneqq\; \mathsf D(- \times_{Y} X) \;\in\; \mathsf{Mod}_{\mathsf D}\!\left(\mathsf{Fun}(\mathsf{Corr}_{Y},\, 1\mathsf{Pr})\right),
$$

with $\mathsf D$-action inherited from $\mathsf D$'s algebra structure.
$\mathbb K_{\mathsf D, Y}$ is identified with the full sub-$2$-category of
$\mathsf{Mod}_{\mathsf D}\!\left(\mathsf{Fun}(\mathsf{Corr}_{Y}, 1\mathsf{Pr})\right)$
spanned by the $[X]$
({{< cite "scholze-six" "Lecture V, appendix" >}};
{{< cite "aoki-motives" >}}, §Kernels).
{{< /definition >}}

The FM description (§11) and the $\mathsf D$-module description agree on
representable objects. The precise comparison is due to Dauser, recorded
in {{< cite "aoki-motives" >}}.

{{< proposition title="FM kernels ≡ morphisms of representable $\mathsf D$-modules" id="prop-kernel-eq" >}}
Under the identification $X \mapsto [X]$:

1. **Mapping spaces.** $\mathsf{Hom}([X_{1}], [X_{2}]) \simeq \mathsf D(X_{1} \times_{Y} X_{2})$.
2. **Composition.** $M \in \mathsf D(X_{1} \times_{Y} X_{2})$,
   $N \in \mathsf D(X_{2} \times_{Y} X_{3})$ compose to
   $(\pi_{13})_{!}(\pi_{12}^{*} M \otimes \pi_{23}^{*} N)$.
3. **Identity.** $\mathrm{id}_{[X]} \leftrightarrow (\Delta_{X/Y})_{!}(\mathbf 1_{X})$.
{{< /proposition >}}

{{< proof >}}
The engine is $\mathsf D$-linear Yoneda. A morphism
$\varphi\colon [X_{1}] \to [X_{2}]$ is a $\mathsf D$-linear natural
transformation
$\mathsf D(- \times_{Y} X_{1}) \Rightarrow \mathsf D(- \times_{Y} X_{2})$;
evaluating at $T = X_{1}$ and tracking the identity
$\mathrm{id}_{X_{1}} = (\Delta_{X_1/Y})_{!}\mathbf 1_{X_{1}}$, one sees that
$\varphi$ is determined by

$$
    K \coloneqq \varphi_{X_{1}}(\mathrm{id}_{X_{1}}) \in \mathsf D(X_{1} \times_{Y} X_{2}),
$$

and unwinds to
$\varphi_{T}\colon M \mapsto (\pi_{T X_{2}})_{!}(\pi_{T X_{1}}^{*} M \otimes \pi_{X_{1} X_{2}}^{*} K)$;
conversely any such $K$ yields a $\mathsf D$-linear natural
transformation, and the two assignments are inverse. Part (2) follows from
evaluating
$\varphi_{N \circ M}(\mathrm{id}_{X_{1}}) = \varphi_{N}(\varphi_{M}(\mathrm{id}_{X_{1}}))$,
which produces the Fourier–Mukai convolution; part (3) is immediate.
{{< /proof >}}

{{< remark >}}
In the presentable setting one often needs to pin down a regular cardinal
$\kappa$ (in practice $\kappa = \omega_{1}$) to cut
$\mathsf D$ through $\mathsf{Pr}_{\kappa}^{L}$; this is what makes the
mapping objects themselves live in $\mathsf{Pr}^{L}$, see
{{< cite "scholze-six" "Lecture V, appendix" >}}.
{{< /remark >}}

## 14. Transmutation: from $\mathbb K_{\mathsf D}$ to a Gestalt

The payoff of the functorial description is that $\mathbb K_{\mathsf D, Y}$
can itself be iterated. Starting from

$$
    \mathcal C^{\mathrm{op}} \longrightarrow \mathsf{CAlg}(2\mathsf{Pr}),
    \qquad
    X \longmapsto \mathbb K_{\mathsf D, X},
$$

one checks that pullback admits left adjoints satisfying base change, so
the assignment upgrades to a *categorified* six-functor formalism

$$
    \mathsf{Corr}(\mathcal C) \longrightarrow 2\mathsf{Pr} = \mathsf{Mod}_{1\mathsf{Pr}}(1\mathsf{Pr}).
$$

Iterating, one obtains at every categorical level a presentable $n$-category of kernel $\mathbb K_{\mathsf D, X}^{(n)}$, and assembling
everything yields a **Stefanich ring**
({{< cite "scholze-gestalten" "Def. 3.13" >}}, building on
{{< cite "stefanich-thesis" >}})

$$
    A_{\mathsf D, X} \;=\; \bigl(\mathsf D(X),\ \mathbb K_{\mathsf D, X},\ \mathbb K_{\mathsf D, X}^{(2)},\ \dots\bigr) \;\in\; \mathsf{StRing}.
$$

Passing to $\mathsf{Gest} = \mathsf{StRing}^{\mathrm{op}}$ gives the
transmutation functor
({{< cite "scholze-gestalten" "Lecture IX" >}}):

{{< theorem title="Transmutation of a six-functor formalism" id="thm-transmutation" >}}
The functor

$$
    [-]_{\mathsf D}\colon \mathcal C \longrightarrow \mathsf{Gest}_{/\,[\ast]_{\mathsf D}},
    \qquad
    X \longmapsto [X]_{\mathsf D} \coloneqq \mathsf{Gest}(A_{\mathsf D, X})
$$

commutes with finite limits. For every morphism $f\colon X \to Y$ in
$\mathcal C$, the Gestalten morphism $[f]_{\mathsf D}\colon [X]_{\mathsf D} \to [Y]_{\mathsf D}$
is $1$-étale and $1$-proper, and comes equipped with an isomorphism
$f_{1\sharp} \cong f_{1\ast}$ between left and right adjoints to pullback
$f_{1}^{\ast}\colon \mathbb K_{\mathsf D, Y} \to \mathbb K_{\mathsf D, X}$.
The composite

$$
    \mathcal C^{\mathrm{op}} \xrightarrow{[-]_{\mathsf D}} \mathsf{Gest}^{\mathrm{op}} \xrightarrow{\mathcal O(-)_{1}} \mathsf{CAlg}(1\mathsf{Pr})
$$

recovers the original $X \mapsto \mathsf D(X)$
({{< cite "scholze-gestalten" "Prop. 9.5" >}}).
{{< /theorem >}}

Under transmutation, the abstract notions on $\mathsf D$ specialise
*precisely* to Gestalten-level notions on the morphisms $[f]_{\mathsf D}$
({{< cite "scholze-gestalten" "Rem. 9.6" >}}). For $f\colon X \to Y$ in
$\mathcal C$, writing $A = A_{\mathsf D, Y}$, $B = A_{\mathsf D, X}$ (so
that the map of Stefanich rings goes $A \to B$), the correspondence reads:

- $f$ is **$\mathsf D$-suave** iff $[f]_{\mathsf D}$ is $0$-suave.
- $f$ is **$\mathsf D$-prim** iff $[f]_{\mathsf D}$ is $0$-prim.
- $f$ is truncated and **$\mathsf D$-cohomologically étale** iff $f$ is
  truncated and $[f]_{\mathsf D}$ is $0$-étale.
- $f$ is truncated and **$\mathsf D$-cohomologically proper** iff $f$ is
  truncated and $[f]_{\mathsf D}$ is $0$-proper.

The truncatedness condition on items 3–4 is not decoration: without it,
the inductive definition of cohomologically étale/proper does not
terminate, while $[f]_{\mathsf D}$ being $0$-étale/$0$-proper is perfectly
well-defined. (Scholze notes that it might have been better to *define*
cohomologically étale/proper without the truncatedness requirement
precisely to clean this up.)

**Unpacking $0$-suave and $0$-prim at level $m = 1$.**

The unit $\mathbf 1_{X} \in \mathsf D(X) = \mathrm{Fun}_{Y}(X, \mathbb 1)$
gives a morphism $X \to \mathbb 1$ in $\mathbb K_{\mathsf D, Y}$
(realising, as always, to $f_{!}$). Internally to $A$, this morphism is
the structure map

$$
    \mathbb 1 \xrightarrow{\;f_{0}^{\ast}\;} (B/A)_{1}
$$

of the algebra $(B/A)_{1} \in A_{2}$. Its Koszul dual is the counit

$$
    (B/A)^{!}_{1} \longrightarrow \mathbb 1
$$

of the coalgebra
$(B/A)^{!}_{1} = f_{1, \sharp}(\mathbb 1) \in A_{2}$. Then
({{< cite "scholze-gestalten" "Def. 6.9, 6.16" >}}):

*$[f]_{\mathsf D}$ is $0$-**prim*** iff, for all $m \geq 1$, the
structure map $\mathbb 1 \to (B/A)_{m}$ admits a right adjoint in
$A_{m+1}$.

- For transmuted maps, conditions at $m \geq 2$ follow from
  ambidexterity, so the content reduces to $m = 1$: the map
  $\mathbb 1 \to (B/A)_{1}$ admits a right adjoint in $A_{2}$.
- Dually, when $(B/A)^{!}_{1}$ is dualizable, this is equivalent to
  $(B/A)^{!}_{1} \to \mathbb 1$ admitting a left adjoint in $A_{2}$.

*$[f]_{\mathsf D}$ is $0$-**suave*** iff, for all $m \geq 1$:

1. $\mathbb 1 \to (B/A)_{m}$ admits a left adjoint in $A_{m+1}$, *and*
2. $(B/A)^{!}_{m} \to \mathbb 1$ admits a right adjoint in $A_{m+1}$.

Condition (2) is a strengthening of (1), and the two coincide when
$(B/A)^{!}_{m}$ is dualizable. For transmuted maps the content reduces
to $m = 1$: $(B/A)^{!}_{1} \to \mathbb 1$ admits a right adjoint in
$A_{2}$.

Part (2) of {{< thmref "thm-transmutation" >}} then says that every
morphism in $\mathcal C$ becomes $1$-étale and $1$-proper *automatically*
after transmutation — this is the incarnation of ambidexterity
at level $1$. So the non-trivial "level-$0$" properties (suaveness,
properness) in the six-functor formalism are faithfully encoded in the
Gestalt picture, while levels $\geq 1$ come for free through
$[-]_{\mathsf D}$.

This is the precise sense in which *"six-functor formalisms are secretly
the same as Gestalten with enough étaleness and properness"*: every
six-functor formalism is of the form "quasicoherent sheaves on a
Gestalt", and the "site" of geometric objects is already encoded in
$\mathbb K_{\mathsf D}$. The Morel–Voevodsky example
$[\operatorname{Spec}(\mathbb Z)]_{\mathsf{SH}} \in \mathsf{Gest}$ is
$2$-affine and generated (as a presentable
$(\infty, 2)$-category) by $[\mathbb A^{n}_{\mathbb Z}]_{\mathsf{SH}}$,
$n \geq 0$ ({{< cite "scholze-gestalten" "Prop. 9.9" >}}).

## 15. Why the functorial form is the right one for transmutation

Three structural facts about $\mathbb K_{\mathsf D, Y}$ become transparent
in the $\mathsf D$-module description but opaque in the FM-kernel
description:

1. **Adjointability is intrinsic.** A kernel $K \in \mathsf D(X_{1} \times_{Y} X_{2})$
   corresponds to a $\mathsf D$-module morphism
   $\varphi_{K}\colon [X_{1}] \to [X_{2}]$; asking for $\varphi_{K}$ to
   admit a linear left or right adjoint is a *direct* condition inside
   $\mathsf{Mod}_{\mathsf D}$. In the FM description the same condition
   must be unwound kernel-by-kernel via Fourier–Mukai.
2. **Self-duality and the trace.** Statements like *"$[Y]$ is self-dual over
   $[X]$"*, *"$[X] \otimes_{[Y]} [X]^{\vee} \simeq [X \times_{Y} X]$"*, or
   *"the trace of a kernel is a morphism in $\mathsf D(Y)$"* are naked
   symmetric-monoidal statements inside $\mathsf{Mod}_{\mathsf D}$.
3. **Functoriality in $Y$.** As $Y$ varies, $\mathbb K_{\mathsf D, Y}$
   is manifestly functorial via change of base in $\mathsf{Mod}_{\mathsf D}$.
   This is the mechanism through which base-change properties for $f$-suave
   and $f$-prim objects propagate, and it is what makes the iteration
   producing the Stefanich ring $A_{\mathsf D}$ well-defined.

In what follows we use the notation $[X] \to [Y]$ for a
$\mathsf D$-module morphism whenever functoriality makes the discussion
cleaner, and the concrete kernel $K \in \mathsf D(X \times_{Y} X')$
whenever computation is required.

---

# Part V · Suave, prim, and the étale/proper picture

## 16. Suave and prim morphisms

Dropping the invertibility half of cohomological smoothness
({{< thmref "thm-d-smooth-kernel" >}}, condition 2) produces a larger, more
robust class of morphisms. The definition below appears in
{{< cite "scholze-six" "Lecture VI, def:suaveprimsheaves" >}}; the names *suave* and *prim* are
due to {{< cite "heyer-mann" >}}, replacing the overloaded "smooth" and
"proper" used in earlier versions of these notes.

{{< definition title="Suave and prim morphisms" id="def-suave-prim" >}}
Let $f\colon X \to Y$ be a morphism in $E$, and let
$[X] \to [Y]$ be the corresponding morphism in $\mathbb K_{\mathsf D, Y}$
(realising to $f_{!}$); under the identification of
{{< thmref "prop-kernel-eq" >}}, this is
$\mathbf 1_{X} \in \mathsf{Hom}_{\mathbb K_{\mathsf D, Y}}(X, Y) = \mathsf D(X)$.
We say:

- $f$ is **weakly suave** if $[X] \to [Y]$ is a left adjoint in
  $\mathbb K_{\mathsf D, Y}$ — i.e. admits a right adjoint
  $\omega_{f} \in \mathsf D(X)$.
- $f$ is **suave** if additionally $[X]$ is dualizable over $[Y]$, which by
  {{< cite "aoki-motives" >}} (lemma on three equivalent dualizability
  characterisations) amounts to saying the pullback
  $\mathsf{Mod}_{[Y]}(\mathcal C) \to \mathsf{Mod}_{[X]}(\mathcal C)$
  also admits a linear left adjoint.
- $f$ is **weakly prim** / **prim** are the dual notions in
  $\mathsf{Hom}_{\mathbb K_{\mathsf D, Y}}(Y, X)$ — concretely, *"$f_{*}$
  has a $\mathsf D(Y)$-linear left adjoint"* (dually to the suave condition
  on $f_{!}$).
{{< /definition >}}

{{< remark >}}
**Why two names?** Suaveness packages the *structural* half of $\mathsf D$-
cohomological smoothness: $f^{!} = \omega_{f} \otimes f^{*}$ up to a
twisting object $\omega_{f}$, but without demanding that $\omega_{f}$ be
invertible. One recovers cohomological smoothness as
*suave + invertible dualizing object*
({{< cite "scholze-six" "Lecture VI" >}}).

Concretely, $f$-suaveness of $A \in \mathsf D(X)$ produces the *Verdier dual*
$\mathbb D_{f}(A) = \underline{\mathrm{Hom}}(A, f^{!}\mathbf 1_{Y})$ as the
right-adjoint kernel; Verdier biduality $A \simeq \mathbb D_{f}\mathbb D_{f}(A)$
is automatic, and formation of $\mathbb D_{f}$ commutes with base change
({{< cite "scholze-six" "Lecture VI, prop:suavesheafproperties" >}}).
{{< /remark >}}

### Closure properties

Being suave or prim is stable under base change (since base change gives a
$2$-functor of $2$-categories of kernel and adjunctions are preserved).
$f$-suave and $f$-prim objects are also closed under retracts
({{< cite "scholze-six" "Lecture VI" >}}) and, where $\mathsf D$
is compatible with the relevant colimits, under fibres and cofibres.

{{< example >}}
Over the identity $f = \mathrm{id}_{Y}$,

$$
    A \text{ is } f\text{-suave} \iff A \text{ is } f\text{-prim} \iff A \text{ is dualizable in } \mathsf D(Y).
$$

So suave/prim generalise fibrewise dualizability
({{< cite "scholze-six" "Lecture VI" >}}).
{{< /example >}}

{{< example title="From the Gestalten picture" >}}
Under the transmutation of {{< thmref "thm-transmutation" >}}, for any
$f\colon X \to Y$ in $\mathcal C$ we have:

- $[f]_{\mathsf D}$ is *always* $1$-étale and $1$-proper at the next
  categorical level;
- $f$ is $\mathsf D$-suave iff $[f]_{\mathsf D}$ is $0$-suave;
- $f$ is $\mathsf D$-prim iff $[f]_{\mathsf D}$ is $0$-prim.

In the Gestalten dictionary, the relevant datum is the relative
$1$-truncation $(B/A)_{1}^{!} \in A_{2} = \mathbb K_{\mathsf D, Y}$ of the
map of Stefanich rings $A = A_{\mathsf D, Y} \to B = A_{\mathsf D, X}$; $f$
is $\mathsf D$-suave precisely when $(B/A)_{1}^{!}$ is $1$-dualizable over
$A_{1}$ ({{< cite "scholze-gestalten" "Rem. 9.6" >}}).
{{< /example >}}

## 17. The diagonal: from $f^{!}$ to $f^{*}$

The next structural question is: *when* do $f^{!}$ and $f^{*}$ coincide
— up to isomorphism, not merely twist? Equivalently, when is
$\omega_{f} \simeq \mathbf 1$?

Using the diagonal factorisation
{{< tikzcd >}}
X \ar[dr, "\Delta_{f}"] \ar[drr, "\mathrm{id}_{X}", bend left] \ar[ddr, "\mathrm{id}_{X}"', bend right] & & \\
& X \times_{Y} X \ar[r, "\pi_{2}"] \ar[d, "\pi_{1}"'] \ar[dr, phantom, pos=0.3, "\lrcorner"] & X \ar[d, "f"] \\
& X \ar[r, "f"'] & Y
{{< /tikzcd >}}
one builds a canonical morphism $f^{!} \to f^{*}$ *provided* the diagonal
satisfies an inductive étaleness hypothesis $\Delta_{f}^{*} \simeq \Delta_{f}^{!}$:

$$
    f^{!}
    \;\simeq\; \Delta_{f}^{*} \pi_{2}^{*} f^{!}
    \;\xrightarrow{\;\sim\;}\; \Delta_{f}^{!} \pi_{2}^{*} f^{!}
    \;\longrightarrow\; \Delta_{f}^{!} \pi_{1}^{!} f^{*}
    \;\simeq\; f^{*}.
$$

If $f$ is additionally $\mathsf D$-suave, the middle arrow is an equivalence
too, giving $f^{!} \simeq f^{*}$.

For the recursion on the diagonal to *terminate*, we need a truncatedness
hypothesis on $f$: the diagonal of an $n$-truncated morphism is
$(n-1)$-truncated, so the recursion reaches $(-2)$-truncated (iso)
morphisms in finitely many steps.

{{< definition title="Cohomologically étale and proper, inductively" id="def-d-etale-inductive" >}}
Let $f\colon X \to Y$ be $n$-truncated in $E$ for some $n$.

- $f$ is **cohomologically étale** if $\mathbf 1_{X}$ is $f$-suave and
  $\Delta_{f}$ is either cohomologically étale or an isomorphism.
- $f$ is **cohomologically proper** if $\mathbf 1_{X}$ is $f$-prim and
  $\Delta_{f}$ is either cohomologically proper or an isomorphism.

({{< cite "scholze-six" "Lecture VI, def:cohometale/cohomproper" >}}.)
{{< /definition >}}

{{< proposition id="prop-etale-proper-check" >}}
Let $f\colon X \to Y$ be truncated in $E$.

1. If $\Delta_{f}$ is cohomologically étale, the following are equivalent:
   (a) $f$ is cohomologically étale;
   (b) $f^{!}\mathbf 1_{Y} \simeq f^{*}\mathbf 1_{Y}$ on global sections;
   (c) $f^{!} \xrightarrow{\sim} f^{*}$.

2. If $\Delta_{f}$ is cohomologically proper, the following are equivalent:
   (a$'$) $f$ is cohomologically proper;
   (b$'$) $f_{!}\mathbf 1_{X} \simeq f_{*}\mathbf 1_{X}$ on global sections;
   (c$'$) $f_{!} \xrightarrow{\sim} f_{*}$.

({{< cite "scholze-six" "Lecture VI, prop:checkcohometale" >}}.)
{{< /proposition >}}

As a consequence, the natural transformation $f_{!} \to f_{*}$ that often
exists in practice for separated maps — and that is sometimes built into
the formalism by hand, as in Gaitsgory–Rozenblyum — is *constructed*
directly from the data we already have
({{< cite "scholze-six" "Lecture VI" >}}).

Finally, by Dauser–Kuijper {{< cite "dauser-kuijper" >}}, given the classes
$I$ of cohomologically étale and $P$ of cohomologically proper morphisms,
the functors $\otimes$ and $f^{*}$ determine $f_{!}$ *uniquely up to all
higher coherences* — answering a conjecture in the original version of
Scholze's notes.

## 18. Aoki's one-step reformulation

The inductive definition of cohomologically étale and proper is clean but
requires unfolding truncations. Aoki {{< cite "aoki-motives" >}} observed
that once one has suave/prim in the *functorial* form
{{< thmref "def-kernel-fun" >}}, one can cut out the classes of interest in
a single step by passing through *monomorphisms* and the diagonal.

{{< definition title="Open and closed immersions" id="def-immersion" >}}
A morphism $f\colon Y \to X$ of stacks is an **open immersion** if it is a
suave monomorphism, and a **closed immersion** if it is a prim monomorphism
({{< cite "aoki-motives" >}}, §3, immersions).
{{< /definition >}}

{{< lemma title="Immersions as fully faithful linear adjoints" id="lem-immersion-adj" >}}
$f\colon Y \to X$ is an open (resp. closed) immersion iff the induced
$[X] \to [Y]$ admits a fully faithful $[X]$-linear left (resp. right)
adjoint
({{< cite "aoki-motives" >}}).
{{< /lemma >}}

{{< proof >}}
Only the open case; closed is analogous. $(\Rightarrow)$ Weak suaveness
gives a linear left adjoint $f_{\natural}$. The left-adjointability of
{{< tikzcd >}}
{[X]} \ar[r] \ar[d] & {[Y]} \ar[d] \\
{[Y]} \ar[r] & {[Y]}
{{< /tikzcd >}}
forces the unit $\mathrm{id} \to f^{*} f_{\natural}$ to be an equivalence,
i.e. $f_{\natural}$ is fully faithful.

$(\Leftarrow)$ Fully faithfulness makes $[Y] \to [Y] \otimes_{[X]} [Y]$ an
equivalence after passing to adjoints, so $f$ is a monomorphism. Self-duality
of $[Y]$ over $[X]$ gives suaveness; combined, an open immersion.
{{< /proof >}}

{{< definition title="Unramified, étale, separated, proper" id="def-aoki-classes" >}}
A static morphism $f$ of stacks is:

- **unramified** if $\Delta_{f}$ is an open immersion;
- **étale** if $f$ is suave and unramified;
- **separated** if $\Delta_{f}$ is a closed immersion;
- **proper** if $f$ is prim and separated

({{< cite "aoki-motives" >}}, §3, unramified/étale/separated/proper).
{{< /definition >}}

{{< remark title="Why static?" >}}
Recall that $g$ is a *monomorphism* in an $(\infty,1)$-category iff its
diagonal $\Delta_{g}$ is an equivalence. For a **static** (i.e.
$0$-truncated, equivalently classical/discrete) morphism
$f\colon Y \to X$, both source and target are $0$-truncated, so
$Y \times_{X} Y$ is $0$-truncated and $\Delta_{f}\colon Y \to Y \times_{X} Y$
is *automatically* a monomorphism. Thus the condition "$\Delta_{f}$ is an
open (resp. closed) immersion" reduces to the suaveness (resp. primness)
of $\Delta_{f}$ — no separate mono hypothesis is needed. Without the
staticity assumption, requiring $\Delta_{f}$ to be an open/closed
immersion would impose extra content (namely, that $\Delta_{f}$ be a mono
at all), and the definition would cut out a genuinely different class.
{{< /remark >}}

{{< remark title="Relation with the inductive definition" >}}
{{< thmref "def-d-etale-inductive" >}} terminates by truncatedness and
recovers the same class; {{< thmref "def-aoki-classes" >}} packages the
same content in one step by requiring that $\Delta_{f}$ *itself* be a
suave monomorphism (for étale) or prim monomorphism (for proper),
bypassing the recursion. Essentially, being an open/closed immersion
already builds in all the truncated-diagonal data at once.
{{< /remark >}}

### Sanity checks

{{< example >}}
Any étale geometric morphism of toposes $\mathcal Y \to \mathcal X$ — i.e.
a morphism of the form $\mathcal X_{/X} \to \mathcal X$ — determines a
weakly suave morphism of stacks over $\mathsf{Pr}$
({{< cite "lurie-htt" "Rem. 6.3.5.12" >}}).
{{< /example >}}

{{< example >}}
Not every proper morphism of toposes
({{< cite "lurie-htt" "Def. 7.3.1.4" >}}) determines a prim morphism of
stacks over $\mathsf{Pr}$. However, for the sheafified version,
$\mathsf{Shv}(\mathcal X; \mathsf{Sp}) \to \mathsf{Shv}(\mathcal Y; \mathsf{Sp})$
is prim over $\mathsf{Pr}_{\mathrm{st}}$
({{< cite "aoki-motives" >}}).
{{< /example >}}

{{< example >}}
For a morphism $Y \to X$ of qcqs schemes, the corresponding morphism of
stacks over $\mathsf{Pr}_{\mathrm{st}}$ is prim
({{< cite "aoki-motives" >}}).
{{< /example >}}

### Coda: six operations for open stacks

Aoki's formulation has one further dividend: it allows one to build a
six-functor formalism in situations *without access to compactification*,
by using CLL directly with $I = P = $ (exceptional morphisms) — the class
of $n$-truncated maps along which $[Y]$ is iteratively dualizable over
$[Y]^{\otimes_{[X]} S^{n-1}}$. The proof hinges on checking the
$(E, E)$-biadjointability condition in {{< thmref "thm-cll-universal" >}},
which — via the presentable functorial description — reduces to two
Beck–Chevalley conditions plus a double-BC compatibility
({{< cite "aoki-motives" >}}). This recovers the classical
six operations on locally compact Hausdorff spaces of countable weight
built from open subsets of $\mathbb R^{n}$, and — more importantly for
the Gestalten programme — provides a uniform framework into which
motivic, algebraic, and analytic examples slot without needing
compactification as an input axiom.

---

## References

<span id="ref-liu-zheng"></span>
**[LZ2012]**
Yifeng Liu and Weizhe Zheng.
*Enhanced six operations and base change theorem for higher Artin stacks*.
arXiv:1211.5948 (2012). <https://arxiv.org/abs/1211.5948>

<span id="ref-lu-zheng"></span>
**[LuZ2022]**
Qing Lu and Weizhe Zheng.
*Categorical traces and a relative Lefschetz–Verdier formula*.
Forum Math. Sigma **10** (2022), e10. <https://arxiv.org/abs/2005.08522>

<span id="ref-mann-rigid"></span>
**[Mann2022]**
Lucas Mann.
*A p-Adic 6-Functor Formalism in Rigid-Analytic Geometry*.
arXiv:2206.02022 (2022). <https://arxiv.org/abs/2206.02022>

<span id="ref-heyer-mann"></span>
**[Heyer–Mann]**
Claudius Heyer and Lucas Mann.
*6-Functor Formalisms and Smooth Representations*.
arXiv:2410.13038 (2024). <https://arxiv.org/abs/2410.13038>

<span id="ref-scholze-six"></span>
**[SixFunctor]**
Peter Scholze.
*Six-Functor Formalisms*. Lecture notes, Bonn (2025). arXiv:2510.26269.

<span id="ref-scholze-gestalten"></span>
**[Gestalten]**
Peter Scholze.
*Geometry and Higher Category Theory*. Lecture notes, Bonn (Winter 2025/26).

<span id="ref-fargues-scholze"></span>
**[Fargues–Scholze]**
Laurent Fargues and Peter Scholze.
*Geometrization of the local Langlands correspondence*.
arXiv:2102.13459 (2021). <https://arxiv.org/abs/2102.13459>

<span id="ref-stefanich-thesis"></span>
**[Stefanich2020]**
Germán Stefanich.
*Presentable $(\infty,n)$-categories*.
arXiv:2011.03035 (2020). <https://arxiv.org/abs/2011.03035>

<span id="ref-cll-universal"></span>
**[CLL2025]**
Bastiaan Cnossen, Tobias Lenz, Sil Linskens.
*Universal six-functor formalisms*.
arXiv:2505.19192 (2025). <https://arxiv.org/abs/2505.19192>

<span id="ref-morel-voevodsky"></span>
**[MV1999]**
Fabien Morel and Vladimir Voevodsky.
*$\mathbb A^{1}$-homotopy theory of schemes*.
Publ. Math. IHÉS **90** (1999), 45–143.

<span id="ref-ayoub"></span>
**[Ayoub2007]**
Joseph Ayoub.
*Les six opérations de Grothendieck et le formalisme des cycles évanescents dans le monde motivique*.
Astérisque **314–315** (2007).

<span id="ref-cisinski-deglise"></span>
**[CD2019]**
Denis-Charles Cisinski and Frédéric Déglise.
*Triangulated Categories of Mixed Motives*.
Springer Monographs in Mathematics (2019).

<span id="ref-drew-gallauer"></span>
**[DG2022]**
Brad Drew and Martin Gallauer.
*The universal six-functor formalism*.
Ann. K-Theory **7** (2022), 599–649. <https://arxiv.org/abs/2009.13610>

<span id="ref-dauser-kuijper"></span>
**[DK2025]**
Adam Dauser and Josefien Kuijper.
*Uniqueness of six-functor formalisms*.
arXiv:2412.15780 (2025). <https://arxiv.org/abs/2412.15780>

<span id="ref-aoki-motives"></span>
**[Aoki]**
Ko Aoki.
*Algebraic 2-motives and ring stacks*.
Preprint (2025).

<span id="ref-lurie-htt"></span>
**[Lurie, HTT]**
Jacob Lurie.
*Higher Topos Theory*.
Ann. Math. Stud. 170, Princeton Univ. Press (2009). <https://www.math.ias.edu/~lurie/papers/HTT.pdf>