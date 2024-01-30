<template>
	<div class="flex flex-wrap gap-4">
		<div
			v-for="(colData, index) in menuCols"
			:key="index"
			class="grow flex flex-col gap-4"
		>
			<template v-for="(item, index) in colData" :key="'item-menu-' + index">
				<menu-category-title v-if="typeof item === 'string'" />
				<menu-item v-else :data="item" />
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Menu, MenuEntity } from './types'

const props = defineProps<{ data: MenuEntity[] }>()

const menuCols = computed<(Menu | string)[][]>(() => {
	const data: (Menu | string)[][] = [[]]
	let j = 0
	for (let i = 0; i < props.data.length; i++) {
		const item = props.data[i]
		if (item === '|') {
			data.push([])
			j++
			continue
		}
		data[j].push(item)
	}
	return data
})
</script>

<style scoped></style>
