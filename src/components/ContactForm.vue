<template>
  <h4 class="line-below">{{ t(`contact-form.title`) }}</h4>
  <div v-if="showFormSentSuccess">
    <div class="alert alert-success" role="alert">
      {{ t(`contact-form.message-sent-success`) }}
    </div>
  </div>
  <div v-else-if="showFormSentError">
    <div class="alert alert-danger" role="alert">
      {{ t(`contact-form.message-sent-error`) }}
    </div>
  </div>
  <form v-else @submit.prevent="submitForm">
    <div class="row g-3">
      <div class="col-12">
        <input
          v-model="givenName"
          type="text"
          name="given-name"
          autocomplete="given-name"
          class="form-control"
          :placeholder="t(`contact-form.name`)"
          :aria-label="t(`contact-form.name`)"
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
        />
      </div>
      <div class="col-12">
        <input
          v-model="email"
          type="email"
          name="email"
          autocomplete="email"
          class="form-control"
          :placeholder="t(`contact-form.email`)"
          :aria-label="t(`contact-form.email`)"
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
      <div class="col-12">
        <div
          class="h-captcha"
          data-captcha="true"
          data-lang="cs"
          data-theme="light"
          data-render="explicit"
          data-size="normal"
          data-sitekey="255e412a-11e4-4dca-8986-a17027664d40"
        ></div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary text-white w-100">{{ t(`contact-form.submit`) }}</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const WEB3FORMS_ACCESS_KEY = '01f6e143-2005-48fb-b8c7-ec87f380b1d8'
const givenName = ref('')
const familyName = ref('')
const email = ref('')
const message = ref('')
const showFormSentSuccess = ref(false)
const showFormSentError = ref(false)

const { t } = useI18n()

const submitForm = async () => {
  const hCaptchaResponse = document.querySelector('[name="h-captcha-response"]').value

  if (!hCaptchaResponse) {
    alert('Please complete the hCaptcha challenge')

    return
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: givenName.value + ' ' + familyName.value,
      email: email.value,
      message: message.value,
      'h-captcha-response': hCaptchaResponse
    })
  })
  const result = await response.json()

  if (result.success) {
    showFormSentSuccess.value = true
  } else {
    showFormSentError.value = true
  }
}
</script>

<style lang="scss" scoped>
//
</style>
