import path from 'path';

const getPath = (localPath: string) => path.resolve(__dirname, localPath);

export default defineNuxtConfig({
	compatibilityDate: '2024-09-09',
	devServer: { port: 8080 },
	devtools: { enabled: false },

	modules: ['@nuxt/eslint'],
	components: { dirs: ['~/src/components'] },
	app: {
		baseURL: '/new-project',
		head: {
			title: 'новый проект',
			charset: 'UTF-8',
			viewport: 'width=device-width, initial-scale=1.0',
			htmlAttrs: { lang: 'ru' },
		},
	},

	css: [
		'@styles/normalize.scss',
		'@styles/fonts.scss',
	],
	postcss: { plugins: {
		'postcss-preset-env': {},
		'postcss-combine-media-query': {},
	}},

	alias: {
		'@pages': getPath('./src/pages'),
		'@styles': getPath('./src/styles'),
		'@images': getPath('./src/assets/images'),
	},
});
