### Title
🧹 Code Health: Simplify TeamCarousel rendering and inline styles

### Description

🎯 **What:**
- Extracted the static `teamMembers` array outside of the `TeamCarousel` component to prevent it from being recreated on every render.
- Removed the inline `<style>` tag that injected responsive CSS variables (`--items-per-screen`) via media queries.
- Replaced the inline style logic with idiomatic Tailwind CSS arbitrary responsive properties (`[--items-per-screen:1] md:[--items-per-screen:2] lg:[--items-per-screen:3]`).
- Cleaned up duplicate and unused imports (`isValidEmail`, `EMAIL_REGEX`) across multiple forms in the codebase to resolve lingering linting errors.

💡 **Why:**
The previous implementation used deeply nested, hardcoded inline `<style>` blocks to manage responsive states within the JSX. This cluttered the component, made the transform logic harder to read, and forced the `<style>` block to re-render. Relying on Tailwind's arbitrary variants adheres to the codebase's utility-first principles and significantly improves code maintainability. Extracting the `teamMembers` array also provides a minor rendering optimization.

✅ **Verification:**
Verified by running the full test suite (`pnpm test`), which passed after updating the `TeamCarousel.test.tsx` file to match the newly simplified CSS `calc()` string. Verified type checking with `pnpm run lint` to ensure no regression was introduced during the import cleanups.

✨ **Result:**
A much cleaner `TeamCarousel` component with zero inline `<style>` injections, improved rendering efficiency, and strict adherence to modern React and Tailwind CSS best practices.