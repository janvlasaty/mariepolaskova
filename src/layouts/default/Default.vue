<template>
  <default-nav />
  <article>
    <slot />
  </article>
  <default-footer />
</template>

<script setup>
import DefaultFooter from './DefaultFooter.vue'
import DefaultNav from './DefaultNav.vue'
</script>

<style lang="scss">
/* Sticky footer */
html {
  position: relative;
  min-height: 100%;
}
</style>
