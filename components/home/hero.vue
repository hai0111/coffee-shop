<template>
	<v-carousel
		height="80vh"
		hide-delimiter-background
		:continuous="true"
		:interval="10000"
		cycle
	>
		<v-carousel-item v-for="(item, idx) in carouselData" :key="idx">
			<v-parallax class="w-full h-full relative" :src="item.thumbnailSource">
				<div class="absolute inset-0 bg-[#000] bg-opacity-30"></div>
				<div
					class="flex flex-col justify-center align-center absolute inset-0 z-10 text-center text-white px-[4rem]"
				>
					<div
						v-motion="{
							initial: {
								opacity: 0,
								y: 30,
							},
							enter: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 600,
									easings: 'linear',
								},
							},
						}"
						class="text-[4rem] leading-[1] font-extrabold font-sans"
					>
						{{ item.title }}
					</div>
					<div
						v-motion="{
							initial: {
								opacity: 0,
								y: 10,
							},
							enter: {
								opacity: 1,
								y: 0,
								transition: {
									duration: 300,
									delay: 300,
									easings: 'linear',
								},
							},
						}"
						class="text-2xl mt-5 tracking-wide max-w-[800px]"
					>
						{{ item.description }}
					</div>

					<v-btn variant="outlined" class="font-sans mt-10" size="large">
						Read more
					</v-btn>
				</div>
			</v-parallax>
		</v-carousel-item>

		<template #prev="{ props: { onClick } }">
			<v-btn
				color="rgb(255 255 255 / 15%)"
				icon="mdi-chevron-left"
				class="text-white"
				@click="onClick"
			/>
		</template>
		<template #next="{ props: { onClick } }">
			<v-btn
				color="rgb(255 255 255 / 15%)"
				icon="mdi-chevron-right"
				class="text-white"
				@click="onClick"
			/>
		</template>
	</v-carousel>
</template>

<script setup lang="ts">
import type { HeroItem } from './types'

const carouselData: HeroItem[] = [
	{
		title: 'Importance of coffee',
		thumbnailSource: '/images/hero-1.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, inventore unde sequi quisquam saepe labore soluta nam voluptatibus voluptatum.',
	},
	{
		title: 'Importance of coffee',
		thumbnailSource: '/images/hero-2.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, inventore unde sequi quisquam saepe labore soluta nam voluptatibus voluptatum.',
	},
	{
		title: 'Importance of coffee',
		thumbnailSource: '/images/hero-3.jpg',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis architecto, inventore unde sequi quisquam saepe labore soluta nam voluptatibus voluptatum.',
	},
]
</script>

<style scoped></style>
