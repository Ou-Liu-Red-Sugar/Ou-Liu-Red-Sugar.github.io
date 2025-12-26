---
title: "Six Functor Formalisms: smoothness and suaveness"
date: 2025-12-24
math: true
draft: false
description: "We reinterpret D-smooth morphisms in a six functor formalism via the 2-category of kernel associated to a slice geometry. Using Fourier–Mukai kernels to encode functors, smoothness is characterized by left adjointness at the kernel level, yielding automatic base change compatibility. Suaveness is then obtained by imposing invertibility of the dualizing complex as an additional, independent condition."


---




> **Conventions**
> * Category refers to $(\infty,1)$-Category. The category of all categories is denoted by $\mathsf{Cat}$.
> * $2$-Category refers to $(\infty,2)$-Category obtained via enriched $(\infty,1)$-category. The category of all $2$-categories is denoted by > $\mathsf{Cat}^{(2)}$, and the $2$-category of all categories is denoted by $\mathsf{Cat}_2$.


## Smoothness

Recall that in the six functor formalism, one of our major goals is to recover Poincaré Duality.

{{< theorem title="Poincaré Duality" >}}
Let $f \colon X \to Y$ be a "manifold bundle" of relative dimension $d$ (locally looking like $Y \times D^d \to Y$) which is also a proper map.
Then the functor $f_* \colon \mathsf{D}(X,\Z) \to \mathsf{D}(Y,\Z)$ has a right adjoint $f^!$. Furthermore, this right adjoint can be explicitly characterized via a sheaf $\omega_f \mathrel{:=} f^!(\mathbb{1}_Y) \in \mathsf{D}(X,\Z)$ (which is locally isomorphic to $\Z[d]$) as:
\[
    f^! \simeq f^* \otimes \omega_f.
\]
{{< /theorem >}}

In this context, we call $\omega_f$ the *dualizing complex*.

Now, let $(\mathcal{C},E)$ be a geometric setup, and $\mathsf{D} \colon \mathsf{Corr}(\mathcal{C},E) \to \mathsf{Cat}$ be a six functor formalism.

We want to discuss which morphisms satisfy Poincaré Duality. We call such morphisms *cohomologically smooth*, or *$\mathsf{D}$-smooth*.

Therefore, it is easy to see that to characterize such an $f$, we need to achieve the following points:
* We have $f^! \simeq f^* \otimes \omega_f$, or in other words: $f^!$ can be obtained by twisting $f^*$.
* $\omega_f = f^!(\mathbb{1}_{Y})$ is an invertible object.

However, these two points alone are insufficient. For example, consider the pullback diagram:

{{< tikzcd >}}
    X' \ar[r,"f'"] \ar[dr,phantom,pos = 0.3,"\lrcorner"] \ar[d,"g'"] & Y' \ar[d,"g"]\\
    X \ar[r,"f"] & Y
{{< /tikzcd >}}
First, we certainly hope that the pullback of a $\mathsf{D}$-smooth morphism remains a $\mathsf{D}$-smooth morphism.
Secondly, notice that $f^!(\mathbb{1}_{Y})$ can be pulled back along $g' \colon X' \to X$ to obtain $g'^*f^!(\mathbb{1}_Y)$. Loosely speaking, this is $f^!(\mathbb{1}_{Y}) \mid_{X'} = \omega_f \mid_{X'}$.
Since we also hope that $f'$ is a $\mathsf{D}$-smooth morphism, we can consider $\omega_{X'/Y'} = f'^{!}(\mathbb{1}_{Y'})$. We naturally expect compatibility between the local and global structures, i.e.,
\[
    g'^*\omega_f = g'^*f^!(\mathbb{1}_{Y}) \simeq f'^!(\mathbb{1}_{Y'}) = \omega_{f'}.
\]
This fact is not automatic in pure category theory, so we need to add it as an axiom.
Thus, we arrive at the following definition:

{{% definition %}}
Let $f \colon X \to Y$ be a morphism in $E$.
We say that $f$ is *cohomologically smooth* (or *$\mathsf{D}$-smooth*)
if it satisfies the following properties:

<ol>
  <li>
    There is a natural transformation
    \[
      f^!(\mathbb{1}_Y) \otimes f^*(-) \longrightarrow f^!(-)
    \]
    which is an isomorphism.
    We abbreviate $f^!(\mathbb{1}_Y)$ as $\omega_f$
    and call it the <em>dualizing complex</em>.
  </li>

  <li>
    The dualizing complex $\omega_f$ is invertible, i.e.,
    there exists $\omega_f^{-1} \in \mathsf{D}(X)$ such that
    \[
      \omega_f \otimes \omega_f^{-1} \simeq \mathbb{1}_X,
      \qquad
      \omega_f^{-1} \otimes \omega_f \simeq \mathbb{1}_X .
    \]
  </li>

  <li>
    For any morphism $g : Y' \to Y$ in $E$, consider the pullback diagram.

   {{< tikzcd >}}
        X' \ar[r,"f'"] \ar[dr,phantom,pos = 0.3,"\lrcorner"] \ar[d,"g'"] & Y' \ar[d,"g"]\\
        X \ar[r,"f"] & Y
   {{< /tikzcd >}}

   Then $f'$ satisfies the first two conditions, and the natural morphism
   \[
     g'^* f^!(\mathbb{1}_Y) \to f'^!(\mathbb{1}_{Y'})
   \]
   is an isomorphism.
  </li>
</ol>
{{% /definition %}}


{{< idea >}}
Note that the requirement for $\mathsf{D}$-smoothness is weaker than the requirement for "smooth morphisms" in actual geometric scenarios.
For instance, if we take the étale six functor formalism $\mathsf{D} \colon \mathsf{Corr}(\mathsf{Sch}^{\text{qcqs}},E) \to \mathsf{Cat}, X\mapsto \mathsf{Shv}(X_{\text{ét}},\mathsf{D}_{\text{pf}}(\Z))$, then universal homeomorphism maps between schemes (i.e., maps that remain homeomorphisms after pullback when only caring about topological spaces) are cohomologically smooth.
This is because the étale topology is insensitive to universal homeomorphisms (it cannot distinguish such maps from isomorphisms), so at the $\mathsf{D}$-level they behave like isomorphisms, and isomorphisms are naturally smooth.
{{< /idea >}}


## 2-category of kernel

Notice that in practice, for a morphism $f \colon X \to Y$ in $E$, judging whether it is a $\mathsf{D}$-smooth morphism is difficult. Therefore, we introduce the following tools to simplify it.

Given a geometric setup $(\mathcal{C},E)$, let $\mathcal{C}_E$ be the wide subcategory generated by $E$ (i.e., same objects as $\mathcal{C}$, but morphisms only include those in $E$).
Fix a base object $Y \in \mathcal{C}$. We can consider the slice category $(\mathcal{C}_{E})_{/Y}$. Then, $((\mathcal{C}_{E})_{/Y}, \text{all})$ constitutes a new geometric setup, where "all" means we regard *all* morphisms in the slice category as exceptional morphisms.
It is easy to see that objects in this category are structural morphisms $X \xrightarrow{p} Y$ in $E$.

Now, consider a six functor formalism $\mathsf{D}$ on $(\mathcal{C},E)$.
We can restrict it to $((\mathcal{C}_{E})_{/Y}, \text{all})$ to obtain a functor:
\[
    \mathsf{D}_Y \colon \mathsf{Corr}((\mathcal{C}_E)_{/Y}, \text{all})^{\otimes}
    \to \mathsf{Corr}(\mathcal{C},E)^{\otimes}
    \xrightarrow{\mathsf{D}}
    \mathsf{Cat}_{\infty}^{\times}.
\]

Consider a correspondence in $\mathsf{Corr}((\mathcal{C}_{E})_{/Y}, \text{all})$
given by $[X_1 \xleftarrow{h} Z \xrightarrow{k} X_2]$.
Here $X_1, Z, X_2$ are all objects over $Y$.
By the universal property of pullback, we have the following commutative diagram:

{{< tikzcd >}}
    & Z \arrow[ddl, "h"', bend right]
        \arrow[ddr, "k", bend left]
        \arrow[d, "{(h,k)}", dashed] & \\
    & X_1 \times_Y X_2
        \arrow[dl, "\pi_1"']
        \arrow[dr, "\pi_2"] & \\
    X_1 \arrow[dr, "\in E"'] & &
    X_2 \arrow[dl, "\in E"] \\
    & Y &
{{< /tikzcd >}}

In this context, objects in $\mathsf{D}(X_i)$ can be analogized as
"generalized function spaces" on $X_i$.
We can define the following transform:

{{% definition %}}
<div>
Let $(\mathcal{C},E)$ be a geometric setup and
$\mathsf{D}$ a six functor formalism on it.
Fix a base object $Y \in \mathcal{C}$.

For any $K \in \mathsf{D}(X_1 \times_Y X_2)$,
we define the <em>Fourier–Mukai transform with kernel $K$</em>
as the following functor
$\mathsf{F}_K \colon \mathsf{D}(X_1) \to \mathsf{D}(X_2)$:
\[
    A \longmapsto (\pi_2)_!
    \bigl( \pi_1^* A \otimes K \bigr).
\]

In particular, for the transform induced by the correspondence
$[X_1 \leftarrow Z \to X_2]$,
its kernel is
\[
    K \mathrel{:=} (h,k)_! \mathbb{1}_Z.
\]
</div>
{{% /definition %}}

{{< idea >}}
The name "Fourier-Mukai transform" comes from its high degree of formal similarity to classical integral transforms in analysis.
Recall: Given an *integral transform* $T$ from space $X$ to space $Y$, it is usually given by the following formula:
\[
    T \colon C^{\infty}(X) \to C^{\infty}(Y) \quad
    f \mapsto \int_X K(x,y) f(x) \, dx.
\]
Where $K$ is a two-variable function defined on the product space $X \times Y$, called the *kernel* of the integral transform.
In six functor formalism, this process is *categorified*:
* $\pi_1^* A$ corresponds to pulling back the function $f(x)$ to be viewed as a two-variable function (independent of $y$);
* $\otimes K$ corresponds to the multiplication $K(x,y) f(x)$ in the integrand;
* $(\pi_2)_!$ corresponds to the integration along $X$, $\int_X$, "integrating out" the variable $x$, finally obtaining an object only related to $y$.
{{< /idea >}}


### Characterizing Functors via Kernels

With the perspective of kernels introduced, we can re-examine functors like $f_!$ and $f^*$.
Fix a morphism $f \colon X \to Y$ in $E$.

<!-- endlist -->

{{< safeHTML >}}
<ol>
  <li>
    <p>
      Take $X_1 = X$, $X_2 = Y$.
      Consider the kernel $K_1 = \mathbb{1}_X$
      (viewed as an object on $X \times_Y Y \cong X$).
    </p>

    <p>
      In this case, the Fourier–Mukai transform
      $\mathsf{D}(X) \to \mathsf{D}(Y)$ with kernel $K_1$ is:
    </p>

    \[
    A \longmapsto
    (\pi_Y)_! \bigl( \pi_X^* A \otimes \mathbb{1}_X \bigr)
    \simeq f_! A .
    \]

    <p>
      This corresponds to the functor $F = f_!$.
    </p>
  </li>

  <li>
    <p>
      Take $X_1 = Y$, $X_2 = X$.
      Consider the kernel
      $K_2 = \omega_f = f^!(\mathbb{1}_Y)$
      (viewed as an object on $Y \times_Y X \cong X$).
    </p>

    <p>
      In this case, the Fourier–Mukai transform
      $\mathsf{D}(Y) \to \mathsf{D}(X)$ with kernel $K_2$ is:
    </p>

    \[
    B \longmapsto
    (\pi_X)_! \bigl( \pi_Y^* B \otimes f^!(\mathbb{1}_Y) \bigr)
    \simeq f^* B \otimes f^!(\mathbb{1}_Y) .
    \]

    <p>
      This corresponds to the functor
      $G = f^*(-) \otimes \omega_f$.
    </p>
  </li>
</ol>
{{< /safeHTML >}}



{{< idea >}}
We hope that $F$ and $G$ form an adjoint pair, i.e.,
$f_! \dashv f^* \otimes \omega_f$
(this way, we can obtain $f^* \otimes \omega_f \simeq f^!$
via the uniqueness of adjoints).

In the language of kernels, this translates to hoping that the kernel objects
$K_1$ and $K_2$ form an adjoint pair of morphisms in the *2-category of kernel*.
{{< /idea >}}

Since 2-functors between 2-categories (such as base change)
automatically preserve adjunctions,
this adjunction property has excellent stability.
This is exactly the intrinsic reason why we required
the base change compatibility
(Condition 3 in Definition 1):

If we define "smoothness" as left adjointness in the 2-category of kernel,
then all compatibility conditions will be satisfied automatically.

Of course, the reader should notice that
we also need the dualizing complex
$\omega_f = f^!(\mathbb{1}_{Y})$
to be invertible.
However, this is a relatively independent condition.
This leads to the concept of *suave* discussed later.

Based on this, we introduce the formal definition of the 2-category of kernel:

{{< definition >}}
Let $\mathsf{D}$ be a three-functor formalism on the geometric setup $(\mathcal{C},E)$, and $Y \in \mathcal{C}$ be an object.
The 2-category formed by kernels of Fourier-Mukai transforms regarding $Y$ in $\mathsf{D}$ (abbreviated as *2-category of kernel*) is denoted by $\mathbb{K}_{\mathsf{D},Y} \in \mathsf{Cat}^{(2)}$.

Its specific characterization is as follows:
* *Objects*: Objects in $(\mathcal{C}_E)_{/Y}$, i.e., morphisms $X \to Y$ in $E$.
* *Morphism Categories*: Given objects $X_1, X_2 \in \mathbb{K}_{\mathsf{D},Y}$, the category of 1-morphisms from $X_1$ to $X_2$ is defined as
    $$
        \mathsf{Fun}_Y(X_1,X_2) \mathrel{:=} \mathsf{Fun}_{\mathbb{K}_{\mathsf{D},Y}}(X_1,X_2) = \mathsf{D}(X_1 \times_{Y} X_2).
    $$
* *Composition*: Given $M \in \mathsf{Fun}_Y(X_1,X_2)$ and $N \in \mathsf{Fun}_Y(X_2,X_3)$, their composition is defined as
    $$
        N \circ M = (\pi_{13})_! (\pi_{12}^* M \otimes \pi_{23}^* N) \in \mathsf{D}(X_1 \times_{Y} X_3),
    $$
    where $\pi_{ij}$ are the projections from $X_1 \times_Y X_2 \times_Y X_3$ to the corresponding factors.
{{< /definition >}}

{{< idea >}}
Note that for any $X \in (\mathcal{C}_{E})_{/Y}$, in $\mathbb{K}_{\mathsf{D},Y}$, the identity 1-morphism is
$$
    \operatorname{id}_{X} = \Delta_{f!}(\mathbb{1}_X) \in \mathsf{D}(X \times_Y X),
$$
where $\Delta_f \colon X \to X \times_Y X$ is the diagonal morphism.
{{< /idea >}}

It is not hard to discover that we have a canonical $2$-functor
$$
    \Psi_{\mathsf{D},Y} = \mathsf{Fun}_Y(Y,-) \colon \mathbb{K}_{\mathsf{D},Y} \to \mathsf{Cat}_2
$$
specifically characterized as:
* For an object $X \in  \mathbb{K}_{\mathsf{D},Y}$, $\Psi_{\mathsf{D},Y}(X) = \mathsf{D}(X)$.
* For a morphism $M \in \mathsf{Fun}_Y(X_1,X_2)$, $\Psi_{\mathsf{D},Y}(M) = \pi_{1!}(M \otimes \pi_2^*(-))  \colon \mathsf{D}(Y) \to \mathsf{D}(X)$.

Now, let's discuss the concept of adjunction in general 2-categories.

{{< definition >}}
Let $\mathbb{C}$ be a $2$-category, and $X,Y \in \mathbb{C}$ be objects therein.
We say $f \colon X \to Y$ is a *left adjoint* in $\mathbb{C}$ if there exists a morphism $g \colon Y \to X$ and $2$-morphisms $\eta \colon \operatorname{id}_X \to gf$, $\varepsilon \colon fg \to \operatorname{id}_Y$ such that the following diagrams commute:

{{< tikzcd >}}
    f \ar[dr,"\operatorname{id}_f"']\ar[r,"f\eta"] & fgf \ar[d,"\varepsilon f"]\\
    & f
{{< /tikzcd >}}

and

{{< tikzcd >}}
    g \ar[dr,"\operatorname{id}_g"']\ar[r,"\eta g"] & gfg \ar[d,"g\varepsilon"]\\
    & g
{{< /tikzcd >}}

In this case, $g \colon Y \to X$ is called the *right adjoint* of $f$, and $\eta$ is called the *unit*, $\varepsilon$ is called the *counit*.
{{< /definition >}}

Here are some facts about adjunctions (proofs omitted):
* Any 2-functor $F \colon \mathbb{C} \to \mathbb{D}$ preserves adjunctions By [Heyer–Mann, Prop. D.2.7](https://arxiv.org/pdf/2410.13038#page=169).; (Heyer-Mann proved a stronger version, i.e., preserving mate correspondence).
* Adjunctions are unique up to isomorphism. That is, if $(g,\eta,\varepsilon)$ and $(g',\eta',\varepsilon')$ both constitute a right adjoint of $f$, then there exists a (in the sense of contractible space) unique isomorphism $(g,\eta,\varepsilon) \simeq (g',\eta',\varepsilon')$.
* When considering the 2-category $\mathsf{Cat}_2$, adjoint morphisms in it are exactly the well-known adjoint functors.
* For a 2-category $\mathbb{C}$, if $f \colon X \to Y$ and $g \colon Y \to X$ are equipped with 2-morphisms $\eta \colon \operatorname{id}_X \to gf$ and $\varepsilon \colon fg \to \operatorname{id}_Y$, and the composite morphisms
    $$
        f \xrightarrow{f\eta} fgf \xrightarrow{\varepsilon f} f \quad \text{and} \quad g \xrightarrow{\eta g} gfg \xrightarrow{g\varepsilon} g
    $$
    are both isomorphisms (not necessarily identities), then one can modify $\eta$ to obtain $\eta'$ such that $(f, g, \eta', \varepsilon)$ constitutes a strict adjoint pair.

Now, we can use the 2-category of kernel to give a concise characterization of $\mathsf{D}$-smoothness.

{{< theorem >}}
Let $(\mathcal{C},E)$ be a geometric setup, and $f \colon X \to Y$ be a morphism in $E$.
Then $f$ is a $\mathsf{D}$-smooth morphism if and only if it satisfies the following two conditions:
1.  In $\mathbb{K}_{\mathsf{D},Y}$, the morphism $\mathbb{1}_X \in \mathsf{Fun}_Y(X,Y) = \mathsf{D}(X)$ is a left adjoint morphism. (Denote its right adjoint as $\omega_f \in \mathsf{Fun}_Y(Y,X) = \mathsf{D}(X)$).
2.  The above right adjoint $\omega_f$ is invertible in $\mathsf{D}(X)$.

(Note: If $f$ satisfies the above conditions, we usually have $\omega_f \simeq f^!(\mathbb{1}_Y)$).
{{< /theorem >}}

{{< proofc "Sketch of Proof" >}}
We discuss the two directions separately:

* ($\Rightarrow$):
    Assume $f$ is a $\mathsf{D}$-smooth morphism. According to Condition 1 of Definition 1, there exists a natural isomorphism $f^!(-) \simeq f^*(-) \otimes \omega_f$.
    Since $f_!$ and $f^!$ form an adjoint pair ($f_! \dashv f^!$), this means we have an adjunction at the functor level:
    $$
        f_! \dashv f^*(-) \otimes \omega_f.
    $$
    The above functor-level adjunction corresponds to an adjunction of 1-morphisms in the 2-category $\mathbb{K}_{\mathsf{D},Y}$.
    Here $f_!$ corresponds to the kernel $\mathbb{1}_X$, and $f^* \otimes \omega_f$ corresponds to the kernel $\omega_f$.
    Therefore $\mathbb{1}_X$ is a left adjoint morphism. Condition 2 (invertibility) is given directly by the definition of smoothness.

* ($\Leftarrow$):
    Assume conditions 1 and 2 in the theorem are satisfied.
    Consider the canonical 2-functor from the 2-category of kernel to the category of 2-categories:
    $$
        \Psi_{\mathsf{D},Y} = \mathsf{Fun}_Y(Y,-) \colon \mathbb{K}_{\mathsf{D},Y} \to \mathsf{Cat}_2.
    $$
    Since 2-functors preserve adjunctions, and we have the adjunction $\mathbb{1}_X \dashv \omega_f$ in $\mathbb{K}_{\mathsf{D},Y}$,
    we have an adjunction between functors in $\mathsf{Cat}_2$:
    $$
        \Psi_{\mathsf{D},Y}(\mathbb{1}_X) \dashv \Psi_{\mathsf{D},Y}(\omega_f).
    $$
    According to the definition of the Fourier-Mukai transform, we know:
    * The left side $\Psi_{\mathsf{D},Y}(\mathbb{1}_X)$ corresponds exactly to the functor $f_!(-)$;
    * The right side $\Psi_{\mathsf{D},Y}(\omega_f)$ corresponds to the functor $(\pi_X)_!(\pi_Y^* (-) \otimes \omega_f) \simeq f^* A \otimes \omega_f$.
    This implies that $f^*(-) \otimes \omega_f$ is the right adjoint of $f_!$.
    By the uniqueness of adjoint functors, we obtain a natural isomorphism:
    $$
        f^*(-) \otimes \omega_f \simeq f^!(-).
    $$
    In particular, substituting $\mathbb{1}_Y$ into the above formula (and using the fact that $f^*$ preserves the unit), we get $\omega_f \simeq f^!(\mathbb{1}_Y)$.
    Combined with Condition 2, this verifies the first two conditions in the definition of smoothness.

    Finally, we need to verify Condition 3 in Definition 1.
    This is automatically guaranteed by the functoriality of the $2$-category of kernels
    (see [Heyer–Mann, Prop. 4.2.4](https://arxiv.org/pdf/2410.13038#page=60) for a detailed proof).
 
    Specifically, the mapping $S \mapsto \mathbb{K}_{\mathsf{D},S}$ constitutes a 2-functor:
    $$
        \mathbb{K}_{\mathsf{D},(-)} \colon \mathsf{Corr}(\mathcal{C},E)^{\otimes} \to \mathsf{Cat}_2^{\times}.
    $$
    For any base change $g \colon Y' \to Y$, it induces a 2-functor $g^* \colon \mathbb{K}_{\mathsf{D},Y} \to \mathbb{K}_{\mathsf{D},Y'}$.
    Again using the fact that "2-functors preserve adjunctions", the adjunction for $f$ (over $Y$) is sent by $g^*$ to the adjunction for $f'$ (over $Y'$).
    This directly implies the compatibility of the dualizing complex with base change.
{{< /proofc >}}

## Suave and Prim

We found that Condition 2 (invertibility) in Theorem 2 is a relatively independent geometric condition.
If we remove this restriction and only retain Condition 1 (i.e., adjunction in the 2-category of kernel), we obtain a broader class of morphisms.
This line of thought allows us to decompose "cohomological smoothness" into a superposition of "adjunction" and "invertibility".

Thus, we can introduce the following two concepts.

{{< definition >}}
Let $\mathsf{D}$ be a three-functor formalism on a geometric setup $(\mathcal{C},E)$, $f \colon X \to Y$ a morphism in $E$, and $A \in \mathsf{D}(X)$ an object.

1.  We say $A$ is *f-suave* if, when viewed as a morphism $X \to Y$ in $\mathbb{K}_{\mathsf{D},Y}$, it is a left adjoint morphism.
    We denote its right adjoint as $\mathsf{SD}_f(A)$, called the *$f$-suave dual* of $A$.
    Let $\mathsf{Suave}_f(X) \subseteq \mathsf{D}(X)$ denote the full subcategory spanned by all $f$-suave objects.
2.  We say $A$ is *f-prim* if, when viewed as a morphism $Y \to X$ in $\mathbb{K}_{\mathsf{D},Y}$, it is a right adjoint morphism.
    We denote its left adjoint as $\mathsf{PD}_f(A)$, called the *$f$-prim dual* of $A$.
    Let $\mathsf{Prim}_f(X) \subseteq \mathsf{D}(X)$ denote the full subcategory spanned by all $f$-prim objects.
{{< /definition >}}

{{< idea >}}
These two terms originate from Peter Scholze and David Hansen (note that in practice we always require $\mathsf{D}$ to be a six functor formalism, although a three-functor formalism suffices for the definition):

* *Suave*: This word describes a property milder than smoothness. It is not hard to see that when $A = \mathbb{1}_X$ is $f$-suave, according to previous discussions, we effectively obtain the isomorphism $f^*(-) \otimes \mathsf{SD}_f(\mathbb{1}_X) \simeq f^!(-)$. This property is not limited to $\mathbb{1}_X$: any suave object $A$ establishes some connection between $f^*$ and $f^!$.
* *Prim*: This word describes a certain "primitive" compactness/properness. It is not hard to see that when $A = \mathbb{1}_{X}$ is $f$-prim, using the adjunction property, we can obtain the isomorphism:
    $$
        f_!(\mathsf{PD}_f(\mathbb{1}_X) \otimes -) \simeq f_*(-).
    $$
    Therefore, primness is actually discussing the phenomenon where $f_*$ can be characterized by $f_!$ after an appropriate twist. This is more fundamental (primitive) than properness ($f_* \simeq f_!$), serving as the "prototype" constituting properness.
{{< /idea >}}

In fact, saying that an object $A$ is $f$-suave (or $f$-prim) is in some sense equivalent to saying it is a "finite-dimensional vector space" (i.e., has reflexive duality properties).

{{< proposition title="Suave Dual and Prim Dual" >}}
Let $\mathsf{D}$ be a six functor formalism on the geometric setup $(\mathcal{C},E)$, and $f \colon X \to Y$ be a morphism in $E$.

1.  **Suave**: If $A \in \mathsf{D}(X)$ is an $f$-suave object, then:
    * Its suave dual $\mathsf{SD}_f(A)$ is also $f$-suave, and its right adjoint in $\mathbb{K}_{\mathsf{D},Y}$ is exactly $A$ itself.
    * There is a natural isomorphism between functors (embodying the role of $\mathsf{SD}_f(A)$ as a relative Verdier dual):
        $$
            \mathsf{SD}_f(A) \otimes f^*(-) \simeq \underline{\operatorname{Hom}}(A,f^!(-)) \colon \mathsf{D}(Y) \to \mathsf{D}(X).
        $$
        In particular, taking $\mathbb{1}_Y$ yields $\mathsf{SD}_f(A) \simeq \underline{\operatorname{Hom}}(A, f^!(\mathbb{1}_Y))$.
    * There is a double dual isomorphism in $\mathsf{D}(X)$ (reflexivity):
        $$
            \mathsf{SD}_f(\mathsf{SD}_f(A)) \simeq A.
        $$
    In other words, $A \mapsto \mathsf{SD}_f(A)$ gives a contravariant equivalence of categories:
    $$
        \mathsf{SD}_f \colon \mathsf{Suave}_f(X)^{\operatorname{op}} \xrightarrow{\sim} \mathsf{Suave}_f(X).
    $$

2.  **Prim**: If $A \in \mathsf{D}(X)$ is an $f$-prim object, then:
    * Its prim dual $\mathsf{PD}_f(A)$ is also $f$-prim, and its left adjoint in $\mathbb{K}_{\mathsf{D},Y}$ is exactly $A$ itself.
    * There is a natural isomorphism between functors:
        $$
            f_!(\mathsf{PD}_f(A) \otimes -) \simeq f_*\underline{\operatorname{Hom}}(A, -) \colon \mathsf{D}(X) \to \mathsf{D}(Y).
        $$
    * There is a double dual isomorphism $\mathsf{PD}_f(\mathsf{PD}_f(A)) \simeq A$, giving an equivalence $\mathsf{Prim}_f(X)^{\operatorname{op}} \xrightarrow{\sim} \mathsf{Prim}_f(X)$.
    In other words, $A \mapsto \mathsf{PD}_f(A)$ gives a contravariant equivalence of categories:
    $$
        \mathsf{PD}_f \colon \mathsf{Prim}_f(X)^{\operatorname{op}} \xrightarrow{\sim} \mathsf{Prim}_f(X).
    $$
{{< /proposition >}}

{{< proofc >}}
The proof is essentially an exercise in the properties of adjunctions in 2-categories.

Taking suave as an example:
* Since the 2-category of kernel $\mathbb{K}_{\mathsf{D},Y}$ possesses self-duality, i.e., $\mathbb{K}_{\mathsf{D},Y} \simeq \mathbb{K}_{\mathsf{D},Y}^{\operatorname{op}}$ (reversing 1-morphisms), a left adjoint morphism becomes a right adjoint morphism in $\mathbb{K}_{\mathsf{D},Y}^{\operatorname{op}}$. By the uniqueness of adjoints, this immediately gives the double dual isomorphism.
* The derivation of the formula involves mapping the adjunction relation $A \dashv \mathsf{SD}_f(A)$ in $\mathbb{K}_{\mathsf{D},Y}$ to $\mathsf{Cat}_2$, obtaining an adjunction between functors:
    $$
        \Psi_{\mathsf{D},Y}(A) \dashv \Psi_{\mathsf{D},Y}(\mathsf{SD}_f(A)).
    $$
    Where $\Psi_{\mathsf{D},Y}(A) \simeq f_!(A \otimes f^*(-))$, and $\Psi_{\mathsf{D},Y}(\mathsf{SD}_f(A)) \simeq f_!(\mathsf{SD}_f(A) \otimes f^*(-))$.
    Using the adjunction of $f_!$ and $f^!$ and the definition of closed monoidal category|Internal Hom, one can solve for the above isomorphism.
{{< /proofc >}}

In fact, we can also give concrete characterizations of $f$-suave and $f$-prim properties.
This characterization does not rely on the global definition of adjunction, but transforms it into adjunction properties in functor categories, which is more operational in actual calculations. This result depends on the following general lemma regarding adjoint morphisms in 2-categories.

{{< lemma >}}
Let $\mathbb{C}$ be a 2-category, and $f \colon X \to Y$ be a 1-morphism in $\mathbb{C}$.
Then the following conditions are equivalent:
1.  $f$ is a left adjoint morphism.
2.  For $Z \in \{X,Y\}$, the post-composition functor
    $$
        f_* \colon \mathsf{Fun}_{\mathbb{C}}(Z,X) \to \mathsf{Fun}_{\mathbb{C}}(Z,Y), \quad h \mapsto f \circ h
    $$
    has a right adjoint $G_Z$. Furthermore, the canonical morphism
    $$
        G_Y(\operatorname{id}_Y) \circ f \to G_X(f)
    $$
    becomes an isomorphism after applying $\operatorname{Hom}_{\mathsf{Fun}(X,X}(\operatorname{id}_X, -)$ (i.e., it is an isomorphism on the fiber at the identity morphism $\operatorname{id}_X$).
    3.  For all $Z \in \mathbb{C}$, the post-composition functor
        $$
            f_* \colon \mathsf{Fun}_{\mathbb{C}}(Z,X) \to \mathsf{Fun}_{\mathbb{C}}(Z,Y), \quad h \mapsto f \circ h
        $$
        has a right adjoint $G_Z$. And for all 1-morphisms $h \colon Z \to Z'$ in $\mathbb{C}$, there exists a 2-morphism making the diagram
        
{{< tikzcd >}}
  \mathsf{Fun}_{\mathbb{C}}(Z',X) \ar[d,"h^*"] & \mathsf{Fun}_{\mathbb{C}}(Z',Y) \ar[l,"G_{Z'}"'] \ar[d,"h^*"]\\
  \mathsf{Fun}_{\mathbb{C}}(Z,X) & \mathsf{Fun}_{\mathbb{C}}(Z,Y) \ar[l,"G_Z"]
{{< /tikzcd >}}


commute. In other words, $h^* G_{Z'} \xrightarrow{\sim} G_Z h^*$ is an isomorphism of functors.

In this scenario, the right adjoint of $f$ is given by $g \mathrel{:=} G_Y(\operatorname{id}_Y) \colon Y \to X$.
{{< /lemma >}}
{{< proofc >}}
By [Heyer–Mann, Prop. D.2.8](https://arxiv.org/pdf/2410.13038#page=170).
{{< /proofc >}}

{{< proposition title="Explicit Characterization of Suave and Prim" >}}
Let $\mathsf{D}$ be a six functor formalism on the geometric setup $(\mathcal{C},E)$, $f \colon X \to Y$ a morphism in $E$, and $A \in \mathsf{D}(X)$.
Let $\pi_i \colon X \times_Y X \to X$ be the projection morphisms.

1.  **Suave**: $A$ is an $f$-suave object (i.e., $A \colon X \to Y$ is a left adjoint) if and only if the natural morphism
    $$
        \pi_1^* \underline{\operatorname{Hom}}(A, f^!\mathbb{1}_Y) \otimes \pi_2^*A \to \underline{\operatorname{Hom}}(\pi_1^*A, \pi_2^!A)
    $$
    is an isomorphism after applying $\operatorname{Hom}_{\mathsf{D}(X)}(\Delta_{f!}\mathbb{1}_X, -) \simeq \operatorname{Hom}_{\mathsf{D}(X)}(\mathbb{1}_X, \Delta_f^!(-))$.
    In this case, for all $Z \in (\mathcal{C}_E)_{/Y}$ and all $M \in \mathsf{D}(Z)$, we have an isomorphism in $\mathsf{D}(X \times_Y Z)$:
    $$
        \operatorname{pr}_X^* \mathsf{SD}_f(A) \otimes \operatorname{pr}_Z^* M \xrightarrow{\sim} \underline{\operatorname{Hom}}(\operatorname{pr}_X^* A, \operatorname{pr}_Z^! M).
    $$

2.  **Prim**: $A$ is an $f$-prim object (i.e., $A \colon Y \to X$ is a left adjoint\footnote{Note: Here regarding the direction of $A$ as $Y \to X$ matches $f$ being a left adjoint in the Lemma. If defined as $A \in \mathsf{Fun}_Y(X,Y)$, then it is a right adjoint morphism.}) if and only if the natural morphism
    $$
        f_!(\pi_{2*}\underline{\operatorname{Hom}}(\pi_1^*A, \Delta_{f!}\mathbb{1}_X) \otimes A) \to f_* \underline{\operatorname{Hom}}(A,A)
    $$
    is an isomorphism after applying $\operatorname{Hom}_{\mathsf{D}(Y)}(\mathbb{1}_Y, -)$.
    In this case, $\mathsf{PD}_f(A)$ can be characterized as
    $$
        \mathsf{PD}_f(A) \simeq \pi_{2*}\underline{\operatorname{Hom}}(\pi_1^*A, \Delta_{f!}\mathbb{1}_X),
    $$
    and for all $Z \in (\mathcal{C}_E)_{/Y}$ and all $M \in \mathsf{D}(X \times_Y Z)$, there is a natural isomorphism in $\mathsf{D}(Z)$:
    $$
        \operatorname{pr}_{Z!} (\operatorname{pr}^*_X \mathsf{PD}_f(A) \otimes M) \xrightarrow{\sim} \operatorname{pr}_{Z*} \underline{\operatorname{Hom}}(\operatorname{pr}_X^* A, M).
    $$
{{< /proposition >}}
{{< proofc >}}
Directly obtained by applying the Lemma.
{{< /proofc >}}

In fact, the $f$-suave dual and $f$-prim dual can form an adjunction in a dual sense.

{{< lemma >}}
Let $\mathsf{D}$ be a six functor formalism on $(\mathcal{C},E)$.
Let $f \colon X \to Y$ be a morphism in $E$, $A \in \mathsf{D}(X)$ an $f$-suave object,
and $B \in \mathsf{D}(X)$ an $f$-prim object.
Then there is a natural isomorphism
$$
    f_* \underline{\operatorname{Hom}}(B,\mathsf{SD}_f(A)) \simeq f_* \underline{\operatorname{Hom}}(\mathsf{PD}_f(B),A)^{\vee}.
$$
{{< /lemma >}}
{{< proofc >}}
This is a direct corollary of the Proposition on Suave/Prim duals and the Proposition on explicit characterization.
{{< /proofc >}}

Finally, according to the compatibility of adjunctions with limits, colimits, and retracts in $2$-categories, we can obtain:

{{< proposition >}}
Let $\mathsf{D}$ be a three-functor formalism on $(\mathcal{C},E)$, and $f \colon X \to Y$ a morphism in $E$.
* **Closure under Retracts**: $f$-suave objects and $f$-prim objects are closed under retracts in $\mathsf{D}(X)$.
* **Closure under Limits/Colimits**: Let $\mathcal{I}$ be a small category. If $\mathsf{D}$ is compatible with colimits indexed by $\mathcal{I}$ and limits indexed by $\mathcal{I}^{\operatorname{op}}$, then $f$-suave objects and $f$-prim objects are closed in $\mathsf{D}(X)$ under colimits indexed by $\mathcal{I}$ and limits indexed by $\mathcal{I}^{\operatorname{op}}$.
{{< /proposition >}}

In particular, when $\mathsf{D}$ is a stable three-functor formalism, we immediately get the following corollary:

{{< theorem title="Corollary" >}}
Let $\mathsf{D}$ be a stable three-functor formalism on $(\mathcal{C},E)$, and $f \colon X \to Y$ a morphism in $E$.
Then $\mathsf{Suave}_f(X)$ and $\mathsf{Prim}_f(X)$ are closed under retracts, fibers, and cofibers.
Therefore, in this case, $\mathsf{Suave}_f(X)$ and $\mathsf{Prim}_f(X)$ are thick subcategories.
{{< /theorem >}}

### Suave Morphisms and Prim Morphisms

Now let us discuss in detail the content mentioned in the remark about Suave and Prim.
According to the Proposition on Suave/Prim Duals, if $A = \mathbb{1}_X$ is an $f$-suave object, then we have
$$
    \mathsf{SD}_f(\mathbb{1}_X) \otimes f^*(-) \simeq \underline{\operatorname{Hom}}(\mathbb{1}_X,f^!(-)) \simeq f^!(-) \colon \mathsf{D}(Y) \to \mathsf{D}(X).
$$
And when $A = \mathbb{1}_X$ is an $f$-prim object, we have
$$
    f_!(\mathsf{PD}_f(\mathbb{1}_X) \otimes -) \simeq f_*\underline{\operatorname{Hom}}(\mathbb{1}_X, -) \simeq f_*(-) \colon \mathsf{D}(X) \to \mathsf{D}(Y).
$$
This leads to the following definition:

{{< definition >}}
Let $\mathsf{D}$ be a three-functor formalism on $(\mathcal{C},E)$, and $f \colon X \to Y$ a morphism in $E$.
1.  We say $f$ is a *$\mathsf{D}$-suave morphism*, if $\mathbb{1}_X \in \mathsf{Suave}_f(X)$.
    In this case, we denote
    $$
        \omega_f \mathrel{:=} \mathsf{SD}_f(\mathbb{1}_X) \in \mathsf{D}(X)
    $$
    as the corresponding suave dual, and call it the *dualizing complex* of $f$.
2.  We say $f$ is a *$\mathsf{D}$-proper morphism* (or $\mathsf{D}$-prim morphism), if $\mathbb{1}_X \in \mathsf{Prim}_f(X)$.
    In this case, we denote
    $$
        \delta_f \mathrel{:=} \mathsf{PD}_f(\mathbb{1}_X) \in \mathsf{D}(X)
    $$
    as the corresponding prim dual, and call it the *codualizing complex* of $f$.
{{< /definition >}}

{{< idea >}}
According to Theorem 2, we know: $f$ is a $\mathsf{D}$-smooth morphism = $f$ is a $\mathsf{D}$-suave morphism + $\omega_f$ is invertible.

Furthermore, according to the propositions on Suave/Prim duals and explicit characterization, it is easy to see
$$
    \omega_f = f^!(\mathbb{1}_{Y}) \quad \text{and} \quad \delta_f = \pi_{2*}\Delta_{f!} \mathbb{1}_X
$$
where $\pi_2 \colon X \times_Y X \to X$ is the projection morphism to the second component.
{{< /idea >}}

Therefore, we know that being a $\mathsf{D}$-suave morphism is equivalent to saying
$$
    \omega_f \otimes f^*(-) \xrightarrow{\sim} f^!
$$
And according to adjunction, this is equivalent to saying
$$
    f^*(-) \xrightarrow{\sim} \underline{\operatorname{Hom}}(\omega_f,f^!(-))
$$
Inputting $\mathbb{1}_Y$ on both sides yields
$$
    \mathbb{1}_X \simeq f^*(\mathbb{1}_Y) \xrightarrow{\sim} \underline{\operatorname{Hom}}(\omega_f,\omega_f)
$$
Therefore, if $\omega_f$ is a dualizable object, then
$$
    \mathbb{1}_X \simeq \omega_f^{\vee} \otimes \omega_f,
$$
That is to say: for a $\mathsf{D}$-suave object, $\omega_f$ being an invertible object is equivalent to $\omega_f$ being a dualizable object.
This further simplifies the judgment conditions in Theorem 2.

Finally, we give an important property, which will inspire us to define $\mathsf{D}$-étale morphisms and $\mathsf{D}$-proper (tight) morphisms.

{{< lemma >}}
Let $\mathsf{D}$ be a six functor formalism on the geometric setup $(\mathcal{C},E)$.
Consider the pullback diagram in $\mathcal{C}_E$:

{{< tikzcd >}}
    X' \ar[r,"f'"] \ar[dr,phantom,pos = 0.3,"\lrcorner"] \ar[d,"g'"] & Y' \ar[d,"g"]\\
        X \ar[r,"f"] & Y
{{< /tikzcd >}}

1.  If $f$ is a $\mathsf{D}$-suave morphism.
    Then the following natural transformations are all isomorphisms:
    \[
        g'_*f'^* \simeq f^* g_*, \quad g'_!f'^! \simeq f^! g_!, \quad f'^*g^! \simeq g'^!f^* \quad \text{and} \quad f'^!g^* \simeq g^*f'^!
    \]
2.  If $f$ is a $\mathsf{D}$-proper morphism.
    Then the following natural transformations are all isomorphisms:
    \[
        g^*f_* \simeq f'_*g'^*, \quad g^!f_! \simeq f'_!g'^!, \quad f_!g'_* \simeq g_* f'_! \quad \text{and} \quad f_*g'_! \simeq g_! f'_*.
    \]

{{< /lemma >}}
{{< proofc >}}
[Heyer–Mann, Prop. 4.5.13](https://arxiv.org/pdf/2410.13038#page=72).
{{< /proofc >}}

## Étale and Proper

We now study conditions under which the canonical comparison morphisms
\[
  f^! \simeq f^* \qquad \text{and} \qquad f_! \simeq f_*
\]
are genuine isomorphisms, rather than merely equivalences up to a twisting
object (i.e. $\omega_f \simeq \mathbb{1}$ or $\delta_f \simeq \mathbb{1}$).

---

### Construction of the comparison morphism $f^! \to f^*$

We explain how to construct a canonical morphism $f^! \to f^*$ using the diagonal.
Consider the following diagonal diagram:

{{< tikzcd >}}
  X \arrow[dr, "\Delta_f"]
    \arrow[drr, "\operatorname{id}_X", bend left]
    \arrow[ddr, "\operatorname{id}_X"', bend right]
  & & \\
  & X \times_Y X
      \arrow[r, "\pi_2"]
      \arrow[d, "\pi_1"']
      \arrow[dr, phantom, pos = 0.3,"\lrcorner", from=2-2, to=3-3]
  & X \arrow[d, "f"] \\
  & X \arrow[r, "f"']
  & Y
{{< /tikzcd >}}
We have the identities
\[
  f \circ \pi_1 = f \circ \pi_2,
  \qquad
  \operatorname{id}_X = \pi_2 \circ \Delta_f .
\]

Assume that the diagonal satisfies the inductive étaleness hypothesis
\[
  \Delta_f^* \simeq \Delta_f^! .
\]
Under this assumption, we define a morphism $f^! \to f^*$ as the composite
\[
\begin{aligned}
  f^!
  &\simeq \operatorname{id}_X^* f^!
    \simeq (\pi_2 \circ \Delta_f)^* f^! \\
  &\simeq \Delta_f^* \pi_2^* f^! \\
  &\xrightarrow{\sim} \Delta_f^! \pi_2^* f^!
    \quad (\text{using } \Delta_f^* \simeq \Delta_f^!) \\
  &\longrightarrow \Delta_f^! \pi_1^! f^* \\
  &\simeq (\pi_1 \circ \Delta_f)^! f^*
    \simeq \operatorname{id}_X^! f^*
    \simeq f^* .
\end{aligned}
\]

The morphism $\pi_2^* f^! \to \pi_1^! f^*$ is induced by taking right adjoints
of the base change transformation
\[
  \pi_{1!}\pi_2^* \longrightarrow f^* f_! .
\]

If $f$ is $\mathsf{D}$-suave, this morphism is an isomorphism, and hence
\[
  f^! \simeq f^* .
\]

---

### The proper case

Dually, one constructs a natural morphism $f_! \to f_*$.  
If $\Delta_f$ satisfies $\Delta_{f!} \simeq \Delta_{f*}$ and $f$ is
$\mathsf{D}$-proper, then
\[
  f_! \simeq f_* .
\]

---

### Truncatedness and termination

To ensure that the recursive definition terminates, we impose a truncatedness
condition. The diagonal of an $n$-truncated morphism is $(n-1)$-truncated, so
the recursion eventually reaches $(-2)$-truncated morphisms, i.e. isomorphisms.
For isomorphisms, the identities
\[
  f^! \simeq f^*, \qquad f_! \simeq f_*
\]
hold tautologically.

{{% definition %}}

Let $\mathsf{D}$ be a six functor formalism on $(\mathcal{C}, E)$, and let
$f \colon X \to Y$ be a truncated morphism in $E$.

* $f$ is **$\mathsf{D}$-étale** if $f$ is $\mathsf{D}$-suave and
  $\Delta_f$ is either $\mathsf{D}$-étale or an isomorphism.

* $f$ is **$\mathsf{D}$-proper** (or *tight*) if $f$ is $\mathsf{D}$-proper and
  $\Delta_f$ is either $\mathsf{D}$-proper or an isomorphism.

{{% /definition %}}



{{% proposition %}}
Let $f \colon X \to Y$ be a morphism in $E$.

1. If $\Delta_f$ is $\mathsf{D}$-étale, the following are equivalent:
   (a) $f$ is $\mathsf{D}$-étale;
   (b) $f^!\mathbb{1}_Y \simeq f^*\mathbb{1}_Y$;
   (c) $f^! \xrightarrow{\sim} f^*$.

2. If $\Delta_f$ is $\mathsf{D}$-proper, the following are equivalent:
   (a′) $f$ is $\mathsf{D}$-proper;
   (b′) $f_!\mathbb{1}_X \simeq f_*\mathbb{1}_X$;
   (c′) $f_! \xrightarrow{\sim} f_*$.

{{% /proposition %}}

{{< proofc "Sketch of Proof" >}}

It suffices to prove (b) ⇒ (a); the proper case is dual.

Using the explicit characterization of suavité, it is enough to verify
\[
  \pi_1^* f^! \mathbb{1}_Y
  \xrightarrow{\sim}
  \pi_2^! \mathbb{1}_X .
\]

Applying $\operatorname{Hom}_{\mathsf{D}(X)}(\mathbb{1}_X, \Delta_f^!(-))$
and using that $\Delta_f$ is $\mathsf{D}$-étale, we obtain
\[
\begin{aligned}
  \Delta_f^! \pi_1^* f^! \mathbb{1}_Y
  &\simeq \Delta_f^* \pi_1^* f^! \mathbb{1}_Y \\
  &\simeq f^! \mathbb{1}_Y \\
  &\simeq \mathbb{1}_X .
\end{aligned}
\]
This completes the proof.
{{< /proofc >}}

## Suave Descent and Prim Descent

I am too lazy to write this.

### References

<span id="ref-HeyerMann"></span>
**[Heyer–Mann]**  
Claudius Heyer and Lucas Mann.  
*6-Functor Formalisms and Smooth Representations*.  
arXiv:2410.13038 (2024).  
<https://arxiv.org/abs/2410.13038>

<span id="ref-ScholzeSixFunctor"></span>
**[SixFunctors]**  
Peter Scholze.  
*Six-Functor Formalisms*.  
arXiv:2510.26269 (2025).  
<https://arxiv.org/abs/2510.26269>
