<script setup lang="ts">
import Header from '@/components/Header.vue'
import TodoInput from '@/components/TodoInput/index.vue'
import Todos from '@/components/Todos.vue'
</script>

<template>
  <div class="w-screen h-screen overflow-hidden sm:grid place-items-center bg-indigo-500 sm:px-4">
    <div
      class="flex flex-col gap-4 bg-white sm:rounded-xl shadow-sm w-screen h-screen sm:h-auto sm:max-w-[500px] p-8 pb-12 relative"
    >
      <Header />
      <Todos />
      <TodoInput />
    </div>
  </div>
</template>
