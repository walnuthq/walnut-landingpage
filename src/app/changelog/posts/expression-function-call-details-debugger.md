---
title: Enhanced Function Call Details Window
date: 2025-04-18
image: /changelog/CodeSnippet20250418.gif
---

This week, we've made function-level debugging clearer and more intuitive. The Function Call Details panel now displays information about the current execution step, including the line number, arguments, and results—making it easier to see what's being passed and returned during CairoVM execution.

## More improvements

- Fixed an issue where the result type name was displayed twice in
              the Function Call Details panel.
- Resolved a problem where some functions were not found during
              multicall simulation.
- Improved system call mappings, fixing a bug that blocked debugging
              during simulations.
