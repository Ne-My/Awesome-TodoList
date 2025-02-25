<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import { nextTick, provide, ref, watch } from 'vue'
import addButton from './addButton.vue'
import textInput from './textInput.vue'
import selectIconButton from './selectIconButton.vue'
import { SHOW_SELECT_ICON_TOOLTIP, SELECTED_ICON_NUMBER, INPUT_VALUE, SHOW_EMPTY_FIELD_ERROR } from '.'

const todoStore = useTodoStore()
const inputVal = ref('')
provide(INPUT_VALUE, inputVal)

const addTodo = () => {
  const val = inputVal.value
  if (val === '') {
    return showFieldEmptyTooltip()
  }
  todoStore.addTodo(val, selectedIconNumber.value)
  selectedIconNumber.value = 0
  inputVal.value = ''
}

const showEmptyFieldError = ref(false)

provide(SHOW_EMPTY_FIELD_ERROR, showEmptyFieldError)

let tooltipTimeoutInstance: number
function showFieldEmptyTooltip() {
  closeFieldEmptyTooltip()
  nextTick(() => {
    showEmptyFieldError.value = true
    tooltipTimeoutInstance = setTimeout(() => {
      showEmptyFieldError.value = false
    }, 3000)
  })
}
function closeFieldEmptyTooltip() {
  showEmptyFieldError.value = false
  if (tooltipTimeoutInstance) clearTimeout(tooltipTimeoutInstance)
}

const showSelectIconTooltip = ref(false)
const selectedIconNumber = ref<number>(0)

provide(SELECTED_ICON_NUMBER, selectedIconNumber)
provide(SHOW_SELECT_ICON_TOOLTIP, showSelectIconTooltip)

watch(inputVal, () => {
  showEmptyFieldError.value = false
  showSelectIconTooltip.value = false
})
</script>

<template>
  <div
    class="absolute bottom-4 sm:-bottom-[25px] [--margin-from-side:32px] w-[calc(100%-var(--margin-from-side)*2)] bg-slate-900 rounded-lg p-1 h-14 flex items-center gap-1"
  >
    <selectIconButton />
    <div v-if="selectedIconNumber > 0" class="size-7 mr-1 flex-center cursor-pointer">
      <img @click="selectedIconNumber = 0" :src="`/icons/image ${selectedIconNumber}.png`" />
    </div>
    <textInput @add-todo="addTodo" />
    <addButton @add-todo="addTodo" />
  </div>
</template>
