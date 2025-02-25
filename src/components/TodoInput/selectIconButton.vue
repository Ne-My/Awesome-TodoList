<script setup lang="ts">
import IconSmile from '@/components/icons/IconSmile.vue'
import { onClickOutside } from '@vueuse/core'
import { useTemplateRef } from 'vue'
const showSelectIconTooltip = defineModel<boolean>({ required: true })
const selectedIconNumber = defineModel<number>('selected-icon-number', { required: true })

const modal = useTemplateRef('select-icon-wrapper')
onClickOutside(modal, () => {
  showSelectIconTooltip.value = false
})
</script>

<template>
  <div class="relative h-full aspect-square" ref="select-icon-wrapper">
    <Transition name="fade">
      <div
        v-if="showSelectIconTooltip"
        class="absolute bottom-16 left-0 bg-white font-medium text-xs text-slate-900 rounded-lg p-3 z-50 drop-shadow-md"
      >
        <div class="px-3 grid grid-cols-6 gap-2 w-max max-h-[160px] overflow-y-auto overflow-x-hidden">
          <div
            v-for="i in 31"
            class="size-6 cursor-pointer bg-transparent transition-colors box-content rounded-md p-2 hover:bg-slate-100 border"
            :class="selectedIconNumber === i ? 'bg-slate-100 border-slate-300' : 'border-transparent'"
            @click="selectedIconNumber = i"
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
