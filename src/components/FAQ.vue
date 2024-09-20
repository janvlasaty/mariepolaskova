<template>
  <section id="faq">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="line-below">{{ t('faq.title') }}</h2>
        </div>
        <div class="col-12 col-lg-6 mb-5">
          <div id="accordionFAQ" class="">
            <div v-for="(item, index) in tm('faq.questions')" :key="index" class="accordion-item">
              <h3 class="d-flex justify-content-between align-items-center pointer-cursor" @click="toggleCollapse(index)">
                {{ item.question }}
                <i v-if="index !== showAnswerIndex" class="bi bi-plus-circle ms-auto"></i>
              </h3>
              <div
                :class="['accordion-collapse', 'collapse', { show: index === showAnswerIndex }]"
                data-bs-parent="#accordionFAQ"
              >
                <div class="accordion-body">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <div class="card p-3">
            <div class="card-body">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import ContactForm from '@/components/ContactForm.vue'

const { t, tm } = useI18n()

defineComponent({
  components: {
    ContactForm
  }
})

const showAnswerIndex = ref(0)

const toggleCollapse = (index) => {
  showAnswerIndex.value = index
}
</script>

<style lang="scss" scoped>
.accordion-item {
  border: 0;
}
.accordion-item h5 {
  cursor: pointer;
}
.accordion-button {
  background-color: white !important;
}
</style>
