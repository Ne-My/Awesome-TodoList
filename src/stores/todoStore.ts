import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { nextTick, ref, watch } from 'vue'

export const useTodoStore = defineStore(
  'todo',
  () => {
    const todos = ref<Todo[]>([])

    watch(
      todos,
      async (val) => {
        await nextTick()
        todos.value = val.sort((a, b) => {
          if (a.checked && !b.checked) return 1
          else if (b.checked && !a.checked) return -1
          return 0
        })
      },
      {
        deep: true,
      },
    )

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
