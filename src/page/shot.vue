<template>
  <div id="shot" v-cloak v-title data-title="摄影">
    <vheader></vheader>
    <div id="inwra" class="in-wra">
      <div class="in-wra-left"></div>
      <div class="in-wra-right"></div>
      <div id="draggable2" class="btn-move ui-draggable ui-draggable-handle" @mousedown="drag">
        <div class="in-moveline"></div>
        <div class="in-svg">
          <img src="../assets/logo.png" alt="" width="58" height="58">
        </div>
      </div>
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
      return {}
    },
    created() {

    },
    mounted() {

    },
    methods: {
      drag: function (e, index) {
        let startX = e.clientX;//鼠标的x轴位置
        let Left = e.target.parentNode.children[0],//第一个元素
          leftW = Left.offsetWidth;//左边的宽度
        let Right = e.target.parentNode.children[1],//第二个元素
          rightW = Right.offsetWidth;//右边的宽度
        let draggableBtn = e.target.parentNode.children[2];//第三个元素
        let rightBPY = window.getComputedStyle(Right, null).backgroundPositionY;//右边的背景Y轴设置
        let rightBPX = window.getComputedStyle(Right, null).backgroundPositionX;//右边的背景X轴设置
        let draggableBtnLeft = window.getComputedStyle(draggableBtn, null).left;//拖动按钮left设置
        document.onmousemove = function (e) {
          e.preventDefault();
          var distX = e.clientX - startX;//鼠标x轴移动了多少，正数往右，负数往左
          Left.style.width = leftW + distX + 'px';
          Right.style.width = rightW - distX + 'px';
          Right.style.backgroundPosition = rightBPX.split('px')[0] - distX + 'px 0px';
          draggableBtn.style.transform = 'translate(0, 0)';
          draggableBtn.style.left = parseInt(draggableBtnLeft.split('px')[0]) + distX + 'px';
          if (parseInt(Left.style.width) >= 902) {
            Left.style.width = 902 + 'px';
          }
          if (parseInt(Left.style.width) <= 58) {
            Left.style.width = 58 + 'px';
          }
          if (parseInt(Right.style.width) >= 902) {
            Right.style.width = 902 + 'px';
          }
          if (parseInt(Right.style.width) <= 58) {
            Right.style.width = 58 + 'px';
          }
        }
        document.onmouseup = function () {
          document.onmousemove = null;
        }
      }
    },
    components: {
      vheader,
      vfooter,
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
      left: 0;
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
      cursor: move;
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
