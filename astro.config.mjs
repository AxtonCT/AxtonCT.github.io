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
		/* Body prose — kept for readability */
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{ src: ['./src/assets/fonts/atkinson-regular.woff'], weight: 400, style: 'normal', display: 'swap' },
					{ src: ['./src/assets/fonts/atkinson-bold.woff'], weight: 700, style: 'normal', display: 'swap' },
				],
			},
		},

		/* Display / UI — big type, headings, nav */
		{
			provider: fontProviders.google(),
			name: 'Bricolage Grotesque',
			cssVariable: '--font-display',
			fallbacks: ['system-ui', 'sans-serif'],
			weights: [300, 400, 500, 600, 700],
			styles: ['normal'],
		},

		/* Mono — code, metadata, status bar */
		{
			provider: fontProviders.google(),
			name: 'JetBrains Mono',
			cssVariable: '--font-mono',
			fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			weights: [400, 500, 600],
			styles: ['normal'],
		},
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
