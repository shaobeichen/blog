<template>
  <div id="articleList">
    <div class="layer">
      <ul>
        <li v-for="(item,index) in list">
          <div class="article-img-inner">
            <img :src="getMainImage[index]" alt="">
          </div>
          <div class="article-content"
               :style="{borderLeft:item.labels[0] ? `10px solid #${item.labels[0].color}`: ''}">
            <h1>{{item.title}}</h1>
            <vue-markdown v-highlight class="article-des" :source="item.body"></vue-markdown>
            <div class="article-label">
              <div class="article-time">{{item.updated_at}}</div>
              <label v-for="items in item.labels"
                     :style="{background:`#${items.color}`}">{{items.name}}</label>
            </div>
          </div>
        </li>
      </ul>
      <aside>
        <div class="img-inner">
          <img src="http://via.placeholder.com/240x240" alt="">
        </div>
        <div class="img-inner">
          <img src="http://via.placeholder.com/240x240" alt="">
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  import marked from 'marked'

  export default {
    name: "articleList",
    data() {
      return {
        list: [],
        token: ['0f6560744b42121c3180d5', '0684ff2aad37cc36fd'],
      }
    },
    mounted() {
      this.$axios.get(`https://api.github.com/repos/LeachZhou/blog/issues?access_token=${this.token[0]}${this.token[1]}`, {
        "page": 1,
        "per_page": 10,
        "filter": 'created'
      }).then((res) => {
        if (res.status == 200) {
          this.list = res.data;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    methods: {},
    computed: {
      getMainImage() {
        let arr = [];
        for (item of this.list) {
          arr.push(marked(item.body, {sanitize: true}).getElementsByTagName("img")[0]);
        }
        return arr;
      }
    },
    components: {
      VueMarkdown
    },
    props: []
  }
</script>

<style lang="less" scoped>
  .layer {
    position: relative;
    width: 960px;
    margin: 0 auto;
  }

  aside {
    position: absolute;
    right: 0;
    top: 50px;
    width: 240px;
    overflow: hidden;
    .img-inner {
      position: relative;
      width: 240px;
      height: 240px;
      margin-bottom: 20px;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        border-radius: 5px;
      }
    }
  }

  ul {
    padding-top: 50px;
    width: 700px;
    li {
      cursor: pointer;
      position: relative;
      display: block;
      border-radius: 5px;
      box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.12);
      background-color: #ffffff;
      overflow: hidden;
      margin-bottom: 20px;
      .article-img-inner {
        position: relative;
        float: left;
        display: block;
        width: 200px;
        height: 200px;
        overflow: hidden;
        object-fit: cover;
        img {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      }
      .article-content {
        position: relative;
        float: left;
        width: calc(100% - 200px);
        height: 200px;
        border-left: 10px solid #00b1ff;
        padding: 20px;
        h1 {
          font-size: 20px;
          height: 25px;
          font-weight: bold;
          margin-bottom: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .article-des {
          word-break: break-all;
          line-height: 1.5;
          color: #999999;
          height: 66px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        .article-label {
          position: absolute;
          left: 20px;
          bottom: 20px;
          .article-time {
            float: left;
            margin-right: 10px;
            line-height: 22px;
            color: #999999;
            font-size: 12px;
          }
          label {
            float: left;
            background: #00b1ff;
            color: #FFFFFF;
            padding: 5px 10px;
            border-radius: 4px;
            margin-right: 10px;
            font-size: 12px;
          }
        }

      }
    }
  }


</style>
