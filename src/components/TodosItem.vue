<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import type { Todo } from '@/types'
import { toRefs } from 'vue'

const props = defineProps<{ todo: Todo }>()
const { id, name, checked } = toRefs(props.todo)

const todoStore = useTodoStore()
</script>

<template>
  <div
    class="group bg-white flex justify-between items-center rounded-xl shadow-lg px-4 py-5 cursor-pointer border border-slate-300"
  >
    <div class="flex items-center gap-3">
      <div
        class="size-6 bg-slate-50 border border-slate-300 rounded-md flex items-center justify-center"
        :class="{ 'bg-emerald-200 border-0': checked }"
        @click="checked = !checked"
      >
        <IconCheck v-if="checked" class="size-4 [&>path]:stroke-emerald-500" />
      </div>

      <span class="text-slate-700 text-sm font-semibold" :class="{ 'line-through text-rose-400': checked }">{{
        name
      }}</span>
    </div>

    <div class="flex gap-3 items-center">
      <IconTrash class="cursor-pointer [&>path]:hover:stroke-rose-600" @click="todoStore.TodoDelete(id)" />
    </div>
  </div>
</template>
