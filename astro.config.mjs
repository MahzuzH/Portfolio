import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mahzuzh.github.io',
  base: '/Portfolio', // hapus baris ini jika repo-nya bernama USERNAME.github.io
  vite: {
    plugins: [tailwindcss()], // untuk Tailwind v4
  },
});
