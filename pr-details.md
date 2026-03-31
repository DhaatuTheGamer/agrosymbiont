Title: 🧹 [Code Health] Extract WaitlistForm states to improve readability

🎯 **What:** The main return statement in `components/products/WaitlistForm.tsx` had deeply nested inline JSX conditionals to handle the `isSubmitted` state. This was refactored by extracting the success message UI into a `renderSuccessState()` helper function and the form UI into a `renderFormState()` helper function, simplifying the return to a clean ternary statement. Additionally, duplicate imports and identifier conflicts regarding `isValidEmail` and `EMAIL_REGEX` in several components and `utils/validation.ts` were cleaned up.

💡 **Why:** Deeply nested conditional logic makes components harder to read, maintain, and reason about. Extracting these states into named helper functions immediately clarifies the component's structure and makes the render intent much clearer. Consolidating the validation utilities fixes linting errors and prevents future import confusion across the codebase.

✅ **Verification:** Verified by running the full project test suite (`pnpm test`), confirming all 239 tests pass without any new regressions. Format and lint checks were successfully resolved using `pnpm lint`. A manual visual check via `git diff` confirmed the refactoring preserved all original CSS classes, attributes, and logic.

✨ **Result:** A more readable `WaitlistForm` component with clear, separated render states. A cleaner codebase with standardized validation imports, successfully passing all static analysis tools and tests.
