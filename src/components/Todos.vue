<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import TodosItem from '@/components/TodosItem.vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'

const { todos } = storeToRefs(useTodoStore())
const drag = ref(false)
</script>

<template>
  <div class="h-[58vh] sm:h-[45vh] overflow-y-scroll overflow-x-hidden px-3 thin-scroll pb-4">
    <VueDraggable
      v-model="todos"
      group="uncompleted"
      :animation="100"
      @start="drag = true"
      target=".sort-target"
      @end="nextTick(() => (drag = false))"
    >
      <transition-group tag="div" :name="!drag ? 'todo' : undefined" class="sort-target flex flex-col gap-3 relative">
        <TodosItem v-for="todo in todos" :key="todo.id" :todo />
      </transition-group>
    </VueDraggable>
  </div>
</template>

<style scoped>
.todo-move,
.todo-enter-active,
.todo-leave-active {
  transition: all 0.2s ease;
}
.todo-leave-active {
  position: absolute;
  width: 100%;
}
.todo-enter-from,
.todo-leave-to {
  opacity: 0;
}
</style>
