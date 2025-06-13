---
title: Always Visible Gas Chip
date: 2025-06-13
image: /changelog/CodeSnippet20250613.gif
---

This week, we made the gas chip always visible, so you never miss gas insights.

## More improvements

- Removed the gas chip from the debugger window to reduce visual clutter.
- Added an info message when a transaction has no storage changes: "No contract storage changes in this transaction".
- Fixed a UI bug where contract calls were being collapsed when the interface name started with core::.
- Improved error handling when a Transaction is not found, users now see a clear error with the Transaction hash and network name (e.g., Transaction hash 0x... not found on sn_main).
