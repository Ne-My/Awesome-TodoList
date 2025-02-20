<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

defineProps<{
  id: string
  name: string
  done: boolean
}>()

const todoStore = useTodoStore()
</script>

<template>
  <div
    class="group bg-white flex justify-between items-center rounded-xl shadow-lg px-4 py-5 cursor-pointer border border-slate-300"
  >
    <div class="flex items-center gap-3">
      <div
        class="size-6 bg-slate-50 border border-slate-300 rounded-md flex items-center justify-center"
        :class="{ 'bg-emerald-200 border-0': done }"
        @click="() => todoStore.todoChangeState(id, !done)"
      >
        <IconCheck v-if="done" class="size-4 [&>path]:stroke-emerald-500" />
      </div>

      <span class="text-slate-700 text-sm font-semibold" :class="{ 'line-through text-rose-400': done }">{{
        name
      }}</span>
    </div>

    <div class="flex gap-3 items-center">
      <IconTrash class="cursor-pointer [&>path]:hover:stroke-rose-600" @click="todoStore.TodoDelete(id)" />
    </div>
  </div>
</template>
