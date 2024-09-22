<template>
  <section id="contact-me" class="bg-shaded">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="line-below">{{ t(`contact-me.title`) }}</h2>
        </div>
        <div class="col-12 col-lg-8">
          <template v-for="(item, index) in tm('contact-me.content')" :key="index">
            <div>
              <h3>{{ item.title }}</h3>
              <p v-html="item.text"></p>
            </div>
          </template>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card">
            <div class="card-body p-4">
              <h4 class="line-below">{{ t(`contact-me.card.title`) }}</h4>
              <div v-html="t(`contact-me.card.text`)"></div>
              <a href="#faq" class="btn btn-primary fw-bold text-white"
                >{{ t(`contact-me.card.button`) }} <i class="bi bi-arrow-down"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()
</script>

<style lang="scss" scoped>
//
</style>
