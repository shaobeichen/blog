<template>
  <div id="imgmix" v-cloak>
      <div id="inwra" class="in-wra">
        <div class="in-wra-left"></div>
        <div class="in-wra-right"></div>
        <div id="draggable2" class="btn-move ui-draggable ui-draggable-handle" @mousedown="drag">
          <div class="in-moveline"></div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "shot",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    drag: function(e, index) {
      let startX = e.clientX; //鼠标的x轴位置
      let Left = e.target.parentNode.children[0], //左边
        leftW = Left.offsetWidth; //左边的宽度
      let Right = e.target.parentNode.children[1], //右边
        rightW = Right.offsetWidth; //右边的宽度
      let draggableBtn = e.target.parentNode.children[2], //拖动按钮
        draggableBtnW = draggableBtn.offsetWidth; //拖动按钮的宽度
      let inner = e.target.parentNode, //父元素
        innerW = inner.offsetWidth; //父元素的宽度
      let rightBPY = window.getComputedStyle(Right, null).backgroundPositionY; //右边的背景Y轴设置
      let rightBPX = window.getComputedStyle(Right, null).backgroundPositionX; //右边的背景X轴设置
      let draggableBtnLeft = window.getComputedStyle(draggableBtn, null).left; //拖动按钮left设置
      document.onmousemove = function(e) {
        e.preventDefault();
        let distX = e.clientX - startX; //鼠标x轴移动了多少，正数往右，负数往左
        Right.style.width = rightW - distX + "px";
        Right.style.backgroundPositionX =
          rightBPX.split("px")[0] - distX + "px";
        draggableBtn.style.left =
          parseInt(draggableBtnLeft.split("px")[0]) + distX + "px";
        let lrBor = innerW - draggableBtnW / 2; //边界 如960 - 60/2 = 930
        let draggableBtn2W = draggableBtnW / 2; //边界 60 / 2 = 30
        if (parseInt(Right.style.width) >= lrBor) {
          Right.style.width = lrBor + "px";
          Right.style.backgroundPositionX = "-" + draggableBtn2W + "px";
          draggableBtn.style.left = draggableBtn2W + "px";
        }
        if (parseInt(Right.style.width) <= draggableBtn2W) {
          Right.style.width = draggableBtn2W + "px";
          Right.style.backgroundPositionX = "-" + lrBor + "px";
          draggableBtn.style.left = lrBor + "px";
        }
      };
      document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      return false;
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.in-wra {
  position: relative;
  width: 960px;
  height: 960px;
  margin: 0 auto;
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
    width: 60px;
    z-index: 3;
    text-align: center;
    margin: 0 auto;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 50px;
      background: url(../assets/logo.png) no-repeat center center;
      background-size: cover;
    }
    .in-moveline {
      position: relative;
      margin-left: 29px;
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
