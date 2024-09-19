<template>
  <section id="faq">
    <div class="container-lg py-5">
      <div class="row">
        <div class="col-12">
          <h2 class="line-below">{{ t('faq.title') }}</h2>
        </div>
        <div class="col-12 col-lg-6 mb-5">
          <div id="accordionFAQ" class="accordion">
            <div v-for="(item, index) in tm('faq.questions')" :key="index" class="accordion-item">
              <h3 class="accordion-header d-flex justify-content-between align-items-center" @click="toggleCollapse(index)">
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
              <h4 class="line-below">{{ t(`faq.form.title`) }}</h4>
              <form>
                <div class="row g-3">
                  <div class="col-12">
                    <input
                      type="text"
                      name="given-name"
                      autocomplete="given-name"
                      class="form-control"
                      :placeholder="t(`faq.form.name`)"
                      :aria-label="t(`faq.form.name`)"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      name="family-name"
                      autocomplete="family-name"
                      class="form-control"
                      :placeholder="t(`faq.form.surname`)"
                      :aria-label="t(`faq.form.surname`)"
                    />
                  </div>
                  <div class="col-12">
                    <input
                      type="text"
                      name="email"
                      autocomplete="email"
                      class="form-control"
                      :placeholder="t(`faq.form.email`)"
                      :aria-label="t(`faq.form.email`)"
                    />
                  </div>
                  <div class="col-12">
                    <textarea
                      type="text"
                      name="message"
                      class="form-control"
                      :placeholder="t(`faq.form.message`)"
                      :aria-label="t(`faq.form.message`)"
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <button type="submit" class="btn btn-primary text-white w-100">{{ t(`faq.form.submit`) }}</button>
                  </div>
                </div>
              </form>
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
