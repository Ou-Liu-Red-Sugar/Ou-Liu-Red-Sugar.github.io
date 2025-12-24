---
title: "Homotopy Limits and Colimits"
date: 2023-11-22
draft: false
tags: ["Homotopy Theory", "TikZ"]
summary: "A test note with Commutative Diagrams."
---

## Introduction

Let's try again with pure ASCII characters inside the block.

{{< tikz >}}
  % Load packages (English comments only)
  \usepackage{amsfonts}
  \usepackage{amssymb}
  \usepackage{tikz-cd}

  \begin{document}
    \begin{tikzcd}
      A \arrow[r, "\phi"] \arrow[d, "f"] & B \arrow[d, "g"] \\
      C \arrow[r, "\psi"] & D
    \end{tikzcd}
  \end{document}
{{< /tikz >}}

## Pure TikZ Test

{{< tikz >}}
  \begin{tikzpicture}
    \draw[help lines] (0,0) grid (2,2);
    \draw[red, thick] (0,0) -- (2,2);
    \draw[blue] (1,0) circle (1);
  \end{tikzpicture}
{{< /tikz >}}
