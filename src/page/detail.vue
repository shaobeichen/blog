<template>
  <div id="detail" v-cloak>
    <vheader></vheader>
    <!--<svg class="icon" aria-hidden="true">-->
    <!--<use xlink:href="#icon-shijian"></use>-->
    <!--</svg>-->
    <div class="layer">
      <div class="detailContent">
        <h1>{{content.title}}</h1>
        <div>{{getTime}}</div>
        <div v-html="getMainDes" v-highlight></div>
        <div></div>
      </div>
    </div>
    <theme></theme>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import marked from 'marked';
  import dayjs from 'dayjs';
  import friendlytimejs from 'friendlytimejs';
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';
  import theme from '../components/theme';
  import {mapActions} from 'vuex';
  import LightBox from 'vue-image-lightbox'

  export default {
    name: 'detail',
    data() {
      return {
        content: [],
        id: this.$route.params.id,
      }
    },
    created() {
      let url = `https://api.github.com/repos/LeachZhou/blog/issues/${this.id}`;
      this.$axios.get(`${url}?access_token=${this.$store.state.githubToken[0]}${this.$store.state.githubToken[1]}`).then((res) => {
        if (res.status == 200) {
          this.content = res.data;
        }
      }).catch((err) => {
        console.log(err);
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
    methods: {
      openGallery(index) {
        this.$refs.lightbox.showImage(index)
      }
    },
    components: {
      theme,
      vheader,
      vfooter,
      LightBox
    }
  }
</script>

<style lang="less">
  @import "../common/less/reset.less";
  @import "../common/less/global.less";

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
      width: 100%;
      height: auto;
      margin: 20px 0;
    }
    p {
      margin: 5px 0;
    }
  }
</style>
