<template>
  <section id="curriculum-vitae">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-6 pe-5">
          <div class="container-lg">
            <div class="row">
              <div class="col">
                <h1 class="line-below">{{ t(`curriculum-vitae.title`) }}</h1>
                <ul>
                  <li v-for="(item, index) in tm('curriculum-vitae.list')" :key="index" v-html="item"></li>
                </ul>
              </div>
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
section {
  position: relative;
}
section::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  background-image: url('@/assets/cover-photo-stand.jpeg');
  background-repeat: no-repeat;
  background-position: 40% 40%;
  background-size: cover;
}
</style>
