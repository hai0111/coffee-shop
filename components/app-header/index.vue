<template>
	<div class="flex justify-end gap-5">
		<NuxtLink
			v-for="item in menuItems"
			:key="item.link"
			:href="item.link"
			class="uppercase font-bold text-lg"
		>
			{{ item.text }}
		</NuxtLink>
		<VDivider vertical :thickness="2" class="border-opacity-50" />

		<icon-search color="#fff" :onClick="onSearch" />
	</div>
</template>

<script setup lang="ts">
import type { MenuItem } from './types'

const menuItems: MenuItem[] = [
	{
		text: 'home',
		link: '/',
	},
	{
		text: 'menu',
		link: '/menu',
	},
	{
		text: 'blogs',
		link: '/blogs',
	},
	{
		text: 'about our',
		link: '/about-our',
	},
	{
		text: 'shop',
		link: '/shop',
	},
]
const onSearch = () => {}
</script>

<style scoped></style>
