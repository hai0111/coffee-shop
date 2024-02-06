<template>
	<Splide :options="options" :extensions="{ AutoScroll }">
		<SplideSlide v-for="(item, index) in data" :key="index">
			<slot name="item" :data="item"> </slot>
		</SplideSlide>
	</Splide>
</template>

<script setup lang="ts">
import { Splide, SplideSlide, type Options } from '@splidejs/vue-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import { useDisplay, type DisplayBreakpoint } from 'vuetify'

type OptionsComponent = Omit<Options, 'perPage'> & {
	perPage?: Partial<Record<DisplayBreakpoint, number>> & { default?: number }
}

const props = withDefaults(
	defineProps<{
		data: any[]
		option?: OptionsComponent
	}>(),
	{
		data: () => [],
		option: () => ({}),
	}
)

const breakpoint = useDisplay().name

const options = computed<Options>(() => {
	const { perPage: perPageOptions, ...op } = props.option
	const perPage = perPageOptions?.[breakpoint.value] || perPageOptions?.default
	return {
		type: 'loop',
		pagination: false,
		drag: 'free',
		arrows: false,
		gap: 0,
		perPage,
		autoScroll: {
			speed: 0.3,
			autoStart: true,
		},
		...op,
	}
})
</script>

<style scoped></style>
