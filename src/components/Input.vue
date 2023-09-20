<template>
    <form action="escribir">
        <input type="text" name="email" id="email" class="input-simple" placeholder="Email*">
    </form>
</template>


<script>

</script>

<style lang="sass" scoped>
form
    @apply w-full
    .input-simple
        @apply rounded-full border-gray-esd-4 bg-transparent
        @apply outline-none w-full pl-6
        &:hover
            @apply border-blue-500

</style>