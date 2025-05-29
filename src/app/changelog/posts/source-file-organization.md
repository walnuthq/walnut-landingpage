---
title: Improved File Explorer
date: 2025-03-28
image: /changelog/CodeSnippet20250328.png
imageBg: false
---

This week, we improved the File Explorer by grouping source files of
            verified contracts by contract address.

## More improvements

- Added a guide to the Dojo documentation on how to debug Dojo Games with Walnut.
- Upgraded Walnut Server to Rust 1.85 to ensure compatibility with
              the latest snfoundry. This resolved some contract verification
              failures which required Rust 1.80.1 or higher.
- Fixed a UI bug in the Debugger window where icons and window
              titles were not displayed correctly.
- Fixed an issue with searching for contracts on Ethereum, where the
              network was not displayed correctly.
- Fixed a bug where calldata arrays with nested elements were
              incorrectly decoded, which led to Walnut Server timeout errors in
              some cases.
