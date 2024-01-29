<template>
	<VueDatePicker
		:model-value="time"
		@update:model-value="updateModelValue"
		auto-apply
		time-picker
		@open="focused = true"
		@closed="focused = false"
	>
		<template #trigger>
			<VTextField
				v-bind="$props"
				readonly
				:focused="focused"
				:class="{
					focused,
				}"
				:label="label"
				:model-value="modelValue"
				clearable
			/>
		</template>
	</VueDatePicker>
</template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import { defineComponent } from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs'
import { paddingNumber } from '~/utilities'

export default defineComponent({
	extends: VTextField,
	components: {
		VueDatePicker,
	},
	props: {
		modelValue: null,
		label: String,
	},
	setup(props, { emit }) {
		const updateModelValue = (val: any) => {
			if (val)
				val = Object.values(val)
					.slice(0, 2)
					.map((num) => paddingNumber(num as number))
					.join(':')
			emit('update:modelValue', val)
		}

		const time = computed<any>(() => {
			let hours = null,
				minutes = null

			if (props.modelValue) {
				const [h, m] = props.modelValue.split(':')
				hours = Number(h)
				minutes = Number(m)
			}
			return { hours, minutes }
		})

		const focused = ref(false)
		return { time, focused, updateModelValue }
	},
})
</script>

<style scoped lang="scss">
:deep(.focused) {
	.v-field__outline {
		--v-field-border-opacity: 1;
		&::after {
			transform: scaleX(1);
		}
	}
	.v-field__overlay {
		opacity: calc(
			(0.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier)
		);
	}
	label:first-child {
		visibility: visible !important;
		opacity: 1 !important;
	}

	label:nth-child(2) {
		visibility: hidden !important;
		transform: scale(0.75) translateY(-100%) !important;
		transition-property: opacity, transform;
		will-change: opacity, transform;
		font-size: 0.75em !important;
		opacity: 1 !important;
	}
}
</style>
