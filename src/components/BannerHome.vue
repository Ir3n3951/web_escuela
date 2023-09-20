<template>
        <div class="info-banner">
            <h1 class="display1">Visualiza, crea, estudia en la ESD</h1>
            <div class="container-banner-bts">
                <Button type="bg big primary">Inscríbete</Button>
                <Button type="bg big secondary">Visítanos</Button>
            </div>
        </div>
        
</template>
    
<script setup>
import Button from './Button.vue';

</script>
    
<style lang="sass" scoped>
    .info-banner
        background-image: url(./banner-home.jpg)
        background-size: cover
        background-repeat: no-repeat
        @apply w-full h-[787px]
        @apply pl-32 flex flex-col justify-end pb-20 pt-24
        h1
            @apply pb-20 w-[13ch]
        .container-banner-bts
            @apply flex gap-6
</style>