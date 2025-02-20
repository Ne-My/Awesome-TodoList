<script setup lang="ts">
import draggableComponent from 'vuedraggable'
// @ts-ignore
import TodosItem from '@/components/TodosItem.vue'
// @ts-ignore
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
</script>

<template>
  <div class="h-[40vh] overflow-y-auto px-3 thin-scroll pb-7">
    <draggableComponent v-model="todoStore.todos" item-key="id" group="todos" class="flex flex-col gap-3">
      <template #item="{ element: todo }">
        <TodosItem :key="todo.id" :id="todo.id" :name="todo.name" :done="todo.done" />
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
