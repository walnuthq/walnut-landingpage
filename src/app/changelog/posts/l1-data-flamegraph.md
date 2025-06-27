---
title: L1 Data Flamegraph
date: 2025-06-27
image: /changelog/CodeSnippet20250627.png
imageBg: true
---

In the latest release, we introduced the L1 Data Flamegraph, available for all Transactions Version 3. This flamegraph provides deeper visibility into L1 data costs and structure, helping to better understand how data usage contributes to overall transaction gas cost.

## More improvements

- Added background styling and labeled the Flamegraph with resource names for better clarity.
- Flamegraph tooltips now display complete values rather than shortened versions, which is especially useful for hashes.
- Fixed a bug that caused simulations to fail when both `CALL __validate__` and `DELEGATE __validate__` frames were present in the Call Trace.
- Fixed a UI bug that caused loading lag on the Simulate page when using the user profile dropdown.
- Fixed GitHub link in the footer on [app.walnut.dev](https://app.walnut.dev/) — it now points to the correct GitHub repository.
