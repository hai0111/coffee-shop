<template>
	<VueDatePicker
		:model-value="date"
		@update:model-value="updateModelValue"
		auto-apply
		:disabled-dates="disabledDates"
		@open="focused = true"
		@closed="focused = false"
	>
		<template #trigger>
			<VTextField
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
import '@vuepic/vue-datepicker/dist/main.css'
import { defineComponent } from 'vue'
import moment from 'moment'
import { dateFormat } from '~/assets/constants'

export default defineComponent({
	components: {
		VueDatePicker,
	},
	props: {
		modelValue: null,
		label: String,
	},
	setup(props, { emit }) {
		const updateModelValue = (val: any) => {
			if (val) val = moment(val).format(dateFormat)
			emit('update:modelValue', val)
		}

		const date = computed(() =>
			props.modelValue ? moment(props.modelValue, dateFormat).toDate() : null
		)

		const disabledDates = (date: Date) => moment(date).isSameOrBefore(moment())

		const focused = ref(false)
		return { date, focused, disabledDates, updateModelValue }
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
