<template>
  <section id="media" class="bg-shaded">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col">
          <h1 class="line-below">{{ t(`media.title`) }}</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
