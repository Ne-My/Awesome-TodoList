<script setup lang="ts">
import HomeViewHeader from './_partials/HomeViewHeader.vue'
import HomeViewInput from './_partials/HomeViewInput.vue'
// @ts-ignore
import HomeViewTodoList from './_partials/HomeViewTodoList.vue'
</script>

<template>
	<div
		class="flex flex-col gap-9 bg-white rounded-xl shadow-md min-w-[500px] p-8 pb-12 relative"
	>
		<HomeViewHeader />

		<HomeViewTodoList />

		<HomeViewInput />
	</div>
</template>
