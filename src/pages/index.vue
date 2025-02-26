<script setup lang="ts">
import Header from '@/components/Header.vue'
import { TodoInput } from '@/components/TodoInput'
import Todos from '@/components/Todos.vue'

import { EditModal } from '@/components/EditModal'
</script>

<template>
  <EditModal />
  <div class="w-screen h-screen overflow-hidden sm:grid place-items-center bg-indigo-500 sm:px-4">
    <div
      class="flex flex-col gap-4 bg-white sm:rounded-xl shadow-xs w-screen h-screen sm:h-auto sm:max-w-[500px] px-8 pt-4 pb-12 relative"
    >
      <Header />
      <Todos />
      <TodoInput />
    </div>
  </div>
</template>
