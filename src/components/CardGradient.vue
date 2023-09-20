<template>
  <div class="card_news_container">
    <div class="flex flex-col card_news_img" :style="`background-image: url(${img})`">
      <div class="card_hover_news">
        <h1 class="title">
          {{ title }}
        </h1>
        <p class="description">
          {{ description }}
        </p>
        <div class="tags flex gap-4">
          <p class="little tag" v-for="(el, i) in tags" :key="i">
            {{ el }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup>
    defineProps({
      title: String,
      description: String,
      img: String,
      tags: Array,
    })
</script>
    
<style lang="sass" scoped>
  .card_news_img
    @apply rounded-xl  w-[448px] h-[616px]
    background-repeat: no-repeat
    .card_hover_news
      transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1)
      @apply flex flex-col w-full h-full p-12 justify-end
      @apply text-white rounded-xl
      background: linear-gradient(0.1deg, rgba(0, 4, 192, 0.6) -2.02%, rgba(0, 4, 192, 0) 101.67%)
      opacity: 0
      .little
        @apply p-2 border rounded-full gap-4
    &:hover .card_hover_news
      opacity: 100


</style>