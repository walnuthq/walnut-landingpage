---
title: Clearer formatting for decoded arguments and results
date: 2025-08-01
image: /changelog/CodeSnippet20250801.png
imageBg: false
---

In the latest release, we’ve unified how arguments and return values are displayed across Function Calls, Contract Calls, and the Memory Step window. Arrays and structs now have a clearer layout and visible element counts — making complex data easier to read.

## More improvements

- Removed `[]` from type names to avoid confusion — not everything is an array.
- Fixed a bug that caused client exceptions when opening trace details.
- Error traces no longer use red backgrounds, resulting in a cleaner UI in both light and dark mode.
- The "Validate Call" section is now collapsed by default, helping focus on the transaction execution steps.