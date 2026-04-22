// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://distritochamorro.com',
	trailingSlash: 'ignore',
	build: {
		format: 'directory',
	},
});
