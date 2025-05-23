---
title: New Simulation Page
date: 2025-04-04
image: /changelog/CodeSnippet20250404.png
imageBg: false
---

This week, we introduced a new Simulation Page that simplifies data
            entries for transaction simulations. Entry points are now
            automatically fetched based on the provided contract address and
            network.

## More improvements

- Added support for verifying contracts with Cairo 2.9.4.
- Improved error clarity during verification, providing better
              insights when an unsupported Cairo version is used or a build
              failure occurs.
- Fixed an issue where missing memory values wrongly show Transaction hash not found error.
