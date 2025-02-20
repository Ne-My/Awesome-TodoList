<script setup lang="ts">
import Header from '@/components/Header.vue'
import AddTodoField from '@/components/AddTodoField.vue'
import Todos from '@/components/Todos.vue'
</script>

<template>
  <div class="flex flex-col gap-9 bg-white rounded-xl shadow-md min-w-[500px] p-8 pb-12 relative">
    <Header />

    <Todos />

    <AddTodoField />
  </div>
</template>
