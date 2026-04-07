## 2024-05-17 - Add keyboard focus states to map tooltips
**Learning:** Map components like \`react-simple-maps\` that dynamically spawn DOM elements (like tooltips or popovers via React state) often do not automatically inherit global focus-visible utility classes. Specifically, close buttons on tooltips need explicit \`focus-visible:ring-*\` definitions because standard accessibility frameworks might miss elements deeply nested within dynamically generated SVG/Canvas map contexts.
**Action:** Always manually verify and attach explicit focus and outline tailwind utility classes (e.g., \`focus-visible:ring-cerulean-blue\`) to all interactive elements spawned by third-party map libraries.

## 2024-05-18 - Add keyboard focus states to FAQ accordions
**Learning:** When using `focus:outline-none` on interactive elements like custom accordion buttons to remove default browser styling, standard accessibility frameworks might miss the element and no focus indicator will be shown.
**Action:** Always manually verify and attach explicit focus and outline tailwind utility classes (e.g., `focus-visible:ring-cerulean-blue`) to any element where the default outline is removed.

## 2024-05-18 - Language Selector Focus Styling
**Learning:** When styling native `<select>` elements that function visually like icon buttons (e.g., language pickers), applying focus styles directly to the select element often results in cramped or unstyled focus rings that do not match the app's design system.
**Action:** Wrap the select and its associated icon/label in a container, use `focus-within:ring-2` on the wrapper, and remove the outline from the select itself to create clean, consistent focus states for keyboard users.
