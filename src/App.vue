<template>
  <div id="app">
    <theme-change :headtitle="one"></theme-change>
    <router-view/>
  </div>

</template>

<script>
  import dayjs from 'dayjs';
  import themeChange from './components/themeChange';

  export default {
    name: 'App',
    data() {
      return {
        token: ['0f6560744b42121c3180d5', '0684ff2aad37cc36fd']
      }
    },
    created() {
      console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
      console.log(dayjs().format('HH'));
      this.$options.methods.changeTheme();
    },
    mounted() {
      this.$axios.get(`api/repos/LeachZhou/blog/issues?access_token=${this.token[0]}${this.token[1]}`, {
        "page": 1,
        "per_page": 10,
        "filter": 'created'
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    },
    methods: {
      changeTheme(val = 'One') {
        document.body.className = `theme${val}`;
      }
    },
    components: {
      themeChange
    }

  }
</script>

<style lang="less">
  @import "common/less/reset.less";
  @import "common/less/theme/theme.less";
</style>
