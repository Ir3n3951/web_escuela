<template>
    <div class="footer">
      <div class="footer_top">
        <div class="footer_top_first">
          <div class="footer_logos">
            <img src="logo-bocadillo-blanco.svg" alt="logo esd">
            <img src="logo-comunidad.svg" alt="logo comunidad">
          </div>
          <div class="footer_nav">
            <Link type="bg dark_mode">Estudios</Link>
            <Link type="bg dark_mode">Admisión</Link>
            <Link type="bg dark_mode">Escuela</Link>
            <Link type="bg dark_mode">Académico</Link>
            <Link type="bg dark_mode">Secretaria</Link>
            <Link type="bg dark_mode">Internacional</Link>
            <Link type="bg dark_mode">Blog</Link>
            <Link type="bg dark_mode">Contacto</Link>

          </div>
          <div class="footer_redes">
            <div class="red"><Link type="bg dark_mode">Instagram</Link> <img src="icon-arrow.svg" alt="visit"></div>
            <div class="red"><Link type="bg dark_mode">Facebook</Link> <img src="icon-arrow.svg" alt="visit"></div>
            <div class="red"><Link type="bg dark_mode">Twitter</Link> <img src="icon-arrow.svg" alt="visit"></div>
            <div class="red"><Link type="bg dark_mode">Youtube</Link> <img src="icon-arrow.svg" alt="visit"></div>
          </div>
          <div class="footer_contacto">
            <Link type="bg dark_mode">Contacto</Link>
            <p>Camino de Vinateros 106, 28030 <br>
              Madrid <br>
              Teléfono: 91 439 00 00 <br>
              Fax: 91 437 96 39 <br>
            </p>
          </div>
        </div>
        <div class="footer_top_second">
          <p class="extralittle">Copyright © 2023 Escuela Superior de Diseño Madrid. </p>
          <div class="footer_top_second_last">
            <p class="extralittle">Política de privacidad y aviso legal</p>
            <p class="extralittle">Política de cookies</p>
            <p class="extralittle">Créditos</p>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <p class="display2">Escuela Superior de diseño</p>
      </div>
    </div>
</template>
    
<script setup>
    import Link from './Link.vue';
</script>
    
<style lang="sass" scoped>
    .footer
      @apply bg-gray-esd-4 py-28 px-32 gap-40
      @apply flex flex-col 
      @apply text-white
      .footer_top
        @apply flex flex-col gap-8
        .footer_top_first
          @apply flex items-start justify-between
          .footer_logos
            @apply flex gap-12 w-5/12 items-start
          .footer_nav
            @apply flex flex-col gap-2 items-start
          .footer_redes
            @apply flex flex-col gap-2 items-start
            .red
              @apply flex gap-2
          .footer_contacto
            @apply flex flex-col items-start
        .footer_top_second
          @apply flex flex-col items-end
          .footer_top_second_last
            @apply flex 
      .footer_bottom
        @apply flex




</style>
