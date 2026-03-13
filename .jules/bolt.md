## 2024-03-12 - [React Re-renders on Scroll]
**Learning:** Attaching a window 'scroll' event listener that triggers a React state update (e.g., `setScrollY`) at the root `Layout` component level is a severe performance bottleneck. It causes the entire application tree to re-render synchronously on every scroll tick, causing noticeable jank.
**Action:** Always prefer off-main-thread or composition-level solutions for scroll animations. Use Framer Motion's `useScroll` and `useTransform` to bind scroll progress directly to a `<motion.div>`'s style, bypassing the React render cycle entirely.

## 2026-03-13 - [Inline Array Creation in Render Loop]
**Learning:** Re-creating a large array and hundreds of object literals inside a `requestAnimationFrame` loop causes extreme garbage collection pressure, as JavaScript has to allocate and destroy these objects 60 times a second, leading to micro-stutters and frame drops.
**Action:** When working with canvas animations or high-frequency loops, pre-allocate arrays and objects outside the loop. Modify the properties of these pre-allocated objects in place during the loop to avoid continuous memory allocations.
