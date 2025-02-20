<script setup lang="ts">
import VueDraggable from 'vuedraggable'
import TodosItem from '@/components/TodosItem.vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'

const { todos } = storeToRefs(useTodoStore())
</script>

<template>
  <div class="h-[40vh] overflow-y-scroll px-3 thin-scroll pb-7">
    <VueDraggable
      v-model="todos"
      item-key="id"
      group="todos"
      class="flex flex-col gap-3"
      :component-data="{
        tag: 'ul',
        type: 'transition-group',
        name: 'flip-list',
      }"
    >
      <template #item="{ element: todo }">
        <TodosItem :key="todo.id" :todo />
      </template>
    </VueDraggable>
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
.flip-list-move {
  transition: transform 0.5s;
}
</style>
