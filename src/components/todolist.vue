<template>
  <div class="todo">
    <h1 ref="titleRef" class="title" v-html="title" />
    <ul class="features">
      <li v-for="(item, index) in features" :key="index" class="features-item" v-html="item" />
    </ul>
    <v-button class="add" type="primary" @click="add">添加</v-button>
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
import { computed, onMounted, ref, watchEffect } from 'vue'
import Toast from '@/components/abstract/toast/toast'

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

const title = ref<string>('这是TodoList。<br />')
const features = ref<Array<string>>([
  '一个专门用来练习 Vue3.2 + Vite2 的案例',
  '一个TypeScript很好的入门案例',
  '一个Vue3.2命令式组件案例，组件支持Vue2.x命令式调用',
  '有 Vue3 + Setup 组件写法，你可以从0到1学会开发 Button 和 Toast 组件',
  '有 jest + TypeScript 入门写法，写出第一个 Vue 组件测试用例，查看覆盖率',
  '支持 eslint、prettier、stylelint、commitlint、husky 等规范'
])
const head = ref<Array<string>>(['ID', '标题', '状态', '操作'])
const body = ref<Array<Body>>([])
const titleRef = ref<null>(null)

const statusTitle = computed(() => (val: number) => STATUS_MAP.find(item => val === item.id)?.title)
const isStutas = computed(() => (val: string) => val === 'status')
const isFinish = computed(() => (val: number) => val === 20)

watchEffect(
  () => {
    console.log(titleRef.value)
  },
  {
    flush: 'post'
  }
)

onMounted(() => {
  console.log('props: ', props)
  console.log(titleRef.value)
})

const add = () => {
  body.value.push({ id: body.value.length + 1, title: '新增的数据', status: 10 })
  Toast('添加成功')
}
const submit = (id: number) => {
  const item = body.value.find(item => item.id === id)
  if (item) item.status = 20
}
const deleteData = (id: number) => {
  const index = body.value.findIndex(item => item.id === id)
  if (index >= 0) {
    body.value.splice(index, 1)
    Toast('删除成功')
  }
}
</script>

<style scoped lang="scss">
.todo {
  position: relative;
  padding: 10rem 0;
  .title {
    font-size: 40px;
    color: #5d91f6;
    font-weight: 600;
  }
  .features {
    padding: 20px 0;
    .features-item {
      position: relative;
      font-size: 16px;
      line-height: 1.7;
      padding-left: 20px;
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
      }
    }
  }
  .add {
    width: 160px;
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
