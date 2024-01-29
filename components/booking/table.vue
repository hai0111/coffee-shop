<template>
	<div class="grid grid-cols-3 items-center gap-5">
		<CustomTextField
			label="Person"
			type="number"
			:is-int="true"
			:no-negative="true"
			v-model:model-value="bodyBooking.persons"
		/>

		<CustomDatePicker label="Date" v-model="bodyBooking.date" />
	</div>
</template>

<script setup lang="ts">
const bodyBooking = reactive({
	persons: null,
	date: null,
	time: null,
})
</script>

<style scoped></style>
