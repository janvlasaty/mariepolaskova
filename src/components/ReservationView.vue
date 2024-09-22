<template>
  <div class="reenio-iframe" data-size="auto"></div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')

  script.src = 'https://reenio.cz/cs/GE4DIMRU/widget-iframe.js'
  script.async = true
  script.defer = true

  document.head.appendChild(script)
})
</script>
