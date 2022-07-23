<template>
  <section class="footer">
    <div class="list">
      <a v-for="(item, i) in footer" :key="i" :href="item.url" target="_blank" class="item">
        <img :src="item.image" class="image" />
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import github from '@/assets/image/github.png'

const footer = ref([
  {
    url: 'https://github.com/shaobeichen/blog',
    image: github
  }
])
</script>

<style scoped lang="scss">
.footer {
  padding: 50px 0;
  margin: 0 auto;
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    .item {
      display: block;
      .image {
        width: 50px;
        height: 50px;
        display: block;
      }
    }
  }
}
</style>
