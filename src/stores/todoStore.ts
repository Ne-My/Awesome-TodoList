import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { computed, reactive } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const todos = reactive<Todo[]>([
      {
        id: 'first',
        name: 'Go to the gym!',
        checked: false,
      },
    ])

    const allTodosCount = computed(() => todos.length)
    const completedTodosCount = computed(() => todos.filter((obj) => obj.checked === true).length)
    const leftTodosCount = computed(() => allTodosCount.value - completedTodosCount.value)

    const todoAddItem = (name: string, checked: boolean = false): void => {
      todos.push({
        id: uuidv4(),
        name,
        checked,
      })
    }

    const todoChangeState = (id: string, checked: boolean) => {
      todos.find((obj) => obj.id === id)!.checked = checked
    }

    const TodoDelete = (id: string): boolean => {
      const todoIndex = todos.findIndex((obj) => obj.id === id)
      if (!todoIndex) return false
      todos.splice(todoIndex, 1)
      return true
    }

    return {
      todos,

      allTodosCount,
      completedTodosCount,
      leftTodosCount,

      todoAddItem,
      todoChangeState,
      TodoDelete,
    }
  },
  {
    persist: {
      pick: ['todos'],
    },
  },
)
