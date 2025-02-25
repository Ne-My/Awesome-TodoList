import type { InjectionKey, Ref } from 'vue'

export { default as TodoInput } from './TodoInput.vue'

export const SHOW_SELECT_ICON_TOOLTIP: InjectionKey<Ref<boolean>> = Symbol('show-select-icon-tooltip')
export const SELECTED_ICON_NUMBER: InjectionKey<Ref<number>> = Symbol('selected-icon-number')
export const SHOW_EMPTY_FIELD_ERROR: InjectionKey<Ref<boolean>> = Symbol('show-empty-field-error')
export const INPUT_VALUE: InjectionKey<Ref<string>> = Symbol('input-value')
