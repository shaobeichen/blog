<template>
  <div id="app" v-cloak>
    <article-list></article-list>
    <theme-change :time="time" @timeEmit="_changeTheme"></theme-change>
    <music></music>
    <vfooter></vfooter>
    <router-view/>
  </div>

</template>

<script>
  import dayjs from 'dayjs';
  import themeChange from './components/themeChange';
  import articleList from './components/articleList';
  import music from './components/music';
  import vfooter from './components/vfooter';

  export default {
    name: 'App',
    data() {
      return {
        time: '',
        test: true
      }
    },
    created() {
      // console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
      let hours = dayjs().format('HH');
      if (this.test) {
        this._changeTheme(`Three`);
        this.time = `Three`;
      } else {
        if ((hours >= 18 && hours <= 23) || (hours >= 0 && hours < 6)) {
          this._changeTheme(`Three`);
          this.time = `Three`;
        } else if (hours >= 6 && hours < 12) {
          this._changeTheme(`One`);
          this.time = `One`;
        } else if (hours >= 12 && hours < 18) {
          this._changeTheme(`Two`);
          this.time = `Two`;
        }
      }
    },
    mounted() {

    },
    methods: {
      /**
       * 切换主题
       * @param val One代表早上 Two代表下午 Three代表晚上
       */
      _changeTheme(val = 'One') {
        document.body.className = `theme${val}`;
        this.time = val;
      }

    },
    components: {
      themeChange,
      articleList,
      music,
      vfooter
    }
  }
</script>

<style lang="less">
  @import "common/less/reset.less";
  @import "common/less/theme/theme.less";
  @import "common/less/global.less";


</style>
