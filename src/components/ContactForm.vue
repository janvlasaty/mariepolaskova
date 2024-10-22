<template>
  <h4 class="line-below">{{ t(`contact-form.title`) }}</h4>
  <div v-if="showFormSentSuccess">
    <div class="text-center">
      <p><i class="bi bi-check-circle-fill text-primary"></i></p>
      <p class="" v-html="t(`contact-form.message-sent-success`)"></p>
    </div>
  </div>
  <div v-else-if="showFormSentError">
    <div class="text-center">
      <p><i class="bi bi-exclamation-circle-fill text-danger"></i></p>
      <p class="" v-html="t(`contact-form.message-sent-error`)"></p>
    </div>
  </div>
  <form v-else ref="form-contact-me">
    <div class="row g-3">
      <div class="col-12">
        <input
          v-model="fullName"
          type="text"
          name="full_name"
          autocomplete="name"
          class="form-control"
          :placeholder="t(`contact-form.fullname`)"
          :aria-label="t(`contact-form.fullname`)"
          required
        />
      </div>
      <!-- <div class="col-12">
        <input
          v-model="givenName"
          type="text"
          name="given-name"
          autocomplete="given-name"
          class="form-control"
          :placeholder="t(`contact-form.name`)"
          :aria-label="t(`contact-form.name`)"
          required
        />
      </div>
      <div class="col-12">
        <input
          v-model="familyName"
          type="text"
          name="family-name"
          autocomplete="family-name"
          class="form-control"
          :placeholder="t(`contact-form.surname`)"
          :aria-label="t(`contact-form.surname`)"
          required
        />
      </div> -->
      <div class="col-12">
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          class="form-control"
          :placeholder="t(`contact-form.email`)"
          :aria-label="t(`contact-form.email`)"
          required
        />
      </div>
      <div class="col-12">
        <textarea
          v-model="message"
          type="text"
          name="message"
          class="form-control"
          :placeholder="t(`contact-form.message`)"
          :aria-label="t(`contact-form.message`)"
        ></textarea>
      </div>
      <!-- <div class="col-12">
        <div class="h-captcha" data-captcha="true" data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"></div>
      </div> -->
      <div class="col-12">
        <input type="checkbox" name="botcheck" class="hidden" style="display: none" />
        <input type="hidden" name="access_key" :value="WEB3FORMS_ACCESS_KEY" />
        <button type="submit" class="btn btn-primary fw-bold text-white w-100">
          <span v-if="!showSending">{{ t(`contact-form.submit`) }} </span>
          <span v-else>{{ t(`contact-form.sending`) }} </span>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { onMounted, ref, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'

// const WEB3FORMS_ACCESS_KEY = '01f6e143-2005-48fb-b8c7-ec87f380b1d8'
// const WEB3FORMS_ACCESS_KEY = '1c55125e-2b1b-42b0-9db8-49fc2052a0d1'
// const WEB3FORMS_ACCESS_KEY = 'cdb4edf0-dd51-4ea7-aa73-a0bfd9510fff'
const WEB3FORMS_ACCESS_KEY = 'd87cd263-365a-4162-9d9d-28d00d6b40bd'

const showFormSentSuccess = ref(false)
const showFormSentError = ref(false)
const showSending = ref(false)

const { t } = useI18n()

const formContactMe = useTemplateRef('form-contact-me')

onMounted(() => {
  formContactMe.value.addEventListener('submit', async (e) => {
    e.preventDefault()
    showSending.value = true
    const formData = new FormData(formContactMe.value)
    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    // const hCaptcha = document.querySelector('textarea[name=h-captcha-response]').value

    // if (!hCaptcha) {
    //   e.preventDefault()
    //   alert('Please fill out captcha field')

    //   return
    // }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: json,
        timeout: 5000
      })
      const result = await response.json()

      if (result.success) {
        showFormSentSuccess.value = true
      } else {
        throw new Error('Error')
      }
    } catch (error) {
      showFormSentError.value = true
    }
    showSending.value = false
  })
})
</script>

<style lang="scss" scoped>
i.bi {
  font-size: 5rem;
}
</style>
