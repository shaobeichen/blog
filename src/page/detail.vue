<template>
  <div id="detail" v-cloak v-title :data-title="content.title">
    <vheader></vheader>
    <transition name="slide-fade">
      <loading v-if="loading"></loading>
      <div v-else class="layer">
        <div class="detailContent">
          <h1>{{content.title}}</h1>
          <div class="article-label">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-1"></use>
            </svg>
            <div class="article-time">更新时间：{{getTime}}</div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-2"></use>
            </svg>
            <label v-for="items in content.labels"
                   :style="{background:`#${items.color}`}">{{items.name}}</label>
          </div>
          <div v-html="getMainDes" v-highlight></div>

        </div>
      </div>
    </transition>

    <vfooter></vfooter>
  </div>
</template>

<script>
  import marked from 'marked';
  import dayjs from 'dayjs';
  import friendlytimejs from 'friendlytimejs';
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';
  import loading from '../components/loading';
  import {mapActions} from 'vuex';

  export default {
    name: 'detail',
    data() {
      return {
        content: {},
        id: this.$route.params.id,
        loading: true
      }
    },
    created() {
      let url = `https://api.github.com/repos/LeachZhou/blog/issues/${this.id}`;
      this.$axios.get(`${url}?access_token=${this.$store.state.githubToken[0]}${this.$store.state.githubToken[1]}`).then((res) => {
        if (res.status == 200) {
          this.content = res.data;
          this.loading = false;
        }
      }).catch((err) => {
        console.log(err);
        this.loading = false;
      });
    },
    mounted() {

    },
    computed: {
      getMainDes() {
        let a = this.content.body;
        if (typeof a !== 'undefined' && a !== 'null') {//解决marked出现参数为空的问题，实际a有值，但不加这判断就报错
          return marked(a);
        }
      },
      getTime() {
        return friendlytimejs.FriendlyTime(dayjs(this.content.updated_at).add(8, "hour").format('YYYY-MM-DD HH:mm:ss'), dayjs());
      }
    },
    methods: {},
    components: {
      vheader,
      vfooter,
      loading
    }
  }
</script>

<style lang="less">

  .layer {
    width: 960px;
    margin: 50px auto;
  }

  .detailContent {
    width: 100%;
    padding: 20px;
    background: #ffffff;
    border-radius: 5px;
    line-height: 1.5;
    blockquote {
      border-left: 5px solid #363159;
      padding: 0 0 0 10px;
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
    h3 {
      font-size: 16px;
      font-weight: bold;
    }
    img {
      height: auto;
      margin: 20px 0;
    }
    p {
      margin: 5px 0;
    }
    .article-label {
      overflow: auto;
      margin: 10px 0;
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
        padding: 3px 10px;
        border-radius: 4px;
        margin-right: 10px;
        font-size: 12px;
      }

    }
  }
</style>
