<template>
	<div class="text-center 1">
		<div class="font-serif font-light italic tracking-widest text-xl">
			{{ subTitle }}
		</div>
		<div class="mt-4 text-4xl font-sans uppercase font-bold">
			{{ title }}
		</div>

		<hr class="w-[200px] max-w-60 mx-auto mt-6" />
	</div>
</template>

<script setup lang="ts">
import type { SessionHeadingProps } from './types'

defineProps<SessionHeadingProps>()
</script>

<style scoped></style>
