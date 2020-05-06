export default [{
        path: '/',
        component: () =>
            import ('@/views/Home.vue'),
    },
    {
        path: '/about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/argu/:name',
        component: () =>
            import ('@/views/argu.vue')
    }
]