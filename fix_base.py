import os

with open('pages/BlogPostPage.tsx', 'r') as f:
    content = f.read()

target = '  const relatedPosts = useMemo(() => {'
func = """  // URL Sanitization specifically designed to fix the markdown parsing issue
  const sanitizeUrl = (url?: string) => {
    if (!url) return '';

    // Remove whitespace and control characters that could be used for bypasses
    const sanitizedUrl = url.replace(/[\\x00-\\x1F\\x7F-\\x9F\\s]/g, '');

    // Allow relative URLs (starting with /, #, ?)
    if (sanitizedUrl.startsWith('/') || sanitizedUrl.startsWith('#') || sanitizedUrl.startsWith('?')) {
      return sanitizedUrl;
    }

    try {
      // Attempt to parse as an absolute URL
      // We use 'http://localhost' as a base for relative-looking URLs that might still have protocols
      const parsedUrl = new URL(sanitizedUrl, 'http://localhost');
      const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:'];

      if (allowedProtocols.includes(parsedUrl.protocol.toLowerCase())) {
        return sanitizedUrl;
      }

      // If it was parsed as http because of the base, check if it originally had any protocol
      if (parsedUrl.protocol === 'http:' && !sanitizedUrl.toLowerCase().startsWith('http:')) {
          if (!sanitizedUrl.includes(':')) {
              return sanitizedUrl;
          }
      }
    } catch (e) {
      // If URL parsing fails, it might be a relative path without a protocol
      if (!sanitizedUrl.includes(':')) {
        return sanitizedUrl;
      }
    }

    return 'about:blank';
  };

"""

if target in content and "URL Sanitization specifically" not in content:
    new_content = content.replace(target, func + target)
    new_content = new_content.replace("import { sanitizeUrl } from '../utils/validation';\n", "")
    with open('pages/BlogPostPage.tsx', 'w') as f:
        f.write(new_content)
        print("Updated pages/BlogPostPage.tsx")
