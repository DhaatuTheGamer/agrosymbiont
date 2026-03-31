# ⚡ Bolt: Memoize static presentation components

💡 **What:** Wrapped static UI sub-components (`FeatureCard`, `ServiceIconCard`, `WhyChooseItem`, and `CaseStudyCard`) in `React.memo` to prevent unnecessary re-renders. Additionally, cleaned up multiple duplicate import statements across several components that were causing linting errors.

🎯 **Why:** Static functional subcomponents defined inside or outside of parent components can still trigger re-renders down the tree whenever the parent state changes (e.g., scroll effects, local component state). Wrapping them in `React.memo` bails out of re-rendering as their props do not change.

📊 **Impact:** Reduces React virtual DOM reconciliation overhead and re-renders for mostly static list items and cards on the Home, Services, and Use Cases pages.

🔬 **Measurement:** Using the React Profiler would show fewer render cycles for these static sub-components when their parent components update. All TypeScript linting errors caused by duplicate `isValidEmail` imports were resolved, ensuring a clean build.