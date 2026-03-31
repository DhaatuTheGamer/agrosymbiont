# PR Title
🧹 Code Health: Simplify DiagnosisResult nested logic

# PR Description

🎯 **What:** The code health issue addressed
Refactored deeply nested ternary operators within the `DiagnosisResult` component in `components/CropProblemSolver.tsx`. In addition, cleaned up duplicate validation imports (`isValidEmail`, `EMAIL_REGEX`) across multiple files (forms, pages, and hooks) that were causing linting errors.

💡 **Why:** How this improves maintainability
Nested ternaries are notoriously difficult to read, debug, and maintain. By extracting the rendering logic into a `renderContent` helper function with explicit `if/else` early returns, the structure of the different states (analyzing, result, placeholder) is now completely clear and linear. Removing duplicate imports resolves TypeScript compilation warnings and prevents accidental bugs related to shadowing or duplicate references.

✅ **Verification:** How you confirmed the change is safe
- Visually verified via Playwright that the UI renders identically and maintains interaction states (e.g., clicking crops and symptoms works as expected).
- Ran the full test suite via `pnpm test`, with 53 test files and 239 individual tests all passing, proving no regressions in functionality.
- Ran `pnpm lint` via `tsc --noEmit` and confirmed that all TypeScript duplicate identifier errors have been successfully removed.

✨ **Result:** The improvement achieved
A cleaner, more readable `DiagnosisResult` component that uses explicit conditions, plus a fully compliant and warning-free build sequence. This results in significantly easier future maintenance.
