<script setup lang="ts">
import { useEditModalStore } from '@/stores/editModalStore'
import { onClickOutside, whenever } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { nextTick, provide, ref, useTemplateRef, watch } from 'vue'
import { SHOW_SELECT_ICON_TOOLTIP } from '.'
import SelectIcon from './selectIcon.vue'

const editModal = useEditModalStore()
const { openModal, editingField, errors } = storeToRefs(editModal)

const modal = useTemplateRef('modal')
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

const titleInputRef = useTemplateRef('title')
whenever(openModal, async () => {
  await nextTick()
  titleInputRef.value?.focus()
})
</script>

<template>
  <Transition name="fade">
    <div v-if="openModal" class="fixed inset-0 bg-black/50 z-40 flex-center cursor-pointer">
      <div
        ref="modal"
        class="w-screen max-w-[470px] bg-white rounded-xl shadow-2xl z-50 p-6 flex flex-col gap-6 get-up-animation cursor-auto"
      >
        <!-- title -->
        <div class="flex flex-col gap-2">
          <span class="text-slate-800 font-medium text-sm">Title :</span>
          <div class="w-full flex items-center border border-slate-300 rounded-lg p-2 h-11 gap-2">
            <select-icon />
            <input
              ref="title"
              class="h-full bg-white outline-hidden w-full text-sm"
              placeholder="Enter title of todo"
              v-model="editingField.name"
              @keydown.enter="editModal.editTodo()"
            />
          </div>
          <div v-if="errors.title" class="text-xs font-light">This field can't be empty!</div>
        </div>

        <!-- note -->
        <div class="flex flex-col gap-2">
          <span class="text-slate-800 font-medium text-sm">Note (Optional):</span>
          <textarea
            class="bg-white outline-hidden rounded-lg border border-slate-300 p-2 w-full resize-y text-sm"
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
            class="w-full h-11 cursor-pointer flex-center text-slate-600 border border-slate-600 bg-transparent hover:bg-slate-600 hover:text-white transition-colors duration-300 rounded-xl font-medium text-sm"
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
