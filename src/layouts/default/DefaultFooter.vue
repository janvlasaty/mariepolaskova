<template>
  <footer class="footer bg-shaded py-5">
    <div class="container-lg">
      <div class="row">
        <div class="col-12 col-lg-6 text-muted">
          <h5>{{ t(`name-with-title`) }}</h5>
          <ul class="list-unstyled">
            <li>{{ t(`contact.phone`) }}</li>
            <li>
              <a :href="'mailto:' + t(`contact.email`)">{{ t(`contact.email`) }}</a>
            </li>
            <li>{{ t(`contact.address`) }}</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
