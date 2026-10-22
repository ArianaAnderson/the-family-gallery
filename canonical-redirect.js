// GitHub Pages serves /index.html aliases without a server redirect.
// Keep the static canonical tag authoritative and normalize only known URL aliases.
(() => {
  const link = document.querySelector('link[rel="canonical"]');
  if (!link) return;
  const canonical = new URL(link.href);
  const current = new URL(window.location.href);
  const path = current.pathname.replace(/index\.html$/, '');
  const knownHost = ['familygallerytv.com', 'www.familygallerytv.com'].includes(current.hostname);
  if (!knownHost || path !== canonical.pathname) return;
  if (current.origin === canonical.origin && current.pathname === canonical.pathname) return;
  // Preserve ad attribution, other query parameters and in-page anchors.
  canonical.search = current.search;
  canonical.hash = current.hash;
  window.location.replace(canonical.href);
})();
