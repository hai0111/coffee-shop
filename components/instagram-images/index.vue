<template>
	<GSplide :data="data">
		<template #item="{ data }">
			<NuxtLink :to="data.link" class="inline-block relative">
				<img :src="data.imageSrc" cover />
				<span class="absolute top-3 right-3">
					<v-icon icon="mdi-instagram" />
				</span>
			</NuxtLink>
		</template>
	</GSplide>
</template>

<script setup lang="ts">
import type { InstagramItem } from './types'

defineProps<{
	data: InstagramItem[]
}>()
</script>

<style scoped></style>
