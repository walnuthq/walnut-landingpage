---
title: Verification Status Page with Build Logs
date: 2025-02-14
image: /changelog/CodeSnippet20250214.png
imageBg: false
---

This week, we enhanced the contract verification process by
            preventing sensitive information leaks and displaying the full build
            log for failed projects.

## More improvements

- Improved error visibility by showing the full build log on the
              verification status page when a project build failed.
- Prevented exposure of private keys by ignoring the [env] section in dojo_*.dev.toml files,
              ensuring no sensitive data is transmitted during contract
              verification.
- Added support for functions inlined by the compiler, which is
              available starting from Cairo version 2.8.2, making them visible
              in the call trace.
- Updated the function details window to display values for inline
              functions as well.
