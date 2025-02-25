<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
const compeletedTodosCount = computed(() => todos.value.filter((item) => item.checked).length)
const unCompeletedTodosCount = computed(() => todos.value.length - compeletedTodosCount.value)
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex flex-col text-center">
      <h1 class="text-xl font-bold text-slate-700">Awesome TodoList</h1>
      <span class="text-[12px] text-slate-400">Add anything you want and have full controll on them!</span>
    </div>

    <div class="flex flex-wrap justify-center gap-3">
      <span class="info-badge bg-lime-500">All : {{ todos.length }}</span>
      <span class="info-badge bg-rose-500">Remain : {{ unCompeletedTodosCount }}</span>
      <span class="info-badge bg-indigo-400">completed : {{ compeletedTodosCount }}</span>
    </div>
  </div>
</template>
