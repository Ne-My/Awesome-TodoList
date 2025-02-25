import type { InjectionKey, Ref } from 'vue'

export { default as EditModal } from './index.vue'

export const SHOW_SELECT_ICON_TOOLTIP: InjectionKey<Ref<boolean>> = Symbol('show-select-icon-tooltip')
