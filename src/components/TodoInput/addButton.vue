<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
defineEmits(['add-todo'])
</script>

<template>
  <div
    class="flex-center h-full aspect-square cursor-pointer rounded-[5px] bg-transparent transition-colors hover:bg-[#eee] [&_path]:hover:stroke-slate-600"
    @click="$emit('add-todo')"
  >
    <IconPlus />
  </div>
</template>
