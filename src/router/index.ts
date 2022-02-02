import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login'},
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/cadastrar', name: 'Cadastrar', component: () => import('../views/Cadastrar.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
