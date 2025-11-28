---
title: Introducing the ABI Tab
date: 2025-11-28
image: /changelog/CodeSnippet20251128.png
---

This week, we've introduced a new ABI tab on the Contract page, making it easier to view and reference a contract’s Application Binary Interface directly within the UI.

## More improvements

- Simulation errors now include the block number when attempting to simulate a Transaction in a block where the contract wasn’t deployed.
- Clearer error messaging for unsupported `sozo v1.7.0` and `sozo v1.7.1` contract verification.
- Added automatic cache invalidation, ensuring that cached transactions are cleared whenever a class is newly verified.
- Improved mobile layout with horizontally arranged tabs for better usability on smaller screens.
- The Re-simulate page now displays the full Transaction hash by default, shortening it only when viewed on smaller devices.
