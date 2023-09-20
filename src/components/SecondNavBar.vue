<template>
    <div class="container_fixed_nav">
        <div class="second-nav-container">
            <Button type="bg menu capital"><router-link to="/estudios">Estudios</router-link></Button>
            <Button type="bg menu capital">Admisión</Button>
            <Button type="bg menu capital">Escuela</Button>
            <Button type="bg menu capital">Académico</Button>
            <Button type="bg menu capital">Secretaria</Button>
            <Button type="bg menu capital">Internacional</Button>
            <Button type="bg menu capital">Blog</Button>
            <Button type="bg menu capital">Contacto</Button>
            <a href="#">
                <img src="icon-search.svg" alt="icon search" class="icon-search">
            </a>
        </div>
    </div>
</template>
    
<script setup>
    import Button from './Button.vue';
</script>
    
<style lang="sass" scoped>

.container_fixed_nav
    @apply fixed w-full
    .second-nav-container
        @apply top-10 mt-[-20px] 
        z-index: 1000
        @apply bg-black flex items-center justify-between
        @apply bg-opacity-10 backdrop-blur-xl rounded-full p-[10px]
        @apply gap-3 w-[1200px]
        @apply absolute left-1/2 translate-x-[-50%]
        .icon-search
            @apply pr-6


</style>