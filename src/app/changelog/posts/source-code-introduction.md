---
title: Contract Source Code in Call Trace
date: 2024-06-14
image: /changelog/CodeSnippet20240614.png
imageBg: false
---

In the latest release, we added support for displaying the
            corresponding Cairo source code for each call in the call trace.

## More improvements

- Each call trace now displays the associated Cairo line and the
              corresponding code snippet where the call occurred. This only
              works for verified contracts.
- The new events tab showcases all emitted events for simulated
              transactions.
- Data for arguments and results is now also available in view
              functions.
