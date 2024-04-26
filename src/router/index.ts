import HomeView from '@/views/HomeView.vue'
import {
	createRouter,
	createWebHistory,
} from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '',
			name: 'home',
			component: HomeView,
		},
	],
})
