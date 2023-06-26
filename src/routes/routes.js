const routes = [
    {
        path: '/',
        redirect: '/services'
    },
    {
        path: '/services',
        component: () => import('~/components/services/Services.vue')
    },
    {
        path: '/configurations',
        component: () => import('~/components/configurations/Configurations.vue')
    }
]
export default routes;