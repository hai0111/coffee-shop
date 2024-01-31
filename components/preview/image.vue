<template>
	<a :href="src" :data-fancybox="groupName">
		<img v-bind="$attrs" :src="src" />
	</a>
</template>

<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
const props = defineProps<{ src: string; groupName: string }>()

onMounted(() => {
	Fancybox.bind(`[data-fancybox="${props.groupName}"]`, {})
})
</script>

<style scoped></style>
