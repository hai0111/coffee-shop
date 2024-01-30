<template>
	<div>
		<img class="max-w-full rounded" :src="thumbnail" alt="..." />
		<div class="my-5 font-semibold text-xl font-sans">
			<slot name="title">
				{{ title }}
			</slot>
		</div>
		<div class="tracking-wider font-thin">{{ subContent }}</div>
		<NuxtLink
			class="inline-flex items-center uppercase font-bold text-[0.8rem] mt-6 group transition-all tracking-[3px] hover:tracking-[3.5px]"
			href="/"
		>
			read more
			<v-icon
				icon="mdi-arrow-right"
				size="1.1rem"
				class="ms-1 transition-transform group-hover:translate-x-2"
			/>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { Post } from './types'

defineProps<Post>()
</script>

<style scoped></style>
