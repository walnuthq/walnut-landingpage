---
title: Debugging on Custom Networks
date: 2024-09-06
image: /changelog/CodeSnippet20240906.png
imageBg: false
---

This week we added support for debugging transactions on custom
            networks, a key request from DOJO on-chain game developers. Walnut
            now connects to any Starknet network via custom RPC URLs, with full
            support for debugging, simulating, and verifying smart contracts.
            Next week, we will pilot custom networks with hosted Slot instances
            in New York, meeting DOJO game developers and demonstrating Walnut.

## More improvements

- Created a new Settings page to configure custom RPC URLs, enabling
              debugging transactions on custom networks.
- Aggregated search now displays transactions and verified contracts
              from mainnet, testnet, and custom networks.
- Fixed a caching bug that caused state mismatches and
              inconsistencies in transaction simulations.
- Extended Call Trace to include function call arguments, results,
              and interface names for internal calls.
- Improved regex parsing for function call names in the Call Trace
              for better readability.
