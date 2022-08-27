<template>
  <button class="button" :class="buttonClass" :disabled="disabled" v-bind="attrisbutes">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script lang="ts" setup>
import { toRefs, computed, useAttrs } from 'vue'
import { buttonProps } from './types'

const props = defineProps(buttonProps)

const { type, size, disabled, ...attrs } = toRefs(props)

const buttonClass = computed(() => {
  return [
    `button--${type.value}`,
    `button--${size.value}`,
    {
      'button--disabled': disabled.value
    }
  ]
})

const attrisbutes = computed(() => {
  return {
    ...useAttrs(),
    ...attrs
  }
})
</script>

<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  margin: 0;
  padding: 0;
  border-radius: 2px;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  &.button--default {
    border-color: #1989fa;
    background: #1989fa;
    color: #fff;
  }
  &.button--primary {
    border-color: #ebedf0;
    background: #fff;
    color: #323233;
  }
  &.button--success {
    border-color: #07c160;
    background: #07c160;
    color: #fff;
  }
  &.button--normal {
    padding: 0 15px;
  }
  &.button--large {
    width: 100%;
    height: 48px;
    line-height: 48px;
  }
  &.button--small {
    padding: 0 8px;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
  }
  &.button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
