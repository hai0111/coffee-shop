<template>
	<div class="h-[500vh]">
		<div class="ma-n4 rounded-t-xl overflow-hidden">
			<home-hero />
		</div>

		<home-booking />
		<home-pinned-posts />
		<home-menu />
		<home-products />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Home',
})
</script>
