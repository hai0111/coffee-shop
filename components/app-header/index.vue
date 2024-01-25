<template>
	<div class="flex items-center justify-between">
		<NuxtLink href="/">
			<img src="/images/main-logo.png" class="size-16" />
		</NuxtLink>

		<div class="flex items-center gap-6 text-lg">
			<NuxtLink
				v-for="item in menuItems"
				:key="item.link"
				:href="item.link"
				class="uppercase font-bold"
			>
				{{ item.text }}
			</NuxtLink>

			<VDivider
				vertical
				:thickness="2"
				class="border-opacity-50 h-[40px] grow-0"
			/>

			<icon src="/icons/cart.svg" color="#fff" href="/search" />
			<icon src="/icons/search.svg" color="#fff" :onClick="onSearch" />
			<icon src="/icons/menu.svg" color="#fff" size="25px" :onClick="onMenu" />
		</div>
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
const onMenu = () => {}
</script>

<style scoped></style>
