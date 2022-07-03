<template>
  <div class="toast" v-html="message" />
</template>

<script lang="ts" setup>
import { toRefs } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2000
  }
})
const { message } = toRefs(props)
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100px;
  min-height: 30px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  animation: taost 1.5s ease;
}

@keyframes taost {
  0% {
    top: 40%;
    opacity: 0;
  }
  100% {
    top: 50%;
    opacity: 1;
  }
}
</style>
