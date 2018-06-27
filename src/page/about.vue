<template>
  <div id="about" v-cloak v-title data-title="关于">
    <vheader></vheader>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';

  export default {
    name: 'about',
    data() {
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    components: {
      vheader,
      vfooter
    }
  }
</script>

<style lang="less">

</style>
