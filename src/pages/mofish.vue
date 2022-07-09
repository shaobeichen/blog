<template>
  <div class="mofish">
    <main class="container">
      <mofish-list :list="list" />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import mofishList from '@/components/mofish-list.vue'
import { getMoFishZhiHuList } from '@/api/mofish'

let list = ref([])

const getList = async () => {
  try {
    const { Data } = await getMoFishZhiHuList({ id: 1, page: 0, type: 'pc' })
    list.value = Data.data
  } catch (e) {}
}

onBeforeMount(getList)
</script>

<style scoped lang="scss">
.mofish {
  min-height: 100vh;
  color: #e5e7eb;
  background-color: #111827;
  .container {
    max-width: 700px;
    padding-right: 1.25rem;
    padding-left: 1.25rem;
    margin: 0 auto;
  }
}
</style>
