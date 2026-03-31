Title: "🧹 [Refactor]: Extract complex conditional branches into distinct UI components in ServicesPage"

Description:
- 🎯 **What:** Extracted the deeply nested and complex skeleton loading UI and main content UI from `ServicesPage` into isolated `ServiceLoadingGrid` and `ServiceGrid` functional components.
- 💡 **Why:** Reduces component complexity, improves code readability, and allows independent scaling of loading state versus loaded state templates.
- ✅ **Verification:** Passed full local test suite via `pnpm test`, formatting checks, and local linting checks.
- ✨ **Result:** Simplified `ServicesPage` conditional rendering down to a clean `{isLoading ? <ServiceLoadingGrid /> : <ServiceGrid t={t} />}`.
