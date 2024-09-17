<template>
  <div class="container-fluid g-0">
    <HeaderPhoto />
    <AboutMe />
    <CurriculumVitae />
    <ContactMe />
    <ReferencesCarousel />
    <MediaShowtime />
    <FAQ />
  </div>
</template>

<script setup>
import AboutMe from '@/components/AboutMe.vue'
import ContactMe from '@/components/ContactMe.vue'
import CurriculumVitae from '@/components/CurriculumVitae.vue'
import FAQ from '@/components/FAQ.vue'
import HeaderPhoto from '@/components/HeaderPhoto.vue'
import MediaShowtime from '@/components/MediaShowtime.vue'
import ReferencesCarousel from '@/components/ReferencesCarousel.vue'
</script>
