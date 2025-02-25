<script setup lang="ts">
import { inject } from 'vue'
import { INPUT_VALUE, SELECTED_ICON_NUMBER, SHOW_EMPTY_FIELD_ERROR } from '.'

const inputVal = inject(INPUT_VALUE)!

const showEmptyFieldError = inject(SHOW_EMPTY_FIELD_ERROR)!

const selectedIconNumber = inject(SELECTED_ICON_NUMBER)!

function deleteIconIfFieldWasEmpty() {
  if (inputVal.value.length === 0) selectedIconNumber.value = 0
}

defineEmits(['add-todo'])
</script>

<template>
  <div class="relative grow">
    <Transition name="fade">
      <div
        v-if="showEmptyFieldError"
        class="absolute -top-16 left-0 bg-red-400 font-medium text-xs text-white rounded-lg py-3 px-8 z-50 drop-shadow-md cursor-pointer"
        @click="showEmptyFieldError = false"
      >
        <span class="absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45 size-2 bg-[inherit]"></span>
        Field is empty!
      </div>
    </Transition>
    <input
      @keypress.enter="$emit('add-todo')"
      @keydown.delete="deleteIconIfFieldWasEmpty"
      v-model="inputVal"
      class="w-full bg-transparent text-slate-50 outline-hidden text-[14px]"
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
