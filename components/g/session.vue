<template>
	<main class="my-24">
		<g-session-heading :sub-title="subTitle" :title="title" class="pb-[5rem]" />
		<slot></slot>
	</main>
</template>

<script setup lang="ts">
defineProps<{ title: string; subTitle: string }>()
</script>

<style scoped></style>
