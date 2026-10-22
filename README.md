# The Family Gallery

Static website for **The Family Gallery** — quiet masterpieces for the living room.

Live repo: https://github.com/ArianaAnderson/the-family-gallery

## Publish with GitHub Pages

1. Open the repo **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Save. The site will appear at
   `https://arianaanderson.github.io/the-family-gallery/`

## What to change before you sell

- In `shop.html`, point the two Buy buttons at Gumroad / Etsy / Shopify.
- Put a real inbox on the site-license link and the About page.
- Do **not** commit the painting ZIP here. Sell files from a shop. This repo is the brochure.

## Local preview

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8000
```

## Canonical URLs and indexing

The production URL is `https://familygallerytv.com/`. Each indexable page
uses its HTTPS directory URL (with a trailing slash) in its static canonical
tag, internal links and sitemap. Legacy `.html` pages are immediate meta-refresh
redirects; keep them out of the sitemap. `shop.html` now points to the homepage,
which contains the product information and Etsy purchase link.

GitHub Pages does not support `_redirects` or `.htaccess`. The shared
`canonical-redirect.js` normalizes explicit `index.html`, HTTP and www aliases
for visitors, preserving queries and anchors. Static canonical tags remain in
HTML for crawlers that do not execute JavaScript. This is a fallback, not an
HTTP 301 replacement. In repository Settings → Pages, enable **Enforce HTTPS**
when the certificate is ready. Server-level HTTP redirects require that setting
or a hosting/CDN configuration; they cannot be enabled by a static file.

After deployment, inspect the affected URL in Search Console and compare
User-declared canonical with Google-selected canonical. Test the live preferred
URL, request indexing, resubmit `https://familygallerytv.com/sitemap.xml`, and
use Validate Fix in the duplicate report where available. Redirected legacy
URLs and alternate URLs are expected to remain excluded; their destinations
are the pages intended for indexing. Google must recrawl before reports change.
