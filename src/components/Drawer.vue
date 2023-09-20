<template>
    <section class="faq_accordion">

        <article v-for="(item, index) in items" :key="index" :class="['accordion_item', { 'open': item.isOpen }]">
            <div class="accordion_header" @click="toggleAccordion(index)">
                <h2 class="accordion_title">{{ item.title }}</h2>
                <span class="accordion_icon">
                    <img :src="isOpen ? 'icon-minus.svg' : 'icon-plus.svg'" alt="arrow-faq">
                </span>
            </div>
            <div class="accordion_content" :class="{ 'opened': item.isOpen, 'closed': !item.isOpen }">
                <p>
                    {{ item.content }}
                </p>
            </div>
        </article>
<strong></strong>
    </section>
</template>
    
<script>
export default {
  data() {
    return {
      items: [
        { 
          title: '¿A quién va dirigido?',
          content: `El diseño gráfico es una actividad interdisciplinar, dirigida a la resolución de problemas que combina sensibilidad visual con habilidad y conocimiento principalmente en las áreas de comunicación, tecnología y negocios. Los profesionales del diseño gráfico se especializan en la estructuración y la organización de la información visual con vistas a optimizar la comunicación en sus múltiples manifestaciones y contextos diversos.
                Debido al aumento veloz y masivo en el intercambio de información, la demanda de diseñadores gráficos es mayor que nunca, particularmente a causa del desarrollo de nuevas tecnologías y de la necesidad de comunicación de nuestro entorno social. Por ello formamos profesionales que generan soluciones visuales a esas necesidades de comunicación mediante metodologías y procesos creativos y aplicando técnicas de expresión gráfica y tecnologías computacionales, estableciendo con todo ello un código propio de comunicación.
                Los ámbitos principales donde desarrolla su actividad son: identidad corporativa y visual, diseño editorial, producción gráfica, diseño de envases y embalajes, dirección de arte en publicidad, diseño audiovisual, grafismo en televisión, diseño multimedia, diseño de interacción, aplicaciones móviles, diseño web, gráfica y comunicaciones aplicadas al espacio, investigación, docencia…
          `,
          isOpen: false
        },
        {
          title: '¿Cómo puedo acceder?',
          content: `Puedes acceder a estos estudios mediante prueba de acceso (si cuentas con un título de Bachillerato), mediante acceso directo (si cuentas con un Título de Técnico Superior de Artes Plásticas y Diseño) o mediante prueba de madurez (si no estás en ninguno de los dos casos anteriores).`,
          isOpen: false
        },
        {
          title: 'Plan estudios (Orden 835/2022)',
          content: `mas info`,
          isOpen: false
        },
        {
          title: 'Plan estudios (Decreto 34/2011)',
          content: `mas info`,
          isOpen: false
        },
        {
          title: 'Precios',
          content: `Los precios públicos de la Escuela Superior de Diseño de Madrid están bonificados en función de la renta familiar. Puedes consultar toda la información detallada en la página de precios públicos, aquí te mostramos un cuadro resumen de las bonificaciones actuales:`,
          isOpen: false
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.items.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen;
        } else {
          item.isOpen = false;
        }
      });
    }
  }
};
</script>
    
<style lang="sass" scoped>
.faq_accordion
    @apply flex flex-col gap-12
    .accordion_item
        @apply max-w-[720px]
        @apply border-l border-solid border-blue-esd-700
        .accordion_header
            @apply flex justify-between items-baseline gap-2
            .accordion_title
                @apply text-blue-esd-700 pl-9
            .accordion_icon
                @apply w-[20px] 
        .accordion_content
            @apply justify-start
            @apply pl-9 pt-9
            @apply text-gray-esd-4


// Clases para que se 
.opened
    @apply block

.closed
    @apply hidden


</style>