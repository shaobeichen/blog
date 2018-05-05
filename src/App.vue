<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        token: '2b4752974261f38cdc0a' + '60af3bc2a4a138ae7c5c'
      }
    },
    mounted() {
      this.$axios.get("https://api.github.com/repos/LeachZhou/leachzhou.github.io/issues?access_token=" + this.token, {
        "page": 1,
        "per_page": 10,
        "filter": 'created'
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    },
    methods: {},
    components: {}

  }
</script>

<style>
  @import "common/less/global.less";

  #app {
    max-width: 2560px;
    margin: 0 auto;
    width: 100%;
    min-height: 1440px;
    background: #154f6e url('assets/images/wallpaper_mikael_gustafsson.png') no-repeat bottom;
    /*linear-gradient(to right, red,orange)*/
  }
</style>
