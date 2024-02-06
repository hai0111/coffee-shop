<template>
	<GSession title="READ OUR LATEST NEWS" sub-title="Check it out!">
		<VRow>
			<VCol v-for="(item, index) in newsList" :key="index">
				<PostItemCol v-bind="item" />
			</VCol>
		</VRow>
	</GSession>
</template>

<script setup lang="ts">
import type { Post } from '../post-item/types'

const newsList: Post[] = [
	{
		title: 'MAKE IT SIMPLE',
		thumbnail:
			'https://barista.qodeinteractive.com/wp-content/uploads/2016/02/home-1-blog-f-img-1.jpg',
		subContent:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristiqu...',
	},
	{
		title: 'COFFEE SHOP',
		thumbnail:
			'https://barista.qodeinteractive.com/wp-content/uploads/2017/01/home-1-blog-f-img-2.jpg',
		subContent:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristiqu...',
	},
	{
		title: 'COFFEE BAR',
		thumbnail:
			'https://barista.qodeinteractive.com/wp-content/uploads/2017/01/home-1-blog-f-img-3.jpg',
		subContent:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat dictum lacus, ut hendrerit mi pulvinar vel. Fusce id nibh at neque eleifend tristiqu...',
	},
]
</script>

<style scoped></style>
