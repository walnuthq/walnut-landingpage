---
title: New Verification Flow
date: 2024-11-22
image: /changelog/CodeSnippet20241122.png
imageBg: false
---

We've enhanced the contract verification process by enabling
            users to verify contracts using only the source code, simplifying
            the process and making it more user-friendly.

## More improvements

- Added a verification request information to the verifcation status
              response. Look example here .
- Added support for contract verification with Cairo version 2.8.4.
- Improved the contract page to support custom networks.
- Resolved an issue where the presence of the license-file field in Scarb.toml caused verification
              to fail.
- Fixed an issue where error traces for contract calls were missing.
- Introduced minor UI adjustments and performance optimizations to
              enhance overall usability and responsiveness.
