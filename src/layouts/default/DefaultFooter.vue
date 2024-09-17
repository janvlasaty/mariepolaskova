<template>
  <footer class="footer bg-shaded py-5">
    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-lg-6">
          <h5>{{ t(`name-with-title`) }}</h5>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
