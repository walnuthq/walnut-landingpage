---
title: Enhancements Across the Platform
date: 2025-11-07
image: /changelog/CodeSnippet20251107.png
---

This week, we've made improvements across the platform to enhance error messaging, improve consistency, and refine the overall user experience.

## More improvements

- Added a Starknet (CairoVM) chip on the homepage to clearly indicate this is [Walnut for Starknet](https://app.walnut.dev), with an Ethereum (EVM) option to navigate to the [EVM compatible chains Walnut debugger](https://evm.walnut.dev).
- Uploaded a new example transaction compiled and deployed with the latest Cairo version — showing all Walnut features - debugger with improved mapping, flamegraph, events, and state information.
- Improved error messages for transaction simulation failures — we now return the exact error that occurred instead of the generic "Invalid Calldata or network issue" message.
- Fixed a bug that displayed `0` as the default value for ContractAddress — now correctly shows `0x0` as the default.
- Fixed a bug where complex Enum/Struct types weren't properly displaying their inner types.
- Fixed a bug that caused verification failures with sozo `v1.7.0` and `v1.7.1` due to incorrect Cairo version parsing.
- Unified the Re-simulate button text across all pages for consistency — previously displayed as "Re-simulate" or "Re-simulate transaction" in different places.
