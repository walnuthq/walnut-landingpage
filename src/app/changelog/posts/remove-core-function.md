---
title: Cleaner Call Traces by Removing Core Cairo Functions
date: 2025-08-15
image: /changelog/CodeSnippet20250815.png
imageBg: false
---

We’ve removed functions coming from the core Cairo libraries to reduce clutter in call traces. This way, you’re immediately focused only on contract functions that the transaction actually interacts with, improving clarity and speed of analysis.

## More improvements

- Standardized the empty-state message style across all tabs for visual consistency.
- Custom address settings now apply across all UI elements, including function call values.
- When decoding function arguments and results fails, the Call Trace now displays the raw call values - giving you structure even without full decoding.
- The decode data table now collapses raw call values by default, making large traces easier to read.
