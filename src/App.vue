<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import '@/scss/app.scss'

const { t } = useI18n()

const layout = computed(() => {
  return `layout-${import.meta.layout || 'default'}`
})

onMounted(() => {
  const metaDescription = document.createElement('meta')

  metaDescription.name = 'description'
  metaDescription.content = t(`description`)
  document.head.appendChild(metaDescription)
})
</script>
