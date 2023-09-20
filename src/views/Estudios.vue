
<template>
  <div class="app">
    <FirstNavBar></FirstNavBar>
    <SecondNavBar></SecondNavBar>
    <BannerEstudio></BannerEstudio>
    <GradoInfo></GradoInfo>
    <MainEstudios></MainEstudios>
    <SliderTfgsEstudios></SliderTfgsEstudios>
    <SliderEmpresas></SliderEmpresas>
    <SliderProfes></SliderProfes>
    <Footer></Footer>
  </div>
</template>

<script setup>
  import FirstNavBar from '@/components/FirstNavBar.vue';
  import SecondNavBar from '@/components/SecondNavBar.vue';
  import BannerEstudio from '@/components/BannerEstudio.vue';
  import GradoInfo from '@/components/GradoInfo.vue';
  import MainEstudios from '@/components/MainEstudios.vue';
  import SliderTfgsEstudios from '@/components/SliderTfgsEstudios.vue';
  import SliderEmpresas from '@/components/SliderEmpresas.vue';
  import SliderProfes from '@/components/SliderProfes.vue';
  import Footer from '@/components/Footer.vue';
</script>
  

<style lang="sass" scoped>
@import '@/assets/nohemi.css'

</style>
  