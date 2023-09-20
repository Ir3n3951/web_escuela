<template>
    <div class="bg" :class="type">
        <a href="#">
            <slot /> 
        </a>
    </div>
</template>
    
<script setup>

defineProps({
    type: String,
})

</script>
    
<style lang="sass" scoped>

    .bg
        @apply flex gap-4 items-center justify-center rounded-full
        @apply transition duration-200 ease-in

    // Tamaño botones
    .big
        @apply font-notoBold font-bold text-base
        @apply px-16 py-4

    .medium
        @apply font-notoBold font-bold text-sm
        @apply px-10 py-4
    
    .small
        @apply font-notoBold font-bold text-xs
        @apply px-7 py-3

    // tipos de botones
    .primary
        @apply bg-blue-esd-primary text-white rounded-full
        &:hover
            @apply bg-blue-esd-200
    .secondary
        @apply bg-gradient-to-r from-blue-esd-200 bg-opacity-10 text-white
        @apply border border-white 
        &:hover
            @apply bg-blue-esd-200 border-blue-esd-200
    .terciary
        @apply text-white
        &:hover 
            @apply text-blue-esd-primary
    
    .menu
        @apply font-notoBold font-bold text-sm
        @apply p-4 text-white tracking-wide
        &:hover 
            @apply text-blue-esd-primary
    
    .capital
        @apply uppercase
    .news_button
        @apply px-9 py-9 text-white bg-blue-esd-primary w-[96px] h-[96px]
        &:hover
            @apply bg-blue-esd-200
    .footer
        @apply text-white
        &:hover
            @apply text-blue-esd-200



</style>
    