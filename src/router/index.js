import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "@/router/routes";
import VueRouteMiddleware from 'vue-route-middleware'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history',
    base: process.env.BASE_URL,
})

router.beforeEach(VueRouteMiddleware());
export default router
