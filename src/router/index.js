import Home from '../views/Home.vue'
import ReservationView from '@/components/ReservationView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory(import.meta.env.BASE_URL)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
      title: 'Marie Polášková - Vaše terapeutka',
      description: 'Marie Polášková - Vaše terapeutka'
    }
  },
  {
    path: '/rezervace',
    name: 'Reservation',
    component: ReservationView,
    meta: {
      layout: 'empty',
      title: 'Marie Polášková - Rezervace termínu',
      description: 'Marie Polášková - Vaše terapeutka'
    }
  }
]
const router = createRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { el: to.hash, top: 75 }
    } else {
      return { left: 0, top: 0 }
    }
  },
  linkActiveClass: 'active',
  history,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || to.name
  next()
})

export { router }
