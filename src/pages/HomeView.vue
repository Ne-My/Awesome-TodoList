<script setup lang="ts">
import Header from '@/components/Header.vue'
// @ts-ignore
import AddTodoField from '@/components/AddTodoField.vue'
// @ts-ignore
import TodoList from '@/components/TodoList.vue'
</script>

<template>
  <div class="flex flex-col gap-9 bg-white rounded-xl shadow-md min-w-[500px] p-8 pb-12 relative">
    <Header />

    <TodoList />

    <AddTodoField />
  </div>
</template>
