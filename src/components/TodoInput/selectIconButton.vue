<script setup lang="ts">
import IconSmile from '@/components/icons/IconSmile.vue'
import { onClickOutside } from '@vueuse/core'
import { inject, useTemplateRef } from 'vue'
import { SELECTED_ICON_NUMBER, SHOW_SELECT_ICON_TOOLTIP } from '.'

const showSelectIconTooltip = inject(SHOW_SELECT_ICON_TOOLTIP)!

const selectedIconNumber = inject(SELECTED_ICON_NUMBER)!

const modal = useTemplateRef('select-icon-wrapper')
onClickOutside(modal, () => {
  showSelectIconTooltip.value = false
})
function selectIconAndCloseList(iconId: number) {
  selectedIconNumber.value = iconId
  showSelectIconTooltip.value = false
}
</script>

<template>
  <div class="relative h-full aspect-square" ref="select-icon-wrapper">
    <Transition name="fade">
      <div
        v-if="showSelectIconTooltip"
        class="absolute bottom-16 left-0 bg-white font-medium text-xs text-slate-900 rounded-lg px-3 py-4 z-50 drop-shadow-2xl border-1 border-slate-300"
      >
        <div
          class="pr-3 grid grid-cols-4 md:grid-cols-6 gap-2 w-max max-h-[160px] overflow-y-auto overflow-x-hidden thin-scroll"
        >
          <div
            v-for="i in 31"
            class="size-6 cursor-pointer bg-transparent transition-colors box-content rounded-md p-2 hover:bg-slate-100 border"
            :class="selectedIconNumber === i ? 'bg-slate-100 border-slate-300' : 'border-transparent'"
            @click="selectIconAndCloseList(i)"
          >
            <img :src="`/icons/image ${i}.png`" />
          </div>
        </div>
        <span class="absolute left-5 -bottom-1 rotate-45 size-2 bg-[inherit]"></span>
      </div>
    </Transition>
    <div
      class="h-full flex-center cursor-pointer rounded-[5px] bg-transparent transition-colors hover:bg-[#eee] hover:[&_path]:stroke-slate-600"
      @click="showSelectIconTooltip = !showSelectIconTooltip"
    >
      <IconSmile />
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
  transform: translateY(-20px);
}
</style>
