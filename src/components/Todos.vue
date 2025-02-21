<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'
import TodosItem from '@/components/TodosItem.vue'
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'

const { completedTodos, unCompletedTodos } = storeToRefs(useTodoStore())
const drag = ref(false)
</script>

<template>
  <div class="h-[58vh] sm:h-[45vh] overflow-y-scroll overflow-x-hidden px-3 thin-scroll pb-4">
    <VueDraggable
      v-model="unCompletedTodos"
      group="uncompleted"
      :animation="100"
      class="flex flex-col gap-3"
      @start="drag = true"
      target=".sort-target"
      @end="nextTick(() => (drag = false))"
    >
      <div class="sort-target flex flex-col gap-3">
        <TodosItem v-for="todo in unCompletedTodos" :key="todo.id" :todo class="enable" />
      </div>
      <TodosItem v-for="todo in completedTodos" :key="todo.id" :todo class="enable" />
    </VueDraggable>
  </div>
</template>
