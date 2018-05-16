<template>
  <div id="themeChange">
    <ul>
      <li :class="{ 'timeActive': time == `One` }">
        <a href="javascript:;" @click="changeTheme(`One`)"></a>
      </li>
      <li :class="{ 'timeActive': time == `Two` }">
        <a href="javascript:;" @click="changeTheme(`Two`)"></a>
      </li>
      <li :class="{ 'timeActive': time == `Three` }">
        <a href="javascript:;" @click="changeTheme(`Three`)"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "themeChange",
    data() {
      return {}
    },
    methods: {
      changeTheme(val) {
        document.body.className = `theme${val}`;
        this.time = val;
      }
    },
    props: ['time']
  }
</script>

<style lang="less" scoped>
  ul {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }

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

  li:nth-of-type(1).timeActive {
    a {
      background-position: -10px -160px;
    }
  }

  li:nth-of-type(2).timeActive {
    a {
      background-position: -110px -160px;
    }
  }

  li:nth-of-type(3).timeActive {
    a {
      background-position: -210px -160px;
    }
  }

</style>
