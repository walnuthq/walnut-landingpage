---
title: Dojo Worlds Contract Verification on Walnut
date: 2025-01-17
---

Walnut is now natively integrated with Sozo , a CLI tool
            for Dojo developers. This integration allows developers to verify
            contracts on Walnut and access the step-by-step debugger directly
            from their native tooling

## More improvements

- Updated the Walnut Verification flow in the sncast command in Starknet Foundry to prompt users not to expose private
              keys during contract verification. Also updated docs acordingly.
- Fixed a search bug in the Call Trace that prevented certain
              characters from being searchable when the debugger window was
              open.
