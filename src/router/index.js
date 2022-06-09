import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/views/Main.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/Contacts.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/Article.vue')
    }
  ]
})

export default router
