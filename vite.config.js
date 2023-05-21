import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
//import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import transformerDirective from '@unocss/transformer-directives';
import presetWebFonts from '@unocss/preset-web-fonts';

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
			//extractors: [extractorSvelte],
			presets:[
				presetUno(),
				presetIcons(),
				presetWebFonts({
					provider: 'google',
					fonts: {
						sans: 'Ubuntu',
					}
				})
			],
			transformers: [
				transformerDirective(),
			  ],
		})
	]
};

export default config;
