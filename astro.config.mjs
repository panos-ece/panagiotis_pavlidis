import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://panos-ece.github.io',
  base: '/panagiotis_pavlidis',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://panos-ece.github.io/panagiotis_pavlidis',
    }),
  ],
});
