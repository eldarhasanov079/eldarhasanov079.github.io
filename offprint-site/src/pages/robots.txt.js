import { site } from '../data/site.js';

// Generated rather than parked in public/ so the sitemap URL follows site.url.
// A robots.txt with someone else's domain in it is the classic thing to forget
// when you fork a template, and it is invisible until a crawler trips over it.
//
// The filename is `sitemap-index.xml`, not `sitemap.xml` — that is what
// @astrojs/sitemap actually emits.
export function GET() {
  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', site.url).href}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
}
