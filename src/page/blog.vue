<template>
  <div id="blog" v-cloak v-title data-title="博客">
    <vheader></vheader>
    <article-list></article-list>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import articleList from '../components/articleList';
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';

  export default {
    name: 'blog',
    data() {
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {},
    components: {
      articleList,
      vheader,
      vfooter
    }
  }
</script>

<style lang="less">

</style>
