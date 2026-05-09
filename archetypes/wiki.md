---
title: "{{ replace .Name "-" " " | title }}"
slug: "{{ .Name }}"
date: {{ .Date }}
draft: false
math: true
categories:
  - "Category theory"     # change to the entry's mathematical area
tags:
  - ""                    # short keyword tags, optional
aliases:
  - ""                    # other names this entry should match for [[wikilinks]]
description: >
  One-sentence summary used in the side index, search, and graph tooltip.
---

In [[Category theory]], a **{{ replace .Name "-" " " | lower }}** is a
(*kind of mathematical object*). Roughly speaking,
(*intuitive, non-rigorous explanation — capture the main idea in one or
two sentences*). For example, (*two or three of the simplest examples,
just enough to anchor the reader's intuition*).

(*Optional further intro paragraphs: how this concept relates to others,
what it generalises or specialises, why it deserves its own page.*)

## Definition

{{</* definition */>}}
(*Write the definition here. Spell out every notation. If the definition
has variants, list them as a numbered list inside this block or as
separate definition blocks below.*)
{{</* /definition */>}}

## Examples

- (*Start with the most basic / canonical example.*)
- (*Then a slightly richer example.*)
- (*Then a non-trivial / surprising example.*)

## Properties

### Basic properties

- (*Properties that follow almost directly from the definition.*)
- (*Closure properties: under limits, colimits, retracts, etc.*)

(*Add further subsections as the entry grows, e.g. "Functoriality",
"Relation to dualizability", "Compact generation", …*)

## Related concepts

- [[Concept A]] — one-line context.
- [[Concept B]] — one-line context.

{{</* topic_index */>}}
