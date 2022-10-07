import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import transformerDirective from '@unocss/transformer-directives';

/** @type {import('vite').UserConfig} */
const config = {
	server:{
		fs:{
			allow:['..'],
		}
	},
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte],
			presets:[
				presetUno(),
				presetIcons(),
			],
			transformers: [
				transformerDirective(),
			  ],
		})
	]
};

export default config;
