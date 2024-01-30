<template>
	<div class="inline-flex">
		<rating-icon
			v-for="index in 5"
			:key="index + '-star-icon'"
			:model-value="modelValue - index"
			:size="size"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps<{ modelValue: number; size?: string | number }>()
</script>

<style scoped>
.star {
	background: var(--background) !important;
	background-clip: text;
}
</style>
