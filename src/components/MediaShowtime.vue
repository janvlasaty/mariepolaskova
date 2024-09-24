<template>
  <section id="media" class="bg-shaded overflow-hidden">
    <div class="container-lg pt-5">
      <div class="row">
        <div class="col-12">
          <h2 class="line-below">{{ t(`media.title`) }}</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid overflow-visible pt-3">
      <div class="row flex-nowrap overflow-x-scroll py-2 pb-5 ps-0 ps-lg-5">
        <template v-for="(item, index) in tm('media.content')" :key="index">
          <div :class="['col-10', 'col-lg-4', { 'offset-0': index === 0 }]">
            <div class="card mb-3">
              <div v-if="item.photo !== ''" class="card-header p-0">
                <img :src="getImageUrl(item.photo)" :alt="item.title" class="img-fluid" />
              </div>
              <div class="card-body">
                <h3>{{ item.medium }}</h3>
                <p>{{ item.title }}</p>
                <a :href="item.link" class="btn btn-light link-external" target="_blank">{{ item.linkShort }}</a>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

function getImageUrl(path) {
  // return `./assets/${path}`
  return new URL(`/src/assets/${path}`, import.meta.url).href
}
</script>
