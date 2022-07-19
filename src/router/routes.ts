export default [
    {
        path: '/',
        name: 'Home',
        component: () => import("../views/Home.vue")
    },
    {
        path: '/create-resume/:stage/:resume_id',
        name: 'ResumeBuilder',
        component: () => import('../views/ResumeBuilder.vue')
    }
]