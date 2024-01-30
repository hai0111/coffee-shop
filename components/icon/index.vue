<template>
	<span
		class="icon"
		:class="{
			'cursor-pointer': isOnClickExist,
		}"
		:style="{
			'--color-stroke': color,
			'--size': typeof size === 'number' ? size + 'px' : size,
			'--src': `url(${src}) no-repeat center / contain`,
		}"
		@click="onclick"
	/>
</template>

<script setup lang="ts">
import type { IconProps } from './types'

const props = withDefaults(defineProps<IconProps>(), {
	color: '#000000',
	size: '1em',
})

const emit = defineEmits<{ (e: 'click'): void }>()

const isOnClickExist = computed(() => {
	const currentInstance = getCurrentInstance()
	return (
		!!currentInstance?.vnode.props?.onClick || !!currentInstance?.props.href
	)
})

const onclick = () => {
	if (props.href) useRouter().push(props.href)
	emit('click')
}
</script>

<style scoped lang="scss">
.icon {
	display: inline-block;
	background-color: var(--color-stroke) !important;
	mask: var(--src) !important;
	width: var(--size);
	height: var(--size);
}
</style>
