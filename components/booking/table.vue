<template>
	<div class="flex items-center gap-5">
		<CustomTextField
			label="Person"
			type="number"
			:is-int="true"
			:no-negative="true"
			v-model:model-value="bodyBooking.persons"
		/>

		<CustomTextField
			label="Person"
			type="number"
			:is-int="true"
			:no-negative="true"
			v-model:model-value="bodyBooking.persons"
		/>

		<CustomTextField
			label="Person"
			type="number"
			:is-int="true"
			:no-negative="true"
			v-model:model-value="bodyBooking.persons"
		/>
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
