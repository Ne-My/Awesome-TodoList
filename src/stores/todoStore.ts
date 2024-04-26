import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 } from 'uuid'
import { reactive } from 'vue'

export const useTodoStore = defineStore('todo', () => {
	const todos = reactive<Todo[]>([
		{
			id: 1,
			name: 'Go to the gym!',
			time: '16:30 - 18:00',
			icon: '/emojies/image 1.png',
			checked: false,
		},
	])

	const addTodoItem = ({
		name,
		time = '',
		icon = '',
		checked = false,
	}: {
		name: string
		time?: string
		icon?: string
		checked: boolean
	}): void => {
		todos.push({
			id: v4(),
			name,
			icon,
			time,
			checked,
		})
	}

	const checkTodoItem = (
		id: number | string,
		state: boolean = true
	): boolean => {
		const todo: Todo | undefined = todos.find((obj: Todo) => obj.id === id)
		if (!todo) return false
		todo.checked = state
		return true
	}
	return {
		todos,
		addTodoItem,
		checkTodoItem,
	}
})
