<template>
  <div id="loading">
    <object data="../../static/images/Ripple-1s-200px.svg" type="image/svg+xml"></object>
  </div>
</template>

<script>
  export default {
    name: "loading"
  }
</script>

<style lang="less" scoped>
  object {
    position: absolute;
    left: 50%;
    top: 200px;
    transform: translate(-50%, 0);
  }
</style>
