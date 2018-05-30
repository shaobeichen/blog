<template>
  <div id="footer">
    <span id="busuanzi_container_site_uv">本站访客数 <span id="busuanzi_value_site_uv"></span> 人次</span>
    <span id="busuanzi_container_site_pv">本站总访问量 <span id="busuanzi_value_site_pv"></span> 次</span>
  </div>

</template>

<script>
  export default {
    name: "footer"
  }
</script>

<style scoped>
  #footer {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #ffffff;
    font-size: 14px;
  }
</style>
