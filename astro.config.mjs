import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eldarhasanov.org',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
