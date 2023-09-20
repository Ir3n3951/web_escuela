<template>
  <div class="flex card_container">
    <div class="img_card" :class="type" :style="`background-image: url(${img})`">
      <div class="card_hover">
        <p class="profe little">{{ profe }}</p>
        <h2 class="title medium">{{ title }}</h2>
        <p class="cargo">{{ cargo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    profe: String,
    title: String,
    cargo: String,
    img: String,
  });
</script>

<style lang="sass" scoped>
  .img_card
    @apply rounded-xl w-[344px] h-[344px] 
    background-repeat: no-repeat
    .card_hover
      transition: 400ms cubic-bezier(0.25, 0.8, 0.25, 1)
      @apply flex flex-col w-full h-full p-12 justify-end
      @apply text-white rounded-xl
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 100%)
      opacity: 0
      p
        @apply pb-1
    &:hover .card_hover
      opacity: 100
  
</style>
