<template>
	<GSession title="COFFEE BUILD YOUR BASE." sub-title="What's your choice?">
		<v-row>
			<v-col v-for="prd in productList" :key="prd.name">
				<ProductItem :data="prd" />
			</v-col>
		</v-row>
	</GSession>
</template>

<script setup lang="ts">
import type { Product } from '../product/types'

const productList: Product[] = [
	{
		name: 'paper pouch',
		thumbnail: '/images/paper-pouch.jpg',
		images: [],
		price: 46,
		rating: 3.5,
	},
	{
		name: 'paper bag',
		thumbnail: '/images/paper-bag.jpg',
		images: [],
		price: 79,
		originPrice: 98,
		rating: 4.5,
	},
	{
		name: 'plastic pouch',
		thumbnail: '/images/plastic-pouch.jpg',
		images: [],
		price: 27,
		rating: 4.9,
	},
	{
		name: 'coffee pot',
		thumbnail: '/images/coffee-pot.jpg',
		images: [],
		price: 71,
		rating: 4,
	},
]
</script>

<style scoped></style>
