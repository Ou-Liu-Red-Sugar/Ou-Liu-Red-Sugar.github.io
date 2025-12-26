---
title: "Synthetic category theory and type theory"
date: 2025-12-24
math: true
---

This page aims to explain how **type theory** can be understood within the framework of **synthetic category theory**.

The content of this page is derived from my questions to Tashi during the second exercise class and Tashi’s responses. I would like to express my gratitude to Tashi here.

We focus on the following two questions:

- **Question I.** How should we understand the notion of **isofibration** (hereafter referred to as a *fibration*) in synthetic category theory?
- **Question II.** Do we still have a **weak factorization system** in this context?

Next, we will answer these questions through the lens of type theory and the categorical perspective of synthetic category theory.

\tableofcontents

---

## Type Theory

(More precisely, **dependent type theory**.)

I have not formally studied type theory, so the definitions here may differ significantly from those of a type theory expert. Please feel free to correct me if there are any issues.

---

## Context

First, let us discuss what a *context* is.

### Definition

A **context** $\Gamma$ is a finite sequence of typed variables
\[
x_1 : X_1,\; x_2 : X_2(x_1),\; \dots,\; x_n : X_n(x_1,\dots,x_{n-1}),
\]
satisfying the following condition: for any $1 \le k \le n$, we can form the judgment
\[
x_1 : X_1,\dots,x_{k-1} : X_{k-1}(x_1,\dots,x_{k-2})
\;\vdash\;
X_k(x_1,\dots,x_{k-1})\ \mathrm{Type}.
\]

---

### The Empty Context

A context of length $0$ is denoted by $[0]$ (sometimes also written as $()$) and is called the **empty context**.

This means that at this stage we have no prior assumptions or restrictions. Hence, for any type $X$ (in particular, a constant type not depending on undefined variables), we have the judgment
\[
[0] \vdash X \ \mathrm{Type}.
\]

This also implies that any sequence of length $1$, $(x_1 : X_1)$, forms a valid context if and only if $X_1$ is a type in the empty context.

---

### Intuitive Interpretation

Intuitively, a context is a **value-dependent iterative structure**:

- First, we have a type $X_1$ in the empty context, which may be viewed as a base space.
- Given a variable $x_1 : X_1$, we can specify $X_2(x_1)$. Strictly speaking, $X_2(x_1)$ is not a single type but a family of types over $X_1$, depending on the value of $x_1$. This is why it is called a **dependent type**.
- Fixing $x_1 : X_1$ and then $x_2 : X_2(x_1)$, we may specify $X_3(x_1,x_2)$.
- This process continues inductively.

If for a context $\Gamma$ we can form the judgment
\[
\Gamma \vdash A \ \mathrm{Type},
\]
then $A$ is called a **type (or dependent type) in the context $\Gamma$**.

---

### Example

Consider the natural number type $\mathbb{N}$ and the context
\[
\Gamma = (x : \mathbb{N}).
\]

In this context, we would like to discuss the object “integers modulo $x$”, denoted $\mathbb{Z}/x$. Clearly, its structure depends on the specific value of $x$. Therefore, $\mathbb{Z}/x$ is a dependent type in the context $\Gamma$, and we have the judgment
\[
x : \mathbb{N} \vdash \mathbb{Z}/x \ \mathrm{Type}.
\]

Geometrically, this corresponds to a fiber bundle over the discrete base space $\mathbb{N}$:

- when $x = 2$, the fiber is $\mathbb{Z}/2$;
- when $x = 0$, the fiber is $\mathbb{Z}$ (if we define $\mathbb{Z}/0 \cong \mathbb{Z}$).

---

## Context Extension

Given a context $\Gamma$ and a type $A$ in the context $\Gamma$, we may form a new context $(\Gamma, a : A)$.

If $\Gamma$ has the form
\[
x_1 : X_1,\dots,x_n : X_n,
\]
then the extended context encodes the data
\[
x_1 : X_1,\dots,x_n : X_n,\ a : A(x_1,\dots,x_n).
\]

This is called the **extension** of $\Gamma$ by $A$, and is also written as $\Gamma.A$.

Geometrically:
- $\Gamma$ corresponds to the base space;
- $A$ corresponds to a fiber bundle over the base;
- $\Gamma.A$ corresponds to the total space.

---

### Context Induction

Contexts in dependent type theory are generated inductively by the following rules:

- **Base:** the empty context $[0]$ is valid.
- **Induction:** if $\Gamma$ is a valid context and $\Gamma \vdash A \ \mathrm{Type}$, then the extension $\Gamma.A$ is also a valid context.

---

### Contexts as $\Sigma$-Types

Once $\Sigma$-types (dependent sums) are available, every context can be encoded as a single type:

- the empty context corresponds to the unit type $\mathbf{1}$;
- a context $(x : X)$ corresponds to $X$;
- a context $(x : X, y : Y(x))$ corresponds to $\sum_{x:X} Y(x)$;
- in general, contexts correspond to iterated $\Sigma$-types.

---

## Terms

A **term** of type $A$ in a context $\Gamma$ is expressed by the judgment
\[
\Gamma \vdash a : A.
\]

From various perspectives:
- in type theory, $a$ is a term of $A$;
- in set theory, $a$ is an element of $A$;
- in homotopy theory or geometry:
  - in the empty context, $a$ is a point of $A$;
  - in a non-empty context, $a$ is a **section** of the bundle corresponding to $A$.

Concretely, $a$ is a rule assigning to each choice of context variables a point in the corresponding fiber.

---

## (Synthetic) Category Theory

We now consider a category $\mathcal{C}$, often referred to as the **syntactic category** or the **category of contexts**.

- **Objects:** contexts $\Gamma$.
- **Morphisms:** given contexts $\Gamma$ and $\Delta$, a morphism $\Gamma \to \Delta$ is a tuple of terms representing substitution.
- **Composition:** substitution of substitutions.

---

## Display Maps and Isofibrations

Given a context $\Gamma$ and a type $A$ over it, the extension $\Gamma.A$ comes with a canonical projection
\[
p : \Gamma.A \to \Gamma.
\]

In type theory, this is called a **display map**.  
In synthetic category theory, such maps are called **isofibrations**.

---

## Base Change and Substitution

Let $A \twoheadrightarrow B$ be an isofibration corresponding to a dependent type $A(b)$ over $B$,
\[
A \twoheadrightarrow B \quad\Longleftrightarrow\quad \sum_{b:B} A(b) \to B.
\]

Given any morphism $f : B' \to B$, substitution in type theory corresponds to pullback in synthetic category theory. Explicitly, the following diagrams describe the same construction:

{{< tikzcd >}}
\exists A' \ar[r,dashed] \ar[d,dashed,two heads] \ar[dr,phantom,"PB"]
& A \ar[d,two heads] \\
B' \ar[r,"f"] & B
{{< /tikzcd >}}

and

{{< tikzcd >}}
\sum_{b':B'} A(f(b')) \ar[r] \ar[d]
& \sum_{b:B} A(b) \ar[d] \\
B' \ar[r,"f"] & B
{{< /tikzcd >}}

Thus, **pullback corresponds to substitution**, and the object $A'$ is precisely the total space of the substituted dependent type.

---

## Path Objects

For any object $A$, consider the diagonal morphism $\Delta : A \to A \times A$. This admits a factorization

{{< tikzcd >}}
A \ar[rr,"\Delta"] \ar[dr,"r"] && A \times A \\
& \operatorname{Iso}(A) \ar[ur,two heads,"p"']
{{< /tikzcd >}}

Here:
- $p : \operatorname{Iso}(A) \twoheadrightarrow A \times A$ is an isofibration;
- $r : A \xrightarrow{\sim} \operatorname{Iso}(A)$ is a weak equivalence.

The object $\operatorname{Iso}(A)$ is called the **path object** of $A$.

---

### Type-Theoretic Semantics

In type-theoretic terms:

1. The isofibration $p$ corresponds to the identity type
   \[
   x : A,\ y : A \vdash (x \simeq y)\ \mathrm{Type}.
   \]
2. The path object is the total space
   \[
   \operatorname{Iso}(A) = \sum_{x:A} \sum_{y:A} (x \simeq y).
   \]
3. The map $r$ corresponds to reflexivity,
   \[
   x \mapsto (x,x,\mathrm{refl}_x).
   \]

---

## Mapping Path Spaces and Weak Factorization

For any morphism $f : A \to B$, we obtain a factorization

{{< tikzcd >}}
A \ar[rr,"f"] \ar[dr]
&& B \\
& \sum_{b:B} \sum_{a:A} (f(a) \simeq b) \ar[ur,two heads,"p"']
{{< /tikzcd >}}

The intermediate object carries the type-theoretic meaning
\[
b : B \vdash \sum_{a:A} (f(a) \simeq b)\ \mathrm{Type},
\]
which is precisely the **homotopy fiber** of $f$ over $b$.

This shows that synthetic category theory admits a **weak factorization system**, directly mirroring the situation in model categories.
