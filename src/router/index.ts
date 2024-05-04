import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/views/master/dashboard.vue'
import ActividadUno from '@/views/ActividadUno.vue'
import ActividadDos from '@/views/ActividadDos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'ActividadUno',
          path: '/ActividadUno',
          component:ActividadUno
        },
        {
          name: 'ActividadDos',
          path: '/ActividadDos',
          component:ActividadDos
        }
      ]
    },
  ]
})

export default router
