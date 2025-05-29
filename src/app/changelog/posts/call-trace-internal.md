---
title: Internal functions in the call trace
date: 2024-05-31
image: /changelog/call-trace-internal.png
imageBg: false
---

In this release we added support for internal function calls in the
            call trace. After verifying contracts, the call trace presents calls
            to every Cairo function, and will also present details about each
            call's arugments and return values.

## More improvements

- Support for different colors in the call trace to visually
              separate certain elements. For example contract names,
              entrypoints, arguments.
- After clicking on a call trace item, you get details about
              argument and return values.
