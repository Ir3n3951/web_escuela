<template>
    <div class="container-grado-info">
        <div class="info-item">
            <p>Fecha Inicio</p>
            <p class="bold">01-09-2022</p>
        </div>
        <div class="info-item">
            <p>GRADO DE DISEÑO</p>
            <div>Especialidad Gráfico</div>
        </div>
        <div class="info-item">
            <p>TITULACIÓN</p>
            <p class="bold">Oficial</p>
        </div>
        <div class="info-item">
            <p>DURACIÓN</p>
            <p class="bold">4 años</p>
        </div>
        <div class="info-item">
            <p>PLAZO DE INSCRIPCIÓN</p>
            <p class="bold">04-04-2022 al 26-04-2022</p>
        </div>
        <div class="info-item">
            <p>METODOLOGÍA</p>
            <p class="bold">Presencial</p>
        </div>
        <div class="info-item">
            <p>CRÉDITOS</p>
            <p class="bold">240ECTS</p>
        </div>
        <div class="info-item">
            <p>Nº PLAZAS</p>
            <p class="bold">36</p>
        </div>
    </div>
    
</template>
    
<script setup>


</script>
    
<style lang="sass" scoped>
    .container-grado-info
        @apply bg-black-esd grid grid-cols-4 px-60 py-16 gap-10
        .info-item
            @apply border-l-2 border-white text-white px-3 py-2
            p:first-child
                @apply pb-2
            p
                @apply p-0

</style> 