<template>
	<v-container
		v-scroll="onScroll"
		class="flex items-center justify-between transition-transform duration-300"
	>
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
	</v-container>

	<v-container
		v-scroll="onScroll"
		class="flex items-center justify-between fixed z-50 left-0 right-0 bottom-full bg-primary py-2 drop-shadow-[0_10px_8px_rgb(255_255_255_/_0.1)] overflow-x-hidden transition-transform duration-300"
		:class="{
			'translate-y-full delay-75': showMenu,
			'translate-y-0': !showMenu,
		}"
	>
		<NuxtLink href="/">
			<img src="/images/main-logo.png" class="size-12" />
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
	</v-container>
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

/* Scroll controller */
const scrollY = ref(0)
const isUp = ref(false)
const showMenu = computed(() => scrollY.value > 300 && isUp.value)

const onScroll = () => {
	if (!window) return
	const _scrollY = window.scrollY
	isUp.value = scrollY.value - _scrollY > 0
	scrollY.value = _scrollY
}
</script>
