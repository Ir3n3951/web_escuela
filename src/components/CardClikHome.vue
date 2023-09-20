<template>
	<div class="card_click_container">
		<div class="card_click_1 flex flex-col">
			<div class="card_click_1_gradient w-full h-full">
				<div class="card_title">
					<h1>Objetivos</h1>
					<div class="arrow_forward">
						<img src="icon-arrow-horizontal.svg">
					</div>
				</div>
			</div>
			<div class="card_click_hover_1">
				<h2>Objetivos</h2>
				<p>La Escuela Superior de Diseño de Madrid, como escuela pública, entiende el diseño como un servicio a la sociedad dirigido a promover la mejora de la calidad de vida y la igualdad entre las personas y como un factor central para la innovación y la humanización de las tecnologías y el intercambio cultural y económico.
				   <br> En este sentido la e/s/d se marca como objetivo investigar y dar respuesta a las demandas sociales formando a profesionales del diseño con capacidad para investigar, proponer y optimizar nuevos productos y servicios, afrontando los múltiples aspectos que se precisan resolver (científicos, humanísticos, tecnológicos y artísticos), con capacidad para anticiparse a las tendencias y analizar situaciones y necesidades sociales emergentes, con la intención de aportar las soluciones más innovadoras.
				   <br> Entendemos el diseño como una profesión de amplio espectro relacionada con otras muchas profesiones, que participan en la configuración de los nuevos escenarios de un mundo complejo y cambiante.</p>
			</div>
			<div class="card_image">
				<img src='1card-click.jpg' alt="">
			</div>
		</div>

		<div class="cards_click_container_2 flex ">
			<div class="card_click_2 flex flex-col">
				<div class="card_click_2_gradient w-full h-full">
					<div class="card_title">
						<h1>Estudio y sede</h1>
						<div class="arrow_forward">
							<img src="icon-arrow-horizontal.svg">
						</div>
					</div>
				</div>
				<div class="card_click_hover_2">
					<h2>Estudio y sede</h2>
					<p>En el campus de la e/s/d se imparten las cuatro especialidades de Grado en Diseño (interiores, gráfico, moda y producto) y dos Másteres oficiales en Diseño Interactivo y Diseño de Espacios Comerciales.
					<br> El edificio, formado por dos cuerpos principales y un anexo, es una construcción abierta y luminosa, con talleres y aulas polivalentes. En la parte superior del edificio se ubica una construcción singular que acoge un vivero de empresas de diseño.
					<br>Nuestras instalaciones se encuentran en continua transformación para adaptarse a las necesidades que se derivan de los planteamientos de identidad, volumen y objetivos propios de una escuela atenta a los cambios de una sociedad en constante movimiento.
					<br>En muchas de estas transformaciones, nuestra comunidad educativa participa activamente a través de proyectos desarrollados en las distintas asignaturas y en talleres creados específicamente para ello.
					<br>Como parte de las actividades formativas, junto con 25 centros de diferentes países que han participado en nuestros talleres de "La Escuela crece" con los que hemos levantado en el jardín una construcción singular en un proyecto de colaboración con el estudio Recetas Urbanas que ha sido llevado a la Bienal de arquitectura de Venecia como ejemplo de arquitectura efímera colaborativa. En estas dos nuevas aulas se imparten los másteres y asignaturas de grado.</p>
				</div>
				<div class="card_image">
					<img src='2card-click.jpg' alt="">
				</div>
			</div>

			<div class="card_click_3 flex flex-col">
				<div class="card_click_3_gradient w-full h-full">
					<div class="card_title">
						<h1>Comunidad</h1>
						<div class="arrow_forward">
							<img src="icon-arrow-horizontal.svg">
						</div>
					</div>
				</div>
				<div class="card_click_hover_3">
					<h2>Estudio y sede</h2>
					<p> La Escuela Superior de Diseño de Madrid cuenta con un amplio claustro de profesores especializados en diferentes disciplinas y con una amplia experiencia como docentes, entre los que se incluyen investigadores y profesionales del diseño, lo que enriquece la formación teórica y práctica del estudiante.
						<br> En la ESD estudian actualmente cerca de 800 estudiantes distribuidos entre las cuatro especialidades de diseño, nivel grado, que se imparten en el centro (diseño de interiores, diseño gráfico, diseño de moda y diseño de producto) y en dos másteres oficiales de Enseñanzas Artísticas Superiores en Diseño Interactivo y Diseño de Espacios Comerciales.
						<br> Las especiales características de estas enseñanzas determinan una ratio estudiante/profesor de 20/1 como media en las diferentes asignaturas. Este número tan restringido, necesario para el correcto desarrollo de las actividades académicas, asegura un contacto permanente y directo con el profesor, dando como resultado un sistema de aprendizaje personalizado gracias a una acción tutorial acorde con los enfoques pedagógicos propuestos en la declaración de Bolonia..</p>
				</div>
				<div class="card_image3">
					<img src='3card-click.jpg' alt="">
				</div>

			</div>
		</div>
	
	</div>
</template>

<script setup>
</script>
 
<style lang="sass" scoped>

*
	//@apply border border-red-500

//Estilos del card superior
.card_click_container
	@apply flex flex-col justify-center items-center gap-6 w-full h-auto mb-40
	@apply px-32
	
.card_click_hover_1
	transition: 100ms cubic-bezier(0.25, 0.8, 0.25, 1)
	@apply text-white absolute z-30 rounded-tl-[16px] rounded-bl-[16px]
	@apply w-[585px] h-[622px] p-10
	opacity:0
	&:hover 
		opacity: 100
		backdrop-filter: blur(50px)
		@apply cursor-pointer
	
.card_click_1_gradient
	background: linear-gradient(89.66deg, #0030E4 -0.99%, rgba(0, 48, 228, 0) 48.11%)
	@apply flex flex-row items-start p-0 gap-6 w-full h-auto  p-10 relative z-20
	@apply w-[1196px] h-[622px] gap-24 p-10
	border-radius: 16px
		
.card_image
	@apply absolute bg-cover z-10 object-cover
	img
		border-radius: 16px 
		@apply w-full h-auto 

//Estilos del card inferior izquierdo

.cards_click_container_2 
	@apply flex justify-center items-center gap-6 w-full h-auto px-32
.card_click_2_gradient
	background: linear-gradient(89.66deg, #0030E4 -0.99%, rgba(0, 48, 228, 0) 48.11%)
	@apply flex flex-row items-start p-0 gap-6 w-full h-auto  p-10 relative z-20
	@apply w-[514px] h-[769px] p-10
	border-radius: 16px
.card_click_hover_2
	transition: 100ms cubic-bezier(0.25, 0.8, 0.25, 1)
	@apply text-white absolute z-30
	border-radius: 16px
	@apply w-[514px] h-[769px] p-10
	opacity:0
	&:hover 
		opacity: 100
		backdrop-filter: blur(50px)
		@apply cursor-pointer


//Estilos del card inferior derecho

.card_click_3
	@apply w-[652px] h-[769px]

.card_image3
	@apply bg-cover z-10 object-cover
	.card_image
	@apply absolute bg-cover z-10 object-cover
	img
		border-radius: 16px 


.card_click_3_gradient
	background: linear-gradient(89.66deg, #0030E4 -0.99%, rgba(0, 48, 228, 0) 48.11%)
	@apply flex flex-row items-start p-0 gap-6 w-full h-auto  p-10 relative z-20
	@apply w-[652px] h-[769px] p-10
	border-radius: 16px
.card_click_hover_3
	transition: 100ms cubic-bezier(0.25, 0.8, 0.25, 1)
	@apply text-white absolute z-30
	border-radius: 16px
	@apply w-[652px] h-[769px] p-10
	opacity:0
	&:hover 
		opacity: 100
		backdrop-filter: blur(50px)
		@apply cursor-pointer

h1 
	@apply text-white	

.card_title
	@apply flex flex-row gap-2 items-center
	
.arrow_forward
	@apply w-[56px] h-[56px] flex flex-col items-center justify-center

	
</style>


