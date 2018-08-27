<template>
  <div id="detail" v-cloak v-title :data-title="content.title">
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
            <img class="icon github"
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC/0lEQVRYR7VXUW7aQBDdMfwgIyU3iPNHWEuFEyQ9QekJGk7Q5ARJTlB6gtITBE7QcoJSyQv8lZ6gVMJ/mKmeZVvG7C42hZWQkHd39s3smzezJCoOKWWHma8cx+nkt2632ykR/VZKTauYpDKLfd+/Y+Z3QogeEXm2Pcy8FEKMiGgcBMH3Q/atAFqtller1Z6I6P6QId08Mw+jKHpZLBYApR1GAFLKeyL6cszBxT3M3FdKDXW2tACklEMi+nCKw1MbiIZSql+0uQfgHIfbQOwA8H3/WQjxdErPNbZegiDAOfHIAIDpQohv+Q3M/BiG4dB1XbAfRLwtCW6CkIdhOHJdF1z6VNj3Ns2QDICUcklEV6aF+A5iMnOHiJDzO8xmZi+dyxPO4NhSKXWdRcDC+AxpSc/3lukAYFGaGXEEDN5j6pwA4igQxKZer/8yeHg2ADhvs9lck5TyQUMShOirUuooBSw6Y0ptkJx834de77Eb6GwSWoUTlihPtACYGVXNWnSqAMBa3/dXQoiLwr4YAGuMTYIggC6cbBgivdICYOapUqp7stMtmWaKgAiCoFSvUBakIdLCSEJm7lbtbkxg0EUR0Q/dVSMN0b2g2ymOnaJR1lPduna7PXAc52NxjpnHRh0QQqw2m033f1PR4j205tGqhCBjFEXvjwWRtHSvRLTTwKaRiJUwydFMjJj5Z1yliN4kC5G/g/V6/Xm5XOL/weF53mWz2UTIH4QQl4YNcarHAG5ubnq1Wu01WThar9f9RqNxl/sWTyEizDyZzWYwvDdw10R0a/I4vwGRnc/no3xDko9CrAO6OmFrMCs0spnQZQCKep0elIBAC3WB64miqGfiRBL6P4fuKF9ndsQm7wEeGGEYdsvee3qoSXDS+WIEdV1xVp6TO3+ezWZjGICHhwDZACDtlFKDfIRM7wLjo+SQRJsAmLhj1PvkPYgHyk6jWhUASjs6atM70VpwElIh5fCLa3kFAH+hH/k3gI6cpSseCApRKd5h0SiyBjJuegsW1/8D9Ra7uNPQlKoAAAAASUVORK5CYII="/>
            <a :href="content.html_url" target="_blank" class="article-time">查看原文</a>
          </div>
          <div v-html="getMainDes" v-highlight></div>

          <div class="post-copyright">
            <div class="post-copyright__author">
              <span class="post-copyright-meta">作者:  </span>
              <span class="post-copyright-info">
                <a href="mailto:undefined">LeachZhou</a>
              </span>
            </div>
            <div class="post-copyright__type">
              <span class="post-copyright-meta">链接地址:  </span>
              <span class="post-copyright-info">
                <a :href="url">{{url}}</a>
              </span>
            </div>
            <div class="post-copyright__notice">
              <span class="post-copyright-meta">版权声明:  </span>
              <span class="post-copyright-info">除非另有说明，否则本博客中的所有文章均根据
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>
                获得许可.</span>
            </div>
          </div>


          <img class="donation" src="https://ws1.sinaimg.cn/large/e83d3594gy1ftrmtdm0o2j20pk08ctbu.jpg" alt="Donation">


          <div id="comments"></div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import marked from 'marked';
  import dayjs from 'dayjs';
  import friendlytimejs from 'friendlytimejs';
  import loading from '../components/loading';
  import {mapActions} from 'vuex';

  export default {
    name: 'detail',
    data() {
      return {
        content: {},
        id: this.$route.params.id,
        url: location.href,
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
      loading
    },
    updated() {
      this.$nextTick(function () {
        new Valine({
          av: AV,
          el: '#comments',
          appId: 'NWmkgn7YgE53xSj6963D2hE5-gzGzoHsz',
          appKey: 'UbveIK6lxebyHblry0eSJsWP',
          path: window.location.href,
          notify: false,
          verify: false,
          avatar: 'mm',
          placeholder: '麻烦留言的各位看客们，请你们把姓名填上，邮箱网址选填(｡◕ˇ∀ˇ◕)',
          highlight: true,
          visitor: true
        })
      })
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
    a {
      color: #38bafc;
    }
    .github {
      margin: 0 5px 0 0;
      padding: 2px;
    }
    blockquote {
      border-left: 5px solid #363159;
      padding: 0 0 0 10px;
    }
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
    h3 {
      position: relative;
      font-size: 16px;
      font-weight: bold;
      padding: 20px 30px;
      &:after {
        content: "";
        position: absolute;
        top: 27px;
        left: 5px;
        width: 5px;
        height: 5px;
        border: 2px solid #2db9ff;
        border-radius: 50%;
        background: #fff;
      }
    }
    img[src*="#width-full"] {
      max-width: 100%;
      width: 100%;
      border-radius: 5px;
    }
    img {
      height: auto;
      margin: 20px auto;
      max-width: 100%;
    }
    p {
      margin: 15px 0;
    }
    ul {
      margin-left: 20px;
      li {
        position: relative;
        padding-left: 30px;
        &:after {
          content: "";
          position: absolute;
          top: 7px;
          left: 5px;
          width: 5px;
          height: 5px;
          border: 2px solid #ff3524;
          border-radius: 50%;
          background: #fff;
        }
      }
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
    .post-copyright {
      margin-top: 20px;
      padding: 20px;
      border: 1px #7e8c8d dashed;
      .post-copyright-meta {
        font-weight: bold;
        color: #ff3524;
        margin-right: 5px;
      }
    }
  }
</style>
