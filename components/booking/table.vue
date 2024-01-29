<template>
	<v-row class="flex-nowrap">
		<v-col>
			<CustomTextField
				type="number"
				label="Persons"
				:is-int="true"
				:no-negative="true"
				v-model:model-value="bodyBooking.persons"
				append-inner-icon="mdi-account-group"
				hide-details
			/>
		</v-col>

		<v-col cols="auto" class="flex items-center"> For </v-col>

		<v-col>
			<CustomDatePicker
				append-inner-icon="mdi-calendar-month-outline"
				label="Date"
				v-model:model-value="bodyBooking.date"
				hide-details
			/>
		</v-col>

		<v-col cols="auto" class="flex items-center"> At </v-col>

		<v-col>
			<CustomTimePicker
				append-inner-icon="mdi-clock-outline"
				label="Time"
				v-model:model-value="bodyBooking.time"
				hide-details
			/>
		</v-col>

		<v-col class="flex">
			<v-btn class="h-100 w-100"> Book a table </v-btn>
		</v-col>
	</v-row>
</template>

<script setup lang="ts">
const bodyBooking = reactive({
	persons: null,
	date: null,
	time: null,
})
</script>

<style scoped></style>
