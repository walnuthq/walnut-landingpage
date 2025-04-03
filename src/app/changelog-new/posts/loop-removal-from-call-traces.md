---
title: Loop Removal from Call Traces
date: 2024-11-29
image: /changelog/CodeSnippet20241129.gif
---

This week, we streamlined loop handling in the call trace by removing loops and ensuring function calls within them are displayed at the correct level.

## More improvements

- Adjusted the build configuration during Contract Verification to use the release profile, aligning with Starknet Foundry's setup.
- Fixed an issue in Transaction Simulations where errors weren’t shown for undeployed contracts.
- Updated the documentation [Walnut Verification Guide](https://docs.walnut.dev/verify-contract-classes) with the new Walnut API Contract Verification service, ensuring users are up to date with the latest functionality.
- Improved frontend performance by removing regexes from Call Trace function formatting.
