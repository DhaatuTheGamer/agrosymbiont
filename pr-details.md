Title: 🧹 [Clean up duplicate and invalid imports]

Description:
🎯 **What:** Removed duplicate `isValidEmail` imports and invalid `EMAIL_REGEX` and unused `useContactForm` imports across multiple files (`components/BlogNewsletterForm.tsx`, `components/ContactForm.tsx`, `components/InvestorContactForm.tsx`, `components/JobApplicationForm.tsx`, `components/products/WaitlistForm.tsx`, `hooks/useContactForm.ts`, `pages/InvestorsPage.tsx`, `pages/ResourcesPage.tsx`).

💡 **Why:** This resolves duplicate identifier compilation errors and removes dead code references, significantly improving code health and slightly reducing bundle sizes. It ensures the codebase passes typechecking cleanly via `pnpm lint`.

✅ **Verification:** Verified by successfully running `pnpm lint` with 0 errors, and executing `pnpm test` showing 100% test success across 239 assertions, confirming no logic regressions.

✨ **Result:** A cleaner codebase with proper import structures and error-free compilation.
