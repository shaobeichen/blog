<template>
  <div id="shot" v-cloak v-title data-title="摄影">
    <vheader></vheader>
    <div class="in-wra">
      <div class="in-wra-left"></div>
      <draggable :move="getdata" @update="datadragEnd">
        <div id="draggable2" class="btn-move ui-draggable ui-draggable-handle">
          <div class="in-moveline"></div>
          <div class="in-svg">
            <img src="../assets/logo.png" alt="" width="58" height="58">
          </div>
        </div>
      </draggable>
      <div class="in-wra-right"></div>
    </div>
    <vfooter></vfooter>
  </div>
</template>

<script>
  import vfooter from '../components/vfooter';
  import vheader from '../components/vheader';
  import draggable from 'vuedraggable';

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
      getdata(evt) {
        console.log(evt.draggedContext.element.id)
      },
      datadragEnd(evt) {
        console.log('拖动前的索引 :' + evt.oldIndex)
        console.log('拖动后的索引 :' + evt.newIndex)
      },
      drag(event) {
        dom = event.currentTarget;
      },
      drop(event) {
        event.preventDefault();
        console.log('我是target')
        console.log(event.srcElement.className)
        if (event.srcElement.className != 'select-item') {
          event.target.appendChild(dom);
          console.log(dom);
        } else {
          alert('该位置已被占用');
        }
      },
      allowDrop(event) {
        event.preventDefault(); //preventDefault() 方法阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
      },
      checkMove(evt) {
        console.log(111111111111111111111)
        console.log(evt.draggedContext.element.name)
        alert(1)
        return (evt.draggedContext.element.name !== 'apple');
      }
    },
    components: {
      vheader,
      vfooter,
      draggable
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
