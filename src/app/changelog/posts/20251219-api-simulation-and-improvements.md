---
title: API Simulation for EVM and Platform Improvements
date: 2025-12-19
image: /changelog/CodeSnippet20251219.png
---

This week's release introduces API Simulation for EVM transactions, including detailed tracking of asset changes. Learn more in the [Simulation API documentation](https://docs.walnut.dev/api/walnut-simulation-api).

## More improvements

- Fixed an issue that prevented the latest Sozo versions from being downloaded by correctly parsing versions from tag names (supporting both `v1.8.0` and `sozo/v1.8.1` formats).
- Inputs and Storage tabs now automatically expand the first item when only one entry is available.
- Improved color consistency in the Storage tab to better align with the rest of the application.
- Fixed source code highlighting in the Debugger — hovering over functions in the Expression view now immediately highlights the relevant lines.
- Improved error message parsing by removing unexpected null characters.
- The Parameter & Results data is now shown by default in the Debugger Function Call Details window.
- Simplified the Function Call Details Debugger UI by removing unnecessary borders for better readability.
