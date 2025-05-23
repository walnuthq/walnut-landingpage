---
title: More Resilient Contract Class Verification
date: 2024-08-30
image: /changelog/CodeSnippet20240830.png
imageBg: false
---

In the latest release, we moved contract class verification to run
            in the background, making the service more resilient when verifying
            larger contracts or multiple contracts.

## More improvements

- Introduced a new API endpoint to check the verification status of
              a contract class. Available at . Try it here .
- Enhanced the accuracy of simulated transactions by applying state
              transitions for all preceding transactions within the same block.
- Updated the nudge verification link from the Walnut app to direct
              users to the Walnut documentation .
