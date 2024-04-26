<script setup lang="ts">
defineProps<{
	icon?: string,
	name: string,
	time?: string
	checked?: boolean
}>()
</script>

<template>
	<div class="bg-white flex justify-between items-center rounded-xl shadow-sm px-4 py-5">
		<div class="flex items-center gap-3">
			<div class="size-6"><img v-if="icon" :src="icon" /></div>
			<span class="text-slate-700 text-[16px] font-semibold">{{ name }}</span>
		</div>

		<div class="flex gap-3 items-center">
			<span v-if="time" class="text-slate-400 text-[14px]">{{ time }}</span>
			<div class="flex gap-2.5 items-center">
				<input type="checkbox" class="size-5" :checked="checked" />
				<img src="/icons/more-vertical.svg" />
			</div>
		</div>
	</div>
</template>