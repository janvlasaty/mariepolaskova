<template>
  <section id="references">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col">
          <h2 class="line-below">{{ t(`references.title`) }}</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid overflow-visible pb-5">
      <div class="row flex-nowrap overflow-scroll py-2">
        <div
          v-for="(item, index) in tm('references.list')"
          :key="index"
          :class="['col-12', 'col-lg-5', { 'offset-1': index === 0 }]"
        >
          <div class="card">
            <div class="card-body">
              <h5>{{ item.name }}</h5>
              <p>
                <i v-html="isTextExpanded(index, item.text) ? item.text : shortText(item.text)"></i>
              </p>
              <p>
                <a v-if="isLong(item.text)" class="btn btn-light" @click="expandText(index)">
                  <span v-if="!isTextExpanded(index, item.text)"
                    >{{ t(`references.show`) }} <i class="bi bi-arrow-down"></i
                  ></span>
                  <span v-else>{{ t(`references.hide`) }} <i class="bi bi-arrow-up"></i></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, tm } = useI18n()

const textExpansion = ref(tm('references.list'))
const textLength = 400

function isLong(text) {
  return text.length > textLength
}

function shortText(text) {
  return text.slice(0, textLength) + '...'
}

function isTextExpanded(index, text) {
  if (!isLong(text)) {
    return true
  }
  if (textExpansion.value[index].visible === undefined) {
    textExpansion.value[index].visible = false
  }

  return textExpansion.value[index].visible
}

function expandText(index) {
  textExpansion.value[index].visible = !textExpansion.value[index].visible
}
</script>
