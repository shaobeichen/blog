<template>
  <div id="tools" v-cloak>
    <div class="layer">
      <div v-for="con in dataCon">
        <div class="panel-title card">{{con.title}}</div>
        <ul>
          <li v-for="item in con.list">
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
      </div>
    </div>
</template>

<script>

  export default {
    name: 'tools',
    data() {
      return {
        dataCon: [
          {
            title: '电脑工具',
            list: [
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
              {
                url: 'https://pc.qq.com/detail/0/detail_22760.html',
                img: 'https://pc3.gtimg.com/softmgr/logo/48/22760_48_1467171340.png',
                title: 'LICEcap',
                des: '屏幕录制工具/支持GIF格式'
              }
            ]
          },
          {
            title: 'Chrome插件',
            list: [
              {
                url: 'https://translate.google.com',
                img: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=783d326871f40ad115e4c0e56f1776e2/cdbf6c81800a19d8ce78815539fa828ba61e4662.jpg',
                title: '谷歌翻译',
                des: 'Google 的免费翻译服务'
              },
              {
                url: 'https://juejin.im/extension',
                img: 'https://gold-cdn.xitu.io/images/app/logo.png',
                title: '掘金',
                des: '前端/后端等开发者社区'
              },
              {
                url: 'https://adblockplus.org/',
                img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530795804366&di=be3071744d2b7f00a5742468e0fd012c&imgtype=0&src=http%3A%2F%2Fimage.coolapk.com%2Fdiscovery%2F2016%2F0204%2F381916_1454528942_8537.png',
                title: 'adblock plus',
                des: '过滤烦人广告/必备神器'
              },
              {
                url: 'http://ypsuperkey.meek.com.cn',
                img: 'http://ypsuperkey.meek.com.cn/images/favicon.png',
                title: '云盘万能钥匙',
                des: '自动识别百度网盘提取密码'
              }
            ]
          }
        ]
      }
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    components: {}
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
      overflow: auto;
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
