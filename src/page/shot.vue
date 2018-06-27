<template>
  <div id="shot" v-cloak v-title data-title="摄影">
    <vheader></vheader>
    <div class="in-wra">
      <div class="in-wra-left"></div>
      <div id="draggable2" class="btn-move ui-draggable ui-draggable-handle" draggable="true">
        <div class="in-moveline"></div>
        <div class="in-svg">
          <img src="../assets/logo.png" alt="" width="58" height="58">
        </div>
      </div>
      <div class="in-wra-right"></div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';

  export default {
    name: 'shot',
    data() {
      return {

      }
    },
    created() {

    },
    mounted() {
      document.getElementById("draggable2").addEventListener("dragstart", function (event) {
        console.log(event)
      }, false);
      document.getElementById("draggable2").addEventListener("dragenter", function (event) {
        // 阻止浏览器默认事件
        event.preventDefault();
      }, false);
      document.getElementById("draggable2").addEventListener("dragover", function (event) {
        // 阻止浏览器默认事件
        event.preventDefault();
      }, false);
      document.getElementById("draggable2").addEventListener("drop", function (event) {
        event.preventDefault();
        console.log(event)
      }, false);
    },
    methods: {},
    components: {
      vheader,
      vfooter
    }
  }
</script>

<style lang="less">
  .in-wra {
    position: relative;
    width: 960px;
    height: 960px;
    margin: 100px auto;
    .in-wra-left {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      z-index: 1;
      width: 960px;
      height: 960px;
      background: url(../../static/images/kv1_a.jpg) no-repeat center center;
      background-size: cover;
      background-position: 0px 0px;
    }

    .in-wra-right {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      width: 481px;
      height: 960px;
      background: url(../../static/images/kv1_b.jpg) no-repeat center center;
      background-size: cover;
      background-position: -479px 0px;
    }

    .btn-move {
      cursor: crosshair;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      height: 100%;
      width: 58px;
      z-index: 3;
      text-align: center;
      margin: 0 auto;
      .in-moveline {
        margin-left: 27px;
        width: 1px;
        height: 100%;
        background-color: #fff;
      }
      .in-svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

</style>
