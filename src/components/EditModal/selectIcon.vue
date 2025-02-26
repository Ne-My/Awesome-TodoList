<script setup lang="ts">
import { useEditModalStore } from '@/stores/editModalStore'
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { inject, ref, useTemplateRef } from 'vue'
import IconSmile from '@/components/icons/IconSmile.vue'
import SelectIconsList from '@/components/SelectIconsList.vue'
import { SHOW_SELECT_ICON_TOOLTIP } from '.'

const { editingField } = storeToRefs(useEditModalStore())
const showSelectIconTooltip = inject(SHOW_SELECT_ICON_TOOLTIP)!

const selectIconRef = ref<HTMLDivElement>()
onClickOutside(selectIconRef, () => (showSelectIconTooltip.value = false))

function selectIconAndCloseList(iconId: number) {
  editingField.value.icon = iconId
  showSelectIconTooltip.value = false
}

function removeIcon() {
  editingField.value.icon = 0
  showSelectIconTooltip.value = false
}
</script>

<template>
  <div class="relative">
    <Transition name="fade">
      <div
        v-if="showSelectIconTooltip"
        ref="selectIconRef"
        class="absolute top-9 -left-2 bg-white font-medium text-xs text-slate-900 rounded-lg px-3 py-4 z-30 drop-shadow-[0_12px_15px_rgb(0_0_0/0.15)] border-1 border-slate-300"
      >
        <div
          class="absolute rotate-45 bg-inherit size-3 -top-1.5 left-3.5 border border-transparent border-l-inherit border-t-inherit"
        ></div>
        <SelectIconsList :selected-icon-number="editingField.icon || 0" @icon-select="selectIconAndCloseList" />
        <div
          class="w-full h-10 flex-center rounded-lg mt-3 border bg-transparent hover:bg-red-500 hover:text-white transition-colors cursor-pointer border-red-500 text-red-500 font-medium text-md"
          @click="removeIcon"
        >
          Remove Icon
        </div>
      </div>
    </Transition>
    <div
      class="flex-center cursor-pointer"
      :class="{ 'pointer-events-none': showSelectIconTooltip }"
      @click="showSelectIconTooltip = true"
    >
      <IconSmile v-if="!editingField.icon" />
      <div
        v-else
        class="size-5 flex-center ml-1"
        :class="{ 'pointer-events-none': showSelectIconTooltip }"
        @click="showSelectIconTooltip = true"
      >
        <img :src="`/icons/image ${editingField.icon}.png`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
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
