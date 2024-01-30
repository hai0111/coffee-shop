<template>
	<div class="flex">
		<div>
			<v-img :src="data.image" :width="80" aspect-ratio="1/1" class="rounded" />
		</div>
		<div class="grow ps-3">
			<div class="flex items-end text-xl">
				<div class="w-max">{{ data.name }}</div>
				<div class="flex-1 p-1">
					<VDivider />
				</div>
				<div>${{ data.price }}</div>
			</div>
			<div class="font-thin text-yellow-200">
				{{ data.description }}
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Menu } from './types'

defineProps<{ data: Menu }>()
</script>

<style scoped></style>
