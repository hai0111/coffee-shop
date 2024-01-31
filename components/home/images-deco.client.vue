<template>
	<div ref="refContainer">
		<div class="col-sizer w-[20%]"></div>
		<div class="flex w-full md:w-[40%] h-[200px] md:h-[600px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco1.jpg"
			/>
		</div>
		<div class="flex w-full md:w-[20%] h-[200px] md:h-[300px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco2.jpg"
			/>
		</div>
		<div class="flex w-full md:w-[20%] h-[200px] md:h-[600px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco3.jpg"
			/>
		</div>
		<div class="flex w-full md:w-[20%] h-[200px] md:h-[300px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco4.jpg"
			/>
		</div>
		<div class="flex w-full md:w-[20%] h-[200px] md:h-[300px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco6.jpg"
			/>
		</div>
		<div class="flex w-full md:w-[20%] h-[200px] md:h-[300px]">
			<preview-image
				group-name="deco"
				class="object-cover w-full h-full"
				src="/images/home-deco5.jpg"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import Isotope from 'isotope-layout'

const refContainer = ref<HTMLDivElement>()

watch(refContainer, async (val) => {
	if (!val) return
	new Isotope(val, {
		containerStyle: {
			width: '100%',
			position: 'relative',
			borderRadius: '20px',
			overflow: 'hidden',
		},
		horiz: {
			verticalAligment: 400,
		},
		masonry: {
			columnWidth: '.col-sizer',
		},
	})
})

const random = () => Math.random() * 200 + 100
</script>

<style scoped lang="scss"></style>
