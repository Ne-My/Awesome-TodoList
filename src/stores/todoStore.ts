import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { computed, ref } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const todos = ref<Todo[]>([])

    const allTodosCount = computed(() => todos.value.length)
    const completedTodosCount = computed(() => todos.value.filter((obj) => obj.checked === true).length)
    const leftTodosCount = computed(() => allTodosCount.value - completedTodosCount.value)

    const todoAddItem = (name: string, checked: boolean = false): void => {
      todos.value.push({
        id: uuidv4(),
        name,
        checked,
      })
    }

    const TodoDelete = (id: string): boolean => {
      todos.value = todos.value.filter((item) => item.id !== id)
      return true
    }

    return {
      todos,

      allTodosCount,
      completedTodosCount,
      leftTodosCount,

      todoAddItem,
      TodoDelete,
    }
  },
  {
    persist: {
      pick: ['todos'],
    },
  },
)
