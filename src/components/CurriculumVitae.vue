<template>
  <section id="curriculum-vitae">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12 col-lg-6 pe-5">
          <div class="container-lg">
            <div class="row">
              <div class="col">
                <h2 class="line-below">{{ t(`curriculum-vitae.title`) }}</h2>
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
  background-position: 40% 35%;
  background-size: cover;
}
@media (max-width: 992px) {
  section::before {
    background-image: none;
  }
}
</style>
