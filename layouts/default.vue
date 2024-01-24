<template>
	<main
		ref="wrapper"
		:class="`min-h-screen bg-[linear-gradient(rgba(0,0,0,60%),rgba(0,0,0,60%)),url('${BG_URL}')] bg-fixed py-10 px-5`"
		:style="{
			backgroundSize,
			backgroundPositionY,
			backgroundPositionX: 'center',
		}"
	>
		<v-container
			class="bg-[#fff] bg-opacity-20 backdrop-blur-sm rounded-3xl min-h-full"
		>
			<slot />
		</v-container>
	</main>
</template>

<script setup lang="ts">
const BG_URL = '/images/bg-app.jpg'
const backgroundSize = ref('100vw auto')
const backgroundPositionY = ref('0%')
const isOverBg = ref<boolean>(true)

const wrapper = ref<HTMLDivElement>()

const getWidthImage: () => Promise<{ width: number; height: number }> = () => {
	const img = new Image()
	img.src = BG_URL
	return new Promise((resolve, reject) => {
		img.addEventListener('load', (evt) => {
			const el = evt.target as HTMLImageElement
			resolve({ width: el.width, height: el.height })
			el.remove()
		})
	})
}

watch(
	isOverBg,
	(val) => {
		console.log(val)
		if (val) backgroundSize.value = '100vw auto'
		else {
			backgroundSize.value = 'auto 100vh'
			backgroundPositionY.value = 'center'
		}
	},
	{
		immediate: true,
	}
)

onMounted(async () => {
	const { height, width } = await getWidthImage()
	isOverBg.value = (window.innerWidth * height) / width - window.innerHeight > 0
	window.addEventListener('resize', () => {
		isOverBg.value = (window.innerWidth * height) / width > window.innerHeight
	})

	window.addEventListener('scroll', (evt) => {
		const percentScroll = Math.min(
			(window.scrollY * 100) /
				(document.body.clientHeight - window.innerHeight),
			100
		)

		if (isOverBg.value) {
			backgroundPositionY.value = percentScroll + '%'
		}
	})
})
</script>
