---
title: Jump Straight to the Exact Step in the Debugger
date: 2025-12-26
image: /changelog/CodeSnippet20251226.gif
---

This week's release introduces a new way to navigate to the Debugger — clicking on a Function call in the Call Trace now opens the Debugger at the exact step, making it easier to jump directly to the relevant execution point.

## More improvements

- Resolved an issue in the Function Call Debugger where enum values in decoded data are now fully decoded and displayed correctly.
- Addressed a leading zeros issue that prevented contract classes from being displayed when the class hash was shorter than 66 characters
- Refined the Debugger UI by reducing padding and removing the Parameters & Results title.
- Enhanced the network selection list on the Simulation page by adding network logos.
- Enhanced transaction search performance, making it more responsive on Walnut EVM.
- Removed class hash information display on EVM contract pages.
