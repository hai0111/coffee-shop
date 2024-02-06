<template>
	<div>
		<div class="ma-n4 rounded-t-xl overflow-hidden">
			<home-hero />
		</div>

		<home-booking />
		<home-pinned-posts />
		<home-menu />
		<home-products />
		<home-images-deco />
		<home-last-news />
		<instagram-images
			:data="instagramData"
			:option="{
				perPage: {
					lg: 8,
					md: 7,
					sm: 5,
					default: 3,
				},
				autoScroll: {
					speed: 0.1,
					autoStart: true,
				},
			}"
		/>
	</div>
</template>

<script setup lang="ts">
import type { InstagramItem } from '~/components/instagram-images/types'

useHead({
	title: 'Home',
})

const instagramData: InstagramItem[] = [
	{
		link: '/',
		imageSrc: '/images/home-instagram-1.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-2.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-3.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-4.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-5.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-6.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-7.jpg',
	},
	{
		link: '/',
		imageSrc: '/images/home-instagram-8.jpg',
	},
]
</script>
