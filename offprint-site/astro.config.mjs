import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/data/site.js';

// The site URL is read from src/data/site.js rather than set here, so that the
// canonical tags, the sitemap, robots.txt, and the off-site link check in
// scripts/external-links.mjs can never disagree about where this site lives.
export default defineConfig({
  site: site.url,
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
  integrations: [sitemap()],
});
