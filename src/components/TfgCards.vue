<template>
  <div class="flex card_container">
    <div class="img_card" :class="type" :style="`background-image: url(${img})`">
      <div class="card_hover">
        <p class="description little">{{ description }}</p>
        <h2 class="title medium">{{ title }}</h2>
        <p class="author">{{ author }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    description: String,
    title: String,
    author: String,
    img: String,
    type: String,
  });
</script>

<style lang="sass" scoped>
  .img_card
    @apply rounded-xl
    background-repeat: no-repeat
    .card_hover
      transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1)
      @apply flex flex-col w-full h-full p-12 justify-end
      @apply text-white rounded-xl
      background: linear-gradient(0.1deg, rgba(0, 4, 192, 0.6) -2.02%, rgba(0, 4, 192, 0) 101.67%)
      opacity: 0
      p
        @apply pb-1
    &:hover .card_hover
      opacity: 100
  
  .biggest
    @apply w-[344px] h-[672px] 

  .big
    @apply w-[344px] h-[544px]

  .mediana
    @apply w-[344px] h-[444px] 

  .small
    @apply w-[344px] h-[344px] 
</style>
