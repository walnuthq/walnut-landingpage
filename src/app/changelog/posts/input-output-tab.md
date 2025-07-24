---
title:  New Input/Output Tab
date: 2025-07-25
image: /changelog/CodeSnippet20250725.png
imageBg: false
---

This week, we’re launching a new Input/Output tab designed to simplify inspection of top-level contract calls. You can now easily view input parameters and return values for all main contract calls.

## More improvements

- The Storage Tab now collapses Contract State Changes by default, making it easier to navigate large sets of storage updates.
- Error chips in the trace adopted dark-friendly colors, making errors stand out.
- Scrollbars in dark mode have better contrast, improving visibility when scrolling through traces or code.
- When input decoding failed due to malformed calldata, Call Trace shows variable names and types — giving you context without decoded values.
- Fixed a bug that caused unreadable white text on white backgrounds in dark mode.
- Fixed a bug causing incorrect cross-chain message counts.
- Fixed broken link to documentation in the code viewer.
