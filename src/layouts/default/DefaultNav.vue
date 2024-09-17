<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">{{ t(`name-with-title`) }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" :class="['collapse', 'navbar-collapse', { show: navbarExpanded }]">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about-me">{{ t(`menu.about-me`) }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#education">{{ t(`menu.education`) }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact-me">{{ t(`menu.contact-me`) }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#references">{{ t(`menu.references`) }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#media">{{ t(`menu.media`) }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#faw">{{ t(`menu.faq`) }}</a>
          </li>
          <!-- dropdown -->
          <li class="nav-item">
            <a v-if="locale == 'cs'" class="nav-link" href="#" @click="changeLanguage('en')">English</a>
            <a v-else class="nav-link" href="#" @click="changeLanguage('cs')">Česky</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const navbarExpanded = ref(false)

const changeLanguage = (_locale) => {
  locale.value = _locale
  localStorage.setItem('locale', _locale)
}

onMounted(() => {
  window.addEventListener('resize', handleWindowSizeChange)
  handleWindowSizeChange()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleWindowSizeChange)
})

const toggleNavbar = () => {
  navbarExpanded.value = !navbarExpanded.value
}

const handleWindowSizeChange = () => {
  if (window.innerWidth > 992) {
    collapseNavbar()
  }
}
const collapseNavbar = () => {
  navbarExpanded.value = false
}
</script>

<style lang="scss" scoped>
.bg-light {
  height: 75px;
  background-color: $white !important;
}
.navbar-brand {
  font-family: $font-header;
  color: $primary;
  font-weight: bold;
}
.nav-link {
  /* uppercase  */
  text-transform: uppercase;
  color: $primary;
}
</style>
