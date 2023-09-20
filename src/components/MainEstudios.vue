<template>

    <section class="section-estudios">
        <div class="left-paso">
            <h1>Da un nuevo paso</h1>
            <div class="container-bts-paso">
                <Button type="bg medium primary">Aplicar al Grado</Button>
                <Button type="bg medium primary">Requisitos de admisión</Button>
                <Button type="bg medium primary">Pedir información</Button>
            </div>
        </div>
        <div class="right-paso">
            <p>
                Dentro del <strong>Título de Grado en en Enseñanzas Artísticas Superiores de Diseño,</strong>  título oficial adaptado al Espacio Europeo de Educación Superior, puedes obtener esta especialización en Diseño Gráfico.
            </p>
            <p>
                El diseñador gráfico es un creador cuya actividad tiene por objeto la utilización del lenguaje gráfico para generar mensajes y comunicar contenidos de naturaleza diversa con diferentes medios y para los distintos canales de comunicación.
            </p>
        </div>
    </section>
    <section class="section-estudios">
        <div class="left-paso">
            <h1>Grado en diseño gráfico</h1>
        </div>
        <div class="right-paso">
            <Drawer></Drawer>
        </div>
    </section>
</template>
    
<script setup>

import Button from './Button.vue';
import Drawer from './Drawer.vue';

</script>
    
<style lang="sass" scoped>
    .section-estudios
        @apply px-32 pt-44 flex gap-20 justify-center
        .left-paso
            @apply flex flex-col w-1/3 
            h1
                @apply pb-7 w-[12ch]
            .container-bts-paso
                @apply flex flex-col gap-5 max-w-[15.25rem]
        .right-paso
            @apply flex flex-col w-[90ch] justify-center
</style>