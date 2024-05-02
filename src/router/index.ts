import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/master/dashboard.vue'
import firstOption from '../views/firstOption.vue'
import secondOption from '../views/secondOption.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Dashboard',
      path: '/',
      component: dashboard,
      children: [
         {
          name: 'firstOption',
          path: '/firstOption',
          component:firstOption
        },
        {
          name: 'secondOption',
          path: '/secondOption',
          component:secondOption
        }
      ]
    },
  ]
})

export default router
