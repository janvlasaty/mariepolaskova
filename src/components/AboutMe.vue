<!-- eslint-disable prettier/prettier -->
<template>
  <section id="#about-me" class="bg-shaded">
    <div class="container-lg py-2">
      <div class="row py-5 gx-5">
        <div class="col-12 col-lg-8">
          <h1 class="line-below">
            {{ t('about-me.title') }}
          </h1>
          <div v-html="t('about-me.paragraph')">
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card">
            <div class="card-body p-4">
              <h5 class="line-below mb-4">{{ t('about-me.subtitle') }}</h5>
              <div v-html="t('about-me.subparagraph')"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
//
</style>
