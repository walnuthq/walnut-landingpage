---
title: Track Contracts Visually with Custom Colors and Label Picker
date: 2025-08-08  
image: /changelog/CodeSnippet20250808.gif
imageBg: false  
---

In the latest release, we've introduced custom colors and labels picker for contract addresses throughout the app. This makes it much easier to track specific addresses across traces and the debugger — especially when analyzing complex interactions or repeated calls. Just click the contract address and pick a custom color and label.

## More improvements

- Improved rendering for Enum values — inner values are now shown directly, making debugging easier.
- Enum variant names are now shown next to the type name in Value Tooltip (e.g. `ModelIndex::Keys`), giving you more context at a glance.
- Enum discriminants are now clearly indicated in the decoded data table.
- Fixed an issue where exceeding localStorage quota could prevent transactions from loading.
