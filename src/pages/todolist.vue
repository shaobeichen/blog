<template>
  <div class="todo">
    <main class="container">
      <todolist :id="1" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import todolist from '@/components/todolist.vue'
</script>

<style scoped lang="scss">
.todo {
  min-height: 100vh;
  color: #e5e7eb;
  background-color: #111827;
  .container {
    max-width: 1024px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0 auto;
  }
}
</style>
