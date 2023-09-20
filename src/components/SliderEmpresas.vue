<template>

  <section class="empresas">
    <h1>Empresas colaboradoras</h1>
    <div class="empresasCards_carroussel flex">
      <div class="slider_content">
        <CardGradientEmpresas v-for="(el) in arrayCardsEmpresas"  :title="el.title" :description="el.description" :img="el.img"> </CardGradientEmpresas>
      </div>
	</div>
  </section>

</template>

<script setup>
import CardGradientEmpresas from '@/components/CardGradientEmpresas.vue';

	const arrayCardsEmpresas =[
    {
      title: 'EDICIONES CONDÉ NAST, S.A.',
      description: 'Paseo de la Castellana, 9-11 - 2º - 28046 Madrid',
      img:'1card-empresa.jpg',
    },
    {
      title: 'Dimad (Fundación Diseño Madrid)',
      description: 'Paseo de la Castellana, 9-11 - 2º - 28046 Madrid',
      img:'5card-empresa.jpg',
    },
    {
      title: 'FEFREEDA MEDIA, S.L',
      description: 'Paseo de la Castellana, 9-11 - 2º - 28046 Madrid',
      img:'2card-empresa.jpg',
    },
    {
      title: 'ANTENAS LASSER, S.L.',
      description: 'c/ Miguel Fleta, 9 - 28037 Madrid',
      img:'6card-empresa.jpg',
    },
    {
      title: 'FETEN ESTUDIO',
      description: 'c/ Cardenal Silicio, 17 - Entreplanta D - 28002 Madrid',
      img:'3card-empresa.jpg',
    },
    {
      title: 'CREPES AND TEXAS',
      description: 'Paseo de la Castellana, 9-11 - 2º - 28046 Madrid',
      img:'7card-empresa.jpg', 
    },
    {
      title: 'BEST RELATIONS, S.L.',
      description: 'c/ Gran Vía, 57 - 2º B - 28013 Madrid',
      img:'4card-empresa.jpg',
    },
    {
      title: 'MATCH BALL MARKETING, S.L.',
      description: 'c/ Santa Teresa de Jesús, 5 - 45600 Talavera de la Reina (Toledo)',
      img:'8card-empresa.jpg',
    },
  ]
  
</script> 

<style lang="sass" scoped>
.empresas
  @apply pl-32 gap-9 flex flex-col mb-20
  .empresasCards_carroussel
    @apply flex overflow-hidden 
    .slider_content
      @apply flex gap-9 cursor-grab
      overflow-x: auto
</style>