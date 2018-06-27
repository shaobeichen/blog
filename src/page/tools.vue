<template>
  <div id="tools" v-cloak>
    <vheader></vheader>
    <div class="layer">
      <div class="panel-title card">热门推荐</div>
      <ul>
        <li v-for="item in list">
          <div class="card">
            <a class="card-heading link-tooltip" :title="item.url"
               :href="item.url"
               target="_blank">
              <span class="card-icon">
                  <img :src="item.img">
              </span>
              <span class="card-title">{{item.title}}</span>
            </a>
            <div class="card-body">
              {{item.des}}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';

  export default {
    name: 'tools',
    data() {
      return {
        list: [
          {
            url: 'http://ypsuperkey.meek.com.cn',
            img: 'http://ypsuperkey.meek.com.cn/images/favicon.png',
            title: '云盘万能钥匙',
            des: '自动识别百度网盘提取密码'
          },
          {
            url: 'https://zh.snipaste.com/',
            img: 'https://zh.snipaste.com/img/logo.svg',
            title: 'Snipaste屏幕截图',
            des: '极致截图贴图/编辑/标注工具'
          },
          {
            url: 'https://www.jb51.net/softjc/275066.html',
            img: 'http://8.pic.pc6.com/up/2017-9/2017971824211329430340.jpg',
            title: 'FastStoneCapture',
            des: '长截图/gif截图/自行探索'
          },
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    components: {
      vheader,
      vfooter
    }
  }
</script>

<style lang="less" scoped>
  .layer {
    width: 960px;
    margin: 50px auto;
    background-color: rgba(240, 240, 240, 0.69);
    border-radius: 5px;
    padding: 20px;
    overflow: auto;
    .panel-title {
      padding: 8px 12px;
      display: inline-block;
      margin-bottom: 16px;
      font-size: 12px;
      font-weight: 900;
      color: #666;
    }
    .card {
      box-shadow: 0px 2px 0px rgba(170, 170, 170, 0.1);
      background: #fff;
      margin-bottom: 20px;
      border-radius: 3px;
      margin-left: 2px;
      margin-right: 2px;
    }
    ul {
      margin-right: -10px;
      margin-left: -10px;
      li {
        float: left;
        width: 25%;
        position: relative;
        min-height: 1px;
        padding-right: 10px;
        padding-left: 10px;
        .card-heading {
          overflow: hidden;
          margin-bottom: 7px;
          display: block;
          cursor: pointer;
          padding: 10px 18px 0;
          color: #333;
          .card-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            float: left;
            display: block;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .card-title {
            display: block;
            padding-left: 40px;
            margin-top: 6px;
            font-weight: 700;
            font-size: 15px;
            color: inherit;
          }
        }
        .card-body {
          color: #666666;
          font-size: 12px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          margin-bottom: 2px;
          padding: 0 18px 12px 18px;
        }

      }
    }
  }

</style>
