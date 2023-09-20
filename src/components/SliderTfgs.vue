<template>

  <section class="TFGS">
    <p class="display2">Selección de trabajos finales</p>
    <div class="TfgCards_carroussel flex">
      <div class="slider_content">
        <TfgCards v-for="(el) in arrayCardsTFG" :description="el.description" :title="el.title" :img="el.img" :author="el.author" :type="el.type"> </TfgCards>
      </div>
	</div>
  </section>

</template>

<script setup>
import TfgCards from '@/components/TfgCards.vue';

	const arrayCardsTFG =[
    {
      description: 'TFG MODA',
      title: '2020',
      img:'1card-tfg.jpg',
      author:'César Martínez Arenas',
      type:'big'
    },
    {
      description: 'TFG INTERIORES',
      title: '+Proyecciones',
      img:'2card-tfg.jpg',
      author:'Ródrigo González Sánchez',
      type:'small'
    },
    {
      description: 'TFG MODA',
      title: 'Sentir',
      img:'3card-tfg.jpg',
      author:'Gisela Ruanes',
      type:'mediana'
    },
    {
      description: 'TFG MODA',
      title: 'Jo et desperté',
      img:'4card-tfg.jpg',
      author:'María Llinares Torregrosa',
      type:'biggest'
    },
    {
      description: 'TFG GRÁFICO',
      title: 'Decisions',
      img:'5card-tfg.jpg',
      author:'Angélica Jiménez',
      type:'mediana'
    },
    {
      description: 'TFG PRODUCTO',
      title: 'Ondalínea',
      img:'6card-tfg.jpg',
      author:'Luis Rubio Martínez',
      type:'small'
    },
    {
      description: 'TFG INTERIORES',
      title: 'Mood',
      img:'7card-tfg.jpg',
      author:'Victoria Gómez del Real',
      type:'biggest'
    },
    {
      description: 'TFG GRÁFICO',
      title: 'Por Vallekas',
      img:'8card-tfg.jpg',
      author:'Mercedes Covadonga Campanero',
      type:'mediana'
    },
    {
      description: 'TFG GRÁFICO',
      title: 'WaveType.',
      img:'9card-tfg.jpg',
      author:'Teresa Lucía Sempere González',
      type:'small'
    },
  ]
  
</script> 

<style lang="sass" scoped>
.TFGS
  @apply pl-32 gap-9 flex flex-col mb-20
  .TfgCards_carroussel
    @apply flex gap-4 overflow-hidden 
    .slider_content
      @apply flex gap-4 cursor-grab
      overflow-x: auto
</style>