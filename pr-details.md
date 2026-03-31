Title: 🧹 [code health improvement description]
Description:
🎯 **What:** Extracted the deeply nested logic of the Call To Action section in `UseCasesPage` into a separate `UseCasesCTA` component.
💡 **Why:** Reduces nesting, isolates the CTA view, and significantly improves the readability and maintainability of `pages/UseCasesPage.tsx`.
✅ **Verification:** Verified by running `pnpm test pages/UseCasesPage.test.tsx` and checking `git diff`. The UI remains intact, behavior is preserved, and test specs passed.
✨ **Result:** A cleaner component structure in `UseCasesPage.tsx` with less bloated markup in the main functional component.