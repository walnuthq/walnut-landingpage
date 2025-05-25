---
title: Aggregated Search
date: 2024-08-16
image: /changelog/CodeSnippet20240816.png
imageBg: false
---

In the latest release, we introduced aggregated search, allowing
            users to search for transactions, contracts, or classes across all
            networks.

## More improvements

- New contract page displays verified contract source files and
              code.
- A new API endpoint for verification that does not require chain_id is available at /v1/verify/ .
              This is an important prerequisite for making Walnut work with
              fully on-chain games deployed to appchains like Slot.
- Added support for contract verification with Cairo version 2.7.0 .
- Enhanced code highlighting with additional Cairo location mapping
              in the execution trace.
- Launched Walnut Documentation , with contract verification guide .
