<template>
  <div class="app">
      <FirstNavBar></FirstNavBar>
      <div class="nav-see-container">
        <SecondNavBar></SecondNavBar>
        
        <div class="not-found-page flex">
          <div class="page_left">
            <div class="not-found-content">
              <h2>La página no existe :( </h2>
              <div class="not-found-tittle">
                <img src='404-text.svg' alt="404">
              </div>
              <p>Mientras tanto puedes ponerte a dibujar un rato o volver al inicio</p>
            </div>
          </div>
          <div class="page_right flex">
            <Toolbar></Toolbar>
          </div>
        </div>
      </div>
  <Footer></Footer>
</div>
</template>

<script setup>
import FirstNavBar from '@/components/FirstNavBar.vue';
import SecondNavBar from '@/components/SecondNavBar.vue';
import Footer from '@/components/Footer.vue';
import Toolbar from '@/components/Toolbar.vue';
</script>

<style lang="sass" scoped>
.not-found-page
  @apply flex justify-center items-center px-32 py-32 

  .not-found-content
    @apply mx-40 justify-items-center
    text-align: center

    .not-found-tittle
      @apply my-4

</style>