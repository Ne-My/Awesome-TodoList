<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const todoStore = useTodoStore()
const { completedTodos, unCompletedTodos } = storeToRefs(todoStore)
const allTodosLength = computed(() => completedTodos.value.length + unCompletedTodos.value.length)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col text-center">
      <h1 class="text-xl font-bold text-slate-700">Awesome TodoList</h1>
      <span class="text-[12px] text-slate-400">Add anything you want and have full controll on them!</span>
    </div>

    <div class="flex flex-wrap justify-center gap-3">
      <span class="info-badge bg-lime-500">All : {{ allTodosLength }}</span>
      <span class="info-badge bg-rose-500">Remain : {{ unCompletedTodos.length }}</span>
      <span class="info-badge bg-indigo-400">completed : {{ completedTodos.length }}</span>
    </div>
  </div>
</template>
