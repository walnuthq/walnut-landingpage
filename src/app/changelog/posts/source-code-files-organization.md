---
title: Source Code Files Organization
date: 2025-05-09
image: /changelog/CodeSnippet20250509.png
---

This week, we introduced Source Code Files grouping by folders across the Contracts, Classes, and Debugger Preview pages. This makes it easier to navigate large codebases and keep related contracts organized.

## More improvements

- Added file names to contract and class pages for quicker identification.
- Improved layout on mobile, so long addresses and names now wrap properly and can be copied.
- Resizable panels have been added to contract and class pages, allowing for a more customizable view.
- Fixed a bug where NaN appeared for the block number after simulating transaction on the latest block.
- Unified header height across all pages for a consistent look.
- Fixed inconsistent transaction errors caused by manually set fee values. We now show same error messages as the chain does, like: Insufficient max fee: max fee: 3298534883328, actual fee: 5833172244412.