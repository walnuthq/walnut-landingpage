---
title: Decoded Variables in Function Call Trace
date: 2025-07-18
image: /changelog/CodeSnippet20250718.png
imageBg: true
---

We’re continuing our work on making the Call Trace easier to read and navigate. This week, we’ve added decoded parameters to Function Calls — you’ll now see the variable types and values for each function call. Long values are shortened by default, and can be expanded with a click to reveal the full content.

## More improvements

- Unified color styling in the Call Trace for better readability (addresses, functions, variables, and values now use consistent colors).
- Removed expand-on-click for function calls with a single parameter to simplify the UI.
- Fixed address matching when contract addresses had leading `0x0...`, improving highlight accuracy.
- Hidden loop iteration calls from the trace to reduce clutter and make debugging clearer.
- Replaced contract addresses with contract names in the Debugger header (when available) for better context.
