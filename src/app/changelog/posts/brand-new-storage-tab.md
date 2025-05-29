---
title: Brand New Storage Tab
date: 2025-04-25
image: /changelog/CodeSnippet20250425.png
---

This week, we introduced a new Storage Tab! You can now inspect the previous and current storage states for each contract whenever storage changes occur. For now, values are displayed in raw format.

## More improvements

- Upgraded Starknet Provider to stay aligned with the latest ecosystem changes and ensure overall compatibility.
- Increased Nginx payload limit to 2 MB, addressing a user-reported issue where large contract payloads couldn't be processed during verification.
- Added connection timeout for long-running transaction simulations to prevent server overload caused by heavy transactions.
