<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import { useTodoStore } from '@/stores/todoStore'
import { ref } from 'vue'

const todoStore = useTodoStore()
const inputVal = ref('')

const addTodo = () => {
  const val = inputVal.value
  if (val === '') return
  todoStore.todoAddItem(val)
  inputVal.value = ''
}
</script>

<template>
  <div class="absolute bottom-4 sm:-bottom-[25px] [--margin-from-side:32px] w-[calc(100%-var(--margin-from-side)*2)]">
    <input
      @keypress.enter="addTodo"
      v-model="inputVal"
      class="w-full bg-slate-900 text-slate-50 outline-none py-4 pr-12 pl-6 rounded-lg text-[14px]"
      type="text"
      placeholder="say somthing"
    />
    <IconPlus @click="addTodo" class="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer" />
  </div>
</template>

<style scoped></style>
