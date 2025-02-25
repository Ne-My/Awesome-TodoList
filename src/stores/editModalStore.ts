import type { Todo } from '@/types'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useEditModalStore = defineStore('edit-modal', () => {
  const todoItem = ref<Todo>()
  const openModal = ref(false)

  const editingField = ref<Omit<Todo, 'id' | 'checked'>>({ name: '', icon: undefined, note: undefined })
  const errors = ref({
    title: false,
  })

  function editTodoModal(todo: Todo) {
    todoItem.value = todo
    editingField.value.name = todo.name
    editingField.value.icon = todo.icon
    editingField.value.note = todo.note
    openModal.value = true
  }

  function editTodo() {
    if (!todoItem.value) return
    if (!editingField.value.name) return (errors.value.title = true)
    todoItem.value.name = editingField.value.name
    todoItem.value.icon = editingField.value.icon
    todoItem.value.note = editingField.value.note
    openModal.value = false
  }

  return {
    todoItem,
    errors,
    openModal,
    editingField,

    editTodoModal,
    editTodo,
  }
})
