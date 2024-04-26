<script setup lang="ts">

</script>

<template>
	<div class="flex justify-between items-center gap-12">
		<div class="flex flex-col gap-2">
			<h1 class="text-2xl font-bold text-slate-700">Awesome TodoList</h1>
			<span class="text-[14px] text-slate-400">Add anything you want and have full controll on them!</span>
		</div>
		<div class="flex gap-3 *:min-w-[80px] *:rounded-full *:text-white *:p-2 *:capitalize *:text-center *:text-[14px]">
			<span class="bg-lime-400">total : 0</span>
			<span class="bg-indigo-400">completed : 1</span>
			<span class="bg-rose-400">left : 5</span>
		</div>
	</div>
</template>