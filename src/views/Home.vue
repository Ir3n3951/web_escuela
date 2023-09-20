<!-- No sabíamos hacer el scroll de news pero lo hemos intentado <3 -->
<template>
  <div class="app">
    <FirstNavBar></FirstNavBar>
    <SecondNavBar></SecondNavBar>
    <BannerHome></BannerHome>
    <QuienesSomos></QuienesSomos>
    <SliderTfgs></SliderTfgs>
    <SliderNews></SliderNews>
    <Newsletter></Newsletter> 
    <Footer></Footer>
  
  </div>
</template>

<script setup>
  import FirstNavBar from '@/components/FirstNavBar.vue';
  import SecondNavBar from '@/components/SecondNavBar.vue';
  import SliderNews from '@/components/SliderNews.vue';
  import SliderTfgs from '@/components/SliderTfgs.vue';
  import Footer from '@/components/Footer.vue';
  import BannerHome from '@/components/BannerHome.vue';
  import QuienesSomos from '@/components/QuienesSomos.vue';
  import Newsletter from '@/components/Newsletter.vue';



</script>

<style lang="sass" scoped>
@import '@/assets/nohemi.css'

</style>
  