---
title: L1 Data Flamegraph
date: 2025-06-27
image: /changelog/CodeSnippet20250627.png
imageBg: true
---

In the latest release, we introduced the L1 Data Flamegraph, available for all Transaction Version 3. This gives you deeper visibility into L1 data costs and structure, helping you better understand how data usage contributes to overall resource consumption.

## More improvements

- Added background styling and labeled the Flamegraph with resource names for better clarity.
- Flamegraph tooltips now display complete text rather than shortened versions.
- Fixed a bug that caused simulations to fail when both `CALL __validate__` and `DELEGATE __validate__` were present in the trace.
- Fixed a UI bug that caused loading lag on the Simulate page when using the user profile dropdown.
- Fixed the GitHub link in the footer on [app.walnut.dev](https://app.walnut.dev/) - it now points to the correct GitHub repository.
- Updated the [Join Telegram](https://t.me/walnuthq) with a new logo.