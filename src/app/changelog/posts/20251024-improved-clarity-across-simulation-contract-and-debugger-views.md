---
title: Improved Clarity Across Simulation, Contract, and Debugger Views
date: 2025-10-24
---

This week, we’ve refined the Simulation and Contract experiences for better clarity and consistency throughout the app — making it easier to understand what each action does and how data is displayed.

## More improvements

- The Simulation Form now clearly indicates when an entrypoint doesn’t require calldata, so you immediately know no input is needed.
- Added state mutability chips to entrypoint search in Simulation, helping you quickly distinguish between read-only and state-changing calls.
- Added a tooltip to the Simulate button on the Contract page, improving usability when running simulations on different entrypoints.
- The Class page now lists which networks a class was found on for better visibility across deployments.
- Updated contract address color in the Debugger to green for visual consistency with the rest of the app.
- Fixed a tooltip on the Contract page that incorrectly referred to a transaction instead of a contract.
- Fixed a typo in the Debugger (“paramenters” → “parameters”).
- Improved Storage Layout presentation for cleaner, easier-to-read structure.