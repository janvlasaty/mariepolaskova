import Home from '../views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'default',
      title: 'Titulka'
    }
  }
]
const router = createRouter({
  mode: 'history',
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
  document.title = to.meta.title || to.name || 'ProjectName'
  next()
})

export { router }
