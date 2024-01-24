import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	app: {
		head: {
			titleTemplate: 'The Coffee - %s',
		},
	},
	devtools: { enabled: true },
	build: {
		transpile: ['vuetify'],
	},
	css: ['~/assets/styles/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: [
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(vuetify({ autoImport: true }))
			})
		},
		//...
	],
	vite: {
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		server: {
			hmr: {
				// overlay: false,
			},
		},
	},
})
