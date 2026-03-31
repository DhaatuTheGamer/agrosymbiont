* **Title:** 🧹 Extract ErrorSummary to reduce nested logic in JobApplicationForm
* **Description:**
  * 🎯 **What:** Extracted deeply nested error rendering logic from `JobApplicationForm` into a standalone `ErrorSummary` internal component.
  * 💡 **Why:** This improves readability and maintainability by keeping the main form's render method clean and separating the presentation of form errors into its own encapsulated unit. It also applies `React.memo` to optimize performance.
  * ✅ **Verification:** Confirmed there are no UI or behavior changes by running the full test suite (`pnpm test`), which successfully passed. The test suite correctly mounts the error messages using the new sub-component.
  * ✨ **Result:** Improved separation of concerns, shorter main render function, and enhanced code health.