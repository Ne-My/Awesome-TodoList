<script setup lang="ts">
const inputVal = defineModel<string>('text', { required: true })
const showFieldEmptyTooltipErrorOnInput = defineModel<boolean>('tooltip-state', { required: true })
defineEmits(['close-field-empty-tooltip', 'add-todo'])
</script>

<template>
  <div class="relative grow">
    <Transition name="fade">
      <div
        v-if="showFieldEmptyTooltipErrorOnInput"
        class="absolute -top-16 left-0 bg-red-400 font-medium text-xs text-white rounded-lg py-3 px-8 z-50 drop-shadow-md"
        @click="$emit('close-field-empty-tooltip')"
      >
        <span class="absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45 size-2 bg-[inherit]"></span>
        Field is empty!
      </div>
    </Transition>
    <input
      @keypress.enter="$emit('add-todo')"
      v-model="inputVal"
      class="w-full bg-transparent text-slate-50 outline-none text-[14px]"
      type="text"
      placeholder="Todo: Shower, gym, and more..."
    />
  </div>
</template>

<style scoped lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
