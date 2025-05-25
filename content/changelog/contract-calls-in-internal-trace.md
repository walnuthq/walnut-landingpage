---
title: Improvements to the Call Trace
date: 2024-07-26
image: /changelog/CodeSnippet20240726.png
imageBg: false
---

In the latest release, we focused on improving the call trace.
            Concretely, we worked on displaying contract calls within internal
            function calls. In the screenshot above, you can see the IVerificationHelper.calculation_proof correctly placed right after the internal function call IVerificationHelperDispatcherImpl::calculation_proof .

## More improvements

- If the Contract Name is not present, the app now uses Interface
              Name as a fallback.
- Added human readable Chain ID to transaction details.
