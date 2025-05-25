---
title: Walnut v0.1.0
date: 2024-05-24
image: /changelog/walnut-hp.png
imageBg: false
---

This is our first changelog message. We started building Walnut to
            make transaction debugging and simulations on Starknet easier. In
            the initial version, we plan the following features:

## More improvements

- Support for any transaction, including failed transactions
- The call trace will include calls to internal functions within
              each contract involved in the simulated transaction
- Each call will present decoded arguments with names and values, as
              well as the return value
- For verified contracts, ability to see the exact call location
              mapped to the Cairo source code.
