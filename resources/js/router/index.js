import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../components/App'),
        children: [
            {
                path: '/dashboard',
                component: () => import('../components/pages/Dashboard'),
                name: 'Dashboard'
            }
        ]
    }
]

export default new VueRouter({
    mode: 'history',
    routes
})