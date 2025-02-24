<script setup lang="ts">
import IconPlus from '@/components/icons/IconPlus.vue'
import { useTodoStore } from '@/stores/todoStore'
import { nextTick, ref, watch } from 'vue'

const todoStore = useTodoStore()
const inputVal = ref('')

const addTodo = () => {
  const val = inputVal.value
  if (val === '') {
    return showFieldEmptyTooltip()
  }
  todoStore.addTodo(val)
  inputVal.value = ''
}

const showFieldEmptyTooltipErrorOnInput = ref(false)
let tooltipTimeoutInstance: number
function showFieldEmptyTooltip() {
  closeFieldEmptyTooltip()
  nextTick(() => {
    showFieldEmptyTooltipErrorOnInput.value = true
    tooltipTimeoutInstance = setTimeout(() => {
      showFieldEmptyTooltipErrorOnInput.value = false
    }, 3000)
  })
}
function closeFieldEmptyTooltip() {
  showFieldEmptyTooltipErrorOnInput.value = false
  if (tooltipTimeoutInstance) clearTimeout(tooltipTimeoutInstance)
}
watch(inputVal, () => {
  showFieldEmptyTooltipErrorOnInput.value = false
})
</script>

<template>
  <div
    class="absolute bottom-4 sm:-bottom-[25px] [--margin-from-side:32px] w-[calc(100%-var(--margin-from-side)*2)] bg-slate-900 rounded-lg"
  >
    <div class="relative">
      <Transition name="fade">
        <div
          v-if="showFieldEmptyTooltipErrorOnInput"
          class="absolute -top-16 left-0 bg-red-400 font-medium text-xs text-white rounded-lg py-3 px-8 z-50 drop-shadow-md"
          @click="closeFieldEmptyTooltip"
        >
          <span class="absolute left-1/2 -bottom-1 -translate-x-1/2 rotate-45 size-2 bg-red-400"></span>
          Field is empty!
        </div>
      </Transition>
      <input
        @keypress.enter="addTodo"
        v-model="inputVal"
        class="w-full bg-transparent text-slate-50 outline-none py-4 pr-12 pl-6 text-[14px]"
        type="text"
        placeholder="Todo: Shower, gym, and more..."
      />
    </div>
    <div
      class="absolute top-1/2 -translate-y-1/2 right-[3px] p-3 cursor-pointer rounded-[5px] bg-transparent transition-colors hover:bg-[#eee] [&_path]:hover:stroke-slate-600"
      @click="addTodo"
    >
      <IconPlus />
    </div>
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
  transform: translateY(20px);
}
</style>
