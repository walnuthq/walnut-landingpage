---
title: Bug Fixes 🐛🐞🪲🕷️🪳🦟
date: 2024-12-06
---

This week, we focused on bug fixing. And we also extended our
            Contract Verification service to support Cairo 2.8.5.

## More improvements

- Fixed a bug that caused simulation to fail when performed on the
              latest block number.
- Resolved an issue where the call trace was not displayed for
              reverted transactions.
- Improved handling of the execute account function
              when it fails due to an undeployed contract. The transaction
              status now shows REVERTED with a clear error
              indicator.
- Added sierra-replace-ids to the Scarb.toml configuration, ensuring sierra_program_debug_info is included in the contract
              class during the build process.
