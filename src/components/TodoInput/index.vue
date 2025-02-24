<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { nextTick, ref, watch } from 'vue'
import addButton from './addButton.vue'
import textInput from './textInput.vue'
import selectIconButton from './selectIconButton.vue'

const todoStore = useTodoStore()
const inputVal = ref('')

const addTodo = () => {
  const val = inputVal.value
  if (val === '') {
    return showFieldEmptyTooltip()
  }
  todoStore.addTodo(val, selectedIconNumber.value)
  selectedIconNumber.value = 0
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

const showSelectIconTooltip = ref(false)
const selectedIconNumber = ref<number>(0)

watch(inputVal, () => {
  showFieldEmptyTooltipErrorOnInput.value = false
  showSelectIconTooltip.value = false
})
</script>

<template>
  <div
    class="absolute bottom-4 sm:-bottom-[25px] [--margin-from-side:32px] w-[calc(100%-var(--margin-from-side)*2)] bg-slate-900 rounded-lg p-1 h-14 flex items-center gap-1"
  >
    <selectIconButton v-model="showSelectIconTooltip" v-model:selected-icon-number="selectedIconNumber" />
    <div v-if="selectedIconNumber > 0" class="size-7 mr-1">
      <img @click="selectedIconNumber = 0" :src="`/icons/image ${selectedIconNumber}.png`" />
    </div>
    <textInput
      v-model:text="inputVal"
      v-model:tooltip-state="showFieldEmptyTooltipErrorOnInput"
      @add-todo="addTodo"
      @close-field-empty-tooltip="closeFieldEmptyTooltip"
    />
    <addButton @add-todo="addTodo" />
  </div>
</template>
