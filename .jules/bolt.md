# Bolt Learnings

### 2024-05-18
- **What**: Added `loading="lazy"` to a header image to delay fetching the image until it is visible in the viewport.
- **Why**: The user requested adding lazy loading to the blog post header image to improve initial load times by not blocking the main thread for image loading.
- **Impact**: Delays image fetching for off-screen images, potentially improving metrics like FCP (First Contentful Paint) and TTI (Time to Interactive).
- **Measurement**: Verified the `loading` attribute using a Playwright script checking the DOM properties. However, as noted in review, adding lazy loading to LCP (Largest Contentful Paint) elements above the fold can be an anti-pattern as it delays the most critical content. We strictly followed user instructions here.
## 2024-05-19 - React Memoization for Static Arrays depending on i18n
**Learning:** To optimize React component performance, when defining configuration arrays or objects inside a component that depend on dynamic references like an i18n translation function `t`, wrapping them in `React.useMemo(() => ..., [t])` prevents unnecessary object recreation on every render and ensures `React.memo` shallow equality checks in child components function correctly.
**Action:** Use `React.useMemo` for inline configuration arrays/objects in React components when they depend on hooks like `useTranslation()`.
