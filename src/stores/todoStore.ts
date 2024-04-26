import type { Todo } from "@/types";
import { defineStore } from "pinia";
import { v4 } from "uuid";
import { reactive } from "vue";

export const useTodoStore = defineStore('todo', () => {
	const todos = reactive<Todo[]>([])

	const addTodoItem = ({name, time = '', icon = ''}: {
		name: string,
		time?: string,
		icon?: string
	}): void => {
		todos.push({
			id: v4(),
			name,
			icon,
			time,
			checked: false
		})
	}

	const checkTodoItem = (id: number | string, state: boolean = true): boolean => {
		const todo: Todo | undefined = todos.find((obj: Todo) => obj.id === id)
		if (!todo) return false
		todo.checked = state
		return true
	}
	return {
		todos,
		addTodoItem,
		checkTodoItem
	}
})