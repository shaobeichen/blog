<template>
  <div class="index">
    <main class="container">
      <section class="introduce">
        <h1 class="title" v-html="title" />
        <p class="description" v-html="description" />
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const title = ref(`Hi, I'm Kholid. <br />Front-End Developer.`)
const description = ref(
  `I'm a self-taught front-end developer based in Indonesia. And focused on building interactive web apps and some browser extensions.`
)
</script>

<style scoped lang="scss">
.index {
  min-height: 100vh;
  color: #e5e7eb;
  background-color: #111827;

  .container {
    max-width: 1024px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0 auto;

    .introduce {
      padding-top: 10rem;
      padding-bottom: 12rem;

      .title {
        margin-bottom: 1rem;
        font-size: 3rem;
        font-weight: 700;
        line-height: 1;
        color: transparent;
        background-image: linear-gradient(to bottom right, #60a5fa, #4f46e5);
        background-clip: text;
      }

      .description {
        max-width: 36rem;
        font-weight: 400;
        color: #fff;
      }
    }
  }
}
</style>
