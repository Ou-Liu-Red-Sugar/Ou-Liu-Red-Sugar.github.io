---
title: "Compactly assembled categories"
date: 2026-04-24
draft: false
math: true
weight: 20
tags:
  - compactly assembled categories
  - dualizable categories
  - presentable categories
  - higher algebra
categories:
  - Mathematics
ShowToc: true
TocOpen: false
description: >
  Dualizable stable categories from the compactly assembled viewpoint: R-linear
  categories, dualizability in $\mathsf{Pr}_{\mathrm{st}}^L$, compactly exhaustible
  objects, the Lurie–Clausen characterisation, and the symmetric monoidal structure
  of $\mathsf{Pr}^L_{\mathrm{ca}}$.
---

The goal of this note is to study the dualizable stable categories — the
**compactly assembled categories**. The reasons to care about them are several:

- In practice, many categories we meet are not compactly generated
  ($\aleph_0$-presentable), but compactly assembled (compactly generated
  categories are a fortiori compactly assembled). A typical example is the
  category of sheaves $\mathsf{Shv}(X)$ on a locally compact Hausdorff space
  $X$.

- Given a topos $\mathcal{X}$ and a category $\mathcal{C}$, set
  $\mathsf{Shv}_{\mathcal{C}}(\mathcal{X}) \coloneqq \mathsf{Fun}^{\lim}(\mathcal{X}^{\mathrm{op}}, \mathcal{C})$
  (sensible because every colimit in a topos is van Kampen, i.e. of
  descent type). One would like a notion of $\mathcal{C}$-valued structure
  sheaf on $\mathcal{X}$. One route is the **classifying topos**: a topos
  $\mathcal{E}$ equipped with a universal object
  $\mathcal{F} \in \mathsf{Shv}_{\mathcal{C}}(\mathcal{E})$ such that for every
  topos $\mathcal{X}$ the assignment $f^* \mapsto f^*\mathcal{F}$ gives an
  equivalence
  \[
      \mathsf{Fun}^*(\mathcal{E}, \mathcal{X}) \xrightarrow{\;\sim\;} \mathsf{Shv}_{\mathcal{C}}(\mathcal{X});
  \]
  then $f^*\mathcal{F} \in \mathsf{Shv}_{\mathcal{C}}(\mathcal{X})$ is the
  universal $\mathcal{C}$-valued sheaf $\mathcal{O}_{\mathcal{X}}$. Such a
  classifying topos need not exist — but when $\mathcal{C}$ is compactly
  assembled, it always does, and is given by
  $\mathsf{Fun}^{\omega}(\mathcal{C}, \mathsf{An})$.

- Consider $\mathsf{Pr}_{\mathbb{S}}^L = \mathsf{Pr}_{\mathrm{st}}^L$, the
  category of $\mathbb{S}$-linear presentable categories. The compactly
  assembled stable categories are exactly the dualizable objects inside it;
  this gives them a status analogous to finite-dimensional vector spaces. From
  the K-theoretic standpoint this is our main reason to study them.

## Dualizability in $R$-linear categories

For a commutative ring spectrum $R$, $\mathsf{Mod}_R$ is automatically
presentable and a commutative algebra in $(\mathsf{Pr}^L, \otimes)$ under the
Lurie tensor product, so we can form the category of modules
$\mathsf{Mod}_{\mathsf{Mod}_R}(\mathsf{Pr}^L)$.

{{< definition >}}
Let $R$ be a commutative ring spectrum. A presentable category $\mathcal{C}$ is
**$R$-linear** if $\mathcal{C} \in \mathsf{Mod}_{\mathsf{Mod}_R}(\mathsf{Pr}^L)$.
Write $\mathsf{Pr}_R^L$ for the category of $R$-linear categories.
{{< /definition >}}

Since $\mathsf{Sp} \simeq \mathsf{Mod}_{\mathbb{S}}$, we have
$\mathsf{Pr}_{\mathbb{S}}^L \simeq \mathsf{Pr}_{\mathrm{st}}^L$: on every
presentable stable $\mathcal{C}$ there is a canonical action
$\mathsf{Sp} \otimes \mathcal{C} \to \mathcal{C}$ preserving colimits in each
variable.

### Dualizable objects

{{< definition id="def-dualizable" >}}
Let $\mathcal{C}$ be a symmetric monoidal category and $X, Y \in \mathcal{C}$.
A map $\mathrm{ev}\colon Y \otimes X \to \mathbb{1}$ exhibits $Y$ as a **dual**
of $X$ if there is $\mathrm{coev}\colon \mathbb{1} \to X \otimes Y$ satisfying
the **triangle identities**:
{{< tikzcd >}}
& X \otimes Y \otimes X \ar[dr,"\operatorname{id} \otimes \mathrm{ev}"] \\
X \ar[rr,equal]\ar[ur,"\mathrm{coev} \otimes \operatorname{id}"] && X
{{< /tikzcd >}}
{{< tikzcd >}}
& Y \otimes X \otimes Y \ar[dr,"\mathrm{ev} \otimes \operatorname{id}"] \\
Y \ar[ur,"\operatorname{id} \otimes \mathrm{coev}"] \ar[rr,equal] && Y
{{< /tikzcd >}}

We then call $\mathrm{ev}$ the **evaluation** and $\mathrm{coev}$ the
**coevaluation**, and call $(Y, \mathrm{ev})$ **dualizing data** for $X$;
$X$ is a **dualizable object**.
{{< /definition >}}

{{< lemma id="lem-retract-dualizable" >}}
In an idempotent-complete symmetric monoidal category $\mathcal{C}$, dualizable
objects are closed under retracts.
{{< /lemma >}}

{{< proof >}}
Let $X \in \mathcal{C}$ be dualizable with dual $X^{\vee}$, and let
$i\colon A \rightleftarrows X \colon r$ with $r \circ i = \operatorname{id}_A$.
Set $e \coloneqq i \circ r\colon X \to X$.

Dualizing produces an idempotent $e^{\vee}\colon X^{\vee} \to X^{\vee}$,
\[
    e^{\vee} \coloneqq
    X^{\vee}
    \xrightarrow{\operatorname{id} \otimes \mathrm{coev}}
    X^{\vee} \otimes X \otimes X^{\vee}
    \xrightarrow{\operatorname{id} \otimes e \otimes \operatorname{id}}
    X^{\vee} \otimes X \otimes X^{\vee}
    \xrightarrow{\mathrm{ev} \otimes \operatorname{id}}
    X^{\vee}.
\]
By idempotent completeness it splits: there are $A^{\vee} \in \mathcal{C}$ and
$i'\colon A^{\vee} \rightleftarrows X^{\vee} \colon r'$ with
$r' \circ i' = \operatorname{id}_{A^{\vee}}$ and $i' \circ r' = e^{\vee}$.

Define
\begin{align*}
    \mathrm{ev}_A &\colon A^{\vee} \otimes A
    \xrightarrow{i' \otimes i} X^{\vee} \otimes X
    \xrightarrow{\mathrm{ev}_X} \mathbb{1}, \\
    \mathrm{coev}_A &\colon \mathbb{1}
    \xrightarrow{\mathrm{coev}_X} X \otimes X^{\vee}
    \xrightarrow{r \otimes r'} A \otimes A^{\vee}.
\end{align*}

We verify the first triangle identity; the second is analogous. The composite
$(\operatorname{id}_A \otimes \mathrm{ev}_A) \circ (\mathrm{coev}_A \otimes \operatorname{id}_A)$
unfolds to
\[
    A \xrightarrow{i} X
    \xrightarrow{\mathrm{coev}_X \otimes \operatorname{id}}
    X \otimes X^{\vee} \otimes X
    \xrightarrow{\operatorname{id} \otimes e^{\vee} \otimes \operatorname{id}}
    X \otimes X^{\vee} \otimes X
    \xrightarrow{\operatorname{id} \otimes \mathrm{ev}_X}
    X \xrightarrow{r} A.
\]
Using the adjunction identity
$(\operatorname{id} \otimes e^{\vee}) \circ \mathrm{coev}_X = (e \otimes \operatorname{id}) \circ \mathrm{coev}_X$,
this rewrites as
$r \circ e \circ \big[(\operatorname{id} \otimes \mathrm{ev}_X) \circ (\mathrm{coev}_X \otimes \operatorname{id})\big] \circ i$.
The bracketed term is $\operatorname{id}_X$ by $X$'s triangle identity, and
$r \circ e \circ i = r \circ i \circ r \circ i = \operatorname{id}_A$.
{{< /proof >}}

### Compactly generated categories are dualizable

Let $\mathcal{C}$ be a compactly generated stable category. As a compactly
generated category we have $\mathcal{C} \simeq \mathsf{Ind}(\mathcal{C}^{\aleph_0})$,
and as a stable category we have the mapping-spectrum functor
$\mathrm{hom}_{\mathcal{C}}\colon \mathcal{C}^{\mathrm{op}} \times \mathcal{C} \to \mathsf{Sp}$,
determined by
{{< tikzcd >}}
& \mathsf{Sp} \ar[d,"\Omega^{\infty}"] \\
\mathcal{C}^{\mathrm{op}} \times \mathcal{C} \ar[ur,dashed,"\mathrm{hom}_{\mathcal{C}}"] \ar[r,"\mathrm{Hom}_{\mathcal{C}}"'] & \mathsf{An}.
{{< /tikzcd >}}

Currying gives
$\rho_{\mathcal{C}}\colon \mathcal{C}^{\mathrm{op}} \to \mathsf{Fun}(\mathcal{C}, \mathsf{Sp})$,
$\rho_{\mathcal{C}}(D) = \mathrm{hom}_{\mathcal{C}}(D, -)$. Since
$\mathrm{hom}_{\mathcal{C}}$ is the internal-Hom functor, it preserves limits
in the first variable, so $\rho_{\mathcal{C}}$ preserves limits.

Restricting to $(\mathcal{C}^{\aleph_0})^{\mathrm{op}}$ gives an exact functor
$\rho_{\mathcal{C}}^{\aleph_0}\colon (\mathcal{C}^{\aleph_0})^{\mathrm{op}} \to \mathsf{Fun}(\mathcal{C}, \mathsf{Sp})$
(left exactness plus the stable target gives exactness). For a compact
$D \in \mathcal{C}^{\aleph_0}$ the functor $\mathrm{hom}_{\mathcal{C}}(D, -)$
preserves filtered colimits (by compactness) and is exact, hence preserves all
colimits. So $\rho_{\mathcal{C}}^{\aleph_0}$ lands in
$\mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})$. By the Ind-extension universal
property,
\[
    \mathsf{Fun}^L\!\left(\mathsf{Ind}\!\left((\mathcal{C}^{\aleph_0})^{\mathrm{op}}\right),\, \mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})\right)
    \simeq \mathsf{Fun}^{\mathrm{rex}}\!\left((\mathcal{C}^{\aleph_0})^{\mathrm{op}},\, \mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})\right),
\]
so $\rho_{\mathcal{C}}^{\aleph_0}$ uniquely extends to a colimit-preserving
$\mathrm{P}\colon \mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}) \to \mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})$.
Since $\mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})$ is the internal-Hom in
$\mathsf{Pr}^L$, $\mathrm{P}$ corresponds to a morphism in $\mathsf{Pr}^L$,
\[
    \mathsf{Fun}^L\!\left(\mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}),\, \mathsf{Fun}^L(\mathcal{C}, \mathsf{Sp})\right)
    \simeq \mathsf{Fun}^L\!\left(\mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}) \otimes \mathcal{C},\, \mathsf{Sp}\right),
\]
and we obtain the **evaluation**
\[
    \mathrm{ev}\colon \mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}) \otimes \mathcal{C} \to \mathsf{Sp}.
\]

Similarly $\mathrm{hom}_{\mathcal{C}^{\aleph_0}}\colon (\mathcal{C}^{\aleph_0})^{\mathrm{op}} \times \mathcal{C}^{\aleph_0} \to \mathsf{Sp}$
is exact in both variables and gives an object of
$\mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}) \otimes \mathsf{Ind}(\mathcal{C}^{\aleph_0})$,
hence the **coevaluation**
\[
    \mathrm{coev}\colon \mathsf{Sp} \to \mathcal{C} \otimes \mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}}).
\]
The triangle identities check out, so $\mathcal{C}$ is dualizable in
$\mathsf{Pr}^L_{\mathrm{st}}$ with
$\mathcal{C}^{\vee} \simeq \mathsf{Ind}((\mathcal{C}^{\aleph_0})^{\mathrm{op}})$.

## Compactly assembled categories

The natural question is: what does a general dualizable object in
$\mathsf{Pr}^L_{\mathrm{st}}$ look like? This is the compactly assembled
setting.

By what we just established, compactly generated stable categories are
dualizable. $\mathsf{Pr}_{\mathrm{st}}^L$ is idempotent-complete, so
{{< thmref "lem-retract-dualizable" >}} tells us retracts of compactly
generated categories are still dualizable.

Conversely, every dualizable object is a retract of a compactly generated one.
Let $\mathcal{C} \in \mathsf{Pr}^L_{\mathrm{st}}$ be dualizable with dual
$\mathcal{C}^{\vee}$. Pick a regular cardinal $\kappa$ such that $\mathcal{C}$
is $\kappa$-presentable; the canonical functor
\[
    \varphi\colon \mathcal{D} \coloneqq \mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}
\]
is a left Bousfield localization ({{< cite "sheaves-on-manifolds" "Cor. 2.1.27" >}}).
Localizations in $\mathsf{Pr}^L$ are preserved by tensor product
({{< cite "sheaves-on-manifolds" "Ex. 2.8.4" >}}), so
$\varphi \otimes \mathrm{id}_{\mathcal{C}^{\vee}}\colon \mathcal{D} \otimes \mathcal{C}^{\vee} \to \mathcal{C} \otimes \mathcal{C}^{\vee}$
is also a localization, in particular essentially surjective. Dualizability
identifies these tensor products with
$\mathsf{Fun}^L(\mathcal{C}, \mathcal{D})$ and
$\mathsf{Fun}^L(\mathcal{C}, \mathcal{C})$, so
$\mathrm{id}_{\mathcal{C}} \in \mathsf{Fun}^L(\mathcal{C}, \mathcal{C})$ has
a preimage $\psi\colon \mathcal{C} \to \mathcal{D}$ with
$\varphi \circ \psi \simeq \mathrm{id}_{\mathcal{C}}$. So $\mathcal{C}$ is a
retract of the compactly generated $\mathcal{D}$ in $\mathsf{Pr}^L$.

Dualizable objects in $\mathsf{Pr}_{\mathrm{st}}^L$ are therefore exactly the
retracts of compactly generated stable categories. This is an external
characterisation; we now give an intrinsic one.

{{< definition id="def-compact-morphism" title="Compact and compactly exhaustible" >}}
Let $\mathcal{C}$ be presentable.

1. A morphism $f\colon X \to Y$ in $\mathcal{C}$ is a **compact morphism** if,
   for every filtered colimit $Z \simeq \operatorname*{colim}_i Z_i$, the square
   {{< tikzcd >}}
   \operatorname*{colim}_i \operatorname{Hom}(Y,Z_i) \ar[r,"f^*"]\ar[d] & \operatorname*{colim}_i \operatorname{Hom}(X,Z_i) \ar[d] \\
   \operatorname{Hom}(Y,Z) \ar[r,"f^*"] & \operatorname{Hom}(X,Z)
   {{< /tikzcd >}}
   is a pullback. Equivalently, the fibre
   $\operatorname{fib}(\operatorname{Hom}(Y,Z) \xrightarrow{f^*} \operatorname{Hom}(X,Z))$
   preserves filtered colimits in $Z$.
2. An object $X$ is **compactly exhaustible** if
   \[
       X \simeq \operatorname*{colim}\left(X_0 \to X_1 \to X_2 \to \cdots\right)
   \]
   with every $X_i \to X_{i+1}$ a compact morphism.
3. $\mathcal{C}$ is **compactly assembled** if it is generated under colimits
   by compactly exhaustible objects.
{{< /definition >}}

{{< remark >}}
When $X$ is compact, the map $0 \to X$ is a compact morphism, hence every
compact object is compactly exhaustible (take the constant sequence). In
particular compactly generated categories are compactly assembled.
{{< /remark >}}

We now identify compactly assembled categories intrinsically.

{{< lemma id="lem-presentable-ca" >}}
Let $\mathcal{C}$ be $\kappa$-presentable. Then $\mathcal{C}$ is compactly
assembled iff the colimit functor
\[
    k\colon \mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}
\]
has a left adjoint. The property "$k$ has a left adjoint" is closed under
retracts in $\mathsf{Pr}^L$.
{{< /lemma >}}

{{< proof >}}
**($\Rightarrow$)** Suppose $\mathcal{C}$ is compactly assembled. Then
$\mathcal{C}$ is $\aleph_1$-presentable (every compactly exhaustible object is
$\aleph_1$-compact, and conversely every $\aleph_1$-compact object is
compactly exhaustible). Construct the left adjoint
$\hat{y}\colon \mathcal{C} \to \mathsf{Ind}(\mathcal{C}^{\aleph_1})$
explicitly: for $X \in \mathcal{C}$, write
$X \simeq \operatorname*{colim}_n X_n$ with $X_n \to X_{n+1}$ compact, and set
\[
    \hat{y}(X) \coloneqq \operatorname*{colim}_n y(X_n),
\]
the colimit computed in $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$. This $\hat{y}$
is fully faithful. To verify the adjunction, use that for
$Z \simeq \operatorname*{colim}_i Z_i$ filtered,
\[
    \operatorname{Hom}_{\mathcal{C}}(X, Z)
    \simeq \lim_n \operatorname{Hom}(X_n, Z)
    \simeq \lim_n \operatorname*{colim}_i \operatorname{Hom}(X_n, Z_i)
    \simeq \operatorname{Hom}_{\mathsf{Ind}}(\operatorname*{colim}_n y(X_n), \operatorname*{colim}_i y(Z_i)),
\]
where the second equivalence uses that $(\operatorname{Hom}(X_n, Z))_n$ and
$(\operatorname*{colim}_i \operatorname{Hom}(X_n, Z_i))_n$ are isomorphic in
$\mathsf{Pro}(\mathsf{An})$ — a consequence of the compact-morphism condition.
The fully faithful embedding
$\mathsf{Ind}(\mathcal{C}^{\aleph_1}) \hookrightarrow \mathsf{Ind}(\mathcal{C}^{\kappa})$
transfers the adjoint to the general $\kappa$ case.

**($\Leftarrow$)** If $\hat{y}$ exists, write
$\hat{y}(X) \simeq \operatorname*{colim}_i y(X_i)$ in
$\mathsf{Ind}(\mathcal{C}^{\kappa})$ with $X_i \in \mathcal{C}^{\kappa}$. Full
faithfulness of $\hat{y}$ and pullbacks against filtered colimits of $Z$ give
the compact-morphism pullback square at each $y(X_i) \to \hat{y}(X)$, showing
$X$ is compactly exhaustible.

Retract closure: view $\mathsf{Pr}^L$ as a $2$-category with internal
$\mathsf{Fun}^L$. By {{< cite "ramzi-dualizable" "Lem. 1.47" >}}, a $1$-morphism
$f$ in a $2$-category $\mathbb{B}$ has a left adjoint provided that
$\mathsf{Hom}_{\mathbb{B}}(X, Z)$ is idempotent-complete for every $Z$ and $f$
is a retract (in $\mathsf{Fun}([1], \mathbb{B})$) of some $g$ with a left
adjoint. For presentable $\mathcal{C}, \mathcal{D}$ the category
$\mathsf{Fun}^L(\mathcal{C}, \mathcal{D})$ is always idempotent-complete, and
for compactly generated $\mathcal{D}$ the canonical $k$ is an equivalence,
with a trivial left adjoint; retracts inherit the left adjoint.
{{< /proof >}}

{{< theorem id="thm-ca-retract" >}}
For $\mathcal{C} \in \mathsf{Pr}^L$, $\mathcal{C}$ is compactly assembled iff
it is a retract in $\mathsf{Pr}^L$ of a compactly generated category. In
$\mathsf{Pr}^L_{\mathrm{st}}$, $\mathcal{C}$ is compactly assembled iff it is
dualizable.
{{< /theorem >}}

{{< proof >}}
**($\Rightarrow$)** If $\mathcal{C}$ is compactly assembled,
{{< thmref "lem-presentable-ca" >}} gives a left adjoint $\hat{y}$ to
$k\colon \mathcal{D} \coloneqq \mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}$.
As a localization, $k$ has fully faithful right adjoint $y$, so the counit
$\varepsilon\colon ky \xrightarrow{\sim} \operatorname{id}_{\mathcal{C}}$ is
an equivalence. Using the two adjunctions,
\[
    \operatorname{Hom}_{\mathcal{C}}(k(\hat{y}(c)), c')
    \simeq \operatorname{Hom}_{\mathcal{D}}(\hat{y}(c), y(c'))
    \simeq \operatorname{Hom}_{\mathcal{C}}(c, ky(c'))
    \simeq \operatorname{Hom}_{\mathcal{C}}(c, c'),
\]
naturally in $c'$, so $k \circ \hat{y} \simeq \operatorname{id}_{\mathcal{C}}$
by Yoneda. Since $\hat{y}$ is a left adjoint it is a $\mathsf{Pr}^L$-map,
exhibiting $\mathcal{C}$ as a retract of the compactly generated $\mathcal{D}$.

**($\Leftarrow$)** A retract of a compactly generated category has
$k\colon \mathsf{Ind}((\cdot)^{\omega}) \to (\cdot)$ an equivalence in the
compactly generated case, so the retract inherits a left adjoint to its own
$k$, and by {{< thmref "lem-presentable-ca" >}} it is compactly assembled.
{{< /proof >}}

Combining with the earlier characterisation: in
$\mathsf{Pr}^L_{\mathrm{st}}$, dualizable objects are exactly retracts of
compactly generated stable categories, so the intrinsic notion
(compactly assembled) and the external notion (dualizable) coincide in the
stable world.

A finer statement inside general $\mathsf{Pr}^L$:

{{< theorem id="thm-lurie-clausen" title="Lurie–Clausen" >}}
For presentable $\mathcal{C}$, the following are equivalent:

1. $\mathcal{C}$ is compactly assembled.
2. $\mathcal{C}$ is $\aleph_1$-presentable and the colimit functor
   $k\colon \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \to \mathcal{C}$ has a left
   adjoint $\hat{y}$.
3. There is a regular cardinal $\kappa$ for which $\mathcal{C}$ is
   $\kappa$-presentable and $\mathsf{Ind}(\mathcal{C}^{\kappa}) \to \mathcal{C}$
   has a left adjoint.
4. $\mathcal{C}$ is a retract in $\mathsf{Pr}^L$ of a compactly generated
   category.
5. Filtered colimits in $\mathcal{C}$ distribute over all small limits: for
   every small $K$ and filtered $I$,
   \[
       \operatorname*{colim}_{I^K} \operatorname*{lim}_K F \xrightarrow{\;\sim\;} \operatorname*{lim}_K \operatorname*{colim}_I F.
   \]
{{< /theorem >}}

{{< proof >}}
See {{< cite "sheaves-on-manifolds" "§2.3" >}}.
{{< /proof >}}

The canonical example:

{{< proposition >}}
Let $X$ be Hausdorff. The following are equivalent:

1. $\mathsf{Shv}(X)$ is compactly assembled.
2. $\mathsf{Open}(X)$ is compactly assembled.
3. $X$ is locally compact.
{{< /proposition >}}

### Properties

We record some properties; proofs are omitted.

{{< proposition >}}
In {{< thmref "thm-lurie-clausen" >}}, the left adjoint
$\hat{y}\colon \mathcal{C} \to \mathsf{Ind}(\mathcal{C}^{\aleph_1})$ is fully
faithful, i.e. the unit
$\eta^{\hat{y}}\colon \operatorname{id} \Rightarrow k \circ \hat{y}$ is an
equivalence.
{{< /proposition >}}

With $\hat{y} \dashv k \dashv y$ at hand we may construct a natural
transformation $\hat{y} \Rightarrow y$. Contemplate
{{< tikzcd >}}
\hat{y}ky \ar[r,"\varepsilon^{\hat{y}} y"]\ar[d,"\hat{y} \varepsilon^{y}"',"\simeq"] & y \ar[d,"y \eta^{\hat{y}}","\simeq"'] \\
\hat{y} \ar[r,"\eta^y \hat{y}"'] \ar[ur,dashed] & y k \hat{y}
{{< /tikzcd >}}
where $\hat{y}\varepsilon^y$ is an equivalence (since
$\varepsilon^y\colon ky \xrightarrow{\sim} \operatorname{id}$ and $y$ is fully
faithful) and $y\eta^{\hat{y}}$ is an equivalence (since $\hat{y}$ is fully
faithful). The dashed arrow supplies the required $\hat{y} \Rightarrow y$.

{{< proposition id="prop-compact-morphism-char" >}}
For a morphism $f\colon X \to Y$ in a compactly assembled $\mathcal{C}$, the
following are equivalent:

1. $f$ is a compact morphism.
2. $y(f)\colon y(X) \to y(Y)$ factors through $\hat{y}(Y)$.
3. $\hat{y}(f)\colon \hat{y}(X) \to \hat{y}(Y)$ factors through $y(X)$.
4. $\hat{y}(f)$ is a compact morphism in $\mathsf{Ind}(\mathcal{C}^{\aleph_1})$.
{{< /proposition >}}

So a compact morphism $f\colon X \to Y$ is recorded by a lift
{{< tikzcd >}}
\hat{y}(X) \ar[r] \ar[d] & \hat{y}(Y) \ar[d] \\
y(X) \ar[r]\ar[ur,dashed] & y(Y)
{{< /tikzcd >}}
Equivalently, compact morphisms $X \to Y$ correspond to arrows $y(X) \to \hat{y}(Y)$.

{{< definition >}}
Let $\mathcal{C}$ be compactly assembled. A **compactly assembled morphism**
$X \to Y$ is a compact morphism together with a choice of lift
$y(X) \to \hat{y}(Y)$. Set
\[
    \operatorname{Hom}_{\mathcal{C}}^{\mathrm{ca}}(X,Y) \coloneqq \operatorname{Hom}_{\mathsf{Ind}(\mathcal{C})}(y(X), \hat{y}(Y)).
\]
{{< /definition >}}

The map
$\operatorname{Hom}_{\mathcal{C}}^{\mathrm{ca}}(X,Y) \to \operatorname{Hom}_{\mathcal{C}}(X,Y)$
(via $\hat{y}(Y) \to y(Y)$) is **not** a subspace inclusion: a compactly
assembled morphism carries strictly more information (the choice of lift),
expressed as higher-homotopy data.

### Ind-extension and assembly

For compactly assembled $\mathcal{C}$ and a category $\mathcal{D}$ with
filtered colimits, any functor $F\colon \mathcal{C} \to \mathcal{D}$ has an
Ind-extension:
{{< tikzcd >}}
\mathsf{Ind}(\mathcal{C}^{\aleph_1}) \ar[r,"\mathsf{Ind}(F)"] & \mathsf{Ind}(\mathcal{D}) \ar[d,"k_{\mathcal{D}}"] \\
\mathcal{C} \ar[u,"y"] \ar[r,"F"] & \mathcal{D}
{{< /tikzcd >}}
and $k_{\mathcal{D}} \circ \mathsf{Ind}(F)$ preserves filtered colimits.
Writing $\mathsf{Fun}^{\mathrm{filt}}$ for the full subcategory of
filtered-colimit-preserving functors, Ind-extension is the equivalence
\[
    y^*\colon \mathsf{Fun}^{\mathrm{filt}}(\mathsf{Ind}(\mathcal{C}^{\aleph_1}), \mathcal{D}) \xrightarrow{\;\sim\;} \mathsf{Fun}(\mathcal{C}, \mathcal{D}).
\]

There is also $\hat{y}\colon \mathcal{C} \to \mathsf{Ind}(\mathcal{C}^{\aleph_1})$,
prompting the question: how do $y^*$ and $\hat{y}^*$ relate?

{{< lemma >}}
Let $\mathcal{C}$ be compactly assembled and $\mathcal{D}$ a category with
filtered colimits. A functor $F\colon \mathcal{C} \to \mathcal{D}$ preserves
filtered colimits iff its Ind-extension sends
$\hat{y} \Rightarrow y$ to an equivalence. Explicitly, there is an
equivalence
\[
    y^* \simeq \hat{y}^*\colon \mathsf{Fun}_{\hat{y} \Rightarrow y}^{\mathrm{filt}}(\mathsf{Ind}(\mathcal{C}^{\aleph_1}), \mathcal{D}) \xrightarrow{\;\sim\;} \mathsf{Fun}^{\mathrm{filt}}(\mathcal{C}, \mathcal{D}),
\]
where the left side consists of filtered-colimit-preserving functors sending
$\hat{y} \Rightarrow y$ to an equivalence.
{{< /lemma >}}

{{< proposition >}}
$\mathsf{Fun}^{\mathrm{filt}}(\mathcal{C}, \mathcal{D})$ is a left Bousfield
localization of $\mathsf{Fun}(\mathcal{C}, \mathcal{D})$ with localization
\[
    \mathrm{asm}_{\mathrm{filt}}\colon \mathsf{Fun}(\mathcal{C}, \mathcal{D}) \to \mathsf{Fun}^{\mathrm{filt}}(\mathcal{C}, \mathcal{D}),
    \qquad F \mapsto k_{\mathcal{D}} \circ \mathsf{Ind}(F) \circ \hat{y}.
\]
The counit
\[
    k_{\mathcal{D}} \circ \mathsf{Ind}(F) \circ \hat{y} \Rightarrow F
\]
is the **assembly map**: the terminal object of
$\mathsf{Fun}^{\mathrm{filt}}(\mathcal{C}, \mathcal{D})_{/F}$.
{{< /proposition >}}

Intuitively, the assembled functor $\mathrm{asm}_{\mathrm{filt}}(F)$ is $F$
restricted to compactly exhaustible objects, reassembled by filtered colimits.

## The category $\mathsf{Pr}^L_{\mathrm{ca}}$

The relevant functors between compactly assembled categories are those that
preserve the defining structure — compact morphisms.

{{< definition >}}
Let $\mathcal{C}$ and $\mathcal{D}$ be compactly assembled. A left adjoint
$F\colon \mathcal{C} \to \mathcal{D}$ is a **compactly assembled functor** if
it preserves compact morphisms. Let
\[
    \mathsf{Pr}^L_{\mathrm{ca}} \subset \mathsf{Pr}^L
\]
be the non-full subcategory of compactly assembled categories and compactly
assembled functors.
{{< /definition >}}

{{< proposition id="prop-ca-functor-char" >}}
1. A left adjoint $F\colon \mathcal{C} \to \mathcal{D}$ between compactly
   assembled categories preserves compact morphisms iff it commutes with
   $\hat{y}$:
   {{< tikzcd >}}
   \mathcal{C} \ar[r,"F"]\ar[d,"\hat{y}"'] & \mathcal{D} \ar[d,"\hat{y}"] \\
   \mathsf{Ind}(\mathcal{C}^{\aleph_1}) \ar[r,"\mathsf{Ind}(F^{\aleph_1})"] & \mathsf{Ind}(\mathcal{D}^{\aleph_1})
   {{< /tikzcd >}}
2. Let $F\colon \mathcal{C} \to \mathcal{D}$ be a morphism in $\mathsf{Pr}^L$
   with $\mathcal{C}$ compactly assembled. Then $F$ preserves compact
   morphisms iff $F^R$ preserves filtered colimits.
{{< /proposition >}}

Via Gabriel–Ulmer
$\mathsf{Pr}_{\aleph_1}^L \simeq \mathsf{Cat}^{\mathrm{rex}(\aleph_1)}$ we can
recognise $\mathsf{Pr}^L_{\mathrm{ca}}$ intrinsically. Since
$\mathsf{Pr}^L_{\mathrm{ca}} \subset \mathsf{Pr}_{\aleph_1}^L$, only an extra
condition on $\mathsf{Cat}^{\mathrm{rex}(\aleph_1)}$ is needed.

{{< definition >}}
Define $\mathsf{Cat}^{\mathrm{ca}}$:

- Objects are small categories $\mathcal{C}$ with countable colimits in which
  every object is compactly exhaustible (an $\mathbb{N}$-colimit along
  compact morphisms).
- Morphisms are functors preserving $\aleph_1$-small colimits and compact
  morphisms.
{{< /definition >}}

{{< proposition >}}
There is an equivalence $\mathsf{Pr}^L_{\mathrm{ca}} \simeq \mathsf{Cat}^{\mathrm{ca}}$.
{{< /proposition >}}

{{< proof >}}
**($\Rightarrow$)** For compactly assembled $\mathcal{C}$, $\mathcal{C}^{\aleph_1}$
has countable colimits, and every object is compactly exhaustible, so
$\mathcal{C}^{\aleph_1} \in \mathsf{Cat}^{\mathrm{ca}}$.

**($\Leftarrow$)** For $\mathcal{C} \in \mathsf{Cat}^{\mathrm{ca}}$, set
$\mathcal{D} = \mathsf{Ind}_{\aleph_1}(\mathcal{C})$. By
{{< thmref "lem-presentable-ca" >}}, it suffices to construct a left adjoint
to $k\colon \mathsf{Ind}(\mathcal{C}) \to \mathcal{D}$. For
$X = \operatorname*{colim}_n X_n \in \mathcal{C}$ compactly exhaustible and
any $Y \in \mathsf{Ind}(\mathcal{C})$,
\[
    \operatorname{Hom}_{\mathsf{Ind}(\mathcal{C})}(\operatorname*{colim}_n y(X_n), Y)
    \simeq \operatorname{Hom}_{\mathcal{D}}(\operatorname*{colim}_n X_n, kY)
    = \operatorname{Hom}_{\mathcal{D}}(X, kY),
\]
exhibiting $\hat{y}(X) = \operatorname*{colim}_n y(X_n)$ as the left adjoint.
{{< /proof >}}

{{< proposition >}}
1. $\mathsf{Pr}^L_{\mathrm{ca}}$ has all colimits, and the inclusion
   $\mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Pr}^L$ preserves colimits.
2. For any regular cardinal $\kappa$, the functor
   $(-)^{\kappa}\colon \mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Cat}^{\mathrm{rex,idem}}$
   preserves $\kappa$-filtered colimits.
3. $\mathsf{Pr}^L_{\mathrm{ca}}$ is $\aleph_1$-presentable.
4. $\mathsf{Pr}^L_{\mathrm{ca}} \to \mathsf{Pr}^L$ preserves finite limits;
   $\mathsf{Pr}^L_{\mathrm{ca}}$ has finite products, so is semi-additive.
{{< /proposition >}}

### Symmetric monoidal structure

Finally, we sketch the symmetric monoidal structure on
$\mathsf{Pr}^L_{\mathrm{ca}}$. In $\mathsf{Pr}^L$ the Lurie tensor product is
classified by bifunctors $F\colon \mathcal{C} \times \mathcal{D} \to \mathcal{E}$
preserving colimits in each variable. To descend to $\mathsf{Pr}^L_{\mathrm{ca}}$
we add a compact-morphism condition: for compact $f \in \mathcal{C}$ and
$g \in \mathcal{D}$, $F(f, g)$ must be a compact morphism in $\mathcal{E}$.

The universal property is then: for such $F$, there is a unique (up to
homotopy) factorisation
{{< tikzcd >}}
\mathcal{C} \times \mathcal{D} \ar[r,"\otimes"] \ar[dr,"F"'] & \mathcal{C} \otimes \mathcal{D} \ar[d,dashed,"\tilde{F}"] \\
& \mathcal{E}
{{< /tikzcd >}}

To make this concrete we use the Gabriel–Ulmer construction of
$\mathsf{Pr}_{\kappa}^L$'s monoidal structure from
{{< cite "lurie-ha" "§4.8.1" >}}. Take $\kappa = \aleph_1$. The idea: equip
$\mathsf{Cat}^{\mathrm{rex}(\aleph_1)}$ (small categories with countable
colimits) with the monoidal structure induced from $\mathsf{Cat}^{\times}$,
then transport to $\mathsf{Pr}_{\aleph_1}^L$ via duality. At this level,
\[
    \mathsf{Ind}_{\aleph_1}(\mathcal{C}_0) \otimes \mathsf{Ind}_{\aleph_1}(\mathcal{D}_0)
    \simeq \mathsf{Ind}_{\aleph_1}(\mathcal{C}_0 \otimes \mathcal{D}_0).
\]

Restricting to $\mathsf{Pr}^L_{\mathrm{ca}}$: every object of
$\mathcal{C}_0 \otimes \mathcal{D}_0$ is a countable colimit, and cofinality
lets us reduce such a colimit to an $\mathbb{N}$-colimit of compactly
exhaustible generators. This shows $\mathcal{C} \otimes \mathcal{D}$ remains
in $\mathsf{Pr}^L_{\mathrm{ca}}$. The fact that the induced
$\mathcal{C} \otimes \mathcal{D} \to \mathcal{E}$ is a valid morphism of
$\mathsf{Pr}^L_{\mathrm{ca}}$ likewise reduces to a small-category statement
via Gabriel–Ulmer.

For any compactly assembled $\mathcal{C}$ and any locally compact Hausdorff
$X$ there is a lax symmetric monoidal equivalence
\[
    \mathsf{Shv}(X, \mathcal{C}) \simeq \mathsf{Shv}(X) \otimes \mathcal{C}.
\]
Since both factors are compactly assembled, so is their tensor product;
$\mathsf{Sp}$ is compactly generated (hence compactly assembled), so
$\mathsf{Shv}(X, \mathsf{Sp})$ is compactly assembled.

Note also that $\mathsf{Sp}$ is a commutative algebra in
$\mathsf{Pr}_{\mathrm{ca}}^L$, so we may form
$\mathsf{Mod}_{\mathsf{Sp}}(\mathsf{Pr}_{\mathrm{ca}}^L)$ — the category of
compactly assembled *stable* categories, inheriting the symmetric monoidal
structure. Denote it $\mathsf{Pr}^L_{\mathrm{dual}}$.

{{< definition >}}
Let $\mathcal{C}$ be a compactly assembled stable category.

- $\mathcal{C}$ is **smooth** if $\mathsf{Sp} \to \mathcal{C} \otimes \mathcal{C}^{\vee}$
  is a strong left adjoint (its right adjoint has a right adjoint).
- $\mathcal{C}$ is **proper** if $\mathcal{C} \otimes \mathcal{C}^{\vee} \to \mathsf{Sp}$
  is a strong left adjoint.
{{< /definition >}}

## References

<ul class="refs">
<li id="ref-sheaves-on-manifolds"><strong>A. Krause, T. Nikolaus, P. Pützstück</strong>. <em>Sheaves on Manifolds</em>. 2024. <a href="https://philpuetzstueck.gitlab.io/documents/sheaves-on-manifolds.pdf">PDF</a>.</li>
<li id="ref-ramzi-dualizable"><strong>M. Ramzi</strong>. <em>Dualizable presentable $\infty$-categories</em>. 2024. <a href="https://arxiv.org/abs/2410.21537">arXiv:2410.21537</a>.</li>
<li id="ref-efimov-k-theory"><strong>A. I. Efimov</strong>. <em>K-theory and localizing invariants of large categories</em>. 2025. <a href="https://arxiv.org/abs/2405.12169">arXiv:2405.12169</a>.</li>
<li id="ref-lurie-ha"><strong>J. Lurie</strong>. <em>Higher Algebra</em>. <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.</li>
</ul>
