import { defineMDSveXConfig as defineConfig } from 'mdsvex';
//import slugPlugin from 'rehype-slug';
//import autolinkHeadingsPlugin from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
