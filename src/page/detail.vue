<template>
  <div id="detail" v-cloak>
    <vheader></vheader>
    <!--<svg class="icon" aria-hidden="true">-->
    <!--<use xlink:href="#icon-shijian"></use>-->
    <!--</svg>-->
    <div class="layer">
      <div class="detailContent">
        <h1>{{content.title}}</h1>
      </div>
    </div>
    <theme-change :time="this.$store.state.themeType" @timeEmit="_changeTheme"></theme-change>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import themeChange from '../components/themeChange';
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';
  import {mapActions} from 'vuex';

  export default {
    name: 'detail',
    data() {
      return {
        content: [],
        id: this.$route.params.id,
      }
    },
    created() {
      // console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
      if (!this.$store.state.themeType) {
        let hours = dayjs().format('HH');
        if (this.themeThree) {
          this._changeTheme(`Three`);
          this.changeThemeType(`Three`);
        } else {
          if ((hours >= 18 && hours <= 23) || (hours >= 0 && hours < 6)) {
            this._changeTheme(`Three`);
            this.changeThemeType(`Three`);
          } else if (hours >= 6 && hours < 12) {
            this._changeTheme(`One`);
            this.changeThemeType(`One`);
          } else if (hours >= 12 && hours < 18) {
            this._changeTheme(`Two`);
            this.changeThemeType(`Two`);

          }
        }
      }
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
    methods: {
      //使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用
      ...mapActions(['changeThemeType']),
      /**
       * 切换主题
       * @param val One代表早上 Two代表下午 Three代表晚上
       */
      _changeTheme(val = 'One') {
        document.body.className = `theme${val}`;
        this.changeThemeType(val);
      }
    },
    components: {
      themeChange,
      vheader,
      vfooter
    }
  }
</script>

<style lang="less">
  @import "../common/less/reset.less";
  @import "../common/less/theme/theme.less";
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
    h1 {
      font-size: 20px;
      font-weight: bold;
    }
  }
</style>
