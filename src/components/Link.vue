<template>
    <a class="bg" :class="type" href="#">
        <slot /> 
    </a>
</template>
    
<script setup>

defineProps({
    type: String,
})

</script>
    
<style lang="sass" scoped>

    .bg
        @apply transition duration-200 ease-in

    // Tamaño liks
    .big
        @apply font-notoBold font-bold text-base

    .medium
        @apply font-notoBold font-bold text-sm
    
    .small
        @apply font-notoBold font-bold text-xs

    // tipos de links
    .dark_mode
        @apply text-white
        &:hover
            @apply text-blue-esd-200
    .bright_mode
        @apply text-black 
        &::hover
            @apply text-blue-esd-200

</style>
    