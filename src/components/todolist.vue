<template>
  <div class="todo">
    <h1 class="title" v-html="title" />
    <button class="add" @click="add">添加</button>
    <div class="table">
      <div class="head">
        <div v-for="(item, index) in head" :key="index" class="item">{{ item }}</div>
      </div>
      <div v-if="body.length" class="body">
        <div v-for="item in body" :key="item.id" class="row">
          <div v-for="(ite, i) in Object.values(item)" :key="i" class="item">
            <div v-if="isStutas(Object.keys(item)[i])">
              {{ statusTitle(item.status) }}
            </div>
            <div v-else>{{ ite }}</div>
          </div>
          <div class="action">
            <div v-if="!isFinish(item.status)" class="action-item" @click="submit(item.id)">
              完成
            </div>
            <div class="action-item" @click="deleteData(item.id)">删除</div>
          </div>
        </div>
      </div>
      <div v-else class="empty">暂无数据</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'

interface Body {
  id: number
  title: string
  status: number
}
interface Props {
  id: number
}

const STATUS_MAP = [
  { id: 10, title: '未完成' },
  { id: 20, title: '已完成' }
]

const props = defineProps<Props>()
const title = ref<string>('这是TodoList。<br />一个测试Vue3特性的基础案例。<br /><br />')
const head = ref<string[]>(['ID', '标题', '状态', '操作'])
const body = ref<Body[]>([])

onMounted(() => {
  console.log('props: ', props)
})

const statusTitle = computed(() => (val: number) => STATUS_MAP.find(item => val === item.id)?.title)
const isStutas = computed(() => (val: string) => val === 'status')
const isFinish = computed(() => (val: number) => val === 20)

const add = () => {
  body.value.push({
    id: body.value.length + 1,
    title: '新增的数据',
    status: 10
  })
}
const submit = (id: number) => {
  const item = body.value.find(item => item.id === id)
  if (item) item.status = 20
}
const deleteData = (id: number) => {
  const index = body.value.findIndex(item => item.id === id)
  if (index >= 0) body.value.splice(index, 1)
}
</script>

<style scoped lang="scss">
.todo {
  position: relative;
  padding: 10rem 0;
  .title {
    font-size: 30px;
  }
  .add {
    width: 160px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 0;
    font-size: 16px;
    cursor: pointer;
  }
  .table {
    margin-top: 30px;
    .head {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .item {
        width: 180px;
        height: 40px;
        line-height: 40px;
      }
    }
    .body {
      .row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .item {
          width: 180px;
          height: 40px;
          line-height: 40px;
        }
        .action {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          .action-item {
            margin-right: 10px;
            cursor: pointer;
            color: #5b8df4;
          }
        }
      }
    }
    .empty {
      font-size: 16px;
      color: #999;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
