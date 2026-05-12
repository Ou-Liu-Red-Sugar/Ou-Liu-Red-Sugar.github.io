// ============================================================
//  Low weights — Oberseminar script
//  Typst source
// ============================================================

// -- Packages ------------------------------------------------
#import "@preview/ctheorems:1.1.3": *
#show: thmrules.with(qed-symbol: $square.stroked$)

#import "@preview/fletcher:0.5.8": diagram, node, edge

// -- Page & text settings ------------------------------------
#set document(title: "Low Weights", author: "Ou Liu")
#set page(
  paper: "us-letter",
  margin: (x: 1in, top: 1in, bottom: 1.1in),
  numbering: "1",
  number-align: center,
)
#set text(font: "New Computer Modern", size: 11pt, lang: "en", region: "us")
#show raw: set text(font: "Latin Modern Mono")
#set par(justify: true, leading: 0.65em, spacing: 0.9em)
#set heading(numbering: "1.")
#set enum(numbering: "(1)")
#set math.equation(numbering: none)
#show math.equation.where(block: true): set block(above: 0.9em, below: 0.9em)
#show link: set text(fill: rgb("#1d3557"))

// Heading styling
#show heading.where(level: 1): it => {
  v(0.8em)
  block(it)
  v(0.3em)
}

// -- Theorem environments ------------------------------------
#let thm-base-args = (namefmt: strong, titlefmt: strong,
  inset: (top: 0.3em, bottom: 0.3em, left: 0.6em, right: 0em),
  padding: (top: 0em, bottom: 0em),
  bodyfmt: body => [#h(0.0em)#body],
)

#let theorem = thmbox("theorem", "Theorem", ..thm-base-args,
  stroke: (left: 2pt + luma(180)))
#let proposition = thmbox("theorem", "Proposition", ..thm-base-args,
  stroke: (left: 2pt + luma(180)))
#let lemma = thmbox("theorem", "Lemma", ..thm-base-args,
  stroke: (left: 2pt + luma(180)))
#let corollary = thmbox("theorem", "Corollary", ..thm-base-args,
  stroke: (left: 2pt + luma(180)))
#let definition = thmbox("theorem", "Definition", ..thm-base-args,
  stroke: (left: 2pt + rgb("#2d6a4f")))
#let construction = thmbox("theorem", "Construction", ..thm-base-args,
  stroke: (left: 2pt + rgb("#1d3557")))
#let example = thmbox("theorem", "Example", ..thm-base-args)
#let remark = thmbox("theorem", "Remark", ..thm-base-args)
#let observation = thmbox("theorem", "Observation", ..thm-base-args,
  stroke: (left: 2pt + luma(200)))
#let proof = thmproof("proof", "Proof")

// -- Shorthands ----------------------------------------------
#let op = math.op
#let bb = math.bb
#let cal = math.cal
#let sans = math.sans
#let SH = $sans("SH")$
#let Sm = $sans("Sm")$
#let Sp = $sans("Sp")$
#let Sch = $sans("Sch")$
#let Shv = op("Shv")
#let Fil = op("Fil")
#let KGL = $op("KGL")$
#let kgl = $op("kgl")$
#let KH = $op("KH")$
#let Kk = $op("K")$
#let kk = $op("k")$
#let BGL = $op("BGL")$
#let BSL = $op("BSL")$
#let GL = $op("GL")$
#let SL = $op("SL")$
#let calPic = $cal(P)i c$
#let Pic = $op("Pic")$
#let Picd = $cal(P)i c^dagger$
#let Nis = $op("Nis")$
#let cdh = $op("cdh")$
#let Zar = $op("Zar")$
#let TT = $bb(T)$
#let PP = $bb(P)$
#let AA = $bb(A)$
#let GG = $bb(G)$
#let Gm = $GG_m$
#let colim = op("colim")
#let Map = op("Map")
#let map = op("map")
#let fib = op("fib")
#let cofib = op("cofib")
#let id = op("id")
#let rk = op("rk")
#let Spec = op("Spec")
#let det = op("det")
#let Frac = op("Frac")
#let ot = math.times.o
#let simeq = math.tilde.eq
#let ceq = math.colon.eq
#let HZ = $upright("H")bb(Z)$

// Citations use alphanumeric labels [Bac+25]
#set cite(style: "alphanumeric")

// ============================================================
//  Title block
// ============================================================

#align(center)[
  #text(size: 16pt, weight: "bold")[Low Weights]
  #v(0.4em)
  #text(size: 11pt)[Script for the Oberseminar: _Motivic Cohomology of Schemes_]
  #v(0.2em)
  #text(size: 10.5pt)[SoSe 2026 #sym.dash.em 19 May 2026]
  #v(0.6em)
  #text(size: 11pt)[#link("https://ou-liu-red-sugar.github.io/")[Ou Liu]]
  #v(0.05em)
  #text(size: 10pt, fill: luma(80))[University of Regensburg]
  #v(0.6em)
  #block(width: 75%, stroke: none)[
    #set text(size: 8.5pt, style: "italic", fill: luma(130))
    This script contains more material than can be covered in the talk; some proofs and details will be sketched or omitted during the presentation. This document is also an experiment in typesetting with Typst.
  ]
]

#v(0.6em)
#line(length: 100%, stroke: 0.4pt + luma(200))
#v(0.3em)

// ============================================================
//  Body
// ============================================================

#heading(level: 1, numbering: none)[Conventions]

Throughout, _category_ means $(infinity, 1)$-category. All schemes are assumed qcqs unless otherwise stated. Since we work in the derived setting, $Gamma$ (and $Gamma_(tau)$ for a topology $tau$) always denotes the derived global section functor ($R Gamma$ in the classical sense); similarly, $H^n$ denotes the cohomology of the derived global sections.

= Overview <sec:overview>

In this talk, our goal is to define and study the first Chern class in $bb(A)^1$-motivic cohomology.

*Orientation of K-theory.* The starting point is the _orientation_ of algebraic K-theory. By @BEM[Definition~4.4], there is a unique homotopy class of maps of presheaves of pointed spaces on qcqs schemes
$ 1 - (-)^or : Omega^infinity calPic -> Omega^infinity kk $
characterized by the property that, for each $m >= 1$, the composition $(PP^m_(bb(Z)), infinity) -->^([cal(O)(1)]) Omega^infinity calPic -->^(1-(-)^or) Omega^infinity kk$ classifies $1 - [cal(O)(-1)] in Kk_0(PP_(bb(Z))^m)$. By adjunction, this yields a map $1 - (-)^or : Sigma^infinity Omega^infinity calPic -> kk$ of presheaves of spectra.

*From K-theory to motivic cohomology.* The standard orientation of $KGL$, constructed from $1-(-)^or$ in @BEM[§4.1.1], induces compatible orientations of $s^0 KGL_S$ and $f^* s^0 KGL_(bb(Z))$ for any qcqs scheme $f : S -> Spec(bb(Z))$ (see @BEM[Remark~3.48]). By the equivalence of the slice and Bott filtrations (@BEM[§4.1.2]) and the $sigma^infinity$–$omega^infinity$ adjunction, these orientations yield (see @BEM[Remark~4.23]) a map
$ Sigma^infinity Omega^infinity calPic -> bb(Z)(1)^(bb(A), cdh) [2] -> bb(Z)(1)^(bb(A)) [2] $
of presheaves of spectra on qcqs schemes. For any line bundle $cal(L)$ on a qcqs scheme $S$, precomposing along $[cal(L)] : Sigma_+^infinity S -> Sigma^infinity Omega^infinity calPic$ defines the first Chern classes
$ c_1^(bb(A), cdh) (cal(L)) in H^2_(bb(A), cdh) (S, bb(Z)(1)) quad "and" quad c_1^(bb(A)) (cal(L)) in H^2_(bb(A)) (S, bb(Z)(1)). $

*Factoring through $calPic$.* We will see in @lem:orient-compat that the map $Sigma^infinity Omega^infinity calPic -> bb(Z)(1)^(bb(A), cdh)[2]$ factors through the counit $Sigma^infinity Omega^infinity calPic -> calPic$. This counit is the map from the free $bb(E)_infinity$-group on the underlying space of $calPic$ back to $calPic$ itself: the left-hand side does not see the fact that line bundles may be tensored together, but the right-hand side and the map do. The factorization therefore says that the first Chern class depends only on the isomorphism class of $cal(L)$ in $Pic(S)$ and is additive under tensor product. In particular, we obtain maps of presheaves of spectra
$ c_1^(bb(A), cdh) : calPic -> bb(Z)(1)^(bb(A), cdh) [2] quad "and" quad c_1^(bb(A)) : calPic -> bb(Z)(1)^(bb(A)) [2]. $

*Weight $0$ and $bb(Z)$-linearity.* The construction of $c_1^(bb(A))$ requires understanding weight $0$ first. Since $bb(Z)(star)^(bb(A))$ is a graded $bb(E)_infinity$-algebra (@BEM[Remark~4.22]), its weight-$0$ part $bb(Z)(0)^(bb(A))$ serves as the base ring over which $bb(Z)(1)^(bb(A))$ is a module. The identification $bb(Z)(0)^(cdh) tilde.eq Gamma_(cdh) (-, bb(Z))$ --- weight-$0$ motivic cohomology is the constant sheaf $bb(Z)$ --- underpins the $bb(Z)$-linear structure within which $c_1$ is defined (@cons:first-chern).

*Difficulties and strategy.* Over a general qcqs scheme, the direct construction faces two difficulties. First, the unstable slice computation $s_u^1 kk tilde.eq Gamma_(Nis) (-, Gm)[1]$ relies on the $bb(A)^1$-invariance of $kk$ and the Zariski cohomological vanishing $H^n_(Zar) (S, Gm) = 0$ for $n > 1$, both of which require regularity. Second, the Picard sheaf of spectra satisfies $calPic tilde.eq (tau_(lt.eq 1) Gamma_(Zar) (-, Gm))[1]$ in general; only on smooth schemes over a regular noetherian base does the truncation become redundant and the change of topology from Zariski to Nisnevich an equivalence, yielding $calPic tilde.eq Gamma_(Nis) (-, Gm)[1]$ (@lem:Zar-Nis).

Our strategy is therefore to construct $c_1^(bb(A))$ in stages, following @BEM[§4.2.1]:

+ In @sec:unstable-slices, we work over a regular noetherian scheme $S$ and compute the first two stages of the unstable slice filtration of $Kk$-theory: $s^0_(u) Kk tilde.eq Gamma_(Nis) (-,ZZ)$ and $s^1_u Kk tilde.eq Gamma_(Nis) (-, Gm)[1]$ (@lem:unstable-slices).

+ In @sec:first-chern, we deduce that $bb(Z)(star)^(bb(A))$ is $bb(Z)$-linear and define the first Chern class $c_1^(bb(A)) : calPic -> bb(Z)(1)^(bb(A)) [2]$ on smooth schemes over a regular base (@cons:first-chern). We also state the compatibility with the Atiyah--Hirzebruch filtration (@cor:AH-compat).

+ In @sec:extend, taking for granted that the first Chern class is an isomorphism over Dedekind domains @BEM[Corollary~6.26] and the equivalence $bb(Z)(j)^(cdh) tilde.eq bb(Z)(j)^(bb(A))$ for $j lt.eq 1$, we deduce integral identifications of $bb(A)^1$-motivic cohomology in low weights over arbitrary qcqs schemes (@cor:low-weights-integral), and assemble them into a description of the second filtration quotient $KH slash Fil^2_(bb(A),cdh) KH tilde.eq L_(cdh) Picd$ (@cor:second-filtration-quotient).

= Unstable Slice Filtration <sec:unstable-slices>

Throughout this section, let $S$ be a regular noetherian scheme. We work in $Shv_(Nis, bb(A)^1) (Sm_S, Sp)$.

Recall that in $SH(S)$, for an integer $j in ZZ$, one considers the full subcategory $SH(S)(j) subset SH(S)$ spanned under colimits and extensions by ${TT_(S)^(ot j) ot M_S(X) | X in Sm_S}$. The inclusion admits a right adjoint:

#align(center, diagram(
  spacing: 15mm,
  node-stroke: none,
  {
    node((0,0), $SH(S)(j)$)
    node((1,0), $SH(S)$)
    edge((0,0), (1,0), $iota^j$, "->", shift: 9pt)
    edge((0,0), (1,0), $r^j$, "<-", shift: -9pt, label-side: right)
    node((0.5, 0), $bot$)
  },
))

Setting $Fil^j := iota^j compose r^j$, for every motivic spectrum $E in SH(S)$ we obtain a filtration
 $
   dots.c -> Fil^(j+1)E -> Fil^j E -> Fil^(j-1)E -> dots.c
 $
known as the *slice filtration*. We define $s^j E$ as the cofiber $cofib(Fil_("slice")^(j+1) E -> Fil_("slice")^j E)$; it is right orthogonal to $SH(S)(j+1)$, i.e., the mapping spectrum $map_(SH(S))(F,s^j E)$ vanishes for all $F in SH(S)(j+1)$.

We have $ZZ(0)^(AA) = omega^(infinity)s^0 KGL_S$ and $ZZ(1)^(AA) = omega^(infinity)s^1 KGL_(S)[2]$. To define the first Chern class, we need the "slice filtration" of $Shv_(Nis,AA^1)(Sm_S,Sp)$. Since $Shv_(Nis,AA^1)(Sm_S,Sp) = SH(S)[Gm^(-1)]$, this is also known as the *unstable slice filtration* (unstable under $- ot Gm$).

For an integer $j in ZZ$, consider the full subcategory
 $
   Shv_(S)(j) subset Shv_(Nis,AA^1)(Sm_S,Sp)
 $
spanned by ${(Sigma^(infinity) TT_S^1)^(ot j) ot E | E in Shv_(Nis,AA^1)(Sm_S,Sp)}$. By the same reasoning as for $SH$, we have an adjunction $iota^j tack.l r^j$ and hence a functorial, exhaustive, multiplicative filtration for $E in Shv_(Nis,AA^1)(Sm_S,Sp)$, which is now $NN$-indexed. We denote this tower by
 $
   E simeq Fil_("u-slice")^0 E <- dots.c <-  Fil_("u-slice")^(j-1) E <- Fil_("u-slice")^(j) E <- Fil_("u-slice")^(j+1) E <- dots.c 
 $
and write $s_u^j E$ for the corresponding graded pieces, which we call the *unstable slices* of $E$.

Now we compare the unstable slice filtration with the slice filtration on $SH(S)$. Observing that 
 $
   sigma^(infinity)(Shv_S (j)) subset SH(S)(j),
 $
we obtain a Beck--Chevalley-style transformation $iota^j omega^(infinity) => omega^(infinity) iota^j$.
This induces, for each $E in SH(S)$ and $j >= 0$, natural maps
 $
   Fil_("u-slice")^j omega^(infinity) E -> omega^(infinity) Fil_("slice")^j E quad "and" quad s_u^j omega^(infinity) E -> omega^(infinity)s^j E.
 $

In particular, we have natural maps $s_u^0 omega^(infinity) KGL -> omega^(infinity) s^0 KGL_S = ZZ(0)^(AA)$ and $s_u^1 omega^(infinity) KGL -> omega^(infinity) s^1 KGL_S = ZZ(1)^(AA)[2]$.
It is well known that on a regular noetherian scheme $S$, we have $Kk simeq KH$, hence $omega^(infinity) KGL tilde.eq Kk$ on $Sm_S$. Everything thus reduces to showing that $Gamma_(Nis)(-,ZZ) simeq s_u^0 Kk$ and $Gamma_(Nis)(-,Gm)[1] simeq s_u^1 Kk$.

#lemma[
  The following assertions hold in $Shv_(Nis, bb(A)^1) (Sm_S, Sp)$:
  + The rank map $rk : Kk -> Gamma_(Nis) (-, bb(Z))$ induces an equivalence $s_u^0 Kk tilde.eq Gamma_(Nis) (-, bb(Z))$, so that $Fil^1_("u-slice") Kk tilde.eq Kk^(rk = 0) := fib(rk)$.
  + The determinant map $det : Kk^(rk = 0) -> Gamma_(Nis) (-, Gm)[1]$ induces an equivalence $s_u^1 Kk tilde.eq Gamma_(Nis) (-, Gm)[1]$.
] <lem:unstable-slices>

To prove @lem:unstable-slices, we need some preparation.

#lemma[
  Let $S$ be a regular noetherian scheme.
  1. There are natural isomorphisms
  $
      H^n_(Zar)(S,ZZ) = cases(ZZ^(pi_0(S)) quad & n = 0, 0 quad & n > 0)
  $
  and 
  $
    H^n_(Zar)(S,Gm) = cases(cal(O)(S)^(times) quad & n = 0, Pic(S) & n = 1, 0 & n > 1).
  $
  2. The change-of-topology maps
  $
    Gamma_(Zar)(S,ZZ) -> Gamma_(Nis)(S,ZZ) quad "and" quad Gamma_(Zar)(S,Gm) -> Gamma_(Nis)(S,Gm)
  $
  are equivalences.
  3. The canonical maps $Gamma_(Nis)(AA_S^1,ZZ) -> Gamma_(Nis)(S,ZZ)$ and $Gamma_(Nis)(AA_S^1,Gm) -> Gamma_(Nis)(S,Gm)$ are equivalences.
] <lem:Zar-Nis>

#proof[
  (1). For the cohomology of $ZZ$, the key point is the vanishing of higher cohomology of constant sheaves on irreducible schemes (#link("https://stacks.math.columbia.edu/tag/02UW")[Stacks, Tag 02UW]). For $Gm$, the $H^0$ and $H^1$ descriptions are standard. The vanishing of higher cohomology is classical: since $S$ is regular (hence normal), the sheaf $Gm$ admits a length-$1$ resolution by flasque sheaves 
  $ 0 -> Gm -> plus.o.big_(eta in S^((0))) i_(eta *) cal(O)_(eta)^times -> plus.o.big_(x in S^((1))) i_(x *) ZZ -> 0. $

  (2). The map $Gamma_(Zar)(-,F) -> Gamma_(Nis)(-,F)$ is a map of Zariski sheaves of spectra. To show it is an equivalence, it suffices to check on stalks. The stalk at $s in S$ is 
  $
    Gamma_(Zar)(Spec(cal(O)_(S,s)),F) -> Gamma_(Nis)(Spec(cal(O)_(S,s)),F)
  $
  where $cal(O)_(S,s)$ is a regular noetherian local ring. We are thus reduced to showing: for every regular noetherian local ring $R$, the change-of-topology map $Gamma_(Zar)(Spec(R),F) -> Gamma_(Nis)(Spec(R),F)$ is an equivalence. We proceed by induction on $d = dim R$.

  Consider the cartesian square
  #align(center, diagram(
    spacing: (15mm, 10mm),
    node-stroke: none,
    {
      node((0, 0), $Spec(R^h) without {frak(m) R^h}$)
      node((1, 0), $Spec(R^h)$)
      node((0, 1), $Spec(R) without {frak(m)}$)
      node((1, 1), $Spec(R)$)
      edge((0, 0), (1, 0), "->")
      edge((0, 0), (0, 1), "->")
      edge((1, 0), (1, 1), "->")
      edge((0, 1), (1, 1), "->")
    },
  ))
  where $R^h$ is the henselization. This is a cofiltered limit of Nisnevich distinguished squares, so applying $Gamma_(Nis)(-,F)$ yields a cartesian square. Now:
  - On the two punctured spectra, which have dimension $< d$, the change-of-topology map is an equivalence by the inductive hypothesis.
  - On $Spec(R^h)$, the change-of-topology map is an equivalence because $R^h$ is henselian: every Nisnevich cover of $Spec(R^h)$ admits a section, so $H^n_(Nis)(Spec(R^h),F) = 0$ for $n > 0$, which matches $H_(Zar)^n (Spec(R^h),F) = 0$ by (1).

  Since three of the four vertices agree, the change-of-topology map is an equivalence on $Spec(R)$ if and only if $Gamma_(Zar)(-,F)$ also carries the above square to a cartesian square. We verify this case by case.
  - When $d = 0$, $R$ is a field, so $R = R^h$.
  - When $d = 1$, $R$ is a DVR. The punctured spectra are the spectra of the fraction fields of $R$ and $R^h$ respectively, and applying $Gamma_(Zar)(-,ZZ)$ and $Gamma_(Zar)(-,Gm)$ yields squares
  #align(center, grid(columns: 3, column-gutter: 2em, align: horizon,
    diagram(spacing: (8mm, 6mm), node-stroke: none, {
      node((0, 0), $ZZ$)
      node((1, 0), $ZZ$)
      node((0, 1), $ZZ$)
      node((1, 1), $ZZ$)
      edge((0, 0), (1, 0), "->")
      edge((0, 0), (0, 1), "->")
      edge((1, 0), (1, 1), "->")
      edge((0, 1), (1, 1), "->")
    }),
    [and],
    diagram(spacing: (8mm, 6mm), node-stroke: none, {
      node((0, 0), $R^times$)
      node((1, 0), $Frac(R)^times$)
      node((0, 1), $R^(h times)$)
      node((1, 1), $Frac(R^h)^times$)
      edge((0, 0), (1, 0), "->")
      edge((0, 0), (0, 1), "->")
      edge((1, 0), (1, 1), "->")
      edge((0, 1), (1, 1), "->")
    }),
  ))
  respectively. Both squares are cartesian in $sans("D")(ZZ)$ (for the right square, the cokernels of the horizontal maps are both $ZZ$, given by the discrete valuation), as desired.
  - For $d >= 2$: it suffices to show that the horizontal maps $Gamma_(Zar)(Spec(R),F) -> Gamma_(Zar)(Spec(R) without {frak(m)},F)$ and $Gamma_(Zar)(Spec(R^h),F) -> Gamma_(Zar)(Spec(R^h) without {frak(m)R^h},F)$ are equivalences. For $F = ZZ$: the punctured spectra are connected, so both sides are $ZZ$ by (1). For $F = Gm$: the normality of $R$ gives $R^times tilde.eq H^0_(Zar)(Spec(R) without {frak(m)}, Gm)$ (as $R$ is normal of dimension $>= 2$) and $Pic(Spec(R) without {frak(m)}) = 0$ by Grothendieck (#link("https://stacks.math.columbia.edu/tag/0F2H")[Stacks, Tag 0F2H]), and similarly for $R^h$ in place of $R$.

  (3). By part (2), we may replace Nis by Zar, and then use (1) to compute the cohomology. For $ZZ$, note that the connected components of $S$ and $AA_S^1$ are in bijection. For $Gm$, we use that $A^times tilde.eq A[T]^times$ whenever $A$ is a reduced ring, and $Pic(A) tilde.eq Pic(A[T])$ for $A$ seminormal @Traverso1970 @Swan1980. (In our setting $A$ is regular, hence seminormal.)
]

We now turn to the proof of @lem:unstable-slices. Our strategy is based on the following observation.

#observation[
  Let $Shv_S (j)^(tack.t)$ denote the right orthogonal complement of $Shv_S (j)$, i.e., the full subcategory of objects $G in Shv_(Nis,AA^1)(Sm_S,Sp)$ with $map(H,G) simeq 0$ for all $H in Shv_S (j)$. Suppose we are given a fiber sequence
  $
    A -> E -> B
  $
  with $A in Shv_S (j)$ and $B in Shv_S (j)^(tack.t)$. Then $A simeq Fil^j_("u-slice") E$ and $B simeq E slash Fil^j_("u-slice") E$.

  Indeed, since $Fil^j_("u-slice") E -> E$ is universal for maps from $j$-effective objects into $E$, the map $A -> E$ factors uniquely through $Fil^j_("u-slice") E$. Let $C := fib(A -> Fil_("u-slice")^j E)$; then $C in Shv_S (j)$. The composition $C -> A -> E$ vanishes (it factors through the zero map $C -> A -> Fil^j_("u-slice") E$), so by the universal property the map $C -> Fil^j_("u-slice") E$ is also zero, giving $C simeq 0$.
] <obs:orthogonal-complement>

#proof([of @lem:unstable-slices])[
  We apply @obs:orthogonal-complement in two steps.

  + For the rank map $rk : Kk -> Gamma_(Nis)(-,ZZ)$: the fiber sequence $Kk^(rk = 0) -> Kk -> Gamma_(Nis)(-,ZZ)$ exhibits the $0$-th unstable slice $s_u^0 Kk simeq Kk slash Fil^1_("u-slice") Kk simeq Gamma_(Nis)(-,ZZ)$, provided we verify that $Kk^(rk = 0) in Shv_S (1)$ and $Gamma_(Nis)(-,ZZ) in Shv_S (1)^(tack.t)$.
  + For the determinant map $det : Kk^(rk = 0) -> Gamma_(Nis)(-,Gm)[1]$: applying the same argument to $Fil^1_("u-slice") Kk = Kk^(rk = 0)$ with $j = 2$ gives $s_u^1 Kk simeq Gamma_(Nis)(-,Gm)[1]$, provided we verify that $Fil^2_("u-slice") Kk^(rk = 0) in Shv_S (2)$ and $Gamma_(Nis)(-,Gm)[1] in Shv_S (2)^(tack.t)$.

  Write $F := Fil^2_("u-slice") Kk^(rk = 0) = fib(Kk^(rk = 0) -> Gamma_(Nis)(-,Gm)[1])$ for the second effective piece.

  *Right orthogonality.* For $Gamma_(Nis)(-,ZZ) in Shv_S (1)^(tack.t)$, note that $Shv_S (j)$ is generated under colimits and desuspensions by objects of the form $Sigma_+^infinity PP_X^j slash Sigma_+^infinity PP_X^(j-1) simeq (Sigma^infinity TT^1_S)^(ot j) ot Sigma_+^infinity X$. It suffices to show that $Gamma_(Nis)(X,ZZ) simeq Gamma_(Nis)(PP_X^1,ZZ)$ and $Gamma_(Nis)(PP_X^2,Gm) simeq Gamma_(Nis)(PP_X^1,Gm)$ for all $X in Sm_S$. By #link("https://stacks.math.columbia.edu/tag/0BXJ")[Stacks, Tag 0BXJ] and @lem:Zar-Nis (1), (2), we obtain the result.

  *Effectivity.* It remains to show that $Kk^(rk = 0) in Shv_S (1)$ and $F in Shv_S (2)$. For this we use the following key observation.#footnote[See also @bachmann2021voevodskyssliceconjectureshilbert[Lemma~5.2] for detecting stable effectivity in motivic homotopy theory.]

  #observation[
    If $E in Shv_(Nis, AA^1)(Sm_S, Sp)$ is Nisnevich-locally connective and $L_(AA^1, Nis) Sigma^infinity Omega^infinity E in Shv_S (j)$, then $E in Shv_S (j)$.
  ] <obs:connective>

  Firstly, by Morel--Voevodsky's equivalence, we have $Omega^(infinity) Kk simeq L_(Nis,AA^1)(ZZ times BGL)$, with the $ZZ$ component corresponding to the rank, so $Omega^infinity Kk^(rk = 0) simeq L_(Nis,AA^1) BGL$.

  We claim that $Omega^infinity F simeq L_(Nis,AA^1) BSL$. Consider the fiber sequence of Nisnevich sheaves of pointed spaces
  $
    L_(Nis) BSL -> L_(Nis) BGL ->^(det) L_(Nis) "B"Gm.
  $
  Since $"B"Gm simeq Omega^infinity (Gamma_(Nis)(-,Gm)[1])$ is already $AA^1$-invariant by @lem:Zar-Nis (3) and Nisnevich-locally connected, we may apply @LurieHA[Lemma~5.5.6.17]: the fiber product $BSL simeq BGL times_("B"Gm) *$ is taken over the pointed connected object $"B"Gm$, and HA~5.5.6.17 states that such fiber products preserve sifted colimits. Since $L_(AA^1)$ is computed as the geometric realization $|{-}(- times Delta_S^(bullet))|$, which is a sifted colimit, we obtain a fiber sequence
  $
    L_(AA^1) L_(Nis) BSL -> L_(AA^1) L_(Nis) BGL -> L_(Nis) "B"Gm.
  $
  The middle term $L_(AA^1) L_(Nis) BGL$ is already a Nisnevich sheaf: on stalks at regular local rings, $BGL$ classifies vector bundles, which are $AA^1$-invariant on regular schemes. Hence $Omega^infinity F simeq L_(Nis,AA^1) BSL$.

  By @obs:connective, it suffices to show that $L_(AA^1,Nis) Sigma^infinity BGL in Shv_S (1)$ and $L_(AA^1,Nis) Sigma^infinity BSL in Shv_S (2)$. We use the Schubert cell decomposition: since $BGL = colim_(n,m) op("Gr")(n,n+m)$ and $BSL = colim_(n,m) op("SGr")(n,n+m)$, and $Shv_S (j)$ is closed under colimits, it suffices to check each finite (special linear) Grassmannian.

  By @Wendt2010[Proposition~3.7], for a split connected reductive group $G$ with standard parabolic $P$, the projective homogeneous variety $X = G slash P$ admits a Schubert stratification $X = X_n supset dots.c supset X_0 supset X_(-1) = emptyset$ with strata $X_i without X_(i - 1) simeq AA^(n_i)$. Writing $d_i = dim X - n_i$ for the codimension and using the cofiber sequences
  $
    AA^(d_i) without {0} -> X without X_i -> X without X_(i-1),
  $
  together with the purity equivalence $Sigma^infinity (AA^(d) without {0}) simeq (Sigma^infinity TT_S^1)^(ot d)[-1]$, one sees that $L_(Nis,AA^1)Sigma^infinity X$ is an iterated extension of copies of $(Sigma^infinity TT_S^1)^(ot d_i)$. Hence $L_(Nis,AA^1) Sigma^infinity X in Shv_S (min {d_i | d_i > 0})$.

  For $op("Gr")(k,N)$: the cells are indexed by Young diagrams $lambda$ in a $k times (N-k)$ box, with codimension $|lambda|$; the minimum positive codimension is $1$ (the partition $(1,0,dots.c,0)$), so $Sigma^infinity BGL in Shv_S (1)$.

   #figure(caption: [Schubert cells of $op("Gr")(2,4)$. Each cell $C_lambda tilde.eq AA^(4-|lambda|)$ is parametrized by a $2 times 4$ matrix in echelon form. #text(fill: rgb("#2980b9"), weight: "bold")[$1$] marks pivots, #text(fill: rgb("#2d6a4f"), weight: "bold")[$ast$] marks free parameters, #text(fill: rgb("#e67e22"), weight: "bold")[$0$] marks _Young diagram zeros_ (non-pivot zeros to the right of the pivot), and #text(fill: luma(170))[$0$] marks structural zeros. The number of #text(fill: rgb("#e67e22"))[orange] zeros in row $j$ equals $lambda_j$. The cell $lambda = (1,0)$ (#text(fill: rgb("#c0392b"))[red]) has nontrivial determinant and does not lift to $op("SGr")(2,4)$.],
  {
    // ── Colour scheme ──
    let piv-c  = rgb("#2980b9")
    let free-c = rgb("#2d6a4f")
    let yd-c   = rgb("#e67e22")
    let red-c  = rgb("#c0392b")
    let st-c   = luma(170)

    // ── Styled matrix atoms ──
    let piv  = text(fill: piv-c, weight: "bold")[$1$]
    let free = text(fill: free-c, weight: "bold")[$ast$]
    let yd0  = text(fill: yd-c, weight: "bold")[$0$]
    let ry0  = text(fill: red-c, weight: "bold")[$0$]
    let sz   = text(fill: st-c)[$0$]

    set math.mat(row-gap: 6pt, column-gap: 3pt)

    // ── Young diagram renderer ──
    let s = 9pt
    let yng(shape, yd-fill: yd-c.lighten(55%), highlight: false) = {
      let rows = 2; let cols = 2
      let border = if highlight { 0.8pt + red-c } else { none }
      box(stroke: border, inset: 1.5pt, radius: 2pt,
        box(width: cols * s, height: rows * s, {
          for i in range(rows) {
            for j in range(cols) {
              let filled = i < shape.len() and j < shape.at(i)
              place(dx: j * s, dy: i * s,
                rect(width: s, height: s,
                  stroke: 0.4pt + luma(160),
                  fill: if filled { yd-fill } else { white }))
            }
          }
        })
      )
    }

    // ── Single cell entry ──
    let entry(shape, label, codim, matrix-content, lift: true) = {
      let col = if lift { luma(80) } else { red-c }
      let yd-fill = if lift { yd-c.lighten(55%) } else { rgb("#f5c6cb") }
      box(inset: (x: 2pt, y: 3pt),
        grid(columns: 2, column-gutter: 5pt, align: center + horizon,
          yng(shape, highlight: not lift, yd-fill: yd-fill),
          align(left)[
            #set text(size: 8pt)
            #matrix-content \
            #text(size: 7.5pt, fill: col)[codim $#codim$, $lambda = #label$]
          ],
        )
      )
    }

    set text(size: 8.5pt)

    // ── Main 2 × 3 grid ──
    align(center,
      grid(columns: 3, column-gutter: 8pt, row-gutter: 6pt,
        align: center + horizon,

        entry((), $(0,0)$, $0$,
          math.mat(delim: "(",
            (free, free, piv, sz),
            (free, free, sz, piv))),

        entry((1,), $(1,0)$, $1$,
          math.mat(delim: "(",
            (free, piv, ry0, sz),
            (free, sz, free, piv)),
          lift: false),

        entry((2,), $(2,0)$, $2$,
          math.mat(delim: "(",
            (piv, yd0, yd0, sz),
            (sz, free, free, piv))),

        entry((1,1), $(1,1)$, $2$,
          math.mat(delim: "(",
            (free, piv, sz, yd0),
            (free, sz, piv, yd0))),

        entry((2,1), $(2,1)$, $3$,
          math.mat(delim: "(",
            (piv, yd0, sz, yd0),
            (sz, free, piv, yd0))),

        entry((2,2), $(2,2)$, $4$,
          math.mat(delim: "(",
            (piv, sz, yd0, yd0),
            (sz, piv, yd0, yd0))),
      )
    )

    // ── Annotation: how to read the Young diagram ──
    v(10pt)

    let ann-s = 14pt
    let ann-yd-fill = yd-c.lighten(55%)

    block(width: 100%, inset: 10pt, radius: 4pt,
      stroke: 0.5pt + luma(200), fill: luma(248))[

      #set text(size: 8.5pt)
      *Reading rule:* In row $j$ of the matrix, count the non-pivot zero columns
      to the right of the pivot (the #text(fill: yd-c, weight: "bold")[orange zeros]).
      This count equals $lambda_j$, the width of row $j$ in the Young diagram.

      #v(6pt)
      #align(center)[
        #set text(size: 8.5pt)
        #grid(
          columns: (auto, 18pt, auto, 12pt, auto),
          align: center + horizon,
          row-gutter: 4pt,

          [Row 1:], [],
          math.mat(delim: "(", (piv, yd0, sz, yd0)),
          $arrow.r$,
          grid(columns: 2, column-gutter: 0pt, rows: 1,
            rect(width: ann-s, height: ann-s,
              stroke: 0.5pt + luma(140), fill: ann-yd-fill),
            rect(width: ann-s, height: ann-s,
              stroke: 0.5pt + luma(140), fill: ann-yd-fill),
          ),

          [], [],
          text(size: 7pt, fill: luma(120))[2 #text(fill: yd-c)[orange] zeros],
          [],
          text(size: 7pt, fill: luma(120))[$lambda_1 = 2$],

          [Row 2:], [],
          math.mat(delim: "(", (sz, free, piv, yd0)),
          $arrow.r$,
          rect(width: ann-s, height: ann-s,
            stroke: 0.5pt + luma(140), fill: ann-yd-fill),

          [], [],
          text(size: 7pt, fill: luma(120))[1 #text(fill: yd-c)[orange] zero],
          [],
          text(size: 7pt, fill: luma(120))[$lambda_2 = 1$],
        )

        #v(4pt)
        #text(size: 8pt)[
          Hence $lambda = (2, 1)$, codimension $= |lambda| = 3$.
          #h(6pt)
          Young diagram:#h(3pt)
          #box(baseline: 30%, yng((2, 1)))
        ]
      ]
    ]
  }) <fig:schubert>



  For $op("SGr")(k,N)$: the codimension-$1$ cell of $op("Gr")(k,N)$ (the partition $(1,0,dots.c,0)$) has nontrivial determinant and does not lift to $op("SGr")$, so the minimum positive codimension is $2$. Hence $Sigma^infinity BSL in Shv_S (2)$.
]

Finally, we prove @obs:connective.

#proof([of @obs:connective])[
  Any spectrum $A$ satisfies $A simeq colim_n (Sigma^infinity Omega^infinity (A[n]))[-n]$ (from the $Sigma^infinity Omega^infinity$ comonad resolution). For Nisnevich-locally connective $E$, the delooping $Omega^infinity (E[n])$ is Nisnevich-locally equivalent to the iterated bar construction $"B"^n(Omega^infinity E)$. Since $"B"^n$ is built from products and colimits, and $Sigma^infinity (A_1 times A_2) simeq Sigma^infinity A_1 plus.o Sigma^infinity A_2 plus.o (Sigma^infinity A_1 ot Sigma^infinity A_2)$, and $Shv_S (j)$ is closed under colimits, sums, tensors, and desuspensions, the result follows.
]


= First Chern Class <sec:first-chern>

We now define the first Chern class in $AA^1$-motivic cohomology, at least over regular noetherian bases. Recall from @sec:unstable-slices the natural comparison maps $s_u^j omega^infinity E -> omega^infinity s^j E$ for $E in SH(S)$. Applied to $E = KGL_S$, noting that $omega^infinity KGL = KH tilde.eq Kk$ on $Sm_S$ for regular $S$, we obtain maps
$
  s_u^0 Kk -> omega^infinity s^0 KGL_S = ZZ(0)^(AA) quad "and" quad s_u^1 Kk -> omega^infinity s^1 KGL_S = ZZ(1)^(AA) [2].
$
By @lem:unstable-slices, $s_u^0 Kk tilde.eq Gamma_(Nis)(-,ZZ)$ and $s_u^1 Kk tilde.eq Gamma_(Nis)(-,Gm)[1]$, so these become maps from sheaves we understand.

#construction[
  Let $S$ be a regular noetherian scheme. The composite
  $ Gamma_(Nis) (-, bb(Z)) tilde.eq s_u^0 (Kk) -> omega^infinity s^0 KGL_S = bb(Z)(0)^(bb(A)) $
  defines a map of $bb(E)_infinity$-algebras, endowing $bb(Z)(star)^(bb(A))$ with a $bb(Z)$-linear structure. The composite
  $ Gamma_(Nis) (-, Gm)[1] tilde.eq s_u^1 (Kk) -> omega^infinity s^1 KGL_S = bb(Z)(1)^(bb(A)) [2] $
  defines the *first Chern class*
  $ c_1^(bb(A)) : calPic -> bb(Z)(1)^(bb(A)) [2] $
  on smooth $S$-schemes, where we identify $calPic tilde.eq Gamma_(Nis)(-,Gm)[1]$ on $Sm_S$ by @lem:Zar-Nis.
] <cons:first-chern>

The weight-$0$ map is a map of $bb(E)_infinity$-algebras because $s^0 KGL_S tilde.eq HZ_S$ is an $bb(E)_infinity$-ring spectrum and the rank map $Kk -> Gamma_(Nis)(-,ZZ)$ respects the multiplicative structure. The weight-$1$ map $c_1^(bb(A))$ is then a map of modules over this base ring.
#remark[
  For a line bundle $cal(L)$ on $Y in Sm_S$, the first Chern class $c_1^(bb(A))(cal(L)) in H^2_(bb(A))(Y,bb(Z)(1))$ is the image of the class $[cal(L)] in Pic(Y) = H^1_(Nis)(Y,Gm) = pi_0(Gamma_(Nis)(Y,Gm)[1])$ under the map induced by $c_1^(bb(A)) : calPic -> bb(Z)(1)^(bb(A))[2]$. By construction, it depends only on the isomorphism class of $cal(L)$ in $Pic(Y)$.
]
We next explain how the orientation of K-theory interacts with its unstable slices.

#lemma[
  Let $S$ be a regular noetherian scheme.
  + The mapping spectrum $map(Sigma^infinity Omega^infinity calPic, Gamma_(Nis)(-,ZZ))$ in presheaves of spectra on $Sm_S$ is contractible. In particular, the map $1 - (-)^or : Sigma^infinity Omega^infinity calPic -> Kk$ factors uniquely through $Kk^(rk = 0)$.
  + The resulting diagram of presheaves of spectra on $Sm_S$
  #align(center, diagram(
    spacing: (13mm, 10mm),
    node-stroke: none,
    {
      node((0, 0), $Sigma^infinity Omega^infinity calPic$)
      node((1, 0), $Kk^(rk = 0)$)
      node((0, 1), $calPic$)
      node((1, 1), $Gamma_(Nis)(-, Gm)[1]$)
      edge((0, 0), (1, 0), $1-(-)^or$, "->")
      edge((0, 0), (0, 1), "->")
      edge((1, 0), (1, 1), $det$, "->")
      edge((0, 1), (1, 1), "->")
    },
  ))
  commutes up to homotopy, where the left vertical map is the canonical counit and the bottom map is $calPic tilde.eq (tau_(lt.eq 1) Gamma_(Zar)(-,Gm))[1] -> Gamma_(Nis)(-,Gm)[1]$ (an equivalence on $Sm_S$ by @lem:Zar-Nis).
] <lem:orient-compat>

#proof[
  + Since $Sigma^infinity Omega^infinity calPic$ is Nisnevich-locally connective and $Gamma_(Nis)(-,ZZ)$ is coconnective, the mapping anima is contractible.

  + Over regular $S$, @lem:Zar-Nis identifies Zariski and Nisnevich cohomology of $Gm$ on smooth $S$-schemes and removes the $tau^(<= 1)$. The claim then reduces to showing that the composition
  $
  Sigma^infinity Omega^infinity calPic -->^(1-(-)^or) Kk^(rk = 0) ->^(det) Gamma_(Zar)(-,Gm)[1] ->^(simeq) calPic
  $
  is homotopic to the counit $Sigma^infinity Omega^infinity calPic -> calPic$.
  Via the $Sigma^infinity$–$Omega^infinity$ adjunction, this amounts to showing that
  $
    Omega^infinity calPic -->^(1 - (-)^or) Omega^infinity Kk^(rk = 0) -->^(det) Omega^infinity (Gamma_(Zar)(-,Gm)[1]) -->^(simeq) Omega^infinity calPic
  $
  is the identity. By the uniqueness of the orientation, it suffices to verify that for each $m >= 1$ the composition
  $
    (PP^m_S, infinity) -->^([cal(O)(1)]) Omega^infinity calPic -->^(1 - (-)^or) Omega^infinity Kk^(rk = 0) -->^(det) Omega^infinity (Gamma_(Zar)(-,Gm)[1]) -->^(simeq) Omega^infinity calPic
  $
  classifies $cal(O)(1)$.
  The first two maps compose to the class $1 - [cal(O)(-1)] in Kk_0^(rk = 0)(PP_S^m)$.
  It remains to check that $det : Kk_0^(rk = 0)(PP_S^m) -> Pic(PP_S^m)$ sends $1 - [cal(O)(-1)]$ to $cal(O)(1)$. We prove a more general statement.

  Recall Morel--Voevodsky's equivalence $Omega^infinity Kk simeq L_(Nis,AA^1)(ZZ times BGL)$, characterized by the property that for a smooth $S$-scheme $Y$ and a rank-$d$ vector bundle $cal(V)$ on $Y$, the composition
  $
    Y ->^([cal(V)]) L_(Nis) BGL_d -> L_(Nis,AA^1)(ZZ times BGL) ->^(simeq) Omega^infinity Kk
  $
  classifies $[cal(V)] in Kk_0(Y)$. Here the middle map is given by $d$ on the first factor and by $GL_d -> GL$ on the second.

  Restricting to rank-$0$ parts gives $L_(Nis,AA^1)BGL simeq Omega^infinity Kk^(rk = 0)$, with the composition
  $
    Y ->^([cal(V)]) L_(Nis) BGL_d -> L_(Nis,AA^1)BGL simeq Omega^infinity Kk^(rk = 0)
  $
  classifying $[cal(V)] - d in Kk_0^(rk = 0)(Y)$.
  Specializing to $d = 1$ (so $cal(V) = cal(L)$ is a line bundle), we arrange this as the top row of the diagram
  #align(center, diagram(
  spacing: (15mm, 9mm),
  node-stroke: none,
  {
    node((0, 0), $Y$)
    node((1, 0), $L_("Nis") "B"Gm$)
    node((2, 0), $L_("Nis",AA^1) BGL$)
    node((3, 0), $Omega^infinity Kk^(rk = 0)$)
    node((2, 1), $L_("Nis") "B"Gm$)
    node((3, 1), $Omega^infinity (Gamma_("Nis")(-, Gm)[1])$)

    edge((0, 0), (1, 0), $[cal(L)]$, "->")
    edge((1, 0), (2, 0), "->")
    edge((2, 0), (3, 0), $tilde$, "->")
    edge((2, 0), (2, 1), $L_("Nis",AA^1) "B"(det)$, "->", label-side: right)
    edge((3, 0), (3, 1), $det$, "->")
    edge((2, 1), (3, 1), $tilde$, "->")
  },
  ))
  The square commutes by definition of $det$ (induced by $det : Kk_1(-) -> H_(Nis)^0(-,Gm)$). The unwritten diagonal $L_(Nis) "B"Gm -> L_(Nis) "B"Gm$ is the identity, since the determinant of $GL_1 arrow.hook GL$ is the identity on $Gm$. Since the top row classifies $[cal(L)] - 1$, we conclude that $det([cal(L)] - 1) = cal(L)$, and therefore $det(1 - [cal(L)^or]) = det([cal(L)^or] - 1)^(-1) = (cal(L)^or)^(-1) = cal(L)$, as required.
]
Combining @lem:orient-compat with @cons:first-chern, we obtain:

#corollary[
  Let $S$ be a regular noetherian scheme. The following diagram of presheaves of spectra on $Sm_S$ commutes:
  #align(center, diagram(
    spacing: (13mm, 10mm),
    node-stroke: none,
    {
      node((0, 0), $Kk^(rk = 0)$)
      node((1, 0), $Fil^1_(bb(A)) KH$)
      node((0, 1), $Gamma_(Nis)(-, Gm)[1]$)
      node((1, 1), $bb(Z)(1)^(bb(A)) [2]$)
      edge((0, 0), (1, 0), "->")
      edge((0, 0), (0, 1), $det$, "->")
      edge((1, 0), (1, 1), "->", label: "edge")
      edge((0, 1), (1, 1), $c_1^(bb(A))[2]$, "->")
    },
  ))
  where the right vertical map is the edge map of the Atiyah--Hirzebruch filtration.
] <cor:AH-compat>

= Low Weights over Arbitrary Schemes <sec:extend>

We extend the results of the previous sections from smooth schemes over regular noetherian bases to arbitrary qcqs schemes.

== From regular bases to qcqs schemes

The constructions of @sec:first-chern were carried out on smooth schemes over a regular noetherian base $S$. To extend them to arbitrary qcqs schemes, we cdh-locally left Kan extend from smooth $bb(Z)$-schemes.

We first recall the motivic filtrations on homotopy K-theory. For a qcqs scheme $S$ with structure map $f : S -> Spec(bb(Z))$, the slice filtration on $KGL$ induces two natural, multiplicative, exhaustive $bb(N)$-indexed filtrations on $KH(S)$ (@BEM[Theorem~4.39(1)]):
$
  Fil_(bb(A), cdh)^j KH(S) := map_(SH(S))(bb(1)_S, f^* Fil^j_("slice") KGL_(bb(Z))) quad "and" quad Fil_(bb(A))^j KH(S) := map_(SH(S))(bb(1)_S, Fil^j_("slice") KGL_S),
$
called the *$bb(A)^1$-cdh-motivic filtration* and the *$bb(A)^1$-motivic filtration* respectively. Their graded pieces recover the $bb(A)^1$-motivic cohomology theories:
$
  "gr"_(bb(A), cdh)^j KH(S) simeq bb(Z)(j)^(bb(A), cdh)(S)[2j] quad "and" quad "gr"_(bb(A))^j KH(S) simeq bb(Z)(j)^(bb(A))(S)[2j].
$
There is a natural multiplicative map $Fil_(bb(A), cdh)^(star) KH(S) -> Fil_(bb(A))^(star) KH(S)$.

The key input (@BEM[Theorem~4.39(3)(4)]) is that the three functors $A mapsto bb(Z)$, $A mapsto A^times$, and $A mapsto kk(A)$ on commutative rings are all left Kan extended from essentially smooth local $bb(Z)$-algebras. Combining this with $L_(cdh) kk tilde.eq KH$ (@KerzStrunkTamme2018[Theorem~6.3] or @BEM[Theorem~7.12 (1)]) and cdh-locally left Kan extending @cons:first-chern and @cor:AH-compat yields:

#theorem[@BEM[Theorem~4.39(3)(4)]
][
  For any qcqs scheme $S$:

  + _Weight zero and $bb(Z)$-linear structure._ There is a natural map of presheaves of $bb(E)_infinity$-algebras
    $ Gamma_(cdh)(-, bb(Z)) -> bb(Z)(0)^(bb(A), cdh) $
    on qcqs schemes, fitting into a commutative diagram
    #align(center, diagram(
      spacing: (18mm, 10mm),
      node-stroke: none,
      {
        node((0, 0), $Gamma_(cdh)(-, bb(Z))$)
        node((1, 0), $bb(Z)(0)^(bb(A), cdh)$)
        node((0.5, 1), $KH$)
        edge((0, 0), (1, 0), "->")
        edge((0.5, 1), (0, 0), "->", label: $rk$, label-side: left)
        edge((0.5, 1), (1, 0), "->", label: "edge", label-side: right)
      },
    ))

  + _Weight one and first Chern class._ There is a natural map
    $ c_1^(bb(A),cdh) : Gamma_(cdh)(-, Gm)[-1] -> bb(Z)(1)^(bb(A),cdh), $
    fitting into a commutative diagram
    #align(center, diagram(
      spacing: (20mm, 12mm),
      node-stroke: none,
      {
        node((0, 0), $KH^(rk = 0)$)
        node((1, 0), $Fil^1_(bb(A),cdh) KH$)
        node((0, 1), $Gamma_(cdh)(-, Gm)[1]$)
        node((1, 1), $bb(Z)(1)^(bb(A),cdh) [2]$)
        edge((0, 0), (1, 0), "->")
        edge((0, 0), (0, 1), "->", label: $det$, label-side: right)
        edge((1, 0), (1, 1), "->", label: "edge", label-side: left)
        edge((0, 1), (1, 1), $c_1^(bb(A),cdh)[2]$, "->")
      },
    ))
    of presheaves of spectra on qcqs schemes.
] <thm:low-weights-Acdh>

#proof[
  The three functors on commutative rings $A mapsto bb(Z)$, $A mapsto A^times$, and $A mapsto kk(A)$ are each left Kan extended from essentially smooth local $bb(Z)$-algebras: 
  - the first is clear (the LKE diagram is constantly $bb(Z)$ over a contractible category), 
  - the second holds because $Gm$ is a smooth affine $bb(Z)$-scheme, and
  - the third is a result of Bhatt--Lurie (discussed in Talk~1). 
  
  Write $iota : sans("CAlg")_(bb(Z))^("sm,loc") arrow.hook sans("CAlg")_(bb(Z))^("loc")$ for the inclusion. The constructions of @cons:first-chern and @cor:AH-compat provide natural transformations --- the rank map $kk -> Gamma_(Nis)(-,bb(Z))$, the determinant $kk^(rk = 0) -> Gamma_(Nis)(-,Gm)[1]$, and the commutative diagrams --- between these functors restricted to smooth $bb(Z)$-algebras. By the universal property of left Kan extension, a natural transformation between two $op("LKE")_iota$-functors is determined by its restriction along $iota$, so the maps and their commutative diagrams extend uniquely from smooth $bb(Z)$-algebras to all commutative rings, and hence to presheaves on all qcqs schemes.

  Applying cdh sheafification, the theorem of Kerz--Strunk--Tamme gives $L_(cdh) kk tilde.eq KH$; similarly $L_(cdh) Gamma_(Nis)(-, bb(Z)) = Gamma_(cdh)(-, bb(Z))$ and $L_(cdh) Gamma_(Nis)(-,Gm) = Gamma_(cdh)(-,Gm)$. The extended maps therefore become the maps and diagrams stated in (1) and (2).
]

== Rational low weights

#corollary[@BEM[Corollary~4.60(1)]
][
  The maps of @thm:low-weights-Acdh are rational equivalences.
] <cor:rational-low-weights>

#proof[
  For each $j >= 0$, the presheaf $bb(Q)(j)^(bb(A),cdh)$ is a direct summand of $KH_(bb(Q))$ by @BEM[Theorem~4.47(2)]. Since $KH_(bb(Q))$ is the cdh sheafification of the left Kan extension of its restriction to smooth $bb(Z)$-schemes (see the proof of @BEM[Theorem~7.12(1)]), the same is true of $bb(Q)(j)^(bb(A),cdh)$. The result then follows by left Kan extending and cdh sheafifying the rational equivalences over regular noetherian schemes (@BEM[Proposition~4.56]).
]

== Assumed results

To pass from rational to integral equivalences, we need deeper inputs from the body of @BEM.

#theorem("Assumed results")[
  + _(Low weights for cdh-motivic cohomology.)_ For any qcqs scheme $S$:
    $ bb(Z)(0)^(cdh)(S) tilde.eq Gamma_(cdh)(S, bb(Z)) quad "and" quad c_1^(cdh) : Gamma_(cdh)(S, Gm)[-1] ->^(tilde) bb(Z)(1)^(cdh)(S) $
    (@BEM[Theorem~7.12(5)(6)]).

  + _($c_1^(bb(A))$ is an isomorphism over Dedekind domains.)_ For any scheme $X$ smooth over a field or a mixed characteristic Dedekind domain:
    $ Gamma_(Nis)(X, bb(Z)) ->^(tilde) bb(Z)(0)^(bb(A))(X) quad "and" quad c_1^(bb(A)) : Gamma_(Nis)(X, Gm)[-1] ->^(tilde) bb(Z)(1)^(bb(A))(X) $
    (@BEM[Corollary~6.26]).

  + _(Comparison in low weights.)_ For any qcqs scheme $S$ and $j lt.eq 1$:
    $ bb(Z)(j)^(cdh)(S) tilde.eq bb(Z)(j)^(bb(A))(S). $
] <thm:assumed>

== Integral low weights

#corollary[@BEM[Corollary~9.12(1)]
][
  For any qcqs scheme $S$:
  $ bb(Z)(0)^(bb(A))(S) tilde.eq Gamma_(cdh)(S, bb(Z)) quad "and" quad bb(Z)(1)^(bb(A))(S) tilde.eq Gamma_(cdh)(S, Gm)[-1]. $
] <cor:low-weights-integral>

#proof[
  Since $bb(Z)(j)^(bb(A))$ is $bb(A)^1$-invariant by construction, @thm:assumed (3) implies that $bb(Z)(j)^(cdh)$ is also $bb(A)^1$-invariant for $j lt.eq 1$. Both maps in the comparison chain $bb(Z)(j)^(cdh) -> bb(Z)(j)^(bb(A),cdh) -> bb(Z)(j)^(bb(A))$ are then equivalences, and the result follows from @thm:assumed (1).
]

== The second filtration quotient

We now describe the quotient $KH slash Fil^2_(bb(A),cdh) KH$ as a single recognizable object.

#definition[
  For a commutative ring $A$, the *derived Picard anima* is $Picd (A) := Pic(cal(D)(A))$, the Picard anima of the derived category $cal(D)(A)$ of $A$-modules. It sits in a fiber sequence
  $ calPic(A) -> Picd (A) ->^(rk) bb(Z), $
  exhibiting $Picd$ as an extension of $bb(Z)$ by $calPic$: the rank map sends an invertible complex to the rank of its class in $Kk_0$, and the fiber over $0$ consists of line bundles concentrated in degree $0$.

  The determinant $det : Kk(A) -> Picd (A)$ sending a perfect complex to its top exterior power is a map of $bb(E)_infinity$-ring spectra. The rank map $rk : Kk -> Gamma(-,bb(Z))$ factors as $Kk ->^(det) Picd ->^(rk) Gamma(-,bb(Z))$, and the restriction $det|_(Kk^(rk = 0)) : Kk^(rk = 0) -> calPic$ recovers the classical determinant on rank-$0$ K-theory.
] <def:derived-picard>

#corollary[
  For any qcqs scheme $S$, there is a natural equivalence
  $ KH slash Fil^2_(bb(A), cdh) KH tilde.eq L_(cdh) Picd $
  of presheaves of spectra on qcqs schemes. Equivalently, $Fil^2_(bb(A), cdh) KH tilde.eq L_(cdh) fib(det : Kk -> Picd)$.
] <cor:second-filtration-quotient>

#proof[
  By @cor:low-weights-integral, the graded pieces of the $bb(A)^1$-motivic filtration on $KH$ in low weights are (after cdh sheafification)
  $
    Fil^0_(bb(A),cdh) KH slash Fil^1_(bb(A),cdh) KH tilde.eq Gamma_(cdh)(-,bb(Z)) quad "and" quad Fil^1_(bb(A),cdh) KH slash Fil^2_(bb(A),cdh) KH tilde.eq Gamma_(cdh)(-,Gm)[1].
  $
  To assemble these into the quotient $KH slash Fil^2_(bb(A),cdh) KH$, we use the factorization of the rank map through the determinant: $KH ->^(det) L_(cdh) Picd ->^(rk) Gamma_(cdh)(-,bb(Z))$. The restriction of $det$ to $KH^(rk = 0) = Fil^1_(bb(A),cdh) KH$ lands in $L_(cdh) calPic = fib(rk : L_(cdh) Picd -> Gamma_(cdh)(-,bb(Z)))$.

  Writing $Fil^j$ for $Fil^j_(bb(A),cdh) KH$, we obtain a commutative diagram
  #align(center, diagram(
    spacing: (18mm, 11mm),
    node-stroke: none,
    {
      node((0, 0), $Fil^2$)
      node((1, 0), $Fil^1$)
      node((2, 0), $Fil^0 = KH$)
      node((0, 1), $0$)
      node((1, 1), $L_(cdh) calPic$)
      node((2, 1), $L_(cdh) Picd$)
      node((0, 2), $0$)
      node((1, 2), $0$)
      node((2, 2), $Gamma_(cdh)(-, bb(Z))$)

      edge((0, 0), (1, 0), "->")
      edge((1, 0), (2, 0), "->")
      edge((0, 1), (1, 1), "->")
      edge((1, 1), (2, 1), "->")
      edge((0, 2), (1, 2), "->")
      edge((1, 2), (2, 2), "->")

      edge((0, 0), (0, 1), "->")
      edge((1, 0), (1, 1), $det$, "->")
      edge((2, 0), (2, 1), $det$, "->")
      edge((0, 1), (0, 2), "->")
      edge((1, 1), (1, 2), "->")
      edge((2, 1), (2, 2), $rk$, "->")
    },
  ))
  in which every column is a fiber sequence. The bottom-right square is cartesian by the definition of $Picd$ as an extension of $bb(Z)$ by $calPic$, and the right rectangle (columns 1--2, rows 0--2) is cartesian because $Fil^0 slash Fil^1 tilde.eq Gamma_(cdh)(-, bb(Z))$. Since homotopies in $Gamma_(cdh)(-, bb(Z))$ are unique (it is discrete), the top-left square is cartesian: $Fil^1 slash Fil^2 tilde.eq L_(cdh) calPic$, which holds by @cor:low-weights-integral. It follows that the top rectangle (columns 0--2, row 0--1) is also cartesian, giving
  $ Fil^2 tilde.eq fib(det : KH -> L_(cdh) Picd), $
  or equivalently $KH slash Fil^2_(bb(A),cdh) KH tilde.eq L_(cdh) Picd$.
]

#remark[
  Writing $Fil^2_(bb(A),cdh) KH = L_(cdh) fib(det : Kk -> Picd)$ rather than $fib(det : Kk^(rk = 0) -> calPic)$ has the advantage that the filtration _quotient_ $L_(cdh) Picd$ is immediately visible. Note also that $KH slash Fil^2_(bb(A)) KH tilde.eq Picd$ holds in full generality (not only after cdh sheafification): this is a consequence of the general fact that the $bb(A)^1$-motivic filtration on K-theory has $Picd$ as its second quotient.
]


// ============================================================
//  Acknowledgments
// ============================================================

#heading(level: 1, numbering: none)[Acknowledgments]

I would like to thank Marc Hoyois and Marco Volpe for organizing this Oberseminar, Kokic for assistance with Typst, and Claude (Anthropic) for help with grammar and Typst typesetting.

// ============================================================
//  Bibliography
// ============================================================
#v(1em)
#line(length: 100%, stroke: 0.4pt + luma(200))

#bibliography("refs.bib", title: "References")
