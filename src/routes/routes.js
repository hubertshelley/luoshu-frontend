const routes = [
    {
        path: '/',
        redirect: '/services'
    }, {
        path: '/services',
        component: () => import('~/components/services/Services.vue'),
        meta: {
            title: '服务', icon: 'mdi-view-dashboard'
        }
    }, {
        path: '/configurations',
        component: () => import('~/components/configurations/Configurations.vue'),
        meta: {
            title: '配置', icon: 'mdi-view-dashboard'
        }
    }]
export default routes;