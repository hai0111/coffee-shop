<template>
	<VTextField
		v-bind="{ ...$props, type }"
		@input="updateModelValue($event.target)"
	/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs'

export default defineComponent({
	extends: VTextField,
	props: {
		isInt: Boolean,
		noNegative: Boolean,
	},
	setup(props, { emit }) {
		let isNumber = false
		let type = props.type
		if (props.type === 'number') {
			isNumber = true
			type = 'text'
		}

		const stringToNumber = (val: string) => {
			val = val.match(/^-?(\d+)?\.?(\d+)?/)?.[0] || ''
			if (props.isInt) {
				val = val.replace(/\./g, '')
			}
			if (props.noNegative) {
				val = val.replace(/-/g, '')
			}
			return val
		}

		const updateModelValue = (el: any) => {
			let val = el.value
			val = val?.toString() || ''

			if (isNumber) {
				val = stringToNumber(val)
			}

			el.value = val
			emit('update:modelValue', val)
		}

		return { type, updateModelValue }
	},
})
</script>

<style scoped></style>
