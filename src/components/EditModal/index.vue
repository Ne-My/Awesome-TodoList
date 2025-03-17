<script setup lang="ts">
import { useEditModalStore } from '@/stores/editModalStore'
import { onClickOutside, whenever } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { nextTick, provide, ref, watch } from 'vue'
import { SHOW_SELECT_ICON_TOOLTIP } from '.'
import SelectIcon from './selectIcon.vue'

const editModal = useEditModalStore()
const { openModal, editingField, errors, todoItem } = storeToRefs(editModal)

const modal = ref<HTMLDivElement>()
onClickOutside(modal, () => {
  openModal.value = false
  showSelectIconTooltip.value = false
})

const showSelectIconTooltip = ref(false)
provide(SHOW_SELECT_ICON_TOOLTIP, showSelectIconTooltip)

watch(
  () => editingField.value.name,
  (val) => {
    if (val.length) errors.value.title = false
  },
)

const titleInputRef = ref<HTMLInputElement>()
whenever(openModal, async () => {
  await nextTick()
  titleInputRef.value?.focus?.()
})

function submitEdit(e: KeyboardEvent) {
  if (e.key === 'Enter') editModal.editTodo()
}
</script>

<template>
  <Transition name="fade">
    <div v-if="openModal" class="fixed inset-0 bg-black/50 z-40 flex-center cursor-pointer">
      <div
        ref="modal"
        class="w-[90vw] max-w-[470px] bg-white rounded-xl shadow-2xl z-50 p-6 flex flex-col gap-6 get-up-animation cursor-auto"
      >
        <!-- title -->
        <div v-if="todoItem" class="text-xl font-bold text-gray-600 gap-2 border-b border-b-gray-200 pb-3">
          <img v-if="todoItem.icon" :src="`./icons/image ${todoItem.icon}.png`" class="float-left mr-2" />
          {{ todoItem.name }}
        </div>
        <!-- title Input -->
        <div class="flex flex-col gap-2">
          <span class="text-slate-600 font-semibold text-sm">Title :</span>
          <div class="w-full flex items-center border border-slate-300 rounded-lg p-2 h-11 gap-2">
            <select-icon />
            <input
              ref="titleInputRef"
              class="h-full bg-white outline-hidden w-full text-sm font-medium text-slate-800"
              placeholder="Enter title of todo"
              v-model="editingField.name"
              @keydown="submitEdit"
            />
          </div>
          <div v-if="errors.title" class="text-xs font-light">This field can't be empty!</div>
        </div>

        <!-- note -->
        <div class="flex flex-col gap-2">
          <span class="text-slate-600 font-semibold text-sm">Note (Optional):</span>
          <textarea
            class="bg-white outline-hidden rounded-lg border border-slate-300 p-2 w-full resize-none text-sm font-medium text-slate-800"
            rows="4"
            placeholder="Enter todo Note"
            v-model="editingField.note"
          />
        </div>

        <!-- buttons -->
        <div class="flex flex-col sm:flex-row gap-2">
          <div
            class="w-full h-11 cursor-pointer flex-center text-white bg-blue-600 transition-colors hover:bg-blue-700 rounded-xl font-medium text-sm"
            @click="editModal.editTodo()"
          >
            Save Edit
          </div>
          <div
            class="w-full h-11 cursor-pointer flex-center text-slate-600 border-2 border-slate-300 bg-transparent hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl font-medium text-sm"
            @click="openModal = false"
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.get-up-animation {
  animation: get-up-animation 0.4s ease;
}
@keyframes get-up-animation {
  0% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
