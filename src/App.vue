<template>
  <div id="app">
    <theme-change :time="time"></theme-change>
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
        token: ['0f6560744b42121c3180d5', '0684ff2aad37cc36fd'],
        time: ''
      }
    },
    created() {
      console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'));
      let hours = dayjs().format('HH');
      if ((hours >= 18 && hours <= 23) || (hours >= 0 && hours < 6)) {
        this.$options.methods.changeTheme(`Three`);
        this.time = `Three`;
      } else if (hours >= 6 && hours < 12) {
        this.$options.methods.changeTheme(`One`);
        this.time = `One`;
      } else if (hours >= 12 && hours < 18) {
        this.$options.methods.changeTheme(`Two`);
        this.time = `Two`;
      }
    },
    mounted() {
      this.$axios.get(`https://api.github.com/repos/LeachZhou/blog/issues?access_token=${this.token[0]}${this.token[1]}`, {
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
