// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://axtonct.github.io',
  integrations: [mdx(), sitemap()],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['Georgia', 'serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
      {
          provider: fontProviders.google(),
          name: 'Bricolage Grotesque',
          cssVariable: '--font-display',
          weights: [400, 500, 600, 700, 800],
          styles: ['normal'],
          subsets: ['latin'],
          fallbacks: ['system-ui', '-apple-system', 'sans-serif'],
      },
      {
          provider: fontProviders.google(),
          name: 'JetBrains Mono',
          cssVariable: '--font-mono',
          weights: [400, 500],
          styles: ['normal'],
          subsets: ['latin'],
          fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});