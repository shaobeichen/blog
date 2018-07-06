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
            title: '网站导航',
            list: [
              {
                url: 'https://www.qiniu.com/',
                img: 'https://qiniu.staticfile.org/static/images/qiniu_logo.5249e634.png',
                title: '七牛云',
                des: '海量存储/加速传输'
              },
              {
                url: 'http://oatthegoat.co.nz/',
                img: 'http://oatthegoat.co.nz/20180703_222016Z/favicon.ico',
                title: 'Oat the Goat',
                des: '一个Canvas+剧情的网站'
              },
            ]
          },
          {
            title: '优秀博客',
            list: [
              {
                url: 'https://molunerfinn.com/',
                img: 'https://molunerfinn.com/favicon.ico',
                title: 'MARKSZのBlog',
                des: 'Electron-vue/Nodejs'
              },
              {
                url: 'http://www.daiwei.org/',
                img: 'http://www.daiwei.org/index/images/logo/favicon.ico',
                title: '未曾遗忘的青春',
                des: '戴伟的个人网站/前端'
              },
              {
                url: 'https://w3ctrain.com/',
                img: 'https://w3ctrain.com/favicon.ico',
                title: 'w3cTrain',
                des: 'Wave 动画/弹幕效果'
              },
              {
                url: 'https://diygod.me/',
                img: 'https://diygod.me/images/DIYgod.jpg',
                title: 'DIYgod',
                des: '人气网红/bilibili'
              },
              {
                url: 'https://www.zhangxinxu.com/',
                img: 'https://www.zhangxinxu.com/favicon.ico',
                title: '张鑫旭',
                des: 'CSS大佬/毋庸置疑'
              },
              {
                url: 'http://elevenbeans.github.io/',
                img: 'https://raw.githubusercontent.com/elevenBeans/Grocery/master/elevenbeans-black.png',
                title: 'Elevenbeans blog',
                des: '下拉刷新/设计模式'
              },
              {
                url: 'http://axetroy.xyz/',
                img: 'https://avatars1.githubusercontent.com/u/9758711?v=3',
                title: 'Axetroy NeverLand',
                des: 'github-api/前端工程化'
              },
              {
                url: 'https://hacknical.com/resume/r1peg776b?locale=zh',
                img: 'https://hacknical.com/favicon/apple-icon-60x60.png',
                title: '彭立衡的简历',
                des: '有可以学习的地方/前端'
              },
            ]
          },
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
              },
              {
                url: 'https://github.com/Molunerfinn/PicGo',
                img: 'https://ws1.sinaimg.cn/large/8700af19ly1fmd6ou9eynj2046046glj',
                title: 'PicGo',
                des: '基于Vue开发的图床神器'
              },
              {
                url: 'http://www.fancynode.com.cn/pxcook',
                img: 'http://www.fancynode.com.cn/siteicon/PxCook.png',
                title: 'PxCook',
                des: '最高效易用的自动标注工具'
              },
              {
                url: 'http://www.fancynode.com.cn/pxcook',
                img: 'https://www.12306bypass.com/404/favicon.ico',
                title: '12306Bypass',
                des: '分流抢票神器/其他抢票都是垃圾'
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
            float: left;
            display: block;
            img {
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .card-title {
            display: block;
            padding-left: 10px;
            margin-top: 6px;
            font-weight: 700;
            font-size: 15px;
            color: inherit;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
