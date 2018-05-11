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
        token: ['0f6560744b42121c3180d5','0684ff2aad37cc36fd']
      }
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
