Title: 🧹 Extract FormErrorSummary to resolve deeply nested error UI logic

**Description:**

🎯 **What:**
Identified a deeply nested and duplicated inline `div[role="alert"]` used for rendering dynamic form validation errors in both `ContactForm.tsx` and `JobApplicationForm.tsx`. Extracted this into a new, reusable `<FormErrorSummary />` component and updated the call sites to use it. Also added standard test coverage for the new component.

💡 **Why:**
The previous inline logic bloated the forms, making the JSX harder to read and maintain. By extracting the rendering logic of the errors into a standardized functional component, we flatten the component tree of the consuming forms. This adheres to DRY principles, centralizes styling (including the newly unified `AlertCircle` icon from `lucide-react`), and makes testing the error rendering paths significantly easier and isolated from complex form state.

✅ **Verification:**
- Successfully passed all existing test suites (`ContactForm.test.tsx`, `JobApplicationForm.test.tsx`).
- Created and passed a new test suite specifically for `FormErrorSummary.tsx`.
- Visually verified via Playwright screenshot that the error alerts render correctly in the browser when attempting to submit blank forms on both the `/contact` and `/careers` pages.
- Verified successful production build via `pnpm build`.

✨ **Result:**
Cleaner, more maintainable code within the complex form components. Reduced line counts in `ContactForm` and `JobApplicationForm` while standardizing the UI experience for form errors across the application.