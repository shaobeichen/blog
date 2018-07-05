<template>
  <div id="blog" v-cloak v-title data-title="博客">
    <article-list></article-list>
  </div>
</template>

<script>
  import articleList from '../components/articleList';

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
    }
  }
</script>

<style lang="less">

</style>
