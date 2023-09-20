<template>
	<div class="toolbar">
		<img class="icon" src='icon-paint.svg' alt="">
		<img class="icon" src='icon-clean-sheet.svg' alt="">
		<div class="color black"></div>
		<div class="color white"></div>
		<div class="color blue"></div>
		<div class="color orange"></div>
		<div class="color green"></div>
	</div>
</template>
    
<script setup>

</script>
    
<style lang="sass" scoped>

.toolbar
	@apply flex flex-col  gap-4 bg-gray-esd-4 bg-opacity-10 backdrop-blur-xl rounded-full p-4
	.icon
		@apply w-[28px] h-[28px]
		&:hover
			@apply cursor-pointer
	.color
		@apply flex w-[28px] h-[28px] rounded-full
		&:hover
			@apply outline  outline-blue-100 cursor-pointer
	.black
		@apply bg-black
	.white
		@apply bg-white
	.blue
		@apply bg-blue-esd-primary
	.orange
		@apply bg-orange-500
	.green
		@apply bg-green-500





</style>
    