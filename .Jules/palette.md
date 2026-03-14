## 2024-05-24 - SVG Element Keyboard Focus and Accessibility
**Learning:** SVG elements (like `Marker` from `react-simple-maps`) are not natively keyboard accessible. Also, standard focus rings (e.g. `ring-2` in Tailwind) often render poorly on SVGs.
**Action:** Manually add `tabIndex={0}`, `role="button"`, and an `onKeyDown` handler (for 'Enter' and 'Space') to make SVG markers actionable via keyboard. Use `outline` utilities (`focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`) instead of `ring` utilities for a more consistent and accessible visual focus state.
