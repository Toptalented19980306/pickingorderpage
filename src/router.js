import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "./components/Login.vue"
import HomeComponent from "./components/Home.vue"
import TicketComponent from "./components/Ticket.vue"

Vue.use(VueRouter)

// export default new VueRouter({
//     routes: [
//         {
//             path: '/',
//             redirect: {
//                 name: "login"
//             }
//         },
//         {
//             path: "/login",
//             name: "login",
//             component: LoginComponent
//         },
//         {
//             path: "/home",
//             name: "home",
//             component: HomeComponent
//         }
//     ]
// })

let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/ticket",
            name: "ticket",
            component: TicketComponent,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

// router.beforeEach((to, from, next) => {
//         if (localStorage.getItem('jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             next()
//         }
// })

export default router