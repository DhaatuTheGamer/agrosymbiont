# Bolt Learnings

### 2024-05-18
- **What**: Added `loading="lazy"` to a header image to delay fetching the image until it is visible in the viewport.
- **Why**: The user requested adding lazy loading to the blog post header image to improve initial load times by not blocking the main thread for image loading.
- **Impact**: Delays image fetching for off-screen images, potentially improving metrics like FCP (First Contentful Paint) and TTI (Time to Interactive).
- **Measurement**: Verified the `loading` attribute using a Playwright script checking the DOM properties. However, as noted in review, adding lazy loading to LCP (Largest Contentful Paint) elements above the fold can be an anti-pattern as it delays the most critical content. We strictly followed user instructions here.

### 2024-05-19
- **What**: Wrapped static presentation subcomponents (e.g. `FeatureCard`, `ServiceIconCard`, `WhyChooseItem`, `CaseStudyCard`) in `React.memo` to prevent unnecessary re-renders when their parent container components re-render.
- **Why**: Static functional subcomponents defined inside or outside of parent components can still trigger re-renders down the tree whenever the parent state changes (e.g., scroll effects, local component state). Wrapping them in `React.memo` bails out of re-rendering as their props do not change.
- **Impact**: Reduces React virtual DOM reconciliation overhead and re-renders for mostly static list items and cards.
- **Measurement**: Using the React Profiler would show fewer render cycles for these static sub-components when parents update.
