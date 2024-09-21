<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import '@/scss/app.scss'

const { t } = useI18n()
const route = useRoute()

const layout = computed(() => {
  return `layout-${route.meta.layout || 'default'}`
})

onMounted(() => {
  const metaDescription = document.createElement('meta')

  metaDescription.name = 'description'
  metaDescription.content = t(`description`)
  document.head.appendChild(metaDescription)
})
</script>
