<template>
  <div id="index" v-cloak>
    <vheader></vheader>
    <h1 class="css127d190621611d">小桥酒馆</h1>
    <p class="css127d190621611d">小桥酒馆，既然来了，就小酌一杯吧~ </p>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';

  export default {
    name: 'index',
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    methods: {},
    components: {
      vfooter,
      vheader,
    }
  }
</script>

<style lang="less">

</style>
