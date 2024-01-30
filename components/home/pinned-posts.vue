<template>
	<div class="flex gap-5">
		<post-item-col
			v-for="(item, index) in pinnedPosts"
			:key="index"
			v-bind="item"
		>
			<template #title>
				<span class="italic font-serif text-5xl font-light">
					0{{ index + 1 }} </span
				>.
				{{ item.title }}
			</template>
		</post-item-col>
	</div>
</template>

<script setup lang="ts">
import type { Post } from '../post-item/types'

const pinnedPosts: Post[] = [
	{
		subContent:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate delectus, commodi nostrum sit sapiente, iure saepe quidem cum at enim, eveniet officiis!',
		thumbnail: '/images/hero-1.jpg',
		title: 'FEEL THE COFFEE',
	},
	{
		subContent:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate delectus, commodi nostrum sit sapiente, iure saepe quidem cum at enim, eveniet officiis!',
		thumbnail: '/images/hero-2.jpg',
		title: 'BEAUTIFUL PLACE',
	},
	{
		subContent:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptate delectus, commodi nostrum sit sapiente, iure saepe quidem cum at enim, eveniet officiis!',
		thumbnail: '/images/hero-3.jpg',
		title: 'FULL TASTE',
	},
]
</script>

<style scoped></style>
