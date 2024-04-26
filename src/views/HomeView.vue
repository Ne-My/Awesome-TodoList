<script setup lang="ts">
import HomeViewHeader from './_partials/HomeViewHeader.vue';
// @ts-ignore
import HomeViewTodoList from './_partials/HomeViewTodoList.vue';
</script>

<template>
	<div class="flex flex-col gap-9 bg-white rounded-xl shadow-md min-w-[500px] p-8 pb-10 relative">
		<HomeViewHeader />

		<HomeViewTodoList />

		<div class="absolute -bottom-[25px] w-[calc(100%-32px*2)]">
			<img class="absolute top-1/2 -translate-y-1/2 left-4" src="/icons/smile.svg" />
			<input class="w-full bg-slate-900 text-slate-50 px-[50px] outline-none py-4 rounded-lg text-[14px]" type="text" placeholder="say somthing" />
			<img class="absolute top-1/2 -translate-y-1/2 right-4" src="/icons/plus.svg" />
		</div>
	</div>
</template>