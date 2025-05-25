---
title: Added Argument and Result Values to the Debugger
date: 2024-07-05
image: /changelog/CodeSnippet20240705.png
imageBg: false
---

Function arguments and return results are now visible in the
            step-by-step-debugger. In the screenshot above, the extract_age function returns a single result: 18 .

## More improvements

- The debugger now shows arguments and return values. Some data
              might be missing in specific places, which will be improved in the
              future.
- Internal function calls in the Call Trace now display the argument
              and result values.
- New API endpoint for querying the source code of verified
              contracts via API using Class ID . Available at the / network_id /classes/ class_id endpoint. Try it here .
- Added support for the Sepolia testnet and deprecated Goerli.
