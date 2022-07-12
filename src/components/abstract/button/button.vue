<template>
  <button class="button" :class="buttonClass" :disabled="disabled" v-bind="attrsbites">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { toRefs, computed, useAttrs } from 'vue'
import { ButtonProps } from './types'

const props = defineProps<ButtonProps>()

const { type, size, disabled, ...restProps } = toRefs(props)

const buttonClass = computed(() => (val: number) => val === 20)
const attrsbites = computed(() => {
  return {
    ...useAttrs(),
    ...restProps.value
  }
})
</script>

<style scoped lang="scss">
.button {
  position: relative;
}
</style>
