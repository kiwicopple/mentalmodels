import { createRouter, createWebHistory } from 'vue-router'
import Models from '../components/Models.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      props: true,
      name: 'Models',
      component: Models
    }
  ]
})

export default router