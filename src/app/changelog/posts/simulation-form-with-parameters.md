---
title: Easier Simulation with Dynamic Inputs
date: 2025-10-10
image: /changelog/CodeSnippet20251010.gif
---

This week, we’ve improved the Simulation Form to make it easier and more flexible.  
You can now choose between **Raw** and **Parameters** modes — when using the Parameters option, input fields are dynamically generated based on the selected entrypoint, helping you quickly prepare simulations without dealing with raw calldata directly.

## More improvements

- Refined the mobile layout — grouped tabs into menus, adjusted borders, and moved footer links for a cleaner and more focused interface.
- Simplified display for `u256` and `u512` types in Entrypoints tab — inner fields like `low`, `high`, or `limb0..4` are now ignored for a cleaner view.  
- Fixed a bug that caused incorrect struct grouping due to missing parent references.  
- Fixed a bug that caused contract verification to fail on Mainnet when using `sncast`.