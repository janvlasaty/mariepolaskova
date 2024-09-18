<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-3">
    <div class="container-lg">
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
        <i class="bi bi-list"></i>
      </button>
      <div id="navbarNav" :class="['collapse', 'navbar-collapse', { show: navbarExpanded }]">
        <ul class="navbar-nav ms-auto">
          <li v-for="(item, index) in tm(`menu`)" :key="index" class="nav-item">
            <a class="nav-link" :href="'#' + item.href">{{ item.text }}</a>
          </li>
          <!-- language switch -->
          <li class="nav-item">
            <a v-if="locale == 'cs'" class="nav-link" @click="changeLanguage('en')">English</a>
            <a v-else class="nav-link" @click="changeLanguage('cs')">Česky</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t, tm } = useI18n()

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
  font-weight: 500;
  margin-right: 0.3rem;
}
.nav-item {
  cursor: pointer;
}
.nav-item:hover {
  background-color: $gray-100;
}
button.navbar-toggler {
  border: 0;
  color: $primary;
  font-size: 2rem;
}
</style>
