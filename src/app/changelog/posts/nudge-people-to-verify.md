---
title: Contract Verification
date: 2024-07-19
image: /changelog/CodeSnippet20240719.png
imageBg: false
---

In the latest release, we added full support for contract
            verification to Walnut. Developers can verify their contracts to get
            detailed call traces, step-by-step debugging, and execution mapping
            to the source code in the Cairo contracts.

## More improvements

- Added a new alert message in the debugger tab and the call trace
              to prompt contract verification if the contract is not yet
              verified.
- Errors in the call traces now show details about the error.
- Opening the debugger from the call trace line now moves the
              execution to the corresponding line.
- Renamed "testnet" to "sepolia".
