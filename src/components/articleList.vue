<template>
  <div id="articleList">
    <transition name="slide-fade">
      <loading v-if="loading"></loading>
      <div v-else class="layer">
        <ul>
          <li v-for="(item,index) in list" :key="index">
            <router-link :to="{ name:'detail',params:{ id:item.number } }" target="_blank" >
              <div class="article-img-inner">
                <img :src="getMainImage[index]" alt="">
              </div>
              <div class="article-content"
                   :style="{borderLeft:item.labels[0] ? `10px solid #${item.labels[0].color}`: ''}">
                <h1>{{item.title}}</h1>
                <p class="article-des" v-html="getMainDes[index]"></p>
                <div class="article-label">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-1"></use>
                  </svg>
                  <div class="article-time">更新时间：{{getTime[index]}}</div>
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-2"></use>
                  </svg>
                  <label v-for="(items,index) in item.labels"
                         :style="{background:`#${items.color}`}" :key="index">{{items.name}}</label>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <pagination :page-no="pageNo" :current.sync="currentPage"></pagination>
        <aside>
          <div class="author-inner">
            <img class="author-img" src="../../static/images/author.jpg" alt="">
            <h3>LeachZhou</h3>
            <p>前端工程师/健身/阅读/心理学/设计/目前居住在上海杨浦</p>
            <br>
            <p>你可以在这里找到我，未完待续...</p>
            <ul>
              <li>
                <a href="https://github.com/LeachZhou" target="_blank">
                  <img src="../../static/images/github.png" alt="">
                </a>
              </li>
            </ul>
          </div>
          <!--<div class="img-inner">-->
          <!--<img src="http://via.placeholder.com/240x240" alt="">-->
          <!--</div>-->
        </aside>
      </div>
    </transition>
  </div>
</template>

<script>
  import marked from 'marked'
  import friendlytimejs from 'friendlytimejs'
  import dayjs from 'dayjs'
  import loading from '../components/loading'
  import pagination from '../components/pagination'

  export default {
    name: "articleList",
    data() {
      return {
        list: [],
        loading: true,
        pageNo: 1,//总页数
        currentPage: 1//当前页
      }
    },
    mounted() {
      this.requestData(this.currentPage);
    },
    watch: {
      //currentPage改变执行requestData
      currentPage: function (val) {
        this.loading = true;
        this.requestData(val);
      }
    },
    methods: {
      requestData(currentPage) {
        // 在这里使用ajax或者fetch将对应页传过去获取数据即可
        let url = 'https://api.github.com/repos/LeachZhou/blog/issues';
        let per_page = 4;//每页4条数据
        let filter = 'created';
        let sort = 'updated';
        this.$axios.get(`${url}?access_token=${this.$store.state.githubToken[0]}${this.$store.state.githubToken[1]}&&labels=已审核&&filter=${filter}&&sort=${sort}`).then((res) => {
          if (res.status === 200) {
            this.pageNo = Math.ceil(res.data.length / 4);
          }
        }).catch((err) => {
          console.log(err);
        });
        this.$axios.get(`${url}?access_token=${this.$store.state.githubToken[0]}${this.$store.state.githubToken[1]}&&labels=已审核&&page=${currentPage}&&per_page=${per_page}&&filter=${filter}&&sort=${sort}`).then((res) => {
          if (res.status === 200) {
            this.list = res.data;
            this.loading = false;
          }
        }).catch((err) => {
          console.log(err);
          this.loading = false;
        });
      }
    },
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
    components: {
      loading,
      pagination
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
    .author-inner {
      position: relative;
      background: #ffffff;
      width: 240px;
      margin-bottom: 20px;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      box-shadow: 0 19px 35px -22px rgb(255, 255, 255);
      .author-img {
        width: 150px;
        height: 150px;
        display: block;
        border-radius: 50%;
        margin: 0 auto;
        object-fit: cover;
      }
      h3 {
        margin: 20px 0;
      }
      p {
        color: #7e8c8d;
        font-size: 12px;
        line-height: 1.5;
      }
      ul {
        text-align: center;
        overflow: auto;
        width: 100%;
        padding-top: 20px;
        li {
          /*float: left;*/
          margin: 0 auto;
          width: 50px;
          height: 50px;
          background: #dedede;
          border-radius: 50%;
          &:hover {
            transition: all .6s ease;
            transform: translateX(0);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
          img {
            margin: 9px 0;
          }
        }
      }
    }
    .img-inner {
      position: relative;
      background: #ffffff;
      width: 240px;
      margin-bottom: 20px;
      border-radius: 5px;
      img {
        width: 240px;
        height: 240px;
        display: block;
        border-radius: 5px;
        object-fit: cover;
      }
    }
  }

  ul {
    padding-top: 50px;
    width: 700px;
    li {
      position: relative;
      display: block;
      border-radius: 5px;
      box-shadow: 0 19px 35px -22px rgb(255, 255, 255);
      background-color: #ffffff;
      overflow: hidden;
      margin-bottom: 20px;
      transition: all .6s ease;
      &:hover {
        transition: all .6s ease;
        box-shadow: 0 8px 11px -6px rgba(0, 0, 0, .5);
        transform: translateX(10px);
      }
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
          color: #475354;
        }
        .article-des {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          word-break: break-all;
          line-height: 1.5;
          color: #999999;
          font-size: 14px;
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
            border-radius: 15px;
            margin-right: 10px;
            font-size: 12px;
          }

        }

      }
    }
  }


</style>
