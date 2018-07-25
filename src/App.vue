<template>
  <div id="app" v-cloak>
    <!--<music></music>-->
    <vheader></vheader>
    <loading v-if="loading"></loading>
    <div v-else>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
    <vfooter></vfooter>
  </div>

</template>

<script>
  // import music from './components/music';
  import loading from './components/loading';
  import {addScript} from './common/api/script';
  import vfooter from './components/vfooter';
  import vheader from './components/vheader';

  export default {
    name: 'App',
    data() {
      return {
        loading: true
      }
    },
    created() {
      // 电商网站
      addScript('//at.alicdn.com/t/font_698270_p4j7plzd7u.js');
      // 超级英雄
      // addScript('//at.alicdn.com/t/font_698241_zhmyjejv48c.js');
      // 中国新年
      // addScript('//at.alicdn.com/t/font_698219_attu958yklwvobt9.js');
      // 圣诞节
      // addScript('//at.alicdn.com/t/font_689514_maz2kwyo0zh69a4i.js');
      // 超市
      // addScript('//at.alicdn.com/t/font_689469_m3x6295wjfh41jor.js');
    },
    mounted() {
      this.loading = false;
    },
    components: {
      // music,
      loading,
      vfooter,
      vheader
    }
  }
</script>

<style lang="less">
</style>
