<template>
  <section id="references">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col">
          <h1 class="line-below">{{ t(`references.title`) }}</h1>
          <div class="row">
            <div v-for="(item, index) in tm('references.list')" :key="index" class="col-12 col-lg-5">
              <div class="card">
                <div class="card-body">
                  <h5>{{ item.name }}</h5>
                  <p><i v-html="item.text"></i></p>
                </div>
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
