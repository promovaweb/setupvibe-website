import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import Compress from '@playform/compress';
import robotsTxt from 'astro-robots-txt';
import webmanifest from 'astro-webmanifest';

// https://astro.build/config
export default defineConfig({
  site: 'https://setupvibe.dev',
  base: '/',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    mdx(),
    Compress({
      Exclude: [
        'og'
      ]
    }),
    robotsTxt(),
    webmanifest({
      name: 'SetupVibe',
      short_name: 'SetupVibe',
      description: 'SetupVibe prepara sua máquina com um clique para que o Claude, Copilot e Gemini façam a mágica acontecer. Ambiente dev completo, rápido e sem complicações.',
      icon: 'public/logo.png', // Correct path to the icon
      start_url: '/',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      config: {
        insertFaviconLinks: false, // Layout already has them
        insertManifestLink: true,
      }
    })
  ]
});
