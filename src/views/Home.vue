<template>
  <div class="container-fluid">
    <hello-world msg="Welcome to Vue.js 3 Vite starter template" />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<script setup>
// https://github.com/vuejs/eslint-plugin-vue/issues/1577
// eslint-disable-next-line import/first
import HelloWorld from '@/components/HelloWorld.vue'
</script>
