import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mhzhzmn.web.id',
  vite: {
    plugins: [tailwindcss()], // untuk Tailwind v4
  },
});
