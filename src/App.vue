<template>
  <div id="app" v-cloak>
    <!--<music></music>-->
    <router-view/>
  </div>

</template>

<script>
  // import music from './components/music';
  import {addScript} from './common/api/script';

  export default {
    name: 'App',
    data() {
      return {}
    },
    created() {
      // 电商网站
      addScript('//at.alicdn.com/t/font_698270_1z69irdaxen.js');
      // 超级英雄
      // addScript('//at.alicdn.com/t/font_698241_zhmyjejv48c.js');
      // 中国新年
      // addScript('//at.alicdn.com/t/font_698219_attu958yklwvobt9.js');
      // 圣诞节
      // addScript('//at.alicdn.com/t/font_689514_maz2kwyo0zh69a4i.js');
      // 超市
      // addScript('//at.alicdn.com/t/font_689469_m3x6295wjfh41jor.js');
    },
    components: {
      // music
    }
  }
</script>

<style lang="less">
</style>
