import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/card',
        name: 'card',
        component: () => import('@/pages/Card.vue'),
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
