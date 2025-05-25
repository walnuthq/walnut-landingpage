---
title: Contract calls in Debugger Window
date: 2024-09-13
image: /changelog/CodeSnippet20240913.gif
---

The step-by-step debugger now supports nested contract flows. When
            you reach a contract call in the source code, just hit “Next” to
            seamlessly move into the new contract and continue debugging.

## More improvements

- Integrated Walnut into Sozo and added support for contract verification directly from
              Sozo.
- Added contract verification for custom networks, including support
              for hosted Slot instances.
- Chain information has been added to the transaction simulation
              context, fixing occasional data inconsistencies in simulations.
- Updated the app UI to support full screen mode, making it easier
              to debug large codebases.
