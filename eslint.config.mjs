import withNuxt from './.nuxt/eslint.config.mjs';
import withVue from 'eslint-plugin-vue';

const vars = {
	indent: 'tab',
};

export default withNuxt([
	...withVue.configs['flat/strongly-recommended'],
	{
		rules: {
			'no-console': 'warn',
			'no-trailing-spaces': 'error',

			'indent': ['error', vars.indent],
			'quotes': ['error', 'single'],
			'semi': ['error', 'always'],

			'vue/html-indent': ['error', vars.indent],
			'vue/max-attributes-per-line': ['error', { singleline: 4, multiline: 4 }],
			'vue/first-attribute-linebreak': ['error', { singleline: 'beside', multiline: 'ignore' }]
		},
	},
]);