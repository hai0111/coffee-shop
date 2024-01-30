<template>
	<g-session title="FAVOURITE COFFEE FLAVOURS." sub-title="What do you want?">
		<Menu :data="menuData" />
	</g-session>
</template>

<script setup lang="ts">
import type { MenuEntity } from '../menu/types'

const menuData: MenuEntity[] = [
	{
		image: '/images/caffe-latte.jpg',
		description: 'Fresh brewed coffee and steamed milk',
		name: 'CAFFE LATTE',
		price: '2.95',
		tag: 'new',
	},
	{
		image: '/images/caffe-mocha.jpg',
		description: 'Espresso With Milk, and Whipped Cream',
		name: 'CAFFE MOCHA',
		price: '3.67',
	},
	{
		image: '/images/white-chocolate-mocha.jpg',
		description: 'Espresso, White Chocolate, Milk, Ice and Cream',
		name: 'WHITE CHOCOLATE MOCHA',
		price: '2.79',
	},
	{
		image: '/images/caffe-americano.jpg',
		description: 'Espresso Shots and Light Layer of Crema',
		name: 'CAFFE AMERICANO',
		price: '3.06',
	},
	{
		image: '/images/cappuccino.jpg',
		description: 'Espresso, and Smoothed Layer of Foam',
		name: 'CAPPUCCINO',
		price: '4.03',
	},
	{
		image: '/images/vanilla-latte.jpg',
		description: 'Espresso Milk With Flavor,and Cream',
		name: 'VANILLA LATTE',
		price: '3.65',
	},
	'|',
	{
		image: '/images/iced-caramel-latte.jpg',
		description: 'Espresso, Milk, Ice and Caramel Sauce',
		name: 'ICED CARAMEL LATTE',
		price: '4.67',
	},
	{
		image: '/images/espresso-macchiato.jpg',
		description: 'Rich Espresso With Milk and Foam',
		name: 'ESPRESSO MACCHIATO',
		price: '2.98',
	},
	{
		image: '/images/caramel-macchiato.jpg',
		description: 'Espresso, vanilla-flavored syrup and milk',
		name: 'CARAMEL MACCHIATO',
		price: '2.54',
	},
	{
		image: '/images/iced-smoked-latte.jpg',
		description: 'Espresso, ice, with smoked butterscotch',
		name: 'ICED SMOKED LATTE',
		price: '3.05',
	},
	{
		image: '/images/iced-caffe-mocha.jpg',
		description: 'Espresso, bittersweet mocha sauce, milk and ice',
		name: 'ICED CAFFE MOCHA',
		price: '2.60',
	},
	{
		image: '/images/iced-gingerbread-latte.jpg',
		description: 'Espresso, Milk, Ice, and Gingerbread Flavor',
		name: 'ICED GINGERBREAD LATTE',
		price: '3.92',
	},
]
</script>

<style scoped></style>
