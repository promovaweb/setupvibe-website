import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import Compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://setupvibe.dev',
  base: '/',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    mdx(),
    Compress()
  ]
});
