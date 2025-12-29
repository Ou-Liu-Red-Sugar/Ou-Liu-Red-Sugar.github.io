---
title: "Basic Concepts on Higher Algebra"
date: 2025-09-22
tags:
  - Algebraic Pattern
  - Operad
  - Higher Algebra
  - Monoidal Category
categories:
  - Mathematics
ShowToc: true
TocOpen: false
comments: true
weight: 20
draft: false
description: This note introduces algebraic patterns and Segal objects, develops operads over algebraic patterns, and studies $\mathcal{O}$-monoidal categories together with $\mathcal{O}$-algebras in the Cartesian setting.
---

## Algebraic Pattern

Algebraic pattern is a blueprint for a notion of functors on a fixed category satisfying a Segal condition, suitable for formalizing homotopy-coherent algebra in the Cartesian setting.

Informally, algebraic pattern generalizes the active and inert morphisms in operads and chooses certain objects to control the Segal condition.

{{< definition >}}
An *algebraic pattern* is a category $\mathcal{O}$ equipped with:
1. A collection of objects called *elementary objects*.
2. A factorization system $(\mathcal{O}^{\text{inv}}, \mathcal{O}^{\text{act}})$ where every morphism factors uniquely (up to equivalence) as an *inert* morphism followed by an *active* morphism.

We let $\mathcal{O}^{\mathrm{el}}$ denote the full subcategory of $\mathcal{O}$ spanned by the elementary objects and the inert morphisms between them. For any object $X \in \mathcal{O}$, we also write
\[
\mathcal{O}^{\mathrm{el}}_{X/} := \mathcal{O}^{\mathrm{el}} \times_{\mathcal{O}^{\text{inv}}} \mathcal{O}^{\text{inv}}_{X/}.
\]
for the category of inter morphisms $X \to E$ with $E \in \mathcal{O}^{\text{el}}$.

A morphism of algebraic patterns from $\mathcal{O}$ to $\mathcal{P}$ is a functor $f \colon \mathcal{O} \to \mathcal{P}$ that preserves inert and active morphisms and elementary objects.

We will use $\mathsf{AlgPatt}$ to denote the category of algebraic patterns.
{{< /definition >}}

{{< remark >}}
A *factorization system* on a category $\mathcal{C}$ is a pair of subcategories $(\mathcal{L}, \mathcal{R})$ that contain all objects, such that for any morphism $f \colon X \to X'$, the anima of factorizations $X \xrightarrow{l} Y \xrightarrow{r} X'$ with $l \in \mathcal{L}$ and $r \in \mathcal{R}$ is contractible.
{{< /remark >}}

{{< proposition >}}
$\mathsf{AlgPatt}$ admits limits and filtered colimits, and the forgetful functor
\[
\mathsf{AlgPatt} \to \mathsf{Cat}
\]
preserves these.
{{< /proposition >}}

{{< proof >}}
{{< cite Chu_Haugseng_2021 "Corollary 5.5" >}}
{{< /proof >}}

{{< definition title="Trivial Pattern" >}}
*Trivial Pattern* $\mathsf{Triv}$ is the final object of $\mathsf{AlgPatt}$.
The underlying category of trivial pattern is the final category $*$.
{{< /definition >}}

{{< definition title="Empty Pattern" >}}
*Empty Pattern* $\varnothing$ is the initial object of $\mathsf{AlgPatt}$.
The underlying category of empty pattern is the initial category $\varnothing$.
{{< /definition >}}

{{< definition id="Commutative Pattern" title="Commutative Pattern" >}}
Consider the category of pointed finite sets $\mathsf{Fin}_*$ with $\langle n \rangle \coloneqq (\{0,1,\cdots,n\},0)$.
We say a morphism $f \colon \langle n \rangle \to \langle m \rangle$ is:
- *Inert*, if $f$ restricts to an isomorphism $\langle n \rangle \setminus f^{-1}(0) \to \langle m \rangle \setminus \{0\}$.
- *Active*, if $f^{-1}(0) = \{0\}$.

We make this an algebraic pattern by taking $\langle 1 \rangle$ to be the single elementary object and denote it by $\mathsf{Comm}$.
We refer to this pattern as *commutative pattern*.
{{< /definition >}}

{{< remark id="rmk-generalized-operad-pattern" >}}
In {{< thmref id="Commutative Pattern" >}}, if we take $\langle 0 \rangle$ and $\langle 1 \rangle$ to be the elementary objects, we can get a new algebraic pattern $\mathsf{Fin}_*^{\natural}$.
{{< /remark >}}


{{< definition title="Associative Pattern" >}}
Consider the opposite of the simplex category, $\Delta^{\operatorname{op}}$.
A morphism $f \colon [n] \to [m]$ in $\Delta^{\operatorname{op}}$ is:
- *Inert*, if its corresponding map $g \colon [m] \to [n]$ in $\Delta$ is an interval inclusion.
- *Active*, if its corresponding map $g \colon [m] \to [n]$ preserves endpoints.

We choose the object $[1]$ as the unique elementary object.
This algebraic pattern, denoted $\mathsf{Assoc}$, is called the *associative pattern*.
{{< /definition >}}

{{< definition title="$\mathbb{A}_n$-Pattern" >}}
For $1 \le n \le \infty$, let $\mathbb{A}_n$ denote the full subcategory of $\Delta^{\operatorname{op}}$ spanned by the objects $[m]$ for $0 \le m \le n$.

The category $\mathbb{A}_n$ can be endowed with an algebraic pattern structure inherited from $\mathsf{Assoc}$, in which the inert and active morphisms are precisely those that are inert or active in $\mathsf{Assoc}$, and the elementary object is given by $[1]$.
We will refer to $\mathbb{A}_n$ as the *$\mathbb{A}_n$-pattern*.
{{< /definition >}}

{{< remark >}}
One can find that the $\mathbb{A}_{\infty}$-pattern is the associative pattern.
{{< /remark >}}

{{< definition title="Nonunital $\mathbb{A}_n$-Pattern" >}}
Let $\Delta_{\operatorname{inj}} \subseteq \Delta$ denote the subcategory whose morphisms are strictly increasing maps.
For $0 \le n \le \infty$, let $\mathbb{A}_n^{\operatorname{nu}}$ denote the full subcategory of $\Delta_{\operatorname{inj}}^{\operatorname{op}}$ spanned by the objects $[m]$ for $1 \le m \le n$ (so $\mathbb{A}_0^{\operatorname{nu}} \simeq \varnothing$).

The category $\mathbb{A}_n^{\operatorname{nu}}$ can be endowed with an algebraic pattern structure inherited from $\mathsf{Assoc}$, in which the inert and active morphisms are precisely those that are inert or active in $\mathsf{Assoc}$, and the elementary object is given by $[1]$.
We will refer to $\mathbb{A}_n^{\operatorname{un}}$ as the *nonunital $\mathbb{A}_n$-pattern*.
{{< /definition >}}

{{< definition title="$\mathsf{E}_k$-Pattern" >}}
Consider the $k$-copies of the opposite of simplex categories, $\Delta^{k,\operatorname{op}} \coloneqq (\Delta^{\operatorname{op}})^{\times k}$, equipped with the factorization system where the inert and active maps are those that are inert or active in $\mathsf{Assoc}$ in each component.
We choose the object $([1],\cdots,[1])$ to be the unique elementary object.
This algebraic pattern, denoted $\mathsf{E}_k$, is called the *$\mathsf{E}_k$-pattern*.
{{< /definition >}}

Next, we introduce patterns related to modules.

{{< definition title="Commutative Modules Pattern" >}}
The underlying category of *commutative modules pattern* $\mathsf{CM}$ is the category $\mathsf{Fin}_{*,\langle 1 \rangle/}$.
Its factorzation system is lifted from $\mathsf{Comm}$ along the canonical left fibration $\mathsf{Fin}_{*,\langle 1 \rangle/} \to \mathsf{Fin}_*$.
And the elementary objects are given by $\langle 1 \rangle \to \{0\} \subseteq \langle 1 \rangle$ and $\operatorname{id}_{\langle 1 \rangle}$.

By construction, an object $\langle 1 \rangle \to \langle n \rangle$ in $\mathsf{Fin}_{*,\langle 1 \rangle/}$ can be regarded as a pair $(\langle n \rangle,i)$, where $i$ is the image of $1 \in \langle 1 \rangle$.
The morphism in $\mathsf{CM}$, which is form $f \colon (\langle n \rangle,i) \to (\langle h \rangle,j)$, refers to the pointed map $\langle n \rangle \to \langle h \rangle$ with $f(i) = j$.
{{< /definition >}}

{{< definition title="Bimodule Pattern" >}}
The underlying category of *bimodule pattern* $\mathsf{BM}$ is the category $(\Delta_{/[1]})^{\operatorname{op}}$.
Its factorization system is lifted from $\mathsf{Assoc}$ along the canonical left fibration $(\Delta_{/[1]})^{\operatorname{op}} \to \Delta^{\operatorname{op}}$.
And the elementary objects are given by $[1] \simeq \{0\} \to [1]$, $[1] \simeq \{1\} \to [1]$ and $\operatorname{id}_{[1]}$.

By construction, an object $[n] \to [1]$ in $\Delta_{/[1]}$ can be viewed as an ordered sequence $(i_0, \dots, i_n)$ where $0 \le i_0 \le \dots \le i_n \le 1$.
The elementary objects correspond to the sequences $(0,0)$, $(0,1)$, and $(1,1)$.
{{< /definition >}}

{{< definition title="Left Module Pattern, Simplicial model version" >}}
The underlying category of *left module pattern* $\mathsf{LM}$ is the category $\Delta^{\operatorname{op}} \times [1]$.
Consider the functor $T \colon \Delta^{\operatorname{op}} \to \Delta^{\operatorname{op}}$, sending $[n]$ to $[n] \star [0] \simeq [n+1]$.
Then the functor induces a functor
\[
(T \to \operatorname{id}) \colon \Delta^{\operatorname{op}} \times [1] \to \Delta^{\operatorname{op}}.
\]
The algebraic pattern structure of $\mathsf{LM}$ is lifted from $\mathsf{Assoc}$ along $(T \to \operatorname{id})$.
More precisely,
- $\Delta^{\operatorname{op}} \times \{1\}$ is precisely $\mathsf{Assoc}$.
- For each $[n] \in \Delta$, the induced morphism $([n],0) \to ([n],1)$ is an inert morphism in $\mathsf{LM}$.
- If $f \colon [h] \to [n]$ is an inert morphism in $\Delta$ such that $f(h) = n$, then the corresponding morphism $([n],0) \to ([h],0)$ is an inert morphism in $\mathsf{LM}$.
- If $g \colon [h] \to [n]$ is a morphism in $\Delta$ such that $g(0) = 0$, then the corresponding morphism $([n],0) \to ([h],0)$ is an active morphism in $\mathsf{LM}$.
- The elementary objects of $\mathsf{LM}$ are $([0],0)$ (often denoted by $\mathfrak{m}$) and $([1],1)$ (often denoted by $\mathfrak{a}$).
{{< /definition >}}

{{< remark >}}
Saying "left" versus "right" is just a convention;
the same algebraic pattern also encodes right actions.
{{< /remark >}}
## Segal Object

The algebra represented by the algebraic pattern is called Segal object.

{{< definition >}}
Let $\mathcal{O}$ be an algebraic pattern.
A functor $X \colon \mathcal{O} \to \mathcal{C}$ is called *Segal $\mathcal{O}$-object* of category $\mathcal{C}$ if for every $O \in \mathcal{O}$ the induced functor
\[
\left(\mathcal{O}_{O/}^{\text{el}}\right)^{\lhd} \to \mathcal{O} \xrightarrow{X} \mathcal{C}
\]
is a limit diagram.
If $\mathcal{C}$ has limit for diagrams indexed by $\mathcal{O}_{O/}^{\text{el}}$ for all $O \in \mathcal{O}$ in which case we say that $\mathcal{C}$ is *$\mathcal{O}$-complete*, then this condition is equivalent to the canonical morphisms
\[
X(O) \to \underset{E \in \mathcal{O}_{O/}^{\text{el}}}{\operatorname{lim}}\, X(E).
\]
{{< /definition >}}

Now, we will provide some examples to explain how algebraic patterns work.

{{< example title="Segal $\mathsf{Trivial}$-Objects" >}}
Let $\mathcal{C}$ be a category. Then the Segal $\mathsf{Trivial}$-object in $\mathcal{C}$ is just an object in $\mathcal{C}$.
{{< /example >}}

{{< example title="Segal $\mathsf{Comm}$-Objects" id="Ex-Comm" >}}
Let $\mathcal{C}$ be a category with finite products, and let $X \colon \mathsf{Comm} \to \mathcal{C}$ be a functor.
The Segal condition on $X$ is
\[
X(\langle n \rangle) \simeq \underset{(\langle n \rangle \to \langle 1 \rangle) \in \mathsf{Comm}^{\text{inv}}}{\operatorname{lim}}\, X(\langle 1 \rangle).
\]
We can identify the category $\mathsf{Comm}^{\text{el}}_{\langle n \rangle/}$ with the set of inert morphisms $\{\rho_i \colon i = 1, \dots, n\}$, where $\rho_i \colon \langle n \rangle \to \langle 1 \rangle$ is given by
\[
\rho_i(j) =
\begin{cases}
1 & \text{if } j=i, \\
0 & \text{if } j \neq i.
\end{cases}
\]
Then, the Segal condition says that the canonical map
\[
(\rho_i^*)_{i = 1}^n \colon X(\langle n \rangle) \to \prod_{i=1}^n X(\langle 1 \rangle)
\]
is an equivalence. This means that for each non-basepoint element $i \in \langle n \rangle$ (where $i \neq 0$), we can specify a corresponding object $x_i \in X(\langle 1 \rangle)$. Therefore, we can describe an object in $X(\langle n \rangle)$ as a sequence $(x_1, \dots, x_n)$.

Next, we will show how inert and active morphisms work:
- Let $f \colon \langle n \rangle \to \langle m \rangle$ be an inert morphism in $\mathsf{Comm}$. Then $f$ corresponds to the projection
\[
X(f) \colon X(\langle n \rangle) \simeq X(\langle 1 \rangle)^n \to X(\langle 1 \rangle)^m \simeq X(\langle m \rangle), \quad
(x_1, \dots, x_n) \mapsto (x_{f^{-1}(1)}, \dots, x_{f^{-1}(m)}).
\]
- Let $g \colon \langle n \rangle \to \langle m \rangle$ be an active morphism in $\mathsf{Comm}$, and let $I_j \coloneqq g^{-1}(j)$ for $j \in \{1, \dots, m\}$. Then $g$ corresponds to the morphism
\[
X(g) \colon X(\langle n \rangle) \simeq X(\langle 1 \rangle)^n \to X(\langle 1 \rangle)^m \simeq X(\langle m \rangle), \quad
(x_1, \dots, x_n) \mapsto \left(\prod_{i_1 \in I_1} x_{i_1}, \dots, \prod_{i_m \in I_m} x_{i_m}\right).
\]
In particular, the active morphism $s \colon \langle 2 \rangle \to \langle 2 \rangle$ that swaps $1$ and $2$ corresponds to the map $(x_1, x_2) \mapsto (x_2, x_1)$, which enforces the commutativity.
Active morphisms represent the “commutative multiplication”.

When we set $\mathcal{C} = \mathsf{Set}$, we find that $\mathsf{Comm}$-Segal objects are precisely commutative monoids.
{{< /example >}}

{{< example title="Segal $\mathsf{Assoc}$-Objects" id="Ex-Assoc" >}}
Let $\mathcal{C}$ be a category with finite products, and let $X \colon \mathsf{Assoc} \to \mathcal{C}$ be a simplicial object. The Segal condition on $X$ is
\[
X([n]) \simeq \underset{([n] \to [1]) \in \mathsf{Assoc}^{\text{inv}}}{\operatorname{lim}}\, X([1]).
\]
Now, let's analyze the limit above. An inert morphism $e_i \colon [n] \to [1]$ in $\Delta^{\operatorname{op}}$ corresponds to an inclusion $[1] \hookrightarrow [n]$ in $\Delta$ with image $\{i-1, i\}$. Notice that $[n]$ is a linearly ordered set, and one can think of it as being cut into $n$ pieces:
\[
[n] = \left\{0 \xrightarrow{e_1} 1 \xrightarrow{e_2} \cdots \xrightarrow{e_n} n \right\},
\]
where the segment $i-1 \to i$ corresponds to the inert map $e_i$. The Segal condition says that the canonical map
\[
(e_i^*)_{i=1}^n \colon X([n]) \to \prod_{i=1}^n X([1])
\]
is an equivalence. This means we can associate each arrow $i-1 \to i$ in $[n]$ with a corresponding object $x_i \in X([1])$. Therefore, we can describe an object in $X([n])$ as a sequence $(x_1, \dots, x_n)$.

Next, we will show how inert and active morphisms work:
- Let $f \colon [n] \to [m]$ be an inert morphism in $\mathsf{Assoc}$, and let $f^{\operatorname{op}} \colon [m] \to [n]$ be the corresponding morphism in $\Delta$. In the Segal object $X$, the morphism $X(f)$ corresponds to a projection:
\[
X([n]) \simeq X([1])^n \to X([1])^m \simeq X([m]), \quad
(x_1, \dots, x_n) \mapsto (x_{f^{\operatorname{op}}(1)}, \dots, x_{f^{\operatorname{op}}(m)}).
\]
- Let $g \colon [n] \to [m]$ be an active morphism in $\mathsf{Assoc}$, and let
\[
I_j \coloneqq \{(g^{\operatorname{op}})^{-1}(j-1)+1,\cdots,(g^{\operatorname{op}})^{-1}(j)\}
\]
for $j \in \{1, \dots, m\}$. In the Segal object $X$, the morphism $X(g)$ corresponds to:
\[
X([n]) \simeq X([1])^n \to X([1])^m \simeq X([m]), \quad
(x_1, \dots, x_n) \mapsto \left(\prod_{i_1 \in I_1} x_{i_1}, \dots, \prod_{i_m \in I_m} x_{i_m}\right),
\]
which represents “multiplication”.

When we set $\mathcal{C} = \mathsf{Set}$, we find that $\mathsf{Assoc}$-Segal objects are precisely monoids.
{{< /example >}}

{{< remark >}}
Note that:
- the morphism $[0] \to [1]$ in $\mathsf{Assoc}$ corresponds to the morphism $1 \colon * \to X([1])$, which is the unit of the associative algebra.
- the degenerate morphism $\operatorname{s}^i\colon [n] \to [n-1]$ corresponds to the morphism
\[
X([n-1]) \to X([n]), \quad
(x_1,\cdots,x_{n-1}) \mapsto (x_1,\cdots,\underset{i\text{-th}}{1},\cdots, x_{n-1}).
\]
Therefore, if we remove these data, we will get the Segal $\mathbb{A}_{\infty}^{\operatorname{nu}}$-object (Definition~\ref{def-nonunital-An-pattern}).
{{< /remark >}}

{{< example title="Segal $\mathsf{CM}$-Objects" >}}
Let $\mathcal{C}$ be a category with finite products, and $X \colon \mathsf{CM} \to \mathcal{C}$ be a functor. The Segal condition on $X$ is
\[
X(\langle n \rangle,i) \simeq \underset{(\langle h \rangle,j) \in \mathsf{CM}^{\text{el}}_{(\langle n \rangle,i)/}}{\operatorname{lim}}\, X(\langle h \rangle,j).
\]
Now, let's analyze the limit above.
When $i = 0$, the Segal condition is equivalent to saying that
\[
X(\langle n \rangle,0) \simeq \prod_{j = 1}^n X(\langle 1 \rangle,0).
\]

When $i \neq 0$, the Segal condition is equivalent to saying that
\[
X(\langle n \rangle,i) \simeq \prod_{j = 1}^{i-1} X(\langle 1 \rangle,0) \times X(\langle 1 \rangle,1) \times \prod_{j = i+1}^n X(\langle 1 \rangle,0).
\]

We will refer to $X(\langle 1 \rangle,0)$ as $A$ and $X(\langle 1 \rangle,1)$ as $M$.
Next, we will show how inert and active morphisms work:
- Let $f \colon (\langle n \rangle,i) \to (\langle h \rangle,j)$ be an inert morphism in $\mathsf{CM}$.
  - If $i = 0$, we have $j = 0$ by construction of $\mathsf{CM}$, in this case, $f$ corresponds to the projection
\[
\begin{aligned}
A^n &\to A^h\\
(a_1,\cdots,a_n) &\mapsto (a_{f^{-1}(1)},\cdots, a_{f^{-1}(h)}).
\end{aligned}
\]
  - If $i \neq 0$ with $j = 0$, then $f$ corresponds to the projection
\[
\begin{aligned}
A^{i-1} \times M \times A^{n-i} &\to A^h\\
(a_1,\cdots,m,\cdots,a_n) &\mapsto (a_{f^{-1}(1)},\cdots,a_{f^{-1}(h)}).
\end{aligned}
\]
  - If $i \neq 0$ with $j \neq 0$, then $f$ corresponds to the projection
\[
\begin{aligned}
A^{i-1} \times M \times A^{n-i} &\to A^{j-1} \times M \times A^{h-j}\\
(a_1,\cdots,m,\cdots,a_n) &\mapsto (a_{f^{-1}(1)},\cdots,m,\cdots,a_{f^{-1}(h)}).
\end{aligned}
\]
- Let $g \colon (\langle n \rangle,i) \to (\langle h \rangle,j)$ be an active morphism in $\mathsf{CM}$.
  - If $i = 0$, then we have $j = 0$ by construction of $\mathsf{CM}$, in this case, let $I_j \coloneqq g^{-1}(j)$ for $j \in \{1, \dots, m\}$, we have $g$ corresponds to the morphism
\[
\begin{aligned}
A^n &\to A^h\\
(a_1,\cdots,a_n) &\mapsto \left(\prod_{i_1 \in I_1}a_{i_1},\cdots, \prod_{i_h \in I_h}a_{i_h} \right).
\end{aligned}
\]
  - If $i \neq 0$, then by the description of the active morphism, we know that $j \neq 0$. Let $I_j \coloneqq g^{-1}(j)$ for $j \in \{1, \dots, m\}$, we have $g$ corresponds to the morphism
\[
\begin{aligned}
A^{i-1} \times M \times A^{n-i} &\to A^{j-1} \times M \times A^{h-j}\\
(a_1,\cdots,a_n) &\mapsto \left(\prod_{i_1 \in I_1}a_{i_1},\cdots, \left(\prod_{i_j \in I_j} a_{i_j}\right)\cdot m, \cdots, \prod_{i_h \in I_h}a_{i_h} \right).
\end{aligned}
\]
which represents “action”.
{{< /example >}}

{{< example title="Segal $\mathsf{LM}$-Objects" >}}
Let $\mathcal{C}$ be a category with finite products, and $X \colon \mathsf{LM} \to \mathcal{C}$ be a functor. The Segal condition on $X$ is
\[
X([n],i) \simeq \underset{([h],j) \in \mathsf{LM}^{\text{el}}_{([n],i)/}}{\operatorname{lim}}\, X([h],j).
\]
Now, let's analyze the limit above.
Consider the canonical projection $p \colon ([n],0) \to ([0],0)$ in $\mathsf{LM}$ corresponds to an inclusion $[0] \simeq \{n\} \hookrightarrow [n]$.

When $i = 1$, the Segal condition is equivalent to saying that
\[
\left((e_i,1)^*\right)_{i = 1}^n \colon X([n],1) \simeq \prod_{i = 1}^n X([1],1).
\]

When $i = 0$, the Segal condition is equivalent to saying that
\[
\left((e_i,0)^*\right)_{i = 1}^{n} \times p \colon X([n],0) \to \left(\prod_{i = 1}^n X([1],1)\right) \times X([0],0).
\]

We will refer to $X([1],1)$ as $A$ and $X([0],0)$ as $M$.

That is, the Segal $\mathsf{LM}$-objects in $\mathcal{C}$ consists of those natural transformations
\[
M_{\bullet} \Rightarrow A_{\bullet}
\]
of simplicial objects $M_{\bullet},A_{\bullet} \colon \Delta^{\operatorname{op}} \to \mathcal{C}$ such that $A_{\bullet}$ is a Segal $\mathsf{Assoc}$-object in $\mathcal{C}$ and for all $n \ge 0$, we have
\[
M_n = A^n \times M.
\]

Now we will show how inert and active morphisms work:
- $\{1\} \times \Delta^{\operatorname{op}}$ consistent with $\mathsf{Assoc}$.
- For each $[n] \in \Delta$, the induced morphism $([n],0) \to ([n],1)$ corresponds to the projection
\[
\begin{aligned}
M_n = A^n \times M &\to A^n\\
(a_1,\cdots,a_n,m) &\mapsto (a_1,\cdots,a_n).
\end{aligned}
\]
- Let $f \colon ([n],0) \to ([h],0)$ be an inert morphism in $\mathsf{LM}$,
denote its image under $(T \to \operatorname{id})$ as $\tilde{f} \colon [n+1] \to [h+1]$.
Then $f$ corresponds to the projection
\[
\begin{aligned}
M_n = A^n \times M &\to A^h \times M = M_h \\
(a_1,\cdots,a_n,m) &\mapsto \left(a_{\tilde{f}^{\operatorname{op}}(1)},\cdots,a_{\tilde{f}^{\operatorname{op}}(h)},m\right).
\end{aligned}
\]
- Let $g \colon ([n],0) \to ([h],0)$ be an active morphism in $\mathsf{LM}$, denote its image under $(T \to \operatorname{id})$ as $\tilde{g} \colon [n+1] \to [h+1]$. Let
\[
I_j \coloneqq \{(\tilde{g}^{\operatorname{op}})^{-1}(j-1)+1,\cdots,(\tilde{g}^{\operatorname{op}})^{-1}(j)\}
\]
for $j \in \{1, \dots, h+1\}$.
Then $g$ corresponds to the morphism
\[
\begin{aligned}
M_n = A^n \times M &\to A^h \times M = M_h\\
(a_1,\cdots,a_n,m) &\mapsto \left(\prod_{i_1 \in I_1} a_{i_1},\cdots,\prod_{i_h \in I_h} a_{i_h},\left(\prod_{i_{h+1} \in I_{h+1}} a_{i_{h+1}}\right)\cdot m \right)
\end{aligned}
\]
which represents “left action”.
{{< /example >}}
## Operad Over An Algebraic Pattern

In this section, we introduce *operads*, which are mathematical structures designed to encode the abstract properties of algebraic operations. Building on the notion of algebraic patterns, operads allow us to describe entire algebraic theories, such as the theory of homotopy-coherence algebras.

For more heuristics of operads, we refer to the excellent overview in {{< cite Cno25 "Chapter 10" >}}.

An operad $\mathcal{O}$ over an algebraic pattern $\mathcal{P}$ can be regarded as a category of “$\mathcal{P}$-type” operation, where the “$\mathcal{P}$-type” means Segal condition of $\mathcal{P}$.

{{< definition title="Operad" >}}
Let $\mathcal{P}$ be an algebraic pattern.
An *$\mathcal{P}$-operad* is a functor
\[
p \colon \mathcal{O} \to \mathcal{P}
\]
with the algebraic pattern structure lifted from $\mathcal{P}$ such that:
1. $\mathcal{O}$ has $p$-coCartesian lifts of inert morphisms in $\mathcal{P}$.
2. For $P \in \mathcal{P}$, let $\mathcal{O}_{P}$ denote the fiber of $P$.
For $X \in \mathcal{O}_{P}$, if
\[
\xi \colon \left( \mathcal{P}_{P/}^{\text{el}} \right)^{\lhd} \to \mathcal{C}
\]
is a diagram of coCartesian morphisms over the object of $\mathcal{P}_{P/}^{\text{el}}$, then for $Y \in \mathcal{O}_{P'}$, the commutative square
{{< tikzcd >}}
\operatorname{Hom}_{\mathcal{O}}(Y,X) \ar[r]\ar[d] &
\underset{\alpha \colon P \to O \in \mathcal{P}_{P/}^{\text{el}}}{\operatorname{lim}}\, \operatorname{Hom}_{\mathcal{O}}(Y,\xi(\alpha)) \ar[d] \\
\operatorname{Hom}_{\mathcal{P}}(P',P) \ar[r] &
\underset{\alpha \colon P \to O \in \mathcal{P}_{P/}^{\text{el}}}{\operatorname{lim}}\, \operatorname{Hom}_{\mathcal{P}}(P',O)
{{< /tikzcd >}}
is Cartesian.
3. The functor
\[
\mathcal{O}_{P} \to \underset{O \in \mathcal{P}_{P/}^{\text{el}}}{\operatorname{lim}}\, \mathcal{O}_{O}
\]
is an equivalence.

We refer to $\mathsf{Op}(\mathcal{P})$ as the category of $\mathcal{P}$-operads and functors over $\mathcal{P}$ that preserve inert coCartesian morphisms.
{{< /definition >}}

{{< remark >}}
When we consider the category (without algebraic pattern structure) of a $\mathcal{P}$-operad $\mathcal{O}$, we will denote it as $\mathcal{O}^{\otimes}$.
{{< /remark >}}

{{< example title="Operad" >}}
$\mathsf{Comm}$-operad is precisely the operad in the sense of {{< cite HA "Definition 2.1.1.10" >}}.
Unless specified otherwise, we will use the term “operad” to mean a $\mathsf{Comm}$-operad and denote its category by $\mathsf{Op}$.
{{< /example >}}

{{< example title="Generalized Operad" >}}
By {{< thmref id="rmk-generalized-operad-pattern" >}}, one can consider $\mathsf{Fin}_*^{\natural}$-operad, which is precisely the generalized operad in the sense of {{< cite HA "Definition 2.3.2.1" >}}.
Unless specified otherwise, we will use the term “generalized operad” to mean a $\mathsf{Fin}_*^{\natural}$-operad and denote its category by $\mathsf{Op}^{\operatorname{gen}}$.
{{< /example >}}

{{< remark >}}
Consider the inclusion
\[
\mathsf{Op} \subseteq \mathsf{Op}^{\operatorname{gen}}.
\]
By {{< cite HA "Proposition 2.1.4.6" >}}, {{< cite HA "Remark 2.3.2.4" >}}, and {{< cite HTT "Proposition A.3.7.6" >}}, one can find that both $\mathsf{Op}$ and $\mathsf{Op}^{\operatorname{gen}}$ are presentable.
And $\mathsf{Op} \hookrightarrow \mathsf{Op}^{\operatorname{gen}}$ preserves limits.
Therefore, it admits a left adjoint
\[
\operatorname{L}_{\operatorname{gen}} \colon \mathsf{Op}^{\operatorname{gen}} \to \mathsf{Op}.
\]
{{< /remark >}}

{{< example title="Planar Operad" >}}
$\mathsf{Assoc}$-operad is the planar operad in the sense of {{< cite HA "Definition 4.1.3.2" >}}.
Unless specified otherwise, we will use the term “planar operad” to mean a $\mathsf{Assoc}$-operad and denote its category by $\mathsf{Op}^{\operatorname{ns}}$.
{{< /example >}}

If
\[
f \colon \mathcal{O} \to \mathcal{P}
\]
is a functor between algebraic patterns that preserves the factorization system and elementary objects, and moreover, the induced functor
\[
\mathcal{O}_{X/}^{\text{el}} \to \mathcal{P}_{f(X)/}^{\text{el}}
\]
is initial, that is, let $F \colon \mathcal{P}_{f(X)/}^{\text{el}} \to \mathcal{C}$, then
\[
\operatorname{lim} F \simeq \operatorname{lim} F \circ f.
\]
Then the pullback functor
\[
f^* \colon \mathsf{Op}(\mathcal{P}) \to \mathsf{Op}(\mathcal{O})
\]
admits a left adjoint under mild assumptions.

{{< example title="Cut" >}}
Define a functor
\[
\operatorname{Cut} \colon \Delta^{\operatorname{op}} \to \mathsf{Fin}_*
\]
that takes $[n]$ to $\langle n \rangle$ and a morphism $\varphi \colon [n] \to [m]$ in $\Delta$ to the map
\[
\operatorname{Cut}(\varphi) \colon \langle m \rangle \to \langle n \rangle
\]
given by
\[
\operatorname{Cut}(\varphi)(i) =
\begin{cases}
j, & \varphi(j-1) < i \leq \varphi(j), \\
0, & \text{otherwise}.
\end{cases}
\]
Pulling back along this gives a functor
\[
\mathsf{Op} \to \mathsf{Op}^{\operatorname{ns}}
\]
that informally “forgets symmetric group actions”.
Its left adjoint is a “symmetrization” functor
\[
\mathsf{Op}^{\operatorname{ns}} \to \mathsf{Op}.
\]
In fact, {{< cite BHS24 "Theorem 5.1.1" >}} proves a comparison result that gives conditions for certain functors as above to induce equivalences.
{{< /example >}}

Let us examine the structure of a $\mathsf{Comm}$-operad $\mathcal{O}$ in more detail.
We refer to the fiber
\[
\mathcal{O}_{\langle 1 \rangle} \coloneqq p^{-1}(\langle 1 \rangle)
\]
as the *underlying category of the operad* $\mathcal{O}$.
We denote its groupoid core by
\[
\mathcal{O}^{\simeq} \coloneqq \left(\mathcal{O}_{\langle 1 \rangle}^{\otimes}\right)
\]
and refer to it as the *anima of colors of* $\mathcal{O}$.

For $\langle n \rangle \in \mathsf{Fin}_*$, condition~(3) guarantees that every object in $\mathcal{O}_{I}^{\otimes}$ may be uniquely written as a product
\[
\prod_{i \in I} x_i
\]
for some colors $x_i \in \mathcal{O}^{\simeq}$.
We also denote such a product as an unordered tuple $\{x_i\}_{i \in I}$.

Given another color $y \in \mathcal{O}^{\simeq}$, we define the *anima of multimorphisms (or anima of operations)* in $\mathcal{O}$ from $\{x_i\}_{i \in I}$ to $y$ as the anima of morphisms in $\mathcal{O}^{\otimes}$ that map to the active morphism $\langle n \rangle \to \langle 1 \rangle$:
{{< tikzcd >}}
\mathcal{O}(\{x_i\}_{i \in I}; y) \ar[r]\ar[d]\ar[dr,phantom,pos=.2,"\lrcorner"] &
\operatorname{Hom}_{\mathcal{O}^{\otimes}}(\{x_i\}_{i \in I}, y)\ar[d,"p"] \\
* \ar[r] & \operatorname{Hom}_{\mathsf{Fin}_*}(\langle n \rangle,\langle 1 \rangle)
{{< /tikzcd >}}

A multimorphism in an operad $\mathcal{O}$ represents an abstract operation with multiple inputs.
When interpreted in a symmetric monoidal category $\mathcal{C}$, this corresponds to a morphism of the form
\[
x_1 \otimes \cdots \otimes x_n \to y.
\]

At the end of this section, we will give the notion *weakly enrichment*.

{{< definition >}}
Let $\mathcal{C} \to \mathsf{Assoc}$ be a planar operad, and let $\mathcal{M}$ be a category.
We say *$\mathcal{M}$ is weakly enriched over $\mathcal{C}$* if there exists a $\mathsf{LM}$-operad $\mathcal{O}$ such that
\[
\mathcal{O}_{\mathfrak{a}}^{\otimes} \simeq \mathcal{C}
\quad\text{and}\quad
\mathcal{O}_{\mathfrak{m}}^{\otimes} \simeq \mathcal{M}.
\]
{{< /definition >}}

## $\mathcal{O}$-Monoidal Category And $\mathcal{O}$-Algebra

In this section, we will consider $\mathcal{O}$-monoidal category and $\mathcal{O}$-algebra for some algebraic pattern $\mathcal{O}$.

By the discussion above, it is suitable to consider algebraic objects in the Cartesian setting.

{{< definition title="Cartesian pattern" >}}
A *Cartesian pattern* is an algebraic pattern $\mathcal{O}$ equipped with a morphism of algebraic patterns
\[
|-| \colon \mathcal{O} \to \mathsf{Comm}
\]
such that for every $O \in \mathcal{O}$, the induced functor
\[
\mathcal{O}_{O/}^{\text{el}} \to \mathsf{Comm}_{|O|/}^{\text{el}}
\]
is an equivalence.
{{< /definition >}}

{{< remark >}}
All of the examples we considered before are Cartesian patterns.
{{< /remark >}}

Now, one can define the $\mathcal{O}$-monoidal categories and $\mathcal{O}$-algebras in them.

{{< definition >}}
Let $\mathcal{O}$ be a Cartesian pattern.
An $\mathcal{O}$-*monoidal category* is a coCartesian fibration
\[
p_{\mathcal{C}} \colon \mathcal{C}^{\otimes} \to \mathcal{O}
\]
whose associated functor $\mathcal{O} \to \mathsf{Cat}$ is an $\mathcal{O}$-Segal object.
{{< /definition >}}

{{< remark >}}
One can find that every $\mathcal{O}$-monoidal category is an $\mathcal{O}$-operad, if we lift the algebraic pattern structure along $p_{\mathcal{C}}$.
{{< /remark >}}

{{< definition id="def-O-monoidal-functor" >}}
Let $\mathcal{O}$ be a Cartesian pattern and $\mathcal{V}^{\otimes}$, $\mathcal{W}^{\otimes}$ be $\mathcal{O}$-monoidal categories.
A *lax $\mathcal{O}$-monoidal functor* between them is a commutative triangle
{{< tikzcd >}}
\mathcal{V}^{\otimes} \ar[dr]\ar[rr,"F"] && \mathcal{W}^{\otimes}\ar[dl] \\
& \mathcal{O}
{{< /tikzcd >}}
such that $F$ preserves inert morphisms.
Equivalently, a lax $\mathcal{O}$-monoidal functor is a morphism of algebraic patterns over $\mathcal{O}$.

If the functor $F \colon \mathcal{V}^{\otimes} \to \mathcal{W}^{\otimes}$ preserves *all* coCartesian morphisms over $\mathcal{O}$,
we call it an *$\mathcal{O}$-monoidal functor*.
{{< /definition >}}

{{< example >}}
A *monoidal category* is a $\mathsf{Assoc}$-monoidal category $\mathcal{C}^{\otimes}$.
We will denote the image of $[1]$ by $\mathbb{1}_{\mathcal{C}}$ and refer to it as the unit of the monoidal structure.
We also let $\mathcal{C}$ denote the fiber of $[1]$.
In this context, $\mathcal{C}^{\otimes}$ will be referred to as the monoidal structure on $\mathcal{C}$.
By {{< thmref id="Ex-Assoc" >}}, the active morphism $[2] \to [1]$ in $\mathsf{Assoc}$ corresponds to a functor
\[
-\otimes- \colon \mathcal{C} \times \mathcal{C} \to \mathcal{C},
\]
which we will refer to as the *tensor product functor*.
{{< /example >}}

{{< example >}}
A *symmetric monoidal category* is a $\mathsf{Comm}$-monoidal category $\mathcal{C}^{\otimes}$.
We will denote the image of $\langle 1 \rangle$ by $\mathbb{1}_{\mathcal{C}}$ and refer to it as the unit of the monoidal structure.
We also let $\mathcal{C}$ denote the fiber of $\langle 1 \rangle$.
In this context, $\mathcal{C}^{\otimes}$ will be referred to as the symmetric monoidal structure on $\mathcal{C}$.
By {{< thmref id="Ex-Comm" >}}, the active morphism $\langle 2 \rangle \to \langle 1 \rangle$ corresponds to a functor
\[
-\otimes- \colon \mathcal{C} \times \mathcal{C} \to \mathcal{C},
\]
which we will refer to as the *tensor product functor*.
{{< /example >}}


Let $X \colon \mathsf{LM} \to \mathsf{Cat}$ be a $\mathsf{LM}$-monoidal category.
Using Grothendieck–Lurie construction, one can get a coCartesian fibration
\[
p \colon \mathcal{O} \to \mathsf{LM}.
\]
Let $\mathcal{O}_{\mathfrak{a}}$ and $\mathcal{O}_{\mathfrak{m}}$ be the fiber of $\mathfrak{a}$ and $\mathfrak{m}$, respectively.
One can imply the existence of the following structures:
- The fiber $\mathcal{O}_{\mathfrak{a}}$ is a monoidal category.
- The fiber $\mathcal{O}_{\mathfrak{m}}$ is a category that is a left module over $\mathcal{O}_{\mathfrak{a}}$, meaning there is an action functor
\[
\otimes \colon \mathcal{O}_{\mathfrak{a}} \times \mathcal{O}_{\mathfrak{m}} \to \mathcal{O}_{\mathfrak{m}}
\]
which is well-defined up to homotopy.

{{< definition >}}
Let $\mathcal{C}$ be a monoidal category.
We say a category $\mathcal{M}$ is $\mathcal{C}$-*linear* if there exists an $\mathsf{LM}$-Segal object in $\mathsf{Cat}$ given by a coCartesian fibration
\[
p \colon \mathcal{O} \to \mathsf{LM}
\]
satisfying the following two properties:
- $\mathcal{O}_{\mathfrak{a}} \simeq \mathcal{C}$;
- $\mathcal{O}_{\mathfrak{m}} \simeq \mathcal{M}$.
{{< /definition >}}

{{< remark >}}
One can find that if $\mathcal{M}$ is linear over $\mathcal{C}$, then $\mathcal{M}$ is weakly enriched over $\mathcal{C}$.
{{< /remark >}}

{{< example id="ex-C-linear" >}}
For every category $\mathcal{C}$, $\mathcal{C}$ can be regarded as a $\mathsf{Fun}(\mathcal{C},\mathcal{C})$-linear category (where the monoidal structure is composition).
The action is given by
\[
(F,c) \mapsto F(c).
\]
The required higher coherence data is provided by the natural associativity of functor composition.
{{< /example >}}

{{< example id="ex-Fun" >}}
For any pair of categories $\mathcal{C}$ and $\mathcal{D}$, the category $\mathsf{Fun}(\mathcal{C},\mathcal{D})$ can be regarded as being left tensored over the monoidal category $\mathsf{Fun}(\mathcal{C},\mathcal{C})$ (where the monoidal structure is composition).
The action is given by precomposition:
\[
\otimes \colon \mathsf{Fun}(\mathcal{C},\mathcal{C}) \times \mathsf{Fun}(\mathcal{C},\mathcal{D}) \to \mathsf{Fun}(\mathcal{C},\mathcal{D}), \quad (T,G) \mapsto G \circ T.
\]
The required higher coherence data is provided by the natural associativity of functor composition.
{{< /example >}}

Now, we define the algebra object in a $\mathcal{O}$-monoidal category $\mathcal{C}$.

{{< definition id="def-O-alg" >}}
Let $\mathcal{P}$ and $\mathcal{P}'$ be Cartesian patterns with a morphism
\[
f \colon \mathcal{P} \to \mathcal{P}'
\]
over $\mathsf{Comm}$ and let $\mathcal{O}$ be a $\mathcal{P}$-operad.
An *$\mathcal{O}$-algebra* in $\mathcal{O}$ is a commutative triangle
{{< tikzcd >}}
\mathcal{P} \ar[rr,"A"]\ar[dr,"f"'] && \mathcal{O}\ar[dl] \\
& \mathcal{P}'
{{< /tikzcd >}}
such that $A$ takes inert morphisms in $\mathcal{P}$ to coCartesian morphisms in $\mathcal{O}$.
We write $\mathsf{Alg}_{\mathcal{P}/\mathcal{P}'}(\mathcal{O})$ for the full subcategory of $\mathsf{Fun}_{/\mathcal{P}'}(\mathcal{P},\mathcal{O})$ spanned by the $\mathcal{P}$-algebras.
If $f = \operatorname{id}_{\mathcal{P}'}$, we will denote $\mathsf{Alg}_{\mathcal{P}/\mathcal{P}'}(\mathcal{O})$ by $\mathsf{Alg}_{/\mathcal{P}'}(\mathcal{C})$.
If $\mathcal{P}' = \mathsf{Comm}$, then we will omit $\mathcal{P}'$ in $\mathsf{Alg}_{\mathcal{P}/\mathcal{P}'}(\mathcal{O})$.

Moreover, if $\mathcal{O} = \mathcal{C}^{\otimes}$ is a $\mathcal{P}'$-monoidal category, then we will omit the notation $\otimes$ in $\mathsf{Alg}_{\mathcal{P}/\mathcal{P}'}(\mathcal{C}^{\otimes})$.
{{< /definition >}}

{{< example >}}
Let $\mathcal{C}^{\otimes}$ be a symmetric monoidal category.
Consider the morphism
\[
|-| \colon \mathsf{Trivial} \to \mathsf{Comm}
\]
sending $*$ to the elementary object $\langle 1 \rangle$.
Then, $\mathsf{Trivial}$-algebra in $\mathcal{C}^{\otimes}$ is just an object in
\[
\mathcal{C} \simeq \mathcal{C}_{\langle 1 \rangle}^{\otimes}.
\]
{{< /example >}}

Now, let $\mathcal{P} = \mathsf{Comm}$, we try to describe what an $\mathcal{O}$-algebra is in a symmetric monoidal category $\mathcal{C}$.

{{< definition >}}
Let $\mathcal{O}$ be an operad.
Then:
- $\mathsf{Comm}$-algebra in $\mathcal{O}$ is called *commutative algebra* in $\mathcal{O}$, and we denote $\mathsf{Alg}_{\mathsf{Comm}}(\mathcal{O})$ by $\mathsf{CAlg}(\mathcal{O})$.
- $\mathsf{Assoc}$-algebra in $\mathcal{O}$ is called *associative algebra* in $\mathcal{O}$, and we denote $\mathsf{Alg}_{\mathsf{Assoc}}(\mathcal{O})$ by $\mathsf{Alg}(\mathcal{O})$.
- $\mathsf{CM}$-algebra in $\mathcal{O}$ is called *modules over commutative algebra* in $\mathcal{O}$, and we denote $\mathsf{Alg}_{\mathsf{CM}}(\mathcal{O})$ by $\mathsf{Mod}(\mathcal{O})$.
- $\mathsf{LM}$-algebra in $\mathcal{O}$ is called *left modules* in $\mathcal{O}$, and we denote $\mathsf{Alg}_{\mathsf{LM}}(\mathcal{O})$ by $\mathsf{LMod}(\mathcal{O})$.
- $\mathsf{BM}$-algebra in $\mathcal{O}$ is called *bimodule* in $\mathcal{O}$, and we denote $\mathsf{Alg}_{\mathsf{BM}}(\mathcal{O})$ by $\mathsf{BMod}(\mathcal{O})$.
{{< /definition >}}

{{< remark >}}
By {{< thmref id="rmk-right-modules" >}}, one can also use $\mathsf{LM}$ to define right modules in $\mathcal{O}$ (in this case, we will use $\mathsf{RM}$ to denote $\mathsf{LM}$) and use
\[
\mathsf{RMod}(\mathcal{O}) \coloneqq \mathsf{Alg}_{\mathsf{RM}}(\mathcal{O})
\]
to denote the category of right modules.
{{< /remark >}}

{{< definition id="def-left-modules" >}}
Let $\mathcal{C}$ be a monoidal category and let
\[
q \colon \mathcal{O} \to \mathsf{LM}
\]
exhibit $\mathcal{M}$ weakly enriched over $\mathcal{C}$.
We let $\mathsf{LMod}(\mathcal{M})$ denote the category $\mathsf{Alg}_{/\mathsf{LM}}(\mathcal{O})$.
We will refer to $\mathsf{LMod}(\mathcal{M})$ as the category of *left module objects of* $\mathcal{M}$.
If $A$ is an associative algebra in $\mathcal{C}$, we let $\mathsf{LMod}_A(\mathcal{M})$ denote the pullback
{{< tikzcd >}}
\mathsf{LMod}_A(\mathcal{M})\ar[r]\ar[d]\ar[dr,phantom,pos=.2,"\lrcorner"] &
\mathsf{LMod}(\mathcal{M})\ar[d] \\
* \ar[r,"\{A\}"] & \mathsf{Alg}(\mathcal{C})
{{< /tikzcd >}}
{{< /definition >}}

{{< remark id="rmk-modules-over-algebra" >}}
One can analogously define $\mathsf{Mod}_A$, $\mathsf{RMod}_A$, and $_B\mathsf{BMod}_A$ as pullbacks.
{{< /remark >}}
## References

<ul class="refs">
  <li id="ref-CH21">
    <span class="ref-label">[CH21]</span>
    <strong>Hongyi&nbsp;Chu</strong>
    and <strong>Rune&nbsp;Haugseng</strong>.
    <em>Homotopy-coherent algebra via Segal conditions</em>.
    Advances in Mathematics 385, 2021.
    <a href="https://doi.org/10.1016/j.aim.2021.107733">DOI</a>.
  </li>

  <li id="ref-Cno25">
    <span class="ref-label">[Cno25]</span>
    <strong>Bastiaan&nbsp;Cnossen</strong>.
    <em>An ∞-categorical introduction to Stable Homotopy Theory and Higher Algebra</em>.
    2025.
    <a href="https://drive.google.com/file/d/1ivHDIqclbg2hxmUEMTqmj2TnsAHQxVg9/view">PDF</a>.
  </li>

  <li id="ref-HA">
    <span class="ref-label">[HA]</span>
    <strong>Jacob&nbsp;Lurie</strong>.
    <em>Higher Algebra</em>.
    2017.
    <a href="https://www.math.ias.edu/~lurie/papers/HA.pdf">PDF</a>.
  </li>

  <li id="ref-HTT">
    <span class="ref-label">[HTT]</span>
    <strong>Jacob&nbsp;Lurie</strong>.
    <em>Higher Topos Theory</em>.
    Princeton University Press, 2009.
    <a href="https://www.math.ias.edu/~lurie/papers/HTT.pdf">PDF</a>.
  </li>

  <li id="ref-BHS24">
    <span class="ref-label">[BHS24]</span>
    <strong>Shaul&nbsp;Barkan</strong>,
    <strong>Rune&nbsp;Haugseng</strong>,
    and <strong>Jan&nbsp;Steinebrunner</strong>.
    <em>Envelopes for Algebraic Patterns</em>.
    arXiv:2208.07183, 2024.
    <a href="https://arxiv.org/abs/2208.07183">arXiv</a>.
  </li>
</ul>
