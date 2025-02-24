import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const todos = ref<Todo[]>([])

    const addTodo = (name: string, icon: number = 0): void => {
      todos.value.unshift({
        id: uuidv4(),
        name,
        icon,
        checked: false,
      })
    }

    const deleteTodo = (id: Todo['id']) => {
      todos.value = todos.value.filter((item) => item.id !== id)
    }

    return {
      todos,

      addTodo,
      deleteTodo,
    }
  },
  {
    persist: {
      pick: ['todos'],
    },
  },
)
