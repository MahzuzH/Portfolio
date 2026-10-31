import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mhzhzmn.web.id',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()], // untuk Tailwind v4
  },
});
