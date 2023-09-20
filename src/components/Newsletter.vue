<template>
  <div class="newsletter-container">
    <div class="newsletter-text">
      <div class="display2 newsletter-tittle">Suscríbete a nuestra newsletter</div>
      <div>
        <p>Subscríbete a nuestra newsletter y estáte al <br>tanto de todo lo que sucede en la escuela.</p>
        <Input></Input>
      </div>
    </div>

    <div class="newsletter-panel-img">
      <div class="newsletter-first-img">
        <img src="first-newsletter.jpg" alt="imagen newsletter 1" class=" newsletter-img-rounded">
      </div>
      <div class="newsletter-second-third-img">
        <img src="second-newsletter.jpg" alt="imagen newsletter 2">
        <img src="third-newsletter.jpg" alt="imagen newsletter 3" class="third-newsletter-size">
      </div>
      <div class="newsletter-fourth-img">
        <img src="fourth-newsletter.jpg" alt="imagen newsletter 4" class="newsletter-img-rounded">
      </div>
    </div>
  </div>
</template>
  
<script setup>
import Input from '@/components/Input.vue';
</script>
  
<style lang="sass" scoped>
.newsletter-container
  @apply flex gap-32 bg-black-esd text-white
  @apply pl-32 py-32 w-full justify-between
  
  .newsletter-text
    @apply flex flex-col items-start flex-wrap max-w-[33%] gap-9

    .newsletter-tittle
      @apply w-[10ch]
    div
      @apply flex flex-col gap-3
      p
        @apply max-w-[40ch] p-0
    
    
  .newsletter-panel-img
    @apply flex gap-14 justify-end
    .newsletter-first-img
      @apply flex justify-items-end align-middle items-end
      .newsletter-img-rounded
        @apply rounded-full object-cover h-4/5
    
    .newsletter-second-third-img
      @apply flex flex-col gap-24 items-center
      .third-newsletter-size
         max-width: 14em

    .newsletter-fourth-img
      @apply flex items-center
      .newsletter-img-rounded
        @apply rounded-full object-cover h-32
      
</style>