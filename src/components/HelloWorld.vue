<template>
  <!-- Hero Section -->
  <section class="hero-section text-center">
    <div class="container">
      <h1>Marie Polášková</h1>
      <p>Vaše psychoterapeutická pomoc</p>
      <a href="#" class="btn btn-custom">Začít nezávaznou konzultaci</a>
    </div>
  </section>

  <!-- Terapie Section -->
  <section class="py-5 bg-light">
    <div class="container text-center">
      <h2>Terapie s jasnými cíly</h2>
      <p>Mým cílem je pomoci vám najít rovnováhu a zvládat těžkosti prostřednictvím kognitivně-behaviorální terapie.</p>
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="card card-custom p-4">
            <h4>Mgr. Marie Polášková</h4>
            <ul>
              <li>Osobní terapie s pomocí KBT</li>
              <li>Podpora zvládání životních těžkostí</li>
              <li>Speciální terapie pro deprese a úzkosti</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problems Section -->
  <section class="py-5">
    <div class="container">
      <h2 class="text-center">Spolu vyřešíme vaše problémy. I ty skryté.</h2>
      <div class="row text-center mt-4">
        <div class="col-md-4">
          <div class="card card-custom p-4">
            <h5>Poruchy nálady</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-custom p-4">
            <h5>Úzkosti a fobie</h5>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-custom p-4">
            <h5>Stres</h5>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section class="py-5 bg-light">
    <div class="container">
      <h2 class="text-center">Projekty, kterým se věnuji</h2>
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="project-media">
            <img src="project1.jpg" alt="Projekt NÚDZ - Bez obav" />
            <h5 class="mt-2">Projekt NÚDZ - Bez obav</h5>
          </div>
        </div>
        <div class="col-md-6">
          <div class="project-media">
            <img src="podcast.jpg" alt="Podcast Ve vztahu" />
            <h5 class="mt-2">Podcast Ve vztahu</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<script setup>
defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
h1.msg {
  color: $gray-900;
}
</style>
