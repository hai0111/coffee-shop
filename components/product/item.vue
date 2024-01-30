<template>
	<div class="flex flex-col w-full">
		<NuxtLink href="/" class="w-full">
			<v-img
				:src="data.thumbnail"
				aspect-ratio="1/1"
				class="rounded overflow-hidden flex items-end group"
			>
				<v-btn
					block
					rounded="0"
					class="text-none tracking-tighter text-center bg-brown py-1 transition-transform translate-y-full group-hover:translate-y-0"
				>
					<Icon src="/icons/cart.svg" color="#fff" class="me-2" /> Add to cart
				</v-btn>
			</v-img>
		</NuxtLink>
		<div
			class="mt-2 mb-1 uppercase font-black font-sans tracking-wider text-lg"
		>
			{{ data.name }}
		</div>
		<Rating :model-value="data.rating" size="1.1rem" />
		<div class="flex text-xl mt-1 font-serif">
			<span
				v-if="data.originPrice"
				class="text-gray-300 me-2 line-through decoration-1"
			>
				${{ data.originPrice }}
			</span>
			<span class="text-yellow-500">${{ data.price }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Product } from './types'

defineProps<{ data: Product }>()
</script>

<style scoped></style>
