<template>
    <section class="quienes-somos">
        <div class="display2">¿Quiénes somos?</div>
        <div>
            <p> 
                La Escuela Superior de Diseño de Madrid es el <strong>Centro Público</strong>  de la Dirección General de Universidades y 
                <strong>Enseñanzas Artísticas Superiores</strong> de la Comunidad de Madrid que oferta la Enseñanza Superior oficial pública en Diseño en los 
                niveles de Grado y Posgrado del EEES (Espacio Europeo de Educación Superior).
            </p>
            <p>
                La Escuela Superior de Diseño forma parte, junto al Real Conservatorio Superior de Música de Madrid, la Real Escuela 
                Superior de Arte Dramático, La Escuela Superior de Canto, la Escuela Superior de Conservación y Restauración de Bienes 
                Culturales y El Conservatorio Superior de Danza, de la red de centros públicos Superiores de la <strong>Consejería de Ciencia, 
                Universidades e Innovación de la Comunidad de Madrid.</strong> 
            </p>    
        </div>
    </section>
    <CardClikHome></CardClikHome>

</template>
    
<script setup>

import CardClikHome from '@/components/CardClikHome.vue';
 
</script>
    
<style lang="sass" scoped>
.quienes-somos
    @apply flex flex-col gap-9
    @apply pl-32 pt-32 pb-16 w-[90ch]
</style>