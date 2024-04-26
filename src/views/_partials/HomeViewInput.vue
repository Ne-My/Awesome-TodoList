<script setup lang="ts">
// @ts-ignore
import { useTodoStore } from '@/stores/todoStore';
import { ref } from 'vue';


const todoStore = useTodoStore()
const inputVal = ref<string>('')

const addTodo = () => {
	const val = inputVal.value
	if (val === '') return
	todoStore.addTodoItem({
		name: val,
		checked: false
	})
	inputVal.value = ''
}
</script>

<template>
	<div class="absolute -bottom-[25px] w-[calc(100%-32px*2)]">
			<img class="absolute top-1/2 -translate-y-1/2 left-4 cursor-pointer" src="/icons/smile.svg" />
			<input @keypress.enter="addTodo" v-model="inputVal" class="w-full bg-slate-900 text-slate-50 px-[50px] outline-none py-4 rounded-lg text-[14px]" type="text" placeholder="say somthing" />
			<img @click="addTodo" class="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" src="/icons/plus.svg" />
		</div>
</template>

<style scoped>

</style>