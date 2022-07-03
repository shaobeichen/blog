<template>
  <section class="introduce">
    <h1 class="title" v-html="title" />
    <p class="description" v-html="description" />
    <div class="description">
      <br /><br />
      <a @click="linkTodoList">这里</a>
      我写了一个用于测试Vue3特性的基础案例，类型是TodoList，用来了解Vue3的特性最合适不过了。
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref(`你好，我是少北晨。 <br />一位前端工程师。`)
const description = ref(
  `我是一名自学的前端工程师，在前端领域有丰富的实战经验，能够给刚入行的朋友一些职业规划上的指导及技术上的分享。
  <br /><br />
  主要写一些 Vue.js、Nuxt.js项目，平时会写一些 Node.js，想尝试下Java、Go、Swift。
  <br /><br />
  在业余时间，我喜欢看科幻电影，比如《星际穿越》《蝴蝶效应》《土拨鼠之日》《千与千寻》等。
  <br /><br />
  我会发一些视频在 <a href="https://space.bilibili.com/13310258" target="_blank">bilibili</a> 上。
  `
)

const linkTodoList = () => router.push('/todolist')
</script>

<style scoped lang="scss">
.introduce {
  padding-top: 10rem;
  padding-bottom: 12rem;
  .title {
    margin-bottom: 1rem;
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.3;
    color: transparent;
    background-image: linear-gradient(to bottom right, #60a5fa, #4f46e5);
    -webkit-background-clip: text;
    background-clip: text;
  }
  .description {
    max-width: 36rem;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
  }
  .description ::v-deep(a) {
    font-weight: 600;
    color: #5671ee;
    cursor: pointer;
  }
}
</style>
