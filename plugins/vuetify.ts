// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		theme: {
			defaultTheme: 'custom',
			themes: {
				custom: {
					dark: false,
					colors: {
						primary: '#240000',
					},
				},
			},
		},
	})
	app.vueApp.use(vuetify)
})
