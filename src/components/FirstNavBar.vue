<template>
    <div class="nav-superior">
      <div class="nav-bar-left">
        <img src="logo-bandera-com.svg" alt="Logo bandera" class="logo-small">
        
        <a href="#" class="button-escuela">
            <img src="logo-bocadillo-blanco.svg" alt="Logo escuela" class="logo-small">
            <router-link to="/">Escuela Superior de diseño de Madrid</router-link>
        </a>
      </div>

      <div class="nav-bar-right">
        <a href="#" class="button-big"> 
            <img src="icon-escuela.svg" alt="icon mi esd" class="links-img">
            Mi ESD
        </a>

        <a href="#" class="button-big"> 
            <img src="icon-uder.svg" alt="Icon user" class="links-img">
            Futuro Alumno
        </a>

        <a href="#" class="button-big"> ES
            <img src="icon-down.svg" alt="Icon user" class="links-img">
        </a>

      </div>
    </div>
</template>
    
<script setup>
    
</script>
    
<style lang="sass" scoped>
    .nav-superior
        @apply flex py-4 px-32 justify-between items-center
        @apply bg-black-esd
        .nav-bar-left
            @apply flex gap-4
            .button-escuela
                @apply flex items-center gap-4
                @apply text-white font-notoSemiBold font-semibold
                @apply text-2xl
                @apply transition duration-200 ease-in
                &:hover
                    @apply text-blue-esd-200
                .logo-small
                    @apply w-6 h-auto
        .nav-bar-right
            @apply flex gap-8
            .button-big
                @apply flex gap-2 text-white items-center
                @apply font-notoBold text-base font-bold tracking-wide
                @apply transition duration-200 ease-in
                &:hover
                    @apply text-blue-esd-200
                .links-img
                    @apply w-4 h-auto
                    &:hover
                        @apply text-blue-esd-200

</style>