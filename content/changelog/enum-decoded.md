---
title: Enums Decoded in Internal Function Call
date: 2025-02-28
image: /changelog/CodeSnippet20250228.png
imageBg: false
---

This week, we added Enums decoding for internal functions, making it
            easier to understand values during debugging.

## More improvements

- The Call Trace Preview in the debugger no longer shows Errors,
              improving navigation.
- Errors are now always visible in the Call Trace. Previously, they
              were sometimes collapsed, making them hard to find.
- The Call Trace now displays Events with argument data.
- The call trace now uses different colors for Delegate and Event
              frames, improving differentiation.
- Contract verification now correctly generates debug info for
              inline functions, even when both [cairo] and [profile.dev.cairo]
              sections are in Scarb.toml.
