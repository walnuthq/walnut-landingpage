---
title: Focus on Stability
date: 2025-05-02
---

This week we focused on fixing bugs and edge cases to improve platform reliability and consistency.

## More improvements

- Optimized data handling in the Storage View tab to improve transaction debugging performance.
- Fixed a bug that allowed excessive memory allocation when input parameters couldn't be deserialized.
- Calldata is now always shown in raw format, ensuring it's visibility even when argument deserialization fails.
- Removed duplicated raw result entries in the Call Trace Details panel.
- Revert error messages now skip ASCII control characters for cleaner display.
- Fixed an issue where the wrong Sierra version was selected based on class hash.