<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import type { Todo } from '@/types'
import { toRefs } from 'vue'
import { useEditModalStore } from '@/stores/editModalStore'

const props = defineProps<{ todo: Todo }>()
const { id, name, icon, checked } = toRefs(props.todo)

const todoStore = useTodoStore()
const { deleteTodo } = todoStore

const { editTodoModal } = useEditModalStore()
</script>

<template>
  <div
    class="group bg-white flex items-center justify-between gap-4 rounded-xl shadow-lg px-4 py-3 cursor-pointer border border-slate-300 overflow-hidden max-sm:[&.sortable-chosen]:rotate-1"
    @click="editTodoModal(props.todo)"
  >
    <div class="flex items-center gap-2 overflow-hidden w-full">
      <div
        class="shrink-0 size-6 bg-slate-50 border border-slate-300 rounded-md flex items-center justify-center"
        :class="{ 'bg-emerald-200 border-0': checked }"
        @click.stop="checked = !checked"
      >
        <IconCheck v-if="checked" class="size-4 [&>path]:stroke-emerald-500" />
      </div>
      <div
        class="text-sm font-semibold transition-colors before-line-through line-clamp-1 w-full flex gap-1.5"
        :class="checked ? 'text-slate-400 before:w-[100%]' : 'text-slate-700 before:w-0'"
      >
        <div v-if="icon" class="size-6 flex-center" :class="{ 'opacity-80 grayscale': checked }">
          <img :src="`./icons/image ${icon}.png`" />
        </div>
        {{ name }}
      </div>
    </div>

    <div>
      <IconTrash class="cursor-pointer size-5 hover:[&>path]:stroke-rose-600" @click.stop="deleteTodo(id)" />
    </div>
  </div>
</template>

<style>
@reference '@/assets/main.css';
.before-line-through {
  @apply relative;
  &::before {
    @apply content-[''] absolute top-1/2 left-0 -translate-y-1/2 bg-slate-400 h-[1.5px] transition-[width];
  }
}
</style>
