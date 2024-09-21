import App from './App.vue'
import Default from '@/layouts/default/Default.vue'
import Empty from '@/layouts/empty/Empty.vue'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { router } from './router'

import cs from '@/locales/cs.json'
import en from '@/locales/en.json'

import 'bootstrap-icons/font/bootstrap-icons.css'

const locale = localStorage.getItem('locale') || 'cs'

localStorage.setItem('locale', locale)

const i18n = createI18n({
  // something vue-i18n options here ...
  locale,
  messages: {
    cs,
    en
  }
})

async function init() {
  const app = createApp(App)

  app.component('LayoutDefault', Default)
  app.component('LayoutEmpty', Empty)
  app.use(createPinia())
  app.use(i18n)
  app.use(router)

  app.mount('#app')
}

init()
