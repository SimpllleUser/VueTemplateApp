import authrizedUser from "./middleware/AuthrizedUser.middleware";
import userSigned from "./middleware/UserSigned.middleware"
const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            layout: "default",
            middleware: [authrizedUser]
        },
        component: () =>
            import ('../pages/Home.vue'),
    },
    // {
    //     path: '/calendar',
    //     name: 'Calendar',
    //     meta: {layout: "default"},
    //     component: () => import('../pages/Calendar.vue'),
    // },
    {
        path: '/about',
        name: 'About',
        meta: { layout: "default" },
        component: () =>
            import ('../pages/About.vue'),
    },
    // {
    //     path: '/map',
    //     name: 'Map',
    //     meta: {layout: "default"},
    //     component: () => import('../pages/Map.vue'),
    // }, {
    //     path: '/table',
    //     name: 'Table',
    //     meta: {layout: "default"},
    //     component: () => import('../pages/MainTabel.vue'),
    // },

    {
        path: '*',
        name: '404',
        component: () =>
            import ('../pages/404.vue'),
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        meta: { middleware: [userSigned] },
        component: () =>
            import ('../pages/SignUp.vue'),
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        meta: { middleware: [userSigned] },
        component: () =>
            import ('../pages/SignIn.vue'),
    },
]

export default routes