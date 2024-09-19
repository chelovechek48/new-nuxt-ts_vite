import type { RouterConfig } from '@nuxt/schema';

export default {
	routes: (_routes) => [
		{
			name: 'home',
			path: '/',
			component: () => import('@pages/HomePage.vue')
		}
	],
} satisfies RouterConfig;