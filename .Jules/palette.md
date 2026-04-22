## 2026-04-15 - Focus Visibility on Custom File Input Wrappers
**Learning:** When hiding native `<input type="file">` elements using utility classes like `sr-only` and using a `<label>` as a custom wrapper/button, the element loses visible focus when navigated to via keyboard.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-offset-2` utility classes to the custom `<label>` or wrapper element to ensure keyboard accessibility.

## 2026-04-16 - Dead End Mitigation and Memoization
**Learning:** Adding navigation to a "View Product" button resolves a dead-end user flow, making the UX actionable. However, passing an inline navigation function (e.g., `() => navigate('/route')`) as a prop to a `React.memo` component defeats the memoization and causes unnecessary re-renders.
**Action:** When adding actionable UX elements like navigation callbacks to memoized components, always wrap the callback in `useCallback` or hoist it to preserve performance optimizations alongside UX improvements.
## 2026-04-18 - Missing Focus States on Modal/Tab Controls
**Learning:** Custom tab buttons (like `MemoizedCategoryButton`) and modal close buttons (like the `JobModal` close 'X') often lack focus-visible utility classes when initially built, leading to poor keyboard navigation experiences where users cannot see which tab/modal control is currently focused.
**Action:** Always ensure that any custom interactive component used for navigation or modal control includes explicit `focus-visible` styles (e.g., `focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`).
## 2026-04-22 - Input Fields Need focus-visible, not focus
**Learning:** When replacing or enhancing focus states for text inputs or custom range sliders, developers often rely on standard `focus:` Tailwind classes (like `focus:ring-2`). However, this leads to an inconsistent visual experience for keyboard users and can create accessibility contrast issues.
**Action:** Always use `focus-visible:` variants alongside `focus-visible:ring-offset-X` when overriding default input styles to ensure a prominent focus indicator strictly for keyboard navigation, preserving a clean UI for mouse interactions while satisfying a11y requirements.
