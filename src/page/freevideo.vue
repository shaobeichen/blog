<template>
  <div id="freevideo" v-cloak v-title data-title="免费看VIP电影">
    <div class="video-banner">
      <img src="../../static/images/video-banner.png" alt="">
    </div>
    <div class="layer">
      <select name="" id="" v-model="selectVal">
        <option :value="item.url" v-for="item in list.list">{{item.name}}</option>
      </select>
      <input type="text" placeholder="输入视频连接地址" v-model="inputVal">
      <button @click="go(selectVal)">确定</button>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'freevideo',
    data() {
      return {
        list: {},
        selectVal: '',
        inputVal: '',
      }
    },
    created() {
      this.$axios.get(`../../static/vlist.json`).then((res) => {
        if (res.status == 200) {
          this.list = res.data;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    mounted() {

    },
    methods: {
      go(val) {
        window.open(`${val}${this.inputVal}`);
      }
    },
    components: {}
  }
</script>

<style lang="less" scoped>
  .video-banner {
    width: 960px;
    margin: 0 auto;
  }

  .layer {
    width: 960px;
    text-align: center;
    margin: 50px auto;
    overflow: auto;
  }

  select {

  }
</style>
