<template>
	<main
		:class="`min-h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/bg-app.jpg')] bg-cover bg-fixed bg-center md:px-3 relative text-white flex flex-col`"
	>
		<app-header />
		<coffee-loader v-if="!isLoaded" />
		<v-container
			class="bg-[#ccc] bg-opacity-10 backdrop-blur-xl md:rounded-3xl grow mb-10"
		>
			<slot />
		</v-container>
	</main>
</template>

<script setup lang="ts">
const isLoaded = ref(false)

onMounted(() => {
	isLoaded.value = true
})
</script>
