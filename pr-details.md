Title: 🧹 Code Health: Extract ROI Calculation Logic from JSX

Description:

🎯 **What:** I refactored `components/products/ROICalculator.tsx` to resolve a code health issue involving deeply nested logic. I extracted the inline return calculations (`Math.round(farmSize * 0.25 * 10)` and `farmSize * 1250`) and declared them as standalone variables (`yieldIncrease` and `revenueBoost`) immediately before the functional component's `return` statement.

💡 **Why:** By extracting the computational business logic out of the deeply nested presentational JSX structure, the code becomes easier to read, maintain, and digest. The new variable declarations serve as self-documenting code, separating the raw calculations from their string formatted `.toLocaleString('en-US')` display forms.

✅ **Verification:**
- Ran the Python string substitution modification script, and successfully verified exact variable extraction mapping using `git diff --cached`.
- Ran `pnpm lint` and confirmed there were no typescript or code-style violations introduced by my changes.
- Executed `pnpm test components/products/ROICalculator.test.tsx` and a full suite `pnpm test`, all of which passed successfully, verifying existing components function as expected with the new syntax.

✨ **Result:** The overall component rendering is vastly cleaner, improving codebase readability and health, with zero change in the existing UI behavior or functionality.