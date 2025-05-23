---
title: Clearer Arguments and Results representation
date: 2024-11-01
image: /changelog/CodeSnippet20241101.png
imageBg: false
---

This week, we simplified the Call Trace by removing argument and
            result namespaces and skipping system arguments. This reduces visual
            complexity, making it easier for users to navigate function calls!

## More improvements

- Added Debugger Keyboard Shortcuts: b — Step Back n — Step Into o — Step Over
- Improved error messages in the Transaction Simulation Dialog to
              help users complete the form more easily.
- Fixed a bug in fetching CASM instructions. Previously, some
              instructions were missed, causing issues in specific transactions.
              Now, all CASM instructions are reliably retrieved, resolving the
              issue.
- Resolved issues with transaction inconsistencies on custom
              networks by adding the chain ID of custom networks to the
              transaction execution context.
- Enhanced the mobile experience by fixing the navigation burger
              menu on the home screen and ensuring the footer remains anchored
              at the bottom of the page.
