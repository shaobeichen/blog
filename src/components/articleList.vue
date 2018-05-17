<template>
  <div id="articleList">
    <div class="article-title">这里是文章</div>
    这里是文章这里是文章这里是文章这里是文章
  </div>
</template>

<script>
  export default {
    name: "articleList",
    data() {
      return {
        token: ['0f6560744b42121c3180d5', '0684ff2aad37cc36fd'],
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
    methods: {},
    props: []
  }
</script>

<style lang="less" scoped>
  .article-title {
    font-size: 36px;
    font-weight: bold;
  }

</style>
