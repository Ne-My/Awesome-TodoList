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
	<TodoListItem
		v-for="todo in todos"
		:key="todo.id"
		:name="todo.name"
		:icon="todo.icon"
		:time="todo.time"
	/>
</template>
