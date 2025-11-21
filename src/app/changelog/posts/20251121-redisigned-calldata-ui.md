---
title: Hierarchical Calldata View
date: 2025-11-21
image: /changelog/CodeSnippet20251121.png
---

This week, we've introduced a new hierarchical display for calldata that replaces the previous tabular view, making it easier to navigate complex nested data structures and understand transaction parameters at a glance.

## More improvements

- Fixed a bug where output values were always displayed decoded — we've now added a **Raw** switcher for output values as well.  
- Fixed a circular recursion issue in data types (e.g., Layout → FieldLayout → Layout) that was preventing Contract pages from opening.  
- Simulation errors are now displayed directly on the Transaction page instead of in tooltips for better visibility.
- Added a **Non verified** chip for unverified contracts and classes, making it clear which items need verification.  
- Enabled opening contract pages directly from Transaction pages for easier access to contract details.