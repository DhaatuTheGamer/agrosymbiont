Title: 🧹 [code health: simplify BlogNewsletterForm logic]

Description:
🎯 **What:** The deeply nested JSX code around rendering the validation error messages on line 78 in `components/BlogNewsletterForm.tsx` was extracted into a separate, reusable `EmailErrorMessage` component. Additionally, duplicate email validation logic present in both `handleEmailChange` and `handleSubmit` was abstracted into a reusable `validateEmailInput` function. Extraneous/duplicate imports of `isValidEmail` and `EMAIL_REGEX` from `utils/validation.ts` were removed across several files.

💡 **Why:** By breaking the logic out into isolated components and helper functions, the primary `BlogNewsletterForm` render method and event handlers become significantly flatter, easier to follow, and more maintainable. Consolidating the validation rules guarantees that both the `onChange` and `onSubmit` workflows behave identically without risking regressions, and removing duplicate imports improves overall code hygiene.

✅ **Verification:** Verified that `pnpm test components/BlogNewsletterForm.test.tsx` passed, indicating no regressions in the validation logic. Visual verification was performed via Playwright against the local build (`pnpm preview`) to confirm the error messages continue to render properly. A clean pass of `pnpm lint` confirmed no lingering unused or duplicate imports.

✨ **Result:** A cleaner component structure with reduced duplicate logic, better separation of concerns, and an improved overall DX.
