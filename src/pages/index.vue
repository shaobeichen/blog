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

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'PagesIndex',
  setup() {
    const title = ref(`Hi, I'm Kholid. <br />Front-End Developer.`)
    const description = ref(
      `I'm a self-taught front-end developer based in Indonesia. And focused on building interactive web apps and some browser extensions.`
    )
    return { title, description }
  }
})
</script>

<style scoped lang="scss">
.index {
  color: #e5e7eb;
  background-color: #111827;
  min-height: 100vh;
  .container {
    max-width: 1024px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0 auto;
    .introduce {
      padding-top: 10rem;
      padding-bottom: 12rem;
      .title {
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        background-image: linear-gradient(to bottom right, #60a5fa, #4f46e5);
        font-size: 3rem;
        line-height: 1;
        font-weight: 700;
        margin-bottom: 1rem;
      }
      .description {
        color: #fff;
        max-width: 36rem;
        font-weight: 400;
      }
    }
  }
}
</style>
