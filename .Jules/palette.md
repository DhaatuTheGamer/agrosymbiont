## 2026-04-15 - Focus Visibility on Custom File Input Wrappers
**Learning:** When hiding native `<input type="file">` elements using utility classes like `sr-only` and using a `<label>` as a custom wrapper/button, the element loses visible focus when navigated to via keyboard.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-offset-2` utility classes to the custom `<label>` or wrapper element to ensure keyboard accessibility.

## 2026-04-16 - Dead End Mitigation and Memoization
**Learning:** Adding navigation to a "View Product" button resolves a dead-end user flow, making the UX actionable. However, passing an inline navigation function (e.g., `() => navigate('/route')`) as a prop to a `React.memo` component defeats the memoization and causes unnecessary re-renders.
**Action:** When adding actionable UX elements like navigation callbacks to memoized components, always wrap the callback in `useCallback` or hoist it to preserve performance optimizations alongside UX improvements.

## 2026-04-19 - Restored Form Loading UX & Improved Accessibility
**Learning:** Bolt removed the simulated network delay from the Investor form as a "performance optimization", which jarringly removed visual loading feedback. Also, custom JS-validated fields visually marked with '*' lacked the native `required` and `aria-required="true"` attributes, causing screen readers to miss that they were required unless validation failed.
**Action:** When adding JS validation to custom forms, always include `noValidate` on the `<form>` and `aria-required="true"`/`required` on mandatory inputs to preserve semantic accessibility. Never remove loading states from forms to "optimize performance", as it degrades the user experience.
