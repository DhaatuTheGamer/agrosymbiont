## YYYY-MM-DD - [Pre-calculating Math.PI vs avoiding String allocation]
**Learning:** Pre-calculating `Math.PI * 2` inside tight loops offers no measurable performance gain since V8 compiler optimizes constant arithmetic automatically. Conversely, replacing string concatenation (`rgba(...)`) with `ctx.globalAlpha` in hot rendering loops eliminates garbage collection pressure and repeated browser parsing.
**Action:** Focus on reducing garbage collection overhead and string concatenation in rendering loops, and avoid redundant micro-optimizations like extracting `Math.PI * 2` outside of loops unless benchmarking proves otherwise.

## 2024-04-11 - [Preserving Async Architecture During Mock Optimizations]
**Learning:** When optimizing performance by removing simulated artificial delays from mock API services (e.g., `setTimeout`), never convert the API function to synchronous logic. Always preserve the `async` keyword and `Promise` return type to maintain the asynchronous architecture, error handling (try/catch), and UI loading states expected in real-world network requests.
**Action:** When removing artificial delays, just remove the `setTimeout` and leave the `async/await` structure intact to avoid introducing major architectural regressions.

## 2025-02-23 - Simulated API Delays vs. Real Performance
**Learning:** Do not treat the removal of simulated network delays (e.g., `setTimeout` in mock form submissions or API calls) as a valid performance optimization. These delays are intentional features designed to demonstrate UI loading states. Removing them deletes functionality rather than improving actual execution efficiency.
**Action:** Focus on identifying unmemoized React components (e.g., components inside lists mapped with inline functions) or large bundle improvements instead of removing mock `setTimeout` APIs. When finding list rendering bottlenecks, ensure that subcomponents are properly extracted and wrapped in `React.memo` with stable primitive props and `useCallback` functions.
