# ⚡ Bolt: Optimize Static Array Creation in CropProblemSolver

💡 **What:** Wrapped the inline definition of `cropOptions`, `symptomOptions`, and `solutions` configuration arrays/objects in `components/CropProblemSolver.tsx` with `React.useMemo`.

🎯 **Why:** These variables are defined inside the functional component because they depend on the `t` (translation) function. However, defining them inline without memoization causes new object instances to be allocated on every single render. This puts unnecessary pressure on the Garbage Collector and can break React's shallow equality checks for child components (like `SymptomButton` which is a `React.memo` component receiving the `symptom` prop from `symptomOptions`).

📊 **Impact:** Reduces unnecessary object and array allocations per render from O(M*N) to O(1) (only recreating when language changes). This improves rendering performance and stabilizes object references for child components.

🔬 **Measurement:** Verified that the component continues to work correctly and pass all tests. Profiling the component with React DevTools would show fewer re-renders of child components like `SymptomButton`.
