<template>
  <div id="themeChange">
    <ul>
      <li>
        <a href="javascript:;"></a>
      </li>
      <li>
        <a href="javascript:;"></a>
      </li>
      <li>
        <a href="javascript:;"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "themeChange",
    data() {
      return {
        themeVal: 'one'
      }
    },
    methods: {
      themeChange() {
        // this.themeVal
      }
    },
    props: ['themeNum']
  }
</script>

<style lang="less" scoped>
  li:nth-of-type(1) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(http://game.gtimg.cn/images/jx3/web201704/images/guide/kv-cur-bg.png) no-repeat;
      background-position: -10px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -10px -160px;
      }
    }
  }

  li:nth-of-type(2) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(http://game.gtimg.cn/images/jx3/web201704/images/guide/kv-cur-bg.png) no-repeat;
      background-position: -110px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -110px -160px;
      }
    }
  }

  li:nth-of-type(3) {
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 10px 0 12px;
    a {
      display: block;
      width: 100%;
      height: 100%;
      background: url(http://game.gtimg.cn/images/jx3/web201704/images/guide/kv-cur-bg.png) no-repeat;
      background-position: -210px -80px;
      transition: all 0.6s ease;
      &:hover {
        background-position: -210px -160px;
      }
    }
  }


</style>
