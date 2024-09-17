<template>
  <!-- Hero Section -->
  <section id="header-photo">
    <div class="container-lg h-100">
      <div class="row align-items-end h-100">
        <div class="col mb-5">
          <div>
            <h1>{{ t(`name-with-title`) }}</h1>
            <p class="lead">{{ t(`job-description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script type="module" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
h1 {
  color: $white;
}
p {
  color: $white;
}
section {
  background-image: url('@/assets/cover-photo.jpeg');
  background-size: cover;
  background-position: center 20%;
  height: 75vh;
}
</style>
