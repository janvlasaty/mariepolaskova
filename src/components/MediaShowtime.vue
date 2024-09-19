<template>
  <section id="media" class="bg-shaded">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="line-below">{{ t(`media.title`) }}</h2>
        </div>
        <template v-for="(item, index) in tm('media.content')" :key="index">
          <div class="col-12 col-lg-4">
            <div class="card mb-3">
              <div v-if="item.photo !== ''" class="card-header">
                <img :src="item.image" :alt="item.title" class="img-fluid" />
              </div>
              <div class="card-body">
                <h3>{{ item.medium }}</h3>
                <p>{{ item.title }}</p>
                <a :href="item.link" class="link-external" target="_blank">{{ item.linkShort }}</a>
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
</script>
