<template>
  <h1>这里是个人首页{{ count }}</h1>
  <div>今天引入了vue3、vue-router4和pinia2，添加了路由</div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'index',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0)
    return { count }
  },
})
</script>

<style scoped lang="scss"></style>
