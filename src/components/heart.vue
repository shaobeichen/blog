<template>
  <div class="heart" @click="add">
    <div class="image" :class="{ animate: state, 'is-active': heart.count }" />
    <div class="text" v-html="heart.count" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useHeartStore } from '@/store/index'
import { sleep, throttle } from '@/utils/index'

const heart = useHeartStore()
const state = ref(false)

const add = throttle(async () => {
  heart.addCount()
  state.value = true
  await sleep(500)
  state.value = false
}, 500)
</script>

<style scoped lang="scss">
.heart {
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 20px 0 0;
  .image {
    background-image: url('../assets/image/heart.png');
    background-repeat: no-repeat;
    background-size: 2900%;
    height: 70px;
    width: 70px;
    margin: auto;
    &.animate {
      animation: heart 0.5s steps(28);
      @keyframes heart {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 100%;
        }
      }
    }
    &.is-active {
      background-position: 100%;
    }
  }
  .text {
    font-size: 20px;
    color: #fff;
  }
}
</style>
