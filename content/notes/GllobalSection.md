---
title: "Sheaf Cohomology as Sheafification"
date: 2025-12-27
math: true
draft: false
description: "Sheaf cohomology is evaluation of the sheafification: \\(\\Gamma(X, \\mathcal{F}) \\coloneqq (L\\mathcal{F})(X)\\). Reading Mayer–Vietoris, derived Čech, pushforward, base change and the vanishing \\(H^i(\\mathrm{Spec}\\,R, \\widetilde{M}) = 0\\) directly off the sheaf condition, without spectral sequences or injective resolutions."
tags:
  - Descent
  - Barr--Beck--Lurie
  - Higher Category Theory
  - Higher Algebra
  - Sheaf Cohomology
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
aliases:
  - /global-section
  - /notes/spectral-sequences-as-bookkeeping-not-structure/
---

*This note is not part of the original lecture course; it grew out of
discussions about understanding sheaf cohomology from a derived / animated
perspective. The treatment follows Lurie's* Spectral Algebraic Geometry
*({{< cite "lurie-sag" >}}) and Mathew's work on Galois groups in stable
homotopy theory ({{< cite "mathew-galois" >}}).*

## Conventions

Throughout we work in the derived setting and **drop the $\mathrm{R}$-prefix**
on all functors. Concretely:

- All limits, colimits, and tensor products are derived. The symbol $\otimes$
  denotes derived tensor product; the classical tensor product is recovered
  as $\pi_0(- \otimes -)$.
- $\Gamma(X, \mathcal{F})$ denotes derived global sections; the classical
  $\Gamma$ is $H^0(X, \mathcal{F}) \coloneqq \pi_0\,\Gamma(X, \mathcal{F})$.
- $\Hom_R(M, N)$ denotes derived $\Hom$, so
  $\operatorname{Ext}^i_R(M, N) = \pi_{-i}\Hom_R(M, N)$.
- $\mathrm{Mod}_R$ denotes the $\infty$-category of (left) module spectra
  over a connective $\mathbb{E}_\infty$-ring $R$ (equivalently,
  $\mathsf{D}(R)$ when $R$ is discrete).
- Presheaves take values in a stable presentable category $\mathcal{D}$ —
  typically $\mathsf{D}(\mathbb{Z})$, $\mathsf{Sp}$, or $\mathrm{Mod}_R$ for
  a base ring.

The classical $1$-categorical theory is recovered by passing to $\pi_0$ at
the end.

## The thesis: cohomology = sheafification + global sections

The core observation is captured in a single line. For a scheme $X$ and a
presheaf $\mathcal{F} \in \mathrm{Fun}(\mathsf{Sch}^{\mathrm{op}}, \mathcal{D})$,
set
\[
    \boxed{\,\Gamma(X, \mathcal{F}) \coloneqq (L\mathcal{F})(X),\,}
\]
where $L\colon \mathrm{PShv}(\mathsf{Sch}, \mathcal{D}) \to \mathrm{Shv}_\tau(\mathsf{Sch}, \mathcal{D})$
is sheafification with respect to a Grothendieck topology $\tau$ (we focus on
the Zariski topology). All cohomological information about $\mathcal{F}$ is
packed into this single derived object. Three immediate consequences
illustrate the formalism.

**Mayer–Vietoris.** For an open cover $X = U \cup V$, the sheaf condition is
exactly the fibre square
{{< tikzcd >}}
\Gamma(X, \mathcal{F}) \ar[r] \ar[d] \ar[dr, phantom, very near start, "\lrcorner"] & \Gamma(U, \mathcal{F}) \ar[d] \\
\Gamma(V, \mathcal{F}) \ar[r] & \Gamma(U \cap V, \mathcal{F}).
{{< /tikzcd >}}

**Čech cohomology.** For an open cover $\mathfrak{U} = (U_i \to X)_{i \in I}$,
write
\[
    U_n \coloneqq \coprod_{(i_0, \dots, i_n) \in I^{n+1}} U_{i_0} \cap \cdots \cap U_{i_n}.
\]
The sheaf condition along $\mathfrak{U}$ unfolds into the equivalence
\[
    \Gamma(X, \mathcal{F}) \xrightarrow{\;\sim\;} \lim_{[n] \in \mathbf{\Delta}} \Gamma(U_n, \mathcal{F}).
\]
We call the right-hand side the **derived Čech complex** of $\mathfrak{U}$.

**Pushforward and base change.** For $f\colon Y \to X$, the pushforward
$f_*\colon \mathrm{Shv}_\tau(Y, \mathcal{D}) \to \mathrm{Shv}_\tau(X, \mathcal{D})$
is determined by $\Gamma(X, f_* \mathcal{F}) \simeq \Gamma(Y, \mathcal{F})$.
Higher direct images are
$H^i(X, f_*\mathcal{F}) = \pi_{-i} f_*\mathcal{F}$ in the appropriate
$t$-structure.

These are the standard cohomological tools, derived without spectral
sequences, injective resolutions, or flabby/soft sheaves: everything is
encoded in the sheaf condition together with the universal property of
sheafification.

{{< remark id="rmk-naive-cech" title="Where classical Čech can fail" >}}
The classical **naïve** Čech complex of a cover is the cosimplicial
**abelian group** $[n] \mapsto H^0(U_n, \mathcal{F})$ — the degree-zero
truncation of $\Gamma(U_n, \mathcal{F})$. When some
$\Gamma(U_n, \mathcal{F})$ has non-zero higher cohomology, this truncation
drops information and naïve Čech cohomology disagrees with sheaf cohomology.
We will see in the final section that the two agree precisely when each
$\Gamma(U_n, \mathcal{F})$ is concentrated in degree zero.
{{< /remark >}}

## Quasi-coherent sheaves are sheaves

For a scheme $X$, recall that the category of quasi-coherent modules is the
limit
\[
    \mathrm{Mod}_X = \lim_{(R,\, x\colon \Spec(R) \to X)} \mathrm{Mod}_R
\]
with derived base change as transition functors. For an $R$-module $M$, the
associated presheaf on $\mathrm{CAlg}_R$ is
\[
    \mathcal{F}_M\colon \mathrm{CAlg}_R \to \mathcal{D}, \qquad A \mapsto M \otimes_R A.
\]

The main theorem of this note is:

{{< theorem id="thm-qcoh-sheaf" title="Quasi-coherent modules are Zariski sheaves" >}}
For any ring $R$ and any $R$-module $M$, the presheaf $\mathcal{F}_M$ is a
Zariski sheaf on $\mathrm{CAlg}_R$. Equivalently, $L\mathcal{F}_M \simeq \mathcal{F}_M$,
and consequently
\[
    \Gamma(\Spec(R), \mathcal{F}_M) \simeq \mathcal{F}_M(R) = M.
\]
{{< /theorem >}}

Since $M$ is concentrated in degree zero (for $M \in \mathrm{Mod}_R^{\heartsuit}$),
the higher cohomology vanishes:

{{< corollary id="cor-affine-vanishing" title="Affine cohomology vanishing" >}}
For an affine scheme $X = \Spec(R)$ and a discrete quasi-coherent module $M$,
\[
    H^i(X, \mathcal{F}_M) = 0 \quad \text{for all } i > 0.
\]
{{< /corollary >}}

The strategy for {{< thmref "thm-qcoh-sheaf" >}} is to establish the stronger
statement that $\mathcal{F}_M$ satisfies **faithfully flat** descent. This is
the content of the next section, via Mathew's framework of descendable
algebras.

## Faithfully flat descent

Throughout this section $\mathcal{C}$ is a stable presentable symmetric
monoidal category. In our application $\mathcal{C} = \mathrm{Mod}_R$.

### Descendable algebras

{{< definition id="def-thick-tensor-ideal" title="Thick tensor ideal" >}}
For $A \in \mathrm{CAlg}(\mathcal{C})$, the **thick tensor ideal generated by
$A$**, denoted $\langle A \rangle \subset \mathcal{C}$, is the smallest full
subcategory containing $A$ and closed under finite (co)limits, retracts, and
tensor products $- \otimes X$ for arbitrary $X \in \mathcal{C}$.
{{< /definition >}}

{{< definition id="def-descendable" title="Descendable algebra" >}}
$A \in \mathrm{CAlg}(\mathcal{C})$ is **descendable** if
$\mathbf{1}_{\mathcal{C}} \in \langle A \rangle$.

({{< cite "mathew-galois" "Def. 3.18" >}}.)
{{< /definition >}}

The cobar construction associated to $A$ is the cosimplicial algebra
\[
    A^{\otimes \bullet}\colon \mathbf{\Delta} \to \mathrm{CAlg}(\mathcal{C}), \qquad [n] \mapsto A^{\otimes(n+1)}.
\]

{{< definition id="def-pro-constant" title="Pro-constant cosimplicial object" >}}
A cosimplicial object $M^{\bullet}\colon \mathbf{\Delta} \to \mathcal{C}$ is
**pro-constant** if its filtered diagram of partial totalisations
\[
    n \mapsto \mathrm{Tot}_{\le n}(M^{\bullet}) \coloneqq \lim_{m \in \mathbf{\Delta}_{\le n}} M^m
\]
is pro-equivalent (in $\mathsf{Pro}(\mathcal{C})$) to a constant pro-system.
{{< /definition >}}

{{< example id="ex-split-pro-constant" title="Split cosimplicial objects" >}}
If $M^{\bullet}$ is split (admits a coaugmentation that is a section in
homotopy at each level), then $\mathrm{Tot}_{\le n}(M^{\bullet})$ stabilises
for $n \gg 0$, so $M^{\bullet}$ is automatically pro-constant.
{{< /example >}}

{{< example id="ex-tensor-pro-constant" title="Tensoring with pro-constants" >}}
In any stable symmetric monoidal category where $\otimes$ preserves limits in
each variable, tensoring with a pro-constant cosimplicial object remains
pro-constant, and the limit commutes with the tensor:
\[
    \Big(\lim_{\mathbf{\Delta}} M^{\bullet}\Big) \otimes X \simeq \lim_{\mathbf{\Delta}} (M^{\bullet} \otimes X).
\]
This is automatic for $\mathcal{C} = \mathrm{Mod}_R$, since $\otimes_R$ is
exact.
{{< /example >}}

Two theorems of Mathew connect descendability with pro-constancy.

{{< theorem id="thm-mathew-procon" title="Mathew" >}}
$A \in \mathrm{CAlg}(\mathcal{C})$ is descendable iff the cobar
$A^{\otimes \bullet}$ is pro-constant with limit $\mathbf{1}_{\mathcal{C}}$.

({{< cite "mathew-galois" "Prop. 3.20" >}}.)
{{< /theorem >}}

{{< proof >}}
**($\Rightarrow$).** Let $\mathcal{X} \subset \mathcal{C}$ be the full
subcategory of those $X$ such that $X \otimes A^{\otimes \bullet}$ is
pro-constant with limit $X$. {{< thmref "ex-tensor-pro-constant" >}} shows
$\mathcal{X}$ is closed under finite (co)limits, retracts, and tensor
products. By {{< thmref "ex-split-pro-constant" >}}, $A \in \mathcal{X}$ —
the cosimplicial object $A \otimes A^{\otimes \bullet}$ is split via the
obvious extra degeneracy. Hence $\langle A \rangle \subset \mathcal{X}$;
in particular $\mathbf{1} \in \mathcal{X}$.

**($\Leftarrow$).** If $A^{\otimes \bullet}$ is pro-constant with limit
$\mathbf{1}$, some $\mathrm{Tot}_{\le n}(A^{\otimes \bullet})$ admits
$\mathbf{1}$ as a retract. But $\mathrm{Tot}_{\le n}(A^{\otimes \bullet})$ is
a finite limit of $A, A^{\otimes 2}, \dots$, hence lies in $\langle A \rangle$.
{{< /proof >}}

{{< theorem id="thm-mathew-bbl" title="Mathew" >}}
If $A \in \mathrm{CAlg}(\mathcal{C})$ is descendable, then the canonical
functor
\[
    \mathcal{C} \xrightarrow{\;\sim\;} \lim_{\mathbf{\Delta}} \mathrm{Mod}_{A^{\otimes(\bullet+1)}}(\mathcal{C})
\]
is an equivalence.

({{< cite "mathew-galois" "Thm. 3.26" >}}.)
{{< /theorem >}}

{{< proof >}}
The adjunction $- \otimes A\colon \mathcal{C} \rightleftarrows \mathrm{Mod}_A(\mathcal{C}) \colon F$
satisfies the Barr–Beck–Lurie criterion.

*Conservativity of $- \otimes A$.* If $X \otimes A \simeq 0$, the subcategory
$\mathcal{Y} = \{Y : X \otimes Y \simeq 0\}$ contains $A$ and is closed under
finite (co)limits, retracts, and tensor products, so
$\mathbf{1} \in \langle A \rangle \subset \mathcal{Y}$, giving $X \simeq 0$.

*Limit-exchange for split cosimplicial objects.* Similar, via
{{< thmref "ex-tensor-pro-constant" >}} and {{< thmref "thm-mathew-procon" >}}.
{{< /proof >}}

### Faithfully flat maps are descendable

We specialise to $\mathcal{C} = \mathrm{Mod}_R$ with $A = S$ for a connective
ring map $R \to S$.

{{< definition id="def-flat-ff" title="Flat / faithfully flat" >}}
A connective $R$-module $M$ is **flat** if $- \otimes_R M$ is $t$-exact;
equivalently, $\pi_0 M$ is a flat $\pi_0 R$-module and the canonical map
$\pi_n R \otimes_{\pi_0 R} \pi_0 M \to \pi_n M$ is an isomorphism for every
$n$.

A connective ring map $R \to S$ is **faithfully flat** if $S$ is a flat
$R$-module and $\pi_0 R \to \pi_0 S$ is faithfully flat in the classical
sense (equivalently, $\Spec \pi_0 S \to \Spec \pi_0 R$ is surjective).
{{< /definition >}}

The technical engine is a flat-Ext vanishing lemma due to Lurie:

{{< lemma id="lem-flat-ext" title="Flat Ext vanishing" >}}
Let $R$ be a connective ring and $M$ a flat $R$-module such that $\pi_0 M$
is $\aleph_n$-presentable as a $\pi_0 R$-module. Then for any connective
$N \in \mathrm{Mod}_R$ and any $k > n$,
\[
    \operatorname{Ext}^k_R(M, N) = 0.
\]

({{< cite "lurie-sag" "Lem. D.3.3.6" >}}.)
{{< /lemma >}}

{{< theorem id="thm-ff-descent" title="Faithfully flat descent" >}}
Let $R \to S$ be a faithfully flat connective ring map, with the cardinality
bound that $\pi_0 S$ is $\aleph_n$-presentable over $\pi_0 R$ for some $n$
(e.g. $\aleph_{\omega}$ — automatic for finitely or countably presented
algebras). Then $S$ is descendable as an $R$-algebra, and consequently
\[
    \mathrm{Mod}_R \xrightarrow{\;\sim\;} \lim_{\mathbf{\Delta}} \mathrm{Mod}_{S^{\otimes(\bullet+1)}}.
\]
{{< /theorem >}}

{{< proof >}}
By {{< thmref "thm-mathew-bbl" >}}, descendability of $S$ implies the
equivalence; we show $S$ is descendable.

Set $K \coloneqq \mathrm{fib}(R \to S)$ and $C \coloneqq \mathrm{cofib}(R \to S)$,
related by $K \simeq C[-1]$. The structure map $\rho\colon K \to R$ assembles,
for each $m \ge 1$, into the $m$-fold tensor power
\[
    \rho^{(m)}\colon K^{\otimes m} \xrightarrow{\;\rho \otimes \cdots \otimes \rho\;} R.
\]

**Claim.** $\rho^{(m)}$ is null-homotopic for $m$ large enough.

By the shift $K \simeq C[-1]$,
\[
    \rho^{(m)} \in [K^{\otimes m}, R]_{\mathrm{Mod}_R} = [C^{\otimes m}[-m], R]_{\mathrm{Mod}_R} = \operatorname{Ext}^m_R(C^{\otimes m}, R).
\]
Flatness of $S$ makes $C = \mathrm{cofib}(R \to S)$ flat too (long exact
sequence on $\pi_*$), so $C^{\otimes m}$ is flat. The cardinality assumption
makes $\pi_0(C^{\otimes m})$ $\aleph_n$-presentable, and
{{< thmref "lem-flat-ext" >}} gives
$\operatorname{Ext}^m_R(C^{\otimes m}, R) = 0$ for $m > n$.

**Concluding descendability.** The factorisation
$\rho^{(m+1)}\colon K^{\otimes(m+1)} \xrightarrow{\mathrm{id} \otimes \rho^{(m)}} K \xrightarrow{\rho} R$
produces a cofibre sequence
\[
    K^{\otimes m} \otimes_R S \to \mathrm{cofib}(\rho^{(m+1)}) \to \mathrm{cofib}(\rho^{(m)}).
\]
Inductively, $\mathrm{cofib}(\rho^{(m)}) \in \langle S \rangle$ for every
$m$, since $K^{\otimes m} \otimes_R S \in \langle S \rangle$ and
$\langle S \rangle$ is closed under cofibres. When $\rho^{(m)}$ is
null-homotopic,
\[
    \mathrm{cofib}(\rho^{(m)}) \simeq R \oplus K^{\otimes m}[1],
\]
exhibiting $R$ as a retract of an object in $\langle S \rangle$. Thus
$R \in \langle S \rangle$, i.e. $S$ is descendable.
{{< /proof >}}

### Proof of the main theorem

{{< proof title="Proof of Theorem on quasi-coherent modules" >}}
Set $S \coloneqq \prod_i R_{f_i}$ for a Zariski cover $(f_i)_{i \in I}$ — i.e.
elements generating the unit ideal of $R$. (We may reduce to finite $I$,
since the unit ideal is generated by finitely many of the $f_i$.) The ring
map $R \to S$ is faithfully flat: each $R_{f_i}$ is flat over $R$, and
$\Spec(S) = \coprod_i \Spec(R_{f_i}) \to \Spec(R)$ is surjective by the
unit-ideal hypothesis. The cardinality bound of {{< thmref "thm-ff-descent" >}}
is automatic.

{{< thmref "thm-ff-descent" >}} gives an equivalence
\[
    \mathrm{Mod}_R \xrightarrow{\;\sim\;} \lim_{\mathbf{\Delta}} \mathrm{Mod}_{S^{\otimes_R(\bullet+1)}}.
\]
Tracing $M$ through this equivalence: the unit of the adjunction sends $M$
to the cosimplicial $S^{\otimes_R(\bullet+1)}$-module
$[n] \mapsto M \otimes_R S^{\otimes_R(n+1)}$, and the equivalence reads
\[
    M \xrightarrow{\;\sim\;} \lim_{[n] \in \mathbf{\Delta}} \bigl(M \otimes_R S^{\otimes_R(n+1)}\bigr).
\]
This is exactly the Zariski sheaf condition for $\mathcal{F}_M$ along the
cover $(\Spec R_{f_i})_i$: at level $n$,
$S^{\otimes_R(n+1)} = \prod_{i_0, \dots, i_n} R_{f_{i_0} \cdots f_{i_n}}$, so
the displayed limit is the equaliser (in the appropriate cosimplicial sense)
corresponding to $\mathcal{F}_M$ on the cover. Hence $\mathcal{F}_M$ is a
Zariski sheaf, and $L\mathcal{F}_M \simeq \mathcal{F}_M$.
{{< /proof >}}

## Naïve Čech as a special case

{{< thmref "thm-qcoh-sheaf" >}} immediately clarifies the relationship
between derived and classical Čech cohomology.

**Derived Čech is sheaf cohomology, always.** Let $\mathcal{F}$ be a sheaf
on $X$ and $\mathfrak{U} = (U_i \to X)_{i \in I}$ any cover. The sheaf
condition along $\mathfrak{U}$ *is* the equivalence
\[
    \Gamma(X, \mathcal{F}) \xrightarrow{\;\sim\;} \lim_{[n] \in \mathbf{\Delta}} \Gamma(U_n, \mathcal{F}).
\]
No truncation, no spectral sequence, no acyclicity hypothesis. The
right-hand side is the **derived Čech complex**.

**Naïve Čech recovers derived Čech when intersections are acyclic.** The
classical naïve Čech complex is the cosimplicial **discrete abelian group**
$[n] \mapsto H^0(U_n, \mathcal{F})$ — the degree-zero truncation of
$\Gamma(U_n, \mathcal{F})$. By {{< thmref "cor-affine-vanishing" >}}, this
truncation loses nothing precisely when each $U_n$ is affine (so
$\Gamma(U_n, \widetilde{M})$ is concentrated in degree zero). By the affine
intersection property of separated schemes (diagonal is a closed immersion),
this is automatic for affine covers of separated schemes:

{{< corollary id="cor-naive-cech-separated" title="Naïve Čech for separated schemes" >}}
Let $X$ be a separated scheme, $\mathfrak{U}$ an affine open cover, and
$\mathcal{F}$ a quasi-coherent sheaf on $X$. Then naïve and derived Čech
cohomology along $\mathfrak{U}$ coincide, and both equal sheaf cohomology:
\[
    \check{H}^i(\mathfrak{U}, \mathcal{F}) \xrightarrow{\;\sim\;} H^i(X, \mathcal{F}) \qquad \text{for all } i \ge 0.
\]
{{< /corollary >}}

{{< proof >}}
Since $X$ is separated, the diagonal $X \to X \times X$ is a closed
immersion, so every finite intersection of affine opens is affine; in
particular each $U_n$ is affine. {{< thmref "cor-affine-vanishing" >}} then
makes $\Gamma(U_n, \mathcal{F})$ concentrated in degree zero, where it
agrees with $H^0(U_n, \mathcal{F})$. Hence the cosimplicial object
$[n] \mapsto \Gamma(U_n, \mathcal{F})$ is discrete, and its limit is the
Moore complex of the cosimplicial abelian group
$[n] \mapsto H^0(U_n, \mathcal{F})$ — i.e. the naïve Čech complex.
{{< /proof >}}

**Cartan–Leray, reinterpreted.** The classical Cartan–Leray spectral
sequence
\[
    E_2^{p,q} = \check{H}^p(\mathfrak{U}, \mathcal{H}^q(\mathcal{F})) \Longrightarrow H^{p+q}(X, \mathcal{F})
\]
is precisely the spectral sequence associated to the Bousfield–Kan
filtration on $\lim_{\mathbf{\Delta}} \Gamma(U_{\bullet}, \mathcal{F})$. The
Cartan–Leray hypothesis — vanishing of higher $H^q$ on the cover —
collapses the spectral sequence to its $E_2^{p,0}$ row, recovering naïve
Čech.

## Connection with the locally ringed space picture

The category $\mathrm{Mod}_X$ defined as a limit
\[
    \mathrm{Mod}_X = \lim_{(R,\, x\colon \Spec R \to X)} \mathrm{Mod}_R
\]
agrees, when $X$ is a scheme, with the classical category of quasi-coherent
$\mathcal{O}_X$-modules on the locally ringed space $(|X|, \mathcal{O}_X)$.
Under this identification, the derived global sections $\Gamma(X, \mathcal{F})$
defined here match the classical $\mathrm{R}\Gamma$ of an $\mathcal{O}_X$-module
computed via injective resolutions. All the classical formalism (injective
resolutions, derived $\Hom$, hypercohomology, …) gives an equivalent answer;
the derived viewpoint adopted here is simply a way to skip the resolution
machinery and work directly with the universal property.

## References

<ul class="refs">
<li id="ref-lurie-sag"><strong>J. Lurie</strong>. <em>Spectral Algebraic Geometry</em>. Book draft. <a href="https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf">PDF</a>.</li>
<li id="ref-mathew-galois"><strong>A. Mathew</strong>. <em>The Galois group of a stable homotopy theory</em>. Adv. Math. <strong>291</strong> (2016), 403–541. <a href="https://arxiv.org/abs/1404.2156">arXiv:1404.2156</a>.</li>
<li id="ref-lurie-htt"><strong>J. Lurie</strong>. <em>Higher Topos Theory</em>. Ann. Math. Stud. 170, Princeton Univ. Press, 2009.</li>
<li id="ref-lurie-ha"><strong>J. Lurie</strong>. <em>Higher Algebra</em>. <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.</li>
</ul>
