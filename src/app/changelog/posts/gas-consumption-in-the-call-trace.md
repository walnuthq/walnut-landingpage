---
title: Gas Consumption in the Call Trace ⛽️
date: 2025-05-16
image: /changelog/CodeSnippet20250516.png
---

This week, we’re introducing the first version of gas profiling in Walnut. It gives Cairo developers a powerful way to optimize their contracts and reduce gas usage. Gas profiling works for both existing Starknet transactions and simulations.

## More improvements

- Gas per Contract Call is now displayed in the Call Trace on Walnut — available for Contracts using Sierra ≥ 1.7.0 and Transactions Version 3 or above.
- Initial gas values (visible after expansion of each call in the call trace) now align with Starknet v0.13.5 constants, resulting in more accurate and reliable gas estimates.
- Added support for message hashes on cross-chain L2->L1 transactions, making it easy to find the original Starknet L2 transaction from an L1 transaction hash.