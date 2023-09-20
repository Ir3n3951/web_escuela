<template>

	<section class="news">
	<p class="display2 text-white">Noticias</p>
	<div class="News_cards_slider flex">
		<div class="slider_content" ref="slider">
			<CardGradient v-for="(el,i) in arrayCards" :key="i" :title="el.title" :description="el.description" :img="el.img" :tags="el.tags"> </CardGradient>
		</div>
		<div class="button_mas">
    		<Button class="news_button"  @click="scrollRight">MÁS</Button>
  		</div>
  		<div class="button_back">
    		<Button class="news_button" @click="scrollLeft">BACK</Button>
  		</div>
	</div>
	</section>


</template>

<script setup>
import { ref } from 'vue';
import CardGradient from '@/components/CardGradient.vue';
import Button from '@/components/Button.vue';

const arrayCards =[
    {
      title: 'Taller hilo, papel y color/',
      description: 'En este taller jugaremos con técnicas como el collage y el bordado sobre papel para aproximarnos al color. A partir de recortes y puntadas, trataremos de expresar las cualidades, emociones y sugerencias que nos trasmiten los colores, o la ausencia de estos.',
      img:'1card-news.jpg',
      tags:[
        'Agenda',
        'ESD',
        'Eventos',
      ],
    },
    {
      title: 'Premiados en el 2º premios sulion -ESD Madrid./',
      description: 'Compartimos el fallo de los premios y menciones de la segunda edición del concurso colaborativo con Sulion , en el que estudiantes de Proyectos, Ideación, de 2º de Diseño de Producto diseñan luminarias solares portátiles de exterior para la firma.',
      img:'2card-news.jpg',
      tags:[
        'Producto',
        'Premios',
      ],
    },
    {
      title: 'Talleres abiertos y CLC 22/23/',
      description: 'Comienzan los talleres abiertos y talleres para créditos por otras actividades. Puedes consultar más información en el siguiente enlace.',
      img:'3card-news.jpg',
      tags:[
        'Académico',
      ],
    },
    {
      title: 'Charla con Pepe Murciego./',
      description: 'El próximo lunes 13 de Marzo tendremos la charla titulada PÁGINAS EN CONSTRUCCIÓN y LA MÁS BELLA. Revistas ensambladas, experimentales y raras.',
      img:'4card-news.jpg',
      tags:[
        'Evento',
        'Gráfico',
      ],
    },
    {
      title: 'Charlas sistemas constructivos Knauf/',
      description: 'El próximo 4 de mayo, jueves, tendrá lugar una charla y demostración a cargo de la empresa Knauf, en el aula 0.7, en la que nos mostrarán sus sistemas de tabiquería y falsos techos con placas de yeso laminado. ',
      img:'5card-news.jpg',
      tags: [
        'Eventos',
        'Agenda',
        'Interiores',
      ],
    },
    {
      title: 'Fashion Fest/',
      description: 'El próximo 13 de abril tendremos en la Escuela Superior de Diseño unaJornada especial dedicada al Diseño de Moda. Desde la Coordinación de esta especialidad hemos preparado una fiesta en la que tendrán lugar conferencias, exposiciones, mesa redonda de diseñadores emergentes y actuación final de Ella Muore.',
      img:'6card-news.jpg',
      tags: [
        'ESD',
        'Agenda',
        'Eventos',
        'Moda',
      ],
    },
  ]

const sliderRef = ref(null);
let scrollPosition = 0;

const scrollRight = () => {
  const slider = sliderRef.value;
  const scrollWidth = slider.scrollWidth;
  const clientWidth = slider.clientWidth;
  const maxScrollPosition = scrollWidth - clientWidth;
  const scrollIncrement = 100; // Ajusta el valor según tu preferencia
  
  scrollPosition = Math.min(scrollPosition + scrollIncrement, maxScrollPosition);
  
  slider.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
};

const scrollLeft = () => {
  const slider = sliderRef.value;
  const scrollIncrement = 100; // Ajusta el valor según tu preferencia
  
  scrollPosition = Math.max(scrollPosition - scrollIncrement, 0);
  
  slider.scrollTo({
    left: scrollPosition,
    behavior: 'smooth',
  });
};

</script> 

<style lang="sass" scoped>
.news
	@apply gap-9 flex flex-col py-32 pl-32 bg-black-esd
	.News_cards_slider
		@apply flex relative overflow-hidden 
		.slider_content
			@apply flex gap-9 cursor-grab
			overflow-x: auto
.button_mas
	@apply absolute z-10 top-20 right-20
.button_back
	@apply absolute z-10 bottom-20 left-20	



</style>
