import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const completedTodos = ref<Todo[]>([])
    const unCompletedTodos = ref<Todo[]>([])

    const addTodo = (name: string, checked: boolean = false): void => {
      unCompletedTodos.value.unshift({
        id: uuidv4(),
        name,
        checked,
      })
    }

    const deleteTodo = (id: Todo['id']) => {
      unCompletedTodos.value = unCompletedTodos.value.filter((item) => item.id !== id)
      completedTodos.value = completedTodos.value.filter((item) => item.id !== id)
    }

    return {
      completedTodos,
      unCompletedTodos,

      addTodo,
      deleteTodo,
    }
  },
  {
    persist: {
      pick: ['completedTodos', 'unCompletedTodos'],
    },
  },
)
