---
title: "Conventions"
slug: "conventions"
date: 2026-04-25
draft: false
math: true
categories:
  - Foundations
tags:
  - conventions
  - higher categories
aliases:
  - "Wiki conventions"
description: >
  House conventions for this wiki — what 'category', 'n-category', and
  'classical category' mean here, and the suggested entry structure.
---

## Introduction

This wiki is written in the modern, homotopy-coherent dialect. The intention
is to keep statements short by *not* repeating the qualifier "(∞,1)" on
every other word. The terminology below is fixed once for the whole site,
and individual entries should not redefine it.

If you arrive from a 1-categorical background, just read every "category"
as "(∞,1)-category" and add the strictness adjective when you want it.

## Body

### Categorical conventions

- **category** = **1-category** = **(∞,1)-category**.
  All categories on this wiki are $(\infty,1)$-categories by default. Every
  notion (limits, colimits, adjunctions, presheaves, …) is the
  $(\infty,1)$-categorical one.

- **$n$-category** = **$(\infty, n)$-category**.
  The integer counts the depth of non-invertible morphisms; everything above
  level $n$ is invertible. So a *$2$-category* on this wiki means an
  $(\infty,2)$-category, not a strict 2-category.

- **classical category** is the explicit name for the 1-categorical
  ($\mathsf{Set}$-enriched) notion. Whenever the 1-categorical sense is
  needed — to contrast with the homotopy-coherent one, or to discuss
  classical theorems — the qualifier *classical* is mandatory.

- **anima** denotes the $(\infty,1)$-category of $\infty$-groupoids
  (a.k.a. spaces, homotopy types, $\mathsf{An}$). Reserved word.

A consequence of these conventions: phrases like "the category of presentable
∞-categories" become "the category of presentable categories", and "a
1-category in the classical sense" becomes "a classical category".

### Suggested entry structure

Every entry should have three blocks. The first two are written by hand;
the third is rendered automatically by the layout.

1. **Introduction** — motivation and intuition. What is the entry about,
   and why does it deserve a name? What does it generalise or specialise?
   What goes wrong without it?
2. **Body** — formal definitions, characterisations, the main statements.
   Subheadings encouraged when there is more than one route in.
3. **Neighborhood** — auto-rendered. Lists outgoing $[[\text{wikilinks}]]$,
   incoming references (backlinks), and a 1-hop force-directed graph
   centred on the current entry.

Entries that need a long bibliography should add a *Pointers* section just
before the auto-rendered Neighborhood.

### Linking

Use double-bracket wikilinks for cross-references:

```markdown
A [[Compactly generated category]] is  [[Presentable category]] whose generators are $\aleph_0$-compact.
```

The bracketed text is matched against entry titles and `aliases:` in the
frontmatter, case-insensitive. Unresolved links render as a greyed dashed
underline so they show up while drafting.
