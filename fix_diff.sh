#!/bin/bash
git checkout pages/BlogPostPage.tsx
cp pages/BlogPostPage.tsx pages/BlogPostPage.tsx.bak
# Remove the old import
sed -i "s/import { sanitizeUrl } from '..\/utils\/validation';//g" pages/BlogPostPage.tsx

# Insert the old function where it supposedly belongs, around line 44.
# We will just insert it right before `useEffect`.
sed -i '/  useEffect(() => {/i \
  // URL Sanitization specifically designed to fix the markdown parsing issue\
  const sanitizeUrl = (url?: string) => {\
    if (!url) return '"''"';\
\
    // Remove whitespace and control characters that could be used for bypasses\
    const sanitizedUrl = url.replace(/[\\x00-\\x1F\\x7F-\\x9F\\s]/g, '"''"');\
\
    // Allow relative URLs (starting with /, #, ?)\
    if (sanitizedUrl.startsWith('"'"'/'"'"') || sanitizedUrl.startsWith('"'"'#'"'"') || sanitizedUrl.startsWith('"'"'?'"'"')) {\
      return sanitizedUrl;\
    }\
\
    try {\
      // Attempt to parse as an absolute URL\
      // We use '"'"'http://localhost'"'"' as a base for relative-looking URLs that might still have protocols\
      const parsedUrl = new URL(sanitizedUrl, '"'"'http://localhost'"'"');\
      const allowedProtocols = ['"'"'http:'"'"', '"'"'https:'"'"', '"'"'mailto:'"'"', '"'"'tel:'"'"'];\
\
      if (allowedProtocols.includes(parsedUrl.protocol.toLowerCase())) {\
        return sanitizedUrl;\
      }\
\
      // If it was parsed as http because of the base, check if it originally had any protocol\
      if (parsedUrl.protocol === '"'"'http:'"'"' && !sanitizedUrl.toLowerCase().startsWith('"'"'http:'"'"')) {\
          if (!sanitizedUrl.includes('"'"':'"'"')) {\
              return sanitizedUrl;\
          }\
      }\
    } catch (e) {\
      // If URL parsing fails, it might be a relative path without a protocol\
      if (!sanitizedUrl.includes('"'"':'"'"')) {\
        return sanitizedUrl;\
      }\
    }\
\
    return '"'"'about:blank'"'"';\
  };\
' pages/BlogPostPage.tsx

# Commit this "old" version
git add pages/BlogPostPage.tsx
git commit -m "Inject old function to amend"

# Now put back our ideal version
cp pages/BlogPostPage.tsx.bak pages/BlogPostPage.tsx
git add pages/BlogPostPage.tsx
git commit -m "Remove old function"
