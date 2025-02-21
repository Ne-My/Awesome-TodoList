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
    class="group bg-white flex items-center justify-between gap-4 rounded-xl shadow-lg px-4 py-3 cursor-pointer border border-slate-300 overflow-hidden"
    @click="checked = !checked"
  >
    <div class="flex items-center gap-2 overflow-hidden w-full">
      <div
        class="shrink-0 size-6 bg-slate-50 border border-slate-300 rounded-md flex items-center justify-center"
        :class="{ 'bg-emerald-200 border-0': checked }"
      >
        <IconCheck v-if="checked" class="size-4 [&>path]:stroke-emerald-500" />
      </div>

      <div
        class="text-sm font-semibold transition-colors before-line-through line-clamp-1 w-full"
        :class="checked ? 'text-slate-400 before:w-[100%]' : 'text-slate-700 before:w-0'"
      >
        {{ name }}
      </div>
    </div>

    <div>
      <IconTrash class="cursor-pointer size-5 [&>path]:hover:stroke-rose-600" @click="todoStore.TodoDelete(id)" />
    </div>
  </div>
</template>

<style lang="postcss">
.before-line-through {
  @apply relative before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-slate-400 before:h-[1.5px] before:transition-[width];
}
</style>
