<template>

  <section class="Profes">
    <h1>Equipo Docente</h1>
    <div class="Cards_carroussel flex">
      <div class="slider_content">
        <CardsProfes v-for="(el) in arrayCardsTFG" :profe="el.profe" :title="el.title" :img="el.img" :cargo="el.cargo"> </CardsProfes>
      </div>
	</div>
  </section>

</template>

<script setup>
import CardsProfes from '@/components/CardsProfes.vue';

	const arrayCardsTFG =[
    {
      profe: 'MEDIOS',
      title: 'Carlos Eugenio Aparicio',
      img:'1card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
    {
      profe: 'MEDIOS',
      title: 'Ángela cabrera',
      img:'2card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
    {
      profe: 'MEDIOS',
      title: 'Paula Arranz',
      img:'3card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
    {
      profe: 'MEDIOS',
      title: 'Ana Escalera',
      img:'4card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
    {
      profe: 'MEDIOS',
      title: 'Gonzalo Cordero',
      img:'5card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
    {
      profe: 'MEDIOS',
      title: 'Elena Benito',
      img:'6card-profes.jpg',
      cargo:'Profesor de Artes Plásticas y Diseño',
    },
  ]

// const gallery = document.querySelector('.gallery');
//   gallery.addEventListener('wheel', event => {
//     event.preventDefault(); // Evita el desplazamiento predeterminado de la página

//     const scrollAmount = event.deltaY; // Cantidad de desplazamiento del evento de la rueda del ratón

//     gallery.scrollLeft += scrollAmount; // Aplica el desplazamiento horizontal a la galería
// });
</script> 

<style lang="sass" scoped>
.Profes
  @apply pl-32 gap-9 flex flex-col my-20 
  .Cards_carroussel
    @apply flex gap-4 overflow-hidden 
    .slider_content
      @apply flex gap-32 cursor-grab
      overflow-x: auto
</style>