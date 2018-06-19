<template>
  <div id="articleList">
    <div class="layer">
      <ul>
        <li v-for="(item,index) in list">
          <router-link :to="{ name:'detail',params:{ id:item.number } }">
            <div class="article-img-inner">
              <img :src="getMainImage[index]" alt="">
            </div>
            <div class="article-content"
                 :style="{borderLeft:item.labels[0] ? `10px solid #${item.labels[0].color}`: ''}">
              <h1>{{item.title}}</h1>
              <p class="article-des" v-html="getMainDes[index]"></p>
              <div class="article-label">
                <div class="article-time">{{getTime[index]}}</div>
                <label v-for="items in item.labels"
                       :style="{background:`#${items.color}`}">{{items.name}}</label>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <aside>
        <div class="img-inner">
          <img
            src="https://user-gold-cdn.xitu.io/152681974911209dda5809b6931f7edf46818ea0884e0.jpg?imageView2/1/q/85/format/webp/interlace/1"
            alt="">
        </div>
        <div class="img-inner">
          <img src="http://via.placeholder.com/240x240" alt="">
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import friendlytimejs from 'friendlytimejs'
  import dayjs from 'dayjs'

  export default {
    name: "articleList",
    data() {
      return {
        list: [],
      }
    },
    mounted() {
      let url = 'https://api.github.com/repos/LeachZhou/blog/issues';
      let page = 1;
      let per_page = 10;
      let filter = 'created';
      let sort = 'updated';
      this.$axios.get(`${url}?access_token=${this.$store.state.githubToken[0]}${this.$store.state.githubToken[1]}&&labels=已审核&&page=${page}&&per_page=${per_page}&&filter=${filter}&&sort=${sort}`).then((res) => {
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
        for (let item of this.list) {
          if (marked(item.body, {sanitize: true}).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)) {
            arr.push(marked(item.body, {sanitize: true}).match(/\bsrc\b\s*=\s*[\'\"]?([^\'\"]*)[\'\"]?/)[1]);
          } else {
            arr.push('http://via.placeholder.com/200x200');
          }
        }
        return arr;
      },
      getMainDes() {
        let arr = [];
        for (let item of this.list) {
          arr.push(marked(item.body, {sanitize: true}).replace(/<[^>]+>/g, "").substring(0, 200));
        }
        return arr;
      },
      getTime() {
        let arr = [];
        for (let item of this.list) {
          arr.push(friendlytimejs.FriendlyTime(dayjs(item.updated_at).add(8, "hour").format('YYYY-MM-DD HH:mm:ss'), dayjs()));
        }
        return arr;
      }
    },
    components: {},
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
        width: 240px;
        height: 240px;
        border-radius: 5px;
        object-fit: cover;
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
          width: 200px;
          height: 200px;
          object-fit: cover;
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
