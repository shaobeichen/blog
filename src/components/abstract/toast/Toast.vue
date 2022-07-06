<template>
  <div class="toast" v-html="message" />
</template>

<script lang="ts" setup>
import { toRefs, onMounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2000
  },
  closeToast: {
    type: Function,
    default: () => ({})
  }
})
const { message, duration, closeToast } = toRefs(props)

onMounted(() => {
  if (duration.value) {
    setTimeout(() => {
      closeToast.value()
    }, duration.value)
  }
})
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
  z-index: $zindex-toast;
  animation: taost 0.5s ease;
  animation-fill-mode: forwards;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  transition: all 0.5s ease;
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
