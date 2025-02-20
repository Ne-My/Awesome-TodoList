<script setup lang="ts">
import draggableComponent from 'vuedraggable'
// @ts-ignore
import TodoListItem from '@/components/TodoListItem.vue'
// @ts-ignore
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <div class="h-[40vh] overflow-y-auto px-3">
    <draggableComponent v-model="todoStore.todos" item-key="id" group="todos" class="flex flex-col gap-3">
      <template #item="{ element: todo }">
        <TodoListItem :key="todo.id" :id="todo.id" :name="todo.name" :done="todo.done" />
      </template>
    </draggableComponent>
  </div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
