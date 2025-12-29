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

In last note, we define
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
Thus, we get the following definition.

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
We often write $A = (A_0, A_1, \dots) \in \mathsf{StRing}$ where
$A_n \in \mathsf{CAlg}(n\mathsf{Pr})$.
{{< /definition >}}

{{< remark >}}
Stefanich rings are also known as
*$\omega_1$-compactly generated categorical spectra*,
originally introduced by {{< cite ACS "Remark 3.3.6" >}}.
{{< /remark >}}

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
