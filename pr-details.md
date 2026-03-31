# 🧹 Code Health: Refactor deeply nested logic and deduplicate validation in ResourcesPage

## 🎯 **What:**
The `ResourcesPage` component contained deeply nested logic specifically around massive inline Tailwind CSS `className` template strings for its input and button elements. It also had duplicated email validation logic spread across the `handleEmailChange` and `handleSubmit` functions, along with a duplicate import of the validation utility. This PR refactors the component to solve these code health issues.

## 💡 **Why:**
By extracting the duplicated validation logic into a reusable `validateEmail` helper and moving the complex `className` template strings into structured helper arrays outside of the component body, we vastly improve the file's readability and maintainability. It breaks down complex, deeply nested logic into smaller, digestible pieces and adheres strictly to DRY principles.

## ✅ **Verification:**
- Confirmed changes via `git diff` to ensure no functional regressions were introduced.
- Verified the code compiles and passes the typechecker using `pnpm lint`.
- Ensured the production build completes successfully via `pnpm build`.
- Ran the test suite via `pnpm test` and ensured `pages/ResourcesPage.test.tsx` passes flawlessly.
- Used Playwright to manually test the application locally and took screenshots to visually verify that the error and success states remain fully intact.

## ✨ **Result:**
A significantly cleaner `ResourcesPage` component structure with zero changes to existing functionality, preventing future bugs and greatly improving future maintainability.