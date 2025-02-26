<script setup lang="ts">
defineProps<{
  selectedIconNumber: number
}>()
defineEmits(['icon-select'])
</script>

<template>
  <div
    class="pr-3 grid grid-cols-4 md:grid-cols-6 gap-2 w-max max-h-[160px] overflow-y-auto overflow-x-hidden thin-scroll"
  >
    <div
      v-for="i in 31"
      class="relative size-6 cursor-pointer transition-colors box-content rounded-md p-2 hover:bg-slate-100 border"
      :class="selectedIconNumber === i ? 'bg-slate-100 border-slate-300' : 'bg-transparent border-transparent'"
      @click="$emit('icon-select', i)"
    >
      <img
        v-if="selectedIconNumber === i"
        src="/icons/tick.png"
        class="size-3 absolute left-1/2 -translate-x-1/2 -bottom-1.5"
      />
      <img :src="`./icons/image ${i}.png`" />
    </div>
  </div>
</template>

<style scoped></style>
