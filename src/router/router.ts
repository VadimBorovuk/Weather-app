import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/citiesView.vue')
        },
        {
            path: '/city/:id',
            name: 'city detail',
            component: () => import('../views/cityDetail.vue')
        }
    ]
})

export default router
