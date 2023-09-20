<script setup>
import { ref } from 'vue'

let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<template>
  <!-- <router-link to="/">Home</router-link> -->
  <!-- <router-link to="/estudios">Escuela</router-link>
  <router-link to='/:path(.*)'>Not Found</router-link> -->
  <router-view />

</template>
