<template>
  <div class="mofish">
    <div class="head">
      <h1 class="title">摸鱼榜单</h1>
      <img class="logo" :src="mofish" />
    </div>
    <div class="list">
      <template v-if="list.length">
        <a v-for="(item, index) in list" :key="index" class="item" :href="item.Url" target="_blank">
          <div class="item-index" :class="{ 'is-hot': index < 3 }" v-html="index + 1" />
          <div class="item-info">
            <div class="item-title text-ellipsis-2" v-html="item.Title" />
            <div class="item-desc text-ellipsis-2" v-html="item.Desc" />
            <div class="item-hot" v-html="item.hotDesc" />
          </div>
          <img class="item-image" :src="item.imgUrl" />
        </a>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { toRefs } from 'vue'
import mofish from '@/assets/image/mofish.gif'

interface Props {
  list: Array<{
    Title: string
    Desc: string
    Url: string
    imgUrl: string
    hotDesc: string
  }>
}
// props设置默认值用法
// const props = withDefaults(defineProps<Props>(), { list: () => [] })
const props = defineProps<Props>()

const { list } = toRefs(props)
</script>

<style scoped lang="scss">
.mofish {
  padding: 30px 0 50px;
  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
    }
    .logo {
      display: block;
    }
  }
  .list {
    background: #303334;
    border-radius: 6px;
    padding: 0 16px;
    min-height: 500px;
    .item {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 16px 0;
      border-bottom: 1px solid #3a3f41;
      &::after {
        border-bottom: 0;
      }
      .item-index {
        width: 50px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        padding-right: 20px;
        &.is-hot {
          color: #ffc107;
        }
      }
      .item-info {
        padding-right: 10px;
        flex: 1;
        .item-title {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        .item-desc {
          font-size: 12px;
          color: #d8d5cf;
          margin-bottom: 0.5rem;
        }
        .item-hot {
          font-size: 12px;
          color: rgb(206, 143, 143);
        }
      }
      .item-image {
        display: block;
        width: 150px;
        height: 100px;
        flex-shrink: 0;
        border-radius: 6px;
        object-fit: cover;
      }
    }
  }
}
</style>
