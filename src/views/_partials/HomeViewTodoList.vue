<script setup lang="ts">
// @ts-ignore
import TodoListItem from '@/components/TodoListItem.vue'
// @ts-ignore
import { useTodoStore } from '@/stores/todoStore'

import { storeToRefs } from 'pinia'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
</script>

<template>
	<div class="flex flex-col gap-3 h-[60vh] overflow-y-scroll">
		<TodoListItem
		v-for="todo in todos"
		:key="todo.id"
		:name="todo.name"
		:icon="todo.icon"
		:time="todo.time"
		:checked="todo.checked"
	/>
	</div>
</template>
