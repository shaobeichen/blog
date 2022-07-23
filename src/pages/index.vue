<template>
  <div class="index">
    <main class="container">
      <container />
    </main>
    <v-footer />
  </div>
</template>

<script lang="ts" setup>
import container from '@/components/container.vue'
import vFooter from '@/components/v-footer.vue'
</script>

<style scoped lang="scss">
.index {
  min-height: 100vh;
  color: #e5e7eb;
  background-color: #111827;
  .container {
    max-width: 600px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0 auto;
  }
}
</style>
