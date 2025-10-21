import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomePage.vue'),
    meta: { layout: 'HomeLayout', title: 'Home' },
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
