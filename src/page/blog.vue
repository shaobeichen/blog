<template>
  <div id="blog" v-cloak>
    <vheader></vheader>
    <!--<svg class="icon" aria-hidden="true">-->
    <!--<use xlink:href="#icon-shijian"></use>-->
    <!--</svg>-->
    <article-list></article-list>
    <theme-change :time="this.$store.state.themeType" @timeEmit="_changeTheme"></theme-change>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
  import themeChange from '../components/themeChange';
  import articleList from '../components/articleList';
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';
  import {mapActions} from 'vuex';

  export default {
    name: 'blog',
    data() {
      return {}
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
      articleList,
      vheader,
      vfooter
    }
  }
</script>

<style lang="less">
  @import "../common/less/reset.less";
  @import "../common/less/theme/theme.less";
  @import "../common/less/global.less";

</style>
